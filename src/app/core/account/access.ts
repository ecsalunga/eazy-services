import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { DataLayer, DataAccess } from '../data';
import { StampHelper, UtilityHelper } from '../helpers';
import { Codes, AccessMode, Account, Update } from '../models';
import { MergeMapToSubscriber } from 'rxjs/operators/mergeMapTo';

export class Access {
    private _da: DataAccess;
    private _dl: DataLayer;
    private _stamp: StampHelper;
    private _utility: UtilityHelper;
    private _fireAuth: AngularFireAuth;

    constructor(da: DataAccess, dl: DataLayer, stamp: StampHelper, fireAuth: AngularFireAuth, utility: UtilityHelper) {
        this._da = da;
        this._dl = dl;
        this._stamp = stamp;
        this._fireAuth = fireAuth;
        this._utility = utility;

        this.init();
    }

    public Signup(email: string, password: string) {
        this._fireAuth.auth
            .createUserWithEmailAndPassword(email, password)
            .then(value => {
                this._utility.Display("Account Created!");
            })
            .catch(err => {
                console.log(err);
                this._utility.Display("Create account failed.");
            });
    }

    public LogIn(email: string, password: string) {
        this._fireAuth.auth
            .signInWithEmailAndPassword(email, password)
            .catch(err => {
                console.log(err);
                this._utility.Display("Login failed.");
            });
    }

    public LogInWithFacebook() {
        this._fireAuth.auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider());
    }

    public LogOut() {
        this._fireAuth.auth.signOut();
    }

    public MapFBUser() {
        if (this._dl.State.IsFBUserLoaded) {
            if (this._dl.State.IsUserLoaded && this._dl.UserItems.some(m => m.UID == this._dl.FBUser.uid)) {
                this._dl.State.AccessMode = AccessMode.User;

                let user = this._dl.UserItems.find(u => u.UID == this._dl.FBUser.uid);
                this.updateAccess(user);
                this._da.UserItems.Save(user, false);
            }
            else if (this._dl.State.IsMemberLoaded && this._dl.MemberItems.some(m => m.UID == this._dl.FBUser.uid)) {
                this._dl.State.AccessMode = AccessMode.Member;

                let member = this._dl.MemberItems.find(m => m.UID == this._dl.FBUser.uid);
                this.updateAccess(member);
                this._da.MemberItems.Save(member, false);
            }
        }

        if (this._dl.State.AccessMode == AccessMode.Guest
            && this._dl.State.IsFBUserLoaded
            && this._dl.State.IsMemberLoaded
            && this._dl.State.IsUserLoaded) {
            let member = new Account();
            member.UID = this._dl.FBUser.uid;
            member.Name = this._dl.FBUser.displayName;
            member.Email = this._dl.FBUser.email;
            member.ImageUrl = Codes.DefaultPhoto;
            member.Contact1 = this._dl.FBUser.phoneNumber;
            member.JoinDate = this._stamp.Timestamp;
            member.ActionDate = this._stamp.Timestamp;
            this._da.MemberItems.Save(member);
        }
    }

    private updateAccess(item: Account) {
        this._dl.State.PhotoUrl = item.ImageUrl;
        item.ActionDate = this._stamp.Timestamp;
        this._dl.State.Account = item;
    }

    private init() {
        this._dl.State.SessionCode = this._stamp.Timestamp;
        this._dl.Loaded.subscribe(update => {
            if (update.Code == Codes.MemberItems) {
                this._dl.State.IsMemberLoaded = true;
                this.MapFBUser();
            }
            else if (update.Code == Codes.UserItems) {
                this._dl.State.IsUserLoaded = true;
                this.MapFBUser();
            }
        });

        this._fireAuth.authState.subscribe(user => {
            this._dl.FBUser = user;
         
            if (user == null) {
                this._dl.State.AccessMode = AccessMode.Guest;
                this._dl.State.PhotoUrl = Codes.DefaultPhoto;
                this._dl.State.IsFBUserLoaded = false;
            }
            else {
                this._dl.State.IsFBUserLoaded = true;
                this.MapFBUser();
            }
            
            this._dl.Publish(new Update(Codes.UserChanged, user));
        });
    }
}
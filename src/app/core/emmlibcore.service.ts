import { Injectable, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { Observable, Subscription, Subscriber } from 'rxjs/Rx';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { MatSnackBar } from '@angular/material';

import { LoadHelper, StampHelper, UtilityHelper } from './helpers';
import { LoadRef, Codes, Update, AccessMode, MemberItem, CommandType, CommandItem } from './models';
import { DelayDecorator } from './decorators';
import { DataAccess, DataLayer, DataItems } from './data';

@Injectable()
export class EmmLibCoreService {
    public Changed: Observable<Update>;

    private _commandItems: DataItems<CommandItem>;
    private _updater: Subscriber<Update>;
    private _loader: LoadHelper;
    private _stamp: StampHelper;
    private _utility: UtilityHelper;
    private _da: DataAccess;
    private _dl: DataLayer;

    private _fireStorage: firebase.storage.Reference = firebase.storage().ref();

    constructor(private resolver: ComponentFactoryResolver, private fireDB: AngularFireDatabase, private _fireAuth: AngularFireAuth, private _snackBar: MatSnackBar) { 
        this._loader = new LoadHelper(resolver);
        this._utility = new UtilityHelper();
        this._stamp = new StampHelper();
        this._dl = new DataLayer();
        this._da = new DataAccess(fireDB, this._dl);
        this.Changed = new Observable(obs => { this._updater = obs; });
        
        this._commandItems = new DataItems<CommandItem>(fireDB, this._dl, Codes.CommandItems, "/command/items", true);
        this._commandItems.Load();

        this.init();
    }

    public SetContainer(viewChild: ViewContainerRef) {
        this._loader.SetMainContainer(viewChild);
    }

    public SetImageSelector(imageSelector: HTMLInputElement) {
        this._loader.SetImageSelector(imageSelector);
    }

    public Upload(path: string, file: File) {
        let fRef = this._fireStorage.child(path);
        fRef.put(file).then(snapshot => {
            this.Publish(new Update(Codes.FileUploaded, snapshot));
        });
    }

    public Display(message: string, action: string = "Done", duration: number = 5000) {
        this._snackBar.open(message, action, { duration: duration });
    }

    public Signup(email: string, password: string) {
        this._fireAuth.auth
        .createUserWithEmailAndPassword(email, password)
        .then(value => {
            this.Display("Account Created!");
        })
        .catch(err => {
            console.log(err);
            this.Display("Create account failed.");
        });
    }

    public LogInWithFacebook() {
        this._fireAuth.auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider());
    }

    public LogIn(email: string, password: string) {
        this._fireAuth.auth
        .signInWithEmailAndPassword(email, password)
        .catch(err => {
            console.log(err);
            this.Display("Login failed.");
        });
    }

    public LogOut() {
        this._fireAuth.auth.signOut();
    }

    public SelectImage() {
        this._loader.SelectImage();
    }

    public Publish(update: Update) {
        if(this._updater != null)
            this._updater.next(update);
    }

    public Execute(cmd: CommandItem) {
        this._commandItems.Save(cmd);
    }

    public Load(selector: string): LoadRef;
    public Load(selectors: Array<string>): Array<LoadRef>;
    public Load(selector: string, viewChild: ViewContainerRef): LoadRef;
    public Load(param: string | Array<string>, viewChild?: ViewContainerRef): any
    {
        if(param instanceof Array)
            return this._loader.LoadComponents(param);
        else if(viewChild != null)
            return this._loader.LoadComponentToView(param, viewChild);
        else
            return this._loader.LoadComponent(param);
    }

    public get DA(): DataAccess {
        return this._da;
    }

    public get DL(): DataLayer {
        return this._dl;
    }

    public get Utils(): UtilityHelper {
        return this._utility;
    }

    public get Stamp(): StampHelper {
        return this._stamp;
    }

    private init() {
        this.DL.State.SessionCode = this.Stamp.Timestamp;

        this._dl.Loaded.subscribe(update => {
            if(update.Code == Codes.MemberItems && !this.DL.State.IsMemberLoaded) {
                this.DL.State.IsMemberLoaded = true;
                this.mapFBUser();
            }
            else if(update.Code == Codes.UserItems && !this.DL.State.IsUserLoaded) {
                this.DL.State.IsUserLoaded = true;
                this.mapFBUser();
            }

            if(update.Code == Codes.CommandItems) {
                this.DL.CommandItems.forEach(cmd => {
                    if(cmd.Type == CommandType.Control) {
                        if(cmd.Data == this.DL.FBUser.uid && this.DL.State.SessionCode != cmd.ControlCode)
                            this.DL.State.ControlCode = cmd.ControlCode;
                    }
                    else if(cmd.Type == CommandType.View && this.DL.State.ControlCode == cmd.ControlCode) {
                        this.Load(cmd.Data);
                    }

                    if(this.DL.State.SessionCode == cmd.ControlCode)
                        this.deleteCommand(cmd.UID);
                });
            }

            this.Publish(update);
        });

        this._fireAuth.authState.subscribe(user => {
            this.DL.FBUser = user;
            this.DL.State.IsFBUserLoaded = true;

            this.mapFBUser();
            this.Publish(new Update(Codes.UserChange, user));
        });
    }

    private mapFBUser() {
        if(this.DL.State.AccessMode == AccessMode.Guest && this.DL.State.IsFBUserLoaded) {
            if(this.DL.State.IsUserLoaded && this.DL.UserItems.some(m => m.UID == this.DL.FBUser.uid)) {
                this.DL.User = this.DL.UserItems.find(m => m.UID == this.DL.FBUser.uid);
                this.DL.State.AccessMode = AccessMode.User;
                this.DL.User.ActionDate = this.Stamp.Timestamp;
                this.DA.UserItems.Save(this.DL.User);
            }
            else if(this.DL.State.IsMemberLoaded && this.DL.MemberItems.some(m => m.UID == this.DL.FBUser.uid)) {
                this.DL.Member = this.DL.MemberItems.find(m => m.UID == this.DL.FBUser.uid);
                this.DL.State.AccessMode = AccessMode.Member;
                this.DL.Member.ActionDate = this.Stamp.Timestamp;
                this.DA.MemberItems.Save(this.DL.Member);
            }
        }

        if(this.DL.State.AccessMode == AccessMode.Guest 
            && this.DL.State.IsFBUserLoaded 
            && this.DL.State.IsMemberLoaded 
            && this.DL.State.IsUserLoaded) 
        {
            let member = new MemberItem();
            member.UID = this.DL.FBUser.uid;
            member.Name = this.DL.FBUser.displayName;
            member.Email = this.DL.FBUser.email;
            member.ImageURL = this.DL.FBUser.photoURL;
            member.Contact1 = this.DL.FBUser.phoneNumber;
            member.JoinDate = this.Stamp.Timestamp;
            member.ActionDate = this.Stamp.Timestamp;
            this.DA.MemberItems.Save(member);
        }
    }

    @DelayDecorator(5000)
    private deleteCommand(uid: string) {
        let keys = new Array<string>();
        this.DL.CommandItems.forEach(cmd => {
            if(cmd.UID == uid)
                keys.push(cmd.key);
        });
        
        keys.forEach(key => {
            this._commandItems.Delete(key, false);
        });
    }
}
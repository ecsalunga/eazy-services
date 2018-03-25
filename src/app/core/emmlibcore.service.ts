import { Injectable, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { Observable, Subscription, Subscriber } from 'rxjs/Rx';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { MatSnackBar } from '@angular/material';

import { LoadHelper, StampHelper, UtilityHelper } from './helpers';
import { LoadRef, Codes, Update } from './models';
import { DataAccess, DataLayer } from './data';

@Injectable()
export class EmmLibCoreService {
    public Changed: Observable<Update>;
    
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
            this.Publish(new Update(Codes.FileUploaded, snapshot))
        });
    }

    public Display(message: string, action: string = "Done", duration: number = 3000) {
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
}
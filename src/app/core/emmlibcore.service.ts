import { Injectable, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { MatSnackBar } from '@angular/material';

import { LoadHelper, StampHelper, UtilityHelper } from './helpers';
import { LoadRef, Codes, Update, AccessMode, MemberItem, CommandType, CommandItem } from './models';
import { DelayCall } from './decorators';
import { DataAccess, DataLayer, DataItems } from './data';
import { Access, Command } from './account';

@Injectable()
export class EmmLibCoreService {
    public Changed: Observable<Update>;

    private _updater: Subject<Update>;
    private _loader: LoadHelper;
    private _stamp: StampHelper;
    private _utility: UtilityHelper;
    private _da: DataAccess;
    private _dl: DataLayer;
    private _access: Access;
    private _command: Command;

    private _fireStorage: firebase.storage.Reference = firebase.storage().ref();

    constructor(private resolver: ComponentFactoryResolver, private fireDB: AngularFireDatabase, fireAuth: AngularFireAuth, snackBar: MatSnackBar) { 
        this._updater = new Subject<Update>();
        this.Changed = this._updater.asObservable();

        this._loader = new LoadHelper(resolver);
        this._stamp = new StampHelper();
        this._dl = new DataLayer();
        this._da = new DataAccess(fireDB, this._dl);
        this._utility = new UtilityHelper(this._dl, snackBar);
        this._access = new Access(this._da, this._dl, this._stamp, fireAuth, this._utility);
        
        let commandItems = new DataItems<CommandItem>(fireDB, this._dl, Codes.CommandItems, "/command/items", true);
        commandItems.Load();
        this._command = new Command(commandItems, this._dl, this._loader, this._utility);

        this.init();
    }

    public SetComponents(viewChild: ViewContainerRef, imageSelector: HTMLInputElement) {
        this._loader.SetMainContainer(viewChild);
        this._loader.SetImageSelector(imageSelector);
    }

    public Upload(path: string, file: File) {
        let fRef = this._fireStorage.child(path);
        fRef.put(file).then(snapshot => {
            this.Publish(new Update(Codes.FileUploaded, snapshot));
        });
    }

    public Display(message: string, action: string = "Done", duration: number = 5000) {
        this._utility.Display(message, action, duration)
    }

    public Signup(email: string, password: string) {
        this._access.Signup(email, password);
    }

    public LogInWithFacebook() {
        this._access.LogInWithFacebook();
    }

    public LogIn(email: string, password: string) {
        this._access.LogIn(email, password);
    }

    public LogOut() {
        this._access.LogOut();
    }

    public SelectImage() {
        this._loader.SelectImage();
    }

    public Publish(update: Update) {
        this.DL.State.Update(update);
        
        if(this._updater != null)
            this._updater.next(update);
    }

    public Execute(cmd: CommandItem) {
        this._command.Execute(cmd);
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
        else {
            this._dl.State.CurrentSelector = param;
            this.AnimateContent();
            return this._loader.LoadComponent(param);
        }
    }

    public AnimateContent() {
        this._utility.AnimateContent();
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
        this._dl.Loaded.subscribe(update => {
            this.Publish(update);
        });
    }
}
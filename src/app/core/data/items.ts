import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Rx';
import { Item, Codes, Update } from '../models';

export class DataItems<T extends Item> {
    private _path: string;
    private _dl: any;
    private _property: string;
    private _isActive: boolean;
    private _isLoaded: boolean = false;
    private _obs: Observable<any>;

    constructor(private _fireDB: AngularFireDatabase, dl: any, property: string, path: string, isActive: boolean = false) { 
        this._dl = dl;
        this._property = property;
        this._path = path;
        this._isActive = isActive;
    }

    public Load(orderBy: string = "stamp") {
        if(!this._isActive || !this._isLoaded) {
            if(this._isActive)
                this._obs = this._fireDB.list(this._path, ref => { return ref.orderByChild(orderBy); }).snapshotChanges();
            else
                this._obs = this._fireDB.list(this._path, ref => { return ref.orderByChild(orderBy); }).snapshotChanges().first();

            this._obs.subscribe(snapshots => {
                let items = new Array<T>();

                snapshots.forEach(snapshot => {
                    let info: T = snapshot.payload.val();
                    info.key = snapshot.key;
                    items.push(info);
                });

                this._isLoaded = true;
                this._dl[this._property] = items;
                this._dl.Publish(new Update(Codes.DataLoaded, this._property));
            });
        }
    }

    public get IsLoaded(): boolean {
        return this._isActive;
    }

    public Save(item: T, refresh: boolean = true) {
        if (item.key != null && item.key != "")
            this._fireDB.list(this._path).update(item.key, item);
        else
            this._fireDB.list(this._path).push(item);

        if(refresh && !this._isActive)
            this.Load();
    }

    public Delete(key: string, refresh: boolean = true) {
        this._fireDB.list(this._path).remove(key);

        if(refresh && !this._isActive)
            this.Load();
    }
}
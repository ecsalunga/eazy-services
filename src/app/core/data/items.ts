import { AngularFireDatabase } from 'angularfire2/database';

import { Item, Codes, Update } from '../models';

export class DataItems<T extends Item> {
    private _path: string;
    private _dl: any;
    private _property: string;

    constructor(private _fireDB: AngularFireDatabase, dl: any, property: string, path: string) { 
        this._dl = dl;
        this._property = property;
        this._path = path;
    }

    public Load(orderBy: string = "stamp") {
        let items = new Array<T>();

        this._fireDB.list(this._path, ref => {
            return ref.orderByChild(orderBy);
        }).snapshotChanges().first().subscribe(snapshots => {
            snapshots.forEach(snapshot => {
                let info: T = snapshot.payload.val();
                info.key = snapshot.key;
                items.push(info);
            });

            this._dl[this._property] = items;
            this._dl.Publish(new Update(Codes.DataLoaded, this._property));
        });
    }

    public Save(item: T, refresh: boolean = true) {
        if (item.key != null && item.key != "")
            this._fireDB.list(this._path).update(item.key, item);
        else
            this._fireDB.list(this._path).push(item);

        if(refresh)
            this.Load();
    }
}
import { AngularFireDatabase } from 'angularfire2/database';

import { Item } from '../models';

export class DataItems<T extends Item> {
    private _path: string;
    private _items: Array<T>;

    constructor(private _fireDB: AngularFireDatabase, path: string) { 
        this._path = path;
    }

    public Load(items: Array<T>, orderBy: string = "stamp") {
        items = new Array<T>();

        this._fireDB.list(this._path, ref => {
            return ref.orderByChild(orderBy);
        }).snapshotChanges().first().subscribe(snapshots => {
            snapshots.forEach(snapshot => {
                let info: T = snapshot.payload.val();
                info.key = snapshot.key;
                items.push(info);
            });
        });

        this._items = items;
    }

    public Save(item: T) {
        if (item.key != null && item.key != "")
            this._fireDB.list(this._path).update(item.key, item);
        else
            this._fireDB.list(this._path).push(item);
    }
}
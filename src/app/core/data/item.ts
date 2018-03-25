import { AngularFireDatabase } from 'angularfire2/database';

import { Item } from '../models';

export class DataItem<T extends Item> {
    private _path: string;

    constructor(private _fireDB: AngularFireDatabase, path: string) { 
        this._path = path;
    }

    public Load(item: T) {
        this._fireDB.object(this._path).snapshotChanges().first().subscribe(snapshot => {
            if (snapshot.payload.exists())
                item = snapshot.payload.val();
        });
    }

    public Save(item: T) {
        this._fireDB.object(this._path).update(item);
    }
}
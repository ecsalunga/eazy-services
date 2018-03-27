import { AngularFireDatabase } from 'angularfire2/database';

import { Item } from '../models';

export class DataItem {
    private _path: string;
    private _property: string;
    private _dl: any;

    constructor(private _fireDB: AngularFireDatabase, dl: any, property: string, path: string) {
        this._dl = dl;
        this._property = property;
        this._path = path;
    }

    public Load() {
        this._fireDB.object(this._path).snapshotChanges().first().subscribe(snapshot => {
            if (snapshot.payload.exists())
                this._dl[this._property] = snapshot.payload.val();
        });
    }

    public Save(item: any, refresh: boolean = true) {
        this._fireDB.object(this._path).update(item);
        if(refresh)
            this.Load();
    }
}
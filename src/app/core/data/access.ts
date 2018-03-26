import { AngularFireDatabase } from 'angularfire2/database';

import { DataLayer } from './layer';
import { DataItem } from './item';
import { DataItems } from './items';

import { Setting, Article } from '../models';

export class DataAccess {
    public Setting: DataItem;
    public Articles: DataItems<Article>;

    constructor(private fireDB: AngularFireDatabase, private dl: DataLayer) {
        this.Setting = new DataItem(fireDB, dl, "Setting", "/setting");
        this.Setting.Load();

        this.Articles = new DataItems<Article>(fireDB, dl, "Articles", "/articles");
        this.Articles.Load();
    }
}
import { AngularFireDatabase } from 'angularfire2/database';

import { DataLayer } from './layer';
import { DataItem } from './item';
import { DataItems } from './items';

import { Setting, Article } from '../models';

export class DataAccess {
    public Setting: DataItem<Setting>;
    public Articles: DataItems<Article>;

    constructor(private fireDB: AngularFireDatabase, private dl: DataLayer) {
        this.Setting = new DataItem<Setting>(fireDB, "/setting");
        this.Setting.Load(dl.Setting);

        this.Articles = new DataItems<Article>(fireDB, "/articles");
        this.Articles.Load(dl.Articles);
    }
}
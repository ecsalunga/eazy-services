import { AngularFireDatabase } from 'angularfire2/database';

import { DataLayer } from './layer';
import { DataItem } from './item';
import { DataItems } from './items';

import {
    Setting, Article,
    FoodItem, FoodSource, FoodType
} from '../models';

export class DataAccess {
    public Setting: DataItem;
    public Articles: DataItems<Article>;
    public FoodItems: DataItems<FoodItem>;
    public FoodSources: DataItems<FoodSource>;
    public FoodTypes: DataItems<FoodType>;

    constructor(private fireDB: AngularFireDatabase, private dl: DataLayer) {
        this.Setting = new DataItem(fireDB, dl, "Setting", "/setting");
        this.Setting.Load();

        this.FoodItems = new DataItems<FoodItem>(fireDB, dl, "FoodItems", "/food/items");
        this.FoodItems.Load();
        this.FoodSources = new DataItems<FoodSource>(fireDB, dl, "FoodSources", "/food/sources");
        this.FoodSources.Load();
        this.FoodTypes = new DataItems<FoodType>(fireDB, dl, "FoodTypes", "/food/types");
        this.FoodTypes.Load();

        this.Articles = new DataItems<Article>(fireDB, dl, "Articles", "/articles");
        this.Articles.Load();
    }
}
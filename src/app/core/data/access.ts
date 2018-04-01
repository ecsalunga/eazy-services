import { AngularFireDatabase } from 'angularfire2/database';

import { DataLayer } from './layer';
import { DataItem } from './item';
import { DataItems } from './items';

import { Setting, UserItem } from '../models';
import { MemberItem } from '../models/member';
import { ArticleItem } from '../models/article';
import { FoodItem, FoodType, FoodSource } from '../models/food';

export class DataAccess {
    public Setting: DataItem;
    public Articles: DataItems<ArticleItem>;
    public FoodItems: DataItems<FoodItem>;
    public FoodSources: DataItems<FoodSource>;
    public FoodTypes: DataItems<FoodType>;
    public MemberItems: DataItems<MemberItem>
    public UserItems: DataItems<UserItem>;

    constructor(private fireDB: AngularFireDatabase, private dl: DataLayer) {
        this.Setting = new DataItem(fireDB, dl, "Setting", "/setting");
        this.Setting.Load();

        this.FoodItems = new DataItems<FoodItem>(fireDB, dl, "FoodItems", "/food/items");
        this.FoodItems.Load();
        this.FoodSources = new DataItems<FoodSource>(fireDB, dl, "FoodSources", "/food/sources");
        this.FoodSources.Load("Name");
        this.FoodTypes = new DataItems<FoodType>(fireDB, dl, "FoodTypes", "/food/types");
        this.FoodTypes.Load("Name");

        this.Articles = new DataItems<ArticleItem>(fireDB, dl, "ArticleItems", "/article/items");
        this.Articles.Load();

        this.MemberItems = new DataItems<MemberItem>(fireDB, dl, "MemberItems", "/member/items");
        this.MemberItems.Load("Name");

        this.UserItems = new DataItems<UserItem>(fireDB, dl, "UserItems", "/user/items");
        this.UserItems.Load("Name");
    }
}
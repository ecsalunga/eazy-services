import { AngularFireDatabase } from 'angularfire2/database';

import { DataLayer } from './layer';
import { DataItem } from './item';
import { DataItems } from './items';

import { Setting, Account, OrderItem, CommandItem, Codes } from '../models';
import { ArticleItem } from '../models/article';
import { FoodItem, FoodType, FoodSource } from '../models/food';

export class DataAccess {
    public Setting: DataItem;
    public Articles: DataItems<ArticleItem>;
    public Orders: DataItems<OrderItem>;
    public FoodItems: DataItems<FoodItem>;
    public FoodSources: DataItems<FoodSource>;
    public FoodTypes: DataItems<FoodType>;
    public MemberItems: DataItems<Account>
    public UserItems: DataItems<Account>;

    constructor(private fireDB: AngularFireDatabase, private dl: DataLayer) {
        this.Setting = new DataItem(fireDB, dl, Codes.Setting, "/setting");
        this.Setting.Load();

        this.Articles = new DataItems<ArticleItem>(fireDB, dl, Codes.ArticleItems, "/article/items");
        this.Articles.Load();

        this.FoodItems = new DataItems<FoodItem>(fireDB, dl, Codes.FoodItems, "/food/items");
        this.FoodItems.Load();
        this.FoodSources = new DataItems<FoodSource>(fireDB, dl, Codes.FoodSources, "/food/sources");
        this.FoodSources.Load("Name");
        this.FoodTypes = new DataItems<FoodType>(fireDB, dl, Codes.FoodTypes, "/food/types");
        this.FoodTypes.Load("Name");

        this.Orders = new DataItems<OrderItem>(fireDB, dl, Codes.OrderItems, "/food/orders");
        this.Orders.Load();

        this.MemberItems = new DataItems<Account>(fireDB, dl, Codes.MemberItems, "/member/items");
        this.MemberItems.Load("Name");

        this.UserItems = new DataItems<Account>(fireDB, dl, Codes.UserItems, "/user/items");
        this.UserItems.Load("Name");
    }
}
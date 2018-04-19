import { FoodSource, FoodType, FoodItem } from './food';
import { MenuItem, Menus } from './menu';
import { SellItem, Cart } from './sell';
import { AccessMode, UserItem } from './user';
import { MemberItem } from './member';
import { Codes } from './codes';
import { Update } from './update';

export class State {
    Title: string;
    LoaderState: string;
    ReturnSelector: string;
    CurrentSelector: string;

    Menu: string;
    MenuItems: Array<MenuItem>;

    Sell: string;
    SellItems: Array<SellItem>;
    Cart: Cart;

    IsFBUserLoaded: boolean = false;
    IsMemberLoaded: boolean = false;
    IsUserLoaded: boolean = false;
    PhotoUrl: string;

    AccessMode: AccessMode;
    SessionCode: number;

    FoodItems: Array<FoodItem>;

    private _foodItem: FoodItem;
    private _foodSource: FoodSource;
    private _foodType: FoodType;

    private _user: UserItem;
    private _member: MemberItem;

    constructor() {
        this.Title = Codes.Home;
        this.Menu = Codes.Home;
        this.PhotoUrl = Codes.DefaultPhoto;
        this.MenuItems = Menus[ Codes.Home ];
        this.AccessMode = AccessMode.Guest;
        this.Cart = new Cart();
    }

    public Update(update: Update) {
        if(update.Type == Codes.BuyTriggered || update.Type == Codes.RemoveTriggered) {
            this.Cart.Update(update);
        }
    }

    public get FoodSource(): FoodSource {
        return Object.assign({}, this._foodSource);
    }

    public set FoodSource(value: FoodSource) {
        this._foodSource = value;
    }

    public get FoodType(): FoodType {
        return Object.assign({}, this._foodType);
    }

    public set FoodType(value: FoodType) {
        this._foodType = value;
    }

    public get FoodItem(): FoodItem {
        return Object.assign({}, this._foodItem);
    }

    public set FoodItem(value: FoodItem) {
        this._foodItem = value;
    }

    public get User(): UserItem {
        return this._user;
    }

    public set User(value: UserItem) {
        this._user = value;
    }

    public get Member(): MemberItem {
        return this._member;
    }

    public set Member(value: MemberItem) {
        this._member = value;
    }
}
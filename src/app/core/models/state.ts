import { FoodSource, FoodType, FoodItem } from './food';
import { MenuItem, MenuGroup, Menus } from './menu';
import { SellItem, Cart } from './sell';
import { AccessMode } from './user';
import { Account } from './account';
import { Codes } from './codes';
import { Update } from './update';

export class State {
    Title: string;
    LoaderState: string;
    ReturnSelector: string;
    CurrentSelector: string;

    MenuGroup: MenuGroup;

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

    private _account: Account;

    constructor() {
        this.Title = Codes.Home;
        this.PhotoUrl = Codes.DefaultPhoto;
        this.MenuGroup = Menus[ Codes.Home ];
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

    public get Account(): Account {
        return this._account;
    }

    public set Account(value: Account) {
        this._account = value;
    }
}
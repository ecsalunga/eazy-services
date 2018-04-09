import { FoodSource, FoodType, FoodItem } from './food';
import { AccessMode } from './accessmode';
import { MenuItem } from './menuitem';
import { Codes } from './codes';
import { Menus } from './menus';

export class State {
    Title: string;
    LoaderState: string;
    DefaultImage: string;
    BackSelector: string;

    Menu: string;
    MenuItems: Array<MenuItem>;

    IsFBUserLoaded: boolean = false;
    IsMemberLoaded: boolean = false;
    IsUserLoaded: boolean = false;

    AccessMode: AccessMode;
    SessionCode: number;
    ControlCode: number = 0;

    FoodItems: Array<FoodItem>;

    private _foodItem: FoodItem;
    private _foodSource: FoodSource;
    private _foodType: FoodType;

    constructor() {
        this.Title = Codes.Home;
        this.Menu = Codes.Home;
        this.MenuItems = Menus[ Codes.Home ];
        this.AccessMode = AccessMode.Guest;
        this.DefaultImage = "/assets/default.jpeg";
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
}
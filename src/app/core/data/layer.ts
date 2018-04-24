import { User } from '@firebase/auth-types';
import { Observable, Subject } from 'rxjs/Rx';

import { Setting, Update, Codes, OrderItem, Account, State, CommandItem } from '../models';
import { ArticleItem } from '../models/article';
import { FoodItem, FoodType, FoodSource } from '../models/food';

export class DataLayer {
    public Loaded: Observable<Update>;
    private _updater: Subject<Update>;

    FBUser: User;
    Setting: Setting;
    State: State;

    constructor() {
        this.State = new State();
        this._updater = new Subject<Update>();
        this.Loaded = this._updater.asObservable();
    }

    public Publish(update: Update) {
        if(this._updater != null)
            this._updater.next(update);
    }

    FoodItems: Array<FoodItem>;
    FoodSources: Array<FoodSource>;
    FoodTypes: Array<FoodType>;
    ArticleItems: Array<ArticleItem>;
    OrderItems: Array<OrderItem>;
    MemberItems: Array<Account>;
    UserItems: Array<Account>;
    CommandItems: Array<CommandItem>;
}
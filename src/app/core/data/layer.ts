import { User } from '@firebase/auth-types';
import { Observable, Subscription, Subscriber } from 'rxjs/Rx';

import { Setting, Update, Codes, State, UserItem } from '../models';
import { MemberItem } from '../models/member';
import { ArticleItem } from '../models/article';
import { FoodItem, FoodType, FoodSource } from '../models/food';

export class DataLayer {
    public Loaded: Observable<Update>;
    private _updater: Subscriber<Update>;

    FBUser: User;
    Member: MemberItem;
    User: UserItem;

    Setting: Setting;
    State: State;

    constructor() {
        this.State = new State();
        this.Loaded = new Observable(obs => { this._updater = obs; });
    }

    public Publish(update: Update) {
        if(this._updater != null)
            this._updater.next(update);
    }

    FoodItemSelected: FoodItem;
    FoodItems: Array<FoodItem>;
    FoodSourceSelected: FoodSource;
    FoodSources: Array<FoodSource>;
    FoodTypeSelected: FoodType;
    FoodTypes: Array<FoodType>;
    
    ArticleItemSelected: ArticleItem;
    ArticleItems: Array<ArticleItem>;

    MemberSelected: MemberItem;
    MemberItems: Array<MemberItem>;

    UserSelected: UserItem;
    UserItems: Array<UserItem>;
}
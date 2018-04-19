import { User } from '@firebase/auth-types';
import { Observable, Subject } from 'rxjs/Rx';

import { Setting, Update, Codes, UserItem, State, CommandItem } from '../models';
import { MemberItem } from '../models/member';
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
    MemberItems: Array<MemberItem>;
    UserItems: Array<UserItem>;
    CommandItems: Array<CommandItem>;
}
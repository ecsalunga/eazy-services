import { Setting, State } from '../models';
import { ArticleItem } from '../models/article';
import { FoodItem, FoodType, FoodSource } from '../models/food';

export class DataLayer {
    Setting: Setting;
    State: State;

    constructor() {
        this.State = new State();
    }

    FoodItemSelected: FoodItem;
    FoodItems: Array<FoodItem>;
    FoodSourceSelected: FoodSource;
    FoodSources: Array<FoodSource>;
    FoodTypeSelected: FoodType;
    FoodTypes: Array<FoodType>;
    
    ArticleItemSelected: ArticleItem;
    ArticleItems: Array<ArticleItem>;
}
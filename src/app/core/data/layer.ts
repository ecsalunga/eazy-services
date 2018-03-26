import { 
    Setting, Article,
    FoodItem, FoodSource, FoodType
} from '../models';

export class DataLayer {
    Setting: Setting;

    FoodItemSelected: FoodItem;
    FoodItems: Array<FoodItem>;
    FoodSourceSelected: FoodSource;
    FoodSources: Array<FoodSource>;
    FoodTypeSelected: FoodType;
    FoodTypes: Array<FoodType>;
    
    ArticleSelected: Article;
    Articles: Array<Article>;
}
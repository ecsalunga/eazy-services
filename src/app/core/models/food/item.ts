import { Item } from '../item';

export class FoodItem extends Item {
    Code: string;
    PriceBuy: number;
    PriceSell: number;
    
    TypeKey: string;
    SourceKey: string;
    Rating: number;
}
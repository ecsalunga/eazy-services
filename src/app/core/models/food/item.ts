import { Item } from '../item';

export class FoodItem extends Item {
    Code: string;
    Blurb: string;
    ImageUrl: string;
    PriceBuy: number;
    PriceSell: number;
    
    TypeKey: string;
    SourceKey: string;
}
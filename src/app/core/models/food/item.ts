import { Item } from '../item';

export class FoodItem extends Item {
    Name: string;
    Code: string;
    Blurb: string;
    ImageUrl: string;
    PriceBuy: number;
    PriceSell: number;
    
    TypeKey: string;
    SourceKey: string;
}
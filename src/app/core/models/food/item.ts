import { Item } from '../item';

export class FoodItem extends Item {
    Code: string;
    PriceBuy: number;
    PriceSell: number;
    
    TypeKey: string;
    TypeName: string;

    SourceKey: string;
    SourceName: string;
    
    IsAvailable: boolean;
    Rating: number;
}
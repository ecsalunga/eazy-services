import { ItemType } from '../itemtype';

export class SellItem {
    ItemKey: string;
    Type: ItemType;

    Title: string;
    ImgSrc: string;
    Blurb: string;
    
    Price: number;
    Quantity: number;

    constructor(itemKey: string, title: string, price: number) {
        this.ItemKey = itemKey;
        this.Title = title;
        this.Price = price;
        this.Quantity = 1;
    }
}
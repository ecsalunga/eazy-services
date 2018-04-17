import { SellItem } from './sellitem';
import { Update } from '../update';
import { Codes } from '../codes';

export class Cart {
    Items: Array<SellItem>;
    Count: number;
    IsExpanded: boolean;

    constructor() {
        this.Items = new Array<SellItem>();
        this.Count = 0;
    }

    Toggle() {
        this.IsExpanded = !this.IsExpanded;
    }

    public Update(update: Update) {
        if (update.Type == Codes.BuyTriggered) {
            let sell = <SellItem>update.Data;
            if (this.Items.some(item => item.ItemKey == sell.ItemKey))
                this.Items.find(item => item.ItemKey == sell.ItemKey).Quantity++;
            else
                this.Items.push(sell);
        }

        let count = 0;
        this.Items.forEach(item => {
            count += item.Quantity;
        });
        
        this.Count = count;
    }
}
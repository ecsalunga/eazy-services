import { SellItem } from './sellitem';
import { Update } from '../update';
import { Codes } from '../codes';

export class Cart {
    Items: Array<SellItem>;
    Count: number;
    Total: number;
    IsExpanded: boolean;

    constructor() {
        this.Items = new Array<SellItem>();
        this.Count = 0;
        this.Total = 0;
    }

    public Toggle(isExpanded?: boolean) {
        if(isExpanded == null)
            this.IsExpanded = !this.IsExpanded;
        else
            this.IsExpanded = isExpanded;
    }

    public Checkout() {

    }

    public Update(update: Update) {
        let sell = <SellItem>update.Data;

        if (update.Type == Codes.BuyTriggered) {
            if (this.Items.some(item => item.ItemKey == sell.ItemKey))
                this.Items.find(item => item.ItemKey == sell.ItemKey).Quantity++;
            else
                this.Items.push(sell);
        }
        else if(update.Type == Codes.RemoveTriggered)
            this.Items = this.Items.filter(item => item.ItemKey != sell.ItemKey);

        this.Items.sort((item1, item2) => item1.Title.localeCompare(item2.Title));

        let count = 0;
        let total = 0;

        this.Items.forEach(item => {
            count += item.Quantity;
            total += (item.Quantity * item.Price);
        });

        this.Count = count;
        this.Total = total;
    }
}
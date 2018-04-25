import { DelayCall } from '../../decorators';
import { SellItem } from './sellitem';
import { Update } from '../update';
import { Codes } from '../codes';

export class Cart {
    Items: Array<SellItem>;
    Count: number;
    Total: number;
    IsExpanded: boolean;

    constructor() {
        this.initItems();
        this.Count = 0;
        this.Total = 0;
    }

    private initItems() {
        let cart = localStorage.getItem("cart");
        if(cart == null || cart == "")
            this.Items = new Array<SellItem>();
        else {
            this.Items = JSON.parse(cart);
            this.initState();
        }
    }

    private storeCart() {
        let cart = JSON.stringify(this.Items);
        localStorage.setItem("cart", cart);
    }

    public Toggle(isExpanded?: boolean) {
        if(isExpanded == null)
            this.IsExpanded = !this.IsExpanded;
        else
            this.IsExpanded = isExpanded;
    }

    public Clear() {
        this.Items = new Array<SellItem>();
        this.Count = 0;
        this.Total = 0;
        this.storeCart();
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
        this.updateStats();
        this.storeCart();
    }

    @DelayCall(500)
    private initState() {
        this.updateStats();
    }

    private updateStats() {
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
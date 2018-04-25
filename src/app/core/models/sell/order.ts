import { Item } from '../item';
import { SellItem } from './sellitem';
import { ItemAction } from '../itemaction';
import { Codes } from '../codes';

export class OrderItem extends Item {
    UID: string;
    Name: string;
    Email: string;
    Address: string;
    Contact1: string;
    Contact2: string;
    Items: Array<SellItem>;
    Actions: Array<ItemAction>;
    Status: string;

    constructor() {
        super();
        this.Actions = new Array<ItemAction>();
        this.Status = Codes.New;
    }

    public AddAction(action: ItemAction) {
        this.Actions.push(action);
        this.Status = action.Name;
    }
}
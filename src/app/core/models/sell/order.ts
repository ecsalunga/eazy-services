import { Item } from '../item';
import { SellItem } from './sellitem';

export class OrderItem extends Item {
    UID: string;
    Name: string;
    Email: string;
    Address: string;
    Contact1: string;
    Contact2: string;

    Items: Array<SellItem>;
}
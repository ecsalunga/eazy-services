import { Item } from './item';

export class Article extends Item {
    Title: string;
    Blurb: string;
    Content: string;
    Author: string;
    Order: number;
    IsActive: boolean;
}
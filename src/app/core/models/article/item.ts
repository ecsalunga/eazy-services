import { Item } from '../item';

export class ArticleItem extends Item {
    Title: string;
    Blurb: string;
    Content: string;
    Author: string;
    Order: number;
    IsActive: boolean;
}
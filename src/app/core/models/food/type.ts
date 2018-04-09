import { Item } from '../item';

export class FoodType extends Item {
    Name: string;
    Category: string;
    ImageUrl: string;
    Blurb: string;

    constructor(imageUrl: string) {
        super();
        this.ImageUrl = imageUrl;
    }
}
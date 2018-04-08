import { Item } from '../item';

export class FoodSource extends Item {
    Name: string;
    Address: string;
    Contact: string;
    Blurb: string;
    ImageUrl: string;
    Rating: number;
    
    constructor(imageUrl: string) {
        super();
        this.ImageUrl = imageUrl;
    }
}
import { FoodSource } from './food';

export class State {
    Title: string;
    DefaultImage: string;

    private _foodSource: FoodSource;

    constructor() {
        this.Title = "Home";
        this.DefaultImage = "https://firebasestorage.googleapis.com/v0/b/eazy-services.appspot.com/o/images%2Fdefault.jpeg?alt=media&token=1e305ead-3b19-432b-af58-e1aab42cad9e";
    }

    public get FoodSource(): FoodSource {
        return Object.assign({}, this._foodSource);
    }

    public set FoodSource(value: FoodSource) {
        this._foodSource = value;
    }
}
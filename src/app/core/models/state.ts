import { FoodSource } from './food';

export class State {
    Title: string;
    private _foodSource: FoodSource;

    constructor() {
        this.Title = "Home";
    }

    public get FoodSource(): FoodSource {
        return Object.assign({}, this._foodSource);
    }

    public set FoodSource(value: FoodSource) {
        this._foodSource = value;
    }
}
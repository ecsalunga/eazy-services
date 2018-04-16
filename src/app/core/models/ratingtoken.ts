import { Codes } from './codes';

export class RatingToken {
    private _isDirty: boolean;
    private _value: number;
    private _max: number;
    private _isSelectable: boolean;

    constructor(value: number, isSelectable: boolean = true, max: number = Codes.MaxRate) {
        this._value = value;
        this._isSelectable = isSelectable;
        this._max = max;
        this._isDirty = false;
    }

    public Set(value: number) {
        this._value = value;
        this._isDirty = true;
    }

    public get IsDirty(): boolean {
        return this._isDirty;
    }

    public get Value(): number {
        return this._value;
    }

    public get IsSelectable(): boolean {
        return this._isSelectable;
    }

    public get Max(): number {
        return this._max;
    }
}
export class RatingToken {
    private _isDirty: boolean;
    private _value: number;
    private _max: number;

    constructor(value: number, max: number) {
        this._value = value;
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

    public get Max(): number {
        return this._max;
    }
}
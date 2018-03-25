import { ComponentRef } from '@angular/core';

export class LoadRef {
    private _selector: string;
    private _isLoaded: boolean;
    Component: ComponentRef<any>;

    constructor(selector: string, isLoaded: boolean, component?: ComponentRef<any>) {
        this._selector = selector;
        this._isLoaded = isLoaded;
        this.Component = component;
    }

    public Selector(): string {
        return this._selector;
    }

    public IsLoaded(): boolean {
        return this._isLoaded;
    }
}
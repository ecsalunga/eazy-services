import { ComponentFactory, ComponentFactoryResolver, ViewContainerRef, ComponentRef } from '@angular/core';
import { LoadRef } from '../models';

export class LoadHelper {
    private _viewChild: ViewContainerRef;
    private _imageSelector: HTMLInputElement;
    private _components: Array<ComponentRef<any>>;
    private _factories: Array<ComponentFactory<any>>;
    
    constructor(private resolver: ComponentFactoryResolver) {
        this._components = new  Array<ComponentRef<any>>();
        this._factories = Array.from(this.resolver['_factories'].values());
    }

    public SetMainContainer(viewChild: ViewContainerRef) {
        this._viewChild = viewChild;
    }

    public SetImageSelector(imageSelector: HTMLInputElement) {
        this._imageSelector = imageSelector;
    }

    public SelectImage() {
        if(this._imageSelector != null)
            this._imageSelector.click();
        else
            console.error("imageSelector not found");
    }

    public LoadComponent(selector: string): LoadRef {
        this.clearComponents();
        return this.loadFactory(selector);
    }

    public LoadComponentToView(selector: string, viewChild: ViewContainerRef): LoadRef {
        let factory = <ComponentFactory<any>> this._factories.find((item: ComponentFactory<any>) => item.selector === selector);
        if(factory) {
            let component = this.resolver.resolveComponentFactory(factory.componentType);
            let created = viewChild.createComponent(component);
            return new LoadRef(selector, true, created);
        }
        else
            return new LoadRef(selector, false);
    }

    public LoadComponents(selectors: Array<string>): Array<LoadRef>{
        this.clearComponents();
        let components = new Array<LoadRef>();
        selectors.forEach(selector => {
            components.push(this.loadFactory(selector));
        });

        return components;
    }

    private loadFactory(selector: string): LoadRef {
        if(this._viewChild != null)
        {
            let factory = <ComponentFactory<any>> this._factories.find((item: ComponentFactory<any>) => item.selector === selector);
            if(factory) {
                let component = this.resolver.resolveComponentFactory(factory.componentType);
                let created = this._viewChild.createComponent(component);
                this._components.push(created);
                return new LoadRef(selector, true, created);
            }
            else
                return new LoadRef(selector, false);
        }
        else {
            console.error("emmlib-outlet not found");
            return new LoadRef(selector, false);
        }
    }

    private clearComponents() {
        this._components.forEach(component => {
            component.destroy();
        });
    }
}
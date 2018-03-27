export function MemoryDecorator(preserve: Array<string>): ClassDecorator {
    return function (terget: any) {
        let onDestroy = terget.prototype.ngOnDestroy;

        terget.prototype.ngOnDestroy = function() {
            for (let prop in this) {
                let property = this[prop];
                if (!preserve.includes(prop) && (property && typeof property.unsubscribe === "function"))
                    property.unsubscribe();
            }

            onDestroy && typeof onDestroy === 'function' && onDestroy.apply(this, arguments);
        }
    };
}
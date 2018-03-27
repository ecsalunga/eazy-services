export function MemoryDecorator(): ClassDecorator {
    return function (terget: any) {
        let onDestroy = terget.prototype.ngOnDestroy;

        terget.prototype.ngOnDestroy = function() {
            for (let p in this) {
                let property = this[p];
                
                // Observable
                if (property != null && typeof property.unsubscribe === "function")
                    property.unsubscribe();
                    
            }

            if(onDestroy != null && typeof onDestroy === 'function')
                onDestroy.apply(this, arguments);
        }
    };
}
export function DelayCall(delay: number = 0): MethodDecorator {
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        let originalMethod = descriptor.value;
        
        descriptor.value = function(...args) {
          setTimeout(() => originalMethod.apply(this, args), delay);
        };

        return descriptor;
    }
}
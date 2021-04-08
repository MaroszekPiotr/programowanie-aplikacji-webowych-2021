function logReturn(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const decoratedMethod = descriptor.value
    descriptor.value = function (...args: number[]) {
        const ret  = decoratedMethod.apply(target, args);
        console.log(`Return from ${propertyKey}: ${ret}, args: ${args}`);
        return ret;
    }
    return descriptor;
}
function cache(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const decoratedMethod = descriptor.value
    const cacheStore: any = {}
    descriptor.value = function (...args: number[]) {
        let cacheKey = args.join("/")
        let ret: any;
        if (cacheStore[cacheKey]) {
            ret = cacheStore[cacheKey];
            console.warn('FROM CACHE!', propertyKey, args);
        } else {
            ret = decoratedMethod.apply(target, args);
            cacheStore[cacheKey] = ret;
        }
        return ret;
    }
    return descriptor;
}

class Calculate {
    @logReturn
    @cache
    add(a: number, b: number): number {
        return a + b;
    }
    @logReturn
    @cache
    multiply(a: number, b: number): number {
        return a * b;
    }
    @logReturn
    @cache
    power(base: number, exp: number): number {
        return base ** exp;
    }
}

let calculator = new Calculate();
const add1 = calculator.add(10,6);
const add2 = calculator.add(5,2);
const add3 = calculator.add(10,6);

const multiply1 = calculator.multiply(10,6);
const multiply2 = calculator.multiply(5,2);
const multiply3 = calculator.multiply(10,6);

const power1 = calculator.power(10,6);
const power2 = calculator.power(5,2);
const power3 = calculator.power(10,6);
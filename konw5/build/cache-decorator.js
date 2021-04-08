var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function logReturn(target, propertyKey, descriptor) {
    const decoratedMethod = descriptor.value;
    descriptor.value = function (...args) {
        const ret = decoratedMethod.apply(target, args);
        console.log(`Return from ${propertyKey}: ${ret}, args: ${args}`);
        return ret;
    };
    return descriptor;
}
function cache(target, propertyKey, descriptor) {
    const decoratedMethod = descriptor.value;
    const cacheStore = {};
    descriptor.value = function (...args) {
        let cacheKey = args.join("/");
        let ret;
        if (cacheStore[cacheKey]) {
            ret = cacheStore[cacheKey];
            console.warn('FROM CACHE!', propertyKey, args);
        }
        else {
            ret = decoratedMethod.apply(target, args);
            cacheStore[cacheKey] = ret;
        }
        return ret;
    };
    return descriptor;
}
class Calculate {
    add(a, b) {
        return a + b;
    }
    multiply(a, b) {
        return a * b;
    }
    power(base, exp) {
        return Math.pow(base, exp);
    }
}
__decorate([
    logReturn,
    cache
], Calculate.prototype, "add", null);
__decorate([
    logReturn,
    cache
], Calculate.prototype, "multiply", null);
__decorate([
    logReturn,
    cache
], Calculate.prototype, "power", null);
let calculator = new Calculate();
const add1 = calculator.add(10, 6);
const add2 = calculator.add(5, 2);
const add3 = calculator.add(10, 6);
const multiply1 = calculator.multiply(10, 6);
const multiply2 = calculator.multiply(5, 2);
const multiply3 = calculator.multiply(10, 6);
const power1 = calculator.power(10, 6);
const power2 = calculator.power(5, 2);
const power3 = calculator.power(10, 6);
//# sourceMappingURL=cache-decorator.js.map
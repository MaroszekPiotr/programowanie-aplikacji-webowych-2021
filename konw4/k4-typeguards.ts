function multByTwo(value: number | string): number {
    return value * 2;
}

function multByTwo2(value: number | string): number {
    if (typeof value === 'number') {
        return value * 2;
    } else {
        return +value * 2;
    }
}
interface Animal { }

class Cat implements Animal {
    meow() { }
}
class Dog implements Animal {
    woof() { }
}
const bird: Animal = {
    sing() { }
}
playSound(bird)
function playSound(animal: Animal) {
    if (isCat(animal)) {
        animal.meow();
    } else if (animal instanceof Dog) {
        animal.woof()
    }
}
function playSound2(animal: Cat | Dog | { sing: () => {} }) {
    if (isCat(animal)) {
        animal.meow();
    } else if ('woof' in animal) {
        animal.woof()
    } else if ('sing' in animal) {
        animal.sing()
    }
}

function isCat(animal: Animal): animal is Cat {
    return (animal as Cat).meow !== undefined
    // lub
    // return animal.hasOwnProperty('meow')
}


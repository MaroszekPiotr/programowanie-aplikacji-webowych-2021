// let drzewo: string;
// enum Drzewo {
//     'dab' = 'dab',
//     'jesion' = 'jesion'
// }
// let drzewoEnum: Drzewo = Drzewo.dab;

// let drzewoInline: 'dab' | 'jesion' = 'dab';

// if(drzewoInline === 'jesion') {

// }

// function aaa(sex: 'man' | 'woman') {
//     console.log(`You're`);
// }

// aaa('man')
// type declaration
type Citizen = {
    sex: 'man' | 'woman',
    age: number,
    firstname: string,
    secondname: string
}
type Tourist = {
    vacationDuration: number,
    homeTown: string;
}
// union types - citizens
type City = {
    people: (Citizen | Tourist)[], // means: Citizen[] | Tourist[]
    area: number | string,
    longitude: number,
    lattitude: number,
    name: string
}

class CityClass {
    private citizens: CityCitizen[]; // means: Citizen[] | Tourist[]
    area: number | string;
    longitude: number;
    lattitude: number;
    name: string
    getPeople(): CityCitizen[] {
        return this.citizens;
    }
    setPeople(data: Citizen[]) {
        this.citizens = data
    }
}
// new type from union
class Animal {
    name: string;
    type: string;
    sex: 'man' | 'woman'
}
class Dog extends Animal {
    type = 'dog'
}
class Cat extends Animal {
    type = 'cat'
}
type SomeMan = Citizen | Tourist;
type SomeGuyOnStreet = SomeMan | string;
type OnlyAnimals = Dog | Cat
type CityCitizen = SomeMan | OnlyAnimals // Citizen | Tourist | Dog | Cat
let john: SomeGuyOnStreet;


// zmiana kontekstu this
// document.body.addEventListener('click', john.getLastName)

import { Trainer } from "./trainer";

// na koniec ciekawostka - interfejsy mogą dziedziczyć po klasach:)
// dziedziczą jedynie definicję, nie implementację!

// ------------
// Klasy
// ------------
// deklaracja klasy tworzy dwie rzeczy - konstruktor dla nowych obiektów oraz typ.

export class Person {
    private _firstName: string;
    set firstName(fname: string) {
        this._firstName = fname;
    };
    get firstName(): string {
        return this._firstName;
    }
    get fullName(): string {
        return this.firstName + ' ' + this.lastname;
    }

    private lastname: string;
    
    getLastName = () => {
        console.log(this)
    };
    // public jest domyślne
    protected constructor(firstName: string, lastName: string) { // protected constuctor!
        this.firstName = firstName;
        this.lastname = lastName
    }
    getName(): string {
        console.log(this);
        return this.firstName;
    }
    static sex: string[] = ['male', 'female', 'sometimes camel'];
}

let xxxx: Person;
let john = new Person('john', 'doe') // nowy obiekt z klasy. UPS?
john.firstName = 'amy' // użycie settera
const s = Person.sex[1] // użycie właściwości statycznej klasy Person

// inny sposób deklaracji właściwości klas z użyciem konstruktora
class Person2 {
    constructor(private firstName: string, public lastName: string) {

    }

    getPersonalData(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}
const kate = new Person2('kate', 'doe');
//dziedziczenie - klasyka
class Student extends Person {
    constructor(firstName: string, lastName: string) {
        super(firstName, lastName); // uruchomienie konstruktora rodzica
    }

    // private readonly xx = 10;
    get surname(): string {     // brak settera = readonly
        return this.lastName;
    }
    getName(): string {
        return 'Student ' + super.getName(); // odwołanie do metody rodzica
    }
}

// klasy astrakcyjne 
abstract class Creature { }
// moduły
const rysiek = new Trainer();
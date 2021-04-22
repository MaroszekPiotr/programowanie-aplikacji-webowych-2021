// Smerf - czapeczka, bucikiDoPasa, niebieski kolor, chodzi(), mowi()
interface Smerf {
    czapeczka: boolean;
    kolorCzapeczki: string;
    bucikiDoPasa: boolean;
    kolor: 'niebieski';
    chodzi(): void;
    mowi(): void;
}

// Malarz - maluje(), pracuje()
interface Malarz extends Smerf {
    maluje(): void;
    pracuje(): void;
}

// Harmoniusz - spiewa(), pracuje()
interface Harmoniusz extends Smerf {
    spiewa(): void;
    pracuje(): void;
}

// Smerfetka - spiewa(), maluje(), hodujeKwiaty(), sukienka
interface Smerfetka extends Smerf {
    sukienka: true;
    spiewa(): void;
    maluje(): void;
    hodujeKwiaty(): void;
}

// Pracus - biega(), pracuje()
interface Pracus extends Smerf {
    pracuje(): void;
    biega(): void;
}

// Zgrywus - biega(), wybucha()
interface Zgrywus extends Smerf {
    wybucha(): void;
    biega(): void;
}

// Papa smerf - hodujeKwiaty(), zarzadza(), pracuje(), biega()
interface PapaSmerf extends Smerf {
    hodujeKwiaty(): void;
    zarzadza(): void;
    pracuje(): void;
    biega(): void;
}

// problem
class Sm1 implements PapaSmerf {
    hodujeKwiaty(): void {

    }
}
class Sm2 implements Smerfetka {
    hodujeKwiaty(): void {

    }
}
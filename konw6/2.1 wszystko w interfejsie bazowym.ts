// Smerf - czapeczka, bucikiDoPasa, niebieski kolor, chodzi(), mowi()
interface Smerf {
    czapeczka: boolean;
    kolorCzapeczki: string;
    bucikiDoPasa: boolean;
    kolor: 'niebieski';
    chodzi(): void;
    mowi(): void;
    maluje?(): void;
    pracuje?(): void;
    spiewa?(): void;
    hodujeKwiaty?(): void;
    biega?(): void;
}

// Malarz - maluje(), pracuje()
interface Malarz extends Smerf {
}

// Harmoniusz - spiewa(), pracuje()
interface Harmoniusz extends Smerf {
}

// Smerfetka - spiewa(), maluje(), hodujeKwiaty(), sukienka
interface Smerfetka extends Smerf {
    sukienka: true;
}

// Pracus - biega(), pracuje()
interface Pracus extends Smerf {
}

// Zgrywus - biega(), wybucha()
interface Zgrywus extends Smerf {
    wybucha(): void;
}

// Papa smerf - hodujeKwiaty(), zarzadza(), pracuje(), biega()
interface PapaSmerf extends Smerf {
    zarzadza(): void;
}
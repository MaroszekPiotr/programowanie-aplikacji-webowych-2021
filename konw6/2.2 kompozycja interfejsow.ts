// Smerf - czapeczka, bucikiDoPasa, niebieski kolor, chodzi(), mowi()
interface Smerf {
    czapeczka: boolean;
    kolorCzapeczki: string;
    bucikiDoPasa: boolean;
    kolor: 'niebieski';
    chodzi(): void;
    mowi(): void;
}

interface MozePracowac {
    pracuje(): void;
}
interface MozeMalowac {
    maluje(): void;
}
interface MozeSpiewac {
    spiewa();
}
interface MozeHodowacKwiaty {
    hodujeKwiaty(): void;
}
interface MozeBiegac {
    biega(): void;
}
// Malarz - maluje(), pracuje()
interface Malarz extends Smerf, MozePracowac,  MozeMalowac {}

// Harmoniusz - spiewa(), pracuje()
interface Harmoniusz extends Smerf, MozeSpiewac, MozePracowac {}

// Smerfetka - spiewa(), maluje(), hodujeKwiaty(), sukienka
interface Smerfetka extends Smerf, MozeSpiewac, MozeMalowac, MozeHodowacKwiaty {
    sukienka: true;
}

// Pracus - biega(), pracuje()
interface Pracus extends Smerf, MozeBiegac, MozePracowac {}

// Zgrywus - biega(), wybucha()
interface Zgrywus extends Smerf, MozeBiegac{
    wybucha(): void;
}

// Papa smerf - hodujeKwiaty(), zarzadza(), pracuje(), biega()
interface PapaSmerf extends Smerf, MozeHodowacKwiaty, MozePracowac, MozeBiegac {
    zarzadza(): void;
}
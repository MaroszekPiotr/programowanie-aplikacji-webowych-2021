class Smerf4 {
    czapeczka: boolean;
    kolorCzapeczki: string;
    bucikiDoPasa: boolean;
    kolor: 'niebieski';
    chodzi(): void {};
    mowi(): void {};
}

class mozePracowac {
    pracuje(): void {};
} 

// pierwsze rozwiązanie
class Malarz4 extends Smerf4 {
    maluje(): void {};
    pracuje = new mozePracowac().pracuje;
}

// drugie rozwiązanie
class Harmoniusz4 extends Smerf4 {
    spiewa(): void {};
    praca = new mozePracowac();
}

const a = new Malarz4();
a.pracuje()

// minusy
// przepisywanie elementów - new mozePracowac().pracuje itd
// rozbudowa klasy bazowej (np. mozePracowac) wymaga dopisywania w klasach używających klas bazowych
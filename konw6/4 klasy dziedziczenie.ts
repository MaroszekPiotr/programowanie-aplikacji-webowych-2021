class Smerf2 {
    czapeczka: boolean;
    kolorCzapeczki: string;
    bucikiDoPasa: boolean;
    kolor: 'niebieski';
    chodzi(): void {};
    mowi(): void {};
    // ale nie kazdy smerf pracuje - to jest błąd w klasie bazowej!
    pracuje(): void {};
}

class Malarz2 extends Smerf2 {
    maluje(): void {};
}

class Harmoniusz2 extends Smerf2 {
    spiewa(): void {};
}
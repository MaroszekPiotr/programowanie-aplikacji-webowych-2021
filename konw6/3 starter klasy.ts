class Smerf {
    czapeczka: boolean;
    kolorCzapeczki: string;
    bucikiDoPasa: boolean;
    kolor: 'niebieski';
    chodzi(): void {};
    mowi(): void {};
    // ale nie kazdy smerf pracuje - to jest błąd w klasie bazowej!
    pracuje(): void {};
}

class Malarz extends Smerf {
    pracuje(): void {};
    maluje(): void {};
}

class Harmoniusz extends Smerf {
    spiewa(): void {};
    pracuje(): void {};
}
class Smerf3 {
    czapeczka: boolean;
    kolorCzapeczki: string;
    bucikiDoPasa: boolean;
    kolor: 'niebieski';
    chodzi(): void {};
    mowi(): void {};
}
class SmerfPracujacy extends Smerf3 {
    pracuje(): void {};
}
class SmerfPracujacyIBiegajacy extends SmerfPracujacy {
    biega(): void {}
}

class Malarz3 extends SmerfPracujacy {
    maluje(): void {};
}

class Harmoniusz3 extends SmerfPracujacy {
    spiewa(): void {};
}

class Pracus3 extends SmerfPracujacyIBiegajacy {

}
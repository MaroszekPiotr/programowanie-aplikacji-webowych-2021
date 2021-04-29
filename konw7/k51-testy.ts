// testy jednostkowe (unit testy)

// założenia:
// 1. testy sprawdzają małe porcje kodu (metoda/funkcja)
// 2. testy są niezależne od siebie
// 3. testy nie powinny zależeć od czynników zewnętrznych
// 4. test zawsze kończy sie sukcesem lub porażką
// 5. zasada FIRST 
    // fast - szybkie, 
    // independent - niezależne od innych testów oraz kolejności ich wykonania, 
    //      ta zasada wymusza rozluźnienie późniejszych relacji pomiędzy klasami w testowanym kodzie
    // repeatable - powtarzalne wyniki (np. zapomniane beforeEach/afterEach, brudna baza), 
    // self-checking - rezultat jest określony automatycznie, nie trzeba interpretować ręcznie wyników testów, 
    // timely - testy pisane razem z kodem testowanym
// 6. kod testujący jest równie istotny co kod testowany!
// YAGNI (You arent going to need it) - nie piszemy testów 'na przyszłość'

// ogólne założenia do tworzonego kodu
// 1. działanie funkcji/metody zależne tylko od parametrów metody
// 2. wynik zależny jedynie od parametrów metody

// narzedzia
// jest/mocha/jasmine, dodatek npm dla jest do DOM: testing-library/jest-dom
// puppeter - testy e2e

// materiały - puppeter
// https://github.com/checkly/puppeteer-examples
// https://developers.google.com/web/tools/puppeteer

// Podejście TDD

// 1. Najpierw testy później testowany kod
// 2. Główny cel to (1) wysokiej jakości kod, niejako "przy okazji" dostajemy (2) pełne pokrycie kodu testami
//  Jednak należy pamiętać że test jedynie w pewnym stopniu wpływa na to jak działa funkcja/metoda - (np. redukuje zewnętrzne zależności.)
//  Dalej możliwe są, nawet grube, błędy programistyczne (np. mało optymalna iteracja, wielokrotnie zagnieżdżony kod etc.. 
//  Po prostu jest ich znacznie mniej.
// 3. TESTY NIE CHRONIĄ PRZED BŁĘDNYMI ZAŁOŻENIAMI!
// 4. Wzorce stosowane w podejściu TDD: 
//  Red-Green-Refactor - najpierw test , później test robi fail, później jakikolwiek kod by test przeszedł, później optymalizacja dalej przy plusowym tescie
//  AAA (Arrang Act Assert) -
// Aranżacja - przygotowanie obiektu odpowiadającego za testowany element (np. klasę) (w jest: describe('name', fn()))
// Akcja - wykonanie zestawu testów (w jest: it('name', fn()))
// Asercja - sprawdzenie wyniku testu (w jest: expect(val).toBe...)

// Zalety TDD:

// Dokładne zrozumienie wymagań dokumentacji. Testy piszemy zawsze względem dokumentacji.
// Testy jako dokumentacja jest zawsze aktualna w czasie.
// Testy zmuszają do wyjaśnienia niejednoznaczności, cechy którą może posiadać dokumentacja papierowa.
// (testy wymuszają określenie warunków brzegowych funkcjonalności które niekoniecznie znajdują się w dokumentacji)
// Wymuszanie dobrego designu kodu i szybka identyfikacja potencjalnych błędów w designie, np. problem z zależnościami.
// Lepsza zarządzalność kodu w czasie.
// Łatwiejsze i bezpieczniejsze łatanie kodu.
// Natychmiastowy i automatyczny feedback na temat błędu w kodzie.
// Testy regresyjne pozwalają stwierdzić czy po naszych zmianach nie zepsuliśmy przy okazji czegoś w innej części systemu.
// Krótszy, całkowity, czas procesu developmentu (to zależy od wielkości projektu i jego późniejszego sposobu utrzymania)
// Dużo mniej ręcznego debugowania/testowania.

// Wady TDD:
// Opiera się mocno na doświadczeniu (zaprojektowanie architektury rozwiązania problemu), ale jednocześnie znacząco przyspiesza/wymusza naukę dobrych praktyk
// Czas i wysiłek na trening i przygotowanie developerów.
// Potrzeba dyscypliny osobistej i zespołowej. Testy muszą być zarządzane i poprawiane w czasie w taki sam sposób jak cała reszta kodu (co wymuszają po każdym buildżzie ze zmianami w funkcjonalności)
// Początkowa percepcja dłuższego czasu developmentu.
// Nie wszyscy menadżerowie dają się przekonać. Biją argumentem dwukrotnie dłuższego developmentu, choć całkowity czas trwania developmentu (wliczając szukanie i naprawę błędów, nie tylko pisanie kodu) w TDD jest krótszy niż w nie-TDD.


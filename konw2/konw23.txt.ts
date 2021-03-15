// excess property checking dla literałów (interface nie może mieć index signature!)
interface SquareConfig {
    color?: string;
    width?: number;
}
interface Box {
    color?: string; // właściwość opcjonalna
    readonly id: number; // readonly 
    isEmpty?(): boolean; // funkcje
}
function createBox(config: Box): number {
    return config.id;
}
// const boxConfig = {id: 12, colour: 'red'}
let newBox = createBox({ id: 12, colour: "red" }); // , coloUr????
// rozwiązania:
// 1. index signature w interfejsie
// 2. type assertion: {id: 12, colour: 'red'} as Box 
// 3. przypisanie literału do zmiennej: boxConfig = {id: 12, colour: 'red'}; - excess checking wylączone

// interfejsy dla funkcji:
interface SortFunc {
    (source: string[]): string[];
}
let bubbleSort: SortFunc;
bubbleSort = (data: string[]): string[] => {
    return data;
}


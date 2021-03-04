// let title = "hello world";
const message = "it's a miracle!";

let title = 'Hello world';
let isASheep = true;

// typy tablicowe
let messages: string[] = ['one','two', 'three']
// starszy sposób deklaracji
let messages2: Array<string> = ['one','two', 'three']


// typ any -> jak portujemy z js-a albo z zewnętrznych danych
let age: any = 'ten';
age = 10;


console.log(age);

const titleDOM = document.createElement('h1');
const messageDOM = document.createElement('div');

titleDOM.innerHTML = title;
messageDOM.innerHTML = message;

document.body.appendChild(titleDOM);
document.body.appendChild(messageDOM);

function showTitle(title: any): void {
    if (title.startsWith('Star')) {
      console.log('A Star!')  
    }
}

// showTitle(null)

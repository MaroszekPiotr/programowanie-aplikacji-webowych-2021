let message = "it's a miracle!";
let title = 'Hello world';
const titleDOM = document.createElement('h1');
const messageDOM = document.createElement('div');
titleDOM.innerHTML = title;
messageDOM.innerHTML = message;
document.body.appendChild(titleDOM);
document.body.appendChild(messageDOM);
function showTitle(title) {
    if (title.startsWith('Star')) {
        console.log('A Star!');
    }
}
showTitle(null);
//# sourceMappingURL=index.js.map
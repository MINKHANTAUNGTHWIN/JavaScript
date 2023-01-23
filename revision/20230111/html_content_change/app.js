// .innerText , .innerHTML, .value
// get, update

// innerText
let helloHeading = document.getElementById('hello-id');

// get 
console.log(helloHeading.innerText);

// update 
helloHeading.innerText = 'this is hello heading';

// innerHtml
let divLayout = document.getElementById('div-id');

//get 
console.log(divLayout.innerHTML);

//update
divLayout.innerHTML = '<b>this is span</b>';

//value
let textInput = document.getElementById('textInput');
console.log(textInput.value);

textInput.value = 'apple'
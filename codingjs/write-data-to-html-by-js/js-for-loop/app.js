//for loop

// 1) initialize value
// 2) condition
// 3) increse or decrease

for (let i = 0; i < 5; i++) {
    console.log(i);
    console.log('Hello World')
}

let numList = document.getElementById('num-list');

// numList.innerHTML = '<li>0</li><li>1</li><li>2</li><li>3</li><li>4</li>';
let fruitArr = ['Apple','Orange','Banana','Pineapple','Lemon'];

for(let i = 0; i < 5; i++){
    numList.innerHTML = numList.innerHTML + '<li>' + fruitArr[i] + '</li>';
}
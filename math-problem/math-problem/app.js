let numOne = document.getElementById("numOneId");
let numTwo = document.getElementById("numTwoId");
let numThree = document.getElementById("numThreeId");
let numMax = document.getElementById("maxNumId");
let numMin = document.getElementById("minNumId");
let numSame = document.getElementById("sameNumId");

function randomThreeNum(){
    numOne.value = Math.floor(Math.random()*20);
    numTwo.value = Math.floor(Math.random()*20);
    numThree.value = Math.floor(Math.random()*20);
}

function maxNum(){
    numMax.innerText = Math.max(numOne.value,numTwo.value,numThree.value);  
}

function minNum(){
    numMin.innerText = Math.min(numOne.value,numTwo.value,numThree.value);
}

function sameNum(){
    // if (numOne.value != numTwo.value || numTwo.value != numThree.value || numOne.value != numOne.value){
    //     numSame.innerText = "There is no same Number";

if (numOne.value == numTwo.value){
    numSame.innerText = numOne.value +" "+ numTwo.value;  
}else if (numTwo.value == numThree.value){
    numSame.innerText = numTwo.value +" "+ numThree.value;
}
else if(numOne.value == numThree.value){
    numSame.innerText = numThree.value +" "+ numOne.value;
}else {
    numSame.innerText = "There is no same number!"
}
}




// numSame.innerText = Number(numOne.value," ", numTwo.value);
// }else if ( numTwo.value == numThree){
//     numSame.innerText = Number(numTwo.value," ",numThree.value);
// }else {
//     numSame.innerText = Number(numThree.value," ",numOne.value);
// }
let number01 = document.getElementById('numId1');
let number02 = document.getElementById('numId2');
let result = document.getElementById('resultId');


function calculatePlus(){
    result.value = Number(number01.value) + Number(number02.value);
}

function calculateMinus(){
    result.value = Number(number01.value) - Number(number02.value);
}

function calculateDivide(){
    result.value = Number(number01.value) / Number(number02.value);
}

function calculateMulti(){
    result.value = Number(number01.value) * Number(number02.value);
}

function calculatePar(){
    result.value = Number(number01.value) % Number(number02.value);
}


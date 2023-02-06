let inputData = document.getElementById('input-data');

function showInputData (){

    let inputValueShow = document.getElementById('input-text-show');
    
    if (inputData.value.trim() == ""){
        inputValueShow.innerText = "Please insert text";}
        else {
            inputValueShow.innerText = inputData.value;
        }
    }


function length(){
    let lengthShow = document.getElementById('show-length');

    if (inputData.value.trim() == ""){
        lengthShow.innerText = "Please insert text";}
        else {
            lengthShow.innerText = inputData.value.length;
        }
}

function firstChar(){
    let charFirst = document.getElementById('first-char');

    if (inputData.value.trim() == ""){
        charFirst.innerText = "Please insert text";}
        else {
            charFirst.innerText = inputData.value.charAt(0);
        }
}

function lastChar(){
    let charLast = document.getElementById('last-char');

    if (inputData.value.trim() == ""){
        charLast.innerText = "Please insert text";}
        else {
            charLast.innerText = inputData.value.charAt(inputData.value.length-1);
        }
}

function midChar(){
    let text = inputData.value;
    let textLength = text.length;
    let charMid = document.getElementById('charMid');

    if (inputData.value.trim() == ""){
        charMid.innerText = "Please insert text";}
        else {
            if (textLength% 2 == 0){
                let pos = textLength / 2;
                charMid.innerText = text.slice(pos - 1, pos + 1);
            } else {
                let endPos = (textLength + 1 ) / 2;
                charMid.innerText = text.slice(endPos - 1, endPos);
            }
        }
}

function isEmpty(data){
    if(data.trim() == ''){
        return true;
    }
    else{
        return false;
    }
}

function allFunction(){
    showInputData();
    length();
    firstChar();
    lastChar();
    midChar();
}
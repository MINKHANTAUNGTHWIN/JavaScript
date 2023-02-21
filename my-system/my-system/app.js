let textInput = document.getElementById("textInputId");
let result = document.getElementById("resultId");

function runBot(){
 
let splitArr = textInput.value.split(" ");
    if (splitArr.length != 3) {
        result.innerText = "Need two number";
    }
    else if (splitArr[1] != Number(splitArr[1]) || splitArr[2] != Number(splitArr[2])){
        result.innerText = "Invalid number"
    }
    else if (splitArr[0] == 'add' || splitArr[0] == 'Add'){
        result.innerText = Number(splitArr[1]) + Number(splitArr[2]);

    }else if(splitArr[0]== 'Minus' || splitArr[0] == 'minus'){
        result.innerText = Number(splitArr[1]) - Number(splitArr[2]);

    }else if(splitArr[0]== 'Multi' || splitArr[0] == 'multi'){
        result.innerText = Number(splitArr[1]) * Number(splitArr[2]);
        
    }else if(splitArr[0] == 'Divide' || splitArr[0] == 'divide'){
        result.innerText = Number(splitArr[1]) / Number(splitArr[2]);
    }

    else {
        result.innerText = "Invalid Operators";
    }
}



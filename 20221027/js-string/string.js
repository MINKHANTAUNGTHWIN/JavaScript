// function checkStartWithCharacterA(str) {

//     console.log(str);


//     let firstChar = str.substring(0,1);


//     console.log(firstChar);
//     if (firstChar == 'a') {
//         return 'Start with a';
//     }
//     else if (firstChar == 'A'){
//         return 'Start with A';
//     } 
//     else{
//         return 'No'
//     }
// }
// let firstCharResult = checkStartWithCharacterA('apple');
// console.log(firstCharResult);

// firstCharResult = checkStartWithCharacterA('ball');
// console.log(firstCharResult);

// firstCharResult = checkStartWithCharacterA('Aeroplane');
// console.log(firstCharResult);

function checkStartWithCharacterA_B(str) {
    console.log(str);

    let firstChar = str.slice(0, 1);

    console.log(firstChar);
    if (firstChar == 'a') {
        return 'Start with a';
    } else if (firstChar == 'A') {
        return 'Start with A';
    } else if (firstChar == 'b') {
        return 'Start with b';
    } else if (firstChar == 'B') {
        return 'Start with B';
    } else {
        return 'NO';
    }

}

let firstChar = checkStartWithCharacterA_B('another');
console.log(firstChar); //return 'start with a';

firstChar = checkStartWithCharacterA_B('Acronu');
console.log(firstChar) // return 'start with A';

firstChar = checkStartWithCharacterA_B('bathing');
console.log(firstChar); // return 'start with b';

firstChar = checkStartWithCharacterA_B('Bus'); // return 'start with B';
console.log(firstChar);

firstChar = checkStartWithCharacterA_B('Car'); // return 'NO';
console.log(firstChar);

firstChar = checkStartWithCharacterA_B('Valley'); // return 'NO';
console.log(firstChar);

function checkEndWithCharecterE(str) {
    //cut last char from str
    //let lastChar = str slice(-1); // first choice

    // let lastCharPos = str.length - 1;
    //let lastChar = str.substring(lastCharPos);// second choice
    //console.log('Last Char >> '+ lastChar);
    // if (lastChar == 'e'){
    //return 'end with e'
    //} else if (lastChar=='E'){
    //return 'end with E';
    //} else {
    //return 'NO'
    //}

    //}
    //}
    console.log(str);

    let endChar = str.slice(-1);
    if (endChar == 'e' || endChar == 'E') {
        return 'end with ' + ' ' + endChar
    } else {
        return 'NO';
    }


}

let endChar = checkEndWithCharecterE('Please');
console.log(endChar);
// checkEndWithCharecterE('animal');
// checkEndWithCharecterE('PLEASE');
// checkEndWithCharecterE('Translate');



function returnLast3Chars(str) { // abcd

    if (str.length <= 3) {
        return str; // abc
    } else {
        let last3Chars = str.slice(-3); // bcd
        return last3Chars;
    }
}

let last3Chars = returnLast3Chars('a');
console.log(last3Chars);

let last3Chars1 = returnLast3Chars('ab');
console.log(last3Chars1);

let last3Chars2 = returnLast3Chars('abc');
console.log(last3Chars2);

let last3Chars3 = returnLast3Chars('abcd');
console.log(last3Chars3);

let last3Chars4 = returnLast3Chars('abcde');
console.log(last3Chars4);

function returnFirst3Chars(str) {

    if (str.length <= 3) {
        return str;
    } else {
        let first3Chars = str.slice(0, 3);
        return first3Chars;
    }
}

let first3Chars = returnFirst3Chars('a');
console.log(first3Chars);

let first3Chars1 = returnFirst3Chars('ab');
console.log(first3Chars1);

let first3Chars2 = returnFirst3Chars('abc');
console.log(first3Chars2);

let first3Chars3 = returnFirst3Chars('abcd');
console.log(first3Chars3);

let first3Chars4 = returnFirst3Chars('abcde');
console.log(first3Chars4);


function returnMidChars(str) {
    if (str.length % 2 == 1) {

    }
}

function missingChar(str, n) {
    // ki t ten
    console.log(str.slice(0,n));
    console.log(str.slice(n+1));
    console.log(str.slice(0,n) + str.slice(n+1))
}

missingChar('kitten', 2);




// console.log(str.slice(0,n) + str.slice(n+1));



function frontBack(str){
    console.log(str.slice(0,1));// first
    console.log(str.slice(str.length-1));// end
    console.log(str.slice(1,str.length-1)); //slice last position ko tit toe payy

    console.log(str.slice(str.length-1) + str.slice(1,str.length-1) + str.slice(0,1) )

  
}

frontBack('pineandshikwasa'); // eodc

function delDel(str){
    console.log(str.slice(1,4));
    console.log(str.slice(0,1));
    console.log
    
}

delDel('adelbc') 

function mixStart(str){
   console.log(str.slice(2,3));
 
  
}

mixStart('mix snacks')


function startOz(str){
    let firstChar= str.substr(0,1);
    let secondChar= str.slice(1,2);
   let firstSecChar= str.substr(0,3);
 if (firstChar == 'o'){return 'o';}
   else if (secondChar == 'z'){return 'z';}
   else if (firstSecChar == 'oz'){return 'oz';}
   else(firstChar!= 'o' && secondChar != 'z' && 
        firstSecChar != 'oz')
   {return '';}}

   startOz('ozymandias') ;// oz
   console.log(startOz);
startOz('bzoo') // z
startOz('oxx') // o
let test = "please visit our website";
let newtest = test.replace("visit","w3School");
let Test = test.replace("microsoft", "W3School");

console.log(newtest);
console.log(Test);  
//replace は　左から　最初　の　もの　だけ　交換できる

let  family = 'loving mother and loving father';
console.log(family.replace('loving','dear'));

function replaceCha(str){
    return str.replace('loving','po ');
}

let result = replaceCha('loving mother and loving father');
console.log(result);

//////////////////////////////
//replaceAll は　全部　交換できる

let room = 'bad teacher VS bad student';
console.log(room.replaceAll('bad','good'));

function replaceAllCha(str){
    return str.replaceAll('bad','great');
}

let moon = replaceAllCha('bad habits are not bad for bad peoples');
console.log(moon);


//////////
// toUpperCase and toLowerCase

let chair = 'this chair is for kid';
console.log(chair.toUpperCase());

function upperCase(str){
    return str.toUpperCase(2,3);
}

let desk = upperCase('desk are not duck and duck are not desk');
console.log(desk.toUpperCase());


//////
// concat

let text1  = 'Hello' ;
let text2  = 'world' ;
let text3 = text1.concat(' ',text2);

console.log(text3);

function concatshi(str,str1){
    return str.concat(" ",str1," nice");
}

let result2= concatshi('you are','the best')
console.log(result2);

////
//trim は　真ん中の　スペース　が　消せない
let text4 = "      Hello World!      ";
let text5 = text4.trim();
console.log(text5);
console.log(text4);

function trim(str){
    return(str.trim())
}

let result3 = trim('              lo   lo                ');
console.log(result3);

////

let text6 = "     Hello World!     2";
let text7 = text6.trimStart();
console.log(text7); 

function startTrim(str){
    return(str.trimStart())
}

let result4 = startTrim('    1    hello   2');
console.log(result4);


//////

let text8 = "  3   hel    lo    ";
let text9 = text8.trimEnd();
console.log(text9);

function endTrim(str){
    return(str.trimEnd())
}

let result5 = endTrim('   3   hola    4      ');
console.log(result5);

/////padStart & padEnd

let text10 = "5";
let padded = text10.padStart(9,"^");
console.log(padded);

function padStart1(str){
    return(str.padStart(9,':^'))
}

let result6 = padStart1('ko')
console.log(result6);

////charAt 

let text11 = "HELLO WORLD";
let char = text11.charAt(9);
console.log(char);

function charAt1(str){
    return(str.charAt(6));
}

let charAt2 = charAt1('watermelon');
console.log(charAt2);

//// 

function rotateLeft3(nums){
  
    console.log(nums);

    let a = nums.shift();

    nums.push(a);

    console.log(nums)


}

rotateLeft3([1,2,3]);

// function makeLast(nums){
//     let last = nums[nums.length-1];
//     let cnt = nums.length * 2;
//     let str = (last.toString()).padStart(cnt,"0");
//     let arr = str.split('');
//     return arr;
//   }

function fix23(nums){
    if(nums[0]==2 && nums[1]==3){
      nums[1] = 0;
      return [nums(0),nums(1),nums(2)];
    }else if(nums[1]==2 && nums[2]==3){
      nums[2]= 0;
      return [nums(0),nums(1),nums(2)];
    } else{
      return nums;}}

      let result23 =fix23(1,2,3);
      console.log(result23);









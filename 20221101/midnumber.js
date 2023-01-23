function findMidCharacter(str) {
    if(str.length%2 == 1){
        return str.substr(str.length/2 - 0.5 , 1);//
    } else {
        return  str.substr(str.length/2 - 1 , 2);
    }
}

//odd number
let midChar;
midChar = findMidCharacter('egg');// 3/2 = 1.5 - 0.5 = 1
console.log(midChar);

midChar = findMidCharacter('apple');// 5/2 = 2.5 - 0.5 = 2
console.log(midChar);

midChar = findMidCharacter('pineapple');// 9/2 = 4.5 - 0.5 = 4
console.log(midChar);

midChar = findMidCharacter('watermelons');
console.log(midChar);

//even number
midChar = findMidCharacter('book');
console.log(midChar);

midChar = findMidCharacter('amazon');
console.log(midChar);

midChar = findMidCharacter('facebook');
console.log(midChar);

midChar = findMidCharacter('pineapplepan');
console.log(midChar);
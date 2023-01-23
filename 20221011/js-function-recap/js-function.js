/**
 * JS Function void && return
 * 
 */
//method メソッド
//dead code
function voidFunction(par1) {
    console.log('This is void function' + par1);
}

voidFunction(123);

// function findMax(par1, par2) {
//     if (par1 > par2) {
//         return par1;
//     } else {
//         return par2;
//     }
// }

// let maxNum = findMax(2, 4);
// console.log('Maximum number of 2,4 is ' + maxNum);

// maxNum = findMax(58, 12);
// console.log('Maximum number between 58,12 is ' + maxNum);


// function findMax1(x, y, z) {
//     if (x > y && x > z) {
//         return x;
//     } else if (y > x && y > z) {
//         return y;
//     } else {
//         return z;
//     }
// }

// let maxNum1 = findMax1(67, 89, 56);
// console.log('Max number of 67, 89 , 56 is ' + maxNum1);

// function findMax2(a,b,c,d) {
//     if (a > b && a >c && a > d) {
//         return a;
//     } else if ( b > a && b > c && b > d) {
//         return b;
//     } else if( c > a && c > b && c > d) {
//         return c;
//     } else {
//         return d;
//     }
// }

// let maxNum2 = findMax2(1000,2000,3000,400);
// console.log('Max number of 1000, 200, 300 , 400 is ' + maxNum2);

// function findMax3 (h,i,j,k,l,m) {
//     if (h>i && h>j && h>k && h>l && h>m) {
//         return h;
//     } 

//      else if (i>h && i>j && i>k && i>l && i>m) {
//         return i;
//     }

//       else if (j>h && j>i && j>k && j>l && j>m) {
//         return j;
//     }

//      else if (k>h && k>i && k>j && k>l && k>m) {
//         return k;
//     } 

//       else if (l>h && l>i && l>j && l>k && l>m) {
//         return l;
//     } 

//      else {
//         return m;
//     }
// }

// let maxNum3 = findMax3(10,200,30,400,50,600);
// console.log('Max number of 10, 20 , 30, 40, 50, 60 is ' + maxNum3);

function findDuplicateNumber( a, b, c) {
    if (a==b || a==c) {
        return a;
    } else if (b==a || b==c) {
        return b;
    } else { 
        return NaN;
    }    
}

let duplicateNumber = findDuplicateNumber(1,2,2); // 2
console.log ('Duplicate number of 1,2,2 is ' + duplicateNumber);
// findDuplicateNumber(5,5,4); // 5
// findDuplicateNumber(4,5,4); // 4
// findDuplicateNumber(1,2,3); // NaN

//  function CheckEvenOrOddNumber(num){
//     if ( num%2==0){
//         let love=console.log(num + 'is EvenNumber')
//         return love;
//     }else{
//         let love1=console.log(num + 'is OddNumber')
//         return love1;
//     }
//  }

//  CheckEvenOrOddNumber(5);
//  CheckEvenOrOddNumber(6);
//  CheckEvenOrOddNumber(11);
//  CheckEvenOrOddNumber(12);

function findEvenNumber(num) {
    if (num%2==0){
        let EvenNumber = console.log(num + 'is EvenNumber')
        return EvenNumber;
    } 
}
findEvenNumber(1);
findEvenNumber(3);
findEvenNumber(5);
findEvenNumber(8);

     // 8
// findEvenNumber(1,3,5,9); // NaN
// findEvenNumber(1,4,5,11); // 4

// CheckEvenOrOddNumber(5);
// CheckEvenOrOddNumber(6);
// CheckEvenOrOddNumber(11);
// CheckEvenOrOddNumber(12);


function frontBack(str){
    let first = str.charAt(0);
    let end = str.slice(-1);
    let mid = str.slice(1,str.length-1);
    return end + mid + first;
}

let we= frontBack('chocolate'); // eodc
console.log(we);



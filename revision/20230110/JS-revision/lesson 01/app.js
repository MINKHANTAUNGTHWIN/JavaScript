// // use js data-type inside parentheses()
// console.log("String Value");
// console.log(123);
// console.log(true);

// let arr = [1, 2, 3, 4, 5];
// console.log(arr);

// // js data type
// // string, number, boolean, array, null, undefined

// // number
// // arithmatic op
// // assignment op
// // +=, -=, /=, *=, %=, ++, --

// // boolean
// // logical op
// // (&&, ||, !)
// // comparison op 
// // (>, <, ==, >=, <=, !=, ===, !==)

// // string
// // length
// // string cutting 
// // string replace
// // string Upper/ Lower Case
// // string concat(combine two strings or more)
// // string trim
// // string charAt

// let str1 = 'oppa';
// let str2 = 'gangnam';
// let str3 = 'style';
// let str4 = 'chit sann maung and victor maung r the maung maung';
// let str5 = ' hello ';
// let str6 = 'A'

// console.log(str1.length);
// console.log(str1.slice(0,2));
// console.log(str1.substr(0,3));
// console.log(str1.substring(1,3));
// console.log(str1.replace('oppa','mama'));
// console.log(str4.replaceAll('maung','Maung'));
// console.log(str1.toUpperCase());
// console.log(str1.toLowerCase());
// console.log(str1.concat(str2));
// console.log(str5.trim());
// console.log(str5.trimStart());
// console.log(str5.trimEnd());
// console.log(str1.padStart(5,"x")); //front ka lo chin tae length pee tot back ka add chin tae hr
// console.log(str1.padEnd(7,'x'));
// console.log(str1.charAt(2));
// console.log(str1.charCodeAt(3));
// console.log(str1.split(','));

let str01 = 'apple orange';

let str01A = str01.slice(0,5);
let str01B = str01.slice(6);

console.log(str01A);
console.log(str01B);

let result = str01B + ' ' + str01A;
console.log(result);

let result1 = str01B.concat(' ' +str01A);
console.log(result1);

let str02 = 'dog';

let first = str02.charAt(0);
let mid = str02.slice(1,-1);
let last = str02.slice(-1);

let result2 = last + mid + first;
console.log(result2);

let result03 = lastMidFirst(str03) 

function lastMidFirst()
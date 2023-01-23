/**
 * NaN : Not a Number
 * 
 * Number using arithmatic operator with other data type
 * 
 * -, *, %
 * 
 */

let typeOne = 3 - 'hello'; // Number - String = NaN
console.log(typeof typeOne + ' : ' + typeOne);

let typeTwo = 3 / undefined; // Number / undefined = NaN
console.log(typeof typeTwo + ' : ' + typeTwo);

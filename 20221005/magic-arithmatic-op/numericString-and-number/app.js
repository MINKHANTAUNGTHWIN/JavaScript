/**
 * NumericString And Number
 * -, *,/
 * 
 */

let typeOne = 3 - ' 6 '; // Number - NumericString = Number
console.log(typeof typeOne + ' : ' + typeOne);

let typeTwo = '2' * '4'; // NumericString * NumericString = Number
console.log(typeof typeTwo + ' : ' + typeTwo);

let typeThree = '5' / '3'; // NumericString / NumericString = Number
console.log(typeof typeThree + ' : ' + typeThree);

let typeFour = '5' % '3'; // NumericString % NumericString = Number
console.log(typeof typeFour + ' : ' + typeFour);
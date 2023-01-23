/**
 * String With Plus Operator
 */

let str;

str = 'Hello' + 'World';
console.log(str);
// HelloWorld

let StrPlusStr = 'Hello' + 'World'; // string + string = string
console.log(typeof StrPlusStr + ' : ' + StrPlusStr);

let StrPlusNumber = 'Hello' + 123; // string + number = string
console.log(typeof StrPlusNumber + ' : ' + StrPlusNumber);

let StrPlusUndefined = 'Hello' + undefined; // string + undefined = string
console.log(typeof StrPlusUndefined + ' : ' + StrPlusUndefined);

let StrPlusBoolean = 'Hello' + true; // string + boolean = string
console.log(typeof StrPlusBoolean + ' : ' + StrPlusBoolean);

let StrPlusNull = 'Hello' + null; // string + null = string
console.log(typeof StrPlusNull + ' : ' + StrPlusNull);

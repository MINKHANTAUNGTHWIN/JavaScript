/**
 * method = function
 * 
 * Learns about string's default method
 */
let str = 'Hello World 123';

//method name : length
console.log(str.length)


//start position, end position(not include and position)
console.log(str.slice(0,5));

console.log(str.slice(6,11));

console.log(str);

let str1 = 'Apple, Banana, Kiwi, Orange';

console.log(str1.slice(0,5)); // Apple

console.log(str1.slice(7,13)); // Banana

console.log(str1.slice(15,19));

console.log(str1.slice(21,27));

console.log(str1.slice(0,13)); 

console.log(str1.slice(7,19));

console.log(str1.slice(15,27));

console.log(str1.slice(7,27));

console.log(str1)

console.log(str1.length);

console.log(str1.slice(7));

//concat using 

console.log(str1.slice(0,5)+ " " + str1.slice(21));

let str2 = 'Thank You';

console.log(str2.slice(-3));

console.log(str2.slice(-9,-4));


let str3 = "Apple, Banana, Kiwi, Orange";   
console.log(str3.substring(0,13)); //マイナス　入れたら　ゼロ　に　なっちゃう　マイナスを　知らない

console.log(str3.substr(0,5)); //(start position)& (string count(length))

console.log(str3.substring(0,19));

console.log(str3.substr(0,27))




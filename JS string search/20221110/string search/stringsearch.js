///indexOf (number return)

let str = "Please locate where 'locate' occurs!";
let locatePos = str.indexOf("locate");
console.log(locatePos);


// if we find the charecter which is not include (return -1)
let str4 = "Please locate where 'locate' occurs!";
let locatePos4 = str4.indexOf("no");
console.log(locatePos4);


///lastIndexOf
let str1 = "I can't tell and can't do nothing ";
let locatePos1 = str1.lastIndexOf("can't");
console.log(locatePos1);


///Includes (boolean return)
let text = "Hello world, welcome to the universe.";
let include1 = text.includes("world");
console.log(include1);

let text1 =  "please go away";
let include2 = text.includes("went");
console.log(include2);

/// startWith & endsWith (return boolean)




let text2 = "Hello my friend";
let start = text2.startsWith("Hello");
console.log(start);

let text4 = "Hello my friend";
let start3 = text4.startsWith("Bello");
console.log(start3);



let text3 = "Hello my friend";
let start1 = text3.endsWith("friend");
console.log(start1);

let text5 = "Hello my friend";
let start4 = text5.startsWith("By");
console.log(start4);

let s = "wagahai wa neko de aru.";

console.log(s.slice(11,12));



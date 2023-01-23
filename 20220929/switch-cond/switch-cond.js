// data type : number, string , boolean
// switch (param) {
// case '';
//        console.log('case one');
//        break;

// case ' ';
//        console.log('case two');
//        break;
// default:
//        console.log('default');
//        break;
// }

/**
 * Switch : Number
 */

varNum = 10;

switch (varNum) {
    case 5:
        console.log("Switch Number > Case One");
        break;

    case 10:
        console.log("Switch Number > Case Two");
        break;

    case '10':
        console.log("Switch Number > Case Three");
        break;

    case 15:
        console.log("Switch Number > Case Four");
        break;
}

varStr = 'A';

switch (varStr) {
    case 'a':
        console.log("Switch String > Case One");
        break;

    case 'A':
        console.log("Switch String > Case Two");
        break;
    
    case 'b':
        console.log("Switch String > Case Three");
        break;

    case 'B':
        console.log("Switch String > Case Four");
        break;

    default:
        console.log("Switch String > Case Default");
        break;

}

varBoolean = false;

switch(varBoolean) {
    case true:
        console.log('Switch Boolean > Case True');
        break;

    case false:
        console.log('Switch Boolean > Case False');
        break;
}

mark = 80;

switch(true) {
    case mark < 80:
        console.log('Grade D');
        break;

    case mark < 60:
        console.log('Grade C');
        break;

    case mark < 80:
        console.log('Grade B');
        break;

    case mark < 100:
        console.log('Grade A');
        break;
}

a = 3 ;
switch(a) {
    case 1:
        console.log(1);
        break;

    case 2:
        console.log(2);
        break;

    case 3:
        console.log(3);
        break;

    case 4:
        console.log(4);
        break;

    case 5:
        console.log(5);
        break;
}

//switch mhr 'break' ma lote yin
  // result ka under

  let a = 8;
let b = 19;

let tmp = b;
b = a;
a = tmp ;
console.log("a = " + a + ", b = " + b);
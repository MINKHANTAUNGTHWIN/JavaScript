function greeting() {
    //process
    console.log('This is void function.');
}

greeting();

function greetingWithName(name) {
    console.log('Welcome ' + name);
}

greetingWithName('Johnson');

function selfIntroduction(name, age) {
    console.log('My name is ' + name);
    console.log('I am ' + age);
}

selfIntroduction('blah gyi', 27);


function findMax(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

let maxResult = findMax(2, 6);
console.log(maxResult);

function findMin(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}

let minResult = findMin(-5, -2);
console.log(minResult);

function findMax(a, b, c) {
    if (a > b && a > c) {
        return a;
    } else if (b > a && b > c) {
        return b;
    } else {
        return c;
    }
}

let result = findMax(6, 8, 1)
console.log('Max number is ' + result);

function findMax(a, b, c, d) {
    if (a > b && a > c && a > d) {
        return a;
    } else if (b > a && b > c && b > d) {
        return b;
    } else if (c > a && c > b && c > d) {
        return c;
    } else {
        return d;
    }
}

let kotae = findMax(3, -9, 4, -5);
console.log('Max number is ' + kotae);


function findMin(a, b, c) {
    if (a < b && a < c) {
        return a;
    } else if (b < a && b < c) {
        return b;
    } else {
        return c;
    }
}

let kaitou = findMin(9, 8, 10);
console.log('Min number is ' + kaitou);

function findMin(a, b, c, d) {
    if (a < b && a < c && a < d) {
        return a;
    } else if (b < a && b < c && b < d) {
        return b;
    } else if (c < a && c < b && c < d) {
        return c;
    } else {
        return d;
    }
}

let mark = findMin(2, -8, 1, 0);
console.log('Min number is ' + mark);


// findMidiumNumber(4, 6, 5);
// findMidiumNumber(6, 5, 4);
// findMidiumNumber(6, 4, 5);




function findMidiumNumber(a,b,c) {
   if( (a>b && a<c) || (a<b && a>c)){
    return a;
   } else if ((b>a && b<c) || (b<a && b>c)){
    return b;
   } else {
    return c;
   }
}

let midNumber ='Midium number is ' + findMidiumNumber(6, 4, 5);
console.log( midNumber);

// 4) Change time format form given parameter.
// IF the parameter's value is greater than 12 and include,
// substrated from 24 and merge 'PM'.
// Otherwise merge 'AM' and return it.
let formattedTime = changeTime(1);
console.log(formattedTime);

formattedTime = changeTime(13);
console.log(formattedTime);

formattedTime = changeTime(12);
console.log(formattedTime)

formattedTime = changeTime(24);
console.log(formattedTime)

function changeTime(time) {
    if (time < 12 ) {
        return time + 'AM';
    } 
    else if (time == 12 ) {
        return (time) + 'PM';
    }
    else if (time == 24) {
        return '0 AM';
    }
    else (time) 
        return (time - 12) + 'PM';   
    } 
    

console.log(changeTime(13));
console.log(changeTime(1));
console.log(changeTime(12));
console.log(changeTime(24));



function findDuplicateNumber(a, b, c) {
    if (a==b || a==c) {
        return a;
    } else if (b==c) {
        return b;
    } else {
        return c;
    }
}

duplicateNumber = 'Duplicate number is ';
console.log( duplicateNumber + findDuplicateNumber(1, 1, 2) );
console.log( duplicateNumber + findDuplicateNumber(1, 2, 1) );
console.log( duplicateNumber + findDuplicateNumber(2, 1, 1) );


findDuplicateNumber(2, 1, 1);



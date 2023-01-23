/**
 * 
 * Javascript function type has (void , return)
 * 
 * void は　返さない
 * return は　返す
 */

function voidFunction() {
    console.log('Hello');
}

function returnFunction() {
    console.log('Hello');
}

calculateGrade(90);
calculateGrade(91);
calculateGrade(80);

function calculateGrade(n) {
    if (n >= 90) {
        return "Grade S";
    } else if (n >= 81) {
        return "Grade A";
    } else if (n >= 70) {
        return "Grade B";
    } else if (n >= 60) {
        return "Grade C";
    } else if (n >= 40) {
        return "Grade D";
    } else {
        return "Grade E";
    }
}

let result = calculateGrade(30);
console.log(result);

function findMidNumber(a, b, c) {
    let min, max, mid;

    if ((a > b && a < c) || (a < b && a > c)) {
        return a;
    } else if ((b > a && b < c) || (b < a && b > c)) {
        return b;
    } else {
        return c;
    }
}
let midNumber = "midNumber is " + findMidNumber(2, 4, 9);
console.log(midNumber);

function findMaxNumber(a, b, c) {
    if (a > b && a > c) {
        return a;
    } else if (b > a && b > c) {
        return b;
    } else {
        return c;
    }
}
let maxNumber = "maxNumber is " + findMaxNumber(1, 2, 3)
console.log(maxNumber);

function findMinNumber(a, b, c) {
    if (a < b && a < c) {
        return a;
    } else if (b < a && b < c) {
        return b;
    } else {
        return c;
    }
}
let minNumber = "minNumber is " + findMinNumber(-1, -2, 3);
console.log(minNumber);

function orderThreeNumber(a, b, c) {

    min = findMinNumber(a, b, c);
    mid = findMidNumber(a, b, c);
    max = findMaxNumber(a, b, c);

    return min + " " + mid + " " + max;
}

console.log(orderThreeNumber(1, -3, 0));


//apple = 200 , orange = 50 , pineapple = 500, watermelon = 1000
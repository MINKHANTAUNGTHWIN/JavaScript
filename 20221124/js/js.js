let a = 10;
let b = 'Toyota';
let c = true;
let d = [];

a += 2;
console.log(a);

d.push(123);
console.log(d);

d.unshift(90);
console.log(d);

d[0] = 40;
console.log(d);

let numArr = [90];
console.log('before > ');
console.log(numArr);
numArr[0] = 12;
console.log('after > ');
console.log(numArr);
numArr[1] = 14;
console.log(numArr);

numArr = [0, 1, 2, 3, 4];
let removeLastEle = numArr.pop;
console.log('remove Ele > ' + removeLastEle);
console.log(numArr);

let removeFirstEle = numArr.shift();
console.log('remove first ele > ' + removeFirstEle);
console.log(numArr);

function sumArrData(arr) {
    let firstEle = arr[0];
    let secondEle = arr[1];
    let sum = firstEle + secondEle;
    return sum;
}

let sumResult = sumArrData([1, 2]);
console.log(sumResult);

sumResult = sumArrData([3, 5]);
console.log(sumResult);

sumResult = sumArrData([13, 5]);
console.log(sumResult);

function sumArrData1(arr) {
    let firstEle1 = arr[0];
    let secondEle1 = arr[1];
    let thirdEle1 = arr[2];
    let sum1 = firstEle1 + secondEle1 + thirdEle1;
    return sum1;
}
let sumResult1 = sumArrData1([1, 11, 21]);
console.log(sumResult1);

sumResult1 = sumArrData1([2, 12, 22]);
console.log(sumResult1);

sumResult1 = sumArrData1([3, 13, 23]);
console.log(sumResult1);

function findMax(arr) {
    let first = arr[0];
    let second = arr[1];

    if (first > second) {
        return first;
    } else {
        return second;
    }
}

let maxVal = findMax([1, 11]);
console.log(maxVal);

maxVal = findMax([21, 0]);
console.log(maxVal);

function findMaxFirstAndLast(arr) {
    if (arr.length<1){
        return 0;}
    else if (arr.length==1){
        return arr[0];
    }
     else {
        let a = arr[0];
        let b = arr[(arr.length - 1)];
        if (a>b){
            return a;
        } else {
            return b;
        }
    }
}

console.log(findMaxFirstAndLast([])); // 0
console.log(findMaxFirstAndLast([1])); // 1
console.log(findMaxFirstAndLast([1, 2]));
console.log(findMaxFirstAndLast([11, 0, 3]));
console.log(findMaxFirstAndLast([9, 10, 8, 4, 1]));
console.log(findMaxFirstAndLast([4, 9, 10, 1, 5]));

// function findMaxN(arr){
//     if (arr.length < 1){
//         return 0;
//     }else {
//         return arr;
//     }
// }

// console.log(findMaxN([ ]));
// console.log(findMaxN([1]));

function findDoubleSumFirstAndLast(arr){
    let a1= arr[0];
    let b1= arr[(arr.length-1)];

    if (a1==b1) {
        return ((a1+b1)*2);
    } else {
        return a1+b1;
    }

}

console.log(findDoubleSumFirstAndLast([1,2,3,1]));
console.log(findDoubleSumFirstAndLast([1,2,,4]));
console.log(findDoubleSumFirstAndLast([4,3,4]));

let arr = [1,2,3,4];

//length
console.log(arr.length);

//array to string -> not change original array
console.log(arr.toString());
console.log(arr);

console.log(arr.join(':'));
console.log(arr);

//push [adding data from right -> change original]
arr.push(9);
arr.push(10);
arr.push(11);
console.log(arr);

//pop [remove data from last -> change original]
arr.pop();
arr.pop();
arr.pop();
 
console.log(arr);

//unshift [add data from first -> change original]
arr.unshift(0);
console.log(arr);

// shift [remove data from first -> change original]
arr.shift();
console.log(arr);

//concat [making new array -> no change original]
const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const myChildren = arr1.concat(arr2, arr3);
console.log(myChildren);

//splice change original
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi"); // 2 is adding start and 0 is how many want to delete from behind
console.log(fruits);

let strArr = ['apple', 'orange', 'pineapple', 'lemon'];

//splice
let result = strArr.splice(1,2,'banana', 'strawberry');
console.log('-----splice------')
console.log(result);
console.log(strArr);
console.log('-----splice------')

//slice [cut form original -> change original]
const fruit = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruit.slice(1);
console.log(citrus);








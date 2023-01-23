function oddOrEven(a){
    if (a%2==0) {
        return 'even';
    } else {
        return 'odd';
    }
}

findOddOrEven = oddOrEven(1);
console.log(findOddOrEven);

function differenceValue (a,b) {
    if (a>b) {
        return a - b;
    }else if (b>a){
        return b - a;
    } else {
        return 'there is no differenceValue';
    }        
    
    
}

console.log(differenceValue (1 , 2));
console.log(differenceValue (-1 , 2));
console.log(differenceValue (1 , -2));
console.log(differenceValue (2 , 1));

console.log(differenceValue(1, 1)) // there is no difference


function sumEvenNumbers (a, b ,c ,d) {
    let sum = 0;

        if (a%2 == 0) {
            sum += a; // sum = sum + a
        }
        if (b%2 == 0) {
            sum += b; // sum = 0 + 2 = 2
        }
        if (c%2 == 0) {
            sum += c; 
        }
        if (d%2 == 0) {
            sum += d; // sum = 2 + 4 = 6
        }
          return sum;
}
        
console.log(sumEvenNumbers(1,2,3,4));
console.log(sumEvenNumbers(1,2,4,5));
console.log(sumEvenNumbers(1,2,4,6));
console.log(sumEvenNumbers(3,6,10,8));
console.log(sumEvenNumbers(1,1,1,1))

console.log(calculateTax(300,false)); // 200,true|| 100,true
function calculateTax(money, insideOutside){
    if (insideOutside == false) //(!insideOutside == false) 
    {
        let tax = money * 0.08;
        return money + tax;
    }

    else {
        let tax = money * 0.1;
        return money + tax;
    }
}



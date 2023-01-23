a = 10;
b = 8;
c = 5;

compOne = a > b;
compTwo = a > c;

isALargest = (compOne && compTwo);

// (boolean condition) && (boolean condition)
//  T && T = T
//  F && T = F
//  T && F = F
//  F && F = F

condOne = (true && true);
console.log(condOne);

condTwo = (true && false);
console.log(condTwo);

condThree = (false && true);
console.log(condThree);

condFour = (false && false);
console.log(condFour)


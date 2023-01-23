// (boolean condition) || (boolean condation)
//                 T   ||   T = T
//                 F   ||   T = T
//                 T   ||   F = T
//                 F   ||   F = F

condFive = (true || true);
console.log(condFive);

condSix  = (false || true);
console.log(condSix);

condSeven= (true || false);
console.log(condSeven);

condEight= (false || false);
console.log(condEight);
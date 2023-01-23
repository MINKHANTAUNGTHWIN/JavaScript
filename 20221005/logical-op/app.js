/**
 * Logical Operator
 * 
 * OR operator    >    ||
 * AND operator   >    &&
 * NOT operator   >    !
 */

// boolean   ||    boolean
//    T      ||       T     =     T
//    T      ||       F     =     T
//    F      ||       T     =     T
//    F      ||       F     =     F

console.log('OR operator > ' + (true || true) );
console.log('OR operator > ' + (true || false) );
console.log('OR operator > ' + (false || true) );
console.log('OR operator > ' + (false || false) );

// boolean   &&    boolean
//    T      &&       T     =     T
//    T      &&       F     =     F
//    F      &&       T     =     F
//    F      &&       F     =     F

console.log('AND operator > ' + (true && true) );
console.log('AND operator > ' + (true && false) );
console.log('AND operator > ' + (false && true) );
console.log('AND operator > ' + (false && false) );

// boolean
// !true    =    false
// !false   =    true
console.log('Not operator > ' + (!false));
console.log('Not operator > ' + (!true));


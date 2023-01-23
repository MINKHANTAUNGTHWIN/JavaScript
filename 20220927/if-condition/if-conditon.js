// if (boolean condition)
if(true) {
    //body
    console.log('Hello');
} 

age = 18;

if(age >= 20) { //true 
    console.log('Alcohol OK');
} 
else {          //false
      console.log('No Alcohol');
}

if(age >= 18) { //true
    console.log('Can merrige');
}
else {         //false
    console.log('Can\'t merrige')
}

pw = '00000';

if(pw.length < 8) {
    console.log('passwords must be at least 8 charecters.');
}
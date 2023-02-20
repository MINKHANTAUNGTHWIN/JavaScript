let generateRandomNumId = document.getElementById("GenerateRandomNum");
let generateMonthNameId = document.getElementById("moth-name-show-id");

function generateRandom(){
    generateRandomNumId.value  = Math.floor((Math.random() * 12) + 1)
    console.log("aaa")
    

    
}

// function generateMonth(){


//     if (generateRandomNumId.value == 1){
//         generateMonthNameId.innerText = "january" ;
//     }
//     else if(generateRandomNumId.value == 2){
//         generateMonthNameId.innerText = "Febraury";
//     }
//     else if(generateRandomNumId.value == 3){
//         generateMonthNameId.innerText = "Marth";
//     }
//     else if(generateRandomNumId.value == 4){
//         generateMonthNameId.innerText = "April";
//     }
//     else if(generateRandomNumId.value == 5){
//         generateMonthNameId.innerText = "May";
//     }
//     else if(generateRandomNumId.value == 6){
//         generateMonthNameId.innerText = "June";
//     }
//     else if(generateRandomNumId.value == 7){
//         generateMonthNameId.innerText = "July";
//     }
//     else if(generateRandomNumId.value == 8){
//         generateMonthNameId.innerText = "August";
//     }
//     else if(generateRandomNumId.value == 9){
//         generateMonthNameId.innerText = "September";
//     }
//     else if(generateRandomNumId.value == 10){
//         generateMonthNameId.innerText = "October";
//     }
//     else if(generateRandomNumId.value == 11){
//         generateMonthNameId.innerText = "November";
//     }
//     else if(generateRandomNumId.value == 12){
//         generateMonthNameId.innerText = "December";
//     }
// }

function generateMonth(){

    let month;

    switch(Number(generateRandomNumId.value)) {
        case 1:
            month = "January";
            break;

        case 2:
            month = "Febraury";
            break;

        case 3:
            month = "March";
            break;

        case 4:
            month = "April";
            break;
    
        case 5:
            month = "May";
            break;
    
        case 6:
            month = "June";
            break;

        case 7:
            month = "July";
            break;

        case 8:
            month = "August";
            break;

        case 9:
            month = "September";
            break;

        case 10:
            month = "October";
            break;
    
        case 11:
            month = "November";
            break;
    
        case 12:
            month = "December";
            break;
    }
    generateMonthNameId.innerText = month;
}
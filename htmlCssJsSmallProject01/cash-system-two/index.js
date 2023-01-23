

// function increasement() {
//     let countText = document.getElementById('count-num-id');
//     let price = document.getElementById('price-id');
//     let total = document.getElementById('total-price');


//     let totalCount = Number(countText.innerText) + 1;

//     let totalCost = price.innerText * totalCount;

//     total.innerText = totalCost;
//     count.innerText = totalCount;

// }


// function decreasement() {
//     let count = document.getElementById('count-id');// how many order
//     let price = document.getElementById('price-id');// how much price
//     let total = document.getElementById('total-cost-id');// price x how many order

//     if (count.innerText < 1) {
//         //don't do anything
//     }else {
//         let totalCount = Number(count.innerText) - 1;
        
//         let totalCost = price.innerText * totalCount;


// //total change
//         total.innerText = totalCost;

//         count.innerText = totalCount;

//     }
// }

let count = document.getElementById('count-id');
let price = document.getElementById('price-id');
let total = document.getElementById('total-cost-id');


function increase(){
    count.innerText = Number(count.innerText) + 1;

    total.innerText = price.innerText * count.innerText;

}

function decrease(){
    if(count.innerText>0){
        count.innerText = Number(count.innerText) - 1;
        
        total.innerText = price.innerText * count.innerText;
    }
}


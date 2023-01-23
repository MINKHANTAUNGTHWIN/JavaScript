function calculateCash(){
    let amount = document.getElementById('amount-id');
    let tax = document.getElementById('tax-id');
    let result= document.getElementById('total-result');
    
    let total2 = (tax.value/100) * amount.value;
    console.log(total2);

    let total3 = Number(amount.value) + total2;
    console.log(total3);


    result.innerText = total3;

}
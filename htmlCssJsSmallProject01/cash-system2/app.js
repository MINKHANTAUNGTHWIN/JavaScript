function calculateCash(){
    console.log(" I'm superman");
    let amountInput = document.getElementById('amount-id');
    let taxInput = document.getElementById('tax-id');
    let taxAmountShow = document.getElementById('total-result')

    console.log(amountInput.value);
    console.log(taxInput.value);

    //caculate tax

    let taxAmount = (amountInput.value) * (taxInput.value/100);

    //Amount + Tax
    let totalAmount = Number(amountInput.value) + Number(taxAmount);

    //show in HTML Element
    taxAmountShow.innerText = totalAmount;

}


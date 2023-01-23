let dollarInput = document.getElementById('dollar-id');
let yenInput = document.getElementById('yen-id');
let rupeeInput = document.getElementById('rupee-id')


function calculateCurrency(){
    yenInput.value = dollarInput.value * 132.33;
    rupeeInput.value = dollarInput.value * 130.88;
    
    
}
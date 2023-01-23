let chargerAmount = document.getElementById('charge-amount-id');

function plus(amount) {
    chargerAmount.value = Number(chargerAmount.value) + amount;
}

function minus(amount) {
    if(chargerAmount.value >= amount){
        chargerAmount.value = Number(chargerAmount.value) - amount;
    }
    }
    

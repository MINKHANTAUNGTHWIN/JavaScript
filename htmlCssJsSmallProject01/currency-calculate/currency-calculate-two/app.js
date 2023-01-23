let fromId = document.getElementById('from');
let toId = document.getElementById('to');

function calculateFuntionYen(){
    toId.value = fromId.value * 137.17;
}

function calculateFuntionRupee(){
    toId.value = fromId.value * 82.58;
}

function calculateFuntionKyat(){
    toId.value = fromId.value * 2100.16;
}

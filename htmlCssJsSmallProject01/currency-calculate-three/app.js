let dollarId = document.getElementById('dollar');
let yenId = document.getElementById('yen');
let rupeeId = document.getElementById('rupee');
let kyatId = document.getElementById('kyat');
let bahtId = document.getElementById('baht');
let poundId = document.getElementById('pound');

function calculateCurrency(){
    yenId.value = dollarId.value * 135.39;
    rupeeId.value = dollarId.value * 132.18;
    kyatId.value = dollarId.value * 2099.64;
    bahtId.value = dollarId.value * 34.61;
    poundId.value = dollarId.value * 0.81;    
}


    //  135.39;
    //  132.18;
    //  2099.64;
    //  34.61;
    //  0.81;


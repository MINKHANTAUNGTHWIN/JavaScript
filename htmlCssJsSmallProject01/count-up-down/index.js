let countNum = document.getElementById('count-num-id');

function increasement(){
  countNum.innerText = Number(countNum.innerText) + 1;
}

function decreasement(){
  if (countNum.innerText > 0 ){

    return countNum.innerText = Number(countNum.innerText) - 1;
  }
  
}

function reset(){
  countNum.innerText = Number(countNum.innerText) * 0;
}
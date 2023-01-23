function addItem(){
    let fruitInput = document.getElementById('fruitInputId');
    let priceInput = document.getElementById('priceInputId');
    let fruitListContainer = document.getElementById('fruitsListId');
  
    if(fruitInput.value.trim() !=""){
        fruitListContainer.innerHTML = `<div class="fruit">` + fruitInput.value + ' ' + priceInput.value + '円' + `</div>` + fruitListContainer.innerHTML;

    }

}
function addItem(){
    let fruitInput = document.getElementById('fruitInputId');
    let fruitListContainer = document.getElementById('fruitsListId');
  
    if(fruitInput.value.trim() !=""){
        fruitListContainer.innerHTML = `<div class="fruit">` + fruitInput.value + `</div>` + fruitListContainer.innerHTML;

    }

}
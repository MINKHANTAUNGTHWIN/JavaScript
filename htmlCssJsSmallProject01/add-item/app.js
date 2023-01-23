function addItem(){
    let itemListBox = document.getElementById('item-list-id');
    let itemInput = document.getElementById('item-input-id');
    let errorMsg = document.getElementById('error-msg');

    // console.log(itemListBox.innerHTML);

    if (itemInput.value.trim() != '') {
    itemListBox.innerHTML = `<div class="item" onclick="deleteEle(this)"><p>${itemInput.value}</p></div>` + itemListBox.innerHTML;
    
    errorMsg.innerText = '';
}
else {
    errorMsg.innerText = '上のテキストボックスに何かを入れて下さい';
}
}

function deleteEle(ele){
    ele.remove();
}
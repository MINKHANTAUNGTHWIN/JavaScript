let userNameFromStorage = localStorage.getItem('user-name');
let title = document.getElementById('title-id');

title.innerText = title.innerText + " " + userNameFromStorage;
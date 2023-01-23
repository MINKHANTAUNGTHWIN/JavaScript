let title = document.getElementById('title-id');
title.innerText = 'MY SHOP';    

let fruitContainer = document.getElementById('fruit-container-id');


let fruitImgArr = ['360_F_310320273_I9rR1l7918MJoZ0GRHGIBgZl9F9ShEXq.jpg',
'istockphoto-1227301369-612x612.jpg',
'pineapple.jpg','lemon.jpg']

let fruitNameArr = ['Apple', 'Orange', 'Pineapple', 'Lemon'];

for ( let i = 0; i < fruitNameArr.length; i++) {
   
    fruitContainer.innerHTML = fruitContainer.innerHTML +
    ` <div class="fruit">
    <div class="fruit-img">
        <img src="${fruitImgArr[i]}" alt="">
    </div>
    <div class="fruit-name">
        ${fruitNameArr[i]}
    </div>
</div>`
}

let selectContainer = document.getElementById('select-container');
let countryArr = [
    'Nepal',
    'Myanmar',
    'Japan',
    'Korea',
    'Thailand',
    'Cambodia',
    'India',
    'China',
    'Laos',
    'Indonesia',
    'Philipine',
    'Russia',
    'Ukarine',
    'Singapore',
    'Canada',
    'England',
    'Spain',
    'Taiwan',
    'France',
    'Jordan'
];

for(let i = 0; i < countryArr.length; i++) {
    selectContainer.innerHTML = selectContainer.innerHTML +
    `<option>${countryArr[i]}</option>`;
}

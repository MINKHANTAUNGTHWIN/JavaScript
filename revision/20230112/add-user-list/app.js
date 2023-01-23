let firstNameId = document.getElementById('first-name-id');
let lastNameId = document.getElementById('last-name-id');
let ageId = document.getElementById('age-id');
let hobbyId = document.getElementById('hobby-id');

let userNameResult = document.getElementById('user-name-result-id');
let ageResult = document.getElementById('age-result-id');
let hobbyResult = document.getElementById('hobby-result-id');

let userListContainer = document.getElementById('userListId');





function addUser(){
    // userNameResult.value = firstNameId.value + lastNameId.value;
    // ageResult.value = ageId.value;
    // hobbyResult.value = hobbyId.value; 
    // console.log(container1.innerHTML);
    // console.log(container2.innerHTML);
    userListContainer.innerHTML = ` 
    <div class="user">
                    <div class="user-name">
                        <label for="">Name</label>
                        <input type="text" name="" id="user-name-result-id" value="${firstNameId.value} ${lastNameId.value}" disabled>
                    </div>
                    <div class="user-age">
                    <label for="">Age</label>
                    <input type="text" name="" id="age-result-id" value="${ageId.value}" disabled>
                    </div>
                    <div class="user-hobby">
                    <label for="">Hobby</label>
                    <input type="text" name="" id="hobby-result-id" value="${hobbyId.value}" disabled>
                    </div>
                </div> ` + userListContainer.innerHTML;

}

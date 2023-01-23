function loginAction(){
    let userName = document.getElementById('user-name-id');
    let pwId = document.getElementById('pw-id')
    let confirmPwId = document.getElementById('confirm-pw-id');

    let error = document.getElementById('error-msg-box');

    //check = > is that empty of the userName.value => enter username
    //check => is that empty of the password +> enter password

    if (userName.value.trim() ==""){
        error.innerText =  `Please enter username`;
    }

    else if (pwId.value.trim() == "" || confirmPwId.value.trim() == ''){
        error.innerText = `Please enter password`;
    } 

    else if( pwId.value == confirmPwId.value) {
        //save storage
        console.log(userName.value);
        localStorage.setItem('user-name',userName.value);

        window.location.href = 'welcome.html';
    }

    else {    
        error.innerText = `Password doesn't match!`;
    }
}
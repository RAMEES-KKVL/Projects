const email = document.getElementById("email")
const password = document.getElementById("password")
const confirmPassword = document.getElementById("confirmPassword")
const emaiError = document.getElementById("emaiErr")
const passError = document.getElementById("passErr")
const cPassError = document.getElementById("cPassErr")



const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

// const validatingEmail = emailRegex.test(email.value)
// const validatingPassword = passwordRegex.test(password.value)

email.onblur = ()=>{
    if(emailRegex.test(email.value)){
        emaiError.style.display = "none";
    }
    else{
        emaiError.style.display = "block";
        emaiError.innerHTML = 'invalid'
    }
}

password.onblur = ()=>{
    if( passwordRegex.test(password.value) ){
        passError.style.display = "none";
    }
    else{
        passError.style.display = "block";
        passError.innerHTML = 'invalid'
    }
}

confirmPassword.onblur = (val)=>{
    console.log();
    if(password.value == confirmPassword.value){
        cPassError.style.display = "none";
    }
    else{
        cPassError.style.display = "block";
        cPassError.innerHTML = 'invalid'
    }
}
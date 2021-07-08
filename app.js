const form = document.getElementById("form");
const firstname = document.getElementById("fname");
const lastname = document.getElementById("lname");
const email = document.getElementById("email");
const password = document.getElementById("psswrd");

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs(){
    const firstnameValue = firstname.value.trim();
    const lastnameValue = lastname.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if(firstnameValue === ''){
        setErrorFor(firstname, 'First Name cannot be empty')
    }else{
        setSuccessFor(firstname);
    }

    if(lastnameValue === ''){
        setErrorFor(lastname, 'Last name cannot be empty');
    }else{
        setSuccessFor(lastname);
    }

    if(emailValue === ''){
        setErrorFor(email, 'Looks like this is not an email')
    }else{
        setSuccessFor(email);
    }

    if(passwordValue === ''){
        setErrorFor(password, 'Password cannot be empty');
    }else{
        setSuccessFor(password);
    }


}

function setErrorFor(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.innerText = message;
    formControl.className = 'form-control error';
}

function setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success'
}

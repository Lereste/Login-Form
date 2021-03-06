const form = document.getElementById('form');
const userName = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');

form.addEventListener('submit', (event) => {
   event.preventDefault();

   checkInputs();
});

function checkInputs() {
   // trim to remove the whitespaces
   const userNameValue = userName.value.trim();
   const emailValue = email.value.trim();
   const passwordValue = password.value.trim();
   const confirmPasswordValue = confirmPassword.value.trim();

   if(userNameValue === '') {
		setErrorFor(userName, 'Username cannot be blank');
	} else {
		setSuccessFor(userName);
	}

   if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}

   if(passwordValue === '') {
		setErrorFor(password, 'Password cannot be blank');
	} else {
		setSuccessFor(password);
	}

   if(confirmPasswordValue === '') {
		setErrorFor(confirmPassword, 'Confirm password cannot be blank');
	} else if(passwordValue !== confirmPasswordValue) {
		setErrorFor(confirmPassword, 'Passwords does not match');
	} else{
		setSuccessFor(confirmPassword);
	}

}

function setErrorFor(input, message) {
	const formControl = input.parentElement; // form-control
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement; // form-control
	formControl.className = 'form-control success';
}


function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
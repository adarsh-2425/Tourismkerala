const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phonenumber = document.getElementById('phonenumber');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');


// form.addEventListener('submit', e => {
// 	e.preventDefault();
	
// 	checkInputs();
// });

function checkInputs() {
	// trim to remove the whitespaces
	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	const phonenumberValue = phonenumber.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();
	


	
	
	if(usernameValue === '') {
		setErrorFor(username, 'Username cannot be blank');
		return false;
	} else {
		setSuccessFor(username);
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
		return false;
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
		return false;
	} else {
		setSuccessFor(email);
	}

	if(phonenumberValue === '') {
		setErrorFor(phonenumber, 'Phone Number cannot be blank');
		return false;
	}else if (!isPhonenumber(phonenumberValue)) {
		setErrorFor(phonenumber, 'Not a valid Phonenumber');
		return false;
	}
	 else {
		setSuccessFor(phonenumber);
	}
	
	if(passwordValue === '') {
		setErrorFor(password, 'Password cannot be blank');
		return false;
	}else if (!isPassword(passwordValue)) {
		setErrorFor(password, 'Not a valid password');
		return false;
	}
	 else if(ispstrong(passwordValue)) {
		setStrongFor(password,'Strong');
			
	}
	else if(ispmedium(passwordValue)) {
		setMediumFor(password,'Medium');
		
	}
	else{
		setPoorFor(password,'Poor');
	}
	
	if(password2Value === '') {
		setErrorFor(password2, 'Password2 cannot be blank');
		return false;
	} else if(passwordValue !== password2Value) {
		setErrorFor(password2, 'Passwords does not match');
		return false;
	} else{
		setSuccessFor(password2);
	}
	return true;
}




function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input,message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control success';
	small.innerText = message;
	
}
function setStrongFor(input,message){
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control strong';
	small.innerText = message;
}
function setMediumFor(input,message){
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control medium';
	small.innerText = message;
}
function setPoorFor(input,message){
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control poor';
	small.innerText = message;
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
function isPhonenumber(phonenumber){
    return /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(phonenumber);
}
function isPassword(password){
	return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/.test(password);
}
function ispstrong(password){
	return /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}$/.test(password);
}
function ispmedium(password){
	return /^((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))$/.test(password);
}


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
		setErrorFor(phonenumber, 'Please enter 10 digit number');
		return false;
	}
	 else {
		setSuccessFor(phonenumber);
	}
	
	if(passwordValue === '') {
		setErrorFor(password, 'Password cannot be blank');
		return false;
	}else if (!isPassword(passwordValue)) {
		setErrorFor(password, 'Password must contain Minimum 8 characters, at least one uppercase, one lower case, and one number');
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
		setErrorFor(password2, 'Please enter the password again');
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
	return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password);
}
function ispstrong(password){
	return /^((?=.*[a-z])(?=.*[A-Z])(?=.*[10-15])(?=.*[^A-Za-z0-9])(?=.{11,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{11,}))$/.test(password);

}
function ispmedium(password){
	return /^((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,10}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,10}))$/.test(password);
}


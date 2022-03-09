 
const menu = document.getElementById("idm");
const bd = document.getElementById("bd");
const showBtn = document.querySelector(".navbar-toggler");
const hideBtn = document.querySelector(".close-btn");

showBtn.addEventListener("click", function showMenu(){
    menu.style.display = "block";
    bd.style.overflowY = "hidden";
    menu.style.overflow = "scroll";
    menu.style.height = "100vh";

})

hideBtn.addEventListener("click", function clsMenu(){
    bd.style.overflowY = "auto";
    menu.style.display = "none";
})

const form = document.getElementById('form-1')
const username = document.getElementById('name')
const email = document.getElementById('email')
const password = document.getElementById('password')



function showError(input, message) {
	let parent = input.parentElement
	let small = parent.querySelector('small')
    parent.classList.add('error')
	small.innerText = message
}

function showSuccess(input) {
	let parent = input.parentElement
	let small = parent.querySelector('small')
    parent.classList.remove('error')
	small.innerText = ''
}


function checkEmail(input) {
	const regexEmail =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

	if (regexEmail.test(input.value.trim())) {
		showSuccess(input)
	} else {
		showError(input, 'Email is not valid')
	}
}

function getFieldName(input) {
	return input.id.charAt(0).toUpperCase() + input.id.slice(1)
}

function checkRequired(inputArr) {
	let isRequired = false
	inputArr.forEach(function (input) {
		if (input.value.trim() === '') {
			showError(input, `${getFieldName(input)} is required`)
			isRequired = true
		} else {
			showSuccess(input)
		}
	})

	return isRequired
}


function checkLength(input, min, max) {
	if (input.value.length < min) {
		showError(
			input,
			`${getFieldName(input)} must be at least ${min} characters`
		)
	} else if (input.value.length > max) {
		showError(
			input,
			`${getFieldName(input)} must be less than ${max} characters`
		)
	} else {
		showSuccess(input)
	}
}



form.addEventListener('submit', function (e) {
	e.preventDefault()

	
	if (!checkRequired([username, email, password])) {
		checkLength(username, 3, 15)
		checkLength(password, 8, 25)
		checkEmail(email)	
		
	} 
	

    console.log('Name: ', username.value);
    console.log('Email: ', email.value);
    console.log('Password: ', password.value);
	
    

	
	
})




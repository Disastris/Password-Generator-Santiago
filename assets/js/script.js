// Assignment Code
var generateBtn = document.querySelector('#generate');
const specialChars = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
//numeric chars array
const numericChars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

//lower case chars array
const lowerCasedChars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

const upperCasedChars = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
// Write password to the #password input
function writePassword() {
	var password = generatePassword();
	var passwordText = document.querySelector('#password');
	
	passwordText.value = password;
}
function pickRandom(array) {
	var randomNumber = Math.floor(Math.random()*array.length)
	console.log(randomNumber,array[randomNumber])
	return array[randomNumber]
}

function generatePassword() {
	var finalPassword = []
	var passwordLength = prompt('How long would you like your password to be?')
	if (passwordLength < 8 || passwordLength > 128) {
		return
	}
	var passwordUppers = confirm('Would you like to use uppercase?')
	var passwordSpecial = confirm('Would you like to use any special characters?')
	var passwordNumeric = confirm('Would you like to use any numerics?')
	var passwordLower = confirm('Would you like to use lower case letters?')
	console.log(passwordLength,passwordUppers,passwordSpecial,passwordNumeric,passwordLower)
	if (!passwordUppers || !passwordSpecial || !passwordNumeric || !passwordLower) {
		return
	}
	if (passwordUppers) {
	finalPassword.push(pickRandom(upperCasedChars))
	console.log(finalPassword)	
	}
	if (passwordSpecial) {
		finalPassword.push(pickRandom(specialChars))
		console.log(finalPassword)	
	}
	if (passwordNumeric) {
		finalPassword.push(pickRandom(numericChars))
		console.log(finalPassword)	
	}
	if (passwordLower) {
		finalPassword.push(pickRandom(lowerCasedChars))
		console.log(finalPassword)	
	}
	for (let index = finalPassword.length; index < passwordLength; index++) {
		finalPassword.push(pickRandom(upperCasedChars))
		
	}
	return finalPassword.join('')
	return 'password'
}
// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

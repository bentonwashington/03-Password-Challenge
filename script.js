// Assignment Code
var generateBtn = document.querySelector("#generate");


var uppercaseList = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowercaseList = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var numbersList = ['0','1','2','3','4','5','6','7','8','9'];
var specialList = ['!','@','#','$','%','^','&','*','(',')',';'];



function generatePassword () {
  var selectedCharacters = []
  var passwordLength = parseInt(window.prompt('Please enter the desired length of your password? (8 to 128 characters)'));
  console.log(typeof(passwordLength))
  console.log(isNaN(passwordLength))

  if (passwordLength <= 7 || passwordLength >= 129 || isNaN(passwordLength)) {
    window.alert('Please enter a valid number. Click Generate Password to try again.');
    return;
} 
  var uppercase = window.confirm('Would you like uppercase letters? ("yes" or "no")');
  var lowercase = window.confirm('Would you like lowercase letters? ("yes" or "no")');
  var numbers = window.confirm('Would you like numbers? ("yes" or "no")');
  var special = window.confirm('Would you like special characters? ("yes" or "no")');

if (uppercase) {
  selectedCharacters.push(uppercaseList.join(''))
} 
if (lowercase) {
  selectedCharacters.push(lowercaseList.join(''))
}
if (numbers) {
  selectedCharacters.push(numbersList.join(''))
}
if (special) {
  selectedCharacters.push(specialList.join(''))
}
selectedCharacters = selectedCharacters.join('').split('')
console.log(selectedCharacters)

var randomPassword = []
for (let i = 0; i < passwordLength; i++){
  let randomNumber = Math.floor(Math.random() * selectedCharacters.length)
  randomPassword.push(selectedCharacters[randomNumber])
}

randomPassword = randomPassword.join('')
return randomPassword
 
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

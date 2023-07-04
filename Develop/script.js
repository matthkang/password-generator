// Assignment code here
let password = "";
let passwordLength = 0;
let lowerCaseType = false;
let upperCaseType = false;
let numericType = false;
let specialType = false;


function setPasswordLength() {
  passwordLength = prompt("Choose a length between 8-128 for the length of the password");

  // invalid length
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Invalid password length. Password must be 8-128 characters.")
    setPasswordLength();
  }
}

function setCharacterType() {
  lowerCaseType = confirm("Would you like the password to contain lowercase type characters?")
  upperCaseType = confirm("Would you like the password to contain upperCase type characters?")
  numericType = confirm("Would you like the password to contain numeric type characters?")
  specialType = confirm("Would you like the password to contain special type characters?")
}

// prompts to create password
function generatePassword() {
  setPasswordLength();
  setCharacterType();

  // not a single type selected
  if (lowerCaseType === false && upperCaseType === false && numericType === false && specialType === false){
    alert("At least one character type needs to be selected");
    generatePassword();
  }
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

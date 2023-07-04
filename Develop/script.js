// Assignment code here
let constructedPassword = [];
let passwordLength = 0;
let lowerCaseType = false;
let upperCaseType = false;
let numericType = false;
let specialType = false;

let lowerCaseChars = "abcdefghijklmnopqrstuvwxyz".split("");
let upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
let numericChars = "1234567890".split("");
let specialChars = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~".split('');

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

// create array of potential characters for password
function constructPassword() {
  if (lowerCaseType === true){
    constructedPassword = constructedPassword.concat(lowerCaseChars);
    console.log("lower case true");
  }
  if (upperCaseType === true){
    constructedPassword = constructedPassword.concat(upperCaseChars);
    console.log("upper case true");

  }
  if (numericChars === true){
    constructedPassword = constructedPassword.concat(numericChars);
    console.log("numeric case true");

  }
  if (specialChars === true){
    constructedPassword = constructedPassword.concat(specialChars)
    console.log("special case true");

  }
}

// prompts to create password
function generatePassword() {
  setPasswordLength();
  setCharacterType();

  constructPassword();

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

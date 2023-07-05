// Assignment code here
let password = "";
let possibleChars = [];
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

  // cancel button
  if (passwordLength == null){
    return null;
  }

  // invalid input
  else if (isNaN(passwordLength)){
    alert("Invalid input. Password must be a number between 8-128 characters.")
    setPasswordLength();
  }

  // invalid length
  else if (passwordLength < 8 || passwordLength > 128) {
    alert("Invalid password length. Password must be 8-128 characters.")
    setPasswordLength();
  }
}


// create array of potential characters for password
function setCharacterType() {
  lowerCaseType = confirm("Would you like the password to contain lowercase type characters?")
  upperCaseType = confirm("Would you like the password to contain upperCase type characters?")
  numericType = confirm("Would you like the password to contain numeric type characters?")
  specialType = confirm("Would you like the password to contain special type characters?")

  // not a single type selected
  if (lowerCaseType === false && upperCaseType === false && numericType === false && specialType === false){
    alert("At least one character type needs to be selected");
    setCharacterType();
  }

  if (lowerCaseType === true){
    possibleChars = possibleChars.concat(lowerCaseChars);
    console.log("lower case true");
  }
  if (upperCaseType === true){
    possibleChars = possibleChars.concat(upperCaseChars);
    console.log("upper case true");

  }
  if (numericType === true){
    possibleChars = possibleChars.concat(numericChars);
    console.log("numeric case true");

  }
  if (specialType === true){
    possibleChars = possibleChars.concat(specialChars)
    console.log("special case true");

  }
}

// construct password
function createPassword() {
  for (let i = 0; i < passwordLength; i++){
    let randomChar = possibleChars[Math.floor(Math.random()*possibleChars.length)];
    password += randomChar;
  }
  console.log("password", password);
}

// initiate prompts to create password
function generatePassword() {
  // if click cancel button, exit function
  if (setPasswordLength() === null){
    return;
  }

  // retrieve selected character types
  setCharacterType();

  // construct password based on length and character types
  createPassword();
  
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

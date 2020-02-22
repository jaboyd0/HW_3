// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordLength = prompt("Enter number of characters needed for password: \n(suggested 8-128 for security)")
var lowerCase =confirm("Do you want lower case characters included?")
var upperCase =confirm("Do you want upper case characters included?")
var numeric =confirm("Do you want numeric characters included?")
var Special =confirm("Do you want special characters included?")

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

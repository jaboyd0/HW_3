// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordLength = prompt("Enter number of characters needed for password: \n(suggested 8-128 for security)")
var lowerCase =confirm("Do you want lower case characters included?")
var upperCase =confirm("Do you want upper case characters included?")
var numeric =confirm("Do you want numeric characters included?")
var special =confirm("Do you want special characters included?")
var passwordText = document.querySelector("#password");

if (lowerCase) {
  var lowerArray = "abcdefghijklmnopqrstuvwxyz".split("");
} else {
  var lowerArray = ""
}

if (upperCase) {
  var upperArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
} else {
  var upperArray = ""
}

if (numeric) {
  var numericArray = "0123456789".split("");
} else {
  var numericArray = ""
}

if (special) {
  var specialArray = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~".split("");
} else {
  var specialArray = ""
}

var characterPool = lowerArray.concat(upperArray, numericArray, specialArray);

console.log (lowerArray)
console.log (upperArray)
console.log (numericArray)
console.log (specialArray)
console.log (characterPool)

// Write password to the #password input
function writePassword() {
  passwordText.value = "";
  // var password = generatePassword();
  for(var i = 0; i < parseInt(passwordLength); i++) {
  var password = characterPool[Math.floor(Math.random() * characterPool.length)]

  passwordText.value +=password;
  }
}

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);

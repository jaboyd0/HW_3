// Initial Variables
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");


// function that runs when button clicked
function writePassword() {
  passwordText.value = "";

// gathering desired password requirments

  var passwordLength = prompt("Enter number of characters needed for password: \n(must be between 8-128 characters for security)") 
    if (parseInt(passwordLength) < 8) {
      alert ("Minimum Password length is 8")
      return;
    }
    if (parseInt(passwordLength) > 128) {
      alert ("Maximum password length is 128")
      return;
    }
    if (passwordLength === "") {
      alert ("Must provide response to Password Length")
      return;
    }
      
  var lowerCase =confirm("Do you want lower case characters included?")
  var upperCase =confirm("Do you want upper case characters included?")
  var numeric =confirm("Do you want numeric characters included?")
  var special =confirm("Do you want special characters included?")

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
  
  if (lowerCase !== true && upperCase !== true && numeric !== true && special !== true) {
    alert ("Please select at least one character type")
    return;
}

  var characterPool = lowerArray.concat(upperArray, numericArray, specialArray);

  console.log (characterPool)

  // random character generator

  for(var i = 0; i < parseInt(passwordLength); i++) {
  var password = characterPool[Math.floor(Math.random() * characterPool.length)]

  passwordText.value +=password;
  }
}



generateBtn.addEventListener("click", writePassword);

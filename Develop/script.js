// Assignment code here
var passwordlength = prompt("How many characters should the password be? Select 8-128 charcters.")
var passworduppercase = confirm("Click OK to include uppercase character.")
var passwordlowercase = confirm("click OK to include lowercase letters")
var passwordnumber = confirm("Click OK to include numbers.")
var passwordspecial = confirm("Click OK to include special characters.")


function generatePassword(){
  

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

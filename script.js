// Assignment code here
//Declaring variables/arrays for character list and setting character list itself to an empty array to be added onto.
var symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "[", "]", "{", "}", "<", ">"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var availableCharacters = [];


//Function in order to prompt and gather user input data as well as return false value if length in not within specifications.
function getPrompts() {
  availableCharacters = [];

  lengthEl = parseInt(prompt("How many characters should the password be? Select 8-128 charcters."));
  if (isNaN(lengthEl) || lengthEl < 8 || lengthEl > 128) {
    alert("Character length must be between 8 - 128 characters.");
    return false;
  }

  if (confirm("Click OK to include uppercase character.")) {
    availableCharacters = availableCharacters.concat(uppercase)
  };

  if (confirm("click OK to include lowercase letters")) {
    availableCharacters = availableCharacters.concat(lowercase)
  };

  if (confirm("Click OK to include numbers.")) {
    availableCharacters = availableCharacters.concat(numbers)
  };

  if (confirm("Click OK to include symbols.")) {
    availableCharacters = availableCharacters.concat(symbols)
  };

  return true
};


//Function to actually generate password based on paramters input through getprompts function.
function generatePassword() {
  var pass = "";

  for (var i = 0; i < lengthEl; i++) {
    var randomIndex = Math.floor(Math.random() * availableCharacters.length)
    pass = pass + availableCharacters[randomIndex];
  }

  return pass


};
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
//Added getprompts function and conditional statement to return empty string if getprompts returns false.
function writePassword() {
  var correctPrompts = getPrompts();
  var passwordText = document.querySelector("#password");
  if (correctPrompts) {
    var Password = generatePassword();
    passwordText.value = Password;
  } else {
    passwordText.value = "";
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



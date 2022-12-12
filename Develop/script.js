// Assignment code here
var lengthEl = prompt("How many characters should the password be? Select 8-128 charcters.");
var uppercaseEl = confirm("Click OK to include uppercase character.");
var lowercaseEl = confirm("click OK to include lowercase letters");
var numberEl = confirm("Click OK to include numbers.");
var symbolsEl = confirm("Click OK to include special characters.");
var symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "[", "]", "{", "}", "<", ">"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
//var lowercaseChar = getLowercase();
//var uppercaseChar = getUppercase();
//var numChar = getNumber();






function generatePassword(lengthEl, uppercaseEl, lowercaseEl, numberEl, symbolsEl){
  var length = lengthEl; 
  var availableCharacters = [

    ...(symbolsEl ? symbols : []),
    ...(numberEl ? numbers : []),
    ...(uppercaseEl ? uppercase : []),
    ...(lowercaseEl ? lowercase : []),
  ];

  

  for(var i = 0; i < length; i++){
    var randomIndex = Math.floor(Math.random() * availableCharacters.length);
    password += availableCharacters[randomIndex];

  };
};
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





//function getLowercase(){
 // return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
 /// };

//function getUppercase(){
 // return String.fromCharCode(Math.floor(Math.random() * 26) +65)
//};

//function getNumber(){
  //return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
//}

//function getSymbol(){
  //symbols = "!@#$%^&*(){}[]+<>/";
  //return symbols[Math.floor(Math.random() * symbols.length)]
//};
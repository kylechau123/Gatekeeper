var generateBtn = document.querySelector("#generate");

var lowerSet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperSet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numSet = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var specialSet = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '`', '~', '-', '_', '=', '+', '[', '{', ']', '}', '|', ';', ':', '"', '<', ',', '>', '.', '/', '?'];

var pool = [];

function generatePassword() {

  var passLength = window.prompt("How many characters would you like to have in your password?");

  if(passLength > 128) {
    window.alert("Length cannot be more than 128 characters");
    return ""
  }

  if(passLength < 8) {
    window.alert("Length cannot be less than 8 characters");
    return ""
  }


  var includeLower = window.confirm("Do you want to include lowercase?");
  var includeUpper = window.confirm("Do you want to include uppercase?");
  var includeNum = window.confirm("Do you want to include numbers?");
  var includeSpecial = window.confirm("Do you want to include special characters?");

  var pool = [];

  if(includeLower) {
    pool = pool.concat(lowerSet)
  }

  if(includeUpper) {
    pool = pool.concat(upperSet)
  }

  if(includeNum) {
    pool = pool.concat(numSet)
  }

  if(includeSpecial) {
    pool = pool.concat(specialSet)
  }

  var myPassword = ""
  
  for(i = 0; i < passLength; i++){
    var randomChar = pool[Math.floor(Math.random() * pool.length)]
    myPassword += randomChar;
  }

  return myPassword;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

generateBtn.addEventListener("click", writePassword);
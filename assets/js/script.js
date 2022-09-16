// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword(){
// get password length and retry if number doesn't fit
  let passLength = window.prompt("How many characters do you want the password to be? \nMust be between 8 & 128 characters.");
    while(passLength < 8 || passLength >128 || isNaN(passLength)){
    passLength = window.prompt("Sorry, please choose a number between 8 & 128");
  }
// establish character sets and container for usable characters
  
  let upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  let lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  let numeric = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let specChar = ['\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.','@', '%', '+'];
  let passChar=[]
// establish that no criteria have been chosen
  let criteriaChose = false;
// ask for character parameters and each character set to usable characters 
  while (!criteriaChose){
    let useLower = confirm("Would you like to include lower case letters in your password? \n Yes = OK\n No = Cancel");
    if (useLower){
      passChar= passChar.concat(lowerCase);
      criteriaChose = true
    }

    let useUpper = confirm("Would you like to include upper case letters in your password?\n Yes = OK\n No = Cancel");
    if (useUpper){
      passChar= passChar.concat(upperCase);
      criteriaChose = true
    }

    let useNum = confirm("Would you like to include numbers in your password?\n Yes = OK\n No = Cancel");
    if (useNum){
      passChar= passChar.concat(numeric);
      criteriaChose = true
    }

    let useSpec = confirm("Would you like to include special characters in your password?\n Yes = OK\n No = Cancel");
    if (useSpec){
      passChar= passChar.concat(specChar);
      criteriaChose = true
  }
  // print list of usable characters
  console.log(passChar)
// alert that one set needs to be chosen if none have been
  if (!criteriaChose){
    window.alert("You have to select at least one character set to generate a password.")  
  }
  }
// generate password
let genPass = ""

for (let i=0; i<passLength;i++){
  genPass=genPass+passChar[Math.floor(Math.random()*passChar.length)];
}

return genPass;

}
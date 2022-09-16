// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

let characterList = "";
let lowercase = "abcdefghijklmnopqrstuvwxyz";
let numbers = "1234567890";
let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let special = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

function generatePassword() { // Define password
  let generatedPassword = ""; // Define generated password as empty string
  PWlength = prompt("Please enter the number of characters. (Between 8 and 128)"); // obtain input
  if (!isNaN(PWlength)) {  //Check if value entered was a number  
    if (Math.round(PWlength) && PWlength >= 8 && PWlength <= 128) { // Check if input is valid
      lowercaseInclude = confirm("Would you like to include lowercase characters?"); // Ask if lowercase characters should be included
      numbersInclude = confirm("Would you like to include numbers?") // Ask if numbers should be included
      uppercaseInclude = confirm("Would you like to include uppercase letters?"); // Ask if uppercase letters should be included
      specialInclude = confirm("Would you like to include special characters?"); // Ask if special characters should be included
      if (lowercaseInclude || numbersInclude || uppercaseInclude || specialInclude ) {
        if (lowercaseInclude) { // If numbers are included
          characterList += lowercase; // Add lowercase letters to the array of possibilities
        }
        if (numbersInclude) { // If numbers are included
          characterList += numbers; // Add numbers to the array of possibilities
        }
        if (uppercaseInclude) { // If uppercase letters are included
          characterList += uppercase; // Add uppercase letters to the array of possibilities
        }
        if (specialInclude) { // If special characters are included
          characterList += special; // Add special characters to the array of possibilities
        }
        
        let password_is_generated = false; //Set password is generated to false
        while (!password_is_generated) { // Loop while specified criteria are met
          password_is_generated = true; // Set password is generated to true, in the case that there should only be lowercase characters
          generatedPassword = ""; // Restart password
          for (let i = 0; i<PWlength; i++) { // loop to go through the number of characters
            generatedPassword += characterList[Math.floor(Math.random()*characterList.length)]; // Add randomly generated characters to the password iteratively
          }
          console.log(generatedPassword);
          if (lowercaseInclude) { // Only if lowercase characters were selected
            password_is_generated = (new RegExp(/[a-z]/)).test(generatedPassword); // Use RegEx to assess if the generated password includes lowercase characters
            if (!password_is_generated) {
              continue
            }
          }
          if (uppercaseInclude) { // Only if uppercase characters were selected
            password_is_generated = (new RegExp(/[A-Z]/)).test(generatedPassword); // Use RegEx to assess if the generated password includes uppercase characters
            if (!password_is_generated) {
              continue
            }
          }
          if (numbersInclude) { // Only if numbers were selected
            password_is_generated = (new RegExp(/[0-9]/)).test(generatedPassword); // Use RegEx to assess if the generated password includes numbers
            if (!password_is_generated) {
              continue
            }
          }
          if (specialInclude) { //// Only if special characters were selected
            password_is_generated = (new RegExp(/[ !"#$%&'()*+,-./:;<=>?@[\\\]^_`{\|}~]/)).test(generatedPassword); // Use RegEx to assess if the generated password includes special characters
            if (!password_is_generated) {
              continue
            }
          }
        }
      } else {
        alert("Please select at least one criteria!");
      }
      
    } else { // If the value entered for the number of characters is invalid
    alert("Please enter an integer between 8 and 128!"); // Warning
    return false; 
    }
  } else {
    alert("Please enter an integer between 8 and 128!"); // Warning
    return false; 
  }
  characterList = "";
  return generatedPassword; // Return generated password
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

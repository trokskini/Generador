//event listener cuando el boton sea seleccionado
document.querySelector("#generate").addEventListener("click", writePassword);

// arrays varios
var numericCharacter = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacter = ["!", "@", "#", "$", "%", "^", "&", "*", "(", "<"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j" ,"k" ,"l" ,"m" ,"w" ,"x" ,"y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "W", "X", "Y", "Z"];

//variables
var confirmLenght = "";
var confirmSpecialCharacter;
var confirmNumericCharacter;
var confirmUpperCase;
var confirmLowerCase;

//confirmar numero de caracteres
function generatePassword() {
  var confirmLenght = (prompt("Elige el número de caracteres"));

  //si esta fuera de parametos esperados
  while(confirmLenght <= 7 || confirmLenght >= 128) {
      alert("El password debe contener mínimo 8  caracteres!");
      var confirmLenght = (prompt("Cúantos caracteres quieres que contenga tu password?"));
      }


    //parametros del password
    var confirmSpecialCharacter = confirm("Click si quieres incluir caracteres especiales");

    var confirmNumericCharacter = confirm("Click si quieres incluir números");

    var confirmLowerCase = confirm("Click si quieres incluir minúsculas");

    var confirmUpperCase = confirm("Click si quieres incluir mayúsculas");

      //**********/
      while(confirmUpperCase === false && confirmLowerCase === false && confirmSpecialCharacter === false && confirmNumericCharacter === false) {
        alert("Debes escoger por lo menos una opción");
        var confirmSpecialCharacter = confirm("Click si quieres incluir caracteres especiales");
        var confirmNumericCharacter = confirm("Click si quieres incluir números");
        var confirmLowerCase = confirm("Click si quieres incluir minúsculas");
        var confirmUpperCase = confirm("Click si quieres incluir mayúsculas");
    }
      var passwordCharacters = [];

    if (confirmSpecialCharacter) {
      passwordCharacters = passwordCharacters.concat(confirmSpecialCharacter)
    }

    if (confirmNumericCharacter) {
      passwordCharacters = passwordCharacters.concat(numericCharacter)
    }

    if (confirmLowerCase) {
      passwordCharacters = passwordCharacters.concat(lowerCase)
    }

    if (confirmUpperCase) {
      passwordCharacters = passwordCharacters.concat(upperCase)
    }

      console.log(passwordCharacters)

  //ojo con el string en base al loop del array
      var randomPassword = ""

      for (var i = 0; i < confirmLenght; i++) {
        randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.lenght)];
        console.log(randomPassword)
    }
    return randomPassword;
}

//password  input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
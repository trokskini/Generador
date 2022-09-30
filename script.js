// listas de caracteres
var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*'];

var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

var lowerCasedCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t',
'u','v','w','x','y','z',];

var upperCasedCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T',
'U','V','W','X','Y','Z',];

// Inicio de funciones para vista del usuarios
function getPasswordOptions() {
  var length = parseInt(
    prompt('De cúantos caracteres quieres la contraseña?'), 10);
  if (Number.isNaN(length)) {
    alert('Debes escribir un número para la contraseña!');
    return null;
  }

  // Verificadores
  if (length < 8) {
    alert('La contraseña debe tener por lo menos 8 caracteres');
    return null;
  }

// Cumplimiento de criterio de longitud de contraseña
  if (length > 128) {
    alert('La contraseña debe ser menor a 129 caracteres');
    return null;
  }

  // Caracteres especiales
  var hasSpecialCharacters = confirm(
    'Click OK para incluir caracteres especiales.'
  );

  // Caracteres numéricos
  var hasNumericCharacters = confirm(
    'Click OK para incluir números.'
  );

  // Caracteres en minúsculas
  var hasLowerCasedCharacters = confirm(
    'Click OK para incluir letras minúsculas.'
  );

  // Caracteres en mayúscula
  var hasUpperCasedCharacters = confirm(
    'Click OK para incluir letras mayúsculas.'
  );

  if (
    hasSpecialCharacters === false &&
    hasNumericCharacters === false &&
    hasLowerCasedCharacters === false &&
    hasUpperCasedCharacters === false
  ) {
    alert('Debes seleccionar por lo menos una categoría');
    return null;
  }

  var passwordOptions = {
    length: length,
    hasSpecialCharacters: hasSpecialCharacters,
    hasNumericCharacters: hasNumericCharacters,
    hasLowerCasedCharacters: hasLowerCasedCharacters,
    hasUpperCasedCharacters: hasUpperCasedCharacters,
  };

  return passwordOptions;
}

// Get random
function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];

  return randElement;
}

// Para generar contraseña
function generatePassword() {
// Concatenando  
  var options = getPasswordOptions();
 
  var result = [];

  var possibleCharacters = [];

  var guaranteedCharacters = [];

  if (!options) return null;

// para obtener resultados
  if (options.hasSpecialCharacters) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
    guaranteedCharacters.push(getRandom(specialCharacters));
  }

  if (options.hasNumericCharacters) {
    possibleCharacters = possibleCharacters.concat(numericCharacters);
    guaranteedCharacters.push(getRandom(numericCharacters));
  }

  if (options.hasLowerCasedCharacters) {
    possibleCharacters = possibleCharacters.concat(lowerCasedCharacters);
    guaranteedCharacters.push(getRandom(lowerCasedCharacters));
  }

  if (options.hasUpperCasedCharacters) {
    possibleCharacters = possibleCharacters.concat(upperCasedCharacters);
    guaranteedCharacters.push(getRandom(upperCasedCharacters));
  }

  // un bucle i viene de 9
  for (var i = 0; i < options.length; i++) {
    var possibleCharacter = getRandom(possibleCharacters);

    result.push(possibleCharacter);
  }

  for (var i = 0; i < guaranteedCharacters.length; i++) {
    result[i] = guaranteedCharacters[i];
  }

  // para obtener la contraseña
  return result.join('');
}

var generateBtn = document.querySelector('#generate');

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

generateBtn.addEventListener('click', writePassword);

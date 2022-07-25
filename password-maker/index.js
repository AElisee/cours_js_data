const dataLowercase = "azertyuiopqsdfghjklmwxcvbn";
const dataUppercase = dataLowercase.toUpperCase();
const dataNumber = "0123456789";
const dataSymbols = "'&$¤^,;:!?~`ç_\"/()[]{}=^*-+.'";
const rangeValue = document.getElementById("password-length");
const passwordOutput = document.getElementById("password-output");

function generatePassword() {
  const data = [];
  let password = "";

  if (lowercase.checked) data.push(...dataLowercase);
  if (uppercase.checked) data.push(...dataUppercase);
  if (numbers.checked) data.push(...dataNumber);
  if (symbols.checked) data.push(...dataSymbols);

  if (data.length == 0) {
    alert("Veuillez sélectionner au moins un critère");
    return;
  }

  for (let i = 0; i < rangeValue.value; i++) {
    password += data[Math.floor(Math.random() * data.length)];
    console.log(password);
  }

  passwordOutput.value = password;

  passwordOutput.select();
  document.execCommand("copy");

  generateBtn.textContent = "copié !";
  setTimeout(() => {
    generateBtn.textContent = "Générer mot de passe";
  }, 2000);
}

generateBtn.addEventListener("click", generatePassword);

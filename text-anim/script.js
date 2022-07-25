const target = document.getElementById("target");
let skillArray = ["développeur", "Designeur", "créatif"];
let wordIndex = 0;
let letterIndex = 0;

const createLetter = () => {
  const letter = document.createElement("span");
  target.appendChild(letter);

  letter.textContent = skillArray[wordIndex][letterIndex];

  setTimeout(() => {
    letter.remove();
  }, 2800);
};

const loop = () => {
  setTimeout(() => {
    if (wordIndex >= skillArray.length) {
      wordIndex = 0;
      letterIndex = 0;
      loop();
    } else if (letterIndex < skillArray[wordIndex].length) {
      createLetter();
      letterIndex++;
      loop();
    } else {
      letterIndex = 0;
      wordIndex++;
      setTimeout(() => {
        loop();
      }, 2800);
    }
  }, 60);
};
loop();

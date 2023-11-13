function playSound (idAudio){
    const element = document.querySelector(idAudio);
    element.play();

}

const buttonList = document.querySelectorAll('.buttonAnimal');

for (let i = 0; i < buttonList.length; i++){
    const button = buttonList[i];
    const animalSound = button.classList[1];
    const idAudio = `#sound_${animalSound}`;

    button.onclick = function (){ playSound(idAudio)};

}
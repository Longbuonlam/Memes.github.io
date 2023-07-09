var catImage = document.getElementById("catImage");
var happyButton = document.getElementById("happyButton");
var catSound = document.getElementById("catSound");
var isHappy = false;
var isSoundPlaying = false;
var soundPosition = 0;

happyButton.addEventListener("click", function() {
  if (isHappy) {
    catImage.src = "./Source/HappyCat/HappyCatStop.gif";
    if (isSoundPlaying) {
      catSound.pause();
      soundPosition = catSound.currentTime;
      isSoundPlaying = false;
    }
    happyButton.textContent = "Happy happy happy";
    isHappy = false;
  } else {
    catImage.src = "./Source/HappyCat/HappyCat.gif";
    if (!isSoundPlaying) {
      catSound.currentTime = soundPosition;
      catSound.play();
      isSoundPlaying = true;
    }
    happyButton.textContent = "Stop";
    isHappy = true;
  }
});

catSound.addEventListener("pause", function() {
  isSoundPlaying = false;
});

catSound.addEventListener("play", function() {
  isSoundPlaying = true;
});

catSound.addEventListener("ended", function() {
  // Replay the sound from the beginning
  catSound.currentTime = 0;
  catSound.play();
});

var theRockCatImage = document.getElementById("theRockCatImage");
var susButton = document.getElementById("susButton");
var theRockSound = document.getElementById("theRockSound");
var isSUSPlaying = false;
var susSoundPosition = 0;

susButton.addEventListener("click", function() {
  if (!isSUSPlaying) {
    theRockSound.currentTime = susSoundPosition;
    theRockSound.play();
    isSUSPlaying = true;
    theRockCatImage.src = "./Source/TheRockCat/TheRockCat.gif";
    setTimeout(function() {
      theRockCatImage.src = "./Source/TheRockCat/TheRockCatPic.png";
      susButton.textContent = "SUSSSSSS!";
      isSUSPlaying = false;
    }, 1500);
  }
});

theRockSound.addEventListener("ended", function() {
  // Reset the state
  theRockSound.pause();
  theRockSound.currentTime = 0;
  isSUSPlaying = false;
});


var cryingCatImage = document.getElementById("cryingCatImage");
var cryButton = document.getElementById("cryButton");
var cryingCatSound = document.getElementById("cryingCatSound");
var isCrying = false;
var isCryingSoundPlaying = false;
var cryingSoundPosition = 0;

cryButton.addEventListener("click", function() {
  if (isCrying) {
    cryingCatImage.src = "./Source/CryingCat/CryingCatRun.gif";
    if (isCryingSoundPlaying) {
      cryingCatSound.pause();
      cryingSoundPosition = cryingCatSound.currentTime;
      isCryingSoundPlaying = false;
    }
    cryButton.textContent = "Khok nè";
    isCrying = false;
  } else {
    cryingCatImage.src = "./Source/CryingCat/CryingCat.gif";
    if (!isCryingSoundPlaying) {
      cryingCatSound.currentTime = cryingSoundPosition;
      cryingCatSound.play();
      isCryingSoundPlaying = true;
    }
    cryButton.textContent = "Stop";
    isCrying = true;
  }
});

cryingCatSound.addEventListener("pause", function() {
  isCryingSoundPlaying = false;
});

cryingCatSound.addEventListener("play", function() {
  isCryingSoundPlaying = true;
});

cryingCatSound.addEventListener("ended", function() {
  // Replay the sound from the beginning
  cryingCatSound.currentTime = 0;
  cryingCatSound.play();
});


// ...existing code...

var tomChingChengCatImage = document.getElementById("tomChingChengCatImage");
var spinButton = document.getElementById("spinButton");
var chingChengSound = document.getElementById("tomChingChengSound");
var isSpinning = false;
var isChingChengSoundPlaying = false;
var chingChengSoundPosition = 0;

spinButton.addEventListener("click", function() {
  if (isSpinning) {
    tomChingChengCatImage.src = "./Source/TomChingCheng/TomChingChengPic.png";
    if (isChingChengSoundPlaying) {
      chingChengSound.pause();
      chingChengSoundPosition = chingChengSound.currentTime;
      isChingChengSoundPlaying = false;
    }
    spinButton.textContent = "Xoay nó ik bạn :>>";
    isSpinning = false;
  } else {
    tomChingChengCatImage.src = "./Source/TomChingCheng/TomChingCheng.gif";
    if (!isChingChengSoundPlaying) {
      chingChengSound.currentTime = chingChengSoundPosition;
      chingChengSound.play();
      isChingChengSoundPlaying = true;
    }
    spinButton.textContent = "Stop";
    isSpinning = true;
  }
});

chingChengSound.addEventListener("pause", function() {
  isChingChengSoundPlaying = false;
});

chingChengSound.addEventListener("play", function() {
  isChingChengSoundPlaying = true;
});

chingChengSound.addEventListener("ended", function() {
  // Replay the sound from the beginning
  chingChengSound.currentTime = 0;
  chingChengSound.play();
});


// ...existing code...

var popCatImage = document.getElementById("popCatImage");
var popButton = document.getElementById("popButton");
var popCatSound = document.getElementById("popCatSound");
var isPopPlaying = false;
var popSoundPosition = 0;

popButton.addEventListener("click", function() {
  if (!isPopPlaying) {
    popCatSound.currentTime = popSoundPosition;
    popCatSound.play();
    isPopPlaying = true;
    popCatImage.src = "./Source/PopCat/PopCat.gif";
    setTimeout(function() {
      popCatImage.src = "./Source/PopCat/PopCatPic.gif";
      popButton.textContent = "Poppp";
      isPopPlaying = false;
    }, 300);
  }
});

popCatSound.addEventListener("ended", function() {
  // Reset the state
  popCatSound.pause();
  popCatSound.currentTime = 0;
  isPopPlaying = false;
});

// ...existing code...

// ...existing code...

// ...existing code...

var oiiaCatImage = document.getElementById("oiiaCatImage");
var oiiaButton = document.getElementById("oiiaSpinButton");
var oiiaCatSound = document.getElementById("oiiaCatSound");
var isOiiaSpinning = false;
var isOiiaSoundPlaying = false;
var oiiaSoundPosition = 0;

oiiaButton.addEventListener("click", function() {
  if (isOiiaSpinning) {
    oiiaCatImage.src = "./Source/OiiaCat/OiiaCat.png";
    if (isOiiaSoundPlaying) {
      oiiaCatSound.pause();
      oiiaSoundPosition = oiiaCatSound.currentTime;
      isOiiaSoundPlaying = false;
    }
    oiiaButton.textContent = "Xoay Xoay Xoay";
    isOiiaSpinning = false;
  } else {
    oiiaCatImage.src = "./Source/OiiaCat/OiiaCatSpin.gif";
    if (!isOiiaSoundPlaying) {
      oiiaCatSound.currentTime = oiiaSoundPosition;
      oiiaCatSound.play();
      isOiiaSoundPlaying = true;
    }
    oiiaButton.textContent = "Stop";
    isOiiaSpinning = true;
  }
});

oiiaCatSound.addEventListener("pause", function() {
  isOiiaSoundPlaying = false;
});

oiiaCatSound.addEventListener("play", function() {
  isOiiaSoundPlaying = true;
});

oiiaCatSound.addEventListener("ended", function() {
  // Replay the sound from the beginning
  oiiaCatSound.currentTime = 0;
  oiiaCatSound.play();
});
//-----
var cheemsImage = document.getElementById("cheemsImage");
var bonkButton = document.getElementById("bonkButton");
var continuousBonkButton = document.getElementById("continuousBonkButton");
var bonkSound = document.getElementById("bonkSound");
var isContinuousBonking = false;
var bonkInterval;

bonkSound.volume = 1.0; // Set volume to maximum (adjust as needed)
bonkButton.addEventListener("click", function() {
  cheemsImage.src = "./Source/Cheems/Bonk!.png";
  bonkSound.play();

  setTimeout(function() {
    cheemsImage.src = "./Source/Cheems/2Cheems.png";
  }, bonkSound.duration * 1000);
});

continuousBonkButton.addEventListener("click", function() {
  if (!isContinuousBonking) {
    isContinuousBonking = true;
    continuousBonkButton.textContent = "Stop";

    // Execute the bonk code immediately
    function bonk() {
      cheemsImage.src = "./Source/Cheems/Bonk!.png";
      bonkSound.currentTime = 0; // Reset the sound to the beginning
      bonkSound.play();

      setTimeout(function() {
        cheemsImage.src = "./Source/Cheems/2Cheems.png";
      }, bonkSound.duration * 1000);
    }

    bonk(); // Execute the bonk code immediately

    // Start the interval after the first bonk
    bonkInterval = setInterval(bonk, bonkSound.duration * 2000);
  } else {
    isContinuousBonking = false;
    continuousBonkButton.textContent = "Ultra Bonk";
    clearInterval(bonkInterval);
  }
});
//-----
var ronaldoImage = document.getElementById("ronaldoImage");
var siuButton = document.getElementById("siuButton");
var siuSound = document.getElementById("siuSound");

siuSound.volume = 1.0; // Set volume to maximum (adjust as needed)
siuButton.addEventListener("click", function() {
  ronaldoImage.src = "./Source/Ronaldo/siu.png";
  siuSound.play();
  siuButton.textContent = "SIUUU";
})

//-----
var banhImage = document.getElementById("banhImage");
var banhButton = document.getElementById("banhButton");
var banhSound = document.getElementById("banhSound");

banhSound.volume = 1.0; // Set volume to maximum (adjust as needed)
banhButton.addEventListener("click", function() {
  banhImage.src = "./Source/banh/banh.png";
  banhSound.play();
  banhButton.textContent = "Đừng bấm";
})

//-----
var vietnamImage = document.getElementById("vietnamImage");
var vietnamButton = document.getElementById("vietnamButton");
var vietnamSound = document.getElementById("vietnamSound");
var quocca = false;
var isvietnamPlaying = false;
var vietnamSoundPosition = 0;

vietnamSound.volume = 1.0; // Set volume to maximum (adjust as needed)
vietnamButton.addEventListener("click", function() {
  if (quocca) {
    vietnamImage.src = "./Source/vietnam/vietnam.png";
    if (isvietnamPlaying) {
      vietnamSound.pause();
      vietnamSoundPosition = vietnamSound.currentTime;
      isvietnamPlaying = false;
    }
    vietnamButton.textContent = "CHÀO CỜ";
    quocca = false;
  } else {
    vietnamImage.src = "./Source/vietnam/vietnam.png";
    if (!isvietnamPlaying) {
      vietnamSound.currentTime = vietnamSoundPosition;
      vietnamSound.play();
      isvietnamPlaying = true;
    }
    vietnamButton.textContent = "Stop";
    quocca = true;
  }
});

vietnamSound.addEventListener("pause", function() {
  isvietnamPlaying = false;
});

vietnamSound.addEventListener("play", function() {
  isvietnamPlaying = true;
});

vietnamSound.addEventListener("ended", function() {
  // Replay the sound from the beginning
  vietnamSound.currentTime = 0;
  vietnamSound.play();
});

//-----------------------------------------------------------
var maxwellCatImage = document.getElementById("maxwellCatImage");
var maxwellSwingButton = document.getElementById("maxwellSwingButton");
var maxwellCatSound = document.getElementById("maxwellSound");
var isSwinging = false;
var isMaxwellSoundPlaying = false;
var maxwellSoundPosition = 0;

maxwellSwingButton.addEventListener("click", function() {
  if (isSwinging) {
    maxwellCatImage.src = "./Source/MaxwellCat/MaxwellCatPic.gif";
    if (isMaxwellSoundPlaying) {
      maxwellCatSound.pause();
      maxwellSoundPosition = maxwellCatSound.currentTime;
      isMaxwellSoundPlaying = false;
    }
    maxwellSwingButton.textContent = "Lắc";
    isSwinging = false;
  } else {
    maxwellCatImage.src = "./Source/MaxwellCat/MaxwellCat.gif";
    if (!isMaxwellSoundPlaying) {
      maxwellCatSound.currentTime = maxwellSoundPosition;
      maxwellCatSound.play();
      isMaxwellSoundPlaying = true;
    }
    maxwellSwingButton.textContent = "Stop";
    isSwinging = true;
  }
});

maxwellCatSound.addEventListener("pause", function() {
  isMaxwellSoundPlaying = false;
});

maxwellCatSound.addEventListener("play", function() {
  isMaxwellSoundPlaying = true;
});

maxwellCatSound.addEventListener("ended", function() {
  maxwellCatSound.currentTime = 0;
  maxwellCatSound.play();
});

//-----------------------------------------------------------
var vibingCatImage = document.getElementById("vibingCatImage");
var vibingButton = document.getElementById("vibingButton");
var vibingCatSound = document.getElementById("vibingCatSound");
var isVibing = false;
var isVibingSoundPlaying = false;
var vibingSoundPosition = 0;

vibingButton.addEventListener("click", function() {
  if (isVibing) {
    vibingCatImage.src = "./Source/VibingCat/VibingCatPic.gif";
    if (isVibingSoundPlaying) {
      vibingCatSound.pause();
      vibingSoundPosition = vibingCatSound.currentTime;
      isVibingSoundPlaying = false;
    }
    vibingButton.textContent = "Chill with me";
    isVibing = false;
  } else {
    vibingCatImage.src = "./Source/VibingCat/VibingCat.gif";
    if (!isVibingSoundPlaying) {
      vibingCatSound.currentTime = vibingSoundPosition;
      vibingCatSound.play();
      isVibingSoundPlaying = true;
    }
    vibingButton.textContent = "Stop";
    isVibing = true;
  }
});

vibingCatSound.addEventListener("pause", function() {
  isVibingSoundPlaying = false;
});

vibingCatSound.addEventListener("play", function() {
  isVibingSoundPlaying = true;
});

vibingCatSound.addEventListener("ended", function() {
  vibingCatSound.currentTime = 0;
  vibingCatSound.play();
});

// ...existing...
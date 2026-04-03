
//for dialogue that is able to be triggered multiple times:
/*
dialogue.repeat = "g1"
  converse(coalanthStatue, coalanthStatuev);
*/

//for a one-time conv:
/*
if (numberOfKeyDowns < lookOutTheWindow.length) {
                dialogue.repeat = "secret";
                converse(lookOutTheWindow, lookOutTheWindowv);
            } else if (numberOfKeyDowns == lookOutTheWindow.length) {
                if (!dialogue.loopOnceMore) {
                    dialogue.loopOnceMore = true;
                    converse(lookOutTheWindow, lookOutTheWindowv);
                    dialogue.loopOnceMore = false;
                    dialogue.lookOutWindow = true;
                    playerToSecretTile();
                }
                dialogue.lookOutWindow = true;
            }
*/


const dialogue = {
  allow: false,
  boyEnter: false,
  canUseZtoWait: true,
  narrationAllowedByUser: true,
}


let currentVoiceIndex = -1; 
const leLines = new Audio();


let currentIndex = 0;
let numberOfKeyDowns = 0;

function goBackDialogue() {
  dialogue.goingBackwards = true;
   setTimeout(function() {
            advanceDialogue();
        }, 100); //ha! fuck you!
  converse();
}

function converse(topic, voicelines) {
  if (!dialogue.goingBackwards) {
  movement.allow = false;
    if (currentIndex == 0) {
      goBack.style.display = "none";
      if (dialogue.narrationAllowedByUser) {
        soundOn.style.display = "block";
      } else {
        soundOff.style.display = "block";
      }
      topic[currentIndex].style.display = "block";
    } else if (currentIndex > 0) {
      goBack.style.display = "block";
      let prevDex = currentIndex - 1;
        if (currentIndex >= topic.length) {
          movement.allow = true;
          dialogue.repeat = false;
          currentIndex = -1;
          numberOfKeyDowns = 0;
          currentVoiceIndex = -2;
          topic[prevDex].style.display = "none";  
          goBack.style.display = "none";
          soundOff.style.display = "none";
          soundOn.style.display = "none";
      } else {
        topic[prevDex].style.display = "none";
        topic[currentIndex].style.display = "block";
      } 
  }
      currentIndex++;
      currentVoiceIndex++;
      leLines.src = voicelines[currentVoiceIndex];
      console.log(currentVoiceIndex);
      if (dialogue.narrationAllowedByUser) {
        leLines.play();
      }
  } else { //going backwards
    if (currentIndex == 1) {
      goBack.style.display = "none";
    }
    --currentIndex;
    --numberOfKeyDowns;
    topic[currentIndex].style.display = "none";
    topic[currentIndex].style.display = "block";
    let prevDex = currentIndex + 1;
    topic[prevDex].style.display = "none";
    --currentVoiceIndex;
    leLines.src = voicelines[currentVoiceIndex];
    if (dialogue.narrationAllowedByUser) {
        leLines.play();
      }
    dialogue.goingBackwards = false;
    currentIndex++;
  }
  
}



//vars updated from roomContents.js
//trigger the tile again with enter instead of arrow keys
document.addEventListener('DOMContentLoaded', () => {
  document.addEventListener('keydown', function(event) {
      if (event.key === 'Enter' || event.key === ' ') {
        advanceDialogue();
      }
    });
});

function advanceDialogue() {
  if (!dialogue.openingComplete && !game.skipStarters && dialogue.openingTimeout) {
          openingMonologue();
        }
        else if (dialogue.repeat) {
          numberOfKeyDowns++;
          if (dialogue.repeat === "a1") {
            playerToA1();
          } else if (dialogue.repeat === "a2") {
            playerToA2();
          } else if (dialogue.repeat === "a3") {
            playerToA3();
          } else if (dialogue.repeat === "a4") {
            playerToA4();
          } else if (dialogue.repeat === "a5") {
            playerToA5();
          } else if (dialogue.repeat === "a6") {
            playerToA6();
          } else if (dialogue.repeat === "a7") {
            playerToA7();
          } else if (dialogue.repeat === "b1") {
            playerToB1();
          } else if (dialogue.repeat === "b2") {
            playerToB2();
          } else if (dialogue.repeat === "b3") {
            playerToB3();
          } else if (dialogue.repeat === "b4") {
            playerToB4();
          } else if (dialogue.repeat === "b5") {
            playerToB5();
          } else if (dialogue.repeat === "b6") {
            playerToB6();
          } else if (dialogue.repeat === "b7") {
            playerToB7();
          } else if (dialogue.repeat === "c1") {
            playerToC1();
          } else if (dialogue.repeat === "c2") {
            playerToC2();
          } else if (dialogue.repeat === "c3") {
            playerToC3();
          } else if (dialogue.repeat === "c4") {
            playerToC4();
          } else if (dialogue.repeat === "c5") {
            playerToC5();
          } else if (dialogue.repeat === "c6") {
            playerToC6();
          } else if (dialogue.repeat === "c7") {
            playerToC7();
          } else if (dialogue.repeat === "d1") {
            playerToD1();
          } else if (dialogue.repeat === "d2") {
            playerToD2();
          } else if (dialogue.repeat === "d3") {
            playerToD3();
          } else if (dialogue.repeat === "d4") {
            playerToD4();
          } else if (dialogue.repeat === "d5") {
            playerToD5();
          } else if (dialogue.repeat === "d6") {
            playerToD6();
          } else if (dialogue.repeat === "d7") {
            playerToD7();
          } else if (dialogue.repeat === "e1") {
            playerToE1();
          } else if (dialogue.repeat === "e2") {
            playerToE2();
          } else if (dialogue.repeat === "e3") {
            playerToE3();
          } else if (dialogue.repeat === "e4") {
            playerToE4();
          } else if (dialogue.repeat === "e5") {
            playerToE5();
          } else if (dialogue.repeat === "e6") {
            playerToE6();
          } else if (dialogue.repeat === "e7") {
            playerToE7();
          } else if (dialogue.repeat === "f1") {
            playerToF1();
          } else if (dialogue.repeat === "f2") {
            playerToF2();
          } else if (dialogue.repeat === "f3") {
            playerToF3();
          } else if (dialogue.repeat === "f4") {
            playerToF4();
          } else if (dialogue.repeat === "f5") {
            playerToF5();
          } else if (dialogue.repeat === "f6") {
            playerToF6();
          } else if (dialogue.repeat === "f7") {
            playerToF7();
          } else if (dialogue.repeat === "g1") {
            playerToG1();
          } else if (dialogue.repeat === "g2") {
            playerToG2();
          } else if (dialogue.repeat === "g3") {
            playerToG3();
          } else if (dialogue.repeat === "g4") {
            playerToG4();
          } else if (dialogue.repeat === "g5") {
            playerToG5();
          } else if (dialogue.repeat === "g6") {
            playerToG6();
          } else if (dialogue.repeat === "g7") {
            playerToG7();
          } else if (dialogue.repeat === "a") {
            playerToA();
          } else if (dialogue.repeat === "b") {
            playerToB();
          } else if (dialogue.repeat === "c") {
            playerToC();
          } else if (dialogue.repeat === "d") {
            playerToD();
          } else if (dialogue.repeat === "e") {
            playerToE();
          } else if (dialogue.repeat === "f") {
            playerToF();
          } else if (dialogue.repeat === "g") {
            playerToG();
          } else if (dialogue.repeat === "h1") {
            playerToH1();
          } else if (dialogue.repeat === "h2") {
            playerToH2();
          } else if (dialogue.repeat === "h3") {
            playerToH3();
          } else if (dialogue.repeat === "h4") {
            playerToH4();
          } else if (dialogue.repeat === "h5") {
            playerToH5();
          } else if (dialogue.repeat === "h6") {
            playerToH6();
          } else if (dialogue.repeat === "h7") {
            playerToH7();
          } else if (dialogue.repeat === "1") {
            playerTo1();
          } else if (dialogue.repeat === "2") {
            playerTo2();
          } else if (dialogue.repeat === "3") {
            playerTo3();
          } else if (dialogue.repeat === "4") {
            playerTo4();
          } else if (dialogue.repeat === "5") {
            playerTo5();
          } else if (dialogue.repeat === "6") {
            playerTo6();
          } else if (dialogue.repeat === "7") {
            playerTo7();
          } else if (dialogue.repeat === "a8") {
            playerToA8();
          } else if (dialogue.repeat === "b8") {
            playerToB8();
          } else if (dialogue.repeat === "c8") {
            playerToC8();
          } else if (dialogue.repeat === "d8") {
            playerToD8();
          } else if (dialogue.repeat === "e8") {
            playerToE8();
          } else if (dialogue.repeat === "f8") {
            playerToF8();
          } else if (dialogue.repeat === "g8") {
            playerToG8();
          } else if (dialogue.repeat === "secret") {
            playerToSecretTile();
          } else if (dialogue.repeat === "secret1") {
            playerToSecretTile1();
          } else if (dialogue.repeat === "secret2") {
            playerToSecretTile2();
          }
        }
}

function playerToSecretTile() {
  if (!dialogue.imHeron) {   
            if (numberOfKeyDowns < itsMeImHeron.length) {
                dialogue.repeat = "secret";
                converse(itsMeImHeron, itsMeImHeronv);
            } else if (numberOfKeyDowns == itsMeImHeron.length) {
                if (!dialogue.loopOnceMore) {
                    dialogue.loopOnceMore = true;
                    converse(itsMeImHeron, itsMeImHeronv);
                    dialogue.loopOnceMore = false;
                    displayChoices();
                }
                dialogue.imHeron = true;
            }
        }
   else if (!dialogue.heronIsntHere) {   
            if (numberOfKeyDowns < heronIsntHereActually.length) {
                dialogue.repeat = "secret";
                converse(heronIsntHereActually, heronIsntHereActuallyv);
            } else if (numberOfKeyDowns == heronIsntHereActually.length) {
                if (!dialogue.loopOnceMore) {
                    dialogue.loopOnceMore = true;
                    converse(heronIsntHereActually, heronIsntHereActuallyv);
                    dialogue.loopOnceMore = false;
                    displayChoices();
                }
                dialogue.heronIsntHere = true;
            }
        } else if (!dialogue.searchMemories) {   
            if (numberOfKeyDowns < searchYourMemories.length) {
                dialogue.repeat = "secret";
                converse(searchYourMemories, searchYourMemoriesv)
                console.log("heskjnadkjllo");
            } else if (numberOfKeyDowns == searchYourMemories.length) {
                if (!dialogue.loopOnceMore) {
                    dialogue.loopOnceMore = true;
                    converse(searchYourMemories, searchYourMemoriesv);
                    dialogue.loopOnceMore = false;
                    dialogue.searchMemories = true;
                    playerToSecretTile();
                }
                dialogue.searchMemories = true;
            }
        } else if (!dialogue.lookOutWindow) {   
            if (numberOfKeyDowns < lookOutTheWindow.length) {
                dialogue.repeat = "secret";
                converse(lookOutTheWindow, lookOutTheWindowv);
            } else if (numberOfKeyDowns == lookOutTheWindow.length) {
                if (!dialogue.loopOnceMore) {
                    dialogue.loopOnceMore = true;
                    converse(lookOutTheWindow, lookOutTheWindowv);
                    dialogue.loopOnceMore = false;
                    dialogue.lookOutWindow = true;
                    playerToSecretTile();
                }
                dialogue.lookOutWindow = true;
            }
        } else if (!dialogue.reconnectLessThanAWeek) {   
            if (numberOfKeyDowns < lessThanAWeek.length) {
                dialogue.repeat = "secret";
                converse(lessThanAWeek, lessThanAWeekv);
                if (currentIndex == 6) {
                  npc2.style.display = "none";
                  door.play();
                }
                if (currentIndex == 7) {
                  npc2.style.display = "block";
                  if (!dialogue.putBoyOnG2ForEntranceConv) {
                    npc2.style.transform = "translate(480px, 160px)";
                  } else {
                    npc2.style.transform = "translate(480px, 80px)";
                  }
                  
                  door.play();
                }
                if (currentIndex == 8) {
                  npc2.style.display = "none";
                  door.play();
                }
                dialogue.boyInFountainRoom = true;
            } else if (numberOfKeyDowns == lessThanAWeek.length) {
                if (!dialogue.loopOnceMore) {
                    dialogue.loopOnceMore = true;
                    converse(lessThanAWeek, lessThanAWeekv);
                    dialogue.loopOnceMore = false;
                }
                dialogue.reconnectLessThanAWeek = true;
            }
        } else if (!dialogue.boyInFountainRoomComplete) {   
            if (numberOfKeyDowns < birdMerchantOpening.length) {
                dialogue.repeat = "secret";
                converse(birdMerchantOpening, birdMerchantOpeningv);
            } else if (numberOfKeyDowns == birdMerchantOpening.length) {
                if (!dialogue.loopOnceMore) {
                    dialogue.loopOnceMore = true;
                    converse(birdMerchantOpening, birdMerchantOpeningv);
                    dialogue.loopOnceMore = false;
                    dialogue.boyInFountainRoomComplete = true;
                    boyTurns = 1;
                    playerToSecretTile();
                }
            }
        }
}

function floatCan() {
  if (!dialogue.firstTimeFloating) {
    alert("how did Cassaandra float? With her float can.")
    dialogue.firstTimeFloating = true;
  }
}

function playerToSecretTile1() {
  if (!dialogue.asymetrical) {   
            if (numberOfKeyDowns < asymetrical.length) {
                dialogue.repeat = "secret1";
                converse(asymetrical, asymetricalv);
            } else if (numberOfKeyDowns == asymetrical.length) {
                if (!dialogue.loopOnceMore) {
                    dialogue.loopOnceMore = true;
                    converse(asymetrical, asymetricalv);
                    dialogue.loopOnceMore = false;
                }
                dialogue.asymetrical = true;
            }
        } 
}

function playerToSecretTile2() {
  dialogue.repeat = "secret2"
  converse(carryingTooMuch, carryingTooMuchv);
}

function dialogueOption1() {
  topChoice.style.display = "none";
  bottomChoice.style.display = "none";
  binaryChoicePortrait.style.display = "none";
  dialogue.binaryChoicesActive = false;
  if (!dialogue.firstChoiceMade) {
    dialogue.heronIsntHere = true;
    dialogue.repeat = "secret";
    playerToSecretTile();
    dialogue.firstChoiceMade = true;
  } else if (!dialogue.secondChoiceMade) {
    dialogue.lookOutWindow = true;
    dialogue.repeat = "secret";
    playerToSecretTile();
    dialogue.secondChoiceMade = true;
        console.log("hello2");

  }
  
}

function dialogueOption2() {
  topChoice.style.display = "none";
  bottomChoice.style.display = "none";
  binaryChoicePortrait.style.display = "none";
  dialogue.binaryChoicesActive = false;
  if (!dialogue.firstChoiceMade) {
    dialogue.imHeron = true;
    dialogue.repeat = "secret";
    playerToSecretTile();
    dialogue.firstChoiceMade = true;
  } else if (!dialogue.secondChoiceMade) {
    dialogue.searchMemories = true;
    dialogue.repeat = "secret";
    playerToSecretTile();
    dialogue.secondChoiceMade = true;
  }
}

function openingMonologue() {
  opening1.style.display = "none";
  if (numberOfKeyDowns == 3) {
    blackscreen.style.display = "none";
  }
    if (numberOfKeyDowns < opening.length) {
        converse(opening, openingV);
        numberOfKeyDowns++;
    } else if (numberOfKeyDowns == opening.length) {
      numberOfKeyDowns++;
        if (!dialogue.loopOnceMore) {
            dialogue.loopOnceMore = true;
            converse(opening, openingV);
            dialogue.loopOnceMore = false;
            numberOfKeyDowns = 0
            dialogue.openingComplete = true;
        }
    }
}
    
function pjsConvo() {
  if (numberOfKeyDowns < pjs.length) {
      dialogue.repeat = "d";
      converse(pjs, pjsV);
  } else if (numberOfKeyDowns == pjs.length) {
      if (!dialogue.loopOnceMore) {
          dialogue.loopOnceMore = true;
          converse(pjs, pjsV);
          dialogue.loopOnceMore = false;
      }
      dialogue.pjspjs = true;
  }
}

function pjsConvo2() {
  if (numberOfKeyDowns < pjs2.length) {
      dialogue.repeat = "d";
      converse(pjs2, pjs2V);
  } else if (numberOfKeyDowns == pjs2.length) {
      if (!dialogue.loopOnceMore) {
          dialogue.loopOnceMore = true;
          converse(pjs2, pjs2V);
          dialogue.loopOnceMore = false;
      }
  }
}

function imCarryingTooMuch() {
  dialogue.repeat = "secret2"
  converse(carryingTooMuch, carryingTooMuchv);
}

function displayChoices() {
  topChoice.style.display = "block";
  bottomChoice.style.display = "block";
  binaryChoicePortrait.style.display = "block";
  dialogue.binaryChoicesActive = true;
    if (!dialogue.firstChoiceMade) {
      choice1.style.display = "block";
      choice2.style.display = "block";
    } else if (!dialogue.secondChoiceMade) {
      choice1.style.display = "none";
      choice2.style.display = "none";
      choice3.style.display = "block";
      choice4.style.display = "block";
    }
}

function nowTheyreEven() {
  dialogue.repeat = "d"
  converse(even, evenV);
}

function hellbenderStatueDialogue() {
  dialogue.repeat = "f5"
  converse(hellbenderStatue, hellbenderStatuev);
}

function beetleStatueDialogue() {
  dialogue.repeat = "e1"
  converse(beetleStatue, beetleStatuev);
}

function viperStatueDialogue() {
  dialogue.repeat = "g5"
  converse(viperStatue, viperStatuev);
}

function civetStatueDialogue() {
  dialogue.repeat = "f1"
  converse(civetStatue, civetStatuev);
}

function coalanthStatueDialogue() {
  dialogue.repeat = "g1"
  converse(coalanthStatue, coalanthStatuev);
}

function jackalStatueDialogue() {
  dialogue.repeat = "d1"
  converse(jacklStat, jacklStatv);
}

function wolfStatueDialogue() {
  dialogue.repeat = "e5"
  converse(wolfStatue, wolfStatuev);
}

function merchantCutscene() {
  dialogue.repeat = "secret"
  converse(birdMerchantOpening, birdMerchantOpeningv);
}
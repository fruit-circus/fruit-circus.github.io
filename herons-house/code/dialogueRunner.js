
const dialogue = {
  allow: false,
  boyEnter: false,
  canUseZtoWait: true,
  narrationAllowedByUser: true, //normally true. true allows voicelines to play
}

let currentVoiceIndex = -1; 
const leLines = new Audio();

let activeTopic = null;
let currentIndex = 0;


function highlightArrow(arrow) {
  arrow.style.border = "2px dashed white";
  arrow.style.width = "55px";
}

function unhighlightArrow(arrow) {
  arrow.style.border = "0px dashed white";
  arrow.style.width = "60px";
}


function goBackDialogue(event) {
  dialogue.goingBackwards = true;
  goBack.style.width = "65px";
    setTimeout(function() {
      goBack.style.width = "70px";
    }, 200);
   setTimeout(function() {
            converse(activeTopic);
        }, 100);
  converse();
}

function advanceConversation(event) {
  if (event.key !== "ArrowLeft" && (event.key === "Enter" || event.key === " " || event.key === "ArrowRight")) {
    goForward.style.width = "65px";
    setTimeout(function() {
      goForward.style.width = "70px";
    }, 200);
    converse(activeTopic);
    event.preventDefault();
  }
}

function converse(topicDiv) {
  startDialogue();
  let topic = Array.from(topicDiv.children);
  console.log(topic)
if (!dialogue.goingBackwards) {
  if (currentIndex == 0) {
    dialogue.conversing = true;
    movement.allow = false;
    goForward.style.display = "block";
    goBack.style.display = "none";
    dialogue.goBackDisplayed = false;
    activeTopic = topic;
    document.addEventListener("keydown", advanceConversation);
    topic[currentIndex].style.display = "block";
    currentIndex++
    console.log("current index:", currentIndex)
  } else if (currentIndex >= topic.length) {
    checkEvents(currentIndex);
    movement.allow = true;
    dialogue.conversing = false;
    --currentIndex;
    topic[currentIndex].style.display = "none";
    currentIndex = 0;
    goBack.style.display = "none";
    dialogue.goBackDisplayed = false;
    goForward.style.display = "none";
    document.removeEventListener("keydown", advanceConversation);
  } else if (currentIndex > 0) {
    goBack.style.display = "block";
    dialogue.goBackDisplayed = true;
    let prevDex = currentIndex - 1;
    topic[currentIndex].style.display = "block";
    topic[prevDex].style.display = "none";
    currentIndex++
    checkEvents(currentIndex);
  } 
} else { //going backwards
    if (currentIndex == 1) {
    goBack.style.display = "none";
    dialogue.goBackDisplayed = false;
    }
    --currentIndex;
    topic[currentIndex].style.display = "none";
    topic[currentIndex].style.display = "block";
    let prevDex = currentIndex + 1;
    topic[prevDex].style.display = "none";
    dialogue.goingBackwards = false;
    currentIndex++;
  }
}


function checkEvents(index) {
  if (index == 18) {
    blackscreen.style.display = "none";
    invButton.style.display = "block";
    spellButton.style.display = "block";
    cloverButton.style.display = "block";
    token.style.display = "block";
    movement.allow = true;
    dialogue.openingComplete = true;
    setTimeout(function() {
      if (!player.hasUsedTheArrowKeysToMove) {
        alert("Fun fact: You can use the arrow keys to move around!");
        alert("I knew that already.");
      }
    }, 20000); //20 secends
  } else if (dialogue.boyEnterCurrent) {
    if (index == 7) {
      displayChoices();
      dialogue.boyEnterCurrent = false;
    }
  }
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

    

function imCarryingTooMuch() {
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

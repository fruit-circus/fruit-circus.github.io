//prevent spacebar scrolling
window.addEventListener('keydown', function(e) {
  if(e.keyCode == 32 && e.target == document.body) {
    e.preventDefault();}}); 

    
//general keyboard shortcuts
document.addEventListener("DOMContentLoaded", (event) => {   
document.onkeydown = (e) => {
  if (e.key == 'ArrowLeft' && dia.goBackDisplayed) {
    goBackDialogue();
  }
  if (!dia.blockArrowTravel) {
      if (e.key == 'ArrowLeft' || e.key == 'a' || e.key == 'A') {
      goWest(); e.preventDefault();}
      else if (e.key == 'ArrowUp' || e.key == 'w' || e.key == 'W') {
      goNorth(); e.preventDefault();}
      else if (e.key == 'ArrowRight' || e.key == 'd' || e.key == 'D') {
      goEast(); e.preventDefault();}
      else if (e.key == 'ArrowDown' || e.key == 's' || e.key == 'S') {
      goSouth(); e.preventDefault();
      }
  }
}});

let room = "blueWireRoom";
let obj = {
  yellowflower: true, //true = placed
}

function pickYellowRose() {
  if (obj.yellowflower) {
    yellowrose.style.display = "none";
    yellowlit.style.display = "none";
    w2y2.style.display = "block";
    obj.yellowflower = false;
    //mark add to inv
  } else {
    yellowrose.style.display = "block";
    yellowlit.style.display = "block";
    w2y2.style.display = "none";
    obj.yellowflower = true;
  }
  
}

//GO WEST
function goWest() {
    if (room === "blueWireRoom") {
      blueWireRoom.style.display = "none";
      switchTerminus.style.display = "block";
      room = "switchTerminus";
      randomDoorAudio();
    } else if (room === "switchTerminus") {
      pinkWireRoom.style.display = "block";
      switchTerminus.style.display = "none";
      room = "pinkWireRoom";
      randomDoorAudio();
    }
} //END GOING WEST

//GO EAST
function goEast() {
    if (room === "pinkWireRoom") {
      pinkWireRoom.style.display = "none";
      switchTerminus.style.display = "block";
      room = "switchTerminus";
      randomDoorAudio();
    } else if (room === "switchTerminus") {
      blueWireRoom.style.display = "block";
      switchTerminus.style.display = "none";
      room = "blueWireRoom";
      randomDoorAudio();
    }
} //END GOING EAST

//GO SOUTH
function goSouth() {
    if (room === "switchTerminus") {
      converse(noReasonToGoBack);
    }
} //END GOING SOUTH

//GO NORTH
function goNorth() {
    if (room === "switchTerminus") {
      if (obj.yellowflower && obj.blueflower) {
        //mark to hallway
        alert("yes");
      } else {
        alert("no");
      }
    } else if (room === "pinkWireRoom") {
      converse(pinkRoses);
    } else if (room === "blueWireRoom") {
      bluerose.style.display = "block";
      bdull2.style.display = "none";
      w2b2.style.display = "none";
      bluelit.style.display = "block";
      obj.blueflower = true;
      //mark remove it from inv 
    }
} //END GOING NORTH

function showInv() {
    if (!dia.inventory) {
        converse(inventory);
        dia.inventory = true;
    }
}

function randomDoorAudio() {
    const traveling = [travel1, travel2, travel3, travel4];
    const randomIndex = Math.floor(Math.random() * traveling.length);
    const anyDoor = traveling[randomIndex];
    anyDoor.play();
}

function showNotes() {
    converse(notepad);
}

function highlightArrow(arrow) {
  arrow.style.border = "2px dashed black";
  arrow.style.width = "65px";
}

function unhighlightArrow(arrow) {
  arrow.style.border = "0px dashed black";
  arrow.style.width = "70px";
}


const dia = {
  goingBackwards: false,
}

const movement = {
    allow: true,
}

let activeTopic = null;
let currentIndex = 0;

function goBackDialogue(event) {
  dia.goingBackwards = true;
  goBack.style.width = "65px";
    goBack.style.transform = "translate(1209px, 664px)";
    setTimeout(function() {
      goBack.style.width = "70px";
      goBack.style.transform = "translate(1205px, 660px)";
    }, 200);
   setTimeout(function() {
            converse(activeTopic);
        }, 100);
  converse();
}

function advanceConversation(event) {
  if (event.key !== "ArrowLeft" && (event.key === "Enter" || event.key === " " || event.key === "ArrowRight")) {
    goForward.style.width = "65px";
    goForward.style.transform = "translate(1293px, 663px)";
    setTimeout(function() {
      goForward.style.width = "70px";
      goForward.style.transform = "translate(1290px, 660px)";
    }, 200);
    converse(activeTopic);
    event.preventDefault();
  }
}

function converse(topic) {
if (!dia.goingBackwards) {
  if (currentIndex == 0) {
    dia.blockArrowTravel = true;
    goForward.style.display = "block";
    goBack.style.display = "none";
    dia.goBackDisplayed = false;
    activeTopic = topic;
    document.addEventListener("keydown", advanceConversation);
    topic[currentIndex].style.display = "block";
    currentIndex++
  } else if (currentIndex >= topic.length) {
    --currentIndex;
    topic[currentIndex].style.display = "none";
    currentIndex = 0;
    goBack.style.display = "none";
    dia.goBackDisplayed = false;
    dia.blockArrowTravel = false;
    goForward.style.display = "none";
    document.removeEventListener("keydown", advanceConversation);
  } else if (currentIndex > 0) {
    dia.blockArrowTravel = true;
    goBack.style.display = "block";
    dia.goBackDisplayed = true;
    let prevDex = currentIndex - 1;
    topic[currentIndex].style.display = "block";
    topic[prevDex].style.display = "none";
    currentIndex++
  } 
} else { //going backwards
    if (currentIndex == 1) {
    goBack.style.display = "none";
    dia.goBackDisplayed = false;
    }
    --currentIndex;
    topic[currentIndex].style.display = "none";
    topic[currentIndex].style.display = "block";
    let prevDex = currentIndex + 1;
    topic[prevDex].style.display = "none";
    dia.goingBackwards = false;
    currentIndex++;
  }
}



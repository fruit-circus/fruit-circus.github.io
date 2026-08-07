//npc movement

const boyPosition = {
    cycle1: true,
}

const boy = {
    position: "",
    willFollow: false, //normally false
    willBlink: false,
}

let boyTurns = 0;

function boyMove() { //example prescripted movement for boy
    if (boyPosition.cycle1) {
        boyPosition.cycle2 = true;
        boyPosition.cycle1 = false;
        asher.style.transform = "translate(100px,0px)";
    } else if (boyPosition.cycle2) {
        boyPosition.cycle2 = false;
        boyPosition.cycle3 = true;
        asher.style.transform = "translate(200px,0px)";
    } else if (boyPosition.cycle3) {
        boyPosition.cycle3 = false;
        boyPosition.cycle4 = true;
        asher.style.transform = "translate(200px,100px)";
    } else if (boyPosition.cycle4) {
        boyPosition.cycle4 = false;
        boyPosition.cycle5 = true;
        asher.style.transform = "translate(200px,200px)";
    } else if (boyPosition.cycle5) {
        boyPosition.cycle4 = false;
        boyPosition.cycle5 = true;
        asher.style.transform = "translate(320px,200px)";
    }
}

function boyToStainedGlassMarket() {
    if (!dialogue.boyMoveAfterMerchantConvComplete) {
        if (boyTurns == 1) {
            asher.style.transform = "translate(160px, 80px)";
            boy.position = "c2";
            boyTurns++;
        } else if (boyTurns == 2) {
            asher.style.transform = "translate(160px, 160px)";
            boy.position = "c3";
            boyTurns++;
        } else if (boyTurns == 3) {
            asher.style.transform = "translate(80px, 160px)";
            boy.position = "b3";
            boyTurns++;
        }  else if (boyTurns == 4) {
            asher.style.transform = "translate(80px, 240px)";
            boy.position = "b4";
            boyTurns++;
        }  else if (boyTurns == 5) {
            asher.style.transform = "translate(80px, 320px)";
            boy.position = "b5";
            boyTurns++;
        }  else if (boyTurns == 6) {
            asher.style.transform = "translate(160px, 320px)";
            boy.position = "c5";
            boyTurns++;
        }  else if (boyTurns == 7) {
            asher.style.transform = "translate(160px, 400px)";
            boy.position = "c6";
            boyTurns++;
        }  else if (boyTurns == 8) {
            asher.style.transform = "translate(160px, 480px)";
            boy.position = "c7";
            boyTurns++;
        }  else if (boyTurns == 9) {
            asher.style.transform = "translate(240px, 480px)";
            boy.position = "d7";
            boyTurns++;
        } else if (boyTurns == 10) {
            dialogue.boyMoveAfterMerchantConvComplete = true;
            asher.style.display = "none";
            door.play();
            boy.position = ""; //potential future problem: if player.position is ever "" it might be the case that excuseMe plays (every turn?)
        }
    } else if (dialogue.boyMoveAfterMerchantConvComplete && !dialogue.boyMoveAfterMerchantConvCompleteComplete) {
        asher.style.display = "none";
        boy.position = "";
        dialogue.boyMoveAfterMerchantConvCompleteComplete = true;
    }
   
        
}

//token position cheat sheet
function boyFollow() {
   //asher.style.display = "block"; //test
    if (boy.willFollow) {
        if (boy.willBlink) {
            blinkBloop.play();
            boy.willBlink = false;
        }
        boy.position = player.previousPosition;
        if (player.previousPosition === "a1") {
            asher.style.transform = "translate(0px,0px)";
        } else if (player.previousPosition === "a2") {
            asher.style.transform = "translate(0px,80px)";
        } else if (player.previousPosition === "a3") {
            asher.style.transform = "translate(0px,160px)";
        } else if (player.previousPosition === "a4") {
            asher.style.transform = "translate(0px,240px)";
        } else if (player.previousPosition === "a5") {
            asher.style.transform = "translate(0px,320px)";
        } else if (player.previousPosition === "a6") {
            asher.style.transform = "translate(0px,400px)";
        } else if (player.previousPosition === "a7") {
            asher.style.transform = "translate(0px,480px)";
            //BBBBBB
            //BBBBBB
        } else if (player.previousPosition === "b1") {
            asher.style.transform = "translate(80px,0px)";
        } else if (player.previousPosition === "b2") {
            asher.style.transform = "translate(80px,80px)";
        } else if (player.previousPosition === "b3") {
            asher.style.transform = "translate(80px,160px)";
        } else if (player.previousPosition === "b4") {
            asher.style.transform = "translate(80px,240px)";
        } else if (player.previousPosition === "b5") {
            asher.style.transform = "translate(80px,320px)";
        } else if (player.previousPosition === "b6") {
            asher.style.transform = "translate(80px,400px)";
        } else if (player.previousPosition === "b7") {
            asher.style.transform = "translate(80px,480px)";
            //CCCC
            //CCCC
        } else if (player.previousPosition === "c1") {
            asher.style.transform = "translate(160px,0px)";
        } else if (player.previousPosition === "c2") {
            asher.style.transform = "translate(160px,80px)";
        } else if (player.previousPosition === "c3") {
            asher.style.transform = "translate(160px,160px)";
        } else if (player.previousPosition === "c4") {
            asher.style.transform = "translate(160px,240px)";
        } else if (player.previousPosition === "c5") {
            asher.style.transform = "translate(160px,320px)";
        } else if (player.previousPosition === "c6") {
            asher.style.transform = "translate(160px,400px)";
        } else if (player.previousPosition === "c7") {
            asher.style.transform = "translate(160px,480px)";
            //DDDD
            //DDDD
        } else if (player.previousPosition === "d1") {
            asher.style.transform = "translate(240px,0px)";
        } else if (player.previousPosition === "d2") {
            asher.style.transform = "translate(240px,80px)";
        } else if (player.previousPosition === "d3") {
            asher.style.transform = "translate(240px,160px)";
        } else if (player.previousPosition === "d4") {
            asher.style.transform = "translate(240px,240px)";
        } else if (player.previousPosition === "d5") {
            asher.style.transform = "translate(240px,320px)";
        } else if (player.previousPosition === "d6") {
            asher.style.transform = "translate(240px,400px)";
        } else if (player.previousPosition === "d7") {
            asher.style.transform = "translate(240px,480px)";
            //EEEE
            //EEEE
        } else if (player.previousPosition === "e1") {
            asher.style.transform = "translate(320px,0px)";
        } else if (player.previousPosition === "e2") {
            asher.style.transform = "translate(320px,80px)";
        } else if (player.previousPosition === "e3") {
            asher.style.transform = "translate(320px,160px)";
        } else if (player.previousPosition === "e4") {
            asher.style.transform = "translate(320px,240px)";
        } else if (player.previousPosition === "e5") {
            asher.style.transform = "translate(320px,320px)";
        } else if (player.previousPosition === "e6") {
            asher.style.transform = "translate(320px,400px)";
        } else if (player.previousPosition === "e7") {
            asher.style.transform = "translate(320px,480px)";
            //FFF
            //FFF
        }else if (player.previousPosition === "f1") {
            asher.style.transform = "translate(400px,0px)";
        } else if (player.previousPosition === "f2") {
            asher.style.transform = "translate(400px,80px)";
        } else if (player.previousPosition === "f3") {
            asher.style.transform = "translate(400px,160px)";
        } else if (player.previousPosition === "f4") {
            asher.style.transform = "translate(400px,240px)";
        } else if (player.previousPosition === "f5") {
            asher.style.transform = "translate(400px,320px)";
        } else if (player.previousPosition === "f6") {
            asher.style.transform = "translate(400px,400px)";
        } else if (player.previousPosition === "f7") {
            asher.style.transform = "translate(400px,480px)";
            //GGGG
            //GGGG
        } else if (player.previousPosition === "g1") {
            asher.style.transform = "translate(480px,0px)";
        } else if (player.previousPosition === "g2") {
            asher.style.transform = "translate(480px,80px)";
        } else if (player.previousPosition === "g3") {
            asher.style.transform = "translate(480px,160px)";
        } else if (player.previousPosition === "g4") {
            asher.style.transform = "translate(480px,240px)";
        } else if (player.previousPosition === "g5") {
            asher.style.transform = "translate(480px,320px)";
        } else if (player.previousPosition === "g6") {
            asher.style.transform = "translate(480px,400px)";
        } else if (player.previousPosition === "g7") {
            asher.style.transform = "translate(480px,480px)";
        }
    }
}


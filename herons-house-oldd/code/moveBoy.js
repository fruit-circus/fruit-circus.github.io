//npc movement

const boyPosition = {
    cycle1: true,
}

const boy = {
    position: "",
    willFollow: false,
    willBlink: false,
}

let boyTurns = 0;

function boyMove() { //prescripted movement for boy
    if (boyPosition.cycle1) {
        boyPosition.cycle2 = true;
        boyPosition.cycle1 = false;
        npc.style.transform = "translate(100px,0px)";
    } else if (boyPosition.cycle2) {
        boyPosition.cycle2 = false;
        boyPosition.cycle3 = true;
        npc.style.transform = "translate(200px,0px)";
    } else if (boyPosition.cycle3) {
        boyPosition.cycle3 = false;
        boyPosition.cycle4 = true;
        npc.style.transform = "translate(200px,100px)";
    } else if (boyPosition.cycle4) {
        boyPosition.cycle4 = false;
        boyPosition.cycle5 = true;
        npc.style.transform = "translate(200px,200px)";
    } else if (boyPosition.cycle5) {
        boyPosition.cycle4 = false;
        boyPosition.cycle5 = true;
        npc.style.transform = "translate(320px,200px)";
    }
}

function boyToStainedGlassMarket() {
    if (!dialogue.boyMoveAfterMerchantConvComplete) {
        if (boyTurns == 1) {
            npc2.style.transform = "translate(320px, 480px)";
            boy.position = "e7";
            boyTurns++;
        } else if (boyTurns == 2) {
            npc2.style.transform = "translate(240px, 480px)";
            boy.position = "d7";
            boyTurns++;
        } else if (boyTurns == 3) {
            dialogue.boyMoveAfterMerchantConvComplete = true;
            npc2.style.display = "none";
            door.play();
            boy.position = ""; //if player.position is ever "" it might be the case that excuseMe plays (every turn?)
        }
    } else if (dialogue.boyMoveAfterMerchantConvComplete && !dialogue.boyMoveAfterMerchantConvCompleteComplete) {
        npc2.style.display = "none";
        boy.position = "";
        dialogue.boyMoveAfterMerchantConvCompleteComplete = true;
    }
   
        
}

//token position cheat sheet
function boyFollow() {
    if (boy.willFollow) {
        if (boy.willBlink) {
            blinkBloop.play();
            boy.willBlink = false;
        }
        boy.position = player.previousPosition;
        if (player.previousPosition === "a1") {
            npc.style.transform = "translate(0px,0px)";
        } else if (player.previousPosition === "a2") {
            npc.style.transform = "translate(0px,80px)";
        } else if (player.previousPosition === "a3") {
            npc.style.transform = "translate(0px,160px)";
        } else if (player.previousPosition === "a4") {
            npc.style.transform = "translate(0px,240px)";
        } else if (player.previousPosition === "a5") {
            npc.style.transform = "translate(0px,320px)";
        } else if (player.previousPosition === "a6") {
            npc.style.transform = "translate(0px,400px)";
        } else if (player.previousPosition === "a7") {
            npc.style.transform = "translate(0px,480px)";
            //BBBBBB
            //BBBBBB
        } else if (player.previousPosition === "b1") {
            npc.style.transform = "translate(80px,0px)";
        } else if (player.previousPosition === "b2") {
            npc.style.transform = "translate(80px,80px)";
        } else if (player.previousPosition === "b3") {
            npc.style.transform = "translate(80px,160px)";
        } else if (player.previousPosition === "b4") {
            npc.style.transform = "translate(80px,240px)";
        } else if (player.previousPosition === "b5") {
            npc.style.transform = "translate(80px,320px)";
        } else if (player.previousPosition === "b6") {
            npc.style.transform = "translate(80px,400px)";
        } else if (player.previousPosition === "b7") {
            npc.style.transform = "translate(80px,480px)";
            //CCCC
            //CCCC
        } else if (player.previousPosition === "c1") {
            npc.style.transform = "translate(160px,0px)";
        } else if (player.previousPosition === "c2") {
            npc.style.transform = "translate(160px,80px)";
        } else if (player.previousPosition === "c3") {
            npc.style.transform = "translate(160px,160px)";
        } else if (player.previousPosition === "c4") {
            npc.style.transform = "translate(160px,240px)";
        } else if (player.previousPosition === "c5") {
            npc.style.transform = "translate(160px,320px)";
        } else if (player.previousPosition === "c6") {
            npc.style.transform = "translate(160px,400px)";
        } else if (player.previousPosition === "c7") {
            npc.style.transform = "translate(160px,480px)";
            //DDDD
            //DDDD
        } else if (player.previousPosition === "d1") {
            npc.style.transform = "translate(240px,0px)";
        } else if (player.previousPosition === "d2") {
            npc.style.transform = "translate(240px,80px)";
        } else if (player.previousPosition === "d3") {
            npc.style.transform = "translate(240px,160px)";
        } else if (player.previousPosition === "d4") {
            npc.style.transform = "translate(240px,240px)";
        } else if (player.previousPosition === "d5") {
            npc.style.transform = "translate(240px,320px)";
        } else if (player.previousPosition === "d6") {
            npc.style.transform = "translate(240px,400px)";
        } else if (player.previousPosition === "d7") {
            npc.style.transform = "translate(240px,480px)";
            //EEEE
            //EEEE
        } else if (player.previousPosition === "e1") {
            npc.style.transform = "translate(320px,0px)";
        } else if (player.previousPosition === "e2") {
            npc.style.transform = "translate(320px,80px)";
        } else if (player.previousPosition === "e3") {
            npc.style.transform = "translate(320px,160px)";
        } else if (player.previousPosition === "e4") {
            npc.style.transform = "translate(320px,240px)";
        } else if (player.previousPosition === "e5") {
            npc.style.transform = "translate(320px,320px)";
        } else if (player.previousPosition === "e6") {
            npc.style.transform = "translate(320px,400px)";
        } else if (player.previousPosition === "e7") {
            npc.style.transform = "translate(320px,480px)";
            //FFF
            //FFF
        }else if (player.previousPosition === "f1") {
            npc.style.transform = "translate(400px,0px)";
        } else if (player.previousPosition === "f2") {
            npc.style.transform = "translate(400px,80px)";
        } else if (player.previousPosition === "f3") {
            npc.style.transform = "translate(400px,160px)";
        } else if (player.previousPosition === "f4") {
            npc.style.transform = "translate(400px,240px)";
        } else if (player.previousPosition === "f5") {
            npc.style.transform = "translate(400px,320px)";
        } else if (player.previousPosition === "f6") {
            npc.style.transform = "translate(400px,400px)";
        } else if (player.previousPosition === "f7") {
            npc.style.transform = "translate(400px,480px)";
            //GGGG
            //GGGG
        } else if (player.previousPosition === "g1") {
            npc.style.transform = "translate(480px,0px)";
        } else if (player.previousPosition === "g2") {
            npc.style.transform = "translate(480px,80px)";
        } else if (player.previousPosition === "g3") {
            npc.style.transform = "translate(480px,160px)";
        } else if (player.previousPosition === "g4") {
            npc.style.transform = "translate(480px,240px)";
        } else if (player.previousPosition === "g5") {
            npc.style.transform = "translate(480px,320px)";
        } else if (player.previousPosition === "g6") {
            npc.style.transform = "translate(480px,400px)";
        } else if (player.previousPosition === "g7") {
            npc.style.transform = "translate(480px,480px)";
        }
    }
}


//lines marked "block" prevent movement beyond the range of the specified room-size
//for contents in rooms that are the same area as a function with a "block", put the condition above the block

const room = { 
    size: "threeByThree",
    //size: "sevenBySeven",
}

const current = {
    room: "coatRoom",
    //room: "study",
}


//Player movement

//WEST WALLS
function playerTo1() {
    if (current.room === "hypotheticalRoom") {}
    else if (current.room === "groundFloorLanding") {
        current.room = "groundFloorLanding2";
        room.size = "fiveByFive";
        groundFloorLanding.style.display = "none";
        groundFloorLanding2.style.display = "block";
        checkWhichTilesShouldBeIncluded();
        player.position = "f1";
        stairs.play();
        token.style.transform = "translate(400px, 0px)";
    }
    else if (current.room === "catacombs2") {
            room.size = "sevenByFour";
            catacombs2.style.display = "none";
            catacombs1.style.display = "block";
            current.room = "catacombs1";
            player.position = "g1";
            token.style.transform = "translate(480px, 0px)";
            checkWhichTilesShouldBeIncluded();
    }
    else if (current.room === "catacombs1") {
            room.size = "threeByThree";
            catacombs1.style.display = "none";
            eastCatacombsLanding.style.display = "block";
            current.room = "eastCatacombsLanding";
            player.position = "e1";
            token.style.transform = "translate(320px, 0px)";
            checkWhichTilesShouldBeIncluded();
    }
    else if (current.room === "throneRoomEast") {
        room.size = "sevenBySeven";
        throneRoomEast.style.display = "none";
        throneRoomWest.style.display = "block";
        current.room = "throneRoomWest";
        checkWhichTilesShouldBeIncluded();
        player.position = "g1";
        token.style.transform = "translate(480px,0px)";
    }
    else if (current.room === "meadHallEast") {
        current.room = "meadHallWest";
        room.size = "sevenBySeven";
        meadHallEast.style.display = "none";
        meadHallWest.style.display = "block";
        checkWhichTilesShouldBeIncluded();
        player.position = "g1";
        token.style.transform = "translate(480px,0px)";
    } else if (current.room === "westernServantsQuartersHallway") {
        room.size = "sevenByOne";
        westernServantsQuartersHallway.style.display = "none";
        easternServantsQuartersHallway.style.display = "block";
        current.room = "easternServantsQuartersHallway";
        token.style.transform = "translate(480px, 0px)";
        player.position = "g1";
        checkWhichTilesShouldBeIncluded();
        door.play();
    } else  {
    }
}
function playerTo2() {
    if (current.room === "hypotheticalRoom") {}
    else if (current.room === "upperFloorLanding") {
        current.room = "groundFloorLanding3";
        room.size = "fiveByFive";
        upperFloorLanding.style.display = "none";
        groundFloorLanding3.style.display = "block";
        checkWhichTilesShouldBeIncluded();
        player.position = "f1";
        stairs.play();
        token.style.transform = "translate(400px, 0px)";
    }
    else if (current.room === "groundFloorLanding") {
        current.room = "groundFloorLanding2";
        room.size = "fiveByFive";
        groundFloorLanding.style.display = "none";
        groundFloorLanding2.style.display = "block";
        checkWhichTilesShouldBeIncluded();
        player.position = "f2";
        stairs.play();
        token.style.transform = "translate(400px, 80px)";
    }
    else if (current.room === "catacombs2") {
            room.size = "sevenByFour";
            catacombs2.style.display = "none";
            catacombs1.style.display = "block";
            current.room = "catacombs1";
            player.position = "g2";
            token.style.transform = "translate(480px, 80px)";
            checkWhichTilesShouldBeIncluded();
    }
    else if (current.room === "entryHall") {
        dialogue.repeat = "2"
        converse(gateToOutside, gateToOutsidev);
    }
    else if (current.room === "throneRoomEast") {
        room.size = "sevenBySeven";
        throneRoomEast.style.display = "none";
        throneRoomWest.style.display = "block";
        current.room = "throneRoomWest";
        checkWhichTilesShouldBeIncluded();
        player.position = "g2";
        token.style.transform = "translate(480px,80px)";
    }
    else if (current.room === "catacombs1") {
            room.size = "threeByThree";
            catacombs1.style.display = "none";
            eastCatacombsLanding.style.display = "block";
            current.room = "eastCatacombsLanding";
            player.position = "e2";
            token.style.transform = "translate(320px, 80px)";
            checkWhichTilesShouldBeIncluded();
    }
    else if (current.room === "larder") {
        room.size = "sevenByFive";
        larder.style.display = "none";
        kitchen.style.display = "block";
        current.room = "kitchen";
        player.position = "g4";
        token.style.transform = "translate(480px, 240px)";
        checkWhichTilesShouldBeIncluded();
        door.play();
    } 
    else if (current.room === "libraryNorth") {
        room.size = "threeByThree";
        libraryNorth.style.display = "none";
        libraryLanding.style.display = "block";
        current.room = "libraryLanding";
        player.position = "e2";
        token.style.transform = "translate(320px, 80px)";
        checkWhichTilesShouldBeIncluded();
        door.play();
    } 
    else if (current.room === "meadHallEast") {
        current.room = "meadHallWest";
        room.size = "sevenBySeven";
        meadHallEast.style.display = "none";
        meadHallWest.style.display = "block";
        checkWhichTilesShouldBeIncluded();
        player.position = "g2";
        token.style.transform = "translate(480px,80px)";
    } else  {
    }
}
function playerTo3() {
    if (current.room === "hypotheticalRoom") {}
    else if (current.room === "entryHall") {
        dialogue.repeat = "3"
        converse(gateToOutside, gateToOutsidev);
    }
    else if (current.room === "throneRoomEast") {
        room.size = "sevenBySeven";
        throneRoomEast.style.display = "none";
        throneRoomWest.style.display = "block";
        current.room = "throneRoomWest";
        checkWhichTilesShouldBeIncluded();
        player.position = "g3";
        token.style.transform = "translate(480px,160px)";
    }
    else if (current.room === "upperFloorLanding") {
        current.room = "groundFloorLanding3";
        room.size = "fiveByFive";
        upperFloorLanding.style.display = "none";
        groundFloorLanding3.style.display = "block";
        checkWhichTilesShouldBeIncluded();
        player.position = "f2";
        stairs.play();
        token.style.transform = "translate(400px, 80px)";
    }
    else if (current.room === "groundFloorLanding") {
        current.room = "groundFloorLanding2";
        room.size = "fiveByFive";
        groundFloorLanding.style.display = "none";
        groundFloorLanding2.style.display = "block";
        checkWhichTilesShouldBeIncluded();
        player.position = "f3";
        stairs.play();
        token.style.transform = "translate(400px, 160px)";
    }
    else if (current.room === "catacombs2") {
            room.size = "sevenByFour";
            catacombs2.style.display = "none";
            catacombs1.style.display = "block";
            current.room = "catacombs1";
            player.position = "g3";
            token.style.transform = "translate(480px, 160px)";
            checkWhichTilesShouldBeIncluded();
    }
     else  {
        
    }
}
function playerTo4() {
    if (current.room === "hypotheticalRoom") {}
    else if (current.room === "upperFloorLanding") {
        current.room = "groundFloorLanding3";
        room.size = "fiveByFive";
        upperFloorLanding.style.display = "none";
        groundFloorLanding3.style.display = "block";
        checkWhichTilesShouldBeIncluded();
        player.position = "f3";
        stairs.play();
        token.style.transform = "translate(400px, 160px)";
    }
    else if (current.room === "catacombs2") {
            room.size = "sevenByFour";
            catacombs2.style.display = "none";
            catacombs1.style.display = "block";
            current.room = "catacombs1";
            player.position = "g4";
            token.style.transform = "translate(480px, 240px)";
            checkWhichTilesShouldBeIncluded();
    }
    else if (current.room === "entryHall") {
        dialogue.repeat = "4"
        converse(gateToOutside, gateToOutsidev);
    }
    else if (current.room === "throneRoomEast") {
        room.size = "sevenBySeven";
        throneRoomEast.style.display = "none";
        throneRoomWest.style.display = "block";
        current.room = "throneRoomWest";
        checkWhichTilesShouldBeIncluded();
        player.position = "g4";
        token.style.transform = "translate(480px,240px)";
    }
    else if (current.room === "groundFloorLanding") {
        current.room = "groundFloorLanding2";
        room.size = "fiveByFive";
        groundFloorLanding.style.display = "none";
        groundFloorLanding2.style.display = "block";
        checkWhichTilesShouldBeIncluded();
        player.position = "f4";
        stairs.play();
        token.style.transform = "translate(400px, 240px)";
    }
    else if (current.room === "throneRoomWest") {
        current.room = "fountainRoom";
        room.size = "sevenBySeven";
        throneRoomWest.style.display = "none";
        fountainRoom.style.display = "block";
        checkWhichTilesShouldBeIncluded();
        door.play();
        player.position = "g4";
        token.style.transform = "translate(480px, 240px)";
    } else if (current.room === "meadHallWest") {
        current.room = "groundFloorLanding";
        room.size = "sevenBySeven";
        meadHallWest.style.display = "none";
        groundFloorLanding.style.display = "block";
        checkWhichTilesShouldBeIncluded();
        player.position = "g4";
        door.play();
        token.style.transform = "translate(480px, 240px)";
    } else if (current.room === "fountainRoom") {
        if (!dialogue.boyHiden) {
            dialogue.boyMoveAfterMerchantConvComplete = true;
            dialogue.boyHiden = true;
            npc2.style.display = "none";
        }
        current.room = "entryHall";
        room.size = "sevenByFive";
        entryHall.style.display = "block";
        fountainRoom.style.display = "none";
        checkWhichTilesShouldBeIncluded();
        door.play();
        player.position = "g3";
        token.style.transform = "translate(480px, 160px)";
    } else if (current.room === "kitchen") {
        room.size = "threeByFive";
        preservesPantry.style.display = "block";
        kitchen.style.display = "none";
        current.room = "preservesPantry";
        player.position = "e4";
        token.style.transform = "translate(320px, 240px)";
        checkWhichTilesShouldBeIncluded();
        door.play();
    } else {}
}
function playerTo5() {
    if (current.room === "hypotheticalRoom") {}
    else if (current.room === "upperFloorLanding") {
        current.room = "groundFloorLanding3";
        room.size = "fiveByFive";
        upperFloorLanding.style.display = "none";
        groundFloorLanding3.style.display = "block";
        checkWhichTilesShouldBeIncluded();
        player.position = "f4";
        stairs.play();
        token.style.transform = "translate(400px, 240px)";
    }
    else if (current.room === "throneRoomEast") {
        room.size = "sevenBySeven";
        throneRoomEast.style.display = "none";
        throneRoomWest.style.display = "block";
        current.room = "throneRoomWest";
        checkWhichTilesShouldBeIncluded();
        player.position = "g5";
        token.style.transform = "translate(480px,320px)";
    } else if (current.room === "groundFloorLanding") {
        current.room = "groundFloorLanding2";
        room.size = "fiveByFive";
        groundFloorLanding.style.display = "none";
        groundFloorLanding2.style.display = "block";
        checkWhichTilesShouldBeIncluded();
        player.position = "f5";
        stairs.play();
        token.style.transform = "translate(400px, 320px)";
    }
    else  {
    }
}
function playerTo6() {
    if (current.room === "hypotheticalRoom") {}
    else if (current.room === "throneRoomEast") {
        room.size = "sevenBySeven";
        throneRoomEast.style.display = "none";
        throneRoomWest.style.display = "block";
        current.room = "throneRoomWest";
        checkWhichTilesShouldBeIncluded();
        player.position = "g6";
        token.style.transform = "translate(480px,400px)";
    }
    else if (current.room === "upperFloorLanding") {
        current.room = "groundFloorLanding3";
        room.size = "fiveByFive";
        upperFloorLanding.style.display = "none";
        groundFloorLanding3.style.display = "block";
        checkWhichTilesShouldBeIncluded();
        player.position = "f5";
        stairs.play();
        token.style.transform = "translate(400px, 320px)";
    }
    else if (current.room === "groundFloorLanding") {
        current.room = "groundFloorLanding2";
        room.size = "fiveByFive";
        groundFloorLanding.style.display = "none";
        groundFloorLanding2.style.display = "block";
        checkWhichTilesShouldBeIncluded();
        player.position = "f5";
        stairs.play();
        token.style.transform = "translate(400px, 320px)";
    }
    else if (current.room === "librarySouth") {
        room.size = "sevenBySeven";
        librarySouth.style.display = "none";
        study.style.display = "block";
        current.room = "study";
        checkWhichTilesShouldBeIncluded();
        door.play();
        player.position = "g6";
        token.style.transform = "translate(480px,400px)";
    }
    else if (current.room === "meadHallEast") {
        current.room = "meadHallWest";
        room.size = "sevenBySeven";
        meadHallEast.style.display = "none";
        meadHallWest.style.display = "block";
        checkWhichTilesShouldBeIncluded();
        player.position = "g6";
        token.style.transform = "translate(480px,400px)";
    }
    else  {
    }
}
function playerTo7() {
    if (current.room === "hypotheticalRoom") {}
    else if (current.room === "throneRoomEast") {
        room.size = "sevenBySeven";
        throneRoomEast.style.display = "none";
        throneRoomWest.style.display = "block";
        current.room = "throneRoomWest";
        checkWhichTilesShouldBeIncluded();
        player.position = "g7";
        token.style.transform = "translate(480px,480px)";
    }
    else if (current.room === "meadHallEast") {
        current.room = "meadHallWest";
        room.size = "sevenBySeven";
        meadHallEast.style.display = "none";
        meadHallWest.style.display = "block";
        checkWhichTilesShouldBeIncluded();
        player.position = "g7";
        token.style.transform = "translate(480px,480px)";
    } else  {
    }
}
//NORTH WALLS

function playerToA() {
    if (current.room === "hypotheticalRoom") {}
    
    else if (current.room === "librarySouth") {
        room.size = "sevenBySeven";
        librarySouth.style.display = "none";
        libraryNorth.style.display = "block";
        current.room = "libraryNorth";
        checkWhichTilesShouldBeIncluded();
        player.position = "a7";
        token.style.transform = "translate(0px,480px)";
    }
    else  {
    }
}
function playerToB() {
    if (current.room === "hypotheticalRoom") {}
    else if (current.room === "easternServantsQuartersHallway") {
        room.size = "threeByThree";
        easternServantsQuartersHallway.style.display = "none";
        servantsQuartersThree.style.display = "block";
        current.room = "servantsQuartersThree";
                console.log(current.room);
        player.position = "d3";
        token.style.transform = "translate(240px, 160px)";
        checkWhichTilesShouldBeIncluded();
        door.play();
    }
    else if (current.room === "groundFloorLanding2") {
        current.room = "groundFloorLanding3";
        room.size = "fiveByFive";
        groundFloorLanding2.style.display = "none";
        groundFloorLanding3.style.display = "block";
        checkWhichTilesShouldBeIncluded();
        player.position = "b5";
        stairs.play();
        token.style.transform = "translate(80px, 320px)";
    }
         else if (current.room === "entryHall") {
        //go to weaponsCheck
        room.size = "threeByThree";
        entryHall.style.display = "none";
        weaponsCheck.style.display = "block";
        current.room = "weaponsCheck";
        player.position = "d3";
        token.style.transform = "translate(240px, 160px)";
        checkWhichTilesShouldBeIncluded();
        door.play();
        } else  {

        }
}
function playerToC() {
    if (current.room === "hypotheticalRoom") {}
    else if (current.room === "weaponsCheck") {
        alert("there's a mousehole here");
    }
    else if (current.room === "groundFloorLanding2") {
        current.room = "groundFloorLanding3";
        room.size = "fiveByFive";
        groundFloorLanding2.style.display = "none";
        groundFloorLanding3.style.display = "block";
        checkWhichTilesShouldBeIncluded();
        player.position = "c5";
        stairs.play();
        token.style.transform = "translate(160px, 320px)";
    }
    else if (current.room === "librarySouth") {
        room.size = "sevenBySeven";
        librarySouth.style.display = "none";
        libraryNorth.style.display = "block";
        current.room = "libraryNorth";
        checkWhichTilesShouldBeIncluded();
        player.position = "c7";
        token.style.transform = "translate(160px,480px)";
    }
    else  {
    }
}
function playerToD() {
    if (current.room === "hypotheticalRoom") {}
    else if (current.room === "groundFloorLanding2") {
        current.room = "groundFloorLanding3";
        room.size = "fiveByFive";
        groundFloorLanding2.style.display = "none";
        groundFloorLanding3.style.display = "block";
        checkWhichTilesShouldBeIncluded();
        player.position = "d5";
        stairs.play();
        token.style.transform = "translate(240px, 320px)";
    }
    else if (current.room === "canalMouth") {
        current.room = "hallOfDoors";
        room.size = "sevenByOne";
        canalMouth.style.display = "none";
        hallOfDoors.style.display = "block";
        checkWhichTilesShouldBeIncluded();
        player.position = "d1";
        door.play();
        token.style.transform = "translate(240px, 0px)";
    }
    else if (current.room === "largeHallway") {
        room.size = "sevenBySeven";
        largeHallway.style.display = "none";
        stainedGlassMarket.style.display = "block";
        current.room = "stainedGlassMarket";
        player.position = "d7";
        token.style.transform = "translate(240px, 480px)";
        checkWhichTilesShouldBeIncluded();
        door.play();
    }
    else if (current.room === "storageAccess") {
        room.size = "oneBySeven";
        storageAccess.style.display = "none";
        gardenAccess.style.display = "block";
        current.room = "gardenAccess";
        checkWhichTilesShouldBeIncluded();
        door.play();
        player.position = "d7";
        token.style.transform = "translate(240px,480px)";
    }
    else if (current.room === "librarySouth") {
        room.size = "sevenBySeven";
        librarySouth.style.display = "none";
        libraryNorth.style.display = "block";
        current.room = "libraryNorth";
        checkWhichTilesShouldBeIncluded();
        player.position = "d7";
        token.style.transform = "translate(240px,480px)";
    }
    else if (current.room === "study") {
        room.size = "threeByThree";
        study.style.display = "none";
        upperWaterfallLanding.style.display = "block";
        current.room = "upperWaterfallLanding";
        player.position = "d3";
        token.style.transform = "translate(240px, 160px)";
        checkWhichTilesShouldBeIncluded();
        door.play();
    }
    else if (current.room === "servantsQuartersFour") {
        room.size = "sevenByOne";
        servantsQuartersFour.style.display = "none";
        westernServantsQuartersHallway.style.display = "block";
        current.room = "westernServantsQuartersHallway";
        player.position = "f1";
        token.style.transform = "translate(400px, 0px)";
        checkWhichTilesShouldBeIncluded();
        door.play();
    } 
    else if (current.room === "upperWaterfallLanding") {
        room.size = "threeByTwo";
        upperWaterfallLanding.style.display = "none";
        lowerWaterfallLanding.style.display = "block";
        current.room = "lowerWaterfallLanding";
        player.position = "d2";
        token.style.transform = "translate(240px, 80px)";
        checkWhichTilesShouldBeIncluded();
        stairs.play();
    }
    else if (current.room === "lowerWaterfallLanding") {
        room.size = "threeByThree";
        lowerWaterfallLanding.style.display = "none";
        libraryLanding.style.display = "block";
        current.room = "libraryLanding";
        player.position = "d3";
        token.style.transform = "translate(240px, 160px)";
        checkWhichTilesShouldBeIncluded();
        stairs.play();
    }
    else if (current.room === "wineCelar") {
        room.size = "sevenByFive";
        wineCelar.style.display = "none";
        larder.style.display = "block";
        current.room = "larder";
        player.position = "d5";
        token.style.transform = "translate(240px, 320px)";
        checkWhichTilesShouldBeIncluded();
        door.play();
    }
    else if (current.room === "servantsQuartersTwo") {
        room.size = "sevenByOne";
        servantsQuartersTwo.style.display = "none";
        easternServantsQuartersHallway.style.display = "block";
        current.room = "easternServantsQuartersHallway";
        player.position = "d1";
        token.style.transform = "translate(240px, 0px)";
        checkWhichTilesShouldBeIncluded();
        door.play();
    } 
    else if (current.room === "servantsQuartersSix") {
        room.size = "sevenByOne";
        servantsQuartersSix.style.display = "none";
        westernServantsQuartersHallway.style.display = "block";
        current.room = "westernServantsQuartersHallway";
        player.position = "b1";
        token.style.transform = "translate(80px, 0px)";
        checkWhichTilesShouldBeIncluded();
        door.play();
    } 
    else if (current.room === "westernServantsQuartersHallway") {
        room.size = "threeByThree";
        westernServantsQuartersHallway.style.display = "none";
        servantsQuartersFive.style.display = "block";
        current.room = "servantsQuartersFive";
        console.log(current.room);
        player.position = "d3";
        token.style.transform = "translate(240px, 160px)";
        checkWhichTilesShouldBeIncluded();
        door.play();
    }
    else if (current.room === "coatRoom") {
        if (!dialogue.playerHasFreshenedUp) {
            if (!dialogue.pjspjs) {   
            pjsConvo();
        } //indefinite loop until player casts glamor
        else if (dialogue.pjspjs) {  
             pjsConvo2();
        }
        } else {
            //go to entryhall
            if (!dialogue.asymetrical) {
                room.size = "sevenByFive";
                entryHall.style.display = "block";
                coatRoom.style.display = "none";
                current.room = "entryHall";
                player.position = "b5";
                token.style.transform = "translate(80px, 320px)";
                checkWhichTilesShouldBeIncluded();
                door.play();
                dialogue.repeat = "secret1";
                converse(asymetrical, asymetricalv);
            } else {
                room.size = "sevenByFive";
                entryHall.style.display = "block";
                coatRoom.style.display = "none";
                current.room = "entryHall";
                player.position = "b5";
                token.style.transform = "translate(80px, 320px)";
                checkWhichTilesShouldBeIncluded();
                door.play();
            }
            
        }
    } else if (current.room === "fountainRoom") {
        if (!dialogue.boyHiden) {
            dialogue.boyMoveAfterMerchantConvComplete = true;
            dialogue.boyHiden = true;
            npc2.style.display = "none";
        }
        //go to groundFloorLanding
        room.size = "sevenBySeven";
        groundFloorLanding.style.display = "block";
        fountainRoom.style.display = "none";
        current.room = "groundFloorLanding";
        player.position = "d7";
        token.style.transform = "translate(240px,480px)";
        checkWhichTilesShouldBeIncluded();
        door.play();
    }  else if (current.room === "stainedGlassMarket") {
        current.room = "fountainRoom";
        room.size = "sevenBySeven";
        stainedGlassMarket.style.display = "none";
        fountainRoom.style.display = "block";
        checkWhichTilesShouldBeIncluded();
        door.play();
        player.position = "d7";
        token.style.transform = "translate(240px, 480px)";
    } else if (current.room === "entryHall") {
        dialogue.repeat = "d"
        converse(even, evenV);
    } 
    else if (current.room === "preservesPantry") {
        room.size = "threeByTwo";
        northPorch.style.display = "block";
        preservesPantry.style.display = "none";
        current.room = "northPorch";
        player.position = "d2";
        token.style.transform = "translate(240px, 80px)";
        checkWhichTilesShouldBeIncluded();
        door.play();
    } else if (current.room === "gardenAccess") {
        room.size = "fiveByFive";
        courtyard.style.display = "block";
        gardenAccess.style.display = "none";
        current.room = "courtyard";
        player.position = "d5";
        token.style.transform = "translate(240px, 320px)";
        checkWhichTilesShouldBeIncluded();
        door.play();
    } else  {
    }
}
function playerToE() {
    if (current.room === "hypotheticalRoom") {}
    else if (current.room === "groundFloorLanding2") {
        current.room = "groundFloorLanding3";
        room.size = "fiveByFive";
        groundFloorLanding2.style.display = "none";
        groundFloorLanding3.style.display = "block";
        checkWhichTilesShouldBeIncluded();
        player.position = "e5";
        stairs.play();
        token.style.transform = "translate(320px, 320px)";
    }
    else if (current.room === "librarySouth") {
        room.size = "sevenBySeven";
        librarySouth.style.display = "none";
        libraryNorth.style.display = "block";
        current.room = "libraryNorth";
        checkWhichTilesShouldBeIncluded();
        player.position = "e7";
        token.style.transform = "translate(320px,480px)";
    }
    else  {
    }
}
function playerToF() {
    if (current.room === "hypotheticalRoom") {}
    else if (current.room === "groundFloorLanding2") {
        current.room = "groundFloorLanding3";
        room.size = "fiveByFive";
        groundFloorLanding2.style.display = "none";
        groundFloorLanding3.style.display = "block";
        checkWhichTilesShouldBeIncluded();
        player.position = "f5";
        stairs.play();
        token.style.transform = "translate(400px, 320px)";
    }
    else if (current.room === "easternServantsQuartersHallway") {
        room.size = "threeByThree";
        easternServantsQuartersHallway.style.display = "none";
        servantsQuartersOne.style.display = "block";
        current.room = "servantsQuartersOne";
                console.log(current.room);
        player.position = "d3";
        token.style.transform = "translate(240px, 160px)";
        checkWhichTilesShouldBeIncluded();
        door.play();
    }
    else if (current.room === "meadHallEast") {
        current.room = "kitchen";
        room.size = "sevenByFive";
        kitchen.style.display = "block";
        meadHallEast.style.display = "none";
        checkWhichTilesShouldBeIncluded();
        door.play();
        player.position = "f5";
        token.style.transform = "translate(400px,320px)";
    } else  {
    }
}
function playerToG() {
    if (current.room === "hypotheticalRoom") {}
    else if (current.room === "librarySouth") {
        room.size = "sevenBySeven";
        librarySouth.style.display = "none";
        libraryNorth.style.display = "block";
        current.room = "libraryNorth";
        checkWhichTilesShouldBeIncluded();
        player.position = "g7";
        token.style.transform = "translate(480px,480px)";
    }
    else  {
    }
}
//EAST WALLS

function playerToH1() {
    if (current.room === "hypotheticalRoom") {}
    else if (current.room === "catacombs1") {
            room.size = "sevenByFour";
            catacombs1.style.display = "none";
            catacombs2.style.display = "block";
            current.room = "catacombs2";
            player.position = "a1";
            token.style.transform = "translate(0px, 0px)";
            checkWhichTilesShouldBeIncluded();
    }
    else if (current.room === "throneRoomWest") {
        room.size = "sevenBySeven";
        throneRoomWest.style.display = "none";
        throneRoomEast.style.display = "block";
        current.room = "throneRoomEast";
        checkWhichTilesShouldBeIncluded();
        player.position = "a1";
        token.style.transform = "translate(0px,0px)";
    }
    else if (current.room === "meadHallWest") {
        current.room = "meadHallEast";
        room.size = "sevenBySeven";
        meadHallWest.style.display = "none";
        meadHallEast.style.display = "block";
        checkWhichTilesShouldBeIncluded();
        player.position = "a1";
        token.style.transform = "translate(0px, 0px)";
    } else if (current.room === "easternServantsQuartersHallway") {
        room.size = "sevenByOne";
        easternServantsQuartersHallway.style.display = "none";
        westernServantsQuartersHallway.style.display = "block";
        current.room = "westernServantsQuartersHallway";
        token.style.transform = "translate(0px, 0px)";
        player.position = "a1";
        checkWhichTilesShouldBeIncluded();
        door.play();
    } else if (current.room === "westernServantsQuartersHallway") {
        room.size = "threeByFive";
        westernServantsQuartersHallway.style.display = "none";
        preservesPantry.style.display = "block";
        current.room = "preservesPantry";
        token.style.transform = "translate(160px, 80px)";
        player.position = "c2";
        checkWhichTilesShouldBeIncluded();
        door.play();
    } else  {
    }
}
function playerToH2() {
    if (current.room === "hypotheticalRoom") {}
    else if (current.room === "catacombs1") {
            room.size = "sevenByFour";
            catacombs1.style.display = "none";
            catacombs2.style.display = "block";
            current.room = "catacombs2";
            player.position = "a2";
            token.style.transform = "translate(0px, 80px)";
            checkWhichTilesShouldBeIncluded();
    }
    else if (current.room === "throneRoomWest") {
        room.size = "sevenBySeven";
        throneRoomWest.style.display = "none";
        throneRoomEast.style.display = "block";
        current.room = "throneRoomEast";
        checkWhichTilesShouldBeIncluded();
        player.position = "a2";
        token.style.transform = "translate(0px,80px)";
    }
    else if (current.room === "libraryNorth") {
        room.size = "oneBySeven";
        libraryNorth.style.display = "none";
        storageAccess.style.display = "block";
        current.room = "storageAccess";
        checkWhichTilesShouldBeIncluded();
        door.play();
        player.position = "d7";
        token.style.transform = "translate(240px,480px)";
    }
    else if (current.room === "largeHallway") {
        room.size = "threeByThree";
        largeHallway.style.display = "none";
        upperWaterfallLanding.style.display = "block";
        current.room = "upperWaterfallLanding";
        player.position = "c2";
        token.style.transform = "translate(160px, 80px)";
        checkWhichTilesShouldBeIncluded();
        door.play();
    }
    else if (current.room === "meadHallWest") {
        current.room = "meadHallEast";
        room.size = "sevenBySeven";
        meadHallWest.style.display = "none";
        meadHallEast.style.display = "block";
        checkWhichTilesShouldBeIncluded();
        player.position = "a2";
        token.style.transform = "translate(0px, 80px)";
    } else  {
    }
}
function playerToH3() {
    if (current.room === "hypotheticalRoom") {}
    else if (current.room === "catacombs1") {
            room.size = "sevenByFour";
            catacombs1.style.display = "none";
            catacombs2.style.display = "block";
            current.room = "catacombs2";
            player.position = "a3";
            token.style.transform = "translate(0px, 160px)";
            checkWhichTilesShouldBeIncluded();
    }
    else if (current.room === "throneRoomWest") {
        room.size = "sevenBySeven";
        throneRoomWest.style.display = "none";
        throneRoomEast.style.display = "block";
        current.room = "throneRoomEast";
        checkWhichTilesShouldBeIncluded();
        player.position = "a3";
        token.style.transform = "translate(0px,160px)";
    }
    else if (current.room === "entryHall") {
        
        if (dialogue.boyInFountainRoom && !dialogue.boyInFountainRoomComplete) {
            npc2.style.display = "block";
            npc2.style.transform = "translate(320px, 400px)";
            boy.position = "e6";
            merchantCutscene();
            boyTurns++;
        }
        if (!dialogue.boyInFountainRoom) {
            dialogue.putBoyOnG2ForEntranceConv = true;
            if (!dialogue.boyEnter) {
            npc2.style.display = "block";
            npc2.style.transform = "translate(0px, 160px)";
            dialogue.boyEnter = true;
        }
        if (!dialogue.boyEnterConv) {   
            if (numberOfKeyDowns < boyEntrance.length) {
                dialogue.repeat = "g3";
                converse(boyEntrance, boyEntrancev);
            } else if (numberOfKeyDowns == boyEntrance.length) {
                if (!dialogue.loopOnceMore) {
                    dialogue.loopOnceMore = true;
                    converse(boyEntrance, boyEntrancev);
                    dialogue.loopOnceMore = false;
                    displayChoices();
                }
                dialogue.boyEnterConv = true;
            }
        }
        } else {
            current.room = "fountainRoom";
            room.size = "sevenBySeven";
            entryHall.style.display = "none";
            fountainRoom.style.display = "block";
            checkWhichTilesShouldBeIncluded();
            door.play();
            player.position = "a4";
            token.style.transform = "translate(0px, 240px)";
        }
    }
}
function playerToH4() {
    if (current.room === "hypotheticalRoom") {}
    else if (current.room === "catacombs1") {
            room.size = "sevenByFour";
            catacombs1.style.display = "none";
            catacombs2.style.display = "block";
            current.room = "catacombs2";
            player.position = "a4";
            token.style.transform = "translate(0px, 240px)";
            checkWhichTilesShouldBeIncluded();
    }
    else if (current.room === "throneRoomWest") {
        room.size = "sevenBySeven";
        throneRoomWest.style.display = "none";
        throneRoomEast.style.display = "block";
        current.room = "throneRoomEast";
        checkWhichTilesShouldBeIncluded();
        player.position = "a4";
        token.style.transform = "translate(0px,240px)";
    }
    else if (current.room === "groundFloorLanding") {
        current.room = "meadHallWest";
        room.size = "sevenBySeven";
        groundFloorLanding.style.display = "none";
        meadHallWest.style.display = "block";
        checkWhichTilesShouldBeIncluded();
        door.play();
        player.position = "a4";
        token.style.transform = "translate(0px, 240px)";
    }
    else if (current.room === "kitchen") {
        room.size = "sevenByFive";
        kitchen.style.display = "none";
        larder.style.display = "block";
        current.room = "larder";
        player.position = "a2";
        token.style.transform = "translate(0px, 80px)";
        checkWhichTilesShouldBeIncluded();
        door.play();
    } 
    else if (current.room === "fountainRoom") {
        if (!dialogue.boyHiden) {
            dialogue.boyMoveAfterMerchantConvComplete = true;
            dialogue.boyHiden = true;
            npc2.style.display = "none";
        }
        current.room = "throneRoomWest";
        room.size = "sevenBySeven";
        fountainRoom.style.display = "none";
        throneRoomWest.style.display = "block";
        door.play();
        checkWhichTilesShouldBeIncluded();
        player.position = "a4";
        token.style.transform = "translate(0px, 240px)";
    } else {
    }
}
function playerToH5() {
    if (current.room === "hypotheticalRoom") {}
    else if (current.room === "throneRoomWest") {
        room.size = "sevenBySeven";
        throneRoomWest.style.display = "none";
        throneRoomEast.style.display = "block";
        current.room = "throneRoomEast";
        checkWhichTilesShouldBeIncluded();
        player.position = "a5";
        token.style.transform = "translate(0px,320px)";
    }
    else  {
    }
}
function playerToH6() {
    if (current.room === "hypotheticalRoom") {}
    else if (current.room === "throneRoomWest") {
        room.size = "sevenBySeven";
        throneRoomWest.style.display = "none";
        throneRoomEast.style.display = "block";
        current.room = "throneRoomEast";
        checkWhichTilesShouldBeIncluded();
        player.position = "a6";
        token.style.transform = "translate(0px,400px)";
    }
    else if (current.room === "throneRoomEast") {
        room.size = "oneBySeven";
        throneRoomEast.style.display = "none";
        gardenAccess.style.display = "block";
        current.room = "gardenAccess";
        checkWhichTilesShouldBeIncluded();
        door.play();
        player.position = "d6";
        token.style.transform = "translate(240px,400px)";
    }
    else if (current.room === "study") {
        room.size = "sevenBySeven";
        study.style.display = "none";
        librarySouth.style.display = "block";
        current.room = "librarySouth";
        checkWhichTilesShouldBeIncluded();
        door.play();
        player.position = "a6";
        token.style.transform = "translate(0px,400px)";
    }
    else if (current.room === "meadHallWest") {
        current.room = "meadHallEast";
        room.size = "sevenBySeven";
        meadHallWest.style.display = "none";
        meadHallEast.style.display = "block";
        checkWhichTilesShouldBeIncluded();
        player.position = "a6";
        token.style.transform = "translate(0px, 400px)";
    } else  {
    }
}
function playerToH7() {
    if (current.room === "hypotheticalRoom") {}
    else if (current.room === "throneRoomWest") {
        room.size = "sevenBySeven";
        throneRoomWest.style.display = "none";
        throneRoomEast.style.display = "block";
        current.room = "throneRoomEast";
        checkWhichTilesShouldBeIncluded();
        player.position = "a7";
        token.style.transform = "translate(0px,480px)";
    }
    else if (current.room === "meadHallWest") {
        current.room = "meadHallEast";
        room.size = "sevenBySeven";
        meadHallWest.style.display = "none";
        meadHallEast.style.display = "block";
        checkWhichTilesShouldBeIncluded();
        player.position = "a7";
        token.style.transform = "translate(0px, 480px)";
    } else  {
    }
}
//SOUTH WALLS

function playerToA8() {
    if (current.room === "hypotheticalRoom") {}
    else if (current.room === "libraryNorth") {
        room.size = "sevenBySeven";
        libraryNorth.style.display = "none";
        librarySouth.style.display = "block";
        current.room = "librarySouth";
        checkWhichTilesShouldBeIncluded();
        player.position = "a1";
        token.style.transform = "translate(0px, 0px)";
    }
    else  {
    }
}
function playerToB8() {
    if (current.room === "hypotheticalRoom") {} else  {
    }
}
function playerToC8() {
    if (current.room === "hypotheticalRoom") {}
    else if (current.room === "libraryNorth") {
        room.size = "sevenBySeven";
        libraryNorth.style.display = "none";
        librarySouth.style.display = "block";
        current.room = "librarySouth";
        checkWhichTilesShouldBeIncluded();
        player.position = "c1";
        token.style.transform = "translate(160px, 0px)";
    } else  {
    }
}

function playerToD8() {
    if (current.room === "hypotheticalRoom") {}
    else if (current.room === "gardenAccess") {
        room.size = "oneBySeven";
        gardenAccess.style.display = "none";
        storageAccess.style.display = "block";
        current.room = "storageAccess";
        checkWhichTilesShouldBeIncluded();
        door.play();
        player.position = "d1";
        token.style.transform = "translate(240px,0px)";
    }
    else if (current.room === "groundFloorLanding") {
        room.size = "sevenBySeven";
        fountainRoom.style.display = "block";
        groundFloorLanding.style.display = "none";
        current.room = "fountainRoom";
        player.position = "d1";
        token.style.transform = "translate(240px, 0px)";
        checkWhichTilesShouldBeIncluded();
        door.play();
    }
    else if (current.room === "fountainRoom") {
        if (!dialogue.boyHiden) {
            dialogue.boyMoveAfterMerchantConvComplete = true;
            dialogue.boyHiden = true;
            npc2.style.display = "none";
        }
        current.room = "stainedGlassMarket";
        room.size = "sevenBySeven";
        fountainRoom.style.display = "none";
        stainedGlassMarket.style.display = "block";
        checkWhichTilesShouldBeIncluded();
        player.position = "d1";
        door.play();
        token.style.transform = "translate(240px, 0px)";
    }
    else if (current.room === "libraryNorth") {
        room.size = "sevenBySeven";
        libraryNorth.style.display = "none";
        librarySouth.style.display = "block";
        current.room = "librarySouth";
        checkWhichTilesShouldBeIncluded();
        player.position = "d1";
        token.style.transform = "translate(240px, 0px)";
    }
    else if (current.room === "stainedGlassMarket") {
        room.size = "sevenByThree";
        stainedGlassMarket.style.display = "none";
        largeHallway.style.display = "block";
        current.room = "largeHallway";
        player.position = "d1";
        token.style.transform = "translate(240px, 0px)";
        checkWhichTilesShouldBeIncluded();
        door.play();
    }  else  {
    }
}
function playerToE8() {
    if (current.room === "hypotheticalRoom") {}
    else if (current.room === "libraryNorth") {
        room.size = "sevenBySeven";
        libraryNorth.style.display = "none";
        librarySouth.style.display = "block";
        current.room = "librarySouth";
        checkWhichTilesShouldBeIncluded();
        player.position = "e1";
        token.style.transform = "translate(320px, 0px)";
    }
    else  {
    }
}
function playerToF8() {
    if (current.room === "hypotheticalRoom") {} else  {
    }
}
function playerToG8() {
    if (current.room === "hypotheticalRoom") {}
    else if (current.room === "libraryNorth") {
        room.size = "sevenBySeven";
        libraryNorth.style.display = "none";
        librarySouth.style.display = "block";
        current.room = "librarySouth";
        checkWhichTilesShouldBeIncluded();
        player.position = "g1";
        token.style.transform = "translate(480px, 0px)";
    }
    else  {
    }
}

//TILES
//TILES
//TILES

//COLUMN A

//for all of the normal tiles below, the default behavior (under "else") is to move onto the tile
//special contitions are rooms with objects 

function playerToA1() {
    if (current.room === "hypotheticalRoom") {}
    else if (current.room === "entryHall") {}
    else if (room.size === "fiveByFive") {} //block
    else  {
        boyFollow();
        player.position = "a1";
        theRelentlessMarchOfTime();
        thocker();
        token.style.transform = "translate(0px, 0px)";
    }
}
function playerToA2() {
    if (current.room === "hypotheticalRoom") {}
    else if (current.room === "entryHall" && boy.room) {
        //old random npc placement test       
    }
    else if (room.size === "fiveByFive") {} //block
    else if (room.size === "sevenByOne") {} //block
    else  {
        boyFollow();
        player.position = "a2";
        theRelentlessMarchOfTime();
        thocker();
        token.style.transform = "translate(0px, 80px)";
    }
}
function playerToA3() {
    if (current.room === "hypotheticalRoom") {}
    else if (current.room === "fountainRoom" && boy.room) {
    }
    else if (room.size === "fiveByFive") {} //block
    else  {
        boyFollow();
        player.position = "a3";
        theRelentlessMarchOfTime();
        thocker();
        token.style.transform = "translate(0px, 160px)";
    }
}
function playerToA4() {
    if (current.room === "hypotheticalRoom") {}
    else if (room.size === "fiveByFive") {} //block
    else if (current.room === "libraryNorth") {
        player.inPit = false;
        boyFollow();
        player.position = "a4";
        theRelentlessMarchOfTime();
        thocker();
        token.style.transform = "translate(0px, 240px)";
    }
        else if (room.size === "sevenByThree") {} //block
    else  {
        boyFollow();
        player.position = "a4";
        theRelentlessMarchOfTime();
        thocker();
        token.style.transform = "translate(0px, 240px)";
    }
}
function playerToA5() {
    if (current.room === "hypotheticalRoom") {}
    else if (current.room === "entryHall") {}
    else if (room.size === "fiveByFive") {} //block
    else  {
        boyFollow();
        player.position = "a5";
        theRelentlessMarchOfTime();
        thocker();
        token.style.transform = "translate(0px, 320px)";
    }
}
function playerToA6() {
    if (current.room === "hypotheticalRoom") {}
    else if (room.size === "sevenByFive") {} //exits to 7x5 rooms ought be placed before this line
    else if (current.room === "entryHall") {
    } else  {
        boyFollow();
        player.position = "a6";
        theRelentlessMarchOfTime();
        thocker();
        token.style.transform = "translate(0px, 400px)";
    }
}
function playerToA7() {
    if (current.room === "hypotheticalRoom") {} else  {
        boyFollow();
        player.position = "a7";
        theRelentlessMarchOfTime();
        thocker();
        token.style.transform = "translate(0px, 475px)";
    }
}

//COLUMN B

function playerToB1() {
    if (current.room === "hypotheticalRoom") {}
    else if (current.room === "northPorch") {}
    else if (current.room === "librarySouth") {}
    else if (current.room === "eastCatacombsLanding") {
            player.inPit = true;
            room.size = "sevenBySeven";
            eastCatacombsLanding.style.display = "none";
            librarySouth.style.display = "block";
            current.room = "librarySouth";
            player.position = "e4";
            token.style.transform = "translate(320px, 240px)";
            checkWhichTilesShouldBeIncluded();
            stairs.play();
    }
    else if (room.size === "threeByFive") {} //place exits in three by five rooms above this line
    else if (room.size === "threeByThree") {} //place exits in three by three rooms above this line
    else if (room.size === "threeByTwo") {} //place exits in three by three rooms above this line
    else  {
        boyFollow();
        player.position = "b1";
        theRelentlessMarchOfTime();
        thocker();
        token.style.transform = "translate(80px, 0px)";
    } 
}
function playerToB2() {
    if (current.room === "hypotheticalRoom") {}
    else if (current.room === "librarySouth") {}
    else if (current.room === "eastCatacombsLanding") {
            player.inPit = true;
            room.size = "sevenBySeven";
            eastCatacombsLanding.style.display = "none";
            librarySouth.style.display = "block";
            current.room = "librarySouth";
            player.position = "e4";
            token.style.transform = "translate(320px, 240px)";
            checkWhichTilesShouldBeIncluded();
            stairs.play();
    }
    else if (current.room === "weaponsCheck") {
        if (!inv.skjaaldfmmmmjdsf) {
            squelch.play();
            fossilizedRoe.style.display = "none";
            take(inv.fossilizedRoe);
            inv.skjaaldfmmmmjdsf = true;
        } else {
            //wall
        }
    }
    else if (current.room === "storageRoomThree") {
        room.size = "oneBySeven";
        storageRoomThree.style.display = "none";
        storageAccess.style.display = "block";
        current.room = "storageAccess";
        player.position = "d2";
        token.style.transform = "translate(240px, 80px)";
        checkWhichTilesShouldBeIncluded();
        door.play();
    }
    else if (current.room === "storageRoomFive") {
        room.size = "oneBySeven";
        storageRoomFive.style.display = "none";
        gardenAccess.style.display = "block";
        current.room = "gardenAccess";
        player.position = "d2";
        token.style.transform = "translate(240px, 80px)";
        checkWhichTilesShouldBeIncluded();
        door.play();
    }
    else if (current.room === "storageRoomFour") {
        room.size = "oneBySeven";
        storageRoomFour.style.display = "none";
        gardenAccess.style.display = "block";
        current.room = "gardenAccess";
        player.position = "d5";
        token.style.transform = "translate(240px, 320px)";
        checkWhichTilesShouldBeIncluded();
        door.play();
    }
    else if (current.room === "storageRoomOne") {
        room.size = "oneBySeven";
        storageRoomOne.style.display = "none";
        storageAccess.style.display = "block";
        current.room = "storageAccess";
        player.position = "d6";
        token.style.transform = "translate(240px, 400px)";
        checkWhichTilesShouldBeIncluded();
        door.play();
    }
    else if (current.room === "westernServantsQuartersHallway") {
        room.size = "threeByThree";
        westernServantsQuartersHallway.style.display = "none";
        servantsQuartersSix.style.display = "block";
        current.room = "servantsQuartersSix";
        console.log(current.room);
        player.position = "d1";
        token.style.transform = "translate(240px, 0px)";
        checkWhichTilesShouldBeIncluded();
        door.play();
    }
    else if (current.room === "upperWaterfallLanding") {
        room.size = "sevenByThree";
        upperWaterfallLanding.style.display = "none";
        largeHallway.style.display = "block";
        current.room = "largeHallway";
        player.position = "g2";
        token.style.transform = "translate(480px, 80px)";
        checkWhichTilesShouldBeIncluded();
        door.play();
    }
    else if (room.size === "sevenByOne") {} //southern exits in 7x1 rooms go above this line
    else if (current.room === "northPorch") {}
    else if (current.room === "preservesPantry") {
        room.size = "sevenByOne";
        preservesPantry.style.display = "none";
        westernServantsQuartersHallway.style.display = "block";
        current.room = "westernServantsQuartersHallway";
        token.style.transform = "translate(480px, 0px)";
        player.position = "g1";
        checkWhichTilesShouldBeIncluded();
        door.play();
    }
    else if (room.size === "threeByTwo") {} //place exits in three by three rooms above this line
    else if (room.size === "threeByThree") {} //place exits in three by three rooms above this line
    else if (room.size === "threeByFive") {} //place exits in three by five rooms above this line
    else  {
        boyFollow();
        player.position = "b2";
        theRelentlessMarchOfTime();
        thocker();
        token.style.transform = "translate(80px, 80px)";
    } 
}
function playerToB3() {
    if (current.room === "hypotheticalRoom") {}
    else if (current.room === "eastCatacombsLanding") {
            player.inPit = true;
            room.size = "sevenBySeven";
            eastCatacombsLanding.style.display = "none";
            librarySouth.style.display = "block";
            current.room = "librarySouth";
            player.position = "e4";
            token.style.transform = "translate(320px, 240px)";
            checkWhichTilesShouldBeIncluded();
            stairs.play();
    }
    else if (current.room === "weaponsCheck") {
        if (!inv.skjaaljoaojddqjdsf) {
            woodTake.play();
            quarterstaff.style.display = "none";
            take(inv.quarterstaff);
            inv.skjaaljoaojddqjdsf = true;
        } else {
            //wall
        }
    }
    else if (current.room === "librarySouth") {}
    else if (current.room === "libraryNorth") {}

    else if (room.size === "threeByThree") {} //place exits in three by three rooms above this line
    else if (room.size === "threeByFive") {} //place exits in three by five rooms above this line
    else  {
        boyFollow();
        player.position = "b3";
        theRelentlessMarchOfTime();
        thocker();
        token.style.transform = "translate(80px, 160px)";
    } 
}
function playerToB4() {
    if (current.room === "hypotheticalRoom") {}
    else if (current.room === "librarySouth") {}
    else if (current.room === "libraryNorth") {
        if (player.inPit) {
            player.inPit = false;
            room.size = "threeByTwo";
            libraryNorth.style.display = "none";
            lowerWaterfallLanding.style.display = "block";
            current.room = "lowerWaterfallLanding";
            player.position = "e1";
            token.style.transform = "translate(320px, 0px)";
            checkWhichTilesShouldBeIncluded();
            door.play();
        } else {
            //absolutely NOTHING
        }
    }
    else if (room.size === "sevenByThree") {} //block
    else if (room.size === "threeByFive") {} //place exits in three by five rooms above this line
    else {
        boyFollow();
        player.position = "b4";
        theRelentlessMarchOfTime();
        thocker();
        token.style.transform = "translate(80px, 240px)";
    } 
}
function playerToB5() {
    if (current.room === "hypotheticalRoom") {}
    else if (current.room === "librarySouth") {}
    else if (current.room === "libraryNorth") {}
    else if (room.size === "threeByFive") {} //place exits in three by five rooms above this line
    else  {
        boyFollow();
        player.position = "b5";
        theRelentlessMarchOfTime();
        thocker();
        token.style.transform = "translate(80px, 320px)";
    } 
}
function playerToB6() {
    if (current.room === "hypotheticalRoom") {}
    else if (current.room === "libraryNorth") {}
    else if (current.room === "groundFloorLanding3") {
        current.room = "groundFloorLanding2";
        room.size = "fiveByFive";
        groundFloorLanding3.style.display = "none";
        groundFloorLanding2.style.display = "block";
        checkWhichTilesShouldBeIncluded();
        player.position = "b1";
        stairs.play();
        token.style.transform = "translate(80px, 0px)";
    }
    else if (room.size === "fiveByFive") {} //block
    else if (current.room === "entryHall") {
        //go to coat room
        room.size = "threeByThree";
        entryHall.style.display = "none";
        coatRoom.style.display = "block";
        current.room = "coatRoom";
        token.style.transform = "translate(240px, 0px)";
        player.position = "d1";
        checkWhichTilesShouldBeIncluded();
        door.play();

    }     else if (room.size === "sevenByFive") {} //exits to 7x5 rooms ought be placed before this line
    else  {
        boyFollow();
        player.position = "b6";
        theRelentlessMarchOfTime();
        thocker();
        token.style.transform = "translate(80px, 400px)";
    } 
}
function playerToB7() {
    if (current.room === "hypotheticalRoom") {}
    else if (current.room === "libraryNorth") {}
    else  {
        boyFollow();
        player.position = "b7";
        theRelentlessMarchOfTime();
        thocker();
        token.style.transform = "translate(80px, 475px)";
    } 
}

//COLUMN C

function playerToC1() {
    if (current.room === "hypotheticalRoom") {}
    if (current.room === "weaponsCheck") {
        if (!inv.skjdfnzzmzzmmjdsf) {
            paper.play();
            crumpledNote.style.display = "none";
            take(inv.crumpledNote);
            inv.skjdfnzzmzzmmjdsf = true;
        } else {
            boyFollow();
            player.position = "c1";
            theRelentlessMarchOfTime();
            thocker();
            token.style.transform = "translate(160px, 0px)";
        }
    }
    
    else if (current.room === "coatRoom") {
        if (!dialogue.package) {   
                if (!inv.whateverV) {
                    boxTake.play();
                    emptyBox.style.display = "none";
                    take(inv.box);
                    inv.whateverV = true;
                }
            if (numberOfKeyDowns < boxOnShelf.length) {
                dialogue.repeat = "c1";
                converse(boxOnShelf, boxOnShelfv);
            } else if (numberOfKeyDowns == boxOnShelf.length) {
                if (!dialogue.loopOnceMore) {
                    dialogue.loopOnceMore = true;
                    converse(boxOnShelf, boxOnShelfv);
                    dialogue.loopOnceMore = false;
                }
                dialogue.package = true;
            }
        }
    }
    else if (room.size === "oneBySeven") {} //block
    else  {
        boyFollow();
        player.position = "c1";
        theRelentlessMarchOfTime();
        thocker();
        token.style.transform = "translate(160px, 0px)";
    } 
}
function playerToC2() {
    if (current.room === "hypotheticalRoom") {}
    else if (current.room === "coatRoom") {
        if (!dialogue.coatsss) {   
            if (numberOfKeyDowns < coats.length) {
                dialogue.repeat = "e2";
                converse(coats, coatsVo);
            } else if (numberOfKeyDowns == coats.length) {
                if (!dialogue.loopOnceMore) {
                    dialogue.loopOnceMore = true;
                    converse(coats, coatsVo);
                    dialogue.loopOnceMore = false;
                }
                dialogue.coatsss = true;
            }
        }
    }
    else if (room.size === "oneBySeven") {} //block
    else if (room.size === "sevenByOne") {} //southern exits in 7x1 rooms go above this line
         else  {
        boyFollow();
        player.position = "c2";
        theRelentlessMarchOfTime();
        thocker();
        token.style.transform = "translate(160px, 80px)";
    } 
}
function playerToC3() {
    if (current.room === "hypotheticalRoom") {} 
    else if (current.room === "coatRoom") {
       if (!dialogue.smallllll) {  
            if (numberOfKeyDowns < smallTree.length) {
                dialogue.repeat = "c3";
                converse(smallTree, smallTreeV);
            } else if (numberOfKeyDowns == smallTree.length) {
                if (!dialogue.loopOnceMore) {
                    dialogue.loopOnceMore = true;
                    converse(smallTree, smallTreeV);
                    dialogue.loopOnceMore = false;
                }
                dialogue.smallllll = true;
            }
        }
    }
    else if (current.room === "northPorch") {}
    else if (current.room === "libraryNorth") {}
    else if (room.size === "threeByTwo") {}
    else if (room.size === "oneBySeven") {} //block
    else  {
        boyFollow();
        player.position = "c3";
        theRelentlessMarchOfTime();
        thocker();
        token.style.transform = "translate(160px, 160px)";
    } 
}
function playerToC4() {
    if (current.room === "hypotheticalRoom") {}
    else if (current.room === "storageAccess") {
        room.size = "threeByThree";
        storageAccess.style.display = "none";
        storageRoomTwo.style.display = "block";
        current.room = "storageRoomTwo";
        player.position = "e2";
        token.style.transform = "translate(320px, 80px)";
        checkWhichTilesShouldBeIncluded();
        door.play();
    }
    else if (current.room === "libraryNorth") {
        player.inPit = true;
         boyFollow();
        player.position = "c4";
        theRelentlessMarchOfTime();
        thocker();
        token.style.transform = "translate(160px, 240px)";
    }
    else if (room.size === "sevenByThree") {} //block
    else if (room.size === "oneBySeven") {} //block
    else if (room.size === "threeByThree") {} //place exits in three by three rooms above this line
    else  {
        boyFollow();
        player.position = "c4";
        theRelentlessMarchOfTime();
        thocker();
        token.style.transform = "translate(160px, 240px)";
    } 
}
function playerToC5() {
    if (current.room === "hypotheticalRoom") {}
    else if (current.room === "librarySouth") {}
    else if (current.room === "catacombs1") {
        if (!dialogue.tollForFerryman) {
            alert("alright. let's go. press z to wait.");
            dialogue.ferryJourney = true;
            player.ferry1 = true;
            token.style.transform = "translate(160px, 320px)";
            movement.allow = false;
        } else {
            alert("first I need payment.");
        }
    }
    else if (room.size === "oneBySeven") {} //block
    else  {
        boyFollow();
        player.position = "c5";
        theRelentlessMarchOfTime();
        thocker();
        token.style.transform = "translate(160px, 320px)";
    } 
}
function playerToC6() {
    if (current.room === "hypotheticalRoom") {}
    else if (current.room === "groundFloorLanding3") {
        current.room = "groundFloorLanding2";
        room.size = "fiveByFive";
        groundFloorLanding3.style.display = "none";
        groundFloorLanding2.style.display = "block";
        checkWhichTilesShouldBeIncluded();
        player.position = "c1";
        stairs.play();
        token.style.transform = "translate(160px, 0px)";
    }
    else if (current.room === "gardenAccess") {
        room.size = "sevenBySeven";
        gardenAccess.style.display = "none";
        throneRoomEast.style.display = "block";
        current.room = "throneRoomEast";
        checkWhichTilesShouldBeIncluded();
        door.play();
        player.position = "g6";
        token.style.transform = "translate(480px,400px)";
    }
    else if (room.size === "fiveByFive") {} //block
    else if (room.size === "oneBySeven") {} //block
    else if (room.size === "threeByFive") {} //place exits in three by five rooms above this line
    else if (room.size === "sevenByFive") {} //exits to 7x5 rooms ought be placed before this line
    else if (current.room === "entryHall") {}
    else  {
        boyFollow();
        player.position = "c6";
        theRelentlessMarchOfTime();
        thocker();
        token.style.transform = "translate(160px, 400px)";
    } 
}
function playerToC7() {
    if (current.room === "hypotheticalRoom") {}
    else if (current.room === "storageAccess") {
        room.size = "sevenBySeven";
        storageAccess.style.display = "none";
        libraryNorth.style.display = "block";
        current.room = "libraryNorth";
        checkWhichTilesShouldBeIncluded();
        door.play();
        player.position = "g2";
        token.style.transform = "translate(480px,80px)";
    }
    else if (room.size === "oneBySeven") {} //block
    else  {
        boyFollow();
        player.position = "c7";
        theRelentlessMarchOfTime();
        thocker();
        token.style.transform = "translate(160px, 475px)";
    } 
}

//COLUMN D

function playerToD1() {
    
    if (current.room === "hypotheticalRoom") {} 
    else if (current.room === "entryHall") {
        jackalStatueDialogue();
    } 
    else  {
        boyFollow();
        player.position = "d1";
        theRelentlessMarchOfTime();
        thocker();
        token.style.transform = "translate(240px, 0px)";
    } 
}
function playerToD2() {
    if (current.room === "hypotheticalRoom") {}
    else if (current.room === "hallOfDoors") {
        current.room = "canalMouth";
        room.size = "threeByThree";
        hallOfDoors.style.display = "none";
        canalMouth.style.display = "block";
        checkWhichTilesShouldBeIncluded();
        player.position = "d1";
        door.play();
        token.style.transform = "translate(240px, 0px)";
    }
    else if (current.room === "easternServantsQuartersHallway") {
        room.size = "threeByThree";
        easternServantsQuartersHallway.style.display = "none";
        servantsQuartersTwo.style.display = "block";
        current.room = "servantsQuartersTwo";
                console.log(current.room);
        player.position = "d1";
        token.style.transform = "translate(240px, 0px)";
        checkWhichTilesShouldBeIncluded();
        door.play();
    }
    
    else if (room.size === "sevenByOne") {} //southern exits in 7x1 rooms go above this line
    else  {
        boyFollow();
        player.position = "d2";
        theRelentlessMarchOfTime();
        thocker();
        token.style.transform = "translate(240px, 80px)";
    } 
}
function playerToD3() {
    if (current.room === "hypotheticalRoom") {}
    else if (current.room === "libraryNorth") {}
    else if (current.room === "lowerWaterfallLanding") {
        room.size = "threeByThree";
        lowerWaterfallLanding.style.display = "none";
        upperWaterfallLanding.style.display = "block";
        current.room = "upperWaterfallLanding";
        player.position = "d1";
        token.style.transform = "translate(240px, 0px)";
        checkWhichTilesShouldBeIncluded();
        stairs.play();
    }
    else if (current.room === "northPorch") {
        room.size = "threeByFive";
        preservesPantry.style.display = "block";
        northPorch.style.display = "none";
        current.room = "preservesPantry";
        player.position = "d1";
        token.style.transform = "translate(240px, 0px)";
        checkWhichTilesShouldBeIncluded();
        door.play();
    }
    else if (room.size === "threeByTwo") {}
     else  {
        boyFollow();
        thocker();
        player.position = "d3";
        theRelentlessMarchOfTime();
        token.style.transform = "translate(240px, 160px)";
    } 
}
function playerToD4() {
    if (current.room === "hypotheticalRoom") {}
    else if (current.room === "coatRoom") {
        if (!dialogue.coatPainting) {   
            if (numberOfKeyDowns < landscape.length) {
                dialogue.repeat = "d4";
                converse(landscape, landscapev);
            } else if (numberOfKeyDowns == landscape.length) {
                if (!dialogue.loopOnceMore) {
                    dialogue.loopOnceMore = true;
                    converse(landscape, landscapev);
                    dialogue.loopOnceMore = false;
                }
                dialogue.coatPainting = true;
            }
        }
    }
    else if (current.room === "libraryLanding") {
        room.size = "threeByTwo";
        libraryLanding.style.display = "none";
        lowerWaterfallLanding.style.display = "block";
        current.room = "lowerWaterfallLanding";
        player.position = "d1";
        token.style.transform = "translate(240px, 0px)";
        checkWhichTilesShouldBeIncluded();
        stairs.play();
    }
    else if (current.room === "upperWaterfallLanding") {
        room.size = "sevenBySeven";
        upperWaterfallLanding.style.display = "none";
        study.style.display = "block";
        current.room = "study";
        player.position = "d1";
        token.style.transform = "translate(240px, 0px)";
        checkWhichTilesShouldBeIncluded();
        door.play();
    }
    else if (current.room === "weaponsCheck") {
        //go to coat room
        room.size = "sevenByFive";
        entryHall.style.display = "block";
        weaponsCheck.style.display = "none";
        current.room = "entryHall";
        token.style.transform = "translate(80px, 0px)";
        player.position = "b1";
        checkWhichTilesShouldBeIncluded();
        door.play();
    }
    else if (current.room === "servantsQuartersOne") {
        room.size = "sevenByOne";
        servantsQuartersOne.style.display = "none";
        easternServantsQuartersHallway.style.display = "block";
        current.room = "easternServantsQuartersHallway";
        player.position = "f1";
        token.style.transform = "translate(400px, 0px)";
        checkWhichTilesShouldBeIncluded();
        door.play();
    } 
    else if (current.room === "servantsQuartersThree") {
        room.size = "sevenByOne";
        servantsQuartersThree.style.display = "none";
        easternServantsQuartersHallway.style.display = "block";
        current.room = "easternServantsQuartersHallway";
        player.position = "b1";
        token.style.transform = "translate(80px, 0px)";
        checkWhichTilesShouldBeIncluded();
        door.play();
    } 
    else if (current.room === "servantsQuartersFive") {
        room.size = "sevenByOne";
        servantsQuartersFive.style.display = "none";
        westernServantsQuartersHallway.style.display = "block";
        current.room = "westernServantsQuartersHallway";
        player.position = "d1";
        token.style.transform = "translate(240px, 0px)";
        checkWhichTilesShouldBeIncluded();
        door.play();
    } 
    else if (room.size === "sevenByThree") {} //block
    else if (room.size === "threeByThree") {} //place exits in three by three rooms above this line
     else  {
        boyFollow();
        thocker();
        player.position = "d4";
        theRelentlessMarchOfTime();
        token.style.transform = "translate(240px, 240px)";
    } 
}
function playerToD5() {
    if (current.room === "hypotheticalRoom") {}
    else if (current.room === "librarySouth") {}
    else  {
        boyFollow();
        player.position = "d5";
        theRelentlessMarchOfTime();
        thocker();
        token.style.transform = "translate(240px, 320px)";
    } 
}
function playerToD6() {
    if (current.room === "hypotheticalRoom") {}
    else if (current.room === "groundFloorLanding3") {
        current.room = "groundFloorLanding2";
        room.size = "fiveByFive";
        groundFloorLanding3.style.display = "none";
        groundFloorLanding2.style.display = "block";
        checkWhichTilesShouldBeIncluded();
        player.position = "d1";
        stairs.play();
        token.style.transform = "translate(240px, 0px)";
    }
    else if (current.room === "larder") {
        room.size = "fiveByFive";
        larder.style.display = "none";
        wineCelar.style.display = "block";
        current.room = "wineCelar";
        player.position = "d1";
        token.style.transform = "translate(240px, 0px)";
        checkWhichTilesShouldBeIncluded();
        door.play();
    } 
    else if (current.room === "courtyard") {
        room.size = "oneBySeven";
        gardenAccess.style.display = "block";
        courtyard.style.display = "none";
        current.room = "gardenAccess";
        player.position = "d1";
        token.style.transform = "translate(240px, 0px)";
        checkWhichTilesShouldBeIncluded();
        door.play();
    }
    else if (room.size === "fiveByFive") {} //block
    else if (room.size === "threeByFive") {} //place exits in three by five rooms above this line
    else if (room.size === "sevenByFive") {} //exits to 7x5 rooms ought be placed before this line
    else if (current.room === "entryHall") {}
    else  {
        boyFollow();
        player.position = "d6";
        theRelentlessMarchOfTime();
        thocker();
        token.style.transform = "translate(240px, 400px)";
    } 
}
function playerToD7() {
    boyFollow();
    if (current.room === "hypotheticalRoom") {}
     else  {
       player.position = "d7";
       theRelentlessMarchOfTime();
        thocker();
        token.style.transform = "translate(240px, 475px)";
    } 
}


//COLUMN E

function playerToE1() {
    if (current.room === "hypotheticalRoom") {}
    else if (current.room === "weaponsCheck") {
        if (!inv.skjdfnkmdmdmdmmjdsf) {
            metalTake.play();
            rustyDaggars.style.display = "none";
            take(inv.rustyDaggars);
            inv.skjdfnkmdmdmdmmjdsf = true;
        } else {
            player.position = "e1";
            theRelentlessMarchOfTime();
            thocker();
            boyFollow();
            token.style.transform = "translate(320px, 0px)";
        }
    }
    else if (current.room === "coatRoom") {
        if (!dialogue.coatsss) {   
            if (numberOfKeyDowns < coats.length) {
                dialogue.repeat = "e2";
                converse(coats, coatsVo);
            } else if (numberOfKeyDowns == coats.length) {
                if (!dialogue.loopOnceMore) {
                    dialogue.loopOnceMore = true;
                    converse(coats, coatsVo);
                    dialogue.loopOnceMore = false;
                }
                dialogue.coatsss = true;
            }
        }
    }
    else if (room.size === "oneBySeven") {} //block
    else if (current.room === "entryHall") {
        beetleStatueDialogue();
    }
    else  {
        player.position = "e1";
        theRelentlessMarchOfTime();
        thocker();
        boyFollow();
        token.style.transform = "translate(320px, 0px)";
    } 
}
function playerToE2() {
    if (current.room === "hypotheticalRoom") {} 
    else if (current.room === "weaponsCheck") {
        if (!inv.skjdfnxmnckjdsf) {
            metalTake.play();
            throwingstars.style.display = "none";
            take(inv.throwingStars);
            inv.skjdfnxmnckjdsf = true;
        } else {
            player.position = "e2";
            theRelentlessMarchOfTime();
            thocker();
            boyFollow();
            token.style.transform = "translate(320px, 80px)";
        }
    }
    else if (current.room === "storageAccess") {
        room.size = "threeByThree";
        storageAccess.style.display = "none";
        storageRoomThree.style.display = "block";
        current.room = "storageRoomThree";
        player.position = "c2";
        token.style.transform = "translate(160px, 80px)";
        checkWhichTilesShouldBeIncluded();
        door.play();
    }
    else if (current.room === "gardenAccess") {
        room.size = "threeByThree";
        gardenAccess.style.display = "none";
        storageRoomFive.style.display = "block";
        current.room = "storageRoomFive";
        player.position = "c2";
        token.style.transform = "translate(160px, 80px)";
        checkWhichTilesShouldBeIncluded();
        door.play();
    }
    else if (room.size === "sevenByOne") {} //southern exits in 7x1 rooms go above this line
    else if (current.room === "coatRoom") {
        if (!dialogue.coatsss) {   
            if (numberOfKeyDowns < coats.length) {
                dialogue.repeat = "e2";
                converse(coats, coatsVo);
            } else if (numberOfKeyDowns == coats.length) {
                if (!dialogue.loopOnceMore) {
                    dialogue.loopOnceMore = true;
                    converse(coats, coatsVo);
                    dialogue.loopOnceMore = false;
                }
                dialogue.coatsss = true;
            }
        }
    }
    else if (room.size === "oneBySeven") {} //block
    else  {
        player.position = "e2";
        theRelentlessMarchOfTime();
        thocker();
        boyFollow();
        token.style.transform = "translate(320px, 80px)";
    } 
}
function playerToE3() {
    if (current.room === "hypotheticalRoom") {}
    else if (current.room === "libraryNorth") {}
    else if (current.room === "northPorch") {}
    else if (room.size === "threeByTwo") {}
    else if (room.size === "oneBySeven") {} //block
    else {
        boyFollow();
        player.position = "e3";
        theRelentlessMarchOfTime();
        thocker();
        token.style.transform = "translate(320px, 160px)";
    } 
}
function playerToE4() {
    if (current.room === "hypotheticalRoom") {}
    else if (current.room === "weaponsCheck") {}
    else if (room.size === "sevenByThree") {} //block
    else if (room.size === "oneBySeven") {} //block
    else if (room.size === "threeByThree") {} //place exits in three by three rooms above this line
    else  {
        boyFollow();
        player.position = "e4";
        theRelentlessMarchOfTime();
        thocker();
        token.style.transform = "translate(320px, 240px)";
    } 
}
function playerToE5() {
    if (current.room === "hypotheticalRoom") {} 
    else if (current.room === "librarySouth") {}
    else if (current.room === "gardenAccess") {
        room.size = "threeByThree";
        gardenAccess.style.display = "none";
        storageRoomFour.style.display = "block";
        current.room = "storageRoomFour";
        player.position = "c2";
        token.style.transform = "translate(160px, 80px)";
        checkWhichTilesShouldBeIncluded();
        door.play();
    }
    else if (room.size === "oneBySeven") {} //block
    else if (current.room === "entryHall") {
        wolfStatueDialogue();
    } else  {
        boyFollow();
        player.position = "e5";
        theRelentlessMarchOfTime();
        thocker();
        token.style.transform = "translate(320px, 320px)";
    } 
}
function playerToE6() {
    if (current.room === "hypotheticalRoom") {}
    else if (current.room === "groundFloorLanding3") {
        current.room = "groundFloorLanding2";
        room.size = "fiveByFive";
        groundFloorLanding3.style.display = "none";
        groundFloorLanding2.style.display = "block";
        checkWhichTilesShouldBeIncluded();
        player.position = "e1";
        stairs.play();
        token.style.transform = "translate(320px, 0px)";
    }
    else if (current.room === "entryHall") {}
    else if (current.room === "storageAccess") {
        room.size = "threeByThree";
        storageAccess.style.display = "none";
        storageRoomOne.style.display = "block";
        current.room = "storageRoomOne";
        player.position = "c2";
        token.style.transform = "translate(160px, 80px)";
        checkWhichTilesShouldBeIncluded();
        door.play();
    }
    else if (current.room === "wineCelar") {
        if (player.shrunk) {
            room.size = "fiveByFive";
            wineCelar.style.display = "none";
            mouseHole.style.display = "block";
            current.room = "mouseHole";
            player.position = "d1";
            token.style.transform = "translate(240px, 0px)";
            checkWhichTilesShouldBeIncluded();
        } else {
            alert("There's a mousehole here.")
        }
    } 
    else if (room.size === "fiveByFive") {} //block
    else if (room.size === "oneBySeven") {} //block
    else if (room.size === "threeByFive") {} //place exits in three by five rooms above this line
    else if (room.size === "sevenByFive") {} //exits to 7x5 rooms ought be placed before this line
    else {
        boyFollow();
        player.position = "e6";
        theRelentlessMarchOfTime();
        thocker();
        token.style.transform = "translate(320px, 400px)";
    } 
}
function playerToE7() {
    if (current.room === "hypotheticalRoom") {}
    else if (room.size === "oneBySeven") {} //block
    else  {
        player.position = "e7";
        theRelentlessMarchOfTime();
        thocker();
        token.style.transform = "translate(320px, 475px)";
        boyFollow();
    } 
}


//COLUMN F

function playerToF1() {
    if (current.room === "hypotheticalRoom") {}
    else if (current.room === "eastCatacombsLanding") {
            room.size = "sevenByFour";
            eastCatacombsLanding.style.display = "none";
            catacombs1.style.display = "block";
            current.room = "catacombs1";
            player.position = "a1";
            token.style.transform = "translate(0px, 0px)";
            checkWhichTilesShouldBeIncluded();
            stairs.play();
    }
    else if (current.room === "lowerWaterfallLanding") {
        player.inPit = true;
        room.size = "sevenBySeven";
        lowerWaterfallLanding.style.display = "none";
        libraryNorth.style.display = "block";
        current.room = "libraryNorth";
        player.position = "c4";
        token.style.transform = "translate(160px, 240px)";
        checkWhichTilesShouldBeIncluded();
        door.play();
    }
    else if (current.room === "librarySouth") {}
    else if (room.size === "threeByThree") {} //place exits in three by three rooms above this line
    else if (room.size === "threeByFive") {} //place exits in three by five rooms above this line
    else if (current.room === "northPorch") {
        alert("You: the stairs lead down to a lawn of white grass bordered by a dense, dark forest. The grass was once well-maintained, but is now overgrown and pitted with small crators.")
    }
    else if (current.room === "entryHall") {
        civetStatueDialogue();
    }
    else if (current.room === "hypotheticalRoom")  {
        if (!inventory.ledger) {
            takeLedger();
        } else {
            boyFollow();
            player.position = "f1";
            theRelentlessMarchOfTime();
            thocker();
            token.style.transform = "translate(400px, 0px)";
        }
    } else {
            boyFollow();
            player.position = "f1";
            theRelentlessMarchOfTime();
            thocker();
            token.style.transform = "translate(400px, 0px)";
    }
}
function playerToF2() {
    if (current.room === "hypotheticalRoom") {}
    else if (current.room === "eastCatacombsLanding") {
            room.size = "sevenByFour";
            eastCatacombsLanding.style.display = "none";
            catacombs1.style.display = "block";
            current.room = "catacombs1";
            player.position = "a2";
            token.style.transform = "translate(0px, 80px)";
            checkWhichTilesShouldBeIncluded();
            stairs.play();
    }
    else if (current.room === "librarySouth") {}
    else if (room.size === "threeByTwo") {}
    else if (current.room === "entryHall") {
        if (!dialogue.boyEntry) {
            dialogue.boyEntry = true;
            player.position = "f2";
            theRelentlessMarchOfTime();
            thocker();
            token.style.transform = "translate(400px, 80px)";
        } else {
            boyFollow();
            player.position = "f2";
            theRelentlessMarchOfTime();
            thocker();
            token.style.transform = "translate(400px, 80px)";
        }
    }
    else if (current.room === "storageRoomTwo") {
        room.size = "oneBySeven";
        storageRoomTwo.style.display = "none";
        storageAccess.style.display = "block";
        current.room = "storageAccess";
        player.position = "d4";
        token.style.transform = "translate(240px, 240px)";
        checkWhichTilesShouldBeIncluded();
        door.play();
    }
    else if (current.room === "westernServantsQuartersHallway") {
        room.size = "threeByThree";
        westernServantsQuartersHallway.style.display = "none";
        servantsQuartersFour.style.display = "block";
        current.room = "servantsQuartersFour";
        console.log(current.room);
        player.position = "d1";
        token.style.transform = "translate(240px, 0px)";
        checkWhichTilesShouldBeIncluded();
        door.play();
    }
    else if (current.room === "libraryLanding") {
        room.size = "sevenBySeven";
        libraryLanding.style.display = "none";
        libraryNorth.style.display = "block";
        current.room = "libraryNorth";
        player.position = "a2";
        token.style.transform = "translate(0px, 80px)";
        checkWhichTilesShouldBeIncluded();
        door.play();
    }
    else if (room.size === "threeByThree") {} //place exits in three by three rooms above this line
    else if (room.size === "sevenByOne") {} //southern exits in 7x1 rooms go above this line
    else if (room.size === "threeByFive") {} //place exits in three by five rooms above this line
    else if (current.room === "northPorch") {
        alert("You: the stairs lead down to a lawn of white grass bordered by a dense, dark forest. The grass was once well-maintained, but is now overgrown and pitted with small crators.")
    }
    else if (current.room === "weaponsCheck") {}
    else  {
        boyFollow();
        player.position = "f2";
        theRelentlessMarchOfTime();
        thocker();
        token.style.transform = "translate(400px, 80px)";
    } 
}

function playerToF3() {
    if (current.room === "hypotheticalRoom") {}
    else if (current.room === "librarySouth") {}
    else if (current.room === "libraryNorth") {}
    else if (current.room === "eastCatacombsLanding") {
            room.size = "sevenByFour";
            eastCatacombsLanding.style.display = "none";
            catacombs1.style.display = "block";
            current.room = "catacombs1";
            player.position = "a2";
            token.style.transform = "translate(0px, 80px)";
            checkWhichTilesShouldBeIncluded();
            stairs.play();
    }
    else if (current.room === "entryHall") {
        
                boyFollow();
                player.position = "f3";
                theRelentlessMarchOfTime();
                thocker();
                token.style.transform = "translate(400px, 160px)";
            
        
    }
    else if (room.size === "threeByThree") {} //place exits in three by three rooms above this line
    else if (room.size === "threeByFive") {} //place exits in three by five rooms above this line
    else if (current.room === "coatRoom") {}
     else  {
        boyFollow();
        player.position = "f3";
        theRelentlessMarchOfTime();
        thocker();
        token.style.transform = "translate(400px, 160px)";
    } 
}
function playerToF4() {
    if (current.room === "hypotheticalRoom") {}
    else if (current.room === "libraryNorth") {}
    else if (current.room === "librarySouth") {
        if (player.inPit) {
            player.inPit = false;
            room.size = "threeByThree";
            librarySouth.style.display = "none";
            eastCatacombsLanding.style.display = "block";
            current.room = "eastCatacombsLanding";
            player.position = "c2";
            token.style.transform = "translate(160px, 80px)";
            checkWhichTilesShouldBeIncluded();
            door.play();
        }
    }
    else if (current.room === "entryHall") {
        if (!dialogue.boyEntry) {
            dialogue.boyEntry = true;
            boyFollow();
            player.position = "f4";
            theRelentlessMarchOfTime();
            thocker();
            token.style.transform = "translate(400px, 240px)";
        } else {
            boyFollow();
            player.position = "f4";
            theRelentlessMarchOfTime();
            thocker();
            token.style.transform = "translate(400px, 240px)";
        }
        
    }
     else if (current.room === "preservesPantry") {
        room.size = "sevenByFive";
        kitchen.style.display = "block";
        preservesPantry.style.display = "none";
        current.room = "kitchen";
        player.position = "a4";
        token.style.transform = "translate(0px, 240px)";
        checkWhichTilesShouldBeIncluded();
        door.play();
    }
    else if (room.size === "sevenByThree") {} //block
    else if (room.size === "threeByFive") {} //place exits in three by five rooms above this line
    else  {
        boyFollow();
        player.position = "f4";
        theRelentlessMarchOfTime();
        thocker();
        token.style.transform = "translate(400px, 240px)";
    } 
}
function playerToF5() {
    if (current.room === "hypotheticalRoom") {}
    else if (current.room === "librarySouth") {}
    else if (current.room === "libraryNorth") {}
    else if (room.size === "threeByFive") {} //place exits in three by five rooms above this line
    else if (current.room === "entryHall") {
        hellbenderStatueDialogue();
    } else  {
        boyFollow();
        player.position = "f5";
        theRelentlessMarchOfTime();
        thocker();
        token.style.transform = "translate(400px, 320px)";
    } 
}
function playerToF6() {
    if (current.room === "hypotheticalRoom") {}
    else if (current.room === "groundFloorLanding3") {
        current.room = "groundFloorLanding2";
        room.size = "fiveByFive";
        groundFloorLanding3.style.display = "none";
        groundFloorLanding2.style.display = "block";
        checkWhichTilesShouldBeIncluded();
        player.position = "f1";
        stairs.play();
        token.style.transform = "translate(400px, 0px)";
    }
    else if (current.room === "libraryNorth") {}
    else if (current.room === "kitchen") {
        current.room = "meadHallEast";
        room.size = "sevenBySeven";
        meadHallEast.style.display = "block";
        kitchen.style.display = "none";
        checkWhichTilesShouldBeIncluded();
        door.play();
        player.position = "f1";
        token.style.transform = "translate(400px,0px)";
    }
    else if (room.size === "fiveByFive") {} //block
    else if (room.size === "sevenByFive") {} //exits to 7x5 rooms ought be placed before this line
    else if (current.room === "entryHall") {}
    else  {
        boyFollow();
        player.position = "f6";
        theRelentlessMarchOfTime();
        thocker();
        token.style.transform = "translate(400px, 400px)";
    } 
}
function playerToF7() {
    if (current.room === "hypotheticalRoom") {}
    else if (current.room === "libraryNorth") {}
    else {
        boyFollow();
        player.position = "f7";
        theRelentlessMarchOfTime();
        thocker();
        token.style.transform = "translate(400px, 475px)";
    } 
}


//COLUMN G

function playerToG1() {
    if (current.room === "hypotheticalRoom") {
        if (!inventory.pumpkin) {
            takePumpkin();
        } else {
            boyFollow();
            player.position = "g1";
            theRelentlessMarchOfTime();
            thocker();
            token.style.transform = "translate(475px, 0px)";
        }
    } else if (current.room === "hypotheticalRoom") {}
    else if (current.room === "groundFloorLanding2") {
        current.room = "groundFloorLanding";
        room.size = "sevenBySeven";
        groundFloorLanding2.style.display = "none";
        groundFloorLanding.style.display = "block";
        checkWhichTilesShouldBeIncluded();
        player.position = "a2";
        stairs.play();
        token.style.transform = "translate(0px, 80px)";
    }
    else if (current.room === "groundFloorLanding3") {
        current.room = "upperFloorLanding";
        room.size = "sevenBySeven";
        groundFloorLanding3.style.display = "none";
        upperFloorLanding.style.display = "block";
        checkWhichTilesShouldBeIncluded();
        player.position = "a2";
        stairs.play();
        token.style.transform = "translate(0px, 80px)";
    }
    else if (room.size === "fiveByFive") {} //block
    else if (current.room === "entryHall") {
        coalanthStatueDialogue();
    } else {
            player.position = "g1";
            thocker();
            theRelentlessMarchOfTime();
            token.style.transform = "translate(475px, 0px)";
    } 
}
function playerToG2() {
    
    if (current.room === "hypotheticalRoom") {}
    else if (current.room === "groundFloorLanding3") {
        current.room = "upperFloorLanding";
        room.size = "sevenBySeven";
        groundFloorLanding3.style.display = "none";
        upperFloorLanding.style.display = "block";
        checkWhichTilesShouldBeIncluded();
        player.position = "a3";
        stairs.play();
        token.style.transform = "translate(0px, 160px)";
    }
    else if (current.room === "groundFloorLanding2") {
        current.room = "groundFloorLanding";
        room.size = "sevenBySeven";
        groundFloorLanding2.style.display = "none";
        groundFloorLanding.style.display = "block";
        checkWhichTilesShouldBeIncluded();
        player.position = "a2";
        stairs.play();
        token.style.transform = "translate(0px, 80px)";
    }
    else if (room.size === "fiveByFive") {} //block
    else if (room.size === "sevenByOne") {} //southern exits in 7x1 rooms go above this line
    else  {
        boyFollow();
        player.position = "g2";
        theRelentlessMarchOfTime();
        thocker();
        token.style.transform = "translate(475px, 80px)";
    } 
}
function playerToG3() {
    if (current.room === "hypotheticalRoom") {}
    else if (current.room === "groundFloorLanding3") {
        current.room = "upperFloorLanding";
        room.size = "sevenBySeven";
        groundFloorLanding3.style.display = "none";
        upperFloorLanding.style.display = "block";
        checkWhichTilesShouldBeIncluded();
        player.position = "a4";
        stairs.play();
        token.style.transform = "translate(0px, 240px)";
    }
    else if (current.room === "groundFloorLanding2") {
        current.room = "groundFloorLanding";
        room.size = "sevenBySeven";
        groundFloorLanding2.style.display = "none";
        groundFloorLanding.style.display = "block";
        checkWhichTilesShouldBeIncluded();
        player.position = "a3";
        stairs.play();
        token.style.transform = "translate(0px, 160px)";
    }
    else if (current.room === "entryHall") {
    if (!dialogue.boyEnter) {
            npc2.style.display = "block";
            npc2.style.transform = "translate(0px, 160px)";
            dialogue.boyEnter = true;
        }
        if (!dialogue.boyEnterConv) {   
            if (numberOfKeyDowns < boyEntrance.length) {
                dialogue.repeat = "g3";
                converse(boyEntrance, boyEntrancev);
            } else if (numberOfKeyDowns == boyEntrance.length) {
                if (!dialogue.loopOnceMore) {
                    dialogue.loopOnceMore = true;
                    converse(boyEntrance, boyEntrancev);
                    dialogue.loopOnceMore = false;
                    displayChoices();
                }
                dialogue.boyEnterConv = true;
            }
        } else {
            boyFollow();
            player.position = "g3";
            theRelentlessMarchOfTime();
            thocker();
            token.style.transform = "translate(480px, 160px)";
        }
    }
    else if (room.size === "fiveByFive") {} //block
    else  {
        player.position = "g3";
        theRelentlessMarchOfTime();
        thocker();
        token.style.transform = "translate(480px, 160px)";
    } 
}
function playerToG4() {
    if (current.room === "hypotheticalRoom") {}
    else if (current.room === "groundFloorLanding3") {
        current.room = "upperFloorLanding";
        room.size = "sevenBySeven";
        groundFloorLanding3.style.display = "none";
        upperFloorLanding.style.display = "block";
        checkWhichTilesShouldBeIncluded();
        player.position = "a5";
        stairs.play();
        token.style.transform = "translate(0px, 320px)";
    }
    else if (current.room === "groundFloorLanding2") {
        current.room = "groundFloorLanding";
        room.size = "sevenBySeven";
        groundFloorLanding2.style.display = "none";
        groundFloorLanding.style.display = "block";
        checkWhichTilesShouldBeIncluded();
        player.position = "a4";
        stairs.play();
        token.style.transform = "translate(0px, 240px)";
    }
    else if (room.size === "fiveByFive") {} //block
    else if (current.room === "hypotheticalRoom") {
        if (!inventory.spade) {
            takeSpade();
        } else {
            boyFollow();
            player.position = "g4";
            theRelentlessMarchOfTime();
            thocker();
            token.style.transform = "translate(475px, 240px)";
        }
    }
    else if (room.size === "sevenByThree") {} //block
    else {
            boyFollow();
            player.position = "g4";
            theRelentlessMarchOfTime();
            thocker();
            token.style.transform = "translate(475px, 240px)";
        }
}
function playerToG5() {
    boyFollow();
    if (current.room === "hypotheticalRoom") {}
    else if (current.room === "groundFloorLanding3") {
        current.room = "upperFloorLanding";
        room.size = "sevenBySeven";
        groundFloorLanding3.style.display = "none";
        upperFloorLanding.style.display = "block";
        checkWhichTilesShouldBeIncluded();
        player.position = "a6";
        stairs.play();
        token.style.transform = "translate(0px, 400px)";
    }
    else if (current.room === "groundFloorLanding2") {
        current.room = "groundFloorLanding";
        room.size = "sevenBySeven";
        groundFloorLanding2.style.display = "none";
        groundFloorLanding.style.display = "block";
        checkWhichTilesShouldBeIncluded();
        player.position = "a5";
        stairs.play();
        token.style.transform = "translate(0px, 320px)";
    }
    else if (room.size === "fiveByFive") {} //block
    else if (current.room === "entryHall") {
        viperStatueDialogue();
    }
    else  {
        player.position = "g5";
        theRelentlessMarchOfTime();
        thocker();
        token.style.transform = "translate(475px, 320px)";
    } 
}
function playerToG6() {
    boyFollow();
    if (current.room === "hypotheticalRoom") {}
    else if (room.size === "sevenByFive") {}
    else if (current.room === "entryHall") {} else  {
        player.position = "g6";
        theRelentlessMarchOfTime();
        thocker();
        token.style.transform = "translate(475px, 400px)";
    } 
}
function playerToG7() {
    boyFollow();
    if (current.room === "hypotheticalRoom") {} else  {
        player.position = "g7";
        theRelentlessMarchOfTime();
        thocker();
        token.style.transform = "translate(475px, 475px)";
    } 
}


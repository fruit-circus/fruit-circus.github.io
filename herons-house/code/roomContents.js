const room = { 
    default: true, //when changing the size and current room below, set to false (hides coatRoom)
    size: "sevenBySeven",
    //size: "threeByThree",
}

const current = {
    room: "fountainRoom",
    //room: "coatRoom",
    //room: "canalMouth",
}

//the default behavior for taking objects is to Halt(),
//which is a problem if the player didn't move last turn. 
//so, if object is taken by bumping a wall, add player.hittingAWall = true;


function moveTo(tileId) {
    movement.tempPrevent = false;
    player.hittingAWall = false;
    theRelentlessMarchOfTime();
    player.position = String(tileId.id);
    checkContents();
    //console.log(current.room);
    checkIfPlayerIsOnTheTable();
    if (!movement.tempPrevent) {
        document.getElementById(tileId.id).appendChild(document.getElementById("token"));
        console.log(player.position);
        thocker();
        boyFollow();
    }
}

function halt(bumpDirection) {
    player.position = player.previousPosition;
    movement.tempPrevent = true;
    //console.log("halted");
    bump(bumpDirection);
}


var left = "left";
var right = "right";
var up = "up";
var down = "down";

function bump(direction) {
    bumper();
    movement.allow = false; 
    const style = getComputedStyle(token);
    const matrix = new DOMMatrix(style.transform); //get the css transform values
    const x = matrix.m41; //the js values for css's transform stuff
    const y = matrix.m42;
    if (direction === "left") {
        token.style.transform = `translate(${x - 10}px, ${y}px)`;
    } else if (direction === "right") {
        token.style.transform = `translate(${x + 10}px, ${y}px)`;
    } else if (direction === "up") {
        token.style.transform = `translate(${x}px, ${y - 10}px)`;
    } else if (direction === "down") {
        token.style.transform = `translate(${x}px, ${y + 10}px)`;
    }
    setTimeout(function() {
            token.style.transform = `translate(${x}px, ${y}px)`;
            if (!dialogue.conversing) {
                movement.allow = true;
            }
        }, 150);
}


function checkContents() {
    if (player.position === "a1") {
        if (current.room === "entryHall") {halt();}
        else if (current.room === "fountainRoom") {
            if (!inv.vase.taken) {
                pluck.play();
                vase.style.display = "none";
                take(inv.vase);
                bump(up);
            } else {
                halt(up);
            }
        }
        else if (room.size === "fiveByFive") {halt(left);} //block
    }

    else if (player.position === "a2") {
        if (current.room === "stainedGlassMarket") {
            halt(up);
            alert("hello crab");
        }
        else if (current.room === "fountainRoom" && !inv.mushrooms.taken) {
                pluck.play();
                mushrooms.style.display = "none";
                take(inv.mushrooms);
        }
        else if (room.size === "fiveByFive") {halt(left);} //block
        else if (room.size === "sevenByOne") {halt(down);} //block
    }
    else if (player.position === "a3") {
        if (current.room === "fountainRoom" && boy.room) {
            halt();
        }
        else if (current.room === "volcano" && !mana.levitating) {} //block
        else if (room.size === "fiveByFive") {halt(left);} //block
    }

else if (player.position === "a4") {
    if (current.room === "stainedGlassMarket") {
        halt(down);
    }
    else if (room.size === "fiveByFive") {halt(left);} //block
    else if (current.room === "volcano" && !mana.levitating) {halt(down);} //block
    else if (current.room === "libraryNorth") {
        player.inPit = false;
        
    }
        else if (room.size === "sevenByThree") {halt(down);} //block
}

else if (player.position === "a5") {
    if (current.room === "volcano" && !mana.levitating) {halt(down);} //block
    else if (current.room === "entryHall") {halt(down);}
    else if (room.size === "fiveByFive") {halt(left);} //block
}
    
    else if (player.position === "a6") {
                        if (current.room === "stainedGlassMarket") {
                            halt(left);
                        }
                        else if (current.room === "fountainRoom" && !inv.planks.taken) {
                                woodTake.play();
                                planks.style.display = "none";
                                take(inv.planks);
                        }
                        else if (room.size === "sevenByFive") {halt(down);} //exits to 7x5 rooms ought be placed before this line
                        else if (current.room === "entryHall") {
                            halt();
                        }
                    }

    else if (player.position === "a7") {
                        if (current.room === "stainedGlassMarket") {
                                halt(left);
                            }
                            else if (current.room === "fountainRoom") {
                                if (player.previousPosition === "b7") {
                                    halt(left);
                                } else if (player.previousPosition === "a6") {
                                    halt(down);
                                }
                            }
    }

    else if (player.position === "b1") {
        if (current.room === "northPorch") {halt(right);}
    else if (current.room === "stainedGlassMarket") {
        halt(left);
        alert("talk wizard");
    }
    else if (current.room === "parapet3") {
        room.size = "threeByThree";
        parapet3.style.display = "none";
        parapet2.style.display = "grid";
        current.room = "parapet2";
        moveTo(e1);
        checkWhichTilesShouldBeIncluded();
        stairsNoise();
    }
    else if (current.room === "parapet5") {
        room.size = "threeByThree";
        parapet5.style.display = "none";
        parapet6.style.display = "grid";
        current.room = "parapet6";
        moveTo(e1);
        checkWhichTilesShouldBeIncluded();
        stairsNoise();
    }
    else if (current.room === "fountainRoom") {
        if (player.previousPosition === "b2") {
            halt(up);
        } else if (player.previousPosition === "c1") {
            halt(left);
        }
        converse(birdMerchant);
    }
    else if (current.room === "librarySouth") {
        if (!player.inPit) {
            halt(right);
        } else {
            halt(left);
        }
    }
    else if (current.room === "eastCatacombsLanding") {
            player.inPit = true;
            room.size = "sevenBySeven";
            eastCatacombsLanding.style.display = "none";
            librarySouth.style.display = "grid";
            current.room = "librarySouth";
            moveTo(e4);
                    movement.tempPrevent = true;
            checkWhichTilesShouldBeIncluded();
            stairsNoise();
    }
    else if (room.size === "threeByFive") {halt(left);} //place exits in three by five rooms above this line
    else if (room.size === "threeByThree" || room.size === "threeByFour") {halt(left);} //place exits in three by three rooms above this line
    else if (room.size === "threeByTwo") {halt(left);} //place exits in three by three rooms above this line
    }

    else if (player.position === "b2") {
            if (current.room === "stainedGlassMarket") {
        if (player.previousPosition === "c2") {
            halt(left);
        } else if (player.previousPosition === "b3") {
            halt(up);
        }
    }
    else if (current.room === "parapet1") {
        room.size = "threeByFour";
        parapet1.style.display = "none";
        canalMouth.style.display = "grid";
        current.room = "canalMouth";
        moveTo(e2);
        checkWhichTilesShouldBeIncluded();
        movement.tempPrevent = true;
        door.play();
    }
    else if (current.room === "parapet3") {
        room.size = "threeByThree";
        parapet3.style.display = "none";
        parapet2.style.display = "grid";
        current.room = "parapet2";
        moveTo(e2);
        checkWhichTilesShouldBeIncluded();
        stairsNoise();
    }
    else if (current.room === "parapet5") {
        room.size = "threeByThree";
        parapet5.style.display = "none";
        parapet6.style.display = "grid";
        current.room = "parapet6";
        moveTo(e2);
        checkWhichTilesShouldBeIncluded();
        stairsNoise();
    }
    else if (current.room === "volcano" && !mana.levitating) {halt(right);} //block
    else if (current.room === "librarySouth") {
        if (!player.inPit) {
            halt(right);
        } else {
            halt(left);
        }}
    else if (current.room === "eastCatacombsLanding") {
            player.inPit = true;
            room.size = "sevenBySeven";
            eastCatacombsLanding.style.display = "none";
            librarySouth.style.display = "grid";
            current.room = "librarySouth";
            moveTo(e4);
                    movement.tempPrevent = true;
            checkWhichTilesShouldBeIncluded();
            stairsNoise();
    }
    else if (current.room === "weaponsCheck") {
        if (!inv.skjaaldfmmmmjdsf) {
            squelch.play();
            fossilizedRoe.style.display = "none";
            take(inv.fossilizedRoe);
            inv.skjaaldfmmmmjdsf = true;
        } else {
            //wall
            halt(left);
        }
    }
    else if (current.room === "storageRoomThree") {
        room.size = "oneBySeven";
        storageRoomThree.style.display = "none";
        storageAccess.style.display = "grid";
        current.room = "storageAccess";
        moveTo(d2);
        movement.tempPrevent = true;
        checkWhichTilesShouldBeIncluded();
        door.play();
    }
    else if (current.room === "storageRoomFive") {
        room.size = "oneBySeven";
        storageRoomFive.style.display = "none";
        gardenAccess.style.display = "grid";
        current.room = "gardenAccess";
        moveTo(d2);
        movement.tempPrevent = true;
        checkWhichTilesShouldBeIncluded();
        door.play();
    }
    else if (current.room === "storageRoomFour") {
        room.size = "oneBySeven";
        storageRoomFour.style.display = "none";
        gardenAccess.style.display = "grid";
        current.room = "gardenAccess";
        moveTo(d5);
        movement.tempPrevent = true;
        checkWhichTilesShouldBeIncluded();
        door.play();
    }
    else if (current.room === "storageRoomOne") {
        room.size = "oneBySeven";
        storageRoomOne.style.display = "none";
        storageAccess.style.display = "grid";
        current.room = "storageAccess";
        moveTo(d6);
        movement.tempPrevent = true;
        checkWhichTilesShouldBeIncluded();
        door.play();
    }
    else if (current.room === "westernServantsQuartersHallway") {
        room.size = "threeByThree";
        westernServantsQuartersHallway.style.display = "none";
        servantsQuartersSix.style.display = "grid";
moveTo(d1);
movement.tempPrevent = true;
        current.room = "servantsQuartersSix";
        console.log(current.room);
        checkWhichTilesShouldBeIncluded();
        door.play();
    }
    else if (current.room === "upperWaterfallLanding") {
        room.size = "sevenByThree";
        upperWaterfallLanding.style.display = "none";
        largeHallway.style.display = "grid";
        current.room = "largeHallway";
        moveTo(g2);
        movement.tempPrevent = true;
        checkWhichTilesShouldBeIncluded();
        door.play();
    }
    else if (room.size === "threeByTwo") {halt(left);}
    else if (current.room === "preservesPantry") {
        room.size = "sevenByOne";
        preservesPantry.style.display = "none";
        westernServantsQuartersHallway.style.display = "grid";
moveTo(g1);
movement.tempPrevent = true;
        current.room = "westernServantsQuartersHallway";
        checkWhichTilesShouldBeIncluded();
        door.play();
    }
    else if (room.size === "threeByTwo") {halt(left);} //place exits in three by three rooms above this line
    else if (room.size === "threeByThree" || room.size === "threeByFour") {halt(left);} //place exits in three by three rooms above this line
    else if (room.size === "threeByFive") {halt(left);} //place exits in three by five rooms above this line
    else if (room.size === "sevenByOne") {halt(down);}
    }

    else if (player.position === "b3") {
        if (current.room === "eastCatacombsLanding") {
                    player.inPit = true;
                    room.size = "sevenBySeven";
                    eastCatacombsLanding.style.display = "none";
                    librarySouth.style.display = "grid";
                    current.room = "librarySouth";
                    moveTo(e4);
                    movement.tempPrevent = true;
                    checkWhichTilesShouldBeIncluded();
                    stairsNoise();
            }
            else if (current.room === "parapet3") {
                room.size = "threeByThree";
                parapet3.style.display = "none";
                parapet2.style.display = "grid";
                current.room = "parapet2";
                moveTo(e3);
                checkWhichTilesShouldBeIncluded();
                stairsNoise();
            }
            else if (current.room === "parapet5") {
                room.size = "threeByThree";
                parapet5.style.display = "none";
                parapet6.style.display = "grid";
                current.room = "parapet6";
                moveTo(e3);
                checkWhichTilesShouldBeIncluded();
                stairsNoise();
            }
            else if (current.room === "weaponsCheck") {
                if (!inv.skjaaljoaojddqjdsf) {
                    woodTake.play();
                    quarterstaff.style.display = "none";
                    take(inv.quarterstaff);
                    inv.skjaaljoaojddqjdsf = true;
                } else {
                    //wall
                    halt(left);
                }
            }
            else if (current.room === "librarySouth") {
                if (!player.inPit) {
                    halt(right);
                } else {
                    halt(left);
                }
            }
            else if (current.room === "libraryNorth") {
                if (player.previousPosition === "a3") {
                    halt(right);
                } else if (player.previousPosition === "b2") {
                    halt(down);
                }
            }
            else if (room.size === "threeByThree" || room.size === "threeByFour") {halt(left);} //place exits in three by three rooms above this line
            else if (room.size === "threeByFive") {halt(left);} //place exits in three by five rooms above this line

            }

            else if (player.position === "b4") {
                            if (current.room === "stainedGlassMarket") {
                                    if (player.previousPosition === "b3") {
                                        halt(down);
                                    } else if (player.previousPosition === "c4") {
                                        halt(left);
                                        alert("shop beetle");
                                    }
                                }
                            
                                else if (current.room === "librarySouth") {
                                    if (!player.inPit) {
                                        halt(right);
                                    } else {
                                        halt(left);
                                    }}
                                else if (current.room === "libraryNorth") {
                                    if (player.inPit) {
                                        player.inPit = false;
                                        room.size = "threeByTwo";
                                        libraryNorth.style.display = "none";
                                        lowerWaterfallLanding.style.display = "grid";
                                        current.room = "lowerWaterfallLanding";
                                        moveTo(e1);
                                        movement.tempPrevent = true;
                                        checkWhichTilesShouldBeIncluded();
                                        door.play();
                                    } else {
                                        //absolutely NOTHING
                                        halt(right);
                                    }
                                }
                                else if (room.size === "sevenByThree") {halt(down);} //block
                                else if (room.size === "threeByFive") {halt(down);} //place exits in three by five rooms above this line
                            
            }

            else if (player.position === "b5") {
                                    if (current.room === "stainedGlassMarket") {
                                        if (player.previousPosition === "b6") {
                                            halt(up);
                                        } else {
                                            halt(left);
                                            alert("shop beetle")
                                        }
                                    }
                                    else if (current.room === "librarySouth") {
                                        if (player.previousPosition === "a5") {
                                            halt(right);
                                        } else if (player.previousPosition === "b6") {
                                            halt(up);
                                        }
                                    }
                                    else if (current.room === "libraryNorth") {
                                        if (!player.inPit) {
                                            halt(right);
                                        } else {
                                            halt(left);
                                        }
                                    }
                                    else if (room.size === "threeByFive") {halt(down);} //place exits in three by five rooms above this line
                                    
                                }

            else if (player.position === "b6") {
                                if (current.room === "libraryNorth") {
                                        if (!player.inPit) {
                                            halt(right);
                                        } else {
                                            halt(left);
                                        };
                                    }
                                    else if (current.room === "volcano" && !mana.levitating) {halt(down);} //block
                                    else if (current.room === "groundFloorLanding3") {
                                        current.room = "groundFloorLanding2";
                                        room.size = "fiveByFive";
                                        groundFloorLanding3.style.display = "none";
                                        groundFloorLanding2.style.display = "grid";
                                        checkWhichTilesShouldBeIncluded();
                                        stairsNoise();
                                    }
                                    else if (room.size === "fiveByFive") {halt(down);} //block
                                    else if (current.room === "entryHall") {
                                        //go to coat room
                                        room.size = "threeByThree";
                                        entryHall.style.display = "none";
                                        coatRoom.style.display = "grid";
                                        current.room = "coatRoom";
                                        moveTo(d1);
                                        movement.tempPrevent = true;
                                        checkWhichTilesShouldBeIncluded();
                                        door.play();

                                    } else if (room.size === "sevenByFive") {halt(down);} //exits to 7x5 rooms ought be placed before this line
                                    
            }

            else if (player.position === "b7") {
                            if (current.room === "fountainRoom" && !inv.rubble3.taken) {
                                        stone2.play();
                                        rubble3.style.display = "none";
                                        take(inv.rubble3);
                                }
                                else if (current.room === "libraryNorth") {
                                    if (!player.inPit) {
                                        halt(right);
                                    } else {
                                        halt(left);
                                    };}
                                }

                                else if (player.position === "c1") {
                            if (current.room === "stainedGlassMarket" && !inv.bottle.taken) {
                                    bottleTake.play();
                                    bottle.style.display = "none";
                                    take(inv.bottle);
                                }
                                else if (current.room === "volcano" && !mana.levitating) {halt();} //block
                                else if (current.room === "weaponsCheck" && !inv.crumpledNote.taken) {
                                        paper.play();
                                        crumpledNote.style.display = "none";
                                        take(inv.crumpledNote);
                                }
                                else if (current.room === "coatRoom") {
                                    if (!inv.whateverV) {
                                            boxTake.play();
                                            emptyBox.style.display = "none";
                                            take(inv.box);
                                            inv.whateverV = true;
                                        }
                                    /*
                                    if (!dialogue.package) { 
                                            
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
                                    } */
                                }
                                else if (room.size === "oneBySeven") {halt(left);} //block
    }

    else if (player.position === "c2") {
                        if (current.room === "coatRoom") {
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
                            else if (room.size === "oneBySeven") {halt(left);} //block
                            else if (room.size === "sevenByOne") {halt(down)} //southern exits in 7x1 rooms go above this line
                                
                            }

    else if (player.position === "c3") {
                        if (current.room === "coatRoom") {
                                halt(left);
                                converse(smallTree);
                            }
                            
                            else if (current.room === "lowerWaterfallLanding") {
                                        room.size = "threeByThree";
                                        lowerWaterfallLanding.style.display = "none";
                                        upperWaterfallLanding.style.display = "grid";
                                        current.room = "upperWaterfallLanding";
                                        moveTo(c1);
                                        movement.tempPrevent = true;
                                        checkWhichTilesShouldBeIncluded();
                                        stairsNoise();
                                    }
                            else if (current.room === "northPorch") {halt(down);}
                            else if (current.room === "libraryNorth") {
                                if (!player.inPit) {
                                    halt(down);
                                } else {
                                    halt(up);
                                };}
                            else if (room.size === "threeByTwo") {halt(down);}
                            else if (room.size === "oneBySeven") {halt(left);} //block
    }

    else if (player.position === "c4") {
                                if (current.room === "fountainRoom") {
                                    //fountain
                                    if (player.previousPosition === "c3") {
                                        halt(down);
                                    } else if (player.previousPosition === "b4") {
                                        halt(right);
                                    } else if (player.previousPosition === "c5") {
                                        halt(up);
                                    }
                                }
                                else if (current.room === "parapet1") {
                                    room.size = "threeByThree";
                                    parapet1.style.display = "none";
                                    parapet2.style.display = "grid";
                                    current.room = "parapet2";
                                    moveTo(c1);
                                    checkWhichTilesShouldBeIncluded();
                                    stairsNoise();
                                }
                                else if (current.room === "parapet4") {
                                        room.size = "threeByThree";
                                        parapet4.style.display = "none";
                                        parapet3.style.display = "grid";
                                        current.room = "parapet3";
                                        moveTo(c1);
                                        checkWhichTilesShouldBeIncluded();
                                        stairsNoise();
                                    }
                                    else if (current.room === "parapet6") {
                                        alert("overlook")
                                        parapet6.style.display = "none";
                                        overlook.style.display = "block";
                                        current.room = "overlook";
                                        checkWhichTilesShouldBeIncluded();
                                        stairsNoise();
                                    }
                                    else if (current.room === "parapet5") {
                                        room.size = "threeByThree";
                                        parapet5.style.display = "none";
                                        parapet4.style.display = "grid";
                                        current.room = "parapet4";
                                        moveTo(c1);
                                        movement.tempPrevent = true;
                                        checkWhichTilesShouldBeIncluded();
                                        stairsNoise();
                                    }
                            else if (current.room === "libraryLanding") {
                                        room.size = "threeByTwo";
                                        libraryLanding.style.display = "none";
                                        lowerWaterfallLanding.style.display = "grid";
                                        current.room = "lowerWaterfallLanding";
                                        moveTo(c1);
                                        movement.tempPrevent = true;
                                        checkWhichTilesShouldBeIncluded();
                                        stairsNoise();
                                    }
                                    else if (current.room === "storageAccess") {
                                    room.size = "threeByThree";
                                    storageAccess.style.display = "none";
                                    storageRoomTwo.style.display = "grid";
                                    current.room = "storageRoomTwo";
                                    moveTo(e2);
                                    movement.tempPrevent = true;
                                    checkWhichTilesShouldBeIncluded();
                                    door.play();
                                }
                                else if (current.room === "libraryNorth") {
                                    player.inPit = true;
                                }
                                else if (room.size === "sevenByThree") {halt(down);} //block
                                else if (room.size === "oneBySeven") {halt(left);} //block
                                else if (room.size === "threeByThree" || room.size === "threeByFour") {halt(down);} //place exits in three by three rooms above this line
                                
                                }

    else if (player.position === "c5") {
if (current.room === "librarySouth") {
        if (!player.inPit) {
            halt(up);
        } else {
            halt(down);
        }
    }
    else if (current.room === "catacombs1") {
        if (!dialogue.tollForFerryman) {
            alert("alright. let's go. press z to wait.");
            dialogue.ferryJourney = true;
            player.ferry1 = true;
            movement.allow = false;
        } else {
            alert("first I need payment.");
        }
    }
    else if (room.size === "oneBySeven") {halt(left);} //block
    
    }


    else if (player.position === "c6") {
 if (current.room === "groundFloorLanding3") {
        current.room = "groundFloorLanding2";
        room.size = "fiveByFive";
        groundFloorLanding3.style.display = "none";
        groundFloorLanding2.style.display = "grid";
        checkWhichTilesShouldBeIncluded();
        stairsNoise();
    }
    else if (current.room === "gardenAccess") {
        room.size = "sevenBySeven";
        gardenAccess.style.display = "none";
        throneRoomEast.style.display = "grid";
        current.room = "throneRoomEast";
        moveTo(g6);
        movement.tempPrevent = true;
        checkWhichTilesShouldBeIncluded();
        door.play();
    }
    else if (room.size === "fiveByFive") {halt(down);} //block
    else if (room.size === "oneBySeven") {halt(left);} //block
    else if (room.size === "threeByFive") {halt(down);} //place exits in three by five rooms above this line
    else if (room.size === "sevenByFive") {halt(down);} //exits to 7x5 rooms ought be placed before this line
    else if (current.room === "entryHall") {halt(down);}
    
    }

    else if (player.position === "c7") {
if (current.room === "storageAccess") {
        room.size = "sevenBySeven";
        storageAccess.style.display = "none";
        libraryNorth.style.display = "grid";
        current.room = "libraryNorth";
        moveTo(g2);
        movement.tempPrevent = true;
        checkWhichTilesShouldBeIncluded();
        door.play();
    }
    else if (room.size === "oneBySeven") {halt(left);} //block
    else if (current.room === "volcano" && !mana.levitating) {halt(down);} //block
    }

    else if (player.position === "d1") {
if (current.room === "volcano" && !mana.levitating) {halt(down);} //block
    else if (current.room === "entryHall") {
        converse(jackleStatue);
    } 
    }

    else if (player.position === "d2") {
                                    if (current.room === "hallOfDoors") {
                                    current.room = "canalMouth";
                                    room.size = "threeByFour";
                                    hallOfDoors.style.display = "none";
                                    canalMouth.style.display = "grid";
                                    checkWhichTilesShouldBeIncluded();
                                    door.play();
                                    }
                                    else if (current.room === "easternServantsQuartersHallway") {
                                    room.size = "threeByThree";
                                    easternServantsQuartersHallway.style.display = "none";
                                    servantsQuartersTwo.style.display = "grid";
moveTo(d1);
movement.tempPrevent = true;
                                    current.room = "servantsQuartersTwo";
                                    console.log(current.room);
                                    checkWhichTilesShouldBeIncluded();
                                    door.play();
                                    }
                                    else if (room.size === "sevenByOne") {halt(down);} //southern exits in 7x1 rooms go above this line

                                    }

    else if (player.position === "d3") {
                        if (current.room === "coatRoom") {
                                player.hasUsedTheArrowKeysToMove = true;
                            }
                            
                            else if (current.room === "libraryNorth") {
                                if (!player.inPit) {
                                    halt(down);
                                } else {
                                    halt(up);
                                };}
                            
                            else if (current.room === "lowerWaterfallLanding") {
                                room.size = "threeByThree";
                                lowerWaterfallLanding.style.display = "none";
                                upperWaterfallLanding.style.display = "grid";
                                current.room = "upperWaterfallLanding";
                                moveTo(d1);
                                movement.tempPrevent = true;
                                checkWhichTilesShouldBeIncluded();
                                stairsNoise();
                            }
                            else if (current.room === "northPorch") {
                                room.size = "threeByFive";
                                preservesPantry.style.display = "grid";
                                northPorch.style.display = "none";
                                undoNorthPorchWalls();
                                current.room = "preservesPantry";
                                moveTo(d1);
                                movement.tempPrevent = true;
                                checkWhichTilesShouldBeIncluded();
                                door.play();
                            }
                            else if (room.size === "threeByTwo") {halt(down);}
                            
                            }
    
    else if (player.position === "d4") {
                                if (current.room === "fountainRoom") {
                                            
                                            if (player.previousPosition === "d5" && !inv.coin) {
                                                halt(up);
                                                metalTake.play();
                                                coin.style.display = "none";
                                                inv.gold++;
                                                inv.coin = true;
                                            } else if (player.previousPosition === "d3") {
                                                halt(down);
                                            } else {
                                                halt(up);
                                            } 
                                    }
                                    else if (current.room === "parapetUpperLanding") {
                                        room.size = "threeByThree";
                                        parapetUpperLanding.style.display = "none";
                                        parapet6.style.display = "grid";
                                        current.room = "parapet6";
                                        moveTo(d1);
                                        checkWhichTilesShouldBeIncluded();
                                        door.play();
                                    }
                                    else if (current.room === "parapet1") {
                                    room.size = "threeByThree";
                                    parapet1.style.display = "none";
                                    parapet2.style.display = "grid";
                                    current.room = "parapet2";
                                    moveTo(d1);
                                    checkWhichTilesShouldBeIncluded();
                                    stairsNoise();
                                }
                                    else if (current.room === "parapet6") {
                                        alert("overlook")
                                        parapet6.style.display = "none";
                                        overlook.style.display = "block";
                                        current.room = "overlook";
                                        checkWhichTilesShouldBeIncluded();
                                        stairsNoise();
                                    }
                                    else if (current.room === "parapet4") {
                                        room.size = "threeByThree";
                                        parapet4.style.display = "none";
                                        parapet3.style.display = "grid";
                                        current.room = "parapet3";
                                        moveTo(d1);
                                        checkWhichTilesShouldBeIncluded();
                                        stairsNoise();
                                    }
                                    else if (current.room === "parapet5") {
                                        room.size = "threeByThree";
                                        parapet5.style.display = "none";
                                        parapet4.style.display = "grid";
                                        current.room = "parapet4";
                                        moveTo(d1);
                                        checkWhichTilesShouldBeIncluded();
                                        stairsNoise();
                                    }
                                    else if (current.room === "coatRoom") {
                                        if (!dialogue.coatPainting) {   
                                                converse(landscape, landscapev);
                                                dialogue.coatPainting = true;
                                        }
                                    }
                                    else if (current.room === "libraryLanding") {
                                        room.size = "threeByTwo";
                                        libraryLanding.style.display = "none";
                                        lowerWaterfallLanding.style.display = "grid";
                                        current.room = "lowerWaterfallLanding";
                                        moveTo(d1);
                                        movement.tempPrevent = true;
                                        checkWhichTilesShouldBeIncluded();
                                        stairsNoise();
                                    }
                                    else if (current.room === "upperWaterfallLanding") {
                                        room.size = "sevenBySeven";
                                        upperWaterfallLanding.style.display = "none";
                                        study.style.display = "grid";
                                        current.room = "study";
                                        moveTo(d1);
                                        movement.tempPrevent = true;
                                        checkWhichTilesShouldBeIncluded();
                                        door.play();
                                    }
                                    else if (current.room === "weaponsCheck") {
                                        //go to entry hall
                                        room.size = "sevenByFive";
                                        entryHall.style.display = "grid";
                                        weaponsCheck.style.display = "none";
                                        current.room = "entryHall";
                                        checkWhichTilesShouldBeIncluded();
                                        door.play();
                                        moveTo(b1);
                                        movement.tempPrevent = true;
                                        
                                    }
                                    else if (current.room === "servantsQuartersOne") {
                                        room.size = "sevenByOne";
                                        servantsQuartersOne.style.display = "none";
                                        easternServantsQuartersHallway.style.display = "grid";
moveTo(f1);
movement.tempPrevent = true;
                                        current.room = "easternServantsQuartersHallway";
                                        checkWhichTilesShouldBeIncluded();
                                        door.play();
                                    } 
                                    else if (current.room === "servantsQuartersThree") {
                                        room.size = "sevenByOne";
                                        servantsQuartersThree.style.display = "none";
                                        easternServantsQuartersHallway.style.display = "grid";
                                        current.room = "easternServantsQuartersHallway";
moveTo(b1);
movement.tempPrevent = true;
                                        checkWhichTilesShouldBeIncluded();
                                        door.play();
                                    } 
                                    else if (current.room === "servantsQuartersFive") {
                                        room.size = "sevenByOne";
                                        servantsQuartersFive.style.display = "none";
                                        westernServantsQuartersHallway.style.display = "grid";
moveTo(d1);
movement.tempPrevent = true;
                                        current.room = "westernServantsQuartersHallway";
                                        checkWhichTilesShouldBeIncluded();
                                        door.play();
                                    } 
                                    else if (room.size === "sevenByThree") {halt(down);} //block
                                    else if (room.size === "threeByThree" || room.size === "threeByFour") {halt(down);} //place exits in three by three rooms above this line
                                    
                                    }
                                    
    else if (player.position === "d5") {
                                    if (current.room === "librarySouth") {
                                            if (!player.inPit) {
                                                halt(up);
                                            } else {
                                                halt(down);
                                            }
                                        }
                                        }
    
    else if (player.position === "d6") {
                                        if (current.room === "groundFloorLanding3") {
                                                current.room = "groundFloorLanding2";
                                                room.size = "fiveByFive";
                                                groundFloorLanding3.style.display = "none";
                                                groundFloorLanding2.style.display = "grid";
                                                checkWhichTilesShouldBeIncluded();
                                                stairsNoise();
                                            }
                                            else if (current.room === "larder") {
                                                room.size = "fiveByFive";
                                                larder.style.display = "none";
                                                wineCelar.style.display = "grid";
                                                current.room = "wineCelar";
                                                moveTo(d1);
                                                movement.tempPrevent = true;
                                                checkWhichTilesShouldBeIncluded();
                                                door.play();
                                            } 
                                            else if (current.room === "courtyard") {
                                                room.size = "oneBySeven";
                                                gardenAccess.style.display = "grid";
                                                courtyard.style.display = "none";
                                                current.room = "gardenAccess";
                                                moveTo(d1);
                                                movement.tempPrevent = true;
                                                checkWhichTilesShouldBeIncluded();
                                                door.play();
                                            }
                                            else if (room.size === "fiveByFive") {halt(down);} //block
                                            else if (room.size === "threeByFive") {halt(down);} //place exits in three by five rooms above this line
                                            else if (room.size === "sevenByFive") {halt(down);} //exits to 7x5 rooms ought be placed before this line
                                            else if (current.room === "entryHall") {halt(down);}
                                            
                                            }
    
    else if (player.position === "d7") {
                                        //nothing yet
                                    }

    else if (player.position === "e1") {
                                        if (current.room === "volcano" && !mana.levitating) {halt(up);} //block
                                        else if (current.room === "weaponsCheck" && !inv.skjdfnkmdmdmdmmjdsf) {
                                        
                                            metalTake.play();
                                            rustyDaggers.style.display = "none";
                                            take(inv.rustyDaggers);
                                            inv.skjdfnkmdmdmdmmjdsf = true;
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
                                    else if (room.size === "oneBySeven") {halt(right);} //block
                                    else if (current.room === "entryHall") {
                                        converse(beetleStatue);
                                    }
                                    }

    else if (player.position === "e2") {
                                        if (current.room === "weaponsCheck" && !inv.skjdfnxmnckjdsf) {
                                                    metalTake.play();
                                                    throwingstars.style.display = "none";
                                                    take(inv.throwingStars);
                                                    inv.skjdfnxmnckjdsf = true;
                                            
                                            }
                                            else if (current.room === "storageAccess") {
                                                room.size = "threeByThree";
                                                storageAccess.style.display = "none";
                                                storageRoomThree.style.display = "grid";
                                                current.room = "storageRoomThree";
                                                moveTo(c2);
                                                movement.tempPrevent = true;
                                                checkWhichTilesShouldBeIncluded();
                                                door.play();
                                            }
                                            else if (current.room === "gardenAccess") {
                                                room.size = "threeByThree";
                                                gardenAccess.style.display = "none";
                                                storageRoomFive.style.display = "grid";
                                                current.room = "storageRoomFive";
                                                moveTo(c2);
                                                movement.tempPrevent = true;
                                                checkWhichTilesShouldBeIncluded();
                                                door.play();
                                            }
                                            else if (room.size === "sevenByOne") {halt(down)} //southern exits in 7x1 rooms go above this line
                                            else if (current.room === "coatRoom") {
                                                player.hasUsedTheArrowKeysToMove = true;
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
                                            }

    else if (player.position === "e3") {
                                    if (current.room === "fountainRoom" && !inv.bucket.taken) {
                                                bucketNoise.play();
                                                bucket.style.display = "none";
                                                take(inv.bucket);
                                        }
                                        else if (current.room === "lowerWaterfallLanding") {
                                                room.size = "threeByThree";
                                                lowerWaterfallLanding.style.display = "none";
                                                upperWaterfallLanding.style.display = "grid";
                                                current.room = "upperWaterfallLanding";
                                                moveTo(e1);
                                                movement.tempPrevent = true;
                                                checkWhichTilesShouldBeIncluded();
                                                stairsNoise();
                                            }
                                        else if (current.room === "libraryNorth") {
                                            if (!player.inPit) {
                                                halt(down);
                                            } else {
                                                halt(up);
                                            }
                                        }
                                        else if (current.room === "northPorch") {halt(down);}
                                        else if (room.size === "threeByTwo") {halt(down);}
                                        else if (room.size === "oneBySeven") {halt(right);} //block
                                        
                                }

    
    else if (player.position === "e4") {
                            if (current.room === "fountainRoom") {
                                //fountain
                                
                                if (player.previousPosition === "e3") {
                                    halt(down);
                                } else if (player.previousPosition === "f4") {
                                    halt(left);
                                } else if (player.previousPosition === "e5") {
                                    halt(up);
                                }
                            }
                            else if (current.room === "parapet1") {
                                    room.size = "threeByThree";
                                    parapet1.style.display = "none";
                                    parapet2.style.display = "grid";
                                    current.room = "parapet2";
                                    moveTo(e1);
                                    checkWhichTilesShouldBeIncluded();
                                    stairsNoise();
                                }
                            else if (current.room === "parapet6") {
                                        alert("overlook")
                                        parapet6.style.display = "none";
                                        overlook.style.display = "block";
                                        current.room = "overlook";
                                        checkWhichTilesShouldBeIncluded();
                                        stairsNoise();
                                    }
                            else if (current.room === "parapet4") {
                                        room.size = "threeByThree";
                                        parapet4.style.display = "none";
                                        parapet3.style.display = "grid";
                                        current.room = "parapet3";
                                        moveTo(e1);
                                        checkWhichTilesShouldBeIncluded();
                                        stairsNoise();
                                    }
                                    else if (current.room === "parapet5") {
                                        room.size = "threeByThree";
                                        parapet5.style.display = "none";
                                        parapet4.style.display = "grid";
                                        current.room = "parapet4";
                                        moveTo(e1);
                                        checkWhichTilesShouldBeIncluded();
                                        stairsNoise();
                                    }
                            else if (current.room === "libraryLanding") {
                                    room.size = "threeByTwo";
                                    libraryLanding.style.display = "none";
                                    lowerWaterfallLanding.style.display = "grid";
                                    current.room = "lowerWaterfallLanding";
                                    moveTo(e1);
                                    movement.tempPrevent = true;
                                    checkWhichTilesShouldBeIncluded();
                                    stairsNoise();
                                }
                        else if (current.room === "weaponsCheck") {halt(down);}
                        else if (room.size === "sevenByThree") {halt(down);} //block
                        else if (room.size === "oneBySeven") {halt(right);} //block
                        else if (room.size === "threeByThree" || room.size === "threeByFour") {halt(down);} //place exits in three by three rooms above this line
                        
                        }
                        
    else if (player.position === "e5") {
                                if (current.room === "fountainRoom" && !inv.rubble2.taken) {
                                            stone2.play();
                                            rubble2.style.display = "none";
                                            take(inv.rubble2);
                                    }
                                    else if (current.room === "librarySouth") {
                                        if (!player.inPit) {
                                            halt(up);
                                        } else {
                                            halt(down);
                                        }
                                    }
                                    else if (current.room === "gardenAccess") {
                                        room.size = "threeByThree";
                                        gardenAccess.style.display = "none";
                                        storageRoomFour.style.display = "grid";
                                        current.room = "storageRoomFour";
                                        moveTo(c2);
                                        movement.tempPrevent = true;
                                        checkWhichTilesShouldBeIncluded();
                                        door.play();
                                    }
                                    else if (room.size === "oneBySeven") {halt(right);} //block
                                    else if (current.room === "entryHall") {
                                        converse(wolfStatue);
                                    } 
                                    }

    
    else if (player.position === "e6") {
                                if (current.room === "stainedGlassMarket") {
                                        alert("gunslinger");
                                        halt()
                                    }
                                    else if (current.room === "groundFloorLanding3") {
                                        current.room = "groundFloorLanding2";
                                        room.size = "fiveByFive";
                                        groundFloorLanding3.style.display = "none";
                                        groundFloorLanding2.style.display = "grid";
                                        checkWhichTilesShouldBeIncluded();
                                        stairsNoise();
                                    }
                                    else if (current.room === "entryHall") {}
                                    else if (current.room === "storageAccess") {
                                        room.size = "threeByThree";
                                        storageAccess.style.display = "none";
                                        storageRoomOne.style.display = "grid";
                                        current.room = "storageRoomOne";
                                        moveTo(c2);
                                        movement.tempPrevent = true;
                                        checkWhichTilesShouldBeIncluded();
                                        door.play();
                                    }
                                    else if (current.room === "wineCelar") {
                                        if (player.shrunk) {
                                            room.size = "fiveByFive";
                                            wineCelar.style.display = "none";
                                            mouseHole.style.display = "grid";
                                            current.room = "mouseHole";
                                            checkWhichTilesShouldBeIncluded();
                                        } else {
                                            halt(down)
                                            alert("There's a mousehole here.")
                                        }
                                    } 
                                    else if (room.size === "fiveByFive") {halt(down);} //block
                                    else if (room.size === "oneBySeven") {halt(right);} //block
                                    else if (room.size === "threeByFive") {halt(down);} //place exits in three by five rooms above this line
                                    else if (room.size === "sevenByFive") {halt(left);} //exits to 7x5 rooms ought be placed before this line
                                    
                                    }

                                    
    else if (player.position === "e7") {
                                    if (current.room === "volcano" && !mana.levitating) {} //block
                                        else if (room.size === "oneBySeven") {halt(right);} //block
                                        
                                        }

    else if (player.position === "f1") {
                                    if (current.room === "stainedGlassMarket") {
                                            halt(right);
                                        }
                                        else if (current.room === "fountainRoom") {
                                            if (!dialogue.paperUnderPiano) {
                                                startDialogue();
                                                //alert("there's a piece of paper wedged under the piano leg. You try lifting the piano, but it won't budge.");
                                                dialogue.paperUnderPiano = true;
                                            }
                                        }
                                        else if (current.room === "parapet6") {
                                            room.size = "threeByThree";
                                            parapet6.style.display = "none";
                                            parapet5.style.display = "grid";
                                            current.room = "parapet5";
                                            moveTo(c1);
                                            checkWhichTilesShouldBeIncluded();
                                            stairsNoise();
                                        }
                                        else if (current.room === "parapet2") {
                                            room.size = "threeByThree";
                                            parapet2.style.display = "none";
                                            parapet3.style.display = "grid";
                                            current.room = "parapet3";
                                            moveTo(c1);
                                            checkWhichTilesShouldBeIncluded();
                                            stairsNoise();
                                        }
                                        else if (current.room === "eastCatacombsLanding") {
                                                room.size = "sevenByFive";
                                                eastCatacombsLanding.style.display = "none";
                                                catacombs1.style.display = "grid";
                                                current.room = "catacombs1";
                                                checkWhichTilesShouldBeIncluded();
                                                stairsNoise();
                                        }
                                        else if (current.room === "lowerWaterfallLanding") {
                                            player.inPit = true;
                                            room.size = "sevenBySeven";
                                            lowerWaterfallLanding.style.display = "none";
                                            libraryNorth.style.display = "grid";
                                            current.room = "libraryNorth";
                                            moveTo(c4);
                                            movement.tempPrevent = true;
                                            checkWhichTilesShouldBeIncluded();
                                            door.play();
                                        }
                                        else if (current.room === "librarySouth") {
                                            if (!player.inPit) {
                                                halt(left);
                                            } else {
                                                halt(right);
                                            }
                                        }
                                        else if (room.size === "threeByThree" || room.size === "threeByFour") {halt(right);} //place exits in three by three rooms above this line
                                        else if (room.size === "threeByFive") {halt(right);} //place exits in three by five rooms above this line
                                        else if (current.room === "entryHall") {
                                            converse(civetStatue);
                                        }
                                        else if (room.size === "threeByTwo") {
                                                halt(right);
                                                alert("You: the stairs lead down to a lawn of white grass bordered by a dense, dark forest. The grass was once well-maintained, but is now overgrown and pitted with small crators.")
                                            }
                                        
                                        }

     else if (player.position === "f2") {
                                        if (current.room === "stainedGlassMarket") {
                                                halt(right);
                                                alert("shop shrew");
                                            }
                                            else if (current.room === "parapetUpperLanding") {
                                                room.size = "threeByThree";
                                                parapetUpperLanding.style.display = "none";
                                                bossHall2.style.display = "grid";
                                                current.room = "bossHall2";
                                                moveTo(a2);
                                                checkWhichTilesShouldBeIncluded();
                                                door.play();
                                            }
                                            else if (current.room === "parapet6") {
                                            room.size = "threeByThree";
                                            parapet6.style.display = "none";
                                            parapet5.style.display = "grid";
                                            current.room = "parapet5";
                                            moveTo(c2);
                                            checkWhichTilesShouldBeIncluded();
                                            stairsNoise();
                                        }
                                        else if (current.room === "parapet4") {
                                            room.size = "sevenByThree";
                                            parapet4.style.display = "none";
                                            largeHallway.style.display = "grid";
                                            current.room = "largeHallway";
                                            moveTo(a2);
                                            movement.tempPrevent = true;
                                            checkWhichTilesShouldBeIncluded();
                                            door.play();
                                        }
                                        else if (current.room === "canalMouth") {
                                            room.size = "threeByThree";
                                            canalMouth.style.display = "none";
                                            parapet1.style.display = "grid";
                                            current.room = "parapet1";
                                            moveTo(c2);
                                            checkWhichTilesShouldBeIncluded();
                                            door.play();
                                        }
                                        else if (current.room === "parapet2") {
                                            room.size = "threeByThree";
                                            parapet2.style.display = "none";
                                            parapet3.style.display = "grid";
                                            current.room = "parapet3";
                                            moveTo(c2);
                                            checkWhichTilesShouldBeIncluded();
                                            stairsNoise();
                                        }
                                            else if (current.room === "volcano" && !mana.levitating) {halt(right);} //block
                                            else if (current.room === "eastCatacombsLanding") {
                                                    room.size = "sevenByFive";
                                                    eastCatacombsLanding.style.display = "none";
                                                    catacombs1.style.display = "grid";
                                                    current.room = "catacombs1";
                                                    checkWhichTilesShouldBeIncluded();
                                                    stairsNoise();
                                            }
                                            else if (current.room === "librarySouth") {
                                                if (!player.inPit) {
                                                    halt(left);
                                                } else {
                                                    halt(right);
                                                }
                                            }
                                            else if (room.size === "threeByTwo") {}
                                            else if (current.room === "entryHall" && !dialogue.boyEntry) {
                                                    dialogue.boyEntry = true; //???
                                            }
                                            else if (current.room === "storageRoomTwo") {
                                                room.size = "oneBySeven";
                                                storageRoomTwo.style.display = "none";
                                                storageAccess.style.display = "grid";
                                                current.room = "storageAccess";
                                                moveTo(d4);
                                                movement.tempPrevent = true;
                                                checkWhichTilesShouldBeIncluded();
                                                door.play();
                                            }
                                            else if (current.room === "westernServantsQuartersHallway") {
                                                room.size = "threeByThree";
                                                westernServantsQuartersHallway.style.display = "none";
                                                servantsQuartersFour.style.display = "grid";
                                                current.room = "servantsQuartersFour";
                                                    moveTo(d1);
                                                    movement.tempPrevent = true;
                                                console.log(current.room);
                                                checkWhichTilesShouldBeIncluded();
                                                door.play();
                                            }
                                            else if (current.room === "libraryLanding") {
                                                room.size = "sevenBySeven";
                                                libraryLanding.style.display = "none";
                                                libraryNorth.style.display = "grid";
                                                current.room = "libraryNorth";
                                                moveTo(b2);
                                                movement.tempPrevent = true;
                                                checkWhichTilesShouldBeIncluded();
                                                door.play();
                                            }
                                            else if (room.size === "threeByThree" || room.size === "threeByFour") {halt(right);} //place exits in three by three rooms above this line
                                            else if (room.size === "sevenByOne") {halt(down);} //southern exits in 7x1 rooms go above this line
                                            else if (room.size === "threeByFive") {halt(right);} //place exits in three by five rooms above this line
                                            else if (room.size === "threeByTwo") {
                                                halt(right);
                                                alert("You: the stairs lead down to a lawn of white grass bordered by a dense, dark forest. The grass was once well-maintained, but is now overgrown and pitted with small crators.")
                                            }
                                            else if (current.room === "weaponsCheck") {halt();}

                                            }
      else if (player.position === "f3") {
                                                    if (current.room === "stainedGlassMarket") {
                                                            if (player.previousPosition === "e3") {
                                                                halt(right);
                                                                alert("shop shrew");
                                                            } else if (player.previousPosition === "f4") {
                                                                halt(up);
                                                            }
                                                        }
                                                        else if (current.room === "parapet6") {
                                                            room.size = "threeByThree";
                                                            parapet6.style.display = "none";
                                                            parapet5.style.display = "grid";
                                                            current.room = "parapet5";
                                                            moveTo(c3);
                                                            checkWhichTilesShouldBeIncluded();
                                                            stairsNoise();
                                                        }
                                                        else if (current.room === "parapet2") {
                                                            room.size = "threeByThree";
                                                            parapet2.style.display = "none";
                                                            parapet3.style.display = "grid";
                                                            current.room = "parapet3";
                                                            moveTo(c3);
                                                            checkWhichTilesShouldBeIncluded();
                                                            stairsNoise();
                                                        }
                                                        else if (current.room === "librarySouth") {
                                                            if (!player.inPit) {
                                                                halt(left);
                                                            } else {
                                                                halt(right);
                                                            }}
                                                        else if (current.room === "libraryNorth") {
                                                            if (player.previousPosition === "g3") {
                                                                halt(left);
                                                            } else if (player.previousPosition === "f2") {
                                                                halt(down);
                                                            }
                                                        }
                                                        else if (current.room === "eastCatacombsLanding") {
                                                                room.size = "sevenByFive";
                                                                eastCatacombsLanding.style.display = "none";
                                                                catacombs1.style.display = "grid";
                                                                current.room = "catacombs1";
                                                                checkWhichTilesShouldBeIncluded();
                                                                stairsNoise();
                                                        }
                                                        else if (room.size === "threeByThree" || room.size === "threeByFour") {halt(right);} //place exits in three by three rooms above this line
                                                        else if (room.size === "threeByFive") {halt(right);} //place exits in three by five rooms above this line
                                                        
                                                        }

      else if (player.position === "f4") {
                                            if (current.room === "libraryNorth") {
                                                    if (!player.inPit) {
                                                        halt(left);
                                                    } else {
                                                        halt(right);
                                                    }}
                                                else if (current.room === "librarySouth") {
                                                    if (player.inPit) {
                                                        player.inPit = false;
                                                        room.size = "threeByThree";
                                                        librarySouth.style.display = "none";
                                                        eastCatacombsLanding.style.display = "grid";
                                                        current.room = "eastCatacombsLanding";
                                                        moveTo(c2);
                                                        movement.tempPrevent = true;
                                                        checkWhichTilesShouldBeIncluded();
                                                        door.play();
                                                    } else {
                                                        halt(left);
                                                    }
                                                }
                                                else if (current.room === "entryHall" && !dialogue.boyEntry) {
                                                        dialogue.boyEntry = true; //???
                                                }
                                                else if (current.room === "preservesPantry") {
                                                    room.size = "sevenByFive";
                                                    kitchen.style.display = "grid";
                                                    preservesPantry.style.display = "none";
                                                    moveTo(a4);
                                                    movement.tempPrevent = true;
                                                    current.room = "kitchen";
                                                    checkWhichTilesShouldBeIncluded();
                                                    door.play();
                                                }
                                                else if (room.size === "sevenByThree") {halt(down);} //block
                                                else if (room.size === "threeByFive") {halt(down);} //place exits in three by five rooms above this line
                                                
                                                }

      else if (player.position === "f5") {
                                        if (current.room === "stainedGlassMarket") {
                                                alert("talk frog");
                                                halt()
                                            }
                                            else if (current.room === "librarySouth") {
                                                if (player.previousPosition === "g5") {
                                                    halt(left);
                                                } else if (player.previousPosition === "f6") {
                                                    halt(up);
                                                }
                                            }
                                            else if (current.room === "libraryNorth") {
                                                if (!player.inPit) {
                                                    halt(left);
                                                } else {
                                                    halt(right);
                                                };
                                            }
                                            else if (room.size === "threeByFive") {halt(right);} //place exits in three by five rooms above this line
                                            else if (current.room === "entryHall") {
                                                converse(hellbenderStatue);
                                            } 
                                            }

      else if (player.position === "f6") {
                                        if (current.room === "stainedGlassMarket") {
                                            halt(up);
                                            }
                                            else if (current.room === "volcano" && !mana.levitating) {halt();} //block
                                            else if (current.room === "groundFloorLanding3") {
                                                current.room = "groundFloorLanding2";
                                                room.size = "fiveByFive";
                                                groundFloorLanding3.style.display = "none";
                                                groundFloorLanding2.style.display = "grid";
                                                checkWhichTilesShouldBeIncluded();
                                                stairsNoise();
                                            }
                                            else if (current.room === "libraryNorth") {
                                                if (!player.inPit) {
                                                    halt(left);
                                                } else {
                                                    halt(right);
                                                };}
                                            else if (current.room === "kitchen") {
                                                current.room = "meadHallEast";
                                                room.size = "sevenBySeven";
                                                meadHallEast.style.display = "grid";
                                                kitchen.style.display = "none";
                                                moveTo(f1);
                                                movement.tempPrevent = true;
                                                checkWhichTilesShouldBeIncluded();
                                                door.play();
                                            }
                                            else if (room.size === "fiveByFive") {halt(down);} //block
                                            else if (room.size === "sevenByFive") {halt(down);} //exits to 7x5 rooms ought be placed before this line
                                            else if (current.room === "entryHall") {halt();}
                                            
                                            }

      else if (player.position === "f7") {
                                        if (current.room === "libraryNorth") {
                                                if (!player.inPit) {
                                                    halt(left);
                                                } else {
                                                    halt(right);
                                                };
                                            }
                                            
                                    }

     else if (player.position === "g1") {
                                                if (current.room === "groundFloorLanding2") {
                                                    current.room = "groundFloorLanding";
                                                    room.size = "sevenBySeven";
                                                    groundFloorLanding2.style.display = "none";
                                                    groundFloorLanding.style.display = "grid";
                                                    checkWhichTilesShouldBeIncluded();
                                                    stairsNoise();
                                                }
                                                else if (current.room === "groundFloorLanding3") {
                                                    current.room = "upperFloorLanding";
                                                    room.size = "sevenBySeven";
                                                    groundFloorLanding3.style.display = "none";
                                                    upperFloorLanding.style.display = "grid";
                                                    checkWhichTilesShouldBeIncluded();
                                                    stairsNoise();
                                                }
                                                else if (room.size === "fiveByFive") {halt(right);} //block
                                                else if (current.room === "entryHall") {
                                                    converse(coalanthStatue);
                                                } 
                                                }
     else if (player.position === "g2") {
                                            if (current.room === "groundFloorLanding3") {
                                                current.room = "upperFloorLanding";
                                                room.size = "sevenBySeven";
                                                groundFloorLanding3.style.display = "none";
                                                upperFloorLanding.style.display = "grid";
                                                checkWhichTilesShouldBeIncluded();
                                                stairsNoise();
                                            }
                                            else if (current.room === "groundFloorLanding2") {
                                                current.room = "groundFloorLanding";
                                                room.size = "sevenBySeven";
                                                groundFloorLanding2.style.display = "none";
                                                groundFloorLanding.style.display = "grid";
                                                checkWhichTilesShouldBeIncluded();
                                                stairsNoise();
                                            }
                                            else if (room.size === "fiveByFive") {halt(right);} //block
                                            else if (room.size === "sevenByOne") {halt();} //southern exits in 7x1 rooms go above this line
                                            
                                            }

     else if (player.position === "g3") {
                                                    if (current.room === "stainedGlassMarket") {
                                                        halt(up);
                                                        alert("shop shrew");
                                                    }
                                                    else if (current.room === "fountainRoom" && !inv.rubble1.taken) {
                                                            stone2.play();
                                                            rubble1.style.display = "none";
                                                            take(inv.rubble1);
                                                    }
                                                    else if (current.room === "volcano" && !mana.levitating) {} //block
                                                    else if (current.room === "groundFloorLanding3") {
                                                        current.room = "upperFloorLanding";
                                                        room.size = "sevenBySeven";
                                                        groundFloorLanding3.style.display = "none";
                                                        upperFloorLanding.style.display = "grid";
                                                        checkWhichTilesShouldBeIncluded();
                                                        stairsNoise();
                                                    }
                                                    else if (current.room === "groundFloorLanding2") {
                                                        current.room = "groundFloorLanding";
                                                        room.size = "sevenBySeven";
                                                        groundFloorLanding2.style.display = "none";
                                                        groundFloorLanding.style.display = "grid";
                                                        checkWhichTilesShouldBeIncluded();
                                                        stairsNoise();
                                                    }
                                                    else if (current.room === "entryHall") {
                                                        console.log("help")
                                                        //???
                                                    if (!dialogue.boyEnter) {
                                                            asher.style.display = "grid";
                                                            asher.style.transform = "translate(0px, 160px)";
                                                            dialogue.boyEnter = true;
                                                        }
                                                        if (!dialogue.boyEnterConv) { 
                                                                dialogue.boyEnterCurrent = true;  
                                                                converse(boyEntrance, boyEntrancev);
                                                                dialogue.boyEnterConv = true;
                                                        } 
                                                    }
                                                    else if (room.size === "fiveByFive") {halt(right);} //block
                                                    
                                                else if (room.size === "sevenByOne") {halt();} //mark
                                                    }
     else if (player.position === "g4") {
                                                if (current.room === "volcano" && !mana.levitating) {halt(down);} //block
                                            else if (current.room === "groundFloorLanding3") {
                                                current.room = "upperFloorLanding";
                                                room.size = "sevenBySeven";
                                                groundFloorLanding3.style.display = "none";
                                                upperFloorLanding.style.display = "grid";
                                                checkWhichTilesShouldBeIncluded();
                                                stairsNoise();
                                            }
                                            else if (current.room === "groundFloorLanding2") {
                                                current.room = "groundFloorLanding";
                                                room.size = "sevenBySeven";
                                                groundFloorLanding2.style.display = "none";
                                                groundFloorLanding.style.display = "grid";
                                                checkWhichTilesShouldBeIncluded();
                                                stairsNoise();
                                            }
                                            else if (room.size === "fiveByFive") {halt(right);} //block
                                            
                                            else if (room.size === "sevenByThree") {halt(down);} //block
                                            
                                            }

     else if (player.position === "g5") {
                                            if (current.room === "volcano" && !mana.levitating) {halt(down);} //block
                                            else if (current.room === "groundFloorLanding3") {
                                                current.room = "upperFloorLanding";
                                                room.size = "sevenBySeven";
                                                groundFloorLanding3.style.display = "none";
                                                upperFloorLanding.style.display = "grid";
                                                checkWhichTilesShouldBeIncluded();
                                                stairsNoise();
                                            }
                                            else if (current.room === "groundFloorLanding2") {
                                                current.room = "groundFloorLanding";
                                                room.size = "sevenBySeven";
                                                groundFloorLanding2.style.display = "none";
                                                groundFloorLanding.style.display = "grid";
                                                checkWhichTilesShouldBeIncluded();
                                                stairsNoise();
                                            }
                                            else if (room.size === "fiveByFive") {halt(right);} //block
                                                else if (current.room === "entryHall") {
                                                    converse(viperStatue);
                                                }
                                            }

     else if (player.position === "g6") {
                                    if (current.room === "stainedGlassMarket") {
                                            alert("talk bird");
                                            halt();
                                        }
                                    }

     else if (player.position === "g7") {
                                        
                                        if (room.size === "sevenByFive") {halt(down);}
                                        else if (current.room === "entryHall") {halt();}
                                    }
}





//WEST WALLS
function playerTo1() {
    if (current.room === "hypotheticalRoom") {}
    else if (current.room === "groundFloorLanding") {
        current.room = "groundFloorLanding2";
        room.size = "fiveByFive";
        groundFloorLanding.style.display = "none";
        groundFloorLanding2.style.display = "grid";
        checkWhichTilesShouldBeIncluded();
        stairsNoise();
    }
    else if (current.room === "catacombs2") {
            room.size = "sevenByFive";
            catacombs2.style.display = "none";
            catacombs1.style.display = "grid";
            current.room = "catacombs1";
            checkWhichTilesShouldBeIncluded();
    }
    else if (current.room === "catacombs1") {
            room.size = "threeByThree";
            catacombs1.style.display = "none";
            eastCatacombsLanding.style.display = "grid";
            current.room = "eastCatacombsLanding";
            checkWhichTilesShouldBeIncluded();
    }
    else if (current.room === "throneRoomEast") {
        room.size = "sevenBySeven";
        throneRoomEast.style.display = "none";
        throneRoomWest.style.display = "grid";
        current.room = "throneRoomWest";
        moveTo(g1);
        checkWhichTilesShouldBeIncluded();
    }
    else if (current.room === "meadHallEast") {
        current.room = "meadHallWest";
        room.size = "sevenBySeven";
        meadHallEast.style.display = "none";
        meadHallWest.style.display = "grid";
        moveTo(g1);
        checkWhichTilesShouldBeIncluded();
    } else if (current.room === "westernServantsQuartersHallway") {
        room.size = "sevenByOne";
        westernServantsQuartersHallway.style.display = "none";
        easternServantsQuartersHallway.style.display = "grid";
        current.room = "easternServantsQuartersHallway";
moveTo(g1);
        checkWhichTilesShouldBeIncluded();
        door.play();
    } else  {
        bump(left);
    }
}
function playerTo2() {
    if (current.room === "hypotheticalRoom") {}
    else if (current.room === "bossHall2") {
        room.size = "threeByThree";
        bossHall2.style.display = "none";
        parapetUpperLanding.style.display = "grid";
        current.room = "parapetUpperLanding";
        moveTo(e2);
        checkWhichTilesShouldBeIncluded();
        door.play();
    }
    else if (current.room === "largeHallway") {
        room.size = "threeByThree";
        largeHallway.style.display = "none";
        parapet4.style.display = "grid";
        current.room = "parapet4";
        moveTo(e2);
        movement.tempPrevent = true;
        checkWhichTilesShouldBeIncluded();
        door.play();
    }
    else if (current.room === "upperFloorLanding") {
        current.room = "groundFloorLanding3";
        room.size = "fiveByFive";
        upperFloorLanding.style.display = "none";
        groundFloorLanding3.style.display = "grid";
        checkWhichTilesShouldBeIncluded();
        stairsNoise();
    }
    else if (current.room === "groundFloorLanding") {
        current.room = "groundFloorLanding2";
        room.size = "fiveByFive";
        groundFloorLanding.style.display = "none";
        groundFloorLanding2.style.display = "grid";
        checkWhichTilesShouldBeIncluded();
        stairsNoise();
    }
    else if (current.room === "catacombs2") {
            room.size = "sevenByFive";
            catacombs2.style.display = "none";
            catacombs1.style.display = "grid";
            current.room = "catacombs1";
            checkWhichTilesShouldBeIncluded();
    }
    else if (current.room === "entryHall") {
        converse(gateToOutside, gateToOutsidev);
    }
    else if (current.room === "throneRoomEast") {
        room.size = "sevenBySeven";
        throneRoomEast.style.display = "none";
        throneRoomWest.style.display = "grid";
        current.room = "throneRoomWest";
        moveTo(g2);
        checkWhichTilesShouldBeIncluded();
    }
    else if (current.room === "catacombs1") {
            room.size = "threeByThree";
            catacombs1.style.display = "none";
            eastCatacombsLanding.style.display = "grid";
            current.room = "eastCatacombsLanding";
            checkWhichTilesShouldBeIncluded();
    }
    else if (current.room === "larder") {
        room.size = "sevenByFive";
        larder.style.display = "none";
        kitchen.style.display = "grid";
        current.room = "kitchen";
        moveTo(g4);
        checkWhichTilesShouldBeIncluded();
        door.play();
    } 
    else if (current.room === "libraryNorth") {
        room.size = "threeByThree";
        libraryNorth.style.display = "none";
        libraryLanding.style.display = "grid";
        current.room = "libraryLanding";
        moveTo(e2);
        movement.tempPrevent = true;
        checkWhichTilesShouldBeIncluded();
        door.play();
    }
    else if (current.room === "bossHall4") {
        room.size = "threeBySeven";
        bossHall4.style.display = "none";
        bossHall3.style.display = "grid";
        current.room = "bossHall3";
        moveTo(f2);
        checkWhichTilesShouldBeIncluded();
        door.play();
    }
    else if (current.room === "bossHall3") {
        room.size = "threeBySeven";
        bossHall3.style.display = "none";
        bossHall2.style.display = "grid";
        current.room = "bossHall2";
        moveTo(f2);
        checkWhichTilesShouldBeIncluded();
        door.play();
    }
    else if (current.room === "meadHallEast") {
        current.room = "meadHallWest";
        room.size = "sevenBySeven";
        meadHallEast.style.display = "none";
        meadHallWest.style.display = "grid";
        checkWhichTilesShouldBeIncluded();
        moveTo(g2);
    } else  {
        bump(left);
    }
}
function playerTo3() {
    if (current.room === "hypotheticalRoom") {}
    else if (current.room === "entryHall") {
        converse(gateToOutside, gateToOutsidev);
    }
    else if (current.room === "throneRoomEast") {
        room.size = "sevenBySeven";
        throneRoomEast.style.display = "none";
        throneRoomWest.style.display = "grid";
        current.room = "throneRoomWest";
        moveTo(g3);
        checkWhichTilesShouldBeIncluded();
    }
    else if (current.room === "meadHallEast") {
        current.room = "meadHallWest";
        room.size = "sevenBySeven";
        meadHallWest.style.display = "grid";
        meadHallEast.style.display = "none";
        moveTo(g3);
        checkWhichTilesShouldBeIncluded();
    }
    else if (current.room === "upperFloorLanding") {
        current.room = "groundFloorLanding3";
        room.size = "fiveByFive";
        upperFloorLanding.style.display = "none";
        groundFloorLanding3.style.display = "grid";
        checkWhichTilesShouldBeIncluded();
        stairsNoise();
    }
    else if (current.room === "groundFloorLanding") {
        current.room = "groundFloorLanding2";
        room.size = "fiveByFive";
        groundFloorLanding.style.display = "none";
        groundFloorLanding2.style.display = "grid";
        checkWhichTilesShouldBeIncluded();
        stairsNoise();
    }
    else if (current.room === "catacombs2") {
            room.size = "sevenByFive";
            catacombs2.style.display = "none";
            catacombs1.style.display = "grid";
            current.room = "catacombs1";
            checkWhichTilesShouldBeIncluded();
    }
     else  {
        bump(left);
    }
}
function playerTo4() {
    if (current.room === "hypotheticalRoom") {}
    else if (current.room === "upperFloorLanding") {
        current.room = "groundFloorLanding3";
        room.size = "fiveByFive";
        upperFloorLanding.style.display = "none";
        groundFloorLanding3.style.display = "grid";
        checkWhichTilesShouldBeIncluded();
        stairsNoise();
    }
    else if (current.room === "billowingFont") {
        room.size = "threeBySeven";
        billowingFont.style.display = "none";
        bossHall4.style.display = "grid";
        current.room = "bossHall4";
        moveTo(f2);
        checkWhichTilesShouldBeIncluded();
        door.play();
    }
    else if (current.room === "meadHallWest") {
        current.room = "groundFloorLanding";
        room.size = "sevenBySeven";
        meadHallWest.style.display = "none";
        groundFloorLanding.style.display = "grid";
        moveTo(g4);
        checkWhichTilesShouldBeIncluded();
    }
    else if (current.room === "catacombs2") {
            room.size = "sevenByFive";
            catacombs2.style.display = "none";
            catacombs1.style.display = "grid";
            current.room = "catacombs1";
            checkWhichTilesShouldBeIncluded();
    }
    else if (current.room === "entryHall") {
        converse(gateToOutside, gateToOutsidev);
    }
    else if (current.room === "throneRoomEast") {
        room.size = "sevenBySeven";
        throneRoomEast.style.display = "none";
        throneRoomWest.style.display = "grid";
        moveTo(g4);
        current.room = "throneRoomWest";
        checkWhichTilesShouldBeIncluded();
    }
    else if (current.room === "groundFloorLanding") {
        current.room = "groundFloorLanding2";
        room.size = "fiveByFive";
        groundFloorLanding.style.display = "none";
        groundFloorLanding2.style.display = "grid";
        checkWhichTilesShouldBeIncluded();
        stairsNoise();
    }
    else if (current.room === "throneRoomWest") {
        current.room = "fountainRoom";
        room.size = "sevenBySeven";
        throneRoomWest.style.display = "none";
        fountainRoom.style.display = "grid";
        moveTo(g4);
        checkWhichTilesShouldBeIncluded();
        door.play();
    } else if (current.room === "meadHallEast") {
        current.room = "meadHallWest";
        room.size = "sevenBySeven";
        meadHallWest.style.display = "grid";
        meadHallEast.style.display = "none";
        moveTo(g4);
        checkWhichTilesShouldBeIncluded();
    } else if (current.room === "fountainRoom") {
        /*
        if (!dialogue.boyHiden) {
            dialogue.boyMoveAfterMerchantConvComplete = true;
            dialogue.boyHiden = true;
            asher.style.display = "none";
        }
            */
        current.room = "entryHall";
        room.size = "sevenByFive";
        entryHall.style.display = "grid";
        fountainRoom.style.display = "none";
        moveTo(f3); //should be g3, will swich back after resolve that conversation
        checkWhichTilesShouldBeIncluded();
        door.play();
    } else if (current.room === "kitchen") {
        room.size = "threeByFive";
        preservesPantry.style.display = "grid";
        kitchen.style.display = "none";
        moveTo(e4);
        movement.tempPrevent = true;
        current.room = "preservesPantry";
        checkWhichTilesShouldBeIncluded();
        door.play();
    } else {
        bump(left);
    }
}
function playerTo5() {
    if (current.room === "hypotheticalRoom") {}
    else if (current.room === "meadHallEast") {
        current.room = "meadHallWest";
        room.size = "sevenBySeven";
        meadHallWest.style.display = "grid";
        meadHallEast.style.display = "none";
        moveTo(g5);
        checkWhichTilesShouldBeIncluded();
    }
    else if (current.room === "upperFloorLanding") {
        current.room = "groundFloorLanding3";
        room.size = "fiveByFive";
        upperFloorLanding.style.display = "none";
        groundFloorLanding3.style.display = "grid";
        checkWhichTilesShouldBeIncluded();
        stairsNoise();
    }
    else if (current.room === "throneRoomEast") {
        room.size = "sevenBySeven";
        throneRoomEast.style.display = "none";
        throneRoomWest.style.display = "grid";
        current.room = "throneRoomWest";
        moveTo(g5);
        checkWhichTilesShouldBeIncluded();
    } else if (current.room === "groundFloorLanding") {
        current.room = "groundFloorLanding2";
        room.size = "fiveByFive";
        groundFloorLanding.style.display = "none";
        groundFloorLanding2.style.display = "grid";
        checkWhichTilesShouldBeIncluded();
        stairsNoise();
    }
    else  {
        bump(left);
    }
}
function playerTo6() {
    if (current.room === "hypotheticalRoom") {}
    else if (current.room === "throneRoomEast") {
        room.size = "sevenBySeven";
        throneRoomEast.style.display = "none";
        throneRoomWest.style.display = "grid";
        current.room = "throneRoomWest";
        moveTo(g6);
        checkWhichTilesShouldBeIncluded();
    }
    else if (current.room === "upperFloorLanding") {
        current.room = "groundFloorLanding3";
        room.size = "fiveByFive";
        upperFloorLanding.style.display = "none";
        groundFloorLanding3.style.display = "grid";
        checkWhichTilesShouldBeIncluded();
        stairsNoise();
    }
    else if (current.room === "meadHallEast") {
        current.room = "meadHallWest";
        room.size = "sevenBySeven";
        meadHallEast.style.display = "none";
        meadHallWest.style.display = "grid";
        moveTo(g6);
        checkWhichTilesShouldBeIncluded();
    }
    else if (current.room === "groundFloorLanding") {
        current.room = "groundFloorLanding2";
        room.size = "fiveByFive";
        groundFloorLanding.style.display = "none";
        groundFloorLanding2.style.display = "grid";
        checkWhichTilesShouldBeIncluded();
        stairsNoise();
    }
    else if (current.room === "librarySouth") {
        room.size = "sevenBySeven";
        librarySouth.style.display = "none";
        study.style.display = "grid";
        current.room = "study";
        moveTo(g6);
        checkWhichTilesShouldBeIncluded();
        door.play();
    }
    else if (current.room === "meadHallEast") {
        current.room = "meadHallWest";
        room.size = "sevenBySeven";
        meadHallEast.style.display = "none";
        meadHallWest.style.display = "grid";
        checkWhichTilesShouldBeIncluded();
    }
    else  {
        bump(left);
    }
}
function playerTo7() {
    if (current.room === "hypotheticalRoom") {}
    else if (current.room === "throneRoomEast") {
        room.size = "sevenBySeven";
        throneRoomEast.style.display = "none";
        throneRoomWest.style.display = "grid";
        current.room = "throneRoomWest";
        moveTo(g7);
        checkWhichTilesShouldBeIncluded();
    }
    else if (current.room === "meadHallEast") {
        current.room = "meadHallWest";
        room.size = "sevenBySeven";
        meadHallEast.style.display = "none";
        meadHallWest.style.display = "grid";
        moveTo(g7);
        checkWhichTilesShouldBeIncluded();
    } else  {
        bump(left);
    }
}
//NORTH WALLS

function playerToA() {
    if (current.room === "hypotheticalRoom") {}
    else if (current.room === "hallOfDoors") {
        current.room = "volcano";
        room.size = "sevenBySeven";
        hallOfDoors.style.display = "none";
        volcano.style.display = "grid";
        checkWhichTilesShouldBeIncluded();
        door.play();
        triggerGorriaBattle();
    }
    else if (current.room === "librarySouth") {
        room.size = "sevenBySeven";
        librarySouth.style.display = "none";
        libraryNorth.style.display = "grid";
        current.room = "libraryNorth";
        moveTo(a7);
        checkWhichTilesShouldBeIncluded();
    }
    else  {
        bump(up);
    }
}
function playerToB() {
    if (current.room === "hypotheticalRoom") {}
    else if (current.room === "easternServantsQuartersHallway") {
        room.size = "threeByThree";
        easternServantsQuartersHallway.style.display = "none";
        servantsQuartersThree.style.display = "grid";
moveTo(d3);
movement.tempPrevent = true;
        current.room = "servantsQuartersThree";
                console.log(current.room);
        checkWhichTilesShouldBeIncluded();
        door.play();
    }
    else if (current.room === "groundFloorLanding2") {
        current.room = "groundFloorLanding3";
        room.size = "fiveByFive";
        groundFloorLanding2.style.display = "none";
        groundFloorLanding3.style.display = "grid";
        checkWhichTilesShouldBeIncluded();
        stairsNoise();
    }
         else if (current.room === "entryHall") {
        //go to weaponsCheck
        room.size = "threeByThree";
        entryHall.style.display = "none";
        weaponsCheck.style.display = "grid";
        current.room = "weaponsCheck";
        moveTo(d3);
        checkWhichTilesShouldBeIncluded();
        door.play();
        } else  {
            bump(up);
        }
}
function playerToC() {
    if (current.room === "hypotheticalRoom") {}
    else if (current.room === "parapet4") {
        room.size = "threeByThree";
        parapet4.style.display = "none";
        parapet5.style.display = "grid";
        current.room = "parapet5";
        moveTo(c3);
        checkWhichTilesShouldBeIncluded();
        stairsNoise();
    }
    else if (current.room === "parapet3") {
        room.size = "threeByThree";
        parapet3.style.display = "none";
        parapet4.style.display = "grid";
        current.room = "parapet4";
        moveTo(c3);
        checkWhichTilesShouldBeIncluded();
        stairsNoise();
    }
    else if (current.room === "parapet2") {
        room.size = "threeByThree";
        parapet2.style.display = "none";
        parapet1.style.display = "grid";
        current.room = "parapet1";
        moveTo(c3);
        checkWhichTilesShouldBeIncluded();
        stairsNoise();
    }
    else if (current.room === "fountainRoom" && !inv.brokenGlass.taken) {
            glass.play();
            brokenGlass.style.display = "none";
            player.hittingAWall = true;
            take(inv.brokenGlass);
    }
    else if (current.room === "weaponsCheck") {
        if (player.shrunk) {
            goIntoMouseHole();
        } else {
            bump(up);
            itsAMouseHole();
        }
    }
    else if (current.room === "upperWaterfallLanding") {
        room.size = "threeByTwo";
        upperWaterfallLanding.style.display = "none";
        lowerWaterfallLanding.style.display = "grid";
        current.room = "lowerWaterfallLanding";
        moveTo(c2);
        checkWhichTilesShouldBeIncluded();
        stairsNoise();
    }
    else if (current.room === "lowerWaterfallLanding") {
                room.size = "threeByThree";
                lowerWaterfallLanding.style.display = "none";
                libraryLanding.style.display = "grid";
                current.room = "libraryLanding";
                moveTo(c3);
                movement.tempPrevent = true;
                checkWhichTilesShouldBeIncluded();
                stairsNoise();
            }
    else if (current.room === "hallOfDoors") {
        bump(up);
        noReason();
    }
    else if (current.room === "groundFloorLanding2") {
        current.room = "groundFloorLanding3";
        room.size = "fiveByFive";
        groundFloorLanding2.style.display = "none";
        groundFloorLanding3.style.display = "grid";
        checkWhichTilesShouldBeIncluded();
        stairsNoise();
    }
    else if (current.room === "librarySouth") {
        room.size = "sevenBySeven";
        librarySouth.style.display = "none";
        libraryNorth.style.display = "grid";
        current.room = "libraryNorth";
        moveTo(c7);
        checkWhichTilesShouldBeIncluded();
    }
    else  {
        bump(up);
        console.log("bump up")
    }
}
function playerToD() {
    if (current.room === "groundFloorLanding2") {
        current.room = "groundFloorLanding3";
        room.size = "fiveByFive";
        groundFloorLanding2.style.display = "none";
        groundFloorLanding3.style.display = "grid";
        checkWhichTilesShouldBeIncluded();
        stairsNoise();
    }
    else if (current.room === "bossHall1") {
        room.size = "sevenBySeven";
        bossHall1.style.display = "none";
        upperFloorLanding.style.display = "grid";
        current.room = "upperFloorLanding";
        moveTo(d7);
        checkWhichTilesShouldBeIncluded();
        door.play();
    }
     else if (current.room === "parapet6") {
        room.size = "threeByThree";
        parapet6.style.display = "none";
        parapetUpperLanding.style.display = "grid";
        current.room = "parapetUpperLanding";
        moveTo(d3);
        checkWhichTilesShouldBeIncluded();
        door.play();
    }
    else if (current.room === "parapet3") {
        room.size = "threeByThree";
        parapet3.style.display = "none";
        parapet4.style.display = "grid";
        current.room = "parapet4";
        moveTo(d3);
        checkWhichTilesShouldBeIncluded();
        stairsNoise();
    }
    else if (current.room === "parapet2") {
        room.size = "threeByThree";
        parapet2.style.display = "none";
        parapet1.style.display = "grid";
        current.room = "parapet1";
        moveTo(d3);
        checkWhichTilesShouldBeIncluded();
        stairsNoise();
    }
    else if (current.room === "parapet4") {
        room.size = "threeByThree";
        parapet4.style.display = "none";
        parapet5.style.display = "grid";
        current.room = "parapet5";
        moveTo(d3);
        checkWhichTilesShouldBeIncluded();
        stairsNoise();
    }
    else if (current.room === "canalMouth") {
        current.room = "hallOfDoors";
        room.size = "sevenByOne";
        canalMouth.style.display = "none";
        hallOfDoors.style.display = "grid";
        checkWhichTilesShouldBeIncluded();
        door.play();
    }
    else if (current.room === "largeHallway") {
        room.size = "sevenBySeven";
        largeHallway.style.display = "none";
        stainedGlassMarket.style.display = "grid";
        current.room = "stainedGlassMarket";
        moveTo(d7);
        movement.tempPrevent = true;
        checkWhichTilesShouldBeIncluded();
        door.play();
    }
    else if (current.room === "storageAccess") {
        room.size = "oneBySeven";
        storageAccess.style.display = "none";
        gardenAccess.style.display = "grid";
        moveTo(d7);
        current.room = "gardenAccess";
        checkWhichTilesShouldBeIncluded();
        door.play();
    }
    else if (current.room === "librarySouth") {
        room.size = "sevenBySeven";
        librarySouth.style.display = "none";
        libraryNorth.style.display = "grid";
        current.room = "libraryNorth";
        moveTo(d7);
        checkWhichTilesShouldBeIncluded();
    }
    else if (current.room === "study") {
        room.size = "threeByThree";
        study.style.display = "none";
        upperWaterfallLanding.style.display = "grid";
        current.room = "upperWaterfallLanding";
        moveTo(d3);
        movement.tempPrevent = true;
        checkWhichTilesShouldBeIncluded();
        door.play();
    }
    else if (current.room === "servantsQuartersFour") {
        room.size = "sevenByOne";
        servantsQuartersFour.style.display = "none";
moveTo(f1);
movement.tempPrevent = true;
        westernServantsQuartersHallway.style.display = "grid";
        current.room = "westernServantsQuartersHallway";
        checkWhichTilesShouldBeIncluded();
        door.play();
    } 
    else if (current.room === "upperWaterfallLanding") {
        room.size = "threeByTwo";
        upperWaterfallLanding.style.display = "none";
        lowerWaterfallLanding.style.display = "grid";
        current.room = "lowerWaterfallLanding";
        moveTo(d2);
        checkWhichTilesShouldBeIncluded();
        stairsNoise();
    }
    else if (current.room === "lowerWaterfallLanding") {
        room.size = "threeByThree";
        lowerWaterfallLanding.style.display = "none";
        libraryLanding.style.display = "grid";
        current.room = "libraryLanding";
        moveTo(d3);
        movement.tempPrevent = true;
        checkWhichTilesShouldBeIncluded();
        stairsNoise();
    }
    else if (current.room === "wineCelar") {
        room.size = "sevenByFive";
        wineCelar.style.display = "none";
        larder.style.display = "grid";
        current.room = "larder";
        moveTo(d5);
        checkWhichTilesShouldBeIncluded();
        door.play();
    }
    else if (current.room === "servantsQuartersTwo") {
        room.size = "sevenByOne";
        servantsQuartersTwo.style.display = "none";
        easternServantsQuartersHallway.style.display = "grid";
	moveTo(d1);
	movement.tempPrevent = true;
        current.room = "easternServantsQuartersHallway";
        checkWhichTilesShouldBeIncluded();
        door.play();
    } 
    else if (current.room === "servantsQuartersSix") {
        room.size = "sevenByOne";
        servantsQuartersSix.style.display = "none";
moveTo(b1);
movement.tempPrevent = true;
        westernServantsQuartersHallway.style.display = "grid";
        current.room = "westernServantsQuartersHallway";
        checkWhichTilesShouldBeIncluded();
        door.play();
    } 
    else if (current.room === "westernServantsQuartersHallway") {
        room.size = "threeByThree";
        westernServantsQuartersHallway.style.display = "none";
        servantsQuartersFive.style.display = "grid";
moveTo(d3);
movement.tempPrevent = true;
        current.room = "servantsQuartersFive";
        console.log(current.room);
        checkWhichTilesShouldBeIncluded();
        door.play();
    }
    else if (current.room === "coatRoom") {
        if (!dialogue.playerHasFreshenedUp) {
            if (!dialogue.pjspjs) {   
                if (!player.thunkPlayed) {
                    thunk.play();
                    player.thunkPlayed = true;
                }
            converse(pjs, pjsV);
            dialogue.pjspjs = true;
        } //indefinite loop until player casts glamor
        else if (dialogue.pjspjs) {  
            if (!player.thunkPlayed2) {
                    thunk.play();
                    player.thunkPlayed2 = true;
                };
             converse(pjs2, pjs2V);
        }
        } else {
            //go to entryhall
            if (!dialogue.asymetrical) {
                room.size = "sevenByFive";
                entryHall.style.display = "grid";
                coatRoom.style.display = "none";
                current.room = "entryHall";
                checkWhichTilesShouldBeIncluded();
                moveTo(b5);
                movement.tempPrevent = true;
                door.play();
                
                //converse(asymetrical, asymetricalv);
            } else {
                room.size = "sevenByFive";
                entryHall.style.display = "grid";
                coatRoom.style.display = "none";
                current.room = "entryHall";
                moveTo(b5);
                movement.tempPrevent = true;
                checkWhichTilesShouldBeIncluded();
                door.play();
            }
            
        }
    } else if (current.room === "fountainRoom") {
        /*
        if (!dialogue.boyHiden) {
            dialogue.boyMoveAfterMerchantConvComplete = true;
            dialogue.boyHiden = true;
            asher.style.display = "none";
        }
            */
        //go to groundFloorLanding
        room.size = "sevenBySeven";
        moveTo(d7);
        groundFloorLanding.style.display = "grid";
        fountainRoom.style.display = "none";
        current.room = "groundFloorLanding";
        checkWhichTilesShouldBeIncluded();
        door.play();
    }  else if (current.room === "stainedGlassMarket") {
        current.room = "fountainRoom";
        room.size = "sevenBySeven";
        stainedGlassMarket.style.display = "none";
        fountainRoom.style.display = "grid";
        checkWhichTilesShouldBeIncluded();
        moveTo(d7);
        door.play();
    } else if (current.room === "entryHall") {
        dialogue.repeat = "d"
        converse(even, evenV);
    } 
    else if (current.room === "preservesPantry") {
        room.size = "threeByTwo";
        northPorch.style.display = "grid";
        moveTo(d2);
        northPorchWalls();
        movement.tempPrevent = true;
        preservesPantry.style.display = "none";
        current.room = "northPorch";
        checkWhichTilesShouldBeIncluded();
        door.play();
    } else if (current.room === "gardenAccess") {
        room.size = "fiveByFive";
        courtyard.style.display = "grid";
        gardenAccess.style.display = "none";
        current.room = "courtyard";
        moveTo(d5);
        movement.tempPrevent = true;
        checkWhichTilesShouldBeIncluded();
        door.play();
    } else  {
        bump(up);
    }
}
function playerToE() {
    if (current.room === "hypotheticalRoom") {}
    else if (current.room === "groundFloorLanding2") {
        current.room = "groundFloorLanding3";
        room.size = "fiveByFive";
        groundFloorLanding2.style.display = "none";
        groundFloorLanding3.style.display = "grid";
        checkWhichTilesShouldBeIncluded();
        stairsNoise();
    }
    else if (current.room === "parapet3") {
        room.size = "threeByThree";
        parapet3.style.display = "none";
        parapet4.style.display = "grid";
        current.room = "parapet4";
        moveTo(e3);
        checkWhichTilesShouldBeIncluded();
        stairsNoise();
    }
    else if (current.room === "parapet2") {
        room.size = "threeByThree";
        parapet2.style.display = "none";
        parapet1.style.display = "grid";
        current.room = "parapet1";
        moveTo(e3);
        checkWhichTilesShouldBeIncluded();
        stairsNoise();
    }
    else if (current.room === "parapet4") {
        room.size = "threeByThree";
        parapet4.style.display = "none";
        parapet5.style.display = "grid";
        current.room = "parapet5";
        moveTo(e3);
        checkWhichTilesShouldBeIncluded();
        stairsNoise();
    }
    else if (current.room === "lowerWaterfallLanding") {
                room.size = "threeByThree";
                lowerWaterfallLanding.style.display = "none";
                libraryLanding.style.display = "grid";
                current.room = "libraryLanding";
                moveTo(e3);
                movement.tempPrevent = true;
                checkWhichTilesShouldBeIncluded();
                stairsNoise();
            }
    else if (current.room === "upperWaterfallLanding") {
        room.size = "threeByTwo";
        upperWaterfallLanding.style.display = "none";
        lowerWaterfallLanding.style.display = "grid";
        current.room = "lowerWaterfallLanding";
        moveTo(e2);
        checkWhichTilesShouldBeIncluded();
        stairsNoise();
    }
    else if (current.room === "librarySouth") {
        room.size = "sevenBySeven";
        librarySouth.style.display = "none";
        libraryNorth.style.display = "grid";
        current.room = "libraryNorth";
        moveTo(e7);
        checkWhichTilesShouldBeIncluded();
    }
    else  {
        bump(up);
    }
}
function playerToF() {
    if (current.room === "hypotheticalRoom") {}
    else if (current.room === "groundFloorLanding2") {
        current.room = "groundFloorLanding3";
        room.size = "fiveByFive";
        groundFloorLanding2.style.display = "none";
        groundFloorLanding3.style.display = "grid";
        checkWhichTilesShouldBeIncluded();
        stairsNoise();
    }
    else if (current.room === "fountainRoom") {
            playPiano();
    }
    else if (current.room === "easternServantsQuartersHallway") {
        room.size = "threeByThree";
        easternServantsQuartersHallway.style.display = "none";
        servantsQuartersOne.style.display = "grid";
        current.room = "servantsQuartersOne";
moveTo(d3);
movement.tempPrevent = true;
                console.log(current.room);
        checkWhichTilesShouldBeIncluded();
        door.play();
    }
    else if (current.room === "meadHallEast") {
        current.room = "kitchen";
        room.size = "sevenByFive";
        kitchen.style.display = "grid";
        moveTo(f5);
        meadHallEast.style.display = "none";
        checkWhichTilesShouldBeIncluded();
        door.play();
    } else  {
        bump(up);
    }
}
function playerToG() {
    if (current.room === "hypotheticalRoom") {}
    else if (current.room === "fountainRoom") {
        playPiano();
    }
    else if (current.room === "librarySouth") {
        room.size = "sevenBySeven";
        librarySouth.style.display = "none";
        libraryNorth.style.display = "grid";
        current.room = "libraryNorth";
        moveTo(g7);
        checkWhichTilesShouldBeIncluded();
    }
    else  {
        bump(up);
    }
}
//EAST WALLS

function playerToH1() {
    if (current.room === "hypotheticalRoom") {}
    else if (current.room === "catacombs1") {
            room.size = "sevenByFive";
            catacombs1.style.display = "none";
            catacombs2.style.display = "grid";
            current.room = "catacombs2";
            checkWhichTilesShouldBeIncluded();
    }
    else if (current.room === "throneRoomWest") {
        room.size = "sevenBySeven";
        throneRoomWest.style.display = "none";
        throneRoomEast.style.display = "grid";
        current.room = "throneRoomEast";
        moveTo(a1);
        checkWhichTilesShouldBeIncluded();
    }
    else if (current.room === "meadHallWest") {
        current.room = "meadHallEast";
        room.size = "sevenBySeven";
        meadHallWest.style.display = "none";
        meadHallEast.style.display = "grid";
        moveTo(a1);
        checkWhichTilesShouldBeIncluded();
    } else if (current.room === "easternServantsQuartersHallway") {
        room.size = "sevenByOne";
        easternServantsQuartersHallway.style.display = "none";
        westernServantsQuartersHallway.style.display = "grid";
        current.room = "westernServantsQuartersHallway";
moveTo(a1);
        checkWhichTilesShouldBeIncluded();
        door.play();
    } else if (current.room === "westernServantsQuartersHallway") {
        room.size = "threeByFive";
        westernServantsQuartersHallway.style.display = "none";
        preservesPantry.style.display = "grid";
moveTo(c2);
movement.tempPrevent = true;
        current.room = "preservesPantry";
        checkWhichTilesShouldBeIncluded();
        door.play();
    } else  {
        bump(right);
    }
}
function playerToH2() {
    if (current.room === "hypotheticalRoom") {}
    else if (current.room === "catacombs1") {
            room.size = "sevenByFive";
            catacombs1.style.display = "none";
            catacombs2.style.display = "grid";
            current.room = "catacombs2";
            checkWhichTilesShouldBeIncluded();
    }
    else if (current.room === "bossHall2") {
        room.size = "threeBySeven";
        bossHall2.style.display = "none";
        bossHall3.style.display = "grid";
        current.room = "bossHall3";
        moveTo(a2);
        checkWhichTilesShouldBeIncluded();
        door.play();
    }
    else if (current.room === "bossHall3") {
        room.size = "threeBySeven";
        bossHall3.style.display = "none";
        bossHall4.style.display = "grid";
        current.room = "bossHall4";
        moveTo(a2);
        checkWhichTilesShouldBeIncluded();
        door.play();
    }
    else if (current.room === "bossHall4") {
        room.size = "threeBySeven";
        bossHall4.style.display = "none";
        billowingFont.style.display = "grid";
        current.room = "billowingFont";
        moveTo(a4);
        checkWhichTilesShouldBeIncluded();
        door.play();
    }
    else if (current.room === "fountainRoom") {
            alert("bookshelf")
            bump(right);
    }
    else if (current.room === "throneRoomWest") {
        room.size = "sevenBySeven";
        throneRoomWest.style.display = "none";
        throneRoomEast.style.display = "grid";
        current.room = "throneRoomEast";
        moveTo(a2);
        checkWhichTilesShouldBeIncluded();
    }
    else if (current.room === "libraryNorth") {
        room.size = "oneBySeven";
        libraryNorth.style.display = "none";
        storageAccess.style.display = "grid";
        current.room = "storageAccess";
        moveTo(d7);
        checkWhichTilesShouldBeIncluded();
        door.play();
    }
    else if (current.room === "largeHallway") {
        room.size = "threeByThree";
        largeHallway.style.display = "none";
        upperWaterfallLanding.style.display = "grid";
        current.room = "upperWaterfallLanding";
        moveTo(c2);
        movement.tempPrevent = true;
        checkWhichTilesShouldBeIncluded();
        door.play();
    }
    else if (current.room === "meadHallWest") {
        current.room = "meadHallEast";
        room.size = "sevenBySeven";
        meadHallWest.style.display = "none";
        meadHallEast.style.display = "grid";
        checkWhichTilesShouldBeIncluded();
        moveTo(a2);
    } else  {
        bump(right);
    }
}
function playerToH3() {
    if (current.room === "hypotheticalRoom") {}
    else if (current.room === "catacombs1") {
            room.size = "sevenByFive";
            catacombs1.style.display = "none";
            catacombs2.style.display = "grid";
            current.room = "catacombs2";
            checkWhichTilesShouldBeIncluded();
    }
    else if (current.room === "meadHallWest") {
        current.room = "meadHallEast";
        room.size = "sevenBySeven";
        meadHallWest.style.display = "none";
        meadHallEast.style.display = "grid";
        checkWhichTilesShouldBeIncluded();
        moveTo(a3);
    }
    else if (current.room === "throneRoomWest") {
        room.size = "sevenBySeven";
        throneRoomWest.style.display = "none";
        throneRoomEast.style.display = "grid";
        current.room = "throneRoomEast";
        moveTo(a3);
        checkWhichTilesShouldBeIncluded();
    }
    else if (current.room === "entryHall") {
        
        if (dialogue.boyInFountainRoom && !dialogue.boyInFountainRoomComplete) {
            asher.style.display = "grid";
            merchantCutscene();
            boyTurns++;
        }
        if (!dialogue.boyInFountainRoom) {
            dialogue.putBoyOnG2ForEntranceConv = true;
            if (!dialogue.boyEnter) {
            asher.style.display = "grid";
            asher.style.transform = "translate(0px, 160px)";
            dialogue.boyEnter = true;
        }
        if (!dialogue.boyEnterConv) {   
                dialogue.boyEnterCurrent = true;
                converse(boyEntrance, boyEntrancev);
                dialogue.boyEnterConv = true;
        }
        } else {
            current.room = "fountainRoom";
            room.size = "sevenBySeven";
            entryHall.style.display = "none";
            fountainRoom.style.display = "grid";
            checkWhichTilesShouldBeIncluded();
            stairsNoise();
        }
    } else {
        bump(right);
    }
}
function playerToH4() {
    if (current.room === "hypotheticalRoom") {}
    else if (current.room === "meadHallWest") {
        current.room = "meadHallEast";
        room.size = "sevenBySeven";
        meadHallWest.style.display = "none";
        meadHallEast.style.display = "grid";
        moveTo(a4);
        checkWhichTilesShouldBeIncluded();
    }
    else if (current.room === "catacombs1") {
            room.size = "sevenByFive";
            catacombs1.style.display = "none";
            catacombs2.style.display = "grid";
            current.room = "catacombs2";
            checkWhichTilesShouldBeIncluded();
    }
    else if (current.room === "throneRoomWest") {
        room.size = "sevenBySeven";
        throneRoomWest.style.display = "none";
        throneRoomEast.style.display = "grid";
        current.room = "throneRoomEast";
        moveTo(a4);
        checkWhichTilesShouldBeIncluded();
    }
    else if (current.room === "groundFloorLanding") {
        current.room = "meadHallWest";
        room.size = "sevenBySeven";
        groundFloorLanding.style.display = "none";
        meadHallWest.style.display = "grid";
         moveTo(a4);
        checkWhichTilesShouldBeIncluded();
        door.play();
    }
    else if (current.room === "kitchen") {
        room.size = "sevenByFive";
        kitchen.style.display = "none";
        larder.style.display = "grid";
        current.room = "larder";
        moveTo(a2);
        checkWhichTilesShouldBeIncluded();
        door.play();
    } 
    else if (current.room === "fountainRoom") {
        /*
        if (!dialogue.boyHiden) {
            dialogue.boyMoveAfterMerchantConvComplete = true;
            dialogue.boyHiden = true;
            asher.style.display = "none";
        }
            */
        current.room = "throneRoomWest";
        room.size = "sevenBySeven";
        fountainRoom.style.display = "none";
        throneRoomWest.style.display = "grid";
        moveTo(a4);
        door.play();
        checkWhichTilesShouldBeIncluded();
    } else {
        bump(right);
    }
}
function playerToH5() {
    if (current.room === "hypotheticalRoom") {}
    else if (current.room === "throneRoomWest") {
        room.size = "sevenBySeven";
        throneRoomWest.style.display = "none";
        throneRoomEast.style.display = "grid";
        current.room = "throneRoomEast";
        moveTo(a5);
        checkWhichTilesShouldBeIncluded();
    }
    else if (current.room === "meadHallWest") {
        current.room = "meadHallEast";
        room.size = "sevenBySeven";
        meadHallWest.style.display = "none";
        meadHallEast.style.display = "grid";
        checkWhichTilesShouldBeIncluded();
        moveTo(a5);
    }
    else  {
        bump(right);
    }
}
function playerToH6() {
    if (current.room === "hypotheticalRoom") {}
    else if (current.room === "throneRoomWest") {
        room.size = "sevenBySeven";
        throneRoomWest.style.display = "none";
        throneRoomEast.style.display = "grid";
        current.room = "throneRoomEast";
        moveTo(a6);
        checkWhichTilesShouldBeIncluded();
    }
    else if (current.room === "throneRoomEast") {
        room.size = "oneBySeven";
        throneRoomEast.style.display = "none";
        gardenAccess.style.display = "grid";
        moveTo(d6);
        current.room = "gardenAccess";
        checkWhichTilesShouldBeIncluded();
        door.play();
    }
    else if (current.room === "study") {
        room.size = "sevenBySeven";
        study.style.display = "none";
        librarySouth.style.display = "grid";
        current.room = "librarySouth";
        moveTo(a6);
        checkWhichTilesShouldBeIncluded();
        door.play();
    }
    else if (current.room === "meadHallWest") {
        current.room = "meadHallEast";
        room.size = "sevenBySeven";
        meadHallWest.style.display = "none";
        meadHallEast.style.display = "grid";
        moveTo(a6);
        checkWhichTilesShouldBeIncluded();
    } else  {
        bump(right);
    }
}
function playerToH7() {
    if (current.room === "hypotheticalRoom") {}
    else if (current.room === "throneRoomWest") {
        room.size = "sevenBySeven";
        throneRoomWest.style.display = "none";
        throneRoomEast.style.display = "grid";
        current.room = "throneRoomEast";
        moveTo(a7);
        checkWhichTilesShouldBeIncluded();
    }
    else if (current.room === "meadHallWest") {
        current.room = "meadHallEast";
        room.size = "sevenBySeven";
        meadHallWest.style.display = "none";
        meadHallEast.style.display = "grid";
        moveTo(a7);
        checkWhichTilesShouldBeIncluded();
    } else  {
        bump(right);
    }
}
//SOUTH WALLS

function playerToA8() {
    if (current.room === "hypotheticalRoom") {}
    else if (current.room === "libraryNorth") {
        room.size = "sevenBySeven";
        libraryNorth.style.display = "none";
        librarySouth.style.display = "grid";
        current.room = "librarySouth";
        moveTo(a1);
        checkWhichTilesShouldBeIncluded();
    }
    else  {
        bump(down);
    }
}
function playerToB8() {
    if (current.room === "hypotheticalRoom") {} else  {
        bump(down);
    }
}
function playerToC8() {
    if (current.room === "hypotheticalRoom") {}
    else if (current.room === "stainedGlassMarket" && !inv.broom.taken) {
        woodTake.play();
        broom.style.display = "none";
        take(inv.broom);
    }
    else if (current.room === "libraryNorth") {
        room.size = "sevenBySeven";
        libraryNorth.style.display = "none";
        librarySouth.style.display = "grid";
        current.room = "librarySouth";
        moveTo(c1);
        checkWhichTilesShouldBeIncluded();
    } else  {
        bump(down);
    }
}

function playerToD8() {
    if (current.room === "hypotheticalRoom") {}
    else if (current.room === "gardenAccess") {
        room.size = "oneBySeven";
        gardenAccess.style.display = "none";
        storageAccess.style.display = "grid";
        current.room = "storageAccess";
        moveTo(d1);
        checkWhichTilesShouldBeIncluded();
        door.play();
    }
    else if (current.room === "bossHall1") {
        room.size = "threeBySeven";
        bossHall1.style.display = "none";
        bossHall2.style.display = "grid";
        current.room = "bossHall2";
        moveTo(b1);
        checkWhichTilesShouldBeIncluded();
        door.play();
    }
    else if (current.room === "upperFloorLanding") {
        room.size = "threeBySeven";
        upperFloorLanding.style.display = "none";
        bossHall1.style.display = "grid";
        current.room = "bossHall1";
        moveTo(d1);
        checkWhichTilesShouldBeIncluded();
        door.play();
    }
    else if (current.room === "volcano") {
        room.size = "sevenByOne";
        volcano.style.display = "none";
        hallOfDoors.style.display = "grid";
        current.room = "hallOfDoors";
        checkWhichTilesShouldBeIncluded();
        door.play();
        inABattle.ruby = false;
        unhighlightAll();
    }
    else if (current.room === "groundFloorLanding") {
        room.size = "sevenBySeven";
        fountainRoom.style.display = "grid";
        groundFloorLanding.style.display = "none";
        current.room = "fountainRoom";
        checkWhichTilesShouldBeIncluded();
        door.play();
    }
    else if (current.room === "fountainRoom") {
        /*
        if (!dialogue.boyHiden) {
            dialogue.boyMoveAfterMerchantConvComplete = true;
            dialogue.boyHiden = true;
            asher.style.display = "none";
        }
            */
        door.play();
        room.size = "sevenBySeven";
        fountainRoom.style.display = "none";
        stainedGlassMarket.style.display = "grid";
        current.room = "stainedGlassMarket";
        moveTo(d1);
        checkWhichTilesShouldBeIncluded();
        door.play();
    }
    else if (current.room === "libraryNorth") {
        room.size = "sevenBySeven";
        libraryNorth.style.display = "none";
        librarySouth.style.display = "grid";
        current.room = "librarySouth";
        moveTo(d1);
        checkWhichTilesShouldBeIncluded();
    }
    else if (current.room === "stainedGlassMarket") {
        room.size = "sevenByThree";
        stainedGlassMarket.style.display = "none";
        largeHallway.style.display = "grid";
        current.room = "largeHallway";
        moveTo(d1);
        movement.tempPrevent = true;
        checkWhichTilesShouldBeIncluded();
        door.play();
    }  else  {
        bump(down);
    }
}
function playerToE8() {
    if (current.room === "hypotheticalRoom") {}
    else if (current.room === "libraryNorth") {
        room.size = "sevenBySeven";
        libraryNorth.style.display = "none";
        librarySouth.style.display = "grid";
        current.room = "librarySouth";
        moveTo(e1);
        checkWhichTilesShouldBeIncluded();
    }
    else  {
        bump(down);
    }
}
function playerToF8() {
    if (current.room === "hypotheticalRoom") {} else  {
        bump(down);
    }
}
function playerToG8() {
    if (current.room === "hypotheticalRoom") {}
    else if (current.room === "libraryNorth") {
        room.size = "sevenBySeven";
        libraryNorth.style.display = "none";
        librarySouth.style.display = "grid";
        moveTo(g1);
        current.room = "librarySouth";
        checkWhichTilesShouldBeIncluded();
    }
    else  {
        bump(down);
    }
}


function checkIfPlayerIsOnTheTable() {
    if (current.room === "meadHallEast") {
        if (player.position === "a3" || player.position === "a4" || player.position === "a5" || player.position === "b3" || player.position === "b4" || player.position === "b5" || player.position === "c3" || player.position === "c4" || player.position === "c5" || player.position === "d3" || player.position === "d4" || player.position === "d5" || player.position === "e3" || player.position === "e4" || player.position === "e5") {
            player.onTable = true;
        } else {
            player.onTable = false;
        }
    } else if (current.room === "meadHallWest") {
        if (player.position === "f3" || player.position === "f4" || player.position === "f5" || player.position === "g3" || player.position === "g4" || player.position === "g5" || player.position === "c3" || player.position === "c4" || player.position === "c5" || player.position === "d3" || player.position === "d4" || player.position === "d5" || player.position === "e3" || player.position === "e4" || player.position === "e5") {
            player.onTable = true;
        } else {
            player.onTable = false;
        }
    } else {
        player.onTable = false;
    }
}
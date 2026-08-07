

const mana = {
    current: 160,
    max: 160,
    costOfBlink: 30,
    costOfGlamor: 6,
    damageOfPulverize: 87,
    costOfPulverize: 100,
    costOfLevitate: 20,
    hotkeys: true,
}

const selected = {
       tile: "",
       spell: false,
}

const highlightableTilesInclude = {
    a1: false,
}

const nonPitTilesLibraryNorth = ["a1","a2","a3","a4","a5","a6","a7","g1","g2","g3","g4","g5","g6","g7","b1","b2","c1","c2","d1","d2","e1","e2","f1","f2",]
const nonPitTilesLibrarySouth = ["a1","a2","a3","a4","a5","a6","a7","g1","g2","g3","g4","g5","g6","g7","b6","b7","c7","c6","d7","d6","e6","e7","f7","f6",]

const tilesUnderAttack = [];

const boyBlink = {
    bloop: false,
}

const extantTiles = {
    allowTileHover: false,
}



function selectBlink() {
    selected.spell = "blink";
}

function selectLevitate() {
    selected.spell = "levitate";
}

function selectGlam() {
    selected.spell = "glamor";
}

function selectPulverize() {
    selected.spell = "pulverize";
}

function castSpell() {
    if (extantTiles.allowTileHover) {

        //Blink
        if (selected.spell === "blink") {
                if (player.position !== selected.tile) {
                    if (mana.current >= mana.costOfBlink) {
                        mana.current -= mana.costOfBlink;
                        player.position = selected.tile;
                        updateMana();
                        blinkThePlayer();
                        blinkBloop.play();
                        if (boy.willFollow) {
                            //play blinkBloop next turn
                            boy.willBlink = true;
                        }
                        if (current.room === "libraryNorth" || current.room === "librarySouth") {
                            if (selected.tile === "c4" || selected.tile === "d4" || selected.tile === "e4") {
                                player.inPit = true;
                            }
                        } if (current.room === "librarySouth") {
                            if (selected.tile === "c1" || selected.tile === "c2" || selected.tile === "c3" || selected.tile === "d1" || selected.tile === "d2" || selected.tile === "d3" || selected.tile === "e1" || selected.tile === "e2" || selected.tile === "e3") {
                                player.inPit = true;
                            }
                        } if (current.room === "libraryNorth") {
                            if (selected.tile === "c5" || selected.tile === "c6" || selected.tile === "c7" || selected.tile === "d7" || selected.tile === "d6" || selected.tile === "d5" || selected.tile === "e5" || selected.tile === "e6" || selected.tile === "e7") {
                                player.inPit = true;
                            }
                        } if (current.room === "libraryNorth") {
                            if (nonPitTilesLibraryNorth.includes(selected.tile)) {
                                player.inPit = false;
                            }
                        } if (current.room === "librarySouth") {
                            if (nonPitTilesLibrarySouth.includes(selected.tile)) {
                                player.inPit = false;
                            }
                        }
                    } else {
                        lowMana.play();
                    }
                }
                //deselectSpellAndUnhighlightTile();
            }
        
        //Glamor
        if (selected.spell === "glamor") {
            if (player.position === selected.tile) {
                    if (!dialogue.playerHasFreshenedUp) {
                        castGlamor();
                        dialogue.playerHasFreshenedUp = true;
                    } else if (!dialogue.yesIveAlreadyFreshenedUp) {
                        alert("I've already glamored myself, I don't need to again");
                        dialogue.yesIveAlreadyFreshenedUp = true;
                    } else {
                        invalidTarget.play();
                    }
                } else if (current.room === "coatRoom") {
                    if (selected.tile === "c3") {
                        if (!dialogue.treeGlowUp) {
                            castGlamor();
                            alert("ooh la la!");
                            dialogue.treeGlowUp = true;
                        } else if (!dialogue.treeGlowUp2) {
                            castGlamor();
                            alert("ooh la LA!");
                            dialogue.treeGlowUp2 = true;
                        }
                    } else if (selected.tile === "c1" || selected.tile === "c2" || selected.tile === "e1" || selected.tile === "e2") {
                        if (!dialogue.coatGlowUp) {
                            castGlamor();
                            alert("ooh la LA LA LA!");
                            dialogue.coatGlowUp = true;
                        }
                    }
                } else {
                    invalidTarget.play();
                }
                deselectSpellAndUnhighlightTile();
        }
        //end of glam ^

        if (selected.spell === "levitate") {
            if (player.position === selected.tile) {
                    token.src = "assets/sprites/clover-levitate.png"
                    mana.current -= mana.costOfLevitate;
                    mana.levitating = true;
                    updateMana();
                    floatCan();
                } else if (player.previousPosition === selected.tile && dialogue.boyIsFollowing) {
                    alert("I'm floating!");
                } else {
                    invalidTarget.play();
                }
                deselectSpellAndUnhighlightTile();
        }
        //end of levitate^

        if (selected.spell === "pulverize") {
            if (player.position === selected.tile) {
                if (!dialogue.terribleIdea) {
                    alert("Pulverize is the highest damage spell you know other than exsanguinate. It's a highly effective spell for destroying stone structures. I'm sure it would have only positive effects on your flesh and bones.");
                    alert("But what if it feels good?");
                    dialogue.terribleIdea = true;
                } else if (!dialogue.terribleIdea2) {
                    alert("Maybe just a little.");
                    alert("You cannot cast *a little* pulverize");
                    dialogue.terribleIdea2 = true;
                } else if (!dialogue.terribleIdea3) {
                    if (mana.current >= mana.costOfPulverize) {
                    alert("AUGGH JESUS!");
                    dialogue.terribleIdea3 = true;
                    mana.current -= mana.costOfPulverize;
                    health.current -= mana.damageOfPulverize;
                    updateMana();
                    updateHealth();
                    } else {
                        lowMana.play();
                    }
                } else {
                    invalidTarget.play();
                }
                
            } else if (current.room === "entryHall") {
                if (selected.tile === "d1") {
                    if (!dialogue.theyreEvenNow) {
                        if (mana.current >= mana.costOfPulverize) {
                        mana.current -= mana.costOfPulverize;
                        updateMana();
                        jackalStatue.style.display = "none";
                        rubble.style.display = "block";
                        crumble.play();
                        nowTheyreEven();
                        dialogue.theyreEvenNow = true;
                        } else {
                            lowMana.play();
                        }
                    }
                } else if (selected.tile === "e1") {
                    alert("Torimir probably wouldn't care if I smashed his statue. But I would care. It would make them assymetical.")
                } else if (selected.tile === "f1") {
                    alert("Civet is special kind of freak, but I have nothing against her. I'm not going to bust her bust.")
                    alert("This is a full-bodied statue, a bust is a --")
                    alert("I know!!!!")
                } else if (selected.tile === "g1") {
                    alert("Cerulia is a fucking sweetheart. Not only would I not desicrate her statue, I would personally pulverize anyone who did.")
                } else if (selected.tile === "e5") {
                    alert("I'm tight with Amaranta. Not about to pulverize her statue. Not that she ever comes here. Most of the animals never leave their moons.")
                } else if (selected.tile === "f5") {
                    alert("Lady Ag is also a strange one. Of all the animals, she would certainly be the most upset if her statue were vandalized.")
                } else if (selected.tile === "g5") {
                    alert("I think Viper is just midunderstood. But they have a strong sense of honor. They've never set foot in Heron's house as long as it's stood, but I won't destroy their statue.")
                    alert("Technically, Viper has never set foot anywhere.")
                    alert("Fuck <off>!")
                }
            }
            deselectSpellAndUnhighlightTile();
        }
        //end of pulverize ^
    }
}

function deselectSpellAndUnhighlightTile() {
    selected.spell = false;
    checkWhichTilesShouldBeIncluded();
}

function stopFloating() {
    mana.levitating = false;
    mana.current = 0;
    token.src = "assets/sprites/clover.png";
}

function castGlamor() {
    if (mana.current >= mana.costOfGlamor) {
        mana.current -= mana.costOfGlamor;
        updateMana();
        glam.play();
    } else {
        lowMana.play();
    }
}

function checkLevitation() {
    if (mana.levitating) {
        mana.current -= 5;
        if (mana.current <= 0) {
            stopFloating();
        }
    }
}

function highlightA1() {
    if (selected.spell) {
        if (highlightableTilesInclude.a1) {
            a1.style.opacity = 0.8;
            selected.tile = "a1";
            extantTiles.allowTileHover = true;
            }
    }
}

function unhighlightA1() {
if (selected.spell) {
       if (highlightableTilesInclude.a1) {
    a1.style.opacity = 0.15;
selected.tile = "";
extantTiles.allowTileHover = false;
}}
}

function highlightA2() {
if (selected.spell) {
        if (highlightableTilesInclude.a2) {
    a2.style.opacity = 0.8;
    selected.tile = "a2";
    extantTiles.allowTileHover = true;
    //pasteMe
}}}


function unhighlightA2() {
if (selected.spell) {
    if (highlightableTilesInclude.a2) {
    a2.style.opacity = 0.1;
    extantTiles.allowTileHover = false;
selected.tile = "";
    //pasteMe
}}
}

function highlightA3() {
if (selected.spell) {
    if (highlightableTilesInclude.a3) {
    a3.style.opacity = 0.8;
    selected.tile = "a3";
    extantTiles.allowTileHover = true;
    //pasteMe
    }
}}

function unhighlightA3() {
if (selected.spell) {
    
    if (highlightableTilesInclude.a3) {
a3.style.opacity = 0.15
    extantTiles.allowTileHover = false;
selected.tile = "";
    }}
}

function highlightA4() {
if (selected.spell) {
    if (highlightableTilesInclude.a4) {
        a4.style.opacity = 0.8
    extantTiles.allowTileHover = true;
        selected.tile = "a4";
    extantTiles.allowTileHover = true;
    }
}}

function unhighlightA4() {
if (selected.spell) {
    if (highlightableTilesInclude.a4) {
            a4.style.opacity = 0.1
    extantTiles.allowTileHover = false;
selected.tile = "";
    }
    }
}

function highlightA5() {
if (selected.spell) {
    if (highlightableTilesInclude.a5) {
            a5.style.opacity = 0.8;
            selected.tile = "a5";
            extantTiles.allowTileHover = true;

    }}
}

function unhighlightA5() {
if (selected.spell) {
    if (highlightableTilesInclude.a5) {
            a5.style.opacity = 0.15;
            extantTiles.allowTileHover = false;
selected.tile = "";

    }}
}

function highlightA6() {
if (selected.spell) {
    if (highlightableTilesInclude.a6) {
            a6.style.opacity = 0.8;
            extantTiles.allowTileHover = true;
            selected.tile = "a6";

    }}
}

function unhighlightA6() {
if (selected.spell) {
    if (highlightableTilesInclude.a6) {
            a6.style.opacity = 0.1;
            extantTiles.allowTileHover = false;
selected.tile = "";

    }
}}

function highlightA7() {
if (selected.spell) {
    if (highlightableTilesInclude.a7) {
            a7.style.opacity = 0.8;
            extantTiles.allowTileHover = true;
            selected.tile = "a7";
    }
    }
}

function unhighlightA7() {
if (selected.spell) {
    if (highlightableTilesInclude.a7) {
            a7.style.opacity = 0.15;
            extantTiles.allowTileHover = false;
selected.tile = "";

    }}
}

function highlightB1() {
if (selected.spell) {
 if (highlightableTilesInclude.b1) {
        b1.style.opacity = 0.8;
        extantTiles.allowTileHover = true;
        selected.tile = "b1";

 }}
}

function unhighlightB1() {
if (selected.spell) {
 if (highlightableTilesInclude.b1) {
        b1.style.opacity = 0.1;
        extantTiles.allowTileHover = false;
selected.tile = "";
 }}
}

function highlightB2() {
if (selected.spell) {
 if (highlightableTilesInclude.b2) {
        b2.style.opacity = 0.8; 
        extantTiles.allowTileHover = true;
selected.tile = "b2";
 }
 }
}

function unhighlightB2() {
if (selected.spell) {
 if (highlightableTilesInclude.b2) {
        b2.style.opacity = 0.15;
        extantTiles.allowTileHover = false;
selected.tile = "";

 }}
}

function highlightB3() {
if (selected.spell) {
 if (highlightableTilesInclude.b3) {
        b3.style.opacity = 0.8; 
        extantTiles.allowTileHover = true;
selected.tile = "b3";

 }}
}

function unhighlightB3() {
if (selected.spell) {
 if (highlightableTilesInclude.b3) {
        b3.style.opacity = 0.1;
        extantTiles.allowTileHover = false;
selected.tile = "";

 }}
}

function highlightB4() {
if (selected.spell) {
 if (highlightableTilesInclude.b4) {
        b4.style.opacity = 0.8; 
        extantTiles.allowTileHover = true;
selected.tile = "b4";

 }}
}

function unhighlightB4() {
if (selected.spell) {
 if (highlightableTilesInclude.b4) {
        b4.style.opacity = 0.15;
        extantTiles.allowTileHover = false;
selected.tile = "";
}
 }
}

function highlightB5() {
if (selected.spell) {
 if (highlightableTilesInclude.b5) {
        b5.style.opacity = 0.8; 
        extantTiles.allowTileHover = true;
selected.tile = "b5";
}
 }
}

function unhighlightB5() {
if (selected.spell) {
 if (highlightableTilesInclude.b5) {
        b5.style.opacity = 0.1;
        extantTiles.allowTileHover = false;
selected.tile = "";

 }}
}

function highlightB6() {
if (selected.spell) {
 if (highlightableTilesInclude.b6) {
        b6.style.opacity = 0.8; 
        extantTiles.allowTileHover = true;
selected.tile = "b6";

 }}
}

function unhighlightB6() {
if (selected.spell) {
 if (highlightableTilesInclude.b6) {
        b6.style.opacity = 0.15;
        extantTiles.allowTileHover = false;
selected.tile = "";

 }
}}

function highlightB7() {
if (selected.spell) {
 if (highlightableTilesInclude.b7) {
        b7.style.opacity = 0.8; 
        extantTiles.allowTileHover = true;
selected.tile = "b7";

 }}
}

function unhighlightB7() {
if (selected.spell) {
 if (highlightableTilesInclude.b7) {
        b7.style.opacity = 0.1;
        extantTiles.allowTileHover = false;
selected.tile = "";

 }}
}

function highlightC1() {
if (selected.spell) {
 if (highlightableTilesInclude.c1) {
        c1.style.opacity = 0.8; 
        extantTiles.allowTileHover = true;
selected.tile = "c1";
}
 }
}

function unhighlightC1() {
if (selected.spell) {
 if (highlightableTilesInclude.c1) {
        c1.style.opacity = 0.15;
        extantTiles.allowTileHover = false;
selected.tile = "";

 }
}}

function highlightC2() {
if (selected.spell) {
 if (highlightableTilesInclude.c2) {
        c2.style.opacity = 0.8; 
selected.tile = "c2";
extantTiles.allowTileHover = true;
 }
}}

function unhighlightC2() {
if (selected.spell) {
 if (highlightableTilesInclude.c2) {
        c2.style.opacity = 0.1;
        extantTiles.allowTileHover = false;
selected.tile = "";
 }}
 
}

function highlightC3() {
if (selected.spell) {
 if (highlightableTilesInclude.c3) {
        c3.style.opacity = 0.8; 
        extantTiles.allowTileHover = true;
selected.tile = "c3";
 }}
}

function unhighlightC3() {
if (selected.spell) {
 if (highlightableTilesInclude.c3) {
        c3.style.opacity = 0.15;
        extantTiles.allowTileHover = false;
selected.tile = "";
 }}
 
}

function highlightC4() {
if (selected.spell) {
 if (highlightableTilesInclude.c4) {
        c4.style.opacity = 0.8; 
        extantTiles.allowTileHover = true;
selected.tile = "c4";

 }}
}

function unhighlightC4() {
if (selected.spell) {
 if (highlightableTilesInclude.c4) {
        c4.style.opacity = 0.1;
        extantTiles.allowTileHover = false;
selected.tile = "";

 }}
}

function highlightC5() {
if (selected.spell) {
 if (highlightableTilesInclude.c5) {
        c5.style.opacity = 0.8; 
        extantTiles.allowTileHover = true;
selected.tile = "c5";
}
 }
}

function unhighlightC5() {
if (selected.spell) {
 if (highlightableTilesInclude.c5) {
        c5.style.opacity = 0.15;
        extantTiles.allowTileHover = false;
selected.tile = "";
}
 }
}

function highlightC6() {
if (selected.spell) {
 if (highlightableTilesInclude.c6) {
        c6.style.opacity = 0.8; 
        extantTiles.allowTileHover = true;
selected.tile = "c6";
}
 }
}

function unhighlightC6() {
if (selected.spell) {
 if (highlightableTilesInclude.c6) {
        c6.style.opacity = 0.1;
         extantTiles.allowTileHover = false;
selected.tile = "";
}
 }
}

function highlightC7() {
if (selected.spell) {
 if (highlightableTilesInclude.c7) {
        c7.style.opacity = 0.8; 
        extantTiles.allowTileHover = true;
selected.tile = "c7";

 }}
}

function unhighlightC7() {
if (selected.spell) {
 if (highlightableTilesInclude.c7) {
        c7.style.opacity = 0.15;
extantTiles.allowTileHover = false;
selected.tile = "";

 }}
}

function highlightD1() {
if (selected.spell) {
 if (highlightableTilesInclude.d1) {
        d1.style.opacity = 0.8; 
        extantTiles.allowTileHover = true;
selected.tile = "d1";

 }}
}

function unhighlightD1() {
if (selected.spell) {
 if (highlightableTilesInclude.d1) {
        d1.style.opacity = 0.1;
        extantTiles.allowTileHover = false;
selected.tile = "";

 }}
}

function highlightD2() {
if (selected.spell) {
 if (highlightableTilesInclude.d2) {
        d2.style.opacity = 0.8; 
        extantTiles.allowTileHover = true;
selected.tile = "d2";
 }}
}

function unhighlightD2() {
if (selected.spell) {
 if (highlightableTilesInclude.d2) {
        d2.style.opacity = 0.15;
        extantTiles.allowTileHover = false;
selected.tile = "";

 }}
}

function highlightD3() {
if (selected.spell) {
 if (highlightableTilesInclude.d3) {
        d3.style.opacity = 0.8; 
        extantTiles.allowTileHover = true;
selected.tile = "d3";
 }
}}

function unhighlightD3() {
if (selected.spell) {
 if (highlightableTilesInclude.d3) {
        d3.style.opacity = 0.1;
        extantTiles.allowTileHover = false;
selected.tile = "";
}
 }
}

function highlightD4() {
if (selected.spell) {
 if (highlightableTilesInclude.d4) {
        d4.style.opacity = 0.8; 
        extantTiles.allowTileHover = true;
selected.tile = "d4";

 }
}}

function unhighlightD4() {
if (selected.spell) {
 if (highlightableTilesInclude.d4) {
        d4.style.opacity = 0.15;
        extantTiles.allowTileHover = false;
selected.tile = "";
}
 }
}

function highlightD5() {
if (selected.spell) {
 if (highlightableTilesInclude.d5) {
        d5.style.opacity = 0.8; 
        extantTiles.allowTileHover = true;
selected.tile = "d5";

 }}
}

function unhighlightD5() {
if (selected.spell) {
 if (highlightableTilesInclude.d5) {
        d5.style.opacity = 0.1;
        extantTiles.allowTileHover = false;
selected.tile = "";

 }
}}

function highlightD6() {
if (selected.spell) {
 if (highlightableTilesInclude.d6) {
        d6.style.opacity = 0.8; 
        extantTiles.allowTileHover = true;
selected.tile = "d6";

 }}
}

function unhighlightD6() {
if (selected.spell) {
 if (highlightableTilesInclude.d6) {
        d6.style.opacity = 0.15;
        extantTiles.allowTileHover = false;
selected.tile = "";

 }}
}

function highlightD7() {
if (selected.spell) {
 if (highlightableTilesInclude.d7) {
        d7.style.opacity = 0.8; 
        extantTiles.allowTileHover = true;
selected.tile = "d7";

 }}
}

function unhighlightD7() {
if (selected.spell) {
 if (highlightableTilesInclude.d7) {
        d7.style.opacity = 0.1;
        extantTiles.allowTileHover = false;
selected.tile = "";

 }}
}


function highlightE1() {
if (selected.spell) {
 if (highlightableTilesInclude.e1) {
        e1.style.opacity = 0.8; 
        extantTiles.allowTileHover = true;
selected.tile = "e1";
}
 }
}

function unhighlightE1() {
if (selected.spell) {
 if (highlightableTilesInclude.e1) {
        e1.style.opacity = 0.15;
        extantTiles.allowTileHover = false;
selected.tile = "";

 }}
}

function highlightE2() {
if (selected.spell) {
 if (highlightableTilesInclude.e2) {  
     e2.style.opacity = 0.8; 
     extantTiles.allowTileHover = true;
selected.tile = "e2";
}
}
}
function unhighlightE2() {
if (selected.spell) {
 if (highlightableTilesInclude.e2) {   
    extantTiles.allowTileHover = false;
     e2.style.opacity = 0.1;
selected.tile = "";
}
}}

function highlightE3() {
if (selected.spell) {
 if (highlightableTilesInclude.e3) {  
    extantTiles.allowTileHover = true;
      e3.style.opacity = 0.8; 
selected.tile = "e3";
}
}}

function unhighlightE3() {
if (selected.spell) {
 if (highlightableTilesInclude.e3) {  
    extantTiles.allowTileHover = false;
      e3.style.opacity = 0.15;
selected.tile = "";
}
}}

function highlightE4() {
if (selected.spell) {
 if (highlightableTilesInclude.e4) {
        e4.style.opacity = 0.8; 
        extantTiles.allowTileHover = true;
selected.tile = "e4";
}
 }
}

function unhighlightE4() {
if (selected.spell) {
 if (highlightableTilesInclude.e4) {
        e4.style.opacity = 0.1;
        extantTiles.allowTileHover = false;
selected.tile = "";
}
 }
}

function highlightE5() {
if (selected.spell) {
 if (highlightableTilesInclude.e5) {
        e5.style.opacity = 0.8; 
        extantTiles.allowTileHover = true;
selected.tile = "e5";

 }}
}

function unhighlightE5() {
if (selected.spell) {
 if (highlightableTilesInclude.e5) {
        e5.style.opacity = 0.15;
        extantTiles.allowTileHover = false;
selected.tile = "";

 }}
}

function highlightE6() {
if (selected.spell) {
 if (highlightableTilesInclude.e6) {
        e6.style.opacity = 0.8; 
        extantTiles.allowTileHover = true;
selected.tile = "e6";

 }
}}

function unhighlightE6() {
if (selected.spell) {
 if (highlightableTilesInclude.e6) {
        e6.style.opacity = 0.1;
        extantTiles.allowTileHover = false;
selected.tile = "";
}
 }
}

function highlightE7() {
if (selected.spell) {
 if (highlightableTilesInclude.e7) {
        e7.style.opacity = 0.8; 
        extantTiles.allowTileHover = true;
selected.tile = "e7";
}
 }
}

function unhighlightE7() {
if (selected.spell) {
 if (highlightableTilesInclude.e7) {
        e7.style.opacity = 0.15;
        extantTiles.allowTileHover = false;
selected.tile = "";

 }}
}

function highlightF1() {
if (selected.spell) {
 if (highlightableTilesInclude.f1) {
        f1.style.opacity = 0.8; 
        extantTiles.allowTileHover = true;
selected.tile = "f1";

 }
}}

function unhighlightF1() {
if (selected.spell) {
 if (highlightableTilesInclude.f1) {
        f1.style.opacity = 0.1;
        extantTiles.allowTileHover = false;
selected.tile = "";

 }}
}

function highlightF2() {
if (selected.spell) {
 if (highlightableTilesInclude.f2) {
    f2.style.opacity = 0.8; 
    extantTiles.allowTileHover = true;
selected.tile = "f2";
}
}}


function unhighlightF2() {
if (selected.spell) {
 if (highlightableTilesInclude.f2) {
        f2.style.opacity = 0.15;
        extantTiles.allowTileHover = false;
selected.tile = "";

 }}
}

function highlightF3() {
if (selected.spell) {
 if (highlightableTilesInclude.f3) {
        f3.style.opacity = 0.8; 
        extantTiles.allowTileHover = true;
selected.tile = "f3";

 }}
}

function unhighlightF3() {
if (selected.spell) {
 if (highlightableTilesInclude.f3) {
        f3.style.opacity = 0.1;
        extantTiles.allowTileHover = false;
selected.tile = "";
}
 }
}

function highlightF4() {
if (selected.spell) {
 if (highlightableTilesInclude.f4) {
        f4.style.opacity = 0.8; 
        extantTiles.allowTileHover = true;
selected.tile = "f4";
}
 }
}

function unhighlightF4() {
if (selected.spell) {
 if (highlightableTilesInclude.f4) {
        f4.style.opacity = 0.15;
        extantTiles.allowTileHover = false;
selected.tile = "";

 }}
}

function highlightF5() {
if (selected.spell) {
 if (highlightableTilesInclude.f5) {
        f5.style.opacity = 0.8; 
        extantTiles.allowTileHover = true;
selected.tile = "f5";

 }
}}

function unhighlightF5() {
if (selected.spell) {
 if (highlightableTilesInclude.f5) {
        f5.style.opacity = 0.1;
        extantTiles.allowTileHover = false;
selected.tile = "";

 }
}}

function highlightF6() {
if (selected.spell) {
 if (highlightableTilesInclude.f6) {
        f6.style.opacity = 0.8; 
selected.tile = "f6";
extantTiles.allowTileHover = true;
}
 }
}

function unhighlightF6() {
if (selected.spell) {
 if (highlightableTilesInclude.f6) {
        f6.style.opacity = 0.15;
        extantTiles.allowTileHover = false;
selected.tile = "";

 }}
}

function highlightF7() {
if (selected.spell) {
 if (highlightableTilesInclude.f7) {
        f7.style.opacity = 0.8; 
        extantTiles.allowTileHover = true;
selected.tile = "f7";
}
 }
}

function unhighlightF7() {
if (selected.spell) {
 if (highlightableTilesInclude.f7) {
        f7.style.opacity = 0.1;
        extantTiles.allowTileHover = false;
selected.tile = "";

 }}
}

function highlightG1() {
if (selected.spell) {
 if (highlightableTilesInclude.g1) {
        g1.style.opacity = 0.8; 
        extantTiles.allowTileHover = true;
selected.tile = "g1";

 }}
}

function unhighlightG1() {
if (selected.spell) {
 if (highlightableTilesInclude.g1) {
        g1.style.opacity = 0.15;
        extantTiles.allowTileHover = false;
selected.tile = "";

 }}
}

function highlightG2() {
if (selected.spell) {
 if (highlightableTilesInclude.g2) {
        g2.style.opacity = 0.8; 
        extantTiles.allowTileHover = true;
selected.tile = "g2";

 }}
}

function unhighlightG2() {
if (selected.spell) {
 if (highlightableTilesInclude.g2) {
        g2.style.opacity = 0.1;
        extantTiles.allowTileHover = false;
selected.tile = "";

 }}
}

function highlightG3() {
if (selected.spell) {
 if (highlightableTilesInclude.g3) {
        g3.style.opacity = 0.8; 
        extantTiles.allowTileHover = true;
selected.tile = "g3";

 }}
}

function unhighlightG3() {
if (selected.spell) {
 if (highlightableTilesInclude.g3) {
        g3.style.opacity = 0.15;
        extantTiles.allowTileHover = false;
selected.tile = "";

 }}
}

function highlightG4() {
if (selected.spell) {
 if (highlightableTilesInclude.g4) {
        g4.style.opacity = 0.8; 
        extantTiles.allowTileHover = true;
selected.tile = "g4";

 }}
}

function unhighlightG4() {
if (selected.spell) {
 if (highlightableTilesInclude.g4) {
        g4.style.opacity = 0.1;
        extantTiles.allowTileHover = false;
selected.tile = "";

 }
}}

function highlightG5() {
if (selected.spell) {
 if (highlightableTilesInclude.g5) {
        g5.style.opacity = 0.8; 
        extantTiles.allowTileHover = true;
selected.tile = "g5";

 }
}}

function unhighlightG5() {
if (selected.spell) {
 if (highlightableTilesInclude.g5) {
        g5.style.opacity = 0.15;
        extantTiles.allowTileHover = false;
selected.tile = "";

 }
}}

function highlightG6() {
if (selected.spell) {
 if (highlightableTilesInclude.g6) {
        g6.style.opacity = 0.8; 
        extantTiles.allowTileHover = true;
selected.tile = "g6";

 }
}}

function unhighlightG6() {
if (selected.spell) {
 if (highlightableTilesInclude.g6) {
        g6.style.opacity = 0.1;
        extantTiles.allowTileHover = false;
selected.tile = "";

 }}
}

function highlightG7() {
if (selected.spell) {
 if (highlightableTilesInclude.g7) {
        g7.style.opacity = 0.8; 
        extantTiles.allowTileHover = true;
selected.tile = "g7";

 }}
}

function unhighlightG7() {
if (selected.spell) {
 if (highlightableTilesInclude.g7) {
        g7.style.opacity = 0.15;
        extantTiles.allowTileHover = false;
selected.tile = "";

 }
}}

function blinkThePlayer() {
        if (player.position === "a1") {
            token.style.transform = "translate(0px,0px)";
        } else if (player.position === "a2") {
            token.style.transform = "translate(0px,80px)";
        } else if (player.position === "a3") {
            token.style.transform = "translate(0px,160px)";
        } else if (player.position === "a4") {
            token.style.transform = "translate(0px,240px)";
        } else if (player.position === "a5") {
            token.style.transform = "translate(0px,320px)";
        } else if (player.position === "a6") {
            token.style.transform = "translate(0px,400px)";
        } else if (player.position === "a7") {
            token.style.transform = "translate(0px,480px)";
            //BBBBBB
            //BBBBBB
        } else if (player.position === "b1") {
            token.style.transform = "translate(80px,0px)";
        } else if (player.position === "b2") {
            token.style.transform = "translate(80px,80px)";
        } else if (player.position === "b3") {
            token.style.transform = "translate(80px,160px)";
        } else if (player.position === "b4") {
            token.style.transform = "translate(80px,240px)";
        } else if (player.position === "b5") {
            token.style.transform = "translate(80px,320px)";
        } else if (player.position === "b6") {
            token.style.transform = "translate(80px,400px)";
        } else if (player.position === "b7") {
            token.style.transform = "translate(80px,480px)";
            //CCCC
            //CCCC
        } else if (player.position === "c1") {
            token.style.transform = "translate(160px,0px)";
        } else if (player.position === "c2") {
            token.style.transform = "translate(160px,80px)";
        } else if (player.position === "c3") {
            token.style.transform = "translate(160px,160px)";
        } else if (player.position === "c4") {
            token.style.transform = "translate(160px,240px)";
        } else if (player.position === "c5") {
            token.style.transform = "translate(160px,320px)";
        } else if (player.position === "c6") {
            token.style.transform = "translate(160px,400px)";
        } else if (player.position === "c7") {
            token.style.transform = "translate(160px,480px)";
            //DDDD
            //DDDD
        } else if (player.position === "d1") {
            token.style.transform = "translate(240px,0px)";
        } else if (player.position === "d2") {
            token.style.transform = "translate(240px,80px)";
        } else if (player.position === "d3") {
            token.style.transform = "translate(240px,160px)";
        } else if (player.position === "d4") {
            token.style.transform = "translate(240px,240px)";
        } else if (player.position === "d5") {
            token.style.transform = "translate(240px,320px)";
        } else if (player.position === "d6") {
            token.style.transform = "translate(240px,400px)";
        } else if (player.position === "d7") {
            token.style.transform = "translate(240px,480px)";
            //EEEE
            //EEEE
        } else if (player.position === "e1") {
            token.style.transform = "translate(320px,0px)";
        } else if (player.position === "e2") {
            token.style.transform = "translate(320px,80px)";
        } else if (player.position === "e3") {
            token.style.transform = "translate(320px,160px)";
        } else if (player.position === "e4") {
            token.style.transform = "translate(320px,240px)";
        } else if (player.position === "e5") {
            token.style.transform = "translate(320px,320px)";
        } else if (player.position === "e6") {
            token.style.transform = "translate(320px,400px)";
        } else if (player.position === "e7") {
            token.style.transform = "translate(320px,480px)";
            //FFF
            //FFF
        }else if (player.position === "f1") {
            token.style.transform = "translate(400px,0px)";
        } else if (player.position === "f2") {
            token.style.transform = "translate(400px,80px)";
        } else if (player.position === "f3") {
            token.style.transform = "translate(400px,160px)";
        } else if (player.position === "f4") {
            token.style.transform = "translate(400px,240px)";
        } else if (player.position === "f5") {
            token.style.transform = "translate(400px,320px)";
        } else if (player.position === "f6") {
            token.style.transform = "translate(400px,400px)";
        } else if (player.position === "f7") {
            token.style.transform = "translate(400px,480px)";
            //GGGG
            //GGGG
        } else if (player.position === "g1") {
            token.style.transform = "translate(480px,0px)";
        } else if (player.position === "g2") {
            token.style.transform = "translate(480px,80px)";
        } else if (player.position === "g3") {
            token.style.transform = "translate(480px,160px)";
        } else if (player.position === "g4") {
            token.style.transform = "translate(480px,240px)";
        } else if (player.position === "g5") {
            token.style.transform = "translate(480px,320px)";
        } else if (player.position === "g6") {
            token.style.transform = "translate(480px,400px)";
        } else if (player.position === "g7") {
            token.style.transform = "translate(480px,480px)";
        }
    }


//spell sidebar menu
function high(item) {
    item.style.border = "1px solid white";
}
function unhigh(item) {
    item.style.border = "1px solid rgba(255, 255, 255, 0.01)";
}
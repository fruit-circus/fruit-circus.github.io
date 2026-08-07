

const mana = {
    current: 160,
    max: 160,
    //cost of spell
    costOfBlink: 30,
    costOfDispel: 20,
    costOfAbsoluteZero: 142,
    costOfHeal: 52,
    costOfGlamor: 6,
    costOfPulverize: 100,
    costOfLevitate: 20,
    costOfFlare: 20,
    costOfSheild: 50,
    costOfLevitatePerTurn: 5,
    costOfMoonbolt: 30,
    //damage/effectiveness
    damageOfFlare: 10,
    damageOfPulverize: 87,
    effectivenessOfHeal: 24,
    effectivenessOfShield: 90,
    durationOfAbsoluteZero: 3,
    damageOfMoonbolt: 21,
    //hotkeys
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

function colorCurrentSpell(spell) {
    spell.classList.add("selected");
}

function discoverSpell(thisSpell) {
    thisSpell.style.display = "block";
}

function updateSpellCosts() {
    blinkcost.innerHTML = mana.costOfBlink;
    azcost.innerHTML = mana.costOfAbsoluteZero;
    azdur.innerHTML = mana.durationOfAbsoluteZero;
    pulvcost.innerHTML = mana.costOfPulverize;
    dispelcost.innerHTML = mana.costOfDispel;
    shieldcost.innerHTML = mana.costOfSheild;
    flaircost.innerHTML = mana.costOfGlamor;
    flarecost.innerHTML = mana.costOfFlare;
    mooncost.innerHTML = mana.costOfMoonbolt;
    moondamage.innerHTML = mana.damageOfMoonbolt;
    healcost.innerHTML = mana.costOfHeal;
    floatcost.innerHTML = mana.costOfLevitate;
    floatcostper.innerHTML = mana.costOfLevitatePerTurn;
    shieldpercent.innerHTML = mana.effectivenessOfShield;
    healeffect.innerHTML = mana.effectivenessOfHeal;
    flaredamage.innerHTML = mana.damageOfFlare;
    pulvdamage.innerHTML = mana.damageOfPulverize;
}

function selectSpell(spell) {
    //color the spell in the menu
    if (!spell.classList.contains("selected")) {
        let spellString = String(spell.id);
        selected.spell = spellString;
        console.log("Selected spell:", selected.spell);
        click.play();
        Array.from(spellSheet.children).forEach(child => {
            child.classList.remove("selected");
            child.style.border = "2px dotted white";
            spellDivider1.style.border = "none";
            spellDivider.style.border = "none";
            child.style.backgroundColor = "transparent";
        });
        spell.classList.add("selected");
        spell.style.border = "2px solid white";
        spell.style.backgroundColor = "var(--system-color1a)";
        spell.style.color = "white";
        //make tiles highlight on hover
        extantTiles.allowTileHover = true;
       
    } else {
        selected.spell = "";
        unclick.play();
        spell.classList.remove("selected");
        spell.style.border = "2px dotted white";
        spell.style.backgroundColor = "transparent";
        extantTiles.allowTileHover = false;
        unhighlight(currentTileIfAny);
    }
}

var currentTileIfAny = null;

//is this still used?
function high(item) {
    item.style.border = "2px solid white";
}
function unhigh(item) {
    if (!item.classList.contains("selected")) {
        item.style.border = "2px dotted white";
    }
}

function castSpell(tile) {
    if (extantTiles.allowTileHover) {
        //Heal
        if (selected.spell === "heal") {
            if (player.position === tile) {
                if (mana.current >= mana.costOfHeal) {
                    if (health.current < health.max) {
                        heal.play();
                        mana.current -= mana.costOfHeal;
                        health.current += mana.effectivenessOfHeal;
                        if (health.current > health.max) {
                            health.current = health.max;
                        }
                        theRelentlessMarchOfTime();
                        updateMana();
                        updateHealth();
                    } else {
                        invalidTarget.play();
                    }
                } else {
                    lowMana.play();
                }
            } else if (boy.position === tile) {
                alert("you healed BOY for " + mana.effectivenessOfHeal + " points");
            } else {
                invalidTarget.play();
            }
        }
        //end of heal ^

        //Dispel
        if (selected.spell === "dispel") {
            if (mana.current >= mana.costOfDispel) {
                if (player.position === tile) {
                    if (mana.levitating) {
                        mana.levitating = false;
                        token.src = "assets/sprites/clover.png";
                        //and adjust the z-index of the token if that decides to be necessary
                        dispel.play();
                        mana.current -= mana.costOfDispel;
                        theRelentlessMarchOfTime();
                        updateMana();
                    }
                    if (player.isGlamored) {
                        unGlamor(); //make this (sprite for pajamas)
                        dispel.play();
                        mana.current -= mana.costOfDispel;
                        theRelentlessMarchOfTime();
                        updateMana();
                    }
                } else if (current.room === "coatRoom" && tile === "c3" && mana.treeFloating) {
                    dispel.play();
                    updateMana();
                    tree.style.display = "block";
                    treeFloat.style.display = "none";
                    mana.treeFloating = false;
                } /*add more else ifs here*/ else {
                    invalidTarget.play();
                }
            } else {
                lowMana.play();
            }
                
        }
        //end of heal ^

        //Blink
        if (selected.spell === "blink") {
            console.log("Blink", tile)
                if (player.position !== tile) {
                    if (mana.current >= mana.costOfBlink) {
                        checkIfDestinationIsAllowed();
                        if (mana.destinationIsAllowed) {
                            mana.current -= mana.costOfBlink;
                            player.position = tile;
                            theRelentlessMarchOfTime();
                            updateMana();
                            blinkTo(tile);
                            blinkBloop.play();
                            if (boy.willFollow) {
                                //play blinkBloop next turn
                                boy.willBlink = true;
                            }
                            if (current.room === "libraryNorth" || current.room === "librarySouth") {
                                if (tile === "c4" || tile === "d4" || tile === "e4") {
                                    player.inPit = true;
                                }
                            } if (current.room === "librarySouth") {
                                if (tile === "c1" || tile === "c2" || tile === "c3" || tile === "d1" || tile === "d2" || tile === "d3" || tile === "e1" || tile === "e2" || tile === "e3") {
                                    player.inPit = true;
                                }
                            } if (current.room === "libraryNorth") {
                                if (tile === "c5" || tile === "c6" || tile === "c7" || tile === "d7" || tile === "d6" || tile === "d5" || tile === "e5" || tile === "e6" || tile === "e7") {
                                    player.inPit = true;
                                }
                            } if (current.room === "libraryNorth") {
                                if (nonPitTilesLibraryNorth.includes(tile)) {
                                    player.inPit = false;
                                }
                            } if (current.room === "librarySouth") {
                                if (nonPitTilesLibrarySouth.includes(tile)) {
                                    player.inPit = false;
                                }
                            }
                        } else {
                            invalidTarget.play();
                        }
                    } else {
                        lowMana.play();
                    }
                } else {
                    invalidTarget.play();
                }
                //deselectSpellAndUnhighlightTile();
            }
            //end of blink ^
        
        //Glamor
        if (selected.spell === "glamor") {
            if (mana.current >= mana.costOfGlamor) {
            if (player.position === tile) {
                    if (!dialogue.playerHasFreshenedUp) {
                        castGlamor();
                        dialogue.playerHasFreshenedUp = true;
                        player.isGlamored = true;
                    } else if (!dialogue.yesIveAlreadyFreshenedUp && player.isGlamored) {
                        alert("I've already glamored myself, I don't need to again");
                        dialogue.yesIveAlreadyFreshenedUp = true;
                    } else if (player.isGlamored) {
                        invalidTarget.play();
                    } else if (!player.isGlamored) {
                        castGlamor();
                        player.isGlamored = true;
                    }
                } else if (current.room === "coatRoom") {
                    if (tile === "c3") {
                        if (!dialogue.treeGlowUp) {
                            castGlamor();
                            converse(treeGlam1, treeGlam1v);
                            dialogue.treeGlowUp = true;
                        } else if (!dialogue.treeGlowUp2) {
                            castGlamor();
                            converse(treeGlam2, treeGlam2v);
                            dialogue.treeGlowUp2 = true;
                        }
                    } else if (tile === "c1" || tile === "c2" || tile === "e1" || tile === "e2") {
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
        } else {
            lowMana.play();
        }
    }
        //end of glam ^

        if (selected.spell === "levitate") {
            if (mana.current >= mana.costOfLevitate) {
               if (player.position === tile) {
                    if (!mana.levitating) { //if player is not already levitating
                        token.src = "assets/sprites/clover-levitate.png"
                        mana.current -= mana.costOfLevitate;
                        mana.levitating = true;
                        updateMana();
                        floatCan();
                    } else {
                        invalidTarget.play(); //player is already levitating
                    }
                } else if (player.previousPosition === tile && dialogue.boyIsFollowing) {
                    alert("Boy: I'm floating!");
                } else if (current.room === "coatRoom" && tile === "c3" && !mana.treeFloating) {
                    tree.style.display = "none";
                    treeFloat.style.display = "block";
                    mana.treeFloating = true;
                    mana.current -= mana.costOfLevitate;
                    updateMana();
                } /*add more else ifs here */ else {
                    invalidTarget.play();
                }
            } else {
                lowMana.play();
            }
            deselectSpellAndUnhighlightTile();
        }
        //end of levitate^

        if (selected.spell === "pulverize") {
                console.log(tile)
                console.log(player.position)
            if (player.position === tile) {
                if (!dialogue.terribleIdea) {
                    pulverizeGood();
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
                if (tile === "d1") {
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
                } else if (tile === "e1") {
                    alert("Torimir probably wouldn't care if I smashed his statue. But I would care. It would make them assymetical.")
                } else if (tile === "f1") {
                    alert("Civet is special kind of freak, but I have nothing against her. I'm not going to bust her bust.")
                    alert("This is a full-bodied statue, a bust is a --")
                    alert("I know!!!!")
                } else if (tile === "g1") {
                    alert("Cerulia is a fucking sweetheart. Not only would I not desicrate her statue, I would personally pulverize anyone who did.")
                } else if (tile === "e5") {
                    alert("I'm tight with Amaranta. Not about to pulverize her statue. Not that she ever comes here. Most of the animals never leave their moons.")
                } else if (tile === "f5") {
                    alert("Lady Ag is also a strange one. Of all the animals, she would certainly be the most upset if her statue were vandalized.")
                } else if (tile === "g5") {
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


function blinkTo(tileId) {
    movement.tempPrevent = false;
    player.hittingAWall = false;
    player.position = String(tileId);
    document.getElementById(tileId).appendChild(document.getElementById("token"));
}

function deselectSpellAndUnhighlightTile() {
    selected.spell = false;
    //checkWhichTilesShouldBeIncluded();
}

function stopFloating() {
    mana.levitating = false;
    mana.current = 0;
    token.src = "assets/sprites/clover.png";
    //token.style.zIndex = 0; 
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
        mana.current -= mana.costOfLevitatePerTurn;
        if (mana.current <= 0) {
            stopFloating();
        }
    }
}

function checkIfDestinationIsAllowed() {
    mana.destinationIsAllowed = true;
    if (current.room === "libraryNorth") {
        if (selected.tile === "b3" || selected.tile === "b4" || selected.tile === "b5" || selected.tile === "b6" || selected.tile === "b7" || selected.tile === "c3" || selected.tile === "d3" || selected.tile === "e3" || selected.tile === "f3" || selected.tile === "f4" || selected.tile === "f5" || selected.tile === "f6" || selected.tile === "f7") {
            mana.destinationIsAllowed = false;
        }
    } else if (current.room === "librarySouth") {
        if (selected.tile === "b1" || selected.tile === "b2" || selected.tile === "b3" || selected.tile === "b4" || selected.tile === "b5" || selected.tile === "c5" || selected.tile === "d5" || selected.tile === "e5" || selected.tile === "f5" || selected.tile === "f4" || selected.tile === "f3" || selected.tile === "f2" || selected.tile === "f1") {
            mana.destinationIsAllowed = false;
        }
    }
    console.log(mana.destinationIsAllowed);
}

//magic
const highlightableTiles = []; //tile checker

function highlight(tile) {
    currentTileIfAny = tile;
    let tile1 = String(tile.id).charAt(0);
    let tile2 = String(tile.id).charAt(1);
    let theTile = tile1 + tile2;
    if (extantTiles.allowTileHover) {
        if (highlightableTiles.includes(theTile)) {
            tile.style.backgroundColor = "var(--magicTileColor)";
            tile.style.opacity = ".5";
        }   
    }
}

function unhighlight(tile) {
    tile.style.opacity = "0.01";
    tile.style.backgroundColor = "black";
}


/*
function absoluteZero() {
    mana.absoluteZero = true;
    checkWhichTilesShouldBeIncluded();
    removePlayerCurrentTileFromHighlightedSelection();
    falsifyAll(); //so that you cant unselect tiles by hovering over them
}

function removePlayerCurrentTileFromHighlightedSelection() {
    unhighlightGeneral(player.position)
}

function unhighlightGeneral(tile) {
    tile.style.opacity = 0.15; //error: tile.style is undefined
}
    */
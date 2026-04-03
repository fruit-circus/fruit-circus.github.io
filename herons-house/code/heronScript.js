
function theRelentlessMarchOfTime() {
    //boyMove(); //independant prescripted movement
    boyFollow();
    checkLevitation();
    manaRegenerate();
    healthRegenerate();
    tickClock();
    battleTimerIncrement();
    journeyDownstream();
    boyToStainedGlassMarket();
    if (player.position === boy.position) {
        excuseMe.play();
    }
    
}

const game = {
    started: false,
    skipStarters: false, //tester
    skipBoyEntry: false, //tester
}


/*
Template for taking objects
    if (!inv.whateverUniqueVariable) {
        boxTake.play();
        emptyBox.style.display = "none";
        take(inv.box);
        inv.whateverUniqueVariable = true;
    }
*/



//temp. play new game will be triggered with image map, but for now it's enter or space
document.addEventListener('DOMContentLoaded', () => {
    if (game.skipStarters) {
        starters.style.display = "none";
        dialogue.playerHasFreshenedUp = true;

    } if (game.skipBoyEntry) {
        dialogue.boyEnterConv = true;
        dialogue.boyEnter = true;
        dialogue.boyInFountainRoom = true;
        dialogue.imHeron = true;
        dialogue.heronIsntHere = true;
        dialogue.reconnectLessThanAWeek = true;
        dialogue.lookOutWindow = true;
        dialogue.searchMemories = true;
        dialogue.boyInFountainRoomComplete = true;
        dialogue.asymetrical = true;

    } else {
        document.addEventListener('keydown', function(event) {
        if (event.key === 'Enter' || event.key === ' ') {
            startNewGame();
        }
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('keydown', function(event) {
    if (event.key === '4') {
        if (!mana.spellMenuOpen) {
            openSpellMenu();
            mana.spellMenuOpen = true;
        } else {
            closeSpellMenu();
            mana.spellMenuOpen = false;
        }
    }
    if (event.key === '3') {
        if (!game.inventoryMenuOpen) {
            openInventory();
            game.inventoryMenuOpen = true;
        } else {
            closeInventory();
            game.inventoryMenuOpen = false;
        }
    }
    if (dialogue.binaryChoicesActive) {
        if (event.key === '1') {
            dialogueOption1();
        } else if (event.key === '2') {
            dialogueOption2();
        }
    }
    if (dialogue.canUseZtoWait) {
        if (event.key === 'z') {
            theRelentlessMarchOfTime();
        }
    } 
    
    });
});


/*
document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('click', function(item) {
        console.log(item);
    })});
    */

function startNewGame() {
    if (!game.started) {
        game.started = true;
        loadscreen.style.display = "none";
        setTimeout(function() {
            nightcard.style.display = "none";
            dialogue.openingTimeout = true;
            opening1.style.display = "block";
            opening1v.play();
        }, 4000);
    }
}



//randomize location of certain npcs
document.addEventListener("DOMContentLoaded", (event) => {  
    //randomizeNPCPlacement();
});

function randomizeNPCPlacement() {
    randomNumber = (Math.floor(Math.random() * 2));
    switch (randomNumber) {
        case 0:
            //a2
            boy.room = "entryHall";
            npc.style.transform = "translate(0px,80px)";
            console.log("npc1 is in entry hall");
            entryHall.appendChild(npc); //move "npc" in the html
            break;
        case 1:
            //a3
            boy.room = "fountainRoom";
            npc.style.transform = "translate(0px,160px)";
            fountainRoom.appendChild(npc);
            console.log("npc1 is in fountain room");
            break;
    }
}


//prevent spacebar scrolling
window.addEventListener('keydown', function(e) {
  if(e.keyCode == 32 && e.target == document.body) {
    e.preventDefault();}}); 

function thocker() { //THOCKERRRRRR!
    const thocking = [thock, thock2, thock3];
    const randomThockdex = Math.floor(Math.random() * thocking.length);
    const anyThock = thocking[randomThockdex];
    if (!mana.levitating) {
        anyThock.play();
    }
}


function ouch() { //for player
    const ouchers = [ouch1, ouch2];
    const randomOuchdex = Math.floor(Math.random() * ouchers.length);
    const anyOuch = ouchers[randomOuchdex];
    anyOuch.play();
}

function bouch() { //(boy ouch) (make sure the variable names work. I haven't changed them and it might not like duplicates)
    const ouchers = [bouch1, bouch2];
    const randomOuchdex = Math.floor(Math.random() * ouchers.length);
    const anyOuch = ouchers[randomOuchdex];
    anyOuch.play();
}

//tick the clock every other turn, unless you're on earth
function tickClock() {
    if (clock.earth) {
        clockTicks();
    } else {
        if (!clock.ticks) {
            clock.ticks = true;
            clockTicks();
        } else if (clock.ticks) {
            clock.ticks = false;
        }
    }
    
}


const clock = {
    ticks: false,
}

const inv = {
    currentWeight: 0,
    maxCapacity: 56,
    pumpkin: {
        name: "pumpkin",
        weight: 4,
    },
    box: {
        name: "empty box",
        weight: 0.5,
    },
    rustyDaggars: {
        name: "rusty daggars",
        weight: 2,
    },
    throwingStars: {
        name: "dinted throwing stars",
        weight: 1,
    },
    fossilizedRoe: {
        name: "fossilized roe",
        weight: 0.8,
    },
    crumpledNote: {
        name: "crumpled note",
        weight: 0.1,
    },
    quarterstaff: {
        name: "quarterstaff",
        weight: 1.8,
    },
}

const inventoryItems = [];

const health = {
    current: 120,
    max: 120,
}

const boyHealth = {
    current: 18,
    max: 18,
}

const armor = {
    current: 2,
}

function openSpellMenu() {
    spellsidebar.style.display = "block";
}

function closeSpellMenu() {
    spellsidebar.style.display = "none";
}


function openInventory() {
    inventorysidebar.style.display = "block";
    //enable arrow keys to scroll up and down the list of items
    //enable z,x, and/or c to do things (select item, drop item)
}

function closeInventory() {
    inventorysidebar.style.display = "none";
}

function checkCapacity() { //carry capacity
    //Math.round(inv.currentWeight);
    updateCapacityCounter();
    if (inv.currentWeight >= inv.maxCapacity) {
        console.log(inv.currentWeight);
        imCarryingTooMuch();
        //consequence
    } else if (inv.currentWeight <= inv.maxCapacity) {
        console.log(inv.currentWeight);
        //repeal consequence
    } 
}

function updateCapacityCounter() {
    inv.roundedWeight = Math.round(inv.currentWeight * 10) / 10;
    document.getElementById("carry-capacity").innerHTML = inv.roundedWeight + "/" + inv.maxCapacity;
}

function updateHealth() {
    health.roundedCurrent = Math.round(health.current * 10) / 10;
    document.getElementById("health-readout").innerHTML = "Health: " + health.roundedCurrent + "/" + health.max;
    let healthBar = document.getElementById("health-bar");
    healthBar.style.width = health.roundedCurrent + "px";
}

function updateMana() {
    mana.roundedCurrent = Math.round(mana.current * 10) / 10;
    document.getElementById("mana-readout").innerHTML = "Mana: " + mana.roundedCurrent + "/" + mana.max;
    let manaBar = document.getElementById("mana-bar");
    manaBar.style.width = mana.roundedCurrent + "px";
}


function updateBoyHealth() {
    boyHealth.roundedCurrent = Math.round(boyHealth.current * 10) / 10;
    document.getElementById("boy-health-readout").innerHTML = "Boy's health: " + boyHealth.roundedCurrent + "/" + boyHealth.max;
    let boyHealthBar = document.getElementById("health-bar");
    boyHealthBar.style.width = boyHealth.roundedCurrent + "px";
}

let hours = 11;
let minutes = 30;

function clockTicks() {
    if (clock.earth) {
        minutes += 2;
    } else {
        minutes += 1;
    }
    if (hours == 12 && minutes == 60) {
        hours = 0;
    } else if (hours == 12 && minutes == 61) {
        hours = 0;
    } if (minutes == 60) {
        hours += 1;
        minutes = 0;
    } else if (minutes == 61) {
        hours += 1;
        minutes = 1;
    }
    if (minutes <= 9) {
        document.getElementById("clock").innerHTML = hours + ":0" + minutes;
    } else if (minutes >= 10) {
        document.getElementById("clock").innerHTML = hours + ":" + minutes;
    }

    //Wake Up
    //if (hours == 8 && minutes == 0) {}
}

function manaRegenerate() {
    if (mana.current < mana.max) {
            mana.current += 1;
        } else if (mana.current > mana.max) {
            if (!mana.ticker) {
                mana.ticker = true;
            } else if (mana.ticker) {
                mana.current -= 1;
                mana.ticker = false;
            }
        }  
    updateMana();
}
function healthRegenerate() {
    //regen one hp after four turns
    if (health.current < health.max) {
        if (!health.bigTick) {
            if (!health.tick) {
                health.current += 1;
                health.tick = true;
            } else if (health.tick) {
                health.tick = false;
            }
            health.bigTick = true;
        } else if (health.bigTick) {
            health.bigTick = false;
        }
    }
    updateHealth();
}


function take(object) {
    console.log(object.name);
    inventoryItems.push(`<div class="listItem" onclick="showObject(this);" onmouseover="high(this);" onmouseout="unhigh(this);">` + object.name + `</div>`);
    inv.currentWeight += object.weight;
    document.getElementById("inventorysidebar").innerHTML = inventoryItems.join("");
    checkCapacity();
    document.getElementById("justAdded").innerHTML = object.name + " added";
    justAdded.style.display = "block";
    justAdded.style.opacity = "1";
    //needs some work: gets wonky if you add one item right after another
    fadeJustAdded();
}

function showObject(object) {
    console.log(object.textContent);
}

function catabolize(object) {
    catabolize.play();
    let index = inventoryItems.indexOf(object);
    if (index > -1) {inventoryItems.splice(index, 1);}
    inv.currentWeight -= object.weight;
    mana.current += Math.round(object.weight * 8);
    updateMana();
    checkCapacity();
}

function fadeJustAdded() {
        setTimeout(function() {
            justAdded.style.opacity = 0.9;
        }, 1200);
        setTimeout(function() {
            justAdded.style.opacity = 0.8;
        }, 1300);
        setTimeout(function() {
            justAdded.style.opacity = 0.7;
        }, 1400);
        setTimeout(function() {
            justAdded.style.opacity = 0.6;
        }, 1500);
        setTimeout(function() {
            justAdded.style.opacity = 0.5;
        }, 1600);
        setTimeout(function() {
            justAdded.style.opacity = 0.4;
        }, 1700);
        setTimeout(function() {
            justAdded.style.opacity = 0.3;
        }, 1800);
        setTimeout(function() {
            justAdded.style.opacity = 0.2;
        }, 1900);
        setTimeout(function() {
            justAdded.style.opacity = 0.1;
        }, 2000);
        setTimeout(function() {
            justAdded.style.opacity = 0;
        }, 2100);
}

function toggleSound() {
    if (dialogue.narrationAllowedByUser) {
        dialogue.narrationAllowedByUser = false;
        soundOn.style.display = "none";
        soundOff.style.display = "block";
        leLines.pause();
    } else if (!dialogue.narrationAllowedByUser) {
        dialogue.narrationAllowedByUser = true;
        soundOn.style.display = "block";
        soundOff.style.display = "none";
    }
}

function damagePlayer(damage) {
    ouch();
    health.current -= damage;
    updateHealth();
}

function journeyDownstream() {
    if (dialogue.ferryJourney) {
        if (player.ferry1) {
            token.style.transform = "translate(80px,320px)";
            player.ferry1 = false;
            player.ferry2 = true;
            ferryNoise();
        } else if (player.ferry2) {
            token.style.transform = "translate(0px,320px)";
            player.ferry2 = false;
            player.ferry3 = true;
            ferryNoise();
        } else if (player.ferry3) {
            current.room = "canal";
            room.size = "sevenByOne";
            catacombs1.style.display = "none";
            canal.style.display = "block";
            token.style.transform = "translate(480px,0px)";
            checkWhichTilesShouldBeIncluded();
            player.ferry3 = false;
            player.ferry4 = true;
            ferryNoise();
        } else if (player.ferry4) {
            token.style.transform = "translate(400px,0px)";
            player.ferry4 = false;
            player.ferry5 = true;
            ferryNoise();
        } else if (player.ferry5) {
            token.style.transform = "translate(320px,0px)";
            player.ferry5 = false;
            player.ferry6 = true;
            ferryNoise();
        } else if (player.ferry6) {
            token.style.transform = "translate(240px,0px)";
            player.ferry6 = false;
            player.ferry7 = true;
            ferryNoise();
        } else if (player.ferry7) {
            token.style.transform = "translate(160px,0px)";
            player.ferry7 = false;
            player.ferry8 = true;
            ferryNoise();
        } else if (player.ferry8) {
            token.style.transform = "translate(80px,0px)";
            player.ferry8 = false;
            player.ferry9 = true;
            ferryNoise();
        } else if (player.ferry9) {
            token.style.transform = "translate(0px,0px)";
            player.ferry9 = false;
            player.ferry10 = true;
            ferryNoise();
        } else if (player.ferry10) {
            current.room = "canalMouth";
            room.size = "threeByThree";
            canal.style.display = "none";
            canalMouth.style.display = "block";
            token.style.transform = "translate(320px,240px)";
            checkWhichTilesShouldBeIncluded();
            player.ferry10 = false;
            player.ferry11 = true;
            ferryNoise();
        } else if (player.ferry11) {
            token.style.transform = "translate(240px,240px)";
            player.ferry11 = false;
            player.position = "d4";
            movement.allow = true;
            ferryNoise();
        }
    }
}
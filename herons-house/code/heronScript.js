
function theRelentlessMarchOfTime() {
    //boyMove(); //independant prescripted movement
    boyFollow();
    checkLevitation();
    manaRegenerate();
    healthRegenerate();
    tickClock();
    battleTimerIncrement();
    //one-times
    journeyDownstream();
    boyToStainedGlassMarket();
    if (player.position === boy.position) {
        excuseMe.play();
    }
}


const game = {
    started: false,
    favsCounter: 0,
    skipStarters: true, //for testing. normally false //cheat
    skipBoyEntry: true, //for testing. normally false
}



/*
Template for taking objects
    in roomContents:
    else if (current.room === "ROOM" && !inv.OBJECT.taken) {
            DISTINCTNOISE.play();
            OBJECT.style.display = "none";
            take(inv.OBJECT);
    }
*/


//temp. play new game will be triggered with image map, but for now it's enter or space
document.addEventListener('DOMContentLoaded', () => {
    cloverCharacterButton.classList.add("activeButton");
    buttonflex.style.display = "none"; //hide inv sort buttons
    token.style.display = "block";
    updateSpellCosts();
    sevenBySeven();
    
    //hide all rooms and show default starting room
    var roomContents = document.querySelectorAll(".grid2");
    roomContents.forEach(room => {
        room.style.display = "none";
    });
    if (room.default) {
        fountainRoom.style.display = "grid";
    }
    //testers
    take(inv.rustyDaggers); //test
    take(inv.box); //test
    take(inv.fossilizedRoe);
    take(inv.pumpkin);
    take(inv.crumpledNote);
    take(inv.throwingStars);
    take(inv.quarterstaff);
    moveTo(b2);
    addEquipment("earrings1", earrings);
    addEquipment("earrings2", earrings);
    addEquipment("earrings3", earrings);
    addEquipment("hat1", hat);
    addEquipment("hat2", hat);
    addEquipment("hat3", hat);

    
    //end of cheats
    
    if (game.skipStarters) {
        movement.allow = true;
        starters.style.display = "none";
        dialogue.playerHasFreshenedUp = true;
        game.started = true;
        spellListButton.style.display = "block";
        cloverCharacterButton.style.display = "block";
        token.style.display = "block";
        inventoryButton.style.display = "block";

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
        //cheats --
    

    if (event.key === '6') {
        addAsherToParty();
    }
    if (event.key === 'i') {
        endDialogue();
    }

    if (event.key === '1') {
        showCloverMenu();
        activateButton(cloverCharacterButton);
    }
    if (event.key === '2') {
        if (game.asherAdded) {
            showAsherMenu();
            activateButton(asherCharacterButton);
        } else {
            showSpellMenu();
            activateButton(spellListButton);
        }
    }
    if (event.key === '3') {
        if (game.asherAdded) {
            showSpellMenu();
            activateButton(spellListButton);
        } else {
            showInventory();
            activateButton(inventoryButton);
        }
    }
    if (event.key === '4') {
        if (game.asherAdded) {
            showInventory();
            activateButton(inventoryButton);
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
        if (event.key === 'z' || event.key === ' ') {
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
        nightcardanimation.style.display = "block";
        game.started = true;
        loadscreen.style.display = "none";
        startButton.style.display = "none";
        startButtonHover.style.display = "none";
        click.play();
        setTimeout(function() {
            nightcard.style.display = "none";
            blackscreen.style.display = "none";
            nightcardanimation.style.display = "none";
            dialogue.openingTimeout = true;
            converse(opening);
            opening1v.play();
        }, 5000); //usually 5000
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


function addBigRubble() {
    take(inv.rubble1);
}

//prevent spacebar scrolling
window.addEventListener('keydown', function(e) {
  if(e.keyCode == 32 && e.target == document.body) {
    e.preventDefault();}}); 

function thocker() { //THOCKERRRRRR!
    const thocking = [thock, thock2, thock3, thock4, thock5, thock6];
    const randomThockdex = Math.floor(Math.random() * thocking.length);
    const anyThock = thocking[randomThockdex];
    if (player.onTable) {
        tableSound.play();
    } else if (!mana.levitating) {
        anyThock.play();
    }
}

function bumper() { //BUMPERRRRRR
    const thocking = [thock3, thock6, thock7, thock8, thock9, thock10, thock11]; //excessive duplicates don't seem to help
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


function stairsNoise() {
    const stairz = [stairs1, stairs2, stairs3];
    const stairdex = Math.floor(Math.random() * stairz.length);
    const anyStair = stairz[stairdex];
    anyStair.play();
}

function revertColorOfStart() {
    startButtonHover.style.display = "none";
}

function changeColorOfStart() {
    startButtonHover.style.display = "block";
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
    gold: 0,
    //objects must not share the same name
    box: {
        name: "empty cardboard box",
        weight: 0.5,
        about: "An empty cardboard box. Crisp and solid.",
    },
    pumpkin: {
        name: "pumpkin",
        weight: 4,
        about: "tasteful. elegant.",
    },
    rustyDaggers: {
        name: "rusty daggers",
        weight: 2,
        about: "Two rusty old daggers. When Heron was here, that room was a place where you had to check your weapons before you entered the main hall. These are probably left over from then.",
    },
    throwingStars: {
        name: "dinted throwing stars",
        weight: 1,
        about: "Three iron throwing stars. Seem to have seen some action.",
    },
    fossilizedRoe: {
        name: "fossilized fish eggs",
        weight: 0.8,
        about: "Or possibly little balls of amber.",
    },
    crumpledNote: {
        name: "crumpled note",
        weight: 0.1,
        about: "One side is blank, the other is covered in bird numbers. Obviously someone was doing bird math.",
    },
    quarterstaff: {
        name: "quarterstaff",
        weight: 1.8,
        about: "A wooden rod about the length of my arm. I think this belongs to Kyle.",
    },
    mushrooms: {
        name: "pale white mushrooms",
        weight: 0.5,
        about: "I remember Scraps telling me these are edible, but I never believed him. If he's still awake at this time of night, he's probably in the kitchen. Maybe he can use them in a soup.",
    },
    planks: {
        name: "rotted beams",
        weight: 3,
        about: "Part of the ceiling must have collapsed.",
    },
    rubble1: {
        name: "chunks of rubble",
        weight: 7,
        about: "This is fucking heavy.",
    },
    rubble2: {
        name: "bits of rubble",
        weight: 1.8,
        about: "",
    },
    rubble3: {
        name: "rubble",
        weight: 1,
        about: "",
    },
    bucket: {
        name: "empty bucket",
        weight: 0.5,
        about: "An empty metal bucket.",
    },
    fullBucket: {
        name: "bucket of water",
        weight: 6,
        about: "",
    },
    brokenGlass: {
        name: "glass shards",
        weight: 0.3,
        about: "",
    },
    vase: {
        name: "vase",
        weight: 1,
        about: "A blue vase with yellow flowers.",
    },
    bottle: {
        name: "empty bottle",
        weight: 0.5,
        about: "There's a bit of oily iridescent residue at the bottom. Smells like a duplication potion",
    },
    broom: {
        name: "dusty broom",
        weight: 1,
        about: "The tragedy of the broom is that it cannot sweep itself.",
    },
}

const hatArray = [];
const earArray = [];

const inventoryItems = [];

const health = {
    current: 120,
    max: 120,
}

const armor = 1;

const boyHealth = {
    current: 18,
    max: 18,
}

    

function startDialogue() {
    const int1 = document.getElementById("interface-buttons-container");
    const int2 = document.getElementById("interface-top");
    const int3 = document.getElementById("interface-bottom");
    interface.style.borderBottom = "3px solid black";
    int1.style.display = "none";
    int2.style.display = "none";
    int3.style.display = "none";
    clover.style.display = "block";
}

function endDialogue() {
    const int1 = document.getElementById("interface-buttons-container");
    const int2 = document.getElementById("interface-top");
    const int3 = document.getElementById("interface-bottom");
    interface.style.borderBottom = "3px solid white";
    int1.style.display = "flex";
    int2.style.display = "block";
    int3.style.display = "block";
    clover.style.display = "none";
}

function cantSelect() {
    wrong.play();
 }

let currentOpenMenu = null;

//dress up
function showDressUpMenu(menu) {
    wrong.play();
    if (currentOpenMenu === menu) {
        menu.style.display = "none";
        menuContainer.style.visibility = "hidden";
        currentOpenMenu = null;
        return;
    }
    hatsMenu.style.display = "none";
    earringsMenu.style.display = "none";
    mantlesMenu.style.display = "none";
    shoesMenu.style.display = "none";
    necklaceMenu.style.display = "none";
    ringMenu.style.display = "none";
    menuContainer.style.visibility = "visible";
    menu.style.display = "block";
    currentOpenMenu = menu;
}

//dress up
function selectHat(item) {
    hats.style.display = "block";
    const allCategory = Array.from(hats.children);
    allCategory.forEach(child => {
    child.classList.add("hidden");
    });
    item.classList.remove("hidden");
    
}
function boldify(button) {
    var buttos = document.querySelectorAll(".orgOption");
    buttos.forEach(btn => {
        btn.style.fontWeight = "normal";
        btn.style.color = "white";
    });
    button.style.fontWeight = "bold";
    button.style.color = "black";

}
//dress up
function selectEarring(item) {
    earrings.style.display = "block";
    const allCategory = Array.from(earrings.children);
    allCategory.forEach(child => {
    child.classList.add("hidden");
    });
    item.classList.remove("hidden");
}

//dress up
function selectMantle(item) {
    mantles.style.display = "block";
    const allCategory = Array.from(mantle.children);
    allCategory.forEach(child => {
    child.classList.add("hidden");
    });
    item.classList.remove("hidden");
}

//dress up
function selectShoe(item) {
    shoes.style.display = "block";
    const allCategory = Array.from(shoes.children);
    allCategory.forEach(child => {
    child.classList.add("hidden");
    });
    item.classList.remove("hidden");
}

//dress up
function removeClothing(category) {
    category.style.display = "none";
}


let windowSize = window.matchMedia("(height <= 650px)");
if (windowSize.matches) {
    console.log("window size < 650");
}

function showShort() {
    if (!game.sortShown) {
        pip.play();
        chronButton.style.display = "block";
        favButton.style.display = "block";
        alphButton.style.display = "block";
        weightButton.style.display = "block";
        game.sortShown = true;
    } else {
        pip.play();
        chronButton.style.display = "none";
        favButton.style.display = "none";
        alphButton.style.display = "none";
        weightButton.style.display = "none";
        game.sortShown = false;
    }   
}


function blur() {
    document.activeElement.blur(); //the opposite of focus (so that it's not triggered again by errant spacebar clicks)
}

function activateButton(button) {
    cloverCharacterButton.classList.remove("activeButton");
    asherCharacterButton.classList.remove("activeButton");
    spellListButton.classList.remove("activeButton");
    spellListButton2.classList.remove("activeButton");
    inventoryButton.classList.remove("activeButton");
    button.classList.add("activeButton");
}


function showCloverMenu() {
    sclick.play();
    cloverSheet.style.display = "grid";
    closeInventory();
    closeSpellSheet();
    closeAsherSheet();
}

function showAsherMenu() {
    sclick.play();
    asherSheet.style.display = "grid";
    closeInventory();
    closeSpellSheet();
    closeCloverSheet();
}

function showSpellMenu() {
    sclick.play();
        spellSheet.style.display = "block";
        closeInventory();
        closeAsherSheet();
        closeCloverSheet();
}

function showInventory() {
    sclick.play();
        invSheet.style.display = "block";
        buttonflex.style.display = "flex";
        closeSpellSheet();
        closeAsherSheet();
        closeCloverSheet();
    //to do:
    //enable arrow keys to scroll up and down the list of items
    //enable z,x, and/or c to do things for each item (select item, drop item)
}

function closeInventory() {
    invSheet.style.display = "none";
    buttonflex.style.display = "none";
    reallysure.style.display = "none";
}

function closeSpellSheet() {
    spellSheet.style.display = "none";
}

function closeAsherSheet() {
    asherSheet.style.display = "none";
}

function closeCloverSheet() {
    cloverSheet.style.display = "none";
    menuContainer.style.visibility = "hidden";
}


function checkCapacity() { //carry capacity
    updateCapacityCounter();
    if (inv.currentWeight >= inv.maxCapacity) {
        console.log("Current weight: " + inv.currentWeight);
        imCarryingTooMuch();
        //consequence
    } else if (inv.currentWeight <= inv.maxCapacity) {
        console.log("Current weight: " + inv.currentWeight);
        //repeal consequence
    } 
}

function updateCapacityCounter() {
    //number readout
    inv.roundedWeight = Math.round(inv.currentWeight * 10) / 10;
    document.getElementById("carryCapacity").innerHTML = "Weight: " + inv.roundedWeight + "/" + inv.maxCapacity;
    document.getElementById("carryCapacity2").innerHTML = inv.roundedWeight + "/" + inv.maxCapacity;
    //bar width
    let carryBar = document.getElementById("carry-bar");
    let percentageValue = inv.roundedWeight / inv.maxCapacity * 100;
    carryBar.style.width = String(percentageValue) + "%";
}

function updateHealth() {
    health.roundedCurrent = Math.round(health.current * 10) / 10;
    document.getElementById("health-readout").innerHTML = "Health: " + health.roundedCurrent + "/" + health.max;
    let healthBar = document.getElementById("health-bar");
    let percentageValue = health.roundedCurrent / health.max * 100;
    healthBar.style.width = String(percentageValue) + "%";
}

function updateMana() {
    mana.roundedCurrent = Math.round(mana.current * 10) / 10;
    document.getElementById("mana-readout").innerHTML = "Mana: " + mana.roundedCurrent + "/" + mana.max;
    let manaBar = document.getElementById("mana-bar");
    let percentageValue = mana.roundedCurrent / mana.max * 100;
    manaBar.style.width = String(percentageValue) + "%";
}


function updateBoyHealth() {
    boyHealth.roundedCurrent = Math.round(boyHealth.current * 10) / 10;
    document.getElementById("boy-health-readout").innerHTML = "Boy's health: " + boyHealth.roundedCurrent + "/" + boyHealth.max;
    let boyHealthBar = document.getElementById("health-bar");
    boyHealthBar.style.width = boyHealth.roundedCurrent + "px";
}

let piano = 0;
let loop = 0

function playPiano() {
    bump(up);
    if (loop == 4) {
        if (piano == 0) {
            dNote.play();
            piano++
        } else if (piano == 1) {
            dcNote.play();
            piano++
        } else if (piano == 2) {
            dNote.play();
            piano++
        } else if (piano == 3) {
            dcNote.play();
        }
    }
    else if (piano == 0) {
        if (loop == 0) {
            dNote.play();
        } else if (loop == 1) {
            cNote.play();
        } else if (loop == 2) {
            bNote.play();
        } else if (loop == 3) {
            bfNote.play();
        }
        piano++;
    } else if (piano == 1) {
        if (loop == 0) {
            dcNote.play();
        } else if (loop == 1) {
            ccNote.play();
        } else if (loop == 2) {
            bcNote.play();
        } else if (loop == 3) {
            bfcNote.play();
        }
        piano++;
    } else if (piano == 2) {
        d2Note.play();
        piano++;
    } else if (piano == 3) {
        aNote.play();
        piano++;
    } else if (piano == 4) {
        gsNote.play();
        piano++;
    } else if (piano == 5) {
        gNote.play();
        piano++;
    } else if (piano == 6) {
        fNote.play();
        piano++;
    } else if (piano == 7) {
        dNote.play();
        piano++;
    } else if (piano == 8) {
        fcNote.play();
        piano++;
    } else if (piano == 9) {
        gNote.play();
        piano = 0;
        loop++;
    }
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

    if (hours == 12 && minutes == 0) {
        //chime midnight
        //grandfatherClock.play();
    }
}

function manaRegenerate() {
    if (mana.current < mana.max) {
            mana.current += 1;
        } else if (mana.current > mana.max) {
                mana.current -= 1;
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

function showSpellDescription(spellDescription) {
    spellDescription.style.display = "block";
}

var incrementer = 0;

function take(object) {
    if (!player.hittingAWall) {
        halt();
    }
    object.taken = true;
    console.log(object.name);
    var firstWord = object.name.split(" ")[0];
    var secondWord = object.name.split(" ")[1];
    incrementer++;
    inventoryItems.push(
    `<div data-alphabetize="` + firstWord + secondWord + `" data-sort="` + object.weight + `" id="invItem` + incrementer + `" class="listItem" onclick="showObject(` + firstWord + secondWord + `Description);" onmouseover="high(this);" onmouseout="unhigh(this);">
        <div class="objectName">` + object.name + `</div>
        <div id="` + firstWord + secondWord + `Description" class="inactiveInfo">
            <div>` + object.about +`<br> Weight: ` + object.weight + `</div>
            <div class="objectIcons">
                <div class="objButton" id="favoriteButton" onclick="favorite(invItem` + incrementer + `)">Favorite</div>
                <div class="objButton" onclick="catabolize(invItem` + incrementer + `, ` + object.weight + `, \'` + object.name + `\')">Catabolize</div>
            </div>
        </div>
    </div>`);
    inv.currentWeight += object.weight;
    document.getElementById("invSheet").innerHTML = inventoryItems.join("");
    checkCapacity();
    if (game.invSortMethod === "alph") {
        alphabetize();
    } else if (game.invSortMethod === "chron") {
        chronologize();
    } else if (game.invSortMethod === "weight") {
        weightSort();
    } else if (game.invSortMethod === "fav") {
        favoritesSort();
    }
    //pop up for Just Added
    /*
    document.getElementById("justAdded").innerHTML = object.name + " added";
    justAdded.style.display = "block";
    justAdded.style.opacity = "1";
    //needs some work: gets wonky if you add one item right after another
    fadeJustAdded();
    */
}

//yellowHat
function addEquipment(item, type) {
    if (type === hat) {
        hatArray.push(
            `<img class="box" onclick="wear(this, hat)" id="menu-` + item + `" src="assets/dress-up/in-menu/` + item + `.png">`
        );
        document.getElementById("hatsMenu").innerHTML = hatArray.join("");
    } else if (type === earrings) {
        earArray.push(
            `<img class="box" onclick="wear(this, earrings)" id="menu-` + item + `" src="assets/dress-up/in-menu/` + item + `.png">`
        );
        document.getElementById("earringsMenu").innerHTML = earArray.join("");
    }
}

function wear(item, type) {
    paloop.play();
    let typa = String("." + type.id);
    console.log(typa)
    document.querySelectorAll(typa).forEach(element => {
        element.style.display = "none";
    });
    const selected = document.getElementById(item.id.split("-")[1]);
    selected.style.display = "block";
}


/*
const colurs = [
        "#fcf",
        "#a2aa",
        "#bb1b",
        "#c2cc", ];
    */

function favorite(item) {
    //const randomColor = colurs[Math.floor(Math.random() * colurs.length)];
    //document.documentElement.style.setProperty('--random-color', randomColor);
    if (!item.classList.contains("favoredItem")) {
        item.classList.add("favoredItem");
        //where item is parent element
        const favoriteButton = item.querySelector("#favoriteButton");
        favoriteButton.innerText = "Unfavorite";
        favie.play();
        game.favsCounter++;
    } else {
        item.classList.remove("favoredItem");
        const favoriteButton = item.querySelector("#favoriteButton");
        favoriteButton.innerText = "Favorite";
        nope.play();
        game.favsCounter--;
    }
    
    game.clickingFavorite = true;
    setTimeout(function() {
            game.clickingFavorite = false;
        }, 100);
    
}

let currentlyOpenObject = null;

function closeOpenItem() {
    if (currentlyOpenObject) {
        currentlyOpenObject.classList.add("inactiveInfo");
        currentlyOpenObject.classList.remove("activeInfo");
        currentlyOpenObject = null;
    }
}

function sortSound() {
    sort.play();
}

//alphabetizer
// Posted by somethinghere, modified by community. 
// Retrieved 2026-07-16, License - CC BY-SA 3.0  
// Turn querySelectorAll NodeList into an Array
function alphabetize() {
    game.invSortMethod = "alph";
    Array.prototype.slice.call(document.querySelectorAll('[data-alphabetize]'))
    .sort(function(a, b){
    return a.getAttribute('data-alphabetize') < b.getAttribute('data-alphabetize') 
    ? 1 : -1;
    })
    // Insert every node in order
    .forEach(function(v, i, a){
    var parent = v.parentNode;
    parent.removeChild(v);
    parent.insertBefore(v, parent.childNodes[0]);
    });
    closeOpenItem();
}

function chronologize() {
    game.invSortMethod = "chron";
    Array.prototype.slice.call(invSheet.children)
    .sort(function(a, b){
    return a.getAttribute('id') < b.getAttribute('id') 
    ? 1 : -1;
    })
    // Insert every node in order
    .forEach(function(v, i, a){
    var parent = v.parentNode;
    parent.removeChild(v);
    parent.insertBefore(v, parent.childNodes[0]);
    });
    closeOpenItem();
}

function weightSort() {
    game.invSortMethod = "weight";
    Array.prototype.slice.call(document.querySelectorAll('[data-sort]'))
    .sort(function(b, a){
    return a.getAttribute('data-sort') < b.getAttribute('data-sort') 
    ? 1 : -1;
    })
    // Insert every node in order
    .forEach(function(v, i, a){
    var parent = v.parentNode;
    parent.removeChild(v);
    parent.insertBefore(v, parent.childNodes[0]);
    });
    closeOpenItem();
}

function favoritesSort() {
    game.invSortMethod = "fav";
    Array.prototype.slice.call(document.querySelectorAll('.favoredItem'))
    .sort(function(b, a){
    return a.getAttribute('favoredItem') < b.getAttribute('favoredItem') 
    ? 1 : -1;
    })
    // Insert every node in order
    .forEach(function(v, i, a){
    var parent = v.parentNode;
    parent.removeChild(v);
    parent.insertBefore(v, parent.childNodes[0]);
    });
    closeOpenItem();
}

function showObject(object) {
    if (!game.clickingFavorite) {
        if (object.classList.contains("activeInfo")) { //clicking an open object
            object.classList.add("inactiveInfo");
            object.classList.remove("activeInfo");
            currentlyOpenObject = null;
            tclock.play();
        } else {
            //close previous objects
            document.querySelectorAll(".activeInfo").forEach(item => {
                item.classList.remove("activeInfo");
                item.classList.add("inactiveInfo");
                tclock.play();
            });
            //open new object
            object.classList.remove("inactiveInfo");
            object.classList.add("activeInfo");
            currentlyOpenObject = object;
            tclack.play();
        }
    }
}

let catabListing = null;
let catabWeight = null;
let originalObjListing = null;
const reallysure = document.createElement("div");

function catabolize(listing, weight, name) {
    if (listing.classList.contains("favoredItem")) {
        let nameUp = name.charAt(0).toUpperCase().concat(name.slice(1));
        originalObjListing = listing;
        reallysure.id = "reallysure";
        reallysure.innerHTML = `<div id="really"><i>` + nameUp + `</i> is one of your favorite things! Are you sure you want to fucking juice it for mana?</div>
                                <button id="nahJuice" onclick="psych()">Unsure</button>
                                <button id="yesJuice" onclick="destroy(catabListing)">Sure</button>`
        listing.replaceWith(reallysure);

        reallysure.style.display = "block";
        
        catabListing = listing;
        catabWeight = weight;
    } else {
        listing.style.display = "none";
        //let index = inventoryItems.indexOf(object);
        //if (index > -1) {inventoryItems.splice(index, 1);}
        inv.currentWeight -= weight;
        mana.current += Math.round(weight * 4);
        updateMana();
        checkCapacity();
        catab.play();
        inventoryItems.pop(listing);
        flashManaBar();
    }
}

// Yes button
function destroy(catabListing) {
    catabListing.classList.remove("favoredItem");
    //runs it again
    catabolize(catabListing, catabWeight);
    catabListing = null;
    catabWeight = null;
    originalObjListing = null;
    reallysure.style.display = "none";
};

// No button
function psych() {
    nope.play();
    catabListing = null;
    catabWeight = null;
    reallysure.replaceWith(originalObjListing);
    reallysure.style.display = "none";
};

function flashManaBar() {
    let manaBar = document.getElementById("mana-bar-flash");
    manaBar.style.opacity = 1;
    setTimeout(function() {
            manaBar.style.opacity = 0.9;
        }, 100);
        setTimeout(function() {
            manaBar.style.opacity = 0.8;
        }, 150);
        setTimeout(function() {
            manaBar.style.opacity = 0.7;
        }, 200);
        setTimeout(function() {
            manaBar.style.opacity = 0.6;
        }, 250);
        setTimeout(function() {
            manaBar.style.opacity = 0.5;
        }, 300);
        setTimeout(function() {
            manaBar.style.opacity = 0.4;
        }, 350);
        setTimeout(function() {
            manaBar.style.opacity = 0.3;
        }, 400);
        setTimeout(function() {
            manaBar.style.opacity = 0.2;
        }, 450);
        setTimeout(function() {
            manaBar.style.opacity = 0.1;
        }, 500);
        setTimeout(function() {
            manaBar.style.opacity = 0;
        }, 550);
}


function flashHealthBar() {
    let manaBar = document.getElementById("health-bar-flash");
    manaBar.style.opacity = 1;
    setTimeout(function() {
            manaBar.style.opacity = 0.9;
        }, 100);
        setTimeout(function() {
            manaBar.style.opacity = 0.8;
        }, 150);
        setTimeout(function() {
            manaBar.style.opacity = 0.7;
        }, 200);
        setTimeout(function() {
            manaBar.style.opacity = 0.6;
        }, 250);
        setTimeout(function() {
            manaBar.style.opacity = 0.5;
        }, 300);
        setTimeout(function() {
            manaBar.style.opacity = 0.4;
        }, 350);
        setTimeout(function() {
            manaBar.style.opacity = 0.3;
        }, 400);
        setTimeout(function() {
            manaBar.style.opacity = 0.2;
        }, 450);
        setTimeout(function() {
            manaBar.style.opacity = 0.1;
        }, 500);
        setTimeout(function() {
            manaBar.style.opacity = 0;
        }, 550);
}

function addAsherToParty() {
    game.asherAdded = true;
    asherCharacterButton.style.display = "block";
    cloverCharacterButton.innerHTML = "Clover";
    asherInterfaceBottom.style.display = "block";
    asherName.style.display = "block";
    cloverName.style.display = "block";
    cloverCharacterButton.style.width = "25%"
    asherCharacterButton.style.width = "25%"
    spellListButton.style.width = "25%"
    inventoryButton.style.width = "25%"
    statusBox.style.marginBottom = "30px"
    // add scroll to bottom of interfaceBottom
    //interfaceBottom.scrollTop = interfaceBottom.scrollHeight;
}


function fadeJustAdded() { //this sucks right now
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
    if (damage > armor) {
        ouch();
    } else {
        tink.play();
    }
    health.current += armor;
    health.current -= damage;
    updateHealth();
    flashHealthBar();
    //if health is zero, wake up
}

function journeyDownstream() {
    if (dialogue.ferryJourney) {
        if (player.ferry1) {
            player.ferry1 = false;
            player.ferry2 = true;
            ferryNoise();
        } else if (player.ferry2) {
            player.ferry2 = false;
            player.ferry3 = true;
            ferryNoise();
        } else if (player.ferry3) {
            current.room = "canal";
            room.size = "sevenByOne";
            catacombs1.style.display = "none";
            canal.style.display = "block";
            checkWhichTilesShouldBeIncluded();
            player.ferry3 = false;
            player.ferry4 = true;
            ferryNoise();
        } else if (player.ferry4) {
            player.ferry4 = false;
            player.ferry5 = true;
            ferryNoise();
        } else if (player.ferry5) {
            player.ferry5 = false;
            player.ferry6 = true;
            ferryNoise();
        } else if (player.ferry6) {
            player.ferry6 = false;
            player.ferry7 = true;
            ferryNoise();
        } else if (player.ferry7) {
            player.ferry7 = false;
            player.ferry8 = true;
            ferryNoise();
        } else if (player.ferry8) {
            player.ferry8 = false;
            player.ferry9 = true;
            ferryNoise();
        } else if (player.ferry9) {
            player.ferry9 = false;
            player.ferry10 = true;
            ferryNoise();
        } else if (player.ferry10) {
            current.room = "canalMouth";
            room.size = "threeByThree";
            canal.style.display = "none";
            canalMouth.style.display = "block";
            checkWhichTilesShouldBeIncluded();
            player.ferry10 = false;
            player.ferry11 = true;
            ferryNoise();
        } else if (player.ferry11) {
            player.ferry11 = false;
            player.position = "d4";
            movement.allow = true;
            ferryNoise();
        }
    }
}

function shrinkNecklace() {
    neckless.style.display = "block";
    necklace.style.display = "none";
}
function unshrinkNecklace() {
    neckless.style.display = "none";
    necklace.style.display = "block";
}

function shrinkHat() {
    hatless.style.display = "block";
    hat.style.display = "none";
}
function shrinkEarrings() {
    earless.style.display = "block";
    earrings.style.display = "none";
}
function shrinkCloak() {
    cloakless.style.display = "block";
    cloak.style.display = "none";
}
function shrinkShoes() {
    shoeless.style.display = "block";
    shoes.style.display = "none";
}
function shrinkRing1() {
    ring1less.style.display = "block";
    ring1.style.display = "none";
}
function shrinkRing2() {
    ring2less.style.display = "block";
    ring2.style.display = "none";
}

function unshrinkHat() {
    hatless.style.display = "none";
    hat.style.display = "block";
}
function unshrinkEarrings() {
    earless.style.display = "none";
    earrings.style.display = "block";
}
function unshrinkCloak() {
    cloakless.style.display = "none";
    cloak.style.display = "block";
}
function unshrinkShoes() {
    shoeless.style.display = "none";
    shoes.style.display = "block";
}
function unshrinkRing1() {
    ring1less.style.display = "none";
    ring1.style.display = "block";
}
function unshrinkRing2() {
    ring2less.style.display = "none";
    ring2.style.display = "block";
}

function blinkTheEyes() {
    blinkEyes.style.display = "block";
    eyeBlink.play();
    eyes.style.display = "none";
      setTimeout(function() {
            blinkEyes.style.display = "none";
            eyes.style.display = "block";
        }, 180);
}
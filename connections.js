//innitial settings
const pearWiggler = document.getElementById('connections-grid');
const tiles = Array.from(pearWiggler.getElementsByClassName('tile'));
//set spawnpoint ;)
const initialContent = Array.from(groupDescFlex.getElementsByClassName('group-desc'));
const descriptions = initialContent.map(element => element.id);
console.log('Descriptions accounted for', descriptions);
//generate an array containing all tiles
let allTiles = Array.from(document.getElementsByClassName('tile'));
console.log('All tiles:', allTiles);
// generate an array from GROUP ONE tiles
let groupOne = Array.from(document.getElementsByClassName('g1'));
console.log('Group ONE:', groupOne);

// generate an array from GROUP TWO tiles
let groupTwo = Array.from(document.getElementsByClassName('g2'));
console.log('Group TWO:', groupTwo);

// generate an array from GROUP THREE tiles
let groupThree = Array.from(document.getElementsByClassName('g3'));
console.log('Group THREE:', groupThree);

// generate an array from GROUP FOUR tiles
let groupFour = Array.from(document.getElementsByClassName('g4'));
console.log('Group FOUR:', groupFour);

//initialize array to collect clicked tiles
const clickedTiles = [];

//innitalize array to collect nearly-matched sets of tiles
const collectThrees = [];

/* ON PAGE LOAD */
/*------------------------------------------*/
document.addEventListener('DOMContentLoaded', function() {
    // select all html elements with the class .tile
    var elements = document.querySelectorAll('tile');

    // loop through each tile element
    elements.forEach(function(element) {
        // for each tile element: 
        element.style.visibility = 'visible';
        element.style.display = 'grid';
    });

    //shuffle on load
    shuffleAll();

    //shuffle on click
    document.getElementById('shuffle').addEventListener('click', function() {
        shuffleAll();
    });

    //submit guesses on click
    document.getElementById('submit').addEventListener('click', function() {
        submitSelection();
    });

    //submit guesses on 'Enter'
    document.onkeydown = (e) => {
        if (e.key == 'Enter') {
            submitSelection();};};

    //deselect all tiles on click
    document.getElementById('deselect').addEventListener('click', function() {
        clickedTiles.length = 0;
        tiles.forEach(tile => {
            tile.style.backgroundColor = '#ece7e7';
            tile.style.color = 'black';
        });
        console.log('Array "clickedTiles" now contains', clickedTiles);
    });



    tiles.forEach(tile => {
        tile.addEventListener('click', () => {
            console.log(tile);
            //check how many tiles we've selected
            if (clickedTiles.length === 4){
                //do we have four tiles selected?
                if (!clickedTiles.includes(tile)) {
                    //yes
                    console.log('Array "clickedTiles" contains', clickedTiles.length, 'tiles, and is therefore full.');
                } else {
                    clickedTiles.splice(clickedTiles.indexOf(tile), 1);
                    tile.style.backgroundColor = '#ece7e7';
                    tile.style.color = 'black';
                    console.log(clickedTiles);
                    console.log('Array "clickedTiles" already contains', tile);
                    console.log('The specified tile has been removed from "clickedTiles"');
                    console.log('Array "clickedTiles" now includes:', clickedTiles);
                }
            } else { 
                //we do not have four tiles selected
                if (clickedTiles.length <= 3) {
                    console.log('Array "clickedTiles" contained', clickedTiles.length, 'tiles');
                    //add clicked tile to array
                    if (!clickedTiles.includes(tile)) {
                    clickedTiles.push(tile);
                    console.log('Array "clickedTiles" now contains', clickedTiles.length, 'tiles');
                    console.log(clickedTiles);
                    tile.style.backgroundColor = '#404040';
                    tile.style.color = 'white';
                    } else {
                        if (clickedTiles.includes(tile)) {
                            //remove a tile if it is clicked while selected
                            clickedTiles.splice(clickedTiles.indexOf(tile), 1);
                            tile.style.backgroundColor = '#ece7e7';
                            tile.style.color = 'black';
                            console.log(clickedTiles);
                            console.log('Array "clickedTiles" already contains', tile);
                            console.log('Array "clickedTiles" now includes:', clickedTiles);
                            } 
                    }
                }
            }

        })
    });

});

/* FUNCTIONS */
/*------------------------------------------*/
function shuffleAll() {
        // may the tiles attone for their sins. amen.
        for (let i = tiles.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [tiles[i], tiles[j]] = [tiles[j], tiles[i]];
        }

        // empty the pear wiggler
        pearWiggler.innerHTML = '';
        tiles.forEach(tiles => pearWiggler.appendChild(tiles));
        tiles.forEach(child => {
            pearWiggler.appendChild(child);
        });
}

function submitSelection() {
    if (clickedTiles.length === 4) {
    //convert tile class names into a sorted string
    function getClassNamesAsString(tile) {
        return Array.from(tile.classList).sort().join(' ');
    }

    //sort tiles into groups by class
    const groupOneClasses = groupOne.map(tile => getClassNamesAsString(tile));
    const groupTwoClasses = groupTwo.map(tile => getClassNamesAsString(tile));
    const groupThreeClasses = groupThree.map(tile => getClassNamesAsString(tile));
    const groupFourClasses = groupFour.map(tile => getClassNamesAsString(tile));

    //check if all clicked tiles have the same set of class names
    const clickedTilesClassNames = clickedTiles.map(tile => getClassNamesAsString(tile));

    //check for any matches
    const uniqueGroups = [groupOneClasses, groupTwoClasses, groupThreeClasses, groupFourClasses];
    let matched = false;

    uniqueGroups.forEach(group => {
        if (clickedTilesClassNames.every(tileClassNames => group.includes(tileClassNames))) {
            matched = true;
        }
    });

    // MISTAKES COUNTER
        // MISTAKES COUNTER
        if (!matched) {

            var newScore = document.getElementById("mistakas").innerHTML;
            var value = parseInt(newScore,10) + 1;
            document.getElementById("mistakas").innerHTML = value;

            //container
            const container = document.getElementById('mistakes-counter');
    
            //collect all elements with the class 'counter'
            const counters = container.getElementsByClassName('counter');
            
            // count counters
            if (counters.length > 0) {
                // Remove one if any remain
                counters[0].remove();
                
                //check if you're one away
                uniqueGroups.forEach((group) => {
                    const matchCount = clickedTilesClassNames.reduce((count, tileClassName) => {
                        return count + (group.includes(tileClassName) ? 1 : 0);
                    }, 0);
    
                    if (matchCount >= 3) {
                        console.log('Nearly matched group:', clickedTiles);
                        document.getElementById("mistakas").innerHTML = "One away!";
                        document.getElementById("gerses").innerHTML = ""; //I don't think this works, but it's okay.
                        //Maybe i'll get around to properly replacing the "one away" alert with a little display: block one day
                    
                        //array to store matched group text content
                        let matchedGroupText = [];
                    
                        //loop through each group to check for matches
                        for (let i = 0; i < uniqueGroups.length; i++) {
                            const group = uniqueGroups[i];
                    
                            //check if this group contains at least three matches
                            const matchCount = clickedTilesClassNames.reduce((count, tileClassName) => {
                                return count + (group.includes(tileClassName) ? 1 : 0);
                            }, 0);
                    
                            if (matchCount >= 3) {
                                //determine the group number based on index (1-based)
                                const groupNumber = i + 1;
                    
                                //select tiles from connections-grid with class 'gX'
                                const groupTiles = document.querySelectorAll(`.tile.g${groupNumber}`);
                                
                                //retrieve and log text content for each tile in the selected group
                                groupTiles.forEach(tile => {
                                    const textContent = tile.textContent.trim();
                                    matchedGroupText.push(textContent);
                                    console.log(`Text content for group ${groupNumber}:`, textContent);
                                    /* i'll get back to this */
                                    // const holdingCell = 
                                });
                            }
                        }
                    
                        //now 'matchedGroupText' contains all text contents
                        console.log('Matched group text content:', matchedGroupText);
                    }
                    
                });
            } else {
            }
        }

    // MATCHED!!
    if (matched) {
        let matchedGroupIndex = -1;
        uniqueGroups.forEach((group, index) => {
            if (clickedTilesClassNames.every(tileClassNames => group.includes(tileClassNames))) {
                matchedGroupIndex = index;
            }
        });

        if (matchedGroupIndex !== -1) {
            const matchedGroupName = `group${matchedGroupIndex + 1}`;
            console.log('matched group', matchedGroupName, clickedTilesClassNames);
            clickedTiles.forEach(tile => {
                tile.style.display = 'none';
            });
            clickedTiles.length = 0;
           
            /*insert show group info here*/
            console.log('Matched group name:', matchedGroupName);

            descriptions.forEach(id => {
                //display colored block of group info
                const element = document.getElementById(id);
                if (element) {
                    if (id === matchedGroupName) {
                        element.style.visibility = "visible";
                        element.style.display = "grid";
                    } 
                }
            });

        } else {
            console.log('?? How did you even trigger this log?');
        }
    }

}}


function linkNext() {
    const currentPage = document.getElementById('myNumber');
    //get that int
    let currentNumber = parseInt(currentPage.textContent || currentPage.innerText, 10);
    let nextPage = currentNumber + 1;
    let nextUrl = 'https://fruit-circus.github.io/connections' + nextPage + '.html';
    window.open(nextUrl, '_self');
}

function linkPrev() {
    const currentPage = document.getElementById('myNumber');
    //get that integer
    let currentNumber = parseInt(currentPage.textContent || currentPage.innerText, 10);
    let nextPage = currentNumber - 1;
    let nextUrl = 'https://fruit-circus.github.io/connections' + nextPage + '.html';
    window.open(nextUrl, '_self');
}

function linkHome() {
    window.open('https://fruit-circus.github.io/connections.html', '_self');
}


let g1a = document.getElementById("1a").textContent;
let g1b = document.getElementById("1b").textContent;
let g1c = document.getElementById("1c").textContent;
let g1d = document.getElementById("1d").textContent;
document.getElementById("replace1").innerHTML = g1a + "," + g1b + "," + g1c + "," + g1d + ".";  
let g2a = document.getElementById("2a").textContent;
let g2b = document.getElementById("2b").textContent;
let g2c = document.getElementById("2c").textContent;
let g2d = document.getElementById("2d").textContent;
document.getElementById("replace2").innerHTML = g2a + "," + g2b + "," + g2c + "," + g2d + ".";  
let g3a = document.getElementById("3a").textContent;
let g3b = document.getElementById("3b").textContent;
let g3c = document.getElementById("3c").textContent;
let g3d = document.getElementById("3d").textContent;
document.getElementById("replace3").innerHTML = g3a + "," + g3b + "," + g3c + "," + g3d + ".";  
let g4a = document.getElementById("4a").textContent;
let g4b = document.getElementById("4b").textContent;
let g4c = document.getElementById("4c").textContent;
let g4d = document.getElementById("4d").textContent;
document.getElementById("replace4").innerHTML = g4a + "," + g4b + "," + g4c + "," + g4d + ".";  

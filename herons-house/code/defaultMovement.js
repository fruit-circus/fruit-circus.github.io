//Tile Checker

const movement = {
    allow: true,
}

const player =  {
    position: "a1",
    //position: "e3",
    shrunk: false,
}


document.addEventListener("DOMContentLoaded", (event) => {  
    //checkWhichTilesShouldBeIncluded();
   document.onkeydown = (e) => {
        if (movement.allow) {
            
            //unless the player has selected a spell, Clover is in the forground, to insure no background scenery goes over her
            //when a spell is selected (spellCasting.js), then token.style.zIndex = "0";
            if (!selected.spell) {
                //token.style.zIndex = "3";
            } else {
                //token.style.zIndex = "0";
            }

            if (e.key == 'ArrowUp' || e.key == 'w' || e.key == 'W' || e.key == 'ArrowDown' || e.key == 's' || e.key == 'S' || e.key == 'ArrowRight' || e.key == 'd' || e.key == 'D' || e.key == 'ArrowLeft' || e.key == 'a' || e.key == 'A') {
                e.preventDefault();
            }
            
            //hotkeys
            //cant use hotkeys if movement is forbidden
            if (mana.hotkeys) {
                if (e.key == 'b') {
                    selectSpell(blink)
                }
                if (e.key == 'g') {
                    selectSpell(glamor)
                }
                if (e.key == 'p') {
                    selectSpell(pulverize)
                }
                if (e.key == 'h') {
                    selectSpell(heal)
                }
                if (e.key == 'f') {
                    selectSpell(flare)
                }
                if (e.key == 'x') {
                    selectSpell(dispel)
                }
            }
            
            
            //THE As
            if (player.position === "a1") {
                if (e.key == 'ArrowUp' || e.key == 'w' || e.key == 'W') {
                    playerToA();
                } else if (e.key == 'ArrowRight' || e.key == 'd' || e.key == 'D') {
                    player.previousPosition = "a1";
                    //moveTo(b1);
                    moveTo(b1);
                } else if (e.key == 'ArrowDown' || e.key == 's' || e.key == 'S') {
                    player.previousPosition = "a1";
                    moveTo(a2);
                    //moveTo(a2);
                } else if (e.key == 'ArrowLeft' || e.key == 'a' || e.key == 'A') {
                    playerTo1();
                }
            } else if (player.position === "a2") {
                if (e.key == 'ArrowUp' || e.key == 'w' || e.key == 'W') {
                    player.previousPosition = "a2";
                    moveTo(a1);
                } else if (e.key == 'ArrowRight' || e.key == 'd' || e.key == 'D') {
                    player.previousPosition = "a2";
                    moveTo(b2);
                } else if (e.key == 'ArrowDown' || e.key == 's' || e.key == 'S') {
                    player.previousPosition = "a2";
                    moveTo(a3);
                } else if (e.key == 'ArrowLeft' || e.key == 'a' || e.key == 'A') {
                    playerTo2();
                }
            } else if (player.position === "a3") {
                if (e.key == 'ArrowUp' || e.key == 'w' || e.key == 'W') {
                    player.previousPosition = "a3";
                    moveTo(a2);
                } else if (e.key == 'ArrowRight' || e.key == 'd' || e.key == 'D') {
                    player.previousPosition = "a3";
                    moveTo(b3);
                } else if (e.key == 'ArrowDown' || e.key == 's' || e.key == 'S') {
                    player.previousPosition = "a3";
                    moveTo(a4);
                } else if (e.key == 'ArrowLeft' || e.key == 'a' || e.key == 'A') {
                    playerTo3();
                }
            } else if (player.position === "a4") {
                if (e.key == 'ArrowUp' || e.key == 'w' || e.key == 'W') {
                    player.previousPosition = "a4";
                    moveTo(a3);
                } else if (e.key == 'ArrowRight' || e.key == 'd' || e.key == 'D') {
                    player.previousPosition = "a4";
                    moveTo(b4);
                } else if (e.key == 'ArrowDown' || e.key == 's' || e.key == 'S') {
                    player.previousPosition = "a4";
                    moveTo(a5);
                } else if (e.key == 'ArrowLeft' || e.key == 'a' || e.key == 'A') {
                    playerTo4();
                }
            } else if (player.position === "a5") {
                if (e.key == 'ArrowUp' || e.key == 'w' || e.key == 'W') {
                    player.previousPosition = "a5";
                    moveTo(a4);
                } else if (e.key == 'ArrowRight' || e.key == 'd' || e.key == 'D') {
                    player.previousPosition = "a5";
                    moveTo(b5);
                } else if (e.key == 'ArrowDown' || e.key == 's' || e.key == 'S') {
                    player.previousPosition = "a5";
                    moveTo(a6);
                } else if (e.key == 'ArrowLeft' || e.key == 'a' || e.key == 'A') {
                    playerTo5();
                }
            } else if (player.position === "a6") {
                if (e.key == 'ArrowUp' || e.key == 'w' || e.key == 'W') {
                    player.previousPosition = "a6";
                    moveTo(a5);
                } else if (e.key == 'ArrowRight' || e.key == 'd' || e.key == 'D') {
                    player.previousPosition = "a6";
                    moveTo(b6);
                } else if (e.key == 'ArrowDown' || e.key == 's' || e.key == 'S') {
                    player.previousPosition = "a6";
                    moveTo(a7);
                } else if (e.key == 'ArrowLeft' || e.key == 'a' || e.key == 'A') {
                    playerTo6();
                }
            } else if (player.position === "a7") {
                if (e.key == 'ArrowUp' || e.key == 'w' || e.key == 'W') {
                    player.previousPosition = "a7";
                    moveTo(a6);
                } else if (e.key == 'ArrowRight' || e.key == 'd' || e.key == 'D') {
                    player.previousPosition = "a7";
                    moveTo(b7);
                } else if (e.key == 'ArrowDown' || e.key == 's' || e.key == 'S') {
                    player.previousPosition = "a7";
                    playerToA8();
                } else if (e.key == 'ArrowLeft' || e.key == 'a' || e.key == 'A') {
                    playerTo7();
                }
            }
                //THE Bs
             else if (player.position === "b1") {
                if (e.key == 'ArrowUp' || e.key == 'w' || e.key == 'W') {
                    playerToB();
                } else if (e.key == 'ArrowRight' || e.key == 'd' || e.key == 'D') {
                    player.previousPosition = "b1";
                    moveTo(c1);
                } else if (e.key == 'ArrowDown' || e.key == 's' || e.key == 'S') {
                    player.previousPosition = "b1";
                    moveTo(b2);
                } else if (e.key == 'ArrowLeft' || e.key == 'a' || e.key == 'A') {
                    player.previousPosition = "b1";
                    moveTo(a1);
                }
            } else if (player.position === "b2") {
                if (e.key == 'ArrowUp' || e.key == 'w' || e.key == 'W') {
                    player.previousPosition = "b2";
                    moveTo(b1);
                } else if (e.key == 'ArrowRight' || e.key == 'd' || e.key == 'D') {
                    player.previousPosition = "b2";
                    moveTo(c2);
                } else if (e.key == 'ArrowDown' || e.key == 's' || e.key == 'S') {
                    player.previousPosition = "b2";
                    moveTo(b3);
                } else if (e.key == 'ArrowLeft' || e.key == 'a' || e.key == 'A') {
                    player.previousPosition = "b2";
                    moveTo(a2);
                }
            } else if (player.position === "b3") {
                if (e.key == 'ArrowUp' || e.key == 'w' || e.key == 'W') {
                    player.previousPosition = "b3";
                    moveTo(b2);
                } else if (e.key == 'ArrowRight' || e.key == 'd' || e.key == 'D') {
                    player.previousPosition = "b3";
                    moveTo(c3);
                } else if (e.key == 'ArrowDown' || e.key == 's' || e.key == 'S') {
                    player.previousPosition = "b3";
                    moveTo(b4);
                } else if (e.key == 'ArrowLeft' || e.key == 'a' || e.key == 'A') {
                    player.previousPosition = "b3";
                    moveTo(a3);
                }
            } else if (player.position === "b4") {
                if (e.key == 'ArrowUp' || e.key == 'w' || e.key == 'W') {
                    player.previousPosition = "b4";
                    moveTo(b3);
                } else if (e.key == 'ArrowRight' || e.key == 'd' || e.key == 'D') {
                    player.previousPosition = "b4";
                    moveTo(c4);
                } else if (e.key == 'ArrowDown' || e.key == 's' || e.key == 'S') {
                    player.previousPosition = "b4";
                    moveTo(b5);
                } else if (e.key == 'ArrowLeft' || e.key == 'a' || e.key == 'A') {
                    player.previousPosition = "b4";
                    moveTo(a4);
                }
            } else if (player.position === "b5") {
                if (e.key == 'ArrowUp' || e.key == 'w' || e.key == 'W') {
                    player.previousPosition = "b5";
                    moveTo(b4);
                } else if (e.key == 'ArrowRight' || e.key == 'd' || e.key == 'D') {
                    player.previousPosition = "b5";
                    moveTo(c5);
                } else if (e.key == 'ArrowDown' || e.key == 's' || e.key == 'S') {
                    player.previousPosition = "b5";
                    moveTo(b6);
                } else if (e.key == 'ArrowLeft' || e.key == 'a' || e.key == 'A') {
                    player.previousPosition = "b5";
                    moveTo(a5);
                }
            } else if (player.position === "b6") {
                if (e.key == 'ArrowUp' || e.key == 'w' || e.key == 'W') {
                    player.previousPosition = "b6";
                    moveTo(b5);
                } else if (e.key == 'ArrowRight' || e.key == 'd' || e.key == 'D') {
                    player.previousPosition = "b6";
                    moveTo(c6);
                } else if (e.key == 'ArrowDown' || e.key == 's' || e.key == 'S') {
                    player.previousPosition = "b6";
                    moveTo(b7);
                } else if (e.key == 'ArrowLeft' || e.key == 'a' || e.key == 'A') {
                    player.previousPosition = "b6";
                    moveTo(a6);
                }
            } else if (player.position === "b7") {
                if (e.key == 'ArrowUp' || e.key == 'w' || e.key == 'W') {
                    player.previousPosition = "b7";
                    moveTo(b6);
                } else if (e.key == 'ArrowRight' || e.key == 'd' || e.key == 'D') {
                    player.previousPosition = "b7";
                    moveTo(c7);
                } else if (e.key == 'ArrowDown' || e.key == 's' || e.key == 'S') {
                    player.previousPosition = "b7";
                    playerToB8();
                } else if (e.key == 'ArrowLeft' || e.key == 'a' || e.key == 'A') {
                    player.previousPosition = "b7";
                    moveTo(a7);
                }
            }
                //THE Cs
                //THE Cs
             else if (player.position === "c1") {
                if (e.key == 'ArrowUp' || e.key == 'w' || e.key == 'W') {
                    playerToC();
                } else if (e.key == 'ArrowRight' || e.key == 'd' || e.key == 'D') {
                    player.previousPosition = "c1";
                    moveTo(d1);
                } else if (e.key == 'ArrowDown' || e.key == 's' || e.key == 'S') {
                    player.previousPosition = "c1";
                    moveTo(c2);
                } else if (e.key == 'ArrowLeft' || e.key == 'a' || e.key == 'A') {
                    player.previousPosition = "c1";
                    moveTo(b1);
                }
            } else if (player.position === "c2") {
                if (e.key == 'ArrowUp' || e.key == 'w' || e.key == 'W') {
                    player.previousPosition = "c2";
                    moveTo(c1);
                } else if (e.key == 'ArrowRight' || e.key == 'd' || e.key == 'D') {
                    player.previousPosition = "c2";
                    moveTo(d2);
                } else if (e.key == 'ArrowDown' || e.key == 's' || e.key == 'S') {
                    player.previousPosition = "c2";
                    moveTo(c3);
                } else if (e.key == 'ArrowLeft' || e.key == 'a' || e.key == 'A') {
                    player.previousPosition = "c2";
                    moveTo(b2);
                }
            } else if (player.position === "c3") {
                if (e.key == 'ArrowUp' || e.key == 'w' || e.key == 'W') {
                    player.previousPosition = "c3";
                    moveTo(c2);
                } else if (e.key == 'ArrowRight' || e.key == 'd' || e.key == 'D') {
                    player.previousPosition = "c3";
                    moveTo(d3);
                } else if (e.key == 'ArrowDown' || e.key == 's' || e.key == 'S') {
                    player.previousPosition = "c3";
                    moveTo(c4);
                } else if (e.key == 'ArrowLeft' || e.key == 'a' || e.key == 'A') {
                    player.previousPosition = "c3";
                    moveTo(b3);
                }
            } else if (player.position === "c4") {
                if (e.key == 'ArrowUp' || e.key == 'w' || e.key == 'W') {
                    player.previousPosition = "c4";
                    moveTo(c3);
                } else if (e.key == 'ArrowRight' || e.key == 'd' || e.key == 'D') {
                     player.previousPosition = "c4";
                    moveTo(d4);
                } else if (e.key == 'ArrowDown' || e.key == 's' || e.key == 'S') {
                     player.previousPosition = "c4";
                    moveTo(c5);
                } else if (e.key == 'ArrowLeft' || e.key == 'a' || e.key == 'A') {
                     player.previousPosition = "c4";
                    moveTo(b4);
                }
            } else if (player.position === "c5") {
                if (e.key == 'ArrowUp' || e.key == 'w' || e.key == 'W') {
                    player.previousPosition = "c5";
                    moveTo(c4);
                } else if (e.key == 'ArrowRight' || e.key == 'd' || e.key == 'D') {
                    player.previousPosition = "c5";
                    moveTo(d5);
                } else if (e.key == 'ArrowDown' || e.key == 's' || e.key == 'S') {
                    player.previousPosition = "c5";
                    moveTo(c6);
                } else if (e.key == 'ArrowLeft' || e.key == 'a' || e.key == 'A') {
                    player.previousPosition = "c5";
                    moveTo(b5);
                }
            } else if (player.position === "c6") {
                if (e.key == 'ArrowUp' || e.key == 'w' || e.key == 'W') {
                    player.previousPosition = "c6";
                    moveTo(c5);
                } else if (e.key == 'ArrowRight' || e.key == 'd' || e.key == 'D') {
                    player.previousPosition = "c6";
                    moveTo(d6);
                } else if (e.key == 'ArrowDown' || e.key == 's' || e.key == 'S') {
                    player.previousPosition = "c6";
                    moveTo(c7);
                } else if (e.key == 'ArrowLeft' || e.key == 'a' || e.key == 'A') {
                    player.previousPosition = "c6";
                    moveTo(b6);
                }
            } else if (player.position === "c7") {
                if (e.key == 'ArrowUp' || e.key == 'w' || e.key == 'W') {
                    player.previousPosition = "c7";
                    moveTo(c6);
                } else if (e.key == 'ArrowRight' || e.key == 'd' || e.key == 'D') {
                    player.previousPosition = "c7";
                    moveTo(d7);
                } else if (e.key == 'ArrowDown' || e.key == 's' || e.key == 'S') {
                    player.previousPosition = "c7";
                    playerToC8();
                } else if (e.key == 'ArrowLeft' || e.key == 'a' || e.key == 'A') {
                    player.previousPosition = "c7";
                    moveTo(b7);
                }
            }
                //THE Ds
                //THE Ds
             else if (player.position === "d1") {
                if (e.key == 'ArrowUp' || e.key == 'w' || e.key == 'W') {
                    playerToD();
                } else if (e.key == 'ArrowRight' || e.key == 'd' || e.key == 'D') {
                    player.previousPosition = "d1";
                    moveTo(e1);
                } else if (e.key == 'ArrowDown' || e.key == 's' || e.key == 'S') {
                    player.previousPosition = "d1";
                    moveTo(d2);
                } else if (e.key == 'ArrowLeft' || e.key == 'a' || e.key == 'A') {
                    player.previousPosition = "d1";
                    moveTo(c1);
                }
            } else if (player.position === "d2") {
                if (e.key == 'ArrowUp' || e.key == 'w' || e.key == 'W') {
                    player.previousPosition = "d2";
                    moveTo(d1);
                } else if (e.key == 'ArrowRight' || e.key == 'd' || e.key == 'D') {
                    player.previousPosition = "d2";
                    moveTo(e2);
                } else if (e.key == 'ArrowDown' || e.key == 's' || e.key == 'S') {
                    player.previousPosition = "d2";
                    moveTo(d3);
                } else if (e.key == 'ArrowLeft' || e.key == 'a' || e.key == 'A') {
                    player.previousPosition = "d2";
                    moveTo(c2);
                }
            } else if (player.position === "d3") {
                if (e.key == 'ArrowUp' || e.key == 'w' || e.key == 'W') {
                    player.previousPosition = "d3";
                    moveTo(d2);
                } else if (e.key == 'ArrowRight' || e.key == 'd' || e.key == 'D') {
                    player.previousPosition = "d3";
                    moveTo(e3);
                } else if (e.key == 'ArrowDown' || e.key == 's' || e.key == 'S') {
                    player.previousPosition = "d3";
                    moveTo(d4);
                } else if (e.key == 'ArrowLeft' || e.key == 'a' || e.key == 'A') {
                    player.previousPosition = "d3";
                    moveTo(c3);
                }
            } else if (player.position === "d4") {
                if (e.key == 'ArrowUp' || e.key == 'w' || e.key == 'W') {
                    player.previousPosition = "d4";
                    moveTo(d3);
                } else if (e.key == 'ArrowRight' || e.key == 'd' || e.key == 'D') {
                    player.previousPosition = "d4";
                    moveTo(e4);
                } else if (e.key == 'ArrowDown' || e.key == 's' || e.key == 'S') {
                    player.previousPosition = "d4";
                    moveTo(d5);
                } else if (e.key == 'ArrowLeft' || e.key == 'a' || e.key == 'A') {
                    player.previousPosition = "d4";
                    moveTo(c4);
                }
            } else if (player.position === "d5") {
                if (e.key == 'ArrowUp' || e.key == 'w' || e.key == 'W') {
                    player.previousPosition = "d5";
                    moveTo(d4);
                } else if (e.key == 'ArrowRight' || e.key == 'd' || e.key == 'D') {
                    player.previousPosition = "d5";
                    moveTo(e5);
                } else if (e.key == 'ArrowDown' || e.key == 's' || e.key == 'S') {
                    player.previousPosition = "d5";
                    moveTo(d6);
                } else if (e.key == 'ArrowLeft' || e.key == 'a' || e.key == 'A') {
                    player.previousPosition = "d5";
                    moveTo(c5);
                }
            } else if (player.position === "d6") {
                if (e.key == 'ArrowUp' || e.key == 'w' || e.key == 'W') {
                    player.previousPosition = "d6";
                    moveTo(d5);
                } else if (e.key == 'ArrowRight' || e.key == 'd' || e.key == 'D') {
                    player.previousPosition = "d6";
                    moveTo(e6);
                } else if (e.key == 'ArrowDown' || e.key == 's' || e.key == 'S') {
                    player.previousPosition = "d6";
                    moveTo(d7);
                } else if (e.key == 'ArrowLeft' || e.key == 'a' || e.key == 'A') {
                    player.previousPosition = "d6";
                    moveTo(c6);
                }
            } else if (player.position === "d7") {
                if (e.key == 'ArrowUp' || e.key == 'w' || e.key == 'W') {
                    player.previousPosition = "d7";
                    moveTo(d6);
                } else if (e.key == 'ArrowRight' || e.key == 'd' || e.key == 'D') {
                    player.previousPosition = "d7";
                    moveTo(e7);
                } else if (e.key == 'ArrowDown' || e.key == 's' || e.key == 'S') {
                    player.previousPosition = "d7";
                    playerToD8();
                } else if (e.key == 'ArrowLeft' || e.key == 'a' || e.key == 'A') {
                    player.previousPosition = "d7";
                    moveTo(c7);
                }
            }
            //THE Es
                //THE Es
             else if (player.position === "e1") {
                if (e.key == 'ArrowUp' || e.key == 'w' || e.key == 'W') {
                    playerToE();
                } else if (e.key == 'ArrowRight' || e.key == 'd' || e.key == 'D') {
                    player.previousPosition = "e1";
                    moveTo(f1);
                } else if (e.key == 'ArrowDown' || e.key == 's' || e.key == 'S') {
                    player.previousPosition = "e1";
                    moveTo(e2);
                } else if (e.key == 'ArrowLeft' || e.key == 'a' || e.key == 'A') {
                    player.previousPosition = "e1";
                    moveTo(d1);
                }
            } else if (player.position === "e2") {
                if (e.key == 'ArrowUp' || e.key == 'w' || e.key == 'W') {
                    player.previousPosition = "e2";
                    moveTo(e1);
                } else if (e.key == 'ArrowRight' || e.key == 'd' || e.key == 'D') {
                    player.previousPosition = "e2";
                    moveTo(f2);
                } else if (e.key == 'ArrowDown' || e.key == 's' || e.key == 'S') {
                    player.previousPosition = "e2";
                    moveTo(e3);
                } else if (e.key == 'ArrowLeft' || e.key == 'a' || e.key == 'A') {
                    player.previousPosition = "e2";
                    moveTo(d2);
                }
            } else if (player.position === "e3") {
                if (e.key == 'ArrowUp' || e.key == 'w' || e.key == 'W') {
                    player.previousPosition = "e3";
                    moveTo(e2);
                } else if (e.key == 'ArrowRight' || e.key == 'd' || e.key == 'D') {
                    player.previousPosition = "e3";
                    moveTo(f3);
                } else if (e.key == 'ArrowDown' || e.key == 's' || e.key == 'S') {
                    player.previousPosition = "e3";
                    moveTo(e4);
                } else if (e.key == 'ArrowLeft' || e.key == 'a' || e.key == 'A') {
                    player.previousPosition = "e3";
                    moveTo(d3);
                }
            } else if (player.position === "e4") {
                if (e.key == 'ArrowUp' || e.key == 'w' || e.key == 'W') {
                    player.previousPosition = "e4";
                    moveTo(e3);
                } else if (e.key == 'ArrowRight' || e.key == 'd' || e.key == 'D') {
                    player.previousPosition = "e4";
                    moveTo(f4);
                } else if (e.key == 'ArrowDown' || e.key == 's' || e.key == 'S') {
                    player.previousPosition = "e4";
                    moveTo(e5);
                } else if (e.key == 'ArrowLeft' || e.key == 'a' || e.key == 'A') {
                    player.previousPosition = "e4";
                    moveTo(d4);
                    
                }
            } else if (player.position === "e5") {
                if (e.key == 'ArrowUp' || e.key == 'w' || e.key == 'W') {
                    player.previousPosition = "e5";
                    moveTo(e4);
                } else if (e.key == 'ArrowRight' || e.key == 'd' || e.key == 'D') {
                    player.previousPosition = "e5";
                    moveTo(f5);
                } else if (e.key == 'ArrowDown' || e.key == 's' || e.key == 'S') {
                    player.previousPosition = "e5";
                    moveTo(e6);
                } else if (e.key == 'ArrowLeft' || e.key == 'a' || e.key == 'A') {
                    player.previousPosition = "e5";
                    moveTo(d5);
                }
            } else if (player.position === "e6") {
                if (e.key == 'ArrowUp' || e.key == 'w' || e.key == 'W') {
                    player.previousPosition = "e6";
                    moveTo(e5);
                } else if (e.key == 'ArrowRight' || e.key == 'd' || e.key == 'D') {
                    player.previousPosition = "e6";
                    moveTo(f6);
                } else if (e.key == 'ArrowDown' || e.key == 's' || e.key == 'S') {
                    player.previousPosition = "e6";
                    moveTo(e7);
                } else if (e.key == 'ArrowLeft' || e.key == 'a' || e.key == 'A') {
                    player.previousPosition = "e6";
                    moveTo(d6);
                }
            } else if (player.position === "e7") {
                if (e.key == 'ArrowUp' || e.key == 'w' || e.key == 'W') {
                    player.previousPosition = "e7";
                    moveTo(e6);
                } else if (e.key == 'ArrowRight' || e.key == 'd' || e.key == 'D') {
                    player.previousPosition = "e7";
                    moveTo(f7);
                } else if (e.key == 'ArrowDown' || e.key == 's' || e.key == 'S') {
                    player.previousPosition = "e7";
                    playerToE8();
                } else if (e.key == 'ArrowLeft' || e.key == 'a' || e.key == 'A') {
                    player.previousPosition = "e7";
                    moveTo(d7);
                }
            }
                //THE Fs
                //THE Fs
             else if (player.position === "f1") {
                if (e.key == 'ArrowUp' || e.key == 'w' || e.key == 'W') {
                    playerToF();
                } else if (e.key == 'ArrowRight' || e.key == 'd' || e.key == 'D') {
                    player.previousPosition = "f1";
                    moveTo(g1);
                } else if (e.key == 'ArrowDown' || e.key == 's' || e.key == 'S') {
                    player.previousPosition = "f1";
                    moveTo(f2);
                } else if (e.key == 'ArrowLeft' || e.key == 'a' || e.key == 'A') {
                    player.previousPosition = "f1";
                    moveTo(e1);
                }
            } else if (player.position === "f2") {
                if (e.key == 'ArrowUp' || e.key == 'w' || e.key == 'W') {
                    player.previousPosition = "f2";
                    moveTo(f1);
                } else if (e.key == 'ArrowRight' || e.key == 'd' || e.key == 'D') {
                    player.previousPosition = "f2";
                    moveTo(g2);
                } else if (e.key == 'ArrowDown' || e.key == 's' || e.key == 'S') {
                    player.previousPosition = "f2";
                    moveTo(f3);
                } else if (e.key == 'ArrowLeft' || e.key == 'a' || e.key == 'A') {
                    player.previousPosition = "f2";
                    moveTo(e2);
                }
            } else if (player.position === "f3") {
                if (e.key == 'ArrowUp' || e.key == 'w' || e.key == 'W') {
                    player.previousPosition = "f3";
                    moveTo(f2);
                } else if (e.key == 'ArrowRight' || e.key == 'd' || e.key == 'D') {
                    player.previousPosition = "f3";
                    moveTo(g3);
                } else if (e.key == 'ArrowDown' || e.key == 's' || e.key == 'S') {
                    player.previousPosition = "f3";
                    moveTo(f4);
                } else if (e.key == 'ArrowLeft' || e.key == 'a' || e.key == 'A') {
                    player.previousPosition = "f3";
                    moveTo(e3);
                }
            } else if (player.position === "f4") {
                if (e.key == 'ArrowUp' || e.key == 'w' || e.key == 'W') {
                    player.previousPosition = "f4";
                    moveTo(f3);
                } else if (e.key == 'ArrowRight' || e.key == 'd' || e.key == 'D') {
                    player.previousPosition = "f4";
                    moveTo(g4);
                } else if (e.key == 'ArrowDown' || e.key == 's' || e.key == 'S') {
                    player.previousPosition = "f4";
                    moveTo(f5);
                } else if (e.key == 'ArrowLeft' || e.key == 'a' || e.key == 'A') {
                    player.previousPosition = "f4";
                    moveTo(e4);
                }
            } else if (player.position === "f5") {
                if (e.key == 'ArrowUp' || e.key == 'w' || e.key == 'W') {
                    player.previousPosition = "f5";
                    moveTo(f4);
                } else if (e.key == 'ArrowRight' || e.key == 'd' || e.key == 'D') {
                    player.previousPosition = "f5";
                    moveTo(g5);
                } else if (e.key == 'ArrowDown' || e.key == 's' || e.key == 'S') {
                    player.previousPosition = "f5";
                    moveTo(f6);
                } else if (e.key == 'ArrowLeft' || e.key == 'a' || e.key == 'A') {
                    player.previousPosition = "f5";
                    moveTo(e5);
                }
            } else if (player.position === "f6") {
                if (e.key == 'ArrowUp' || e.key == 'w' || e.key == 'W') {
                    player.previousPosition = "f6";
                    moveTo(f5);
                } else if (e.key == 'ArrowRight' || e.key == 'd' || e.key == 'D') {
                    player.previousPosition = "f6";
                    moveTo(g6);
                } else if (e.key == 'ArrowDown' || e.key == 's' || e.key == 'S') {
                    player.previousPosition = "f6";
                    moveTo(f7);
                } else if (e.key == 'ArrowLeft' || e.key == 'a' || e.key == 'A') {
                    player.previousPosition = "f6";
                    moveTo(e6);
                }
            } else if (player.position === "f7") {
                if (e.key == 'ArrowUp' || e.key == 'w' || e.key == 'W') {
                    player.previousPosition = "f7";
                    moveTo(f6);
                } else if (e.key == 'ArrowRight' || e.key == 'd' || e.key == 'D') {
                    player.previousPosition = "f7";
                    moveTo(g7);
                } else if (e.key == 'ArrowDown' || e.key == 's' || e.key == 'S') {
                    player.previousPosition = "f7";
                    playerToF8();
                } else if (e.key == 'ArrowLeft' || e.key == 'a' || e.key == 'A') {
                    player.previousPosition = "f7";
                    moveTo(e7);
                }
            } 
                //THE Gs
                //THE Gs
             else if (player.position === "g1") {
                if (e.key == 'ArrowUp' || e.key == 'w' || e.key == 'W') {
                    playerToG();
                } else if (e.key == 'ArrowRight' || e.key == 'd' || e.key == 'D') {
                    player.previousPosition = "g1";
                    playerToH1();
                } else if (e.key == 'ArrowDown' || e.key == 's' || e.key == 'S') {
                    player.previousPosition = "g1";
                    moveTo(g2);
                } else if (e.key == 'ArrowLeft' || e.key == 'a' || e.key == 'A') {
                    player.previousPosition = "g1";
                    moveTo(f1);
                }
            } else if (player.position === "g2") {
                if (e.key == 'ArrowUp' || e.key == 'w' || e.key == 'W') {
                    player.previousPosition = "g2";
                    moveTo(g1);
                } else if (e.key == 'ArrowRight' || e.key == 'd' || e.key == 'D') {
                    player.previousPosition = "g2";
                    playerToH2();
                } else if (e.key == 'ArrowDown' || e.key == 's' || e.key == 'S') {
                    player.previousPosition = "g2";
                    moveTo(g3);
                } else if (e.key == 'ArrowLeft' || e.key == 'a' || e.key == 'A') {
                    player.previousPosition = "g2";
                    moveTo(f2);
                }
            } else if (player.position === "g3") {
                if (e.key == 'ArrowUp' || e.key == 'w' || e.key == 'W') {
                    player.previousPosition = "g3";
                    moveTo(g2);
                } else if (e.key == 'ArrowRight' || e.key == 'd' || e.key == 'D') {
                    player.previousPosition = "g3";
                    playerToH3();
                } else if (e.key == 'ArrowDown' || e.key == 's' || e.key == 'S') {
                    player.previousPosition = "g3";
                    moveTo(g4);
                } else if (e.key == 'ArrowLeft' || e.key == 'a' || e.key == 'A') {
                    player.previousPosition = "g3";
                    moveTo(f3);
                }
            } else if (player.position === "g4") {
                if (e.key == 'ArrowUp' || e.key == 'w' || e.key == 'W') {
                    player.previousPosition = "g4";
                    moveTo(g3);
                } else if (e.key == 'ArrowRight' || e.key == 'd' || e.key == 'D') {
                    player.previousPosition = "g4";
                    playerToH4();
                } else if (e.key == 'ArrowDown' || e.key == 's' || e.key == 'S') {
                    player.previousPosition = "g4";
                    moveTo(g5);
                } else if (e.key == 'ArrowLeft' || e.key == 'a' || e.key == 'A') {
                    player.previousPosition = "g4";
                    moveTo(f4);
                }
            } else if (player.position === "g5") {
                if (e.key == 'ArrowUp' || e.key == 'w' || e.key == 'W') {
                    player.previousPosition = "g5";
                    moveTo(g4);
                } else if (e.key == 'ArrowRight' || e.key == 'd' || e.key == 'D') {
                    player.previousPosition = "g5";
                    playerToH5();
                } else if (e.key == 'ArrowDown' || e.key == 's' || e.key == 'S') {
                    player.previousPosition = "g5";
                    moveTo(g6);
                } else if (e.key == 'ArrowLeft' || e.key == 'a' || e.key == 'A') {
                    player.previousPosition = "g5";
                    moveTo(f5);
                }
            } else if (player.position === "g6") {
                if (e.key == 'ArrowUp' || e.key == 'w' || e.key == 'W') {
                    player.previousPosition = "g6";
                    moveTo(g5);
                } else if (e.key == 'ArrowRight' || e.key == 'd' || e.key == 'D') {
                    player.previousPosition = "g6";
                    playerToH6();
                } else if (e.key == 'ArrowDown' || e.key == 's' || e.key == 'S') {
                    player.previousPosition = "g6";
                    moveTo(g7);
                } else if (e.key == 'ArrowLeft' || e.key == 'a' || e.key == 'A') {
                    player.previousPosition = "g6";
                    moveTo(f6);
                }
            } else if (player.position === "g7") {
                if (e.key == 'ArrowUp' || e.key == 'w' || e.key == 'W') {
                    player.previousPosition = "g7";
                    moveTo(g6);
                } else if (e.key == 'ArrowRight' || e.key == 'd' || e.key == 'D') {
                    player.previousPosition = "g7";
                    playerToH7();
                } else if (e.key == 'ArrowDown' || e.key == 's' || e.key == 'S') {
                    player.previousPosition = "g7";
                    playerToG8();
                } else if (e.key == 'ArrowLeft' || e.key == 'a' || e.key == 'A') {
                    player.previousPosition = "g7";
                    moveTo(f7);
                }
            }
        }
}});
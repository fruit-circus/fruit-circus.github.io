//Tile Checker

const movement = {
    allow: true,
}

const player =  {
    position: "e3",
    shrunk: false,
}


document.addEventListener("DOMContentLoaded", (event) => {  
    checkWhichTilesShouldBeIncluded();
   document.onkeydown = (e) => {
        if (movement.allow) {
            if (e.key == 'ArrowUp' || e.key == 'w' || e.key == 'ArrowDown' || e.key == 's' || e.key == 'ArrowRight' || e.key == 'd' || e.key == 'ArrowLeft' || e.key == 'a') {
                e.preventDefault();
            }
            
            //hotkeys
            //cant use hotkeys if movement is forbidden
            if (mana.hotkeys) {
                if (e.key == 'b') {
                    selectBlink();
                }
                if (e.key == 'g') {
                    selectGlam();
                }
                if (e.key == 'p') {
                    selectPulverize();
                }
            }
            
            
            //THE As
            if (player.position === "a1") {
                if (e.key == 'ArrowUp' || e.key == 'w') {
                    playerToA();
                } else if (e.key == 'ArrowRight' || e.key == 'd') {
                    player.previousPosition = "a1";
                    playerToB1();
                } else if (e.key == 'ArrowDown' || e.key == 's') {
                    player.previousPosition = "a1";
                    playerToA2();
                } else if (e.key == 'ArrowLeft' || e.key == 'a') {
                    playerTo1();
                }
            } else if (player.position === "a2") {
                if (e.key == 'ArrowUp' || e.key == 'w') {
                    player.previousPosition = "a2";
                    playerToA1();
                } else if (e.key == 'ArrowRight' || e.key == 'd') {
                    player.previousPosition = "a2";
                    playerToB2();
                } else if (e.key == 'ArrowDown' || e.key == 's') {
                    player.previousPosition = "a2";
                    playerToA3();
                } else if (e.key == 'ArrowLeft' || e.key == 'a') {
                    playerTo2();
                }
            } else if (player.position === "a3") {
                if (e.key == 'ArrowUp' || e.key == 'w') {
                    player.previousPosition = "a3";
                    playerToA2();
                } else if (e.key == 'ArrowRight' || e.key == 'd') {
                    player.previousPosition = "a3";
                    playerToB3();
                } else if (e.key == 'ArrowDown' || e.key == 's') {
                    player.previousPosition = "a3";
                    playerToA4();
                } else if (e.key == 'ArrowLeft' || e.key == 'a') {
                    playerTo3();
                }
            } else if (player.position === "a4") {
                if (e.key == 'ArrowUp' || e.key == 'w') {
                    player.previousPosition = "a4";
                    playerToA3();
                } else if (e.key == 'ArrowRight' || e.key == 'd') {
                    player.previousPosition = "a4";
                    playerToB4();
                } else if (e.key == 'ArrowDown' || e.key == 's') {
                    player.previousPosition = "a4";
                    playerToA5();
                } else if (e.key == 'ArrowLeft' || e.key == 'a') {
                    playerTo4();
                }
            } else if (player.position === "a5") {
                if (e.key == 'ArrowUp' || e.key == 'w') {
                    player.previousPosition = "a5";
                    playerToA4();
                } else if (e.key == 'ArrowRight' || e.key == 'd') {
                    player.previousPosition = "a5";
                    playerToB5();
                } else if (e.key == 'ArrowDown' || e.key == 's') {
                    player.previousPosition = "a5";
                    playerToA6();
                } else if (e.key == 'ArrowLeft' || e.key == 'a') {
                    playerTo5();
                }
            } else if (player.position === "a6") {
                if (e.key == 'ArrowUp' || e.key == 'w') {
                    player.previousPosition = "a6";
                    playerToA5();
                } else if (e.key == 'ArrowRight' || e.key == 'd') {
                    player.previousPosition = "a6";
                    playerToB6();
                } else if (e.key == 'ArrowDown' || e.key == 's') {
                    player.previousPosition = "a6";
                    playerToA7();
                } else if (e.key == 'ArrowLeft' || e.key == 'a') {
                    playerTo6();
                }
            } else if (player.position === "a7") {
                if (e.key == 'ArrowUp' || e.key == 'w') {
                    player.previousPosition = "a7";
                    playerToA6();
                } else if (e.key == 'ArrowRight' || e.key == 'd') {
                    player.previousPosition = "a7";
                    playerToB7();
                } else if (e.key == 'ArrowDown' || e.key == 's') {
                    player.previousPosition = "a7";
                    playerToA8();
                } else if (e.key == 'ArrowLeft' || e.key == 'a') {
                    playerTo7();
                }
            }
                //THE Bs
             else if (player.position === "b1") {
                if (e.key == 'ArrowUp' || e.key == 'w') {
                    playerToB();
                } else if (e.key == 'ArrowRight' || e.key == 'd') {
                    player.previousPosition = "b1";
                    playerToC1();
                } else if (e.key == 'ArrowDown' || e.key == 's') {
                    player.previousPosition = "b1";
                    playerToB2();
                } else if (e.key == 'ArrowLeft' || e.key == 'a') {
                    player.previousPosition = "b1";
                    playerToA1();
                }
            } else if (player.position === "b2") {
                if (e.key == 'ArrowUp' || e.key == 'w') {
                    player.previousPosition = "b2";
                    playerToB1();
                } else if (e.key == 'ArrowRight' || e.key == 'd') {
                    player.previousPosition = "b2";
                    playerToC2();
                } else if (e.key == 'ArrowDown' || e.key == 's') {
                    player.previousPosition = "b2";
                    playerToB3();
                } else if (e.key == 'ArrowLeft' || e.key == 'a') {
                    player.previousPosition = "b2";
                    playerToA2();
                }
            } else if (player.position === "b3") {
                if (e.key == 'ArrowUp' || e.key == 'w') {
                    player.previousPosition = "b3";
                    playerToB2();
                } else if (e.key == 'ArrowRight' || e.key == 'd') {
                    player.previousPosition = "b3";
                    playerToC3();
                } else if (e.key == 'ArrowDown' || e.key == 's') {
                    player.previousPosition = "b3";
                    playerToB4();
                } else if (e.key == 'ArrowLeft' || e.key == 'a') {
                    player.previousPosition = "b3";
                    playerToA3();
                }
            } else if (player.position === "b4") {
                if (e.key == 'ArrowUp' || e.key == 'w') {
                    player.previousPosition = "b4";
                    playerToB3();
                } else if (e.key == 'ArrowRight' || e.key == 'd') {
                    player.previousPosition = "b4";
                    playerToC4();
                } else if (e.key == 'ArrowDown' || e.key == 's') {
                    player.previousPosition = "b4";
                    playerToB5();
                } else if (e.key == 'ArrowLeft' || e.key == 'a') {
                    player.previousPosition = "b4";
                    playerToA4();
                }
            } else if (player.position === "b5") {
                if (e.key == 'ArrowUp' || e.key == 'w') {
                    player.previousPosition = "b5";
                    playerToB4();
                } else if (e.key == 'ArrowRight' || e.key == 'd') {
                    player.previousPosition = "b5";
                    playerToC5();
                } else if (e.key == 'ArrowDown' || e.key == 's') {
                    player.previousPosition = "b5";
                    playerToB6();
                } else if (e.key == 'ArrowLeft' || e.key == 'a') {
                    player.previousPosition = "b5";
                    playerToA5();
                }
            } else if (player.position === "b6") {
                if (e.key == 'ArrowUp' || e.key == 'w') {
                    player.previousPosition = "b6";
                    playerToB5();
                } else if (e.key == 'ArrowRight' || e.key == 'd') {
                    player.previousPosition = "b6";
                    playerToC6();
                } else if (e.key == 'ArrowDown' || e.key == 's') {
                    player.previousPosition = "b6";
                    playerToB7();
                } else if (e.key == 'ArrowLeft' || e.key == 'a') {
                    player.previousPosition = "b6";
                    playerToA6();
                }
            } else if (player.position === "b7") {
                if (e.key == 'ArrowUp' || e.key == 'w') {
                    player.previousPosition = "b7";
                    playerToB6();
                } else if (e.key == 'ArrowRight' || e.key == 'd') {
                    player.previousPosition = "b7";
                    playerToC7();
                } else if (e.key == 'ArrowDown' || e.key == 's') {
                    player.previousPosition = "b7";
                    playerToB8();
                } else if (e.key == 'ArrowLeft' || e.key == 'a') {
                    player.previousPosition = "b7";
                    playerToA7();
                }
            }
                //THE Cs
                //THE Cs
             else if (player.position === "c1") {
                if (e.key == 'ArrowUp' || e.key == 'w') {
                    playerToC();
                } else if (e.key == 'ArrowRight' || e.key == 'd') {
                    player.previousPosition = "c1";
                    playerToD1();
                } else if (e.key == 'ArrowDown' || e.key == 's') {
                    player.previousPosition = "c1";
                    playerToC2();
                } else if (e.key == 'ArrowLeft' || e.key == 'a') {
                    player.previousPosition = "c1";
                    playerToB1();
                }
            } else if (player.position === "c2") {
                if (e.key == 'ArrowUp' || e.key == 'w') {
                    player.previousPosition = "c2";
                    playerToC1();
                } else if (e.key == 'ArrowRight' || e.key == 'd') {
                    player.previousPosition = "c2";
                    playerToD2();
                } else if (e.key == 'ArrowDown' || e.key == 's') {
                    player.previousPosition = "c2";
                    playerToC3();
                } else if (e.key == 'ArrowLeft' || e.key == 'a') {
                    player.previousPosition = "c2";
                    playerToB2();
                }
            } else if (player.position === "c3") {
                if (e.key == 'ArrowUp' || e.key == 'w') {
                    player.previousPosition = "c3";
                    playerToC2();
                } else if (e.key == 'ArrowRight' || e.key == 'd') {
                    player.previousPosition = "c3";
                    playerToD3();
                } else if (e.key == 'ArrowDown' || e.key == 's') {
                    player.previousPosition = "c3";
                    playerToC4();
                } else if (e.key == 'ArrowLeft' || e.key == 'a') {
                    player.previousPosition = "c3";
                    playerToB3();
                }
            } else if (player.position === "c4") {
                if (e.key == 'ArrowUp' || e.key == 'w') {
                    player.previousPosition = "c4";
                    playerToC3();
                } else if (e.key == 'ArrowRight' || e.key == 'd') {
                     player.previousPosition = "c4";
                    playerToD4();
                } else if (e.key == 'ArrowDown' || e.key == 's') {
                     player.previousPosition = "c4";
                    playerToC5();
                } else if (e.key == 'ArrowLeft' || e.key == 'a') {
                     player.previousPosition = "c4";
                    playerToB4();
                }
            } else if (player.position === "c5") {
                if (e.key == 'ArrowUp' || e.key == 'w') {
                    player.previousPosition = "c5";
                    playerToC4();
                } else if (e.key == 'ArrowRight' || e.key == 'd') {
                    player.previousPosition = "c5";
                    playerToD5();
                } else if (e.key == 'ArrowDown' || e.key == 's') {
                    player.previousPosition = "c5";
                    playerToC6();
                } else if (e.key == 'ArrowLeft' || e.key == 'a') {
                    player.previousPosition = "c5";
                    playerToB5();
                }
            } else if (player.position === "c6") {
                if (e.key == 'ArrowUp' || e.key == 'w') {
                    player.previousPosition = "c6";
                    playerToC5();
                } else if (e.key == 'ArrowRight' || e.key == 'd') {
                    player.previousPosition = "c6";
                    playerToD6();
                } else if (e.key == 'ArrowDown' || e.key == 's') {
                    player.previousPosition = "c6";
                    playerToC7();
                } else if (e.key == 'ArrowLeft' || e.key == 'a') {
                    player.previousPosition = "c6";
                    playerToB6();
                }
            } else if (player.position === "c7") {
                if (e.key == 'ArrowUp' || e.key == 'w') {
                    player.previousPosition = "c7";
                    playerToC6();
                } else if (e.key == 'ArrowRight' || e.key == 'd') {
                    player.previousPosition = "c7";
                    playerToD7();
                } else if (e.key == 'ArrowDown' || e.key == 's') {
                    player.previousPosition = "c7";
                    playerToC8();
                } else if (e.key == 'ArrowLeft' || e.key == 'a') {
                    player.previousPosition = "c7";
                    playerToB7();
                }
            }
                //THE Ds
                //THE Ds
             else if (player.position === "d1") {
                if (e.key == 'ArrowUp' || e.key == 'w') {
                    playerToD();
                } else if (e.key == 'ArrowRight' || e.key == 'd') {
                    player.previousPosition = "d1";
                    playerToE1();
                } else if (e.key == 'ArrowDown' || e.key == 's') {
                    player.previousPosition = "d1";
                    playerToD2();
                } else if (e.key == 'ArrowLeft' || e.key == 'a') {
                    player.previousPosition = "d1";
                    playerToC1();
                }
            } else if (player.position === "d2") {
                if (e.key == 'ArrowUp' || e.key == 'w') {
                    player.previousPosition = "d2";
                    playerToD1();
                } else if (e.key == 'ArrowRight' || e.key == 'd') {
                    player.previousPosition = "d2";
                    playerToE2();
                } else if (e.key == 'ArrowDown' || e.key == 's') {
                    player.previousPosition = "d2";
                    playerToD3();
                } else if (e.key == 'ArrowLeft' || e.key == 'a') {
                    player.previousPosition = "d2";
                    playerToC2();
                }
            } else if (player.position === "d3") {
                if (e.key == 'ArrowUp' || e.key == 'w') {
                    player.previousPosition = "d3";
                    playerToD2();
                } else if (e.key == 'ArrowRight' || e.key == 'd') {
                    player.previousPosition = "d3";
                    playerToE3();
                } else if (e.key == 'ArrowDown' || e.key == 's') {
                    player.previousPosition = "d3";
                    playerToD4();
                } else if (e.key == 'ArrowLeft' || e.key == 'a') {
                    player.previousPosition = "d3";
                    playerToC3();
                }
            } else if (player.position === "d4") {
                if (e.key == 'ArrowUp' || e.key == 'w') {
                    player.previousPosition = "d4";
                    playerToD3();
                } else if (e.key == 'ArrowRight' || e.key == 'd') {
                    player.previousPosition = "d4";
                    playerToE4();
                } else if (e.key == 'ArrowDown' || e.key == 's') {
                    player.previousPosition = "d4";
                    playerToD5();
                } else if (e.key == 'ArrowLeft' || e.key == 'a') {
                    player.previousPosition = "d4";
                    playerToC4();
                }
            } else if (player.position === "d5") {
                if (e.key == 'ArrowUp' || e.key == 'w') {
                    player.previousPosition = "d5";
                    playerToD4();
                } else if (e.key == 'ArrowRight' || e.key == 'd') {
                    player.previousPosition = "d5";
                    playerToE5();
                } else if (e.key == 'ArrowDown' || e.key == 's') {
                    player.previousPosition = "d5";
                    playerToD6();
                } else if (e.key == 'ArrowLeft' || e.key == 'a') {
                    player.previousPosition = "d5";
                    playerToC5();
                }
            } else if (player.position === "d6") {
                if (e.key == 'ArrowUp' || e.key == 'w') {
                    player.previousPosition = "d6";
                    playerToD5();
                } else if (e.key == 'ArrowRight' || e.key == 'd') {
                    player.previousPosition = "d6";
                    playerToE6();
                } else if (e.key == 'ArrowDown' || e.key == 's') {
                    player.previousPosition = "d6";
                    playerToD7();
                } else if (e.key == 'ArrowLeft' || e.key == 'a') {
                    player.previousPosition = "d6";
                    playerToC6();
                }
            } else if (player.position === "d7") {
                if (e.key == 'ArrowUp' || e.key == 'w') {
                    player.previousPosition = "d7";
                    playerToD6();
                } else if (e.key == 'ArrowRight' || e.key == 'd') {
                    player.previousPosition = "d7";
                    playerToE7();
                } else if (e.key == 'ArrowDown' || e.key == 's') {
                    player.previousPosition = "d7";
                    playerToD8();
                } else if (e.key == 'ArrowLeft' || e.key == 'a') {
                    player.previousPosition = "d7";
                    playerToC7();
                }
            }
            //THE Es
                //THE Es
             else if (player.position === "e1") {
                if (e.key == 'ArrowUp' || e.key == 'w') {
                    playerToE();
                } else if (e.key == 'ArrowRight' || e.key == 'd') {
                    player.previousPosition = "e1";
                    playerToF1();
                } else if (e.key == 'ArrowDown' || e.key == 's') {
                    player.previousPosition = "e1";
                    playerToE2();
                } else if (e.key == 'ArrowLeft' || e.key == 'a') {
                    player.previousPosition = "e1";
                    playerToD1();
                }
            } else if (player.position === "e2") {
                if (e.key == 'ArrowUp' || e.key == 'w') {
                    player.previousPosition = "e2";
                    playerToE1();
                } else if (e.key == 'ArrowRight' || e.key == 'd') {
                    player.previousPosition = "e2";
                    playerToF2();
                } else if (e.key == 'ArrowDown' || e.key == 's') {
                    player.previousPosition = "e2";
                    playerToE3();
                } else if (e.key == 'ArrowLeft' || e.key == 'a') {
                    player.previousPosition = "e2";
                    playerToD2();
                }
            } else if (player.position === "e3") {
                if (e.key == 'ArrowUp' || e.key == 'w') {
                    player.previousPosition = "e3";
                    playerToE2();
                } else if (e.key == 'ArrowRight' || e.key == 'd') {
                    player.previousPosition = "e3";
                    playerToF3();
                } else if (e.key == 'ArrowDown' || e.key == 's') {
                    player.previousPosition = "e3";
                    playerToE4();
                } else if (e.key == 'ArrowLeft' || e.key == 'a') {
                    player.previousPosition = "e3";
                    playerToD3();
                }
            } else if (player.position === "e4") {
                if (e.key == 'ArrowUp' || e.key == 'w') {
                    player.previousPosition = "e4";
                    playerToE3();
                } else if (e.key == 'ArrowRight' || e.key == 'd') {
                    player.previousPosition = "e4";
                    playerToF4();
                } else if (e.key == 'ArrowDown' || e.key == 's') {
                    player.previousPosition = "e4";
                    playerToE5();
                } else if (e.key == 'ArrowLeft' || e.key == 'a') {
                    player.previousPosition = "e4";
                    playerToD4();
                    
                }
            } else if (player.position === "e5") {
                if (e.key == 'ArrowUp' || e.key == 'w') {
                    player.previousPosition = "e5";
                    playerToE4();
                } else if (e.key == 'ArrowRight' || e.key == 'd') {
                    player.previousPosition = "e5";
                    playerToF5();
                } else if (e.key == 'ArrowDown' || e.key == 's') {
                    player.previousPosition = "e5";
                    playerToE6();
                } else if (e.key == 'ArrowLeft' || e.key == 'a') {
                    player.previousPosition = "e5";
                    playerToD5();
                }
            } else if (player.position === "e6") {
                if (e.key == 'ArrowUp' || e.key == 'w') {
                    player.previousPosition = "e6";
                    playerToE5();
                } else if (e.key == 'ArrowRight' || e.key == 'd') {
                    player.previousPosition = "e6";
                    playerToF6();
                } else if (e.key == 'ArrowDown' || e.key == 's') {
                    player.previousPosition = "e6";
                    playerToE7();
                } else if (e.key == 'ArrowLeft' || e.key == 'a') {
                    player.previousPosition = "e6";
                    playerToD6();
                }
            } else if (player.position === "e7") {
                if (e.key == 'ArrowUp' || e.key == 'w') {
                    player.previousPosition = "e7";
                    playerToE6();
                } else if (e.key == 'ArrowRight' || e.key == 'd') {
                    player.previousPosition = "e7";
                    playerToF7();
                } else if (e.key == 'ArrowDown' || e.key == 's') {
                    player.previousPosition = "e7";
                    playerToE8();
                } else if (e.key == 'ArrowLeft' || e.key == 'a') {
                    player.previousPosition = "e7";
                    playerToD7();
                }
            }
                //THE Fs
                //THE Fs
             else if (player.position === "f1") {
                if (e.key == 'ArrowUp' || e.key == 'w') {
                    playerToF();
                } else if (e.key == 'ArrowRight' || e.key == 'd') {
                    player.previousPosition = "f1";
                    playerToG1();
                } else if (e.key == 'ArrowDown' || e.key == 's') {
                    player.previousPosition = "f1";
                    playerToF2();
                } else if (e.key == 'ArrowLeft' || e.key == 'a') {
                    player.previousPosition = "f1";
                    playerToE1();
                }
            } else if (player.position === "f2") {
                if (e.key == 'ArrowUp' || e.key == 'w') {
                    player.previousPosition = "f2";
                    playerToF1();
                } else if (e.key == 'ArrowRight' || e.key == 'd') {
                    player.previousPosition = "f2";
                    playerToG2();
                } else if (e.key == 'ArrowDown' || e.key == 's') {
                    player.previousPosition = "f2";
                    playerToF3();
                } else if (e.key == 'ArrowLeft' || e.key == 'a') {
                    player.previousPosition = "f2";
                    playerToE2();
                }
            } else if (player.position === "f3") {
                if (e.key == 'ArrowUp' || e.key == 'w') {
                    player.previousPosition = "f3";
                    playerToF2();
                } else if (e.key == 'ArrowRight' || e.key == 'd') {
                    player.previousPosition = "f3";
                    playerToG3();
                } else if (e.key == 'ArrowDown' || e.key == 's') {
                    player.previousPosition = "f3";
                    playerToF4();
                } else if (e.key == 'ArrowLeft' || e.key == 'a') {
                    player.previousPosition = "f3";
                    playerToE3();
                }
            } else if (player.position === "f4") {
                if (e.key == 'ArrowUp' || e.key == 'w') {
                    player.previousPosition = "f4";
                    playerToF3();
                } else if (e.key == 'ArrowRight' || e.key == 'd') {
                    player.previousPosition = "f4";
                    playerToG4();
                } else if (e.key == 'ArrowDown' || e.key == 's') {
                    player.previousPosition = "f4";
                    playerToF5();
                } else if (e.key == 'ArrowLeft' || e.key == 'a') {
                    player.previousPosition = "f4";
                    playerToE4();
                }
            } else if (player.position === "f5") {
                if (e.key == 'ArrowUp' || e.key == 'w') {
                    player.previousPosition = "f5";
                    playerToF4();
                } else if (e.key == 'ArrowRight' || e.key == 'd') {
                    player.previousPosition = "f5";
                    playerToG5();
                } else if (e.key == 'ArrowDown' || e.key == 's') {
                    player.previousPosition = "f5";
                    playerToF6();
                } else if (e.key == 'ArrowLeft' || e.key == 'a') {
                    player.previousPosition = "f5";
                    playerToE5();
                }
            } else if (player.position === "f6") {
                if (e.key == 'ArrowUp' || e.key == 'w') {
                    player.previousPosition = "f6";
                    playerToF5();
                } else if (e.key == 'ArrowRight' || e.key == 'd') {
                    player.previousPosition = "f6";
                    playerToG6();
                } else if (e.key == 'ArrowDown' || e.key == 's') {
                    player.previousPosition = "f6";
                    playerToF7();
                } else if (e.key == 'ArrowLeft' || e.key == 'a') {
                    player.previousPosition = "f6";
                    playerToE6();
                }
            } else if (player.position === "f7") {
                if (e.key == 'ArrowUp' || e.key == 'w') {
                    player.previousPosition = "f7";
                    playerToF6();
                } else if (e.key == 'ArrowRight' || e.key == 'd') {
                    player.previousPosition = "f7";
                    playerToG7();
                } else if (e.key == 'ArrowDown' || e.key == 's') {
                    player.previousPosition = "f7";
                    playerToF8();
                } else if (e.key == 'ArrowLeft' || e.key == 'a') {
                    player.previousPosition = "f7";
                    playerToE7();
                }
            } 
                //THE Gs
                //THE Gs
             else if (player.position === "g1") {
                if (e.key == 'ArrowUp' || e.key == 'w') {
                    playerToG();
                } else if (e.key == 'ArrowRight' || e.key == 'd') {
                    player.previousPosition = "g1";
                    playerToH1();
                } else if (e.key == 'ArrowDown' || e.key == 's') {
                    player.previousPosition = "g1";
                    playerToG2();
                } else if (e.key == 'ArrowLeft' || e.key == 'a') {
                    player.previousPosition = "g1";
                    playerToF1();
                }
            } else if (player.position === "g2") {
                if (e.key == 'ArrowUp' || e.key == 'w') {
                    player.previousPosition = "g2";
                    playerToG1();
                } else if (e.key == 'ArrowRight' || e.key == 'd') {
                    player.previousPosition = "g2";
                    playerToH2();
                } else if (e.key == 'ArrowDown' || e.key == 's') {
                    player.previousPosition = "g2";
                    playerToG3();
                } else if (e.key == 'ArrowLeft' || e.key == 'a') {
                    player.previousPosition = "g2";
                    playerToF2();
                }
            } else if (player.position === "g3") {
                if (e.key == 'ArrowUp' || e.key == 'w') {
                    player.previousPosition = "g3";
                    playerToG2();
                } else if (e.key == 'ArrowRight' || e.key == 'd') {
                    player.previousPosition = "g3";
                    playerToH3();
                } else if (e.key == 'ArrowDown' || e.key == 's') {
                    player.previousPosition = "g3";
                    playerToG4();
                } else if (e.key == 'ArrowLeft' || e.key == 'a') {
                    player.previousPosition = "g3";
                    playerToF3();
                }
            } else if (player.position === "g4") {
                if (e.key == 'ArrowUp' || e.key == 'w') {
                    player.previousPosition = "g4";
                    playerToG3();
                } else if (e.key == 'ArrowRight' || e.key == 'd') {
                    player.previousPosition = "g4";
                    playerToH4();
                } else if (e.key == 'ArrowDown' || e.key == 's') {
                    player.previousPosition = "g4";
                    playerToG5();
                } else if (e.key == 'ArrowLeft' || e.key == 'a') {
                    player.previousPosition = "g4";
                    playerToF4();
                }
            } else if (player.position === "g5") {
                if (e.key == 'ArrowUp' || e.key == 'w') {
                    player.previousPosition = "g5";
                    playerToG4();
                } else if (e.key == 'ArrowRight' || e.key == 'd') {
                    player.previousPosition = "g5";
                    playerToH5();
                } else if (e.key == 'ArrowDown' || e.key == 's') {
                    player.previousPosition = "g5";
                    playerToG6();
                } else if (e.key == 'ArrowLeft' || e.key == 'a') {
                    player.previousPosition = "g5";
                    playerToF5();
                }
            } else if (player.position === "g6") {
                if (e.key == 'ArrowUp' || e.key == 'w') {
                    player.previousPosition = "g6";
                    playerToG5();
                } else if (e.key == 'ArrowRight' || e.key == 'd') {
                    player.previousPosition = "g6";
                    playerToH6();
                } else if (e.key == 'ArrowDown' || e.key == 's') {
                    player.previousPosition = "g6";
                    playerToG7();
                } else if (e.key == 'ArrowLeft' || e.key == 'a') {
                    player.previousPosition = "g6";
                    playerToF6();
                }
            } else if (player.position === "g7") {
                if (e.key == 'ArrowUp' || e.key == 'w') {
                    player.previousPosition = "g7";
                    playerToG6();
                } else if (e.key == 'ArrowRight' || e.key == 'd') {
                    player.previousPosition = "g7";
                    playerToH7();
                } else if (e.key == 'ArrowDown' || e.key == 's') {
                    player.previousPosition = "g7";
                    playerToG8();
                } else if (e.key == 'ArrowLeft' || e.key == 'a') {
                    player.previousPosition = "g7";
                    playerToF7();
                }
            }
        }
}});
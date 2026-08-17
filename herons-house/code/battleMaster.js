let battleTimer = 0;

const naranga = {
    damage: 32,
}

const gorria = {
    damage: 22,
}

const inABattle = {
    topaz: false,
}

const spikeHall = {
    active: true,
    turns: 0,
    damage: 20,
}

//file under: relentless march of time
function battleTimerIncrement() {
    if (spikeHall.active && current.room === "largeHallway") {
        spikeTiles();
    }
    if (inABattle.topaz) {
        battleTimer++;
        topazSequence();
    } else if (inABattle.ruby) {
        battleTimer++;
        rubySequence();
    }     
}

function topazSequence() {
    incurDamage(naranga.damage);
    if (battleTimer == 6) {
        tb2();
        tc3();
        td4();
    } else if (battleTimer == 9) {
        tb3();
        tc4();
        td5();
    }
}


function rubySequence() {
    incurDamage(gorria.damage);
    if (battleTimer == 2) {
        tb2();
        tc3();
        td4();
    } else if (battleTimer == 3) {
        tb3();
        tc4();
        td5();
    } else if (battleTimer == 4) {
        tb4();
        tc4();
        td4();
        te4();
        tf4();
    } else if (battleTimer == 5) {
        diamond();
    }
}

function spikeTiles() {
    incurDamage(spikeHall.damage);
    if (spikeHall.turns == 0) {
        console.log("spike1");
        spikeHall.turns++;
        checker();
    } else if (spikeHall.turns == 1) {
        spikeHall.turns = 0;
        console.log("spike2");
        checkerInverse();
    }
}

function checker() {
    ta1();
    ta3();
    tb2();
    tc1();
    tc3();
    td2();
    te1();
    te3();
    tf2();
    tg1();
    tg3();
}

function checkerInverse() {
    ta2();
    tb1();
    tb3();
    tc2();
    td1();
    td3();
    te2();
    tf1();
    tf3();
    tg2();
}

function incurDamage(opponentDamage) {
    if (tilesUnderAttack.includes(player.position)) {
            damagePlayer(opponentDamage);
        }
    if (tilesUnderAttack.includes(boy.position)) {
            alert("you hit BOY!");
            boyHealth.current -= opponentDamage;
            updateBoyHealth();
        }
    unhighlightAll();
}




function triggerGorriaBattle() {
    inABattle.ruby = true;
}

function diamond() {
    tb4();
    tc3();
    tc4();
    tc5();
    td2();
    td3();
    td5();
    td6();
    te3();
    te4();
    te5();
    tf4();
}



//dont worry about it
function ta1() {
    tta1.className = "targetTileOn";
    tilesUnderAttack.push("a1");
} function ta2() {
    tta2.className = "targetTileOn";
    tilesUnderAttack.push("a2");
} function ta3() {
    tta3.className = "targetTileOn";
    tilesUnderAttack.push("a3");
} function ta4() {
    tta4.className = "targetTileOn";
    tilesUnderAttack.push("a4");
} function ta5() {
    tta5.className = "targetTileOn";
    tilesUnderAttack.push("a5");
} function ta6() {
    tta6.className = "targetTileOn";
    tilesUnderAttack.push("a6");
} function ta7() {
    tta7.className = "targetTileOn";
    tilesUnderAttack.push("a7");
} function tb1() {
    ttb1.className = "targetTileOn";
    tilesUnderAttack.push("b1");
} function tb2() {
    ttb2.className = "targetTileOn";
    tilesUnderAttack.push("b2");
} function tb3() {
    ttb3.className = "targetTileOn";
    tilesUnderAttack.push("b3");
} function tb4() {
    ttb4.className = "targetTileOn";
    tilesUnderAttack.push("b4");
} function tb5() {
    ttb5.className = "targetTileOn";
    tilesUnderAttack.push("b5");
} function tb6() {
    ttb6.className = "targetTileOn";
    tilesUnderAttack.push("b6");
} function tb7() {
    ttb7.className = "targetTileOn";
    tilesUnderAttack.push("b7");
} function tc1() {
    ttc1.className = "targetTileOn";
    tilesUnderAttack.push("c1");
} function tc2() {
    ttc2.className = "targetTileOn";
    tilesUnderAttack.push("c2");
} function tc3() {
    ttc3.className = "targetTileOn";
    tilesUnderAttack.push("c3");
} function tc4() {
    ttc4.className = "targetTileOn";
    tilesUnderAttack.push("c4");
} function tc5() {
    ttc5.className = "targetTileOn";
    tilesUnderAttack.push("c5");
} function tc6() {
    ttc6.className = "targetTileOn";
    tilesUnderAttack.push("c6");
} function tc7() {
    ttc7.className = "targetTileOn";
    tilesUnderAttack.push("c7");
} function td1() {
    ttd1.className = "targetTileOn";
    tilesUnderAttack.push("d1");
} function td2() {
    ttd2.className = "targetTileOn";
    tilesUnderAttack.push("d2");
} function td3() {
    ttd3.className = "targetTileOn";
    tilesUnderAttack.push("d3");
} function td4() {
    ttd4.className = "targetTileOn";
    tilesUnderAttack.push("d4");
} function td5() {
    ttd5.className = "targetTileOn";
    tilesUnderAttack.push("d5");
} function td6() {
    ttd6.className = "targetTileOn";
    tilesUnderAttack.push("d6");
} function td7() {
    ttd7.className = "targetTileOn";
    tilesUnderAttack.push("d7");
} function te1() {
    tte1.className = "targetTileOn";
    tilesUnderAttack.push("e1");
} function te2() {
    tte2.className = "targetTileOn";
    tilesUnderAttack.push("e2");
} function te3() {
    tte3.className = "targetTileOn";
    tilesUnderAttack.push("e3");
} function te4() {
    tte4.className = "targetTileOn";
    tilesUnderAttack.push("e4");
} function te5() {
    tte5.className = "targetTileOn";
    tilesUnderAttack.push("e5");
} function te6() {
    tte6.className = "targetTileOn";
    tilesUnderAttack.push("e6");
} function te7() {
    tte7.className = "targetTileOn";
    tilesUnderAttack.push("e7");
} function tf1() {
    ttf1.className = "targetTileOn";
    tilesUnderAttack.push("f1");
} function tf2() {
    ttf2.className = "targetTileOn";
    tilesUnderAttack.push("f2");
} function tf3() {
    ttf3.className = "targetTileOn";
    tilesUnderAttack.push("f3");
} function tf4() {
    ttf4.className = "targetTileOn";
    tilesUnderAttack.push("f4");
} function tf5() {
    ttf5.className = "targetTileOn";
    tilesUnderAttack.push("f5");
} function tf6() {
    ttf6.className = "targetTileOn";
    tilesUnderAttack.push("f6");
} function tf7() {
    ttf7.className = "targetTileOn";
    tilesUnderAttack.push("f7");
} function tg1() {
    ttg1.className = "targetTileOn";
    tilesUnderAttack.push("g1");
} function tg2() {
    ttg2.className = "targetTileOn";
    tilesUnderAttack.push("g2");
} function tg3() {
    ttg3.className = "targetTileOn";
    tilesUnderAttack.push("g3");
} function tg4() {
    ttg4.className = "targetTileOn";
    tilesUnderAttack.push("g4");
} function tg5() {
    ttg5.className = "targetTileOn";
    tilesUnderAttack.push("g5");
} function tg6() {
    ttg6.className = "targetTileOn";
    tilesUnderAttack.push("g6");
} function tg7() {
    ttg7.className = "targetTileOn";
    tilesUnderAttack.push("g7");
}



function unhighlightAll() {
    tilesUnderAttack.splice(0, 49);
    tta1.className = "targetTileOff";
    tta2.className = "targetTileOff";
    tta3.className = "targetTileOff";
    tta4.className = "targetTileOff";
    tta5.className = "targetTileOff";
    tta6.className = "targetTileOff";
    tta7.className = "targetTileOff";
    ttb1.className = "targetTileOff";
    ttb2.className = "targetTileOff";
    ttb3.className = "targetTileOff";
    ttb4.className = "targetTileOff";
    ttb5.className = "targetTileOff";
    ttb6.className = "targetTileOff";
    ttb7.className = "targetTileOff";
    ttc1.className = "targetTileOff";
    ttc2.className = "targetTileOff";
    ttc3.className = "targetTileOff";
    ttc4.className = "targetTileOff";
    ttc5.className = "targetTileOff";
    ttc6.className = "targetTileOff";
    ttc7.className = "targetTileOff";
    ttd1.className = "targetTileOff";
    ttd2.className = "targetTileOff";
    ttd3.className = "targetTileOff";
    ttd4.className = "targetTileOff";
    ttd5.className = "targetTileOff";
    ttd6.className = "targetTileOff";
    ttd7.className = "targetTileOff";
    tte1.className = "targetTileOff";
    tte2.className = "targetTileOff";
    tte3.className = "targetTileOff";
    tte4.className = "targetTileOff";
    tte5.className = "targetTileOff";
    tte6.className = "targetTileOff";
    tte7.className = "targetTileOff";
    ttf1.className = "targetTileOff";
    ttf2.className = "targetTileOff";
    ttf3.className = "targetTileOff";
    ttf4.className = "targetTileOff";
    ttf5.className = "targetTileOff";
    ttf6.className = "targetTileOff";
    ttf7.className = "targetTileOff";
    ttf1.className = "targetTileOff";
    ttf2.className = "targetTileOff";
    ttf3.className = "targetTileOff";
    ttf4.className = "targetTileOff";
    ttf5.className = "targetTileOff";
    ttf6.className = "targetTileOff";
    ttf7.className = "targetTileOff";
}
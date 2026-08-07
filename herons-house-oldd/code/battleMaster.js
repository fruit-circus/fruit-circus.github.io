let battleTimer = 0;

const beetle = {
    damage: 32,
}

const inABattle = {
    topaz: true,
}

//file under: relentless march of time
function battleTimerIncrement() {
    if (inABattle.topaz) {
        battleTimer++;
    }
    topazSequence();    
}

function initiateTopaz() {
    battleTimer = 0;
}

function topazSequence() {
    if (battleTimer == 6) {
        tb2();
        tc3();
        td4();
    } else if (battleTimer == 7) {
        incurBeetleDamage();
    } else if (battleTimer == 9) {
        tb3();
        tc4();
        td5();
    } else if (battleTimer == 10) {
        incurBeetleDamage();
    }
}

function incurBeetleDamage() {
    if (tilesUnderAttack.includes(player.position)) {
            damagePlayer(beetle.damage);
        }
    if (tilesUnderAttack.includes(boy.position)) {
            alert("you hit BOY!");
            boyHealth.current -= beetle.damage;
            updateBoyHealth();
        }
    unhighlightAll();
}



function ta1() {
    tta1.className = "tile2on";
    tilesUnderAttack.push("a1");
} function ta2() {
    tta2.className = "tile2on";
    tilesUnderAttack.push("a2");
} function ta3() {
    tta3.className = "tile2on";
    tilesUnderAttack.push("a3");
} function ta4() {
    tta4.className = "tile2on";
    tilesUnderAttack.push("a4");
} function ta5() {
    tta5.className = "tile2on";
    tilesUnderAttack.push("a5");
} function ta6() {
    tta6.className = "tile2on";
    tilesUnderAttack.push("a6");
} function ta7() {
    tta7.className = "tile2on";
    tilesUnderAttack.push("a7");
} function tb1() {
    ttb1.className = "tile2on";
    tilesUnderAttack.push("b1");
} function tb2() {
    ttb2.className = "tile2on";
    tilesUnderAttack.push("b2");
} function tb3() {
    ttb3.className = "tile2on";
    tilesUnderAttack.push("b3");
} function tb4() {
    ttb4.className = "tile2on";
    tilesUnderAttack.push("b4");
} function tb5() {
    ttb5.className = "tile2on";
    tilesUnderAttack.push("b5");
} function tb6() {
    ttb6.className = "tile2on";
    tilesUnderAttack.push("b6");
} function tb7() {
    ttb7.className = "tile2on";
    tilesUnderAttack.push("b7");
} function tc1() {
    ttc1.className = "tile2on";
    tilesUnderAttack.push("c1");
} function tc2() {
    ttc2.className = "tile2on";
    tilesUnderAttack.push("c2");
} function tc3() {
    ttc3.className = "tile2on";
    tilesUnderAttack.push("c3");
} function tc4() {
    ttc4.className = "tile2on";
    tilesUnderAttack.push("c4");
} function tc5() {
    ttc5.className = "tile2on";
    tilesUnderAttack.push("c5");
} function tc6() {
    ttc6.className = "tile2on";
    tilesUnderAttack.push("c6");
} function tc7() {
    ttc7.className = "tile2on";
    tilesUnderAttack.push("c7");
} function td1() {
    ttd1.className = "tile2on";
    tilesUnderAttack.push("d1");
} function td2() {
    ttd2.className = "tile2on";
    tilesUnderAttack.push("d2");
} function td3() {
    ttd3.className = "tile2on";
    tilesUnderAttack.push("d3");
} function td4() {
    ttd4.className = "tile2on";
    tilesUnderAttack.push("d4");
} function td5() {
    ttd5.className = "tile2on";
    tilesUnderAttack.push("d5");
} function td6() {
    ttd6.className = "tile2on";
    tilesUnderAttack.push("d6");
} function td7() {
    ttd7.className = "tile2on";
    tilesUnderAttack.push("d7");
} function te1() {
    tte1.className = "tile2on";
    tilesUnderAttack.push("e1");
} function te2() {
    tte2.className = "tile2on";
    tilesUnderAttack.push("e2");
} function te3() {
    tte3.className = "tile2on";
    tilesUnderAttack.push("e3");
} function te4() {
    tte4.className = "tile2on";
    tilesUnderAttack.push("e4");
} function te5() {
    tte5.className = "tile2on";
    tilesUnderAttack.push("e5");
} function te6() {
    tte6.className = "tile2on";
    tilesUnderAttack.push("e6");
} function te7() {
    tte7.className = "tile2on";
    tilesUnderAttack.push("e7");
} function tf1() {
    ttf1.className = "tile2on";
    tilesUnderAttack.push("f1");
} function tf2() {
    ttf2.className = "tile2on";
    tilesUnderAttack.push("f2");
} function tf3() {
    ttf3.className = "tile2on";
    tilesUnderAttack.push("f3");
} function tf4() {
    ttf4.className = "tile2on";
    tilesUnderAttack.push("f4");
} function tf5() {
    ttf5.className = "tile2on";
    tilesUnderAttack.push("f5");
} function tf6() {
    ttf6.className = "tile2on";
    tilesUnderAttack.push("f6");
} function tf7() {
    ttf7.className = "tile2on";
    tilesUnderAttack.push("f7");
} function tg1() {
    ttg1.className = "tile2on";
    tilesUnderAttack.push("g1");
} function tg2() {
    ttg2.className = "tile2on";
    tilesUnderAttack.push("g2");
} function tg3() {
    ttg3.className = "tile2on";
    tilesUnderAttack.push("g3");
} function tg4() {
    ttg4.className = "tile2on";
    tilesUnderAttack.push("g4");
} function tg5() {
    ttg5.className = "tile2on";
    tilesUnderAttack.push("g5");
} function tg6() {
    ttg6.className = "tile2on";
    tilesUnderAttack.push("g6");
} function tg7() {
    ttg7.className = "tile2on";
    tilesUnderAttack.push("g7");
}



function unhighlightAll() {
    tilesUnderAttack.splice(0, 49)
    tta1.className = "tile2off";
    tta2.className = "tile2off";
    tta3.className = "tile2off";
    tta4.className = "tile2off";
    tta5.className = "tile2off";
    tta6.className = "tile2off";
    tta7.className = "tile2off";
    ttb1.className = "tile2off";
    ttb2.className = "tile2off";
    ttb3.className = "tile2off";
    ttb4.className = "tile2off";
    ttb5.className = "tile2off";
    ttb6.className = "tile2off";
    ttb7.className = "tile2off";
    ttc1.className = "tile2off";
    ttc2.className = "tile2off";
    ttc3.className = "tile2off";
    ttc4.className = "tile2off";
    ttc5.className = "tile2off";
    ttc6.className = "tile2off";
    ttc7.className = "tile2off";
    ttd1.className = "tile2off";
    ttd2.className = "tile2off";
    ttd3.className = "tile2off";
    ttd4.className = "tile2off";
    ttd5.className = "tile2off";
    ttd6.className = "tile2off";
    ttd7.className = "tile2off";
    tte1.className = "tile2off";
    tte2.className = "tile2off";
    tte3.className = "tile2off";
    tte4.className = "tile2off";
    tte5.className = "tile2off";
    tte6.className = "tile2off";
    tte7.className = "tile2off";
    ttf1.className = "tile2off";
    ttf2.className = "tile2off";
    ttf3.className = "tile2off";
    ttf4.className = "tile2off";
    ttf5.className = "tile2off";
    ttf6.className = "tile2off";
    ttf7.className = "tile2off";
    ttf1.className = "tile2off";
    ttf2.className = "tile2off";
    ttf3.className = "tile2off";
    ttf4.className = "tile2off";
    ttf5.className = "tile2off";
    ttf6.className = "tile2off";
    ttf7.className = "tile2off";
}
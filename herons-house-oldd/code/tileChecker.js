/*

    7x7 basic rooms
    7x5 entry hall, kitchen, larder 
    3x3 coat room, weapons check, servants' quarters, storage rooms, landings 
7x3 horizontal hallways 
3x7 second floor hallway x2
7x1 horrizontal hallways
1x7 vertical hallways 
5x5 wine cellar 
5x1 second floor secret doors room
3x2 lower landing 
4x2 balcony

*/


function checkWhichTilesShouldBeIncluded() { //in a given room
    blackenAllTiles();
    //width by depth
    if (room.size === "threeByThree") {
        lightThreeByThree();
        falsifyAll();
        highlightableTilesInclude.c1 = true;
        highlightableTilesInclude.c2 = true;
        highlightableTilesInclude.c3 = true;
        highlightableTilesInclude.d1 = true;
        highlightableTilesInclude.d2 = true;
        highlightableTilesInclude.d3 = true;
        highlightableTilesInclude.e1 = true;
        highlightableTilesInclude.e2 = true;
        highlightableTilesInclude.e3 = true;
    } else if (room.size === "threeByFour") {
        lightThreeByFour();
        falsifyAll();
        highlightableTilesInclude.c1 = true;
        highlightableTilesInclude.c2 = true;
        highlightableTilesInclude.c3 = true;
        highlightableTilesInclude.c4 = true;
        highlightableTilesInclude.d1 = true;
        highlightableTilesInclude.d2 = true;
        highlightableTilesInclude.d3 = true;
        highlightableTilesInclude.d4 = true;
        highlightableTilesInclude.e1 = true;
        highlightableTilesInclude.e2 = true;
        highlightableTilesInclude.e3 = true;
        highlightableTilesInclude.e4 = true;
    } else if (room.size === "sevenBySeven") {
        lightSevenBySeven();
        highlightableTilesInclude.a1 = true;
        highlightableTilesInclude.a2 = true;
        highlightableTilesInclude.a3 = true;
        highlightableTilesInclude.a4 = true;
        highlightableTilesInclude.a5 = true;
        highlightableTilesInclude.a6 = true;
        highlightableTilesInclude.a7 = true;
        highlightableTilesInclude.b1 = true;
        highlightableTilesInclude.b2 = true;
        highlightableTilesInclude.b3 = true;
        highlightableTilesInclude.b4 = true;
        highlightableTilesInclude.b5 = true;
        highlightableTilesInclude.b6 = true;
        highlightableTilesInclude.b7 = true;
        highlightableTilesInclude.c1 = true;
        highlightableTilesInclude.c2 = true;
        highlightableTilesInclude.c3 = true;
        highlightableTilesInclude.c4 = true;
        highlightableTilesInclude.c5 = true;
        highlightableTilesInclude.c6 = true;
        highlightableTilesInclude.c7 = true;
        highlightableTilesInclude.d1 = true;
        highlightableTilesInclude.d2 = true;
        highlightableTilesInclude.d3 = true;
        highlightableTilesInclude.d4 = true;
        highlightableTilesInclude.d5 = true;
        highlightableTilesInclude.d6 = true;
        highlightableTilesInclude.d7 = true;
        highlightableTilesInclude.e1 = true;
        highlightableTilesInclude.e2 = true;
        highlightableTilesInclude.e3 = true;
        highlightableTilesInclude.e4 = true;
        highlightableTilesInclude.e5 = true;
        highlightableTilesInclude.e6 = true;
        highlightableTilesInclude.e7 = true;
        highlightableTilesInclude.f1 = true;
        highlightableTilesInclude.f2 = true;
        highlightableTilesInclude.f3 = true;
        highlightableTilesInclude.f4 = true;
        highlightableTilesInclude.f5 = true;
        highlightableTilesInclude.f6 = true;
        highlightableTilesInclude.f7 = true;
        highlightableTilesInclude.g1 = true;
        highlightableTilesInclude.g2 = true;
        highlightableTilesInclude.g3 = true;
        highlightableTilesInclude.g4 = true;
        highlightableTilesInclude.g5 = true;
        highlightableTilesInclude.g6 = true;
        highlightableTilesInclude.g7 = true;
    } else if (room.size === "sevenByFive") {
        lightSevenByFive();
        falsifyAll();
        highlightableTilesInclude.a1 = true;
        highlightableTilesInclude.a2 = true;
        highlightableTilesInclude.a3 = true;
        highlightableTilesInclude.a4 = true;
        highlightableTilesInclude.a5 = true;
        highlightableTilesInclude.b1 = true;
        highlightableTilesInclude.b2 = true;
        highlightableTilesInclude.b3 = true;
        highlightableTilesInclude.b4 = true;
        highlightableTilesInclude.b5 = true;
        highlightableTilesInclude.c1 = true;
        highlightableTilesInclude.c2 = true;
        highlightableTilesInclude.c3 = true;
        highlightableTilesInclude.c4 = true;
        highlightableTilesInclude.c5 = true;
        highlightableTilesInclude.d1 = true;
        highlightableTilesInclude.d2 = true;
        highlightableTilesInclude.d3 = true;
        highlightableTilesInclude.d4 = true;
        highlightableTilesInclude.d5 = true;
        highlightableTilesInclude.e1 = true;
        highlightableTilesInclude.e2 = true;
        highlightableTilesInclude.e3 = true;
        highlightableTilesInclude.e4 = true;
        highlightableTilesInclude.e5 = true;
        highlightableTilesInclude.f1 = true;
        highlightableTilesInclude.f2 = true;
        highlightableTilesInclude.f3 = true;
        highlightableTilesInclude.f4 = true;
        highlightableTilesInclude.f5 = true;
        highlightableTilesInclude.g1 = true;
        highlightableTilesInclude.g2 = true;
        highlightableTilesInclude.g3 = true;
        highlightableTilesInclude.g4 = true;
        highlightableTilesInclude.g5 = true;
    } else if (room.size === "sevenByFour") {
        lightSevenByFour();
        falsifyAll();
        highlightableTilesInclude.a1 = true;
        highlightableTilesInclude.a2 = true;
        highlightableTilesInclude.a3 = true;
        highlightableTilesInclude.a4 = true;
        highlightableTilesInclude.b1 = true;
        highlightableTilesInclude.b2 = true;
        highlightableTilesInclude.b3 = true;
        highlightableTilesInclude.b4 = true;
        highlightableTilesInclude.c1 = true;
        highlightableTilesInclude.c2 = true;
        highlightableTilesInclude.c3 = true;
        highlightableTilesInclude.c4 = true;
        highlightableTilesInclude.d1 = true;
        highlightableTilesInclude.d2 = true;
        highlightableTilesInclude.d3 = true;
        highlightableTilesInclude.d4 = true;
        highlightableTilesInclude.e1 = true;
        highlightableTilesInclude.e2 = true;
        highlightableTilesInclude.e3 = true;
        highlightableTilesInclude.e4 = true;
        highlightableTilesInclude.f1 = true;
        highlightableTilesInclude.f2 = true;
        highlightableTilesInclude.f3 = true;
        highlightableTilesInclude.f4 = true;
        highlightableTilesInclude.g1 = true;
        highlightableTilesInclude.g2 = true;
        highlightableTilesInclude.g3 = true;
        highlightableTilesInclude.g4 = true;
    } else if (room.size === "threeByFive") {
        lightThreeByFive();
        falsifyAll();
        highlightableTilesInclude.c1 = true;
        highlightableTilesInclude.c2 = true;
        highlightableTilesInclude.c3 = true;
        highlightableTilesInclude.c4 = true;
        highlightableTilesInclude.c5 = true;
        highlightableTilesInclude.d1 = true;
        highlightableTilesInclude.d2 = true;
        highlightableTilesInclude.d3 = true;
        highlightableTilesInclude.d4 = true;
        highlightableTilesInclude.d5 = true;
        highlightableTilesInclude.e1 = true;
        highlightableTilesInclude.e2 = true;
        highlightableTilesInclude.e3 = true;
        highlightableTilesInclude.e4 = true;
        highlightableTilesInclude.e5 = true;
    } else if (room.size === "threeByTwo") {
        lightThreeByTwo();
        falsifyAll();
        highlightableTilesInclude.c1 = true;
        highlightableTilesInclude.c2 = true;
        highlightableTilesInclude.d1 = true;
        highlightableTilesInclude.d2 = true;
        highlightableTilesInclude.e1 = true;
        highlightableTilesInclude.e2 = true;
    } else if (room.size === "sevenByOne") {
        lightSevenByOne();
        falsifyAll();
        highlightableTilesInclude.a1 = true;
        highlightableTilesInclude.c1 = true;
        highlightableTilesInclude.b1 = true;
        highlightableTilesInclude.d1 = true;
        highlightableTilesInclude.e1 = true;
        highlightableTilesInclude.f1 = true;
        highlightableTilesInclude.g1 = true;
    } else if (room.size === "fiveByFive") {
        lightFiveByFive();
        falsifyAll();
        highlightableTilesInclude.b1 = true;
        highlightableTilesInclude.b2 = true;
        highlightableTilesInclude.b3 = true;
        highlightableTilesInclude.b4 = true;
        highlightableTilesInclude.b5 = true;
        highlightableTilesInclude.c1 = true;
        highlightableTilesInclude.c2 = true;
        highlightableTilesInclude.c3 = true;
        highlightableTilesInclude.c4 = true;
        highlightableTilesInclude.c5 = true;
        highlightableTilesInclude.d1 = true;
        highlightableTilesInclude.d2 = true;
        highlightableTilesInclude.d3 = true;
        highlightableTilesInclude.d4 = true;
        highlightableTilesInclude.d5 = true;
        highlightableTilesInclude.e1 = true;
        highlightableTilesInclude.e2 = true;
        highlightableTilesInclude.e3 = true;
        highlightableTilesInclude.e4 = true;
        highlightableTilesInclude.e5 = true;
        highlightableTilesInclude.f1 = true;
        highlightableTilesInclude.f2 = true;
        highlightableTilesInclude.f3 = true;
        highlightableTilesInclude.f4 = true;
        highlightableTilesInclude.f5 = true;
    } else if (room.size === "sevenByThree") {
        lightSevenByThree();
        falsifyAll();
        highlightableTilesInclude.a1 = true;
        highlightableTilesInclude.a2 = true;
        highlightableTilesInclude.a3 = true;
        highlightableTilesInclude.b1 = true;
        highlightableTilesInclude.b2 = true;
        highlightableTilesInclude.b3 = true;
        highlightableTilesInclude.c1 = true;
        highlightableTilesInclude.c2 = true;
        highlightableTilesInclude.c3 = true;
        highlightableTilesInclude.d1 = true;
        highlightableTilesInclude.d2 = true;
        highlightableTilesInclude.d3 = true;
        highlightableTilesInclude.e1 = true;
        highlightableTilesInclude.e2 = true;
        highlightableTilesInclude.e3 = true;
        highlightableTilesInclude.f1 = true;
        highlightableTilesInclude.f2 = true;
        highlightableTilesInclude.f3 = true;
        highlightableTilesInclude.g1 = true;
        highlightableTilesInclude.g2 = true;
        highlightableTilesInclude.g3 = true;
    } else if (room.size === "oneBySeven") {
        lightOneBySeven();
        falsifyAll();
        highlightableTilesInclude.d1 = true;
        highlightableTilesInclude.d2 = true;
        highlightableTilesInclude.d3 = true;
        highlightableTilesInclude.d4 = true;
        highlightableTilesInclude.d5 = true;
        highlightableTilesInclude.d6 = true;
        highlightableTilesInclude.d7 = true;
    }
}

function blackenAllTiles() {
    a1.style.opacity = 0;
    a2.style.opacity = 0;
    a3.style.opacity = 0;
    a4.style.opacity = 0;
    a5.style.opacity = 0;
    a6.style.opacity = 0;
    a7.style.opacity = 0;
    b1.style.opacity = 0;
    b2.style.opacity = 0;
    b3.style.opacity = 0;
    b4.style.opacity = 0;
    b5.style.opacity = 0;
    b6.style.opacity = 0;
    b7.style.opacity = 0;
    c1.style.opacity = 0;
    c2.style.opacity = 0;
    c3.style.opacity = 0;
    c4.style.opacity = 0;
    c5.style.opacity = 0;
    c6.style.opacity = 0;
    c7.style.opacity = 0;
    d1.style.opacity = 0;
    d2.style.opacity = 0;
    d3.style.opacity = 0;
    d4.style.opacity = 0;
    d5.style.opacity = 0;
    d6.style.opacity = 0;
    d7.style.opacity = 0;
    e1.style.opacity = 0;
    e2.style.opacity = 0;
    e3.style.opacity = 0;
    e4.style.opacity = 0;
    e5.style.opacity = 0;
    e6.style.opacity = 0;
    e7.style.opacity = 0;
    f1.style.opacity = 0;
    f2.style.opacity = 0;
    f3.style.opacity = 0;
    f4.style.opacity = 0;
    f5.style.opacity = 0;
    f6.style.opacity = 0;
    f7.style.opacity = 0;
    g1.style.opacity = 0;
    g2.style.opacity = 0;
    g3.style.opacity = 0;
    g4.style.opacity = 0;
    g5.style.opacity = 0;
    g6.style.opacity = 0;
    g7.style.opacity = 0;
}

function lightThreeByThree() {
        c1.style.opacity = 0.15;
        c2.style.opacity = 0.1;
        c3.style.opacity = 0.15;
        d1.style.opacity = 0.1;
        d2.style.opacity = 0.15;
        d3.style.opacity = 0.1;
        e1.style.opacity = 0.15;
        e2.style.opacity = 0.1;
        e3.style.opacity = 0.15;
}

function lightThreeByFour() {
        c1.style.opacity = 0.15;
        c2.style.opacity = 0.1;
        c3.style.opacity = 0.15;
        c4.style.opacity = 0.1;
        d1.style.opacity = 0.1;
        d2.style.opacity = 0.15;
        d3.style.opacity = 0.1;
        d4.style.opacity = 0.15;
        e1.style.opacity = 0.15;
        e2.style.opacity = 0.1;
        e3.style.opacity = 0.15;
        e4.style.opacity = 0.1;
}



function lightThreeByTwo() {
        c1.style.opacity = 0.15;
        c2.style.opacity = 0.1;
        d1.style.opacity = 0.1;
        d2.style.opacity = 0.15;
        e1.style.opacity = 0.15;
        e2.style.opacity = 0.1;
}

function lightSevenBySeven() {
    a1.style.opacity = 0.15;
    a3.style.opacity = 0.15;
    a5.style.opacity = 0.15;
    a7.style.opacity = 0.15;
    b2.style.opacity = 0.15;
    b4.style.opacity = 0.15;
    b6.style.opacity = 0.15;
    c1.style.opacity = 0.15;
    c3.style.opacity = 0.15;
    c5.style.opacity = 0.15;
    c7.style.opacity = 0.15;
    d2.style.opacity = 0.15;
    d4.style.opacity = 0.15;
    d6.style.opacity = 0.15;
    e1.style.opacity = 0.15;
    e3.style.opacity = 0.15;
    e5.style.opacity = 0.15;
    e7.style.opacity = 0.15;
    f2.style.opacity = 0.15;
    f4.style.opacity = 0.15;
    f6.style.opacity = 0.15;
    g1.style.opacity = 0.15;
    g3.style.opacity = 0.15;
    g5.style.opacity = 0.15;
    g7.style.opacity = 0.15;
    a2.style.opacity = 0.1;
    a4.style.opacity = 0.1;
    a6.style.opacity = 0.1;
    b1.style.opacity = 0.1;
    b3.style.opacity = 0.1;
    b5.style.opacity = 0.1;
    b7.style.opacity = 0.1;
    c2.style.opacity = 0.1;
    c4.style.opacity = 0.1;
    c6.style.opacity = 0.1;
    d1.style.opacity = 0.1;
    d3.style.opacity = 0.1;
    d5.style.opacity = 0.1;
    d7.style.opacity = 0.1;
    e2.style.opacity = 0.1;
    e4.style.opacity = 0.1;
    e6.style.opacity = 0.1;
    f1.style.opacity = 0.1;
    f3.style.opacity = 0.1;
    f5.style.opacity = 0.1;
    f7.style.opacity = 0.1;
    g2.style.opacity = 0.1;
    g4.style.opacity = 0.1;
    g6.style.opacity = 0.1;
}


function lightSevenByFive() {
    a1.style.opacity = 0.15;
    a3.style.opacity = 0.15;
    a5.style.opacity = 0.15;
    b2.style.opacity = 0.15;
    b4.style.opacity = 0.15;
    c1.style.opacity = 0.15;
    c3.style.opacity = 0.15;
    c5.style.opacity = 0.15;
    d2.style.opacity = 0.15;
    d4.style.opacity = 0.15;
    e1.style.opacity = 0.15;
    e3.style.opacity = 0.15;
    e5.style.opacity = 0.15;
    f2.style.opacity = 0.15;
    f4.style.opacity = 0.15;
    g1.style.opacity = 0.15;
    g3.style.opacity = 0.15;
    g5.style.opacity = 0.15;
    a2.style.opacity = 0.1;
    a4.style.opacity = 0.1;
    b1.style.opacity = 0.1;
    b3.style.opacity = 0.1;
    b5.style.opacity = 0.1;
    c2.style.opacity = 0.1;
    c4.style.opacity = 0.1;
    d1.style.opacity = 0.1;
    d3.style.opacity = 0.1;
    d5.style.opacity = 0.1;
    e2.style.opacity = 0.1;
    e4.style.opacity = 0.1;
    f1.style.opacity = 0.1;
    f3.style.opacity = 0.1;
    f5.style.opacity = 0.1;
    g2.style.opacity = 0.1;
    g4.style.opacity = 0.1;
}

function lightSevenByFour() {
    a1.style.opacity = 0.15;
    a3.style.opacity = 0.15;
    b2.style.opacity = 0.15;
    b4.style.opacity = 0.15;
    c1.style.opacity = 0.15;
    c3.style.opacity = 0.15;
    d2.style.opacity = 0.15;
    d4.style.opacity = 0.15;
    e1.style.opacity = 0.15;
    e3.style.opacity = 0.15;
    f2.style.opacity = 0.15;
    f4.style.opacity = 0.15;
    g1.style.opacity = 0.15;
    g3.style.opacity = 0.15;
    a2.style.opacity = 0.1;
    a4.style.opacity = 0.1;
    b1.style.opacity = 0.1;
    b3.style.opacity = 0.1;
    c2.style.opacity = 0.1;
    c4.style.opacity = 0.1;
    d1.style.opacity = 0.1;
    d3.style.opacity = 0.1;
    e2.style.opacity = 0.1;
    e4.style.opacity = 0.1;
    f1.style.opacity = 0.1;
    f3.style.opacity = 0.1;
    g2.style.opacity = 0.1;
    g4.style.opacity = 0.1;
}

function lightOneBySeven() {
    d1.style.opacity = 0.1;
    d3.style.opacity = 0.1;
    d5.style.opacity = 0.1;
    d2.style.opacity = 0.15;
    d4.style.opacity = 0.15;
    d6.style.opacity = 0.15;
    d7.style.opacity = 0.1;
}


function lightSevenByThree() {
    a1.style.opacity = 0.15;
    a3.style.opacity = 0.15;
    b2.style.opacity = 0.15;
    c1.style.opacity = 0.15;
    c3.style.opacity = 0.15;
    d2.style.opacity = 0.15;
    e1.style.opacity = 0.15;
    e3.style.opacity = 0.15;
    f2.style.opacity = 0.15;
    g1.style.opacity = 0.15;
    g3.style.opacity = 0.15;
    a2.style.opacity = 0.1;
    b1.style.opacity = 0.1;
    b3.style.opacity = 0.1;
    c2.style.opacity = 0.1;
    d1.style.opacity = 0.1;
    d3.style.opacity = 0.1;
    e2.style.opacity = 0.1;
    f1.style.opacity = 0.1;
    f3.style.opacity = 0.1;
    g2.style.opacity = 0.1;
}



function lightFiveByFive() {
    f2.style.opacity = 0.15;
    f4.style.opacity = 0.15;
    f1.style.opacity = 0.1;
    b2.style.opacity = 0.15;
    b4.style.opacity = 0.15;
    c1.style.opacity = 0.15;
    c3.style.opacity = 0.15;
    c5.style.opacity = 0.15;
    d2.style.opacity = 0.15;
    d4.style.opacity = 0.15;
    e1.style.opacity = 0.15;
    e3.style.opacity = 0.15;
    e5.style.opacity = 0.15;
    f3.style.opacity = 0.1;
    f5.style.opacity = 0.1;
    b1.style.opacity = 0.1;
    b3.style.opacity = 0.1;
    b5.style.opacity = 0.1;
    c2.style.opacity = 0.1;
    c4.style.opacity = 0.1;
    d1.style.opacity = 0.1;
    d3.style.opacity = 0.1;
    d5.style.opacity = 0.1;
    e2.style.opacity = 0.1;
    e4.style.opacity = 0.1;
}

function lightThreeByFive() {
    c1.style.opacity = 0.15;
    c3.style.opacity = 0.15;
    c5.style.opacity = 0.15;
    d2.style.opacity = 0.15;
    d4.style.opacity = 0.15;
    e1.style.opacity = 0.15;
    e3.style.opacity = 0.15;
    e5.style.opacity = 0.15;
    c2.style.opacity = 0.1;
    c4.style.opacity = 0.1;
    d1.style.opacity = 0.1;
    d3.style.opacity = 0.1;
    d5.style.opacity = 0.1;
    e2.style.opacity = 0.1;
    e4.style.opacity = 0.1;
}

function lightSevenByOne() {
    b1.style.opacity = 0.15;
    d1.style.opacity = 0.15;
    f1.style.opacity = 0.15;
    a1.style.opacity = 0.1;
    e1.style.opacity = 0.1;
    g1.style.opacity = 0.1;
    c1.style.opacity = 0.1;
}

function falsifyAll() {
        highlightableTilesInclude.a1 = false;
        highlightableTilesInclude.a2 = false;
        highlightableTilesInclude.a3 = false;
        highlightableTilesInclude.a4 = false;
        highlightableTilesInclude.a5 = false;
        highlightableTilesInclude.a6 = false;
        highlightableTilesInclude.a7 = false;
        highlightableTilesInclude.b1 = false;
        highlightableTilesInclude.b2 = false;
        highlightableTilesInclude.b3 = false;
        highlightableTilesInclude.b4 = false;
        highlightableTilesInclude.b5 = false;
        highlightableTilesInclude.b6 = false;
        highlightableTilesInclude.b7 = false;
        highlightableTilesInclude.c1 = false;
        highlightableTilesInclude.c2 = false;
        highlightableTilesInclude.c3 = false;
        highlightableTilesInclude.c4 = false;
        highlightableTilesInclude.c5 = false;
        highlightableTilesInclude.c6 = false;
        highlightableTilesInclude.c7 = false;
        highlightableTilesInclude.d1 = false;
        highlightableTilesInclude.d2 = false;
        highlightableTilesInclude.d3 = false;
        highlightableTilesInclude.d4 = false;
        highlightableTilesInclude.d5 = false;
        highlightableTilesInclude.d6 = false;
        highlightableTilesInclude.d7 = false;
        highlightableTilesInclude.e1 = false;
        highlightableTilesInclude.e2 = false;
        highlightableTilesInclude.e3 = false;
        highlightableTilesInclude.e4 = false;
        highlightableTilesInclude.e5 = false;
        highlightableTilesInclude.e6 = false;
        highlightableTilesInclude.e7 = false;
        highlightableTilesInclude.f1 = false;
        highlightableTilesInclude.f2 = false;
        highlightableTilesInclude.f3 = false;
        highlightableTilesInclude.f4 = false;
        highlightableTilesInclude.f5 = false;
        highlightableTilesInclude.f6 = false;
        highlightableTilesInclude.f7 = false;
        highlightableTilesInclude.g1 = false;
        highlightableTilesInclude.g2 = false;
        highlightableTilesInclude.g3 = false;
        highlightableTilesInclude.g4 = false;
        highlightableTilesInclude.g5 = false;
        highlightableTilesInclude.g6 = false;
        highlightableTilesInclude.g7 = false;
}
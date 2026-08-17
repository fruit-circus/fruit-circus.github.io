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
3x2 lower landing (to library)
4x2 balcony

*/


function checkWhichTilesShouldBeIncluded() { //width by depth
    console.log(current.room);
    movement.tempPrevent = true;
    if (room.size === "sevenBySeven") {
        fullHeight();
        noneAll();
        sevenBySeven();
    } else if (room.size === "sevenByFive") {
        fiveHeight();
        noneAll();
        sevenByFive();
    } else if (room.size === "sevenByOne") {
        oneHeight();
        noneAll();
        sevenByOne();
    } else if (room.size === "threeByThree") {
        threeHeight();
        noneAll();
        threeByThree();
    } else if (room.size === "threeByTwo") {
        threeHeight();
        noneAll();
        threeByTwo();
    } else if (room.size === "threeByFive") {
        fiveHeight();
        noneAll();
        threeByFive();
    } else if (room.size === "sevenByThree") {
        threeHeight();
        sevenByThree();
    } else if (room.size === "oneBySeven") {
        fullHeight();
        oneBySeven();
    } else if (room.size === "fiveByFive") {
        fiveHeight();
        fiveByFive();
    } else if (room.size === "threeByFour") {
        fiveHeight();
        threeByFour();
    } else if (room.size === "threeBySeven") {
        fullHeight();
        threeBySeven();
    }

    
}



function sevenBySeven() {
    blockAll();
    grid.style.aspectRatio = "7/7"
    magicGrid.style.aspectRatio = "7/7"
    targetGrid.style.aspectRatio = "7/7"
    highlightableTiles.push("a1", "a2", "a3", "a4", "a5", "a6", "a7");
    highlightableTiles.push("b1", "b2", "b3", "b4", "b5", "b6", "b7");
    highlightableTiles.push("c1", "c2", "c3", "c4", "c5", "c6", "c7");
    highlightableTiles.push("d1", "d2", "d3", "d4", "d5", "d6", "d7");
    highlightableTiles.push("e1", "e2", "e3", "e4", "e5", "e6", "e7");
    highlightableTiles.push("f1", "f2", "f3", "f4", "f5", "f6", "f7");
    highlightableTiles.push("g1", "g2", "g3", "g4", "g5", "g6", "g7");
    console.log("Highlightable Tiles:", highlightableTiles);

    grid.style.marginLeft = "0%";
    magicGrid.style.marginLeft = "0%";
    targetGrid.style.marginLeft = "0%";
    rooms.style.marginLeft = "0%";
    grid.style.gridTemplateColumns = "repeat(7, 1fr)";
    magicGrid.style.gridTemplateColumns = "repeat(7, 1fr)";
    targetGrid.style.gridTemplateColumns = "repeat(7, 1fr)";
    grid.style.width = "auto";
    magicGrid.style.width = "auto";
    targetGrid.style.width = "auto";
}

function threeBySeven() {
    noneAll();
    grid.style.aspectRatio = "3/7"
    magicGrid.style.aspectRatio = "3/7"
    highlightableTiles.splice(0, 200);
    highlightableTiles.push("c1", "c2", "c3", "c4", "c5", "c6", "c7");
    highlightableTiles.push("d1", "d2", "d3", "d4", "d5", "d6", "d7");
    highlightableTiles.push("e1", "e2", "e3", "e4", "e5", "e6", "e7");
    console.log("Highlightable Tiles:", highlightableTiles);

    c1.style.display = "block";
    c2.style.display = "block";
    c3.style.display = "block";
    c4.style.display = "block";
    c5.style.display = "block";
    c6.style.display = "block";
    c7.style.display = "block";

    e1.style.display = "block";
    e2.style.display = "block";
    e3.style.display = "block";
    e4.style.display = "block";
    e5.style.display = "block";
    e6.style.display = "block";
    e7.style.display = "block";

    d1.style.display = "block";
    d2.style.display = "block";
    d3.style.display = "block";
    d4.style.display = "block";
    d5.style.display = "block";
    d6.style.display = "block";
    d7.style.display = "block";

     c1over.style.display = "block";
    c2over.style.display = "block";
    c3over.style.display = "block";
    c4over.style.display = "block";
    c5over.style.display = "block";
    c6over.style.display = "block";
    c7over.style.display = "block";

    e1over.style.display = "block";
    e2over.style.display = "block";
    e3over.style.display = "block";
    e4over.style.display = "block";
    e5over.style.display = "block";
    e6over.style.display = "block";
    e7over.style.display = "block";

    d1over.style.display = "block";
    d2over.style.display = "block";
    d3over.style.display = "block";
    d4over.style.display = "block";
    d5over.style.display = "block";
    d6over.style.display = "block";
    d7over.style.display = "block";

    grid.style.width = "35%";
    magicGrid.style.width = "35%";

    grid.style.marginLeft = "22%";
    magicGrid.style.marginLeft = "22%";
    rooms.style.marginLeft = "22%";
    
    grid.style.gridTemplateColumns = "repeat(3, 1fr)";
    magicGrid.style.gridTemplateColumns = "repeat(3, 1fr)";
    rooms.style.width = "100%";
}


function fiveByFive() {
    highlightableTiles.splice(0, 200);
    highlightableTiles.push("b1", "b2", "b3", "b4", "b5");
    highlightableTiles.push("c1", "c2", "c3", "c4", "c5");
    highlightableTiles.push("d1", "d2", "d3", "d4", "d5");
    highlightableTiles.push("e1", "e2", "e3", "e4", "e5");
    highlightableTiles.push("f1", "f2", "f3", "f4", "f5");
    console.log("Highlightable Tiles:", highlightableTiles);
    blockAll();
    
    a1.style.display = "none";
    a2.style.display = "none";
    a3.style.display = "none";
    a4.style.display = "none";
    a5.style.display = "none";
    g1.style.display = "none";
    g2.style.display = "none";
    g3.style.display = "none";
    g4.style.display = "none";
    g5.style.display = "none";

    a1over.style.display = "none";
    a2over.style.display = "none";
    a3over.style.display = "none";
    a4over.style.display = "none";
    a5over.style.display = "none";
    g1over.style.display = "none";
    g2over.style.display = "none";
    g3over.style.display = "none";
    g4over.style.display = "none";
    g5over.style.display = "none";

    a6.style.display = "none";
    b6.style.display = "none";
    c6.style.display = "none";
    d6.style.display = "none";
    e6.style.display = "none";
    f6.style.display = "none";
    g6.style.display = "none";

    a7.style.display = "none";
    b7.style.display = "none";
    c7.style.display = "none";
    d7.style.display = "none";
    e7.style.display = "none";
    f7.style.display = "none";
    g7.style.display = "none";

    a6over.style.display = "none";
    b6over.style.display = "none";
    c6over.style.display = "none";
    d6over.style.display = "none";
    e6over.style.display = "none";
    f6over.style.display = "none";
    g6over.style.display = "none";

    a7over.style.display = "none";
    b7over.style.display = "none";
    c7over.style.display = "none";
    d7over.style.display = "none";
    e7over.style.display = "none";
    f7over.style.display = "none";
    g7over.style.display = "none";

    grid.style.aspectRatio = "5/5"
    magicGrid.style.aspectRatio = "5/5"
    grid.style.marginLeft = "10%";
    magicGrid.style.marginLeft = "10%";
    rooms.style.marginLeft = "10%";
    grid.style.gridTemplateColumns = "repeat(5, 1fr)";
    magicGrid.style.gridTemplateColumns = "repeat(5, 1fr)";
    grid.style.width = "60%";
    magicGrid.style.width = "60%";
    //rooms contents in this size may not be settled, fiddle if so
}

function threeByThree() {
    highlightableTiles.splice(0, 200);
    highlightableTiles.push("c1", "d1", "e1");
    highlightableTiles.push("c2", "d2", "e2");
    highlightableTiles.push("c3", "d3", "e3");
    console.log("Highlightable Tiles:", highlightableTiles);
    
    noneAll();
    c1.style.display = "block";
    d1.style.display = "block";
    e1.style.display = "block";

    c2.style.display = "block";
    d2.style.display = "block";
    e2.style.display = "block";

    c3.style.display = "block";
    d3.style.display = "block";
    e3.style.display = "block";

    c1over.style.display = "block";
    d1over.style.display = "block";
    e1over.style.display = "block";

    c2over.style.display = "block";
    d2over.style.display = "block";
    e2over.style.display = "block";

    c3over.style.display = "block";
    d3over.style.display = "block";
    e3over.style.display = "block";

    grid.style.aspectRatio = "3/3"
    magicGrid.style.aspectRatio = "3/3"
    grid.style.gridTemplateColumns = "repeat(3, 1fr)";
    magicGrid.style.gridTemplateColumns = "repeat(3, 1fr)";
    grid.style.width = "35%";
    magicGrid.style.width = "35%";

    grid.style.marginLeft = "22%";
    magicGrid.style.marginLeft = "22%";
    rooms.style.marginLeft = "22%";
    

    rooms.style.width = "100%";
}


function threeByFour() {
    highlightableTiles.splice(0, 200);
    highlightableTiles.push("c1", "d1", "e1");
    highlightableTiles.push("c2", "d2", "e2");
    highlightableTiles.push("c3", "d3", "e3");
    highlightableTiles.push("c4", "d4", "e4");
    console.log("Highlightable Tiles:", highlightableTiles);
    
    noneAll();
    c1.style.display = "block";
    d1.style.display = "block";
    e1.style.display = "block";

    c2.style.display = "block";
    d2.style.display = "block";
    e2.style.display = "block";

    c3.style.display = "block";
    d3.style.display = "block";
    e3.style.display = "block";
    
    c4.style.display = "block";
    d4.style.display = "block";
    e4.style.display = "block";

    c1over.style.display = "block";
    d1over.style.display = "block";
    e1over.style.display = "block";

    c2over.style.display = "block";
    d2over.style.display = "block";
    e2over.style.display = "block";

    c3over.style.display = "block";
    d3over.style.display = "block";
    e3over.style.display = "block";

    c4over.style.display = "block";
    d4over.style.display = "block";
    e4over.style.display = "block";

    grid.style.aspectRatio = "3/4"
    magicGrid.style.aspectRatio = "3/4"
    grid.style.gridTemplateColumns = "repeat(3, 1fr)";
    magicGrid.style.gridTemplateColumns = "repeat(3, 1fr)";
    grid.style.width = "35%";
    magicGrid.style.width = "35%";

    grid.style.marginLeft = "22%";
    magicGrid.style.marginLeft = "22%";
    rooms.style.marginLeft = "22%";
    
    rooms.style.width = "100%";
}


function threeByTwo() {
    highlightableTiles.splice(0, 200);
    highlightableTiles.push("c1", "d1", "e1");
    highlightableTiles.push("c2", "d2", "e2");
    console.log("Highlightable Tiles:", highlightableTiles);

    c1.style.display = "block";
    d1.style.display = "block";
    e1.style.display = "block";

    c2.style.display = "block";
    d2.style.display = "block";
    e2.style.display = "block";

    c1over.style.display = "block";
    d1over.style.display = "block";
    e1over.style.display = "block";

    c2over.style.display = "block";
    d2over.style.display = "block";
    e2over.style.display = "block";

    grid.style.aspectRatio = "3/2"
    magicGrid.style.aspectRatio = "3/2"
    grid.style.gridTemplateColumns = "repeat(3, 1fr)";
    magicGrid.style.gridTemplateColumns = "repeat(3, 1fr)";
    grid.style.width = "35%";
    magicGrid.style.width = "35%";

    grid.style.marginLeft = "22%";
    magicGrid.style.marginLeft = "22%";
    rooms.style.marginLeft = "22%";
    rooms.style.width = "100%";
}

function sevenByFive() {
    highlightableTiles.splice(0, 200);
    highlightableTiles.push("a1", "a2", "a3", "a4", "a5");
    highlightableTiles.push("b1", "b2", "b3", "b4", "b5");
    highlightableTiles.push("c1", "c2", "c3", "c4", "c5");
    highlightableTiles.push("d1", "d2", "d3", "d4", "d5");
    highlightableTiles.push("e1", "e2", "e3", "e4", "e5");
    highlightableTiles.push("f1", "f2", "f3", "f4", "f5");
    highlightableTiles.push("g1", "g2", "g3", "g4", "g5");
    console.log("Highlightable Tiles:", highlightableTiles);
   
    blockAll();
    a6.style.display = "none";
    b6.style.display = "none";
    c6.style.display = "none";
    d6.style.display = "none";
    e6.style.display = "none";
    f6.style.display = "none";
    g6.style.display = "none";

    a7.style.display = "none";
    b7.style.display = "none";
    c7.style.display = "none";
    d7.style.display = "none";
    e7.style.display = "none";
    f7.style.display = "none";
    g7.style.display = "none";

    a6over.style.display = "none";
    b6over.style.display = "none";
    c6over.style.display = "none";
    d6over.style.display = "none";
    e6over.style.display = "none";
    f6over.style.display = "none";
    g6over.style.display = "none";

    a7over.style.display = "none";
    b7over.style.display = "none";
    c7over.style.display = "none";
    d7over.style.display = "none";
    e7over.style.display = "none";
    f7over.style.display = "none";
    g7over.style.display = "none";

    grid.style.aspectRatio = "7/5"
    magicGrid.style.aspectRatio = "7/5"

    grid.style.marginLeft = "0%";
    magicGrid.style.marginLeft = "0%";
    rooms.style.marginLeft = "0%";
    grid.style.gridTemplateColumns = "repeat(7, 1fr)";
    magicGrid.style.gridTemplateColumns = "repeat(7, 1fr)";
    grid.style.width = "auto";
    magicGrid.style.width = "auto";
}


function sevenByThree() {
    highlightableTiles.splice(0, 200);
    highlightableTiles.push("a1", "a2", "a3", "a4", "a5", "a6", "a7");
    highlightableTiles.push("b1", "b2", "b3", "b4", "b5", "b6", "b7");
    highlightableTiles.push("c1", "c2", "c3", "c4", "c5", "c6", "c7");
    console.log("Highlightable Tiles:", highlightableTiles);
   
    noneAll();
    a1.style.display = "block";
    b1.style.display = "block";
    c1.style.display = "block";
    d1.style.display = "block";
    e1.style.display = "block";
    f1.style.display = "block";
    g1.style.display = "block";

    a2.style.display = "block";
    b2.style.display = "block";
    c2.style.display = "block";
    d2.style.display = "block";
    e2.style.display = "block";
    f2.style.display = "block";
    g2.style.display = "block";

    a3.style.display = "block";
    b3.style.display = "block";
    c3.style.display = "block";
    d3.style.display = "block";
    e3.style.display = "block";
    f3.style.display = "block";
    g3.style.display = "block";

    a1over.style.display = "block";
    b1over.style.display = "block";
    c1over.style.display = "block";
    d1over.style.display = "block";
    e1over.style.display = "block";
    f1over.style.display = "block";
    g1over.style.display = "block";

    a2over.style.display = "block";
    b2over.style.display = "block";
    c2over.style.display = "block";
    d2over.style.display = "block";
    e2over.style.display = "block";
    f2over.style.display = "block";
    g2over.style.display = "block";

    a3over.style.display = "block";
    b3over.style.display = "block";
    c3over.style.display = "block";
    d3over.style.display = "block";
    e3over.style.display = "block";
    f3over.style.display = "block";
    g3over.style.display = "block";



    grid.style.aspectRatio = "7/3"
    magicGrid.style.aspectRatio = "7/3"
    targetGrid.style.aspectRatio = "7/3"

    grid.style.marginLeft = "0%";
    magicGrid.style.marginLeft = "0%";
    targetGrid.style.marginLeft = "0%";

    rooms.style.marginLeft = "0%";
    grid.style.gridTemplateColumns = "repeat(7, 1fr)";
    magicGrid.style.gridTemplateColumns = "repeat(7, 1fr)";
    targetGrid.style.gridTemplateColumns = "repeat(7, 1fr)";
    
    grid.style.width = "auto";
    magicGrid.style.width = "auto";
    targetGrid.style.width = "auto";
}


function threeByFive() {
    highlightableTiles.splice(0, 200);
    highlightableTiles.push("c1", "c2", "c3", "c4", "c5");
    highlightableTiles.push("d1", "d2", "d3", "d4", "d5");
    highlightableTiles.push("e1", "e2", "e3", "e4", "e5");
    console.log("Highlightable Tiles:", highlightableTiles);
    noneAll();
    c1.style.display = "block";
    c2.style.display = "block";
    c3.style.display = "block";
    c4.style.display = "block";
    c5.style.display = "block";

    d1.style.display = "block";
    d2.style.display = "block";
    d3.style.display = "block";
    d4.style.display = "block";
    d5.style.display = "block";

    e1.style.display = "block";
    e2.style.display = "block";
    e3.style.display = "block";
    e4.style.display = "block";
    e5.style.display = "block";

    c1over.style.display = "block";
    c2over.style.display = "block";
    c3over.style.display = "block";
    c4over.style.display = "block";
    c5over.style.display = "block";

    d1over.style.display = "block";
    d2over.style.display = "block";
    d3over.style.display = "block";
    d4over.style.display = "block";
    d5over.style.display = "block";

    e1over.style.display = "block";
    e2over.style.display = "block";
    e3over.style.display = "block";
    e4over.style.display = "block";
    e5over.style.display = "block";
    
    grid.style.aspectRatio = "3/5"
    magicGrid.style.aspectRatio = "3/5"

    grid.style.marginLeft = "22%";
    magicGrid.style.marginLeft = "22%";
    rooms.style.marginLeft = "22%";
    rooms.style.width = "100%";
    grid.style.gridTemplateColumns = "repeat(3, 1fr)";
    magicGrid.style.gridTemplateColumns = "repeat(3, 1fr)";
    grid.style.width = "35%";
    magicGrid.style.width = "35%";
}


function sevenByOne() {
    highlightableTiles.splice(0, 200);
    highlightableTiles.push("a1", "b1", "c1", "d1", "e1", "f1", "g1");
    console.log("Highlightable Tiles:", highlightableTiles);
	noneAll();
    a1.style.display = "block";
    b1.style.display = "block";
    c1.style.display = "block";
    d1.style.display = "block";
    e1.style.display = "block";
    f1.style.display = "block";
    g1.style.display = "block";
a1over.style.display = "block";
    b1over.style.display = "block";
    c1over.style.display = "block";
    d1over.style.display = "block";
    e1over.style.display = "block";
    f1over.style.display = "block";
    g1over.style.display = "block";

    grid.style.aspectRatio = "7/1"
    magicGrid.style.aspectRatio = "7/1"

        grid.style.marginLeft = "0%";
    magicGrid.style.marginLeft = "0%";
    rooms.style.marginLeft = "0%";
    grid.style.gridTemplateColumns = "repeat(7, 1fr)";
    magicGrid.style.gridTemplateColumns = "repeat(7, 1fr)";
    grid.style.width = "auto";
    magicGrid.style.width = "auto";


}


function oneBySeven() {
    highlightableTiles.splice(0, 200);
    highlightableTiles.push("d1", "d2", "d3", "d4", "d5", "d6", "d7");
    console.log("Highlightable Tiles 1/7:", highlightableTiles);
    noneAll();
    d1.style.display = "block";
    d2.style.display = "block";
    d3.style.display = "block";
    d4.style.display = "block";
    d5.style.display = "block";
    d6.style.display = "block";
    d7.style.display = "block";

    d1over.style.display = "block";
    d2over.style.display = "block";
    d3over.style.display = "block";
    d4over.style.display = "block";
    d5over.style.display = "block";
    d6over.style.display = "block";
    d7over.style.display = "block";

    grid.style.aspectRatio = "1/7"
    magicGrid.style.aspectRatio = "1/7"


    grid.style.marginLeft = "30%";
    magicGrid.style.marginLeft = "30%";
    rooms.style.marginLeft = "30%";
    rooms.style.width = "100%";
    grid.style.gridTemplateColumns = "repeat(1, 1fr)";
    magicGrid.style.gridTemplateColumns = "repeat(1, 1fr)";
    grid.style.width = "auto";
    magicGrid.style.width = "auto";
    
}


function noneAll() {
    a1.style.display = "none";
    b1.style.display = "none";
    c1.style.display = "none";
    d1.style.display = "none";
    e1.style.display = "none";
    f1.style.display = "none";
    g1.style.display = "none";

    a2.style.display = "none";
    b2.style.display = "none";
    c2.style.display = "none";
    d2.style.display = "none";
    e2.style.display = "none";
    f2.style.display = "none";
    g2.style.display = "none";

    a3.style.display = "none";
    b3.style.display = "none";
    c3.style.display = "none";
    d3.style.display = "none";
    e3.style.display = "none";
    f3.style.display = "none";
    g3.style.display = "none";

    a4.style.display = "none";
    b4.style.display = "none";
    c4.style.display = "none";
    d4.style.display = "none";
    e4.style.display = "none";
    f4.style.display = "none";
    g4.style.display = "none";

    a5.style.display = "none";
    b5.style.display = "none";
    c5.style.display = "none";
    d5.style.display = "none";
    e5.style.display = "none";
    f5.style.display = "none";
    g5.style.display = "none";

    a6.style.display = "none";
    b6.style.display = "none";
    c6.style.display = "none";
    d6.style.display = "none";
    e6.style.display = "none";
    f6.style.display = "none";
    g6.style.display = "none";

    a7.style.display = "none";
    b7.style.display = "none";
    c7.style.display = "none";
    d7.style.display = "none";
    e7.style.display = "none";
    f7.style.display = "none";
    g7.style.display = "none";


    a1over.style.display = "none";
    b1over.style.display = "none";
    c1over.style.display = "none";
    d1over.style.display = "none";
    e1over.style.display = "none";
    f1over.style.display = "none";
    g1over.style.display = "none";

    a2over.style.display = "none";
    b2over.style.display = "none";
    c2over.style.display = "none";
    d2over.style.display = "none";
    e2over.style.display = "none";
    f2over.style.display = "none";
    g2over.style.display = "none";

    a3over.style.display = "none";
    b3over.style.display = "none";
    c3over.style.display = "none";
    d3over.style.display = "none";
    e3over.style.display = "none";
    f3over.style.display = "none";
    g3over.style.display = "none";

    a4over.style.display = "none";
    b4over.style.display = "none";
    c4over.style.display = "none";
    d4over.style.display = "none";
    e4over.style.display = "none";
    f4over.style.display = "none";
    g4over.style.display = "none";

    a5over.style.display = "none";
    b5over.style.display = "none";
    c5over.style.display = "none";
    d5over.style.display = "none";
    e5over.style.display = "none";
    f5over.style.display = "none";
    g5over.style.display = "none";

    a6over.style.display = "none";
    b6over.style.display = "none";
    c6over.style.display = "none";
    d6over.style.display = "none";
    e6over.style.display = "none";
    f6over.style.display = "none";
    g6over.style.display = "none";

    a7over.style.display = "none";
    b7over.style.display = "none";
    c7over.style.display = "none";
    d7over.style.display = "none";
    e7over.style.display = "none";
    f7over.style.display = "none";
    g7over.style.display = "none";
}
 
function blockAll() {
    a1.style.display = "block";
    b1.style.display = "block";
    c1.style.display = "block";
    d1.style.display = "block";
    e1.style.display = "block";
    f1.style.display = "block";
    g1.style.display = "block";

    a2.style.display = "block";
    b2.style.display = "block";
    c2.style.display = "block";
    d2.style.display = "block";
    e2.style.display = "block";
    f2.style.display = "block";
    g2.style.display = "block";

    a3.style.display = "block";
    b3.style.display = "block";
    c3.style.display = "block";
    d3.style.display = "block";
    e3.style.display = "block";
    f3.style.display = "block";
    g3.style.display = "block";

    a4.style.display = "block";
    b4.style.display = "block";
    c4.style.display = "block";
    d4.style.display = "block";
    e4.style.display = "block";
    f4.style.display = "block";
    g4.style.display = "block";

    a5.style.display = "block";
    b5.style.display = "block";
    c5.style.display = "block";
    d5.style.display = "block";
    e5.style.display = "block";
    f5.style.display = "block";
    g5.style.display = "block";

    a6.style.display = "block";
    b6.style.display = "block";
    c6.style.display = "block";
    d6.style.display = "block";
    e6.style.display = "block";
    f6.style.display = "block";
    g6.style.display = "block";

    a7.style.display = "block";
    b7.style.display = "block";
    c7.style.display = "block";
    d7.style.display = "block";
    e7.style.display = "block";
    f7.style.display = "block";
    g7.style.display = "block";




    a1over.style.display = "block";
    b1over.style.display = "block";
    c1over.style.display = "block";
    d1over.style.display = "block";
    e1over.style.display = "block";
    f1over.style.display = "block";
    g1over.style.display = "block";

    a2over.style.display = "block";
    b2over.style.display = "block";
    c2over.style.display = "block";
    d2over.style.display = "block";
    e2over.style.display = "block";
    f2over.style.display = "block";
    g2over.style.display = "block";

    a3over.style.display = "block";
    b3over.style.display = "block";
    c3over.style.display = "block";
    d3over.style.display = "block";
    e3over.style.display = "block";
    f3over.style.display = "block";
    g3over.style.display = "block";

    a4over.style.display = "block";
    b4over.style.display = "block";
    c4over.style.display = "block";
    d4over.style.display = "block";
    e4over.style.display = "block";
    f4over.style.display = "block";
    g4over.style.display = "block";

    a5over.style.display = "block";
    b5over.style.display = "block";
    c5over.style.display = "block";
    d5over.style.display = "block";
    e5over.style.display = "block";
    f5over.style.display = "block";
    g5over.style.display = "block";

    a6over.style.display = "block";
    b6over.style.display = "block";
    c6over.style.display = "block";
    d6over.style.display = "block";
    e6over.style.display = "block";
    f6over.style.display = "block";
    g6over.style.display = "block";

    a7over.style.display = "block";
    b7over.style.display = "block";
    c7over.style.display = "block";
    d7over.style.display = "block";
    e7over.style.display = "block";
    f7over.style.display = "block";
    g7over.style.display = "block";
}


function fullHeight() {
    rooms.style.marginTop = "0%";
    grid.style.marginTop = "0%";
    magicGrid.style.marginTop = "0%";
    targetGrid.style.marginTop = "0%";
}

function fiveHeight() {
    rooms.style.marginTop = "10%";
    grid.style.marginTop = "10%";
    magicGrid.style.marginTop = "10%";
    targetGrid.style.marginTop = "10%";
}

function threeHeight() {
    rooms.style.marginTop = "20%";
    grid.style.marginTop = "20%";
    magicGrid.style.marginTop = "20%";
    targetGrid.style.marginTop = "20%";
}

function oneHeight() {
    rooms.style.marginTop = "30%";
    grid.style.marginTop = "30%";
    magicGrid.style.marginTop = "30%";
    targetGrid.style.marginTop = "30%";
}


function northPorchWalls() {

}

function undoNorthPorchWalls() {

}
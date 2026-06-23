let pipe = {
    one: 0,
    two: 0,
    three: 0,
    four: 0,
    five: 0,
    six: 0,
    seven: 0,
    eight: 0,
    nine: 0,
}

function smaller(pipe) {
    pipe.style.width = '190px';
    pipe.style.margin = '5px';
    pipe.style.border = "2px dashed black";
}

function bigger(pipe) {
    pipe.style.width = '200px';
    pipe.style.margin = '0px';
    pipe.style.border = "2px dashed transparent";

}

function check() {
    handlesqueak1.play();
    inflowon.style.display = "block";
    inflow.style.display = "none";
    if (pipe.two == 3 && pipe.three == 3 && pipe.six == 2 && (pipe.five == 1 || pipe.five == 3) && pipe.four == 0 && pipe.seven == 3 && pipe.eight == 0) {
setTimeout(() => {
    closePipePuzzle();
    prizeglass2.style.display = "none";
    prizes.macaroniPipe = true;
    }, 1000);
    } else {
        setTimeout(() => {
        inflowon.style.display = "none";
        inflow.style.display = "block";
        bunk.play();
    }, 1600);
    }
}


function rotate1() {
    clack();
    if (pipe.one == 0) {
        pipe1.style.transform = "rotate(90deg)";
        pipe.one = 1;
    } else if (pipe.one == 1) {
        pipe1.style.transform = "rotate(180deg)";
        pipe.one = 2;
    } else if (pipe.one == 2) {
        pipe1.style.transform = "rotate(270deg)";
        pipe.one = 3;
    } else if (pipe.one == 3) {
        pipe1.style.transform = "rotate(0deg)";
        pipe.one = 0;
    }
}

function rotate2() {
    clack();
    if (pipe.two == 0) {
        pipe2.style.transform = "rotate(90deg)";
        pipe.two = 1;
    } else if (pipe.two == 1) {
        pipe2.style.transform = "rotate(180deg)";
        pipe.two = 2;
    } else if (pipe.two == 2) {
        pipe2.style.transform = "rotate(270deg)";
        pipe.two = 3;
    } else if (pipe.two == 3) {
        pipe2.style.transform = "rotate(0deg)";
        pipe.two = 0;
    }
}

function rotate3() {
    clack();
    if (pipe.three == 0) {
        pipe3.style.transform = "rotate(90deg)";
        pipe.three = 1;
    } else if (pipe.three == 1) {
        pipe3.style.transform = "rotate(180deg)";
        pipe.three = 2;
    } else if (pipe.three == 2) {
        pipe3.style.transform = "rotate(270deg)";
        pipe.three = 3;
    } else if (pipe.three == 3) {
        pipe3.style.transform = "rotate(0deg)";
        pipe.three = 0;
    }
}


function rotate4() {
    clack();
    if (pipe.four == 0) {
        pipe4.style.transform = "rotate(90deg)";
        pipe.four = 1;
    } else if (pipe.four == 1) {
        pipe4.style.transform = "rotate(180deg)";
        pipe.four = 2;
    } else if (pipe.four == 2) {
        pipe4.style.transform = "rotate(270deg)";
        pipe.four = 3;
    } else if (pipe.four == 3) {
        pipe4.style.transform = "rotate(0deg)";
        pipe.four = 0;
    }
}


function rotate5() {
    clack();
    if (pipe.five == 0) {
        pipe5.style.transform = "rotate(90deg)";
        pipe.five = 1;
    } else if (pipe.five == 1) {
        pipe5.style.transform = "rotate(180deg)";
        pipe.five = 2;
    } else if (pipe.five == 2) {
        pipe5.style.transform = "rotate(270deg)";
        pipe.five = 3;
    } else if (pipe.five == 3) {
        pipe5.style.transform = "rotate(0deg)";
        pipe.five = 0;
    }
}


function rotate6() {
    clack();
    if (pipe.six == 0) {
        pipe6.style.transform = "rotate(90deg)";
        pipe.six = 1;
    } else if (pipe.six == 1) {
        pipe6.style.transform = "rotate(180deg)";
        pipe.six = 2;
    } else if (pipe.six == 2) {
        pipe6.style.transform = "rotate(270deg)";
        pipe.six = 3;
    } else if (pipe.six == 3) {
        pipe6.style.transform = "rotate(0deg)";
        pipe.six = 0;
    }
}


function rotate7() {
    clack();
    if (pipe.seven == 0) {
        pipe7.style.transform = "rotate(90deg)";
        pipe.seven = 1;
    } else if (pipe.seven == 1) {
        pipe7.style.transform = "rotate(180deg)";
        pipe.seven = 2;
    } else if (pipe.seven == 2) {
        pipe7.style.transform = "rotate(270deg)";
        pipe.seven = 3;
    } else if (pipe.seven == 3) {
        pipe7.style.transform = "rotate(0deg)";
        pipe.seven = 0;
    }
}


function rotate8() {
    clack();
    if (pipe.eight == 0) {
        pipe8.style.transform = "rotate(90deg)";
        pipe.eight = 1;
    } else if (pipe.eight == 1) {
        pipe8.style.transform = "rotate(180deg)";
        pipe.eight = 2;
    } else if (pipe.eight == 2) {
        pipe8.style.transform = "rotate(270deg)";
        pipe.eight = 3;
    } else if (pipe.eight == 3) {
        pipe8.style.transform = "rotate(0deg)";
        pipe.eight = 0;
    }
}

function rotate9() {
    clack();
    if (pipe.nine == 0) {
        pipe9.style.transform = "rotate(90deg)";
        pipe.nine = 1;
    } else if (pipe.nine == 1) {
        pipe9.style.transform = "rotate(180deg)";
        pipe.nine = 2;
    } else if (pipe.nine == 2) {
        pipe9.style.transform = "rotate(270deg)";
        pipe.nine = 3;
    } else if (pipe.nine == 3) {
        pipe9.style.transform = "rotate(0deg)";
        pipe.nine = 0;
    }
}

function clack() {
    const clackers = [clack1, clack2];
    const randomOuchdex = Math.floor(Math.random() * clackers.length);
    const anyClack = clackers[randomOuchdex];
    anyClack.play();
}
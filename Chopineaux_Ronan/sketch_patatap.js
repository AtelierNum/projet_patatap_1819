var anim1 = {
    w: 0
}

var analyser;
var song1;
var song2;
var song3;
var song4;
var song5;
var song6
var song7
var song8
var song8FFT
var song10
var song10FFT
var song11
var song11Amp
var song12
var xpos = []
var ypos = []
var xtarget = []
var ytarget = []
var song13;
var song14;
var song15;
var song16;
var song17;
var song18;
var song18FFT
var song19;
var song20;
var song20FFT
var song21;
var song22;
var song23;
var song24;
var song25;
var song26;


//PRELOAD --------------------------------------------------------------------------------------------------------------


function preload() {
    song1 = loadSound('assets/SunsetLover1.mp3');
    song2 = loadSound('assets/SunsetLover2.mp3');
    song3 = loadSound('assets/SunsetLover3.mp3');
    song4 = loadSound('assets/SunsetLover4.mp3');
    song5 = loadSound('assets/SunsetLover5.mp3');
    song6 = loadSound('assets/SunsetLover6.mp3');
    song7 = loadSound('assets/SunsetLover7.mp3');
    song8 = loadSound('assets/SunsetLover8.mp3');
    song9 = loadSound('assets/SunsetLover9.mp3');
    song10 = loadSound('assets/SunsetLover10.mp3');
    song11 = loadSound('assets/SunsetLover11.mp3');
    song12 = loadSound('assets/SunsetLover12.mp3');
    song13 = loadSound('assets/SunsetLover13.mp3');
    song14 = loadSound('assets/SunsetLover14.mp3');
    song15 = loadSound('assets/SunsetLover15.mp3');
    song16 = loadSound('assets/SunsetLover16.mp3');
    song17 = loadSound('assets/SunsetLover17.mp3');
    song18 = loadSound('assets/SunsetLover18.mp3');
    song19 = loadSound('assets/SunsetLover19.mp3');
    song20 = loadSound('assets/SunsetLover20.mp3');
    song21 = loadSound('assets/SunsetLover21.mp3');
    song22 = loadSound('assets/SunsetLover22.mp3');
    song23 = loadSound('assets/SunsetLover23.mp3');
    song24 = loadSound('assets/SunsetLover24.mp3');
    song25 = loadSound('assets/SunsetLover25.mp3');
    song26 = loadSound('assets/SunsetLover26.mp3');
}


//SETUP ----------------------------------------------------------------------------------------------------------------


function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);

    // create a new Amplitude analyzer
    analyzer = new p5.Amplitude();

    // Patch the input to a volume analyzer
    analyzer.setInput(song1);

    // connexion de l'analyseur pour l'animation 3
    song8FFT = new p5.FFT(0.8, 2048)
    song8FFT.setInput(song8)

    // connexion de l'analyseur pour l'animation 5
    song10FFT = new p5.FFT(0.9, 2048)
    song10FFT.setInput(song10)

    // connexion de l'analyseur pour l'animation 6
    song11Amp = new p5.Amplitude()
    song11Amp.setInput(song11)
    song11Amp.toggleNormalize()

    // initialisation de tableaux pour l'animation 7
    for (var i = 0; i < 50; i++) {
        xpos.push(random(0, width))
        ypos.push(random(0, -height))
        xtarget.push(random(width))
        ytarget.push(random(height))
    }

    song20FFT = new p5.FFT(0.8, 2048)
    song20FFT.setInput(song8)

    song18FFT = new p5.FFT(0.8, 2048)
    song18FFT.setInput(song8)


}


//DRAW ----------------------------------------------------------------------------------------------------------------

function draw() {

    background(0, 40);


    playSound(song1, 65); // 'a' == song1
    if (song1.isPlaying() == true) {
        push();
        var rad = map(song1.currentTime(), 0, song1.duration(), 10, width);
        stroke(7, 124, 200)
        strokeWeight(5)
        noFill();
        ellipse(width * 0.5, height * 0.5, rad, rad);
        pop();
    }


    playSound(song2, 90); // 'z' == song2
    if (song2.isPlaying() == true) {
        push();
        translate(width * 0.5, height * 0.5);
        var ang = map(song2.currentTime(), 0, song2.duration(), 0, PI);
        rectMode(CENTER);
        rotate(ang);
        stroke(7, 124, 200)
        strokeWeight(5)
        noFill();
        rect(0, 0, width * 0.25, height * 0.25);
        stroke(0, 0, 0);
        pop();
    }


    playSound(song3, 69); // 'e' == song3
    if (song3.isPlaying() == true) {
        push();
        translate(width * 0.5, height * 0.5);
        var ang = map(song3.currentTime(), 0, song3.duration(), 0, 2 * PI);
        rectMode(CENTER);
        rotate(ang);
        noStroke()
        fill(7, 124, 200);
        rect(0, 0, width * 0.003, height * 0.5);
        pop();
    }


    playSound(song4, 82); // 'r' == song4
    if (keyIsDown(82)) {
        anim1 = {
            w: 0
        }
        var animation1 = anime({
            targets: anim1,
            w: height * 0.4,
            easing: [.91, -0.54, .29, 1.56],
            direction: 'alternate',
            loop: true,
            duration: song4.duration() * 1000
        });
    }


    if (song4.isPlaying() == true) {

        push()
        stroke(7, 124, 200)
        strokeWeight(5)
        noFill();
        ellipse(width * 0.5, height * 0.5, anim1.w, anim1.w)
        pop();
    }


    playSound(song5, 84); // 't' == song5
    if (song5.isPlaying() == true) {
        push()
        var rad = map(song5.currentTime(), 0, song5.duration(), 10, width / 5)
        fill(7, 124, 200)
        ellipse(width * 0.5, height * 0.5, rad, rad)
        pop()
    }


    playSound(song6, 89); // 'y' == song6
    if (song6.isPlaying() == true) {
        push();
        translate(width * 0.5, height * 0.5);
        rotate(frameCount / -30.0);
        fill(7, 124, 200)
        stroke(7, 124, 200)
        strokeWeight(5)
        star(width, height, 50, 10000, 100);
        pop();
    }


    playSound(song7, 85); // 'u' == song7
    if (song7.isPlaying() == true) {
        push()
        var rotation = map(song7.currentTime(), 0, song7.duration(), 0, PI)
        stroke(7, 124, 200)
        strokeWeight(3)
        noFill()
        rectMode(CENTER)
        translate(width * 0.5, height * 0.5)
        rotate(rotation)
        rect(0, 0, width * 0.5, width * 0.05)
        pop()

        push()
        var rotation = map(song7.currentTime(), 0, song7.duration(), 0, PI)
        stroke(7, 124, 200)
        strokeWeight(3)
        noFill()
        rectMode(CENTER)
        translate(width * 0.5, height * 0.5)
        rotate(rotation)
        rect(0, 0, width * 0.05, width * 0.5)
        pop()
    }


    playSound(song8, 73); // 'i' == song8
    if (song8.isPlaying() == true) {
        song8FFT.analyze();
        rectMode(CENTER);
        var nrj1 = song8FFT.getEnergy("bass")


        push()
        stroke(7, 124, 200)
        strokeWeight(5)
        noFill()
        translate(width * 0.5, height * 0.5)
        rotate(PI / 4)
        rect(0, 0, nrj1 * 2.5, nrj1 * 2.5)
        pop()

        push()
        stroke(7, 124, 200)
        strokeWeight(3)
        noFill()
        translate(width * 0.25, height * 0.5)
        var ang = map(song8.currentTime(), 0, song8.duration(), 0, -PI);
        rectMode(CENTER)
        rotate(ang)
        rect(0, 0, width * 0.2, width * 0.2)
        pop()

        push()
        stroke(7, 124, 200)
        strokeWeight(3)
        noFill()
        translate(width * 0.75, height * 0.5)
        var ang = map(song8.currentTime(), 0, song8.duration(), 0, PI);
        rectMode(CENTER)
        rotate(ang)
        rect(0, 0, width * 0.2, width * 0.2)
        pop()

    }


    playSound(song9, 79); // 'o' == song9
    if (song9.isPlaying() == true) {
        push();
        translate(width * 0.5, height * 0.5);
        var ang = map(song9.currentTime(), 0, song9.duration(), 0, 2 * PI);
        rectMode(CENTER);
        rotate(ang);
        noStroke()
        fill(7, 124, 200);
        rect(0, 0, width * 0.003, height * 10);
        pop();

        push();
        translate(width * 0.5, height * 0.5);
        var ang = map(song9.currentTime(), 0, song9.duration(), 0, 2 * PI / 2);
        rectMode(CENTER);
        rotate(ang);
        noStroke()
        fill(7, 124, 200);
        rect(0, 0, width * 0.003, height * 10);
        pop();

        push();
        translate(width * 0.5, height * 0.5);
        var ang = map(song9.currentTime(), 0, song9.duration(), 0, 2 * PI * 2);
        rectMode(CENTER);
        rotate(ang);
        noStroke()
        fill(7, 124, 200);
        rect(0, 0, width * 0.003, height * 10);
        pop();

        push();
        translate(width * 0.5, height * 0.5);
        var ang = map(song9.currentTime(), 0, song9.duration(), 0, 2 * PI * 8);
        rectMode(CENTER);
        rotate(ang);
        noStroke()
        fill(7, 124, 200);
        rect(0, 0, width * 0.003, height * 10);
        pop();
    }


    playSound(song10, 80) // 'p' == song10
    if (song10.isPlaying() == true) {
        push()
        var waveform = song10FFT.waveform();
        noFill();
        beginShape();
        stroke(7, 124, 200);
        strokeWeight(3);
        for (var i = 0; i < waveform.length; i++) {
            var x = map(i, 0, waveform.length, 0, width);
            var y = map(waveform[i], -3, 3, 0, height);
            curveVertex(x, y);
        }
        endShape();
        pop()
    }


    playSound(song11, 81) // 'q' == song11
    if (song11.isPlaying() == true) {
        push()
        noStroke()
        fill(7, 124, 200);
        var lvl = song11Amp.getLevel() * 200;
        var nsegment = 96
        var ncurrentsegment = (map(song11.currentTime(), 0, song11.duration(), 0, nsegment + 10))
        strokeWeight(4)
        for (var i = 0; i < ncurrentsegment; i++) {
            var h = map(i, 0, nsegment, 0, 320)
            stroke(h, 45, 100, lvl + 55)
            var angle = map(i, 0, nsegment, 0, TWO_PI);
            var x = width * 0.5 + height * 0.45 * cos(angle)
            var y = height * 0.5 + height * 0.45 * sin(angle)
            line(width * 0.5, height * 0.5, x, y)
        }
        pop()
    }


    playSound(song12, 83) // 's' == song12
    if (song12.isPlaying() == true) {
        var t = map(song12.currentTime(), 0, song12.duration() * 0.75, 0, 1)
        var grey = map(song12.currentTime(), song12.duration() * 0.75, song12.duration(), 255, 180)
        t = constrain(t, 0, 1)
        grey = constrain(grey, 180, 255)
        push()
        noFill()
        stroke(204, 14, 83)
        strokeWeight(2)
        for (var i = 0; i < 50; i++) {
            var x = lerp(xpos[i], xtarget[i], t)
            var y = lerp(ypos[i], ytarget[i], t)
            ellipse(x, y, 50, 50)
        }
        pop()
    }


    playSound(song13, 68) // 'd' == song13
    if (song13.isPlaying() == true) {
        push();
        translate(width * 0.5, height * 0.5);
        var ang = map(song13.currentTime(), 0, song13.duration(), -1, PI / -2);
        rectMode(CENTER);
        rotate(ang);
        noStroke()
        fill(204, 14, 83);
        rect(0, 0, width * 0.003, height * 0.5);
        pop();

        push();
        translate(width * 0.5, height * 0.5);
        var ang = map(song13.currentTime(), 0, song13.duration(), -1, -PI);
        rectMode(CENTER);
        rotate(ang);
        noStroke()
        fill(204, 14, 83);
        rect(0, 0, width * 0.003, height * 0.5);
        pop();

        push();
        translate(width * 0.5, height * 0.5);
        var ang = map(song13.currentTime(), 0, song13.duration(), -1, PI / -4);
        rectMode(CENTER);
        rotate(ang);
        noStroke()
        fill(204, 14, 83);
        rect(0, 0, width * 0.003, height * 0.5);
        pop();

        push();
        translate(width * 0.5, height * 0.5);
        var ang = map(song13.currentTime(), 0, song13.duration(), -1, 3 * PI / -4);
        rectMode(CENTER);
        rotate(ang);
        noStroke()
        fill(204, 14, 83);
        rect(0, 0, width * 0.003, height * 0.5);
        pop();
    }


    playSound(song14, 70) // 'f' == song14
    if (song14.isPlaying() == true) {
        push();
        var rad = map(song14.currentTime(), 0, song14.duration(), 1, width * 2);
        stroke(204, 14, 83)
        strokeWeight(5)
        noFill();
        ellipse(width * 0.25, height * 0.25, rad, rad);
        pop();

        push();
        var rad = map(song14.currentTime(), 0, song14.duration(), 10, width);
        stroke(204, 14, 83)
        strokeWeight(5)
        noFill();
        ellipse(width * 0.25, height * 0.25, rad, rad);
        pop();

        push();
        var rad = map(song14.currentTime(), 0, song14.duration(), 100, width);
        stroke(204, 14, 83)
        strokeWeight(5)
        noFill();
        ellipse(width * 0.25, height * 0.25, rad, rad);
        pop();
    }


    playSound(song15, 71) // 'g' == song15
    if (song15.isPlaying() == true) {
        var t = map(song15.currentTime(), 0, song15.duration() * 0.75, 0, 1)
        var grey = map(song15.currentTime(), song15.duration() * 0.75, song15.duration(), 255, 180)
        t = constrain(t, 0, 1)
        grey = constrain(grey, 180, 255)
        push()
        noFill()
        stroke(204, 14, 83)
        strokeWeight(2)
        for (var i = 0; i < 50; i++) {
            var x = lerp(xpos[i], xtarget[i], t)
            var y = lerp(ypos[i], ytarget[i], t)
            rect(x, y, random(x), random(y))
        }
        pop()
    }


    playSound(song16, 72) // 'h' == song16
    if (song16.isPlaying() == true) {
        push();
        var rad = map(song16.currentTime(), 1, song16.duration(), 0, width);
        stroke(204, 14, 83)
        strokeWeight(5)
        noFill();
        ellipse(width * 0.8, height * 0.4, rad, rad);
        pop();

        push();
        var rad = map(song16.currentTime(), 1, song16.duration(), 0, width);
        stroke(204, 14, 83)
        strokeWeight(5)
        noFill();
        ellipse(width * 0.7, height, rad, rad);
        pop();

        push();
        var rad = map(song16.currentTime(), 1, song16.duration(), 0, width);
        stroke(204, 14, 83)
        strokeWeight(5)
        noFill();
        ellipse(width * 0.3, height * 0.1, rad, rad);
        pop();

        push();
        var rad = map(song16.currentTime(), 1, song16.duration(), 0, width);
        stroke(204, 14, 83)
        strokeWeight(5)
        noFill();
        ellipse(width * 0.1, height * 0.9, rad, rad);
        pop();
    }



    playSound(song17, 74) // 'j' == song17
    if (song17.isPlaying() == true) {
        push();
        translate(width * 0.5, height * 0.5);
        var ang = map(song17.currentTime(), 0, song17.duration(), 0, 2 * PI / 2);
        rotate(ang);
        noStroke()
        fill(204, 14, 83);
        rect(width * 0.2, height * 0.2, width * 0.003, height * 0.5);
        pop();

        push();
        translate(width * 0.5, height * 0.5);
        var ang = map(song17.currentTime(), 1, song17.duration(), 0, 2 * PI);
        rotate(ang);
        noStroke()
        fill(204, 14, 83);
        rect(width * 0.1, height * 0.1, width * 0.003, height * 0.5);
        pop();

        push();
        translate(width * 0.5, height * 0.5);
        var ang = map(song17.currentTime(), 0.5, song17.duration(), 0, 2 * PI / 4);
        rotate(ang);
        noStroke()
        fill(204, 14, 83);
        rect(width * 0.3, height * 0.3, width * 0.003, height * 0.5);
        pop();
    }


    playSound(song18, 75) // 'k' == song18
    if (song18.isPlaying() == true) {
        push();
        var rad = map(song1.currentTime(), random(0, 1), song1.duration(), 10, width);
        stroke(204, 14, 83)
        strokeWeight(random(1, 10))
        noFill();
        ellipse(random(0, width), random(0, height), rad, rad);
        pop();
    }



    playSound(song19, 76) // 'l' == song19
    if (song19.isPlaying() == true) {
        push();
        var rad = map(song19.currentTime(), 0, song19.duration(), 10, width);
        stroke(204, 14, 83)
        strokeWeight(5)
        noFill();
        rectMode(CENTER)
        rect(width * 0.25, height * 0.25, rad * 2, rad);
        pop();

        push();
        var rad = map(song19.currentTime(), 0, song19.duration(), 10, width);
        stroke(204, 14, 83)
        strokeWeight(5)
        noFill();
        rectMode(CENTER)
        rect(width * 0.25, height * 0.75, rad * 2, rad);
        pop();

        push();
        var rad = map(song19.currentTime(), 0, song19.duration(), 10, width);
        stroke(204, 14, 83)
        strokeWeight(5)
        noFill();
        rectMode(CENTER)
        rect(width * 0.75, height * 0.25, rad * 2, rad);
        pop();

        push();
        var rad = map(song19.currentTime(), 0, song19.duration(), 10, width);
        stroke(204, 14, 83)
        strokeWeight(5)
        noFill();
        rectMode(CENTER)
        rect(width * 0.75, height * 0.75, rad * 2, rad);
        pop();
    }



    playSound(song20, 77) // 'm' == song20
    if (song20.isPlaying() == true) {
        song20FFT.analyze();
        rectMode(CENTER);
        var nrj1 = song8FFT.getEnergy("bass")
        push()
        stroke(204, 14, 83)
        strokeWeight(3)
        noFill()
        translate(width * 0.25, height * 0.25)
        var ang = map(song20.currentTime(), 0, song20.duration(), 0, PI * 2);
        rectMode(CENTER)
        rotate(ang)
        rect(0, 0, width * 1.25, width * 1.25)
        pop()

        push()
        stroke(204, 14, 83)
        strokeWeight(3)
        noFill()
        translate(width * 0.75, height * 0.75)
        var ang = map(song20.currentTime(), 0, song20.duration(), 0, PI * 2);
        rectMode(CENTER)
        rotate(ang)
        rect(0, 0, width * 1.25, width * 1.25)
        pop()

    }


    playSound(song21, 87) // 'w' == song21
    if (song21.isPlaying() == true) {

        push();
        var rad = map(song21.currentTime(), 0, song21.duration(), 1, width * 1.5);
        stroke(204, 14, 83)
        strokeWeight(5)
        noFill();
        ellipseMode(CENTER)
        translate(0, 0)
        ellipse(0, 0, rad, rad);
        pop();

        push();
        var rad = map(song21.currentTime(), 0.5, song21.duration(), 1, width * 1.5);
        stroke(63, 226, 71)
        strokeWeight(5)
        noFill();
        ellipseMode(CENTER)
        translate(0, 0)
        ellipse(0, 0, rad, rad);
        pop();
    }



    playSound(song22, 88) // 'x' == song22
    if (song22.isPlaying() == true) {
        push();
        var rad = map(song22.currentTime(), 0, song22.duration(), 10, width);
        noStroke()
        fill(63, 226, 71);
        rect(width * 0.5, height * 0.5, rad, 10);
        pop();

        var rad = map(song22.currentTime(), 0, song22.duration(), 1, width);
        noStroke()
        fill(63, 226, 71);
        rect(width * 0.5, height * 0.5, rad * -1, 10);
        pop();
    }


    playSound(song23, 67) // 'c' == song23
    if (song23.isPlaying() == true) {
        background(0, 250)
        push();
        var rad = map(song23.currentTime(), 0, song23.duration(), 10, width * 3);
        stroke(63, 226, 71)
        strokeWeight(100)
        noFill();
        rectMode(CENTER)
        rect(height * -0.5, height * 0.5, rad, rad);
        pop();
    }


    playSound(song24, 86) // 'v' == song24
    if (song24.isPlaying() == true) {
        push();
        var rad = map(song24.currentTime(), 0, song24.duration(), 10, width);
        stroke(63, 226, 71)
        strokeWeight(5)
        noFill();
        rectMode(CENTER)
        rect(0, height * 0.5, rad, rad);
        pop();
    }


    playSound(song25, 66) // 'b' == song25
    if (song25.isPlaying() == true) {
        push();
        var rad = map(song25.currentTime(), 0, song25.duration(), -10, width);
        stroke(63, 226, 71)
        strokeWeight(5)
        noFill();
        rectMode(CENTER)
        rect(width, height * 0.5, rad, rad);
        pop();
    }


    playSound(song26, 78) // 'n' == song26
    if (song26.isPlaying() == true) {
        push();
        var rad = map(song26.currentTime(), 0, song26.duration(), 10, width);
        stroke(63, 226, 71)
        strokeWeight(5)
        noFill();
        rectMode(CENTER)
        rect(0, height * 0.5, rad, rad);
        pop();

        push();
        var rad = map(song26.currentTime(), 0, song26.duration(), -10, width);
        stroke(63, 226, 71)
        strokeWeight(5)
        noFill();
        rectMode(CENTER)
        rect(width, height * 0.5, rad, rad);
        pop();
    }
}


//FUNCTION -------------------------------------------------------------------------------------------------------------


function playSound(sound, keyId) {
    if (keyIsDown(keyId) == true && sound.isPlaying() == false) {
        sound.play();
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function star(x, y, radius1, radius2, npoints) {
    var angle = TWO_PI / npoints;
    var halfAngle = angle / 2.0;
    beginShape();
    for (var a = 0; a < TWO_PI; a += angle) {
        var sx = x + cos(a) * radius2;
        var sy = y + sin(a) * radius2;
        vertex(sx, sy);
        sx = x + cos(a + halfAngle) * radius1;
        sy = y + sin(a + halfAngle) * radius1;
        vertex(sx, sy);
    }
    endShape(CLOSE);
}

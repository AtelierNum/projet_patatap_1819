var sound1;
var analyzer;

var sound4;
var sound4FFT;

var sound3;
var sound3FFT;

var sound5;
var sound6;
var sound7;
var sound8;

var sound9;

var sound10;
var sound11
var xposB = []
var yposB = []
var xtargetB = []
var ytargetB = []

var sound12

var sound13
var sound13FFT

var sound14
var pg
var xposA = 0
var yposA = 0
var xdirA = 5
var ydirA = 5

var sound15

var sound16
var sound16FFT

var sound17

var sound18
var pgC
var xposC = 0
var yposC = 0
var xdirC = 5
var ydirC = 5

var sound19


var sound20
var sound21
var sound22
var sound23

var sound24
var sound24FFT

var sound25
var y = 100

var sound26

var sound27
var sound27Amp


var xpos = []
var ypos = []
var xtarget = []
var ytarget = []


function playSound(sound, keyId) {
    if (keyIsDown(keyId) == true) {
        if (sound.isPlaying() == false) {
            sound.play();
        }
    }
}

function preload() {
    sound1 = loadSound("assets/mouton.mp3")
    sound2 = loadSound("assets/tracteur.mp3")
    sound3 = loadSound("assets/belement.wav")
    sound4 = loadSound("assets/bourdon.mp3")
    sound5 = loadSound("assets/canard_coin.mp3")
    sound6 = loadSound("assets/canard.mp3")
    sound7 = loadSound("assets/oiseau.mp3")
    sound8 = loadSound("assets/chien.mp3")
    sound9 = loadSound("assets/cloche.mp3")
    sound10 = loadSound("assets/cochon.wav")
    sound11 = loadSound("assets/coq_chante.wav")
    sound12 = loadSound("assets/crickets.mp3")
    sound13 = loadSound("assets/corneille.wav")
    sound14 = loadSound("assets/dindon.mp3")
    sound15 = loadSound("assets/grenouille.mp3")
    sound16 = loadSound("assets/hennissement_cheval.wav")
    sound17 = loadSound("assets/miaulement.wav")
    sound18 = loadSound("assets/moustique.mp3")
    sound19 = loadSound("assets/mouton_1.mp3")
    sound20 = loadSound("assets/nassillement.mp3")
    sound21 = loadSound("assets/canari.mp3")
    sound22 = loadSound("assets/poul_agacer.wav")
    sound23 = loadSound("assets/poule_peur.wav")
    sound24 = loadSound("assets/poussin.mp3")
    sound25 = loadSound("assets/souffle_cheval.wav")
    sound26 = loadSound("assets/souris.mp3")
    sound27 = loadSound("assets/ane.mp3")
}
//preload = permet de charger des son avec que le c   nv  s soit créer et avant que le son soit joué


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



function setup() {
    createCanvas(windowWidth, windowHeight);
    /*background(22, 134, 23);*/

    sound4FFT = new p5.FFT(0.8, 16)
    sound4FFT.setInput(sound4)

    sound3FFT = new p5.FFT(0.8, 1024)
    sound3FFT.setInput(sound3)

    sound13FFT = new p5.FFT(0.8, 1024)
    sound13FFT.setInput(sound13)

    cricket = height / 2

    sound16FFT = new p5.FFT(0.8, 16)
    sound16FFT.setInput(sound16)

    sound24FFT = new p5.FFT(0.8, 16)
    sound24FFT.setInput(sound24)

    sound27Amp = new p5.Amplitude()
    sound27Amp.setInput(sound27)

    for (var i = 0; i < 50; i++) {
        xpos.push(random(0, width))
        ypos.push(random(0, -height))
        xtarget.push(random(width))
        ytarget.push(random(height))
    }

    pixelDensity(1)
    pg = createGraphics(windowWidth, windowHeight)
    pg.pixelDensity(1)

    for (var i = 0; i < 50; i++) {
        // ajouter des éléments au dessus de notre canvas
        xposB.push(random(0, width))
        yposB.push(random(0, -height))
        // ajouter des éléments à l'intérieur de notra canvas
        xtargetB.push(random(width))
        ytargetB.push(random(height))
    }

    frameRate(30);
}

function draw() {
    /*
      if(keyIsDown(65) == true){       //on appuye sur une touche : keyIsDown et == pour tester
              if( sound1.isPlaying() == false ){   // si le son sound1 n'est pas déjà en train de jouer
                  sound1.play();   // on enclenche la lecture du son sound1
              }
      }
    */
    background(22, 134, 23)

    playSound(sound27, 32) //barre espace  ane
    if (sound27.isPlaying() == true) {
        push()
        var amp = sound27Amp.getLevel()
        var whiteLevel = map(amp, 0, 1, 255, 2)
        noStroke()
        fill(136, 72, 62)
        rect(0, 0, width, height)
        pop()
    }

    playSound(sound1, 65) //A  mouton
    if (sound1.isPlaying() == true) {
        push()
        var rad = map(sound1.currentTime(), 1, sound1.duration(), 50, width)
        fill(222, 191, 185)
        noStroke()
        ellipse(width * 0.25, height * 0.25, rad, rad)
        ellipse(width * 0.75, height * 0.75, rad, rad)
        pop()
    }

    playSound(sound2, 66) //B   tracteur
    if (sound2.isPlaying() == true) {
        push()
        translate(width * 0.25, height * 0.25)
        var ang = map(sound2.currentTime(), 0, sound2.duration(), 2, PI)
        rectMode(CORNER)
        rotate(radians(frameCount))
        fill(221, 219, 218)
        noStroke()
        rect(0, 0, width * 0.5, height * 0.1)
        pop()
    }

    playSound(sound4, 90) //Z  bourdon
    if (sound4.isPlaying() == true) {
        push()

        sound4FFT.analyze()
        rectMode(CENTER)
        var nrj1 = sound4FFT.getEnergy("bass")



        push()
        fill(252, 233, 18, nrj1)
        noStroke()
        translate(width * 0.75, height * 0.5)
        rotate(PI / 4)
        ellipse(0, 0, width * 0.3, width * 0.3)
        pop()

        push()
        fill(252, 233, 18, nrj1)
        noStroke()
        translate(width * 0.25, height * 0.5)
        rotate(PI / 4)
        ellipse(0, 0, width * 0.3, width * 0.3)
        pop()

        push()
        fill(0, 100)
        noStroke()
        translate(width * 0.5, height * 0.5)
        rotate(PI / 4)
        rect(0, 0, nrj1, nrj1)
        pop()

        pop()
    }

    playSound(sound3, 69) //E belement
    if (sound3.isPlaying() == true) {
        push()
        var waveform = sound3FFT.waveform();
        noFill();
        beginShape();
        stroke(250, 238, 176); // waveform is mint
        strokeWeight(10);
        for (var i = 0; i < waveform.length; i++) {
            var x = map(i, 0, waveform.length, 0, width);
            var y = map(waveform[i], -1, 1, 0, height);
            curveVertex(x, y);
        }
        endShape();
        pop()
    }

    playSound(sound6, 84) //T canard
    if (sound6.isPlaying() == true) {


        push()
        var nsegment = 10
        var ncurrentsegment = (map(sound6.currentTime(), 0, sound6.duration(), 0, nsegment + 1))
        for (var i = 0; i < ncurrentsegment; i++) {
            // console.log(i)
            stroke(254, 254, 221)
            strokeWeight(5)
            var angle = map(i, 0, nsegment, 0, PI)
            var x = width * 0.5 + height * 0.45 * cos(angle)
            var y = height * 0.1 + height * 0.5 * sin(angle)
            line(width * 0.5, height * 0.5, x, y)
        }
        pop()
    }

    playSound(sound7, 89) //Y  oiseau
    if (sound7.isPlaying() == true) {

        push()
        var t = map(sound7.currentTime(), 0, sound7.duration() * 0.75, 0, 1)
        var grey = map(sound7.currentTime(), sound7.duration() * 0.75, sound7.duration(), 255, 180)
        t = constrain(t, 0, 1)
        grey = constrain(grey, 180, 255)
        fill(250)
        noStroke()
        for (var i = 0; i < 50; i++) {
            var x = lerp(xpos[i], xtarget[i], t)
            var y = lerp(ypos[i], ytarget[i], t)
            ellipse(x, y, 10, 30)
        }

        pop()
    }



    playSound(sound5, 85) //U  canard-coin
    if (sound5.isPlaying() == true) {
        push()
        var rad = map(sound5.currentTime(), 1, sound5.duration(), width, 1)
        fill(245, 235, 48, 95)
        noStroke()
        ellipse(width * 0.75, 2, rad, rad)
        ellipse(width * 0.25, 2, rad, rad)
        pop()
    }

    playSound(sound8, 82) //R  chien
    if (sound8.isPlaying() == true) {
        push()
        var rad = map(sound8.currentTime(), 0, sound8.duration(), 0.5, width)

        noFill()
        stroke(239, 139, 56)
        strokeWeight(100)
        ellipse(width * 1, height * 1, 100, 100)

        noFill()
        stroke(239, 139, 56)
        strokeWeight(100)
        ellipse(width * 1, height * 1, rad, rad)
        pop()
    }

    playSound(sound9, 73) // I cloche
    if (sound9.isPlaying() == true) {
        push()
        var nsegment = 40
        var ncurrentsegment = (map(sound9.currentTime(), 0, sound9.duration(), 0, nsegment + 6))
        for (var i = 1; i < ncurrentsegment; i++) {
            fill(214, 163, 48)
            noStroke()
            var angle = map(i, 0, nsegment, 0, TWO_PI)
            var x = width * 0.5 + height * 0.5 * cos(angle)
            var y = height * 0.5 + height * 0.5 * sin(angle)
            ellipse(x, y, 30, 30)
        }
        pop()
    }

    playSound(sound10, 79) //O  cochon
    if (sound10.isPlaying() == true) {
        push()

        fill(250, 176, 245)
        noStroke()
        ellipse(width * 0.5, height * 0.5, 500, 300)

        var rad = map(sound10.currentTime(), 0, sound10.duration(), 10, 100)
        fill(0)
        noStroke()
        ellipse(width * 0.40, height * 0.5, rad, rad)
        ellipse(width * 0.60, height * 0.5, rad, rad)

        pop()
    }


    playSound(sound11, 80) //P  coq
    if (sound11.isPlaying() == true) {
        push()
        push()
        translate(width * 0, height * 0.5);
        rotate(frameCount / 5.0);
        fill(249, 131, 13)
        noStroke()
        star(0, 0, 100, 20, 2);
        pop()

        push()
        translate(width * 0.25, height * 0.5);
        rotate(frameCount / 5.0);
        fill(249, 131, 13)
        noStroke()
        star(0, 0, 100, 20, 2);
        pop()

        push()
        translate(width * 0.5, height * 0.5);
        rotate(frameCount / 5.0);
        fill(249, 131, 13)
        noStroke()
        star(0, 0, 100, 20, 2);
        pop()

        push()
        translate(width * 0.75, height * 0.5);
        rotate(frameCount / 5.0);
        fill(249, 131, 13)
        noStroke()
        star(0, 0, 100, 20, 2);
        pop()

        push()
        translate(width * 1, height * 0.5);
        rotate(frameCount / 5.0);
        fill(249, 131, 13)
        noStroke()
        star(0, 0, 100, 20, 2)
        pop()
        pop()
    }

    playSound(sound12, 81) //Q  cricket
    if (sound12.isPlaying() == true) {
        push()
        var t = map(sound12.currentTime(), 0, sound12.duration(), 1, 0)
        var grey = map(sound12.currentTime(), sound12.duration() * 0.75, sound12.duration(), 255, 180)
        t = constrain(t, 0, 1)
        grey = constrain(grey, 180, 255)
        for (var i = 0; i < 100; i++) {
            var x = lerp(xpos[i], xtarget[i], t)
            var y = lerp(ypos[i], ytarget[i], t)
            fill(136, 93, 50)
            noStroke()
            ellipse(x, y, 5, 5)
            pop()
        }
    }

    playSound(sound13, 83) //S  corneille
    if (sound13.isPlaying() == true) {
        push()
        push()
        var waveform = sound13FFT.waveform();
        noStroke();
        beginShape();
        fill(0);
        for (var i = 0; i < waveform.length; i++) {
            var y = map(i, 0, waveform.length, 0, width)
            var x = map(waveform[i], 1, -1, 0, height)
            rect(x, y, 5, 5)
        }
        endShape()
        pop()

        push()
        var waveform = sound13FFT.waveform();
        noStroke();
        beginShape();
        fill(0);
        for (var i = 0; i < waveform.length; i++) {
            var x = map(i, 0, waveform.length, 0, width);
            var y = map(waveform[i], 1, -1, 50, height);
            rect(y, x, 5, 5);
        }
        endShape();
        pop()
        pop()

    }

    playSound(sound14, 68) //D dindon
    if (sound14.isPlaying() == true) {
        push()
        xposA += xdirA
        yposA += ydirA
        if (xposA > width || xposA < 0) {
            xdirA *= -1
        }
        if (yposA > height || yposA < 0) {
            ydirA *= -1
        }

        pg.noStroke()
        pg.fill(248, 24, 24)
        pg.ellipse(xposA, yposA, 20, 20)
        image(pg, 0, 0, width, height)
        pop()
        push()

    } else {

        pg = createGraphics(windowWidth, windowHeight)
        pg.pixelDensity(1)

        xposA = random(width)
        yposA = random(height)
        xdirA = random(1, 200)
        ydirA = random(1, 200)
        pop()
    }

    playSound(sound15, 70) //F grnouille
    if (sound15.isPlaying() == true) {
        push()
        let angle = 90
        let jitter = 0.0
        if (second() % 1 == 0) {
            jitter = random(-0.5, 0.5)
        }
        angle = angle + jitter
        var c = cos(angle)
        translate(width / 2, height / 2)
        rotate(c)
        fill(105, 241, 81)
        noStroke()
        star(0, 0, 100, 200, 3)

        pop()
    }

    playSound(sound16, 71) //G  cheval
    if (sound16.isPlaying() == true) {
        push()
        sound16FFT.analyze()
        var nrj1 = sound16FFT.getEnergy("lowMid")

        push()
        fill(204, 138, 48, nrj1)
        noStroke()
        translate(width * 0.25, height * 0.5)
        rotate(PI / 2)
        ellipse(0, 0, nrj1, nrj1)
        pop()

        push()
        fill(204, 138, 48, nrj1)
        noStroke()
        translate(width * 0.75, height * 0.5)
        rotate(PI / 2)
        ellipse(0, 0, nrj1, nrj1)
        pop()

        pop()
    }

    playSound(sound17, 72) //H   chat
    if (sound17.isPlaying() == true) {
        push()
        push()
        let angle = 90
        let jitter = 0.0
        if (second() % 1 == 0) {
            jitter = random(-0.1, 0.1)
        }
        angle = angle + jitter
        var c = cos(angle)
        translate(width * 0.25, height * 0.25)
        rotate(c)
        fill(255)
        noStroke()
        star(0, 0, 100, 200, 3)
        pop()

        push()
        let angle2 = 90
        let jitter2 = 0.0
        if (second() % 1 == 0) {
            jitter = random(-0.1, 0.1)
        }
        angle = angle + jitter
        var c = cos(angle)
        translate(width * 0.25, height * 0.25)
        rotate(c)
        fill(249, 214, 244)
        noStroke()
        star(0, 0, 70, 140, 3)
        pop()

        push()
        let angle1 = 90
        let jitter1 = 0.0
        if (second() % 1 == 0) {
            jitter = random(-0.1, 0.1)
        }
        angle = angle + jitter
        var c = cos(angle)
        translate(width * 0.75, height * 0.25)
        rotate(c)
        fill(255)
        noStroke()
        star(0, 0, 100, 200, 3)
        pop()

        push()
        let angle3 = 90
        let jitter3 = 0.0
        if (second() % 1 == 0) {
            jitter = random(-0.1, 0.1)
        }
        angle = angle + jitter
        var c = cos(angle)
        translate(width * 0.75, height * 0.25)
        rotate(c)
        fill(249, 214, 244)
        noStroke()
        star(0, 0, 70, 140, 3)
        pop()
        pop()
    }

    playSound(sound18, 74) //J moustique
    if (sound18.isPlaying() == true) {
        push()
        xposC += xdirC
        yposC += ydirC
        if (xposC > width || xposC < 0) {
            xdirC *= -1
        }
        if (yposC > height || yposC < 0) {
            ydirC *= -1
        }

        pgC.noStroke()
        pgC.fill(0)
        pgC.ellipse(xposC, yposC, 5, 5)
        image(pgC, 0, 0, width, height)

    } else {

        pgC = createGraphics(windowWidth, windowHeight)
        pgC.pixelDensity(2)

        xposC = random(width)
        yposC = random(height)
        xdirC = random(1, 200)
        ydirC = random(1, 200)
        pop()
    }


    playSound(sound19, 75) //K
    if (sound19.isPlaying() == true) {
        push()
        fill(255, 247, 226);
        noStroke()
        translate(p5.Vector.fromAngle(millis() / -500, 100))
        for (var i = 0; i < 5; i++) {
            ellipse(width / 2, height / 2, 30, 40);
            rotate(radians(frameCount))
        }

        pop()
    }

    playSound(sound20, 76) //L
    if (sound20.isPlaying() == true) {
        push()
        push()
        var rad = map(sound8.currentTime(), 0, sound8.duration(), 0.5, width)
        noFill()
        stroke(255)
        strokeWeight(10)
        ellipse(width / 2, height / 2, 100, 100)
        pop()

        push()
        noFill()
        stroke(255)
        strokeWeight(10)
        ellipse(width / 2, height / 2, 150, 150)
        pop()

        push()
        noFill()
        stroke(255)
        strokeWeight(10)
        ellipse(width / 2, height / 2, 250, 250)
        pop()

        push()
        noFill()
        stroke(255)
        strokeWeight(10)
        ellipse(width / 2, height / 2, 400, 400)
        pop()

        push()
        noFill()
        stroke(255)
        strokeWeight(10)
        ellipse(width / 2, height / 2, 600, 600)
        pop()

        push()
        noFill()
        stroke(255)
        strokeWeight(10)
        ellipse(width / 2, height / 2, 850, 850)
        pop()

        push()
        noFill()
        stroke(255)
        strokeWeight(10)
        ellipse(width / 2, height / 2, 1150, 1150)
        pop()
        pop()
    }

    playSound(sound21, 77) //M
    if (sound21.isPlaying() == true) {
        push()
        fill(238, 184, 38)
        noStroke()
        for (var i = 0; i < 9; i++) {

            var y = int(i / 4) * height * 0.25 + height * 0.25
            var x = (i % 3) * width * 0.25 + width * 0.25
            translate(p5.Vector.fromAngle(millis() / 500, 100))
            rect(x, y, 50, 50);

        }
        pop()
    }

    playSound(sound22, 87) //W
    if (sound22.isPlaying() == true) {
        push()
        var nsegment = 20
        var ncurrentsegment = (map(sound22.currentTime(), 0, sound22.duration(), 0, nsegment + 6))
        for (var i = 2; i < ncurrentsegment; i++) {
            fill(255, 247, 226)
            noStroke()
            var angle = map(i, 0, nsegment, 300, TWO_PI)
            var x = width * 0.5 + height * 0.25 * cos(angle)
            var y = height * 0.5 + height * 0.25 * sin(angle)
            ellipse(x, y, 15, 15)
        }
        pop()
    }

    playSound(sound23, 88) //X
    if (sound23.isPlaying() == true) {
        push()
        var nsegment = 800
        var ncurrentsegment = (map(sound23.currentTime(), 0, sound23.duration(), 0, nsegment + 50))
        for (var i = 0; i < ncurrentsegment; i++) {
            fill(240, 227, 162)
            noStroke()
            var angle = map(i, 0, nsegment, 0, TWO_PI)
            var x = width * 0.5 + 50 * sin(angle)
            var y = height * 0.75 + 100 * cos(angle)
            ellipse(x, y, 10, 10)
        }

        pop()
    }

    playSound(sound24, 67) //C
    if (sound24.isPlaying() == true) {
        push()
        sound24FFT.analyze()
        var nrj1 = sound24FFT.getEnergy("bass")

        push()
        fill(243, 210, 45)
        noStroke()

        ellipse(width / 2,height / 2, nrj1, nrj1)
        pop()
        pop()
    }

    playSound(sound25, 86) //V
    if (sound25.isPlaying() == true) {
        push()
        var ang = map(sound25.currentTime(), 0, sound25.duration(), 0, width)
        noFill()
        stroke(189, 175, 138)
        strokeWeight(10)
        ellipseMode(CENTER);
        ellipse(width * 0, height * 0, ang, ang)
        pop()

        push()
        var ang = map(sound25.currentTime(), 0, sound25.duration(), 0, width)
        noFill()
        stroke(189, 175, 138)
        strokeWeight(10)
        ellipseMode(CENTER);
        ellipse(width * 1, height * 0, ang, ang)
        pop()

        push()
        var ang = map(sound25.currentTime(), 0, sound25.duration(), 0, width)
        noFill()
        stroke(189, 175, 138)
        strokeWeight(10)
        ellipseMode(CENTER);
        ellipse(width * 1, height * 1, ang, ang)
        pop()

        push()
        var ang = map(sound25.currentTime(), 0, sound25.duration(), 0, width)
        noFill()
        stroke(189, 175, 138)
        strokeWeight(10)
        ellipseMode(CENTER);
        ellipse(width * 0, height * 1, ang, ang)
        pop()

        push()
        var ang = map(sound25.currentTime(), 0, sound25.duration(), width, 0)
        noFill()
        stroke(189, 175, 138)
        strokeWeight(10)
        ellipseMode(CENTER);
        ellipse(width /2, height/2, ang, ang)
        pop()
        pop()
    }

    playSound(sound26, 78) //N   souris
    if (sound26.isPlaying() == true) {
        push()
        var t = map(sound26.currentTime(), 0, sound26.duration(), 1, 0)
        var ang = map(sound26.currentTime(), 0, sound26.duration(), 0, 40)
        for (var i = 0; i < 20; i++) {
            var x = lerp(xpos[i], xtarget[i], t)
            var y = lerp(ypos[i], ytarget[i], t)
            rotate(ang)
            fill(240)
            noStroke()
            ellipse(x / 3, y / 3, 30, 10)
        }
        pop()
    }
}


function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

//translate(p5.Vector.fromAngle(millis() / 500, 100))

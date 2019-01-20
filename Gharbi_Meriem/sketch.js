var sound1, sound2, sound3, sound4, sound5, sound6, sound7, sound8, sound9, sound10, sound11, sound12, sound13,
    sound14, sound15, sound16, sound17, sound18, sound19, sound20, sound21, sound22, sound23, sound24, sound25, sound26; //variable du son

//variable de analyser
var sound1Amp; //variable amplitude
var sound2Amp;
var sound3Amp;
var sound4Amp;
var sound5Amp;
var sound6FFT; //variable fast fourier transform
var sound7Amp;
var sound8Amp;
var sound9Amp;
var sound10FFT;
var sound11FFT;
var sound12Amp;
var sound13Amp;
var sound14FFT;
var sound15Amp;
var sound16FFT;
var sound17Amp;
var sound18Amp;
var sound19Amp;
var sound20Amp;
var sound21Amp;
var sound22FFT;
var sound23FFT;
var sound24FFT;
var sound25FFT;
var sound26Amp;


var calqueSpirale //calque lettre G
var prevX = null
var prevY = null
var prevX2 = null
var prevY2 = null

var pg //variable du calque lettre I et S
var xpos = 0
var ypos = 0
var xdir = 5
var ydir = 5

var xposR = [] //pour animation R
var yposR = []
var xtargetR = []
var ytargetR = []

var bonbon


function preload() { //pour charger les sons
    sound1 =  loadSound("assets/son.wav"); //A
    sound2 =  loadSound("assets/candy wraper.wav"); //B
    sound3 =  loadSound("assets/candy.wav"); //C
    sound4 =  loadSound("assets/son17.mp3"); //D
    sound5 =  loadSound("assets/candy2.wav"); //E
    sound6 =  loadSound("assets/candy3.wav"); //F
    sound7 =  loadSound("assets/candy4.wav"); //G
    sound8 =  loadSound("assets/candy5.wav"); //H
    sound9 =  loadSound("assets/lollipop.wav"); //I
    sound10 = loadSound("assets/crunch.wav"); //J
    sound11 = loadSound("assets/sweet.mp3"); //K
    sound12 = loadSound("assets/candy now.wav"); //L
    sound13 = loadSound("assets/candy1.wav"); //M
    sound14 = loadSound("assets/son13.mp3"); //N
    sound15 = loadSound("assets/son14.mp3"); //O
    sound16 = loadSound("assets/son15.mp3"); //P
    sound17 = loadSound("assets/son16.mp3"); //Q
    sound18 = loadSound("assets/son18.wav") //R
    sound19 = loadSound("assets/19.wav"); // S
    sound20 = loadSound("assets/20.wav"); //T
    sound21 = loadSound("assets/son21.wav"); //U
    sound22 = loadSound("assets/son22.wav"); //V
    sound23 = loadSound("assets/son23.wav"); //W
    sound24 = loadSound("assets/son24.mp3"); //X
    sound25 = loadSound("assets/son25.mp3"); //Y
    sound26 = loadSound('assets/son26.mp3'); //Z

}

function windowResised() { //redimentioner la fenêtre
    resizeCanvas(windowWidth, windowHeight);
}

function setup() {
    createCanvas(windowWidth, windowHeight); //créer la base de notre "toile"
    pixelDensity(1)

    sound1Amp = new p5.Amplitude(); //réglage de l'analyser de son
    sound1Amp.setInput(sound1);

    sound2Amp = new p5.Amplitude();
    sound2Amp.setInput(sound2);

    sound3Amp = new p5.Amplitude();
    sound3Amp.setInput(sound3);

    sound4Amp = new p5.Amplitude();
    sound4Amp.setInput(sound4);

    sound5Amp = new p5.Amplitude();
    sound5Amp.setInput(sound5);

    sound6FFT = new p5.FFT(0.8, 16);
    sound6FFT.setInput(sound6);

    sound7Amp = new p5.Amplitude();
    sound7Amp.setInput(sound7);

    calqueSpirale = createGraphics(width, height)
    calqueSpirale.pixelDensity(1)

    sound8Amp = new p5.Amplitude();
    sound8Amp.setInput(sound8);

    pg = createGraphics(windowWidth, windowHeight)
    pg.pixelDensity(1)

    sound9Amp = new p5.Amplitude();
    sound9Amp.setInput(sound9);

    sound10FFT = new p5.FFT(0.8, 1024);
    sound10FFT.setInput(sound10)

    sound11FFT = new p5.FFT(0.8, 16);
    sound11FFT.setInput(sound11);

    sound12Amp = new p5.Amplitude();
    sound12Amp.setInput(sound12);

    sound13Amp = new p5.Amplitude();
    sound13Amp.setInput(sound13);

    sound14FFT = new p5.FFT(0.8, 1024);
    sound14FFT.setInput(sound14);

    sound15Amp = new p5.Amplitude();
    sound15Amp.setInput(sound15);

    sound16FFT = new p5.FFT(0.8, 16);
    sound16FFT.setInput(sound16);

    sound17Amp = new p5.Amplitude();
    sound17Amp.setInput(sound17);

    sound18Amp = new p5.Amplitude();
    sound18Amp.setInput(sound18);

    for (var i = 0; i < 50; i++) {
        xposR.push(random(0, width))
        yposR.push(random(0, -height))
        xtargetR.push(random(width))
        ytargetR.push(random(height))

    }

    sound19Amp = new p5.Amplitude();
    sound19Amp.setInput(sound19);

    sound20Amp = new p5.Amplitude();
    sound20Amp.setInput(sound20);

    bonbon = new AnimateDrawing(xpos0, ypos0, 2.5);

    sound21Amp = new p5.Amplitude();
    sound21Amp.setInput(sound21);

    sound22FFT = new p5.FFT(0.8, 1024);
    sound22FFT.setInput(sound22);

    sound23FFT = new p5.FFT(0.8, 1024);
    sound23FFT.setInput(sound23);

    sound24FFT = new p5.FFT(0.8, 1024);
    sound24FFT.setInput(sound24);

    sound25FFT = new p5.FFT(0.8, 1024);
    sound25FFT.setInput(sound25);

    sound26Amp = new p5.Amplitude();
    sound26Amp.setInput(sound26);

}


function playSound(sound, keyId) { //régle pour faire marcher le son si on appuie sur une touche du clavier
    if (sound.isPlaying() == false) {
        if (keyIsDown(keyId) == true) {
            sound.play();
        }
    }
}


function draw() { //c'est dans cette fonction que "on dessine" nos formes

    background(255, 221, 243);

    playSound(sound1, 65); //A
    if (sound1.isPlaying() == true) { //tjr écrire la condition pour activer la régle du playSound

        push();
        var lvl = sound4Amp.getLevel();
        var whiteLvl = map(lvl, 0, 0.75, 0, 255);
        noStroke();
        fill(221, 108, 159);
        rect(0, 0, width, height);
        pop();
    }

    playSound(sound2, 66); //B
    if (sound2.isPlaying() == true) {

        push();
        var radius = map(sound2.currentTime(), 0, sound2.duration(), 50, width); // pour faire marcher la forme avec la musique
        fill(247, 196, 252);
        noStroke();
        rectMode(CENTER)
        rect(width * 0.5, height * 0.5, radius, radius);
        pop();
    }

    playSound(sound3, 67); //C
    if (sound3.isPlaying() == true) {

        push();
        var angle = map(sound3.currentTime(), 0, sound3.duration(), 0, PI);
        translate(width * 0.5, height * 0.5);
        rotate(angle);
        rectMode(CENTER);
        fill(40, 208, 255);
        noStroke();
        rect(0, 0, width * 0.9, height * 0.3);
        pop();
    }

    playSound(sound4, 68); //D
    if (sound4.isPlaying() == true) {

        push();
        push();
        var radius = map(sound4.currentTime(), 0, sound4.duration(), 50, width);
        fill(244, 235, 66);
        noStroke();
        ellipse(width * 0.5, height * 0.5, radius, radius);
        pop();

        push();
        var radius = map(sound4.currentTime(), 0, sound4.duration(), 50, width);
        fill(205, 237, 182);
        noStroke();
        ellipse(width * 0.3, height * 0.3, radius, radius)
        pop();

        push();
        var radius = map(sound4.currentTime(), 0, sound4.duration(), 50, width);
        fill(171, 237, 242);
        noStroke();
        ellipse(width * 0.1, height * 0.1, radius, radius)
        pop();
        pop();

    }

    playSound(sound5, 69); //E
    if (sound5.isPlaying() == true) {

        push();
        var radius = map(sound5.currentTime(), 0, sound5.duration(), 50, width);
        noFill()
        beginShape();
        for (var i = 0; i < 512; i++) {
            var xpes = map(i, 0, 512, width * 0.25, width * 0.75);
            var ypes = sin(map(i, 0, 512, 0, 3 * TWO_PI)) * height * 0.25 + height * 0.5;
            curveVertex(xpes, ypes);
            stroke(244, 66, 173);
            strokeWeight(7);
        }
        endShape();
        pop();
    }

    playSound(sound6, 70); //F - Code du Github de Beranger "Calculer l'énergie d'une bande de fréquence avec une FFT"
    if (sound6.isPlaying() == true) {

        push();
        sound6FFT.analyze();
        rectMode(CENTER);
        var nrj1 = sound6FFT.getEnergy("bass")

        push();
        noStroke();
        fill(255, 99, 169, nrj1)
        translate(width * 0.25, height * 0.5)
        rotate(PI / 4)
        rect(0, 0, width * 0.2, width * 0.2)
        pop()

        push()
        noStroke();
        fill(255, 99, 169, 50)
        translate(width * 0.5, height * 0.5)
        rotate(PI / 4)
        rect(0, 0, nrj1, nrj1)
        pop()

        push()
        noStroke();
        fill(255, 99, 169, nrj1)
        translate(width * 0.75, height * 0.5)
        rotate(PI / 4)
        rect(0, 0, width * 0.2, width * 0.2)
        pop()

        pop()
    }


    playSound(sound7, 71); //G
    if (sound7.isPlaying() == true) {

        push();
        var angle = (map(sound7.currentTime(), 0, sound7.duration(), 0, 17 * TWO_PI))
        var rad = (map(sound7.currentTime(), 0, sound7.duration() / 3, height * 0.26, 0))

        rad = constrain(rad, 0, height * 0.4)
        var rad2 = rad - 15

        var xpos1 = width * 0.5 + rad * cos(angle)
        var ypos1 = height * 0.5 + rad * sin(angle)

        var xpos2 = width * 0.5 + rad2 * cos(angle)
        var ypos2 = height * 0.5 + rad2 * sin(angle)


        if (prevX != null && prevY != null && prevX2 != null && prevY2 != null) {

            calqueSpirale.strokeWeight(20)
            calqueSpirale.stroke(255, 0, 0)
            calqueSpirale.line(xpos1, ypos1, prevX, prevY)
            calqueSpirale.strokeWeight(20)
            calqueSpirale.stroke(255, 255, 255)
            calqueSpirale.line(xpos2, ypos2, prevX2, prevY2)
        }

        prevX = xpos1
        prevY = ypos1
        prevX2 = xpos2
        prevY2 = ypos2

        image(calqueSpirale, 0, 0, width, height)
    } else {
        calqueSpirale = createGraphics(width, height)
        calqueSpirale.pixelDensity(1)
        prevX = null
        prevY = null
        prevX2 = null
        prevY2 = null
        pop();

    }

    playSound(sound8, 72); //H
    if (sound8.isPlaying() == true) {
        push();
        var nsegment = 96
        var ncurrentsegment = (map(sound8.currentTime(), 0, sound8.duration(), 0, nsegment + 1))

        for (var i = 0; i < ncurrentsegment; i++) {

            stroke(39, 122, 140);
            strokeWeight(4);
            var angle = map(i, 0, nsegment, 0, TWO_PI);
            var x = width * 0.5 + height * 0.45 * cos(angle);
            var y = height * 0.5 + height * 0.45 * sin(angle);
            line(width * 0.5, height * 0.5, x, y);
            pop();
        }
    }

    playSound(sound9, 73); //I
    if (sound9.isPlaying() == true) {

        push();
        background(frameCount % 55, 124, 218, 55, 124, 218 - frameCount % 55, 124, 218, 0)

        xpos += xdir
        ypos += ydir

        if (xpos > width || xpos < 0) {
            xdir *= -1
        }

        if (ypos > height || ypos < 0) {
            ydir *= -1
        }

        pg.fill(18, 117, 170)
        pg.noStroke()
        pg.strokeWeight(5)
        pg.ellipse(xpos, ypos, 50, 50)

        image(pg, 0, 0, width, height)
        //console.log(xpos, ypos)


    } else {

        pg = createGraphics(windowWidth, windowHeight)
        pg.pixelDensity(1)

        xpos = random(width)
        ypos = random(height)
        xdir = random(1, 7)
        ydir = random(1, 7)
        pop();
    }

    playSound(sound10, 74); //J
    if (sound10.isPlaying() == true) {

        push();

        var waveform = sound10FFT.waveform();
        noFill();
        beginShape();
        stroke(150, 255, 255);
        strokeWeight(10);


        for (var i = 0; i < waveform.length; i++) {
            var x = map(i, 0, waveform.length, 0, width);
            var y = map(waveform[i], -1, 1, 0, height);
            curveVertex(x, y);
        }
        endShape();
        pop()

    }



    playSound(sound11, 75); //K
    if (sound11.isPlaying() == true) {

        push();
        sound11FFT.analyze();
        rectMode(CENTER);
        var nrj1 = sound11FFT.getEnergy("bass");

        push();
        noStroke();
        fill(255, 99, 169, 50)
        translate(width * 0.25, height * 0.5)
        rotate(PI / 4)
        rect(0, 0, nrj1, nrj1)
        pop()

        push()
        noStroke();
        fill(255, 99, 169)
        translate(width * 0.5, height * 0.5)
        rotate(PI / 4)
        rect(0, 0, width * 0.2, width * 0.2)
        pop()

        push();
        noStroke();
        fill(255, 99, 169, 50)
        translate(width * 0.75, height * 0.5)
        rotate(PI / 4)
        rect(0, 0, nrj1, nrj1)
        pop()

        pop()
    }

    playSound(sound12, 76); //L
    if (sound12.isPlaying() == true) {

        push();
        push();
        var radius = map(sound12.currentTime(), 0, sound12.duration(), 50, width);
        fill(255, 255, 255);
        noStroke();
        ellipse(width * 0.5, height * 0.3, radius, radius);
        pop();

        push();
        var radius = map(sound12.currentTime(), 0, sound12.duration(), 50, width);
        fill(168, 67, 144);
        noStroke();
        ellipse(width * 0.5, height * 0.5, radius, radius)
        pop();

        push();
        var radius = map(sound12.currentTime(), 0, sound12.duration(), 50, width);
        fill(255, 255, 255);
        noStroke();
        ellipse(width * 0.5, height * 0.7, radius, radius)
        pop();

        push();
        var radius = map(sound12.currentTime(), 0, sound12.duration(), 50, width);
        fill(168, 67, 144);
        noStroke();
        ellipse(width * 0.5, height * 0.9, radius, radius)
        pop();

    }

    playSound(sound13, 77); //M
    if (sound13.isPlaying() == true) {
        push();
        push();
        var radius = map(sound13.currentTime(), 0, sound13.duration(), 300, 900);
        fill(255, 109, 225);
        noStroke();
        rectMode(CENTER)
        rect(width * 0.5, height * 0.5, radius, radius);
        pop();

        push();
        var radius = map(sound13.currentTime(), 0, sound13.duration(), 200, 900);
        fill(101, 188, 242);
        noStroke();
        rectMode(CENTER)
        rect(width * 0.5, height * 0.5, radius, radius);
        pop();

        push();
        var radius = map(sound13.currentTime(), 0, sound13.duration(), 100, width);
        fill(255, 235, 122);
        noStroke();
        ellipse(width * 0.5, height * 0.5, radius, radius)
        pop();

        push();
        var radius = map(sound13.currentTime(), 0, sound13.duration(), 800, 100);
        fill(252, 147, 118);
        noStroke();
        ellipse(width * 0.5, height * 0.5, radius, radius)
        pop();
        pop();
    }

    playSound(sound14, 78); //N
    if (sound14.isPlaying() == true) {

        push();
        push();
        sound14FFT.analyze();
        rectMode(CENTER);
        var nrj1 = sound14FFT.getEnergy("bass");
        translate(width * 0.06, -100)
        push();
        noStroke();
        fill(255, 99, 169)
        translate(width * 0.25, height * 0.5)
        translate(p5.Vector.fromAngle(millis() / 500, 100)); //code des références P5JS
        rotate(PI / 4)
        rect(0, 100, nrj1, nrj1)
        pop();

        push();
        noStroke();
        fill(168, 111, 154)
        translate(width * 0.5, height * 0.5)
        translate(p5.Vector.fromAngle(millis() / 500, 100));
        rotate(PI / 4)
        ellipse(0, 100, nrj1, nrj1)
        pop();


        push();
        noStroke();
        fill(255, 99, 169)
        translate(width * 0.75, height * 0.5)
        translate(p5.Vector.fromAngle(millis() / 500, 100));
        rotate(PI / 4)
        rect(0, 100, nrj1, nrj1)
        pop();
        pop();

    }

    playSound(sound15, 79); //O
    if (sound15.isPlaying() == true) {

        push();
        push();
        var radius = map(sound15.currentTime(), 0, sound15.duration(), 130, 800);
        fill(255, 235, 122);
        noStroke();
        ellipse(width * 0.5, height * 0.5, radius, radius)
        pop;

        push();
        var radius = map(sound15.currentTime(), 0, sound15.duration(), 110, 700);
        fill(101, 188, 242);
        noStroke();
        ellipse(width * 0.5, height * 0.5, radius, radius)
        pop();

        push();
        var radius = map(sound15.currentTime(), 0, sound15.duration(), 90, 600);
        fill(255, 235, 122);
        noStroke();
        ellipse(width * 0.5, height * 0.5, radius, radius)
        pop;

        push();
        var radius = map(sound15.currentTime(), 0, sound15.duration(), 70, 500);
        fill(101, 188, 242);
        noStroke();
        ellipse(width * 0.5, height * 0.5, radius, radius)
        pop();

        push();
        var radius = map(sound15.currentTime(), 0, sound15.duration(), 50, 400);
        fill(255, 235, 122);
        noStroke();
        ellipse(width * 0.5, height * 0.5, radius, radius)
        pop;

        push();
        var radius = map(sound15.currentTime(), 0, sound15.duration(), 300, 40);
        fill(101, 188, 242);
        noStroke();
        ellipse(width * 0.5, height * 0.5, radius, radius)
        pop();

        push();
        var radius = map(sound15.currentTime(), 0, sound15.duration(), 10, 120);
        fill(255, 235, 122);
        noStroke();
        ellipse(width * 0.5, height * 0.5, radius, radius)
        pop;
        pop();


    }


    playSound(sound16, 80); //P
    if (sound16.isPlaying() == true) {

        push();
        var waveform = sound16FFT.waveform();
        noFill();
        beginShape();
        stroke(255, 0, 0);
        strokeWeight(10);


        for (var i = 0; i < waveform.length; i++) {
            var x = map(i, 0, waveform.length, 100, width);
            var y = map(waveform[i], -1, 1, 10, height);
            curveVertex(x, y);
        }
        endShape();
        pop();

    }


    playSound(sound17, 81); //Q
    if (sound17.isPlaying() == true) {

        push();
        push();
        var radius = map(sound17.currentTime(), 0, sound17.duration(), 130, width);
        fill(200, 232, 242);
        noStroke();
        rect(width * 0, height * 0, radius, radius)
        pop();

        push();
        var radius = map(sound17.currentTime(), 0, sound17.duration(), 130, width);
        fill(200, 200, 242);
        noStroke();
        rect(width * 0, height * 0.1, radius, radius)
        pop();

        push();
        var radius = map(sound17.currentTime(), 0, sound17.duration(), 130, width);
        fill(200, 232, 242);
        noStroke();
        rect(width * 0, height * 0.2, radius, radius)
        pop();

        push();
        var radius = map(sound17.currentTime(), 0, sound17.duration(), 130, width);
        fill(200, 200, 242);
        noStroke();
        rect(width * 0, height * 0.3, radius, radius)
        pop();

        push();
        var radius = map(sound17.currentTime(), 0, sound17.duration(), 130, width);
        fill(200, 232, 242);
        noStroke();
        rect(width * 0, height * 0.4, radius, radius)
        pop();

        push();
        var radius = map(sound17.currentTime(), 0, sound17.duration(), 130, width);
        fill(200, 200, 242);
        noStroke();
        rect(width * 0, height * 0.5, radius, radius)
        pop();

        push();
        var radius = map(sound17.currentTime(), 0, sound17.duration(), 130, width);
        fill(200, 232, 242);
        noStroke();
        rect(width * 0, height * 0.6, radius, radius)
        pop();

        push();
        var radius = map(sound17.currentTime(), 0, sound17.duration(), 130, width);
        fill(200, 200, 242);
        noStroke();
        rect(width * 0, height * 0.7, radius, radius)
        pop();

        push();
        var radius = map(sound17.currentTime(), 0, sound17.duration(), 130, width);
        fill(200, 232, 242);
        noStroke();
        rect(width * 0, height * 0.8, radius, radius)
        pop();

        push();
        var radius = map(sound17.currentTime(), 0, sound17.duration(), 130, width);
        fill(200, 200, 242);
        noStroke();
        rect(width * 0, height * 0.9, radius, radius)
        pop();

        push();
        var radius = map(sound17.currentTime(), 0, sound17.duration(), 130, width);
        fill(200, 232, 242);
        noStroke();
        rect(width * 0, height * 1, radius, radius)
        pop();
        pop();

    }


    playSound(sound18, 82); //R
    if (sound18.isPlaying() == true) {

        // console.log(xpos2)
        push();
        var t = map(sound18.currentTime(), 0, sound18.duration() * 0.75, 0, 1)
        var grey = map(sound18.currentTime(), sound18.duration() * 0.75, sound18.duration(), 255, 180)

        t = constrain(t, 0, 1)
        grey = constrain(grey, 180, 255)
        fill(grey)
        noStroke();
        for (var i = 0; i < 50; i++) {
            var x = lerp(xposR[i], xtargetR[i], t)
            var y = lerp(yposR[i], ytargetR[i], t)
            ellipse(x, y, 50, 50)
        }
        pop()
    }


    playSound(sound19, 83); //S
    if (sound19.isPlaying() == true) {

        push();
        background(frameCount % 55, 124, 218, 55, 124, 218 - frameCount % 55, 124, 218, 0)

        xpos += xdir
        ypos += ydir

        if (xpos > width || xpos < 0) {
            xdir *= -1
        }

        if (ypos > height || ypos < 0) {
            ydir *= -1
        }

        pg.fill(255, 102, 209)
        pg.noStroke()
        pg.strokeWeight(3)
        pg.ellipse(xpos, ypos, 50, 50)

        image(pg, 0, 0, width, height)

        pop();
    }

    playSound(sound20, 84); //T
    if (sound20.isPlaying() == true) {

        push();
        bonbon.animateDrawing(color(66, 134, 244), 10)


    } else {

        bonbon.resetDrawing()
        pop();
    }

    playSound(sound21, 85); //U
    if (sound21.isPlaying() == true) {
        push();
        push();
        var radius = map(sound21.currentTime(), 0, sound21.duration(), 50, 70);
        noFill();
        stroke(98, 157, 196);
        strokeWeight(3)
        ellipse(width * 0.5, height * 0.5, radius, radius)
        pop();

        push();
        var radius = map(sound21.currentTime(), 0, sound21.duration(), 70, 50);
        noFill();
        stroke(98, 157, 196);
        strokeWeight(3)
        ellipse(width * 0.5, height * 0.5, radius, radius)
        pop();

        push();
        var radius = map(sound21.currentTime(), 0, sound21.duration(), 300, 200);
        noFill();
        stroke(252, 0, 130);
        strokeWeight(3)
        ellipse(width * 0.5, height * 0.5, radius, radius)
        pop();

        push();
        var radius = map(sound21.currentTime(), 0, sound21.duration(), 200, 300);
        noFill();
        stroke(252, 0, 130);
        strokeWeight(3)
        ellipse(width * 0.5, height * 0.5, radius, radius)
        pop();

        push();
        var radius = map(sound21.currentTime(), 0, sound21.duration(), 200, 700);
        noFill();
        stroke(252, 0, 130);
        strokeWeight(7)
        ellipse(width * 0.5, height * 0.5, radius, radius)
        pop();

        push();
        var radius = map(sound21.currentTime(), 0, sound21.duration(), 700, 200);
        noFill();
        stroke(252, 0, 130);
        strokeWeight(3)
        ellipse(width * 0.5, height * 0.5, radius, radius)
        pop();

        push();
        var radius = map(sound21.currentTime(), 0, sound21.duration(), 100, 800);
        noFill();
        stroke(98, 157, 196);
        strokeWeight(3)
        ellipse(width * 0.5, height * 0.5, radius, radius)
        pop();

        push();
        var radius = map(sound21.currentTime(), 0, sound21.duration(), 800, 100);
        noFill();
        stroke(98, 157, 196);
        strokeWeight(7)
        ellipse(width * 0.5, height * 0.5, radius, radius)
        pop();

        push();
        var radius = map(sound21.currentTime(), 0, sound21.duration(), 300, 800);
        noFill();
        stroke(138, 94, 196);
        strokeWeight(5)
        ellipse(width * 0.5, height * 0.5, radius, radius)
        pop();

        push();
        var radius = map(sound21.currentTime(), 0, sound21.duration(), 800, 300);
        noFill();
        stroke(138, 94, 196);
        strokeWeight(5)
        ellipse(width * 0.5, height * 0.5, radius, radius)
        pop();
        pop();
    }

    playSound(sound22, 86); //V
    if (sound22.isPlaying() == true) {

        push();
        sound22FFT.analyze();
        rectMode(CENTER);
        var nrj1 = sound22FFT.getEnergy("bass");

        push();
        noStroke();
        fill(242, 96, 184)
        translate(width * 0.25, height * 0.3)
        ellipse(0, 0, nrj1, nrj1)
        pop()

        push();
        noStroke();
        fill(242, 96, 184)
        translate(width * 0.25, height * 0.7)
        ellipse(0, 0, nrj1, nrj1)
        pop()

        push()
        noStroke();
        fill(176, 229, 220)
        translate(width * 0.1, height * 0.5)
        rect(0, 0, nrj1, nrj1)
        pop()

        push()
        noStroke();
        fill(176, 229, 220)
        translate(width * 0.5, height * 0.5)
        rect(0, 0, nrj1, nrj1)
        pop()

        push();
        noStroke();
        fill(242, 96, 184)
        translate(width * 0.75, height * 0.7)
        ellipse(0, 0, nrj1, nrj1)
        pop()


        push();
        noStroke();
        fill(242, 96, 184)
        translate(width * 0.75, height * 0.3)
        ellipse(0, 0, nrj1, nrj1)
        pop()

        push()
        noStroke();
        fill(176, 229, 220)
        translate(width * 0.9, height * 0.5)
        rect(0, 0, nrj1, nrj1)
        pop()

        pop();
    }


    playSound(sound23, 87); //W
    if (sound23.isPlaying() == true) {
        push();
        push();
        var radius = map(sound23.currentTime(), 0, sound23.duration(), 130, width);
        noFill();
        stroke(244, 194, 66);
        strokeWeight(3)
        ellipse(width * 0.2, height * 0.5, radius, radius)
        pop();

        push();
        var radius = map(sound23.currentTime(), 0, sound23.duration(), 130, width);
        noFill();
        stroke(50, 255, 153);
        strokeWeight(3)
        ellipse(width * 0.4, height * 0.5, radius, radius)
        pop();

        push();
        var radius = map(sound23.currentTime(), 0, sound23.duration(), 130, width);
        noFill();
        stroke(56, 69, 255);
        strokeWeight(3)
        ellipse(width * 0.6, height * 0.5, radius, radius)
        pop();

        push();
        var radius = map(sound23.currentTime(), 0, sound23.duration(), 130, width);
        noFill();
        stroke(181, 119, 229);
        strokeWeight(3)
        ellipse(width * 0.8, height * 0.5, radius, radius)
        pop();

        push();
        sound23FFT.analyze();
        rectMode(CENTER);
        var nrj1 = sound23FFT.getEnergy("bass")
        noStroke();
        fill(255, 99, 169, 50)
        translate(width * 0.5, height * 0.5)
        rotate(PI / 4)
        rect(0, 0, nrj1, nrj1)
        pop();
        pop();

    }

    playSound(sound24, 88); //X
    if (sound24.isPlaying() == true) {
        push();

        sound24FFT.analyze();
        var nrj1 = sound24FFT.getEnergy("bass")

        push();
        var radius = map(sound24.currentTime(), 0, sound24.duration(), 130, 100);
        fill(255, 255, 255);
        noStroke();
        ellipse(width * 0.1, height * 0.3, nrj1, nrj1)
        pop();

        push();
        var radius = map(sound24.currentTime(), 0, sound24.duration(), 150, 100);
        fill(244, 66, 155);
        noStroke();
        ellipse(width * 0.3, height * 0.3, radius, radius)
        pop();

        push();
        var radius = map(sound24.currentTime(), 0, sound24.duration(), 130, 100);
        fill(255, 255, 255);
        noStroke();
        ellipse(width * 0.5, height * 0.3, nrj1, nrj1)
        pop();

        push();
        var radius = map(sound24.currentTime(), 0, sound24.duration(), 150, 100);
        fill(244, 66, 155);
        noStroke();
        ellipse(width * 0.7, height * 0.3, radius, radius)
        pop();

        push();
        var radius = map(sound24.currentTime(), 0, sound24.duration(), 130, 100);
        fill(255, 255, 255);
        noStroke();
        ellipse(width * 0.9, height * 0.3, nrj1, nrj1)
        pop();

        push();
        var radius = map(sound24.currentTime(), 0, sound24.duration(), 150, 100);
        fill(244, 66, 155);
        noStroke();
        ellipse(width * 0.1, height * 0.7, radius, radius)
        pop();

        push();
        var radius = map(sound24.currentTime(), 0, sound24.duration(), 130, 100);
        fill(255, 255, 255);
        noStroke();
        ellipse(width * 0.3, height * 0.7, nrj1, nrj1)
        pop();

        push();
        var radius = map(sound24.currentTime(), 0, sound24.duration(), 150, 100);
        fill(244, 66, 155);
        noStroke();
        ellipse(width * 0.5, height * 0.7, radius, radius)
        pop();

        push();
        var radius = map(sound24.currentTime(), 0, sound24.duration(), 130, 100);
        fill(255, 255, 255);
        noStroke();
        ellipse(width * 0.7, height * 0.7, nrj1, nrj1)
        pop();

        push();
        var radius = map(sound24.currentTime(), 0, sound24.duration(), 150, 100);
        fill(244, 66, 155);
        noStroke();
        ellipse(width * 0.9, height * 0.7, radius, radius)
        pop();

        pop();

    }

    playSound(sound25, 89); //Y
    if (sound25.isPlaying() == true) {
        push();

        sound25FFT.analyze();
        var nrj1 = sound25FFT.getEnergy("bass")
        rectMode(CENTER)

        push();
        var radius = map(sound25.currentTime(), 0, sound25.duration(), 400, 600);
        fill(255);
        noStroke();
        ellipse(width * 0.5, height * 0.5, radius, radius)
        pop();

        push();
        noStroke();
        fill(255, 221, 243)
        translate(width * 0.5, height * 0.5)
        rotate(PI / 4)
        rect(0, 0, nrj1, nrj1)
        pop()

        pop();

    }

    playSound(sound26, 90); //Z
    if (sound26.isPlaying() == true) {
        push();
        push();
        var radius = map(sound26.currentTime(), 0, sound26.duration(), 100, 500);
        noFill();
        stroke(255, 135, 205);
        strokeWeight(3)
        ellipse(width * 0.5, height * 0.3, radius, radius)
        pop();

        push();
        var radius = map(sound26.currentTime(), 0, sound26.duration(), 100, 500);
        noFill();
        stroke(255, 2, 82);
        strokeWeight(3)
        ellipse(width * 0.5, height * 0.5, radius, radius)
        pop();

        push();
        var radius = map(sound26.currentTime(), 0, sound26.duration(), 100, 500);
        noFill();
        stroke(255, 135, 172);
        strokeWeight(3)
        ellipse(width * 0.4, height * 0.4, radius, radius)
        pop();

        push();
        var radius = map(sound26.currentTime(), 0, sound26.duration(), 100, 500);
        noFill();
        stroke(255, 135, 205);
        strokeWeight(3)
        ellipse(width * 0.4, height * 0.6, radius, radius)
        pop();

        push();
        var radius = map(sound26.currentTime(), 0, sound26.duration(), 100, 500);
        noFill();
        stroke(255, 135, 172);
        strokeWeight(3)
        ellipse(width * 0.5, height * 0.7, radius, radius)
        pop();

        push();
        var radius = map(sound26.currentTime(), 0, sound26.duration(), 100, 500);
        noFill();
        stroke(255, 135, 205);
        strokeWeight(3)
        ellipse(width * 0.6, height * 0.6, radius, radius)
        pop();

        push();
        var radius = map(sound26.currentTime(), 0, sound26.duration(), 100, 500);
        noFill();
        stroke(255, 135, 172);
        strokeWeight(3)
        ellipse(width * 0.6, height * 0.4, radius, radius)
        pop();
        pop();
    }
}

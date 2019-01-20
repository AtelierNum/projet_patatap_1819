var mySound;
var mySound2;
var mySound3;
var mySound4;
var mySound5;
var mySound6;
var mySound7;
var mySound8;
var mySound9;
var mySound10;
var mySound11;
var mySound12;
var mySound13;
var mySound14;
var mySound15;
var mySound16;
var mySound17;
var mySound18;
var mySound19;
var mySound20;
var mySound21;
var mySound22;
var mySound23;
var mySound24;
var mySound25;
var mySound26;
var mySound27;
var xpos = [] //Les 4 variables qui suivent permettent de faire varier la position d'éléments
var ypos = [] //
var xtarget = [] //
var ytarget = [] //
var mySound14
var mySound14FFT
var mySound
var mySoundAmp
var mySound17
var mySound17FFT
var mySound11amp
var mySound8Amp
var mySound20FFT

function preload() {
    mySound =   loadSound('assets/fincancan.mp3');
    mySound2 =  loadSound('assets/symphonie1ernote.mp3');
    mySound3 =  loadSound('assets/symphonie2ernote.mp3');
    mySound4 =  loadSound('assets/symphonie3emernote.mp3');
    mySound5 =  loadSound('assets/dimitridebut1.mp3');
    mySound6 =  loadSound('assets/dimitridebut2.mp3');
    mySound7 =  loadSound('assets/debut1smetana.mp3');
    mySound8 =  loadSound('assets/debut2smetana.mp3');
    mySound9 =  loadSound('assets/debut3smetana.mp3');
    mySound10 = loadSound('assets/elisepianon11.mp3');
    mySound11 = loadSound('assets/debutsymphonie9.mp3');
    mySound12 = loadSound('assets/clairedelune.mp3');
    mySound13 = loadSound('assets/clairedelunedebut2.mp3');
    mySound14 = loadSound('assets/fin2smetana.mp3');
    mySound15 = loadSound('assets/cancan-long.mp3');
    mySound16 = loadSound('assets/pachebellsongenfond.mp3');
    mySound17 = loadSound('assets/toutdebutprelude.mp3');
    mySound18 = loadSound('assets/elisepianon22.mp3');
    mySound19 = loadSound('assets/debutswanlake.mp3');
    mySound20 = loadSound('assets/themeprincipalevalkiry.mp3');
    mySound21 = loadSound('assets/four-seasons-vivaldi.mp3');
    mySound22 = loadSound('assets/stsaiens.mp3');
    mySound23 = loadSound('assets/stsaiensmilieu.mp3');
    mySound24 = loadSound('assets/stsaiens1.mp3');
    mySound25 = loadSound('assets/calmer.mp3');
    mySound26 = loadSound('assets/vivaldi.mp3');
}

function playSound(sound, keyId) {
    if (keyIsDown(keyId) == true && sound.isPlaying() == false) {
        sound.play();
    }
}


var angle = 0.0;

function setup() {
    createCanvas(windowWidth, windowHeight);
    ////background(0);
    analyzer = new p5.Amplitude();
    analyzer.setInput(mySound2);
    analyzer.toggleNormalize();
    for (var i = 0; i < 50; i++) {
        xpos.push(random(0, width))
        ypos.push(random(0, -height))
        mySound4.setVolume(10);
        xtarget.push(random(width))
        ytarget.push(random(height))
    }
    analyze = new p5.Amplitude();
    analyze.setInput(mySound5);
    analyze.toggleNormalize();
    createCanvas(windowWidth, windowHeight);
    background(0);
    mySound14FFT = new p5.FFT(0.8, 1024);
    mySound14FFT.setInput(mySound14);
    mySound14.setVolume(8);
    mySound24.setVolume(5);
    mySoundAmp = new p5.Amplitude()
    mySoundAmp.setInput(mySound)
    mySound15Amp = new p5.Amplitude()
    mySound15Amp.setInput(mySound15)
    mySound11Amp = new p5.Amplitude()
    mySound11Amp.setInput(mySound11)
    mySound17FFT = new p5.FFT(0.8, 16)
    mySound17FFT.setInput(mySound17)
    mySound11Amp = new p5.Amplitude()
    mySound11Amp.setInput(mySound11)
    mySound11Amp.toggleNormalize()
    mySound7.setVolume(10);
    mySound8.setVolume(20);
    mySound9.setVolume(20);
    analyz = new p5.Amplitude();
    analyz.setInput(mySound25);
    analyzz = new p5.Amplitude();
    analyzz.setInput(mySound7);
    analyzz.toggleNormalize();
    mySound8Amp = new p5.Amplitude()
    mySound8Amp.setInput(mySound8)
    mySound20FFT = new p5.FFT(0.8, 1024)
    mySound20FFT.setInput(mySound20)
    mySound22FFT = new p5.FFT(0.8, 1024);
    mySound22FFT.setInput(mySound22);
    analyzerrr = new p5.Amplitude();
    analyzerrr.setInput(mySound24);

}

function draw() {
    background(0)
    playSound(mySound, 66) // lettre B
    if (mySound.isPlaying() == true) {
        push()
        //beginShape()
        var amp = mySoundAmp.getLevel()
        noStroke()
        if (amp < 0.15) {

            fill(0)
        } else {
            fill(255)
        }
        rect(0, 0, width, height)
        //  endShape()
        pop()
    }


    playSound(mySound19, 89) // lettre Y
    if (mySound19.isPlaying() == true) {
        push()
        var nsegment = 96 // il y aura 96 segment appeler mit dans une variable nsegment
        var ncurrentsegment = (map(mySound19.currentTime(), 0, mySound19.duration(), 0, nsegment + 1))
        for (var i = 0; i < ncurrentsegment; i++) { // tant que nsegment n'est pas atteint, on continu d'en faire apparaitre

            stroke(255); // je choisit la couleur blanche pour le contour
            strokeWeight(height * 0.0043) // le grosseur du contour ce fait de façon responsive
            var angles = map(i, 0, nsegment, 0, TWO_PI); // je créer une variable pour definir l'angle de chque forme
            var x = width * 0.5 + height * 0.45 * cos(angles);
            var y = height * 0.5 + height * 0.45 * sin(angles);
            line(width * 0.5, height * 0.5, x, y); // chaque ligne commencera au milieu et va varier selon x et y définit au dessus
        }
        pop() // l'animation se termine
    }

    playSound(mySound2, 65) // lettre A
    if (mySound2.isPlaying() == true) {
        push()
        var rms = analyzer.getLevel(); // cette variable va permettre de prendre en compte le volume du son
        var ellipseSize = map(rms, 0, 1, height * 0.054, height * 0.648); // cette variable change la valeur du volume du son (rms) allant de 0 à 1 en une valeur lié à la longeur
        fill(255);
        ellipse(width * 0.25, height * 0.5, ellipseSize, ellipseSize); // mon ellipse va donc varier de hauteur et de largeur de façon responsive
        pop()
    }
    playSound(mySound3, 90) // lettre Z
    if (mySound3.isPlaying() == true) {
        push()
        var radius = map(mySound3.currentTime(), 0, mySound3.duration(), height * 0.0108, height * 0.648) // je transforme la durée de mon son allant de 0 à 1 à une longeur comprit entre telle et telle valeur
        fill(255)
        ellipse(width * 0.5, height * 0.5, radius, radius)
        pop()

    }
    playSound(mySound4, 69) //lettre E
    if (mySound4.isPlaying() == true) {
        push()
        var t = map(mySound4.currentTime(), 0, mySound4.duration() * 0.75, 0, 1)
        var grey = map(mySound4.currentTime(), mySound4.duration() * 0.75, mySound4.duration(), 255, 0)
        t = constrain(t, 0, 1)
        grey = constrain(grey, 0, 255)
        fill(grey)
        for (var i = 0; i < 50; i++) { // tant que i n'a pas atteint 50 la boucle continu
            var x = lerp(xpos[i], xtarget[i], t) // x permets de faire varier une coordonnée de l'élément créer
            var y = lerp(ypos[i], ytarget[i], t)
            ellipse(x, y, height * 0.054, height * 0.054) // des ellipses dont la position change se créées
        }
        pop()

    }
    playSound(mySound5, 82) // lettre R
    if (mySound5.isPlaying() == true) {
        push()
        translate(width * 0.5, height * 0.5) // l'animation se positionne au centre
        fill(255)
        rotate(angle) // le rectangle va turner selon un angle
        rect(-15, -15, height * 0.3243, height * 0.3243);
        angle += 0.1;
        pop()
    }
    playSound(mySound6, 84) // lettre T
    if (mySound6.isPlaying() == true) {
        push()
        var rms = analyzer.getLevel();
        var rectangle = map(rms, 0, 1, 50, 300);
        translate(width * 0.5, height * 0.5)
        fill(255)
        rotate(angle)
        rect(-15, -15, height * 0.3243, height * 0.3243);
        angle += 0.1;
        pop()
    }
    playSound(mySound14, 78) // lettre N
    if (mySound14.isPlaying() == true) {
        push()
        var waveform = mySound14FFT.waveform();
        noFill();
        beginShape();
        stroke(255);
        strokeWeight(height * 0.0054);
        for (var i = 0; i < waveform.length; i++) {
            var x = map(i, 0, waveform.length, 0, width);
            var y = map(waveform[i], -1, 1, 0, height);
            curveVertex(x, y);
        }
        endShape();
        pop()
    }

    playSound(mySound23, 67) // lettre C
    if (mySound23.isPlaying() == true) {
        push()
        var rotation = map(mySound23.currentTime(), 0, mySound23.duration() / 12, 0, PI)

        rectMode(CENTER)
        translate(width * 0.5, height * 0.5)
        rotate(rotation)

        fill(255)
        rect(height * 0.2162, height * 0.3243, width * 0.5, width * 0.05)
        pop()
    }

    playSound(mySound8, 73) // lettre I
    if (mySound8.isPlaying() == true) {
        push()
        var amp = mySound8Amp.getLevel()
        var rot = map(amp, 0, 1, 0, 3 + PI)
        rectMode(CENTER)
        translate(0.85 * width, 0.5 * height)
        rotate(rot)
        fill(120)
        rect(0, 0, height * 0.1081, height * 0.1081)
        pop()

    }

    //pop();


    playSound(mySound9, 79) // lettre O
    if (mySound9.isPlaying() == true) {
        push()
        var time = map(mySound9.currentTime(), 0, mySound9.duration(), 0, 1)
        if (time < 0.25) {


        } else if (time > 0.25 && time < 0.5) {

        }
        var b = map(time, 0, 1, 0, 255)
        fill(b)
        ellipse(0.85 * width, 0.2 * height, 0.2162 * height, 0.2162 * height);
        fill(255)
        push();
        fill(204, 153, 0);
        pop();
    }
    playSound(mySound15, 80) // lettre P
    if (mySound15.isPlaying() == true) {
        push()
        var amp = mySound15Amp.getLevel()
        var rot = map(amp, 0, 1, 0, 3 + PI)
        rectMode(CENTER)
        translate(0.5 * width, 0.5 * height)
        rotate(rot)
        rect(0, 0, height * 0.648, height * 0.1081)
        pop()
        push()
        rectMode(CENTER)
        translate(0.25 * width, 0.25 * height)
        rotate(rot)
        rect(0, 0, height * 0.648, height * 0.1081)
        pop()
        push()
        rectMode(CENTER)
        translate(0.75 * width, 0.75 * height)
        rotate(rot)
        rect(0, 0, height * 0.648, height * 0.1081)
        pop()

    }
    playSound(mySound17, 81); //lettre Q
    if (mySound17.isPlaying() == true) {
        push()
        mySound17FFT.analyze();
        rectMode(CENTER);
        var nrj1 = mySound17FFT.getEnergy("bass")

        push()
        fill(255, nrj1)
        translate(width * 0.25, height * 0.5)
        rotate(PI / 4)
        rect(0, 0, height * 0.4108, height * 0.4108)
        pop()

        push()
        fill(255, 50)
        translate(width * 0.5, height * 0.5)
        rotate(PI / 4)
        rect(0, 0, nrj1, nrj1)
        pop()

        push()
        fill(255, nrj1)
        translate(width * 0.75, height * 0.5)
        rotate(PI / 4)
        rect(0, 0, height * 0.4108, height * 0.4108)
        pop()

        pop()
    }

    playSound(mySound13, 83) // lettre S
    if (mySound13.isPlaying() == true) {
        push()
        rotate(frameCount / -80.0);
        noStroke();
        for (let i = 0; i < 20; i++) {
            ellipse(width * 0.5, height * 0.5, 0.2162 * height, 0.2162 * height);
            rotate(PI / 10);
        }

        pop()
    }



    playSound(mySound11, 70) // lettre F
    if (mySound11.isPlaying() == true) {
        push()

        var amp = mySound11Amp.getLevel()
        fill(map(amp, 0, 0.5, 0, 255))
        translate(0 * width, 0.12 * height)
        polygon(0, 0, 0.2 * height, 3)
        translate(0 * width, 0.24 * height)
        polygon(0, 0, 0.2 * height, 3)
        translate(0 * width, 0.24 * height)
        polygon(0, 0, 0.2 * height, 3)
        translate(0 * width, 0.24 * height)
        polygon(0, 0, 0.2 * height, 3)

        pop()

    }

    playSound(mySound16, 72) // lettre H
    if (mySound16.isPlaying() == true) {
        push()
        var t = map(mySound16.currentTime(), 0, mySound16.duration() * 0.75, 0, 1)
        var grey = map(mySound16.currentTime(), mySound16.duration() * 0.75, mySound16.duration(), 255, 0)
        t = constrain(t, 0, 1)
        grey = constrain(grey, 0, 255)
        fill(grey)
        translate(width * 0.75, height * 0.75);
        rotate(frameCount / -100.0);
        polygon(0, 0, height * 0.0756, 7);
        pop();
        var timer = map(mySound16.currentTime(), 0, mySound16.duration(), 0, 1)
        if (timer < 0) {
            push()
            translate(width * 0.75, height * 0.75);
            rotate(frameCount / -100.0);
            fill(grey)
            polygon(0, 0, height * 0.0756, 7);
            pop();

        }

        if (timer > 0.0332) {
            push()
            translate(width * 0.25, height * 0.75);
            rotate(frameCount / -100.0);
            fill(grey)
            polygon(0, 0, height * 0.0756, 7);
            pop();
        }
        if (timer > 0.04998) {
            push()
            translate(width * 0.25, height * 0.23);
            rotate(frameCount / -100.0);
            fill(grey)
            polygon(0, 0, height * 0.0756, 7);
            pop();
        }


        if (timer > 0.0833) {
            push()
            translate(width * 0.75, height * 0.23);
            rotate(frameCount / -100.0);
            fill(grey)
            polygon(0, 0, height * 0.0756, 7);
            pop();
        }
        if (timer > 0.10829) {
            push()
            translate(width * 0.5, height * 0.5);
            rotate(frameCount / -100.0);
            fill(grey)
            polygon(0, 0, height * 0.0756, 7);
            pop();
        }


        if (timer > 0.13328) {
            push()
            translate(width * 0.125, height * 0.1);
            rotate(frameCount / -100.0);
            fill(grey)
            polygon(0, 0, height * 0.0756, 7);
            pop();
        }
        if (timer > 0.1666) {
            push()
            translate(width * 0.87, height * 0.1);
            rotate(frameCount / -100.0);
            fill(grey)
            polygon(0, 0, height * 0.0756, 7);
            pop();

        }
        if (timer > 0.19992) {
            push()
            translate(width * 0.87, height * 0.87);
            rotate(frameCount / -100.0);
            fill(grey)
            polygon(0, 0, height * 0.0756, 7);
            pop();
        }
        if (timer > 0.22491) {
            push()
            translate(width * 0.125, height * 0.87);
            rotate(frameCount / -100.0);
            fill(grey)
            polygon(0, 0, height * 0.0756, 7);
            pop();
        }

    }

    playSound(mySound7, 85) // lettre U
    if (mySound7.isPlaying() == true) {
        push()
        ////background(0);
        var rms = analyzz.getLevel();
        var ellipseAlpha = map(rms, 0, 1, 0, 255);
        noStroke;
        fill(255, ellipseAlpha);
        ellipse(width * 0.85, height * 0.8, height * 0.2702, height * 0.2702);
        pop()

    }


    playSound(mySound20, 71) // lettre G
    if (mySound20.isPlaying() == true) {
        push()
        var waveform = mySound20FFT.waveform();
        noFill();
        beginShape();
        stroke(255);
        strokeWeight(height * 0.00302);
        for (var i = 0; i < waveform.length; i++) {
            var x = map(i, 0, waveform.length, 0, width);
            var y = map(waveform[i], 0, 1, 0, height);
            curveVertex(x, y);
        }
        endShape();
        pop()

    }
    playSound(mySound25, 68) // lettre D
    if (mySound25.isPlaying() == true) {
        push()
        var t = map(mySound25.currentTime(), 0, mySound25.duration() * 0.75, 0, 1)
        var grey = map(mySound25.currentTime(), mySound2.duration() * 0.75, mySound25.duration(), 255, 0) // permet que l'animation disparaisse en douceur
        t = constrain(t, 0, 1)
        grey = constrain(grey, 0, 255)
        fill(grey)
        for (var i = 0; i < 50; i++) {
            var x = lerp(xpos[i], xtarget[i], t)
            var y = lerp(ypos[i], ytarget[i], t)
            noStroke();
            for (let i = 0; i < 10; i++) {
                ellipse(x, y, height * 0.0324, height * 0.0216, height * 0.2162);
                rotate(PI / 5);
            }
        }

        pop()
    }
    playSound(mySound12, 74) // lettre J
    if (mySound12.isPlaying() == true) {
        push()
        rotate(frameCount / -100.0);
        for (let i = 0; i < 50; i++) {
            star(width * 0.1, height * 0.1, height * 0.0162, height * 0.0378, 5);
            rotate(PI / 10);
        }
        pop();

    }

    playSound(mySound22, 87) // lettre W
    if (mySound22.isPlaying() == true) {
        push()
        translate(width * 0.5, height * 0.5);
        rotate(frameCount / -8.0);

        polygon(0, 0, height * 0.0756, 3);

        pop()

    }

    playSound(mySound24, 88) //lettre X
    if (mySound24.isPlaying() == true) {
        push()
        var rms = analyzerrr.getLevel();
        var ellipseSize = map(rms, 0, 1, height * 0.054, height * 0.648);
        fill(255);
        arc(width * 1, height * 1, ellipseSize, ellipseSize, PI, TWO_PI);

        pop()
    }

    playSound(mySound21, 75) // lettre K
    if (mySound21.isPlaying() == true) {
        push()
        translate(width * 0.5, height * 0.5);
        rotate(frameCount / -8.0);
        noStroke();
        for (let i = 0; i < 10; i++) {
            ellipse(0, height * 0.0324, height * 0.0648, height * 0.2436);
            rotate(PI / 4); // permets de multplier les ellipse, ici il y en aura 4


        }
        pop()

    }

    playSound(mySound26, 86) // lettre V
    if (mySound26.isPlaying() == true) {
        push()
        var timer = map(mySound26.currentTime(), 0, mySound26.duration(), 0, 1)
        push()
        translate(width * 0.5, height * 0.5);
        rotate(frameCount / 50.0);
        star(0, 0, height * 0.0864, height * 0.5405, 40);
        pop();


    }

    playSound(mySound10, 76) // lettre L
    if (mySound10.isPlaying() == true) {
        push();
        translate(width * 0.8, height * 0.5);
        rotate(frameCount / -100.0);
        star(0, 0, height * 0.0216, height * 0.0756, 4);
        // le dernier paramètre est le nombre de branches
        pop();
    }

    playSound(mySound18, 77) // lettre M
    if (mySound18.isPlaying() == true) {
        push();
        translate(width * 0.2, height * 0.5);
        rotate(frameCount / 200.0); // Plus la valeur est grand plus la forme va tourné doucement
        star(0, 0, height * 0.00648, height * 0.0756, 3); // le dernier paramètre est le nombre de branches
        pop();
    }
}

// les fonctions polygon et star permettent d'ajouter d'autre formes complexes.
function polygon(x, y, radius, npoints) {
    var anglesss = TWO_PI / npoints;
    beginShape();
    for (var a = 0; a < TWO_PI; a += anglesss) {
        var sx = x + cos(a) * radius;
        var sy = y + sin(a) * radius;
        vertex(sx, sy);
    }
    endShape(CLOSE);
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



function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    ////background(0);
}

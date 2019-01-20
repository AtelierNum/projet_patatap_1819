//'d' == trap1 + color_react_pink
var trap1

// 'z' == stab3 + color_react_blue
var stab3
var stab3Amp

// 'a' == stab2 + color_react_white
var stab2
var stab2Amp


var song // 'i'== song + ellipse_analyzer
var analyzer;


// 'j' == drone1 + ellipse
var drone1
var drone1FFT //cette variable va stocker un objet permettant d' effectuer une analyse audio sur le son 'drone1'


//'n' == synth1 + wavemarker
var synth1
//'m' == kora2 + wavemarker
var kora2
// wavemarker synth1 + kora2
let t5 = 0;


// 'v' == harp + polar_circle
var harp
var harpAmp

// 'y' == harp4 + polar_point
var harp4
var harp4Amp


// 'x' == stab7 + snow_partcle_white
var stab7
var xpos7 = []
var ypos7 = []
var xtarget7 = []
var ytarget7 = []

// 'w' == stab6 + snow_partcle_blue
var stab6
var xpos6 = []
var ypos6 = []
var xtarget6 = []
var ytarget6 = []


//'l' == whoosh1 + sine
var whoosh1
let diameter;
let angle3 = 0;

//'u' == drone10  + sine copy
var drone10
let diameter10;
let angle10 = 0;

// 'c' == kalimba + clean_ellipse
var kalimba1

//'k' == wave1 + sinewave
var wave1


//'k' == wave1 + sinewave
let xspacing = 12; // distance entre x
let w; // width
let theta = 0.0;
let amplitude = 75.0; // hauteur sinwave
let period = 50; // nbr pixels
let dx; // valeur de x
let yvalues; // Using an array to store height values for the wave


var celtic19 //'o' == celtic1 + sinewave
let xspacing19 = 12;
let theta19 = 0.0;
let amplitude19 = 75.0;
let period19 = 50;
let dx19;
let yvalues19;


//'t' == stab5 + sin_cosine
var stab5
let angle1 = 0;
let angle2 = 0;
let scalar = 300;


//'h' == snap1 / fast ellispse clap
var snap1
let a22 = 0.0;
let s22 = 0.0;


// //'s' == stab1 + linear
var a
var stab1

var stab21 //'q' == stab21 + scale
let a21 = 0.0;
let s21 = 0.0;

// 'e' == piano1 + tubine_2
var piano1


// 'b' == drone2 + waveform
var drone2
var drone2FFT



//'f' wave2 = rotation point
var wave2;
var coin = 0;
var offset = 0.9
var scalar1 = 90;
var speed = 0.003;



//'g' shaker 1 + geometrielines
var shaker1;

const rectWidth = 36;
const rectHeight = 8;
const wiggleAmt = 60;
const divisions = 45;
var el = document.getElementsByTagName('body');
var t91 = 10; //
var lines = 10;

var x1 = function (t91) {
    return sin(t91 / 10) * 100 + sin(t91 / 5) * 100;
}
var y1 = function (t91) {
    return cos(t91 / 10) + 100;
}
var x2 = function (t91) {
    return sin(t91 / 10) * 200 + cos(t91) * 2;
}
var y2 = function (t91) {
    return cos(t91 / 20) * 200 + 200 + cos(t91 / 12) * 20;
}


//'r' == stab4 + double_random
var stab4
let totalPts = 300;
let steps = totalPts + 1;

//'p' == stab8+ double_random
var stab8
let totalPts8 = 300;
let steps8 = totalPts8 + 1;


var pg // créer un calque > flou sur stab4 + double_random


function preload() {
    piano1 = loadSound("assets/piano1.wav"); //'e' == piano1 + tubine_2
    shaker1 = loadSound("assets/shaker_africa1.wav"); //'g' shaker 1 + geometrielines
    stab2 = loadSound("assets/clac.wav"); //'a' == stab2 + color_react_white
    stab3 = loadSound("assets/kick01.wav"); // 'z' == stab3 + color_react_blue
    stab6 = loadSound("assets/195744__deleted-user-2195044__mod-pad.wav") // 'x' == stab6 + snow_partcle_blue
    kalimba1 = loadSound("assets/kalimba_africa1.wav") // 'c' == kalimba + clean_ellipse
    whoosh1 = loadSound("assets/whoosh_pair.flac") //'l' == whoosh1 + sine
    stab4 = loadSound("assets/2326__jovica__stab-001-mastered-16-bit.wav") //'r' == stab4 + double_random
    stab5 = loadSound("assets/levitating.wav"); //'t' == stab5 + sin_cosine
    wave1 = loadSound("assets/wave.wav"); //'k' == wave1 + sinewave
    stab1 = loadSound("assets/15488__djgriffin__tibetan-chant-4-colargol-2.mp3") // //'s' == stab1 + linear
    harp = loadSound("assets/harp2658.wav") // 'v' == harp + polar_circle
    wave2 = loadSound("assets/sine_wave.wav"); //'f' wave2 = rotation point
    synth1 = loadSound("assets/bemol_synth.wav") //'n' == synth1 + wavemarker
    drone2 = loadSound("assets/soft_pad.wav") // 'b' == drone2 + waveform
    kora2 = loadSound("assets/kora.wav") //'m' == kora2 + wavemarker
    drone1 = loadSound("assets/217490__jarredgibb__drone-002.wav") // 'j' == drone1 + ellipse
    harp4 = loadSound("assets/harp4.wav") // 'y' == harp4 + polar_point
    drone10 = loadSound("assets/drone10.wav") //'u' == drone10  + sine copy
    stab21 = loadSound("assets/2330__jovica__stab-005-mastered-16-bit.wav") //'q' == stab21 + scale
    song = loadSound("assets/kick_118.wav"); // 'i'== song + ellipse_analyzer
    stab7 = loadSound("assets/24786__young-daddy__clap-mix.wav") // 'w' == stab7 + snow_partcle_white
    stab8 = loadSound("assets/stab8.wav") //'p' == stab8+ double_random
    celtic19 = loadSound("assets/celtic-meral.wav"); //'o' == celtic1 + sinewave
    trap1 = loadSound("assets/trap1.wav"); //'d' == trap1 + color_react_pink
    snap1 = loadSound("assets/snap.wav") //'h' == snap1 / fast ellispse clap


}

//'e' == piano1 + tubine_2
function drawRotRect(x, y, degree) {
    // center in canvas
    translate(width / 2, height / 2);
    translate(x, y);
    rotate(degree);
    rect(0, 0, rectWidth, rectHeight, 80);
    resetMatrix();
}


function setup() {

    createCanvas(windowWidth, windowHeight);
    background(180);

    pg = createGraphics(windowWidth, windowHeight)
    pg.background //  pg.object > clque (180,50)

    // linear_frames
    a = height / 2;

    // color_react series
    //'a' == stab2 + color_react_white
    stab2Amp = new p5.Amplitude()
    stab2Amp.setInput(stab2) // on branche l'analyseur à stab2
    //'d' == trap1 + color_react_pink
    trap1Amp = new p5.Amplitude()
    trap1Amp.setInput(trap1) // on branche l'analyseur à trap1
    // 'z' == stab3 + color_react_blue
    stab3Amp = new p5.Amplitude()
    stab3Amp.setInput(stab3) // on branche l'analyseur à stab3

    // 'i'== song + ellipse_analyzer
    analyzer = new p5.Amplitude(0.15);
    analyzer.setInput(song);
    analyzer.toggleNormalize();
    // s'assurer que notre analyseur renvoie une valeur comprise entre 0 et 1

    // 'j' == drone1 + ellipse
    drone1FFT = new p5.FFT(0.8, 16)// premier paramètre est le smoothing, le second est le nombre de bandes de fréquences souhaité.
    drone1FFT.setInput(drone1)


    // 'v' == harp + polar_circle
    harpAmp = new p5.Amplitude()
    harpAmp.setInput(harp)
    harpAmp.toggleNormalize()

    // 'y' == harp4 + polar point
    harp4Amp = new p5.Amplitude()
    harp4Amp.setInput(harp4)
    harp4Amp.toggleNormalize()



    diameter = height - 10; //'l' == whoosh1 + sine
    diameter10 = height - 10; //'u' == drone10  + sine copy


    // 'b' == drone2 + waveform
    // connexion de l'analyseur waveform
    drone2FFT = new p5.FFT(0.8, 1024)
    drone2FFT.setInput(drone2)


    //'w' == stab6 + snow_partcle_blue
    for (var i = 0; i < 50; i++) {
        xpos6.push(random(0, width)) // définr la position des coordonnées
        ypos6.push(random(0, -height))
        xtarget6.push(random(width))
        ytarget6.push(random(height))
    }
    //'x' == stab7 + snow_partcle_blue
    for (var i = 0; i < 50; i++) {
        xpos7.push(random(0, width)) // ajouter des éléments au dessus de notre canvas
        ypos7.push(random(0, -height))
        xtarget7.push(random(width)) // ajouter des éléments à l'intérieur de notra canvas
        ytarget7.push(random(height))
    }


}

function draw() { // début draw

    background(180);


    pg.background(180, 50)
    // pour avoir flou > mettre un claque

    //si on appuie sur la touche 'r ET si le son stab4 n'est pas déjà en train de jouer
    playSound(stab4, 82) //'r' == stab4 + double_random
    if (stab4.isPlaying() == true) {

        push() //pousser un nouveau référentiel de coordonnées et de style

        pg.stroke(255);
        pg.strokeWeight(3);
        frameRate(30); // rafraichissement de 30 img/s
        let rand = 60;



        for (let i = 1; i < steps; i++) {
            pg.point((width / steps) * i, height / 2 + random(-rand, rand));
            rand += random(.4, -0.4);
        }
        image(pg, 0, 0, width, height)
        pop() // restaurer le référentiel initial

    } else {
        // on reset notre animation  :
        // en réinitialisant le calque
        pg = createGraphics(windowWidth, windowHeight)
        pg.background(180, 50)


    }


    // pour avoir flou > mettre un claque
    playSound(stab8, 80) //'p' == stab8+ double_random
    if (stab8.isPlaying() == true) {
        push()
        stroke(255);
        strokeWeight(3);
        frameRate(30);
        let rand = 60;

        for (let i = 1; i < steps8; i++) {
            point((width / steps8) * i, height / 2 + random(-rand, rand));
            rand += random(.4, -0.4);
        }
        pop()

    }




    playSound(stab2, 65) //'a' == stab2 + color_react_white
    if (stab2.isPlaying() == true) { // si le son joue on affiche notre animation.
        push() // pousser un nouveau référentiel de coordonnées et de style (pour éviter que nos changements n'affectent le reste de nos dessin)
        var amp = stab2Amp.getLevel() // obtenir le niveau sonore à l'aide de notre analyseur et le stocker dans une variable nommée amp
        var whiteLevel = map(amp, 0, 1, 210, 255) // transformer 'amp' qui est comprise entre 0 et 1 en une nouvelle valeur entre 0 et 255
        // dessiner un carré blanc de la taille de notre fenêtre dont la teinte est contrôllé par whiteLevel qui dépend elle même du
        // niveau sonore de notre son en train de jouer.
        noStroke()
        fill(whiteLevel)
        rect(0, 0, width, height)
        pop()
    }

    playSound(stab3, 90) //'z' == stab2 + color_react_grey

    if (stab3.isPlaying() == true) { // si le son joue on affiche notre animation.

        push() // pousser un nouveau référentiel de coordonnées et de style (pour éviter que nos changements n'affectent le reste de nos dessin)

        var amp = stab3Amp.getLevel() // obtenir le niveau sonore à l'aide de notre analyseur et le stocker dans une variable nommée amp
        var whiteLevel = map(amp, 0, 0.4, 100, 255) // transformer 'amp' qui est comprise entre 0 et 1 en une nouvelle valeur entre 0 et 255
        // dessiner un carré blanc de la taille de notre fenêtre dont la teinte est contrôllé par whiteLevel qui dépend elle même du
        // niveau sonore de notre son en train de jouer.
        noStroke()
        fill(204, 255, 255, whiteLevel)
        rect(0, 0, width, height)
        pop()
    }

    playSound(trap1, 68) //'d' == trap1 + color_react_pink
    if (trap1.isPlaying() == true) { // si le son joue on affiche notre animation.
        push() // pousser un nouveau référentiel de coordonnées et de style (pour éviter que nos changements n'affectent le reste de nos dessin)
        var amp = trap1Amp.getLevel() // obtenir le niveau sonore à l'aide de notre analyseur et le stocker dans une variable nommée amp
        var whiteLevel = map(amp, 0, 0.4, 100, 255) // transformer 'amp' qui est comprise entre 0 et 1 en une nouvelle valeur entre 0 et 255
        // dessiner un carré blanc de la taille de notre fenêtre dont la teinte est contrôllé par whiteLevel qui dépend elle même du
        // niveau sonore de notre son en train de jouer.
        noStroke()
        fill(255, 204, 255, whiteLevel)
        rect(0, 0, width, height)
        pop()
    }



    playSound(song, 73); // 'i'== song + ellipse_

    if (song.isPlaying() == true) {
        push()
        var rms = analyzer.getLevel();
        var ellipseSize = map(rms, 0, 1, 50, 800); // rms est compris entre 0 et 1 et nous voulons une valeur comprise entre 5O et 800 pour controller la taille
        var ellipseAlpha = map(rms, 0, 1, 50, 255); // rms est compris entre 0 et 1 et nous voulons une valeur comprise entre 5O et 800 pour controller la transparence
        noStroke();
        fill(255, 204, 255, ellipseAlpha)
        ellipse(width * 0.25, height * 0.5, ellipseSize, ellipseSize)
        fill(204, 255, 255, ellipseAlpha);
        ellipse(width * 0.75, height * 0.5, ellipseSize, ellipseSize)
        pop() // le son est top donc animation affiche trop longtemps après son
    }


    playSound(drone1, 74); // 'j' == drone1 + ellipse
    if (drone1.isPlaying() == true) {
        // push() & pop() protègent
        push()
        noStroke();
        drone1FFT.analyze();
        rectMode(CENTER); // référentiel de bas rectMode(CORNER)
        var nrj1 = drone1FFT.getEnergy("bass")

        push()
        fill(255, nrj1)
        translate(width * 0.25, height * 0.5)
        rotate(PI / 4)
        ellipse(0, 0, nrj1, nrj1)
        pop()

        push()

        fill(204, 255, 255)
        translate(width * 0.5, height * 0.5)
        rotate(PI / 4)
        ellipse(0, 0, nrj1, nrj1)
        pop()

        push()
        fill(255, nrj1)
        translate(width * 0.75, height * 0.5)
        rotate(PI / 4)
        ellipse(0, 0, nrj1, nrj1)
        pop()

        pop()
    }


    playSound(synth1, 78) //'n' == synth1 = wavemarker
    if (synth1.isPlaying() == true) {
        push()
        fill(255, 204, 255);
        noStroke();
        // make a x and y grid of ellipses
        for (let x = 0; x <= width; x = x + 20) {
            for (let y = 0; y <= height; y = y + 30) {
                // starting point of each circle depends on mouse position
                let xAngle = map(width / 4, 0, width, -4 * PI, 4 * PI, true);
                let yAngle = map(height, 0, height, -4 * PI, 4 * PI, true);
                // and also varies based on the particle's location
                let angle = xAngle * (x / width) + yAngle * (y / height);
                // each particle moves in a circle
                let myX = x + 20 * cos(2 * PI * t5 + angle);
                let myY = y + 20 * sin(2 * PI * t5 + angle);
                ellipse(myX, myY, 10); // draw particle
            }
        }
        t5 = t5 + 0.01; // update time
        pop()
    }




    playSound(kora2, 77) //'m' == kora2 + wavemarker
    if (kora2.isPlaying() == true) {
        push()
        fill(204, 255, 255);
        noStroke();
        // make a x and y grid of ellipses
        for (let x = 0; x <= width; x = x + 20) {
            for (let y = 0; y <= height; y = y + 30) {
                // starting point of each circle depends on mouse position
                let xAngle = map(width, 0, width, -4 * PI, 4 * PI, true);
                let yAngle = map(height * 4, 0, height, -2 * PI, 2 * PI, true);
                // and also varies based on the particle's location
                let angle = xAngle * (x / width) + yAngle * (y / height);
                // each particle moves in a circle
                let myX = x + 20 * cos(2 * PI * t5 + angle);
                let myY = y + 20 * sin(2 * PI * t5 + angle);
                ellipse(myX, myY, 10); // draw particle
            }
        }

        t5 = t5 + 0.01; // update time
        pop()
    }



    playSound(harp, 86) // 'v' == harp + polar_circle
    if (harp.isPlaying() == true) {
        push()
        noStroke();
        fill(204, 255, 255);
        var lvl = harpAmp.getLevel() * 10; // 10 = inutile
        var nsegment = 500
        var ncurrentsegment = (map(harp.currentTime(), 0, harp.duration(), 0, nsegment + 10)) // 10 = inutile
        for (var i = 0; i < ncurrentsegment; i++) {
            //var h = map(i, 0, nsegment, 0, 0)
            //stroke(h, 45, 100, lvl + 55)
            var angle8 = map(i, 0, nsegment, 0, TWO_PI);
            var x = width * 0.5 + height * 0.45 * sin(angle8)
            var y = height * 0.5 + height * 0.45 * cos(angle8)
            //line(width * 0.5, height * 0.5, x, y)
            ellipse(x, y, 40, 40)
        }
        pop()
    }

    playSound(harp4, 89) // 'y' == harp + polar_point
    if (harp4.isPlaying() == true) {
        push()
        noStroke();
        //colorMode(HSB, 360, 100, 100, 100)
        var lvl = harp4Amp.getLevel() * 10; // 10 = inutile
        var nsegment = 10
        var ncurrentsegment = (map(harp4.currentTime(), 0, harp4.duration(), 0, nsegment + 10)) // 10 = inutile
        for (var i = 0; i < ncurrentsegment; i++) {
            //var h = map(i, 0, nsegment, 0, 0)
            //stroke(h, 45, 100, lvl + 55)
            var angle8 = map(i, 0, nsegment, 0, TWO_PI);
            var x = width * 0.5 + height * 0.45 * cos(angle8)
            var y = height * 0.5 + height * 0.45 * sin(angle8)
            //line(width * 0.5, height * 0.5, x, y)
            ellipse(x, y, 40, 40)
        }
        pop()
    }



    playSound(stab7, 87) // 'x' == stab7 + snow_partcle_white
    if (stab7.isPlaying() == true) {
        noStroke();
        //translate(width / 2, height / 2);
        rotate(PI * 2);
        // fill(204,255,255)
        var t = map(stab7.currentTime(), 0, stab7.duration() * 1, 0, 1)
        var grey = map(stab7.currentTime(), stab7.duration() * 1, stab7.duration(), 255, 180)
        t = constrain(t, 0, 1)
        grey = constrain(grey, 18, 255)
        push()
        //fill(grey)
        fill(204, 255, 255)
        for (var i = 0; i < 50; i++) {
            var x = lerp(xpos7[i], xtarget7[i], t)
            var y = lerp(ypos7[i], ytarget7[i], t)
            ellipse(x, y, 10, 10)
        }
        pop()
    }

    playSound(stab6, 88) // 'w' == stab6 + snow_partcle_blue
    if (stab6.isPlaying() == true) {
        noStroke();
        var t = map(stab6.currentTime(), 0, stab6.duration() * 0.75, 0, 1)
        var grey = map(stab6.currentTime(), stab6.duration() * 0.75, stab6.duration(), 255, 180)
        t = constrain(t, 0, 1)
        grey = constrain(grey, 180, 255)
        push()
        fill(grey)
        for (var i = 0; i < 50; i++) {
            var x = lerp(xpos6[i], xtarget6[i], t)  // on calcule la position x en appliquant la fonction lerp aux valeurs stockées à l'index i des tableaux xpos et xtarget et ce pour le temps t.
            var y = lerp(ypos6[i], ytarget6[i], t)
            ellipse(x, y, 10, 10)
        }
        pop()
    }


    playSound(whoosh1, 76) //'l' == whoosh1 + sine
    if (whoosh1.isPlaying() == true) {
        push()

        noFill();
        stroke(255);
        strokeWeight(5);

        let d1 = 0 + (sin(angle3 + PI) * diameter) / 2 + diameter / 2;
        let d2 = 0 + (sin(angle3 + PI / 2) * diameter) / 2 + diameter / 2;
        let d3 = 0 + (sin(angle3 + PI) * diameter) / 2 + diameter / 2;

        ellipse(0, height / 2, d1, d1);
        ellipse(width / 2, height / 2, d2, d2);
        ellipse(width, height / 2, d3, d3);

        angle3 += 0.05; // vitesse de l'animation
        pop()
    }

    playSound(drone10, 85) //'u' == drone10  + sine copy
    if (drone10.isPlaying() == true) {
        push()
        noFill();
        stroke(255, 204, 255);
        strokeWeight(4);

        let d1 = 0 + (sin(angle10 + PI) * diameter10) / 2 + diameter10 / 2;
        let d2 = 0 + (sin(angle10 + PI / 2) * diameter10) / 2 + diameter10 / 2;
        let d3 = 0 + (sin(angle10 + PI) * diameter10) / 2 + diameter10 / 2;

        ellipse(0, height / 2, d1, d1);
        ellipse(width / 2, height / 2, d2, d2);
        ellipse(width, height / 2, d3, d3);

        angle10 += 0.05; // vitesse de l'animation
        pop()
    }


    playSound(kalimba1, 67); // 'c' == kalimba + clean_ellipse
    if (kalimba1.isPlaying() == true) {
        push()
        var radius = map(kalimba1.currentTime(), 0, kalimba1.duration(), 50, width)
        noStroke();
        fill(255)

        ellipse(width * 0.5, height * 0.5, radius, radius)
        pop()
    }


    playSound(wave1, 75) //'k' == wave1 + sinewave
    if (wave1.isPlaying() == true) {
        w = width + 16;
        dx = (TWO_PI / period) * xspacing;
        yvalues = new Array(floor(w / xspacing));
        push()
        calcWave();
        renderWave();
        pop()
    }


    playSound(celtic19, 79) //'o' == celtic1 + sinewave
    if (celtic19.isPlaying() == true) {

        w19 = width + 16;
        dx19 = (TWO_PI / period19) * xspacing19;
        yvalues19 = new Array(floor(w19 / xspacing19));
        push()
        calcWave19();
        renderWave19();
        pop()

    }


    playSound(stab5, 84) //'t' == stab5 + sin_cosine
    if (stab5.isPlaying() == true) {
        push()

        noStroke();
        rectMode(CENTER);

        let ang1 = radians(angle1);
        let ang2 = radians(angle2);

        let x1 = width / 2 + scalar * cos(ang1);
        let x2 = width / 2 + scalar * cos(ang2);

        let y1 = height / 2 + scalar * sin(ang1);
        let y2 = height / 2 + scalar * sin(ang2);

        /*fill(255);
        rect(width * 0.5, height * 0.5, 140, 140);*/

        /*fill(0, 102, 153);
        ellipse(x1, height * 0.5 - 120, scalar, scalar);
        ellipse(x2, height * 0.5 + 120, scalar, scalar);*/

        fill(255);
        ellipse(width * 0.5 - 120, y1, scalar / 10, scalar / 10);
        ellipse(width * 0.5 + 120, y2, scalar / 10, scalar / 10); // en divisant par 10 scalar qui gère le mvt mais aussi le diamètre on ne fait aps quelque chose en responsive

        angle1 += 2;
        angle2 += 3;
        pop()
    }

    playSound(snap1, 72) //'h' == snap1 / fast ellispse clap
    if (snap1.isPlaying() == true) {
        push()
        stroke(255, 204, 255)
        strokeWeight(10)

        a22 = a22 + .5;
        s22 = cos(a22) * 2;

        translate(width / 2, height / 2);
        scale(s22);

        translate(110, 0);
        noFill()
        scale(s22);
        ellipse(0, 0, 50, 50);
        pop()
    }

    playSound(stab1, 83) //'s' == stab1 + linear
    if (stab1.isPlaying() == true) {
        push()
        stroke(255);
        strokeWeight(4);

        //background(51);
        line(0, a, width, a);
        a = a - 1;
        if (a < 0) {
            a = height;
            pop()
        }
    }

    playSound(stab21, 81) //'q' == stab21 + scale
    if (stab21.isPlaying() == true) {
        push()
        noStroke()

        //Slowly increase 'a' and then animate 's' with
        //a smooth cyclical motion by finding the cosine of 'a'
        a21 = a21 + 0.12;
        s21 = cos(a21) * 2;

        //Translate our rectangle from the origin to the middle of
        //the canvas, then scale it with 's'
        translate(width / 2, height / 2);
        scale(s21);
        fill(255, 204, 255);
        ellipse(0, 0, 50, 50);

        //Translate and scale are accumulating, so this translate
        //moves the second rectangle further right than the first
        //and the scale is getting doubled. Note that cosine is
        //making 's' both negative and positive, thus it cycles
        //from left to right.
        translate(110, 0);
        fill(255);
        scale(s21);
        ellipse(0, 0, 50, 50);
        pop()
    }


    playSound(piano1, 69) // 'e' == piano1 + tubine_2
    if (piano1.isPlaying() == true) {
        push()

        // changer les paramètre par défaut
        angleMode(DEGREES);
        rectMode(CENTER)
        noStroke();

        for (var count = 0; count < divisions; count += 1) {
            var rot = count * (360 / divisions);
            var selfRot = rot * 1 + millis() * (1 / 15);
            var wiggle = cos(selfRot) * 90
            var wiggleWiggle = sin(-wiggle) * wiggleAmt;

            var x = cos(rot) * 150;
            var y = sin(rot) * 150;

            drawRotRect(x, y, wiggleWiggle + rot);

        }
        /////// 2ND CIRCLE //////

        for (var count = 0; count < (divisions - 15); count += 1) {
            var rot = count * (360 / (divisions - 15));
            var selfRot = rot * 1 + millis() * (1 / 10);
            var wiggle = cos(selfRot) * 90
            var wiggleWiggle = sin(-wiggle) * wiggleAmt;


            var x = cos(rot) * 110;
            var y = sin(rot) * 110;

            drawRotRect(x, y, wiggleWiggle + rot);

        }

        /////// 3rd CIRCLE //////

        for (var count = 0; count < (divisions - 25); count += 1) {
            var rot = count * (360 / (divisions - 25));
            var selfRot = rot * 1 + millis() * (1 / 6);
            var wiggle = cos(selfRot) * 90
            var wiggleWiggle = sin(-wiggle) * wiggleAmt;


            var x = cos(rot) * 70;
            var y = sin(rot) * 70;

            drawRotRect(x, y, wiggleWiggle + rot);

        }
        pop()
    }
    // rétablir les référentiels par défault
    rectMode(CORNER)
    angleMode(RADIANS);

    playSound(drone2, 66) // 'b' == drone2 + waveform
    if (drone2.isPlaying() == true) {
        push()
        smooth();
        var waveform = drone2FFT.waveform();
        noFill();
        beginShape();

        stroke(255, 150);
        strokeWeight(10);
        for (var i = 0; i < waveform.length; i++) {
            smooth();
            var x = map(i, 0, waveform.length, 0, width) * 5; // on calcul une abscisse dépendante de i pour occuper toute la largeur de notre fenêtre
            var y = map(waveform[i], -2, 2, 0, height); // on calcul une ordonnée dépendante de la valeur stockée dans la case i
            curveVertex(x, y);
        }
        endShape();
        pop()
    }

    playSound(wave2, 70) //'f' wave2 = rotation point
    if (wave2.isPlaying() == true) {
        push()

        translate(width / 2, height / 2)
        stroke(250);

        strokeWeight(10);
        var g = 0;

        rotate(radians(g));
        var h = 0.01;
        for (var j = 5; j < height; j += 9) {

            var k1 = offset + cos(coin) * scalar1;
            rotate(radians(k1));
            point(j, 0, 500, 980);
            h += 0.1

        }
        coin += speed;
        g++;
        pop()
    }
    //push()

    playSound(shaker1, 71) //'g' shaker 1 + geometrielines
    if (shaker1.isPlaying() == true) {
        push()
        strokeWeight(5);
        translate(width / 2, height / 4);
        for (var i = 0; i < lines; i++) {
            stroke(random(200, 240));
            line(x1(t91 + i), y1(t91 + i), x2(t91 + i), y2(t91 + i));
        }
        t91 = t91 + 0.5;
        pop()
    }
    //pop()

} // fin draw

function calcWave19() {
    // Increment theta (try different values for
    // 'angular velocity' here)
    theta19 += 0.02;

    // For every x value, calculate a y value with sine function
    let x = theta19;
    for (let i = 0; i < yvalues19.length; i++) {
        yvalues19[i] = sin(x) * amplitude19;
        x += dx19;
    }
}

function renderWave19() {
    noStroke();
    fill(204, 255, 255);
    // A simple way to draw the wave with an ellipse at each location
    for (let x = 0; x < yvalues19.length; x++) {
        ellipse(x * xspacing19, height / 2 + yvalues19[x], 16, 16);
    }
}


// sinewave

function calcWave() {
    // Increment theta (try different values for
    // 'angular velocity' here)
    theta += 0.02;

    // For every x value, calculate a y value with sine function
    let x = theta;
    for (let i = 0; i < yvalues.length; i++) {
        yvalues[i] = sin(x) * amplitude;
        x += dx;
    }
}

function renderWave() {
    noStroke();
    fill(255);
    // A simple way to draw the wave with an ellipse at each location
    for (let x = 0; x < yvalues.length; x++) {
        ellipse(x * xspacing, height / 2 + yvalues[x], 16, 16);
    }
}



function playSound(sound, keyId) {
    if (keyIsDown(keyId) == true && sound.isPlaying() == false) {
        sound.play();
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);

}

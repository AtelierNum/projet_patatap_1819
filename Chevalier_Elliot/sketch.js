var sound1;
var sound2;
var sound3;
var sound3FFT;
var sound4;
var sound4FFT;
var sound5;
var sound5FFT;
var sound6;
var sound6FFT;
var sound7;
var sound7FFT;
var sound8;
var sound9;
var sound10;
var sound11;
var sound12;
var sound13;
var sound13FFT;
var sound14;
var sound14FFT;
var sound15;
var sound16;
var sound17;
var sound18;
var sound19;
var sound20;
var sound21;
var sound22;
var sound23;
var sound23Amp;
var sound24;
var sound25;
var sound25Amp;
var sound26;
//FFT va stocker un objet permettant d' effectuer une analyse audio sur le son 'sound1'
//Amp
var xpos = []
var ypos = []
var xtarget = []
var ytarget = []


function preload() {
    sound1 =  loadSound("assets/ambiance1.wav");
    sound2 =  loadSound("assets/ambiance2.wav");
    sound3 =  loadSound("assets/ambiance3.wav");
    sound4 =  loadSound("assets/bassline1.wav");
    sound5 =  loadSound("assets/bassline2.wav");
    sound6 =  loadSound("assets/bassline3.wav");
    sound7 =  loadSound("assets/bassline4.wav");
    sound8 =  loadSound("assets/bassline5.wav");
    sound9 =  loadSound("assets/kick1.wav");
    sound10 = loadSound("assets/kick2.wav");
    sound11 = loadSound("assets/kick3.wav");
    sound12 = loadSound("assets/kick4.wav");
    sound13 = loadSound("assets/kick5.wav");
    sound14 = loadSound("assets/kick6.wav");
    sound15 = loadSound("assets/kick7.wav");
    sound16 = loadSound("assets/noise1.wav");
    sound17 = loadSound("assets/noise2.wav");
    sound18 = loadSound("assets/noise3.wav");
    sound19 = loadSound("assets/perc1.wav");
    sound20 = loadSound("assets/perc2.wav");
    sound21 = loadSound("assets/perc3.wav");
    sound22 = loadSound("assets/perc4.wav");
    sound23 = loadSound("assets/synth1.wav");
    sound24 = loadSound("assets/synth2.wav");
    sound25 = loadSound("assets/synth3.wav");
    sound26 = loadSound("assets/synth4.wav");
}

function setup() {
    createCanvas(windowWidth, windowHeight); //Mon Espace de travail
    background(0);
    sound3FFT = new p5.FFT(0.8, 2048); //premier paramètre est le smoothing, le second est le nombre de bandes de fréquences souhaité.
    sound3FFT.setInput(sound3); // on 'branche' cet analyseur au son sound1.
    sound4FFT = new p5.FFT(0.8, 2048);
    sound4FFT.setInput(sound4);
    sound5FFT = new p5.FFT(0.8, 2048);
    sound5FFT.setInput(sound5);
    sound6FFT = new p5.FFT(0.8, 16);
    sound6FFT.setInput(sound6);
    sound7FFT = new p5.FFT(0.8, 16);
    sound7FFT.setInput(sound6);
    sound13FFT = new p5.FFT(0.8, 2048);
    sound13FFT.setInput(sound13);
    sound14FFT = new p5.FFT(0.8, 2048);
    sound14FFT.setInput(sound14);
    for (var i = 0; i < 50; i++) {
        // ajouter des éléments au dessus de notre canvas
        xpos.push(random(0, width))
        ypos.push(random(0, -height))
        // ajouter des éléments à l'intérieur de notra canvas
        xtarget.push(random(width))
        ytarget.push(random(height))
    }
    sound23Amp = new p5.Amplitude();
    sound23Amp.setInput(sound23);
    sound25Amp = new p5.Amplitude();
    sound25Amp.setInput(sound25);

    //if (condition)alors le code {}est executé
    // on créee un objet de type FFT (fast fourier transform) pour analyser l'énergie des bandes de fréquence de notre son
    // on créee un objet de type FFT (fast fourier transform) pour obtenir une représentation sous forme de waveform.
}

function draw() {

    background(0, 50);

    playSound(sound1, 65); // A //toujours dans l'ordre jouer le son, puis le if, puis le push et pop
    if (sound1.isPlaying() == true) { //map = regles de proportionalité
        push();
        var radius = map(sound1.currentTime(), 0, sound1.duration(), 50, width);
        // = rayon du cercle /situer par rapport au son/ durée du son/ début/ fin (longueur)/ rayon min/jusqu'a la longueur
        strokeWeight(22);
        stroke(250, 250, 250);
        fill(0, 0, 0);
        ellipse(width * 0.5, height * 0.5, radius, radius); // * equivaut à multiplié
        pop();

        push();
        var radius = map(sound1.currentTime(), 0, sound1.duration(), 50, width * 0.9);
        strokeWeight(20);
        stroke(250, 250, 250);
        fill(0, 0, 0);
        ellipse(width * 0.5, height * 0.5, radius, radius);
        pop();

        push();
        var radius = map(sound1.currentTime(), 0, sound1.duration(), 50, width * 0.8);
        strokeWeight(18);
        stroke(250, 250, 250);
        fill(0, 0, 0);
        ellipse(width * 0.5, height * 0.5, radius, radius);
        pop();

        push();
        var radius = map(sound1.currentTime(), 0, sound1.duration(), 50, width * 0.7);
        strokeWeight(16);
        stroke(250, 250, 250);
        fill(0, 0, 0);
        ellipse(width * 0.5, height * 0.5, radius, radius);
        pop();

        push();
        var radius = map(sound1.currentTime(), 0, sound1.duration(), 50, width * 0.6);
        strokeWeight(12);
        stroke(250, 250, 250);
        fill(0, 0, 0);
        ellipse(width * 0.5, height * 0.5, radius, radius);
        pop();

        push();
        var radius = map(sound1.currentTime(), 0, sound1.duration(), 50, width * 0.5);
        strokeWeight(8);
        stroke(250, 250, 250);
        fill(0, 0, 0);
        ellipse(width * 0.5, height * 0.5, radius, radius);
        pop();

        push();
        var radius = map(sound1.currentTime(), 0, sound1.duration(), 50, width * 0.4);
        strokeWeight(4);
        stroke(250, 250, 250);
        fill(0, 0, 0);
        ellipse(width * 0.5, height * 0.5, radius, radius);
        pop();

        push();
        var radius = map(sound1.currentTime(), 0, sound1.duration(), 50, width * 0.3);
        strokeWeight(2);
        stroke(250, 250, 250);
        fill(0, 0, 0);
        ellipse(width * 0.5, height * 0.5, radius, radius);
        pop();

        push();
        var radius = map(sound1.currentTime(), 0, sound1.duration(), 50, width * 0.2);
        strokeWeight(1);
        stroke(250, 250, 250);
        fill(0, 0, 0);
        ellipse(width * 0.5, height * 0.5, radius, radius);
        pop();
        push();
        var radius = map(sound1.currentTime(), 0, sound1.duration(), 50, width * 0.1);
        strokeWeight(0.5);
        stroke(250, 250, 250);
        fill(0, 0, 0);
        ellipse(width * 0.5, height * 0.5, radius, radius);
        pop();

        push();
        var radius = map(sound1.currentTime(), 0, sound1.duration(), 50, width * 0.05);
        strokeWeight(0.4);
        stroke(250, 250, 250);
        fill(0, 0, 0);
        ellipse(width * 0.5, height * 0.5, radius, radius);
        pop();
        push();
        var radius = map(sound1.currentTime(), 0, sound1.duration(), 50, width * 0.025);
        strokeWeight(0.3);
        stroke(250, 250, 250);
        fill(0, 0, 0);
        ellipse(width * 0.5, height * 0.5, radius, radius);
        pop();

        push();
        var radius = map(sound1.currentTime(), 0, sound1.duration(), 50, width * 0.020);
        strokeWeight(0.2);
        stroke(250, 250, 250);
        fill(0, 0, 0);
        ellipse(width * 0.5, height * 0.5, radius, radius);
        pop();

        push();
        var radius = map(sound1.currentTime(), 0, sound1.duration(), 50, width * 0.010);
        strokeWeight(0.1);
        stroke(250, 250, 250);
        fill(0, 0, 0);
        ellipse(width * 0.5, height * 0.5, radius, radius);
        pop();
    }

    if (sound2.isPlaying() == true) { // Z // Usage rotation + Rectangle
        push();
        var angle = map(sound2.currentTime(), 0, sound2.duration(), 9, PI);
        translate(width * 0.2, height * 0.8);
        rotate(angle);
        rectMode(CENTER);
        stroke(250, 250, 250);
        strokeWeight(50);
        fill(0, 0, 0, 0);
        rect(0, 0, width * 2, height * 2);
        pop();
    }

    playSound(sound3, 69); // E // Variable FFT + rect mode
    if (sound3.isPlaying() == true) {
        push();
        sound3FFT.analyze();
        rectMode(CENTER);
        var nrj1 = sound3FFT.getEnergy("bass")
        push();
        stroke(250, 250, 250);
        strokeWeight(1);
        fill(0, 0, 0, nrj1);
        translate(width * 0.25, height * 0.5);
        rotate(PI / 4);
        rect(0, 0, width * 0.2, width * 0.2);
        pop();

        push();
        stroke(250, 250, 250)
        strokeWeight(1)
        fill(0, 0, 0, nrj1)
        translate(width * 0.75, height * 0.5)
        rotate(PI / 4)
        rect(0, 0, width * 0.2, width * 0.2)
        pop();

        push();
        stroke(250, 250, 250)
        strokeWeight(200)
        fill(250, 250, 250)
        translate(width * 0.5, height * 0.5)
        rotate(PI / 4)
        rectMode(CENTER);
        rect(0, 0, nrj1, nrj1)
        pop();

        pop();
    }

    playSound(sound4, 82); // R // Contours + translate
    if (sound4.isPlaying() == true) {
        push();
        translate(width * 0.1, height * 0.2);
        var longueur = map(sound4.currentTime(), 0, sound4.duration(), width, 50);
        fill(0, 0);
        stroke(250, 250, 250);
        strokeWeight(1)
        rect(0, 0, longueur, 300);
        pop();

        push();
        translate(width * 0.2, height * 0.3);
        var longueur = map(sound4.currentTime(), 0, sound4.duration(), width, 100);
        fill(0, 0);
        stroke(250, 250, 250);
        strokeWeight(1)
        rect(0, 0, longueur, 300);
        pop();

        push();
        translate(width * 0.3, height * 0.4);
        var longueur = map(sound4.currentTime(), 0, sound4.duration(), width, 200);
        fill(0, 0);
        stroke(250, 250, 250);
        strokeWeight(1)
        rect(0, 0, longueur, 300);
        pop();

        push();
        translate(width * 0.4, height * 0.5);
        var longueur = map(sound4.currentTime(), 0, sound4.duration(), width, 300);
        fill(0, 0);
        stroke(250, 250, 250);
        strokeWeight(1)
        rect(0, 0, longueur, 300);
        pop();

        push();
        translate(width * 0.5, height * 0.6);
        var longueur = map(sound4.currentTime(), 0, sound4.duration(), width, 400);
        fill(0, 0);
        stroke(250, 250, 250);
        strokeWeight(1)
        rect(0, 0, longueur, 300);
        pop();
    }

    playSound(sound5, 84) // T // waveform blanche
    if (sound5.isPlaying() == true) {
        push();
        var waveform = sound5FFT.waveform();
        noFill();
        beginShape();
        stroke(250, 250, 250);
        strokeWeight(1);
        for (var i = 0; i < waveform.length; i++) {
            var x = map(i, 0, waveform.length, 0, width);
            var y = map(waveform[i], -1, 1, 0, height);
            curveVertex(x, y);
        }
        endShape();
        pop();

    }
    playSound(sound6, 89) // Y //  spirale jeu sur la taille des branches
    if (sound6.isPlaying() == true) {
        push();
        translate(width * 0.5, height * 0.5);
        rotate(frameCount / 1.0);
        star(0, 0, 2000, 40, 100);
        pop();

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
    }

    playSound(sound7, 85) // U // spirale
    if (sound7.isPlaying() == true) {
        push();
        translate(width * 0.5, height * 0.5);
        rotate(frameCount / 150.0);
        star(0, 0, 100, 250, 150);
        pop();

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
    }

    playSound(sound8, 73); // I //  Cercles partent des coins
    if (sound8.isPlaying() == true) {
        push();
        var radius = map(sound8.currentTime(), 0, sound8.duration(), 50, width);
        strokeWeight(200);
        stroke(250, 250, 250);
        fill(250, 250, 250);
        ellipse(1400, 750, radius, radius);
        pop();

        push();
        var radius = map(sound8.currentTime(), 0, sound8.duration(), 50, width);
        strokeWeight(200);
        stroke(250, 250, 250);
        fill(250, 250, 250);
        ellipse(1400, 0, radius, radius);
        pop();

        push();
        var radius = map(sound8.currentTime(), 0, sound8.duration(), 50, width);
        strokeWeight(200);
        stroke(250, 250, 250);
        fill(250, 250, 250);
        ellipse(0, 0, radius, radius);
        pop();

        push();
        var radius = map(sound8.currentTime(), 0, sound8.duration(), 50, width);
        strokeWeight(200);
        stroke(250, 250, 250);
        fill(250, 250, 250);
        ellipse(0, 750, radius, radius);
        pop();
    }

    playSound(sound9, 79); // O //  simples rond : combiner avec le A pour un effet onde de choc lié a la variable sound1.duration laissé dans le code volontairement
    if (sound9.isPlaying() == true) {
        push();
        var radius = map(sound1.currentTime(), 0, sound1.duration(), 50, width);
        strokeWeight(100);
        stroke(250, 250, 250);
        fill(0, 0, 0);
        ellipse(width * 0.5, height * 0.5, radius, radius);
        pop();

        push();
        var radius = map(sound1.currentTime(), 0, sound1.duration(), 50, width);
        strokeWeight(15);
        stroke(250, 250, 250);
        fill(0, 0, 0);
        ellipse(width * 0.75, height * 0.25, radius, radius);
        pop();

        push();
        var radius = map(sound1.currentTime(), 0, sound1.duration(), 50, width);
        strokeWeight(20);
        stroke(250, 250, 250);
        fill(0, 0, 0);
        ellipse(width * 0.7, height * 0.4, radius, radius);
        pop();

        push();
        var radius = map(sound1.currentTime(), 0, sound1.duration(), 50, width);
        strokeWeight(100);
        stroke(250, 250, 250);
        fill(0, 0, 0);
        ellipse(width * 0.1, height * 0.2, radius, radius);
        pop();

        push();
        var radius = map(sound1.currentTime(), 0, sound1.duration(), 50, width);
        strokeWeight(90);
        stroke(250, 250, 250);
        fill(0, 0, 0);
        ellipse(width * 0.6, height * 0.6, radius, radius);
        pop();

        push();
        var radius = map(sound1.currentTime(), 0, sound1.duration(), 50, width);
        strokeWeight(90);
        stroke(250, 250, 250);
        fill(0, 0, 0);
        ellipse(width * 0.15, height * 0.6, radius, radius); // * equivaut à multiplié
        pop();
    }

    playSound(sound10, 80); // P //  similaire au O avec des triangles
    if (sound10.isPlaying() == true) {
        push();
        fill(0, 0, 0, 0)
        stroke(250, 250, 250)
        triangle(20, 20, 900, 20, 20, 740)
        strokeWeight(1)

        pop();

        push();
        fill(0, 0, 0, 0)
        stroke(250, 250, 250)
        triangle(20, 500, 900, 400, 200, 740)
        strokeWeight(1)

        pop();

        push();
        fill(0, 0, 0, 0)
        stroke(250, 250, 250)
        triangle(960, 500, 530, 400, 200, 740)
        strokeWeight(1)

        pop();

        push();
        fill(0, 0, 0, 0)
        stroke(250, 250, 250)
        triangle(90, 500, 340, 500, 1000, 80)
        strokeWeight(1)

        pop();

        push();
        fill(0, 0, 0, 0)
        stroke(250, 250, 250)
        triangle(1400, 80, 1350, 500, 400, 750)
        strokeWeight(1)

        pop();

        push();
        fill(0, 0, 0, 0)
        stroke(250, 250, 250)
        triangle(1200, 20, 1200, 700, 400, 750)
        strokeWeight(1)

        pop();
    }

    playSound(sound11, 81); // Q // rectangles simples : combiner avec le z pour un effet  rotation lié au sound2.duration dans l'animation du Z laissé dans le code
    if (sound11.isPlaying() == true) {
        push();
        var angle = map(sound2.currentTime(), 0, sound2.duration(), 0, PI);
        translate(width * 0.5, height * 0.5);
        rotate(angle);
        rectMode(CENTER);
        stroke(250, 250, 250)
        strokeWeight(1);
        fill(0, 0, 0, 0);
        rect(0, 0, width * 1, 5, height * 0);

        pop();

        push();
        var angle = map(sound2.currentTime(), 0, sound2.duration(), 0, PI);
        translate(width * 0.5, height * 0.6);
        rotate(angle);
        rectMode(CENTER);
        stroke(250, 250, 250)
        strokeWeight(1);
        fill(0, 0, 0, 0);
        rect(0, 0, width * 1, 5, height * 0);

        pop();

        push();
        var angle = map(sound2.currentTime(), 0, sound2.duration(), 0, PI);
        translate(width * 0.5, height * 0.7);
        rotate(angle);
        rectMode(CENTER);
        stroke(250, 250, 250)
        strokeWeight(1);
        fill(0, 0, 0, 0);
        rect(0, 0, width * 1, 5, height * 0);

        pop();

        push();
        var angle = map(sound2.currentTime(), 0, sound2.duration(), 0, PI);
        translate(width * 0.5, height * 0.8);
        rotate(angle);
        rectMode(CENTER);
        stroke(250, 250, 250)
        strokeWeight(1);
        fill(0, 0, 0, 0);
        rect(0, 0, width * 1, 5, height * 0);

        pop();

        push();
        var angle = map(sound2.currentTime(), 0, sound2.duration(), 0, PI);
        translate(width * 0.5, height * 0.9);
        rotate(angle);
        rectMode(CENTER);
        stroke(250, 250, 250)
        strokeWeight(1);
        fill(0, 0, 0, 0);
        rect(0, 0, width * 1, 5, height * 0);

        pop();

        push();
        var angle = map(sound2.currentTime(), 0, sound2.duration(), 0, PI);
        translate(width * 0.5, height * 0.4);
        rotate(angle);
        rectMode(CENTER);
        stroke(250, 250, 250)
        strokeWeight(1);
        fill(0, 0, 0, 0);
        rect(0, 0, width * 1, 5, height * 0);

        pop();

        push();
        var angle = map(sound2.currentTime(), 0, sound2.duration(), 0, PI);
        translate(width * 0.5, height * 0.3);
        rotate(angle);
        rectMode(CENTER);
        stroke(250, 250, 250)
        strokeWeight(1);
        fill(0, 0, 0, 0);
        rect(0, 0, width * 1, 5, height * 0);

        pop();

        push();
        var angle = map(sound2.currentTime(), 0, sound2.duration(), 0, PI);
        translate(width * 0.5, height * 0.2);
        rotate(angle);
        rectMode(CENTER);
        stroke(250, 250, 250)
        strokeWeight(1);
        fill(0, 0, 0, 0);
        rect(0, 0, width * 1, 5, height * 0);

        pop();

        push();
        var angle = map(sound2.currentTime(), 0, sound2.duration(), 0, PI);
        translate(width * 0.5, height * 0.1);
        rotate(angle);
        rectMode(CENTER);
        stroke(250, 250, 250)
        strokeWeight(1);
        fill(0, 0, 0, 0);
        rect(0, 0, width * 1, 5, height * 0);

        pop();


    }
    playSound(sound12, 83); // S // utilisation translate
    if (sound12.isPlaying() == true) {
        push();
        translate(width * 0, height * 0.2);
        var longueur = map(sound12.currentTime(), 0, sound12.duration(), 20, width * 1, 5);
        var hauteur = map(sound12.currentTime(), 0, sound12.duration(), height, height * 1, 5);
        fill(250);
        noStroke();
        rect(0, 150, longueur, height * 0.01);
        rect(0, 200, longueur, height * 0.01);
        rect(0, 250, longueur, height * 0.01);
        rect(0, 300, longueur, height * 0.01);
        rect(0, 350, longueur, height * 0.01);
        pop();

    }

    playSound(sound13, 68) // D //  waveform fine
    if (sound13.isPlaying() == true) {
        push();
        var waveform = sound13FFT.waveform();
        noFill();
        beginShape();
        stroke(250, 250, 250);
        strokeWeight(2);
        for (var i = 0; i < waveform.length; i++) {
            var x = map(i, 0, waveform.length, 0, width);
            var y = map(waveform[i], -1, 1, 0, height);
            curveVertex(x, y);
        }
        endShape();
        pop();
    }
    playSound(sound14, 70) // F // waveform epaisse sur un son plus long
    if (sound14.isPlaying() == true) {
        push();
        var waveform = sound14FFT.waveform();
        noFill();
        beginShape();
        stroke(250, 250, 250);
        strokeWeight(2);
        for (var i = 0; i < waveform.length; i++) {
            var x = map(i, 0, waveform.length, 0, width);
            var y = map(waveform[i], -1, 1, 0, height);
            curveVertex(x, y);
        }
        endShape();
        pop();
        push();
        var waveform = sound14FFT.waveform();
        noFill();
        beginShape();
        stroke(250, 250, 250);
        strokeWeight(12);
        for (var i = 0; i < waveform.length; i++) {
            var x = map(i, 0, waveform.length, 0, width);
            var y = map(waveform[i], -1, 1, 0, height);
            curveVertex(x, y);
        }
        endShape();
        pop();
    }
    playSound(sound15, 71)
    if (sound15.isPlaying() == true) { // G // utilisationn rotate a différentes allures sur 2 formes
        push();
        var angle = map(sound15.currentTime(), -100, sound15.duration(), -100, PI);
        translate(width, height * 0.8);
        rotate(angle);
        rectMode(CENTER);
        noStroke();
        fill(250, 250, 250);
        rect(350, 800, width * 0.2, height * 0.4);
        pop();
        push();
        var angle = map(sound15.currentTime(), 100, sound15.duration(), 300, PI);
        translate(width, height * 0.8);
        rotate(angle);
        rectMode(CENTER);
        noStroke();
        fill(250, 250, 250);
        rect(100, 900, width * 0.1, height * 0.2);
        pop();
        push();
        var angle = map(sound15.currentTime(), -100, sound15.duration(), -50, PI);
        translate(width, height * 0.8);
        rotate(angle);
        rectMode(CENTER);
        noStroke();
        fill(250, 250, 250);
        rect(100, 900, width * 0.1, height * 0.2);
        pop();

    }
    playSound(sound16, 72) // H //  rotate + grande taille + valeur PI élevé donne un effet de persistance
    if (sound16.isPlaying() == true) {
        push();
        var angle = map(sound16.currentTime(), 10, sound16.duration(), 350, PI);
        translate(width, height);
        rotate(angle);
        rectMode(CENTER);
        stroke(250, 250, 250)
        strokeWeight(5);
        fill(0, 0, 0, 0);
        rect(1200, 750, width * 2, height * 2);

        pop();

    }



    playSound(sound17, 74); // J // translate rect blanc BIG size
    if (sound17.isPlaying() == true) {
        push();
        translate(width * 0, height * 0.2);
        var longueur = map(sound17.currentTime(), 0, sound17.duration(), width, -width);
        noStroke();
        fill(250);
        rect(0, -500, longueur, height * 2);


        pop();

    }

    playSound(sound18, 75); // K // meme animation que le A avec les valeurs inversées
    if (sound18.isPlaying() == true) {
        push();
        var radius = map(sound18.currentTime(), 0, sound18.duration(), 50, width);
        strokeWeight(0.5);
        stroke(250, 250, 250);
        fill(0, 0, 0);
        ellipse(width * 0.5, height * 0.5, radius, radius);
        pop();
        push();
        var radius = map(sound18.currentTime(), 0, sound18.duration(), 50, width * 0.9);
        strokeWeight(1);
        stroke(250, 250, 250);
        fill(0, 0, 0);
        ellipse(width * 0.5, height * 0.5, radius, radius);
        pop();
        push();
        var radius = map(sound18.currentTime(), 0, sound18.duration(), 50, width * 0.8);
        strokeWeight(2);
        stroke(250, 250, 250);
        fill(0, 0, 0);
        ellipse(width * 0.5, height * 0.5, radius, radius);
        pop();
        push();
        var radius = map(sound18.currentTime(), 0, sound18.duration(), 50, width * 0.7);
        strokeWeight(4);
        stroke(250, 250, 250);
        fill(0, 0, 0);
        ellipse(width * 0.5, height * 0.5, radius, radius);
        pop();
        push();
        var radius = map(sound18.currentTime(), 0, sound18.duration(), 50, width * 0.6);
        strokeWeight(8);
        stroke(250, 250, 250);
        fill(0, 0, 0);
        ellipse(width * 0.5, height * 0.5, radius, radius);
        pop();
        push();
        var radius = map(sound18.currentTime(), 0, sound18.duration(), 50, width * 0.5);
        strokeWeight(12);
        stroke(250, 250, 250);
        fill(0, 0, 0);
        ellipse(width * 0.5, height * 0.5, radius, radius);
        pop();
        push();
        var radius = map(sound18.currentTime(), 0, sound18.duration(), 50, width * 0.4);
        strokeWeight(16);
        stroke(250, 250, 250);
        fill(0, 0, 0);
        ellipse(width * 0.5, height * 0.5, radius, radius);
        pop();
        push();
        var radius = map(sound18.currentTime(), 0, sound18.duration(), 50, width * 0.3);
        strokeWeight(20);
        stroke(250, 250, 250);
        fill(0, 0, 0);
        ellipse(width * 0.5, height * 0.5, radius, radius);
        pop();
        push();
        var radius = map(sound18.currentTime(), 0, sound18.duration(), 50, width * 0.2);
        strokeWeight(24);
        stroke(250, 250, 250);
        fill(0, 0, 0);
        ellipse(width * 0.5, height * 0.5, radius, radius);
        pop();
        push();
        var radius = map(sound18.currentTime(), 0, sound18.duration(), 50, width * 0.1);
        strokeWeight(28);
        stroke(250, 250, 250);
        fill(0, 0, 0);
        ellipse(width * 0.5, height * 0.5, radius, radius);
        pop();
    }

    playSound(sound19, 76) //random + augmentation de la taille des ellipses avec seules contours blancs
    if (sound19.isPlaying() == true) { // L //
        push()
        var t = map(sound19.currentTime(), 0, sound19.duration() * 0.75, 0, 1)
        var grey = map(sound19.currentTime(), sound19.duration() * 0.75, sound19.duration(), 255, 180)
        t = constrain(t, 0, 1)
        grey = constrain(grey, 180, 255)
        stroke(250, 250, 250);
        strokeWeight(1);
        fill(0, 0, 0, 0);
        for (var i = 0; i < 50; i++) {
            var x = lerp(xpos[i], xtarget[i], t)
            var y = lerp(ypos[i], ytarget[i], t)
            ellipse(x, y, 1050, 1050)
        }
        pop()
    }

    playSound(sound20, 77) // random tiré du cours sur le patatap colle bien avec l'univers global
    if (sound20.isPlaying() == true) { // M //
        push()
        var t = map(sound20.currentTime(), 0, sound20.duration() * 0.75, 0, 1)
        var grey = map(sound20.currentTime(), sound20.duration() * 0.75, sound20.duration(), 255, 180)
        t = constrain(t, 0, 1)
        grey = constrain(grey, 180, 255)
        fill(0, 0, 0, 0);
        stroke(250, 250, 250);
        strokeWeight(100);
        fill(0)
        for (var i = 0; i < 50; i++) {
            var x = lerp(xpos[i], xtarget[i], t)
            var y = lerp(ypos[i], ytarget[i], t)
            ellipse(x, y, 50, 50)
        }
        pop()
    }

    playSound(sound21, 87) // W //
    if (sound21.isPlaying() == true) {
        push();
        var rad = map(sound21.currentTime(), 0, sound21.duration(), 10, width);
        stroke(250, 250, 250);
        strokeWeight(40)
        noFill();
        rectMode(CENTER)
        rect(width * 0.25, height * 0.25, rad * 2, rad);
        pop();

        push();
        var rad = map(sound21.currentTime(), 0, sound21.duration(), 10, width);
        stroke(250, 250, 250)
        strokeWeight(40)
        noFill();
        rectMode(CENTER)
        rect(width * 0.25, height * 0.75, rad * 2, rad);
        pop();

        push();
        var rad = map(sound21.currentTime(), 0, sound21.duration(), 10, width);
        stroke(250, 250, 250)
        strokeWeight(40)
        noFill();
        rectMode(CENTER)
        rect(width * 0.75, height * 0.25, rad * 2, rad);
        pop();

        push();
        var rad = map(sound21.currentTime(), 0, sound21.duration(), 10, width);
        stroke(250, 250, 250)
        strokeWeight(40)
        noFill();
        rectMode(CENTER)
        rect(width * 0.75, height * 0.75, rad * 2, rad);
        pop();
    }

    playSound(sound22, 88) // X //
    if (sound22.isPlaying() == true) {
        push();
        var rad = map(sound22.currentTime(), 0, sound22.duration(), width, 10);
        stroke(250, 250, 250);
        strokeWeight(4)
        noFill();
        rectMode(CENTER)
        rect(width * 0.25, height * 0.25, rad * 2, rad);
        pop();
        push();
        var rad = map(sound22.currentTime(), 0, sound22.duration(), width, 10);
        stroke(250, 250, 250)
        strokeWeight(4)
        noFill();
        rectMode(CENTER)
        rect(width * 0.25, height * 0.75, rad * 2, rad);
        pop();

        push();
        var rad = map(sound22.currentTime(), 0, sound22.duration(), width, 10);
        stroke(250, 250, 250)
        strokeWeight(4)
        noFill();
        rectMode(CENTER)
        rect(width * 0.75, height * 0.25, rad * 2, rad);
        pop();

        push();
        var rad = map(sound22.currentTime(), 0, sound22.duration(), width, 10);
        stroke(250, 250, 250)
        strokeWeight(4)
        noFill();
        rectMode(CENTER)
        rect(width * 0.75, height * 0.75, rad * 2, rad);
        pop();
    }


    playSound(sound23, 67); // C //
    if (sound23.isPlaying() == true) {
        push();
        var rms = sound23Amp.getLevel();
        var ellipseSize = map(rms, 0, 1, 50, 800);
        var ellipseAlpha = map(rms, 0, 1, 90, 600); // rms est compris entre 0 et 1 et nous voulons une valeur comprise entre 5O et 800 pour controller la transparence
        stroke(250, 250, 250);
        strokeWeight(1);
        fill(0, 0, 0);
        ellipse(width * 0.8, height * 0.5, ellipseSize, ellipseSize);


        pop();

        push();
        var rms = sound23Amp.getLevel();
        var ellipseSize = map(rms, 0, 1, 100, 800);
        var ellipseAlpha = map(rms, 0, 1, 450, 1000); // rms est compris entre 0 et 1 et nous voulons une valeur comprise entre 5O et 800 pour controller la transparence
        stroke(250, 250, 250);
        strokeWeight(1);
        fill(0, 0, 0);
        ellipse(width * 0.3, height * 0.5, ellipseSize, ellipseSize);


        pop();

        push();
        var rms = sound23Amp.getLevel();
        var ellipseSize = map(rms, 0, 1, 50, 900);
        var ellipseAlpha = map(rms, 0, 1, 900, 600); // rms est compris entre 0 et 1 et nous voulons une valeur comprise entre 5O et 800 pour controller la transparence
        stroke(250, 250, 250);
        strokeWeight(1);
        fill(0, 0, 0);
        ellipse(width * 0.1, height * 0.75, ellipseSize, ellipseSize);


        pop();

        push();
        var rms = sound23Amp.getLevel();
        var ellipseSize = map(rms, 0, 1, 50, 900);
        var ellipseAlpha = map(rms, 0, 1, 900, 600); // rms est compris entre 0 et 1 et nous voulons une valeur comprise entre 5O et 800 pour controller la transparence
        stroke(250, 250, 250);
        strokeWeight(1);
        fill(0, 0, 0);
        ellipse(1200, 700, ellipseSize, ellipseSize);


        pop();

        push();
        var rms = sound23Amp.getLevel();
        var ellipseSize = map(rms, 0, 1, 50, 900);
        var ellipseAlpha = map(rms, 0, 1, 900, 600); // rms est compris entre 0 et 1 et nous voulons une valeur comprise entre 5O et 800 pour controller la transparence
        stroke(250, 250, 250);
        strokeWeight(1);
        fill(0, 0, 0);
        ellipse(800, 200, ellipseSize, ellipseSize);


        pop();

        push();
        var rms = sound23Amp.getLevel();
        var ellipseSize = map(rms, 0, 1, 50, 900);
        var ellipseAlpha = map(rms, 0, 1, 900, 600); // rms est compris entre 0 et 1 et nous voulons une valeur comprise entre 5O et 800 pour controller la transparence
        stroke(250, 250, 250);
        strokeWeight(1);
        fill(0, 0, 0);
        ellipse(width * 0.5, height * 0.5, ellipseSize, ellipseSize);


        pop();

        push();
        var rms = sound23Amp.getLevel();
        var ellipseSize = map(rms, 0, 1, 50, 900);
        var ellipseAlpha = map(rms, 0, 1, 900, 600); // rms est compris entre 0 et 1 et nous voulons une valeur comprise entre 5O et 800 pour controller la transparence
        stroke(250, 250, 250);
        strokeWeight(1);
        fill(0, 0, 0);
        ellipse(200, height * 200, ellipseSize, ellipseSize);


        pop();
    }
    playSound(sound24, 86) // V //
    if (sound24.isPlaying() == true) {
        push()
        var nsegment = 500
        var ncurrentsegment = (map(sound24.currentTime(), 0, sound24.duration(), 0, nsegment + 1))
        for (var i = 0; i < ncurrentsegment; i++) {
            stroke(250);
            strokeWeight(15)
            var angle = map(i, 0, nsegment, 0, TWO_PI);
            var x = width * 0.2 + height * 0.2 * cos(angle);
            var y = height * 0.2 + height * 0.2 * sin(angle);
            line(width * 0.5, height * 0.5, x, y);
        }
        pop()
        push()
        var nsegment = 600
        var ncurrentsegment = (map(sound24.currentTime(), 0, sound24.duration(), 0, nsegment + 1))
        for (var i = 0; i < ncurrentsegment; i++) {
            stroke(250);
            strokeWeight(5)
            var angle = map(i, 0, nsegment, 0, TWO_PI);
            var x = width * 0.5 + height * 0.5 * cos(angle);
            var y = height * 0.5 + height * 0.45 * sin(angle);
            line(1100, 500, x, y);
        }
        pop()
    }


    playSound(sound25, 66); // B //
    if (sound25.isPlaying() == true) {
        push();
        var rms = sound25Amp.getLevel();
        var ellipseSize = map(rms, 0, 1, 500, 40);
        var ellipseAlpha = map(rms, 0, 1, 900, 900); // rms est compris entre 0 et 1 et nous voulons une valeur comprise entre 5O et 800 pour controller la transparence
        fill(250, 250, 250);
        noStroke();
        ellipse(width * 0.5, height * 0.5, ellipseSize, ellipseSize);


        pop();

        push();
        var rms = sound25Amp.getLevel();
        var ellipseSize = map(rms, 0, 1, 250, 120);
        var ellipseAlpha = map(rms, 0, 1, 50, 800); // rms est compris entre 0 et 1 et nous voulons une valeur comprise entre 5O et 800 pour controller la transparence
        fill(0, 0, 0);
        stroke(250, 250, 250);
        strokeWeight(40);
        ellipse(width * 0.5, height * 0.5, ellipseSize, ellipseSize);


        pop();

        push();
        var rms = sound25Amp.getLevel();
        var ellipseSize = map(rms, 0, 1, 100, 120);
        var ellipseAlpha = map(rms, 0, 1, 50, 800);
        fill(0, 0, 0);
        stroke(250, 250, 250);
        strokeWeight(25);
        ellipse(width * 0.5, height * 0.5, ellipseSize, ellipseSize);


        pop();

        push();
        var rms = sound25Amp.getLevel();
        var ellipseSize = map(rms, 0, 1, 50, 120);
        var ellipseAlpha = map(rms, 0, 1, 50, 800);
        fill(0, 0, 0);
        stroke(250, 250, 250);
        strokeWeight(15);
        ellipse(width * 0.5, height * 0.5, ellipseSize, ellipseSize);
        pop();

        push();
        var rms = sound25Amp.getLevel();
        var ellipseSize = map(rms, 0, 1, 10, 120);
        var ellipseAlpha = map(rms, 0, 1, 50, 800);
        fill(0, 0, 0);
        stroke(250, 250, 250);
        strokeWeight(5);
        ellipse(width * 0.5, height * 0.5, ellipseSize, ellipseSize);
        pop();
    }

    playSound(sound26, 78) // N //
    if (sound26.isPlaying() == true) {

        push()
        var nsegment = 96
        var ncurrentsegment = (map(sound26.currentTime(), 0, sound26.duration(), 0, nsegment + 1))
        for (var i = 0; i < ncurrentsegment; i++) {
            stroke(250);
            strokeWeight(1)
            var angle = map(i, 0, nsegment, 0, TWO_PI);
            var x = width * 0.5 + height * 0.45 * cos(angle);
            var y = height * 0.5 + height * 0.45 * sin(angle);
            line(width * 0.75, height * 0.25, x, y);
        }
        pop()
        push()
        var nsegment = 96
        var ncurrentsegment = (map(sound26.currentTime(), 0, sound26.duration(), 0, nsegment + 1))
        for (var i = 0; i < ncurrentsegment; i++) {
            stroke(250);
            strokeWeight(1)
            var angle = map(i, 0, nsegment, 0, TWO_PI);
            var x = width * 0.5 + height * 0.45 * cos(angle);
            var y = height * 0.5 + height * 0.45 * sin(angle);
            line(width * 0.25, height * 0.75, x, y);
        }
        pop()
    }




    playSound(sound2, 90);
    playSound(sound3, 69);
    playSound(sound4, 82);
    playSound(sound5, 84);
    playSound(sound6, 89);
    playSound(sound7, 85);
    playSound(sound8, 73);
    playSound(sound9, 79);
    playSound(sound10, 80);
    playSound(sound11, 81);
    playSound(sound12, 83);
    playSound(sound13, 68);
    playSound(sound14, 70);
    playSound(sound15, 71);
    playSound(sound16, 72);
    playSound(sound17, 74);
    playSound(sound18, 75);
    playSound(sound19, 76);
    playSound(sound20, 77);
    playSound(sound21, 87);
    playSound(sound22, 88);
    playSound(sound23, 67);
    playSound(sound24, 86);
    playSound(sound25, 66);
    playSound(sound26, 78);
}

/*if (keyIsDown(90) == true) {
        if (sound2.isPlaying() == false) {
            sound2.play();
        }
    }*/


function playSound(sound, keyId) {
    if (keyIsDown(keyId) == true) {
        if (sound.isPlaying() == false) {
            sound.play();
        }
    }
}
// put drawing code here



function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    background(0); //windowWidth, windowHeight=dimensions de la fenêtre
}

var sound1;
var sound2;
var sound3;
var sound4;
var sound4FFT;
var sound5;
var sound5FFT;
var waveform;
var sound6;
var sound6Amp;
var sound7;
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
var sound15FFT;
var sound16;
var sound17;
var sound18;
var sound19;
var sound20;
var sound21;
var sound22;
var sound23;
var sound24;
var sound25;
var sound26;
var sound26FFT;


var xpos = []
var ypos = []
var xtarget = []
var ytarget = []
var pg

var maxCircleSize = 150;
var phase = 50,
    speed = 0.03;
var numRows = 10;
var numCols = 10;

var numStrands;
var colorA;
var colorB;

var xposS = 0
var yposS = 0
var xdirS = 5
var ydirS = 5

var diameter;
var angle1 = 0;
var angle2 = 0;

var a = 0.0;
var s = 0.0;

var a1;

let snowflakes = []; // array to hold snowflake objects



function playSound(sound, keyId) { // deux paramètres : son et numéro de touche
    if (keyIsDown(keyId) == true) {
        if (sound.isPlaying() == false) {
            sound.play(); // si deux paramètre son bon, enclencher la lecture du son
        }
    }
}

function preload() { // charger les éléments (ici les son)
    sound1 = loadSound("assets/1.mp3")
    sound2 = loadSound("assets/2.mp3")
    sound3 = loadSound("assets/3.mp3")
    sound4 = loadSound("assets/4.mp3")
    sound5 = loadSound("assets/5.mp3")
    sound6 = loadSound("assets/18.mp3")
    sound7 = loadSound("assets/7.mp3")
    sound8 = loadSound("assets/17.mp3")
    sound9 = loadSound("assets/12.mp3")
    sound10 = loadSound("assets/10.mp3")
    sound11 = loadSound("assets/11.mp3")
    sound12 = loadSound("assets/9.mp3")
    sound13 = loadSound("assets/13.mp3")
    sound14 = loadSound("assets/14.mp3")
    sound15 = loadSound("assets/15.mp3")
    sound16 = loadSound("assets/26.mp3")
    sound17 = loadSound("assets/6.mp3")
    sound18 = loadSound("assets/8.mp3")
    sound19 = loadSound("assets/19.mp3")
    sound20 = loadSound("assets/20.mp3")

    sound21 = loadSound("   assets/21.mp3")
    sound22 = loadSound("   assets/22.mp3")
    sound23 = loadSound("   assets/23.mp3")
    sound24 = loadSound("   assets/24.mp3")
    sound25 = loadSound("   assets/25.mp3")
    sound26 = loadSound("   assets/16.mp3")
}

function setup() { // initialiser les valeurs ou créer des éléments de page web

    createCanvas(windowWidth, windowHeight); // dimensions de la fenetre du navigateur
    background(0);

    sound4FFT = new p5.FFT(0.8, 1024) // analyse fréquence de notre son
    sound4FFT.setInput(sound4) // branche l'analyseur à au son (ici sound4)

    sound5FFT = new p5.FFT(0.8, 1024)
    sound5FFT.setInput(sound5)

    sound13FFT = new p5.FFT(0.8, 1024)
    sound13FFT.setInput(sound13)

    sound14FFT = new p5.FFT(0.9, 2048)
    sound14FFT.setInput(sound14)


    sound15FFT = new p5.FFT(0.8, 1024)
    sound15FFT.setInput(sound15)

    sound26FFT = new p5.FFT(0.9, 2048)
    sound26FFT.setInput(sound26)


    createCanvas(windowWidth, windowHeight);
    pixelDensity(1)

    // créer le calque à la taille de la fenêtre
    pg = createGraphics(windowWidth, windowHeight)
    pg.pixelDensity(1)

    sound6Amp = new p5.Amplitude()
    sound6Amp.setInput(sound6)

    for (var i = 0; i < 50; i++) {
        // ajouter des éléments au dessus de notre canvas
        xpos.push(random(0, width))
        ypos.push(random(0, -height))
        // ajouter des éléments à l'intérieur de notra canvas
        xtarget.push(random(width))
        ytarget.push(random(height))
        // random : nombre aléatoire
    }


    a1 = height / 2;
}

function draw() {
    background(0); // couleur arrière plan

    playSound(sound6, 89) // Y > si la touche est enclencher
    if (sound6.isPlaying() == true) { // si le son joue lance l'animation
        push() // nouveau référenciel de style qui n'es affecté que à la touche (ici Y)
        var amp = sound6Amp.getLevel() // l'anaylseur obtien un niveau sonore et le stock dans une variable Amp
        var whiteLevel = map(amp, 0, 1, 250, 255) // > font écran passe du blanc au noir(teinte controler en fonction du son qui joue.)
        noStroke() // pas de contour de forme
        fill(whiteLevel) // couleur
        rect(0, 0, width, height) // dessiner un rectangle (taille, positionnement par rapport à la fenetre)
        pop()
    }

    playSound(sound14, 76) // L
    if (sound14.isPlaying() == true) {
        push()
        sound14FFT.analyze(); // analyse : analyseur de volume

        rectMode(CENTER);
        var nrj1 = sound14FFT.getEnergy("bass")
        var long = map(sound14.currentTime(), 500, sound14.duration(), 500, width)
        rectMode(CENTER)
        fill(255)
        rect(100, 700, nrj1, long, 200)
        noStroke()
        pop();

        push()
        rectMode(CENTER)
        fill(255)
        rect(0, 700, nrj1, long, 200)
        noStroke()
        pop();

        push()
        rectMode(CENTER)
        fill(255)
        rect(200, 700, nrj1, long, 200)
        noStroke()
        pop();

        push()
        rectMode(CENTER)
        fill(255)
        rect(300, 700, nrj1, long, 200)
        noStroke()
        pop();


        push()
        rectMode(CENTER)
        fill(255)
        rect(400, 700, nrj1, long, 200)
        noStroke()
        pop();

        push()
        rectMode(CENTER)
        fill(255)
        rect(500, 700, nrj1, long, 200)
        noStroke()
        pop();

        push()
        rectMode(CENTER)
        fill(255)
        rect(600, 700, nrj1, long, 200)
        noStroke()
        pop();

        push()
        rectMode(CENTER)
        fill(255)
        rect(700, 700, nrj1, long, 200)
        noStroke()
        pop();

        push()
        rectMode(CENTER)
        fill(255)
        rect(800, 700, nrj1, long, 200)
        noStroke()
        pop();

        push()
        rectMode(CENTER)
        fill(255)
        rect(900, 700, nrj1, long, 200)
        noStroke()
        pop();

        push()
        rectMode(CENTER)
        fill(255)
        rect(1000, 700, nrj1, long, 200)
        noStroke()
        pop();

        push()
        rectMode(CENTER)
        fill(255)
        rect(1100, 700, nrj1, long, 200)
        noStroke()
        pop();

        push()
        rectMode(CENTER)
        fill(255)
        rect(1200, 700, nrj1, long, 200)
        noStroke()
        pop();

        push()
        rectMode(CENTER)
        fill(255)
        rect(1300, 700, nrj1, long, 200)
        noStroke()
        pop();

        push()
        rectMode(CENTER)
        fill(255)
        rect(1400, 700, nrj1, long, 200)
        noStroke()
        pop();

        push()
        rectMode(CENTER)
        fill(255)
        rect(1500, 700, nrj1, long, 200)
        noStroke()
        pop();
    }

        playSound(sound18, 75) // K
    if (sound18.isPlaying() == true) {
        push()
        phase = 6;
        speed = 0.1;
        maxCircleSize = 100;
        numRows = 40;
        numCols = 40;
        numStrands = 15;

        colorA = color(09, 226, 212, 80);
        colorB = color(09, 226, 212, 80);
        phase = frameCount * speed;

        for (var strand = 10; strand < numStrands; strand += 1) {
            var strandPhase = phase + map(strand, 0, numStrands, 0, TWO_PI);

            for (var col = 0; col < numCols; col += 1) {
                var colOffset = map(col, 0, numCols, 0, TWO_PI);
                var x = map(col, 0, numCols, 10, width - 50);

                for (var row = 0; row < numRows; row += 1) {
                    var y = height / 1.5 + row * 10 + sin(strandPhase + colOffset) * 50;
                    var sizeOffset = (cos(strandPhase - (row / numRows) + colOffset) + 1) * 0.5;
                    var circleSize = sizeOffset * maxCircleSize;

                    fill(lerpColor(colorA, colorB, row / numRows));
                    noStroke();

                    ellipse(x, y, circleSize, circleSize);

                }
            }
        }

        pop()
    }

        playSound(sound26, 74) // J
    if (sound26.isPlaying() == true) {
        push()

        sound26FFT.analyze();
        rectMode(CENTER);
        var nrj1 = sound26FFT.getEnergy("bass")

        push()
        fill(99, 237, 40, nrj1)
        noStroke()
        translate(width * 0.25, height * 0.5)
        rotate(PI / 4)
        rect(0, 0, width * 0.5, width * 0.5)
        pop()

        push()
        fill(99, 237, 40)
        noStroke()
        translate(width * 0.5, height * 0.5)
        rotate(PI / 4)
        rect(0, 0, nrj1, nrj1)
        pop()

        push()
        fill(99, 237, 40, nrj1)
        noStroke()
        translate(width * 0.75, height * 0.5)
        rotate(PI / 4)
        rect(0, 0, width * 0.5, width * 0.5)
        pop()


        pop()
    }

    playSound(sound1, 65) // A
    if (sound1.isPlaying() == true) {
        push();
        var rad = map(sound1.currentTime(), 0, sound1.duration(), 50, width) // currentTime : position de la tete de lecture. Duration : durée total du son
        fill(149, 50, 255)
        noStroke()
        ellipse(width * 0.5, height * 0.5, rad, rad) // dessiner un cercle
        pop();
    }

    playSound(sound2, 90) // Z
    if (sound2.isPlaying() == true) {
        push();
        translate(width * 0.5, height * 0.5); // coordonnée du point vers lequel on veux ce déplacé
        var ang = map(sound2.currentTime(), 0, sound2.duration(), 0, PI) // rotations(radians) : de 0 à PI pour un demi tour
        rectMode(CENTER) // rectangle au centre donc peu touré sur lui meme à partir du centre et non d'un de ces angles.
        rotate(ang) // rotation autour du notre repère
        fill(255, 208, 81)
        noStroke()
        rect(0, 0, width * 0.25, height * 0.5)
        pop();
    }

    playSound(sound3, 69) // E
    if (sound3.isPlaying() == true) {
        push();
        translate(width * 0.5, height * 0.5);
        var ang = map(sound3.currentTime(), 0, sound2.duration(), 0, PI)
        rectMode(CENTER)
        rotate(ang)
        fill(226, 27, 9)
        noStroke()
        rect(0, 0, width * 0.5, height * 0.05)
        pop();

    }

    playSound(sound4, 82) // R
    if (sound4.isPlaying() == true) {
        push()
        sound4FFT.analyze();
        rectMode(CENTER);
        var nrj1 = sound4FFT.getEnergy("bass") // L'énergie sera comprise entre 0 et 255.

        push()
        fill(09, 226, 212, nrj1) // 4émé chiffre : transparence
        noStroke()
        translate(width * 0.25, height * 0.5)
        rotate(PI / 4)
        rect(0, 0, width * 0.2, width * 0.2)
        pop()

        push()
        fill(9, 226, 212, 50)
        noStroke()
        translate(width * 0.5, height * 0.5)
        rotate(PI / 4)
        rect(0, 0, nrj1, nrj1)
        pop()

        push()
        fill(9, 226, 212, nrj1)
        noStroke()
        translate(width * 0.75, height * 0.5)
        rotate(PI / 4)
        rect(0, 0, width * 0.2, width * 0.2)
        pop()

        pop()


    }

    playSound(sound5, 84) // T
    if (sound5.isPlaying() == true) {
        push()
        var waveform = sound5FFT.waveform(); // variable : tableau de 1024 entre -1 et 1.
        noFill();

        beginShape(); // commencer à dessiner une forme, dont les vertex seront lié 2 à 2
        stroke(54, 18, 232);
        strokeWeight(10);
        for (var i = 0; i < waveform.length; i++) { // parcourir tableau et trouver valeur pour dessiner une courbe
            var x = map(i, 0, waveform.length, 0, width); // calccul d'une abscisse dépendante de i
            var y = map(waveform[i], -1, 1, 0, height); // calccul d'une ordonnée dépendante de i
            curveVertex(x, y); // lier coordonées entre elle (abscisse et ordonnée) > ajoute coordonnées à notre courbe

        }
        endShape(); // forme finie
        pop()
    }




    playSound(sound7, 85) // U
    if (sound7.isPlaying() == true) {
        push()
        var nsegment = 80 // nombre de segment à fixer
        var ncurrentsegment = (map(sound7.currentTime(), 0, sound7.duration(), 0, nsegment + 1))
        for (var i = 0; i < ncurrentsegment; i++) {
            stroke(149, 50, 255);
            strokeWeight(4);
            var angle = map(i, 0, nsegment, 0, TWO_PI); // crée rayon
            var x = width * 0.5 + height * 0.45 * cos(angle); // rayon de cercle a parcourir
            var y = height * 0.5 + height * 0.45 * sin(angle); // rayon de cercle a parcourir
            line(width * 0.5, height * 0.5, x, y); // centre du cercle

        }
        pop()
    }

    playSound(sound8, 73) // I
    if (sound8.isPlaying() == true) {
        push()
        fill(99, 237, 40)
        noStroke()
        for (var i = 0; i < 9; i++) { // affiche 9 formes(valeur)

            var y = int(i / 3) * height * 0.25 + height * 0.25 // diviser hauteur fenetre par 3
            var x = (i % 3) * width * 0.25 + width * 0.25 // diviser largeur fenetre par 3
            ellipse(x, y, 50, 50); // crée les élipse selon la position et les valeurs

        }

        pop()
    }


    playSound(sound9, 79) // O
    if (sound9.isPlaying() == true) {

        push()
        var t = map(sound9.currentTime(), 0, sound9.duration() * 0.75, 0, 1)
        var grey = map(sound9.currentTime(), sound9.duration() * 0.75, sound9.duration(), 255, 180)
        t = constrain(t, 0, 1)
        grey = constrain(grey, 0, 0)
        noStroke()
        fill(255)
        for (var i = 0; i < 50; i++) {
            var x = lerp(xpos[i], xtarget[i], t) // lerp : calcule valeur entre 2 autre.
            var y = lerp(ypos[i], ytarget[i], t)
            ellipse(x, y, 50, 50)
        }
        pop()
    }

    playSound(sound10, 80) // P
    if (sound10.isPlaying() == true) {
        push()
        var nsegment = 80
        var ncurrentsegment = (map(sound10.currentTime(), 0, sound10.duration(), 0, nsegment + 1))
        for (var i = 0; i < ncurrentsegment; i++) {
            stroke(09, 226, 212);
            strokeWeight(2)
            fill(0, 0)
            var angle = map(i, 0, nsegment, 0, TWO_PI);
            var x = width * 0.3 + height * 0.45 * cos(angle);
            var y = height * 0.3 + height * 0.45 * sin(angle);
            ellipse(width * 0.5, height * 0.5, x, y);

        }
        pop()
    }



    playSound(sound11, 66) // B
    if (sound11.isPlaying() == true) {
        push()
        var nsegment = 80
        var ncurrentsegment = (map(sound11.currentTime(), 0, sound11.duration(), 0, nsegment + 1))
        for (var i = 0; i < ncurrentsegment; i++) {
            noStroke();
            strokeWeight(2)
            fill(99, 237, 40, 50)
            var angle = map(i, 0, nsegment, 0, TWO_PI);
            var x = width * 0.1 + height * 0.35 * cos(angle);
            var y = height * 0.1 + height * 0.35 * sin(angle);
            rect(width * 0.4, height * 0.4, x, y);

        }
        pop()
    }

    playSound(sound12, 83) // S
    if (sound12.isPlaying() == true) {
        push()

        xposS += xdirS // ajouté la quantité de déplacement à la position actuelle : se déplacer
        yposS += ydirS

        if (xposS > width || xposS < 0) {
            xdirS *= -1
        }
        if (yposS > height || yposS < 0) { // inverser le déplacement si la position est en dehors de la fenetre.
            ydirS *= -1
        }
// xposS et yposS : position de l'ellipse en x et y
// xdir et ydir : quantité déplacement en x et y

        pg.noStroke() // dessiner ellipse dans notre calque
        pg.fill(226, 27, 9)
        pg.ellipse(xposS, yposS, 20, 20)
        image(pg, 0, 0, width, height) // afficher le calque


        pop()

    } else {
        pg = createGraphics(windowWidth, windowHeight)
        pg.pixelDensity(1)
        xposS = random(width) // ne commence jamais au meme endroit
        yposS = random(height)
        xdirS = random(1, 7)
        ydirS = random(1, 7)
    }


    playSound(sound13, 68) // D
    if (sound13.isPlaying() == true) {
        push()
        sound13FFT.analyze();

        rectMode(CENTER);
        var nrj1 = sound13FFT.getEnergy("bass")
        var long = map(sound13.currentTime(), 0, sound13.duration(), 0, width)
        // rectangle va de bas en haut et vibre(grossis) en fonction de la fréquence (grace à "analyse")
        rectMode(CENTER)
        fill(99, 237, 40)
        rect(200, 800, nrj1, long, 2000)
        noStroke()
        pop();


        push()
        rectMode(CENTER)
        fill(99, 237, 40)
        rect(1300, 800, nrj1, long, 2000)
        noStroke()
        pop();

        push()
        rectMode(CENTER)
        fill(99, 237, 40, 50)
        rect(780, 800, nrj1, long, 2000)
        noStroke()
        pop();


    }


    playSound(sound15, 71) // G
    if (sound15.isPlaying() == true) {
        push()
        var waveform = sound15FFT.waveform();
        fill(250, 50, 30);

        beginShape();
        stroke(250, 50, 30);
        strokeWeight(80);
        for (var i = 0; i < waveform.length; i++) {
            var x = map(i, 5, waveform.length, 5, width);
            var y = map(waveform[i], -1, 1, 0, height);
            curveVertex(x, y);

        }
        endShape();
        pop()
    }

    playSound(sound16, 72) // H >
    if (sound16.isPlaying() == true) {
        push()
        var phase = 0,
            speed = 0.03; //vitesse

        var x = width / 2;
        var y = height / 2 + sin(phase) * 50;
        phase = frameCount * speed; // frameCount compte le nombre de frame
        fill(50, 50, 50, 1)
        stroke(250, 50, 50);
        strokeWeight(80);
        ellipse(x, y, 400, 400);
        var sizeOffset = (cos(phase) + 1) * 0.5; //variation du cos
        var circleSize = sizeOffset * maxCircleSize;
        fill(0)
        stroke(149, 50, 255);
        strokeWeight(300);
        ellipse(x, y, circleSize, circleSize);
        pop()

    }


    playSound(sound17, 78) // N
    if (sound17.isPlaying() == true) {
        push()
        phase = 0;
        speed = 0.03;
        maxCircleSize = 50; // taille de cercle maximun
        numRows = 10; // nombre de rangé
        numCols = 16;
        numStrands = 2;
        noStroke()

        colorA = color(54, 18, 232);
        colorB = color(149, 50, 255);
        phase = frameCount * speed;

        for (var strand = 0; strand < numStrands; strand += 1) {
            var strandPhase = phase + map(strand, 0, numStrands, 0, TWO_PI);

            for (var col = 0; col < numCols; col += 1) {
                var colOffset = map(col, 0, numCols, 0, TWO_PI);
                var x = map(col, 0, numCols, 50, width - 50);

                for (var row = 0; row < numRows; row += 1) {
                    var y = height / 2 + row * 10 + sin(strandPhase + colOffset) * 50;
                    var sizeOffset = (cos(strandPhase - (row / numRows) + colOffset) + 1) * 0.5;
                    var circleSize = sizeOffset * maxCircleSize;

                    fill(lerpColor(colorA, colorB, row / numRows)); // "dégradé de couleur"
                    ellipse(x, y, circleSize, circleSize);
                }
            }
        }

    }



    playSound(sound19, 70) // F >
    if (sound19.isPlaying() == true) {

        push()
        let angle = 0.0;
        let jitter = 0.0;

        if (second() % 2 == 0) {    // pendant les seconde paire(2, 4, 6...) ajouté des vibrations/tremblements (jitter) à la rotation
            jitter = random(-1, 1);
        }
        // augmente la valeur de l'angle en utilisant le valeur jitter la plus récente
        angle = angle + jitter;
        var c = cos(angle);
        translate(width / 2, height / 2); // déplace le forme au centre de la toile
        rotate(c); // rotation final
        fill(255)
        noStroke();
        rectMode(CENTER)
        rect(0, 0, 300, 300);



        pop()
    }


    playSound(sound20, 77) // M

    if (sound20.isPlaying() == true) {
        push()
        diameter = height - 5

        var d1 = 10 + (sin(angle2) * diameter / 2) + diameter / 2;
        var d2 = 10 + (sin(angle2 + PI / 2) * diameter / 2) + diameter / 2;
        var d3 = 10 + (sin(angle2 + PI) * diameter / 2) + diameter / 2;
        // crée 3 variable d1, d2, d3, augmenter/diviser son diamètre
        noStroke();
        fill(255, 208, 81)

        fill(255, 208, 81)
        ellipse(0, height / 2, d1, d1);

        fill(255, 208, 81)
        ellipse(width / 2, height / 2, d2, d2);


        fill(255, 208, 81)
        ellipse(width, height / 2, d3, d3);

        angle2 += 10;
        pop()
    }

    playSound(sound21, 87) // W
    if (sound21.isPlaying() == true) {
        push()

   //  augmenter a puis animer s en trouvant le cosinus de a
        a = a + 0.04;
        s = cos(a) * 2;
        translate(width / 2, height / 2); // déplacer rectangle de son positionnement initiale jusqu'au milieu.
        rectMode(CENTER)
        scale(s); // redimentionner avec le s
        fill(54, 18, 232);
        noStroke()
        rect(0, 0, 100, 100);
// cycle de gauche à droite
        translate(75, 0);
        fill(09, 226, 212);
        scale(s);
        rect(0, 0, 100, 100);
        pop()
    }

    playSound(sound22, 88) // X
    if (sound22.isPlaying() == true) {


        push();
        fill(255, 64, 50)
        noStroke()
        translate(width * 0.2, height * 0.5);
        rotate(frameCount / 200.0);
        star(0, 0, 5, 70, 3);
        pop();

        push();
        fill(255, 208, 81)
        noStroke()
        translate(width * 0.5, height * 0.5);
        rotate(frameCount / 50.0);
        star(0, 0, 80, 400, 40);
        pop();

        push();
        fill(255, 64, 50)
        noStroke()
        translate(width * 0.8, height * 0.5);
        rotate(frameCount / -100.0);
        star(0, 0, 5, 70, 3);
        pop();
    }

    function star(x1, y1, radius1, radius2, npoints) {
        var angle = TWO_PI / npoints;
        var halfAngle = angle / 2.0;
        beginShape();
        for (var a = 0; a < TWO_PI; a += angle) {
            var sx = x1 + cos(a) * radius2;
            var sy = y1 + sin(a) * radius2;
            vertex(sx, sy);
            sx = x1 + cos(a + halfAngle) * radius1;
            sy = y1 + sin(a + halfAngle) * radius1;
            vertex(sx, sy);
        }
        endShape(CLOSE);
    }


    playSound(sound23, 67) // C
    if (sound23.isPlaying() == true) {

        push()

        stroke(255)
        strokeWeight(25)
        line(0, a1, width, a1);
        a1 = a1 - 5;
        if (a1 < 0) {
            a1 = height;
        }
// ligne horitontal monte et recommance en bas de la fenetre en 0
        pop()
    }


    playSound(sound24, 86) // V
    if (sound24.isPlaying() == true) {

        push()
        fill(255)
        let t = frameCount / 60;
        // cré un nb de flocon aléatoire
        for (var i = 0; i < random(5); i++) {
            snowflakes.push(new snowflake()); // ajouté un flocon de neige (objet)
        for (let flake of snowflakes) {
            flake.update(t); // réactualiser position des flocon de neige
            flake.display(); // dessiner flocon de neige
        }
        pop()
    }
    }

    function snowflake() {
        // réinitialiser les coordonnées (x, y)
        this.posssX = 0;
        this.posssY = random(-50, 0);
        this.initialangle = random(0, 2 * PI);
        this.size = random(2, 5);

       // répartir les flocon uniformément
        this.radius = sqrt(random(pow(width / 2, 2)));

        this.update = function (time) {
            // position x suit un cercle
            let w = 0.6; // vitesss angulaire
            let angle = w * time + this.initialangle;
            this.posssX = width / 2 + this.radius * sin(angle);

          //  les differents flocon tome avec une vitesse différente
            this.posssY += pow(this.size, 0.5);

            // delete snowflake if past end of screen
            if (this.posssY > height) {
                let index = snowflakes.indexOf(this);
                snowflakes.splice(index, 1);
            }
        };

        this.display = function () {
            ellipse(this.posssX, this.posssY, this.size);
        };
    }



    playSound(sound25, 81) // Q

    if (sound25.isPlaying() == true) {
        push()
        fill(255, 208, 81);
        stroke(255, 208, 81);
        translate(200, 200); // positionnement sur l'écran
        noStroke();
        for (var i = 0; i < 10; i++) {
            ellipse(10, 50, 20, 80);
            rotate(PI / 5);
        }

        fill(255, 208, 81);
        stroke(255, 208, 81);
        translate(1100, 300);
        noStroke();
        for (var i = 0; i < 10; i++) {
            ellipse(0, 30, 20, 80);
            rotate(PI / 5);
        }


        pop()
    }



}


function windowResized() {
    resizeCanvas(windowWidth, windowHeight);

}

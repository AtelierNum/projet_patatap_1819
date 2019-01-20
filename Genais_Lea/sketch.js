var soundA, soundB, soundC, soundD, soundE, soundF, soundG, soundH, soundI, soundJ, soundK, soundL, soundM, soundN,
    soundO, soundP, soundQ, soundR, soundS, soundT, soundU, soundV, soundW, soundX, soundY, soundZ;

var soundAAmp, soundBAmp, soundCAmp, soundDAmp, soundEAmp, soundFAmp, soundGAmp, soundHAmp, soundIAmp, soundJAmp,
    soundKAmp, soundLAmp, soundMAmp, soundNAmp,
    soundOAmp, soundPAmp, soundQAmp, soundRAmp, soundSAmp, soundTAmp, soundUAmp, soundVAmp, soundWAmp, soundXAmp,
    soundYAmp, soundZAmp;

var soundAFFT, soundBFFT, soundCFFT, soundDFFT, soundEFFT, soundFFFT, soundGFFT, soundHFFT, soundIFFT, soundJFFT,
    soundKFFT, soundLFFT, soundMFFT, soundNFFT,
    soundOFFT, soundPFFT, soundQFFT, soundRFFT, soundSFFT, soundTFFT, soundUFFT, soundVFFT, soundWFFT, soundXFFT,
    soundYFFT, soundZFFT;


var nrj1, x, y;

var tracer;
var tracer1;


var b1 = false,
    b2 = false,
    b3 = false,
    b4 = false;
//FFT fréquence du son
//Amp son
function preload() {
    soundA = loadSound("asstes/Kaisa2.mp3");//fait//
    soundB = loadSound("asstes/Kaisa3.mp3");//fait//
    soundC = loadSound("asstes/Kaisa4.mp3");//fait//
    soundD = loadSound("asstes/Sona4.mp3");
    soundE = loadSound("asstes/Kaisa6.mp3");
    soundF = loadSound("asstes/Kaisa7.mp3");
    soundG = loadSound("asstes/Kaisa8.mp3");
    soundH = loadSound("asstes/Kaisa9.mp3");
    soundI = loadSound("asstes/Ahri1.mp3");
    soundJ = loadSound("asstes/Ahri2.mp3");
    soundK = loadSound("asstes/Ahri3.mp3");
    soundL = loadSound("asstes/Ahri4.mp3");
    soundM = loadSound("asstes/Ahri5.mp3");
    soundN = loadSound("asstes/Kaisa1.mp3");//fait//
    soundO = loadSound("asstes/Evelyn1.mp3");
    soundP = loadSound("asstes/Evelyn2.mp3");
    soundQ = loadSound("asstes/Evelyn3.mp3");
    soundR = loadSound("asstes/Evelyn4.mp3");
    soundS = loadSound("asstes/Kaisa5.mp3");
    soundT = loadSound("asstes/Evelyn5.mp3");
    soundU = loadSound("asstes/Evelyn6.mp3");
    soundV = loadSound("asstes/Evelyn7.mp3");
    soundW = loadSound("asstes/Ahri6.mp3");
    soundX = loadSound("asstes/Sona1.mp3");
    soundY = loadSound("asstes/Sona2.mp3");
    soundZ = loadSound("asstes/Sona3.mp3");


}


function setup() {
    // put setup code here
    createCanvas(windowWidth, windowHeight);
    //soundA.loop();//
    soundAFFT = new p5.FFT(0.8, 16);
    soundAFFT.setInput(soundA);

    soundCFFT = new p5.FFT(0.8, 16);
    soundCFFT.setInput(soundC);

    soundWAmp = new p5.Amplitude();
    soundWAmp.setInput(soundW);

    soundEFFT = new p5.FFT(0.8, 16);
    soundEFFT.setInput(soundE);

    soundNFFT = new p5.FFT(0.8, 16);
    soundNFFT.setInput(soundN);

    soundUFFT = new p5.FFT(0.8, 16);
    soundUFFT.setInput(soundU);
    background(0);

    pixelDensity(1)
    tracer = new AnimateDrawing(xpos0, ypos0, 1)

    pixelDensity(1)
    tracer1 = new AnimateDrawing(xpos1, ypos1, 1)


}

function draw() {
    // put drawing code here


    background(0);


    playSound(soundA, 65); //a
    if (soundA.isPlaying()) {

        push();
        soundAFFT.analyze();
        var temp = 0;

        if (soundA.currentTime() < 1.290) {//agrandissement du cercle
            nrj1 = soundAFFT.getEnergy("bass"); //récupere l'énergie du son pour faire un effet de changement

            var radius = map(soundA.currentTime(), 0, soundA.duration(), 50, min(width, height)); //définition du rayon du cercle
            fill(136, 6, 206);//couleur
            /**
             * premier param : position x, on le centre donc width *0.5, milieu  de l'axe des abscices
             * second param : position y, on le centre donc height * 0.5, milieu de l'axe des ordonnées
             * troisieme et quatriem param : le rayon.
             */
            ellipse(width * 0.5, height * 0.5, radius / 1.7 + 2 * nrj1, radius / 1.7 + 2 * nrj1);//dessin de l'ellipse.

            temp = radius;
        } else {//retrecissement
            var radius = map((soundA.duration() - soundA.currentTime()), 0, soundA.duration(), temp, min(width, height));
            fill(136, 6, 206);
            ellipse(width * 0.5, height * 0.5, radius, radius);
        }
        pop();


    }

    playSound(soundB, 66);
    if (soundB.isPlaying()) {

        push();

        var rotation = map(soundB.currentTime(), 0, soundB.duration(), 0, PI); //angle de rotation

        translate(width * 0.5, height * 0.5);//positionnement de l'axe au milieu
        rotate(rotation);//rotation

        fill(255, 0, 0);
        rect(0, 0, width * 0.5, width * 0.05);
        pop();
    }


    playSound(soundC, 67);
    if (soundC.isPlaying()) {

        push();

        soundCFFT.analyze();
        rectMode(CENTER);
        var nrj1 = soundCFFT.getEnergy("bass")//opacité pour le saut de couleur


        stroke(225)
        var r1 = 200;
        var r2 = 300;
        fill(161, 6, 32, nrj1)//application de l'opacité
        beginShape()

        for (var i = 0; i < TWO_PI; i += PI / 2) {//coordonées du losange

            var xpos = width * 0.5 + r1 * cos(i)
            var ypos = height * 0.5 + r2 * sin(i)

            vertex(xpos, ypos)

        }
        endShape()

        pop()
    }


    playSound(soundD, 68);
    if (soundD.isPlaying()) {
        push();
        var begin = 0.06, first = 0.57; //timer des apparitions pour être rapport avec les sons
        var radius = width / 20;//rayon des cercles
        translate(width / 2, height / 2);

        if (soundD.currentTime() > begin) {//dessin de la bouche a partir du début du son
            noFill();//background du cercle transparent
            strokeWeight(25);//taille du contour de 25px
            stroke(136, 6, 206);
            arc(0, 0, width / 3, width / 3, 0, Math.PI);//dessin d'un demi cercle
        }
        if (soundD.currentTime() >= first) {//dessin des yeux lorsque le son l'indique
            noStroke();
            fill(136, 6, 206);
            translate(-width / 3 / 2, -height / 5); //décalage de width / 3 négatif (soit vers la gauche) pour l'oeil gauche et 1/5 de la hauteur
            ellipse(0, 0, radius, radius);

            translate(width / 3, 0); //on redécale à droite pour le second oeil. Pas de  translation Y car elle est déjà présente
            ellipse(0, 0, radius, radius);
        }
        pop();
    }

    playSound(soundE, 69); //e Reprise du code du professeur
    if (soundE.isPlaying()) {
        push()
        soundEFFT.analyze();
        rectMode(CENTER);

        nrj1 = soundEFFT.getEnergy("bass");

        push()
        fill(0, 0, 255, nrj1)
        translate(width * 0.25, height * 0.5)
        rotate(PI / 4)
        rect(0, 0, width * 0.2, width * 0.2)
        pop()

        push()
        fill(58, 142, 186, 50)
        translate(width * 0.5, height * 0.5)
        rotate(PI / 4)
        rect(0, 0, nrj1, nrj1)
        pop()

        push()
        fill(44, 117, 255, nrj1)
        translate(width * 0.75, height * 0.5)
        rotate(PI / 4)
        rect(0, 0, width * 0.2, width * 0.2)
        pop()


        pop()
    }

    playSound(soundF, 70);
    if (soundF.isPlaying()) {
        var interval = soundF.duration() / 2;
        push();
        var radius = height * 0.7;
        fill(136, 6, 206);
        if (soundF.currentTime() < soundF.duration() / 2) { //retrecissement du cercle
            translate(width / 2, height / 2);
            /**
             * radius est le rayon du cercle.
             * Il est calculé à l'aide d'un produit en croix
             * rayon attendu      temps passé
             *  100% du théorique   0 s
             *  x %                x s (=currentTime())
             *  20 % du théorique  fin du temps de l'interval soit a la moitié du son
             */
            radius = radius - ((radius * 0.2) * soundF.currentTime() * 4 / interval);
            ellipse(0, 0, radius, radius);
        }
        else {
            /**
             * même produit en croix mais dans ce cas on n'oublie pas de réinitialiser les intervals de temps  afin d'avoir un déplacement correct.
             * @type {number}
             */
            var x = ((soundF.currentTime() - interval) * (width / 2)) / (soundF.duration() - interval);
            translate(width / 2 + x, height / 2);
            ellipse(0, 0, radius / 5, radius / 5);
        }
        pop();
    }

    playSound(soundG, 71);
    if (soundG.isPlaying()) {
        push();
        translate(width / 2, height / 2);
        fill(0, 0, 255);
        rotate(frameCount / 50);//rotation avec frameCount (fonction processing)
        var x, y;
        for (var t = 0; t < 500; t += 0.1) { //création d'une spiral avec cos et sin pour les coordonées
            x = t * Math.cos(t); //cos set sin vont nous faire tourner (formule mathématique)
            y = t * Math.sin(t);
            ellipse(x, y, 5, 5); //dessin d'une petit ellipse sur les coordonées en question
        }
        pop();
    }

    playSound(soundH, 72);
    let soundHTimer1 = 0.2;
    if (soundH.isPlaying()) {
        push();
        var x = 0, y = 0, largeur = width * 0.05, hauteur = height * 0.3;

        //décallage de gauche à droite
        if (soundH.currentTime() < soundHTimer1) {//arrivé d'une barre vers la droite

            x = (soundH.currentTime() * 0.5 * width / soundHTimer1) - 0.5 * largeur;//même produit en croix que d'habitude
            y = 0.5 * height - 0.5 * hauteur;
            fill(0, 0, 255);
            rect(x, y, largeur, hauteur);
        }
        else if (soundH.currentTime) { //barres aléatoires
            fill(136, 6, 206);
            translate(width / 2, height / 2);

            //rect(x,y, largeur, hauteur);
            largeur = largeur / 5;
            hauteur = hauteur / 2;
            var randomX = 0, randomY = 0;
            for (var i = 0; i < 5; i++) {//génération de barres aléatoire
                randomX = Math.random();
                if (randomX < 0.5) randomX = -1;
                else randomX = 1;

                randomY = Math.random();
                if (randomY < 0.5) randomY = -1;
                else randomY = 1;

                //x ou  y random pour placer aléatoirement dans une des 4 zones la forme
                //Gauche haut / gauche bas / bas droit / bas haut

                x = Math.floor((Math.random() * (0.2 * width)) + 1) * randomX;
                y = Math.floor((Math.random() * 100) + 1) * randomY;

                rotate(Math.random() * 360); //rotation aléatoire de la forme pour donner un  effet de tornade
                rect(x, y, largeur, hauteur);
            }

        }
        pop();

    }

    playSound(soundI, 73);
    if (soundI.isPlaying()) { //même fonctionnement que précédemment avec plus de timer et des distances un peu différent, le produit en croix reste le même
        push();
        var firstHit = 0.5, secondHit = 1.4, middleSecondHit = (secondHit - firstHit) / 2 + firstHit,
            duration = soundI.duration(), radius = width / 13, posXRect = width * 0.6;
        push();
        fill(102, 0, 255);
        rect(posXRect, height * 0.2, width / 20, height * 0.6);
        if (soundI.currentTime() < firstHit) {
            x = (soundI.currentTime() * (posXRect + radius)) / firstHit;
            translate(x, height / 2);
            ellipse(0, 0, radius, radius);
        }
        else if (soundI.currentTime() < secondHit) {
            if (soundI.currentTime() < middleSecondHit) {
                x = (posXRect + radius) + ((soundI.currentTime() - firstHit) * (width * 0.3) / (middleSecondHit - firstHit));
                translate(x, height / 2);
                ellipse(0, 0, radius, radius);

            }
            else {
                x = ((posXRect + radius) + width * 0.3) - ((soundI.currentTime() - middleSecondHit) * (width * 0.3 + radius) / (secondHit - middleSecondHit));
                translate(x, height / 2);
                ellipse(0, 0, radius, radius);

            }
        }
        else ;
        pop();
    }

    playSound(soundJ, 74);
    if (soundJ.isPlaying()) { //rotation d'un arc et apparition d'une ellipse lors du timer définit
        var first = 1.17, radius = width * 0.4;
        push();
        translate(width * 0.5, height * 0.5);
        var rotation = map(soundJ.currentTime(), 0, soundJ.duration(), 0, 2 * PI);

        if (soundJ.currentTime() < first) {
            rotate(rotation);
            fill(0, 0, 255);
            arc(0, 0, radius, radius, -HALF_PI, HALF_PI);
        }
        else {
            ellipse(0, 0, radius, radius);
        }
        pop();

    }

    playSound(soundK, 75);
    if (soundK.isPlaying()) { //le code de H avec plus de densité dans les formes et une translation aléatoire gauche ou droite
        var largeur, hauteur, randomX = 0, randomY = 0, x, y, randomX, randomY, offsetX;
        push();
        fill(0, 0, 255);
        largeur = width * 0.01;
        hauteur = height * 0.05;
        if (soundK.currentTime() === 0.00) {
            aleaDir = int(random(0, 4));
        }
        else {


            if (aleaDir < 2) {//0 ou 1 on va à droite
                translate(width / 10, 0);
                offsetX = soundK.currentTime() * (width * 0.8) / soundK.duration();
                translate(offsetX, height / 2);
            }
            else {//direction la gauche
                translate(9 * width / 10, 0);
                offsetX = -1 * (soundK.currentTime() * (width * 0.8) / soundK.duration());
                translate(offsetX, height / 2);
            }
            for (var i = 0; i < 500; i++) {

                randomX = Math.random();
                if (randomX < 0.5) randomX = -1;
                else randomX = 1;

                randomY = Math.random();
                if (randomY < 0.5) randomY = -1;
                else randomY = 1;

                x = Math.floor((Math.random() * (0.07 * width)) + 1) * randomX;
                y = Math.floor((Math.random() * (0.07 * width)) + 1) * randomY;

                rotate(Math.random() * 360);
                rect(x, y, largeur, hauteur);
            }
        }
        pop();
    }

    playSound(soundL, 76);
    if (soundL.isPlaying()) {//supperposition de deux rectangle fin le deuxieme vient "manger le premier"
        push();
        var x, y1 = height * 0.35, y2 = height * 0.65, first = 0.33, duration = soundL.duration() * 0.85,
            hauteur = height * 0.05, largeur;
        if (soundL.currentTime() < first) {
            fill(199, 21, 133);
            x = width - soundL.currentTime() * width / first;
            largeur = width - x;
            rect(x, y1, largeur, hauteur);
            fill(199, 21, 133);
            rect(x, y2, largeur, hauteur);
        }
        else {
            x = width - (soundL.currentTime() - first) * width / (duration - first);
            largeur = width - x;
            fill(199, 21, 133);
            rect(0, y1, width, hauteur);
            fill(199, 21, 133);
            rect(0, y2, width, hauteur);
            fill(0, 0, 0);
            rect(x, y1, largeur, hauteur);
            fill(0, 0, 0);
            rect(x, y2, largeur, hauteur);
        }
        pop();

    }

    playSound(soundM, 77);
    if (soundM.isPlaying()) {
        push();
        let x = 0, y, radius = 0.08 * width;
        y = height / 2;
        fill(136, 6, 206);
        let first = 0.7, second = 1.3, third = 2.15, fourth = 2.90, duration = soundM.duration();
        if (soundM.currentTime() < first) {
            x = soundM.currentTime() * width / first;
            translate(x, y);
            ellipse(0, 0, radius, radius);
        }
        else if (soundM.currentTime() < second) {
            x = width - (soundM.currentTime() - first) * width * 0.5 / (second - first);
            translate(x, y);
            ellipse(0, 0, radius, radius);
        }
        else if (soundM.currentTime() < third) {
            x = width / 2 - (soundM.currentTime() - second) * width * 0.5 / (third - second);
            y = height / 2 + (soundM.currentTime() - second) * height * 0.5 / (third - second);
            translate(x, y);
            ellipse(0, 0, radius, radius);
        }
        else if (soundM.currentTime() < fourth) {
            x = width / 2;
            y = height / 2 + (soundM.currentTime() - third) * height * 0.5 / (fourth - third);
            translate(x, y);
            ellipse(0, 0, radius, radius);
        }
        else {
            x = width / 2 + (soundM.currentTime() - fourth) * width * 0.5 / (duration - fourth);
            y = height / 2 + (soundM.currentTime() - fourth) * height * 0.5 / (duration - fourth);
            translate(x, y);
            ellipse(0, 0, radius, radius);

        }
        pop();
    }

    playSound(soundN, 78); //n
    if (soundN.isPlaying()) {
        push()

        if (soundN.currentTime() > 0.05 && soundN.currentTime() < 0.80) {
            fill(199, 21, 133);
            x = 0.25 * width + (soundN.currentTime() - 0.05) * width * 0.6;
            y = height * 0.3;
            ellipse(x, y, 50, 50);

        } else if (soundN.currentTime() > 0.8 && soundN.currentTime() < 1.5) {

            fill(199, 21, 133);
            ellipse(0.25 * width + width * 0.6, height * 0.3, 50, 50)


            x = 0.25 * width + (soundN.currentTime() - 0.8) * width * 0.6;
            y = height * 0.42;
            ellipse(x, y, 50, 50);

        } else if (soundN.currentTime() > 1.55 && soundN.currentTime() < 2.25) {
            fill(199, 21, 133);
            ellipse(0.25 * width + width * 0.6, height * 0.3, 50, 50)
            ellipse(0.25 * width + width * 0.6, height * 0.42, 50, 50)

            fill(199, 21, 133);
            x = 0.25 * width + (soundN.currentTime() - 1.55) * width * 0.6;
            y = height * 0.54;
            ellipse(x, y, 50, 50);

        } else if (soundN.currentTime() > 2.3 && soundN.currentTime() < 3) {
            fill(199, 21, 133);
            ellipse(0.25 * width + width * 0.6, height * 0.3, 50, 50)
            ellipse(0.25 * width + width * 0.6, height * 0.42, 50, 50)
            ellipse(0.25 * width + width * 0.6, height * 0.54, 50, 50)

            fill(199, 21, 133);
            x = 0.25 * width + (soundN.currentTime() - 2.3) * width * 0.6;
            y = height * 0.66;
            ellipse(x, y, 50, 50);
        } else if (soundN.currentTime() > 3.05 && soundN.currentTime() < 4.1) {
            soundNFFT.analyze();
            nrj1 = soundNFFT.getEnergy("bass");
            fill(199, 21, 133);
            ellipse(0.25 * width + width * 0.6, height * 0.3, 50, 50)
            ellipse(0.25 * width + width * 0.6, height * 0.42, 50, 50)
            ellipse(0.25 * width + width * 0.6, height * 0.54, 50, 50)
            ellipse(0.25 * width + width * 0.6, height * 0.66, 50, 50)
        }


        pop()
    }

    playSound(soundO, 79);
    if (soundO.isPlaying()) {//"attaque" aléatoire de triangle su tout l'écran
        push();
        var x = 0, y = 0, nbForme, duration = soundO.duration();

        x = soundO.currentTime() * width / duration;
        y = height * 0.4;
        nbForme = Math.round(soundO.currentTime() / (duration / 50));
        var randomY;
        for (var i = 0; i <= nbForme; i++) {
            randomY = Math.random();
            if (randomY < 0.5) randomY = -1;
            else randomY = 1;

            y = height * 0.4 + ((randomY * soundO.currentTime()) * Math.floor((Math.random() * 600) + 1));
            translate(x, y);
            rotate(Math.random() * 360);
            fill(255,0,0);
            triangle(100, 100, 300, 100, 200, 300);

        }
        pop();

    }

    //https://www.openprocessing.org/sketch/199700/
    playSound(soundP, 80);
    if (soundP.isPlaying()) {//foudres récupéré sur un sketch processing
        push();
        translate(width / 3, height * 0.2);
        var x = 0, y = 0, endX, endY;
        while (y < 1000) {//to bottom of screen
            endX = x + int(random(-4, 4)); //x-value varies
            endY = y + 1;    //y just goes up
            strokeWeight(3);//bolt is a little thicker than a line
            stroke(255); //white line
            line(x, y, endX, endY);//draw a tiny segment
            x = endX;  //then x and y are moved to the
            y = endY;  //end of the segment and so on
        }
        pop();
        if (soundP.currentTime() > 0.6) {
            push();
            translate(width * 2 / 3, height * 0.2);
            var x = 0, y = 0, endX = 0, endY = 0;
            while (y < 1000) {//to bottom of screen
                endX = x + int(random(-4, 4)); //x-value varies
                endY = y + 1;    //y just goes up
                strokeWeight(3);//bolt is a little thicker than a line
                stroke(255); //white line
                line(x, y, endX, endY);//draw a tiny segment
                x = endX;  //then x and y are moved to the
                y = endY;  //end of the segment and so on
            }
            pop();
        }

    }

    playSound(soundQ, 81);
    if (soundQ.isPlaying()) {//utilisation de animate drawing
        tracer.animateDrawing(color(255, 0, 0), 5)
    }
    else {

        tracer.resetDrawing()

    }

    playSound(soundR, 82);
    if (soundR.isPlaying()) {
        push();
        var rotation = map(soundR.currentTime(), 0, soundR.duration(), 0, 2 * PI);
        translate(width * 0.5, height * 0.5);
        rotate(rotation);
        fill(0, 0, 255);
        arc(0, 0, width * 0.5, width * 0.5, -HALF_PI, HALF_PI);
        pop();
    }


    playSound(soundS, 83); //s
    if (soundS.isPlaying()) {
        push();
        var rotation = map(soundS.currentTime(), 0, soundS.duration(), 0, 3*PI);
        translate(width * 0.5, height * 0.5);
        rotate(rotation);
        rectMode(CENTER);
        fill(114, 62, 100);
        rect(0, 0, width * 0.5, width * 0.1);
        pop();
    }

    playSound(soundT, 84);
    if (soundT.isPlaying()) {
        tracer1.animateDrawing(color(255, 0, 0), 5)
    }
    else {

        tracer1.resetDrawing()

    }

    playSound(soundU, 85);
    if (soundU.isPlaying() == true) {//voix en fonction de la wave forme
        push()
        var waveform = soundUFFT.waveform();
        noFill();
        beginShape();
        stroke(0, 0, 255); // waveform is mint
        strokeWeight(10);
        for (var i = 0; i < waveform.length; i++) {
            var x = map(i, 0, waveform.length, 0, width);
            var y = map(waveform[i], -1, 1, 0, height);
            curveVertex(x, y);
        }
        endShape();
        pop()
    }


    playSound(soundV, 86);
    if (soundV.isPlaying()) {
        push();
        var x, y = height / 2, first = 1, temp = first + 0.05, second = 4.3, facteur = 5;
        var radius = width * 0.1;
        if (soundV.currentTime() < first) {
            x = (soundV.currentTime() * (width * 0.5)) / first;
            translate(x, y);
            fill(161, 6, 132);
            ellipse(0, 0, radius, radius);
        }
        else if (soundV.currentTime() < temp) {
            translate(width / 2, y);
            fill(161, 6, 132);
            radius = radius * facteur;
            ellipse(0, 0, radius, radius);
        }
        else if (soundV.currentTime() < second) {
            translate(width / 2, y);
            fill(161, 6, 132);
            radius = radius * facteur;
            radius = radius - (soundV.currentTime() - temp) * radius / 13 * (second - temp);
            ellipse(0, 0, radius, radius);
        }
        else {
            translate(width / 2, y);
            fill(161, 6, 132);
            // ellipse(0,0,radius,radius);
        }
        pop();
    }

    playSound(soundW, 87); //w
    if (soundW.isPlaying()) {

        push();
        var lvl = soundWAmp.getLevel();
        var whitelvl = map(lvl, 0, 1, 0, 255);
        noStroke;
        fill(whitelvl);
        rect(0, 0, width, height);
        pop();
    }

    playSound(soundX, 88);
    if (soundX.isPlaying()) { //pluie d'étoile avec des déplacements différents
        push();
        posY = 1.1 * height + soundX.currentTime() * -300;
        translate(width * 0.33, posY);
        rotate(frameCount / 20.0);
        star(0, 0, 30, 70, 5);
        pop();

        push();
        posY = 1.2 * height + soundX.currentTime() * -400;
        translate(width / 2, posY);
        rotate(frameCount / 10.0);
        star(0, 0, 30, 70, 5);
        pop();

        push();
        posY = 1.2 * height + soundX.currentTime() * -700;
        translate(width * .66, posY);
        rotate(frameCount / 40.0);
        star(0, 0, 30, 70, 5);
        pop();

        push();
        posY = soundX.currentTime() * 400;
        translate(width / 4, posY);
        rotate(frameCount / 10.0);
        star(0, 0, 30, 70, 5);
        pop();

        push();
        posY = soundX.currentTime() * 800;
        translate(width / 2, posY);
        rotate(frameCount / 10.0);
        star(0, 0, 30, 70, 5);
        pop();

        push();
        posY = -0.3 * height + soundX.currentTime() * 500;
        translate(width * 0.78, posY);
        rotate(frameCount / 10.0);
        star(0, 0, 30, 70, 5);
        pop();

    }

    //https://processing.org/examples/star.html
    function star(x, y, radius1, radius2, npoints) {
        var TWO_PI = Math.PI * 2;
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
        endShape();
    }


    playSound(soundY, 89);
    if (soundY.isPlaying()) {//reprise du cercle trigonométrique pour faire des points au x points multiples de PI/4, donc huit fois soit en fonction de la durée
        push();
        var duration = soundY.duration(), modulo8 = duration / 8, radius = width / 20,
            offset = width / 5, first = 6 * modulo8;
        fill(161, 6, 132);
        modulo8 = first / 8;
        translate(width / 2, height / 2);
        if (soundY.currentTime() < first) {
            if (soundY.currentTime() > 0) { //en bas
                ellipse(0, offset, radius, radius);
            }
            if (soundY.currentTime() > modulo8) {//BD
                ellipse((Math.sqrt(2) / 2) * offset, (Math.sqrt(2) / 2) * offset, radius, radius);
            }
            if (soundY.currentTime() > 2 * modulo8) {//D
                ellipse(offset, 0, radius, radius);
            }
            if (soundY.currentTime() > 3 * modulo8) {//HD
                ellipse((Math.sqrt(2) / 2) * offset, -1 * (Math.sqrt(2) / 2) * offset, radius, radius);
            }
            if (soundY.currentTime() > 4 * modulo8) {//H
                ellipse(0, -offset, radius, radius);
            }
            if (soundY.currentTime() > 5 * modulo8) {//HG
                ellipse(-1 * (Math.sqrt(2) / 2) * offset, -1 * (Math.sqrt(2) / 2) * offset, radius, radius);
            }
            if (soundY.currentTime() > 6 * modulo8) {//G
                ellipse(-1 * offset, 0, radius, radius);
            }
            if (soundY.currentTime() > 7 * modulo8) {//BG
                ellipse(-1 * (Math.sqrt(2) / 2) * offset, (Math.sqrt(2) / 2) * offset, radius, radius);
            }

        }
        else {

        }
        pop();

    }

    playSound(soundZ, 90);
    if (soundZ.isPlaying()) {
        push()
        var rotation = map(soundZ.currentTime(), 0, soundZ.duration(), 0, 2 * PI)
        rectMode(CENTER);
        translate(width * 0.5, height * 0.5);
        rotate(rotation);

        fill(0, 0, 255);
        ellipse(0, 0, width * 0.3, width * 0.3);
        fill(161, 6, 132);
        var coefX = 1;
        var coefY = 1;
        if (soundZ.currentTime < soundZ.duration / 4) {
            coefX = -1;
            coefY = -1;

        }
        else if (soundZ.currentTime < soundZ.duration / 2) {
            coefX = -1;
        }

        else if (soundZ.currentTime < (3 * soundZ.duration / 4)) {

        }
        else {
            coefY = -1;

        }

        //bla
        var x = coefX * (width * 0.11);
        var y = coefY * (width * 0.11);
        ellipse(x, y, width * 0.05, width * 0.05);
        pop();
    }


}

function playSound(sound, keyId) {
    if (keyIsDown(keyId) == true) {
        if (sound.isPlaying() == false) {
            sound.play();
        }
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    background(0);
}

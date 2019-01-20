var sounda;
var sounda;
var sounda;
var soundb;
var soundc;
var soundd;
var sounde;
var soundeFFT;
var soundf;
var soundh;
var soundhFFT;
var soundg;
var soundgFFT;
// Pour le son j
var soundi;
var soundj;
var j1 = 0.0;
var j2 = 0.0;
var soundk;
var soundsFFT;
var soundl;
var soundm;
var soundn;
var soundo;
var soundp;
var soundq;
var soundr;
var sounds;
var soundt;
var soundu;
var soundv;
//Pour le son W
var soundw;
var blanc = 0;
//Pour le son x
var soundx;
//Pour le son y
var soundy;
var soundyFFT
// Pour le son Z
var soundz;
var ligne1 = 0;
var ligne2 = 0;




function preload() {
    sounda = loadSound("assets/sona.mp3");
    soundb = loadSound("assets/sonb.mp3");
    soundc = loadSound("assets/sonc.mp3");
    soundd = loadSound("assets/sond.wav");
    sounde = loadSound("assets/sone.wav");
    soundf = loadSound("assets/sonf.wav");
    soundh = loadSound("assets/sonh.wav");
    soundg = loadSound("assets/song.wav");
    soundi = loadSound("assets/soni.mp3");
    soundj = loadSound("assets/sonj.wav");
    soundk = loadSound("assets/sonk.mp3");
    soundl = loadSound("assets/sonl.wav");
    soundm = loadSound("assets/sonm.wav");
    soundn = loadSound("assets/sonn.mp3");
    soundo = loadSound("assets/sono.wav");
    soundp = loadSound("assets/sonp.mp3");
    soundq = loadSound("assets/sonq.mp3");
    soundr = loadSound("assets/sonr.wav");
    sounds = loadSound("assets/sons.wav");
    soundt = loadSound("assets/sont.mp3");
    soundu = loadSound("assets/sonu.mp3");
    soundv = loadSound("assets/sonv.mp3");
    soundw = loadSound("assets/sonw.mp3");
    soundx = loadSound("assets/sonx.wav");
    soundy = loadSound("assets/sony.wav");
    soundz = loadSound("assets/sonz.mp3");




}


function setup() {
    // put setup code here
    createCanvas(windowWidth, windowHeight);
    var analyzer;

    soundcAmp = new p5.Amplitude();
    soundcAmp.setInput(soundc);

    soundgFFT = new p5.FFT(0.8, 16);
    soundgFFT.setInput(soundg);

    soundeFFT = new p5.FFT(0.8, 1024)
    soundeFFT.setInput(sounde);

    soundhFFT = new p5.FFT(0.8, 16);
    soundhFFT.setInput(soundh);

    soundsFFT = new p5.FFT(0.8, 16);
    soundsFFT.setInput(sounds);

    soundyFFT = new p5.FFT(0.8, 16);
    soundyFFT.setInput(soundy);

    background(255);


}

function draw() {

    background(255);


      playSound(sounds, 83); // touche S avec le fond d'écran.
    if (sounds.isPlaying() == true) {
        push();
        soundsFFT.analyze();
        var nrj1 = soundsFFT.getEnergy("bass")
        background(139, 0, 0, nrj1);
        pop();

    }

    playSound(sounda, 65); // touche a, cercle qui grandit
    if (sounda.isPlaying() == true) {
        push();
        var radius = map(sounda.currentTime(), 0, sounda.duration(), 50, width);
        noStroke();
        fill(139, 0, 0);
        ellipse(width * 0.5, height * 0.5, radius, radius)
        pop();
    }


    playSound(soundb, 66); // touche B, deux ellipses pour former un arc de cercle
    if (soundb.isPlaying() == true) {
        push();
        var timer = map(soundb.currentTime(), 0, 0.2, 50, height * 0.001);
        fill(139, 0, 0);
        noStroke();
        ellipse(width * 0.5, height * 0.5, width / 4.8, width / 4.8);
        fill(255, 255, 255);
        ellipse(width * 0.5 - timer, height * 0.5 - timer, width / 4.8, width / 4.8);
        pop();
    }

    playSound(soundc, 67); // touche c, rectangles qui tourne
    if (soundc.isPlaying() == true) {
        push();
        translate(width / 2, height / 2);
        var angle = map(soundc.currentTime(), 0, soundc.duration(), 0, 1);
        rectMode(CENTER);
        rotate(angle);
        background(139, 0, 0)
        noFill();
        stroke(255);
        strokeWeight(3);
        rect(0, 0, width * 0.5, height * 0.5);
        rect(0, 0, width * 0.3, height * 0.3);
        rect(0, 0, width * 0.2, height * 0.2);
        pop();

    }

    playSound(soundd, 68); // animation avec la touche d, une ellispe en contour
    if (soundd.isPlaying() == true) {
        push();
        var radius = map(soundd.currentTime(), 0, soundd.duration(), 50, width);
        strokeWeight(5);
        stroke(139, 0, 0);
        ellipse(width * 0.6, height * 0.6, radius, radius);
        pop();

    }


     playSound(soundw, 87); // touche w
    if (soundw.isPlaying() == true) {
        push();
        noStroke();
        blanc = blanc + 7;
        //  translate(width * 0.2, height * 0.5);
        fill(139, 0, 0);
        rect(blanc, 0, blanc, height);
        if (blanc > width) {
            blanc = 0;
        }
        pop();

    }

      playSound(soundo, 79); // touche o, ellipse qui s'agrandit ou diminue
    if (soundo.isPlaying() == true) {

        push();
        var radius = map(soundo.currentTime(), 0, soundo.duration(), -150, width);
        noStroke();
        fill(139, 0, 0);
        ellipse(width * 0.3, height * 0.5, radius * 0.3, radius * 0.3);
        pop();

    }



    playSound(sounde, 69); // animation touche E, chant
    // référence https://github.com/b2renger/p5js_codecreatif puis modificiation de la couleur
    if (sounde.isPlaying() == true) {
        push()
        var waveform = soundeFFT.waveform();
        noFill();
        beginShape();
        stroke(139, 0, 0);
        strokeWeight(1);
        for (var i = 0; i < waveform.length; i++) {
            var x = map(i, 0, waveform.length, 0, width);
            var y = map(waveform[i], -1, 1, 0, height);
            curveVertex(x, y);
        }
        endShape();
        pop()

    }


    playSound(soundf, 70); // animation touche F, cercle en poitillé référence : https://github.com/b2renger/p5js_codecreatif puis modification de la structure et des couleurs.
    if (soundf.isPlaying() == true) {
        push();

        var nsegment = 96
        var ncurrentsegment = (map(soundf.currentTime(), 0, soundf.duration(), 0, nsegment + 1))
        for (var i = 0; i < ncurrentsegment; i++) {
            stroke(139, 0, 0);
            strokeWeight(10);
            push();
            var angle = map(i, 0, nsegment, 0, TWO_PI);
            var x = width * 0.5 + height * 0.45 * cos(angle);
            var y = height * 0.5 + height * 0.45 * sin(angle);
            point(x, y);
            pop();

            push();

            stroke(189);
            strokeWeight(5)
            push();
            var angle = map(i, 0, nsegment, 0, TWO_PI);
            var x = width * 0.5 + height * 0.3 * cos(angle) / 2;
            var y = height * 0.5 + height * 0.3 * sin(angle) / 2;
            point(x, y);
            pop();

        }
        pop();
    }

    playSound(soundh, 72); // animation avec la touche H, base https://github.com/b2renger/p5js_codecreatif puis modifié
    if (soundh.isPlaying() == true) {
        push()
        soundhFFT.analyze();
        rectMode(CENTER);
        var nrj1 = soundhFFT.getEnergy("bass")

        push()
        noStroke();
        background(0);
        fill(139, 0, 0, nrj1)
        translate(width * 0.5, height * 0.5);
        for (let i = 0; i < 10; i++) {
            triangle(width / 6.5, height / 10, width / 3.5, height / 6, width / 6.5, height / 8);
            rotate(PI / 4);
        }
        pop()

    }

    playSound(soundi, 73); // touche i, rectangle qui tourne
    if (soundi.isPlaying() == true) {
        push()
        noStroke();
        var rotation = map(soundi.currentTime(), 0, soundi.duration(), 0, PI)
        rectMode(CENTER);
        translate(width * 0.5, height * 0.5);
        rotate(rotation);

        fill(139, 0, 0);
        rect(0, 0, width * 0.5, width * 0.005);
        pop()

        push()
        noStroke();
        var rotation = map(soundi.currentTime(), 0, soundi.duration(), 0, PI * 0.2);
        rectMode(CENTER);
        translate(width * 0.5, height * 0.5);
        rotate(rotation);

        fill(107, 13, 13, 50);
        rect(0, 0, width * 0.5, width * 0.005);
        pop()

    }

    playSound(soundj, 74); // touche j, rectangle qui tourne code de base = https://editor.p5js.org/p5/sketches/By6zExJQO7 puis modification de tous les paramètres.
    if (soundj.isPlaying() == true) {
        push()
        j1 = j1 + 0.3;
        j2 = cos(j1) * 2;
        translate(width * 0.5, height * 0.5);
        scale(j2);
        noFill();
        stroke(139, 0, 0);
        strokeWeight(3);
        rect(0, 0, width / 5, height / 4);
        pop()
    }



    playSound(soundk, 75); // son K changement de background suivant le son
    if (soundk.isPlaying() == true) {
        push();
        if (soundk.currentTime() > 0) {
            background(139, 0, 0)
        }
        if (soundk.currentTime() > soundk.duration() * 0.5) {
            push();
            background(0);
            pop();
        }
        pop();
    }




    playSound(soundm, 77); // animation avec la touche M,  https://github.com/b2renger/p5js_codecreatif puis modifier au niveau de la forme et l'épaisseur
    if (soundm.isPlaying() == true) {
        push();
        var nsegment = 96
        var ncurrentsegment = (map(soundm.currentTime(), 0, soundm.duration(), 0, nsegment + 1))
        for (var i = 0; i < ncurrentsegment; i++) {
            stroke(139, 0, 0);
            strokeWeight(12)
            var angle = map(i, 0, nsegment, 0, TWO_PI);
            var x = width * 0.5 + height * 0.45 * cos(angle);
            var y = height * 0.5 + height * 0.45 * sin(angle);
            ellipse(width * 0.5, height * 0.5, x, y);
            pop();

        }
    }


    playSound(soundn, 78); // touche N, rectangle qui s'agrandit
    if (soundn.isPlaying() == true) {
        push();
        var angle = map(soundn.currentTime(), 0, soundn.duration(), 10, PI * 100);
        rectMode(CENTER);
        background(255)
        noFill();
        stroke(139,0,0);
        strokeWeight(3);
        rect(width * 0.5, height * 0.5, angle, angle);
        rect(width * 0.5, height * 0.3, angle, angle);
        rect(width * 0.5, height * 0.7, angle, angle);
        pop();

    }



    playSound(soundp, 80); // touche p
    if (soundp.isPlaying() == true) {
        push();
        background(255);
        var timer = map(soundp.currentTime(), 0, 0.9, 10, height * 0.5);

        push();
        stroke(139, 0, 0);
        strokeWeight(3);
        translate(width * 0.2, height * 0.7);
        fill(255, 255, 255);
        line(width / 100 + timer, height / 100 + timer, width / 100, height / 100);
        pop();


        push();
        stroke(139, 0, 0);
        strokeWeight(3);
        translate(width * 0.3, height * 0.7);
        fill(255, 255, 255);
        line(width / 100 + timer, height / 100 + timer, width / 100, height / 100);
        pop();

        push();
        stroke(139, 0, 0);
        strokeWeight(3);
        translate(width * 0.4, height * 0.7);
        fill(255, 255, 255);
        line(width / 100 + timer, height / 100 + timer, width / 100, height / 100);
        pop();

        push();
        stroke(139, 0, 0);
        strokeWeight(3);
        translate(width * 0.5, height * 0.7);
        fill(255, 255, 255);
        line(width / 100 + timer, height / 100 + timer, width / 100, height / 100);
        pop();

        push();
        stroke(139, 0, 0);
        strokeWeight(3);
        translate(width * 0.6, height * 0.7);
        fill(255, 255, 255);
        line(width / 100 + timer, height / 100 + timer, width / 100, height / 100);
        pop();

        push();
        stroke(139, 0, 0);
        strokeWeight(3);
        translate(width * 0.7, height * 0.7);
        fill(255, 255, 255);
        line(width / 100 + timer, height / 100 + timer, width / 100, height / 100);
        pop();

        push();
        stroke(139, 0, 0);
        strokeWeight(3);
        translate(width * 0.8, height * 0.7);
        fill(255, 255, 255);
        line(width / 100 + timer, height / 100 + timer, width / 100, height / 100);
        pop();

        push();
        stroke(139, 0, 0);
        strokeWeight(3);
        translate(width * 0.9, height * 0.7);
        fill(255, 255, 255);
        line(width / 100 + timer, height / 100 + timer, width / 100, height / 100);
        pop();

        push();
        stroke(139, 0, 0);
        strokeWeight(3);
        translate(width * 0.99, height * 0.7);
        fill(255, 255, 255);
        line(width / 100 + timer, height / 100 + timer, width / 100, height / 100);
        pop();


        push();
        stroke(139, 0, 0);
        strokeWeight(3);
        translate(width * 0.99, height * 0.7);
        fill(255, 255, 255);
        line(width / 100 - timer, height / 100 - timer, width / 100, height / 100);
        pop();


        push();
        stroke(139, 0, 0);
        strokeWeight(3);
        translate(width * 0.9, height * 0.7);
        fill(255, 255, 255);
        line(width / 100 - timer, height / 100 - timer, width / 100, height / 100);
        pop();


        push();
        stroke(139, 0, 0);
        strokeWeight(3);
        translate(width * 0.8, height * 0.7);
        fill(255, 255, 255);
        line(width / 100 - timer, height / 100 - timer, width / 100, height / 100);
        pop();


        push();
        stroke(139, 0, 0);
        strokeWeight(3);
        translate(width * 0.7, height * 0.7);
        fill(255, 255, 255);
        line(width / 100 - timer, height / 100 - timer, width / 100, height / 100);
        pop();

        push();
        stroke(139, 0, 0);
        strokeWeight(3);
        translate(width * 0.6, height * 0.7);
        fill(255, 255, 255);
        line(width / 100 - timer, height / 100 - timer, width / 100, height / 100);
        pop();

        push();
        stroke(139, 0, 0);
        strokeWeight(3);
        translate(width * 0.5, height * 0.7);
        fill(255, 255, 255);
        line(width / 100 - timer, height / 100 - timer, width / 100, height / 100);
        pop();

        push();
        stroke(139, 0, 0);
        strokeWeight(3);
        translate(width * 0.4, height * 0.7);
        fill(255, 255, 255);
        line(width / 100 - timer, height / 100 - timer, width / 100, height / 100);
        pop();

        push();
        stroke(139, 0, 0);
        strokeWeight(3);
        translate(width * 0.3, height * 0.7);
        fill(255, 255, 255);
        line(width / 100 - timer, height / 100 - timer, width / 100, height / 100);
        pop();

        push();
        stroke(139, 0, 0);
        strokeWeight(3);
        translate(width * 0.2, height * 0.7);
        fill(255, 255, 255);
        line(width / 100 - timer, height / 100 - timer, width / 100, height / 100);
        pop();

        push();
        fill(139, 0, 0);
        translate(width * 0.01, height * 0.5);
        rect(0, height * 0.02, height * 2, height * 0.08);
        pop();
        pop();

    }


    playSound(soundq, 81); // touche q, des rectangles qui s'anime autour d'une ligne
    if (soundq.isPlaying() == true) {
        push()
        noStroke();
        var rotation = map(soundq.currentTime(), 0, soundq.duration(), 10, PI);
        rectMode(CENTER);
        translate(width * 0.2, height * 0.7);
        rotate(rotation);
        fill(107, 13, 13, );
        rect(0, 0, width * 0.09, width * 0.09);
        pop();

        push()
        noStroke();
        var rotation = map(soundq.currentTime(), 0, soundq.duration(), 10, PI * 5);
        rectMode(CENTER);
        translate(width * 0.2, height * 0.7);
        rotate(rotation);
        fill(107, 13, 13, );
        rect(0, 0, width * 0.09, width * 0.09);
        pop();

        push();
        stroke(0)
        noFill();
        line(width * 0.25, height * 0.6, width * 0.7, height * 0.3);
        pop();

        push()
        noStroke();
        var rotation = map(soundq.currentTime(), 0, soundq.duration(), 10, PI);
        rectMode(CENTER);
        translate(width * 0.8, height * 0.3);
        rotate(rotation);
        fill(107, 13, 13, );
        rect(0, 0, width * 0.09, width * 0.09);
        pop();


        push()
        noStroke();
        var rotation = map(soundq.currentTime(), 0, soundq.duration(), 10, PI * 5);
        rectMode(CENTER);
        translate(width * 0.8, height * 0.3);
        rotate(rotation);
        fill(107, 13, 13, );
        rect(0, 0, width * 0.09, width * 0.09);
        pop();
    }


    playSound(soundl, 76); // touche L trois bandeau qui agissent suivant le son .
    if (soundl.isPlaying() == true) {
        push();
        var timer = map(soundl.currentTime(), 0, 0.08, 30, height * 0.01);

        push();
        stroke(139, 0, 0);
        strokeWeight(40);
        translate(width * 0.5, height * 0.5);
        fill(255, 255, 255);
        line(width / 100 - timer, height / 100 - timer, width / 100, height / 100);
        pop();


        push();
        stroke(139, 0, 0);
        strokeWeight(40);
        translate(width * 0.2, height * 0.5);
        fill(255, 255, 255);
        line(width / 100 - timer, height / 100 - timer, width / 100, height / 100);
        pop();

        push();
        stroke(139, 0, 0);
        strokeWeight(40);
        translate(width * 0.8, height * 0.5);
        fill(255, 255, 255);
        line(width / 100 - timer, height / 100 - timer, width / 100, height / 100);
        pop();
        pop();
    }



    playSound(soundu, 85); // touche u, un verre de vin son très court
    if (soundu.isPlaying() == true) {
        push();
        line(width * 0.5, height * 0.55, width * 0.6, height * 0.8);
        pop();

        push();
        fill(139, 0, 0);
        noStroke();
        ellipse(width * 0.5, height * 0.55, height * 0.3, height * 0.3);
        pop();

        push();
        stroke(0);
        strokeWeight(3);
        noFill();
        ellipse(width * 0.48, height * 0.5, height * 0.3, height * 0.3);
        pop();

    }

    playSound(soundv, 86); // touche v, cercle qui retrecit
    if (soundv.isPlaying() == true) {
        push();
        var radius = map(soundv.currentTime(), 0.99, soundv.duration(), 600, width * 0.01);
        noStroke();
        background(139, 0, 0);
        fill(0, 0, 0);
        ellipse(width * 0.5, height * 0.5, radius * 0.5, radius * 0.5);
        pop();

    }


    playSound(soundr, 82); // touche r
    if (soundr.isPlaying() == true) {
        push(); // rangé du haut et cercle qui grandit
        var angle = map(soundr.currentTime(), 0, soundr.duration(), 10, PI * 50);
        push();
        ellipseMode(CENTER);
        rotate(rotation);
        translate(width * 0.5, height * 0.2)
        stroke(139, 0, 0);
        strokeWeight(3);
        noFill();
        ellipse(0, -60, angle, angle);
        pop();

        push(); // cercle rouge
        translate(width * 0.5, height * 0.3)
        fill(139, 0, 0);
        noStroke();
        ellipse(0, 0, width / 10, height / 5.5);
        pop();

        push(); // cercle du milieu
        translate(width * 0.5, height * 0.5)
        fill(139, 0, 0, 50);
        noStroke(12);
        ellipse(0, 0, width / 20, height / 15);
        pop();



        push(); // rangé de gauche
        ellipseMode(CENTER); // cerlce qui grandit
        rotate(rotation);
        translate(width * 0.23, height * 0.5)
        stroke(139, 0, 0);
        strokeWeight(3);
        noFill();
        ellipse(width / 25, 0, angle, angle);
        pop();

        push(); // cercle rouge
        translate(width * 0.5, height * 0.5)
        fill(139, 0, 0);
        noStroke(12);
        ellipse(-200, 0, width / 10, height / 5.5);
        pop();



        push(); // rangé de droite
        ellipseMode(CENTER); // cercle qui grandit
        rotate(rotation);
        translate(width * 0.7, height * 0.5)
        stroke(139, 0, 0);
        strokeWeight(3);
        noFill();
        ellipse(width / 25, 0, angle, angle);
        pop();

        push();
        translate(width * 0.5, height * 0.5) // cercle rouge
        fill(139, 0, 0);
        noStroke(12);
        ellipse(200, 0, width / 10, height / 5.5);
        pop();



        push(); // rangé de bas
        ellipseMode(CENTER); // cercle qui grandit
        rotate(rotation);
        translate(width * 0.5, height * 0.2)
        stroke(139, 0, 0);
        strokeWeight(3);
        noFill();
        ellipse(0, 500, angle, angle);
        pop();

        push();
        translate(width * 0.5, height * 0.5) // cercle rouge
        fill(139, 0, 0);
        noStroke(12);
        ellipse(0, height / 4.5, width / 10, height / 5.5);
        pop();
        pop();

    }





    playSound(soundt, 84); // touche t,
    if (soundt.isPlaying() == true) {
        push();
        translate(width * 0.5, height * 0.2);
        noFill();
        stroke(139, 0, 0);
        strokeWeight(3);
        beginShape();
        vertex(-width / 4, height / 4.6);
        vertex(-width / 15, height / 4.6);
        vertex(0, 0);
        vertex(width / 15, height / 4.6);
        vertex(width / 4, height / 4.6);
        endShape();
        pop();

        push();
        translate(width * 0.5, height * 0.5);
        noFill();
        stroke(139, 0, 0);
        strokeWeight(3);
        beginShape();
        vertex(-width / 4, height / 4.6);
        vertex(-width / 15, height / 4.6);
        vertex(0, height / 2.5);
        vertex(width / 15, height / 4.6);
        vertex(width / 4, height / 4.6);
        endShape();
        pop();

        push()
        noStroke();
        var rotation = map(soundt.currentTime(), 0, soundt.duration(), 10, PI);
        rectMode(CENTER);
        translate(width * 0.5, height * 0.55);
        rotate(rotation);
        fill(107, 13, 13, );
        rect(0, 0, width * 0.09, width * 0.09);
        pop();

    }




    playSound(soundx, 88); // animation avec la touche X,  https://github.com/b2renger/p5js_codecreatif puis modifier au niveau de la forme et l'épaisseur
    if (soundx.isPlaying() == true) {
        push();
        var nsegment = 96
        var ncurrentsegment = (map(soundx.currentTime(), 0, soundx.duration(), 0, nsegment + 1))
        for (var i = 0; i < ncurrentsegment; i++) {
            //background(139, 0, 0);
            stroke(139);
            strokeWeight(40);
            var angle = map(i, 0, nsegment, 4, TWO_PI);
            var x = width * 0.5 + height * 0.3 * cos(angle);
            var y = height * 0.5 + height * 0.3 * sin(angle);
            point(x, y);
            pop();

            push();
            stroke(139, 0, 0);
            strokeWeight(5);
            line(width * 0.3, height * 0.6, width * 0.6, height * 0.7);
            pop();

        }
    }



    playSound(soundy, 89); // touche Y avec le fond d'écran.
    if (soundy.isPlaying() == true) {
        push();
        soundyFFT.analyze();
        var nrj1 = soundyFFT.getEnergy("bass")
        background(0, 0, 0, nrj1);
        pop();

    }


    playSound(soundz, 90); // touche z
    if (soundz.isPlaying() == true) {
        noStroke();
        push();
        if (soundz.currentTime() > 0) {
            background(255)
        }
        if (soundz.currentTime() > soundz.duration() * 0.5) {
            push();
            var y = map(soundz.currentTime(), soundz.duration() * 0.5, soundz.duration(), 0, height * 0.5);
            fill(139, 0, 0);
            rect(0, y, width, height);
            pop();

        }
    }

    playSound(soundg, 71); // animation avec la touche G, la fleurs : https://p5js.org/examples/hello-p5-simple-shapes.html puis modifié
    if (soundg.isPlaying() == true) {
        push();
        soundgFFT.analyze();
        rectMode(CENTER);
        noStroke();
        var nrj1 = soundgFFT.getEnergy("bass");
        push();
        fill(139, 0, 0, nrj1);
        translate(width * 0.5, height * 0.5);
        rotate(PI / 4);
        noStroke();
        for (let i = 0; i < 10; i++) {
            ellipse(0, 30, width / 3, height / 6);
            rotate(PI / 5);

        }
        pop();
        pop();
    }

}

function playSound(sound, keyId) { // c'est une définition
    if (keyIsDown(keyId) == true) {
        if (sound.isPlaying() == false) {
            sound.play();
        }
    }
}

function back(keyId) {
    if (keyIsDown(keyId) == true) {
        background(255)
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    background(0);
}

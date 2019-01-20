var sound1;
var sound2;
var sound3;
var sound3FFT;
var sound4;
var sound4FFT;
var sound5;
var sound6;
var sound7;
var sound8;
var sound9;
var sound10;
var centerX = 0.0,
    centerY = 0.0;
var sound11;
var sound12;
var pg;
var xpos = 0
var ypos = 0
var xdir = 5
var ydir = 5
var sound13;
var anim1 = {
    w: 0
}
var anim2 = {
    x1: -50,
    y1: -50,
    x2: -50,
    y2: -50,
    x3: -50,
    y3: -50
}


var anim3 = {
    x: 0,
    rot: 0
}
var anim4 = {
    y: 0,
    h: 0
}
var sound14;
var sound15;
var sound16;
var sound17;
var sound18;
var xpos18 = []
var ypos18 = []
var xtarget18 = []
var ytarget18 = []

var sound19;
var sound20;
var totalPts = 300;
var steps = totalPts + 1;
var sound21;
var hu = 130;
var sound22

var softElement;

function preload() { // charger les sons
    sound1 = loadSound("assets/audio1.wav");
    sound2 = loadSound("assets/audio2.wav");
    sound3 = loadSound("assets/audio3.wav");
    sound4 = loadSound("assets/audio4.mp3");
    sound5 = loadSound("assets/audio5.wav");
    sound6 = loadSound("assets/audio6.wav");
    sound7 = loadSound("assets/audio7.wav");
    sound8 = loadSound("assets/audio8.wav");
    sound9 = loadSound("assets/audio9.wav");
    sound10 = loadSound("assets/audio10.wav");
    sound11 = loadSound("assets/audio11.wav");
    sound12 = loadSound("assets/audio12.wav");
    sound13 = loadSound("assets/audio13.wav");
    sound14 = loadSound("assets/audio14.wav");
    sound15 = loadSound("assets/audio15.wav");
    sound16 = loadSound("assets/audio16.wav");
    sound17 = loadSound("assets/audio17.wav");
    sound18 = loadSound("assets/audio18.wav");
    sound19 = loadSound("assets/audio19.wav");
    sound20 = loadSound("assets/audio20.wav");
    sound21 = loadSound("assets/audio21.wav");
    sound22 = loadSound("assets/audio22.wav");
    sound23 = loadSound("assets/audio23.wav");
    sound24 = loadSound("assets/audio24.wav");
    sound25 = loadSound("assets/audio25.wav");
    sound26 = loadSound("assets/audio26.wav");


}


function setup() { // initialiser les valeurs ou créer des éléments de page web

    createCanvas(windowWidth, windowHeight); // dimensions de la fenetre du navigateur
    background(hu, 100, 100);



    sound3FFT = new p5.FFT(0.8, 16); // analyse de notre son
    sound3FFT.setInput(sound3);


    sound22FFT = new p5.FFT(0.8, 16); // analyse de notre son
    sound22FFT.setInput(sound22);


    sound4FFT = new p5.FFT(0.8, 1024); // analyse de notre son
    sound4FFT.setInput(sound4);


    softElement = new SoftShape(); // animation forme aléatoire blanche

    createCanvas(710, 400);




    analyzer = new p5.Amplitude(0.15); // analyse : analyseur de volume
    analyzer.setInput(sound11);
    analyzer.toggleNormalize();



    createCanvas(windowWidth, windowHeight);
    pixelDensity(1)
    pg = createGraphics(windowWidth, windowHeight) // créer le calque à la taille de la fenêtre
    pg.pixelDensity(1)

    for (var i = 0; i < 50; i++) {
        xpos18.push(random(width))
        ypos18.push(random(-height))
        xtarget18.push(random(width))
        ytarget18.push(random(height))


    }

    background(hu, 100, 100);

    sound22FFT = new p5.FFT(0.8, 16);
    sound22FFT.setInput(sound22);

}









function draw() {
    push()
    let h
    if (keyIsDown(32)) { // lorsque la barre espace est enclanchée : changement fluide de couleurs
        hu += 0.04;

    }
    colorMode(HSB, 360, 100, 300)
    background(map(sin(hu), -1, 1, 235, 275), 100, 100);
    pop()









    playSound(sound1, 65) //A > si la touche est enclenchée
    if (sound1.isPlaying() == true) {
        push();
        var rad = map(sound1.currentTime(), 0, sound1.duration(), 50, width)
        fill(185, 240, 219)
        ellipse(width * 0.5, height * 0.5, rad, rad)

        pop();
    }









    playSound(sound2, 90) //Z > si la touche est enclenchée
    if (sound2.isPlaying() == true) {
        push();
        translate(width * 0.5, height * 0.5)
        var ang = map(sound2.currentTime(), 0, sound2.duration(), 0, PI)
        rectMode(CENTER)
        rotate(ang)
        stroke(0); //contour de forme
        strokeWeight(0) //taille du contour
        fill(250, 184, 214)
        rect(0, 0, width * .3, height * .6)
        pop()

    }









    playSound(sound3, 69); //E > si la touche est enclenchée
    if (sound3.isPlaying() == true) {
        push()
        sound3FFT.analyze();
        rectMode(CENTER);
        var nrj1 = sound3FFT.getEnergy("bass")

        push()
        fill(0, 200, 255, nrj1)
        translate(width * 0.25, height * 0.5)
        rotate(PI / 4)
        noStroke()
        rect(0, 0, width * 0.2, width * 0.2)
        pop()

        push()
        fill(0, 200, 255, 50)
        translate(width * 0.5, height * 0.5)
        rotate(PI / 4)
        noStroke()
        rect(0, 0, nrj1, nrj1)
        pop()

        push()
        fill(0, 200, 255, nrj1)
        translate(width * 0.75, height * 0.5)
        rotate(PI / 4)
        noStroke()
        rect(0, 0, width * 0.2, width * 0.2)
        pop()


    }









    playSound(sound4, 82) //R > si la touche est enclenchée
    if (sound4.isPlaying() == true) {
        push()
        var waveform = sound4FFT.waveform();
        noFill();
        beginShape();
        stroke(150, 255, 225);
        strokeWeight(3);
        for (var i = 0; i < waveform.length; i++) {
            var x = map(i, 0, waveform.length, 0, width);
            var y = map(waveform[i], -1, 1, 0, height);
            curveVertex(x, y);
        }
        endShape();
        pop()
    }









    playSound(sound5, 84) // T > si la touche est enclenchée
    if (sound5.isPlaying() == true) {
        push()
        var nsegment = 270
        var ncurrentsegment = map(sound5.currentTime(), 0, sound5.duration(), 0, nsegment + 1)

        for (var i = 0; i < ncurrentsegment; i++) {
            stroke(360);
            strokeWeight(1)
            var angle = map(i, 0, nsegment, 0, TWO_PI);
            var x = width * .5 + height * .5 * cos(angle);
            var y = height * 0.5 + height * 0.5 * sin(angle);
            line(width * 0.5, height * 0.5, x, y);
        }
        pop()
    }









    playSound(sound6, 89) // Y > si la touche est enclenchée
    if (sound6.isPlaying() == true) {
        push();
        translate(width * 0.5, height * 0.5)
        var ang = map(sound6.currentTime(), 0, sound6.duration(), 0, PI)
        rectMode(CENTER)
        stroke(0);
        strokeWeight(0)
        rotate(ang)
        fill(125, 225, 214)
        rect(0, 0, width * 0.90, height * 0.1)
        pop()
    }









    playSound(sound7, 85) // U > si la touche est enclenchée
    if (sound7.isPlaying() == true) {

        push();
        var rad = map(sound7.currentTime(), 0, sound7.duration(), 50, width)
        rectMode(CENTER)
        noFill()
        stroke(255, 0, 213)
        strokeWeight(10);
        rect(width * 0.5, height * 0.5, rad, rad)

        pop();


    }


    playSound(sound8, 66) // I > si la touche est enclenchée
    if (sound8.isPlaying() == true) {
        push();
        var rad = map(sound8.currentTime(), 1, sound8.duration(), 10, width)
        noFill()
        stroke(240, 165, 208)
        strokeWeight(3) // taille du contour
        ellipse(width * 0.5, height * 0.5, rad, rad) // dessin d'une ellipse
        pop();

        push();
        var rad = map(sound8.currentTime(), 0, sound8.duration(), 20, width)
        noFill()
        stroke(240, 165, 208)
        strokeWeight(3)
        ellipse(width * 0.5, height * 0.5, rad, rad)
        pop();

        push();
        var rad = map(sound8.currentTime(), 5, sound8.duration(), 30, width)
        noFill()
        stroke(240, 165, 208) // couleur de notre contour
        strokeWeight(3)
        ellipse(width * 0.5, height * 0.5, rad, rad)
        pop();


    }



    playSound(sound9, 73) // O  > si la touche est enclenchée
    if (sound9.isPlaying() == true) {
        push();
        from = color(255, 255, 208, 90);
        to = color(255, 255, 208, 90);
        stroke(255); //couleur de notre contour
        strokeWeight(1) // taille de notre contour
        for (var i = 0; i < 2; i++) {

            fill(to);
            quad(random(500, 750), random(height),
                random(500, 750), random(height),
                random(500, 750), random(height),
                random(500, 750), random(height));
        }
        frameRate(50);
        pop();

    }









    playSound(sound10, 79) // P > si la touche est enclenchée
    if (sound10.isPlaying() == true) {
        push()

        noStroke()
        softElement.drawShape()
        softElement.moveShape()
        pop()
        // aller au dossier sofshape.js pour voir le code de cette animation

    }








    playSound(sound11, 80) //Q > si la touche est enclenchée
    if (sound11.isPlaying() == true) {
        push();
        var rms = analyzer.getLevel();
        var ellipseSize = map(rms, 0, 1, 50, 800);
        var ellipseAlpha = map(rms, 0, 1, 50, 255);

        fill(247, 221, 213)
        noStroke() // pas de contour

        ellipse(width * 0.5, height * 0.5, ellipseSize, ellipseSize)
        pop();
    }









    playSound(sound12, 81) // S > si la touche est enclenchée
    if (sound12.isPlaying() == true) {}



    if (keyIsDown(81)) {
        background(frameCount % 255, 255 - frameCount % 170, 300)
        xpos += xdir
        ypos += ydir
        if (xpos > width || xpos < 0) {
            xdir *= -1
        }
        if (ypos > height || ypos < 0) {
            ydir *= -1
        }

        pg.noStroke()
        pg.fill(255)
        pg.ellipse(xpos, ypos, 30, 30)


        image(pg, 0, 0, width, height)

    } else {

        pg = createGraphics(windowWidth, windowHeight)
        pg.pixelDensity(1)

        xpos = random(width)
        ypos = random(height)
        xdir = random(1, 130)
        ydir = random(1, 130)

    }



    function windowResized() {
        resizeCanvas(windowWidth, windowHeight);
    }









    playSound(sound13, 83) // D > si la touche est enclenchée
    if (sound13.isPlaying() == true) {
        push()
        noFill()
        stroke(0, 255, 213)
        strokeWeight(3)
        ellipse(width * 0.5, height * 0.5, anim1.w, anim1.w)
        pop()
    }

    if (keyIsDown(83)) {

        anim1 = {
            w: 0
        }

        var animation1 = anime({
            targets: anim1,
            w: height * 0.7,
            easing: [.91, -0.54, .29, 1.56],
            direction: 'alternate',
            loop: true,
            duration: 1000
        });


    }









    playSound(sound14, 68) //F > si la touche est enclenchée
    if (sound14.isPlaying() == true) {

        var nsegment = 252
        var ncurrentsegment = map(sound14.currentTime(), 0, sound14.duration(), 0, nsegment + 1)
        push()
        for (var i = 0; i < ncurrentsegment; i++) {
            stroke(68, 170, 213);
            strokeWeight(1)
            var angle = map(i, 0, nsegment, 0, PI);
            var x = width * 0.5 + height * 0.45 * cos(angle);
            var y = height * 0.5 + height * 0.45 * sin(angle);
            line(width * 0.5, height * 0.5, x, y);
        }
        pop()
    }





    playSound(sound15, 70) //G > si la touche est enclenchée
    if (sound15.isPlaying() == true) {
        push()
        noStroke()
        fill(255, 255, 183)
        ellipse(anim2.x1, anim2.y1, 50, 50)
        fill(0, 252, 183)
        ellipse(anim2.x2, anim2.y2, 50, 50)
        fill(255, 0, 183)
        ellipse(anim2.x3, anim2.y3, 50, 50)
        pop()
    }

    if (keyIsDown(70)) {

        anim2 = {
            x1: -50,
            y1: -50,
            x2: -50,
            y2: -50,
            x3: -50,
            y3: -50
        }

        var timelineParameters = anime.timeline({
                easing: 'easeInOutElastic',
                direction: 'alternate',
                loop: false
            }).add({
                targets: anim2,
                x1: [{
                    value: width * 0.80
                }, {
                    value: width * 0.160
                }, {
                    value: width * 0.250
                }, {
                    value: -50
                }],
                y1: [{
                    value: height * 0.30
                }, {
                    value: height * 0.60
                }, {
                    value: height * 0.60
                }, {
                    value: -50
                }],
                duration: 3000
            })
            .add({
                targets: anim2,
                x2: [{
                    value: width * 0.80
                }, {
                    value: width * 0.160
                }, {
                    value: width * 0.250
                }, {
                    value: -50
                }],
                y2: [{
                    value: height * 0.30
                }, {
                    value: height * 0.90
                }, {
                    value: height * 0.60
                }, {
                    value: -50
                }],
                duration: 3000,
                offset: 200
            })
            .add({
                targets: anim2,
                x3: [{
                    value: width * 0.80
                }, {
                    value: width * 0.250
                }, {
                    value: -50
                }],
                y3: [{
                    value: height * 0.60
                }, {
                    value: height * 0.30
                }, {
                    value: height * 0.30
                }, {
                    value: -50
                }],
                duration: 3000,
                offset: 400
            });
    }






    playSound(sound16, 71) // H > si la touche est enclenchée
    if (sound16.isPlaying() == true) {
        push()
        noStroke()
        rectMode(CENTER)
        fill(164, 88, 249)
        translate(anim3.x, height * 0.5)
        rotate(anim3.rot)
        rect(0, 0, 80, 160)
        pop()
    }


    if (keyIsDown(71)) {

        anim3 = {
            x: 0,
            rot: 0
        }

        var animationMyObject = anime({
            targets: anim3,
            x: width,
            rot: TWO_PI,
            easing: 'easeOutExpo',
            direction: 'alternate',
            loop: true,
            duration: 5000
        });
    }







    playSound(sound17, 72) // J > si la touche est enclenchée
    if (sound17.isPlaying() == true) {
        push()
        noStroke()
        rectMode(CENTER)
        fill(0, 255, 255)
        rect(width * 0.5, anim4.y, 50, anim4.h)
        pop()

    }

    if (keyIsDown(72)) {

        anim4 = {
            y: 0,
            h: 0
        }

        var animationMyObject = anime({
            targets: anim4,
            y: [
                {
                    value: height,
                    duration: 1000,
                    delay: 500,
                    elasticity: 0
                    },
                {
                    value: 0,
                    duration: 1000,
                    delay: 500,
                    elasticity: 0
                    }
                ],
            h: [
                {
                    value: [175, 50],
                    duration: 500
                    },
                {
                    value: 200,
                    duration: 50,
                    delay: 1000,
                    easing: 'easeOutExpo'
                    },
                {
                    value: 100,
                    duration: 450
                    },
                {
                    value: 175,
                    duration: 50,
                    delay: 1000,
                    easing: 'easeOutExpo'
                    },
                {
                    value: 10,
                    duration: 450
                    }
                ]
        })
    }







    playSound(sound18, 74) // K  > si la touche est enclenchée

    if (sound18.isPlaying() == true) {
        push()
        var t = map(sound18.currentTime(), -30, sound18.duration() * 0.9, 0, 01)

        t = constrain(t, 0, 1)

        for (var i = 0; i < 100; i++) {
            var x = lerp(xpos18[i], xtarget18[i], t)
            var y = lerp(ypos18[i], ytarget18[i], t)
            ellipse(x, y, 30, 30)
        }
        pop()
    }






    playSound(sound19, 75) // L > si la touche est enclenchée

    if (sound19.isPlaying() == true) {
        noStroke()
        push();
        var long = map(sound19.currentTime(), 0, sound19.duration(), 25, width)



        rectMode(CENTER)
        fill(255, 0, 213)
        rect(width / 2, height / 2, long, 5);
        noStroke();

        fill(0, 255, 213)
        rect(width / 2, height / 3, long, 5);
        noStroke();

        fill(0, 255, 213)
        rect(width / 2, height / 1.5, long, 5);
        noStroke();



        pop();
    }







    playSound(sound20, 76) // M > si la touche est enclenchée
    if (sound20.isPlaying() == true) {
        push();
        var rand = 0;
        stroke(133, 138, 213)
        strokeWeight(15);
        for (var i = 1; i < steps; i++) {
            point((width / steps) * i, (height / 2) + random(-rand, rand));
            rand += random(-5, 5);
        }
        pop();
    }









    playSound(sound21, 77) // W > si la touche est enclenchée
    if (sound21.isPlaying() == true) {
        push();
        translate(width * 0.5, height * 0.5)
        var ang = map(sound21.currentTime(), 0, sound21.duration(), 0, PI)
        rectMode(CENTER)
        rotate(ang)
        noStroke()
        fill(0, 255, 253)
        rect(0, 0, width * 25, height * 0.004)
        pop()

        push();
        translate(width * 0.5, height * 0.5)
        var ang = map(sound21.currentTime(), 0, sound21.duration(), 0, PI)
        rectMode(CENTER)
        rotate(ang)
        noStroke()
        fill(0, 255, 253)
        rect(0, 0, width * 0.002, height * 25)
        pop()



    }









    playSound(sound22, 87); // X > si la touche est enclenchée
    if (sound22.isPlaying() == true) {
        push()
        sound22FFT.analyze();
        rectMode(CENTER); // centrer la forme
        var nrj1 = sound22FFT.getEnergy("bass")

        push()
        fill(176, 255, 213, nrj1)
        translate(width * 0.25, height * 0.5)
        rotate(PI / 4)
        noStroke() // PAS DE CONTOUR
        ellipse(0, 0, width * 0.04, width * 0.04) // DESSINER UNE ELLISPSE
        pop()

        push()
        fill(224, 255, 213)
        translate(width * 0.5, height * 0.5)
        rotate(PI / 4)
        noStroke()
        rect(0, 0, nrj1, nrj1)
        pop()

        push()
        fill(176, 255, 213, nrj1)
        translate(width * 0.75, height * 0.5)
        rotate(PI / 4)
        noStroke()
        ellipse(0, 0, width * 0.04, width * 0.04)
        pop()

        push()
        fill(87, 255, 213, nrj1)
        translate(width * 0.85, height * 0.5)
        rotate(PI / 4)
        noStroke()
        ellipse(0, 0, width * 0.025, width * 0.025)
        pop()

        push()
        fill(87, 255, 213, nrj1)
        translate(width * 0.15, height * 0.5)
        rotate(PI / 4)
        noStroke()
        ellipse(0, 0, width * 0.025, width * 0.025)
        pop()

        push()
        fill(0, 255, 213, nrj1)
        translate(width * 0.05, height * 0.5)
        rotate(PI / 4)
        noStroke()
        ellipse(0, 0, width * 0.01, width * 0.01)
        pop()

        push()
        fill(0, 255, 213, nrj1)
        translate(width * 0.95, height * 0.5)
        rotate(PI / 4)
        noStroke()
        ellipse(0, 0, width * 0.01, width * 0.01)
        pop()

    }






    playSound(sound23, 88) //C > si la touche est enclenchée
    if (sound23.isPlaying() == true) {
        push();
        var rad = map(sound23.currentTime(), 0, sound23.duration(), 10, width)
        noFill()
        stroke(255, 255, 213)
        strokeWeight(13)
        ellipse(width * 1, height * 0.5, rad, rad)
        pop();

        push();
        var rad = map(sound23.currentTime(), 0, sound23.duration(), 10, width)
        noFill()
        stroke(255, 255, 213)
        strokeWeight(13)
        ellipse(width * 0, height * 0.5, rad, rad)
        pop();
    }






    playSound(sound24, 67) //  V > si la touche est enclenchée
    if (sound24.isPlaying() == true) {
        push();
        translate(width * 0.5, height * 0.5)
        var ang = map(sound24.currentTime(), 0, sound24.duration(), 0, PI)
        rectMode(CENTER)
        rotate(ang)
        noFill()
        stroke(255, 203, 213)
        strokeWeight(5)
        rect(0, 0, width * 0.25, height * 0.45)
        pop()

        push();
        translate(width * 0.5, height * 0.5)
        var ang = map(sound24.currentTime(), 0, sound24.duration(), 0, PI)
        rectMode(CENTER)
        rotate(ang)
        noFill()
        stroke(255, 120, 213)
        strokeWeight(4)
        rect(0, 0, width * 0.15, height * 0.25)
        pop()

        push();
        translate(width * 0.5, height * 0.5)
        var ang = map(sound24.currentTime(), 0, sound24.duration(), 0, PI)
        rectMode(CENTER)
        rotate(ang)
        noFill()
        stroke(255, 0, 213)
        strokeWeight(3)
        rect(0, 0, width * 0.060, height * 0.099)
        pop()

    }


    playSound(sound25, 86) // B > si la touche est enclenchée
    if (sound25.isPlaying() == true) {
        push();
        var rand = 0;
        stroke(249, 66, 158)
        strokeWeight(4);
        for (var i = 2; i < steps; i++) {
            point((width / steps) * i, (height / 2) + random(-rand, rand));
            rand += random(-900, 900);
        }
        pop();

        push();
        var rand = 0;
        stroke(0, 255, 253)
        strokeWeight(4);
        for (var i = 2; i < steps; i++) {
            point((width / steps) * i, (height / 2) + random(-rand, rand));
            rand += random(-900, 900);
        }
        pop();
    }




    playSound(sound26, 78) // N  > si la touche est enclenchée
    if (sound26.isPlaying() == true) {

        var nsegment = 696
        var ncurrentsegment = map(sound26.currentTime(), 0, sound26.duration(), 0, nsegment + 1)
        push()
        for (var i = 0; i < ncurrentsegment; i++) {
            stroke(124, 87, 253);
            strokeWeight(0.5)
            var angle = map(i, 1, nsegment, 0, PI);
            var x = width * 0 + height * 18.5 * cos(angle);
            var y = height * 0.5 + height * 0.5 * sin(angle);
            line(width * 1, height * 0, x, y);
        }
        pop()
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
    background(hu, 100, 100)

}

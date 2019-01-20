/*Référence :
https://p5js.org/reference/
https://github.com/b2renger/p5js_codecreatif
*/


var sound1;
var sound2;
var sound3;
var anim3 = {
    m: 0,
    rot: 0
}
var sound4;
var sound4FFT; //son aigu ou grave
var sound5;
var sound6;
var sound7;
var sound8;
var sound9;
var sound10;
var sound11;
var sound12;
var sound12Amp; //son fort
var sound13;
var anim5 = {
    dbis: 0,
    rotbis: 0
}
var sound14;
var sound15;
var sound16;
var sound17;
var sound18;
var sound19;
var anim4 = {
    y: 0,
    h: 0
}
var sound20;
var sound21;
var sound22;
var sound23;
var sound24;
var sound24FFT;
var sound25;
var sound25FFT;
var sound26;
var sound26FFT;
var xpos = []; // à l'extérieur de notre tableau
var ypos = []; // à l'intérieur de notre tableau
//pour animation : Q sound11
var q = 25;
var t = 100;
var vivi = 35;
var trajet = 1;
var a;
var b = b;
var c = c;
var d = d;
var e;
var f;
var g;
var h;
var o;
var j;
var k;
var n;
var p;





function preload() { //charger un son
    sound1 = loadSound("assets/triangle.mp3");
    sound2 = loadSound("assets/basson.mp3");
    sound3 = loadSound("assets/cuivre.mp3");
    sound4 = loadSound("assets/batterie.mp4");
    sound5 = loadSound("assets/basse.mp3");
    sound6 = loadSound("assets/flute.mp4");
    sound7 = loadSound("assets/harpe.mp3");
    sound8 = loadSound("assets/cuivre2.mp3");
    sound9 = loadSound("assets/belltree.mp4");
    sound10 = loadSound("assets/xylophone.mp3");
    sound11 = loadSound("assets/acordeon.mp3");
    sound12 = loadSound("assets/caisseclair.mp4");
    sound13 = loadSound("assets/violon.mp4");
    sound14 = loadSound("assets/ipuheke.mp3");
    sound15 = loadSound("assets/contrebasse.mp3");
    sound16 = loadSound("assets/piano.mp4");
    sound17 = loadSound("assets/hautbois.mp4");
    sound18 = loadSound("assets/saxophone.mp4");
    sound19 = loadSound("assets/maracas.mp4");
    sound20 = loadSound("assets/tambourin.mp3");
    sound21 = loadSound("assets/timbale.mp3");
    sound22 = loadSound("assets/clarinette.mp4");
    sound23 = loadSound("assets/guitare.mp4");
    sound24 = loadSound("assets/castagnette.mp3")
    sound25 = loadSound("assets/harmonica.mp3")
    sound26 = loadSound("assets/djembe.mp3")
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    sound12Amp = new p5.Amplitude();
    sound12Amp.setInput(sound12);

    sound4FFT = new p5.FFT(0.8, 16);
    sound4FFT.setInput(sound4);

    sound24FFT = new p5.FFT(0.8, 16);
    sound24FFT.setInput(sound24);

    sound25FFT = new p5.FFT(0.8, 16);
    sound25FFT.setInput(sound25);

    sound26FFT = new p5.FFT(0.8, 16);
    sound26FFT.setInput(sound26);


    //boucle for pour créer le cadre dans lequel apparaisse les notes
    for (var i = 0; i < 9; i++) {
        xpos.push(random(150, width - 150));
        ypos.push(random(200, height - 100));
    }

    pixelDensity(1)

    a = new AnimateDrawing(xpos1, ypos1, 1);
    b = new AnimateDrawing(xpos2, ypos2, 1);
    c = new AnimateDrawing(xpos3, ypos3, 1);
    d = new AnimateDrawing(xpos4, ypos4, 1);
    e = new AnimateDrawing(xpos5, ypos5, 1);
    f = new AnimateDrawing(xpos6, ypos6, 1);
    g = new AnimateDrawing(xpos7, ypos7, 1);
    h = new AnimateDrawing(xpos8, ypos8, 1);
    o = new AnimateDrawing(xpos9, ypos9, 1);
    j = new AnimateDrawing(xpos10, ypos10, 1);
    k = new AnimateDrawing(xpos11, ypos11, 1);
    n = new AnimateDrawing(xpos12, ypos12, 1);
    p = new AnimateDrawing(xpos13, ypos13, 1);

}


function draw() {
    background(254, 253, 240);




    //animation Q son d'acordéon noir pointée
    playSound(sound11, 81); //Q
    if (sound11.isPlaying() == true) {

        push();

        stroke(0);
        strokeWeight(5);
        push();
        fill(0);
        translate(width * 0.4, height * 0.3);
        rotate(PI / 4);
        ellipse(0, 0, width * 0.06, width * 0.092);
        pop();
        line(width * 0.36, height * 0.32, width * 0.36, height * 0.7);
        if (sound11.currentTime() > 0 && sound11.currentTime() < 0.5) {
            push();
            ellipseMode(CENTER);
            t += vivi * trajet;
            fill(0);
            ellipse(t, height * 0.3, q, q);
            if ((t > width - q / 2) || (t < q / 2)) {
                trajet = -trajet; // Changer de direction
            }
            pop();
        }
        if (sound11.currentTime() > 0.5) {
            push();
            ellipseMode(CENTER);
            fill(0);
            ellipse(width * 0.5, height * 0.3, 25, 25)
            pop();
        }
        if (sound11.currentTime() > 0.8 && sound11.currentTime() < 1.4) {
            push();
            ellipseMode(CENTER);
            t += vivi * trajet;
            fill(0);
            ellipse(t, height * 0.3, q, q);
            if ((t > width - q / 2) || (t < q / 2)) {
                trajet = -trajet; // Changer de direction
            }
            pop();
        }
        if (sound11.currentTime() > 1.4) {
            push();
            ellipseMode(CENTER);
            fill(0);
            ellipse(width * 0.6, height * 0.3, 25, 25)
            pop();
        }
        pop();
    }






    //annimation ronde avec le A et le son du triangle
    playSound(sound1, 65); //A
    if (sound1.isPlaying() == true) {
        push();
        var radius = map(sound1.currentTime(), 0, sound1.duration(), 50, width * 0.5);
        noFill();
        stroke(0);
        strokeWeight(15);
        ellipse(width * 0.5, height * 0.5, radius, radius);
        strokeWeight(7);
        line(width * 0.2, height * 0.5, width * 0.8, height * 0.5);
        pop();
    }






    // annimation avec le O et le son basson, mesure identique
    playSound(sound2, 79); //O
    if (sound2.isPlaying() == true) {
        push();
        if (sound2.currentTime() > 0 && sound2.currentTime() < 2) {
            push();
            translate(width * 0.5, height * 0.5);
            var angle = map(sound2.currentTime(), 0, sound2.duration(), 0, PI);
            rotate(angle);
            rectMode(CENTER);
            fill(0);
            rect(0, 0, width * 0.3, height * 0.1);
            ellipse(width * (-0.02), height * (-0.28), width * 0.06, width * 0.06);
            ellipse(width * (0.02), height * (0.28), width * 0.06, width * 0.06);
            pop();
        }
        if (sound2.currentTime() > 2) {
            push();
            translate(width * 0.5, height * 0.5);
            rotate(PI / (-4));
            rectMode(CENTER);
            fill(0);
            rect(0, 0, width * 0.3, height * 0.1);
            ellipse(width * (-0.02), height * (-0.28), width * 0.06, width * 0.06);
            ellipse(width * (0.02), height * (0.28), width * 0.06, width * 0.06);
            pop();
        }
        pop();
    }







    //animation bécarre avec le Z et le son cuivre
    if (keyIsDown(90)) {
        anim3 = {
            m: 0,
            rot: 0
        }

        var animationMyObject = anime({
            targets: anim3,
            m: width * 0.8,
            rot: TWO_PI,
            easing: 'easeOutExpo',
            direction: 'alternate',
            loop: true,
            duration: 1000
        });
    }
    playSound(sound3, 90); //Z
    if (sound3.isPlaying() == true) {
        push()
        noStroke()
        rectMode(CENTER)
        translate(anim3.m, height * 0.5)
        rotate(anim3.rot)
        stroke(0);
        strokeWeight(4);
        line(0, 0, 0, height * 0.45);
        line(width * 0.15, height * 0.2, width * 0.15, height * 0.6);
        fill(0);
        quad(0, height * 0.325, 0, height * 0.25, width * 0.15, height * 0.2, width * 0.15, height * 0.275); //rectangle du haut
        quad(0, height * 0.45, 0, height * 0.375, width * 0.15, height * 0.325, width * 0.15, height * 0.4); //rectangle du bas
        pop()
    }






    // annimation E, son d'une batterie, soupir
    playSound(sound4, 69); //E
    if (sound4.isPlaying() == true) {
        push();
        p.animateDrawing(color(0), 5)
        strokeWeight(5);
        line(width*0.5, height*0.4, width*0.545, height*0.41);
        pop()
    } else {
        // on reset le dessin
        p.resetDrawing()

    }





    // animation R, son de basse, partition
    playSound(sound5, 82); //R
    if (sound5.isPlaying() == true) {
        push();
        translate(width * 0, height * 0.2);
        var longueur = map(sound5.currentTime(), 0, sound5.duration(), 20, width * 1);
        fill(0);
        rect(0, 0, longueur, height * 0.01);
        rect(0, 50, longueur, height * 0.01);
        rect(0, 100, longueur, height * 0.01);
        rect(0, 150, longueur, height * 0.01);
        rect(0, 200, longueur, height * 0.01);

        rect(0, 350, longueur, height * 0.01);
        rect(0, 400, longueur, height * 0.01);
        rect(0, 450, longueur, height * 0.01);
        rect(0, 500, longueur, height * 0.01);
        rect(0, 550, longueur, height * 0.01);
        pop();
        if (sound5.currentTime() == 0.1) {
            push();
            translate(0, height * 0.2);
            rect(200, 0, width * 0.01, height * 0.27);
            pop();
        }
    }






    //animation T, son de flute, mordant
    playSound(sound6, 84); //T
    //essayer de commencer le translate quand termine le dernier
    if (sound6.isPlaying() == true) {
        push();
        if (sound6.currentTime() > 0) {
            push();
            translate(width * 0.1, height * 0.4);
            rotate(PI / 4)
            line(0, 0, 0, height * (-0.33));
            pop();
        }
        if (sound6.currentTime() > 0.1) {
            push();
            translate(width * 0.33, height * 0.4);
            fill(0);
            rotate(-PI / 4);
            rect(0, 0, width * (0.03), height * (-0.282));
            pop();
        }
        if (sound6.currentTime() > 1.2) {
            push();
            translate(width * 0.33, height * 0.4);
            rotate(PI / 4)
            line(0, 0, 0, height * (-0.33));
            pop();
        }
        if (sound6.currentTime() > 1.4) {
            push();
            translate(width * 0.56, height * 0.4);
            fill(0);
            rotate(-PI / 4);
            rect(0, 0, width * (0.03), height * (-0.282));
            pop();
        }

        if (sound6.currentTime() > 1.6) {
            push();
            translate(width * 0.56, height * 0.4);
            rotate(PI / 4)
            line(0, 0, 0, height * (-0.33));
            pop();
        }
        if (sound6.currentTime() > 1.8) {
            push();
            translate(width * 0.79, height * 0.4);
            fill(0);
            rotate(-PI / 4);
            rect(0, 0, width * (0.03), height * (-0.282));
            pop();
        }
        if (sound6.currentTime() > 2) {
            push();
            translate(width * 0.79, height * 0.4);
            rotate(PI / 4)
            line(0, 0, 0, height * (-0.33));
            pop();
        }
        pop();
    }





    //animation y, son de harpe, blanches
    playSound(sound7, 89); //Y
    if (sound7.isPlaying() == true) {
        push();
        if (sound7.currentTime() > 0) { //début 1
            push();
            var nnotes = map(sound7.currentTime(), 0, sound7.duration() * 0.8, 0, ypos.length);
            nnotes = constrain(nnotes, 0, ypos.length);
            for (var i = 0; i < nnotes; i++) {
                stroke(0);
                strokeWeight(6);
                fill(254, 253, 240);
                line(xpos[i] + 25, ypos[i], xpos[i] + 25, ypos[i] - 200);
                ellipse(xpos[i], ypos[i], 50, 65);
            }
            pop();
        }
        pop();
    }






    // animation u, son de cuivre, point d'orgue
    playSound(sound8, 85); //U
    if (sound8.isPlaying() == true) {
        push();
        push();
        translate(width * 0.1, height * 0.35);
        noFill();
        stroke(0);
        strokeWeight(10);
        curve(0, height * (-0.6), width * 0.27, 0, width * 0.54, 0, width * 0.85, height * (-0.6));
        pop();
        push();
        translate(width * 0.1, height * 0.65);
        noFill();
        stroke(0);
        strokeWeight(10);
        curve(0, height * 0.6, width * 0.27, 0, width * 0.54, 0, width * 0.85, height * 0.6);
        pop();
        if (sound8.currentTime() > 0.8) { //début 1
            var radius = map(sound8.currentTime(), 0, sound8.duration() * 0.3, 40, width * 0.01);
            fill(0);
            ellipse(width * 0.5, height * 0.32, radius, radius);
            ellipse(width * 0.5, height * 0.68, radius, radius);
        }
        pop();
    }





    //animation I, son de belltree
    playSound(sound9, 73); //I
    if (sound9.isPlaying() == true) {
        push();
        var nsegment = 8;
        var ncurrentsegment = (map(sound9.currentTime(), 0, sound9.duration(), 0, nsegment + 1));
        for (var i = 0; i < ncurrentsegment; i++) {
            stroke(0);
            strokeWeight(6);
            var angle = map(i, 0, nsegment, 0, TWO_PI);
            var x = width * 0.2 + height * 0.2 * cos(angle);
            var y = height * 0.2 + height * 0.2 * sin(angle);
            line(width * 0.2, height * 0.2, x, y);
        }
        pop();
    }






    //animation P, son de xylophone, double dièse
    playSound(sound10, 80); //P
    if (sound10.isPlaying() == true) {
        push();
        noStroke;
        fill(0);
        rectMode(CENTER);
        translate(width * 0.2, 0)
        if (sound10.currentTime() > 0) {
            push
            rect(height * 0.2, height * 0.2, 80, 80);
        }
        if (sound10.currentTime() > 0.3) {
            rect(height * 0.8, height * 0.2, 80, 80);
        }
        if (sound10.currentTime() > 0.6) {
            rect(height * 0.2, height * 0.8, 80, 80);
        }
        if (sound10.currentTime() > 0.9) {
            rect(height * 0.8, height * 0.8, 80, 80);
        }
        if (sound10.currentTime() > 1.2) {
            stroke(0)
            strokeWeight(3);
            line(height * 0.2, height * 0.2, height * 0.8, height * 0.8);
            line(height * 0.8, height * 0.2, height * 0.2, height * 0.8);
        }
        pop();
    }







    //animation S, son de caisse clair, cahier de partition
    playSound(sound12, 83); //S
    if (sound12.isPlaying() == true) {
        push();
        if (sound12.currentTime() > 0 && sound12.currentTime() < 0.5) {
            push();
            var lvl = sound12Amp.getLevel();
            var whitelvl = map(lvl, 0, 0, 6, 0, 255);
            noStroke();
            fill(whitelvl);
            rect(width * 0.45, height * 0.2, width * 0.25, width * 0.3);
            console.log(lvl); //imprimer des valeurs dans la console
            pop();
        }
        if (sound12.currentTime() > 0.5) {
            push();
            var lvl = sound12Amp.getLevel();
            var whitelvl = map(lvl, 0, 0, 6, 0, 255);
            noStroke();
            fill(whitelvl);
            rect(width * 0.2, height * 0.2, width * 0.25, width * 0.3);
            console.log(lvl); //imprimer des valeurs dans la console
            pop();
        }
        noFill();
        stroke(0);
        strokeWeight(4);
        rect(width * 0.2, height * 0.2, width * 0.5, width * 0.3);
        pop();
    }





    //animation D, son de violon, respiration
    playSound(sound13, 68); //D
    if (sound13.isPlaying() == true) {
        push();
        point(width * 0.4, height * 0.3);
        point(width * 0.48, height * 0.5);
        point(width * 0.45, height * 0.6);
        point(width * 0.53, height * 0.5);
        point(width * 0.5, height * 0.3);
        fill(0);
        beginShape();
        curveVertex(width * 0.4, height * 0.3);
        curveVertex(width * 0.48, height * 0.5);
        curveVertex(width * 0.45, height * 0.6);
        curveVertex(width * 0.53, height * 0.5);
        curveVertex(width * 0.5, height * 0.3);
        endShape();
        pop();
        push();
        frameRate(1000);
        var step = frameCount % 100;
        // Equivalent to translate(x, y);
        applyMatrix(1, 0, 0, 1, 0, 0 + step * 2.4);
        noStroke();
        fill(254, 253, 240);
        rect(width * 0.4, height * 0.4, width * 0.55, height * 2.5)
        pop();
    }





    //animation F, son de ipu heke, lignature
    playSound(sound14, 70); //F
    if (sound14.isPlaying() == true) {
        push();
        if (sound14.currentTime() > 0 && sound14.currentTime() < 0.5) {
            push();
            frameRate(10);
            rectMode(CENTER);
            var step = frameCount % 20;
            translate(90, 90);
            // Equivalent to scale(x, y);
            applyMatrix(2 / step, 0, 0, 2 / step, 0, 0);
            stroke(0);
            strokeWeight(4);
            noFill();
            line(width * 0.2, height * 0.2, width * 0.4, height * 0.1);
            line(width * 0.2, height * 0.2, width * 0.2, height * 0.5);
            line(width * 0.4, height * 0.1, width * 0.4, height * 0.4);
            ellipse(width * 0.175, height * 0.5, width * 0.05, width * 0.08);
            ellipse(width * 0.375, height * 0.4, width * 0.05, width * 0.08);
            pop();
        }
        if (sound14.currentTime() > 0.5 && sound14.currentTime() < 1) {
            frameRate(10);
            rectMode(CENTER);
            var step = frameCount % 60;
            translate(90, 90);
            // Equivalent to scale(x, y);
            applyMatrix(4 / step, 0, 0, 4 / step, 0, 0);
            stroke(0);
            strokeWeight(4);
            noFill(254, 253, 240);
            line(width * 0.2, height * 0.2, width * 0.4, height * 0.1);
            line(width * 0.2, height * 0.2, width * 0.2, height * 0.5);
            line(width * 0.4, height * 0.1, width * 0.4, height * 0.4);
            ellipse(width * 0.175, height * 0.5, width * 0.05, width * 0.08);
            ellipse(width * 0.375, height * 0.4, width * 0.05, width * 0.08);
        }
        if (sound14.currentTime() > 1 && sound14.currentTime() < 1.2) {
            frameRate(10);
            rectMode(CENTER);
            var step = frameCount % 40;
            translate(50, 50);
            // Equivalent to scale(x, y);
            applyMatrix(8 / step, 10, 10, 8 / step, 50, 50);
            stroke(0);
            strokeWeight(4);
            noFill();
            line(width * 0.2, height * 0.2, width * 0.4, height * 0.1);
            line(width * 0.2, height * 0.2, width * 0.2, height * 0.5);
            line(width * 0.4, height * 0.1, width * 0.4, height * 0.4);
            ellipse(width * 0.175, height * 0.5, width * 0.05, width * 0.08);
            ellipse(width * 0.375, height * 0.4, width * 0.05, width * 0.08);
        }
        if (sound14.currentTime() > 1.3 && sound14.currentTime() < 1.4) {
            frameRate(10);
            rectMode(CENTER);
            var step = frameCount % 70;
            translate(90, 90);
            // Equivalent to scale(x, y);
            applyMatrix(2 / step, 0, 0, 2 / step, 0, 0);
            stroke(0);
            strokeWeight(4);
            noFill();
            line(width * 0.2, height * 0.2, width * 0.4, height * 0.1);
            line(width * 0.2, height * 0.2, width * 0.2, height * 0.5);
            line(width * 0.4, height * 0.1, width * 0.4, height * 0.4);
            ellipse(width * 0.175, height * 0.5, width * 0.05, width * 0.08);
            ellipse(width * 0.375, height * 0.4, width * 0.05, width * 0.08);
        }
        if (sound14.currentTime() > 1.4) {
            frameRate(10);
            rectMode(CENTER);
            var step = frameCount % 50;
            translate(90, 90);
            // Equivalent to scale(x, y);
            applyMatrix(20 / step, 0, 0, 20 / step, 0, 0);
            stroke(0);
            strokeWeight(4);
            noFill();
            line(width * 0.2, height * 0.2, width * 0.4, height * 0.1);
            line(width * 0.2, height * 0.2, width * 0.2, height * 0.5);
            line(width * 0.4, height * 0.1, width * 0.4, height * 0.4);
            ellipse(width * 0.175, height * 0.5, width * 0.05, width * 0.08);
            ellipse(width * 0.375, height * 0.4, width * 0.05, width * 0.08);
        }
        pop();
    }





    //animation G, son de contrebasse, dièse
    playSound(sound15, 71); //G
    if (sound15.isPlaying() == true) {
        push();
        frameRate(12);
        rectMode(CENTER);
        var step = frameCount % 20;
        var angle = map(step, 0, 20, -PI / 4, PI / 4);
        translate(50, 50);
        // equivalent to shearX(angle);
        var shear_factor = 1 / tan(PI / 2 - angle);
        applyMatrix(1, 0, shear_factor, 1, 0, 0);
        fill(0);
        stroke(0);
        strokeWeight(4);
        quad(width * 0.3, height * 0.3, width * 0.7, height * 0.2, width * 0.7, height * 0.3, width * 0.3, height * 0.4);
        quad(width * 0.3, height * 0.7, width * 0.7, height * 0.6, width * 0.7, height * 0.7, width * 0.3, height * 0.8);
        line(width * 0.4, height * 0.2, width * 0.4, height * 0.9);
        line(width * 0.6, height * 0.2, width * 0.6, height * 0.9);
        pop();
    }





    //animation H, son de piano, noir
    playSound(sound16, 72); //H
    if (sound16.isPlaying() == true) {
        push();
        frameRate(1000);
        var step = frameCount % 120;
        // Equivalent to translate(x, y);
        applyMatrix(1, 0, 0, 1, 0 + step * 10, 0);
        push();
        fill(0);
        translate(width * 0.4, height * 0.3);
        rotate(PI / 4);
        ellipse(0, 0, width * 0.06, width * 0.092);
        pop();
        stroke(0);
        strokeWeight(4);
        line(width * 0.36, height * 0.32, width * 0.36, height * 0.7);
        noFill();
        bezier(width * 0.36, height * 0.7, width * 0.4, height * 0.61, width * 0.47, height * 0.57, width * 0.47, height * 0.45);
        pop();
    }






    // animation J, son de hautbois, indicateur de tempo
    playSound(sound17, 74); //J
    if (sound17.isPlaying() == true) {
        push();
        if (sound17.currentTime() > 0 && sound17.currentTime() < 0.1) {
            noFill();
            stroke(0);
            strokeWeight(4);
            bezier(width * 0.5, height * 0.3, width * 0.3, height * 0.2, width * 0.3, height * 0.8, width * 0.5, height * 0.7);
            fill(0);
            ellipse(width * 0.5, height * 0.35, width * 0.048, width * 0.057)
        }
        if (sound17.currentTime() > 0.2 && sound17.currentTime() < 0.3) {
            noFill();
            stroke(0);
            strokeWeight(4);
            bezier(width * 0.5, height * 0.3, width * 0.3, height * 0.2, width * 0.3, height * 0.8, width * 0.5, height * 0.7);
            fill(0);
            ellipse(width * 0.5, height * 0.35, width * 0.048, width * 0.057)
        }
        if (sound17.currentTime() > 0.4 && sound17.currentTime() < 0.5) {
            noFill();
            stroke(0);
            strokeWeight(4);
            bezier(width * 0.5, height * 0.3, width * 0.3, height * 0.2, width * 0.3, height * 0.8, width * 0.5, height * 0.7);
            fill(0);
            ellipse(width * 0.5, height * 0.35, width * 0.048, width * 0.057)
        }
        if (sound17.currentTime() > 0.7 && sound17.currentTime() < 0.8) {
            noFill();
            stroke(0);
            strokeWeight(4);
            bezier(width * 0.5, height * 0.3, width * 0.3, height * 0.2, width * 0.3, height * 0.8, width * 0.5, height * 0.7);
            fill(0);
            ellipse(width * 0.5, height * 0.35, width * 0.048, width * 0.057)
        }
        if (sound17.currentTime() > 1 && sound17.currentTime() < 1.1) {
            noFill();
            stroke(0);
            strokeWeight(4);
            bezier(width * 0.5, height * 0.3, width * 0.3, height * 0.2, width * 0.3, height * 0.8, width * 0.5, height * 0.7);
            fill(0);
            ellipse(width * 0.5, height * 0.35, width * 0.048, width * 0.057)
        }
        if (sound17.currentTime() > 1.3 && sound17.currentTime() < 1.5) {
            noFill();
            stroke(0);
            strokeWeight(4);
            bezier(width * 0.5, height * 0.3, width * 0.3, height * 0.2, width * 0.3, height * 0.8, width * 0.5, height * 0.7);
            fill(0);
            ellipse(width * 0.5, height * 0.35, width * 0.048, width * 0.057)
        }
        if (sound17.currentTime() > 1.6 && sound17.currentTime() < 1.2) {
            noFill();
            stroke(0);
            strokeWeight(4);
            bezier(width * 0.5, height * 0.3, width * 0.3, height * 0.2, width * 0.3, height * 0.8, width * 0.5, height * 0.7);
            fill(0);
            ellipse(width * 0.5, height * 0.35, width * 0.048, width * 0.057)
        }
        pop();
    }






    //animation K, son de saxophone, demi soupir
    playSound(sound18, 75); //K
    if (sound18.isPlaying() == true) {
        push();
        if (sound18.currentTime() > 0) {
            push();
            translate(width * 0.1, height * (-0.1));
            fill(0);
            ellipse(width * 0.1, height * 0.18, width * 0.04, width * 0.06);
            noFill();
            stroke(0);
            strokeWeight(5);
            bezier(width * 0.1, height * 0.2, width * 0.15, height * 0.3, width * 0.25, height * 0.25, width * 0.25, height * 0.25);
            line(width * 0.25, height * 0.25, width * 0.15, height * 0.6);
            pop();
        }
        if (sound18.currentTime() > 0.5) {
            push();
            translate(0, height * 0.25)
            fill(0);
            ellipse(width * 0.1, height * 0.18, width * 0.04, width * 0.06);
            noFill();
            stroke(0);
            strokeWeight(5);
            bezier(width * 0.1, height * 0.2, width * 0.15, height * 0.3, width * 0.25, height * 0.25, width * 0.25, height * 0.25);
            line(width * 0.25, height * 0.25, width * 0.15, height * 0.6)
            pop();
        }
        if (sound18.currentTime() > 1) {
            push();
            translate(width * 0.7, height * 0.05);
            fill(0);
            ellipse(width * 0.1, height * 0.18, width * 0.04, width * 0.06);
            noFill();
            stroke(0);
            strokeWeight(5);
            bezier(width * 0.1, height * 0.2, width * 0.15, height * 0.3, width * 0.25, height * 0.25, width * 0.25, height * 0.25);
            line(width * 0.25, height * 0.25, width * 0.15, height * 0.6);
            pop();
        }
        if (sound18.currentTime() > 1.5) {
            push();
            translate(width * 0.6, height * 0.4)
            fill(0);
            ellipse(width * 0.1, height * 0.18, width * 0.04, width * 0.06);
            noFill();
            stroke(0);
            strokeWeight(5);
            bezier(width * 0.1, height * 0.2, width * 0.15, height * 0.3, width * 0.25, height * 0.25, width * 0.25, height * 0.25);
            line(width * 0.25, height * 0.25, width * 0.15, height * 0.6)
            pop();
        }
        pop();
    }





    //animation L, son de maracas, pause
    if (keyIsDown(76)) { //L

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
                    duration: 2000,
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
                    duration: 400
                    }
                ]
        })
    }
    playSound(sound19, 76); //L
    if (sound19.isPlaying() == true) {
        push();
        fill(0);
        stroke(0);
        strokeWeight(4);
        line(width * 0.3, anim4.y, width * 0.7, anim4.y);
        rect(width * 0.4, anim4.y, width * 0.2, anim4.y);
        pop();
    }






    //animation M, son de tambourin
    playSound(sound20, 77); //M
    if (sound20.isPlaying() == true) {
        push();
        if (sound20.currentTime() > 0) {
            line(0, 0, width, height * 0.5);
            line(width, height * 0.5, 0, height);
        }
        if (sound20.currentTime() > 0.2) {
            line(width, 0, 0, height * 0.5);
            line(0, height * 0.5, width, height);
        }
        pop();
    }







    //animation W, son de timbale, bémol
    playSound(sound21, 87); //W
    if (sound21.isPlaying() == true) {
        push();
        frameRate(1000);
        var step = frameCount % 100;
        // Equivalent to translate(x, y);
        applyMatrix(1, 0, 0, 1, 0, 0 + step * 2.2);
        noFill();
        stroke(0);
        strokeWeight(5);
        line(width * 0.4, height * 0.3, width * 0.4, height * 0.7);
        bezier(width * 0.4, height * 0.52, width * 0.3, height * 0.45, width * 0.3, height * 0.6, width * 0.4, height * 0.7);
        pop();
        push();
        push();
        frameRate(1000);
        var step = frameCount % 100;
        // Equivalent to translate(x, y);
        applyMatrix(1, 0, 0, 1, 0, 0 - step * 2.2);
        noFill();
        stroke(0);
        strokeWeight(5);
        line(width * 0.4, height * 0.3, width * 0.4, height * 0.7);
        bezier(width * 0.4, height * 0.52, width * 0.5, height * 0.45, width * 0.5, height * 0.6, width * 0.4, height * 0.7);
        pop();
    }





    //animation X, son de clarinette, mezzo, piano, forte
    playSound(sound22, 88); //X
    if (sound22.isPlaying() == true) {
        push();
        translate(width * 0.25, height * 0.3);
        frameRate(10);
        rectMode(CENTER);
        var step = frameCount % 20;
        var angle = map(step, 0, 20, 0, TWO_PI);
        var cos_a = cos(angle);
        var sin_a = sin(angle);
        applyMatrix(cos_a, sin_a, -sin_a, cos_a, 0, 0);
        noFill();
        stroke(0);
        strokeWeight(3);
        bezier(0, height * 0.025, width * 0.005, height * 0.01, width * 0.02, 0, width * 0.025, height * 0.01);
        line(width * 0.025, height * 0.01, width * 0.013, height * 0.1);
        bezier(width * 0.025, height * 0.01, width * 0.03, 0, width * 0.045, 0, width * 0.05, height * 0.01);
        line(width * 0.05, height * 0.01, width * 0.038, height * 0.1);
        bezier(width * 0.05, height * 0.01, width * 0.055, 0, width * 0.07, 0, width * 0.075, height * 0.01)
        line(width * 0.075, height * 0.01, width * 0.062, height * 0.09)
        bezier(width * 0.062, height * 0.09, width * 0.067, height * 0.1, width * 0.072, height * 0.1, width * 0.087, height * 0.075)
        pop();
        push();
        translate(width * 0.65, height * 0.3);
        frameRate(10);
        rectMode(CENTER);
        var step = frameCount % 20;
        var angle = map(step, 0, 20, 0, TWO_PI);
        var cos_a = cos(angle);
        var sin_a = sin(angle);
        applyMatrix(cos_a, sin_a, -sin_a, cos_a, 0, 0);
        noFill();
        stroke(0);
        strokeWeight(3);
        bezier(0, height * 0.125, width * 0.005, height * 0.15, width * 0.015, height * 0.15, width * 0.02, height * 0.125);
        line(width * 0.02, height * 0.125, width * 0.04, height * 0.025);
        bezier(width * 0.04, height * 0.025, width * 0.045, 0, width * 0.055, 0, width * 0.06, height * 0.025);
        line(width * 0.015, height * 0.07, width * 0.045, height * 0.07)
        pop();
        push();
        translate(width * 0.45, height * 0.7);
        frameRate(10);
        rectMode(CENTER);
        var step = frameCount % 20;
        var angle = map(step, 0, 20, 0, TWO_PI);
        var cos_a = cos(angle);
        var sin_a = sin(angle);
        applyMatrix(cos_a, sin_a, -sin_a, cos_a, 0, 0);
        noFill();
        stroke(0);
        strokeWeight(3);
        bezier(width * 0.02, height * 0.01, width * 0.025, 0, width * 0.035, 0, width * 0.04, height * 0.01);
        line(width * 0.04, height * 0.01, width * 0.02, height * 0.12)
        line(0, height * 0.12, width * 0.04, height * 0.12);
        bezier(width * 0.04, height * 0.01, width * 0.075, 0, width * 0.055, height * 0.09, width * 0.03, height * 0.07)
        pop();
    }







     //attention relancer avant de le lancer
    //animation C, son guitare, gruppetto
    playSound(sound23, 67); //C
    if (sound23.isPlaying() == true) {
        push();
        a.animateDrawing(color(0), 5)
        pop();
    } else {
        push();
        // on reset le dessin
        a.resetDrawing()
        pop();
    }






    //animation V, son de castagnette, clé d'ut
    playSound(sound24, 86); //V
    if (sound24.isPlaying() == true) {
        push();
        translate(width * 0.4, height * 0.1);
        sound24FFT.analyze();
        var energie2 = sound24FFT.getEnergy("bass");
        rectMode(CENTER);
        scale(map(energie2, 0, 255, 1, 0.5))
        b.animateDrawing(color(0), 5)
        c.animateDrawing(color(0), 5)
        d.animateDrawing(color(0), 5)
        pop();
    }







    //animation B, son d'harmonica, clé de sol
    playSound(sound25, 66); //B
    if (sound25.isPlaying() == true) {
        push();
        translate(width * (-0.3), height * (-0.2));
        sound25FFT.analyze();
        var energie3 = sound25FFT.getEnergy("bass")
        rectMode(CENTER);
        scale(map(energie3, 0, 255, 1, 1.5))
        e.animateDrawing(color(0), 5)
        f.animateDrawing(color(0), 5)
        g.animateDrawing(color(0), 5)
        h.animateDrawing(color(0), 5)
        pop();
    }








    //animation N, son de djembe, clé de fa
    playSound(sound26, 78); //N
    if (sound26.isPlaying() == true) {
        push();
        translate(width * (-0.1), height * 0.1)
        sound26FFT.analyze();
        var energie4 = sound26FFT.getEnergy("bass")
        rectMode(CENTER);
        scale(map(energie4, 0, 255, 1, 0.5))
        o.animateDrawing(color(0), 5)
        j.animateDrawing(color(0), 5)
        k.animateDrawing(color(0), 5)
        n.animateDrawing(color(0), 5)
        pop();
    }

}






function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    background(0);
}

function playSound(sound, keyId) {
    if (keyIsDown(keyId) == true && sound.isPlaying() == false) {
        sound.play();
    }
}

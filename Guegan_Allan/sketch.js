//Les variables sont des éléments auxquels nous ajoutons une fonctions en les énumérants et en indiquant à quoi elles vont nous servir.

var sound1, sound2, sound5, sound6, sound7, sound8, sound9, sound10, sound11, sound12, sound13, sound14, sound15, sound16, sound17, sound18, sound20, sound22Amp, sound23, sound24, sound25, sound26;

var sound3Amp, sound4Amp, sound19Amp;
var sound6FFT;
var angle1 = 10;
var angle2 = 10;
var scalar = 70;
var xspacing = 30;
var w;
var theta = 0.0;
var amplitude = 75.0;
var period = 500.0;
var dx;
var yvalues;
var a;
var a = 0.0;
var s = 0.0;
var osc, fft;
var strokeSize = 0;
let snowflakes = [];
var num = 2000;
var range = 6;
var ax = [];
var ay = [];
let t = 0;
var circle = [];
var square = [];
var morph = [];
var state = false;

var circleX;









//La fonction "preload" me permet de charger tous mes sons. Ceux-ci se trouvent dans le dossier "Assets".

function preload() {
    sound1 =  loadSound("assets/magic belt.wav");
    sound2 =  loadSound("assets/boomerang.mp3");
    sound3 =  loadSound("assets/thunder-storm.wav");
    sound4 =  loadSound("assets/punch.wav");
    sound5 =  loadSound("assets/clown horn.mp3");
    sound6 =  loadSound("assets/r2d2-sound.wav");
    sound7 =  loadSound("assets/pacman-dead.wav");
    sound8 =  loadSound("assets/magic light.wav");
    sound9 =  loadSound("assets/alarm prison.wav");
    sound10 = loadSound("assets/sea.wav");
    sound11 = loadSound("assets/magic fire.mp3");
    sound12 = loadSound("assets/roar hulk.wav");
    sound13 = loadSound("assets/batman-transition.mp3");
    sound14 = loadSound("assets/feu d'artifice.mp3");
    sound15 = loadSound("assets/purple.wav");
    sound16 = loadSound("assets/balancoire.wav");
    sound17 = loadSound("assets/wheee.wav");
    sound18 = loadSound("assets/sizzles tv.wav");
    sound19 = loadSound("assets/petit coup de maracas.mp3");
    sound20 = loadSound("assets/snow.wav");
    sound21 = loadSound("assets/pen.wav");
    sound22 = loadSound("assets/ultrasound.wav");
    sound23 = loadSound("assets/light wave.wav");
    sound24 = loadSound("assets/i see you.wav");
    sound25 = loadSound("assets/fast electro.wav");
    sound26 = loadSound("assets/rond rouge.wav")

}








//La fonction setup me permet d'ajouter une fonction valable pour la totalité du "draw".

function setup() {

    createCanvas(windowWidth, windowHeight);
    background(0);

    sound3Amp = new p5.Amplitude();
    sound3Amp.setInput(sound3);

    sound4Amp = new p5.Amplitude();
    sound4Amp.setInput(sound4);

    sound5FFT = new p5.FFT(0.8, 16)
    sound5FFT.setInput(sound5)

    sound6FFT = new p5.FFT(0.4, 1024);
    sound6FFT.setInput(sound6);

    w = width + 12;
    dx = (TWO_PI / period) * xspacing;
    yvalues = new Array(floor(w / xspacing));

    a = height / 2;

    osc = new p5.TriOsc();
    osc.amp(.5);

    fft = new p5.FFT();

    for (var i = 0; i < num; i++) {
        ax[i] = width / 2;
        ay[i] = height / 2;
    }
    frameRate(30);

    analyzer = new p5.Amplitude();

    for (var angle = 0; angle < 360; angle += 9) {

        var v = p5.Vector.fromAngle(radians(angle - 90));
        v.mult(100);
        circle.push(v);
        morph.push(createVector());
    }
    //haut du carré
    for (var x = -50; x < 50; x += 10) {
        square.push(createVector(x, -50));
    }
    //coté droit
    for (var y = -50; y < 50; y += 10) {
        square.push(createVector(50, y));
    }
    //en bas
    for (var x = 50; x > -50; x -= 10) {
        square.push(createVector(x, 50));
    }
    //coté gauche
    for (var y = 50; y > -50; y -= 10) {
        square.push(createVector(-50, y));
    }

    circleX = 0;
    circleY = 0;
}





//La fonction draw me permet de dessiner du contenu et de l'animer.

function draw() {


    background(0);







    push();
    playSound(sound24, 88) //x i see you
    if (sound24.isPlaying() == true) {
        var radius = map(sound24.currentTime(), 0, sound24.duration(), 600, width)
        strokeWeight(500);
        stroke(255);
        fill(0);
        ellipse(width * 0.5, height * 0.5, radius, radius);
    }
    pop();












    push();
    playSound(sound23, 87) // w water glass
    if (sound23.isPlaying() == true) {
        fill(115, 194, 251);
        for (let x = 0; x <= width; x = x + 20) {
            for (let y = 0; y <= height; y = y + 20) {

                let xAngle = map(mouseX, 0, width, -4 * PI, 4 * PI, true);
                let yAngle = map(mouseY, 0, height, -4 * PI, 4 * PI, true);

                let angle = xAngle * (x / width) + yAngle * (y / height);


                let myX = x + 20 * cos(2 * PI * t + angle);
                let myY = y + 20 * sin(2 * PI * t + angle);

                ellipse(myX, myY, 10);
            }
        }

        t = t + 0.01;
    }
    pop();











    playSound(sound15, 79) // o color purple
    if (sound15.isPlaying() == true) {
        push()
        background(170, 0, 255)
        pop()
    }











    playSound(sound22, 86) //v ultrasound
    if (sound22.isPlaying() == true) {
        push();
        var level = analyzer.getLevel();

        var levelHeight = map(level, 0, .06, 0, height);
        fill(131, 166, 151);
        rect(0, height, width, -levelHeight);
        pop();
    }









    playSound(sound3, 67); // c ---- thunderstorm

    if (sound3.isPlaying() == true) {
        push();

        var lvl = sound3Amp.getLevel();
        var whiteLvl = map(lvl, 0, 0.75, 0, 255)
        noStroke();
        fill(whiteLvl)
        rect(0, 0, width, height)
        console.log(lvl);

        pop();
    }











    playSound(sound12, 76) // l ---- hulk
    if (sound12.isPlaying() == true) {
        push()
        stroke(255, 0, 0)
        strokeWeight(10)
        line(400, 450)

        noStroke()
        var radius = map(sound12.currentTime(), 20, sound12.duration(), 0, width)
        fill(0, 100, 0);
        ellipse(width * 0.5, height * 0.5, radius, radius);

        noStroke()
        fill(255)
        ellipse(width / 1.5, 250, 200, 200)
        ellipse(width / 3, 250, 200, 200)
        fill(0)
        noStroke()
        ellipse(width / 1.5, 250, 100, 100)
        ellipse(width / 3, 250, 100, 100)

        stroke(0)
        strokeWeight(80)
        line(width / 4, height / 6, width / 2.5, height / 5)
        line(width / 1.3, height / 6, width / 1.7, height / 5)

        pop()
    }








    playSound(sound6, 70) // 'f' ---- R2D2

    if (sound6.isPlaying() == true) {



        push();
        fill(220)
        ellipse(width / 2, height / 1.1, width / 1.05, height * 1.7)
        pop();


        push();
        fill(0, 0, 100)
        noStroke();
        rect(width / 2.8, 350, width / 4, 1000)

        fill(255, 0, 0);
        noStroke();
        ellipse(width / 1.9, 450, 100)
        strokeWeight(20)
        stroke(120)
        fill(255);
        ellipse(width / 2.4, 450, 100)


        noStroke();
        fill(0, 0, 100)
        rect(width / 7.5, 600, width / 40, 100)
        rect(width / 5.5, 600, width / 40, 100)
        rect(width / 4, 600, width / 40, 100)
        rect(width / 3, 600, width / 40, 100)
        rect(width / 1.5, 600, width / 40, 100)
        rect(width / 1.4, 600, width / 40, 100)
        rect(width / 1.3, 600, width / 40, 100)
        rect(width / 1.2, 600, width / 40, 100)
        pop();


        push();
        var waveform = sound6FFT.waveform();
        noFill();
        beginShape();
        stroke(255, 255, 0);
        strokeWeight(5);
        for (var i = 0; i < waveform.length; i++) {
            var x = map(i, 5, waveform.length, 5, width);
            var y = map(waveform[i], -3, 3, 500, height);
            curveVertex(x, y);
        }
        endShape();
        pop();
    }










    playSound(sound19, 83) //s pink circle
    if (sound19.isPlaying() == true) {

        push();
        strokeSize = strokeSize + 20;
        stroke(200, 0, 150);
        strokeWeight(strokeSize);
        noFill();
        ellipse(width * 0.5, height * 0.5, 125, 125);

        pop();

    } else {
        strokeSize = 0;
    }









    push();
    playSound(sound18, 82) //r sizzle tv
    if (sound18.isPlaying() == true) {



        var waveform = fft.waveform();
        beginShape();
        noStroke();
        fill(random(255), random(255), random(200));
        for (var i = 0; i < waveform.length; i++) {
            var x = map(i, 0, waveform.length, 0, width);
            var y = map(waveform[i], -1, 1, height, 0);
            vertex(x, y);
        }
        endShape();


        noStroke();
        var freq = map(mouseX, 0, width, 40, 880);
        osc.freq(freq);

        var amp = map(mouseY, 0, height, 1, .01);
        osc.amp(amp);


    }
    pop();









    playSound(sound17, 81) //q "wheee" snail on a turtle video
    if (sound17.isPlaying() == true) {

        push();
        rectMode(CENTER);
        a = a + 0.04;
        s = cos(a) * 2;

        translate(width / 2, height / 2);
        scale(s);
        noStroke();
        fill(0);
        ellipse(0, 0, 200, 200);

        translate(200, 200);
        noStroke();
        fill(0, 150, 0);
        scale(s);
        ellipse(0, 0, 200, 200);

        pop();
    }










    playSound(sound16, 80) // p balancoire
    if (sound16.isPlaying() == true) {

        push();
        rectMode(CENTER);
        a = a + 0.04;
        s = cos(a) * 2;

        translate(width / 2, height / 2);
        scale(s);
        fill(70, 46, 1);
        rect(0, 0, 50, 500);

        translate(100, 0);
        fill(240, 195, 0);
        scale(s);
        ellipse(0, 0, 100, 100);

        pop();
    }









    playSound(sound14, 78) // n punches
    if (sound14.isPlaying() == true) {
        push();
        var radius = map(sound14.currentTime(), 0, sound14.duration(), 50, width)
        fill(255, 0, 0);
        strokeWeight(1000);
        ellipse(width * 0.5, height * 0.5, radius, radius);
        pop();

    }







    playSound(sound9, 73) // i ----- alarm prison
    if (sound9.isPlaying() == true) {
        push()
        rectMode(CENTER);
        var ang1 = radians(angle1);
        var ang2 = radians(angle2);

        var x1 = width / 2 + (scalar * cos(ang1));
        var x2 = width / 2 + (scalar * cos(ang2));

        var y1 = height / 2 + (scalar * sin(ang1));
        var y2 = height / 2 + (scalar * sin(ang2));

        fill(155);
        stroke(0, 0, 0);
        rect(width * 0.5, height * 0.5, 500, 500);

        noStroke();
        fill(255, 255, 0, 80);
        ellipse(x2, height * 0.5 - 120, 200, 200);
        fill(255, 255, 0, 80);
        ellipse(x2, height * 0.5 + 120, 200, 200);

        fill(255, 255, 0, 80);
        ellipse(width * 0.5 - 120, y1, 200, 200);
        fill(255, 255, 0, 80);
        ellipse(width * 0.5 + 120, y2, 200, 200);

        angle1 += 2;
        angle2 += 3;
        pop()
    }









    playSound(sound13, 77) // m
    if (sound13.isPlaying() == true) { // m ---- batman

        push();
        noStroke();
        fill(255, 255, 0, 50)
        triangle(width / 1.1, height / 0.6, 850, 300, 130, 440)
        fill(255, 255, 0)
        ellipse(475, 332, 820, 550)
        fill(0, 0, 0)
        ellipse(475, 332, 650, 420)
        fill(255, 255, 0)
        ellipse(360, 174, 110, 120)
        fill(255, 255, 0)
        ellipse(580, 174, 110, 120)
        ellipse(470, 124, 110, 80)
        rect(525, 118, 80, 56)
        rect(335, 118, 80, 56)
        ellipse(320, 480, 120, 170)
        ellipse(630, 480, 120, 170)
        ellipse(420, 540, 110, 140)
        ellipse(530, 540, 110, 140)


        pop();
    }








    playSound(sound11, 75) // k ---- flash
    if (sound11.isPlaying() == true) {

        push()
        strokeWeight(20)
        stroke(250, 203, 111)
        fill(109, 7, 26)
        ellipse(550, 350, 500, 500)
        noStroke();
        fill(154, 65, 0);
        quad(615, 286, 687, 257, 574, 373, 503, 404);
        triangle(753, 93, 555, 286, 621, 254);
        quad(461, 322, 555, 286, 615, 286, 542, 322);
        quad(503, 404, 424, 438, 495, 438, 561, 408);
        triangle(650, 373, 361, 604, 561, 408);
        fill(250, 203, 111);
        triangle(753, 93, 461, 322, 555, 286);
        quad(555, 286, 615, 286, 687, 257, 621, 254);
        quad(615, 286, 542, 322, 424, 438, 503, 404);
        quad(574, 373, 650, 373, 561, 408, 503, 404);
        triangle(361, 604, 495, 438, 561, 408);
        pop()
    }








    push();
    playSound(sound8, 72) //h ---- green lantern
    if (sound8.isPlaying() == true) {
        push();
        rectMode(CENTER);
        stroke(0, 180, 0);
        strokeWeight(10);
        fill(0, 255, 0);
        translate(width * 0.5, height * 0.5);
        rotate(frameCount / 50.0);
        star(0, 0, 60, 1000, 15);
        pop();
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
    pop();










    playSound(sound4, 68); //d ---- punch

    if (sound4.isPlaying() == true) {
        push();
        var lvl = sound4Amp.getLevel();
        var whiteLvl = map(lvl, 0, 0.75, 0, 255)
        noStroke();
        fill(whiteLvl)
        rect(0, 0, width, height)
        console.log(lvl);
        pop();

    }









    playSound(sound7, 71) // 'g' ---- pacman dead
    if (sound7.isPlaying() == true) {
        push()
        var nsegment = 500
        var ncurrentsegment = (map(sound7.currentTime(), 0, sound7.duration(), 0, nsegment + 1))
        for (var i = 0; i < ncurrentsegment; i++) {
            stroke(255, 255, 0);
            strokeWeight(50);
            var angle = map(i, 0, nsegment, 0, TWO_PI);
            var x = width * 0.5 + height * 0.45 * cos(angle);
            var y = height * 0.5 + height * 0.45 * sin(angle);
            line(width * 0.5, height * 0.5, x, y);

        }
        noStroke()
        fill(0);
        ellipse(width / 1.5, height / 3.5, 60)
        pop()
    }










    playSound(sound5, 69); // 'e' == clown
    if (sound5.isPlaying() == true) {

        push();
        sound5FFT.analyze();
        rectMode(CENTER);
        var nrj1 = sound5FFT.getEnergy("bass")


        push();
        strokeWeight(20);
        stroke(255);
        fill(255, 255, 0)
        translate(width * 0.25, height * 0.5)
        rotate(PI / 4)
        rect(0, 0, width * 0.2, width * 0.2)
        pop();

        push();
        strokeWeight(5);
        stroke(10)
        fill(255, 0, 0)
        translate(width * 0.5, height * 0.5)
        rotate(PI / 4)
        ellipse(100, 100, nrj1, nrj1)
        pop();

        push();
        strokeWeight(20)
        stroke(255)
        fill(255, 255, 0)
        translate(width * 0.75, height * 0.5)
        rotate(PI / 4)
        rect(0, 0, width * 0.2, width * 0.2)
        pop();

        push();
        strokeWeight(4)
        fill(255)
        triangle(width / 4, height / 2.05, width / 4, height / 1.75, width / 6, height / 1.9)
        triangle(width / 1.2, height / 1.9, width / 1.3, height / 1.75, width / 1.3, height / 2.05)
        triangle(width / 1.35, height / 2.05, width / 1.35, height / 1.75, width / 1.5, height / 1.9)
        triangle(width / 3, height / 1.9, width / 3.6, height / 1.75, width / 3.6, height / 2.05)
        pop();

        push();
        fill(169, 234, 254)
        strokeWeight(4)
        ellipseMode(CENTER)
        ellipse(width / 3.85, height / 1.9, width / 15, height / 10)
        ellipse(width / 1.33, height / 1.9, width / 15, height / 10)
        pop();

        push();
        fill(0)
        ellipse(width / 3.85, height / 1.9, width / 25, height / 17)
        ellipse(width / 1.33, height / 1.9, width / 25, height / 17)
        pop();

        pop();

    }











    push();
    playSound(sound1, 65); // a ---- captain america
    if (sound1.isPlaying() == true) {

        var radius = map(sound1.currentTime(), 0, sound1.duration(), 600, width)
        fill(255, 0, 0);
        noStroke();
        ellipse(width * 0.5, height * 0.5, radius, radius);
        var radius = map(sound1.currentTime(), 0, sound1.duration(), 500, width)
        fill(255, 255, 255);
        ellipse(width * 0.5, height * 0.5, radius, radius);
        var radius = map(sound1.currentTime(), 0, sound1.duration(), 400, width)
        fill(255, 0, 0);
        ellipse(width * 0.5, height * 0.5, radius, radius);
        var radius = map(sound1.currentTime(), 0, sound1.duration(), 200, width)
        fill(0, 0, 255);
        ellipse(width * 0.5, height * 0.5, radius, radius);

        fill(255, 255, 255)
        star(width / 2, height / 2, 40, 90, 5);

    }

    pop();










    push();
    playSound(sound2, 66); // b ---- baton qui tourne

    if (sound2.isPlaying() == true) {

        var angle = map(sound2.currentTime(), 50, sound2.duration(), 500, PI);
        translate(width * 0.5, height * 0.5);
        rotate(angle);
        rectMode(CENTER);
        fill(150, 100, 0);
        noStroke();
        rect(0, 0, width * 0.5, height * 0.1);

    }

    pop();












     push();
    playSound(sound25, 89) //y rond carré
    if (sound25.isPlaying() == true) {
        var totalDistance = 0;

        for (var i = 0; i < circle.length; i++) {
            var v1;

            if (state) {
                v1 = circle[i];
            } else {
                v1 = square[i];
            }

            var v2 = morph[i];

            v2.lerp(v1, 0.8);

            totalDistance += p5.Vector.dist(v1, v2);
        }


        if (totalDistance < 0.1) {
            state = !state;
        }


        translate(width / 2, height / 2);
        strokeWeight(4);

        beginShape();
        noFill();
        stroke(random(150), random(0), random(255));

        morph.forEach(v => {
            vertex(v.x, v.y);
        });
        endShape(CLOSE);
    }
    pop();











    playSound(sound26, 90) //z ronds rouge
    if (sound26.isPlaying() == true) {
        noStroke();
        fill(255, 0, 0, 100);
        ellipse(circleX, height/2, 200, 200);
        circleX += 15;
        if(circleX>=width) circleX=0;

        fill(255, 0, 0, 100);
        ellipse(width/2, circleY, 200, 200);
        circleY += 5;
        if(circleY>=height) circleY=0;

    }










    push();

    playSound(sound10, 74) // j ---- vague
    if (sound10.isPlaying() == true) {

        calcWave();
        renderWave();

        function calcWave() {

            theta += 0.02;


            var x = theta;
            for (var i = 0; i < yvalues.length; i++) {
                yvalues[i] = sin(x) * amplitude;
                x += dx;
            }
        }

        function renderWave() {
            noStroke();
            fill(random(100), random(255), random(255));

            for (var x = 0; x < yvalues.length; x++) {
                ellipse(x * xspacing, height / 2 + yvalues[x], 25, 25);

            }
        }
    }

    pop();













    push();
    playSound(sound21, 85) //u writing
    if (sound21.isPlaying() == true) {
        for (var i = 1; i < num; i++) {
            ax[i - 1] = ax[i];
            ay[i - 1] = ay[i];
        }


        ax[num - 1] += random(-range, range);
        ay[num - 1] += random(-range, range);


        ax[num - 1] = constrain(ax[num - 1], 0, width);
        ay[num - 1] = constrain(ay[num - 1], 0, height);



        for (var j = 1; j < num; j++) {
            var val = j / num * 204.0 + 51;
            push();
            stroke(val);
            line(ax[j - 1], ay[j - 1], ax[j], ay[j]);
            pop();
        }



        ax[num - 1] += random(-range, range);
        ay[num - 1] += random(-range, range);


        ax[num - 1] = constrain(ax[num - 1], 0, width);
        ay[num - 1] = constrain(ay[num - 1], 0, height);


        for (var j = 1; j < num; j++) {
            var val = j / num * 204.0 + 51;
            stroke(val);
            line(ax[j - 1], ay[j - 1], ax[j], ay[j]);
        }
    }
    pop();












    push();
    playSound(sound20, 84) //t snowing
    if (sound20.isPlaying() == true) {
        noStroke();
        let t = frameCount / 60;


        for (var i = 0; i < random(5); i++) {
            snowflakes.push(new snowflake());
        }


        for (let flake of snowflakes) {
            flake.update(t);
            flake.display();
        }
    }

    function snowflake() {

        this.posX = 0;
        this.posY = random(-50, 0);
        this.initialangle = random(0, 2 * PI);
        this.size = random(2, 5);


        this.radius = sqrt(random(pow(width / 2, 2)));

        this.update = function (time) {

            let w = 0.6;
            let angle = w * time + this.initialangle;
            this.posX = width / 2 + this.radius * sin(angle);


            this.posY += pow(this.size, 0.5);


            if (this.posY > height) {
                let index = snowflakes.indexOf(this);
                snowflakes.splice(index, 1);
            }
        };

        this.display = function () {
            ellipse(this.posX, this.posY, this.size);
        };
    }
    pop();
}










//Raccourci qui signifie: "Joue le son "Sound" quand tu appuie sur la touche "keyId". Si le son est en train de jouer: fais l'animation suivante..."
function playSound(sound, keyId) {
    if (keyIsDown(keyId)) {
        if (!sound.isPlaying()) {
            sound.play();
        }
    }
}








function windowResized() {

    resizeCanvas(windowWidth, windowHeight);
}

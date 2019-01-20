var song; //song1
var song2; //song2
var song2Amp; //song2
var song3; //song3
var song3FFT; //song3
var song4; //song4
var song4FFT; //song4
var song5; //song5
var song6; //song6
var song7; //song7
var song7FFT; //song7
var song8; //song8
var song8FFT; //song8
let t = 0; //song8
var song9; //song9
var song9Amp; //song9
var song10; //song10
var song11; //song11
var song11FFT; //song11
var song12; //song12
var song12FFT; //song12
var xspacing = 8; //song12
var w; //song12
var maxwaves = 4; //song12
var theta = 0.0; //song12
var amplitude = new Array(maxwaves); //song12
var dx = new Array(maxwaves); //song12
var yvalues; //song12
var song13; //song13
var song13FFT; //song13
var song14; //song14
var song14FFT; //song14
var song15; //song15
var song15FFT; //song15
let snowflakes = []; //song15
var song16; //song16
var song16FFT; //song16
var song17; //song17
var song18; //song18
var song19; //song19
var song19FFT; //song19
var song20; //song20
var song21; //song21
var song21FFT; //song21
var song22; //song22
var song23; //song23
var song24; //song24
var song24FFT; //song24
var r; //song24
var theta; //song24
var theta_vel; //song24
var theta_acc; //song24
var song25; //song25
var song25FFT; //song25
var song26; //song26
var song26FFT; //song26

function preload() { //partie contenant les sons de chaque touches ainsi que les polices
    song = loadSound('assets/melodyC.wav');
    song2 = loadSound("assets/dead.wav");
    song3 = loadSound("assets/ChugChug.wav");
    song4 = loadSound("assets/bassloop.wav");
    song5 = loadSound("assets/pad.wav");
    song6 = loadSound("assets/pad122.wav");
    song7 = loadSound("assets/deap.wav");
    song8 = loadSound("assets/chord.wav");
    song9 = loadSound("assets/hat.wav");
    song10 = loadSound("assets/Afterclub.wav");
    song11 = loadSound("assets/ss122.wav");
    song12 = loadSound("assets/110DLOOP.wav");
    song13 = loadSound("assets/FIGHT2.wav");
    song14 = loadSound("assets/over.wav");
    song15 = loadSound("assets/carry.wav");
    song16 = loadSound("assets/thequiet.wav");
    song17 = loadSound("assets/drone.wav");
    song18 = loadSound("assets/pad60.wav");
    song19 = loadSound("assets/SNARE.wav");
    song20 = loadSound('assets/pink.wav');
    song21 = loadSound('assets/cass2.wav');
    song22 = loadSound('assets/cass1.wav');
    song23 = loadSound("assets/knre.wav");
    song24 = loadSound("assets/fmpad.wav");
    song25 = loadSound("assets/1984.wav");
    song26 = loadSound("assets/accele.wav");
    font = loadFont("assets/alien.ttf");


}






function setup() { //partie regroupant les sons qui s'adaptent aux formes selon la tonalité de la musique
    createCanvas(windowWidth, windowHeight);
    // song.loop();

    song3FFT = new p5.FFT(0.8, 16);
    song3FFT.setInput(song3);
    song4FFT = new p5.FFT(0.8, 1024)
    song4FFT.setInput(song4);
    song7FFT = new p5.FFT(0.8, 16);
    song7FFT.setInput(song7);
    song8FFT = new p5.FFT(0.8, 1024)
    song8FFT.setInput(song8);
    song9Amp = new p5.Amplitude()
    song9Amp.setInput(song9)
    song11FFT = new p5.FFT(0.8, 16);
    song11FFT.setInput(song11); {
        song12FFT = new p5.FFT(0.8, 16);
        song12FFT.setInput(song12);
        frameRate(30);
        colorMode(RGB, 255, 255, 255, 100);
        w = width + 16;

        for (var i = 0; i < maxwaves; i++) {
            amplitude[i] = random(10, 30);
            var period = random(100, 300);
            dx[i] = (TWO_PI / period) * xspacing;
        }

        yvalues = new Array(floor(w / xspacing));

    }
    song13FFT = new p5.FFT(0.8, 16);
    song13FFT.setInput(song13);
    song14FFT = new p5.FFT(0.8, 16);
    song14FFT.setInput(song14);
    song15FFT = new p5.FFT(0.8, 16);
    song15FFT.setInput(song15);
    song16FFT = new p5.FFT(0.8, 16);
    song16FFT.setInput(song16);

    song19FFT = new p5.FFT(0.8, 16);
    song19FFT.setInput(song19);
    song21FFT = new p5.FFT(0.8, 1024)
    song21FFT.setInput(song21); {
        song24FFT = new p5.FFT(0.8, 1024)
        song24FFT.setInput(song24);
        r = height * 0.45;
        theta = 0;
        theta_vel = 0;
        theta_acc = 0.0001;
    }
    song25FFT = new p5.FFT(0.8, 1024)
    song25FFT.setInput(song25);

    {
        song26FFT = new p5.FFT(0.8, 1024);
        song26FFT.setInput(song26);
        textFont(font);
        textSize(130);
        textAlign(CENTER, CENTER);
    }



}


function draw() {
    background(0);
    playSound(song, 65)
    if (song.isPlaying() == true) {
        push(); //les varaibles et autres s'appliquent entre le push et pop
        var rad = map(song.currentTime(), 0, song.duration(), 50, width) //fonction qui permet l'agrandissement de la forme se facon croissante. fonctionne grace au"rad" dans la partie ellipse. Pour l'avoir en décroissant il faut inverser le width et le 50 de la partie "var rad"
        fill(0, 0, 255) // détermine la couleur de la forme selon l'ordre (rouge,vert,bleu)
        ellipse(width * 0.5, height * 0.5, rad, rad)
        pop();
    }




    playSound(song2, 90);
    if (song2.isPlaying() == true) {

        push()


        var nsegment = 1000
        var ncurrentsegment = (map(song2.currentTime(), 0, song2.duration(), 0, nsegment + 1))
        for (var i = 0; i < ncurrentsegment; i++)
            stroke(0, 255, 255);
        strokeWeight(3) // déterminel'épaisseur du contour de la forme
        var angle = map(i, 0, nsegment, 0, TWO_PI);
        var x = width * 0.5 + height * 180 * cos(angle);
        var y = height * 1 + height * 0.45 * sin(angle);
        line(width * 0.5, height * 0.5, x, y); //donnes le point d'émission de l'animation, ici ca part du centre de l'écran


        var nsegment = 1000
        var ncurrentsegment = (map(song2.currentTime(), 0, song2.duration(), nsegment + 1, 0))
        for (var i = 0; i < ncurrentsegment; i++)
            stroke(0, 255, 255); // détermine la couleur du contour de la forme selon l'ordre (rouge,vert,bleu)
        strokeWeight(3)
        var angle = map(i, 45, nsegment, 5, TWO_PI);
        var x = width * 0.5 + height * 5 * cos(angle);
        var y = height * 0.5 + height * 8 * sin(angle);
        line(width * 0.5, height * 0.5, x, y);


        var nsegment = 1000
        var ncurrentsegment = (map(song2.currentTime(), 0, song2.duration(), 0, nsegment + 1))
        for (var i = 0; i < ncurrentsegment; i++)
            stroke(0, 255, 255);
        strokeWeight(3)
        var angle = map(i, 45, nsegment, 10, TWO_PI);
        var x = width * 0.5 + height * 10 * cos(angle);
        var y = height * 1 + height * 0.8 * sin(angle);
        line(width * 0.5, height * 0.5, x, y);


        var nsegment = 1000
        var ncurrentsegment = (map(song2.currentTime(), 0, song2.duration(), nsegment + 1, 0))
        for (var i = 0; i < ncurrentsegment; i++)
            stroke(0, 255, 255);
        strokeWeight(3)
        var angle = map(i, 45, nsegment, 0, TWO_PI);
        var x = width * 0.5 + height * 1 * cos(angle);
        var y = height * 0.5 + height * 20 * sin(angle);
        line(width * 0.5, height * 0.5, x, y);


        var nsegment = 1000
        var ncurrentsegment = (map(song2.currentTime(), 0, song2.duration(), 0, nsegment + 1))
        for (var i = 0; i < ncurrentsegment; i++)
            stroke(0, 255, 255);
        strokeWeight(3)
        var angle = map(i, 45, nsegment, 5, TWO_PI);
        var x = width * 0.5 + height * 5 * cos(angle);
        var y = height * 0.5 + height * 60 * sin(angle);
        line(width * 0.5, height * 0.5, x, y);


        var nsegment = 1000
        var ncurrentsegment = (map(song2.currentTime(), 0, song2.duration(), nsegment + 1, 0))
        for (var i = 0; i < ncurrentsegment; i++)
            stroke(0, 255, 255);
        strokeWeight(3)
        var angle = map(i, 45, nsegment, 0, TWO_PI);
        var x = width * 0.5 + height * 30 * cos(angle);
        var y = height * 0.5 + height * 18 * sin(angle);
        line(width * 0.5, height * 0.5, x, y);


        var nsegment = 1000
        var ncurrentsegment = (map(song2.currentTime(), 0, song2.duration(), nsegment + 1, 0))
        for (var i = 0; i < ncurrentsegment; i++)
            stroke(0, 255, 255);
        strokeWeight(3)
        var angle = map(i, 45, nsegment, 10, TWO_PI);
        var x = width * 0.5 + height * 45 * cos(angle);
        var y = height * 1 + height * 0.5 * sin(angle);
        line(width * 0.5, height * 0.5, x, y);


        var nsegment = 1000
        var ncurrentsegment = (map(song2.currentTime(), 0, song2.duration(), 0, nsegment + 1))
        for (var i = 0; i < ncurrentsegment; i++)
            stroke(0, 255, 255);
        strokeWeight(3)
        var angle = map(i, 45, nsegment, 0, TWO_PI);
        var x = width * 0.5 + height * 10 * cos(angle);
        var y = height * 0.5 + height * 0.8 * sin(angle);
        line(width * 0.5, height * 0.5, x, y);


        var nsegment = 1000
        var ncurrentsegment = (map(song2.currentTime(), 0, song2.duration(), nsegment + 1, 0))
        for (var i = 0; i < ncurrentsegment; i++)
            stroke(0, 255, 255);
        strokeWeight(3)
        var angle = map(i, 45, nsegment, 30, TWO_PI);
        var x = width * 0.5 + height * 30 * cos(angle);
        var y = height * 1 + height * 50 * sin(angle);
        line(width * 0.5, height * 0.5, x, y);


        pop();
    }


    playSound(song3, 69);

    if (song3.isPlaying() == true) {
        push()
        song3FFT.analyze(); // fonction qui permet de faire varier la forme en fonction du sons associé avec, ici cela va créér des vibrations selo la tonalité de la musique
        var nrj1 = song3FFT.getEnergy("bass")
        noStroke();

        push()
        rectMode(CENTER);
        fill(255, 0, 127, nrj1)
        translate(width * 0.25, height * 0.5)
        rotate(PI / 4) // permet d'avoir la fomre penchée a 45°
        rect(0, 0, width * 0.2, width * 0.2) // détermine l'emplacement et la taille de la forme, ici la forme est directement centrée grace à"rectMode(CENTER);"
        noStroke();
        pop()

        push()
        rectMode(CENTER);
        fill(255, 255, 255, 50)
        translate(width * 0.5, height * 0.5)
        rotate(PI / 4)
        rect(0, 0, nrj1, nrj1)
        noStroke();
        pop()

        push()
        rectMode(CENTER);
        fill(255, 0, 127, nrj1)
        translate(width * 0.75, height * 0.5)
        rotate(PI / 4)
        rect(0, 0, width * 0.2, width * 0.2)
        noStroke();

        pop()

        pop()
    }




    playSound(song4, 82)

    if (song4.isPlaying() == true) {
        push()
        var waveform = song4FFT.waveform();
        noFill();
        beginShape();
        stroke(255, 27, 0, 300); //le 300 sert a donner de l'arrondi a la forme
        strokeWeight(15);
        for (var i = 0; i < waveform.length; i++) {
            var x = map(i, 0, waveform.length, 0, width);
            var y = map(waveform[i], -1, 1, 0, height);
            curveVertex(x, y);
        }
        endShape();
        pop()
    }





    playSound(song5, 84)

    if (song5.isPlaying() == true) {
        push();
        var rad = map(song5.currentTime(), 0, song5.duration(), 10, width)
        stroke(250, 250, 250);
        strokeWeight(100);
        fill(255, 27, 0);
        ellipse(width * 0, height * 0.5, rad, rad)
        ellipse(width * 1, height * 0.5, rad, rad)
        pop();
    }




    playSound(song6, 89);

    if (song6.isPlaying() == true) {
        noStroke()
        push();
        var long = map(song6.currentTime(), 0, song6.duration(), 250, width) //la variable "long" permet d'étirer une forme
        rectMode(CENTER)
        fill(55, 20, 250)
        rect(width / 2, height / 2, long, 5);
        noStroke();
        pop();
        push();
        var long = map(song6.currentTime(), 0, song6.duration(), 150, width)
        rectMode(CENTER)

        fill(55, 20, 250)
        rect(width / 2, height / 1.5, long, 5);
        noStroke();
        pop();
        push();
        var long = map(song6.currentTime(), 0, song6.duration(), 350, width)
        rectMode(CENTER)
        fill(55, 20, 250)
        rect(width / 2, height / 3, long, 5);
        noStroke();
        pop();
        push();
        var long = map(song6.currentTime(), 0, song6.duration(), 450, width)
        rectMode(CENTER)
        fill(55, 20, 250)
        rect(width / 2, height / 5.8, long, 5);
        noStroke();
        pop();
        push();
        var long = map(song6.currentTime(), 0, song6.duration(), 50, width)
        rectMode(CENTER)
        fill(55, 20, 250)
        rect(width / 2, height / 1.2, long, 5);
        noStroke();
        pop();
    }




    playSound(song7, 85);


    if (song7.isPlaying() == true) {
        push()
        song7FFT.analyze();
        rectMode(CENTER);
        var nrj1 = song7FFT.getEnergy("bass") //ici 2 variables combinées
        var long = map(song7.currentTime(), 0, song7.duration(), 0, width)
        rectMode(CENTER)
        fill(0, 253, 255)
        rect(270, 800, nrj1, long, 5); // axe X puis axe Y puis hauteur puis largeur puis niveau d'étirement de la forme
        noStroke();
        pop();

        push()
        rectMode(CENTER)
        fill(0, 253, 255)
        rect(770, 0, nrj1, long, 5);
        noStroke();
        pop();

        push()
        rectMode(CENTER)
        fill(0, 253, 255)
        rect(1270, 800, nrj1, long, 5);
        noStroke();
        pop();


    }

    playSound(song8, 73)
    if (song8.isPlaying() == true) {
        push();
        for (let x = 0; x <= width; x = x + 30) {
            for (let y = 0; y <= height; y = y + 30) {
                let xAngle = map(mouseX, 0, width, -4 * PI, 4 * PI, true); //agit en fonction du déplacement de la souris
                let yAngle = map(mouseY, 0, height, -4 * PI, 4 * PI, true);

                let angle = xAngle * (x / width) + yAngle * (y / height);


                let myX = x + 20 * cos(2 * PI * t + angle);
                let myY = y + 20 * sin(2 * PI * t + angle);

                ellipse(myX, myY, 10);
                noStroke();
                fill(37, 253, 233);


            }
        }
        t = t + 0.01;

        pop();

    }



    playSound(song9, 79)

    if (song9.isPlaying() == true) {
        push()
        background(43, 0, 154) //créér de la couleur a l'arriere plan
        noStroke()
        playSound(song9, 82)


        pop();
    }




    playSound(song10, 80)
    if (song10.isPlaying() == true) {
        push()


        var nsegment = 1000
        var ncurrentsegment = (map(song10.currentTime(), 0, song10.duration(), 0, nsegment + 1))
        for (var i = 0; i < ncurrentsegment; i++) {
            stroke(206, 28, 206);
            strokeWeight(1)
            var angle = map(i, 0, nsegment, 0, TWO_PI);
            var x = width * 0.5 + height * 180 * cos(angle);
            var y = height * 0.4 + height * 0.90 * sin(angle);
            line(width * 0.5, height * 0.5, x, y);
        }

        pop();
    }




    playSound(song11, 81)
    if (song11.isPlaying() == true) {
        song11FFT.analyze();
        rectMode(CENTER);
        var nrj1 = song11FFT.getEnergy("bass")
        noStroke();
        push()
        fill(206, 28, 206);
        triangle(nrj1, 450, 900, nrj1, 1100, 550); // coordonnées de la hauteur et largeur des 3 points nécéssaires a faire un triangle

        pop()
    }




    playSound(song12, 83)
    if (song12.isPlaying() == true) {
        push()

        calcWave();
        renderWave();

        function calcWave() {
            theta += 0.04;
            for (var i = 0; i < yvalues.length; i++) {
                yvalues[i] = 0;
            }
            for (var j = 0; j < maxwaves; j++) {
                var x = theta;
                for (var i = 0; i < yvalues.length; i++) {
                    if (j % 4 == 0) yvalues[i] += sin(x) * amplitude[j];
                    else yvalues[i] += cos(x) * amplitude[j];
                    x += dx[j];
                }
            }
        }

        function renderWave() {
            noStroke();
            fill(102, 0, 255, 50);
            ellipseMode(CENTER);
            for (var x = 0; x < yvalues.length; x++) {
                ellipse(x * xspacing, width / 4 + yvalues[x], 16, 16);
            }
        }
        pop();

    }




    playSound(song13, 68)
    if (song13.isPlaying() == true) {

        push();
        noStroke();
        rectMode(CENTER);
        song13FFT.analyze();
        var nrj1 = song13FFT.getEnergy("bass")
        fill(0, 255, 255)
        rect(400, nrj1, 150, 700);
        pop();
        push();
        rectMode(CENTER);
        noStroke();
        song13FFT.analyze();
        var nrj1 = song13FFT.getEnergy("bass")
        fill(206, 28, 206)
        rect(750, nrj1, 150, 700);
        pop();
        push();
        rectMode(CENTER);
        noStroke();
        song13FFT.analyze();
        var nrj1 = song13FFT.getEnergy("bass")
        fill(0, 255, 255)
        rect(1100, nrj1, 150, 700);
        pop();

    }




    playSound(song14, 70)
    if (song14.isPlaying() == true) {
        push();
        song14FFT.analyze();
        rectMode(CENTER);
        var long = map(song14.currentTime(), 0, song14.duration(), 0, width)

        push()
        noFill();
        stroke(0, 253, 255)
        rect(200, 800, 150, long, 3);

        pop();
        push()
        noFill();
        stroke(0, 253, 255)
        rect(700, -50, 200, long, 3);

        pop();

        push()
        noFill();
        stroke(0, 253, 255)
        rect(1300, -450, 80, long, 3);

        pop();
        push()
        noFill();
        stroke(0, 253, 255)
        rect(long, 450, 160, 100, 3);

        pop();
        push()
        noFill();
        stroke(0, 253, 255)
        rect(1100, long, 160, 100, 3);

        pop();
        push()
        noFill();
        stroke(0, 253, 255)
        rect(0, 200, long, 100, 3);

        pop();
        push()
        noFill();
        stroke(0, 253, 255)
        rect(300, long, 200, 200, 3);

        pop();
        push()
        noFill();
        rectMode(CENTER)
        stroke(0, 253, 255)
        rect(1500, 550, long, 200, 3);
        noStroke();
        pop();

        push()
        noFill();
        rectMode(CENTER)
        stroke(0, 253, 255)
        rect(500, -250, long, 200, 3);

        pop();

        push()
        noFill();
        rectMode(CENTER)
        stroke(0, 253, 255)
        rect(900, 850, 200, long, 3);

        pop();
        push()
        noFill();
        rectMode(CENTER)
        stroke(0, 253, 255)
        rect(long, -350, 200, 350, 3);

        pop();

        push()
        noFill();
        rectMode(CENTER)
        stroke(0, 253, 255)
        rect(400, long, 240, long, 3);

        pop();

        push()
        noFill();
        rectMode(CENTER)
        stroke(0, 253, 255)
        rect(800, long, long, 100, 3);

        pop();
        push()
        noFill();
        rectMode(CENTER)
        stroke(0, 253, 255)
        rect(800, 200, long, long, 3);

        pop();
        push()
        noFill();
        rectMode(CENTER)
        stroke(0, 253, 255)
        rect(1400, long, 200, 350, 3);

        pop();

        pop();

    }




    playSound(song15, 71)
    if (song15.isPlaying() == true) {
        push()
        noStroke();
        let t = frameCount / 60; //détermine le niveau d'image par secondes

        for (var i = 0; i < random(10); i++) {
            snowflakes.push(new snowflake());
        }


        for (let flake of snowflakes) {
            flake.update(t);
            flake.display();
        }

        function snowflake() {

            this.posX = 0;
            this.posY = random(-50, 0);
            this.initialangle = random(0, 2 * PI);
            this.size = random(7, 5);
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
                fill(140, 0, 200);
            };
        }



        pop()
    }




    playSound(song16, 72)
    if (song16.isPlaying() == true) {
        push()
        song16FFT.analyze();
        var nrj1 = song16FFT.getEnergy("bass")
        push()
        noFill();
        rectMode(CENTER);
        strokeWeight(5);
        stroke(0, 253, 255)
        translate(width * 0.5, height * 0.5)
        rect(0, 0, nrj1, nrj1)
        pop();

        push()
        noFill();
        rectMode(CENTER);
        strokeWeight(5);
        stroke(0, 253, 255)
        translate(width * 0.5, height * 0.5)
        rect(0, 0, nrj1 / 2, nrj1 / 2)
        pop();

        push()
        noFill();
        rectMode(CENTER);
        strokeWeight(5);
        stroke(0, 253, 255)
        translate(width * 0.5, height * 0.5)
        rect(0, 0, nrj1 / 4, nrj1 / 4)
        pop();

        push()
        noFill();
        rectMode(CENTER);
        strokeWeight(5);
        stroke(0, 253, 255)
        translate(width * 0.5, height * 0.5)
        rect(0, 0, nrj1 * 2, nrj1 * 2)
        pop();

        pop();
    }




    playSound(song17, 74)
    if (song17.isPlaying() == true) {
        push()


        var nsegment = 200
        var ncurrentsegment = (map(song17.currentTime(), 0, song17.duration(), 0, nsegment + 1))
        for (var i = 0; i < ncurrentsegment; i++) {
            stroke(206, 28, 26);
            strokeWeight(2)
            var angle = map(i, 45, nsegment, 0, TWO_PI);
            var x = width * 0.5 + height * 1 * cos(angle);
            var y = height * 0.5 + height * 8 * sin(angle);
            line(width * 0.5, height * 0.5, x, y);

        }

        pop();


    }




    playSound(song18, 75)
    if (song18.isPlaying() == true) {
        push()


        var nsegment = 400
        var ncurrentsegment = (map(song18.currentTime(), 0, song18.duration(), 0, nsegment + 1))
        for (var i = 0; i < ncurrentsegment; i++) {
            stroke(255, 0, 127);
            strokeWeight(1)
            var angle = map(i, 0, nsegment, 0, TWO_PI);
            var x = width * 200 + height * 180 * cos(angle);
            var y = height * 20 + height * 180 * sin(angle);
            line(width * 0.1, height * 0.5, x, y);

        }

        pop();

    }




    playSound(song19, 76);

    if (song19.isPlaying() == true) {
        push()
        song19FFT.analyze();
        rectMode(CENTER);
        var nrj1 = song19FFT.getEnergy("bass")
        noStroke();

        push()
        fill(210, 28, 26, 300)
        translate(width * 0.25, height * 0.5)
        rotate(PI / 4)
        ellipse(0, 0, nrj1, nrj1)
        noStroke();
        pop()

        push()
        fill(210, 28, 26, 300)
        translate(width * 0.5, height * 0.5)
        rotate(PI / 4)
        ellipse(0, 0, nrj1, nrj1)
        noStroke();
        pop()

        push()
        fill(210, 28, 26, 300)
        translate(width * 0.75, height * 0.5)
        rotate(PI / 4)
        ellipse(0, 0, nrj1, nrj1)
        noStroke();

        pop()

        pop()
    }




    playSound(song20, 77)

    if (song20.isPlaying() == true) {
        push();
        var rad = map(song20.currentTime(), 0, song20.duration(), width, 1)
        noFill()
        stroke(206, 28, 206);
        strokeWeight(3)
        ellipse(width * 0.5, height * 0.5, rad, rad)
        pop();
    }




    playSound(song21, 87)

    if (song21.isPlaying() == true) {
        push()
        var waveform = song21FFT.waveform();
        noFill();
        beginShape();
        stroke(102, 0, 225, 300);
        strokeWeight(15);
        for (var i = 0; i < waveform.length; i++) {
            var x = map(i, 0, waveform.length, 0, width);
            var y = map(waveform[i], -1, 1, 0, height);
            curveVertex(x, y);
        }
        endShape();
        pop()
    }




    playSound(song22, 88)

    if (song22.isPlaying() == true) {
        push();
        noStroke();
        rectMode(CENTER);
        noFill();
        var rad = map(song22.currentTime(), 0, song22.duration(), 50, width);
        stroke(0, 0, 255)
        strokeWeight(5);
        rect(width * 0.5, height * 0.5, rad, rad)
        pop();

        push();
        noStroke();
        rectMode(CENTER);
        noFill();
        var rad = map(song22.currentTime(), 3, song22.duration(), 50, width);
        stroke(0, 0, 255)
        strokeWeight(5);
        rect(width * 0.5, height * 0.5, rad, rad)
        pop();
        push();
        noStroke();
        rectMode(CENTER);
        noFill();
        var rad = map(song22.currentTime(), 6, song22.duration(), 50, width);
        stroke(0, 0, 255)
        strokeWeight(5);
        rect(width * 0.5, height * 0.5, rad, rad)
        pop();
        push();
        noStroke();
        rectMode(CENTER);
        noFill();
        var rad = map(song22.currentTime(), 9, song22.duration(), 50, width);
        stroke(0, 0, 255)
        strokeWeight(5);
        rect(width * 0.5, height * 0.5, rad, rad)
        pop();

        push();
        noStroke();
        rectMode(CENTER);
        noFill();
        var rad = map(song22.currentTime(), 12, song22.duration(), 50, width);
        stroke(0, 0, 255)
        strokeWeight(5);
        rect(width * 0.5, height * 0.5, rad, rad)
        pop();

        push();
        noStroke();
        rectMode(CENTER);
        noFill();
        var rad = map(song22.currentTime(), 15, song22.duration(), 50, width);
        stroke(0, 0, 255)
        strokeWeight(5);
        rect(width * 0.5, height * 0.5, rad, rad)
        pop();








        pop();
    }




    playSound(song23, 67)

    if (song23.isPlaying() == true) {
        push();
        var rad = map(song23.currentTime(), 0, song23.duration(), width, 1)
        noFill()
        stroke(206, 28, 206);
        strokeWeight(4)
        ellipse(width * 0.5, height * 0.5, rad, rad)
        pop();
        push();
        var rad = map(song23.currentTime(), 2, song23.duration(), width, 1) //le chiffre apres le currentTime correspond à l'arrivée de l'animation sur l'écran apres un certain lapse de temps
        noFill()
        stroke(206, 28, 206);
        strokeWeight(4)
        ellipse(width * 0.5, height * 0.5, rad, rad)
        pop();
        push();
        var rad = map(song23.currentTime(), 4, song23.duration(), width, 1)
        noFill()
        stroke(206, 28, 206);
        strokeWeight(4)
        ellipse(width * 0.5, height * 0.5, rad, rad)
        pop();
        push();
        var rad = map(song23.currentTime(), 6, song23.duration(), width, 1)
        noFill()
        stroke(206, 28, 206);
        strokeWeight(4)
        ellipse(width * 0.5, height * 0.5, rad, rad)
        pop();
        push();
        var rad = map(song23.currentTime(), 8, song23.duration(), width, 1)
        noFill()
        stroke(206, 28, 206);
        strokeWeight(4)
        ellipse(width * 0.5, height * 0.5, rad, rad)
        pop();
        push();
        var rad = map(song23.currentTime(), 10, song23.duration(), width, 1)
        noFill()
        stroke(206, 28, 206);
        strokeWeight(4)
        ellipse(width * 0.5, height * 0.5, rad, rad)
        pop();
        push();
        var rad = map(song23.currentTime(), 12, song23.duration(), width, 1)
        noFill()
        stroke(206, 28, 206);
        strokeWeight(4)
        ellipse(width * 0.5, height * 0.5, rad, rad)
        pop();
        push();
        var rad = map(song23.currentTime(), 14, song23.duration(), width, 1)
        noFill()
        stroke(206, 28, 206);
        strokeWeight(4)
        ellipse(width * 0.5, height * 0.5, rad, rad)
        pop();
        push();
        var rad = map(song23.currentTime(), 16, song23.duration(), width, 1)
        noFill()
        stroke(206, 28, 206);
        strokeWeight(4)
        ellipse(width * 0.5, height * 0.5, rad, rad)
        pop();
        push();
        var rad = map(song23.currentTime(), 18, song23.duration(), width, 1)
        noFill()
        stroke(206, 28, 206);
        strokeWeight(4)
        ellipse(width * 0.5, height * 0.5, rad, rad)
        pop();


    }
    playSound(song24, 86)

    if (song24.isPlaying() == true) {
        push();
        translate(width / 2, height / 2);
        var x = r * cos(theta);
        var y = r * sin(theta);
        ellipseMode(CENTER);
        noStroke();
        fill(254, 27, 0);
        ellipse(x, y, 70, 70); // ici x et y sont associés a des variables(var x et var y) qui permettent la rotation de l'objet
        theta_vel += theta_acc;
        theta += theta_vel;
        pop();

        push();
        translate(width / 2, height / 2);
        var x = r * cos(theta);
        var y = r * sin(theta);
        ellipseMode(CENTER);
        noStroke();
        fill(254, 27, 0);
        ellipse(y, x, 70, 70);
        theta_vel += theta_acc;
        theta += theta_vel;
        pop();
    }

    playSound(song25, 66)
    if (song25.isPlaying() == true) {
        push();
        var rad = map(song25.currentTime(), 0, song25.duration(), width, 0)
        var rotation = map(song25.currentTime(), 0, song25.duration(), PI, 0)
        rectMode(CENTER)
        translate(width * 0.5, height * 0.5)
        rotate(rotation)

        fill(0, 0, 255)
        rect(0, 0, width * 3, rad * 0.5)
        pop()
    }


    playSound(song26, 78)

    if (song26.isPlaying() == true) {
        push(); {
            push()
            textAlign(CENTER);
            drawWords(width * 0.5);

            function drawWords(x) {
                fill(206, 28, 206);
                text('Patatap', 744, 330);
            }
            pop();
        }

        {
            push()
            textAlign(CENTER);
            drawWords(width * 0.5);

            function drawWords(x) {
                fill(0, 255, 255);
                text('Patatap', 734, 320);
            }
            pop();


        }
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
}

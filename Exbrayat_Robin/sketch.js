var sound1, sound2, sound3, sound4, sond5, sound5FFT, sound1Amp, sound, sound6, sound6FFT, sound7, sound7FFT, sound8, stab3, sound9, sound10, sound11, sound12, sound15;
var xpos = [];
var ypos = [];
var xtarget = [];
var ytarget = [];
var r, v, b, choose;
var fireworks = [];
var gravity;
var pgfireworks;
var n = 0;
var c = 3;
var points = [];
var start = 0;
var yoff = 0.0;
var yoff2 = 0.0;
var drops = [];
var system;



function preload() {
    sound1 = loadSound('../assets/217.mp3');
    sound2 = loadSound('../assets/JUST_clap.wav');
    sound3 = loadSound('../assets/JUST_kick.wav');
    sound4 = loadSound('../assets/200.mp3');
    sound5 = loadSound('../assets/elect.mp3');
    sound6 = loadSound('../assets/JUST_kick_1.wav');
    sound7 = loadSound('../assets/switch2.mp3');
    sound8 = loadSound('../assets/JUST_rim.wav');
    sound9 = loadSound('../assets/1043.mp3');
    sound10 = loadSound('../assets/Bpm09_1.mp3');
    sound11 = loadSound('../assets/10432.mp3');
    sound12 = loadSound('../assets/1.mp3');
    sound13 = loadSound('../assets/2767.mp3');
    sound14 = loadSound('../assets/226.mp3');
    sound15 = loadSound('../assets/cool-sound.mp3')
    sound16 = loadSound('../assets/Bpm095_4.mp3')
    sound17 = loadSound('../assets/JUST_snare_1.wav')
    sound18 = loadSound('../assets/FFL.mp3')
    sound19 = loadSound('../assets/sfx_die.mp3')
    sound20 = loadSound('../assets/LL_.wav')
    sound21 = loadSound('../assets/4.mp3')
    sound22 = loadSound('../assets/231.mp3')
    sound23 = loadSound('../assets/Bpm095_5.mp3')
    sound24 = loadSound('../assets/Bpm095_2.mp3')
    sound25 = loadSound('../assets/3276.mp3')
    sound26 = loadSound('../assets/firework_4.mp3')
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
    sound1Amp = new p5.Amplitude()
    sound1Amp.setInput(sound1)
    sound5FFT = new p5.FFT(0.8, 16)
    sound5FFT.setInput(sound5)
    sound6FFT = new p5.FFT(0.8, 1024)
    sound6FFT.setInput(sound6)
    sound7FFT = new p5.FFT(0.8, 16)
    sound7FFT.setInput(sound7)
    sound11FFT = new p5.FFT(0.8, 16)
    sound11FFT.setInput(sound11)
    sound14FFT = new p5.FFT(0.8, 16)
    sound14FFT.setInput(sound14)
    sound16FFT = new p5.FFT(0.8, 16)
    sound16FFT.setInput(sound16)
    sound18FFT = new p5.FFT(0.8, 16)
    sound18FFT.setInput(sound18)
    sound22FFT = new p5.FFT(0.8, 16)
    sound22FFT.setInput(sound22)

    for (var i = 0; i < 500; i++) {
        drops[i] = new Drop();
    }

    for (var i = 0; i < 50; i++) {

        xpos.push(random(0, width))
        ypos.push(random(0, -height))

        xtarget.push(random(width))
        ytarget.push(random(height))
    }

    pgfireworks = createGraphics(windowWidth, windowHeight)

    console.log(ypos[0])

    system = new
    ParticleSystem(createVector(width / 2, height / 2));
}



function draw() {
    background(0)



    playSound(sound1, 74); //bulles qui explose du centre vers l'exterieur
    playSound(sound2, 69); //clap - deux carré du coté vers le milieu
    playSound(sound3, 90); //rond du centre vers les cotés
    playSound(sound4, 72); //animation feu d'artifice
    playSound(sound5, 88); //4 carrés qui tourne et un carré au milieu en fonction du son
    playSound(sound6, 85); //onde plus grosse
    playSound(sound7, 82); // carrés et ronds au centre en fonction du son
    playSound(sound8, 84); //3 balles qui rebondis
    playSound(sound9, 77); //feu follet qui forme un cercle plusieurs fois
    playSound(sound10, 89); //forme ciculaire organique
    playSound(sound11, 81); // plusieurs lignes qui tourne très vite
    playSound(sound12, 83); // tout petit cercle qui remonte vers le haut
    playSound(sound13, 68); // multitude d'ellipse qui vont dans la même direction et qui forme une ligne
    playSound(sound14, 70); // cercle qui tombe du haut et change de taille en fonction du son
    playSound(sound15, 67); // tombe de la neige avec une musique épique
    playSound(sound16, 79); // 3 ligne qui vibre
    playSound(sound17, 73); // forme circulaire qui change de couleur au renouvelement
    playSound(sound18, 80); // rond et carré + forme au milieu qui bouge
    playSound(sound19, 65); // sorte d'hélice qui tourne
    playSound(sound20, 86); // monté vers le haut de petit point
    playSound(sound21, 71); //explosion de petit point / phyllotaxis
    playSound(sound22, 75); //3 ronds qui rétrécissent
    playSound(sound23, 87); //forme organique
    playSound(sound24, 78); //sorte d'étoile
    playSound(sound25, 66); //pluie multicolor
    playSound(sound26, 76); // explosion de la touche 71



    // monté vers le haut de petit point
    if (sound20.isPlaying() == true) {
        push()

        pgfireworks.noStroke()
        pgfireworks.fill(0, 0.05)
        pgfireworks.rect(0, 0, width, height)
        pgfireworks.colorMode(HSB);
        pgfireworks.stroke(255);
        pgfireworks.strokeWeight(0.2);
        gravity = createVector(0.1, 0.01);
        if (random(0.0001) < 0.10) {
            fireworks.push(new Firework());
        }

        for (var i = fireworks.length - 1; i >= 0; i--) {
            fireworks[i].update();
            fireworks[i].show(pgfireworks);

            if (fireworks[i].done()) {
                fireworks.splice(i, 1);
            }
        }

        image(pgfireworks, 0, 0, width, height)
        pop()


    };



    //forme ciculaire organique
    if (sound10.isPlaying() == true) {
        push()
        var nsegment = 300;
        var ncurrentsegment = (map(sound10.currentTime(), 0, sound10.duration(), 0, nsegment + 1));
        for (var i = 0; i < ncurrentsegment; i++) {
            fill(255, 0, random(255));

            strokeWeight(4);
            var angle = map(i, 0, nsegment * 1.5, 0, TWO_PI);
            var x = width * 0.5 + height * 0.45 * cos(angle);
            var y = height * 0.5 + height * 0.45 * sin(angle);
            ellipse(width / 2, height / 2, x, y);
        }
        pop()
    }



    if (keyIsDown(72)) {
        fireworks = []
    }

    //animation feu d'artifice
    if (sound4.isPlaying() == true) {
        push()
        pgfireworks.noStroke()
        pgfireworks.fill(0, 0.05)
        pgfireworks.rect(0, 0, width, height)
        pgfireworks.colorMode(HSB);
        pgfireworks.stroke(255);
        pgfireworks.strokeWeight(4);
        gravity = createVector(0, 0.12);
        if (random(1) < 0.13) {
            fireworks.push(new Firework());
        }

        for (var i = fireworks.length - 1; i >= 0; i--) {
            fireworks[i].update();
            fireworks[i].show(pgfireworks);

            if (fireworks[i].done()) {
                fireworks.splice(i, 1);
            }
        }

        image(pgfireworks, 0, 0, width, height)
        pop()


    };


    //forme organique
    if (sound23.isPlaying() == true) {

        push()
        translate(width / 2, height / 2);

        var radius = 200;

        beginShape();
        noStroke()
        var xoff = 0;
        for (var a = 0; a < TWO_PI; a += 0.001) {
            var offset = map(noise(xoff, yoff), 0, 1, -50, 100);
            var r3 = radius + offset;
            var x3 = r3 * cos(a);
            var y3 = r3 * sin(a);
            fill(0, random(99, 105), random(99, 105));
            vertex(x3, y3);
            xoff += 0.01;
            //ellipse(x3, y3, 4, 4);
        }
        endShape();

        yoff += 0.01;
        pop()
    }


    //clap - deux carré du coté vers le milieu
    if (sound2.isPlaying() == true) {
        push()
        var ang = map(sound2.currentTime(), 0, sound2.duration(), width, 0)
        fill(0, 0, 255)
        rectMode(CENTER);
        rect(width * 0, height * 0, ang, ang)
        pop()

        push()
        var ang = map(sound2.currentTime(), 0, sound2.duration(), width, 0)
        fill(0, 0, 255)
        rectMode(CENTER);
        rect(width * 1, height * 0, ang, ang)
        pop()
    }


    //bulles qui explose du centre vers l'exterieur
    if (sound1.isPlaying() == true) {
        push()

        system.addParticle();
        system.run();


        pop()



    }

    //rond du centre vers les cotés
    if (sound3.isPlaying() == true) {
        push()
        var rad = map(sound3.currentTime(), 0, sound3.duration(), 50, width)
        fill(0, 167, 157)
        ellipse(width * 0.5, height * 0.5, rad, rad)
        pop()
    }


    //4 carrés qui tourne et un carré au milieu en fonction du son
    if (sound5.isPlaying() == true) {

        sound5FFT.analyze();
        rectMode(CENTER);
        var nrj1 = sound5FFT.getEnergy("bass")

        push()

        fill(0, 200, 255, 50)
        translate(width * 0.5, height * 0.5)
        rotate(PI / 4)
        rect(0, 0, nrj1, nrj1)
        pop()

        push()
        noStroke()
        fill(0, 200, 255, nrj1)
        translate(width * 0.36, height * 0.25)
        var ang = map(sound5.currentTime(), 0, sound5.duration(), 0, PI * 2)
        rectMode(CENTER);
        rotate(ang)
        rect(0, 0, width * 0.2, width * 0.2)
        pop()


        push()
        noStroke()
        fill(0, 200, 255, nrj1)
        translate(width * 0.64, height * 0.75)
        var ang = map(sound5.currentTime(), 0, sound5.duration(), 0, PI * 2)
        rectMode(CENTER);
        rotate(ang)
        rect(0, 0, width * 0.2, width * 0.2)
        pop()

        push()
        noStroke()
        fill(0, 200, 255, nrj1)
        translate(width * 0.36, height * 0.75)
        var ang = map(sound5.currentTime(), 0, sound5.duration(), 0, -PI * 2)
        rectMode(CENTER);
        rotate(ang)
        rect(0, 0, width * 0.2, width * 0.2)
        pop()


        push()
        noStroke()
        fill(0, 200, 255, nrj1)
        translate(width * 0.64, height * 0.25)
        var ang = map(sound5.currentTime(), 0, sound5.duration(), 0, -PI * 2)
        rectMode(CENTER);
        rotate(ang)
        rect(0, 0, width * 0.2, width * 0.2)
        pop()


    }

    //onde plus grosse
    if (sound6.isPlaying() == true) {
        push()

        var waveform = sound6FFT.waveform();
        noFill();
        beginShape()
        stroke(150, 255, 255);
        strokeWeight(10);
        for (var i = 0; i < waveform.length; i++) {
            var x = map(i, 0, waveform.length, 0, width * 1.5);
            var y = map(waveform[i], -1, 1, 0, height);
            curveVertex(x, y);

        }
        endShape();

        pop()
    }
    // carrés et ronds au centre en fonction du son
    if (sound7.isPlaying() == true) {

        sound7FFT.analyze();
        rectMode(CENTER);
        var nrj1 = sound7FFT.getEnergy("bass")
        var radius = map(nrj1, 0, 255, 0, 450) //permet de changer la limite de 255 à 450 pour notre cas.

        push()
        noStroke();
        fill(100, random(255), 0, 50)
        translate(width * 0.5, height * 0.5)
        rotate(PI / 4)
        rect(0, 0, radius * 2, radius * 2)
        pop()

        push()
        noStroke();
        fill(100, random(255), 0, 50)
        translate(width * 0.5, height * 0.5)
        rotate(PI / 4)
        rect(0, 0, radius * 1.5, radius * 1.5)
        pop()

        push()
        noStroke();
        fill(100, random(255), 0, 50)
        translate(width * 0.5, height * 0.5)
        rotate(PI / 4)
        rect(0, 0, radius, radius)
        pop()

        push()
        noStroke();
        fill(100, random(255), 0, 50)
        translate(width * 0.5, height * 0.5)
        ellipse(0, 0, nrj1 * 1.5, nrj1 * 1.5)
        pop()

        push()
        noStroke();
        fill(100, random(255), 0, 50)
        translate(width * 0.5, height * 0.5)
        ellipse(0, 0, nrj1, nrj1)
        pop()

        push()
        noStroke();
        fill(100, random(255), 0, 50)
        translate(width * 0.5, height * 0.5)
        ellipse(0, 0, nrj1 * 0.75, nrj1 * 0.75)
        pop()


    }

    //3 balles qui rebondis
    if (sound8.isPlaying() == true) {
        push()
        noStroke();
        fill(0, 255, 255)
        var theta = map(sound8.currentTime(), 0, sound8.duration(), 0, PI);
        var ypos1 = height - sin(theta) * height * 0.8;
        ellipse(width * 0.5, ypos1, 100, 100);
        pop()
        push()
        noStroke();
        fill(0, 255, 255)
        var theta = map(sound8.currentTime(), 0, sound8.duration(), 0, PI);
        var ypos1 = height - sin(theta) * height * 0.5;
        ellipse(width * 0.8, ypos1, 100, 100);
        pop()
        push()
        noStroke();
        fill(0, 255, 255)
        var theta = map(sound8.currentTime(), 0, sound8.duration(), 0, PI);
        var ypos1 = height - sin(theta) * height * 0.4;
        ellipse(width * 0.2, ypos1, 100, 100);
        pop()
    }

    //feu follet qui forme un cercle plusieurs fois
    if (sound9.isPlaying() == true) {
        push()

        var t = map(sound9.currentTime(), 0, sound9.duration(), 0, 1)

        for (var i = 0; i < 100; i++) {
            var x = lerp(xpos[i], xtarget[i], t)
            var y = lerp(ypos[i], ytarget[i], t)
            translate(width * 0.7, height * 0.7)
            var ang = map(sound9.currentTime(), 0, sound9.duration(), 0, 40)

            rotate(ang)

            fill(232, random(255), 0)
            ellipse(x / 3, y / 3, 50, 10)


        }
        pop()



    }




    // plusieurs lignes qui tourne très vite
    if (sound11.isPlaying() == true) {
        sound11FFT.analyze();
        var nrj1 = sound11FFT.getEnergy("bass")

        push()
        translate(width * 0.5, height * 0.2)
        var ang = map(sound11.currentTime(), 0, sound11.duration(), 0, 30)
        rectMode(CENTER);
        rotate(ang)
        noStroke();
        fill(232, random(255), 0)
        rect(0, 0, nrj1 / 1.5, height * 0.01)
        pop()

        push()
        translate(width * 0.5, height * 0.2)
        var ang = map(sound11.currentTime(), 0, sound11.duration(), 30, 0)
        rectMode(CENTER);
        rotate(ang)
        noStroke();
        fill(232, random(255), 0)
        rect(0, 0, nrj1 / 1.5, height * 0.01)
        pop()

        push()
        translate(width * 0.1, height * 0.8)
        var ang = map(sound11.currentTime(), 0, sound11.duration(), 0, 30)
        rectMode(CENTER);
        rotate(ang)
        noStroke();
        fill(232, random(255), 0)
        rect(0, 0, nrj1 / 1.5, height * 0.01)
        pop()

        push()
        translate(width * 0.1, height * 0.8)
        var ang = map(sound11.currentTime(), 0, sound11.duration(), 30, 0)
        rectMode(CENTER);
        rotate(ang)
        noStroke();
        fill(232, random(255), 0)
        rect(0, 0, nrj1 / 1.5, height * 0.01)
        pop()

        push()
        translate(width * 0.3, height * 0.65)
        var ang = map(sound11.currentTime(), 0, sound11.duration(), 0, 30)
        rectMode(CENTER);
        rotate(ang)
        noStroke();
        fill(232, random(255), 0)
        rect(0, 0, nrj1 / 1.5, height * 0.01)
        pop()

        push()
        translate(width * 0.3, height * 0.65)
        var ang = map(sound11.currentTime(), 0, sound11.duration(), 30, 0)
        rectMode(CENTER);
        rotate(ang)
        noStroke();
        fill(232, random(255), 0)
        rect(0, 0, nrj1 / 1.5, height * 0.01)
        pop()

        push()
        translate(width * 0.6, height * 0.8)
        var ang = map(sound11.currentTime(), 0, sound11.duration(), 0, 30)
        rectMode(CENTER);
        rotate(ang)
        noStroke();
        fill(232, random(255), 0)
        rect(0, 0, nrj1 / 1.5, height * 0.01)
        pop()

        push()
        translate(width * 0.6, height * 0.8)
        var ang = map(sound11.currentTime(), 0, sound11.duration(), 30, 0)
        rectMode(CENTER);
        rotate(ang)
        noStroke();
        fill(232, random(255), 0)
        rect(0, 0, nrj1 / 1.5, height * 0.01)
        pop()

        push()
        translate(width * 0.8, height * 0.2)
        var ang = map(sound11.currentTime(), 0, sound11.duration(), 0, 30)
        rectMode(CENTER);
        rotate(ang)
        noStroke();
        fill(232, random(255), 0)
        rect(0, 0, nrj1 / 1.5, height * 0.01)
        pop()

        push()
        translate(width * 0.8, height * 0.2)
        var ang = map(sound11.currentTime(), 0, sound11.duration(), 30, 0)
        rectMode(CENTER);
        rotate(ang)
        noStroke();
        fill(232, random(255), 0)
        rect(0, 0, nrj1 / 1.5, height * 0.01)
        pop()

        push()
        translate(width * 0.8, height * 0.8)
        var ang = map(sound11.currentTime(), 0, sound11.duration(), 0, 30)
        rectMode(CENTER);
        rotate(ang)
        noStroke();
        fill(232, random(255), 0)
        rect(0, 0, nrj1 / 1.5, height * 0.01)
        pop()

        push()
        translate(width * 0.8, height * 0.8)
        var ang = map(sound11.currentTime(), 0, sound11.duration(), 30, 0)
        rectMode(CENTER);
        rotate(ang)
        noStroke();
        fill(232, random(255), 0)
        rect(0, 0, nrj1 / 1.5, height * 0.01)
        pop()

        push()
        translate(width * 0.5, height * 0.5)
        var ang = map(sound11.currentTime(), 0, sound11.duration(), 0, 30)
        rectMode(CENTER);
        rotate(ang)
        noStroke();
        fill(232, random(255), 0)
        rect(0, 0, nrj1 / 1.5, height * 0.01)
        pop()

        push()
        translate(width * 0.5, height * 0.5)
        var ang = map(sound11.currentTime(), 0, sound11.duration(), 30, 0)
        rectMode(CENTER);
        rotate(ang)
        noStroke();
        fill(232, random(255), 0)
        rect(0, 0, nrj1 / 1.5, height * 0.01)
        pop()

        push()
        translate(width * 0.2, height * 0.2)
        var ang = map(sound11.currentTime(), 0, sound11.duration(), 0, 30)
        rectMode(CENTER);
        rotate(ang)
        noStroke();
        fill(232, random(255), 0)
        rect(0, 0, nrj1 / 1.5, height * 0.01)
        pop()

        push()
        translate(width * 0.2, height * 0.2)
        var ang = map(sound11.currentTime(), 0, sound11.duration(), 30, 0)
        rectMode(CENTER);
        rotate(ang)
        noStroke();
        fill(232, random(255), 0)
        rect(0, 0, nrj1 / 1.5, height * 0.01)
        pop()

    }


    // tout petit cercle qui remonte vers le haut
    if (sound12.isPlaying() == true) {
        push()

        var t = map(sound12.currentTime(), 0, sound12.duration() * 0.75, 0, 1)
        noStroke()



        for (var i = 0; i < 100; i++) {
            var x = lerp(xpos[i], xtarget[i], t)
            var y = lerp(ypos[i], ytarget[i], t)
            fill(255, 0, 255)
            var ang = map(sound12.currentTime(), 0, sound12.duration(), 1, 0)
            rectMode(CENTER);
            rotate(ang)
            ellipse(y, x, width * 0.005, height * 0.005)
        }
        pop()

    }



    // multitude d'ellipse qui vont dans la même direction et qui forme une ligne
    if (sound13.isPlaying() == true) {
        push()

        var t = map(sound13.currentTime(), 0, sound13.duration(), 0, 1)
        noStroke()


        for (var i = 0; i < 100; i++) {
            translate(width * 0.5, height * 0.5)
            var x = lerp(xpos[i], xtarget[i], t)
            var y = lerp(ypos[i], ytarget[i], t)
            fill(200, random(255), 255)
            var ang = map(sound13.currentTime(), 0, sound13.duration(), 1, 0)
            rectMode(CENTER);
            rotate(ang)
            ellipse(height * 0.1, width * 0.1, width * 0.02, height * 0.02)
        }
        pop()
    }


    // cercle qui tombe du haut et change de taille en fonction du son
    if (sound14.isPlaying() == true) {
        sound14FFT.analyze();
        var nrj1 = sound14FFT.getEnergy("bass")
        push()
        noStroke();
        var t = map(sound14.currentTime(), 0, sound14.duration(), 0, 1)

        for (var i = 0; i < 70; i++) {
            fill(255, random(255), 0)
            var x = lerp(xpos[i], xtarget[i], t)
            var y = lerp(ypos[i], ytarget[i], t)
            ellipse(x, y, nrj1 / 2.5, nrj1 / 2.5)


        }
        pop()
    }




    // tombe de la neige avec une musique épique
    if (keyIsDown(67)) {
        snowflakes = []
    }


    if (sound15.isPlaying() == true) {
        push()

        var t2 = map(sound15.currentTime(), 0, sound15.duration(), 0, 1)

        let t = frameCount / 20;


        for (var i = 0; i < random(5); i++) {
            snowflakes.push(new snowflake());
        }


        for (let flake of snowflakes) {
            flake.update(t);
            flake.display();
        }
        pop()
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
            ellipse(this.posX, this.posY * 1.5, this.size);



            var grey = map(sound15.currentTime(), sound15.duration() * 0.75, sound15.duration(), 255, 0)
            t2 = constrain(t, 0, 1)
            grey = constrain(grey, 0, random(255))
            fill(grey);
        };

    }



    // 3 ligne qui vibre
    if (sound16.isPlaying() == true) {
        push()

        var waveform = sound16FFT.waveform();
        noFill();
        beginShape();
        stroke(255, 0, 255);
        strokeWeight(4);
        for (var i = 0; i < waveform.length; i++) {
            var x = map(i, 0, waveform.length, 0, width);
            var y = map(waveform[i], -1, 2, 0, height);
            curveVertex(x, y);
        }
        endShape();

        pop()

        push()

        var waveform = sound16FFT.waveform();
        noFill();
        beginShape();
        stroke(255, 0, 255);
        strokeWeight(10);
        for (var i = 0; i < waveform.length; i++) {
            var x = map(i, 0, waveform.length, 0, width);
            var y = map(waveform[i], -1, 1, 0, height);
            curveVertex(x, y);
        }
        endShape();

        pop()

        push()
        var waveform = sound16FFT.waveform();
        noFill();
        beginShape();
        stroke(255, 0, 255);
        strokeWeight(4);
        for (var i = 0; i < waveform.length; i++) {
            var x = map(i, 0, waveform.length, 0, width);
            var y = map(waveform[i], -1, 0.5, 0, height);
            curveVertex(x, y);
        }
        endShape();

        pop()
    }

    if (keyIsDown(73) == true) {
        choose = random(1, 4);
        if (choose < 2) {
            r = random(0, 100);
            v = random(0, 255);
            b = 255;
        }
        if (choose >= 2 && choose < 3) {
            b = random(0, 100);
            v = 255;
            r = random(0, 255);
        }
        if (choose >= 3) {
            v = random(0, 100);
            r = 255;
            b = random(0, 255);
        }
    }


    // forme circulaire qui change de couleur au renouvelement
    if (sound17.isPlaying() == true) {
        push()
        var nsegment = 200;
        var ncurrentsegment = (map(sound17.currentTime(), 0, sound17.duration(), 0, nsegment + 1));

        for (var i = 0; i < ncurrentsegment; i++) {

            fill(r, v, b);
            noStroke()
            strokeWeight(4);
            var angle = map(i, 0, nsegment, 0, TWO_PI);
            var x = width * 0.5 + height * 0.45 * cos(angle);
            var y = height * 0.5 + height * 0.45 * sin(angle);
            ellipse(x, y, 80, 80)
        }
        pop()
    }



    // rond et carré + forme au milieu qui bouge
    if (sound18.isPlaying() == true) {
        sound18FFT.analyze();
        rectMode(CENTER);
        var nrj1 = sound18FFT.getEnergy("bass")



        push()
        fill(0, 200, random(255), )
        translate(width * 0.35, height * 0.5)
        rotate(PI / 4)
        rect(0, 0, nrj1 * 1.3, nrj1 * 1.3)
        pop()

        push()
        fill(0, 200, random(255), )
        translate(width * 0.65, height * 0.5)
        rotate(PI / 4)
        rect(0, 0, nrj1 * 1.3, nrj1 * 1.3)
        pop()

        push()
        fill(random(255), 0, random(255))
        translate(width * 0.2, height * 0.5)
        rotate(PI / 4)
        ellipse(0, 0, nrj1 * 0.5, nrj1 * 0.5)
        pop()

        push()
        fill(random(255), 0, random(255))
        translate(width * 0.8, height * 0.5)
        rotate(PI / 4)
        ellipse(0, 0, nrj1 * 0.5, nrj1 * 0.5)
        pop()

        push()
        fill(random(255), 0, random(255))
        translate(width * 0.5, height * 0.2)
        rotate(PI / 4)
        ellipse(0, 0, nrj1 * 0.5, nrj1 * 0.5)
        pop()

        push()
        fill(random(255), 0, random(255))
        translate(width * 0.5, height * 0.8)
        rotate(PI / 4)
        ellipse(0, 0, nrj1 * 0.5, nrj1 * 0.5)
        pop()



        push()

        var nsegment = 300;
        var ncurrentsegment = (map(sound18.currentTime(), 0, sound18.duration(), 0, nsegment + 1));
        for (var i = 0; i < ncurrentsegment; i++) {
            fill(random(255), 0, random(255));
            var angle = map(i, 0, nsegment, 0, TWO_PI / 1.5);
            var x = width * 0.01 + height * 0.45 * cos(angle);
            var y = height * 0.01 + height * 0.45 * sin(angle);
            ellipse(width / 2, height / 2, x, y);
        }

        pop()
    }



    // sorte d'hélice qui tourne
    if (sound19.isPlaying() == true) {
        push()

        translate(width * 0.5, height * 0.5)
        var ang = map(sound19.currentTime(), 0, sound19.duration(), 0, PI * 2)
        rectMode(CENTER);
        rotate(ang)
        fill(0, 167, 200)
        noStroke();
        ellipse(0, 0, width * 0.07, height)
        pop()

        push()
        translate(width * 0.5, height * 0.5)
        var ang = map(sound19.currentTime(), 0, sound19.duration(), 0, PI * 3)
        rectMode(CENTER);
        rotate(ang)
        noStroke();
        fill(245, 147, 49)
        ellipse(0, 0, width * 0.04, height / 1.5)
        fill(0, 167, 157)
        ellipse(0, 0, 15, 15)
        fill(255, 255, 255)
        noStroke();
        rect(0, 0, 7, 7)
        pop()
    }



    //explosion de petits points
    if (keyIsDown(71)) {
        n = 0
    }

    if (sound21.isPlaying() == true) {

        push()

        translate(width / 2, height / 2);
        rotate(n * 0.01);
        for (var i = 0; i < n; i++) {
            var a = i * 137.5;
            var r1 = c * sqrt(i);
            var x = r1 * cos(a);
            var y = r1 * sin(a);
            var hu = sin(start + i * 0.5);
            hu = map(hu, -10, 10, 0, 360);
            fill(hu, random(255), 255);

            ellipse(x, y, 2, 2);
        }
        n += 150;
        start += 5;
        pop()
    }



    //3 ronds qui rétrécissent
    if (sound22.isPlaying() == true) {
        sound22FFT.analyze();
        var nrj1 = sound22FFT.getEnergy("bass")

        push()

        var rad = map(sound22.currentTime(), 0, sound22.duration(), width / 4, 10)
        fill(random(99, 205), 0, 0);
        ellipse(width * 0.3, height * 0.3, rad, rad)
        pop()

        push()
        var rad = map(sound22.currentTime(), 0, sound22.duration(), width / 4, 10)
        fill(random(99, 105), random(200, 255), 0);
        ellipse(width * 0.7, height / 3.6, rad, rad)
        pop()


        push()
        var rad = map(sound22.currentTime(), 0, sound22.duration(), width / 4, 10)
        fill(random(250, 255), random(230, 255), random(1, 70))
        ellipse(width * 0.5, height * 0.7, rad, rad)
        pop()
    }

    //sorte d'étoile
    if (sound24.isPlaying() == true) {

        push()
        translate(width / 2, height / 2);

        var radius = 200;
        noStroke()
        beginShape();
        var xoff2 = 0;
        for (var a = 0; a < TWO_PI; a += 0.01) {
            var offset = map(noise(xoff2, yoff2), 0, 1, -1050, 1000);
            var r4 = radius + offset;
            var x4 = r4 * cos(a);
            var y4 = r4 * sin(a);
            fill(0, random(99, 105), random(99, 205));
            vertex(x4, y4);
            xoff2 += 0.1;
            //ellipse(x4, y4, 4, 4);
        }
        endShape();

        yoff2 += 0.01;
        pop()
    }




    //pluie multicolor
    if (sound25.isPlaying() == true) {


        push()
        for (var i = 0; i < drops.length; i++) {
            drops[i].fall();
            drops[i].show();
        }

        pop()

    }




    // explosion de la touche 71
    if (sound26.isPlaying() == true) {

        push()
        translate(width * 0.3, height * 0.3);

        var radius = 200;
        noStroke()
        beginShape();
        var xoff2 = 0;
        for (var a = 0; a < TWO_PI; a += 0.001) {
            var offset = map(noise(xoff2, yoff2), 0, 1, -300, 100);
            var r4 = radius + offset;
            var x4 = r4 * cos(a);
            var y4 = r4 * sin(a);
            fill(random(99, 205), 0, 0);
            vertex(x4, y4);
            xoff2 += 0.1;
            //ellipse(x4, y4, 4, 4);
        }
        endShape();

        yoff2 += 0.1;
        pop()

        push()
        translate(width * 0.7, height / 3.6);

        var radius = 200;
        noStroke()
        beginShape();
        var xoff2 = 0;
        for (var a = 0; a < TWO_PI; a += 0.001) {
            var offset = map(noise(xoff2, yoff2), 0, 1, -305, 300);
            var r4 = radius + offset;
            var x4 = r4 * cos(a);
            var y4 = r4 * sin(a);
            fill(random(99, 105), random(200, 255), 0);
            vertex(x4, y4);
            xoff2 += 0.1;
            //ellipse(x4, y4, 4, 4);
        }
        endShape();

        yoff2 += 0.01;
        pop()

        push()
        translate(width * 0.5, height * 0.7);

        var radius = 20;
        noStroke()
        beginShape();
        var xoff2 = 0;
        for (var a = 0; a < TWO_PI; a += 0.001) {
            var offset = map(noise(xoff2, yoff2), 0, 1, -305, 300);
            var r4 = radius + offset;
            var x4 = r4 * cos(a);
            var y4 = r4 * sin(a);
            fill(random(250, 255), random(230, 255), random(1, 70));
            vertex(x4, y4);
            xoff2 += 0.1;
            //ellipse(x4, y4, 4, 4);
        }
        endShape();

        yoff2 += 0.01;
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
}




//Classe de l'animation pluie multicolor
function Drop() {

    this.x = random(width);
    this.y = random(-500, -50);
    this.z = random(0, 20);
    this.len = map(this.z, 0, 20, 10, 20);
    this.yspeed = map(this.z, 0, 20, 1, 20);

    this.fall = function () {
        this.y = this.y + this.yspeed;
        var grav = map(this.z, 0, 10, 0, 0.2);
        this.yspeed = this.yspeed + grav;

        if (this.y > height) {
            this.y = random(-200, -100);
            this.yspeed = map(this.z, 0, 20, 4, 10);
        }
    }

    this.show = function () {
        var thick = map(this.z, 0, 20, 1, 3);
        strokeWeight(thick);
        stroke(random(1, 255), random(1, 255), random(1, 255));
        line(this.x, this.y, this.x, this.y + this.len);

    }

}



// CLASSE particle pour la classe fireworks
function Particle2(x, y, hu, firework) {
    this.pos = createVector(x, y);
    this.firework = firework;
    this.lifespan = 255;
    this.hu = hu;
    this.acc = createVector(0, 0);

    if (this.firework) {
        this.vel = createVector(0, random(-12, -8));
    } else {
        this.vel = p5.Vector.random2D();
        this.vel.mult(random(2, 15));
    }

    this.applyForce = function (force) {
        this.acc.add(force);
    }

    this.update = function () {
        if (!this.firework) {
            this.vel.mult(0.9);
            this.lifespan -= 4;
        }

        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.mult(0);
    }

    this.done = function () {
        if (this.lifespan < 0) {
            return true;
        } else {
            return false;
        }
    }

    this.show = function (pg) {
        pg.colorMode(HSB);

        if (!this.firework) {
            pg.strokeWeight(2);
            pg.stroke(this.hu, 255, 255, this.lifespan);
        } else {
            pg.strokeWeight(4);
            pg.stroke(this.hu, 255, 255);
        }

        pg.point(this.pos.x, this.pos.y);
    }
}



//Classe de l'animation feu d'artifice
function Firework() {
    this.hu = random(255);
    this.firework = new Particle2(random(width), height, this.hu, true);
    this.exploded = false;
    this.particles = [];

    this.done = function () {
        if (this.exploded && this.particles.length === 0) {
            return true;
        } else {
            return false;
        }
    }

    this.update = function () {
        if (!this.exploded) {
            this.firework.applyForce(gravity);
            this.firework.update();

            if (this.firework.vel.y >= 0) {
                this.exploded = true;
                this.explode();
            }
        }

        for (var i = this.particles.length - 1; i >= 0; i--) {
            this.particles[i].applyForce(gravity);
            this.particles[i].update();

            if (this.particles[i].done()) {
                this.particles.splice(i, 1);
            }
        }
    }

    this.explode = function () {
        for (var i = 0; i < 100; i++) {
            var p = new Particle2(this.firework.pos.x, this.firework.pos.y, this.hu, false);
            this.particles.push(p);
        }
    }

    this.show = function (pg) {
        if (!this.exploded) {
            this.firework.show(pg);
        }

        for (var i = 0; i < this.particles.length; i++) {
            this.particles[i].show(pg);
        }
    }
}






// Classe de l'animation des des petits points qui explosent
 // A simple Particle class
    var Particle = function (position) {
        var vx = random(-2, 2);
        var vy = random(-2, 2);
        var ax = vx * 0.01;
        var ay = vy * 0.01;
        this.acceleration = createVector(ax, ay);
        this.velocity = createVector(vx, vy);
        this.position = position.copy();
        this.lifespan = 255;
    };

    Particle.prototype.run = function () {
        this.update();
        this.display();
    };

    // Method to update position
    Particle.prototype.update = function () {
        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);
        this.lifespan -= 2;
    };

    // Method to display
    Particle.prototype.display = function () {
        colorMode(HSB);
        noStroke();
        // stroke(200, 255 - this.lifespan);
        // strokeWeight(2);
        fill(this.lifespan * 2, min(255 - this.lifespan, 500), max(2000 - this.lifespan, 0));
        ellipse(this.position.x, this.position.y, 12, 12);
        //triangle(this.position.x,
        //this.position.y,
        //this.position.x + this.velocity.x * 20,
        //this.position.y + this.velocity.y * 2,
        //this.position.x + this.velocity.x * 2,
        // this.position.y + this.velocity.y * 20,
        //  );
    };

    // Is the particle still useful?
    Particle.prototype.isDead = function () {
        return this.lifespan < 0;
    };

    var ParticleSystem = function (position) {
        this.origin = position.copy();
        this.particles = [];
    };

    ParticleSystem.prototype.addParticle = function () {
        this.particles.push(new Particle(this.origin));
    };

    ParticleSystem.prototype.run = function () {
        for (var i = this.particles.length - 1; i >= 0; i--) {
            var p = this.particles[i];
            p.run();
            if (p.isDead()) {
                this.particles.splice(i, 1);
            }
        }
    };



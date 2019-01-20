var sound1;
var sound1Amp;
var sound2;
var sound3;
var sound3FFT;
var sound4;
var sound4FFT;
var sound5;
var sound5FFT;
var sound6;
var sound6Amp;
var sound7;
var sound7Amp;
var sound8;
var scalar = 70;
var angle1 = 0;
var angle2 = 0;
var sound9;
var sound9FFT;
var sound10;
var sound10FFT;
var sound11;
var sound11Amp
var sound12;
var sound12FFT;
var sound13;
var sound14;
var xpos14 = []
var ypos14 = []
var xtarget14 = []
var ytarget14 = []
var sound15;
var sound16;
var sound17;
var a17 = 0.0;
var s17 = 0.0;
var calque;
var calque2;
var sound18;
var xpos18 = 0
var ypos18 = 0
var xdir18 = 5
var ydir18 = 5
var sound19;
var sound20;
var sound20FFT;
var sound21;
var sound22;
var sound23;
var sound24;
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
var sound25;
var totalPts = 300;
var steps = totalPts + 1;

var sound26;

function preload() {
    sound1 =  loadSound("Son/Complete_Mix_Chillout_Room.wav")
    sound2 =  loadSound("Son/EM_134_soft_percussion_loop.wav")
    sound3 =  loadSound("Son/AW_105_ChillOutSmack_2.wav")
    sound4 =  loadSound("Son/Bpm140_Zippy_06.wav")
    sound5 =  loadSound("Son/CLF_85_Drums_Golden.wav")
    sound6 =  loadSound("Son/FM_drum_loop_sauce_short_build_150.wav")
    sound7 =  loadSound("Son/GNEALZ_melodic_loop_pluck_love_145_Cmaj.wav")
    sound8 =  loadSound("Son/JPGC_drum_loop_stoner_110.wav")
    sound9 =  loadSound("Son/KSHMR_Indian_Drum_Loop_105BPM_07_-__B_.wav")
    sound10 = loadSound("Son/KSHMR_Indian_Drum_Loop_128BPM_03_-__E_.wav")
    sound11 = loadSound("Son/MM_nice_chords_m8.wav")
    sound12 = loadSound("Son/OE_Percloop_124_06.wav")
    sound13 = loadSound("Son/RP5_109_Night_Beat_Kick_Conga.wav")
    sound14 = loadSound("Son/SGH_Drum_Loop_06_123_bpm.wav")
    sound15 = loadSound("Son/16_RA_KIT_05_PAD_119_Dm.wav")
    sound16 = loadSound("Son/420_Melodic_Loop_100_BongsInTheClub_02_Cm.wav")
    sound17 = loadSound("Son/SS_98_carry_on_drum_loop_no_kick.wav")
    sound18 = loadSound("Son/SS_120_Fm_guitar_loop_2.wav")
    sound19 = loadSound("Son/9274.mp3")
    sound20 = loadSound("Son/14_RA_KIT_06_CHORD_120_Gm.wav")
    sound21 = loadSound("Son/TDDC_Beat_04_10Inch_90.wav")
    sound22 = loadSound("Son/SGH_Bass_Loop_29_C_123_bpm.wav")
    sound23 = loadSound("Son/MdL_84_percussion_loop_traveler.wav")
    sound24 = loadSound("Son/Bpm90_RadioHit.wav")
    sound25 = loadSound("Son/120_Drum_Loop_1.wav")
    sound26 = loadSound("Son/OS_FA_125_Amin_Noisy_Piano.wav")
}

function setup() {
    // put setup code here
    createCanvas(windowWidth, windowHeight);
    background(0);
    pixelDensity(1);

    calque = createGraphics(windowWidth, windowHeight)
    calque.pixelDensity(1)

    sound1Amp = new p5.Amplitude();
    sound1Amp.setInput(sound1);

    sound3FFT = new p5.FFT(0.8, 16);
    sound3FFT.setInput(sound3);

    sound4FFT = new p5.FFT(0.8, 1024);
    sound4FFT.setInput(sound4);

    sound5FFT = new p5.FFT(0.8, 16);
    sound5FFT.setInput(sound5);

    sound6Amp = new p5.Amplitude()
    sound6Amp.setInput(sound6)

    sound7Amp = new p5.Amplitude()
    sound7Amp.setInput(sound7)


    sound9FFT = new p5.FFT();
    sound9FFT.setInput(sound9);

    sound10FFT = new p5.FFT();
    sound10FFT.setInput(sound10);

    sound11Amp = new p5.Amplitude()
    sound11Amp.setInput(sound11)

    sound12FFT = new p5.FFT();
    sound12FFT.setInput(sound12);

    for (var i = 0; i < 50; i++) {
        // ajouter des éléments au dessus de notre canvas
        xpos14.push(random(0, width))
        ypos14.push(random(0, -height))
        // ajouter des éléments à l'intérieur de notra canvas
        xtarget14.push(random(width))
        ytarget14.push(random(height))
    }

    sound20FFT = new p5.FFT();
    sound20FFT.setInput(sound20);


}

function draw() {
    playSound(sound1, 65);
    background(0)
    if (sound1.isPlaying() == true) {
        push();
        var amp = sound1Amp.getLevel();
        var rad = map(amp, 0, 1, 210, 255)
        //var rad = map(sound1.currentTime(), 0, sound1.duration(), 50, width);
        fill(150, 0, 24)
        ellipse(width * 0.5, height * 0.5, rad, rad)
        pop();
    }

    playSound(sound2, 90)
    //background (0)
    if (sound2.isPlaying() == true) {
        push()
        translate(width * 0.5, height * 0.5)
        var ang = map(sound2.currentTime(), 0, sound2.duration(), 0, PI)
        rectMode(CENTER)
        rotate(ang)
        stroke(75, 0, 130)
        fill(0,0,0,0)
        strokeWeight(5)
        rect(0, 0, width * 0.25, height * 0.1)
        pop()
    }

    playSound(sound3, 69)
    if (sound3.isPlaying() == true) {
        push()
        sound3FFT.analyze();
        rectMode(CENTER)
        var nrj1 = sound3FFT.getEnergy("bass")

        push()
        fill(23, 101, 125, nrj1)
        translate(width * 0.25, height * 0.5)
        rotate(PI / 4)
        rect(0, 0, width * 0.2, height * 0.2)
        pop()

        push()
        fill(23, 101, 125, 50)
        translate(width * 0.5, height * 0.5)
        rotate(PI / 4)
        rect(0, 0, nrj1, nrj1)
        pop()

        push()
        fill(23, 101, 125, nrj1)
        translate(width * 0.75, height * 0.5)
        rotate(PI / 4)
        rect(0, 0, width * 0.2, height * 0.2)
        pop()

        pop()
    }

    playSound(sound4, 82)
    if (sound4.isPlaying() == true) {
        push();
        var waveform = sound4FFT.waveform();
        noFill();
        beginShape();
        stroke(109, 7, 26)
        strokeWeight(5)
        for (var i = 0; i < waveform.length; i++) {
            var x = map(i, 0, waveform.length, 0, width);
            var y = map(waveform[i], -1, 1, 0, height);
            curveVertex(x, y);
        }
        endShape();
        pop();

    }

    playSound(sound5, 84)
    if (sound5.isPlaying() == true) {
        push()
        sound5FFT.analyze();
        rectMode(CENTER)
        var nrj5 = sound5FFT.getEnergy("bass")
        var long5 = (map(sound5.currentTime(), 0, sound5.duration(), 0, width))
        rectMode(CENTER)

        push()
        fill(55, 20, 250)
        rect(width * 0.20, 100, nrj5, long5, 2);
        noStroke();
        pop()

        push()
        fill(55, 20, 250)
        rect(width * 0.80, 800, nrj5, long5, 2);
        noStroke();
        pop()

        pop()
    }

    playSound(sound6, 89);
    if (sound6.isPlaying() == true) {
        push();
        var amp6 = sound6Amp.getLevel();
        var rad6 = map(amp6, 0, 1, 0, 255)
        //var rad = map(sound1.currentTime(), 0, sound1.duration(), 50, width);
        fill(222, 49, 99, 90)
        ellipse(width * 0.5, height * 0.5, rad6, rad6)
        pop();
    }

    playSound(sound7, 85)
    //background (0)
    if (sound7.isPlaying() == true) {
        push()
        var amp7 = sound7Amp.getLevel();
        var rad7 = map(amp7, 0, 1, 120, height * 0.5)
        translate(width * 0.5, height * 0.5)
        var ang7 = map(sound7.currentTime(), 0, sound7.duration(), 0, PI)
        rectMode(CENTER)
        var xpos = width * 0.40 * cos(ang7)
        var ypos = height * 0.4 * sin(ang7)
        translate(xpos, ypos)
        rotate(ang7)
        stroke(255)
        fill(0,0,0,0)
        strokeWeight(5)
        rect(0, 0, rad7, rad7)
        pop()
    }

    playSound(sound8, 73)
    if (sound8.isPlaying() == true) {
        push()
        var ang1 = radians(angle1);
        var ang2 = radians(angle2);

        var x1 = width / 2 + (scalar * cos(ang1));
        var x2 = width / 2 + (scalar * cos(ang2));

        var y1 = height / 2 + (scalar * sin(ang1));
        var y2 = height / 2 + (scalar * sin(ang2));


        fill(109, 7, 26);
        ellipse(x1, height * 0.5 - 120, scalar, scalar);
        ellipse(x2, height * 0.5 + 120, scalar, scalar);

        fill(255);
        ellipse(width * 0.5 - 120, y1, scalar, scalar);
        ellipse(width * 0.5 + 120, y2, scalar, scalar);

        angle1 += 2;
        angle2 += 3;

        pop();
    }

    playSound(sound9, 79)
    if (sound9.isPlaying() == true) {
        push()
        sound9FFT.analyze();
        rectMode(CENTER)
        var nrj3 = sound9FFT.getEnergy("bass")
        push()
        fill(23, 101, 125)
        translate(width * 0.5, height * 0.5)
        rotate(PI / 6)
        rect(0, 0, nrj3, nrj3)
        pop()
        pop()

    }

    playSound(sound10, 80)
    if (sound10.isPlaying() == true) {
        push()
        sound10FFT.analyze();
        rectMode(CENTER)
        var nrj4 = sound10FFT.getEnergy("bass")
        push()
        stroke(75, 0, 130, nrj4)
        fill(0,0,0,0)
        strokeWeight(5)
        translate(width * 0.35, height * 0.5)
        rotate(PI / 2)
        ellipse(10, 10, width * 0.2, height * 0.2)
        pop()

        push()
        stroke(75, 0, 130, nrj4)
        fill(0,0,0,0)
        strokeWeight(5)
        translate(width * 0.65, height * 0.5)
        rotate(PI / 2)
        ellipse(10, 10, width * 0.2, height * 0.2)
        pop()

        push()
        stroke(75, 0, 130)
        fill(0,0,0,0)
        strokeWeight(5)
        translate(width * 0.5, height * 0.5)
        rotate(PI / 4)
        ellipse(10, 10, nrj4, nrj4)
        pop()

        pop()
    }

    playSound(sound11, 81);
    if (sound11.isPlaying() == true) {
        push();
        var amp11 = sound11Amp.getLevel();
        var rad11 = map(amp11, 0, 1, 210, 255)
        fill(222, 49, 99, 127);
        translate(width * 0.5, height * 0.5);
        noStroke();
        for (var i = 0; i < 10; i++) {
            ellipse(0, 30, rad11, 80);
            rotate(PI / 5);
        }
        pop()
    }


    playSound(sound12, 83)
    if (sound12.isPlaying() == true) {
        push()
        sound12FFT.analyze();
        rectMode(CENTER)
        var nrj5 = sound12FFT.getEnergy("bass")
        push()
        translate(width * 0.5, height * 0.5)
        var ang = map(sound12.currentTime(), 0, sound12.duration(), 0, -PI)
        rectMode(CENTER)
        rotate(ang)
        fill(255, 98)
        rect(nrj5, nrj5, width * 0.25, height * 0.25)
        pop()
        pop()
    }

    playSound(sound13, 68)
    if (sound13.isPlaying() == true) {
        push()
        var nsegment = 96
        var ncurrentsegment = (map(sound13.currentTime(), 0, sound13.duration(), 0, nsegment + 1))
        for (var i = 0; i < ncurrentsegment; i++) {
            stroke(109, 7, 26);
            strokeWeight(4)
            var angle = map(i, 0, nsegment, 0, TWO_PI);
            var x = width * 0.5 + height * 0.45 * cos(angle);
            var y = height * 0.5 + height * 0.45 * sin(angle);
            line(width * 0.5, height * 0.5, x, y);

        }
        pop()
    }

    playSound(sound14, 70)
    if (sound14.isPlaying() == true) {
        push()
        var t = map(sound14.currentTime(), 0, sound14.duration() * 0.75, 0, 1)
        var grey = map(sound14.currentTime(), sound14.duration() * 0.75, sound14.duration(), 255, 180)
        t = constrain(t, 0, 1)
        grey = constrain(grey, 180, 255)
        fill(grey)
        for (var i = 0; i < 50; i++) {
            var x = lerp(xpos14[i], xtarget14[i], t)
            var y = lerp(ypos14[i], ytarget14[i], t)
            ellipse(x, y, 50, 50)
        }
        pop()
    }

    playSound(sound15, 71)
    if (sound15.isPlaying() == true) {
        push()
        calque.stroke(255, 255, 255, 75);
        randomChord15();
        randomChord15();
        image(calque, 0, 0, width, height)
        pop()
    }

    playSound(sound16, 72)
    if (sound16.isPlaying() == true) {
        push()
        from = color(255, 0, 0, 0.2 * 255);
        to = color(0, 0, 255, 0.2 * 255);
        c1 = lerpColor(from, to, .33);
        c2 = lerpColor(from, to, .66);
        for (var i = 0; i < 15; i++) {
            fill(from);
            quad(random(0, width * 0.25), random(height),
                random(0, width * 0.25), random(height),
                random(0, width * 0.25), random(height),
                random(0, width * 0.25), random(height));
            fill(c1);
            quad(random(width * 0.25, width * 0.5), random(height),
                random(width * 0.25, width * 0.5), random(height),
                random(width * 0.25, width * 0.5), random(height),
                random(width * 0.25, width * 0.5), random(height));
            fill(c2);
            quad(random(width * 0.5, width * 0.75), random(height),
                random(width * 0.5, width * 0.75), random(height),
                random(width * 0.5, width * 0.75), random(height),
                random(width * 0.5, width * 0.75), random(height));
            fill(to);
            quad(random(width * 0.75, width), random(height),
                random(width * 0.75, width), random(height),
                random(width * 0.75, width), random(height),
                random(width * 0.75, width), random(height));
            pop()
        }
        frameRate(40);

    }

    playSound(sound17, 74)
    if (sound17.isPlaying() == true) {
        push()
        noStroke();
        a17 = a17 + 0.04;
        s17 = cos(a17) * 2;

        translate(width / 2, height / 2);
        scale(s17);
        stroke(55, 20, 250);
        fill(0,0,0,0)
        strokeWeight(2)
        rect(0, 0, 50, 50);

        translate(75, 0);
        stroke(255);
        fill(0,0,0,0)
        strokeWeight(2)
        scale(s17);
        rect(0, 0, 50, 50);
        pop()
    }

    playSound(sound18, 75)
    if (sound18.isPlaying() == true) {
        xpos18 += xdir18
        ypos18 += ydir18
        // si une de nos coordonnées s'apprête à sortir de la fenêtre on inverse sa direction
        if (xpos18 > width || xpos18 < 0) {
            xdir18 *= -1
        }
        if (ypos18 > height || ypos18 < 0) {
            ydir18 *= -1
        }
        // on dessine dans notre calque
        calque2.noStroke()
        calque2.fill(255)
        calque2.ellipse(xpos18, ypos18, 20, 20)

        // on affiche notre calque à l'aide de la fonction 'image' de p5js
        image(calque2, 0, 0, width, height)

    } else {
        // on reset notre animation  :
        // en réinitialisant le calque
        calque2 = createGraphics(windowWidth, windowHeight)
        calque2.pixelDensity(1)
        // et en réinitialisant les positions
        xpos18 = random(width)
        ypos18 = random(height)
        xdir18 = random(1, 7)
        ydir18 = random(1, 7)
    }

    playSound(sound19, 76)
    if (sound19.isPlaying() == true) {
        push()
        var nsegment19 = 1000
        var ncurrentsegment19 = (map(sound19.currentTime(), 0, sound19.duration(), 0, nsegment19 + 1))
        for (var i = 0; i < ncurrentsegment19; i++) {
            stroke(23, 101, 125);
            strokeWeight(2)
            var angle19 = map(i, 0, nsegment19, 0, TWO_PI);
            var x19 = width * 0.5 + height * 180 * cos(angle19);
            var y19 = height * 1 + height * 0.45 * sin(angle19);
            line(width * 0.5, height * 0.5, x19, y19);

        }
        pop()
    }

    playSound(sound20, 77)
    if (sound20.isPlaying() == true) {
        push()
        sound20FFT.analyze();
        rectMode(CENTER)
        var nrj20 = sound20FFT.getEnergy("bass")
        var long20 = (map(sound20.currentTime(), 0, sound20.duration(), 0, width))
        rectMode(CENTER)
        push()
        fill(198, 8, 0, 90)
        rect(width * 0.20, 800, nrj20, long20, 5);
        noStroke();
        pop()

        push()
        fill(198, 8, 0, 90)
        rect(width * 0.5, 100, nrj20, long20, 5);
        noStroke();
        pop()

        push()
        fill(198, 8, 0, 90)
        rect(width * 0.80, 800, nrj20, long20, 5);
        noStroke();
        pop()
        pop()
    }


    playSound(sound21, 87)
    if (keyIsDown(87)) {
        anim1 = {
            w: 0
        }
        var animation1 = anime({
            targets: anim1,
            w: height * 0.4,
            easing: [.91, -0.54, .29, 1.56],
            direction: 'alternate',
            loop: true,
            duration: 1000
        });
    }

    if (sound21.isPlaying() == true) {
        push()
        noFill()
        fill(255)
        ellipse(width * 0.5, height * 0.5, anim1.w, anim1.w)
        pop()
    }

    if (sound22.isPlaying() == true) {


        push()
        noStroke()
        fill(109, 7, 26)
        ellipse(anim2.x1, anim2.y1, 50, 50)
        fill(55, 20, 250)
        ellipse(anim2.x2, anim2.y2, 50, 50)
        fill(75, 0, 130)
        ellipse(anim2.x3, anim2.y3, 50, 50)
        pop()
    }

    playSound(sound22, 88)
    if (keyIsDown(88)) {
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

    if (keyIsDown(67)) {

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

    playSound(sound23, 67)
    if (sound23.isPlaying() == true) {
        push()
        noStroke()
        rectMode(CENTER)
        fill(109, 7, 26)
        translate(anim3.x, height * 0.5)
        rotate(anim3.rot)
        rect(0, 0, 80, 160)
        pop()
    }

    if (keyIsDown(86)) {

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

    playSound(sound24, 86)
    if (sound24.isPlaying() == true) {
        push()
        noStroke()
        rectMode(CENTER)
        fill(75, 0, 130)
        rect(width * 0.5, anim4.y, 50, anim4.h)
        pop()
    }

    playSound(sound25, 66)
    if (sound25.isPlaying() == true) {
        push()
        var rand = 0;
        stroke(222, 49, 99)
        strokeWeight(10);
        for (var i = 1; i < steps; i++) {
            point((width / steps) * i, (height / 2) + random(-rand, rand));
            rand += random(-5, 5);
        }
        pop()
    }

    playSound(sound26, 78)
    if (sound26.isPlaying() == true) {
        push()
        var long = map(sound26.currentTime(), 0, sound26.duration(), 250, width)
        rectMode(CENTER)
        stroke(55, 20, 250)
        fill(0,0,0,0)
        strokeWeight(5)
        rect(width / 2, height / 2, long, 20);
        noStroke();
        pop();
    }
}


function playSound(sound, keyId) {
    if (keyIsDown(keyId) == true) {
        if (sound.isPlaying() == false) {
            sound.play()
        }
    }
}

function randomChord15() {
    var angle1 = random(0, 2 * PI);
    var xpos1 = width * 0.5 + height * 0.4 * cos(angle1);
    var ypos1 = height * 0.5 + height * 0.4 * sin(angle1);

    // find another random point on the circle
    var angle2 = random(0, 2 * PI);
    var xpos2 = width * 0.5 + height * 0.4 * cos(angle2);
    var ypos2 = height * 0.5 + height * 0.4 * sin(angle2);

    // draw a line between them
    calque.line(xpos1, ypos1, xpos2, ypos2);
}


function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    background(0);
}

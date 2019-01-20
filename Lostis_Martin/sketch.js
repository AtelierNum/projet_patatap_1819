var drone2;
var drone2FFT;
var drone1;
var drone1FFT;
var snare;
var snareAmp;
var sound2;
var sound2FFT;
var rain3
var rain3FFT
var length;
var sound4;
var sound4FFT;
var sound5;
var sound5FFT;
var rim;
var kick;
var cymbal;
var cymbalFFT;
var think1;
var think2;
var think3;
var think4;
var thinkbreak;
var thinkvocal;
var italic;
var caustic1;
var caustic2;
var caustic3;
var caustic3FFT;
var caustic4;
var caustic5;
var caustic5FFT;
var reunion;
var reunionFFT;
var lush;
var lush2;
var lush2FFT;
var final;
var finalFFT;

var pg;
var xpos = 0
var ypos = 0
var xdir = 5
var ydir = 5

x = Xcentre + rayon * cos(angle)
y = Ycentre + rayon * sin(angle)



function preload() {

    drone2 = loadSound("assets/ambient-pad.wav")
    sound2 = loadSound("assets/rain2.wav")
    snare = loadSound("assets/snare.wav")
    rain3 = loadSound("assets/rain3.wav")
    sound4 = loadSound("assets/ufo2.wav")
    drone1 = loadSound("assets/ufo1.wav")
    sound5 = loadSound("assets/bassfond.wav")
    rim = loadSound("assets/rim707.wav")
    kick = loadSound("assets/kick707.wav")
    cymbal = loadSound("assets/cymbal.wav")
    think1 = loadSound("assets/think1.wav")
    think2 = loadSound("assets/think2.wav")
    think3 = loadSound("assets/think3.wav")
    think4 = loadSound("assets/think4.wav")
    thinkbreak = loadSound("assets/thinkbreak.wav")
    thinkvocal = loadSound("assets/thinkvocal.wav")
    italic = loadSound("assets/italic.wav")
    caustic1 = loadSound("assets/caustic1.wav")
    caustic2 = loadSound("assets/caustic2.wav")
    caustic3 = loadSound("assets/caustic3.wav")
    caustic4 = loadSound("assets/caustic4.wav")
    caustic5 = loadSound("assets/caustic5.wav")
    reunion = loadSound("assets/reunion.wav")
    lush = loadSound("assets/lush.wav")
    lush2 = loadSound("assets/lush2.wav")
    final = loadSound("assets/final.wav")
}

function setup() {

    createCanvas(windowWidth, windowHeight);
    background(0);

    createCanvas(windowWidth, windowHeight);
    background(0);

    drone2FFT = new p5.FFT(0.1, 4096);
    drone2FFT.setInput(drone2);

    drone1FFT = new p5.FFT(0.1, 4096);
    drone1FFT.setInput(drone1);

    rain3FFT = new p5.FFT(0.8, 16);
    rain3FFT.setInput(rain3);

    sound2FFT = new p5.FFT(0.8, 16);
    sound2FFT.setInput(sound2);

    sound4FFT = new p5.FFT(0.8, 16);
    sound4FFT.setInput(sound4);

    sound5FFT = new p5.FFT(0.8, 16);
    sound5FFT.setInput(sound5);

    cymbalFFT = new p5.FFT(0.8, 16);
    cymbalFFT.setInput(cymbal);

    snareAmp = new p5.Amplitude();
    snareAmp.setInput(snare);

    reverb = new p5.Reverb();
    reverb.process(snare, 3, 2);

    reverb = new p5.Reverb();
    reverb.process(sound4, 3, 2);

    reverb = new p5.Reverb();
    reverb.process(cymbal, 10, 3);

    reverb = new p5.Reverb();
    reverb.process(thinkvocal, 10, 3);

    pg = createGraphics(windowWidth, windowHeight)
    pg.pixelDensity(1)

    caustic3FFT = new p5.FFT(0.8, 16);
    caustic3FFT.setInput(caustic3);

    caustic5FFT = new p5.FFT(0.8, 16);
    caustic5FFT.setInput(caustic5);

    lush2FFT = new p5.FFT(0.8, 16);
    lush2FFT.setInput(lush2);

    reunionFFT = new p5.FFT(0.8, 16);
    reunionFFT.setInput(reunion);

    finalFFT = new p5.FFT();
    finalFFT.setInput(final);

}

function draw() {

    background(248, 248, 247);
    noStroke();

    playSound(drone2, 65)
    playSound(sound2, 90)
    playSound(rain3, 69)
    playSound(snare, 82)
    playSound(sound4, 84)
    playSound(drone1, 89)
    playSound(sound5, 85)
    playSound(rim, 73)
    playSound(kick, 79)
    playSound(cymbal, 80)
    playSound(think1, 81)
    playSound(think2, 83)
    playSound(think3, 68)
    playSound(think4, 70)
    playSound(thinkbreak, 71)
    playSound(thinkvocal, 72)
    playSound(italic, 74)
    playSound(caustic1, 75)
    playSound(caustic4, 76)
    playSound(caustic3, 77)
    playSound(caustic5, 87)
    playSound(caustic2, 88)
    playSound(lush, 67)
    playSound(lush2, 86)
    playSound(reunion, 66)
    playSound(final, 78)

    if (final.isPlaying() == true) {
        push()
        finalFFT.analyze();
        var nrj1 = finalFFT.getEnergy("mid")
        var length = map(final.currentTime(), 0, final.duration(), 0, width * 0.6)
        push()
        rectMode(CENTER);
        fill(0, nrj1)
        rect(width / 2, height / 2, width-(nrj1/2), height-(nrj1/2))
        pop()
        pop()
    }

    if (snare.isPlaying() == true) {
        push()
        var amp = snareAmp.getLevel()
        var whiteLevel = map(amp, 0, 1, 210, 255)
        noStroke()
        fill(whiteLevel)
        rect(0, 0, width, height)
        pop();
    }

    if (rim.isPlaying() == true) {
        push()
        noStroke()
        fill(0, 209, 119, 100)
        rect(0, 0, width, height / 2)
        pop();
    }

    if (kick.isPlaying() == true) {
        push()
        noStroke()
        fill(0, 57, 79)
        rect(0, windowHeight / 2, width, height / 2)
        pop();
    }


    if (rain3.isPlaying() == true) {
        push()
        rain3FFT.analyze();
        var nrj1 = rain3FFT.getEnergy("mid")
        var length = map(rain3.currentTime(), 0, rain3.duration(), 0, width * 0.6)
        push()
        rectMode(CENTER);
        fill(0, 95, 110, nrj1)
        rect(width / 2, height / 2, nrj1 * 3 + length, nrj1)
        pop()
        pop()
    }

    if (drone2.isPlaying() == true) {
        push()
        var waveform = drone2FFT.waveform();
        noFill();
        beginShape();
        stroke(85, 212, 127);
        strokeWeight(2);
        for (var i = 0; i < waveform.length; i++) {
            var x = map(i, 0, waveform.length, 0, width);
            var y = map(waveform[i], -1, 1, 0, height);
            curveVertex(x, y);
        }
        endShape();
        pop()

    }

    if (drone1.isPlaying() == true) {
        push()
        var waveform = drone1FFT.waveform();
        noFill();
        beginShape();
        stroke(27, 82, 78);
        strokeWeight(1);
        for (var i = 0; i < waveform.length; i++) {
            var x = map(waveform[i], -1, 1, 0, width);
            var y = map(i, 0, waveform.length, 0, height);
            curveVertex(x, y);
        }
        endShape();
        pop()

    }


    if (sound2.isPlaying() == true) {
        push();
        translate(width * 0.5, height * 0.5)
        sound2FFT.analyze()
        var nrj2 = sound2FFT.getEnergy("mid")
        var angle = map(sound2.currentTime(), 0, sound2.duration(), 0, PI)
        var size = map(nrj2 * 0.4, 0, 255, 50, width * 0.5)
        rotate(angle)
        rectMode(CENTER)
        fill(0, 174, 136, 200)
        noStroke()
        rect(0, 0, size, size)
        pop();

    }


    if (sound4.isPlaying() == true) {
        push()
        sound4FFT.analyze();
        var nrj1 = sound4FFT.getEnergy("treble")
        push()
        fill(0, 139, 138)
        for (var i = 0; i < 50; i++) {
            var xpos = (i % 10) * width * 0.10 + width * 0.05
            var ypos = int(i / 10) * height * 0.2 + height * 0.1
            ellipse(xpos, ypos, nrj1 * 0.2, nrj1 * 0.2)
        }
        pop()
        pop()
    }


    if (sound5.isPlaying() == true) {
        sound5FFT.analyze();
        var nrj1 = sound5FFT.getEnergy("mid")
        push()
        fill(0, 95, 110)
        var theta = map(sound5.currentTime(), 0, sound5.duration(), 0, PI);
        var ypos1 = height - sin(theta) * height * 0.5;
        ellipse(width / 3, ypos1, nrj1, nrj1);

        fill(0, 95, 110)
        var theta = map(sound5.currentTime(), 0, sound5.duration(), 0, PI);
        var ypos1 = height - sin(theta) * height * 0.5;
        ellipse(width * (2 / 3), ypos1, nrj1, nrj1);
        pop()
        pop()
    }

    if (cymbal.isPlaying() == true) {
        cymbalFFT.analyze();
        var nrj1 = cymbalFFT.getEnergy("mid")
        push()
        fill(0, 181, 134)
        var theta = map(cymbal.currentTime(), 0, cymbal.duration(), 0, PI);
        var ypos1 = height - sin(theta) * width * 0.5;
        ellipse(width / 2, ypos1, nrj1, nrj1);
        pop()
    }


    if (think1.isPlaying() == true) {
        push()
        var length = map(think1.currentTime(), 0, think1.duration(), 30, width)
        push()
        rectMode(CENTER);
        fill(255, 0, 0)
        rect(0, height / 4, length, 20)
        pop()
    }

    if (think2.isPlaying() == true) {
        push()
        var length = map(think2.currentTime(), 0, think2.duration(), 30, width)
        push()
        rectMode(CENTER);
        fill(255, 5, 0)
        rect(width * (3 / 4), height, 20, length)
        pop()
    }

    if (think3.isPlaying() == true) {
        push()
        var length = map(think3.currentTime(), 0, think3.duration(), 30, width)
        push()
        rectMode(CENTER);
        fill(255, 14, 0)
        rect(width, height * (3 / 4), length, 20)
        pop()
    }

    if (think4.isPlaying() == true) {
        push()
        var length = map(think4.currentTime(), 0, think4.duration(), 30, width)
        push()
        rectMode(CENTER);
        fill(255, 29, 0)
        rect(width / 4, 0, 20, length)
        pop()
    }

    if (thinkbreak.isPlaying() == true) {
        push()
        var radius = map(thinkbreak.currentTime(), 0, thinkbreak.duration(), 50, width * 0.7)
        fill(255, 52, 0)
        ellipse(width / 5, 0, radius * 0.7, radius * 0.7)
        pop()
    }

    if (thinkvocal.isPlaying() == true) {
        push()
        var radius = map(thinkvocal.currentTime(), 0, thinkvocal.duration(), 50, width * 0.7)
        fill(255, 83, 0)
        ellipse(width * (4 / 5), height, radius * 0.7, radius * 0.7)
        pop()
    }

    if (italic.isPlaying() == true) {
        var duration = map(italic.currentTime(), 0, italic.duration(), 0, 250)
        drawTarget(width * 0.75, height * 0.25, duration * 1.5, 5)
    }

    if (caustic1.isPlaying() == true) {
        var duration = map(caustic1.currentTime(), 0, caustic1.duration(), 0, 250)
        drawTarget(width * 0.25, height * 0.75, duration * 1.5, 5)
    }

    if (caustic4.isPlaying() == true) {

        xpos2 += xdir
        ypos2 += ydir

        if (xpos2 > width || xpos2 < 0) {
            xdir *= -1
        }
        if (ypos2 > height || ypos2 < 0) {
            ydir *= -1
        }

        pg.noStroke()
        pg.fill(255, 119, 0)
        pg.ellipse(xpos2, ypos2, 15, 15)

        image(pg, 0, 0, width, height)

    } else {

        pg = createGraphics(windowWidth, windowHeight)
        pg.pixelDensity(1)

        xpos2 = random(width)
        ypos2 = random(height)
        xdir = random(80, 200)
        ydir = random(80, 200)
    }

    if (caustic3.isPlaying() == true) {

        caustic3FFT.analyze();
        var nrj1 = caustic3FFT.getEnergy("mid")

        push()
        rectMode(CENTER)
        fill(255, 153, 0)
        var theta = map(caustic3.currentTime(), 0, caustic3.duration(), 0, PI);
        var ypos1 = width - sin(theta) * width * 0.5;
        rect(ypos1, height / 2, nrj1 / 6, nrj1 * 3);
        pop()
    }

    if (caustic5.isPlaying() == true) {

        caustic5FFT.analyze();
        var nrj1 = caustic5FFT.getEnergy("mid")

        push()
        rectMode(CENTER)
        fill(0, 139, 107)
        var theta = map(caustic5.currentTime(), 0, caustic5.duration(), 0, PI);
        var ypos1 = height - sin(theta) * width * 0.5;
        rect(ypos1, height / 2, nrj1 / 6, nrj1 * 3);
        pop()
    }

    if (caustic2.isPlaying() == true) {
        push()
        var rotation = map(caustic2.currentTime(), 0, caustic2.duration(), 0, PI)

        rectMode(CENTER)

        translate(width * 0.5, height * 0.5)
        rotate(rotation)
        fill(35, 0, 58)
        rect(0, 0, width * 3, width * 0.001)

        translate(height * 0.5, width * 0.5)
        rotate(rotation)
        fill(35, 0, 58)
        rect(0, 0, width * 3, width * 0.001)

        pop()
    }

    if (lush.isPlaying() == true) {
        push()
        var nsegment = 120
        var ncurrentsegment = (map(lush.currentTime(), 0, lush.duration() * 3, 0, nsegment + 1))

        for (var i = 0; i < ncurrentsegment; i++) {
            stroke(0, 2, 85);
            strokeWeight(1)
            var angle = map(i, 0, nsegment, 0, TWO_PI);
            var x = width * 0.5 + height * 0.45 * cos(angle);
            var y = height * 0.5 + height * 0.45 * sin(angle);
            line(0, 0, x * 5, y * 5);
        }
        pop()
    }

    if (lush2.isPlaying() == true) {
        push()
        lush2FFT.analyze();
        var nrj1 = lush2FFT.getEnergy("treble")
        push()
        fill(38, 5, 35, nrj1)
        for (var i = 0; i < 3; i++) {
            var xpos = (i % 10) * width * 0.10 + width * 0.2
            var ypos = int(i / 10) * height * 0.2 + height * 0.7
            ellipse(xpos, ypos, nrj1 * 0.8, nrj1 * 0.8)
        }
        pop()
        pop()
    }

    if (reunion.isPlaying() == true) {
        push()
        reunionFFT.analyze();

        var nrj1 = reunionFFT.getEnergy("mid")
        var length = map(reunion.currentTime(), 0, reunion.duration(), 0, width * 0.6)
        push()
        rectMode(CENTER);
        fill(0, nrj1)
        rect(0, height / 2, nrj1, nrj1 * 2 + length)
        rect(width, height / 2, nrj1, nrj1 * 2 + length)
        pop()
        pop()
    }



}

function drawTarget(xloc, yloc, size, num) {
    var grayvalues = 255 / num;
    var steps = size / num;
    for (var i = 0; i < num; i++) {
        noStroke()
        fill(i * grayvalues)
        ellipse(xloc, yloc, size - i * steps, size - i * steps);
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

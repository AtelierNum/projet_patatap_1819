/*
ALICE BRIOLAT I2B NANTES ATLANTIQUE DESIGN

PATATAP-P5JS-AliceBRIOLAT
Description: Réalisation d'animation sur les 26 touches d'alphabet du clavier, qui varie selon le son. Animation visuel et sonore

05/01/2019
*/


/* DESCRIPTION DU CODE */
/* VARIABLES */

// Sounds
var sound1, sound2, sound3, sound4, sound5, sound6, sound7, sound8, sound9, sound10, sound11, sound12;
var sound13, sound14, sound15, sound16, sound17, sound18, sound19, sound20, sound21, sound22, sound23;
var sound24, sound25, sound26, sound3Amp, sound25Amp, soundFFT;

// points initiaux & vitesse & autres...
var rad = 60;
let angle = 0.0;
let jitter = 0.0;
var xpos= 0;
var ypos = 0;
var xdirection= 1;
var ydirection = 1;
var ypos2= 0;
var xpos2 = 0;
var xpos3= 0;
var ypos3 = 0;
var ypos4= 0;
var ypos5= 0;
var xpos4= 0;
var xpos5 = 0;

var xspeed = 10.8;
var yspeed = 8.2;
var speed2 = 0.03;

var phase, speed, maxCircleSize, numRows, numCols, numStrands, colorA, colorB;
var maxCircleSize2 = 20
var phase2 = 0;
var strokeSize = 0;


/* Fonction PRELOAD => initialisation des sounds */
function preload(){
  sound1 = loadSound('./assets/sounds/Photo.wav');
  sound2 = loadSound('./assets/sounds/agrafeuse.mp3');
  sound3 = loadSound('./assets/sounds/ZIP.mp3');
  sound4 = loadSound('./assets/sounds/VoitureKlaxon.mp3');
  sound5 = loadSound('./assets/sounds/Vent.mp3');
  sound6 = loadSound('./assets/sounds/Vasecasse.wav');
  sound7 = loadSound('./assets/sounds/Toquer.mp3');
  sound8 = loadSound('./assets/sounds/Spray.mp3');
  sound9 = loadSound('./assets/sounds/signature.mp3');
  sound10 = loadSound('./assets/sounds/sang et gore.mp3');
  sound11 = loadSound('./assets/sounds/pschit.mp3');
  sound12 = loadSound('./assets/sounds/notification pop-up.mp3');
  sound13 = loadSound('./assets/sounds/PP.mp3');
  sound14 = loadSound('./assets/sounds/couteau.mp3');
  sound15 = loadSound('./assets/sounds/Fusil.wav');
  sound16 = loadSound('./assets/sounds/Effondrement.wav');
  sound17 = loadSound('./assets/sounds/klaxontourdefrance.mp3');
  sound18 = loadSound('./assets/sounds/coups.mp3');
  sound19 = loadSound('./assets/sounds/casse.mp3');
  sound20 = loadSound('./assets/sounds/clic.mp3');
  sound21 = loadSound('./assets/sounds/Ciseaux.mp3');
  sound22 = loadSound('./assets/sounds/Camion.mp3');
  sound23 = loadSound('./assets/sounds/Bruitdebouche.wav');
  sound24 = loadSound('./assets/sounds/Cloche.mp3');
  sound25 = loadSound('./assets/sounds/Eau.mp3');
  sound26 = loadSound('./assets/sounds/Fanfare.mp3');
}

/* Fonction SETUP => initialisation de canvas */
function setup() {
  createCanvas(windowWidth, windowHeight);

  xpos3= windowWidth;
  ypos2s= windowHeight;

  ellipseMode(RADIUS);

  xpos = width / 2;
  ypos = height / 2;

  sound3Amp = new p5.Amplitude();
  sound3Amp.setInput(sound3);
  sound25Amp = new p5.Amplitude();
  sound25Amp.setInput(sound25);

  soundFFT = new p5.FFT(0.8, 16);
  soundFFT.setInput(sound4);
  soundFFT.setInput(sound5);
  soundFFT.setInput(sound6);
  soundFFT.setInput(sound7);
  soundFFT.setInput(sound8);
  soundFFT.setInput(sound9);
  soundFFT.setInput(sound10);
  soundFFT.setInput(sound11);
  soundFFT.setInput(sound12);
  soundFFT.setInput(sound13);
  soundFFT.setInput(sound14);
  soundFFT.setInput(sound15);
  soundFFT.setInput(sound16);
  soundFFT.setInput(sound17);
  soundFFT.setInput(sound18);
  soundFFT.setInput(sound19);
  soundFFT.setInput(sound20);
  soundFFT.setInput(sound21);
  soundFFT.setInput(sound22);;
  soundFFT.setInput(sound23)
  soundFFT.setInput(sound24);
  soundFFT.setInput(sound25);
  soundFFT.setInput(sound26);

  phase = 0;
  speed = 0.03;
  maxCircleSize = 20;
  numRows = 10;
  numCols = 16;
  numStrands = 2;

  colorA = color(253, 174, 120);
  colorB = color(226, 129, 161);
}

/* Fonction DRAW => Création des formes */
function draw() {
  createCanvas(windowWidth, windowHeight);
  background(128, 208, 208);

  // Key H
  playSound(sound16, 72)
  if (sound16.isPlaying() == true) {
    push();
      var radius = map(sound16.currentTime(), 0, sound16.duration(), 50, width)
      fill(121, 28, 248)
      noStroke();
      ellipse(width * 0.5, height * 0.5, radius, radius);
    pop();
  }


  // Key B
  playSound(sound25, 66);
  if(sound25.isPlaying() == true) {
    push();
      var lvl = sound25Amp.getLevel();
      var whitelvl = map(lvl, 0, 0.1, 0, 55);
      noStroke();
      fill(whitelvl);
      rectMode(CORNER);
      rect(0, 0, width, height);
    pop();
  }

  // Key E
  playSound(sound3, 69);
  if (sound3.isPlaying() == true) {
    push();
      var lvl = sound3Amp.getLevel();
      var whitelvl = map(lvl, 0, 0.01, 0, 255);
      noStroke();
      fill(whitelvl);
      rectMode(CORNER);
      rect(0, 0, width, height);
    pop();
  }


  // Key K
  playSound(sound18, 75);
  if (sound18.isPlaying() == true) {
    push();
      fill(109, 7, 26);
      translate(width*0.5, height*0.5);
      rotate(frameCount / 50.0);
      star(0, 0, 80, 100, 40);
    pop();
  }

  // Key A
  playSound(sound1, 65);
  if (sound1.isPlaying() == true) {
    push();
      var radius = map(sound1.currentTime(), 0, sound1.duration(), 50, width);
      fill(255, 220, 0);
      noStroke();
      ellipse(width * 0.5, height * 0.5, radius, radius);
    pop();
   }

  // Key Z
  playSound(sound2, 90);
  if (sound2.isPlaying() == true) {
    push();
      var angle = map(sound2.currentTime(), 0, sound2.duration(), 0, PI);
      translate(width * 0.5, height * 0.5);
      rotate(angle);
      rectMode(CENTER);
      noStroke();
      fill(255, 220, 220);
      rect(0, 0, width * 0.5, height * 0.1);
    pop();
  }

  // Key R
  playSound(sound4, 82);
  if (sound4.isPlaying() == true) {
    push();
      soundFFT.analyze();
      rectMode(CENTER);
      var nrj1 = soundFFT.getEnergy("bass");

      push();
        fill(0, 200, 255, nrj1);
        translate(width * 0.25, height * 0.5);
        rotate(PI / 4);
        rect(0, 0, width * 0.2, width * 0.2);
      pop();

      push();
        fill(0, 200, 255, 50);
        translate(width * 0.5, height * 0.5);
        rotate(PI / 4);
        rect(0, 0, nrj1, nrj1);
      pop();

      push();
        fill(0, 200, 255, nrj1);
        translate(width * 0.75, height * 0.5);
        rotate(PI / 4);
        rect(0, 0, width * 0.2, width * 0.2);
      pop();
    pop();
  }

  // Key T
  playSound(sound5, 84);
  if (sound5.isPlaying() == true) {
    push();
      soundFFT.analyze();
      rectMode(CENTER);
      var waveform = soundFFT.waveform();
      noFill();
      beginShape();
      stroke(150, 255, 225);
      strokeWeight(10);
      for (var i = 0; i < waveform.length; i++) {
        var x = map(i, 0, waveform.length, 0, width);
        var y = map(waveform[i], -1, 1, 0, height);
        curveVertex(x, y);
      }
      endShape();
    pop();
  }

  // Key Y
  playSound(sound6, 89);
  if (sound6.isPlaying() == true) {
    strokeSize = strokeSize+1;
    stroke(169, 17, 1);
    strokeWeight(strokeSize);
    noFill();
    ellipse(width * 0.5, height * 0.5, 125, 125);
  }
  else{
    strokeSize = 0;
  }

  // Key U
  playSound(sound7, 85)
  if (sound7.isPlaying() == true) {
    fill(251, 242, 183);
    noStroke();
    xpos = xpos + xspeed * xdirection;
    ypos = ypos + yspeed * ydirection;

    if (xpos > width - rad || xpos < rad) {
      xdirection *= -1;
    }
    if (ypos > height - rad || ypos < rad) {
      ydirection *= -1;
    }
    ellipse(xpos, ypos, rad, rad);
  }

  // Key I
  playSound(sound8, 73)
  if (sound8.isPlaying() == true) {
    push();
      translate(width*0.5, height*0.5);
      rotate(frameCount / 50.0);
      star(0, 0, 80, 100, 40);
      fill(223, 255, 0);
    pop();
  }

  // Key O
  playSound(sound9, 79)
  if (sound9.isPlaying() == true) {
    push();
      soundFFT.analyze();
      rectMode(CENTER);
      var waveform = soundFFT.waveform();
      noFill();
      beginShape();
      stroke(150, 255, 225);
      strokeWeight(10);
      for (var i = 0; i < waveform.length; i++) {
        var x = map(i, 0, waveform.length, 0, width);
        var y = map(waveform[i], -1, 1, 0, height);
        curveVertex(x, y);
      }
      endShape();
    pop();
  }

  // Key P
  playSound(sound10, 80)
  if (sound10.isPlaying() == true) {

    fill(255, 0, 0);
    stroke(0);
    ellipseMode(CENTER);
    ypos2 = ypos2 + 27;
    if(ypos2 > height){
      ypos2 = 0;
    }
    ellipse(100, ypos2, 75, 75);
    ellipse(200, ypos2,  75, 75);
    ellipse(300, ypos2,  75, 75);
    ellipse(400, ypos2,  75, 75);
    ellipse(500, ypos2,  75, 75);
    ellipse(600, ypos2, 75, 75);
    ellipse(700, ypos2,  75, 75);
    ellipse(800, ypos2,  75, 75);
    ellipse(900, ypos2,  75, 75);
    ellipse(1000, ypos2,  75, 75);
    fill(0);

    stroke(240, 227, 107);
    ellipseMode(CENTER);
    ypos3 = ypos3 - 27;
    if(ypos3 < 0){
      ypos3 = windowHeight;
    }
    ellipse(120, ypos3, 75, 75);
    ellipse(220, ypos3,  75, 75);
    ellipse(320, ypos3,  75, 75);
    ellipse(420, ypos3,  75, 75);
    ellipse(520, ypos3,  75, 75);
    ellipse(620, ypos3, 75, 75);
    ellipse(720, ypos3,  75, 75);
    ellipse(820, ypos3,  75, 75);
    ellipse(920, ypos3,  75, 75);
    ellipse(1020, ypos3,  75, 75);

    fill(240, 227, 107);
  }

  // Key Q
  playSound(sound11, 81)
  if (sound11.isPlaying() == true) {
    fill(255, 0, 0);
    stroke(0);
    ellipseMode(CENTER);
    ypos4 = ypos4 + 10;
    xpos4 = xpos4 + 10;
    if(ypos4 > width){
      ypos4 = 0;
    }
    if(xpos4 > height){
      xpos4 = 0;
    }
    ellipse(xpos4, ypos4, 75, 75);
    ellipse(xpos4+100, ypos4+100,  75, 75);
    ellipse(xpos4+200, ypos4+200,  75, 75);
    ellipse(xpos4+300, ypos4+300,  75, 75);

    fill(0);
    stroke(240, 227, 107);

    ellipseMode(CENTER);
    ypos5 = ypos5 - 10;
    xpos5 = xpos5 -10;
    if(ypos5 < 0){
      ypos5 = windowHeight;
    }
    if(xpos5 < 0){
      xpos5=windowHeight;
    }
    ellipse(xpos5, ypos5, 75, 75);
    ellipse(xpos5-50, ypos5-50, 75, 75);
    ellipse(xpos5-150, ypos5-150, 75, 75);
    ellipse(xpos5-250, ypos5-250, 75, 75);

    fill(240, 227, 107);
  }

  // Key S
  playSound(sound12, 83);
  if (sound12.isPlaying() == true) {
    push();
      soundFFT.analyze();
      rectMode(CENTER);
      var nrj1 = soundFFT.getEnergy("bass");
    pop();

    push();
      fill( 223, 109, 20);
      translate(width * 0.5, height * 0.5);
      rotate(PI / 4);
      rect(0, 0, nrj1, nrj1);
    pop();
  }

  // Key D
  playSound(sound13, 68);
  if (sound13.isPlaying() == true) {
    push();
      soundFFT.analyze();
      rectMode(CENTER);
      var waveform = soundFFT.waveform();
      noFill();
      beginShape();
      stroke(150, 255, 225);
      strokeWeight(10);
      for (var i = 0; i < waveform.length; i++) {
        var x = map(i, 0, waveform.length, 0, width);
        var y = map(waveform[i], -1, 1, 0, height);
        curveVertex(x, y);
      }
      endShape();
    pop();
  }

  // Key F
  playSound(sound14, 70);
  if (sound14.isPlaying() == true) {
    phase = frameCount * speed;
    push();
    for(var strand = 0; strand < numStrands; strand += 1) {
      var strandPhase = phase + map(strand, 0, numStrands, 0, TWO_PI);

      for(var col = 0; col < numCols; col += 1) {
        var colOffset = map(col, 0, numCols, 0, TWO_PI);
        var x = map(col, 0, numCols, 50, width - 50);

        for(var row = 0; row < numRows; row += 1) {
          var y = height/2 + row * 10 + sin(strandPhase + colOffset) * 50;
          var sizeOffset = (cos(strandPhase - (row / numRows) + colOffset) + 1) * 0.5;
          var circleSize = sizeOffset * maxCircleSize;

          fill(lerpColor(colorA, colorB, row / numRows));
          ellipse(x, y, circleSize, circleSize);
        }
      }
    }
    pop();
  }

  // Key G
  playSound(sound15, 71);
  if (sound15.isPlaying() == true) {
    fill(84, 249, 141);
    noStroke();
    var x = width/2;
    var y = height/2 + sin(phase2) * 50;
    phase2 = frameCount * speed2;
    var sizeOffset = (cos(phase2) + 8) * 0.5;
    var circleSize = sizeOffset * maxCircleSize2;
    ellipse(x, y, circleSize, circleSize);
  }



  // Key J
  playSound(sound17, 74);
  if (sound17.isPlaying() == true) {
    push();
      soundFFT.analyze();
      rectMode(CENTER);
      var waveform = soundFFT.waveform();
      noFill();
      beginShape();
      stroke(150, 255, 225);
      strokeWeight(10);
      for (var i = 0; i < waveform.length; i++) {
        var x = map(i, 0, waveform.length, 0, width);
        var y = map(waveform[i], -1, 1, 0, height);
        curveVertex(x, y);
      }
      endShape();
    pop();
  }


  // Key L
  playSound(sound19, 76);
  if (sound19.isPlaying() == true) {
    push();
      soundFFT.analyze();
      rectMode(CENTER);
      var nrj1 = soundFFT.getEnergy("bass");
    pop();

    push();
      fill(253, 63, 146);
      translate(width * 0.5, height * 0.5);
      rotate(PI / 4);
      rect(0, 0, nrj1, nrj1);
    pop();
  }

  // Key M
  playSound(sound20, 77);
  if (sound20.isPlaying() == true) {
    push();
      soundFFT.analyze();
      rectMode(CENTER);
      var waveform = soundFFT.waveform();
      noFill();
      beginShape();
      stroke(150, 255, 225);
      strokeWeight(10);
      for (var i = 0; i < waveform.length; i++) {
        var x = map(i, 0, waveform.length, 0, width);
        var y = map(waveform[i], -1, 1, 0, height);
        curveVertex(x, y);
      }
      endShape();
    pop();
  }

  // Key W
  playSound(sound21, 87);
  if (sound21.isPlaying() == true) {
    fill(255, 0, 0);
    stroke(0);
    ellipseMode(CENTER);
    xpos2 = xpos2 + 27;
    if(xpos2 > width){
      xpos2 = 0;
    }
    ellipse(xpos2, 100, 75, 75);
    ellipse(xpos2, 200, 75, 75);
    ellipse(xpos2, 300, 75, 75);
    ellipse(xpos2, 400, 75, 75);
    ellipse(xpos2, 500, 75, 75);
    ellipse(xpos2, 600, 75, 75);

    fill(0);
    stroke(240, 227, 107);


    ellipseMode(CENTER);
    xpos3 = xpos3 - 27;
    if(xpos3 < 0){
      xpos3 = windowWidth;
    }
    ellipse(xpos3, 120, 75, 75);
    ellipse(xpos3, 220, 75, 75);
    ellipse(xpos3, 320, 75, 75);
    ellipse(xpos3, 420, 75, 75);
    ellipse(xpos3, 520, 75, 75);
    fill(240, 227, 107);
  }

  // Key X
  playSound(sound22, 88);
  if (sound22.isPlaying() == true) {
    fill(173, 79, 9);
    noStroke();
    xpos = xpos + xspeed * xdirection;
    ypos = ypos + yspeed * ydirection;

    if (xpos > width - rad || xpos < rad) {
      xdirection *= -1;
    }
    if (ypos > height - rad || ypos < rad) {
      ydirection *= -1;
    }
    ellipse(xpos, ypos, rad, rad);
  }

  // Key C
  playSound(sound23, 67);
  if (sound23.isPlaying() == true) {
    push();
      var angle = map(sound23.currentTime(), 0, sound23.duration(), 0, PI);
      translate(width * 0.5, height * 0.5);
      rotate(angle);
      rectMode(CENTER);
      fill(255, 0, 0);
      rect(0, 0, width * 0.5, height * 0.1);
    pop();
  }

  // Key V
  playSound(sound24, 86);
  if (sound24.isPlaying() == true) {
    push();
      soundFFT.analyze();
      rectMode(CENTER);
      var nrj1 = soundFFT.getEnergy("bass");

      push();
        fill(128, 0, 128, nrj1);
        translate(width * 0.25, height * 0.5);
        rotate(PI / 4);
        rect(0, 0, width * 0.2, width * 0.2);
      pop();

      push();
        fill(128, 0, 128, 50);
        translate(width * 0.5, height * 0.5);
        rotate(PI / 4);
        rect(0, 0, nrj1, nrj1);
      pop();

      push();
        fill(128, 0, 128, nrj1);
        translate(width * 0.75, height * 0.5);
        rotate(PI / 4);
        rect(0, 0, width * 0.2, width * 0.2);
      pop();
    pop();
  }

  // Key N
  playSound(sound26, 78);
  if (sound26.isPlaying() == true) {
    push();
      soundFFT.analyze();
      rectMode(CENTER);
      var waveform = soundFFT.waveform();
      fill(150, 0, 20);
      beginShape();
      stroke(150, 255, 225);
      strokeWeight(10);
      for (var i = 0; i < waveform.length; i++) {
        var x = map(i, 0, waveform.length, 0, width);
        var y = map(waveform[i], -1, 1, 0, height);
        curveVertex(x, y);
      }
      endShape();
    pop();
  }
}

/* Fonction PLAYSOUND => Lorsqu'une touche est pressée */
function playSound(sound, keyId) {
  if (keyIsDown(keyId) == true) {
    if (sound.isPlaying() == false) {
      sound.play();
    }
  }
}

/* Fonction STAR => Création d'une étoile */
function star(x, y, radius1, radius2, npoints) {
  var angle = TWO_PI / npoints;
  var halfAngle = angle/2.0;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius2;
    var sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a+halfAngle) * radius1;
    sy = y + sin(a+halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

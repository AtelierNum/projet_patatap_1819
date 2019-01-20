//variables sons (lettre du son+ sound)
var asound;
var zsound;
var esound;
var esoundFFT;
var rsound;
var tsound;
var tsoundFFT;
var ysound;
var usound;
var isound;
var osound;
var psound;
var qsound;
var ssound;
var dsound;
var fsound;
var gsound;
var gsoundFFT;
var hsound;
var jsound;
var ksound;
var lsound;
var msound;
var wsound;
var xsound;
var csound;
var vsound;
var bsound;
var nsound;

//autres variables
var analyzer;
var spot = {
    x: 2,
    y: 2
}

var col = {
    r: 255,
    g: 0,
    b:0
}




//function preload = pour charger du son

function preload(){
    asound = loadSound("assets/good.m4a");
    zsound = loadSound("assets/alright.m4a");
    esound = loadSound("assets/begin.m4a");
    rsound = loadSound("assets/feelitcoming.m4a");
    tsound = loadSound("assets/music.m4a");
    ysound = loadSound("assets/spain.m4a");
    usound = loadSound("assets/snakehips.m4a");
    isound = loadSound("assets/calling.m4a");
    osound = loadSound("assets/plume.m4a")
    psound = loadSound("assets/ah.m4a");
    qsound = loadSound("assets/hey.m4a");
    ssound = loadSound("assets/alex.m4a");
    dsound = loadSound("assets/pulse.m4a");
    fsound = loadSound("assets/guitare.m4a");
    gsound = loadSound("assets/paradise.m4a");
    hsound = loadSound("assets/dinah.m4a");
    jsound = loadSound("assets/malhouf.m4a");
    ksound = loadSound("assets/noir.m4a")
    lsound = loadSound("assets/noir2.m4a")
    msound = loadSound("assets/gordon.m4a");
    wsound = loadSound("assets/singapour.m4a");
    xsound = loadSound("assets/anglais.m4a");
    csound = loadSound("assets/denis.m4a");
    vsound = loadSound("assets/jorja.m4a");
    bsound = loadSound("assets/janet2.m4a");
    nsound = loadSound("assets/fin.m4a");
}





//Fuction set up : pour créer un élément HTML qui couvre toute la page navigateur (canvas)
function setup() {
    createCanvas(windowWidth,windowHeight); //taille de la page web
    background(0); //couleur noir

    esoundFFT = new p5.FFT(0.8, 16) //objet d'analyse audio
    esoundFFT.setInput(esound)

    tsoundFFT = new p5.FFT(0.8,16)
    tsoundFFT.setInput(tsound)

    gsoundFFT = new p5.FFT(0.8,16)
    gsoundFFT.setInput(gsound)

    w = width + 16;
    dx = (TWO_PI / period) * xspacing;
    yvalues = new Array(floor(w / xspacing));

    analyzer = new p5.Amplitude();
    analyzer.setInput(isound);
    analyzer.setInput(qsound);
    analyzer.setInput(wsound);
    analyzer.toggleNormalize();

    let wideCount = width / unit;
    let highCount = height / unit;
    count = wideCount * highCount;

    let index = 0;
    for (let y = 0; y < highCount; y++) {
    for (let x = 0; x < wideCount; x++) {
      mods[index++] = new Module(
        x * unit,
        y * unit,
        unit / 2,
        unit / 2,
        random(0.05, 0.8),
        unit
      );
    }
    }

    for (let i = 0; i < 50; i++) {
    bugs.push(new Jitter());
        }

    }













//Function playSound : pour jouer les sons en fonction des touches de clavier
function playSound(sound, keyId){

    if(keyIsDown(keyId) ==true){
        if(sound.isPlaying() == false){
            sound.play();
        }
    }
}







//Function Draw : Pour créer des formes
function draw() {

    background(0);

    //Lettre O : 3 cercles
    playSound (osound, 79);
    if(osound.isPlaying() == true) {
        push()

     var radius=map(osound.currentTime(),0,osound.duration(),50,width) // permet de s'adapter fonction de la durée du son

        noStroke()
        fill(255,220,0) //couleur orange/mangue
        ellipse(width*0.1,height*0.1,radius,radius);
        fill(255, 220 ,0)
        ellipse (width*0.9,height*0.9,radius,radius);
         fill(255)
        ellipse (width*0.5,height*0.5,radius,radius);
        pop();

    }

    // lettre Q = carré selon FFT
    playSound (qsound,81);
        if(qsound.isPlaying() == true){
        push()
        var rmos = analyzer.getLevel();
        var rectSize = map(rmos, 0, 1, 50, 1200);

        noStroke()
        fill(255, 220,0);
        rect( width*0, height*0 , rectSize, rectSize);

        pop()
    }

    //touche A = cercle qui grossi
    playSound(asound, 65);
    if(asound.isPlaying() == true){
        push();
        var radius=map(asound.currentTime(),0,asound.duration(),50,width) // permet de s'adapter fonction de la durée du son

        noStroke()
        fill(255,220,0) //couleur orange/mangue
        ellipse(width*0.5,height*0.5,radius,radius);
        pop();
    }

    //touche Z = Rectangle qui tourne
    playSound(zsound, 90);
    if(zsound.isPlaying() == true){
        push()
        var rotation = map(zsound.currentTime(), 0, zsound.duration(), 0, PI) //tourne en fonction de la durée du son
        rectMode(CENTER)
        translate(width * 0.5, height * 0.5)
        rotate(rotation)

        noStroke()
        fill(255)
        rect(0, 0, width * 0.5, width * 0.05) //taille du rectangle
        pop()
    }

    //touche E = Waveforme
    playSound(esound, 69);
    if(esound.isPlaying() == true){
        push()
        var waveform = esoundFFT.waveform(); //pour créer une onde en fonction de la musique
        noFill();
        beginShape();
        stroke(247, 31, 13);
        strokeWeight(20);
        for (var i = 0; i < waveform.length; i++) {
        var x = map(i, 0, waveform.length, 0, width);
        var y = map(waveform[i], -1, 1, 0, height);
        curveVertex(x, y);
        }
        endShape();
        pop();


    }

    //touche R = fleur
    playSound(rsound, 82);
    if(rsound.isPlaying() == true){
        push()
        var rotation = map(rsound.currentTime(), 0, rsound.duration(), 0, PI) //tourne en fonction de la durée du son
        rectMode(CENTER)
        translate(width * 0.5, height * 0.5)
        rotate(rotation)
        noStroke()
        fill(255, 220, 0);
        for (let i = 0; i < 10; i ++) {
        ellipse(0, 120, 80, 240);
        rotate(PI/5);

        }
    }

    //touche T =  waveforme hotdog
    playSound(tsound, 84);
    if(tsound.isPlaying() == true){

         push()
        var waveform = tsoundFFT.waveform(); //pour créer une onde en fonction de la musique
        noFill();
        beginShape();
        stroke(255);
        strokeWeight(50);
        for (var i = 0; i < waveform.length; i++) {
        var x = map(i, 0, waveform.length, 0, width);
        var y = map(waveform[i], -1, 1, 0, height);
        curveVertex(x, y);
        }
        endShape();
        pop();

        push()
        var waveform = tsoundFFT.waveform(); //pour créer une onde en fonction de la musique
        noFill();
        beginShape();
        stroke(255, 220, 0);
        strokeWeight(40);
        for (var i = 0; i < waveform.length; i++) {
        var x = map(i, 0, waveform.length, 0, width);
        var y = map(waveform[i], -2, 1, 0, height);
        curveVertex(x, y);
        }
        endShape();
        pop();

        push()
        var waveform = tsoundFFT.waveform(); //pour créer une onde en fonction de la musique
        noFill();
        beginShape();
        stroke(247, 31, 13);
        strokeWeight(20);
        for (var i = 0; i < waveform.length; i++) {
        var x = map(i, 0, waveform.length, 0, width);
        var y = map(waveform[i], -3, 1, 0, height);
        curveVertex(x, y);
        }
        endShape();
        pop();
        }

    // touche Y = etoile
    playSound (ysound,89);
    if(ysound.isPlaying() == true){
        var nsegment = 96
        var ncurrentsegment = (map(ysound.currentTime(), 0, ysound.duration(), 0, nsegment + 1))
        push()
        for (var i = 0; i < ncurrentsegment; i++) {
        stroke(255);
        strokeWeight(4)
        var angle = map(i, 0, nsegment, 0, TWO_PI);
        var xt = width * 0.5 + height * 0.45 * cos(angle);
        var yt = height * 0.5 + height * 0.45 * sin(angle);
        line(width * 0.5, height * 0.5, xt, yt);
        pop()

        }
    }

    //touche U = rectangle
    playSound (usound,85);
    if(usound.isPlaying() == true) {
        push()
        var rotation = map(usound.currentTime(), 0, usound.duration(), 0, PI) //tourne en fonction de la durée du son
        rectMode(CENTER)
        translate(width * 0.5, height * 0.5)
        rotate(rotation)

        noStroke()
        fill(255)
        rect(0, 0, width * 0.5, width * 0.05) //taille du rectangle
        pop()

    }

    //touche I = ellipses
    playSound (isound, 73);
    if(isound.isPlaying() == true) {
        push()
        var rms = analyzer.getLevel();
        var ellipseSize = map(rms, 0, 1, 50, 800); //selon la taille de l'ellipse
        var ellipseAlpha = map(rms, 0, 1, 0, 255);//selon l'opacité de l'ellipse

        fill(255);
        ellipse( width*0.25, height*0.5 , ellipseSize, ellipseSize);

        fill(255, 220, 0, ellipseAlpha);
        ellipse( width*0.75, height*0.5 , 250, 250);

        pop()

         }



    //touche P = rectangle
    playSound (psound,80);
    if(psound.isPlaying() == true) {
        push()
        var rotation = map(psound.currentTime(), 0, psound.duration(), 0, PI) //tourne en fonction de la durée du son
        translate(width * 0.5, height * 0.5)
        rotate(rotation)

        noStroke()
        fill(247, 31, 13)
        rect(0, 0, width * 0.4, width * 0.04) //taille du rectangle
        pop()


        }
    //touche S = cercles
    playSound (ssound,83);
    if(ssound.isPlaying() == true) {
        push()
        translate(width * 0, height * 0.5)
        col.r = random(100,255) // col.r/g ou b permet de créer un tableau où la page web ira chercher une couleur au hasard
        col.g = random(220,255);
        col.b = 0;
        spot.x = random(200, width);
        spot.Y = random(200, height);
        noStroke()
        fill(col.r, col.g, col.b);
        ellipse(spot.x, spot.y, 70, 70);
        pop();

    }

    //touche D = coquillette
    playSound (dsound,68);
    if(dsound.isPlaying() == true){
        push()
        var nsegment = 96
        var ncurrentsegment = (map(dsound.currentTime(), 0, dsound.duration(), 0, nsegment + 2))
        push()
        for (var i = 0; i < ncurrentsegment; i++) {
        fill(255);
        stroke(255, 220, 0);
        strokeWeight(5)
        var angle = map(i, 0, nsegment, 0, TWO_PI);
        var xt = width * 0.5 + height * 0.45 * cos(angle);
        var yt = height * 0.5 + height * 0.45 * sin(angle);
        ellipse(width * 0.5, height * 0.5, xt, yt);
        pop()

        }

    }

    //touche G = waveformes
    playSound (gsound,71);
    if(gsound.isPlaying() == true){
        push()
        var waveform = gsoundFFT.waveform(); //pour créer une onde en fonction de la musique
        noFill();
        beginShape();
        stroke(255, 220, 0);
        strokeWeight(1);
        for (var i = 0; i < waveform.length; i++) {
        var x = map(i, 0, waveform.length, 0, width);
        var y = map(waveform[i], -4, 1, 0, height); // je change sur chaque onde la hauteur pour faire un rectangle d'ondes
        curveVertex(x, y);
        }
        endShape();
        pop();

         var waveform = gsoundFFT.waveform(); //pour créer une onde en fonction de la musique
        noFill();
        beginShape();
        stroke(255, 220, 0);
        strokeWeight(1);
        for (var i = 0; i < waveform.length; i++) {
        var x = map(i, 0, waveform.length, 0, width);
        var y = map(waveform[i], -3, 1, 0, height);
        curveVertex(x, y);
        }
        endShape();
        pop();

        var waveform = gsoundFFT.waveform(); //pour créer une onde en fonction de la musique
        noFill();
        beginShape();
        stroke(255, 220, 0);
        strokeWeight(1);
        for (var i = 0; i < waveform.length; i++) {
        var x = map(i, 0, waveform.length, 0, width);
        var y = map(waveform[i], -2, 1, 0, height);
        curveVertex(x, y);
        }
        endShape();
        pop();

        var waveform = gsoundFFT.waveform(); //pour créer une onde en fonction de la musique
        noFill();
        beginShape();
        stroke(255, 220, 0);
        strokeWeight(1);
        for (var i = 0; i < waveform.length; i++) {
        var x = map(i, 0, waveform.length, 0, width);
        var y = map(waveform[i], -1, 1, 0, height);
        curveVertex(x, y);
        }
        endShape();
        pop();

        var waveform = gsoundFFT.waveform(); //pour créer une onde en fonction de la musique
        noFill();
        beginShape();
        stroke(255, 220, 0);
        strokeWeight(1);
        for (var i = 0; i < waveform.length; i++) {
        var x = map(i, 0, waveform.length, 0, width);
        var y = map(waveform[i], 0, 1, 0, height);
        curveVertex(x, y);
        }
        endShape();
        pop();

        var waveform = gsoundFFT.waveform(); //pour créer une onde en fonction de la musique
        noFill();
        beginShape();
        stroke(255, 220, 0);
        strokeWeight(1);
        for (var i = 0; i < waveform.length; i++) {
        var x = map(i, 0, waveform.length, 0, width);
        var y = map(waveform[i], 0.5, 1, 0, height);
        curveVertex(x, y);
        }
        endShape();
        pop();

        var waveform = gsoundFFT.waveform(); //pour créer une onde en fonction de la musique
        noFill();
        beginShape();
        stroke(255, 220, 0);
        strokeWeight(1);
        for (var i = 0; i < waveform.length; i++) {
        var x = map(i, 0, waveform.length, 0, width);
        var y = map(waveform[i], 1, 1, 0, height);
        curveVertex(x, y);
        }
        endShape();
        pop();

        var waveform = gsoundFFT.waveform(); //pour créer une onde en fonction de la musique
        noFill();
        beginShape();
        stroke(255, 220, 0);
        strokeWeight(1);
        for (var i = 0; i < waveform.length; i++) {
        var x = map(i, 0, waveform.length, 0, width);
        var y = map(waveform[i], 3, 1, 0, height);
        curveVertex(x, y);
        }
        endShape();
        pop();

    }

    //touche F = systeme solaire abstrait ellipse
   playSound (fsound,70);
    if(fsound.isPlaying() == true){
        push()
        var nsegment = 6
        var ncurrentsegment = (map(fsound.currentTime(), 0,fsound.duration(), 0, nsegment + 2))
        push()
        for (var i = 0; i < ncurrentsegment; i++) {
        noFill()
        stroke(255);
        strokeWeight(10)
        var angle = map(i, 0, nsegment, 0, TWO_PI);
        var xt = width * 0.5 + height * 0.5 * cos(angle);
        var yt = height * 0.5 + height * 0.5 * sin(angle);
        ellipse(width * 0.5, height * 0.5, xt, yt);
        pop()

        }

    }
    //touche H = polygones qui tournent
     playSound (hsound,72);
    if(hsound.isPlaying() == true){
        push()
        translate(width*0.5, height*0.5);
        rotate(frameCount / 200.0); // permet au polygone de tourner
        stroke(255)
        strokeWeight(8)
        noFill()
        polygon(0, 0, 122, 10); //utilise la fonction polygone disponible plus bas dans le code
        pop()

        push()
        translate(width*0.5, height*0.5);
        rotate(frameCount / 200.0);
        stroke(255)
        strokeWeight(7)
        noFill()
        polygon(0, 0, 100, 10);
        pop()

        push()
        translate(width*0.5, height*0.5);
        rotate(frameCount / 200.0);
        stroke(255)
        strokeWeight(6)
        noFill()
        polygon(0, 0, 80, 10);
        pop()

        push()
        translate(width*0.5, height*0.5);
        rotate(frameCount / 200.0);
        stroke(255)
        strokeWeight(5)
        noFill()
        polygon(0, 0, 60, 10);
        pop()

        push()
        translate(width*0.5, height*0.5);
        rotate(frameCount / 200.0);
        stroke(255)
        strokeWeight(4)
        noFill()
        polygon(0, 0, 40, 10);
        pop()

        push()
        translate(width*0.5, height*0.5);
        rotate(frameCount / 200.0);
        stroke(255)
        strokeWeight(10)
        noFill()
        polygon(0, 0, 140, 10);
        pop()

        push()
        translate(width*0.5, height*0.5);
        rotate(frameCount / 200.0);
        stroke(255)
        strokeWeight(12)
        noFill()
        polygon(0, 0, 180, 10);
        pop()

    }
    // Touche J = points blancs aléatoires
     playSound (jsound,74);
    if(jsound.isPlaying() == true){
        push()
         for (let i = 0; i < count; i++) {
    mods[i].update();
    mods[i].draw();
  }
        pop()

}
    //touche K = fait apparaitre des cercles qui tremblent
    playSound (ksound,75);
    if(ksound.isPlaying() == true){
        push()
        for (let i = 0; i < bugs.length; i++) {
    bugs[i].move();
    bugs[i].display();
        stroke(255,220,0);
        strokeWeight(4);
            noFill();

        pop()
}
}

    //touche L = etoile centre rouge
    playSound(lsound,76);
    if(lsound.isPlaying() == true){

         push()
        translate(width*0.5, height*0.5);
        rotate(frameCount / 50.0);
        noStroke()
        fill(255)
        star(0, 0, 80, 200, 40);
        pop()

        push()
        translate(width*0.5, height*0.5);
        rotate(frameCount / 50.0);
        noStroke()
        fill(247,31,13)
        star(0, 0, 80, 100, 40);
        pop()

        push()
        translate(width*0.5, height*0.5);
        rotate(frameCount / 50.0);
        noStroke()
        fill(247,31,13)
        star(0, 0, 80, 100, 40);
        pop()

       }

    //touche M = étoile quatre branches
    playSound(msound,77);
    if(msound.isPlaying() == true){
        push()
        translate(width*0.5, height*0.5);
        rotate(frameCount / 50.0);
        noStroke()
        fill(255)
        star(0, 0, 80, 300, 4);
        pop()

    }

    //touche W = rectangles et rond qui analysent la musique
    playSound(wsound,87);
    if(wsound.isPlaying() == true){
        push()
        var rmoos = analyzer.getLevel();
        var rectSize = map(rmoos, 0, 1, 50, 600);

        noStroke()
        fill(255, 220,0);
        rect( width*0.2, height*0.5 , rectSize, rectSize);
        pop()

        push()
        var rmoos = analyzer.getLevel();
        var rectSize = map(rmoos, 0, 1, 50, 600);

        noStroke()
        fill(255,220,0);
        rect( width*0.7, height*0.5 , rectSize, rectSize);
        pop()

        push()
        var rmoos = analyzer.getLevel();
        var ellipseSize = map(rmoos, 0, 1, 50, 800);

        noStroke()
        fill(255);
        ellipse( width*0.5, height*0.5 , ellipseSize, ellipseSize);
        pop()

        push()
        var rmoos = analyzer.getLevel();
        var ellipseSize = map(rmoos, 0, 1, 50, 200);

        noStroke()
        fill(220);
        ellipse( width*0.5, height*0.5 , ellipseSize, ellipseSize);

        }

    //touche X = wave de cercles blanc
    playSound(xsound,88);
    if(xsound.isPlaying() == true){
        push()
        calcWave();
        renderWave();
        pop()

    }

    //touche C = cercles qui font le tour du cube
    playSound(csound,67);
    if(csound.isPlaying() == true){
        push()
        let ang1 = radians(angle1);
        let ang2 = radians(angle2);

        let x1 = width / 2 + scalar * cos(ang1);
        let x2 = width / 2 + scalar * cos(ang2);

        let y1 = height / 2 + scalar * sin(ang1);
        let y2 = height / 2 + scalar * sin(ang2);

        noStroke()
        fill(255);
        rectMode(CENTER)
        rect(width * 0.5, height * 0.5, 140, 140);

        noStroke()
        fill(255, 220, 0);
        ellipse(x1, height * 0.5 - 120, scalar, scalar);
        ellipse(x2, height * 0.5 + 120, scalar, scalar);


        noStroke()
        fill(247, 31, 13);
        ellipse(width * 0.5 - 120, y1, scalar, scalar);
        ellipse(width * 0.5 + 120, y2, scalar, scalar);

        angle1 += 2;
        angle2 += 3;
        pop()
    }

    //touche V = wave rouge
    playSound(vsound,86);
    if(vsound.isPlaying() == true){
        push()
        push()
        calcWavess();
        renderWavess();
        stroke(247,31,13)
        noFill()
        pop()
    }

    //touche N = fleur fais d'étoiles
      playSound(nsound,78);
    if(nsound.isPlaying() == true){
        push()

        push()
        translate(width*0.5, height*0.5);
        rotate(frameCount / 50.0);
        noStroke()
        fill(247,31,13)
        star(0, 0, 80, 200, 40);
        pop()


        push()
        translate(width*0.5, height*0.5);
        rotate(frameCount / 50.0);
        noStroke()
        fill(2255)
        star(0, 0, 80, 100, 40);
        pop()

        push()
        translate(width*0.5, height*0.5);
        rotate(frameCount / 50.0);
        noStroke()
        fill(255,220,0)
        star(0, 0, 80, 300, 4);
        pop()

        pop()

    }

    //touche B = pleins de cercles orange qui bougent aléatoirement
    playSound(bsound,66);
    if(bsound.isPlaying() == true){
        push()
        for (let i = 0; i < count; i++) {
        mods[i].updatee();
        mods[i].draww();
        pop()
    }


}

//function polygon : permet de créer grâce à des points une forme
function polygon(x, y, radius, npoints) {
  var angle = TWO_PI / npoints;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius;
    var sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
}

//Cette classe permet de créer de manière alétoire les points
class Module {
  constructor(xOff, yOff, x, y, speed, unit) {
    this.xOff = xOff;
    this.yOff = yOff;
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.unit = unit;
    this.xDir = 1;
    this.yDir = 1;
  }


  update() {
    this.x = this.x + this.speed * this.xDir;
    if (this.x >= this.unit || this.x <= 0) {
      this.xDir *= -1;
      this.x = this.x + 1 * this.xDir;
      this.y = this.y + 1 * this.yDir;
    }
    if (this.y >= this.unit || this.y <= 0) {
      this.yDir *= -1;
      this.y = this.y + 1 * this.yDir;
    }
  }

    updatee() {
    this.x = this.x + this.speed * this.xDir;
    if (this.x >= this.unit || this.x <= 0) {
      this.xDir *= -6;
      this.x = this.x + 1 * this.xDir;
      this.y = this.y + 1 * this.yDir;
    }
    if (this.y >= this.unit || this.y <= 0) {
      this.yDir *= -2;
      this.y = this.y + 1 * this.yDir;
    }
  }
    draww() {
    noStroke()
    fill(255,220,0);
    ellipse(this.xOff + this.x, this.yOff + this.y, 12, 12);
  }

  // Custom method for drawing the object
  draw() {
    noStroke()
    fill(255);
    ellipse(this.xOff + this.x, this.yOff + this.y, 6, 6);
  }
}




class Jitter {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.diameter = random(10, 30);
    this.speed = 1;
  }

  move() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  }

  display() {
      stroke(255,220,0)
    noFill()
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
}

//function star = permet de créer des étoiles grâce à un tableau de points
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

//function calcWave(s) : permet de créer une vague de points
function calcWave() {
  // Increment theta (try different values for
  // 'angular velocity' here)
  theta += 0.02;

  // For every x value, calculate a y value with sine function
  let x = theta;
  for (let i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x) * amplitude;
    x += dx;
  }
}

function calcWavess() {
  // Increment theta (try different values for
  // 'angular velocity' here)
  theta += 0.06;

  // For every x value, calculate a y value with sine function
  let x = theta;
  for (let i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x) * amplitude;
    x += dx;
  }
}

function renderWavess() {
  stroke(247,31,13);
  noFill();
  // A simple way to draw the wave with an ellipse at each location
  for (let x = 0; x < yvalues.length; x++) {
    ellipse(x * xspacing, height / 1.5 + yvalues[x], 1, 18);
  }
}

function renderWave() {
  noStroke();
  fill(255);
  // A simple way to draw the wave with an ellipse at each location
  for (let x = 0; x < yvalues.length; x++) {
    ellipse(x * xspacing, height / 2 + yvalues[x], 16, 16);
  }
}




let unit = 40;
let count;
let mods = [];
let bugs = [];
let totalPts = 300;
let steps = totalPts + 1;
let xspacing = 16; // Distance between each horizontal location
let w; // Width of entire wave
let theta = 0.0; // Start angle at 0
let amplitude = 75.0; // Height of wave
let period = 500.0; // How many pixels before the wave repeats
let dx; // Value for incrementing x
let yvalues;
let angle1 = 0;
let angle2 = 0;
let scalar = 70;












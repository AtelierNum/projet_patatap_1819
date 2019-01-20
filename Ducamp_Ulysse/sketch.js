var lueur;
var soncornet;
var heart;
var heartFFT; //stock un objet qui permet une analyse audio sur le son heart
var ondes;
var ondesFFT;
var bouton;
var boutonreverse;
var gong;
var sonar;
var transformer;
var martellement, xpos = [],
    ypos = [],
    xtarget = [],
    ytarget = [];
var gun, gxpos = [],
    gypos = [],
    gxtarget = [],
    gytarget = [];
var tinlin;
var tinlinrouge;
var ame, amexpos = [],
    ameypos = [],
    amextarget = [],
    ameytarget = [];
var harpe;
var oval;
var harpe2;
var oval2;
var debranchement;
var serpent;
var roulement;
var looping;
var virage;
var allumage;
var engine;
var dm;
var dmAmp;
var tadim, tadimxpos = [],
    tadimypos = [],
    tadimxtarget = [],
    tadimytarget = [];
var swoosh, swooshxpos = [],
    swooshypos = [],
    swooshxtarget = [],
    swooshytarget = [];
var newtilin, newtilinxpos = [],
    newtilinypos = [],
    newtilinxtarget = [],
    newtilinytarget = [];
var newtilinV2xpos = [],
    newtilinV2ypos = [],
    newtilinV2xtarget = [],
    newtilinV2ytarget = [];
var swooshclap, swooshclapxpos = [],
    swooshclapypos = [],
    swooshclapxtarget = [],
    swooshclapytarget = [];
var swooshclapV2xpos = [],
    swooshclapV2ypos = [],
    swooshclapV2xtarget = [],
    swooshclapV2ytarget = [];



function preload() {
    lueur = loadSound('../assets/lueur.wav');
    soncornet = loadSound('../assets/soncornet.wav');
    heart = loadSound('../assets/heart.wav');
    ondes = loadSound("../assets/ambiance.wav");
    bouton = loadSound("../assets/bouton.wav");
    boutonreverse = loadSound("../assets/boutonreverse.wav");
    gong = loadSound('../assets/gong.wav');
    sonar = loadSound('../assets/sonar.wav');
    transformer = loadSound('../assets/transformer.wav');
    martellement = loadSound('../assets/martellement.wav');
    gun = loadSound('../assets/gun2.wav');
    tinlin = loadSound('../assets/tinlin.wav');
    tinlinrouge = loadSound('../assets/tinlinrouge.wav');
    ame = loadSound('../assets/voix.wav');
    harpe = loadSound('../assets/harpe.wav');
    harpe2 = loadSound('../assets/harpe2.wav');
    debranchement = loadSound('../assets/debranchement.wav');
    roulement = loadSound('../assets/roulement.wav');
    virage = loadSound('../assets/virage.wav');
    allumage = loadSound('../assets/allumageshort.wav');
    engine = loadSound('../assets/engineshort.wav');
    dm = loadSound('../assets/12dm.wav');
    tadim = loadSound('../assets/tadim.wav');
    swoosh = loadSound('../assets/swoosh.mp3');
    newtilin = loadSound('../assets/newtinlinshort.wav');
    swooshclap = loadSound('../assets/swooshclap.wav');
}

function setup() {
    // créer le fond
    createCanvas(windowWidth, windowHeight);
    background(0);

    //création objet FFT (fast fourrier transform) pour analyser l'énergie des bandes de fréquences de notre son
    heartFFT = new p5.FFT(0.8, 16);
    heartFFT.setInput(heart)
    ondesFFT = new p5.FFT(0.8, 1024);
    ondesFFT.setInput(ondes);

    //création d'un analyseur d'amplitude
    analyzer = new p5.Amplitude();

    //connecter l'intrant (le son) à l'analyseur de volume
    analyzer.setInput(sonar);
    analyzer.setInput(transformer);
    analyzer.setInput(tinlin);
    analyzer.setInput(tinlinrouge);
    analyzer.setInput(dm);

    //boucle qui permet de définir des points d'arrivées et de départs d'éléments
    //coin en haut à gauche
    for (var i = 0; i < 50; i++) {
        // objets situés au dessus du canvas
        xpos.push(random(0, -width));
        ypos.push(random(0, -height));
        // objets à l'intérieur du canvas
        xtarget.push(random(width))
        ytarget.push(random(height))
    }

    //ame carré déplacement
    amexpos.push(height * 0.9)
    amextarget.push(height * 0.15)

    //boucle qui permet de définir des points d'arrivées et de départs d'éléments
    //coin en bas à droite
    for (var i = 0; i < 20; i++) {
        // objets situés au dessus du canvas
        gxpos.push(random(width, 2 * width))
        gypos.push(random(height, 2 * height))
        // objets à l'intérieur du canvas
        gxtarget.push(random(width))
        gytarget.push(random(height))
    }

    // boucle qui permet de définir des points d'arrivées et de départs d'éléments
    //déplacement objet de gauche à droite
    tadimxpos.push(0)
    tadimypos.push(height * 0.5)
    // ajouter des éléments à l'intérieur de notra canvas
    tadimxtarget.push(width)
    tadimytarget.push(height * 0.5)
    //swoosh rectangle déplacement
    swooshxpos.push(width)
    swooshypos.push(height * 0.5)
    swooshxtarget.push(0)
    swooshytarget.push(height * 0.5)

    //rectangle déplacement
    newtilinxpos.push(width * 0.4)
    newtilinypos.push(0 - height * 0.1)
    newtilinxtarget.push(width * 0.4)
    newtilinytarget.push(height * 1.1)

    //rectangle déplacement inverse
    newtilinV2xpos.push(width * 0.6)
    newtilinV2ypos.push(height * 1.1)
    newtilinV2xtarget.push(width * 0.6)
    newtilinV2ytarget.push(0 - height * 0.1)

    //rectangle horizontal déplacement
    swooshclapxpos.push(0)
    swooshclapypos.push(height * 0.5)
    swooshclapxtarget.push(width * 0.5 - 5)
    swooshclapytarget.push(height * 0.5)

    //rectangle horizontal déplacement inverse
    swooshclapV2xpos.push(width)
    swooshclapV2ypos.push(height * 0.5)
    swooshclapV2xtarget.push(width * 0.5 + 5)
    swooshclapV2ytarget.push(height * 0.5)


    pixelDensity(1);
    // on fournit les deux trableaux de coordonnées et la vitesse (1 étant le plus rapide)
    // les deux tableaux sont fournis dans le fichier 'drawing.js'
    oval = new AnimateDrawing(ovalxpos0, ovalypos0, 1);
    oval2 = new AnimateDrawing(oval2xpos0, oval2ypos0, 1);

    background(0);
    serpent = new AnimateDrawing(serpentxpos0, serpentypos0, 2);
    looping = new AnimateDrawing(loopingxpos0, loopingypos0, 1);

}

function draw() {
    background(0);
    playSound(lueur, 65); //"a"
    playSound(soncornet, 90); //"z"
    playSound(heart, 69); //"e"
    playSound(ondes, 82); //"r"
    playSound(bouton, 84); //"t"
    playSound(boutonreverse, 89); //"y"
    playSound(gong, 85); // "u"
    playSound(sonar, 73); //"i"
    playSound(transformer, 79); //"o"
    playSound(martellement, 80); //"p"
    playSound(gun, 81); //"q"
    playSound(tinlin, 83); //"s"
    playSound(tinlinrouge, 68); //"d"
    playSound(ame, 70); //"f"
    playSound(harpe, 71); //"g"
    playSound(harpe2, 72); //"h"
    playSound(debranchement, 74); //"j"
    playSound(roulement, 75); //"k"
    playSound(virage, 76); //"l"
    playSound(allumage, 77); //"m"
    playSound(engine, 87); //"w"
    playSound(dm, 88); //"x"
    playSound(tadim, 67); //"c"
    playSound(swoosh, 86); //"v"
    playSound(newtilin, 66); //"b"
    playSound(swooshclap, 78); //"n"


    //U
    //gong carré
    if (gong.isPlaying() == true) {
        push()
        var radius = map(gong.currentTime(), 0, gong.duration(), 50, width)
        fill(0, 0, 150)
        rectMode(CENTER);
        rect(width * 0.5, height * 0.9, radius, 100);
        pop()

        push()
        var radius = map(gong.currentTime(), 0, gong.duration(), width, 50)
        fill(0, 0, 150)
        rectMode(CENTER);
        rect(width * 0.5, height * 0.1, radius, 100);
        pop()
    }

    //Z
    //cornet rouge et bleu
    if (lueur.isPlaying() == true) {
        push();
        var nsegment = 65;
        var ncurrentsegment = (map(lueur.currentTime(), 0, lueur.duration(), 0, nsegment + 1));

        for (var i = 0; i < ncurrentsegment; i++) {
            stroke(random(255), random(0), random());
            strokeWeight(4);
            var angle = map(i, 0, nsegment, 0, TWO_PI);
            var x = width * 0.5 + height * 0.45 * cos(angle);
            var y = height * 0.5 + height * 0.45 * sin(angle);
            line(0, 0, x, y);
        }
        pop();
    }

    //E
    //cornet bleu et vert
    if (soncornet.isPlaying() == true) {
        push();
        var nsegment = 65;
        var ncurrentsegment = (map(soncornet.currentTime(), 0, soncornet.duration(), 0, nsegment + 1));

        for (var i = 0; i < ncurrentsegment; i++) {
            stroke(random(0), random(0), random(255));
            strokeWeight(4);
            var angle = map(i, 0, nsegment, 0, TWO_PI);
            var x = width * 0.5 + height * 0.45 * cos(angle);
            var y = height * 0.5 + height * 0.45 * sin(angle);
            line(windowWidth, 0, x, y);
        }
        pop();
    }

    //R
    //battement de coeur
    if (heart.isPlaying() == true) {
        push()
        heartFFT.analyze(); //on appelle la fonction analyse.
        var nrjheart = heartFFT.getEnergy("bass");

        push();
        fill(255, 220, 0, 150)
        translate(width * 0.5, height * 0.5);
        rotate(PI / 4);
        rect(0, 0, nrjheart * 0.5, nrjheart);
        pop();


        push();
        fill(255, 220, 0, 150)
        translate(width * 0.5, height * 0.5);
        rotate(7 * PI / 4);
        beginShape();
        vertex(nrjheart, 10);
        vertex(nrjheart, 30);
        vertex(85, 70);
        vertex(50, 90);
        vertex(15, 70);
        vertex(15, 30);
        endShape(CLOSE);
        pop();

        push();
        fill(255, 220, 0, 150)
        translate(width * 0.5, height * 0.5);
        rotate(5 * PI / 4);
        rect(0, 0, nrjheart * 0.5, nrjheart);
        pop();
        pop();
    }

    //T
    //ondes
    if (ondes.isPlaying() == true) {
        push();
        var waveform = ondesFFT.waveform();
        beginShape();
        stroke(0, 0, 200);
        strokeWeight(15);
        fill(0, 0, 200);
        for (var i = 0; i < waveform.length; i++) {
            var x = map(i, 0, waveform.length, 0, width); // (création ligne parcourue par la boucle for)
            var y = map(0.5 * waveform[i], -1, 1, 0, height * 0.3); //hauteur des ondes en fonction du son
            curveVertex(x, y); //(ajout du point obtenu à la coube)
        }
        endShape();
        pop();
    }

    //Y
    //polygone
    if (bouton.isPlaying() == true) {
        push();
        var rotation = map(bouton.currentTime(), 0, bouton.duration(), 0, PI)

        rectMode(CENTER)
        translate(width * 0.5, height * 0.5)
        rotate(rotation)

        fill(255, 0, 0)
        beginShape();
        vertex(50, 10);
        vertex(85, 30);
        vertex(85, 70);
        vertex(50, 90);
        vertex(15, 70);
        vertex(15, 30);
        endShape(CLOSE);

        pop();
    }

    //U
    //bouton reverse
    if (boutonreverse.isPlaying() == true) {
        push();
        var rotation = map(boutonreverse.currentTime(), 0, boutonreverse.duration(), 0, -PI)

        rectMode(CENTER)
        translate(width * 0.5, height * 0.5)
        rotate(rotation)

        fill(0, 0, 255)
        beginShape();
        vertex(50, 10);
        vertex(85, 30);
        vertex(85, 70);
        vertex(50, 90);
        vertex(15, 70);
        vertex(15, 30);
        endShape(CLOSE);

        pop();
    }

    //I
    //Sonar(animation basée sur l'exemple "Measuring Amplitude" du site p5js.org)
    if (sonar.isPlaying() == true) {
        push();
        var rms = analyzer.getLevel();
        fill(0, 0, 80);
        stroke(0);
        ellipse(width / 1.4, height / 2, 10 + rms * 1000, 10 + rms * 1000);
        pop();
    }

    //O
    //transformer(animation basée sur l'exemple "Measuring Amplitude" du site p5js.org)
    if (transformer.isPlaying() == true) {
        push();
        var rms = analyzer.getLevel();
        fill(80, 0, 0);
        stroke(0);
        ellipse(width / 2.8, height / 2, 10 + rms * 1000, 10 + rms * 1000);
        pop();
    }

    //P
    //animation martellement
    if (martellement.isPlaying() == true) {
        push();
        var t = map(martellement.currentTime(), 0, martellement.duration() * 0.75, 0, 1);
        var grey = map(martellement.currentTime(), martellement.duration() * 0.75, martellement.duration(), 255, 180);
        t = constrain(t, 0, 1);
        grey = constrain(grey, 180, 255);
        fill(0, 0, grey)
        noStroke()
        for (var i = 0; i < 50; i++) {
            // on calcule la position x en appliquant la fonction lerp aux valeurs stockées à l'index i des tableaux xpos et xtarget et ce pour le temps t.
            var x = lerp(xpos[i], xtarget[i], t)
            // on calcule la position y en appliquant la fonction lerp aux valeurs stockées à l'index i des tableaux ypos et ytarget et ce pour le temps t.
            var y = lerp(ypos[i], ytarget[i], t)
            // on dessine une ellipse aux coordonées x et y
            ellipse(x, y, 500, 500)
        }
        pop();
    }

    //Q
    //gun
    if (gun.isPlaying() == true) {
        push();
        var t = map(gun.currentTime(), 0, gun.duration() * 0.2, 0, 1);
        var grey = map(gun.currentTime(), gun.duration() * 0.3, gun.duration(), 255, 0);
        t = constrain(t, 0, 1);
        grey = constrain(grey, 0, 255);
        fill(grey, 0, 0);
        noStroke()
        for (var i = 0; i < 50; i++) {
            // on calcule la position x en appliquant la fonction lerp aux valeurs stockées à l'index i des tableaux xpos et xtarget et ce pour le temps t.
            var x = lerp(gxpos[i], gxtarget[i], t)
            // on calcule la position y en appliquant la fonction lerp aux valeurs stockées à l'index i des tableaux ypos et ytarget et ce pour le temps t.
            var y = lerp(gypos[i], gytarget[i], t)
            // on dessine une ellipse aux coordonées x et y
            ellipse(x, y, 500, 500);
        }
        pop();
    }

    //S
    //tinlin
    if (tinlin.isPlaying() == true) {
        push();
        var amp = analyzer.getLevel() // obtenir le niveau sonore à l'aide de notre analyseur et le stocker dans une variable nommée amp
        var whiteLevel = map(amp, 0, 1, 210, 255) // transformer 'amp' qui est comprise entre 0 et 1 en une nouvelle valeur entre 0 et 255
        // dessiner un carré blanc de la taille de notre fenêtre dont la teinte est contrôllé par whiteLevel qui dépend elle même du
        // niveau sonore de notre son en train de jouer.
        noStroke()
        fill(0, 0, whiteLevel * 0.5)
        rect(0, 0, width, height)
        pop();
    }

    //D
    //tinlinrouge
    if (tinlinrouge.isPlaying() == true) {
        push();
        var amp = analyzer.getLevel() // obtenir le niveau sonore à l'aide de notre analyseur et le stocker dans une variable nommée amp
        var whiteLevel = map(amp, 0, 1, 210, 255) // transformer 'amp' qui est comprise entre 0 et 1 en une nouvelle valeur entre 0 et 255
        // dessiner un carré blanc de la taille de notre fenêtre dont la teinte est contrôllé par whiteLevel qui dépend elle même du
        // niveau sonore de notre son en train de jouer.
        noStroke()
        fill(whiteLevel * 0.5, 0, 0)
        rect(0, 0, width, height)
        pop();
    }

    //F
    //ame rectangle blanc
    if (ame.isPlaying() == true) {
        push()
        var t = map(ame.currentTime(), 0, ame.duration(), 0, 1);
        var red = map(ame.currentTime(), ame.duration() * 0.5, ame.duration(), 255, 0);
        var green = map(ame.currentTime(), ame.duration() * 0.5, ame.duration(), 220, 0)
        t = constrain(t, 0, 1)
        red = constrain(red, 0, 255)
        green = constrain(green, 0, 220)


        fill(red, green, 0)
        noStroke()
        for (var i = 0; i < 50; i++) {
            // on calcule la position x en appliquant la fonction lerp aux valeurs stockées à l'index i des tableaux xpos et xtarget et ce pour le temps t.
            var y = lerp(amexpos[i], amextarget[i], t)
            // on calcule la position y en appliquant la fonction lerp aux valeurs stockées à l'index i des tableaux ypos et ytarget et ce pour le temps t.
            var x = width * 0.5
            // on dessine une ellipse aux coordonées x et y
            rectMode(CENTER)
            rect(x, y, 20, 200);
        }
        pop()
    }

    //G
    //harpe
    if (harpe.isPlaying() == true) {
        push();
        // on appelle la fonction animateDrawing avec en premier paramètre une couleur et en second l'épaisseur
        oval.animateDrawing(color(255, 0, 0), 20)
        pop();
    } else {
        // on reset le dessin
        oval.resetDrawing()
    }

    //H
    //harpe 2
    if (harpe2.isPlaying() == true) {
        push();
        // on appelle la fonction animateDrawing avec en premier paramètre une couleur et en second l'épaisseur
        oval2.animateDrawing(color(0, 0, 255), 20)
        pop();
    } else {
        // on reset le dessin
        oval2.resetDrawing()
    }

    //I
    //serpent
    if (debranchement.isPlaying() == true) {
        push();
        // on appelle la fonction animateDrawing avec en premier paramètre une couleur et en second l'épaisseur
        serpent.animateDrawing(color(0, 0, 255), 20)
        pop();
    } else {
        // on reset le dessin
        serpent.resetDrawing()
    }

    //J
    //looping
    if (roulement.isPlaying() == true) {
        push();
        // on appelle la fonction animateDrawing avec en premier paramètre une couleur et en second l'épaisseur
        looping.animateDrawing(color(0, 0, 255), 20)
        pop();
    } else {
        // on reset le dessin
        looping.resetDrawing()
    }

    //K
    //virage
    if (virage.isPlaying() == true) {
        push();
        var nsegment = 200;
        var ncurrentsegment = (map(virage.currentTime(), 0, virage.duration(), 0, nsegment + 1));

        for (var i = 0; i < ncurrentsegment; i++) {
            stroke(0, 0, 255);
            strokeWeight(1);
            var angle = map(i, 0, nsegment, 0, TWO_PI);
            var x = width * 0.5 + width * cos(angle);
            var y = height * 0.5 + height * sin(angle);
            line(width * 0.5, height * 0.5, x, y);
        }
        pop();
    }

    //L
    //allumage
    if (allumage.isPlaying() == true) {
        push();
        var nsegment = 50;
        var ncurrentsegment = (map(allumage.currentTime(), 0, allumage.duration(), 0, nsegment + 1));

        for (var i = 0; i < ncurrentsegment; i++) {
            stroke(0, 0, 255);
            strokeWeight(random(50));
            var angle = map(i, 0, nsegment, 0, TWO_PI);
            var x = width * 0.5 + height * 0.45 * cos(angle);
            var y = height * 0.5 + height * 0.45 * sin(angle);
            var xx = width * 0.5 + height * 0.45 * cos(angle);
            var yy = height * 0.5 + height * 0.45 * sin(angle);
            line(xx, yy, x, y);
        }
        pop();
    }

    //M
    //engine
    if (engine.isPlaying() == true) {
        push();
        var nsegment = 50;
        var ncurrentsegment = (map(engine.currentTime(), 0, engine.duration(), 0, nsegment + 1));

        for (var i = 0; i < ncurrentsegment; i++) {
            stroke(255, 0, 0);
            strokeWeight(random(50));
            var angle = map(i, 0, nsegment, 0, -TWO_PI);
            var x = width * 0.5 + height * 0.45 * cos(angle);
            var y = height * 0.5 + height * 0.45 * sin(angle);
            var xx = width * 0.5 + height * 0.45 * cos(angle);
            var yy = height * 0.5 + height * 0.45 * sin(angle);
            line(xx, yy, x, y);
        }
        pop();
    }

    //W
    //dm rectangle qui s'allonge
    if (dm.isPlaying() == true) {
        push()
        //longueur rectangle dépendante du son
        var lenght = map(dm.currentTime(), 0, dm.duration(), 50, width);
        //épaisseur rectangle dépendant du volume du son
        var amp = analyzer.getLevel() // amp contient une valeur entre 0 et 1.
        var thickness = map(amp, 0, 1, height * 0.001, height * 0.2);

        rectMode(CENTER);
        translate(width * 0.5, height * 0.5)

        fill(255, 220, 0)
        rect(0, 0, lenght, thickness)
        pop()
    }

    //X
    //tadim, déplacement de gauche à droite
    if (tadim.isPlaying() == true) {
        push()
        var t = map(tadim.currentTime(), 0, tadim.duration(), 0, 1)
        fill(200, 0, 0)
        noStroke()
        for (var i = 0; i < 50; i++) {
            // on calcule la position x en appliquant la fonction lerp aux valeurs stockées à l'index i des tableaux xpos et xtarget et ce pour le temps t.
            var x = lerp(tadimxpos[i], tadimxtarget[i], t)
            // on calcule la position y en appliquant la fonction lerp aux valeurs stockées à l'index i des tableaux ypos et ytarget et ce pour le temps t.
            var y = height * 0.5;
            // on dessine une ellipse aux coordonées x et y
            ellipse(x, y, 30, 30)
        }
        pop()
    }

    //C
    //swoosh rectangle déplacement
    if (swoosh.isPlaying() == true) {
        push()
        var t = map(swoosh.currentTime(), 0, swoosh.duration(), 0, 1)
        fill(0, 0, 200)
        noStroke()
        for (var i = 0; i < 50; i++) {
            // on calcule la position x en appliquant la fonction lerp aux valeurs stockées à l'index i des tableaux xpos et xtarget et ce pour le temps t.
            var x = lerp(swooshxpos[i], swooshxtarget[i], t)
            // on calcule la position y en appliquant la fonction lerp aux valeurs stockées à l'index i des tableaux ypos et ytarget et ce pour le temps t.
            var y = height * 0.5
            // on dessine une ellipse aux coordonées x et y
            rectMode(CENTER)
            rect(x, y, 200, 100)
        }
        pop()
    }

    //V
    //rectangle double déplacement
    if (newtilin.isPlaying() == true) {
        push()
        var t = map(newtilin.currentTime(), 0, newtilin.duration(), 0, 1)

        push()
        fill(200, 0, 0)
        noStroke()
        for (var i = 0; i < 50; i++) {
            // on calcule la position x en appliquant la fonction lerp aux valeurs stockées à l'index i des tableaux xpos et xtarget et ce pour le temps t.
            var x = width * 0.4;
            // on calcule la position y en appliquant la fonction lerp aux valeurs stockées à l'index i des tableaux ypos et ytarget et ce pour le temps t.
            var y = lerp(newtilinypos[i], newtilinytarget[i], t)
            // on dessine une ellipse aux coordonées x et y
            rectMode(CENTER)
            rect(x, y, 100, 50);
        }
        pop()


        //B
        //deuxième objet sens inverse
        push()
        fill(0, 0, 200)
        noStroke()
        for (var i = 0; i < 50; i++) {
            // on calcule la position x en appliquant la fonction lerp aux valeurs stockées à l'index i des tableaux xpos et xtarget et ce pour le temps t.
            var x = width * 0.6
            // on calcule la position y en appliquant la fonction lerp aux valeurs stockées à l'index i des tableaux ypos et ytarget et ce pour le temps t.
            var y = lerp(newtilinV2ypos[i], newtilinV2ytarget[i], t)
            // on dessine une ellipse aux coordonées x et y
            rectMode(CENTER)
            rect(x, y, 100, 50);
        }
        pop()

        pop()
    }

    //N
    //rectangle double déplacement CLAP
    if (swooshclap.isPlaying() == true) {
        push()
        var t = map(swooshclap.currentTime(), 0, swooshclap.duration(), 0, 1)

        //premier objet
        push()
        fill(200, 0, 0)
        noStroke()
        for (var i = 0; i < 50; i++) {
            var x = lerp(swooshclapxpos[i], width * 0.5 - 5, t)
            var y = height * 0.5;
            rectMode(CENTER)
            rect(x, y, 20, height);
        }
        pop()

        //deuxième objet sens inverse
        push()
        fill(0, 0, 200)
        noStroke()
        for (var i = 0; i < 50; i++) {
            // on calcule la position x en appliquant la fonction lerp aux valeurs stockées à l'index i des tableaux xpos et xtarget et ce pour le temps t.
            var x = lerp(swooshclapV2xpos[i], width * 0.5 + 5, t)
            var y = height * 0.5;
            rectMode(CENTER)
            rect(x, y, 20, height);
        }
        pop()

        pop()
    }
}


function playSound(sound, keyID) {
    if (keyIsDown(keyID) == true) {
        if (sound.isPlaying() == false) {
            sound.play();
        }
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    background(0);
}

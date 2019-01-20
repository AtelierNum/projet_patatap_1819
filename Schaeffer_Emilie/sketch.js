var song, analyzer;

var song1
var song1FFT
var song2
var song3
var song3FFT
var song4
var song5
var song5FFT
var x
var y
var nrj1
var wavef
var i
var song6
var angle
var nsegment
var ncurrentsegment
var song7
var ncercle
var ncurrentcercle
var song8
var nrect
var ncurrentrect
var song10
var song10FFT
var song13
var song13FFT
var nrj3
var x
var y
var nrj2
var song14
var song15
var song16
var song17
var song18
var angle1 = 2000.0;
var scalar1 = 100.5;
var speed1 = 0.1;
var song19
var angle2 = 30;
var scalar2 = 90;
var speed2 = 10;
var song24FFT
var song26;
var x = 320;
var y = 180;

var w = [],
    x = 0,
    y = 1;



var cote
var song27;
var song28;
var nrj4;
var song29;







function preload() {
    song1 =  loadSound("assets/cdartichaud1.wav"); //2s
    song2 =  loadSound("assets/nana3.wav"); //4s
    song3 =  loadSound("assets/cdartichaud2.wav"); //0s
    song4 =  loadSound("assets/paysimaginaire1.wav"); //2s
    song5 =  loadSound("assets/nana2.wav"); //15s
    song6 =  loadSound("assets/cdartichaud3.wav"); // 1s
    song7 =  loadSound("assets/cdartichaud4.wav"); // 2s
    song8 =  loadSound("assets/canope1.wav"); // 2s
    song9 =  loadSound("assets/canope2.wav"); // 2s
    song10 = loadSound("assets/canope3.wav"); // 2s
    song12 = loadSound("assets/paysimaginaire6.wav"); // 2s
    song13 = loadSound("assets/paysimaginaire5.wav");
    song14 = loadSound("assets/paysimaginaire3.wav");
    song15 = loadSound("assets/nana1.wav");
    song16 = loadSound("assets/nana4.wav");
    song17 = loadSound("assets/paysimaginaire2.wav");
    song18 = loadSound("assets/paysimaginaire4.wav");
    song19 = loadSound("assets/abysses1.wav");
    song20 = loadSound("assets/arcenciel1.wav");
    song23 = loadSound("assets/arcenciel4.wav");
    song24 = loadSound("assets/arcenciel5.wav");
    song25 = loadSound("assets/arcenciel6.wav");
    song26 = loadSound("assets/arcenciel7.wav");
    song27 = loadSound("assets/chasseur1.wav");
    song28 = loadSound("assets/chasseur2.wav");
    song29 = loadSound("assets/chasseur3.wav");
    song30 = loadSound("assets/chasseur4.wav");





}

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);

    song1FFT = new p5.FFT(0.8, 1024);
    song1FFT.setInput(song1);

    song4Amp = new p5.Amplitude();
    song4Amp.setInput(song4);

    song5FFT = new p5.FFT(0.3, 16); // (smoothing, nbr de bandes de fréquences)
    song5FFT.setInput(song5); //on branche cet analyseur à la variable song5

    song10FFT = new p5.FFT(0.8, 1024); // (smoothing, nbr de bandes de fréquences)
    song10FFT.setInput(song10);

    song13FFT = new p5.FFT(0.1, 1024);
    song13FFT.setInput(song13);

    song3FFT = new p5.FFT(0.8, 1024);
    song3FFT.setInput(song3);

    song14Amp = new p5.Amplitude();
    song14Amp.setInput(song14);

    song15FFT = new p5.FFT(0.7, 16);
    song15FFT.setInput(song15);

    song16FFT = new p5.FFT(0.8, 1024);
    song16FFT.setInput(song16);

    song17FFT = new p5.FFT(0.8, 1024);
    song17FFT.setInput(song17);

    song19Amp = new p5.Amplitude();
    song19Amp.setInput(song19);

    song24FFT = new p5.FFT(0.7, 1024);
    song24FFT.setInput(song24);

    song26Amp = new p5.Amplitude();
    song26Amp.setInput(song26);

    song27FFT = new p5.FFT(0.7, 1024);
    song27FFT.setInput(song27);

    song28FFT = new p5.FFT(0.7, 1024);
    song28FFT.setInput(song28);

    song29FFT = new p5.FFT(0.8, 1024);
    song29FFT.setInput(song29);

    song30FFT = new p5.FFT(0.999, 16);
    song30FFT.setInput(song30);





}



//////////////////////////////////////////////////////////
function draw() {
    background(0, 0, 200);
    noStroke();



    //////FOND CHANGE AVEC AMPLITUDE
    //son: Pays Imaginaire, de Polo&Pan

    playSong(song14, 80); //p
    if (song14.isPlaying() == true) {
        push();
        var amplitude = song14Amp.getLevel();
        var whiteLevel = map(amplitude, 0, 0.4, 0, 255); // map(valeur à transformer, sa valeur min, sa valeur max, la valeur min à lui attribuer, sa valeur max à lui attribuer)
        //la couleur dépend du niveau sonore du son
        noStroke();
        fill(whiteLevel, 0, 200);
        rect(0, 0, width, height);
        pop();
    }



    ///////RECTANGLE QUI TOURNE ET S EFFACE
    //son: Nana, de Polo&Pan

    playSong(song2, 83); //s
    if (song2.isPlaying() == true) {
        push();

        //rectangle qui tourne
        push();
        translate(width * 0.5, height * 0.5); //on déplace le rect vers le centre de la fenetre
        var ang = map(song2.currentTime(), 0, song2.duration(), 0, PI); // rotation du rect autour du centre, pendant le tps de son
        rectMode(CENTER);
        rotate(ang);
        fill(255, 84, 175);
        noStroke();
        rect(0, 0, width, height);
        pop();

        //cercle polaire
        push();
        var nsegment = 1500;
        var ncurrentsegment = (map(song2.currentTime(), 0, song2.duration(), 0, nsegment + 1));
        for (var i = 0; i < ncurrentsegment; i++) {
            stroke(0, 0, 200);
            strokeWeight(4);
            var angle = map(i, 0, nsegment, 0, -TWO_PI); //sens inversé par rapport au rectangle
            var x = width * 0.5 + height * 2 * cos(angle); //plus grand que rectangle
            var y = height * 0.5 + height * 2 * sin(angle);
            line(width * 0.5, height * 0.5, x, y);
        }
        pop();

    }

    ////// CERCLE QUI S'AGRANDIT
    //son: Arc-en-ciel, de Polo&Pan

    playSong(song26, 65); //a
    if (song26.isPlaying() == true) {
        push();
        var rad = map(song26.currentTime(), 0, song26.duration(), 50, width); // le rayon dépend de la durée du son: map(moment du son, moment 0 du son, moment de fin du son, hauteur max, largeur max)

        fill(246, 207, 20, 240);
        noStroke();
        ellipse(width * 0.5, height * 0.5, rad, rad);
        pop();
    }


    ///////// WAVEFORME BIG ROSE
    //son: Chasseur d'ivoire, de Polo&Pan

    playSong(song30, 74); //j
    if (song30.isPlaying() == true) {
        push();

        push();
        var wavef = song30FFT.waveform();
        fill(255, 84, 175);
        beginShape(); //dessiner une forme: ligne reliant tous les vertex
        noStroke();
        for (var i = 0; i < wavef.length; i++) { // on parcours le tableau de 0 à 1023, en ajoutant 1 à i à chaque étape
            var x = map(i, 0, wavef.length, 0, width * 3); // abscisse dépendant de i, occupant la largeur de la fenetre
            var y = map(wavef[i], -0.1, 0.1, 0, height); // ordonnée dépendant de la valeur de la donnée dans la case i
            curveVertex(x - 100, y); //point de la courbe selon x et y
        }
        endShape();
        pop();

        pop();


    }

    ///////// WAVEFORME SHARP
    //son: Chasseur d'ivoire, de Polo&Pan

    playSong(song29, 72); //h
    if (song29.isPlaying() == true) {
        push();
        var wavef = song29FFT.waveform();
        fill(255, 84, 175);
        beginShape(); //dessiner une forme: ligne reliant tous les vertex
        noStroke();
        for (var i = 0; i < wavef.length; i++) { // on parcours le tableau de 0 à 1023, en ajoutant 1 à i à chaque étape
            var x = map(i, 0, wavef.length, 0, width); // abscisse dépendant de i, occupant la largeur de la fenetre
            var y = map(wavef[i], -0.1, 0.1, 0, height); // ordonnée dépendant de la valeur de la donnée dans la case i
            curveVertex(x, y); //point de la courbe selon x et y
        }
        endShape();
        pop();


    }


    ///////// LIGNES VERTICALES
    //son: Chasseur d'ivoire, de Polo&Pan

    playSong(song28, 85); //u
    if (song28.isPlaying() == true) {
        push();
        song28FFT.analyze();
        ellipseMode(CENTER);
        var nrj4 = song28FFT.getEnergy("bass");

        push();
        noStroke();
        fill(246, 207, 20);
        rect(0, 0, nrj4 * 2, nrj4 * 10);
        pop();


        push();
        noStroke();
        fill(246, 207, 20);
        rect(width * 0.25, 0, nrj4 * 2, nrj4 * 10);
        pop();

        push();
        noStroke();
        fill(246, 207, 20);
        rect(width * 0.5, 0, nrj4 * 2, nrj4 * 10);
        pop();

        push();
        noStroke();
        fill(246, 207, 20);
        rect(width * 0.75, 0, nrj4 * 2, nrj4 * 10);
        pop();

        pop();



    }






    /////// FAT WAVEFORM FFT
    //son: Chasseur d'ivoire, de Polo&Pan

    playSong(song27, 71); //g

    if (song27.isPlaying() == true) {

        push();
        var wavef = song27FFT.waveform();
        beginShape(); //on va dessiner une forme: ligne reliant tous les vertex
        stroke(255);
        strokeWeight(58);
        for (var i = 0; i < wavef.length; i++) { // on parcours le tableau de 0 à 1023, en ajoutant 1 à i à chaque étape
            var x = map(i, 0, wavef.length, 0, width); // abscisse dépendant de i, occupant la largeur de la fenetre
            var y = map(wavef[i], -0.11, 0.11, 0, height); // ordonnée dépendant de la valeur de la donnée dans la case i
            curveVertex(x, y); //point de la courbe selon x et y
        }
        endShape();
        pop();


    }





    ///////// CERCLES CHELOUS
    //son: Coeur d'artichaud, de Polo&Pan

    playSong(song1, 82); //r
    if (song1.isPlaying() == true) {

        push();
        for (var y = 0; y < height; y++) {
            beginShape();
            translate(width * 0.5, height * 0.5);
            rotate(frameCount / 3.0);
            noStroke();
            noFill();
            fill(246, 207, 20);
            ellipse(width * 0.5, y, 50, 50);
            endShape();
        }
        pop();
    }


    ///////// 2 WAVEFORM FINES
    //son: Arc-en-ciel, de Polo&Pan

    playSong(song24, 75); //k
    if (song24.isPlaying() == true) {

        push();


        push();
        var wavef = song24FFT.waveform();
        noFill();
        beginShape(); //on va dessiner une forme: ligne reliant tous les vertex
        stroke(246, 207, 20);
        strokeWeight(40);
        for (var i = 0; i < wavef.length; i++) { // on parcours le tableau de 0 à 1023, en ajoutant 1 à i à chaque étape
            var x = map(i, 0, wavef.length, 0, width); // abscisse dépendant de i, occupant la largeur de la fenetre
            var y = map(wavef[i], -0.6, 0.6, 0, height); // ordonnée dépendant de la valeur de la donnée dans la case i
            curveVertex(x, y); //point de la courbe selon x et y
        }
        endShape();
        pop();


        push();
        var wavef = song24FFT.waveform();
        noFill();
        beginShape(); //on va dessiner une forme: ligne reliant tous les vertex
        stroke(255, 84, 175);
        strokeWeight(20);
        for (var i = 0; i < wavef.length; i++) { // on parcours le tableau de 0 à 1023, en ajoutant 1 à i à chaque étape
            var x = map(i, 0, wavef.length, width * 0.20, width * 0.80); // abscisse dépendant de i, occupant la largeur de la fenetre
            var y = map(wavef[i], -0.8, 0.8, 0, height); // ordonnée dépendant de la valeur de la donnée dans la case i
            curveVertex(x, y); //point de la courbe selon x et y
        }
        endShape();
        pop();

        pop();

    }



    ///////// SOLEIL VIBRANT
    //son: Abysses, de Polo&Pan

    playSong(song19, 86); //v
    if (song19.isPlaying() == true) {

        push();
        var amplitude = song19Amp.getLevel();
        var npoints = map(amplitude, 0, 0.1, 15, 50); // map(valeur à transformer, sa valeur min, sa valeur max, la valeur min à lui attribuer, sa valeur max à lui attribuer)
        //la couleur dépend du niveau sonore du son
        //console.log(amplitude);

        translate(width * 0.5, height * 0.5);
        rotate(frameCount / 300.0);
        fill(246, 207, 20)
        star(0, 0, 80, 500, npoints); //star(x, y, radius1, radius2, npoints)

        pop();
    }

    ///////// SOLEIL HYPNOTIQUE
    //son: Arc-en-ciel, de Polo&Pan

    playSong(song23, 67); //c
    if (song23.isPlaying() == true) {

        push();
        translate(width * 0.5, height * 0.5);
        rotate(frameCount / 50.0);
        fill(246, 207, 20);
        star(0, 0, 50, 500, 40);
        pop();

        push();
        translate(width * 0.5, height * 0.5);
        rotate(frameCount / 300.0);
        fill(0, 0, 200);
        star(0, 0, 20, 200, 35);
        pop();

    }


    ///////// DISQUES QUI TOURNENT
    //son: Arc-en-ciel, de Polo&Pan

    playSong(song20, 88); //x
    if (song20.isPlaying() == true) {


        push();
        var angle2 = map(song20.currentTime(), 0, song20.duration(), height, width);
        ellipseMode(CENTER);
        var x = width * 0.5 + cos(angle2) * scalar2;
        var y = height * 0.5 + sin(angle2) * scalar2;
        var g = width * 0.5 - cos(angle2) * scalar2; //tourne dans le meme sens mais opposé
        var h = height * 0.5 - sin(angle2) * scalar2;
        stroke(246, 207, 20);
        strokeWeight(50);
        noFill();
        ellipse(x, y, 100, 100);
        ellipse(g, h, 100, 100);

        pop();
    }



    ///////// CERCLES VIBRANTS
    //son: Pays imaginaires, de Polo&Pan

    playSong(song18, 76); //l
    if (song18.isPlaying() == true) {


        push();
        var angle1 = map(song18.currentTime(), 0, song18.duration(), height, width); // le rayon dépend de la durée du son: map(moment du son, moment 0 du son, moment de fin du son, hauteur max, largeur max)


        var x = width * 0.5 + cos(angle1) * scalar1; //rotation cercle
        var y = height * 0.5 + sin(angle1) * scalar1;
        fill(246, 207, 20);
        noStroke();
        ellipse(x, y, width * 0.5, width * 0.5);

        pop();
    }





    ///////// DISQUE FFT
    //son: Pays imaginaires, de Polo&Pan

    playSong(song13, 77); //m
    if (song13.isPlaying() == true) {

        push();
        song13FFT.analyze();
        ellipseMode(CENTER);
        var nrj3 = song13FFT.getEnergy("bass");


        push();
        strokeWeight(nrj3);
        stroke(246, 207, 20, nrj2); //contours s'épaississent en fonction de FFT
        noFill();
        translate(width * 0.5, height * 0.5);
        ellipse(0, 0, width * 0.2, width * 0.2);
        pop();



        pop();
    }


    /////// 3 CERCLES FFT
    //son: Canope, de Polo&Pan

    playSong(song10, 90); //z
    if (song10.isPlaying() == true) {

        push();
        song10FFT.analyze();
        ellipseMode(CENTER);
        var nrj2 = song10FFT.getEnergy("bass");


        //cercle centre : grand, transparent
        push();
        noStroke();
        fill(255, 84, 175, nrj2);
        translate(width * 0.5, height * 0.5);
        ellipse(0, 0, nrj2 * 3, nrj2 * 3); //cercle s'élargit en fonction de FFT
        pop();


        //2 cercles cotés : petits, contours
        push();
        strokeWeight(nrj2);
        stroke(246, 207, 20, nrj2); //contours s'épaississent en fonction de FFT
        noFill();
        translate(width * 0.25, height * 0.25);
        ellipse(0, 0, width * 0.1, width * 0.1);
        pop();

        push();
        strokeWeight(nrj2);
        stroke(246, 207, 20, nrj2); //contours s'épaississent en fonction de FFT
        noFill();
        translate(width * 0.75, height * 0.75);
        ellipse(0, 0, width * 0.1, width * 0.1);
        pop();

        pop();
    }


    ////// 2 CERCLES COULEUR CHANGE AVEC AMPLITUDE
    //son: Pays imaginaires, de Polo&Pan

    playSong(song4, 78); //n
    if (song4.isPlaying() == true) {
        push();
        var amplitude = song4Amp.getLevel();
        var whiteLevel = map(amplitude, 0, 0.1, 20, 255); // map(valeur à transformer, sa valeur min, sa valeur max, la valeur min à lui attribuer, sa valeur max à lui attribuer)


        push();
        noStroke();
        fill(whiteLevel, 0, 200); //la couleur dépend du niveau sonore du son
        ellipse(0, 0, width, width);
        pop();

        push();
        noStroke();
        fill(whiteLevel, whiteLevel, 0, 200); //la couleur dépend du niveau sonore du son
        ellipse(width, height, width, width);
        pop();

        pop();
    }







    ////// TRIANGLE QUI S'AGRANDIT
    //son: Pays imaginaires, de Polo&Pan

    playSong(song12, 68); //d
    if (song12.isPlaying() == true) {
        push();
        var cote = map(song12.currentTime(), 0, song12.duration(), 50, width - 70); // le rayon dépend de la durée du son: map(moment du son, moment 0 du son, moment de fin du son, hauteur max, largeur max)

        fill(246, 207, 20, 240);
        noStroke();
        triangle(width * 0.25, height * 0.5, width * 0.5 - cote, height * 0.25 - cote, width * 0.25 + cote, height * 0.25 + cote);
        pop();
    }


    ////// "EROTIQUE"
    //son: Coeur d'artichaud, de Polo&Pan

    playSong(song6, 89); //y
    if (song6.isPlaying() == true) {
        push();
        var nsegment = 96;
        var ncurrentsegment = (map(song6.currentTime(), 0, song6.duration(), 0, nsegment + 1));
        for (var i = 0; i < ncurrentsegment; i++) {
            stroke(255);
            strokeWeight(4);
            var angle = map(i, 0, nsegment, 0, TWO_PI);
            var x = width * 0.5 + height * 0.45 * cos(angle);
            var y = height * 0.5 + height * 0.45 * sin(angle);
            line(width * 0.5, height * 0.5, x, y);
        }

        pop();
    }




    /////// CERCLE POLAIRE
    //son: Coeur d'artichaud, de Polo&Pan

    playSong(song7, 73); //i
    if (song7.isPlaying() == true) {
        push();
        var ncercle = 96;
        var ncurrentcercle = (map(song7.currentTime(), 0, song7.duration(), 0, ncercle + 1));
        for (var i = 0; i < ncurrentcercle; i++) {
            stroke(246, 207, 20, 240);
            strokeWeight(4);
            noFill();
            var angle = map(i, 0, ncercle, 0, TWO_PI);
            var x = width * 0.5 + height * 0.45 * cos(angle);
            var y = height * 0.5 + height * 0.45 * sin(angle);
            ellipse(width * 0.5, height * 0.5, x, y);
        }

        pop();
    }


    /////// RECTANGLE POLAIRE
    //son: Canope, de Polo&Pan

    playSong(song8, 81); //q
    if (song8.isPlaying() == true) {
        push();
        var nrect = 96;
        var ncurrentrect = (map(song8.currentTime(), 0, song8.duration(), 0, nrect + 1));
        for (var i = 0; i < ncurrentrect; i++) {
            stroke(246, 207, 20, 240);
            strokeWeight(4);
            noFill();
            var angle = map(i, 0, nrect, 0, TWO_PI);
            var x = width * 0.01 + height * 0.45 * cos(angle);
            var y = height * 0.01 + height * 0.45 * sin(angle);
            rect(width * 0.5, height * 0.5, x, y);
        }

        pop();
    }


    /////// TRIANGLE POLAIRE
    //son: Canope, de Polo&Pan

    playSong(song9, 87); //w
    if (song9.isPlaying() == true) {
        push();
        var ntri = 35;
        var ncurrenttri = (map(song9.currentTime(), 0, song9.duration(), 0, ntri + 1));
        for (var i = 0; i < ncurrenttri; i++) {
            stroke(246, 207, 20, 240);
            strokeWeight(4);
            noFill();
            var angle = map(i, 0, ntri, 0, TWO_PI);
            var x = width * 0.5 + height * 0.3 * cos(angle);
            var y = height * 0.5 + height * 0.3 * sin(angle);
            var x2 = width * 0.5 + height * 0.3 * cos(angle + PI / 24);
            var y2 = height * 0.5 + height * 0.3 * sin(angle + PI / 24);
            triangle(width * 0.5, height * 0.5, x, y, x2, y2);
        }

        pop();
    }



    ////// 3 LOSANGES FFT
    //son: Nana, de Polo&Pan

    playSong(song5, 69); //e
    if (song5.isPlaying() == true) {

        push();
        song5FFT.analyze();
        rectMode(CENTER);
        var nrj1 = song5FFT.getEnergy("bass");


        push();
        fill(246, 207, 20, nrj1); //opacité dépend de FFT
        translate(width * 0.25, height * 0.5);
        rotate(PI / 4);
        rect(0, 0, width * 0.2, width * 0.2);
        pop();

        push();
        fill(246, 207, 20, nrj1); //opacité dépend de FFT
        translate(width * 0.75, height * 0.5);
        rotate(PI / 4);
        rect(0, 0, width * 0.2, width * 0.2);
        pop();

        push();
        fill(255, 84, 175, 130); //opacité dépend de FFT
        translate(width * 0.5, height * 0.5);
        rotate(PI / 4);
        rect(0, 0, nrj1, nrj1);
        pop();

        pop();
    }



    /////// FAT WAVEFORM FFT
    //son: Coeur d'artichaud, de Polo&Pan

    playSong(song3, 84); //t

    if (song3.isPlaying() == true) {

        push();
        var wavef = song3FFT.waveform();
        fill(246, 207, 20);
        beginShape(); //on va dessiner une forme: ligne reliant tous les vertex
        stroke(255);
        strokeWeight(58);
        for (var i = 0; i < wavef.length; i++) { // on parcours le tableau de 0 à 1023, en ajoutant 1 à i à chaque étape
            var x = map(i, 0, wavef.length, 0, width); // abscisse dépendant de i, occupant la largeur de la fenetre
            var y = map(wavef[i], -0.11, 0.11, 0, height); // ordonnée dépendant de la valeur de la donnée dans la case i
            curveVertex(x, y); //point de la courbe selon x et y
        }
        endShape();
        pop();

    }


    /////// WTF WAVEFORM FFT
    //son: Pays imaginaire, de Polo&Pan

    playSong(song15, 79); //o

    if (song15.isPlaying() == true) {

        push();
        var wavef = song15FFT.waveform();
        noFill();
        beginShape(); //on va dessiner une forme: ligne reliant tous les vertex
        stroke(246, 207, 20);
        strokeWeight(15);
        for (var i = 0; i < wavef.length; i++) { // on parcours le tableau de 0 à 1023, en ajoutant 1 à i à chaque étape
            var x = map(i, 0, wavef.length, 0, width); // abscisse dépendant de i, occupant la largeur de la fenetre
            var y = map(wavef[i], -0.11, 0.11, 0, height); // ordonnée dépendant de la valeur de la donnée dans la case i
            curveVertex(x, y); //point de la courbe selon x et y
        }
        endShape();
        pop();

    }




    /////// RECTANGLE QUI TOURNE + CERCLE
    //son: Nana, de Polo&Pan

    playSong(song16, 70); //f
    if (song16.isPlaying() == true) {
        push();

        translate(width * 0.5, height * 0.5); //on déplace le rect vers le centre de la fenetre
        var ang = map(song16.currentTime(), 0, song16.duration(), 0, PI); // rotation du rect autour du centre, pendant le tps de son
        rectMode(CENTER);
        rotate(ang);

        push();
        stroke(246, 207, 20);
        strokeWeight(15);
        noFill();
        rect(0, 0, width * 0.25, height * 0.1);
        pop();

        push();
        stroke(246, 207, 20);
        strokeWeight(10);
        noFill();
        ellipse(0, 0, (width * 0.5) - 40, (width * 0.5) - 40);
        pop();

        pop();

    }


    /////// 3 RECTANGLES QUI TOURNENT
    //son: Pays imaginaire, de Polo&Pan

    playSong(song17, 66); //b
    if (song17.isPlaying() == true) {
        push();

        translate(width * 0.5, height * 0.5); //on déplace le rect vers le centre de la fenetre
        var ang = map(song17.currentTime(), 0, song17.duration(), 0, PI); // rotation du rect autour du centre, pendant le tps de son
        rectMode(CENTER);
        rotate(ang);

        push();
        stroke(246, 207, 20);
        strokeWeight(8);
        noFill();
        rect(-100, -100, width * 0.25, height * 0.1);
        pop();

        push();
        stroke(246, 207, 20);
        strokeWeight(8);
        noFill();
        rect(0, 100, width * 0.25, height * 0.1);
        pop();



        push();
        fill(246, 207, 20);
        noStroke();
        rect(100, 0, width * 0.25, height * 0.1);
        pop();

        pop();

    }







}


/////////////////////////////////////////////////////////////////

function playSong(song, keyId) {
    if (keyIsDown(keyId) == true) {
        if (song.isPlaying() == false) {
            song.play();
        }
    }
}



function windowResized() {
    resizeCanvas(windowWidth, windowHeight);

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
        vertex(sx, sy); //on relie les points des 2 cercles
    }
    endShape(CLOSE);
}

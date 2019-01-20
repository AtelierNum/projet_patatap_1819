// On déclare l'nesemble des variables qui interviendront dans le code
var sound1
var sound2
var sound3
var sound4
var sound5
var sound6
var sound7
var sound8
var sound9
var sound10
var sound11
var sound12
var sound13
var sound14
var sound15
var sound16
var sound17
var sound18
var sound19
var sound20
var sound21
var sound22
var sound23
var sound24
var sound25
var sound26
var sound3FFT
var sound5FFT
var sound6FFT
var sound6amp
var sound7FFT
var sound7Amp
var sound9FFT
var sound11FFT
var sound15FFT
var sound17FFT
var sound18FFT
var sound19FFT
var sound22FFT
var sound23FFT
var sound24Amp
var nrj1
var lenght
var xpos = []
var ypos = []
var xtarget = []
var ytarget = []
var anim1 = {
    w: 0
}
var anim2 = {
    ww: 0
}
var anim3 = {
    w: 0
}
var pg
var xpos3 = 0
var ypos3 = 0
var xdir = 5
var ydir = 5
var NUMSINES = 1
var sines = new Array(NUMSINES)
var fund = 0.01
var fund2 = 0.047
var ratio = 1
var alpha = 50
var trace = true
var font,
    fontsize = 100
var sines2 = new Array(NUMSINES)
var fund3 = 0.01

function preload() {
    //On charge les sons que l'ont veut associer aux touches du clavier
    sound1 = loadSound("../assets/1_DrumsKick.mp3")
    sound2 = loadSound("../assets/2_Snare.mp3")
    sound3 = loadSound("../assets/3_RimShot2.mp3")
    sound4 = loadSound("../assets/4_808long.mp3")
    sound5 = loadSound("../assets/5_Strarstruck.wav")
    sound6 = loadSound("../assets/6_SWGmusicloop.wav")
    sound7 = loadSound("../assets/7_Kick_treble.wav")
    sound8 = loadSound("../assets/8_SGH_Drum_Loop.wav")
    sound9 = loadSound("../assets/9_Eb_synth.wav")
    sound10 = loadSound("../assets/10_snare_clap.wav")
    sound11 = loadSound("../assets/11_LL_138.wav")
    sound12 = loadSound("../assets/12_VoxMelody.mp3")
    sound13 = loadSound("../assets/13_Ouverture.mp3")
    sound14 = loadSound("../assets/14_Transmutation1.mp3")
    sound15 = loadSound("../assets/15_Emergence2.mp3")
    sound16 = loadSound("../assets/16_Danger3.mp3")
    sound17 = loadSound("../assets/17_mos2.mp3")
    sound18 = loadSound("../assets/18_mos3.mp3")
    sound19 = loadSound("../assets/19_Its_Time.mp3")
    sound20 = loadSound("../assets/20_Transmutation2.mp3")
    sound21 = loadSound("../assets/21_DirtyWobble3.mp3")
    font = loadFont("../assets/Montserrat-Thin.ttf")
    sound22 = loadSound("../assets/22_DirtyWobble2.mp3")
    sound23 = loadSound("../assets/23_LL_riser.mp3")
    sound24 = loadSound("../assets/24_Frankum.mp3")
    sound25 = loadSound("../assets/25_tpmz.wav")
    sound26 = loadSound("../assets/26_syphonfilter2.mp3")

}

function setup() {

    createCanvas(windowWidth, windowHeight)

    //On branche P5 sur les sons pour qu'il les analyse
    sound3FFT = new p5.FFT(0.8, 16)
    sound3FFT.setInput(sound3)
    sound5FFT = new p5.FFT(0.8, 1024)
    sound5FFT.setInput(sound5)
    sound6FFT = new p5.FFT(0.8, 16)
    sound6FFT.setInput(sound6)
    sound6Amp = new p5.Amplitude()
    sound6Amp.setInput(sound6)
    sound7FFT = new p5.FFT(0.8, 16)
    sound7FFT.setInput(sound7)
    sound7Amp = new p5.Amplitude()
    sound7Amp.setInput(sound7)
    sound8FFT = new p5.FFT(0.8, 16)
    sound8FFT.setInput(sound8)
    sound9FFT = new p5.FFT(0.8, 16)
    sound9FFT.setInput(sound9)
    sound11FFT = new p5.FFT(0.8, 16)
    sound11FFT.setInput(sound11)
    sound15FFT = new p5.FFT(0.8, 16)
    sound15FFT.setInput(sound15)
    sound17FFT = new p5.FFT(0.8, 1024)
    sound17FFT.setInput(sound17)
    sound18FFT = new p5.FFT(0.8, 1024)
    sound18FFT.setInput(sound18)
    sound19FFT = new p5.FFT(0.8, 16)
    sound19FFT.setInput(sound19)
    sound22FFT = new p5.FFT(0.8, 16)
    sound22FFT.setInput(sound22)
    sound23FFT = new p5.FFT(0.8, 16)
    sound23FFT.setInput(sound23)
    sound24Amp = new p5.Amplitude()
    sound24Amp.setInput(sound24)

    for (var i = 0; i < 50; i++) {
        xpos.push(random(0, width))
        ypos.push(random(0, -height))
        xtarget.push(random(width))
        ytarget.push(random(height))
    }

    //On créée un nouveau calque de dessin
    pg = createGraphics(windowWidth, windowHeight)
    pg.pixelDensity(1)

    rad = height / 4

    for (var i = 0; i < sines.length; i++) {
        sines[i] = PI
    }
    for (var i = 0; i < sines2.length; i++) {
        sines2[i] = PI
    }

    textFont(font)
    textSize(fontsize)
    textAlign(CENTER, CENTER)
}


function draw() {
    background(0)

    //On appelle une fonction qui nous sert à associer les sons aux touches du clavier
    playSound(sound1, 65)
    playSound(sound2, 66)
    playSound(sound3, 67)
    playSound(sound4, 68)
    playSound(sound5, 69)
    playSound(sound6, 70)
    playSound(sound7, 71)
    playSound(sound8, 72)
    playSound(sound9, 73)
    playSound(sound10, 74)
    playSound(sound11, 75)
    playSound(sound12, 76)
    playSound(sound13, 77)
    playSound(sound14, 78)
    playSound(sound15, 79)
    playSound(sound16, 80)
    playSound(sound17, 81)
    playSound(sound18, 82)
    playSound(sound19, 83)
    playSound(sound20, 84)
    playSound(sound21, 85)
    playSound(sound22, 86)
    playSound(sound23, 87)
    playSound(sound24, 88)
    playSound(sound25, 89)
    playSound(sound26, 90)


    //SON1 - A
    if (sound1.isPlaying() == true) {

        push()
        noStroke()
        fill(255, 255, 255)
        rect(0, 0, windowWidth / 2, windowHeight)
        pop()
    }

    //SON2 - B
    if (sound2.isPlaying() == true) {
        push()
        noStroke()
        fill(255, 255, 255)
        rect(windowWidth / 2, 0, windowWidth / 2, windowHeight)
        pop()
    }

    //SON23 - W
    if (sound23.isPlaying() == true) {
        var duration = map(sound23.currentTime(), 0, sound23.duration(), 0, 250)
        //On appelle une fonction qui dessine des cercles : function drawTarget(xloc, yloc, size, num)
        //Les cerlces ont tous une valeur de gris selon leur nombre : 255/num
        drawTarget(width * 0.25, height * 0.4, duration * 1.5, 40)
        drawTarget(width * 0.5, height * 0.5, duration, 70)
        drawTarget(width * 0.75, height * 0.3, duration * 1.7, 50)
    }

    //SON4 - D
    if (sound4.isPlaying() == true) {
        push()
        //La taille et l'opacité du cercle sont dénifies par la durée du son grâce à la fonction map
        var alpha = map(sound4.currentTime(), 0, sound4.duration(), 255, 0)
        var radius = map(sound4.currentTime(), 0, sound4.duration(), width, 0)
        noStroke()
        fill(255, 255, 0, alpha)
        ellipse(width * 0.5, height * 0.5, radius, radius)
        pop()
    }

    //SON11 - K
    if (sound11.isPlaying() == true) {
        push()
        sound11FFT.analyze();
        var nrj1 = sound11FFT.getEnergy("treble")
        var alpha = map(nrj1, 180, 210, 150, 255)
        noStroke()
        fill(255, 255, 0, alpha)
        rect(0, 0, width / 2, height / 2)
        rect(width / 2, height / 2, width / 2, height / 2)
        pop()
    }

    //SON20 - T
    if (sound20.isPlaying() == true) {
        //Le point se déplace dans la fenêtre et "rebondit" contre les bords
        xpos3 += xdir
        ypos3 += ydir
        if (xpos3 > width || xpos3 < 0) {
            xdir *= -1
        }
        if (ypos3 > height || ypos3 < 0) {
            ydir *= -1
        }
        pg.noStroke()
        //La couleur du point est totalement aléatoire
        pg.fill(random(0, 255), random(0, 255), random(0, 255))
        pg.ellipse(xpos3, ypos3, 7, 7)

        image(pg, 0, 0, width, height)

    } else {
        //On supperpose les points dans le calque que l'on a créé dans le setup, ce qui créée une traînée de points multicolores
        pg = createGraphics(windowWidth, windowHeight)
        pg.pixelDensity(1)
        //Le 1er point apparait à une position aléatoire en x avec une direction aléatoire
        xpos3 = random(width)
        ypos3 = height / 2
        //L'intervalle 1 [1, 100] permet aussi de faire varier l'espacement entre les points qui suivent
        xdir = random(1, 100)
        ydir = random(1, 100)
    }

    //SON26 - Z
    if (sound26.isPlaying() == true) {
        let t = 0
        //On créée un répère x,y pour y mettre des points
        for (let x = 0; x <= width * 1.2; x = x + 30) {
            for (let y = 0; y <= height * 1.2; y = y + 30) {
                //La position des points varie en fonction de la durée du son
                let xAngle = map(sound26.currentTime(), 0, sound26.duration(), -8 * PI, 4 * PI, true)
                let yAngle = map(sound26.currentTime(), 0, sound26.duration(), -4 * PI, 4 * PI, true)
                //L'angle est définie pour chaque point en fonction de sa position
                let angle = xAngle * (x / width) + yAngle * (y / height)

                //Chaque point tourne
                let myX = x + 20 * cos(0.5 * PI * t + angle)
                let myY = y + 20 * sin(0.5 * PI * t + angle)

                noStroke()
                fill(40, 255, 40)
                ellipse(myX, myY, 10)
            }
        }

        t = t + 0.01
    }


    //SON3 - C
    if (sound3.isPlaying() == true) {
        push()
        sound3FFT.analyze();
        var nrj1 = sound3FFT.getEnergy("bass")

        push()
        strokeWeight(1)
        stroke(255, 0, 255)
        noFill()
        //La taille de l'ellipse est définie  par le son que P5 capte, les graves en l'occurence
        ellipse(width * 0.5, height * 0.5, nrj1 * 1.2, nrj1 * 1.2)
        pop()

        pop()
    }

    //SON5 - E
    if (sound5.isPlaying() == true) {

        push()
        sound5FFT.analyze();
        var nrj1 = sound5FFT.getEnergy("treble")

        push()
        var lenght = map(sound5.currentTime(), 0, sound5.duration(), 0, width)
        var couleur = map(nrj1, 60, 100, 60, 255)
        noStroke()
        rectMode(CENTER)
        //Le rectangle s'étire en fonction de la durée du son, il grandit et change de couleur en fonction des aigües
        fill(0, 255, couleur)
        rect(width * 0.5, height * 0.5, lenght, nrj1 * 1.5)

        pop()
        pop()
    }

    //SON9 - I
    if (sound9.isPlaying() == true) {
        push()
        var nsegment = 96
        var ncurrentsegment = (map(sound9.currentTime(), 0, sound9.duration(), 0, nsegment + 1))
        //Chaque composante de couleur évolue au fil du temps
        var couleur1 = map(sound9.currentTime(), 0, sound9.duration(), 0, 255)
        var couleur2 = map(sound9.currentTime(), 0, sound9.duration(), 255, 0)
        var couleur3 = map(sound9.currentTime(), 0, sound9.duration(), 255, 0)
        for (var i = 0; i < ncurrentsegment; i++) {
            stroke(couleur1, couleur2, couleur3);
            strokeWeight(1)
            //On créée 2 ellipse décentrées
            var angle = map(i, 0, nsegment, 0, TWO_PI);
            var x = width * 0.7 + height * 0.45 * cos(angle);
            var y = height * 0.5 + height * 0.45 * sin(angle);
            line(width * 0.5, height * 0.5, x, y);
            var angle = map(i, 0, nsegment, TWO_PI, 0);
            var x1 = width * 0.3 + height * 0.45 * cos(angle);
            var y1 = height * 0.5 + height * 0.45 * sin(angle);
            line(width * 0.5, height * 0.5, x1, y1);

        }
        pop()
    }

    //SON25 - Y
    if (sound25.isPlaying() == true) {
        push()
        var theta = map(sound25.currentTime(), 0, sound25.duration(), 0, PI / 2)
        var ypos1 = height - sin(theta) * width * 0.52
        fill(153, 255, 255)
        noStroke()
        rectMode(CENTER)
        rect(width / 2, ypos1, ypos1, ypos1);
        pop()
    }

    //SON6 - F
    if (sound6.isPlaying() == true) {

        push()
        sound6FFT.analyze();
        var nrj1 = sound6FFT.getEnergy("treble")

        push()
        rectMode(CENTER)
        noStroke()
        fill(255, 0, 0)
        //Le volume change suivant la position en y de la souris
        var volume = map(mouseY, 0, height, 1.5, 0);
        volume = constrain(volume, 0, 1);
        sound6.amp(volume);

        for (var i = 0; i < 20; i++) {
            var hauteur = map(nrj1, 0, 255, 0, 3)
            var xpos2 = (i % 20) * width * 0.025 + width * 0.05
            //La position et la taille des rectangle dépendent de la position en y de la souris
            var ypos2 = map(mouseY, 0, height, height, 0)
            rect(xpos2, mouseY, 5, hauteur * ypos2)
        }
        pop()
        pop()
    }



    //SON13 - M
    if (sound13.isPlaying() == true) {
        fill(0)
        noStroke()
        ellipse(width / 2, height / 2, height * 2/3, height * 2/3)
        push()
        translate(width / 2, height / 2)
        //Cette animation est prévue à l'origine pour faire un spirographe avec le nombre de cercle que l'on souhaite
        //ici on ne dessine qu'un cercle
        for (var i = 0; i < sines.length; i++) {
            var erad = 0
            stroke(0, 0, 255)
            noFill()
            erad = 20
            //On dessine une ellipse qui tourne sur elle même
            var radius = rad / (i + 1)
            rotate(sines[i])
            ellipse(0, 0, radius * 2, radius * 2)
            push()
            translate(0, radius)

            noStroke()
            fill(0)
            erad = 20
            //On dessine une autre ellipse qui tourne sur la 1ere, noire sur fond noir elle apparait comme un trou
            ellipse(0, 0, erad, erad)
            pop()
            translate(0, radius)
            sines[i] = (sines[i] + (fund + (fund * i * ratio))) % TWO_PI
        }

        pop()
    }

    //SON14 - N
    if (sound14.isPlaying() == true) {
        push()
        translate(width / 2, height / 2)
        //Dans cette animation on reprend la précédente et on la complète en dessinant un petit cercle à l'endroit vide de la grande ellipse, la viteese de rotation des 2 cercles augmente pendant la durée du son
        for (var i = 0; i < sines.length; i++) {
            if (trace) {
                stroke(255, 255, 0)
                noFill()
                erad = 20
            }
            var radius = rad / (i + 1)
            rotate(sines[i])
            push()
            translate(0, radius)
            if (trace) ellipse(0, 0, 5, 5)
            if (trace) ellipse(0, 0, erad, erad)
            pop()
            translate(0, radius)
            sines[i] = (sines[i] + (fund2 + (fund2 * i * ratio))) % TWO_PI
        }

        pop()
    }


    //SON 15 - O
    if (sound15.isPlaying() == true) {
        push()
        sound15FFT.analyze();
        var nrj1 = sound15FFT.getEnergy("bass")
        push()
        var taille = map(nrj1, 0, 210, 0, 30)
        noStroke()
        //La couleur évolue du rouge au vert
        fill(frameCount % 255, 255 - frameCount % 255, 0)
        //On affiche 100 cerlces allignés en lignes/colonnes
        for (var i = 0; i < 100; i++) {
            var xpos1 = (i % 10) * width * 0.10 + width * 0.05
            var ypos1 = int(i / 10) * height * 0.10 + height * 0.05
            ellipse(xpos1, ypos1, taille, taille)

        }
        pop()
        pop()
    }


    //SON16 - P
    if (keyIsDown(80)) {
        anim2 = {
            ww: 0
        }
        //On définie un objet avec des propriétés
        var animation2 = anime({
            targets: anim2,
            ww: height * 0.4,
            easing: [.91, -0.54, .29, 1.56],
            direction: 'alternate',
            loop: true,
        });
    }
    if (sound16.isPlaying() == true) {
        push()
        noFill()
        stroke(255, 100, 0)
        //On appelle cet objet pour paramétrer la dimension de nos rectangles
        rect(width * 0.5, height * 0.5, anim2.ww, anim2.ww)
        stroke(0, 255, 0)
        rect(width * 0.5, height * 0.5, -anim2.ww, -anim2.ww)

        pop()
    }


    //SON18 - R
    if (sound18.isPlaying() == true) {
        push()
        sound18FFT.analyze()
        var nrj1 = sound18FFT.getEnergy("treble")
        var radius = map(sound18.currentTime(), 0, sound18.duration(), 10, height)
        var radius2 = map(sound18.currentTime(), 0, sound18.duration(), height, 0)
        strokeWeight(1)
        stroke(255, 100, 0)
        noFill()
        ellipse(width * 0.5, height * 0.5, radius + nrj1 * 0.8, radius + nrj1 * 0.8)
        stroke(50, 100, 255)
        ellipse(width * 0.5, height * 0.5, radius2 + -nrj1 * 0.8, radius2 + -nrj1 * 0.8)
        pop()
    }

    //SON19 - S
    if (sound19.isPlaying() == true) {
        push()
        sound19FFT.analyze()
        var nrj1 = sound19FFT.getEnergy("treble")
        fill(200, 200, 220)
        noStroke()
        var x = map(sound19.currentTime(), 0, sound19.duration(), 10, width)
        var y = map(nrj1, 0, 127, height / 2, 0)
        //L'ellipse se déplace en x et monte en y suivant les aigües
        ellipse(x, y, 30, 30)
        pop()
    }


    //SON8 - H
    if (sound8.isPlaying() == true) {
        push()
        sound8FFT.analyze();
        var nrj1 = sound8FFT.getEnergy("treble")
        var nrj3 = sound8FFT.getEnergy("bass")
        var couleur = map(nrj1, 0, 255, 0, 255)
        var couleur2 = map(nrj3, 0, 255, 0, 255)
        rectMode(CENTER)
        stroke(couleur2, 0, couleur)
        strokeWeight(1)
        noFill()
        line(width / 4, height - nrj1, width / 4, nrj1)
        line(width * 3 / 4, height - nrj1, width * 3 / 4, nrj1)
        line(width / 2, height - nrj1, width / 2, nrj1)
        pop()
    }

    //SON10 - J
    if (sound10.isPlaying() == true) {
        push()

        var t = map(sound10.currentTime(), 0, sound10.duration() * 0.75, 0, 1)
        t = constrain(t, 0, 1)
        stroke(0, random(0, 255), random(0, 255))
        noFill()
        for (var i = 0; i < 50; i++) {
            //L'ellipse se déplace de xpos à xtarget entre le début et la fin du son
            var x = lerp(xpos[i], xtarget[i], t)
            var y = lerp(ypos[i], ytarget[i], t)
            ellipse(x, y, 50, 50)
        }
        pop()
    }

    //SON7 - G
    if (sound7.isPlaying() == true) {
        push()
        var amp = sound7Amp.getLevel()
        var whiteLevel = map(amp, 1, 0, 255, 20)
        noStroke()
        fill(whiteLevel, 240)
        rect(0, 0, width, height)
        pop()
        push()
    }

    //SON12 - L
    if (keyIsDown(76)) {
        anim1 = {
            w: 0
        }
        var animation1 = anime({
            targets: anim1,
            w: height * 0.4,
            easing: [.91, -0.54, .29, 1.56],
            direction: 'alternate',
            loop: true,
        });
    }
    if (sound12.isPlaying() == true) {
        push()
        noFill()
        stroke(255, 0, 0)
        ellipse(width * 0.5, height * 0.5, anim1.w, anim1.w)
        pop()
    }

    //SON24 - X
    if (sound24.isPlaying() == true) {
        push()
        //Même animation que pour le M et le N mais décliné sur une autre forme
        translate(width / 2, height / 2)
        for (var i = 0; i < sines2.length; i++) {
            var amp = sound24Amp.getLevel()
            var green = map(amp, 0.5, 0, 255, 0)
            stroke(0, green, 0)
            strokeWeight(amp * 10)
            noFill()
            erad = 20
            var radius = rad / (i + 1)
            rotate(sines2[i])
            triangle(width / 2, height, 1, 0, 0, 0)
            sines2[i] = (sines2[i] + (fund3 + (fund3 * i * ratio))) % TWO_PI
        }
        pop()
    }

    //SON21 - U
    if (sound21.isPlaying() == true) {
        push()
        noStroke()
        //On fait apparaitre des mots aléatoirement
        fill(random(0, 255), random(0, 255), random(0, 255));
        text("AH AH", random(width), random(height))
        pop()
    }

    //SON17 - Q
    if (sound17.isPlaying() == true) {
        push()
        //Ici on dessine une waveform du son
        var waveform = sound17FFT.waveform()
        noFill()
        beginShape()
        stroke(50, 50, 50)
        strokeWeight(2)
        for (var i = 0; i < waveform.length; i++) {
            var x = map(i, 0, waveform.length, 0, width)
            var y = map(waveform[i], -12, 12, 0, height)
            curveVertex(x, y)
        }
        endShape()
        pop()
    }

    //SON22 - V
    if (sound22.isPlaying() == true) {
        //Ici, c'est le spectre du son que l'on dessine
        var spectrum = sound22FFT.analyze();

        beginShape();
        for (i = 0; i < spectrum.length; i++) {
            noFill()
            stroke(255)
            var x = map(i, 0, spectrum.length, 0, width * 1.2)
            var y = map(spectrum[i], 0, 255, height * 1.5, height * 0.05)
            vertex(x, y);
        }
        endShape();
    }

}

//Fonction pour dessiner des cercles en dégradé de gris
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
    if (keyIsDown(keyId) == true && sound.isPlaying() == false) {
        sound.play()
    }
}


function windowResized() {
    resizeCanvas(windowWidth, windowHeight)
}

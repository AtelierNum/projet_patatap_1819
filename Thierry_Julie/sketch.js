// son a //
var sound1
var analyzer

// son z //
var sound3
var xos = []
var yos = []
var xtarget = []
var ytarget = []

// son e //
var sound2
var sound2FFT

// son r //
var sound4

// son t //
var sound5

// son y //
var sound6
var sound6Amp

// son u //
var sound7
var sound7FFT

// son i //
var sound8

// son o //
var sound9

// son p //
var sound10
var ecran
var xp = 0
var yp = 0
var xpdir = 5
var ypdir = 5

// son q //
var sound11
var a
var b

// son s //
var sound12
let c = 0.0
let d = 0.0

// son d //
var sound13
var dcercle

// son f //
var sound14
let f = 0

// son g //
var sound15

// son h //
var sound16

// son j //
var sound17

// son k //
var sound18
var ta

// son l //
var sound19
var vitesse
var diametre
var x
var y

// son m //
var sound20

// son w //
var sound21

// son x //
var sound22

// son c //
var sound23
var xc


// son v //
var sound24

// son b //
var sound25

// son n //
var sound26
var startAngle = 0
var angleVel = 0.4

function preload() { // insertion des différents son//
    sound1 = loadSound('../assets/Sound1.mp3')
    sound2 = loadSound('../assets/Sound2.mp3')
    sound3 = loadSound('../assets/Sound3.mp3')
    sound4 = loadSound('../assets/Sound4.mp3')
    sound5 = loadSound('../assets/Sound5.mp3')
    sound6 = loadSound('../assets/Sound6.mp3')
    sound7 = loadSound('../assets/Sound7.mp3')
    sound8 = loadSound('../assets/Sound8.mp3')
    sound9 = loadSound('../assets/Sound9.mp3')
    sound10 = loadSound('../assets/Sound10.wav')
    sound11 = loadSound('../assets/Sound11.mp3')
    sound12 = loadSound('../assets/Sound12.mp3')
    sound13 = loadSound('../assets/Sound13.mp3')
    sound14 = loadSound('../assets/Sound14.mp3')
    sound15 = loadSound('../assets/Sound15.mp3')
    sound16 = loadSound('../assets/Sound16.mp3')
    sound17 = loadSound('../assets/Sound17.mp3')
    sound18 = loadSound('../assets/Sound18.mp3')
    sound19 = loadSound('../assets/Sound19.mp3')
    sound20 = loadSound('../assets/Sound20.mp3')
    sound21 = loadSound('../assets/Sound21.mp3')
    sound22 = loadSound('../assets/Sound22.mp3')
    sound23 = loadSound('../assets/Sound23.mp3')
    sound24 = loadSound('../assets/Sound24.mp3')
    sound25 = loadSound('../assets/Sound25.mp3')
    sound26 = loadSound('../assets/Sound26.mp3')
}

function playSound(sound, keyId) {
    if (keyIsDown(keyId) == true && sound.isPlaying() == false) {
        sound.play()
    } // Grâce à cette fonction, on associe une touche avec un son //
}

function setup() {

    createCanvas(windowWidth, windowHeight) // notre fenêtre de travaille aura la taille de la fenêtre de notre navigateur //
    pixelDensity(1)
    background(255)

    // setup a //
    analyzer = new p5.Amplitude() // on lie la variable analyzer avec l'amplitude //
    analyzer.setInput(sound1) // on lie la variable analyzer au sound, et donc à son amplitude//

    // setup z //
    for (var i = 0; i < 50; i++) {
        xos.push(random(0, width))
        yos.push(random(0, -height))
        xtarget.push(random(width))
        ytarget.push(random(height))
    }

    // setup e //

    sound2FFT = new p5.FFT(0.8, 1024)
    sound2FFT.setInput(sound2) // on lit le sound2 avec FFT //

    // setup y //
    sound6Amp = new p5.Amplitude()
    sound6Amp.setInput(sound6)

    // setup u //
    sound7FFT = new p5.FFT(0.8, 16)
    sound7FFT.setInput(sound7)

    // setup p//
    ecran = createGraphics(windowWidth, windowHeight) // animation aura la taille de l'écran //
    ecran.pixelDensity(1)

    // setup q //
    b = width
    a = height

    // setup d //
    dcercle = 0

    // setup k //
    ta = new AnimateDrawing(xpos0, ypos0, 1)

    // setup c //
    xc = width * 0.5
    yc = height
}

function draw() {
    background(5)
    noStroke()

    // animation y //
    playSound(sound6, 89); // On joue le son en appuyant sur la touche y  //
    if (sound6.isPlaying() == true) { // si le son est joué, l'animation se déclache //

        push() // mettre les éléments d'animation dans push et pop pour éviter qui altére les autres éléments //

        var amp = sound6Amp.getLevel() // l'amplitude du son sera calculée et aura comme nom amp //
        var whiteLevel = map(amp, 0, 0.1, 0, 255) // le nouveau de blanc varie en fonction de l'amplitude du son

        noStroke()
        fill(whiteLevel) // on attribue la variation de la couleur à notre rectangle //
        rect(0, 0, width, height) // le rectangle aurait la taille de la fenêtre de navigateur
        pop()
    }

    // animation q //
    playSound(sound11, 81)
    if (sound11.isPlaying() == true) {

        push() // quand quand le son est joué, des lines à des positions différents dépendants du quotient de leur a et de leur b (valeur de a et de b décrite dans le setup) //

        line(b * 0.1, 0, b * 0.1, a)
        stroke(0, 0, 255)
        strokeWeight(2)

        line(b * 0.02, 0, b * 0.02, a)
        stroke(255, 255, 0)

        line(b * 0.04, 0, b * 0.04, a)
        stroke(255, 100, 100)

        line(b * 0.06, 0, b * 0.06, a)
        stroke(0, 255, 0)

        line(b * 0.08, 0, b * 0.08, a)
        stroke(255, 0, 255)

        line(b * 0.10, 0, b * 0.10, a)
        stroke(0, 255, 255)

        line(b * 0.12, 0, b * 0.12, a)
        stroke(0, 0, 255)

        line(b * 0.14, 0, b * 0.14, a)
        stroke(255, 255, 0)

        line(b * 0.16, 0, b * 0.16, a)
        stroke(255, 100, 100)

        line(b * 0.18, 0, b * 0.18, a)
        stroke(0, 255, 0)

        line(b * 0.2, 0, b * 0.2, a)
        stroke(255, 0, 255)

        line(b * 0.22, 0, b * 0.22, a)
        stroke(0, 255, 255)

        line(b * 0.24, 0, b * 0.24, a)
        stroke(0, 0, 255)

        line(b * 0.26, 0, b * 0.26, a)
        stroke(255, 255, 0)

        line(b * 0.28, 0, b * 0.28, a)
        stroke(255, 100, 100)

        line(b * 0.3, 0, b * 0.3, a)
        stroke(0, 255, 0)

        line(b * 0.32, 0, b * 0.32, a)
        stroke(255, 0, 255)

        line(b * 0.34, 0, b * 0.34, a)
        stroke(0, 255, 255)

        line(b * 0.36, 0, b * 0.36, a)
        stroke(0, 0, 255)

        line(b * 0.38, 0, b * 0.38, a)
        stroke(255, 255, 0)

        line(b * 0.4, 0, b * 0.4, a)
        stroke(255, 100, 100)

        line(b * 0.42, 0, b * 0.42, a)
        stroke(0, 255, 0)

        line(b * 0.44, 0, b * 0.44, a)
        stroke(255, 0, 255)

        line(b * 0.46, 0, b * 0.46, a)
        stroke(0, 255, 255)

        line(b * 0.48, 0, b * 0.48, a)
        stroke(0, 0, 255)

        line(b * 0.5, 0, b * 0.5, a)
        stroke(255, 255, 0)

        line(b * 0.52, 0, b * 0.52, a)
        stroke(255, 100, 100)

        line(b * 0.54, 0, b * 0.54, a)
        stroke(0, 255, 0)

        line(b * 0.56, 0, b * 0.56, a)
        stroke(255, 0, 255)

        line(b * 0.58, 0, b * 0.58, a)
        stroke(0, 255, 255)

        line(b * 0.6, 0, b * 0.6, a)
        stroke(0, 0, 255)

        line(b * 0.6, 0, b * 0.6, a)
        stroke(255, 255, 0)

        line(b * 0.62, 0, b * 0.62, a)
        stroke(255, 100, 100)
        strokeWeight(2)

        line(b * 0.64, 0, b * 0.64, a)
        stroke(0, 255, 0)
        strokeWeight(2)

        line(b * 0.66, 0, b * 0.66, a)
        stroke(255, 0, 255)

        line(b * 0.68, 0, b * 0.68, a)
        stroke(0, 255, 255)

        line(b * 0.7, 0, b * 0.7, a)
        stroke(0, 0, 255)

        line(b * 0.72, 0, b * 0.72, a)
        stroke(255, 255, 0)

        line(b * 0.74, 0, b * 0.74, a)
        stroke(255, 100, 100)

        line(b * 0.76, 0, b * 0.76, a)
        stroke(255, 100, 100)

        line(b * 0.78, 0, b * 0.78, a)
        stroke(0, 255, 0)

        line(b * 0.8, 0, b * 0.8, a)
        stroke(255, 0, 255)

        line(b * 0.8, 0, b * 0.8, a)
        stroke(0, 255, 255)

        line(b * 0.82, 0, b * 0.82, a)
        stroke(0, 0, 255)

        line(b * 0.8, 0, b * 0.8, a)
        stroke(255, 255, 0)

        line(b * 0.84, 0, b * 0.84, a)
        stroke(255, 100, 100)

        line(b * 0.86, 0, b * 0.86, a)
        stroke(0, 255, 0)

        line(b * 0.88, 0, b * 0.88, a)
        stroke(255, 0, 255)

        line(b * 0.9, 0, b * 0.9, a)
        stroke(0, 255, 255)

        line(b * 0.92, 0, b * 0.92, a)
        stroke(0, 0, 255)

        line(b * 0.94, 0, b * 0.94, a)
        stroke(255, 255, 0)

        line(b * 0.96, 0, b * 0.96, a)
        stroke(255, 100, 100)

        line(b * 0.98, 0, b * 0.98, a)
        stroke(0, 255, 0)

        pop()
    }

    // animation w //
    playSound(sound21, 87)
    if (sound21.isPlaying() == true) {

        push()
        translate(0, height * 0.5) // on déplace notre ellipse //
        fill(0, 0, 255)
        rotate(frameCount / 20.0) // on fait tourne notre ellipse
        ellipse(height * 0.1, 0, width * 0.25, height * 0.5)
        pop()
    }

    // animation l //
    playSound(sound19, 76)
    if (sound19.isPlaying() == true) {

        push()
        translate(width, height)
        fill(0, 255, 0)
        rotate(frameCount / 30.0)
        triangle(width, height * 0.1, width * 0.3, 0, width * 0.6, height * 0.8)
        pop()
    }

    // animation a //
    playSound(sound1, 65);
    if (sound1.isPlaying() == true) {

        push()
        var rms = analyzer.getLevel() // l'amplitude du son sera calculée et aura comme nom rms //
        var ellipseAlpha = map(rms, 0, 1, 0, 255) // on va faire varier la taille des ellipse e, fonction de rms //

        noStroke()
        fill(0, 0, 255, ellipseAlpha)
        ellipse(width * 0.50, height * 1, 800, 800)

        fill(255, 255, 0, ellipseAlpha)
        ellipse(width * 0, height * 1, 700, 700)

        fill(255, 255, 0, ellipseAlpha)
        ellipse(width * 1, height * 0, 1000, 1000)

        fill(255, 100, 100, ellipseAlpha)
        ellipse(width * 0.5, height * 0.25, 750, 750)

        fill(255, 100, 100, ellipseAlpha)
        ellipse(width * 0.75, height * 1, 1500, 1500)

        fill(0, 255, 0, ellipseAlpha)
        ellipse(width * 1, height * 0.75, 400, 400)

        fill(255, 0, 255, ellipseAlpha)
        ellipse(width * 0.25, height * 0.5, 900, 900)

        fill(255, 255, 0, ellipseAlpha)
        ellipse(width * 0, height * 0.75, 1000, 1000)

        fill(0, 255, 255, ellipseAlpha)
        ellipse(width * 0, height * 0.25, 1000, 1000)

        pop()
    }

    // animation z //
    playSound(sound3, 90)
    if (sound3.isPlaying() == true) {

        push()
        var t = map(sound3.currentTime(), 0, sound3.duration() * 1, 0, 1) // t est composé la position de la début de la lecture et de la durée totalement du sound3 //
        var grey = map(sound3.currentTime(), sound3.duration() * 0.01, sound3.duration(), 255, 0) // grey est une valeur colorimétrique qui va varier en fonction de la position de la début de la lecture et de la durée totalement du sound3 // la duration a un quotient de 0.01, ça veut dire que grey commence à 0.01 % de sound3 //
        t = constrain(t, 0, 1) // t est contenu entre 0 et 1 //
        grey = constrain(grey, 0, 255) // grey est contenu entre 0 entre 255 //
        fill(grey) // On associe notre varialble grey à toutes les ellipses // On contraint les valeurs dans ces intervalles dans cet intervalle pour ne pas que les
        for (var i = 0; i < 50; i++) {
            var x = lerp(xos[i], xtarget[i], t) // on va fait varier les valeurs entre deux valeurs
            var y = lerp(yos[i], ytarget[i], t)
            ellipse(x, y, 50, 50)
        }
        pop()
    }

    // animation e //
    playSound(sound2, 69)
    if (sound2.isPlaying() == true) {
        push()
        var wareform = sound2FFT.waveform()
        noFill()
        beginShape() // On crée une forme linaire qui pourra briser sa linéarité à certain moment, on a besoin de Shape // x et y vont varier en fonction de wareform qui varie en fonction de l'amplitude
        stroke(255, 255, 255)
        strokeWeight(3)
        for (var i = 0; i < wareform.length; i++) {
            var x = map(i, 0, wareform.length, 0, width)
            var y = map(wareform[i], -1, 1, 0, height)
            curveVertex(x, y)
        }
        endShape()
        pop()
    }

    // animation r //
    playSound(sound4, 82)
    if (sound4.isPlaying() == true) {

        push()
        var radius = map(sound4.currentTime(), 0, sound4.duration(), 50, width) //  //

        noFill()
        stroke(0, 0, 255)
        strokeWeight(5)
        ellipse(width * 0.1, height * 0.1, radius, radius)

        stroke(255, 255, 0)
        ellipse(width * 0.2, height * 0.2, radius, radius)

        stroke(255, 100, 100)
        ellipse(width * 0.3, height * 0.3, radius, radius)

        stroke(0, 255, 0)
        ellipse(width * 0.4, height * 0.4, radius, radius)

        stroke(255, 0, 255)
        ellipse(width * 0.5, height * 0.5, radius, radius)

        stroke(255, 255, 0)
        ellipse(width * 0.6, height * 0.6, radius, radius)

        stroke(0, 255, 255)
        ellipse(width * 0.7, height * 0.7, radius, radius)

        stroke(255, 255, 0)
        ellipse(width * 0.8, height * 0.8, radius, radius)

        stroke(255, 0, 255)
        ellipse(width * 0.9, height * 0.9, radius, radius)

        pop()
    }

    // animation t //
    playSound(sound5, 84)
    if (sound5.isPlaying() == true) {
        push()
        var rotation = map(sound5.currentTime(), 0, sound5.duration(), 0, PI)

        rectMode(CENTER) // le rectangle sera au milieu //
        translate(width * 0.5, height * 0.5)
        rotate(rotation)

        fill(255, 100, 100)
        rect(0, 0, width * 0.8, height * 0.01)

        pop()
    }

    // animation u //
    playSound(sound7, 85)
    if (sound7.isPlaying() == true) {
        push()
        sound7FFT.analyze()
        rectMode(CENTER);
        var nrj1 = sound7FFT.getEnergy("bass")

        push()
        fill(150, 255, 255, ellipseAlpha)
        translate(width * 0.5, height * 0.5)
        rotate(PI / 4)
        rect(0, 0, nrj1 * 4, nrj1 * 4)
        pop()

        push()
        fill(30, 30, 30, nrj1)
        translate(width * 0.25, height * 0.5)
        rotate(PI / 4)
        rect(0, 0, width * 0.3, width * 0.3)
        pop()

        push()
        fill(30, 30, 30, nrj1)
        translate(width * 0.75, height * 0.5)
        rotate(PI / 4)
        rect(0, 0, width * 0.3, width * 0.3)
        pop()

        pop()
    }

    // animation i //
    playSound(sound8, 73)
    if (sound8.isPlaying() == true) {
        var radius = map(sound8.currentTime(), 0, sound8.duration(), 50, width)
        push()

        noFill()
        stroke(0, 0, 255)
        strokeWeight(2.5)
        ellipse(width * 0.5, height * 0.5, radius * 0.2, radius * 0.2)

        stroke(255, 255, 0)
        ellipse(width * 0.5, height * 0.5, radius * 0.4, radius * 0.4)

        stroke(255, 100, 100)
        ellipse(width * 0.5, height * 0.5, radius * 0.6, radius * 0.6)

        stroke(0, 255, 0)
        ellipse(width * 0.5, height * 0.5, radius * 0.8, radius * 0.8)

        stroke(255, 0, 255)
        ellipse(width * 0.5, height * 0.5, radius * 1, radius * 1)

        stroke(255, 255, 0)
        ellipse(width * 0.5, height * 0.5, radius * 1.2, radius * 1.2)

        stroke(0, 255, 255)
        ellipse(width * 0.5, height * 0.5, radius * 1.4, radius * 1.4)

        stroke(255, 255, 0)
        ellipse(width * 0.5, height * 0.5, radius * 1.6, radius * 1.6)

        stroke(255, 0, 255)
        ellipse(width * 0.5, height * 0.5, radius * 1.8, radius * 1.8)

        stroke(0, 0, 255)
        ellipse(width * 0.5, height * 0.5, radius * 2, radius * 2)

        stroke(255, 255, 0)
        ellipse(width * 0.5, height * 0.5, radius * 2.2, radius * 2.2)

        stroke(255, 100, 100)
        ellipse(width * 0.5, height * 0.5, radius * 2.4, radius * 2.4)

        pop()
    }

    // animation p //
    playSound(sound10, 80)
    if (sound10.isPlaying() == true) {
        xp += xpdir
        yp += ypdir
        if (xp > width || xp < 0) {
            xpdir *= -1
        }
        if (yp > height || yp < 0) {
            ypdir *= -1
        }
        ecran.noStroke()
        ecran.fill(frameCount % 255, 255 - frameCount % 255, 100)
        ecran.ellipse(xp, yp, 20, 20)
        image(ecran, 0, 0, width, height)
    } else {
        ecran = createGraphics(windowWidth, windowHeight)
        ecran.pixelDensity(1)
        xp = random(width)
        yp = random(height)
        xpdir = random(1, 7)
        ypdir = random(1, 7)
    }

    // animation o //
    playSound(sound9, 79)
    if (sound9.isPlaying() == true) {

        push()
        var nsegment = 96
        var ncurrentsegment = (map(sound9.currentTime(), 0, sound9.duration(), 0, nsegment + 1))

        for (var i = 0; i < ncurrentsegment; i++) {
            stroke(0);
            strokeWeight(4)
            var angle = map(i, 0, nsegment, 0, TWO_PI)
            var x = width * 0.5 + height * 0.45 * cos(angle);
            var y = height * 0.5 + height * 0.45 * sin(angle)
            line(width * 0.5, height * 0.5, x, y)
        }
        pop()
    }

    // animation s //
    playSound(sound12, 83)
    if (sound12.isPlaying() == true) {
        push()
        c = c + 0.04
        d = cos(c) * 3
        translate(width / 2, height / 2)
        scale(d); // On augmente d de 100 % // scale transforme la valeur en pourcentage //
        fill(0, 0, 255)
        rect(0, 0, 50, 50)
        translate(75, 0) // le rectangle se déplace à 75x //
        fill(0, 255, 255)
        scale(d) // Puis il grossit de nouveau //
        rect(0, 0, 50, 50)
        pop()
    }

    // animation d //
    playSound(sound13, 68)
    if (sound13.isPlaying() == true) {
        fill(0, 255, 255)
        ellipse(width, dcercle, width * 0.1, height * 0.2)
        dcercle += dcercle + 1
        if (dcercle >= height) dcercle = 0

    }
    // animation f //
    playSound(sound14, 70)
    if (sound14.isPlaying() == true) {
        f += 5;
        let val = cos(radians(f)) * 6.0
        for (let a = 0; a < 360; a += 75) {
            let xoff = cos(radians(a)) * val
            let yoff = sin(radians(a)) * val

            fill(255, 100, 100)
            ellipse(width / 2 + xoff, height / 2 + yoff, val, val)

            ellipse(width / 2 + xoff, height / 2 + yoff, val * 460, val * 2)

            ellipse(width / 2 + xoff, height / 2 + yoff, val * 2, val)

            ellipse(width / 2 + xoff, height / 2 + yoff, val, val * 2)

            ellipse(width / 2 + xoff, height / 2 + yoff, val * 3, val * 3)

            ellipse(width / 2 + xoff, height / 2 + yoff, val, val * 3)

            ellipse(width / 2 + xoff, height / 2 + yoff, val * 3, val)

            ellipse(width / 2 + xoff, height / 2 + yoff, val * 4, val * 4)

            ellipse(width / 2 + xoff, height / 2 + yoff, val * 5, val * 5)

            ellipse(width / 2 + xoff, height / 2 + yoff, val * 9, val * 2)

            ellipse(width / 2 + xoff, height / 2 + yoff, val * 2, val * 4)

            ellipse(width / 2 + xoff, height / 2 + yoff, val * 6, val * 7)
        }
    }
    // animation g //
    playSound(sound15, 71)
    if (sound15.isPlaying() == true) {
        push()
        var t = map(sound15.currentTime(), 0, sound15.duration() * 1, 0, 1)
        var grey = map(sound15.currentTime(), sound15.duration() * 0.5, sound15.duration(), 255, 0)
        t = constrain(t, 0, 1)
        grey = constrain(grey, 0, 255)
        fill(grey)
        for (var i = 0; i < 50; i++) {
            var x = lerp(xos[i], xtarget[i], t)
            var y = lerp(yos[i], ytarget[i], t)
            triangle(x, y, 0, 0, 90, 90)
        }
        pop()
    }

    // animation h //
    playSound(sound16, 72)
    if (sound16.isPlaying() == true) {
        var ts = map(sound16.currentTime(), 0, sound16.duration(), 0, 1)
    }
    if (ts > 0.) {
        push()
        translate(width * 0.1, height * 0.2)
        noFill()
        stroke(255, 0, 255)
        strokeWeight(15)
        rotate(frameCount / 20.0)
        triangle(120, 30, 40, 0, 50, 100)
        pop()
    }
    if (ts > 0.04) {
        push()
        translate(width * 0.1, height * 0.4)
        noFill()
        stroke(0, 255, 255)
        strokeWeight(15)
        rotate(frameCount / 20.0)
        triangle(120, 30, 40, 0, 50, 100)
        pop()
    }
    if (ts > 0.06) {
        push()
        translate(width * 0.1, height * 0.6)
        noFill()
        stroke(0, 255, 0)
        strokeWeight(15)
        rotate(frameCount / 20.0)
        triangle(120, 30, 40, 0, 50, 100)
        pop()
    }
    if (ts > 0.08) {
        push()
        translate(width * 0.1, height * 0.8)
        noFill()
        stroke(255, 100, 100)
        strokeWeight(15)
        rotate(frameCount / 20.0)
        triangle(120, 30, 40, 0, 50, 100)
        pop()
    }
    if (ts > 0.10) {
        push()
        translate(width * 0.2, height * 0.2)
        noFill()
        stroke(255, 0, 255)
        strokeWeight(15)
        rotate(frameCount / 20.0)
        triangle(120, 30, 40, 0, 50, 100)
        pop()
    }
    if (ts > 0.12) {
        push()
        translate(width * 0.2, height * 0.4)
        noFill()
        stroke(255, 255, 0)
        strokeWeight(15)
        rotate(frameCount / 20.0)
        triangle(120, 30, 40, 0, 50, 100)
        pop()
    }
    if (ts > 0.14) {
        push()
        translate(width * 0.2, height * 0.6)
        noFill()
        stroke(0, 0, 255)
        strokeWeight(15)
        rotate(frameCount / 20.0)
        triangle(120, 30, 40, 0, 50, 100)
        pop()
    }
    if (ts > 0.16) {
        push()
        translate(width * 0.2, height * 0.8)
        noFill()
        stroke(0, 255, 255)
        strokeWeight(15)
        rotate(frameCount / 20.0)
        triangle(120, 30, 40, 0, 50, 100)
        pop()
    }
    if (ts > 0.18) {
        push()
        translate(width * 0.3, height * 0.2)
        noFill()
        stroke(0, 255, 0)
        strokeWeight(15)
        rotate(frameCount / 20.0)
        triangle(120, 30, 40, 0, 50, 100)
        pop()
    }
    if (ts > 0.20) {
        push()
        translate(width * 0.3, height * 0.4)
        noFill()
        stroke(255, 100, 100)
        strokeWeight(15)
        rotate(frameCount / 20.0)
        triangle(120, 30, 40, 0, 50, 100)
        pop()
    }
    if (ts > 0.22) {
        push()
        translate(width * 0.3, height * 0.6)
        noFill()
        stroke(255, 0, 255)
        strokeWeight(15)
        rotate(frameCount / 20.0)
        triangle(120, 30, 40, 0, 50, 100)
        pop()
    }
    if (ts > 0.24) {
        push()
        translate(width * 0.3, height * 0.8)
        noFill()
        stroke(255, 255, 0)
        strokeWeight(15)
        rotate(frameCount / 20.0)
        triangle(120, 30, 40, 0, 50, 100)
        pop()
    }
    if (ts > 0.26) {
        push()
        translate(width * 0.4, height * 0.2)
        noFill()
        stroke(0, 0, 255)
        strokeWeight(15)
        rotate(frameCount / 20.0)
        triangle(120, 30, 40, 0, 50, 100)
        pop()
    }
    if (ts > 0.28) {
        push()
        translate(width * 0.4, height * 0.4)
        noFill()
        stroke(0, 255, 255)
        strokeWeight(15)
        rotate(frameCount / 20.0)
        triangle(120, 30, 40, 0, 50, 100)
        pop()
    }
    if (ts > 0.30) {
        push()
        translate(width * 0.4, height * 0.6)
        noFill()
        stroke(0, 255, 0)
        strokeWeight(15)
        rotate(frameCount / 20.0)
        triangle(120, 30, 40, 0, 50, 100)
        pop()
    }
    if (ts > 0.32) {
        push()
        translate(width * 0.4, height * 0.8)
        noFill()
        stroke(255, 100, 100)
        strokeWeight(15)
        rotate(frameCount / 20.0)
        triangle(120, 30, 40, 0, 50, 100)
        pop()
    }
    if (ts > 0.34) {
        push()
        translate(width * 0.5, height * 0.2)
        noFill()
        stroke(255, 0, 255)
        strokeWeight(15)
        rotate(frameCount / 20.0)
        triangle(120, 30, 40, 0, 50, 100)
        pop()
    }
    if (ts > 0.36) {
        push()
        translate(width * 0.5, height * 0.4)
        noFill()
        stroke(255, 255, 0)
        strokeWeight(15)
        rotate(frameCount / 20.0)
        triangle(120, 30, 40, 0, 50, 100)
        pop()
    }
    if (ts > 0.38) {
        push()
        translate(width * 0.5, height * 0.6)
        noFill()
        stroke(0, 0, 255)
        strokeWeight(15)
        rotate(frameCount / 20.0)
        triangle(120, 30, 40, 0, 50, 100)
        pop()
    }
    if (ts > 0.40) {
        push()
        translate(width * 0.5, height * 0.8)
        noFill()
        stroke(0, 255, 255)
        strokeWeight(15)
        rotate(frameCount / 20.0)
        triangle(120, 30, 40, 0, 50, 100)
        pop()
    }
    if (ts > 0.42) {
        push()
        translate(width * 0.6, height * 0.2)
        noFill()
        stroke(0, 255, 0)
        strokeWeight(15)
        rotate(frameCount / 20.0)
        triangle(120, 30, 40, 0, 50, 100)
        pop()
    }
    if (ts > 0.44) {
        push()
        translate(width * 0.6, height * 0.4)
        noFill()
        stroke(255, 100, 100)
        strokeWeight(15)
        rotate(frameCount / 20.0)
        triangle(120, 30, 40, 0, 50, 100)
        pop()
    }
    if (ts > 0.46) {
        push()
        translate(width * 0.6, height * 0.6)
        noFill()
        stroke(255, 0, 255)
        strokeWeight(15)
        rotate(frameCount / 20.0)
        triangle(120, 30, 40, 0, 50, 100)
        pop()
    }
    if (ts > 0.48) {
        push()
        translate(width * 0.6, height * 0.8)
        noFill()
        stroke(0, 0, 255)
        strokeWeight(15)
        rotate(frameCount / 20.0)
        triangle(120, 30, 40, 0, 50, 100)
        pop()
    }
    if (ts > 0.50) {
        push()
        translate(width * 0.7, height * 0.2)
        noFill()
        stroke(0, 255, 255)
        strokeWeight(15)
        rotate(frameCount / 20.0)
        triangle(120, 30, 40, 0, 50, 100)
        pop()
    }
    if (ts > 0.52) {
        push()
        translate(width * 0.7, height * 0.4)
        noFill()
        stroke(0, 255, 0)
        strokeWeight(15)
        rotate(frameCount / 20.0)
        triangle(120, 30, 40, 0, 50, 100)
        pop()
    }
    if (ts > 0.54) {
        push()
        translate(width * 0.7, height * 0.6)
        noFill()
        stroke(255, 100, 100)
        strokeWeight(15)
        rotate(frameCount / 20.0)
        triangle(120, 30, 40, 0, 50, 100)
        pop()
    }
    if (ts > 0.56) {
        push()
        translate(width * 0.7, height * 0.8)
        noFill()
        stroke(255, 0, 255)
        strokeWeight(15)
        rotate(frameCount / 20.0)
        triangle(120, 30, 40, 0, 50, 100)
        pop()
    }
    if (ts > 0.58) {
        push()
        translate(width * 0.8, height * 0.2)
        noFill()
        stroke(255, 255, 0)
        strokeWeight(15)
        rotate(frameCount / 20.0)
        triangle(120, 30, 40, 0, 50, 100)
        pop()
    }
    if (ts > 0.60) {
        push()
        translate(width * 0.8, height * 0.4)
        noFill()
        stroke(0, 0, 255)
        strokeWeight(15)
        rotate(frameCount / 20.0)
        triangle(120, 30, 40, 0, 50, 100)
        pop()
    }
    if (ts > 0.62) {
        push()
        translate(width * 0.8, height * 0.6)
        noFill()
        stroke(0, 255, 255)
        strokeWeight(15)
        rotate(frameCount / 20.0)
        triangle(120, 30, 40, 0, 50, 100)
        pop()
    }
    if (ts > 0.64) {
        push()
        translate(width * 0.8, height * 0.8)
        noFill()
        stroke(0, 255, 0)
        strokeWeight(15)
        rotate(frameCount / 20.0)
        triangle(120, 30, 40, 0, 50, 100)
        pop()
    }
    if (ts > 0.66) {
        push()
        translate(width * 0.9, height * 0.2)
        noFill()
        stroke(255, 100, 100)
        strokeWeight(15)
        strokeWeight(15)
        rotate(frameCount / 20.0)
        triangle(120, 30, 40, 0, 50, 100)
        pop()
    }
    if (ts > 0.68) {
        push()
        translate(width * 0.9, height * 0.4)
        noFill()
        stroke(255, 0, 255)
        strokeWeight(15)
        rotate(frameCount / 20.0)
        triangle(120, 30, 40, 0, 50, 100)
        pop()
    }
    if (ts > 0.70) {
        push()
        translate(width * 0.9, height * 0.6)
        noFill()
        stroke(255, 255, 0)
        strokeWeight(15)
        rotate(frameCount / 20.0)
        triangle(120, 30, 40, 0, 50, 100)
        pop()
    }
    if (ts > 0.72) {
        push()
        translate(width * 0.9, height * 0.8)
        noFill()
        stroke(0, 0, 255)
        strokeWeight(15)
        rotate(frameCount / 20.0)
        triangle(120, 30, 40, 0, 50, 100)
        pop()
    }

    // animation j //
    playSound(sound17, 74)
    if (sound17.isPlaying() == true) {

        push()
        rotate(frameCount / -22.0);
        fill(255, 100, 100)
        star(0, height * 0.5, 30, 70, 5)
        fill(0, 255, 0)
        star(0, height * 0.1, 30, 70, 5)
        fill(255, 0, 255)
        star(0, height * 0.2, 30, 70, 5)
        fill(0, 255, 255)
        star(0, height * 0.3, 30, 70, 5);
        fill(0, 0, 255);
        star(0, height * 0.4, 30, 70, 5);
        fill(255, 255, 0);
        star(0, height * 0.6, 30, 70, 5);
        fill(255, 100, 100);
        star(0, height * 0.7, 30, 70, 5);
        fill(0, 255, 0);
        star(0, height * 0.8, 30, 70, 5);
        fill(255, 0, 255);
        star(0, height * 0.9, 30, 70, 5);
        fill(0, 255, 255);
        star(width * 0.1, 0, 30, 70, 5);
        fill(0, 0, 255);
        star(width * 0.2, 0, 30, 70, 5);
        fill(255, 255, 0);
        star(width * 0.3, 0, 30, 70, 5);
        fill(255, 100, 100);
        star(width * 0.4, 0, 30, 70, 5);
        fill(0, 255, 0);
        star(width * 0.5, 0, 30, 70, 5);
        fill(255, 0, 255);
        star(width * 0.6, 0, 30, 70, 5);
        fill(0, 255, 255);
        star(width * 0.7, 0, 30, 70, 5);
        fill(0, 0, 255);
        star(width * 0.8, 0, 30, 70, 5);
        fill(255, 255, 0);
        star(width * 0.9, 0, 30, 70, 5);

        pop();
    }

    // animation k //
    playSound(sound18, 75);
    if (sound18.isPlaying() == true) {
        ta.animateDrawing(color(255, 0, 0), 5) // Permet de dessiner la forme //
    } else {
        ta.resetDrawing() // Le dessin est réinitialiser //
    }

    // animation m //
    playSound(sound20, 77)
    if (sound20.isPlaying() == true) {
        var tm = map(sound20.currentTime(), 0, sound20.duration(), 0, 1)

    }
    if (tm > 0.01) {
        push()
        translate(width * 0.01, height * 0.98)
        fill(0, 0, 255)
        ellipse(width * 0.2, 0, width * 0.01, height * 0.02)
        pop()
    }
    if (tm > 0.01) {
        push()
        translate(width * 0.04, height * 0.94)
        fill(255, 255, 0)
        ellipse(width * 0.2, 0, width * 0.01, height * 0.02)
        pop()
    }
    if (tm > 0.02) {
        push()
        translate(width * 0.07, height * 0.90)
        fill(255, 100, 100)
        ellipse(width * 0.2, 0, width * 0.01, height * 0.02)
        pop()
    }
    if (tm > 0.02) {
        push()
        translate(width * 0.04, height * 0.86)
        fill(0, 255, 0)
        ellipse(width * 0.2, 0, width * 0.01, height * 0.02)
        pop()
    }
    if (tm > 0.03) {
        push()
        translate(width * 0.02, height * 0.82)
        fill(255, 0, 255)
        ellipse(width * 0.2, 0, width * 0.01, height * 0.02)
        pop()
    }
    if (tm > 0.03) {
        push()
        translate(width * 0.05, height * 0.78)
        fill(0, 255, 255)
        ellipse(width * 0.2, 0, width * 0.01, height * 0.02)
        pop()
    }
    if (tm > 0.03) {
        push()
        translate(width * 0.05, height * 0.74)
        fill(0, 0, 255)
        ellipse(width * 0.2, 0, width * 0.01, height * 0.02)
        pop()
    }
    if (tm > 0.04) {
        push()
        translate(width * 0.03, height * 0.70)
        fill(255, 255, 0)
        ellipse(width * 0.2, 0, width * 0.01, height * 0.02)
        pop()
    }
    if (tm > 0.04) {
        push()
        translate(width * 0.0, height * 0.66)
        fill(255, 255, 0)
        ellipse(width * 0.2, 0, width * 0.01, height * 0.02)
        pop()
    }
    if (tm > 0.04) {
        push()
        translate(width * 0.08, height * 0.62)
        fill(255, 100, 100)
        ellipse(width * 0.2, 0, width * 0.01, height * 0.02)
        pop()
    }
    if (tm > 0.05) {
        push()
        translate(width * 0.05, height * 0.58)
        fill(0, 255, 0)
        ellipse(width * 0.2, 0, width * 0.01, height * 0.02)
        pop()
    }
    if (tm > 0.05) {
        push()
        translate(width * 0.04, height * 0.54)
        fill(255, 0, 255)
        ellipse(width * 0.2, 0, width * 0.01, height * 0.02)
        pop()
    }
    if (tm > 0.05) {
        push()
        translate(width * 0.03, height * 0.50)
        fill(0, 255, 255)
        ellipse(width * 0.2, 0, width * 0.01, height * 0.02)
        pop()
    }
    if (tm > 0.06) {
        push()
        translate(width * 0.01, height * 0.46)
        fill(0, 0, 255)
        ellipse(width * 0.2, 0, width * 0.01, height * 0.02)
        pop()
    }
    if (tm > 0.07) {
        push()
        translate(width * 0.06, height * 0.42)
        fill(255, 255, 0)
        ellipse(width * 0.2, 0, width * 0.01, height * 0.02)
        pop()
    }
    if (tm > 0.08) {
        push()
        translate(width * 0.02, height * 0.36)
        fill(255, 100, 100)
        ellipse(width * 0.2, 0, width * 0.01, height * 0.02)
        pop()
    }
    if (tm > 0.09) {
        push()
        translate(width * 0.07, height * 0.32)
        fill(0, 255, 0)
        ellipse(width * 0.2, 0, width * 0.01, height * 0.02)
        pop()
    }
    if (tm > 0.09) {
        push()
        translate(width * 0.06, height * 0.28)
        fill(255, 0, 255)
        ellipse(width * 0.2, 0, width * 0.01, height * 0.02)
        pop()
    }
    if (tm > 0.09) {
        push()
        translate(width * 0.042, height * 0.24)
        fill(0, 255, 255)
        ellipse(width * 0.2, 0, width * 0.01, height * 0.02)
        pop()
    }
    if (tm > 0.09) {
        push()
        translate(width * 0.047, height * 0.20)
        fill(0, 0, 255)
        ellipse(width * 0.2, 0, width * 0.01, height * 0.02)
        pop()
    }
    if (tm > 0.09) {
        push()
        translate(width * 0.04, height * 0.16)
        fill(255, 255, 0)
        ellipse(width * 0.2, 0, width * 0.01, height * 0.02)
        pop()
    }

    // animation x //
    playSound(sound22, 88)
    if (sound22.isPlaying() == true) {
        var tx = map(sound22.currentTime(), 0, sound22.duration(), 0, 1)

    }
    if (tx > 0.025) {
        push()
        translate(width * 0.29, height * 0.195)
        fill(0, 0, 255)
        triangle(width * 0.09, height * 0.01, width * 0.04, 0, width * 0.05, height * 0.08)
        pop()
    }

    if (tx > 0.05) {
        push()
        translate(width * 0.35, height * 0.140)
        fill(255, 255, 0)
        triangle(width * 0.09, height * 0.01, width * 0.04, 0, width * 0.05, height * 0.08)
        pop()
    }
    if (tx > 0.075) {
        push()
        translate(width * 0.41, height * 0.11)
        fill(255, 100, 100)
        triangle(width * 0.09, height * 0.01, width * 0.04, 0, width * 0.05, height * 0.08)
        pop()
    }
    if (tx > 0.10) {
        push()
        translate(width * 0.465, height * 0.107)
        fill(0, 255, 0)
        triangle(width * 0.09, height * 0.01, width * 0.04, 0, width * 0.05, height * 0.08)
        pop()
    }
    if (tx > 0.125) {
        push()
        translate(width * 0.52, height * 0.115)
        fill(255, 0, 255)
        triangle(width * 0.09, height * 0.01, width * 0.04, 0, width * 0.05, height * 0.08)
        pop()
    }
    if (tx > 0.15) {
        push()
        translate(width * 0.57, height * 0.14)
        fill(0, 255, 255)
        triangle(width * 0.09, height * 0.01, width * 0.04, 0, width * 0.05, height * 0.08)
        pop()
    }
    if (tx > 0.175) {
        push()
        translate(width * 0.61, height * 0.1675)
        fill(0, 0, 255)
        triangle(width * 0.09, height * 0.01, width * 0.04, 0, width * 0.05, height * 0.08)
        pop()
    }
    if (tx > 0.2) {
        push()
        translate(width * 0.6425, height * 0.215)
        fill(255, 255, 0)
        triangle(width * 0.09, height * 0.01, width * 0.04, 0, width * 0.05, height * 0.08)
        pop()
    }
    if (tx > 0.225) {
        push()
        translate(width * 0.67, height * 0.2875)
        fill(255, 100, 100)
        triangle(width * 0.09, height * 0.01, width * 0.04, 0, width * 0.05, height * 0.08)
        pop()
    }
    if (tx > 0.25) {
        push()
        translate(width * 0.6975, height * 0.365)
        fill(0, 255, 0)
        triangle(width * 0.09, height * 0.01, width * 0.04, 0, width * 0.05, height * 0.08)
        pop()
    }
    if (tx > 0.275) {
        push()
        translate(width * 0.705, height * 0.47)
        fill(255, 0, 255)
        triangle(width * 0.09, height * 0.01, width * 0.04, 0, width * 0.05, height * 0.08)
        pop()
    }
    if (tx > 0.30) {
        push()
        translate(width * 0.70, height * 0.565)
        fill(0, 255, 255)
        triangle(width * 0.09, height * 0.01, width * 0.04, 0, width * 0.05, height * 0.08)
        pop()
    }
    if (tx > 0.325) {
        push()
        translate(width * 0.68, height * 0.655)
        fill(0, 0, 255)
        triangle(width * 0.09, height * 0.01, width * 0.04, 0, width * 0.05, height * 0.08)
        pop()
    }
    if (tx > 0.35) {
        push()
        translate(width * 0.6475, height * 0.735)
        fill(255, 255, 0)
        triangle(width * 0.09, height * 0.01, width * 0.04, 0, width * 0.05, height * 0.08)
        pop()
    }
    if (tx > 0.375) {
        push()
        translate(width * 0.61, height * 0.78)
        fill(255, 100, 100)
        triangle(width * 0.09, height * 0.01, width * 0.04, 0, width * 0.05, height * 0.08)
        pop()
    }
    if (tx > 0.40) {
        push()
        translate(width * 0.57, height * 0.8)
        fill(0, 255, 0)
        triangle(width * 0.09, height * 0.01, width * 0.04, 0, width * 0.05, height * 0.08)
        pop()
    }
    if (tx > 0.425) {
        push()
        translate(width * 0.525, height * 0.81)
        fill(255, 0, 255)
        triangle(width * 0.09, height * 0.01, width * 0.04, 0, width * 0.05, height * 0.08)
        pop()
    }
    if (tx > 0.45) {
        push()
        translate(width * 0.48, height * 0.7975)
        fill(0, 255, 255)
        triangle(width * 0.09, height * 0.01, width * 0.04, 0, width * 0.05, height * 0.08)
        pop()
    }
    if (tx > 0.475) {
        push()
        translate(width * 0.435, height * 0.77)
        fill(0, 0, 255)
        triangle(width * 0.09, height * 0.01, width * 0.04, 0, width * 0.05, height * 0.08)
        pop()
    }
    if (tx > 0.50) {
        push()
        translate(width * 0.40, height * 0.71)
        fill(255, 255, 0)
        triangle(width * 0.09, height * 0.01, width * 0.04, 0, width * 0.05, height * 0.08)
        pop()
    }
    if (tx > 0.525) {
        push()
        translate(width * 0.39, height * 0.62)
        fill(255, 100, 100)
        triangle(width * 0.09, height * 0.01, width * 0.04, 0, width * 0.05, height * 0.08)
        pop()
    }
    if (tx > 0.55) {
        push()
        translate(width * 0.3975, height * 0.525)
        fill(0, 255, 0)
        triangle(width * 0.09, height * 0.01, width * 0.04, 0, width * 0.05, height * 0.08)
        pop()
    }
    if (tx > 0.575) {
        push()
        translate(width * 0.41250, height * 0.425)
        fill(255, 0, 255)
        triangle(width * 0.09, height * 0.01, width * 0.04, 0, width * 0.05, height * 0.08)
        pop()
    }
    if (tx > 0.60) {
        push()
        translate(width * 0.4475, height * 0.36)
        fill(0, 255, 255)
        triangle(width * 0.09, height * 0.01, width * 0.04, 0, width * 0.05, height * 0.08)
        pop()
    }
    if (tx > 0.625) {
        push()
        translate(width * 0.4925, height * 0.325)
        fill(255, 255, 0)
        triangle(width * 0.09, height * 0.01, width * 0.04, 0, width * 0.05, height * 0.08)
        pop()
    }
    if (tx > 0.65) {
        push()
        translate(width * 0.5325, height * 0.3175)
        fill(255, 100, 100)
        triangle(width * 0.09, height * 0.01, width * 0.04, 0, width * 0.05, height * 0.08)
        pop()
    }
    if (tx > 0.675) {
        push()
        translate(width * 0.5725, height * 0.34)
        fill(0, 255, 0)
        triangle(width * 0.09, height * 0.01, width * 0.04, 0, width * 0.05, height * 0.08)
        pop()
    }
    if (tx > 0.70) {
        push()
        translate(width * 0.60, height * 0.39)
        fill(255, 0, 255)
        triangle(width * 0.09, height * 0.01, width * 0.04, 0, width * 0.05, height * 0.08)
        pop()
    }
    if (tx > 0.725) {
        push()
        translate(width * 0.62, height * 0.46)
        fill(0, 255, 255)
        triangle(width * 0.09, height * 0.01, width * 0.04, 0, width * 0.05, height * 0.08)
        pop()
    }
    if (tx > 0.75) {
        push()
        translate(width * 0.63, height * 0.535)
        fill(0, 0, 255)
        triangle(width * 0.09, height * 0.01, width * 0.04, 0, width * 0.05, height * 0.08)
        pop()
    }
    if (tx > 0.775) {
        push()
        translate(width * 0.62, height * 0.615)
        fill(255, 255, 0)
        triangle(width * 0.09, height * 0.01, width * 0.04, 0, width * 0.05, height * 0.08)
        pop()
    }
    if (tx > 0.80) {
        push()
        translate(width * 0.585, height * 0.655)
        fill(255, 100, 100)
        triangle(width * 0.09, height * 0.01, width * 0.04, 0, width * 0.05, height * 0.08)
        pop()
    }
    if (tx > 0.825) {
        push()
        translate(width * 0.5475, height * 0.67)
        fill(0, 255, 0)
        triangle(width * 0.09, height * 0.01, width * 0.04, 0, width * 0.05, height * 0.08)
        pop()
    }
    if (tx > 0.85) {
        push()
        translate(width * 0.51, height * 0.6525)
        fill(255, 0, 255)
        triangle(width * 0.09, height * 0.01, width * 0.04, 0, width * 0.05, height * 0.08)
        pop()
    }
    if (tx > 0.875) {
        push()
        translate(width * 0.485, height * 0.58)
        fill(0, 255, 255)
        triangle(width * 0.09, height * 0.01, width * 0.04, 0, width * 0.05, height * 0.08)
        pop()
    }
    if (tx > 0.9) {
        push()
        translate(width * 0.5, height * 0.5)
        fill(0, 0, 255)
        triangle(width * 0.09, height * 0.01, width * 0.04, 0, width * 0.05, height * 0.08)
        pop()
    }

    // animation c //
    playSound(sound23, 67)
    if (sound23.isPlaying() == true) {
        fill(255, 255, 0)
        noStroke()
        rect(xc, yp, width * 0.1, height * 0.2)
        rect(xc, yp, width * 0.1, height * 0.2)
        if (yp < 0) { // on fait varier le y pour que les rectangles aillent de haut en bas // Si yp est inférieur à 0, il va vers le bas //
            yp = height
        }
    }

    // animation v //
    playSound(sound24, 86)
    if (sound24.isPlaying() == true) {
        var rectangle = map(sound24.currentTime(), 0, sound24.duration(), 50, width)
        push()

        fill(0, 0, 255, 0.2 * 255)
        rect(0, 0, rectangle * 0.2, rectangle * 0.5)

        fill(255, 255, 0, 0.2 * 255)
        rect(0, 0, rectangle * 2, rectangle * 0.1)

        fill(255, 100, 100, 0.2 * 255)
        rect(0, 0, rectangle * 1, rectangle * 0.7)

        fill(255, 0, 255, 0.2 * 255)
        rect(0, 0, rectangle * 5, rectangle * 0.3)

        fill(0, 255, 255, 0.2 * 255)
        rect(0, 0, rectangle * 0.5, rectangle * 2)

        fill(0, 0, 255, 0.2 * 255)
        rect(0, 0, rectangle * 0.2, rectangle * 1)

        fill(255, 255, 0, 0.2 * 255)
        rect(0, 0, rectangle * 0.7, rectangle * 3)

        fill(255, 100, 100, 0.2 * 255)
        rect(0, 0, rectangle * 0.6, rectangle * 1.5)

        fill(0, 255, 255, 0.2 * 255)
        rect(0, 0, rectangle * 0.2, rectangle * 2)

        fill(0, 0, 255, 0.2 * 255)
        rect(width * 0.125, height * 0.125, rectangle * 0.2, rectangle * 0.5)

        fill(255, 255, 0, 0.2 * 255)
        rect(width * 0.125, height * 0.125, rectangle * 2, rectangle * 0.1)

        fill(255, 100, 100, 0.2 * 255)
        rect(width * 0.125, height * 0.125, rectangle * 1, rectangle * 0.7)

        fill(0, 255, 0, 0.2 * 255)
        rect(width * 0.125, height * 0.125, rectangle * 5, rectangle * 0.3)

        fill(255, 0, 255, 0.2 * 255)
        rect(width * 0.125, height * 0.125, rectangle * 0.5, rectangle * 2)

        fill(0, 255, 255, 0.2 * 255)
        rect(width * 0.125, height * 0.125, rectangle * 0.2, rectangle * 1)

        fill(0, 0, 255, 0.2 * 255)
        rect(width * 0.125, height * 0.125, rectangle * 0.7, rectangle * 3)

        fill(255, 255, 0, 0.2 * 255)
        rect(width * 0.125, height * 0.125, rectangle * 0.6, rectangle * 1.5)

        fill(0, 255, 0, 0.2 * 255)
        rect(width * 0.125, height * 0.125, rectangle * 0.2, rectangle * 2)

        fill(255, 0, 255, 0.2 * 255)
        rect(width * 0.25, height * 0.25, rectangle * 0.2, rectangle * 0.5)

        fill(0, 255, 255, 0.2 * 255)
        rect(width * 0.25, height * 0.25, rectangle * 2, rectangle * 0.1)

        fill(0, 0, 255, 0.2 * 255)
        rect(width * 0.25, height * 0.25, rectangle * 1, rectangle * 0.7)

        fill(255, 255, 0, 0.2 * 255)
        rect(width * 0.25, height * 0.25, rectangle * 5, rectangle * 0.3)

        fill(255, 100, 100, 0.2 * 255)
        rect(width * 0.25, height * 0.25, rectangle * 0.5, rectangle * 2)

        fill(0, 255, 0, 0.2 * 255)
        rect(width * 0.25, height * 0.25, rectangle * 0.2, rectangle * 1)

        fill(255, 0, 255, 0.2 * 255)
        rect(width * 0.25, height * 0.25, rectangle * 0.7, rectangle * 3)

        fill(0, 255, 255, 0.2 * 255)
        rect(width * 0.25, height * 0.25, rectangle * 0.6, rectangle * 1.5)

        fill(0, 0, 255, 0.2 * 255)
        rect(width * 0.25, height * 0.25, rectangle * 0.2, rectangle * 2)

        fill(255, 255, 0, 0.2 * 255)
        rect(width * 0.365, height * 0.365, rectangle * 0.2, rectangle * 0.5)

        fill(255, 100, 100, 0.2 * 255)
        rect(width * 0.365, height * 0.365, rectangle * 2, rectangle * 0.1)

        fill(0, 255, 0, 0.2 * 255)
        rect(width * 0.365, height * 0.365, rectangle * 1, rectangle * 0.7)

        fill(255, 0, 255, 0.2 * 255)
        rect(width * 0.365, height * 0.365, rectangle * 5, rectangle * 0.3)

        fill(0, 255, 255, 0.2 * 255)
        rect(width * 0.365, height * 0.365, rectangle * 0.5, rectangle * 2)

        fill(0, 0, 255, 0.2 * 255)
        rect(width * 0.365, height * 0.365, rectangle * 0.2, rectangle * 1)

        fill(255, 255, 0, 0.2 * 255)
        rect(width * 0.365, height * 0.365, rectangle * 0.7, rectangle * 3)

        fill(255, 100, 100, 0.2 * 255)
        rect(width * 0.365, height * 0.365, rectangle * 0.6, rectangle * 1.5)

        fill(0, 255, 0, 0.2 * 255)
        rect(width * 0.365, height * 0.365, rectangle * 0.2, rectangle * 2)

        fill(255, 0, 255, 0.2 * 255)
        rect(width * 0.5, height * 0.5, rectangle * 0.2, rectangle * 0.5)

        fill(0, 255, 255, 0.2 * 255)
        rect(width * 0.5, height * 0.5, rectangle * 2, rectangle * 0.1)

        fill(0, 0, 255)
        rect(width * 0.5, height * 0.5, rectangle * 1, rectangle * 0.7)

        fill(255, 255, 0, 0.2 * 255)
        rect(width * 0.5, height * 0.5, rectangle * 5, rectangle * 0.3)

        fill(255, 100, 100, 0.2 * 255)
        rect(width * 0.5, height * 0.5, rectangle * 0.5, rectangle * 2)

        fill(0, 255, 0, 0.2 * 255)
        rect(width * 0.5, height * 0.5, rectangle * 0.2, rectangle * 1)

        fill(255, 0, 255, 0.2 * 255)
        rect(width * 0.5, height * 0.5, rectangle * 0.7, rectangle * 3)

        fill(0, 255, 255, 0.2 * 255)
        rect(width * 0.5, height * 0.5, rectangle * 0.6, rectangle * 1.5)

        fill(0, 0, 255, 0.2 * 255)
        rect(width * 0.5, height * 0.5, rectangle * 0.2, rectangle * 2)

        fill(255, 255, 0, 0.2 * 255)
        rect(width * 0.625, height * 0.625, rectangle * 0.2, rectangle * 0.5)

        fill(255, 100, 100, 0.2 * 255)
        rect(width * 0.625, height * 0.625, rectangle * 2, rectangle * 0.1)

        fill(0, 255, 0, 0.2 * 255)
        rect(width * 0.625, height * 0.625, rectangle * 1, rectangle * 0.7)

        fill(255, 0, 255, 0.2 * 255)
        rect(width * 0.625, height * 0.625, rectangle * 5, rectangle * 0.3)

        fill(0, 0, 255, 0.2 * 255)
        rect(width * 0.625, height * 0.625, rectangle * 0.5, rectangle * 2)

        fill(0, 255, 255, 0.2 * 255)
        rect(width * 0.625, height * 0.625, rectangle * 0.2, rectangle * 1)

        fill(0, 0, 255, 0.2 * 255)
        rect(width * 0.625, height * 0.625, rectangle * 0.7, rectangle * 3)

        fill(255, 255, 0, 0.2 * 255)
        rect(width * 0.625, height * 0.625, rectangle * 0.6, rectangle * 1.5)

        fill(255, 100, 100, 0.2 * 255)
        rect(width * 0.625, height * 0.625, rectangle * 0.2, rectangle * 2)

        fill(0, 255, 0, 0.2 * 255)
        rect(width * 0.75, height * 0.75, rectangle * 0.2, rectangle * 0.5)

        fill(255, 0, 255, 0.2 * 255)
        rect(width * 0.75, height * 0.75, rectangle * 2, rectangle * 0.1)

        fill(0, 255, 255, 0.2 * 255)
        rect(width * 0.75, height * 0.75, rectangle * 1, rectangle * 0.7)

        fill(0, 0, 255, 0.2 * 255)
        rect(width * 0.75, height * 0.75, rectangle * 5, rectangle * 0.3)

        fill(255, 255, 0, 0.2 * 255)
        rect(width * 0.75, height * 0.75, rectangle * 0.5, rectangle * 2)

        fill(255, 100, 100, 0.2 * 255)
        rect(width * 0.75, height * 0.75, rectangle * 0.2, rectangle * 1)

        fill(0, 255, 0, 0.2 * 255)
        rect(width * 0.75, height * 0.75, rectangle * 0.7, rectangle * 3)

        fill(255, 0, 255, 0.2 * 255)
        rect(width * 0.75, height * 0.75, rectangle * 0.6, rectangle * 1.5)

        fill(0, 255, 255, 0.2 * 255)
        rect(width * 0.75, height * 0.75, rectangle * 0.2, rectangle * 2)

        fill(0, 0, 255, 0.2 * 255)
        rect(width * 0.865, height * 0.865, rectangle * 0.2, rectangle * 0.5)

        fill(255, 255, 0, 0.2 * 255)
        rect(width * 0.865, height * 0.865, rectangle * 2, rectangle * 0.1)

        fill(255, 100, 100, 0.2 * 255)
        rect(width * 0.865, height * 0.865, rectangle * 1, rectangle * 0.7)

        fill(0, 255, 0, 0.2 * 255)
        rect(width * 0.865, height * 0.865, rectangle * 5, rectangle * 0.3)

        fill(255, 0, 255, 0.2 * 255)
        rect(width * 0.865, height * 0.865, rectangle * 0.5, rectangle * 2)

        fill(0, 255, 255, 0.2 * 255)
        rect(width * 0.865, height * 0.865, rectangle * 0.2, rectangle * 1)

        fill(0, 0, 255, 0.2 * 255)
        rect(width * 0.865, height * 0.865, rectangle * 0.7, rectangle * 3)

        fill(255, 255, 0, 0.2 * 255)
        rect(width * 0.865, height * 0.865, rectangle * 0.6, rectangle * 1.5)

        fill(255, 100, 100, 0.2 * 255)
        rect(width * 0.865, height * 0.865, rectangle * 0.2, rectangle * 2)

    }

    // animation b //
    playSound(sound25, 66)
    if (sound25.isPlaying() == true) {
        push()
        var tourne = map(sound25.currentTime(), 0, sound25.duration(), 0, PI / 7)
        rectMode(CENTER) // les rectangles seront au centre de notre fenêtre //
        translate(width * 0.5, height * 0.5)
        rotate(tourne)
        var bb = random(255)
        fill(255, 255, 0, bb)
        rect(0, 0, width * 0.15, height * 0.3)
        pop()

        push()
        var tourne1 = map(sound25.currentTime(), 0, sound25.duration(), 0, PI / 2)
        rectMode(CENTER)
        translate(width * 0.5, height * 0.5)
        rotate(tourne1)
        var bbb = random(255)
        fill(0, 0, 255, bbb)
        rect(0, 0, width * 0.15, height * 0.3)
        pop()

        push()
        var tourne2 = map(sound25.currentTime(), 0, sound25.duration(), 0, PI / 5)
        rectMode(CENTER)
        translate(width * 0.5, height * 0.5)
        rotate(tourne1)
        var bbbb = random(255)
        fill(255, 100, 100, bbbb)
        rect(0, 0, width * 0.15, height * 0.3)
        pop()

        push()
        var tourne2 = map(sound25.currentTime(), 0, sound25.duration(), 0, PI / 3)
        rectMode(CENTER)
        translate(width * 0.5, height * 0.5)
        rotate(tourne2)
        var bbbbb = random(255)
        fill(0, 255, 0, bbbbb)
        rect(0, 0, width * 0.15, height * 0.3)
        pop()

        push()
        var tourne3 = map(sound25.currentTime(), 0, sound25.duration(), 0, PI / 2)
        rectMode(CENTER)
        translate(width * 0.5, height * 0.5)
        rotate(tourne3)
        var bbbbbb = random(255)
        fill(255, 0, 255, bbbbbb)
        rect(0, 0, width * 0.15, height * 0.3)
        pop()

        push()
        var tourne4 = map(sound25.currentTime(), 0, sound25.duration(), 0, PI / 6)
        rectMode(CENTER)
        translate(width * 0.5, height * 0.5)
        rotate(tourne4)
        var bbbbbbb = random(255)
        fill(0, 255, 255, bbbbbbb)
        rect(0, 0, width * 0.15, height * 0.3)
        pop()

        push()
        var tourne5 = map(sound25.currentTime(), 0, sound25.duration(), 0, PI / 4)
        rectMode(CENTER)
        translate(width * 0.5, height * 0.5)
        rotate(tourne5)
        var bbbbbbbb = random(255)
        fill(0, 0, 255, bbbbbbbb)
        rect(0, 0, width * 0.15, height * 0.3)
        pop()

        push()
        var tourne6 = map(sound25.currentTime(), 0, sound25.duration(), 0, PI / 8)
        rectMode(CENTER)
        translate(width * 0.5, height * 0.5)
        rotate(tourne6)
        var bbbbbbbbb = random(255)
        fill(255, 255, 0, bbbbbbbbb)
        rect(0, 0, width * 0.15, height * 0.3)
        pop()

        push()
        var tourne7 = map(sound25.currentTime(), 0, sound25.duration(), 0, PI / 9)
        rectMode(CENTER)
        translate(width * 0.5, height * 0.5)
        rotate(tourne7)
        var bbbbbbbbbb = random(255)
        fill(255, 100, 100, bbbbbbbbbb)
        rect(0, 0, width * 0.15, height * 0.3)
        pop()

        push()
        var tourne8 = map(sound25.currentTime(), 0, sound25.duration(), 0, PI / 10)
        rectMode(CENTER)
        translate(width * 0.5, height * 0.5)
        rotate(tourne8)
        let bbbbbbbbbbb = random(255)
        fill(0, 255, 0, bbbbbbbbbbb)
        rect(0, 0, width * 0.15, height * 0.3)
        pop()
    }

    // animation n //
    playSound(sound26, 78)
    if (sound26.isPlaying() == true) {

        startAngle += 0.015
        var angle = startAngle

        for (var x = 0; x <= width; x += 24) {
            var y = map(sin(angle), -1, 1, 0, height)  // on va faire varier y pour que nos ellipses montent et descendent
            let ncolor = random(255)
            fill(ncolor)
            ellipse(x, y, width * 0.02, height * 0.05)
            angle += angleVel
        }
    }

}

function star(x, y, radius1, radius2, npoints) { // On va définir les différents paramètres de nos étoiles //

    var angle = TWO_PI / npoints; // ici angle est égale 2PI / 5
    var halfAngle = angle / 3.0;
    beginShape(); // On va créer deux chaines d'étoile
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

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

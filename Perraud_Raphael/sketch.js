var canvas

var timer = 0
var newtimer = 0
var currentTimer
var seed = 1234;

//backing tracks loops
var loop

//essaie donc !
var berenger = new String(6669826978716982)
var easteregg = new String

var amplitudeA, amplitudeB, amplitudeD, amplitudeK, amplitudeF, amplitudeE, amplitudeG, amplitudeT, amplitudeV
var soundAFFT, soundCFFT, soundTFFT, soundQFFT, soundHFFT

var biscottes = []
var cordes = []
var cerclesConfiance = []

var pg, pgE, pgC

//o
var amppX = 50
var amppY = 100

//d
var angleD = 20

//x
var sizeX = 0
var sizeY = 0

//j
let xtargetJ = []
let ytargetJ = []
var newOriginX
var newOriginY

//values set up in keyPressed() function
//palettes de couleur
var palette = []
var randomColor
var lineColor = []

//random color values
var redR = []
var greenR = []
var blueR = []
var couleurF, couleurG, couleurH, couleurI, couleurJ, couleurK, couleurM, couleurN, couleurP, couleurP, couleurT, couleurU, couleurV, couleurY

//animA
var colorsCircles = []
var randomColor = []
var orientationA = []

//directions
var directionA = []
var directionG
var directionJ

//randoms for H, R & J
var x1H = []
var x2H = []
var xR = []
var yR = []


//c & q
var springs = []
var springQ = []

//f
var Ycircle = []


function preload() {
    soundA = loadSound("assets/mannishboy.wav")
    soundZ = loadSound("assets/stevieRAY.wav")
    soundE = loadSound("assets/bbking_loop_jazzy.wav")
    soundR = loadSound("assets/rythm_wahwah1.wav")

    //sounds without backing tracks
    soundB = loadSound("assets/turnaround1.wav")
    soundC = loadSound("assets/merlin.wav")
    soundD = loadSound("assets/blues_lick_3.wav")
    soundF = loadSound("assets/feutre.wav")
    soundG = loadSound("assets/blues_double.wav")
    soundH = loadSound("assets/disco.wav")
    soundI = loadSound("assets/echo_micro.wav")
    soundJ = loadSound("assets/blueslick1.wav")
    soundK = loadSound("assets/gratte_cuillere.wav")
    soundL = loadSound("assets/harmonique.wav")
    soundM = loadSound("assets/jimi.wav")
    soundN = loadSound("assets/j.bonamassa_lick.wav")
    soundO = loadSound("assets/jump_wah_wah.wav")
    soundP = loadSound("assets/retour_lick.wav")
    soundQ = loadSound("assets/rebond_basse.wav")
    soundS = loadSound("assets/slide_317.wav")
    soundT = loadSound("assets/dumiel.wav")
    soundU = loadSound("assets/watchtower_lick.wav")
    soundV = loadSound("assets/western.wav")
    soundW = loadSound("assets/fin.wav")
    soundX = loadSound("assets/saute_de_veau.wav")
    soundY = loadSound("assets/andreas.wav")
    /*
        //sounds for A track
     soundB1 = loadSound("assets/soundsA/blueslick1.wav")
     soundC1 = loadSound("assets/soundsA/merlin.wav")
     soundD1 = loadSound("assets/soundsA/blues_lick_3.wav")
     soundF1 = loadSound("assets/soundsA/feutre.wav")
     soundG1 = loadSound("assets/soundsA/blues_double.wav")
     soundH1 = loadSound("assets/soundsA/disco.wav")
     soundI1 = loadSound("assets/soundsA/echo_micro.wav")
     soundJ1 = loadSound("assets/soundsA/funky.wav")
     soundK1 = loadSound("assets/soundsA/gratte_cuillere.wav")
     soundL1 = loadSound("assets/soundsA/harmonique.wav")
     soundM1 = loadSound("assets/soundsA/jimi.wav")
     soundN1 = loadSound("assets/soundsA/j.bonamassa_lick.wav")
     soundO1 = loadSound("assets/soundsA/jump_wah_wah.wav")
     soundP1 = loadSound("assets/soundsA/retour_lick.wav")
     soundQ1 = loadSound("assets/soundsA/rebond_basse.wav")
     soundS1 = loadSound("assets/soundsA/slide_317.wav")
     soundT1 = loadSound("assets/soundsA/dumiel.wav")
     soundU1 = loadSound("assets/soundsA/watchtower_lick.wav")
     soundV1 = loadSound("assets/soundsA/western.wav")
     soundW1 = loadSound("assets/soundsA/fin.wav")
     soundX1 = loadSound("assets/soundsA/saute_de_veau.wav")
     soundY1 = loadSound("assets/soundsA/tap_slide.wav")

        //sounds for Z track
     soundB2 = loadSound("assets/soundsZ/blueslick1.wav")
     soundC2 = loadSound("assets/soundsZ/merlin.wav")
     soundD2 = loadSound("assets/soundsZ/blues_lick_3.wav")
     soundF2 = loadSound("assets/soundsZ/feutre.wav")
     soundG2 = loadSound("assets/soundsZ/blues_double.wav")
     soundH2 = loadSound("assets/soundsZ/disco.wav")
     soundI2 = loadSound("assets/soundsZ/echo_micro.wav")
     soundJ2 = loadSound("assets/soundsZ/funky.wav")
     soundK2 = loadSound("assets/soundsZ/gratte_cuillere.wav")
     soundL2 = loadSound("assets/soundsZ/harmonique.wav")
     soundM2 = loadSound("assets/soundsZ/jimi.wav")
     soundN2 = loadSound("assets/soundsZ/j.bonamassa_lick.wav")
     soundO2 = loadSound("assets/soundsZ/jump_wah_wah.wav")
     soundP2 = loadSound("assets/soundsZ/retour_lick.wav")
     soundQ2 = loadSound("assets/soundsZ/rebond_basse.wav")
     soundS2 = loadSound("assets/soundsZ/slide_317.wav")
     soundT2 = loadSound("assets/soundsZ/dumiel.wav")
     soundU2 = loadSound("assets/soundsZ/watchtower_lick.wav")
     soundV2 = loadSound("assets/soundsZ/western.wav")
     soundW2 = loadSound("assets/soundsZ/fin.wav")
     soundX2 = loadSound("assets/soundsZ/saute_de_veau.wav")
     soundY2 = loadSound("assets/soundsZ/tap_slide.wav")

        //soundsfor E track
     soundB3 = loadSound("assets/soundsE/blueslick1.wav")
     soundC3 = loadSound("assets/soundsE/merlin.wav")
     soundD3 = loadSound("assets/soundsE/blues_lick_3.wav")
     soundF3 = loadSound("assets/soundsE/feutre.wav")
     soundG3 = loadSound("assets/soundsE/blues_double.wav")
     soundH3 = loadSound("assets/soundsE/disco.wav")
     soundI3 = loadSound("assets/soundsE/echo_micro.wav")
     soundJ3 = loadSound("assets/soundsE/funky.wav")
     soundK3 = loadSound("assets/soundsE/gratte_cuillere.wav")
     soundL3 = loadSound("assets/soundsE/harmonique.wav")
     soundM3 = loadSound("assets/soundsE/jimi.wav")
     soundN3 = loadSound("assets/soundsE/j.bonamassa_lick.wav")
     soundO3 = loadSound("assets/soundsE/jump_wah_wah.wav")
     soundP3 = loadSound("assets/soundsE/retour_lick.wav")
     soundQ3 = loadSound("assets/soundsE/rebond_basse.wav")
     soundS3 = loadSound("assets/soundsE/slide_317.wav")
     soundT3 = loadSound("assets/soundsE/dumiel.wav")
     soundU3 = loadSound("assets/soundsE/watchtower_lick.wav")
     soundV3 = loadSound("assets/soundsE/western.wav")
     soundW3 = loadSound("assets/soundsE/fin.wav")
     soundX3 = loadSound("assets/soundsE/saute_de_veau.wav")
     soundY3 = loadSound("assets/soundsE/tap_slide.wav")

        //sounds for R track
     soundB4 = loadSound("assets/soundsR/blueslick1.wav")
     soundC4 = loadSound("assets/soundsR/merlin.wav")
     soundD4 = loadSound("assets/soundsR/blues_lick_3.wav")
     soundF4 = loadSound("assets/soundsR/feutre.wav")
     soundG4 = loadSound("assets/soundsR/blues_double.wav")
     soundH4 = loadSound("assets/soundsR/disco.wav")
     soundI4 = loadSound("assets/soundsR/echo_micro.wav")
     soundJ4 = loadSound("assets/soundsR/funky.wav")
     soundK4 = loadSound("assets/soundsR/gratte_cuillere.wav")
     soundL4 = loadSound("assets/soundsR/harmonique.wav")
     soundM4 = loadSound("assets/soundsR/jimi.wav")
     soundN4 = loadSound("assets/soundsR/j.bonamassa_lick.wav")
     soundO4 = loadSound("assets/soundsR/jump_wah_wah.wav")
     soundP4 = loadSound("assets/soundsR/retour_lick.wav")
     soundQ4 = loadSound("assets/soundsR/rebond_basse.wav")
     soundS4 = loadSound("assets/soundsR/slide_317.wav")
     soundT4 = loadSound("assets/soundsR/dumiel.wav")
     soundU4 = loadSound("assets/soundsR/watchtower_lick.wav")
     soundV4 = loadSound("assets/soundsR/western.wav")
     soundW4 = loadSound("assets/soundsR/fin.wav")
     soundX4 = loadSound("assets/soundsR/saute_de_veau.wav")
     soundY4 = loadSound("assets/soundsR/tap_slide.wav")*/

}

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    //Capturer.start()
    background(0, 40);
    pixelDensity(1)
    //no loop of backing tracks
    loop = 0



    //tous les analysers de son
    amplitudeA = new p5.Amplitude()
    amplitudeA.setInput(soundA)
    amplitudeB = new p5.Amplitude()
    amplitudeB.setInput(soundB)
    amplitudeD = new p5.Amplitude()
    amplitudeD.setInput(soundD)
    amplitudeF = new p5.Amplitude()
    amplitudeF.setInput(soundF)
    amplitudeO = new p5.Amplitude()
    amplitudeO.setInput(soundO)
    amplitudeI = new p5.Amplitude()
    amplitudeI.setInput(soundI)
    amplitudeE = new p5.Amplitude()
    amplitudeE.setInput(soundE)
    amplitudeG = new p5.Amplitude()
    amplitudeG.setInput(soundG)
    amplitudeT = new p5.Amplitude()
    amplitudeT.setInput(soundT)
    amplitudeV = new p5.Amplitude()
    amplitudeV.setInput(soundV)

    soundAFFT = new p5.FFT(0.8, 16)
    soundAFFT.setInput(soundA)
    soundCFFT = new p5.FFT(0.8, 16)
    soundCFFT.setInput(soundC)
    soundSFFT = new p5.FFT(0.8, 16)
    soundSFFT.setInput(soundS)
    soundTFFT = new p5.FFT(0.8, 16)
    soundTFFT.setInput(soundT)
    soundQFFT = new p5.FFT(0.8, 16)
    soundQFFT.setInput(soundQ)
    soundHFFT = new p5.FFT(0.8, 16)
    soundHFFT.setInput(soundH)

    //for color palette, helped by a sketch of @GotoLoop, sketch online at https://forum.processing.org/two/discussion/17621/array-of-colors#Item_1
    palette[0] = color(154, 202, 42)
    palette[1] = color(151, 71, 140)
    palette[2] = color(212, 42, 41)
    palette[3] = color(202, 167, 46)
    palette[4] = color(74, 184, 219)
    palette[5] = color(255, 140, 231)
    palette[6] = color(30, 25, 86)
    palette[7] = color(241, 101, 39)

    lineColor[0] = color(232, 223, 205, 15)
    lineColor[1] = color(171, 4, 21, 15)

    xpos = 200
    ypos = 7 * height / 8
    /* a = 150 / height
     b = 70 / width
*/
    //biscottes
    Xrect = 0.043 * width
    Yrect = 0.203804 * height
    pg = createGraphics(width, height)

    pgE = createGraphics(width, height)
    pgC = createGraphics(width, height)
}

function draw() {
    randomSeed(seed);
    background(0, 40)

    //backing tracks
    musicPlay(soundA, 65) //a
    musicPlay(soundZ, 90) //z
    musicPlay(soundE, 69) //e
    musicPlay(soundR, 82) //r

    //others
    musicPlay(soundB, 66) //b
    musicPlay(soundC, 67) //c
    musicPlay(soundD, 68) //d
    musicPlay(soundF, 70) //f
    musicPlay(soundG, 71) //g
    musicPlay(soundH, 72) ////h
    musicPlay(soundI, 73) //i
    musicPlay(soundJ, 74) //j
    musicPlay(soundK, 75) //k
    musicPlay(soundL, 76) //l
    musicPlay(soundM, 77) //m
    musicPlay(soundN, 78) //n
    musicPlay(soundO, 79) //o
    musicPlay(soundP, 80) //p
    musicPlay(soundQ, 81) //q
    musicPlay(soundS, 83) //s
    musicPlay(soundT, 84) //t
    musicPlay(soundU, 85) //u
    musicPlay(soundV, 86) //v
    musicPlay(soundW, 87) //w
    musicPlay(soundX, 88) //x
    musicPlay(soundY, 89) //y


    //to display instructions if no sounds have been played since 3sec
    //placé après musicPlay() qui reboote le timer, sans quoi la condition serait toujours valide car inchangée
    currentTimer = millis()
    //console.log("current = " + currentTimer + "            timer = " + timer)
    if ((currentTimer > timer)) document.getElementById('instructions').style.display = "initial";

    /*  if (soundA.isPlaying() == true){

      }

      if (soundZ.isPlaying() == true){

      }

      if (soundE.isPlaying() == true){

      }

      if (soundR.isPlaying() == true){

      }*/


    //is loop activated ?
    if (loop) {
        soundA.setLoop(true)
        soundZ.setLoop(true)
        soundE.setLoop(true)
        soundR.setLoop(true)
    } else {
        soundA.setLoop(false)
        soundZ.setLoop(false)
        soundE.setLoop(false)
        soundR.setLoop(false)
    }




    // first, in foreground, riffs wich can be repeated as sound background
    //only one except, because this animation change background color
    if (soundL.currentTime() < soundL.duration() - 0.1 && soundL.currentTime() > 0) {
        animL()
    } else background(0, 40)


    if (soundE.currentTime() < soundE.duration() - 0.1 && soundE.currentTime() > 0) {
        animE()
    }
    if (soundA.currentTime() < soundA.duration() - 0.1 && soundA.currentTime() > 0) {
        animA()
    }

    if (soundZ.currentTime() < soundZ.duration() - 0.1 && soundZ.currentTime() > 0) {
        animZ()
    } else {
        pg.clear()
        biscottes = []
        transparence = 100
    }
    if (soundR.currentTime() < soundR.duration() - 0.1 && soundR.currentTime() > 0) {
        animR()
    }



    //then short animations

    if (soundG.currentTime() < soundG.duration() - 0.1 && soundG.currentTime() > 0) {
        animG()
    }

    if (soundB.currentTime() < soundB.duration() - 0.1 && soundB.currentTime() > 0) {
        animB()
    }

    if (soundC.currentTime() < soundC.duration() - 0.1 && soundC.currentTime() > 0) {
        animC()
    } else springs = []

    if (soundH.currentTime() < soundH.duration() - 0.1 && soundH.currentTime() > 0) { //h
        animH()
    }

    if (soundI.currentTime() < soundI.duration() - 0.1 && soundI.currentTime() > 0) { //i
        animI()
    }

    if (soundO.currentTime() < soundO.duration() - 0.1 && soundO.currentTime() > 0) {
        animO()
    }

    if (soundT.currentTime() < soundT.duration() - 0.1 && soundT.currentTime() > 0) {
        animT()
    }

    if (soundK.currentTime() < soundK.duration() - 0.1 && soundK.currentTime() > 0) {
        animK()
    }

    if (soundF.currentTime() < soundF.duration() - 0.1 && soundF.currentTime() > 0) {
        animF()
    }

    if (soundJ.currentTime() < soundJ.duration() - 0.1 && soundJ.currentTime() > 0) {
        animJ()
    }

    if (soundM.currentTime() < soundM.duration() - 0.1 && soundM.currentTime() > 0) {
        animM()
    }

    if (soundN.currentTime() < soundN.duration() - 0.1 && soundN.currentTime() > 0) {
        animN()
    }

    if (soundP.currentTime() < soundP.duration() - 0.1 && soundP.currentTime() > 0) {
        animP()
    }

    if (soundQ.currentTime() < soundQ.duration() - 0.1 && soundQ.currentTime() > 0) {
        animQ()
    } else springQ = []

    if (soundS.currentTime() < soundS.duration() - 0.1 && soundS.currentTime() > 0) {
        animS()
    }

    if (soundU.currentTime() < soundU.duration() - 0.1 && soundU.currentTime() > 0) {
        animU()
    }

    if (soundV.currentTime() < soundV.duration() - 0.1 && soundV.currentTime() > 0) {
        animV()
    }

    if (soundW.currentTime() < soundW.duration() - 0.1 && soundW.currentTime() > 0) { //u
        animW()
    }

    if (soundX.currentTime() < soundX.duration() - 0.1 && soundX.currentTime() > 0) {
        animX()
    }

    if (soundY.currentTime() < soundY.duration() - 0.1 && soundY.currentTime() > 0) {
        animY()
    }

    if (soundD.currentTime() < soundD.duration() - 0.1 && soundD.currentTime() > 0) {
        animD()
    }
} //loop


//to avoid changes during the play of the sound due to use of random() method
function keyPressed() {
    //hide instruction if a key is Pressed
    document.getElementById('instructions').style.display = "none";

    // activate / desactivate loop condition for 4 backings tracks
    if (keyCode === ENTER) {
        if (loop) {
            console.log("loop désactivée")
            loop = 0
        } else {
            console.log("loop activée")
            loop = 1
        }
    }

    //saveframe to make the gif
   /* if (keyCode == 20) { // VER.MAJ

        Capturer.capture(canvas)
        console.log("screen capture start")
    }
    if (keyCode == 16) { // VER.MAJ
        Capturer.stop()
        Capturer.save()
        console.log("fin screen capture")
    }*/

    //backing tracks animations
    if (keyIsDown(65) == true) {
        for (let i = 0; i < 4; i++) {
            colorsCircles[i] = random(palette)
        }

        //setup of the colors and rotations of forms
        for (let i = 0; i < 4; i++) {
            colorsCircles[i] = random(palette)
        }
        for (let j = 0; j < height / 2; j = j + 35) {
            randomColor[j] = random(colorsCircles)
            orientationA[j] = random(j)
            directionA[j] = int(random(0, 2) < 1) ? 1 : -1
        }

        //only one backing track at the same time is available, because others sounds change depeding on it
        //ok there is a trick : if you press two of them or more at the same time, it slip throught this rule
        if ((soundZ.isPlaying() == true) || (soundE.isPlaying() == true) || (soundR.isPlaying() == true)) {
            //console.log("backingtrack")
            soundZ.stop()
            soundE.stop()
            soundR.stop()
        }
    }

    if (keyIsDown(69) == true) { //e
        //only one backing track at the same time is available, because others sounds change depeding on it
        if ((soundA.isPlaying() == true) || (soundZ.isPlaying() == true) || (soundR.isPlaying() == true)) {
            //console.log("backingtrack")
            soundA.stop()
            soundZ.stop()
            soundR.stop()
        }
    }

    if (keyIsDown(82) == true) { //r
        for (let i = 0; i < 25; i++) {
            redR[i] = random(80)
            greenR[i] = random(250)
            blueR[i] = random(255)
            xR[i] = random(width)
            yR[i] = random(height)
        }
        //only one backing track at the same time
        if ((soundZ.isPlaying() == true) || (soundE.isPlaying() == true) || (soundA.isPlaying() == true)) {
            //console.log("backingtrack")
            soundZ.stop()
            soundE.stop()
            soundA.stop()
        }
    }

    if (keyIsDown(90) == true) {
        if ((soundA.isPlaying() == true) || (soundE.isPlaying() == true) || (soundR.isPlaying() == true)) {
            //console.log("backingtrack")
            soundA.stop()
            soundE.stop()
            soundR.stop()
        }
    }

    //others animations
    if (keyIsDown(70) == true) {
        for (let i = 0; i < 30; i++) { //30 valeur arbitraire, mais sur mon écran 17", j'ai 13 cercles...prudence est mère de sureté !
            Ycircle[i] = random(-75, 75)
        }
    }

    if (keyIsDown(70) == true) {
        couleurF = random(palette)
    }

    if (keyIsDown(71) == true) {
        couleurG = random(palette)
        directionG = int(random(0, 2) < 1) ? 1 : -1
    }

    if (keyIsDown(72) == true) {
        for (let w = 0; w < width; w = w = w + 200) {
            x1H[w] = random(width)
            x2H[w] = random(width)
        }
        couleurH = random(palette)
    }

    if (keyIsDown(73) == true) {
        couleurI = random(palette)
    }

    if (keyIsDown(74) == true) {
        couleurJ = random(palette)
        directionJ = random(TWO_PI)
        newOriginX = random((width / 2) - 50, (width / 2) + 50)
        newOriginY = random((height / 2) + 50, (height / 2) - 50)

        for (let i = 0; i < 15; i++) {
            xtargetJ[i] = random(100, 500)
            ytargetJ[i] = random(-100, 100)
        }
    }

    if (keyIsDown(75) == true) {
        couleurK = random(palette)
    }

    if (keyIsDown(77) == true) {
        couleurM = random(palette)
    }

    if (keyIsDown(78) == true) {
        couleurN = random(lineColor)
    }

    if (keyIsDown(80) == true) {
        couleurP = random(palette)
    }

    if (keyIsDown(84) == true) {
        couleurT = random(palette)
    }

    if (keyIsDown(85) == true) {
        couleurU = random(palette)
    }

    if (keyIsDown(86) == true) {
        couleurV = random(palette)
    }

    if (keyIsDown(89) == true) {
        couleurY = random(palette)
    }

    //easter egg
    if (keyIsDown(66) == true) b = 1
}


function musicPlay(sound, keyID) {

    if (keyIsDown(keyID) == true) {
        seed = random(9999)

        //to display instructions if no key is pressed for 5sec since the end of the last sound
        newtimer = millis() + 5000 + (sound.duration() * 1000) // temps actuel + 5 sec + durée du son
        if (newtimer > timer) { //pour s'assurer qu'une animation courte déclenchée après une longue ne vienne pas reset le timer
            timer = newtimer
        }

        if (sound.isPlaying() == true) {
            sound.stop()
            sound.play()
        } else sound.play()
    } //ifkeydown
}


function windowResized() {
    resizeCanvas(windowWidth, windowHeight)
    background(0)
}


function animA() {
    // multiples couches de cerlces qui pivotent dans un sens aléatoire en fonction du volume d'une plage de fréquence
    push()
    soundAFFT.analyze()
    let basses = soundAFFT.getEnergy("bass")
    // console.log(basses)
    translate(width / 2, height / 2)

    //select only 4 colors in the palette available
    let angle = TWO_PI / 80

    //define one color + angle per circle, sometimes many side by side can be of the same color
    for (let j = 0; j < height / 2; j = j + 35) {
        //randomColor = random(colorsCircles)

        push()
        rotate(orientationA[j])
        noFill()
        strokeWeight(4)
        strokeCap(SQUARE)
        stroke(randomColor[j])

        //change their position proportionally to the bass freq with randomly direction
        push()
        if (basses > 225) rotate(map(basses, 0, 255, PI / 8, TWO_PI) * directionA[j])
        //display circles
        beginShape()
        for (let i = 0; i < 72; i++) {
            let x = (cos(angle * i) * ((height / 2) - j))
            let y = (sin(angle * i) * ((height / 2) - j))
            vertex(x, y)
        }
        endShape()
        pop()
        pop()
    }
    pop()
}


//cercles de totem rectangulaires filaires, avec "vibrations" sur les notes appuyées
function animB() {
    push()
    rectMode(CENTER)
    let levelB = amplitudeB.getLevel()
    //console.log(levelB)
    let seuil = map(levelB, 0, 0.08187300869102197, 0, 100)
    //retrecissement du rect interne par rapport à l'amp
    let miniX = map(levelB, 0, 0.08187300869102197, 50, 5)
    let miniY = map(levelB, 0, 0.08187300869102197, 180, 18)
    //grossissement du rect exterieur par rapport à l'amplitude
    let maxX = map(levelB, 0, 0.08187300869102197, 0, 50)
    let maxY = map(levelB, 0, 0.08187300869102197, 0, 180)
    let minicoin = map(levelB, 0, 0.08187300869102197, 0, 10)


    let totems = 6
    let currentTotem = (map(soundB.currentTime(), 0, soundB.duration(), 0, totems + 1))
    let posXgauche = 0
    let posYgauche = 0
    let posYdroite = 0
    let posXdroite = 0

    push()
    translate(width / 2, height / 2)
    for (let i = 0; i < currentTotem; i++) {

        posXdroite = (height / 4 * -cos(i * PI / 6 + PI / 2))
        posYdroite = (height / 4 * -sin(i * PI / 6 + PI / 2))
        posXgauche = height / 4 * cos(i * PI / 6 + PI / 2)
        posYgauche = height / 4 * -sin(i * PI / 6 + PI / 2)

        noFill()
        strokeWeight(2)
        stroke(255, 38 * i, 0)
        rect(posXdroite, posYdroite, 50 + maxX, 180 + maxY, 10)
        rect(posXgauche, posYgauche, 50 + maxX, 180 + maxY, 10)

        //display vibrating rectangles only f the sound exceed 60 %
        if (seuil > 50) {
            for (let i = 0; i < minicoin; i++) {
                rect(posXdroite, posYdroite, miniX, miniY, minicoin)
                rect(posXgauche, posYgauche, miniX, miniY, minicoin)
            }
        }
    }
    pop()
    pop()
}

//suite de boules tirées par un effet elastique proportionnel au son
//try to launch it several times before the sound ends !
function animC() {
    push()
    soundCFFT.analyze()
    let middle = soundCFFT.getEnergy("mid")
    // console.log(middle)
    let middleSpring = map(middle, 105, 249, -(height / 4), height / 4)
    let timeline = map(soundC.currentTime(), 0, soundC.duration() * 0.65, 50, width - 50)
    //add new spring for each excess of the energy of the range of freq
    if (middle > 105) springs.push(new Spring(timeline, middle, middleSpring))

    for (let i = 0; i < springs.length; i++) {
        springs[i].update();
        springs[i].display();
    }
    pop()
}

function animD() {
    //spirograph, try to keep the key down and drop it sometimes
    push()
    t = map(soundD.currentTime(), 0, soundD.duration(), 0, 20)
    angleD += 0.25 * t
    let sinval = sin(angleD)
    let cosval = cos(angleD)
    let x = (width / 2) + (cosval * 90)
    let y = (height / 2) + (sinval * 90)
    let x2 = x + cos(angleD * 30) * 90 / 2
    let y2 = y + sin(angleD * 30) * 90 / 2
    fill(235, 223, 89)
    noStroke()
    rect(x, y, 25, 25, 2)
    fill(94, 211, 83)
    rect(x2, y2, 25, 25, 2)
    pop()
}

//inspirée d'un sketch Pde tiré du bouquin "DEsign Generatif" de H. Bohnacker, B. Grob, J. Laub, et C. Lazzeroni publié par Pyramid
function animE() {
    //polygone au nombre de faces changeant selon l'amplitude du son
    push()
    var levelE = amplitudeE.getLevel()
    //console.log(levelE)
    translate(width / 2, height / 2)
    let vertices = map(levelE, 0, 0.19, 2, 50)
    let nbcircles = 80 // map (soundE.currentTime(),0,soundE.duration(),0,200)
    let angle = TWO_PI / vertices
    noFill()
    strokeWeight(1)

    for (let j = 0; j < nbcircles; j++) {
        let radius
        //créer une différence dans les shapes selon leur taille
        if (j > 40) radius = j / 35
        else radius = j / 10

        stroke(74, 184, 219, nbcircles)
        beginShape()
        for (let i = 0; i < vertices; i++) {
            let x = (cos(angle * i) * ((height / 2) - 100)) / radius
            let y = (sin(angle * i) * ((height / 2) - 100)) / radius
            vertex(x, y)
        }
        endShape(CLOSE)
    }
    pop()
}

function animF() {
    //pulupulu un escargot qui en appelle un autre
    let levelF = amplitudeF.getLevel()

    let radius = map(levelF, 0, 0.1, 20, 150) //pour changer le radius des points
    let point = 12
    let currentPoint = map(soundF.currentTime(), 0, soundF.duration(), 0, point + 1)

    push()
    noFill()
    strokeWeight(2)
    stroke(couleurF)
    translate(0, height / 2)
    for (let i = 1; i < currentPoint + 1; i++) {

        ellipse((i * width / 14), Ycircle[i], radius, radius)
        ellipse((i * width / 14), Ycircle[i], radius + 15, radius + 15)
        ellipse((i * width / 14), Ycircle[i], radius + 30, radius + 30)

    }
    pop()
}

function animG() {
    //droite verticale  qui slide vers la droite
    push()
    var levelG = map(amplitudeG.getLevel(), 0, 0.08772784950665151, 0, 100)
    let posX = map(soundG.currentTime(), 0, soundG.duration(), 0, width)
    let posY = map(soundG.currentTime(), 0, soundG.duration(), 0, height)
    stroke(couleurG)
    strokeWeight(30)
    if (levelG > 60) {
        if (directionG == 1) {
            line(posX, 0, posX, height)
            line(posX - (width / 18), 0, posX - (width / 18), height)
        } else {
            line(0, posY, width, posY)
            line(0, posY - (height / 10), width, posY - (height / 10))
        }
    }
    pop()
}

function animH() {
    //croisement de multiples barres avec différents angles bougeant un peu à la manière d'un noise, mais selon le volume d'une plage de fréquences
    push()
    noFill()
    strokeWeight(5)
    stroke(couleurH)
    soundHFFT.analyze()
    let middle = soundHFFT.getEnergy("highMid")
    //  console.log(middle)
    let varX = map(middle, 0, 123.5, -100, 100)
    let posX = map(soundH.currentTime(), 0, soundH.duration(), 0, width)

    for (let w = 0; w < width; w = w = w + 200) {
        //change their position proportionally to the bass freq with randomly direction
        let direction = int(random(0, 2) < 1) ? 1 : -1
        line(x1H[w] + (varX * direction), 0, x2H[w] + (varX * direction), height)
    }
    pop()
}

function animI() { //i
    //matéralisation de l'amplitude entre deux droites verticales
    let levelI = amplitudeI.getLevel()
    var length = map(levelI, 0, 0.042, 0, width / 10)
    push()
    noStroke()
    fill(couleurI)
    translate(width / 2, 0)
    //cacher la fin du son qui n'est plus audible
    if (soundI.currentTime() < soundI.duration()) {
        for (i = 0; i < height; i++) {
            ellipse(length, i, 10, 10)
            ellipse(-length, i, 10, 10)
        }
        pop()
    }
}

function animJ() { //j
    //jet de cocobilles
    let t = map(soundJ.currentTime(), 0, soundJ.duration() * 0.60, 0, 1)
    t = constrain(t, 0, 1)

    push()
    noStroke()
    fill(couleurJ)
    //placer le point d'origine dans un cercle de 50px autour du centre de l'écran
    translate(newOriginX, newOriginY)
    //angle de lancé alétoire
    rotate(directionJ)
    for (let i = 0; i < 15; i++) {
        let x = lerp(0, xtargetJ[i], t)
        let y = lerp(0, ytargetJ[i], t)
        ellipse(x, y, 20, 20)
    }
    pop()
}

//la course des pôles d'une ligne !
function animK() {
    push()
    let time = map(soundK.currentTime(), 0, soundK.duration() * 0.75, 0, 1) * 1.4
    time = constrain(time, 0, 1)
    let before = lerp(width / 6, 5 * width / 6, time)
    let after = map(soundK.currentTime(), 0, soundK.duration(), width / 8, 5 * (width / 6)) // départ plus proche du bord pour éviter l'impression de décentrage
    stroke(couleurK)
    strokeWeight(height / 8)
    strokeCap(SQUARE)
    line(before, height / 2, after, height / 2)
    pop()
}

function animL() { //l
    let transp = map(soundL.currentTime(), 0, soundL.duration() - 0.2, 100, 0)
    background(59, 66, 86, transp)
}

function animM() {
    //interpolation du nombre de face d'un polygone
    push()
    let radius;
    if (width < height) radius = width / 3
    else radius = height / 3

    stroke(couleurM)
    strokeWeight(5)
    noFill()
    strokeJoin(ROUND)
    let mod = map(soundM.currentTime(), 0, soundM.duration(), TWO_PI, 0.001)

    translate(width / 2, height / 2)
    beginShape();
    for (let i = 0; i < TWO_PI; i += mod) {
        let xpos = radius * cos(i);
        let ypos = radius * sin(i);
        vertex(xpos, ypos);
    }
    endShape(CLOSE);
    pop()
}

function animN() {
    //à partir du papillon de T.Fay, un peu lourde, ralentit le Patitap...
    push()
    translate(width / 2, height / 2)
    for (let i = 0; i <= 6000; i++) {
        // var angle = i * 24.0 * PI / 10000;
        var angle = map(soundN.currentTime(), 0, soundN.duration(), 2, TWO_PI * 2) * i / 4000
        var x = cos(angle) * ((cos(angle)) - 10 * cos(4 * angle) - pow(sin(angle / 4), 15)) * 40
        var y = sin(angle) * ((cos(angle)) - 10 * cos(4 * angle) - pow(sin(angle / 4), 15)) * 40
        stroke(couleurN)
        strokeWeight(1)
        noFill()
        push()
        rotate(i / 210)
        line(x, y, x + 100, y + 100)
        pop()
    }
    pop()
}

function animO() {
    //circles morphing depending on amp of the sound ; w/ effect of dephasing between x and y axes
    push()
    noFill()
    strokeWeight(1.5)
    let levelO = amplitudeO.getLevel()
    amppY += 0.05 // pour déphaser les axes x et y des cercles
    amppX += 0.03
    let radiusX = map(levelO, 0, 0.1, 30, 350) * cos(amppX)
    let radiusY = map(levelO, 0, 0.1, 30, 350) * cos(amppY)

    for (let i = 0; i < 25; i++) {
        let c = color(i * 4, 9, 154)
        stroke(c)
        ellipse((width / 2), (height / 2), radiusX + (i * 15), radiusY + (i * 15))
    }
    pop()
}

function animP() {
    //petites lucioles qui se déplacent de gauche vers la droite
    push()
    let x = map(soundP.currentTime(), 0, soundP.duration(), 0, width)
    noStroke()
    fill(couleurP, 30)
    for (let i = height / 4; i < height; i = i + (height / 4)) {
        let y = i + (sin(x) * 20)
        ellipse(x, y, 20, 20)
    }
    pop()
}

function animQ() {
    //spring effect ; try to tap a lot of time on Q key and charge the spring !
    push()
    springQ.push(new Spring(100, width - 200))
    springQ[0].update();
    springQ[0].displayQ();
    pop()
}

function animR() {
    //rectangles qui tournent sur eux mêmeS
    push()
    rectMode(CENTER)
    for (let i = 0; i < 25; i++) {
        push()
        noFill()
        strokeWeight(2)
        stroke(redR[i], greenR[i], blueR[i])
        translate(xR[i], yR[i])
        rotate(frameCount / 10 + i)
        rect(0, 0, 200, 50, 10)
        pop()
    }
    pop()
}


function animS() {
    // un carré qui se fait la malle en tournicotant
    push()
    let g = map(soundS.currentTime(), 0, soundS.duration(), 0, 1)
    let x = lerp(0, width, g)
    //pour conserver plus ou moins la même vitesse de déplacement selon la taille de la fenetre
    let inconnue = width / 7
    let y = -(((x * x) / inconnue) + x / inconnue)

    rectMode(CENTER)
    noFill()
    strokeWeight(2)
    stroke(176, 17, 65)
    push()
    translate(width / 4 + x, height + y)
    rotate(frameCount / 10)
    rect(0, 0, 50, 50)
    pop()
    pop()
}

function animT() {
    //cercle gigoteur
    push()
    let x = width / 2
    let y = height / 2
    let size = 80 + map(soundT.currentTime(), 0, soundT.duration(), 0, 80)

    soundTFFT.analyze()
    let aigu = soundTFFT.getEnergy("highMid")
    // console.log(aigu)
    let levelT = amplitudeT.getLevel()
    // console.log(levelT)

    if (soundT.currentTime() > soundT.duration() / 2.2) { //correspond au deuxième temps de la phrase
        size = 116 // fixer la taille atteinte à ce moment de l'anim
        x = map(aigu, 0, 250, 80, width - 200)
        y = map(levelT, 0, 0.2, 50, height)
    }
    noStroke()
    fill(couleurT)
    ellipse(x, y, size, size)

    pop()
}

//inspired by a sketch Pde from  "DEsign Generatif" (p.357), written by H. Bohnacker, B. Grob, J. Laub, et C. Lazzeroni, published by Pyramid
function animU() { //u
    //Lissajous curve
    push()
    translate(width / 2, height / 2)
    let nombrePoints = 1500
    let apparition = map(soundU.currentTime(), 0, soundU.duration() * 0.76, 0, nombrePoints)
    stroke(couleurU)
    strokeWeight(1)
    noFill()

    for (let i = 0; i <= nombrePoints && apparition > i; i++) {
        push()
        let angle = map(i, 0, nombrePoints, 0, TWO_PI);
        // play w/ value of the Lissajous curve
        let x = (sin(angle * 2 + radians(30)) * cos(angle)) * (width / 2 - 25)
        let y = (sin(angle * 5) * cos(angle)) * (height / 2 - 25)
        translate(x, y)
        rotate(i)
        rect(0, 0, 15, 15)
        pop()
    }
    pop()
}

function animV() {
    //circle morph qui arrivent sur le dancefloor
    push()
    fill(couleurV)
    noStroke()
    var levelV = amplitudeV.getLevel()
    amppY += 0.05 // même effet de déphasage que animO
    amppX += 0.03
    let radiusY = 120
    let radiusX = 120

    let posY = map(soundV.currentTime(), 0, soundV.duration() * 0.08, height, height / 2)
    let posYhaut = map(soundV.currentTime(), 0, soundV.duration() * 0.08, 0, height / 2)
    let diminue = 1

    if (soundV.currentTime() > soundV.duration() * 0.08) { // fixer la position des cercles au centre
        diminue = map(soundV.currentTime(), soundV.duration() * 0.08, soundV.duration(), 1, 10)
        posY = height / 2
        posYhaut = height / 2
        radiusX = map(levelV, 0, 0.1, 30, 180) * cos(amppX)
        radiusY = map(levelV, 0, 0.1, 30, 180) * cos(amppY)
    }

    ellipse(width / 4, posYhaut, radiusX / diminue, radiusY / diminue)
    ellipse(width / 2, posY, radiusX / diminue, radiusY / diminue)
    ellipse(3 * width / 4, posYhaut, radiusX / diminue, radiusY / diminue)
    pop()
}

function animW() {
    //la chute molle
    var distX = 6 * width / 8
    var distY = 6 * height / 7
    let progress = map(soundW.currentTime(), 0, soundW.duration() - 1.5, 0, 1)

    fill(90, 100, 187);
    noStroke()
    if (progress < 1) {
        var x = (width / 8) + progress * distX;
        var y = (height / 7) + pow(progress, 8) * distY;
    }
    ellipse(x, y, 50, 50);
}





function animX() {
    //most satisphying circle morph, top views on YT !
    sizeX += 0.05
    sizeY += 0.07

    //pour garder une animation smooth même sur écran grand
    let taillemax
    if (taillemax < 250) tailemax = (width / 2)
    else taillemax = 250

    noFill()
    stroke(212, 42, 41)
    strokeWeight(2)
    ellipse(width / 2, height / 2, cos(sizeX) * taillemax, cos(sizeY) * taillemax)
}

function animY() {
    //la glissade infernale vers le centre du Patatap
    push()
    t = map(soundY.currentTime(), 0, 3.05, 4 * TWO_PI, 0)

    radiusY = map(soundY.currentTime(), 0, 3.05, (height / 2) - 50, 0)
    let sinval = +sin(t)
    let cosval = +cos(t)
    let x = (width / 2) + (cosval * radiusY)
    let y = (height / 2) + (sinval * radiusY)
    let taille = 15
    //anim en deux temps : la glissade dans un premier temps (else), agrandissement ensuite lorsque le point atteint le centre de l'écran
    if (soundY.currentTime() > 3.1) {
        taille = map(soundY.currentTime(), 3.05, soundY.duration(), 15, 200)
        //h += 0.001 noise foireux à corriger
        x = (width / 2)
        y = (height / 2)
        //changement entre une forme pleine et un contour smooth
        stroke(couleurY)
        strokeWeight(map(soundY.currentTime(), 3.05, soundY.duration(), 2, 5))
        noFill()
    } else {
        noStroke()
        fill(couleurY)
    }
    ellipse(x, y, taille, taille)
    pop()
}


function animZ() {
    //LES BISCOOOOTEEES !!!!
    pg.clear()
    if (frameCount % 24 == 0) { //almost the perfect tempo corresponding to the real tempo of the song
        biscottes.push(new biscotte())
    }
    //console.log("length=  " +biscottes.length)
    //plop le compteur de boucle du désespoir
    for (plop = 0; plop < biscottes.length; plop++) {
        // console.log("boucle for " + plop)
        biscottes[plop].update(); // update biscotte transparency
        biscottes[plop].display(pg); // draw new biscotte
        //erase biscotte if it's too much transparent
        if (biscottes[plop].transparence < 5) {
            biscottes = biscottes.splice(plop)
        }
    }
    image(pg, 0, 0, width, height)

}

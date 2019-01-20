var sound1;
var sound2;
var sound3;
var sound4;
var sound5;
var sound6;
var sound7;
var sound8;
var sound9;
var sound10;
var sound11;
var sound12;
var sound13;
var sound14;
var sound15;
var sound16;
var sound17;
var sound18;
var sound19;
var sound20;
var sound21;
var sound22;
var sound23;
var sound24;
var sound25;
var sound26;
var analyzer;
var analyzer2;
var sound6FFT;
var sound7FFT;
var sound19FFT;
var sound26FFT;
var totalPts = 300;
var steps = totalPts + 1;
var xoff = 0.0;
var xincrement = 0.01;
var a = 0.0;
var s = 0.0;
var x = 0;
var y = 0;
var dim = 80.0;
var xpos = []
var ypos = []
var xtarget = []
var ytarget = []
var sound13Amp
var img;
var smallPoint, largePoint;
var angle1 = 0;
var angle2 = 0;
var scalar = 70;
var r;
var theta;
var theta_vel;
var theta_acc;
var yoff = 0.0;
var pg;
var xpos2 = 0;
var ypos2 = 0;
var xdir = 5;
var ydir = 5;
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






function preload() {
	sound1 = loadSound('assets/batterie1.mp3');
	sound2 = loadSound('assets/bruit1.wav');
	sound3 = loadSound('assets/fer.wav');
	sound4 = loadSound('assets/son4.wav');
	sound5 = loadSound('assets/son5.wav');
	sound6 = loadSound('assets/son6.wav');
	sound7 = loadSound('assets/son7.wav');
	sound8 = loadSound('assets/son8.wav');
	sound9 = loadSound('assets/son9.wav');
	sound10 = loadSound('assets/son10.wav');
	sound11 = loadSound('assets/son11.wav');
	sound12 = loadSound('assets/son12.wav');
	sound13 = loadSound('assets/son13.wav');
	sound14 = loadSound('assets/son14.wav');
	sound15 = loadSound('assets/son15.wav');
	sound16 = loadSound('assets/son16.wav');
	sound17 = loadSound('assets/son17.wav');
	sound18 = loadSound('assets/son18.wav');
	sound19 = loadSound('assets/son19.wav');
	sound20 = loadSound('assets/son20.wav');
	sound21 = loadSound('assets/son21.wav');
	sound22 = loadSound('assets/son22.wav');
	sound23 = loadSound('assets/son23.wav');
	sound24 = loadSound('assets/son24.wav');
	sound25 = loadSound('assets/son25.wav');
	sound26 = loadSound('assets/son26.wav');
	img = loadImage("assets/daniel.jpg");
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0, 0, 0);

	analyzer = new p5.Amplitude(0.15);
	analyzer.setInput(sound1);
	analyzer.toggleNormalize();

	analyzer2 = new p5.Amplitude(0.15);
	analyzer2.setInput(sound2);
	analyzer2.toggleNormalize();


	sound6FFT = new p5.FFT(0.8, 16);
	sound6FFT.setInput(sound6);

	sound19FFT = new p5.FFT(0.8, 16);
	sound19FFT.setInput(sound19);

	sound7FFT = new p5.FFT(0.8, 1024)
	sound7FFT.setInput(sound7)

	sound26FFT = new p5.FFT()
	sound26FFT.setInput(sound26)

	for (var i = 0; i < 50; i++) {
		xpos.push(random(0, width))
		ypos.push(random(0, -height))
		xtarget.push(random(width))
		ytarget.push(random(height))
	}

	sound13Amp = new p5.Amplitude()
	sound13Amp.setInput(sound13)
	sound13Amp.toggleNormalize()

	smallPoint = 4;
	largePoint = 40;
	imageMode(CENTER);
	img.loadPixels();



	r = height * 0.45;
	theta = 0;
	theta_vel = 0;
	theta_acc = 0.0001;

	pixelDensity(1);
	pg = createGraphics(windowWidth, windowHeight);
	pg.pixelDensity(1);

}

function playSound(sound, keyId) {
	if (keyIsDown(keyId) == true) {
		if (sound.isPlaying() == false) {
			sound.play();
		}
	}
}

function draw() {
	background(0, 0, 0);
	if (sound1.isPlaying() == true) {
		push();
		var rms = analyzer.getLevel();
		var ellipseSize = map(rms, 0, 1, 50, 800);
		var ellipseAlpha = map(rms, 0, 1, 50, 255);

		fill(244, 102, 27)
		ellipse(width * 0.5, height * 0.5, ellipseSize, ellipseSize)
		pop();
	}
	if (sound2.isPlaying() == true) {
		push();
		var rms2 = analyzer2.getLevel();
		var ellipseSize2 = map(rms2, 0, 1, 50, 800);
		var ellipseAlpha2 = map(rms2, 0, 1, 50, 255);

		fill(255, 100, 100, ellipseAlpha2);
		ellipse(width * 0.5, height * 0.5, 250, 250)
		pop();
	}
	if (sound3.isPlaying() == true) {
		push();
		var rad = map(sound3.currentTime(), 0, sound3.duration(), 50, width)
		fill(255, 220, 0)
		ellipse(width * 0.5, height * 0.5, rad, rad)
		pop();
	}
	if (sound4.isPlaying() == true) {
		push();
		translate(width * 0.5, height * 0.5)
		var ang = map(sound4.currentTime(), 0, sound4.duration(), 0, PI)
		rectMode(CENTER)
		rotate(ang)
		fill(0, 0, 255)
		rect(0, 0, width * 0.25, width * 0.15)
		pop();
	}
	if (sound5.isPlaying() == true) {
		push();
		translate(width * 0.5, height * 0.5)
		var inv = map(sound5.currentTime(), 0, sound5.duration(), 0, -PI)
		rectMode(CENTER)
		rotate(inv)
		fill(165, 38, 10)
		rect(0, 0, width * 0.5, height * 0.5)
		pop();
	}
	if (sound6.isPlaying() == true) {
		push();
		sound6FFT.analyze();
		rectMode(CENTER);
		var nrj1 = sound6FFT.getEnergy("mid")
		console.log(nrj1)
		pop();

		push()
		fill(140, 0, 249, nrj1)
		translate(width * 0.25, height * 0.25)
		rotate(PI / 4)
		rect(0, 0, width * 0.2, width * 0.2)
		pop()

		push()
		fill(0, 200, 255, 50)
		translate(width * 0.5, height * 0.25)
		rotate(PI / 4)
		rect(0, 0, nrj1, nrj1)
		pop()

		push()
		fill(140, 0, 249, nrj1)
		translate(width * 0.75, height * 0.25)
		rotate(PI / 4)
		rect(0, 0, width * 0.2, width * 0.2)
		pop()
	}
	if (sound7.isPlaying() == true) {
		push();
		var waveform = sound7FFT.waveform();
		noFill();
		beginShape();
		stroke(255, 0, 127);
		strokeWeight(10);
		for (var i = 0; i < waveform.length; i++) {
			var x = map(i, 0, waveform.length, 0, width);
			var y = map(waveform[i], -1, 1, 0, height);
			curveVertex(x, y);
		}
		endShape();
		pop()
	}

	if (sound8.isPlaying() == true) {
		push();
		var rand = 0;
		stroke(102, 0, 153)
		strokeWeight(5);
		for (var i = 1; i < steps; i++) {
			point((width / steps) * i, (height / 2) + random(-rand, rand));
			rand += random(-5, 5);
		}
		pop();
	}

	if (sound9.isPlaying() == true) {
		push();
		fill(0, 10);
		rect(0, 0, width, height);
		var n = noise(xoff) * width / 2;
		xoff += xincrement;
		fill(58, 137, 35);
		ellipse(n, height / 2, 64, 64);
		pop();
	}

	if (sound10.isPlaying() == true) {
		push();
		from = color(194, 247, 50);
		to = color(50, 247, 50, 10);
		for (var i = 0; i < 5; i++) {

			fill(to);
			quad(random(500, 760), random(height),
				random(500, 760), random(height),
				random(500, 760), random(height),
				random(500, 760), random(height));
		}
		frameRate(50);
		pop();
	}
	if (sound11.isPlaying() == true) {
		push();

		a = a + 0.04;
		s = cos(a) * 2;
		translate(width / 2, height / 2);
		scale(s);
		fill(0, 0, 255);
		rect(0, 0, 50, 50);
		translate(75, 0);
		fill(3, 34, 76);
		scale(s);
		rect(0, 0, 50, 50);
		pop();
	}

	if (sound12.isPlaying() == true) {
		var t = map(sound12.currentTime(), 0, sound12.duration() * 0.75, 0, 1)
		var grey = map(sound12.currentTime(), sound12.duration() * 0.75, sound12.duration(), 255, 180)
		t = constrain(t, 0, 1)
		grey = constrain(grey, 180, 255)
		push()
		fill(grey)
		for (var i = 0; i < 50; i++) {
			var x = lerp(xpos[i], xtarget[i], t)
			var y = lerp(ypos[i], ytarget[i], t)
			ellipse(x, y, 50, 50)
		}
		pop()
	}

	if (sound13.isPlaying() == true) {
		push();

		colorMode(HSB, 360, 100, 100, 100)
		var lvl = sound13Amp.getLevel() * 200;
		var nsegment = 96
		var ncurrentsegment = (map(sound13.currentTime(), 0, sound13.duration(), 0, nsegment + 10))
		strokeWeight(4)
		for (var i = 0; i < ncurrentsegment; i++) {
			var h = map(i, 0, nsegment, 0, 320)
			stroke(h, 45, 100, lvl + 55)
			var angle = map(i, 0, nsegment, 0, TWO_PI);
			var x = width * 0.5 + height * 0.45 * cos(angle)
			var y = height * 0.5 + height * 0.45 * sin(angle)
			line(width * 0.5, height * 0.5, x, y)
		}
		pop()


	}

	if (sound14.isPlaying() == true) {
		push();

		var ang1 = radians(angle1);
		var ang2 = radians(angle2);

		var x1 = width / 2 + (scalar * cos(ang1));
		var x2 = width / 2 + (scalar * cos(ang2));

		var y1 = height / 2 + (scalar * sin(ang1));
		var y2 = height / 2 + (scalar * sin(ang2));


		fill(255, 0, 0);
		ellipse(x1, height * 0.5 - 120, scalar, scalar);
		ellipse(x2, height * 0.5 + 120, scalar, scalar);

		fill(145, 40, 59);
		ellipse(width * 0.5 - 120, y1, scalar, scalar);
		ellipse(width * 0.5 + 120, y2, scalar, scalar);

		angle1 += 2;
		angle2 += 3;
		pop();
	}

	if (sound15.isPlaying() == true) {
		push();
		var pointillize = map(mouseX, 0, width, smallPoint, largePoint);
		var x = floor(random(img.width));
		var y = floor(random(img.height));
		var pix = img.get(x, y);
		fill(pix, 128);
		ellipse(x, y, pointillize, pointillize);
		pop();
	}



	if (sound16.isPlaying() == true) {
		push();
		translate(width / 2, height / 2);
		var x = r * cos(theta);
		var y = r * sin(theta);
		ellipseMode(CENTER);
		noStroke();
		fill(128, 128, 0);
		ellipse(x, y, 70, 70);
		theta_vel += theta_acc;
		theta += theta_vel;
		pop();
	}

	if (sound17.isPlaying() == true) {
		push();
		fill(50,255, 99, 71);
		beginShape();

		var xoff1 = 0;
		for (var x = 0; x <= width; x += 5) {

			var y = map(noise(xoff1, yoff), 0, 1, 200, 300);

			vertex(x, y);

			xoff1 += 0.05;
		}

		yoff += 0.01;
		vertex(width, height);
		vertex(0, height);
		endShape(CLOSE);
		pop();
	}

	if (keyIsDown(75)) {
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

	if (sound18.isPlaying() == true) {



		push()
		noFill()
		fill(255, 0, 255)
		ellipse(width * 0.5, height * 0.5, anim1.w, anim1.w)
		pop()
	}


	if (sound19.isPlaying() == true) {

		push();

		sound19FFT.analyze();
		ellipseMode(CENTER);
		var nrj19 = sound19FFT.getEnergy("mid")
		console.log(nrj19)
		pop();

		push()
		fill(223, 109, 20, nrj19)
		translate(width * 0.25, height * 0.25)
		rotate(PI / 4)
		ellipse(0, 0, width * 0.2, width * 0.2)
		pop()

		push()
		fill(0, 200, 255, 50)
		translate(width * 0.5, height * 0.25)
		rotate(PI / 4)
		ellipse(0, 0, nrj19, nrj19)
		pop()

		push()
		fill(223, 109, 20, nrj19)
		translate(width * 0.75, height * 0.25)
		rotate(PI / 4)
		ellipse(0, 0, width * 0.2, width * 0.2)
		pop()



	}

	if (keyIsDown(77)) {


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


		if (sound20.isPlaying() == true) {

			push()
			noStroke()
			fill(22, 184, 78)
			ellipse(anim2.x1, anim2.y1, 50, 50)
			fill(84, 249, 141)
			ellipse(anim2.x2, anim2.y2, 50, 50)
			fill(20, 148, 20)
			ellipse(anim2.x3, anim2.y3, 50, 50)
			pop()

		}



		if (keyIsDown(87)) {
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
		if (sound21.isPlaying() == true) {
			push()
			noStroke()
			rectMode(CENTER)
			fill(102, 0, 153)
			translate(anim3.x, height * 0.5)
			rotate(anim3.rot)
			rect(0, 0, 80, 160)
			pop()
		}




		if (keyIsDown(88)) {
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
		if (sound22.isPlaying() == true) {
			push()
			noStroke()
			rectMode(CENTER)
			fill(249, 66, 158)
			rect(width * 0.5, anim4.y, 50, anim4.h)
			pop()

		}




		if (sound23.isPlaying() == true)
		{

			 push();
        	var nsegment23 = 1000
			var ncurrentsegment23 = (map(sound23.currentTime(), 0, sound23.duration(), 0, nsegment23 + 1))
			for (var i = 0; i < ncurrentsegment23; i++) {
            stroke(0, 0, 255);
            strokeWeight(2)
            var angle23 = map(i, 0, nsegment23, 0, TWO_PI);
            var y23 = width * 0.5 + height * 180 * cos(angle23);
            var x23 = height * 1 + height * 0.45 * sin(angle23);
            line(width * 0.5, height * 0.5, x23, y23);
		}

		pop();

  		}

	if (sound24.isPlaying() == true)
		{
			push();
			var rand = 0;
			stroke(249, 66, 158)
			strokeWeight(15);
			for (var i = 1; i < steps; i++) {
			point((width / steps) * i, (height / 2) + random(-rand, rand));
			rand += random(-5, 5);
		}
			pop();
  		}

	if (sound25.isPlaying() == true)
		{

		noStroke()
        push();
        var long = map(sound25.currentTime(), 0, sound25.duration(), 250, width)
        rectMode(CENTER)
        fill(240, 195, 0)
        rect(width / 2, height / 2, long, 5);
        noStroke();
        pop();

  		}

		if (sound26.isPlaying() == true)
		{

		     push()
			 sound26FFT.analyze();
			 rectMode(CENTER)
			 var nrj26 = sound26FFT.getEnergy("bass")
			 var long26 = (map(sound26.currentTime(), 0, sound26.duration(), 0, width))
			 rectMode(CENTER)
        	 fill(55, 20, 250)
        	 rect(width * 0.5, 100, nrj26, long26, 5);
			 noStroke();
			 pop()
    }

		playSound(sound1, 65)
		playSound(sound2, 90)
		playSound(sound3, 69)
		playSound(sound4, 82)
		playSound(sound5, 84)
		playSound(sound6, 89)
		playSound(sound7, 85)
		playSound(sound8, 73)
		playSound(sound9, 79)
		playSound(sound10, 80)
		playSound(sound11, 81)
		playSound(sound12, 83)
		playSound(sound13, 68)
		playSound(sound14, 70)
		playSound(sound15, 71)
		playSound(sound16, 72)
		playSound(sound17, 74)
		playSound(sound18, 75)
		playSound(sound19, 76)
		playSound(sound20, 77)
		playSound(sound21, 87)
		playSound(sound22, 88)
		playSound(sound23, 67)
		playSound(sound24, 86)
		playSound(sound25, 66)
		playSound(sound26, 78)


	}


	function windowResized() {
		resizeCanvas(windowWidth, windowHeight);
		background(0, 0, 0);
	}

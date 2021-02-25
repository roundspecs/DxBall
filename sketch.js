var diameter = 40, x = 1, y = 1;
var speed = {
	x : 3,
	y : 4
};
var score = 0;
var cnvs = {
	x : 900,
	y : 900
};
function setup() {
	createCanvas(cnvs.x, cnvs.y);
}

function draw() {
	
	background(199);
	noStroke();
	fill(255, 0, 0);
	
	if (x >= cnvs.x || x <= 0) {
		speed.x = speed.x * (-1);
		fill(0);
	}
	if (y <= 0) {
		speed.y = speed.y * (-1);
		fill(0);
	} else if (y >= cnvs.y) {
		alert("Game over.Please reload the game or press CTRL+R");
	}
	if (y >= cnvs.y-40 && mouseX <= x + 50 && mouseX >= x - 50) {
	  	speed.y = speed.y * (-1);
		fill(0);
		score++;
	}
	
	x += speed.x;
	y += speed.y;
	ellipse(x, y, diameter, diameter);
	
	fill(0,0,255);
	textSize(24);
	text("Score:",cnvs.x-125,25);
	text(score,cnvs.x-50,25);
	
	fill(100);
	rectMode(CENTER);
	rect(mouseX, cnvs.y, 100, 40);
	
}

// Print dimensions - good to keep ratios as variables throughout!
var cardH = 400;
var cardW = Math.round(cardH*1.636); // maintains aspect ratio throughout

// additional bleed and padding %
// use native JavaScript object Math to round - can't have decimals for pixels
var bleedPadW = Math.round(cardW*0.05);
var bleedPadH = Math.round(cardH*0.05);

// dimensions for bleed area
var bleedXmin = 0;
var bleedXmax = cardW + (bleedPadW*2);
var bleedYmin = 0;
var bleedYmax = cardH + (bleedPadH*2);

// dims for centered card area
var cardXmin = 0 + bleedPadW;
var cardXmax = cardW;
var cardYmin = 0 + bleedPadH;
var cardYmax = cardH;

// dims for centered padding area
var padXmin = cardXmin + bleedPadW;
var padXmax = cardXmax - bleedPadW*2;
var padYmin = cardYmin + bleedPadH;
var padYmax = cardYmax - bleedPadH*2;


function setup() {
	createCanvas(bleedXmax, bleedYmax); //width and height of my canvas
	stroke("red");
	rect(bleedXmin, bleedYmin, bleedXmax-1, bleedYmax-1); // minus one to make it visible inside canvas
	stroke("red");
	rect(cardXmin, cardYmin, cardXmax, cardYmax); // centered
	stroke("red");
	rect(padXmin, padYmin, padXmax, padYmax); // centered
	background(0, 100, 0, 0);
	noStroke();

	// careful! see textSize is used by p5.js library, so don't name it as a var
	var fontSizeA = Math.round(cardH/10);
	fill(55);
	textSize(fontSizeA);
	text("USC", padXmin+bleedPadW, padYmax*0.3)
	var fontSizeNorm = Math.round(cardH/14); // maintain aspect ratio with text too
	fill(75);
	textSize(fontSizeNorm);
	text("Andy Chen", padXmin+bleedPadW, padYmax*0.55);
	fill(0, 102, 0); // note color values - try to improve with cymk-style colors
	text("Student", padXmin+bleedPadW, (padYmax*0.55)+fontSizeA);
	fill(0, 102, 0, 51); // note 4th value is alpha (transparency)
	text("Phone:0922686926", padXmin+bleedPadW, (padYmax*0.55)+(fontSizeA*2));
	fill(0, 102, 0, 51);
	text("Email:andy870417@gmail.com", padXmin+bleedPadW, (padYmax*0.55)+(fontSizeA*3));
	fill(0, 153, 0, 51);
	text("LINE ID:andy870417", padXmin+bleedPadW, (padYmax*0.55)+(fontSizeA*4));

	// create graphic for CEO figure
	fill(0, 161, 0);
	ellipse(padXmax - (bleedPadW*2), padYmin + (bleedPadH*2), bleedPadH, bleedPadW);
	fill(0, 0, 161);
	rectMode(CENTER); // center the rect at a location kind of like a circle instead of begining at a corner
	ellipse(padXmax - (bleedPadW*2), padYmin + (bleedPadH*4), bleedPadW, bleedPadH*2);
	ellipse(padXmax - (bleedPadW*3), padYmin + (bleedPadH*3), bleedPadW, bleedPadH);
	ellipse(padXmax - (bleedPadW), padYmin + (bleedPadH*3), bleedPadW, bleedPadH);
	fill(218, 161, 106, 15);
	quad(padXmax - (bleedPadW*3), padYmin + (bleedPadH*2.3), padXmin, padYmin, padXmin+bleedPadW, padYmax*0.6, padXmin+bleedPadW, padYmax);

	// create graphic not CEO figures
	for (var i=0; i<6; i++) {
		push();
		translate(padXmax - (bleedPadW*5.5), padYmax - (bleedPadH*11));
		rotate(TWO_PI*i);
		fill(75);
		ellipse(bleedPadW+bleedPadW*i, bleedPadH, bleedPadH, bleedPadW);
		fill(218, 161, 106); // note color values - try to improve with cymk-style colors
		rectMode(CENTER); // center the rect at a location kind of like a circle instead of begining at a corner
		pop();
	}

	// more not-CEO figures - Only need to change 3 parameters
	for (var i=0; i<5; i++) {
		push();
		translate(padXmax - (bleedPadW*4.5), padYmax - (bleedPadH*7));
		rotate(TWO_PI*i);
		fill(75);
		ellipse(bleedPadW+bleedPadW*i, bleedPadH, bleedPadH, bleedPadW);
		fill(218, 161, 106, 51); // note 4th value is alpha (transparency)
		rectMode(CENTER); // center the rect at a location kind of like a circle instead of begining at a corner
		pop();
	}

	// more not-CEO figures - Only need to change 3 parameters
	for (var i=0; i<4; i++) {
		push();
		translate(padXmax - (bleedPadW*3.5), padYmax - (bleedPadH*3));
		rotate(TWO_PI*i);
		fill(75);
		rect(bleedPadW+bleedPadW*i, bleedPadH, bleedPadH, bleedPadW);
		fill(100, 143, 200, 51);
		rectMode(CENTER); // center the rect at a location kind of like a circle instead of begining at a corner
		pop();
	}

	

	
}

function draw() {


}
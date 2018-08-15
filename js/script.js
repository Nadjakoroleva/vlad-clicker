let x = 100;
let y = 250;
let d = 200;
let clicks = 0;

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background("#F00520");
  ellipse(x, y, d, d);
  textSize(30);
  text(clicks, 700, 100);
  //if (mousePressed) {
  //  background(#FF0522);
  //}
}

function mouseClicked() {
  if (mouseX > x - d && mouseX < x + d) {
    if (mouseY > y - d && mouseY < y + d) {
      x = random(100, 700);
      y = random(100, 700);
      d = random(50, 200);
      clicks = clicks + 1;
    }
  }
}

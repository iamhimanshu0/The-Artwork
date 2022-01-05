let x, y;
let r, g, b, a;
let p;

let runStopbtn = document.getElementById("runStop");

let isRunning = false;

function setup() {
  p = createCanvas(600, 420);
  p.parent("sketch-holder");
  x = width / 2;
  y = width / 2;

  r = random(255);
  g = random(255);
  b = random(255);
  a = random(200, 255);

  background(0);
}

function draw() {
  for (let i = 0; i <= 1000; i++) {
    if (isRunning) {
      runStopbtn.innerHTML = "Stop Art";
      randomWalk();
    } else {
      runStopbtn.innerHTML = "Run Art";
    }
  }
}

function randomWalk() {
  x += random(-1, 1);
  y += random(-1, 1);

  x = constrain(x, 0, width);
  y = constrain(y, 0, height);

  r += random(-1, 1);
  g += random(-1, 1);
  b += random(-1, 1);
  a += random(-1, 1);

  r = constrain(r, 0, 255);
  g = constrain(g, 0, 255);
  b = constrain(b, 0, 255);
  a = constrain(a, 100, 255);

  stroke(r, g, 0, a);
  point(x, y);
}

function runAndStop() {
  isRunning = !isRunning;
}

function download() {
  saveCanvas(p, "canvas.jpg");
}

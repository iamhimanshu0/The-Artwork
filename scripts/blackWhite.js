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

  a += random(-10, 1);

  a = constrain(a, 50, 100);

  stroke(255, a);
  point(x, y);
}

function runAndStop() {
  isRunning = !isRunning;
}

function download() {
  saveCanvas(p, "canvas.jpg");
}

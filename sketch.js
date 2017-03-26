
let slider;

function setup() {
  const angle = PI / 4;
  createCanvas(window.innerWidth, window.innerHeight);
  slider = createSlider(0, TWO_PI, PI / 4);
}

function draw() {
  background(55);
  angle = slider.value();
  stroke(255);
  translate(window.innerWidth / 2, height);
  branch(100);
}

function branch(len) {
  line(0, 0, 0, -len);
  translate(0, -len); // move the origin to this location

  if (len > 2) {
    push();
    rotate(angle);
    branch(len * 0.67);
    pop();
    push();
    rotate(-angle);
    branch(len * 0.67);
    pop();
  }
}

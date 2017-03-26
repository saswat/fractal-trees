
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
  translate(200, height);
  branch(100);
}

function branch(len) {
  line(0, 0, 0, -len);
  translate(0, -len); // move the origin to this location
  rotate(angle);
  if (len > 2) {
    branch(len * 0.67);
  }
}

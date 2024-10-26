// loading-animation.js
function setup() {
    const canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    canvas.style('z-index', '-1'); // Ensure it’s behind the text
    noFill();
  }
  
  function draw() {
    background(0, 0, 0, 10); // Semi-transparent background for trailing effect
    stroke(255, 100, 200, 150); // Ripple color
    strokeWeight(2);
    ellipse(width / 2, height / 2, frameCount % 300); // Expanding circle
  }
  
  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }
  
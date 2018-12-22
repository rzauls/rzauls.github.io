let time = 0;

function setup() {
    createCanvas(1600, 900, WEBGL);
}

function draw() {
    background(200);
    orbitControl();

    // x axis (red)
    stroke(255, 0, 0);
    line(0, 0, 0, 400, 0, 0);

    // y axis (green)
    stroke(0, 255, 0);
    line(0, 0, 0, 0, -400, 0);

    // z axis (blue)
    stroke(0, 0, 255);
    line(0, 0, 0, 0, 0, 400);

    noFill();
    stroke(255);
    sphere(200);
    fill(150);
    box(100);
    rotateX(frameCount * 0.01);

    time += 1
}
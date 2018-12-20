let time = 0;
let wave = [];
let slider;


function setup() {
    createCanvas(800, 600);
    slider = createSlider(1, 30, 1);
    slider.position(10, 580);
}

function draw() {
    background(0);
    translate(400, 300);

    let x = 0;
    let y = 0;
    for (let i = 0; i < slider.value(); i++) { //square series
        // movement
        let prevx = x;
        let prevy = y;
        let n = i * 2 + 1;
        let radius = 150 * (4 / (n * PI));
        x += radius * cos(n * time);
        y += radius * sin(n * time);

        // rings
        stroke(255, 100);
        noFill();
        ellipse(prevx, prevy, radius * 2);
        
        // branch
        stroke(0, 255, 0);
        line(prevx, prevy, x, y);
    }

    wave.unshift(y); // add new y value to the start of main array
    
    // take y value and graph on x axis
    // translate(200, 0)
    stroke(255, 0, 0, 100);
    line(x, y, 0, wave[0]); // line from circle to sine

    beginShape();
    noFill();
    stroke(255);
    for (let i = 0; i < wave.length; i++) {
        vertex(i, wave[i]);
    }
    endShape();
    // pop the end of array to stop overflow
    if (wave.length > 400) {
        wave.pop(); // pops last value out
    }

    time += 0.03; //advance time (theta)
}
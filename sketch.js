let time = 0;
let wave = [];
let slider;


function setup() {
    createCanvas(800, 600);
    slider = createSlider(1, 30, 1);
    slider.position(145, 570);
    typeSlider = createSlider(1, 3, 1);
    typeSlider.position(150, 3);
}


function draw() {
    background(0);
    translate(400, 300);


    let typeName = "";
    let x = 0;
    let y = 0;
    if (typeSlider.value() === 1) {
        // square wave
        typeName = "Square";
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
    } else if (typeSlider.value() === 2) {
        // sawtooth
        typeName = "Saw";
        for (let i = 0; i < slider.value(); i++) { //square series
            // movement
            let prevx = x;
            let prevy = y;
            let n = i + 1;
            let radius = 150 * 2 / (Math.pow(-1, n) * n * PI);
            x += radius * cos(-n * time);
            y += radius * sin(-n * time);


            // rings
            stroke(255, 100);
            noFill();
            ellipse(prevx, prevy, radius * 2);

            // branch
            stroke(0, 255, 0);
            line(prevx, prevy, x, y);
        }
    }

    else if (typeSlider.value() === 3) {
        // reverse sawtooth
        typeName = "Rev. Saw";
        for (let i = 0; i < slider.value(); i++) { //square series
            // movement
            let prevx = x;
            let prevy = y;
            let n = i + 1;
            let radius = 150 * 2 / (Math.pow(-1, n) * n * PI);
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
    }




    wave.unshift(y); // add new y value to the start of main array

    // take y value and graph on x axis
    stroke(255, 0, 0, 100);
    line(x, y, 0, wave[0]); // line from circle to wave

    beginShape();
    noFill();
    stroke(255);
    for (let i = 0; i < wave.length; i++) {
        vertex(i, wave[i]);
    }
    endShape();
    // pop the end of array to stop overflow
    if (wave.length > 500) {
        wave.pop();
    }

    // display type of wave
    fill(255);
    noStroke();
    text("Type: " + typeName, -390, -280);
    fill(255);
    textSize(20);
    text("Harmonies: " + slider.value(), -390, 290);
    // draw coords 
    stroke(50, 90);
    line(-380, 0, 380, 0);
    line(0, 250, 0, -250);
    time += 0.03; // theta
}

drawCoordinates = (lineLength) => {
    strokeWeight(10);
    stroke(255, 204, 0);
    beginShape(LINES);
    vertex(0, 0, 0);
    vertex(lineLength, 0, 0);
    endShape();
    beginShape(LINES);
    vertex(0, 0, 0);
    vertex(-lineLength, 0, 0);
    endShape();

    push();

    translate(lineLength / 2, 0, 0);
    rotate(rotation, [1, 0, 0]);
    text("+x", 0, 0)
    pop();


    stroke(255, 0, 255);
    beginShape(LINES);
    vertex(0, 0, 0);
    vertex(0, lineLength, 0);
    endShape();
    beginShape(LINES);
    vertex(0, 0, 0);
    vertex(0, -lineLength, 0);
    endShape();

    push();

    translate(0, lineLength / 2, 0);
    rotate(rotation, [0, 1, 0]);
    text("+y", 0, 0)
    pop();

    stroke(0, 204, 255);
    beginShape(LINES);
    vertex(0, 0, 0);
    vertex(0, 0, lineLength);
    endShape();
    beginShape(LINES);
    vertex(0, 0, 0);
    vertex(0, 0, -lineLength);
    endShape();


    push();
    translate(0, 0, lineLength / 2);
    rotate(rotation, [0, 1, 0]);
    text("+z", 0, 0)
    pop();
}

createTrollFaces = (xpos, ypos, zpos, number) => {
    push();
    rotateY(rotation)

    translate(xpos, ypos, -zpos);
    texture(trollfaces[number]);
    noStroke();
    rotateY(PI / 4);
    rotateX(PI / 8);
    plane(250, 250);
    pop();
}

createPlane = () => {
    push();
    // texture(myBg);
    fill(163, 116, 96);
    noStroke();
    translate(-500, 3500, -500);
    rotateY(PI / 4);
    rotateX(PI / 8);
    // rotateZ(PI / 4);
    plane(10000, 6000);
    // rotate(rotation, p5.Vector(1, 0, -1))
    pop();
}

createEllipse = (radii, xpos = 0, zpos = 0, sectorCount = 20, counter = 0) => {
    push();
    translate(xpos, counter, -zpos);
    rotateX(PI / 2)
    noFill();
    stroke(230);
    strokeWeight(5);
    ellipse(0, 0, radii, radii, sectorCount)
    pop();

}

createSinWave = (amptitude) => {
    strokeWeight(5);
    stroke(255);
    // for (var variable = 0; variable < 360 * 5; variable++) {
    //     beginShape(LINES); 4
    //     if (variable == 0) {
    //         result = sin((variable / 180) * PI);
    //         vertex(0, 0, 0);
    //         vertex(variable, 0, 200 * result);
    //     } else {
    //         result = sin((variable / 180) * PI);
    //         result0 = sin((variable - 1 / 180) * PI);
    //         vertex(variable - 1, 0, 200 * result0);
    //         vertex(variable, 0, 200 * result);
    //     }

    //     endShape();
    // }

    for (var b = 0; b < all_points.length; b++) {

        if (b == 0) {
            beginShape(LINES);
            vertex(0, 0, 0);
            vertex(0, 0, 0);
            endShape();

        } else {
            beginShape(LINES);
            vertex(b - 1, 0, amptitude * all_points[b - 1]);
            vertex(b, 0, amptitude * all_points[b]);
            endShape();
            // createEllipse(300, amptitude * all_points[b - 1], amptitude * all_points[b - 1])
            // createEllipse(300, amptitude * b, amptitude * all_points[b])
        }




    }

}

updateSinWavePath = (increments, rate, count) => {
    for (var variable = increments; variable < increments + (360 * count); variable += rate) {
        var result = sin((variable / 180) * PI);
        all_points.push(result);
        // console.log(result);
    }
}

let myFont;
let myBg;
let trollfaces = []

preload = () => {
    myFont = loadFont('assets/Minecraft.ttf');
    myBg = loadImage('assets/chalbidesert.jpg');
    for (var i = 0; i < 4; i++) {
        trollfaces[i] = loadImage(`assets/trollface${i + 1}.png`)
    }
}

let all_points = []
let x = 0;
let rotation = 0;
let counter = 0;
let counter2 = 0;
let counter3 = 0;
let the_amptitude = 50;

let base_radii = 300;
let max_radii = 3000;
let radii_inc = 25;

let segment_num = 8;
let circle_gap = 50;
let picture_gap = 400;

setup = () => {
    frameRate(60);
    createCanvas(windowWidth, windowHeight, WEBGL);
    // textFont(myFont);
    // textSize(128);
    // textAlign(CENTER, CENTER);

    camera(1200, -1200, 1200, 0, -600, 0, 0, 1, 0);
    for (var variable = 0; variable < (0 + 360) * 2; variable++) {
        var result = sin((variable / 180) * PI);
        all_points.push(result);
        // console.log(result);
    }



}



draw = () => {

    // background(0);

    background(189);

    /////////////////////////////////
    //create dirt ground
    /////////////////////////////////
    createPlane();

    /////////////////////////////////
    //create troll faces + remember to open music
    /////////////////////////////////
    counter3 = 0;
    for (var i = 0; i < 4; i++) {
        var pos = int(((all_points.length / 4) * i));
        createTrollFaces(2 * the_amptitude * all_points[pos], counter3, 2 * the_amptitude * all_points[pos], i);
        counter3 -= picture_gap;
    }

    /////////////////////////////////
    //Create sin wave
    /////////////////////////////////
    // push();
    // rotateY(-PI / 4);
    // rotateZ(-PI / 2);
    // createSinWave(the_amptitude);
    // pop();

    counter2 = 0;
    base_radii = 300;

    /////////////////////////////////
    //Create a bunch of circle
    /////////////////////////////////
    // createEllipse(300, 0, 0, segment_num, 0);
    // createEllipse(325, 0, 0, segment_num, -50);
    // createEllipse(350, 0, 0, segment_num, -100);
    // createEllipse(375, 0, 0, segment_num, -150);
    // createEllipse(400, 0, 0, segment_num, -200);
    // createEllipse(425, 0, 0, segment_num, -250);
    // createEllipse(450, 0, 0, segment_num, -300);

    for (var p = 0; p <= (max_radii - base_radii) / radii_inc; p++) {
        if (all_points.length > (max_radii - base_radii) / radii_inc) {
            var pos = int((all_points.length / ((max_radii - base_radii) / radii_inc)) * p)

        } else {
            var pos = 0;
            console.log("sin length is not greater than number of circle")
        }

        // createEllipse(base_radii, 0, 0, segment_num, counter2);

        /////////////////////////////////
        //Create animated tornado
        /////////////////////////////////
        createEllipse(base_radii, the_amptitude * all_points[pos], the_amptitude * all_points[pos], segment_num, counter2);

        counter2 -= circle_gap;
        base_radii += radii_inc;
    }

    all_points.splice(0, all_points.length);

    if (counter == 360) {
        counter = 0;
    }
    //45
    updateSinWavePath((counter += (360 / 45)), 1, 2);
    // counter3 = 0;



    // push();
    // drawCoordinates(500);
    // pop();
    rotation += PI / 16;

    if (x < 1000) {
        x += 20;

    }
}


let popn;
let target;

function setup() {
    target = {
        x: window.innerWidth / 2,
        y: 30,
        r: 16,
    }
    createCanvas(window.innerWidth, window.innerHeight);
    popn = new Population();
}

function draw() {
    background("rgba(37, 204, 247,1.0)");

    //obstacle
    push();
    stroke(1);
    fill("red")
    circle(width / 2, height / 2, obstacleSize);
    pop();

    fill(0)
    text(`Obstacle`, width/2, height/2);

    textSize(23);
    fill(255, 143);
    text(`Population:  ${popnSize}`, 50, 30);

    textSize(23);
    fill(255, 143);
    text(`Lifespan:  ${lifespan}`, 50, 60);

    textSize(23);
    fill(255, 143);
    text(`Count:  ${count}`, 50, 90);

    textSize(23);
    fill(255, 143);
    text(`Generation:  ${generation}`, 50, 120);

    textSize(23);
    fill(255, 143);
    text(`Mutation:  ${mutationRate}`, 50, 150);

    if (count == lifespan) {
        count = 0;
        generation++;
        popn.evaluate();
        popn.selection();
    }


    textSize(15);
    fill(255);
    text(`Target (${target.x}, ${target.y})`, target.x, target.y - target.r);

    fill(255);
    noStroke();
    circle(target.x, target.y, target.r)

    popn.run();
    count++;
}



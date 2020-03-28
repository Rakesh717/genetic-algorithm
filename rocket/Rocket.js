let count = 0;
let obstacleSize = 300;
let mutationRate = 0.01;


class Rocket {
    constructor(dna) {
        this.pos = createVector(width / 2, height);
        this.vel = createVector();
        this.completed = false;
        this.crashed = false;

        if (dna) {
            this.dna = dna;
        } else {
            this.dna = new DNA();
        }

        this.acc = createVector();
        this.fitness = 0;;
    }

    applyForce(force) {
        this.acc.add(force);
    }

    calcFitness() {
        let distance = dist(this.pos.x, this.pos.y, target.x, target.y);
        this.fitness = map(distance, 0, height, 140, 0);

        if ((this.pos.x > width && this.pos.x < 0 && this.pos.y > height && this.pos.y < 0) || this.crashed) {
            this.fitness /= 10;
        }

        if (this.completed) {
            this.fitness *= 10;
        }
    }

    show() {
        push();
        translate(this.pos.x, this.pos.y);
        rotate(this.vel.heading());
        rectMode(CENTER);
        fill(255, 153);
        noStroke();
        rect(0, 0, 50, 5);
        pop();
    }

    update() {
        let distance = dist(this.pos.x, this.pos.y, target.x, target.y);

        if (distance <= 10) {
            console.log(distance);
            this.pos = createVector(target.x, target.y);
            this.completed = true;
        }

        if (this.pos.x > width/2-obstacleSize/2.2 && this.pos.x < width/2+obstacleSize/2.2 && this.pos.y > height/2-obstacleSize/2.2 && this.pos.y < height/2+obstacleSize/2.2) {
            this.crashed = true;
        }

        this.applyForce(this.dna.genes[count]);

        if (!this.completed && !this.crashed) {
            this.vel.add(this.acc);
            this.pos.add(this.vel);
            this.acc.mult(0);
        }
    }

    mutate() {
        if(random(1) < mutationRate){
            this.genes = p5.Vector.random2D(); 
        }
    }
}

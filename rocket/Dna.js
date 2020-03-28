let lifespan = 400;
let generation = 1;
maxForce = .1;

class DNA {
    constructor() {
        this.genes = [];

        for (let i = 0; i < lifespan; i++) {
            this.genes[i] = p5.Vector.random2D();
            this.genes[i].setMag(maxForce);
        }
    }

    crossover(partner) {
        let newGene = [];
        let childDna = new DNA();

        let midpoint = floor(random(lifespan));

        for (let index = 0; index < midpoint; index++) {
            newGene[index] = this.genes[index];
        }

        for (let index = midpoint; index < lifespan; index++) {
            newGene[index] = partner.genes[index];
        }


        childDna.genes = newGene;

        return childDna;
    }
}
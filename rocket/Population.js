const popnSize = 300;   
class Population {
    constructor() {
        this.rockets = [];
        this.avgFitness = 0;
        this.matingPool = [];

        for (let i = 0; i < popnSize; i++) {
            this.rockets[i] = new Rocket();
        }
    }

    evaluate() {
        let maxfit = 0;
        this.rockets.forEach(rocket => {
            rocket.calcFitness();
            if (rocket.fitness > maxfit) {
                maxfit = rocket.fitness;
            }
        });

        this.avgFitness /= popnSize;

        this.matingPool = [];

        this.rockets.forEach(rocket => {
            for (let index = 0; index < rocket.fitness; index++) {
                this.matingPool.push(rocket);
            }
        });

    }


    selection() {
        let newRockets = [];

        for (let index = 0; index < popnSize; index++) {
            let parentAdna = random(this.matingPool).dna;
            let parentBdna = random(this.matingPool).dna;

            let childDna = parentAdna.crossover(parentBdna);
            newRockets[index] = new Rocket(childDna);
            newRockets[index].mutate();
        }

        this.rockets = newRockets;
    }

    run() {
        this.rockets.forEach(rocket => {
            rocket.show();
            rocket.update();
        });
    }
}
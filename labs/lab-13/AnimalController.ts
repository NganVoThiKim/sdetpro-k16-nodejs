import Animal from "./Animal";

export default class AnimalController {
    
    static getWinner(animals: Animal[]): Animal {
        let winner: Animal = animals[0];
        for (let i = 1; i < animals.length; i++) {
            if (animals[i].getSpeed() > winner.getSpeed()) {
                winner = animals[i];
            }
        }
        return winner;
    }
}
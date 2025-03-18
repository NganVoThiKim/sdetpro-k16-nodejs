import AnimalController from "./AnimalController";
import Dog from "./Dog";
import Horse from "./Horse";
import Tiger from "./Tiger";

const dog = new Dog();
const horse = new Horse();
const tiger = new Tiger();
const getWinner = AnimalController.getWinner([dog, horse, tiger]);
console.log(`Winner is ${getWinner.getName()} with speed: ${getWinner.getSpeed()}`);

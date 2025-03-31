import AnimalController from "./AnimalController";
import Dog from "./Dog";
import Horse from "./Horse";
import Tiger from "./Tiger";

let dog = new Dog("Dog");
let horse = new Horse("Horse");
let tiger = new Tiger("Tiger");
const getWinner = AnimalController.getWinner([dog, horse, tiger]);
console.log(`Winner is ${getWinner.getName()} with speed: ${getWinner.getSpeed()}`);

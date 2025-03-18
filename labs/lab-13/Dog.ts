import Animal from "./Animal";

export default class Dog extends Animal {
    constructor() {
        super("Dog", Math.floor(Math.random() * 60) + 1);
    }
}
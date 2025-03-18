import Animal from "./Animal";

export default class Horse extends Animal {
    constructor() {
        super("Horse", Math.floor(Math.random() * 75) + 1);
    }
}
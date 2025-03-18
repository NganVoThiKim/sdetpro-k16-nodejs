import Animal from "./Animal";

export default class Tiger extends Animal {
    constructor() {
        super("Tiger", Math.floor(Math.random() * 100) + 1);
    }
}
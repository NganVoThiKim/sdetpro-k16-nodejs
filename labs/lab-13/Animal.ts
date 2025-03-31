export default class Animal {
    /***
     * Racing animal simple version
       When an animal was born, it will have a random speed with below info

        Horse: Max 75 km/h
        Tiger: Max 100 Km/h
        Dog: Max 60 Km/h

       Create an Animal class with a method getSpeed() which return animal's speed
       Create 3 objects for those 3 animal type
       Run and see which animal is winner for racing
       Print result with format: Winner is <Animal name>, with speed: <speed>
       Ex: const randomNumber = Math.floor(Math.random() * 100) + 1;
     * 
     */

    protected name: string;
    protected speed: number;

    constructor(name: string, maxSpeed: number) {
        this.name = name;
        this.speed = Math.floor(Math.random() * maxSpeed) + 1;
    }

    getName(): string {
        return this.name;
    }

    getSpeed(): number {
        return this.speed;
    }

}
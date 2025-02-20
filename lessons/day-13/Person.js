// Class: is a template/ blueprint to build an objects.

class Person {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }

    // Getter
    get name() {
        return this._name;
    }
    // Setter
    set name(name){
        this._name = name;
    }

}
let teo = new Person("Teo", 18); // Invoke the constructor to initialize/create an object from the class
teo.name = "Teo Nguyen";
let name = teo.name;
console.log(name);

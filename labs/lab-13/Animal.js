"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Animal = /** @class */ (function () {
    function Animal(name, maxSpeed) {
        this.name = name;
        this.speed = Math.floor(Math.random() * maxSpeed) + 1;
    }
    Animal.prototype.getName = function () {
        return this.name;
    };
    Animal.prototype.getSpeed = function () {
        return this.speed;
    };
    return Animal;
}());
exports.default = Animal;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Animal = /** @class */ (function () {
    function Animal(name, speed) {
        this.name = name;
        this.speed = speed;
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

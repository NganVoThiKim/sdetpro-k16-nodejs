"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AnimalController = /** @class */ (function () {
    function AnimalController() {
    }
    AnimalController.getWinner = function (animals) {
        var winner = animals[0];
        for (var i = 1; i < animals.length; i++) {
            if (animals[i].getSpeed() > winner.getSpeed()) {
                winner = animals[i];
            }
        }
        return winner;
    };
    return AnimalController;
}());
exports.default = AnimalController;

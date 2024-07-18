"use strict";
exports.__esModule = true;
exports.PigController = void 0;
var PigController = /** @class */ (function () {
    function PigController() {
        this.pigs = [];
    }
    PigController.prototype.add = function (pig) {
        //console.log("adding pig");
        //console.log(localStorage.pigsArray);
        // let obj = JSON.parse(localStorage.pigsArray);
        var existingEntries = localStorage.getItem("pigsArray");
        if (localStorage.pigsArray != null) {
            //console.log("in here");
            var existingEntries2 = JSON.parse(localStorage.pigsArray);
            //console.log(existingEntries2);
            localStorage.currentPig = JSON.stringify(pig);
            existingEntries2.push(pig);
            existingEntries2.sort(function (a, b) {
                if (a.category > b.category)
                    return 1;
                if (b.category > a.category)
                    return -1;
                else {
                    if (a.name > b.name)
                        return 1;
                    if (a.name < b.name)
                        return -1;
                }
            });
            this.pigs.push(pig);
            //console.log(this.pigs);
            localStorage.pigsArray = JSON.stringify(existingEntries2);
        }
        else {
            localStorage.currentPig = JSON.stringify(pig);
            this.pigs.push(pig);
            localStorage.pigsArray = JSON.stringify(this.pigs);
        }
        // this.pigs.push(pig);
        // localStorage.pigsArray = JSON.stringify(this.pigs);
    };
    PigController.prototype.getAll = function () {
        return JSON.parse(localStorage.pigsArray);
    };
    return PigController;
}());
exports.PigController = PigController;

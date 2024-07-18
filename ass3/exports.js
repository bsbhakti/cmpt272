System.register([], function (exports_1, context_1) {
    "use strict";
    var Pig;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Pig = class Pig {
                constructor(name, breed, weight, personality) {
                    this.name = name;
                    this.breed = breed;
                    this.weight = weight;
                    this.personality = personality;
                    Pig.num++;
                }
            };
            exports_1("Pig", Pig);
            Pig.num = 0;
        }
    };
});

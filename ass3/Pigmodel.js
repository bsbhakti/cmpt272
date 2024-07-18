"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.BlackPig = exports.WhitePig = exports.ChestnutPig = exports.GreyPig = exports.Pig = void 0;
var Pig = /** @class */ (function () {
    function Pig(name, weight, height, category) {
        this.name = name;
        this.weight = weight;
        this.height = height;
        this.category = category;
        Pig.num++;
    }
    Pig.num = 0;
    return Pig;
}());
exports.Pig = Pig;
var GreyPig = /** @class */ (function (_super) {
    __extends(GreyPig, _super);
    function GreyPig(name, weight, score2, height, personality, breed, category) {
        var _this = _super.call(this, name, weight, height, category) || this;
        _this.name = name;
        _this.weight = weight;
        _this.score2 = score2;
        _this.height = height;
        _this.personality = personality;
        _this.breed = breed;
        _this.category = category;
        return _this;
    }
    GreyPig.prototype.giveAbility = function (score) {
        this.score2 = score;
    };
    return GreyPig;
}(Pig));
exports.GreyPig = GreyPig;
var ChestnutPig = /** @class */ (function (_super) {
    __extends(ChestnutPig, _super);
    function ChestnutPig(name, weight, score2, height, personality, breed, category) {
        var _this = _super.call(this, name, weight, height, category) || this;
        _this.name = name;
        _this.weight = weight;
        _this.score2 = score2;
        _this.height = height;
        _this.personality = personality;
        _this.breed = breed;
        _this.category = category;
        return _this;
    }
    ChestnutPig.prototype.giveAbility = function (score) {
        this.score2 = score;
    };
    return ChestnutPig;
}(Pig));
exports.ChestnutPig = ChestnutPig;
var WhitePig = /** @class */ (function (_super) {
    __extends(WhitePig, _super);
    function WhitePig(name, weight, score2, height, personality, breed, category) {
        var _this = _super.call(this, name, weight, height, category) || this;
        _this.name = name;
        _this.weight = weight;
        _this.score2 = score2;
        _this.height = height;
        _this.personality = personality;
        _this.breed = breed;
        _this.category = category;
        return _this;
    }
    WhitePig.prototype.giveAbility = function (score) {
        this.score2 = score;
    };
    return WhitePig;
}(Pig));
exports.WhitePig = WhitePig;
var BlackPig = /** @class */ (function (_super) {
    __extends(BlackPig, _super);
    function BlackPig(name, weight, score2, height, personality, breed, category) {
        var _this = _super.call(this, name, weight, height, category) || this;
        _this.name = name;
        _this.weight = weight;
        _this.score2 = score2;
        _this.height = height;
        _this.personality = personality;
        _this.breed = breed;
        _this.category = category;
        return _this;
    }
    BlackPig.prototype.giveAbility = function (score) {
        this.score2 = score;
    };
    return BlackPig;
}(Pig));
exports.BlackPig = BlackPig;

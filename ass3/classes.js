"use strict";
var __extends =
  (this && this.__extends) ||
  (function () {
    var extendStatics = function (d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (d, b) {
            d.__proto__ = b;
          }) ||
        function (d, b) {
          for (var p in b)
            if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
      return extendStatics(d, b);
    };
    return function (d, b) {
      if (typeof b !== "function" && b !== null)
        throw new TypeError(
          "Class extends value " + String(b) + " is not a constructor or null"
        );
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype =
        b === null
          ? Object.create(b)
          : ((__.prototype = b.prototype), new __());
    };
  })();
exports.__esModule = true;
exports.BlackPig =
  exports.WhitePig =
  exports.ChestnutPig =
  exports.GreyPig =
  exports.Pig =
    void 0;
var Pig = /** @class */ (function () {
  function Pig(name, breed, weight, personality) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
    this.personality = personality;
    this.pigs = [];
  }
  Pig.prototype.add = function (pig) {
    this.pigs.push(pig);
    Pig.num++;
    //console.log(this.pigs);
  };
  Pig.num = 0;
  return Pig;
})();
exports.Pig = Pig;
var GreyPig = /** @class */ (function (_super) {
  __extends(GreyPig, _super);
  function GreyPig(name, breed, weight, personality, score) {
    var _this = _super.call(this, name, breed, weight, personality) || this;
    _this.name = name;
    _this.breed = breed;
    _this.weight = weight;
    _this.personality = personality;
    _this.score = score;
    if (score > 100) {
      window.alert("Illegal number");
    }
    _this.score2 = score;
    _this.pigs.push(_this);
    return _this;
  }
  GreyPig.prototype.giveAbility = function (score) {
    this.score2 = score;
  };
  return GreyPig;
})(Pig);
exports.GreyPig = GreyPig;
var ChestnutPig = /** @class */ (function (_super) {
  __extends(ChestnutPig, _super);
  function ChestnutPig(name, breed, weight, personality, score) {
    var _this = _super.call(this, name, breed, weight, personality) || this;
    _this.name = name;
    _this.breed = breed;
    _this.weight = weight;
    _this.personality = personality;
    _this.score = score;
    _this.score2 = score;
    return _this;
  }
  ChestnutPig.prototype.giveAbility = function (score) {
    this.score2 = score;
  };
  return ChestnutPig;
})(Pig);
exports.ChestnutPig = ChestnutPig;
var WhitePig = /** @class */ (function (_super) {
  __extends(WhitePig, _super);
  function WhitePig(name, breed, weight, personality, score) {
    var _this = _super.call(this, name, breed, weight, personality) || this;
    _this.name = name;
    _this.breed = breed;
    _this.weight = weight;
    _this.personality = personality;
    _this.score = score;
    if (score > 100) {
      window.alert("Illegal number");
    }
    _this.score2 = score;
    return _this;
  }
  WhitePig.prototype.giveAbility = function (score) {
    this.score2 = score;
  };
  return WhitePig;
})(Pig);
exports.WhitePig = WhitePig;
var BlackPig = /** @class */ (function (_super) {
  __extends(BlackPig, _super);
  function BlackPig(name, breed, weight, personality, score) {
    var _this = _super.call(this, name, breed, weight, personality) || this;
    _this.name = name;
    _this.breed = breed;
    _this.weight = weight;
    _this.personality = personality;
    _this.score = score;
    if (score > 100) {
      window.alert("Illegal number");
    }
    _this.score2 = score;
    return _this;
  }
  BlackPig.prototype.giveAbility = function (score) {
    this.score2 = score;
  };
  return BlackPig;
})(Pig);
exports.BlackPig = BlackPig;

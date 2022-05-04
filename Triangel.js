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
Object.defineProperty(exports, "__esModule", { value: true });
var Shape_1 = require("./Shape");
var Triangel = /** @class */ (function (_super) {
    __extends(Triangel, _super);
    function Triangel(name, color, side1, side2, side3) {
        var _this = _super.call(this, name, color) || this;
        _this.side1 = side1;
        _this.side2 = side2;
        _this.side3 = side3;
        return _this;
    }
    Triangel.prototype.getSide1 = function () {
        return this.side1;
    };
    Triangel.prototype.getSide2 = function () {
        return this.side2;
    };
    Triangel.prototype.getSide3 = function () {
        return this.side3;
    };
    Triangel.prototype.setSide1 = function (side1) {
        this.side1 = side1;
    };
    Triangel.prototype.setSide2 = function (side2) {
        this.side2 = side2;
    };
    Triangel.prototype.setSide3 = function (side3) {
        this.side3 = side3;
    };
    Triangel.prototype.getperimeter = function () {
        return this.side1 + this.side2 + this.side3;
    };
    Triangel.prototype.getArea = function () {
        var p = this.getperimeter() / 2;
        return Math.sqrt(p * (p - this.getSide1()) * (p - this.getSide2()) * (p - this.getSide3()));
    };
    return Triangel;
}(Shape_1.Shape));
var triangel = new Triangel("tam giac", "red", 5, 8, 5);
console.log(triangel.getArea());

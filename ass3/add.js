"use strict";
var _a, _b;
exports.__esModule = true;
var imports = require("./Pigmodel");
var PigController_1 = require("./PigController");
var form = document.querySelector("form");
var category1 = (_a = document
    .getElementById("category")) === null || _a === void 0 ? void 0 : _a.addEventListener("change", addExtraRow);
(_b = document.getElementById("back")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", back);
var pc = new PigController_1.PigController();
var grey_breed = ["Berkshire", "Chester", "Duroc", "Hampshire"];
var white_breed = ["Landrace", "Poland", "Spotted", "Yorshire"];
var chestnut_breed = ["Saddleback", "Australian", "Basque", "Shannaj"];
var black_breed = ["Bangur", "Breitovo", "Bentham", "Senese"];
var maxRowCount = 6;
function back() {
    location.assign("main.html");
}
form.onsubmit = function (_) {
    var data = new FormData(form);
    var name = data.get("name");
    var height = data.get("height");
    var weight = data.get("weight");
    var personality = data.get("personality");
    var category = data.get("category");
    var breed = data.get("breed");
    var score = data.get("score2");
    if (category == "Grey") {
        var newPig = new imports.GreyPig(name, weight, parseInt(score), height, personality, breed, "Grey");
        //console.log(newPig);
        pc.add(newPig);
    }
    if (category == "White") {
        var newPig = new imports.WhitePig(name, weight, parseInt(score), height, personality, breed, "White");
        //console.log(newPig);
        pc.add(newPig);
    }
    if (category == "Chestnut") {
        //console.log(score);
        var newPig = new imports.ChestnutPig(name, weight, score, height, personality, breed, "Chestnut");
        //console.log(newPig);
        pc.add(newPig);
    }
    if (category == "Black") {
        var newPig = new imports.BlackPig(name, weight, parseInt(score), height, personality, breed, "Black");
        //console.log(newPig);
        pc.add(newPig);
    }
    //  //console.log( pc.getAll());
    var obj = JSON.parse(localStorage.pigsArray);
    //console.log(obj);
    //   //console.log("Piggy added!");
    window.alert("Piggy added!");
    //   return false; // prevent reload
};
function addExtraRow(event) {
    var data = new FormData(form);
    var category = data.get("category");
    var name = data.get("name");
    var height = data.get("height");
    var weight = data.get("weight");
    var personality = data.get("personality");
    var table = document.getElementById("mytable");
    if (table.rows.length > maxRowCount) {
        table.deleteRow(table.rows.length - 1);
    }
    if (category == "Grey") {
        var rowCount = table.rows.length;
        var row = table.insertRow(rowCount);
        var cell1 = row.insertCell(0);
        cell1.innerHTML = "Swimming abilities";
        var cell2 = row.insertCell(1);
        var element1 = document.createElement("input");
        element1.setAttribute("type", "number");
        element1.setAttribute("name", "score2");
        element1.setAttribute("min", "0");
        element1.setAttribute("max", "100");
        cell2.appendChild(element1);
        var element2 = document.getElementById("dropdown");
        if (element2.childElementCount > 0) {
            while (element2.firstChild) {
                element2.removeChild(element2.firstChild);
            }
        }
        for (var val in grey_breed) {
            var op1 = document.createElement("option");
            op1.setAttribute("value", grey_breed[val]);
            var optionText = document.createTextNode(grey_breed[val]);
            op1.appendChild(optionText);
            element2 === null || element2 === void 0 ? void 0 : element2.appendChild(op1);
        }
    }
    if (category == "Chestnut") {
        var rowCount = table.rows.length;
        var row = table.insertRow(rowCount);
        var cell1 = row.insertCell(0);
        cell1.innerHTML = "Language abilities";
        var cell2 = row.insertCell(1);
        var element1 = document.createElement("input");
        element1.setAttribute("type", "text");
        element1.setAttribute("name", "score2");
        cell2.appendChild(element1);
        var element2_1 = document.getElementById("dropdown");
        if (element2_1.childElementCount > 0) {
            while (element2_1.firstChild) {
                element2_1.removeChild(element2_1.firstChild);
            }
        }
        for (var val in chestnut_breed) {
            var op1 = document.createElement("option");
            op1.setAttribute("value", chestnut_breed[val]);
            var optionText = document.createTextNode(chestnut_breed[val]);
            op1.appendChild(optionText);
            element2_1 === null || element2_1 === void 0 ? void 0 : element2_1.appendChild(op1);
        }
    }
    if (category == "White") {
        var rowCount = table.rows.length;
        var row = table.insertRow(rowCount);
        var cell1 = row.insertCell(0);
        cell1.innerHTML = "Running abilities";
        var cell2 = row.insertCell(1);
        var element1 = document.createElement("input");
        element1.setAttribute("type", "number");
        element1.setAttribute("name", "score2");
        element1.setAttribute("min", "0");
        element1.setAttribute("max", "100");
        cell2.appendChild(element1);
        var element2_2 = document.getElementById("dropdown");
        if (element2_2.childElementCount > 0) {
            while (element2_2.firstChild) {
                element2_2.removeChild(element2_2.firstChild);
            }
        }
        for (var val in white_breed) {
            var op1 = document.createElement("option");
            op1.setAttribute("value", white_breed[val]);
            var optionText = document.createTextNode(white_breed[val]);
            op1.appendChild(optionText);
            element2_2 === null || element2_2 === void 0 ? void 0 : element2_2.appendChild(op1);
        }
    }
    if (category == "Black") {
        var rowCount = table.rows.length;
        var row = table.insertRow(rowCount);
        var cell1 = row.insertCell(0);
        cell1.innerHTML = "Strength abilities";
        var cell2 = row.insertCell(1);
        var element1 = document.createElement("input");
        element1.setAttribute("name", "score2");
        element1.setAttribute("type", "number");
        element1.setAttribute("min", "0");
        element1.setAttribute("max", "10");
        cell2.appendChild(element1);
        var element2_3 = document.getElementById("dropdown");
        if (element2_3.childElementCount > 0) {
            while (element2_3.firstChild) {
                element2_3.removeChild(element2_3.firstChild);
            }
        }
        for (var val in black_breed) {
            var op1 = document.createElement("option");
            op1.setAttribute("value", black_breed[val]);
            var optionText = document.createTextNode(black_breed[val]);
            op1.appendChild(optionText);
            element2_3 === null || element2_3 === void 0 ? void 0 : element2_3.appendChild(op1);
        }
    }
}

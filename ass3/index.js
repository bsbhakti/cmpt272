"use strict";
exports.__esModule = true;
var PigController_1 = require("./PigController");
var pc = new PigController_1.PigController();
if (document.readyState == "complete") {
    start();
}
var addButton = document
    .getElementById("addButton")
    .addEventListener("click", add);
function start() {
    if (localStorage.getItem("pigsArray") != null) {
        var obj = JSON.parse(localStorage.pigsArray);
        //console.log("look here");
        var table = document.getElementById("mytable");
        for (var i = table.rows.length - 1; i > 0; i--) {
            table.deleteRow(i);
        }
        addRow(obj);
    }
}
function add() {
    var x = document.getElementById("mytable");
    if ((x === null || x === void 0 ? void 0 : x.style.display) == "none") {
        //console.log("ITS NONE");
        x.style.display = "block";
    }
    location.assign("page3.html");
    var obj = JSON.parse(localStorage.pigsArray);
    //console.log(obj);
    //console.log("back");
    addRow(obj);
}
function addRow(obj) {
    var table = document.getElementById("mytable");
    //console.log(obj);
    if (table != null) {
        //console.log("herer");
        for (var i = table.rows.length - 1; i > 0; i--) {
            table.deleteRow(i);
        }
    }
    var rowCount1 = table.rows.length;
    var row1 = table.insertRow(rowCount1);
    var cell5 = row1.insertCell(0);
    cell5.innerHTML = "<b> Name</b>";
    var cell6 = row1.insertCell(1);
    var cell7 = row1.insertCell(2);
    var cell8 = row1.insertCell(3);
    cell6.innerHTML = "<b> Category</b>";
    for (var i_1 = 0; i_1 < Object.keys(obj).length; i_1++) {
        var rowCount = table.rows.length;
        var row = table.insertRow(rowCount);
        var cell1 = row.insertCell(0);
        cell1.innerHTML = obj[i_1].name;
        var cell2 = row.insertCell(1);
        cell2.innerHTML = obj[i_1].category;
        var cell3 = row.insertCell(2);
        cell3.innerHTML = "More Info";
        cell3.id = String(i_1);
        cell3.addEventListener("click", moreInfo);
        var cell4 = row.insertCell(3);
        cell4.innerHTML = "Delete Info";
        cell4.id = String(i_1);
        cell4.addEventListener("click", deleteInfo);
    }
}
function moreInfo(event) {
    //console.log("more info function");
    var Pigid = event.target.id;
    //console.log(Pigid);
    window.localStorage.setItem("id", Pigid);
    window.location.assign("page2.html");
}
function deleteInfo(event) {
    //console.log("delete info function");
    var Pigid = parseInt(event.target.id);
    if (localStorage.pigsArray != null) {
        var before = JSON.parse(localStorage.pigsArray);
        var formerhalf = before.slice(0, Pigid);
        var latterhalf = before.slice(Pigid + 1);
        //console.log(latterhalf);
        //console.log(formerhalf);
        var newArray = formerhalf.concat(latterhalf);
        //console.log(newArray);
        localStorage.pigsArray = JSON.stringify(newArray);
        start();
    }
}

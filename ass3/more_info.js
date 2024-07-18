var _a;
var index = window.localStorage.getItem("id");
//console.log("this is indexhahaha");
//console.log(index);
var data = window.localStorage.getItem("pigsArray");
var obj = JSON.parse(localStorage.pigsArray);
//console.log(data);
//console.log(obj[0].weight);
var table = document.getElementById("t");
//console.log(table);
if (table != null) {
    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);
    var cell1 = row.insertCell(0);
    cell1.innerHTML = obj[Number(index)].name;
    var cell2 = row.insertCell(1);
    cell2.innerHTML = obj[Number(index)].breed;
    var cell3 = row.insertCell(2);
    cell3.innerHTML = obj[Number(index)].height;
    var cell4 = row.insertCell(3);
    cell4.innerHTML = obj[Number(index)].weight;
    var cell5 = row.insertCell(4);
    cell5.innerHTML = obj[Number(index)].score2;
    var cell6 = row.insertCell(5);
    cell6.innerHTML = obj[Number(index)].personality;
}
var button = (_a = document.getElementById("back")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", back);
function back() {
    window.location.assign("main.html");
}

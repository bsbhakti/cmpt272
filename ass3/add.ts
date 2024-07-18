import * as imports from "./Pigmodel";
import { PigController } from "./PigController";


const form = document.querySelector("form") as HTMLFormElement;
var category1 = document
  .getElementById("category")
  ?.addEventListener("change", addExtraRow);
document.getElementById("back")?.addEventListener("click", back);
var pc = new PigController();
var grey_breed = ["Berkshire", "Chester", "Duroc", "Hampshire"];
var white_breed = ["Landrace", "Poland", "Spotted", "Yorshire"];
var chestnut_breed = ["Saddleback", "Australian", "Basque", "Shannaj"];
var black_breed = ["Bangur", "Breitovo", "Bentham", "Senese"];
var maxRowCount = 6;

function back() {
  location.assign("main.html");
}

form!.onsubmit = (_) => {
  const data = new FormData(form);
  const name = data.get("name") as string;
  const height = data.get("height") as string;
  const weight = data.get("weight") as string;
  const personality = data.get("personality") as string;
  const category = data.get("category") as string;
  const breed = data.get("breed") as string;
  const score = data.get("score2") as string;

  if (category == "Grey") {
    let newPig = new imports.GreyPig(
      name,
      weight,
      parseInt(score),
      height,
      personality,
      breed,
      "Grey"
    );
    //console.log(newPig);
    pc.add(newPig);
  }
  if (category == "White") {
    let newPig = new imports.WhitePig(
      name,
      weight,
      parseInt(score),
      height,
      personality,
      breed,
      "White"
    );
    //console.log(newPig);
    pc.add(newPig);
  }
  if (category == "Chestnut") {
    //console.log(score);
    let newPig = new imports.ChestnutPig(
      name,
      weight,
      score,
      height,
      personality,
      breed,
      "Chestnut"
    );
    //console.log(newPig);
    pc.add(newPig);
  }
  if (category == "Black") {
    let newPig = new imports.BlackPig(
      name,
      weight,
      parseInt(score),
      height,
      personality,
      breed,
      "Black"
    );
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

function addExtraRow(event: any) {
  const data = new FormData(form);
  const category = data.get("category") as string;
  const name = data.get("name") as string;
  const height = data.get("height") as string;
  const weight = data.get("weight") as string;
  const personality = data.get("personality") as string;

  var table = document.getElementById("mytable") as HTMLTableElement;

  if (table.rows.length > maxRowCount) {

    table!.deleteRow(table.rows.length - 1);
  }

  if (category == "Grey") {
    var rowCount = table.rows.length;
    var row = table!.insertRow(rowCount);

    var cell1 = row.insertCell(0);
    cell1.innerHTML = "Swimming abilities";
    var cell2 = row.insertCell(1);
    var element1 = document.createElement("input");
    element1.setAttribute("type", "number");
    element1.setAttribute("name", "score2");
    element1.setAttribute("min", "0");
    element1.setAttribute("max", "100");
    cell2.appendChild(element1);
    var element2 = document.getElementById("dropdown") as HTMLBodyElement;

    if (element2!.childElementCount > 0) {
      while (element2!.firstChild) {
        element2.removeChild(element2.firstChild);
      }
    }
    for (let val in grey_breed) {
      var op1 = document.createElement("option");
      op1.setAttribute("value", grey_breed[val]);
      let optionText = document.createTextNode(grey_breed[val]);
      op1.appendChild(optionText);
      element2?.appendChild(op1);
    }
  }

  if (category == "Chestnut") {
    var rowCount = table.rows.length;
    var row = table!.insertRow(rowCount);

    var cell1 = row.insertCell(0);
    cell1.innerHTML = "Language abilities";
    var cell2 = row.insertCell(1);
    var element1 = document.createElement("input");
    element1.setAttribute("type", "text");
    element1.setAttribute("name", "score2");
    cell2.appendChild(element1);
    let element2 = document.getElementById("dropdown") as HTMLBodyElement;

    if (element2!.childElementCount > 0) {
      while (element2!.firstChild) {
        element2.removeChild(element2.firstChild);
      }
    }
    for (let val in chestnut_breed) {
      var op1 = document.createElement("option");
      op1.setAttribute("value", chestnut_breed[val]);
      let optionText = document.createTextNode(chestnut_breed[val]);
      op1.appendChild(optionText);
      element2?.appendChild(op1);
    }
  }
  if (category == "White") {
    var rowCount = table.rows.length;
    var row = table!.insertRow(rowCount);

    var cell1 = row.insertCell(0);
    cell1.innerHTML = "Running abilities";
    var cell2 = row.insertCell(1);
    var element1 = document.createElement("input");
    element1.setAttribute("type", "number");
    element1.setAttribute("name", "score2");
    element1.setAttribute("min", "0");
    element1.setAttribute("max", "100");
    cell2.appendChild(element1);

    let element2 = document.getElementById("dropdown") as HTMLBodyElement;

    if (element2!.childElementCount > 0) {
      while (element2!.firstChild) {
        element2.removeChild(element2.firstChild);
      }
    }
    for (let val in white_breed) {
      var op1 = document.createElement("option");
      op1.setAttribute("value", white_breed[val]);
      let optionText = document.createTextNode(white_breed[val]);
      op1.appendChild(optionText);
      element2?.appendChild(op1);
    }
  }

  if (category == "Black") {
    var rowCount = table.rows.length;
    var row = table!.insertRow(rowCount);

    var cell1 = row.insertCell(0);
    cell1.innerHTML = "Strength abilities";
    var cell2 = row.insertCell(1);
    var element1 = document.createElement("input");
    element1.setAttribute("name", "score2");
    element1.setAttribute("type", "number");
    element1.setAttribute("min", "0");
    element1.setAttribute("max", "10");
    cell2.appendChild(element1);

    let element2 = document.getElementById("dropdown") as HTMLBodyElement;
    if (element2!.childElementCount > 0) {
      while (element2!.firstChild) {
        element2.removeChild(element2.firstChild);
      }
    }

    for (let val in black_breed) {
      var op1 = document.createElement("option");
      op1.setAttribute("value", black_breed[val]);
      let optionText = document.createTextNode(black_breed[val]);
      op1.appendChild(optionText);
      element2?.appendChild(op1);
    }
  }
}

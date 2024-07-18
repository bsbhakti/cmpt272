bounds = {};
rows = new Array();
names = new Array();

range = {};

arr = new Array();
function init() {
  document
    .getElementById("fileInput")
    .addEventListener("change", handleFileSelect, false);

  function boundsMaker() {
    maxBound = document
      .getElementById("max")
      .addEventListener("change", addToADict, false);

    ABound1 = document
      .getElementById("A+")
      .addEventListener("change", addToADict, false);
    ABound2 = document
      .getElementById("A")
      .addEventListener("change", addToADict, false);
    ABound3 = document
      .getElementById("A-")
      .addEventListener("change", addToADict, false);
    BBound1 = document
      .getElementById("B+")
      .addEventListener("change", addToADict, false);
    BBound2 = document
      .getElementById("B")
      .addEventListener("change", addToADict, false);
    BBound3 = document
      .getElementById("B-")
      .addEventListener("change", addToADict, false);
    CBound1 = document
      .getElementById("C+")
      .addEventListener("change", addToADict, false);
    CBound2 = document
      .getElementById("C")
      .addEventListener("change", addToADict, false);
    CBound3 = document
      .getElementById("C-")
      .addEventListener("change", addToADict, false);
    DBound = document
      .getElementById("D")
      .addEventListener("change", addToADict, false);
    FBound = document
      .getElementById("F")
      .addEventListener("change", addToADict, false);

    table1 = document
      .getElementById("table1")
      .addEventListener("change", count, false);
  }

  boundsMaker();
}

function handleFileSelect(event) {
  const reader = new FileReader();
  reader.onload = handleFileLoad;
  reader.readAsText(event.target.files[0]);
}

function handleFileLoad(event) {
  // document.getElementById("fileContent").textContent = event.target.result;
  const text = event.target.result;
  makeArray(text, ",");
}

function makeArray(str, delimeter = ",") {
  const headers = str
    .replace("\r", "")
    .slice(0, str.indexOf("\n"))
    .split(delimeter);
  rows = str.slice(str.indexOf("\n") + 1).split("\n");

  for (i = 0; i < rows.length; i++) {
    names[i] = rows[i].replace("\r", "").split(",");
  }
  console.log(headers, rows, names);
}

function addToADict(event) {
  correct = validate(event.value);

  if (!correct) {
    key = event.target.value;
    value = event.target.id;

    if (event.target.id == "A+") {
      if (event.target.value > bounds["max"]) {
        window.alert("Out of bounds");
      } else {
        bounds[value] = parseFloat(key);
      }
    }
    if (event.target.id == "A") {
      if (event.target.value > bounds["A+"]) {
        window.alert("Out of bounds");
      } else {
        bounds[value] = parseFloat(key);
      }
    }
    if (event.target.id == "A-") {
      if (event.target.value > bounds["A"]) {
        window.alert("Out of bounds");
      } else {
        bounds[value] = parseFloat(key);
      }
    }
    if (event.target.id == "B+") {
      if (event.target.value > bounds["A-"]) {
        window.alert("Out of bounds");
      } else {
        bounds[value] = parseFloat(key);
      }
      if (event.target.id == "B") {
        if (event.target.value > bounds["B+"]) {
          window.alert("Out of bounds");
        } else {
          bounds[value] = parseFloat(key);
        }
      }
      if (event.target.id == "B-") {
        if (event.target.value > bounds["B"]) {
          window.alert("Out of bounds");
        } else {
          bounds[value] = parseFloat(key);
        }
      }
      if (event.target.id == "C+") {
        if (event.target.value > bounds["B-"]) {
          window.alert("Out of bounds");
        } else {
          bounds[value] = parseFloat(key);
        }
      }
      if (event.target.id == "C") {
        if (event.target.value > bounds["C+"]) {
          window.alert("Out of bounds");
        } else {
          bounds[value] = parseFloat(key);
        }
      }
      if (event.target.id == "C-") {
        if (event.target.value > bounds["C"]) {
          window.alert("Out of bounds");
        } else {
          bounds[value] = parseFloat(key);
        }
      }
      if (event.target.id == "D") {
        if (event.target.value > bounds["C+"]) {
          window.alert("Out of bounds");
        } else {
          bounds[value] = parseFloat(key);
        }
      }
      if (event.target.id == "F") {
        if (event.target.value > bounds["D"]) {
          window.alert("Out of bounds");
        } else {
          bounds[value] = parseFloat(key);
        }
      }
    } else {
      bounds[value] = parseFloat(key);
    }

    console.log(bounds);
  } else {
    window.alert("Please enter non-negative numbers <=100 ");
  }
}

function count(event) {
  console.log("calling count");
  console.log(event.target);
  grades = {
    "A+": 0,
    A: 0,
    "A-": 0,
    "B+": 0,
    B: 0,
    "B-": 0,
    "C+": 0,
    C: 0,
    "C-": 0,
    D: 0,
    F: 0,
  };
  console.log("here  1");

  for (let i = 0; i < names.length; i++) {
    console.log(typeof names[i][1], names[i][1]);

    console.log("look");

    if (
      parseFloat(names[i][1]) <= bounds["max"] &&
      parseFloat(names[i][1]) >= bounds["A+"]
    ) {
      grades["A+"] += 1;
      console.log("look");
      console.log(grades["A+"]);
    }
    if (
      parseFloat(names[i][1]) < bounds["A+"] &&
      parseFloat(names[i][1]) >= bounds["A"]
    ) {
      grades["A"] += 1;
      console.log("look");
      console.log(grades["A"]);
    }
    if (
      parseFloat(names[i][1]) < bounds["A"] &&
      parseFloat(names[i][1]) >= bounds["A-"]
    ) {
      grades["A-"] += 1;
      console.log("look");
      console.log(grades["A-"]);
    }
    if (
      parseFloat(names[i][1]) < bounds["A-"] &&
      parseFloat(names[i][1]) >= bounds["B+"]
    ) {
      grades["B+"] += 1;
      console.log("look");
      console.log(grades["B+"]);
    }
    if (
      parseFloat(names[i][1]) < bounds["B+"] &&
      parseFloat(names[i][1]) >= bounds["B-"]
    ) {
      grades["B-"] += 1;
      console.log("look");
      console.log(grades["B-"]);
    }
    if (
      parseFloat(names[i][1]) < bounds["B-"] &&
      parseFloat(names[i][1]) >= bounds["C+"]
    ) {
      grades["C+"] += 1;
      console.log("look");
      console.log(grades["C+"]);
    }
    if (
      parseFloat(names[i][1]) < bounds["C+"] &&
      parseFloat(names[i][1]) >= bounds["C"]
    ) {
      grades["C+"] += 1;
      console.log("look");
      console.log(grades["C"]);
    }
    if (
      parseFloat(names[i][1]) < bounds["C"] &&
      parseFloat(names[i][1]) >= bounds["C-"]
    ) {
      grades["C-"] += 1;
      console.log("look");
      console.log(grades["C-"]);
    }
    if (
      parseFloat(names[i][1]) < bounds["C-"] &&
      parseFloat(names[i][1]) >= bounds["D"]
    ) {
      grades["D"] += 1;
      console.log("look");
      console.log(grades["D"]);
    }
    if (
      parseFloat(names[i][1]) < bounds["D"] &&
      parseFloat(names[i][1]) >= bounds["F"]
    ) {
      grades["F"] += 1;
      console.log("look");
      console.log(grades["F"]);
    }
  }
  console.log(grades);
  displayOnScreen(grades);
  displayHighest();
}

function displayOnScreen(grades) {
  var img = new Image(50, 50);
  img.src = "student1.png";

  for (const [key, value] of Object.entries(grades)) {
    console.log("lol");
    if (key == "A+") {
      var toChange = document.getElementById("max2");
      removeAllChildNodes(toChange);
      for (i = 0; i < value; i++) {
        var img = new Image(50, 50);
        img.src = "student1.png";
        img.id = i + key;
        toChange.append(img);
      }
    }
    if (key == "A") {
      console.log(key, value);
      var toChange = document.getElementById("A2");
      removeAllChildNodes(toChange);
      for (i = 0; i < value; i++) {
        var img = new Image(50, 50);
        img.src = "student1.png";
        img.id = i + key;
        toChange.append(img);
      }
    }
    if (key == "A-") {
      console.log(key, value);
      var toChange = document.getElementById("A-2");
      removeAllChildNodes(toChange);
      for (i = 0; i < value; i++) {
        var img = new Image(50, 50);
        img.src = "student1.png";
        img.id = i + key;
        toChange.append(img);
      }
    }
    if (key == "B+") {
      console.log(key, value);
      var toChange = document.getElementById("B+2");
      removeAllChildNodes(toChange);
      for (i = 0; i < value; i++) {
        var img = new Image(50, 50);
        img.src = "student1.png";
        img.id = i + key;
        toChange.append(img);
      }
    }
    if (key == "B-") {
      console.log(key, value);
      var toChange = document.getElementById("B-2");
      removeAllChildNodes(toChange);
      for (i = 0; i < value; i++) {
        var img = new Image(50, 50);
        img.src = "student1.png";
        img.id = i + key;
        toChange.append(img);
      }
    }
    if (key == "C+") {
      console.log(key, value);
      var toChange = document.getElementById("C+2");
      removeAllChildNodes(toChange);
      for (i = 0; i < value; i++) {
        var img = new Image(50, 50);
        img.src = "student1.png";
        img.id = i + key;
        toChange.append(img);
      }
    }
    if (key == "C") {
      console.log(key, value);
      var toChange = document.getElementById("C2");
      removeAllChildNodes(toChange);
      for (i = 0; i < value; i++) {
        var img = new Image(50, 50);
        img.src = "student1.png";
        img.id = i + key;
        toChange.append(img);
      }
    }
    if (key == "C-") {
      console.log(key, value);
      var toChange = document.getElementById("C-2");
      removeAllChildNodes(toChange);
      for (i = 0; i < value; i++) {
        var img = new Image(50, 50);
        img.src = "student1.png";
        img.id = i + key;
        toChange.append(img);
      }
    }
    if (key == "D") {
      console.log(key, value);
      var toChange = document.getElementById("D2");
      removeAllChildNodes(toChange);
      for (i = 0; i < value; i++) {
        var img = new Image(50, 50);
        img.src = "student1.png";
        img.id = i + key;
        toChange.append(img);
      }
    }
    if (key == "F") {
      console.log(key, value);
      var toChange = document.getElementById("F2");
      removeAllChildNodes(toChange);
      for (i = 0; i < value; i++) {
        var img = new Image(50, 50);
        img.src = "student1.png";
        img.id = i + key;
        toChange.append(img);
      }
    }
  }
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    console.log("removing");
    parent.removeChild(parent.firstChild);
  }
}

function displayHighest() {
  console.log("hi", names);
  max = names[i][1];
  min = names[i][1];
  highest = "";
  lowest = "";
  intGrades = [];
  sum = 0;
  for (i = 0; i < names.length; i++) {
    if (parseFloat(names[i][1]) > max) {
      highest = names[i][0];
      max = parseFloat(names[i][1]);
    }
    if (parseFloat(names[i][1]) < min) {
      lowest = names[i][0];
      min = parseFloat(names[i][1]);
    }
    sum += parseFloat(names[i][1]);
    intGrades[i] = parseFloat(names[i][1]);
  }
  mean = sum / names.length;
  console.log("hi2", max);
  document.getElementById("highest").innerHTML = highest + "(" + max + "%)";
  document.getElementById("lowest").innerHTML = lowest + "(" + min + "%)";
  document.getElementById("mean").innerHTML = mean;
  document.getElementById("median").innerHTML = median(intGrades);
}

function median(arr) {
  if (arr.length == 0) {
    return;
  }
  arr.sort((c, d) => c - d);
  const m = Math.floor(arr.length / 2);
  const median = arr.length % 2 === 1 ? arr[m] : (arr[m - 1] + arr[m]) / 2;
  return median;
}

function validate(a) {
  console.log(isNaN(a));
}

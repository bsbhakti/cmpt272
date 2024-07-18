document.getElementsByTagName("legend")[0].classList.add("align_cen");

// // body element
var bod = document.querySelector("body");
// create new paragraph
var con = document.createTextNode("HELLO WORLD!!");
var par = document.createElement("p");
par.appendChild(con);
// attach to body
bod.appendChild(par);

// --- events ---- //
// handler
var button = document.getElementById("mybutton");
// button.onclick = function(){
//     console.log("hello")
// }
// button.onclick = function(){
//     console.log("world")
// }

// event listener
// button.addEventListener('click',function(){console.log("hello")})
// button.addEventListener('click',function(){console.log("world")})

button.addEventListener("click", function (evt) {
  var fname = document.getElementById("fname").value;
  document.querySelectorAll("body>h1")[0].innerHTML = "HELLO " + fname;
  //....
});

// keypress
window.addEventListener("keypress", function (evt) {
  console.log("you pressed: " + evt.key);
});

// forms
var arr = document.querySelectorAll("input[type=text]");

// arr.length
arr[0].addEventListener("focus", function (evt) {
  evt.target.style.backgroundColor = "yellow";
});
arr[0].addEventListener("blur", function (evt) {
  evt.target.style.backgroundColor = "white";
});

// array

function comp(a, b) {
  return a - b;
}
var x = [12, 2, 34, 1, 9, 102, 98, 5];
x.sort(comp);
console.log(x);

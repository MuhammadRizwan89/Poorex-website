//Quantity page shop details

// let count = document.querySelector("#count")
// let output = 1;

// function increment(){
//     document.querySelector(".plus-btn").innerHTML = output += 2;
//     output.innerHTML = count
// }
// function decrement(){
//     document.querySelector(".minus-btn").innerHTML = output -= 2;
//     output.innerHTML = count
// }

// ......................
var a = document.querySelector(".plus-btn");
var b = document.querySelector(".minus-btn");
var c = document.querySelector("#count");
var count = 1;

a.addEventListener("click", () => {
  count += 2;
  c.innerHTML = count;
});

// for decrement

b.addEventListener("click", () => {
  if (count > 1) {
    count -= 2;
    c.innerHTML = count;
  }
});
// let plus = document.querySelector(".plus-btn")
// let minus = document.querySelector(".minus-btn")
// let outPut = document.querySelector("#count")

//hamburger navbar2

aboutHamburger = document.querySelector(".about_hamburger");

aboutHamburger.addEventListener("click", function () {
  document.querySelector(".navbar-nav").classList.toggle("menu");
});

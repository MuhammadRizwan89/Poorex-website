
// hamber button
humburger = document.querySelector('.humburger');
closebtn = document.querySelector('.closebtn');
console.log(humburger);
console.log(closebtn);
humburger.addEventListener('click', function(){
    document.querySelector('.tpoffcanvas-area').classList.add('active');
})

closebtn.addEventListener('click', function(){
    document.querySelector('.tpoffcanvas-area').classList.remove('active');
})

//Quantity page shop details
let count = 0;

function increment(){
    document.querySelector(".plus-btn").innerHTML = count;
}
function decrement(){
    document.querySelector(".minus-btn").innerHTML = count;
}

//hamburger navbar2

aboutHamburger = document.querySelector('.about_hamburger');

aboutHamburger.addEventListener('click', function(){
    document.querySelector('.navbar-nav').classList.toggle('menu');

})


const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

// hamber button
humburger = document.querySelector('.humburger');
closebtn = document.querySelector('.closebtn');

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



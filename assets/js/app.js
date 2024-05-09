// hamber button
humburger = document.querySelector('.humburger');
closebtn = document.querySelector('.closebtn');

humburger.addEventListener('click', function(){
    document.querySelector('.tpoffcanvas-area').classList.add('active');
})

closebtn.addEventListener('click', function(){
    document.querySelector('.tpoffcanvas-area').classList.remove('active');
})
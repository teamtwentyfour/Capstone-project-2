var side = document.querySelector('.navbar.sidebar');
var menu = document.querySelector('.menu');
var overlay = document.querySelector('.home-page');

menu.addEventListener('click', function () {

    if (side.style.display === 'block') {
        side.style.display = 'none';
    }
    else{
        side.style.display = 'block';
    }
});
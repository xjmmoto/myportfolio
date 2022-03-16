$(document).ready(function() {
    $(window).scroll(function() {
        var scrollPos = $(window).scrollTop(),
            navbar = $('header');
    
        if (scrollPos > 10) {
          navbar.addClass('alt-color');
        } else {
          navbar.removeClass('alt-color');
        }
    });
});

var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
    rotate: 30,
    stretch: 0,
    depth: 200,
    modifier: 1,
    slideShadows: true,
    },
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    }
}); 

const selectElement = (s) => document.querySelector(s);
selectElement('.open').addEventListener('click', () => {
    selectElement('.nav-list').classList.toggle('active');
});

const menuIcon = document.querySelector('.hamburger-menu');
const overlay = document.querySelector('.overlay');
const navBrand = document.querySelector('.nav-brand');
const alt = document.querySelector('.alt-color');
const navbar = document.querySelector('header')
    menuIcon.addEventListener('click', () => {
        navbar.classList.toggle('change');
        overlay.classList.toggle('enabled');
        navBrand.classList.toggle('hide');
    });
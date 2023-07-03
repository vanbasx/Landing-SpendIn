$(function () {
    const burger = document.querySelector('.menu-icon')
    const menu = document.querySelector('.menu')
    const body = document.body

    if (burger && menu) {
        burger.addEventListener('click', () => {
            burger.classList.toggle('_active')
            menu.classList.toggle('_active')
            burger.classList.toggle('_lock')
        })
    };

    const mixer = mixitup('.automation__wrapper', {
        load: {
            filter: '.with'
        },
        animation: {
            duration: 700
        }
    });
    
    const swiper = new Swiper('.swiper', {
        // Default parameters
        slidesPerView: 1,
        spaceBetween: 20,
        speed: 600,
        autoplay: {
            delay: 5000,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        breakpoints: {
          830: {
            slidesPerView: 2,
            spaceBetween: 30
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 30
          },
        }
    });
})
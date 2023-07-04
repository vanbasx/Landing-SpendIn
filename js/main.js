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

    const menuLinks = document.querySelectorAll('.menu a');

    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            burger.classList.remove('_active');
            menu.classList.remove('_active');
            burger.classList.remove('_lock');
        });
    });

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
    
    $(document).ready(function() {
        $('a[href^="#"]').on('click', function(e) {
          e.preventDefault();
          const target = $($(this).attr('href'));

          if (target.length) {
            const targetPosition = target.offset().top;

            $('html, body').animate({
              scrollTop: targetPosition
            }, 1000);
          }
        });
      });
})
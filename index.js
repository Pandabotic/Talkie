var swiper = new Swiper(".home", {
    spaceBetween: 0,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  var swiper = new Swiper(".movies-out-now", {
    spaceBetween: 10,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    breakpoints: { //Depending on the width size, display that number of movies
        0: {
            slidesPerView: 2,
        },
        568: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 5,
        },
        968: {
            slidesPerView: 6,
        },
    }
  });

  var swiper = new Swiper(".kids-movies", {
    spaceBetween: 10,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    breakpoints: { //Depending on the width size, display that number of movies
        0: {
            slidesPerView: 2,
        },
        568: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 5,
        },
        968: {
            slidesPerView: 6,
        },
    }
  });

const menuIcon = document.querySelector('#menu-icon')
const navbar = document.querySelector('.navbar')

menuIcon.onclick = function() {
    menuIcon.classList.toggle("fa-x");
    navbar.classList.toggle('active');
}


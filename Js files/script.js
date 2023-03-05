//* Menu Button for 768px width
let menu = document.getElementById("menu-btn");
let navbar = document.querySelector(".header .navbar");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
};

var swiper = new Swiper(".home-slider", {
  spaceBetween: 20,
  effect: "fade",
  grabCursor: true,
  loop: true,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
});

var swiper = new Swiper(".review-slider", {
  spaceBetween: 20,
  grabCursor: true,
  loop: true,
  autoplay: {
    delay: 6000,
    disableOnInteraction: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 2,
    },
  },
});

var swiper = new Swiper(".blogs-slider", {
  spaceBetween: 20,
  grabCursor: true,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});

const toggleSwitch = document.getElementById("checkbox");
const googleMap = document.querySelector(".google-map");
function toggle() {
  if (toggleSwitch.checked === true) {
    googleMap.style.filter = "brightness(90%)";
  } else {
    googleMap.style.filter = "invert(100%)";
  }
}
setInterval(() => {
  toggle();
}, 1);

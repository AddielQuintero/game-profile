const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".header__menu");
const filter = document.querySelectorAll(".filter");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("header__menu-visible");
});

filter.forEach((item) => {
  item.addEventListener("click", () => {
    filter.forEach((item2) => {
      item2.classList.remove("active");
    });
    item.classList.toggle("active");
  });
});

// $(document).ready(function(){
//   $( ".filter" ).on( "click", function() {
//     $('.filter').removeClass('active')
//     $(this).addClass('active')
//   });
// })


const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".header__menu");
const filter = document.querySelectorAll(".filter");
const th = document.querySelector(".th");
const bars = document.querySelector(".bars");
const rs = document.querySelector("section");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("header__menu-visible");
});

th.addEventListener("click", () => {
  rs.classList.add("result__search");
  rs.classList.remove("result__search-bars");
});

bars.addEventListener("click", () => {
  rs.classList.remove("result__search");
  rs.classList.add("result__search-bars");
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

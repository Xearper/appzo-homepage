
/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
  const header = document.getElementById('header')
  // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
  this.scrollY >= 50 ? header.classList.add('scroll-header') 
                     : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader);

















const menu = document.getElementById('menuBar');
const mamacita = document.querySelector('.navbar-list-1');

    menu.addEventListener('click', () => {
        mamacita.classList.toggle('show');
    })





//night mode
const anan = document.querySelector (".ana-sayfa");
const nightmode = document.querySelector(".anan");
const dayNight = document.querySelector(".day-night");
nightmode.addEventListener("click", () => {
    document.body.classList.toggle('day-night');




})

var swiper = new Swiper(".mySwiper", {

    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 5,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
    
  });


  
  
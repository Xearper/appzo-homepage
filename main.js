const menu = document.getElementById('menuBar');
const mamacita = document.querySelector('.navbar-list-1');

    menu.addEventListener('click', () => {
        mamacita.classList.toggle('show');
    })



// open modal
    const kayitOl = document.querySelector(".kayit-btn"),
    modal = document.querySelector(".modal");
    kayitOl.addEventListener("click", () => {
        modal.style.display = "flex";
    });

 const mobilKayit = document.querySelector(".kayit-btn2");
 mobilKayit.addEventListener("click", () => {
     modal.style.display = "flex";
 })


  // close modal

  const closeIcon = document.querySelector(".close-modal-icon");

  closeIcon.addEventListener("click", () => {
      modal.style.display = "none";
  })

//night mode
const anan = document.querySelector (".ana-sayfa");
const nightmode = document.querySelector(".anan");
const dayNight = document.querySelector(".day-night");
nightmode.addEventListener("click", () => {
    document.body.classList.toggle('day-night');




})

document.querySelector(".navbar-list-1").style.transition = "all .5s";


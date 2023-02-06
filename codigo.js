// INICIO

// const navToggle = document.querySelector(".nav-toggle");
// const navMenu = document.querySelector(".nav-menu");

// navToggle.addEventListener("click", () => {
//   navMenu.classList.toggle("nav-menu_visible");

//   if (navMenu.classList.contains("nav-menu_visible")) {
//     navToggle.setAttribute("aria-label", "Cerrar menú");
//   } else {
//     navToggle.setAttribute("aria-label", "Abrir menú");
//   }
// });


// INFORMACION PERSONAL

var boton = document.getElementById('readMore_btn');
let hideText = document.getElementById('hideText');

boton.addEventListener('click', toggleText);

function toggleText() {
  hideText.classList.toggle('showText');

  if(hideText.classList.contains('showText')) {
    boton.innerHTML = 'Leer menos'
  }
  else {
    boton.innerHTML = 'Leer más'
  }
}


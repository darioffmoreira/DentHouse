'use strict';

// Abrir e fechar o menu quando clicar no icon: hamburguer e X
const nav = window.document.querySelector('#header nav');
const toggle = window.document.querySelectorAll('nav .toggle');

for (const element of toggle) {
  // console.log(element);
  element.addEventListener('click', function () {
    // console.log(nav);

    // Se existir a class show no DOM ele retira, caso contrario adiciona
    nav.classList.toggle('show');
  });
}

/*---------------------------------
  Quando clicar em um item do menu, esconder o menu
---------------------------------*/
const links = window.document.querySelectorAll('nav ul li a');
// console.log(links);

for (const link of links) {
  // console.log(link);
  link.addEventListener('click', function () {
    nav.classList.remove('show');
  });
}

// Quando fizer o scroll para baixo, caso o scroll seja superior a x pixeis
const header = window.document.querySelector('#header');
// console.log(header);
const navHeight = header.offsetHeight;
// console.log(navHeight);

function changeHeaderWhenScroll() {
  if (window.scrollY >= navHeight) {
    // scroll é maior que a altura do header
    header.classList.add('scroll');
  } else {
    // menor que a altura do header
    header.classList.remove('scroll');
  }
}

// Swiper JS
const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
});

// scrollrevealjs > Mostrar elementos quando faço scroll na pagina
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
});

scrollReveal.reveal(
  `#home .image, #home .text, #about .image, #about .text,  #services header, #services .card, #testimonials header, #testimonials .testimonials, #contact .text, #contact .links, footer .brand, footer .social`,
  { interval: 100 }
);

// Button > back to top
const backToTopButton = window.document.querySelector('.back-to-top');
// console.log(backToTopButton);

function backToTop() {
  if (window.scrollY >= 560) {
    // scroll é maior que a altura do header
    backToTopButton.classList.add('show');
  } else {
    // menor que a altura do header
    backToTopButton.classList.remove('show');
  }
}

// Menu ativo conforme a secao visivel na pagina
const sections = window.document.querySelectorAll('main section[id]');
console.log(sections);
function activateMenuAtCurrentSection() {
  // checkpoint geral
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4;
  // console.log(checkpoint);

  for (const section of sections) {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');
    // console.log(
    //   `sectionTop:${sectionTop} | sectionHeight:${sectionHeight} | sectionId:${sectionId}`
    // );

    // checkpoint top
    const checkpointStart = checkpoint >= sectionTop;
    // checkpoint bottom
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight;

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active');
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active');
    }
  }
}

// When scroll
window.addEventListener('scroll', function () {
  changeHeaderWhenScroll();
  backToTop();
  activateMenuAtCurrentSection();
});

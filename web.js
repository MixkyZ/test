document.addEventListener('DOMContentLoaded', () => {
  const modeSwitch = document.getElementById('nav-mode_switch');
  const body = document.body;
  const theme = localStorage.getItem('theme');

  modeSwitch.addEventListener('click', () => {
    body.classList.toggle('dark');
    localStorage.setItem('theme', body.classList.contains('dark') ? 'dark' : 'light');
  });

  body.classList.toggle('dark', theme === 'dark');
});

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  const slides = document.getElementsByClassName('mySlides');
  const dots = document.getElementsByClassName('dot');

  if (n > slides.length) slideIndex = 1;
  if (n < 1) slideIndex = slides.length;

  Array.from(slides).forEach(slide => slide.style.display = 'none');
  Array.from(dots).forEach(dot => dot.classList.remove('active'));

  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].classList.add('active');
}

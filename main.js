document.addEventListener("DOMContentLoaded", () => {
  // ScrollReveal animation
  ScrollReveal().reveal('.nav__logo', { delay: 200, origin: 'left' });
  ScrollReveal().reveal('.nav__menu li', { delay: 300, origin: 'top', interval: 100 });
  ScrollReveal().reveal('.nav__contact__card', { delay: 400, origin: 'right', interval: 200 });
  ScrollReveal().reveal('.header__image', { delay: 500, origin: 'bottom' });
  ScrollReveal().reveal('.header__content h1', { delay: 600, origin: 'left' });
  ScrollReveal().reveal('.header__content p', { delay: 700, origin: 'right' });
  ScrollReveal().reveal('.input__row', { delay: 800, origin: 'bottom' });
  ScrollReveal().reveal('.categories__section h2', { delay: 200, origin: 'top' });
  ScrollReveal().reveal('.category__card', { delay: 300, origin: 'bottom', interval: 200 });
  ScrollReveal().reveal('.featured__courses h2', { delay: 200, origin: 'top' });
  ScrollReveal().reveal('.course__card', { delay: 300, origin: 'bottom', interval: 200 });
  ScrollReveal().reveal('.benefits__section h2', { delay: 200, origin: 'top' });
  ScrollReveal().reveal('.benefit__card', { delay: 300, origin: 'bottom', interval: 200 });
  ScrollReveal().reveal('.how__it__works h2', { delay: 200, origin: 'top' });
  ScrollReveal().reveal('.how__step', { delay: 300, origin: 'bottom', interval: 200 });
  ScrollReveal().reveal('.testimonials__section h2', { delay: 200, origin: 'top' });
  ScrollReveal().reveal('.testimonial__card', { delay: 300, origin: 'bottom', interval: 200 });
  ScrollReveal().reveal('.cta__section h2', { delay: 200, origin: 'top' });
  ScrollReveal().reveal('.cta__section button', { delay: 300, origin: 'bottom' });
  ScrollReveal().reveal('.newsletter__section h2', { delay: 200, origin: 'top' });
  ScrollReveal().reveal('.newsletter__section form', { delay: 300, origin: 'bottom' });
  ScrollReveal().reveal('.faqs__section h2', { delay: 200, origin: 'top' });
  ScrollReveal().reveal('.faq__card', { delay: 300, origin: 'bottom', interval: 200 });
  ScrollReveal().reveal('footer .footer__container', { delay: 200, origin: 'top' });
  const navMenuItems = document.querySelectorAll('.nav__menu li a');
  navMenuItems.forEach(item => {
    item.addEventListener('mouseover', () => {
      item.classList.add('hover');
    });
    item.addEventListener('mouseout', () => {
      item.classList.remove('hover');
    });
  });
  const heroCTAButton = document.querySelector('.header__content button');
  heroCTAButton.addEventListener('click', () => {
    alert('Search functionality coming soon!');
  });
  const ctaSectionButton = document.querySelector('.cta__section button');
  ctaSectionButton.addEventListener('click', () => {
    alert('Sign Up functionality coming soon!');
  });
  const newsletterForm = document.querySelector('.newsletter__section form');
  newsletterForm.addEventListener('submit', event => {
    event.preventDefault();
    alert('Subscribed to the newsletter!');
  });
});

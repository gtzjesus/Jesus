const primaryNav = document.querySelector('.primary__navigation');
const navToggle = document.querySelector('.mobile__nav__toggle');

navToggle.addEventListener('click', function () {
  const visibility = primaryNav.getAttribute('data-visible');
  console.log(visibility);

  if (visibility === 'false') {
    primaryNav.setAttribute('data-visible', true);
    navToggle.setAttribute('aria-expanded', true);
  } else if (visibility === 'true') {
    primaryNav.setAttribute('data-visible', false);
    navToggle.setAttribute('aria-expanded', false);
  }
});

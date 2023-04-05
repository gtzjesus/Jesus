const primaryNav = document.querySelector('.primary__navigation');
const navToggle = document.querySelector('.mobile__nav__toggle');
const linkOne = document.querySelector('.link-one');
const linkTwo = document.querySelector('.link-two');
const linkThree = document.querySelector('.link-three');
const linkFour = document.querySelector('.link-four');

/**
 * EVENT LISTENER THAT HANDLES CLICK ON HAMBURGER * MENU
 * @returns event THE LISTENED EVENT AND RETURNS  * THE SET ATTRIBUTES
 */
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
  return;
});
/**
 * EVENT LISTENERS THAT HANDLES DISSAPEARING
 * MENU WHEN CLICKING ON INDIVIDUAL REFERENCE LINKS
 * @returns event THE LISTENED EVENT AND RETURNS  * THE SET ATTRIBUTES (WILL REFACTOR SOON)
 */
linkOne.addEventListener('click', function () {
  const visibility = linkOne.getAttribute('data-visible');
  if (visibility === 'false') {
    primaryNav.setAttribute('data-visible', false);
    navToggle.setAttribute('aria-expanded', false);
  }
  return;
});
linkTwo.addEventListener('click', function () {
  const visibility = linkTwo.getAttribute('data-visible');
  if (visibility === 'false') {
    primaryNav.setAttribute('data-visible', false);
    navToggle.setAttribute('aria-expanded', false);
  }
  return;
});
linkThree.addEventListener('click', function () {
  const visibility = linkThree.getAttribute('data-visible');
  if (visibility === 'false') {
    primaryNav.setAttribute('data-visible', false);
    navToggle.setAttribute('aria-expanded', false);
  }
  return;
});
linkFour.addEventListener('click', function () {
  const visibility = linkThree.getAttribute('data-visible');
  if (visibility === 'false') {
    primaryNav.setAttribute('data-visible', false);
    navToggle.setAttribute('aria-expanded', false);
  }
  return;
});

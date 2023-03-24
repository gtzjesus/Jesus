import aboutView from './views/aboutView';
import codeView from './views/codeView';
import contactVIew from './views/contactVIew';
import contentView from './views/contentView';
import descriptionView from './views/descriptionView';
import githubView from './views/githubView';
import mapView from './views/mapView';
import spectrumView from './views/spectrumView';

//// CONSTANTS THAT WE WILL NEED TO ACCESS FOR OUT APPLICATION
const hiddenElements = window.document.querySelectorAll('.hidden');
const hiddenDelayElements = window.document.querySelectorAll('.hidden__delay');

/**
 * INTERSECTION OBSERVER (DOM SCROLL ELEMENT)
 * @param {DOM} entries USED TO LOOP AROUND TO FIND WHAT IS VISIBLE (WITH CLASS HIDDEN)
 * @returns THE OBSERVED ELEMENT d
 */
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      //// SHOWING ONLY ANIMATION ONCE
      entry.target.classList.add('show');
    } else {
      //// SHOWING ANIMATION MULTIPLE TIMES (BY REMOVING AGAIN)
      // entry.target.classList.remove('show');
    }
  });
});
/**
 * CALL OBSERVER WITH PARENT ELEMENTS THAT WE WANT TO TRIGGER
 */
hiddenElements.forEach((element) => observer.observe(element));
hiddenDelayElements.forEach((element) => observer.observe(element));

document.onreadystatechange = function () {
  if (document.readyState !== 'complete') {
    document.querySelector('.code__container').style.visibility = 'hidden';
    document.querySelector('#loader').style.visibility = 'visible';
  } else {
    document.querySelector('#loader').style.display = 'none';
    document.querySelector('.code__container').style.visibility = 'visible';
  }
};

const init = function () {
  contentView.render();
  descriptionView.render();
  aboutView.render();
  codeView.render();
  spectrumView.render();
  mapView.render();
  githubView.render();
  contactVIew.render();
};
init();

import aboutView from './views/aboutView';
import codeView from './views/codeView';
import contactVIew from './views/contactVIew';
import contentView from './views/contentView';
import descriptionView from './views/descriptionView';
import githubView from './views/githubView';
import mapView from './views/mapView';
import spectrumView from './views/spectrumView';
import footerView from './views/footerView';

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
    // console.log(entry);
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

/**
 * LOADER LOGIN IMPLEMENTAION (IF DOCUMENT IS NOT READY(!COMPLETE) DISPLAY LOADER UNTIL ITS COMPLETE)
 */
document.onreadystatechange = function () {
  if (document.readyState !== 'complete') {
    document.querySelector('body').style.visibility = 'hidden';
    document.querySelector('#loader').style.visibility = 'visible';
  } else {
    document.querySelector('#loader').style.display = 'none';
    document.querySelector('body').style.visibility = 'visible';
  }
};

function orientationHandler(mql) {
  if (mql.matches) {
    // landscape
  } else {
    // portrait
  }
}

if (!!window.matchMedia.addListener) {
  window.matchMedia('(orientation:landscape)').addListener(orientationHandler);
} else {
  window.addEventListener('orientationchange', function (e) {
    if (window.orientation == 'portrait') {
      // portrait
    } else {
      // landscape
      document.getElementsByName('section').style.color = 'tomato';
      document.getElementsByClassName('.landscape__orientation').style.display =
        'flex';
    }
  });
}

const init = function () {
  contentView.render();
  descriptionView.render();
  aboutView.render();
  codeView.render();
  spectrumView.render();
  mapView.render();
  githubView.render();
  contactVIew.render();
  footerView.render();
};
init();

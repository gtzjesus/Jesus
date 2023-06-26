import aboutView from './views/aboutView';
import codeView from './views/codeView';
import contentView from './views/contentView';
import descriptionView from './views/descriptionView';
import projectView from './views/projectView';
import researchView from './views/researchView';
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
    document.querySelector('#body').style.visibility = 'hidden';
    document.querySelector('#loader').style.visibility = 'visible';
  } else {
    document.querySelector('#loader').style.display = 'none';
    document.querySelector('#body').style.visibility = 'visible';
  }
};

const init = function () {
  contentView.render();
  descriptionView.render();
  aboutView.render();
  codeView.render();
  projectView.render();
  researchView.render();
};
init();

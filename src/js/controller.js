import aboutView from './views/aboutView';
import contentView from './views/contentView';
import descriptionView from './views/descriptionView';

const init = function () {
  contentView.render();
  descriptionView.render();
  aboutView.render();
};
init();

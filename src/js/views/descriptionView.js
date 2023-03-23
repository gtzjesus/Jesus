class DescriptionView {
  _parentElement = window.document.querySelector('.description');

  render() {
    const markup = this._generateMarkup();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  _generateMarkup() {
    return `
    <span class="paragraph">___________from the early stages of designing prototypes, to fully implementing applications, i've found that <span class="name"> my passion</span> relies in creating digital experiences.</span>
    `;
  }
}
export default new DescriptionView();

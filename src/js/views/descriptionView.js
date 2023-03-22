class DescriptionView {
  _parentElement = window.document.querySelector('.description');

  render() {
    const markup = this._generateMarkup();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  _generateMarkup() {
    return `
    <span class="paragraph">___________from the early stages of designing prototypes, to fully implementing applications, i've found that creating digital experiences and products is<span class="name"> my passion.</span> </span>
    `;
  }
}
export default new DescriptionView();

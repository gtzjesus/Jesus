class DescriptionView {
  _parentElement = window.document.querySelector('.description');

  render() {
    const markup = this._generateMarkup();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  _generateMarkup() {
    return `
    <span class="paragraph">___________i love creating digital experiences and products. from early stages, designing prototypes, to fully implement applications. i've found a passion for creating digital blueprints by using modern technologies that facilitate different audiences all around the web.</span>
    `;
  }
}
export default new DescriptionView();

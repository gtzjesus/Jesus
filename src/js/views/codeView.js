class CodeView {
  _parentElement = window.document.querySelector('.code');

  render() {
    const markup = this._generateMarkup();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  _generateMarkup() {
    return `
        <div class ="code__container ">
            <div class="code__introduction ">
                <span >my build process<span class="lastname">usually goes as</span></span>
            </div>
        </div>
    `;
  }
}
export default new CodeView();

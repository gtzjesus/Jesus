class ContentView {
  _parentElement = window.document.querySelector('.content');

  render() {
    const markup = this._generateMarkup();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  _generateMarkup() {
    return `
    <span class="tiny__title">creative</span>
    <span class="title">designer<span class="tiny__title">&</span></span>
    <span class="title">developer</span>
    `;
  }
}

export default new ContentView();

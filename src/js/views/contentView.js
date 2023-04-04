class ContentView {
  _parentElement = window.document.querySelector('.content');

  render() {
    const markup = this._generateMarkup();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  _generateMarkup() {
    return `
    <span class="tiny__title">full stack</span>
    <span class="title">software<span class="tiny__title">+</span></span>
    <span class="title">engineer</span>
    
    `;
  }
}

export default new ContentView();

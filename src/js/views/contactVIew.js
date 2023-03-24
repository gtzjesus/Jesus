class ContactView {
  _parentElement = window.document.querySelector('.contact');

  render() {
    const markup = this._generateMarkup();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  _generateMarkup() {
    return `
        <div class="contact__container">
            <span>hello</span>
        </div>
    `;
  }
}
export default new ContactView();

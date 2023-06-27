class ContactView {
  _parentElement = window.document.querySelector('.contact');

  render() {
    const markup = this._generateMarkup();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  _generateMarkup() {
    return `
        <div class="contact__container">
            <div class="contact__introduction">
                <div class="contact__title">
                    <span>so, <br /> let's <br /> connect!</span>
                </div>
                <div class="contact__subtitle">
                    <span>im always open for new adventures</span>
                </div>
            </div>
        </div>
    `;
  }
}

export default new ContactView();

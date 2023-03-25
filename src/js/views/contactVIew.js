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
                    <span>let's <br /> connect</span>
                </div>
                <div class="contact__subtitle">
                    <span>what brings you here?</span>
                </div>
            </div>
            <div class="contact__body">
                <div class="contact__form">
                    <form>
                        <span></span>
                        <input type="text" id="name" placeholder="NAME" required />
                        <input type="text" id="email" placeholder="EMAIL" required />
                        <textarea id="message" placeholder="MESSAGE" required></textarea>
                        <button type="submit">SUBMIT</button>                        
                    </form>
                </div>
            </div>
        </div>
    `;
  }
}
export default new ContactView();

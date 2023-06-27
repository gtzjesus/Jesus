class GithubView {
  _parentElement = window.document.querySelector('.github');

  render() {
    const markup = this._generateMarkup();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  _generateMarkup() {
    return `
        <a class="git" href="https://github.com/gtzjesus/">
        <div class="github__container">
            <div class="github">
                <span class="github__title">Dropping <br/> my github here</span>
            </div>
        </div>
        </a>
    `;
  }
}

export default new GithubView();

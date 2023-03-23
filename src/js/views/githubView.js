class GithubView {
  _parentElement = window.document.querySelector('.github');

  render() {
    const markup = this._generateMarkup();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  _generateMarkup() {
    return `
        <div class="github__container">
            <div class="github__information">
                <span>interested in exploring<span class="lastname">more?</span></span>
            </div>
            <a class="github__link__a" href="https://github.com/gtzjesus?tab=repositories"title="GitHub Repos">
                <div class="github__link">
                    <span><span class="tap">tap here</span> to visit all my code repos</span>
                </div>
            </a>
        </div>
    `;
  }
}
export default new GithubView();

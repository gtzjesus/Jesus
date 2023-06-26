class ResearchView {
  _parentElement = window.document.querySelector('.research');

  render() {
    const markup = this._generateMarkup();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  _generateMarkup() {
    return `
        <div class="research__container">
          <div class="research__intro">
            <span class="research__title">
              <span class="firstname">I've also done</span><span class="name">some research</span>
            </span>
          </div>
          <div class="research__sea__container">
            <div class="research__sea">
              <span>privileged to <span class="collab">collaborate</span> with both, <span class="engineer">engineers</span> and <span class="usa">military</span> stakeholders, to fully implement <span class="sea">SEA (Scanning and Enumeration Asset)</span> used to identify <span class="critical">critical</span> cyber attacks.</span>
              <div class="research__click">
                <a class="research__click__button" href="https://github.com/gtzjesus/SEA" target="blank">Learn more</a>
              </div>
            </div>

          </div>
        </div>
    `;
  }
}

export default new ResearchView();

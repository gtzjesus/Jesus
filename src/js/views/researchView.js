class ResearchView {
  _parentElement = document.querySelector('.research');

  render() {
    const markup = this._generateMarkup();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  _generateMarkup() {
    return `
        <div class="research__container">
            <div class="research__introduction">
                <span>in research <span class="lastname">i've had the privilege to</span>
                </span>
            </div>
            <div class="research__description">
                <span>___________collaborate with both, military stakeholders and a team of engineers, to  <span class="name">fully implement</span> a scanning and enumeration software used to find vulnerabilities in military reports.<span class="lastname"></span></span>
            </div>
        </div>
    `;
  }
}

export default new ResearchView();

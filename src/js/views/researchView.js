import research from '../views/imgs/research/research.gif';
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
                <span>in research <span class="res">i've had the privilege to</span>
                </span>
            </div>
            <div class="research__description">
                <span>___________collaborate with both, military stakeholders and a team of engineers, to  <span class="research">fully implement</span> a scanning and enumeration software used to identify critical cyber vulnerabilities in military tasks.<span class="lastname"></span></span>
            </div>
            <div class="research__image">
                <img src="${research}" />
            </div>

        </div>
    `;
  }
}

export default new ResearchView();

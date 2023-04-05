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
            <div class="research__visit">
                <span class="option">designs</span>
                <span class="option">diagrams</span>
                <span class="option">prototype</span>
                <span class="option">code</span>
                <a class="github__link__a" href="https://github.com/gtzjesus/SEA"title="SEA" target="_blank">
                    <div class="research__button">
                        <span><span class="tapper">tap</span> to see all</span>
                    </div>
                </a>
            </div>
        </div>
    `;
  }
}

export default new ResearchView();

import spectrum from './imgs/spectrum/spectrum.gif';
import gh from './imgs/techs/github-visit.gif';
import host from './imgs/techs/host.gif';

class SpectrumView {
  _parentElement = window.document.querySelector('.spectrum');

  render() {
    const markup = this._generateMarkup();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  _generateMarkup() {
    return `
            <div class="spectrum__container">
                <div class="spectrum__intro">
                    <span class="spectrum__title">selected creations</span>
                    <span class="spectrum__subtitle">spectrum assist</span>
                </div>
                <div class="spectrum__display">
                    <img src="${spectrum}" />
                </div>
                <div  class="spectrum__description">
                <span>
                __________a software application whose <span class="lastname__spectrum">mission is to aid</span>  spectrum technicians
                through various troubleshooting processes.
                </span>
                </div>
                <div class="spectrum__link">
                    <a href="https://spectrumassist.netlify.app" target="_blank">
                    <span class="spectrum__link__flex">visit site <img src="${host}" title="Visit Site" /></span>
                    </a>
                    <a href="https://github.com/gtzjesus/SpectrumAssist" target="_blank">
                    <span class="spectrum__link__flex">visit git <img src="${gh}" title="Visit Repo" /></span>
                    </a>
                </div>
            </div>
        `;
  }
}
export default new SpectrumView();

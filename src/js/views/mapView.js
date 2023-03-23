import map from './imgs/spectrum/map.gif';
import gh from './imgs/techs/github-visit.gif';
import host from './imgs/techs/host.gif';

class MapView {
  _parentElement = window.document.querySelector('.map');

  render() {
    const markup = this._generateMarkup();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  _generateMarkup() {
    return `
            <div class="map__container">
                <div class="map__intro">
                    <span class="map__subtitle">mapper</span>
                </div>
                <div class="map__display">
                    <img src="${map}" />
                </div>
                <div  class="map__description">
                <span>
                __________a fitness application that <span class="lastname__map">allows users </span>
                to log multiple sets of cardiovascular excerices to keep
                track of thier fitness journey. 
                </span>
                </div>
                <div class="map__link">
                    <a href="https://mapassist.netlify.app" target="_blank">
                    <span class="map__link__flex">visit site <img src="${host}" title="Visit Site" /></span>
                    </a>
                    <a href="https://github.com/gtzjesus/mapAssist" target="_blank">
                    <span class="map__link__flex">visit git <img src="${gh}" title="Visit Repo" /></span>
                    </a>
                </div>
            </div>
        `;
  }
}
export default new MapView();

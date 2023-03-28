import map from './imgs/spectrum/mapper.gif';
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
      <span class="map__subtitle" id="mobile">mapper app</span>
    </div>

    <div  class="map__description">
      <div class="map__display">
        <img src="${map}" />
      </div>
      <div class="map__body">
      <span class="map__desc">
      __________A FITNESS APPLICATION THAT <span class="lastname__map">ALLOWS USERS</span> TO LOG and keep track of MULTIPLE SETS OF CARDIOVASCULAR excercises.
      </span>
    <div class="map__link">
    <a class="map__link__a" href="https://mapassist.netlify.app" target="_blank">
      <div class="map__link__cont">
        <span class="map__link__flex">site<img src="${host}" title="Visit Site" /></span>
      </div>
    </a>
    <a class="map__link__a" href="https://github.com/gtzjesus/mapAssist" target="_blank">
      <div class="map__link__cont">
        <span class="map__link__flex">github<img src="${gh}" title="Visit Repo" /></span>
      </div>
      </a>
  </div>
  </div>
    </div>

    <div class="map__intro">
      <span class="map__subtitle" id="desktop">mapper app</span>
    </div>
</div>
        `;
  }
}
export default new MapView();

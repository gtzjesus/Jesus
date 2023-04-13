import map from './imgs/spectrum/mapper.gif';
import gh from './imgs/techs/github-visit.gif';
import host from './imgs/techs/host.gif';
import js from './imgs/tools/js.png';
import node from './imgs/tools/node.png';
import express from './imgs/tools/express.png';
import mongo from './imgs/tools/mongo.png';

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
      <div class="tools__container">
      <ul class="tools">
          <li ><img class="tool" src="${js}"<li>
          <li><img class="tool" src="${node}"<li>
          <li><img class="tool" src="${express}"<li>
          <li><img class="tool" src="${mongo}"<li>

      </ul>
  </div>
    <div class="map__link">
    <a class="map__link__a" href="" target="_blank">
      <div class="map__link__cont">
        <span class="map__link__flex">website<img src="${host}" title="Visit Site" /></span>
      </div>
    </a>
    <a class="map__link__a" href="" target="_blank">
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

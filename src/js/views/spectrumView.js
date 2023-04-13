import spectrum from './imgs/spectrum/spectrum.gif';
import gh from './imgs/techs/github-visit.gif';
import host from './imgs/techs/host.gif';
import js from './imgs/tools/js.png';
import node from './imgs/tools/node.png';
import express from './imgs/tools/express.png';
import mongo from './imgs/tools/mongo.png';

class SpectrumView {
  _parentElement = window.document.querySelector('.spectrum');

  render() {
    const markup = this._generateMarkup();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  _generateMarkup() {
    return `
    <span class="spectrum__title">peek my software</span>

            <div class="spectrum__container">

                <div class="spectrum__intro">
                    <span class="spectrum__subtitle">spectrum assist</span>
                </div>

                <div  class="spectrum__description">
                  <div class="spectrum__display">
                    <img src="${spectrum}" />
                  </div>
                  <div class="spectrum__body">
                  <span class="spectrum__desc">
                  __________a software application whose <span class="lastname__spectrum">mission is to aid</span>  spectrum technicians
                  through various troubleshooting processes.
                  </span>
                  <div class="tools__container">
                  <ul class="tools">
                      <li ><img class="tool" src="${js}"<li>
                      <li><img class="tool" src="${node}"<li>
                      <li><img class="tool" src="${express}"<li>
                      <li><img class="tool" src="${mongo}"<li>

                  </ul>
              </div>
                <div class="spectrum__link">
                <a class="spectrum__link__a" href="" target="_blank">
                  <div class="spectrum__link__cont">
                    <span class="spectrum__link__flex">website <img src="${host}" title="Visit Site" /></span>
                  </div>
                </a>
                <a class="spectrum__link__a" href="" target="_blank">
                  <div class="spectrum__link__cont">
                    <span class="spectrum__link__flex">github <img src="${gh}" title="Visit Repo" /></span>
                  </div>
                  </a>
              </div>
              </div>
                </div>
            </div>
        `;
  }
}
export default new SpectrumView();

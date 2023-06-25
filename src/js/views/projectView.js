/**
 * PROJECTS DISPLAYED HERE
 */
import spectrum from './imgs/spectrum/spectrum.gif';
import primrose from './imgs/primrose/primrose.gif';
import map from './imgs/spectrum/mapper.gif';

import js from './imgs/tools/js.png';
import node from './imgs/tools/node.png';
import express from './imgs/tools/express.png';
import mongo from './imgs/tools/mongo.png';

class ProjectView {
  _parentElement = window.document.querySelector('.projects');

  render() {
    const markup = this._generateMarkup();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  _generateMarkup() {
    return `
    <div class="tools__container">
        <ul class="tools">
            <li ><img class="tool" src="${js}"<li>
            <li><img class="tool" src="${node}"<li>
            <li><img class="tool" src="${express}"<li>
            <li><img class="tool" src="${mongo}"<li>
        </ul>
    </div>
    <span class="spectrum__title">peek my software</span>
    <div class="scrolling-wrapper">
        <div class="marginner">
        <div class="card">
            <a class="spectrum__display" href="https://github.com/gtzjesus/Spectrum-Assist" target="_blank">
                <span class="spectrum__subtitle assist">spectrum assist</span>
                <img src="${spectrum}" />
                <span class="spectrum__desc">
                  __________a web app whose <span >mission is to aid</span>  spectrum technicians.
                </span>
            </a>
        </div>
              <div class="card">
        <a class="spectrum__display"  href="https://github.com/gtzjesus/Primrose" target="_blank">
            <span class="spectrum__subtitle prim">primrose</span>
            <img src="${primrose}" />
            <span class="spectrum__desc">
              __________an e-commerce app  <span >used to browse & purchase</span>  women's trending.
            </span>
        </a>
    </div>
        <div class="card">
            <span class="spectrum__subtitle come">mapp</span>
            <a class="spectrum__display"  href="https://github.com/gtzjesus/" target="_blank">
                <img src="${map}" />
                <span class="spectrum__desc">
                __________a fitness app <span >allows logging & tracking</span>
                cardio excercises.
              </span>
            </a>
        </div>
    </div>
    </div>
    `;
  }
}

export default new ProjectView();

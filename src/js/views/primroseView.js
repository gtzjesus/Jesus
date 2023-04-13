import primrose from './imgs/primrose/primrose.gif';
import gh from './imgs/techs/github-visit.gif';
import host from './imgs/techs/host.gif';
import js from './imgs/tools/js.png';
import node from './imgs/tools/node.png';
import express from './imgs/tools/express.png';
import mongo from './imgs/tools/mongo.png';

class PrimroseView {
  _parentElement = document.querySelector('.primrose');

  render() {
    const markup = this._generateMarkup();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  _generateMarkup() {
    return `
    <div class="primrose__container">

        <div class="primrose__intro">
            <span class="primrose__subtitle">primrose</span>
        </div>

        <div  class="primrose__description">
            <div class="primrose__display">
                <img src="${primrose}" />
            </div>
            <div class="primrose__body">
                <span class="primrose__desc">
                __________an e - commerce application that allows clients to purchase trending women's clothing, jewelry, and accessories. shop today.
                </span>
                <div class="tools__container">
                    <ul class="tools">
                        <li ><img class="tool" src="${js}"<li>
                        <li><img class="tool" src="${node}"<li>
                        <li><img class="tool" src="${express}"<li>
                        <li><img class="tool" src="${mongo}"<li>

                    </ul>
                </div>
            <div class="primrose__link">
                <a class="primrose__link__a" href="" target="_blank">
                    <div class="primrose__link__cont">
                        <span class="primrose__link__flex">website <img src="${host}" title="Visit Site" /></span>
                    </div>
                </a>
                <a class="primrose__link__a" href="" target="_blank">
                    <div class="primrose__link__cont">
                        <span class="primrose__link__flex">github <img src="${gh}" title="Visit Repo" /></span>
                    </div>
                </a>
            </div>
        </div>
    </div>
</div>
    `;
  }
}

export default new PrimroseView();

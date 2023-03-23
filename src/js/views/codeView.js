import vs from './imgs/techs/vs.png';
import js from './imgs/techs/js.png';
import ny from './imgs/techs/netlify.png';
import gh from './imgs/techs/github.png';
import node from './imgs/techs/node.png';
import figma from './imgs/techs/figma.png';

class CodeView {
  _parentElement = window.document.querySelector('.code');

  render() {
    const markup = this._generateMarkup();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  _generateMarkup() {
    return `
        <div class ="code__container">
        <div class="code__introduction">
            <span >my build process<span class="lastname">usually</span></span>
                <div class="technologies ">
                    <div class="tech">
                        <a href="https://code.visualstudio.com" target="_blank">
                            <img src="${figma}" title="Visual Studio Code" />
                        </a>
                    </div>
                    <div class="tech">
                    <a href="https://code.visualstudio.com" target="_blank">
                        <img src="${vs}" title="Visual Studio Code" />
                    </a>
                    </div>
                    <div class="tech">
                        <a href="https://nodejs.org/en/docs" target="_blank">
                            <img src="${node}" title="Node JS" />
                        </a>
                    </div>
                    <div class="tech">
                        <a href="https://htmlcheatsheet.com/js/" target="_blank">
                            <img src="${js}" title="JavaScript" />
                        </a>
                    </div>
                    <div class="tech">
                        <a href=" https://github.com/gtzjesus" target="_blank">
                            <img src="${gh}" title="GitHub" />
                        </a>
                    </div>
                    <div class="tech">
                        <a href=" https://netlify.com" target="_blank">
                            <img src="${ny}" title="Netlify" />
                        </a>
                </div>
                </div>
        </div>
        <div class="code__images"></div>
        </div>
    `;
  }
}
export default new CodeView();

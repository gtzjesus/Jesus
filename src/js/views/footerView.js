import footer__logo from '../views/imgs/header/logo.gif';
import instagram from '../views/imgs/footer/instagram.png';
import github from '../views/imgs/footer/github.png';
import linkedin from '../views/imgs/footer/linkedin.png';
import twitter from '../views/imgs/footer/twitter.png';

class FooterView {
  _parentElement = document.querySelector('.footer');

  render() {
    const markup = this._generateMarkup();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  _generateMarkup() {
    return `
            <div class="footer__content">
                <div>
                    <img class="logo__footer" src="${footer__logo}" />
                </div>
                <div class="quote">
                    <span>"impossible is nothing"</span>
                </div>
                <div class="links__container">
                    <ul class="links">
                        <li class="link"><a><img href="" src="${instagram}" /></a></li>
                        <li class="link"><a><img href="" src="${github}" /></a></li>
                        <li class="link"><a><img href="" src="${linkedin}" /></a></li>
                        <li class="link"><a><img href="" src="${twitter}" /></a></li>
                    </ul>
                </div>
                <div class="copyright">
                    <p>handcrafted by me <span>&#169;</span> jesus gutierrez</p>
                </div>
            </div>
    `;
  }
}
export default new FooterView();

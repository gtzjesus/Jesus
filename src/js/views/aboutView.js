import person from './imgs/about/person.gif';
class AboutView {
  _parentElement = window.document.querySelector('.about');

  render() {
    const markup = this._generateMarkup();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  _generateMarkup() {
    return `
        <div class="about__title">
            <span>hello. i am <span class="name">jesus</span><span class="lastname">gutierrez</span></span>
            <div class='person'> 
                <img src="${person}" />
            </div> 
        </div>
        <div class="about__description">
            <span>
            ___________for years, i've aquired multiple skill sets
            that have allowed me <span class="name">to expand</span> my knowledge in modern technologies and programming languages.
            </span>
        </div>

    `;
  }
}

export default new AboutView();

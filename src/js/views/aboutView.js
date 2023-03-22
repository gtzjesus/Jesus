import person from './person.gif';
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
            ___________i've been using <span class="name">this passion</span> throughout the years, and in the process, I have aquired multiple skill sets
            that have allowed me to master a few modern programming languages and technologies.
            </span>
        </div>

    `;
  }
}

export default new AboutView();

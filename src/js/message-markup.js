import bookImg from '../images/shopping_list/not_fond_img@1x.png';
import bookImgRetina from '../images/shopping_list/not_fond_img@2x.png';

export function createMessageMarkup(selectedCategory, message) {
  const title = selectedCategory.split(' ');
  const titleWithAccent = title.splice(-1).join(' ');
  const titleWithOutAccent = title.join(' ');
  return `
            <div>
              <h1 class="books-section__title">${titleWithOutAccent} <span class="accent">${titleWithAccent}</span></h1>
                <div class="message">
                  <div class="message__inner">
                    <p class="message__text">${message}</p>
                    <div class="message__img">
                    <img
                      class="shopping-list--not-found"
                      srcset=${bookImg} 1x, ${bookImgRetina} 2x
                      src=${bookImg}
                      alt="books"
                      width="322"
                      height="241"
                      />
                    </div>
                  </div>
                </div>
            </div>
      `;
}

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
                    <div class="message__img"></div>
                  </div>
                </div>
            </div>
      `;
}

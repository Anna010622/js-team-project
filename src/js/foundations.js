import { charityItems } from './charity-items.js';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.min.css';


const charityEl = document.querySelector('.swiper-wrapper');
const charityItemsHtml = charityItems.map(({ url, img, imgRetina, title }, index) =>
  `<div class="charity-item swiper-slide tooltip">
    <a href="${url}" class="charity-link" 
      target="_blank"
      rel="noopener noreferrer nofollow">
    <span class="charity_index">${(index + 1).toString().padStart(2, "0")}</span>
     <img class="charity_logo"  srcset = "
        ${img} 1x,
        ${imgRetina} 2x
        "
        src="${img}" alt="${title}">
    </a>
    <span class="tooltiptext tooltip-right">
    ${title}
    </span>
  </div>`).join('');

charityEl.innerHTML = charityItemsHtml;
const swiperEl = document.querySelector('.swiper');

const swiper = new Swiper('.swiper', {
  direction: 'vertical',
  loop: true,
  spaceBetween: 20,
  slidesPerView: 4,
  breakpoints: {
    768: {
      slidesPerView: 6
    }
  }
});

const nextBtnEl = document.querySelector('.charity-next-slide');
nextBtnEl.addEventListener('click', () => {
  if (swiper.activeIndex + swiper.loopedSlides + 1 > swiper.slides.length) {
    swiper.slideToLoop(0)
  } else {
    swiper.slideNext()
  }
});
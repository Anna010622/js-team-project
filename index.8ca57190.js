function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={},i=n.parcelRequired7c6;null==i&&((i=function(e){if(e in r)return r[e].exports;if(e in o){var t=o[e];delete o[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},n.parcelRequired7c6=i),i.register("kyEFX",(function(t,n){var r,o;e(t.exports,"register",(function(){return r}),(function(e){return r=e})),e(t.exports,"resolve",(function(){return o}),(function(e){return o=e}));var i={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)i[t[n]]=e[t[n]]},o=function(e){var t=i[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),i("kyEFX").register(JSON.parse('{"5ZPII":"index.8ca57190.js","8OQ7p":"icons.9f596ecc.svg","39UvY":"not_fond_img@1x.4be6f1d7.png","i39E0":"not_fond_img@2x.005b4450.png","5UbS1":"index.eb578f77.css","8JNnL":"index.515652ed.js"}')),i("k4CpY"),i("bUb57");var s=i("2shzp");function a(e,t){return e.length+3<=t?e:e.slice(0,t-3)+"..."}function c({book_image:e,_id:t,title:n,author:r}){let o=30;window.matchMedia("(min-width: 768px)").matches&&(o=20),window.matchMedia("(min-width: 1280px)").matches&&(o=15);const i=a(n,o);let s=55;window.matchMedia("(min-width: 768px)").matches&&(s=37),window.matchMedia("(min-width: 1280px)").matches&&(s=25);return`\n    <li class="books-list__item book">\n      <div class="book__img-wrapper">\n        <img class="book__img" src="${e}" alt="book's image" data-book="${t}" />\n        <div class="book__overlay" data-book="${t}">\n          <p class="book__quick-view" data-book="${t}">Quick view</p>\n        </div>\n      </div>\n      <div class="book__text" data-book="${t}">\n        <h3 class="book__title" data-book="${t}">${i}</h3>\n        <p class="book__author" data-book="${t}">${a(r,s)}</p>\n      </div>\n    </li>\n  `}var l;l=new URL(i("kyEFX").resolve("39UvY"),import.meta.url).toString();var d;function h(e,n){const r=e.split(" "),o=r.splice(-1).join(" ");return`\n            <div>\n              <h1 class="books-section__title">${r.join(" ")} <span class="accent">${o}</span></h1>\n                <div class="message">\n                  <div class="message__inner">\n                    <p class="message__text">${n}</p>\n                    <div class="message__img">\n                    <img\n                      class="shopping-list--not-found"\n                      srcset=${t(l)} 1x, ${t(d)} 2x\n                      src=${t(l)}\n                      alt="books"\n                      width="322"\n                      height="241"\n                      />\n                    </div>\n                  </div>\n                </div>\n            </div>\n      `}d=new URL(i("kyEFX").resolve("i39E0"),import.meta.url).toString();const u=document.querySelector(".js-page-loader");function p(){u.classList.toggle("backdrop__is-hidden")}s=i("2shzp");function f(e){const t=`https://books-backend.p.goit.global/books/category?category=${e}`;return s.default.get(t)}const m=document.querySelector(".books-section");function b(){window.scroll({top:770,behavior:"smooth"}),window.matchMedia("(min-width: 768px)").matches&&window.scroll({top:680,behavior:"smooth"}),window.matchMedia("(min-width: 1280px)").matches&&window.scroll({top:0,behavior:"smooth"})}document.querySelector("main").addEventListener("click",(async function(e){if(!e.target.dataset.value)return;const t=e.target.dataset.value;if(function(e){document.querySelectorAll(".js-click-link").forEach((t=>{t.classList.contains("current-category")&&t.classList.remove("current-category"),t.dataset.value===e&&t.classList.add("current-category")}))}(t),"all-categories"===t)return;p();try{const e=await f(t);if(0===e.data.length){const e=h(t,"There are no books");return void(m.innerHTML=e)}const n=e.data.map((e=>c(e))).join(" "),r=function(e,t){const n=e.split(" "),r=n.splice(-1).join(" ");return`\n            <div>\n              <h1 class="books-section__title">${n.join(" ")} <span class="accent">${r}</span></h1>\n              <ul class="category-books-list">\n                ${t}\n              </ul>\n            </div>\n      `}(t,n);m.innerHTML=r,b()}catch(e){console.log(e)}p()}));const g=document.querySelector(".books-section"),_=document.querySelector('[data-value="all-categories"]'),v=window.matchMedia("(min-width: 768px) and (max-width: 1279.98px)");async function w(){p();try{const e=await s.default.get("https://books-backend.p.goit.global/books/top-books");if(0===e.data.length){const e=h(selectedCategory,"There are no books");return void(g.innerHTML=e)}const t=e.data,n=function(e){return`\n    <div>\n      <h1 class="books-section__title">Best Sellers <span class="accent">Books</span></h1>\n      <ul class="books-section__list">\n        ${e}\n      </ul>\n    </div>\n  `}(t.map((e=>{const t=e.books;let n;if(n=c(t[0]),v.matches){const e=[],r=3;t.forEach(((t,n)=>{n<r&&e.push(c(t))})),n=e.join(" ")}window.matchMedia("(min-width: 1280px)").matches&&(n=t.map((e=>c(e))).join(" "));const r=function(e,t){return`\n  <li class="books-section__list-item">\n    <h2 class="books-section__list-item-title">${e.list_name}</h2>\n    <ul class="books-list">\n      ${t}\n    </ul>\n    <button type="button" class="btn-see-more" data-value="${e.list_name}">See more</button>\n  </li>\n`}(e,n);return r})).join(" "));g.innerHTML=n}catch(e){console.log(e)}p()}w(),v.addEventListener("change",w),_.addEventListener("click",w),_.addEventListener("click",b);s=i("2shzp");const y=document.querySelector(".categories__list");!async function(){try{const e=await s.default.get("https://books-backend.p.goit.global/books/category-list"),t=e.data.map((e=>function(e){return`\n    <li class="categories__item">\n      <a class="categories__link js-click-link" data-value="${e}">\n        ${e}\n       </a>\n    </li>\n  `}(e.list_name))).join(" ");y.insertAdjacentHTML("beforeend",t)}catch(e){console.log(e)}}(),i("lUz8B");s=i("2shzp");function E(e){const t=`https://books-backend.p.goit.global/books/${e}`;return s.default.get(t)}var k;k=new URL(i("kyEFX").resolve("8OQ7p"),import.meta.url).toString();const S=document.querySelector("body"),I=document.querySelector(".books-section"),L=document.querySelector(".modal-book__backdrop");let D=[];function C(){L.classList.remove("show-modal-book"),S.classList.remove("noScroll"),L.removeEventListener("click",T),window.removeEventListener("keydown",A)}function A(e){"Escape"===e.code&&(L.classList.remove("show-modal-book"),S.classList.remove("noScroll"),window.removeEventListener("keydown",A))}function T(e){e.currentTarget===e.target&&(e.target.classList.remove("show-modal-book"),S.classList.remove("noScroll"),window.removeEventListener("keydown",A))}I.addEventListener("click",(async function(e){let n=localStorage.getItem("books");if(D=JSON.parse(n),!e.target.dataset.book)return;p();try{const n=e.target.dataset.book,r=(await E(n)).data,o=function({book_image:e,title:n,author:r,description:o,amazon_product_url:i,buy_links:s}){return`\n  <div class="modal-book">\n    <button class="modal__btn-close" type="button" data-modal-close>\n      <svg class="modal__button-icon " width="28" height="28">\n        <use href=${t(k)}#icon-close></use>\n      </svg>\n    </button>\n    <div class="modal__inner">\n      <div class="modal__img-wrapper">\n        <img class="modal__img" src="${e}" alt="book's image" />\n      </div>\n      <div class="modal__information">\n        <p class="modal__book-title">${n}</p>\n        <p class="modal__book-author">${r}</p>\n        <p class="modal__book-description">${o}</p>\n        <ul class="modal__book-links">\n          <li>\n            <a class="modal__book-link shopping-list__link shopping-list__amazon" href="${i}" target="_blank"\n            rel="noopener noreferrer nofollow" aria-label="link to amazon"></a>\n          </li>\n          <li>\n            <a class="modal__book-link shopping-list__link shopping-list__apple-book" href="${s[1].url}" target="_blank"\n            rel="noopener noreferrer nofollow" aria-label="link to apple books"></a>\n          </li>\n          <li>\n          <a class="modal__book-link shopping-list__link shopping-list__bookshop" href="${s[4].url}" target="_blank"\n          rel="noopener noreferrer nofollow" aria-label="link to Bookshop"></a>\n          </li>\n        </ul>\n      </div>\n    </div>\n    <button class="modal__button js-btn-add" type="button" >Add to shopping list</button>\n    <div class="remove-block hidden-btn">\n      <button class="modal__button modal__button--remote js-btn-remove" type="button">\n        Remove from the shopping list\n      </button>\n      <p class="modal__message">\n        Сongratulations! You have added the book to the shopping list. To delete,\n        press the button “Remove from the shopping list”.\n      </p>\n    </div>\n  </div>\n  `}(r);L.innerHTML=o,L.classList.add("show-modal-book"),S.classList.add("noScroll");const i=document.querySelector(".js-btn-add");i.addEventListener("click",(function(){null===D?(D=[],D.push(r),localStorage.setItem("books",JSON.stringify(D)),s.classList.remove("hidden-btn"),i.classList.add("hidden-btn")):D.find((e=>e._id===r._id))||(D.push(r),localStorage.setItem("books",JSON.stringify(D)),s.classList.remove("hidden-btn"),i.classList.add("hidden-btn"))}));const s=document.querySelector(".remove-block");null===localStorage.getItem("Name")&&(i.style.display="none",s.style.display="none"),null!==D&&D.find((e=>e._id===r._id))&&(s.classList.remove("hidden-btn"),i.classList.add("hidden-btn"));document.querySelector(".js-btn-remove").addEventListener("click",(function(){if(D.find((e=>e._id===r._id))){const e=D.find((e=>e._id===r._id)),t=D.indexOf(e);D.splice(t,1),localStorage.setItem("books",JSON.stringify(D)),s.classList.add("hidden-btn"),i.classList.remove("hidden-btn")}})),L.addEventListener("click",T);document.querySelector("[data-modal-close]").addEventListener("click",C),window.addEventListener("keydown",A)}catch(e){console.log(e)}p()})),i("ghT7p");const O=document.querySelector(".up-btn");window.addEventListener("scroll",(function(){window.scrollY>500?O.style.display="block":O.style.display="none"})),O.addEventListener("click",(()=>{window.scrollTo({top:0,left:0,behavior:"smooth"})}));var B,$,M,N=B={};function j(){throw new Error("setTimeout has not been defined")}function H(){throw new Error("clearTimeout has not been defined")}function R(e){if($===setTimeout)return setTimeout(e,0);if(($===j||!$)&&setTimeout)return $=setTimeout,setTimeout(e,0);try{return $(e,0)}catch(t){try{return $.call(null,e,0)}catch(t){return $.call(this,e,0)}}}!function(){try{$="function"==typeof setTimeout?setTimeout:j}catch(e){$=j}try{M="function"==typeof clearTimeout?clearTimeout:H}catch(e){M=H}}();var x,F=[],P=!1,U=-1;function z(){P&&x&&(P=!1,x.length?F=x.concat(F):U=-1,F.length&&V())}function V(){if(!P){var e=R(z);P=!0;for(var t=F.length;t;){for(x=F,F=[];++U<t;)x&&x[U].run();U=-1,t=F.length}x=null,P=!1,function(e){if(M===clearTimeout)return clearTimeout(e);if((M===H||!M)&&clearTimeout)return M=clearTimeout,clearTimeout(e);try{M(e)}catch(t){try{return M.call(null,e)}catch(t){return M.call(this,e)}}}(e)}}function W(e,t){this.fun=e,this.array=t}function q(){}N.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];F.push(new W(e,t)),1!==F.length||P||R(V)},W.prototype.run=function(){this.fun.apply(null,this.array)},N.title="browser",N.browser=!0,N.env={},N.argv=[],N.version="",N.versions={},N.on=q,N.addListener=q,N.once=q,N.off=q,N.removeListener=q,N.removeAllListeners=q,N.emit=q,N.prependListener=q,N.prependOnceListener=q,N.listeners=function(e){return[]},N.binding=function(e){throw new Error("process.binding is not supported")},N.cwd=function(){return"/"},N.chdir=function(e){throw new Error("process.chdir is not supported")},N.umask=function(){return 0};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const J=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let o=e.charCodeAt(r);o<128?t[n++]=o:o<2048?(t[n++]=o>>6|192,t[n++]=63&o|128):55296==(64512&o)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(o=65536+((1023&o)<<10)+(1023&e.charCodeAt(++r)),t[n++]=o>>18|240,t[n++]=o>>12&63|128,t[n++]=o>>6&63|128,t[n++]=63&o|128):(t[n++]=o>>12|224,t[n++]=o>>6&63|128,t[n++]=63&o|128)}return t},G={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let t=0;t<e.length;t+=3){const o=e[t],i=t+1<e.length,s=i?e[t+1]:0,a=t+2<e.length,c=a?e[t+2]:0,l=o>>2,d=(3&o)<<4|s>>4;let h=(15&s)<<2|c>>6,u=63&c;a||(u=64,i||(h=64)),r.push(n[l],n[d],n[h],n[u])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(J(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,r=0;for(;n<e.length;){const o=e[n++];if(o<128)t[r++]=String.fromCharCode(o);else if(o>191&&o<224){const i=e[n++];t[r++]=String.fromCharCode((31&o)<<6|63&i)}else if(o>239&&o<365){const i=((7&o)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(i>>10)),t[r++]=String.fromCharCode(56320+(1023&i))}else{const i=e[n++],s=e[n++];t[r++]=String.fromCharCode((15&o)<<12|(63&i)<<6|63&s)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let t=0;t<e.length;){const o=n[e.charAt(t++)],i=t<e.length?n[e.charAt(t)]:0;++t;const s=t<e.length?n[e.charAt(t)]:64;++t;const a=t<e.length?n[e.charAt(t)]:64;if(++t,null==o||null==i||null==s||null==a)throw new X;const c=o<<2|i>>4;if(r.push(c),64!==s){const e=i<<4&240|s>>2;if(r.push(e),64!==a){const e=s<<6&192|a;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Y=function(e){return function(e){const t=J(e);return G.encodeByteArray(t,!0)}(e).replace(/\./g,"")},K=function(e){try{return G.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Q=()=>
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==n)return n;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,Z=()=>{try{return Q()||(()=>{if(void 0===B||void 0===B.env)return})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}const t=e&&K(e[1]);return t&&JSON.parse(t)})()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ee{wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function te(){try{return"object"==typeof indexedDB}catch(e){return!1}}class ne extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,ne.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,re.prototype.create)}}class re{create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,o=this.errors[e],i=o?function(e,t){return e.replace(oe,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}(o,n):"Error",s=`${this.serviceName}: ${i} (${r}).`;return new ne(r,s,n)}constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}}const oe=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ie(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const o of n){if(!r.includes(o))return!1;const n=e[o],i=t[o];if(se(n)&&se(i)){if(!ie(n,i))return!1}else if(n!==i)return!1}for(const e of r)if(!n.includes(e))return!1;return!0}function se(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ce{get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new ee;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e))try{this.getOrInitializeService({instanceIdentifier:"[DEFAULT]"})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e="[DEFAULT]"){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e="[DEFAULT]"){return this.instances.has(e)}getOptions(e="[DEFAULT]"){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),o=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;o.add(e),this.onInitCallbacks.set(r,o);const i=this.instances.get(r);return i&&e(i,r),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=e,"[DEFAULT]"===r?void 0:r),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var r;return n||null}normalizeInstanceIdentifier(e="[DEFAULT]"){return this.component?this.component.multipleInstances?e:"[DEFAULT]":e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}}class le{addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new ce(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}constructor(e){this.name=e,this.providers=new Map}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const de=[];var he,ue;(ue=he||(he={}))[ue.DEBUG=0]="DEBUG",ue[ue.VERBOSE=1]="VERBOSE",ue[ue.INFO=2]="INFO",ue[ue.WARN=3]="WARN",ue[ue.ERROR=4]="ERROR",ue[ue.SILENT=5]="SILENT";const pe={debug:he.DEBUG,verbose:he.VERBOSE,info:he.INFO,warn:he.WARN,error:he.ERROR,silent:he.SILENT},fe=he.INFO,me={[he.DEBUG]:"log",[he.VERBOSE]:"log",[he.INFO]:"info",[he.WARN]:"warn",[he.ERROR]:"error"},be=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),o=me[t];if(!o)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[o](`[${r}]  ${e.name}:`,...n)};let ge,_e;const ve=new WeakMap,we=new WeakMap,ye=new WeakMap,Ee=new WeakMap,ke=new WeakMap;let Se={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return we.get(e);if("objectStoreNames"===t)return e.objectStoreNames||ye.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return De(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function Ie(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(_e||(_e=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(Ce(this),t),De(ve.get(this))}:function(...t){return De(e.apply(Ce(this),t))}:function(t,...n){const r=e.call(Ce(this),t,...n);return ye.set(r,t.sort?t.sort():[t]),De(r)}}function Le(e){return"function"==typeof e?Ie(e):(e instanceof IDBTransaction&&function(e){if(we.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",i),e.removeEventListener("abort",i)},o=()=>{t(),r()},i=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",o),e.addEventListener("error",i),e.addEventListener("abort",i)}));we.set(e,t)}(e),t=e,(ge||(ge=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((e=>t instanceof e))?new Proxy(e,Se):e);var t}function De(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",o),e.removeEventListener("error",i)},o=()=>{t(De(e.result)),r()},i=()=>{n(e.error),r()};e.addEventListener("success",o),e.addEventListener("error",i)}));return t.then((t=>{t instanceof IDBCursor&&ve.set(t,e)})).catch((()=>{})),ke.set(t,e),t}(e);if(Ee.has(e))return Ee.get(e);const t=Le(e);return t!==e&&(Ee.set(e,t),ke.set(t,e)),t}const Ce=e=>ke.get(e);function Ae(e,t,{blocked:n,upgrade:r,blocking:o,terminated:i}={}){const s=indexedDB.open(e,t),a=De(s);return r&&s.addEventListener("upgradeneeded",(e=>{r(De(s.result),e.oldVersion,e.newVersion,De(s.transaction))})),n&&s.addEventListener("blocked",(()=>n())),a.then((e=>{i&&e.addEventListener("close",(()=>i())),o&&e.addEventListener("versionchange",(()=>o()))})).catch((()=>{})),a}const Te=["get","getKey","getAll","getAllKeys","count"],Oe=["put","add","delete","clear"],Be=new Map;function $e(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(Be.get(t))return Be.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,o=Oe.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!o&&!Te.includes(n))return;const i=async function(e,...t){const i=this.transaction(e,o?"readwrite":"readonly");let s=i.store;return r&&(s=s.index(t.shift())),(await Promise.all([s[n](...t),o&&i.done]))[0]};return Be.set(t,i),i}Se=(e=>({...e,get:(t,n,r)=>$e(t,n)||e.get(t,n,r),has:(t,n)=>!!$e(t,n)||e.has(t,n)}))(Se);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Me{getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}constructor(e){this.container=e}}const Ne=new class{get logLevel(){return this._logLevel}set logLevel(e){if(!(e in he))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?pe[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,he.DEBUG,...e),this._logHandler(this,he.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,he.VERBOSE,...e),this._logHandler(this,he.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,he.INFO,...e),this._logHandler(this,he.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,he.WARN,...e),this._logHandler(this,he.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,he.ERROR,...e),this._logHandler(this,he.ERROR,...e)}constructor(e){this.name=e,this._logLevel=fe,this._logHandler=be,this._userLogHandler=null,de.push(this)}}("@firebase/app"),je={"@firebase/app":"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},He=new Map,Re=new Map;function xe(e,t){try{e.container.addComponent(t)}catch(n){Ne.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Fe(e){const t=e.name;if(Re.has(t))return Ne.debug(`There were multiple attempts to register component ${t}.`),!1;Re.set(t,e);for(const t of He.values())xe(t,e);return!0}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Pe=new re("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ue{get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Pe.create("app-deleted",{appName:this._name})}constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new ae("app",(()=>this),"PUBLIC"))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ze(e,t={}){let n=e;if("object"!=typeof t){t={name:t}}const r=Object.assign({name:"[DEFAULT]",automaticDataCollectionEnabled:!1},t),o=r.name;if("string"!=typeof o||!o)throw Pe.create("bad-app-name",{appName:String(o)});var i;if(n||(n=null===(i=Z())||void 0===i?void 0:i.config),!n)throw Pe.create("no-options");const s=He.get(o);if(s){if(ie(n,s.options)&&ie(r,s.config))return s;throw Pe.create("duplicate-app",{appName:o})}const a=new le(o);for(const e of Re.values())a.addComponent(e);const c=new Ue(n,r,a);return He.set(o,c),c}function Ve(e,t,n){var r;let o=null!==(r=je[e])&&void 0!==r?r:e;n&&(o+=`-${n}`);const i=o.match(/\s|\//),s=t.match(/\s|\//);if(i||s){const e=[`Unable to register library "${o}" with version "${t}":`];return i&&e.push(`library name "${o}" contains illegal characters (whitespace or "/")`),i&&s&&e.push("and"),s&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void Ne.warn(e.join(" "))}Fe(new ae(`${o}-version`,(()=>({library:o,version:t})),"VERSION"))}let We=null;function qe(){return We||(We=Ae("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)e.createObjectStore("firebase-heartbeat-store")}}).catch((e=>{throw Pe.create("idb-open",{originalErrorMessage:e.message})}))),We}async function Je(e,t){try{const n=(await qe()).transaction("firebase-heartbeat-store","readwrite"),r=n.objectStore("firebase-heartbeat-store");return await r.put(t,Ge(e)),n.done}catch(e){if(e instanceof ne)Ne.warn(e.message);else{const t=Pe.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});Ne.warn(t.message)}}}function Ge(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=Ye();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some((e=>e.date===t)))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=Ye(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){const n=[];let r=e.slice();for(const o of e){const e=n.find((e=>e.agent===o.agent));if(e){if(e.dates.push(o.date),Qe(n)>t){e.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),Qe(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),r=Y(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Ke(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}}function Ye(){return(new Date).toISOString().substring(0,10)}class Ke{async runIndexedDBEnvironmentCheck(){return!!te()&&new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(r);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{var e;t((null===(e=o.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){return await async function(e){try{return(await qe()).transaction("firebase-heartbeat-store").objectStore("firebase-heartbeat-store").get(Ge(e))}catch(e){if(e instanceof ne)Ne.warn(e.message);else{const t=Pe.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});Ne.warn(t.message)}}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return Je(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return Je(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}}function Qe(e){return Y(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ze;Ze="",Fe(new ae("platform-logger",(e=>new Me(e)),"PRIVATE")),Fe(new ae("heartbeat",(e=>new Xe(e)),"PRIVATE")),Ve("@firebase/app","0.9.7",Ze),Ve("@firebase/app","0.9.7","esm2017"),Ve("fire-js","");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Ve("firebase","9.19.1","app");ze({apiKey:"AIzaSyB-nlh-TAPHi3IbGFjTnnksDPM4TWwuT4w",authDomain:"js-team-project-84b18.firebaseapp.com",databaseURL:"https://js-team-project-84b18-default-rtdb.europe-west1.firebasedatabase.app",projectId:"js-team-project-84b18",storageBucket:"js-team-project-84b18.appspot.com",messagingSenderId:"536343494199",appId:"1:536343494199:web:762d7d3783a8c9b4b3c9b2"});i("62c9T");
//# sourceMappingURL=index.8ca57190.js.map

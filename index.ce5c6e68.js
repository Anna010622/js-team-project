function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={},i=n.parcelRequired7c6;null==i&&((i=function(e){if(e in r)return r[e].exports;if(e in o){var t=o[e];delete o[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},n.parcelRequired7c6=i),i.register("kyEFX",(function(t,n){var r,o;e(t.exports,"register",(function(){return r}),(function(e){return r=e})),e(t.exports,"resolve",(function(){return o}),(function(e){return o=e}));var i={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)i[t[n]]=e[t[n]]},o=function(e){var t=i[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),i("kyEFX").register(JSON.parse('{"5ZPII":"index.ce5c6e68.js","8OQ7p":"icons.9f596ecc.svg","39UvY":"not_fond_img@1x.4be6f1d7.png","i39E0":"not_fond_img@2x.005b4450.png","5UbS1":"index.eb578f77.css","8JNnL":"index.f93af408.js"}')),i("k4CpY"),i("bUb57");var s=i("2shzp");function a(e,t){return e.length+3<=t?e:e.slice(0,t-3)+"..."}function c({book_image:e,_id:t,title:n,author:r}){let o=30;window.matchMedia("(min-width: 768px)").matches&&(o=20),window.matchMedia("(min-width: 1280px)").matches&&(o=15);const i=a(n,o);let s=55;window.matchMedia("(min-width: 768px)").matches&&(s=37),window.matchMedia("(min-width: 1280px)").matches&&(s=25);return`\n    <li class="books-list__item book">\n      <div class="book__img-wrapper">\n        <img class="book__img" src="${e}" alt="book's image" data-book="${t}" />\n        <div class="book__overlay" data-book="${t}">\n          <p class="book__quick-view" data-book="${t}">Quick view</p>\n        </div>\n      </div>\n      <div class="book__text" data-book="${t}">\n        <h3 class="book__title" data-book="${t}">${i}</h3>\n        <p class="book__author" data-book="${t}">${a(r,s)}</p>\n      </div>\n    </li>\n  `}var l;l=new URL(i("kyEFX").resolve("39UvY"),import.meta.url).toString();var d;function h(e,n){const r=e.split(" "),o=r.splice(-1).join(" ");return`\n            <div>\n              <h1 class="books-section__title">${r.join(" ")} <span class="accent">${o}</span></h1>\n                <div class="message">\n                  <div class="message__inner">\n                    <p class="message__text">${n}</p>\n                    <div class="message__img">\n                    <img\n                      class="shopping-list--not-found"\n                      srcset=${t(l)} 1x, ${t(d)} 2x\n                      src=${t(l)}\n                      alt="books"\n                      width="322"\n                      height="241"\n                      />\n                    </div>\n                  </div>\n                </div>\n            </div>\n      `}d=new URL(i("kyEFX").resolve("i39E0"),import.meta.url).toString();var u=i("gjiCh");s=i("2shzp");function p(e){const t=`https://books-backend.p.goit.global/books/category?category=${e}`;return s.default.get(t)}u=i("gjiCh");const f=document.querySelector(".books-section");function m(){window.scroll({top:770,behavior:"smooth"}),window.matchMedia("(min-width: 768px)").matches&&window.scroll({top:680,behavior:"smooth"}),window.matchMedia("(min-width: 1280px)").matches&&window.scroll({top:0,behavior:"smooth"})}document.querySelector("main").addEventListener("click",(async function(e){if(!e.target.dataset.value)return;const t=e.target.dataset.value;if(function(e){document.querySelectorAll(".js-click-link").forEach((t=>{t.classList.contains("current-category")&&t.classList.remove("current-category"),t.dataset.value===e&&t.classList.add("current-category")}))}(t),"all-categories"===t)return;(0,u.default)();try{const e=await p(t);if(0===e.data.length){const e=h(t,"There are no books");return void(f.innerHTML=e)}const n=e.data.map((e=>c(e))).join(" "),r=function(e,t){const n=e.split(" "),r=n.splice(-1).join(" ");return`\n            <div>\n              <h1 class="books-section__title">${n.join(" ")} <span class="accent">${r}</span></h1>\n              <ul class="category-books-list">\n                ${t}\n              </ul>\n            </div>\n      `}(t,n);f.innerHTML=r,m()}catch(e){console.log(e)}(0,u.default)()}));const b=document.querySelector(".books-section"),g=document.querySelector('[data-value="all-categories"]'),_=window.matchMedia("(min-width: 768px) and (max-width: 1279.98px)");async function v(){(0,u.default)();try{const e=await s.default.get("https://books-backend.p.goit.global/books/top-books");if(0===e.data.length){const e=h(selectedCategory,"There are no books");return void(b.innerHTML=e)}const t=e.data,n=function(e){return`\n    <div>\n      <h1 class="books-section__title">Best Sellers <span class="accent">Books</span></h1>\n      <ul class="books-section__list">\n        ${e}\n      </ul>\n    </div>\n  `}(t.map((e=>{const t=e.books;let n;if(n=c(t[0]),_.matches){const e=[],r=3;t.forEach(((t,n)=>{n<r&&e.push(c(t))})),n=e.join(" ")}window.matchMedia("(min-width: 1280px)").matches&&(n=t.map((e=>c(e))).join(" "));const r=function(e,t){return`\n  <li class="books-section__list-item">\n    <h2 class="books-section__list-item-title">${e.list_name}</h2>\n    <ul class="books-list">\n      ${t}\n    </ul>\n    <button type="button" class="btn-see-more" data-value="${e.list_name}">See more</button>\n  </li>\n`}(e,n);return r})).join(" "));b.innerHTML=n}catch(e){console.log(e)}(0,u.default)()}v(),_.addEventListener("change",v),g.addEventListener("click",v),g.addEventListener("click",m);s=i("2shzp");const w=document.querySelector(".categories__list");!async function(){try{const e=await s.default.get("https://books-backend.p.goit.global/books/category-list"),t=e.data.map((e=>function(e){return`\n    <li class="categories__item">\n      <a class="categories__link js-click-link" data-value="${e}">\n        ${e}\n       </a>\n    </li>\n  `}(e.list_name))).join(" ");w.insertAdjacentHTML("beforeend",t)}catch(e){console.log(e)}}(),i("lUz8B");s=i("2shzp");function y(e){const t=`https://books-backend.p.goit.global/books/${e}`;return s.default.get(t)}var E;u=i("gjiCh");E=new URL(i("kyEFX").resolve("8OQ7p"),import.meta.url).toString();const k=document.querySelector("body"),S=document.querySelector(".books-section"),I=document.querySelector(".modal-book__backdrop");let L=[];function D(){I.classList.remove("show-modal-book"),k.classList.remove("noScroll"),I.removeEventListener("click",A),window.removeEventListener("keydown",C)}function C(e){"Escape"===e.code&&(I.classList.remove("show-modal-book"),k.classList.remove("noScroll"),window.removeEventListener("keydown",C))}function A(e){e.currentTarget===e.target&&(e.target.classList.remove("show-modal-book"),k.classList.remove("noScroll"),window.removeEventListener("keydown",C))}S.addEventListener("click",(async function(e){let n=localStorage.getItem("books");if(L=JSON.parse(n),!e.target.dataset.book)return;(0,u.default)();try{const n=e.target.dataset.book,r=(await y(n)).data,o=function({book_image:e,title:n,author:r,description:o,amazon_product_url:i,buy_links:s}){return`\n  <div class="modal-book">\n    <button class="modal__btn-close" type="button" data-modal-close>\n      <svg class="modal__button-icon " width="28" height="28">\n        <use href=${t(E)}#icon-close></use>\n      </svg>\n    </button>\n    <div class="modal__inner">\n      <div class="modal__img-wrapper">\n        <img class="modal__img" src="${e}" alt="book's image" />\n      </div>\n      <div class="modal__information">\n        <p class="modal__book-title">${n}</p>\n        <p class="modal__book-author">${r}</p>\n        <p class="modal__book-description">${o}</p>\n        <ul class="modal__book-links">\n          <li>\n            <a class="modal__book-link shopping-list__link shopping-list__amazon" href="${i}" target="_blank"\n            rel="noopener noreferrer nofollow" aria-label="link to amazon"></a>\n          </li>\n          <li>\n            <a class="modal__book-link shopping-list__link shopping-list__apple-book" href="${s[1].url}" target="_blank"\n            rel="noopener noreferrer nofollow" aria-label="link to apple books"></a>\n          </li>\n          <li>\n          <a class="modal__book-link shopping-list__link shopping-list__bookshop" href="${s[4].url}" target="_blank"\n          rel="noopener noreferrer nofollow" aria-label="link to Bookshop"></a>\n          </li>\n        </ul>\n      </div>\n    </div>\n    <button class="modal__button js-btn-add" type="button" >Add to shopping list</button>\n    <div class="remove-block hidden-btn">\n      <button class="modal__button modal__button--remote js-btn-remove" type="button">\n        Remove from the shopping list\n      </button>\n      <p class="modal__message">\n        Сongratulations! You have added the book to the shopping list. To delete,\n        press the button “Remove from the shopping list”.\n      </p>\n    </div>\n  </div>\n  `}(r);I.innerHTML=o,I.classList.add("show-modal-book"),k.classList.add("noScroll");const i=document.querySelector(".js-btn-add");i.addEventListener("click",(function(){null===L?(L=[],L.push(r),localStorage.setItem("books",JSON.stringify(L)),s.classList.remove("hidden-btn"),i.classList.add("hidden-btn")):L.find((e=>e._id===r._id))||(L.push(r),localStorage.setItem("books",JSON.stringify(L)),s.classList.remove("hidden-btn"),i.classList.add("hidden-btn"))}));const s=document.querySelector(".remove-block");null!==L&&L.find((e=>e._id===r._id))&&(s.classList.remove("hidden-btn"),i.classList.add("hidden-btn"));document.querySelector(".js-btn-remove").addEventListener("click",(function(){if(L.find((e=>e._id===r._id))){const e=L.find((e=>e._id===r._id)),t=L.indexOf(e);L.splice(t,1),localStorage.setItem("books",JSON.stringify(L)),s.classList.add("hidden-btn"),i.classList.remove("hidden-btn")}})),I.addEventListener("click",A);document.querySelector("[data-modal-close]").addEventListener("click",D),window.addEventListener("keydown",C)}catch(e){console.log(e)}(0,u.default)()})),i("ghT7p");const T=document.querySelector(".up-btn");window.addEventListener("scroll",(function(){window.scrollY>500?T.style.display="block":T.style.display="none"})),T.addEventListener("click",(()=>{window.scrollTo({top:0,left:0,behavior:"smooth"})})),i("gjiCh");var O,B,$,j=O={};function M(){throw new Error("setTimeout has not been defined")}function N(){throw new Error("clearTimeout has not been defined")}function H(e){if(B===setTimeout)return setTimeout(e,0);if((B===M||!B)&&setTimeout)return B=setTimeout,setTimeout(e,0);try{return B(e,0)}catch(t){try{return B.call(null,e,0)}catch(t){return B.call(this,e,0)}}}!function(){try{B="function"==typeof setTimeout?setTimeout:M}catch(e){B=M}try{$="function"==typeof clearTimeout?clearTimeout:N}catch(e){$=N}}();var R,x=[],F=!1,P=-1;function U(){F&&R&&(F=!1,R.length?x=R.concat(x):P=-1,x.length&&z())}function z(){if(!F){var e=H(U);F=!0;for(var t=x.length;t;){for(R=x,x=[];++P<t;)R&&R[P].run();P=-1,t=x.length}R=null,F=!1,function(e){if($===clearTimeout)return clearTimeout(e);if(($===N||!$)&&clearTimeout)return $=clearTimeout,clearTimeout(e);try{$(e)}catch(t){try{return $.call(null,e)}catch(t){return $.call(this,e)}}}(e)}}function V(e,t){this.fun=e,this.array=t}function W(){}j.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];x.push(new V(e,t)),1!==x.length||F||H(z)},V.prototype.run=function(){this.fun.apply(null,this.array)},j.title="browser",j.browser=!0,j.env={},j.argv=[],j.version="",j.versions={},j.on=W,j.addListener=W,j.once=W,j.off=W,j.removeListener=W,j.removeAllListeners=W,j.emit=W,j.prependListener=W,j.prependOnceListener=W,j.listeners=function(e){return[]},j.binding=function(e){throw new Error("process.binding is not supported")},j.cwd=function(){return"/"},j.chdir=function(e){throw new Error("process.chdir is not supported")},j.umask=function(){return 0};
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
const q=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let o=e.charCodeAt(r);o<128?t[n++]=o:o<2048?(t[n++]=o>>6|192,t[n++]=63&o|128):55296==(64512&o)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(o=65536+((1023&o)<<10)+(1023&e.charCodeAt(++r)),t[n++]=o>>18|240,t[n++]=o>>12&63|128,t[n++]=o>>6&63|128,t[n++]=63&o|128):(t[n++]=o>>12|224,t[n++]=o>>6&63|128,t[n++]=63&o|128)}return t},J={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let t=0;t<e.length;t+=3){const o=e[t],i=t+1<e.length,s=i?e[t+1]:0,a=t+2<e.length,c=a?e[t+2]:0,l=o>>2,d=(3&o)<<4|s>>4;let h=(15&s)<<2|c>>6,u=63&c;a||(u=64,i||(h=64)),r.push(n[l],n[d],n[h],n[u])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(q(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,r=0;for(;n<e.length;){const o=e[n++];if(o<128)t[r++]=String.fromCharCode(o);else if(o>191&&o<224){const i=e[n++];t[r++]=String.fromCharCode((31&o)<<6|63&i)}else if(o>239&&o<365){const i=((7&o)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(i>>10)),t[r++]=String.fromCharCode(56320+(1023&i))}else{const i=e[n++],s=e[n++];t[r++]=String.fromCharCode((15&o)<<12|(63&i)<<6|63&s)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let t=0;t<e.length;){const o=n[e.charAt(t++)],i=t<e.length?n[e.charAt(t)]:0;++t;const s=t<e.length?n[e.charAt(t)]:64;++t;const a=t<e.length?n[e.charAt(t)]:64;if(++t,null==o||null==i||null==s||null==a)throw new G;const c=o<<2|i>>4;if(r.push(c),64!==s){const e=i<<4&240|s>>2;if(r.push(e),64!==a){const e=s<<6&192|a;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
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
 */class G extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const X=function(e){return function(e){const t=q(e);return J.encodeByteArray(t,!0)}(e).replace(/\./g,"")},Y=function(e){try{return J.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
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
const K=()=>
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
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==n)return n;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,Q=()=>{try{return K()||(()=>{if(void 0===O||void 0===O.env)return})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}const t=e&&Y(e[1]);return t&&JSON.parse(t)})()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}};
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
class Z{wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
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
 */function ee(){try{return"object"==typeof indexedDB}catch(e){return!1}}class te extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,te.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ne.prototype.create)}}class ne{create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,o=this.errors[e],i=o?function(e,t){return e.replace(re,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}(o,n):"Error",s=`${this.serviceName}: ${i} (${r}).`;return new te(r,s,n)}constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}}const re=/\{\$([^}]+)}/g;
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
 */function oe(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const o of n){if(!r.includes(o))return!1;const n=e[o],i=t[o];if(ie(n)&&ie(i)){if(!oe(n,i))return!1}else if(n!==i)return!1}for(const e of r)if(!n.includes(e))return!1;return!0}function ie(e){return null!==e&&"object"==typeof e}
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
 */class se{setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}}
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
class ae{get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new Z;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
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
 */(e))try{this.getOrInitializeService({instanceIdentifier:"[DEFAULT]"})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e="[DEFAULT]"){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e="[DEFAULT]"){return this.instances.has(e)}getOptions(e="[DEFAULT]"){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),o=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;o.add(e),this.onInitCallbacks.set(r,o);const i=this.instances.get(r);return i&&e(i,r),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=e,"[DEFAULT]"===r?void 0:r),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var r;return n||null}normalizeInstanceIdentifier(e="[DEFAULT]"){return this.component?this.component.multipleInstances?e:"[DEFAULT]":e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}}class ce{addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new ae(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}constructor(e){this.name=e,this.providers=new Map}}
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
 */const le=[];var de,he;(he=de||(de={}))[he.DEBUG=0]="DEBUG",he[he.VERBOSE=1]="VERBOSE",he[he.INFO=2]="INFO",he[he.WARN=3]="WARN",he[he.ERROR=4]="ERROR",he[he.SILENT=5]="SILENT";const ue={debug:de.DEBUG,verbose:de.VERBOSE,info:de.INFO,warn:de.WARN,error:de.ERROR,silent:de.SILENT},pe=de.INFO,fe={[de.DEBUG]:"log",[de.VERBOSE]:"log",[de.INFO]:"info",[de.WARN]:"warn",[de.ERROR]:"error"},me=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),o=fe[t];if(!o)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[o](`[${r}]  ${e.name}:`,...n)};let be,ge;const _e=new WeakMap,ve=new WeakMap,we=new WeakMap,ye=new WeakMap,Ee=new WeakMap;let ke={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return ve.get(e);if("objectStoreNames"===t)return e.objectStoreNames||we.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Le(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function Se(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(ge||(ge=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(De(this),t),Le(_e.get(this))}:function(...t){return Le(e.apply(De(this),t))}:function(t,...n){const r=e.call(De(this),t,...n);return we.set(r,t.sort?t.sort():[t]),Le(r)}}function Ie(e){return"function"==typeof e?Se(e):(e instanceof IDBTransaction&&function(e){if(ve.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",i),e.removeEventListener("abort",i)},o=()=>{t(),r()},i=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",o),e.addEventListener("error",i),e.addEventListener("abort",i)}));ve.set(e,t)}(e),t=e,(be||(be=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((e=>t instanceof e))?new Proxy(e,ke):e);var t}function Le(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",o),e.removeEventListener("error",i)},o=()=>{t(Le(e.result)),r()},i=()=>{n(e.error),r()};e.addEventListener("success",o),e.addEventListener("error",i)}));return t.then((t=>{t instanceof IDBCursor&&_e.set(t,e)})).catch((()=>{})),Ee.set(t,e),t}(e);if(ye.has(e))return ye.get(e);const t=Ie(e);return t!==e&&(ye.set(e,t),Ee.set(t,e)),t}const De=e=>Ee.get(e);function Ce(e,t,{blocked:n,upgrade:r,blocking:o,terminated:i}={}){const s=indexedDB.open(e,t),a=Le(s);return r&&s.addEventListener("upgradeneeded",(e=>{r(Le(s.result),e.oldVersion,e.newVersion,Le(s.transaction))})),n&&s.addEventListener("blocked",(()=>n())),a.then((e=>{i&&e.addEventListener("close",(()=>i())),o&&e.addEventListener("versionchange",(()=>o()))})).catch((()=>{})),a}const Ae=["get","getKey","getAll","getAllKeys","count"],Te=["put","add","delete","clear"],Oe=new Map;function Be(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(Oe.get(t))return Oe.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,o=Te.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!o&&!Ae.includes(n))return;const i=async function(e,...t){const i=this.transaction(e,o?"readwrite":"readonly");let s=i.store;return r&&(s=s.index(t.shift())),(await Promise.all([s[n](...t),o&&i.done]))[0]};return Oe.set(t,i),i}ke=(e=>({...e,get:(t,n,r)=>Be(t,n)||e.get(t,n,r),has:(t,n)=>!!Be(t,n)||e.has(t,n)}))(ke);
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
class $e{getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}constructor(e){this.container=e}}const je=new class{get logLevel(){return this._logLevel}set logLevel(e){if(!(e in de))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?ue[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,de.DEBUG,...e),this._logHandler(this,de.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,de.VERBOSE,...e),this._logHandler(this,de.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,de.INFO,...e),this._logHandler(this,de.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,de.WARN,...e),this._logHandler(this,de.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,de.ERROR,...e),this._logHandler(this,de.ERROR,...e)}constructor(e){this.name=e,this._logLevel=pe,this._logHandler=me,this._userLogHandler=null,le.push(this)}}("@firebase/app"),Me={"@firebase/app":"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},Ne=new Map,He=new Map;function Re(e,t){try{e.container.addComponent(t)}catch(n){je.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function xe(e){const t=e.name;if(He.has(t))return je.debug(`There were multiple attempts to register component ${t}.`),!1;He.set(t,e);for(const t of Ne.values())Re(t,e);return!0}
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
const Fe=new ne("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});
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
class Pe{get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Fe.create("app-deleted",{appName:this._name})}constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new se("app",(()=>this),"PUBLIC"))}}
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
 */function Ue(e,t={}){let n=e;if("object"!=typeof t){t={name:t}}const r=Object.assign({name:"[DEFAULT]",automaticDataCollectionEnabled:!1},t),o=r.name;if("string"!=typeof o||!o)throw Fe.create("bad-app-name",{appName:String(o)});var i;if(n||(n=null===(i=Q())||void 0===i?void 0:i.config),!n)throw Fe.create("no-options");const s=Ne.get(o);if(s){if(oe(n,s.options)&&oe(r,s.config))return s;throw Fe.create("duplicate-app",{appName:o})}const a=new ce(o);for(const e of He.values())a.addComponent(e);const c=new Pe(n,r,a);return Ne.set(o,c),c}function ze(e,t,n){var r;let o=null!==(r=Me[e])&&void 0!==r?r:e;n&&(o+=`-${n}`);const i=o.match(/\s|\//),s=t.match(/\s|\//);if(i||s){const e=[`Unable to register library "${o}" with version "${t}":`];return i&&e.push(`library name "${o}" contains illegal characters (whitespace or "/")`),i&&s&&e.push("and"),s&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void je.warn(e.join(" "))}xe(new se(`${o}-version`,(()=>({library:o,version:t})),"VERSION"))}let Ve=null;function We(){return Ve||(Ve=Ce("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)e.createObjectStore("firebase-heartbeat-store")}}).catch((e=>{throw Fe.create("idb-open",{originalErrorMessage:e.message})}))),Ve}async function qe(e,t){try{const n=(await We()).transaction("firebase-heartbeat-store","readwrite"),r=n.objectStore("firebase-heartbeat-store");return await r.put(t,Je(e)),n.done}catch(e){if(e instanceof te)je.warn(e.message);else{const t=Fe.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});je.warn(t.message)}}}function Je(e){return`${e.name}!${e.options.appId}`}
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
 */class Ge{async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=Xe();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some((e=>e.date===t)))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=Xe(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){const n=[];let r=e.slice();for(const o of e){const e=n.find((e=>e.agent===o.agent));if(e){if(e.dates.push(o.date),Ke(n)>t){e.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),Ke(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),r=X(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Ye(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}}function Xe(){return(new Date).toISOString().substring(0,10)}class Ye{async runIndexedDBEnvironmentCheck(){return!!ee()&&new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(r);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{var e;t((null===(e=o.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){return await async function(e){try{return(await We()).transaction("firebase-heartbeat-store").objectStore("firebase-heartbeat-store").get(Je(e))}catch(e){if(e instanceof te)je.warn(e.message);else{const t=Fe.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});je.warn(t.message)}}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return qe(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return qe(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}}function Ke(e){return X(JSON.stringify({version:2,heartbeats:e})).length}
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
 */var Qe;Qe="",xe(new se("platform-logger",(e=>new $e(e)),"PRIVATE")),xe(new se("heartbeat",(e=>new Ge(e)),"PRIVATE")),ze("@firebase/app","0.9.7",Qe),ze("@firebase/app","0.9.7","esm2017"),ze("fire-js","");
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
ze("firebase","9.19.1","app");Ue({apiKey:"AIzaSyB-nlh-TAPHi3IbGFjTnnksDPM4TWwuT4w",authDomain:"js-team-project-84b18.firebaseapp.com",databaseURL:"https://js-team-project-84b18-default-rtdb.europe-west1.firebasedatabase.app",projectId:"js-team-project-84b18",storageBucket:"js-team-project-84b18.appspot.com",messagingSenderId:"536343494199",appId:"1:536343494199:web:762d7d3783a8c9b4b3c9b2"});i("62c9T");
//# sourceMappingURL=index.ce5c6e68.js.map

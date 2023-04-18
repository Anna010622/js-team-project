function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={},s=n.parcelRequired7c6;null==s&&((s=function(e){if(e in r)return r[e].exports;if(e in o){var t=o[e];delete o[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){o[e]=t},n.parcelRequired7c6=s),s.register("kyEFX",(function(t,n){var r,o;e(t.exports,"register",(function(){return r}),(function(e){return r=e})),e(t.exports,"resolve",(function(){return o}),(function(e){return o=e}));var s={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)s[t[n]]=e[t[n]]},o=function(e){var t=s[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),s("kyEFX").register(JSON.parse('{"5ZPII":"index.c8fdcb8a.js","8OQ7p":"icons.9f596ecc.svg","5UbS1":"index.cb9c5977.css","8JNnL":"index.f0f8e897.js"}')),s("k4CpY"),s("bUb57");var a=s("2shzp");function i(e,t){return e.length+3<=t?e:e.slice(0,t-3)+"..."}function c({book_image:e,_id:t,title:n,author:r}){let o=30;window.matchMedia("(min-width: 768px)").matches&&(o=20),window.matchMedia("(min-width: 1280px)").matches&&(o=15);const s=i(n,o);let a=55;window.matchMedia("(min-width: 768px)").matches&&(a=37),window.matchMedia("(min-width: 1280px)").matches&&(a=25);return`\n    <li class="books-list__item book">\n      <div class="book__img-wrapper">\n        <img class="book__img" src="${e}" alt="book's image" data-book="${t}" />\n        <div class="book__overlay" data-book="${t}">\n          <p class="book__quick-view" data-book="${t}">Quick view</p>\n        </div>\n      </div>\n      <div class="book__text" data-book="${t}">\n        <h3 class="book__title" data-book="${t}">${s}</h3>\n        <p class="book__author" data-book="${t}">${i(r,a)}</p>\n      </div>\n    </li>\n  `}function l(e,t){const n=e.split(" "),r=n.splice(-1).join(" ");return`\n            <div>\n              <h1 class="books-section__title">${n.join(" ")} <span class="accent">${r}</span></h1>\n                <div class="message">\n                  <div class="message__inner">\n                    <p class="message__text">${t}</p>\n                    <div class="message__img"></div>\n                  </div>\n                </div>\n            </div>\n      `}const d=document.querySelector(".js-page-loader");function h(){d.classList.toggle("backdrop__is-hidden")}const u=document.querySelector(".books-section"),p=document.querySelector('[data-value="all-categories"]'),f=window.matchMedia("(min-width: 768px) and (max-width: 1279.98px)");async function b(){h();try{const e=await a.default.get("https://books-backend.p.goit.global/books/top-books");if(0===e.data.length){const e=l(selectedCategory,"There are no books");return void(u.innerHTML=e)}const t=e.data,n=function(e){return`\n    <div>\n      <h1 class="books-section__title">Best Sellers <span class="accent">Books</span></h1>\n      <ul class="books-section__list">\n        ${e}\n      </ul>\n    </div>\n  `}(t.map((e=>{const t=e.books;let n;if(n=c(t[0]),f.matches){const e=[],r=3;t.forEach(((t,n)=>{n<r&&e.push(c(t))})),n=e.join(" ")}window.matchMedia("(min-width: 1280px)").matches&&(n=t.map((e=>c(e))).join(" "));const r=function(e,t){return`\n  <li class="books-section__list-item">\n    <h2 class="books-section__list-item-title">${e.list_name}</h2>\n    <ul class="books-list">\n      ${t}\n    </ul>\n    <button type="button" class="btn-see-more" data-value="${e.list_name}">See more</button>\n  </li>\n`}(e,n);return r})).join(" "));u.innerHTML=n}catch(e){console.log(e)}h()}b(),f.addEventListener("change",b),p.addEventListener("click",b);a=s("2shzp");function m(e){const t=`https://books-backend.p.goit.global/books/category?category=${e}`;return a.default.get(t)}const g=document.querySelector(".books-section");document.querySelector("main").addEventListener("click",(async function(e){if(!e.target.dataset.value)return;const t=e.target.dataset.value;if(function(e){document.querySelectorAll(".js-click-link").forEach((t=>{t.classList.contains("current-category")&&t.classList.remove("current-category"),t.dataset.value===e&&t.classList.add("current-category")}))}(t),"all-categories"===t)return;h();try{const e=await m(t);if(0===e.data.length){const e=l(t,"There are no books");return void(g.innerHTML=e)}const n=e.data.map((e=>c(e))).join(" "),r=function(e,t){const n=e.split(" "),r=n.splice(-1).join(" ");return`\n            <div>\n              <h1 class="books-section__title">${n.join(" ")} <span class="accent">${r}</span></h1>\n              <ul class="category-books-list">\n                ${t}\n              </ul>\n            </div>\n      `}(t,n);g.innerHTML=r}catch(e){console.log(e)}h()}));a=s("2shzp");const _=document.querySelector(".categories__list");!async function(){try{const e=await a.default.get("https://books-backend.p.goit.global/books/category-list"),t=e.data.map((e=>function(e){return`\n    <li class="categories__item">\n      <a class="categories__link js-click-link" data-value="${e}">\n        ${e}\n       </a>\n    </li>\n  `}(e.list_name))).join(" ");_.insertAdjacentHTML("beforeend",t)}catch(e){console.log(e)}}(),s("lUz8B");a=s("2shzp");function v(e){const t=`https://books-backend.p.goit.global/books/${e}`;return a.default.get(t)}var y;y=new URL(s("kyEFX").resolve("8OQ7p"),import.meta.url).toString();const w=document.querySelector("body"),E=document.querySelector(".books-section"),k=document.querySelector(".modal-book__backdrop");let S=[];function I(){k.classList.remove("show-modal-book"),w.classList.remove("noScroll"),k.removeEventListener("click",L)}function D(e){"Escape"===e.code&&(k.classList.remove("show-modal-book"),w.classList.remove("noScroll"),window.removeEventListener("keydown",D))}function L(e){e.currentTarget===e.target&&(e.target.classList.remove("show-modal-book"),w.classList.remove("noScroll"))}E.addEventListener("click",(async function(e){let n=localStorage.getItem("books");if(S=JSON.parse(n),!e.target.dataset.book)return;h();try{const n=e.target.dataset.book,r=(await v(n)).data,o=function({book_image:e,title:n,author:r,description:o,amazon_product_url:s,buy_links:a}){return`\n  <div class="modal-book">\n    <button class="modal__btn-close" type="button" data-modal-close>\n      <svg class="modal__button-icon " width="28" height="28">\n        <use href=${t(y)}#icon-close></use>\n      </svg>\n    </button>\n    <div class="modal__inner">\n      <div class="modal__img-wrapper">\n        <img class="modal__img" src="${e}" alt="book's image" />\n      </div>\n      <div class="modal__information">\n        <p class="modal__book-title">${n}</p>\n        <p class="modal__book-author">${r}</p>\n        <p class="modal__book-description">${o}</p>\n        <ul class="modal__book-links">\n          <li>\n            <a class="modal__book-link shopping-list__link shopping-list__amazon" href="${s}" target="_blank"\n            rel="noopener noreferrer nofollow" aria-label="link to amazon"></a>\n          </li>\n          <li>\n            <a class="modal__book-link shopping-list__link shopping-list__apple-book" href="${a[1].url}" target="_blank"\n            rel="noopener noreferrer nofollow" aria-label="link to apple books"></a>\n          </li>\n          <li>\n          <a class="modal__book-link shopping-list__link shopping-list__bookshop" href="${a[4].url}" target="_blank"\n          rel="noopener noreferrer nofollow" aria-label="link to Bookshop"></a>\n          </li>\n        </ul>\n      </div>\n    </div>\n    <button class="modal__button js-btn-add" type="button" >Add to shopping list</button>\n    <div class="remove-block hidden-btn">\n      <button class="modal__button modal__button--remote js-btn-remove" type="button">\n        Remove from the shopping list\n      </button>\n      <p class="modal__message">\n        Сongratulations! You have added the book to the shopping list. To delete,\n        press the button “Remove from the shopping list”.\n      </p>\n    </div>\n  </div>\n  `}(r);k.innerHTML=o,k.classList.add("show-modal-book"),w.classList.add("noScroll");const s=document.querySelector(".js-btn-add");s.addEventListener("click",(function(){null===S?(S=[],S.push(r),localStorage.setItem("books",JSON.stringify(S)),a.classList.remove("hidden-btn"),s.classList.add("hidden-btn")):S.find((e=>e._id===r._id))||(S.push(r),localStorage.setItem("books",JSON.stringify(S)),a.classList.remove("hidden-btn"),s.classList.add("hidden-btn"))}));const a=document.querySelector(".remove-block");null!==S&&S.find((e=>e._id===r._id))&&(a.classList.remove("hidden-btn"),s.classList.add("hidden-btn"));document.querySelector(".js-btn-remove").addEventListener("click",(function(){if(S.find((e=>e._id===r._id))){const e=S.find((e=>e._id===r._id)),t=S.indexOf(e);S.splice(t,1),localStorage.setItem("books",JSON.stringify(S)),a.classList.add("hidden-btn"),s.classList.remove("hidden-btn")}})),k.addEventListener("click",L);document.querySelector("[data-modal-close]").addEventListener("click",I),window.addEventListener("keydown",D)}catch(e){console.log(e)}h()})),s("ghT7p");const C=document.querySelector(".up-btn");window.addEventListener("scroll",(function(){window.scrollY>500?C.style.display="block":C.style.display="none"})),C.addEventListener("click",(()=>{window.scrollTo({top:0,left:0,behavior:"smooth"})}));var A,T,O,B=A={};function $(){throw new Error("setTimeout has not been defined")}function M(){throw new Error("clearTimeout has not been defined")}function N(e){if(T===setTimeout)return setTimeout(e,0);if((T===$||!T)&&setTimeout)return T=setTimeout,setTimeout(e,0);try{return T(e,0)}catch(t){try{return T.call(null,e,0)}catch(t){return T.call(this,e,0)}}}!function(){try{T="function"==typeof setTimeout?setTimeout:$}catch(e){T=$}try{O="function"==typeof clearTimeout?clearTimeout:M}catch(e){O=M}}();var j,H=[],R=!1,x=-1;function F(){R&&j&&(R=!1,j.length?H=j.concat(H):x=-1,H.length&&P())}function P(){if(!R){var e=N(F);R=!0;for(var t=H.length;t;){for(j=H,H=[];++x<t;)j&&j[x].run();x=-1,t=H.length}j=null,R=!1,function(e){if(O===clearTimeout)return clearTimeout(e);if((O===M||!O)&&clearTimeout)return O=clearTimeout,clearTimeout(e);try{O(e)}catch(t){try{return O.call(null,e)}catch(t){return O.call(this,e)}}}(e)}}function U(e,t){this.fun=e,this.array=t}function z(){}B.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];H.push(new U(e,t)),1!==H.length||R||N(P)},U.prototype.run=function(){this.fun.apply(null,this.array)},B.title="browser",B.browser=!0,B.env={},B.argv=[],B.version="",B.versions={},B.on=z,B.addListener=z,B.once=z,B.off=z,B.removeListener=z,B.removeAllListeners=z,B.emit=z,B.prependListener=z,B.prependOnceListener=z,B.listeners=function(e){return[]},B.binding=function(e){throw new Error("process.binding is not supported")},B.cwd=function(){return"/"},B.chdir=function(e){throw new Error("process.chdir is not supported")},B.umask=function(){return 0};
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
const V=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let o=e.charCodeAt(r);o<128?t[n++]=o:o<2048?(t[n++]=o>>6|192,t[n++]=63&o|128):55296==(64512&o)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(o=65536+((1023&o)<<10)+(1023&e.charCodeAt(++r)),t[n++]=o>>18|240,t[n++]=o>>12&63|128,t[n++]=o>>6&63|128,t[n++]=63&o|128):(t[n++]=o>>12|224,t[n++]=o>>6&63|128,t[n++]=63&o|128)}return t},W={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let t=0;t<e.length;t+=3){const o=e[t],s=t+1<e.length,a=s?e[t+1]:0,i=t+2<e.length,c=i?e[t+2]:0,l=o>>2,d=(3&o)<<4|a>>4;let h=(15&a)<<2|c>>6,u=63&c;i||(u=64,s||(h=64)),r.push(n[l],n[d],n[h],n[u])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(V(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,r=0;for(;n<e.length;){const o=e[n++];if(o<128)t[r++]=String.fromCharCode(o);else if(o>191&&o<224){const s=e[n++];t[r++]=String.fromCharCode((31&o)<<6|63&s)}else if(o>239&&o<365){const s=((7&o)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(s>>10)),t[r++]=String.fromCharCode(56320+(1023&s))}else{const s=e[n++],a=e[n++];t[r++]=String.fromCharCode((15&o)<<12|(63&s)<<6|63&a)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let t=0;t<e.length;){const o=n[e.charAt(t++)],s=t<e.length?n[e.charAt(t)]:0;++t;const a=t<e.length?n[e.charAt(t)]:64;++t;const i=t<e.length?n[e.charAt(t)]:64;if(++t,null==o||null==s||null==a||null==i)throw new q;const c=o<<2|s>>4;if(r.push(c),64!==a){const e=s<<4&240|a>>2;if(r.push(e),64!==i){const e=a<<6&192|i;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
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
 */class q extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const J=function(e){return function(e){const t=V(e);return W.encodeByteArray(t,!0)}(e).replace(/\./g,"")},G=function(e){try{return W.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
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
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==n)return n;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,X=()=>{try{return K()||(()=>{if(void 0===A||void 0===A.env)return})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}const t=e&&G(e[1]);return t&&JSON.parse(t)})()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}};
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
class Y{wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
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
 */function Q(){try{return"object"==typeof indexedDB}catch(e){return!1}}class Z extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,Z.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ee.prototype.create)}}class ee{create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,o=this.errors[e],s=o?function(e,t){return e.replace(te,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}(o,n):"Error",a=`${this.serviceName}: ${s} (${r}).`;return new Z(r,a,n)}constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}}const te=/\{\$([^}]+)}/g;
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
 */function ne(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const o of n){if(!r.includes(o))return!1;const n=e[o],s=t[o];if(re(n)&&re(s)){if(!ne(n,s))return!1}else if(n!==s)return!1}for(const e of r)if(!n.includes(e))return!1;return!0}function re(e){return null!==e&&"object"==typeof e}
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
 */class oe{setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}}
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
class se{get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new Y;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
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
 */(e))try{this.getOrInitializeService({instanceIdentifier:"[DEFAULT]"})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e="[DEFAULT]"){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e="[DEFAULT]"){return this.instances.has(e)}getOptions(e="[DEFAULT]"){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),o=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;o.add(e),this.onInitCallbacks.set(r,o);const s=this.instances.get(r);return s&&e(s,r),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=e,"[DEFAULT]"===r?void 0:r),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var r;return n||null}normalizeInstanceIdentifier(e="[DEFAULT]"){return this.component?this.component.multipleInstances?e:"[DEFAULT]":e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}}class ae{addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new se(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}constructor(e){this.name=e,this.providers=new Map}}
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
 */const ie=[];var ce,le;(le=ce||(ce={}))[le.DEBUG=0]="DEBUG",le[le.VERBOSE=1]="VERBOSE",le[le.INFO=2]="INFO",le[le.WARN=3]="WARN",le[le.ERROR=4]="ERROR",le[le.SILENT=5]="SILENT";const de={debug:ce.DEBUG,verbose:ce.VERBOSE,info:ce.INFO,warn:ce.WARN,error:ce.ERROR,silent:ce.SILENT},he=ce.INFO,ue={[ce.DEBUG]:"log",[ce.VERBOSE]:"log",[ce.INFO]:"info",[ce.WARN]:"warn",[ce.ERROR]:"error"},pe=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),o=ue[t];if(!o)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[o](`[${r}]  ${e.name}:`,...n)};let fe,be;const me=new WeakMap,ge=new WeakMap,_e=new WeakMap,ve=new WeakMap,ye=new WeakMap;let we={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return ge.get(e);if("objectStoreNames"===t)return e.objectStoreNames||_e.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Se(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function Ee(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(be||(be=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(Ie(this),t),Se(me.get(this))}:function(...t){return Se(e.apply(Ie(this),t))}:function(t,...n){const r=e.call(Ie(this),t,...n);return _e.set(r,t.sort?t.sort():[t]),Se(r)}}function ke(e){return"function"==typeof e?Ee(e):(e instanceof IDBTransaction&&function(e){if(ge.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",s),e.removeEventListener("abort",s)},o=()=>{t(),r()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",o),e.addEventListener("error",s),e.addEventListener("abort",s)}));ge.set(e,t)}(e),t=e,(fe||(fe=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((e=>t instanceof e))?new Proxy(e,we):e);var t}function Se(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",o),e.removeEventListener("error",s)},o=()=>{t(Se(e.result)),r()},s=()=>{n(e.error),r()};e.addEventListener("success",o),e.addEventListener("error",s)}));return t.then((t=>{t instanceof IDBCursor&&me.set(t,e)})).catch((()=>{})),ye.set(t,e),t}(e);if(ve.has(e))return ve.get(e);const t=ke(e);return t!==e&&(ve.set(e,t),ye.set(t,e)),t}const Ie=e=>ye.get(e);function De(e,t,{blocked:n,upgrade:r,blocking:o,terminated:s}={}){const a=indexedDB.open(e,t),i=Se(a);return r&&a.addEventListener("upgradeneeded",(e=>{r(Se(a.result),e.oldVersion,e.newVersion,Se(a.transaction))})),n&&a.addEventListener("blocked",(()=>n())),i.then((e=>{s&&e.addEventListener("close",(()=>s())),o&&e.addEventListener("versionchange",(()=>o()))})).catch((()=>{})),i}const Le=["get","getKey","getAll","getAllKeys","count"],Ce=["put","add","delete","clear"],Ae=new Map;function Te(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(Ae.get(t))return Ae.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,o=Ce.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!o&&!Le.includes(n))return;const s=async function(e,...t){const s=this.transaction(e,o?"readwrite":"readonly");let a=s.store;return r&&(a=a.index(t.shift())),(await Promise.all([a[n](...t),o&&s.done]))[0]};return Ae.set(t,s),s}we=(e=>({...e,get:(t,n,r)=>Te(t,n)||e.get(t,n,r),has:(t,n)=>!!Te(t,n)||e.has(t,n)}))(we);
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
class Oe{getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}constructor(e){this.container=e}}const Be=new class{get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ce))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?de[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ce.DEBUG,...e),this._logHandler(this,ce.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ce.VERBOSE,...e),this._logHandler(this,ce.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ce.INFO,...e),this._logHandler(this,ce.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ce.WARN,...e),this._logHandler(this,ce.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ce.ERROR,...e),this._logHandler(this,ce.ERROR,...e)}constructor(e){this.name=e,this._logLevel=he,this._logHandler=pe,this._userLogHandler=null,ie.push(this)}}("@firebase/app"),$e={"@firebase/app":"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},Me=new Map,Ne=new Map;function je(e,t){try{e.container.addComponent(t)}catch(n){Be.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function He(e){const t=e.name;if(Ne.has(t))return Be.debug(`There were multiple attempts to register component ${t}.`),!1;Ne.set(t,e);for(const t of Me.values())je(t,e);return!0}
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
const Re=new ee("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});
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
class xe{get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Re.create("app-deleted",{appName:this._name})}constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new oe("app",(()=>this),"PUBLIC"))}}
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
 */function Fe(e,t={}){let n=e;if("object"!=typeof t){t={name:t}}const r=Object.assign({name:"[DEFAULT]",automaticDataCollectionEnabled:!1},t),o=r.name;if("string"!=typeof o||!o)throw Re.create("bad-app-name",{appName:String(o)});var s;if(n||(n=null===(s=X())||void 0===s?void 0:s.config),!n)throw Re.create("no-options");const a=Me.get(o);if(a){if(ne(n,a.options)&&ne(r,a.config))return a;throw Re.create("duplicate-app",{appName:o})}const i=new ae(o);for(const e of Ne.values())i.addComponent(e);const c=new xe(n,r,i);return Me.set(o,c),c}function Pe(e,t,n){var r;let o=null!==(r=$e[e])&&void 0!==r?r:e;n&&(o+=`-${n}`);const s=o.match(/\s|\//),a=t.match(/\s|\//);if(s||a){const e=[`Unable to register library "${o}" with version "${t}":`];return s&&e.push(`library name "${o}" contains illegal characters (whitespace or "/")`),s&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void Be.warn(e.join(" "))}He(new oe(`${o}-version`,(()=>({library:o,version:t})),"VERSION"))}let Ue=null;function ze(){return Ue||(Ue=De("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)e.createObjectStore("firebase-heartbeat-store")}}).catch((e=>{throw Re.create("idb-open",{originalErrorMessage:e.message})}))),Ue}async function Ve(e,t){try{const n=(await ze()).transaction("firebase-heartbeat-store","readwrite"),r=n.objectStore("firebase-heartbeat-store");return await r.put(t,We(e)),n.done}catch(e){if(e instanceof Z)Be.warn(e.message);else{const t=Re.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});Be.warn(t.message)}}}function We(e){return`${e.name}!${e.options.appId}`}
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
 */class qe{async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=Je();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some((e=>e.date===t)))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=Je(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){const n=[];let r=e.slice();for(const o of e){const e=n.find((e=>e.agent===o.agent));if(e){if(e.dates.push(o.date),Ke(n)>t){e.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),Ke(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),r=J(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Ge(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}}function Je(){return(new Date).toISOString().substring(0,10)}class Ge{async runIndexedDBEnvironmentCheck(){return!!Q()&&new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(r);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{var e;t((null===(e=o.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){return await async function(e){try{return(await ze()).transaction("firebase-heartbeat-store").objectStore("firebase-heartbeat-store").get(We(e))}catch(e){if(e instanceof Z)Be.warn(e.message);else{const t=Re.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});Be.warn(t.message)}}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return Ve(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return Ve(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}}function Ke(e){return J(JSON.stringify({version:2,heartbeats:e})).length}
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
 */var Xe;Xe="",He(new oe("platform-logger",(e=>new Oe(e)),"PRIVATE")),He(new oe("heartbeat",(e=>new qe(e)),"PRIVATE")),Pe("@firebase/app","0.9.7",Xe),Pe("@firebase/app","0.9.7","esm2017"),Pe("fire-js","");
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
Pe("firebase","9.19.1","app");Fe({apiKey:"AIzaSyB-nlh-TAPHi3IbGFjTnnksDPM4TWwuT4w",authDomain:"js-team-project-84b18.firebaseapp.com",databaseURL:"https://js-team-project-84b18-default-rtdb.europe-west1.firebasedatabase.app",projectId:"js-team-project-84b18",storageBucket:"js-team-project-84b18.appspot.com",messagingSenderId:"536343494199",appId:"1:536343494199:web:762d7d3783a8c9b4b3c9b2"});s("62c9T");
//# sourceMappingURL=index.c8fdcb8a.js.map

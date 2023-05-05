(()=>{"use strict";var t={705:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,o,i){"string"==typeof t&&(t=[[null,t,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var l=this[c][0];null!=l&&(a[l]=!0)}for(var s=0;s<t.length;s++){var u=[].concat(t[s]);r&&a[u[0]]||(void 0!==i&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=i),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),e.push(u))}},e}},738:t=>{t.exports=function(t){return t[1]}},426:(t,e,n)=>{n.d(e,{Z:()=>c});var r=n(738),o=n.n(r),i=n(705),a=n.n(i)()(o());a.push([t.id,"/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n/* ////////////////////// */\n\nbody {\n    font-family: 'Roboto', sans-serif;\n\n    background-color: #F6F1F1;\n}\n\n.container {\n    align-items: center;\n    padding-top: 80px;\n    gap: 60px;\n    display: flex;\n    flex-direction: column;\n    width: 100vw;\n    height: 70h;\n}\n\n.bigger-table {\n    display: flex;\n    gap: 120px;\n    justify-content: center;\n}\nh1 {\n    font-size: 1.8rem;\n}\n\n.table {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 15px;\n}\n\n.player, .opponent{\n    aspect-ratio: 1 / 1;\n    border: 5px solid black;\n    width: 400px;\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n    grid-template-rows: repeat(10, 1fr);\n    \n}\n\n.cell {\n    border: 1px solid black;\n}\n\n.occupied {\n    background-color: lightblue;\n}\n\n.cell.hoverable:hover {  \n    background-color: rgb(226, 226, 226); \n}\n\n.missed {\n    background-color: rgb(121, 231, 121);\n}\n\n.sunk {\n    background-color: grey;\n}",""]);const c=a},379:t=>{var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var i={},a=[],c=0;c<t.length;c++){var l=t[c],s=r.base?l[0]+r.base:l[0],u=i[s]||0,d="".concat(s," ").concat(u);i[s]=u+1;var p=n(d),f={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var h=o(f,r);r.byIndex=c,e.splice(c,0,{identifier:d,updater:h,references:1})}a.push(d)}return a}function o(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,o){var i=r(t=t||[],o=o||{});return function(t){t=t||[];for(var a=0;a<i.length;a++){var c=n(i[a]);e[c].references--}for(var l=r(t,o),s=0;s<i.length;s++){var u=n(i[s]);0===e[u].references&&(e[u].updater(),e.splice(u,1))}i=l}}},569:t=>{var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return t[r](i,i.exports,n),i.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nc=void 0,(()=>{var t=n(379),e=n.n(t),r=n(795),o=n.n(r),i=n(569),a=n.n(i),c=n(565),l=n.n(c),s=n(216),u=n.n(s),d=n(589),p=n.n(d),f=n(426),h={};h.styleTagTransform=p(),h.setAttributes=l(),h.insert=a().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=u(),e()(f.Z,h),f.Z&&f.Z.locals&&f.Z.locals;var v=document.querySelectorAll(".bigger-table > div > div");function b(t){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},b(t)}function y(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==b(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==b(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===b(o)?o:String(o)),r)}var o}var m=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.currentShip=[],this.size=e,this.playingField=function(){for(var t=[],n=0;n<e;n++){t.push([]);for(var r=0;r<e;r++)t[n].push({ship:null,isHit:!1})}return t}()}var e,n;return e=t,n=[{key:"getTileAt",value:function(t,e){if(t<this.size&&e<this.size)return this.playingField[t][e];throw new Error("Out of bound!")}},{key:"add",value:function(t){var e=this,n=t.cord[0],r=t.cord[1],o=t.ship,i=t.position,a=function(t){for(var i=function(o){return"vertical"===t?e.getTileAt(n,r+o):e.getTileAt(n+o,r)},a=0;a<o.length;a++)if(null!==i(a).ship)throw new Error("Cannot place in an occupied position!")};if("vertical"!==i)if("horizontal"!==i);else{a("horizontal");for(var c=0;c<o.length;c++)this.getTileAt(n+c,r).ship=o;this.currentShip.push(o)}else{a("vertical");for(var l=0;l<o.length;l++)this.getTileAt(n,r+l).ship=o;this.currentShip.push(o)}}},{key:"attack",value:function(t,e){var n=this.getTileAt(t,e);return!0===n.isHit?"Already hit!":(n.isHit=!0,null===n.ship?"No ship detected!":(n.ship.hit(),!0))}},{key:"isLost",value:function(){return this.currentShip.every((function(t){return t.isSunk()}))}}],n&&y(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();const g=m;function S(t){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},S(t)}function k(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==S(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==S(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===S(o)?o:String(o)),r)}var o}const w=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.length=e,this.hitTimes=0}var e,n;return e=t,(n=[{key:"hit",value:function(){this.hitTimes+=1}},{key:"isSunk",value:function(){return this.hitTimes>=this.length}}])&&k(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function x(t){return x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},x(t)}function T(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==x(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==x(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===x(o)?o:String(o)),r)}var o}const A=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.board=new g(10),this.name=e}var e,n;return e=t,(n=[{key:"addShip",value:function(t){this.board.add({ship:new w(t.length),cord:t.cord,position:t.position})}},{key:"getTileAt",value:function(t,e){return this.board.getTileAt(t,e)}},{key:"attack",value:function(t,e){return this.board.attack(t,e)}},{key:"getBoard",value:function(){return this.board.playingField}},{key:"randomAttack",value:function(){var t=Math.floor(10*Math.random()),e=Math.floor(10*Math.random()),n=this.attack(t,e);return"No ship detected!"===n||!0===n?{cord:[t,e],result:n}:this.randomAttack()}},{key:"isLost",value:function(){return this.board.isLost()}}])&&T(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();var E=new A("A"),L=new A("B");E.addShip({length:4,cord:[0,5],position:"vertical"}),E.addShip({length:3,cord:[0,0],position:"vertical"}),E.addShip({length:3,cord:[2,0],position:"horizontal"}),E.addShip({length:2,cord:[6,0],position:"horizontal"}),E.addShip({length:2,cord:[6,6],position:"vertical"}),E.addShip({length:2,cord:[7,8],position:"vertical"}),E.addShip({length:1,cord:[4,5],position:"horizontal"}),E.addShip({length:1,cord:[3,4],position:"vertical"}),L.addShip({length:1,cord:[0,0],position:"horizontal"}),L.addShip({length:4,cord:[0,9],position:"horizontal"}),v.forEach((function(t){for(var e=0;e<10;e++)for(var n=0;n<10;n++){var r=document.createElement("div");r.setAttribute("row",e),r.setAttribute("column",n),r.classList.add("cell"),t.appendChild(r)}})),document.querySelector("button"),document.querySelector("button").addEventListener("click",(function(t){t.target.disabled=!0,function(t,e){var n=function(e,n){var c=document.querySelector('.player [row="'.concat(e[0],'"][column="').concat(e[1],'"]'));if(!0===n&&c.classList.add("sunk"),"No ship detected!"===n&&c.classList.add("missed"),t.isLost())return o.textContent="You lose!",i.forEach((function(t){t.classList.remove("hoverable")})),a.removeEventListener("click",r),void(button.disabled=!0)},r=function r(c){if(c.preventDefault(),!c.target.classList.contains("opponent")){var l=c.target,s=parseInt(c.target.getAttribute("row")),u=parseInt(c.target.getAttribute("column")),d=e.attack(s,u);if("Already hit!"!==d){if("No ship detected!"===d&&l.classList.add("missed"),!0===d&&l.classList.add("sunk"),e.isLost())return o.textContent="You win!",i.forEach((function(t){t.classList.remove("hoverable")})),a.removeEventListener("click",r),void(document.querySelector("button").disabled=!0);var p=t.randomAttack();n(p.cord,p.result)}}},o=document.querySelector("h1");o.textContent="Game begins!";var i=document.querySelectorAll(".opponent .cell"),a=document.querySelector(".opponent");i.forEach((function(t){t.classList.add("hoverable")})),a.addEventListener("click",r)}(E,L)})),E.getBoard().forEach((function(t,e){t.forEach((function(t,n){null!==t.ship&&document.querySelector('.player [row="'.concat(e,'"][column="').concat(n,'"]')).classList.add("occupied")}))}))})()})();
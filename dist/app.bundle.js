(()=>{"use strict";var e={523:(e,t,n)=>{n.d(t,{A:()=>s});var r=n(354),a=n.n(r),i=n(314),o=n.n(i)()(a());o.push([e.id,"dialog::backdrop {\n  -webkit-backdrop-filter: blur(0.5rem);\n  backdrop-filter: blur(0.5rem);\n}\n\nmain {\n  display: flex;\n  justify-content: space-around;\n  gap: 10px;\n}\n\n.row {\n  height: 50px;\n  display: flex;\n}\n\n.cell {\n  width: 50px;\n  height: 100%;\n  border: 1px black solid;\n}\n\n.ship {\n  background: blue;\n  color: white;\n}\n\n.hit {\n  border-radius: 50%;\n  height: 100%;\n  width: 100%;\n  background: green;\n  color: white;\n}\n\n.miss {\n  background: red;\n  color: white;\n  border-radius: 50%;\n  height: 100%;\n  width: 100%;\n}\n","",{version:3,sources:["webpack://./src/index.css"],names:[],mappings:"AAAA;EACE,qCAAqC;EACrC,6BAA6B;AAC/B;;AAEA;EACE,aAAa;EACb,6BAA6B;EAC7B,SAAS;AACX;;AAEA;EACE,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,uBAAuB;AACzB;;AAEA;EACE,gBAAgB;EAChB,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,WAAW;EACX,iBAAiB;EACjB,YAAY;AACd;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,kBAAkB;EAClB,YAAY;EACZ,WAAW;AACb",sourcesContent:["dialog::backdrop {\n  -webkit-backdrop-filter: blur(0.5rem);\n  backdrop-filter: blur(0.5rem);\n}\n\nmain {\n  display: flex;\n  justify-content: space-around;\n  gap: 10px;\n}\n\n.row {\n  height: 50px;\n  display: flex;\n}\n\n.cell {\n  width: 50px;\n  height: 100%;\n  border: 1px black solid;\n}\n\n.ship {\n  background: blue;\n  color: white;\n}\n\n.hit {\n  border-radius: 50%;\n  height: 100%;\n  width: 100%;\n  background: green;\n  color: white;\n}\n\n.miss {\n  background: red;\n  color: white;\n  border-radius: 50%;\n  height: 100%;\n  width: 100%;\n}\n"],sourceRoot:""}]);const s=o},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,a,i){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(o[c]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&o[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),t.push(l))}},t}},354:e=>{e.exports=function(e){var t=e[1],n=e[3];if(!n)return t;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),i="/*# ".concat(a," */");return[t].concat([i]).join("\n")}return[t].join("\n")}},72:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var i={},o=[],s=0;s<e.length;s++){var c=e[s],d=r.base?c[0]+r.base:c[0],l=i[d]||0,u="".concat(d," ").concat(l);i[d]=l+1;var h=n(u),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==h)t[h].references++,t[h].updater(p);else{var A=a(p,r);r.byIndex=s,t.splice(s,0,{identifier:u,updater:A,references:1})}o.push(u)}return o}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var i=r(e=e||[],a=a||{});return function(e){e=e||[];for(var o=0;o<i.length;o++){var s=n(i[o]);t[s].references--}for(var c=r(e,a),d=0;d<i.length;d++){var l=n(i[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}i=c}}},659:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var i=t[r]={id:r,exports:{}};return e[r](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0;class r{#e;#t;#n;#r;constructor(e,t){this.#e=e,this.#t=0,this.#n=!1,this.#r=t}hit=()=>{this.#t+=1,this.#t===this.#e&&(this.#n=!0)};isSunk=()=>this.#n;getHits=()=>this.#t;getName=()=>this.#r;getLength=()=>this.#e}class a{#a;#i;#o;#s;#c;constructor(e=10){this.#o=[],this.#s=[],this.#a=e,this.#i=Array(e).fill().map(((t,n)=>Array(e).fill(null))),this.#c=[]}placeShip=(e,t,n,r)=>{if(this.canPlaceShip(e,t,n,r)){for(let a=0;a<n.getLength();a++)r?this.#i[e+a][t]=n:this.#i[e][t+a]=n;return this.#o.push(n),!0}return!1};canPlaceShip=(e,t,n,a)=>{if(a?e+n.getLength()>this.#a:t+n.getLength()>this.#a)return!1;if(this.#i[e][t]instanceof r)return!1;for(let i=0;i<n.getLength();i++)if(a?this.#i[e+i][t]instanceof r:this.#i[e][t+i]instanceof r)return!1;return!0};receiveAttack=(e,t)=>this.#i[e][t]instanceof r?(this.#i[e][t].hit(),this.#c.push([e,t]),!0):(this.#s.push([e,t]),!1);isAllSunk=()=>this.#o.every((e=>e.isSunk()));getBoard=()=>this.#i;getShips=()=>this.#o;getMissedAttacks=()=>this.#s;getAllHits=()=>this.#c;getSize=()=>this.#a}class i{#r;constructor(e,t=!1){this.#r=e,this.gameboard=new a,this.isComputer=t}attack=(e,t,n)=>e.receiveAttack(t,n)}const o=(e,t,n)=>{const a=document.getElementById(`${t}-${n}-${e.isComputer?1:0}`);if(!a.querySelector(".hit, .miss")){const i=document.createElement("div");e.gameboard.getBoard()[t][n]instanceof r?i.classList.add("hit"):i.classList.add("miss"),e.gameboard.receiveAttack(t,n),a.appendChild(i)}},s=e=>{const t=document.querySelector(e.isComputer?"#enemy-board":"#player-board"),n=e.gameboard.getMissedAttacks().length,r=e.gameboard.getAllHits().length,a=e.gameboard.isAllSunk();let i=t.querySelector(".game-info");i||(i=document.createElement("div"),i.classList.add("game-info"),t.appendChild(i)),i.textContent=`Missed: ${n} | Hits: ${r}`,a&&(()=>{let e=document.querySelector("body"),t=document.createElement("dialog");t.classList.add("game-over");let n=document.createElement("p");n.textContent="Game Over";let r=document.createElement("button");r.textContent="Play Again",r.addEventListener("click",(()=>{location.reload()})),t.appendChild(n),t.appendChild(r),e.appendChild(t),t.showModal()})()},c=(e,t)=>{for(let n=0;n<e.gameboard.getSize();n++){const r=document.createElement("div");r.classList.add("row"),t.appendChild(r);for(let t=0;t<e.gameboard.getSize();t++){const a=document.createElement("div");a.classList.add("cell"),a.id=[n,t,e.isComputer?1:0].join("-"),r.appendChild(a),e.isComputer&&(a.onclick=()=>{o(e,n,t),s(e)})}}},d=e=>{let t=[new r(5,"Carrier"),new r(4,"Battleship"),new r(3,"Destroyer"),new r(3,"Submarine"),new r(2,"Patrol")],n=!0;t.forEach((t=>{if(e.getShips().length<5){let r,a;n=!n;do{r=Math.floor(10*Math.random()),a=Math.floor(10*Math.random())}while(!e.placeShip(r,a,t,n));e.placeShip(r,a,t,n)}}))},l=e=>{for(let t=0;t<e.gameboard.getSize();t++)for(let n=0;n<e.gameboard.getSize();n++)e.gameboard.getBoard()[t][n]instanceof r&&document.getElementById(`${t}-${n}-${e.isComputer?1:0}`).classList.add("ship")};var u=n(72),h=n.n(u),p=n(825),A=n.n(p),m=n(659),f=n.n(m),g=n(56),b=n.n(g),v=n(540),y=n.n(v),C=n(113),E=n.n(C),k=n(523),w={};let S,x;w.styleTagTransform=E(),w.setAttributes=b(),w.insert=f().bind(null,"head"),w.domAPI=A(),w.insertStyleElement=y(),h()(k.A,w),k.A&&k.A.locals&&k.A.locals;const B=document.querySelector("dialog"),L=B.querySelector("button"),M=B.querySelector("input"),Y=document.getElementById("player-board"),I=document.getElementById("enemy-board"),j=document.getElementById("generate-random"),z=document.getElementById("player-name");x=new i("Enemy",!0),B.showModal(),B.addEventListener("cancel",(e=>e.preventDefault())),L.addEventListener("click",(e=>{e.preventDefault();const t=M.value;t?(S=new i(t),c(S,Y),c(x,I),d(x.gameboard),l(x),z.textContent=t,M.value="",B.close()):alert("Please enter a valid player name.")})),j.addEventListener("click",(()=>{d(S.gameboard),l(S)}))})();
//# sourceMappingURL=app.bundle.js.map
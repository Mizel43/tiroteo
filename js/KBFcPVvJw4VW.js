(self.AMP=self.AMP||[]).push({m:0,v:"2304262219000",n:"amp-youtube",ev:"0.1",l:!0,f:function(t,e){!function(){function e(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function n(t,e){return(n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function i(t){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){if(e&&("object"===r(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function s(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(n)return(n=n.call(t)).next.bind(n);if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return a(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0;return function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var u;function l(){return u||(u=Promise.resolve(void 0))}var c=function(){var t=this;this.promise=new Promise((function(e,n){t.resolve=e,t.reject=n}))};function h(t){return new Promise((function(e){e(t())}))}var f=Array.isArray;function d(t){return f(t)?t:[t]}var v=Object.prototype,p=v.hasOwnProperty,m=v.toString;function b(t){return"[object Object]"===m.call(t)}function y(t){var e=Object.create(null);return t&&Object.assign(e,t),e}function g(t){return"number"==typeof t&&isFinite(t)}function w(t,e,n,i,r,o,a,s,u,l,c){return t}function S(t,e){try{return function(t){return JSON.parse(t)}(t)}catch(t){return null==e||e(t),null}}function A(t){return(t.ownerDocument||t).defaultView}var k,P,E={bubbles:!0,cancelable:!0};function _(t){var e;null===(e=t.parentElement)||void 0===e||e.removeChild(t)}function M(t,e){t.insertBefore(e,t.firstChild)}function C(t){return t.parent&&t.parent!=t}function O(t,e,n,i){var r=n||{};w(t.ownerDocument);var o=t.ownerDocument.createEvent("Event");o.data=r;var a=i||E,s=a.bubbles,u=a.cancelable;o.initEvent(e,s,u),t.dispatchEvent(o)}function R(t,e){t.classList.add("i-amphtml-fill-content"),e&&t.classList.add("i-amphtml-replaced-content")}function I(t,e,n,i){for(var r,o=s(d(t),!0);!(r=o()).done;){var a=r.value,u=e.getAttribute(a);null!==u?n.setAttribute(a,u):i&&n.removeAttribute(a)}}function q(t){var e=t.ownerDocument||t;return k&&k.ownerDocument===e||(k=e.createElement("div")),x}function x(t){return function(t,e){if(w(1===e.length),w(Array.isArray(e)||(i=e,p.call(i,"raw"))),self.trustedTypes&&self.trustedTypes.createPolicy){var n=self.trustedTypes.createPolicy("static-template#createNode",{createHTML:function(t){return e[0]}});t.innerHTML=n.createHTML("ignored")}else t.innerHTML=e[0];var i,r=t.firstElementChild;return w(r),w(!r.nextElementSibling),t.removeChild(r),r}(k,t)}function T(t){var e=Object.getOwnPropertyDescriptor(t,"message");if(null!=e&&e.writable)return t;var n=t.message,i=t.stack,r=new Error(n);for(var o in t)r[o]=t[o];return r.stack=i,r}function j(t){for(var e,n=null,i="",r=s(arguments,!0);!(e=r()).done;){var o=e.value;o instanceof Error&&!n?n=T(o):(i&&(i+=" "),i+=o)}return n?i&&(n.message=i+": "+n.message):n=new Error(i),n}function L(t){var e,n;null===(e=(n=self).__AMP_REPORT_ERROR)||void 0===e||e.call(n,t)}function W(t){var e=j.apply(null,arguments);setTimeout((function(){throw L(e),e}))}function F(t){try{for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];return t.apply(null,n)}catch(t){W(t)}}function D(t){var e=j.apply(null,arguments);return e.expected=!0,e}var G=["Webkit","webkit","Moz","moz","ms","O","o"],N={getPropertyPriority:function(){return""},getPropertyValue:function(){return""}};function U(t,e,n,i,r){var o=function(t,e,n){if(e.startsWith("--"))return e;P||(P=y());var i=P[e];if(!i||n){if(i=e,void 0===t[e]){var r=function(t){return t.charAt(0).toUpperCase()+t.slice(1)}(e),o=function(t,e){for(var n=0;n<G.length;n++){var i=G[n]+e;if(void 0!==t[i])return i}return""}(t,r);void 0!==t[o]&&(i=o)}n||(P[e]=i)}return i}(t.style,e,r);if(o){var a,s=i?n+i:n;t.style.setProperty((a=o.replace(/[A-Z]/g,(function(t){return"-"+t.toLowerCase()})),G.some((function(t){return a.startsWith(t+"-")}))?"-".concat(a):a),s)}}function V(t,e){for(var n in e)U(t,n,e[n])}var J=/vertical/,z=new WeakMap,Z=new WeakMap,Y=new WeakMap;function B(t){var e=z.get(t);return e||(e=new t.ResizeObserver(H),z.set(t,e)),e}function H(t){for(var e=new Set,n=t.length-1;n>=0;n--){var i=t[n],r=i.target;if(!e.has(r)){e.add(r);var o=Z.get(r);if(o){Y.set(r,i);for(var a=0;a<o.length;a++){var s=o[a],u=s.callback;Q(s.type,u,i)}}}}}function Q(t,e,n){if(0==t){var i=n.contentRect,r=i.height;F(e,{width:i.width,height:r})}else if(1==t){var o,a=n.borderBoxSize;if(a)o=a.length>0?a[0]:{inlineSize:0,blockSize:0};else{var s,u,l=n.target,c=A(l),h=J.test(function(t,e){return t.getComputedStyle(e)||N}(c,l).writingMode),f=l,d=f.offsetHeight,v=f.offsetWidth;h?(u=v,s=d):(s=v,u=d),o={inlineSize:s,blockSize:u}}F(e,o)}}var $=function(){function t(t){this.Gn=t,this.Zn=!1,this.Un=!1,this.Jn=this.Jn.bind(this)}var e=t.prototype;return e.updatePlaying=function(t){t!==this.Zn&&(this.Zn=t,t?(this.Un=!1,function(t,e,n){var i=t.ownerDocument.defaultView;if(i){var r=Z.get(t);if(r||(r=[],Z.set(t,r),B(i).observe(t)),!r.some((function(t){return t.callback===n&&1===t.type}))){r.push({type:1,callback:n});var o=Y.get(t);o&&setTimeout((function(){return Q(1,n,o)}))}}}(this.Gn,0,this.Jn)):function(t,e){!function(t,e,n){var i=Z.get(t);if(i&&(function(t,e){for(var i=[],r=0,o=0;o<t.length;o++){var a=t[o];(s=a).callback===n&&1===s.type?i.push(a):(r<o&&(t[r]=a),r++)}var s;r<t.length&&(t.length=r)}(i),0==i.length)){Z.delete(t),Y.delete(t);var r=t.ownerDocument.defaultView;r&&B(r).unobserve(t)}}(t,0,e)}(this.Gn,this.Jn))},e.Jn=function(t){var e=t.blockSize,n=t.inlineSize>0&&e>0;if(n!==this.Un){this.Un=n;var i=this.Gn;n||i.pause()}},t}();function K(t){var e=!1,n=null,i=t;return function(){if(!e){for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];n=i.apply(self,r),e=!0,i=null}return n}}self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var X=self.__AMP_LOG;function tt(t){return X.user||(X.user=et()),function(t,e){return e&&e.ownerDocument.defaultView!=t}(X.user.win,t)?X.userForEmbed||(X.userForEmbed=et()):X.user}function et(t){return function(t,e){throw new Error("failed to call initLogConstructor")}()}function nt(t,e,n,i,r,o,a,s,u,l,c){return t}function it(t,e,n,i,r,o,a,s,u,l,c){return tt().assert(t,e,n,i,r,o,a,s,u,l,c)}function rt(t,e){return lt(t=function(t){return t.__AMP_TOP||(t.__AMP_TOP=t)}(t),e)}function ot(t,e){return lt(ut(st(t)),e)}function at(t,e){var n=ut(st(t));return ht(n,e)?lt(n,e):null}function st(t){return t.nodeType?(e=A(t),rt(e,"ampdoc")).getAmpDoc(t):t;var e}function ut(t){var e=st(t);return e.isSingleDoc()?e.win:e}function lt(t,e){nt(ht(t,e));var n=ct(t)[e];return n.obj||(nt(n.ctor),nt(n.context),n.obj=new n.ctor(n.context),nt(n.obj),n.context=null,n.resolve&&n.resolve(n.obj)),n.obj}function ct(t){var e=t.__AMP_SERVICES;return e||(e=t.__AMP_SERVICES={}),e}function ht(t,e){var n=t.__AMP_SERVICES&&t.__AMP_SERVICES[e];return!(!n||!n.ctor)}var ft,dt,vt,pt=function(t){return at(t,"action")},mt=function(t){return rt(t,"platform")},bt=function(t){return lt(t,"timer")},yt=function(t){return at(t,"url")},gt=function(t){return ot(t,"viewport")};function wt(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=n.needsRootBounds,r=n.rootMargin,o=n.threshold,a=C(e)&&(i||r)?e.document:void 0;return new e.IntersectionObserver(t,{threshold:o,root:a,rootMargin:r})}function St(t){var e,n=null===(e=ft)||void 0===e?void 0:e.get(t);if(!n){var i=function(t){ft||(ft=new WeakMap,dt=new WeakMap),w(dt);var e=dt.get(t);return e||(e=wt((function(t){for(var n=new Set,i=t.length-1;i>=0;i--){var r,o=t[i].target;n.has(o)||(n.add(o),w(e),e.unobserve(o),w(ft),null===(r=ft.get(o))||void 0===r||r.resolve(t[i]),ft.delete(o))}}),t,{needsRootBounds:!0}),dt.set(t,e)),e}(A(t));w(ft),i.observe(t),n=new c,ft.set(t,n)}return n.promise}function At(t){return null==t.__AMP_AUTOPLAY&&(t.__AMP_AUTOPLAY=function(t){var e,n=t.document.createElement("video");return n.setAttribute("muted",""),n.setAttribute("playsinline",""),n.setAttribute("webkit-playsinline",""),n.setAttribute("height","0"),n.setAttribute("width","0"),n.muted=!0,n.playsInline=!0,n.playsinline=!0,n.webkitPlaysinline=!0,V(n,{position:"fixed",top:"0",width:"0",height:"0",opacity:"0"}),e=n,h((function(){return e.play()})).catch((function(){})),Promise.resolve(!n.paused)}(t)),t.__AMP_AUTOPLAY}function kt(t){return t.querySelector("video, iframe")}function Pt(t,e){var n=h((function(){return t.play(!!e)}));return n.catch((function(t){!function(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];L(D.apply(null,n))}("TRYPLAY",t)})),n}function Et(t,e,n,i){var r=t,o=n,a=function(t){try{return o(t)}catch(t){var e,n;throw null===(e=(n=self).__AMP_REPORT_ERROR)||void 0===e||e.call(n,t),t}},s=function(){if(void 0!==vt)return vt;vt=!1;try{var t={get capture(){return vt=!0,!1}};self.addEventListener("test-options",null,t),self.removeEventListener("test-options",null,t)}catch(t){}return vt}(),u=!(null==i||!i.capture);return r.addEventListener(e,a,s?i:u),function(){null==r||r.removeEventListener(e,a,s?i:u),o=null,r=null,a=null}}function _t(t,e,n,i){var r={detail:n};if(Object.assign(r,i),"function"==typeof t.CustomEvent)return new t.CustomEvent(e,r);var o=t.document.createEvent("CustomEvent");return o.initCustomEvent(e,!!r.bubbles,!!r.cancelable,n),o}function Mt(t,e,n,i){return Et(t,e,n,i)}function Ct(t){return t.data}new WeakMap,new WeakMap;var Ot=function(){function t(){this.Nt=null}var e=t.prototype;return e.add=function(t){var e=this;return this.Nt||(this.Nt=[]),this.Nt.push(t),function(){e.remove(t)}},e.remove=function(t){var e,n,i;this.Nt&&(n=t,-1!=(i=(e=this.Nt).indexOf(n))&&e.splice(i,1))},e.removeAll=function(){this.Nt&&(this.Nt.length=0)},e.fire=function(t){if(this.Nt)for(var e,n=s(this.Nt.slice(),!0);!(e=n()).done;)(0,e.value)(t)},e.getHandlerCount=function(){var t,e;return null!==(t=null===(e=this.Nt)||void 0===e?void 0:e.length)&&void 0!==t?t:0},t}(),Rt=function(){function t(){this.Py=!1,this.Uy=new Ot}var e=t.prototype;return e.onSessionEnd=function(t){this.Uy.add(t)},e.beginSession=function(){this.Py=!0},e.endSession=function(){this.Py&&this.Uy.fire(),this.Py=!1},e.isSessionActive=function(){return this.Py},t}(),It=['<button aria-label="Unmute video" class="i-amphtml-video-mask i-amphtml-fill-content" tabindex=0></button>'],qt=["<i-amphtml-video-icon class=amp-video-eq><div class=amp-video-eq-col><div class=amp-video-eq-filler></div><div class=amp-video-eq-filler></div></div></i-amphtml-video-icon>"];function xt(t,e,n){if(e[n])return e[n];var i=t.querySelector("style[".concat(n,"], link[").concat(n,"]"));return i?(e[n]=i,i):null}var Tt={title:"",artist:"",album:"",artwork:[{src:""}]},jt="registered",Lt="load",Wt="playing",Ft="pause",Dt="ended",Gt="muted",Nt="unmuted",Ut="ad_start",Vt="ad_end",Jt="playing_manual",zt="paused",Zt="video-play",Yt="user-interacted";function Bt(t){t.signals().signal(Yt)}var Ht="video-manager",Qt=function(){function t(t){var e=this;this.ampdoc=t,this.installAutoplayStyles=K((function(){return function(t){!function(t,e,n,i,r){var o=t.getHeadNode();!function(t,e,n,i){var r=t.__AMP_CSS_SM;r||(r=t.__AMP_CSS_SM=y());var o="amp-extension=".concat(i);if(o){var a=xt(t,r,o);if(a)return"STYLE"==a.tagName&&a.textContent!==e&&(a.textContent=e),a}var s=(t.ownerDocument||t).createElement("style");s.textContent=e,s.setAttribute("amp-extension",i),function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(n){var i=n.nextSibling;t.insertBefore(e,i)}else M(t,e)}(t,s,xt(t,r,"amp-runtime")),o&&(r[o]=s)}(o,function(t,e){var n=t.__AMP_CSS_TR;return n?n(e):e}(o,".i-amphtml-video-mask{display:block;z-index:1;-webkit-appearance:none;appearance:none;background:transparent;border:none}.amp-video-eq{display:none}.i-amphtml-video-interface:not(amp-video) .amp-video-eq,amp-story .amp-video-eq,amp-video[controls] .amp-video-eq{display:-ms-flexbox;display:flex}[noaudio] .amp-video-eq{display:none!important}.amp-video-eq{pointer-events:none!important;-ms-flex-align:end;align-items:flex-end;bottom:7px;height:12px;opacity:0.8;overflow:hidden;position:absolute;right:7px;width:20px;z-index:1}.amp-video-eq-col{-ms-flex:1;flex:1;height:100%;margin-right:1px;position:relative}.amp-video-eq-col div{animation-name:amp-video-eq-animation;animation-timing-function:linear;animation-iteration-count:infinite;animation-direction:alternate;background-color:#fafafa;height:100%;position:absolute;width:100%;will-change:transform;animation-play-state:paused}.amp-video-eq-play .amp-video-eq-col div{animation-play-state:running}.amp-video-eq-1-1{animation-duration:0.3s;transform:translateY(60%)}.amp-video-eq-1-2{animation-duration:0.45s;transform:translateY(60%)}.amp-video-eq-2-1{animation-duration:0.5s;transform:translateY(30%)}.amp-video-eq-2-2{animation-duration:0.4s;transform:translateY(30%)}.amp-video-eq-3-1{animation-duration:0.3s;transform:translateY(70%)}.amp-video-eq-3-2{animation-duration:0.35s;transform:translateY(70%)}.amp-video-eq-4-1{animation-duration:0.4s;transform:translateY(50%)}.amp-video-eq-4-2{animation-duration:0.25s;transform:translateY(50%)}@keyframes amp-video-eq-animation{0%{transform:translateY(100%)}to{transform:translateY(0)}}\n/*# sourceURL=/css/video-autoplay.css*/"),0,"amp-video-autoplay")}(t)}(e.ampdoc)})),this.Wy=null,this._y=null,this.Ly=null,this.Pe=bt(t.win),this.Fy=pt(t.getHeadNode()),this.Jy=function(){return e.Vy()},this.Zy=K((function(){return new Xt(e.ampdoc,e)})),this.Pe.delay(this.Jy,1e3)}var e=t.prototype;return e.dispose=function(){if(this.Zy().dispose(),this._y.disconnect(),this._y=null,this.Wy)for(var t=0;t<this.Wy.length;t++)this.Wy[t].dispose()},e.Vy=function(){for(var t=0;t<this.Wy.length;t++){var e=this.Wy[t];e.getPlayingState()!==zt&&(re(e,"video-seconds-played"),this.$y(e))}this.Pe.delay(this.Jy,1e3)},e.$y=function(t){var e="timeUpdate",n=t.video.getCurrentTime(),i=t.video.getDuration();if(g(n)&&g(i)&&i>0){var r=n/i,o=_t(this.ampdoc.win,"".concat(Ht,".").concat(e),{time:n,percent:r});this.Fy.trigger(t.video.element,e,o,1)}},e.register=function(t){var e=this;nt(t);var n=t;if(this.Gy(t),t.supportsPlatform()&&!this.Ky(t)){this._y||(this._y=wt((function(t){return t.forEach((function(t){var n=t.isIntersecting,i=t.target;e.Qy(i).updateVisibility(n)}))}),this.ampdoc.win,{threshold:.5})),this._y.observe(n.element),Mt(n.element,"reloaded",(function(){return i.videoLoaded()})),this.Wy=this.Wy||[];var i=new Kt(this,t);this.Wy.push(i);var r=i.video.element;O(r,jt),function(t){t.classList.add("i-amphtml-media-component")}(r),t.signals().signal(jt),r.classList.add("i-amphtml-video-interface")}},e.Gy=function(t){n("play",(function(){return Pt(t,!1)})),n("pause",(function(){return t.pause()})),n("mute",(function(){return t.mute()})),n("unmute",(function(){return t.unmute()}));var e=function(){return t.fullscreenEnter()};function n(e,n){t.registerAction(e,(function(){Bt(t),n()}),1)}n("fullscreenenter",e),n("fullscreen",e)},e.Ky=function(t){if($t(this.Ly,t))return this.Ly;for(var e=0;this.Wy&&e<this.Wy.length;e++){var n=this.Wy[e];if($t(n,t))return this.Ly=n,n}return null},e.Qy=function(t){return nt(this.Ky(t))},e.registerForAutoFullscreen=function(t){this.Zy().register(t)},e.Xy=function(){return this.Zy()},e.getVideoStateProperty=function(t,e){var n=this.ampdoc.getRootNode(),i=tt().assertElement(n.getElementById(t),'Could not find an element with id="'.concat(t,'" for VIDEO_STATE')),r=this.Qy(i);return(r?r.getAnalyticsDetails():l()).then((function(t){return t?t[e]:""}))},e.getPlayingState=function(t){return this.Qy(t).getPlayingState()},e.isMuted=function(t){return this.Qy(t).isMuted()},e.userInteracted=function(t){return this.Qy(t).userInteracted()},e.isRollingAd=function(t){return this.Qy(t).isRollingAd()},e.pauseOtherVideos=function(t){this.Wy.forEach((function(e){e.isPlaybackManaged()&&e!==t&&e.getPlayingState()==Jt&&e.video.pause()}))},t}(),$t=function(t,e){return!!t&&(t.video===e||t.video.element===e)},Kt=function(){function t(t,e){var n=this;this.wb=t,this.Ii=t.ampdoc,this.video=e,this.kb=!0,this.jb=!1,this.Zn=!1,this.Ob=!1,this.Ji=!1,this.qb=new Rt,this.qb.onSessionEnd((function(){return re(n,"video-session")})),this.Sb=new Rt,this.Sb.onSessionEnd((function(){return re(n,"video-session-visible")})),this.xb=K((function(){return new ie(n.Ii.win,n)})),this.Mb=!1,this.Tb=!1,this.Rb=null,this.G=!1,this.Ab=!1,this.hasAutoplay=e.element.hasAttribute("autoplay"),this.hasAutoplay&&this.wb.installAutoplayStyles(),this.Eb=Tt,this.Pb=function(){Pt(n.video,!1)},this.Yb=function(){n.video.pause()},Mt(e.element,Lt,(function(){return n.videoLoaded()})),Mt(e.element,Ft,(function(){return n.zb()})),Mt(e.element,"play",(function(){n.Ab=!0,re(n,Zt)})),Mt(e.element,Wt,(function(){return n.Cb()})),Mt(e.element,Gt,(function(){return n.G=!0})),Mt(e.element,Nt,(function(){n.G=!1,n.wb.pauseOtherVideos(n)})),Mt(e.element,"amp:video:tick",(function(t){var e=Ct(t),i=e.eventType;i&&n.Ib(i,e.vars)})),Mt(e.element,Dt,(function(){n.Ob=!1,re(n,"video-ended")})),Mt(e.element,Ut,(function(){n.Ob=!0,re(n,"video-ad-start")})),Mt(e.element,Vt,(function(){n.Ob=!1,re(n,"video-ad-end")})),e.signals().whenSignal(jt).then((function(){return n.Ub()})),this.Wb=K((function(){var t="firstPlay",e=_t(n.Ii.win,t,{}),i=n.video.element;pt(i).trigger(i,t,e,1)})),this._b()}var n=t.prototype;return n.dispose=function(){this.xb().stop()},n.Ib=function(t,n){var i=e({},"__amp:eventType",t);Object.keys(n).forEach((function(t){i["custom_".concat(t)]=n[t]})),re(this,"video-hosted-custom",i)},n._b=function(){var t=this;this.video.signals().whenSignal("playback-delegated").then((function(){t.kb=!1,t.Zn&&t.video.pause()}))},n.isMuted=function(){return this.G},n.isPlaybackManaged=function(){return this.kb},n.Ub=function(){this.Nb()&&this.wb.registerForAutoFullscreen(this),this.hasAutoplay&&this.Lb()},n.Nb=function(){var t=this.video.element;return!(this.video.preimplementsAutoFullscreen()||!t.hasAttribute("rotate-to-fullscreen"))&&it(this.video.isInteractive(),"Only interactive videos are allowed to enter fullscreen on rotate. Set the `controls` attribute on %s to enable.",t)},n.Cb=function(){this.Zn=!0,this.getPlayingState()==Jt&&(this.Wb(),this.wb.pauseOtherVideos(this));var t,e,n,i,r,o=this.video,a=o.element;o.preimplementsMediaSessionAPI()||a.classList.contains("i-amphtml-disable-mediasession")||(function(t,e){var n=yt(t);if(e&&e.artwork){var i=e.artwork;nt(f(i)),i.forEach((function(t){if(t){var e=b(t)?t.src:t;it(n.isProtocolValid(e))}}))}}(a,this.Eb),t=this.Ii.win,e=this.Eb,n=this.Pb,i=this.Yb,"mediaSession"in(r=t.navigator)&&t.MediaMetadata&&(r.mediaSession.metadata=new t.MediaMetadata(Tt),r.mediaSession.metadata=new t.MediaMetadata(e),r.mediaSession.setActionHandler("play",n),r.mediaSession.setActionHandler("pause",i))),this.qb.beginSession(),this.Ji&&this.Sb.beginSession(),this.Ab||re(this,Zt)},n.zb=function(){re(this,"video-pause"),this.Zn=!1,this.Tb?this.Tb=!1:this.qb.endSession()},n.videoLoaded=function(){this.jb=!0,this.Rb=kt(this.video.element),this.Fb(),this.xb().start(),this.Ji&&this.Jb()},n.Fb=function(){if(!this.video.preimplementsMediaSessionAPI()){this.video.getMetadata()&&(this.Eb=y(this.video.getMetadata()));var t=this.Ii.win.document;if(!this.Eb.artwork||0==this.Eb.artwork.length){var e=function(t){var e=t.querySelector('script[type="application/ld+json"]');if(e){var n=S(e.textContent);if(n&&n.image)return"string"==typeof n.image?n.image:n.image["@list"]&&"string"==typeof n.image["@list"][0]?n.image["@list"][0]:"string"==typeof n.image.url?n.image.url:"string"==typeof n.image[0]?n.image[0]:void 0}}(t)||function(t){var e=t.querySelector('meta[property="og:image"]');return e?e.getAttribute("content"):void 0}(t)||function(t){var e=t.querySelector('link[rel="shortcut icon"]')||t.querySelector('link[rel="icon"]');return e?e.getAttribute("href"):void 0}(t);e&&(this.Eb.artwork=[{src:e}])}if(!this.Eb.title){var n=this.video.element.getAttribute("title")||this.video.element.getAttribute("aria-label")||this.Rb.getAttribute("title")||this.Rb.getAttribute("aria-label")||t.title;n&&(this.Eb.title=n)}}},n.Bb=function(){this.jb&&this.Jb()},n.Jb=function(){var t=this;this.Ii.isVisible()&&At(this.Ii.win).then((function(e){t.hasAutoplay&&!t.userInteracted()&&e?t.Db():t.Vb()}))},n.Lb=function(){var t=this;this.video.isInteractive()&&this.video.hideControls(),At(this.Ii.win).then((function(e){e||!t.video.isInteractive()?(t.video.mute(),t.Hb()):t.video.showControls()}))},n.Hb=function(){var t=this,e=this.video,n=this.video,i=n.element;if(n.win,!i.hasAttribute("noaudio")&&!i.signals().get(Yt)){var r=function(t,e){for(var n=q(e)(qt),i=n.firstElementChild,r=0;r<4;r++){for(var o=i.cloneNode(!0),a=o.children,s=0;s<a.length;s++)a[s].classList.add("amp-video-eq-".concat(r+1,"-").concat(s+1));n.appendChild(o)}return _(i),n}(0,i),o=[r],a=[Mt(i,Ft,(function(){return l(!1)})),Mt(i,Wt,(function(){return l(!0)})),Mt(i,Ut,(function(){u(!1),e.showControls()})),Mt(i,Vt,(function(){u(!0),e.hideControls()})),Mt(i,Nt,(function(){return Bt(e)}))];if(e.isInteractive()){e.hideControls();var s=function(t,e){var n=q(t)(It);return e&&e.title&&n.setAttribute("aria-label",e.title),n}(i,this.Eb);o.push(s),a.push(Mt(s,"click",(function(){return Bt(e)})))}e.mutateElementSkipRemeasure((function(){o.forEach((function(t){i.appendChild(t)}))})),this.Ob&&u(!1),e.signals().whenSignal(Yt).then((function(){t.Wb(),e.isInteractive()&&e.showControls(),e.unmute(),a.forEach((function(t){t()})),e.mutateElementSkipRemeasure((function(){o.forEach((function(t){_(t)}))}))}))}function u(t){e.mutateElementSkipRemeasure((function(){o.forEach((function(e){!function(t,e){void 0===e&&(e=t.hasAttribute("hidden")),e?t.removeAttribute("hidden"):t.setAttribute("hidden","")}(e,t)}))}))}function l(t){e.mutateElementSkipRemeasure((function(){return r.classList.toggle("amp-video-eq-play",t)}))}},n.Db=function(){this.kb&&(this.Ji?(this.Sb.beginSession(),Pt(this.video,!0),this.Mb=!0):(this.Zn&&this.Sb.endSession(),this.video.pause(),this.Tb=!0))},n.Vb=function(){this.Ji?this.Sb.beginSession():this.Zn&&this.Sb.endSession()},n.updateVisibility=function(t){var e=this.Ji;this.Ji=t,t!=e&&this.Bb()},n.getPlayingState=function(){return this.Zn?this.Zn&&this.Mb&&!this.userInteracted()?"playing_auto":Jt:zt},n.isRollingAd=function(){return this.Ob},n.userInteracted=function(){return null!=this.video.signals().get(Yt)},n.getAnalyticsDetails=function(){var t=this,e=this.video;return Promise.all([At(this.Ii.win),St(e.element)]).then((function(n){var i=n[0],r=n[1].boundingClientRect,o=r.height,a=r.width,s=t.hasAutoplay&&i,u=e.getPlayedRanges(),l=u.reduce((function(t,e){return t+e[1]-e[0]}),0);return{autoplay:s,currentTime:e.getCurrentTime(),duration:e.getDuration(),height:o,id:e.element.id,muted:t.G,playedTotal:l,playedRangesJson:JSON.stringify(u),state:t.getPlayingState(),width:a}}))},t}(),Xt=function(){function t(t,e){var n=this;this.wb=e,this.Ii=t,this.Zb=null,this.$b=null,this.Wy=[],this.Gb=[],this.Kb=function(){return n.Qb()},this.Xb=function(t){return n.uw(t)==Jt},this.aw=function(t,e){return n.fw(t,e)},this.cw(),this.hw()}var e=t.prototype;return e.dispose=function(){this.Gb.forEach((function(t){return t()})),this.Gb.length=0},e.register=function(t){var e=t.video,n=e.element;this.lw(n)&&(this.Wy.push(e),Mt(n,Ft,this.Kb),Mt(n,Wt,this.Kb),Mt(n,Dt,this.Kb),e.signals().whenSignal(Yt).then(this.Kb),this.Qb())},e.hw=function(){var t=this,e=this.Ii.getRootNode(),n=function(){return t.dw()};this.Gb.push(Mt(e,"webkitfullscreenchange",n),Mt(e,"mozfullscreenchange",n),Mt(e,"fullscreenchange",n),Mt(e,"MSFullscreenChange",n))},e.isInLandscape=function(){return(t=this.Ii.win).screen&&"orientation"in t.screen?t.screen.orientation.type.startsWith("landscape"):90==Math.abs(t.orientation);var t},e.lw=function(t){if("video"==kt(t).tagName.toLowerCase())return!0;var e=mt(this.Ii.win);return!e.isIos()&&!e.isSafari()||function(t){return!!{"amp-dailymotion":!0,"amp-ima-video":!0}[t.tagName.toLowerCase()]}(t)},e.dw=function(){this.Zb=null},e.cw=function(){var t=this,e=this.Ii.win,n=e.screen;if(n&&"orientation"in n){var i=n.orientation;this.Gb.push(Mt(i,"change",(function(){return t.mw()})))}this.Gb.push(Mt(e,"orientationchange",(function(){return t.mw()})))},e.mw=function(){this.isInLandscape()?null!=this.$b&&this.pw(this.$b):this.Zb&&this.yw(this.Zb)},e.pw=function(t){var e=mt(this.Ii.win);this.Zb=t,e.isAndroid()&&e.isChrome()?t.fullscreenEnter():this.bw(t).then((function(){return t.fullscreenEnter()}))},e.yw=function(t){this.Zb=null,this.bw(t,"center").then((function(){return t.fullscreenExit()}))},e.bw=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=t.element,i=this.ww();return this.gw().then((function(){return St(n)})).then((function(t){var r=t.boundingClientRect,o=r.bottom,a=r.top,s=i.getSize().height;if(a>=0&&o<=s)return l();var u=e||(o>s?"bottom":"top");return i.animateScrollIntoView(n,u)}))},e.ww=function(){return gt(this.Ii)},e.gw=function(){return bt(this.Ii.win).promise(330)},e.Qb=function(){var t=this;if(this.isInLandscape())return Promise.resolve(this.$b);this.$b=null;var e=this.Wy.filter(this.Xb).map((function(t){return St(t.element)}));return Promise.all(e).then((function(e){var n=e.sort(t.aw)[0];return n&&n.intersectionRatio>.5?n.target.getImpl().then((function(e){return t.$b=e})):t.$b}))},e.fw=function(t,e){var n=t.boundingClientRect,i=t.intersectionRatio,r=e.boundingClientRect,o=i-e.intersectionRatio;if(Math.abs(o)>.1)return o;var a=gt(this.Ii),s=te(a,n),u=te(a,r);return s<u||s>u?s-u:n.top-r.top},e.uw=function(t){return this.wb.getPlayingState(t)},t}();function te(t,e){var n=e.top+e.height/2,i=t.getSize().height/2;return Math.abs(n-i)}function ee(t){return 10*t*5}var ne=function(t){return!!t&&!isNaN(t)&&t>1},ie=function(){function t(t,e){this.Pe=bt(t),this.kw=e,this.Gb=null,this.jw=0,this.Ow=0}var e=t.prototype;return e.start=function(){var t=this,e=this.kw.video.element;this.stop(),this.Gb=this.Gb||[],this.qw()?this.Sw(this.Ow):this.Gb.push(function(e,n,i,r){var o=function(){t.qw()&&t.Sw(t.Ow)},a=Et(e,"loadedmetadata",(function(t){try{o(t)}finally{o=null,a()}}),void 0);return a}(e)),this.Gb.push(Mt(e,Dt,(function(){t.qw()&&t.xw(100)})))},e.stop=function(){if(this.Gb){for(;this.Gb.length>0;)this.Gb.pop()();this.Ow++}},e.qw=function(){var t=this.kw.video,e=t.getDuration();if(!ne(e))return!1;if(ee(e)<250){var n=Math.ceil(5);this.Mw("This video is too short for `video-percentage-played`. Reports may be innacurate. For best results, use videos over",n,"seconds long.",t.element)}return!0},e.Mw=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];tt().warn.apply(tt(),[Ht].concat(e))},e.Sw=function(t){var e,n=this;if(t==this.Ow){var i=this.kw,r=this.Pe,o=i.video,a=function(){return n.Sw(t)};if(i.getPlayingState()!=zt){var s=o.getDuration();if(ne(s)){var u=(e=ee(s),w(!0),Math.min(Math.max(e,250),4e3)),l=o.getCurrentTime()/s*100,c=5*Math.floor(l/5);nt(g(c)),this.xw(c),r.delay(a,u)}else r.delay(a,500)}else r.delay(a,500)}},e.xw=function(t){t<=0||this.jw!=t&&(this.jw=t,this.Tw(t))},e.Tw=function(t){re(this.kw,"video-percentage-played",{normalizedPercentage:t.toString()})},t}();function re(t,e,n){var i=t.video;t.getAnalyticsDetails().then((function(t){n&&Object.assign(t,n),O(i.element,e,t)}))}var oe=["<iframe frameborder=0 allowfullscreen></iframe>"];new Set(["c","v","a","ad"]);var ae=["<img placeholder referrerpolicy=origin>"],se="amp-youtube",ue=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&n(t,e)}(u,t);var r,a,s=(r=u,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=i(r);if(a){var n=i(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return o(this,t)});function u(t){var e;return(e=s.call(this,t)).Aw=null,e.kk=null,e.G=!1,e.jk=!1,e.qk=!1,e.ny=null,e.Ps=null,e.tq=null,e.Ew=null,e.Pw=null,e.mb=null,e.Sk=null,e.yt=new $(e.element),e}var l=u.prototype;return l.preconnectCallback=function(t){var e=rt(this.win,"preconnect"),n=this.getAmpDoc();e.url(n,this.iq()),e.url(n,"https://s.ytimg.com",t),e.url(n,"https://i.ytimg.com",t)},l.isLayoutSupported=function(t){return function(t){return"fixed"==t||"fixed-height"==t||"responsive"==t||"fill"==t||"flex-item"==t||"fluid"==t||"intrinsic"==t}(t)},l.renderOutsideViewport=function(){return.75},l.buildCallback=function(){this.Aw=this.nq(),this.kk=this.xk(),this.Ok();var t,e,n,i=new c;this.Ew=i.promise,this.Pw=i.resolve,t=this.element,e=Qt,function(t,e,n,i,r,o){var a=ct(t),s=a[n];s||(s=a[n]={obj:null,promise:null,resolve:null,reject:null,context:null,ctor:null,sharedInstance:!1}),s.ctor||(s.ctor=i,s.context=e,s.sharedInstance=!1,s.resolve&&lt(t,n))}(ut(n=st(t)),n,"video-manager",e)},l.Mk=function(){this.Ok();var t="omit"===this.Ek()?"-nocookie":"",e="https://www.youtube".concat(t,".com/embed/"),n=this.Aw?"".concat(encodeURIComponent(this.Aw||""),"?"):"live_stream?channel=".concat(encodeURIComponent(this.kk||""),"&");return"".concat(e).concat(n,"enablejsapi=1&amp=1")},l.iq=function(){if(this.tq)return this.tq;var t=this.Mk(),e=this.element,n=function(t,e,n){var i=t.dataset,r={},o=/^param(.+)/;for(var a in i){var s=a.match(o);s&&(r[s[1][0].toLowerCase()+s[1].substr(1)]=i[a])}return r}(e);return"autoplay"in n&&(delete n.autoplay,this.user().error("AMP-YOUTUBE","Use autoplay attribute instead of data-param-autoplay")),"playsinline"in n||(n.playsinline="1"),e.hasAttribute("autoplay")&&("iv_load_policy"in n||(n.iv_load_policy="".concat(3)),n.playsinline="1"),"loop"in n&&this.user().warn("AMP-YOUTUBE","Use loop attribute instead of the deprecated data-param-loop"),this.jk=e.hasAttribute("loop")||"loop"in n&&"1"==n.loop,this.qk="playlist"in n,this.jk&&(this.qk?n.loop="1":"loop"in n&&delete n.loop),t=function(t,e){return function(t,e,n){if(!e)return t;var i=t.split("#",2),r=i[0].split("?",2);return r[0]+(r[1]?"?".concat(r[1],"&").concat(e):"?".concat(e))+(i[1]?"#".concat(i[1]):"")}(t,function(t){var e,n,i=[];for(var r in t){var o=t[r];if(null!=o){o=d(o);for(var a=0;a<o.length;a++)i.push((e=r,n=o[a],"".concat(encodeURIComponent(e),"=").concat(encodeURIComponent(n))))}}return i.join("&")}(e))}(t,n),this.tq=t},l.layoutCallback=function(){var t,e,n,i,r=this,o=(t=this.iq(),n=q(e=this.element)(oe),I(["referrerpolicy"],this.element,n),n.src=yt(e).assertHttpsUrl(t,e),R(n),e.appendChild(n),n);o.title=this.element.title||"YouTube video",function(t){var e=t.getAttribute("allow")||"";e+="autoplay;",t.setAttribute("allow",e)}(o),this.ny=o,(i=this.element,ot(i,"video-manager")).register(this),this.mb=Mt(this.win,"message",this.Tk.bind(this)),this.jk&&!this.qk&&(this.Sk=Mt(this.element,Dt,(function(t){return r.play(!1)})));var a=this.loadPromise(this.ny).then((function(){return bt(r.win).promise(300)})).then((function(){r.Rk(),O(r.element,Lt)}));return this.Pw(a),a},l.unlayoutCallback=function(){this.ny&&(_(this.ny),this.ny=null),this.mb&&this.mb(),this.Sk&&this.Sk();var t=new c;return this.Ew=t.promise,this.Pw=t.resolve,this.yt.updatePlaying(!1),!0},l.pauseCallback=function(){this.ny&&this.ny.contentWindow&&this.pause()},l.mutatedAttributesCallback=function(t){null!=t["data-videoid"]&&(this.Aw=this.nq(),this.ny&&this.Ww("loadVideoById",[this.Aw]))},l.xk=function(){return this.element.getAttribute("data-live-channelid")},l.nq=function(){return this.element.getAttribute("data-videoid")},l.Ek=function(){return this.element.getAttribute("credentials")||"include"},l.Ok=function(){it(!(this.Aw&&this.kk)&&(this.Aw||this.kk),"Exactly one of data-videoid or data-live-channelid should be present for <amp-youtube> %s",this.element)},l.Ww=function(t,e){var n=this;this.Ew.then((function(){if(n.ny&&n.ny.contentWindow){var i=JSON.stringify({event:"command",func:t,args:e||""});n.ny.contentWindow.postMessage(i,"*")}}))},l.Tk=function(t){if(function(t,e,n){return!(!e||t.source!=e.contentWindow)&&"https://www.youtube.com"==t.origin}(t,this.ny)){var n=Ct(t);if((i=n)&&(b(i)||i.startsWith("{"))){var i,r,o=b(r=n)?r:S(r);if(null!=o){var a=o.event,s=o.info||{},u=this.element,l=s.playerState;if("infoDelivery"!=a||null==l){var c,h=s.muted;if("infoDelivery"==a&&s&&null!=h){if(this.G==h)return;return this.G=h,void O(u,(c=this.G,c?Gt:Nt))}if("initialDelivery"==a)return this.Ps=s,void O(u,"loadedmetadata");"infoDelivery"!=a||void 0===s.currentTime||(this.Ps.currentTime=s.currentTime)}else{var d;switch(l){case 1:this.yt.updatePlaying(!0);break;case 2:case 0:this.yt.updatePlaying(!1)}!function(t,e,n){if(null==n[e])return!1;var i=n[e];(f(i)?i:[i]).forEach((function(e){O(t,e)}))}(u,l.toString(),(d={},e(d,1,Wt),e(d,2,Ft),e(d,0,[Dt,Ft]),d))}}}}},l.Rk=function(){this.ny&&this.ny.contentWindow.postMessage(JSON.stringify({event:"listening"}),"*")},l.createPlaceholderCallback=function(){var t=this;if(!this.Aw)return null;var e=q(this.element)(ae),n=this.Aw;return V(e,{"object-fit":"cover",visibility:"hidden"}),I(["aria-label"],this.element,e),e.src="https://i.ytimg.com/vi/".concat(encodeURIComponent(n),"/sddefault.jpg#404_is_fine"),e.hasAttribute("aria-label")?e.setAttribute("alt","Loading video - "+e.getAttribute("aria-label")):e.setAttribute("alt","Loading video"),R(e),this.loadPromise(e).then((function(){if(120==e.naturalWidth&&90==e.naturalHeight)throw new Error("sddefault.jpg is not found")})).catch((function(){return e.src="https://i.ytimg.com/vi/".concat(encodeURIComponent(n),"/hqdefault.jpg"),t.loadPromise(e)})).then((function(){t.getVsync().mutate((function(){V(e,{visibility:""})}))})),e},l.supportsPlatform=function(){return!0},l.isInteractive=function(){return!0},l.play=function(t){this.Ww("playVideo")},l.pause=function(){this.Ww("pauseVideo")},l.mute=function(){this.Ww("mute")},l.unmute=function(){this.Ww("unMute")},l.showControls=function(){},l.hideControls=function(){},l.fullscreenEnter=function(){var t,e;this.ny&&(e=(t=this.ny).requestFullscreen||t.requestFullScreen||t.webkitRequestFullscreen||t.webkitEnterFullscreen||t.msRequestFullscreen||t.mozRequestFullScreen)&&e.call(t)},l.fullscreenExit=function(){this.ny&&function(t){var e=t.cancelFullScreen||t.exitFullscreen||t.webkitExitFullscreen||t.webkitCancelFullScreen||t.mozCancelFullScreen||t.msExitFullscreen;if(e)e.call(t);else{var n=t.ownerDocument;if(n){var i=n.cancelFullScreen||n.exitFullscreen||n.webkitExitFullscreen||n.webkitCancelFullScreen||n.mozCancelFullScreen||n.msExitFullscreen;i&&i.call(n)}}}(this.ny)},l.isFullscreen=function(){return!!this.ny&&function(t){var e=t.webkitDisplayingFullscreen;if(void 0!==e)return e;var n=t.ownerDocument;return!!n&&(n.fullscreenElement||n.webkitFullscreenElement||n.mozFullScreenElement||n.webkitCurrentFullScreenElement)==t}(this.ny)},l.getMetadata=function(){},l.preimplementsMediaSessionAPI=function(){return!0},l.preimplementsAutoFullscreen=function(){return!1},l.getCurrentTime=function(){return this.Ps?this.Ps.currentTime:NaN},l.getDuration=function(){return this.Ps?this.Ps.duration:NaN},l.getPlayedRanges=function(){return[]},l.seekTo=function(t){this.user().error(se,"`seekTo` not supported.")},u}(t.BaseElement);t.registerElement(se,ue)}();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */}});
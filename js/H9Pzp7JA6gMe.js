(self.AMP=self.AMP||[]).push({m:0,v:"2304262219000",n:"amp-iframe",ev:"0.1",l:!0,f:function(t,e){!function(){function e(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function n(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function r(t){for(var r=1;r<arguments.length;r++){var i=null!=arguments[r]?arguments[r]:{};r%2?n(Object(i),!0).forEach((function(n){e(t,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function o(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(n)return(n=n.call(t)).next.bind(n);if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return i(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0;return function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a;function s(){return a||(a=Promise.resolve(void 0))}var u=function(){var t=this;this.promise=new Promise((function(e,n){t.resolve=e,t.reject=n}))};function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function c(t){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function f(t){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function h(t,e){if(e&&("object"===f(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}var m=Array.isArray;function g(t,e){for(var n=[],r=0,i=0;i<t.length;i++){var o=t[i];e(o,i,t)?n.push(o):(r<i&&(t[r]=o),r++)}return r<t.length&&(t.length=r),n}function p(t,e){var n=t.length-e.length;return n>=0&&t.indexOf(e,n)==n}var v,d,y=Object.prototype;function b(t){var e=Object.create(null);return t&&Object.assign(e,t),e}function w(t,e,n,r,i,o,a,s,u,l,c){return t}function O(t){var e=Object.getOwnPropertyDescriptor(t,"message");if(null!=e&&e.writable)return t;var n=t.message,r=t.stack,i=new Error(n);for(var o in t)i[o]=t[o];return i.stack=r,i}function P(t){for(var e,n=null,r="",i=o(arguments,!0);!(e=i()).done;){var a=e.value;a instanceof Error&&!n?n=O(a):(r&&(r+=" "),r+=a)}return n?r&&(n.message=r+": "+n.message):n=new Error(r),n}function S(t){var e,n;null===(e=(n=self).__AMP_REPORT_ERROR)||void 0===e||e.call(n,t)}function A(t){var e=P.apply(null,arguments);setTimeout((function(){throw S(e),e}))}function E(t){try{for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return t.apply(null,n)}catch(t){A(t)}}function _(t){return JSON.parse(t)}function M(t,e){try{return _(t)}catch(t){return null==e||e(t),null}}function j(t){return"string"==typeof t&&t.startsWith("amp-")&&-1!=t.indexOf("{")}function x(t){return(t.ownerDocument||t).defaultView}function C(t){var e;null===(e=t.parentElement)||void 0===e||e.removeChild(t)}function R(t,e,n,r){for(var i,a,s=o(m(i=t)?i:[i],!0);!(a=s()).done;){var u=a.value,l=e.getAttribute(u);null!==l?n.setAttribute(u,l):r&&n.removeAttribute(u)}}y.hasOwnProperty,y.toString;var I=["Webkit","webkit","Moz","moz","ms","O","o"],L={getPropertyPriority:function(){return""},getPropertyValue:function(){return""}};function z(t,e,n,r,i){var o=function(t,e,n){if(e.startsWith("--"))return e;d||(d=b());var r=d[e];if(!r||n){if(r=e,void 0===t[e]){var i=function(t){return t.charAt(0).toUpperCase()+t.slice(1)}(e),o=function(t,e){for(var n=0;n<I.length;n++){var r=I[n]+e;if(void 0!==t[r])return r}return""}(t,i);void 0!==t[o]&&(r=o)}n||(d[e]=r)}return r}(t.style,e,i);if(o){var a,s=r?n+r:n;t.style.setProperty((a=o.replace(/[A-Z]/g,(function(t){return"-"+t.toLowerCase()})),I.some((function(t){return a.startsWith(t+"-")}))?"-".concat(a):a),s)}}function k(t,e){return t.getComputedStyle(e)||L}var G=/vertical/,D=new WeakMap,T=new WeakMap,F=new WeakMap;function W(t){var e=D.get(t);return e||(e=new t.ResizeObserver(N),D.set(t,e)),e}function N(t){for(var e=new Set,n=t.length-1;n>=0;n--){var r=t[n],i=r.target;if(!e.has(i)){e.add(i);var o=T.get(i);if(o){F.set(i,r);for(var a=0;a<o.length;a++){var s=o[a],u=s.callback;H(s.type,u,r)}}}}}function H(t,e,n){if(0==t){var r=n.contentRect,i=r.height;E(e,{width:r.width,height:i})}else if(1==t){var o,a=n.borderBoxSize;if(a)o=a.length>0?a[0]:{inlineSize:0,blockSize:0};else{var s,u,l=n.target,c=x(l),f=G.test(k(c,l).writingMode),h=l,m=h.offsetHeight,g=h.offsetWidth;f?(u=g,s=m):(s=g,u=m),o={inlineSize:s,blockSize:u}}E(e,o)}}var V=function(){function t(t){this.Gn=t,this.Zn=!1,this.Un=!1,this.Jn=this.Jn.bind(this)}var e=t.prototype;return e.updatePlaying=function(t){t!==this.Zn&&(this.Zn=t,t?(this.Un=!1,function(t,e,n){var r=t.ownerDocument.defaultView;if(r){var i=T.get(t);if(i||(i=[],T.set(t,i),W(r).observe(t)),!i.some((function(t){return t.callback===n&&1===t.type}))){i.push({type:1,callback:n});var o=F.get(t);o&&setTimeout((function(){return H(1,n,o)}))}}}(this.Gn,0,this.Jn)):function(t,e){!function(t,e,n){var r=T.get(t);if(r&&(g(r,(function(t){return t.callback===n&&1===t.type})),0==r.length)){T.delete(t),F.delete(t);var i=t.ownerDocument.defaultView;i&&W(i).unobserve(t)}}(t,0,e)}(this.Gn,this.Jn))},e.Jn=function(t){var e=t.blockSize,n=t.inlineSize>0&&e>0;if(n!==this.Un){this.Un=n;var r=this.Gn;n||r.pause()}},t}(),J=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function B(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";try{return decodeURIComponent(t)}catch(t){return e}}self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var X=self.__AMP_LOG;function U(t,e){throw new Error("failed to call initLogConstructor")}function Z(t){return X.user||(X.user=Q()),function(t,e){return e&&e.ownerDocument.defaultView!=t}(X.user.win,t)?X.userForEmbed||(X.userForEmbed=Q()):X.user}function Q(t){return U()}function K(){return X.dev||(X.dev=U())}function Y(t,e,n,r,i,o,a,s,u,l,c){return t}function q(t,e,n,r,i,o,a,s,u,l,c){return Z().assert(t,e,n,r,i,o,a,s,u,l,c)}function $(t,e){return rt(t=function(t){return t.__AMP_TOP||(t.__AMP_TOP=t)}(t),e)}function tt(t,e){var n=nt(et(t));return at(n,e)?rt(n,e):null}function et(t){return t.nodeType?(e=x(t),$(e,"ampdoc")).getAmpDoc(t):t;var e}function nt(t){var e=et(t);return e.isSingleDoc()?e.win:e}function rt(t,e){Y(at(t,e));var n=ot(t)[e];return n.obj||(Y(n.ctor),Y(n.context),n.obj=new n.ctor(n.context),Y(n.obj),n.context=null,n.resolve&&n.resolve(n.obj)),n.obj}function it(t,e){var n=ot(t)[e];return n?n.promise?n.promise:(rt(t,e),n.promise=Promise.resolve(n.obj)):null}function ot(t){var e=t.__AMP_SERVICES;return e||(e=t.__AMP_SERVICES={}),e}function at(t,e){var n=t.__AMP_SERVICES&&t.__AMP_SERVICES[e];return!(!n||!n.ctor)}var st="__AMP__EXPERIMENT_TOGGLES",ut=function(t){return rt(t,"timer")},lt=function(t){return function(t,e,n,r){var i=function(t,e){return it(nt(t),e)}(t,e);if(i)return i;var o=et(t);return o.whenExtensionsKnown().then((function(){var t=o.getExtensionVersion(n);return t?$(o.win,"extensions").waitForExtension(n,t):null})).then((function(e){return e?function(t,e){return function(t,e){var n=it(t,e);if(n)return n;var r,i,o,a,s=ot(t);return s[e]=(i=(r=new u).promise,o=r.reject,a=r.resolve,i.catch((function(){})),{obj:null,promise:i,resolve:a,reject:o,context:null,ctor:null}),s[e].promise}(nt(t),"consentPolicyManager")}(t):null}))}(t,"consentPolicyManager","amp-consent")},ct=function(t){return tt(t,"url")};function ft(t){return t.data}var ht,mt,gt=function(){function t(t){this.dr=t,this.pr=0,this.mr=0,this.yr=b()}var e=t.prototype;return e.has=function(t){return!!this.yr[t]},e.get=function(t){var e=this.yr[t];if(e)return e.access=++this.mr,e.payload},e.put=function(t,e){this.has(t)||this.pr++,this.yr[t]={payload:e,access:this.mr},this.wr()},e.wr=function(){if(!(this.pr<=this.dr)){var t,e=this.yr,n=this.mr+1;for(var r in e){var i=e[r].access;i<n&&(n=i,t=r)}void 0!==t&&(delete e[t],this.pr--)}},t}();new Set(["c","v","a","ad"]);var pt="unlisten";function vt(t,e,n){var r=function(t,e){var n=t.listeningFors;return!n&&e&&(n=t.listeningFors=Object.create(null)),n||null}(t,n);if(!r)return r;var i=r[e];return!i&&n&&(i=r[e]=[]),i||null}function dt(t,e){for(var n=e;n&&n!=n.parent;n=n.parent)if(n==t)return!0;return!1}function yt(t){for(var e={sentinel:pt},n=t.length-1;n>=0;n--){var r=t[n];if(!r.frame.contentWindow){t.splice(n,1);var i=r.events;for(var o in i)i[o].splice(0,1/0).forEach((function(t){t(e)}))}}}function bt(t,e,n,r,i,o){Y(t.src),Y(!t.parentNode),Y(n);var a=t.ownerDocument.defaultView;!function(t){t.listeningFors||t.addEventListener("message",(function(e){if(ft(e)){var n=function(t){return"string"==typeof t&&(t="{"==t.charAt(0)?M(t,(function(t){K().warn("IFRAME-HELPER","Postmessage could not be parsed. Is it in a valid JSON format?",t)}))||null:j(t)?function(t){if(!j(t))return null;var e=t.indexOf("{");return w(-1!=e),M(t.substr(e),(function(e){A(new Error("MESSAGING: Failed to parse message: ".concat(t,"\n").concat(e.message)))}))}(t):null),t}(ft(e));if(n&&n.sentinel){var r=function(t,e,n,r){var i,o=vt(t,e);if(!o)return o;for(var a=0;a<o.length;a++){var s=o[a],u=s.frame.contentWindow;if(u){if(r==u||dt(u,r)){i=s;break}}else setTimeout(yt,0,o)}return i?i.events:null}(t,n.sentinel,e.origin,e.source);if(r){var i=r[n.type];if(i){i=i.slice();for(var o=0;o<i.length;o++)(0,i[o])(n,e.source,e.origin,e)}}}}}))}(a);var s,u,l=function(t,e,n){for(var r,i=vt(t,wt(e,n),!0),o=0;o<i.length;o++){var a=i[o];if(a.frame===e){r=a;break}}return r||(r={frame:e,events:Object.create(null)},i.push(r)),r.events}(a,t,r),c=(u=t.src,ht||(ht=self.document.createElement("a"),mt=self.__AMP_URL_CACHE||(self.__AMP_URL_CACHE=new gt(100))),function(t,e,n){if(n&&n.has(e))return n.get(e);t.href=e,t.protocol||(t.href=t.href);var r,i={href:t.href,protocol:t.protocol,host:t.host,hostname:t.hostname,port:"0"==t.port?"":t.port,pathname:t.pathname,search:t.search,hash:t.hash,origin:null};"/"!==i.pathname[0]&&(i.pathname="/"+i.pathname),("http:"==i.protocol&&80==i.port||"https:"==i.protocol&&443==i.port)&&(i.port="",i.host=i.hostname),r=t.origin&&"null"!=t.origin?t.origin:"data:"!=i.protocol&&i.host?i.protocol+"//"+i.host:i.href,i.origin=r;var o=i;return n&&n.put(e,o),o}(ht,u,mt)).origin,f=l[e]||(l[e]=[]),h=function(e,r,a,u){if("amp"==e.sentinel){if(r!=t.contentWindow)return;if(c!=a&&("null"!=a||!o))return}(i||r==t.contentWindow)&&(e.sentinel!=pt?n(e,r,a,u):s())};return f.push(h),s=function(){if(h){var t=f.indexOf(h);t>-1&&f.splice(t,1),h=null,f=null,n=null}}}function wt(t,e){return e?t.getAttribute("data-amp-3p-sentinel"):"amp"}var Ot=function(){function t(t,e,n,r){var i=this;this.ny=t,this.zg=n,this.Gg=[],this.wy=bt(this.ny,e,(function(t,e,n){i.Gg.some((function(t){return t.win==e}))||i.Gg.push({win:e,origin:n}),r(t,e,n)}),this.zg,this.zg)}var e=t.prototype;return e.send=function(t,e){g(this.Gg,(function(t){return!t.win.parent})),function(t,e,n,r,i){if(t.contentWindow){r.type=n,r.sentinel=wt(t,i);var o=r;i&&(o="amp-"+JSON.stringify(r));for(var a=0;a<e.length;a++){var s=e[a];s.win.postMessage(o,s.origin)}}}(this.ny,this.Gg,t,e,this.zg)},e.destroy=function(){this.wy(),this.Gg.length=0},t}(),Pt=[[300,250],[320,50],[300,50],[320,100]],St=[0,.05,.1,.15,.2,.25,.3,.35,.4,.45,.5,.55,.6,.65,.7,.75,.8,.85,.9,.95,1],At=(Date.now(),function(){function t(t,e){var n=this;this.Lg=t,this.Fg=null,this.Bg=new Ot(e,"send-intersections",!1,(function(){n.qg()})),this.Fg=new IntersectionObserver((function(t){n.Bg.send("intersection",{changes:t.map(Et)})}),{threshold:St})}var e=t.prototype;return e.qg=function(){this.Fg.observe(this.Lg.element)},e.destroy=function(){this.Fg.disconnect(),this.Fg=null,this.Bg.destroy(),this.Bg=null},t}());function Et(t){return{time:t.time,rootBounds:t.rootBounds,boundingClientRect:t.boundingClientRect,intersectionRect:t.intersectionRect,intersectionRatio:t.intersectionRatio}}var _t={"AMP-FX-FLYING-CARPET":!0,"AMP-LIGHTBOX":!0,"AMP-STICKY-AD":!0,"AMP-LIGHTBOX-GALLERY":!0};function Mt(t,e){var n=k(e,t).position;return"fixed"==n||"sticky"==n}var jt=self.AMP.config.urls,xt="amp-iframe",Ct=["allowfullscreen","allowpaymentrequest","allowtransparency","allow","frameborder","referrerpolicy","scrolling","tabindex","title"],Rt=0,It=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}(u,t);var n,i,a=(n=u,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=c(n);if(i){var r=c(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return h(this,t)});function u(t){var e;return(e=a.call(this,t)).Jg=null,e.Xg=!1,e.Yg=!1,e.Hg=!1,e.Wg=!1,e.ny=null,e.Kg=!1,e.Vg=null,e.Zg="",e.$g=null,e.iframeSrc=null,e.ft=null,e.Qg=null,e.Gw=!1,e.yt=new V(e.element),e}var f=u.prototype;return f.isLayoutSupported=function(t){return function(t){return"fixed"==t||"fixed-height"==t||"responsive"==t||"fill"==t||"flex-item"==t||"fluid"==t||"intrinsic"==t}(t)},f.Oe=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=this.element,i=ct(r),o=i.parse(t),a=o.hostname,s=o.origin,u=o.protocol;q(i.isSecure(t)||"data:"==u,"Invalid <amp-iframe> src. Must start with https://. Found %s",r);var l=i.parse(e);return q(!this._w(n,"allow-same-origin")||s!=l.origin&&"data:"!=u,"Origin of <amp-iframe> must not be equal to container %s if allow-same-origin is set. See https://github.com/ampproject/amphtml/blob/main/docs/spec/amp-iframe-origin-policy.md for details.",r),q(!(p(a,".".concat(jt.thirdPartyFrameHost))||p(a,".ampproject.org")),"amp-iframe does not allow embedding of frames from ampproject.*: %s",t),t},f.Xw=function(){var t=this.element.getLayoutBox(),e=Math.min(600,.75*this.getViewport().getSize().height);q(t.top>=e,"<amp-iframe> elements must be positioned outside the first 75% of the viewport or 600px from the top (whichever is smaller): %s  Current position %s. Min: %sPositioning rules don't apply for iframes that use `placeholder`.See https://github.com/ampproject/amphtml/blob/main/extensions/amp-iframe/amp-iframe.md#iframe-with-placeholder for details.",this.element,t.top,e)},f._w=function(t,e){return new RegExp("\\s".concat(e,"\\s"),"i").test(" "+t+" ")},f.Hw=function(t){if(t){var e,n,r=ct(this.element).parse(t),i=r.hash;return"data:"==r.protocol||i&&"#"!=i?t:(-1==(n=(e=t).indexOf("#"))?e:e.substring(0,n))+"#amp=1"}},f.Kw=function(t,e){if(t)return q(!(" "+e+" ").match(/\s+allow-same-origin\s+/i),"allow-same-origin is not allowed with the srcdoc attribute %s.",this.element),"data:text/html;charset=utf-8;base64,"+(r=t,n="undefined"!=typeof TextEncoder?(new TextEncoder).encode(r):function(t){for(var e=new Uint8Array(t.length),n=0;n<t.length;n++){var r=t.charCodeAt(n);w(r<=255),e[n]=r}return e}(unescape(encodeURIComponent(r))),btoa(function(t){for(var e=new Array(t.length),n=0;n<t.length;n++)e[n]=String.fromCharCode(t[n]);return e.join("")}(n)));var n,r},f.preconnectCallback=function(t){var e;this.iframeSrc&&(e=this.win,$(e,"preconnect")).url(this.getAmpDoc(),this.iframeSrc,t)},f.buildCallback=function(){this.Zg=this.element.getAttribute("sandbox");var t=this.Hw(this.element.getAttribute("src"))||this.Kw(this.element.getAttribute("srcdoc"),this.Zg);this.iframeSrc=this.Oe(t,window.location.href,this.Zg),this.Jg=this.getPlaceholder(),this.Xg=!!this.Jg,this.Kg=this.element.hasAttribute("resizable"),this.Kg&&this.element.setAttribute("scrolling","no"),this.element.hasAttribute("frameborder")||this.element.setAttribute("frameborder","0"),this.ft=function(t){if("no"!=t.getAttribute("scrolling")){var e=t.ownerDocument.createElement("i-amphtml-scroll-container");return t.appendChild(e),e}return t}(this.element),this.Vw()},f.onLayoutMeasure=function(){var t=this.element;this.Yg=function(t){for(var e=t.getLayoutSize(),n=e.height,r=e.width,i=0;i<Pt.length;i++){var o=Pt[i][0],a=Pt[i][1];if(!(a>n)&&!(o>r)&&n-a<=20&&r-o<=20)return!0}return!1}(t),this.Hg=this.Qw(),this.Wg=this.Yg&&!function(t,e){var n=!1,r=0,i=t;do{_t[i.tagName]?(r++,n=!1):Mt(i,e)&&(n=!0),i=i.parentElement}while(i&&"BODY"!=i.tagName);return!n&&r<=1}(t,this.win)},f.Qw=function(){return n=(e=(t=this.element).getLayoutSize()).height,!(e.width>10||n>10||function(t,e){return t.closest?t.closest(".i-amphtml-overlay"):function(t,e,n){var r;for(r=t;r&&void 0!==r;r=r.parentElement)if(e(r))return r;return null}(t,(function(t){return function(t,e){var n=t.matches||t.webkitMatchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector;return!!n&&n.call(t,".i-amphtml-overlay")}(t)}))}(t));var t,e,n},f.layoutCallback=function(){var t=this;if(q(!this.Wg,"amp-iframe is not used for displaying fixed ad. Please use amp-sticky-ad and amp-ad instead."),this.Xg||this.Xw(),this.Kg&&q(this.getOverflowElement(),"Overflow element must be defined for resizable frames: %s",this.element),!this.iframeSrc)return s();if(this.Hg&&!this.getAmpDoc().registerSingleton(1))return console.error("Only 1 analytics/tracking iframe allowed per page. Please use amp-analytics instead or file a GitHub issue for your use case: https://github.com/ampproject/amphtml/issues/new/choose"),s();var e=this.element.ownerDocument.createElement("iframe");this.ny=e,e.classList.add("i-amphtml-fill-content"),e.name="amp_iframe"+Rt++,this.Xg&&z(e,"zIndex",-1),R(Ct,this.element,e);var n=e.getAttribute("allow")||"";return n=n.replace("autoplay","autoplay-disabled"),e.setAttribute("allow",n),function(t,e,n){var r=n||"";e.setAttribute("sandbox",r)}(this.element,e,this.Zg),e.src=this.iframeSrc,this.Hg||(this.Vg=new At(this,e)),e.onload=function(){e.readyState="complete",t.tO(),t.Hg&&(t.iframeSrc=null,ut(t.win).promise(5e3).then((function(){C(e),t.element.setAttribute("amp-removed",""),t.ny=null})))},bt(e,"embed-size",(function(e){t.nO(e.height,e.width)}),void 0,void 0,!0),this.$g=function(e,n,r,i){var o=e,a=function(e){return t.rO(e)},s=function(t){try{return a(t)}catch(t){var e,n;throw null===(e=(n=self).__AMP_REPORT_ERROR)||void 0===e||e.call(n,t),t}},u=function(){if(void 0!==v)return v;v=!1;try{var t={get capture(){return v=!0,!1}};self.addEventListener("test-options",null,t),self.removeEventListener("test-options",null,t)}catch(t){}return v}();return o.addEventListener(n,s,!!u&&i),function(){null==o||o.removeEventListener(n,s,!!u&&i),a=null,o=null,s=null}}(this.win,"message",0,void 0),this.Xg&&bt(e,"embed-ready",this.tO.bind(this)),bt(e,"send-consent-data",(function(e,n,r){t.iO(n,r)})),this.ft.appendChild(e),this.loadPromise(e).then((function(){t.ft!=t.element&&ut(t.win).delay((function(){t.mutateElement((function(){t.ft.classList.add("amp-active")}))}),1e3),t.yt.updatePlaying(!0)}))},f.rO=function(t){if(this.ny&&t.source===this.ny.contentWindow){var e=ft(t);if("string"==typeof e&&e.startsWith("pym")){var n=e.split(/xPYMx/);"height"===n[2]?this.nO(parseInt(n[3],10),void 0):"width"===n[2]?this.nO(void 0,parseInt(n[3],10)):Z().warn(xt,"Unsupported Pym.js message: ".concat(e))}}},f.iO=function(t,n){var i,o,a=this;(i=this.element,o=this.getConsentPolicy(),lt(i).then((function(t){var n={consentMetadata:t&&t.getConsentMetadataInfo,consentString:t&&t.getConsentStringInfo,consentPolicyState:t&&t.whenPolicyResolved,consentPolicySharedData:t&&t.getMergedSharedData};return t?Promise.all(Object.keys(n).map((function(r){return n[r].call(t,o||"default").then((function(t){return e({},r,t)}))}))).then((function(t){return Object.assign.apply({},t)})):n}))).then((function(e){a.eO(t,n,r({sentinel:"amp",type:"consent-data"},e))}))},f.eO=function(t,e,n){t.postMessage(n,e)},f.unlayoutCallback=function(){return this.$g&&(this.$g(),this.$g=null),this.ny&&(C(this.ny),this.Jg&&this.togglePlaceholder(!0),this.ny=null,this.Vg&&(this.Vg.destroy(),this.Vg=null)),this.yt.updatePlaying(!1),!0},f.getLayoutPriority=function(){return this.Yg?2:this.Hg?1:t.prototype.getLayoutPriority.call(this)},f.mutatedAttributesCallback=function(t){var e=t.src;void 0!==e&&(this.iframeSrc=this.Hw(e),this.ny&&(this.ny.src=this.Oe(this.iframeSrc,window.location.href,this.Zg))),this.ny&&t.title&&R(["title"],this.element,this.ny)},f.unlayoutOnPause=function(){return!0},f.tO=function(){var t=this;this.Jg&&this.getVsync().mutate((function(){t.ny&&(z(t.ny,"zIndex",0),t.togglePlaceholder(!1))}))},f.firstLayoutCompleted=function(){},f.throwIfCannotNavigate=function(){if(!this._w(this.Zg,"allow-top-navigation"))throw Z().createError('"AMP.navigateTo" is only allowed on <amp-iframe> when its "sandbox" attribute contains "allow-top-navigation".')},f.nO=function(t,e){var n,r,i=this;this.Kg?t<100?this.user().error(xt,"Ignoring embed-size request because the resize height is less than 100px. If you are using amp-iframe to display ads, consider using amp-ad instead.",this.element):(t=parseInt(t,10),isNaN(t)||(n=Math.max(t+(this.element.offsetHeight-this.ny.offsetHeight),t)),e=parseInt(e,10),isNaN(e)||(r=Math.max(e+(this.element.offsetWidth-this.ny.offsetWidth),e)),void 0!==n||void 0!==r?this.attemptChangeSize(n,r).then((function(){void 0!==n&&i.element.setAttribute("height",n),void 0!==r&&i.element.setAttribute("width",r),i.element.overflowCallback(!1,n,r)}),(function(){})):this.user().error(xt,"Ignoring embed-size request because no width or height value is provided",this.element)):this.Gw||(this.user().error(xt,"Ignoring embed-size request because this iframe is not resizable",this.element),this.Gw=!0)},f.Vw=function(){var t=this;if(function(t){var e,n,i,a,s;if(t[st])return t[st];t[st]=b();var u=t[st];w(u);var l=r(r({},null!==(e=t.AMP_CONFIG)&&void 0!==e?e:{}),null!==(n=t.AMP_EXP)&&void 0!==n?n:_((null===(i=t.__AMP_EXP)||void 0===i?void 0:i.textContent)||"{}"));for(var c in l){var f=l[c];"number"==typeof f&&f>=0&&f<=1&&(u[c]=Math.random()<f)}var h=null===(a=t.AMP_CONFIG)||void 0===a?void 0:a["allow-doc-opt-in"];if(m(h)&&h.length){var g=t.document.head.querySelector('meta[name="amp-experiments-opt-in"]');if(g)for(var p,v,d=o((null===(p=g.getAttribute("content"))||void 0===p?void 0:p.split(","))||[],!0);!(v=d()).done;){var y=v.value;h.includes(y)&&(u[y]=!0)}}Object.assign(u,function(t){var e,n="";try{var r;"localStorage"in t&&(n=null!==(r=t.localStorage.getItem("amp-experiment-toggles"))&&void 0!==r?r:"")}catch(t){K().warn("EXPERIMENTS","Failed to retrieve experiments from localStorage.")}for(var i,a=(null===(e=n)||void 0===e?void 0:e.split(/\s*,\s*/g))||[],s=b(),u=o(a,!0);!(i=u()).done;){var l=i.value;l&&("-"==l[0]?s[l.substr(1)]=!1:s[l]=!0)}return s}(t));var O=null===(s=t.AMP_CONFIG)||void 0===s?void 0:s["allow-url-opt-in"];if(m(O)&&O.length)for(var P,S=function(t){var e,n=b();if(!t)return n;for(;e=J.exec(t);){var r=B(e[1],e[1]),i=e[2]?B(e[2].replace(/\+/g," "),e[2]):"";n[r]=i}return n}(t.location.originalHash||t.location.hash),A=o(O,!0);!(P=A()).done;){var E=P.value,M=S["e-".concat(E)];"1"==M&&(u[E]=!0),"0"==M&&(u[E]=!1)}return u}(this.win)["iframe-messaging"]){var e=this.element,n=e.getAttribute("src");if(n&&(this.Qg=ct(e).parse(n).origin),this.registerAction("postMessage",(function(e){t.Qg?t.ny.contentWindow.postMessage(e.args,t.Qg):Z().error(xt,'"postMessage" action is only allowed with "src"attribute with an origin.')})),this.Qg){var i=0;this.win.addEventListener("message",(function e(n){if(n.source===t.ny.contentWindow)if(n.origin===t.Qg){if(!t.oO())return i++,Z().error(xt,'"message" event may only be triggered from a user gesture.'),void(i>=10&&(Z().error(xt,'Too many non-gesture-triggered "message" events; detaching event listener.'),t.win.removeEventListener("message",e)));var r,o=ft(n);try{r=_(JSON.stringify(o))}catch(e){return void Z().error(xt,'Data from "message" event must be JSON.')}var a=function(t,e,n,r){var i={detail:n};if(Object.assign(i,void 0),"function"==typeof t.CustomEvent)return new t.CustomEvent(e,i);var o=t.document.createEvent("CustomEvent");return o.initCustomEvent(e,!!i.bubbles,!!i.cancelable,n),o}(t.win,"amp-iframe:message",{data:r});(function(t){return tt(t,"action")})(t.element).trigger(t.element,"message",a,3)}else Z().error(xt,'"message" received from unexpected origin: '+n.origin+". Only allowed from: "+t.Qg)}))}}},f.oO=function(){if(this.getAmpDoc().getRootNode().activeElement!==this.ny)return!1;var t,e,n=this.win.document.createElement("audio");return t=n,(e=function(){return t.play()},new Promise((function(t){t(e())}))).catch((function(){})),!n.paused},f.setTargetOriginForTesting=function(t){this.Qg=t},u}(t.BaseElement);t.registerElement(xt,It)}();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */}});
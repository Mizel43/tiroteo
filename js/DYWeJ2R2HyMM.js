(self.AMP=self.AMP||[]).push({m:0,v:"2304262219000",n:"amp-twitter",ev:"0.1",l:!0,f:function(t,e){!function(){function e(t,n){return(e=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,n)}function n(t){return(n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){if(e&&("object"===r(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}var i=Array.isArray;function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function c(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(n)return(n=n.call(t)).next.bind(n);if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return a(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0;return function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var u,l=Object.prototype,s=l.hasOwnProperty;function f(t){var e=Object.create(null);return t&&Object.assign(e,t),e}function p(t,e,n,r,o,i,a,c,u,l,s){return t}function h(t){var e=Object.getOwnPropertyDescriptor(t,"message");if(null!=e&&e.writable)return t;var n=t.message,r=t.stack,o=new Error(n);for(var i in t)o[i]=t[i];return o.stack=r,o}function v(t){for(var e,n=null,r="",o=c(arguments,!0);!(e=o()).done;){var i=e.value;i instanceof Error&&!n?n=h(i):(r&&(r+=" "),r+=i)}return n?r&&(n.message=r+": "+n.message):n=new Error(r),n}function d(t){var e,n;null===(e=(n=self).__AMP_REPORT_ERROR)||void 0===e||e.call(n,t)}function m(t){return JSON.parse(t)}function g(t,e){try{return m(t)}catch(t){return null==e||e(t),null}}function y(t){return"string"==typeof t&&t.startsWith("amp-")&&-1!=t.indexOf("{")}function b(t){var e,n=parseFloat(t);return"number"==typeof(e=n)&&isFinite(e)?n:void 0}function w(t){return function(t,e){if(p(1===e.length),p(Array.isArray(e)||(r=e,s.call(r,"raw"))),self.trustedTypes&&self.trustedTypes.createPolicy){var n=self.trustedTypes.createPolicy("static-template#createNode",{createHTML:function(t){return e[0]}});t.innerHTML=n.createHTML("ignored")}else t.innerHTML=e[0];var r,o=t.firstElementChild;return p(o),p(!o.nextElementSibling),t.removeChild(o),o}(u,t)}l.toString;var _=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function A(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";try{return decodeURIComponent(t)}catch(t){return e}}function O(t){var e,n=f();if(!t)return n;for(;e=_.exec(t);){var r=A(e[1],e[1]),o=e[2]?A(e[2].replace(/\+/g," "),e[2]):"";n[r]=o}return n}function P(t){var e=(t||self).location;return O(e.originalHash||e.hash)}var E="";function M(t){var e=t||self;return e.__AMP_MODE?e.__AMP_MODE:e.__AMP_MODE=function(t){return{localDev:!1,development:j(t,P(t)),esm:!1,test:!1,rtvVersion:S(t),ssrReady:!1}}(e)}function S(t){var e;return E||(E=(null===(e=t.AMP_CONFIG)||void 0===e?void 0:e.v)||"01".concat("2304262219000")),E}function j(t,e){var n=e||P(t);return["1","actions","amp","amp4ads","amp4email"].includes(n.development)||!!t.AMP_DEV_MODE}function C(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var R=self.__AMP_LOG;function T(t,e){throw new Error("failed to call initLogConstructor")}function x(t){return R.user||(R.user=D()),function(t,e){return e&&e.ownerDocument.defaultView!=t}(R.user.win,t)?R.userForEmbed||(R.userForEmbed=D()):R.user}function D(t){return T()}function F(){return R.dev||(R.dev=T())}function I(t,e,n,r,o,i,a,c,u,l,s){return t}function L(t,e,n,r,o,i,a,c,u,l,s){return x().assert(t,e,n,r,o,i,a,c,u,l,s)}function N(t,e){return V(t=function(t){return t.__AMP_TOP||(t.__AMP_TOP=t)}(t),e)}function k(t,e){return V((n=U(t),(r=U(n)).isSingleDoc()?r.win:r),e);var n,r}function U(t){return t.nodeType?(n=t,e=(n.ownerDocument||n).defaultView,N(e,"ampdoc")).getAmpDoc(t):t;var e,n}function V(t,e){I(function(t,e){var n=t.__AMP_SERVICES&&t.__AMP_SERVICES[e];return!(!n||!n.ctor)}(t,e));var n=function(t){var e=t.__AMP_SERVICES;return e||(e=t.__AMP_SERVICES={}),e}(t)[e];return n.obj||(I(n.ctor),I(n.context),n.obj=new n.ctor(n.context),I(n.obj),n.context=null,n.resolve&&n.resolve(n.obj)),n.obj}var H,B=["Webkit","webkit","Moz","moz","ms","O","o"];function G(t,e,n,r,o){var i=function(t,e,n){if(e.startsWith("--"))return e;H||(H=f());var r=H[e];if(!r||n){if(r=e,void 0===t[e]){var o=function(t){return t.charAt(0).toUpperCase()+t.slice(1)}(e),i=function(t,e){for(var n=0;n<B.length;n++){var r=B[n]+e;if(void 0!==t[r])return r}return""}(t,o);void 0!==t[i]&&(r=i)}n||(H[e]=r)}return r}(t.style,e,o);if(i){var a,c=r?n+r:n;t.style.setProperty((a=i.replace(/[A-Z]/g,(function(t){return"-"+t.toLowerCase()})),B.some((function(t){return a.startsWith(t+"-")}))?"-".concat(a):a),c)}}var W=function(){function t(){}return t.generate=function(t){return function(t){for(var e=t.length,n=5381,r=0;r<e;r++)n=33*n^t.charCodeAt(r);return String(n>>>0)}(function(t){for(var e=[],n=0;1==(null==(i=t)?void 0:i.nodeType)&&n<25;){var r="";t.id&&(r="/".concat(t.id));var o=t.nodeName.toLowerCase();e.push("".concat(o).concat(r).concat(J(t))),n++,t=t.parentElement}var i;return e.join()}(t))},t}();function J(t){for(var e=t.nodeName,n=0,r=0,o=t.previousElementSibling;o&&r<25&&n<100;)o.nodeName==e&&r++,n++,o=o.previousElementSibling;return r<25&&n<100?".".concat(r):""}function X(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function q(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?X(Object(n),!0).forEach((function(e){C(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):X(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var z="__AMP__EXPERIMENT_TOGGLES";function Z(t){var e,n,r,o,a;if(t[z])return t[z];t[z]=f();var u=t[z];p(u);var l=q(q({},null!==(e=t.AMP_CONFIG)&&void 0!==e?e:{}),null!==(n=t.AMP_EXP)&&void 0!==n?n:m((null===(r=t.__AMP_EXP)||void 0===r?void 0:r.textContent)||"{}"));for(var s in l){var h=l[s];"number"==typeof h&&h>=0&&h<=1&&(u[s]=Math.random()<h)}var v=null===(o=t.AMP_CONFIG)||void 0===o?void 0:o["allow-doc-opt-in"];if(i(v)&&v.length){var d=t.document.head.querySelector('meta[name="amp-experiments-opt-in"]');if(d)for(var g,y,b=c((null===(g=d.getAttribute("content"))||void 0===g?void 0:g.split(","))||[],!0);!(y=b()).done;){var w=y.value;v.includes(w)&&(u[w]=!0)}}Object.assign(u,function(t){var e,n="";try{var r;"localStorage"in t&&(n=null!==(r=t.localStorage.getItem("amp-experiment-toggles"))&&void 0!==r?r:"")}catch(t){F().warn("EXPERIMENTS","Failed to retrieve experiments from localStorage.")}for(var o,i=(null===(e=n)||void 0===e?void 0:e.split(/\s*,\s*/g))||[],a=f(),u=c(i,!0);!(o=u()).done;){var l=o.value;l&&("-"==l[0]?a[l.substr(1)]=!1:a[l]=!0)}return a}(t));var _=null===(a=t.AMP_CONFIG)||void 0===a?void 0:a["allow-url-opt-in"];if(i(_)&&_.length)for(var A,P=O(t.location.originalHash||t.location.hash),E=c(_,!0);!(A=E()).done;){var M=A.value,S=P["e-".concat(M)];"1"==S&&(u[M]=!0),"0"==S&&(u[M]=!1)}return u}var $,K,Q=self.AMP.config.urls,Y=function(){function t(t){this.dr=t,this.pr=0,this.mr=0,this.yr=f()}var e=t.prototype;return e.has=function(t){return!!this.yr[t]},e.get=function(t){var e=this.yr[t];if(e)return e.access=++this.mr,e.payload},e.put=function(t,e){this.has(t)||this.pr++,this.yr[t]={payload:e,access:this.mr},this.wr()},e.wr=function(){if(!(this.pr<=this.dr)){var t,e=this.yr,n=this.mr+1;for(var r in e){var o=e[r].access;o<n&&(n=o,t=r)}void 0!==t&&(delete e[t],this.pr--)}},t}();function tt(t,e){return $||($=self.document.createElement("a"),K=self.__AMP_URL_CACHE||(self.__AMP_URL_CACHE=new Y(100))),function(t,e,n){if(n&&n.has(e))return n.get(e);t.href=e,t.protocol||(t.href=t.href);var r,o={href:t.href,protocol:t.protocol,host:t.host,hostname:t.hostname,port:"0"==t.port?"":t.port,pathname:t.pathname,search:t.search,hash:t.hash,origin:null};"/"!==o.pathname[0]&&(o.pathname="/"+o.pathname),("http:"==o.protocol&&80==o.port||"https:"==o.protocol&&443==o.port)&&(o.port="",o.host=o.hostname),r=t.origin&&"null"!=t.origin?t.origin:"data:"!=o.protocol&&o.host?o.protocol+"//"+o.host:o.href,o.origin=r;var i=o;return n&&n.put(e,i),i}($,t,e?null:K)}function et(t){return"https:"==(t=function(t){return"string"==typeof t?tt(t):t}(t)).protocol||"localhost"==t.hostname||"127.0.0.1"==t.hostname||(n=".localhost",(r=(e=t.hostname).length-n.length)>=0&&e.indexOf(n,r)==r);var e,n,r}new Set(["c","v","a","ad"]);var nt=self.AMP.config.urls,rt={};function ot(t,e,n,r){var o=n||e.getAttribute("type");L(o,"Attribute type required for <amp-ad>: %s",e);var i=function(t){for(var e=0,n=t;n&&n!=n.parent;n=n.parent)e++;return String(e)+"-"+ct(t)}(t),a={};return function(t,e){var n=t.dataset;for(var r in n)r.startsWith("vars")||(e[r]=n[r]);var o=t.getAttribute("json");if(o){var i=g(o);if(void 0===i)throw x().createError("Error parsing JSON in json attribute in element %s",t);for(var a in i)e[a]=i[a]}}(e,a),(a=function(t,e,n,r){var o=Date.now(),i=e.getAttribute("width"),a=e.getAttribute("height");(r=r||{}).width=b(i),r.height=b(a),e.getAttribute("title")&&(r.title=e.getAttribute("title"));var c=t.location.href;"about:srcdoc"==c&&(c=t.parent.location.href);var u,l,s,f,p=U(e),h=k(e,"documentInfo").get(),v=(f=e,k(f,"viewer")).getUnconfirmedReferrerUrl(),d=function(t){for(var e=t.ownerDocument.body,n=0,r=0,o=t;o&&o!=e;o=o.offsetParent)n+=o.offsetLeft,r+=o.offsetTop;var i=t.offsetHeight;return function(t,e,n,r){return{left:t,top:e,width:n,height:r,bottom:e+r,right:t+n,x:t,y:e}}(n,r,t.offsetWidth,i)}(e);r._context={ampcontextVersion:"2304262219000",ampcontextFilepath:"".concat(Q.thirdParty,"/").concat("2304262219000","/ampcontext-v0.js"),sourceUrl:h.sourceUrl,referrer:v,canonicalUrl:h.canonicalUrl,pageViewId:h.pageViewId,location:{href:c},startTime:o,tagName:e.tagName,mode:{localDev:!1,development:M(s).development,esm:M(s).esm,test:!1,rtvVersion:M(s).rtvVersion},canary:(u=t,!(null===(l=u.AMP_CONFIG)||void 0===l||!l.canary)),hidden:!p.isVisible(),initialLayoutRect:d?{left:d.left,top:d.top,width:d.width,height:d.height}:null,domFingerprint:W.generate(e),experimentToggles:Z(t),sentinel:n};var m=e.getAttribute("src");return m&&(r.src=m),r}(t,e,i,a)).type=o,Object.assign(a._context,r),a}function it(t){return"".concat(nt.thirdParty,"/").concat("2304262219000","/vendor/").concat(t).concat(".js")}function at(t,e,n){return function(t,e,n){var r=e.getMetaByName("amp-3p-iframe-src");if(!r)return null;var o=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"source";return L(null!=t,"%s %s must be available",e,n),L(et(t)||/^\/\//.test(t),'%s %s must start with "https://" or "//" or be relative and served from either https or from localhost. Invalid value: %s',e,n,t),t}(r,'meta[name="amp-3p-iframe-src"]');L(-1==o.indexOf("?"),"3p iframe url must not include query string %s in element %s.",o,r);var i=tt(o);return L("localhost"==i.hostname&&!n||i.origin!=tt(t.location.href).origin,"3p iframe url must not be on the same origin as the current document %s (%s) in element %s. See https://github.com/ampproject/amphtml/blob/main/docs/spec/amp-iframe-origin-policy.md for details.",o,i.origin,r),"".concat(o,"?").concat("2304262219000")}(t,e,n)||function(t,e){return t.__AMP_DEFAULT_BOOTSTRAP_SUBDOMAIN=t.__AMP_DEFAULT_BOOTSTRAP_SUBDOMAIN||"d-"+ct(t),"https://"+t.__AMP_DEFAULT_BOOTSTRAP_SUBDOMAIN+".".concat(nt.thirdPartyFrameHost,"/").concat("2304262219000","/")+"".concat("frame",".html")}(t)}function ct(t){var e;if(t.crypto&&t.crypto.getRandomValues){var n=new Uint32Array(2);t.crypto.getRandomValues(n),e=String(n[0])+n[1]}else e=String(t.Math.random()).substr(2)+"0";return e}function ut(t){if(t.sandbox&&t.sandbox.supports){for(var e=["allow-top-navigation-by-user-activation","allow-popups-to-escape-sandbox"],n=0;n<e.length;n++){var r=e[n];if(!t.sandbox.supports(r))return void F().info("3p-frame","Iframe doesn't support %s",r)}t.sandbox=e.join(" ")+" "+["allow-forms","allow-modals","allow-pointer-lock","allow-popups","allow-same-origin","allow-scripts"].join(" ")}}function lt(t){return t.data}var st="unlisten";function ft(t,e,n){var r=function(t,e){var n=t.listeningFors;return!n&&e&&(n=t.listeningFors=Object.create(null)),n||null}(t,n);if(!r)return r;var o=r[e];return!o&&n&&(o=r[e]=[]),o||null}function pt(t,e){for(var n=e;n&&n!=n.parent;n=n.parent)if(n==t)return!0;return!1}function ht(t){for(var e={sentinel:st},n=t.length-1;n>=0;n--){var r=t[n];if(!r.frame.contentWindow){t.splice(n,1);var o=r.events;for(var i in o)o[i].splice(0,1/0).forEach((function(t){t(e)}))}}}function vt(t,e,n,r,o,i){I(t.src),I(!t.parentNode),I(n);var a=t.ownerDocument.defaultView;!function(t){t.listeningFors||t.addEventListener("message",(function(e){if(lt(e)){var n=function(t){return"string"==typeof t&&(t="{"==t.charAt(0)?g(t,(function(t){F().warn("IFRAME-HELPER","Postmessage could not be parsed. Is it in a valid JSON format?",t)}))||null:y(t)?function(t){if(!y(t))return null;var e=t.indexOf("{");return p(-1!=e),g(t.substr(e),(function(e){!function(t){var e=v.apply(null,arguments);setTimeout((function(){throw d(e),e}))}(new Error("MESSAGING: Failed to parse message: ".concat(t,"\n").concat(e.message)))}))}(t):null),t}(lt(e));if(n&&n.sentinel){var r=function(t,e,n,r){var o,i=ft(t,e);if(!i)return i;for(var a=0;a<i.length;a++){var c=i[a],u=c.frame.contentWindow;if(u){if(r==u||pt(u,r)){o=c;break}}else setTimeout(ht,0,i)}return o?o.events:null}(t,n.sentinel,e.origin,e.source);if(r){var o=r[n.type];if(o){o=o.slice();for(var i=0;i<o.length;i++)(0,o[i])(n,e.source,e.origin,e)}}}}}))}(a);var c,u=function(t,e,n){for(var r,o=function(t,e){return e?t.getAttribute("data-amp-3p-sentinel"):"amp"}(e,n),i=ft(t,o,!0),a=0;a<i.length;a++){var c=i[a];if(c.frame===e){r=c;break}}return r||(r={frame:e,events:Object.create(null)},i.push(r)),r.events}(a,t,r),l=tt(t.src).origin,s=u[e]||(u[e]=[]),f=function(e,r,a,u){if("amp"==e.sentinel){if(r!=t.contentWindow)return;if(l!=a&&("null"!=a||!i))return}(o||r==t.contentWindow)&&(e.sentinel!=st?n(e,r,a,u):c())};return s.push(f),c=function(){if(f){var t=s.indexOf(f);t>-1&&s.splice(t,1),f=null,s=null,n=null}}}var dt=['<svg viewBox="0 0 72 72"><path fill=currentColor d="M32.29,44.13c7.55,0,11.67-6.25,11.67-11.67c0-0.18,0-0.35-0.01-0.53c0.8-0.58,1.5-1.3,2.05-2.12\n    c-0.74,0.33-1.53,0.55-2.36,0.65c0.85-0.51,1.5-1.31,1.8-2.27c-0.79,0.47-1.67,0.81-2.61,1c-0.75-0.8-1.82-1.3-3-1.3\n    c-2.27,0-4.1,1.84-4.1,4.1c0,0.32,0.04,0.64,0.11,0.94c-3.41-0.17-6.43-1.8-8.46-4.29c-0.35,0.61-0.56,1.31-0.56,2.06\n    c0,1.42,0.72,2.68,1.83,3.42c-0.67-0.02-1.31-0.21-1.86-0.51c0,0.02,0,0.03,0,0.05c0,1.99,1.41,3.65,3.29,4.02\n    c-0.34,0.09-0.71,0.14-1.08,0.14c-0.26,0-0.52-0.03-0.77-0.07c0.52,1.63,2.04,2.82,3.83,2.85c-1.4,1.1-3.17,1.76-5.1,1.76\n    c-0.33,0-0.66-0.02-0.98-0.06C27.82,43.45,29.97,44.13,32.29,44.13"></path></svg>'],mt=function(t){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&e(t,n)}(c,t);var r,i,a=(r=c,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=n(r);if(i){var a=n(this).constructor;t=Reflect.construct(e,arguments,a)}else t=e.apply(this,arguments);return o(this,t)});function c(t){var e;return(e=a.call(this,t)).ny=null,e.TR=null,e}c.createLoaderLogoCallback=function(t){var e,n;return{color:"#1DA1F2",content:(n=(e=t).ownerDocument||e,u&&u.ownerDocument===n||(u=n.createElement("div")),w)(dt)}};var l=c.prototype;return l.buildCallback=function(){this.TR=this.getPlaceholder()},l.preconnectCallback=function(t){var e=N(this.win,"preconnect"),n=this.getAmpDoc();!function(t,e,n,r){var o=at(t,n);r.preload(n,o,"document"),r.preload(n,it("twitter"),"script")}(this.win,0,n,e),e.preload(n,"https://platform.twitter.com/widgets.js","script"),e.url(n,"https://syndication.twitter.com",t),e.url(n,"https://pbs.twimg.com",t),e.url(n,"https://cdn.syndication.twimg.com",t)},l.isLayoutSupported=function(t){return function(t){return"fixed"==t||"fixed-height"==t||"responsive"==t||"fill"==t||"flex-item"==t||"fluid"==t||"intrinsic"==t}(t)},l.firstLayoutCompleted=function(){},l.layoutCallback=function(){var t=this,e=function(t,e,n,r){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},i=o.allowFullscreen,a=void 0!==i&&i,c=o.initialIntersection;I(void 0===e.isConnected||!0===e.isConnected);var u=ot(t,e,n,r);c&&(u._context.initialIntersection=c);var l=t.document.createElement("iframe");rt[u.type]||(rt[u.type]=0),rt[u.type]+=1;var s=e.getAmpDoc(),f=at(t,s),p=tt(f).hostname,h=JSON.stringify({host:p,bootstrap:it(u.type),type:u.type,count:rt[u.type],attributes:u});return l.src=f,l.ampLocation=tt(f),l.name=h,u.width&&(l.width=u.width),u.height&&(l.height=u.height),u.title&&(l.title=u.title),a&&l.setAttribute("allowfullscreen","true"),l.setAttribute("scrolling","no"),G(l,"border","none"),l.onload=function(){this.readyState="complete"},l.setAttribute("allow","sync-xhr 'none';"),["facebook"].includes(n)||ut(l),l.setAttribute("data-amp-3p-sentinel",u._context.sentinel),l}(this.win,this.element,"twitter",null,{allowFullscreen:!0});return e.title=this.element.title||"Twitter",e.classList.add("i-amphtml-fill-content"),this.FR(),vt(e,"embed-size",(function(e){t.MR(e.height)}),!0),vt(e,"no-content",(function(){t.NR()}),!0),this.element.appendChild(e),this.ny=e,this.loadPromise(e)},l.FR=function(){var t,e=this;this.measureMutateElement((function(){t=e.element.getBoundingClientRect().height}),(function(){e.forceChangeHeight(t)}))},l.MR=function(t){var e=this;this.mutateElement((function(){e.toggleLoading(!1),e.TR&&e.togglePlaceholder(!1),e.forceChangeHeight(t)}))},l.NR=function(){var t=this,e=this.getFallback(),n=e||this.TR;this.mutateElement((function(){t.toggleLoading(!1),e&&(t.togglePlaceholder(!1),t.toggleFallback(!0)),n&&t.forceChangeHeight(n.offsetHeight)}))},l.unlayoutOnPause=function(){return!0},l.unlayoutCallback=function(){var t,e;return this.ny&&(null===(e=(t=this.ny).parentElement)||void 0===e||e.removeChild(t),this.ny=null),!0},l.mutatedAttributesCallback=function(t){this.ny&&null!=t["data-tweetid"]&&(this.unlayoutCallback(),this.toggleLoading(!0,!0),this.layoutCallback())},c}(t.BaseElement);t.registerElement("amp-twitter",mt)}();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */}});
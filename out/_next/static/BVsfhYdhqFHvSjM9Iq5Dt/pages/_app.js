(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{211:function(e,t,n){__NEXT_REGISTER_PAGE("/_app",function(){return e.exports=n(244),{page:e.exports.default}})},212:function(e,t,n){"use strict";var r=n(20),o=n(4);Object.defineProperty(t,"__esModule",{value:!0}),t.createUrl=E,t.Container=t.default=void 0;var a=o(n(48)),u=o(n(49)),l=o(n(213)),i=o(n(7)),c=o(n(8)),f=o(n(16)),s=o(n(17)),p=o(n(18)),h=o(n(13)),m=r(n(0)),d=o(n(31)),y=n(25),v=n(41),b=function(e){function t(){return(0,i.default)(this,t),(0,f.default)(this,(0,s.default)(t).apply(this,arguments))}var n;return(0,p.default)(t,e),(0,c.default)(t,[{key:"getChildContext",value:function(){return{headManager:this.props.headManager,router:(0,v.makePublicRouterInstance)(this.props.router)}}},{key:"componentDidCatch",value:function(e){throw e}},{key:"render",value:function(){var e=this.props,t=e.router,n=e.Component,r=e.pageProps,o=E(t);return m.default.createElement(g,null,m.default.createElement(n,(0,l.default)({},r,{url:o})))}}],[{key:"getInitialProps",value:(n=(0,u.default)(a.default.mark(function e(t){var n,r,o;return a.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.Component,t.router,r=t.ctx,e.next=3,(0,y.loadGetInitialProps)(n,r);case 3:return o=e.sent,e.abrupt("return",{pageProps:o});case 5:case"end":return e.stop()}},e,this)})),function(e){return n.apply(this,arguments)})}]),t}(m.Component);t.default=b,(0,h.default)(b,"childContextTypes",{headManager:d.default.object,router:d.default.object});var g=function(e){function t(){return(0,i.default)(this,t),(0,f.default)(this,(0,s.default)(t).apply(this,arguments))}return(0,p.default)(t,e),(0,c.default)(t,[{key:"componentDidMount",value:function(){this.scrollToHash()}},{key:"componentDidUpdate",value:function(){this.scrollToHash()}},{key:"scrollToHash",value:function(){var e=window.location.hash;if(e=!!e&&e.substring(1)){var t=document.getElementById(e);t&&setTimeout(function(){return t.scrollIntoView()},0)}}},{key:"render",value:function(){return this.props.children}}]),t}(m.Component);t.Container=g;var w=(0,y.execOnce)(function(){0});function E(e){var t=e.pathname,n=e.asPath,r=e.query;return{get query(){return w(),r},get pathname(){return w(),t},get asPath(){return w(),n},back:function(){w(),e.back()},push:function(t,n){return w(),e.push(t,n)},pushTo:function(t,n){w();var r=n?t:null,o=n||t;return e.push(r,o)},replace:function(t,n){return w(),e.replace(t,n)},replaceTo:function(t,n){w();var r=n?t:null,o=n||t;return e.replace(r,o)}}}},213:function(e,t,n){var r=n(80);function o(){return e.exports=o=r||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}e.exports=o},214:function(e,t,n){"use strict";var r=n(20),o=n(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(215)),u=o(n(52)),l=o(n(7)),i=o(n(8)),c=o(n(16)),f=o(n(17)),s=o(n(18)),p=o(n(54)),h=o(n(13)),m=n(111),d=r(n(0)),y=(o(n(31)),r(n(41))),v=n(25);var b=function(e){function t(){var e,n,r,o,a,i;(0,l.default)(this,t);for(var s=arguments.length,d=new Array(s),b=0;b<s;b++)d[b]=arguments[b];return n=(0,c.default)(this,(e=(0,f.default)(t)).call.apply(e,[this].concat(d))),(0,h.default)((0,p.default)((0,p.default)(n)),"formatUrls",(r=function(e,t){return{href:e&&"object"===(0,u.default)(e)?(0,m.format)(e):e,as:t&&"object"===(0,u.default)(t)?(0,m.format)(t):t}},o=null,a=null,i=null,function(e,t){if(e===o&&t===a)return i;var n=r(e,t);return o=e,a=t,i=n,n})),(0,h.default)((0,p.default)((0,p.default)(n)),"linkClicked",function(e){var t=e.currentTarget,r=t.nodeName,o=t.target;if("A"!==r||!(o&&"_self"!==o||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var a=n.formatUrls(n.props.href,n.props.as),u=a.href,l=a.as;if(function(e){var t=(0,m.parse)(e,!1,!0),n=(0,m.parse)((0,v.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(u)){var i=window.location.pathname;u=(0,m.resolve)(i,u),l=l?(0,m.resolve)(i,l):u,e.preventDefault();var c=n.props.scroll;null==c&&(c=l.indexOf("#")<0);var f=n.props.replace?"replace":"push";y.default[f](u,l,{shallow:n.props.shallow}).then(function(e){e&&c&&(window.scrollTo(0,0),document.body.focus())}).catch(function(e){n.props.onError&&n.props.onError(e)})}}}),n}return(0,s.default)(t,e),(0,i.default)(t,[{key:"componentDidMount",value:function(){this.prefetch()}},{key:"componentDidUpdate",value:function(e){(0,a.default)(this.props.href)!==(0,a.default)(e.href)&&this.prefetch()}},{key:"prefetch",value:function(){if(this.props.prefetch&&"undefined"!=typeof window){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as).href,n=(0,m.resolve)(e,t);y.default.prefetch(n)}}},{key:"render",value:function(){var e=this,t=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,o=n.as;"string"==typeof t&&(t=d.default.createElement("a",null,t));var a=d.Children.only(t),u={onClick:function(t){a.props&&"function"==typeof a.props.onClick&&a.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==a.type||"href"in a.props)||(u.href=o||r),u.href&&"undefined"!=typeof __NEXT_DATA__&&__NEXT_DATA__.nextExport&&(u.href=(0,y._rewriteUrlForNextExport)(u.href)),d.default.cloneElement(a,u)}}]),t}(d.Component);t.default=b},215:function(e,t,n){e.exports=n(216)},216:function(e,t,n){var r=n(1),o=r.JSON||(r.JSON={stringify:JSON.stringify});e.exports=function(e){return o.stringify.apply(o,arguments)}},244:function(e,t,n){"use strict";n.r(t);var r=n(26),o=n.n(r),a=n(0),u=n.n(a),l=n(81),i=n.n(l),c=n(42),f=n.n(c),s=function(e){return u.a.createElement("nav",null,u.a.createElement(f.a,{href:"/"},u.a.createElement("a",{className:"logo"},"Charmaine Yabsley")),u.a.createElement("ul",{className:"main-menu__items"},u.a.createElement("li",null,u.a.createElement(f.a,{as:"/Articles",href:"/Articles"},u.a.createElement("a",null,"Articles"))),u.a.createElement("li",null,u.a.createElement(f.a,{as:"/Books",href:"/Books"},u.a.createElement("a",null,"Books"))),u.a.createElement("li",null,u.a.createElement(f.a,{as:"/Content",href:"/content"},u.a.createElement("a",null,"Content")))),u.a.createElement("section",{className:"main-menu__mobile"},u.a.createElement("div",{className:"main-menu__mobile-toggle"})))},p=n(19),h=n.n(p),m=(n(229),function(){return u.a.createElement(h.a,null,u.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),u.a.createElement("meta",{charSet:"utf-8"}),u.a.createElement("title",null,"Cyte"))}),d=function(){return u.a.createElement("footer",null,u.a.createElement("ul",null,u.a.createElement("li",null,"Email charmaine.yabsley[at]gmail.com"),u.a.createElement("li",null,"Follow ",u.a.createElement("a",{href:"https://twitter.com/cyabsley",target:"_blank"},"@CYabsley")),u.a.createElement("li",null,"Network ",u.a.createElement("a",{href:"http://au.linkedin.com/pub/charmaine-yabsley/3/928/177",target:"_blank"},"LinkedIn"))),u.a.createElement("p",{className:"copyright"},"Charmaine Yabsley © ",(new Date).getFullYear()))};function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e,t){return!t||"object"!==y(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function w(e,t){return(w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var E=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),b(this,g(t).apply(this,arguments))}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&w(e,t)}(t,u.a.Component),n=t,(r=[{key:"render",value:function(){return u.a.createElement(u.a.Fragment,null,u.a.createElement(m,null),u.a.createElement(s,null),this.props.children,u.a.createElement(d,null))}}])&&v(n.prototype,r),o&&v(n,o),t}();function _(e){return(_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function k(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function x(e,t,n,r,o,a,u){try{var l=e[a](u),i=l.value}catch(e){return void n(e)}l.done?t(i):Promise.resolve(i).then(r,o)}function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function C(e,t){return!t||"object"!==_(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function P(e){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function j(e,t){return(j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.d(t,"default",function(){return S});var S=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),C(this,P(t).apply(this,arguments))}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&j(e,t)}(t,i.a),n=t,r=[{key:"loadData",value:function(){return console.log("d"),fetch("https://spreadsheets.google.com/feeds/list/1USp6UQtQqJYWlwPj0tZaIDnbsL51NSHCes09cFDDum0/od6/public/values?alt=json").then(function(e){return e.json()})}},{key:"render",value:function(){var e=this.props,t=e.Component,n=e.pageProps;return u.a.createElement(l.Container,null,u.a.createElement(E,null,u.a.createElement(t,n)))}}],a=[{key:"getInitialProps",value:function(){var e,t=(e=o.a.mark(function e(t){var n,r,a,u;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.Component,r=t.ctx,a={},!n.getInitialProps){e.next=7;break}return e.next=5,n.getInitialProps(r);case 5:a=e.sent,console.log("ctx",r);case 7:return u=fetch("https://spreadsheets.google.com/feeds/list/1USp6UQtQqJYWlwPj0tZaIDnbsL51NSHCes09cFDDum0/od6/public/values?alt=json").then(function(e){return e.json()}).then(function(e){u=e.feed.entry.filter(function(e){return e.tags=e.gsx$tags.$t.split(",").map(function(e){return e.trim()}),"1"===e.gsx$islive.$t});k(new Set(u.map(function(e){return e.gsx$itemtype.$t}))),k(new Set(u.map(function(e){return e.gsx$title.$t}))).filter(function(e){return""!=e});var t=[];u.map(function(e){return e.gsx$tags.$t.split(",")}).filter(function(e){return""!=e}).forEach(function(e){e.forEach(function(e){t.push(e.trim())})});k(new Set(t));console.log("items",u.length)}),e.abrupt("return",{pageProps:a});case 9:case"end":return e.stop()}},e,this)}),function(){var t=this,n=arguments;return new Promise(function(r,o){var a=e.apply(t,n);function u(e){x(a,r,o,u,l,"next",e)}function l(e){x(a,r,o,u,l,"throw",e)}u(void 0)})});return function(e){return t.apply(this,arguments)}}()}],r&&O(n.prototype,r),a&&O(n,a),t}()},26:function(e,t,n){e.exports=n(70)},42:function(e,t,n){e.exports=n(214)},81:function(e,t,n){e.exports=n(212)}},[[211,1,0,9]]]);
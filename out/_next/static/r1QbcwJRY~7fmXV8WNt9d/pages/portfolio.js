(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{115:function(t,e,n){t.exports=n(39)},236:function(t,e,n){__NEXT_REGISTER_PAGE("/portfolio",function(){return t.exports=n(237),{page:t.exports.default}})},237:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),i=n(31),l=n.n(i),o=n(115),s=n(42),u=Object(o.withRouter)(function(t){return a.a.createElement(a.a.Fragment,null,a.a.createElement("header",t,a.a.createElement("h1",null,t.router.query.title,"s")),a.a.createElement("div",{className:"wide row"},a.a.createElement(l.a,null,a.a.createElement("title",null,"Cyte - Por ",t.router.query.title)),a.a.createElement(s.a,t)))});e.default=u},40:function(t,e,n){"use strict";n.r(e),e.default=function(t,e){return e=e||{},new Promise(function(n,r){var a=new XMLHttpRequest;for(var i in a.open(e.method||"get",t,!0),e.headers)a.setRequestHeader(i,e.headers[i]);function l(){var t,e=[],n=[],r={};return a.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,function(a,i,l){e.push(i=i.toLowerCase()),n.push([i,l]),r[i]=(t=r[i])?t+","+l:l}),{ok:2==(a.status/100|0),status:a.status,statusText:a.statusText,url:a.responseURL,clone:l,text:function(){return Promise.resolve(a.responseText)},json:function(){return Promise.resolve(a.responseText).then(JSON.parse)},blob:function(){return Promise.resolve(new Blob([a.response]))},headers:{keys:function(){return e},entries:function(){return n},get:function(t){return r[t.toLowerCase()]},has:function(t){return t.toLowerCase()in r}}}}a.withCredentials="include"==e.credentials,a.onload=function(){n(l())},a.onerror=r,a.send(e.body||null)})}},41:function(t,e,n){t.exports=window.fetch||(window.fetch=n(40).default||n(40))},42:function(t,e,n){"use strict";var r=n(0),a=n.n(r),i=(n(25),n(41)),l=n.n(i),o=function(t){var e=t.gsx$link.$t.length>0?a.a.createElement("a",{className:"link",href:t.gsx$link.$t,target:"_blank"}):"Available on request",n=new Date(t.gsx$datepublished.$t).getFullYear();return a.a.createElement("article",{key:t.id},e,a.a.createElement("div",{className:"image-holder"},a.a.createElement("img",{src:"",alt:t.gsx$heading.$t})),a.a.createElement("div",{className:"details"},a.a.createElement("h2",null,t.gsx$heading.$t),a.a.createElement("h3",null,t.gsx$title.$t," ",a.a.createElement("time",null,n)),t.tags.length&&a.a.createElement("div",{className:"tags"},t.tags.map(function(t,e){return t.length>1&&a.a.createElement("span",{className:"tag",key:e},t)})),a.a.createElement("p",null,t.gsx$description.$t)))};function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(){return(u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function c(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function f(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function p(t,e){return!e||"object"!==s(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function m(t){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function h(t,e){return(h=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var y=[],g="",d=function(t){function e(t){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(n=p(this,m(e).call(this,t))).state={loading:"initial",filterByTitle:"",filterByTag:"",sortByDate:"desc"},n}var n,r,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&h(t,e)}(e,a.a.Component),n=e,(r=[{key:"loadData",value:function(){return l()("https://spreadsheets.google.com/feeds/list/1USp6UQtQqJYWlwPj0tZaIDnbsL51NSHCes09cFDDum0/od6/public/values?alt=json").then(function(t){return t.json()})}},{key:"componentDidMount",value:function(){var t=this;this.setState({loading:"true"}),this.loadData().then(function(e){y=e.feed.entry.filter(function(t){return t.tags=t.gsx$tags.$t.split(",").map(function(t){return t.trim()}),"1"===t.gsx$islive.$t});var n=c(new Set(y.map(function(t){return t.gsx$itemtype.$t}))),r=c(new Set(y.map(function(t){return t.gsx$title.$t}))).filter(function(t){return""!=t}),a=[];y.map(function(t){return t.gsx$tags.$t.split(",")}).filter(function(t){return""!=t}).forEach(function(t){t.forEach(function(t){a.push(t.trim())})});var i=c(new Set(a));t.setState({itemTypes:n,titles:r,loading:"false",tags:i})})}},{key:"handleTitleFilter",value:function(t){"all"!==t?this.setState({filterByTitle:t}):this.setState({filterByTitle:""})}},{key:"handleTagFilter",value:function(t){"all"!==t?this.setState({filterByTag:t}):this.setState({filterByTag:""})}},{key:"getFilteredItems",value:function(){var t=this;g=this.props.router?this.props.router.query.title:"";var e=y,n=this.props.router?this.props.router.query.title:null;return g&&(e=e.filter(function(t){return t.gsx$itemtype.$t===n})),this.state.filterByTitle&&"Book"!==g&&(console.log(this.state.filterByTitle),e=e.filter(function(e){return e.gsx$title.$t===t.state.filterByTitle})),this.state.filterByTag&&"Book"!==g&&(e=e.filter(function(e){return e.tags.some(function(e){return e===t.state.filterByTag})})),e=e.sort(function(t,e){return new Date(e.gsx$datepublished.$t)-new Date(t.gsx$datepublished.$t)}),console.log(e),e}},{key:"render",value:function(){var t=this;if("initial"===this.state.loading)return a.a.createElement("h2",null,"Intializing...");if("true"===this.state.loading)return a.a.createElement("h2",null,"Loading...");var e=this.getFilteredItems(),n=[];n=this.props.router&&"Book"===this.props.router.query.title?null:this.state.titles;var r=[];return r=this.props.router&&"Book"===this.props.router.query.title?null:this.state.tags,a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"filter-holder"},n&&a.a.createElement("section",null,a.a.createElement("p",null,"Filter by title:"),a.a.createElement("div",{className:"span-col-4"},n&&n.map(function(e,n){return a.a.createElement("button",{onClick:function(){t.handleTitleFilter(e)},key:n,className:e===t.state.filterByTitle?"active":""},e)})),a.a.createElement("button",{onClick:function(){t.handleTitleFilter("all")},className:"clear-filters ".concat("all"===this.state.filterByTitle?"active":"")},"Show all")),r&&a.a.createElement("section",null,a.a.createElement("p",null,"Filter by tags:"),a.a.createElement("div",{className:"span-col-4"},r&&r.map(function(e,n){return a.a.createElement("button",{onClick:function(){t.handleTagFilter(e)},key:n,className:e===t.state.filterByTitle?"active":""},e)})),a.a.createElement("button",{onClick:function(){t.handleTagFilter("all")},className:"clear-filters ".concat("all"===this.state.filterByTitle?"active":"")},"Show all"))),a.a.createElement("section",{className:"grid items"},e.map(function(t,e){return a.a.createElement(o,u({},t,{key:e}))})))}}])&&f(n.prototype,r),i&&f(n,i),e}();e.a=d}},[[236,1,0]]]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2226],{217:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/portfolio/home-slider",function(){return t(65416)}])},64689:function(e,n,t){"use strict";t.r(n);var r=t(85893),i=(t(41664),t(98595));n.default=function(e){var n=e.img,t=(e.title,e.desc,e.link,e.classes);e.btn,e.btnClass;return(0,r.jsx)("div",{children:(0,r.jsx)("div",{className:"home ".concat(n," ").concat(t||"text-center"),children:(0,r.jsx)(i.Z,{})})})}},65416:function(e,n,t){"use strict";t.r(n);var r=t(85893),i=(t(67294),t(85310)),a=t(98595),s=t(10267),o=t(51252),c=t(56941),u=t(91121),l=t(46066),f=t(64689),d=[{classes:" p-center text-center",img:"home7",title:"welcome to fashion",desc:"women fashion",link:"#"},{classes:" p-center text-center",img:"home8",title:"welcome to fashion",desc:"men fashion",link:"#"}];n.default=function(){return(0,r.jsxs)(i.Z,{parent:"home",title:"elements",subTitle:"slider",children:[(0,r.jsx)(a.Z,{children:(0,r.jsx)("section",{className:"section-b-space",children:(0,r.jsx)(l.Z,{className:"slide-1 home-slider",children:d.map((function(e,n){return(0,r.jsx)(f.default,{img:e.img,link:e.link,title:e.title,desc:e.desc,classes:e.classes},n)}))})})}),(0,r.jsx)(a.Z,{className:"section-b-space element-detail",children:(0,r.jsx)(s.Z,{children:(0,r.jsx)(o.Z,{children:(0,r.jsxs)(c.Z,{children:[(0,r.jsx)("h5",{className:"card-header",children:"Classes"}),(0,r.jsxs)(u.Z,{children:[(0,r.jsx)("h5",{className:"card-title",children:"For Parallax Image - .parallax"}),(0,r.jsx)("h5",{children:"contain-align - .text-start, .text-center, .text-end"}),(0,r.jsx)("h5",{children:"contain-position - .p-left, .p-center, .p-right"})]})]})})})})]})}},77058:function(e,n,t){"use strict";t.d(n,{$:function(){return y}});var r=t(83878);var i=t(81563),a=t(25267);function s(e,n){return(0,r.Z)(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,i,a,s,o=[],c=!0,u=!1;try{if(a=(t=t.call(e)).next,0===n){if(Object(t)!==t)return;c=!1}else for(;!(c=(r=a.call(t)).done)&&(o.push(r.value),o.length!==n);c=!0);}catch(l){u=!0,i=l}finally{try{if(!c&&null!=t.return&&(s=t.return(),Object(s)!==s))return}finally{if(u)throw i}}return o}}(e,n)||(0,i.Z)(e,n)||(0,a.Z)()}var o=t(4942),c=t(67294),u=t(57715);function l(){if(console&&console.warn){for(var e,n=arguments.length,t=new Array(n),r=0;r<n;r++)t[r]=arguments[r];"string"===typeof t[0]&&(t[0]="react-i18next:: ".concat(t[0])),(e=console).warn.apply(e,t)}}var f={};function d(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];"string"===typeof n[0]&&f[n[0]]||("string"===typeof n[0]&&(f[n[0]]=new Date),l.apply(void 0,n))}function g(e,n,t){e.loadNamespaces(n,(function(){if(e.isInitialized)t();else{e.on("initialized",(function n(){setTimeout((function(){e.off("initialized",n)}),0),t()}))}}))}function p(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.languages[0],i=!!n.options&&n.options.fallbackLng,a=n.languages[n.languages.length-1];if("cimode"===r.toLowerCase())return!0;var s=function(e,t){var r=n.services.backendConnector.state["".concat(e,"|").concat(t)];return-1===r||2===r};return!(t.bindI18n&&t.bindI18n.indexOf("languageChanging")>-1&&n.services.backendConnector.backend&&n.isLanguageChangingTo&&!s(n.isLanguageChangingTo,e))&&(!!n.hasResourceBundle(r,e)||(!(n.services.backendConnector.backend&&(!n.options.resources||n.options.partialBundledLanguages))||!(!s(r,e)||i&&!s(a,e))))}function h(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!n.languages||!n.languages.length)return d("i18n.languages were undefined or empty",n.languages),!0;var r=void 0!==n.options.ignoreJSONStructure;return r?n.hasLoadedNamespace(e,{precheck:function(n,r){if(t.bindI18n&&t.bindI18n.indexOf("languageChanging")>-1&&n.services.backendConnector.backend&&n.isLanguageChangingTo&&!r(n.isLanguageChangingTo,e))return!1}}):p(e,n,t)}function m(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function v(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?m(Object(t),!0).forEach((function(n){(0,o.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var b=function(e,n){var t=(0,c.useRef)();return(0,c.useEffect)((function(){t.current=n?t.current:e}),[e,n]),t.current};function y(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=n.i18n,r=(0,c.useContext)(u.OO)||{},i=r.i18n,a=r.defaultNS,o=t||i||(0,u.nI)();if(o&&!o.reportNamespaces&&(o.reportNamespaces=new u.zv),!o){d("You will need to pass in an i18next instance by using initReactI18next");var l=function(e){return Array.isArray(e)?e[e.length-1]:e},f=[l,{},!1];return f.t=l,f.i18n={},f.ready=!1,f}o.options.react&&void 0!==o.options.react.wait&&d("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var p=v(v(v({},(0,u.JP)()),o.options.react),n),m=p.useSuspense,y=p.keyPrefix,x=e||a||o.options&&o.options.defaultNS;x="string"===typeof x?[x]:x||["translation"],o.reportNamespaces.addUsedNamespaces&&o.reportNamespaces.addUsedNamespaces(x);var j=(o.isInitialized||o.initializedStoreOnce)&&x.every((function(e){return h(e,o,p)}));function w(){return o.getFixedT(null,"fallback"===p.nsMode?x:x[0],y)}var N=(0,c.useState)(w),O=s(N,2),k=O[0],Z=O[1],C=x.join(),P=b(C),E=(0,c.useRef)(!0);(0,c.useEffect)((function(){var e=p.bindI18n,n=p.bindI18nStore;function t(){E.current&&Z(w)}return E.current=!0,j||m||g(o,x,(function(){E.current&&Z(w)})),j&&P&&P!==C&&E.current&&Z(w),e&&o&&o.on(e,t),n&&o&&o.store.on(n,t),function(){E.current=!1,e&&o&&e.split(" ").forEach((function(e){return o.off(e,t)})),n&&o&&n.split(" ").forEach((function(e){return o.store.off(e,t)}))}}),[o,C]);var S=(0,c.useRef)(!0);(0,c.useEffect)((function(){E.current&&!S.current&&Z(w),S.current=!1}),[o,y]);var T=[k,o,j];if(T.t=k,T.i18n=o,T.ready=j,j)return T;if(!j&&!m)return T;throw new Promise((function(e){g(o,x,(function(){e()}))}))}},56941:function(e,n,t){"use strict";var r=t(87462),i=t(63366),a=t(67294),s=t(45697),o=t.n(s),c=t(94184),u=t.n(c),l=t(23663),f=["className","cssModule","color","body","inverse","outline","tag","innerRef"],d={tag:l.iC,inverse:o().bool,color:o().string,body:o().bool,outline:o().bool,className:o().string,cssModule:o().object,innerRef:o().oneOfType([o().object,o().string,o().func])},g=function(e){var n=e.className,t=e.cssModule,s=e.color,o=e.body,c=e.inverse,d=e.outline,g=e.tag,p=e.innerRef,h=(0,i.Z)(e,f),m=(0,l.mx)(u()(n,"card",!!c&&"text-white",!!o&&"card-body",!!s&&(d?"border":"bg")+"-"+s),t);return a.createElement(g,(0,r.Z)({},h,{className:m,ref:p}))};g.propTypes=d,g.defaultProps={tag:"div"},n.Z=g},91121:function(e,n,t){"use strict";var r=t(87462),i=t(63366),a=t(67294),s=t(45697),o=t.n(s),c=t(94184),u=t.n(c),l=t(23663),f=["className","cssModule","innerRef","tag"],d={tag:l.iC,className:o().string,cssModule:o().object,innerRef:o().oneOfType([o().object,o().string,o().func])},g=function(e){var n=e.className,t=e.cssModule,s=e.innerRef,o=e.tag,c=(0,i.Z)(e,f),d=(0,l.mx)(u()(n,"card-body"),t);return a.createElement(o,(0,r.Z)({},c,{className:d,ref:s}))};g.propTypes=d,g.defaultProps={tag:"div"},n.Z=g}},function(e){e.O(0,[7971,5744,6066,5254,1549,8417,5310,9774,2888,179],(function(){return n=217,e(e.s=n);var n}));var n=e.O();_N_E=n}]);
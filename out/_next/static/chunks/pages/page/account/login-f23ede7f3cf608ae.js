(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3200],{60624:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/page/account/login",function(){return r(64921)}])},64921:function(e,n,r){"use strict";r.r(n);var t=r(85893),o=(r(67294),r(85310)),i=r(98595),a=r(10267),s=r(51252),c=r(15538),l=r(67954),u=r(609);n.default=function(){return(0,t.jsx)(o.Z,{parent:"home",title:"login",children:(0,t.jsx)("section",{className:"login-page section-b-space",children:(0,t.jsx)(i.Z,{children:(0,t.jsxs)(a.Z,{children:[(0,t.jsxs)(s.Z,{lg:"6",children:[(0,t.jsx)("h3",{children:"Login"}),(0,t.jsx)("div",{className:"theme-card",children:(0,t.jsxs)(c.Z,{className:"theme-form",children:[(0,t.jsxs)("div",{className:"form-group",children:[(0,t.jsx)(l.Z,{className:"form-label",for:"email",children:"Email"}),(0,t.jsx)(u.Z,{type:"text",className:"form-control",id:"email",placeholder:"Email",required:""})]}),(0,t.jsxs)("div",{className:"form-group",children:[(0,t.jsx)(l.Z,{className:"form-label",for:"review",children:"Password"}),(0,t.jsx)(u.Z,{type:"password",className:"form-control",id:"review",placeholder:"Enter your password",required:""})]}),(0,t.jsx)("a",{href:"#",className:"btn btn-solid",children:"Login"})]})})]}),(0,t.jsxs)(s.Z,{lg:"6",className:"right-login",children:[(0,t.jsx)("h3",{children:"New Customer"}),(0,t.jsxs)("div",{className:"theme-card authentication-right",children:[(0,t.jsx)("h6",{className:"title-font",children:"Create A Account"}),(0,t.jsx)("p",{children:"Sign up for a free account at our store. Registration is quick and easy. It allows you to be able to order from our shop. To start shopping click register."}),(0,t.jsx)("a",{href:"#",className:"btn btn-solid",children:"Create an Account"})]})]})]})})})})}},77058:function(e,n,r){"use strict";r.d(n,{$:function(){return y}});var t=r(83878);var o=r(81563),i=r(25267);function a(e,n){return(0,t.Z)(e)||function(e,n){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var t,o,i,a,s=[],c=!0,l=!1;try{if(i=(r=r.call(e)).next,0===n){if(Object(r)!==r)return;c=!1}else for(;!(c=(t=i.call(r)).done)&&(s.push(t.value),s.length!==n);c=!0);}catch(u){l=!0,o=u}finally{try{if(!c&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(l)throw o}}return s}}(e,n)||(0,o.Z)(e,n)||(0,i.Z)()}var s=r(4942),c=r(67294),l=r(57715);function u(){if(console&&console.warn){for(var e,n=arguments.length,r=new Array(n),t=0;t<n;t++)r[t]=arguments[t];"string"===typeof r[0]&&(r[0]="react-i18next:: ".concat(r[0])),(e=console).warn.apply(e,r)}}var f={};function d(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];"string"===typeof n[0]&&f[n[0]]||("string"===typeof n[0]&&(f[n[0]]=new Date),u.apply(void 0,n))}function g(e,n,r){e.loadNamespaces(n,(function(){if(e.isInitialized)r();else{e.on("initialized",(function n(){setTimeout((function(){e.off("initialized",n)}),0),r()}))}}))}function h(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},t=n.languages[0],o=!!n.options&&n.options.fallbackLng,i=n.languages[n.languages.length-1];if("cimode"===t.toLowerCase())return!0;var a=function(e,r){var t=n.services.backendConnector.state["".concat(e,"|").concat(r)];return-1===t||2===t};return!(r.bindI18n&&r.bindI18n.indexOf("languageChanging")>-1&&n.services.backendConnector.backend&&n.isLanguageChangingTo&&!a(n.isLanguageChangingTo,e))&&(!!n.hasResourceBundle(t,e)||(!(n.services.backendConnector.backend&&(!n.options.resources||n.options.partialBundledLanguages))||!(!a(t,e)||o&&!a(i,e))))}function p(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!n.languages||!n.languages.length)return d("i18n.languages were undefined or empty",n.languages),!0;var t=void 0!==n.options.ignoreJSONStructure;return t?n.hasLoadedNamespace(e,{precheck:function(n,t){if(r.bindI18n&&r.bindI18n.indexOf("languageChanging")>-1&&n.services.backendConnector.backend&&n.isLanguageChangingTo&&!t(n.isLanguageChangingTo,e))return!1}}):h(e,n,r)}function m(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function b(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?m(Object(r),!0).forEach((function(n){(0,s.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}var v=function(e,n){var r=(0,c.useRef)();return(0,c.useEffect)((function(){r.current=n?r.current:e}),[e,n]),r.current};function y(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.i18n,t=(0,c.useContext)(l.OO)||{},o=t.i18n,i=t.defaultNS,s=r||o||(0,l.nI)();if(s&&!s.reportNamespaces&&(s.reportNamespaces=new l.zv),!s){d("You will need to pass in an i18next instance by using initReactI18next");var u=function(e){return Array.isArray(e)?e[e.length-1]:e},f=[u,{},!1];return f.t=u,f.i18n={},f.ready=!1,f}s.options.react&&void 0!==s.options.react.wait&&d("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var h=b(b(b({},(0,l.JP)()),s.options.react),n),m=h.useSuspense,y=h.keyPrefix,w=e||i||s.options&&s.options.defaultNS;w="string"===typeof w?[w]:w||["translation"],s.reportNamespaces.addUsedNamespaces&&s.reportNamespaces.addUsedNamespaces(w);var x=(s.isInitialized||s.initializedStoreOnce)&&w.every((function(e){return p(e,s,h)}));function j(){return s.getFixedT(null,"fallback"===h.nsMode?w:w[0],y)}var N=(0,c.useState)(j),O=a(N,2),k=O[0],C=O[1],E=w.join(),Z=v(E),P=(0,c.useRef)(!0);(0,c.useEffect)((function(){var e=h.bindI18n,n=h.bindI18nStore;function r(){P.current&&C(j)}return P.current=!0,x||m||g(s,w,(function(){P.current&&C(j)})),x&&Z&&Z!==E&&P.current&&C(j),e&&s&&s.on(e,r),n&&s&&s.store.on(n,r),function(){P.current=!1,e&&s&&e.split(" ").forEach((function(e){return s.off(e,r)})),n&&s&&n.split(" ").forEach((function(e){return s.store.off(e,r)}))}}),[s,E]);var S=(0,c.useRef)(!0);(0,c.useEffect)((function(){P.current&&!S.current&&C(j),S.current=!1}),[s,y]);var z=[k,s,x];if(z.t=k,z.i18n=s,z.ready=x,x)return z;if(!x&&!m)return z;throw new Promise((function(e){g(s,w,(function(){e()}))}))}},67954:function(e,n,r){"use strict";var t=r(87462),o=r(63366),i=r(67294),a=r(45697),s=r.n(a),c=r(94184),l=r.n(c),u=r(23663),f=["className","cssModule","hidden","widths","tag","check","size","for"],d=s().oneOfType([s().number,s().string]),g=s().oneOfType([s().bool,s().string,s().number,s().shape({size:d,order:d,offset:d})]),h={children:s().node,hidden:s().bool,check:s().bool,size:s().string,for:s().string,tag:u.iC,className:s().string,cssModule:s().object,xs:g,sm:g,md:g,lg:g,xl:g,widths:s().array},p={tag:"label",widths:["xs","sm","md","lg","xl"]},m=function(e,n,r){return!0===r||""===r?e?"col":"col-"+n:"auto"===r?e?"col-auto":"col-"+n+"-auto":e?"col-"+r:"col-"+n+"-"+r},b=function(e){var n=e.className,r=e.cssModule,a=e.hidden,s=e.widths,c=e.tag,d=e.check,g=e.size,h=e.for,p=(0,o.Z)(e,f),b=[];s.forEach((function(n,t){var o=e[n];if(delete p[n],o||""===o){var i,a=!t;if((0,u.Kn)(o)){var s,c=a?"-":"-"+n+"-";i=m(a,n,o.size),b.push((0,u.mx)(l()(((s={})[i]=o.size||""===o.size,s["order"+c+o.order]=o.order||0===o.order,s["offset"+c+o.offset]=o.offset||0===o.offset,s))),r)}else i=m(a,n,o),b.push(i)}}));var v=(0,u.mx)(l()(n,!!a&&"sr-only",!!d&&"form-check-label",!!g&&"col-form-label-"+g,b,!!b.length&&"col-form-label"),r);return i.createElement(c,(0,t.Z)({htmlFor:h},p,{className:v}))};b.propTypes=h,b.defaultProps=p,n.Z=b}},function(e){e.O(0,[7971,5744,5254,1549,8417,5310,9774,2888,179],(function(){return n=60624,e(e.s=n);var n}));var n=e.O();_N_E=n}]);
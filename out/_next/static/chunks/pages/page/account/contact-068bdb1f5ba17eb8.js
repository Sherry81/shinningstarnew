(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2043],{79465:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/page/account/contact",function(){return r(32202)}])},32202:function(e,n,r){"use strict";r.r(n);var t=r(85893),a=(r(67294),r(85310)),s=r(98595),o=r(10267),i=r(51252),c=r(15538),l=r(67954),u=r(609),d=[{img:"fa-phone",title:"Contact us",desc1:"+91 123 - 456 - 7890",desc2:"+86 163 - 451 - 7894"},{img:"fa-map-marker",title:"ADDRESS",desc1:"ABC Complex,Near xyz, New York",desc2:"USA 123456"},{img:"fa-envelope-o",title:"ADDRESS",desc1:"Support@Shopcart.com",desc2:"info@shopcart.com"},{img:"fa-fax",title:"fax",desc1:"Support@Shopcart.com",desc2:"info@shopcart.com"}],f=function(e){var n=e.img,r=e.title,a=e.desc1,s=e.desc2;return(0,t.jsxs)("li",{children:[(0,t.jsxs)("div",{className:"contact-icon",children:[(0,t.jsx)("i",{className:"fa ".concat(n),"aria-hidden":"true"}),(0,t.jsx)("h6",{children:r})]}),(0,t.jsxs)("div",{className:"media-body",children:[(0,t.jsx)("p",{children:a}),(0,t.jsx)("p",{children:s})]})]})};n.default=function(){return(0,t.jsx)(a.Z,{parent:"home",title:"Contact",children:(0,t.jsx)("section",{className:"contact-page section-b-space",children:(0,t.jsxs)(s.Z,{children:[(0,t.jsxs)(o.Z,{className:"section-b-space",children:[(0,t.jsx)(i.Z,{lg:"7",className:"map",children:(0,t.jsx)("iframe",{src:"https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1605.811957341231!2d25.45976406005396!3d36.3940974010114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1550912388321",allowFullScreen:!0})}),(0,t.jsx)(i.Z,{lg:"5",children:(0,t.jsx)("div",{className:"contact-right",children:(0,t.jsx)("ul",{children:d.map((function(e,n){return(0,t.jsx)(f,{img:e.img,title:e.title,desc1:e.desc1,desc2:e.desc2},n)}))})})})]}),(0,t.jsx)(o.Z,{children:(0,t.jsx)(i.Z,{sm:"12",children:(0,t.jsx)(c.Z,{className:"theme-form",children:(0,t.jsxs)(o.Z,{children:[(0,t.jsxs)(i.Z,{md:"6",children:[(0,t.jsx)(l.Z,{className:"form-label",for:"name",children:"First Name"}),(0,t.jsx)(u.Z,{type:"text",className:"form-control",id:"name",placeholder:"Enter Your name",required:""})]}),(0,t.jsxs)(i.Z,{md:"6",children:[(0,t.jsx)(l.Z,{className:"form-label",for:"email",children:"Last Name"}),(0,t.jsx)(u.Z,{type:"text",className:"form-control",id:"last-name",placeholder:"Email",required:""})]}),(0,t.jsxs)(i.Z,{md:"6",children:[(0,t.jsx)(l.Z,{className:"form-label",for:"review",children:"Phone number"}),(0,t.jsx)(u.Z,{type:"text",className:"form-control",id:"review",placeholder:"Enter your number",required:""})]}),(0,t.jsxs)(i.Z,{md:"6",children:[(0,t.jsx)(l.Z,{className:"form-label",for:"email",children:"Email"}),(0,t.jsx)(u.Z,{type:"text",className:"form-control",id:"email",placeholder:"Email",required:""})]}),(0,t.jsxs)(i.Z,{md:"12",children:[(0,t.jsx)(l.Z,{className:"form-label",for:"review",children:"Write Your Message"}),(0,t.jsx)("textarea",{className:"form-control",placeholder:"Write Your Message",id:"exampleFormControlTextarea1",rows:"6"})]}),(0,t.jsx)(i.Z,{md:"12",children:(0,t.jsx)("button",{className:"btn btn-solid",type:"submit",children:"Send Your Message"})})]})})})})]})})})}},77058:function(e,n,r){"use strict";r.d(n,{$:function(){return v}});var t=r(83878);var a=r(81563),s=r(25267);function o(e,n){return(0,t.Z)(e)||function(e,n){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var t,a,s,o,i=[],c=!0,l=!1;try{if(s=(r=r.call(e)).next,0===n){if(Object(r)!==r)return;c=!1}else for(;!(c=(t=s.call(r)).done)&&(i.push(t.value),i.length!==n);c=!0);}catch(u){l=!0,a=u}finally{try{if(!c&&null!=r.return&&(o=r.return(),Object(o)!==o))return}finally{if(l)throw a}}return i}}(e,n)||(0,a.Z)(e,n)||(0,s.Z)()}var i=r(4942),c=r(67294),l=r(57715);function u(){if(console&&console.warn){for(var e,n=arguments.length,r=new Array(n),t=0;t<n;t++)r[t]=arguments[t];"string"===typeof r[0]&&(r[0]="react-i18next:: ".concat(r[0])),(e=console).warn.apply(e,r)}}var d={};function f(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];"string"===typeof n[0]&&d[n[0]]||("string"===typeof n[0]&&(d[n[0]]=new Date),u.apply(void 0,n))}function m(e,n,r){e.loadNamespaces(n,(function(){if(e.isInitialized)r();else{e.on("initialized",(function n(){setTimeout((function(){e.off("initialized",n)}),0),r()}))}}))}function p(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},t=n.languages[0],a=!!n.options&&n.options.fallbackLng,s=n.languages[n.languages.length-1];if("cimode"===t.toLowerCase())return!0;var o=function(e,r){var t=n.services.backendConnector.state["".concat(e,"|").concat(r)];return-1===t||2===t};return!(r.bindI18n&&r.bindI18n.indexOf("languageChanging")>-1&&n.services.backendConnector.backend&&n.isLanguageChangingTo&&!o(n.isLanguageChangingTo,e))&&(!!n.hasResourceBundle(t,e)||(!(n.services.backendConnector.backend&&(!n.options.resources||n.options.partialBundledLanguages))||!(!o(t,e)||a&&!o(s,e))))}function h(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!n.languages||!n.languages.length)return f("i18n.languages were undefined or empty",n.languages),!0;var t=void 0!==n.options.ignoreJSONStructure;return t?n.hasLoadedNamespace(e,{precheck:function(n,t){if(r.bindI18n&&r.bindI18n.indexOf("languageChanging")>-1&&n.services.backendConnector.backend&&n.isLanguageChangingTo&&!t(n.isLanguageChangingTo,e))return!1}}):p(e,n,r)}function g(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function x(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?g(Object(r),!0).forEach((function(n){(0,i.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}var b=function(e,n){var r=(0,c.useRef)();return(0,c.useEffect)((function(){r.current=n?r.current:e}),[e,n]),r.current};function v(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.i18n,t=(0,c.useContext)(l.OO)||{},a=t.i18n,s=t.defaultNS,i=r||a||(0,l.nI)();if(i&&!i.reportNamespaces&&(i.reportNamespaces=new l.zv),!i){f("You will need to pass in an i18next instance by using initReactI18next");var u=function(e){return Array.isArray(e)?e[e.length-1]:e},d=[u,{},!1];return d.t=u,d.i18n={},d.ready=!1,d}i.options.react&&void 0!==i.options.react.wait&&f("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var p=x(x(x({},(0,l.JP)()),i.options.react),n),g=p.useSuspense,v=p.keyPrefix,j=e||s||i.options&&i.options.defaultNS;j="string"===typeof j?[j]:j||["translation"],i.reportNamespaces.addUsedNamespaces&&i.reportNamespaces.addUsedNamespaces(j);var y=(i.isInitialized||i.initializedStoreOnce)&&j.every((function(e){return h(e,i,p)}));function N(){return i.getFixedT(null,"fallback"===p.nsMode?j:j[0],v)}var w=(0,c.useState)(N),Z=o(w,2),O=Z[0],S=Z[1],k=j.join(),E=b(k),C=(0,c.useRef)(!0);(0,c.useEffect)((function(){var e=p.bindI18n,n=p.bindI18nStore;function r(){C.current&&S(N)}return C.current=!0,y||g||m(i,j,(function(){C.current&&S(N)})),y&&E&&E!==k&&C.current&&S(N),e&&i&&i.on(e,r),n&&i&&i.store.on(n,r),function(){C.current=!1,e&&i&&e.split(" ").forEach((function(e){return i.off(e,r)})),n&&i&&n.split(" ").forEach((function(e){return i.store.off(e,r)}))}}),[i,k]);var P=(0,c.useRef)(!0);(0,c.useEffect)((function(){C.current&&!P.current&&S(N),P.current=!1}),[i,v]);var z=[O,i,y];if(z.t=O,z.i18n=i,z.ready=y,y)return z;if(!y&&!g)return z;throw new Promise((function(e){m(i,j,(function(){e()}))}))}},67954:function(e,n,r){"use strict";var t=r(87462),a=r(63366),s=r(67294),o=r(45697),i=r.n(o),c=r(94184),l=r.n(c),u=r(23663),d=["className","cssModule","hidden","widths","tag","check","size","for"],f=i().oneOfType([i().number,i().string]),m=i().oneOfType([i().bool,i().string,i().number,i().shape({size:f,order:f,offset:f})]),p={children:i().node,hidden:i().bool,check:i().bool,size:i().string,for:i().string,tag:u.iC,className:i().string,cssModule:i().object,xs:m,sm:m,md:m,lg:m,xl:m,widths:i().array},h={tag:"label",widths:["xs","sm","md","lg","xl"]},g=function(e,n,r){return!0===r||""===r?e?"col":"col-"+n:"auto"===r?e?"col-auto":"col-"+n+"-auto":e?"col-"+r:"col-"+n+"-"+r},x=function(e){var n=e.className,r=e.cssModule,o=e.hidden,i=e.widths,c=e.tag,f=e.check,m=e.size,p=e.for,h=(0,a.Z)(e,d),x=[];i.forEach((function(n,t){var a=e[n];if(delete h[n],a||""===a){var s,o=!t;if((0,u.Kn)(a)){var i,c=o?"-":"-"+n+"-";s=g(o,n,a.size),x.push((0,u.mx)(l()(((i={})[s]=a.size||""===a.size,i["order"+c+a.order]=a.order||0===a.order,i["offset"+c+a.offset]=a.offset||0===a.offset,i))),r)}else s=g(o,n,a),x.push(s)}}));var b=(0,u.mx)(l()(n,!!o&&"sr-only",!!f&&"form-check-label",!!m&&"col-form-label-"+m,x,!!x.length&&"col-form-label"),r);return s.createElement(c,(0,t.Z)({htmlFor:p},h,{className:b}))};x.propTypes=p,x.defaultProps=h,n.Z=x}},function(e){e.O(0,[7971,5744,5254,1549,8417,5310,9774,2888,179],(function(){return n=79465,e(e.s=n);var n}));var n=e.O();_N_E=n}]);
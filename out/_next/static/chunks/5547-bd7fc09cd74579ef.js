"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5547],{461:function(e,n,r){r.r(n);var t=r(85893),a=r(67294),o=r(85310),i=r(98595),s=r(10267),c=r(51252),l=r(15538),u=r(67954),f=r(609),d=r(11163);n.default=function(){var e=(0,d.useRouter)(),n=(0,a.useState)("test@gmail.com"),r=n[0],g=n[1],h=(0,a.useState)("test123"),p=h[0],m=h[1],v=(0,a.useState)(localStorage.getItem("Name")),b=v[0];v[1];(0,a.useEffect)((function(){localStorage.setItem("Name",b)}),[b]);return(0,t.jsx)(o.Z,{parent:"home",title:"login",children:(0,t.jsx)("section",{className:"login-page section-b-space",children:(0,t.jsx)(i.Z,{children:(0,t.jsxs)(s.Z,{children:[(0,t.jsxs)(c.Z,{lg:"6",children:[(0,t.jsx)("h3",{children:"Login"}),(0,t.jsx)("div",{className:"theme-card",children:(0,t.jsxs)(l.Z,{className:"theme-form",children:[(0,t.jsxs)("div",{className:"form-group",children:[(0,t.jsx)(u.Z,{className:"form-label",for:"email",children:"Email"}),(0,t.jsx)(f.Z,{type:"text",defaultValue:r,onChange:function(e){return g(e.target.value)},className:"form-control",placeholder:"Email",required:""})]}),(0,t.jsxs)("div",{className:"form-group",children:[(0,t.jsx)(u.Z,{className:"form-label",for:"review",children:"Password"}),(0,t.jsx)(f.Z,{type:"password",defaultValue:p,onChange:function(e){return m(e.target.value)},className:"form-control",id:"review",placeholder:"Enter your password",required:""})]}),(0,t.jsx)("a",{href:"#",className:"btn btn-solid",onClick:function(){return localStorage.setItem("user",!0),void setTimeout((function(){e.push("/page/account/checkout")}),200)},children:"Login"}),(0,t.jsx)("div",{className:"footer-social",children:(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:(0,t.jsx)("i",{className:"fa fa-facebook","aria-hidden":"true"})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{children:(0,t.jsx)("i",{className:"fa fa-google-plus","aria-hidden":"true"})})})]})})]})})]}),(0,t.jsxs)(c.Z,{lg:"6",className:"right-login",children:[(0,t.jsx)("h3",{children:"New Customer"}),(0,t.jsxs)("div",{className:"theme-card authentication-right",children:[(0,t.jsx)("h6",{className:"title-font",children:"Create A Account"}),(0,t.jsx)("p",{children:"Sign up for a free account at our store. Registration is quick and easy. It allows you to be able to order from our shop. To start shopping click register."}),(0,t.jsx)("a",{href:"#",className:"btn btn-solid",children:"Create an Account"})]})]})]})})})})}},77058:function(e,n,r){r.d(n,{$:function(){return y}});var t=r(83878);var a=r(81563),o=r(25267);function i(e,n){return(0,t.Z)(e)||function(e,n){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var t,a,o,i,s=[],c=!0,l=!1;try{if(o=(r=r.call(e)).next,0===n){if(Object(r)!==r)return;c=!1}else for(;!(c=(t=o.call(r)).done)&&(s.push(t.value),s.length!==n);c=!0);}catch(u){l=!0,a=u}finally{try{if(!c&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(l)throw a}}return s}}(e,n)||(0,a.Z)(e,n)||(0,o.Z)()}var s=r(4942),c=r(67294),l=r(57715);function u(){if(console&&console.warn){for(var e,n=arguments.length,r=new Array(n),t=0;t<n;t++)r[t]=arguments[t];"string"===typeof r[0]&&(r[0]="react-i18next:: ".concat(r[0])),(e=console).warn.apply(e,r)}}var f={};function d(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];"string"===typeof n[0]&&f[n[0]]||("string"===typeof n[0]&&(f[n[0]]=new Date),u.apply(void 0,n))}function g(e,n,r){e.loadNamespaces(n,(function(){if(e.isInitialized)r();else{e.on("initialized",(function n(){setTimeout((function(){e.off("initialized",n)}),0),r()}))}}))}function h(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},t=n.languages[0],a=!!n.options&&n.options.fallbackLng,o=n.languages[n.languages.length-1];if("cimode"===t.toLowerCase())return!0;var i=function(e,r){var t=n.services.backendConnector.state["".concat(e,"|").concat(r)];return-1===t||2===t};return!(r.bindI18n&&r.bindI18n.indexOf("languageChanging")>-1&&n.services.backendConnector.backend&&n.isLanguageChangingTo&&!i(n.isLanguageChangingTo,e))&&(!!n.hasResourceBundle(t,e)||(!(n.services.backendConnector.backend&&(!n.options.resources||n.options.partialBundledLanguages))||!(!i(t,e)||a&&!i(o,e))))}function p(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!n.languages||!n.languages.length)return d("i18n.languages were undefined or empty",n.languages),!0;var t=void 0!==n.options.ignoreJSONStructure;return t?n.hasLoadedNamespace(e,{precheck:function(n,t){if(r.bindI18n&&r.bindI18n.indexOf("languageChanging")>-1&&n.services.backendConnector.backend&&n.isLanguageChangingTo&&!t(n.isLanguageChangingTo,e))return!1}}):h(e,n,r)}function m(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function v(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?m(Object(r),!0).forEach((function(n){(0,s.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}var b=function(e,n){var r=(0,c.useRef)();return(0,c.useEffect)((function(){r.current=n?r.current:e}),[e,n]),r.current};function y(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.i18n,t=(0,c.useContext)(l.OO)||{},a=t.i18n,o=t.defaultNS,s=r||a||(0,l.nI)();if(s&&!s.reportNamespaces&&(s.reportNamespaces=new l.zv),!s){d("You will need to pass in an i18next instance by using initReactI18next");var u=function(e){return Array.isArray(e)?e[e.length-1]:e},f=[u,{},!1];return f.t=u,f.i18n={},f.ready=!1,f}s.options.react&&void 0!==s.options.react.wait&&d("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var h=v(v(v({},(0,l.JP)()),s.options.react),n),m=h.useSuspense,y=h.keyPrefix,x=e||o||s.options&&s.options.defaultNS;x="string"===typeof x?[x]:x||["translation"],s.reportNamespaces.addUsedNamespaces&&s.reportNamespaces.addUsedNamespaces(x);var j=(s.isInitialized||s.initializedStoreOnce)&&x.every((function(e){return p(e,s,h)}));function N(){return s.getFixedT(null,"fallback"===h.nsMode?x:x[0],y)}var w=(0,c.useState)(N),O=i(w,2),k=O[0],C=O[1],S=x.join(),Z=b(S),E=(0,c.useRef)(!0);(0,c.useEffect)((function(){var e=h.bindI18n,n=h.bindI18nStore;function r(){E.current&&C(N)}return E.current=!0,j||m||g(s,x,(function(){E.current&&C(N)})),j&&Z&&Z!==S&&E.current&&C(N),e&&s&&s.on(e,r),n&&s&&s.store.on(n,r),function(){E.current=!1,e&&s&&e.split(" ").forEach((function(e){return s.off(e,r)})),n&&s&&n.split(" ").forEach((function(e){return s.store.off(e,r)}))}}),[s,S]);var I=(0,c.useRef)(!0);(0,c.useEffect)((function(){E.current&&!I.current&&C(N),I.current=!1}),[s,y]);var z=[k,s,j];if(z.t=k,z.i18n=s,z.ready=j,j)return z;if(!j&&!m)return z;throw new Promise((function(e){g(s,x,(function(){e()}))}))}},67954:function(e,n,r){var t=r(87462),a=r(63366),o=r(67294),i=r(45697),s=r.n(i),c=r(94184),l=r.n(c),u=r(23663),f=["className","cssModule","hidden","widths","tag","check","size","for"],d=s().oneOfType([s().number,s().string]),g=s().oneOfType([s().bool,s().string,s().number,s().shape({size:d,order:d,offset:d})]),h={children:s().node,hidden:s().bool,check:s().bool,size:s().string,for:s().string,tag:u.iC,className:s().string,cssModule:s().object,xs:g,sm:g,md:g,lg:g,xl:g,widths:s().array},p={tag:"label",widths:["xs","sm","md","lg","xl"]},m=function(e,n,r){return!0===r||""===r?e?"col":"col-"+n:"auto"===r?e?"col-auto":"col-"+n+"-auto":e?"col-"+r:"col-"+n+"-"+r},v=function(e){var n=e.className,r=e.cssModule,i=e.hidden,s=e.widths,c=e.tag,d=e.check,g=e.size,h=e.for,p=(0,a.Z)(e,f),v=[];s.forEach((function(n,t){var a=e[n];if(delete p[n],a||""===a){var o,i=!t;if((0,u.Kn)(a)){var s,c=i?"-":"-"+n+"-";o=m(i,n,a.size),v.push((0,u.mx)(l()(((s={})[o]=a.size||""===a.size,s["order"+c+a.order]=a.order||0===a.order,s["offset"+c+a.offset]=a.offset||0===a.offset,s))),r)}else o=m(i,n,a),v.push(o)}}));var b=(0,u.mx)(l()(n,!!i&&"sr-only",!!d&&"form-check-label",!!g&&"col-form-label-"+g,v,!!v.length&&"col-form-label"),r);return o.createElement(c,(0,t.Z)({htmlFor:h},p,{className:b}))};v.propTypes=h,v.defaultProps=p,n.Z=v}}]);
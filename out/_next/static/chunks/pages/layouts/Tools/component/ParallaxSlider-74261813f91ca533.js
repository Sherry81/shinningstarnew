(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2160],{17153:function(e,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/layouts/Tools/component/ParallaxSlider",function(){return a(63761)}])},63761:function(e,n,a){"use strict";a.r(n);var s=a(26042),r=a(69396),o=a(7297),t=a(85893),l=a(67294),c=a(46066),i=a(79011),d=a(55850),u=a(17283),h=a(9614),x=a(86040),m=a(40196),p=a(92097),j=a(98595),f=a(10267),v=a(51252),g=a(20908);function N(){var e=(0,o.Z)(["\n  query productByCategory($category: String!) {\n    productByCategory(category: $category) {\n      id\n      title\n      description\n      type\n      brand\n      collection\n      category\n      price\n      sale\n      discount\n      new\n      images {\n        image_id\n        id\n        alt\n        src\n      }\n      variants {\n        variant_id\n        id\n        sku\n        size\n        color\n        image_id\n      }\n    }\n  }\n"]);return N=function(){return e},e}var y=(0,u.Ps)(N());n.default=function(){var e=(0,l.useContext)(h.Z),n=(0,l.useContext)(x.Dh),a=((0,l.useContext)(m.$R),(0,l.useContext)(p.jv)),o=(0,d.a)(y,{variables:{category:"tools"}}).data;return(0,t.jsx)(l.Fragment,{children:(0,t.jsx)("section",{className:"full-banner parallax small-slider tools-parallax-product",children:(0,t.jsx)(j.Z,{children:(0,t.jsxs)(f.Z,{children:[(0,t.jsx)(v.Z,{lg:"4",children:(0,t.jsx)("div",{className:"tools-description",children:(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"select your vehical"}),(0,t.jsxs)("div",{className:"tools-form",children:[(0,t.jsx)("div",{className:"search-box",children:(0,t.jsxs)("select",{className:"form-control",children:[(0,t.jsx)("option",{value:"",children:"Select Make"}),(0,t.jsx)("option",{value:"1",children:"Audi"}),(0,t.jsx)("option",{value:"2",children:"BMW"}),(0,t.jsx)("option",{value:"3",children:"Fiat"}),(0,t.jsx)("option",{value:"4",children:"Hyndai"}),(0,t.jsx)("option",{value:"5",children:"Skoda"})]})}),(0,t.jsx)("div",{className:"search-box",children:(0,t.jsx)("select",{name:"model",className:"form-control",children:(0,t.jsx)("option",{value:"",children:"Select Model"})})}),(0,t.jsx)("div",{className:"search-box",children:(0,t.jsx)("select",{name:"engine",className:"form-control",children:(0,t.jsx)("option",{value:"",children:"Select category"})})}),(0,t.jsx)("div",{className:"search-box",children:(0,t.jsx)("select",{name:"year",className:"form-control",children:(0,t.jsx)("option",{value:"",children:"Select Year"})})}),(0,t.jsx)("div",{className:"search-button",children:(0,t.jsx)("a",{href:"#",className:"btn btn-solid btn-find",children:"find my part"})})]})]})})}),(0,t.jsx)(v.Z,{lg:"8",className:"tools-grey ratio_square",children:(0,t.jsx)(c.Z,(0,r.Z)((0,s.Z)({},i.Kk),{className:"tools-product-4 product-m",children:o&&o.productByCategory.slice(0,8).map((function(s,r){return(0,t.jsx)(g.Z,{product:s,spanClass:!0,addToCompare:function(){return n.addToCompare(s)},addCart:function(){return e.addToCart(s)},addWishlist:function(){return a.addToWish(s)}},r)}))}))})]})})})})}},98595:function(e,n,a){"use strict";var s=a(87462),r=a(63366),o=a(67294),t=a(45697),l=a.n(t),c=a(94184),i=a.n(c),d=a(23663),u=["className","cssModule","fluid","tag"],h={tag:d.iC,fluid:l().oneOfType([l().bool,l().string]),className:l().string,cssModule:l().object},x=function(e){var n=e.className,a=e.cssModule,t=e.fluid,l=e.tag,c=(0,r.Z)(e,u),h="container";!0===t?h="container-fluid":t&&(h="container-"+t);var x=(0,d.mx)(i()(n,h),a);return o.createElement(l,(0,s.Z)({},c,{className:x}))};x.propTypes=h,x.defaultProps={tag:"div"},n.Z=x}},function(e){e.O(0,[7971,6066,9011,908,9774,2888,179],(function(){return n=17153,e(e.s=n);var n}));var n=e.O();_N_E=n}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[133],{75101:function(n,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/portfolio/tab",function(){return t(51421)}])},97397:function(n,s,t){"use strict";var e=t(26042),a=t(69396),i=t(7297),c=t(85893),r=t(67294),l=t(78369),d=t(98595),o=t(10267),x=t(51252),u=t(17283),m=t(55850),h=t(46066),j=t(79011),p=t(9614),f=t(92097),C=t(59219),g=t(3038),v=t(86040);function N(){var n=(0,i.Z)(["\n  query products($type: _CategoryType!, $indexFrom: Int!, $limit: Int!) {\n    products(type: $type, indexFrom: $indexFrom, limit: $limit) {\n      items {\n        id\n        title\n        description\n        type\n        brand\n        category\n        price\n        new\n        sale\n        stock\n        discount\n        variants {\n          id\n          sku\n          size\n          color\n          image_id\n        }\n        images {\n          image_id\n          id\n          alt\n          src\n        }\n      }\n    }\n  }\n"]);return N=function(){return n},n}var b=(0,u.Ps)(N()),Z=function(n){var s=n.data,t=n.loading,i=n.cartClass,l=n.startIndex,d=n.endIndex,o=(0,r.useContext)(p.Z),x=(0,r.useContext)(f.jv),u=(0,r.useContext)(v.Dh),m=o.quantity;return(0,c.jsx)("div",{children:s&&s.products&&s.products.items&&0!==s.products.items.length&&!t||void 0===t?(0,c.jsx)(h.Z,(0,a.Z)((0,e.Z)({},j.XG),{className:"product-4 product-m no-arrow",children:s&&s.products.items.slice(l,d).map((function(n,s){return(0,c.jsx)(C.Z,{product:n,addCart:function(){return o.addToCart(n,m)},addWishlist:function(){return x.addToWish(n)},addCompareList:function(){return u.addToCompare(n)},cartClass:i},s)}))})):(0,c.jsxs)("div",{className:"row mx-0 margin-default",children:[(0,c.jsx)("div",{className:"col-xl-3 col-lg-4 col-6",children:(0,c.jsx)(g.Z,{})}),(0,c.jsx)("div",{className:"col-xl-3 col-lg-4 col-6",children:(0,c.jsx)(g.Z,{})}),(0,c.jsx)("div",{className:"col-xl-3 col-lg-4 col-6",children:(0,c.jsx)(g.Z,{})}),(0,c.jsx)("div",{className:"col-xl-3 col-lg-4 col-6",children:(0,c.jsx)(g.Z,{})})]})})};s.Z=function(n){var s=n.type,t=n.cartClass,e=n.designClass,a=(0,r.useState)(s),i=a[0],u=a[1],h=(0,m.a)(b,{variables:{type:i,indexFrom:0,limit:32}}),j=h.loading,p=h.data;return(0,c.jsx)("section",{className:e,children:(0,c.jsxs)(d.Z,{children:[(0,c.jsxs)("div",{className:"title2",children:[(0,c.jsx)("h4",{children:"new collection"}),(0,c.jsx)("h2",{className:"title-inner2",children:"trending products"})]}),(0,c.jsx)(o.Z,{children:(0,c.jsx)(x.Z,{children:(0,c.jsxs)(l.mQ,{className:"theme-tab",children:[(0,c.jsxs)(l.td,{className:"tabs tab-title",children:[(0,c.jsx)(l.OK,{className:i==s?"active":"",onClick:function(){return u(s)},children:"new arrival"}),(0,c.jsx)(l.OK,{className:i==s?"active":"",onClick:function(){return u(s)},children:"woman"}),(0,c.jsx)(l.OK,{className:i==s?"active":"",onClick:function(){return u(s)},children:"man"}),(0,c.jsx)(l.OK,{className:"kids"==i?"active":"",onClick:function(){return u("kids")},children:"kids"}),(0,c.jsx)(l.OK,{className:"bags"==i?"active":"",onClick:function(){return u("bags")},children:"school-bag"})]}),(0,c.jsxs)("div",{className:"tab-content-cls",children:[(0,c.jsx)(l.x4,{className:"tab-content active default",children:(0,c.jsx)(Z,{data:p,cartClass:t,loading:j})}),(0,c.jsxs)(l.x4,{className:"tab-content",children:[(0,c.jsx)(Z,{data:p,cartClass:t,loading:j,startIndex:8,endIndex:16}),(0,c.jsx)(Z,{})]}),(0,c.jsxs)(l.x4,{className:"tab-content",children:[(0,c.jsx)(Z,{data:p,cartClass:t,loading:j,startIndex:16,endIndex:32}),(0,c.jsx)(Z,{})]}),(0,c.jsxs)(l.x4,{className:"tab-content",children:[(0,c.jsx)(Z,{data:p,cartClass:t,loading:j,startIndex:0,endIndex:8}),(0,c.jsx)(Z,{})]}),(0,c.jsxs)(l.x4,{className:"tab-content",children:[(0,c.jsx)(Z,{data:p,cartClass:t,loading:j,startIndex:0,endIndex:8}),(0,c.jsx)(Z,{})]})]})]})})})]})})}},51421:function(n,s,t){"use strict";t.r(s);var e=t(85893),a=(t(67294),t(85310)),i=t(20732),c=t(97397);s.default=function(){return(0,e.jsxs)(a.Z,{parent:"home",title:"Portfolio",subTitle:"tab",children:[(0,e.jsx)(i.Z,{heading:"without slider",title:"title1",inner:"title-inner1",type:"fashion",designClass:"section-b-space ratio_asos",noSlider:"true",cartClass:"cart-info cart-wrap"}),(0,e.jsx)(c.Z,{heading:"with slider",title:"title1",inner:"title-inner1",type:"fashion",designClass:"section-b-space pt-0 ratio_asos",noSlider:"true",cartClass:"cart-info cart-wrap"})]})}}},function(n){n.O(0,[7971,5744,6066,8369,5254,1549,8417,5310,9011,3228,626,9219,9774,2888,179],(function(){return s=75101,n(n.s=s);var s}));var s=n.O();_N_E=s}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[509],{75417:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/product-details/4_image",function(){return e(18657)}])},18657:function(n,t,e){"use strict";e.r(t);var i=e(85893),s=(e(67294),e(85310)),a=e(32108),r=e(83646);t.default=function(){return(0,i.jsxs)(s.Z,{parent:"home",title:"product",children:[(0,i.jsx)(r.default,{}),(0,i.jsx)(a.default,{})]})}},32108:function(n,t,e){"use strict";e.r(t);var i=e(7297),s=e(85893),a=e(67294),r=e(55850),u=e(17283),o=e(40196),c=e(9614),d=e(92097),l=e(86040),p=e(11163);function f(){var n=(0,i.Z)(["\n  query products($type: _CategoryType!, $indexFrom: Int!, $limit: Int!) {\n    products(type: $type, indexFrom: $indexFrom, limit: $limit) {\n      items {\n        id\n        title\n        description\n        type\n        brand\n        category\n        price\n        new\n        stock\n        sale\n        discount\n        variants {\n          id\n          sku\n          size\n          color\n          image_id\n        }\n        images {\n          image_id\n          id\n          alt\n          src\n        }\n      }\n    }\n  }\n"]);return f=function(){return n},n}var m=(0,u.Ps)(f());t.default=function(){(0,p.useRouter)();var n=(0,a.useContext)(o.$R),t=((0,a.useContext)(d.jv),(0,a.useContext)(l.Dh),n.state.symbol,n.state,(0,a.useContext)(c.Z)),e=(t.addToCart,t.quantity,t.plusQty,t.minusQty,t.setQuantity,(0,a.useState)()),i=(e[0],e[1],(0,a.useState)(!1)),u=(i[0],i[1],(0,r.a)(m,{variables:{type:"fashion",indexFrom:0,limit:8}}));u.loading,u.data;return(0,s.jsx)("section",{className:"section-b-space ratio_asos"})}}},function(n){n.O(0,[7971,5744,6925,5254,1549,8417,5310,3646,9774,2888,179],(function(){return t=75417,n(n.s=t);var t}));var t=n.O();_N_E=t}]);
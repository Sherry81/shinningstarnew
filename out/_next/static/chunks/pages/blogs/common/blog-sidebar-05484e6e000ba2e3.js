(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5436],{76950:function(e,l,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blogs/common/blog-sidebar",function(){return i(11613)}])},11613:function(e,l,i){"use strict";i.r(l);var n=i(7297),s=i(85893),t=(i(67294),i(17283)),a=i(55850);i(199);function r(){var e=(0,n.Z)(["\n  query blog($type: String!) {\n    blog(type: $type) {\n      img\n      link\n      title\n      desc\n      date\n      longDesc\n      shortDesc\n    }\n  }\n"]);return r=function(){return e},e}var d=(0,t.Ps)(r());l.default=function(){var e=(0,a.a)(d,{variables:{type:"fashion"}}).data;return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{className:"col-xl-3 col-lg-4 col-md-5",children:(0,s.jsxs)("div",{className:"blog-sidebar",children:[(0,s.jsxs)("div",{className:"theme-card",children:[(0,s.jsx)("h4",{children:"Recent Blog"}),(0,s.jsx)("ul",{className:"recent-blog",children:e&&e.blog.map((function(e,l){return(0,s.jsx)("li",{children:(0,s.jsxs)("div",{className:"media",children:[(0,s.jsx)("img",{className:"img-fluid blur-up lazyload",src:e.img,alt:"Generic placeholder image"}),(0,s.jsxs)("div",{className:"media-body align-self-center",children:[(0,s.jsx)("h6",{children:e.title}),(0,s.jsx)("p",{children:"0 hits"})]})]})},l)}))})]}),(0,s.jsxs)("div",{className:"theme-card",children:[(0,s.jsx)("h4",{children:"Popular Blog"}),(0,s.jsx)("ul",{className:"popular-blog",children:[{date:"03",month:"May",title:"Injected humour the like",hits:"0",blog:"it look like readable English. Many desktop publishing text."},{date:"03",month:"May",title:"Injected humour the like",hits:"0",blog:"it look like readable English. Many desktop publishing text."},{date:"03",month:"May",title:"Injected humour the like",hits:"0",blog:"it look like readable English. Many desktop publishing text."},{date:"03",month:"May",title:"Injected humour the like",hits:"0",blog:"it look like readable English. Many desktop publishing text."}].map((function(e,l){return(0,s.jsxs)("li",{children:[(0,s.jsxs)("div",{className:"media",children:[(0,s.jsxs)("div",{className:"blog-date",children:[(0,s.jsxs)("span",{children:[e.date," "]}),(0,s.jsx)("span",{children:e.month})]}),(0,s.jsxs)("div",{className:"media-body align-self-center",children:[(0,s.jsx)("h6",{children:e.title}),(0,s.jsxs)("p",{children:[e.hits," hits"]})]})]}),(0,s.jsx)("p",{children:e.blog})]},l)}))})]})]})})})}}},function(e){e.O(0,[7971,5744,5254,1549,8417,5310,2455,9774,2888,179],(function(){return l=76950,e(e.s=l);var l}));var l=e.O();_N_E=l}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8896],{97396:function(A,e,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/layouts/Shoes",function(){return s(12877)}])},3081:function(A,e){"use strict";e.Z={src:"/_next/static/media/empty-search.e480c619.jpg",height:190,width:268,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAYACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABwEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAAsQP/xAAYEAADAQEAAAAAAAAAAAAAAAABAhEAEv/aAAgBAQABPwDl6Wo3/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPwB//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPwB//9k=",blurWidth:8,blurHeight:6}},83839:function(A,e,s){"use strict";var t=s(7297),i=s(85893),n=s(67294),a=(s(46066),s(41664),s(17283)),r=s(55850);s(79011);function l(){var A=(0,t.Z)(["\n  query blog($type: String!) {\n    blog(type: $type) {\n      img\n      link\n      title\n      desc\n      date\n    }\n  }\n"]);return l=function(){return A},A}var c=(0,a.Ps)(l());e.Z=function(A){var e=A.type;A.sectionClass,A.title,A.inner,A.hrClass,(0,r.a)(c,{variables:{type:e}}).data;return(0,i.jsx)(n.Fragment,{})}},2607:function(A,e,s){"use strict";var t=s(26042),i=s(69396),n=s(7297),a=s(85893),r=s(67294),l=s(46066),c=s(55850),o=s(17283),d=s(13228),u=s(98595),g=s(10267),h=s(51252),x=s(9614),m=s(92097),j=s(3038),C=s(86040);s(3081);function p(){var A=(0,n.Z)(["\n  query products($type: _CategoryType!, $indexFrom: Int!, $limit: Int!) {\n    products(type: $type, indexFrom: $indexFrom, limit: $limit) {\n      items {\n        id\n        title\n        description\n        type\n        brand\n        category\n        price\n        new\n        stock\n        sale\n        discount\n        variants {\n          id\n          sku\n          size\n          color\n          image_id\n        }\n        images {\n          image_id\n          id\n          alt\n          src\n        }\n      }\n    }\n  }\n"]);return p=function(){return A},A}var f=(0,o.Ps)(p());e.Z=function(A){var e=A.type,s=A.title,n=A.subtitle,o=A.designClass,p=A.noSlider,E=A.cartClass,Q=A.productSlider,B=A.titleClass,b=A.noTitle,v=A.innerClass,w=A.inner,N=A.backImage,Z=(0,r.useContext)(x.Z),I=(0,r.useContext)(m.jv),F=(0,r.useContext)(C.Dh),y=Z.quantity,D=(0,r.useState)(!0),k=D[0],U=D[1],R=(0,c.a)(f,{variables:{type:e,indexFrom:0,limit:8}}),P=R.loading,S=R.data;return(0,r.useEffect)((function(){setTimeout((function(){U(!1)}),1)}),[k]),(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("section",{className:o,children:p?(0,a.jsx)(u.Z,{children:(0,a.jsx)(g.Z,{children:(0,a.jsxs)(h.Z,{children:["null"===b?"":(0,a.jsxs)("div",{className:v,children:[n?(0,a.jsx)("h4",{children:n}):"",(0,a.jsx)("h2",{className:w,children:s}),B?(0,a.jsx)("hr",{role:"tournament6"}):(0,a.jsx)("div",{className:"line",children:(0,a.jsx)("span",{})})]}),k?(0,a.jsxs)("div",{className:"row mx-0 margin-default",children:[(0,a.jsx)("div",{className:"col-xl-3 col-lg-4 col-6",children:(0,a.jsx)(j.Z,{})}),(0,a.jsx)("div",{className:"col-xl-3 col-lg-4 col-6",children:(0,a.jsx)(j.Z,{})}),(0,a.jsx)("div",{className:"col-xl-3 col-lg-4 col-6",children:(0,a.jsx)(j.Z,{})}),(0,a.jsx)("div",{className:"col-xl-3 col-lg-4 col-6",children:(0,a.jsx)(j.Z,{})})]}):(0,a.jsx)(l.Z,(0,i.Z)((0,t.Z)({},Q),{className:"product-m no-arrow",children:S&&S.products.items.map((function(A,e){return(0,a.jsx)("div",{children:(0,a.jsx)(d.Z,{product:A,title:s,addWishlist:function(){return I.addToWish(A)},addCart:function(){return Z.addToCart(A,y)},addCompare:function(){return F.addToCompare(A)},cartClass:E,backImage:N})},e)}))}))]})})}):(0,a.jsxs)(a.Fragment,{children:[s?(0,a.jsxs)("div",{className:"title1 title-gradient section-t-space",children:[(0,a.jsx)("h4",{children:n}),(0,a.jsx)("h2",{className:"title-inner1",children:s}),(0,a.jsx)("hr",{role:"tournament6"})]}):"",(0,a.jsx)(u.Z,{children:(0,a.jsx)(g.Z,{className:"margin-default",children:S&&S.products&&S.products.items&&0!==!S.products.items.length&&!P?S&&S.products.items.slice(0,8).map((function(A,e){return(0,a.jsx)(h.Z,{xl:"3",sm:"6",children:(0,a.jsx)("div",{children:(0,a.jsx)(d.Z,{product:A,backImage:N,addCompare:function(){return F.addToCompare(A)},addWishlist:function(){return I.addToWish(A)},title:s,cartClass:E,addCart:function(){return Z.addToCart(A,y)}},e)})},e)})):(0,a.jsxs)("div",{className:"row margin-default",children:[(0,a.jsx)("div",{className:"col-xl-3 col-lg-4 col-6",children:(0,a.jsx)(j.Z,{})}),(0,a.jsx)("div",{className:"col-xl-3 col-lg-4 col-6",children:(0,a.jsx)(j.Z,{})}),(0,a.jsx)("div",{className:"col-xl-3 col-lg-4 col-6",children:(0,a.jsx)(j.Z,{})}),(0,a.jsx)("div",{className:"col-xl-3 col-lg-4 col-6",children:(0,a.jsx)(j.Z,{})})]})})})]})})})}},37554:function(A,e,s){"use strict";var t=s(7297),i=s(85893),n=s(67294),a=s(78369),r=s(55850),l=s(17283),c=s(13228),o=s(9614),d=s(10267),u=s(51252),g=s(98595),h=s(92097),x=s(3038),m=s(86040);function j(){var A=(0,t.Z)(["\n  query products($type: _CategoryType!, $indexFrom: Int!, $limit: Int!) {\n    products(type: $type, indexFrom: $indexFrom, limit: $limit) {\n      items {\n        id\n        title\n        description\n        type\n        brand\n        category\n        price\n        stock\n        new\n        sale\n        discount\n        variants {\n          id\n          sku\n          size\n          color\n          image_id\n        }\n        images {\n          image_id\n          id\n          alt\n          src\n        }\n      }\n    }\n  }\n"]);return j=function(){return A},A}var C=(0,l.Ps)(j()),p=function(A){var e=A.data,s=A.loading,t=A.cartClass,a=(A.startIndex,A.endIndex,(0,n.useContext)(o.Z)),r=(0,n.useContext)(h.jv),l=(0,n.useContext)(m.Dh),g=a.quantity;return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(d.Z,{className:"no-slider",children:e&&e.products&&e.products.items&&0!==e.products.items.length&&!s?e&&e.products.items.slice(0,8).map((function(A,e){return(0,i.jsx)(c.Z,{product:A,addCompare:function(){return l.addToCompare(A)},addCart:function(){return a.addToCart(A,g)},addWishlist:function(){return r.addToWish(A)},cartClass:t},e)})):e&&e.products&&e.products.items&&0===e.products.items.length?(0,i.jsx)(u.Z,{xs:"12",children:(0,i.jsx)("div",{children:(0,i.jsxs)("div",{className:"col-sm-12 empty-cart-cls text-center",children:[(0,i.jsx)("img",{src:"/static/images/empty-search.jpg",className:"img-fluid mb-4 mx-auto",alt:""}),(0,i.jsx)("h3",{children:(0,i.jsx)("strong",{children:"Your Cart is Empty"})}),(0,i.jsx)("h4",{children:"Explore more shortlist some items."})]})})}):(0,i.jsxs)("div",{className:"row mx-0 margin-default",children:[(0,i.jsx)("div",{className:"col-xl-3 col-lg-4 col-6",children:(0,i.jsx)(x.Z,{})}),(0,i.jsx)("div",{className:"col-xl-3 col-lg-4 col-6",children:(0,i.jsx)(x.Z,{})}),(0,i.jsx)("div",{className:"col-xl-3 col-lg-4 col-6",children:(0,i.jsx)(x.Z,{})}),(0,i.jsx)("div",{className:"col-xl-3 col-lg-4 col-6",children:(0,i.jsx)(x.Z,{})})]})})})};e.Z=function(A){var e=A.type,s=A.designClass,t=A.cartClass,l=A.noTitle,c=(0,n.useState)(e),d=c[0],u=c[1],x=(0,n.useContext)(o.Z),j=((0,n.useContext)(h.jv),(0,n.useContext)(m.Dh),x.quantity,(0,r.a)(C,{variables:{type:d,indexFrom:0,limit:8}})),f=j.loading,E=j.data;return(0,i.jsxs)("div",{children:[l?"":(0,i.jsxs)("div",{className:"title1 section-t-space",children:[(0,i.jsx)("h4",{children:"exclusive products"}),(0,i.jsx)("h2",{className:"title-inner1",children:"special products"})]}),(0,i.jsx)("section",{className:s,children:(0,i.jsx)(g.Z,{children:(0,i.jsxs)(a.mQ,{className:"theme-tab",children:[(0,i.jsxs)(a.td,{className:"tabs tab-title",children:[(0,i.jsx)(a.OK,{className:d==e?"active":"",onClick:function(){return u(e)},children:"NEW ARRIVAL"}),(0,i.jsxs)(a.OK,{className:"furniture"==d?"active":"",onClick:function(){return u("furniture")},children:["FEATURED"," "]}),(0,i.jsx)(a.OK,{className:"furniture"==d?"active":"",onClick:function(){return u("furniture")},children:"SPECIAL"})]}),(0,i.jsx)(a.x4,{children:(0,i.jsx)(p,{data:E,loading:f,cartClass:t,startIndex:0,endIndex:8})}),(0,i.jsx)(a.x4,{children:(0,i.jsx)(p,{data:E,loading:f,cartClass:t,startIndex:0,endIndex:8})}),(0,i.jsx)(a.x4,{children:(0,i.jsx)(p,{data:E,loading:f,cartClass:t,startIndex:0,endIndex:8})})]})})})]})}},15822:function(A,e,s){"use strict";var t=s(85893),i=(s(67294),s(79011)),n=s(98595);s(26235),i.cD,i.zY,i.C2;e.Z=function(A){var e=A.sectionClass;return(0,t.jsx)(n.Z,{children:(0,t.jsx)("section",{className:e})})}},10373:function(A,e,s){"use strict";var t=s(85893);s(67294),s(46066),s(79011);e.Z=function(A){var e=A.designClass;return(0,t.jsx)("section",{className:e})}},54795:function(A,e,s){"use strict";s.r(e);var t=s(85893),i=s(67294),n=s(98595),a=s(10267),r=s(51252);e.default=function(){return(0,t.jsx)(i.Fragment,{children:(0,t.jsx)("section",{children:(0,t.jsx)(n.Z,{children:(0,t.jsx)(a.Z,{children:(0,t.jsxs)(r.Z,{lg:"8",className:"m-auto",children:[(0,t.jsxs)("div",{className:"title3",children:[(0,t.jsx)("h4",{children:"about us"}),(0,t.jsx)("h2",{className:"title-inner3",children:"welcome to multi store"}),(0,t.jsx)("div",{className:"line"})]}),(0,t.jsx)("div",{className:"about-text",children:(0,t.jsx)("p",{children:"x, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."})})]})})})})})}},13936:function(A,e,s){"use strict";s.r(e);var t=s(85893),i=s(67294),n=s(46066),a=s(64689),r=[{img:"home3",title:"special offer",desc:"men's shoes",link:"#"},{img:"home4",title:"special offer",desc:"men's shoes",link:"#"},{img:"home5",title:"special offer",desc:"men's shoes",link:"#"}];e.default=function(){return(0,t.jsx)(i.Fragment,{children:(0,t.jsx)("section",{className:"p-0",children:(0,t.jsx)(n.Z,{className:"slide-1 home-slider",children:r.map((function(A,e){return(0,t.jsx)(a.default,{img:A.img,link:A.link,title:A.title,desc:A.desc},e)}))})})})}},81526:function(A,e,s){"use strict";s.r(e);var t=s(85893),i=s(67294),n=s(98595),a=s(10267),r=s(51252);e.default=function(){return(0,t.jsx)(i.Fragment,{children:(0,t.jsx)("section",{className:"p-0",children:(0,t.jsx)(n.Z,{children:(0,t.jsx)(a.Z,{className:"background",children:["size 06","size 07","size 08","size 09","size 10"].map((function(A,e){return(0,t.jsx)(r.Z,{children:(0,t.jsx)("a",{href:"#",children:(0,t.jsx)("div",{className:"contain-bg",children:(0,t.jsx)("h4",{"data-hover":"size 06",children:A})})})},e)}))})})})})}},63770:function(A,e,s){"use strict";s.r(e),s.d(e,{default:function(){return d}});var t=s(85893),i=s(67294),n=s(51252),a=s(34726),r=s(98595),l=s(10267),c=[{img:{src:"/_next/static/media/cat1.6b6ec245.jpg",height:307,width:613,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAQACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABwEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAArIP/xAAcEAACAgIDAAAAAAAAAAAAAAABAgMRAAQTQUL/2gAIAQEAAT8ATW4t6WddmciWrjZrQUPI6z//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/AH//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/AH//2Q==",blurWidth:8,blurHeight:4},title:"men",link:"#"},{img:{src:"/_next/static/media/cat2.12800236.jpg",height:307,width:614,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAQACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABwEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAAAq4H/xAAcEAADAAEFAAAAAAAAAAAAAAABAgMABBIhUYH/2gAIAQEAAT8ASbS1tGW9dtKcoSCvnWf/xAAVEQEBAAAAAAAAAAAAAAAAAAAAAf/aAAgBAgEBPwCP/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAFBcf/aAAgBAwEBPwBzD//Z",blurWidth:8,blurHeight:4},title:"women",link:"#"},{img:{src:"/_next/static/media/cat3.77d89e17.jpg",height:307,width:613,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAQACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABwEBAQAAAAAAAAAAAAAAAAAAAgP/2gAMAwEAAhADEAAAAKcBT//EAB0QAAICAQUAAAAAAAAAAAAAAAIDAQQABRESM5H/2gAIAQEAAT8ABLw1NjRv2eBt6ZkZXt5n/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAJCcv/aAAgBAgEBPwBK0f/EABgRAAIDAAAAAAAAAAAAAAAAAAABA0Jy/9oACAEDAQE/AJKZR//Z",blurWidth:8,blurHeight:4},title:"kids",link:"#"}],o=function(A){var e=A.img,s=A.title,i=A.link;return(0,t.jsx)(n.Z,{sm:"4",className:"border-padding",children:(0,t.jsxs)("div",{className:"category-banner",children:[(0,t.jsx)("div",{children:(0,t.jsx)(a.Z,{src:e,className:"img-fluid blur-up lazyload bg-img",alt:""})}),(0,t.jsx)("div",{className:"category-box",children:(0,t.jsx)("a",{href:i,children:(0,t.jsx)("h2",{children:s})})})]})})},d=function(){return(0,t.jsx)(i.Fragment,{children:(0,t.jsx)("section",{className:"p-0 ratio2_1",children:(0,t.jsx)(r.Z,{fluid:!0,children:(0,t.jsx)(l.Z,{className:"category-border",children:c.map((function(A,e){return(0,t.jsx)(o,{img:A.img.src,title:A.title},e)}))})})})})}},27298:function(A,e,s){"use strict";s.r(e),s.d(e,{default:function(){return x}});var t=s(26042),i=s(69396),n=s(85893),a=(s(67294),s(46066)),r=s(79011),l=s(34726),c=s(98595),o=s(10267),d=s(51252),u={src:"/_next/static/media/cat2.f5019549.png",height:26,width:42,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAd0lEQVR42i2KPQpAYByH/y5hcQeDMli8k4MopZzAZFNGm4WUwctkoJQBt7BwF48yPP0+RT3aUHcvAPojpWshw+/yjyZYlJF6+hUfQs2hFMoEMzBs+AFvowGHHF8I4SBUEIMLHviMDtp8hw5Owkg5w0Je0End+noBa55YUiAexvEAAAAASUVORK5CYII=",blurWidth:8,blurHeight:5},g=[{img:{src:"/_next/static/media/cat1.21480143.png",height:26,width:36,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAAhUlEQVR42k2OMQ5FQBRF/fz/N2EzU2tFJKLSa/RsQBRoKGm8aiqxAbVKoWIvziskJjm57917MzOOHnNOjrmmHzBLCg14+JGGH3PJF/0DRRnQTAsgrxtE1cdc4fGsDi5GACXzjCYQEtbso75tWUZoMXKoKOxogXb6qRgs9FBT1GBBN3PKcQOzMmOqTM3a1QAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:6},title:"sport shoes",link:"#"},{img:u,title:"casual shoes",link:"#"},{img:{src:"/_next/static/media/cat3.b7767eec.png",height:26,width:38,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAb0lEQVR42mOAAfs7y9jA9N1lJfZ3l88F8uPt7ywvBUkwAcWRFW4HKvAGYnEgnscA1cUOlBAF6pgIFJwFVegM5O8CSZYCOZOAeC1QYAZQQS4QbwSKtwL5bQwQyeUbgLgOiNuBeB4QnwaKb7O/u/wiAFghR9OKUNNhAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:5},title:"formal shoes",link:"#"},{img:{src:"/_next/static/media/cat4.943df99a.png",height:22,width:38,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAfElEQVR42mOwv7OcCYhZGIDA/u5yDSBeBOQ3A+n5QDyHAQagCtjt7yzbb3932WIGIACym4DEcjkgngTEfUCcCcSNQJwLxLOACtYzABlrgQxVIK0NpD2AplQCcT+QPRWIsxiABJCzvA2Iq4HsaUBJb7s7y5iA7DP2d5aHAQCWqky7FBnPMQAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:5},title:"flat",link:"#"},{img:{src:"/_next/static/media/cat5.365d5aac.png",height:28,width:30,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAYAAAA1WQxeAAAAi0lEQVR42mNABvZ3ljOD6bvLuOzvLNsGxEUMEIHljEDMDGWzABX0AOllQFoDJMCEasqyFqBYC9C0bCA7E2aCEpCjDqQ7gLQzUHINkH0UyF4LsrcQyOgD0sVAbAWUqAby84Ds9UC2B0jBEiRHloNMgFp1D6jAHCTYA8Q1QIFJQLoaaqUkkH/J/s5yRQCWtlqchQx3vwAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:7},title:"heels",link:"#"},{img:{src:"/_next/static/media/cat6.6a6db69e.png",height:19,width:37,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAAYklEQVR42mOwv7Ocwe7OMhBmBrIV7O8smwikpwJxFRBvZwAKhNrfXb4BiJcB2YuB9F6ghBeQLQdiMwCJC1Bd84C4H4hnAPE2IN4INWF5JVDRASBeDGRvAdIbgBqAkiB6+QUANTJJniPcZMUAAAAASUVORK5CYII=",blurWidth:8,blurHeight:4},title:"boots",link:"#"},{img:u,title:"casual shoes",link:"#"},{img:u,title:"casual shoes",link:"#"}],h=function(A){var e=A.img,s=A.title,t=A.link;return(0,n.jsxs)("div",{className:"category-block",children:[(0,n.jsx)("a",{href:t,children:(0,n.jsx)("div",{className:"category-image",children:(0,n.jsx)(l.Z,{src:e,alt:""})})}),(0,n.jsx)("div",{className:"category-details",children:(0,n.jsx)("a",{href:t,children:(0,n.jsx)("h5",{children:s})})})]})},x=function(){return(0,n.jsx)(c.Z,{children:(0,n.jsx)("section",{className:"section-b-space border-section border-top-0",children:(0,n.jsx)(o.Z,{children:(0,n.jsx)(d.Z,{children:(0,n.jsx)(a.Z,(0,i.Z)((0,t.Z)({},r.RX),{className:"slide-6 no-arrow",children:g.map((function(A,e){return(0,n.jsx)(h,{img:A.img.src,link:A.link,title:A.title},e)}))}))})})})})}},82953:function(A,e,s){"use strict";s.r(e),s.d(e,{default:function(){return n}});var t=s(85893),i=s(67294),n=function(){return(0,t.jsx)(i.Fragment,{})}},12877:function(A,e,s){"use strict";s.r(e);var t=s(85893),i=s(67294),n=s(98836),a=s(13936),r=s(27298),l=s(54795),c=s(82953),o=s(63770),d=s(2607),u=s(37554),g=s(3041),h=s(81526),x=s(83839),m=s(15822),j=s(53016),C=s(10373),p=s(1011),f=s(79011),E=s(42410),Q=s(64593);e.default=function(){return(0,i.useEffect)((function(){document.documentElement.style.setProperty("--theme-deafult","#f7869b")})),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(Q.Z,{children:[(0,t.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,t.jsx)("link",{rel:"icon",type:"image/x-icon",href:"/assets/images/favicon/10.png"})]}),(0,t.jsx)(E.Z,{}),(0,t.jsx)(n.Z,{logoName:"logo/6.png",direction:"bottom",topClass:"top-header top-header-dark"}),(0,t.jsx)(a.default,{}),(0,t.jsx)(r.default,{}),(0,t.jsx)(l.default,{}),(0,t.jsx)(c.default,{}),(0,t.jsx)(d.Z,{type:"shoes",line:!0,innerClass:"title3",inner:"title-inner3",title:"our Collections",subtitle:"special offer",designClass:"section-b-space p-t-0 ratio_asos",productSlider:f.XG,noSlider:"true",cartClass:"cart-info"}),(0,t.jsx)(o.default,{}),(0,t.jsx)(g.Z,{type:"shoes"}),(0,t.jsx)("div",{className:"section-b-space",children:(0,t.jsx)(h.default,{})}),(0,t.jsx)(u.Z,{type:"shoes",noTitle:!0,designClass:"section-b-space p-t-0 ratio_asos",productSlider:f.XG,noSlider:"true",cartClass:"cart-info"}),(0,t.jsx)(x.Z,{type:"shoes",sectionClass:"blog blog-bg section-b-space ratio2_3",inner:"title-inner3",title:"title3"}),(0,t.jsx)(m.Z,{sectionClass:"service border-section small-section border-top-0"}),(0,t.jsx)("section",{className:"instagram ratio_square",children:(0,t.jsx)(j.Z,{type:"shoes"})}),(0,t.jsx)("div",{className:"section-b-space",children:(0,t.jsx)(C.Z,{})}),(0,t.jsx)(p.Z,{logoName:"logo/6.png",layoutClass:"black-subfooter"})]})}}},function(A){A.O(0,[7971,5744,6066,8369,5254,1549,9011,3228,3041,5756,282,9774,2888,179],(function(){return e=97396,A(A.s=e);var e}));var e=A.O();_N_E=e}]);
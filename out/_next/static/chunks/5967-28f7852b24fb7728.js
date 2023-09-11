"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5967],{51299:function(e,s){s.Z={src:"/_next/static/media/2.4a39a7b5.jpg",height:385,width:1370,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAIACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABwEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAApQP/xAAVEAEBAAAAAAAAAAAAAAAAAAAAQv/aAAgBAQABPwCn/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPwB//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPwB//9k=",blurWidth:8,blurHeight:2}},3038:function(e,s,n){var t=n(85893),i=(n(67294),n(24561));s.Z=function(){return(0,t.jsxs)(i.ZP,{className:"skeleton-svg",speed:10,children:[(0,t.jsx)("rect",{className:"skeleton-img",x:"2",y:"2",rx:"0",ry:"0"}),(0,t.jsx)("rect",{className:"skeleton-c1",x:"0",rx:"0",ry:"0"}),(0,t.jsx)("rect",{className:"skeleton-c2",x:"0",rx:"0",ry:"0"}),(0,t.jsx)("rect",{className:"skeleton-c3",x:"0",rx:"0",ry:"0"})]})}},35967:function(e,s,n){n.r(s);var t=n(7297),i=n(10797),r=n(85893),c=n(67294),l=n(51252),a=n(10267),o=n(34726),d=n(97975),u=n(36955),A=n(51299),x=n(55850),h=n(17283),m=n(37486),p=n(13228),j=n(40196),g=n(11163),f=n(3038),v=n(9614),y=n(92097),N=n(86040);function w(){var e=(0,t.Z)(["\n  query products(\n    $type: _CategoryType!\n    $indexFrom: Int!\n    $limit: Int!\n    $color: String!\n    $brand: [String!]!\n    $sortBy: _SortBy!\n    $priceMax: Int!\n    $priceMin: Int!\n  ) {\n    products(\n      type: $type\n      indexFrom: $indexFrom\n      limit: $limit\n      color: $color\n      brand: $brand\n      sortBy: $sortBy\n      priceMax: $priceMax\n      priceMin: $priceMin\n    ) {\n      total\n      hasMore\n      items {\n        id\n        title\n        description\n        type\n        brand\n        category\n        price\n        new\n        sale\n        stock\n        discount\n        variants {\n          id\n          sku\n          size\n          color\n          image_id\n        }\n        images {\n          image_id\n          id\n          alt\n          src\n        }\n      }\n    }\n  }\n"]);return w=function(){return e},e}var C=(0,h.Ps)(w());s.default=function(e){var s=e.colClass,n=e.layoutList,t=e.openSidebar,h=e.noSidebar,w=(0,c.useContext)(v.Z),Z=w.quantity,b=(0,c.useContext)(y.jv),k=(0,c.useContext)(N.Dh),B=(0,g.useRouter)(),P=(0,c.useState)(8),I=P[0],M=P[1],S=(0,c.useContext)(j.$R),E=(0,c.useState)(s),Q=E[0],$=E[1],_=S.state.symbol,L=(0,c.useContext)(m.Z),F=L.selectedBrands,D=L.selectedColor,T=L.selectedPrice,O=L.state,z=L.selectedSize,R=(0,c.useState)("AscOrder"),H=R[0],U=R[1],K=(0,c.useState)(!1),W=K[0],Y=K[1],G=(0,c.useState)(n),V=G[0],J=G[1],q=(0,c.useState)(),X=(q[0],q[1]);(0,c.useEffect)((function(){var e=window.location.pathname;X(e),B.push("".concat(e,"?").concat(L.state,"&brand=").concat(F,"&color=").concat(D,"&size=").concat(z,"&minPrice=").concat(T.min,"&maxPrice=").concat(T.max),void 0,{shallow:!0})}),[F,D,z,T]);var ee=(0,x.a)(C,{variables:{type:O,priceMax:T.max,priceMin:T.min,color:D,brand:F,sortBy:H,indexFrom:0,limit:I}}),se=ee.loading,ne=ee.data,te=ee.fetchMore;return(0,r.jsx)(l.Z,{className:"collection-content",children:(0,r.jsx)("div",{className:"page-main-content",children:(0,r.jsx)(a.Z,{children:(0,r.jsxs)(l.Z,{sm:"12",children:[(0,r.jsxs)("div",{className:"top-banner-wrapper",children:[(0,r.jsx)("a",{href:null,children:(0,r.jsx)(o.Z,{src:A.Z.src,className:"img-fluid blur-up lazyload",alt:""})}),(0,r.jsxs)("div",{className:"top-banner-content small-section",children:[(0,r.jsx)("h4",{children:"fashion"}),(0,r.jsx)("h5",{children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."}),(0,r.jsx)("p",{children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."})]})]}),(0,r.jsx)(a.Z,{children:(0,r.jsx)(l.Z,{xs:"12",children:(0,r.jsxs)("ul",{className:"product-filter-tags",children:[F.map((function(e,s){return(0,r.jsx)("li",{children:(0,r.jsxs)("a",{href:null,className:"filter_tag",children:[e,(0,r.jsx)("i",{className:"fa fa-close",onClick:function(){return function(e){var s=(0,i.Z)(F);s.splice(F.indexOf(e),1),L.setSelectedBrands(s)}(e)}})]})},s)})),D?(0,r.jsx)("li",{children:(0,r.jsxs)("a",{href:null,className:"filter_tag",children:[D,(0,r.jsx)("i",{className:"fa fa-close",onClick:function(){L.setSelectedColor("")}})]})}):"",z.map((function(e,s){return(0,r.jsx)("li",{children:(0,r.jsxs)("a",{href:null,className:"filter_tag",children:[e,(0,r.jsx)("i",{className:"fa fa-close",onClick:function(){return function(e){var s=(0,i.Z)(z);s.splice(z.indexOf(e),1),L.setSelectedSize(s)}(e)}})]})},s)})),(0,r.jsx)("li",{children:(0,r.jsxs)("a",{href:null,className:"filter_tag",children:["price: ",T.min,"- ",T.max]})})]})})}),(0,r.jsxs)("div",{className:"collection-product-wrapper",children:[(0,r.jsxs)("div",{className:"product-top-filter",children:[h?"":(0,r.jsx)(a.Z,{children:(0,r.jsx)(l.Z,{xl:"12",children:(0,r.jsx)("div",{className:"filter-main-btn",onClick:function(){return t()},children:(0,r.jsxs)("span",{className:"filter-btn btn btn-theme",children:[(0,r.jsx)("i",{className:"fa fa-filter","aria-hidden":"true"})," ","Filter"]})})})}),(0,r.jsx)(a.Z,{children:(0,r.jsx)(l.Z,{children:(0,r.jsxs)("div",{className:"product-filter-content",children:[(0,r.jsx)("div",{className:"search-count",children:(0,r.jsxs)("h5",{children:[ne?"Showing Products 1-".concat(ne.products.items.length," of ").concat(ne.products.total):"loading"," ","Result"]})}),(0,r.jsx)("div",{className:"collection-view",children:(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:(0,r.jsx)("i",{className:"fa fa-th grid-layout-view",onClick:function(){J(""),$("col-lg-3")}})}),(0,r.jsx)("li",{children:(0,r.jsx)("i",{className:"fa fa-list-ul list-layout-view",onClick:function(){J("list-view"),$("col-lg-12")}})})]})}),(0,r.jsx)("div",{className:"collection-grid-view",style:"list-view"===V?{visibility:"hidden"}:{visibility:"visible"},children:(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:(0,r.jsx)(o.Z,{src:"/assets/images/icon/2.png",alt:"",className:"product-2-layout-view",onClick:function(){return $("col-lg-6")}})}),(0,r.jsx)("li",{children:(0,r.jsx)(o.Z,{src:"/assets/images/icon/3.png",alt:"",className:"product-3-layout-view",onClick:function(){return $("col-lg-4")}})}),(0,r.jsx)("li",{children:(0,r.jsx)(o.Z,{src:"/assets/images/icon/4.png",alt:"",className:"product-4-layout-view",onClick:function(){return $("col-lg-3")}})}),(0,r.jsx)("li",{children:(0,r.jsx)(o.Z,{src:"/assets/images/icon/6.png",alt:"",className:"product-6-layout-view",onClick:function(){return $("col-lg-2")}})})]})}),(0,r.jsx)("div",{className:"product-page-per-view",children:(0,r.jsxs)("select",{onChange:function(e){return M(parseInt(e.target.value))},children:[(0,r.jsx)("option",{value:"10",children:"10 Products Per Page"}),(0,r.jsx)("option",{value:"15",children:"15 Products Per Page"}),(0,r.jsx)("option",{value:"20",children:"20 Products Per Page"})]})}),(0,r.jsx)("div",{className:"product-page-filter",children:(0,r.jsxs)("select",{onChange:function(e){return U(e.target.value)},children:[(0,r.jsx)("option",{value:"AscOrder",children:"Sorting items"}),(0,r.jsx)("option",{value:"HighToLow",children:"High To Low"}),(0,r.jsx)("option",{value:"LowToHigh",children:"Low To High"}),(0,r.jsx)("option",{value:"Newest",children:"Newest"}),(0,r.jsx)("option",{value:"AscOrder",children:"Asc Order"}),(0,r.jsx)("option",{value:"DescOrder",children:"Desc Order"})]})})]})})})]}),(0,r.jsx)("div",{className:"product-wrapper-grid ".concat(V),children:(0,r.jsx)(a.Z,{children:ne&&ne.products&&ne.products.items&&0!==ne.products.items.length&&!se?ne&&ne.products.items.map((function(e,s){return(0,r.jsx)("div",{className:Q,children:(0,r.jsx)("div",{className:"product",children:(0,r.jsx)("div",{children:(0,r.jsx)(p.Z,{des:!0,product:e,symbol:_,cartClass:"cart-info cart-wrap",addCompare:function(){return k.addToCompare(e)},addWishlist:function(){return b.addToWish(e)},addCart:function(){return w.addToCart(e,Z)}})})})},s)})):ne&&ne.products&&ne.products.items&&0===ne.products.items.length?(0,r.jsx)(l.Z,{xs:"12",children:(0,r.jsx)("div",{children:(0,r.jsxs)("div",{className:"col-sm-12 empty-cart-cls text-center",children:[(0,r.jsx)("img",{src:"/assets/images/empty-search.jpg",className:"img-fluid mb-4 mx-auto",alt:""}),(0,r.jsx)("h3",{children:(0,r.jsx)("strong",{children:"Your Cart is Empty"})}),(0,r.jsx)("h4",{children:"Explore more shortlist some items."})]})})}):(0,r.jsxs)("div",{className:"row mx-0 margin-default mt-4",children:[(0,r.jsx)("div",{className:"col-xl-3 col-lg-4 col-6",children:(0,r.jsx)(f.Z,{})}),(0,r.jsx)("div",{className:"col-xl-3 col-lg-4 col-6",children:(0,r.jsx)(f.Z,{})}),(0,r.jsx)("div",{className:"col-xl-3 col-lg-4 col-6",children:(0,r.jsx)(f.Z,{})}),(0,r.jsx)("div",{className:"col-xl-3 col-lg-4 col-6",children:(0,r.jsx)(f.Z,{})})]})})}),(0,r.jsx)("div",{className:"section-t-space",children:(0,r.jsx)("div",{className:"text-center",children:(0,r.jsx)(a.Z,{children:(0,r.jsx)(l.Z,{xl:"12",md:"12",sm:"12",children:ne&&ne.products&&ne.products.hasMore&&(0,r.jsxs)(d.Z,{className:"load-more",onClick:function(){return Y(!0),void setTimeout((function(){return te({variables:{indexFrom:ne.products.items.length},updateQuery:function(e,s){var n=s.fetchMoreResult;return n?(Y(!1),{products:{__typename:e.products.__typename,total:e.products.total,items:(0,i.Z)(e.products.items).concat((0,i.Z)(n.products.items)),hasMore:n.products.hasMore}}):e}})}),1e3)},children:[W&&(0,r.jsx)(u.Z,{animation:"border",variant:"light"}),"Load More"]})})})})})]})]})})})})}}}]);
"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[908],{20908:function(s,e,a){var i=a(85893),l=a(67294),t=a(11163),c=a(41664),n=a.n(c),r=a(34726),d=a(56571),o=a(32701),u=a(10684),h=a(10267),x=a(51252),m=a(40196),j=a(9614);e.Z=function(s){for(var e=s.product,a=s.addCart,c=s.addWishlist,p=s.addToCompare,f=s.spanClass,N=(0,l.useContext)(m.$R).state,g=(0,t.useRouter)(),v=(0,l.useContext)(j.Z),b=v.plusQty,y=v.minusQty,k=v.quantity,C=v.setQuantity,w=(0,l.useState)(!1),Z=w[0],q=w[1],z=(0,l.useState)(!1),Q=z[0],_=z[1],V=function(){return q(!Z)},A=function(){return _(!Q)},F=[],E=[],I=0;I<5;I++)E.push((0,i.jsx)("i",{className:"fa fa-star"},I));return(0,i.jsxs)("div",{className:"product-box product-wrap",children:[(0,i.jsxs)("div",{className:"img-wrapper",children:[(0,i.jsxs)("div",{className:"lable-block",children:["true"===e.new?(0,i.jsx)("span",{className:"lable3",children:"new"}):"","true"===e.sale?(0,i.jsx)("span",{className:"lable4",children:"on sale"}):""]}),(0,i.jsx)("div",{className:"front",children:(0,i.jsx)("a",{href:null,children:(0,i.jsx)(r.Z,{alt:"",src:e.images[0].src,className:"img-fluid blur-up lazyload bg-img"})})}),(0,i.jsxs)("div",{className:"cart-info cart-wrap",children:[(0,i.jsx)("a",{href:null,title:"Add to Wishlist",onClick:c,children:(0,i.jsx)("i",{className:"fa fa-heart","aria-hidden":"true"})}),(0,i.jsxs)("button",{onClick:a,title:"Add to cart",children:[(0,i.jsx)("i",{className:"fa fa-shopping-cart"}),f?(0,i.jsx)("span",{children:"Add to cart"}):""]}),(0,i.jsx)("a",{href:null,title:"Compare",onClick:A,children:(0,i.jsx)("i",{className:"fa fa-refresh","aria-hidden":"true"})}),(0,i.jsxs)(d.Z,{isOpen:Q,toggle:A,centered:!0,children:[(0,i.jsx)(o.Z,{toggle:A,children:"Quick View"}),(0,i.jsx)(u.Z,{children:(0,i.jsx)(h.Z,{className:"compare-modal",children:(0,i.jsx)(x.Z,{lg:"12",children:(0,i.jsxs)("div",{className:"media",children:[(0,i.jsx)(r.Z,{src:e.images[0].src,alt:"",className:"img-fluid"}),(0,i.jsxs)("div",{className:"media-body align-self-center text-center",children:[(0,i.jsxs)("h5",{children:[(0,i.jsx)("i",{className:"fa fa-check"}),"Item"," ",(0,i.jsxs)("span",{children:[e.title," "]}),(0,i.jsx)("span",{children:" successfully added to your Compare list"})]}),(0,i.jsx)("div",{className:"buttons d-flex justify-content-center",children:(0,i.jsx)(n(),{href:"/page/compare",children:(0,i.jsx)("a",{className:"btn-sm btn-solid",onClick:p,children:"View Compare list"})})})]})]})})})})]})]}),(0,i.jsx)("div",{className:"quick-view-part",children:(0,i.jsx)("a",{className:"mobile-quick-view",href:null,"data-toggle":"modal","data-target":"#quick-view",title:"Quick View",onClick:V,children:(0,i.jsx)("i",{className:"fa fa-search","aria-hidden":"true"})})})]}),(0,i.jsxs)("div",{className:"product-info",children:[(0,i.jsx)("div",{className:"rating",children:E}),(0,i.jsx)("h6",{children:e.title}),(0,i.jsxs)("h4",{children:[N.symbol,((e.price-e.price*e.discount/100)*N.value).toFixed(2),(0,i.jsx)("del",{children:(0,i.jsxs)("span",{className:"money",children:[N.symbol,(e.price*N.value).toFixed(2)]})})]})]}),(0,i.jsx)(d.Z,{isOpen:Z,toggle:V,className:"quickview-modal",size:"lg",centered:!0,children:(0,i.jsx)(u.Z,{children:(0,i.jsxs)(h.Z,{children:[(0,i.jsx)(x.Z,{lg:"6",xs:"12",children:(0,i.jsx)("div",{className:"quick-view-img",children:(0,i.jsx)(r.Z,{src:e.images[0].src,alt:"",className:"img-fluid"})})}),(0,i.jsx)(x.Z,{lg:"6",className:"rtl-text",children:(0,i.jsxs)("div",{className:"product-right",children:[(0,i.jsxs)("h2",{children:[" ",e.title," "]}),(0,i.jsxs)("h3",{children:[N.symbol,(e.price*N.value).toFixed(2)]}),e.variants?(0,i.jsx)("ul",{className:"color-variant",children:F?(0,i.jsx)("ul",{className:"color-variant",children:F.map((function(s,a){return(0,i.jsx)("li",{className:s.color,title:s.color,onClick:function(){return variantChangeByColor(s.image_id,e.images)}},a)}))}):""}):"",(0,i.jsxs)("div",{className:"border-product",children:[(0,i.jsx)("h6",{className:"product-title",children:"product details"}),(0,i.jsx)("p",{children:e.description})]}),(0,i.jsxs)("div",{className:"product-description border-product",children:[e.size?(0,i.jsx)("div",{className:"size-box",children:(0,i.jsx)("ul",{children:e.size.map((function(s,e){return(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:null,children:s})},e)}))})}):"",(0,i.jsx)("h6",{className:"product-title",children:"quantity"}),(0,i.jsx)("div",{className:"qty-box",children:(0,i.jsxs)("div",{className:"input-group",children:[(0,i.jsx)("span",{className:"input-group-prepend",children:(0,i.jsx)("button",{type:"button",className:"btn quantity-left-minus",onClick:y,"data-type":"minus","data-field":"",children:(0,i.jsx)("i",{className:"fa fa-angle-left"})})}),(0,i.jsx)("input",{type:"text",name:"quantity",value:k,onChange:function(s){C(parseInt(s.target.value))},className:"form-control input-number"}),(0,i.jsx)("span",{className:"input-group-prepend",children:(0,i.jsx)("button",{type:"button",className:"btn quantity-right-plus",onClick:function(){return b(e)},"data-type":"plus","data-field":"",children:(0,i.jsx)("i",{className:"fa fa-angle-right"})})})]})})]}),(0,i.jsxs)("div",{className:"product-buttons",children:[(0,i.jsx)("button",{className:"btn btn-solid",onClick:function(){return a(e,k)},children:"add to cart"}),(0,i.jsx)("button",{className:"btn btn-solid",onClick:function(){var s=e.title.split(" ").join("");g.push("/product-details/".concat(e.id)+"-"+"".concat(s),void 0,{shallow:!0})},children:"View detail"})]})]})})]})})})]})}}}]);
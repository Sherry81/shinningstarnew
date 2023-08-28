"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7322],{18967:function(e,s){s.Z={src:"/_next/static/media/size-chart.94777219.jpg",height:580,width:580,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABwEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAAq4P/xAAbEAAABwEAAAAAAAAAAAAAAAAAAQQTFDGT4f/aAAgBAQABPwBg6kqtOD//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/AH//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/AH//2Q==",blurWidth:8,blurHeight:8}},65995:function(e,s,a){var n=a(85893),t=a(67294),r=a(98130);s.Z=function(){var e=function(){return(0,n.jsx)("span",{children:"You are good to go!"})},s=new Date,a=s.getFullYear(),c=s.getMonth(),i=s.getDate(),l=new Date(a,c,i+10).getTime();return(0,n.jsx)(t.Fragment,{children:(0,n.jsx)(r.ZP,{date:l,renderer:function(s){var a=s.days,t=s.hours,r=s.minutes,c=s.seconds;return s.completed?(0,n.jsx)(e,{}):(0,n.jsx)("div",{className:"timer-box",children:(0,n.jsx)("div",{className:"timer",children:(0,n.jsxs)("div",{className:"timer-p",id:"demo",children:[(0,n.jsxs)("span",{children:[a,(0,n.jsx)("span",{className:"padding-l",children:":"}),(0,n.jsx)("span",{className:"timer-cal",children:"Days"})]}),(0,n.jsxs)("span",{children:[t,(0,n.jsx)("span",{className:"padding-l",children:":"}),(0,n.jsx)("span",{className:"timer-cal",children:"Hrs"})]}),(0,n.jsxs)("span",{children:[r,(0,n.jsx)("span",{className:"padding-l",children:":"}),(0,n.jsx)("span",{className:"timer-cal",children:"Min"})]}),(0,n.jsxs)("span",{children:[c,(0,n.jsx)("span",{className:"timer-cal",children:"Sec"})]})]})})})}})})}},88463:function(e,s,a){a.r(s);var n=a(85893),t=(a(67294),a(34726));s.default=function(e){var s=e.image;return(0,n.jsx)(t.Z,{src:"".concat(s.src),alt:s.alt,className:"img-fluid image_zoom_cls-0"})}},27322:function(e,s,a){a.r(s);var n=a(26042),t=a(69396),r=a(7297),c=a(85893),i=a(67294),l=a(98595),d=a(10267),o=a(51252),u=a(56571),A=a(32701),h=a(10684),m=a(34726),x=a(609),p=a(41664),j=a.n(p),g=a(46066),f=a(18967),N=a(17283),v=a(55850),b=a(40196),Z=a(65995),C=a(88463),w=a(9614);function k(){var e=(0,r.Z)(["\n    query product ($id:Int!) {\n        product (id:$id) {\n            id\n            title\n            description\n            type\n            brand\n            category \n            price\n            new\n            sale\n            discount\n            stock\n            variants\n            {\n                id\n                color\n                image_id\n                variant_id\n                size\n            }\n            images\n            {\n                image_id\n                src\n            }\n        }\n    }\n"]);return k=function(){return e},e}var y=(0,N.Ps)(k());s.default=function(){var e=(0,i.useContext)(w.Z),s=e.addToCart,a=(0,i.useContext)(b.$R).state.symbol,r=(0,i.useState)({nav1:null,nav2:null}),p=r[0],N=r[1],k=(0,i.useRef)(),E=(0,i.useRef)(),Q=(0,i.useState)(!1),S=Q[0],D=Q[1],B=function(){return D(!S)},_=(0,i.useState)(!1),z=_[0],T=_[1],I=e.stock,F=e.plusQty,M=e.minusQty,P=e.quantity,q=[],U=[],K=(0,v.a)(y,{variables:{id:1}}),R=K.loading,G=K.data;(0,i.useEffect)((function(){N({nav1:k.current,nav2:E.current})}),[G]);var Y=p.nav1,H=p.nav2;return(0,c.jsx)("section",{children:(0,c.jsx)("div",{className:"collection-wrapper",children:(0,c.jsx)(l.Z,{children:G&&G.product&&0!==G.product.length&&!R?(0,c.jsxs)(d.Z,{children:[(0,c.jsx)(o.Z,{lg:"6",children:(0,c.jsx)(g.Z,(0,t.Z)((0,n.Z)({},{slidesToShow:1,slidesToScroll:1,dots:!1,arrows:!0,fade:!0}),{asNavFor:H,ref:function(e){return k.current=e},className:"product-right-slick",children:(G.product.variants,G.product.images.map((function(e,s){return(0,c.jsx)("div",{children:(0,c.jsx)(C.default,{image:e})},s)})))}))}),(0,c.jsx)(o.Z,{lg:"6",className:"rtl-text",children:(0,c.jsx)(d.Z,{children:(0,c.jsxs)(o.Z,{children:[(0,c.jsxs)("div",{className:"product-right",children:[(0,c.jsxs)("h2",{children:[" ",G.product.title," "]}),(0,c.jsxs)("h4",{children:[(0,c.jsxs)("del",{children:[a,G.product.price]}),(0,c.jsxs)("span",{children:[G.product.discount,"% off"]})]}),(0,c.jsxs)("h3",{children:[a,G.product.price-G.product.price*G.product.discount/100," "]}),G.product.variants.map((function(e){q.find((function(s){return s.color===e.color}))||q.push(e),U.find((function(s){return s===e.size}))||U.push(e.size)})),q?(0,c.jsx)("ul",{className:"color-variant",children:q.map((function(e,s){return(0,c.jsx)("li",{className:e.color,title:e.color,onClick:function(){return e=s,void E.current.slickGoTo(e);var e}},s)}))}):"",(0,c.jsxs)("div",{className:"product-description border-product",children:[G.product.variants?(0,c.jsxs)("div",{children:[(0,c.jsxs)("h6",{className:"product-title size-text",children:["select size",(0,c.jsx)("span",{children:(0,c.jsx)("a",{href:null,"data-toggle":"modal","data-target":"#sizemodal",onClick:B,children:"size chart"})})]}),(0,c.jsxs)(u.Z,{isOpen:S,toggle:B,centered:!0,children:[(0,c.jsx)(A.Z,{toggle:B,children:"Sheer Straight Kurta"}),(0,c.jsx)(h.Z,{children:(0,c.jsx)(m.Z,{src:f.Z.src,alt:"size",className:"img-fluid"})})]}),(0,c.jsx)("div",{className:"size-box",children:(0,c.jsx)("ul",{children:U.map((function(e,s){return(0,c.jsx)("li",{children:(0,c.jsx)("a",{href:null,children:e})},s)}))})})]}):"",(0,c.jsx)("span",{className:"instock-cls",children:I}),(0,c.jsx)("h6",{className:"product-title",children:"quantity"}),(0,c.jsx)("div",{className:"qty-box",children:(0,c.jsxs)("div",{className:"input-group",children:[(0,c.jsx)("span",{className:"input-group-prepend",children:(0,c.jsx)("button",{type:"button",className:"btn quantity-left-minus",onClick:M,"data-type":"minus","data-field":"",children:(0,c.jsx)("i",{className:"fa fa-angle-left"})})}),(0,c.jsx)(x.Z,{type:"text",name:"quantity",value:P,onChange:function(e){setQuantity(parseInt(e.target.value))},className:"form-control input-number"}),(0,c.jsx)("span",{className:"input-group-prepend",children:(0,c.jsx)("button",{type:"button",className:"btn quantity-right-plus",onClick:function(){return F(G.product)},"data-type":"plus","data-field":"",children:(0,c.jsx)("i",{className:"fa fa-angle-right"})})})]})})]}),(0,c.jsxs)("div",{className:"product-buttons",children:[(0,c.jsx)("a",{href:null,className:"btn btn-solid",onClick:function(){return s(G.product,P)},children:"add to cart"}),(0,c.jsx)(j(),{href:"/page/account/checkout",children:(0,c.jsx)("a",{className:"btn btn-solid",onClick:function(){return BuynowClicked(item,P)},children:"buy now"})})]}),(0,c.jsxs)("div",{className:"border-product",children:[(0,c.jsx)("h6",{className:"product-title",children:"product details"}),(0,c.jsx)("p",{children:G.product.description})]}),(0,c.jsxs)("div",{className:"border-product",children:[(0,c.jsx)("h6",{className:"product-title",children:"share it"}),(0,c.jsx)("div",{className:"product-icon",children:(0,c.jsxs)("ul",{className:"product-social",children:[(0,c.jsx)("li",{children:(0,c.jsx)("a",{href:"https://www.facebook.com",target:"_blank",children:(0,c.jsx)("i",{className:"fa fa-facebook"})})}),(0,c.jsx)("li",{children:(0,c.jsx)("a",{href:"https://plus.google.com",target:"_blank",children:(0,c.jsx)("i",{className:"fa fa-google-plus"})})}),(0,c.jsx)("li",{children:(0,c.jsx)("a",{href:"https://twitter.com",target:"_blank",children:(0,c.jsx)("i",{className:"fa fa-twitter"})})}),(0,c.jsx)("li",{children:(0,c.jsx)("a",{href:"https://www.instagram.com",target:"_blank",children:(0,c.jsx)("i",{className:"fa fa-instagram"})})})]})})]}),(0,c.jsxs)("div",{className:"border-product",children:[(0,c.jsx)("h6",{className:"product-title",children:"Time Reminder"}),(0,c.jsx)(Z.Z,{})]})]}),(0,c.jsx)(u.Z,{open:z,onClose:function(){T(!1)},center:!0,children:(0,c.jsx)("div",{className:"modal-dialog modal-dialog-centered",role:"document",children:(0,c.jsxs)("div",{className:"modal-content",children:[(0,c.jsx)(A.Z,{className:"modal-header",children:(0,c.jsx)("h5",{className:"modal-title",id:"exampleModalLabel",children:"Sheer Straight Kurta"})}),(0,c.jsx)(h.Z,{className:"modal-body",children:(0,c.jsx)(m.Z,{src:f.Z.src,alt:"",className:"img-fluid"})})]})})}),(0,c.jsx)(d.Z,{className:"imgae-outside-thumbnail mt-4",children:(0,c.jsx)(g.Z,(0,t.Z)((0,n.Z)({className:"slider-nav"},{slidesToShow:3,swipeToSlide:!0,arrows:!1,dots:!1,focusOnSelect:!0}),{asNavFor:Y,ref:function(e){return E.current=e},children:G.product.variants?G.product.images.map((function(e,s){return(0,c.jsx)("div",{children:(0,c.jsx)(m.Z,{src:"".concat(e.src),alt:e.alt,className:"img-fluid"},s)},s)})):""}))})]})})})]}):"loading"})})})}}}]);
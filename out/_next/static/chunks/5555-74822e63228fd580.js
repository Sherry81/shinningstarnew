"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5555],{75555:function(e,s,a){a.r(s),a.d(s,{default:function(){return f}});var l=a(26042),r=a(69396),c=a(85893),i=a(67294),n=a(98595),t=a(15538),o=a(10267),d=a(51252),m=a(34726),p=a(9614),x="/_next/static/media/paypal.12ad09cd.png",h=a(86295),u=a(87536),j=a(11163),N=a(40196),f=function(){var e=(0,i.useContext)(p.Z),s=e.state,a=e.cartTotal,f=(0,i.useContext)(N.$R).state.symbol,g=(0,i.useState)({}),b=g[0],y=g[1],v=(0,i.useState)("cod"),_=v[0],Z=v[1],k=(0,u.cI)(),S=k.register,C=k.handleSubmit,q=k.formState.errors,P=(0,j.useRouter)(),F=function(e){Z(e)},A=function(e){b[e.target.name]=e.target.value,y(b)};return(0,c.jsx)("section",{className:"section-b-space",children:(0,c.jsx)(n.Z,{children:(0,c.jsx)("div",{className:"checkout-page",children:(0,c.jsx)("div",{className:"checkout-form",children:(0,c.jsx)(t.Z,{onSubmit:C((function(e){""!==e?(alert("You submitted the form and stuff!"),P.push({pathname:"/page/order-success",state:{items:s,orderTotal:a,symbol:f}})):q.showMessages()})),children:(0,c.jsxs)(o.Z,{children:[(0,c.jsxs)(d.Z,{lg:"6",sm:"12",xs:"12",children:[(0,c.jsx)("div",{className:"checkout-title",children:(0,c.jsx)("h3",{children:"Billing Details"})}),(0,c.jsxs)("div",{className:"row check-out",children:[(0,c.jsxs)("div",{className:"form-group col-md-6 col-sm-6 col-xs-12",children:[(0,c.jsx)("div",{className:"field-label",children:"First Name"}),(0,c.jsx)("input",(0,l.Z)({type:"text",className:"".concat(q.firstName?"error_border":""),name:"first_name"},S("first_name",{required:!0}))),(0,c.jsx)("span",{className:"error-message",children:q.firstName&&"First name is required"})]}),(0,c.jsxs)("div",{className:"form-group col-md-6 col-sm-6 col-xs-12",children:[(0,c.jsx)("div",{className:"field-label",children:"Last Name"}),(0,c.jsx)("input",(0,l.Z)({type:"text",className:"".concat(q.last_name?"error_border":""),name:"last_name"},S("last_name",{required:!0}))),(0,c.jsx)("span",{className:"error-message",children:q.last_name&&"Last name is required"})]}),(0,c.jsxs)("div",{className:"form-group col-md-6 col-sm-6 col-xs-12",children:[(0,c.jsx)("div",{className:"field-label",children:"Phone"}),(0,c.jsx)("input",(0,l.Z)({type:"text",name:"phone",className:"".concat(q.phone?"error_border":"")},S("phone",{pattern:/\d+/}))),(0,c.jsx)("span",{className:"error-message",children:q.phone&&"Please enter number for phone."})]}),(0,c.jsxs)("div",{className:"form-group col-md-6 col-sm-6 col-xs-12",children:[(0,c.jsx)("div",{className:"field-label",children:"Email Address"}),(0,c.jsx)("input",(0,l.Z)({className:"".concat(q.email?"error_border":""),type:"text",name:"email"},S("email",{required:!0,pattern:/^\S+@\S+$/i}))),(0,c.jsx)("span",{className:"error-message",children:q.email&&"Please enter proper email address ."})]}),(0,c.jsxs)("div",{className:"form-group col-md-12 col-sm-12 col-xs-12",children:[(0,c.jsx)("div",{className:"field-label",children:"Country"}),(0,c.jsxs)("select",(0,r.Z)((0,l.Z)({name:"country"},S("country",{required:!0})),{children:[(0,c.jsx)("option",{children:"India"}),(0,c.jsx)("option",{children:"South Africa"}),(0,c.jsx)("option",{children:"United State"}),(0,c.jsx)("option",{children:"Australia"})]}))]}),(0,c.jsxs)("div",{className:"form-group col-md-12 col-sm-12 col-xs-12",children:[(0,c.jsx)("div",{className:"field-label",children:"Address"}),(0,c.jsx)("input",(0,r.Z)((0,l.Z)({className:"".concat(q.address?"error_border":""),type:"text",name:"address"},S("address",{required:!0,min:20,max:120})),{placeholder:"Street address"})),(0,c.jsx)("span",{className:"error-message",children:q.address&&"Please right your address ."})]}),(0,c.jsxs)("div",{className:"form-group col-md-12 col-sm-12 col-xs-12",children:[(0,c.jsx)("div",{className:"field-label",children:"Town/City"}),(0,c.jsx)("input",(0,r.Z)((0,l.Z)({type:"text",className:"".concat(q.city?"error_border":""),name:"city"},S("city",{required:!0})),{onChange:A})),(0,c.jsx)("span",{className:"error-message",children:q.city&&"select one city"})]}),(0,c.jsxs)("div",{className:"form-group col-md-12 col-sm-6 col-xs-12",children:[(0,c.jsx)("div",{className:"field-label",children:"State / County"}),(0,c.jsx)("input",(0,r.Z)((0,l.Z)({type:"text",className:"".concat(q.state?"error_border":""),name:"state"},S("state",{required:!0})),{onChange:A})),(0,c.jsx)("span",{className:"error-message",children:q.state&&"select one state"})]}),(0,c.jsxs)("div",{className:"form-group col-md-12 col-sm-6 col-xs-12",children:[(0,c.jsx)("div",{className:"field-label",children:"Postal Code"}),(0,c.jsx)("input",(0,l.Z)({type:"text",name:"pincode",className:"".concat(q.pincode?"error_border":"")},S("pincode",{pattern:/\d+/}))),(0,c.jsx)("span",{className:"error-message",children:q.pincode&&"Required integer"})]}),(0,c.jsxs)("div",{className:"form-group col-lg-12 col-md-12 col-sm-12 col-xs-12",children:[(0,c.jsx)("input",{type:"checkbox",name:"create_account",id:"account-option"}),"\u2002"," ",(0,c.jsx)("label",{htmlFor:"account-option",children:"Create An Account?"})]})]})]}),(0,c.jsx)(d.Z,{lg:"6",sm:"12",xs:"12",children:s&&s.length>0>0?(0,c.jsxs)("div",{className:"checkout-details",children:[(0,c.jsxs)("div",{className:"order-box",children:[(0,c.jsx)("div",{className:"title-box",children:(0,c.jsxs)("div",{children:["Product ",(0,c.jsx)("span",{children:"Total"})]})}),(0,c.jsx)("ul",{className:"qty",children:s.map((function(e,s){return(0,c.jsxs)("li",{children:[e.title," \xd7 ",e.qty," ",(0,c.jsxs)("span",{children:[f,e.total]})]},s)}))}),(0,c.jsxs)("ul",{className:"sub-total",children:[(0,c.jsxs)("li",{children:["Subtotal"," ",(0,c.jsxs)("span",{className:"count",children:[f,a]})]}),(0,c.jsxs)("li",{children:["Shipping",(0,c.jsxs)("div",{className:"shipping",children:[(0,c.jsxs)("div",{className:"shopping-option",children:[(0,c.jsx)("input",{type:"checkbox",name:"free-shipping",id:"free-shipping"}),(0,c.jsx)("label",{htmlFor:"free-shipping",children:"Free Shipping"})]}),(0,c.jsxs)("div",{className:"shopping-option",children:[(0,c.jsx)("input",{type:"checkbox",name:"local-pickup",id:"local-pickup"}),(0,c.jsx)("label",{htmlFor:"local-pickup",children:"Local Pickup"})]})]})]})]}),(0,c.jsx)("ul",{className:"total",children:(0,c.jsxs)("li",{children:["Total"," ",(0,c.jsxs)("span",{className:"count",children:[f,a]})]})})]}),(0,c.jsxs)("div",{className:"payment-box",children:[(0,c.jsx)("div",{className:"upper-box",children:(0,c.jsx)("div",{className:"payment-options",children:(0,c.jsxs)("ul",{children:[(0,c.jsx)("li",{children:(0,c.jsxs)("div",{className:"radio-option stripe",children:[(0,c.jsx)("input",{type:"radio",name:"payment-group",id:"payment-2",defaultChecked:!0,onClick:function(){return F("cod")}}),(0,c.jsx)("label",{htmlFor:"payment-2",children:"COD"})]})}),(0,c.jsx)("li",{children:(0,c.jsxs)("div",{className:"radio-option paypal",children:[(0,c.jsx)("input",{type:"radio",name:"payment-group",id:"payment-1",onClick:function(){return F("paypal")}}),(0,c.jsxs)("label",{htmlFor:"payment-1",children:["PayPal",(0,c.jsx)("span",{className:"image",children:(0,c.jsx)(m.Z,{src:x,alt:""})})]})]})})]})})}),0!==a?(0,c.jsx)("div",{className:"text-end",children:"cod"===_?(0,c.jsx)("button",{type:"submit",className:"btn-solid btn",children:"Place Order"}):(0,c.jsx)(h.q,{amount:"0.01",onSuccess:function(e,s){return alert("Transaction completed by "+e.payer.name.given_name),fetch("/paypal-transaction-complete",{method:"post",body:JSON.stringify({orderID:s.orderID})})}})}):""]})]}):""})]})})})})})})}}}]);
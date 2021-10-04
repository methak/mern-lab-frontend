(this["webpackJsonpwishlist-app-frontend"]=this["webpackJsonpwishlist-app-frontend"]||[]).push([[0],{16:function(e,t,n){},24:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),s=n(17),a=n.n(s),r=(n(24),n(6)),l=(n(16),n(9)),j=n(2),o=n(3),h=n.n(o),b=n(7),u=n(8),p=n(0);var d=function(e){var t=Object(c.useState)([]),n=Object(u.a)(t,2),i=n[0],s=n[1],a=function(){var e=Object(b.a)(h.a.mark((function e(){var t,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("http://localhost:9000/wishlist");case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,s(n),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){a()}),[]),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("div",{className:"wrapper",children:i&&i.map((function(t){return Object(p.jsxs)("div",{className:"card red",onClick:function(){var n;n=t._id,e.history.push("/wishlist/"+n)},children:[Object(p.jsx)("h2",{children:t.name}),Object(p.jsxs)("p",{children:["To: ",t.recipient," "]}),Object(p.jsxs)("p",{children:["Occasion: ",t.occasion," "]}),Object(p.jsxs)("p",{children:["Price: $",t.price]}),Object(p.jsxs)("p",{children:["Did you Buy?: ",t.isBought?"Yes":"Not Yet"]}),Object(p.jsx)(l.b,{to:"/wishlist/".concat(t._id)})]},t._id)}))}),Object(p.jsx)("div",{children:Object(p.jsx)("button",{className:"btn",children:Object(p.jsx)(l.b,{to:"/wishlist/new",children:"Create New Holiday"})})})]})};n(35);var O=function(e){var t=e.match.params.id,n=Object(c.useState)({}),i=Object(u.a)(n,2),s=i[0],a=i[1],r=function(){var e=Object(b.a)(h.a.mark((function e(t){var n,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:9000/wishlist/"+t);case 2:return n=e.sent,e.next=5,n.json();case 5:c=e.sent,console.log(c),a(c);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){r(t)}),[t]),Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{children:"Details"}),Object(p.jsx)("div",{className:"wrapper",children:Object(p.jsxs)("div",{className:"card red",children:[Object(p.jsxs)("p",{children:[Object(p.jsx)("span",{className:"span",children:"Name:"})," ",s.name]}),Object(p.jsxs)("p",{children:[Object(p.jsx)("span",{className:"span",children:"Recipient:"})," ",s.recipient]}),Object(p.jsxs)("p",{children:[Object(p.jsx)("span",{className:"span",children:"Occasion:"})," ",s.occasion]}),Object(p.jsxs)("p",{children:[Object(p.jsx)("span",{className:"span",children:"Price: "})," $",s.price]}),Object(p.jsxs)("p",{children:[Object(p.jsx)("span",{className:"span",children:"Link:"})," ",s.link]}),Object(p.jsxs)("p",{children:[Object(p.jsx)("span",{className:"span",children:"isBought:"})," ",s.isBought?"True":"False"]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("button",{className:"btn",children:Object(p.jsx)(l.b,{to:"/wishlist",children:"Go Back "})}),Object(p.jsx)("button",{className:"btn",children:Object(p.jsx)(l.b,{to:"/wishlist/".concat(s._id,"/edit"),children:"Edit this Item "})})]})]})})]})},x=n(10),m=(n(36),function(e){var t=Object(c.useState)({name:"",recipient:"",occasion:"",price:0,link:"",img:"",isbought:!1}),n=Object(u.a)(t,2),i=n[0],s=n[1],a=function(e){s(Object(r.a)(Object(r.a)({},i),{},Object(x.a)({},e.target.name,e.target.value)))},l=function(){var t=Object(b.a)(h.a.mark((function t(n){var c;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,c={method:"POST",body:JSON.stringify(n),headers:{"Content-Type":"application/json"}},t.next=4,fetch("http://localhost:9000/wishlist",c);case 4:e.history.push("/wishlist"),t.next=11;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0),e.history.push("/wishlist/new");case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}();return Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{children:"Create New Wishlist"}),Object(p.jsx)("div",{className:"wrapper",children:Object(p.jsx)("div",{className:"card red",children:Object(p.jsxs)("form",{onSubmit:function(e){e.preventDefault(),l(i)},children:[Object(p.jsxs)("p",{children:[Object(p.jsx)("label",{htmlFor:"name",children:"Name"}),Object(p.jsx)("input",{name:"name",id:"name",value:i.name,onChange:a})]}),Object(p.jsxs)("p",{children:[Object(p.jsx)("label",{htmlFor:"recipient",children:"Recipient"}),Object(p.jsx)("input",{name:"recipient",id:"recipient",value:i.recipient,onChange:a})]}),Object(p.jsxs)("p",{children:[Object(p.jsx)("label",{htmlFor:"occasion",children:"Occasion"}),Object(p.jsx)("input",{name:"occasion",id:"occasion",value:i.occasion,onChange:a})]}),Object(p.jsxs)("p",{children:[Object(p.jsx)("label",{htmlFor:"price",children:"Price"}),Object(p.jsx)("input",{type:"number",name:"price",id:"price",value:i.price,onChange:a})]}),Object(p.jsxs)("p",{children:[Object(p.jsx)("label",{htmlFor:"link",children:"Link"}),Object(p.jsx)("input",{type:"text",name:"link",id:"link",value:i.link,onChange:a})]}),Object(p.jsxs)("p",{children:[Object(p.jsx)("label",{htmlFor:"img",children:"Image"}),Object(p.jsx)("input",{type:"text",name:"img",id:"img",value:i.img,onChange:a})]}),Object(p.jsxs)("p",{children:[Object(p.jsx)("label",{htmlFor:"isbought",children:"Isbought?"}),Object(p.jsx)("input",{type:"checkbox",name:"isBought",onChange:function(e){return s(Object(r.a)(Object(r.a)({},i),{},{isbought:!i.isbought}))}}),Object(p.jsx)("input",{type:"submit",value:"Create a New Wishlist"})]})]})})})]})});var f=function(e){var t=Object(c.useState)(!1),n=Object(u.a)(t,2),i=n[0],s=n[1],a=Object(c.useState)({name:"",recipient:"",occasion:"",price:0,link:"",isBought:!1}),l=Object(u.a)(a,2),j=l[0],o=l[1],d=Object(c.useState)(!0),O=Object(u.a)(d,2),m=O[0],f=O[1],v=function(){var t=Object(b.a)(h.a.mark((function t(){var n,c,i;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n=e.match.params.id,t.next=4,fetch("http://localhost:9000/wishlist/"+n);case 4:return c=t.sent,t.next=7,c.json();case 7:i=t.sent,o(i),f(!1),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),console.log(t.t0);case 15:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(){return t.apply(this,arguments)}}(),g=function(){var t=Object(b.a)(h.a.mark((function t(n,c){var i,s,a;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i={method:"PUT",body:JSON.stringify(c),headers:{"Content-Type":"application/json"}},t.next=3,fetch("http://localhost:9000/wishlist/"+n,i);case 3:return s=t.sent,t.next=6,s.json();case 6:a=t.sent,console.log("after update:",a.name),e.history.push("/wishlist/"+n);case 9:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),w=function(e){e.preventDefault();var t={name:j.name,recipient:j.recipient,occasion:j.occasion,price:j.price,link:j.link,isBought:j.isBought};g(j._id,t)},k=function(e){o(Object(r.a)(Object(r.a)({},j),{},Object(x.a)({},e.target.name,e.target.value)))};Object(c.useEffect)((function(){v()}),[]);var y=function(e){e.preventDefault(),s(!i)},C=function(){var t=Object(b.a)(h.a.mark((function t(n){var c;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("http://localhost:9000/wishlist/".concat(n),{method:"DELETE"});case 3:return c=t.sent,console.log(c),t.next=7,c.json();case 7:t.sent,e.history.push("/wishlist"),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}();return Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{children:"Edit Form"}),m?Object(p.jsx)("h3",{children:"Loading..."}):Object(p.jsxs)("form",{onSubmit:w,children:[Object(p.jsx)("div",{className:"wrapper",children:Object(p.jsx)("div",{className:"card red",children:Object(p.jsxs)("form",{onSubmit:w,children:[Object(p.jsxs)("p",{children:[Object(p.jsx)("label",{htmlFor:"name",children:"Name"}),Object(p.jsx)("input",{name:"name",id:"name",value:j.name,onChange:k})]}),Object(p.jsxs)("p",{children:[Object(p.jsx)("label",{htmlFor:"recipient",children:"Recipient"}),Object(p.jsx)("input",{name:"recipient",id:"recipient",value:j.recipient,onChange:k})]}),Object(p.jsxs)("p",{children:[Object(p.jsx)("label",{htmlFor:"occasion",children:"Occasion"}),Object(p.jsx)("input",{name:"occasion",id:"occasion",value:j.occasion,onChange:k})]}),Object(p.jsxs)("p",{children:[Object(p.jsx)("label",{htmlFor:"price",children:"Price"}),Object(p.jsx)("input",{type:"number",name:"price",id:"price",value:j.price,onChange:k})]}),Object(p.jsxs)("p",{children:[Object(p.jsx)("label",{htmlFor:"link",children:"Link"}),Object(p.jsx)("input",{type:"text",name:"link",id:"link",value:j.link,onChange:k})]}),Object(p.jsxs)("p",{children:[Object(p.jsx)("label",{htmlFor:"img",children:"Image"}),Object(p.jsx)("input",{type:"text",name:"img",id:"img",value:j.img,onChange:k})]}),Object(p.jsxs)("p",{children:[Object(p.jsx)("label",{htmlFor:"isbought",children:"Isbought?"}),Object(p.jsx)("input",{type:"checkbox",name:"isBought",onChange:function(e){o(Object(r.a)(Object(r.a)({},j),{},{isBought:!j.isBought}))}}),Object(p.jsx)("input",{type:"submit",value:"Create a New Wishlist"})]})]})})}),Object(p.jsx)("br",{}),Object(p.jsxs)("div",{children:[Object(p.jsx)("button",{onClick:function(){return e.history.goBack()},children:"Go Back"}),Object(p.jsx)("input",{type:"submit",value:"Edit this Wishlist"}),Object(p.jsx)("button",{onClick:y,children:"Delete Item"})]})]}),i?Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{children:"Confirm Deletion"}),Object(p.jsx)("h3",{children:"Are you sure you want to delete this celebration?"}),Object(p.jsxs)("div",{children:[Object(p.jsx)("button",{onClick:function(){return C(j._id)},children:"Confirm"}),Object(p.jsx)("button",{onClick:y,children:"Cancel"})]})]}):null]})};var v=function(){return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)("h1",{children:"Wishlist App"}),Object(p.jsx)(l.a,{children:Object(p.jsxs)(j.c,{children:[Object(p.jsx)(j.a,{exact:!0,path:"/wishlist",component:d}),Object(p.jsx)(j.a,{exact:!0,path:"/wishlist/new",render:function(e){return Object(p.jsx)(m,Object(r.a)({},e))}}),Object(p.jsx)(j.a,{exact:!0,path:"/wishlist/:id/edit",component:f}),Object(p.jsx)(j.a,{exact:!0,path:"/wishlist/:id",component:O})]})})]})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,38)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),i(e),s(e),a(e)}))};a.a.render(Object(p.jsx)(i.a.StrictMode,{children:Object(p.jsx)(v,{})}),document.getElementById("root")),g()}},[[37,1,2]]]);
//# sourceMappingURL=main.77c6b54f.chunk.js.map
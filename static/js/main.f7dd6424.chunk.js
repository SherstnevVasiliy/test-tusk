(this["webpackJsonptest-work"]=this["webpackJsonptest-work"]||[]).push([[0],{18:function(e,t,a){},34:function(e,t,a){},41:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a(9),n=a.n(s),r=(a(34),a(3)),i=(a(41),a(4)),l=a.n(i),o=a(10),j=a(5),d=(a(18),a(12)),u=a.n(d),b=a(0),m=function(){var e=Object(r.b)(),t=Object(c.useState)(""),a=Object(j.a)(t,2),s=a[0],n=a[1],i=Object(c.useState)(""),d=Object(j.a)(i,2),m=d[0],h=d[1],O=function(){var t=Object(o.a)(l.a.mark((function t(a,c){var s,n,r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(a,c),s={},t.prev=2,t.next=5,u.a.get("https://fakestoreapi.com/users");case 5:for(n=t.sent,console.log(n.data),r=0;r<n.data.length;r++)console.log(n.data[r].email,n.data[r].password),n.data[r].email===a&&n.data[r].password===c&&(s=n.data[r],alert("Welcome! ".concat(s.name.firstname," ").concat(s.name.lastname)),e({type:"AUTH_TRUE",payload:{isAuth:"true"}}));s.id?console.log(s):alert("\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u043d\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d"),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(2),alert(t.t0);case 14:case"end":return t.stop()}}),t,null,[[2,11]])})));return function(e,a){return t.apply(this,arguments)}}();return Object(b.jsxs)("div",{className:"wrap",children:[Object(b.jsxs)("div",{className:"cantainer-reg",children:[Object(b.jsx)("h1",{children:"\u0420\u0430\u0434\u044b \u0432\u0438\u0434\u0435\u0442\u044c \u0432\u0430\u0441 \u0441\u043d\u043e\u0432\u0430!"}),Object(b.jsx)("h2",{children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0432\u043e\u0439 \u043f\u0430\u0440\u043e\u043b\u044c \u0438 Email"})]}),Object(b.jsxs)("form",{className:"reg-form cantainer-reg",onSubmit:function(e){e.preventDefault(),""===s||""===m?alert("\u041f\u043e\u043b\u044f \u043d\u0435 \u0434\u043e\u043b\u0436\u043d\u044b \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c\u0438..."):(O(s,m),n(""),h(""))},children:[Object(b.jsx)("input",{onChange:function(e){return n(e.target.value)},value:s,className:"input",type:"email",placeholder:"Email"}),Object(b.jsx)("input",{onChange:function(e){return h(e.target.value)},className:"input",value:m,type:"password",placeholder:"Password"}),Object(b.jsx)("p",{className:"forgot",children:"\u0417\u0430\u0431\u044b\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c?"}),Object(b.jsx)("input",{type:"submit",className:"sign-in",value:"\u0412\u043e\u0439\u0442\u0438"}),Object(b.jsxs)("div",{className:"no-accaunt-wrap",children:[Object(b.jsx)("p",{className:"no-accaunt",children:"\u041d\u0435\u0442 \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0430?"}),Object(b.jsx)("ul",{className:"reistration",children:Object(b.jsx)("li",{children:Object(b.jsx)("a",{children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0443\u0439\u0442\u0435\u0441\u044c"})})})]})]}),Object(b.jsx)("div",{className:"cantainer-reg",children:Object(b.jsxs)("ul",{className:"media-social",children:[Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"https://www.google.ru/",target:"_blank",className:"media-google",rel:"noreferrer",children:Object(b.jsx)("span",{})})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"https://ru-ru.facebook.com/",target:"_blank",className:"media-facebook",rel:"noreferrer",children:Object(b.jsx)("span",{})})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"https://vk.com/",target:"_blank",className:"media-vk",rel:"noreferrer",children:Object(b.jsx)("span",{})})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"https://www.apple.com/ru/",target:"_blank",className:"media-apple",rel:"noreferrer",children:Object(b.jsx)("span",{})})})]})}),Object(b.jsx)("div",{className:"wrap-bg"})]})},h=a(29),O=a(63),p=function(e){var t=e.data,a=t.image,c=t.title,s=t.price;return Object(b.jsxs)("div",{className:"card-item",children:[Object(b.jsx)("img",{alt:"",className:"img-card",src:a}),Object(b.jsxs)("div",{className:"card-body",children:[Object(b.jsx)("h5",{className:"card-title",children:c}),Object(b.jsxs)("p",{className:"card-price",children:[s,"$"]})]})]},Object(O.a)())},v=function(e){var t=Object(r.b)(),a=Object(r.c)((function(e){return e.activeCategoryId})),c=e.data,s=e.id,n="";n=s===a?"nav-item nav-item-active":"nav-item";return Object(b.jsx)("li",{id:s,className:n,onClick:function(){document.querySelector(".category-vitrina").style.left="0px";var e=document.querySelectorAll(".nav-item");console.log(e),console.log("click"),e.forEach((function(e){console.log(e.classList),e.classList.contains("nav-item-active")&&e.classList.remove("nav-item-active"),e.id===a.toString()&&e.classList.add("nav-item-active")})),t(function(e){return{type:"CHANGE_CATEGORY",payload:{categiryId:e}}}(s))},children:Object(b.jsx)("a",{children:c})},Object(O.a)())},x=function(e){var t=e.data,a=t.image,c=t.title;return Object(b.jsxs)("div",{className:"category-item",children:[Object(b.jsxs)("div",{className:"card-category-body",children:[Object(b.jsx)("h5",{className:"card-category-title",children:c}),Object(b.jsxs)("div",{className:"detailed-wrap",children:[Object(b.jsx)("p",{className:"detailed",children:"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435"}),Object(b.jsx)("span",{className:"detailed-arrow",children:Object(b.jsx)("img",{alt:""})})]})]}),Object(b.jsx)("img",{alt:"",className:"img-card-category",src:a})]},Object(O.a)())},g=function(){var e=Object(c.useState)([]),t=Object(j.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)([]),i=Object(j.a)(n,2),d=i[0],m=i[1],g=Object(r.c)((function(e){return e.activeCategoryId}));return Object(c.useEffect)((function(){(function(){var e=Object(o.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.a.get("https://fakestoreapi.com/products");case 3:t=e.sent,s(t.data),console.log(t.data),a=t.data.slice(),console.log("data",a),m(Object(h.a)(new Set(a.map((function(e){return e.category}))))),localStorage.setItem("itemsCount",t.data.length),console.log(d),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),alert(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(b.jsxs)("div",{className:"wrap",children:[Object(b.jsxs)("div",{className:"page-header",children:[Object(b.jsx)("span",{className:"page-header-arrow",children:Object(b.jsx)("img",{alt:""})}),Object(b.jsx)("p",{className:"page-header-catalog",children:"\u041a\u0430\u0442\u0430\u043b\u043e\u0433"}),Object(b.jsx)("figure",{className:"smile-avatar"})]}),Object(b.jsx)("form",{className:"search",children:Object(b.jsx)("input",{className:"search-input",type:"text",placeholder:"\u041d\u0430\u0439\u0442\u0438 \u0442\u043e\u0432\u0430\u0440..."})}),Object(b.jsxs)("section",{children:[Object(b.jsxs)("ul",{className:"section-catalog",children:[Object(b.jsx)("li",{className:"section-popular",children:Object(b.jsx)("a",{children:"\u041f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u043e\u0435"})}),Object(b.jsx)("li",{className:"section-view-all",children:Object(b.jsx)("a",{children:"\u0421\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0432\u0441\u0435"})})]}),Object(b.jsx)("div",{className:"section-vitrina-line",children:Object(b.jsx)("div",{className:"section-vitrina",children:a.map((function(e){return Object(b.jsx)(p,{className:"items-card",data:e},Object(O.a)())}))})})]}),Object(b.jsx)("section",{children:Object(b.jsxs)("div",{className:"section-wrap",children:[Object(b.jsx)("nav",{className:"section-nav",children:Object(b.jsx)("ul",{children:d.map((function(e,t){return Object(b.jsx)(v,{data:e,id:t},Object(O.a)())}))})}),Object(b.jsx)("div",{className:"category-vitrina-line",children:Object(b.jsx)("div",{className:"category-vitrina",children:a.filter((function(e){return e.category===d[g]})).map((function(e){return Object(b.jsx)(x,{className:"items-card",data:e},Object(O.a)())}))})})]})})]})};var f=function(){return Object(r.c)((function(e){return e})).isAuth?Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(g,{})}):Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(m,{})})},N=a(6),y=a(28),w=a(8),k={isAuth:!0,activProfile:!1,activeCatalog:!1,activeCategoryId:0},S=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"AUTH_TRUE":return Object(w.a)(Object(w.a)({},t),{},{isAuth:a.payload.isAuth});case"CHANGE_CATEGORY":return console.log(a.payload.categiryId),e=a.payload.categiryId,Object(w.a)(Object(w.a)({},t),{},{activeCategoryId:e});default:return t}},C=Object(N.createStore)(S,k,Object(y.composeWithDevTools)()),E=function(){var e=0,t=0,a=document.querySelector(".section-vitrina"),c=document.querySelector(".category-vitrina"),s=document.querySelector(".section-vitrina-line"),n=document.querySelector(".category-vitrina-line");s.addEventListener("touchstart",i,!1),s.addEventListener("touchmove",(function(t){if(!r)return!1;t.touches[0].clientX-r<0?(e-=252,Math.abs(e)>126*(localStorage.getItem("itemsCount")-4)&&(e=126*-(localStorage.getItem("itemsCount")-3)),a.style.left="".concat(e,"px")):((e+=252)>0&&(e=0),a.style.left="".concat(e,"px"));r=null}),!1),n.addEventListener("touchstart",i,!1),n.addEventListener("touchmove",(function(e){var a=document.querySelectorAll(".category-item");if(!r)return!1;e.touches[0].clientX-r<0?(t-=341,console.log(a.length),Math.abs(t)>341*(a.length-1)&&(t=341*-(a.length-1)),console.log(t),c.style.left="".concat(t,"px")):((t+=341)>0&&(t=0),c.style.left="".concat(t,"px"));r=null}),!1);var r=null;function i(e){r=e.touches[0].clientX}};n.a.render(Object(b.jsx)(r.a,{store:C,children:Object(b.jsx)(f,{})}),document.getElementById("root")),E()}},[[62,1,2]]]);
//# sourceMappingURL=main.f7dd6424.chunk.js.map
(this["webpackJsonpswapi-test"]=this["webpackJsonpswapi-test"]||[]).push([[3],{106:function(t,e,n){"use strict";n.d(e,"c",(function(){return u})),n.d(e,"b",(function(){return p})),n.d(e,"d",(function(){return j})),n.d(e,"a",(function(){return b}));var r=n(107),a=n.n(r),c=n(108),i=n(109),s=n.n(i);function u(t){return o.apply(this,arguments)}function o(){return(o=Object(c.a)(a.a.mark((function t(e){var n,r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.get("".concat(e).replace("http:","https:"));case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function p(t){return l.apply(this,arguments)}function l(){return(l=Object(c.a)(a.a.mark((function t(e){var n,r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.get("".concat(e).replace("http:","https:"));case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function j(t){return f.apply(this,arguments)}function f(){return(f=Object(c.a)(a.a.mark((function t(e){var n,r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.get("".concat(e).replace("http:","https:"));case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function b(t){return h.apply(this,arguments)}function h(){return(h=Object(c.a)(a.a.mark((function t(e){var n,r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.get("".concat(e).replace("http:","https:"));case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},110:function(t,e,n){"use strict";function r(){return JSON.parse(localStorage.getItem("favorits"))}function a(t){var e,n=null!==(e=r())&&void 0!==e?e:[];if(n.find((function(e){return e===t}))){var a=n.filter((function(e){return e!==t}));return localStorage.setItem("favorits",JSON.stringify(a))}n.push(t),localStorage.setItem("favorits",JSON.stringify(n))}n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return a}))},113:function(t,e,n){"use strict";n.d(e,"a",(function(){return S}));var r=n(94),a=n(42),c=n(0),i=n(16),s=n(34),u=n(106),o=n(110),p=n(167),l=n(103),j=n(75),f=n(95),b=n(160),h=n(168),d=n(161),O=n(162),x=n(163),m=n(164),v=n(159),g=n.p+"static/media/defImgSW.beebfe62.jpg",w=n(2),y=Object(v.a)({like:{position:"absolute",bottom:"30px",right:"5px"},avatar:{position:"absolute",bottom:"28px",left:"15px"},card:{position:"relative"},image:{width:"240px"},input:{display:"none"}});function k(t){var e=t.character,n=t.avatar,r=y(),v=Object(c.useState)(""),k=Object(a.a)(v,2),S=k[0],N=k[1],I=Object(c.useState)(!1),J=Object(a.a)(I,2),A=J[0],C=J[1],E=Object(c.useState)(1),F=Object(a.a)(E,2),H=F[0],R=F[1];return Object(u.c)(e.homeworld).then((function(t){return N(t.name)})),Object(c.useEffect)((function(){var t=Object(o.a)();C(Boolean(t.find((function(t){return t===e.url}))))}),[H]),Object(w.jsx)(p.a,{title:e.name,arrow:!0,children:Object(w.jsxs)(l.a,{className:r.card,children:[Object(w.jsx)(s.b,{to:{pathname:"".concat(i.a.CHARACTER(e.name))},children:Object(w.jsx)(j.a,{elevation:3,children:Object(w.jsxs)(l.a,{m:1,p:2,textAlign:"center",children:[Object(w.jsx)("img",{className:r.image,alt:"avatar",src:n||g}),Object(w.jsxs)(f.a,{children:["Name: ",e.name]}),Object(w.jsxs)(f.a,{children:["Gender: ","n/a"!==e.gender?e.gender:"creature"]}),Object(w.jsxs)(f.a,{children:["Home World: ",S]})]})})}),Object(w.jsx)(b.a,{className:r.like,control:Object(w.jsx)(h.a,{icon:Object(w.jsx)(O.a,{}),onChange:function(){Object(o.b)(e.url),R(H+1)},checked:A,checkedIcon:Object(w.jsx)(x.a,{})})}),Object(w.jsx)("input",{accept:"image/*",className:r.input,id:"icon-button-file",type:"file"}),Object(w.jsx)("label",{htmlFor:"icon-button-file",children:Object(w.jsx)(d.a,{className:r.avatar,color:"primary","aria-label":"upload picture",component:"span",children:Object(w.jsx)(m.a,{})})})]})})}function S(t){var e=t.characters;return Object(w.jsx)(w.Fragment,{children:Object(w.jsx)(r.a,{container:!0,spacing:2,justify:"center",alignItems:"center",children:e.map((function(t){return Object(w.jsx)(r.a,{item:!0,xs:3,children:Object(w.jsx)(k,{character:t})},t.url)}))})})}},166:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return d}));var r=n(107),a=n.n(r),c=n(112),i=n(108),s=n(42),u=n(0),o=n(75),p=n(103),l=n(95),j=n(106),f=n(110),b=n(113),h=n(2);function d(){var t=Object(u.useState)([]),e=Object(s.a)(t,2),n=e[0],r=e[1];return Object(u.useEffect)((function(){function t(){return(t=Object(i.a)(a.a.mark((function t(){var e,n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=Object(f.a)(),n=null===e?[]:e,t.next=4,n.map((function(t){return Object(j.a)(t).then((function(t){return r((function(e){return e.find((function(e){return e.name===t.name}))?e:[].concat(Object(c.a)(e),[t])}))}))}));case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[n]),Object(h.jsx)(h.Fragment,{children:0===n.length?Object(h.jsx)(o.a,{elevation:3,children:Object(h.jsx)(p.a,{mt:13,p:3,children:Object(h.jsx)(l.a,{align:"center",variant:"h4",children:" There is no one here yet! "})})}):Object(h.jsx)(o.a,{elevation:3,children:Object(h.jsx)(p.a,{mt:9,p:3,children:Object(h.jsx)(b.a,{characters:n})})})})}}}]);
//# sourceMappingURL=Favorites.9eace170.chunk.js.map
(this["webpackJsonpswapi-test"]=this["webpackJsonpswapi-test"]||[]).push([[4],{106:function(t,e,n){"use strict";n.d(e,"a",(function(){return u})),n.d(e,"d",(function(){return p})),n.d(e,"c",(function(){return f})),n.d(e,"e",(function(){return j})),n.d(e,"b",(function(){return m}));var r=n(107),a=n.n(r),i=n(108),c=n(109),o=n.n(c),s="https://swapi.dev/api";function u(){return l.apply(this,arguments)}function l(){return(l=Object(i.a)(a.a.mark((function t(){var e,n,r,i=arguments;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=i.length>0&&void 0!==i[0]?i[0]:1,t.next=3,o.a.get("".concat(s,"/people?page=").concat(e).replace("http:","https:"));case 3:return n=t.sent,r=n.data,t.abrupt("return",r);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function p(t){return d.apply(this,arguments)}function d(){return(d=Object(i.a)(a.a.mark((function t(e){var n,r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.get("".concat(e).replace("http:","https:"));case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(t){return b.apply(this,arguments)}function b(){return(b=Object(i.a)(a.a.mark((function t(e){var n,r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.get("".concat(e).replace("http:","https:"));case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function j(t){return h.apply(this,arguments)}function h(){return(h=Object(i.a)(a.a.mark((function t(e){var n,r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.get("".concat(e).replace("http:","https:"));case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function m(t){return O.apply(this,arguments)}function O(){return(O=Object(i.a)(a.a.mark((function t(e){var n,r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.get("".concat(e).replace("http:","https:"));case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},110:function(t,e,n){"use strict";function r(){return JSON.parse(localStorage.getItem("favorits"))}function a(t){var e,n=null!==(e=r())&&void 0!==e?e:[];if(n.find((function(e){return e===t}))){var a=n.filter((function(e){return e!==t}));return localStorage.setItem("favorits",JSON.stringify(a))}n.push(t),localStorage.setItem("favorits",JSON.stringify(n))}n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return a}))},113:function(t,e,n){"use strict";n.d(e,"a",(function(){return E}));var r=n(94),a=n(42),i=n(0),c=n(16),o=n(34),s=n(106),u=n(110),l=n(167),p=n(103),d=n(75),f=n(95),b=n(160),j=n(168),h=n(161),m=n(162),O=n(163),x=n(164),v=n(159),y=n.p+"static/media/defImgSW.beebfe62.jpg",g=n(2),k=Object(v.a)({like:{position:"absolute",bottom:"30px",right:"5px"},avatar:{position:"absolute",bottom:"28px",left:"15px"},card:{position:"relative"},image:{width:"240px"},input:{display:"none"}});function w(t){var e=t.character,n=t.avatar,r=k(),v=Object(i.useState)(""),w=Object(a.a)(v,2),E=w[0],S=w[1],N=Object(i.useState)(!1),C=Object(a.a)(N,2),D=C[0],I=C[1],M=Object(i.useState)(1),T=Object(a.a)(M,2),R=T[0],z=T[1];return Object(s.d)(e.homeworld).then((function(t){return S(t.name)})),Object(i.useEffect)((function(){var t=Object(u.a)();I(Boolean(t.find((function(t){return t===e.url}))))}),[R]),Object(g.jsx)(l.a,{title:e.name,arrow:!0,children:Object(g.jsxs)(p.a,{className:r.card,children:[Object(g.jsx)(o.b,{to:{pathname:"".concat(c.a.CHARACTER(e.name))},children:Object(g.jsx)(d.a,{elevation:3,children:Object(g.jsxs)(p.a,{m:1,p:2,textAlign:"center",children:[Object(g.jsx)("img",{className:r.image,alt:"avatar",src:n||y}),Object(g.jsxs)(f.a,{children:["Name: ",e.name]}),Object(g.jsxs)(f.a,{children:["Gender: ","n/a"!==e.gender?e.gender:"creature"]}),Object(g.jsxs)(f.a,{children:["Home World: ",E]})]})})}),Object(g.jsx)(b.a,{className:r.like,control:Object(g.jsx)(j.a,{icon:Object(g.jsx)(m.a,{}),onChange:function(){Object(u.b)(e.url),z(R+1)},checked:D,checkedIcon:Object(g.jsx)(O.a,{})})}),Object(g.jsx)("input",{accept:"image/*",className:r.input,id:"icon-button-file",type:"file"}),Object(g.jsx)("label",{htmlFor:"icon-button-file",children:Object(g.jsx)(h.a,{className:r.avatar,color:"primary","aria-label":"upload picture",component:"span",children:Object(g.jsx)(x.a,{})})})]})})}function E(t){var e=t.characters;return Object(g.jsx)(g.Fragment,{children:Object(g.jsx)(r.a,{container:!0,spacing:2,justify:"center",alignItems:"center",children:e.map((function(t){return Object(g.jsx)(r.a,{item:!0,xs:3,children:Object(g.jsx)(w,{character:t})},t.url)}))})})}},147:function(t,e,n){"use strict";var r=n(1),a=n(3),i=n(0),c=(n(6),n(4)),o=n(7),s=n(5),u=44,l=i.forwardRef((function(t,e){var n=t.classes,o=t.className,l=t.color,p=void 0===l?"primary":l,d=t.disableShrink,f=void 0!==d&&d,b=t.size,j=void 0===b?40:b,h=t.style,m=t.thickness,O=void 0===m?3.6:m,x=t.value,v=void 0===x?0:x,y=t.variant,g=void 0===y?"indeterminate":y,k=Object(a.a)(t,["classes","className","color","disableShrink","size","style","thickness","value","variant"]),w={},E={},S={};if("determinate"===g||"static"===g){var N=2*Math.PI*((u-O)/2);w.strokeDasharray=N.toFixed(3),S["aria-valuenow"]=Math.round(v),w.strokeDashoffset="".concat(((100-v)/100*N).toFixed(3),"px"),E.transform="rotate(-90deg)"}return i.createElement("div",Object(r.a)({className:Object(c.a)(n.root,o,"inherit"!==p&&n["color".concat(Object(s.a)(p))],{determinate:n.determinate,indeterminate:n.indeterminate,static:n.static}[g]),style:Object(r.a)({width:j,height:j},E,h),ref:e,role:"progressbar"},S,k),i.createElement("svg",{className:n.svg,viewBox:"".concat(22," ").concat(22," ").concat(u," ").concat(u)},i.createElement("circle",{className:Object(c.a)(n.circle,f&&n.circleDisableShrink,{determinate:n.circleDeterminate,indeterminate:n.circleIndeterminate,static:n.circleStatic}[g]),style:w,cx:u,cy:u,r:(u-O)/2,fill:"none",strokeWidth:O})))}));e.a=Object(o.a)((function(t){return{root:{display:"inline-block"},static:{transition:t.transitions.create("transform")},indeterminate:{animation:"$circular-rotate 1.4s linear infinite"},determinate:{transition:t.transitions.create("transform")},colorPrimary:{color:t.palette.primary.main},colorSecondary:{color:t.palette.secondary.main},svg:{display:"block"},circle:{stroke:"currentColor"},circleStatic:{transition:t.transitions.create("stroke-dashoffset")},circleIndeterminate:{animation:"$circular-dash 1.4s ease-in-out infinite",strokeDasharray:"80px, 200px",strokeDashoffset:"0px"},circleDeterminate:{transition:t.transitions.create("stroke-dashoffset")},"@keyframes circular-rotate":{"0%":{transformOrigin:"50% 50%"},"100%":{transform:"rotate(360deg)"}},"@keyframes circular-dash":{"0%":{strokeDasharray:"1px, 200px",strokeDashoffset:"0px"},"50%":{strokeDasharray:"100px, 200px",strokeDashoffset:"-15px"},"100%":{strokeDasharray:"100px, 200px",strokeDashoffset:"-125px"}},circleDisableShrink:{animation:"none"}}}),{name:"MuiCircularProgress",flip:!1})(l)},149:function(t,e,n){"use strict";var r=n(1),a=n(3),i=n(0),c=(n(6),n(4)),o=n(7),s=n(43),u=n(169),l=n(46),p=n(44),d=n(111),f=n(27),b={entering:{opacity:1},entered:{opacity:1}},j={enter:l.b.enteringScreen,exit:l.b.leavingScreen},h=i.forwardRef((function(t,e){var n=t.children,c=t.disableStrictModeCompat,o=void 0!==c&&c,l=t.in,h=t.onEnter,m=t.onEntered,O=t.onEntering,x=t.onExit,v=t.onExited,y=t.onExiting,g=t.style,k=t.TransitionComponent,w=void 0===k?u.a:k,E=t.timeout,S=void 0===E?j:E,N=Object(a.a)(t,["children","disableStrictModeCompat","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","TransitionComponent","timeout"]),C=Object(p.a)(),D=C.unstable_strictMode&&!o,I=i.useRef(null),M=Object(f.a)(n.ref,e),T=Object(f.a)(D?I:void 0,M),R=function(t){return function(e,n){if(t){var r=D?[I.current,e]:[e,n],a=Object(s.a)(r,2),i=a[0],c=a[1];void 0===c?t(i):t(i,c)}}},z=R(O),F=R((function(t,e){Object(d.b)(t);var n=Object(d.a)({style:g,timeout:S},{mode:"enter"});t.style.webkitTransition=C.transitions.create("opacity",n),t.style.transition=C.transitions.create("opacity",n),h&&h(t,e)})),J=R(m),W=R(y),A=R((function(t){var e=Object(d.a)({style:g,timeout:S},{mode:"exit"});t.style.webkitTransition=C.transitions.create("opacity",e),t.style.transition=C.transitions.create("opacity",e),x&&x(t)})),B=R(v);return i.createElement(w,Object(r.a)({appear:!0,in:l,nodeRef:D?I:void 0,onEnter:F,onEntered:J,onEntering:z,onExit:A,onExited:B,onExiting:W,timeout:S},N),(function(t,e){return i.cloneElement(n,Object(r.a)({style:Object(r.a)({opacity:0,visibility:"exited"!==t||l?void 0:"hidden"},b[t],g,n.props.style),ref:T},e))}))})),m=i.forwardRef((function(t,e){var n=t.children,o=t.classes,s=t.className,u=t.invisible,l=void 0!==u&&u,p=t.open,d=t.transitionDuration,f=t.TransitionComponent,b=void 0===f?h:f,j=Object(a.a)(t,["children","classes","className","invisible","open","transitionDuration","TransitionComponent"]);return i.createElement(b,Object(r.a)({in:p,timeout:d},j),i.createElement("div",{className:Object(c.a)(o.root,s,l&&o.invisible),"aria-hidden":!0,ref:e},n))}));e.a=Object(o.a)({root:{zIndex:-1,position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent"},invisible:{backgroundColor:"transparent"}},{name:"MuiBackdrop"})(m)},158:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return x}));var r=n(107),a=n.n(r),i=n(112),c=n(108),o=n(42),s=n(0),u=n(159),l=n(75),p=n(103),d=n(74),f=n(149),b=n(147),j=n(106),h=n(113),m=n(2),O=Object(u.a)((function(t){return{backdrop:{zIndex:t.zIndex.drawer+1,color:"#fff"}}}));function x(){var t=O(),e=Object(s.useState)([]),n=Object(o.a)(e,2),r=n[0],u=n[1],x=Object(s.useState)(!0),v=Object(o.a)(x,2),y=v[0],g=v[1],k=Object(s.useState)(1),w=Object(o.a)(k,2),E=w[0],S=w[1];Object(s.useEffect)((function(){function t(){return(t=Object(c.a)(a.a.mark((function t(){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(j.a)(E).then((function(t){return u([].concat(Object(i.a)(r),Object(i.a)(t.results)))}));case 2:g(!y);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[E]);return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(l.a,{elevation:3,children:Object(m.jsxs)(p.a,{mt:9,p:3,children:[Object(m.jsx)(h.a,{characters:r}),!y&&Object(m.jsx)(d.a,{fullWidth:!0,variant:"contained",type:"button",color:"primary",onClick:function(){S(E+1),g(!y)},children:"Load More"})]})}),Object(m.jsx)(f.a,{className:t.backdrop,open:y,children:Object(m.jsx)(b.a,{color:"inherit"})})]})}}}]);
//# sourceMappingURL=HomePage.d7d06c4a.chunk.js.map
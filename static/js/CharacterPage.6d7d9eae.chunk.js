(this["webpackJsonpswapi-test"]=this["webpackJsonpswapi-test"]||[]).push([[2],{106:function(t,e,n){"use strict";n.d(e,"a",(function(){return u})),n.d(e,"d",(function(){return f})),n.d(e,"c",(function(){return d})),n.d(e,"e",(function(){return h})),n.d(e,"b",(function(){return j}));var r=n(107),a=n.n(r),i=n(108),c=n(109),o=n.n(c),s="https://swapi.dev/api";function u(){return l.apply(this,arguments)}function l(){return(l=Object(i.a)(a.a.mark((function t(){var e,n,r,i=arguments;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=i.length>0&&void 0!==i[0]?i[0]:1,t.next=3,o.a.get("".concat(s,"/people?page=").concat(e));case 3:return n=t.sent,r=n.data,t.abrupt("return",r);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(t){return p.apply(this,arguments)}function p(){return(p=Object(i.a)(a.a.mark((function t(e){var n,r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.get("".concat(e));case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(t){return b.apply(this,arguments)}function b(){return(b=Object(i.a)(a.a.mark((function t(e){var n,r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.get("".concat(e));case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(t){return m.apply(this,arguments)}function m(){return(m=Object(i.a)(a.a.mark((function t(e){var n,r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.get("".concat(e));case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function j(t){return x.apply(this,arguments)}function x(){return(x=Object(i.a)(a.a.mark((function t(e){var n,r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.get("".concat(e));case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},147:function(t,e,n){"use strict";var r=n(1),a=n(3),i=n(0),c=(n(6),n(4)),o=n(7),s=n(5),u=44,l=i.forwardRef((function(t,e){var n=t.classes,o=t.className,l=t.color,f=void 0===l?"primary":l,p=t.disableShrink,d=void 0!==p&&p,b=t.size,h=void 0===b?40:b,m=t.style,j=t.thickness,x=void 0===j?3.6:j,O=t.value,v=void 0===O?0:O,y=t.variant,k=void 0===y?"indeterminate":y,g=Object(a.a)(t,["classes","className","color","disableShrink","size","style","thickness","value","variant"]),w={},E={},S={};if("determinate"===k||"static"===k){var D=2*Math.PI*((u-x)/2);w.strokeDasharray=D.toFixed(3),S["aria-valuenow"]=Math.round(v),w.strokeDashoffset="".concat(((100-v)/100*D).toFixed(3),"px"),E.transform="rotate(-90deg)"}return i.createElement("div",Object(r.a)({className:Object(c.a)(n.root,o,"inherit"!==f&&n["color".concat(Object(s.a)(f))],{determinate:n.determinate,indeterminate:n.indeterminate,static:n.static}[k]),style:Object(r.a)({width:h,height:h},E,m),ref:e,role:"progressbar"},S,g),i.createElement("svg",{className:n.svg,viewBox:"".concat(22," ").concat(22," ").concat(u," ").concat(u)},i.createElement("circle",{className:Object(c.a)(n.circle,d&&n.circleDisableShrink,{determinate:n.circleDeterminate,indeterminate:n.circleIndeterminate,static:n.circleStatic}[k]),style:w,cx:u,cy:u,r:(u-x)/2,fill:"none",strokeWidth:x})))}));e.a=Object(o.a)((function(t){return{root:{display:"inline-block"},static:{transition:t.transitions.create("transform")},indeterminate:{animation:"$circular-rotate 1.4s linear infinite"},determinate:{transition:t.transitions.create("transform")},colorPrimary:{color:t.palette.primary.main},colorSecondary:{color:t.palette.secondary.main},svg:{display:"block"},circle:{stroke:"currentColor"},circleStatic:{transition:t.transitions.create("stroke-dashoffset")},circleIndeterminate:{animation:"$circular-dash 1.4s ease-in-out infinite",strokeDasharray:"80px, 200px",strokeDashoffset:"0px"},circleDeterminate:{transition:t.transitions.create("stroke-dashoffset")},"@keyframes circular-rotate":{"0%":{transformOrigin:"50% 50%"},"100%":{transform:"rotate(360deg)"}},"@keyframes circular-dash":{"0%":{strokeDasharray:"1px, 200px",strokeDashoffset:"0px"},"50%":{strokeDasharray:"100px, 200px",strokeDashoffset:"-15px"},"100%":{strokeDasharray:"100px, 200px",strokeDashoffset:"-125px"}},circleDisableShrink:{animation:"none"}}}),{name:"MuiCircularProgress",flip:!1})(l)},149:function(t,e,n){"use strict";var r=n(1),a=n(3),i=n(0),c=(n(6),n(4)),o=n(7),s=n(43),u=n(169),l=n(46),f=n(44),p=n(111),d=n(27),b={entering:{opacity:1},entered:{opacity:1}},h={enter:l.b.enteringScreen,exit:l.b.leavingScreen},m=i.forwardRef((function(t,e){var n=t.children,c=t.disableStrictModeCompat,o=void 0!==c&&c,l=t.in,m=t.onEnter,j=t.onEntered,x=t.onEntering,O=t.onExit,v=t.onExited,y=t.onExiting,k=t.style,g=t.TransitionComponent,w=void 0===g?u.a:g,E=t.timeout,S=void 0===E?h:E,D=Object(a.a)(t,["children","disableStrictModeCompat","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","TransitionComponent","timeout"]),C=Object(f.a)(),N=C.unstable_strictMode&&!o,M=i.useRef(null),I=Object(d.a)(n.ref,e),T=Object(d.a)(N?M:void 0,I),z=function(t){return function(e,n){if(t){var r=N?[M.current,e]:[e,n],a=Object(s.a)(r,2),i=a[0],c=a[1];void 0===c?t(i):t(i,c)}}},R=z(x),_=z((function(t,e){Object(p.b)(t);var n=Object(p.a)({style:k,timeout:S},{mode:"enter"});t.style.webkitTransition=C.transitions.create("opacity",n),t.style.transition=C.transitions.create("opacity",n),m&&m(t,e)})),H=z(j),B=z(y),F=z((function(t){var e=Object(p.a)({style:k,timeout:S},{mode:"exit"});t.style.webkitTransition=C.transitions.create("opacity",e),t.style.transition=C.transitions.create("opacity",e),O&&O(t)})),P=z(v);return i.createElement(w,Object(r.a)({appear:!0,in:l,nodeRef:N?M:void 0,onEnter:_,onEntered:H,onEntering:R,onExit:F,onExited:P,onExiting:B,timeout:S},D),(function(t,e){return i.cloneElement(n,Object(r.a)({style:Object(r.a)({opacity:0,visibility:"exited"!==t||l?void 0:"hidden"},b[t],k,n.props.style),ref:T},e))}))})),j=i.forwardRef((function(t,e){var n=t.children,o=t.classes,s=t.className,u=t.invisible,l=void 0!==u&&u,f=t.open,p=t.transitionDuration,d=t.TransitionComponent,b=void 0===d?m:d,h=Object(a.a)(t,["children","classes","className","invisible","open","transitionDuration","TransitionComponent"]);return i.createElement(b,Object(r.a)({in:f,timeout:p},h),i.createElement("div",{className:Object(c.a)(o.root,s,l&&o.invisible),"aria-hidden":!0,ref:e},n))}));e.a=Object(o.a)({root:{zIndex:-1,position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent"},invisible:{backgroundColor:"transparent"}},{name:"MuiBackdrop"})(j)},165:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return k}));var r=n(112),a=n(107),i=n.n(a),c=n(108),o=n(42),s=n(0),u=n(8),l=n(109),f=n.n(l),p=n(106),d=n(159),b=n(75),h=n(93),m=n(103),j=n(95),x=n(149),O=n(147),v=n(2),y=Object(d.a)((function(t){return{backdrop:{zIndex:t.zIndex.drawer+1,color:"#fff"}}}));function k(){var t=Object(s.useState)({}),e=Object(o.a)(t,2),n=e[0],a=e[1],l=Object(s.useState)({}),d=Object(o.a)(l,2),k=d[0],g=d[1],w=Object(s.useState)([]),E=Object(o.a)(w,2),S=E[0],D=E[1],C=Object(s.useState)([]),N=Object(o.a)(C,2),M=N[0],I=N[1],T=Object(s.useState)(!0),z=Object(o.a)(T,2),R=z[0],_=z[1],H=Object(u.i)().name,B=y();return Object(s.useEffect)((function(){function t(){return(t=Object(c.a)(i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f()("https://swapi.dev/api/people/?search=".concat(H)).then((function(t){return a(t.data.results[0])}));case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[H]),Object(s.useEffect)((function(){function t(){return(t=Object(c.a)(i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n.homeworld){t.next=3;break}return t.next=3,Object(p.d)(n.homeworld).then((function(t){return g(t.name)}));case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[n.homeworld]),Object(s.useEffect)((function(){function t(){return(t=Object(c.a)(i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n.vehicles){t.next=3;break}return t.next=3,n.vehicles.map((function(t){return Object(p.e)(t).then((function(t){return D((function(e){return e.name===t.name?e:[].concat(Object(r.a)(e),[t])}))}))}));case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[n.vehicles]),Object(s.useEffect)((function(){function t(){return(t=Object(c.a)(i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n.films){t.next=4;break}return t.next=3,n.films.map((function(t){return Object(p.c)(t).then((function(t){return I((function(e){return e.includes(t.title)?e:[].concat(Object(r.a)(e),[t.title])}))}))}));case 3:_(!R);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[n.films]),Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(b.a,{elevation:3,children:Object(v.jsx)(h.a,{children:Object(v.jsxs)(m.a,{mt:10,p:3,children:[Object(v.jsx)(j.a,{children:"Name: ".concat(n.name)}),Object(v.jsx)(j.a,{children:"Height: ".concat(n.height," sm")}),Object(v.jsx)(j.a,{children:"Mass: ".concat(n.mass," kg")}),Object(v.jsx)(j.a,{children:"Hair color: ".concat(n.hair_color)}),Object(v.jsx)(j.a,{children:"Skin color: ".concat(n.skin_color)}),Object(v.jsx)(j.a,{children:"Eye color: ".concat(n.eye_color)}),Object(v.jsx)(j.a,{children:"Birth year: ".concat(n.birth_year)}),Object(v.jsx)(j.a,{children:"Gender: ".concat(n.gender)}),k&&Object(v.jsx)(j.a,{children:"Home World: ".concat(k)}),S&&S.map((function(t){var e=t.name,n=t.model;return Object(v.jsxs)(j.a,{children:["Name: ",e,", Model: ",n]},e)})),Object(v.jsxs)(j.a,{children:["\u0424\u0438\u043b\u044c\u043c\u044b: ",M.map((function(t){return Object(v.jsx)(j.a,{children:t},t)}))]})]})})}),Object(v.jsx)(x.a,{className:B.backdrop,open:R,children:Object(v.jsx)(O.a,{color:"inherit"})})]})}}}]);
//# sourceMappingURL=CharacterPage.6d7d9eae.chunk.js.map
(this["webpackJsonpproject-1"]=this["webpackJsonpproject-1"]||[]).push([[0],{49:function(e,t,n){e.exports=n(62)},54:function(e,t,n){},55:function(e,t,n){},62:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(23),i=n.n(r),c=(n(54),n(55),n(46)),l=n(18),s=n(91),u=n(82),m=n(89),d=n(4),f=n(83),g=n(65),h=n(84),p=n(85),b=n(86),w=n(17),y=n(32);function v(){var e=Object(l.a)(["\n  font-weight: 100;\n  font-size: 3em;\n  color: #222222;\n  border: 3px solid #222222;\n"]);return v=function(){return e},e}function E(){var e=Object(l.a)(["\n  padding-left: 0.5em;\n  padding-right:0.5em;\n  padding-bottom: 0.15em;\n"]);return E=function(){return e},e}function k(){var e=Object(l.a)(["\n  && :indicator {\n    background-color: black;\n  }\n"]);return k=function(){return e},e}function x(){var e=Object(l.a)(["\n  && :hover {\n    color: #262626;\n  };\n  && :focus {\n    color: #262626;\n  }\n"]);return x=function(){return e},e}function j(){var e=Object(l.a)(["\n  background: linear-gradient(90deg, #FC466B 0%, #3F5EFB 100%);\n  padding: 1em;\n"]);return j=function(){return e},e}var I=Object(w.a)(s.a)(j());Object(w.a)(u.a)(x()),Object(w.a)(m.a)(k());function O(e){var t=0;return e.forEach((function(e){"#".concat(e.url)===window.location.hash&&(t=e.index)})),t}var A=Object(d.a)({indicator:{backgroundColor:"white"}})(m.a),C=Object(w.a)(f.a)(E()),M=Object(w.a)(g.a)(v()),B=function(e){var t=e.pages,n=Object(a.useState)(O(t)),r=Object(c.a)(n,2),i=r[0],l=r[1];return o.a.createElement(I,{position:"sticky"},o.a.createElement(h.a,null,o.a.createElement(p.a,{container:!0,xs:12,justify:"center"},o.a.createElement(p.a,{item:!0},o.a.createElement(C,{paragraph:!0,component:M},"Cole Downey")),o.a.createElement(p.a,{item:!0,xs:12},o.a.createElement(A,{variant:Object(b.a)("(min-width:800px)")?"fullWidth":"scrollable",value:i,centered:!0,scrollButtons:"on",onClick:function(){l(O(t))}},t.map((function(e){return o.a.createElement(u.a,{label:e.title,to:e.url,key:e.index,component:y.b})})))))))};function D(){var e=Object(l.a)(["\n  color: white;\n  font-size: 1.5rem;\n  font-weight: 100;\n  margin-top: 1em;\n"]);return D=function(){return e},e}var S=Object(w.a)(f.a)(D()),F=["My name is Cole Downey, and I am a junior at Texas A&M, class of \u201922, pursuing a Computer Science major and a Video Game Development and Design minor. I was born in Denver, Colorado, but grew up in Boise, Idaho. I went to a small IB school with a graduating class size of 59. In high school I played ultimate frisbee and raced in mountain biking and skiing, although those hobbies haven\u2019t followed me to Texas (no mountains here). My favorite hobbies are longboarding, skiing, playing music (ukulele and piano), and playing/creating video games.","My family consists of me, my dad, my mom, and my younger twin brothers: Gus and Luke. My dad is pilot, retired from the Air Force, currently flying commercial at United Airlines. My mom is a CPA who is currently a stay at home mom and also works on the board for my old high school. Gus and Luke are seniors at the same school I graduated from, and also like to mountain bike and ski.","After graduating, I would like to work in the video game industry, at least to some extent. I\u2019m currently still deciding if I want to do something like software engineering as my main career and do some indie game dev on the side, or if I want to commit to game dev as my full career. I would prefer to work for a mid-sized game studio, somewhere between a AAA studio and indie studio, although that preference might change before I graduated. Some of my favorite studios and also my top choices to work for are Respawn, Hopoo, Nintendo, and CD Projekt Red. If I end up pursuing the software development route, my dream job would be to work at Spotify or Google."],z=function(){return o.a.createElement(p.a,{container:!0,spacing:6,justify:"center",alignItems:"flex-start",xs:10},o.a.createElement(p.a,{item:!0,xs:12},o.a.createElement(S,{variant:"h6"},"Note: this section will go the About Me page when the header links are active, for now it will go here"),F.map((function(e){return o.a.createElement(S,{variant:"p",paragraph:!0},e)}))))},G=function(){return o.a.createElement(p.a,{container:!0,spacing:6,justify:"center",alignItems:"flex-start",xs:10},o.a.createElement(p.a,{item:!0,xs:12},o.a.createElement(S,{variant:"p",paragraph:!0},window.location.hash)))},T=function(){return o.a.createElement(p.a,{container:!0,spacing:6,justify:"center",alignItems:"flex-start",xs:10},o.a.createElement(p.a,{item:!0,xs:12},o.a.createElement(S,{variant:"p",paragraph:!0},"This is my qualifications page.")))},P=function(){return o.a.createElement(p.a,{container:!0,spacing:6,justify:"center",alignItems:"flex-start",xs:10},o.a.createElement(p.a,{item:!0,xs:12},o.a.createElement(S,{variant:"p",paragraph:!0},"This is my service page.")))},W=n(45),q=n(90),H=n(87),J=n(88),L=n(6),N=Object(W.a)({palette:{background:{default:"#222222"},text:{primary:"#ffffff",secondary:"#222222"}}}),R=[{url:"/",title:"Home",index:0,cont:z},{url:"/about",title:"About Me",index:1,cont:z},{url:"/portfolio",title:"Portfolio",index:2,cont:G},{url:"/qualifications",title:"Qualifications",index:3,cont:T},{url:"/service",title:"Service",index:4,cont:P}];var Q=function(){return o.a.createElement(q.b,{injectFirst:!0},o.a.createElement(H.a,{theme:N},o.a.createElement(J.a,null),o.a.createElement(y.a,null,o.a.createElement(B,{pages:R}),o.a.createElement(p.a,{container:!0,justify:"center",xs:12},o.a.createElement(L.c,null,R.map((function(e){return o.a.createElement(L.a,{exact:!0,path:e.url,key:e.index,component:e.cont})})))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(Q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[49,1,2]]]);
//# sourceMappingURL=main.9cb29669.chunk.js.map
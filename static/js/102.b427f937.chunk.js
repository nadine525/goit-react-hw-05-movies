"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[102],{335:function(n,t,e){e.d(t,{Z:function(){return v}});var r,a,c,u=e(689),o=e(168),i=e(444),s=e(87),p=i.ZP.ul(r||(r=(0,o.Z)(["\n  padding-left: 40px;\n  padding-right: 40px;\n"]))),f=i.ZP.li(a||(a=(0,o.Z)(["\n  &:not(:last-child) {\n    margin-bottom: 8px;\n  }\n"]))),d=(0,i.ZP)(s.rU)(c||(c=(0,o.Z)(["\n  color: #212121;\n\n  &:hover {\n    color: #c75124;\n    text-decoration: underline;\n  }\n"]))),l=e(184),v=function(n){var t=n.movies,e=(0,u.TH)();return(0,l.jsx)(p,{children:t.map((function(n){var t=n.id,r=n.title;return(0,l.jsx)(f,{children:(0,l.jsx)(d,{to:"/movies/".concat(t),state:{from:e},children:r})},t)}))})}},102:function(n,t,e){e.r(t),e.d(t,{default:function(){return h}});var r,a,c=e(439),u=e(791),o=e(87),i=e(778),s=e(168),p=e(444),f=p.ZP.input(r||(r=(0,s.Z)(["\n  margin-right: 8px;\n  width: 300px;\n  height: 25px;\n  border-radius: 5px;\n  margin-bottom: 20px;\n"]))),d=p.ZP.button(a||(a=(0,s.Z)(["\n  height: 30px;\n  padding: 0 15px;\n  border: none;\n  border-radius: 5px;\n  background-color: #cccccc;\n  cursor: pointer;\n\n  &:hover {\n    background-color: #aaaaaa;\n  }\n"]))),l=e(335),v=e(184),h=function(){var n,t=(0,u.useState)(""),e=(0,c.Z)(t,2),r=e[0],a=e[1],s=(0,o.lr)(),p=(0,c.Z)(s,2),h=p[0],g=p[1],x=null!==(n=h.get("query"))&&void 0!==n?n:"",m=(0,u.useState)([]),Z=(0,c.Z)(m,2),b=Z[0],k=Z[1];return(0,u.useEffect)((function(){""!==x&&(0,i.q)(x).then((function(n){return k(n.results)})).catch((function(n){return console.log(n)}))}),[x]),(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)("form",{onSubmit:function(n){n.preventDefault();var t=n.currentTarget;g({query:t.query.value}),a("")},children:[(0,v.jsx)(f,{type:"text",name:"query",value:r,onChange:function(n){a(n.target.value.toLowerCase().trim())}}),(0,v.jsx)(d,{type:"submit",children:"Search"})]}),b&&(0,v.jsx)(l.Z,{movies:b})]})}},778:function(n,t,e){e.d(t,{Df:function(){return s},TP:function(){return p},q:function(){return l},st:function(){return f},tx:function(){return d}});var r=e(861),a=e(757),c=e.n(a),u=e(243),o="https://api.themoviedb.org/3",i="4d5567e6cf5210846af05c06dd64dec1",s=function(){var n=(0,r.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o,"/trending/movie/day?api_key=").concat(i,"&language=eu-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o,"/movie/").concat(t,"?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o,"/movie/").concat(t,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o,"/movie/").concat(t,"/reviews?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o,"/search/movie?api_key=").concat(i,"&query=").concat(t,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=102.b427f937.chunk.js.map
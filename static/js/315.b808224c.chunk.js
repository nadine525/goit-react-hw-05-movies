"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[315],{315:function(n,t,e){e.r(t),e.d(t,{default:function(){return w}});var r,a,c,u,o,i=e(439),s=e(791),p=e(778),f=e(689),h=e(168),d=e(444),v=d.ZP.p(r||(r=(0,h.Z)(["\n  font-size: 14px;\n"]))),l=d.ZP.li(a||(a=(0,h.Z)(["\n  margin-bottom: 10px;\n"]))),m=d.ZP.p(c||(c=(0,h.Z)(["\n  font-size: 16px;\n  font-weight: 500;\n"]))),g=d.ZP.ul(u||(u=(0,h.Z)(["\n  margin-bottom: 12px;\n"]))),x=d.ZP.p(o||(o=(0,h.Z)(["\n  margin-bottom: 8px;\n"]))),Z=e(184),w=function(){var n=(0,s.useState)([]),t=(0,i.Z)(n,2),e=t[0],r=t[1],a=(0,f.UO)().movieId;if((0,s.useEffect)((function(){(0,p.tx)(a).then((function(n){r(n)})).catch(console.log)}),[a]),e)return(0,Z.jsx)(Z.Fragment,{children:e.length>0?(0,Z.jsx)(g,{children:e.map((function(n){var t=n.id,e=n.author,r=n.content;return(0,Z.jsxs)(l,{children:[(0,Z.jsxs)(x,{children:["Author: ",(0,Z.jsx)("b",{children:e})]}),(0,Z.jsx)(v,{children:r})]},t)}))}):(0,Z.jsx)(m,{children:"We don't have any reviews for this movie."})})}},778:function(n,t,e){e.d(t,{Df:function(){return s},TP:function(){return p},q:function(){return d},st:function(){return f},tx:function(){return h}});var r=e(861),a=e(757),c=e.n(a),u=e(243),o="https://api.themoviedb.org/3",i="4d5567e6cf5210846af05c06dd64dec1",s=function(){var n=(0,r.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o,"/trending/movie/day?api_key=").concat(i,"&language=eu-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o,"/movie/").concat(t,"?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o,"/movie/").concat(t,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o,"/movie/").concat(t,"/reviews?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o,"/search/movie?api_key=").concat(i,"&query=").concat(t,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=315.b808224c.chunk.js.map
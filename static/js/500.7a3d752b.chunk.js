"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[500],{9062:function(n,t,e){e.d(t,{O:function(){return d}});var r,a,u=e(168),o=e(6444),i=e(6731),c=(0,o.ZP)(i.OL)(r||(r=(0,u.Z)(["\ndisplay: block;\npadding: 8px 8px;\nborder-radius: 4px;\ntext-decoration: none;\ncolor: black;\n\n\n&:hover {\n  color: white;\n  background-color: orangered;\n}"]))),s=e(184),f=function(n){var t=n.id,e=n.title,r=n.state;return(0,s.jsx)("li",{children:(0,s.jsx)(c,{to:"/movies/".concat(t),state:r,children:e})})},l=o.ZP.ul(a||(a=(0,u.Z)(["\nmax-width: 300px;\ndisplay: flex;\nflex-direction: column;\nlist-style: none;\n"]))),d=function(n){var t=n.filmsList,e=n.state;return(0,s.jsx)(l,{children:t.map((function(n){var t=n.id,r=n.title;return(0,s.jsx)(f,{title:r,id:t,state:e},t)}))})}},4500:function(n,t,e){e.r(t),e.d(t,{default:function(){return p}});var r=e(5861),a=e(885),u=e(7757),o=e.n(u),i=e(2791),c=e(6731),s=e(7689),f=e(5264),l=e(1933),d=e(9062),v=e(184),h=function(n){var t=n.onChange;return(0,v.jsxs)("form",{onSubmit:function(n){n.preventDefault();var e=n.currentTarget,r=e.elements.searchValue.value;t(r),e.reset()},children:[(0,v.jsx)("input",{type:"text",placeholder:"Search movies",name:"searchValue"}),(0,v.jsx)("button",{type:"submit",children:"Search"})]})},p=function(){var n,t=(0,i.useState)([]),e=(0,a.Z)(t,2),u=e[0],p=e[1],m=(0,c.lr)(),x=(0,a.Z)(m,2),y=x[0],g=x[1],b=null!==(n=y.get("query"))&&void 0!==n?n:"",k=(0,s.TH)();(0,i.useEffect)((function(){0!==b.trim().length&&w(b)}),[b]);var w=function(){var n=(0,r.Z)(o().mark((function n(t){var e,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,l.q)(t);case 3:if(e=n.sent,0!==(r=e.results.map((function(n){return{id:n.id,title:n.title}}))).length){n.next=9;break}return f.Notify.failure("Sorry, there are no information by your query. Try another search."),p([]),n.abrupt("return");case 9:p(r),n.next=15;break;case 12:n.prev=12,n.t0=n.catch(0),f.Notify.failure("Something went wrong. Please try again.");case 15:case"end":return n.stop()}}),n,null,[[0,12]])})));return function(t){return n.apply(this,arguments)}}();return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(h,{onChange:function(n){p([]),g(""!==n?{query:n}:{})}}),(0,v.jsx)(d.O,{filmsList:u,state:{from:k}})]})}},1933:function(n,t,e){e.d(t,{Hg:function(){return s},M1:function(){return d},TP:function(){return l},q:function(){return f},tx:function(){return v}});var r=e(5861),a=e(7757),u=e.n(a),o=e(1044),i="8d195799489102b1191d845f2ff9f57d";o.ZP.defaults.baseURL="https://api.themoviedb.org/3";var c=function(){var n=(0,r.Z)(u().mark((function n(){var t,e,r,a=arguments;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:"",e=a.length>1&&void 0!==a[1]?a[1]:"",n.prev=2,n.next=5,o.ZP.get("".concat(t,"?api_key=").concat(i,"&").concat(e));case 5:return r=n.sent,n.abrupt("return",r.data);case 9:n.prev=9,n.t0=n.catch(2),new Error("Not Found");case 12:case"end":return n.stop()}}),n,null,[[2,9]])})));return function(){return n.apply(this,arguments)}}(),s=function(){return c("/trending/movie/day")},f=function(n){var t="&query=".concat(n);return c("search/movie",t)},l=function(n){var t="movie/".concat(n);return c(t)},d=function(n){var t="movie/".concat(n,"/credits");return c(t)},v=function(n){var t="movie/".concat(n,"/reviews");return c(t)}}}]);
//# sourceMappingURL=500.7a3d752b.chunk.js.map
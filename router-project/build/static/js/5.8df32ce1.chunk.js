(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[5],{47:function(e,t,c){e.exports={item:"QuoteItem_item__2ryL7"}},48:function(e,t,c){e.exports={list:"QuoteList_list__aaJov",sorting:"QuoteList_sorting__2Ofyo"}},49:function(e,t,c){e.exports={noquotes:"NoQuotesFound_noquotes__oLxSN"}},52:function(e,t,c){"use strict";c.r(t);var s=c(0),n=c(2),i=c(8),o=c(47),r=c.n(o),a=c(1),u=function(e){return Object(a.jsxs)("li",{className:r.a.item,children:[Object(a.jsxs)("figure",{children:[Object(a.jsx)("blockquote",{children:Object(a.jsx)("p",{children:e.text})}),Object(a.jsx)("figcaption",{children:e.author})]}),Object(a.jsx)(i.b,{to:"/quotes/".concat(e.id),className:"btn",children:"View Fullscreen"})]})},d=c(48),j=c.n(d),l=function(e){var t,c,i=Object(n.h)(),o=Object(n.i)(),r="asc"===new URLSearchParams(o.search).get("sort"),d=(t=e.quotes,c=r,t.sort((function(e,t){return c?e.id>t.id?1:-1:e.id<t.id?1:-1})));return Object(a.jsxs)(s.Fragment,{children:[Object(a.jsx)("div",{className:j.a.sorting,children:Object(a.jsxs)("button",{onClick:function(){i.push({pathname:o.pathname,search:"?sort=".concat(r?"desc":"asc")})},children:["Sort ",r?"Descending":"Ascending"]})}),Object(a.jsx)("ul",{className:j.a.list,children:d.map((function(e){return Object(a.jsx)(u,{id:e.id,author:e.author,text:e.text},e.id)}))})]})},b=c(15),h=c(33),x=c(34),O=c(49),f=c.n(O),m=function(){return Object(a.jsxs)("div",{className:f.a.noquotes,children:[Object(a.jsx)("p",{children:"No quotes found!"}),Object(a.jsx)(i.b,{className:"btn",to:"/new-quote",children:"Add a Quote"})]})};t.default=function(e){var t=Object(h.a)(x.d,!0),c=t.sendRequest,n=t.status,i=t.data,o=t.error;return Object(s.useEffect)((function(){c()}),[c]),"pending"===n?Object(a.jsx)("div",{className:"centered",children:Object(a.jsx)(b.a,{})}):o?Object(a.jsx)("p",{className:"centered focused",children:o}):"completed"!==n||i&&0!==i.length?Object(a.jsx)(l,{quotes:i}):Object(a.jsx)(m,{})}}}]);
//# sourceMappingURL=5.8df32ce1.chunk.js.map
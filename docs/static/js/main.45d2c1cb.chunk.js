(this["webpackJsonpprime-table"]=this["webpackJsonpprime-table"]||[]).push([[0],{12:function(e,t,r){},13:function(e,t,r){"use strict";r.r(t);var n=r(1),c=r.n(n),a=r(4),i=r.n(a),s=r(6),j=[2,3];var b=r(3),d=r.n(b),l=r(0);var o=function(e){var t=e.numberOfPrimes,r=void 0===t?10:t,a=Object(n.useState)(r),i=Object(s.a)(a,1)[0],b=c.a.useMemo((function(){return function(e){if(e<=0)return[];var t=j.length;if(t>=e)return j.slice(0,e);for(var r=j[t-1]+2;j.length<e;r+=2){for(var n=!0,c=Math.sqrt(r),a=1;a<j.length;a++){var i=j[a];if(i>c)break;if(r%i===0){n=!1;break}}n&&j.push(r)}return j.slice()}(i)}),[i]);return Object(l.jsx)("div",{className:d.a.wrap,children:Object(l.jsxs)("table",{className:d.a.table,children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{}),b.map((function(e){return Object(l.jsx)("th",{"data-testid":"columnHeader",children:e},e)}))]})}),Object(l.jsx)("tbody",{children:b.map((function(e){return Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{"data-testid":"rowLeader",children:e}),b.map((function(t){return Object(l.jsx)("td",{children:e*t},t)}))]},e)}))})]})})},u=r(5),h=r.n(u);var f=function(){return Object(l.jsxs)("div",{className:h.a.container,children:[Object(l.jsx)("div",{children:Object(l.jsx)("h1",{children:"Products of Primes"})}),Object(l.jsx)(o,{})]})};r(12);i.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(f,{})}),document.getElementById("root"))},3:function(e,t,r){e.exports={wrap:"Table_wrap__1JCDb",table:"Table_table__3M_gK"}},5:function(e,t,r){e.exports={container:"App_container__381Bn"}}},[[13,1,2]]]);
//# sourceMappingURL=main.45d2c1cb.chunk.js.map
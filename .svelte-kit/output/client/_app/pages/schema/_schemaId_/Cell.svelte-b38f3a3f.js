import{S as D,i as z,s as C,e as h,c as p,a as m,d as s,b as u,g as f,P as I,E as g,Z as V,t as b,h as k,j as v,l as _,M as d,k as w,m as A,Q as N}from"../../../chunks/index-bed072e4.js";function y(r,e,n){const c=r.slice();return c[4]=e[n],c}function S(r){let e;return{c(){e=b(r[0])},l(n){e=k(n,r[0])},m(n,c){f(n,e,c)},p(n,c){c&1&&v(e,n[0])},d(n){n&&s(e)}}}function j(r){let e,n;function c(l,o){return o&1&&(e=null),e==null&&(e=!!Array.isArray(l[0])),e?x:q}let t=c(r,-1),i=t(r);return{c(){i.c(),n=_()},l(l){i.l(l),n=_()},m(l,o){i.m(l,o),f(l,n,o)},p(l,o){t===(t=c(l,o))&&i?i.p(l,o):(i.d(1),i=t(l),i&&(i.c(),i.m(n.parentNode,n)))},d(l){i.d(l),l&&s(n)}}}function q(r){let e,n,c;return{c(){e=h("div"),n=b(r[0]),this.h()},l(t){e=p(t,"DIV",{class:!0});var i=m(e);n=k(i,r[0]),i.forEach(s),this.h()},h(){u(e,"class",c="inline-block mr-1 px-2 rounded-xl "+r[1].source.table.color+" bg-opacity-30")},m(t,i){f(t,e,i),d(e,n)},p(t,i){i&1&&v(n,t[0]),i&2&&c!==(c="inline-block mr-1 px-2 rounded-xl "+t[1].source.table.color+" bg-opacity-30")&&u(e,"class",c)},d(t){t&&s(e)}}}function x(r){let e,n=r[0],c=[];for(let t=0;t<n.length;t+=1)c[t]=E(y(r,n,t));return{c(){for(let t=0;t<c.length;t+=1)c[t].c();e=_()},l(t){for(let i=0;i<c.length;i+=1)c[i].l(t);e=_()},m(t,i){for(let l=0;l<c.length;l+=1)c[l].m(t,i);f(t,e,i)},p(t,i){if(i&3){n=t[0];let l;for(l=0;l<n.length;l+=1){const o=y(t,n,l);c[l]?c[l].p(o,i):(c[l]=E(o),c[l].c(),c[l].m(e.parentNode,e))}for(;l<c.length;l+=1)c[l].d(1);c.length=n.length}},d(t){N(c,t),t&&s(e)}}}function E(r){let e,n=r[4]+"",c,t,i;return{c(){e=h("div"),c=b(n),t=w(),this.h()},l(l){e=p(l,"DIV",{class:!0});var o=m(e);c=k(o,n),t=A(o),o.forEach(s),this.h()},h(){u(e,"class",i="inline-block mr-1 px-2 rounded-xl "+r[1].source.table.color+" bg-opacity-30")},m(l,o){f(l,e,o),d(e,c),d(e,t)},p(l,o){o&1&&n!==(n=l[4]+"")&&v(c,n),o&2&&i!==(i="inline-block mr-1 px-2 rounded-xl "+l[1].source.table.color+" bg-opacity-30")&&u(e,"class",i)},d(l){l&&s(e)}}}function L(r){let e,n,c;function t(o,a){return o[1].aggregation=="List"?j:S}let i=t(r),l=i(r);return{c(){e=h("div"),l.c(),this.h()},l(o){e=p(o,"DIV",{class:!0});var a=m(e);l.l(a),a.forEach(s),this.h()},h(){u(e,"class","hover:bg-opacity-60 bg-opacity-0 bg-zinc-100 cursor-pointer p-2 border-r w-80 space-y-1 border-zinc-200 text-zinc-800")},m(o,a){f(o,e,a),l.m(e,null),n||(c=I(e,"click",r[3]),n=!0)},p(o,[a]){i===(i=t(o))&&l?l.p(o,a):(l.d(1),l=i(o),l&&(l.c(),l.m(e,null)))},i:g,o:g,d(o){o&&s(e),l.d(),n=!1,c()}}}function M(r,e,n){const c=V();let{cell:t}=e,{column:i}=e;const l=()=>c("editCell");return r.$$set=o=>{"cell"in o&&n(0,t=o.cell),"column"in o&&n(1,i=o.column)},[t,i,c,l]}class Q extends D{constructor(e){super();z(this,e,M,L,C,{cell:0,column:1})}}export{Q as default};
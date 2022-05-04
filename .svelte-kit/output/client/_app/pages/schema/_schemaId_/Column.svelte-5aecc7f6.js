import{S as Ie,i as De,s as ye,e as i,w as Ve,c as r,a as c,x as ke,d as l,b as o,g as ie,y as ze,q as Se,o as Ce,B as we,k as h,t as S,m,h as C,M as e,j as ae,f as _e}from"../../../chunks/index-bed072e4.js";import{t as $e}from"../../../chunks/themes-fa5ad8e6.js";import{i as Y}from"../../../chunks/iconMap-7a0cdc3f.js";import"../../../chunks/randomColor-af782e7b.js";import"../../../chunks/lodash-8a03b776.js";import{D as Ae}from"../../../chunks/Dropdown-c142f7f6.js";function be(v){let t,s;return{c(){t=i("i"),this.h()},l(a){t=r(a,"I",{class:!0}),c(t).forEach(l),this.h()},h(){o(t,"class",s=Y[v[0].aggregation])},m(a,n){ie(a,t,n)},p(a,n){n&1&&s!==(s=Y[a[0].aggregation])&&o(t,"class",s)},d(a){a&&l(t)}}}function xe(v){let t,s,a,n,d,b,_,I,x=(v[1].type=="table"?v[0].name:v[0].alias)+"",k,u=v[0].aggregation&&be(v);return{c(){t=i("div"),s=i("div"),a=i("i"),d=h(),u&&u.c(),_=h(),I=i("div"),k=S(x),this.h()},l(f){t=r(f,"DIV",{class:!0,slot:!0});var g=c(t);s=r(g,"DIV",{class:!0});var z=c(s);a=r(z,"I",{class:!0}),c(a).forEach(l),d=m(z),u&&u.l(z),z.forEach(l),_=m(g),I=r(g,"DIV",{});var N=c(I);k=C(N,x),N.forEach(l),g.forEach(l),this.h()},h(){var f;o(a,"class",n=Y[v[0].type]),o(s,"class",b="bg-["+((f=v[0].source)==null?void 0:f.table.color)+"] px-1 text-sm rounded text-center"),o(t,"class","cursor-pointer space-x-2 flex items-center"),o(t,"slot","toggle")},m(f,g){ie(f,t,g),e(t,s),e(s,a),e(s,d),u&&u.m(s,null),e(t,_),e(t,I),e(I,k)},p(f,g){var z;g&1&&n!==(n=Y[f[0].type])&&o(a,"class",n),f[0].aggregation?u?u.p(f,g):(u=be(f),u.c(),u.m(s,null)):u&&(u.d(1),u=null),g&1&&b!==(b="bg-["+((z=f[0].source)==null?void 0:z.table.color)+"] px-1 text-sm rounded text-center")&&o(s,"class",b),g&3&&x!==(x=(f[1].type=="table"?f[0].name:f[0].alias)+"")&&ae(k,x)},d(f){f&&l(t),u&&u.d()}}}function ge(v){let t,s,a,n,d,b,_,I,x,k,u,f,g,z=v[0].name+"",N,K,T,H,Z,M,B,Q,L,O=v[0].source.table.name+"",U,ee,w,G,te,se,$,q,R,le,p=v[0].source.link.table.name+"",E,D,y,V,F,W=v[0].source.link.column.name+"",j;return{c(){t=i("div"),s=i("h4"),a=S("Source"),n=h(),d=i("div"),b=i("div"),_=i("div"),I=S("Column"),x=h(),k=i("div"),u=i("i"),g=h(),N=S(z),K=h(),T=i("div"),H=i("div"),Z=S("Table"),M=h(),B=i("div"),Q=i("i"),L=h(),U=S(O),ee=h(),w=i("div"),G=i("div"),te=S("Link"),se=h(),$=i("div"),q=i("span"),R=i("i"),le=h(),E=S(p),D=h(),y=i("span"),V=i("i"),F=h(),j=S(W),this.h()},l(P){t=r(P,"DIV",{class:!0});var A=c(t);s=r(A,"H4",{class:!0});var re=c(s);a=C(re,"Source"),re.forEach(l),n=m(A),d=r(A,"DIV",{class:!0});var J=c(d);b=r(J,"DIV",{class:!0});var X=c(b);_=r(X,"DIV",{class:!0});var oe=c(_);I=C(oe,"Column"),oe.forEach(l),x=m(X),k=r(X,"DIV",{class:!0});var ce=c(k);u=r(ce,"I",{class:!0}),c(u).forEach(l),g=m(ce),N=C(ce,z),ce.forEach(l),X.forEach(l),K=m(J),T=r(J,"DIV",{class:!0});var ne=c(T);H=r(ne,"DIV",{class:!0});var he=c(H);Z=C(he,"Table"),he.forEach(l),M=m(ne),B=r(ne,"DIV",{class:!0});var de=c(B);Q=r(de,"I",{class:!0}),c(Q).forEach(l),L=m(de),U=C(de,O),de.forEach(l),ne.forEach(l),ee=m(J),w=r(J,"DIV",{class:!0});var ue=c(w);G=r(ue,"DIV",{class:!0});var me=c(G);te=C(me,"Link"),me.forEach(l),se=m(ue),$=r(ue,"DIV",{class:!0});var ve=c($);q=r(ve,"SPAN",{});var fe=c(q);R=r(fe,"I",{class:!0}),c(R).forEach(l),le=m(fe),E=C(fe,p),fe.forEach(l),D=m(ve),y=r(ve,"SPAN",{});var pe=c(y);V=r(pe,"I",{class:!0}),c(V).forEach(l),F=m(pe),j=C(pe,W),pe.forEach(l),ve.forEach(l),ue.forEach(l),J.forEach(l),A.forEach(l),this.h()},h(){o(s,"class","text-zinc-500 text-xs"),o(_,"class","col-span-1"),o(u,"class",f=Y[v[0].type]+" align-bottom"),o(k,"class","col-span-2"),o(b,"class","grid grid-cols-3"),o(H,"class","col-span-1"),o(Q,"class","ri-table-line align-bottom"),o(B,"class","col-span-2"),o(T,"class","grid grid-cols-3"),o(G,"class","col-span-1"),o(R,"class","ri-table-line align-bottom"),o(V,"class","ri-key-line align-bottom"),o($,"class","col-span-2"),o(w,"class","grid grid-cols-3"),o(d,"class","border border-zinc-200 rounded p-2 space-y-2"),o(t,"class","space-y-1 grid")},m(P,A){ie(P,t,A),e(t,s),e(s,a),e(t,n),e(t,d),e(d,b),e(b,_),e(_,I),e(b,x),e(b,k),e(k,u),e(k,g),e(k,N),e(d,K),e(d,T),e(T,H),e(H,Z),e(T,M),e(T,B),e(B,Q),e(B,L),e(B,U),e(d,ee),e(d,w),e(w,G),e(G,te),e(w,se),e(w,$),e($,q),e(q,R),e(q,le),e(q,E),e($,D),e($,y),e(y,V),e(y,F),e(y,j)},p(P,A){A&1&&f!==(f=Y[P[0].type]+" align-bottom")&&o(u,"class",f),A&1&&z!==(z=P[0].name+"")&&ae(N,z),A&1&&O!==(O=P[0].source.table.name+"")&&ae(U,O),A&1&&p!==(p=P[0].source.link.table.name+"")&&ae(E,p),A&1&&W!==(W=P[0].source.link.column.name+"")&&ae(j,W)},d(P){P&&l(t)}}}function Ee(v){let t,s;return{c(){t=i("div"),s=S("Delete Column"),this.h()},l(a){t=r(a,"DIV",{class:!0});var n=c(t);s=C(n,"Delete Column"),n.forEach(l),this.h()},h(){o(t,"class","px-2 py-1 hover:bg-zinc-100 hover:bg-opacity-40 text-gray-500")},m(a,n){ie(a,t,n),e(t,s)},d(a){a&&l(t)}}}function Ne(v){let t,s,a,n,d,b,_,I,x,k,u,f=v[0].type+"",g,z,N,K=v[0].db+"",T,H,Z,M,B,Q,L,O,U,ee,w,G,te,se,$,q,R,le,p=v[0].source&&ge(v),E=v[1].type=="table"&&Ee();return{c(){t=i("div"),s=i("div"),a=i("div"),n=i("div"),d=S("Data Type"),b=h(),_=i("div"),I=i("i"),k=h(),u=i("span"),g=S(f),z=h(),N=i("span"),T=S(K),H=h(),p&&p.c(),Z=h(),M=i("div"),B=S("Operations"),Q=h(),L=i("div"),O=i("i"),U=S(" Sort Ascending"),ee=h(),w=i("div"),G=i("i"),te=S(" Sort Descending"),se=h(),$=i("div"),q=i("i"),R=S(" Group by Column"),le=h(),E&&E.c(),this.h()},l(D){t=r(D,"DIV",{slot:!0,class:!0});var y=c(t);s=r(y,"DIV",{class:!0});var V=c(s);a=r(V,"DIV",{class:!0});var F=c(a);n=r(F,"DIV",{class:!0});var W=c(n);d=C(W,"Data Type"),W.forEach(l),b=m(F),_=r(F,"DIV",{class:!0});var j=c(_);I=r(j,"I",{class:!0,style:!0}),c(I).forEach(l),k=m(j),u=r(j,"SPAN",{class:!0});var P=c(u);g=C(P,f),P.forEach(l),z=m(j),N=r(j,"SPAN",{class:!0});var A=c(N);T=C(A,K),A.forEach(l),j.forEach(l),H=m(F),p&&p.l(F),F.forEach(l),Z=m(V),M=r(V,"DIV",{class:!0});var re=c(M);B=C(re,"Operations"),re.forEach(l),Q=m(V),L=r(V,"DIV",{class:!0});var J=c(L);O=r(J,"I",{class:!0}),c(O).forEach(l),U=C(J," Sort Ascending"),J.forEach(l),ee=m(V),w=r(V,"DIV",{class:!0});var X=c(w);G=r(X,"I",{class:!0}),c(G).forEach(l),te=C(X," Sort Descending"),X.forEach(l),se=m(V),$=r(V,"DIV",{class:!0});var oe=c($);q=r(oe,"I",{class:!0}),c(q).forEach(l),R=C(oe," Group by Column"),oe.forEach(l),le=m(V),E&&E.l(V),V.forEach(l),y.forEach(l),this.h()},h(){o(n,"class","text-zinc-500 text-xs"),o(I,"class",x="rounded align-bottom "+Y[v[0].type]),_e(I,"background-color",v[0].color),o(u,"class","capitalize"),o(N,"class","text-xs font-mono bg-zinc-200 px-1 rounded text-zinc-500"),o(_,"class","space-x-1"),o(a,"class","border-b space-y-2 px-2 pb-2 border-zinc-200"),o(M,"class","text-zinc-500 text-xs mb-1 px-2"),o(O,"class","ri-sort-asc align-bottom"),o(L,"class","px-2 py-1 hover:bg-zinc-100 hover:bg-opacity-40 cursor-pointer"),o(G,"class","ri-sort-desc align-bottom"),o(w,"class","px-2 py-1 hover:bg-zinc-100 hover:bg-opacity-40 cursor-pointer"),o(q,"class","ri-layout-row-fill align-bottom"),o($,"class","px-2 py-1 hover:bg-zinc-100 hover:bg-opacity-40 cursor-pointer"),o(s,"class","space-y-2"),o(t,"slot","menu"),o(t,"class","text-sm py-2")},m(D,y){ie(D,t,y),e(t,s),e(s,a),e(a,n),e(n,d),e(a,b),e(a,_),e(_,I),e(_,k),e(_,u),e(u,g),e(_,z),e(_,N),e(N,T),e(a,H),p&&p.m(a,null),e(s,Z),e(s,M),e(M,B),e(s,Q),e(s,L),e(L,O),e(L,U),e(s,ee),e(s,w),e(w,G),e(w,te),e(s,se),e(s,$),e($,q),e($,R),e(s,le),E&&E.m(s,null)},p(D,y){y&1&&x!==(x="rounded align-bottom "+Y[D[0].type])&&o(I,"class",x),y&1&&_e(I,"background-color",D[0].color),y&1&&f!==(f=D[0].type+"")&&ae(g,f),y&1&&K!==(K=D[0].db+"")&&ae(T,K),D[0].source?p?p.p(D,y):(p=ge(D),p.c(),p.m(a,null)):p&&(p.d(1),p=null),D[1].type=="table"?E||(E=Ee(),E.c(),E.m(s,null)):E&&(E.d(1),E=null)},d(D){D&&l(t),p&&p.d(),E&&E.d()}}}function Pe(v){let t,s,a;return s=new Ae({props:{full:!0,$$slots:{menu:[Ne],toggle:[xe]},$$scope:{ctx:v}}}),{c(){t=i("div"),Ve(s.$$.fragment),this.h()},l(n){t=r(n,"DIV",{class:!0});var d=c(t);ke(s.$$.fragment,d),d.forEach(l),this.h()},h(){o(t,"class","border-r bg-opacity-0 hover:bg-opacity-40 "+$e.darkBackgroundColor+" flex items-center p-2 border-zinc-200 text-zinc-800 w-80")},m(n,d){ie(n,t,d),ze(s,t,null),a=!0},p(n,[d]){const b={};d&7&&(b.$$scope={dirty:d,ctx:n}),s.$set(b)},i(n){a||(Se(s.$$.fragment,n),a=!0)},o(n){Ce(s.$$.fragment,n),a=!1},d(n){n&&l(t),we(s)}}}function Te(v,t,s){let{column:a={}}=t,{table:n}=t;return v.$$set=d=>{"column"in d&&s(0,a=d.column),"table"in d&&s(1,n=d.table)},[a,n]}class He extends Ie{constructor(t){super();De(this,t,Te,Pe,ye,{column:0,table:1})}}export{He as default};
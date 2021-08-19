var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,o=(t,a,l)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[a]=l,s=(e,t)=>{for(var a in t||(t={}))r.call(t,a)&&o(e,a,t[a]);if(l)for(var a of l(t))n.call(t,a)&&o(e,a,t[a]);return e};import{l as i,R as c,u as d,r as u,f as p,M as m,L as f,s as h,T as E,c as g,a as y,b,n as k,d as v,e as O,g as j,S as P,h as S,i as _,P as x,B as w,j as C}from"./vendor.17d44631.js";let I;const L={},A=function(e,t){if(!t||0===t.length)return e();if(void 0===I){const e=document.createElement("link").relList;I=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if((e=`/to-do-list/${e}`)in L)return;L[e]=!0;const t=e.endsWith(".css"),a=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${a}`))return;const l=document.createElement("link");return l.rel=t?"stylesheet":I,t||(l.as="script",l.crossOrigin=""),l.href=e,document.head.appendChild(l),t?new Promise(((e,t)=>{l.addEventListener("load",e),l.addEventListener("error",t)})):void 0}))).then((()=>e()))},T=e=>i(e,{fallback:c.createElement("div",null,"loading....")}),D=T((()=>A((()=>import("./index.98cf79d4.js")),["assets/index.98cf79d4.js","assets/vendor.17d44631.js","assets/vendor.761616c2.css"]))),R=T((()=>A((()=>import("./index.d09290e3.js")),["assets/index.d09290e3.js","assets/index.79d3c583.css","assets/vendor.17d44631.js","assets/vendor.761616c2.css"])));var $=[{key:"home",name:"首页",path:"/",component:D},{key:"list",name:"代办事项",path:"/list",component:R}];const B=()=>{const e=d(),[t,a]=u.exports.useState("");u.exports.useEffect((()=>{let t=p($,(t=>t.path===e.location.pathname));-1===t&&(t=0),a($[t].key)}));return c.createElement(m,{mode:"horizontal",theme:"dark",onClick:({key:e})=>{a(e)},selectedKeys:[t]},$.map((e=>c.createElement(m.Item,{key:e.key},c.createElement(f,{to:e.path},e.name)))))};var J={url:"https://github.com/minjs1cn/to-do-list",type:"github"};const N=h.div`
	text-align: center;
`;var U=()=>c.createElement(N,null,c.createElement(E.Link,{target:"_blank",href:J.url},J.type));const V="state-todo",q={set(e){localStorage.setItem(V,JSON.stringify(e))},get:()=>JSON.parse(localStorage.getItem(V)||"[]")};var z,F;(F=z||(z={}))[F.All=-1]="All",F[F.UnCompleted=0]="UnCompleted",F[F.Completed=1]="Completed";const H={list:q.get(),filter:-1};g("todo/update2",(()=>new Promise((e=>{setTimeout(e,2e3)}))));const K=y({name:"todo",initialState:H,reducers:{add:(e,l)=>{var r,n;e.list.push((r=s({},l.payload),n={uuid:k(),status:0},t(r,a(n))))},update:(e,{payload:t})=>{let a=p(e.list,(e=>e.uuid===t.uuid));-1!==a&&(e.list[a]=s(s({},e.list[a]),t))},delete:(e,t)=>{let a=p(e.list,(e=>e.uuid===t.payload));-1!==a&&e.list.splice(a,1)},toggle:(e,t)=>{let a=p(e.list,(e=>e.uuid===t.payload));-1!==a&&(e.list[a].status=1===e.list[a].status?0:1)},pick:(e,t)=>{e.filter=t.payload}}}),M=b((e=>e.todo.list),(e=>e.todo.filter),((e,t)=>{switch(t){case 1:return e.filter((e=>1===e.status));case 0:return e.filter((e=>0===e.status));default:return e}})),W=b((e=>e.todo.list),((e,t)=>t),((e,t)=>{let a=e.filter((e=>e.uuid===t));return a.length?a[0]:null}));const G=v({reducer:{todo:K.reducer}});G.subscribe((()=>{console.log(G.getState()),q.set(G.getState().todo.list)}));const Q=()=>O(),X=j;var Y=()=>c.createElement(P,null,$.map((e=>c.createElement(S,{exact:!0,key:e.key,path:e.path,component:e.component}))));const Z=h(_)`
	min-height: 100%;
`,ee=h(_.Content)`
	padding: 16px;
	background-color: #fff;
`,te=h(_.Footer)`
	padding-top: 8px;
	padding-bottom: 8px;
`,ae=()=>c.createElement(x,{store:G},c.createElement(w,{basename:"/to-do-list/"},c.createElement(Z,null,c.createElement(_.Header,null,c.createElement(B,null)),c.createElement(ee,null,c.createElement(Y,null)),c.createElement(te,null,c.createElement(U,null)))));C.render(c.createElement(ae,null),document.getElementById("app"));export{z as E,Q as a,M as b,W as s,K as t,X as u};
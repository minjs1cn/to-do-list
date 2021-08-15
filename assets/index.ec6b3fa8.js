var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,s=(t,a,l)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[a]=l,o=(e,t)=>{for(var a in t||(t={}))r.call(t,a)&&s(e,a,t[a]);if(l)for(var a of l(t))n.call(t,a)&&s(e,a,t[a]);return e};import{r as i,u as c,f as d,R as p,M as u,L as m,s as f,T as y,a as h,B as E,S as g,b,c as k,d as v,n as O,e as x,g as S,h as _,i as j,P}from"./vendor.f41c3f05.js";let C;const I={},L=function(e,t){if(!t||0===t.length)return e();if(void 0===C){const e=document.createElement("link").relList;C=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if((e=`/to-do-list/${e}`)in I)return;I[e]=!0;const t=e.endsWith(".css"),a=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${a}`))return;const l=document.createElement("link");return l.rel=t?"stylesheet":C,t||(l.as="script",l.crossOrigin=""),l.href=e,document.head.appendChild(l),t?new Promise(((e,t)=>{l.addEventListener("load",e),l.addEventListener("error",t)})):void 0}))).then((()=>e()))};var w=[{key:"home",name:"首页",path:"/",component:i.exports.lazy((()=>L((()=>import("./index.b10c6b92.js")),["assets/index.b10c6b92.js","assets/vendor.f41c3f05.js","assets/vendor.761616c2.css"])))},{key:"list",name:"代办事项",path:"/list",component:i.exports.lazy((()=>L((()=>import("./index.fd1a64fd.js")),["assets/index.fd1a64fd.js","assets/index.79d3c583.css","assets/vendor.f41c3f05.js","assets/vendor.761616c2.css"])))}];const A=()=>{const e=c(),[t,a]=i.exports.useState("");i.exports.useEffect((()=>{let t=d(w,(t=>t.path===e.location.pathname));-1===t&&(t=0),a(w[t].key)}));return p.createElement(u,{mode:"horizontal",theme:"dark",onClick:({key:e})=>{a(e)},selectedKeys:[t]},w.map((e=>p.createElement(u.Item,{key:e.key},p.createElement(m,{to:e.path},e.name)))))};var z={url:"https://github.com/minjs1cn/to-do-list",type:"github"};const D=f.div`
	text-align: center;
`;var R=()=>p.createElement(D,null,p.createElement(y.Link,{target:"_blank",href:z.url},z.type));const T=f(h)`
	min-height: 100%;
`,$=f(h.Content)`
	padding: 16px;
	background-color: #fff;
`,B=f(h.Footer)`
	padding-top: 8px;
	padding-bottom: 8px;
`;var J=()=>p.createElement(E,null,p.createElement(T,null,p.createElement(h.Header,null,p.createElement(A,null)),p.createElement($,null,p.createElement(i.exports.Suspense,{fallback:""},p.createElement(g,null,w.map((e=>p.createElement(b,{exact:!0,key:e.key,path:e.path,component:e.component})))))),p.createElement(B,null,p.createElement(R,null))));const N="state-todo",U={set(e){localStorage.setItem(N,JSON.stringify(e))},get:()=>JSON.parse(localStorage.getItem(N)||"[]")};var V,q;(q=V||(V={}))[q.All=-1]="All",q[q.UnCompleted=0]="UnCompleted",q[q.Completed=1]="Completed";const F=k({name:"todo",initialState:{list:U.get(),filter:-1},reducers:{add:(e,l)=>{var r,n;e.list.push((r=o({},l.payload),n={uuid:O(),status:0},t(r,a(n))))},update:(e,{payload:t})=>{let a=d(e.list,(e=>e.uuid===t.uuid));-1!==a&&(e.list[a]=o(o({},e.list[a]),t))},delete:(e,t)=>{let a=d(e.list,(e=>e.uuid===t.payload));-1!==a&&e.list.splice(a,1)},toggle:(e,t)=>{let a=d(e.list,(e=>e.uuid===t.payload));-1!==a&&(e.list[a].status=1===e.list[a].status?0:1)},pick:(e,t)=>{e.filter=t.payload}}}),H=v((e=>e.todo.list),(e=>e.todo.filter),((e,t)=>{switch(t){case 1:return e.filter((e=>1===e.status));case 0:return e.filter((e=>0===e.status));default:return e}})),K=v((e=>e.todo.list),((e,t)=>t),((e,t)=>{let a=e.filter((e=>e.uuid===t));return a.length?a[0]:null}));const M=x({reducer:{todo:F.reducer}});M.subscribe((()=>{console.log(M.getState()),U.set(M.getState().todo.list)}));const W=()=>S(),G=_;j.render(p.createElement(P,{store:M},p.createElement(J,null)),document.getElementById("app"));export{V as E,W as a,H as b,K as s,F as t,G as u};
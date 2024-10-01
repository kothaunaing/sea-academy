import{j as e,r,A as P,a as q,s as v,F as N,Q as D,d as F,b as w,c as H,e as Q,f as x}from"./index-bR4MaZOJ.js";import{g as m}from"./getImage-SzyEh5nT.js";import R from"./Error-SDQl8L6q.js";import{L as y}from"./Line-1I4Th3EB.js";import{L as U}from"./LoadingScreen-yCIU47i-.js";import{M as b}from"./EmptyComponent-mtutYQst.js";import{c as G}from"./createSvgIcon-3G1Z23-M.js";import{A as J}from"./ArrowBackSharp-5zmomMcQ.js";const K=G(e.jsx("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMoreSharp"),se=()=>{var p;const{userId:E,setHeaderTitle:I}=r.useContext(P),S=0,h=10,[d,L]=r.useState(h),[s,C]=r.useState({}),o=(p=s==null?void 0:s.results)==null?void 0:p.slice(S,d),g=`${s==null?void 0:s.testName}`,{resultId:c}=q(),[f,n]=r.useState(!0),[M,k]=r.useState(!1),[j,T]=r.useState(null),A=async()=>{try{n(!0);const t=H(w(F,"users",E),"history"),a=w(t,c),i=await Q(a);if(i.exists){const l={id:i.id,...i.data()};C(l),x(n)}else k(!0),x(n)}catch(t){T("Error fetching reviews: "+t.message),x(n)}};r.useEffect(()=>{A()},[c]),r.useEffect(()=>(v(),v()),[]);const $=()=>{L(d+h)},z=()=>{var t;if(d>((t=s==null?void 0:s.results)==null?void 0:t.length))return!0};return r.useEffect(()=>{I(g)}),f?e.jsx(U,{isLoading:f,text:"Loading reviews..."}):M?e.jsx(b,{text:"No reviews available"}):j?e.jsx(b,{text:j}):e.jsx("div",{className:"p-5",children:s?e.jsxs("div",{className:"grid gap-y-5",children:[e.jsx("div",{className:"font-medium text-lg",children:g}),o==null?void 0:o.map(t=>{const{id:a,question:i,isTrue:l,answer:u,userAnswer:B}=t;return l?e.jsxs("div",{className:"grid font-padauk gap-y-2",children:[e.jsxs("div",{className:"flex gap-x-3 items-center",children:[e.jsx("div",{className:"bg-green-500 h-9 w-9 text-white font-bold rounded-sm flex justify-center items-center ",children:a}),e.jsx("div",{className:"flex-1",children:i})]}),e.jsx("div",{children:e.jsxs("div",{className:"grid gap-y-1",children:[e.jsx("div",{className:"text-green-500 font-bold",children:"Correct (your answer)"}),e.jsxs("div",{className:"min-h-12  flex gap-x-3 p-2 border text-green-500 border-green-500 rounded-lg items-center shadow-md shadow-lime-200",children:[e.jsx("img",{className:"w-5 h-5",src:m("trueIcon")}),e.jsx("div",{children:u})]})]})}),e.jsx(y,{})]},`result-${a}`):e.jsxs("div",{className:"grid font-padauk gap-y-2",children:[e.jsxs("div",{className:"flex gap-x-3 items-center",children:[e.jsx("div",{className:"bg-red-500 h-9 w-9 text-white font-bold rounded-sm flex justify-center items-center ",children:a}),e.jsx("div",{className:"flex-1",children:i})]}),e.jsxs("div",{className:"grid gap-y-1",children:[e.jsxs("div",{className:"grid gap-y-1",children:[e.jsx("div",{className:"text-red-500 font-bold",children:"Incorrect (your answer)"}),e.jsxs("div",{className:"min-h-12 flex gap-x-3 p-2 border text-red-500 border-red-500 rounded-lg items-center shadow-md shadow-red-200",children:[e.jsx("img",{className:"w-5 h-5",src:m("falseIcon")}),e.jsx("div",{children:B})]})]}),e.jsxs("div",{className:"grid gap-y-1",children:[e.jsx("div",{className:"text-green-500 font-bold",children:"Correct"}),e.jsxs("div",{className:" min-h-12  flex gap-x-3 p-2 border text-green-500 shadow-md shadow-lime-200 border-green-500 rounded-lg items-center",children:[e.jsx("img",{className:"w-5 h-5",src:m("trueIcon")}),e.jsx("div",{children:u})]})]})]}),e.jsx(y,{})]},`result-${a}`)}),z()?"":e.jsx("div",{className:"flex justify-center",children:e.jsx(N,{size:"small",onClick:$,startIcon:e.jsx(K,{}),children:"See More"})}),e.jsx("div",{children:e.jsx(D,{to:`/app/history/${c}`,children:e.jsx(N,{size:"small",startIcon:e.jsx(J,{}),children:"Back to results"})})})]}):e.jsx(R,{text:"Unavailable"})})};export{se as default};

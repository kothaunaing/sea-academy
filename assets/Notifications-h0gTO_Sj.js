import{j as e,r as t,A as M,h as U,E as g,I as B,u as D,aG as z,c as A,d as H,S as T,U as R,aI as q,V as G,W as K,K as P,f as Q}from"./index-dSD7UM6z.js";import{p as V}from"./prettyDate-uNOGf4QX.js";import{g as W}from"./shortenText-S284lLsL.js";import{L as F}from"./LoadingScreen-BgP5KCQC.js";import{f as J}from"./fixTime-t8Fgsaat.js";import{M as I}from"./EmptyComponent-exm26pmt.js";import{S as L}from"./Skeleton-dIugF2Xi.js";import{C as O}from"./CircularProgress-VZGqxfrs.js";import{B as X}from"./Button-ZTLNkO5Z.js";import{T as Y}from"./Typography-GbCp5BvV.js";import"./ButtonBase-D-lMm-wW.js";const Z=()=>e.jsxs("div",{className:"flex gap-x-2 rounded-md p-2 items-center",children:[e.jsx("div",{children:e.jsx(L,{variant:"circular",width:40,height:40})}),e.jsxs("div",{className:"grid gap-y-2  flex-1 ",children:[e.jsx(L,{variant:"text",width:200}),e.jsx(L,{variant:"rectangular",height:55,width:"90%"})]})]}),me=()=>{const{setHeaderTitle:o,notiCount:j,setNotiCount:b}=t.useContext(M),x=8,[s,c]=t.useState([]),[d,N]=t.useState(null),[r,i]=t.useState(!0),[k,v]=t.useState(!1),[a,S]=t.useState(null),[h,y]=t.useState(0),[C,l]=t.useState(!0),m=U(),{mode:E}=m.palette,$=async()=>{i(!0);const p=A(H,"notifications");let f=T(p,q("timestamp","desc"),R(x));d&&(f=T(f,G(d)));try{const n=await K(f);if(P(p,b),n.empty)v(!0);else{const u=n.docs.map(w=>({id:w.id,...w.data()}));c([...s,...u]),N(n.docs[n.docs.length-1]),Q(i),y(h+1),u.length<x&&l(!1)}}catch(n){const u="Error fetching notifications: "+n.message;console.log(u),i(!1),S(u)}};return t.useEffect(()=>{$()},[]),t.useEffect(()=>{o("Notifications")},[]),r&&h===0?e.jsx(F,{isLoading:r,text:"Loading notifications..."}):k?e.jsx(I,{text:"No notifications available"}):a?e.jsx(I,{text:a}):e.jsxs(g,{className:"m-2",children:[e.jsxs(g,{className:`border overflow-hidden shadow-md rounded-md ${E==="dark"?"border-slate-700":"border-slate-200"}`,children:[s.map((p,f)=>e.jsx(_,{mode:E,length:s.length,notification:p,index:f},p.id)),r&&e.jsx(g,{className:"flex justify-center",children:e.jsxs(g,{children:[e.jsx("div",{className:"mb-2",children:"Loading..."}),e.jsx(O,{})]})})]}),C?e.jsx("div",{className:"flex justify-center mt-1 mb-2 ",children:e.jsx(X,{size:"small",onClick:$,children:"load more"})}):""]})},_=B.memo(({notification:o,index:j,length:b,mode:x})=>{let s;const{type:c,description:d,timestamp:N,testName:r,comment:i}=o,k=`${c[0]} ${c[1]}`,{users:v}=t.useContext(M),[a,S]=t.useState(null),[h,y]=t.useState(!0),C=D();switch(z(o.uid,v,S,y),k){case"like post":s="liked a post";break;case"like test":s="liked a test";break;case"comment post":s="commented on a post";break;case"comment test":s="commented on a test";break;case"added post":s="added a post";break;case"added test":s="added a test";break;case"took test":s="took a test";break}return h?e.jsx(Z,{}):e.jsxs("div",{onClick:()=>{if(o!=null&&o.postId){let l,m;c[1]==="post"?(l="sp",m="posts"):(l="st",m="tests"),C(`/app/${m}/${l}/${o.postId}`)}},className:`cursor-pointer flex items-center border-t ${j===0&&"border-t-0"} gap-x-2 p-2 ${j===b-1&&"border-b"} ${x==="dark"?"border-slate-700":"border-slate-200"}`,children:[e.jsx("div",{children:e.jsx("img",{className:"size-10 object-cover rounded-full object-center bg-cover",src:a==null?void 0:a.image})}),e.jsxs("div",{children:[e.jsxs("p",{children:[e.jsx("b",{children:a?a==null?void 0:a.name:"Unknown User"})," ",s]}),d&&e.jsx("p",{children:W(d,30)}),r&&e.jsx("p",{children:r}),i&&e.jsx("p",{children:i}),e.jsx(Y,{variant:"caption",children:V(J(N))})]})]})});export{me as default};

import{j as s,h as z,u as T,r as a,A as $,c as k,b as r,d as C,E as L,S as B,aQ as F,W as O,aC as R,aS as D,aF as E,aT as q}from"./index-14pqm9y1.js";import{n as A}from"./notify-fX9PdEbD.js";import{B as j}from"./Button-dux8T5OH.js";import{T as H}from"./Tooltip-cTALVPIn.js";import{I as N}from"./IconButton-x0ar69Y7.js";import{F as V,a as M}from"./FavoriteBorder-zXnu4wal.js";import{c as P}from"./createSvgIcon-BoAk_7pD.js";const Q=P(s.jsx("path",{d:"M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 14H6l-2 2V4h16z"}),"ChatBubbleOutline"),ts=({post:l,collectionName:c})=>{const{id:o}=l;z().palette;const m=T(),[p,g]=a.useState(null),[u,v]=a.useState(null),{userId:x}=a.useContext($),[y,W]=a.useState(!1),[I,G]=a.useState(!1),t=c==="posts";k(r(C,c,o),"comments");const w=k(r(C,c,o),"likes"),[d,f]=a.useState(!1),h=async(e,n)=>{const i=k(r(C,c,o),e);console.log("Fetching counts...");const b=await q(i);n(b.data().count)};a.useEffect(()=>{(async()=>{await h("likes",g),await h("comments",v)})()},[]),a.useEffect(()=>{(async()=>{const n=B(w,F("uid","==",x)),i=await O(n);f(!i.empty)})()},[]);const S=async()=>{try{const e=async()=>{await h("likes",g)},n=r(w,x),i={uid:x,timestamp:R()};d?(f(!1),await E(n),e()):(f(!0),await D(n,i),e(),A(["like",t?"post":"test"],t?"description":"testName",t?l.description:l.name,null,o))}catch(e){console.log(e.message)}};return s.jsxs("div",{className:"mt-2",children:[s.jsxs(L,{className:"transition-all mb-1 flex justify-between pl-2 pr-2",children:[s.jsx(j,{size:"small",sx:{textDecoration:"underline",textTransform:"capitalize"},variant:y?"outlined":"text",onClick:()=>{m(`/app/${t?"posts":"tests"}/${t?"sp":"st"}/${o}`)},children:s.jsxs("span",{children:[p||0," ",p>1?"Likes":"Like"]})}),s.jsxs(j,{size:"small",variant:I?"outlined":"text",sx:{textDecoration:"underline",textTransform:"capitalize"},onClick:()=>{m(`/app/${t?"posts":"tests"}/${t?"sp":"st"}/${o}`)},children:[u||0," ",u>1?"Comments":"Comment"]})]}),s.jsxs(L,{className:"p-2 shadow-lg border-t pt-2 flex gap-x-2",children:[s.jsx(H,{title:d?"Unlike":"Like",arrow:!0,children:s.jsx(N,{color:"error",size:"small",sx:{textTransform:"capitalize"},onClick:S,children:d?s.jsx(V,{}):s.jsx(M,{})})}),s.jsx(j,{size:"small",sx:{textTransform:"capitalize"},onClick:()=>{m(`/app/${t?"posts":"tests"}/${t?"sp":"st"}/${o}`)},startIcon:s.jsx(Q,{}),children:"Comment"})]})]})};export{ts as R};
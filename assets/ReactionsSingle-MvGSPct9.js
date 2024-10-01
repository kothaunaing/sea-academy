import{j as e,K as P,r as a,A as z,u as R,aJ as A,G as W,h as B,c as I,b as L,d as E,E as b,F as $,aL as Y,aW as Z,V as D,aT as _,Y as q,aF as F,aV as ee,aI as Q,W as te,aM as G,X as se,aN as ie,aE as ae,az as ne}from"./index-bR4MaZOJ.js";import{M as oe}from"./MoreOption-mSkIibas.js";import{p as O}from"./prettyDateChat-PSq7xrmC.js";import{P as H}from"./ProfilePicture-NkVAKawu.js";import{s as J}from"./sortByDateNewer-X-Bb2bKS.js";import{n as K}from"./notify-kdn7sAoT.js";import{f as V}from"./fixTime-t8Fgsaat.js";import{S as re}from"./SkeletonUser-pwlHAotJ.js";import{T as N}from"./Tooltip-jKN6Sqwz.js";import{S as U}from"./Skeleton-LRfmB9RD.js";import{D as ce}from"./DeleteSharp-n4xHhV2L.js";import{I as M}from"./IconButton-zFeYIEAO.js";import{F as le,a as me}from"./FavoriteBorder-gZEnJaMG.js";import{S as de}from"./Stack-WYlN-LHL.js";import{T as ue}from"./TextField-lZjHCUEq.js";import{C as pe}from"./CloseSharp-8hnKeMD4.js";import{c as xe}from"./createSvgIcon-3G1Z23-M.js";import{E as fe}from"./EditSharp-tls7Gpwf.js";const he=xe(e.jsx("path",{d:"M2.01 21 23 12 2.01 3 2 10l15 2-15 2z"}),"SendSharp"),Oe=({post:n,collectionName:c})=>{const{id:s}=n;B().palette,R();const[d,o]=a.useState(null),[t,k]=a.useState(null),{userId:u}=a.useContext(z),[f,p]=a.useState(!1),[g,C]=a.useState(!0),h=c==="posts",l=I(L(E,c,s),"comments"),r=I(L(E,c,s),"likes"),[w,y]=a.useState(!1),S=async(i,m)=>{const x=I(L(E,c,s),i);console.log("Fetching counts...");const v=await Z(x);m(v.data().count)};a.useEffect(()=>{(async()=>{await S("likes",o),await S("comments",k)})()},[]),a.useEffect(()=>{(async()=>{const m=D(r,_("uid","==",u)),x=await q(m);y(!x.empty)})()},[]);const T=async()=>{try{const i=async()=>{await S("likes",o)},m=L(r,u),x={uid:u,timestamp:F()};w?(y(!1),await Q(m),i()):(y(!0),await ee(m,x),i(),K(["like",h?"post":"test"],h?"description":"testName",h?n.description:n.name,null,s))}catch(i){console.log(i.message)}};return e.jsxs("div",{className:"mt-2",children:[e.jsxs(b,{className:"transition-all mb-1 flex justify-between pl-2 pr-2",children:[e.jsx($,{size:"small",sx:{textDecoration:"underline",textTransform:"capitalize"},variant:f?"outlined":"text",onClick:()=>{p(!f),C(!g)},children:e.jsxs("span",{children:[d||0," ",d>1?"Likes":"Like"]})}),e.jsxs($,{size:"small",sx:{textDecoration:"underline",textTransform:"capitalize"},variant:g?"outlined":"text",onClick:()=>{p(!f),C(!g)},children:[t||0," ",t>1?"Comments":"Comment"]})]}),e.jsx(b,{className:"p-2 shadow-lg border-t border-b pt-2 flex gap-x-2",children:e.jsx(N,{title:w?"Unlike":"Like",arrow:!0,children:e.jsx(M,{color:"error",size:"small",sx:{textTransform:"capitalize"},onClick:T,children:w?e.jsx(le,{}):e.jsx(me,{})})})}),f&&e.jsx(je,{isLikesOpen:f,setIsLikesOpen:p,likesRef:r,likeCounts:d}),g&&e.jsx(Ce,{isPost:h,post:n,commentsRef:l,collectionName:c,commentCounts:t,setCommentCounts:k,getCounts:S,isCommentsOpen:g,setIsCommentsOpen:C})]})},je=({likesRef:n,likeCounts:c})=>{const[j,d]=a.useState([]),[o,t]=a.useState(null),[k,u]=a.useState(!0),[f,p]=a.useState(!0),[g,C]=a.useState(!1);B();const h=async()=>{let l=D(n,G("timestamp","desc"),te(8));o&&(l=D(l,se(o)));const r=await q(l);if(r.empty)C(!0),d([]);else{const w=r.docs.map(y=>({id:y.id,...y.data()}));d([...j,...w]),C(!1),w.length<8&&p(!1)}u(!1),t(r.docs[r.docs.length-1])};return a.useEffect(()=>{h()},[]),e.jsxs(b,{sx:{width:{xs:"100%"}},className:"",bgcolor:"background.default",children:[g&&e.jsx("div",{className:"flex items-center justify-center ",children:"No likes yet..."}),k?e.jsx("div",{className:"flex justify-center p-1",children:e.jsx(Y,{})}):e.jsxs("div",{className:"m-2 grid gap-y-2 ",children:[j.sort((l,r)=>J(l,r,"timestamp","newer")).map((l,r)=>e.jsx(ge,{like:l},`user-${l.uid}-${r}`)),e.jsx(de,{direction:"row",justifyContent:"center",children:f?e.jsx($,{size:"small",onClick:h,children:"Load More"}):""})]})]})},ge=P.memo(({like:n})=>{const{users:c}=a.useContext(z),[s,j]=a.useState(null),[d,o]=a.useState(),t=R();return A(n.uid,c,j,o),d?e.jsx(re,{}):e.jsxs("div",{className:"flex gap-x-2 items-center",children:[e.jsx(N,{title:s?`View ${s&&s.name}'s profile`:"Deleted User",arrow:!0,placement:"top",children:e.jsx("div",{className:"cursor-pointer",onClick:()=>t(`/app/profile/${s==null?void 0:s.uid}`),children:e.jsx(H,{image:s?s.image:"images/sea-logo.jpg",name:s&&s.name,size:"size-9"})})}),e.jsx(N,{title:s?`View ${s&&s.name}'s profile`:"Deleted User",arrow:!0,placement:"top",children:e.jsx(W,{onClick:()=>t(`/app/profile/${s==null?void 0:s.uid}`),variant:"h6",fontSize:"0.9rem",sx:{cursor:"pointer"},children:s?s.name:"Unknown User"})})]})}),Ce=({post:n,isPost:c,commentsRef:s,setCommentCounts:j,getCounts:d})=>{const[o,t]=a.useState(""),[k,u]=a.useState([]),[f,p]=a.useState(!0),[g,C]=a.useState(!1),{userId:h}=a.useContext(z),[l,r]=a.useState(null);B();const w=()=>{const i=D(s,G("timestamp","desc"));return p(!0),ie(i,x=>{d("comments",j),x.empty?(p(!1),C(!0),u([])):(u(x.docs.map(v=>({id:v.id,...v.data()})).sort((v,X)=>J(v,X,"timestamp"))),C(!1),p(!1))})};a.useEffect(()=>{const i=w();return()=>{i&&i()}},[]);const y=async()=>{if(o.trim()){const i={uid:h,text:o.trim(),timestamp:F()};await ae(s,i),t(""),K(["comment",c?"post":"test"],c?"description":"testName",c?n.description:n.name,o.trim(),n.id)}},S=async()=>{const i=L(s,l);if(o.trim()){const m={text:o.trim(),editedTime:F()};await ne(i,m),t(""),r(null)}},T=async i=>{const m=L(s,i);try{await Q(m)}catch(x){console.log(x.message)}};return e.jsxs(b,{sx:{width:{xs:"100%"}},bgcolor:"background.default",children:[g&&e.jsx("div",{className:"flex p-2 items-center justify-center ",children:"No comments yet..."}),e.jsx("div",{className:"grid gap-y-2 m-2",children:k.map(i=>{const m=i.uid===h,x=m&&{text:"Edit",icon:e.jsx(fe,{}),onClick:()=>{r(i.id),t(i.text)}};return e.jsx(ke,{comment:i,editOption:x,yourComment:m,deleteComment:T},`${i.uid}-${i.id}`)})}),e.jsxs("div",{className:"mt-2 flex  gap-x-1 m-2",children:[e.jsx(ue,{fullWidth:!0,size:"small",onChange:i=>t(i.target.value),value:o,placeholder:"Write a comment..."}),e.jsxs("div",{className:"flex gap-x-1",children:[l&&e.jsx(M,{onClick:()=>{r(null),t("")},children:e.jsx(pe,{})}),e.jsx(M,{onClick:()=>{o.trim()&&(l?S():y())},children:e.jsx(he,{})})]})]})]})},ke=P.memo(({comment:n,editOption:c,yourComment:s,deleteComment:j})=>{const{users:d,userData:o}=a.useContext(z),[t,k]=a.useState(null),[u,f]=a.useState(),p=R();return A(n.uid,d,k,f),e.jsxs("div",{className:"flex justify-between items-start",children:[e.jsxs("div",{className:"flex gap-x-1",children:[e.jsx("div",{children:u?e.jsx(U,{variant:"circular",height:40,width:40}):e.jsx(N,{title:t?`View ${t&&t.name}'s profile`:"Deleted User",arrow:!0,placement:"top",children:e.jsx("div",{onClick:()=>p(`/app/profile/${t==null?void 0:t.uid}`),className:"cursor-pointer",children:e.jsx(H,{image:t&&t.image,name:t&&t.name,size:"size-9"})})})}),e.jsxs("div",{className:"max-w-[250px]",children:[e.jsxs("div",{className:"p-2 border  shadow-md border-slate-200 rounded-lg",children:[u?e.jsx(U,{height:40,width:120}):e.jsx(N,{title:t?`View ${t&&t.name}'s profile`:"Deleted User",arrow:!0,placement:"top",children:e.jsx(W,{onClick:()=>p(`/app/profile/${t==null?void 0:t.uid}`),sx:{cursor:"pointer"},variant:"h6",fontSize:"0.9rem",children:t?t.name:"Unknown User"})}),u?e.jsx(U,{sx:{mt:-1},height:60,width:200}):e.jsx("div",{className:"text-left",children:n.text})]}),e.jsx("div",{className:"text-sm text-left mt-1",children:n!=null&&n.editedTime?e.jsxs("span",{children:["edited ",O(V(n.editedTime))]}):e.jsx("span",{children:O(V(n.timestamp))})})]})]}),s||o!=null&&o.isAdmin?e.jsx(oe,{options:[c,{text:"Delete",icon:e.jsx(ce,{}),onClick:()=>j(n.id)}],isComment:!0}):""]})});export{Oe as R};

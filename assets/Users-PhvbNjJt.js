import{j as e,r as t,A,c as b,s as m,u as S,aE as I,d as c,b as P,aw as C}from"./index-14pqm9y1.js";import{B as E}from"./BackToAdmin-BXJU8u_3.js";import{P as y}from"./ProfilePicture-N-yMezIS.js";import{s as B}from"./sortByDateNewer-X-Bb2bKS.js";import{p as D}from"./prettyDateChat-PSq7xrmC.js";import{f as L}from"./fixTime-t8Fgsaat.js";import{L as U}from"./LoadingScreen-EYXdXKre.js";import{M as l}from"./EmptyComponent-LbBV4xaA.js";import{I as T}from"./IconButton-x0ar69Y7.js";import{V as k}from"./VisibilitySharp-_ywbSJk6.js";import{B as M}from"./Button-dux8T5OH.js";import{c as R}from"./createSvgIcon-BoAk_7pD.js";import"./Tooltip-cTALVPIn.js";import"./Portal-YB56xSUH.js";import"./useControlled-qBYEK2eV.js";import"./ButtonBase-ryrwXNwG.js";import"./ArrowBackSharp-LySXSozB.js";import"./Typography-F2i8tb5R.js";const V=R([e.jsx("path",{d:"M17 11c.34 0 .67.04 1 .09V6.27L10.5 3 3 6.27v4.91c0 4.54 3.2 8.79 7.5 9.82.55-.13 1.08-.32 1.6-.55-.69-.98-1.1-2.17-1.1-3.45 0-3.31 2.69-6 6-6"},"0"),e.jsx("path",{d:"M17 13c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4m0 1.38c.62 0 1.12.51 1.12 1.12s-.51 1.12-1.12 1.12-1.12-.51-1.12-1.12.5-1.12 1.12-1.12m0 5.37c-.93 0-1.74-.46-2.24-1.17.05-.72 1.51-1.08 2.24-1.08s2.19.36 2.24 1.08c-.5.71-1.31 1.17-2.24 1.17"},"1")],"AdminPanelSettings"),$=({password:i})=>{const[a,o]=t.useState(!1);return e.jsxs("div",{children:["Password: ",a?i:"*********"," ",e.jsx("span",{onClick:()=>o(!a),className:"cursor-pointer text-blue-500 underline",children:a?"hide":"show"})]})},as=()=>{const{users:i,setHeaderTitle:a,userId:o,setUsers:x,setUserId:p}=t.useContext(A),f=b(c,"users"),[n,h]=t.useState(!0),[j,u]=t.useState(!1),[d,v]=t.useState(null);t.useEffect(()=>(m(),m()),[]),t.useEffect(()=>{a("Admin - Users")},[]);const g=S(),w=s=>{p(s.uid),g("/app")},N=async s=>{const r=P(c,"users",s.uid);await C(r,{isAdmin:!s.isAdmin})};return I(f,[],x,h,u,!0,v),n?e.jsx(U,{isLoading:n,text:"Loading users..."}):j?e.jsx(l,{text:"No users available"}):d?e.jsx(l,{text:d}):e.jsxs("div",{className:"mt-2 p-5",children:[e.jsx(E,{text:"Users",length:i==null?void 0:i.length}),e.jsx("div",{className:"mt-2 overflow-hidden grid border border-slate-200 shadow-md rounded-md",children:i.sort((s,r)=>B(s,r,"createdAt","older")).map((s,r)=>e.jsxs("div",{className:`  ${r===0&&"border-t-0"} border-t p-2  }`,children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsxs("div",{className:"flex w-5/6 gap-x-2 items-center",children:[e.jsx(y,{image:s.image,name:s.name}),e.jsxs("div",{className:"flex-1",children:[e.jsxs("div",{className:"font-medium",children:[s.name," ",e.jsxs("span",{className:`${s!=null&&s.isAdmin?"text-blue-500":"text-white"}`,children:["(",s!=null&&s.isAdmin?"admin":"user",")"," ",o===s.uid?"(You)":""]})]}),e.jsx("div",{className:"text-md ",children:s.email}),e.jsxs("div",{className:"text-md",children:["Created: ",D(L(s.createdAt))]}),e.jsxs("div",{className:"text-md font-medium text-lime-600",children:["UID : ",s.uid]}),e.jsx($,{password:s.password})]})]}),o!==s.uid&&e.jsx(T,{onClick:()=>w(s),children:e.jsx(k,{})})]}),o!==s.uid&&e.jsx(M,{onClick:()=>N(s),size:"small",startIcon:e.jsx(V,{}),children:s.isAdmin?"Remove from admin":"Set as admin"})]},s.uid))})]})};export{as as default};

import{K as P,r,A as I,h as D,u as T,j as e,aJ as R,E as l,G as k,c as $,S as F,F as V,d as z,V as b,W as B,aM as U,X as G,Y as O,f as H}from"./index-bR4MaZOJ.js";import{s as Y}from"./sortByDateNewer-X-Bb2bKS.js";import{L as q}from"./LoadingScreen-yCIU47i-.js";import{I as J}from"./ImageViewer-gTpVmIgl.js";import{p as K}from"./prettyDate-uNOGf4QX.js";import{f as Q}from"./fixTime-t8Fgsaat.js";import{I as W,F as X,L as Z}from"./Links-TTbXU5yi.js";import{R as _}from"./Reactions-mhmswGQK.js";import{S as ee}from"./SkeletonPost-6zh13vZe.js";import{M as se}from"./MoreOption-mSkIibas.js";import{E as te}from"./EditSharp-tls7Gpwf.js";import{T as N}from"./Tooltip-jKN6Sqwz.js";import{L as re}from"./LinkSharp-MvLMBxnF.js";import{G as ie}from"./Grid-2woZ9Acj.js";import{M as v}from"./EmptyComponent-mtutYQst.js";import{F as oe}from"./FabSearch-WOT9gh5L.js";import"./Dialog-pOjzfPCd.js";import"./Modal-AMyV4m0Z.js";import"./Portal-vj8E7tuN.js";import"./Stack-WYlN-LHL.js";import"./IconButton-zFeYIEAO.js";import"./CloseSharp-8hnKeMD4.js";import"./createSvgIcon-3G1Z23-M.js";import"./notify-kdn7sAoT.js";import"./FavoriteBorder-gZEnJaMG.js";import"./Skeleton-LRfmB9RD.js";import"./OtherActions-7net_NKU.js";import"./getImage-SzyEh5nT.js";import"./useControlled-Tg6WpoLH.js";import"./Fab-Obg5aW--.js";import"./SearchSharp-8pV05sN5.js";const ae=P.memo(({post:s,setViewingImage:d})=>{var m,c;const{users:f,openSnackbar:x,userData:a}=r.useContext(I),[t,g]=r.useState(null),[h,u]=r.useState(!0);D().palette;const n=T(),j=a!=null&&a.isAdmin?{text:"Edit Post",icon:e.jsx(te,{}),onClick:()=>{n("/app/admin/posts/")}}:null;return R(s.uid,f,g,u,[],1200),h?e.jsx(ee,{}):e.jsxs(l,{bgcolor:"background.default",color:"text.primary",className:"border border-slate-300 shadow-lg rounded-md",sx:{width:"full"},children:[e.jsxs(l,{className:"top-section flex justify-between  mb-2 p-2",children:[e.jsxs(l,{className:"flex gap-x-2",children:[e.jsx(N,{title:`View ${t&&t.name}'s profile`,arrow:!0,placement:"top",children:e.jsx("div",{className:"cursor-pointer",onClick:()=>n(`/app/profile/${t.uid}`),children:e.jsx("img",{className:"size-10 rounded-full shadow-md object-cover cursor-pointer",src:t?t.image:"images/sea-logo.jpg"})})}),e.jsxs(l,{children:[e.jsx(N,{title:`View ${t&&t.name}'s profile`,arrow:!0,placement:"top",children:e.jsx(k,{onClick:()=>n(`/app/profile/${t.uid}`),variant:"h6",fontSize:"1rem",sx:{cursor:"pointer"},children:t?t.name:"Unknown User"})}),e.jsx(k,{variant:"caption",children:K(Q(s.time))})]})]}),e.jsx(l,{children:e.jsx(se,{options:[{text:"Copy link",icon:e.jsx(re,{}),onClick:()=>{const S=`${location.origin}/#/app/posts/sp/${s.id}`;navigator.clipboard.writeText(S),x("Link copied successfully")}},j],isComment:!0})})]}),(s==null?void 0:s.description)&&e.jsx(k,{p:1,children:s.description}),s.images.length!==0?e.jsx(ie,{container:!0,spacing:1,className:" p-0",sx:{p:1},children:e.jsx(W,{post:s,setViewingImage:d})}):"",s.files&&((m=s==null?void 0:s.files)==null?void 0:m.length)!==0&&e.jsx(X,{files:s.files}),(s==null?void 0:s.links)&&((c=s==null?void 0:s.links)==null?void 0:c.length)!==0&&e.jsx(Z,{links:s.links}),e.jsx(_,{post:s,collectionName:"posts"})]})}),Ve=()=>{const{setHeaderTitle:s}=r.useContext(I),[d,f]=r.useState([]);T();const x=$(z,"posts"),[a,t]=r.useState(!0),[g,h]=r.useState(!1),[u,y]=r.useState(null),[n,j]=r.useState(0),[m,c]=r.useState(null),[S,A]=r.useState(!0),w=6,[L,M]=r.useState(null);r.useEffect(()=>{s("STAR EDUCATION ACADEMY")},[]);const C=async()=>{t(!0);let i=b(x,U("time","desc"),B(w));L&&(i=b(i,G(L)));try{const o=await O(i);if(o.empty)h(!0);else{const p=o.docs.map(E=>({id:E.id,...E.data()}));f([...d,...p]),M(o.docs[o.docs.length-1]),H(t),j(n+1),p.length<w&&A(!1)}}catch(o){const p="Error fetching posts: "+o.message;console.log(p),t(!1),y(p)}};return r.useEffect(()=>{C()},[]),F("posts-page"),a&&n===0?e.jsx(q,{isLoading:a,text:"Loading posts..."}):g?e.jsx(v,{text:"No posts available"}):u?e.jsx(v,{text:u}):e.jsxs(l,{children:[e.jsx(oe,{}),e.jsxs("div",{className:"grid gap-y-6 m-2",children:[m&&e.jsx(J,{image:m,setViewingImage:c,postImage:!0}),d.sort((i,o)=>Y(i,o,"time","newer")).map(i=>e.jsx(ae,{setViewingImage:c,post:i},i.id))]}),S?e.jsx("div",{className:"flex justify-center mt-1 mb-2 ",children:e.jsx(V,{size:"small",onClick:C,children:"load more"})}):""]})};export{Ve as default};

import{r as l,h as ct,_ as Z,i as Rt,j as r,k as w,T as Xt,l as Ot,m as bt,n as Vt,o as Wt,p as ht,q as Dt,P as Ft,t as at,v as Ht,w as _t,x as nt,y as Ut,z as zt,B as gt,C as Tt,D as ut,A as it,u as Nt,R as Gt,E as _,F as qt,G as Qt,H as Jt,I as Et,J as Kt,d as Pt,b as Zt,c as Ct,K as kt,L as te,M as ee}from"./index-dSD7UM6z.js";import{g as re}from"./shortenText-S284lLsL.js";import{P as ne}from"./ProfilePicture-M_ZZBSpq.js";import{C as se}from"./ConfirmDelete-FnIhKjnq.js";import{B as st}from"./Button-ZTLNkO5Z.js";import{T as jt}from"./Typography-GbCp5BvV.js";import{c as G}from"./createSvgIcon-5tUNT3Hd.js";import{L as oe}from"./LogoutSharp-PyAdedyY.js";import{o as K,M as ae}from"./Modal-40Myj6Vm.js";import{d as ie}from"./debounce-gOEKrWSg.js";import{T as Lt}from"./Tooltip-pmR5sMk3.js";import{I as Bt}from"./IconButton-M8OEfqkq.js";import{C as ce}from"./CloseSharp-rElFupoQ.js";import{S as le}from"./Stack-4mDqqL4m.js";import{H as ue}from"./HomeSharp-A4-0BGjU.js";import{Q as pe}from"./QuizSharp-ul_lxJED.js";import{H as de}from"./HelpSharp-KnuRbDOm.js";import{A as he,T as fe}from"./Toolbar-VuV1sb9o.js";import{G as wt}from"./Grid-GwN7kgyx.js";import"./Dialog-mGbZrOYD.js";import"./Portal-nV2JPNiI.js";import"./ButtonBase-D-lMm-wW.js";import"./useControlled-ajujHaEs.js";const me=["addEndListener","appear","children","container","direction","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function xe(e,t,o){const n=t.getBoundingClientRect(),a=o&&o.getBoundingClientRect(),d=K(t);let c;if(t.fakeTransform)c=t.fakeTransform;else{const m=d.getComputedStyle(t);c=m.getPropertyValue("-webkit-transform")||m.getPropertyValue("transform")}let f=0,x=0;if(c&&c!=="none"&&typeof c=="string"){const m=c.split("(")[1].split(")")[0].split(",");f=parseInt(m[4],10),x=parseInt(m[5],10)}return e==="left"?a?`translateX(${a.right+f-n.left}px)`:`translateX(${d.innerWidth+f-n.left}px)`:e==="right"?a?`translateX(-${n.right-a.left-f}px)`:`translateX(-${n.left+n.width-f}px)`:e==="up"?a?`translateY(${a.bottom+x-n.top}px)`:`translateY(${d.innerHeight+x-n.top}px)`:a?`translateY(-${n.top-a.top+n.height-x}px)`:`translateY(-${n.top+n.height-x}px)`}function ge(e){return typeof e=="function"?e():e}function pt(e,t,o){const n=ge(o),a=xe(e,t,n);a&&(t.style.webkitTransform=a,t.style.transform=a)}const we=l.forwardRef(function(t,o){const n=ct(),a={enter:n.transitions.easing.easeOut,exit:n.transitions.easing.sharp},d={enter:n.transitions.duration.enteringScreen,exit:n.transitions.duration.leavingScreen},{addEndListener:c,appear:f=!0,children:x,container:m,direction:u="down",easing:y=a,in:b,onEnter:R,onEntered:F,onEntering:H,onExit:B,onExited:g,onExiting:I,style:E,timeout:C=d,TransitionComponent:$=Xt}=t,h=Z(t,me),j=l.useRef(null),tt=Rt(x.ref,j,o),L=p=>v=>{p&&(v===void 0?p(j.current):p(j.current,v))},z=L((p,v)=>{pt(u,p,m),Ot(p),R&&R(p,v)}),s=L((p,v)=>{const et=bt({timeout:C,style:E,easing:y},{mode:"enter"});p.style.webkitTransition=n.transitions.create("-webkit-transform",w({},et)),p.style.transition=n.transitions.create("transform",w({},et)),p.style.webkitTransform="none",p.style.transform="none",H&&H(p,v)}),V=L(F),W=L(I),T=L(p=>{const v=bt({timeout:C,style:E,easing:y},{mode:"exit"});p.style.webkitTransition=n.transitions.create("-webkit-transform",v),p.style.transition=n.transitions.create("transform",v),pt(u,p,m),B&&B(p)}),ft=L(p=>{p.style.webkitTransition="",p.style.transition="",g&&g(p)}),q=p=>{c&&c(j.current,p)},Q=l.useCallback(()=>{j.current&&pt(u,j.current,m)},[u,m]);return l.useEffect(()=>{if(b||u==="down"||u==="right")return;const p=ie(()=>{j.current&&pt(u,j.current,m)}),v=K(j.current);return v.addEventListener("resize",p),()=>{p.clear(),v.removeEventListener("resize",p)}},[u,b,m]),l.useEffect(()=>{b||Q()},[b,Q]),r.jsx($,w({nodeRef:j,onEnter:z,onEntered:V,onEntering:s,onExit:T,onExited:ft,onExiting:W,addEndListener:q,appear:f,in:b,timeout:C},h,{children:(p,v)=>l.cloneElement(x,w({ref:tt,style:w({visibility:p==="exited"&&!b?"hidden":void 0},E,x.props.style)},v))}))}),It=we;function ye(e){return Vt("MuiDrawer",e)}Wt("MuiDrawer",["root","docked","paper","paperAnchorLeft","paperAnchorRight","paperAnchorTop","paperAnchorBottom","paperAnchorDockedLeft","paperAnchorDockedRight","paperAnchorDockedTop","paperAnchorDockedBottom","modal"]);const ve=["BackdropProps"],Se=["anchor","BackdropProps","children","className","elevation","hideBackdrop","ModalProps","onClose","open","PaperProps","SlideProps","TransitionComponent","transitionDuration","variant"],$t=(e,t)=>{const{ownerState:o}=e;return[t.root,(o.variant==="permanent"||o.variant==="persistent")&&t.docked,t.modal]},be=e=>{const{classes:t,anchor:o,variant:n}=e,a={root:["root"],docked:[(n==="permanent"||n==="persistent")&&"docked"],modal:["modal"],paper:["paper",`paperAnchor${at(o)}`,n!=="temporary"&&`paperAnchorDocked${at(o)}`]};return Ut(a,ye,t)},je=ht(ae,{name:"MuiDrawer",slot:"Root",overridesResolver:$t})(({theme:e})=>({zIndex:(e.vars||e).zIndex.drawer})),At=ht("div",{shouldForwardProp:Dt,name:"MuiDrawer",slot:"Docked",skipVariantsResolver:!1,overridesResolver:$t})({flex:"0 0 auto"}),Te=ht(Ft,{name:"MuiDrawer",slot:"Paper",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.paper,t[`paperAnchor${at(o.anchor)}`],o.variant!=="temporary"&&t[`paperAnchorDocked${at(o.anchor)}`]]}})(({theme:e,ownerState:t})=>w({overflowY:"auto",display:"flex",flexDirection:"column",height:"100%",flex:"1 0 auto",zIndex:(e.vars||e).zIndex.drawer,WebkitOverflowScrolling:"touch",position:"fixed",top:0,outline:0},t.anchor==="left"&&{left:0},t.anchor==="top"&&{top:0,left:0,right:0,height:"auto",maxHeight:"100%"},t.anchor==="right"&&{right:0},t.anchor==="bottom"&&{top:"auto",left:0,bottom:0,right:0,height:"auto",maxHeight:"100%"},t.anchor==="left"&&t.variant!=="temporary"&&{borderRight:`1px solid ${(e.vars||e).palette.divider}`},t.anchor==="top"&&t.variant!=="temporary"&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`},t.anchor==="right"&&t.variant!=="temporary"&&{borderLeft:`1px solid ${(e.vars||e).palette.divider}`},t.anchor==="bottom"&&t.variant!=="temporary"&&{borderTop:`1px solid ${(e.vars||e).palette.divider}`})),Yt={left:"right",right:"left",top:"down",bottom:"up"};function U(e){return["left","right"].indexOf(e)!==-1}function ot({direction:e},t){return e==="rtl"&&U(t)?Yt[t]:t}const Pe=l.forwardRef(function(t,o){const n=Ht({props:t,name:"MuiDrawer"}),a=ct(),d=_t(),c={enter:a.transitions.duration.enteringScreen,exit:a.transitions.duration.leavingScreen},{anchor:f="left",BackdropProps:x,children:m,className:u,elevation:y=16,hideBackdrop:b=!1,ModalProps:{BackdropProps:R}={},onClose:F,open:H=!1,PaperProps:B={},SlideProps:g,TransitionComponent:I=It,transitionDuration:E=c,variant:C="temporary"}=n,$=Z(n.ModalProps,ve),h=Z(n,Se),j=l.useRef(!1);l.useEffect(()=>{j.current=!0},[]);const tt=ot({direction:d?"rtl":"ltr"},f),z=w({},n,{anchor:f,elevation:y,open:H,variant:C},h),s=be(z),V=r.jsx(Te,w({elevation:C==="temporary"?y:0,square:!0},B,{className:nt(s.paper,B.className),ownerState:z,children:m}));if(C==="permanent")return r.jsx(At,w({className:nt(s.root,s.docked,u),ownerState:z,ref:o},h,{children:V}));const W=r.jsx(I,w({in:H,direction:Yt[tt],timeout:E,appear:j.current},g,{children:V}));return C==="persistent"?r.jsx(At,w({className:nt(s.root,s.docked,u),ownerState:z,ref:o},h,{children:W})):r.jsx(je,w({BackdropProps:w({},x,R,{transitionDuration:E}),className:nt(s.root,s.modal,u),open:H,ownerState:z,onClose:F,hideBackdrop:b,ref:o},h,$,{children:W}))}),Ce=Pe;function ke(e){const{children:t,defer:o=!1,fallback:n=null}=e,[a,d]=l.useState(!1);return zt(()=>{o||d(!0)},[o]),l.useEffect(()=>{o&&d(!0)},[o]),r.jsx(l.Fragment,{children:a?t:n})}const Ae=["anchor","classes","className","width","style"],Me=ht("div",{shouldForwardProp:Dt})(({theme:e,ownerState:t})=>w({position:"fixed",top:0,left:0,bottom:0,zIndex:e.zIndex.drawer-1},t.anchor==="left"&&{right:"auto"},t.anchor==="right"&&{left:"auto",right:0},t.anchor==="top"&&{bottom:"auto",right:0},t.anchor==="bottom"&&{top:"auto",bottom:0,right:0})),Re=l.forwardRef(function(t,o){const{anchor:n,classes:a={},className:d,width:c,style:f}=t,x=Z(t,Ae),m=t;return r.jsx(Me,w({className:nt("PrivateSwipeArea-root",a.root,a[`anchor${at(n)}`],d),ref:o,style:w({[U(n)?"width":"height"]:c},f),ownerState:m},x))}),De=Re,He=["BackdropProps"],ze=["anchor","disableBackdropTransition","disableDiscovery","disableSwipeToOpen","hideBackdrop","hysteresis","allowSwipeInChildren","minFlingVelocity","ModalProps","onClose","onOpen","open","PaperProps","SwipeAreaProps","swipeAreaWidth","transitionDuration","variant"],dt=3,yt=20;let O=null;function vt(e,t,o){return e==="right"?o.body.offsetWidth-t[0].pageX:t[0].pageX}function St(e,t,o){return e==="bottom"?o.innerHeight-t[0].clientY:t[0].clientY}function rt(e,t){return e?t.clientWidth:t.clientHeight}function Mt(e,t,o,n){return Math.min(Math.max(o?t-e:n+t-e,0),n)}function Ne(e,t){const o=[];for(;e&&e!==t.parentElement;){const n=K(t).getComputedStyle(e);n.getPropertyValue("position")==="absolute"||n.getPropertyValue("overflow-x")==="hidden"||(e.clientWidth>0&&e.scrollWidth>e.clientWidth||e.clientHeight>0&&e.scrollHeight>e.clientHeight)&&o.push(e),e=e.parentElement}return o}function Ee({domTreeShapes:e,start:t,current:o,anchor:n}){const a={scrollPosition:{x:"scrollLeft",y:"scrollTop"},scrollLength:{x:"scrollWidth",y:"scrollHeight"},clientLength:{x:"clientWidth",y:"clientHeight"}};return e.some(d=>{let c=o>=t;(n==="top"||n==="left")&&(c=!c);const f=n==="left"||n==="right"?"x":"y",x=Math.round(d[a.scrollPosition[f]]),m=x>0,u=x+d[a.clientLength[f]]<d[a.scrollLength[f]];return!!(c&&u||!c&&m)})}const Le=typeof navigator<"u"&&/iPad|iPhone|iPod/.test(navigator.userAgent),Be=l.forwardRef(function(t,o){const n=Ht({name:"MuiSwipeableDrawer",props:t}),a=ct(),d={enter:a.transitions.duration.enteringScreen,exit:a.transitions.duration.leavingScreen},{anchor:c="left",disableBackdropTransition:f=!1,disableDiscovery:x=!1,disableSwipeToOpen:m=Le,hideBackdrop:u,hysteresis:y=.52,allowSwipeInChildren:b=!1,minFlingVelocity:R=450,ModalProps:{BackdropProps:F}={},onClose:H,onOpen:B,open:g=!1,PaperProps:I={},SwipeAreaProps:E,swipeAreaWidth:C=20,transitionDuration:$=d,variant:h="temporary"}=n,j=Z(n.ModalProps,He),tt=Z(n,ze),[L,z]=l.useState(!1),s=l.useRef({isSwiping:null}),V=l.useRef(),W=l.useRef(),T=l.useRef(),ft=Rt(I.ref,T),q=l.useRef(!1),Q=l.useRef();zt(()=>{Q.current=null},[g]);const p=l.useCallback((i,D={})=>{const{mode:S=null,changeTransition:P=!0}=D,k=ot(a,c),A=["right","bottom"].indexOf(k)!==-1?1:-1,Y=U(c),N=Y?`translate(${A*i}px, 0)`:`translate(0, ${A*i}px)`,J=T.current.style;J.webkitTransform=N,J.transform=N;let M="";if(S&&(M=a.transitions.create("all",bt({easing:void 0,style:void 0,timeout:$},{mode:S}))),P&&(J.webkitTransition=M,J.transition=M),!f&&!u){const X=W.current.style;X.opacity=1-i/rt(Y,T.current),P&&(X.webkitTransition=M,X.transition=M)}},[c,f,u,a,$]),v=gt(i=>{if(!q.current)return;if(O=null,q.current=!1,Tt.flushSync(()=>{z(!1)}),!s.current.isSwiping){s.current.isSwiping=null;return}s.current.isSwiping=null;const D=ot(a,c),S=U(c);let P;S?P=vt(D,i.changedTouches,ut(i.currentTarget)):P=St(D,i.changedTouches,K(i.currentTarget));const k=S?s.current.startX:s.current.startY,A=rt(S,T.current),Y=Mt(P,k,g,A),N=Y/A;if(Math.abs(s.current.velocity)>R&&(Q.current=Math.abs((A-Y)/s.current.velocity)*1e3),g){s.current.velocity>R||N>y?H():p(0,{mode:"exit"});return}s.current.velocity<-R||1-N>y?B():p(rt(S,T.current),{mode:"enter"})}),et=(i=!1)=>{if(!L){(i||!(x&&b))&&Tt.flushSync(()=>{z(!0)});const D=U(c);!g&&T.current&&p(rt(D,T.current)+(x?15:-yt),{changeTransition:!1}),s.current.velocity=0,s.current.lastTime=null,s.current.lastTranslate=null,s.current.paperHit=!1,q.current=!0}},mt=gt(i=>{if(!T.current||!q.current||O!==null&&O!==s.current)return;et(!0);const D=ot(a,c),S=U(c),P=vt(D,i.touches,ut(i.currentTarget)),k=St(D,i.touches,K(i.currentTarget));if(g&&T.current.contains(i.target)&&O===null){const M=Ne(i.target,T.current);if(Ee({domTreeShapes:M,start:S?s.current.startX:s.current.startY,current:S?P:k,anchor:c})){O=!0;return}O=s.current}if(s.current.isSwiping==null){const M=Math.abs(P-s.current.startX),X=Math.abs(k-s.current.startY),lt=S?M>X&&M>dt:X>M&&X>dt;if(lt&&i.cancelable&&i.preventDefault(),lt===!0||(S?X>dt:M>dt)){if(s.current.isSwiping=lt,!lt){v(i);return}s.current.startX=P,s.current.startY=k,!x&&!g&&(S?s.current.startX-=yt:s.current.startY-=yt)}}if(!s.current.isSwiping)return;const A=rt(S,T.current);let Y=S?s.current.startX:s.current.startY;g&&!s.current.paperHit&&(Y=Math.min(Y,A));const N=Mt(S?P:k,Y,g,A);if(g)if(s.current.paperHit)N===0&&(s.current.startX=P,s.current.startY=k);else if(S?P<A:k<A)s.current.paperHit=!0,s.current.startX=P,s.current.startY=k;else return;s.current.lastTranslate===null&&(s.current.lastTranslate=N,s.current.lastTime=performance.now()+1);const J=(N-s.current.lastTranslate)/(performance.now()-s.current.lastTime)*1e3;s.current.velocity=s.current.velocity*.4+J*.6,s.current.lastTranslate=N,s.current.lastTime=performance.now(),i.cancelable&&i.preventDefault(),p(N)}),xt=gt(i=>{if(i.defaultPrevented||i.defaultMuiPrevented||g&&(u||!W.current.contains(i.target))&&!T.current.contains(i.target))return;const D=ot(a,c),S=U(c),P=vt(D,i.touches,ut(i.currentTarget)),k=St(D,i.touches,K(i.currentTarget));if(!g){var A;if(m||!(i.target===V.current||(A=T.current)!=null&&A.contains(i.target)&&(typeof b=="function"?b(i,V.current,T.current):b)))return;if(S){if(P>C)return}else if(k>C)return}i.defaultMuiPrevented=!0,O=null,s.current.startX=P,s.current.startY=k,et()});return l.useEffect(()=>{if(h==="temporary"){const i=ut(T.current);return i.addEventListener("touchstart",xt),i.addEventListener("touchmove",mt,{passive:!g}),i.addEventListener("touchend",v),()=>{i.removeEventListener("touchstart",xt),i.removeEventListener("touchmove",mt,{passive:!g}),i.removeEventListener("touchend",v)}}},[h,g,xt,mt,v]),l.useEffect(()=>()=>{O===s.current&&(O=null)},[]),l.useEffect(()=>{g||z(!1)},[g]),r.jsxs(l.Fragment,{children:[r.jsx(Ce,w({open:h==="temporary"&&L?!0:g,variant:h,ModalProps:w({BackdropProps:w({},F,{ref:W})},h==="temporary"&&{keepMounted:!0},j),hideBackdrop:u,PaperProps:w({},I,{style:w({pointerEvents:h==="temporary"&&!g&&!b?"none":""},I.style),ref:ft}),anchor:c,transitionDuration:Q.current||$,onClose:H,ref:o},tt)),!m&&h==="temporary"&&r.jsx(ke,{children:r.jsx(De,w({anchor:c,ref:V,width:C},E))})]})}),Ie=Be,$e=G(r.jsx("path",{d:"M21 3H3v18h18zm-9 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6m7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58z"}),"AccountBoxSharp"),Ye=G([r.jsx("path",{d:"M17 11c.34 0 .67.04 1 .09V6.27L10.5 3 3 6.27v4.91c0 4.54 3.2 8.79 7.5 9.82.55-.13 1.08-.32 1.6-.55-.69-.98-1.1-2.17-1.1-3.45 0-3.31 2.69-6 6-6"},"0"),r.jsx("path",{d:"M17 13c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4m0 1.38c.62 0 1.12.51 1.12 1.12s-.51 1.12-1.12 1.12-1.12-.51-1.12-1.12.5-1.12 1.12-1.12m0 5.37c-.93 0-1.74-.46-2.24-1.17.05-.72 1.51-1.08 2.24-1.08s2.19.36 2.24 1.08c-.5.71-1.31 1.17-2.24 1.17"},"1")],"AdminPanelSettingsSharp"),Xe=G(r.jsx("path",{d:"M22 2H2.01L2 22l4-4h16zM6 9h12v2H6zm8 5H6v-2h8zm4-6H6V6h12z"}),"ChatSharp"),Oe=G(r.jsx("path",{d:"M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9m-1 5v5l4.25 2.52.77-1.29-3.52-2.09V8z"}),"HistorySharp"),Ve=G(r.jsx("path",{d:"M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z"}),"Menu"),We=G(r.jsx("path",{d:"M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2m6-6v-5c0-3.07-1.64-5.64-4.5-6.32V2.5h-3v2.18C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1z"}),"NotificationsSharp"),Fe=G(r.jsx("path",{d:"m19.44 12.99-.01.02c.04-.33.08-.67.08-1.01s-.03-.66-.07-.99l.01.02 2.44-1.92-2.43-4.22-2.87 1.16.01.01c-.52-.4-1.09-.74-1.71-1h.01L14.44 2H9.57l-.44 3.07h.01c-.62.26-1.19.6-1.71 1l.01-.01-2.88-1.17-2.44 4.22 2.44 1.92.01-.02c-.04.33-.07.65-.07.99s.03.68.08 1.01l-.01-.02-2.1 1.65-.33.26 2.43 4.2 2.88-1.15-.02-.04c.53.41 1.1.75 1.73 1.01h-.03L9.58 22h4.85s.03-.18.06-.42l.38-2.65h-.01c.62-.26 1.2-.6 1.73-1.01l-.02.04 2.88 1.15 2.43-4.2s-.14-.12-.33-.26zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5"}),"SettingsSharp"),_e=({data:e})=>{const{setIsMenuOpen:t}=e,[o,n]=l.useState(!1),[a,d]=l.useState(!1),{setUserId:c,userId:f}=l.useContext(it);ct().palette;const m=l.useRef(null),u=Nt(),{userData:y}=l.useContext(it),b=async()=>{try{await Qt(qt),t(!1),Jt.remove("userId"),c(null),u("/login")}catch(R){console.log(R.message)}};return Gt(m,n),r.jsxs(_,{ref:m,className:"p-2 ",children:[r.jsx(_,{className:"top-0 right-0 left-0 bottom-0",children:r.jsx(se,{data:{value:a,yesButton:b,noButton:()=>{d(!1)},text:"Are you sure to log out ?",setValue:d}})}),r.jsx(st,{variant:o?"outlined":"text",size:"small",sx:{textTransform:"capitalize",justifyContent:"start"},onClick:()=>n(!o),className:`transition-all ${o?"bg-slate-100 shadow-md border border-slate-200":"hover:bg-slate-200/70"} p-1 flex items-center rounded-md cursor-pointer w-full min-h-14`,children:r.jsxs(_,{className:"flex gap-x-2 items-center mb-2",children:[r.jsx(_,{className:"relative size-10",children:r.jsx(ne,{image:y==null?void 0:y.image,name:y==null?void 0:y.name})}),r.jsx(_,{className:"flex flex-1 items-center justify-between",children:r.jsx(jt,{fontSize:"1.1rem",variant:"h6",children:y!=null&&y.name?y.name:"Username"})})]})}),o&&r.jsx(_,{className:"absolute bottom-[70px] left-1 border w-4/6 sm:w-3/5 md:w-4/6  p-2 rounded-md",children:r.jsxs(_,{children:[r.jsx(st,{size:"small",sx:{width:"100%"},onClick:()=>{u("/app/settings"),t(!1),n(!1)},startIcon:r.jsx(Fe,{}),children:"Settings"}),r.jsx(st,{size:"small",sx:{width:"100%"},onClick:()=>{u(`/app/profile/${f}`),t(!1),n(!1)},startIcon:r.jsx($e,{}),children:"My Profile"}),r.jsx(st,{size:"small",sx:{width:"100%"},onClick:()=>{d(!0)},startIcon:r.jsx(oe,{}),children:"Log out"})]})})]})},Ue=({isMenuOpen:e,setIsMenuOpen:t})=>{const o=["/app/admin","/app/admin/posts","/app/admin/users","/app/admin/helps","/app/admin/tests"],{userData:n,newMessages:a,historyCount:d,setHistoryCount:c,notiCount:f,setNotiCount:x,userId:m}=l.useContext(it),u=Kt(),y=u.pathname.includes("/app/history"),b=o.includes(u.pathname),R=u.pathname==="/app/"||u.pathname==="/app",F=u.pathname.includes("/app/tests"),H=u.pathname.includes("/app/help"),B=u.pathname.includes("/app/notifications"),g=u.pathname.includes("/app/chatroom");l.useEffect(()=>{try{kt(Ct(Zt(Pt,"users",m),"history"),c),kt(Ct(Pt,"notifications"),x)}catch(h){console.log(h.message)}},[]);const I=()=>{let h=0;return a.forEach(j=>{te(a,j.id)||(h+=1)}),!!(h>0&&(n!=null&&n.name))},E=[{text:"Home",image:r.jsx(ue,{}),path:"/app",active:R},{text:"Tests",image:r.jsx(pe,{}),path:"/app/tests",active:F},{text:"History",image:r.jsx(Oe,{}),path:"/app/history",items:d,active:y},{text:"Notifications",image:r.jsx(We,{}),path:"/app/notifications",items:f,active:B},{text:"Chat Room",image:r.jsx(Xe,{}),path:"/app/chatroom",color:"bg-red-600",active:g},{text:"Admin",image:r.jsx(Ye,{}),path:"/app/admin",active:b},{text:"Help",image:r.jsx(de,{}),path:"/app/help",active:H}],C=["Admin"],$=E.filter(h=>n!=null&&n.isAdmin?!0:!C.includes(h.text));return r.jsxs(Ie,{variant:"temporary",transitionDuration:{enter:300,exit:300},anchor:"left",open:e,onOpen:()=>t(!0),onClose:()=>t(!1),sx:{"& .MuiDrawer-paper":{width:{xs:"300px",sm:"350px",md:"400px",lg:"450px",xl:"500px"}}},children:[r.jsx("div",{className:"flex p-2 items-center",children:r.jsxs("div",{className:"font-medium text-md flex-1 flex items-center",children:[r.jsx(Lt,{title:"Close",arrow:!0,children:r.jsx(Bt,{onClick:()=>t(!1),children:r.jsx(ce,{})})}),r.jsx(jt,{variant:"h6",fontSize:"1rem",children:"STAR EDUCATION ACADEMY"})]})}),r.jsxs(le,{sx:{flexDirection:"column",justifyContent:"space-between",height:"100%"},children:[r.jsx(It,{direction:"right",in:e,mountOnEnter:!0,unmountOnExit:!0,children:r.jsx("div",{className:"mr-2 ml-2",children:$.map(h=>r.jsx(Ge,{setIsMenuOpen:t,data:{active:h.active,image:h.image,path:h.path,text:h.text,items:h==null?void 0:h.items,color:h.color,isThereNewMessages:I}},h.text))})}),r.jsx(_e,{data:{setIsMenuOpen:t}})]})]})},Ge=Et.memo(({setIsMenuOpen:e,data:t})=>{const{active:o,image:n,text:a,items:d,path:c,color:f,isThereNewMessages:x}=t,m=Nt(),{currentTest:u}=l.useContext(it);return r.jsxs(st,{sx:{color:o?"white":"",height:47,justifyContent:"start",alignItems:"center",textTransform:"capitalize"},variant:o?"contained":"text",onClick:()=>{m(c),e(!1)},className:`relative font-bold p-2 hover:shadow-md pl-2 ${o?"bg-blue-500/70":"hover:bg-slate-200"} transition-all font-medium rounded-tr-3xl rounded-br-3xl flex items-center gap-x-1 w-full  hover:shadow-md 
      
      `,startIcon:n,children:[r.jsx("div",{children:a}),d&&d>=0?r.jsx("div",{className:` flex items-center rounded-full justify-center pl-1 pr-1  min-h-6 min-w-6 text-sm top-0 -left-1 font-bold text-white ${f||"bg-black"}`,children:d}):"",u&&a==="Home"&&r.jsxs("div",{className:"text-sm",children:["(Taking ",re(u.name,45),")"]}),a==="Chat Room"&&(x()?r.jsx("div",{className:"absolute right-2 top-3 shadow-sm bg-red-500 size-3 rounded-full"}):"")]})}),wr=Et.memo(()=>{const{headerTitle:e,newMessages:t,userData:o,userId:n}=l.useContext(it),[a,d]=l.useState(!1),c=ct(),{mode:f}=c.palette;return r.jsx(he,{position:"sticky",sx:{backgroundColor:f==="dark"?"background.default":"white",color:"text.primary"},children:r.jsx(fe,{sx:{padding:"5px"},children:r.jsxs(wt,{container:!0,justifyContent:"space-between",children:[r.jsxs(wt,{item:!0,display:"flex",alignItems:"center",children:[n&&r.jsxs(r.Fragment,{children:[r.jsx(Lt,{title:"Menu",arrow:!0,children:r.jsxs(Bt,{sx:{position:"relative"},onClick:()=>d(!0),children:[r.jsx(Ve,{}),ee(t,o)?r.jsx("div",{className:"absolute left-2 top-2 shadow-sm bg-red-500 size-3 rounded-full"}):""]})}),a&&r.jsx(Ue,{setIsMenuOpen:d,isMenuOpen:a})]}),r.jsx(jt,{variant:"h6",fontSize:"1.12rem",children:e})]}),r.jsx(wt,{item:!0,children:r.jsx("div",{className:"flex gap-x-2 items-center hidden small:block",children:r.jsx("img",{className:"size-12 rounded-full",src:"images/sea-logo.jpg"})})})]})})})});export{wr as default};
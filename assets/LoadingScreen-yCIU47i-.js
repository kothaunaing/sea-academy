import{n as q,o as M,a$ as x,p as m,t as n,k as l,b0 as y,r as D,v as z,_ as T,w as U,j as t,x as O,y as A,b1 as E,b2 as K,E as v,G as X}from"./index-bR4MaZOJ.js";function w(r){return q("MuiLinearProgress",r)}M("MuiLinearProgress",["root","colorPrimary","colorSecondary","determinate","indeterminate","buffer","query","dashed","dashedColorPrimary","dashedColorSecondary","bar","barColorPrimary","barColorSecondary","bar1Indeterminate","bar1Determinate","bar1Buffer","bar2Indeterminate","bar2Buffer"]);const G=["className","color","value","valueBuffer","variant"];let c=r=>r,k,L,j,B,_,I;const h=4,W=x(k||(k=c`
  0% {
    left: -35%;
    right: 100%;
  }

  60% {
    left: 100%;
    right: -90%;
  }

  100% {
    left: 100%;
    right: -90%;
  }
`)),F=x(L||(L=c`
  0% {
    left: -200%;
    right: 100%;
  }

  60% {
    left: 107%;
    right: -8%;
  }

  100% {
    left: 107%;
    right: -8%;
  }
`)),H=x(j||(j=c`
  0% {
    opacity: 1;
    background-position: 0 -23px;
  }

  60% {
    opacity: 0;
    background-position: 0 -23px;
  }

  100% {
    opacity: 1;
    background-position: -200px -23px;
  }
`)),J=r=>{const{classes:e,variant:a,color:o}=r,g={root:["root",`color${n(o)}`,a],dashed:["dashed",`dashedColor${n(o)}`],bar1:["bar",`barColor${n(o)}`,(a==="indeterminate"||a==="query")&&"bar1Indeterminate",a==="determinate"&&"bar1Determinate",a==="buffer"&&"bar1Buffer"],bar2:["bar",a!=="buffer"&&`barColor${n(o)}`,a==="buffer"&&`color${n(o)}`,(a==="indeterminate"||a==="query")&&"bar2Indeterminate",a==="buffer"&&"bar2Buffer"]};return A(g,w,e)},C=(r,e)=>e==="inherit"?"currentColor":r.vars?r.vars.palette.LinearProgress[`${e}Bg`]:r.palette.mode==="light"?E(r.palette[e].main,.62):K(r.palette[e].main,.5),Q=m("span",{name:"MuiLinearProgress",slot:"Root",overridesResolver:(r,e)=>{const{ownerState:a}=r;return[e.root,e[`color${n(a.color)}`],e[a.variant]]}})(({ownerState:r,theme:e})=>l({position:"relative",overflow:"hidden",display:"block",height:4,zIndex:0,"@media print":{colorAdjust:"exact"},backgroundColor:C(e,r.color)},r.color==="inherit"&&r.variant!=="buffer"&&{backgroundColor:"none","&::before":{content:'""',position:"absolute",left:0,top:0,right:0,bottom:0,backgroundColor:"currentColor",opacity:.3}},r.variant==="buffer"&&{backgroundColor:"transparent"},r.variant==="query"&&{transform:"rotate(180deg)"})),V=m("span",{name:"MuiLinearProgress",slot:"Dashed",overridesResolver:(r,e)=>{const{ownerState:a}=r;return[e.dashed,e[`dashedColor${n(a.color)}`]]}})(({ownerState:r,theme:e})=>{const a=C(e,r.color);return l({position:"absolute",marginTop:0,height:"100%",width:"100%"},r.color==="inherit"&&{opacity:.3},{backgroundImage:`radial-gradient(${a} 0%, ${a} 16%, transparent 42%)`,backgroundSize:"10px 10px",backgroundPosition:"0 -23px"})},y(B||(B=c`
    animation: ${0} 3s infinite linear;
  `),H)),Y=m("span",{name:"MuiLinearProgress",slot:"Bar1",overridesResolver:(r,e)=>{const{ownerState:a}=r;return[e.bar,e[`barColor${n(a.color)}`],(a.variant==="indeterminate"||a.variant==="query")&&e.bar1Indeterminate,a.variant==="determinate"&&e.bar1Determinate,a.variant==="buffer"&&e.bar1Buffer]}})(({ownerState:r,theme:e})=>l({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",backgroundColor:r.color==="inherit"?"currentColor":(e.vars||e).palette[r.color].main},r.variant==="determinate"&&{transition:`transform .${h}s linear`},r.variant==="buffer"&&{zIndex:1,transition:`transform .${h}s linear`}),({ownerState:r})=>(r.variant==="indeterminate"||r.variant==="query")&&y(_||(_=c`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    `),W)),Z=m("span",{name:"MuiLinearProgress",slot:"Bar2",overridesResolver:(r,e)=>{const{ownerState:a}=r;return[e.bar,e[`barColor${n(a.color)}`],(a.variant==="indeterminate"||a.variant==="query")&&e.bar2Indeterminate,a.variant==="buffer"&&e.bar2Buffer]}})(({ownerState:r,theme:e})=>l({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left"},r.variant!=="buffer"&&{backgroundColor:r.color==="inherit"?"currentColor":(e.vars||e).palette[r.color].main},r.color==="inherit"&&{opacity:.3},r.variant==="buffer"&&{backgroundColor:C(e,r.color),transition:`transform .${h}s linear`}),({ownerState:r})=>(r.variant==="indeterminate"||r.variant==="query")&&y(I||(I=c`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
    `),F)),S=D.forwardRef(function(e,a){const o=z({props:e,name:"MuiLinearProgress"}),{className:g,color:N="primary",value:p,valueBuffer:P,variant:s="indeterminate"}=o,R=T(o,G),f=l({},o,{color:N,variant:s}),d=J(f),$=U(),u={},b={bar1:{},bar2:{}};if((s==="determinate"||s==="buffer")&&p!==void 0){u["aria-valuenow"]=Math.round(p),u["aria-valuemin"]=0,u["aria-valuemax"]=100;let i=p-100;$&&(i=-i),b.bar1.transform=`translateX(${i}%)`}if(s==="buffer"&&P!==void 0){let i=(P||0)-100;$&&(i=-i),b.bar2.transform=`translateX(${i}%)`}return t.jsxs(Q,l({className:O(d.root,g),ownerState:f,role:"progressbar"},u,{ref:a},R,{children:[s==="buffer"?t.jsx(V,{className:d.dashed,ownerState:f}):null,t.jsx(Y,{className:d.bar1,ownerState:f,style:b.bar1}),s==="determinate"?null:t.jsx(Z,{className:d.bar2,ownerState:f,style:b.bar2})]}))}),rr=S,ar=({isLoading:r,text:e})=>{if(r)return t.jsx(v,{sx:{bgcolor:"background.default",position:"fixed",display:"flex",alignItems:"center",top:0,bottom:0,right:0,left:0},className:"fixed top-[70px] right-0 left-0 bottom-0 flex items-center justify-center",children:t.jsxs(v,{className:"flex flex-col items-center justify-center gap-y-4",children:[t.jsx("img",{className:"w-20 rounded-lg",src:"/images/sea-logo.jpg"}),t.jsxs(v,{className:"h-3 w-[200px] grid justify-center",children:[t.jsx(X,{mb:2,children:e}),t.jsx(rr,{})]})]})})};export{ar as L};

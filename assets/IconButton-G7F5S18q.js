import{o as z,n as R,p as y,a4 as x,t as r,k as t,a5 as u,r as C,v as B,_ as $,j as I,x as m,y as h}from"./index-bRWVs4uH.js";function k(o){return R("MuiIconButton",o)}const _=z("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]),M=_,j=["edge","children","className","color","disabled","disableFocusRipple","size"],E=o=>{const{classes:a,disabled:s,color:e,edge:n,size:i}=o,l={root:["root",s&&"disabled",e!=="default"&&`color${r(e)}`,n&&`edge${r(n)}`,`size${r(i)}`]};return h(l,k,a)},O=y(x,{name:"MuiIconButton",slot:"Root",overridesResolver:(o,a)=>{const{ownerState:s}=o;return[a.root,s.color!=="default"&&a[`color${r(s.color)}`],s.edge&&a[`edge${r(s.edge)}`],a[`size${r(s.size)}`]]}})(({theme:o,ownerState:a})=>t({textAlign:"center",flex:"0 0 auto",fontSize:o.typography.pxToRem(24),padding:8,borderRadius:"50%",overflow:"visible",color:(o.vars||o).palette.action.active,transition:o.transitions.create("background-color",{duration:o.transitions.duration.shortest})},!a.disableRipple&&{"&:hover":{backgroundColor:o.vars?`rgba(${o.vars.palette.action.activeChannel} / ${o.vars.palette.action.hoverOpacity})`:u(o.palette.action.active,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},a.edge==="start"&&{marginLeft:a.size==="small"?-3:-12},a.edge==="end"&&{marginRight:a.size==="small"?-3:-12}),({theme:o,ownerState:a})=>{var s;const e=(s=(o.vars||o).palette)==null?void 0:s[a.color];return t({},a.color==="inherit"&&{color:"inherit"},a.color!=="inherit"&&a.color!=="default"&&t({color:e==null?void 0:e.main},!a.disableRipple&&{"&:hover":t({},e&&{backgroundColor:o.vars?`rgba(${e.mainChannel} / ${o.vars.palette.action.hoverOpacity})`:u(e.main,o.palette.action.hoverOpacity)},{"@media (hover: none)":{backgroundColor:"transparent"}})}),a.size==="small"&&{padding:5,fontSize:o.typography.pxToRem(18)},a.size==="large"&&{padding:12,fontSize:o.typography.pxToRem(28)},{[`&.${M.disabled}`]:{backgroundColor:"transparent",color:(o.vars||o).palette.action.disabled}})}),U=C.forwardRef(function(a,s){const e=B({props:a,name:"MuiIconButton"}),{edge:n=!1,children:i,className:l,color:g="default",disabled:c=!1,disableFocusRipple:d=!1,size:v="medium"}=e,b=$(e,j),p=t({},e,{edge:n,color:g,disabled:c,disableFocusRipple:d,size:v}),f=E(p);return I.jsx(O,t({className:m(f.root,l),centerRipple:!0,focusRipple:!d,disabled:c,ref:s},b,{ownerState:p,children:i}))}),N=U;export{N as I};

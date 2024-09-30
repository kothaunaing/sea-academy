import{o as z,n as F,p as R,q as k,t as d,k as i,r as y,v as $,_ as w,j as N,x as g,y as V}from"./index-dSD7UM6z.js";import{B as _}from"./ButtonBase-D-lMm-wW.js";function m(o){return F("MuiFab",o)}const I=z("MuiFab",["root","primary","secondary","extended","circular","focusVisible","disabled","colorInherit","sizeSmall","sizeMedium","sizeLarge","info","error","warning","success"]),v=I,M=["children","className","color","component","disabled","disableFocusRipple","focusVisibleClassName","size","variant"],W=o=>{const{color:a,variant:s,classes:r,size:t}=o,l={root:["root",s,`size${d(t)}`,a==="inherit"?"colorInherit":a]},e=V(l,m,r);return i({},r,e)},j=R(_,{name:"MuiFab",slot:"Root",shouldForwardProp:o=>k(o)||o==="classes",overridesResolver:(o,a)=>{const{ownerState:s}=o;return[a.root,a[s.variant],a[`size${d(s.size)}`],s.color==="inherit"&&a.colorInherit,a[d(s.size)],a[s.color]]}})(({theme:o,ownerState:a})=>{var s,r;return i({},o.typography.button,{minHeight:36,transition:o.transitions.create(["background-color","box-shadow","border-color"],{duration:o.transitions.duration.short}),borderRadius:"50%",padding:0,minWidth:0,width:56,height:56,zIndex:(o.vars||o).zIndex.fab,boxShadow:(o.vars||o).shadows[6],"&:active":{boxShadow:(o.vars||o).shadows[12]},color:o.vars?o.vars.palette.text.primary:(s=(r=o.palette).getContrastText)==null?void 0:s.call(r,o.palette.grey[300]),backgroundColor:(o.vars||o).palette.grey[300],"&:hover":{backgroundColor:(o.vars||o).palette.grey.A100,"@media (hover: none)":{backgroundColor:(o.vars||o).palette.grey[300]},textDecoration:"none"},[`&.${v.focusVisible}`]:{boxShadow:(o.vars||o).shadows[6]}},a.size==="small"&&{width:40,height:40},a.size==="medium"&&{width:48,height:48},a.variant==="extended"&&{borderRadius:48/2,padding:"0 16px",width:"auto",minHeight:"auto",minWidth:48,height:48},a.variant==="extended"&&a.size==="small"&&{width:"auto",padding:"0 8px",borderRadius:34/2,minWidth:34,height:34},a.variant==="extended"&&a.size==="medium"&&{width:"auto",padding:"0 16px",borderRadius:40/2,minWidth:40,height:40},a.color==="inherit"&&{color:"inherit"})},({theme:o,ownerState:a})=>i({},a.color!=="inherit"&&a.color!=="default"&&(o.vars||o).palette[a.color]!=null&&{color:(o.vars||o).palette[a.color].contrastText,backgroundColor:(o.vars||o).palette[a.color].main,"&:hover":{backgroundColor:(o.vars||o).palette[a.color].dark,"@media (hover: none)":{backgroundColor:(o.vars||o).palette[a.color].main}}}),({theme:o})=>({[`&.${v.disabled}`]:{color:(o.vars||o).palette.action.disabled,boxShadow:(o.vars||o).shadows[0],backgroundColor:(o.vars||o).palette.action.disabledBackground}})),B=y.forwardRef(function(a,s){const r=$({props:a,name:"MuiFab"}),{children:t,className:l,color:e="default",component:c="button",disabled:u=!1,disableFocusRipple:p=!1,focusVisibleClassName:x,size:f="large",variant:h="circular"}=r,C=w(r,M),b=i({},r,{color:e,component:c,disabled:u,disableFocusRipple:p,size:f,variant:h}),n=W(b);return N.jsx(j,i({className:g(n.root,l),component:c,disabled:u,focusRipple:!p,focusVisibleClassName:g(n.focusVisible,x),ownerState:b,ref:s},C,{classes:n,children:t}))}),D=B;export{D as F};

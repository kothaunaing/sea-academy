import{n as I,o as C,p as R,t as h,r as g,v as w,_ as b,k as S,j as f,x as j,y as N}from"./index-bR4MaZOJ.js";function A(o){return I("MuiSvgIcon",o)}C("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);const B=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],M=o=>{const{color:t,fontSize:e,classes:i}=o,n={root:["root",t!=="inherit"&&`color${h(t)}`,`fontSize${h(e)}`]};return N(n,A,i)},E=R("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(o,t)=>{const{ownerState:e}=o;return[t.root,e.color!=="inherit"&&t[`color${h(e.color)}`],t[`fontSize${h(e.fontSize)}`]]}})(({theme:o,ownerState:t})=>{var e,i,n,p,m,a,v,u,d,r,s,c,l;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:t.hasSvgAsChild?void 0:"currentColor",flexShrink:0,transition:(e=o.transitions)==null||(i=e.create)==null?void 0:i.call(e,"fill",{duration:(n=o.transitions)==null||(n=n.duration)==null?void 0:n.shorter}),fontSize:{inherit:"inherit",small:((p=o.typography)==null||(m=p.pxToRem)==null?void 0:m.call(p,20))||"1.25rem",medium:((a=o.typography)==null||(v=a.pxToRem)==null?void 0:v.call(a,24))||"1.5rem",large:((u=o.typography)==null||(d=u.pxToRem)==null?void 0:d.call(u,35))||"2.1875rem"}[t.fontSize],color:(r=(s=(o.vars||o).palette)==null||(s=s[t.color])==null?void 0:s.main)!=null?r:{action:(c=(o.vars||o).palette)==null||(c=c.action)==null?void 0:c.active,disabled:(l=(o.vars||o).palette)==null||(l=l.action)==null?void 0:l.disabled,inherit:void 0}[t.color]}}),_=g.forwardRef(function(t,e){const i=w({props:t,name:"MuiSvgIcon"}),{children:n,className:p,color:m="inherit",component:a="svg",fontSize:v="medium",htmlColor:u,inheritViewBox:d=!1,titleAccess:r,viewBox:s="0 0 24 24"}=i,c=b(i,B),l=g.isValidElement(n)&&n.type==="svg",y=S({},i,{color:m,component:a,fontSize:v,instanceFontSize:t.fontSize,inheritViewBox:d,viewBox:s,hasSvgAsChild:l}),x={};d||(x.viewBox=s);const z=M(y);return f.jsxs(E,S({as:a,className:j(z.root,p),focusable:"false",color:u,"aria-hidden":r?void 0:!0,role:r?"img":void 0,ref:e},x,c,l&&n.props,{ownerState:y,children:[l?n.props.children:n,r?f.jsx("title",{children:r}):null]}))});_.muiName="SvgIcon";const $=_;function U(o,t){function e(i,n){return f.jsx($,S({"data-testid":`${t}Icon`,ref:n},i,{children:o}))}return e.muiName=$.muiName,g.memo(g.forwardRef(e))}export{U as c};

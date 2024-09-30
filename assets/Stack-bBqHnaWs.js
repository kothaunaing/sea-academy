import{b3 as W,_ as T,b4 as I,k as a,b5 as G,b6 as q,b7 as z,b8 as H,b9 as J,b2 as $,b1 as A,ba as K,bb as Q,bc as X,r as E,b0 as Y,j as Z,x as ee,y as te,n as se,bd as B,p as oe,v as re}from"./index-14pqm9y1.js";const ne=["ownerState"],ie=["variants"],ce=["name","slot","skipVariantsResolver","skipSx","overridesResolver"];function le(e){return Object.keys(e).length===0}function ae(e){return typeof e=="string"&&e.charCodeAt(0)>96}function D(e){return e!=="ownerState"&&e!=="theme"&&e!=="sx"&&e!=="as"}const ue=G(),pe=e=>e&&e.charAt(0).toLowerCase()+e.slice(1);function j({defaultTheme:e,theme:s,themeId:t}){return le(s)?e:s[t]||s}function de(e){return e?(s,t)=>t[e]:null}function F(e,s){let{ownerState:t}=s,i=T(s,ne);const n=typeof e=="function"?e(a({ownerState:t},i)):e;if(Array.isArray(n))return n.flatMap(c=>F(c,a({ownerState:t},i)));if(n&&typeof n=="object"&&Array.isArray(n.variants)){const{variants:c=[]}=n;let p=T(n,ie);return c.forEach(o=>{let r=!0;typeof o.props=="function"?r=o.props(a({ownerState:t},i,t)):Object.keys(o.props).forEach(d=>{(t==null?void 0:t[d])!==o.props[d]&&i[d]!==o.props[d]&&(r=!1)}),r&&(Array.isArray(p)||(p=[p]),p.push(typeof o.style=="function"?o.style(a({ownerState:t},i,t)):o.style))}),p}return n}function fe(e={}){const{themeId:s,defaultTheme:t=ue,rootShouldForwardProp:i=D,slotShouldForwardProp:n=D}=e,c=u=>q(a({},u,{theme:j(a({},u,{defaultTheme:t,themeId:s}))}));return c.__mui_systemSx=!0,(u,p={})=>{W(u,l=>l.filter(m=>!(m!=null&&m.__mui_systemSx)));const{name:o,slot:r,skipVariantsResolver:d,skipSx:S,overridesResolver:y=de(pe(r))}=p,O=T(p,ce),V=d!==void 0?d:r&&r!=="Root"&&r!=="root"||!1,P=S||!1;let R,v=D;r==="Root"||r==="root"?v=i:r?v=n:ae(u)&&(v=void 0);const b=I(u,a({shouldForwardProp:v,label:R},O)),g=l=>typeof l=="function"&&l.__emotion_real!==l||z(l)?m=>F(l,a({},m,{theme:j({theme:m.theme,defaultTheme:t,themeId:s})})):l,_=(l,...m)=>{let w=g(l);const x=m?m.map(g):[];o&&y&&x.push(h=>{const f=j(a({},h,{defaultTheme:t,themeId:s}));if(!f.components||!f.components[o]||!f.components[o].styleOverrides)return null;const k=f.components[o].styleOverrides,C={};return Object.entries(k).forEach(([L,U])=>{C[L]=F(U,a({},h,{theme:f}))}),y(h,C)}),o&&!V&&x.push(h=>{var f;const k=j(a({},h,{defaultTheme:t,themeId:s})),C=k==null||(f=k.components)==null||(f=f[o])==null?void 0:f.variants;return F({variants:C},a({},h,{theme:k}))}),P||x.push(c);const N=x.length-m.length;if(Array.isArray(l)&&N>0){const h=new Array(N).fill("");w=[...l,...h],w.raw=[...l.raw,...h]}const M=b(w,...x);return u.muiName&&(M.muiName=u.muiName),M};return b.withConfig&&(_.withConfig=b.withConfig),_}}const me=fe(),he=me;function ye({props:e,name:s,defaultTheme:t,themeId:i}){let n=H(t);return i&&(n=n[i]||n),J({theme:n,name:s,props:e})}const ve=["component","direction","spacing","divider","children","className","useFlexGap"],Se=G(),be=he("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,s)=>s.root});function xe(e){return ye({props:e,name:"MuiStack",defaultTheme:Se})}function ke(e,s){const t=E.Children.toArray(e).filter(Boolean);return t.reduce((i,n,c)=>(i.push(n),c<t.length-1&&i.push(E.cloneElement(s,{key:`separator-${c}`})),i),[])}const Pe=e=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[e],Re=({ownerState:e,theme:s})=>{let t=a({display:"flex",flexDirection:"column"},$({theme:s},A({values:e.direction,breakpoints:s.breakpoints.values}),i=>({flexDirection:i})));if(e.spacing){const i=K(s),n=Object.keys(s.breakpoints.values).reduce((o,r)=>((typeof e.spacing=="object"&&e.spacing[r]!=null||typeof e.direction=="object"&&e.direction[r]!=null)&&(o[r]=!0),o),{}),c=A({values:e.direction,base:n}),u=A({values:e.spacing,base:n});typeof c=="object"&&Object.keys(c).forEach((o,r,d)=>{if(!c[o]){const y=r>0?c[d[r-1]]:"column";c[o]=y}}),t=Q(t,$({theme:s},u,(o,r)=>e.useFlexGap?{gap:B(i,o)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${Pe(r?c[r]:e.direction)}`]:B(i,o)}}))}return t=X(s.breakpoints,t),t};function ge(e={}){const{createStyledComponent:s=be,useThemeProps:t=xe,componentName:i="MuiStack"}=e,n=()=>te({root:["root"]},o=>se(i,o),{}),c=s(Re);return E.forwardRef(function(o,r){const d=t(o),S=Y(d),{component:y="div",direction:O="column",spacing:V=0,divider:P,children:R,className:v,useFlexGap:b=!1}=S,g=T(S,ve),_={direction:O,spacing:V,useFlexGap:b},l=n();return Z.jsx(c,a({as:y,ownerState:_,ref:r,className:ee(l.root,v)},g,{children:P?ke(R,P):R}))})}const _e=ge({createStyledComponent:oe("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,s)=>s.root}),useThemeProps:e=>re({props:e,name:"MuiStack"})}),je=_e;export{je as S};

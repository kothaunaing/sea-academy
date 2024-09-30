import{r as a,bp as _e,bs as Oe,k as A,_ as ie,I as Y,bt as de,x,j as $,o as Re,aX as oe,p as re,v as ye,bn as ze,n as Ae,i as fe,B as H,y as Xe}from"./index-dSD7UM6z.js";let G=!0,te=!1;const We=new _e,Ye={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function He(e){const{type:t,tagName:o}=e;return!!(o==="INPUT"&&Ye[t]&&!e.readOnly||o==="TEXTAREA"&&!e.readOnly||e.isContentEditable)}function Ge(e){e.metaKey||e.altKey||e.ctrlKey||(G=!0)}function ee(){G=!1}function qe(){this.visibilityState==="hidden"&&te&&(G=!0)}function Je(e){e.addEventListener("keydown",Ge,!0),e.addEventListener("mousedown",ee,!0),e.addEventListener("pointerdown",ee,!0),e.addEventListener("touchstart",ee,!0),e.addEventListener("visibilitychange",qe,!0)}function Qe(e){const{target:t}=e;try{return t.matches(":focus-visible")}catch{}return G||He(t)}function Ze(){const e=a.useCallback(n=>{n!=null&&Je(n.ownerDocument)},[]),t=a.useRef(!1);function o(){return t.current?(te=!0,We.start(100,()=>{te=!1}),t.current=!1,!0):!1}function l(n){return Qe(n)?(t.current=!0,!0):!1}return{isFocusVisibleRef:t,onFocus:l,onBlur:o,ref:e}}function et(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function se(e,t){var o=function(i){return t&&a.isValidElement(i)?t(i):i},l=Object.create(null);return e&&a.Children.map(e,function(n){return n}).forEach(function(n){l[n.key]=o(n)}),l}function tt(e,t){e=e||{},t=t||{};function o(f){return f in t?t[f]:e[f]}var l=Object.create(null),n=[];for(var i in e)i in t?n.length&&(l[i]=n,n=[]):n.push(i);var r,c={};for(var u in t){if(l[u])for(r=0;r<l[u].length;r++){var p=l[u][r];c[l[u][r]]=o(p)}c[u]=o(u)}for(r=0;r<n.length;r++)c[n[r]]=o(n[r]);return c}function S(e,t,o){return o[t]!=null?o[t]:e.props[t]}function nt(e,t){return se(e.children,function(o){return a.cloneElement(o,{onExited:t.bind(null,o),in:!0,appear:S(o,"appear",e),enter:S(o,"enter",e),exit:S(o,"exit",e)})})}function it(e,t,o){var l=se(e.children),n=tt(t,l);return Object.keys(n).forEach(function(i){var r=n[i];if(a.isValidElement(r)){var c=i in t,u=i in l,p=t[i],f=a.isValidElement(p)&&!p.props.in;u&&(!c||f)?n[i]=a.cloneElement(r,{onExited:o.bind(null,r),in:!0,exit:S(r,"exit",e),enter:S(r,"enter",e)}):!u&&c&&!f?n[i]=a.cloneElement(r,{in:!1}):u&&c&&a.isValidElement(p)&&(n[i]=a.cloneElement(r,{onExited:o.bind(null,r),in:p.props.in,exit:S(r,"exit",e),enter:S(r,"enter",e)}))}}),n}var ot=Object.values||function(e){return Object.keys(e).map(function(t){return e[t]})},rt={component:"div",childFactory:function(t){return t}},ae=function(e){Oe(t,e);function t(l,n){var i;i=e.call(this,l,n)||this;var r=i.handleExited.bind(et(i));return i.state={contextValue:{isMounting:!0},handleExited:r,firstRender:!0},i}var o=t.prototype;return o.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},o.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(n,i){var r=i.children,c=i.handleExited,u=i.firstRender;return{children:u?nt(n,c):it(n,r,c),firstRender:!1}},o.handleExited=function(n,i){var r=se(this.props.children);n.key in r||(n.props.onExited&&n.props.onExited(i),this.mounted&&this.setState(function(c){var u=A({},c.children);return delete u[n.key],{children:u}}))},o.render=function(){var n=this.props,i=n.component,r=n.childFactory,c=ie(n,["component","childFactory"]),u=this.state.contextValue,p=ot(this.state.children).map(r);return delete c.appear,delete c.enter,delete c.exit,i===null?Y.createElement(de.Provider,{value:u},p):Y.createElement(de.Provider,{value:u},Y.createElement(i,c,p))},t}(Y.Component);ae.propTypes={};ae.defaultProps=rt;const st=ae;function at(e){const{className:t,classes:o,pulsate:l=!1,rippleX:n,rippleY:i,rippleSize:r,in:c,onExited:u,timeout:p}=e,[f,g]=a.useState(!1),b=x(t,o.ripple,o.rippleVisible,l&&o.ripplePulsate),C={width:r,height:r,top:-(r/2)+i,left:-(r/2)+n},h=x(o.child,f&&o.childLeaving,l&&o.childPulsate);return!c&&!f&&g(!0),a.useEffect(()=>{if(!c&&u!=null){const R=setTimeout(u,p);return()=>{clearTimeout(R)}}},[u,c,p]),$.jsx("span",{className:b,style:C,children:$.jsx("span",{className:h})})}const lt=Re("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),m=lt,ut=["center","classes","className"];let q=e=>e,he,me,be,ge;const ne=550,ct=80,pt=oe(he||(he=q`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),dt=oe(me||(me=q`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),ft=oe(be||(be=q`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),ht=re("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),mt=re(at,{name:"MuiTouchRipple",slot:"Ripple"})(ge||(ge=q`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`),m.rippleVisible,pt,ne,({theme:e})=>e.transitions.easing.easeInOut,m.ripplePulsate,({theme:e})=>e.transitions.duration.shorter,m.child,m.childLeaving,dt,ne,({theme:e})=>e.transitions.easing.easeInOut,m.childPulsate,ft,({theme:e})=>e.transitions.easing.easeInOut),bt=a.forwardRef(function(t,o){const l=ye({props:t,name:"MuiTouchRipple"}),{center:n=!1,classes:i={},className:r}=l,c=ie(l,ut),[u,p]=a.useState([]),f=a.useRef(0),g=a.useRef(null);a.useEffect(()=>{g.current&&(g.current(),g.current=null)},[u]);const b=a.useRef(!1),C=ze(),h=a.useRef(null),R=a.useRef(null),U=a.useCallback(d=>{const{pulsate:y,rippleX:M,rippleY:L,rippleSize:j,cb:_}=d;p(E=>[...E,$.jsx(mt,{classes:{ripple:x(i.ripple,m.ripple),rippleVisible:x(i.rippleVisible,m.rippleVisible),ripplePulsate:x(i.ripplePulsate,m.ripplePulsate),child:x(i.child,m.child),childLeaving:x(i.childLeaving,m.childLeaving),childPulsate:x(i.childPulsate,m.childPulsate)},timeout:ne,pulsate:y,rippleX:M,rippleY:L,rippleSize:j},f.current)]),f.current+=1,g.current=_},[i]),N=a.useCallback((d={},y={},M=()=>{})=>{const{pulsate:L=!1,center:j=n||y.pulsate,fakeElement:_=!1}=y;if((d==null?void 0:d.type)==="mousedown"&&b.current){b.current=!1;return}(d==null?void 0:d.type)==="touchstart"&&(b.current=!0);const E=_?null:R.current,w=E?E.getBoundingClientRect():{width:0,height:0,left:0,top:0};let v,P,D;if(j||d===void 0||d.clientX===0&&d.clientY===0||!d.clientX&&!d.touches)v=Math.round(w.width/2),P=Math.round(w.height/2);else{const{clientX:F,clientY:V}=d.touches&&d.touches.length>0?d.touches[0]:d;v=Math.round(F-w.left),P=Math.round(V-w.top)}if(j)D=Math.sqrt((2*w.width**2+w.height**2)/3),D%2===0&&(D+=1);else{const F=Math.max(Math.abs((E?E.clientWidth:0)-v),v)*2+2,V=Math.max(Math.abs((E?E.clientHeight:0)-P),P)*2+2;D=Math.sqrt(F**2+V**2)}d!=null&&d.touches?h.current===null&&(h.current=()=>{U({pulsate:L,rippleX:v,rippleY:P,rippleSize:D,cb:M})},C.start(ct,()=>{h.current&&(h.current(),h.current=null)})):U({pulsate:L,rippleX:v,rippleY:P,rippleSize:D,cb:M})},[n,U,C]),K=a.useCallback(()=>{N({},{pulsate:!0})},[N]),I=a.useCallback((d,y)=>{if(C.clear(),(d==null?void 0:d.type)==="touchend"&&h.current){h.current(),h.current=null,C.start(0,()=>{I(d,y)});return}h.current=null,p(M=>M.length>0?M.slice(1):M),g.current=y},[C]);return a.useImperativeHandle(o,()=>({pulsate:K,start:N,stop:I}),[K,N,I]),$.jsx(ht,A({className:x(m.root,i.root,r),ref:R},c,{children:$.jsx(st,{component:null,exit:!0,children:u})}))}),gt=bt;function Rt(e){return Ae("MuiButtonBase",e)}const yt=Re("MuiButtonBase",["root","disabled","focusVisible"]),Mt=yt,Et=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],Tt=e=>{const{disabled:t,focusVisible:o,focusVisibleClassName:l,classes:n}=e,r=Xe({root:["root",t&&"disabled",o&&"focusVisible"]},Rt,n);return o&&l&&(r.root+=` ${l}`),r},xt=re("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${Mt.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),Ct=a.forwardRef(function(t,o){const l=ye({props:t,name:"MuiButtonBase"}),{action:n,centerRipple:i=!1,children:r,className:c,component:u="button",disabled:p=!1,disableRipple:f=!1,disableTouchRipple:g=!1,focusRipple:b=!1,LinkComponent:C="a",onBlur:h,onClick:R,onContextMenu:U,onDragLeave:N,onFocus:K,onFocusVisible:I,onKeyDown:d,onKeyUp:y,onMouseDown:M,onMouseLeave:L,onMouseUp:j,onTouchEnd:_,onTouchMove:E,onTouchStart:w,tabIndex:v=0,TouchRippleProps:P,touchRippleRef:D,type:F}=l,V=ie(l,Et),O=a.useRef(null),T=a.useRef(null),Me=fe(T,D),{isFocusVisibleRef:le,onFocus:Ee,onBlur:Te,ref:xe}=Ze(),[k,X]=a.useState(!1);p&&k&&X(!1),a.useImperativeHandle(n,()=>({focusVisible:()=>{X(!0),O.current.focus()}}),[]);const[J,Ce]=a.useState(!1);a.useEffect(()=>{Ce(!0)},[]);const ve=J&&!f&&!p;a.useEffect(()=>{k&&b&&!f&&J&&T.current.pulsate()},[f,b,k,J]);function B(s,ce,Ke=g){return H(pe=>(ce&&ce(pe),!Ke&&T.current&&T.current[s](pe),!0))}const Ve=B("start",M),Be=B("stop",U),we=B("stop",N),Pe=B("stop",j),De=B("stop",s=>{k&&s.preventDefault(),L&&L(s)}),Le=B("start",w),Fe=B("stop",_),ke=B("stop",E),Se=B("stop",s=>{Te(s),le.current===!1&&X(!1),h&&h(s)},!1),$e=H(s=>{O.current||(O.current=s.currentTarget),Ee(s),le.current===!0&&(X(!0),I&&I(s)),K&&K(s)}),Q=()=>{const s=O.current;return u&&u!=="button"&&!(s.tagName==="A"&&s.href)},Z=a.useRef(!1),Ne=H(s=>{b&&!Z.current&&k&&T.current&&s.key===" "&&(Z.current=!0,T.current.stop(s,()=>{T.current.start(s)})),s.target===s.currentTarget&&Q()&&s.key===" "&&s.preventDefault(),d&&d(s),s.target===s.currentTarget&&Q()&&s.key==="Enter"&&!p&&(s.preventDefault(),R&&R(s))}),Ie=H(s=>{b&&s.key===" "&&T.current&&k&&!s.defaultPrevented&&(Z.current=!1,T.current.stop(s,()=>{T.current.pulsate(s)})),y&&y(s),R&&s.target===s.currentTarget&&Q()&&s.key===" "&&!s.defaultPrevented&&R(s)});let W=u;W==="button"&&(V.href||V.to)&&(W=C);const z={};W==="button"?(z.type=F===void 0?"button":F,z.disabled=p):(!V.href&&!V.to&&(z.role="button"),p&&(z["aria-disabled"]=p));const je=fe(o,xe,O),ue=A({},l,{centerRipple:i,component:u,disabled:p,disableRipple:f,disableTouchRipple:g,focusRipple:b,tabIndex:v,focusVisible:k}),Ue=Tt(ue);return $.jsxs(xt,A({as:W,className:x(Ue.root,c),ownerState:ue,onBlur:Se,onClick:R,onContextMenu:Be,onFocus:$e,onKeyDown:Ne,onKeyUp:Ie,onMouseDown:Ve,onMouseLeave:De,onMouseUp:Pe,onDragLeave:we,onTouchEnd:Fe,onTouchMove:ke,onTouchStart:Le,ref:je,tabIndex:p?-1:v,type:F},z,V,{children:[r,ve?$.jsx(gt,A({ref:Me,center:i},P)):null]}))}),Bt=Ct;export{Bt as B,Ze as u};

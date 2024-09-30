import{r as $,bn as Rr,n as Gt,o as Kt,_ as ot,D as Lt,j as Z,k as C,i as ut,z as St,bi as Er,y as Jt,p as nt,v as Qt,t as Zt,a2 as er,h as Cr,w as $r,bo as Ge,B as Wt,x as Ke,bj as Nt,bp as Je,bq as Ar}from"./index-14pqm9y1.js";import{P as Mr,u as jr}from"./Portal-YB56xSUH.js";import{u as Dr}from"./useControlled-qBYEK2eV.js";import{u as kr}from"./ButtonBase-ryrwXNwG.js";var ht={};Object.defineProperty(ht,"__esModule",{value:!0});var tr=ht.default=void 0,Br=Sr($),Lr=Rr;function rr(e){if(typeof WeakMap!="function")return null;var t=new WeakMap,r=new WeakMap;return(rr=function(o){return o?r:t})(e)}function Sr(e,t){if(!t&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var r=rr(t);if(r&&r.has(e))return r.get(e);var o={__proto__:null},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(i!=="default"&&Object.prototype.hasOwnProperty.call(e,i)){var l=n?Object.getOwnPropertyDescriptor(e,i):null;l&&(l.get||l.set)?Object.defineProperty(o,i,l):o[i]=e[i]}return o.default=e,r&&r.set(e,o),o}function Wr(e){return Object.keys(e).length===0}function Nr(e=null){const t=Br.useContext(Lr.ThemeContext);return!t||Wr(t)?e:t}tr=ht.default=Nr;var S="top",I="bottom",H="right",W="left",gt="auto",_e=[S,I,H,W],Oe="start",We="end",_r="clippingParents",or="viewport",ke="popper",Fr="reference",_t=_e.reduce(function(e,t){return e.concat([t+"-"+Oe,t+"-"+We])},[]),nr=[].concat(_e,[gt]).reduce(function(e,t){return e.concat([t,t+"-"+Oe,t+"-"+We])},[]),Ir="beforeRead",Hr="read",Vr="afterRead",Ur="beforeMain",qr="main",zr="afterMain",Xr="beforeWrite",Yr="write",Gr="afterWrite",Kr=[Ir,Hr,Vr,Ur,qr,zr,Xr,Yr,Gr];function te(e){return e?(e.nodeName||"").toLowerCase():null}function _(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function me(e){var t=_(e).Element;return e instanceof t||e instanceof Element}function F(e){var t=_(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function yt(e){if(typeof ShadowRoot>"u")return!1;var t=_(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function Jr(e){var t=e.state;Object.keys(t.elements).forEach(function(r){var o=t.styles[r]||{},n=t.attributes[r]||{},i=t.elements[r];!F(i)||!te(i)||(Object.assign(i.style,o),Object.keys(n).forEach(function(l){var s=n[l];s===!1?i.removeAttribute(l):i.setAttribute(l,s===!0?"":s)}))})}function Qr(e){var t=e.state,r={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,r.popper),t.styles=r,t.elements.arrow&&Object.assign(t.elements.arrow.style,r.arrow),function(){Object.keys(t.elements).forEach(function(o){var n=t.elements[o],i=t.attributes[o]||{},l=Object.keys(t.styles.hasOwnProperty(o)?t.styles[o]:r[o]),s=l.reduce(function(a,c){return a[c]="",a},{});!F(n)||!te(n)||(Object.assign(n.style,s),Object.keys(i).forEach(function(a){n.removeAttribute(a)}))})}}const Zr={name:"applyStyles",enabled:!0,phase:"write",fn:Jr,effect:Qr,requires:["computeStyles"]};function ee(e){return e.split("-")[0]}var ve=Math.max,rt=Math.min,Te=Math.round;function dt(){var e=navigator.userAgentData;return e!=null&&e.brands&&Array.isArray(e.brands)?e.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function ir(){return!/^((?!chrome|android).)*safari/i.test(dt())}function Re(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!1);var o=e.getBoundingClientRect(),n=1,i=1;t&&F(e)&&(n=e.offsetWidth>0&&Te(o.width)/e.offsetWidth||1,i=e.offsetHeight>0&&Te(o.height)/e.offsetHeight||1);var l=me(e)?_(e):window,s=l.visualViewport,a=!ir()&&r,c=(o.left+(a&&s?s.offsetLeft:0))/n,p=(o.top+(a&&s?s.offsetTop:0))/i,v=o.width/n,y=o.height/i;return{width:v,height:y,top:p,right:c+v,bottom:p+y,left:c,x:c,y:p}}function bt(e){var t=Re(e),r=e.offsetWidth,o=e.offsetHeight;return Math.abs(t.width-r)<=1&&(r=t.width),Math.abs(t.height-o)<=1&&(o=t.height),{x:e.offsetLeft,y:e.offsetTop,width:r,height:o}}function ar(e,t){var r=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(r&&yt(r)){var o=t;do{if(o&&e.isSameNode(o))return!0;o=o.parentNode||o.host}while(o)}return!1}function ne(e){return _(e).getComputedStyle(e)}function eo(e){return["table","td","th"].indexOf(te(e))>=0}function pe(e){return((me(e)?e.ownerDocument:e.document)||window.document).documentElement}function it(e){return te(e)==="html"?e:e.assignedSlot||e.parentNode||(yt(e)?e.host:null)||pe(e)}function Ft(e){return!F(e)||ne(e).position==="fixed"?null:e.offsetParent}function to(e){var t=/firefox/i.test(dt()),r=/Trident/i.test(dt());if(r&&F(e)){var o=ne(e);if(o.position==="fixed")return null}var n=it(e);for(yt(n)&&(n=n.host);F(n)&&["html","body"].indexOf(te(n))<0;){var i=ne(n);if(i.transform!=="none"||i.perspective!=="none"||i.contain==="paint"||["transform","perspective"].indexOf(i.willChange)!==-1||t&&i.willChange==="filter"||t&&i.filter&&i.filter!=="none")return n;n=n.parentNode}return null}function Fe(e){for(var t=_(e),r=Ft(e);r&&eo(r)&&ne(r).position==="static";)r=Ft(r);return r&&(te(r)==="html"||te(r)==="body"&&ne(r).position==="static")?t:r||to(e)||t}function wt(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function Le(e,t,r){return ve(e,rt(t,r))}function ro(e,t,r){var o=Le(e,t,r);return o>r?r:o}function sr(){return{top:0,right:0,bottom:0,left:0}}function pr(e){return Object.assign({},sr(),e)}function lr(e,t){return t.reduce(function(r,o){return r[o]=e,r},{})}var oo=function(t,r){return t=typeof t=="function"?t(Object.assign({},r.rects,{placement:r.placement})):t,pr(typeof t!="number"?t:lr(t,_e))};function no(e){var t,r=e.state,o=e.name,n=e.options,i=r.elements.arrow,l=r.modifiersData.popperOffsets,s=ee(r.placement),a=wt(s),c=[W,H].indexOf(s)>=0,p=c?"height":"width";if(!(!i||!l)){var v=oo(n.padding,r),y=bt(i),u=a==="y"?S:W,P=a==="y"?I:H,d=r.rects.reference[p]+r.rects.reference[a]-l[a]-r.rects.popper[p],m=l[a]-r.rects.reference[a],x=Fe(i),R=x?a==="y"?x.clientHeight||0:x.clientWidth||0:0,b=d/2-m/2,f=v[u],g=R-y[p]-v[P],h=R/2-y[p]/2+b,O=Le(f,h,g),A=a;r.modifiersData[o]=(t={},t[A]=O,t.centerOffset=O-h,t)}}function io(e){var t=e.state,r=e.options,o=r.element,n=o===void 0?"[data-popper-arrow]":o;n!=null&&(typeof n=="string"&&(n=t.elements.popper.querySelector(n),!n)||ar(t.elements.popper,n)&&(t.elements.arrow=n))}const ao={name:"arrow",enabled:!0,phase:"main",fn:no,effect:io,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Ee(e){return e.split("-")[1]}var so={top:"auto",right:"auto",bottom:"auto",left:"auto"};function po(e,t){var r=e.x,o=e.y,n=t.devicePixelRatio||1;return{x:Te(r*n)/n||0,y:Te(o*n)/n||0}}function It(e){var t,r=e.popper,o=e.popperRect,n=e.placement,i=e.variation,l=e.offsets,s=e.position,a=e.gpuAcceleration,c=e.adaptive,p=e.roundOffsets,v=e.isFixed,y=l.x,u=y===void 0?0:y,P=l.y,d=P===void 0?0:P,m=typeof p=="function"?p({x:u,y:d}):{x:u,y:d};u=m.x,d=m.y;var x=l.hasOwnProperty("x"),R=l.hasOwnProperty("y"),b=W,f=S,g=window;if(c){var h=Fe(r),O="clientHeight",A="clientWidth";if(h===_(r)&&(h=pe(r),ne(h).position!=="static"&&s==="absolute"&&(O="scrollHeight",A="scrollWidth")),h=h,n===S||(n===W||n===H)&&i===We){f=I;var E=v&&h===g&&g.visualViewport?g.visualViewport.height:h[O];d-=E-o.height,d*=a?1:-1}if(n===W||(n===S||n===I)&&i===We){b=H;var T=v&&h===g&&g.visualViewport?g.visualViewport.width:h[A];u-=T-o.width,u*=a?1:-1}}var j=Object.assign({position:s},c&&so),B=p===!0?po({x:u,y:d},_(r)):{x:u,y:d};if(u=B.x,d=B.y,a){var D;return Object.assign({},j,(D={},D[f]=R?"0":"",D[b]=x?"0":"",D.transform=(g.devicePixelRatio||1)<=1?"translate("+u+"px, "+d+"px)":"translate3d("+u+"px, "+d+"px, 0)",D))}return Object.assign({},j,(t={},t[f]=R?d+"px":"",t[b]=x?u+"px":"",t.transform="",t))}function lo(e){var t=e.state,r=e.options,o=r.gpuAcceleration,n=o===void 0?!0:o,i=r.adaptive,l=i===void 0?!0:i,s=r.roundOffsets,a=s===void 0?!0:s,c={placement:ee(t.placement),variation:Ee(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:n,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,It(Object.assign({},c,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:l,roundOffsets:a})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,It(Object.assign({},c,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:a})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}const co={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:lo,data:{}};var Qe={passive:!0};function fo(e){var t=e.state,r=e.instance,o=e.options,n=o.scroll,i=n===void 0?!0:n,l=o.resize,s=l===void 0?!0:l,a=_(t.elements.popper),c=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&c.forEach(function(p){p.addEventListener("scroll",r.update,Qe)}),s&&a.addEventListener("resize",r.update,Qe),function(){i&&c.forEach(function(p){p.removeEventListener("scroll",r.update,Qe)}),s&&a.removeEventListener("resize",r.update,Qe)}}const uo={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:fo,data:{}};var vo={left:"right",right:"left",bottom:"top",top:"bottom"};function tt(e){return e.replace(/left|right|bottom|top/g,function(t){return vo[t]})}var mo={start:"end",end:"start"};function Ht(e){return e.replace(/start|end/g,function(t){return mo[t]})}function xt(e){var t=_(e),r=t.pageXOffset,o=t.pageYOffset;return{scrollLeft:r,scrollTop:o}}function Pt(e){return Re(pe(e)).left+xt(e).scrollLeft}function ho(e,t){var r=_(e),o=pe(e),n=r.visualViewport,i=o.clientWidth,l=o.clientHeight,s=0,a=0;if(n){i=n.width,l=n.height;var c=ir();(c||!c&&t==="fixed")&&(s=n.offsetLeft,a=n.offsetTop)}return{width:i,height:l,x:s+Pt(e),y:a}}function go(e){var t,r=pe(e),o=xt(e),n=(t=e.ownerDocument)==null?void 0:t.body,i=ve(r.scrollWidth,r.clientWidth,n?n.scrollWidth:0,n?n.clientWidth:0),l=ve(r.scrollHeight,r.clientHeight,n?n.scrollHeight:0,n?n.clientHeight:0),s=-o.scrollLeft+Pt(e),a=-o.scrollTop;return ne(n||r).direction==="rtl"&&(s+=ve(r.clientWidth,n?n.clientWidth:0)-i),{width:i,height:l,x:s,y:a}}function Ot(e){var t=ne(e),r=t.overflow,o=t.overflowX,n=t.overflowY;return/auto|scroll|overlay|hidden/.test(r+n+o)}function cr(e){return["html","body","#document"].indexOf(te(e))>=0?e.ownerDocument.body:F(e)&&Ot(e)?e:cr(it(e))}function Se(e,t){var r;t===void 0&&(t=[]);var o=cr(e),n=o===((r=e.ownerDocument)==null?void 0:r.body),i=_(o),l=n?[i].concat(i.visualViewport||[],Ot(o)?o:[]):o,s=t.concat(l);return n?s:s.concat(Se(it(l)))}function vt(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function yo(e,t){var r=Re(e,!1,t==="fixed");return r.top=r.top+e.clientTop,r.left=r.left+e.clientLeft,r.bottom=r.top+e.clientHeight,r.right=r.left+e.clientWidth,r.width=e.clientWidth,r.height=e.clientHeight,r.x=r.left,r.y=r.top,r}function Vt(e,t,r){return t===or?vt(ho(e,r)):me(t)?yo(t,r):vt(go(pe(e)))}function bo(e){var t=Se(it(e)),r=["absolute","fixed"].indexOf(ne(e).position)>=0,o=r&&F(e)?Fe(e):e;return me(o)?t.filter(function(n){return me(n)&&ar(n,o)&&te(n)!=="body"}):[]}function wo(e,t,r,o){var n=t==="clippingParents"?bo(e):[].concat(t),i=[].concat(n,[r]),l=i[0],s=i.reduce(function(a,c){var p=Vt(e,c,o);return a.top=ve(p.top,a.top),a.right=rt(p.right,a.right),a.bottom=rt(p.bottom,a.bottom),a.left=ve(p.left,a.left),a},Vt(e,l,o));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function fr(e){var t=e.reference,r=e.element,o=e.placement,n=o?ee(o):null,i=o?Ee(o):null,l=t.x+t.width/2-r.width/2,s=t.y+t.height/2-r.height/2,a;switch(n){case S:a={x:l,y:t.y-r.height};break;case I:a={x:l,y:t.y+t.height};break;case H:a={x:t.x+t.width,y:s};break;case W:a={x:t.x-r.width,y:s};break;default:a={x:t.x,y:t.y}}var c=n?wt(n):null;if(c!=null){var p=c==="y"?"height":"width";switch(i){case Oe:a[c]=a[c]-(t[p]/2-r[p]/2);break;case We:a[c]=a[c]+(t[p]/2-r[p]/2);break}}return a}function Ne(e,t){t===void 0&&(t={});var r=t,o=r.placement,n=o===void 0?e.placement:o,i=r.strategy,l=i===void 0?e.strategy:i,s=r.boundary,a=s===void 0?_r:s,c=r.rootBoundary,p=c===void 0?or:c,v=r.elementContext,y=v===void 0?ke:v,u=r.altBoundary,P=u===void 0?!1:u,d=r.padding,m=d===void 0?0:d,x=pr(typeof m!="number"?m:lr(m,_e)),R=y===ke?Fr:ke,b=e.rects.popper,f=e.elements[P?R:y],g=wo(me(f)?f:f.contextElement||pe(e.elements.popper),a,p,l),h=Re(e.elements.reference),O=fr({reference:h,element:b,strategy:"absolute",placement:n}),A=vt(Object.assign({},b,O)),E=y===ke?A:h,T={top:g.top-E.top+x.top,bottom:E.bottom-g.bottom+x.bottom,left:g.left-E.left+x.left,right:E.right-g.right+x.right},j=e.modifiersData.offset;if(y===ke&&j){var B=j[n];Object.keys(T).forEach(function(D){var V=[H,I].indexOf(D)>=0?1:-1,U=[S,I].indexOf(D)>=0?"y":"x";T[D]+=B[U]*V})}return T}function xo(e,t){t===void 0&&(t={});var r=t,o=r.placement,n=r.boundary,i=r.rootBoundary,l=r.padding,s=r.flipVariations,a=r.allowedAutoPlacements,c=a===void 0?nr:a,p=Ee(o),v=p?s?_t:_t.filter(function(P){return Ee(P)===p}):_e,y=v.filter(function(P){return c.indexOf(P)>=0});y.length===0&&(y=v);var u=y.reduce(function(P,d){return P[d]=Ne(e,{placement:d,boundary:n,rootBoundary:i,padding:l})[ee(d)],P},{});return Object.keys(u).sort(function(P,d){return u[P]-u[d]})}function Po(e){if(ee(e)===gt)return[];var t=tt(e);return[Ht(e),t,Ht(t)]}function Oo(e){var t=e.state,r=e.options,o=e.name;if(!t.modifiersData[o]._skip){for(var n=r.mainAxis,i=n===void 0?!0:n,l=r.altAxis,s=l===void 0?!0:l,a=r.fallbackPlacements,c=r.padding,p=r.boundary,v=r.rootBoundary,y=r.altBoundary,u=r.flipVariations,P=u===void 0?!0:u,d=r.allowedAutoPlacements,m=t.options.placement,x=ee(m),R=x===m,b=a||(R||!P?[tt(m)]:Po(m)),f=[m].concat(b).reduce(function(re,K){return re.concat(ee(K)===gt?xo(t,{placement:K,boundary:p,rootBoundary:v,padding:c,flipVariations:P,allowedAutoPlacements:d}):K)},[]),g=t.rects.reference,h=t.rects.popper,O=new Map,A=!0,E=f[0],T=0;T<f.length;T++){var j=f[T],B=ee(j),D=Ee(j)===Oe,V=[S,I].indexOf(B)>=0,U=V?"width":"height",M=Ne(t,{placement:j,boundary:p,rootBoundary:v,altBoundary:y,padding:c}),k=V?D?H:W:D?I:S;g[U]>h[U]&&(k=tt(k));var G=tt(k),q=[];if(i&&q.push(M[B]<=0),s&&q.push(M[k]<=0,M[G]<=0),q.every(function(re){return re})){E=j,A=!1;break}O.set(j,q)}if(A)for(var he=P?3:1,ge=function(K){var ie=f.find(function(ae){var L=O.get(ae);if(L)return L.slice(0,K).every(function(z){return z})});if(ie)return E=ie,"break"},le=he;le>0;le--){var ce=ge(le);if(ce==="break")break}t.placement!==E&&(t.modifiersData[o]._skip=!0,t.placement=E,t.reset=!0)}}const To={name:"flip",enabled:!0,phase:"main",fn:Oo,requiresIfExists:["offset"],data:{_skip:!1}};function Ut(e,t,r){return r===void 0&&(r={x:0,y:0}),{top:e.top-t.height-r.y,right:e.right-t.width+r.x,bottom:e.bottom-t.height+r.y,left:e.left-t.width-r.x}}function qt(e){return[S,H,I,W].some(function(t){return e[t]>=0})}function Ro(e){var t=e.state,r=e.name,o=t.rects.reference,n=t.rects.popper,i=t.modifiersData.preventOverflow,l=Ne(t,{elementContext:"reference"}),s=Ne(t,{altBoundary:!0}),a=Ut(l,o),c=Ut(s,n,i),p=qt(a),v=qt(c);t.modifiersData[r]={referenceClippingOffsets:a,popperEscapeOffsets:c,isReferenceHidden:p,hasPopperEscaped:v},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":p,"data-popper-escaped":v})}const Eo={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:Ro};function Co(e,t,r){var o=ee(e),n=[W,S].indexOf(o)>=0?-1:1,i=typeof r=="function"?r(Object.assign({},t,{placement:e})):r,l=i[0],s=i[1];return l=l||0,s=(s||0)*n,[W,H].indexOf(o)>=0?{x:s,y:l}:{x:l,y:s}}function $o(e){var t=e.state,r=e.options,o=e.name,n=r.offset,i=n===void 0?[0,0]:n,l=nr.reduce(function(p,v){return p[v]=Co(v,t.rects,i),p},{}),s=l[t.placement],a=s.x,c=s.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=a,t.modifiersData.popperOffsets.y+=c),t.modifiersData[o]=l}const Ao={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:$o};function Mo(e){var t=e.state,r=e.name;t.modifiersData[r]=fr({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}const jo={name:"popperOffsets",enabled:!0,phase:"read",fn:Mo,data:{}};function Do(e){return e==="x"?"y":"x"}function ko(e){var t=e.state,r=e.options,o=e.name,n=r.mainAxis,i=n===void 0?!0:n,l=r.altAxis,s=l===void 0?!1:l,a=r.boundary,c=r.rootBoundary,p=r.altBoundary,v=r.padding,y=r.tether,u=y===void 0?!0:y,P=r.tetherOffset,d=P===void 0?0:P,m=Ne(t,{boundary:a,rootBoundary:c,padding:v,altBoundary:p}),x=ee(t.placement),R=Ee(t.placement),b=!R,f=wt(x),g=Do(f),h=t.modifiersData.popperOffsets,O=t.rects.reference,A=t.rects.popper,E=typeof d=="function"?d(Object.assign({},t.rects,{placement:t.placement})):d,T=typeof E=="number"?{mainAxis:E,altAxis:E}:Object.assign({mainAxis:0,altAxis:0},E),j=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,B={x:0,y:0};if(h){if(i){var D,V=f==="y"?S:W,U=f==="y"?I:H,M=f==="y"?"height":"width",k=h[f],G=k+m[V],q=k-m[U],he=u?-A[M]/2:0,ge=R===Oe?O[M]:A[M],le=R===Oe?-A[M]:-O[M],ce=t.elements.arrow,re=u&&ce?bt(ce):{width:0,height:0},K=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:sr(),ie=K[V],ae=K[U],L=Le(0,O[M],re[M]),z=b?O[M]/2-he-L-ie-T.mainAxis:ge-L-ie-T.mainAxis,ye=b?-O[M]/2+he+L+ae+T.mainAxis:le+L+ae+T.mainAxis,J=t.elements.arrow&&Fe(t.elements.arrow),at=J?f==="y"?J.clientTop||0:J.clientLeft||0:0,Ie=(D=j==null?void 0:j[f])!=null?D:0,He=k+z-Ie-at,Q=k+ye-Ie,Ce=Le(u?rt(G,He):G,k,u?ve(q,Q):q);h[f]=Ce,B[f]=Ce-k}if(s){var Ve,fe=f==="x"?S:W,Ue=f==="x"?I:H,X=h[g],be=g==="y"?"height":"width",ue=X+m[fe],we=X-m[Ue],xe=[S,W].indexOf(x)!==-1,Pe=(Ve=j==null?void 0:j[g])!=null?Ve:0,de=xe?ue:X-O[be]-A[be]-Pe+T.altAxis,$e=xe?X+O[be]+A[be]-Pe-T.altAxis:we,qe=u&&xe?ro(de,X,$e):Le(u?de:ue,X,u?$e:we);h[g]=qe,B[g]=qe-X}t.modifiersData[o]=B}}const Bo={name:"preventOverflow",enabled:!0,phase:"main",fn:ko,requiresIfExists:["offset"]};function Lo(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function So(e){return e===_(e)||!F(e)?xt(e):Lo(e)}function Wo(e){var t=e.getBoundingClientRect(),r=Te(t.width)/e.offsetWidth||1,o=Te(t.height)/e.offsetHeight||1;return r!==1||o!==1}function No(e,t,r){r===void 0&&(r=!1);var o=F(t),n=F(t)&&Wo(t),i=pe(t),l=Re(e,n,r),s={scrollLeft:0,scrollTop:0},a={x:0,y:0};return(o||!o&&!r)&&((te(t)!=="body"||Ot(i))&&(s=So(t)),F(t)?(a=Re(t,!0),a.x+=t.clientLeft,a.y+=t.clientTop):i&&(a.x=Pt(i))),{x:l.left+s.scrollLeft-a.x,y:l.top+s.scrollTop-a.y,width:l.width,height:l.height}}function _o(e){var t=new Map,r=new Set,o=[];e.forEach(function(i){t.set(i.name,i)});function n(i){r.add(i.name);var l=[].concat(i.requires||[],i.requiresIfExists||[]);l.forEach(function(s){if(!r.has(s)){var a=t.get(s);a&&n(a)}}),o.push(i)}return e.forEach(function(i){r.has(i.name)||n(i)}),o}function Fo(e){var t=_o(e);return Kr.reduce(function(r,o){return r.concat(t.filter(function(n){return n.phase===o}))},[])}function Io(e){var t;return function(){return t||(t=new Promise(function(r){Promise.resolve().then(function(){t=void 0,r(e())})})),t}}function Ho(e){var t=e.reduce(function(r,o){var n=r[o.name];return r[o.name]=n?Object.assign({},n,o,{options:Object.assign({},n.options,o.options),data:Object.assign({},n.data,o.data)}):o,r},{});return Object.keys(t).map(function(r){return t[r]})}var zt={placement:"bottom",modifiers:[],strategy:"absolute"};function Xt(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return!t.some(function(o){return!(o&&typeof o.getBoundingClientRect=="function")})}function Vo(e){e===void 0&&(e={});var t=e,r=t.defaultModifiers,o=r===void 0?[]:r,n=t.defaultOptions,i=n===void 0?zt:n;return function(s,a,c){c===void 0&&(c=i);var p={placement:"bottom",orderedModifiers:[],options:Object.assign({},zt,i),modifiersData:{},elements:{reference:s,popper:a},attributes:{},styles:{}},v=[],y=!1,u={state:p,setOptions:function(x){var R=typeof x=="function"?x(p.options):x;d(),p.options=Object.assign({},i,p.options,R),p.scrollParents={reference:me(s)?Se(s):s.contextElement?Se(s.contextElement):[],popper:Se(a)};var b=Fo(Ho([].concat(o,p.options.modifiers)));return p.orderedModifiers=b.filter(function(f){return f.enabled}),P(),u.update()},forceUpdate:function(){if(!y){var x=p.elements,R=x.reference,b=x.popper;if(Xt(R,b)){p.rects={reference:No(R,Fe(b),p.options.strategy==="fixed"),popper:bt(b)},p.reset=!1,p.placement=p.options.placement,p.orderedModifiers.forEach(function(T){return p.modifiersData[T.name]=Object.assign({},T.data)});for(var f=0;f<p.orderedModifiers.length;f++){if(p.reset===!0){p.reset=!1,f=-1;continue}var g=p.orderedModifiers[f],h=g.fn,O=g.options,A=O===void 0?{}:O,E=g.name;typeof h=="function"&&(p=h({state:p,options:A,name:E,instance:u})||p)}}}},update:Io(function(){return new Promise(function(m){u.forceUpdate(),m(p)})}),destroy:function(){d(),y=!0}};if(!Xt(s,a))return u;u.setOptions(c).then(function(m){!y&&c.onFirstUpdate&&c.onFirstUpdate(m)});function P(){p.orderedModifiers.forEach(function(m){var x=m.name,R=m.options,b=R===void 0?{}:R,f=m.effect;if(typeof f=="function"){var g=f({state:p,name:x,instance:u,options:b}),h=function(){};v.push(g||h)}})}function d(){v.forEach(function(m){return m()}),v=[]}return u}}var Uo=[uo,jo,co,Zr,Ao,To,Bo,ao,Eo],qo=Vo({defaultModifiers:Uo});function zo(e){return Gt("MuiPopper",e)}Kt("MuiPopper",["root"]);const Xo=["anchorEl","children","direction","disablePortal","modifiers","open","placement","popperOptions","popperRef","slotProps","slots","TransitionProps","ownerState"],Yo=["anchorEl","children","container","direction","disablePortal","keepMounted","modifiers","open","placement","popperOptions","popperRef","style","transition","slotProps","slots"];function Go(e,t){if(t==="ltr")return e;switch(e){case"bottom-end":return"bottom-start";case"bottom-start":return"bottom-end";case"top-end":return"top-start";case"top-start":return"top-end";default:return e}}function mt(e){return typeof e=="function"?e():e}function Ko(e){return e.nodeType!==void 0}const Jo=e=>{const{classes:t}=e;return Jt({root:["root"]},zo,t)},Qo={},Zo=$.forwardRef(function(t,r){var o;const{anchorEl:n,children:i,direction:l,disablePortal:s,modifiers:a,open:c,placement:p,popperOptions:v,popperRef:y,slotProps:u={},slots:P={},TransitionProps:d}=t,m=ot(t,Xo),x=$.useRef(null),R=ut(x,r),b=$.useRef(null),f=ut(b,y),g=$.useRef(f);St(()=>{g.current=f},[f]),$.useImperativeHandle(y,()=>b.current,[]);const h=Go(p,l),[O,A]=$.useState(h),[E,T]=$.useState(mt(n));$.useEffect(()=>{b.current&&b.current.forceUpdate()}),$.useEffect(()=>{n&&T(mt(n))},[n]),St(()=>{if(!E||!c)return;const U=G=>{A(G.placement)};let M=[{name:"preventOverflow",options:{altBoundary:s}},{name:"flip",options:{altBoundary:s}},{name:"onUpdate",enabled:!0,phase:"afterWrite",fn:({state:G})=>{U(G)}}];a!=null&&(M=M.concat(a)),v&&v.modifiers!=null&&(M=M.concat(v.modifiers));const k=qo(E,x.current,C({placement:h},v,{modifiers:M}));return g.current(k),()=>{k.destroy(),g.current(null)}},[E,s,a,c,v,h]);const j={placement:O};d!==null&&(j.TransitionProps=d);const B=Jo(t),D=(o=P.root)!=null?o:"div",V=Er({elementType:D,externalSlotProps:u.root,externalForwardedProps:m,additionalProps:{role:"tooltip",ref:R},ownerState:t,className:B.root});return Z.jsx(D,C({},V,{children:typeof i=="function"?i(j):i}))}),en=$.forwardRef(function(t,r){const{anchorEl:o,children:n,container:i,direction:l="ltr",disablePortal:s=!1,keepMounted:a=!1,modifiers:c,open:p,placement:v="bottom",popperOptions:y=Qo,popperRef:u,style:P,transition:d=!1,slotProps:m={},slots:x={}}=t,R=ot(t,Yo),[b,f]=$.useState(!0),g=()=>{f(!1)},h=()=>{f(!0)};if(!a&&!p&&(!d||b))return null;let O;if(i)O=i;else if(o){const T=mt(o);O=T&&Ko(T)?Lt(T).body:Lt(null).body}const A=!p&&a&&(!d||b)?"none":void 0,E=d?{in:p,onEnter:g,onExited:h}:void 0;return Z.jsx(Mr,{disablePortal:s,container:O,children:Z.jsx(Zo,C({anchorEl:o,direction:l,disablePortal:s,modifiers:c,ref:r,open:d?!b:p,placement:v,popperOptions:y,popperRef:u,slotProps:m,slots:x},R,{style:C({position:"fixed",top:0,left:0,display:A},P),TransitionProps:E,children:n}))})}),tn=en,rn=["anchorEl","component","components","componentsProps","container","disablePortal","keepMounted","modifiers","open","placement","popperOptions","popperRef","transition","slots","slotProps"],on=nt(tn,{name:"MuiPopper",slot:"Root",overridesResolver:(e,t)=>t.root})({}),nn=$.forwardRef(function(t,r){var o;const n=tr(),i=Qt({props:t,name:"MuiPopper"}),{anchorEl:l,component:s,components:a,componentsProps:c,container:p,disablePortal:v,keepMounted:y,modifiers:u,open:P,placement:d,popperOptions:m,popperRef:x,transition:R,slots:b,slotProps:f}=i,g=ot(i,rn),h=(o=b==null?void 0:b.root)!=null?o:a==null?void 0:a.Root,O=C({anchorEl:l,container:p,disablePortal:v,keepMounted:y,modifiers:u,open:P,placement:d,popperOptions:m,popperRef:x,transition:R},g);return Z.jsx(on,C({as:s,direction:n==null?void 0:n.direction,slots:{root:h},slotProps:f??c},O,{ref:r}))}),ur=nn;function an(e){return Gt("MuiTooltip",e)}const sn=Kt("MuiTooltip",["popper","popperInteractive","popperArrow","popperClose","tooltip","tooltipArrow","touch","tooltipPlacementLeft","tooltipPlacementRight","tooltipPlacementTop","tooltipPlacementBottom","arrow"]),se=sn,pn=["arrow","children","classes","components","componentsProps","describeChild","disableFocusListener","disableHoverListener","disableInteractive","disableTouchListener","enterDelay","enterNextDelay","enterTouchDelay","followCursor","id","leaveDelay","leaveTouchDelay","onClose","onOpen","open","placement","PopperComponent","PopperProps","slotProps","slots","title","TransitionComponent","TransitionProps"];function ln(e){return Math.round(e*1e5)/1e5}const cn=e=>{const{classes:t,disableInteractive:r,arrow:o,touch:n,placement:i}=e,l={popper:["popper",!r&&"popperInteractive",o&&"popperArrow"],tooltip:["tooltip",o&&"tooltipArrow",n&&"touch",`tooltipPlacement${Zt(i.split("-")[0])}`],arrow:["arrow"]};return Jt(l,an,t)},fn=nt(ur,{name:"MuiTooltip",slot:"Popper",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.popper,!r.disableInteractive&&t.popperInteractive,r.arrow&&t.popperArrow,!r.open&&t.popperClose]}})(({theme:e,ownerState:t,open:r})=>C({zIndex:(e.vars||e).zIndex.tooltip,pointerEvents:"none"},!t.disableInteractive&&{pointerEvents:"auto"},!r&&{pointerEvents:"none"},t.arrow&&{[`&[data-popper-placement*="bottom"] .${se.arrow}`]:{top:0,marginTop:"-0.71em","&::before":{transformOrigin:"0 100%"}},[`&[data-popper-placement*="top"] .${se.arrow}`]:{bottom:0,marginBottom:"-0.71em","&::before":{transformOrigin:"100% 0"}},[`&[data-popper-placement*="right"] .${se.arrow}`]:C({},t.isRtl?{right:0,marginRight:"-0.71em"}:{left:0,marginLeft:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"100% 100%"}}),[`&[data-popper-placement*="left"] .${se.arrow}`]:C({},t.isRtl?{left:0,marginLeft:"-0.71em"}:{right:0,marginRight:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"0 0"}})})),un=nt("div",{name:"MuiTooltip",slot:"Tooltip",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.tooltip,r.touch&&t.touch,r.arrow&&t.tooltipArrow,t[`tooltipPlacement${Zt(r.placement.split("-")[0])}`]]}})(({theme:e,ownerState:t})=>C({backgroundColor:e.vars?e.vars.palette.Tooltip.bg:er(e.palette.grey[700],.92),borderRadius:(e.vars||e).shape.borderRadius,color:(e.vars||e).palette.common.white,fontFamily:e.typography.fontFamily,padding:"4px 8px",fontSize:e.typography.pxToRem(11),maxWidth:300,margin:2,wordWrap:"break-word",fontWeight:e.typography.fontWeightMedium},t.arrow&&{position:"relative",margin:0},t.touch&&{padding:"8px 16px",fontSize:e.typography.pxToRem(14),lineHeight:`${ln(16/14)}em`,fontWeight:e.typography.fontWeightRegular},{[`.${se.popper}[data-popper-placement*="left"] &`]:C({transformOrigin:"right center"},t.isRtl?C({marginLeft:"14px"},t.touch&&{marginLeft:"24px"}):C({marginRight:"14px"},t.touch&&{marginRight:"24px"})),[`.${se.popper}[data-popper-placement*="right"] &`]:C({transformOrigin:"left center"},t.isRtl?C({marginRight:"14px"},t.touch&&{marginRight:"24px"}):C({marginLeft:"14px"},t.touch&&{marginLeft:"24px"})),[`.${se.popper}[data-popper-placement*="top"] &`]:C({transformOrigin:"center bottom",marginBottom:"14px"},t.touch&&{marginBottom:"24px"}),[`.${se.popper}[data-popper-placement*="bottom"] &`]:C({transformOrigin:"center top",marginTop:"14px"},t.touch&&{marginTop:"24px"})})),dn=nt("span",{name:"MuiTooltip",slot:"Arrow",overridesResolver:(e,t)=>t.arrow})(({theme:e})=>({overflow:"hidden",position:"absolute",width:"1em",height:"0.71em",boxSizing:"border-box",color:e.vars?e.vars.palette.Tooltip.bg:er(e.palette.grey[700],.9),"&::before":{content:'""',margin:"auto",display:"block",width:"100%",height:"100%",backgroundColor:"currentColor",transform:"rotate(45deg)"}}));let Ze=!1;const Yt=new Ar;let Be={x:0,y:0};function et(e,t){return(r,...o)=>{t&&t(r,...o),e(r,...o)}}const vn=$.forwardRef(function(t,r){var o,n,i,l,s,a,c,p,v,y,u,P,d,m,x,R,b,f,g;const h=Qt({props:t,name:"MuiTooltip"}),{arrow:O=!1,children:A,components:E={},componentsProps:T={},describeChild:j=!1,disableFocusListener:B=!1,disableHoverListener:D=!1,disableInteractive:V=!1,disableTouchListener:U=!1,enterDelay:M=100,enterNextDelay:k=0,enterTouchDelay:G=700,followCursor:q=!1,id:he,leaveDelay:ge=0,leaveTouchDelay:le=1500,onClose:ce,onOpen:re,open:K,placement:ie="bottom",PopperComponent:ae,PopperProps:L={},slotProps:z={},slots:ye={},title:J,TransitionComponent:at=Nt,TransitionProps:Ie}=h,He=ot(h,pn),Q=$.isValidElement(A)?A:Z.jsx("span",{children:A}),Ce=Cr(),Ve=$r(),[fe,Ue]=$.useState(),[X,be]=$.useState(null),ue=$.useRef(!1),we=V||q,xe=Ge(),Pe=Ge(),de=Ge(),$e=Ge(),[qe,Tt]=Dr({controlled:K,default:!1,name:"Tooltip",state:"open"});let oe=qe;const st=jr(he),Ae=$.useRef(),ze=Wt(()=>{Ae.current!==void 0&&(document.body.style.WebkitUserSelect=Ae.current,Ae.current=void 0),$e.clear()});$.useEffect(()=>ze,[ze]);const Rt=w=>{Yt.clear(),Ze=!0,Tt(!0),re&&!oe&&re(w)},Xe=Wt(w=>{Yt.start(800+ge,()=>{Ze=!1}),Tt(!1),ce&&oe&&ce(w),xe.start(Ce.transitions.duration.shortest,()=>{ue.current=!1})}),Ye=w=>{ue.current&&w.type!=="touchstart"||(fe&&fe.removeAttribute("title"),Pe.clear(),de.clear(),M||Ze&&k?Pe.start(Ze?k:M,()=>{Rt(w)}):Rt(w))},pt=w=>{Pe.clear(),de.start(ge,()=>{Xe(w)})},{isFocusVisibleRef:Et,onBlur:dr,onFocus:vr,ref:mr}=kr(),[,Ct]=$.useState(!1),$t=w=>{dr(w),Et.current===!1&&(Ct(!1),pt(w))},At=w=>{fe||Ue(w.currentTarget),vr(w),Et.current===!0&&(Ct(!0),Ye(w))},Mt=w=>{ue.current=!0;const N=Q.props;N.onTouchStart&&N.onTouchStart(w)},hr=w=>{Mt(w),de.clear(),xe.clear(),ze(),Ae.current=document.body.style.WebkitUserSelect,document.body.style.WebkitUserSelect="none",$e.start(G,()=>{document.body.style.WebkitUserSelect=Ae.current,Ye(w)})},gr=w=>{Q.props.onTouchEnd&&Q.props.onTouchEnd(w),ze(),de.start(le,()=>{Xe(w)})};$.useEffect(()=>{if(!oe)return;function w(N){(N.key==="Escape"||N.key==="Esc")&&Xe(N)}return document.addEventListener("keydown",w),()=>{document.removeEventListener("keydown",w)}},[Xe,oe]);const yr=ut(Q.ref,mr,Ue,r);!J&&J!==0&&(oe=!1);const lt=$.useRef(),br=w=>{const N=Q.props;N.onMouseMove&&N.onMouseMove(w),Be={x:w.clientX,y:w.clientY},lt.current&&lt.current.update()},Me={},ct=typeof J=="string";j?(Me.title=!oe&&ct&&!D?J:null,Me["aria-describedby"]=oe?st:null):(Me["aria-label"]=ct?J:null,Me["aria-labelledby"]=oe&&!ct?st:null);const Y=C({},Me,He,Q.props,{className:Ke(He.className,Q.props.className),onTouchStart:Mt,ref:yr},q?{onMouseMove:br}:{}),je={};U||(Y.onTouchStart=hr,Y.onTouchEnd=gr),D||(Y.onMouseOver=et(Ye,Y.onMouseOver),Y.onMouseLeave=et(pt,Y.onMouseLeave),we||(je.onMouseOver=Ye,je.onMouseLeave=pt)),B||(Y.onFocus=et(At,Y.onFocus),Y.onBlur=et($t,Y.onBlur),we||(je.onFocus=At,je.onBlur=$t));const wr=$.useMemo(()=>{var w;let N=[{name:"arrow",enabled:!!X,options:{element:X,padding:4}}];return(w=L.popperOptions)!=null&&w.modifiers&&(N=N.concat(L.popperOptions.modifiers)),C({},L.popperOptions,{modifiers:N})},[X,L]),De=C({},h,{isRtl:Ve,arrow:O,disableInteractive:we,placement:ie,PopperComponentProp:ae,touch:ue.current}),ft=cn(De),jt=(o=(n=ye.popper)!=null?n:E.Popper)!=null?o:fn,Dt=(i=(l=(s=ye.transition)!=null?s:E.Transition)!=null?l:at)!=null?i:Nt,kt=(a=(c=ye.tooltip)!=null?c:E.Tooltip)!=null?a:un,Bt=(p=(v=ye.arrow)!=null?v:E.Arrow)!=null?p:dn,xr=Je(jt,C({},L,(y=z.popper)!=null?y:T.popper,{className:Ke(ft.popper,L==null?void 0:L.className,(u=(P=z.popper)!=null?P:T.popper)==null?void 0:u.className)}),De),Pr=Je(Dt,C({},Ie,(d=z.transition)!=null?d:T.transition),De),Or=Je(kt,C({},(m=z.tooltip)!=null?m:T.tooltip,{className:Ke(ft.tooltip,(x=(R=z.tooltip)!=null?R:T.tooltip)==null?void 0:x.className)}),De),Tr=Je(Bt,C({},(b=z.arrow)!=null?b:T.arrow,{className:Ke(ft.arrow,(f=(g=z.arrow)!=null?g:T.arrow)==null?void 0:f.className)}),De);return Z.jsxs($.Fragment,{children:[$.cloneElement(Q,Y),Z.jsx(jt,C({as:ae??ur,placement:ie,anchorEl:q?{getBoundingClientRect:()=>({top:Be.y,left:Be.x,right:Be.x,bottom:Be.y,width:0,height:0})}:fe,popperRef:lt,open:fe?oe:!1,id:st,transition:!0},je,xr,{popperOptions:wr,children:({TransitionProps:w})=>Z.jsx(Dt,C({timeout:Ce.transitions.duration.shorter},w,Pr,{children:Z.jsxs(kt,C({},Or,{children:[J,O?Z.jsx(Bt,C({},Tr,{ref:be})):null]}))}))}))]})}),bn=vn;export{bn as T};

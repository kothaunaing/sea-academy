import{r as y,A as J,j as a,E as P,F as se,c as D,d as nt,aE as ge,b as gt,aF as lr,K as st,a9 as yt,ab as T,u as Ae,h as hr,G as Y,N as mr,aJ as oe,V as Pe,W as Te,aM as gr,aN as _e,f as $t,M as yr,aH as xr,aO as br,aP as vr,aQ as Sr,aR as wr,aS as jr,aT as Cr,Y as $r,aU as kr}from"./index-bR4MaZOJ.js";import{L as Ir}from"./LoadingScreen-yCIU47i-.js";import{D as Oe}from"./Dialog-pOjzfPCd.js";import{S as Nr}from"./Stack-WYlN-LHL.js";import{T as Er}from"./TextField-lZjHCUEq.js";import{P as ze}from"./ProfilePicture-NkVAKawu.js";import{g as Rr}from"./shortenText-S284lLsL.js";import{p as Ar}from"./prettyDateChat-PSq7xrmC.js";import{f as Pr}from"./fixTime-t8Fgsaat.js";import{s as Tr}from"./sortByDateNewer-X-Bb2bKS.js";import{S as q}from"./Skeleton-LRfmB9RD.js";import{M as Qt}from"./EmptyComponent-mtutYQst.js";import{S as _r}from"./SkeletonUser-pwlHAotJ.js";import{F as Or}from"./FabSearch-WOT9gh5L.js";import{A as zr}from"./AddSharp-TtdqpAmB.js";import{T as ye}from"./Tooltip-jKN6Sqwz.js";import"./Modal-AMyV4m0Z.js";import"./Portal-vj8E7tuN.js";import"./debounce-gOEKrWSg.js";import"./useControlled-Tg6WpoLH.js";import"./createSvgIcon-3G1Z23-M.js";import"./Fab-Obg5aW--.js";import"./SearchSharp-8pV05sN5.js";const Lr=({isCreating:t,setIsCreating:e})=>{const[r,n]=y.useState(""),{userId:s}=y.useContext(J),o=async()=>{if(!r.trim())return;const i=D(nt,"chats"),c=await ge(i,{name:r,image:null,lastMessage:{}}),u=D(gt(i,c.id),"members");await ge(u,{uid:s,joinedAt:lr()})};return a.jsx(Oe,{open:t,onClose:()=>e(!1),children:a.jsxs(P,{className:"m-5 ",children:[a.jsx("div",{className:"mb-2 font-bold",children:"Group Name"}),a.jsxs(Nr,{direction:"row",gap:1,children:[a.jsx(Er,{size:"small",placeholder:"Enter a name",value:r,onChange:i=>n(i.target.value)}),a.jsx(se,{onClick:()=>{r.trim()&&(o(),e(!1))},variant:"outlined",size:"small",children:"Create"})]})]})})};var C="-ms-",mt="-moz-",b="-webkit-",Le="comm",Ot="rule",ie="decl",Dr="@import",De="@keyframes",Fr="@layer",Fe=Math.abs,ae=String.fromCharCode,Zt=Object.assign;function Ur(t,e){return E(t,0)^45?(((e<<2^E(t,0))<<2^E(t,1))<<2^E(t,2))<<2^E(t,3):0}function Ue(t){return t.trim()}function U(t,e){return(t=e.exec(t))?t[0]:t}function h(t,e,r){return t.replace(e,r)}function Nt(t,e,r){return t.indexOf(e,r)}function E(t,e){return t.charCodeAt(e)|0}function ot(t,e,r){return t.slice(e,r)}function L(t){return t.length}function Ge(t){return t.length}function ht(t,e){return e.push(t),t}function Gr(t,e){return t.map(e).join("")}function xe(t,e){return t.filter(function(r){return!U(r,e)})}var zt=1,it=1,Be=0,_=0,N=0,ft="";function Lt(t,e,r,n,s,o,i,c){return{value:t,root:e,parent:r,type:n,props:s,children:o,line:zt,column:it,length:i,return:"",siblings:c}}function W(t,e){return Zt(Lt("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function et(t){for(;t.root;)t=W(t.root,{children:[t]});ht(t,t.siblings)}function Br(){return N}function Wr(){return N=_>0?E(ft,--_):0,it--,N===10&&(it=1,zt--),N}function z(){return N=_<Be?E(ft,_++):0,it++,N===10&&(it=1,zt++),N}function Q(){return E(ft,_)}function Et(){return _}function Dt(t,e){return ot(ft,t,e)}function Jt(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Yr(t){return zt=it=1,Be=L(ft=t),_=0,[]}function qr(t){return ft="",t}function qt(t){return Ue(Dt(_-1,Xt(t===91?t+2:t===40?t+1:t)))}function Hr(t){for(;(N=Q())&&N<33;)z();return Jt(t)>2||Jt(N)>3?"":" "}function Kr(t,e){for(;--e&&z()&&!(N<48||N>102||N>57&&N<65||N>70&&N<97););return Dt(t,Et()+(e<6&&Q()==32&&z()==32))}function Xt(t){for(;z();)switch(N){case t:return _;case 34:case 39:t!==34&&t!==39&&Xt(N);break;case 40:t===41&&Xt(t);break;case 92:z();break}return _}function Vr(t,e){for(;z()&&t+N!==57;)if(t+N===84&&Q()===47)break;return"/*"+Dt(e,_-1)+"*"+ae(t===47?t:z())}function Qr(t){for(;!Jt(Q());)z();return Dt(t,_)}function Zr(t){return qr(Rt("",null,null,null,[""],t=Yr(t),0,[0],t))}function Rt(t,e,r,n,s,o,i,c,u){for(var f=0,d=0,l=i,p=0,m=0,v=0,S=1,R=1,k=1,$=0,w="",j=s,I=o,x=n,g=w;R;)switch(v=$,$=z()){case 40:if(v!=108&&E(g,l-1)==58){Nt(g+=h(qt($),"&","&\f"),"&\f",Fe(f?c[f-1]:0))!=-1&&(k=-1);break}case 34:case 39:case 91:g+=qt($);break;case 9:case 10:case 13:case 32:g+=Hr(v);break;case 92:g+=Kr(Et()-1,7);continue;case 47:switch(Q()){case 42:case 47:ht(Jr(Vr(z(),Et()),e,r,u),u);break;default:g+="/"}break;case 123*S:c[f++]=L(g)*k;case 125*S:case 59:case 0:switch($){case 0:case 125:R=0;case 59+d:k==-1&&(g=h(g,/\f/g,"")),m>0&&L(g)-l&&ht(m>32?ve(g+";",n,r,l-1,u):ve(h(g," ","")+";",n,r,l-2,u),u);break;case 59:g+=";";default:if(ht(x=be(g,e,r,f,d,s,c,w,j=[],I=[],l,o),o),$===123)if(d===0)Rt(g,e,x,x,j,o,l,c,I);else switch(p===99&&E(g,3)===110?100:p){case 100:case 108:case 109:case 115:Rt(t,x,x,n&&ht(be(t,x,x,0,0,s,c,w,s,j=[],l,I),I),s,I,l,c,n?j:I);break;default:Rt(g,x,x,x,[""],I,0,c,I)}}f=d=m=0,S=k=1,w=g="",l=i;break;case 58:l=1+L(g),m=v;default:if(S<1){if($==123)--S;else if($==125&&S++==0&&Wr()==125)continue}switch(g+=ae($),$*S){case 38:k=d>0?1:(g+="\f",-1);break;case 44:c[f++]=(L(g)-1)*k,k=1;break;case 64:Q()===45&&(g+=qt(z())),p=Q(),d=l=L(w=g+=Qr(Et())),$++;break;case 45:v===45&&L(g)==2&&(S=0)}}return o}function be(t,e,r,n,s,o,i,c,u,f,d,l){for(var p=s-1,m=s===0?o:[""],v=Ge(m),S=0,R=0,k=0;S<n;++S)for(var $=0,w=ot(t,p+1,p=Fe(R=i[S])),j=t;$<v;++$)(j=Ue(R>0?m[$]+" "+w:h(w,/&\f/g,m[$])))&&(u[k++]=j);return Lt(t,e,r,s===0?Ot:c,u,f,d,l)}function Jr(t,e,r,n){return Lt(t,e,r,Le,ae(Br()),ot(t,2,-2),0,n)}function ve(t,e,r,n,s){return Lt(t,e,r,ie,ot(t,0,n),ot(t,n+1,-1),n,s)}function We(t,e,r){switch(Ur(t,e)){case 5103:return b+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return b+t+t;case 4789:return mt+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return b+t+mt+t+C+t+t;case 5936:switch(E(t,e+11)){case 114:return b+t+C+h(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return b+t+C+h(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return b+t+C+h(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return b+t+C+t+t;case 6165:return b+t+C+"flex-"+t+t;case 5187:return b+t+h(t,/(\w+).+(:[^]+)/,b+"box-$1$2"+C+"flex-$1$2")+t;case 5443:return b+t+C+"flex-item-"+h(t,/flex-|-self/g,"")+(U(t,/flex-|baseline/)?"":C+"grid-row-"+h(t,/flex-|-self/g,""))+t;case 4675:return b+t+C+"flex-line-pack"+h(t,/align-content|flex-|-self/g,"")+t;case 5548:return b+t+C+h(t,"shrink","negative")+t;case 5292:return b+t+C+h(t,"basis","preferred-size")+t;case 6060:return b+"box-"+h(t,"-grow","")+b+t+C+h(t,"grow","positive")+t;case 4554:return b+h(t,/([^-])(transform)/g,"$1"+b+"$2")+t;case 6187:return h(h(h(t,/(zoom-|grab)/,b+"$1"),/(image-set)/,b+"$1"),t,"")+t;case 5495:case 3959:return h(t,/(image-set\([^]*)/,b+"$1$`$1");case 4968:return h(h(t,/(.+:)(flex-)?(.*)/,b+"box-pack:$3"+C+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+b+t+t;case 4200:if(!U(t,/flex-|baseline/))return C+"grid-column-align"+ot(t,e)+t;break;case 2592:case 3360:return C+h(t,"template-","")+t;case 4384:case 3616:return r&&r.some(function(n,s){return e=s,U(n.props,/grid-\w+-end/)})?~Nt(t+(r=r[e].value),"span",0)?t:C+h(t,"-start","")+t+C+"grid-row-span:"+(~Nt(r,"span",0)?U(r,/\d+/):+U(r,/\d+/)-+U(t,/\d+/))+";":C+h(t,"-start","")+t;case 4896:case 4128:return r&&r.some(function(n){return U(n.props,/grid-\w+-start/)})?t:C+h(h(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return h(t,/(.+)-inline(.+)/,b+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(L(t)-1-e>6)switch(E(t,e+1)){case 109:if(E(t,e+4)!==45)break;case 102:return h(t,/(.+:)(.+)-([^]+)/,"$1"+b+"$2-$3$1"+mt+(E(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~Nt(t,"stretch",0)?We(h(t,"stretch","fill-available"),e,r)+t:t}break;case 5152:case 5920:return h(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(n,s,o,i,c,u,f){return C+s+":"+o+f+(i?C+s+"-span:"+(c?u:+u-+o)+f:"")+t});case 4949:if(E(t,e+6)===121)return h(t,":",":"+b)+t;break;case 6444:switch(E(t,E(t,14)===45?18:11)){case 120:return h(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+b+(E(t,14)===45?"inline-":"")+"box$3$1"+b+"$2$3$1"+C+"$2box$3")+t;case 100:return h(t,":",":"+C)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return h(t,"scroll-","scroll-snap-")+t}return t}function Tt(t,e){for(var r="",n=0;n<t.length;n++)r+=e(t[n],n,t,e)||"";return r}function Xr(t,e,r,n){switch(t.type){case Fr:if(t.children.length)break;case Dr:case ie:return t.return=t.return||t.value;case Le:return"";case De:return t.return=t.value+"{"+Tt(t.children,n)+"}";case Ot:if(!L(t.value=t.props.join(",")))return""}return L(r=Tt(t.children,n))?t.return=t.value+"{"+r+"}":""}function Mr(t){var e=Ge(t);return function(r,n,s,o){for(var i="",c=0;c<e;c++)i+=t[c](r,n,s,o)||"";return i}}function tn(t){return function(e){e.root||(e=e.return)&&t(e)}}function en(t,e,r,n){if(t.length>-1&&!t.return)switch(t.type){case ie:t.return=We(t.value,t.length,r);return;case De:return Tt([W(t,{value:h(t.value,"@","@"+b)})],n);case Ot:if(t.length)return Gr(r=t.props,function(s){switch(U(s,n=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":et(W(t,{props:[h(s,/:(read-\w+)/,":"+mt+"$1")]})),et(W(t,{props:[s]})),Zt(t,{props:xe(r,n)});break;case"::placeholder":et(W(t,{props:[h(s,/:(plac\w+)/,":"+b+"input-$1")]})),et(W(t,{props:[h(s,/:(plac\w+)/,":"+mt+"$1")]})),et(W(t,{props:[h(s,/:(plac\w+)/,C+"input-$1")]})),et(W(t,{props:[s]})),Zt(t,{props:xe(r,n)});break}return""})}}var rn={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},A={},at=typeof process<"u"&&A!==void 0&&(A.REACT_APP_SC_ATTR||A.SC_ATTR)||"data-styled",Ye="active",qe="data-styled-version",Ft="6.1.11",ce=`/*!sc*/
`,ue=typeof window<"u"&&"HTMLElement"in window,nn=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&A!==void 0&&A.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&A.REACT_APP_SC_DISABLE_SPEEDY!==""?A.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&A.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&A!==void 0&&A.SC_DISABLE_SPEEDY!==void 0&&A.SC_DISABLE_SPEEDY!==""&&A.SC_DISABLE_SPEEDY!=="false"&&A.SC_DISABLE_SPEEDY),Ut=Object.freeze([]),ct=Object.freeze({});function sn(t,e,r){return r===void 0&&(r=ct),t.theme!==r.theme&&t.theme||e||r.theme}var He=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),on=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,an=/(^-|-$)/g;function Se(t){return t.replace(on,"-").replace(an,"")}var cn=/(a)(d)/gi,kt=52,we=function(t){return String.fromCharCode(t+(t>25?39:97))};function Mt(t){var e,r="";for(e=Math.abs(t);e>kt;e=e/kt|0)r=we(e%kt)+r;return(we(e%kt)+r).replace(cn,"$1-$2")}var Ht,Ke=5381,rt=function(t,e){for(var r=e.length;r;)t=33*t^e.charCodeAt(--r);return t},Ve=function(t){return rt(Ke,t)};function Qe(t){return Mt(Ve(t)>>>0)}function un(t){return t.displayName||t.name||"Component"}function Kt(t){return typeof t=="string"&&!0}var Ze=typeof Symbol=="function"&&Symbol.for,Je=Ze?Symbol.for("react.memo"):60115,fn=Ze?Symbol.for("react.forward_ref"):60112,dn={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},pn={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Xe={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},ln=((Ht={})[fn]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ht[Je]=Xe,Ht);function je(t){return("type"in(e=t)&&e.type.$$typeof)===Je?Xe:"$$typeof"in t?ln[t.$$typeof]:dn;var e}var hn=Object.defineProperty,mn=Object.getOwnPropertyNames,Ce=Object.getOwnPropertySymbols,gn=Object.getOwnPropertyDescriptor,yn=Object.getPrototypeOf,$e=Object.prototype;function Me(t,e,r){if(typeof e!="string"){if($e){var n=yn(e);n&&n!==$e&&Me(t,n,r)}var s=mn(e);Ce&&(s=s.concat(Ce(e)));for(var o=je(t),i=je(e),c=0;c<s.length;++c){var u=s[c];if(!(u in pn||r&&r[u]||i&&u in i||o&&u in o)){var f=gn(e,u);try{hn(t,u,f)}catch{}}}}return t}function ut(t){return typeof t=="function"}function fe(t){return typeof t=="object"&&"styledComponentId"in t}function V(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function te(t,e){if(t.length===0)return"";for(var r=t[0],n=1;n<t.length;n++)r+=e?e+t[n]:t[n];return r}function xt(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function ee(t,e,r){if(r===void 0&&(r=!1),!r&&!xt(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var n=0;n<e.length;n++)t[n]=ee(t[n],e[n]);else if(xt(e))for(var n in e)t[n]=ee(t[n],e[n]);return t}function de(t,e){Object.defineProperty(t,"toString",{value:e})}function bt(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var xn=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var r=0,n=0;n<e;n++)r+=this.groupSizes[n];return r},t.prototype.insertRules=function(e,r){if(e>=this.groupSizes.length){for(var n=this.groupSizes,s=n.length,o=s;e>=o;)if((o<<=1)<0)throw bt(16,"".concat(e));this.groupSizes=new Uint32Array(o),this.groupSizes.set(n),this.length=o;for(var i=s;i<o;i++)this.groupSizes[i]=0}for(var c=this.indexOfGroup(e+1),u=(i=0,r.length);i<u;i++)this.tag.insertRule(c,r[i])&&(this.groupSizes[e]++,c++)},t.prototype.clearGroup=function(e){if(e<this.length){var r=this.groupSizes[e],n=this.indexOfGroup(e),s=n+r;this.groupSizes[e]=0;for(var o=n;o<s;o++)this.tag.deleteRule(n)}},t.prototype.getGroup=function(e){var r="";if(e>=this.length||this.groupSizes[e]===0)return r;for(var n=this.groupSizes[e],s=this.indexOfGroup(e),o=s+n,i=s;i<o;i++)r+="".concat(this.tag.getRule(i)).concat(ce);return r},t}(),At=new Map,_t=new Map,Pt=1,It=function(t){if(At.has(t))return At.get(t);for(;_t.has(Pt);)Pt++;var e=Pt++;return At.set(t,e),_t.set(e,t),e},bn=function(t,e){Pt=e+1,At.set(t,e),_t.set(e,t)},vn="style[".concat(at,"][").concat(qe,'="').concat(Ft,'"]'),Sn=new RegExp("^".concat(at,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),wn=function(t,e,r){for(var n,s=r.split(","),o=0,i=s.length;o<i;o++)(n=s[o])&&t.registerName(e,n)},jn=function(t,e){for(var r,n=((r=e.textContent)!==null&&r!==void 0?r:"").split(ce),s=[],o=0,i=n.length;o<i;o++){var c=n[o].trim();if(c){var u=c.match(Sn);if(u){var f=0|parseInt(u[1],10),d=u[2];f!==0&&(bn(d,f),wn(t,d,u[3]),t.getTag().insertRules(f,s)),s.length=0}else s.push(c)}}};function Cn(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var tr=function(t){var e=document.head,r=t||e,n=document.createElement("style"),s=function(c){var u=Array.from(c.querySelectorAll("style[".concat(at,"]")));return u[u.length-1]}(r),o=s!==void 0?s.nextSibling:null;n.setAttribute(at,Ye),n.setAttribute(qe,Ft);var i=Cn();return i&&n.setAttribute("nonce",i),r.insertBefore(n,o),n},$n=function(){function t(e){this.element=tr(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(r){if(r.sheet)return r.sheet;for(var n=document.styleSheets,s=0,o=n.length;s<o;s++){var i=n[s];if(i.ownerNode===r)return i}throw bt(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,r){try{return this.sheet.insertRule(r,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var r=this.sheet.cssRules[e];return r&&r.cssText?r.cssText:""},t}(),kn=function(){function t(e){this.element=tr(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,r){if(e<=this.length&&e>=0){var n=document.createTextNode(r);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),In=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,r){return e<=this.length&&(this.rules.splice(e,0,r),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),ke=ue,Nn={isServer:!ue,useCSSOMInjection:!nn},er=function(){function t(e,r,n){e===void 0&&(e=ct),r===void 0&&(r={});var s=this;this.options=T(T({},Nn),e),this.gs=r,this.names=new Map(n),this.server=!!e.isServer,!this.server&&ue&&ke&&(ke=!1,function(o){for(var i=document.querySelectorAll(vn),c=0,u=i.length;c<u;c++){var f=i[c];f&&f.getAttribute(at)!==Ye&&(jn(o,f),f.parentNode&&f.parentNode.removeChild(f))}}(this)),de(this,function(){return function(o){for(var i=o.getTag(),c=i.length,u="",f=function(l){var p=function(k){return _t.get(k)}(l);if(p===void 0)return"continue";var m=o.names.get(p),v=i.getGroup(l);if(m===void 0||v.length===0)return"continue";var S="".concat(at,".g").concat(l,'[id="').concat(p,'"]'),R="";m!==void 0&&m.forEach(function(k){k.length>0&&(R+="".concat(k,","))}),u+="".concat(v).concat(S,'{content:"').concat(R,'"}').concat(ce)},d=0;d<c;d++)f(d);return u}(s)})}return t.registerId=function(e){return It(e)},t.prototype.reconstructWithOptions=function(e,r){return r===void 0&&(r=!0),new t(T(T({},this.options),e),this.gs,r&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(r){var n=r.useCSSOMInjection,s=r.target;return r.isServer?new In(s):n?new $n(s):new kn(s)}(this.options),new xn(e)));var e},t.prototype.hasNameForId=function(e,r){return this.names.has(e)&&this.names.get(e).has(r)},t.prototype.registerName=function(e,r){if(It(e),this.names.has(e))this.names.get(e).add(r);else{var n=new Set;n.add(r),this.names.set(e,n)}},t.prototype.insertRules=function(e,r,n){this.registerName(e,r),this.getTag().insertRules(It(e),n)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(It(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),En=/&/g,Rn=/^\s*\/\/.*$/gm;function rr(t,e){return t.map(function(r){return r.type==="rule"&&(r.value="".concat(e," ").concat(r.value),r.value=r.value.replaceAll(",",",".concat(e," ")),r.props=r.props.map(function(n){return"".concat(e," ").concat(n)})),Array.isArray(r.children)&&r.type!=="@keyframes"&&(r.children=rr(r.children,e)),r})}function An(t){var e,r,n,s=t===void 0?ct:t,o=s.options,i=o===void 0?ct:o,c=s.plugins,u=c===void 0?Ut:c,f=function(p,m,v){return v.startsWith(r)&&v.endsWith(r)&&v.replaceAll(r,"").length>0?".".concat(e):p},d=u.slice();d.push(function(p){p.type===Ot&&p.value.includes("&")&&(p.props[0]=p.props[0].replace(En,r).replace(n,f))}),i.prefix&&d.push(en),d.push(Xr);var l=function(p,m,v,S){m===void 0&&(m=""),v===void 0&&(v=""),S===void 0&&(S="&"),e=S,r=m,n=new RegExp("\\".concat(r,"\\b"),"g");var R=p.replace(Rn,""),k=Zr(v||m?"".concat(v," ").concat(m," { ").concat(R," }"):R);i.namespace&&(k=rr(k,i.namespace));var $=[];return Tt(k,Mr(d.concat(tn(function(w){return $.push(w)})))),$};return l.hash=u.length?u.reduce(function(p,m){return m.name||bt(15),rt(p,m.name)},Ke).toString():"",l}var Pn=new er,re=An(),nr=st.createContext({shouldForwardProp:void 0,styleSheet:Pn,stylis:re});nr.Consumer;st.createContext(void 0);function Ie(){return y.useContext(nr)}var sr=function(){function t(e,r){var n=this;this.inject=function(s,o){o===void 0&&(o=re);var i=n.name+o.hash;s.hasNameForId(n.id,i)||s.insertRules(n.id,i,o(n.rules,i,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=r,de(this,function(){throw bt(12,String(n.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=re),this.name+e.hash},t}(),Tn=function(t){return t>="A"&&t<="Z"};function Ne(t){for(var e="",r=0;r<t.length;r++){var n=t[r];if(r===1&&n==="-"&&t[0]==="-")return t;Tn(n)?e+="-"+n.toLowerCase():e+=n}return e.startsWith("ms-")?"-"+e:e}var or=function(t){return t==null||t===!1||t===""},ir=function(t){var e,r,n=[];for(var s in t){var o=t[s];t.hasOwnProperty(s)&&!or(o)&&(Array.isArray(o)&&o.isCss||ut(o)?n.push("".concat(Ne(s),":"),o,";"):xt(o)?n.push.apply(n,yt(yt(["".concat(s," {")],ir(o),!1),["}"],!1)):n.push("".concat(Ne(s),": ").concat((e=s,(r=o)==null||typeof r=="boolean"||r===""?"":typeof r!="number"||r===0||e in rn||e.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return n};function Z(t,e,r,n){if(or(t))return[];if(fe(t))return[".".concat(t.styledComponentId)];if(ut(t)){if(!ut(o=t)||o.prototype&&o.prototype.isReactComponent||!e)return[t];var s=t(e);return Z(s,e,r,n)}var o;return t instanceof sr?r?(t.inject(r,n),[t.getName(n)]):[t]:xt(t)?ir(t):Array.isArray(t)?Array.prototype.concat.apply(Ut,t.map(function(i){return Z(i,e,r,n)})):[t.toString()]}function _n(t){for(var e=0;e<t.length;e+=1){var r=t[e];if(ut(r)&&!fe(r))return!1}return!0}var On=Ve(Ft),zn=function(){function t(e,r,n){this.rules=e,this.staticRulesId="",this.isStatic=(n===void 0||n.isStatic)&&_n(e),this.componentId=r,this.baseHash=rt(On,r),this.baseStyle=n,er.registerId(r)}return t.prototype.generateAndInjectStyles=function(e,r,n){var s=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,r,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&r.hasNameForId(this.componentId,this.staticRulesId))s=V(s,this.staticRulesId);else{var o=te(Z(this.rules,e,r,n)),i=Mt(rt(this.baseHash,o)>>>0);if(!r.hasNameForId(this.componentId,i)){var c=n(o,".".concat(i),void 0,this.componentId);r.insertRules(this.componentId,i,c)}s=V(s,i),this.staticRulesId=i}else{for(var u=rt(this.baseHash,n.hash),f="",d=0;d<this.rules.length;d++){var l=this.rules[d];if(typeof l=="string")f+=l;else if(l){var p=te(Z(l,e,r,n));u=rt(u,p+d),f+=p}}if(f){var m=Mt(u>>>0);r.hasNameForId(this.componentId,m)||r.insertRules(this.componentId,m,n(f,".".concat(m),void 0,this.componentId)),s=V(s,m)}}return s},t}(),ar=st.createContext(void 0);ar.Consumer;var Vt={};function Ln(t,e,r){var n=fe(t),s=t,o=!Kt(t),i=e.attrs,c=i===void 0?Ut:i,u=e.componentId,f=u===void 0?function(j,I){var x=typeof j!="string"?"sc":Se(j);Vt[x]=(Vt[x]||0)+1;var g="".concat(x,"-").concat(Qe(Ft+x+Vt[x]));return I?"".concat(I,"-").concat(g):g}(e.displayName,e.parentComponentId):u,d=e.displayName,l=d===void 0?function(j){return Kt(j)?"styled.".concat(j):"Styled(".concat(un(j),")")}(t):d,p=e.displayName&&e.componentId?"".concat(Se(e.displayName),"-").concat(e.componentId):e.componentId||f,m=n&&s.attrs?s.attrs.concat(c).filter(Boolean):c,v=e.shouldForwardProp;if(n&&s.shouldForwardProp){var S=s.shouldForwardProp;if(e.shouldForwardProp){var R=e.shouldForwardProp;v=function(j,I){return S(j,I)&&R(j,I)}}else v=S}var k=new zn(r,p,n?s.componentStyle:void 0);function $(j,I){return function(x,g,H){var M=x.attrs,le=x.componentStyle,tt=x.defaultProps,Gt=x.foldedComponentIds,vt=x.styledComponentId,fr=x.target,dr=st.useContext(ar),pr=Ie(),Bt=x.shouldForwardProp||pr.shouldForwardProp,he=sn(g,dr,tt)||ct,F=function(wt,pt,jt){for(var lt,K=T(T({},pt),{className:void 0,theme:jt}),Yt=0;Yt<wt.length;Yt+=1){var Ct=ut(lt=wt[Yt])?lt(K):lt;for(var B in Ct)K[B]=B==="className"?V(K[B],Ct[B]):B==="style"?T(T({},K[B]),Ct[B]):Ct[B]}return pt.className&&(K.className=V(K.className,pt.className)),K}(M,g,he),St=F.as||fr,dt={};for(var G in F)F[G]===void 0||G[0]==="$"||G==="as"||G==="theme"&&F.theme===he||(G==="forwardedAs"?dt.as=F.forwardedAs:Bt&&!Bt(G,St)||(dt[G]=F[G]));var me=function(wt,pt){var jt=Ie(),lt=wt.generateAndInjectStyles(pt,jt.styleSheet,jt.stylis);return lt}(le,F),Wt=V(Gt,vt);return me&&(Wt+=" "+me),F.className&&(Wt+=" "+F.className),dt[Kt(St)&&!He.has(St)?"class":"className"]=Wt,dt.ref=H,y.createElement(St,dt)}(w,j,I)}$.displayName=l;var w=st.forwardRef($);return w.attrs=m,w.componentStyle=k,w.displayName=l,w.shouldForwardProp=v,w.foldedComponentIds=n?V(s.foldedComponentIds,s.styledComponentId):"",w.styledComponentId=p,w.target=n?s.target:t,Object.defineProperty(w,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(j){this._foldedDefaultProps=n?function(I){for(var x=[],g=1;g<arguments.length;g++)x[g-1]=arguments[g];for(var H=0,M=x;H<M.length;H++)ee(I,M[H],!0);return I}({},s.defaultProps,j):j}}),de(w,function(){return".".concat(w.styledComponentId)}),o&&Me(w,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),w}function Ee(t,e){for(var r=[t[0]],n=0,s=e.length;n<s;n+=1)r.push(e[n],t[n+1]);return r}var Re=function(t){return Object.assign(t,{isCss:!0})};function cr(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];if(ut(t)||xt(t))return Re(Z(Ee(Ut,yt([t],e,!0))));var n=t;return e.length===0&&n.length===1&&typeof n[0]=="string"?Z(n):Re(Z(Ee(n,e)))}function ne(t,e,r){if(r===void 0&&(r=ct),!e)throw bt(1,e);var n=function(s){for(var o=[],i=1;i<arguments.length;i++)o[i-1]=arguments[i];return t(e,r,cr.apply(void 0,yt([s],o,!1)))};return n.attrs=function(s){return ne(t,e,T(T({},r),{attrs:Array.prototype.concat(r.attrs,s).filter(Boolean)}))},n.withConfig=function(s){return ne(t,e,T(T({},r),s))},n}var ur=function(t){return ne(Ln,t)},X=ur;He.forEach(function(t){X[t]=ur(t)});function pe(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];var n=te(cr.apply(void 0,yt([t],e,!1))),s=Qe(n);return new sr(s,n)}X.div`
  display: ${t=>t.$visible?"flex":"none"};
`;const O=242.776657104492,Dn=1.6,Fn=pe`
12.5% {
  stroke-dasharray: ${O*.14}px, ${O}px;
  stroke-dashoffset: -${O*.11}px;
}
43.75% {
  stroke-dasharray: ${O*.35}px, ${O}px;
  stroke-dashoffset: -${O*.35}px;
}
100% {
  stroke-dasharray: ${O*.01}px, ${O}px;
  stroke-dashoffset: -${O*.99}px;
}
`;X.path`
  stroke-dasharray: ${O*.01}px, ${O};
  stroke-dashoffset: 0;
  animation: ${Fn} ${Dn}s linear infinite;
`;const Un=pe`
to {
   transform: rotate(360deg);
 }
`;X.svg`
  animation: ${Un} 0.75s steps(12, end) infinite;
  animation-duration: 0.75s;
`;X.polyline`
  stroke-width: ${t=>t.width}px;
  stroke-linecap: round;

  &:nth-child(12n + 0) {
    stroke-opacity: 0.08;
  }

  &:nth-child(12n + 1) {
    stroke-opacity: 0.17;
  }

  &:nth-child(12n + 2) {
    stroke-opacity: 0.25;
  }

  &:nth-child(12n + 3) {
    stroke-opacity: 0.33;
  }

  &:nth-child(12n + 4) {
    stroke-opacity: 0.42;
  }

  &:nth-child(12n + 5) {
    stroke-opacity: 0.5;
  }

  &:nth-child(12n + 6) {
    stroke-opacity: 0.58;
  }

  &:nth-child(12n + 7) {
    stroke-opacity: 0.66;
  }

  &:nth-child(12n + 8) {
    stroke-opacity: 0.75;
  }

  &:nth-child(12n + 9) {
    stroke-opacity: 0.83;
  }

  &:nth-child(12n + 11) {
    stroke-opacity: 0.92;
  }
`;const Gn=pe`
to {
   stroke-dashoffset: 136;
 }
`;X.polygon`
  stroke-dasharray: 17;
  animation: ${Gn} 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`;X.svg`
  transform-origin: 50% 65%;
`;const Bn=({chat:t,index:e,chats:r})=>{var j;const[n,s]=y.useState(null),{newMessages:o}=y.useContext(J),[i,c]=y.useState(!0),[u,f]=y.useState(null),d=Ae(),[l,p]=y.useState(!0),[m,v]=y.useState(!1),[S,R]=y.useState(null),k=hr(),{mode:$}=k.palette,w=async()=>{c(!0);const I=D(gt(D(nt,"chats"),t.id),"messages");console.log("fetching message counts..."),await yr(I,s),$t(c)};return y.useEffect(()=>{const x=(()=>{const g=D(nt,"chats"),H=D(gt(g,t.id),"messages"),M=Pe(H,gr("timestamp","desc"),Te(1));return _e(M,tt=>{if(p(!0),console.log("fetching last message..."),tt.empty)v(!0),$t(p,300);else{const Gt=tt.docs.map(vt=>({id:vt.id,...vt.data()}));f(Gt[0]),w(),$t(p,300)}},tt=>{R("Error fetching last message: "+tt.message),$t(p,300)})})();return()=>{x&&x()}},[t.id]),a.jsxs(P,{className:`${$==="dark"?"hover:bg-slate-700":"hover:bg-slate-100"} flex min-h-[100px] gap-x-[2px] items-center cursor-pointer p-1 relative  border-t ${e===0&&"border-t-0"} ${e===r.length-1&&"border-b"}  border-slate-200`,onClick:()=>d(`/app/chatroom/${t.id}`),children:[a.jsx(P,{className:"flex items-start h-full mt-3",children:a.jsx("img",{alt:t.name,src:((j=t.image)==null?void 0:j.URL)||"images/sea-logo.jpg",className:"size-[48px] rounded-[8px] object-center object-cover mr-1"})}),a.jsxs(P,{className:"grid items-start h-full",children:[a.jsxs(Y,{variant:"h6",children:[t.name,a.jsx(Wn,{messageCounts:n})]}),a.jsxs(P,{container:!0,sx:{display:"grid"},children:[a.jsx(P,{item:!0,sx:{display:"flex",columnGap:"4px",alignItems:"center"},children:a.jsx(qn,{lastMessage:u})}),a.jsx(Yn,{lastMessage:u,isMessageEmpty:m,isMessageLoading:l,messageError:S}),a.jsx(Hn,{chat:t})]})]}),!mr(o,t.id)&&a.jsx("div",{className:"absolute shadow-md right-1 top-1 bg-red-500 size-4 rounded-full"})]})},Wn=({messageCounts:t})=>t?a.jsxs("div",{className:"mb-2 flex items-center rounded-md justify-start pr-1 font-[600]  min-h-6 min-w-6 text-sm top-0  text-slate-400 ",children:[t," messages"]}):a.jsx(q,{width:120}),Yn=({lastMessage:t,isMessageLoading:e,isMessageEmpty:r,messageError:n})=>{var s,o;return e?a.jsxs("div",{children:[a.jsx(q,{width:"70%"}),a.jsx(q,{width:"60%"})]}):r?a.jsx(Y,{color:"warning",children:"No messages yet"}):n?a.jsx(Y,{color:"warning",children:n}):a.jsxs(P,{sx:{marginTop:"2px",display:"grid"},children:[a.jsx(Y,{size:"small",variant:"caption",color:"textSecondary",children:Rr(t==null?void 0:t.content,30)}),(t==null?void 0:t.image)&&a.jsx("img",{alt:(s=t==null?void 0:t.image)==null?void 0:s.name,className:"w-12",src:(o=t==null?void 0:t.image)==null?void 0:o.URL}),a.jsxs(Y,{size:"small",variant:"caption",color:"textSecondary",children:[(t==null?void 0:t.editedTime)&&"edited ",Ar(Pr(t!=null&&t.editedTime?t.editedTime:t==null?void 0:t.timestamp))]})]})},qn=({lastMessage:t})=>{const{users:e}=y.useContext(J),[r,n]=y.useState(null),[s,o]=y.useState(!0);return oe(t==null?void 0:t.senderId,e,n,o,[t]),s?a.jsxs("div",{className:"flex items-center gap-x-1",children:[a.jsx(q,{variant:"circular",height:30,width:30}),a.jsx(q,{height:30,width:100})]}):a.jsxs(a.Fragment,{children:[a.jsx(ze,{size:"size-5",fontSize:"text-sm",name:r==null?void 0:r.name,image:r==null?void 0:r.image}),a.jsx(Y,{size:"small",fontWeight:"bold",variant:"caption",color:"textSecondary",children:r==null?void 0:r.name})]})},Hn=({chat:t})=>{const e=gt(nt,"chats",t.id),r=D(e,"typingUsers"),[n,s]=y.useState([]);if(y.useEffect(()=>{const i=_e(r,u=>{const f=u.docs.map(d=>({uid:d.id,...d.data()}));s(f)});return()=>{i&&i()}},[]),n.length>0)return a.jsx("div",{children:n.sort((o,i)=>Tr(o,i,"timestamp","older")).map(o=>a.jsx(Kn,{typingUser:o},`typing-users-${o.uid}`))})},Kn=({typingUser:t})=>{const{users:e}=y.useContext(J),[r,n]=y.useState(null),[s,o]=y.useState();return oe(t.uid,e,n,o),a.jsx("div",{className:"flex items-center gap-x-1 ",children:s?a.jsx(q,{width:30,height:30}):a.jsxs(a.Fragment,{children:[a.jsx(ze,{size:"size-5",fontSize:"text-sm",name:r==null?void 0:r.name,image:r==null?void 0:r.image}),a.jsx(q,{height:35,width:120})]})})},Ss=st.memo(()=>{const{setHeaderTitle:t,chats:e,setChats:r,myChats:n,setMyChats:s}=y.useContext(J),o=D(nt,"chats"),[i,c]=y.useState(!0),[u,f]=y.useState(!1),[d,l]=y.useState(null);return xr(o,[],r,c,f,!1,l,500),y.useEffect(()=>{t("Chat Room")},[]),i?a.jsx(Ir,{isLoading:i,text:"Loading chat rooms..."}):u?a.jsx(Qt,{text:"No chat rooms available"}):d?a.jsx(Qt,{text:d}):a.jsx(Vn,{myChats:n,setMyChats:s})}),Vn=({myChats:t,setMyChats:e})=>{const{chats:r,userData:n,userId:s}=y.useContext(J),[o,i]=y.useState(!1),[c,u]=y.useState(0),f=async(d,l)=>{const p=D(nt,"chats"),m=D(gt(p,d),"members"),v=Pe(m,Cr("uid","==",l),Te(1));return console.log("Checking if a member..."),!(await $r(v)).empty};return y.useEffect(()=>{(async()=>{const l=await Promise.all(r.map(async p=>{const m=await f(p.id,s);return m&&u(c+1),m?p:null}));e(l.filter(p=>p!==null))})()},[r]),c?a.jsxs(a.Fragment,{children:[a.jsx(Or,{}),o&&a.jsx(Lr,{isCreating:o,setIsCreating:i}),a.jsxs("div",{className:"m-5 overflow-hidden grid border border-slate-200 rounded-md shadow-md ",children:[a.jsx(Qn,{}),t.map((d,l)=>a.jsx(Bn,{chat:d,index:l,chats:r},d.id)),(n==null?void 0:n.isAdmin)&&a.jsx(P,{className:"m-2",children:a.jsx(se,{size:"small",onClick:()=>i(!0),startIcon:a.jsx(zr,{}),children:"Create group"})})]})]}):a.jsx(Qt,{text:"No chat rooms available for you"})},Qn=()=>{const[t,e]=y.useState(0),[r,n]=y.useState(!0),[s,o]=y.useState(!1);return y.useEffect(()=>{const c=(()=>{const u=br(kr,"/status"),f=vr(u,wr("status"),Sr("online"));return jr(f,l=>{n(!0);const p=l.val(),m=Object.entries(p).map(([v,S])=>({uid:v,...S}));e(m),n(!1)})})();return()=>{c&&c()}},[]),r?a.jsx(q,{sx:{m:1},height:40,width:60}):a.jsxs(P,{className:"p-2 border-b border-b-slate-200",children:[s&&a.jsx(Zn,{onlineUsers:t,open:s,setOpen:o}),a.jsxs(se,{onClick:()=>o(!0),size:"small",sx:{textDecoration:"underline",textTransform:"capitalize"},children:[t.length," online"]})]})},Zn=({onlineUsers:t,open:e,setOpen:r})=>a.jsxs(Oe,{fullWidth:!0,open:e,onClose:()=>r(!1),children:[a.jsx(P,{m:1,children:a.jsx(Y,{variant:"h6",children:"Online Users"})}),a.jsx(P,{sx:{m:1},className:"grid gap-y-2",children:t.map(n=>a.jsx(Jn,{user:n},n.uid))})]}),Jn=({user:t})=>{const{users:e}=y.useContext(J),[r,n]=y.useState(null),[s,o]=y.useState(!0),i=Ae();oe(t.uid,e,n,o);const c=()=>{i(`/app/profile/${t==null?void 0:t.uid}`)};return s?a.jsx(_r,{}):a.jsxs(P,{className:" flex items-center gap-x-1",children:[a.jsxs("div",{className:"relative",children:[a.jsx(ye,{arrow:!0,placement:"top",title:`View ${r==null?void 0:r.name}'s profile`,children:a.jsx("div",{onClick:c,className:"cursor-pointer",children:a.jsx("img",{className:"size-9 rounded-full shadow-md object-cover",src:r.image})})}),a.jsx("div",{className:"absolute size-[16px] bg-white rounded-full flex justify-center items-center bottom-0 right-0",children:a.jsx("div",{className:`size-3 rounded-full bg-green-500
          `})})]}),a.jsx(ye,{arrow:!0,placement:"top",title:`View ${r==null?void 0:r.name}'s profile`,children:a.jsx(Y,{onClick:c,sx:{cursor:"pointer"},variant:"h6",fontSize:"0.9rem",children:r.name})})]})};export{Ss as default};
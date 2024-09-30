import{o as ge,n as rn,p as on,q as sn,k as ce,a2 as fe,r as I,v as an,_ as un,z as cn,i as ln,j as d,x as Je,y as dn,a3 as Pe,a4 as c,a5 as y,a6 as A,a7 as l,a8 as _,a9 as Se,aa as Ne,ab as Ae,ac as Oe,ad as $e,ae as Ye,af as Xe,ag as kt,ah as hn,ai as fn,aj as pn,ak as vn,al as O,am as Ie,an as mn,ao as gn,ap as In,aq as oe,ar as se,A as Le,E as R,F as W,as as yn,at as _n,au as Tn,h as wn,b as Qe,H as Ze,d as et,av as En,u as kn,R as Cn,aw as re,G as bn,ax as Rn,ay as Pn,az as Sn,aA as Nn}from"./index-14pqm9y1.js";import{L as An}from"./LoadingScreen-EYXdXKre.js";import{P as On}from"./ProfilePicture-N-yMezIS.js";import{i as Ln}from"./browser-image-compression-9kymdGFS.js";import{L as tt,S as Un,T as Ce}from"./TextField-yLRiE9R7.js";import{B as xn}from"./ButtonBase-ryrwXNwG.js";import{C as Mn}from"./ConfirmDelete-RLdVewKK.js";import{D as Ct}from"./Dialog-7UnCDBMC.js";import{T as P}from"./Typography-F2i8tb5R.js";import{S as Y}from"./Stack-bBqHnaWs.js";import{B as K}from"./Button-dux8T5OH.js";import{T as Te}from"./Tooltip-cTALVPIn.js";import{S as N}from"./Skeleton-aRLWJJ7b.js";import{I as nt}from"./IconButton-x0ar69Y7.js";import{E as Dn}from"./EditSharp-Qr3GQduu.js";import{C as Fn}from"./ContentCopySharp-4gTE_PZU.js";import{L as Vn}from"./LogoutSharp-GqSCD7OJ.js";import{U as jn}from"./UpdateSharp-JbtgS1fB.js";import"./Portal-YB56xSUH.js";import"./Modal-XJP-E1k3.js";import"./debounce-gOEKrWSg.js";import"./useControlled-qBYEK2eV.js";import"./createSvgIcon-BoAk_7pD.js";const Hn=ge("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]),rt=Hn,qn=ge("MuiListItemIcon",["root","alignItemsFlexStart"]),it=qn,Gn=ge("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]),ot=Gn;function zn(n){return rn("MuiMenuItem",n)}const Wn=ge("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),ie=Wn,Kn=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex","className"],Bn=(n,e)=>{const{ownerState:t}=n;return[e.root,t.dense&&e.dense,t.divider&&e.divider,!t.disableGutters&&e.gutters]},Jn=n=>{const{disabled:e,dense:t,divider:r,disableGutters:i,selected:o,classes:s}=n,u=dn({root:["root",t&&"dense",e&&"disabled",!i&&"gutters",r&&"divider",o&&"selected"]},zn,s);return ce({},s,u)},$n=on(xn,{shouldForwardProp:n=>sn(n)||n==="classes",name:"MuiMenuItem",slot:"Root",overridesResolver:Bn})(({theme:n,ownerState:e})=>ce({},n.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!e.disableGutters&&{paddingLeft:16,paddingRight:16},e.divider&&{borderBottom:`1px solid ${(n.vars||n).palette.divider}`,backgroundClip:"padding-box"},{"&:hover":{textDecoration:"none",backgroundColor:(n.vars||n).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${ie.selected}`]:{backgroundColor:n.vars?`rgba(${n.vars.palette.primary.mainChannel} / ${n.vars.palette.action.selectedOpacity})`:fe(n.palette.primary.main,n.palette.action.selectedOpacity),[`&.${ie.focusVisible}`]:{backgroundColor:n.vars?`rgba(${n.vars.palette.primary.mainChannel} / calc(${n.vars.palette.action.selectedOpacity} + ${n.vars.palette.action.focusOpacity}))`:fe(n.palette.primary.main,n.palette.action.selectedOpacity+n.palette.action.focusOpacity)}},[`&.${ie.selected}:hover`]:{backgroundColor:n.vars?`rgba(${n.vars.palette.primary.mainChannel} / calc(${n.vars.palette.action.selectedOpacity} + ${n.vars.palette.action.hoverOpacity}))`:fe(n.palette.primary.main,n.palette.action.selectedOpacity+n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:n.vars?`rgba(${n.vars.palette.primary.mainChannel} / ${n.vars.palette.action.selectedOpacity})`:fe(n.palette.primary.main,n.palette.action.selectedOpacity)}},[`&.${ie.focusVisible}`]:{backgroundColor:(n.vars||n).palette.action.focus},[`&.${ie.disabled}`]:{opacity:(n.vars||n).palette.action.disabledOpacity},[`& + .${rt.root}`]:{marginTop:n.spacing(1),marginBottom:n.spacing(1)},[`& + .${rt.inset}`]:{marginLeft:52},[`& .${ot.root}`]:{marginTop:0,marginBottom:0},[`& .${ot.inset}`]:{paddingLeft:36},[`& .${it.root}`]:{minWidth:36}},!e.dense&&{[n.breakpoints.up("sm")]:{minHeight:"auto"}},e.dense&&ce({minHeight:32,paddingTop:4,paddingBottom:4},n.typography.body2,{[`& .${it.root} svg`]:{fontSize:"1.25rem"}}))),Yn=I.forwardRef(function(e,t){const r=an({props:e,name:"MuiMenuItem"}),{autoFocus:i=!1,component:o="li",dense:s=!1,divider:a=!1,disableGutters:u=!1,focusVisibleClassName:f,role:h="menuitem",tabIndex:p,className:g}=r,T=un(r,Kn),b=I.useContext(tt),k=I.useMemo(()=>({dense:s||b.dense||!1,disableGutters:u}),[b.dense,s,u]),E=I.useRef(null);cn(()=>{i&&E.current&&E.current.focus()},[i]);const C=ce({},r,{dense:k.dense,divider:a,disableGutters:u}),F=Jn(r),U=ln(E,t);let G;return r.disabled||(G=p!==void 0?p:-1),d.jsx(tt.Provider,{value:k,children:d.jsx($n,ce({ref:U,role:h,tabIndex:G,component:o,focusVisibleClassName:Je(F.focusVisible,f),className:Je(F.root,g)},T,{ownerState:C,classes:F}))})}),Xn=Yn,st=({options:n,setValue:e,label:t,gender:r})=>{const[i,o]=I.useState(r),s=a=>{o(a.target.value)};return I.useEffect(()=>{e(i)},[i]),I.useEffect(()=>{o(r)},[r]),d.jsx(Un,{size:"small",variant:"standard",id:t,labelId:t,value:i,onChange:s,label:t,displayEmpty:!0,children:n.map(a=>d.jsx(Xn,{value:a.value,children:a.label},a.value))})};var at="__sak";function bt(){var n;return n={},n["dependent-sdk-initialized-before-auth"]="Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",n}var Qn=bt,be=new Pe("auth","Firebase",bt());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var X=new gn("@firebase/auth");function Zn(n){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];X.logLevel<=kt.WARN&&X.warn.apply(X,A(["Auth (".concat(Se,"): ").concat(n)],e,!1))}function pe(n){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];X.logLevel<=kt.ERROR&&X.error.apply(X,A(["Auth (".concat(Se,"): ").concat(n)],e,!1))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D(n){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];throw xe.apply(void 0,A([n],e,!1))}function Ue(n){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];return xe.apply(void 0,A([n],e,!1))}function er(n,e,t){var r,i=_(_({},Qn()),(r={},r[e]=t,r)),o=new Pe("auth","Firebase",i);return o.create(e,{appName:n.name})}function xe(n){for(var e,t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(typeof n!="string"){var i=t[0],o=A([],t.slice(1),!0);return o[0]&&(o[0].appName=n.name),(e=n._errorFactory).create.apply(e,A([i],o,!1))}return be.create.apply(be,A([n],t,!1))}function m(n,e){for(var t=[],r=2;r<arguments.length;r++)t[r-2]=arguments[r];if(!n)throw xe.apply(void 0,A([e],t,!1))}function x(n){var e="INTERNAL ASSERTION FAILED: "+n;throw pe(e),new Error(e)}function Q(n,e){n||x(e)}function tr(){return ut()==="http:"||ut()==="https:"}function ut(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nr(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(tr()||In()||"connection"in navigator)?navigator.onLine:!0}function rr(){if(typeof navigator>"u")return null;var n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ir=function(){function n(e,t){this.shortDelay=e,this.longDelay=t,Q(t>e,"Short delay should be less than long delay!"),this.isMobile=hn()||fn()}return n.prototype.get=function(){return nr()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)},n}();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function or(n,e){Q(n.emulator,"Emulator should always be set here");var t=n.emulator.url;return e?"".concat(t).concat(e.startsWith("/")?e.slice(1):e):t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Rt=function(){function n(){}return n.initialize=function(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)},n.fetch=function(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;x("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")},n.headers=function(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;x("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")},n.response=function(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;x("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")},n}();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var v,sr=(v={},v.CREDENTIAL_MISMATCH="custom-token-mismatch",v.MISSING_CUSTOM_TOKEN="internal-error",v.INVALID_IDENTIFIER="invalid-email",v.MISSING_CONTINUE_URI="internal-error",v.INVALID_PASSWORD="wrong-password",v.MISSING_PASSWORD="missing-password",v.INVALID_LOGIN_CREDENTIALS="invalid-credential",v.EMAIL_EXISTS="email-already-in-use",v.PASSWORD_LOGIN_DISABLED="operation-not-allowed",v.INVALID_IDP_RESPONSE="invalid-credential",v.INVALID_PENDING_TOKEN="invalid-credential",v.FEDERATED_USER_ID_ALREADY_LINKED="credential-already-in-use",v.MISSING_REQ_TYPE="internal-error",v.EMAIL_NOT_FOUND="user-not-found",v.RESET_PASSWORD_EXCEED_LIMIT="too-many-requests",v.EXPIRED_OOB_CODE="expired-action-code",v.INVALID_OOB_CODE="invalid-action-code",v.MISSING_OOB_CODE="internal-error",v.CREDENTIAL_TOO_OLD_LOGIN_AGAIN="requires-recent-login",v.INVALID_ID_TOKEN="invalid-user-token",v.TOKEN_EXPIRED="user-token-expired",v.USER_NOT_FOUND="user-token-expired",v.TOO_MANY_ATTEMPTS_TRY_LATER="too-many-requests",v.PASSWORD_DOES_NOT_MEET_REQUIREMENTS="password-does-not-meet-requirements",v.INVALID_CODE="invalid-verification-code",v.INVALID_SESSION_INFO="invalid-verification-id",v.INVALID_TEMPORARY_PROOF="invalid-credential",v.MISSING_SESSION_INFO="missing-verification-id",v.SESSION_EXPIRED="code-expired",v.MISSING_ANDROID_PACKAGE_NAME="missing-android-pkg-name",v.UNAUTHORIZED_DOMAIN="unauthorized-continue-uri",v.INVALID_OAUTH_CLIENT_ID="invalid-oauth-client-id",v.ADMIN_ONLY_OPERATION="admin-restricted-operation",v.INVALID_MFA_PENDING_CREDENTIAL="invalid-multi-factor-session",v.MFA_ENROLLMENT_NOT_FOUND="multi-factor-info-not-found",v.MISSING_MFA_ENROLLMENT_ID="missing-multi-factor-info",v.MISSING_MFA_PENDING_CREDENTIAL="missing-multi-factor-session",v.SECOND_FACTOR_EXISTS="second-factor-already-in-use",v.SECOND_FACTOR_LIMIT_EXCEEDED="maximum-second-factor-count-exceeded",v.BLOCKING_FUNCTION_ERROR_RESPONSE="internal-error",v.RECAPTCHA_NOT_ENABLED="recaptcha-not-enabled",v.MISSING_RECAPTCHA_TOKEN="missing-recaptcha-token",v.INVALID_RECAPTCHA_TOKEN="invalid-recaptcha-token",v.INVALID_RECAPTCHA_ACTION="invalid-recaptcha-action",v.MISSING_CLIENT_TYPE="missing-client-type",v.MISSING_RECAPTCHA_VERSION="missing-recaptcha-version",v.INVALID_RECAPTCHA_VERSION="invalid-recaptcha-version",v.INVALID_REQ_TYPE="invalid-req-type",v);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ar=new ir(3e4,6e4);function L(n,e){return n.tenantId&&!e.tenantId?_(_({},e),{tenantId:n.tenantId}):e}function B(n,e,t,r,i){return i===void 0&&(i={}),c(this,void 0,void 0,function(){var o=this;return l(this,function(s){return[2,Pt(n,i,function(){return c(o,void 0,void 0,function(){var a,u,f,h;return l(this,function(p){switch(p.label){case 0:return a={},u={},r&&(e==="GET"?u=r:a={body:JSON.stringify(r)}),f=Ae(_({key:n.config.apiKey},u)).slice(1),[4,n._getAdditionalHeaders()];case 1:return h=p.sent(),h["Content-Type"]="application/json",n.languageCode&&(h["X-Firebase-Locale"]=n.languageCode),[2,Rt.fetch()(St(n,n.config.apiHost,t,f),_({method:e,headers:h,referrerPolicy:"no-referrer"},a))]}})})})]})})}function Pt(n,e,t){return c(this,void 0,void 0,function(){var r,i,o,s,a,u,f,h,p,g;return l(this,function(T){switch(T.label){case 0:n._canInitEmulator=!1,r=_(_({},sr),e),T.label=1;case 1:return T.trys.push([1,4,,5]),i=new cr(n),[4,Promise.race([t(),i.promise])];case 2:return o=T.sent(),i.clearNetworkTimeout(),[4,o.json()];case 3:if(s=T.sent(),"needConfirmation"in s)throw ae(n,"account-exists-with-different-credential",s);if(o.ok&&!("errorMessage"in s))return[2,s];if(a=o.ok?s.errorMessage:s.error.message,u=a.split(" : "),f=u[0],h=u[1],f==="FEDERATED_USER_ID_ALREADY_LINKED")throw ae(n,"credential-already-in-use",s);if(f==="EMAIL_EXISTS")throw ae(n,"email-already-in-use",s);if(f==="USER_DISABLED")throw ae(n,"user-disabled",s);if(p=r[f]||f.toLowerCase().replace(/[_\s]+/g,"-"),h)throw er(n,p,h);return D(n,p),[3,5];case 4:if(g=T.sent(),g instanceof Oe)throw g;return D(n,"network-request-failed",{message:String(g)}),[3,5];case 5:return[2]}})})}function J(n,e,t,r,i){return i===void 0&&(i={}),c(this,void 0,void 0,function(){var o;return l(this,function(s){switch(s.label){case 0:return[4,B(n,e,t,r,i)];case 1:return o=s.sent(),"mfaPendingCredential"in o&&D(n,"multi-factor-auth-required",{_serverResponse:o}),[2,o]}})})}function St(n,e,t,r){var i="".concat(e).concat(t,"?").concat(r);return n.config.emulator?or(n.config,i):"".concat(n.config.apiScheme,"://").concat(i)}function ur(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}var cr=function(){function n(e){var t=this;this.auth=e,this.timer=null,this.promise=new Promise(function(r,i){t.timer=setTimeout(function(){return i(Ue(t.auth,"network-request-failed"))},ar.get())})}return n.prototype.clearNetworkTimeout=function(){clearTimeout(this.timer)},n}();function ae(n,e,t){var r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);var i=Ue(n,e,r);return i.customData._tokenResponse=t,i}function ct(n){return n!==void 0&&n.enterprise!==void 0}var lr=function(){function n(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}return n.prototype.getProviderEnforcementState=function(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(var t=0,r=this.recaptchaEnforcementState;t<r.length;t++){var i=r[t];if(i.provider&&i.provider===e)return ur(i.enforcementState)}return null},n.prototype.isProviderEnabled=function(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"},n}();function dr(n,e){return c(this,void 0,void 0,function(){return l(this,function(t){return[2,B(n,"GET","/v2/recaptchaConfig",L(n,e))]})})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hr(n,e){return c(this,void 0,void 0,function(){return l(this,function(t){return[2,B(n,"POST","/v1/accounts:delete",e)]})})}function fr(n,e){return c(this,void 0,void 0,function(){return l(this,function(t){return[2,B(n,"POST","/v1/accounts:lookup",e)]})})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ue(n){if(n)try{var e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}function pr(n,e){return e===void 0&&(e=!1),c(this,void 0,void 0,function(){var t,r,i,o,s;return l(this,function(a){switch(a.label){case 0:return t=Ie(n),[4,t.getIdToken(e)];case 1:return r=a.sent(),i=Me(r),m(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error"),o=typeof i.firebase=="object"?i.firebase:void 0,s=o==null?void 0:o.sign_in_provider,[2,{claims:i,token:r,authTime:ue(we(i.auth_time)),issuedAtTime:ue(we(i.iat)),expirationTime:ue(we(i.exp)),signInProvider:s||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}]}})})}function we(n){return Number(n)*1e3}function Me(n){var e=n.split("."),t=e[0],r=e[1],i=e[2];if(t===void 0||r===void 0||i===void 0)return pe("JWT malformed, contained fewer than 3 sections"),null;try{var o=pn(r);return o?JSON.parse(o):(pe("Failed to decode base64 JWT payload"),null)}catch(s){return pe("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function vr(n){var e=Me(n);return m(e,"internal-error"),m(typeof e.exp<"u","internal-error"),m(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function le(n,e,t){return t===void 0&&(t=!1),c(this,void 0,void 0,function(){var r;return l(this,function(i){switch(i.label){case 0:if(t)return[2,e];i.label=1;case 1:return i.trys.push([1,3,,6]),[4,e];case 2:return[2,i.sent()];case 3:return r=i.sent(),r instanceof Oe&&mr(r)?n.auth.currentUser!==n?[3,5]:[4,n.auth.signOut()]:[3,5];case 4:i.sent(),i.label=5;case 5:throw r;case 6:return[2]}})})}function mr(n){var e=n.code;return e==="auth/".concat("user-disabled")||e==="auth/".concat("user-token-expired")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var gr=function(){function n(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}return n.prototype._start=function(){this.isRunning||(this.isRunning=!0,this.schedule())},n.prototype._stop=function(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))},n.prototype.getInterval=function(e){var t;if(e){var r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;var i=(t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0,r=i-Date.now()-3e5;return Math.max(0,r)}},n.prototype.schedule=function(e){var t=this;if(e===void 0&&(e=!1),!!this.isRunning){var r=this.getInterval(e);this.timerId=setTimeout(function(){return c(t,void 0,void 0,function(){return l(this,function(i){switch(i.label){case 0:return[4,this.iteration()];case 1:return i.sent(),[2]}})})},r)}},n.prototype.iteration=function(){return c(this,void 0,void 0,function(){var e;return l(this,function(t){switch(t.label){case 0:return t.trys.push([0,2,,3]),[4,this.user.getIdToken(!0)];case 1:return t.sent(),[3,3];case 2:return e=t.sent(),(e==null?void 0:e.code)==="auth/".concat("network-request-failed")&&this.schedule(!0),[2];case 3:return this.schedule(),[2]}})})},n}();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Nt=function(){function n(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}return n.prototype._initializeTime=function(){this.lastSignInTime=ue(this.lastLoginAt),this.creationTime=ue(this.createdAt)},n.prototype._copy=function(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()},n.prototype.toJSON=function(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}},n}();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function me(n){var e;return c(this,void 0,void 0,function(){var t,r,i,o,s,a,u,f,h,p;return l(this,function(g){switch(g.label){case 0:return t=n.auth,[4,n.getIdToken()];case 1:return r=g.sent(),[4,le(n,fr(t,{idToken:r}))];case 2:return i=g.sent(),m(i==null?void 0:i.users.length,t,"internal-error"),o=i.users[0],n._notifyReloadListener(o),s=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?_r(o.providerUserInfo):[],a=yr(n.providerData,s),u=n.isAnonymous,f=!(n.email&&o.passwordHash)&&!(a!=null&&a.length),h=u?f:!1,p={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new Nt(o.createdAt,o.lastLoginAt),isAnonymous:h},Object.assign(n,p),[2]}})})}function Ir(n){return c(this,void 0,void 0,function(){var e;return l(this,function(t){switch(t.label){case 0:return e=Ie(n),[4,me(e)];case 1:return t.sent(),[4,e.auth._persistUserIfCurrent(e)];case 2:return t.sent(),e.auth._notifyListenersIfCurrent(e),[2]}})})}function yr(n,e){var t=n.filter(function(r){return!e.some(function(i){return i.providerId===r.providerId})});return A(A([],t,!0),e,!0)}function _r(n){return n.map(function(e){var t=e.providerId,r=Ne(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tr(n,e){return c(this,void 0,void 0,function(){var t,r=this;return l(this,function(i){switch(i.label){case 0:return[4,Pt(n,{},function(){return c(r,void 0,void 0,function(){var o,s,a,u,f,h;return l(this,function(p){switch(p.label){case 0:return o=Ae({grant_type:"refresh_token",refresh_token:e}).slice(1),s=n.config,a=s.tokenApiHost,u=s.apiKey,f=St(n,a,"/v1/token","key=".concat(u)),[4,n._getAdditionalHeaders()];case 1:return h=p.sent(),h["Content-Type"]="application/x-www-form-urlencoded",[2,Rt.fetch()(f,{method:"POST",headers:h,body:o})]}})})})];case 1:return t=i.sent(),[2,{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}]}})})}function wr(n,e){return c(this,void 0,void 0,function(){return l(this,function(t){return[2,B(n,"POST","/v2/accounts:revokeToken",L(n,e))]})})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var lt=function(){function n(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}return Object.defineProperty(n.prototype,"isExpired",{get:function(){return!this.expirationTime||Date.now()>this.expirationTime-3e4},enumerable:!1,configurable:!0}),n.prototype.updateFromServerResponse=function(e){m(e.idToken,"internal-error"),m(typeof e.idToken<"u","internal-error"),m(typeof e.refreshToken<"u","internal-error");var t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):vr(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)},n.prototype.getToken=function(e,t){return t===void 0&&(t=!1),c(this,void 0,void 0,function(){return l(this,function(r){switch(r.label){case 0:return m(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?[2,this.accessToken]:this.refreshToken?[4,this.refresh(e,this.refreshToken)]:[3,2];case 1:return r.sent(),[2,this.accessToken];case 2:return[2,null]}})})},n.prototype.clearRefreshToken=function(){this.refreshToken=null},n.prototype.refresh=function(e,t){return c(this,void 0,void 0,function(){var r,i,o,s;return l(this,function(a){switch(a.label){case 0:return[4,Tr(e,t)];case 1:return r=a.sent(),i=r.accessToken,o=r.refreshToken,s=r.expiresIn,this.updateTokensAndExpiration(i,o,Number(s)),[2]}})})},n.prototype.updateTokensAndExpiration=function(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3},n.fromJSON=function(e,t){var r=t.refreshToken,i=t.accessToken,o=t.expirationTime,s=new n;return r&&(m(typeof r=="string","internal-error",{appName:e}),s.refreshToken=r),i&&(m(typeof i=="string","internal-error",{appName:e}),s.accessToken=i),o&&(m(typeof o=="number","internal-error",{appName:e}),s.expirationTime=o),s},n.prototype.toJSON=function(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}},n.prototype._assign=function(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime},n.prototype._clone=function(){return Object.assign(new n,this.toJSON())},n.prototype._performRefresh=function(){return x("not implemented")},n}();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H(n,e){m(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}var Re=function(){function n(e){var t=e.uid,r=e.auth,i=e.stsTokenManager,o=Ne(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new gr(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?A([],o.providerData,!0):[],this.metadata=new Nt(o.createdAt||void 0,o.lastLoginAt||void 0)}return n.prototype.getIdToken=function(e){return c(this,void 0,void 0,function(){var t;return l(this,function(r){switch(r.label){case 0:return[4,le(this,this.stsTokenManager.getToken(this.auth,e))];case 1:return t=r.sent(),m(t,this.auth,"internal-error"),this.accessToken===t?[3,3]:(this.accessToken=t,[4,this.auth._persistUserIfCurrent(this)]);case 2:r.sent(),this.auth._notifyListenersIfCurrent(this),r.label=3;case 3:return[2,t]}})})},n.prototype.getIdTokenResult=function(e){return pr(this,e)},n.prototype.reload=function(){return Ir(this)},n.prototype._assign=function(e){this!==e&&(m(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(function(t){return _({},t)}),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))},n.prototype._clone=function(e){var t=new n(_(_({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t},n.prototype._onReload=function(e){m(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)},n.prototype._notifyReloadListener=function(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e},n.prototype._startProactiveRefresh=function(){this.proactiveRefresh._start()},n.prototype._stopProactiveRefresh=function(){this.proactiveRefresh._stop()},n.prototype._updateTokensIfNecessary=function(e,t){return t===void 0&&(t=!1),c(this,void 0,void 0,function(){var r;return l(this,function(i){switch(i.label){case 0:return r=!1,e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t?[4,me(this)]:[3,2];case 1:i.sent(),i.label=2;case 2:return[4,this.auth._persistUserIfCurrent(this)];case 3:return i.sent(),r&&this.auth._notifyListenersIfCurrent(this),[2]}})})},n.prototype.delete=function(){return c(this,void 0,void 0,function(){var e;return l(this,function(t){switch(t.label){case 0:return[4,this.getIdToken()];case 1:return e=t.sent(),[4,le(this,hr(this.auth,{idToken:e}))];case 2:return t.sent(),this.stsTokenManager.clearRefreshToken(),[2,this.auth.signOut()]}})})},n.prototype.toJSON=function(){return _(_({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(function(e){return _({},e)}),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})},Object.defineProperty(n.prototype,"refreshToken",{get:function(){return this.stsTokenManager.refreshToken||""},enumerable:!1,configurable:!0}),n._fromJSON=function(e,t){var r,i,o,s,a,u,f,h,p=(r=t.displayName)!==null&&r!==void 0?r:void 0,g=(i=t.email)!==null&&i!==void 0?i:void 0,T=(o=t.phoneNumber)!==null&&o!==void 0?o:void 0,b=(s=t.photoURL)!==null&&s!==void 0?s:void 0,k=(a=t.tenantId)!==null&&a!==void 0?a:void 0,E=(u=t._redirectEventId)!==null&&u!==void 0?u:void 0,C=(f=t.createdAt)!==null&&f!==void 0?f:void 0,F=(h=t.lastLoginAt)!==null&&h!==void 0?h:void 0,U=t.uid,G=t.emailVerified,ye=t.isAnonymous,ee=t.providerData,te=t.stsTokenManager;m(U&&te,e,"internal-error");var $=lt.fromJSON(this.name,te);m(typeof U=="string",e,"internal-error"),H(p,e.name),H(g,e.name),m(typeof G=="boolean",e,"internal-error"),m(typeof ye=="boolean",e,"internal-error"),H(T,e.name),H(b,e.name),H(k,e.name),H(E,e.name),H(C,e.name),H(F,e.name);var V=new n({uid:U,auth:e,email:g,emailVerified:G,displayName:p,isAnonymous:ye,photoURL:b,phoneNumber:T,tenantId:k,stsTokenManager:$,createdAt:C,lastLoginAt:F});return ee&&Array.isArray(ee)&&(V.providerData=ee.map(function(j){return _({},j)})),E&&(V._redirectEventId=E),V},n._fromIdTokenResponse=function(e,t,r){return r===void 0&&(r=!1),c(this,void 0,void 0,function(){var i,o;return l(this,function(s){switch(s.label){case 0:return i=new lt,i.updateFromServerResponse(t),o=new n({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r}),[4,me(o)];case 1:return s.sent(),[2,o]}})})},n}();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var dt=new Map;function q(n){Q(n instanceof Function,"Expected a class definition");var e=dt.get(n);return e?(Q(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,dt.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Er=function(){function n(){this.type="NONE",this.storage={}}return n.prototype._isAvailable=function(){return c(this,void 0,void 0,function(){return l(this,function(e){return[2,!0]})})},n.prototype._set=function(e,t){return c(this,void 0,void 0,function(){return l(this,function(r){return this.storage[e]=t,[2]})})},n.prototype._get=function(e){return c(this,void 0,void 0,function(){var t;return l(this,function(r){return t=this.storage[e],[2,t===void 0?null:t]})})},n.prototype._remove=function(e){return c(this,void 0,void 0,function(){return l(this,function(t){return delete this.storage[e],[2]})})},n.prototype._addListener=function(e,t){},n.prototype._removeListener=function(e,t){},n.type="NONE",n}(),ht=Er;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ve(n,e,t){return"".concat("firebase",":").concat(n,":").concat(e,":").concat(t)}var ft=function(){function n(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;var i=this.auth,o=i.config,s=i.name;this.fullUserKey=ve(this.userKey,o.apiKey,s),this.fullPersistenceKey=ve("persistence",o.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}return n.prototype.setCurrentUser=function(e){return this.persistence._set(this.fullUserKey,e.toJSON())},n.prototype.getCurrentUser=function(){return c(this,void 0,void 0,function(){var e;return l(this,function(t){switch(t.label){case 0:return[4,this.persistence._get(this.fullUserKey)];case 1:return e=t.sent(),[2,e?Re._fromJSON(this.auth,e):null]}})})},n.prototype.removeCurrentUser=function(){return this.persistence._remove(this.fullUserKey)},n.prototype.savePersistenceForRedirect=function(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)},n.prototype.setPersistence=function(e){return c(this,void 0,void 0,function(){var t;return l(this,function(r){switch(r.label){case 0:return this.persistence===e?[2]:[4,this.getCurrentUser()];case 1:return t=r.sent(),[4,this.removeCurrentUser()];case 2:return r.sent(),this.persistence=e,t?[2,this.setCurrentUser(t)]:[2]}})})},n.prototype.delete=function(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)},n.create=function(e,t,r){return r===void 0&&(r="authUser"),c(this,void 0,void 0,function(){var i,o,s,a,u,f,h,p,g,T,b=this;return l(this,function(k){switch(k.label){case 0:return t.length?[4,Promise.all(t.map(function(E){return c(b,void 0,void 0,function(){return l(this,function(C){switch(C.label){case 0:return[4,E._isAvailable()];case 1:return C.sent()?[2,E]:[2,void 0]}})})}))]:[2,new n(q(ht),e,r)];case 1:i=k.sent().filter(function(E){return E}),o=i[0]||q(ht),s=ve(r,e.config.apiKey,e.name),a=null,u=0,f=t,k.label=2;case 2:if(!(u<f.length))return[3,7];h=f[u],k.label=3;case 3:return k.trys.push([3,5,,6]),[4,h._get(s)];case 4:return p=k.sent(),p?(g=Re._fromJSON(e,p),h!==o&&(a=g),o=h,[3,7]):[3,6];case 5:return k.sent(),[3,6];case 6:return u++,[3,2];case 7:return T=i.filter(function(E){return E._shouldAllowMigration}),!o._shouldAllowMigration||!T.length?[2,new n(o,e,r)]:(o=T[0],a?[4,o._set(s,a.toJSON())]:[3,9]);case 8:k.sent(),k.label=9;case 9:return[4,Promise.all(t.map(function(E){return c(b,void 0,void 0,function(){return l(this,function(C){switch(C.label){case 0:if(E===o)return[3,4];C.label=1;case 1:return C.trys.push([1,3,,4]),[4,E._remove(s)];case 2:return C.sent(),[3,4];case 3:return C.sent(),[3,4];case 4:return[2]}})})}))];case 10:return k.sent(),[2,new n(o,e,r)]}})})},n}();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pt(n){var e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ot(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(kr(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ut(e))return"Blackberry";if(xt(e))return"Webos";if(At(e))return"Safari";if((e.includes("chrome/")||Cr(e))&&!e.includes("edge/"))return"Chrome";if(Lt(e))return"Android";var t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);return(r==null?void 0:r.length)===2?r[1]:"Other"}function kr(n){return n===void 0&&(n=O()),/firefox\//i.test(n)}function At(n){n===void 0&&(n=O());var e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Cr(n){return n===void 0&&(n=O()),/crios\//i.test(n)}function Ot(n){return n===void 0&&(n=O()),/iemobile/i.test(n)}function Lt(n){return n===void 0&&(n=O()),/android/i.test(n)}function Ut(n){return n===void 0&&(n=O()),/blackberry/i.test(n)}function xt(n){return n===void 0&&(n=O()),/webos/i.test(n)}function Mt(n){return n===void 0&&(n=O()),/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function br(){return vn()&&document.documentMode===10}function Rr(n){return n===void 0&&(n=O()),Mt(n)||Lt(n)||xt(n)||Ut(n)||/windows phone/i.test(n)||Ot(n)}function Pr(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dt(n,e){e===void 0&&(e=[]);var t;switch(n){case"Browser":t=pt(O());break;case"Worker":t="".concat(pt(O()),"-").concat(n);break;default:t=n}var r=e.length?e.join(","):"FirebaseCore-web";return"".concat(t,"/").concat("JsCore","/").concat(Se,"/").concat(r)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Sr=function(){function n(e){this.auth=e,this.queue=[]}return n.prototype.pushCallback=function(e,t){var r=this,i=function(s){return new Promise(function(a,u){try{var f=e(s);a(f)}catch(h){u(h)}})};i.onAbort=t,this.queue.push(i);var o=this.queue.length-1;return function(){r.queue[o]=function(){return Promise.resolve()}}},n.prototype.runMiddleware=function(e){return c(this,void 0,void 0,function(){var t,r,i,o,s,a,u,f;return l(this,function(h){switch(h.label){case 0:if(this.auth.currentUser===e)return[2];t=[],h.label=1;case 1:h.trys.push([1,6,,7]),r=0,i=this.queue,h.label=2;case 2:return r<i.length?(o=i[r],[4,o(e)]):[3,5];case 3:h.sent(),o.onAbort&&t.push(o.onAbort),h.label=4;case 4:return r++,[3,2];case 5:return[3,7];case 6:for(s=h.sent(),t.reverse(),a=0,u=t;a<u.length;a++){f=u[a];try{f()}catch{}}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message});case 7:return[2]}})})},n}();/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nr(n,e){return e===void 0&&(e={}),c(this,void 0,void 0,function(){return l(this,function(t){return[2,B(n,"GET","/v2/passwordPolicy",L(n,e))]})})}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ar=6,Or=function(){function n(e){var t,r,i,o,s=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=s.minPasswordLength)!==null&&t!==void 0?t:Ar,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),s.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),s.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),s.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),s.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(o=e.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=e.schemaVersion}return n.prototype.validatePassword=function(e){var t,r,i,o,s,a,u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(t=u.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(o=u.containsUppercaseLetter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(s=u.containsNumericCharacter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(a=u.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),u},n.prototype.validatePasswordLengthOptions=function(e,t){var r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)},n.prototype.validatePasswordCharacterOptions=function(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);for(var r,i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))},n.prototype.updatePasswordCharacterOptionsStatuses=function(e,t,r,i,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))},n}();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Lr=function(){function n(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new vt(this),this.idTokenSubscription=new vt(this),this.beforeStateQueue=new Sr(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=be,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}return n.prototype._initializeWithPersistence=function(e,t){var r=this;return t&&(this._popupRedirectResolver=q(t)),this._initializationPromise=this.queue(function(){return c(r,void 0,void 0,function(){var i,o,s;return l(this,function(a){switch(a.label){case 0:return this._deleted?[2]:(i=this,[4,ft.create(this,e)]);case 1:if(i.persistenceManager=a.sent(),this._deleted)return[2];if(!(!((o=this._popupRedirectResolver)===null||o===void 0)&&o._shouldInitProactively))return[3,5];a.label=2;case 2:return a.trys.push([2,4,,5]),[4,this._popupRedirectResolver._initialize(this)];case 3:return a.sent(),[3,5];case 4:return a.sent(),[3,5];case 5:return[4,this.initializeCurrentUser(t)];case 6:return a.sent(),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,this._deleted?[2]:(this._isInitialized=!0,[2])}})})}),this._initializationPromise},n.prototype._onStorageEvent=function(){return c(this,void 0,void 0,function(){var e;return l(this,function(t){switch(t.label){case 0:return this._deleted?[2]:[4,this.assertedPersistence.getCurrentUser()];case 1:return e=t.sent(),!this.currentUser&&!e?[2]:this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),[4,this.currentUser.getIdToken()]):[3,3];case 2:return t.sent(),[2];case 3:return[4,this._updateCurrentUser(e,!0)];case 4:return t.sent(),[2]}})})},n.prototype.initializeCurrentUser=function(e){var t;return c(this,void 0,void 0,function(){var r,i,o,s,a,u,f;return l(this,function(h){switch(h.label){case 0:return[4,this.assertedPersistence.getCurrentUser()];case 1:return r=h.sent(),i=r,o=!1,e&&this.config.authDomain?[4,this.getOrInitRedirectPersistenceManager()]:[3,4];case 2:return h.sent(),s=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=i==null?void 0:i._redirectEventId,[4,this.tryRedirectSignIn(e)];case 3:u=h.sent(),(!s||s===a)&&(u!=null&&u.user)&&(i=u.user,o=!0),h.label=4;case 4:if(!i)return[2,this.directlySetCurrentUser(null)];if(i._redirectEventId)return[3,9];if(!o)return[3,8];h.label=5;case 5:return h.trys.push([5,7,,8]),[4,this.beforeStateQueue.runMiddleware(i)];case 6:return h.sent(),[3,8];case 7:return f=h.sent(),i=r,this._popupRedirectResolver._overrideRedirectResult(this,function(){return Promise.reject(f)}),[3,8];case 8:return i?[2,this.reloadAndSetCurrentUserOrClear(i)]:[2,this.directlySetCurrentUser(null)];case 9:return m(this._popupRedirectResolver,this,"argument-error"),[4,this.getOrInitRedirectPersistenceManager()];case 10:return h.sent(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?[2,this.directlySetCurrentUser(i)]:[2,this.reloadAndSetCurrentUserOrClear(i)]}})})},n.prototype.tryRedirectSignIn=function(e){return c(this,void 0,void 0,function(){var t;return l(this,function(r){switch(r.label){case 0:t=null,r.label=1;case 1:return r.trys.push([1,3,,5]),[4,this._popupRedirectResolver._completeRedirectFn(this,e,!0)];case 2:return t=r.sent(),[3,5];case 3:return r.sent(),[4,this._setRedirectUser(null)];case 4:return r.sent(),[3,5];case 5:return[2,t]}})})},n.prototype.reloadAndSetCurrentUserOrClear=function(e){return c(this,void 0,void 0,function(){var t;return l(this,function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),[4,me(e)];case 1:return r.sent(),[3,3];case 2:return t=r.sent(),(t==null?void 0:t.code)!=="auth/".concat("network-request-failed")?[2,this.directlySetCurrentUser(null)]:[3,3];case 3:return[2,this.directlySetCurrentUser(e)]}})})},n.prototype.useDeviceLanguage=function(){this.languageCode=rr()},n.prototype._delete=function(){return c(this,void 0,void 0,function(){return l(this,function(e){return this._deleted=!0,[2]})})},n.prototype.updateCurrentUser=function(e){return c(this,void 0,void 0,function(){var t;return l(this,function(r){return t=e?Ie(e):null,t&&m(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),[2,this._updateCurrentUser(t&&t._clone(this))]})})},n.prototype._updateCurrentUser=function(e,t){return t===void 0&&(t=!1),c(this,void 0,void 0,function(){var r=this;return l(this,function(i){switch(i.label){case 0:return this._deleted?[2]:(e&&m(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t?[3,2]:[4,this.beforeStateQueue.runMiddleware(e)]);case 1:i.sent(),i.label=2;case 2:return[2,this.queue(function(){return c(r,void 0,void 0,function(){return l(this,function(o){switch(o.label){case 0:return[4,this.directlySetCurrentUser(e)];case 1:return o.sent(),this.notifyAuthListeners(),[2]}})})})]}})})},n.prototype.signOut=function(){return c(this,void 0,void 0,function(){return l(this,function(e){switch(e.label){case 0:return[4,this.beforeStateQueue.runMiddleware(null)];case 1:return e.sent(),this.redirectPersistenceManager||this._popupRedirectResolver?[4,this._setRedirectUser(null)]:[3,3];case 2:e.sent(),e.label=3;case 3:return[2,this._updateCurrentUser(null,!0)]}})})},n.prototype.setPersistence=function(e){var t=this;return this.queue(function(){return c(t,void 0,void 0,function(){return l(this,function(r){switch(r.label){case 0:return[4,this.assertedPersistence.setPersistence(q(e))];case 1:return r.sent(),[2]}})})})},n.prototype._getRecaptchaConfig=function(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]},n.prototype.validatePassword=function(e){return c(this,void 0,void 0,function(){var t;return l(this,function(r){switch(r.label){case 0:return this._getPasswordPolicyInternal()?[3,2]:[4,this._updatePasswordPolicy()];case 1:r.sent(),r.label=2;case 2:return t=this._getPasswordPolicyInternal(),t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?[2,Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{}))]:[2,t.validatePassword(e)]}})})},n.prototype._getPasswordPolicyInternal=function(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]},n.prototype._updatePasswordPolicy=function(){return c(this,void 0,void 0,function(){var e,t;return l(this,function(r){switch(r.label){case 0:return[4,Nr(this)];case 1:return e=r.sent(),t=new Or(e),this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t,[2]}})})},n.prototype._getPersistence=function(){return this.assertedPersistence.persistence.type},n.prototype._updateErrorMap=function(e){this._errorFactory=new Pe("auth","Firebase",e())},n.prototype.onAuthStateChanged=function(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)},n.prototype.beforeAuthStateChanged=function(e,t){return this.beforeStateQueue.pushCallback(e,t)},n.prototype.onIdTokenChanged=function(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)},n.prototype.authStateReady=function(){var e=this;return new Promise(function(t,r){if(e.currentUser)t();else var i=e.onAuthStateChanged(function(){i(),t()},r)})},n.prototype.revokeAccessToken=function(e){return c(this,void 0,void 0,function(){var t,r;return l(this,function(i){switch(i.label){case 0:return this.currentUser?[4,this.currentUser.getIdToken()]:[3,3];case 1:return t=i.sent(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t},this.tenantId!=null&&(r.tenantId=this.tenantId),[4,wr(this,r)];case 2:i.sent(),i.label=3;case 3:return[2]}})})},n.prototype.toJSON=function(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}},n.prototype._setRedirectUser=function(e,t){return c(this,void 0,void 0,function(){var r;return l(this,function(i){switch(i.label){case 0:return[4,this.getOrInitRedirectPersistenceManager(t)];case 1:return r=i.sent(),[2,e===null?r.removeCurrentUser():r.setCurrentUser(e)]}})})},n.prototype.getOrInitRedirectPersistenceManager=function(e){return c(this,void 0,void 0,function(){var t,r,i;return l(this,function(o){switch(o.label){case 0:return this.redirectPersistenceManager?[3,3]:(t=e&&q(e)||this._popupRedirectResolver,m(t,this,"argument-error"),r=this,[4,ft.create(this,[q(t._redirectPersistence)],"redirectUser")]);case 1:return r.redirectPersistenceManager=o.sent(),i=this,[4,this.redirectPersistenceManager.getCurrentUser()];case 2:i.redirectUser=o.sent(),o.label=3;case 3:return[2,this.redirectPersistenceManager]}})})},n.prototype._redirectUserForId=function(e){var t,r;return c(this,void 0,void 0,function(){var i=this;return l(this,function(o){switch(o.label){case 0:return this._isInitialized?[4,this.queue(function(){return c(i,void 0,void 0,function(){return l(this,function(s){return[2]})})})]:[3,2];case 1:o.sent(),o.label=2;case 2:return((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?[2,this._currentUser]:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?[2,this.redirectUser]:[2,null]}})})},n.prototype._persistUserIfCurrent=function(e){return c(this,void 0,void 0,function(){var t=this;return l(this,function(r){return e===this.currentUser?[2,this.queue(function(){return c(t,void 0,void 0,function(){return l(this,function(i){return[2,this.directlySetCurrentUser(e)]})})})]:[2]})})},n.prototype._notifyListenersIfCurrent=function(e){e===this.currentUser&&this.notifyAuthListeners()},n.prototype._key=function(){return"".concat(this.config.authDomain,":").concat(this.config.apiKey,":").concat(this.name)},n.prototype._startProactiveRefresh=function(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()},n.prototype._stopProactiveRefresh=function(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()},Object.defineProperty(n.prototype,"_currentUser",{get:function(){return this.currentUser},enumerable:!1,configurable:!0}),n.prototype.notifyAuthListeners=function(){var e,t;if(this._isInitialized){this.idTokenSubscription.next(this.currentUser);var r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}},n.prototype.registerStateListener=function(e,t,r,i){var o=this;if(this._deleted)return function(){};var s=typeof t=="function"?t:t.next.bind(t),a=!1,u=this._isInitialized?Promise.resolve():this._initializationPromise;if(m(u,this,"internal-error"),u.then(function(){a||s(o.currentUser)}),typeof t=="function"){var f=e.addObserver(t,r,i);return function(){a=!0,f()}}else{var h=e.addObserver(t);return function(){a=!0,h()}}},n.prototype.directlySetCurrentUser=function(e){return c(this,void 0,void 0,function(){return l(this,function(t){switch(t.label){case 0:return this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?[4,this.assertedPersistence.setCurrentUser(e)]:[3,2];case 1:return t.sent(),[3,4];case 2:return[4,this.assertedPersistence.removeCurrentUser()];case 3:t.sent(),t.label=4;case 4:return[2]}})})},n.prototype.queue=function(e){return this.operations=this.operations.then(e,e),this.operations},Object.defineProperty(n.prototype,"assertedPersistence",{get:function(){return m(this.persistenceManager,this,"internal-error"),this.persistenceManager},enumerable:!1,configurable:!0}),n.prototype._logFramework=function(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Dt(this.config.clientPlatform,this._getFrameworks()))},n.prototype._getFrameworks=function(){return this.frameworks},n.prototype._getAdditionalHeaders=function(){var e;return c(this,void 0,void 0,function(){var t,r,i,o;return l(this,function(s){switch(s.label){case 0:return t=(o={},o["X-Client-Version"]=this.clientVersion,o),this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId),[4,(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader()];case 1:return r=s.sent(),r&&(t["X-Firebase-Client"]=r),[4,this._getAppCheckToken()];case 2:return i=s.sent(),i&&(t["X-Firebase-AppCheck"]=i),[2,t]}})})},n.prototype._getAppCheckToken=function(){var e;return c(this,void 0,void 0,function(){var t;return l(this,function(r){switch(r.label){case 0:return[4,(e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken()];case 1:return t=r.sent(),t!=null&&t.error&&Zn("Error while retrieving App Check token: ".concat(t.error)),[2,t==null?void 0:t.token]}})})},n}();function Ft(n){return Ie(n)}var vt=function(){function n(e){var t=this;this.auth=e,this.observer=null,this.addObserver=mn(function(r){return t.observer=r})}return Object.defineProperty(n.prototype,"next",{get:function(){return m(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)},enumerable:!1,configurable:!0}),n}();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Vt={loadJS:function(){return c(this,void 0,void 0,function(){return l(this,function(n){throw new Error("Unable to load external scripts")})})},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Ur(n){return Vt.loadJS(n)}function xr(){return Vt.recaptchaEnterpriseScript}var Mr="recaptcha-enterprise",Dr="NO_RECAPTCHA",Fr=function(){function n(e){this.type=Mr,this.auth=Ft(e)}return n.prototype.verify=function(e,t){return e===void 0&&(e="verify"),t===void 0&&(t=!1),c(this,void 0,void 0,function(){function r(s){return c(this,void 0,void 0,function(){var a=this;return l(this,function(u){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return[2,s._agentRecaptchaConfig.siteKey];if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return[2,s._tenantRecaptchaConfigs[s.tenantId].siteKey]}return[2,new Promise(function(f,h){return c(a,void 0,void 0,function(){return l(this,function(p){return dr(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(function(g){if(g.recaptchaKey===void 0)h(new Error("recaptcha Enterprise site key undefined"));else{var T=new lr(g);return s.tenantId==null?s._agentRecaptchaConfig=T:s._tenantRecaptchaConfigs[s.tenantId]=T,f(T.siteKey)}}).catch(function(g){h(g)}),[2]})})})]})})}function i(s,a,u){var f=window.grecaptcha;ct(f)?f.enterprise.ready(function(){f.enterprise.execute(s,{action:e}).then(function(h){a(h)}).catch(function(){a(Dr)})}):u(Error("No reCAPTCHA enterprise script loaded."))}var o=this;return l(this,function(s){return[2,new Promise(function(a,u){r(o.auth).then(function(f){if(!t&&ct(window.grecaptcha))i(f,a,u);else{if(typeof window>"u"){u(new Error("RecaptchaVerifier is only supported in browser"));return}var h=xr();h.length!==0&&(h+=f),Ur(h).then(function(){i(f,a,u)}).catch(function(p){u(p)})}}).catch(function(f){u(f)})})]})})},n}();function mt(n,e,t,r){return r===void 0&&(r=!1),c(this,void 0,void 0,function(){var i,o,s;return l(this,function(a){switch(a.label){case 0:i=new Fr(n),a.label=1;case 1:return a.trys.push([1,3,,5]),[4,i.verify(t)];case 2:return o=a.sent(),[3,5];case 3:return a.sent(),[4,i.verify(t,!0)];case 4:return o=a.sent(),[3,5];case 5:return s=_({},e),r?Object.assign(s,{captchaResp:o}):Object.assign(s,{captchaResponse:o}),Object.assign(s,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(s,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),[2,s]}})})}function gt(n,e,t,r){var i;return c(this,void 0,void 0,function(){var o,s=this;return l(this,function(a){switch(a.label){case 0:return!((i=n._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")?[4,mt(n,e,t,t==="getOobCode")]:[3,2];case 1:return o=a.sent(),[2,r(n,o)];case 2:return[2,r(n,e).catch(function(u){return c(s,void 0,void 0,function(){var f;return l(this,function(h){switch(h.label){case 0:return u.code!=="auth/".concat("missing-recaptcha-token")?[3,2]:(console.log("".concat(t," is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.")),[4,mt(n,e,t,t==="getOobCode")]);case 1:return f=h.sent(),[2,r(n,f)];case 2:return[2,Promise.reject(u)]}})})})]}})})}function Vr(n,e){var t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(q);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var de=function(){function n(e,t){this.providerId=e,this.signInMethod=t}return n.prototype.toJSON=function(){return x("not implemented")},n.prototype._getIdTokenResponse=function(e){return x("not implemented")},n.prototype._linkToIdToken=function(e,t){return x("not implemented")},n.prototype._getReauthenticationResolver=function(e){return x("not implemented")},n}();function jr(n,e){return c(this,void 0,void 0,function(){return l(this,function(t){return[2,B(n,"POST","/v1/accounts:signUp",e)]})})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hr(n,e){return c(this,void 0,void 0,function(){return l(this,function(t){return[2,J(n,"POST","/v1/accounts:signInWithPassword",L(n,e))]})})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qr(n,e){return c(this,void 0,void 0,function(){return l(this,function(t){return[2,J(n,"POST","/v1/accounts:signInWithEmailLink",L(n,e))]})})}function Gr(n,e){return c(this,void 0,void 0,function(){return l(this,function(t){return[2,J(n,"POST","/v1/accounts:signInWithEmailLink",L(n,e))]})})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var It=function(n){y(e,n);function e(t,r,i,o){o===void 0&&(o=null);var s=n.call(this,"password",i)||this;return s._email=t,s._password=r,s._tenantId=o,s}return e._fromEmailAndPassword=function(t,r){return new e(t,r,"password")},e._fromEmailAndCode=function(t,r,i){return i===void 0&&(i=null),new e(t,r,"emailLink",i)},e.prototype.toJSON=function(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}},e.fromJSON=function(t){var r=typeof t=="string"?JSON.parse(t):t;if(r!=null&&r.email&&(r!=null&&r.password)){if(r.signInMethod==="password")return this._fromEmailAndPassword(r.email,r.password);if(r.signInMethod==="emailLink")return this._fromEmailAndCode(r.email,r.password,r.tenantId)}return null},e.prototype._getIdTokenResponse=function(t){return c(this,void 0,void 0,function(){var r;return l(this,function(i){switch(this.signInMethod){case"password":return r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"},[2,gt(t,r,"signInWithPassword",Hr)];case"emailLink":return[2,qr(t,{email:this._email,oobCode:this._password})];default:D(t,"internal-error")}return[2]})})},e.prototype._linkToIdToken=function(t,r){return c(this,void 0,void 0,function(){var i;return l(this,function(o){switch(this.signInMethod){case"password":return i={idToken:r,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"},[2,gt(t,i,"signUpPassword",jr)];case"emailLink":return[2,Gr(t,{idToken:r,email:this._email,oobCode:this._password})];default:D(t,"internal-error")}return[2]})})},e.prototype._getReauthenticationResolver=function(t){return this._getIdTokenResponse(t)},e}(de);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(n,e){return c(this,void 0,void 0,function(){return l(this,function(t){return[2,J(n,"POST","/v1/accounts:signInWithIdp",L(n,e))]})})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var zr="http://localhost",Z=function(n){y(e,n);function e(){var t=n!==null&&n.apply(this,arguments)||this;return t.pendingToken=null,t}return e._fromParams=function(t){var r=new e(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(r.idToken=t.idToken),t.accessToken&&(r.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(r.nonce=t.nonce),t.pendingToken&&(r.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(r.accessToken=t.oauthToken,r.secret=t.oauthTokenSecret):D("argument-error"),r},e.prototype.toJSON=function(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}},e.fromJSON=function(t){var r=typeof t=="string"?JSON.parse(t):t,i=r.providerId,o=r.signInMethod,s=Ne(r,["providerId","signInMethod"]);if(!i||!o)return null;var a=new e(i,o);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a},e.prototype._getIdTokenResponse=function(t){var r=this.buildRequest();return M(t,r)},e.prototype._linkToIdToken=function(t,r){var i=this.buildRequest();return i.idToken=r,M(t,i)},e.prototype._getReauthenticationResolver=function(t){var r=this.buildRequest();return r.autoCreate=!1,M(t,r)},e.prototype.buildRequest=function(){var t={requestUri:zr,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{var r={};this.idToken&&(r.id_token=this.idToken),this.accessToken&&(r.access_token=this.accessToken),this.secret&&(r.oauth_token_secret=this.secret),r.providerId=this.providerId,this.nonce&&!this.pendingToken&&(r.nonce=this.nonce),t.postBody=Ae(r)}return t},e}(de);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ee;function Wr(n,e){return c(this,void 0,void 0,function(){return l(this,function(t){return[2,J(n,"POST","/v1/accounts:signInWithPhoneNumber",L(n,e))]})})}function Kr(n,e){return c(this,void 0,void 0,function(){var t;return l(this,function(r){switch(r.label){case 0:return[4,J(n,"POST","/v1/accounts:signInWithPhoneNumber",L(n,e))];case 1:if(t=r.sent(),t.temporaryProof)throw ae(n,"account-exists-with-different-credential",t);return[2,t]}})})}var Br=(Ee={},Ee.USER_NOT_FOUND="user-not-found",Ee);function Jr(n,e){return c(this,void 0,void 0,function(){var t;return l(this,function(r){return t=_(_({},e),{operation:"REAUTH"}),[2,J(n,"POST","/v1/accounts:signInWithPhoneNumber",L(n,t),Br)]})})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(n){y(e,n);function e(t){var r=n.call(this,"phone","phone")||this;return r.params=t,r}return e._fromVerification=function(t,r){return new e({verificationId:t,verificationCode:r})},e._fromTokenResponse=function(t,r){return new e({phoneNumber:t,temporaryProof:r})},e.prototype._getIdTokenResponse=function(t){return Wr(t,this._makeVerificationRequest())},e.prototype._linkToIdToken=function(t,r){return Kr(t,_({idToken:r},this._makeVerificationRequest()))},e.prototype._getReauthenticationResolver=function(t){return Jr(t,this._makeVerificationRequest())},e.prototype._makeVerificationRequest=function(){var t=this.params,r=t.temporaryProof,i=t.phoneNumber,o=t.verificationId,s=t.verificationCode;return r&&i?{temporaryProof:r,phoneNumber:i}:{sessionInfo:o,code:s}},e.prototype.toJSON=function(){var t={providerId:this.providerId};return this.params.phoneNumber&&(t.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(t.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(t.verificationCode=this.params.verificationCode),this.params.verificationId&&(t.verificationId=this.params.verificationId),t},e.fromJSON=function(t){typeof t=="string"&&(t=JSON.parse(t));var r=t,i=r.verificationId,o=r.verificationCode,s=r.phoneNumber,a=r.temporaryProof;return!o&&!i&&!s&&!a?null:new e({verificationId:i,verificationCode:o,phoneNumber:s,temporaryProof:a})},e})(de);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $r(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Yr(n){var e=oe(se(n)).link,t=e?oe(se(e)).deep_link_id:null,r=oe(se(n)).deep_link_id,i=r?oe(se(r)).link:null;return i||r||t||e||n}var Xr=function(){function n(e){var t,r,i,o,s,a,u=oe(se(e)),f=(t=u.apiKey)!==null&&t!==void 0?t:null,h=(r=u.oobCode)!==null&&r!==void 0?r:null,p=$r((i=u.mode)!==null&&i!==void 0?i:null);m(f&&h&&p,"argument-error"),this.apiKey=f,this.operation=p,this.code=h,this.continueUrl=(o=u.continueUrl)!==null&&o!==void 0?o:null,this.languageCode=(s=u.languageCode)!==null&&s!==void 0?s:null,this.tenantId=(a=u.tenantId)!==null&&a!==void 0?a:null}return n.parseLink=function(e){var t=Yr(e);try{return new n(t)}catch{return null}},n}();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Qr=function(){function n(){this.providerId=n.PROVIDER_ID}return n.credential=function(e,t){return It._fromEmailAndPassword(e,t)},n.credentialWithLink=function(e,t){var r=Xr.parseLink(t);return m(r,"argument-error"),It._fromEmailAndCode(e,r.code,r.tenantId)},n.PROVIDER_ID="password",n.EMAIL_PASSWORD_SIGN_IN_METHOD="password",n.EMAIL_LINK_SIGN_IN_METHOD="emailLink",n}();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var jt=function(){function n(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}return n.prototype.setDefaultLanguage=function(e){this.defaultLanguageCode=e},n.prototype.setCustomParameters=function(e){return this.customParameters=e,this},n.prototype.getCustomParameters=function(){return this.customParameters},n}();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var he=function(n){y(e,n);function e(){var t=n!==null&&n.apply(this,arguments)||this;return t.scopes=[],t}return e.prototype.addScope=function(t){return this.scopes.includes(t)||this.scopes.push(t),this},e.prototype.getScopes=function(){return A([],this.scopes,!0)},e}(jt);(function(n){y(e,n);function e(){return n!==null&&n.apply(this,arguments)||this}return e.credentialFromJSON=function(t){var r=typeof t=="string"?JSON.parse(t):t;return m("providerId"in r&&"signInMethod"in r,"argument-error"),Z._fromParams(r)},e.prototype.credential=function(t){return this._credential(_(_({},t),{nonce:t.rawNonce}))},e.prototype._credential=function(t){return m(t.idToken||t.accessToken,"argument-error"),Z._fromParams(_(_({},t),{providerId:this.providerId,signInMethod:this.providerId}))},e.credentialFromResult=function(t){return e.oauthCredentialFromTaggedObject(t)},e.credentialFromError=function(t){return e.oauthCredentialFromTaggedObject(t.customData||{})},e.oauthCredentialFromTaggedObject=function(t){var r=t._tokenResponse;if(!r)return null;var i=r,o=i.oauthIdToken,s=i.oauthAccessToken,a=i.oauthTokenSecret,u=i.pendingToken,f=i.nonce,h=i.providerId;if(!s&&!a&&!o&&!u||!h)return null;try{return new e(h)._credential({idToken:o,accessToken:s,nonce:f,pendingToken:u})}catch{return null}},e})(he);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(n){y(e,n);function e(){return n.call(this,"facebook.com")||this}return e.credential=function(t){return Z._fromParams({providerId:e.PROVIDER_ID,signInMethod:e.FACEBOOK_SIGN_IN_METHOD,accessToken:t})},e.credentialFromResult=function(t){return e.credentialFromTaggedObject(t)},e.credentialFromError=function(t){return e.credentialFromTaggedObject(t.customData||{})},e.credentialFromTaggedObject=function(t){var r=t._tokenResponse;if(!r||!("oauthAccessToken"in r)||!r.oauthAccessToken)return null;try{return e.credential(r.oauthAccessToken)}catch{return null}},e.FACEBOOK_SIGN_IN_METHOD="facebook.com",e.PROVIDER_ID="facebook.com",e})(he);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(n){y(e,n);function e(){var t=n.call(this,"google.com")||this;return t.addScope("profile"),t}return e.credential=function(t,r){return Z._fromParams({providerId:e.PROVIDER_ID,signInMethod:e.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:r})},e.credentialFromResult=function(t){return e.credentialFromTaggedObject(t)},e.credentialFromError=function(t){return e.credentialFromTaggedObject(t.customData||{})},e.credentialFromTaggedObject=function(t){var r=t._tokenResponse;if(!r)return null;var i=r,o=i.oauthIdToken,s=i.oauthAccessToken;if(!o&&!s)return null;try{return e.credential(o,s)}catch{return null}},e.GOOGLE_SIGN_IN_METHOD="google.com",e.PROVIDER_ID="google.com",e})(he);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(n){y(e,n);function e(){return n.call(this,"github.com")||this}return e.credential=function(t){return Z._fromParams({providerId:e.PROVIDER_ID,signInMethod:e.GITHUB_SIGN_IN_METHOD,accessToken:t})},e.credentialFromResult=function(t){return e.credentialFromTaggedObject(t)},e.credentialFromError=function(t){return e.credentialFromTaggedObject(t.customData||{})},e.credentialFromTaggedObject=function(t){var r=t._tokenResponse;if(!r||!("oauthAccessToken"in r)||!r.oauthAccessToken)return null;try{return e.credential(r.oauthAccessToken)}catch{return null}},e.GITHUB_SIGN_IN_METHOD="github.com",e.PROVIDER_ID="github.com",e})(he);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Zr="http://localhost",yt=function(n){y(e,n);function e(t,r){var i=n.call(this,t,t)||this;return i.pendingToken=r,i}return e.prototype._getIdTokenResponse=function(t){var r=this.buildRequest();return M(t,r)},e.prototype._linkToIdToken=function(t,r){var i=this.buildRequest();return i.idToken=r,M(t,i)},e.prototype._getReauthenticationResolver=function(t){var r=this.buildRequest();return r.autoCreate=!1,M(t,r)},e.prototype.toJSON=function(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}},e.fromJSON=function(t){var r=typeof t=="string"?JSON.parse(t):t,i=r.providerId,o=r.signInMethod,s=r.pendingToken;return!i||!o||!s||i!==o?null:new e(i,s)},e._create=function(t,r){return new e(t,r)},e.prototype.buildRequest=function(){return{requestUri:Zr,returnSecureToken:!0,pendingToken:this.pendingToken}},e}(de);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ei="saml.";(function(n){y(e,n);function e(t){return m(t.startsWith(ei),"argument-error"),n.call(this,t)||this}return e.credentialFromResult=function(t){return e.samlCredentialFromTaggedObject(t)},e.credentialFromError=function(t){return e.samlCredentialFromTaggedObject(t.customData||{})},e.credentialFromJSON=function(t){var r=yt.fromJSON(t);return m(r,"argument-error"),r},e.samlCredentialFromTaggedObject=function(t){var r=t._tokenResponse;if(!r)return null;var i=r,o=i.pendingToken,s=i.providerId;if(!o||!s)return null;try{return yt._create(s,o)}catch{return null}},e})(jt);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(n){y(e,n);function e(){return n.call(this,"twitter.com")||this}return e.credential=function(t,r){return Z._fromParams({providerId:e.PROVIDER_ID,signInMethod:e.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:r})},e.credentialFromResult=function(t){return e.credentialFromTaggedObject(t)},e.credentialFromError=function(t){return e.credentialFromTaggedObject(t.customData||{})},e.credentialFromTaggedObject=function(t){var r=t._tokenResponse;if(!r)return null;var i=r,o=i.oauthAccessToken,s=i.oauthTokenSecret;if(!o||!s)return null;try{return e.credential(o,s)}catch{return null}},e.TWITTER_SIGN_IN_METHOD="twitter.com",e.PROVIDER_ID="twitter.com",e})(he);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var De=function(){function n(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}return n._fromIdTokenResponse=function(e,t,r,i){return i===void 0&&(i=!1),c(this,void 0,void 0,function(){var o,s,a;return l(this,function(u){switch(u.label){case 0:return[4,Re._fromIdTokenResponse(e,r,i)];case 1:return o=u.sent(),s=_t(r),a=new n({user:o,providerId:s,_tokenResponse:r,operationType:t}),[2,a]}})})},n._forOperation=function(e,t,r){return c(this,void 0,void 0,function(){var i;return l(this,function(o){switch(o.label){case 0:return[4,e._updateTokensIfNecessary(r,!0)];case 1:return o.sent(),i=_t(r),[2,new n({user:e,providerId:i,_tokenResponse:r,operationType:t})]}})})},n}();function _t(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ti=function(n){y(e,n);function e(t,r,i,o){var s=this,a;return s=n.call(this,r.code,r.message)||this,s.operationType=i,s.user=o,Object.setPrototypeOf(s,e.prototype),s.customData={appName:t.name,tenantId:(a=t.tenantId)!==null&&a!==void 0?a:void 0,_serverResponse:r.customData._serverResponse,operationType:i},s}return e._fromErrorAndOperation=function(t,r,i,o){return new e(t,r,i,o)},e}(Oe);function Ht(n,e,t,r){var i=e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n);return i.catch(function(o){throw o.code==="auth/".concat("multi-factor-auth-required")?ti._fromErrorAndOperation(n,o,e,r):o})}function ni(n,e,t){return t===void 0&&(t=!1),c(this,void 0,void 0,function(){var r,i,o,s,a,u;return l(this,function(f){switch(f.label){case 0:return i=le,o=[n],a=(s=e)._linkToIdToken,u=[n.auth],[4,n.getIdToken()];case 1:return[4,i.apply(void 0,o.concat([a.apply(s,u.concat([f.sent()])),t]))];case 2:return r=f.sent(),[2,De._forOperation(n,"link",r)]}})})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ri(n,e,t){return t===void 0&&(t=!1),c(this,void 0,void 0,function(){var r,i,o,s,a,u;return l(this,function(f){switch(f.label){case 0:r=n.auth,i="reauthenticate",f.label=1;case 1:return f.trys.push([1,3,,4]),[4,le(n,Ht(r,i,e,n),t)];case 2:return o=f.sent(),m(o.idToken,r,"internal-error"),s=Me(o.idToken),m(s,r,"internal-error"),a=s.sub,m(n.uid===a,r,"user-mismatch"),[2,De._forOperation(n,i,o)];case 3:throw u=f.sent(),(u==null?void 0:u.code)==="auth/".concat("user-not-found")&&D(r,"user-mismatch"),u;case 4:return[2]}})})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ii(n,e,t){return t===void 0&&(t=!1),c(this,void 0,void 0,function(){var r,i,o;return l(this,function(s){switch(s.label){case 0:return r="signIn",[4,Ht(n,r,e)];case 1:return i=s.sent(),[4,De._fromIdTokenResponse(n,r,i)];case 2:return o=s.sent(),t?[3,4]:[4,n._updateCurrentUser(o.user)];case 3:s.sent(),s.label=4;case 4:return[2,o]}})})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var qt=function(){function n(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}return n._fromServerResponse=function(e,t){return"phoneInfo"in t?oi._fromServerResponse(e,t):"totpInfo"in t?si._fromServerResponse(e,t):D(e,"internal-error")},n}(),oi=function(n){y(e,n);function e(t){var r=n.call(this,"phone",t)||this;return r.phoneNumber=t.phoneInfo,r}return e._fromServerResponse=function(t,r){return new e(r)},e}(qt),si=function(n){y(e,n);function e(t){return n.call(this,"totp",t)||this}return e._fromServerResponse=function(t,r){return new e(r)},e}(qt),Fe=function(){function n(e,t,r){r===void 0&&(r={}),this.isNewUser=e,this.providerId=t,this.profile=r}return n}(),Gt=function(n){y(e,n);function e(t,r,i,o){var s=n.call(this,t,r,i)||this;return s.username=o,s}return e}(Fe);(function(n){y(e,n);function e(t,r){return n.call(this,t,"facebook.com",r)||this}return e})(Fe);(function(n){y(e,n);function e(t,r){return n.call(this,t,"github.com",r,typeof(r==null?void 0:r.login)=="string"?r==null?void 0:r.login:null)||this}return e})(Gt);(function(n){y(e,n);function e(t,r){return n.call(this,t,"google.com",r)||this}return e})(Fe);(function(n){y(e,n);function e(t,r,i){return n.call(this,t,"twitter.com",r,i)||this}return e})(Gt);var Tt="@firebase/auth",wt="1.6.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ai=function(){function n(e){this.auth=e,this.internalListeners=new Map}return n.prototype.getUid=function(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null},n.prototype.getToken=function(e){return c(this,void 0,void 0,function(){var t;return l(this,function(r){switch(r.label){case 0:return this.assertAuthConfigured(),[4,this.auth._initializationPromise];case 1:return r.sent(),this.auth.currentUser?[4,this.auth.currentUser.getIdToken(e)]:[2,null];case 2:return t=r.sent(),[2,{accessToken:t}]}})})},n.prototype.addAuthTokenListener=function(e){if(this.assertAuthConfigured(),!this.internalListeners.has(e)){var t=this.auth.onIdTokenChanged(function(r){e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}},n.prototype.removeAuthTokenListener=function(e){this.assertAuthConfigured();var t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())},n.prototype.assertAuthConfigured=function(){m(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")},n.prototype.updateProactiveRefresh=function(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()},n}();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ui(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function ci(n){$e(new Ye("auth",function(e,t){var r=t.options,i=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),a=i.options,u=a.apiKey,f=a.authDomain;m(u&&!u.includes(":"),"invalid-api-key",{appName:i.name});var h={apiKey:u,authDomain:f,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Dt(n)},p=new Lr(i,o,s,h);return Vr(p,r),p},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(function(e,t,r){var i=e.getProvider("auth-internal");i.initialize()})),$e(new Ye("auth-internal",function(e){var t=Ft(e.getProvider("auth").getImmediate());return function(r){return new ai(r)}(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Xe(Tt,wt,ui(n)),Xe(Tt,wt,"esm5")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var zt=function(){function n(e,t){this.storageRetriever=e,this.type=t}return n.prototype._isAvailable=function(){try{return this.storage?(this.storage.setItem(at,"1"),this.storage.removeItem(at),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}},n.prototype._set=function(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()},n.prototype._get=function(e){var t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)},n.prototype._remove=function(e){return this.storage.removeItem(e),Promise.resolve()},Object.defineProperty(n.prototype,"storage",{get:function(){return this.storageRetriever()},enumerable:!1,configurable:!0}),n}();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function li(){var n=O();return At(n)||Mt(n)}var di=1e3,hi=10;(function(n){y(e,n);function e(){var t=n.call(this,function(){return window.localStorage},"LOCAL")||this;return t.boundEventHandler=function(r,i){return t.onStorageEvent(r,i)},t.listeners={},t.localCache={},t.pollTimer=null,t.safariLocalStorageNotSynced=li()&&Pr(),t.fallbackToPolling=Rr(),t._shouldAllowMigration=!0,t}return e.prototype.forAllChangedKeys=function(t){for(var r=0,i=Object.keys(this.listeners);r<i.length;r++){var o=i[r],s=this.storage.getItem(o),a=this.localCache[o];s!==a&&t(o,a,s)}},e.prototype.onStorageEvent=function(t,r){var i=this;if(r===void 0&&(r=!1),!t.key){this.forAllChangedKeys(function(f,h,p){i.notifyListeners(f,p)});return}var o=t.key;if(r?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){var s=this.storage.getItem(o);if(t.newValue!==s)t.newValue!==null?this.storage.setItem(o,t.newValue):this.storage.removeItem(o);else if(this.localCache[o]===t.newValue&&!r)return}var a=function(){var f=i.storage.getItem(o);!r&&i.localCache[o]===f||i.notifyListeners(o,f)},u=this.storage.getItem(o);br()&&u!==t.newValue&&t.newValue!==t.oldValue?setTimeout(a,hi):a()},e.prototype.notifyListeners=function(t,r){this.localCache[t]=r;var i=this.listeners[t];if(i)for(var o=0,s=Array.from(i);o<s.length;o++){var a=s[o];a(r&&JSON.parse(r))}},e.prototype.startPolling=function(){var t=this;this.stopPolling(),this.pollTimer=setInterval(function(){t.forAllChangedKeys(function(r,i,o){t.onStorageEvent(new StorageEvent("storage",{key:r,oldValue:i,newValue:o}),!0)})},di)},e.prototype.stopPolling=function(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)},e.prototype.attachListener=function(){window.addEventListener("storage",this.boundEventHandler)},e.prototype.detachListener=function(){window.removeEventListener("storage",this.boundEventHandler)},e.prototype._addListener=function(t,r){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(r)},e.prototype._removeListener=function(t,r){this.listeners[t]&&(this.listeners[t].delete(r),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())},e.prototype._set=function(t,r){return c(this,void 0,void 0,function(){return l(this,function(i){switch(i.label){case 0:return[4,n.prototype._set.call(this,t,r)];case 1:return i.sent(),this.localCache[t]=JSON.stringify(r),[2]}})})},e.prototype._get=function(t){return c(this,void 0,void 0,function(){var r;return l(this,function(i){switch(i.label){case 0:return[4,n.prototype._get.call(this,t)];case 1:return r=i.sent(),this.localCache[t]=JSON.stringify(r),[2,r]}})})},e.prototype._remove=function(t){return c(this,void 0,void 0,function(){return l(this,function(r){switch(r.label){case 0:return[4,n.prototype._remove.call(this,t)];case 1:return r.sent(),delete this.localCache[t],[2]}})})},e.type="LOCAL",e})(zt);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(n){y(e,n);function e(){return n.call(this,function(){return window.sessionStorage},"SESSION")||this}return e.prototype._addListener=function(t,r){},e.prototype._removeListener=function(t,r){},e.type="SESSION",e})(zt);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ve=function(n){y(e,n);function e(t){var r=n.call(this,"custom","custom")||this;return r.params=t,r}return e.prototype._getIdTokenResponse=function(t){return M(t,this._buildIdpRequest())},e.prototype._linkToIdToken=function(t,r){return M(t,this._buildIdpRequest(r))},e.prototype._getReauthenticationResolver=function(t){return M(t,this._buildIdpRequest())},e.prototype._buildIdpRequest=function(t){var r={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(r.idToken=t),r},e}(de);function fi(n){return ii(n.auth,new Ve(n),n.bypassAuthState)}function pi(n){var e=n.auth,t=n.user;return m(t,e,"internal-error"),ri(t,new Ve(n),n.bypassAuthState)}function vi(n){return c(this,void 0,void 0,function(){var e,t;return l(this,function(r){return e=n.auth,t=n.user,m(t,e,"internal-error"),[2,ni(t,new Ve(n),n.bypassAuthState)]})})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var mi=function(){function n(e,t,r,i,o){o===void 0&&(o=!1),this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}return n.prototype.execute=function(){var e=this;return new Promise(function(t,r){return c(e,void 0,void 0,function(){var i,o;return l(this,function(s){switch(s.label){case 0:this.pendingPromise={resolve:t,reject:r},s.label=1;case 1:return s.trys.push([1,4,,5]),i=this,[4,this.resolver._initialize(this.auth)];case 2:return i.eventManager=s.sent(),[4,this.onExecution()];case 3:return s.sent(),this.eventManager.registerConsumer(this),[3,5];case 4:return o=s.sent(),this.reject(o),[3,5];case 5:return[2]}})})})},n.prototype.onAuthEvent=function(e){return c(this,void 0,void 0,function(){var t,r,i,o,s,a,u,f,h;return l(this,function(p){switch(p.label){case 0:if(t=e.urlResponse,r=e.sessionId,i=e.postBody,o=e.tenantId,s=e.error,a=e.type,s)return this.reject(s),[2];u={auth:this.auth,requestUri:t,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState},p.label=1;case 1:return p.trys.push([1,3,,4]),f=this.resolve,[4,this.getIdpTask(a)(u)];case 2:return f.apply(this,[p.sent()]),[3,4];case 3:return h=p.sent(),this.reject(h),[3,4];case 4:return[2]}})})},n.prototype.onError=function(e){this.reject(e)},n.prototype.getIdpTask=function(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return fi;case"linkViaPopup":case"linkViaRedirect":return vi;case"reauthViaPopup":case"reauthViaRedirect":return pi;default:D(this.auth,"internal-error")}},n.prototype.resolve=function(e){Q(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()},n.prototype.reject=function(e){Q(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()},n.prototype.unregisterAndCleanUp=function(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()},n}();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var gi="pendingRedirect",ke=new Map;(function(n){y(e,n);function e(t,r,i){i===void 0&&(i=!1);var o=n.call(this,t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],r,void 0,i)||this;return o.eventId=null,o}return e.prototype.execute=function(){return c(this,void 0,void 0,function(){var t,r,i,o,s;return l(this,function(a){switch(a.label){case 0:if(t=ke.get(this.auth._key()),t)return[3,8];a.label=1;case 1:return a.trys.push([1,6,,7]),[4,Ii(this.resolver,this.auth)];case 2:return r=a.sent(),r?[4,n.prototype.execute.call(this)]:[3,4];case 3:return o=a.sent(),[3,5];case 4:o=null,a.label=5;case 5:return i=o,t=function(){return Promise.resolve(i)},[3,7];case 6:return s=a.sent(),t=function(){return Promise.reject(s)},[3,7];case 7:ke.set(this.auth._key(),t),a.label=8;case 8:return this.bypassAuthState||ke.set(this.auth._key(),function(){return Promise.resolve(null)}),[2,t()]}})})},e.prototype.onAuthEvent=function(t){return c(this,void 0,void 0,function(){var r;return l(this,function(i){switch(i.label){case 0:return t.type==="signInViaRedirect"?[2,n.prototype.onAuthEvent.call(this,t)]:t.type==="unknown"?(this.resolve(null),[2]):t.eventId?[4,this.auth._redirectUserForId(t.eventId)]:[3,2];case 1:if(r=i.sent(),r)return this.user=r,[2,n.prototype.onAuthEvent.call(this,t)];this.resolve(null),i.label=2;case 2:return[2]}})})},e.prototype.onExecution=function(){return c(this,void 0,void 0,function(){return l(this,function(t){return[2]})})},e.prototype.cleanUp=function(){},e})(mi);function Ii(n,e){return c(this,void 0,void 0,function(){var t,r,i;return l(this,function(o){switch(o.label){case 0:return t=_i(e),r=yi(n),[4,r._isAvailable()];case 1:return o.sent()?[4,r._get(t)]:[2,!1];case 2:return i=o.sent()==="true",[4,r._remove(t)];case 3:return o.sent(),[2,i]}})})}function yi(n){return q(n._redirectPersistence)}function _i(n){return ve(gi,n.config.apiKey,n.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ti=10*60*1e3,wi=function(){function n(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}return n.prototype.registerConsumer=function(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)},n.prototype.unregisterConsumer=function(e){this.consumers.delete(e)},n.prototype.onEvent=function(e){var t=this;if(this.hasEventBeenHandled(e))return!1;var r=!1;return this.consumers.forEach(function(i){t.isEventForConsumer(e,i)&&(r=!0,t.sendToConsumer(e,i),t.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Ei(e)||(this.hasHandledPotentialRedirect=!0,r||(this.queuedRedirectEvent=e,r=!0)),r},n.prototype.sendToConsumer=function(e,t){var r;if(e.error&&!Wt(e)){var i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Ue(this.auth,i))}else t.onAuthEvent(e)},n.prototype.isEventForConsumer=function(e,t){var r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r},n.prototype.hasEventBeenHandled=function(e){return Date.now()-this.lastProcessedEventTime>=Ti&&this.cachedEventUids.clear(),this.cachedEventUids.has(Et(e))},n.prototype.saveEventToCache=function(e){this.cachedEventUids.add(Et(e)),this.lastProcessedEventTime=Date.now()},n}();function Et(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(function(e){return e}).join("-")}function Wt(n){var e=n.type,t=n.error;return e==="unknown"&&(t==null?void 0:t.code)==="auth/".concat("no-auth-event")}function Ei(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Wt(n);default:return!1}}(function(n){y(e,n);function e(){var t=n!==null&&n.apply(this,arguments)||this;return t.passiveListeners=new Set,t.initPromise=new Promise(function(r){t.resolveInialized=r}),t}return e.prototype.addPassiveListener=function(t){this.passiveListeners.add(t)},e.prototype.removePassiveListener=function(t){this.passiveListeners.delete(t)},e.prototype.resetRedirect=function(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1},e.prototype.onEvent=function(t){return this.resolveInialized(),this.passiveListeners.forEach(function(r){return r(t)}),n.prototype.onEvent.call(this,t)},e.prototype.initialized=function(){return c(this,void 0,void 0,function(){return l(this,function(t){switch(t.label){case 0:return[4,this.initPromise];case 1:return t.sent(),[2]}})})},e})(wi);ci("Cordova");const ki=({openChangePassword:n,setOpenChangePassword:e,openMessage:t})=>{I.useContext(Le);const[r,i]=I.useState(""),[o,s]=I.useState(""),a=async()=>{const p=W.currentUser;r.trim()&&o.trim()?await u(p):t("Enter both old and new password")},u=async p=>{try{const g=Qr.credential(p.email,r);await _n(p,g),await Tn(p,o),t("Your password is changed successfully"),e(!1)}catch(g){g.code==="auth/invalid-credentail"?t("Your old password is wrong"):t(`Re-authentication failed: ${g.message}`)}},f=()=>{try{a()}catch(p){t(p.message)}},h=async()=>{try{await yn(W,W.currentUser.email),t("Password rest email was sent to "+W.currentUser.email)}catch(p){t(p.message)}};return d.jsxs(Ct,{open:n,onClose:()=>e(!1),children:[d.jsxs(R,{m:2,children:[d.jsxs(R,{mb:2,children:[d.jsx(P,{variant:"h6",children:"Change your account password"}),d.jsx(P,{variant:"caption",children:"Only change the password if you need to and keep your password"})]}),d.jsxs(Y,{gap:2,children:[d.jsx(Ce,{type:"password",size:"small",label:"Enter old password",value:r,onChange:p=>i(p.target.value)}),d.jsx(Ce,{type:"password",size:"small",label:"Enter new password",value:o,onChange:p=>s(p.target.value)})]}),d.jsx(K,{size:"small",onClick:f,variant:"outlined",sx:{mt:1},children:"Change"})]}),d.jsx(R,{pb:2,pl:2,pr:2,children:d.jsxs(P,{variant:"caption",children:["If you forgot your password,"," ",d.jsxs(K,{onClick:h,sx:{textDecoration:"underline"},size:"small",children:[" ","click here"]})," ","to reset."]})})]})},Ci=({openViewPassword:n,setOpenViewPassword:e})=>{const{userData:t}=I.useContext(Le),[r,i]=I.useState(!1),o=()=>{var s;return(s=t==null?void 0:t.password)!=null&&s.trim()?t==null?void 0:t.password:"You logged in with Google. So, your passwod is just blank."};return d.jsx(Ct,{open:n,onClose:()=>e(!1),children:d.jsxs(R,{m:3,children:[d.jsx(P,{variant:"h6",mb:2,children:"Your account password"}),d.jsxs(Y,{gap:2,children:[d.jsx(P,{children:r?o():"*************"}),d.jsx(K,{onClick:()=>i(!r),size:"small",sx:{textDecoration:"underline"},children:r?"Hide":"View"})]})]})})},Yi=()=>{var Be;const{userData:n,setHeaderTitle:e,setSnackbarOpen:t,setSnackbarMessage:r,setUserId:i,mode:o,setMode:s,userId:a}=I.useContext(Le),[u,f]=I.useState((n==null?void 0:n.name)||""),[h,p]=I.useState((n==null?void 0:n.bio)||""),[g,T]=I.useState((n==null?void 0:n.gender)||""),[b,k]=I.useState(null),[E,C]=I.useState(!1),[F,U]=I.useState(!1),G=wn(),[ye,ee]=I.useState(!0),te=I.useRef(null),$=Qe(et,"users",Ze.get("userId")),V=(n==null?void 0:n.nameChangeCount)||0,j=(Be=n==null?void 0:n.lastNameChangeDate)==null?void 0:Be.toDate(),_e=new Date,je=_e.getMonth()===(j==null?void 0:j.getMonth())&&_e.getFullYear()===(j==null?void 0:j.getFullYear()),[He,qe]=I.useState(!1),[Ge,Kt]=I.useState(!1),[Bt,Jt]=I.useState(null);I.useEffect(()=>{En(W,w=>{w&&(Jt(w),ee(!1))})},[W]);const ze=kn(),S=w=>{t(!0),r(w)};Cn(te,C);const We=()=>(n==null?void 0:n.gender)!==g;I.useEffect(()=>{e("Settings")},[]),I.useEffect(()=>{(async()=>{!je&&(n!=null&&n.name)&&await re($,{nameChangeCount:0,lastNameChangeDate:_e})})()},[n]);const Ke=async(w,z)=>{if(u.trim())try{await re($,w),S(z)}catch(ne){S(ne.message)}},$t=()=>{const w=new Date;if(je)if(V<3){const z={name:u.trim(),nameChangeCount:V+1,lastNameChangeDate:w};Ke(z,"Updated name successfully!")}else S("You can only change your name 3 times per month!");else{const z={name:u.trim(),nameChangeCount:1,lastNameChangeDate:w};Ke(z,"Updated name successfully!")}};I.useEffect(()=>{f(n==null?void 0:n.name),T(n==null?void 0:n.gender),p(n==null?void 0:n.bio)},[n]);const Yt=async()=>{const w=await Ln(b,{maxSizeMB:.3,maxWidthOrHeight:300,useWebWorker:!0}),z=Rn(Pn,`profile/${n==null?void 0:n.uid}/${n==null?void 0:n.name}-${b.name}`);try{const ne=Qe(et,"users",n==null?void 0:n.uid);S("Uploading image...");const tn=await Sn(z,w),nn={image:await Nn(tn.ref)};await re(ne,nn),k(null),S("Updated profile picture successfully!")}catch(ne){S(ne.message)}},Xt=async()=>{try{await re($,{gender:g}),S("Updated gender successfully!")}catch(w){S("Error updating gender: "+w.message)}},Qt=async()=>{try{await re($,{bio:h}),S("Updated bio successfully!")}catch(w){S("Error updating bio: "+w.message)}},Zt=()=>{b&&Yt(),(u==null?void 0:u.trim())!==(n==null?void 0:n.name)&&$t(),We()&&Xt(),(h==null?void 0:h.trim())!==(n==null?void 0:n.bio)&&Qt()},en=async()=>{try{await bn(W),Ze.remove("userId"),i(null),ze("/login")}catch(w){console.log(w.message)}};return d.jsxs(R,{color:"text.primary",className:"Settings m-2",children:[He&&d.jsx(ki,{openChangePassword:He,setOpenChangePassword:qe,openMessage:S}),Ge&&d.jsx(Ci,{openViewPassword:Ge,setOpenViewPassword:Kt}),d.jsx(Mn,{data:{value:F,yesButton:en,noButton:()=>{U(!1)},text:"Are you sure to log out ?",setValue:U}}),d.jsx(An,{}),d.jsxs(R,{className:"",children:[d.jsxs("div",{className:"flex gap-x-2 items-center mt-2 mb-2",children:[d.jsx(P,{sx:{fontWeight:600},children:"My Account"}),d.jsx(K,{onClick:()=>ze(`/app/profile/${a}`),sx:{textTransform:"capitalize"},size:"small",children:"Go To My profile"})]}),d.jsxs(R,{bgcolor:"background.default",className:`border ${G.palette.mode==="light"?"border-slate-300":"border-slate-700"}  rounded-md shadow-lg`,children:[d.jsxs(R,{className:"p-2 flex flex-col items-center",children:[d.jsx(Te,{placement:"left",title:"Change profile picture",arrow:!0,children:d.jsxs("label",{className:"relative size-20 ",htmlFor:"imageInput",children:[n?d.jsx(On,{className:"hover:opacity-70 cursor-pointer",name:(n==null?void 0:n.name)||u||"User",image:b?URL.createObjectURL(b):n==null?void 0:n.image,size:"size-full",fontSize:"text-3xl"}):d.jsx(N,{variant:"circular",width:"100%",height:"100%"}),d.jsx("input",{type:"file",accept:"image/*",id:"imageInput",className:"hidden ",onChange:w=>k(w.target.files[0])})]})}),d.jsxs("div",{ref:te,className:"flex mt-2 gap-x-2 items-center",children:[E?d.jsx(Ce,{name:"name",size:"small",variant:"standard",label:"Full Name",autoFocus:!0,value:u,onChange:w=>f(w.target.value),className:"pl-1 pr-1 w-auto font-bold",placeholder:"Enter your full name"}):d.jsx(d.Fragment,{children:n?d.jsx(P,{className:"font-bold",children:u||(n==null?void 0:n.name)||"Username"}):d.jsx(N,{height:40,width:150})}),n?d.jsx(Te,{title:"Edit name",arrow:!0,children:d.jsx(nt,{size:"small",onClick:()=>{C(!E)},className:" p-1  cursor-pointer",children:d.jsx(Dn,{sx:{width:20,height:20}})})}):d.jsx(N,{variant:"circular",height:20,width:20})]}),n?d.jsx(P,{x:{fontSize:"0.8rem"},className:"text-slate-500",children:(n==null?void 0:n.email)||"example@gmail.com"}):d.jsx(N,{height:30,width:120}),n?d.jsxs(P,{sx:{fontSize:"0.8rem"},children:["User ID: ",(n==null?void 0:n.uid)||"user12345"," ",d.jsx(Te,{title:"Copy user ID",arrow:!0,children:d.jsx(nt,{size:"small",onClick:()=>{navigator.clipboard.writeText(n==null?void 0:n.uid),S("UID copied to the clipboard")},className:" p-1  cursor-pointer",children:d.jsx(Fn,{sx:{width:20,height:20}})})})]}):d.jsx(N,{height:30,width:180}),n?d.jsx(K,{startIcon:d.jsx(Vn,{}),onClick:()=>U(!0),sx:{mt:2},variant:"outlined",children:"Log Out"}):d.jsx(N,{width:90,height:55})]}),d.jsx(R,{className:"p-2 flex justify-center border-t ",children:d.jsxs(Y,{direction:"row",sx:{width:"50%",alignItems:"center",justifyContent:"space-between"},children:[n?d.jsx(P,{variant:"subtitle1",children:"Gender"}):d.jsx(N,{height:45,width:70}),n?d.jsx(st,{label:"Gender",gender:g,options:[{value:"male",label:"Male"},{value:"female",label:"Female"}],setValue:T}):d.jsx(N,{height:45,width:70})]})}),Bt&&d.jsx(d.Fragment,{children:d.jsx(R,{className:"p-2 flex justify-center border-t border-b ",children:d.jsxs(Y,{direction:"row",sx:{width:"50%",alignItems:"center",justifyContent:"space-between"},children:[n?d.jsx(P,{variant:"subtitle1",children:"Password"}):d.jsx(N,{height:45,width:70}),n?d.jsx(Y,{direction:"row",children:d.jsx(K,{size:"small",sx:{textDecoration:"underline"},onClick:()=>qe(!0),variant:"text",children:"Change"})}):d.jsx(N,{height:45,width:70})]})})}),d.jsx(R,{className:"p-2 flex justify-center border-t ",children:d.jsxs(Y,{direction:"row",sx:{width:"50%",alignItems:"center",justifyContent:"space-between"},children:[n?d.jsx(P,{variant:"subtitle1",children:"Theme"}):d.jsx(N,{height:45,width:70}),n?d.jsx(st,{label:"Theme",gender:o,options:[{value:"system",label:"System"},{value:"light",label:"Light"},{value:"dark",label:"Dark"}],setValue:s}):d.jsx(N,{height:45,width:70})]})}),d.jsx(R,{className:"grid gap-y-2 p-2",children:d.jsx(R,{children:(n==null?void 0:n.name)&&d.jsxs(P,{variant:"caption",color:"error",mb:1,children:["You have changed your name ",`${V} of 3`," ",V>1?"times":"time"," this month!"]})})})]})]}),d.jsx(R,{className:"flex gap-x-2 mt-2",children:We()||b||(u==null?void 0:u.trim())!==(n==null?void 0:n.name)||(h==null?void 0:h.trim())!==(n==null?void 0:n.bio)?d.jsx(K,{variant:"outlined",onClick:Zt,startIcon:d.jsx(jn,{}),children:"Update"}):""})]})};export{Yi as default};

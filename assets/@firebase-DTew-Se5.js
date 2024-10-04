import{_ as yi,a as O,b as Ee,c as yt,d as x,e as Te}from"./tslib-ddq1TtZV.js";import{o as DE}from"./idb-BXWtuYvb.js";var yf={};/**
 * @license
 * Copyright 2017 Google LLC
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
 */const om={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
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
 */const L=function(n,e){if(!n)throw vi(e)},vi=function(n){return new Error("Firebase Database ("+om.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
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
 */const am=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},OE=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],o=n[t++],a=n[t++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=n[t++],o=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Il={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],o=i+1<n.length,a=o?n[i+1]:0,u=i+2<n.length,l=u?n[i+2]:0,d=s>>2,f=(s&3)<<4|a>>4;let _=(a&15)<<2|l>>6,y=l&63;u||(y=64,o||(_=64)),r.push(t[d],t[f],t[_],t[y])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(am(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):OE(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],a=i<n.length?t[n.charAt(i)]:0;++i;const l=i<n.length?t[n.charAt(i)]:64;++i;const f=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||a==null||l==null||f==null)throw new xE;const _=s<<2|a>>4;if(r.push(_),l!==64){const y=a<<4&240|l>>2;if(r.push(y),f!==64){const A=l<<6&192|f;r.push(A)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class xE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const cm=function(n){const e=am(n);return Il.encodeByteArray(e,!0)},sa=function(n){return cm(n).replace(/\./g,"")},Es=function(n){try{return Il.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
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
 */function VE(n){return um(void 0,n)}function um(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!LE(t)||(n[t]=um(n[t],e[t]));return n}function LE(n){return n!=="__proto__"}/**
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
 */function ME(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const FE=()=>ME().__FIREBASE_DEFAULTS__,UE=()=>{if(typeof process>"u"||typeof yf>"u")return;const n=yf.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},BE=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Es(n[1]);return e&&JSON.parse(e)},ja=()=>{try{return FE()||UE()||BE()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},lm=n=>{var e,t;return(t=(e=ja())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},hm=n=>{const e=lm(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},dm=()=>{var n;return(n=ja())===null||n===void 0?void 0:n.config},fm=n=>{var e;return(e=ja())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
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
 */class zt{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
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
 */function pm(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n);return[sa(JSON.stringify(t)),sa(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function he(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ga(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(he())}function qE(){var n;const e=(n=ja())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function _m(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function mm(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function El(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function gm(){const n=he();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function ym(){return om.NODE_ADMIN===!0}function vm(){return!qE()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Im(){try{return typeof indexedDB=="object"}catch{return!1}}function $E(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const jE="FirebaseError";class _t extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=jE,Object.setPrototypeOf(this,_t.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,qn.prototype.create)}}class qn{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?GE(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new _t(i,a,r)}}function GE(n,e){return n.replace(WE,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const WE=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
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
 */function Ts(n){return JSON.parse(n)}function Fe(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const Em=function(n){let e={},t={},r={},i="";try{const s=n.split(".");e=Ts(Es(s[0])||""),t=Ts(Es(s[1])||""),i=s[2],r=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:r,signature:i}},zE=function(n){const e=Em(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},KE=function(n){const e=Em(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
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
 */function Ft(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function Zr(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function oa(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function aa(n,e,t){const r={};for(const i in n)Object.prototype.hasOwnProperty.call(n,i)&&(r[i]=e.call(t,n[i],i,n));return r}function ei(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],o=e[i];if(vf(s)&&vf(o)){if(!ei(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function vf(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function cn(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function kt(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Nt(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class HE{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const r=this.W_;if(typeof e=="string")for(let f=0;f<16;f++)r[f]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let f=0;f<16;f++)r[f]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let f=16;f<80;f++){const _=r[f-3]^r[f-8]^r[f-14]^r[f-16];r[f]=(_<<1|_>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],u=this.chain_[4],l,d;for(let f=0;f<80;f++){f<40?f<20?(l=a^s&(o^a),d=1518500249):(l=s^o^a,d=1859775393):f<60?(l=s&o|a&(s|o),d=2400959708):(l=s^o^a,d=3395469782);const _=(i<<5|i>>>27)+l+u+d+r[f]&4294967295;u=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=_}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+u&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const r=t-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<t;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<t;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<t;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=t&255,t/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function Tm(n,e){const t=new QE(n,e);return t.subscribe.bind(t)}class QE{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");YE(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=ru),i.error===void 0&&(i.error=ru),i.complete===void 0&&(i.complete=ru);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function YE(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function ru(){}function ti(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const JE=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,L(r<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):i<65536?(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Wa=function(n){let e=0;for(let t=0;t<n.length;t++){const r=n.charCodeAt(t);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,t++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
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
 */function ie(n){return n&&n._delegate?n._delegate:n}class bt{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Yn="[DEFAULT]";/**
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
 */class XE{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new zt;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(eT(e))try{this.getOrInitializeService({instanceIdentifier:Yn})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Yn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Yn){return this.instances.has(e)}getOptions(e=Yn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:ZE(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Yn){return this.component?this.component.multipleInstances?e:Yn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ZE(n){return n===Yn?void 0:n}function eT(n){return n.instantiationMode==="EAGER"}/**
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
 */class tT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new XE(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */var Z;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Z||(Z={}));const nT={debug:Z.DEBUG,verbose:Z.VERBOSE,info:Z.INFO,warn:Z.WARN,error:Z.ERROR,silent:Z.SILENT},rT=Z.INFO,iT={[Z.DEBUG]:"log",[Z.VERBOSE]:"log",[Z.INFO]:"info",[Z.WARN]:"warn",[Z.ERROR]:"error"},sT=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=iT[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class $s{constructor(e){this.name=e,this._logLevel=rT,this._logHandler=sT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Z))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?nT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Z.DEBUG,...e),this._logHandler(this,Z.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Z.VERBOSE,...e),this._logHandler(this,Z.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Z.INFO,...e),this._logHandler(this,Z.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Z.WARN,...e),this._logHandler(this,Z.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Z.ERROR,...e),this._logHandler(this,Z.ERROR,...e)}}/**
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
 */class oT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(aT(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function aT(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ru="@firebase/app",If="0.10.12";/**
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
 */const tn=new $s("@firebase/app"),cT="@firebase/app-compat",uT="@firebase/analytics-compat",lT="@firebase/analytics",hT="@firebase/app-check-compat",dT="@firebase/app-check",fT="@firebase/auth",pT="@firebase/auth-compat",_T="@firebase/database",mT="@firebase/data-connect",gT="@firebase/database-compat",yT="@firebase/functions",vT="@firebase/functions-compat",IT="@firebase/installations",ET="@firebase/installations-compat",TT="@firebase/messaging",wT="@firebase/messaging-compat",AT="@firebase/performance",RT="@firebase/performance-compat",CT="@firebase/remote-config",bT="@firebase/remote-config-compat",ST="@firebase/storage",PT="@firebase/storage-compat",kT="@firebase/firestore",NT="@firebase/vertexai-preview",DT="@firebase/firestore-compat",OT="firebase",xT="10.14.0";/**
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
 */const Cu="[DEFAULT]",VT={[Ru]:"fire-core",[cT]:"fire-core-compat",[lT]:"fire-analytics",[uT]:"fire-analytics-compat",[dT]:"fire-app-check",[hT]:"fire-app-check-compat",[fT]:"fire-auth",[pT]:"fire-auth-compat",[_T]:"fire-rtdb",[mT]:"fire-data-connect",[gT]:"fire-rtdb-compat",[yT]:"fire-fn",[vT]:"fire-fn-compat",[IT]:"fire-iid",[ET]:"fire-iid-compat",[TT]:"fire-fcm",[wT]:"fire-fcm-compat",[AT]:"fire-perf",[RT]:"fire-perf-compat",[CT]:"fire-rc",[bT]:"fire-rc-compat",[ST]:"fire-gcs",[PT]:"fire-gcs-compat",[kT]:"fire-fst",[DT]:"fire-fst-compat",[NT]:"fire-vertex","fire-js":"fire-js",[OT]:"fire-js-all"};/**
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
 */const ca=new Map,LT=new Map,bu=new Map;function Ef(n,e){try{n.container.addComponent(e)}catch(t){tn.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Lt(n){const e=n.name;if(bu.has(e))return tn.debug(`There were multiple attempts to register component ${e}.`),!1;bu.set(e,n);for(const t of ca.values())Ef(t,n);for(const t of LT.values())Ef(t,n);return!0}function js(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Ue(n){return n.settings!==void 0}/**
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
 */const MT={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Pn=new qn("app","Firebase",MT);/**
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
 */class FT{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new bt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Pn.create("app-deleted",{appName:this._name})}}/**
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
 */const Pt=xT;function UT(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Cu,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Pn.create("bad-app-name",{appName:String(i)});if(t||(t=dm()),!t)throw Pn.create("no-options");const s=ca.get(i);if(s){if(ei(t,s.options)&&ei(r,s.config))return s;throw Pn.create("duplicate-app",{appName:i})}const o=new tT(i);for(const u of bu.values())o.addComponent(u);const a=new FT(t,r,o);return ca.set(i,a),a}function Tl(n=Cu){const e=ca.get(n);if(!e&&n===Cu&&dm())return UT();if(!e)throw Pn.create("no-app",{appName:n});return e}function ft(n,e,t){var r;let i=(r=VT[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),tn.warn(a.join(" "));return}Lt(new bt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
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
 */const BT="firebase-heartbeat-database",qT=1,ws="firebase-heartbeat-store";let iu=null;function wm(){return iu||(iu=DE(BT,qT,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(ws)}catch(t){console.warn(t)}}}}).catch(n=>{throw Pn.create("idb-open",{originalErrorMessage:n.message})})),iu}async function $T(n){try{const t=(await wm()).transaction(ws),r=await t.objectStore(ws).get(Am(n));return await t.done,r}catch(e){if(e instanceof _t)tn.warn(e.message);else{const t=Pn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});tn.warn(t.message)}}}async function Tf(n,e){try{const r=(await wm()).transaction(ws,"readwrite");await r.objectStore(ws).put(e,Am(n)),await r.done}catch(t){if(t instanceof _t)tn.warn(t.message);else{const r=Pn.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});tn.warn(r.message)}}}function Am(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
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
 */const jT=1024,GT=30*24*60*60*1e3;class WT{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new KT(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=wf();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=GT}),this._storage.overwrite(this._heartbeatsCache))}catch(r){tn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=wf(),{heartbeatsToSend:r,unsentEntries:i}=zT(this._heartbeatsCache.heartbeats),s=sa(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return tn.warn(t),""}}}function wf(){return new Date().toISOString().substring(0,10)}function zT(n,e=jT){const t=[];let r=n.slice();for(const i of n){const s=t.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Af(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Af(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class KT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Im()?$E().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await $T(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Tf(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Tf(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Af(n){return sa(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function HT(n){Lt(new bt("platform-logger",e=>new oT(e),"PRIVATE")),Lt(new bt("heartbeat",e=>new WT(e),"PRIVATE")),ft(Ru,If,n),ft(Ru,If,"esm2017"),ft("fire-js","")}HT("");function Rm(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const QT=Rm,Cm=new qn("auth","Firebase",Rm());/**
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
 */const ua=new $s("@firebase/auth");function YT(n,...e){ua.logLevel<=Z.WARN&&ua.warn(`Auth (${Pt}): ${n}`,...e)}function $o(n,...e){ua.logLevel<=Z.ERROR&&ua.error(`Auth (${Pt}): ${n}`,...e)}/**
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
 */function It(n,...e){throw Al(n,...e)}function At(n,...e){return Al(n,...e)}function wl(n,e,t){const r=Object.assign(Object.assign({},QT()),{[e]:t});return new qn("auth","Firebase",r).create(e,{appName:n.name})}function Xt(n){return wl(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function JT(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&It(n,"argument-error"),wl(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Al(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Cm.create(n,...e)}function K(n,e,...t){if(!n)throw Al(e,...t)}function Kt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw $o(e),new Error(e)}function nn(n,e){n||Kt(e)}/**
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
 */function Su(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function XT(){return Rf()==="http:"||Rf()==="https:"}function Rf(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function ZT(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(XT()||mm()||"connection"in navigator)?navigator.onLine:!0}function ew(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */let Gs=class{constructor(e,t){this.shortDelay=e,this.longDelay=t,nn(t>e,"Short delay should be less than long delay!"),this.isMobile=Ga()||El()}get(){return ZT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}};/**
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
 */function Rl(n,e){nn(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */let bm=class{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Kt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Kt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Kt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}};/**
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
 */const tw={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const nw=new Gs(3e4,6e4);function un(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Ut(n,e,t,r,i={}){return Sm(n,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=cn(Object.assign({key:n.config.apiKey},o)).slice(1),u=await n._getAdditionalHeaders();u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode);const l=Object.assign({method:e,headers:u},s);return _m()||(l.referrerPolicy="no-referrer"),bm.fetch()(Pm(n,n.config.apiHost,t,a),l)})}async function Sm(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},tw),e);try{const i=new iw(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw No(n,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[u,l]=a.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw No(n,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw No(n,"email-already-in-use",o);if(u==="USER_DISABLED")throw No(n,"user-disabled",o);const d=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw wl(n,d,l);It(n,d)}}catch(i){if(i instanceof _t)throw i;It(n,"network-request-failed",{message:String(i)})}}async function Ws(n,e,t,r,i={}){const s=await Ut(n,e,t,r,i);return"mfaPendingCredential"in s&&It(n,"multi-factor-auth-required",{_serverResponse:s}),s}function Pm(n,e,t,r){const i=`${e}${t}?${r}`;return n.config.emulator?Rl(n.config,i):`${n.config.apiScheme}://${i}`}function rw(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}let iw=class{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(At(this.auth,"network-request-failed")),nw.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}};function No(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=At(n,e,r);return i.customData._tokenResponse=t,i}function Cf(n){return n!==void 0&&n.enterprise!==void 0}let sw=class{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return rw(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}};async function ow(n,e){return Ut(n,"GET","/v2/recaptchaConfig",un(n,e))}/**
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
 */async function aw(n,e){return Ut(n,"POST","/v1/accounts:delete",e)}async function km(n,e){return Ut(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function us(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function cw(n,e=!1){const t=ie(n),r=await t.getIdToken(e),i=Cl(r);K(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:us(su(i.auth_time)),issuedAtTime:us(su(i.iat)),expirationTime:us(su(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function su(n){return Number(n)*1e3}function Cl(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return $o("JWT malformed, contained fewer than 3 sections"),null;try{const i=Es(t);return i?JSON.parse(i):($o("Failed to decode base64 JWT payload"),null)}catch(i){return $o("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function bf(n){const e=Cl(n);return K(e,"internal-error"),K(typeof e.exp<"u","internal-error"),K(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ni(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof _t&&uw(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function uw({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */let lw=class{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}};/**
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
 */let Pu=class{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=us(this.lastLoginAt),this.creationTime=us(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}};/**
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
 */async function la(n){var e;const t=n.auth,r=await n.getIdToken(),i=await ni(n,km(t,{idToken:r}));K(i==null?void 0:i.users.length,t,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Nm(s.providerUserInfo):[],a=dw(n.providerData,o),u=n.isAnonymous,l=!(n.email&&s.passwordHash)&&!(a!=null&&a.length),d=u?l:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Pu(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(n,f)}async function hw(n){const e=ie(n);await la(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function dw(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Nm(n){return n.map(e=>{var{providerId:t}=e,r=yi(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function fw(n,e){const t=await Sm(n,{},async()=>{const r=cn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,o=Pm(n,i,"/v1/token",`key=${s}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",bm.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function pw(n,e){return Ut(n,"POST","/v2/accounts:revokeToken",un(n,e))}/**
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
 */let ou=class ku{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){K(e.idToken,"internal-error"),K(typeof e.idToken<"u","internal-error"),K(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):bf(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){K(e.length!==0,"internal-error");const t=bf(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(K(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:s}=await fw(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:s}=t,o=new ku;return r&&(K(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(K(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(K(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ku,this.toJSON())}_performRefresh(){return Kt("not implemented")}};/**
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
 */function mn(n,e){K(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}let ha=class ts{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,s=yi(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new lw(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Pu(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await ni(this,this.stsTokenManager.getToken(this.auth,e));return K(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return cw(this,e)}reload(){return hw(this)}_assign(e){this!==e&&(K(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new ts(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){K(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await la(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ue(this.auth.app))return Promise.reject(Xt(this.auth));const e=await this.getIdToken();return await ni(this,aw(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,s,o,a,u,l,d;const f=(r=t.displayName)!==null&&r!==void 0?r:void 0,_=(i=t.email)!==null&&i!==void 0?i:void 0,y=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,A=(o=t.photoURL)!==null&&o!==void 0?o:void 0,P=(a=t.tenantId)!==null&&a!==void 0?a:void 0,S=(u=t._redirectEventId)!==null&&u!==void 0?u:void 0,U=(l=t.createdAt)!==null&&l!==void 0?l:void 0,q=(d=t.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:B,emailVerified:G,isAnonymous:se,providerData:Y,stsTokenManager:E}=t;K(B&&E,e,"internal-error");const g=ou.fromJSON(this.name,E);K(typeof B=="string",e,"internal-error"),mn(f,e.name),mn(_,e.name),K(typeof G=="boolean",e,"internal-error"),K(typeof se=="boolean",e,"internal-error"),mn(y,e.name),mn(A,e.name),mn(P,e.name),mn(S,e.name),mn(U,e.name),mn(q,e.name);const v=new ts({uid:B,auth:e,email:_,emailVerified:G,displayName:f,isAnonymous:se,photoURL:A,phoneNumber:y,tenantId:P,stsTokenManager:g,createdAt:U,lastLoginAt:q});return Y&&Array.isArray(Y)&&(v.providerData=Y.map(T=>Object.assign({},T))),S&&(v._redirectEventId=S),v}static async _fromIdTokenResponse(e,t,r=!1){const i=new ou;i.updateFromServerResponse(t);const s=new ts({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await la(s),s}static async _fromGetAccountInfoResponse(e,t,r){const i=t.users[0];K(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Nm(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new ou;a.updateFromIdToken(r);const u=new ts({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),l={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Pu(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,l),u}};/**
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
 */const Sf=new Map;function Ht(n){nn(n instanceof Function,"Expected a class definition");let e=Sf.get(n);return e?(nn(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Sf.set(n,e),e)}/**
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
 */let Dm=class{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}};Dm.type="NONE";const Pf=Dm;/**
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
 */function jo(n,e,t){return`firebase:${n}:${e}:${t}`}let kf=class Go{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=jo(this.userKey,i.apiKey,s),this.fullPersistenceKey=jo("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ha._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Go(Ht(Pf),e,r);const i=(await Promise.all(t.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let s=i[0]||Ht(Pf);const o=jo(r,e.config.apiKey,e.name);let a=null;for(const l of t)try{const d=await l._get(o);if(d){const f=ha._fromJSON(e,d);l!==s&&(a=f),s=l;break}}catch{}const u=i.filter(l=>l._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Go(s,e,r):(s=u[0],a&&await s._set(o,a.toJSON()),await Promise.all(t.map(async l=>{if(l!==s)try{await l._remove(o)}catch{}})),new Go(s,e,r))}};/**
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
 */function Nf(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Lm(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Om(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Fm(e))return"Blackberry";if(Um(e))return"Webos";if(xm(e))return"Safari";if((e.includes("chrome/")||Vm(e))&&!e.includes("edge/"))return"Chrome";if(Mm(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Om(n=he()){return/firefox\//i.test(n)}function xm(n=he()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Vm(n=he()){return/crios\//i.test(n)}function Lm(n=he()){return/iemobile/i.test(n)}function Mm(n=he()){return/android/i.test(n)}function Fm(n=he()){return/blackberry/i.test(n)}function Um(n=he()){return/webos/i.test(n)}function bl(n=he()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function _w(n=he()){var e;return bl(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function mw(){return gm()&&document.documentMode===10}function Bm(n=he()){return bl(n)||Mm(n)||Um(n)||Fm(n)||/windows phone/i.test(n)||Lm(n)}/**
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
 */function qm(n,e=[]){let t;switch(n){case"Browser":t=Nf(he());break;case"Worker":t=`${Nf(he())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Pt}/${r}`}/**
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
 */let gw=class{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=s=>new Promise((o,a)=>{try{const u=e(s);o(u)}catch(u){a(u)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}};/**
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
 */async function yw(n,e={}){return Ut(n,"GET","/v2/passwordPolicy",un(n,e))}/**
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
 */const vw=6;let Iw=class{constructor(e){var t,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:vw,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,i,s,o,a;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(t=u.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(a=u.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),u}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}};/**
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
 */let Ew=class{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Df(this),this.idTokenSubscription=new Df(this),this.beforeStateQueue=new gw(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Cm,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Ht(t)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await kf.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await km(this,{idToken:e}),r=await ha._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Ue(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===a)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return K(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await la(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=ew()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ue(this.app))return Promise.reject(Xt(this));const t=e?ie(e):null;return t&&K(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&K(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ue(this.app)?Promise.reject(Xt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ue(this.app)?Promise.reject(Xt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ht(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await yw(this),t=new Iw(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new qn("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await pw(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Ht(e)||this._popupRedirectResolver;K(t,this,"argument-error"),this.redirectPersistenceManager=await kf.create(this,[Ht(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(K(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(t);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return K(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=qm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&YT(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}};function ln(n){return ie(n)}let Df=class{constructor(e){this.auth=e,this.observer=null,this.addObserver=Tm(t=>this.observer=t)}get next(){return K(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}};/**
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
 */let za={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Tw(n){za=n}function $m(n){return za.loadJS(n)}function ww(){return za.recaptchaEnterpriseScript}function Aw(){return za.gapiScript}function Rw(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const Cw="recaptcha-enterprise",bw="NO_RECAPTCHA";let Sw=class{constructor(e){this.type=Cw,this.auth=ln(e)}async verify(e="verify",t=!1){async function r(s){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{ow(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new sw(u);return s.tenantId==null?s._agentRecaptchaConfig=l:s._tenantRecaptchaConfigs[s.tenantId]=l,o(l.siteKey)}}).catch(u=>{a(u)})})}function i(s,o,a){const u=window.grecaptcha;Cf(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(l=>{o(l)}).catch(()=>{o(bw)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!t&&Cf(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=ww();u.length!==0&&(u+=a),$m(u).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}};async function Of(n,e,t,r=!1){const i=new Sw(n);let s;try{s=await i.verify(t)}catch{s=await i.verify(t,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function da(n,e,t,r){var i;if(!((i=n._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await Of(n,e,t,t==="getOobCode");return r(n,s)}else return r(n,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Of(n,e,t,t==="getOobCode");return r(n,o)}else return Promise.reject(s)})}/**
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
 */function Pw(n,e){const t=js(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),s=t.getOptions();if(ei(s,e??{}))return i;It(i,"already-initialized")}return t.initialize({options:e})}function kw(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(Ht);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Nw(n,e,t){const r=ln(n);K(r._canInitEmulator,r,"emulator-config-failed"),K(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=jm(e),{host:o,port:a}=Dw(e),u=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),Ow()}function jm(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Dw(n){const e=jm(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:xf(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:xf(o)}}}function xf(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Ow(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */let Sl=class{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Kt("not implemented")}_getIdTokenResponse(e){return Kt("not implemented")}_linkToIdToken(e,t){return Kt("not implemented")}_getReauthenticationResolver(e){return Kt("not implemented")}};async function xw(n,e){return Ut(n,"POST","/v1/accounts:update",e)}async function Vw(n,e){return Ut(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function Lw(n,e){return Ws(n,"POST","/v1/accounts:signInWithPassword",un(n,e))}async function Mw(n,e){return Ut(n,"POST","/v1/accounts:sendOobCode",un(n,e))}async function Fw(n,e){return Mw(n,e)}/**
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
 */async function Uw(n,e){return Ws(n,"POST","/v1/accounts:signInWithEmailLink",un(n,e))}async function Bw(n,e){return Ws(n,"POST","/v1/accounts:signInWithEmailLink",un(n,e))}/**
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
 */let Vf=class Nu extends Sl{constructor(e,t,r,i=null){super("password",r),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new Nu(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new Nu(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return da(e,t,"signInWithPassword",Lw);case"emailLink":return Uw(e,{email:this._email,oobCode:this._password});default:It(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return da(e,r,"signUpPassword",Vw);case"emailLink":return Bw(e,{idToken:t,email:this._email,oobCode:this._password});default:It(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}};/**
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
 */async function zr(n,e){return Ws(n,"POST","/v1/accounts:signInWithIdp",un(n,e))}/**
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
 */const qw="http://localhost";let Ka=class Du extends Sl{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Du(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):It("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,s=yi(t,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Du(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return zr(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,zr(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,zr(e,t)}buildRequest(){const e={requestUri:qw,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=cn(t)}return e}};/**
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
 */function $w(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function jw(n){const e=kt(Nt(n)).link,t=e?kt(Nt(e)).deep_link_id:null,r=kt(Nt(n)).deep_link_id;return(r?kt(Nt(r)).link:null)||r||t||e||n}let Gw=class Gm{constructor(e){var t,r,i,s,o,a;const u=kt(Nt(e)),l=(t=u.apiKey)!==null&&t!==void 0?t:null,d=(r=u.oobCode)!==null&&r!==void 0?r:null,f=$w((i=u.mode)!==null&&i!==void 0?i:null);K(l&&d&&f,"argument-error"),this.apiKey=l,this.operation=f,this.code=d,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=u.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const t=jw(e);try{return new Gm(t)}catch{return null}}};/**
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
 */let Ha=class Wm{constructor(){this.providerId=Wm.PROVIDER_ID}static credential(e,t){return Vf._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Gw.parseLink(t);return K(r,"argument-error"),Vf._fromEmailAndCode(e,r.code,r.tenantId)}};Ha.PROVIDER_ID="password";Ha.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ha.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */let Pl=class{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}};/**
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
 */let zs=class extends Pl{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}};/**
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
 */class In extends zs{constructor(){super("facebook.com")}static credential(e){return Ka._fromParams({providerId:In.PROVIDER_ID,signInMethod:In.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return In.credentialFromTaggedObject(e)}static credentialFromError(e){return In.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return In.credential(e.oauthAccessToken)}catch{return null}}}In.FACEBOOK_SIGN_IN_METHOD="facebook.com";In.PROVIDER_ID="facebook.com";/**
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
 */class En extends zs{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ka._fromParams({providerId:En.PROVIDER_ID,signInMethod:En.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return En.credentialFromTaggedObject(e)}static credentialFromError(e){return En.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return En.credential(t,r)}catch{return null}}}En.GOOGLE_SIGN_IN_METHOD="google.com";En.PROVIDER_ID="google.com";/**
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
 */class Tn extends zs{constructor(){super("github.com")}static credential(e){return Ka._fromParams({providerId:Tn.PROVIDER_ID,signInMethod:Tn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Tn.credentialFromTaggedObject(e)}static credentialFromError(e){return Tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Tn.credential(e.oauthAccessToken)}catch{return null}}}Tn.GITHUB_SIGN_IN_METHOD="github.com";Tn.PROVIDER_ID="github.com";/**
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
 */class wn extends zs{constructor(){super("twitter.com")}static credential(e,t){return Ka._fromParams({providerId:wn.PROVIDER_ID,signInMethod:wn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return wn.credentialFromTaggedObject(e)}static credentialFromError(e){return wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return wn.credential(t,r)}catch{return null}}}wn.TWITTER_SIGN_IN_METHOD="twitter.com";wn.PROVIDER_ID="twitter.com";/**
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
 */async function Ww(n,e){return Ws(n,"POST","/v1/accounts:signUp",un(n,e))}/**
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
 */let Qa=class Ou{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const s=await ha._fromIdTokenResponse(e,r,i),o=Lf(r);return new Ou({user:s,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=Lf(r);return new Ou({user:e,providerId:i,_tokenResponse:r,operationType:t})}};function Lf(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */let zw=class xu extends _t{constructor(e,t,r,i){var s;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,xu.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new xu(e,t,r,i)}};function zm(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?zw._fromErrorAndOperation(n,s,e,r):s})}async function Kw(n,e,t=!1){const r=await ni(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Qa._forOperation(n,"link",r)}/**
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
 */async function Km(n,e,t=!1){const{auth:r}=n;if(Ue(r.app))return Promise.reject(Xt(r));const i="reauthenticate";try{const s=await ni(n,zm(r,i,e,n),t);K(s.idToken,r,"internal-error");const o=Cl(s.idToken);K(o,r,"internal-error");const{sub:a}=o;return K(n.uid===a,r,"user-mismatch"),Qa._forOperation(n,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&It(r,"user-mismatch"),s}}/**
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
 */async function Hm(n,e,t=!1){if(Ue(n.app))return Promise.reject(Xt(n));const r="signIn",i=await zm(n,r,e),s=await Qa._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(s.user),s}async function Hw(n,e){return Hm(ln(n),e)}async function ZO(n,e){return Km(ie(n),e)}/**
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
 */async function Qm(n){const e=ln(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function ex(n,e,t){const r=ln(n);await da(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",Fw)}async function tx(n,e,t){if(Ue(n.app))return Promise.reject(Xt(n));const r=ln(n),o=await da(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Ww).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&Qm(n),u}),a=await Qa._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function nx(n,e,t){return Ue(n.app)?Promise.reject(Xt(n)):Hw(ie(n),Ha.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Qm(n),r})}function rx(n,e){return Qw(ie(n),null,e)}async function Qw(n,e,t){const{auth:r}=n,s={idToken:await n.getIdToken(),returnSecureToken:!0};t&&(s.password=t);const o=await ni(n,xw(r,s));await n._updateTokensIfNecessary(o,!0)}function Yw(n,e,t,r){return ie(n).onIdTokenChanged(e,t,r)}function Jw(n,e,t){return ie(n).beforeAuthStateChanged(e,t)}function ix(n,e,t,r){return ie(n).onAuthStateChanged(e,t,r)}function sx(n){return ie(n).signOut()}const fa="__sak";/**
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
 */let Ym=class{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(fa,"1"),this.storage.removeItem(fa),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}};/**
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
 */const Xw=1e3,Zw=10;class Jm extends Ym{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Bm(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,u)=>{this.notifyListeners(o,u)});return}const r=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);mw()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Zw):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},Xw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Jm.type="LOCAL";const eA=Jm;/**
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
 */class Xm extends Ym{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Xm.type="SESSION";const Zm=Xm;/**
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
 */function tA(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Ya{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new Ya(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:s}=t.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async l=>l(t.origin,s)),u=await tA(a);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ya.receivers=[];/**
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
 */function kl(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class nA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,u)=>{const l=kl("",20);i.port1.start();const d=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const _=f;if(_.data.eventId===l)switch(_.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(_.data.response);break;default:clearTimeout(d),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Vt(){return window}function rA(n){Vt().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */function eg(){return typeof Vt().WorkerGlobalScope<"u"&&typeof Vt().importScripts=="function"}async function iA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function sA(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function oA(){return eg()?self:null}/**
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
 */const tg="firebaseLocalStorageDb",aA=1,pa="firebaseLocalStorage",ng="fbase_key";class Ks{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Ja(n,e){return n.transaction([pa],e?"readwrite":"readonly").objectStore(pa)}function cA(){const n=indexedDB.deleteDatabase(tg);return new Ks(n).toPromise()}function Vu(){const n=indexedDB.open(tg,aA);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(pa,{keyPath:ng})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(pa)?e(r):(r.close(),await cA(),e(await Vu()))})})}async function Mf(n,e,t){const r=Ja(n,!0).put({[ng]:e,value:t});return new Ks(r).toPromise()}async function uA(n,e){const t=Ja(n,!1).get(e),r=await new Ks(t).toPromise();return r===void 0?null:r.value}function Ff(n,e){const t=Ja(n,!0).delete(e);return new Ks(t).toPromise()}const lA=800,hA=3;class rg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Vu(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>hA)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return eg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ya._getInstance(oA()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await iA(),!this.activeServiceWorker)return;this.sender=new nA(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||sA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Vu();return await Mf(e,fa,"1"),await Ff(e,fa),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Mf(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>uA(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Ff(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Ja(i,!1).getAll();return new Ks(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),lA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}rg.type="LOCAL";const dA=rg;new Gs(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
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
 */function ig(n,e){return e?Ht(e):(K(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */let Nl=class extends Sl{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return zr(e,this._buildIdpRequest())}_linkToIdToken(e,t){return zr(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return zr(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}};function fA(n){return Hm(n.auth,new Nl(n),n.bypassAuthState)}function pA(n){const{auth:e,user:t}=n;return K(t,e,"internal-error"),Km(t,new Nl(n),n.bypassAuthState)}async function _A(n){const{auth:e,user:t}=n;return K(t,e,"internal-error"),Kw(t,new Nl(n),n.bypassAuthState)}/**
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
 */let sg=class{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(u))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return fA;case"linkViaPopup":case"linkViaRedirect":return _A;case"reauthViaPopup":case"reauthViaRedirect":return pA;default:It(this.auth,"internal-error")}}resolve(e){nn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){nn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}};/**
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
 */const mA=new Gs(2e3,1e4);async function ux(n,e,t){if(Ue(n.app))return Promise.reject(At(n,"operation-not-supported-in-this-environment"));const r=ln(n);JT(n,e,Pl);const i=ig(r,t);return new rr(r,"signInViaPopup",e,i).executeNotNull()}class rr extends sg{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,rr.currentPopupAction&&rr.currentPopupAction.cancel(),rr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return K(e,this.auth,"internal-error"),e}async onExecution(){nn(this.filter.length===1,"Popup operations only handle one event");const e=kl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(At(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(At(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,rr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(At(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,mA.get())};e()}}rr.currentPopupAction=null;/**
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
 */const gA="pendingRedirect",Wo=new Map;class yA extends sg{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Wo.get(this.auth._key());if(!e){try{const r=await vA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Wo.set(this.auth._key(),e)}return this.bypassAuthState||Wo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function vA(n,e){const t=TA(e),r=EA(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}function IA(n,e){Wo.set(n._key(),e)}function EA(n){return Ht(n._redirectPersistence)}function TA(n){return jo(gA,n.config.apiKey,n.name)}async function wA(n,e,t=!1){if(Ue(n.app))return Promise.reject(Xt(n));const r=ln(n),i=ig(r,e),o=await new yA(r,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const AA=10*60*1e3;let RA=class{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!CA(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!og(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(At(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=AA&&this.cachedEventUids.clear(),this.cachedEventUids.has(Uf(e))}saveEventToCache(e){this.cachedEventUids.add(Uf(e)),this.lastProcessedEventTime=Date.now()}};function Uf(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function og({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function CA(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return og(n);default:return!1}}/**
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
 */async function bA(n,e={}){return Ut(n,"GET","/v1/projects",e)}/**
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
 */const SA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,PA=/^https?/;async function kA(n){if(n.config.emulator)return;const{authorizedDomains:e}=await bA(n);for(const t of e)try{if(NA(t))return}catch{}It(n,"unauthorized-domain")}function NA(n){const e=Su(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!PA.test(t))return!1;if(SA.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const DA=new Gs(3e4,6e4);function Bf(){const n=Vt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function OA(n){return new Promise((e,t)=>{var r,i,s;function o(){Bf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Bf(),t(At(n,"network-request-failed"))},timeout:DA.get()})}if(!((i=(r=Vt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Vt().gapi)===null||s===void 0)&&s.load)o();else{const a=Rw("iframefcb");return Vt()[a]=()=>{gapi.load?o():t(At(n,"network-request-failed"))},$m(`${Aw()}?onload=${a}`).catch(u=>t(u))}}).catch(e=>{throw zo=null,e})}let zo=null;function xA(n){return zo=zo||OA(n),zo}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const VA=new Gs(5e3,15e3),LA="__/auth/iframe",MA="emulator/auth/iframe",FA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},UA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function BA(n){const e=n.config;K(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Rl(e,MA):`https://${n.config.authDomain}/${LA}`,r={apiKey:e.apiKey,appName:n.name,v:Pt},i=UA.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${cn(r).slice(1)}`}async function qA(n){const e=await xA(n),t=Vt().gapi;return K(t,n,"internal-error"),e.open({where:document.body,url:BA(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:FA,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=At(n,"network-request-failed"),a=Vt().setTimeout(()=>{s(o)},VA.get());function u(){Vt().clearTimeout(a),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const $A={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},jA=500,GA=600,WA="_blank",zA="http://localhost";class qf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function KA(n,e,t,r=jA,i=GA){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const u=Object.assign(Object.assign({},$A),{width:r.toString(),height:i.toString(),top:s,left:o}),l=he().toLowerCase();t&&(a=Vm(l)?WA:t),Om(l)&&(e=e||zA,u.scrollbars="yes");const d=Object.entries(u).reduce((_,[y,A])=>`${_}${y}=${A},`,"");if(_w(l)&&a!=="_self")return HA(e||"",a),new qf(null);const f=window.open(e||"",a,d);K(f,n,"popup-blocked");try{f.focus()}catch{}return new qf(f)}function HA(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
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
 */const QA="__/auth/handler",YA="emulator/auth/handler",JA=encodeURIComponent("fac");async function $f(n,e,t,r,i,s){K(n.config.authDomain,n,"auth-domain-config-required"),K(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Pt,eventId:i};if(e instanceof Pl){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",oa(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,f]of Object.entries({}))o[d]=f}if(e instanceof zs){const d=e.getScopes().filter(f=>f!=="");d.length>0&&(o.scopes=d.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const u=await n._getAppCheckToken(),l=u?`#${JA}=${encodeURIComponent(u)}`:"";return`${XA(n)}?${cn(a).slice(1)}${l}`}function XA({config:n}){return n.emulator?Rl(n,YA):`https://${n.authDomain}/${QA}`}/**
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
 */const au="webStorageSupport";class ZA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Zm,this._completeRedirectFn=wA,this._overrideRedirectResult=IA}async _openPopup(e,t,r,i){var s;nn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await $f(e,t,r,Su(),i);return KA(e,o,kl())}async _openRedirect(e,t,r,i){await this._originValidation(e);const s=await $f(e,t,r,Su(),i);return rA(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(nn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await qA(e),r=new RA(e);return t.register("authEvent",i=>(K(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(au,{type:au},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[au];o!==void 0&&t(!!o),It(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=kA(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Bm()||xm()||bl()}}const eR=ZA;var jf="@firebase/auth",Gf="1.7.9";/**
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
 */let tR=class{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){K(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}};/**
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
 */function nR(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function rR(n){Lt(new bt("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;K(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:qm(n)},l=new Ew(r,i,s,u);return kw(l,t),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Lt(new bt("auth-internal",e=>{const t=ln(e.getProvider("auth").getImmediate());return(r=>new tR(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),ft(jf,Gf,nR(n)),ft(jf,Gf,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
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
 */const iR=5*60,sR=fm("authIdTokenMaxAge")||iR;let Wf=null;const oR=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>sR)return;const i=t==null?void 0:t.token;Wf!==i&&(Wf=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function dx(n=Tl()){const e=js(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Pw(n,{popupRedirectResolver:eR,persistence:[dA,eA,Zm]}),r=fm("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=oR(s.toString());Jw(t,o,()=>o(t.currentUser)),Yw(t,a=>o(a))}}const i=lm("auth");return i&&Nw(t,`http://${i}`),t}function aR(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}Tw({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const s=At("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",aR().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});rR("Browser");var zf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var or,ag;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,g){function v(){}v.prototype=g.prototype,E.D=g.prototype,E.prototype=new v,E.prototype.constructor=E,E.C=function(T,w,b){for(var I=Array(arguments.length-2),$t=2;$t<arguments.length;$t++)I[$t-2]=arguments[$t];return g.prototype[w].apply(T,I)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(E,g,v){v||(v=0);var T=Array(16);if(typeof g=="string")for(var w=0;16>w;++w)T[w]=g.charCodeAt(v++)|g.charCodeAt(v++)<<8|g.charCodeAt(v++)<<16|g.charCodeAt(v++)<<24;else for(w=0;16>w;++w)T[w]=g[v++]|g[v++]<<8|g[v++]<<16|g[v++]<<24;g=E.g[0],v=E.g[1],w=E.g[2];var b=E.g[3],I=g+(b^v&(w^b))+T[0]+3614090360&4294967295;g=v+(I<<7&4294967295|I>>>25),I=b+(w^g&(v^w))+T[1]+3905402710&4294967295,b=g+(I<<12&4294967295|I>>>20),I=w+(v^b&(g^v))+T[2]+606105819&4294967295,w=b+(I<<17&4294967295|I>>>15),I=v+(g^w&(b^g))+T[3]+3250441966&4294967295,v=w+(I<<22&4294967295|I>>>10),I=g+(b^v&(w^b))+T[4]+4118548399&4294967295,g=v+(I<<7&4294967295|I>>>25),I=b+(w^g&(v^w))+T[5]+1200080426&4294967295,b=g+(I<<12&4294967295|I>>>20),I=w+(v^b&(g^v))+T[6]+2821735955&4294967295,w=b+(I<<17&4294967295|I>>>15),I=v+(g^w&(b^g))+T[7]+4249261313&4294967295,v=w+(I<<22&4294967295|I>>>10),I=g+(b^v&(w^b))+T[8]+1770035416&4294967295,g=v+(I<<7&4294967295|I>>>25),I=b+(w^g&(v^w))+T[9]+2336552879&4294967295,b=g+(I<<12&4294967295|I>>>20),I=w+(v^b&(g^v))+T[10]+4294925233&4294967295,w=b+(I<<17&4294967295|I>>>15),I=v+(g^w&(b^g))+T[11]+2304563134&4294967295,v=w+(I<<22&4294967295|I>>>10),I=g+(b^v&(w^b))+T[12]+1804603682&4294967295,g=v+(I<<7&4294967295|I>>>25),I=b+(w^g&(v^w))+T[13]+4254626195&4294967295,b=g+(I<<12&4294967295|I>>>20),I=w+(v^b&(g^v))+T[14]+2792965006&4294967295,w=b+(I<<17&4294967295|I>>>15),I=v+(g^w&(b^g))+T[15]+1236535329&4294967295,v=w+(I<<22&4294967295|I>>>10),I=g+(w^b&(v^w))+T[1]+4129170786&4294967295,g=v+(I<<5&4294967295|I>>>27),I=b+(v^w&(g^v))+T[6]+3225465664&4294967295,b=g+(I<<9&4294967295|I>>>23),I=w+(g^v&(b^g))+T[11]+643717713&4294967295,w=b+(I<<14&4294967295|I>>>18),I=v+(b^g&(w^b))+T[0]+3921069994&4294967295,v=w+(I<<20&4294967295|I>>>12),I=g+(w^b&(v^w))+T[5]+3593408605&4294967295,g=v+(I<<5&4294967295|I>>>27),I=b+(v^w&(g^v))+T[10]+38016083&4294967295,b=g+(I<<9&4294967295|I>>>23),I=w+(g^v&(b^g))+T[15]+3634488961&4294967295,w=b+(I<<14&4294967295|I>>>18),I=v+(b^g&(w^b))+T[4]+3889429448&4294967295,v=w+(I<<20&4294967295|I>>>12),I=g+(w^b&(v^w))+T[9]+568446438&4294967295,g=v+(I<<5&4294967295|I>>>27),I=b+(v^w&(g^v))+T[14]+3275163606&4294967295,b=g+(I<<9&4294967295|I>>>23),I=w+(g^v&(b^g))+T[3]+4107603335&4294967295,w=b+(I<<14&4294967295|I>>>18),I=v+(b^g&(w^b))+T[8]+1163531501&4294967295,v=w+(I<<20&4294967295|I>>>12),I=g+(w^b&(v^w))+T[13]+2850285829&4294967295,g=v+(I<<5&4294967295|I>>>27),I=b+(v^w&(g^v))+T[2]+4243563512&4294967295,b=g+(I<<9&4294967295|I>>>23),I=w+(g^v&(b^g))+T[7]+1735328473&4294967295,w=b+(I<<14&4294967295|I>>>18),I=v+(b^g&(w^b))+T[12]+2368359562&4294967295,v=w+(I<<20&4294967295|I>>>12),I=g+(v^w^b)+T[5]+4294588738&4294967295,g=v+(I<<4&4294967295|I>>>28),I=b+(g^v^w)+T[8]+2272392833&4294967295,b=g+(I<<11&4294967295|I>>>21),I=w+(b^g^v)+T[11]+1839030562&4294967295,w=b+(I<<16&4294967295|I>>>16),I=v+(w^b^g)+T[14]+4259657740&4294967295,v=w+(I<<23&4294967295|I>>>9),I=g+(v^w^b)+T[1]+2763975236&4294967295,g=v+(I<<4&4294967295|I>>>28),I=b+(g^v^w)+T[4]+1272893353&4294967295,b=g+(I<<11&4294967295|I>>>21),I=w+(b^g^v)+T[7]+4139469664&4294967295,w=b+(I<<16&4294967295|I>>>16),I=v+(w^b^g)+T[10]+3200236656&4294967295,v=w+(I<<23&4294967295|I>>>9),I=g+(v^w^b)+T[13]+681279174&4294967295,g=v+(I<<4&4294967295|I>>>28),I=b+(g^v^w)+T[0]+3936430074&4294967295,b=g+(I<<11&4294967295|I>>>21),I=w+(b^g^v)+T[3]+3572445317&4294967295,w=b+(I<<16&4294967295|I>>>16),I=v+(w^b^g)+T[6]+76029189&4294967295,v=w+(I<<23&4294967295|I>>>9),I=g+(v^w^b)+T[9]+3654602809&4294967295,g=v+(I<<4&4294967295|I>>>28),I=b+(g^v^w)+T[12]+3873151461&4294967295,b=g+(I<<11&4294967295|I>>>21),I=w+(b^g^v)+T[15]+530742520&4294967295,w=b+(I<<16&4294967295|I>>>16),I=v+(w^b^g)+T[2]+3299628645&4294967295,v=w+(I<<23&4294967295|I>>>9),I=g+(w^(v|~b))+T[0]+4096336452&4294967295,g=v+(I<<6&4294967295|I>>>26),I=b+(v^(g|~w))+T[7]+1126891415&4294967295,b=g+(I<<10&4294967295|I>>>22),I=w+(g^(b|~v))+T[14]+2878612391&4294967295,w=b+(I<<15&4294967295|I>>>17),I=v+(b^(w|~g))+T[5]+4237533241&4294967295,v=w+(I<<21&4294967295|I>>>11),I=g+(w^(v|~b))+T[12]+1700485571&4294967295,g=v+(I<<6&4294967295|I>>>26),I=b+(v^(g|~w))+T[3]+2399980690&4294967295,b=g+(I<<10&4294967295|I>>>22),I=w+(g^(b|~v))+T[10]+4293915773&4294967295,w=b+(I<<15&4294967295|I>>>17),I=v+(b^(w|~g))+T[1]+2240044497&4294967295,v=w+(I<<21&4294967295|I>>>11),I=g+(w^(v|~b))+T[8]+1873313359&4294967295,g=v+(I<<6&4294967295|I>>>26),I=b+(v^(g|~w))+T[15]+4264355552&4294967295,b=g+(I<<10&4294967295|I>>>22),I=w+(g^(b|~v))+T[6]+2734768916&4294967295,w=b+(I<<15&4294967295|I>>>17),I=v+(b^(w|~g))+T[13]+1309151649&4294967295,v=w+(I<<21&4294967295|I>>>11),I=g+(w^(v|~b))+T[4]+4149444226&4294967295,g=v+(I<<6&4294967295|I>>>26),I=b+(v^(g|~w))+T[11]+3174756917&4294967295,b=g+(I<<10&4294967295|I>>>22),I=w+(g^(b|~v))+T[2]+718787259&4294967295,w=b+(I<<15&4294967295|I>>>17),I=v+(b^(w|~g))+T[9]+3951481745&4294967295,E.g[0]=E.g[0]+g&4294967295,E.g[1]=E.g[1]+(w+(I<<21&4294967295|I>>>11))&4294967295,E.g[2]=E.g[2]+w&4294967295,E.g[3]=E.g[3]+b&4294967295}r.prototype.u=function(E,g){g===void 0&&(g=E.length);for(var v=g-this.blockSize,T=this.B,w=this.h,b=0;b<g;){if(w==0)for(;b<=v;)i(this,E,b),b+=this.blockSize;if(typeof E=="string"){for(;b<g;)if(T[w++]=E.charCodeAt(b++),w==this.blockSize){i(this,T),w=0;break}}else for(;b<g;)if(T[w++]=E[b++],w==this.blockSize){i(this,T),w=0;break}}this.h=w,this.o+=g},r.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var g=1;g<E.length-8;++g)E[g]=0;var v=8*this.o;for(g=E.length-8;g<E.length;++g)E[g]=v&255,v/=256;for(this.u(E),E=Array(16),g=v=0;4>g;++g)for(var T=0;32>T;T+=8)E[v++]=this.g[g]>>>T&255;return E};function s(E,g){var v=a;return Object.prototype.hasOwnProperty.call(v,E)?v[E]:v[E]=g(E)}function o(E,g){this.h=g;for(var v=[],T=!0,w=E.length-1;0<=w;w--){var b=E[w]|0;T&&b==g||(v[w]=b,T=!1)}this.g=v}var a={};function u(E){return-128<=E&&128>E?s(E,function(g){return new o([g|0],0>g?-1:0)}):new o([E|0],0>E?-1:0)}function l(E){if(isNaN(E)||!isFinite(E))return f;if(0>E)return S(l(-E));for(var g=[],v=1,T=0;E>=v;T++)g[T]=E/v|0,v*=4294967296;return new o(g,0)}function d(E,g){if(E.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(E.charAt(0)=="-")return S(d(E.substring(1),g));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=l(Math.pow(g,8)),T=f,w=0;w<E.length;w+=8){var b=Math.min(8,E.length-w),I=parseInt(E.substring(w,w+b),g);8>b?(b=l(Math.pow(g,b)),T=T.j(b).add(l(I))):(T=T.j(v),T=T.add(l(I)))}return T}var f=u(0),_=u(1),y=u(16777216);n=o.prototype,n.m=function(){if(P(this))return-S(this).m();for(var E=0,g=1,v=0;v<this.g.length;v++){var T=this.i(v);E+=(0<=T?T:4294967296+T)*g,g*=4294967296}return E},n.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(A(this))return"0";if(P(this))return"-"+S(this).toString(E);for(var g=l(Math.pow(E,6)),v=this,T="";;){var w=G(v,g).g;v=U(v,w.j(g));var b=((0<v.g.length?v.g[0]:v.h)>>>0).toString(E);if(v=w,A(v))return b+T;for(;6>b.length;)b="0"+b;T=b+T}},n.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function A(E){if(E.h!=0)return!1;for(var g=0;g<E.g.length;g++)if(E.g[g]!=0)return!1;return!0}function P(E){return E.h==-1}n.l=function(E){return E=U(this,E),P(E)?-1:A(E)?0:1};function S(E){for(var g=E.g.length,v=[],T=0;T<g;T++)v[T]=~E.g[T];return new o(v,~E.h).add(_)}n.abs=function(){return P(this)?S(this):this},n.add=function(E){for(var g=Math.max(this.g.length,E.g.length),v=[],T=0,w=0;w<=g;w++){var b=T+(this.i(w)&65535)+(E.i(w)&65535),I=(b>>>16)+(this.i(w)>>>16)+(E.i(w)>>>16);T=I>>>16,b&=65535,I&=65535,v[w]=I<<16|b}return new o(v,v[v.length-1]&-2147483648?-1:0)};function U(E,g){return E.add(S(g))}n.j=function(E){if(A(this)||A(E))return f;if(P(this))return P(E)?S(this).j(S(E)):S(S(this).j(E));if(P(E))return S(this.j(S(E)));if(0>this.l(y)&&0>E.l(y))return l(this.m()*E.m());for(var g=this.g.length+E.g.length,v=[],T=0;T<2*g;T++)v[T]=0;for(T=0;T<this.g.length;T++)for(var w=0;w<E.g.length;w++){var b=this.i(T)>>>16,I=this.i(T)&65535,$t=E.i(w)>>>16,Si=E.i(w)&65535;v[2*T+2*w]+=I*Si,q(v,2*T+2*w),v[2*T+2*w+1]+=b*Si,q(v,2*T+2*w+1),v[2*T+2*w+1]+=I*$t,q(v,2*T+2*w+1),v[2*T+2*w+2]+=b*$t,q(v,2*T+2*w+2)}for(T=0;T<g;T++)v[T]=v[2*T+1]<<16|v[2*T];for(T=g;T<2*g;T++)v[T]=0;return new o(v,0)};function q(E,g){for(;(E[g]&65535)!=E[g];)E[g+1]+=E[g]>>>16,E[g]&=65535,g++}function B(E,g){this.g=E,this.h=g}function G(E,g){if(A(g))throw Error("division by zero");if(A(E))return new B(f,f);if(P(E))return g=G(S(E),g),new B(S(g.g),S(g.h));if(P(g))return g=G(E,S(g)),new B(S(g.g),g.h);if(30<E.g.length){if(P(E)||P(g))throw Error("slowDivide_ only works with positive integers.");for(var v=_,T=g;0>=T.l(E);)v=se(v),T=se(T);var w=Y(v,1),b=Y(T,1);for(T=Y(T,2),v=Y(v,2);!A(T);){var I=b.add(T);0>=I.l(E)&&(w=w.add(v),b=I),T=Y(T,1),v=Y(v,1)}return g=U(E,w.j(g)),new B(w,g)}for(w=f;0<=E.l(g);){for(v=Math.max(1,Math.floor(E.m()/g.m())),T=Math.ceil(Math.log(v)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),b=l(v),I=b.j(g);P(I)||0<I.l(E);)v-=T,b=l(v),I=b.j(g);A(b)&&(b=_),w=w.add(b),E=U(E,I)}return new B(w,E)}n.A=function(E){return G(this,E).h},n.and=function(E){for(var g=Math.max(this.g.length,E.g.length),v=[],T=0;T<g;T++)v[T]=this.i(T)&E.i(T);return new o(v,this.h&E.h)},n.or=function(E){for(var g=Math.max(this.g.length,E.g.length),v=[],T=0;T<g;T++)v[T]=this.i(T)|E.i(T);return new o(v,this.h|E.h)},n.xor=function(E){for(var g=Math.max(this.g.length,E.g.length),v=[],T=0;T<g;T++)v[T]=this.i(T)^E.i(T);return new o(v,this.h^E.h)};function se(E){for(var g=E.g.length+1,v=[],T=0;T<g;T++)v[T]=E.i(T)<<1|E.i(T-1)>>>31;return new o(v,E.h)}function Y(E,g){var v=g>>5;g%=32;for(var T=E.g.length-v,w=[],b=0;b<T;b++)w[b]=0<g?E.i(b+v)>>>g|E.i(b+v+1)<<32-g:E.i(b+v);return new o(w,E.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,ag=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=l,o.fromString=d,or=o}).apply(typeof zf<"u"?zf:typeof self<"u"?self:typeof window<"u"?window:{});var Do=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var cg,ns,ug,Ko,Lu,lg,hg,dg;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(c,h,p){return c==Array.prototype||c==Object.prototype||(c[h]=p.value),c};function t(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof Do=="object"&&Do];for(var h=0;h<c.length;++h){var p=c[h];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=t(this);function i(c,h){if(h)e:{var p=r;c=c.split(".");for(var m=0;m<c.length-1;m++){var R=c[m];if(!(R in p))break e;p=p[R]}c=c[c.length-1],m=p[c],h=h(m),h!=m&&h!=null&&e(p,c,{configurable:!0,writable:!0,value:h})}}function s(c,h){c instanceof String&&(c+="");var p=0,m=!1,R={next:function(){if(!m&&p<c.length){var k=p++;return{value:h(k,c[k]),done:!1}}return m=!0,{done:!0,value:void 0}}};return R[Symbol.iterator]=function(){return R},R}i("Array.prototype.values",function(c){return c||function(){return s(this,function(h,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function u(c){var h=typeof c;return h=h!="object"?h:c?Array.isArray(c)?"array":h:"null",h=="array"||h=="object"&&typeof c.length=="number"}function l(c){var h=typeof c;return h=="object"&&c!=null||h=="function"}function d(c,h,p){return c.call.apply(c.bind,arguments)}function f(c,h,p){if(!c)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var R=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(R,m),c.apply(h,R)}}return function(){return c.apply(h,arguments)}}function _(c,h,p){return _=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:f,_.apply(null,arguments)}function y(c,h){var p=Array.prototype.slice.call(arguments,1);return function(){var m=p.slice();return m.push.apply(m,arguments),c.apply(this,m)}}function A(c,h){function p(){}p.prototype=h.prototype,c.aa=h.prototype,c.prototype=new p,c.prototype.constructor=c,c.Qb=function(m,R,k){for(var M=Array(arguments.length-2),_e=2;_e<arguments.length;_e++)M[_e-2]=arguments[_e];return h.prototype[R].apply(m,M)}}function P(c){const h=c.length;if(0<h){const p=Array(h);for(let m=0;m<h;m++)p[m]=c[m];return p}return[]}function S(c,h){for(let p=1;p<arguments.length;p++){const m=arguments[p];if(u(m)){const R=c.length||0,k=m.length||0;c.length=R+k;for(let M=0;M<k;M++)c[R+M]=m[M]}else c.push(m)}}class U{constructor(h,p){this.i=h,this.j=p,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function q(c){return/^[\s\xa0]*$/.test(c)}function B(){var c=a.navigator;return c&&(c=c.userAgent)?c:""}function G(c){return G[" "](c),c}G[" "]=function(){};var se=B().indexOf("Gecko")!=-1&&!(B().toLowerCase().indexOf("webkit")!=-1&&B().indexOf("Edge")==-1)&&!(B().indexOf("Trident")!=-1||B().indexOf("MSIE")!=-1)&&B().indexOf("Edge")==-1;function Y(c,h,p){for(const m in c)h.call(p,c[m],m,c)}function E(c,h){for(const p in c)h.call(void 0,c[p],p,c)}function g(c){const h={};for(const p in c)h[p]=c[p];return h}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(c,h){let p,m;for(let R=1;R<arguments.length;R++){m=arguments[R];for(p in m)c[p]=m[p];for(let k=0;k<v.length;k++)p=v[k],Object.prototype.hasOwnProperty.call(m,p)&&(c[p]=m[p])}}function w(c){var h=1;c=c.split(":");const p=[];for(;0<h&&c.length;)p.push(c.shift()),h--;return c.length&&p.push(c.join(":")),p}function b(c){a.setTimeout(()=>{throw c},0)}function I(){var c=Oc;let h=null;return c.g&&(h=c.g,c.g=c.g.next,c.g||(c.h=null),h.next=null),h}class $t{constructor(){this.h=this.g=null}add(h,p){const m=Si.get();m.set(h,p),this.h?this.h.next=m:this.g=m,this.h=m}}var Si=new U(()=>new JI,c=>c.reset());class JI{constructor(){this.next=this.g=this.h=null}set(h,p){this.h=h,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let Pi,ki=!1,Oc=new $t,gd=()=>{const c=a.Promise.resolve(void 0);Pi=()=>{c.then(XI)}};var XI=()=>{for(var c;c=I();){try{c.h.call(c.g)}catch(p){b(p)}var h=Si;h.j(c),100>h.h&&(h.h++,c.next=h.g,h.g=c)}ki=!1};function dn(){this.s=this.s,this.C=this.C}dn.prototype.s=!1,dn.prototype.ma=function(){this.s||(this.s=!0,this.N())},dn.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function $e(c,h){this.type=c,this.g=this.target=h,this.defaultPrevented=!1}$e.prototype.h=function(){this.defaultPrevented=!0};var ZI=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var c=!1,h=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const p=()=>{};a.addEventListener("test",p,h),a.removeEventListener("test",p,h)}catch{}return c}();function Ni(c,h){if($e.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c){var p=this.type=c.type,m=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;if(this.target=c.target||c.srcElement,this.g=h,h=c.relatedTarget){if(se){e:{try{G(h.nodeName);var R=!0;break e}catch{}R=!1}R||(h=null)}}else p=="mouseover"?h=c.fromElement:p=="mouseout"&&(h=c.toElement);this.relatedTarget=h,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=typeof c.pointerType=="string"?c.pointerType:eE[c.pointerType]||"",this.state=c.state,this.i=c,c.defaultPrevented&&Ni.aa.h.call(this)}}A(Ni,$e);var eE={2:"touch",3:"pen",4:"mouse"};Ni.prototype.h=function(){Ni.aa.h.call(this);var c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var ho="closure_listenable_"+(1e6*Math.random()|0),tE=0;function nE(c,h,p,m,R){this.listener=c,this.proxy=null,this.src=h,this.type=p,this.capture=!!m,this.ha=R,this.key=++tE,this.da=this.fa=!1}function fo(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function po(c){this.src=c,this.g={},this.h=0}po.prototype.add=function(c,h,p,m,R){var k=c.toString();c=this.g[k],c||(c=this.g[k]=[],this.h++);var M=Vc(c,h,m,R);return-1<M?(h=c[M],p||(h.fa=!1)):(h=new nE(h,this.src,k,!!m,R),h.fa=p,c.push(h)),h};function xc(c,h){var p=h.type;if(p in c.g){var m=c.g[p],R=Array.prototype.indexOf.call(m,h,void 0),k;(k=0<=R)&&Array.prototype.splice.call(m,R,1),k&&(fo(h),c.g[p].length==0&&(delete c.g[p],c.h--))}}function Vc(c,h,p,m){for(var R=0;R<c.length;++R){var k=c[R];if(!k.da&&k.listener==h&&k.capture==!!p&&k.ha==m)return R}return-1}var Lc="closure_lm_"+(1e6*Math.random()|0),Mc={};function yd(c,h,p,m,R){if(Array.isArray(h)){for(var k=0;k<h.length;k++)yd(c,h[k],p,m,R);return null}return p=Ed(p),c&&c[ho]?c.K(h,p,l(m)?!!m.capture:!!m,R):rE(c,h,p,!1,m,R)}function rE(c,h,p,m,R,k){if(!h)throw Error("Invalid event type");var M=l(R)?!!R.capture:!!R,_e=Uc(c);if(_e||(c[Lc]=_e=new po(c)),p=_e.add(h,p,m,M,k),p.proxy)return p;if(m=iE(),p.proxy=m,m.src=c,m.listener=p,c.addEventListener)ZI||(R=M),R===void 0&&(R=!1),c.addEventListener(h.toString(),m,R);else if(c.attachEvent)c.attachEvent(Id(h.toString()),m);else if(c.addListener&&c.removeListener)c.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return p}function iE(){function c(p){return h.call(c.src,c.listener,p)}const h=sE;return c}function vd(c,h,p,m,R){if(Array.isArray(h))for(var k=0;k<h.length;k++)vd(c,h[k],p,m,R);else m=l(m)?!!m.capture:!!m,p=Ed(p),c&&c[ho]?(c=c.i,h=String(h).toString(),h in c.g&&(k=c.g[h],p=Vc(k,p,m,R),-1<p&&(fo(k[p]),Array.prototype.splice.call(k,p,1),k.length==0&&(delete c.g[h],c.h--)))):c&&(c=Uc(c))&&(h=c.g[h.toString()],c=-1,h&&(c=Vc(h,p,m,R)),(p=-1<c?h[c]:null)&&Fc(p))}function Fc(c){if(typeof c!="number"&&c&&!c.da){var h=c.src;if(h&&h[ho])xc(h.i,c);else{var p=c.type,m=c.proxy;h.removeEventListener?h.removeEventListener(p,m,c.capture):h.detachEvent?h.detachEvent(Id(p),m):h.addListener&&h.removeListener&&h.removeListener(m),(p=Uc(h))?(xc(p,c),p.h==0&&(p.src=null,h[Lc]=null)):fo(c)}}}function Id(c){return c in Mc?Mc[c]:Mc[c]="on"+c}function sE(c,h){if(c.da)c=!0;else{h=new Ni(h,this);var p=c.listener,m=c.ha||c.src;c.fa&&Fc(c),c=p.call(m,h)}return c}function Uc(c){return c=c[Lc],c instanceof po?c:null}var Bc="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ed(c){return typeof c=="function"?c:(c[Bc]||(c[Bc]=function(h){return c.handleEvent(h)}),c[Bc])}function je(){dn.call(this),this.i=new po(this),this.M=this,this.F=null}A(je,dn),je.prototype[ho]=!0,je.prototype.removeEventListener=function(c,h,p,m){vd(this,c,h,p,m)};function Je(c,h){var p,m=c.F;if(m)for(p=[];m;m=m.F)p.push(m);if(c=c.M,m=h.type||h,typeof h=="string")h=new $e(h,c);else if(h instanceof $e)h.target=h.target||c;else{var R=h;h=new $e(m,c),T(h,R)}if(R=!0,p)for(var k=p.length-1;0<=k;k--){var M=h.g=p[k];R=_o(M,m,!0,h)&&R}if(M=h.g=c,R=_o(M,m,!0,h)&&R,R=_o(M,m,!1,h)&&R,p)for(k=0;k<p.length;k++)M=h.g=p[k],R=_o(M,m,!1,h)&&R}je.prototype.N=function(){if(je.aa.N.call(this),this.i){var c=this.i,h;for(h in c.g){for(var p=c.g[h],m=0;m<p.length;m++)fo(p[m]);delete c.g[h],c.h--}}this.F=null},je.prototype.K=function(c,h,p,m){return this.i.add(String(c),h,!1,p,m)},je.prototype.L=function(c,h,p,m){return this.i.add(String(c),h,!0,p,m)};function _o(c,h,p,m){if(h=c.i.g[String(h)],!h)return!0;h=h.concat();for(var R=!0,k=0;k<h.length;++k){var M=h[k];if(M&&!M.da&&M.capture==p){var _e=M.listener,Be=M.ha||M.src;M.fa&&xc(c.i,M),R=_e.call(Be,m)!==!1&&R}}return R&&!m.defaultPrevented}function Td(c,h,p){if(typeof c=="function")p&&(c=_(c,p));else if(c&&typeof c.handleEvent=="function")c=_(c.handleEvent,c);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:a.setTimeout(c,h||0)}function wd(c){c.g=Td(()=>{c.g=null,c.i&&(c.i=!1,wd(c))},c.l);const h=c.h;c.h=null,c.m.apply(null,h)}class oE extends dn{constructor(h,p){super(),this.m=h,this.l=p,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:wd(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Di(c){dn.call(this),this.h=c,this.g={}}A(Di,dn);var Ad=[];function Rd(c){Y(c.g,function(h,p){this.g.hasOwnProperty(p)&&Fc(h)},c),c.g={}}Di.prototype.N=function(){Di.aa.N.call(this),Rd(this)},Di.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var qc=a.JSON.stringify,aE=a.JSON.parse,cE=class{stringify(c){return a.JSON.stringify(c,void 0)}parse(c){return a.JSON.parse(c,void 0)}};function $c(){}$c.prototype.h=null;function Cd(c){return c.h||(c.h=c.i())}function bd(){}var Oi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function jc(){$e.call(this,"d")}A(jc,$e);function Gc(){$e.call(this,"c")}A(Gc,$e);var Wn={},Sd=null;function mo(){return Sd=Sd||new je}Wn.La="serverreachability";function Pd(c){$e.call(this,Wn.La,c)}A(Pd,$e);function xi(c){const h=mo();Je(h,new Pd(h))}Wn.STAT_EVENT="statevent";function kd(c,h){$e.call(this,Wn.STAT_EVENT,c),this.stat=h}A(kd,$e);function Xe(c){const h=mo();Je(h,new kd(h,c))}Wn.Ma="timingevent";function Nd(c,h){$e.call(this,Wn.Ma,c),this.size=h}A(Nd,$e);function Vi(c,h){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){c()},h)}function Li(){this.g=!0}Li.prototype.xa=function(){this.g=!1};function uE(c,h,p,m,R,k){c.info(function(){if(c.g)if(k)for(var M="",_e=k.split("&"),Be=0;Be<_e.length;Be++){var ce=_e[Be].split("=");if(1<ce.length){var Ge=ce[0];ce=ce[1];var We=Ge.split("_");M=2<=We.length&&We[1]=="type"?M+(Ge+"="+ce+"&"):M+(Ge+"=redacted&")}}else M=null;else M=k;return"XMLHTTP REQ ("+m+") [attempt "+R+"]: "+h+`
`+p+`
`+M})}function lE(c,h,p,m,R,k,M){c.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+R+"]: "+h+`
`+p+`
`+k+" "+M})}function Dr(c,h,p,m){c.info(function(){return"XMLHTTP TEXT ("+h+"): "+dE(c,p)+(m?" "+m:"")})}function hE(c,h){c.info(function(){return"TIMEOUT: "+h})}Li.prototype.info=function(){};function dE(c,h){if(!c.g)return h;if(!h)return null;try{var p=JSON.parse(h);if(p){for(c=0;c<p.length;c++)if(Array.isArray(p[c])){var m=p[c];if(!(2>m.length)){var R=m[1];if(Array.isArray(R)&&!(1>R.length)){var k=R[0];if(k!="noop"&&k!="stop"&&k!="close")for(var M=1;M<R.length;M++)R[M]=""}}}}return qc(p)}catch{return h}}var go={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Dd={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Wc;function yo(){}A(yo,$c),yo.prototype.g=function(){return new XMLHttpRequest},yo.prototype.i=function(){return{}},Wc=new yo;function fn(c,h,p,m){this.j=c,this.i=h,this.l=p,this.R=m||1,this.U=new Di(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Od}function Od(){this.i=null,this.g="",this.h=!1}var xd={},zc={};function Kc(c,h,p){c.L=1,c.v=To(jt(h)),c.m=p,c.P=!0,Vd(c,null)}function Vd(c,h){c.F=Date.now(),vo(c),c.A=jt(c.v);var p=c.A,m=c.R;Array.isArray(m)||(m=[String(m)]),Qd(p.i,"t",m),c.C=0,p=c.j.J,c.h=new Od,c.g=pf(c.j,p?h:null,!c.m),0<c.O&&(c.M=new oE(_(c.Y,c,c.g),c.O)),h=c.U,p=c.g,m=c.ca;var R="readystatechange";Array.isArray(R)||(R&&(Ad[0]=R.toString()),R=Ad);for(var k=0;k<R.length;k++){var M=yd(p,R[k],m||h.handleEvent,!1,h.h||h);if(!M)break;h.g[M.key]=M}h=c.H?g(c.H):{},c.m?(c.u||(c.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.A,c.u,c.m,h)):(c.u="GET",c.g.ea(c.A,c.u,null,h)),xi(),uE(c.i,c.u,c.A,c.l,c.R,c.m)}fn.prototype.ca=function(c){c=c.target;const h=this.M;h&&Gt(c)==3?h.j():this.Y(c)},fn.prototype.Y=function(c){try{if(c==this.g)e:{const We=Gt(this.g);var h=this.g.Ba();const Vr=this.g.Z();if(!(3>We)&&(We!=3||this.g&&(this.h.h||this.g.oa()||nf(this.g)))){this.J||We!=4||h==7||(h==8||0>=Vr?xi(3):xi(2)),Hc(this);var p=this.g.Z();this.X=p;t:if(Ld(this)){var m=nf(this.g);c="";var R=m.length,k=Gt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){zn(this),Mi(this);var M="";break t}this.h.i=new a.TextDecoder}for(h=0;h<R;h++)this.h.h=!0,c+=this.h.i.decode(m[h],{stream:!(k&&h==R-1)});m.length=0,this.h.g+=c,this.C=0,M=this.h.g}else M=this.g.oa();if(this.o=p==200,lE(this.i,this.u,this.A,this.l,this.R,We,p),this.o){if(this.T&&!this.K){t:{if(this.g){var _e,Be=this.g;if((_e=Be.g?Be.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!q(_e)){var ce=_e;break t}}ce=null}if(p=ce)Dr(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Qc(this,p);else{this.o=!1,this.s=3,Xe(12),zn(this),Mi(this);break e}}if(this.P){p=!0;let Et;for(;!this.J&&this.C<M.length;)if(Et=fE(this,M),Et==zc){We==4&&(this.s=4,Xe(14),p=!1),Dr(this.i,this.l,null,"[Incomplete Response]");break}else if(Et==xd){this.s=4,Xe(15),Dr(this.i,this.l,M,"[Invalid Chunk]"),p=!1;break}else Dr(this.i,this.l,Et,null),Qc(this,Et);if(Ld(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),We!=4||M.length!=0||this.h.h||(this.s=1,Xe(16),p=!1),this.o=this.o&&p,!p)Dr(this.i,this.l,M,"[Invalid Chunked Response]"),zn(this),Mi(this);else if(0<M.length&&!this.W){this.W=!0;var Ge=this.j;Ge.g==this&&Ge.ba&&!Ge.M&&(Ge.j.info("Great, no buffering proxy detected. Bytes received: "+M.length),tu(Ge),Ge.M=!0,Xe(11))}}else Dr(this.i,this.l,M,null),Qc(this,M);We==4&&zn(this),this.o&&!this.J&&(We==4?lf(this.j,this):(this.o=!1,vo(this)))}else kE(this.g),p==400&&0<M.indexOf("Unknown SID")?(this.s=3,Xe(12)):(this.s=0,Xe(13)),zn(this),Mi(this)}}}catch{}finally{}};function Ld(c){return c.g?c.u=="GET"&&c.L!=2&&c.j.Ca:!1}function fE(c,h){var p=c.C,m=h.indexOf(`
`,p);return m==-1?zc:(p=Number(h.substring(p,m)),isNaN(p)?xd:(m+=1,m+p>h.length?zc:(h=h.slice(m,m+p),c.C=m+p,h)))}fn.prototype.cancel=function(){this.J=!0,zn(this)};function vo(c){c.S=Date.now()+c.I,Md(c,c.I)}function Md(c,h){if(c.B!=null)throw Error("WatchDog timer not null");c.B=Vi(_(c.ba,c),h)}function Hc(c){c.B&&(a.clearTimeout(c.B),c.B=null)}fn.prototype.ba=function(){this.B=null;const c=Date.now();0<=c-this.S?(hE(this.i,this.A),this.L!=2&&(xi(),Xe(17)),zn(this),this.s=2,Mi(this)):Md(this,this.S-c)};function Mi(c){c.j.G==0||c.J||lf(c.j,c)}function zn(c){Hc(c);var h=c.M;h&&typeof h.ma=="function"&&h.ma(),c.M=null,Rd(c.U),c.g&&(h=c.g,c.g=null,h.abort(),h.ma())}function Qc(c,h){try{var p=c.j;if(p.G!=0&&(p.g==c||Yc(p.h,c))){if(!c.K&&Yc(p.h,c)&&p.G==3){try{var m=p.Da.g.parse(h)}catch{m=null}if(Array.isArray(m)&&m.length==3){var R=m;if(R[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<c.F)So(p),Co(p);else break e;eu(p),Xe(18)}}else p.za=R[1],0<p.za-p.T&&37500>R[2]&&p.F&&p.v==0&&!p.C&&(p.C=Vi(_(p.Za,p),6e3));if(1>=Bd(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else Hn(p,11)}else if((c.K||p.g==c)&&So(p),!q(h))for(R=p.Da.g.parse(h),h=0;h<R.length;h++){let ce=R[h];if(p.T=ce[0],ce=ce[1],p.G==2)if(ce[0]=="c"){p.K=ce[1],p.ia=ce[2];const Ge=ce[3];Ge!=null&&(p.la=Ge,p.j.info("VER="+p.la));const We=ce[4];We!=null&&(p.Aa=We,p.j.info("SVER="+p.Aa));const Vr=ce[5];Vr!=null&&typeof Vr=="number"&&0<Vr&&(m=1.5*Vr,p.L=m,p.j.info("backChannelRequestTimeoutMs_="+m)),m=p;const Et=c.g;if(Et){const ko=Et.g?Et.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ko){var k=m.h;k.g||ko.indexOf("spdy")==-1&&ko.indexOf("quic")==-1&&ko.indexOf("h2")==-1||(k.j=k.l,k.g=new Set,k.h&&(Jc(k,k.h),k.h=null))}if(m.D){const nu=Et.g?Et.g.getResponseHeader("X-HTTP-Session-Id"):null;nu&&(m.ya=nu,ge(m.I,m.D,nu))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-c.F,p.j.info("Handshake RTT: "+p.R+"ms")),m=p;var M=c;if(m.qa=ff(m,m.J?m.ia:null,m.W),M.K){qd(m.h,M);var _e=M,Be=m.L;Be&&(_e.I=Be),_e.B&&(Hc(_e),vo(_e)),m.g=M}else cf(m);0<p.i.length&&bo(p)}else ce[0]!="stop"&&ce[0]!="close"||Hn(p,7);else p.G==3&&(ce[0]=="stop"||ce[0]=="close"?ce[0]=="stop"?Hn(p,7):Zc(p):ce[0]!="noop"&&p.l&&p.l.ta(ce),p.v=0)}}xi(4)}catch{}}var pE=class{constructor(c,h){this.g=c,this.map=h}};function Fd(c){this.l=c||10,a.PerformanceNavigationTiming?(c=a.performance.getEntriesByType("navigation"),c=0<c.length&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ud(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function Bd(c){return c.h?1:c.g?c.g.size:0}function Yc(c,h){return c.h?c.h==h:c.g?c.g.has(h):!1}function Jc(c,h){c.g?c.g.add(h):c.h=h}function qd(c,h){c.h&&c.h==h?c.h=null:c.g&&c.g.has(h)&&c.g.delete(h)}Fd.prototype.cancel=function(){if(this.i=$d(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function $d(c){if(c.h!=null)return c.i.concat(c.h.D);if(c.g!=null&&c.g.size!==0){let h=c.i;for(const p of c.g.values())h=h.concat(p.D);return h}return P(c.i)}function _E(c){if(c.V&&typeof c.V=="function")return c.V();if(typeof Map<"u"&&c instanceof Map||typeof Set<"u"&&c instanceof Set)return Array.from(c.values());if(typeof c=="string")return c.split("");if(u(c)){for(var h=[],p=c.length,m=0;m<p;m++)h.push(c[m]);return h}h=[],p=0;for(m in c)h[p++]=c[m];return h}function mE(c){if(c.na&&typeof c.na=="function")return c.na();if(!c.V||typeof c.V!="function"){if(typeof Map<"u"&&c instanceof Map)return Array.from(c.keys());if(!(typeof Set<"u"&&c instanceof Set)){if(u(c)||typeof c=="string"){var h=[];c=c.length;for(var p=0;p<c;p++)h.push(p);return h}h=[],p=0;for(const m in c)h[p++]=m;return h}}}function jd(c,h){if(c.forEach&&typeof c.forEach=="function")c.forEach(h,void 0);else if(u(c)||typeof c=="string")Array.prototype.forEach.call(c,h,void 0);else for(var p=mE(c),m=_E(c),R=m.length,k=0;k<R;k++)h.call(void 0,m[k],p&&p[k],c)}var Gd=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function gE(c,h){if(c){c=c.split("&");for(var p=0;p<c.length;p++){var m=c[p].indexOf("="),R=null;if(0<=m){var k=c[p].substring(0,m);R=c[p].substring(m+1)}else k=c[p];h(k,R?decodeURIComponent(R.replace(/\+/g," ")):"")}}}function Kn(c){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,c instanceof Kn){this.h=c.h,Io(this,c.j),this.o=c.o,this.g=c.g,Eo(this,c.s),this.l=c.l;var h=c.i,p=new Bi;p.i=h.i,h.g&&(p.g=new Map(h.g),p.h=h.h),Wd(this,p),this.m=c.m}else c&&(h=String(c).match(Gd))?(this.h=!1,Io(this,h[1]||"",!0),this.o=Fi(h[2]||""),this.g=Fi(h[3]||"",!0),Eo(this,h[4]),this.l=Fi(h[5]||"",!0),Wd(this,h[6]||"",!0),this.m=Fi(h[7]||"")):(this.h=!1,this.i=new Bi(null,this.h))}Kn.prototype.toString=function(){var c=[],h=this.j;h&&c.push(Ui(h,zd,!0),":");var p=this.g;return(p||h=="file")&&(c.push("//"),(h=this.o)&&c.push(Ui(h,zd,!0),"@"),c.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&c.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&c.push("/"),c.push(Ui(p,p.charAt(0)=="/"?IE:vE,!0))),(p=this.i.toString())&&c.push("?",p),(p=this.m)&&c.push("#",Ui(p,TE)),c.join("")};function jt(c){return new Kn(c)}function Io(c,h,p){c.j=p?Fi(h,!0):h,c.j&&(c.j=c.j.replace(/:$/,""))}function Eo(c,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);c.s=h}else c.s=null}function Wd(c,h,p){h instanceof Bi?(c.i=h,wE(c.i,c.h)):(p||(h=Ui(h,EE)),c.i=new Bi(h,c.h))}function ge(c,h,p){c.i.set(h,p)}function To(c){return ge(c,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),c}function Fi(c,h){return c?h?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function Ui(c,h,p){return typeof c=="string"?(c=encodeURI(c).replace(h,yE),p&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function yE(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var zd=/[#\/\?@]/g,vE=/[#\?:]/g,IE=/[#\?]/g,EE=/[#\?@]/g,TE=/#/g;function Bi(c,h){this.h=this.g=null,this.i=c||null,this.j=!!h}function pn(c){c.g||(c.g=new Map,c.h=0,c.i&&gE(c.i,function(h,p){c.add(decodeURIComponent(h.replace(/\+/g," ")),p)}))}n=Bi.prototype,n.add=function(c,h){pn(this),this.i=null,c=Or(this,c);var p=this.g.get(c);return p||this.g.set(c,p=[]),p.push(h),this.h+=1,this};function Kd(c,h){pn(c),h=Or(c,h),c.g.has(h)&&(c.i=null,c.h-=c.g.get(h).length,c.g.delete(h))}function Hd(c,h){return pn(c),h=Or(c,h),c.g.has(h)}n.forEach=function(c,h){pn(this),this.g.forEach(function(p,m){p.forEach(function(R){c.call(h,R,m,this)},this)},this)},n.na=function(){pn(this);const c=Array.from(this.g.values()),h=Array.from(this.g.keys()),p=[];for(let m=0;m<h.length;m++){const R=c[m];for(let k=0;k<R.length;k++)p.push(h[m])}return p},n.V=function(c){pn(this);let h=[];if(typeof c=="string")Hd(this,c)&&(h=h.concat(this.g.get(Or(this,c))));else{c=Array.from(this.g.values());for(let p=0;p<c.length;p++)h=h.concat(c[p])}return h},n.set=function(c,h){return pn(this),this.i=null,c=Or(this,c),Hd(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[h]),this.h+=1,this},n.get=function(c,h){return c?(c=this.V(c),0<c.length?String(c[0]):h):h};function Qd(c,h,p){Kd(c,h),0<p.length&&(c.i=null,c.g.set(Or(c,h),P(p)),c.h+=p.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],h=Array.from(this.g.keys());for(var p=0;p<h.length;p++){var m=h[p];const k=encodeURIComponent(String(m)),M=this.V(m);for(m=0;m<M.length;m++){var R=k;M[m]!==""&&(R+="="+encodeURIComponent(String(M[m]))),c.push(R)}}return this.i=c.join("&")};function Or(c,h){return h=String(h),c.j&&(h=h.toLowerCase()),h}function wE(c,h){h&&!c.j&&(pn(c),c.i=null,c.g.forEach(function(p,m){var R=m.toLowerCase();m!=R&&(Kd(this,m),Qd(this,R,p))},c)),c.j=h}function AE(c,h){const p=new Li;if(a.Image){const m=new Image;m.onload=y(_n,p,"TestLoadImage: loaded",!0,h,m),m.onerror=y(_n,p,"TestLoadImage: error",!1,h,m),m.onabort=y(_n,p,"TestLoadImage: abort",!1,h,m),m.ontimeout=y(_n,p,"TestLoadImage: timeout",!1,h,m),a.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=c}else h(!1)}function RE(c,h){const p=new Li,m=new AbortController,R=setTimeout(()=>{m.abort(),_n(p,"TestPingServer: timeout",!1,h)},1e4);fetch(c,{signal:m.signal}).then(k=>{clearTimeout(R),k.ok?_n(p,"TestPingServer: ok",!0,h):_n(p,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(R),_n(p,"TestPingServer: error",!1,h)})}function _n(c,h,p,m,R){try{R&&(R.onload=null,R.onerror=null,R.onabort=null,R.ontimeout=null),m(p)}catch{}}function CE(){this.g=new cE}function bE(c,h,p){const m=p||"";try{jd(c,function(R,k){let M=R;l(R)&&(M=qc(R)),h.push(m+k+"="+encodeURIComponent(M))})}catch(R){throw h.push(m+"type="+encodeURIComponent("_badmap")),R}}function wo(c){this.l=c.Ub||null,this.j=c.eb||!1}A(wo,$c),wo.prototype.g=function(){return new Ao(this.l,this.j)},wo.prototype.i=function(c){return function(){return c}}({});function Ao(c,h){je.call(this),this.D=c,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}A(Ao,je),n=Ao.prototype,n.open=function(c,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=c,this.A=h,this.readyState=1,$i(this)},n.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};c&&(h.body=c),(this.D||a).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,qi(this)),this.readyState=0},n.Sa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,$i(this)),this.g&&(this.readyState=3,$i(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Yd(this)}else c.text().then(this.Ra.bind(this),this.ga.bind(this))};function Yd(c){c.j.read().then(c.Pa.bind(c)).catch(c.ga.bind(c))}n.Pa=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var h=c.value?c.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!c.done}))&&(this.response=this.responseText+=h)}c.done?qi(this):$i(this),this.readyState==3&&Yd(this)}},n.Ra=function(c){this.g&&(this.response=this.responseText=c,qi(this))},n.Qa=function(c){this.g&&(this.response=c,qi(this))},n.ga=function(){this.g&&qi(this)};function qi(c){c.readyState=4,c.l=null,c.j=null,c.v=null,$i(c)}n.setRequestHeader=function(c,h){this.u.append(c,h)},n.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],h=this.h.entries();for(var p=h.next();!p.done;)p=p.value,c.push(p[0]+": "+p[1]),p=h.next();return c.join(`\r
`)};function $i(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(Ao.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function Jd(c){let h="";return Y(c,function(p,m){h+=m,h+=":",h+=p,h+=`\r
`}),h}function Xc(c,h,p){e:{for(m in p){var m=!1;break e}m=!0}m||(p=Jd(p),typeof c=="string"?p!=null&&encodeURIComponent(String(p)):ge(c,h,p))}function Re(c){je.call(this),this.headers=new Map,this.o=c||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}A(Re,je);var SE=/^https?$/i,PE=["POST","PUT"];n=Re.prototype,n.Ha=function(c){this.J=c},n.ea=function(c,h,p,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);h=h?h.toUpperCase():"GET",this.D=c,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Wc.g(),this.v=this.o?Cd(this.o):Cd(Wc),this.g.onreadystatechange=_(this.Ea,this);try{this.B=!0,this.g.open(h,String(c),!0),this.B=!1}catch(k){Xd(this,k);return}if(c=p||"",p=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var R in m)p.set(R,m[R]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const k of m.keys())p.set(k,m.get(k));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(p.keys()).find(k=>k.toLowerCase()=="content-type"),R=a.FormData&&c instanceof a.FormData,!(0<=Array.prototype.indexOf.call(PE,h,void 0))||m||R||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[k,M]of p)this.g.setRequestHeader(k,M);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{tf(this),this.u=!0,this.g.send(c),this.u=!1}catch(k){Xd(this,k)}};function Xd(c,h){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=h,c.m=5,Zd(c),Ro(c)}function Zd(c){c.A||(c.A=!0,Je(c,"complete"),Je(c,"error"))}n.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=c||7,Je(this,"complete"),Je(this,"abort"),Ro(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ro(this,!0)),Re.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?ef(this):this.bb())},n.bb=function(){ef(this)};function ef(c){if(c.h&&typeof o<"u"&&(!c.v[1]||Gt(c)!=4||c.Z()!=2)){if(c.u&&Gt(c)==4)Td(c.Ea,0,c);else if(Je(c,"readystatechange"),Gt(c)==4){c.h=!1;try{const M=c.Z();e:switch(M){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var p;if(!(p=h)){var m;if(m=M===0){var R=String(c.D).match(Gd)[1]||null;!R&&a.self&&a.self.location&&(R=a.self.location.protocol.slice(0,-1)),m=!SE.test(R?R.toLowerCase():"")}p=m}if(p)Je(c,"complete"),Je(c,"success");else{c.m=6;try{var k=2<Gt(c)?c.g.statusText:""}catch{k=""}c.l=k+" ["+c.Z()+"]",Zd(c)}}finally{Ro(c)}}}}function Ro(c,h){if(c.g){tf(c);const p=c.g,m=c.v[0]?()=>{}:null;c.g=null,c.v=null,h||Je(c,"ready");try{p.onreadystatechange=m}catch{}}}function tf(c){c.I&&(a.clearTimeout(c.I),c.I=null)}n.isActive=function(){return!!this.g};function Gt(c){return c.g?c.g.readyState:0}n.Z=function(){try{return 2<Gt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(c){if(this.g){var h=this.g.responseText;return c&&h.indexOf(c)==0&&(h=h.substring(c.length)),aE(h)}};function nf(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.H){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function kE(c){const h={};c=(c.g&&2<=Gt(c)&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<c.length;m++){if(q(c[m]))continue;var p=w(c[m]);const R=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const k=h[R]||[];h[R]=k,k.push(p)}E(h,function(m){return m.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ji(c,h,p){return p&&p.internalChannelParams&&p.internalChannelParams[c]||h}function rf(c){this.Aa=0,this.i=[],this.j=new Li,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ji("failFast",!1,c),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ji("baseRetryDelayMs",5e3,c),this.cb=ji("retryDelaySeedMs",1e4,c),this.Wa=ji("forwardChannelMaxRetries",2,c),this.wa=ji("forwardChannelRequestTimeoutMs",2e4,c),this.pa=c&&c.xmlHttpFactory||void 0,this.Xa=c&&c.Tb||void 0,this.Ca=c&&c.useFetchStreams||!1,this.L=void 0,this.J=c&&c.supportsCrossDomainXhr||!1,this.K="",this.h=new Fd(c&&c.concurrentRequestLimit),this.Da=new CE,this.P=c&&c.fastHandshake||!1,this.O=c&&c.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=c&&c.Rb||!1,c&&c.xa&&this.j.xa(),c&&c.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&c&&c.detectBufferingProxy||!1,this.ja=void 0,c&&c.longPollingTimeout&&0<c.longPollingTimeout&&(this.ja=c.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=rf.prototype,n.la=8,n.G=1,n.connect=function(c,h,p,m){Xe(0),this.W=c,this.H=h||{},p&&m!==void 0&&(this.H.OSID=p,this.H.OAID=m),this.F=this.X,this.I=ff(this,null,this.W),bo(this)};function Zc(c){if(sf(c),c.G==3){var h=c.U++,p=jt(c.I);if(ge(p,"SID",c.K),ge(p,"RID",h),ge(p,"TYPE","terminate"),Gi(c,p),h=new fn(c,c.j,h),h.L=2,h.v=To(jt(p)),p=!1,a.navigator&&a.navigator.sendBeacon)try{p=a.navigator.sendBeacon(h.v.toString(),"")}catch{}!p&&a.Image&&(new Image().src=h.v,p=!0),p||(h.g=pf(h.j,null),h.g.ea(h.v)),h.F=Date.now(),vo(h)}df(c)}function Co(c){c.g&&(tu(c),c.g.cancel(),c.g=null)}function sf(c){Co(c),c.u&&(a.clearTimeout(c.u),c.u=null),So(c),c.h.cancel(),c.s&&(typeof c.s=="number"&&a.clearTimeout(c.s),c.s=null)}function bo(c){if(!Ud(c.h)&&!c.s){c.s=!0;var h=c.Ga;Pi||gd(),ki||(Pi(),ki=!0),Oc.add(h,c),c.B=0}}function NE(c,h){return Bd(c.h)>=c.h.j-(c.s?1:0)?!1:c.s?(c.i=h.D.concat(c.i),!0):c.G==1||c.G==2||c.B>=(c.Va?0:c.Wa)?!1:(c.s=Vi(_(c.Ga,c,h),hf(c,c.B)),c.B++,!0)}n.Ga=function(c){if(this.s)if(this.s=null,this.G==1){if(!c){this.U=Math.floor(1e5*Math.random()),c=this.U++;const R=new fn(this,this.j,c);let k=this.o;if(this.S&&(k?(k=g(k),T(k,this.S)):k=this.S),this.m!==null||this.O||(R.H=k,k=null),this.P)e:{for(var h=0,p=0;p<this.i.length;p++){t:{var m=this.i[p];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(h+=m,4096<h){h=p;break e}if(h===4096||p===this.i.length-1){h=p+1;break e}}h=1e3}else h=1e3;h=af(this,R,h),p=jt(this.I),ge(p,"RID",c),ge(p,"CVER",22),this.D&&ge(p,"X-HTTP-Session-Id",this.D),Gi(this,p),k&&(this.O?h="headers="+encodeURIComponent(String(Jd(k)))+"&"+h:this.m&&Xc(p,this.m,k)),Jc(this.h,R),this.Ua&&ge(p,"TYPE","init"),this.P?(ge(p,"$req",h),ge(p,"SID","null"),R.T=!0,Kc(R,p,null)):Kc(R,p,h),this.G=2}}else this.G==3&&(c?of(this,c):this.i.length==0||Ud(this.h)||of(this))};function of(c,h){var p;h?p=h.l:p=c.U++;const m=jt(c.I);ge(m,"SID",c.K),ge(m,"RID",p),ge(m,"AID",c.T),Gi(c,m),c.m&&c.o&&Xc(m,c.m,c.o),p=new fn(c,c.j,p,c.B+1),c.m===null&&(p.H=c.o),h&&(c.i=h.D.concat(c.i)),h=af(c,p,1e3),p.I=Math.round(.5*c.wa)+Math.round(.5*c.wa*Math.random()),Jc(c.h,p),Kc(p,m,h)}function Gi(c,h){c.H&&Y(c.H,function(p,m){ge(h,m,p)}),c.l&&jd({},function(p,m){ge(h,m,p)})}function af(c,h,p){p=Math.min(c.i.length,p);var m=c.l?_(c.l.Na,c.l,c):null;e:{var R=c.i;let k=-1;for(;;){const M=["count="+p];k==-1?0<p?(k=R[0].g,M.push("ofs="+k)):k=0:M.push("ofs="+k);let _e=!0;for(let Be=0;Be<p;Be++){let ce=R[Be].g;const Ge=R[Be].map;if(ce-=k,0>ce)k=Math.max(0,R[Be].g-100),_e=!1;else try{bE(Ge,M,"req"+ce+"_")}catch{m&&m(Ge)}}if(_e){m=M.join("&");break e}}}return c=c.i.splice(0,p),h.D=c,m}function cf(c){if(!c.g&&!c.u){c.Y=1;var h=c.Fa;Pi||gd(),ki||(Pi(),ki=!0),Oc.add(h,c),c.v=0}}function eu(c){return c.g||c.u||3<=c.v?!1:(c.Y++,c.u=Vi(_(c.Fa,c),hf(c,c.v)),c.v++,!0)}n.Fa=function(){if(this.u=null,uf(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var c=2*this.R;this.j.info("BP detection timer enabled: "+c),this.A=Vi(_(this.ab,this),c)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Xe(10),Co(this),uf(this))};function tu(c){c.A!=null&&(a.clearTimeout(c.A),c.A=null)}function uf(c){c.g=new fn(c,c.j,"rpc",c.Y),c.m===null&&(c.g.H=c.o),c.g.O=0;var h=jt(c.qa);ge(h,"RID","rpc"),ge(h,"SID",c.K),ge(h,"AID",c.T),ge(h,"CI",c.F?"0":"1"),!c.F&&c.ja&&ge(h,"TO",c.ja),ge(h,"TYPE","xmlhttp"),Gi(c,h),c.m&&c.o&&Xc(h,c.m,c.o),c.L&&(c.g.I=c.L);var p=c.g;c=c.ia,p.L=1,p.v=To(jt(h)),p.m=null,p.P=!0,Vd(p,c)}n.Za=function(){this.C!=null&&(this.C=null,Co(this),eu(this),Xe(19))};function So(c){c.C!=null&&(a.clearTimeout(c.C),c.C=null)}function lf(c,h){var p=null;if(c.g==h){So(c),tu(c),c.g=null;var m=2}else if(Yc(c.h,h))p=h.D,qd(c.h,h),m=1;else return;if(c.G!=0){if(h.o)if(m==1){p=h.m?h.m.length:0,h=Date.now()-h.F;var R=c.B;m=mo(),Je(m,new Nd(m,p)),bo(c)}else cf(c);else if(R=h.s,R==3||R==0&&0<h.X||!(m==1&&NE(c,h)||m==2&&eu(c)))switch(p&&0<p.length&&(h=c.h,h.i=h.i.concat(p)),R){case 1:Hn(c,5);break;case 4:Hn(c,10);break;case 3:Hn(c,6);break;default:Hn(c,2)}}}function hf(c,h){let p=c.Ta+Math.floor(Math.random()*c.cb);return c.isActive()||(p*=2),p*h}function Hn(c,h){if(c.j.info("Error code "+h),h==2){var p=_(c.fb,c),m=c.Xa;const R=!m;m=new Kn(m||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Io(m,"https"),To(m),R?AE(m.toString(),p):RE(m.toString(),p)}else Xe(2);c.G=0,c.l&&c.l.sa(h),df(c),sf(c)}n.fb=function(c){c?(this.j.info("Successfully pinged google.com"),Xe(2)):(this.j.info("Failed to ping google.com"),Xe(1))};function df(c){if(c.G=0,c.ka=[],c.l){const h=$d(c.h);(h.length!=0||c.i.length!=0)&&(S(c.ka,h),S(c.ka,c.i),c.h.i.length=0,P(c.i),c.i.length=0),c.l.ra()}}function ff(c,h,p){var m=p instanceof Kn?jt(p):new Kn(p);if(m.g!="")h&&(m.g=h+"."+m.g),Eo(m,m.s);else{var R=a.location;m=R.protocol,h=h?h+"."+R.hostname:R.hostname,R=+R.port;var k=new Kn(null);m&&Io(k,m),h&&(k.g=h),R&&Eo(k,R),p&&(k.l=p),m=k}return p=c.D,h=c.ya,p&&h&&ge(m,p,h),ge(m,"VER",c.la),Gi(c,m),m}function pf(c,h,p){if(h&&!c.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=c.Ca&&!c.pa?new Re(new wo({eb:p})):new Re(c.pa),h.Ha(c.J),h}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function _f(){}n=_f.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Po(){}Po.prototype.g=function(c,h){return new lt(c,h)};function lt(c,h){je.call(this),this.g=new rf(h),this.l=c,this.h=h&&h.messageUrlParams||null,c=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(c?c["X-WebChannel-Content-Type"]=h.messageContentType:c={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(c?c["X-WebChannel-Client-Profile"]=h.va:c={"X-WebChannel-Client-Profile":h.va}),this.g.S=c,(c=h&&h.Sb)&&!q(c)&&(this.g.m=c),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!q(h)&&(this.g.D=h,c=this.h,c!==null&&h in c&&(c=this.h,h in c&&delete c[h])),this.j=new xr(this)}A(lt,je),lt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},lt.prototype.close=function(){Zc(this.g)},lt.prototype.o=function(c){var h=this.g;if(typeof c=="string"){var p={};p.__data__=c,c=p}else this.u&&(p={},p.__data__=qc(c),c=p);h.i.push(new pE(h.Ya++,c)),h.G==3&&bo(h)},lt.prototype.N=function(){this.g.l=null,delete this.j,Zc(this.g),delete this.g,lt.aa.N.call(this)};function mf(c){jc.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var h=c.__sm__;if(h){e:{for(const p in h){c=p;break e}c=void 0}(this.i=c)&&(c=this.i,h=h!==null&&c in h?h[c]:void 0),this.data=h}else this.data=c}A(mf,jc);function gf(){Gc.call(this),this.status=1}A(gf,Gc);function xr(c){this.g=c}A(xr,_f),xr.prototype.ua=function(){Je(this.g,"a")},xr.prototype.ta=function(c){Je(this.g,new mf(c))},xr.prototype.sa=function(c){Je(this.g,new gf)},xr.prototype.ra=function(){Je(this.g,"b")},Po.prototype.createWebChannel=Po.prototype.g,lt.prototype.send=lt.prototype.o,lt.prototype.open=lt.prototype.m,lt.prototype.close=lt.prototype.close,dg=function(){return new Po},hg=function(){return mo()},lg=Wn,Lu={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},go.NO_ERROR=0,go.TIMEOUT=8,go.HTTP_ERROR=6,Ko=go,Dd.COMPLETE="complete",ug=Dd,bd.EventType=Oi,Oi.OPEN="a",Oi.CLOSE="b",Oi.ERROR="c",Oi.MESSAGE="d",je.prototype.listen=je.prototype.K,ns=bd,Re.prototype.listenOnce=Re.prototype.L,Re.prototype.getLastError=Re.prototype.Ka,Re.prototype.getLastErrorCode=Re.prototype.Ba,Re.prototype.getStatus=Re.prototype.Z,Re.prototype.getResponseJson=Re.prototype.Oa,Re.prototype.getResponseText=Re.prototype.oa,Re.prototype.send=Re.prototype.ea,Re.prototype.setWithCredentials=Re.prototype.Ha,cg=Re}).apply(typeof Do<"u"?Do:typeof self<"u"?self:typeof window<"u"?window:{});const Kf="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
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
 */class et{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}et.UNAUTHENTICATED=new et(null),et.GOOGLE_CREDENTIALS=new et("google-credentials-uid"),et.FIRST_PARTY=new et("first-party-uid"),et.MOCK_USER=new et("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
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
 */let Ii="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
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
 */const lr=new $s("@firebase/firestore");function qr(){return lr.logLevel}function D(n,...e){if(lr.logLevel<=Z.DEBUG){const t=e.map(Dl);lr.debug(`Firestore (${Ii}): ${n}`,...t)}}function tt(n,...e){if(lr.logLevel<=Z.ERROR){const t=e.map(Dl);lr.error(`Firestore (${Ii}): ${n}`,...t)}}function ri(n,...e){if(lr.logLevel<=Z.WARN){const t=e.map(Dl);lr.warn(`Firestore (${Ii}): ${n}`,...t)}}function Dl(n){if(typeof n=="string")return n;try{/**
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
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function $(n="Unexpected state"){const e=`FIRESTORE (${Ii}) INTERNAL ASSERTION FAILED: `+n;throw tt(e),new Error(e)}function j(n,e){n||$()}function Q(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const N={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class V extends _t{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Rt{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class cR{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class uR{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(et.UNAUTHENTICATED))}shutdown(){}}class lR{constructor(e){this.t=e,this.currentUser=et.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){j(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,t(u)):Promise.resolve();let s=new Rt;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Rt,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{D("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(D("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Rt)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(D("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(j(typeof r.accessToken=="string"),new cR(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return j(e===null||typeof e=="string"),new et(e)}}class hR{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=et.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class dR{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new hR(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(et.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class fR{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class pR{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){j(this.o===void 0);const r=s=>{s.error!=null&&D("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,D("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{D("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):D("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(j(typeof t.token=="string"),this.R=t.token,new fR(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function _R(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class fg{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=_R(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<t&&(r+=e.charAt(i[s]%e.length))}return r}}function J(n,e){return n<e?-1:n>e?1:0}function ii(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}function pg(n){return n+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Ae{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new V(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new V(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new V(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new V(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ae.fromMillis(Date.now())}static fromDate(e){return Ae.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new Ae(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?J(this.nanoseconds,e.nanoseconds):J(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class W{constructor(e){this.timestamp=e}static fromTimestamp(e){return new W(e)}static min(){return new W(new Ae(0,0))}static max(){return new W(new Ae(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class As{constructor(e,t,r){t===void 0?t=0:t>e.length&&$(),r===void 0?r=e.length-t:r>e.length-t&&$(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return As.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof As?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const s=e.get(i),o=t.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class ue extends As{construct(e,t,r){return new ue(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new V(N.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new ue(t)}static emptyPath(){return new ue([])}}const mR=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class we extends As{construct(e,t,r){return new we(e,t,r)}static isValidIdentifier(e){return mR.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),we.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new we(["__name__"])}static fromServerFormat(e){const t=[];let r="",i=0;const s=()=>{if(r.length===0)throw new V(N.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new V(N.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new V(N.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new V(N.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new we(t)}static emptyPath(){return new we([])}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class F{constructor(e){this.path=e}static fromPath(e){return new F(ue.fromString(e))}static fromName(e){return new F(ue.fromString(e).popFirst(5))}static empty(){return new F(ue.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ue.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ue.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new F(new ue(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
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
 */class _a{constructor(e,t,r,i){this.indexId=e,this.collectionGroup=t,this.fields=r,this.indexState=i}}function Mu(n){return n.fields.find(e=>e.kind===2)}function Jn(n){return n.fields.filter(e=>e.kind!==2)}_a.UNKNOWN_ID=-1;class Ho{constructor(e,t){this.fieldPath=e,this.kind=t}}class Rs{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new Rs(0,pt.min())}}function gR(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=W.fromTimestamp(r===1e9?new Ae(t+1,0):new Ae(t,r));return new pt(i,F.empty(),e)}function _g(n){return new pt(n.readTime,n.key,-1)}class pt{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new pt(W.min(),F.empty(),-1)}static max(){return new pt(W.max(),F.empty(),-1)}}function Ol(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=F.comparator(n.documentKey,e.documentKey),t!==0?t:J(n.largestBatchId,e.largestBatchId))}/**
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
 */const mg="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class gg{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */async function Ar(n){if(n.code!==N.FAILED_PRECONDITION||n.message!==mg)throw n;D("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class C{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&$(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new C((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof C?t:C.resolve(t)}catch(t){return C.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):C.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):C.reject(t)}static resolve(e){return new C((t,r)=>{t(e)})}static reject(e){return new C((t,r)=>{r(e)})}static waitFor(e){return new C((t,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&t()},u=>r(u))}),o=!0,s===i&&t()})}static or(e){let t=C.resolve(!1);for(const r of e)t=t.next(i=>i?C.resolve(i):r());return t}static forEach(e,t){const r=[];return e.forEach((i,s)=>{r.push(t.call(this,i,s))}),this.waitFor(r)}static mapArray(e,t){return new C((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let u=0;u<s;u++){const l=u;t(e[l]).next(d=>{o[l]=d,++a,a===s&&r(o)},d=>i(d))}})}static doWhile(e,t){return new C((r,i)=>{const s=()=>{e()===!0?t().next(()=>{s()},i):r()};s()})}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Xa{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.V=new Rt,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{t.error?this.V.reject(new ls(e,t.error)):this.V.resolve()},this.transaction.onerror=r=>{const i=xl(r.target.error);this.V.reject(new ls(e,i))}}static open(e,t,r,i){try{return new Xa(t,e.transaction(i,r))}catch(s){throw new ls(t,s)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(D("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new vR(t)}}class kn{constructor(e,t,r){this.name=e,this.version=t,this.p=r,kn.S(he())===12.2&&tt("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return D("SimpleDb","Removing database:",e),Zn(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!Im())return!1;if(kn.v())return!0;const e=he(),t=kn.S(e),r=0<t&&t<10,i=yg(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static v(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.C)==="YES"}static F(e,t){return e.store(t)}static S(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(r)}async M(e){return this.db||(D("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;t(o)},i.onblocked=()=>{r(new ls(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new V(N.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new V(N.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new ls(e,o))},i.onupgradeneeded=s=>{D("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.p.O(o,i.transaction,s.oldVersion,this.version).next(()=>{D("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.N&&(this.db.onversionchange=t=>this.N(t)),this.db}L(e){this.N=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,r,i){const s=t==="readonly";let o=0;for(;;){++o;try{this.db=await this.M(e);const a=Xa.open(this.db,e,s?"readonly":"readwrite",r),u=i(a).next(l=>(a.g(),l)).catch(l=>(a.abort(l),C.reject(l))).toPromise();return u.catch(()=>{}),await a.m,u}catch(a){const u=a,l=u.name!=="FirebaseError"&&o<3;if(D("SimpleDb","Transaction failed with error:",u.message,"Retrying:",l),this.close(),!l)return Promise.reject(u)}}}close(){this.db&&this.db.close(),this.db=void 0}}function yg(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}class yR{constructor(e){this.B=e,this.k=!1,this.q=null}get isDone(){return this.k}get K(){return this.q}set cursor(e){this.B=e}done(){this.k=!0}$(e){this.q=e}delete(){return Zn(this.B.delete())}}class ls extends V{constructor(e,t){super(N.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function $n(n){return n.name==="IndexedDbTransactionError"}class vR{constructor(e){this.store=e}put(e,t){let r;return t!==void 0?(D("SimpleDb","PUT",this.store.name,e,t),r=this.store.put(t,e)):(D("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),Zn(r)}add(e){return D("SimpleDb","ADD",this.store.name,e,e),Zn(this.store.add(e))}get(e){return Zn(this.store.get(e)).next(t=>(t===void 0&&(t=null),D("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return D("SimpleDb","DELETE",this.store.name,e),Zn(this.store.delete(e))}count(){return D("SimpleDb","COUNT",this.store.name),Zn(this.store.count())}U(e,t){const r=this.options(e,t),i=r.index?this.store.index(r.index):this.store;if(typeof i.getAll=="function"){const s=i.getAll(r.range);return new C((o,a)=>{s.onerror=u=>{a(u.target.error)},s.onsuccess=u=>{o(u.target.result)}})}{const s=this.cursor(r),o=[];return this.W(s,(a,u)=>{o.push(u)}).next(()=>o)}}G(e,t){const r=this.store.getAll(e,t===null?void 0:t);return new C((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}j(e,t){D("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,t);r.H=!1;const i=this.cursor(r);return this.W(i,(s,o,a)=>a.delete())}J(e,t){let r;t?r=e:(r={},t=e);const i=this.cursor(r);return this.W(i,t)}Y(e){const t=this.cursor({});return new C((r,i)=>{t.onerror=s=>{const o=xl(s.target.error);i(o)},t.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}W(e,t){const r=[];return new C((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const u=new yR(a),l=t(a.primaryKey,a.value,u);if(l instanceof C){const d=l.catch(f=>(u.done(),C.reject(f)));r.push(d)}u.isDone?i():u.K===null?a.continue():a.continue(u.K)}}).next(()=>C.waitFor(r))}options(e,t){let r;return e!==void 0&&(typeof e=="string"?r=e:t=e),{index:r,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const r=this.store.index(e.index);return e.H?r.openKeyCursor(e.range,t):r.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function Zn(n){return new C((e,t)=>{n.onsuccess=r=>{const i=r.target.result;e(i)},n.onerror=r=>{const i=xl(r.target.error);t(i)}})}let Hf=!1;function xl(n){const e=kn.S(he());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(t)>=0){const r=new V("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Hf||(Hf=!0,setTimeout(()=>{throw r},0)),r}}return n}class IR{constructor(e,t){this.asyncQueue=e,this.Z=t,this.task=null}start(){this.X(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}X(e){D("IndexBackfiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{D("IndexBackfiller",`Documents written: ${await this.Z.ee()}`)}catch(t){$n(t)?D("IndexBackfiller","Ignoring IndexedDB error during index backfill: ",t):await Ar(t)}await this.X(6e4)})}}class ER{constructor(e,t){this.localStore=e,this.persistence=t}async ee(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.te(t,e))}te(e,t){const r=new Set;let i=t,s=!0;return C.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return D("IndexBackfiller",`Processing collection: ${o}`),this.ne(e,o,i).next(a=>{i-=a,r.add(o)});s=!1})).next(()=>t-i)}ne(e,t,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(i=>this.localStore.localDocuments.getNextDocuments(e,t,i,r).next(s=>{const o=s.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.re(i,s)).next(a=>(D("IndexBackfiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,t,a))).next(()=>o.size)}))}re(e,t){let r=e;return t.changes.forEach((i,s)=>{const o=_g(s);Ol(o,r)>0&&(r=o)}),new pt(r.readTime,r.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class mt{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ie(r),this.se=r=>t.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}mt.oe=-1;function Za(n){return n==null}function Cs(n){return n===0&&1/n==-1/0}function TR(n){return typeof n=="number"&&Number.isInteger(n)&&!Cs(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function nt(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Qf(e)),e=wR(n.get(t),e);return Qf(e)}function wR(n,e){let t=e;const r=n.length;for(let i=0;i<r;i++){const s=n.charAt(i);switch(s){case"\0":t+="";break;case"":t+="";break;default:t+=s}}return t}function Qf(n){return n+""}function Dt(n){const e=n.length;if(j(e>=2),e===2)return j(n.charAt(0)===""&&n.charAt(1)===""),ue.emptyPath();const t=e-2,r=[];let i="";for(let s=0;s<e;){const o=n.indexOf("",s);switch((o<0||o>t)&&$(),n.charAt(o+1)){case"":const a=n.substring(s,o);let u;i.length===0?u=a:(i+=a,u=i,i=""),r.push(u);break;case"":i+=n.substring(s,o),i+="\0";break;case"":i+=n.substring(s,o+1);break;default:$()}s=o+2}return new ue(r)}/**
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
 */const Yf=["userId","batchId"];/**
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
 */function Qo(n,e){return[n,nt(e)]}function vg(n,e,t){return[n,nt(e),t]}const AR={},RR=["prefixPath","collectionGroup","readTime","documentId"],CR=["prefixPath","collectionGroup","documentId"],bR=["collectionGroup","readTime","prefixPath","documentId"],SR=["canonicalId","targetId"],PR=["targetId","path"],kR=["path","targetId"],NR=["collectionId","parent"],DR=["indexId","uid"],OR=["uid","sequenceNumber"],xR=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],VR=["indexId","uid","orderedDocumentKey"],LR=["userId","collectionPath","documentId"],MR=["userId","collectionPath","largestBatchId"],FR=["userId","collectionGroup","largestBatchId"],Ig=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],UR=[...Ig,"documentOverlays"],Eg=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Tg=Eg,Vl=[...Tg,"indexConfiguration","indexState","indexEntries"],BR=Vl,qR=[...Vl,"globals"];/**
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
 */class Fu extends gg{constructor(e,t){super(),this._e=e,this.currentSequenceNumber=t}}function xe(n,e){const t=Q(n);return kn.F(t._e,e)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function Jf(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Rr(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function $R(n,e){const t=[];for(const r in n)Object.prototype.hasOwnProperty.call(n,r)&&t.push(e(n[r],r,n));return t}function wg(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
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
 */let ke=class Uu{constructor(e,t){this.comparator=e,this.root=t||Nn.EMPTY}insert(e,t){return new Uu(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Nn.BLACK,null,null))}remove(e){return new Uu(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Nn.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Oo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Oo(this.root,e,this.comparator,!1)}getReverseIterator(){return new Oo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Oo(this.root,e,this.comparator,!0)}},Oo=class{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},Nn=class Wt{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r??Wt.RED,this.left=i??Wt.EMPTY,this.right=s??Wt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,s){return new Wt(e??this.key,t??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Wt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return Wt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Wt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Wt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw $();const e=this.left.check();if(e!==this.right.check())throw $();return e+(this.isRed()?0:1)}};Nn.EMPTY=null,Nn.RED=!0,Nn.BLACK=!1;Nn.EMPTY=new class{constructor(){this.size=0}get key(){throw $()}get value(){throw $()}get color(){throw $()}get left(){throw $()}get right(){throw $()}copy(e,t,r,i,s){return this}insert(e,t,r){return new Nn(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
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
 */class pe{constructor(e){this.comparator=e,this.data=new ke(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Xf(this.data.getIterator())}getIteratorFrom(e){return new Xf(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof pe)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new pe(this.comparator);return t.data=e,t}}class Xf{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Lr(n){return n.hasNext()?n.getNext():void 0}/**
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
 */class ot{constructor(e){this.fields=e,e.sort(we.comparator)}static empty(){return new ot([])}unionWith(e){let t=new pe(we.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new ot(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return ii(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class Ag extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Oe{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Ag("Invalid base64 string: "+s):s}}(e);return new Oe(t)}static fromUint8Array(e){const t=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Oe(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return J(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Oe.EMPTY_BYTE_STRING=new Oe("");const jR=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function rn(n){if(j(!!n),typeof n=="string"){let e=0;const t=jR.exec(n);if(j(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ve(n.seconds),nanos:ve(n.nanos)}}function ve(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function xn(n){return typeof n=="string"?Oe.fromBase64String(n):Oe.fromUint8Array(n)}/**
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
 */function ec(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Ll(n){const e=n.mapValue.fields.__previous_value__;return ec(e)?Ll(e):e}function bs(n){const e=rn(n.mapValue.fields.__local_write_time__.timestampValue);return new Ae(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class GR{constructor(e,t,r,i,s,o,a,u,l){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=l}}class hr{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new hr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof hr&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const bn={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},Yo={nullValue:"NULL_VALUE"};function dr(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?ec(n)?4:Rg(n)?9007199254740991:tc(n)?10:11:$()}function Mt(n,e){if(n===e)return!0;const t=dr(n);if(t!==dr(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return bs(n).isEqual(bs(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=rn(i.timestampValue),a=rn(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,s){return xn(i.bytesValue).isEqual(xn(s.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,s){return ve(i.geoPointValue.latitude)===ve(s.geoPointValue.latitude)&&ve(i.geoPointValue.longitude)===ve(s.geoPointValue.longitude)}(n,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return ve(i.integerValue)===ve(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=ve(i.doubleValue),a=ve(s.doubleValue);return o===a?Cs(o)===Cs(a):isNaN(o)&&isNaN(a)}return!1}(n,e);case 9:return ii(n.arrayValue.values||[],e.arrayValue.values||[],Mt);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(Jf(o)!==Jf(a))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(a[u]===void 0||!Mt(o[u],a[u])))return!1;return!0}(n,e);default:return $()}}function Ss(n,e){return(n.values||[]).find(t=>Mt(t,e))!==void 0}function Vn(n,e){if(n===e)return 0;const t=dr(n),r=dr(e);if(t!==r)return J(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return J(n.booleanValue,e.booleanValue);case 2:return function(s,o){const a=ve(s.integerValue||s.doubleValue),u=ve(o.integerValue||o.doubleValue);return a<u?-1:a>u?1:a===u?0:isNaN(a)?isNaN(u)?0:-1:1}(n,e);case 3:return Zf(n.timestampValue,e.timestampValue);case 4:return Zf(bs(n),bs(e));case 5:return J(n.stringValue,e.stringValue);case 6:return function(s,o){const a=xn(s),u=xn(o);return a.compareTo(u)}(n.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),u=o.split("/");for(let l=0;l<a.length&&l<u.length;l++){const d=J(a[l],u[l]);if(d!==0)return d}return J(a.length,u.length)}(n.referenceValue,e.referenceValue);case 8:return function(s,o){const a=J(ve(s.latitude),ve(o.latitude));return a!==0?a:J(ve(s.longitude),ve(o.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return ep(n.arrayValue,e.arrayValue);case 10:return function(s,o){var a,u,l,d;const f=s.fields||{},_=o.fields||{},y=(a=f.value)===null||a===void 0?void 0:a.arrayValue,A=(u=_.value)===null||u===void 0?void 0:u.arrayValue,P=J(((l=y==null?void 0:y.values)===null||l===void 0?void 0:l.length)||0,((d=A==null?void 0:A.values)===null||d===void 0?void 0:d.length)||0);return P!==0?P:ep(y,A)}(n.mapValue,e.mapValue);case 11:return function(s,o){if(s===bn.mapValue&&o===bn.mapValue)return 0;if(s===bn.mapValue)return 1;if(o===bn.mapValue)return-1;const a=s.fields||{},u=Object.keys(a),l=o.fields||{},d=Object.keys(l);u.sort(),d.sort();for(let f=0;f<u.length&&f<d.length;++f){const _=J(u[f],d[f]);if(_!==0)return _;const y=Vn(a[u[f]],l[d[f]]);if(y!==0)return y}return J(u.length,d.length)}(n.mapValue,e.mapValue);default:throw $()}}function Zf(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return J(n,e);const t=rn(n),r=rn(e),i=J(t.seconds,r.seconds);return i!==0?i:J(t.nanos,r.nanos)}function ep(n,e){const t=n.values||[],r=e.values||[];for(let i=0;i<t.length&&i<r.length;++i){const s=Vn(t[i],r[i]);if(s)return s}return J(t.length,r.length)}function si(n){return Bu(n)}function Bu(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=rn(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return xn(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return F.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",i=!0;for(const s of t.values||[])i?i=!1:r+=",",r+=Bu(s);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Bu(t.fields[o])}`;return i+"}"}(n.mapValue):$()}function fr(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function qu(n){return!!n&&"integerValue"in n}function Ps(n){return!!n&&"arrayValue"in n}function tp(n){return!!n&&"nullValue"in n}function np(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Jo(n){return!!n&&"mapValue"in n}function tc(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function hs(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Rr(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=hs(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=hs(n.arrayValue.values[t]);return e}return Object.assign({},n)}function Rg(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}const Cg={mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{}}}}};function WR(n){return"nullValue"in n?Yo:"booleanValue"in n?{booleanValue:!1}:"integerValue"in n||"doubleValue"in n?{doubleValue:NaN}:"timestampValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in n?{stringValue:""}:"bytesValue"in n?{bytesValue:""}:"referenceValue"in n?fr(hr.empty(),F.empty()):"geoPointValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in n?{arrayValue:{}}:"mapValue"in n?tc(n)?Cg:{mapValue:{}}:$()}function zR(n){return"nullValue"in n?{booleanValue:!1}:"booleanValue"in n?{doubleValue:NaN}:"integerValue"in n||"doubleValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in n?{stringValue:""}:"stringValue"in n?{bytesValue:""}:"bytesValue"in n?fr(hr.empty(),F.empty()):"referenceValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in n?{arrayValue:{}}:"arrayValue"in n?Cg:"mapValue"in n?tc(n)?{mapValue:{}}:bn:$()}function rp(n,e){const t=Vn(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?-1:!n.inclusive&&e.inclusive?1:0}function ip(n,e){const t=Vn(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?1:!n.inclusive&&e.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Ke{constructor(e){this.value=e}static empty(){return new Ke({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Jo(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=hs(t)}setAll(e){let t=we.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!t.isImmediateParentOf(a)){const u=this.getFieldsMap(t);this.applyChanges(u,r,i),r={},i=[],t=a.popLast()}o?r[a.lastSegment()]=hs(o):i.push(a.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,r,i)}delete(e){const t=this.field(e.popLast());Jo(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Mt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];Jo(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){Rr(t,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Ke(hs(this.value))}}function bg(n){const e=[];return Rr(n.fields,(t,r)=>{const i=new we([t]);if(Jo(r)){const s=bg(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new ot(e)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Ce{constructor(e,t,r,i,s,o,a){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Ce(e,0,W.min(),W.min(),W.min(),Ke.empty(),0)}static newFoundDocument(e,t,r,i){return new Ce(e,1,t,W.min(),r,i,0)}static newNoDocument(e,t){return new Ce(e,2,t,W.min(),W.min(),Ke.empty(),0)}static newUnknownDocument(e,t){return new Ce(e,3,t,W.min(),W.min(),Ke.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(W.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ke.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ke.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=W.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ce&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ce(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ln{constructor(e,t){this.position=e,this.inclusive=t}}function sp(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const s=e[i],o=n.position[i];if(s.field.isKeyField()?r=F.comparator(F.fromName(o.referenceValue),t.key):r=Vn(o,t.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function op(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Mt(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class ks{constructor(e,t="asc"){this.field=e,this.dir=t}}function KR(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Sg{}class oe extends Sg{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new HR(e,t,r):t==="array-contains"?new JR(e,r):t==="in"?new xg(e,r):t==="not-in"?new XR(e,r):t==="array-contains-any"?new ZR(e,r):new oe(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new QR(e,r):new YR(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Vn(t,this.value)):t!==null&&dr(this.value)===dr(t)&&this.matchesComparison(Vn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return $()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class fe extends Sg{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new fe(e,t)}matches(e){return oi(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function oi(n){return n.op==="and"}function $u(n){return n.op==="or"}function Ml(n){return Pg(n)&&oi(n)}function Pg(n){for(const e of n.filters)if(e instanceof fe)return!1;return!0}function ju(n){if(n instanceof oe)return n.field.canonicalString()+n.op.toString()+si(n.value);if(Ml(n))return n.filters.map(e=>ju(e)).join(",");{const e=n.filters.map(t=>ju(t)).join(",");return`${n.op}(${e})`}}function kg(n,e){return n instanceof oe?function(r,i){return i instanceof oe&&r.op===i.op&&r.field.isEqual(i.field)&&Mt(r.value,i.value)}(n,e):n instanceof fe?function(r,i){return i instanceof fe&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&kg(o,i.filters[a]),!0):!1}(n,e):void $()}function Ng(n,e){const t=n.filters.concat(e);return fe.create(t,n.op)}function Dg(n){return n instanceof oe?function(t){return`${t.field.canonicalString()} ${t.op} ${si(t.value)}`}(n):n instanceof fe?function(t){return t.op.toString()+" {"+t.getFilters().map(Dg).join(" ,")+"}"}(n):"Filter"}class HR extends oe{constructor(e,t,r){super(e,t,r),this.key=F.fromName(r.referenceValue)}matches(e){const t=F.comparator(e.key,this.key);return this.matchesComparison(t)}}class QR extends oe{constructor(e,t){super(e,"in",t),this.keys=Og("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class YR extends oe{constructor(e,t){super(e,"not-in",t),this.keys=Og("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Og(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>F.fromName(r.referenceValue))}class JR extends oe{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Ps(t)&&Ss(t.arrayValue,this.value)}}class xg extends oe{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Ss(this.value.arrayValue,t)}}class XR extends oe{constructor(e,t){super(e,"not-in",t)}matches(e){if(Ss(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Ss(this.value.arrayValue,t)}}class ZR extends oe{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Ps(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Ss(this.value.arrayValue,r))}}/**
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
 */class e0{constructor(e,t=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ue=null}}function Gu(n,e=null,t=[],r=[],i=null,s=null,o=null){return new e0(n,e,t,r,i,s,o)}function pr(n){const e=Q(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>ju(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Za(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>si(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>si(r)).join(",")),e.ue=t}return e.ue}function Hs(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!KR(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!kg(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!op(n.startAt,e.startAt)&&op(n.endAt,e.endAt)}function ma(n){return F.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function ga(n,e){return n.filters.filter(t=>t instanceof oe&&t.field.isEqual(e))}function ap(n,e,t){let r=Yo,i=!0;for(const s of ga(n,e)){let o=Yo,a=!0;switch(s.op){case"<":case"<=":o=WR(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,a=!1;break;case"!=":case"not-in":o=Yo}rp({value:r,inclusive:i},{value:o,inclusive:a})<0&&(r=o,i=a)}if(t!==null){for(let s=0;s<n.orderBy.length;++s)if(n.orderBy[s].field.isEqual(e)){const o=t.position[s];rp({value:r,inclusive:i},{value:o,inclusive:t.inclusive})<0&&(r=o,i=t.inclusive);break}}return{value:r,inclusive:i}}function cp(n,e,t){let r=bn,i=!0;for(const s of ga(n,e)){let o=bn,a=!0;switch(s.op){case">=":case">":o=zR(s.value),a=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,a=!1;break;case"!=":case"not-in":o=bn}ip({value:r,inclusive:i},{value:o,inclusive:a})>0&&(r=o,i=a)}if(t!==null){for(let s=0;s<n.orderBy.length;++s)if(n.orderBy[s].field.isEqual(e)){const o=t.position[s];ip({value:r,inclusive:i},{value:o,inclusive:t.inclusive})>0&&(r=o,i=t.inclusive);break}}return{value:r,inclusive:i}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Cr{constructor(e,t=null,r=[],i=[],s=null,o="F",a=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function t0(n,e,t,r,i,s,o,a){return new Cr(n,e,t,r,i,s,o,a)}function Qs(n){return new Cr(n)}function up(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Fl(n){return n.collectionGroup!==null}function Kr(n){const e=Q(n);if(e.ce===null){e.ce=[];const t=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),t.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new pe(we.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(l=>{l.isInequality()&&(a=a.add(l.field))})}),a})(e).forEach(s=>{t.has(s.canonicalString())||s.isKeyField()||e.ce.push(new ks(s,r))}),t.has(we.keyField().canonicalString())||e.ce.push(new ks(we.keyField(),r))}return e.ce}function vt(n){const e=Q(n);return e.le||(e.le=Vg(e,Kr(n))),e.le}function n0(n){const e=Q(n);return e.he||(e.he=Vg(e,n.explicitOrderBy)),e.he}function Vg(n,e){if(n.limitType==="F")return Gu(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new ks(i.field,s)});const t=n.endAt?new Ln(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Ln(n.startAt.position,n.startAt.inclusive):null;return Gu(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Wu(n,e){const t=n.filters.concat([e]);return new Cr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function ya(n,e,t){return new Cr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function nc(n,e){return Hs(vt(n),vt(e))&&n.limitType===e.limitType}function Lg(n){return`${pr(vt(n))}|lt:${n.limitType}`}function $r(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(i=>Dg(i)).join(", ")}]`),Za(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(i=>si(i)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(i=>si(i)).join(",")),`Target(${r})`}(vt(n))}; limitType=${n.limitType})`}function Ys(n,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):F.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(n,e)&&function(r,i){for(const s of Kr(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(n,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(n,e)&&function(r,i){return!(r.startAt&&!function(o,a,u){const l=sp(o,a,u);return o.inclusive?l<=0:l<0}(r.startAt,Kr(r),i)||r.endAt&&!function(o,a,u){const l=sp(o,a,u);return o.inclusive?l>=0:l>0}(r.endAt,Kr(r),i))}(n,e)}function r0(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Mg(n){return(e,t)=>{let r=!1;for(const i of Kr(n)){const s=i0(i,e,t);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function i0(n,e,t){const r=n.field.isKeyField()?F.comparator(e.key,t.key):function(s,o,a){const u=o.data.field(s),l=a.data.field(s);return u!==null&&l!==null?Vn(u,l):$()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return $()}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class jn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Rr(this.inner,(t,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return wg(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const s0=new ke(F.comparator);function ht(){return s0}const Fg=new ke(F.comparator);function rs(...n){let e=Fg;for(const t of n)e=e.insert(t.key,t);return e}function Ug(n){let e=Fg;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function Ot(){return ds()}function Bg(){return ds()}function ds(){return new jn(n=>n.toString(),(n,e)=>n.isEqual(e))}const o0=new ke(F.comparator),a0=new pe(F.comparator);function ne(...n){let e=a0;for(const t of n)e=e.add(t);return e}const c0=new pe(J);function u0(){return c0}/**
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
 */function Ul(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Cs(e)?"-0":e}}function qg(n){return{integerValue:""+n}}function l0(n,e){return TR(e)?qg(e):Ul(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class rc{constructor(){this._=void 0}}function h0(n,e,t){return n instanceof ai?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&ec(s)&&(s=Ll(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(t,e):n instanceof _r?jg(n,e):n instanceof ci?Gg(n,e):function(i,s){const o=$g(i,s),a=lp(o)+lp(i.Pe);return qu(o)&&qu(i.Pe)?qg(a):Ul(i.serializer,a)}(n,e)}function d0(n,e,t){return n instanceof _r?jg(n,e):n instanceof ci?Gg(n,e):t}function $g(n,e){return n instanceof Ns?function(r){return qu(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class ai extends rc{}class _r extends rc{constructor(e){super(),this.elements=e}}function jg(n,e){const t=Wg(e);for(const r of n.elements)t.some(i=>Mt(i,r))||t.push(r);return{arrayValue:{values:t}}}class ci extends rc{constructor(e){super(),this.elements=e}}function Gg(n,e){let t=Wg(e);for(const r of n.elements)t=t.filter(i=>!Mt(i,r));return{arrayValue:{values:t}}}class Ns extends rc{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function lp(n){return ve(n.integerValue||n.doubleValue)}function Wg(n){return Ps(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Bl{constructor(e,t){this.field=e,this.transform=t}}function f0(n,e){return n.field.isEqual(e.field)&&function(r,i){return r instanceof _r&&i instanceof _r||r instanceof ci&&i instanceof ci?ii(r.elements,i.elements,Mt):r instanceof Ns&&i instanceof Ns?Mt(r.Pe,i.Pe):r instanceof ai&&i instanceof ai}(n.transform,e.transform)}class p0{constructor(e,t){this.version=e,this.transformResults=t}}class He{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new He}static exists(e){return new He(void 0,e)}static updateTime(e){return new He(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Xo(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class ic{}function zg(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new sc(n.key,He.none()):new Ei(n.key,n.data,He.none());{const t=n.data,r=Ke.empty();let i=new pe(we.comparator);for(let s of e.fields)if(!i.has(s)){let o=t.field(s);o===null&&s.length>1&&(s=s.popLast(),o=t.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new hn(n.key,r,new ot(i.toArray()),He.none())}}function _0(n,e,t){n instanceof Ei?function(i,s,o){const a=i.value.clone(),u=dp(i.fieldTransforms,s,o.transformResults);a.setAll(u),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(n,e,t):n instanceof hn?function(i,s,o){if(!Xo(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=dp(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(Kg(i)),u.setAll(a),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(n,e,t):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function fs(n,e,t,r){return n instanceof Ei?function(s,o,a,u){if(!Xo(s.precondition,o))return a;const l=s.value.clone(),d=fp(s.fieldTransforms,u,o);return l.setAll(d),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),null}(n,e,t,r):n instanceof hn?function(s,o,a,u){if(!Xo(s.precondition,o))return a;const l=fp(s.fieldTransforms,u,o),d=o.data;return d.setAll(Kg(s)),d.setAll(l),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(f=>f.field))}(n,e,t,r):function(s,o,a){return Xo(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(n,e,t)}function m0(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),s=$g(r.transform,i||null);s!=null&&(t===null&&(t=Ke.empty()),t.set(r.field,s))}return t||null}function hp(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&ii(r,i,(s,o)=>f0(s,o))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Ei extends ic{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class hn extends ic{constructor(e,t,r,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Kg(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function dp(n,e,t){const r=new Map;j(n.length===t.length);for(let i=0;i<t.length;i++){const s=n[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,d0(o,a,t[i]))}return r}function fp(n,e,t){const r=new Map;for(const i of n){const s=i.transform,o=t.data.field(i.field);r.set(i.field,h0(s,o,e))}return r}class sc extends ic{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Hg extends ic{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class ql{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&_0(s,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=fs(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=fs(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Bg();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=t.has(i.key)?null:a;const u=zg(o,a);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(W.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),ne())}isEqual(e){return this.batchId===e.batchId&&ii(this.mutations,e.mutations,(t,r)=>hp(t,r))&&ii(this.baseMutations,e.baseMutations,(t,r)=>hp(t,r))}}class $l{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){j(e.mutations.length===r.length);let i=function(){return o0}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new $l(e,t,r,i)}}/**
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
 */class jl{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class g0{constructor(e,t,r){this.alias=e,this.aggregateType=t,this.fieldPath=r}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class y0{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */var Ne,ae;function v0(n){switch(n){default:return $();case N.CANCELLED:case N.UNKNOWN:case N.DEADLINE_EXCEEDED:case N.RESOURCE_EXHAUSTED:case N.INTERNAL:case N.UNAVAILABLE:case N.UNAUTHENTICATED:return!1;case N.INVALID_ARGUMENT:case N.NOT_FOUND:case N.ALREADY_EXISTS:case N.PERMISSION_DENIED:case N.FAILED_PRECONDITION:case N.ABORTED:case N.OUT_OF_RANGE:case N.UNIMPLEMENTED:case N.DATA_LOSS:return!0}}function Qg(n){if(n===void 0)return tt("GRPC error has no .code"),N.UNKNOWN;switch(n){case Ne.OK:return N.OK;case Ne.CANCELLED:return N.CANCELLED;case Ne.UNKNOWN:return N.UNKNOWN;case Ne.DEADLINE_EXCEEDED:return N.DEADLINE_EXCEEDED;case Ne.RESOURCE_EXHAUSTED:return N.RESOURCE_EXHAUSTED;case Ne.INTERNAL:return N.INTERNAL;case Ne.UNAVAILABLE:return N.UNAVAILABLE;case Ne.UNAUTHENTICATED:return N.UNAUTHENTICATED;case Ne.INVALID_ARGUMENT:return N.INVALID_ARGUMENT;case Ne.NOT_FOUND:return N.NOT_FOUND;case Ne.ALREADY_EXISTS:return N.ALREADY_EXISTS;case Ne.PERMISSION_DENIED:return N.PERMISSION_DENIED;case Ne.FAILED_PRECONDITION:return N.FAILED_PRECONDITION;case Ne.ABORTED:return N.ABORTED;case Ne.OUT_OF_RANGE:return N.OUT_OF_RANGE;case Ne.UNIMPLEMENTED:return N.UNIMPLEMENTED;case Ne.DATA_LOSS:return N.DATA_LOSS;default:return $()}}(ae=Ne||(Ne={}))[ae.OK=0]="OK",ae[ae.CANCELLED=1]="CANCELLED",ae[ae.UNKNOWN=2]="UNKNOWN",ae[ae.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ae[ae.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ae[ae.NOT_FOUND=5]="NOT_FOUND",ae[ae.ALREADY_EXISTS=6]="ALREADY_EXISTS",ae[ae.PERMISSION_DENIED=7]="PERMISSION_DENIED",ae[ae.UNAUTHENTICATED=16]="UNAUTHENTICATED",ae[ae.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ae[ae.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ae[ae.ABORTED=10]="ABORTED",ae[ae.OUT_OF_RANGE=11]="OUT_OF_RANGE",ae[ae.UNIMPLEMENTED=12]="UNIMPLEMENTED",ae[ae.INTERNAL=13]="INTERNAL",ae[ae.UNAVAILABLE=14]="UNAVAILABLE",ae[ae.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function I0(){return new TextEncoder}/**
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
 */const E0=new or([4294967295,4294967295],0);function pp(n){const e=I0().encode(n),t=new ag;return t.update(e),new Uint8Array(t.digest())}function _p(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new or([t,r],0),new or([i,s],0)]}class Gl{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new is(`Invalid padding: ${t}`);if(r<0)throw new is(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new is(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new is(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=or.fromNumber(this.Ie)}Ee(e,t,r){let i=e.add(t.multiply(or.fromNumber(r)));return i.compare(E0)===1&&(i=new or([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=pp(e),[r,i]=_p(t);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,t,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Gl(s,i,t);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ie===0)return;const t=pp(e),[r,i]=_p(t);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class is extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class oc{constructor(e,t,r,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,Js.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new oc(W.min(),i,new ke(J),ht(),ne())}}class Js{constructor(e,t,r,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Js(r,t,ne(),ne(),ne())}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Zo{constructor(e,t,r,i){this.Re=e,this.removedTargetIds=t,this.key=r,this.Ve=i}}class Yg{constructor(e,t){this.targetId=e,this.me=t}}class Jg{constructor(e,t,r=Oe.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class mp{constructor(){this.fe=0,this.ge=yp(),this.pe=Oe.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ne(),t=ne(),r=ne();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:$()}}),new Js(this.pe,this.ye,e,t,r)}Ce(){this.we=!1,this.ge=yp()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,j(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class T0{constructor(e){this.Le=e,this.Be=new Map,this.ke=ht(),this.qe=gp(),this.Qe=new ke(J)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const r=this.Ge(t);switch(e.state){case 0:this.ze(t)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),r.De(e.resumeToken));break;default:$()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((r,i)=>{this.ze(i)&&t(i)})}He(e){const t=e.targetId,r=e.me.count,i=this.Je(t);if(i){const s=i.target;if(ma(s))if(r===0){const o=new F(s.path);this.Ue(t,o,Ce.newNoDocument(o,W.min()))}else j(r===1);else{const o=this.Ye(t);if(o!==r){const a=this.Ze(e),u=a?this.Xe(a,e,o):1;if(u!==0){this.je(t);const l=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,l)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=t;let o,a;try{o=xn(r).toUint8Array()}catch(u){if(u instanceof Ag)return ri("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{a=new Gl(o,i,s)}catch(u){return ri(u instanceof is?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return a.Ie===0?null:a}Xe(e,t,r){return t.me.count===r-this.nt(e,t.targetId)?0:2}nt(e,t){const r=this.Le.getRemoteKeysForTarget(t);let i=0;return r.forEach(s=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.Ue(t,s,null),i++)}),i}rt(e){const t=new Map;this.Be.forEach((s,o)=>{const a=this.Je(o);if(a){if(s.current&&ma(a.target)){const u=new F(a.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,Ce.newNoDocument(u,e))}s.be&&(t.set(o,s.ve()),s.Ce())}});let r=ne();this.qe.forEach((s,o)=>{let a=!0;o.forEachWhile(u=>{const l=this.Je(u);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new oc(e,t,this.Qe,this.ke,r);return this.ke=ht(),this.qe=gp(),this.Qe=new ke(J),i}$e(e,t){if(!this.ze(e))return;const r=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,r),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,t)?i.Fe(t,1):i.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),r&&(this.ke=this.ke.insert(t,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new mp,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new pe(J),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||D("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new mp),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function gp(){return new ke(F.comparator)}function yp(){return new ke(F.comparator)}const w0={asc:"ASCENDING",desc:"DESCENDING"},A0={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},R0={and:"AND",or:"OR"};class C0{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function zu(n,e){return n.useProto3Json||Za(e)?e:{value:e}}function ui(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Xg(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function b0(n,e){return ui(n,e.toTimestamp())}function rt(n){return j(!!n),W.fromTimestamp(function(t){const r=rn(t);return new Ae(r.seconds,r.nanos)}(n))}function Wl(n,e){return Ku(n,e).canonicalString()}function Ku(n,e){const t=function(i){return new ue(["projects",i.projectId,"databases",i.database])}(n).child("documents");return e===void 0?t:t.child(e)}function Zg(n){const e=ue.fromString(n);return j(ay(e)),e}function va(n,e){return Wl(n.databaseId,e.path)}function ar(n,e){const t=Zg(e);if(t.get(1)!==n.databaseId.projectId)throw new V(N.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new V(N.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new F(ny(t))}function ey(n,e){return Wl(n.databaseId,e)}function ty(n){const e=Zg(n);return e.length===4?ue.emptyPath():ny(e)}function Hu(n){return new ue(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function ny(n){return j(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function vp(n,e,t){return{name:va(n,e),fields:t.value.mapValue.fields}}function S0(n,e,t){const r=ar(n,e.name),i=rt(e.updateTime),s=e.createTime?rt(e.createTime):W.min(),o=new Ke({mapValue:{fields:e.fields}}),a=Ce.newFoundDocument(r,i,s,o);return t&&a.setHasCommittedMutations(),t?a.setHasCommittedMutations():a}function P0(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:$()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(l,d){return l.useProto3Json?(j(d===void 0||typeof d=="string"),Oe.fromBase64String(d||"")):(j(d===void 0||d instanceof Buffer||d instanceof Uint8Array),Oe.fromUint8Array(d||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const d=l.code===void 0?N.UNKNOWN:Qg(l.code);return new V(d,l.message||"")}(o);t=new Jg(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=ar(n,r.document.name),s=rt(r.document.updateTime),o=r.document.createTime?rt(r.document.createTime):W.min(),a=new Ke({mapValue:{fields:r.document.fields}}),u=Ce.newFoundDocument(i,s,o,a),l=r.targetIds||[],d=r.removedTargetIds||[];t=new Zo(l,d,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=ar(n,r.document),s=r.readTime?rt(r.readTime):W.min(),o=Ce.newNoDocument(i,s),a=r.removedTargetIds||[];t=new Zo([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=ar(n,r.document),s=r.removedTargetIds||[];t=new Zo([],s,i,null)}else{if(!("filter"in e))return $();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new y0(i,s),a=r.targetId;t=new Yg(a,o)}}return t}function Ia(n,e){let t;if(e instanceof Ei)t={update:vp(n,e.key,e.value)};else if(e instanceof sc)t={delete:va(n,e.key)};else if(e instanceof hn)t={update:vp(n,e.key,e.data),updateMask:L0(e.fieldMask)};else{if(!(e instanceof Hg))return $();t={verify:va(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof ai)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof _r)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof ci)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Ns)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw $()}(0,r))),e.precondition.isNone||(t.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:b0(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:$()}(n,e.precondition)),t}function Qu(n,e){const t=e.currentDocument?function(s){return s.updateTime!==void 0?He.updateTime(rt(s.updateTime)):s.exists!==void 0?He.exists(s.exists):He.none()}(e.currentDocument):He.none(),r=e.updateTransforms?e.updateTransforms.map(i=>function(o,a){let u=null;if("setToServerValue"in a)j(a.setToServerValue==="REQUEST_TIME"),u=new ai;else if("appendMissingElements"in a){const d=a.appendMissingElements.values||[];u=new _r(d)}else if("removeAllFromArray"in a){const d=a.removeAllFromArray.values||[];u=new ci(d)}else"increment"in a?u=new Ns(o,a.increment):$();const l=we.fromServerFormat(a.fieldPath);return new Bl(l,u)}(n,i)):[];if(e.update){e.update.name;const i=ar(n,e.update.name),s=new Ke({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(u){const l=u.fieldPaths||[];return new ot(l.map(d=>we.fromServerFormat(d)))}(e.updateMask);return new hn(i,s,o,t,r)}return new Ei(i,s,t,r)}if(e.delete){const i=ar(n,e.delete);return new sc(i,t)}if(e.verify){const i=ar(n,e.verify);return new Hg(i,t)}return $()}function k0(n,e){return n&&n.length>0?(j(e!==void 0),n.map(t=>function(i,s){let o=i.updateTime?rt(i.updateTime):rt(s);return o.isEqual(W.min())&&(o=rt(s)),new p0(o,i.transformResults||[])}(t,e))):[]}function ry(n,e){return{documents:[ey(n,e.path)]}}function zl(n,e){const t={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=ey(n,i);const s=function(l){if(l.length!==0)return oy(fe.create(l,"and"))}(e.filters);s&&(t.structuredQuery.where=s);const o=function(l){if(l.length!==0)return l.map(d=>function(_){return{field:An(_.field),direction:O0(_.dir)}}(d))}(e.orderBy);o&&(t.structuredQuery.orderBy=o);const a=zu(n,e.limit);return a!==null&&(t.structuredQuery.limit=a),e.startAt&&(t.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),{_t:t,parent:i}}function N0(n,e,t,r){const{_t:i,parent:s}=zl(n,e),o={},a=[];let u=0;return t.forEach(l=>{const d="aggregate_"+u++;o[d]=l.alias,l.aggregateType==="count"?a.push({alias:d,count:{}}):l.aggregateType==="avg"?a.push({alias:d,avg:{field:An(l.fieldPath)}}):l.aggregateType==="sum"&&a.push({alias:d,sum:{field:An(l.fieldPath)}})}),{request:{structuredAggregationQuery:{aggregations:a,structuredQuery:i.structuredQuery},parent:i.parent},ut:o,parent:s}}function iy(n){let e=ty(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){j(r===1);const d=t.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let s=[];t.where&&(s=function(f){const _=sy(f);return _ instanceof fe&&Ml(_)?_.getFilters():[_]}(t.where));let o=[];t.orderBy&&(o=function(f){return f.map(_=>function(A){return new ks(jr(A.field),function(S){switch(S){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(A.direction))}(_))}(t.orderBy));let a=null;t.limit&&(a=function(f){let _;return _=typeof f=="object"?f.value:f,Za(_)?null:_}(t.limit));let u=null;t.startAt&&(u=function(f){const _=!!f.before,y=f.values||[];return new Ln(y,_)}(t.startAt));let l=null;return t.endAt&&(l=function(f){const _=!f.before,y=f.values||[];return new Ln(y,_)}(t.endAt)),t0(e,i,o,s,a,"F",u,l)}function D0(n,e){const t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return $()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function sy(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=jr(t.unaryFilter.field);return oe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=jr(t.unaryFilter.field);return oe.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=jr(t.unaryFilter.field);return oe.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=jr(t.unaryFilter.field);return oe.create(o,"!=",{nullValue:"NULL_VALUE"});default:return $()}}(n):n.fieldFilter!==void 0?function(t){return oe.create(jr(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return $()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return fe.create(t.compositeFilter.filters.map(r=>sy(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return $()}}(t.compositeFilter.op))}(n):$()}function O0(n){return w0[n]}function x0(n){return A0[n]}function V0(n){return R0[n]}function An(n){return{fieldPath:n.canonicalString()}}function jr(n){return we.fromServerFormat(n.fieldPath)}function oy(n){return n instanceof oe?function(t){if(t.op==="=="){if(np(t.value))return{unaryFilter:{field:An(t.field),op:"IS_NAN"}};if(tp(t.value))return{unaryFilter:{field:An(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(np(t.value))return{unaryFilter:{field:An(t.field),op:"IS_NOT_NAN"}};if(tp(t.value))return{unaryFilter:{field:An(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:An(t.field),op:x0(t.op),value:t.value}}}(n):n instanceof fe?function(t){const r=t.getFilters().map(i=>oy(i));return r.length===1?r[0]:{compositeFilter:{op:V0(t.op),filters:r}}}(n):$()}function L0(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function ay(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Qt{constructor(e,t,r,i,s=W.min(),o=W.min(),a=Oe.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(e){return new Qt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Qt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Qt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Qt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class cy{constructor(e){this.ct=e}}function M0(n,e){let t;if(e.document)t=S0(n.ct,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=F.fromSegments(e.noDocument.path),i=gr(e.noDocument.readTime);t=Ce.newNoDocument(r,i),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return $();{const r=F.fromSegments(e.unknownDocument.path),i=gr(e.unknownDocument.version);t=Ce.newUnknownDocument(r,i)}}return e.readTime&&t.setReadTime(function(i){const s=new Ae(i[0],i[1]);return W.fromTimestamp(s)}(e.readTime)),t}function Ip(n,e){const t=e.key,r={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:Ea(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(s,o){return{name:va(s,o.key),fields:o.data.value.mapValue.fields,updateTime:ui(s,o.version.toTimestamp()),createTime:ui(s,o.createTime.toTimestamp())}}(n.ct,e);else if(e.isNoDocument())r.noDocument={path:t.path.toArray(),readTime:mr(e.version)};else{if(!e.isUnknownDocument())return $();r.unknownDocument={path:t.path.toArray(),version:mr(e.version)}}return r}function Ea(n){const e=n.toTimestamp();return[e.seconds,e.nanoseconds]}function mr(n){const e=n.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function gr(n){const e=new Ae(n.seconds,n.nanoseconds);return W.fromTimestamp(e)}function er(n,e){const t=(e.baseMutations||[]).map(s=>Qu(n.ct,s));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const a=e.mutations[s+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const r=e.mutations.map(s=>Qu(n.ct,s)),i=Ae.fromMillis(e.localWriteTimeMs);return new ql(e.batchId,i,t,r)}function ss(n){const e=gr(n.readTime),t=n.lastLimboFreeSnapshotVersion!==void 0?gr(n.lastLimboFreeSnapshotVersion):W.min();let r;return r=function(s){return s.documents!==void 0}(n.query)?function(s){return j(s.documents.length===1),vt(Qs(ty(s.documents[0])))}(n.query):function(s){return vt(iy(s))}(n.query),new Qt(r,n.targetId,"TargetPurposeListen",n.lastListenSequenceNumber,e,t,Oe.fromBase64String(n.resumeToken))}function uy(n,e){const t=mr(e.snapshotVersion),r=mr(e.lastLimboFreeSnapshotVersion);let i;i=ma(e.target)?ry(n.ct,e.target):zl(n.ct,e.target)._t;const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:pr(e.target),readTime:t,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function ly(n){const e=iy({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?ya(e,e.limit,"L"):e}function cu(n,e){return new jl(e.largestBatchId,Qu(n.ct,e.overlayMutation))}function Ep(n,e){const t=e.path.lastSegment();return[n,nt(e.path.popLast()),t]}function Tp(n,e,t,r){return{indexId:n,uid:e,sequenceNumber:t,readTime:mr(r.readTime),documentKey:nt(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
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
 */class F0{getBundleMetadata(e,t){return wp(e).get(t).next(r=>{if(r)return function(s){return{id:s.bundleId,createTime:gr(s.createTime),version:s.version}}(r)})}saveBundleMetadata(e,t){return wp(e).put(function(i){return{bundleId:i.id,createTime:mr(rt(i.createTime)),version:i.version}}(t))}getNamedQuery(e,t){return Ap(e).get(t).next(r=>{if(r)return function(s){return{name:s.name,query:ly(s.bundledQuery),readTime:gr(s.readTime)}}(r)})}saveNamedQuery(e,t){return Ap(e).put(function(i){return{name:i.name,readTime:mr(rt(i.readTime)),bundledQuery:i.bundledQuery}}(t))}}function wp(n){return xe(n,"bundles")}function Ap(n){return xe(n,"namedQueries")}/**
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
 */class ac{constructor(e,t){this.serializer=e,this.userId=t}static lt(e,t){const r=t.uid||"";return new ac(e,r)}getOverlay(e,t){return Wi(e).get(Ep(this.userId,t)).next(r=>r?cu(this.serializer,r):null)}getOverlays(e,t){const r=Ot();return C.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){const i=[];return r.forEach((s,o)=>{const a=new jl(t,o);i.push(this.ht(e,a))}),C.waitFor(i)}removeOverlaysForBatchId(e,t,r){const i=new Set;t.forEach(o=>i.add(nt(o.getCollectionPath())));const s=[];return i.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);s.push(Wi(e).j("collectionPathOverlayIndex",a))}),C.waitFor(s)}getOverlaysForCollection(e,t,r){const i=Ot(),s=nt(t),o=IDBKeyRange.bound([this.userId,s,r],[this.userId,s,Number.POSITIVE_INFINITY],!0);return Wi(e).U("collectionPathOverlayIndex",o).next(a=>{for(const u of a){const l=cu(this.serializer,u);i.set(l.getKey(),l)}return i})}getOverlaysForCollectionGroup(e,t,r,i){const s=Ot();let o;const a=IDBKeyRange.bound([this.userId,t,r],[this.userId,t,Number.POSITIVE_INFINITY],!0);return Wi(e).J({index:"collectionGroupOverlayIndex",range:a},(u,l,d)=>{const f=cu(this.serializer,l);s.size()<i||f.largestBatchId===o?(s.set(f.getKey(),f),o=f.largestBatchId):d.done()}).next(()=>s)}ht(e,t){return Wi(e).put(function(i,s,o){const[a,u,l]=Ep(s,o.mutation.key);return{userId:s,collectionPath:u,documentId:l,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:Ia(i.ct,o.mutation)}}(this.serializer,this.userId,t))}}function Wi(n){return xe(n,"documentOverlays")}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class U0{Pt(e){return xe(e,"globals")}getSessionToken(e){return this.Pt(e).get("sessionToken").next(t=>{const r=t==null?void 0:t.value;return r?Oe.fromUint8Array(r):Oe.EMPTY_BYTE_STRING})}setSessionToken(e,t){return this.Pt(e).put({name:"sessionToken",value:t.toUint8Array()})}}/**
 * @license
 * Copyright 2021 Google LLC
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
 */class tr{constructor(){}It(e,t){this.Tt(e,t),t.Et()}Tt(e,t){if("nullValue"in e)this.dt(t,5);else if("booleanValue"in e)this.dt(t,10),t.At(e.booleanValue?1:0);else if("integerValue"in e)this.dt(t,15),t.At(ve(e.integerValue));else if("doubleValue"in e){const r=ve(e.doubleValue);isNaN(r)?this.dt(t,13):(this.dt(t,15),Cs(r)?t.At(0):t.At(r))}else if("timestampValue"in e){let r=e.timestampValue;this.dt(t,20),typeof r=="string"&&(r=rn(r)),t.Rt(`${r.seconds||""}`),t.At(r.nanos||0)}else if("stringValue"in e)this.Vt(e.stringValue,t),this.ft(t);else if("bytesValue"in e)this.dt(t,30),t.gt(xn(e.bytesValue)),this.ft(t);else if("referenceValue"in e)this.yt(e.referenceValue,t);else if("geoPointValue"in e){const r=e.geoPointValue;this.dt(t,45),t.At(r.latitude||0),t.At(r.longitude||0)}else"mapValue"in e?Rg(e)?this.dt(t,Number.MAX_SAFE_INTEGER):tc(e)?this.wt(e.mapValue,t):(this.St(e.mapValue,t),this.ft(t)):"arrayValue"in e?(this.bt(e.arrayValue,t),this.ft(t)):$()}Vt(e,t){this.dt(t,25),this.Dt(e,t)}Dt(e,t){t.Rt(e)}St(e,t){const r=e.fields||{};this.dt(t,55);for(const i of Object.keys(r))this.Vt(i,t),this.Tt(r[i],t)}wt(e,t){var r,i;const s=e.fields||{};this.dt(t,53);const o="value",a=((i=(r=s[o].arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.length)||0;this.dt(t,15),t.At(ve(a)),this.Vt(o,t),this.Tt(s[o],t)}bt(e,t){const r=e.values||[];this.dt(t,50);for(const i of r)this.Tt(i,t)}yt(e,t){this.dt(t,37),F.fromName(e).path.forEach(r=>{this.dt(t,60),this.Dt(r,t)})}dt(e,t){e.At(t)}ft(e){e.At(2)}}tr.vt=new tr;function B0(n){if(n===0)return 8;let e=0;return!(n>>4)&&(e+=4,n<<=4),!(n>>6)&&(e+=2,n<<=2),!(n>>7)&&(e+=1),e}function Rp(n){const e=64-function(r){let i=0;for(let s=0;s<8;++s){const o=B0(255&r[s]);if(i+=o,o!==8)break}return i}(n);return Math.ceil(e/8)}class q0{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Ct(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Ft(r.value),r=t.next();this.Mt()}xt(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Ot(r.value),r=t.next();this.Nt()}Lt(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Ft(r);else if(r<2048)this.Ft(960|r>>>6),this.Ft(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Ft(480|r>>>12),this.Ft(128|63&r>>>6),this.Ft(128|63&r);else{const i=t.codePointAt(0);this.Ft(240|i>>>18),this.Ft(128|63&i>>>12),this.Ft(128|63&i>>>6),this.Ft(128|63&i)}}this.Mt()}Bt(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Ot(r);else if(r<2048)this.Ot(960|r>>>6),this.Ot(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Ot(480|r>>>12),this.Ot(128|63&r>>>6),this.Ot(128|63&r);else{const i=t.codePointAt(0);this.Ot(240|i>>>18),this.Ot(128|63&i>>>12),this.Ot(128|63&i>>>6),this.Ot(128|63&i)}}this.Nt()}kt(e){const t=this.qt(e),r=Rp(t);this.Qt(1+r),this.buffer[this.position++]=255&r;for(let i=t.length-r;i<t.length;++i)this.buffer[this.position++]=255&t[i]}Kt(e){const t=this.qt(e),r=Rp(t);this.Qt(1+r),this.buffer[this.position++]=~(255&r);for(let i=t.length-r;i<t.length;++i)this.buffer[this.position++]=~(255&t[i])}$t(){this.Ut(255),this.Ut(255)}Wt(){this.Gt(255),this.Gt(255)}reset(){this.position=0}seed(e){this.Qt(e.length),this.buffer.set(e,this.position),this.position+=e.length}zt(){return this.buffer.slice(0,this.position)}qt(e){const t=function(s){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,s,!1),new Uint8Array(o.buffer)}(e),r=(128&t[0])!=0;t[0]^=r?255:128;for(let i=1;i<t.length;++i)t[i]^=r?255:0;return t}Ft(e){const t=255&e;t===0?(this.Ut(0),this.Ut(255)):t===255?(this.Ut(255),this.Ut(0)):this.Ut(t)}Ot(e){const t=255&e;t===0?(this.Gt(0),this.Gt(255)):t===255?(this.Gt(255),this.Gt(0)):this.Gt(e)}Mt(){this.Ut(0),this.Ut(1)}Nt(){this.Gt(0),this.Gt(1)}Ut(e){this.Qt(1),this.buffer[this.position++]=e}Gt(e){this.Qt(1),this.buffer[this.position++]=~e}Qt(e){const t=e+this.position;if(t<=this.buffer.length)return;let r=2*this.buffer.length;r<t&&(r=t);const i=new Uint8Array(r);i.set(this.buffer),this.buffer=i}}class $0{constructor(e){this.jt=e}gt(e){this.jt.Ct(e)}Rt(e){this.jt.Lt(e)}At(e){this.jt.kt(e)}Et(){this.jt.$t()}}class j0{constructor(e){this.jt=e}gt(e){this.jt.xt(e)}Rt(e){this.jt.Bt(e)}At(e){this.jt.Kt(e)}Et(){this.jt.Wt()}}class zi{constructor(){this.jt=new q0,this.Ht=new $0(this.jt),this.Jt=new j0(this.jt)}seed(e){this.jt.seed(e)}Yt(e){return e===0?this.Ht:this.Jt}zt(){return this.jt.zt()}reset(){this.jt.reset()}}/**
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
 */class nr{constructor(e,t,r,i){this.indexId=e,this.documentKey=t,this.arrayValue=r,this.directionalValue=i}Zt(){const e=this.directionalValue.length,t=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(t);return r.set(this.directionalValue,0),t!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new nr(this.indexId,this.documentKey,this.arrayValue,r)}}function gn(n,e){let t=n.indexId-e.indexId;return t!==0?t:(t=Cp(n.arrayValue,e.arrayValue),t!==0?t:(t=Cp(n.directionalValue,e.directionalValue),t!==0?t:F.comparator(n.documentKey,e.documentKey)))}function Cp(n,e){for(let t=0;t<n.length&&t<e.length;++t){const r=n[t]-e[t];if(r!==0)return r}return n.length-e.length}/**
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
 */class bp{constructor(e){this.Xt=new pe((t,r)=>we.comparator(t.field,r.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.en=e.orderBy,this.tn=[];for(const t of e.filters){const r=t;r.isInequality()?this.Xt=this.Xt.add(r):this.tn.push(r)}}get nn(){return this.Xt.size>1}rn(e){if(j(e.collectionGroup===this.collectionId),this.nn)return!1;const t=Mu(e);if(t!==void 0&&!this.sn(t))return!1;const r=Jn(e);let i=new Set,s=0,o=0;for(;s<r.length&&this.sn(r[s]);++s)i=i.add(r[s].fieldPath.canonicalString());if(s===r.length)return!0;if(this.Xt.size>0){const a=this.Xt.getIterator().getNext();if(!i.has(a.field.canonicalString())){const u=r[s];if(!this.on(a,u)||!this._n(this.en[o++],u))return!1}++s}for(;s<r.length;++s){const a=r[s];if(o>=this.en.length||!this._n(this.en[o++],a))return!1}return!0}an(){if(this.nn)return null;let e=new pe(we.comparator);const t=[];for(const r of this.tn)if(!r.field.isKeyField())if(r.op==="array-contains"||r.op==="array-contains-any")t.push(new Ho(r.field,2));else{if(e.has(r.field))continue;e=e.add(r.field),t.push(new Ho(r.field,0))}for(const r of this.en)r.field.isKeyField()||e.has(r.field)||(e=e.add(r.field),t.push(new Ho(r.field,r.dir==="asc"?0:1)));return new _a(_a.UNKNOWN_ID,this.collectionId,t,Rs.empty())}sn(e){for(const t of this.tn)if(this.on(t,e))return!0;return!1}on(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===r}_n(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
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
 */function hy(n){var e,t;if(j(n instanceof oe||n instanceof fe),n instanceof oe){if(n instanceof xg){const i=((t=(e=n.value.arrayValue)===null||e===void 0?void 0:e.values)===null||t===void 0?void 0:t.map(s=>oe.create(n.field,"==",s)))||[];return fe.create(i,"or")}return n}const r=n.filters.map(i=>hy(i));return fe.create(r,n.op)}function G0(n){if(n.getFilters().length===0)return[];const e=Xu(hy(n));return j(dy(e)),Yu(e)||Ju(e)?[e]:e.getFilters()}function Yu(n){return n instanceof oe}function Ju(n){return n instanceof fe&&Ml(n)}function dy(n){return Yu(n)||Ju(n)||function(t){if(t instanceof fe&&$u(t)){for(const r of t.getFilters())if(!Yu(r)&&!Ju(r))return!1;return!0}return!1}(n)}function Xu(n){if(j(n instanceof oe||n instanceof fe),n instanceof oe)return n;if(n.filters.length===1)return Xu(n.filters[0]);const e=n.filters.map(r=>Xu(r));let t=fe.create(e,n.op);return t=Ta(t),dy(t)?t:(j(t instanceof fe),j(oi(t)),j(t.filters.length>1),t.filters.reduce((r,i)=>Kl(r,i)))}function Kl(n,e){let t;return j(n instanceof oe||n instanceof fe),j(e instanceof oe||e instanceof fe),t=n instanceof oe?e instanceof oe?function(i,s){return fe.create([i,s],"and")}(n,e):Sp(n,e):e instanceof oe?Sp(e,n):function(i,s){if(j(i.filters.length>0&&s.filters.length>0),oi(i)&&oi(s))return Ng(i,s.getFilters());const o=$u(i)?i:s,a=$u(i)?s:i,u=o.filters.map(l=>Kl(l,a));return fe.create(u,"or")}(n,e),Ta(t)}function Sp(n,e){if(oi(e))return Ng(e,n.getFilters());{const t=e.filters.map(r=>Kl(n,r));return fe.create(t,"or")}}function Ta(n){if(j(n instanceof oe||n instanceof fe),n instanceof oe)return n;const e=n.getFilters();if(e.length===1)return Ta(e[0]);if(Pg(n))return n;const t=e.map(i=>Ta(i)),r=[];return t.forEach(i=>{i instanceof oe?r.push(i):i instanceof fe&&(i.op===n.op?r.push(...i.filters):r.push(i))}),r.length===1?r[0]:fe.create(r,n.op)}/**
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
 */class W0{constructor(){this.un=new Hl}addToCollectionParentIndex(e,t){return this.un.add(t),C.resolve()}getCollectionParents(e,t){return C.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return C.resolve()}deleteFieldIndex(e,t){return C.resolve()}deleteAllFieldIndexes(e){return C.resolve()}createTargetIndexes(e,t){return C.resolve()}getDocumentsMatchingTarget(e,t){return C.resolve(null)}getIndexType(e,t){return C.resolve(0)}getFieldIndexes(e,t){return C.resolve([])}getNextCollectionGroupToUpdate(e){return C.resolve(null)}getMinOffset(e,t){return C.resolve(pt.min())}getMinOffsetFromCollectionGroup(e,t){return C.resolve(pt.min())}updateCollectionGroup(e,t,r){return C.resolve()}updateIndexEntries(e,t){return C.resolve()}}class Hl{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new pe(ue.comparator),s=!i.has(r);return this.index[t]=i.add(r),s}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new pe(ue.comparator)).toArray()}}/**
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
 */const xo=new Uint8Array(0);class z0{constructor(e,t){this.databaseId=t,this.cn=new Hl,this.ln=new jn(r=>pr(r),(r,i)=>Hs(r,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.cn.has(t)){const r=t.lastSegment(),i=t.popLast();e.addOnCommittedListener(()=>{this.cn.add(t)});const s={collectionId:r,parent:nt(i)};return Pp(e).put(s)}return C.resolve()}getCollectionParents(e,t){const r=[],i=IDBKeyRange.bound([t,""],[pg(t),""],!1,!0);return Pp(e).U(i).next(s=>{for(const o of s){if(o.collectionId!==t)break;r.push(Dt(o.parent))}return r})}addFieldIndex(e,t){const r=Ki(e),i=function(a){return{indexId:a.indexId,collectionGroup:a.collectionGroup,fields:a.fields.map(u=>[u.fieldPath.canonicalString(),u.kind])}}(t);delete i.indexId;const s=r.add(i);if(t.indexState){const o=Fr(e);return s.next(a=>{o.put(Tp(a,this.uid,t.indexState.sequenceNumber,t.indexState.offset))})}return s.next()}deleteFieldIndex(e,t){const r=Ki(e),i=Fr(e),s=Mr(e);return r.delete(t.indexId).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const t=Ki(e),r=Mr(e),i=Fr(e);return t.j().next(()=>r.j()).next(()=>i.j())}createTargetIndexes(e,t){return C.forEach(this.hn(t),r=>this.getIndexType(e,r).next(i=>{if(i===0||i===1){const s=new bp(r).an();if(s!=null)return this.addFieldIndex(e,s)}}))}getDocumentsMatchingTarget(e,t){const r=Mr(e);let i=!0;const s=new Map;return C.forEach(this.hn(t),o=>this.Pn(e,o).next(a=>{i&&(i=!!a),s.set(o,a)})).next(()=>{if(i){let o=ne();const a=[];return C.forEach(s,(u,l)=>{D("IndexedDbIndexManager",`Using index ${function(B){return`id=${B.indexId}|cg=${B.collectionGroup}|f=${B.fields.map(G=>`${G.fieldPath}:${G.kind}`).join(",")}`}(u)} to execute ${pr(t)}`);const d=function(B,G){const se=Mu(G);if(se===void 0)return null;for(const Y of ga(B,se.fieldPath))switch(Y.op){case"array-contains-any":return Y.value.arrayValue.values||[];case"array-contains":return[Y.value]}return null}(l,u),f=function(B,G){const se=new Map;for(const Y of Jn(G))for(const E of ga(B,Y.fieldPath))switch(E.op){case"==":case"in":se.set(Y.fieldPath.canonicalString(),E.value);break;case"not-in":case"!=":return se.set(Y.fieldPath.canonicalString(),E.value),Array.from(se.values())}return null}(l,u),_=function(B,G){const se=[];let Y=!0;for(const E of Jn(G)){const g=E.kind===0?ap(B,E.fieldPath,B.startAt):cp(B,E.fieldPath,B.startAt);se.push(g.value),Y&&(Y=g.inclusive)}return new Ln(se,Y)}(l,u),y=function(B,G){const se=[];let Y=!0;for(const E of Jn(G)){const g=E.kind===0?cp(B,E.fieldPath,B.endAt):ap(B,E.fieldPath,B.endAt);se.push(g.value),Y&&(Y=g.inclusive)}return new Ln(se,Y)}(l,u),A=this.In(u,l,_),P=this.In(u,l,y),S=this.Tn(u,l,f),U=this.En(u.indexId,d,A,_.inclusive,P,y.inclusive,S);return C.forEach(U,q=>r.G(q,t.limit).next(B=>{B.forEach(G=>{const se=F.fromSegments(G.documentKey);o.has(se)||(o=o.add(se),a.push(se))})}))}).next(()=>a)}return C.resolve(null)})}hn(e){let t=this.ln.get(e);return t||(e.filters.length===0?t=[e]:t=G0(fe.create(e.filters,"and")).map(r=>Gu(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.ln.set(e,t),t)}En(e,t,r,i,s,o,a){const u=(t!=null?t.length:1)*Math.max(r.length,s.length),l=u/(t!=null?t.length:1),d=[];for(let f=0;f<u;++f){const _=t?this.dn(t[f/l]):xo,y=this.An(e,_,r[f%l],i),A=this.Rn(e,_,s[f%l],o),P=a.map(S=>this.An(e,_,S,!0));d.push(...this.createRange(y,A,P))}return d}An(e,t,r,i){const s=new nr(e,F.empty(),t,r);return i?s:s.Zt()}Rn(e,t,r,i){const s=new nr(e,F.empty(),t,r);return i?s.Zt():s}Pn(e,t){const r=new bp(t),i=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let o=null;for(const a of s)r.rn(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,t){let r=2;const i=this.hn(t);return C.forEach(i,s=>this.Pn(e,s).next(o=>{o?r!==0&&o.fields.length<function(u){let l=new pe(we.comparator),d=!1;for(const f of u.filters)for(const _ of f.getFlattenedFilters())_.field.isKeyField()||(_.op==="array-contains"||_.op==="array-contains-any"?d=!0:l=l.add(_.field));for(const f of u.orderBy)f.field.isKeyField()||(l=l.add(f.field));return l.size+(d?1:0)}(s)&&(r=1):r=0})).next(()=>function(o){return o.limit!==null}(t)&&i.length>1&&r===2?1:r)}Vn(e,t){const r=new zi;for(const i of Jn(e)){const s=t.data.field(i.fieldPath);if(s==null)return null;const o=r.Yt(i.kind);tr.vt.It(s,o)}return r.zt()}dn(e){const t=new zi;return tr.vt.It(e,t.Yt(0)),t.zt()}mn(e,t){const r=new zi;return tr.vt.It(fr(this.databaseId,t),r.Yt(function(s){const o=Jn(s);return o.length===0?0:o[o.length-1].kind}(e))),r.zt()}Tn(e,t,r){if(r===null)return[];let i=[];i.push(new zi);let s=0;for(const o of Jn(e)){const a=r[s++];for(const u of i)if(this.fn(t,o.fieldPath)&&Ps(a))i=this.gn(i,o,a);else{const l=u.Yt(o.kind);tr.vt.It(a,l)}}return this.pn(i)}In(e,t,r){return this.Tn(e,t,r.position)}pn(e){const t=[];for(let r=0;r<e.length;++r)t[r]=e[r].zt();return t}gn(e,t,r){const i=[...e],s=[];for(const o of r.arrayValue.values||[])for(const a of i){const u=new zi;u.seed(a.zt()),tr.vt.It(o,u.Yt(t.kind)),s.push(u)}return s}fn(e,t){return!!e.filters.find(r=>r instanceof oe&&r.field.isEqual(t)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,t){const r=Ki(e),i=Fr(e);return(t?r.U("collectionGroupIndex",IDBKeyRange.bound(t,t)):r.U()).next(s=>{const o=[];return C.forEach(s,a=>i.get([a.indexId,this.uid]).next(u=>{o.push(function(d,f){const _=f?new Rs(f.sequenceNumber,new pt(gr(f.readTime),new F(Dt(f.documentKey)),f.largestBatchId)):Rs.empty(),y=d.fields.map(([A,P])=>new Ho(we.fromServerFormat(A),P));return new _a(d.indexId,d.collectionGroup,y,_)}(a,u))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((r,i)=>{const s=r.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:J(r.collectionGroup,i.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,r){const i=Ki(e),s=Fr(e);return this.yn(e).next(o=>i.U("collectionGroupIndex",IDBKeyRange.bound(t,t)).next(a=>C.forEach(a,u=>s.put(Tp(u.indexId,this.uid,o,r)))))}updateIndexEntries(e,t){const r=new Map;return C.forEach(t,(i,s)=>{const o=r.get(i.collectionGroup);return(o?C.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next(a=>(r.set(i.collectionGroup,a),C.forEach(a,u=>this.wn(e,i,u).next(l=>{const d=this.Sn(s,u);return l.isEqual(d)?C.resolve():this.bn(e,s,u,l,d)}))))})}Dn(e,t,r,i){return Mr(e).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.mn(r,t.key),documentKey:t.key.path.toArray()})}vn(e,t,r,i){return Mr(e).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.mn(r,t.key),t.key.path.toArray()])}wn(e,t,r){const i=Mr(e);let s=new pe(gn);return i.J({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.mn(r,t)])},(o,a)=>{s=s.add(new nr(r.indexId,t,a.arrayValue,a.directionalValue))}).next(()=>s)}Sn(e,t){let r=new pe(gn);const i=this.Vn(t,e);if(i==null)return r;const s=Mu(t);if(s!=null){const o=e.data.field(s.fieldPath);if(Ps(o))for(const a of o.arrayValue.values||[])r=r.add(new nr(t.indexId,e.key,this.dn(a),i))}else r=r.add(new nr(t.indexId,e.key,xo,i));return r}bn(e,t,r,i,s){D("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const o=[];return function(u,l,d,f,_){const y=u.getIterator(),A=l.getIterator();let P=Lr(y),S=Lr(A);for(;P||S;){let U=!1,q=!1;if(P&&S){const B=d(P,S);B<0?q=!0:B>0&&(U=!0)}else P!=null?q=!0:U=!0;U?(f(S),S=Lr(A)):q?(_(P),P=Lr(y)):(P=Lr(y),S=Lr(A))}}(i,s,gn,a=>{o.push(this.Dn(e,t,r,a))},a=>{o.push(this.vn(e,t,r,a))}),C.waitFor(o)}yn(e){let t=1;return Fr(e).J({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,i,s)=>{s.done(),t=i.sequenceNumber+1}).next(()=>t)}createRange(e,t,r){r=r.sort((o,a)=>gn(o,a)).filter((o,a,u)=>!a||gn(o,u[a-1])!==0);const i=[];i.push(e);for(const o of r){const a=gn(o,e),u=gn(o,t);if(a===0)i[0]=e.Zt();else if(a>0&&u<0)i.push(o),i.push(o.Zt());else if(u>0)break}i.push(t);const s=[];for(let o=0;o<i.length;o+=2){if(this.Cn(i[o],i[o+1]))return[];const a=[i[o].indexId,this.uid,i[o].arrayValue,i[o].directionalValue,xo,[]],u=[i[o+1].indexId,this.uid,i[o+1].arrayValue,i[o+1].directionalValue,xo,[]];s.push(IDBKeyRange.bound(a,u))}return s}Cn(e,t){return gn(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(kp)}getMinOffset(e,t){return C.mapArray(this.hn(t),r=>this.Pn(e,r).next(i=>i||$())).next(kp)}}function Pp(n){return xe(n,"collectionParents")}function Mr(n){return xe(n,"indexEntries")}function Ki(n){return xe(n,"indexConfiguration")}function Fr(n){return xe(n,"indexState")}function kp(n){j(n.length!==0);let e=n[0].indexState.offset,t=e.largestBatchId;for(let r=1;r<n.length;r++){const i=n[r].indexState.offset;Ol(i,e)<0&&(e=i),t<i.largestBatchId&&(t=i.largestBatchId)}return new pt(e.readTime,e.documentKey,t)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */const Np={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class st{constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new st(e,st.DEFAULT_COLLECTION_PERCENTILE,st.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
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
 */function fy(n,e,t){const r=n.store("mutations"),i=n.store("documentMutations"),s=[],o=IDBKeyRange.only(t.batchId);let a=0;const u=r.J({range:o},(d,f,_)=>(a++,_.delete()));s.push(u.next(()=>{j(a===1)}));const l=[];for(const d of t.mutations){const f=vg(e,d.key.path,t.batchId);s.push(i.delete(f)),l.push(d.key)}return C.waitFor(s).next(()=>l)}function wa(n){if(!n)return 0;let e;if(n.document)e=n.document;else if(n.unknownDocument)e=n.unknownDocument;else{if(!n.noDocument)throw $();e=n.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
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
 */st.DEFAULT_COLLECTION_PERCENTILE=10,st.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,st.DEFAULT=new st(41943040,st.DEFAULT_COLLECTION_PERCENTILE,st.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),st.DISABLED=new st(-1,0,0);class cc{constructor(e,t,r,i){this.userId=e,this.serializer=t,this.indexManager=r,this.referenceDelegate=i,this.Fn={}}static lt(e,t,r,i){j(e.uid!=="");const s=e.isAuthenticated()?e.uid:"";return new cc(s,t,r,i)}checkEmpty(e){let t=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return yn(e).J({index:"userMutationsIndex",range:r},(i,s,o)=>{t=!1,o.done()}).next(()=>t)}addMutationBatch(e,t,r,i){const s=Gr(e),o=yn(e);return o.add({}).next(a=>{j(typeof a=="number");const u=new ql(a,t,r,i),l=function(y,A,P){const S=P.baseMutations.map(q=>Ia(y.ct,q)),U=P.mutations.map(q=>Ia(y.ct,q));return{userId:A,batchId:P.batchId,localWriteTimeMs:P.localWriteTime.toMillis(),baseMutations:S,mutations:U}}(this.serializer,this.userId,u),d=[];let f=new pe((_,y)=>J(_.canonicalString(),y.canonicalString()));for(const _ of i){const y=vg(this.userId,_.key.path,a);f=f.add(_.key.path.popLast()),d.push(o.put(l)),d.push(s.put(y,AR))}return f.forEach(_=>{d.push(this.indexManager.addToCollectionParentIndex(e,_))}),e.addOnCommittedListener(()=>{this.Fn[a]=u.keys()}),C.waitFor(d).next(()=>u)})}lookupMutationBatch(e,t){return yn(e).get(t).next(r=>r?(j(r.userId===this.userId),er(this.serializer,r)):null)}Mn(e,t){return this.Fn[t]?C.resolve(this.Fn[t]):this.lookupMutationBatch(e,t).next(r=>{if(r){const i=r.keys();return this.Fn[t]=i,i}return null})}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return yn(e).J({index:"userMutationsIndex",range:i},(o,a,u)=>{a.userId===this.userId&&(j(a.batchId>=r),s=er(this.serializer,a)),u.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return yn(e).J({index:"userMutationsIndex",range:t,reverse:!0},(i,s,o)=>{r=s.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return yn(e).U("userMutationsIndex",t).next(r=>r.map(i=>er(this.serializer,i)))}getAllMutationBatchesAffectingDocumentKey(e,t){const r=Qo(this.userId,t.path),i=IDBKeyRange.lowerBound(r),s=[];return Gr(e).J({range:i},(o,a,u)=>{const[l,d,f]=o,_=Dt(d);if(l===this.userId&&t.path.isEqual(_))return yn(e).get(f).next(y=>{if(!y)throw $();j(y.userId===this.userId),s.push(er(this.serializer,y))});u.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new pe(J);const i=[];return t.forEach(s=>{const o=Qo(this.userId,s.path),a=IDBKeyRange.lowerBound(o),u=Gr(e).J({range:a},(l,d,f)=>{const[_,y,A]=l,P=Dt(y);_===this.userId&&s.path.isEqual(P)?r=r.add(A):f.done()});i.push(u)}),C.waitFor(i).next(()=>this.xn(e,r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1,s=Qo(this.userId,r),o=IDBKeyRange.lowerBound(s);let a=new pe(J);return Gr(e).J({range:o},(u,l,d)=>{const[f,_,y]=u,A=Dt(_);f===this.userId&&r.isPrefixOf(A)?A.length===i&&(a=a.add(y)):d.done()}).next(()=>this.xn(e,a))}xn(e,t){const r=[],i=[];return t.forEach(s=>{i.push(yn(e).get(s).next(o=>{if(o===null)throw $();j(o.userId===this.userId),r.push(er(this.serializer,o))}))}),C.waitFor(i).next(()=>r)}removeMutationBatch(e,t){return fy(e._e,this.userId,t).next(r=>(e.addOnCommittedListener(()=>{this.On(t.batchId)}),C.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}On(e){delete this.Fn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return C.resolve();const r=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),i=[];return Gr(e).J({range:r},(s,o,a)=>{if(s[0]===this.userId){const u=Dt(s[1]);i.push(u)}else a.done()}).next(()=>{j(i.length===0)})})}containsKey(e,t){return py(e,this.userId,t)}Nn(e){return _y(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function py(n,e,t){const r=Qo(e,t.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return Gr(n).J({range:s,H:!0},(a,u,l)=>{const[d,f,_]=a;d===e&&f===i&&(o=!0),l.done()}).next(()=>o)}function yn(n){return xe(n,"mutations")}function Gr(n){return xe(n,"documentMutations")}function _y(n){return xe(n,"mutationQueues")}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class yr{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new yr(0)}static kn(){return new yr(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class K0{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.qn(e).next(t=>{const r=new yr(t.highestTargetId);return t.highestTargetId=r.next(),this.Qn(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.qn(e).next(t=>W.fromTimestamp(new Ae(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.qn(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,r){return this.qn(e).next(i=>(i.highestListenSequenceNumber=t,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),t>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=t),this.Qn(e,i)))}addTargetData(e,t){return this.Kn(e,t).next(()=>this.qn(e).next(r=>(r.targetCount+=1,this.$n(t,r),this.Qn(e,r))))}updateTargetData(e,t){return this.Kn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>Ur(e).delete(t.targetId)).next(()=>this.qn(e)).next(r=>(j(r.targetCount>0),r.targetCount-=1,this.Qn(e,r)))}removeTargets(e,t,r){let i=0;const s=[];return Ur(e).J((o,a)=>{const u=ss(a);u.sequenceNumber<=t&&r.get(u.targetId)===null&&(i++,s.push(this.removeTargetData(e,u)))}).next(()=>C.waitFor(s)).next(()=>i)}forEachTarget(e,t){return Ur(e).J((r,i)=>{const s=ss(i);t(s)})}qn(e){return Dp(e).get("targetGlobalKey").next(t=>(j(t!==null),t))}Qn(e,t){return Dp(e).put("targetGlobalKey",t)}Kn(e,t){return Ur(e).put(uy(this.serializer,t))}$n(e,t){let r=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,r=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.qn(e).next(t=>t.targetCount)}getTargetData(e,t){const r=pr(t),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return Ur(e).J({range:i,index:"queryTargetsIndex"},(o,a,u)=>{const l=ss(a);Hs(t,l.target)&&(s=l,u.done())}).next(()=>s)}addMatchingKeys(e,t,r){const i=[],s=Rn(e);return t.forEach(o=>{const a=nt(o.path);i.push(s.put({targetId:r,path:a})),i.push(this.referenceDelegate.addReference(e,r,o))}),C.waitFor(i)}removeMatchingKeys(e,t,r){const i=Rn(e);return C.forEach(t,s=>{const o=nt(s.path);return C.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(e,r,s)])})}removeMatchingKeysForTargetId(e,t){const r=Rn(e),i=IDBKeyRange.bound([t],[t+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,t){const r=IDBKeyRange.bound([t],[t+1],!1,!0),i=Rn(e);let s=ne();return i.J({range:r,H:!0},(o,a,u)=>{const l=Dt(o[1]),d=new F(l);s=s.add(d)}).next(()=>s)}containsKey(e,t){const r=nt(t.path),i=IDBKeyRange.bound([r],[pg(r)],!1,!0);let s=0;return Rn(e).J({index:"documentTargetsIndex",H:!0,range:i},([o,a],u,l)=>{o!==0&&(s++,l.done())}).next(()=>s>0)}ot(e,t){return Ur(e).get(t).next(r=>r?ss(r):null)}}function Ur(n){return xe(n,"targets")}function Dp(n){return xe(n,"targetGlobal")}function Rn(n){return xe(n,"targetDocuments")}/**
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
 */function Op([n,e],[t,r]){const i=J(n,t);return i===0?J(e,r):i}class H0{constructor(e){this.Un=e,this.buffer=new pe(Op),this.Wn=0}Gn(){return++this.Wn}zn(e){const t=[e,this.Gn()];if(this.buffer.size<this.Un)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();Op(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Q0{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Hn(6e4)}stop(){this.jn&&(this.jn.cancel(),this.jn=null)}get started(){return this.jn!==null}Hn(e){D("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){$n(t)?D("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await Ar(t)}await this.Hn(3e5)})}}class Y0{constructor(e,t){this.Jn=e,this.params=t}calculateTargetCount(e,t){return this.Jn.Yn(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return C.resolve(mt.oe);const r=new H0(t);return this.Jn.forEachTarget(e,i=>r.zn(i.sequenceNumber)).next(()=>this.Jn.Zn(e,i=>r.zn(i))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.Jn.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Jn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(D("LruGarbageCollector","Garbage collection skipped; disabled"),C.resolve(Np)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(D("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Np):this.Xn(e,t))}getCacheSize(e){return this.Jn.getCacheSize(e)}Xn(e,t){let r,i,s,o,a,u,l;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(f=>(f>this.params.maximumSequenceNumbersToCollect?(D("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${f}`),i=this.params.maximumSequenceNumbersToCollect):i=f,o=Date.now(),this.nthSequenceNumber(e,i))).next(f=>(r=f,a=Date.now(),this.removeTargets(e,r,t))).next(f=>(s=f,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(f=>(l=Date.now(),qr()<=Z.DEBUG&&D("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(u-a)+`ms
	Removed ${f} documents in `+(l-u)+`ms
Total Duration: ${l-d}ms`),C.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:f})))}}function J0(n,e){return new Y0(n,e)}/**
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
 */class X0{constructor(e,t){this.db=e,this.garbageCollector=J0(this,t)}Yn(e){const t=this.er(e);return this.db.getTargetCache().getTargetCount(e).next(r=>t.next(i=>r+i))}er(e){let t=0;return this.Zn(e,r=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}Zn(e,t){return this.tr(e,(r,i)=>t(i))}addReference(e,t,r){return Vo(e,r)}removeReference(e,t,r){return Vo(e,r)}removeTargets(e,t,r){return this.db.getTargetCache().removeTargets(e,t,r)}markPotentiallyOrphaned(e,t){return Vo(e,t)}nr(e,t){return function(i,s){let o=!1;return _y(i).Y(a=>py(i,a,s).next(u=>(u&&(o=!0),C.resolve(!u)))).next(()=>o)}(e,t)}removeOrphanedDocuments(e,t){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.tr(e,(o,a)=>{if(a<=t){const u=this.nr(e,o).next(l=>{if(!l)return s++,r.getEntry(e,o).next(()=>(r.removeEntry(o,W.min()),Rn(e).delete(function(f){return[0,nt(f.path)]}(o))))});i.push(u)}}).next(()=>C.waitFor(i)).next(()=>r.apply(e)).next(()=>s)}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,t){return Vo(e,t)}tr(e,t){const r=Rn(e);let i,s=mt.oe;return r.J({index:"documentTargetsIndex"},([o,a],{path:u,sequenceNumber:l})=>{o===0?(s!==mt.oe&&t(new F(Dt(i)),s),s=l,i=u):s=mt.oe}).next(()=>{s!==mt.oe&&t(new F(Dt(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Vo(n,e){return Rn(n).put(function(r,i){return{targetId:0,path:nt(r.path),sequenceNumber:i}}(e,n.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class my{constructor(){this.changes=new jn(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ce.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?C.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Z0{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,r){return Qn(e).put(r)}removeEntry(e,t,r){return Qn(e).delete(function(s,o){const a=s.path.toArray();return[a.slice(0,a.length-2),a[a.length-2],Ea(o),a[a.length-1]]}(t,r))}updateMetadata(e,t){return this.getMetadata(e).next(r=>(r.byteSize+=t,this.rr(e,r)))}getEntry(e,t){let r=Ce.newInvalidDocument(t);return Qn(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(Hi(t))},(i,s)=>{r=this.ir(t,s)}).next(()=>r)}sr(e,t){let r={size:0,document:Ce.newInvalidDocument(t)};return Qn(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(Hi(t))},(i,s)=>{r={document:this.ir(t,s),size:wa(s)}}).next(()=>r)}getEntries(e,t){let r=ht();return this._r(e,t,(i,s)=>{const o=this.ir(i,s);r=r.insert(i,o)}).next(()=>r)}ar(e,t){let r=ht(),i=new ke(F.comparator);return this._r(e,t,(s,o)=>{const a=this.ir(s,o);r=r.insert(s,a),i=i.insert(s,wa(o))}).next(()=>({documents:r,ur:i}))}_r(e,t,r){if(t.isEmpty())return C.resolve();let i=new pe(Lp);t.forEach(u=>i=i.add(u));const s=IDBKeyRange.bound(Hi(i.first()),Hi(i.last())),o=i.getIterator();let a=o.getNext();return Qn(e).J({index:"documentKeyIndex",range:s},(u,l,d)=>{const f=F.fromSegments([...l.prefixPath,l.collectionGroup,l.documentId]);for(;a&&Lp(a,f)<0;)r(a,null),a=o.getNext();a&&a.isEqual(f)&&(r(a,l),a=o.hasNext()?o.getNext():null),a?d.$(Hi(a)):d.done()}).next(()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,t,r,i,s){const o=t.path,a=[o.popLast().toArray(),o.lastSegment(),Ea(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],u=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Qn(e).U(IDBKeyRange.bound(a,u,!0)).next(l=>{s==null||s.incrementDocumentReadCount(l.length);let d=ht();for(const f of l){const _=this.ir(F.fromSegments(f.prefixPath.concat(f.collectionGroup,f.documentId)),f);_.isFoundDocument()&&(Ys(t,_)||i.has(_.key))&&(d=d.insert(_.key,_))}return d})}getAllFromCollectionGroup(e,t,r,i){let s=ht();const o=Vp(t,r),a=Vp(t,pt.max());return Qn(e).J({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(u,l,d)=>{const f=this.ir(F.fromSegments(l.prefixPath.concat(l.collectionGroup,l.documentId)),l);s=s.insert(f.key,f),s.size===i&&d.done()}).next(()=>s)}newChangeBuffer(e){return new eC(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return xp(e).get("remoteDocumentGlobalKey").next(t=>(j(!!t),t))}rr(e,t){return xp(e).put("remoteDocumentGlobalKey",t)}ir(e,t){if(t){const r=M0(this.serializer,t);if(!(r.isNoDocument()&&r.version.isEqual(W.min())))return r}return Ce.newInvalidDocument(e)}}function gy(n){return new Z0(n)}class eC extends my{constructor(e,t){super(),this.cr=e,this.trackRemovals=t,this.lr=new jn(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(e){const t=[];let r=0,i=new pe((s,o)=>J(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const a=this.lr.get(s);if(t.push(this.cr.removeEntry(e,s,a.readTime)),o.isValidDocument()){const u=Ip(this.cr.serializer,o);i=i.add(s.path.popLast());const l=wa(u);r+=l-a.size,t.push(this.cr.addEntry(e,s,u))}else if(r-=a.size,this.trackRemovals){const u=Ip(this.cr.serializer,o.convertToNoDocument(W.min()));t.push(this.cr.addEntry(e,s,u))}}),i.forEach(s=>{t.push(this.cr.indexManager.addToCollectionParentIndex(e,s))}),t.push(this.cr.updateMetadata(e,r)),C.waitFor(t)}getFromCache(e,t){return this.cr.sr(e,t).next(r=>(this.lr.set(t,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,t){return this.cr.ar(e,t).next(({documents:r,ur:i})=>(i.forEach((s,o)=>{this.lr.set(s,{size:o,readTime:r.get(s).readTime})}),r))}}function xp(n){return xe(n,"remoteDocumentGlobal")}function Qn(n){return xe(n,"remoteDocumentsV14")}function Hi(n){const e=n.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function Vp(n,e){const t=e.documentKey.path.toArray();return[n,Ea(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function Lp(n,e){const t=n.path.toArray(),r=e.path.toArray();let i=0;for(let s=0;s<t.length-2&&s<r.length-2;++s)if(i=J(t[s],r[s]),i)return i;return i=J(t.length,r.length),i||(i=J(t[t.length-2],r[r.length-2]),i||J(t[t.length-1],r[r.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
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
 *//**
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
 */class tC{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class yy{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&fs(r.mutation,i,ot.empty(),Ae.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,ne()).next(()=>r))}getLocalViewOfDocuments(e,t,r=ne()){const i=Ot();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(s=>{let o=rs();return s.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const r=Ot();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,ne()))}populateOverlays(e,t,r){const i=[];return r.forEach(s=>{t.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{t.set(o,a)})})}computeViews(e,t,r,i){let s=ht();const o=ds(),a=function(){return ds()}();return t.forEach((u,l)=>{const d=r.get(l.key);i.has(l.key)&&(d===void 0||d.mutation instanceof hn)?s=s.insert(l.key,l):d!==void 0?(o.set(l.key,d.mutation.getFieldMask()),fs(d.mutation,l,d.mutation.getFieldMask(),Ae.now())):o.set(l.key,ot.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((l,d)=>o.set(l,d)),t.forEach((l,d)=>{var f;return a.set(l,new tC(d,(f=o.get(l))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,t){const r=ds();let i=new ke((o,a)=>o-a),s=ne();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const a of o)a.keys().forEach(u=>{const l=t.get(u);if(l===null)return;let d=r.get(u)||ot.empty();d=a.applyToLocalView(l,d),r.set(u,d);const f=(i.get(a.batchId)||ne()).add(u);i=i.insert(a.batchId,f)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),l=u.key,d=u.value,f=Bg();d.forEach(_=>{if(!s.has(_)){const y=zg(t.get(_),r.get(_));y!==null&&f.set(_,y),s=s.add(_)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,f))}return C.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,i){return function(o){return F.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Fl(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-s.size):C.resolve(Ot());let a=-1,u=s;return o.next(l=>C.forEach(l,(d,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),s.get(d)?C.resolve():this.remoteDocumentCache.getEntry(e,d).next(_=>{u=u.insert(d,_)}))).next(()=>this.populateOverlays(e,l,s)).next(()=>this.computeViews(e,u,l,ne())).next(d=>({batchId:a,changes:Ug(d)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new F(t)).next(r=>{let i=rs();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){const s=t.collectionGroup;let o=rs();return this.indexManager.getCollectionParents(e,s).next(a=>C.forEach(a,u=>{const l=function(f,_){return new Cr(_,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(t,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,l,r,i).next(d=>{d.forEach((f,_)=>{o=o.insert(f,_)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,s,i))).next(o=>{s.forEach((u,l)=>{const d=l.getKey();o.get(d)===null&&(o=o.insert(d,Ce.newInvalidDocument(d)))});let a=rs();return o.forEach((u,l)=>{const d=s.get(u);d!==void 0&&fs(d.mutation,l,ot.empty(),Ae.now()),Ys(t,l)&&(a=a.insert(u,l))}),a})}}/**
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
 */class nC{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return C.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,function(i){return{id:i.id,version:i.version,createTime:rt(i.createTime)}}(t)),C.resolve()}getNamedQuery(e,t){return C.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,function(i){return{name:i.name,query:ly(i.bundledQuery),readTime:rt(i.readTime)}}(t)),C.resolve()}}/**
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
 */class rC{constructor(){this.overlays=new ke(F.comparator),this.Ir=new Map}getOverlay(e,t){return C.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Ot();return C.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,s)=>{this.ht(e,t,s)}),C.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),C.resolve()}getOverlaysForCollection(e,t,r){const i=Ot(),s=t.length+1,o=new F(t.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,l=u.getKey();if(!t.isPrefixOf(l.path))break;l.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return C.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let s=new ke((l,d)=>l-d);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===t&&l.largestBatchId>r){let d=s.get(l.largestBatchId);d===null&&(d=Ot(),s=s.insert(l.largestBatchId,d)),d.set(l.getKey(),l)}}const a=Ot(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((l,d)=>a.set(l,d)),!(a.size()>=i)););return C.resolve(a)}ht(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new jl(t,r));let s=this.Ir.get(t);s===void 0&&(s=ne(),this.Ir.set(t,s)),this.Ir.set(t,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class iC{constructor(){this.sessionToken=Oe.EMPTY_BYTE_STRING}getSessionToken(e){return C.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,C.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Ql{constructor(){this.Tr=new pe(Le.Er),this.dr=new pe(Le.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){const r=new Le(e,t);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Vr(new Le(e,t))}mr(e,t){e.forEach(r=>this.removeReference(r,t))}gr(e){const t=new F(new ue([])),r=new Le(t,e),i=new Le(t,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const t=new F(new ue([])),r=new Le(t,e),i=new Le(t,e+1);let s=ne();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const t=new Le(e,0),r=this.Tr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Le{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return F.comparator(e.key,t.key)||J(e.wr,t.wr)}static Ar(e,t){return J(e.wr,t.wr)||F.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class sC{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new pe(Le.Er)}checkEmpty(e){return C.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new ql(s,t,r,i);this.mutationQueue.push(o);for(const a of i)this.br=this.br.add(new Le(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return C.resolve(o)}lookupMutationBatch(e,t){return C.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.vr(r),s=i<0?0:i;return C.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return C.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return C.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Le(t,0),i=new Le(t,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const a=this.Dr(o.wr);s.push(a)}),C.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new pe(J);return t.forEach(i=>{const s=new Le(i,0),o=new Le(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],a=>{r=r.add(a.wr)})}),C.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let s=r;F.isDocumentKey(s)||(s=s.child(""));const o=new Le(new F(s),0);let a=new pe(J);return this.br.forEachWhile(u=>{const l=u.key.path;return!!r.isPrefixOf(l)&&(l.length===i&&(a=a.add(u.wr)),!0)},o),C.resolve(this.Cr(a))}Cr(e){const t=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){j(this.Fr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return C.forEach(t.mutations,i=>{const s=new Le(i.key,t.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,t){const r=new Le(t,0),i=this.br.firstAfterOrEqual(r);return C.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,C.resolve()}Fr(e,t){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class oC{constructor(e){this.Mr=e,this.docs=function(){return new ke(F.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return C.resolve(r?r.document.mutableCopy():Ce.newInvalidDocument(t))}getEntries(e,t){let r=ht();return t.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Ce.newInvalidDocument(i))}),C.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let s=ht();const o=t.path,a=new F(o.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:l,value:{document:d}}=u.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||Ol(_g(d),r)<=0||(i.has(d.key)||Ys(t,d))&&(s=s.insert(d.key,d.mutableCopy()))}return C.resolve(s)}getAllFromCollectionGroup(e,t,r,i){$()}Or(e,t){return C.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new aC(this)}getSize(e){return C.resolve(this.size)}}class aC extends my{constructor(e){super(),this.cr=e}applyChanges(e){const t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),C.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class cC{constructor(e){this.persistence=e,this.Nr=new jn(t=>pr(t),Hs),this.lastRemoteSnapshotVersion=W.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Ql,this.targetCount=0,this.kr=yr.Bn()}forEachTarget(e,t){return this.Nr.forEach((r,i)=>t(i)),C.resolve()}getLastRemoteSnapshotVersion(e){return C.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return C.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),C.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Lr&&(this.Lr=t),C.resolve()}Kn(e){this.Nr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.kr=new yr(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,C.resolve()}updateTargetData(e,t){return this.Kn(t),C.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,C.resolve()}removeTargets(e,t,r){let i=0;const s=[];return this.Nr.forEach((o,a)=>{a.sequenceNumber<=t&&r.get(a.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),C.waitFor(s).next(()=>i)}getTargetCount(e){return C.resolve(this.targetCount)}getTargetData(e,t){const r=this.Nr.get(t)||null;return C.resolve(r)}addMatchingKeys(e,t,r){return this.Br.Rr(t,r),C.resolve()}removeMatchingKeys(e,t,r){this.Br.mr(t,r);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),C.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),C.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Br.yr(t);return C.resolve(r)}containsKey(e,t){return C.resolve(this.Br.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class vy{constructor(e,t){this.qr={},this.overlays={},this.Qr=new mt(0),this.Kr=!1,this.Kr=!0,this.$r=new iC,this.referenceDelegate=e(this),this.Ur=new cC(this),this.indexManager=new W0,this.remoteDocumentCache=function(i){return new oC(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new cy(t),this.Gr=new nC(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new rC,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.qr[e.toKey()];return r||(r=new sC(t,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,r){D("MemoryPersistence","Starting transaction:",e);const i=new uC(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,t){return C.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,t)))}}class uC extends gg{constructor(e){super(),this.currentSequenceNumber=e}}class uc{constructor(e){this.persistence=e,this.Jr=new Ql,this.Yr=null}static Zr(e){return new uc(e)}get Xr(){if(this.Yr)return this.Yr;throw $()}addReference(e,t,r){return this.Jr.addReference(r,t),this.Xr.delete(r.toString()),C.resolve()}removeReference(e,t,r){return this.Jr.removeReference(r,t),this.Xr.add(r.toString()),C.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),C.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,t))}zr(){this.Yr=new Set}jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return C.forEach(this.Xr,r=>{const i=F.fromPath(r);return this.ei(e,i).next(s=>{s||t.removeEntry(i,W.min())})}).next(()=>(this.Yr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ei(e,t).next(r=>{r?this.Xr.delete(t.toString()):this.Xr.add(t.toString())})}Wr(e){return 0}ei(e,t){return C.or([()=>C.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}/**
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
 */class lC{constructor(e){this.serializer=e}O(e,t,r,i){const s=new Xa("createOrUpgrade",t);r<1&&i>=1&&(function(u){u.createObjectStore("owner")}(e),function(u){u.createObjectStore("mutationQueues",{keyPath:"userId"}),u.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Yf,{unique:!0}),u.createObjectStore("documentMutations")}(e),Mp(e),function(u){u.createObjectStore("remoteDocuments")}(e));let o=C.resolve();return r<3&&i>=3&&(r!==0&&(function(u){u.deleteObjectStore("targetDocuments"),u.deleteObjectStore("targets"),u.deleteObjectStore("targetGlobal")}(e),Mp(e)),o=o.next(()=>function(u){const l=u.store("targetGlobal"),d={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:W.min().toTimestamp(),targetCount:0};return l.put("targetGlobalKey",d)}(s))),r<4&&i>=4&&(r!==0&&(o=o.next(()=>function(u,l){return l.store("mutations").U().next(d=>{u.deleteObjectStore("mutations"),u.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Yf,{unique:!0});const f=l.store("mutations"),_=d.map(y=>f.put(y));return C.waitFor(_)})}(e,s))),o=o.next(()=>{(function(u){u.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&i>=5&&(o=o.next(()=>this.ni(s))),r<6&&i>=6&&(o=o.next(()=>(function(u){u.createObjectStore("remoteDocumentGlobal")}(e),this.ri(s)))),r<7&&i>=7&&(o=o.next(()=>this.ii(s))),r<8&&i>=8&&(o=o.next(()=>this.si(e,s))),r<9&&i>=9&&(o=o.next(()=>{(function(u){u.objectStoreNames.contains("remoteDocumentChanges")&&u.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&i>=10&&(o=o.next(()=>this.oi(s))),r<11&&i>=11&&(o=o.next(()=>{(function(u){u.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(u){u.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&i>=12&&(o=o.next(()=>{(function(u){const l=u.createObjectStore("documentOverlays",{keyPath:LR});l.createIndex("collectionPathOverlayIndex",MR,{unique:!1}),l.createIndex("collectionGroupOverlayIndex",FR,{unique:!1})})(e)})),r<13&&i>=13&&(o=o.next(()=>function(u){const l=u.createObjectStore("remoteDocumentsV14",{keyPath:RR});l.createIndex("documentKeyIndex",CR),l.createIndex("collectionGroupIndex",bR)}(e)).next(()=>this._i(e,s)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&i>=14&&(o=o.next(()=>this.ai(e,s))),r<15&&i>=15&&(o=o.next(()=>function(u){u.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),u.createObjectStore("indexState",{keyPath:DR}).createIndex("sequenceNumberIndex",OR,{unique:!1}),u.createObjectStore("indexEntries",{keyPath:xR}).createIndex("documentKeyIndex",VR,{unique:!1})}(e))),r<16&&i>=16&&(o=o.next(()=>{t.objectStore("indexState").clear()}).next(()=>{t.objectStore("indexEntries").clear()})),r<17&&i>=17&&(o=o.next(()=>{(function(u){u.createObjectStore("globals",{keyPath:"name"})})(e)})),o}ri(e){let t=0;return e.store("remoteDocuments").J((r,i)=>{t+=wa(i)}).next(()=>{const r={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}ni(e){const t=e.store("mutationQueues"),r=e.store("mutations");return t.U().next(i=>C.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return r.U("userMutationsIndex",o).next(a=>C.forEach(a,u=>{j(u.userId===s.userId);const l=er(this.serializer,u);return fy(e,s.userId,l).next(()=>{})}))}))}ii(e){const t=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(i=>{const s=[];return r.J((o,a)=>{const u=new ue(o),l=function(f){return[0,nt(f)]}(u);s.push(t.get(l).next(d=>d?C.resolve():(f=>t.put({targetId:0,path:nt(f),sequenceNumber:i.highestListenSequenceNumber}))(u)))}).next(()=>C.waitFor(s))})}si(e,t){e.createObjectStore("collectionParents",{keyPath:NR});const r=t.store("collectionParents"),i=new Hl,s=o=>{if(i.add(o)){const a=o.lastSegment(),u=o.popLast();return r.put({collectionId:a,parent:nt(u)})}};return t.store("remoteDocuments").J({H:!0},(o,a)=>{const u=new ue(o);return s(u.popLast())}).next(()=>t.store("documentMutations").J({H:!0},([o,a,u],l)=>{const d=Dt(a);return s(d.popLast())}))}oi(e){const t=e.store("targets");return t.J((r,i)=>{const s=ss(i),o=uy(this.serializer,s);return t.put(o)})}_i(e,t){const r=t.store("remoteDocuments"),i=[];return r.J((s,o)=>{const a=t.store("remoteDocumentsV14"),u=function(f){return f.document?new F(ue.fromString(f.document.name).popFirst(5)):f.noDocument?F.fromSegments(f.noDocument.path):f.unknownDocument?F.fromSegments(f.unknownDocument.path):$()}(o).path.toArray(),l={prefixPath:u.slice(0,u.length-2),collectionGroup:u[u.length-2],documentId:u[u.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(a.put(l))}).next(()=>C.waitFor(i))}ai(e,t){const r=t.store("mutations"),i=gy(this.serializer),s=new vy(uc.Zr,this.serializer.ct);return r.U().next(o=>{const a=new Map;return o.forEach(u=>{var l;let d=(l=a.get(u.userId))!==null&&l!==void 0?l:ne();er(this.serializer,u).keys().forEach(f=>d=d.add(f)),a.set(u.userId,d)}),C.forEach(a,(u,l)=>{const d=new et(l),f=ac.lt(this.serializer,d),_=s.getIndexManager(d),y=cc.lt(d,this.serializer,_,s.referenceDelegate);return new yy(i,y,f,_).recalculateAndSaveOverlaysForDocumentKeys(new Fu(t,mt.oe),u).next()})})}}function Mp(n){n.createObjectStore("targetDocuments",{keyPath:PR}).createIndex("documentTargetsIndex",kR,{unique:!0}),n.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",SR,{unique:!0}),n.createObjectStore("targetGlobal")}const uu="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class Yl{constructor(e,t,r,i,s,o,a,u,l,d,f=17){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=r,this.ui=s,this.window=o,this.document=a,this.ci=l,this.li=d,this.hi=f,this.Qr=null,this.Kr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Pi=null,this.inForeground=!1,this.Ii=null,this.Ti=null,this.Ei=Number.NEGATIVE_INFINITY,this.di=_=>Promise.resolve(),!Yl.D())throw new V(N.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new X0(this,i),this.Ai=t+"main",this.serializer=new cy(u),this.Ri=new kn(this.Ai,this.hi,new lC(this.serializer)),this.$r=new U0,this.Ur=new K0(this.referenceDelegate,this.serializer),this.remoteDocumentCache=gy(this.serializer),this.Gr=new F0,this.window&&this.window.localStorage?this.Vi=this.window.localStorage:(this.Vi=null,d===!1&&tt("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.mi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new V(N.FAILED_PRECONDITION,uu);return this.fi(),this.gi(),this.pi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Ur.getHighestSequenceNumber(e))}).then(e=>{this.Qr=new mt(e,this.ci)}).then(()=>{this.Kr=!0}).catch(e=>(this.Ri&&this.Ri.close(),Promise.reject(e)))}yi(e){return this.di=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ri.L(async t=>{t.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.ui.enqueueAndForget(async()=>{this.started&&await this.mi()}))}mi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>Lo(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.wi(e).next(t=>{t||(this.isPrimary=!1,this.ui.enqueueRetryable(()=>this.di(!1)))})}).next(()=>this.Si(e)).next(t=>this.isPrimary&&!t?this.bi(e).next(()=>!1):!!t&&this.Di(e).next(()=>!0))).catch(e=>{if($n(e))return D("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return D("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.ui.enqueueRetryable(()=>this.di(e)),this.isPrimary=e})}wi(e){return Qi(e).get("owner").next(t=>C.resolve(this.vi(t)))}Ci(e){return Lo(e).delete(this.clientId)}async Fi(){if(this.isPrimary&&!this.Mi(this.Ei,18e5)){this.Ei=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const r=xe(t,"clientMetadata");return r.U().next(i=>{const s=this.xi(i,18e5),o=i.filter(a=>s.indexOf(a)===-1);return C.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.Vi)for(const t of e)this.Vi.removeItem(this.Oi(t.clientId))}}pi(){this.Ti=this.ui.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.mi().then(()=>this.Fi()).then(()=>this.pi()))}vi(e){return!!e&&e.ownerId===this.clientId}Si(e){return this.li?C.resolve(!0):Qi(e).get("owner").next(t=>{if(t!==null&&this.Mi(t.leaseTimestampMs,5e3)&&!this.Ni(t.ownerId)){if(this.vi(t)&&this.networkEnabled)return!0;if(!this.vi(t)){if(!t.allowTabSynchronization)throw new V(N.FAILED_PRECONDITION,uu);return!1}}return!(!this.networkEnabled||!this.inForeground)||Lo(e).U().next(r=>this.xi(r,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,a=this.networkEnabled===i.networkEnabled;if(s||o&&a)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&D("IndexedDbPersistence",`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.Kr=!1,this.Li(),this.Ti&&(this.Ti.cancel(),this.Ti=null),this.Bi(),this.ki(),await this.Ri.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const t=new Fu(e,mt.oe);return this.bi(t).next(()=>this.Ci(t))}),this.Ri.close(),this.qi()}xi(e,t){return e.filter(r=>this.Mi(r.updateTimeMs,t)&&!this.Ni(r.clientId))}Qi(){return this.runTransaction("getActiveClients","readonly",e=>Lo(e).U().next(t=>this.xi(t,18e5).map(r=>r.clientId)))}get started(){return this.Kr}getGlobalsCache(){return this.$r}getMutationQueue(e,t){return cc.lt(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new z0(e,this.serializer.ct.databaseId)}getDocumentOverlayCache(e){return ac.lt(this.serializer,e)}getBundleCache(){return this.Gr}runTransaction(e,t,r){D("IndexedDbPersistence","Starting transaction:",e);const i=t==="readonly"?"readonly":"readwrite",s=function(u){return u===17?qR:u===16?BR:u===15?Vl:u===14?Tg:u===13?Eg:u===12?UR:u===11?Ig:void $()}(this.hi);let o;return this.Ri.runTransaction(e,i,s,a=>(o=new Fu(a,this.Qr?this.Qr.next():mt.oe),t==="readwrite-primary"?this.wi(o).next(u=>!!u||this.Si(o)).next(u=>{if(!u)throw tt(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.ui.enqueueRetryable(()=>this.di(!1)),new V(N.FAILED_PRECONDITION,mg);return r(o)}).next(u=>this.Di(o).next(()=>u)):this.Ki(o).next(()=>r(o)))).then(a=>(o.raiseOnCommittedEvent(),a))}Ki(e){return Qi(e).get("owner").next(t=>{if(t!==null&&this.Mi(t.leaseTimestampMs,5e3)&&!this.Ni(t.ownerId)&&!this.vi(t)&&!(this.li||this.allowTabSynchronization&&t.allowTabSynchronization))throw new V(N.FAILED_PRECONDITION,uu)})}Di(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Qi(e).put("owner",t)}static D(){return kn.D()}bi(e){const t=Qi(e);return t.get("owner").next(r=>this.vi(r)?(D("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):C.resolve())}Mi(e,t){const r=Date.now();return!(e<r-t)&&(!(e>r)||(tt(`Detected an update time that is in the future: ${e} > ${r}`),!1))}fi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Ii=()=>{this.ui.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.mi()))},this.document.addEventListener("visibilitychange",this.Ii),this.inForeground=this.document.visibilityState==="visible")}Bi(){this.Ii&&(this.document.removeEventListener("visibilitychange",this.Ii),this.Ii=null)}gi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Pi=()=>{this.Li();const t=/(?:Version|Mobile)\/1[456]/;vm()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.ui.enterRestrictedMode(!0),this.ui.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Pi))}ki(){this.Pi&&(this.window.removeEventListener("pagehide",this.Pi),this.Pi=null)}Ni(e){var t;try{const r=((t=this.Vi)===null||t===void 0?void 0:t.getItem(this.Oi(e)))!==null;return D("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return tt("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}Li(){if(this.Vi)try{this.Vi.setItem(this.Oi(this.clientId),String(Date.now()))}catch(e){tt("Failed to set zombie client id.",e)}}qi(){if(this.Vi)try{this.Vi.removeItem(this.Oi(this.clientId))}catch{}}Oi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Qi(n){return xe(n,"owner")}function Lo(n){return xe(n,"clientMetadata")}function hC(n,e){let t=n.projectId;return n.isDefaultDatabase||(t+="."+n.database),"firestore/"+e+"/"+t+"/"}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Jl{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.$i=r,this.Ui=i}static Wi(e,t){let r=ne(),i=ne();for(const s of t.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Jl(e,t.fromCache,r,i)}}/**
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
 */class dC{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Iy{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return vm()?8:yg(he())>0?6:4}()}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,r,i){const s={result:null};return this.Yi(e,t).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,t,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new dC;return this.Xi(e,t,o).next(a=>{if(s.result=a,this.zi)return this.es(e,t,o,a.size)})}).next(()=>s.result)}es(e,t,r,i){return r.documentReadCount<this.ji?(qr()<=Z.DEBUG&&D("QueryEngine","SDK will not create cache indexes for query:",$r(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),C.resolve()):(qr()<=Z.DEBUG&&D("QueryEngine","Query:",$r(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(qr()<=Z.DEBUG&&D("QueryEngine","The SDK decides to create cache indexes for query:",$r(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,vt(t))):C.resolve())}Yi(e,t){if(up(t))return C.resolve(null);let r=vt(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=ya(t,null,"F"),r=vt(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ne(...s);return this.Ji.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(u=>{const l=this.ts(t,a);return this.ns(t,l,o,u.readTime)?this.Yi(e,ya(t,null,"F")):this.rs(e,l,t,u)}))})))}Zi(e,t,r,i){return up(t)||i.isEqual(W.min())?C.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(t,s);return this.ns(t,o,r,i)?C.resolve(null):(qr()<=Z.DEBUG&&D("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),$r(t)),this.rs(e,o,t,gR(i,-1)).next(a=>a))})}ts(e,t){let r=new pe(Mg(e));return t.forEach((i,s)=>{Ys(e,s)&&(r=r.add(s))}),r}ns(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,t,r){return qr()<=Z.DEBUG&&D("QueryEngine","Using full collection scan to execute query:",$r(t)),this.Ji.getDocumentsMatchingQuery(e,t,pt.min(),r)}rs(e,t,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(t.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class fC{constructor(e,t,r,i){this.persistence=e,this.ss=t,this.serializer=i,this.os=new ke(J),this._s=new jn(s=>pr(s),Hs),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new yy(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.os))}}function Ey(n,e,t,r){return new fC(n,e,t,r)}async function Ty(n,e){const t=Q(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,t.ls(e),t.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let u=ne();for(const l of i){o.push(l.batchId);for(const d of l.mutations)u=u.add(d.key)}for(const l of s){a.push(l.batchId);for(const d of l.mutations)u=u.add(d.key)}return t.localDocuments.getDocuments(r,u).next(l=>({hs:l,removedBatchIds:o,addedBatchIds:a}))})})}function pC(n,e){const t=Q(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=t.cs.newChangeBuffer({trackRemovals:!0});return function(a,u,l,d){const f=l.batch,_=f.keys();let y=C.resolve();return _.forEach(A=>{y=y.next(()=>d.getEntry(u,A)).next(P=>{const S=l.docVersions.get(A);j(S!==null),P.version.compareTo(S)<0&&(f.applyToRemoteDocument(P,l),P.isValidDocument()&&(P.setReadTime(l.commitVersion),d.addEntry(P)))})}),y.next(()=>a.mutationQueue.removeMutationBatch(u,f))}(t,r,e,s).next(()=>s.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let u=ne();for(let l=0;l<a.mutationResults.length;++l)a.mutationResults[l].transformResults.length>0&&(u=u.add(a.batch.mutations[l].key));return u}(e))).next(()=>t.localDocuments.getDocuments(r,i))})}function wy(n){const e=Q(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ur.getLastRemoteSnapshotVersion(t))}function _C(n,e){const t=Q(n),r=e.snapshotVersion;let i=t.os;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=t.cs.newChangeBuffer({trackRemovals:!0});i=t.os;const a=[];e.targetChanges.forEach((d,f)=>{const _=i.get(f);if(!_)return;a.push(t.Ur.removeMatchingKeys(s,d.removedDocuments,f).next(()=>t.Ur.addMatchingKeys(s,d.addedDocuments,f)));let y=_.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(f)!==null?y=y.withResumeToken(Oe.EMPTY_BYTE_STRING,W.min()).withLastLimboFreeSnapshotVersion(W.min()):d.resumeToken.approximateByteSize()>0&&(y=y.withResumeToken(d.resumeToken,r)),i=i.insert(f,y),function(P,S,U){return P.resumeToken.approximateByteSize()===0||S.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=3e8?!0:U.addedDocuments.size+U.modifiedDocuments.size+U.removedDocuments.size>0}(_,y,d)&&a.push(t.Ur.updateTargetData(s,y))});let u=ht(),l=ne();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&a.push(t.persistence.referenceDelegate.updateLimboDocument(s,d))}),a.push(mC(s,o,e.documentUpdates).next(d=>{u=d.Ps,l=d.Is})),!r.isEqual(W.min())){const d=t.Ur.getLastRemoteSnapshotVersion(s).next(f=>t.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(d)}return C.waitFor(a).next(()=>o.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,u,l)).next(()=>u)}).then(s=>(t.os=i,s))}function mC(n,e,t){let r=ne(),i=ne();return t.forEach(s=>r=r.add(s)),e.getEntries(n,r).next(s=>{let o=ht();return t.forEach((a,u)=>{const l=s.get(a);u.isFoundDocument()!==l.isFoundDocument()&&(i=i.add(a)),u.isNoDocument()&&u.version.isEqual(W.min())?(e.removeEntry(a,u.readTime),o=o.insert(a,u)):!l.isValidDocument()||u.version.compareTo(l.version)>0||u.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(u),o=o.insert(a,u)):D("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",u.version)}),{Ps:o,Is:i}})}function gC(n,e){const t=Q(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function yC(n,e){const t=Q(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return t.Ur.getTargetData(r,e).next(s=>s?(i=s,C.resolve(i)):t.Ur.allocateTargetId(r).next(o=>(i=new Qt(e,o,"TargetPurposeListen",r.currentSequenceNumber),t.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=t.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.os=t.os.insert(r.targetId,r),t._s.set(e,r.targetId)),r})}async function Zu(n,e,t){const r=Q(n),i=r.os.get(e),s=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!$n(o))throw o;D("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function Fp(n,e,t){const r=Q(n);let i=W.min(),s=ne();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,l,d){const f=Q(u),_=f._s.get(d);return _!==void 0?C.resolve(f.os.get(_)):f.Ur.getTargetData(l,d)}(r,o,vt(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,a.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,t?i:W.min(),t?s:ne())).next(a=>(vC(r,r0(e),a),{documents:a,Ts:s})))}function vC(n,e,t){let r=n.us.get(e)||W.min();t.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),n.us.set(e,r)}class Up{constructor(){this.activeTargetIds=u0()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Ay{constructor(){this.so=new Up,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,r){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Up,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class IC{_o(e){}shutdown(){}}/**
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
 */class Bp{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){D("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){D("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Mo=null;function lu(){return Mo===null?Mo=function(){return 268435456+Math.round(2147483648*Math.random())}():Mo++,"0x"+Mo.toString(16)}/**
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
 */const EC={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
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
 */class TC{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const ze="WebChannelConnection";class wC extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+t.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(t,r,i,s,o){const a=lu(),u=this.xo(t,r.toUriEncodedString());D("RestConnection",`Sending RPC '${t}' ${a}:`,u,i);const l={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(l,s,o),this.No(t,u,l,i).then(d=>(D("RestConnection",`Received RPC '${t}' ${a}: `,d),d),d=>{throw ri("RestConnection",`RPC '${t}' ${a} failed with error: `,d,"url: ",u,"request:",i),d})}Lo(t,r,i,s,o,a){return this.Mo(t,r,i,s,o)}Oo(t,r,i){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ii}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>t[o]=s),i&&i.headers.forEach((s,o)=>t[o]=s)}xo(t,r){const i=EC[t];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,r,i){const s=lu();return new Promise((o,a)=>{const u=new cg;u.setWithCredentials(!0),u.listenOnce(ug.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Ko.NO_ERROR:const d=u.getResponseJson();D(ze,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(d)),o(d);break;case Ko.TIMEOUT:D(ze,`RPC '${e}' ${s} timed out`),a(new V(N.DEADLINE_EXCEEDED,"Request time out"));break;case Ko.HTTP_ERROR:const f=u.getStatus();if(D(ze,`RPC '${e}' ${s} failed with status:`,f,"response text:",u.getResponseText()),f>0){let _=u.getResponseJson();Array.isArray(_)&&(_=_[0]);const y=_==null?void 0:_.error;if(y&&y.status&&y.message){const A=function(S){const U=S.toLowerCase().replace(/_/g,"-");return Object.values(N).indexOf(U)>=0?U:N.UNKNOWN}(y.status);a(new V(A,y.message))}else a(new V(N.UNKNOWN,"Server responded with status "+u.getStatus()))}else a(new V(N.UNAVAILABLE,"Connection failed."));break;default:$()}}finally{D(ze,`RPC '${e}' ${s} completed.`)}});const l=JSON.stringify(i);D(ze,`RPC '${e}' ${s} sending request:`,i),u.send(t,"POST",l,r,15)})}Bo(e,t,r){const i=lu(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=dg(),a=hg(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(u.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,t,r),u.encodeInitMessageHeaders=!0;const d=s.join("");D(ze,`Creating RPC '${e}' stream ${i}: ${d}`,u);const f=o.createWebChannel(d,u);let _=!1,y=!1;const A=new TC({Io:S=>{y?D(ze,`Not sending because RPC '${e}' stream ${i} is closed:`,S):(_||(D(ze,`Opening RPC '${e}' stream ${i} transport.`),f.open(),_=!0),D(ze,`RPC '${e}' stream ${i} sending:`,S),f.send(S))},To:()=>f.close()}),P=(S,U,q)=>{S.listen(U,B=>{try{q(B)}catch(G){setTimeout(()=>{throw G},0)}})};return P(f,ns.EventType.OPEN,()=>{y||(D(ze,`RPC '${e}' stream ${i} transport opened.`),A.yo())}),P(f,ns.EventType.CLOSE,()=>{y||(y=!0,D(ze,`RPC '${e}' stream ${i} transport closed`),A.So())}),P(f,ns.EventType.ERROR,S=>{y||(y=!0,ri(ze,`RPC '${e}' stream ${i} transport errored:`,S),A.So(new V(N.UNAVAILABLE,"The operation could not be completed")))}),P(f,ns.EventType.MESSAGE,S=>{var U;if(!y){const q=S.data[0];j(!!q);const B=q,G=B.error||((U=B[0])===null||U===void 0?void 0:U.error);if(G){D(ze,`RPC '${e}' stream ${i} received error:`,G);const se=G.status;let Y=function(v){const T=Ne[v];if(T!==void 0)return Qg(T)}(se),E=G.message;Y===void 0&&(Y=N.INTERNAL,E="Unknown error status: "+se+" with message "+G.message),y=!0,A.So(new V(Y,E)),f.close()}else D(ze,`RPC '${e}' stream ${i} received:`,q),A.bo(q)}}),P(a,lg.STAT_EVENT,S=>{S.stat===Lu.PROXY?D(ze,`RPC '${e}' stream ${i} detected buffering proxy`):S.stat===Lu.NOPROXY&&D(ze,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{A.wo()},0),A}}/**
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
 *//**
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
 */function AC(){return typeof window<"u"?window:null}function ea(){return typeof document<"u"?document:null}/**
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
 */function lc(n){return new C0(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Ry{constructor(e,t,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=t,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const t=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,t-r);i>0&&D("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Cy{constructor(e,t,r,i,s,o,a,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Ry(e,t)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():t&&t.code===N.RESOURCE_EXHAUSTED?(tt(t.toString()),tt("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===N.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===t&&this.P_(r,i)},r=>{e(()=>{const i=new V(N.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,t){const r=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return D("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget(()=>this.Yo===e?t():(D("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class RC extends Cy{constructor(e,t,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,o),this.serializer=s}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const t=P0(this.serializer,e),r=function(s){if(!("targetChange"in s))return W.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?W.min():o.readTime?rt(o.readTime):W.min()}(e);return this.listener.d_(t,r)}A_(e){const t={};t.database=Hu(this.serializer),t.addTarget=function(s,o){let a;const u=o.target;if(a=ma(u)?{documents:ry(s,u)}:{query:zl(s,u)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=Xg(s,o.resumeToken);const l=zu(s,o.expectedCount);l!==null&&(a.expectedCount=l)}else if(o.snapshotVersion.compareTo(W.min())>0){a.readTime=ui(s,o.snapshotVersion.toTimestamp());const l=zu(s,o.expectedCount);l!==null&&(a.expectedCount=l)}return a}(this.serializer,e);const r=D0(this.serializer,e);r&&(t.labels=r),this.a_(t)}R_(e){const t={};t.database=Hu(this.serializer),t.removeTarget=e,this.a_(t)}}class CC extends Cy{constructor(e,t,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,t){return this.connection.Bo("Write",e,t)}E_(e){return j(!!e.streamToken),this.lastStreamToken=e.streamToken,j(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){j(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const t=k0(e.writeResults,e.commitTime),r=rt(e.commitTime);return this.listener.g_(r,t)}p_(){const e={};e.database=Hu(this.serializer),this.a_(e)}m_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>Ia(this.serializer,r))};this.a_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class bC extends class{}{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new V(N.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,Ku(t,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new V(N.UNKNOWN,s.toString())})}Lo(e,t,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Lo(e,Ku(t,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new V(N.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class SC{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(tt(t),this.D_=!1):D("OnlineStateTracker",t)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class PC{constructor(e,t,r,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{br(this)&&(D("RemoteStore","Restarting streams for network reachability change."),await async function(u){const l=Q(u);l.L_.add(4),await Xs(l),l.q_.set("Unknown"),l.L_.delete(4),await hc(l)}(this))})}),this.q_=new SC(r,i)}}async function hc(n){if(br(n))for(const e of n.B_)await e(!0)}async function Xs(n){for(const e of n.B_)await e(!1)}function by(n,e){const t=Q(n);t.N_.has(e.targetId)||(t.N_.set(e.targetId,e),th(t)?eh(t):Ti(t).r_()&&Zl(t,e))}function Xl(n,e){const t=Q(n),r=Ti(t);t.N_.delete(e),r.r_()&&Sy(t,e),t.N_.size===0&&(r.r_()?r.o_():br(t)&&t.q_.set("Unknown"))}function Zl(n,e){if(n.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(W.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Ti(n).A_(e)}function Sy(n,e){n.Q_.xe(e),Ti(n).R_(e)}function eh(n){n.Q_=new T0({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>n.N_.get(e)||null,tt:()=>n.datastore.serializer.databaseId}),Ti(n).start(),n.q_.v_()}function th(n){return br(n)&&!Ti(n).n_()&&n.N_.size>0}function br(n){return Q(n).L_.size===0}function Py(n){n.Q_=void 0}async function kC(n){n.q_.set("Online")}async function NC(n){n.N_.forEach((e,t)=>{Zl(n,e)})}async function DC(n,e){Py(n),th(n)?(n.q_.M_(e),eh(n)):n.q_.set("Unknown")}async function OC(n,e,t){if(n.q_.set("Online"),e instanceof Jg&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.N_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.N_.delete(a),i.Q_.removeTarget(a))}(n,e)}catch(r){D("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Aa(n,r)}else if(e instanceof Zo?n.Q_.Ke(e):e instanceof Yg?n.Q_.He(e):n.Q_.We(e),!t.isEqual(W.min()))try{const r=await wy(n.localStore);t.compareTo(r)>=0&&await function(s,o){const a=s.Q_.rt(o);return a.targetChanges.forEach((u,l)=>{if(u.resumeToken.approximateByteSize()>0){const d=s.N_.get(l);d&&s.N_.set(l,d.withResumeToken(u.resumeToken,o))}}),a.targetMismatches.forEach((u,l)=>{const d=s.N_.get(u);if(!d)return;s.N_.set(u,d.withResumeToken(Oe.EMPTY_BYTE_STRING,d.snapshotVersion)),Sy(s,u);const f=new Qt(d.target,u,l,d.sequenceNumber);Zl(s,f)}),s.remoteSyncer.applyRemoteEvent(a)}(n,t)}catch(r){D("RemoteStore","Failed to raise snapshot:",r),await Aa(n,r)}}async function Aa(n,e,t){if(!$n(e))throw e;n.L_.add(1),await Xs(n),n.q_.set("Offline"),t||(t=()=>wy(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{D("RemoteStore","Retrying IndexedDB access"),await t(),n.L_.delete(1),await hc(n)})}function ky(n,e){return e().catch(t=>Aa(n,t,e))}async function Zs(n){const e=Q(n),t=Mn(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;xC(e);)try{const i=await gC(e.localStore,r);if(i===null){e.O_.length===0&&t.o_();break}r=i.batchId,VC(e,i)}catch(i){await Aa(e,i)}Ny(e)&&Dy(e)}function xC(n){return br(n)&&n.O_.length<10}function VC(n,e){n.O_.push(e);const t=Mn(n);t.r_()&&t.V_&&t.m_(e.mutations)}function Ny(n){return br(n)&&!Mn(n).n_()&&n.O_.length>0}function Dy(n){Mn(n).start()}async function LC(n){Mn(n).p_()}async function MC(n){const e=Mn(n);for(const t of n.O_)e.m_(t.mutations)}async function FC(n,e,t){const r=n.O_.shift(),i=$l.from(r,e,t);await ky(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await Zs(n)}async function UC(n,e){e&&Mn(n).V_&&await async function(r,i){if(function(o){return v0(o)&&o!==N.ABORTED}(i.code)){const s=r.O_.shift();Mn(r).s_(),await ky(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Zs(r)}}(n,e),Ny(n)&&Dy(n)}async function qp(n,e){const t=Q(n);t.asyncQueue.verifyOperationInProgress(),D("RemoteStore","RemoteStore received new credentials");const r=br(t);t.L_.add(3),await Xs(t),r&&t.q_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.L_.delete(3),await hc(t)}async function BC(n,e){const t=Q(n);e?(t.L_.delete(2),await hc(t)):e||(t.L_.add(2),await Xs(t),t.q_.set("Unknown"))}function Ti(n){return n.K_||(n.K_=function(t,r,i){const s=Q(t);return s.w_(),new RC(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Eo:kC.bind(null,n),Ro:NC.bind(null,n),mo:DC.bind(null,n),d_:OC.bind(null,n)}),n.B_.push(async e=>{e?(n.K_.s_(),th(n)?eh(n):n.q_.set("Unknown")):(await n.K_.stop(),Py(n))})),n.K_}function Mn(n){return n.U_||(n.U_=function(t,r,i){const s=Q(t);return s.w_(),new CC(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:LC.bind(null,n),mo:UC.bind(null,n),f_:MC.bind(null,n),g_:FC.bind(null,n)}),n.B_.push(async e=>{e?(n.U_.s_(),await Zs(n)):(await n.U_.stop(),n.O_.length>0&&(D("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class nh{constructor(e,t,r,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Rt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,s){const o=Date.now()+r,a=new nh(e,t,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new V(N.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function rh(n,e){if(tt("AsyncQueue",`${e}: ${n}`),$n(n))return new V(N.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Hr{constructor(e){this.comparator=e?(t,r)=>e(t,r)||F.comparator(t.key,r.key):(t,r)=>F.comparator(t.key,r.key),this.keyedMap=rs(),this.sortedSet=new ke(this.comparator)}static emptySet(e){return new Hr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Hr)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Hr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class $p{constructor(){this.W_=new ke(F.comparator)}track(e){const t=e.doc.key,r=this.W_.get(t);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(t,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(t):e.type===1&&r.type===2?this.W_=this.W_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):$():this.W_=this.W_.insert(t,e)}G_(){const e=[];return this.W_.inorderTraversal((t,r)=>{e.push(r)}),e}}class li{constructor(e,t,r,i,s,o,a,u,l){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=l}static fromInitialDocuments(e,t,r,i,s){const o=[];return t.forEach(a=>{o.push({type:0,doc:a})}),new li(e,t,Hr.emptySet(t),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&nc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class qC{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class $C{constructor(){this.queries=jp(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(t,r){const i=Q(t),s=i.queries;i.queries=jp(),s.forEach((o,a)=>{for(const u of a.j_)u.onError(r)})})(this,new V(N.ABORTED,"Firestore shutting down"))}}function jp(){return new jn(n=>Lg(n),nc)}async function ih(n,e){const t=Q(n);let r=3;const i=e.query;let s=t.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new qC,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await t.onListen(i,!0);break;case 1:s.z_=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(o){const a=rh(o,`Initialization of query '${$r(e.query)}' failed`);return void e.onError(a)}t.queries.set(i,s),s.j_.push(e),e.Z_(t.onlineState),s.z_&&e.X_(s.z_)&&oh(t)}async function sh(n,e){const t=Q(n),r=e.query;let i=3;const s=t.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function jC(n,e){const t=Q(n);let r=!1;for(const i of e){const s=i.query,o=t.queries.get(s);if(o){for(const a of o.j_)a.X_(i)&&(r=!0);o.z_=i}}r&&oh(t)}function GC(n,e,t){const r=Q(n),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(t);r.queries.delete(e)}function oh(n){n.Y_.forEach(e=>{e.next()})}var el,Gp;(Gp=el||(el={})).ea="default",Gp.Cache="cache";class ah{constructor(e,t,r){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new li(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache||!this.J_())return!0;const r=t!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}oa(e){e=li.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==el.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Oy{constructor(e){this.key=e}}class xy{constructor(e){this.key=e}}class WC{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=ne(),this.mutatedKeys=ne(),this.Aa=Mg(e),this.Ra=new Hr(this.Aa)}get Va(){return this.Ta}ma(e,t){const r=t?t.fa:new $p,i=t?t.Ra:this.Ra;let s=t?t.mutatedKeys:this.mutatedKeys,o=i,a=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,l=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((d,f)=>{const _=i.get(d),y=Ys(this.query,f)?f:null,A=!!_&&this.mutatedKeys.has(_.key),P=!!y&&(y.hasLocalMutations||this.mutatedKeys.has(y.key)&&y.hasCommittedMutations);let S=!1;_&&y?_.data.isEqual(y.data)?A!==P&&(r.track({type:3,doc:y}),S=!0):this.ga(_,y)||(r.track({type:2,doc:y}),S=!0,(u&&this.Aa(y,u)>0||l&&this.Aa(y,l)<0)&&(a=!0)):!_&&y?(r.track({type:0,doc:y}),S=!0):_&&!y&&(r.track({type:1,doc:_}),S=!0,(u||l)&&(a=!0)),S&&(y?(o=o.add(y),s=P?s.add(d):s.delete(d)):(o=o.delete(d),s=s.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),s=s.delete(d.key),r.track({type:1,doc:d})}return{Ra:o,fa:r,ns:a,mutatedKeys:s}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((d,f)=>function(y,A){const P=S=>{switch(S){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return $()}};return P(y)-P(A)}(d.type,f.type)||this.Aa(d.doc,f.doc)),this.pa(r),i=i!=null&&i;const a=t&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,l=u!==this.Ea;return this.Ea=u,o.length!==0||l?{snapshot:new li(this.query,e.Ra,s,o,e.mutatedKeys,u===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:a}:{wa:a}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new $p,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(t=>this.Ta=this.Ta.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ta=this.Ta.delete(t)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=ne(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const t=[];return e.forEach(r=>{this.da.has(r)||t.push(new xy(r))}),this.da.forEach(r=>{e.has(r)||t.push(new Oy(r))}),t}ba(e){this.Ta=e.Ts,this.da=ne();const t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return li.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class zC{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class KC{constructor(e){this.key=e,this.va=!1}}class HC{constructor(e,t,r,i,s,o){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new jn(a=>Lg(a),nc),this.Ma=new Map,this.xa=new Set,this.Oa=new ke(F.comparator),this.Na=new Map,this.La=new Ql,this.Ba={},this.ka=new Map,this.qa=yr.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function QC(n,e,t=!0){const r=By(n);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await Vy(r,e,t,!0),i}async function YC(n,e){const t=By(n);await Vy(t,e,!0,!1)}async function Vy(n,e,t,r){const i=await yC(n.localStore,vt(e)),s=i.targetId,o=n.sharedClientState.addLocalQueryTarget(s,t);let a;return r&&(a=await JC(n,e,s,o==="current",i.resumeToken)),n.isPrimaryClient&&t&&by(n.remoteStore,i),a}async function JC(n,e,t,r,i){n.Ka=(f,_,y)=>async function(P,S,U,q){let B=S.view.ma(U);B.ns&&(B=await Fp(P.localStore,S.query,!1).then(({documents:E})=>S.view.ma(E,B)));const G=q&&q.targetChanges.get(S.targetId),se=q&&q.targetMismatches.get(S.targetId)!=null,Y=S.view.applyChanges(B,P.isPrimaryClient,G,se);return zp(P,S.targetId,Y.wa),Y.snapshot}(n,f,_,y);const s=await Fp(n.localStore,e,!0),o=new WC(e,s.Ts),a=o.ma(s.documents),u=Js.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),l=o.applyChanges(a,n.isPrimaryClient,u);zp(n,t,l.wa);const d=new zC(e,t,o);return n.Fa.set(e,d),n.Ma.has(t)?n.Ma.get(t).push(e):n.Ma.set(t,[e]),l.snapshot}async function XC(n,e,t){const r=Q(n),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!nc(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Zu(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),t&&Xl(r.remoteStore,i.targetId),tl(r,i.targetId)}).catch(Ar)):(tl(r,i.targetId),await Zu(r.localStore,i.targetId,!0))}async function ZC(n,e){const t=Q(n),r=t.Fa.get(e),i=t.Ma.get(r.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Xl(t.remoteStore,r.targetId))}async function eb(n,e,t){const r=qy(n);try{const i=await function(o,a){const u=Q(o),l=Ae.now(),d=a.reduce((y,A)=>y.add(A.key),ne());let f,_;return u.persistence.runTransaction("Locally write mutations","readwrite",y=>{let A=ht(),P=ne();return u.cs.getEntries(y,d).next(S=>{A=S,A.forEach((U,q)=>{q.isValidDocument()||(P=P.add(U))})}).next(()=>u.localDocuments.getOverlayedDocuments(y,A)).next(S=>{f=S;const U=[];for(const q of a){const B=m0(q,f.get(q.key).overlayedDocument);B!=null&&U.push(new hn(q.key,B,bg(B.value.mapValue),He.exists(!0)))}return u.mutationQueue.addMutationBatch(y,l,U,a)}).next(S=>{_=S;const U=S.applyToLocalDocumentSet(f,P);return u.documentOverlayCache.saveOverlays(y,S.batchId,U)})}).then(()=>({batchId:_.batchId,changes:Ug(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,u){let l=o.Ba[o.currentUser.toKey()];l||(l=new ke(J)),l=l.insert(a,u),o.Ba[o.currentUser.toKey()]=l}(r,i.batchId,t),await eo(r,i.changes),await Zs(r.remoteStore)}catch(i){const s=rh(i,"Failed to persist write");t.reject(s)}}async function Ly(n,e){const t=Q(n);try{const r=await _C(t.localStore,e);e.targetChanges.forEach((i,s)=>{const o=t.Na.get(s);o&&(j(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?j(o.va):i.removedDocuments.size>0&&(j(o.va),o.va=!1))}),await eo(t,r,e)}catch(r){await Ar(r)}}function Wp(n,e,t){const r=Q(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.Fa.forEach((s,o)=>{const a=o.view.Z_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const u=Q(o);u.onlineState=a;let l=!1;u.queries.forEach((d,f)=>{for(const _ of f.j_)_.Z_(a)&&(l=!0)}),l&&oh(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function tb(n,e,t){const r=Q(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new ke(F.comparator);o=o.insert(s,Ce.newNoDocument(s,W.min()));const a=ne().add(s),u=new oc(W.min(),new Map,new ke(J),o,a);await Ly(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(e),ch(r)}else await Zu(r.localStore,e,!1).then(()=>tl(r,e,t)).catch(Ar)}async function nb(n,e){const t=Q(n),r=e.batch.batchId;try{const i=await pC(t.localStore,e);Fy(t,r,null),My(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await eo(t,i)}catch(i){await Ar(i)}}async function rb(n,e,t){const r=Q(n);try{const i=await function(o,a){const u=Q(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let d;return u.mutationQueue.lookupMutationBatch(l,a).next(f=>(j(f!==null),d=f.keys(),u.mutationQueue.removeMutationBatch(l,f))).next(()=>u.mutationQueue.performConsistencyCheck(l)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(l,d,a)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,d)).next(()=>u.localDocuments.getDocuments(l,d))})}(r.localStore,e);Fy(r,e,t),My(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await eo(r,i)}catch(i){await Ar(i)}}function My(n,e){(n.ka.get(e)||[]).forEach(t=>{t.resolve()}),n.ka.delete(e)}function Fy(n,e,t){const r=Q(n);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function tl(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Ma.get(e))n.Fa.delete(r),t&&n.Ca.$a(r,t);n.Ma.delete(e),n.isPrimaryClient&&n.La.gr(e).forEach(r=>{n.La.containsKey(r)||Uy(n,r)})}function Uy(n,e){n.xa.delete(e.path.canonicalString());const t=n.Oa.get(e);t!==null&&(Xl(n.remoteStore,t),n.Oa=n.Oa.remove(e),n.Na.delete(t),ch(n))}function zp(n,e,t){for(const r of t)r instanceof Oy?(n.La.addReference(r.key,e),ib(n,r)):r instanceof xy?(D("SyncEngine","Document no longer in limbo: "+r.key),n.La.removeReference(r.key,e),n.La.containsKey(r.key)||Uy(n,r.key)):$()}function ib(n,e){const t=e.key,r=t.path.canonicalString();n.Oa.get(t)||n.xa.has(r)||(D("SyncEngine","New document in limbo: "+t),n.xa.add(r),ch(n))}function ch(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const e=n.xa.values().next().value;n.xa.delete(e);const t=new F(ue.fromString(e)),r=n.qa.next();n.Na.set(r,new KC(t)),n.Oa=n.Oa.insert(t,r),by(n.remoteStore,new Qt(vt(Qs(t.path)),r,"TargetPurposeLimboResolution",mt.oe))}}async function eo(n,e,t){const r=Q(n),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((a,u)=>{o.push(r.Ka(u,e,t).then(l=>{var d;if((l||t)&&r.isPrimaryClient){const f=l?!l.fromCache:(d=t==null?void 0:t.targetChanges.get(u.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(u.targetId,f?"current":"not-current")}if(l){i.push(l);const f=Jl.Wi(u.targetId,l);s.push(f)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(u,l){const d=Q(u);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>C.forEach(l,_=>C.forEach(_.$i,y=>d.persistence.referenceDelegate.addReference(f,_.targetId,y)).next(()=>C.forEach(_.Ui,y=>d.persistence.referenceDelegate.removeReference(f,_.targetId,y)))))}catch(f){if(!$n(f))throw f;D("LocalStore","Failed to update sequence numbers: "+f)}for(const f of l){const _=f.targetId;if(!f.fromCache){const y=d.os.get(_),A=y.snapshotVersion,P=y.withLastLimboFreeSnapshotVersion(A);d.os=d.os.insert(_,P)}}}(r.localStore,s))}async function sb(n,e){const t=Q(n);if(!t.currentUser.isEqual(e)){D("SyncEngine","User change. New user:",e.toKey());const r=await Ty(t.localStore,e);t.currentUser=e,function(s,o){s.ka.forEach(a=>{a.forEach(u=>{u.reject(new V(N.CANCELLED,o))})}),s.ka.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await eo(t,r.hs)}}function ob(n,e){const t=Q(n),r=t.Na.get(e);if(r&&r.va)return ne().add(r.key);{let i=ne();const s=t.Ma.get(e);if(!s)return i;for(const o of s){const a=t.Fa.get(o);i=i.unionWith(a.view.Va)}return i}}function By(n){const e=Q(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Ly.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=ob.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=tb.bind(null,e),e.Ca.d_=jC.bind(null,e.eventManager),e.Ca.$a=GC.bind(null,e.eventManager),e}function qy(n){const e=Q(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=nb.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=rb.bind(null,e),e}class Ds{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=lc(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,t){return null}Ha(e,t){return null}za(e){return Ey(this.persistence,new Iy,e.initialUser,this.serializer)}Ga(e){return new vy(uc.Zr,this.serializer)}Wa(e){return new Ay}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ds.provider={build:()=>new Ds};class $y extends Ds{constructor(e,t,r){super(),this.Ja=e,this.cacheSizeBytes=t,this.forceOwnership=r,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Ja.initialize(this,e),await qy(this.Ja.syncEngine),await Zs(this.Ja.remoteStore),await this.persistence.yi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}za(e){return Ey(this.persistence,new Iy,e.initialUser,this.serializer)}ja(e,t){const r=this.persistence.referenceDelegate.garbageCollector;return new Q0(r,e.asyncQueue,t)}Ha(e,t){const r=new ER(t,this.persistence);return new IR(e.asyncQueue,r)}Ga(e){const t=hC(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?st.withCacheSize(this.cacheSizeBytes):st.DEFAULT;return new Yl(this.synchronizeTabs,t,e.clientId,r,e.asyncQueue,AC(),ea(),this.serializer,this.sharedClientState,!!this.forceOwnership)}Wa(e){return new Ay}}class Os{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Wp(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=sb.bind(null,this.syncEngine),await BC(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new $C}()}createDatastore(e){const t=lc(e.databaseInfo.databaseId),r=function(s){return new wC(s)}(e.databaseInfo);return function(s,o,a,u){return new bC(s,o,a,u)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,i,s,o,a){return new PC(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,t=>Wp(this.syncEngine,t,0),function(){return Bp.D()?new Bp:new IC}())}createSyncEngine(e,t){return function(i,s,o,a,u,l,d){const f=new HC(i,s,o,a,u,l);return d&&(f.Qa=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(i){const s=Q(i);D("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await Xs(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Os.provider={build:()=>new Os};/**
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
 *//**
 * @license
 * Copyright 2017 Google LLC
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
 */class uh{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):tt("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class ab{constructor(e,t,r,i,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=et.UNAUTHENTICATED,this.clientId=fg.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{D("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(D("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Rt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=rh(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function hu(n,e){n.asyncQueue.verifyOperationInProgress(),D("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Ty(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Kp(n,e){n.asyncQueue.verifyOperationInProgress();const t=await cb(n);D("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>qp(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>qp(e.remoteStore,i)),n._onlineComponents=e}async function cb(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){D("FirestoreClient","Using user provided OfflineComponentProvider");try{await hu(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(i){return i.name==="FirebaseError"?i.code===N.FAILED_PRECONDITION||i.code===N.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(t))throw t;ri("Error using user provided cache. Falling back to memory cache: "+t),await hu(n,new Ds)}}else D("FirestoreClient","Using default OfflineComponentProvider"),await hu(n,new Ds);return n._offlineComponents}async function lh(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(D("FirestoreClient","Using user provided OnlineComponentProvider"),await Kp(n,n._uninitializedComponentsProvider._online)):(D("FirestoreClient","Using default OnlineComponentProvider"),await Kp(n,new Os))),n._onlineComponents}function ub(n){return lh(n).then(e=>e.syncEngine)}function lb(n){return lh(n).then(e=>e.datastore)}async function Ra(n){const e=await lh(n),t=e.eventManager;return t.onListen=QC.bind(null,e.syncEngine),t.onUnlisten=XC.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=YC.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=ZC.bind(null,e.syncEngine),t}function hb(n,e,t={}){const r=new Rt;return n.asyncQueue.enqueueAndForget(async()=>function(s,o,a,u,l){const d=new uh({next:_=>{d.Za(),o.enqueueAndForget(()=>sh(s,f));const y=_.docs.has(a);!y&&_.fromCache?l.reject(new V(N.UNAVAILABLE,"Failed to get document because the client is offline.")):y&&_.fromCache&&u&&u.source==="server"?l.reject(new V(N.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(_)},error:_=>l.reject(_)}),f=new ah(Qs(a.path),d,{includeMetadataChanges:!0,_a:!0});return ih(s,f)}(await Ra(n),n.asyncQueue,e,t,r)),r.promise}function db(n,e,t={}){const r=new Rt;return n.asyncQueue.enqueueAndForget(async()=>function(s,o,a,u,l){const d=new uh({next:_=>{d.Za(),o.enqueueAndForget(()=>sh(s,f)),_.fromCache&&u.source==="server"?l.reject(new V(N.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(_)},error:_=>l.reject(_)}),f=new ah(a,d,{includeMetadataChanges:!0,_a:!0});return ih(s,f)}(await Ra(n),n.asyncQueue,e,t,r)),r.promise}function fb(n,e,t){const r=new Rt;return n.asyncQueue.enqueueAndForget(async()=>{try{const i=await lb(n);r.resolve(async function(o,a,u){var l;const d=Q(o),{request:f,ut:_,parent:y}=N0(d.serializer,n0(a),u);d.connection.Fo||delete f.parent;const A=(await d.Lo("RunAggregationQuery",d.serializer.databaseId,y,f,1)).filter(S=>!!S.result);j(A.length===1);const P=(l=A[0].result)===null||l===void 0?void 0:l.aggregateFields;return Object.keys(P).reduce((S,U)=>(S[_[U]]=P[U],S),{})}(i,e,t))}catch(i){r.reject(i)}}),r.promise}/**
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
 */function jy(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const Hp=new Map;/**
 * @license
 * Copyright 2017 Google LLC
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
 */function Gy(n,e,t){if(!t)throw new V(N.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function pb(n,e,t,r){if(e===!0&&r===!0)throw new V(N.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Qp(n){if(!F.isDocumentKey(n))throw new V(N.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Yp(n){if(F.isDocumentKey(n))throw new V(N.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function dc(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":$()}function it(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new V(N.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=dc(n);throw new V(N.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function _b(n,e){if(e<=0)throw new V(N.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
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
 */class Jp{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new V(N.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new V(N.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}pb("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=jy((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new V(N.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new V(N.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new V(N.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class hh{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Jp({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new V(N.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new V(N.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Jp(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new uR;switch(r.type){case"firstParty":return new dR(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new V(N.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=Hp.get(t);r&&(D("ComponentProvider","Removing Datastore"),Hp.delete(t),r.terminate())}(this),Promise.resolve()}}/**
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
 */class Bt{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Bt(this.firestore,e,this._query)}}class Qe{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Dn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Qe(this.firestore,e,this._key)}}class Dn extends Bt{constructor(e,t,r){super(e,t,Qs(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Qe(this.firestore,null,new F(e))}withConverter(e){return new Dn(this.firestore,e,this._path)}}function gx(n,e,...t){if(n=ie(n),Gy("collection","path",e),n instanceof hh){const r=ue.fromString(e,...t);return Yp(r),new Dn(n,null,r)}{if(!(n instanceof Qe||n instanceof Dn))throw new V(N.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ue.fromString(e,...t));return Yp(r),new Dn(n.firestore,null,r)}}function mb(n,e,...t){if(n=ie(n),arguments.length===1&&(e=fg.newId()),Gy("doc","path",e),n instanceof hh){const r=ue.fromString(e,...t);return Qp(r),new Qe(n,null,new F(r))}{if(!(n instanceof Qe||n instanceof Dn))throw new V(N.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ue.fromString(e,...t));return Qp(r),new Qe(n.firestore,n instanceof Dn?n.converter:null,new F(r))}}/**
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
 */class Xp{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Ry(this,"async_queue_retry"),this.Vu=()=>{const r=ea();r&&D("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const t=ea();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const t=ea();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const t=new Rt;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!$n(e))throw e;D("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const t=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw tt("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=t,t}enqueueAfterDelay(e,t,r){this.fu(),this.Ru.indexOf(e)>-1&&(t=0);const i=nh.createAndSchedule(this,e,t,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&$()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const t of this.Tu)if(t.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Tu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const t=this.Tu.indexOf(e);this.Tu.splice(t,1)}}function Zp(n){return function(t,r){if(typeof t!="object"||t===null)return!1;const i=t;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(n,["next","error","complete"])}class St extends hh{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new Xp,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Xp(e),this._firestoreClient=void 0,await e}}}function yx(n,e,t){t||(t="(default)");const r=js(n,"firestore");if(r.isInitialized(t)){const i=r.getImmediate({identifier:t}),s=r.getOptions(t);if(ei(s,e))return i;throw new V(N.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(e.cacheSizeBytes!==void 0&&e.localCache!==void 0)throw new V(N.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(e.cacheSizeBytes!==void 0&&e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new V(N.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return r.initialize({options:e,instanceIdentifier:t})}function to(n){if(n._terminated)throw new V(N.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Wy(n),n._firestoreClient}function Wy(n){var e,t,r;const i=n._freezeSettings(),s=function(a,u,l,d){return new GR(a,u,l,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,jy(d.experimentalLongPollingOptions),d.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._componentsProvider||!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),n._firestoreClient=new ab(n._authCredentials,n._appCheckCredentials,n._queue,s,n._componentsProvider&&function(a){const u=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(u),_online:u}}(n._componentsProvider))}function vx(n,e){ri("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const t=n._freezeSettings();return gb(n,Os.provider,{build:r=>new $y(r,t.cacheSizeBytes,void 0)}),Promise.resolve()}function gb(n,e,t){if((n=it(n,St))._firestoreClient||n._terminated)throw new V(N.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.");if(n._componentsProvider||n._getSettings().localCache)throw new V(N.FAILED_PRECONDITION,"SDK cache is already specified.");n._componentsProvider={_online:e,_offline:t},Wy(n)}/**
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
 *//**
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
 */class yb{constructor(e="count",t){this._internalFieldPath=t,this.type="AggregateField",this.aggregateType=e}}class vb{constructor(e,t,r){this._userDataWriter=t,this._data=r,this.type="AggregateQuerySnapshot",this.query=e}data(){return this._userDataWriter.convertObjectMap(this._data)}}/**
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
 */class hi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new hi(Oe.fromBase64String(e))}catch(t){throw new V(N.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new hi(Oe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class fc{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new V(N.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new we(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class no{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class dh{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new V(N.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new V(N.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return J(this._lat,e._lat)||J(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class fh{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const Ib=/^__.*__$/;class Eb{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new hn(e,this.data,this.fieldMask,t,this.fieldTransforms):new Ei(e,this.data,t,this.fieldTransforms)}}class zy{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new hn(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Ky(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw $()}}class pc{constructor(e,t,r,i,s,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new pc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Ca(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(Ky(this.Cu)&&Ib.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class Tb{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||lc(e)}Qu(e,t,r,i=!1){return new pc({Cu:e,methodName:t,qu:r,path:we.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ro(n){const e=n._freezeSettings(),t=lc(n._databaseId);return new Tb(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Hy(n,e,t,r,i,s={}){const o=n.Qu(s.merge||s.mergeFields?2:0,e,t,i);mh("Data must be an object, but it was:",o,r);const a=Yy(r,o);let u,l;if(s.merge)u=new ot(o.fieldMask),l=o.fieldTransforms;else if(s.mergeFields){const d=[];for(const f of s.mergeFields){const _=nl(e,f,t);if(!o.contains(_))throw new V(N.INVALID_ARGUMENT,`Field '${_}' is specified in your field mask but missing from your input data.`);Xy(d,_)||d.push(_)}u=new ot(d),l=o.fieldTransforms.filter(f=>u.covers(f.field))}else u=null,l=o.fieldTransforms;return new Eb(new Ke(a),u,l)}class _c extends no{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof _c}}function wb(n,e,t){return new pc({Cu:3,qu:e.settings.qu,methodName:n._methodName,xu:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class ph extends no{_toFieldTransform(e){return new Bl(e.path,new ai)}isEqual(e){return e instanceof ph}}class _h extends no{constructor(e,t){super(e),this.Ku=t}_toFieldTransform(e){const t=wb(this,e,!0),r=this.Ku.map(s=>wi(s,t)),i=new _r(r);return new Bl(e.path,i)}isEqual(e){return e instanceof _h&&ei(this.Ku,e.Ku)}}function Ab(n,e,t,r){const i=n.Qu(1,e,t);mh("Data must be an object, but it was:",i,r);const s=[],o=Ke.empty();Rr(r,(u,l)=>{const d=gh(e,u,t);l=ie(l);const f=i.Nu(d);if(l instanceof _c)s.push(d);else{const _=wi(l,f);_!=null&&(s.push(d),o.set(d,_))}});const a=new ot(s);return new zy(o,a,i.fieldTransforms)}function Rb(n,e,t,r,i,s){const o=n.Qu(1,e,t),a=[nl(e,r,t)],u=[i];if(s.length%2!=0)throw new V(N.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let _=0;_<s.length;_+=2)a.push(nl(e,s[_])),u.push(s[_+1]);const l=[],d=Ke.empty();for(let _=a.length-1;_>=0;--_)if(!Xy(l,a[_])){const y=a[_];let A=u[_];A=ie(A);const P=o.Nu(y);if(A instanceof _c)l.push(y);else{const S=wi(A,P);S!=null&&(l.push(y),d.set(y,S))}}const f=new ot(l);return new zy(d,f,o.fieldTransforms)}function Qy(n,e,t,r=!1){return wi(t,n.Qu(r?4:3,e))}function wi(n,e){if(Jy(n=ie(n)))return mh("Unsupported field value:",e,n),Yy(n,e);if(n instanceof no)return function(r,i){if(!Ky(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let u=wi(a,i.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(n,e)}return function(r,i){if((r=ie(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return l0(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Ae.fromDate(r);return{timestampValue:ui(i.serializer,s)}}if(r instanceof Ae){const s=new Ae(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ui(i.serializer,s)}}if(r instanceof dh)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof hi)return{bytesValue:Xg(i.serializer,r._byteString)};if(r instanceof Qe){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Wl(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof fh)return function(o,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw a.Bu("VectorValues must only contain numeric values.");return Ul(a.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${dc(r)}`)}(n,e)}function Yy(n,e){const t={};return wg(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Rr(n,(r,i)=>{const s=wi(i,e.Mu(r));s!=null&&(t[r]=s)}),{mapValue:{fields:t}}}function Jy(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Ae||n instanceof dh||n instanceof hi||n instanceof Qe||n instanceof no||n instanceof fh)}function mh(n,e,t){if(!Jy(t)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(t)){const r=dc(t);throw r==="an object"?e.Bu(n+" a custom object"):e.Bu(n+" "+r)}}function nl(n,e,t){if((e=ie(e))instanceof fc)return e._internalPath;if(typeof e=="string")return gh(n,e);throw Ca("Field path arguments must be of type string or ",n,!1,void 0,t)}const Cb=new RegExp("[~\\*/\\[\\]]");function gh(n,e,t){if(e.search(Cb)>=0)throw Ca(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new fc(...e.split("."))._internalPath}catch{throw Ca(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Ca(n,e,t,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new V(N.INVALID_ARGUMENT,a+n+u)}function Xy(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class yh{constructor(e,t,r,i,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Qe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new bb(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(mc("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class bb extends yh{data(){return super.data()}}function mc(n,e){return typeof e=="string"?gh(n,e):e instanceof fc?e._internalPath:e._delegate._internalPath}/**
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
 */function Zy(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new V(N.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class vh{}let gc=class extends vh{};function Ex(n,e,...t){let r=[];e instanceof vh&&r.push(e),r=r.concat(t),function(s){const o=s.filter(u=>u instanceof Ih).length,a=s.filter(u=>u instanceof yc).length;if(o>1||o>0&&a>0)throw new V(N.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)n=i._apply(n);return n}class yc extends gc{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new yc(e,t,r)}_apply(e){const t=this._parse(e);return tv(e._query,t),new Bt(e.firestore,e.converter,Wu(e._query,t))}_parse(e){const t=ro(e.firestore);return function(s,o,a,u,l,d,f){let _;if(l.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new V(N.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){t_(f,d);const y=[];for(const A of f)y.push(e_(u,s,A));_={arrayValue:{values:y}}}else _=e_(u,s,f)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||t_(f,d),_=Qy(a,o,f,d==="in"||d==="not-in");return oe.create(l,d,_)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function Tx(n,e,t){const r=e,i=mc("where",n);return yc._create(i,r,t)}class Ih extends vh{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Ih(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:fe.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const u of a)tv(o,u),o=Wu(o,u)}(e._query,t),new Bt(e.firestore,e.converter,Wu(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Eh extends gc{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Eh(e,t)}_apply(e){const t=function(i,s,o){if(i.startAt!==null)throw new V(N.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new V(N.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new ks(s,o)}(e._query,this._field,this._direction);return new Bt(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new Cr(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,t))}}function wx(n,e="asc"){const t=e,r=mc("orderBy",n);return Eh._create(r,t)}class Th extends gc{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new Th(e,t,r)}_apply(e){return new Bt(e.firestore,e.converter,ya(e._query,this._limit,this._limitType))}}function Ax(n){return _b("limit",n),Th._create("limit",n,"F")}let Sb=class ev extends gc{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new ev(e,t,r)}_apply(e){const t=Pb(e,this.type,this._docOrFields,this._inclusive);return new Bt(e.firestore,e.converter,function(i,s){return new Cr(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,s,i.endAt)}(e._query,t))}};function Rx(...n){return Sb._create("startAfter",n,!1)}function Pb(n,e,t,r){if(t[0]=ie(t[0]),t[0]instanceof yh)return function(s,o,a,u,l){if(!u)throw new V(N.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${a}().`);const d=[];for(const f of Kr(s))if(f.field.isKeyField())d.push(fr(o,u.key));else{const _=u.data.field(f.field);if(ec(_))throw new V(N.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+f.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(_===null){const y=f.field.canonicalString();throw new V(N.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${y}' (used as the orderBy) does not exist.`)}d.push(_)}return new Ln(d,l)}(n._query,n.firestore._databaseId,e,t[0]._document,r);{const i=ro(n.firestore);return function(o,a,u,l,d,f){const _=o.explicitOrderBy;if(d.length>_.length)throw new V(N.INVALID_ARGUMENT,`Too many arguments provided to ${l}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const y=[];for(let A=0;A<d.length;A++){const P=d[A];if(_[A].field.isKeyField()){if(typeof P!="string")throw new V(N.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${l}(), but got a ${typeof P}`);if(!Fl(o)&&P.indexOf("/")!==-1)throw new V(N.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${l}() must be a plain document ID, but '${P}' contains a slash.`);const S=o.path.child(ue.fromString(P));if(!F.isDocumentKey(S))throw new V(N.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${l}() must result in a valid document path, but '${S}' is not because it contains an odd number of segments.`);const U=new F(S);y.push(fr(a,U))}else{const S=Qy(u,l,P);y.push(S)}}return new Ln(y,f)}(n._query,n.firestore._databaseId,i,e,t,r)}}function e_(n,e,t){if(typeof(t=ie(t))=="string"){if(t==="")throw new V(N.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Fl(e)&&t.indexOf("/")!==-1)throw new V(N.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(ue.fromString(t));if(!F.isDocumentKey(r))throw new V(N.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return fr(n,new F(r))}if(t instanceof Qe)return fr(n,t._key);throw new V(N.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${dc(t)}.`)}function t_(n,e){if(!Array.isArray(n)||n.length===0)throw new V(N.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function tv(n,e){const t=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(n.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new V(N.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new V(N.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class kb{convertValue(e,t="none"){switch(dr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ve(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(xn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw $()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Rr(e,(i,s)=>{r[i]=this.convertValue(s,t)}),r}convertVectorValue(e){var t,r,i;const s=(i=(r=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>ve(o.doubleValue));return new fh(s)}convertGeoPoint(e){return new dh(ve(e.latitude),ve(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Ll(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(bs(e));default:return null}}convertTimestamp(e){const t=rn(e);return new Ae(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=ue.fromString(e);j(ay(r));const i=new hr(r.get(1),r.get(3)),s=new F(r.popFirst(5));return i.isEqual(t)||tt(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
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
 */function nv(n,e,t){let r;return r=n?n.toFirestore(e):e,r}function Nb(){return new yb("count")}/**
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
 */class os{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class rv extends yh{constructor(e,t,r,i,s,o){super(e,t,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new ta(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(mc("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class ta extends rv{data(e={}){return super.data(e)}}class iv{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new os(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new ta(this._firestore,this._userDataWriter,r.key,r,new os(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new V(N.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const u=new ta(i._firestore,i._userDataWriter,a.doc.key,a.doc,new os(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const u=new ta(i._firestore,i._userDataWriter,a.doc.key,a.doc,new os(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let l=-1,d=-1;return a.type!==0&&(l=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),d=o.indexOf(a.doc.key)),{type:Db(a.type),doc:u,oldIndex:l,newIndex:d}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function Db(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return $()}}/**
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
 */function Cx(n){n=it(n,Qe);const e=it(n.firestore,St);return hb(to(e),n._key).then(t=>sv(e,n,t))}class vc extends kb{constructor(e){super(),this.firestore=e}convertBytes(e){return new hi(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Qe(this.firestore,null,t)}}function bx(n){n=it(n,Bt);const e=it(n.firestore,St),t=to(e),r=new vc(e);return Zy(n._query),db(t,n._query).then(i=>new iv(e,r,n,i))}function Sx(n,e,t){n=it(n,Qe);const r=it(n.firestore,St),i=nv(n.converter,e);return Ic(r,[Hy(ro(r),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,He.none())])}function Px(n,e,t,...r){n=it(n,Qe);const i=it(n.firestore,St),s=ro(i);let o;return o=typeof(e=ie(e))=="string"||e instanceof fc?Rb(s,"updateDoc",n._key,e,t,r):Ab(s,"updateDoc",n._key,e),Ic(i,[o.toMutation(n._key,He.exists(!0))])}function kx(n){return Ic(it(n.firestore,St),[new sc(n._key,He.none())])}function Nx(n,e){const t=it(n.firestore,St),r=mb(n),i=nv(n.converter,e);return Ic(t,[Hy(ro(n.firestore),"addDoc",r._key,i,n.converter!==null,{}).toMutation(r._key,He.exists(!1))]).then(()=>r)}function Dx(n,...e){var t,r,i;n=ie(n);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||Zp(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(Zp(e[o])){const f=e[o];e[o]=(t=f.next)===null||t===void 0?void 0:t.bind(f),e[o+1]=(r=f.error)===null||r===void 0?void 0:r.bind(f),e[o+2]=(i=f.complete)===null||i===void 0?void 0:i.bind(f)}let u,l,d;if(n instanceof Qe)l=it(n.firestore,St),d=Qs(n._key.path),u={next:f=>{e[o]&&e[o](sv(l,n,f))},error:e[o+1],complete:e[o+2]};else{const f=it(n,Bt);l=it(f.firestore,St),d=f._query;const _=new vc(l);u={next:y=>{e[o]&&e[o](new iv(l,_,f,y))},error:e[o+1],complete:e[o+2]},Zy(n._query)}return function(_,y,A,P){const S=new uh(P),U=new ah(y,S,A);return _.asyncQueue.enqueueAndForget(async()=>ih(await Ra(_),U)),()=>{S.Za(),_.asyncQueue.enqueueAndForget(async()=>sh(await Ra(_),U))}}(to(l),d,a,u)}function Ic(n,e){return function(r,i){const s=new Rt;return r.asyncQueue.enqueueAndForget(async()=>eb(await ub(r),i,s)),s.promise}(to(n),e)}function sv(n,e,t){const r=t.docs.get(e._key),i=new vc(n);return new rv(n,i,e._key,r,new os(t.hasPendingWrites,t.fromCache),e.converter)}/**
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
 */function Ox(n){return Ob(n,{count:Nb()})}function Ob(n,e){const t=it(n.firestore,St),r=to(t),i=$R(e,(s,o)=>new g0(o,s.aggregateType,s._internalFieldPath));return fb(r,n._query,i).then(s=>function(a,u,l){const d=new vc(a);return new vb(u,d,l)}(t,n,s))}class xb{constructor(e){let t;this.kind="persistent",e!=null&&e.tabManager?(e.tabManager._initialize(e),t=e.tabManager):(t=Lb(),t._initialize(e)),this._onlineComponentProvider=t._onlineComponentProvider,this._offlineComponentProvider=t._offlineComponentProvider}toJSON(){return{kind:this.kind}}}function xx(n){return new xb(n)}class Vb{constructor(e){this.forceOwnership=e,this.kind="persistentSingleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=Os.provider,this._offlineComponentProvider={build:t=>new $y(t,e==null?void 0:e.cacheSizeBytes,this.forceOwnership)}}}function Lb(n){return new Vb(void 0)}function Vx(){return new ph("serverTimestamp")}function Lx(...n){return new _h("arrayUnion",n)}(function(e,t=!0){(function(i){Ii=i})(Pt),Lt(new bt("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new St(new lR(r.getProvider("auth-internal")),new pR(r.getProvider("app-check-internal")),function(l,d){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new V(N.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new hr(l.options.projectId,d)}(o,i),o);return s=Object.assign({useFetchStreams:t},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),ft(Kf,"4.7.3",e),ft(Kf,"4.7.3","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
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
 */const ov="firebasestorage.googleapis.com",av="storageBucket",Mb=2*60*1e3,Fb=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Se extends _t{constructor(e,t,r=0){super(du(e),`Firebase Storage: ${t} (${du(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Se.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return du(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var be;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(be||(be={}));function du(n){return"storage/"+n}function wh(){const n="An unknown error occurred, please check the error payload for server response.";return new Se(be.UNKNOWN,n)}function Ub(n){return new Se(be.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function Bb(n){return new Se(be.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function qb(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Se(be.UNAUTHENTICATED,n)}function $b(){return new Se(be.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function jb(n){return new Se(be.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function Gb(){return new Se(be.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Wb(){return new Se(be.CANCELED,"User canceled the upload/download.")}function zb(n){return new Se(be.INVALID_URL,"Invalid URL '"+n+"'.")}function Kb(n){return new Se(be.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function Hb(){return new Se(be.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+av+"' property when initializing the app?")}function Qb(){return new Se(be.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function Yb(){return new Se(be.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function Jb(n){return new Se(be.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function rl(n){return new Se(be.INVALID_ARGUMENT,n)}function cv(){return new Se(be.APP_DELETED,"The Firebase app was deleted.")}function Xb(n){return new Se(be.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function ps(n,e){return new Se(be.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function Yi(n){throw new Se(be.INTERNAL_ERROR,"Internal error: "+n)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class dt{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let r;try{r=dt.makeFromUrl(e,t)}catch{return new dt(e,"")}if(r.path==="")return r;throw Kb(e)}static makeFromUrl(e,t){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(G){G.path.charAt(G.path.length-1)==="/"&&(G.path_=G.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),u={bucket:1,path:3};function l(G){G.path_=decodeURIComponent(G.path)}const d="v[A-Za-z0-9_]+",f=t.replace(/[.]/g,"\\."),_="(/([^?#]*).*)?$",y=new RegExp(`^https?://${f}/${d}/b/${i}/o${_}`,"i"),A={bucket:1,path:3},P=t===ov?"(?:storage.googleapis.com|storage.cloud.google.com)":t,S="([^?#]*)",U=new RegExp(`^https?://${P}/${i}/${S}`,"i"),B=[{regex:a,indices:u,postModify:s},{regex:y,indices:A,postModify:l},{regex:U,indices:{bucket:1,path:2},postModify:l}];for(let G=0;G<B.length;G++){const se=B[G],Y=se.regex.exec(e);if(Y){const E=Y[se.indices.bucket];let g=Y[se.indices.path];g||(g=""),r=new dt(E,g),se.postModify(r);break}}if(r==null)throw zb(e);return r}}class Zb{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function eS(n,e,t){let r=1,i=null,s=null,o=!1,a=0;function u(){return a===2}let l=!1;function d(...S){l||(l=!0,e.apply(null,S))}function f(S){i=setTimeout(()=>{i=null,n(y,u())},S)}function _(){s&&clearTimeout(s)}function y(S,...U){if(l){_();return}if(S){_(),d.call(null,S,...U);return}if(u()||o){_(),d.call(null,S,...U);return}r<64&&(r*=2);let B;a===1?(a=2,B=0):B=(r+Math.random())*1e3,f(B)}let A=!1;function P(S){A||(A=!0,_(),!l&&(i!==null?(S||(a=2),clearTimeout(i),f(0)):S||(a=1)))}return f(0),s=setTimeout(()=>{o=!0,P(!0)},t),P}function tS(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function nS(n){return n!==void 0}function rS(n){return typeof n=="object"&&!Array.isArray(n)}function Ah(n){return typeof n=="string"||n instanceof String}function n_(n){return Rh()&&n instanceof Blob}function Rh(){return typeof Blob<"u"}function r_(n,e,t,r){if(r<e)throw rl(`Invalid value for '${n}'. Expected ${e} or greater.`);if(r>t)throw rl(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function Ec(n,e,t){let r=e;return t==null&&(r=`https://${e}`),`${t}://${r}/v0${n}`}function uv(n){const e=encodeURIComponent;let t="?";for(const r in n)if(n.hasOwnProperty(r)){const i=e(r)+"="+e(n[r]);t=t+i+"&"}return t=t.slice(0,-1),t}var cr;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(cr||(cr={}));/**
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
 */function iS(n,e){const t=n>=500&&n<600,i=[408,429].indexOf(n)!==-1,s=e.indexOf(n)!==-1;return t||i||s}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class sS{constructor(e,t,r,i,s,o,a,u,l,d,f,_=!0){this.url_=e,this.method_=t,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=u,this.timeout_=l,this.progressCallback_=d,this.connectionFactory_=f,this.retry=_,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((y,A)=>{this.resolve_=y,this.reject_=A,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Fo(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const u=a.loaded,l=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,l)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===cr.NO_ERROR,u=s.getStatus();if(!a||iS(u,this.additionalRetryCodes_)&&this.retry){const d=s.getErrorCode()===cr.ABORT;r(!1,new Fo(!1,null,d));return}const l=this.successCodes_.indexOf(u)!==-1;r(!0,new Fo(l,s))})},t=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const u=this.callback_(a,a.getResponse());nS(u)?s(u):s()}catch(u){o(u)}else if(a!==null){const u=wh();u.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,u)):o(u)}else if(i.canceled){const u=this.appDelete_?cv():Wb();o(u)}else{const u=Gb();o(u)}};this.canceled_?t(!1,new Fo(!1,null,!0)):this.backoffId_=eS(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&tS(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Fo{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}}function oS(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function aS(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function cS(n,e){e&&(n["X-Firebase-GMPID"]=e)}function uS(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function lS(n,e,t,r,i,s,o=!0){const a=uv(n.urlParams),u=n.url+a,l=Object.assign({},n.headers);return cS(l,e),oS(l,t),aS(l,s),uS(l,r),new sS(u,n.method,l,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function hS(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function dS(...n){const e=hS();if(e!==void 0){const t=new e;for(let r=0;r<n.length;r++)t.append(n[r]);return t.getBlob()}else{if(Rh())return new Blob(n);throw new Se(be.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function fS(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
 * @license
 * Copyright 2021 Google LLC
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
 */function pS(n){if(typeof atob>"u")throw Jb("base-64");return atob(n)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const xt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class fu{constructor(e,t){this.data=e,this.contentType=t||null}}function _S(n,e){switch(n){case xt.RAW:return new fu(lv(e));case xt.BASE64:case xt.BASE64URL:return new fu(hv(n,e));case xt.DATA_URL:return new fu(gS(e),yS(e))}throw wh()}function lv(n){const e=[];for(let t=0;t<n.length;t++){let r=n.charCodeAt(t);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=n.charCodeAt(++t);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function mS(n){let e;try{e=decodeURIComponent(n)}catch{throw ps(xt.DATA_URL,"Malformed data URL.")}return lv(e)}function hv(n,e){switch(n){case xt.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw ps(n,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case xt.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw ps(n,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=pS(e)}catch(i){throw i.message.includes("polyfill")?i:ps(n,"Invalid character found")}const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}class dv{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw ps(xt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=t[1]||null;r!=null&&(this.base64=vS(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function gS(n){const e=new dv(n);return e.base64?hv(xt.BASE64,e.rest):mS(e.rest)}function yS(n){return new dv(n).contentType}function vS(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Cn{constructor(e,t){let r=0,i="";n_(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,t){if(n_(this.data_)){const r=this.data_,i=fS(r,e,t);return i===null?null:new Cn(i)}else{const r=new Uint8Array(this.data_.buffer,e,t-e);return new Cn(r,!0)}}static getBlob(...e){if(Rh()){const t=e.map(r=>r instanceof Cn?r.data_:r);return new Cn(dS.apply(null,t))}else{const t=e.map(o=>Ah(o)?_S(xt.RAW,o).data:o.data_);let r=0;t.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return t.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new Cn(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function fv(n){let e;try{e=JSON.parse(n)}catch{return null}return rS(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function IS(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function ES(n,e){const t=e.split("/").filter(r=>r.length>0).join("/");return n.length===0?t:n+"/"+t}function pv(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function TS(n,e){return e}class Ze{constructor(e,t,r,i){this.server=e,this.local=t||e,this.writable=!!r,this.xform=i||TS}}let Uo=null;function wS(n){return!Ah(n)||n.length<2?n:pv(n)}function _v(){if(Uo)return Uo;const n=[];n.push(new Ze("bucket")),n.push(new Ze("generation")),n.push(new Ze("metageneration")),n.push(new Ze("name","fullPath",!0));function e(s,o){return wS(o)}const t=new Ze("name");t.xform=e,n.push(t);function r(s,o){return o!==void 0?Number(o):o}const i=new Ze("size");return i.xform=r,n.push(i),n.push(new Ze("timeCreated")),n.push(new Ze("updated")),n.push(new Ze("md5Hash",null,!0)),n.push(new Ze("cacheControl",null,!0)),n.push(new Ze("contentDisposition",null,!0)),n.push(new Ze("contentEncoding",null,!0)),n.push(new Ze("contentLanguage",null,!0)),n.push(new Ze("contentType",null,!0)),n.push(new Ze("metadata","customMetadata",!0)),Uo=n,Uo}function AS(n,e){function t(){const r=n.bucket,i=n.fullPath,s=new dt(r,i);return e._makeStorageReference(s)}Object.defineProperty(n,"ref",{get:t})}function RS(n,e,t){const r={};r.type="file";const i=t.length;for(let s=0;s<i;s++){const o=t[s];r[o.local]=o.xform(r,e[o.server])}return AS(r,n),r}function mv(n,e,t){const r=fv(e);return r===null?null:RS(n,r,t)}function CS(n,e,t,r){const i=fv(e);if(i===null||!Ah(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(l=>{const d=n.bucket,f=n.fullPath,_="/b/"+o(d)+"/o/"+o(f),y=Ec(_,t,r),A=uv({alt:"media",token:l});return y+A})[0]}function bS(n,e){const t={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(t[s.server]=n[s.local])}return JSON.stringify(t)}class Ch{constructor(e,t,r,i){this.url=e,this.method=t,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function gv(n){if(!n)throw wh()}function SS(n,e){function t(r,i){const s=mv(n,i,e);return gv(s!==null),s}return t}function PS(n,e){function t(r,i){const s=mv(n,i,e);return gv(s!==null),CS(s,i,n.host,n._protocol)}return t}function yv(n){function e(t,r){let i;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?i=$b():i=qb():t.getStatus()===402?i=Bb(n.bucket):t.getStatus()===403?i=jb(n.path):i=r,i.status=t.getStatus(),i.serverResponse=r.serverResponse,i}return e}function vv(n){const e=yv(n);function t(r,i){let s=e(r,i);return r.getStatus()===404&&(s=Ub(n.path)),s.serverResponse=i.serverResponse,s}return t}function kS(n,e,t){const r=e.fullServerUrl(),i=Ec(r,n.host,n._protocol),s="GET",o=n.maxOperationRetryTime,a=new Ch(i,s,PS(n,t),o);return a.errorHandler=vv(e),a}function NS(n,e){const t=e.fullServerUrl(),r=Ec(t,n.host,n._protocol),i="DELETE",s=n.maxOperationRetryTime;function o(u,l){}const a=new Ch(r,i,o,s);return a.successCodes=[200,204],a.errorHandler=vv(e),a}function DS(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function OS(n,e,t){const r=Object.assign({},t);return r.fullPath=n.path,r.size=e.size(),r.contentType||(r.contentType=DS(null,e)),r}function xS(n,e,t,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let B="";for(let G=0;G<2;G++)B=B+Math.random().toString().slice(2);return B}const u=a();o["Content-Type"]="multipart/related; boundary="+u;const l=OS(e,r,i),d=bS(l,t),f="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+d+`\r
--`+u+`\r
Content-Type: `+l.contentType+`\r
\r
`,_=`\r
--`+u+"--",y=Cn.getBlob(f,r,_);if(y===null)throw Qb();const A={name:l.fullPath},P=Ec(s,n.host,n._protocol),S="POST",U=n.maxUploadRetryTime,q=new Ch(P,S,SS(n,t),U);return q.urlParams=A,q.headers=o,q.body=y.uploadData(),q.errorHandler=yv(e),q}class VS{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=cr.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=cr.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=cr.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,r,i){if(this.sent_)throw Yi("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Yi("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Yi("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Yi("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Yi("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class LS extends VS{initXhr(){this.xhr_.responseType="text"}}function bh(){return new LS}/**
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
 */class vr{constructor(e,t){this._service=e,t instanceof dt?this._location=t:this._location=dt.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new vr(e,t)}get root(){const e=new dt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return pv(this._location.path)}get storage(){return this._service}get parent(){const e=IS(this._location.path);if(e===null)return null;const t=new dt(this._location.bucket,e);return new vr(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw Xb(e)}}function MS(n,e,t){n._throwIfRoot("uploadBytes");const r=xS(n.storage,n._location,_v(),new Cn(e,!0),t);return n.storage.makeRequestWithTokens(r,bh).then(i=>({metadata:i,ref:n}))}function FS(n){n._throwIfRoot("getDownloadURL");const e=kS(n.storage,n._location,_v());return n.storage.makeRequestWithTokens(e,bh).then(t=>{if(t===null)throw Yb();return t})}function US(n){n._throwIfRoot("deleteObject");const e=NS(n.storage,n._location);return n.storage.makeRequestWithTokens(e,bh)}function BS(n,e){const t=ES(n._location.path,e),r=new dt(n._location.bucket,t);return new vr(n.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function qS(n){return/^[A-Za-z]+:\/\//.test(n)}function $S(n,e){return new vr(n,e)}function Iv(n,e){if(n instanceof Sh){const t=n;if(t._bucket==null)throw Hb();const r=new vr(t,t._bucket);return e!=null?Iv(r,e):r}else return e!==void 0?BS(n,e):n}function jS(n,e){if(e&&qS(e)){if(n instanceof Sh)return $S(n,e);throw rl("To use ref(service, url), the first argument must be a Storage instance.")}else return Iv(n,e)}function i_(n,e){const t=e==null?void 0:e[av];return t==null?null:dt.makeFromBucketSpec(t,n)}function GS(n,e,t,r={}){n.host=`${e}:${t}`,n._protocol="http";const{mockUserToken:i}=r;i&&(n._overrideAuthToken=typeof i=="string"?i:pm(i,n.app.options.projectId))}class Sh{constructor(e,t,r,i,s){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=ov,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Mb,this._maxUploadRetryTime=Fb,this._requests=new Set,i!=null?this._bucket=dt.makeFromBucketSpec(i,this._host):this._bucket=i_(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=dt.makeFromBucketSpec(this._url,e):this._bucket=i_(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){r_("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){r_("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new vr(this,e)}_makeRequest(e,t,r,i,s=!0){if(this._deleted)return new Zb(cv());{const o=lS(e,this._appId,r,i,t,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,t){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,i).getPromise()}}const s_="@firebase/storage",o_="0.13.2";/**
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
 */const Ev="storage";function Mx(n,e,t){return n=ie(n),MS(n,e,t)}function Fx(n){return n=ie(n),FS(n)}function Ux(n){return n=ie(n),US(n)}function Bx(n,e){return n=ie(n),jS(n,e)}function qx(n=Tl(),e){n=ie(n);const r=js(n,Ev).getImmediate({identifier:e}),i=hm("storage");return i&&WS(r,...i),r}function WS(n,e,t,r={}){GS(n,e,t,r)}function zS(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),i=n.getProvider("app-check-internal");return new Sh(t,r,i,e,Pt)}function KS(){Lt(new bt(Ev,zS,"PUBLIC").setMultipleInstances(!0)),ft(s_,o_,""),ft(s_,o_,"esm2017")}KS();var a_={};const c_="@firebase/database",u_="1.0.8";/**
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
 */let Tv="";function HS(n){Tv=n}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class QS{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Fe(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Ts(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class YS{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return Ft(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const wv=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new QS(e)}}catch{}return new YS},ir=wv("localStorage"),JS=wv("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
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
 */const Qr=new $s("@firebase/database"),XS=function(){let n=1;return function(){return n++}}(),Av=function(n){const e=JE(n),t=new HE;t.update(e);const r=t.digest();return Il.encodeByteArray(r)},io=function(...n){let e="";for(let t=0;t<n.length;t++){const r=n[t];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=io.apply(null,r):typeof r=="object"?e+=Fe(r):e+=r,e+=" "}return e};let _s=null,l_=!0;const ZS=function(n,e){L(!e,"Can't turn on custom loggers persistently."),Qr.logLevel=Z.VERBOSE,_s=Qr.log.bind(Qr)},qe=function(...n){if(l_===!0&&(l_=!1,_s===null&&JS.get("logging_enabled")===!0&&ZS()),_s){const e=io.apply(null,n);_s(e)}},so=function(n){return function(...e){qe(n,...e)}},il=function(...n){const e="FIREBASE INTERNAL ERROR: "+io(...n);Qr.error(e)},sn=function(...n){const e=`FIREBASE FATAL ERROR: ${io(...n)}`;throw Qr.error(e),new Error(e)},ut=function(...n){const e="FIREBASE WARNING: "+io(...n);Qr.warn(e)},eP=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&ut("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Tc=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},tP=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},Ir="[MIN_NAME]",Fn="[MAX_NAME]",Sr=function(n,e){if(n===e)return 0;if(n===Ir||e===Fn)return-1;if(e===Ir||n===Fn)return 1;{const t=h_(n),r=h_(e);return t!==null?r!==null?t-r===0?n.length-e.length:t-r:-1:r!==null?1:n<e?-1:1}},nP=function(n,e){return n===e?0:n<e?-1:1},Ji=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+Fe(e))},Ph=function(n){if(typeof n!="object"||n===null)return Fe(n);const e=[];for(const r in n)e.push(r);e.sort();let t="{";for(let r=0;r<e.length;r++)r!==0&&(t+=","),t+=Fe(e[r]),t+=":",t+=Ph(n[e[r]]);return t+="}",t},Rv=function(n,e){const t=n.length;if(t<=e)return[n];const r=[];for(let i=0;i<t;i+=e)i+e>t?r.push(n.substring(i,t)):r.push(n.substring(i,i+e));return r};function Ye(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const Cv=function(n){L(!Tc(n),"Invalid JSON number");const e=11,t=52,r=(1<<e-1)-1;let i,s,o,a,u;n===0?(s=0,o=0,i=1/n===-1/0?1:0):(i=n<0,n=Math.abs(n),n>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),r),s=a+r,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(s=0,o=Math.round(n/Math.pow(2,1-r-t))));const l=[];for(u=t;u;u-=1)l.push(o%2?1:0),o=Math.floor(o/2);for(u=e;u;u-=1)l.push(s%2?1:0),s=Math.floor(s/2);l.push(i?1:0),l.reverse();const d=l.join("");let f="";for(u=0;u<64;u+=8){let _=parseInt(d.substr(u,8),2).toString(16);_.length===1&&(_="0"+_),f=f+_}return f.toLowerCase()},rP=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},iP=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function sP(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const r=new Error(n+" at "+e._path.toString()+": "+t);return r.code=n.toUpperCase(),r}const oP=new RegExp("^-?(0*)\\d{1,10}$"),aP=-2147483648,cP=2147483647,h_=function(n){if(oP.test(n)){const e=Number(n);if(e>=aP&&e<=cP)return e}return null},Ai=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw ut("Exception was thrown by user callback.",t),e},Math.floor(0))}},uP=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ms=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
 * @license
 * Copyright 2021 Google LLC
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
 */class lP{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,r):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){ut(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class hP{constructor(e,t,r){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(qe("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,r):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ut(e)}}class na{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}na.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
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
 */const kh="5",bv="v",Sv="s",Pv="r",kv="f",Nv=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Dv="ls",Ov="p",sl="ac",xv="websocket",Vv="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Lv{constructor(e,t,r,i,s=!1,o="",a=!1,u=!1){this.secure=t,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=u,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=ir.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&ir.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function dP(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function Mv(n,e,t){L(typeof e=="string","typeof type must == string"),L(typeof t=="object","typeof params must == object");let r;if(e===xv)r=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===Vv)r=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);dP(n)&&(t.ns=n.namespace);const i=[];return Ye(t,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class fP{constructor(){this.counters_={}}incrementCounter(e,t=1){Ft(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return VE(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const pu={},_u={};function Nh(n){const e=n.toString();return pu[e]||(pu[e]=new fP),pu[e]}function pP(n,e){const t=n.toString();return _u[t]||(_u[t]=e()),_u[t]}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class _P{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&Ai(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const d_="start",mP="close",gP="pLPCommand",yP="pRTLPCB",Fv="id",Uv="pw",Bv="ser",vP="cb",IP="seg",EP="ts",TP="d",wP="dframe",qv=1870,$v=30,AP=qv-$v,RP=25e3,CP=3e4;class Wr{constructor(e,t,r,i,s,o,a){this.connId=e,this.repoInfo=t,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=so(e),this.stats_=Nh(t),this.urlFn=u=>(this.appCheckToken&&(u[sl]=this.appCheckToken),Mv(t,Vv,u))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new _P(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(CP)),tP(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Dh((...s)=>{const[o,a,u,l,d]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===d_)this.id=a,this.password=u;else if(o===mP)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[d_]="t",r[Bv]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[vP]=this.scriptTagHolder.uniqueCallbackIdentifier),r[bv]=kh,this.transportSessionId&&(r[Sv]=this.transportSessionId),this.lastSessionId&&(r[Dv]=this.lastSessionId),this.applicationId&&(r[Ov]=this.applicationId),this.appCheckToken&&(r[sl]=this.appCheckToken),typeof location<"u"&&location.hostname&&Nv.test(location.hostname)&&(r[Pv]=kv);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Wr.forceAllow_=!0}static forceDisallow(){Wr.forceDisallow_=!0}static isAvailable(){return Wr.forceAllow_?!0:!Wr.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!rP()&&!iP()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=Fe(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const r=cm(t),i=Rv(r,AP);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const r={};r[wP]="t",r[Fv]=e,r[Uv]=t,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=Fe(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Dh{constructor(e,t,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=XS(),window[gP+this.uniqueCallbackIdentifier]=e,window[yP+this.uniqueCallbackIdentifier]=t,this.myIFrame=Dh.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){qe("frame writing exception"),a.stack&&qe(a.stack),qe(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||qe("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Fv]=this.myID,e[Uv]=this.myPW,e[Bv]=this.currentSerial;let t=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+$v+r.length<=qv;){const o=this.pendingSegs.shift();r=r+"&"+IP+i+"="+o.seg+"&"+EP+i+"="+o.ts+"&"+TP+i+"="+o.d,i++}return t=t+r,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,r){this.pendingSegs.push({seg:e,ts:t,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const r=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(r,Math.floor(RP)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),t())},r.onerror=()=>{qe("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const bP=16384,SP=45e3;let ba=null;typeof MozWebSocket<"u"?ba=MozWebSocket:typeof WebSocket<"u"&&(ba=WebSocket);class Tt{constructor(e,t,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=so(this.connId),this.stats_=Nh(t),this.connURL=Tt.connectionURL_(t,o,a,i,r),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,r,i,s){const o={};return o[bv]=kh,typeof location<"u"&&location.hostname&&Nv.test(location.hostname)&&(o[Pv]=kv),t&&(o[Sv]=t),r&&(o[Dv]=r),i&&(o[sl]=i),s&&(o[Ov]=s),Mv(e,xv,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,ir.set("previous_websocket_failure",!0);try{let r;ym(),this.mySock=new ba(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Tt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(t);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&ba!==null&&!Tt.forceDisallow_}static previouslyFailed(){return ir.isInMemoryStorage||ir.get("previous_websocket_failure")===!0}markConnectionHealthy(){ir.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const r=Ts(t);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(L(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const r=this.extractFrameCount_(t);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const t=Fe(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const r=Rv(t,bP);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(SP))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Tt.responsesRequiredToBeHealthy=2;Tt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
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
 */class xs{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Wr,Tt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=Tt&&Tt.isAvailable();let r=t&&!Tt.previouslyFailed();if(e.webSocketOnly&&(t||ut("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Tt];else{const i=this.transports_=[];for(const s of xs.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);xs.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}xs.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
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
 */const PP=6e4,kP=5e3,NP=10*1024,DP=100*1024,mu="t",f_="d",OP="s",p_="r",xP="e",__="o",m_="a",g_="n",y_="p",VP="h";class LP{constructor(e,t,r,i,s,o,a,u,l,d){this.id=e,this.repoInfo_=t,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=u,this.onKill_=l,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=so("c:"+this.id+":"),this.transportManager_=new xs(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=ms(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>DP?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>NP?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(mu in e){const t=e[mu];t===m_?this.upgradeIfSecondaryHealthy_():t===p_?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===__&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Ji("t",e),r=Ji("d",e);if(t==="c")this.onSecondaryControl_(r);else if(t==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:y_,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:m_,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:g_,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Ji("t",e),r=Ji("d",e);t==="c"?this.onControl_(r):t==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Ji(mu,e);if(f_ in e){const r=e[f_];if(t===VP){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(t===g_){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===OP?this.onConnectionShutdown_(r):t===p_?this.onReset_(r):t===xP?il("Server Error: "+r):t===__?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):il("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),kh!==r&&ut("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,r),ms(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(PP))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ms(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(kP))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:y_,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(ir.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class jv{put(e,t,r,i){}merge(e,t,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,r){}onDisconnectMerge(e,t,r){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Gv{constructor(e){this.allowedEvents_=e,this.listeners_={},L(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,t)}}on(e,t,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:r});const i=this.getInitialEvent(e);i&&t.apply(r,i)}off(e,t,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===t&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){L(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Sa extends Gv{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Ga()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Sa}getInitialEvent(e){return L(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const v_=32,I_=768;class de{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function le(){return new de("")}function ee(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function Un(n){return n.pieces_.length-n.pieceNum_}function me(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new de(n.pieces_,e)}function Oh(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function MP(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function Vs(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function Wv(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new de(e,0)}function Pe(n,e){const t=[];for(let r=n.pieceNum_;r<n.pieces_.length;r++)t.push(n.pieces_[r]);if(e instanceof de)for(let r=e.pieceNum_;r<e.pieces_.length;r++)t.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&t.push(r[i])}return new de(t,0)}function te(n){return n.pieceNum_>=n.pieces_.length}function at(n,e){const t=ee(n),r=ee(e);if(t===null)return e;if(t===r)return at(me(n),me(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function FP(n,e){const t=Vs(n,0),r=Vs(e,0);for(let i=0;i<t.length&&i<r.length;i++){const s=Sr(t[i],r[i]);if(s!==0)return s}return t.length===r.length?0:t.length<r.length?-1:1}function xh(n,e){if(Un(n)!==Un(e))return!1;for(let t=n.pieceNum_,r=e.pieceNum_;t<=n.pieces_.length;t++,r++)if(n.pieces_[t]!==e.pieces_[r])return!1;return!0}function gt(n,e){let t=n.pieceNum_,r=e.pieceNum_;if(Un(n)>Un(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[r])return!1;++t,++r}return!0}class UP{constructor(e,t){this.errorPrefix_=t,this.parts_=Vs(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Wa(this.parts_[r]);zv(this)}}function BP(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=Wa(e),zv(n)}function qP(n){const e=n.parts_.pop();n.byteLength_-=Wa(e),n.parts_.length>0&&(n.byteLength_-=1)}function zv(n){if(n.byteLength_>I_)throw new Error(n.errorPrefix_+"has a key path longer than "+I_+" bytes ("+n.byteLength_+").");if(n.parts_.length>v_)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+v_+") or object contains a cycle "+Xn(n))}function Xn(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Vh extends Gv{constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new Vh}getInitialEvent(e){return L(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const Xi=1e3,$P=60*5*1e3,E_=30*1e3,jP=1.3,GP=3e4,WP="server_kill",T_=3;class Zt extends jv{constructor(e,t,r,i,s,o,a,u){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=u,this.id=Zt.nextPersistentConnectionId_++,this.log_=so("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Xi,this.maxReconnectDelay_=$P,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,u&&!ym())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Vh.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Sa.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,r){const i=++this.requestNumber_,s={r:i,a:e,b:t};this.log_(Fe(s)),L(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const t=new zt,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),t.promise}listen(e,t,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),L(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),L(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:t,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(r)})}sendListen_(e){const t=e.query,r=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=t._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const u=a.d,l=a.s;Zt.warnOnListenWarnings_(u,t),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),l!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(l,u))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&Ft(e,"w")){const r=Zr(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+t._queryParams.getIndex().toString()+'"',s=t._path.toString();ut(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||KE(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=E_)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=zE(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(t,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,r=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,r)})}unlisten(e,t){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),L(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,t)}sendUnlisten_(e,t,r,i){this.log_("Unlisten on "+e+" for "+t);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,t,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:r})}onDisconnectMerge(e,t,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:r})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,r,i){const s={p:t,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,t,r,i){this.putInternal("p",e,t,r,i)}merge(e,t,r,i){this.putInternal("m",e,t,r,i)}putInternal(e,t,r,i,s){this.initConnection_();const o={p:t,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,r,s=>{this.log_(t+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Fe(e));const t=e.r,r=this.requestCBHash_[t];r&&(delete this.requestCBHash_[t],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):il("Unrecognized action received from server: "+Fe(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){L(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Xi,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Xi,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>GP&&(this.reconnectDelay_=Xi),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*jP)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Zt.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const u=function(){a?a.close():(o=!0,r())},l=function(f){L(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(f)};this.realtime_={close:u,sendRequest:l};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[f,_]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?qe("getToken() completed but was canceled"):(qe("getToken() completed. Creating connection."),this.authToken_=f&&f.accessToken,this.appCheckToken_=_&&_.token,a=new LP(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,r,y=>{ut(y+" ("+this.repoInfo_.toString()+")"),this.interrupt(WP)},s))}catch(f){this.log_("Failed to get token: "+f),o||(this.repoInfo_.nodeAdmin&&ut(f),u())}}}interrupt(e){qe("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){qe("Resuming connection for reason: "+e),delete this.interruptReasons_[e],oa(this.interruptReasons_)&&(this.reconnectDelay_=Xi,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let r;t?r=t.map(s=>Ph(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const r=new de(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(t),s.delete(t),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,t){qe("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=T_&&(this.reconnectDelay_=E_,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){qe("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=T_&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+Tv.replace(/\./g,"-")]=1,Ga()?e["framework.cordova"]=1:El()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Sa.getInstance().currentlyOnline();return oa(this.interruptReasons_)&&e}}Zt.nextPersistentConnectionId_=0;Zt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
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
 */class re{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new re(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class wc{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const r=new re(Ir,e),i=new re(Ir,t);return this.compare(r,i)!==0}minPost(){return re.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */let Bo;class Kv extends wc{static get __EMPTY_NODE(){return Bo}static set __EMPTY_NODE(e){Bo=e}compare(e,t){return Sr(e.name,t.name)}isDefinedOn(e){throw vi("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return re.MIN}maxPost(){return new re(Fn,Bo)}makePost(e,t){return L(typeof e=="string","KeyIndex indexValue must always be a string."),new re(e,Bo)}toString(){return".key"}}const ur=new Kv;/**
 * @license
 * Copyright 2017 Google LLC
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
 */class qo{constructor(e,t,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?r(e.key,t):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Me{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r??Me.RED,this.left=i??ct.EMPTY_NODE,this.right=s??ct.EMPTY_NODE}copy(e,t,r,i,s){return new Me(e??this.key,t??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i=i.copy(null,t,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return ct.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let r,i;if(r=this,t(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),t(e,r.key)===0){if(r.right.isEmpty())return ct.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Me.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Me.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Me.RED=!0;Me.BLACK=!1;class zP{copy(e,t,r,i,s){return this}insert(e,t,r){return new Me(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class ct{constructor(e,t=ct.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new ct(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Me.BLACK,null,null))}remove(e){return new ct(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Me.BLACK,null,null))}get(e){let t,r=this.root_;for(;!r.isEmpty();){if(t=this.comparator_(e,r.key),t===0)return r.value;t<0?r=r.left:t>0&&(r=r.right)}return null}getPredecessorKey(e){let t,r=this.root_,i=null;for(;!r.isEmpty();)if(t=this.comparator_(e,r.key),t===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else t<0?r=r.left:t>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new qo(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new qo(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new qo(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new qo(this.root_,null,this.comparator_,!0,e)}}ct.EMPTY_NODE=new zP;/**
 * @license
 * Copyright 2017 Google LLC
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
 */function KP(n,e){return Sr(n.name,e.name)}function Lh(n,e){return Sr(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */let ol;function HP(n){ol=n}const Hv=function(n){return typeof n=="number"?"number:"+Cv(n):"string:"+n},Qv=function(n){if(n.isLeafNode()){const e=n.val();L(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Ft(e,".sv"),"Priority must be a string or number.")}else L(n===ol||n.isEmpty(),"priority of unexpected type.");L(n===ol||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
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
 */let w_;class Ve{constructor(e,t=Ve.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,L(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Qv(this.priorityNode_)}static set __childrenNodeConstructor(e){w_=e}static get __childrenNodeConstructor(){return w_}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ve(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ve.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return te(e)?this:ee(e)===".priority"?this.priorityNode_:Ve.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:Ve.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const r=ee(e);return r===null?t:t.isEmpty()&&r!==".priority"?this:(L(r!==".priority"||Un(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Ve.__childrenNodeConstructor.EMPTY_NODE.updateChild(me(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Hv(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=Cv(this.value_):e+=this.value_,this.lazyHash_=Av(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ve.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ve.__childrenNodeConstructor?-1:(L(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,r=typeof this.value_,i=Ve.VALUE_TYPE_ORDER.indexOf(t),s=Ve.VALUE_TYPE_ORDER.indexOf(r);return L(i>=0,"Unknown leaf type: "+t),L(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}Ve.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
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
 */let Yv,Jv;function QP(n){Yv=n}function YP(n){Jv=n}class JP extends wc{compare(e,t){const r=e.node.getPriority(),i=t.node.getPriority(),s=r.compareTo(i);return s===0?Sr(e.name,t.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return re.MIN}maxPost(){return new re(Fn,new Ve("[PRIORITY-POST]",Jv))}makePost(e,t){const r=Yv(e);return new re(t,new Ve("[PRIORITY-POST]",r))}toString(){return".priority"}}const Ie=new JP;/**
 * @license
 * Copyright 2017 Google LLC
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
 */const XP=Math.log(2);class ZP{constructor(e){const t=s=>parseInt(Math.log(s)/XP,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Pa=function(n,e,t,r){n.sort(e);const i=function(u,l){const d=l-u;let f,_;if(d===0)return null;if(d===1)return f=n[u],_=t?t(f):f,new Me(_,f.node,Me.BLACK,null,null);{const y=parseInt(d/2,10)+u,A=i(u,y),P=i(y+1,l);return f=n[y],_=t?t(f):f,new Me(_,f.node,Me.BLACK,A,P)}},s=function(u){let l=null,d=null,f=n.length;const _=function(A,P){const S=f-A,U=f;f-=A;const q=i(S+1,U),B=n[S],G=t?t(B):B;y(new Me(G,B.node,P,null,q))},y=function(A){l?(l.left=A,l=A):(d=A,l=A)};for(let A=0;A<u.count;++A){const P=u.nextBitIsOne(),S=Math.pow(2,u.count-(A+1));P?_(S,Me.BLACK):(_(S,Me.BLACK),_(S,Me.RED))}return d},o=new ZP(n.length),a=s(o);return new ct(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
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
 */let gu;const Br={};class Yt{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return L(Br&&Ie,"ChildrenNode.ts has not been loaded"),gu=gu||new Yt({".priority":Br},{".priority":Ie}),gu}get(e){const t=Zr(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof ct?t:null}hasIndex(e){return Ft(this.indexSet_,e.toString())}addIndex(e,t){L(e!==ur,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=t.getIterator(re.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=Pa(r,e.getCompare()):a=Br;const u=e.toString(),l=Object.assign({},this.indexSet_);l[u]=e;const d=Object.assign({},this.indexes_);return d[u]=a,new Yt(d,l)}addToIndexes(e,t){const r=aa(this.indexes_,(i,s)=>{const o=Zr(this.indexSet_,s);if(L(o,"Missing index implementation for "+s),i===Br)if(o.isDefinedOn(e.node)){const a=[],u=t.getIterator(re.Wrap);let l=u.getNext();for(;l;)l.name!==e.name&&a.push(l),l=u.getNext();return a.push(e),Pa(a,o.getCompare())}else return Br;else{const a=t.get(e.name);let u=i;return a&&(u=u.remove(new re(e.name,a))),u.insert(e,e.node)}});return new Yt(r,this.indexSet_)}removeFromIndexes(e,t){const r=aa(this.indexes_,i=>{if(i===Br)return i;{const s=t.get(e.name);return s?i.remove(new re(e.name,s)):i}});return new Yt(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */let Zi;class H{constructor(e,t,r){this.children_=e,this.priorityNode_=t,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&Qv(this.priorityNode_),this.children_.isEmpty()&&L(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Zi||(Zi=new H(new ct(Lh),null,Yt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Zi}updatePriority(e){return this.children_.isEmpty()?this:new H(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?Zi:t}}getChild(e){const t=ee(e);return t===null?this:this.getImmediateChild(t).getChild(me(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(L(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const r=new re(e,t);let i,s;t.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,t),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?Zi:this.priorityNode_;return new H(i,o,s)}}updateChild(e,t){const r=ee(e);if(r===null)return t;{L(ee(e)!==".priority"||Un(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(me(e),t);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let r=0,i=0,s=!0;if(this.forEachChild(Ie,(o,a)=>{t[o]=a.val(e),r++,s&&H.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Hv(this.getPriority().val())+":"),this.forEachChild(Ie,(t,r)=>{const i=r.hash();i!==""&&(e+=":"+t+":"+i)}),this.lazyHash_=e===""?"":Av(e)}return this.lazyHash_}getPredecessorChildName(e,t,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new re(e,t));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const r=t.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new re(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const r=t.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new re(t,this.children_.get(t)):null}forEachChild(e,t){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>t(i.name,i.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const r=this.resolveIndex_(t);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,re.Wrap);let s=i.peek();for(;s!=null&&t.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const r=this.resolveIndex_(t);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,re.Wrap);let s=i.peek();for(;s!=null&&t.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===oo?-1:0}withIndex(e){if(e===ur||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new H(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===ur||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const r=this.getIterator(Ie),i=t.getIterator(Ie);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===ur?null:this.indexMap_.get(e.toString())}}H.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class ek extends H{constructor(){super(new ct(Lh),H.EMPTY_NODE,Yt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return H.EMPTY_NODE}isEmpty(){return!1}}const oo=new ek;Object.defineProperties(re,{MIN:{value:new re(Ir,H.EMPTY_NODE)},MAX:{value:new re(Fn,oo)}});Kv.__EMPTY_NODE=H.EMPTY_NODE;Ve.__childrenNodeConstructor=H;HP(oo);YP(oo);/**
 * @license
 * Copyright 2017 Google LLC
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
 */const tk=!0;function De(n,e=null){if(n===null)return H.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),L(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new Ve(t,De(e))}if(!(n instanceof Array)&&tk){const t=[];let r=!1;if(Ye(n,(o,a)=>{if(o.substring(0,1)!=="."){const u=De(a);u.isEmpty()||(r=r||!u.getPriority().isEmpty(),t.push(new re(o,u)))}}),t.length===0)return H.EMPTY_NODE;const s=Pa(t,KP,o=>o.name,Lh);if(r){const o=Pa(t,Ie.getCompare());return new H(s,De(e),new Yt({".priority":o},{".priority":Ie}))}else return new H(s,De(e),Yt.Default)}else{let t=H.EMPTY_NODE;return Ye(n,(r,i)=>{if(Ft(n,r)&&r.substring(0,1)!=="."){const s=De(i);(s.isLeafNode()||!s.isEmpty())&&(t=t.updateImmediateChild(r,s))}}),t.updatePriority(De(e))}}QP(De);/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Mh extends wc{constructor(e){super(),this.indexPath_=e,L(!te(e)&&ee(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const r=this.extractChild(e.node),i=this.extractChild(t.node),s=r.compareTo(i);return s===0?Sr(e.name,t.name):s}makePost(e,t){const r=De(e),i=H.EMPTY_NODE.updateChild(this.indexPath_,r);return new re(t,i)}maxPost(){const e=H.EMPTY_NODE.updateChild(this.indexPath_,oo);return new re(Fn,e)}toString(){return Vs(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class nk extends wc{compare(e,t){const r=e.node.compareTo(t.node);return r===0?Sr(e.name,t.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return re.MIN}maxPost(){return re.MAX}makePost(e,t){const r=De(e);return new re(t,r)}toString(){return".value"}}const Xv=new nk;/**
 * @license
 * Copyright 2017 Google LLC
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
 */function Zv(n){return{type:"value",snapshotNode:n}}function di(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function Ls(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function Ms(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function rk(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Fh{constructor(e){this.index_=e}updateChild(e,t,r,i,s,o){L(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(t)?o.trackChildChange(Ls(t,a)):L(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(di(t,r)):o.trackChildChange(Ms(t,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(t,r).withIndex(this.index_)}updateFullNode(e,t,r){return r!=null&&(e.isLeafNode()||e.forEachChild(Ie,(i,s)=>{t.hasChild(i)||r.trackChildChange(Ls(i,s))}),t.isLeafNode()||t.forEachChild(Ie,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(Ms(i,s,o))}else r.trackChildChange(di(i,s))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?H.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Fs{constructor(e){this.indexedFilter_=new Fh(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Fs.getStartPost_(e),this.endPost_=Fs.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&r}updateChild(e,t,r,i,s,o){return this.matches(new re(t,r))||(r=H.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,r,i,s,o)}updateFullNode(e,t,r){t.isLeafNode()&&(t=H.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(H.EMPTY_NODE);const s=this;return t.forEachChild(Ie,(o,a)=>{s.matches(new re(o,a))||(i=i.updateImmediateChild(o,H.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class ik{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=t=>{const r=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new Fs(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,r,i,s,o){return this.rangedFilter_.matches(new re(t,r))||(r=H.EMPTY_NODE),e.getImmediateChild(t).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,r,i,s,o):this.fullLimitUpdateChild_(e,t,r,s,o)}updateFullNode(e,t,r){let i;if(t.isLeafNode()||t.isEmpty())i=H.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){i=H.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=t.withIndex(this.index_),i=i.updatePriority(H.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,H.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,r,i,s){let o;if(this.reverse_){const f=this.index_.getCompare();o=(_,y)=>f(y,_)}else o=this.index_.getCompare();const a=e;L(a.numChildren()===this.limit_,"");const u=new re(t,r),l=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),d=this.rangedFilter_.matches(u);if(a.hasChild(t)){const f=a.getImmediateChild(t);let _=i.getChildAfterChild(this.index_,l,this.reverse_);for(;_!=null&&(_.name===t||a.hasChild(_.name));)_=i.getChildAfterChild(this.index_,_,this.reverse_);const y=_==null?1:o(_,u);if(d&&!r.isEmpty()&&y>=0)return s!=null&&s.trackChildChange(Ms(t,r,f)),a.updateImmediateChild(t,r);{s!=null&&s.trackChildChange(Ls(t,f));const P=a.updateImmediateChild(t,H.EMPTY_NODE);return _!=null&&this.rangedFilter_.matches(_)?(s!=null&&s.trackChildChange(di(_.name,_.node)),P.updateImmediateChild(_.name,_.node)):P}}else return r.isEmpty()?e:d&&o(l,u)>=0?(s!=null&&(s.trackChildChange(Ls(l.name,l.node)),s.trackChildChange(di(t,r))),a.updateImmediateChild(t,r).updateImmediateChild(l.name,H.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Uh{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Ie}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return L(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return L(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Ir}hasEnd(){return this.endSet_}getIndexEndValue(){return L(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return L(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Fn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return L(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Ie}copy(){const e=new Uh;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function sk(n){return n.loadsAllData()?new Fh(n.getIndex()):n.hasLimit()?new ik(n):new Fs(n)}function ok(n,e,t){const r=n.copy();return r.startSet_=!0,e===void 0&&(e=null),r.indexStartValue_=e,t!=null?(r.startNameSet_=!0,r.indexStartName_=t):(r.startNameSet_=!1,r.indexStartName_=""),r}function ak(n,e,t){const r=n.copy();return r.endSet_=!0,e===void 0&&(e=null),r.indexEndValue_=e,t!==void 0?(r.endNameSet_=!0,r.indexEndName_=t):(r.endNameSet_=!1,r.indexEndName_=""),r}function ck(n,e){const t=n.copy();return t.index_=e,t}function A_(n){const e={};if(n.isDefault())return e;let t;if(n.index_===Ie?t="$priority":n.index_===Xv?t="$value":n.index_===ur?t="$key":(L(n.index_ instanceof Mh,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=Fe(t),n.startSet_){const r=n.startAfterSet_?"startAfter":"startAt";e[r]=Fe(n.indexStartValue_),n.startNameSet_&&(e[r]+=","+Fe(n.indexStartName_))}if(n.endSet_){const r=n.endBeforeSet_?"endBefore":"endAt";e[r]=Fe(n.indexEndValue_),n.endNameSet_&&(e[r]+=","+Fe(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function R_(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==Ie&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class ka extends jv{constructor(e,t,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=so("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(L(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=ka.getListenId_(e,r),a={};this.listens_[o]=a;const u=A_(e._queryParams);this.restRequest_(s+".json",u,(l,d)=>{let f=d;if(l===404&&(f=null,l=null),l===null&&this.onDataUpdate_(s,f,!1,r),Zr(this.listens_,o)===a){let _;l?l===401?_="permission_denied":_="rest_error:"+l:_="ok",i(_,null)}})}unlisten(e,t){const r=ka.getListenId_(e,t);delete this.listens_[r]}get(e){const t=A_(e._queryParams),r=e._path.toString(),i=new zt;return this.restRequest_(r+".json",t,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,t={},r){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(t.auth=i.accessToken),s&&s.token&&(t.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+cn(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let u=null;if(a.status>=200&&a.status<300){try{u=Ts(a.responseText)}catch{ut("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,u)}else a.status!==401&&a.status!==404&&ut("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class uk{constructor(){this.rootNode_=H.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function Na(){return{value:null,children:new Map}}function Ri(n,e,t){if(te(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const r=ee(e);n.children.has(r)||n.children.set(r,Na());const i=n.children.get(r);e=me(e),Ri(i,e,t)}}function al(n,e){if(te(e))return n.value=null,n.children.clear(),!0;if(n.value!==null){if(n.value.isLeafNode())return!1;{const t=n.value;return n.value=null,t.forEachChild(Ie,(r,i)=>{Ri(n,new de(r),i)}),al(n,e)}}else if(n.children.size>0){const t=ee(e);return e=me(e),n.children.has(t)&&al(n.children.get(t),e)&&n.children.delete(t),n.children.size===0}else return!0}function cl(n,e,t){n.value!==null?t(e,n.value):lk(n,(r,i)=>{const s=new de(e.toString()+"/"+r);cl(i,s,t)})}function lk(n,e){n.children.forEach((t,r)=>{e(r,t)})}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class hk{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&Ye(this.last_,(r,i)=>{t[r]=t[r]-i}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const C_=10*1e3,dk=30*1e3,fk=5*60*1e3;class pk{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new hk(e);const r=C_+(dk-C_)*Math.random();ms(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),t={};let r=!1;Ye(e,(i,s)=>{s>0&&Ft(this.statsToReport_,i)&&(t[i]=s,r=!0)}),r&&this.server_.reportStats(t),ms(this.reportStats_.bind(this),Math.floor(Math.random()*2*fk))}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */var wt;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(wt||(wt={}));function eI(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Bh(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function qh(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Da{constructor(e,t,r){this.path=e,this.affectedTree=t,this.revert=r,this.type=wt.ACK_USER_WRITE,this.source=eI()}operationForChild(e){if(te(this.path)){if(this.affectedTree.value!=null)return L(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new de(e));return new Da(le(),t,this.revert)}}else return L(ee(this.path)===e,"operationForChild called for unrelated child."),new Da(me(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Us{constructor(e,t){this.source=e,this.path=t,this.type=wt.LISTEN_COMPLETE}operationForChild(e){return te(this.path)?new Us(this.source,le()):new Us(this.source,me(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Er{constructor(e,t,r){this.source=e,this.path=t,this.snap=r,this.type=wt.OVERWRITE}operationForChild(e){return te(this.path)?new Er(this.source,le(),this.snap.getImmediateChild(e)):new Er(this.source,me(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Bs{constructor(e,t,r){this.source=e,this.path=t,this.children=r,this.type=wt.MERGE}operationForChild(e){if(te(this.path)){const t=this.children.subtree(new de(e));return t.isEmpty()?null:t.value?new Er(this.source,le(),t.value):new Bs(this.source,le(),t)}else return L(ee(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Bs(this.source,me(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Tr{constructor(e,t,r){this.node_=e,this.fullyInitialized_=t,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(te(e))return this.isFullyInitialized()&&!this.filtered_;const t=ee(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class _k{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function mk(n,e,t,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(rk(o.childName,o.snapshotNode))}),es(n,i,"child_removed",e,r,t),es(n,i,"child_added",e,r,t),es(n,i,"child_moved",s,r,t),es(n,i,"child_changed",e,r,t),es(n,i,"value",e,r,t),i}function es(n,e,t,r,i,s){const o=r.filter(a=>a.type===t);o.sort((a,u)=>yk(n,a,u)),o.forEach(a=>{const u=gk(n,a,s);i.forEach(l=>{l.respondsTo(a.type)&&e.push(l.createEvent(u,n.query_))})})}function gk(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function yk(n,e,t){if(e.childName==null||t.childName==null)throw vi("Should only compare child_ events.");const r=new re(e.childName,e.snapshotNode),i=new re(t.childName,t.snapshotNode);return n.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function Ac(n,e){return{eventCache:n,serverCache:e}}function gs(n,e,t,r){return Ac(new Tr(e,t,r),n.serverCache)}function tI(n,e,t,r){return Ac(n.eventCache,new Tr(e,t,r))}function ul(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function wr(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
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
 */let yu;const vk=()=>(yu||(yu=new ct(nP)),yu);class ye{constructor(e,t=vk()){this.value=e,this.children=t}static fromObject(e){let t=new ye(null);return Ye(e,(r,i)=>{t=t.set(new de(r),i)}),t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:le(),value:this.value};if(te(e))return null;{const r=ee(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(me(e),t);return s!=null?{path:Pe(new de(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(te(e))return this;{const t=ee(e),r=this.children.get(t);return r!==null?r.subtree(me(e)):new ye(null)}}set(e,t){if(te(e))return new ye(t,this.children);{const r=ee(e),s=(this.children.get(r)||new ye(null)).set(me(e),t),o=this.children.insert(r,s);return new ye(this.value,o)}}remove(e){if(te(e))return this.children.isEmpty()?new ye(null):new ye(null,this.children);{const t=ee(e),r=this.children.get(t);if(r){const i=r.remove(me(e));let s;return i.isEmpty()?s=this.children.remove(t):s=this.children.insert(t,i),this.value===null&&s.isEmpty()?new ye(null):new ye(this.value,s)}else return this}}get(e){if(te(e))return this.value;{const t=ee(e),r=this.children.get(t);return r?r.get(me(e)):null}}setTree(e,t){if(te(e))return t;{const r=ee(e),s=(this.children.get(r)||new ye(null)).setTree(me(e),t);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new ye(this.value,o)}}fold(e){return this.fold_(le(),e)}fold_(e,t){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(Pe(e,i),t)}),t(e,this.value,r)}findOnPath(e,t){return this.findOnPath_(e,le(),t)}findOnPath_(e,t,r){const i=this.value?r(t,this.value):!1;if(i)return i;if(te(e))return null;{const s=ee(e),o=this.children.get(s);return o?o.findOnPath_(me(e),Pe(t,s),r):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,le(),t)}foreachOnPath_(e,t,r){if(te(e))return this;{this.value&&r(t,this.value);const i=ee(e),s=this.children.get(i);return s?s.foreachOnPath_(me(e),Pe(t,i),r):new ye(null)}}foreach(e){this.foreach_(le(),e)}foreach_(e,t){this.children.inorderTraversal((r,i)=>{i.foreach_(Pe(e,r),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,r)=>{r.value&&e(t,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Ct{constructor(e){this.writeTree_=e}static empty(){return new Ct(new ye(null))}}function ys(n,e,t){if(te(e))return new Ct(new ye(t));{const r=n.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=at(i,e);return s=s.updateChild(o,t),new Ct(n.writeTree_.set(i,s))}else{const i=new ye(t),s=n.writeTree_.setTree(e,i);return new Ct(s)}}}function b_(n,e,t){let r=n;return Ye(t,(i,s)=>{r=ys(r,Pe(e,i),s)}),r}function S_(n,e){if(te(e))return Ct.empty();{const t=n.writeTree_.setTree(e,new ye(null));return new Ct(t)}}function ll(n,e){return Pr(n,e)!=null}function Pr(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(at(t.path,e)):null}function P_(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(Ie,(r,i)=>{e.push(new re(r,i))}):n.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new re(r,i.value))}),e}function On(n,e){if(te(e))return n;{const t=Pr(n,e);return t!=null?new Ct(new ye(t)):new Ct(n.writeTree_.subtree(e))}}function hl(n){return n.writeTree_.isEmpty()}function fi(n,e){return nI(le(),n.writeTree_,e)}function nI(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(L(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):t=nI(Pe(n,i),s,t)}),!t.getChild(n).isEmpty()&&r!==null&&(t=t.updateChild(Pe(n,".priority"),r)),t}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function $h(n,e){return oI(e,n)}function Ik(n,e,t,r,i){L(r>n.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),n.allWrites.push({path:e,snap:t,writeId:r,visible:i}),i&&(n.visibleWrites=ys(n.visibleWrites,e,t)),n.lastWriteId=r}function Ek(n,e){for(let t=0;t<n.allWrites.length;t++){const r=n.allWrites[t];if(r.writeId===e)return r}return null}function Tk(n,e){const t=n.allWrites.findIndex(a=>a.writeId===e);L(t>=0,"removeWrite called with nonexistent writeId.");const r=n.allWrites[t];n.allWrites.splice(t,1);let i=r.visible,s=!1,o=n.allWrites.length-1;for(;i&&o>=0;){const a=n.allWrites[o];a.visible&&(o>=t&&wk(a,r.path)?i=!1:gt(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return Ak(n),!0;if(r.snap)n.visibleWrites=S_(n.visibleWrites,r.path);else{const a=r.children;Ye(a,u=>{n.visibleWrites=S_(n.visibleWrites,Pe(r.path,u))})}return!0}else return!1}function wk(n,e){if(n.snap)return gt(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&gt(Pe(n.path,t),e))return!0;return!1}function Ak(n){n.visibleWrites=rI(n.allWrites,Rk,le()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function Rk(n){return n.visible}function rI(n,e,t){let r=Ct.empty();for(let i=0;i<n.length;++i){const s=n[i];if(e(s)){const o=s.path;let a;if(s.snap)gt(t,o)?(a=at(t,o),r=ys(r,a,s.snap)):gt(o,t)&&(a=at(o,t),r=ys(r,le(),s.snap.getChild(a)));else if(s.children){if(gt(t,o))a=at(t,o),r=b_(r,a,s.children);else if(gt(o,t))if(a=at(o,t),te(a))r=b_(r,le(),s.children);else{const u=Zr(s.children,ee(a));if(u){const l=u.getChild(me(a));r=ys(r,le(),l)}}}else throw vi("WriteRecord should have .snap or .children")}}return r}function iI(n,e,t,r,i){if(!r&&!i){const s=Pr(n.visibleWrites,e);if(s!=null)return s;{const o=On(n.visibleWrites,e);if(hl(o))return t;if(t==null&&!ll(o,le()))return null;{const a=t||H.EMPTY_NODE;return fi(o,a)}}}else{const s=On(n.visibleWrites,e);if(!i&&hl(s))return t;if(!i&&t==null&&!ll(s,le()))return null;{const o=function(l){return(l.visible||i)&&(!r||!~r.indexOf(l.writeId))&&(gt(l.path,e)||gt(e,l.path))},a=rI(n.allWrites,o,e),u=t||H.EMPTY_NODE;return fi(a,u)}}}function Ck(n,e,t){let r=H.EMPTY_NODE;const i=Pr(n.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Ie,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(t){const s=On(n.visibleWrites,e);return t.forEachChild(Ie,(o,a)=>{const u=fi(On(s,new de(o)),a);r=r.updateImmediateChild(o,u)}),P_(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=On(n.visibleWrites,e);return P_(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function bk(n,e,t,r,i){L(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=Pe(e,t);if(ll(n.visibleWrites,s))return null;{const o=On(n.visibleWrites,s);return hl(o)?i.getChild(t):fi(o,i.getChild(t))}}function Sk(n,e,t,r){const i=Pe(e,t),s=Pr(n.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(t)){const o=On(n.visibleWrites,i);return fi(o,r.getNode().getImmediateChild(t))}else return null}function Pk(n,e){return Pr(n.visibleWrites,e)}function kk(n,e,t,r,i,s,o){let a;const u=On(n.visibleWrites,e),l=Pr(u,le());if(l!=null)a=l;else if(t!=null)a=fi(u,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const d=[],f=o.getCompare(),_=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let y=_.getNext();for(;y&&d.length<i;)f(y,r)!==0&&d.push(y),y=_.getNext();return d}else return[]}function Nk(){return{visibleWrites:Ct.empty(),allWrites:[],lastWriteId:-1}}function Oa(n,e,t,r){return iI(n.writeTree,n.treePath,e,t,r)}function jh(n,e){return Ck(n.writeTree,n.treePath,e)}function k_(n,e,t,r){return bk(n.writeTree,n.treePath,e,t,r)}function xa(n,e){return Pk(n.writeTree,Pe(n.treePath,e))}function Dk(n,e,t,r,i,s){return kk(n.writeTree,n.treePath,e,t,r,i,s)}function Gh(n,e,t){return Sk(n.writeTree,n.treePath,e,t)}function sI(n,e){return oI(Pe(n.treePath,e),n.writeTree)}function oI(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Ok{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,r=e.childName;L(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),L(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(t==="child_added"&&s==="child_removed")this.changeMap.set(r,Ms(r,e.snapshotNode,i.snapshotNode));else if(t==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(t==="child_removed"&&s==="child_changed")this.changeMap.set(r,Ls(r,i.oldSnap));else if(t==="child_changed"&&s==="child_added")this.changeMap.set(r,di(r,e.snapshotNode));else if(t==="child_changed"&&s==="child_changed")this.changeMap.set(r,Ms(r,e.snapshotNode,i.oldSnap));else throw vi("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class xk{getCompleteChild(e){return null}getChildAfterChild(e,t,r){return null}}const aI=new xk;class Wh{constructor(e,t,r=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=r}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Tr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Gh(this.writes_,e,r)}}getChildAfterChild(e,t,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:wr(this.viewCache_),s=Dk(this.writes_,i,t,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function Vk(n){return{filter:n}}function Lk(n,e){L(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),L(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function Mk(n,e,t,r,i){const s=new Ok;let o,a;if(t.type===wt.OVERWRITE){const l=t;l.source.fromUser?o=dl(n,e,l.path,l.snap,r,i,s):(L(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered()&&!te(l.path),o=Va(n,e,l.path,l.snap,r,i,a,s))}else if(t.type===wt.MERGE){const l=t;l.source.fromUser?o=Uk(n,e,l.path,l.children,r,i,s):(L(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered(),o=fl(n,e,l.path,l.children,r,i,a,s))}else if(t.type===wt.ACK_USER_WRITE){const l=t;l.revert?o=$k(n,e,l.path,r,i,s):o=Bk(n,e,l.path,l.affectedTree,r,i,s)}else if(t.type===wt.LISTEN_COMPLETE)o=qk(n,e,t.path,r,s);else throw vi("Unknown operation type: "+t.type);const u=s.getChanges();return Fk(e,o,u),{viewCache:o,changes:u}}function Fk(n,e,t){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=ul(n);(t.length>0||!n.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&t.push(Zv(ul(e)))}}function cI(n,e,t,r,i,s){const o=e.eventCache;if(xa(r,t)!=null)return e;{let a,u;if(te(t))if(L(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const l=wr(e),d=l instanceof H?l:H.EMPTY_NODE,f=jh(r,d);a=n.filter.updateFullNode(e.eventCache.getNode(),f,s)}else{const l=Oa(r,wr(e));a=n.filter.updateFullNode(e.eventCache.getNode(),l,s)}else{const l=ee(t);if(l===".priority"){L(Un(t)===1,"Can't have a priority with additional path components");const d=o.getNode();u=e.serverCache.getNode();const f=k_(r,t,d,u);f!=null?a=n.filter.updatePriority(d,f):a=o.getNode()}else{const d=me(t);let f;if(o.isCompleteForChild(l)){u=e.serverCache.getNode();const _=k_(r,t,o.getNode(),u);_!=null?f=o.getNode().getImmediateChild(l).updateChild(d,_):f=o.getNode().getImmediateChild(l)}else f=Gh(r,l,e.serverCache);f!=null?a=n.filter.updateChild(o.getNode(),l,f,d,i,s):a=o.getNode()}}return gs(e,a,o.isFullyInitialized()||te(t),n.filter.filtersNodes())}}function Va(n,e,t,r,i,s,o,a){const u=e.serverCache;let l;const d=o?n.filter:n.filter.getIndexedFilter();if(te(t))l=d.updateFullNode(u.getNode(),r,null);else if(d.filtersNodes()&&!u.isFiltered()){const y=u.getNode().updateChild(t,r);l=d.updateFullNode(u.getNode(),y,null)}else{const y=ee(t);if(!u.isCompleteForPath(t)&&Un(t)>1)return e;const A=me(t),S=u.getNode().getImmediateChild(y).updateChild(A,r);y===".priority"?l=d.updatePriority(u.getNode(),S):l=d.updateChild(u.getNode(),y,S,A,aI,null)}const f=tI(e,l,u.isFullyInitialized()||te(t),d.filtersNodes()),_=new Wh(i,f,s);return cI(n,f,t,i,_,a)}function dl(n,e,t,r,i,s,o){const a=e.eventCache;let u,l;const d=new Wh(i,e,s);if(te(t))l=n.filter.updateFullNode(e.eventCache.getNode(),r,o),u=gs(e,l,!0,n.filter.filtersNodes());else{const f=ee(t);if(f===".priority")l=n.filter.updatePriority(e.eventCache.getNode(),r),u=gs(e,l,a.isFullyInitialized(),a.isFiltered());else{const _=me(t),y=a.getNode().getImmediateChild(f);let A;if(te(_))A=r;else{const P=d.getCompleteChild(f);P!=null?Oh(_)===".priority"&&P.getChild(Wv(_)).isEmpty()?A=P:A=P.updateChild(_,r):A=H.EMPTY_NODE}if(y.equals(A))u=e;else{const P=n.filter.updateChild(a.getNode(),f,A,_,d,o);u=gs(e,P,a.isFullyInitialized(),n.filter.filtersNodes())}}}return u}function N_(n,e){return n.eventCache.isCompleteForChild(e)}function Uk(n,e,t,r,i,s,o){let a=e;return r.foreach((u,l)=>{const d=Pe(t,u);N_(e,ee(d))&&(a=dl(n,a,d,l,i,s,o))}),r.foreach((u,l)=>{const d=Pe(t,u);N_(e,ee(d))||(a=dl(n,a,d,l,i,s,o))}),a}function D_(n,e,t){return t.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function fl(n,e,t,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let u=e,l;te(t)?l=r:l=new ye(null).setTree(t,r);const d=e.serverCache.getNode();return l.children.inorderTraversal((f,_)=>{if(d.hasChild(f)){const y=e.serverCache.getNode().getImmediateChild(f),A=D_(n,y,_);u=Va(n,u,new de(f),A,i,s,o,a)}}),l.children.inorderTraversal((f,_)=>{const y=!e.serverCache.isCompleteForChild(f)&&_.value===null;if(!d.hasChild(f)&&!y){const A=e.serverCache.getNode().getImmediateChild(f),P=D_(n,A,_);u=Va(n,u,new de(f),P,i,s,o,a)}}),u}function Bk(n,e,t,r,i,s,o){if(xa(i,t)!=null)return e;const a=e.serverCache.isFiltered(),u=e.serverCache;if(r.value!=null){if(te(t)&&u.isFullyInitialized()||u.isCompleteForPath(t))return Va(n,e,t,u.getNode().getChild(t),i,s,a,o);if(te(t)){let l=new ye(null);return u.getNode().forEachChild(ur,(d,f)=>{l=l.set(new de(d),f)}),fl(n,e,t,l,i,s,a,o)}else return e}else{let l=new ye(null);return r.foreach((d,f)=>{const _=Pe(t,d);u.isCompleteForPath(_)&&(l=l.set(d,u.getNode().getChild(_)))}),fl(n,e,t,l,i,s,a,o)}}function qk(n,e,t,r,i){const s=e.serverCache,o=tI(e,s.getNode(),s.isFullyInitialized()||te(t),s.isFiltered());return cI(n,o,t,r,aI,i)}function $k(n,e,t,r,i,s){let o;if(xa(r,t)!=null)return e;{const a=new Wh(r,e,i),u=e.eventCache.getNode();let l;if(te(t)||ee(t)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=Oa(r,wr(e));else{const f=e.serverCache.getNode();L(f instanceof H,"serverChildren would be complete if leaf node"),d=jh(r,f)}d=d,l=n.filter.updateFullNode(u,d,s)}else{const d=ee(t);let f=Gh(r,d,e.serverCache);f==null&&e.serverCache.isCompleteForChild(d)&&(f=u.getImmediateChild(d)),f!=null?l=n.filter.updateChild(u,d,f,me(t),a,s):e.eventCache.getNode().hasChild(d)?l=n.filter.updateChild(u,d,H.EMPTY_NODE,me(t),a,s):l=u,l.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Oa(r,wr(e)),o.isLeafNode()&&(l=n.filter.updateFullNode(l,o,s)))}return o=e.serverCache.isFullyInitialized()||xa(r,le())!=null,gs(e,l,o,n.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class jk{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new Fh(r.getIndex()),s=sk(r);this.processor_=Vk(s);const o=t.serverCache,a=t.eventCache,u=i.updateFullNode(H.EMPTY_NODE,o.getNode(),null),l=s.updateFullNode(H.EMPTY_NODE,a.getNode(),null),d=new Tr(u,o.isFullyInitialized(),i.filtersNodes()),f=new Tr(l,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=Ac(f,d),this.eventGenerator_=new _k(this.query_)}get query(){return this.query_}}function Gk(n){return n.viewCache_.serverCache.getNode()}function Wk(n,e){const t=wr(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!te(e)&&!t.getImmediateChild(ee(e)).isEmpty())?t.getChild(e):null}function O_(n){return n.eventRegistrations_.length===0}function zk(n,e){n.eventRegistrations_.push(e)}function x_(n,e,t){const r=[];if(t){L(e==null,"A cancel should cancel all event registrations.");const i=n.query._path;n.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(t,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<n.eventRegistrations_.length;++s){const o=n.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(n.eventRegistrations_.slice(s+1));break}}n.eventRegistrations_=i}else n.eventRegistrations_=[];return r}function V_(n,e,t,r){e.type===wt.MERGE&&e.source.queryId!==null&&(L(wr(n.viewCache_),"We should always have a full cache before handling merges"),L(ul(n.viewCache_),"Missing event cache, even though we have a server cache"));const i=n.viewCache_,s=Mk(n.processor_,i,e,t,r);return Lk(n.processor_,s.viewCache),L(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=s.viewCache,uI(n,s.changes,s.viewCache.eventCache.getNode(),null)}function Kk(n,e){const t=n.viewCache_.eventCache,r=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(Ie,(s,o)=>{r.push(di(s,o))}),t.isFullyInitialized()&&r.push(Zv(t.getNode())),uI(n,r,t.getNode(),e)}function uI(n,e,t,r){const i=r?[r]:n.eventRegistrations_;return mk(n.eventGenerator_,e,t,i)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */let La;class Hk{constructor(){this.views=new Map}}function Qk(n){L(!La,"__referenceConstructor has already been defined"),La=n}function Yk(){return L(La,"Reference.ts has not been loaded"),La}function Jk(n){return n.views.size===0}function zh(n,e,t,r){const i=e.source.queryId;if(i!==null){const s=n.views.get(i);return L(s!=null,"SyncTree gave us an op for an invalid query."),V_(s,e,t,r)}else{let s=[];for(const o of n.views.values())s=s.concat(V_(o,e,t,r));return s}}function Xk(n,e,t,r,i){const s=e._queryIdentifier,o=n.views.get(s);if(!o){let a=Oa(t,i?r:null),u=!1;a?u=!0:r instanceof H?(a=jh(t,r),u=!1):(a=H.EMPTY_NODE,u=!1);const l=Ac(new Tr(a,u,!1),new Tr(r,i,!1));return new jk(e,l)}return o}function Zk(n,e,t,r,i,s){const o=Xk(n,e,r,i,s);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),zk(o,t),Kk(o,t)}function eN(n,e,t,r){const i=e._queryIdentifier,s=[];let o=[];const a=Bn(n);if(i==="default")for(const[u,l]of n.views.entries())o=o.concat(x_(l,t,r)),O_(l)&&(n.views.delete(u),l.query._queryParams.loadsAllData()||s.push(l.query));else{const u=n.views.get(i);u&&(o=o.concat(x_(u,t,r)),O_(u)&&(n.views.delete(i),u.query._queryParams.loadsAllData()||s.push(u.query)))}return a&&!Bn(n)&&s.push(new(Yk())(e._repo,e._path)),{removed:s,events:o}}function lI(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function Yr(n,e){let t=null;for(const r of n.views.values())t=t||Wk(r,e);return t}function hI(n,e){if(e._queryParams.loadsAllData())return Rc(n);{const r=e._queryIdentifier;return n.views.get(r)}}function dI(n,e){return hI(n,e)!=null}function Bn(n){return Rc(n)!=null}function Rc(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
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
 */let Ma;function tN(n){L(!Ma,"__referenceConstructor has already been defined"),Ma=n}function nN(){return L(Ma,"Reference.ts has not been loaded"),Ma}let rN=1;class L_{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ye(null),this.pendingWriteTree_=Nk(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function fI(n,e,t,r,i){return Ik(n.pendingWriteTree_,e,t,r,i),i?ao(n,new Er(eI(),e,t)):[]}function sr(n,e,t=!1){const r=Ek(n.pendingWriteTree_,e);if(Tk(n.pendingWriteTree_,e)){let s=new ye(null);return r.snap!=null?s=s.set(le(),!0):Ye(r.children,o=>{s=s.set(new de(o),!0)}),ao(n,new Da(r.path,s,t))}else return[]}function Cc(n,e,t){return ao(n,new Er(Bh(),e,t))}function iN(n,e,t){const r=ye.fromObject(t);return ao(n,new Bs(Bh(),e,r))}function sN(n,e){return ao(n,new Us(Bh(),e))}function oN(n,e,t){const r=Hh(n,t);if(r){const i=Qh(r),s=i.path,o=i.queryId,a=at(s,e),u=new Us(qh(o),a);return Yh(n,s,u)}else return[]}function pl(n,e,t,r,i=!1){const s=e._path,o=n.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||dI(o,e))){const u=eN(o,e,t,r);Jk(o)&&(n.syncPointTree_=n.syncPointTree_.remove(s));const l=u.removed;if(a=u.events,!i){const d=l.findIndex(_=>_._queryParams.loadsAllData())!==-1,f=n.syncPointTree_.findOnPath(s,(_,y)=>Bn(y));if(d&&!f){const _=n.syncPointTree_.subtree(s);if(!_.isEmpty()){const y=uN(_);for(let A=0;A<y.length;++A){const P=y[A],S=P.query,U=mI(n,P);n.listenProvider_.startListening(vs(S),Fa(n,S),U.hashFn,U.onComplete)}}}!f&&l.length>0&&!r&&(d?n.listenProvider_.stopListening(vs(e),null):l.forEach(_=>{const y=n.queryToTagMap.get(bc(_));n.listenProvider_.stopListening(vs(_),y)}))}lN(n,l)}return a}function aN(n,e,t,r){const i=Hh(n,r);if(i!=null){const s=Qh(i),o=s.path,a=s.queryId,u=at(o,e),l=new Er(qh(a),u,t);return Yh(n,o,l)}else return[]}function cN(n,e,t,r){const i=Hh(n,r);if(i){const s=Qh(i),o=s.path,a=s.queryId,u=at(o,e),l=ye.fromObject(t),d=new Bs(qh(a),u,l);return Yh(n,o,d)}else return[]}function M_(n,e,t,r=!1){const i=e._path;let s=null,o=!1;n.syncPointTree_.foreachOnPath(i,(_,y)=>{const A=at(_,i);s=s||Yr(y,A),o=o||Bn(y)});let a=n.syncPointTree_.get(i);a?(o=o||Bn(a),s=s||Yr(a,le())):(a=new Hk,n.syncPointTree_=n.syncPointTree_.set(i,a));let u;s!=null?u=!0:(u=!1,s=H.EMPTY_NODE,n.syncPointTree_.subtree(i).foreachChild((y,A)=>{const P=Yr(A,le());P&&(s=s.updateImmediateChild(y,P))}));const l=dI(a,e);if(!l&&!e._queryParams.loadsAllData()){const _=bc(e);L(!n.queryToTagMap.has(_),"View does not exist, but we have a tag");const y=hN();n.queryToTagMap.set(_,y),n.tagToQueryMap.set(y,_)}const d=$h(n.pendingWriteTree_,i);let f=Zk(a,e,t,d,s,u);if(!l&&!o&&!r){const _=hI(a,e);f=f.concat(dN(n,e,_))}return f}function Kh(n,e,t){const i=n.pendingWriteTree_,s=n.syncPointTree_.findOnPath(e,(o,a)=>{const u=at(o,e),l=Yr(a,u);if(l)return l});return iI(i,e,s,t,!0)}function ao(n,e){return pI(e,n.syncPointTree_,null,$h(n.pendingWriteTree_,le()))}function pI(n,e,t,r){if(te(n.path))return _I(n,e,t,r);{const i=e.get(le());t==null&&i!=null&&(t=Yr(i,le()));let s=[];const o=ee(n.path),a=n.operationForChild(o),u=e.children.get(o);if(u&&a){const l=t?t.getImmediateChild(o):null,d=sI(r,o);s=s.concat(pI(a,u,l,d))}return i&&(s=s.concat(zh(i,n,r,t))),s}}function _I(n,e,t,r){const i=e.get(le());t==null&&i!=null&&(t=Yr(i,le()));let s=[];return e.children.inorderTraversal((o,a)=>{const u=t?t.getImmediateChild(o):null,l=sI(r,o),d=n.operationForChild(o);d&&(s=s.concat(_I(d,a,u,l)))}),i&&(s=s.concat(zh(i,n,r,t))),s}function mI(n,e){const t=e.query,r=Fa(n,t);return{hashFn:()=>(Gk(e)||H.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?oN(n,t._path,r):sN(n,t._path);{const s=sP(i,t);return pl(n,t,null,s)}}}}function Fa(n,e){const t=bc(e);return n.queryToTagMap.get(t)}function bc(n){return n._path.toString()+"$"+n._queryIdentifier}function Hh(n,e){return n.tagToQueryMap.get(e)}function Qh(n){const e=n.indexOf("$");return L(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new de(n.substr(0,e))}}function Yh(n,e,t){const r=n.syncPointTree_.get(e);L(r,"Missing sync point for query tag that we're tracking");const i=$h(n.pendingWriteTree_,e);return zh(r,t,i,null)}function uN(n){return n.fold((e,t,r)=>{if(t&&Bn(t))return[Rc(t)];{let i=[];return t&&(i=lI(t)),Ye(r,(s,o)=>{i=i.concat(o)}),i}})}function vs(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(nN())(n._repo,n._path):n}function lN(n,e){for(let t=0;t<e.length;++t){const r=e[t];if(!r._queryParams.loadsAllData()){const i=bc(r),s=n.queryToTagMap.get(i);n.queryToTagMap.delete(i),n.tagToQueryMap.delete(s)}}}function hN(){return rN++}function dN(n,e,t){const r=e._path,i=Fa(n,e),s=mI(n,t),o=n.listenProvider_.startListening(vs(e),i,s.hashFn,s.onComplete),a=n.syncPointTree_.subtree(r);if(i)L(!Bn(a.value),"If we're adding a query, it shouldn't be shadowed");else{const u=a.fold((l,d,f)=>{if(!te(l)&&d&&Bn(d))return[Rc(d).query];{let _=[];return d&&(_=_.concat(lI(d).map(y=>y.query))),Ye(f,(y,A)=>{_=_.concat(A)}),_}});for(let l=0;l<u.length;++l){const d=u[l];n.listenProvider_.stopListening(vs(d),Fa(n,d))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Jh{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Jh(t)}node(){return this.node_}}class Xh{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=Pe(this.path_,e);return new Xh(this.syncTree_,t)}node(){return Kh(this.syncTree_,this.path_)}}const fN=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},F_=function(n,e,t){if(!n||typeof n!="object")return n;if(L(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return pN(n[".sv"],e,t);if(typeof n[".sv"]=="object")return _N(n[".sv"],e);L(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},pN=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:L(!1,"Unexpected server value: "+n)}},_N=function(n,e,t){n.hasOwnProperty("increment")||L(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const r=n.increment;typeof r!="number"&&L(!1,"Unexpected increment value: "+r);const i=e.node();if(L(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},mN=function(n,e,t,r){return Zh(e,new Xh(t,n),r)},gI=function(n,e,t){return Zh(n,new Jh(e),t)};function Zh(n,e,t){const r=n.getPriority().val(),i=F_(r,e.getImmediateChild(".priority"),t);let s;if(n.isLeafNode()){const o=n,a=F_(o.getValue(),e,t);return a!==o.getValue()||i!==o.getPriority().val()?new Ve(a,De(i)):n}else{const o=n;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new Ve(i))),o.forEachChild(Ie,(a,u)=>{const l=Zh(u,e.getImmediateChild(a),t);l!==u&&(s=s.updateImmediateChild(a,l))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class ed{constructor(e="",t=null,r={children:{},childCount:0}){this.name=e,this.parent=t,this.node=r}}function td(n,e){let t=e instanceof de?e:new de(e),r=n,i=ee(t);for(;i!==null;){const s=Zr(r.node.children,i)||{children:{},childCount:0};r=new ed(i,r,s),t=me(t),i=ee(t)}return r}function Ci(n){return n.node.value}function yI(n,e){n.node.value=e,_l(n)}function vI(n){return n.node.childCount>0}function gN(n){return Ci(n)===void 0&&!vI(n)}function Sc(n,e){Ye(n.node.children,(t,r)=>{e(new ed(t,n,r))})}function II(n,e,t,r){t&&!r&&e(n),Sc(n,i=>{II(i,e,!0,r)}),t&&r&&e(n)}function yN(n,e,t){let r=n.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function co(n){return new de(n.parent===null?n.name:co(n.parent)+"/"+n.name)}function _l(n){n.parent!==null&&vN(n.parent,n.name,n)}function vN(n,e,t){const r=gN(t),i=Ft(n.node.children,e);r&&i?(delete n.node.children[e],n.node.childCount--,_l(n)):!r&&!i&&(n.node.children[e]=t.node,n.node.childCount++,_l(n))}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const IN=/[\[\].#$\/\u0000-\u001F\u007F]/,EN=/[\[\].#$\u0000-\u001F\u007F]/,vu=10*1024*1024,nd=function(n){return typeof n=="string"&&n.length!==0&&!IN.test(n)},EI=function(n){return typeof n=="string"&&n.length!==0&&!EN.test(n)},TN=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),EI(n)},Ua=function(n){return n===null||typeof n=="string"||typeof n=="number"&&!Tc(n)||n&&typeof n=="object"&&Ft(n,".sv")},pi=function(n,e,t,r){r&&e===void 0||Pc(ti(n,"value"),e,t)},Pc=function(n,e,t){const r=t instanceof de?new UP(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+Xn(r));if(typeof e=="function")throw new Error(n+"contains a function "+Xn(r)+" with contents = "+e.toString());if(Tc(e))throw new Error(n+"contains "+e.toString()+" "+Xn(r));if(typeof e=="string"&&e.length>vu/3&&Wa(e)>vu)throw new Error(n+"contains a string greater than "+vu+" utf8 bytes "+Xn(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(Ye(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!nd(o)))throw new Error(n+" contains an invalid key ("+o+") "+Xn(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);BP(r,o),Pc(n,a,r),qP(r)}),i&&s)throw new Error(n+' contains ".value" child '+Xn(r)+" in addition to actual children.")}},wN=function(n,e){let t,r;for(t=0;t<e.length;t++){r=e[t];const s=Vs(r);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!nd(s[o]))throw new Error(n+"contains an invalid key ("+s[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(FP);let i=null;for(t=0;t<e.length;t++){if(r=e[t],i!==null&&gt(i,r))throw new Error(n+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},AN=function(n,e,t,r){const i=ti(n,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const s=[];Ye(e,(o,a)=>{const u=new de(o);if(Pc(i,a,Pe(t,u)),Oh(u)===".priority"&&!Ua(a))throw new Error(i+"contains an invalid value for '"+u.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(u)}),wN(i,s)},RN=function(n,e,t){if(Tc(e))throw new Error(ti(n,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!Ua(e))throw new Error(ti(n,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")},rd=function(n,e,t,r){if(!EI(t))throw new Error(ti(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},CN=function(n,e,t,r){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),rd(n,e,t)},as=function(n,e){if(ee(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},bN=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!nd(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!TN(t))throw new Error(ti(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
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
 */class SN{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function id(n,e){let t=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();t!==null&&!xh(s,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:s}),t.events.push(i)}t&&n.eventLists_.push(t)}function TI(n,e,t){id(n,t),wI(n,r=>xh(r,e))}function on(n,e,t){id(n,t),wI(n,r=>gt(r,e)||gt(e,r))}function wI(n,e){n.recursionDepth_++;let t=!0;for(let r=0;r<n.eventLists_.length;r++){const i=n.eventLists_[r];if(i){const s=i.path;e(s)?(PN(n.eventLists_[r]),n.eventLists_[r]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function PN(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const r=t.getEventRunner();_s&&qe("event: "+t.toString()),Ai(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const kN="repo_interrupt",NN=25;class DN{constructor(e,t,r,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new SN,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Na(),this.transactionQueueTree_=new ed,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function ON(n,e,t){if(n.stats_=Nh(n.repoInfo_),n.forceRestClient_||uP())n.server_=new ka(n.repoInfo_,(r,i,s,o)=>{U_(n,r,i,s,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>B_(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Fe(t)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}n.persistentConnection_=new Zt(n.repoInfo_,e,(r,i,s,o)=>{U_(n,r,i,s,o)},r=>{B_(n,r)},r=>{VN(n,r)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(r=>{n.server_.refreshAuthToken(r)}),n.appCheckProvider_.addTokenChangeListener(r=>{n.server_.refreshAppCheckToken(r.token)}),n.statsReporter_=pP(n.repoInfo_,()=>new pk(n.stats_,n.server_)),n.infoData_=new uk,n.infoSyncTree_=new L_({startListening:(r,i,s,o)=>{let a=[];const u=n.infoData_.getNode(r._path);return u.isEmpty()||(a=Cc(n.infoSyncTree_,r._path,u),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),od(n,"connected",!1),n.serverSyncTree_=new L_({startListening:(r,i,s,o)=>(n.server_.listen(r,s,i,(a,u)=>{const l=o(a,u);on(n.eventQueue_,r._path,l)}),[]),stopListening:(r,i)=>{n.server_.unlisten(r,i)}})}function xN(n){const t=n.infoData_.getNode(new de(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function sd(n){return fN({timestamp:xN(n)})}function U_(n,e,t,r,i){n.dataUpdateCount++;const s=new de(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(i)if(r){const u=aa(t,l=>De(l));o=cN(n.serverSyncTree_,s,u,i)}else{const u=De(t);o=aN(n.serverSyncTree_,s,u,i)}else if(r){const u=aa(t,l=>De(l));o=iN(n.serverSyncTree_,s,u)}else{const u=De(t);o=Cc(n.serverSyncTree_,s,u)}let a=s;o.length>0&&(a=kc(n,s)),on(n.eventQueue_,a,o)}function B_(n,e){od(n,"connected",e),e===!1&&MN(n)}function VN(n,e){Ye(e,(t,r)=>{od(n,t,r)})}function od(n,e,t){const r=new de("/.info/"+e),i=De(t);n.infoData_.updateSnapshot(r,i);const s=Cc(n.infoSyncTree_,r,i);on(n.eventQueue_,r,s)}function AI(n){return n.nextWriteId_++}function LN(n,e,t,r,i){ad(n,"set",{path:e.toString(),value:t,priority:r});const s=sd(n),o=De(t,r),a=Kh(n.serverSyncTree_,e),u=gI(o,a,s),l=AI(n),d=fI(n.serverSyncTree_,e,u,l,!0);id(n.eventQueue_,d),n.server_.put(e.toString(),o.val(!0),(_,y)=>{const A=_==="ok";A||ut("set at "+e+" failed: "+_);const P=sr(n.serverSyncTree_,l,!A);on(n.eventQueue_,e,P),_i(n,i,_,y)});const f=PI(n,e);kc(n,f),on(n.eventQueue_,f,[])}function MN(n){ad(n,"onDisconnectEvents");const e=sd(n),t=Na();cl(n.onDisconnect_,le(),(i,s)=>{const o=mN(i,s,n.serverSyncTree_,e);Ri(t,i,o)});let r=[];cl(t,le(),(i,s)=>{r=r.concat(Cc(n.serverSyncTree_,i,s));const o=PI(n,i);kc(n,o)}),n.onDisconnect_=Na(),on(n.eventQueue_,le(),r)}function FN(n,e,t){n.server_.onDisconnectCancel(e.toString(),(r,i)=>{r==="ok"&&al(n.onDisconnect_,e),_i(n,t,r,i)})}function q_(n,e,t,r){const i=De(t);n.server_.onDisconnectPut(e.toString(),i.val(!0),(s,o)=>{s==="ok"&&Ri(n.onDisconnect_,e,i),_i(n,r,s,o)})}function UN(n,e,t,r,i){const s=De(t,r);n.server_.onDisconnectPut(e.toString(),s.val(!0),(o,a)=>{o==="ok"&&Ri(n.onDisconnect_,e,s),_i(n,i,o,a)})}function BN(n,e,t,r){if(oa(t)){qe("onDisconnect().update() called with empty data.  Don't do anything."),_i(n,r,"ok",void 0);return}n.server_.onDisconnectMerge(e.toString(),t,(i,s)=>{i==="ok"&&Ye(t,(o,a)=>{const u=De(a);Ri(n.onDisconnect_,Pe(e,o),u)}),_i(n,r,i,s)})}function qN(n,e,t){let r;ee(e._path)===".info"?r=M_(n.infoSyncTree_,e,t):r=M_(n.serverSyncTree_,e,t),TI(n.eventQueue_,e._path,r)}function $N(n,e,t){let r;ee(e._path)===".info"?r=pl(n.infoSyncTree_,e,t):r=pl(n.serverSyncTree_,e,t),TI(n.eventQueue_,e._path,r)}function jN(n){n.persistentConnection_&&n.persistentConnection_.interrupt(kN)}function ad(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),qe(t,...e)}function _i(n,e,t,r){e&&Ai(()=>{if(t==="ok")e(null);else{const i=(t||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function RI(n,e,t){return Kh(n.serverSyncTree_,e,t)||H.EMPTY_NODE}function cd(n,e=n.transactionQueueTree_){if(e||Nc(n,e),Ci(e)){const t=bI(n,e);L(t.length>0,"Sending zero length transaction queue"),t.every(i=>i.status===0)&&GN(n,co(e),t)}else vI(e)&&Sc(e,t=>{cd(n,t)})}function GN(n,e,t){const r=t.map(l=>l.currentWriteId),i=RI(n,e,r);let s=i;const o=i.hash();for(let l=0;l<t.length;l++){const d=t[l];L(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const f=at(e,d.path);s=s.updateChild(f,d.currentOutputSnapshotRaw)}const a=s.val(!0),u=e;n.server_.put(u.toString(),a,l=>{ad(n,"transaction put response",{path:u.toString(),status:l});let d=[];if(l==="ok"){const f=[];for(let _=0;_<t.length;_++)t[_].status=2,d=d.concat(sr(n.serverSyncTree_,t[_].currentWriteId)),t[_].onComplete&&f.push(()=>t[_].onComplete(null,!0,t[_].currentOutputSnapshotResolved)),t[_].unwatcher();Nc(n,td(n.transactionQueueTree_,e)),cd(n,n.transactionQueueTree_),on(n.eventQueue_,e,d);for(let _=0;_<f.length;_++)Ai(f[_])}else{if(l==="datastale")for(let f=0;f<t.length;f++)t[f].status===3?t[f].status=4:t[f].status=0;else{ut("transaction at "+u.toString()+" failed: "+l);for(let f=0;f<t.length;f++)t[f].status=4,t[f].abortReason=l}kc(n,e)}},o)}function kc(n,e){const t=CI(n,e),r=co(t),i=bI(n,t);return WN(n,i,r),r}function WN(n,e,t){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const u=e[a],l=at(t,u.path);let d=!1,f;if(L(l!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),u.status===4)d=!0,f=u.abortReason,i=i.concat(sr(n.serverSyncTree_,u.currentWriteId,!0));else if(u.status===0)if(u.retryCount>=NN)d=!0,f="maxretry",i=i.concat(sr(n.serverSyncTree_,u.currentWriteId,!0));else{const _=RI(n,u.path,o);u.currentInputSnapshot=_;const y=e[a].update(_.val());if(y!==void 0){Pc("transaction failed: Data returned ",y,u.path);let A=De(y);typeof y=="object"&&y!=null&&Ft(y,".priority")||(A=A.updatePriority(_.getPriority()));const S=u.currentWriteId,U=sd(n),q=gI(A,_,U);u.currentOutputSnapshotRaw=A,u.currentOutputSnapshotResolved=q,u.currentWriteId=AI(n),o.splice(o.indexOf(S),1),i=i.concat(fI(n.serverSyncTree_,u.path,q,u.currentWriteId,u.applyLocally)),i=i.concat(sr(n.serverSyncTree_,S,!0))}else d=!0,f="nodata",i=i.concat(sr(n.serverSyncTree_,u.currentWriteId,!0))}on(n.eventQueue_,t,i),i=[],d&&(e[a].status=2,function(_){setTimeout(_,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(f==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(f),!1,null))))}Nc(n,n.transactionQueueTree_);for(let a=0;a<r.length;a++)Ai(r[a]);cd(n,n.transactionQueueTree_)}function CI(n,e){let t,r=n.transactionQueueTree_;for(t=ee(e);t!==null&&Ci(r)===void 0;)r=td(r,t),e=me(e),t=ee(e);return r}function bI(n,e){const t=[];return SI(n,e,t),t.sort((r,i)=>r.order-i.order),t}function SI(n,e,t){const r=Ci(e);if(r)for(let i=0;i<r.length;i++)t.push(r[i]);Sc(e,i=>{SI(n,i,t)})}function Nc(n,e){const t=Ci(e);if(t){let r=0;for(let i=0;i<t.length;i++)t[i].status!==2&&(t[r]=t[i],r++);t.length=r,yI(e,t.length>0?t:void 0)}Sc(e,r=>{Nc(n,r)})}function PI(n,e){const t=co(CI(n,e)),r=td(n.transactionQueueTree_,e);return yN(r,i=>{Iu(n,i)}),Iu(n,r),II(r,i=>{Iu(n,i)}),t}function Iu(n,e){const t=Ci(e);if(t){const r=[];let i=[],s=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(L(s===o-1,"All SENT items should be at beginning of queue."),s=o,t[o].status=3,t[o].abortReason="set"):(L(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),i=i.concat(sr(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&r.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?yI(e,void 0):t.length=s+1,on(n.eventQueue_,co(e),i);for(let o=0;o<r.length;o++)Ai(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function zN(n){let e="";const t=n.split("/");for(let r=0;r<t.length;r++)if(t[r].length>0){let i=t[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function KN(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const r=t.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):ut(`Invalid query segment '${t}' in query '${n}'`)}return e}const $_=function(n,e){const t=HN(n),r=t.namespace;t.domain==="firebase.com"&&sn(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&t.domain!=="localhost"&&sn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||eP();const i=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new Lv(t.host,t.secure,r,i,e,"",r!==t.subdomain),path:new de(t.pathString)}},HN=function(n){let e="",t="",r="",i="",s="",o=!0,a="https",u=443;if(typeof n=="string"){let l=n.indexOf("//");l>=0&&(a=n.substring(0,l-1),n=n.substring(l+2));let d=n.indexOf("/");d===-1&&(d=n.length);let f=n.indexOf("?");f===-1&&(f=n.length),e=n.substring(0,Math.min(d,f)),d<f&&(i=zN(n.substring(d,f)));const _=KN(n.substring(Math.min(n.length,f)));l=e.indexOf(":"),l>=0?(o=a==="https"||a==="wss",u=parseInt(e.substring(l+1),10)):l=e.length;const y=e.slice(0,l);if(y.toLowerCase()==="localhost")t="localhost";else if(y.split(".").length<=2)t=y;else{const A=e.indexOf(".");r=e.substring(0,A).toLowerCase(),t=e.substring(A+1),s=r}"ns"in _&&(s=_.ns)}return{host:e,port:u,domain:t,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
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
 */class QN{constructor(e,t,r,i){this.eventType=e,this.eventRegistration=t,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Fe(this.snapshot.exportVal())}}class YN{constructor(e,t,r){this.eventRegistration=e,this.error=t,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class JN{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return L(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2021 Google LLC
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
 */class XN{constructor(e,t){this._repo=e,this._path=t}cancel(){const e=new zt;return FN(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){as("OnDisconnect.remove",this._path);const e=new zt;return q_(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){as("OnDisconnect.set",this._path),pi("OnDisconnect.set",e,this._path,!1);const t=new zt;return q_(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}setWithPriority(e,t){as("OnDisconnect.setWithPriority",this._path),pi("OnDisconnect.setWithPriority",e,this._path,!1),RN("OnDisconnect.setWithPriority",t);const r=new zt;return UN(this._repo,this._path,e,t,r.wrapCallback(()=>{})),r.promise}update(e){as("OnDisconnect.update",this._path),AN("OnDisconnect.update",e,this._path);const t=new zt;return BN(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}}/**
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
 */class bi{constructor(e,t,r,i){this._repo=e,this._path=t,this._queryParams=r,this._orderByCalled=i}get key(){return te(this._path)?null:Oh(this._path)}get ref(){return new Gn(this._repo,this._path)}get _queryIdentifier(){const e=R_(this._queryParams),t=Ph(e);return t==="{}"?"default":t}get _queryObject(){return R_(this._queryParams)}isEqual(e){if(e=ie(e),!(e instanceof bi))return!1;const t=this._repo===e._repo,r=xh(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+MP(this._path)}}function ZN(n,e){if(n._orderByCalled===!0)throw new Error(e+": You can't combine multiple orderBy calls.")}function ud(n){let e=null,t=null;if(n.hasStart()&&(e=n.getIndexStartValue()),n.hasEnd()&&(t=n.getIndexEndValue()),n.getIndex()===ur){const r="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",i="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(n.hasStart()){if(n.getIndexStartName()!==Ir)throw new Error(r);if(typeof e!="string")throw new Error(i)}if(n.hasEnd()){if(n.getIndexEndName()!==Fn)throw new Error(r);if(typeof t!="string")throw new Error(i)}}else if(n.getIndex()===Ie){if(e!=null&&!Ua(e)||t!=null&&!Ua(t))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(L(n.getIndex()instanceof Mh||n.getIndex()===Xv,"unknown index type."),e!=null&&typeof e=="object"||t!=null&&typeof t=="object")throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}function kI(n){if(n.hasStart()&&n.hasEnd()&&n.hasLimit()&&!n.hasAnchoredLimit())throw new Error("Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead.")}class Gn extends bi{constructor(e,t){super(e,t,new Uh,!1)}get parent(){const e=Wv(this._path);return e===null?null:new Gn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Ba{constructor(e,t,r){this._node=e,this.ref=t,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new de(e),r=ml(this.ref,e);return new Ba(this._node.getChild(t),r,Ie)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new Ba(i,ml(this.ref,r),Ie)))}hasChild(e){const t=new de(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function $x(n,e){return n=ie(n),n._checkNotDeleted("ref"),e!==void 0?ml(n._root,e):n._root}function ml(n,e){return n=ie(n),ee(n._path)===null?CN("child","path",e):rd("child","path",e),new Gn(n._repo,Pe(n._path,e))}function jx(n){return n=ie(n),new XN(n._repo,n._path)}function Gx(n,e){n=ie(n),as("set",n._path),pi("set",e,n._path,!1);const t=new zt;return LN(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}class ld{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const r=t._queryParams.getIndex();return new QN("value",this,new Ba(e.snapshotNode,new Gn(t._repo,t._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new YN(this,e,t):null}matches(e){return e instanceof ld?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function eD(n,e,t,r,i){const s=new JN(t,void 0),o=new ld(s);return qN(n._repo,n,o),()=>$N(n._repo,n,o)}function Wx(n,e,t,r){return eD(n,"value",e)}class Dc{}class tD extends Dc{constructor(e,t){super(),this._value=e,this._key=t,this.type="endAt"}_apply(e){pi("endAt",this._value,e._path,!0);const t=ak(e._queryParams,this._value,this._key);if(kI(t),ud(t),e._queryParams.hasEnd())throw new Error("endAt: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new bi(e._repo,e._path,t,e._orderByCalled)}}class nD extends Dc{constructor(e,t){super(),this._value=e,this._key=t,this.type="startAt"}_apply(e){pi("startAt",this._value,e._path,!0);const t=ok(e._queryParams,this._value,this._key);if(kI(t),ud(t),e._queryParams.hasStart())throw new Error("startAt: Starting point was already set (by another call to startAt, startBefore or equalTo).");return new bi(e._repo,e._path,t,e._orderByCalled)}}class rD extends Dc{constructor(e){super(),this._path=e,this.type="orderByChild"}_apply(e){ZN(e,"orderByChild");const t=new de(this._path);if(te(t))throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");const r=new Mh(t),i=ck(e._queryParams,r);return ud(i),new bi(e._repo,e._path,i,!0)}}function zx(n){return rd("orderByChild","path",n),new rD(n)}class iD extends Dc{constructor(e,t){super(),this._value=e,this._key=t,this.type="equalTo"}_apply(e){if(pi("equalTo",this._value,e._path,!1),e._queryParams.hasStart())throw new Error("equalTo: Starting point was already set (by another call to startAt/startAfter or equalTo).");if(e._queryParams.hasEnd())throw new Error("equalTo: Ending point was already set (by another call to endAt/endBefore or equalTo).");return new tD(this._value,this._key)._apply(new nD(this._value,this._key)._apply(e))}}function Kx(n,e){return new iD(n,e)}function Hx(n,...e){let t=ie(n);for(const r of e)t=r._apply(t);return t}Qk(Gn);tN(Gn);/**
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
 */const sD="FIREBASE_DATABASE_EMULATOR_HOST",gl={};let oD=!1;function aD(n,e,t,r){n.repoInfo_=new Lv(`${e}:${t}`,!1,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0),r&&(n.authTokenProvider_=r)}function cD(n,e,t,r,i){let s=r||n.options.databaseURL;s===void 0&&(n.options.projectId||sn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),qe("Using default host for project ",n.options.projectId),s=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=$_(s,i),a=o.repoInfo,u;typeof process<"u"&&a_&&(u=a_[sD]),u?(s=`http://${u}?ns=${a.namespace}`,o=$_(s,i),a=o.repoInfo):o.repoInfo.secure;const l=new hP(n.name,n.options,e);bN("Invalid Firebase Database URL",o),te(o.path)||sn("Database URL must point to the root of a Firebase Database (not including a child path).");const d=lD(a,n,l,new lP(n.name,t));return new hD(d,n)}function uD(n,e){const t=gl[e];(!t||t[n.key]!==n)&&sn(`Database ${e}(${n.repoInfo_}) has already been deleted.`),jN(n),delete t[n.key]}function lD(n,e,t,r){let i=gl[e.name];i||(i={},gl[e.name]=i);let s=i[n.toURLString()];return s&&sn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new DN(n,oD,t,r),i[n.toURLString()]=s,s}class hD{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(ON(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Gn(this._repo,le())),this._rootInternal}_delete(){return this._rootInternal!==null&&(uD(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&sn("Cannot call "+e+" on a deleted database.")}}function Qx(n=Tl(),e){const t=js(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const r=hm("database");r&&dD(t,...r)}return t}function dD(n,e,t,r={}){n=ie(n),n._checkNotDeleted("useEmulator"),n._instanceStarted&&sn("Cannot call useEmulator() after instance has already been initialized.");const i=n._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&sn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new na(na.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:pm(r.mockUserToken,n.app.options.projectId);s=new na(o)}aD(i,e,t,s)}/**
 * @license
 * Copyright 2021 Google LLC
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
 */function fD(n){HS(Pt),Lt(new bt("database",(e,{instanceIdentifier:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return cD(r,i,s,t)},"PUBLIC").setMultipleInstances(!0)),ft(c_,u_,n),ft(c_,u_,"esm2017")}/**
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
 */const pD={".sv":"timestamp"};function Yx(){return pD}Zt.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};Zt.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};fD();var j_="__sak";function NI(){var n;return n={},n["dependent-sdk-initialized-before-auth"]="Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",n}var _D=NI,yl=new qn("auth","Firebase",NI());/**
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
 */var Jr=new $s("@firebase/auth");function mD(n){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];Jr.logLevel<=Z.WARN&&Jr.warn.apply(Jr,yt(["Auth (".concat(Pt,"): ").concat(n)],e,!1))}function ra(n){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];Jr.logLevel<=Z.ERROR&&Jr.error.apply(Jr,yt(["Auth (".concat(Pt,"): ").concat(n)],e,!1))}/**
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
 */function an(n){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];throw dd.apply(void 0,yt([n],e,!1))}function hd(n){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];return dd.apply(void 0,yt([n],e,!1))}function DI(n,e,t){var r,i=Te(Te({},_D()),(r={},r[e]=t,r)),s=new qn("auth","Firebase",i);return s.create(e,{appName:n.name})}function Xr(n){return DI(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function dd(n){for(var e,t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(typeof n!="string"){var i=t[0],s=yt([],t.slice(1),!0);return s[0]&&(s[0].appName=n.name),(e=n._errorFactory).create.apply(e,yt([i],s,!1))}return yl.create.apply(yl,yt([n],t,!1))}function X(n,e){for(var t=[],r=2;r<arguments.length;r++)t[r-2]=arguments[r];if(!n)throw dd.apply(void 0,yt([e],t,!1))}function Jt(n){var e="INTERNAL ASSERTION FAILED: "+n;throw ra(e),new Error(e)}function mi(n,e){n||Jt(e)}function gD(){return G_()==="http:"||G_()==="https:"}function G_(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function yD(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(gD()||mm()||"connection"in navigator)?navigator.onLine:!0}function vD(){if(typeof navigator>"u")return null;var n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */var ID=function(){function n(e,t){this.shortDelay=e,this.longDelay=t,mi(t>e,"Short delay should be less than long delay!"),this.isMobile=Ga()||El()}return n.prototype.get=function(){return yD()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)},n}();/**
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
 */function ED(n,e){mi(n.emulator,"Emulator should always be set here");var t=n.emulator.url;return e?"".concat(t).concat(e.startsWith("/")?e.slice(1):e):t}/**
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
 */var OI=function(){function n(){}return n.initialize=function(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)},n.fetch=function(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Jt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")},n.headers=function(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Jt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")},n.response=function(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Jt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")},n}();/**
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
 */var z,TD=(z={},z.CREDENTIAL_MISMATCH="custom-token-mismatch",z.MISSING_CUSTOM_TOKEN="internal-error",z.INVALID_IDENTIFIER="invalid-email",z.MISSING_CONTINUE_URI="internal-error",z.INVALID_PASSWORD="wrong-password",z.MISSING_PASSWORD="missing-password",z.INVALID_LOGIN_CREDENTIALS="invalid-credential",z.EMAIL_EXISTS="email-already-in-use",z.PASSWORD_LOGIN_DISABLED="operation-not-allowed",z.INVALID_IDP_RESPONSE="invalid-credential",z.INVALID_PENDING_TOKEN="invalid-credential",z.FEDERATED_USER_ID_ALREADY_LINKED="credential-already-in-use",z.MISSING_REQ_TYPE="internal-error",z.EMAIL_NOT_FOUND="user-not-found",z.RESET_PASSWORD_EXCEED_LIMIT="too-many-requests",z.EXPIRED_OOB_CODE="expired-action-code",z.INVALID_OOB_CODE="invalid-action-code",z.MISSING_OOB_CODE="internal-error",z.CREDENTIAL_TOO_OLD_LOGIN_AGAIN="requires-recent-login",z.INVALID_ID_TOKEN="invalid-user-token",z.TOKEN_EXPIRED="user-token-expired",z.USER_NOT_FOUND="user-token-expired",z.TOO_MANY_ATTEMPTS_TRY_LATER="too-many-requests",z.PASSWORD_DOES_NOT_MEET_REQUIREMENTS="password-does-not-meet-requirements",z.INVALID_CODE="invalid-verification-code",z.INVALID_SESSION_INFO="invalid-verification-id",z.INVALID_TEMPORARY_PROOF="invalid-credential",z.MISSING_SESSION_INFO="missing-verification-id",z.SESSION_EXPIRED="code-expired",z.MISSING_ANDROID_PACKAGE_NAME="missing-android-pkg-name",z.UNAUTHORIZED_DOMAIN="unauthorized-continue-uri",z.INVALID_OAUTH_CLIENT_ID="invalid-oauth-client-id",z.ADMIN_ONLY_OPERATION="admin-restricted-operation",z.INVALID_MFA_PENDING_CREDENTIAL="invalid-multi-factor-session",z.MFA_ENROLLMENT_NOT_FOUND="multi-factor-info-not-found",z.MISSING_MFA_ENROLLMENT_ID="missing-multi-factor-info",z.MISSING_MFA_PENDING_CREDENTIAL="missing-multi-factor-session",z.SECOND_FACTOR_EXISTS="second-factor-already-in-use",z.SECOND_FACTOR_LIMIT_EXCEEDED="maximum-second-factor-count-exceeded",z.BLOCKING_FUNCTION_ERROR_RESPONSE="internal-error",z.RECAPTCHA_NOT_ENABLED="recaptcha-not-enabled",z.MISSING_RECAPTCHA_TOKEN="missing-recaptcha-token",z.INVALID_RECAPTCHA_TOKEN="invalid-recaptcha-token",z.INVALID_RECAPTCHA_ACTION="invalid-recaptcha-action",z.MISSING_CLIENT_TYPE="missing-client-type",z.MISSING_RECAPTCHA_VERSION="missing-recaptcha-version",z.INVALID_RECAPTCHA_VERSION="invalid-recaptcha-version",z.INVALID_REQ_TYPE="invalid-req-type",z);/**
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
 */var wD=new ID(3e4,6e4);function qt(n,e){return n.tenantId&&!e.tenantId?Te(Te({},e),{tenantId:n.tenantId}):e}function kr(n,e,t,r,i){return i===void 0&&(i={}),O(this,void 0,void 0,function(){var s=this;return x(this,function(o){return[2,xI(n,i,function(){return O(s,void 0,void 0,function(){var a,u,l,d,f;return x(this,function(_){switch(_.label){case 0:return a={},u={},r&&(e==="GET"?u=r:a={body:JSON.stringify(r)}),l=cn(Te({key:n.config.apiKey},u)).slice(1),[4,n._getAdditionalHeaders()];case 1:return d=_.sent(),d["Content-Type"]="application/json",n.languageCode&&(d["X-Firebase-Locale"]=n.languageCode),f=Te({method:e,headers:d},a),_m()||(f.referrerPolicy="no-referrer"),[2,OI.fetch()(VI(n,n.config.apiHost,t,l),f)]}})})})]})})}function xI(n,e,t){return O(this,void 0,void 0,function(){var r,i,s,o,a,u,l,d,f,_;return x(this,function(y){switch(y.label){case 0:n._canInitEmulator=!1,r=Te(Te({},TD),e),y.label=1;case 1:return y.trys.push([1,4,,5]),i=new RD(n),[4,Promise.race([t(),i.promise])];case 2:return s=y.sent(),i.clearNetworkTimeout(),[4,s.json()];case 3:if(o=y.sent(),"needConfirmation"in o)throw cs(n,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return[2,o];if(a=s.ok?o.errorMessage:o.error.message,u=a.split(" : "),l=u[0],d=u[1],l==="FEDERATED_USER_ID_ALREADY_LINKED")throw cs(n,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw cs(n,"email-already-in-use",o);if(l==="USER_DISABLED")throw cs(n,"user-disabled",o);if(f=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-"),d)throw DI(n,f,d);return an(n,f),[3,5];case 4:if(_=y.sent(),_ instanceof _t)throw _;return an(n,"network-request-failed",{message:String(_)}),[3,5];case 5:return[2]}})})}function Nr(n,e,t,r,i){return i===void 0&&(i={}),O(this,void 0,void 0,function(){var s;return x(this,function(o){switch(o.label){case 0:return[4,kr(n,e,t,r,i)];case 1:return s=o.sent(),"mfaPendingCredential"in s&&an(n,"multi-factor-auth-required",{_serverResponse:s}),[2,s]}})})}function VI(n,e,t,r){var i="".concat(e).concat(t,"?").concat(r);return n.config.emulator?ED(n.config,i):"".concat(n.config.apiScheme,"://").concat(i)}function AD(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}var RD=function(){function n(e){var t=this;this.auth=e,this.timer=null,this.promise=new Promise(function(r,i){t.timer=setTimeout(function(){return i(hd(t.auth,"network-request-failed"))},wD.get())})}return n.prototype.clearNetworkTimeout=function(){clearTimeout(this.timer)},n}();function cs(n,e,t){var r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);var i=hd(n,e,r);return i.customData._tokenResponse=t,i}function W_(n){return n!==void 0&&n.enterprise!==void 0}var CD=function(){function n(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}return n.prototype.getProviderEnforcementState=function(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(var t=0,r=this.recaptchaEnforcementState;t<r.length;t++){var i=r[t];if(i.provider&&i.provider===e)return AD(i.enforcementState)}return null},n.prototype.isProviderEnabled=function(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"},n}();function bD(n,e){return O(this,void 0,void 0,function(){return x(this,function(t){return[2,kr(n,"GET","/v2/recaptchaConfig",qt(n,e))]})})}/**
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
 */function SD(n,e){return O(this,void 0,void 0,function(){return x(this,function(t){return[2,kr(n,"POST","/v1/accounts:delete",e)]})})}function LI(n,e){return O(this,void 0,void 0,function(){return x(this,function(t){return[2,kr(n,"POST","/v1/accounts:lookup",e)]})})}/**
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
 */function Is(n){if(n)try{var e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}function PD(n,e){return e===void 0&&(e=!1),O(this,void 0,void 0,function(){var t,r,i,s,o;return x(this,function(a){switch(a.label){case 0:return t=ie(n),[4,t.getIdToken(e)];case 1:return r=a.sent(),i=fd(r),X(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error"),s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider,[2,{claims:i,token:r,authTime:Is(Eu(i.auth_time)),issuedAtTime:Is(Eu(i.iat)),expirationTime:Is(Eu(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}]}})})}function Eu(n){return Number(n)*1e3}function fd(n){var e=n.split("."),t=e[0],r=e[1],i=e[2];if(t===void 0||r===void 0||i===void 0)return ra("JWT malformed, contained fewer than 3 sections"),null;try{var s=Es(r);return s?JSON.parse(s):(ra("Failed to decode base64 JWT payload"),null)}catch(o){return ra("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function z_(n){var e=fd(n);return X(e,"internal-error"),X(typeof e.exp<"u","internal-error"),X(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */function qs(n,e,t){return t===void 0&&(t=!1),O(this,void 0,void 0,function(){var r;return x(this,function(i){switch(i.label){case 0:if(t)return[2,e];i.label=1;case 1:return i.trys.push([1,3,,6]),[4,e];case 2:return[2,i.sent()];case 3:return r=i.sent(),r instanceof _t&&kD(r)?n.auth.currentUser!==n?[3,5]:[4,n.auth.signOut()]:[3,5];case 4:i.sent(),i.label=5;case 5:throw r;case 6:return[2]}})})}function kD(n){var e=n.code;return e==="auth/".concat("user-disabled")||e==="auth/".concat("user-token-expired")}/**
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
 */var ND=function(){function n(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}return n.prototype._start=function(){this.isRunning||(this.isRunning=!0,this.schedule())},n.prototype._stop=function(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))},n.prototype.getInterval=function(e){var t;if(e){var r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;var i=(t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0,r=i-Date.now()-3e5;return Math.max(0,r)}},n.prototype.schedule=function(e){var t=this;if(e===void 0&&(e=!1),!!this.isRunning){var r=this.getInterval(e);this.timerId=setTimeout(function(){return O(t,void 0,void 0,function(){return x(this,function(i){switch(i.label){case 0:return[4,this.iteration()];case 1:return i.sent(),[2]}})})},r)}},n.prototype.iteration=function(){return O(this,void 0,void 0,function(){var e;return x(this,function(t){switch(t.label){case 0:return t.trys.push([0,2,,3]),[4,this.user.getIdToken(!0)];case 1:return t.sent(),[3,3];case 2:return e=t.sent(),(e==null?void 0:e.code)==="auth/".concat("network-request-failed")&&this.schedule(!0),[2];case 3:return this.schedule(),[2]}})})},n}();/**
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
 */var vl=function(){function n(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}return n.prototype._initializeTime=function(){this.lastSignInTime=Is(this.lastLoginAt),this.creationTime=Is(this.createdAt)},n.prototype._copy=function(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()},n.prototype.toJSON=function(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}},n}();/**
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
 */function qa(n){var e;return O(this,void 0,void 0,function(){var t,r,i,s,o,a,u,l,d,f;return x(this,function(_){switch(_.label){case 0:return t=n.auth,[4,n.getIdToken()];case 1:return r=_.sent(),[4,qs(n,LI(t,{idToken:r}))];case 2:return i=_.sent(),X(i==null?void 0:i.users.length,t,"internal-error"),s=i.users[0],n._notifyReloadListener(s),o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?MI(s.providerUserInfo):[],a=OD(n.providerData,o),u=n.isAnonymous,l=!(n.email&&s.passwordHash)&&!(a!=null&&a.length),d=u?l:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new vl(s.createdAt,s.lastLoginAt),isAnonymous:d},Object.assign(n,f),[2]}})})}function DD(n){return O(this,void 0,void 0,function(){var e;return x(this,function(t){switch(t.label){case 0:return e=ie(n),[4,qa(e)];case 1:return t.sent(),[4,e.auth._persistUserIfCurrent(e)];case 2:return t.sent(),e.auth._notifyListenersIfCurrent(e),[2]}})})}function OD(n,e){var t=n.filter(function(r){return!e.some(function(i){return i.providerId===r.providerId})});return yt(yt([],t,!0),e,!0)}function MI(n){return n.map(function(e){var t=e.providerId,r=yi(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */function xD(n,e){return O(this,void 0,void 0,function(){var t,r=this;return x(this,function(i){switch(i.label){case 0:return[4,xI(n,{},function(){return O(r,void 0,void 0,function(){var s,o,a,u,l,d;return x(this,function(f){switch(f.label){case 0:return s=cn({grant_type:"refresh_token",refresh_token:e}).slice(1),o=n.config,a=o.tokenApiHost,u=o.apiKey,l=VI(n,a,"/v1/token","key=".concat(u)),[4,n._getAdditionalHeaders()];case 1:return d=f.sent(),d["Content-Type"]="application/x-www-form-urlencoded",[2,OI.fetch()(l,{method:"POST",headers:d,body:s})]}})})})];case 1:return t=i.sent(),[2,{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}]}})})}function VD(n,e){return O(this,void 0,void 0,function(){return x(this,function(t){return[2,kr(n,"POST","/v2/accounts:revokeToken",qt(n,e))]})})}/**
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
 */var Tu=function(){function n(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}return Object.defineProperty(n.prototype,"isExpired",{get:function(){return!this.expirationTime||Date.now()>this.expirationTime-3e4},enumerable:!1,configurable:!0}),n.prototype.updateFromServerResponse=function(e){X(e.idToken,"internal-error"),X(typeof e.idToken<"u","internal-error"),X(typeof e.refreshToken<"u","internal-error");var t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):z_(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)},n.prototype.updateFromIdToken=function(e){X(e.length!==0,"internal-error");var t=z_(e);this.updateTokensAndExpiration(e,null,t)},n.prototype.getToken=function(e,t){return t===void 0&&(t=!1),O(this,void 0,void 0,function(){return x(this,function(r){switch(r.label){case 0:return!t&&this.accessToken&&!this.isExpired?[2,this.accessToken]:(X(this.refreshToken,e,"user-token-expired"),this.refreshToken?[4,this.refresh(e,this.refreshToken)]:[3,2]);case 1:return r.sent(),[2,this.accessToken];case 2:return[2,null]}})})},n.prototype.clearRefreshToken=function(){this.refreshToken=null},n.prototype.refresh=function(e,t){return O(this,void 0,void 0,function(){var r,i,s,o;return x(this,function(a){switch(a.label){case 0:return[4,xD(e,t)];case 1:return r=a.sent(),i=r.accessToken,s=r.refreshToken,o=r.expiresIn,this.updateTokensAndExpiration(i,s,Number(o)),[2]}})})},n.prototype.updateTokensAndExpiration=function(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3},n.fromJSON=function(e,t){var r=t.refreshToken,i=t.accessToken,s=t.expirationTime,o=new n;return r&&(X(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(X(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(X(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o},n.prototype.toJSON=function(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}},n.prototype._assign=function(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime},n.prototype._clone=function(){return Object.assign(new n,this.toJSON())},n.prototype._performRefresh=function(){return Jt("not implemented")},n}();/**
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
 */function vn(n,e){X(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}var $a=function(){function n(e){var t=e.uid,r=e.auth,i=e.stsTokenManager,s=yi(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ND(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?yt([],s.providerData,!0):[],this.metadata=new vl(s.createdAt||void 0,s.lastLoginAt||void 0)}return n.prototype.getIdToken=function(e){return O(this,void 0,void 0,function(){var t;return x(this,function(r){switch(r.label){case 0:return[4,qs(this,this.stsTokenManager.getToken(this.auth,e))];case 1:return t=r.sent(),X(t,this.auth,"internal-error"),this.accessToken===t?[3,3]:(this.accessToken=t,[4,this.auth._persistUserIfCurrent(this)]);case 2:r.sent(),this.auth._notifyListenersIfCurrent(this),r.label=3;case 3:return[2,t]}})})},n.prototype.getIdTokenResult=function(e){return PD(this,e)},n.prototype.reload=function(){return DD(this)},n.prototype._assign=function(e){this!==e&&(X(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(function(t){return Te({},t)}),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))},n.prototype._clone=function(e){var t=new n(Te(Te({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t},n.prototype._onReload=function(e){X(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)},n.prototype._notifyReloadListener=function(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e},n.prototype._startProactiveRefresh=function(){this.proactiveRefresh._start()},n.prototype._stopProactiveRefresh=function(){this.proactiveRefresh._stop()},n.prototype._updateTokensIfNecessary=function(e,t){return t===void 0&&(t=!1),O(this,void 0,void 0,function(){var r;return x(this,function(i){switch(i.label){case 0:return r=!1,e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t?[4,qa(this)]:[3,2];case 1:i.sent(),i.label=2;case 2:return[4,this.auth._persistUserIfCurrent(this)];case 3:return i.sent(),r&&this.auth._notifyListenersIfCurrent(this),[2]}})})},n.prototype.delete=function(){return O(this,void 0,void 0,function(){var e;return x(this,function(t){switch(t.label){case 0:return Ue(this.auth.app)?[2,Promise.reject(Xr(this.auth))]:[4,this.getIdToken()];case 1:return e=t.sent(),[4,qs(this,SD(this.auth,{idToken:e}))];case 2:return t.sent(),this.stsTokenManager.clearRefreshToken(),[2,this.auth.signOut()]}})})},n.prototype.toJSON=function(){return Te(Te({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(function(e){return Te({},e)}),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})},Object.defineProperty(n.prototype,"refreshToken",{get:function(){return this.stsTokenManager.refreshToken||""},enumerable:!1,configurable:!0}),n._fromJSON=function(e,t){var r,i,s,o,a,u,l,d,f=(r=t.displayName)!==null&&r!==void 0?r:void 0,_=(i=t.email)!==null&&i!==void 0?i:void 0,y=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,A=(o=t.photoURL)!==null&&o!==void 0?o:void 0,P=(a=t.tenantId)!==null&&a!==void 0?a:void 0,S=(u=t._redirectEventId)!==null&&u!==void 0?u:void 0,U=(l=t.createdAt)!==null&&l!==void 0?l:void 0,q=(d=t.lastLoginAt)!==null&&d!==void 0?d:void 0,B=t.uid,G=t.emailVerified,se=t.isAnonymous,Y=t.providerData,E=t.stsTokenManager;X(B&&E,e,"internal-error");var g=Tu.fromJSON(this.name,E);X(typeof B=="string",e,"internal-error"),vn(f,e.name),vn(_,e.name),X(typeof G=="boolean",e,"internal-error"),X(typeof se=="boolean",e,"internal-error"),vn(y,e.name),vn(A,e.name),vn(P,e.name),vn(S,e.name),vn(U,e.name),vn(q,e.name);var v=new n({uid:B,auth:e,email:_,emailVerified:G,displayName:f,isAnonymous:se,photoURL:A,phoneNumber:y,tenantId:P,stsTokenManager:g,createdAt:U,lastLoginAt:q});return Y&&Array.isArray(Y)&&(v.providerData=Y.map(function(T){return Te({},T)})),S&&(v._redirectEventId=S),v},n._fromIdTokenResponse=function(e,t,r){return r===void 0&&(r=!1),O(this,void 0,void 0,function(){var i,s;return x(this,function(o){switch(o.label){case 0:return i=new Tu,i.updateFromServerResponse(t),s=new n({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r}),[4,qa(s)];case 1:return o.sent(),[2,s]}})})},n._fromGetAccountInfoResponse=function(e,t,r){return O(this,void 0,void 0,function(){var i,s,o,a,u,l;return x(this,function(d){return i=t.users[0],X(i.localId!==void 0,"internal-error"),s=i.providerUserInfo!==void 0?MI(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new Tu,a.updateFromIdToken(r),u=new n({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),l={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new vl(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)},Object.assign(u,l),[2,u]})})},n}();/**
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
 */var K_=new Map;function Sn(n){mi(n instanceof Function,"Expected a class definition");var e=K_.get(n);return e?(mi(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,K_.set(n,e),e)}/**
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
 */var LD=function(){function n(){this.type="NONE",this.storage={}}return n.prototype._isAvailable=function(){return O(this,void 0,void 0,function(){return x(this,function(e){return[2,!0]})})},n.prototype._set=function(e,t){return O(this,void 0,void 0,function(){return x(this,function(r){return this.storage[e]=t,[2]})})},n.prototype._get=function(e){return O(this,void 0,void 0,function(){var t;return x(this,function(r){return t=this.storage[e],[2,t===void 0?null:t]})})},n.prototype._remove=function(e){return O(this,void 0,void 0,function(){return x(this,function(t){return delete this.storage[e],[2]})})},n.prototype._addListener=function(e,t){},n.prototype._removeListener=function(e,t){},n.type="NONE",n}(),H_=LD;/**
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
 */function ia(n,e,t){return"".concat("firebase",":").concat(n,":").concat(e,":").concat(t)}var Q_=function(){function n(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;var i=this.auth,s=i.config,o=i.name;this.fullUserKey=ia(this.userKey,s.apiKey,o),this.fullPersistenceKey=ia("persistence",s.apiKey,o),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}return n.prototype.setCurrentUser=function(e){return this.persistence._set(this.fullUserKey,e.toJSON())},n.prototype.getCurrentUser=function(){return O(this,void 0,void 0,function(){var e;return x(this,function(t){switch(t.label){case 0:return[4,this.persistence._get(this.fullUserKey)];case 1:return e=t.sent(),[2,e?$a._fromJSON(this.auth,e):null]}})})},n.prototype.removeCurrentUser=function(){return this.persistence._remove(this.fullUserKey)},n.prototype.savePersistenceForRedirect=function(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)},n.prototype.setPersistence=function(e){return O(this,void 0,void 0,function(){var t;return x(this,function(r){switch(r.label){case 0:return this.persistence===e?[2]:[4,this.getCurrentUser()];case 1:return t=r.sent(),[4,this.removeCurrentUser()];case 2:return r.sent(),this.persistence=e,t?[2,this.setCurrentUser(t)]:[2]}})})},n.prototype.delete=function(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)},n.create=function(e,t,r){return r===void 0&&(r="authUser"),O(this,void 0,void 0,function(){var i,s,o,a,u,l,d,f,_,y,A=this;return x(this,function(P){switch(P.label){case 0:return t.length?[4,Promise.all(t.map(function(S){return O(A,void 0,void 0,function(){return x(this,function(U){switch(U.label){case 0:return[4,S._isAvailable()];case 1:return U.sent()?[2,S]:[2,void 0]}})})}))]:[2,new n(Sn(H_),e,r)];case 1:i=P.sent().filter(function(S){return S}),s=i[0]||Sn(H_),o=ia(r,e.config.apiKey,e.name),a=null,u=0,l=t,P.label=2;case 2:if(!(u<l.length))return[3,7];d=l[u],P.label=3;case 3:return P.trys.push([3,5,,6]),[4,d._get(o)];case 4:return f=P.sent(),f?(_=$a._fromJSON(e,f),d!==s&&(a=_),s=d,[3,7]):[3,6];case 5:return P.sent(),[3,6];case 6:return u++,[3,2];case 7:return y=i.filter(function(S){return S._shouldAllowMigration}),!s._shouldAllowMigration||!y.length?[2,new n(s,e,r)]:(s=y[0],a?[4,s._set(o,a.toJSON())]:[3,9]);case 8:P.sent(),P.label=9;case 9:return[4,Promise.all(t.map(function(S){return O(A,void 0,void 0,function(){return x(this,function(U){switch(U.label){case 0:if(S===s)return[3,4];U.label=1;case 1:return U.trys.push([1,3,,4]),[4,S._remove(o)];case 2:return U.sent(),[3,4];case 3:return U.sent(),[3,4];case 4:return[2]}})})}))];case 10:return P.sent(),[2,new n(s,e,r)]}})})},n}();/**
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
 */function Y_(n){var e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(FI(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(MD(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(BI(e))return"Blackberry";if(qI(e))return"Webos";if(FD(e))return"Safari";if((e.includes("chrome/")||UD(e))&&!e.includes("edge/"))return"Chrome";if(UI(e))return"Android";var t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);return(r==null?void 0:r.length)===2?r[1]:"Other"}function MD(n){return n===void 0&&(n=he()),/firefox\//i.test(n)}function FD(n){n===void 0&&(n=he());var e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function UD(n){return n===void 0&&(n=he()),/crios\//i.test(n)}function FI(n){return n===void 0&&(n=he()),/iemobile/i.test(n)}function UI(n){return n===void 0&&(n=he()),/android/i.test(n)}function BI(n){return n===void 0&&(n=he()),/blackberry/i.test(n)}function qI(n){return n===void 0&&(n=he()),/webos/i.test(n)}function BD(n){return n===void 0&&(n=he()),/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function qD(){return gm()&&document.documentMode===10}function $D(n){return n===void 0&&(n=he()),BD(n)||UI(n)||qI(n)||BI(n)||/windows phone/i.test(n)||FI(n)}/**
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
 */function $I(n,e){e===void 0&&(e=[]);var t;switch(n){case"Browser":t=Y_(he());break;case"Worker":t="".concat(Y_(he()),"-").concat(n);break;default:t=n}var r=e.length?e.join(","):"FirebaseCore-web";return"".concat(t,"/").concat("JsCore","/").concat(Pt,"/").concat(r)}/**
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
 */var jD=function(){function n(e){this.auth=e,this.queue=[]}return n.prototype.pushCallback=function(e,t){var r=this,i=function(o){return new Promise(function(a,u){try{var l=e(o);a(l)}catch(d){u(d)}})};i.onAbort=t,this.queue.push(i);var s=this.queue.length-1;return function(){r.queue[s]=function(){return Promise.resolve()}}},n.prototype.runMiddleware=function(e){return O(this,void 0,void 0,function(){var t,r,i,s,o,a,u,l;return x(this,function(d){switch(d.label){case 0:if(this.auth.currentUser===e)return[2];t=[],d.label=1;case 1:d.trys.push([1,6,,7]),r=0,i=this.queue,d.label=2;case 2:return r<i.length?(s=i[r],[4,s(e)]):[3,5];case 3:d.sent(),s.onAbort&&t.push(s.onAbort),d.label=4;case 4:return r++,[3,2];case 5:return[3,7];case 6:for(o=d.sent(),t.reverse(),a=0,u=t;a<u.length;a++){l=u[a];try{l()}catch{}}throw this.auth._errorFactory.create("login-blocked",{originalMessage:o==null?void 0:o.message});case 7:return[2]}})})},n}();/**
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
 */function GD(n,e){return e===void 0&&(e={}),O(this,void 0,void 0,function(){return x(this,function(t){return[2,kr(n,"GET","/v2/passwordPolicy",qt(n,e))]})})}/**
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
 */var WD=6,zD=function(){function n(e){var t,r,i,s,o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:WD,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}return n.prototype.validatePassword=function(e){var t,r,i,s,o,a,u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(t=u.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(a=u.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),u},n.prototype.validatePasswordLengthOptions=function(e,t){var r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)},n.prototype.validatePasswordCharacterOptions=function(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);for(var r,i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))},n.prototype.updatePasswordCharacterOptionsStatuses=function(e,t,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))},n}();/**
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
 */var KD=function(){function n(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new J_(this),this.idTokenSubscription=new J_(this),this.beforeStateQueue=new jD(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=yl,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}return n.prototype._initializeWithPersistence=function(e,t){var r=this;return t&&(this._popupRedirectResolver=Sn(t)),this._initializationPromise=this.queue(function(){return O(r,void 0,void 0,function(){var i,s,o;return x(this,function(a){switch(a.label){case 0:return this._deleted?[2]:(i=this,[4,Q_.create(this,e)]);case 1:if(i.persistenceManager=a.sent(),this._deleted)return[2];if(!(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively))return[3,5];a.label=2;case 2:return a.trys.push([2,4,,5]),[4,this._popupRedirectResolver._initialize(this)];case 3:return a.sent(),[3,5];case 4:return a.sent(),[3,5];case 5:return[4,this.initializeCurrentUser(t)];case 6:return a.sent(),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,this._deleted?[2]:(this._isInitialized=!0,[2])}})})}),this._initializationPromise},n.prototype._onStorageEvent=function(){return O(this,void 0,void 0,function(){var e;return x(this,function(t){switch(t.label){case 0:return this._deleted?[2]:[4,this.assertedPersistence.getCurrentUser()];case 1:return e=t.sent(),!this.currentUser&&!e?[2]:this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),[4,this.currentUser.getIdToken()]):[3,3];case 2:return t.sent(),[2];case 3:return[4,this._updateCurrentUser(e,!0)];case 4:return t.sent(),[2]}})})},n.prototype.initializeCurrentUserFromIdToken=function(e){return O(this,void 0,void 0,function(){var t,r,i;return x(this,function(s){switch(s.label){case 0:return s.trys.push([0,4,,6]),[4,LI(this,{idToken:e})];case 1:return t=s.sent(),[4,$a._fromGetAccountInfoResponse(this,t,e)];case 2:return r=s.sent(),[4,this.directlySetCurrentUser(r)];case 3:return s.sent(),[3,6];case 4:return i=s.sent(),console.warn("FirebaseServerApp could not login user with provided authIdToken: ",i),[4,this.directlySetCurrentUser(null)];case 5:return s.sent(),[3,6];case 6:return[2]}})})},n.prototype.initializeCurrentUser=function(e){var t;return O(this,void 0,void 0,function(){var r,i,s,o,a,u,l,d,f=this;return x(this,function(_){switch(_.label){case 0:return Ue(this.app)?(r=this.app.settings.authIdToken,r?[2,new Promise(function(y){setTimeout(function(){return f.initializeCurrentUserFromIdToken(r).then(y,y)})})]:[2,this.directlySetCurrentUser(null)]):[4,this.assertedPersistence.getCurrentUser()];case 1:return i=_.sent(),s=i,o=!1,e&&this.config.authDomain?[4,this.getOrInitRedirectPersistenceManager()]:[3,4];case 2:return _.sent(),a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,u=s==null?void 0:s._redirectEventId,[4,this.tryRedirectSignIn(e)];case 3:l=_.sent(),(!a||a===u)&&(l!=null&&l.user)&&(s=l.user,o=!0),_.label=4;case 4:if(!s)return[2,this.directlySetCurrentUser(null)];if(s._redirectEventId)return[3,9];if(!o)return[3,8];_.label=5;case 5:return _.trys.push([5,7,,8]),[4,this.beforeStateQueue.runMiddleware(s)];case 6:return _.sent(),[3,8];case 7:return d=_.sent(),s=i,this._popupRedirectResolver._overrideRedirectResult(this,function(){return Promise.reject(d)}),[3,8];case 8:return s?[2,this.reloadAndSetCurrentUserOrClear(s)]:[2,this.directlySetCurrentUser(null)];case 9:return X(this._popupRedirectResolver,this,"argument-error"),[4,this.getOrInitRedirectPersistenceManager()];case 10:return _.sent(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?[2,this.directlySetCurrentUser(s)]:[2,this.reloadAndSetCurrentUserOrClear(s)]}})})},n.prototype.tryRedirectSignIn=function(e){return O(this,void 0,void 0,function(){var t;return x(this,function(r){switch(r.label){case 0:t=null,r.label=1;case 1:return r.trys.push([1,3,,5]),[4,this._popupRedirectResolver._completeRedirectFn(this,e,!0)];case 2:return t=r.sent(),[3,5];case 3:return r.sent(),[4,this._setRedirectUser(null)];case 4:return r.sent(),[3,5];case 5:return[2,t]}})})},n.prototype.reloadAndSetCurrentUserOrClear=function(e){return O(this,void 0,void 0,function(){var t;return x(this,function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),[4,qa(e)];case 1:return r.sent(),[3,3];case 2:return t=r.sent(),(t==null?void 0:t.code)!=="auth/".concat("network-request-failed")?[2,this.directlySetCurrentUser(null)]:[3,3];case 3:return[2,this.directlySetCurrentUser(e)]}})})},n.prototype.useDeviceLanguage=function(){this.languageCode=vD()},n.prototype._delete=function(){return O(this,void 0,void 0,function(){return x(this,function(e){return this._deleted=!0,[2]})})},n.prototype.updateCurrentUser=function(e){return O(this,void 0,void 0,function(){var t;return x(this,function(r){return Ue(this.app)?[2,Promise.reject(Xr(this))]:(t=e?ie(e):null,t&&X(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),[2,this._updateCurrentUser(t&&t._clone(this))])})})},n.prototype._updateCurrentUser=function(e,t){return t===void 0&&(t=!1),O(this,void 0,void 0,function(){var r=this;return x(this,function(i){switch(i.label){case 0:return this._deleted?[2]:(e&&X(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t?[3,2]:[4,this.beforeStateQueue.runMiddleware(e)]);case 1:i.sent(),i.label=2;case 2:return[2,this.queue(function(){return O(r,void 0,void 0,function(){return x(this,function(s){switch(s.label){case 0:return[4,this.directlySetCurrentUser(e)];case 1:return s.sent(),this.notifyAuthListeners(),[2]}})})})]}})})},n.prototype.signOut=function(){return O(this,void 0,void 0,function(){return x(this,function(e){switch(e.label){case 0:return Ue(this.app)?[2,Promise.reject(Xr(this))]:[4,this.beforeStateQueue.runMiddleware(null)];case 1:return e.sent(),this.redirectPersistenceManager||this._popupRedirectResolver?[4,this._setRedirectUser(null)]:[3,3];case 2:e.sent(),e.label=3;case 3:return[2,this._updateCurrentUser(null,!0)]}})})},n.prototype.setPersistence=function(e){var t=this;return Ue(this.app)?Promise.reject(Xr(this)):this.queue(function(){return O(t,void 0,void 0,function(){return x(this,function(r){switch(r.label){case 0:return[4,this.assertedPersistence.setPersistence(Sn(e))];case 1:return r.sent(),[2]}})})})},n.prototype._getRecaptchaConfig=function(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]},n.prototype.validatePassword=function(e){return O(this,void 0,void 0,function(){var t;return x(this,function(r){switch(r.label){case 0:return this._getPasswordPolicyInternal()?[3,2]:[4,this._updatePasswordPolicy()];case 1:r.sent(),r.label=2;case 2:return t=this._getPasswordPolicyInternal(),t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?[2,Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{}))]:[2,t.validatePassword(e)]}})})},n.prototype._getPasswordPolicyInternal=function(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]},n.prototype._updatePasswordPolicy=function(){return O(this,void 0,void 0,function(){var e,t;return x(this,function(r){switch(r.label){case 0:return[4,GD(this)];case 1:return e=r.sent(),t=new zD(e),this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t,[2]}})})},n.prototype._getPersistence=function(){return this.assertedPersistence.persistence.type},n.prototype._updateErrorMap=function(e){this._errorFactory=new qn("auth","Firebase",e())},n.prototype.onAuthStateChanged=function(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)},n.prototype.beforeAuthStateChanged=function(e,t){return this.beforeStateQueue.pushCallback(e,t)},n.prototype.onIdTokenChanged=function(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)},n.prototype.authStateReady=function(){var e=this;return new Promise(function(t,r){if(e.currentUser)t();else var i=e.onAuthStateChanged(function(){i(),t()},r)})},n.prototype.revokeAccessToken=function(e){return O(this,void 0,void 0,function(){var t,r;return x(this,function(i){switch(i.label){case 0:return this.currentUser?[4,this.currentUser.getIdToken()]:[3,3];case 1:return t=i.sent(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t},this.tenantId!=null&&(r.tenantId=this.tenantId),[4,VD(this,r)];case 2:i.sent(),i.label=3;case 3:return[2]}})})},n.prototype.toJSON=function(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}},n.prototype._setRedirectUser=function(e,t){return O(this,void 0,void 0,function(){var r;return x(this,function(i){switch(i.label){case 0:return[4,this.getOrInitRedirectPersistenceManager(t)];case 1:return r=i.sent(),[2,e===null?r.removeCurrentUser():r.setCurrentUser(e)]}})})},n.prototype.getOrInitRedirectPersistenceManager=function(e){return O(this,void 0,void 0,function(){var t,r,i;return x(this,function(s){switch(s.label){case 0:return this.redirectPersistenceManager?[3,3]:(t=e&&Sn(e)||this._popupRedirectResolver,X(t,this,"argument-error"),r=this,[4,Q_.create(this,[Sn(t._redirectPersistence)],"redirectUser")]);case 1:return r.redirectPersistenceManager=s.sent(),i=this,[4,this.redirectPersistenceManager.getCurrentUser()];case 2:i.redirectUser=s.sent(),s.label=3;case 3:return[2,this.redirectPersistenceManager]}})})},n.prototype._redirectUserForId=function(e){var t,r;return O(this,void 0,void 0,function(){var i=this;return x(this,function(s){switch(s.label){case 0:return this._isInitialized?[4,this.queue(function(){return O(i,void 0,void 0,function(){return x(this,function(o){return[2]})})})]:[3,2];case 1:s.sent(),s.label=2;case 2:return((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?[2,this._currentUser]:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?[2,this.redirectUser]:[2,null]}})})},n.prototype._persistUserIfCurrent=function(e){return O(this,void 0,void 0,function(){var t=this;return x(this,function(r){return e===this.currentUser?[2,this.queue(function(){return O(t,void 0,void 0,function(){return x(this,function(i){return[2,this.directlySetCurrentUser(e)]})})})]:[2]})})},n.prototype._notifyListenersIfCurrent=function(e){e===this.currentUser&&this.notifyAuthListeners()},n.prototype._key=function(){return"".concat(this.config.authDomain,":").concat(this.config.apiKey,":").concat(this.name)},n.prototype._startProactiveRefresh=function(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()},n.prototype._stopProactiveRefresh=function(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()},Object.defineProperty(n.prototype,"_currentUser",{get:function(){return this.currentUser},enumerable:!1,configurable:!0}),n.prototype.notifyAuthListeners=function(){var e,t;if(this._isInitialized){this.idTokenSubscription.next(this.currentUser);var r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}},n.prototype.registerStateListener=function(e,t,r,i){var s=this;if(this._deleted)return function(){};var o=typeof t=="function"?t:t.next.bind(t),a=!1,u=this._isInitialized?Promise.resolve():this._initializationPromise;if(X(u,this,"internal-error"),u.then(function(){a||o(s.currentUser)}),typeof t=="function"){var l=e.addObserver(t,r,i);return function(){a=!0,l()}}else{var d=e.addObserver(t);return function(){a=!0,d()}}},n.prototype.directlySetCurrentUser=function(e){return O(this,void 0,void 0,function(){return x(this,function(t){switch(t.label){case 0:return this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?[4,this.assertedPersistence.setCurrentUser(e)]:[3,2];case 1:return t.sent(),[3,4];case 2:return[4,this.assertedPersistence.removeCurrentUser()];case 3:t.sent(),t.label=4;case 4:return[2]}})})},n.prototype.queue=function(e){return this.operations=this.operations.then(e,e),this.operations},Object.defineProperty(n.prototype,"assertedPersistence",{get:function(){return X(this.persistenceManager,this,"internal-error"),this.persistenceManager},enumerable:!1,configurable:!0}),n.prototype._logFramework=function(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=$I(this.config.clientPlatform,this._getFrameworks()))},n.prototype._getFrameworks=function(){return this.frameworks},n.prototype._getAdditionalHeaders=function(){var e;return O(this,void 0,void 0,function(){var t,r,i,s;return x(this,function(o){switch(o.label){case 0:return t=(s={},s["X-Client-Version"]=this.clientVersion,s),this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId),[4,(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader()];case 1:return r=o.sent(),r&&(t["X-Firebase-Client"]=r),[4,this._getAppCheckToken()];case 2:return i=o.sent(),i&&(t["X-Firebase-AppCheck"]=i),[2,t]}})})},n.prototype._getAppCheckToken=function(){var e;return O(this,void 0,void 0,function(){var t;return x(this,function(r){switch(r.label){case 0:return[4,(e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken()];case 1:return t=r.sent(),t!=null&&t.error&&mD("Error while retrieving App Check token: ".concat(t.error)),[2,t==null?void 0:t.token]}})})},n}();function jI(n){return ie(n)}var J_=function(){function n(e){var t=this;this.auth=e,this.observer=null,this.addObserver=Tm(function(r){return t.observer=r})}return Object.defineProperty(n.prototype,"next",{get:function(){return X(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)},enumerable:!1,configurable:!0}),n}();/**
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
 */var GI={loadJS:function(){return O(this,void 0,void 0,function(){return x(this,function(n){throw new Error("Unable to load external scripts")})})},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function HD(n){return GI.loadJS(n)}function QD(){return GI.recaptchaEnterpriseScript}var YD="recaptcha-enterprise",JD="NO_RECAPTCHA",XD=function(){function n(e){this.type=YD,this.auth=jI(e)}return n.prototype.verify=function(e,t){return e===void 0&&(e="verify"),t===void 0&&(t=!1),O(this,void 0,void 0,function(){function r(o){return O(this,void 0,void 0,function(){var a=this;return x(this,function(u){if(!t){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return[2,o._agentRecaptchaConfig.siteKey];if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return[2,o._tenantRecaptchaConfigs[o.tenantId].siteKey]}return[2,new Promise(function(l,d){return O(a,void 0,void 0,function(){return x(this,function(f){return bD(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(function(_){if(_.recaptchaKey===void 0)d(new Error("recaptcha Enterprise site key undefined"));else{var y=new CD(_);return o.tenantId==null?o._agentRecaptchaConfig=y:o._tenantRecaptchaConfigs[o.tenantId]=y,l(y.siteKey)}}).catch(function(_){d(_)}),[2]})})})]})})}function i(o,a,u){var l=window.grecaptcha;W_(l)?l.enterprise.ready(function(){l.enterprise.execute(o,{action:e}).then(function(d){a(d)}).catch(function(){a(JD)})}):u(Error("No reCAPTCHA enterprise script loaded."))}var s=this;return x(this,function(o){return[2,new Promise(function(a,u){r(s.auth).then(function(l){if(!t&&W_(window.grecaptcha))i(l,a,u);else{if(typeof window>"u"){u(new Error("RecaptchaVerifier is only supported in browser"));return}var d=QD();d.length!==0&&(d+=l),HD(d).then(function(){i(l,a,u)}).catch(function(f){u(f)})}}).catch(function(l){u(l)})})]})})},n}();function X_(n,e,t,r){return r===void 0&&(r=!1),O(this,void 0,void 0,function(){var i,s,o;return x(this,function(a){switch(a.label){case 0:i=new XD(n),a.label=1;case 1:return a.trys.push([1,3,,5]),[4,i.verify(t)];case 2:return s=a.sent(),[3,5];case 3:return a.sent(),[4,i.verify(t,!0)];case 4:return s=a.sent(),[3,5];case 5:return o=Te({},e),r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),[2,o]}})})}function Z_(n,e,t,r){var i;return O(this,void 0,void 0,function(){var s,o=this;return x(this,function(a){switch(a.label){case 0:return!((i=n._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")?[4,X_(n,e,t,t==="getOobCode")]:[3,2];case 1:return s=a.sent(),[2,r(n,s)];case 2:return[2,r(n,e).catch(function(u){return O(o,void 0,void 0,function(){var l;return x(this,function(d){switch(d.label){case 0:return u.code!=="auth/".concat("missing-recaptcha-token")?[3,2]:(console.log("".concat(t," is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.")),[4,X_(n,e,t,t==="getOobCode")]);case 1:return l=d.sent(),[2,r(n,l)];case 2:return[2,Promise.reject(u)]}})})})]}})})}function ZD(n,e){var t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(Sn);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
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
 */var uo=function(){function n(e,t){this.providerId=e,this.signInMethod=t}return n.prototype.toJSON=function(){return Jt("not implemented")},n.prototype._getIdTokenResponse=function(e){return Jt("not implemented")},n.prototype._linkToIdToken=function(e,t){return Jt("not implemented")},n.prototype._getReauthenticationResolver=function(e){return Jt("not implemented")},n}();function eO(n,e){return O(this,void 0,void 0,function(){return x(this,function(t){return[2,kr(n,"POST","/v1/accounts:signUp",e)]})})}/**
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
 */function tO(n,e){return O(this,void 0,void 0,function(){return x(this,function(t){return[2,Nr(n,"POST","/v1/accounts:signInWithPassword",qt(n,e))]})})}/**
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
 */function nO(n,e){return O(this,void 0,void 0,function(){return x(this,function(t){return[2,Nr(n,"POST","/v1/accounts:signInWithEmailLink",qt(n,e))]})})}function rO(n,e){return O(this,void 0,void 0,function(){return x(this,function(t){return[2,Nr(n,"POST","/v1/accounts:signInWithEmailLink",qt(n,e))]})})}/**
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
 */var em=function(n){Ee(e,n);function e(t,r,i,s){s===void 0&&(s=null);var o=n.call(this,"password",i)||this;return o._email=t,o._password=r,o._tenantId=s,o}return e._fromEmailAndPassword=function(t,r){return new e(t,r,"password")},e._fromEmailAndCode=function(t,r,i){return i===void 0&&(i=null),new e(t,r,"emailLink",i)},e.prototype.toJSON=function(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}},e.fromJSON=function(t){var r=typeof t=="string"?JSON.parse(t):t;if(r!=null&&r.email&&(r!=null&&r.password)){if(r.signInMethod==="password")return this._fromEmailAndPassword(r.email,r.password);if(r.signInMethod==="emailLink")return this._fromEmailAndCode(r.email,r.password,r.tenantId)}return null},e.prototype._getIdTokenResponse=function(t){return O(this,void 0,void 0,function(){var r;return x(this,function(i){switch(this.signInMethod){case"password":return r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"},[2,Z_(t,r,"signInWithPassword",tO)];case"emailLink":return[2,nO(t,{email:this._email,oobCode:this._password})];default:an(t,"internal-error")}return[2]})})},e.prototype._linkToIdToken=function(t,r){return O(this,void 0,void 0,function(){var i;return x(this,function(s){switch(this.signInMethod){case"password":return i={idToken:r,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"},[2,Z_(t,i,"signUpPassword",eO)];case"emailLink":return[2,rO(t,{idToken:r,email:this._email,oobCode:this._password})];default:an(t,"internal-error")}return[2]})})},e.prototype._getReauthenticationResolver=function(t){return this._getIdTokenResponse(t)},e}(uo);/**
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
 */function en(n,e){return O(this,void 0,void 0,function(){return x(this,function(t){return[2,Nr(n,"POST","/v1/accounts:signInWithIdp",qt(n,e))]})})}/**
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
 */var iO="http://localhost",gi=function(n){Ee(e,n);function e(){var t=n!==null&&n.apply(this,arguments)||this;return t.pendingToken=null,t}return e._fromParams=function(t){var r=new e(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(r.idToken=t.idToken),t.accessToken&&(r.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(r.nonce=t.nonce),t.pendingToken&&(r.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(r.accessToken=t.oauthToken,r.secret=t.oauthTokenSecret):an("argument-error"),r},e.prototype.toJSON=function(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}},e.fromJSON=function(t){var r=typeof t=="string"?JSON.parse(t):t,i=r.providerId,s=r.signInMethod,o=yi(r,["providerId","signInMethod"]);if(!i||!s)return null;var a=new e(i,s);return a.idToken=o.idToken||void 0,a.accessToken=o.accessToken||void 0,a.secret=o.secret,a.nonce=o.nonce,a.pendingToken=o.pendingToken||null,a},e.prototype._getIdTokenResponse=function(t){var r=this.buildRequest();return en(t,r)},e.prototype._linkToIdToken=function(t,r){var i=this.buildRequest();return i.idToken=r,en(t,i)},e.prototype._getReauthenticationResolver=function(t){var r=this.buildRequest();return r.autoCreate=!1,en(t,r)},e.prototype.buildRequest=function(){var t={requestUri:iO,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{var r={};this.idToken&&(r.id_token=this.idToken),this.accessToken&&(r.access_token=this.accessToken),this.secret&&(r.oauth_token_secret=this.secret),r.providerId=this.providerId,this.nonce&&!this.pendingToken&&(r.nonce=this.nonce),t.postBody=cn(r)}return t},e}(uo);/**
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
 */var wu;function sO(n,e){return O(this,void 0,void 0,function(){return x(this,function(t){return[2,Nr(n,"POST","/v1/accounts:signInWithPhoneNumber",qt(n,e))]})})}function oO(n,e){return O(this,void 0,void 0,function(){var t;return x(this,function(r){switch(r.label){case 0:return[4,Nr(n,"POST","/v1/accounts:signInWithPhoneNumber",qt(n,e))];case 1:if(t=r.sent(),t.temporaryProof)throw cs(n,"account-exists-with-different-credential",t);return[2,t]}})})}var aO=(wu={},wu.USER_NOT_FOUND="user-not-found",wu);function cO(n,e){return O(this,void 0,void 0,function(){var t;return x(this,function(r){return t=Te(Te({},e),{operation:"REAUTH"}),[2,Nr(n,"POST","/v1/accounts:signInWithPhoneNumber",qt(n,t),aO)]})})}/**
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
 */(function(n){Ee(e,n);function e(t){var r=n.call(this,"phone","phone")||this;return r.params=t,r}return e._fromVerification=function(t,r){return new e({verificationId:t,verificationCode:r})},e._fromTokenResponse=function(t,r){return new e({phoneNumber:t,temporaryProof:r})},e.prototype._getIdTokenResponse=function(t){return sO(t,this._makeVerificationRequest())},e.prototype._linkToIdToken=function(t,r){return oO(t,Te({idToken:r},this._makeVerificationRequest()))},e.prototype._getReauthenticationResolver=function(t){return cO(t,this._makeVerificationRequest())},e.prototype._makeVerificationRequest=function(){var t=this.params,r=t.temporaryProof,i=t.phoneNumber,s=t.verificationId,o=t.verificationCode;return r&&i?{temporaryProof:r,phoneNumber:i}:{sessionInfo:s,code:o}},e.prototype.toJSON=function(){var t={providerId:this.providerId};return this.params.phoneNumber&&(t.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(t.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(t.verificationCode=this.params.verificationCode),this.params.verificationId&&(t.verificationId=this.params.verificationId),t},e.fromJSON=function(t){typeof t=="string"&&(t=JSON.parse(t));var r=t,i=r.verificationId,s=r.verificationCode,o=r.phoneNumber,a=r.temporaryProof;return!s&&!i&&!o&&!a?null:new e({verificationId:i,verificationCode:s,phoneNumber:o,temporaryProof:a})},e})(uo);/**
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
 */function uO(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function lO(n){var e=kt(Nt(n)).link,t=e?kt(Nt(e)).deep_link_id:null,r=kt(Nt(n)).deep_link_id,i=r?kt(Nt(r)).link:null;return i||r||t||e||n}var hO=function(){function n(e){var t,r,i,s,o,a,u=kt(Nt(e)),l=(t=u.apiKey)!==null&&t!==void 0?t:null,d=(r=u.oobCode)!==null&&r!==void 0?r:null,f=uO((i=u.mode)!==null&&i!==void 0?i:null);X(l&&d&&f,"argument-error"),this.apiKey=l,this.operation=f,this.code=d,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=u.tenantId)!==null&&a!==void 0?a:null}return n.parseLink=function(e){var t=lO(e);try{return new n(t)}catch{return null}},n}();/**
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
 */var Jx=function(){function n(){this.providerId=n.PROVIDER_ID}return n.credential=function(e,t){return em._fromEmailAndPassword(e,t)},n.credentialWithLink=function(e,t){var r=hO.parseLink(t);return X(r,"argument-error"),em._fromEmailAndCode(e,r.code,r.tenantId)},n.PROVIDER_ID="password",n.EMAIL_PASSWORD_SIGN_IN_METHOD="password",n.EMAIL_LINK_SIGN_IN_METHOD="emailLink",n}();/**
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
 */var WI=function(){function n(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}return n.prototype.setDefaultLanguage=function(e){this.defaultLanguageCode=e},n.prototype.setCustomParameters=function(e){return this.customParameters=e,this},n.prototype.getCustomParameters=function(){return this.customParameters},n}();/**
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
 */var lo=function(n){Ee(e,n);function e(){var t=n!==null&&n.apply(this,arguments)||this;return t.scopes=[],t}return e.prototype.addScope=function(t){return this.scopes.includes(t)||this.scopes.push(t),this},e.prototype.getScopes=function(){return yt([],this.scopes,!0)},e}(WI);(function(n){Ee(e,n);function e(){return n!==null&&n.apply(this,arguments)||this}return e.credentialFromJSON=function(t){var r=typeof t=="string"?JSON.parse(t):t;return X("providerId"in r&&"signInMethod"in r,"argument-error"),gi._fromParams(r)},e.prototype.credential=function(t){return this._credential(Te(Te({},t),{nonce:t.rawNonce}))},e.prototype._credential=function(t){return X(t.idToken||t.accessToken,"argument-error"),gi._fromParams(Te(Te({},t),{providerId:this.providerId,signInMethod:this.providerId}))},e.credentialFromResult=function(t){return e.oauthCredentialFromTaggedObject(t)},e.credentialFromError=function(t){return e.oauthCredentialFromTaggedObject(t.customData||{})},e.oauthCredentialFromTaggedObject=function(t){var r=t._tokenResponse;if(!r)return null;var i=r,s=i.oauthIdToken,o=i.oauthAccessToken,a=i.oauthTokenSecret,u=i.pendingToken,l=i.nonce,d=i.providerId;if(!o&&!a&&!s&&!u||!d)return null;try{return new e(d)._credential({idToken:s,accessToken:o,nonce:l,pendingToken:u})}catch{return null}},e})(lo);/**
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
 */(function(n){Ee(e,n);function e(){return n.call(this,"facebook.com")||this}return e.credential=function(t){return gi._fromParams({providerId:e.PROVIDER_ID,signInMethod:e.FACEBOOK_SIGN_IN_METHOD,accessToken:t})},e.credentialFromResult=function(t){return e.credentialFromTaggedObject(t)},e.credentialFromError=function(t){return e.credentialFromTaggedObject(t.customData||{})},e.credentialFromTaggedObject=function(t){var r=t._tokenResponse;if(!r||!("oauthAccessToken"in r)||!r.oauthAccessToken)return null;try{return e.credential(r.oauthAccessToken)}catch{return null}},e.FACEBOOK_SIGN_IN_METHOD="facebook.com",e.PROVIDER_ID="facebook.com",e})(lo);/**
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
 */(function(n){Ee(e,n);function e(){var t=n.call(this,"google.com")||this;return t.addScope("profile"),t}return e.credential=function(t,r){return gi._fromParams({providerId:e.PROVIDER_ID,signInMethod:e.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:r})},e.credentialFromResult=function(t){return e.credentialFromTaggedObject(t)},e.credentialFromError=function(t){return e.credentialFromTaggedObject(t.customData||{})},e.credentialFromTaggedObject=function(t){var r=t._tokenResponse;if(!r)return null;var i=r,s=i.oauthIdToken,o=i.oauthAccessToken;if(!s&&!o)return null;try{return e.credential(s,o)}catch{return null}},e.GOOGLE_SIGN_IN_METHOD="google.com",e.PROVIDER_ID="google.com",e})(lo);/**
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
 */(function(n){Ee(e,n);function e(){return n.call(this,"github.com")||this}return e.credential=function(t){return gi._fromParams({providerId:e.PROVIDER_ID,signInMethod:e.GITHUB_SIGN_IN_METHOD,accessToken:t})},e.credentialFromResult=function(t){return e.credentialFromTaggedObject(t)},e.credentialFromError=function(t){return e.credentialFromTaggedObject(t.customData||{})},e.credentialFromTaggedObject=function(t){var r=t._tokenResponse;if(!r||!("oauthAccessToken"in r)||!r.oauthAccessToken)return null;try{return e.credential(r.oauthAccessToken)}catch{return null}},e.GITHUB_SIGN_IN_METHOD="github.com",e.PROVIDER_ID="github.com",e})(lo);/**
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
 */var dO="http://localhost",tm=function(n){Ee(e,n);function e(t,r){var i=n.call(this,t,t)||this;return i.pendingToken=r,i}return e.prototype._getIdTokenResponse=function(t){var r=this.buildRequest();return en(t,r)},e.prototype._linkToIdToken=function(t,r){var i=this.buildRequest();return i.idToken=r,en(t,i)},e.prototype._getReauthenticationResolver=function(t){var r=this.buildRequest();return r.autoCreate=!1,en(t,r)},e.prototype.toJSON=function(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}},e.fromJSON=function(t){var r=typeof t=="string"?JSON.parse(t):t,i=r.providerId,s=r.signInMethod,o=r.pendingToken;return!i||!s||!o||i!==s?null:new e(i,o)},e._create=function(t,r){return new e(t,r)},e.prototype.buildRequest=function(){return{requestUri:dO,returnSecureToken:!0,pendingToken:this.pendingToken}},e}(uo);/**
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
 */var fO="saml.";(function(n){Ee(e,n);function e(t){return X(t.startsWith(fO),"argument-error"),n.call(this,t)||this}return e.credentialFromResult=function(t){return e.samlCredentialFromTaggedObject(t)},e.credentialFromError=function(t){return e.samlCredentialFromTaggedObject(t.customData||{})},e.credentialFromJSON=function(t){var r=tm.fromJSON(t);return X(r,"argument-error"),r},e.samlCredentialFromTaggedObject=function(t){var r=t._tokenResponse;if(!r)return null;var i=r,s=i.pendingToken,o=i.providerId;if(!s||!o)return null;try{return tm._create(o,s)}catch{return null}},e})(WI);/**
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
 */(function(n){Ee(e,n);function e(){return n.call(this,"twitter.com")||this}return e.credential=function(t,r){return gi._fromParams({providerId:e.PROVIDER_ID,signInMethod:e.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:r})},e.credentialFromResult=function(t){return e.credentialFromTaggedObject(t)},e.credentialFromError=function(t){return e.credentialFromTaggedObject(t.customData||{})},e.credentialFromTaggedObject=function(t){var r=t._tokenResponse;if(!r)return null;var i=r,s=i.oauthAccessToken,o=i.oauthTokenSecret;if(!s||!o)return null;try{return e.credential(s,o)}catch{return null}},e.TWITTER_SIGN_IN_METHOD="twitter.com",e.PROVIDER_ID="twitter.com",e})(lo);/**
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
 */var pd=function(){function n(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}return n._fromIdTokenResponse=function(e,t,r,i){return i===void 0&&(i=!1),O(this,void 0,void 0,function(){var s,o,a;return x(this,function(u){switch(u.label){case 0:return[4,$a._fromIdTokenResponse(e,r,i)];case 1:return s=u.sent(),o=nm(r),a=new n({user:s,providerId:o,_tokenResponse:r,operationType:t}),[2,a]}})})},n._forOperation=function(e,t,r){return O(this,void 0,void 0,function(){var i;return x(this,function(s){switch(s.label){case 0:return[4,e._updateTokensIfNecessary(r,!0)];case 1:return s.sent(),i=nm(r),[2,new n({user:e,providerId:i,_tokenResponse:r,operationType:t})]}})})},n}();function nm(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */var pO=function(n){Ee(e,n);function e(t,r,i,s){var o=this,a;return o=n.call(this,r.code,r.message)||this,o.operationType=i,o.user=s,Object.setPrototypeOf(o,e.prototype),o.customData={appName:t.name,tenantId:(a=t.tenantId)!==null&&a!==void 0?a:void 0,_serverResponse:r.customData._serverResponse,operationType:i},o}return e._fromErrorAndOperation=function(t,r,i,s){return new e(t,r,i,s)},e}(_t);function zI(n,e,t,r){var i=e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n);return i.catch(function(s){throw s.code==="auth/".concat("multi-factor-auth-required")?pO._fromErrorAndOperation(n,s,e,r):s})}function _O(n,e,t){return t===void 0&&(t=!1),O(this,void 0,void 0,function(){var r,i,s,o,a,u;return x(this,function(l){switch(l.label){case 0:return i=qs,s=[n],a=(o=e)._linkToIdToken,u=[n.auth],[4,n.getIdToken()];case 1:return[4,i.apply(void 0,s.concat([a.apply(o,u.concat([l.sent()])),t]))];case 2:return r=l.sent(),[2,pd._forOperation(n,"link",r)]}})})}/**
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
 */function mO(n,e,t){return t===void 0&&(t=!1),O(this,void 0,void 0,function(){var r,i,s,o,a,u;return x(this,function(l){switch(l.label){case 0:if(r=n.auth,Ue(r.app))return[2,Promise.reject(Xr(r))];i="reauthenticate",l.label=1;case 1:return l.trys.push([1,3,,4]),[4,qs(n,zI(r,i,e,n),t)];case 2:return s=l.sent(),X(s.idToken,r,"internal-error"),o=fd(s.idToken),X(o,r,"internal-error"),a=o.sub,X(n.uid===a,r,"user-mismatch"),[2,pd._forOperation(n,i,s)];case 3:throw u=l.sent(),(u==null?void 0:u.code)==="auth/".concat("user-not-found")&&an(r,"user-mismatch"),u;case 4:return[2]}})})}/**
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
 */function gO(n,e,t){return t===void 0&&(t=!1),O(this,void 0,void 0,function(){var r,i,s;return x(this,function(o){switch(o.label){case 0:return Ue(n.app)?[2,Promise.reject(Xr(n))]:(r="signIn",[4,zI(n,r,e)]);case 1:return i=o.sent(),[4,pd._fromIdTokenResponse(n,r,i)];case 2:return s=o.sent(),t?[3,4]:[4,n._updateCurrentUser(s.user)];case 3:o.sent(),o.label=4;case 4:return[2,s]}})})}/**
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
 */var KI=function(){function n(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}return n._fromServerResponse=function(e,t){return"phoneInfo"in t?yO._fromServerResponse(e,t):"totpInfo"in t?vO._fromServerResponse(e,t):an(e,"internal-error")},n}(),yO=function(n){Ee(e,n);function e(t){var r=n.call(this,"phone",t)||this;return r.phoneNumber=t.phoneInfo,r}return e._fromServerResponse=function(t,r){return new e(r)},e}(KI),vO=function(n){Ee(e,n);function e(t){return n.call(this,"totp",t)||this}return e._fromServerResponse=function(t,r){return new e(r)},e}(KI),_d=function(){function n(e,t,r){r===void 0&&(r={}),this.isNewUser=e,this.providerId=t,this.profile=r}return n}(),HI=function(n){Ee(e,n);function e(t,r,i,s){var o=n.call(this,t,r,i)||this;return o.username=s,o}return e}(_d);(function(n){Ee(e,n);function e(t,r){return n.call(this,t,"facebook.com",r)||this}return e})(_d);(function(n){Ee(e,n);function e(t,r){return n.call(this,t,"github.com",r,typeof(r==null?void 0:r.login)=="string"?r==null?void 0:r.login:null)||this}return e})(HI);(function(n){Ee(e,n);function e(t,r){return n.call(this,t,"google.com",r)||this}return e})(_d);(function(n){Ee(e,n);function e(t,r,i){return n.call(this,t,"twitter.com",r,i)||this}return e})(HI);var rm="@firebase/auth",im="1.7.9";/**
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
 */var IO=function(){function n(e){this.auth=e,this.internalListeners=new Map}return n.prototype.getUid=function(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null},n.prototype.getToken=function(e){return O(this,void 0,void 0,function(){var t;return x(this,function(r){switch(r.label){case 0:return this.assertAuthConfigured(),[4,this.auth._initializationPromise];case 1:return r.sent(),this.auth.currentUser?[4,this.auth.currentUser.getIdToken(e)]:[2,null];case 2:return t=r.sent(),[2,{accessToken:t}]}})})},n.prototype.addAuthTokenListener=function(e){if(this.assertAuthConfigured(),!this.internalListeners.has(e)){var t=this.auth.onIdTokenChanged(function(r){e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}},n.prototype.removeAuthTokenListener=function(e){this.assertAuthConfigured();var t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())},n.prototype.assertAuthConfigured=function(){X(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")},n.prototype.updateProactiveRefresh=function(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()},n}();/**
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
 */function EO(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function TO(n){Lt(new bt("auth",function(e,t){var r=t.options,i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),a=i.options,u=a.apiKey,l=a.authDomain;X(u&&!u.includes(":"),"invalid-api-key",{appName:i.name});var d={apiKey:u,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:$I(n)},f=new KD(i,s,o,d);return ZD(f,r),f},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(function(e,t,r){var i=e.getProvider("auth-internal");i.initialize()})),Lt(new bt("auth-internal",function(e){var t=jI(e.getProvider("auth").getImmediate());return function(r){return new IO(r)}(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),ft(rm,im,EO(n)),ft(rm,im,"esm5")}/**
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
 */var QI=function(){function n(e,t){this.storageRetriever=e,this.type=t}return n.prototype._isAvailable=function(){try{return this.storage?(this.storage.setItem(j_,"1"),this.storage.removeItem(j_),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}},n.prototype._set=function(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()},n.prototype._get=function(e){var t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)},n.prototype._remove=function(e){return this.storage.removeItem(e),Promise.resolve()},Object.defineProperty(n.prototype,"storage",{get:function(){return this.storageRetriever()},enumerable:!1,configurable:!0}),n}();/**
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
 */var wO=1e3,AO=10;(function(n){Ee(e,n);function e(){var t=n.call(this,function(){return window.localStorage},"LOCAL")||this;return t.boundEventHandler=function(r,i){return t.onStorageEvent(r,i)},t.listeners={},t.localCache={},t.pollTimer=null,t.fallbackToPolling=$D(),t._shouldAllowMigration=!0,t}return e.prototype.forAllChangedKeys=function(t){for(var r=0,i=Object.keys(this.listeners);r<i.length;r++){var s=i[r],o=this.storage.getItem(s),a=this.localCache[s];o!==a&&t(s,a,o)}},e.prototype.onStorageEvent=function(t,r){var i=this;if(r===void 0&&(r=!1),!t.key){this.forAllChangedKeys(function(u,l,d){i.notifyListeners(u,d)});return}var s=t.key;r?this.detachListener():this.stopPolling();var o=function(){var u=i.storage.getItem(s);!r&&i.localCache[s]===u||i.notifyListeners(s,u)},a=this.storage.getItem(s);qD()&&a!==t.newValue&&t.newValue!==t.oldValue?setTimeout(o,AO):o()},e.prototype.notifyListeners=function(t,r){this.localCache[t]=r;var i=this.listeners[t];if(i)for(var s=0,o=Array.from(i);s<o.length;s++){var a=o[s];a(r&&JSON.parse(r))}},e.prototype.startPolling=function(){var t=this;this.stopPolling(),this.pollTimer=setInterval(function(){t.forAllChangedKeys(function(r,i,s){t.onStorageEvent(new StorageEvent("storage",{key:r,oldValue:i,newValue:s}),!0)})},wO)},e.prototype.stopPolling=function(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)},e.prototype.attachListener=function(){window.addEventListener("storage",this.boundEventHandler)},e.prototype.detachListener=function(){window.removeEventListener("storage",this.boundEventHandler)},e.prototype._addListener=function(t,r){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(r)},e.prototype._removeListener=function(t,r){this.listeners[t]&&(this.listeners[t].delete(r),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())},e.prototype._set=function(t,r){return O(this,void 0,void 0,function(){return x(this,function(i){switch(i.label){case 0:return[4,n.prototype._set.call(this,t,r)];case 1:return i.sent(),this.localCache[t]=JSON.stringify(r),[2]}})})},e.prototype._get=function(t){return O(this,void 0,void 0,function(){var r;return x(this,function(i){switch(i.label){case 0:return[4,n.prototype._get.call(this,t)];case 1:return r=i.sent(),this.localCache[t]=JSON.stringify(r),[2,r]}})})},e.prototype._remove=function(t){return O(this,void 0,void 0,function(){return x(this,function(r){switch(r.label){case 0:return[4,n.prototype._remove.call(this,t)];case 1:return r.sent(),delete this.localCache[t],[2]}})})},e.type="LOCAL",e})(QI);/**
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
 */(function(n){Ee(e,n);function e(){return n.call(this,function(){return window.sessionStorage},"SESSION")||this}return e.prototype._addListener=function(t,r){},e.prototype._removeListener=function(t,r){},e.type="SESSION",e})(QI);/**
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
 */var md=function(n){Ee(e,n);function e(t){var r=n.call(this,"custom","custom")||this;return r.params=t,r}return e.prototype._getIdTokenResponse=function(t){return en(t,this._buildIdpRequest())},e.prototype._linkToIdToken=function(t,r){return en(t,this._buildIdpRequest(r))},e.prototype._getReauthenticationResolver=function(t){return en(t,this._buildIdpRequest())},e.prototype._buildIdpRequest=function(t){var r={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(r.idToken=t),r},e}(uo);function RO(n){return gO(n.auth,new md(n),n.bypassAuthState)}function CO(n){var e=n.auth,t=n.user;return X(t,e,"internal-error"),mO(t,new md(n),n.bypassAuthState)}function bO(n){return O(this,void 0,void 0,function(){var e,t;return x(this,function(r){return e=n.auth,t=n.user,X(t,e,"internal-error"),[2,_O(t,new md(n),n.bypassAuthState)]})})}/**
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
 */var SO=function(){function n(e,t,r,i,s){s===void 0&&(s=!1),this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}return n.prototype.execute=function(){var e=this;return new Promise(function(t,r){return O(e,void 0,void 0,function(){var i,s;return x(this,function(o){switch(o.label){case 0:this.pendingPromise={resolve:t,reject:r},o.label=1;case 1:return o.trys.push([1,4,,5]),i=this,[4,this.resolver._initialize(this.auth)];case 2:return i.eventManager=o.sent(),[4,this.onExecution()];case 3:return o.sent(),this.eventManager.registerConsumer(this),[3,5];case 4:return s=o.sent(),this.reject(s),[3,5];case 5:return[2]}})})})},n.prototype.onAuthEvent=function(e){return O(this,void 0,void 0,function(){var t,r,i,s,o,a,u,l,d;return x(this,function(f){switch(f.label){case 0:if(t=e.urlResponse,r=e.sessionId,i=e.postBody,s=e.tenantId,o=e.error,a=e.type,o)return this.reject(o),[2];u={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState},f.label=1;case 1:return f.trys.push([1,3,,4]),l=this.resolve,[4,this.getIdpTask(a)(u)];case 2:return l.apply(this,[f.sent()]),[3,4];case 3:return d=f.sent(),this.reject(d),[3,4];case 4:return[2]}})})},n.prototype.onError=function(e){this.reject(e)},n.prototype.getIdpTask=function(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return RO;case"linkViaPopup":case"linkViaRedirect":return bO;case"reauthViaPopup":case"reauthViaRedirect":return CO;default:an(this.auth,"internal-error")}},n.prototype.resolve=function(e){mi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()},n.prototype.reject=function(e){mi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()},n.prototype.unregisterAndCleanUp=function(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()},n}();/**
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
 */var PO="pendingRedirect",Au=new Map;(function(n){Ee(e,n);function e(t,r,i){i===void 0&&(i=!1);var s=n.call(this,t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],r,void 0,i)||this;return s.eventId=null,s}return e.prototype.execute=function(){return O(this,void 0,void 0,function(){var t,r,i,s,o;return x(this,function(a){switch(a.label){case 0:if(t=Au.get(this.auth._key()),t)return[3,8];a.label=1;case 1:return a.trys.push([1,6,,7]),[4,kO(this.resolver,this.auth)];case 2:return r=a.sent(),r?[4,n.prototype.execute.call(this)]:[3,4];case 3:return s=a.sent(),[3,5];case 4:s=null,a.label=5;case 5:return i=s,t=function(){return Promise.resolve(i)},[3,7];case 6:return o=a.sent(),t=function(){return Promise.reject(o)},[3,7];case 7:Au.set(this.auth._key(),t),a.label=8;case 8:return this.bypassAuthState||Au.set(this.auth._key(),function(){return Promise.resolve(null)}),[2,t()]}})})},e.prototype.onAuthEvent=function(t){return O(this,void 0,void 0,function(){var r;return x(this,function(i){switch(i.label){case 0:return t.type==="signInViaRedirect"?[2,n.prototype.onAuthEvent.call(this,t)]:t.type==="unknown"?(this.resolve(null),[2]):t.eventId?[4,this.auth._redirectUserForId(t.eventId)]:[3,2];case 1:if(r=i.sent(),r)return this.user=r,[2,n.prototype.onAuthEvent.call(this,t)];this.resolve(null),i.label=2;case 2:return[2]}})})},e.prototype.onExecution=function(){return O(this,void 0,void 0,function(){return x(this,function(t){return[2]})})},e.prototype.cleanUp=function(){},e})(SO);function kO(n,e){return O(this,void 0,void 0,function(){var t,r,i;return x(this,function(s){switch(s.label){case 0:return t=DO(e),r=NO(n),[4,r._isAvailable()];case 1:return s.sent()?[4,r._get(t)]:[2,!1];case 2:return i=s.sent()==="true",[4,r._remove(t)];case 3:return s.sent(),[2,i]}})})}function NO(n){return Sn(n._redirectPersistence)}function DO(n){return ia(PO,n.config.apiKey,n.name)}/**
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
 */var OO=10*60*1e3,xO=function(){function n(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}return n.prototype.registerConsumer=function(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)},n.prototype.unregisterConsumer=function(e){this.consumers.delete(e)},n.prototype.onEvent=function(e){var t=this;if(this.hasEventBeenHandled(e))return!1;var r=!1;return this.consumers.forEach(function(i){t.isEventForConsumer(e,i)&&(r=!0,t.sendToConsumer(e,i),t.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!VO(e)||(this.hasHandledPotentialRedirect=!0,r||(this.queuedRedirectEvent=e,r=!0)),r},n.prototype.sendToConsumer=function(e,t){var r;if(e.error&&!YI(e)){var i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(hd(this.auth,i))}else t.onAuthEvent(e)},n.prototype.isEventForConsumer=function(e,t){var r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r},n.prototype.hasEventBeenHandled=function(e){return Date.now()-this.lastProcessedEventTime>=OO&&this.cachedEventUids.clear(),this.cachedEventUids.has(sm(e))},n.prototype.saveEventToCache=function(e){this.cachedEventUids.add(sm(e)),this.lastProcessedEventTime=Date.now()},n}();function sm(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(function(e){return e}).join("-")}function YI(n){var e=n.type,t=n.error;return e==="unknown"&&(t==null?void 0:t.code)==="auth/".concat("no-auth-event")}function VO(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return YI(n);default:return!1}}(function(n){Ee(e,n);function e(){var t=n!==null&&n.apply(this,arguments)||this;return t.passiveListeners=new Set,t.initPromise=new Promise(function(r){t.resolveInitialized=r}),t}return e.prototype.addPassiveListener=function(t){this.passiveListeners.add(t)},e.prototype.removePassiveListener=function(t){this.passiveListeners.delete(t)},e.prototype.resetRedirect=function(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1},e.prototype.onEvent=function(t){return this.resolveInitialized(),this.passiveListeners.forEach(function(r){return r(t)}),n.prototype.onEvent.call(this,t)},e.prototype.initialized=function(){return O(this,void 0,void 0,function(){return x(this,function(t){switch(t.label){case 0:return[4,this.initPromise];case 1:return t.sent(),[2]}})})},e})(xO);TO("Cordova");export{sx as A,Bx as B,Mx as C,Fx as D,Jx as E,kx as F,En as G,Nx as H,Ux as I,Ax as J,wx as K,Tx as L,Rx as M,bx as N,Lx as O,Hx as P,Kx as Q,zx as R,ux as S,nx as T,tx as U,yx as a,qx as b,Qx as c,$x as d,vx as e,Wx as f,dx as g,mb as h,UT as i,Cx as j,Sx as k,Ox as l,gx as m,Gx as n,Dx as o,xx as p,Ex as q,ft as r,Vx as s,jx as t,Yx as u,ex as v,ZO as w,rx as x,ix as y,Px as z};

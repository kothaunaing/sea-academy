import{H as r,d,c as f,aC as m,aB as l}from"./index-14pqm9y1.js";async function u(t,a,s,i=null,n){const c=r.get("userId");try{const o=f(d,"notifications"),e={uid:c,postId:n,type:t,[a]:s,timestamp:m(),comment:i};await l(o,e)}catch(o){console.log(o.message)}}export{u as n};

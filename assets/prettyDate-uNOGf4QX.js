const $=["January","February","March","April","May","June","July","August","September","October","November","December"];function M(a){const u=new Date().getTime()-a,t=Math.floor(u/1e3),o=Math.floor(t/60),r=Math.floor(o/60),e=Math.floor(r/24),f=Math.floor(e/7),c=Math.floor(e/30),i=Math.floor(c/12),n=new Date(a),l=n.getFullYear(),h=n.getMonth(),m=n.getDate(),s=`${$[h]} ${m}, ${l}`;if(i>0)return s;if(c>0)return`${s}`;if(f>0)return`${s}`;if(e>0)return`${e} ${e===1?"day":"days"} ago`;if(r>0)return`${r} ${r===1?"hour":"hours"} ago`;if(o>0)return`${o} ${o===1?"minute":"minutes"} ago`;if(t>0)return`${t} ${t===1?"second":"seconds"} ago`}export{M as p};
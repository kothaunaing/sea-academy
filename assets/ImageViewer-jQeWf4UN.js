import{j as e}from"./index-dSD7UM6z.js";import{D as a}from"./Dialog-mGbZrOYD.js";import{S as i}from"./Stack-4mDqqL4m.js";import{T as c}from"./Tooltip-pmR5sMk3.js";import{I as d}from"./IconButton-M8OEfqkq.js";import{C as f}from"./CloseSharp-rElFupoQ.js";const b=({image:r,setViewingImage:o,postImage:l=!1})=>{const t=()=>{const s=(r==null?void 0:r.size)/1048576,n=(r==null?void 0:r.size)/1024;return s>1?`${s.toFixed(2)} MB`:isNaN(s)?null:`${n.toFixed(2)} kB`};return e.jsxs(a,{fullScreen:!0,open:!!r,onClose:()=>o(!1),children:[e.jsx(i,{direction:"row",justifyContent:"end",sx:{pr:1,pt:1},children:e.jsx(c,{placement:"left",arrow:!0,title:"Close",children:e.jsx(d,{size:"small",color:"primary",onClick:()=>{o(!1)},children:e.jsx(f,{})})})}),r?e.jsxs("div",{className:"flex justify-center items-center h-full min-h-[200px] min-w-[200px] relative overflow-auto",children:[t()&&e.jsx("span",{className:"border border-gray-200 absolute right-1 bottom-1 bg-slate-300/70 p-1 rounded-lg font-bold ",children:t()}),e.jsx("img",{alt:r.name,className:"max-w-full max-h-full ",src:l?r.imageURL:r.URL,style:{transition:"transform 0.3s ease-in-out"}})]}):e.jsx("div",{className:" border border-slate-300 rounded-md",children:"Image not available."})]})};export{b as I};

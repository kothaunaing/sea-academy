import{j as e,r as i,h as d,E as l}from"./index-14pqm9y1.js";import{G as u}from"./Grid-h-ZCuhow.js";import{T as b}from"./Typography-F2i8tb5R.js";import{c as j}from"./createSvgIcon-BoAk_7pD.js";import{L as v}from"./LinkSharp-V12iGhFD.js";const N=j(e.jsx("path",{d:"M5 20h14v-2H5zM19 9h-4V3H9v6H5l7 7z"}),"Download"),k=({post:t,setViewingImage:a})=>{const[s,r]=i.useState(4),[m,h]=i.useState(!0),x=t.images.slice(0,s),c=t.images.length-4,p=()=>{h(!1),r(t.images.length)};return x.map((o,g)=>e.jsxs(u,{item:!0,xs:4,sm:3,md:3,className:"relative cursor-pointer",children:[e.jsx("img",{onClick:()=>a(o),className:"w-full  ",src:o.imageURL,alt:o.name}),e.jsx("div",{className:"z-20 absolute right-1 top-1"}),g+1===4&&m&&c?e.jsx("div",{onClick:p,className:"z-10 absolute top-0 right-0 left-0 bottom-0 flex cursor-pointer items-center justify-center",children:e.jsxs("div",{className:"font-medium text-6xl text-white",children:["+",c]})}):""]},`post-${t.id}-image-${o.imageURL}`))},z=({files:t})=>{const a=d(),{mode:n}=a.palette;return e.jsxs(l,{className:"grid mt-2",children:[e.jsx(b,{className:"p-2 font-bold",children:"Files"}),t.map((s,r)=>e.jsx("a",{href:s.fileURL,download:s.name,target:"_blank",children:e.jsxs(l,{className:`p-1 ${n==="light"?"hover:bg-slate-50 text-blue-600":"hover:bg-slate-700 text-blue-500"} cursor-pointer min-h-14 flex gap-x-1 items-center font-bold border-slate-300 border-t ${r===t.length-1&&"border-b"}  `,children:[e.jsx(N,{}),e.jsxs("div",{children:[e.jsx("p",{className:"underline",children:s.name}),(s==null?void 0:s.size)&&e.jsxs("p",{children:[(s.size/(1024*1024)).toFixed(2)," MB"]})]})]})},`${r}-${s.fileURL}`))]})},R=({links:t})=>{const a=d(),{mode:n}=a.palette;return e.jsxs("div",{className:"grid mt-2",children:[e.jsx("p",{className:"p-2 font-bold",children:"Links"}),t.map((s,r)=>e.jsx("a",{href:s.link,target:"_blank",children:e.jsxs(l,{className:`p-1  cursor-pointer min-h-14 flex gap-x-1 items-center font-bold border-slate-300 border-t ${r===t.length-1&&"border-b"} ${n==="light"?"border-slate-200 hover:bg-slate-50 text-blue-600":"border-slate-700 hover:bg-slate-700 text-blue-500"} `,children:[e.jsx(v,{}),e.jsx("div",{children:e.jsx("p",{className:"underline",children:s.title})})]})},`${r}-${s.link}`))]})};export{z as F,k as I,R as L};

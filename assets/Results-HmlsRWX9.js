import{j as e,r as i,A as k,u as E,a as T,s as f,g as $,d as I,b as g,c as L,e as A,f as h}from"./index-bR4MaZOJ.js";import{M as p}from"./EmptyComponent-mtutYQst.js";import{T as R}from"./Tooltip-jKN6Sqwz.js";import{I as a}from"./IconButton-zFeYIEAO.js";import{A as M}from"./ArrowBackSharp-5zmomMcQ.js";import{S as r}from"./Skeleton-LRfmB9RD.js";import{V as H}from"./VisibilitySharp-1EWBzGLv.js";import{c as P}from"./createSvgIcon-3G1Z23-M.js";import{H as B}from"./HomeSharp-WHkGlQjl.js";import"./Portal-vj8E7tuN.js";import"./useControlled-Tg6WpoLH.js";const D=P(e.jsx("path",{d:"M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92"}),"ShareSharp"),X=()=>{const{userId:o}=i.useContext(k),[t,l]=i.useState(!0),[v,N]=i.useState(!1),[j,y]=i.useState(null),[s,w]=i.useState(null),S=`${s==null?void 0:s.testName} - Results`,n=Math.round((s==null?void 0:s.score)/(s==null?void 0:s.totalScore)*100),d=E(),{resultId:x}=T();i.useEffect(()=>{(async()=>{try{l(!0);const m=L(g(I,"users",o),"history"),C=g(m,x),u=await A(C);u.exists()?(w(u.data()),h(l,1200)):(h(l),N(!0))}catch(m){h(l),y("Error fetching current result: "+m.message),console.log("Error")}})()},[x]),i.useEffect(()=>(f(),f()),[]);const b=async()=>{try{await navigator.share({title:"Check out my score!",text:`I scored ${s.score} out of ${s.totalScore} in '${s.testName}'.
Website URL - https://seaacademy.onrender.com/tests/
        `})}catch{console.log("Error")}};return v?e.jsx(p,{text:"No result available"}):j?e.jsx(p,{text:j}):e.jsx("div",{className:"p-5 ",children:e.jsxs("div",{className:"",children:[e.jsxs("div",{className:"flex items-center gap-x-1 h-10 font-medium mb-4",children:[e.jsx(R,{title:"Navigate up",arrow:!0,children:e.jsx(a,{onClick:()=>d("/app/history"),children:e.jsx(M,{})})}),t?e.jsx(r,{height:40,width:150}):e.jsx("div",{className:"text-lg pl-2 place-items-center bg-blue-40",children:S})]}),e.jsxs("div",{className:"flex items-center gap-x-1 mb-2",children:[e.jsx("div",{children:e.jsx("div",{className:"grid items-center justify-center bg-blue-300/50 h-40 w-40 rounded-full",children:e.jsx("div",{className:"grid items-center justify-center bg-blue-400/50 h-32 w-32 rounded-full",children:e.jsx("div",{className:"grid items-center justify-center bg-blue-500/50 h-28 w-28 rounded-full",children:e.jsx("div",{className:"grid  h-20 w-20 items-center justify-center rounded-full",children:e.jsxs("div",{className:"flex flex-col items-center justify-center font-medium",children:[e.jsx("div",{className:"text-sm font-bold",children:"Your Score"}),t?e.jsx(r,{height:40,width:60}):e.jsxs("div",{className:" text-lg ",children:[s.score," / ",s.totalScore]})]})})})})})}),e.jsx("div",{className:`grid items-center justify-center font-bold
             text-lg `,children:t?e.jsx(r,{height:40,width:60}):e.jsxs("div",{children:[" ",s.level]})})]}),t?e.jsx(r,{width:"100%"}):e.jsxs("div",{className:"mt-1 mb-2 h-2 border flex ",children:[e.jsx("div",{className:"h-full",style:{width:`${n}%`}}),e.jsx("div",{className:"h-full bg-gray-200",style:{width:`${100-n}%`}})]}),t?e.jsx(r,{height:200,width:"100%"}):e.jsxs("div",{className:"grid border shadow-lg grid-cols-2 gap-y-2 border p-2 rounded-lg",children:[e.jsx(c,{text:"Score Percentage",value:`${n}%`,color:"text-lime-500"}),e.jsx(c,{text:"Total Questions",value:s.totalScore,color:"text-lime-500"}),e.jsx(c,{text:"Correct",value:s.score,color:"text-green-500"}),e.jsx(c,{text:"Wrong",value:s.totalScore-s.score,color:"text-red-500"}),e.jsx(c,{text:"Date",value:s.date,color:"text-lime-500"}),e.jsx(c,{text:"Time",value:s.time,color:"text-lime-500"}),e.jsx(c,{text:"Time taken",value:$(s.timeTaken)||"Unknown",color:"text-lime-500"})]}),e.jsxs("div",{className:"grid grid-cols-3 justify-center gap-y-2 mt-5",children:[e.jsxs("div",{className:"flex flex-col items-center justify-center",children:[t?e.jsx(r,{height:28,width:28}):e.jsx(a,{onClick:()=>d(`/app/history/${x}/reviews`),children:e.jsx(H,{})}),t?e.jsx(r,{width:60}):e.jsx("div",{className:"text-sm",children:"Review Answers"})]}),e.jsxs("div",{className:"flex flex-col items-center justify-center",children:[t?e.jsx(r,{height:28,width:28}):e.jsx(a,{onClick:b,children:e.jsx(D,{})}),t?e.jsx(r,{width:60}):e.jsx("div",{className:"text-sm",children:"Share Score"})]}),e.jsxs("div",{className:"flex flex-col items-center justify-center",children:[t?e.jsx(r,{height:28,width:28}):e.jsx(a,{onClick:()=>d("/app"),children:e.jsx(B,{})}),t?e.jsx(r,{width:60}):e.jsx("div",{className:"text-sm",children:"Home"})]})]})]})})},c=({text:o,value:t,color:l})=>e.jsxs("div",{children:[e.jsxs("div",{className:`font-medium ${l}`,children:["● ",t]}),e.jsx("div",{className:"text-sm",children:o})]});export{X as default};
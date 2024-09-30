import{j as e,r as l,A as O,c as se,d as Q,E as $,F as M,aE as oe,aF as le,R as ie,aG as re,G as ce,b as P,az as ne,h as de,aH as ue,s as Z,aI as me}from"./index-bRWVs4uH.js";import{C as W}from"./ConfirmDelete-NqjvmjUg.js";import{T as H}from"./TextField-PX96Tbxo.js";import{D as J}from"./Dialog-uv1MMool.js";import{S as V}from"./SaveSharp-m03-ifTv.js";import{C as he}from"./CloseSharp-aSUhFM6n.js";import{g as xe}from"./getImage-SzyEh5nT.js";import{T as w}from"./Tooltip-nMSGeA9R.js";import{I as C}from"./IconButton-G7F5S18q.js";import{c as pe}from"./createSvgIcon-WuW5eNVd.js";import{A as je}from"./ArrowBackSharp-YQSLNk1z.js";import{E as K}from"./EditSharp-_9lv0TsH.js";import{D as X}from"./DeleteSharp-lqhLHkBh.js";import{A as ae}from"./AddSharp-dC4SwfiP.js";import{g as fe}from"./shortenText-S284lLsL.js";import{L as q}from"./Line-bCm3eG6m.js";import{B as ge}from"./BackToAdmin-OZeAHZIU.js";import{M as ve}from"./MoreOption-hnrvXzOA.js";import{M as _}from"./EmptyComponent-B0v7Kud4.js";import{L as Ne}from"./LoadingScreen-s9LTCXQM.js";import{Q as we}from"./QuizSharp-DWJJdkP2.js";import"./Stack-oEJLfJtD.js";import"./Portal-VKXgkAI7.js";import"./Modal-AoQCLYuG.js";import"./debounce-gOEKrWSg.js";import"./useControlled-W8367X1y.js";import"./OtherActions-oKlie0qg.js";const Y=pe(e.jsx("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2m5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12z"}),"CancelSharp"),ee=({data:u})=>{const{text:o,onChangeFn:t,value:n,placeholder:s}=u;return e.jsxs("div",{className:"grid items-center gap-y-2",children:[e.jsx("div",{className:"font-medium",children:o}),e.jsx(H,{onChange:t,value:n,size:"small",placeholder:s})]})},Ce=({data:u})=>{const{close:o,testAdding:t}=u,{userId:n}=l.useContext(O),[s,d]=l.useState(""),[r,i]=l.useState(""),c=s.trim(),m=se(Q,"tests"),x=async a=>{try{await oe(m,a)}catch(f){console.log(f.message)}},j=()=>{const a={uid:n,isUploaded:!1,name:s,description:r,quizzes:[],gradingRules:[],time:le()};x(a),o()},v=()=>{c&&j()};return e.jsx(J,{fullWidth:!0,open:t,onClose:o,children:e.jsxs($,{bgcolor:"background.default",className:" p-2",children:[e.jsxs("div",{className:"grid gap-y-2",children:[e.jsx(ee,{data:{text:"Name",onChangeFn:a=>d(a.target.value),value:s,placeholder:"Type test name here"}}),e.jsx(ee,{data:{text:"Description",onChangeFn:a=>i(a.target.value),value:r,placeholder:"Type description here"}})]}),e.jsxs("div",{className:"flex items-center gap-x-3 justify-center mt-2",children:[e.jsx(M,{onClick:v,startIcon:e.jsx(V,{}),children:"Save"}),e.jsx(M,{onClick:o,startIcon:e.jsx(he,{}),children:"Cancel"})]})]})})},Te=({data:u})=>{const{options:o,value:t,setValue:n}=u,[s,d]=l.useState(!1),r=l.useRef(null);ie(r,d);const i=()=>{d(!s)},c=m=>{n(m)};return e.jsxs("div",{ref:r,className:"w-full relative font-padauk",children:[e.jsxs("button",{onClick:i,className:"border flex items-center rounded-lg justify-between h-10 w-full cursor-pointer hover:border-blue-500 shadow-sm gap-x-2 px-2",children:[e.jsx("span",{children:t||"Select correct answer"}),e.jsx("img",{className:"h-6 w-6",src:xe(s?"up":"down")})]}),s&&o.length!==0?e.jsx("div",{className:"absolute grid gap-y-1 min-w-full p-2 rounded-md border -top-40",children:o.map(m=>e.jsx("div",{onClick:()=>{i(),c(m)},className:"p-1 cursor-pointer  rounded-lg transition-all",children:m},`choice-${m}`))}):""]})},I=({data:u})=>{const{choice:o,handleFn:t,value:n,placeholder:s}=u;return e.jsxs("div",{className:"grid gap-y-2 font-padauk",children:[e.jsx("div",{className:"font-medium ",children:o}),e.jsx(H,{size:"small",onChange:d=>t(o,d),value:n,className:" w-full border rounded-md h-10 pl-1 pr-1",placeholder:s})]})},Se=({data:u})=>{const{cancel:o,quizzes:t,setQuizzes:n,editData:s,clearEditData:d,isAdding:r}=u,[i,c]=l.useState(s?s.question:""),[m,x]=l.useState(s?s.choices[0]:""),[j,v]=l.useState(s?s.choices[1]:""),[a,f]=l.useState(s?s.choices[2]:""),[S,z]=l.useState(s?s.choices[3]:""),[b,A]=l.useState(s?s.answer:"");let y=[];const T=m.trim()&&j.trim()&&a.trim()&&S.trim(),D=i.trim()&&m.trim()&&j.trim()&&a.trim()&&S.trim()&&b.trim();T&&(y=[m,j,a,S]);const k=(g,h)=>{g.toLowerCase()==="question"?c(h.target.value):A(h.target.value)},B=()=>{let g,h;D&&(g={id:t.length===0?1:t[t.length-1].id+1,question:i,choices:y,answer:b},h=[...t,g],n(h),re(),o())},E=()=>{const g=s.id,h={id:g,question:i,choices:y,answer:b},G=t.map(p=>g===p.id?h:p);n(G),o(),d()},R=(g,h)=>{g.toLowerCase()==="choice 1"?x(h.target.value):g.toLowerCase()==="choice 2"?v(h.target.value):g.toLowerCase()==="choice 3"?f(h.target.value):z(h.target.value)},L=()=>{s?E():B()},N=()=>{o(),d()};return e.jsx(J,{fullWidth:!0,open:r,onClose:N,children:e.jsxs($,{bgcolor:"background.default",className:` grid gap-y-2  p-3  top-0 left-0 right-0 bottom-0 rounded-lg relative 
          `,children:[e.jsx("div",{className:"top-1 shadow-md border rounded-full right-1 h-9 w-9 text-white font-medium flex justify-center absolute items-center",children:s?s.number:t.length+1}),e.jsxs("div",{className:"grid gap-y-2",children:[e.jsx(I,{data:{handleFn:k,value:i,choice:"Question",placeholder:"Enter question"}}),e.jsx(I,{data:{handleFn:R,value:m,choice:"Choice 1",placeholder:"Enter choice 1"}}),e.jsx(I,{data:{handleFn:R,value:j,choice:"Choice 2",placeholder:"Enter choice 2"}}),e.jsx(I,{data:{handleFn:R,value:a,choice:"Choice 3",placeholder:"Enter choice 3"}}),e.jsx(I,{data:{handleFn:R,value:S,choice:"Choice 4",placeholder:"Enter choice 4"}}),e.jsxs("div",{className:"flex items-center gap-x-5",children:[e.jsx("div",{className:"font-medium",children:"Answer"}),e.jsx(Te,{data:{options:y,value:b,setValue:A}})]})]}),e.jsxs("div",{className:"flex justify-end gap-x-2",children:[e.jsx(w,{title:"Save",arrow:!0,children:e.jsx(C,{onClick:L,children:e.jsx(V,{})})}),e.jsx(w,{title:"Cancel",children:e.jsx(C,{onClick:N,children:e.jsx(Y,{})})})]})]})})},ye=({data:u})=>{const{testName:o,numbers:t,changePage:n}=u;return e.jsx("div",{className:"text-lg p-1 font-medium sticky top-0 z-10 flex justify-between items-center",children:e.jsxs("div",{className:"flex items-center gap-x-2",children:[e.jsx(w,{title:"Navigate up",arrow:!0,children:e.jsx(C,{onClick:()=>n("test"),children:e.jsx(je,{})})}),e.jsxs("div",{children:[o,e.jsxs("span",{className:"text-sm",children:[" • "," ",t," ",t>1?"questions":"question"]})]})]})})},be=({data:u})=>{const{quizzes:o,editQuestion:t,askToDelete:n,add:s}=u;return e.jsxs("div",{className:"grid gap-y-2",children:[e.jsx("div",{className:"pl-1 font-medium ",children:"Questions"}),o.map((d,r)=>e.jsxs("div",{className:"border font-padauk p-2 relative",children:[e.jsxs("div",{className:"absolute bottom-2 right-2 flex items-center gap-x-2",children:[e.jsx(w,{title:"Edit",arrow:!0,children:e.jsx(C,{onClick:()=>t(d,r),children:e.jsx(K,{})})}),e.jsx(w,{title:"Delete",children:e.jsx(C,{onClick:()=>n(d.id),children:e.jsx(X,{})})})]}),e.jsxs("div",{className:"flex items-center justify-between gap-x-2",children:[e.jsx("div",{className:"overflow-x-auto p-0.5 flex-1",children:d.question}),e.jsx(ce,{variant:"caption",className:"top-0 shadow-md border rounded-full right-1 h-9 w-9 text-white font-medium flex justify-center absolute items-center ",children:r+1})]}),e.jsx("div",{className:"pl-2 pt-2 grid gap-y-1",children:d.choices.map((i,c)=>e.jsxs("div",{className:"flex gap-x-2",children:[e.jsx("div",{className:"w-8 flex h-8 items-center  justify-center text-white font-medium rounded-md ",children:c+1}),e.jsx("div",{className:"flex-1",children:i})]},`choice-${r}-${c}`))})]},`question-${r}`)),e.jsx("div",{className:"flex justify-center sticky bottom-5",children:e.jsx(w,{title:"Add a question",arrow:!0,children:e.jsx(C,{onClick:s,children:e.jsx(ae,{})})})})]})},De=({data:u})=>{const{currentTest:o,setCurrentTest:t,setIsRulesAdding:n,setEditData:s}=u,{gradingRules:d}=o,[r,i]=l.useState(null),c=a=>{const f=d.filter(z=>z.id!==a),S={...o,gradingRules:f};t(S)},m=a=>{i(a)},x=a=>{s(a),n(!0)},j=()=>{c(r),i(null)},v=()=>{i(null)};return e.jsxs("div",{className:"grid gap-y-3",children:[e.jsx("div",{className:"pl-1 font-medium",children:"Grading Rules"}),e.jsx(W,{data:{value:r,setValue:i,yesButton:j,noButton:v,text:"Are you sure to delete?"}}),d.map((a,f)=>e.jsxs("div",{className:"flex font-padauk items-center justify-between border  p-2 ",children:[e.jsxs("div",{className:"grid flex-1 grid-cols-3 justify-between mr-10",children:[e.jsx(U,{data:{text:"From",value:a.from}}),e.jsx(U,{data:{text:"To",value:a.to}}),e.jsx(U,{data:{text:"Level",value:a.level}})]}),e.jsxs("div",{className:"flex items-center gap-x-1 h-full ",children:[e.jsx(w,{title:"Edit",arrow:!0,children:e.jsx(C,{onClick:()=>x(a),children:e.jsx(K,{})})}),e.jsx(w,{title:"Delete",arrow:!0,children:e.jsx(C,{onClick:()=>m(a.id),children:e.jsx(X,{})})})]})]},`rule-${f}-${a.from}-${a.to}-${a.level}`)),e.jsx("div",{className:"flex justify-center sticky bottom-5",children:e.jsx(w,{title:"Add a rule",arrow:!0,children:e.jsx(C,{onClick:()=>n(!0),children:e.jsx(ae,{})})})})]})},U=({data:u})=>{const{text:o,value:t}=u;return e.jsxs("div",{className:"grid gap-y-1",children:[e.jsx("div",{className:"font-medium",children:o}),e.jsx("div",{className:"font-medium max-h-10",children:typeof t=="string"?fe(t,15):t})]})},ke=({data:u})=>{const{currentTest:o,setCurrentTest:t,editData:n,setEditData:s,isRulesAdding:d,setIsRulesAdding:r}=u,{gradingRules:i}=o,[c,m]=l.useState(n?n.from:null),[x,j]=l.useState(n?n.to:null),[v,a]=l.useState(n?n.level:""),f=c&&x&&v.trim(),S=()=>{const T={id:i.length===0?1:i[i.length-1].id+1,from:Number(c),to:Number(x),level:v},D={...o,gradingRules:[...i,T]};t(D)},z=()=>{const T=n.id,D={id:T,from:Number(c),to:Number(x),level:v},k=i.map(E=>T===E.id?D:E),B={...o,gradingRules:k};t(B)},b=()=>{r(!1),s(null)},A=()=>{f&&(n?z():S(),b())},y=(T,D)=>{const k=D.target.value;T.toLowerCase()==="from"?m(k):T.toLowerCase()==="to"?j(k):a(k)};return e.jsx(J,{fullWidth:!0,open:d,onClose:()=>r(!1),children:e.jsx($,{bgcolor:"background.default",children:e.jsxs("div",{className:"grid gap-y-2 p-3  rounded-lg relative",children:[e.jsx(I,{data:{handleFn:y,value:c!==null?c:"",choice:"From",placeholder:"Enter 'from' value"}}),e.jsx(I,{data:{handleFn:y,value:x!==null?x:"",choice:"To",placeholder:"Enter 'to' value"}}),e.jsx(I,{data:{handleFn:y,value:v,choice:"Level",placeholder:"Enter level"}}),e.jsxs("div",{className:"flex justify-end gap-x-2",children:[e.jsx(w,{title:"Save",arrow:!0,children:e.jsx(C,{onClick:A,children:e.jsx(V,{})})}),e.jsx(w,{title:"Cancel",arrow:!0,children:e.jsx(C,{onClick:b,children:e.jsx(Y,{})})})]})]})})})},te=({data:u})=>{const{currentTest:o,setCurrentTest:t,title:n}=u,{description:s,name:d}=o,[r,i]=l.useState(n==="Description"?s:d),[c,m]=l.useState(!1),x=f=>{i(f.target.value)},j=()=>{if(n==="Description"){const f={...o,description:r};t(f)}else{const f={...o,name:r};t(f)}},v=()=>{j(),m(!1)},a=()=>{m(!1),i(n==="Description"?s:d)};return e.jsxs("div",{className:"grid gap-y-2",children:[e.jsx("div",{className:"font-medium ",children:n}),c?e.jsx(H,{multiline:!0,autoFocus:!0,placeholder:`Type ${n.toLowerCase()} here`,onChange:x,className:"p-1 border border-gray-200 outline-none",value:r}):e.jsx("div",{className:"text-gray-500 p-1 ",children:r||"No description"}),c?e.jsxs("div",{className:"flex gap-x-2",children:[e.jsx(w,{title:"Save",arrow:!0,children:e.jsx(C,{onClick:v,children:e.jsx(V,{})})}),e.jsx(w,{title:"Cancel",children:e.jsx(C,{onClick:a,children:e.jsx(Y,{})})})]}):e.jsx($,{children:e.jsx(w,{title:"Edit",children:e.jsx(C,{onClick:()=>m(!0),children:e.jsx(K,{})})})})]})},ze=({data:u})=>{l.useContext(O);const{setPage:o,currentTest:t,setCurrentTest:n}=u,[s,d]=l.useState(!1),[r,i]=l.useState(!1),[c,m]=l.useState(t.quizzes),[x,j]=l.useState(null),[v,a]=l.useState(null),f=async(N,g)=>{try{const h=P(Q,"tests",N);await ne(h,g)}catch(h){console.log(h.message)}};l.useEffect(()=>{S()},[t,c]);const S=()=>{f(t.id,{...t,quizzes:c})},z=()=>{d(!0)},b=()=>{d(!1),a(null)},A=N=>{a(N)},y=()=>{k(v),a(null)},T=()=>{a(null)},D=N=>{o(N)},k=N=>{const g=c.filter(h=>h.id!==N);m(g)},B=(N,g)=>{const h={...N,number:g+1};j(h),z()},E=()=>{j(null)},R={testName:t.name,numbers:c.length,changePage:D},L={quizzes:c,editQuestion:B,askToDelete:A,add:z};return e.jsxs("div",{className:"grid gap-y-2 z-65 p-5",children:[e.jsx(ye,{data:R}),e.jsx(q,{}),e.jsx(te,{data:{title:"Test Name",currentTest:t,setCurrentTest:n}}),e.jsx(te,{data:{title:"Description",currentTest:t,setCurrentTest:n}}),e.jsx(q,{}),e.jsx(De,{data:{currentTest:t,setEditData:j,setCurrentTest:n,setIsRulesAdding:i}}),e.jsx(q,{}),e.jsx(be,{data:L}),s&&e.jsx(Se,{data:{cancel:b,setQuizzes:m,quizzes:c,editData:x,clearEditData:E,isAdding:s}}),r&&e.jsx(ke,{data:{currentTest:t,setCurrentTest:n,editData:x,setEditData:j,isRulesAdding:r,setIsRulesAdding:i}}),e.jsx(W,{data:{value:v,setValue:a,yesButton:y,noButton:T,text:"Are you sure to delete ?"}}),e.jsx(q,{})]})},nt=()=>{const[u,o]=l.useState("test"),{tests:t,setTests:n,setHeaderTitle:s}=l.useContext(O),[d,r]=l.useState({}),[i,c]=l.useState(!1),[m,x]=l.useState(!1),[j,v]=l.useState(null),a=se(Q,"tests"),[f,S]=l.useState(!0),[z,b]=l.useState(!1),[A,y]=l.useState(null),T=de(),{mode:D}=T.palette;ue(a,[],n,S,b,!1,y),l.useEffect(()=>{s("Admin - Tests")},[u]),l.useEffect(()=>(Z(),Z()),[]);const k=p=>{r(p),o("editTest")},B=p=>{v(p),x(!0)},E=async p=>{const F=P(Q,"tests",p.id);await ne(F,{isUploaded:!p.isUploaded})},R=()=>{h(j),v(null),x(!1)},L=()=>{x(!1)},N=()=>{c(!0)},g=()=>{c(!1)},h=async p=>{try{const F=P(Q,"tests",p);await me(F)}catch(F){console.log(F.message)}},G=()=>{switch(u){case"test":return e.jsxs("div",{className:"p-5 grid gap-y-2",children:[e.jsx("div",{className:"flex justify-between",children:e.jsx(ge,{text:"Tests",length:t.length})}),i&&e.jsx(Ce,{data:{close:g,testAdding:i}}),e.jsx(W,{data:{value:m,setValue:x,yesButton:R,noButton:L,text:"Are you sure to delete ?"}}),e.jsx("div",{className:"grid border overflow-hidden border-slate-200 shadow-md rounded-md overflow-hidden",children:t.map((p,F)=>e.jsxs("div",{className:` ${D==="light"?"hover:bg-slate-100":"hover:bg-slate-700"} cursor-pointer h ${F===0&&"border-t-0"} flex items-center border border-t p-2  min-h-[100px]`,children:[e.jsxs("div",{onClick:()=>{k(p)},className:"flex flex-1 gap-x-2 items-center",children:[e.jsx("input",{checked:p.isUploaded,onChange:()=>E(p),className:"size-6",type:"checkbox"}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium",children:p.name}),e.jsxs("div",{className:"text-sm",children:[p.quizzes.length,p.quizzes.length>1?" questions":" question",p.isUploaded?" (Uploaded)":" (Not uploaded)"]})]})]}),e.jsx("div",{className:"flex gap-x-2",children:e.jsx(ve,{isComment:!0,options:[{text:"Delete",icon:e.jsx(X,{}),onClick:()=>B(p.id)}]})})]},` tests-${p.id}`))}),e.jsx("div",{children:e.jsx(M,{variant:"outlined",startIcon:e.jsx(we,{}),onClick:N,children:"New test"})})]});case"editTest":return e.jsx(ze,{data:{setPage:o,currentTest:d,setCurrentTest:r}})}};return f?e.jsx(Ne,{text:"Loading tests..."}):z?e.jsx(_,{text:"No test available"}):A?e.jsx(_,{text:A}):G()};export{nt as default};

import{r as i,A as b,u as z,Z as G,j as e,G as x,E as F,F as n,J as u,H as t,$ as H,a0 as O,d as C,b as I,e as S,a1 as p,a2 as Y,a3 as B}from"./index-bR4MaZOJ.js";import{g as E}from"./getImage-SzyEh5nT.js";import{L as D}from"./LoadingScreen-yCIU47i-.js";import{S as $}from"./Stack-WYlN-LHL.js";import{T as d}from"./TextField-lZjHCUEq.js";import"./Portal-vj8E7tuN.js";import"./Modal-AMyV4m0Z.js";import"./debounce-gOEKrWSg.js";import"./useControlled-Tg6WpoLH.js";import"./createSvgIcon-3G1Z23-M.js";const ae=()=>{const{setHeaderTitle:h,setUserId:o,openSnackbar:r}=i.useContext(b),[v,L]=i.useState(""),[l,j]=i.useState(""),[c,y]=i.useState(""),[T,f]=i.useState("login"),U=z();i.useEffect(()=>{h("STAR EDUCATION ACADEMY")},[]);const m=()=>{U("/app")};G("auto");const k=async()=>{try{r("Signing in with Google...");const a=(await O(t,H)).user,g=I(C,"users",a.uid);(await S(g)).exists()||await p(t.currentUser.displayName,t.currentUser.email,"",t.currentUser.photoURL,a.uid),u.set("userId",a.uid,{expires:365}),o(a.uid),m(),r(`Signed in as ${a.displayName} successfully`)}catch(s){r(s.message)}},A=async()=>{try{r("Logging in...");const a=(await Y(t,l,c)).user,g=I(C,"users",a.uid);(await S(g)).exists()||await p(a.displayName,a.email,"","",a.uid),u.set("userId",a.uid,{expires:365}),o(a.uid),m(),r("Logged in successfully")}catch(s){r(s.message)}},P=async()=>{try{r("Creating an account...");const s=await B(t,l,c),{user:a}=s;u.set("userId",a.uid,{expires:365}),await p(v,l,c,"",a.uid),o(a.uid),m(),r("Created an account successfully")}catch(s){r(s.message)}},w=()=>{const s=u.get("userId")||null;let a=!1;return s&&(a=!0),{loggedIn:a,userId:s}},R=()=>{switch(T){case"login":return e.jsx("div",{children:e.jsxs("div",{className:"mt-10 flex flex-col items-center ",children:[e.jsx(x,{variant:"h6",color:"primary",children:"Log In"}),e.jsxs("div",{className:"grid p-2 w-5/6 sm:w-3/5 lg:w-4/6 gap-y-2",children:[e.jsx(d,{name:"email",variant:"filled",color:"primary",label:"Enter your email",type:"email",size:"small",value:l,onChange:s=>j(s.target.value)}),e.jsx(d,{name:"email",variant:"filled",color:"primary",label:"Enter your password",type:"password",size:"small",value:c,onChange:s=>y(s.target.value)}),e.jsx(n,{onClick:A,sx:{textTransform:"capitalize"},variant:"contained",color:"primary",children:"Log In"})]}),e.jsx(N,{}),e.jsx("div",{children:e.jsx(n,{onClick:k,startIcon:e.jsx("img",{className:"size-7",src:E("google")}),sx:{textTransform:"capitalize"},variant:"outlined",children:"Sign in With Google"})}),e.jsx(N,{}),e.jsx("div",{children:e.jsx(n,{onClick:()=>f("signup"),sx:{textTransform:"capitalize"},variant:"outlined",children:"Create new Account"})})]})});case"signup":return e.jsx("div",{children:e.jsxs("div",{className:"mt-10 flex flex-col items-center ",children:[e.jsx(x,{variant:"h6",color:"primary",children:"Create a new account"}),e.jsxs("div",{className:"grid p-2 w-5/6 sm:w-3/5 lg:w-4/6 gap-y-2",children:[e.jsx(d,{variant:"filled",color:"primary",label:"Enter your name",type:"email",size:"small",value:v,onChange:s=>L(s.target.value)}),e.jsx(d,{name:"email",variant:"filled",color:"primary",label:"Enter your email",type:"email",size:"small",value:l,onChange:s=>j(s.target.value)}),e.jsx(d,{name:"email",variant:"filled",color:"primary",label:"Enter your password",type:"password",size:"small",value:c,onChange:s=>y(s.target.value)}),e.jsx(n,{onClick:()=>{P()},sx:{textTransform:"capitalize"},variant:"contained",color:"primary",children:"Sign up"}),e.jsx("div",{children:e.jsx(n,{startIcon:e.jsx("img",{className:"size-7",src:E("back")}),onClick:()=>f("login"),sx:{textTransform:"capitalize"},variant:"outlined",color:"primary",children:"Log in"})})]})]})})}};return e.jsxs("div",{className:"Login mb-5",children:[e.jsx(D,{}),w().loggedIn?e.jsx(J,{userId:w().userId}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"text-md rounded-md font-medium  p-1 pl-2 border-b",children:"You must log in first."}),R()]})]})},N=()=>e.jsx("div",{className:"mt-2 mb-2 ",children:"OR"}),J=({userId:h})=>{const o=z(),{userData:r}=i.useContext(b);return e.jsxs($,{m:2,children:[e.jsxs(x,{children:["You are already logged in as ",r==null?void 0:r.name,"."]}),e.jsx(F,{mt:1,children:e.jsx(n,{onClick:()=>o("/app/settings"),variant:"outlined",children:"Settings"})})]})};export{ae as default};
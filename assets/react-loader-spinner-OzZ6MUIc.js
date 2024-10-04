import{j as e}from"./react-D1yDKIkn.js";import{p as a,f as r}from"./styled-components-Dwa5FxkJ.js";const h={"aria-busy":!0,role:"progressbar"};a.div`
  display: ${i=>i.$visible?"flex":"none"};
`;const f="http://www.w3.org/2000/svg",t=242.776657104492,$=1.6,x=r`
12.5% {
  stroke-dasharray: ${t*.14}px, ${t}px;
  stroke-dashoffset: -${t*.11}px;
}
43.75% {
  stroke-dasharray: ${t*.35}px, ${t}px;
  stroke-dashoffset: -${t*.35}px;
}
100% {
  stroke-dasharray: ${t*.01}px, ${t}px;
  stroke-dashoffset: -${t*.99}px;
}
`;a.path`
  stroke-dasharray: ${t*.01}px, ${t};
  stroke-dashoffset: 0;
  animation: ${x} ${$}s linear infinite;
`;const y=r`
to {
   transform: rotate(360deg);
 }
`;a.svg`
  animation: ${y} 0.75s steps(12, end) infinite;
  animation-duration: 0.75s;
`;a.polyline`
  stroke-width: ${i=>i.width}px;
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
`;const b=r`
to {
   stroke-dashoffset: 136;
 }
`;a.polygon`
  stroke-dasharray: 17;
  animation: ${b} 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`;a.svg`
  transform-origin: 50% 65%;
`;const u=({visible:i=!0,width:o="80",height:n="80",backgroundColor:c="#ff6d00",color:s="#fff",wrapperClass:d="",wrapperStyle:l={},ariaLabel:p="comment-loading"})=>i?e.jsxs("svg",{width:o,height:n,xmlns:f,viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",className:d,style:l,"aria-label":p,"data-testid":"comment-svg",...h,children:[e.jsx("path",{d:"M78,19H22c-6.6,0-12,5.4-12,12v31c0,6.6,5.4,12,12,12h37.2c0.4,3,1.8,5.6,3.7,7.6c2.4,2.5,5.1,4.1,9.1,4 c-1.4-2.1-2-7.2-2-10.3c0-0.4,0-0.8,0-1.3h8c6.6,0,12-5.4,12-12V31C90,24.4,84.6,19,78,19z",fill:c}),e.jsx("circle",{cx:"30",cy:"47",r:"5",fill:s,children:e.jsx("animate",{attributeName:"opacity",calcMode:"linear",values:"0;1;1",keyTimes:"0;0.2;1",dur:"1",begin:"0s",repeatCount:"indefinite"})}),e.jsx("circle",{cx:"50",cy:"47",r:"5",fill:s,children:e.jsx("animate",{attributeName:"opacity",calcMode:"linear",values:"0;0;1;1",keyTimes:"0;0.2;0.4;1",dur:"1",begin:"0s",repeatCount:"indefinite"})}),e.jsx("circle",{cx:"70",cy:"47",r:"5",fill:s,children:e.jsx("animate",{attributeName:"opacity",calcMode:"linear",values:"0;0;1;1",keyTimes:"0;0.4;0.6;1",dur:"1",begin:"0s",repeatCount:"indefinite"})})]}):null;export{u as $};

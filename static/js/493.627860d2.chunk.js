"use strict";(self.webpackChunklearn_jp=self.webpackChunklearn_jp||[]).push([[493],{493:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var s=n(43),o=n(216);const a=(e,t,n,a)=>{const r=(0,o.Zp)(),c="vocab"===a?"jp":"kana",l="vocab"===a?"pronunciation":"roumaji",[i,u]=(0,s.useState)([]),[d,v]=(0,s.useState)(!1),[h,m]=(0,s.useState)([]),[f,p]=(0,s.useState)([]),[j,w]=(0,s.useState)([]),[x,b]=(0,s.useState)(!1),[g,y]=(0,s.useState)(null);(0,s.useEffect)((()=>{if(!e)return;(async()=>{try{if("vocab"===a){if(!n||!t)return;const s=await e(t,n);u(s.data)}else{const t=await e();u(t.data)}}catch(s){console.log(s)}finally{v(!1)}})()}),[e,t,n,a]),(0,s.useEffect)((()=>{i.length&&m(i.sort((()=>.5-Math.random())))}),[i]);return{randomData:h,correct:f,incorrect:j,finish:x,questionKey:c,answerKey:l,handleBlur:(e,t)=>{e.target.value&&(e.target.value.toLowerCase()===t[l]?p((e=>[...e,t[c]])):w((e=>[...e,t[c]])))},handleReset:()=>r(0),handleFinish:()=>{var e;y(null===(e=[...j])||void 0===e?void 0:e.reduce(((e,t)=>(e[t]?e[t]=e[t]+1:e[t]=1,e)),{})),b(!0)},timesWrong:g,loading:d}};var r=n(154),c=n(533),l=n(579);const i=e=>{let{dataService:t,level:n,lesson:s,type:o}=e;const{randomData:i,correct:u,incorrect:d,finish:v,questionKey:h,answerKey:m,handleBlur:f,handleReset:p,handleFinish:j,timesWrong:w,loading:x}=a(t,n,s,o);return x?(0,l.jsx)(c.A,{}):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{className:"letter-list",children:null===i||void 0===i?void 0:i.map((e=>{var t;return(0,l.jsxs)("div",{className:"letter-element ".concat(-1!==u.indexOf(e[h])?"correct":-1!==d.indexOf(e[h])?"incorrect":""),children:[(0,l.jsx)("div",{children:e[h]}),v&&(0,l.jsx)("div",{children:e[m]}),(0,l.jsx)("input",{autoComplete:"off",name:m,disabled:v||-1!==u.indexOf(e[h]),onBlur:t=>f(t,e),onFocus:e=>e.target.value=""}),w&&(0,l.jsxs)("div",{className:"incorrect-count",children:["Times Incorrect: ",null!==(t=w[e[h]])&&void 0!==t?t:0]})]})}))}),!v&&(0,l.jsx)("button",{className:"quiz-button",onClick:j,children:"Finish"}),(0,l.jsx)("button",{onClick:p,className:"quiz-button",children:"Restart"}),(0,l.jsx)(r.A,{})]})}},154:(e,t,n)=>{n.d(t,{A:()=>c});var s=n(43),o=n(804);const a=()=>{const[e,t]=(0,s.useState)(!0);return(0,s.useEffect)((()=>{const e=()=>{const e=window.pageYOffset||document.documentElement.scrollTop;t(0===e)};return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}}),[]),{top:e,scrollToTop:()=>{window.scrollTo({top:0,behavior:"smooth"})}}};var r=n(579);const c=()=>{const{top:e,scrollToTop:t}=a();return!e&&(0,r.jsx)(o.yL8,{className:"top-btn quiz-button",onClick:t,size:20})}}}]);
//# sourceMappingURL=493.627860d2.chunk.js.map
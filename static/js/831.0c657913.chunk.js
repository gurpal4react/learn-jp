"use strict";(self.webpackChunklearn_jp=self.webpackChunklearn_jp||[]).push([[831],{831:(e,s,a)=>{a.r(s),a.d(s,{default:()=>h});var t=a(43),n=a(804),l=a(216),r=a(475);const c=()=>{const e=(0,l.zy)(),[s,a]=(0,t.useState)({});return(0,t.useEffect)((()=>{const s=e.pathname.split("/").filter((e=>e)),t={Home:"/"};null===s||void 0===s||s.forEach(((e,a)=>{const n=s.slice(0,a+1),l=(e=>{var s;return null===(s=e.split("-"))||void 0===s?void 0:s.map((e=>e.charAt(0).toUpperCase()+e.trimEnd().slice(1).toLocaleLowerCase())).join(" ")})(e);t[l]="/"+n.join("/")})),a(t)}),[e.pathname]),{paths:s}};var o=a(579);const d=()=>{var e;const{paths:s}=c();return(0,o.jsx)("div",{children:null===(e=Object.keys(s))||void 0===e?void 0:e.map(((e,a)=>(0,o.jsxs)("span",{children:[(0,o.jsx)(r.N_,{to:s[e],className:"breadcrumb",children:e})," > "]},a)))})},i=e=>{let{value:s,handleChange:a}=e;return(0,o.jsxs)("label",{className:"switch",children:[(0,o.jsx)("input",{type:"checkbox",checked:s,onChange:()=>{a(!s)}}),(0,o.jsx)("span",{className:"slider round"})]})},h=()=>{var e;const s=(0,l.zy)(),a=(0,l.Zp)(),r=null!==(e=localStorage.getItem("dark-mode"))&&void 0!==e&&e,[c,h]=(0,t.useState)(r);return(0,t.useEffect)((()=>{document.documentElement.setAttribute("data-theme",c?"dark":"light"),localStorage.setItem("dark-mode",c)}),[c]),(0,o.jsxs)("div",{className:"gap-bottom",children:[(0,o.jsxs)("header",{className:"header",children:[(0,o.jsx)(d,{}),(0,o.jsxs)("div",{className:"toggle-group",children:[(0,o.jsx)("span",{children:"Dark Mode"}),(0,o.jsx)(i,{value:c,handleChange:h})]})]}),(0,o.jsx)(l.sv,{}),"/"!==s.pathname&&(0,o.jsx)(n.hZe,{className:" home-btn quiz-button",size:20,onClick:()=>a("/")})]})}}}]);
//# sourceMappingURL=831.0c657913.chunk.js.map
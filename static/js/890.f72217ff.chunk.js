"use strict";(self.webpackChunklearn_jp=self.webpackChunklearn_jp||[]).push([[890],{890:(e,r,t)=>{t.r(r),t.d(r,{default:()=>v});var a=t(43),n=t(216);const c=[{link:"list",icon:"\u5b57",text:"Kanji List"},{link:"quiz",icon:"\u5b57",text:"Kanji Quiz"}];var o=t(533),l=t(632),s=t(229),i=t(297),u=t(124),y=t(579);const g=(0,a.lazy)((()=>Promise.all([t.e(804),t.e(873)]).then(t.bind(t,873)))),h=(0,a.lazy)((()=>Promise.all([t.e(804),t.e(639),t.e(39)]).then(t.bind(t,39)))),j=(0,a.lazy)((()=>Promise.all([t.e(825),t.e(888)]).then(t.bind(t,888)))),v=()=>(0,y.jsx)(l.tH,{fallback:(0,y.jsx)(s.A,{}),children:(0,y.jsx)(a.Suspense,{fallback:(0,y.jsx)(o.A,{}),children:(0,y.jsxs)(n.BV,{children:[(0,y.jsx)(n.qh,{index:!0,element:(0,y.jsx)(g,{btnObj:c})}),(0,y.jsx)(n.qh,{path:"/list",element:(0,y.jsx)(h,{dataService:i.A.getKanji,level:"n4",mainKey:"kanji",heading:"List of Kanji for N4",noShowKeys:["type"]})}),(0,y.jsx)(n.qh,{path:"/quiz",element:(0,y.jsx)(j,{questionService:u.A.getKanji,level:"n4"})}),(0,y.jsx)(n.qh,{path:"*",element:(0,y.jsx)(n.C5,{to:"/"})})]})})})},297:(e,r,t)=>{t.d(r,{A:()=>A});var a=t(213);const n="https://learn-jp-be.onrender.com/list/",c=n+"hiragana",o=n+"katakana",l=n+"katakana-reading",s=n+"adverbs",i=n+"e-adjective",u=n+"na-adjective",y=n+"particles",g=n+"vocabulary",h=n+"kanji",j=n+"common/time",v=n+"common/counting",d=n+"common/directions",A={getHiragana:async()=>{try{return await a.A.get(c)}catch(e){return console.error({error:e}),[]}},getKatakana:async()=>{try{return await a.A.get(o)}catch(e){return console.error({error:e}),[]}},getKatakanaReading:async()=>{try{return await a.A.get(l)}catch(e){return console.error({error:e}),[]}},getAdverbs:async e=>{try{let r=s;e&&(r+="?level=".concat(e));return await a.A.get(r)}catch(r){return console.error({error:r}),[]}},getEAdjective:async e=>{try{let r=i;e&&(r+="?level=".concat(e));return await a.A.get(r)}catch(r){return console.error({error:r}),[]}},getNaAdjective:async e=>{try{let r=u;e&&(r+="?level=".concat(e));return await a.A.get(r)}catch(r){return console.error({error:r}),[]}},getParticles:async e=>{try{let r=y;e&&(r+="?level=".concat(e));return await a.A.get(r)}catch(r){return console.error({error:r}),[]}},getVocabulary:async(e,r)=>{try{let t=g;e&&(t+="?level=".concat(e),r&&(t+="&lesson=".concat(r)));return await a.A.get(t)}catch(t){return console.error({error:t}),[]}},getKanji:async e=>{try{let r=h;e&&(r+="?level=".concat(e));return await a.A.get(r)}catch(r){return console.error({error:r}),[]}},getTime:async e=>{try{let r=j;e&&(r+="?level=".concat(e));return await a.A.get(r)}catch(r){return console.error({error:r}),[]}},getCounting:async e=>{try{let r=v;e&&(r+="?level=".concat(e));return await a.A.get(r)}catch(r){return console.error({error:r}),[]}},getDirections:async e=>{try{let r=d;e&&(r+="?level=".concat(e));return await a.A.get(r)}catch(r){return console.error({error:r}),[]}}}},124:(e,r,t)=>{t.d(r,{A:()=>i});var a=t(213);const n="https://learn-jp-be.onrender.com/quiz/",c=n+"letters",o=n+"particles",l=n+"vocabulary",s=n+"kanji",i={getLetters:async e=>{try{let r=c;e&&(r+="?limit=".concat(e));return await a.A.get(r)}catch(r){return console.error({error:r}),[]}},getParticles:async(e,r)=>{try{let t=o;e&&(t+="?level=".concat(e),r&&(t+="&limit=".concat(r)));return await a.A.get(t)}catch(t){return console.error({error:t}),[]}},getVocabularyMeaningToWord:async(e,r)=>{try{let t=l;e&&(t+="?level=".concat(e,"&type=mtw"),r&&(t+="&lesson=".concat(r)));return await a.A.get(t)}catch(t){return console.error({error:t}),[]}},getVocabularyWordToMeaning:async(e,r)=>{try{let t=l;e&&(t+="?level=".concat(e,"&type=wtm"),r&&(t+="&lesson=".concat(r)));return await a.A.get(t)}catch(t){return console.error({error:t}),[]}},getKanji:async(e,r)=>{try{let t=s;e&&(t+="?level=".concat(e),r&&(t+="&limit=".concat(r)));return await a.A.get(t)}catch(t){return console.error({error:t}),[]}}}}}]);
//# sourceMappingURL=890.f72217ff.chunk.js.map
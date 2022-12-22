"use strict";(self.webpackChunkguide_generator=self.webpackChunkguide_generator||[]).push([[54],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>b});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=p(r),b=a,d=f["".concat(s,".").concat(b)]||f[b]||u[b]||o;return r?n.createElement(d,i(i({ref:t},c),{},{components:r})):n.createElement(d,i({ref:t},c))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},6191:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={},i="Lab 5 - API",l={unversionedId:"lab5",id:"lab5",title:"Lab 5 - API",description:"We will finish our workshop in this lab by testing our API. Logging in as a user is a vital part of our application, so let's write some tests around the /auth endpoint.",source:"@site/docs/lab5.md",sourceDirName:".",slug:"/lab5",permalink:"/cypress-heroes-workshop/lab5",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Lab 4 - CT (Part 2)",permalink:"/cypress-heroes-workshop/lab4"}},s={},p=[{value:"Getting Started",id:"getting-started",level:2}],c={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"lab-5---api"},"Lab 5 - API"),(0,a.kt)("p",null,"We will finish our workshop in this lab by testing our API. Logging in as a user is a vital part of our application, so let's write some tests around the ",(0,a.kt)("inlineCode",{parentName:"p"},"/auth")," endpoint."),(0,a.kt)("h2",{id:"getting-started"},"Getting Started"),(0,a.kt)("p",null,"To get started, make checkout the ",(0,a.kt)("inlineCode",{parentName:"p"},"lab4-start")," branch:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"git checkout lab4-start\n")),(0,a.kt)("p",null,"You can find a completed version of this lab in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/cypress-io/cypress-heroes-workshop/tree/lab4-complete"},"lab4-complete")," branch."),(0,a.kt)("p",null,"If the app is not currently running, start it:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title='./server'",title:"'./server'"},"npm run start\n")))}u.isMDXComponent=!0}}]);
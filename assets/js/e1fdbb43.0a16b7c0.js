"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[44182],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>w});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=c(n),w=o,m=d["".concat(s,".").concat(w)]||d[w]||u[w]||i;return n?r.createElement(m,a(a({ref:t},l),{},{components:n})):r.createElement(m,a({ref:t},l))}));function w(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},60157:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const i={},a="networkConditions variable",p={unversionedId:"api/puppeteer.networkconditions",id:"api/puppeteer.networkconditions",title:"networkConditions variable",description:"A list of network conditions to be used with page.emulateNetworkConditions(networkConditions). Actual list of predefined conditions can be found in src/common/NetworkConditions.ts.",source:"@site/../docs/api/puppeteer.networkconditions.md",sourceDirName:"api",slug:"/api/puppeteer.networkconditions",permalink:"/api/puppeteer.networkconditions",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"MouseWheelOptions.deltaY property",permalink:"/api/puppeteer.mousewheeloptions.deltay"},next:{title:"NetworkConditions.download property",permalink:"/api/puppeteer.networkconditions.download"}},s={},c=[{value:"Example",id:"example",level:2}],l={toc:c};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"networkconditions-variable"},"networkConditions variable"),(0,o.kt)("p",null,"A list of network conditions to be used with ",(0,o.kt)("inlineCode",{parentName:"p"},"page.emulateNetworkConditions(networkConditions)"),". Actual list of predefined conditions can be found in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/puppeteer/puppeteer/blob/main/src/common/NetworkConditions.ts"},"src/common/NetworkConditions.ts"),"."),(0,o.kt)("b",null,"Signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"networkConditions: Readonly<{\n    'Slow 3G': NetworkConditions;\n    'Fast 3G': NetworkConditions;\n}>\n")),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const puppeteer = require('puppeteer');\nconst slow3G = puppeteer.networkConditions['Slow 3G'];\n\n(async () => {\n  const browser = await puppeteer.launch();\n  const page = await browser.newPage();\n  await page.emulateNetworkConditions(slow3G);\n  await page.goto('https://www.google.com');\n  // other actions...\n  await browser.close();\n})();\n")))}u.isMDXComponent=!0}}]);
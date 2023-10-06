"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[94030],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},p=Object.keys(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),m=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=m(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,p=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=m(r),f=n,g=s["".concat(l,".").concat(f)]||s[f]||c[f]||p;return r?a.createElement(g,i(i({ref:t},u),{},{components:r})):a.createElement(g,i({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=r.length,i=new Array(p);i[0]=s;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var m=2;m<p;m++)i[m]=r[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},38028:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>u});r(67294);var a=r(3905);function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},n.apply(this,arguments)}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},p=Object.keys(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}const i={sidebar_label:"Page.waitForFrame"},o="Page.waitForFrame() method",l={unversionedId:"api/puppeteer.page.waitforframe",id:"version-21.3.8/api/puppeteer.page.waitforframe",title:"Page.waitForFrame() method",description:"Waits for a frame matching the given conditions to appear.",source:"@site/versioned_docs/version-21.3.8/api/puppeteer.page.waitforframe.md",sourceDirName:"api",slug:"/api/puppeteer.page.waitforframe",permalink:"/api/puppeteer.page.waitforframe",draft:!1,tags:[],version:"21.3.8",frontMatter:{sidebar_label:"Page.waitForFrame"},sidebar:"api",previous:{title:"Page.waitForFileChooser",permalink:"/api/puppeteer.page.waitforfilechooser"},next:{title:"Page.waitForFunction",permalink:"/api/puppeteer.page.waitforfunction"}},m={},u=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2}],c={toc:u};function s(e){var{components:t}=e,r=p(e,["components"]);return(0,a.kt)("wrapper",n({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",n({},{id:"pagewaitforframe-method"}),"Page.waitForFrame() method"),(0,a.kt)("p",null,"Waits for a frame matching the given conditions to appear."),(0,a.kt)("h4",n({},{id:"signature"}),"Signature:"),(0,a.kt)("pre",null,(0,a.kt)("code",n({parentName:"pre"},{className:"language-typescript"}),"class Page {\n  waitForFrame(\n    urlOrPredicate: string | ((frame: Frame) => Awaitable<boolean>),\n    options?: WaitTimeoutOptions\n  ): Promise<Frame>;\n}\n")),(0,a.kt)("h2",n({},{id:"parameters"}),"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Parameter"),(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"urlOrPredicate"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"string ","|"," ((frame: ",(0,a.kt)("a",n({parentName:"td"},{href:"/api/puppeteer.frame"}),"Frame"),") =",">"," ",(0,a.kt)("a",n({parentName:"td"},{href:"/api/puppeteer.awaitable"}),"Awaitable"),"<","boolean",">",")"),(0,a.kt)("td",n({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"options"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/api/puppeteer.waittimeoutoptions"}),"WaitTimeoutOptions")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"(Optional)"))))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")),(0,a.kt)("p",null,"Promise","<",(0,a.kt)("a",n({parentName:"p"},{href:"/api/puppeteer.frame"}),"Frame"),">"),(0,a.kt)("h2",n({},{id:"example"}),"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",n({parentName:"pre"},{className:"language-ts"}),"const frame = await page.waitForFrame(async frame => {\n  return frame.name() === 'Test';\n});\n")))}s.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[90657],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>m});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),s=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):p(p({},r),e)),t},c=function(e){var r=s(e.components);return n.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),f=s(t),m=a,d=f["".concat(l,".").concat(m)]||f[m]||u[m]||o;return t?n.createElement(d,p(p({ref:r},c),{},{components:t})):n.createElement(d,p({ref:r},c))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,p=new Array(o);p[0]=f;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var s=2;s<o;s++)p[s]=t[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},21210:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>p,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=t(87462),a=(t(67294),t(3905));const o={},p="errors variable",i={unversionedId:"api/puppeteer.errors",id:"api/puppeteer.errors",title:"errors variable",description:"Puppeteer methods might throw errors if they are unable to fulfill a request. For example, page.waitForSelector(selector[, options]) might fail if the selector doesn't match any nodes during the given timeframe.",source:"@site/../docs/api/puppeteer.errors.md",sourceDirName:"api",slug:"/api/puppeteer.errors",permalink:"/api/puppeteer.errors",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"ErrorCode type",permalink:"/api/puppeteer.errorcode"},next:{title:"EvaluateFunc type",permalink:"/api/puppeteer.evaluatefunc"}},l={},s=[{value:"Example",id:"example",level:2}],c={toc:s};function u(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"errors-variable"},"errors variable"),(0,a.kt)("p",null,"Puppeteer methods might throw errors if they are unable to fulfill a request. For example, ",(0,a.kt)("inlineCode",{parentName:"p"},"page.waitForSelector(selector[, options])")," might fail if the selector doesn't match any nodes during the given timeframe."),(0,a.kt)("p",null,"For certain types of errors Puppeteer uses specific error classes. These classes are available via ",(0,a.kt)("inlineCode",{parentName:"p"},"puppeteer.errors"),"."),(0,a.kt)("b",null,"Signature:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"errors: PuppeteerErrors;\n")),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"An example of handling a timeout error:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"try {\n  await page.waitForSelector('.foo');\n} catch (e) {\n  if (e instanceof puppeteer.errors.TimeoutError) {\n    // Do something if this is a timeout.\n  }\n}\n")))}u.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[56235],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>m});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function p(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?p(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},p=Object.keys(e);for(n=0;n<p.length;n++)t=p[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)t=p[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),i=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},l=function(e){var r=i(e.components);return n.createElement(c.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,p=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),f=i(t),m=o,b=f["".concat(c,".").concat(m)]||f[m]||u[m]||p;return t?n.createElement(b,a(a({ref:r},l),{},{components:t})):n.createElement(b,a({ref:r},l))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var p=t.length,a=new Array(p);a[0]=f;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var i=2;i<p;i++)a[i]=t[i];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},45150:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>p,metadata:()=>s,toc:()=>i});var n=t(87462),o=(t(67294),t(3905));const p={},a="Browser.process() method",s={unversionedId:"api/puppeteer.browser.process",id:"api/puppeteer.browser.process",title:"Browser.process() method",description:"The spawned browser process. Returns null if the browser instance was created with Puppeteer.connect().",source:"@site/../docs/api/puppeteer.browser.process.md",sourceDirName:"api",slug:"/api/puppeteer.browser.process",permalink:"/api/puppeteer.browser.process",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Browser.pages() method",permalink:"/api/puppeteer.browser.pages"},next:{title:"Browser.target() method",permalink:"/api/puppeteer.browser.target"}},c={},i=[],l={toc:i};function u(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"browserprocess-method"},"Browser.process() method"),(0,o.kt)("p",null,"The spawned browser process. Returns ",(0,o.kt)("inlineCode",{parentName:"p"},"null")," if the browser instance was created with ",(0,o.kt)("a",{parentName:"p",href:"/api/puppeteer.puppeteer.connect"},"Puppeteer.connect()"),"."),(0,o.kt)("b",null,"Signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"process(): ChildProcess | null;\n")),(0,o.kt)("b",null,"Returns:"),(0,o.kt)("p",null,"ChildProcess ","|"," null"))}u.isMDXComponent=!0}}]);
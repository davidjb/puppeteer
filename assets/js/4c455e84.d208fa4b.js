"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[35076],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,p=e.originalType,i=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),f=c(r),m=o,y=f["".concat(i,".").concat(m)]||f[m]||s[m]||p;return r?n.createElement(y,a(a({ref:t},l),{},{components:r})):n.createElement(y,a({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var p=r.length,a=new Array(p);a[0]=f;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var c=2;c<p;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},98810:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>s,frontMatter:()=>p,metadata:()=>u,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const p={},a="MouseButton type",u={unversionedId:"api/puppeteer.mousebutton",id:"api/puppeteer.mousebutton",title:"MouseButton type",description:"Signature:",source:"@site/../docs/api/puppeteer.mousebutton.md",sourceDirName:"api",slug:"/api/puppeteer.mousebutton",permalink:"/api/puppeteer.mousebutton",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Mouse.wheel() method",permalink:"/api/puppeteer.mouse.wheel"},next:{title:"MouseOptions interface",permalink:"/api/puppeteer.mouseoptions"}},i={},c=[],l={toc:c};function s(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"mousebutton-type"},"MouseButton type"),(0,o.kt)("b",null,"Signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare type MouseButton =\n  | 'left'\n  | 'right'\n  | 'middle'\n  | 'back'\n  | 'forward';\n")))}s.isMDXComponent=!0}}]);
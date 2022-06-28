"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[91621],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,g=m["".concat(l,".").concat(d)]||m[d]||c[d]||o;return n?a.createElement(g,i(i({ref:t},u),{},{components:n})):a.createElement(g,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},42249:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const o={},i="Page.goBack() method",p={unversionedId:"api/puppeteer.page.goback",id:"api/puppeteer.page.goback",title:"Page.goBack() method",description:"This method navigate to the previous page in history.",source:"@site/../docs/api/puppeteer.page.goback.md",sourceDirName:"api",slug:"/api/puppeteer.page.goback",permalink:"/api/puppeteer.page.goback",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Page.frames() method",permalink:"/api/puppeteer.page.frames"},next:{title:"Page.goForward() method",permalink:"/api/puppeteer.page.goforward"}},l={},s=[{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}],u={toc:s};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"pagegoback-method"},"Page.goBack() method"),(0,r.kt)("p",null,"This method navigate to the previous page in history."),(0,r.kt)("b",null,"Signature:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"goBack(options?: WaitForOptions): Promise<HTTPResponse | null>;\n")),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"options"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/api/puppeteer.waitforoptions"},"WaitForOptions")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",null,"(Optional)")," Navigation parameters")))),(0,r.kt)("b",null,"Returns:"),(0,r.kt)("p",null,"Promise","<",(0,r.kt)("a",{parentName:"p",href:"/api/puppeteer.httpresponse"},"HTTPResponse")," ","|"," null",">"),(0,r.kt)("p",null,"Promise which resolves to the main resource response. In case of multiple redirects, the navigation will resolve with the response of the last redirect. If can not go back, resolves to ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),"."),(0,r.kt)("h2",{id:"remarks"},"Remarks"),(0,r.kt)("p",null,"The argument ",(0,r.kt)("inlineCode",{parentName:"p"},"options")," might have the following properties:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"timeout")," : Maximum navigation time in milliseconds, defaults to 30 seconds, pass 0 to disable timeout. The default value can be changed by using the ",(0,r.kt)("a",{parentName:"p",href:"/api/puppeteer.page.setdefaultnavigationtimeout"},"page.setDefaultNavigationTimeout(timeout)")," or ",(0,r.kt)("a",{parentName:"p",href:"/api/puppeteer.page.setdefaulttimeout"},"page.setDefaultTimeout(timeout)")," methods.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"waitUntil")," : When to consider navigation succeeded, defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"load"),". Given an array of event strings, navigation is considered to be successful after all events have been fired. Events can be either:",(0,r.kt)("br",null)," - ",(0,r.kt)("inlineCode",{parentName:"p"},"load")," : consider navigation to be finished when the load event is fired.",(0,r.kt)("br",null)," - ",(0,r.kt)("inlineCode",{parentName:"p"},"domcontentloaded")," : consider navigation to be finished when the DOMContentLoaded event is fired.",(0,r.kt)("br",null)," - ",(0,r.kt)("inlineCode",{parentName:"p"},"networkidle0")," : consider navigation to be finished when there are no more than 0 network connections for at least ",(0,r.kt)("inlineCode",{parentName:"p"},"500")," ms.",(0,r.kt)("br",null)," - ",(0,r.kt)("inlineCode",{parentName:"p"},"networkidle2")," : consider navigation to be finished when there are no more than 2 network connections for at least ",(0,r.kt)("inlineCode",{parentName:"p"},"500")," ms."))))}c.isMDXComponent=!0}}]);
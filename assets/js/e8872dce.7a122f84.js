"use strict";(self.webpackChunkvelo_bind_docs=self.webpackChunkvelo_bind_docs||[]).push([[770],{876:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>y});var r=n(2784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,y=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(y,c(c({ref:t},p),{},{components:n})):r.createElement(y,c({ref:t},p))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:a,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2857:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=n(7896),a=(n(2784),n(876));const o={sidebar_position:2},c="Dynamic Content",i={unversionedId:"dynamic-content",id:"dynamic-content",title:"Dynamic Content",description:"Objective: Change an element text based on a dynamic content",source:"@site/docs/dynamic-content.md",sourceDirName:".",slug:"/dynamic-content",permalink:"/dynamic-content",draft:!1,editUrl:"https://github.com/wix-incubator/velo/tree/main/docs/dynamic-content.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/"},next:{title:"Working with Repeaters",permalink:"/repeaters"}},l={},s=[{value:"Objective: Change an element text based on a dynamic content",id:"objective-change-an-element-text-based-on-a-dynamic-content",level:4}],p={toc:s},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"dynamic-content"},"Dynamic Content"),(0,a.kt)("h4",{id:"objective-change-an-element-text-based-on-a-dynamic-content"},"Objective: Change an element text based on a dynamic content"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'import { bind, makeAutoObservable } from "@wix/velo-bind";\n\n$w.onReady(() => {\n    const state = makeAutoObservable({\n        counter: 0\n    }); //create a dynamic state object with a property counter that equals to 0\n    \n    setInterval(() => state.counter++, 500); //increment the counter every 500ms\n    \n    const {text1} = bind($w);\n    text1.text = () => `Counter is: ${state.counter}`;\n});\n\n')))}m.isMDXComponent=!0}}]);
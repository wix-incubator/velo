"use strict";(self.webpackChunkvelo_bind_docs=self.webpackChunkvelo_bind_docs||[]).push([[989],{876:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>b});var n=r(2784);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,b=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return r?n.createElement(b,o(o({ref:t},c),{},{components:r})):n.createElement(b,o({ref:t},c))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7901:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=r(7896),a=(r(2784),r(876));const i={sidebar_position:2},o="Working with repeaters",s={unversionedId:"bind/repeaters",id:"bind/repeaters",title:"Working with repeaters",description:"A Repeater is a unique Wix Editor Element which is responsible for displaying a list of elements from either a data-set (dynamic) or an array set by Velo code).",source:"@site/docs/bind/repeaters.md",sourceDirName:"bind",slug:"/bind/repeaters",permalink:"/packages/velo/docs/bind/repeaters",draft:!1,editUrl:"https://github.com/wix-incubator/velo/tree/main/docs/bind/repeaters.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Hello World (counter)",permalink:"/packages/velo/docs/bind/basics"},next:{title:"Readonly props",permalink:"/packages/velo/docs/bind/readonly-props"}},l={},p=[],c={toc:p},d="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"working-with-repeaters"},"Working with repeaters"),(0,a.kt)("p",null,"A ",(0,a.kt)("a",{parentName:"p",href:"https://www.wix.com/velo/reference/$w/repeater"},"Repeater")," is a unique Wix Editor Element which is responsible for displaying a list of elements from either a data-set (dynamic) or an array set by Velo code).\nConsider a wix site with a repeater element (",(0,a.kt)("inlineCode",{parentName:"p"},"#repeater"),"), every item in the repeater represents an item in ",(0,a.kt)("inlineCode",{parentName:"p"},"state.list"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'import { makeAutoObservable, bind } from "@wix/velo-bind";\n\nconst state = makeAutoObservable({\n  list: [{ value: 1 }, { value: 2 }],\n});\nconst { repeater } = bind($w);\n\nrepeater.item = ($item, data, index) => {\n  // pass bind the $item selector to get the bound elements of a single item\n  const { label } = bind($item);\n  label.text = () => list[index].value;\n};\n')))}u.isMDXComponent=!0}}]);
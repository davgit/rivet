"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7638],{6593:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>c});var n=a(1644);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function d(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),p=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},u=function(t){var e=p(t.components);return n.createElement(o.Provider,{value:e},t.children)},m="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,u=d(t,["components","mdxType","originalType","parentName"]),m=p(a),k=r,c=m["".concat(o,".").concat(k)]||m[k]||s[k]||l;return a?n.createElement(c,i(i({ref:e},u),{},{components:a})):n.createElement(c,i({ref:e},u))}));function c(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=k;var d={};for(var o in e)hasOwnProperty.call(e,o)&&(d[o]=e[o]);d.originalType=t,d[m]="string"==typeof t?t:r,i[1]=d;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},2512:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>d,toc:()=>p});var n=a(373),r=(a(1644),a(6593));const l={},i="Data Types",d={unversionedId:"user-guide/data-types",id:"user-guide/data-types",title:"Data Types",description:"Internally, the data the passes through Rivet is marked as a number of data types. When integrating Rivet with your own application, you will need to know what these data types are and how to handle them.",source:"@site/docs/user-guide/data-types.md",sourceDirName:"user-guide",slug:"/user-guide/data-types",permalink:"/docs/user-guide/data-types",draft:!1,editUrl:"https://github.com/ironclad/rivet/tree/main/packages/docs/docs/user-guide/data-types.md",tags:[],version:"current",frontMatter:{},sidebar:"userGuide",previous:{title:"Trivet Library",permalink:"/docs/user-guide/trivet-library"},next:{title:"Control Flow",permalink:"/docs/user-guide/control-flow"}},o={},p=[{value:"DataValue",id:"datavalue",level:2},{value:"Decorators",id:"decorators",level:2},{value:"Types",id:"types",level:2}],u={toc:p},m="wrapper";function s(t){let{components:e,...a}=t;return(0,r.kt)(m,(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"data-types"},"Data Types"),(0,r.kt)("p",null,"Internally, the data the passes through Rivet is marked as a number of data types. When integrating Rivet with your own application, you will need to know what these data types are and how to handle them."),(0,r.kt)("h2",{id:"datavalue"},"DataValue"),(0,r.kt)("p",null,"A DataValue is a value that can be passed through Rivet. It is a union of all the possible data types that can be passed through Rivet. It is represented as an object with a ",(0,r.kt)("inlineCode",{parentName:"p"},"type")," property and a ",(0,r.kt)("inlineCode",{parentName:"p"},"value")," property. The ",(0,r.kt)("inlineCode",{parentName:"p"},"type")," key is in the table below, except when additional type decorators are present on the type."),(0,r.kt)("h2",{id:"decorators"},"Decorators"),(0,r.kt)("p",null,"A type may have the following decorators applied to it, which change the type. Decorators can be combined on a type name, for example a type can be ",(0,r.kt)("inlineCode",{parentName:"p"},"fn<string[]>"),". Valid decorators are:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Decorator"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"[]")),(0,r.kt)("td",{parentName:"tr",align:null},"The type is an array of the type before the brackets.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"fn<type>")),(0,r.kt)("td",{parentName:"tr",align:null},"The type is a function that returns the type inside the angle brackets.")))),(0,r.kt)("h2",{id:"types"},"Types"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"TypeScript Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"any")),(0,r.kt)("td",{parentName:"tr",align:null},"A special type of data that can store ",(0,r.kt)("em",{parentName:"td"},"anything"),"."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"unknown")),(0,r.kt)("td",{parentName:"tr",align:null},"Often, the value contained will be attempted to be either inferred based on the JavaScript type of the value, or it will be attempted to be coerced into a desired data type. Avoid using ",(0,r.kt)("inlineCode",{parentName:"td"},"any")," in most cases, especially when you already know the type of a value.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},"A boolean true or false."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},"Equivalent to the JavaScript ",(0,r.kt)("inlineCode",{parentName:"td"},"boolean")," type.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"A string value."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Equivalent to the JavaScript ",(0,r.kt)("inlineCode",{parentName:"td"},"string")," type.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:null},"A number value."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:null},"Equivalent to the JavaScript ",(0,r.kt)("inlineCode",{parentName:"td"},"number")," type.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"date")),(0,r.kt)("td",{parentName:"tr",align:null},"A date value."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"ISO-8601 date string.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"time")),(0,r.kt)("td",{parentName:"tr",align:null},"A time value."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"ISO-8601 time string.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"datetime")),(0,r.kt)("td",{parentName:"tr",align:null},"A datetime value."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"ISO-8601 datetime string.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"chat-message")),(0,r.kt)("td",{parentName:"tr",align:null},"A representation of a chat message to sent to an LLM, with attached metadata such as who is sending it."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{ type: string; message: string; name?: string; function_call?: string }")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"object")),(0,r.kt)("td",{parentName:"tr",align:null},"An object value."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Record<string, unknown>")),(0,r.kt)("td",{parentName:"tr",align:null},"Roughly equivalent to the JavaScript ",(0,r.kt)("inlineCode",{parentName:"td"},"object")," type. Often used interchangably with ",(0,r.kt)("inlineCode",{parentName:"td"},"any"),", and may be an array sometimes.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"`control-flow-excluded``"),(0,r.kt)("td",{parentName:"tr",align:null},"A value that is excluded from control flow."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined")),(0,r.kt)("td",{parentName:"tr",align:null},"This is a special value used internally in Rivet. When a node has been excluded from control flow, such as when an ",(0,r.kt)("inlineCode",{parentName:"td"},"If")," node's input evaluates to false, then the value passed to the node will be this special value, which causes the node to not be executed.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"gpt-function")),(0,r.kt)("td",{parentName:"tr",align:null},"A definition of a function that GPT can evaluate."),(0,r.kt)("td",{parentName:"tr",align:null},"(See Rivet source)"),(0,r.kt)("td",{parentName:"tr",align:null},'Only used by the Chat node when "Enable function use" is turned on.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"vector")),(0,r.kt)("td",{parentName:"tr",align:null},"A vector of numbers."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number[]")),(0,r.kt)("td",{parentName:"tr",align:null},"Used when generating and using embeddings.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"image")),(0,r.kt)("td",{parentName:"tr",align:null},"An image value."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{ mediaType: string; data: UInt8Array; }")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"audio")),(0,r.kt)("td",{parentName:"tr",align:null},"An audio value."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{ mediaType: string; eata: UInt8Array; }")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"binary")),(0,r.kt)("td",{parentName:"tr",align:null},"A binary value."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"UInt8Array")),(0,r.kt)("td",{parentName:"tr",align:null})))))}s.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8899],{6593:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var a=n(5227);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=s(n),d=r,g=c["".concat(l,".").concat(d)]||c[d]||h[d]||o;return n?a.createElement(g,i(i({ref:t},u),{},{components:n})):a.createElement(g,i({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[c]="string"==typeof e?e:r,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1573:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var a=n(373),r=(n(5227),n(6593));const o={},i="RunGraphOptions",p={unversionedId:"api-reference/node/RunGraphOptions",id:"api-reference/node/RunGraphOptions",title:"RunGraphOptions",description:"Description",source:"@site/docs/api-reference/node/RunGraphOptions.mdx",sourceDirName:"api-reference/node",slug:"/api-reference/node/RunGraphOptions",permalink:"/api-reference/node/RunGraphOptions",draft:!1,editUrl:"https://github.com/ironclad/rivet/tree/main/packages/docs/docs/api-reference/node/RunGraphOptions.mdx",tags:[],version:"current",frontMatter:{},sidebar:"apiReference",previous:{title:"RivetDebuggerServer",permalink:"/api-reference/node/RivetDebuggerServer"},next:{title:"overview",permalink:"/api-reference/core/overview"}},l={},s=[{value:"Description",id:"description",level:2},{value:"Definition",id:"definition",level:2},{value:"Properties",id:"properties",level:2},{value:"graph",id:"graph",level:3},{value:"inputs",id:"inputs",level:3},{value:"context",id:"context",level:3},{value:"remoteDebugger",id:"remotedebugger",level:3},{value:"nativeApi",id:"nativeapi",level:3},{value:"externalFunctions",id:"externalfunctions",level:3},{value:"onUserEvent",id:"onuserevent",level:3},{value:"abortSignal",id:"abortsignal",level:3},{value:"Event Handlers",id:"event-handlers",level:3},{value:"Settings",id:"settings",level:2},{value:"See Also",id:"see-also",level:2}],u={toc:s},c="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"rungraphoptions"},"RunGraphOptions"),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"RunGraphOptions")," is a complex type that encapsulates a range of options and configurations that can be provided when running a graph. This type gives you the flexibility to customize the graph execution process according to your specific needs."),(0,r.kt)("h2",{id:"definition"},"Definition"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"type RunGraphOptions = {\n  graph: string;\n  inputs?: Record<string, LooseDataValue>;\n  context?: Record<string, LooseDataValue>;\n  remoteDebugger?: RivetDebuggerServer;\n  nativeApi?: NativeApi;\n  externalFunctions?: {\n    [key: string]: ExternalFunction;\n  };\n  onUserEvent?: {\n    [key: string]: (data: DataValue | undefined) => void;\n  };\n  abortSignal?: AbortSignal;\n} & {\n  [P in keyof ProcessEvents as `on${PascalCase<P>}`]?: (params: ProcessEvents[P]) => void;\n} & Settings;\n")),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"graph"},"graph"),(0,r.kt)("p",null,"Type: ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"graph")," property represents the graph in the project to execute. This should correspond to one of the graphs defined in your project. This may either be the ID of the graph, or the name of the graph as shown in the Rivet UI."),(0,r.kt)("h3",{id:"inputs"},"inputs"),(0,r.kt)("p",null,"Type: ",(0,r.kt)("inlineCode",{parentName:"p"},"Record<string, LooseDataValue>")),(0,r.kt)("p",null,"Specifies a set of input values to the graph you are executing. The keys in the object must correspond to the IDs for the Graph Input nodes in the graph, and the associated values are the values to be passed to the graph."),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"./LooseDataValue"},"LooseDataValue")," for more information about the different types of values that can be passed to the graph."),(0,r.kt)("h3",{id:"context"},"context"),(0,r.kt)("p",null,"Type: ",(0,r.kt)("inlineCode",{parentName:"p"},"Record<string, LooseDataValue>")),(0,r.kt)("p",null,"Specifies a set of context values to the graph you are executing. The keys in the object must correspond to the IDs for the Context nodes in the graph, and the associated values are the values to be passed to the graph. Context is similar to inputs, but these values are available to every graph and subgraph."),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"./LooseDataValue"},"LooseDataValue")," for more information about the different types of values that can be passed to the graph."),(0,r.kt)("h3",{id:"remotedebugger"},"remoteDebugger"),(0,r.kt)("p",null,"Type: ",(0,r.kt)("inlineCode",{parentName:"p"},"RivetDebuggerServer")),(0,r.kt)("p",null,"Passes a ",(0,r.kt)("inlineCode",{parentName:"p"},"RivetDebuggerServer")," instance to the graph execution process. This allows you to debug the graph execution process using the Rivet Debugger."),(0,r.kt)("p",null,"See the ",(0,r.kt)("a",{parentName:"p",href:"../remote-debugging"},"Remote Debugging")," page for more information."),(0,r.kt)("h3",{id:"nativeapi"},"nativeApi"),(0,r.kt)("p",null,"Type: ",(0,r.kt)("inlineCode",{parentName:"p"},"NativeApi")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"nativeApi")," property is an optional instance of a ",(0,r.kt)("inlineCode",{parentName:"p"},"NativeApi"),". This can be used to provide a custom native API implementation for the graph execution process."),(0,r.kt)("h3",{id:"externalfunctions"},"externalFunctions"),(0,r.kt)("p",null,"Type: ",(0,r.kt)("inlineCode",{parentName:"p"},"Object")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"externalFunctions")," property is an optional object that can be used to provide external functions that can be invoked by the graph. Each key in the object corresponds to the name of an external function, and the associated value is the function to be invoked."),(0,r.kt)("p",null,"A function must return a ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise")," that resolves to a ",(0,r.kt)("inlineCode",{parentName:"p"},"DataValue")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined"),". The ",(0,r.kt)("inlineCode",{parentName:"p"},"DataValue")," returned by the function will be passed to the graph as the result of the function call."),(0,r.kt)("p",null,"See (DataValue)","[../core/DataValue]"," for more information about the different types of values that can be returned from an external function."),(0,r.kt)("h3",{id:"onuserevent"},"onUserEvent"),(0,r.kt)("p",null,"Type: ",(0,r.kt)("inlineCode",{parentName:"p"},"Object")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"onUserEvent")," property is an optional object of user event handlers. The keys are event names and the values are functions that will be called when the event is triggered. This allows you to handle custom events that may occur during the graph execution process."),(0,r.kt)("h3",{id:"abortsignal"},"abortSignal"),(0,r.kt)("p",null,"Type: ",(0,r.kt)("inlineCode",{parentName:"p"},"AbortSignal")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"abortSignal")," property is an optional ",(0,r.kt)("inlineCode",{parentName:"p"},"AbortSignal")," instance. This can be used to send an abort signal to the graph processing operation, allowing you to programmatically stop the execution process."),(0,r.kt)("h3",{id:"event-handlers"},"Event Handlers"),(0,r.kt)("p",null,"Type: ",(0,r.kt)("inlineCode",{parentName:"p"},"Object")),(0,r.kt)("p",null,"This part of the ",(0,r.kt)("inlineCode",{parentName:"p"},"RunGraphOptions")," type represents an object of event handlers for the graph processing. The keys are event names in PascalCase prefixed with ",(0,r.kt)("inlineCode",{parentName:"p"},"on")," and the values are functions that will be called when the event is triggered. This allows you to handle a variety of events that may occur during the graph execution process."),(0,r.kt)("h2",{id:"settings"},"Settings"),(0,r.kt)("p",null,"The properties of (Settings)","[../core/Settings]"," are merged into the ",(0,r.kt)("inlineCode",{parentName:"p"},"RunGraphOptions")," type. Some properties on Settings are required. See that page for more information."),(0,r.kt)("h2",{id:"see-also"},"See Also"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./LooseDataValue"},"LooseDataValue")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../core/DataValue"},"DataValue")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../core/Settings"},"Settings")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./RivetDebuggerServer"},"RivetDebuggerServer")),(0,r.kt)("li",{parentName:"ul"},"NativeApi"),(0,r.kt)("li",{parentName:"ul"},"ExternalFunction"),(0,r.kt)("li",{parentName:"ul"},"ProcessEvents")))}h.isMDXComponent=!0}}]);
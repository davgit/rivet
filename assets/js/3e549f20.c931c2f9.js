"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8706],{6593:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(5227);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var h=n.createContext({}),l=function(e){var t=n.useContext(h),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(h.Provider,{value:t},e.children)},g="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,h=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),g=l(r),c=a,d=g["".concat(h,".").concat(c)]||g[c]||s[c]||o;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=c;var p={};for(var h in t)hasOwnProperty.call(t,h)&&(p[h]=t[h]);p.originalType=e,p[g]="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},7163:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var n=r(373),a=(r(5227),r(6593));const o={title:"Working with Graphs"},i=void 0,p={unversionedId:"user-guide/working-with-graphs",id:"user-guide/working-with-graphs",title:"Working with Graphs",description:"A Rivet project contains a set of named graphs. Each of these graphs contains a set of nodes connected together, forming the graph.",source:"@site/docs/user-guide/working-with-graphs.md",sourceDirName:"user-guide",slug:"/user-guide/working-with-graphs",permalink:"/user-guide/working-with-graphs",draft:!1,editUrl:"https://github.com/ironclad/rivet/tree/main/packages/docs/docs/user-guide/working-with-graphs.md",tags:[],version:"current",frontMatter:{title:"Working with Graphs"},sidebar:"userGuide",previous:{title:"Working with Nodes",permalink:"/user-guide/adding-connecting-nodes"},next:{title:"Working with Projects",permalink:"/user-guide/working-with-projects"}},h={},l=[{value:"Creating a Graph",id:"creating-a-graph",level:2},{value:"Navigating Between Graphs",id:"navigating-between-graphs",level:2},{value:"Deleting a Graph",id:"deleting-a-graph",level:2},{value:"Running a Graph",id:"running-a-graph",level:2},{value:"Graph Inputs",id:"graph-inputs",level:2},{value:"Graph Outputs",id:"graph-outputs",level:2},{value:"Exporting Graphs",id:"exporting-graphs",level:2},{value:"Importing Graphs",id:"importing-graphs",level:2}],u={toc:l},g="wrapper";function s(e){let{components:t,...r}=e;return(0,a.kt)(g,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A Rivet project contains a set of named graphs. Each of these graphs contains a set of nodes connected together, forming the graph."),(0,a.kt)("p",null,"If you are used to code, a graph is analogous to a function. A function is a set of code that can be called from other code. A graph is a set of nodes that can be called from other graphs."),(0,a.kt)("h2",{id:"creating-a-graph"},"Creating a Graph"),(0,a.kt)("p",null,'To create a new graph, right click in the blank space in the graph list in the sidebar, and select "New Graph". This will create a new blank graph. The new graph is unsaved by default.'),(0,a.kt)("p",null,"Go into the ",(0,a.kt)("strong",{parentName:"p"},"Graph Info")," tab and give your graph a new name, then save the new graph by pressing ",(0,a.kt)("strong",{parentName:"p"},"Ctrl+S")," or ",(0,a.kt)("strong",{parentName:"p"},"Cmd+S"),". Your new graph will now appear in the graph list."),(0,a.kt)("h2",{id:"navigating-between-graphs"},"Navigating Between Graphs"),(0,a.kt)("p",null,"To navigate between graphs, click on the graph in the graph list in the sidebar. This will open the graph in the main graph area."),(0,a.kt)("h2",{id:"deleting-a-graph"},"Deleting a Graph"),(0,a.kt)("p",null,'To delete a graph, right click on it in the graph list in the sidebar and select "Delete Graph". This will delete the graph from your project. (',(0,a.kt)("strong",{parentName:"p"},"Warning")," there is no undo at this time!)"),(0,a.kt)("h2",{id:"running-a-graph"},"Running a Graph"),(0,a.kt)("p",null,"To run the currently selected graph, press the ",(0,a.kt)("strong",{parentName:"p"},"Run")," button in the top right of Rivet. You can then watch the graph execute live."),(0,a.kt)("p",null,"When connected to a remote debugger, whenever the graph executes remotely, it will automatically show the result of the run in the current graph. If you have implemented ",(0,a.kt)("inlineCode",{parentName:"p"},"dynamicGraphRun")," in your debugger server, you can also click the ",(0,a.kt)("strong",{parentName:"p"},"Run")," button to execute the graph remotely. If it is not implemented, the run button will not do anything."),(0,a.kt)("h2",{id:"graph-inputs"},"Graph Inputs"),(0,a.kt)("p",null,'A graph has a set of inputs that can be thought of as the "arguments" to the graph. When calling the graph as a subgraph, or when calling the graph from your integrated code, you can pass in these inputs, which will be available to the nodes in the graph.'),(0,a.kt)("p",null,"To add an input to the graph, add a new ",(0,a.kt)("a",{parentName:"p",href:"../node-reference/graph-input"},"Graph Input Node"),". The ID of the Graph Input node will be the name of the input on the graph. You may give default values for inputs in the node editor for the input."),(0,a.kt)("p",null,"The output port of the Graph Input will contain the value of the input (from the parent graph or code) when the graph is called."),(0,a.kt)("p",null,"A useful pattern is to toggle on the input port for the default value input, and pass in some testing data to the default value port. Then, when this graph is executed in isolation."),(0,a.kt)("h2",{id:"graph-outputs"},"Graph Outputs"),(0,a.kt)("p",null,'Similar to graph inputs, a graph can have outputs that can be thought of as the "return value" of the graph. When calling the graph as a subgraph, or when calling the graph from your integrated code, you can read the values of these outputs.'),(0,a.kt)("p",null,"To add an output to the graph, add a new ",(0,a.kt)("a",{parentName:"p",href:"../node-reference/graph-output"},"Graph Output Node"),". The ID of the Graph Output node will be the name of the output on the graph."),(0,a.kt)("p",null,"Connect a node to the input port of the Graph Output node. The value of the output port of the node will be the value of the output of the graph."),(0,a.kt)("p",null,"Once the graph has finished executing, the code or parent graph will be able to proceed with the outputs of the graph."),(0,a.kt)("h2",{id:"exporting-graphs"},"Exporting Graphs"),(0,a.kt)("p",null,"To export a single graph from your project, open the graph by clicking on it, and choose ",(0,a.kt)("strong",{parentName:"p"},"Export Graph")," from the File menu. This will open a file dialog where you can choose a location to save the graph. The graph will be saved as a ",(0,a.kt)("inlineCode",{parentName:"p"},".rivet-graph")," file."),(0,a.kt)("h2",{id:"importing-graphs"},"Importing Graphs"),(0,a.kt)("p",null,"To import a graph into the current project (merging it into the current project), choose ",(0,a.kt)("strong",{parentName:"p"},"Import Graph")," from the File menu. This will open a file dialog where you can choose a graph to import. The graph will be imported into the current project."))}s.isMDXComponent=!0}}]);
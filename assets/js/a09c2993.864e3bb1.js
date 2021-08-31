"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4128],{3905:function(e,n,t){t.r(n),t.d(n,{MDXContext:function(){return l},MDXProvider:function(){return f},mdx:function(){return h},useMDXComponents:function(){return d},withMDXComponents:function(){return u}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(){return(a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),u=function(e){return function(n){var t=d(n.components);return r.createElement(e,a({},n,{components:t}))}},d=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},f=function(e){var n=d(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=d(t),f=o,m=u["".concat(i,".").concat(f)]||u[f]||p[f]||a;return t?r.createElement(m,c(c({ref:n},l),{},{components:t})):r.createElement(m,c({ref:n},l))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},12038:function(e,n,t){t.d(n,{O1:function(){return i},EO:function(){return c},Rr:function(){return s}});var r,o=t(67294),a=t(44256);function i(e){return o.createElement("a",{href:r+e.file},e.file)}function c(e){return o.createElement("a",{href:r+e.file},e.children)}r=(0,a.isInternal)()?"https://www.internalfb.com/code/fbsource/fbcode/":"https://github.com/facebookincubator/Glean/tree/master/";var s=function(e){e.children;var n=e.internal,t=e.external;return(0,a.fbContent)({internal:o.createElement("code",null,n),external:o.createElement("code",null,t)})}},61143:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return d},default:function(){return p}});var r=t(87462),o=t(63366),a=(t(67294),t(3905)),i=(t(44256),t(12038)),c=["components"],s={id:"introduction",title:"Introduction",sidebar_label:"Introduction"},l=void 0,u={unversionedId:"introduction",id:"introduction",isDocsHomePage:!1,title:"Introduction",description:"Glean is a system for working with facts about source code. It is",source:"@site/docs/introduction.md",sourceDirName:".",slug:"/introduction",permalink:"/docs/introduction",editUrl:"https://github.com/facebookincubator/Glean/tree/main/glean/website/docs/introduction.md",version:"current",frontMatter:{id:"introduction",title:"Introduction",sidebar_label:"Introduction"},sidebar:"someSidebar",next:{title:"Trying Glean",permalink:"/docs/trying"}},d=[],f={toc:d};function p(e){var n=e.components,t=(0,o.Z)(e,c);return(0,a.mdx)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,a.mdx)("p",null,"Glean is a system for working with facts about source code. It is\ndesigned for collecting and storing detailed information about code\nstructure, and providing access to the data to power tools and\nexperiences from online IDE features to offline code analysis."),(0,a.mdx)("p",null,"Glean consists of the following components:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("p",{parentName:"li"},"An ",(0,a.mdx)("strong",{parentName:"p"},"efficient storage backend")," built on\n",(0,a.mdx)("a",{parentName:"p",href:"https://rocksdb.org/"},"RocksDB"),", for storing facts. Facts are\nimmutable terms described by user-defined schemas, and form a\nDAG. Facts are automatically de-duplicated by the storage\nbackend. Think of it as being able to store and query the AST of\nyour code, efficiently and with full type-safety",(0,a.mdx)("sup",{parentName:"p",id:"fnref-1"},(0,a.mdx)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),".")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("p",{parentName:"li"},"A query engine implementing our ",(0,a.mdx)("strong",{parentName:"p"},(0,a.mdx)("a",{parentName:"strong",href:"angle/intro"},"declarative query language\nAngle")),".  Angle is a logic language with similarities\nto Datalog, but with extensions that make it suitable for building\ncomplex queries over Glean data",(0,a.mdx)("sup",{parentName:"p",id:"fnref-2"},(0,a.mdx)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2")),".  Like in Datalog, Glean can\nderive new facts automatically by ",(0,a.mdx)("a",{parentName:"p",href:"/docs/derived"},"defining rules")," using\nAngle.")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("p",{parentName:"li"},"A ",(0,a.mdx)("strong",{parentName:"p"},(0,a.mdx)("a",{parentName:"strong",href:"/docs/server"},"server"))," that manages multiple databases on disk, and\nserves requests from clients to create, write, and query\ndatabases. The server currently uses Thrift, but there's no reason\nthere couldn't also be servers exposing other protocols in the\nfuture.  The server is designed to be deployed at scale, serving\nreplicated databases to large numbers of clients.")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("p",{parentName:"li"},"An ",(0,a.mdx)("strong",{parentName:"p"},(0,a.mdx)("a",{parentName:"strong",href:"/docs/shell"},"interactive shell"))," where you can type queries and explore\nthe data.")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("p",{parentName:"li"},"A ",(0,a.mdx)("strong",{parentName:"p"},(0,a.mdx)("a",{parentName:"strong",href:"/docs/cli"},"command-line tool"))," for creating, writing, and querying\ndatabases, either directly or by connecting to the server.")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("p",{parentName:"li"},"Several ",(0,a.mdx)("strong",{parentName:"p"},(0,a.mdx)(i.EO,{file:"glean/schema/source",mdxType:"SrcFileLink"},"example schemas"))," for common programming languages, and\n",(0,a.mdx)("strong",{parentName:"p"},(0,a.mdx)("a",{parentName:"strong",href:"/docs/indexer/intro"},"indexers"))," for some of those.  Note that Glean\ndoesn't force all the data into a single schema; there can be\narbitrary amounts of language-specific detail in the schema for each\nlanguage. Language-neutral abstractions can be built by ",(0,a.mdx)(i.EO,{file:"glean/schema/source/codemarkup.angle",mdxType:"SrcFileLink"},"deriving facts using Angle"),"."))),(0,a.mdx)("div",{className:"footnotes"},(0,a.mdx)("hr",{parentName:"div"}),(0,a.mdx)("ol",{parentName:"div"},(0,a.mdx)("li",{parentName:"ol",id:"fn-1"},"while we could in principle store the full AST, for efficiency\nreasons we typically store only the parts we need for the clients we\nwant to support. Usually that means things like the locations of\ndefinitions and cross-references, but not expressions.",(0,a.mdx)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,a.mdx)("li",{parentName:"ol",id:"fn-2"},"If you're familiar with Datalog, it's worth noting that\ncurrently Angle is limited to non-recursive queries only.",(0,a.mdx)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")))))}p.isMDXComponent=!0},47596:function(e,n,t){var r=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(o,a){function i(e){try{s(r.next(e))}catch(n){a(n)}}function c(e){try{s(r.throw(e))}catch(n){a(n)}}function s(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(i,c)}s((r=r.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.getSpecInfo=void 0;const o=t(11737);n.getSpecInfo=function(e){return r(this,void 0,void 0,(function*(){return yield o.call({module:"bloks",api:"getSpecInfo",args:{styleId:e}})}))}},11737:function(e,n){var t=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(o,a){function i(e){try{s(r.next(e))}catch(n){a(n)}}function c(e){try{s(r.throw(e))}catch(n){a(n)}}function s(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(i,c)}s((r=r.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.call=void 0;let r=!1,o=0;const a={};n.call=function(e){return t(this,void 0,void 0,(function*(){if("staticdocs.thefacebook.com"!==window.location.hostname&&"localhost"!==window.location.hostname)return Promise.reject(new Error("Not running on static docs"));r||(r=!0,window.addEventListener("message",(e=>{if("static-docs-bridge-response"!==e.data.event)return;const n=e.data.id;n in a||console.error(`Recieved response for id: ${n} with no matching receiver`),"response"in e.data?a[n].resolve(e.data.response):a[n].reject(new Error(e.data.error)),delete a[n]})));const n=o++,t=new Promise(((e,t)=>{a[n]={resolve:e,reject:t}})),i={event:"static-docs-bridge-call",id:n,module:e.module,api:e.api,args:e.args},c="localhost"===window.location.hostname?"*":"https://www.internalfb.com";return window.parent.postMessage(i,c),t}))}},24855:function(e,n,t){var r=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(o,a){function i(e){try{s(r.next(e))}catch(n){a(n)}}function c(e){try{s(r.throw(e))}catch(n){a(n)}}function s(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(i,c)}s((r=r.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.reportFeatureUsage=n.reportContentCopied=void 0;const o=t(11737);n.reportContentCopied=function(e){return r(this,void 0,void 0,(function*(){const{textContent:n}=e;try{yield o.call({module:"feedback",api:"reportContentCopied",args:{textContent:n}})}catch(t){}}))},n.reportFeatureUsage=function(e){return r(this,void 0,void 0,(function*(){const{featureName:n,id:t}=e;console.log("used feature");try{yield o.call({module:"feedback",api:"reportFeatureUsage",args:{featureName:n,id:t}})}catch(r){}}))}},44256:function(e,n,t){var r=this&&this.__createBinding||(Object.create?function(e,n,t,r){void 0===r&&(r=t),Object.defineProperty(e,r,{enumerable:!0,get:function(){return n[t]}})}:function(e,n,t,r){void 0===r&&(r=t),e[r]=n[t]}),o=this&&this.__setModuleDefault||(Object.create?function(e,n){Object.defineProperty(e,"default",{enumerable:!0,value:n})}:function(e,n){e.default=n}),a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&r(n,e,t);return o(n,e),n};Object.defineProperty(n,"__esModule",{value:!0}),n.OssOnly=n.FbInternalOnly=n.isInternal=n.validateFbContentArgs=n.fbInternalOnly=n.fbContent=n.inpageeditor=n.feedback=n.uidocs=n.bloks=void 0,n.bloks=a(t(47596)),n.uidocs=a(t(17483)),n.feedback=a(t(24855)),n.inpageeditor=a(t(27312));const i=["internal","external"];function c(e){return l(e),u()?"internal"in e?s(e.internal):[]:"external"in e?s(e.external):[]}function s(e){return"function"==typeof e?e():e}function l(e){if("object"!=typeof e)throw new Error(`fbContent() args must be an object containing keys: ${i}. Instead got ${e}`);if(!Object.keys(e).find((e=>i.find((n=>n===e)))))throw new Error(`No valid args found in ${JSON.stringify(e)}. Accepted keys: ${i}`);const n=Object.keys(e).filter((e=>!i.find((n=>n===e))));if(n.length>0)throw new Error(`Unexpected keys ${n} found in fbContent() args. Accepted keys: ${i}`)}function u(){try{return Boolean(!1)}catch(e){return console.log("process.env.FB_INTERNAL couldn't be read, maybe you forgot to add the required webpack EnvironmentPlugin config?",e),!1}}n.fbContent=c,n.fbInternalOnly=function(e){return c({internal:e})},n.validateFbContentArgs=l,n.isInternal=u,n.FbInternalOnly=function(e){return u()?e.children:null},n.OssOnly=function(e){return u()?null:e.children}},27312:function(e,n,t){var r=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(o,a){function i(e){try{s(r.next(e))}catch(n){a(n)}}function c(e){try{s(r.throw(e))}catch(n){a(n)}}function s(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(i,c)}s((r=r.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.submitDiff=void 0;const o=t(11737);n.submitDiff=function(e){return r(this,void 0,void 0,(function*(){const{file_path:n,new_content:t,project_name:r}=e;try{return yield o.call({module:"inpageeditor",api:"createPhabricatorDiffApi",args:{file_path:n,new_content:t,project_name:r}})}catch(a){throw new Error(`Error occurred while trying to submit diff. Stack trace: ${a}`)}}))}},17483:function(e,n,t){var r=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(o,a){function i(e){try{s(r.next(e))}catch(n){a(n)}}function c(e){try{s(r.throw(e))}catch(n){a(n)}}function s(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(i,c)}s((r=r.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.getApi=n.docsets=void 0;const o=t(11737);n.docsets={BLOKS_CORE:"887372105406659"},n.getApi=function(e){return r(this,void 0,void 0,(function*(){const{name:n,framework:t,docset:r}=e;return yield o.call({module:"uidocs",api:"getApi",args:{name:n,framework:t,docset:r}})}))}}}]);
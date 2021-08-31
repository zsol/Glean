"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[684],{3905:function(e,n,t){t.r(n),t.d(n,{MDXContext:function(){return u},MDXProvider:function(){return f},mdx:function(){return h},useMDXComponents:function(){return d},withMDXComponents:function(){return s}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(){return(o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=r.createContext({}),s=function(e){return function(n){var t=d(n.components);return r.createElement(e,o({},n,{components:t}))}},d=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},f=function(e){var n=d(e.components);return r.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=d(t),f=i,m=s["".concat(a,".").concat(f)]||s[f]||p[f]||o;return t?r.createElement(m,l(l({ref:n},u),{},{components:t})):r.createElement(m,l({ref:n},u))}));function h(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var u=2;u<o;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},12038:function(e,n,t){t.d(n,{O1:function(){return a},EO:function(){return l},Rr:function(){return c}});var r,i=t(67294),o=t(44256);function a(e){return i.createElement("a",{href:r+e.file},e.file)}function l(e){return i.createElement("a",{href:r+e.file},e.children)}r=(0,o.isInternal)()?"https://www.internalfb.com/code/fbsource/fbcode/":"https://github.com/facebookincubator/Glean/tree/master/";var c=function(e){e.children;var n=e.internal,t=e.external;return(0,o.fbContent)({internal:i.createElement("code",null,n),external:i.createElement("code",null,t)})}},14614:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return d},default:function(){return p}});var r=t(87462),i=t(63366),o=(t(67294),t(3905)),a=t(12038),l=["components"],c={id:"haskell",title:"Haskell Query API",sidebar_label:"Haskell"},u=void 0,s={unversionedId:"query/api/haskell",id:"query/api/haskell",isDocsHomePage:!1,title:"Haskell Query API",description:"To use the Haskell API:",source:"@site/docs/query/api/haskell.md",sourceDirName:"query/api",slug:"/query/api/haskell",permalink:"/docs/query/api/haskell",editUrl:"https://github.com/facebookincubator/Glean/tree/main/glean/website/docs/query/api/haskell.md",version:"current",frontMatter:{id:"haskell",title:"Haskell Query API",sidebar_label:"Haskell"},sidebar:"someSidebar",previous:{title:"Style Guide",permalink:"/docs/angle/style"},next:{title:"Derived Predicates",permalink:"/docs/derived"}},d=[{value:"Using Haxl",id:"using-haxl",children:[]}],f={toc:d};function p(e){var n=e.components,t=(0,i.Z)(e,l);return(0,o.mdx)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,"To use the Haskell API:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-haskell"},"import Glean\nimport Glean.Angle\n")),(0,o.mdx)("p",null,"Or import qualified if you prefer:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-haskell"},"import qualified Glean\nimport qualified Glean.Angle as Angle\n")),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)(a.EO,{file:"glean/hs/Glean/Query/Thrift.hs",mdxType:"SrcFileLink"},"Haskell query API")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)(a.EO,{file:"glean/hs/Glean/Query/Angle.hs",mdxType:"SrcFileLink"},"Angle DSL")," - a library for building type-safe Angle queries"),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)(a.EO,{file:"glean/client/hs/example/Example.hs",mdxType:"SrcFileLink"},"Simple example client")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)(a.EO,{file:"glean/demo/Hyperlink.hs",mdxType:"SrcFileLink"},"Example: Hyperlink: browse hyperlinked code")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)(a.EO,{file:"glean/lib/Glean/Search/Search.hs",mdxType:"SrcFileLink"},"Example: Search for definitions by name"))),(0,o.mdx)("h3",{id:"using-haxl"},"Using Haxl"),(0,o.mdx)("p",null,"Glean comes with a ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/facebook/Haxl/"},"Haxl")," API for performing queries. The advantages of using the Haxl API are:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},"Queries can be performed concurrently without using explicit threads\nor ",(0,o.mdx)("inlineCode",{parentName:"p"},"Control.Concurrent.Async"),". Applicative combinators such as\n",(0,o.mdx)("inlineCode",{parentName:"p"},"sequence")," or ",(0,o.mdx)("inlineCode",{parentName:"p"},"mapM")," are performed concurrently in the ",(0,o.mdx)("inlineCode",{parentName:"p"},"Haxl")," monad,\nand GHC's ",(0,o.mdx)("inlineCode",{parentName:"p"},"ApplicativeDo")," extension can be used to enable implicit\nconcurrency within a sequence of statements in a ",(0,o.mdx)("inlineCode",{parentName:"p"},"do")," expression.")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},"When traversing the results of a query, instead of using the\n",(0,o.mdx)("inlineCode",{parentName:"p"},"recursive")," query modifier to recursively fetch the entire result,\nHaxl provides a family of ",(0,o.mdx)("inlineCode",{parentName:"p"},"get")," operations to iteratively fetch\nnested facts in the result.  When performed concurrently in the\n",(0,o.mdx)("inlineCode",{parentName:"p"},"Haxl")," monad, multiple calls to ",(0,o.mdx)("inlineCode",{parentName:"p"},"get")," are batched into a single\nrequest to Glean. This makes it efficient to do shallow queries and\nthen selectively traverse and expand the results as needed."))),(0,o.mdx)("p",null,"To use the API, import ",(0,o.mdx)(a.EO,{file:"glean/client/hs/Glean/Haxl.hs",mdxType:"SrcFileLink"},"Glean.Haxl"),". The\nimplementation of the API is in ",(0,o.mdx)(a.EO,{file:"glean/haxl/Haxl/DataSource/Glean.hs",mdxType:"SrcFileLink"},"glean/haxl/Haxl/DataSource/Glean.hs"),"."))}p.isMDXComponent=!0},47596:function(e,n,t){var r=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(i,o){function a(e){try{c(r.next(e))}catch(n){o(n)}}function l(e){try{c(r.throw(e))}catch(n){o(n)}}function c(e){var n;e.done?i(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(a,l)}c((r=r.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.getSpecInfo=void 0;const i=t(11737);n.getSpecInfo=function(e){return r(this,void 0,void 0,(function*(){return yield i.call({module:"bloks",api:"getSpecInfo",args:{styleId:e}})}))}},11737:function(e,n){var t=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(i,o){function a(e){try{c(r.next(e))}catch(n){o(n)}}function l(e){try{c(r.throw(e))}catch(n){o(n)}}function c(e){var n;e.done?i(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(a,l)}c((r=r.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.call=void 0;let r=!1,i=0;const o={};n.call=function(e){return t(this,void 0,void 0,(function*(){if("staticdocs.thefacebook.com"!==window.location.hostname&&"localhost"!==window.location.hostname)return Promise.reject(new Error("Not running on static docs"));r||(r=!0,window.addEventListener("message",(e=>{if("static-docs-bridge-response"!==e.data.event)return;const n=e.data.id;n in o||console.error(`Recieved response for id: ${n} with no matching receiver`),"response"in e.data?o[n].resolve(e.data.response):o[n].reject(new Error(e.data.error)),delete o[n]})));const n=i++,t=new Promise(((e,t)=>{o[n]={resolve:e,reject:t}})),a={event:"static-docs-bridge-call",id:n,module:e.module,api:e.api,args:e.args},l="localhost"===window.location.hostname?"*":"https://www.internalfb.com";return window.parent.postMessage(a,l),t}))}},24855:function(e,n,t){var r=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(i,o){function a(e){try{c(r.next(e))}catch(n){o(n)}}function l(e){try{c(r.throw(e))}catch(n){o(n)}}function c(e){var n;e.done?i(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(a,l)}c((r=r.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.reportFeatureUsage=n.reportContentCopied=void 0;const i=t(11737);n.reportContentCopied=function(e){return r(this,void 0,void 0,(function*(){const{textContent:n}=e;try{yield i.call({module:"feedback",api:"reportContentCopied",args:{textContent:n}})}catch(t){}}))},n.reportFeatureUsage=function(e){return r(this,void 0,void 0,(function*(){const{featureName:n,id:t}=e;console.log("used feature");try{yield i.call({module:"feedback",api:"reportFeatureUsage",args:{featureName:n,id:t}})}catch(r){}}))}},44256:function(e,n,t){var r=this&&this.__createBinding||(Object.create?function(e,n,t,r){void 0===r&&(r=t),Object.defineProperty(e,r,{enumerable:!0,get:function(){return n[t]}})}:function(e,n,t,r){void 0===r&&(r=t),e[r]=n[t]}),i=this&&this.__setModuleDefault||(Object.create?function(e,n){Object.defineProperty(e,"default",{enumerable:!0,value:n})}:function(e,n){e.default=n}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&r(n,e,t);return i(n,e),n};Object.defineProperty(n,"__esModule",{value:!0}),n.OssOnly=n.FbInternalOnly=n.isInternal=n.validateFbContentArgs=n.fbInternalOnly=n.fbContent=n.inpageeditor=n.feedback=n.uidocs=n.bloks=void 0,n.bloks=o(t(47596)),n.uidocs=o(t(17483)),n.feedback=o(t(24855)),n.inpageeditor=o(t(27312));const a=["internal","external"];function l(e){return u(e),s()?"internal"in e?c(e.internal):[]:"external"in e?c(e.external):[]}function c(e){return"function"==typeof e?e():e}function u(e){if("object"!=typeof e)throw new Error(`fbContent() args must be an object containing keys: ${a}. Instead got ${e}`);if(!Object.keys(e).find((e=>a.find((n=>n===e)))))throw new Error(`No valid args found in ${JSON.stringify(e)}. Accepted keys: ${a}`);const n=Object.keys(e).filter((e=>!a.find((n=>n===e))));if(n.length>0)throw new Error(`Unexpected keys ${n} found in fbContent() args. Accepted keys: ${a}`)}function s(){try{return Boolean(!1)}catch(e){return console.log("process.env.FB_INTERNAL couldn't be read, maybe you forgot to add the required webpack EnvironmentPlugin config?",e),!1}}n.fbContent=l,n.fbInternalOnly=function(e){return l({internal:e})},n.validateFbContentArgs=u,n.isInternal=s,n.FbInternalOnly=function(e){return s()?e.children:null},n.OssOnly=function(e){return s()?null:e.children}},27312:function(e,n,t){var r=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(i,o){function a(e){try{c(r.next(e))}catch(n){o(n)}}function l(e){try{c(r.throw(e))}catch(n){o(n)}}function c(e){var n;e.done?i(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(a,l)}c((r=r.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.submitDiff=void 0;const i=t(11737);n.submitDiff=function(e){return r(this,void 0,void 0,(function*(){const{file_path:n,new_content:t,project_name:r}=e;try{return yield i.call({module:"inpageeditor",api:"createPhabricatorDiffApi",args:{file_path:n,new_content:t,project_name:r}})}catch(o){throw new Error(`Error occurred while trying to submit diff. Stack trace: ${o}`)}}))}},17483:function(e,n,t){var r=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(i,o){function a(e){try{c(r.next(e))}catch(n){o(n)}}function l(e){try{c(r.throw(e))}catch(n){o(n)}}function c(e){var n;e.done?i(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(a,l)}c((r=r.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.getApi=n.docsets=void 0;const i=t(11737);n.docsets={BLOKS_CORE:"887372105406659"},n.getApi=function(e){return r(this,void 0,void 0,(function*(){const{name:n,framework:t,docset:r}=e;return yield i.call({module:"uidocs",api:"getApi",args:{name:n,framework:t,docset:r}})}))}}}]);
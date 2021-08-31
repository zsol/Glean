"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3106],{3905:function(e,n,t){t.r(n),t.d(n,{MDXContext:function(){return d},MDXProvider:function(){return p},mdx:function(){return x},useMDXComponents:function(){return u},withMDXComponents:function(){return s}});var l=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(){return(a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e}).apply(this,arguments)}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function m(e,n){if(null==e)return{};var t,l,i=function(e,n){if(null==e)return{};var t,l,i={},a=Object.keys(e);for(l=0;l<a.length;l++)t=a[l],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)t=a[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var d=l.createContext({}),s=function(e){return function(n){var t=u(n.components);return l.createElement(e,a({},n,{components:t}))}},u=function(e){var n=l.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=u(e.components);return l.createElement(d.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},h=l.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,r=e.parentName,d=m(e,["components","mdxType","originalType","parentName"]),s=u(t),p=i,h=s["".concat(r,".").concat(p)]||s[p]||c[p]||a;return t?l.createElement(h,o(o({ref:n},d),{},{components:t})):l.createElement(h,o({ref:n},d))}));function x(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,r=new Array(a);r[0]=h;var o={};for(var m in n)hasOwnProperty.call(n,m)&&(o[m]=n[m]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var d=2;d<a;d++)r[d]=t[d];return l.createElement.apply(null,r)}return l.createElement.apply(null,t)}h.displayName="MDXCreateElement"},92756:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return m},metadata:function(){return d},toc:function(){return s},default:function(){return x}});var l=t(87462),i=t(63366),a=(t(67294),t(3905)),r=["components"],o={id:"shell",title:"Using the Shell",sidebar_label:"Using the Shell"},m=void 0,d={unversionedId:"shell",id:"shell",isDocsHomePage:!1,title:"Using the Shell",description:"The shell is an interactive tool in which you can",source:"@site/docs/shell.md",sourceDirName:".",slug:"/shell",permalink:"/docs/shell",editUrl:"https://github.com/facebookincubator/Glean/tree/main/glean/website/docs/shell.md",version:"current",frontMatter:{id:"shell",title:"Using the Shell",sidebar_label:"Using the Shell"},sidebar:"someSidebar",previous:{title:"Running the Tools",permalink:"/docs/running"},next:{title:"Running the Glean Server",permalink:"/docs/server"}},s=[{value:"Invoking the shell",id:"invoking-the-shell",children:[]},{value:"Quick start",id:"quick-start",children:[]},{value:"Shell options",id:"shell-options",children:[]}],u=function(e){return function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.mdx)("div",n)}},p=u("FbInternalOnly"),c=u("OssOnly"),h={toc:s};function x(e){var n=e.components,t=(0,i.Z)(e,r);return(0,a.mdx)("wrapper",(0,l.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,a.mdx)("p",null,"The shell is an interactive tool in which you can"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"Experiment with ",(0,a.mdx)("a",{parentName:"li",href:"/docs/angle/guide"},"Angle queries")),(0,a.mdx)("li",{parentName:"ul"},"Explore the data in a Glean database"),(0,a.mdx)("li",{parentName:"ul"},"Experiment with schema changes and ",(0,a.mdx)("a",{parentName:"li",href:"/docs/derived"},"derived predicates")),(0,a.mdx)("li",{parentName:"ul"},"Create experimental databases and query them")),(0,a.mdx)("h2",{id:"invoking-the-shell"},"Invoking the shell"),(0,a.mdx)(p,{mdxType:"FbInternalOnly"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre"},"glean shell\n")),(0,a.mdx)("p",null,"will start the shell, connect to the Glean query service and load up\nthe ",(0,a.mdx)("inlineCode",{parentName:"p"},"fbsource")," database.")),(0,a.mdx)(c,{mdxType:"OssOnly"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre"},"glean shell --service HOST:PORT\n")),(0,a.mdx)("p",null,"to connect to a server, or"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre"},"glean shell --db-root DIR\n")),(0,a.mdx)("p",null,"to use local databases from directory ",(0,a.mdx)("inlineCode",{parentName:"p"},"DIR"),".")),(0,a.mdx)("p",null,"See ",(0,a.mdx)("a",{parentName:"p",href:"#shell-options"},"shell options")," for more command-line options."),(0,a.mdx)("h2",{id:"quick-start"},"Quick start"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"List the available databases with ",(0,a.mdx)("inlineCode",{parentName:"li"},":list")),(0,a.mdx)("li",{parentName:"ul"},"Select a database with ",(0,a.mdx)("inlineCode",{parentName:"li"},":db NAME")),(0,a.mdx)("li",{parentName:"ul"},"See the contents of the database with ",(0,a.mdx)("inlineCode",{parentName:"li"},":stat")),(0,a.mdx)("li",{parentName:"ul"},"Type queries in ",(0,a.mdx)("a",{parentName:"li",href:"/docs/angle/guide"},"Angle")," to see the results.")),(0,a.mdx)("h2",{id:"shell-options"},"Shell options"),(0,a.mdx)("p",null,"The shell accepts all the ",(0,a.mdx)("a",{parentName:"p",href:"running#common-options"},"common options"),". Additionally:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"QUERY")," or ",(0,a.mdx)("inlineCode",{parentName:"li"},":COMMAND"),(0,a.mdx)("br",null),"\nPerform the given ",(0,a.mdx)("inlineCode",{parentName:"li"},"QUERY")," or ",(0,a.mdx)("inlineCode",{parentName:"li"},":COMMAND")," and then exit. If multiple\ncommands or queries are given on the command line, they will be\nperformed in left-to-right order."),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"--db NAME")," or ",(0,a.mdx)("inlineCode",{parentName:"li"},"--db NAME/HASH"),(0,a.mdx)("br",null),"\nLoad the database ",(0,a.mdx)("inlineCode",{parentName:"li"},"NAME")," or ",(0,a.mdx)("inlineCode",{parentName:"li"},"NAME/HASH"),"."),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"--limit N"),(0,a.mdx)("br",null),"\nSet the default limit for queries; equivalent to the ",(0,a.mdx)("inlineCode",{parentName:"li"},":limit")," command."),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"--width N"),(0,a.mdx)("br",null),"\nSet the terminal width for pretty-printing results."),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"--pager"),(0,a.mdx)("br",null),"\nEnable automatic paging of results longer than a page."),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"-v|--verbose N"),(0,a.mdx)("br",null),"\nEnabled verbosity at level ",(0,a.mdx)("inlineCode",{parentName:"li"},"N"))),(0,a.mdx)("h1",{id:"commands"},"Commands"),(0,a.mdx)("p",null,"Note that you can abbreviate commands as long as the abbreviation is\nunique. For example, ",(0,a.mdx)("inlineCode",{parentName:"p"},":edit")," can be abbreviated as ",(0,a.mdx)("inlineCode",{parentName:"p"},":e"),"."),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},":database NAME")," or ",(0,a.mdx)("inlineCode",{parentName:"li"},":database NAME/HASH"),(0,a.mdx)("br",null),"\nUse database ",(0,a.mdx)("inlineCode",{parentName:"li"},"NAME")," or ",(0,a.mdx)("inlineCode",{parentName:"li"},"NAME/HASH"),"."),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"list NAME"),(0,a.mdx)("br",null),"\nList available databases which match ",(0,a.mdx)("inlineCode",{parentName:"li"},"NAME"),"."),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"list-all NAME"),(0,a.mdx)("br",null),"\nList available databases, and restorable backups, which match ",(0,a.mdx)("inlineCode",{parentName:"li"},"NAME"),"."),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},":index LANGUAGE DIR"),(0,a.mdx)("br",null),"\nIndex some source code for ",(0,a.mdx)("inlineCode",{parentName:"li"},"LANGUAGE")," in directory ",(0,a.mdx)("inlineCode",{parentName:"li"},"DIR"),", creating a\nnew database. This command is only available with the ",(0,a.mdx)("inlineCode",{parentName:"li"},"--db-root"),"\noption. Currently the only supported languages are ",(0,a.mdx)("inlineCode",{parentName:"li"},"flow")," and ",(0,a.mdx)("inlineCode",{parentName:"li"},"hack"),"."),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},":debug off|[-]ir|[-]bytecode|all"),(0,a.mdx)("br",null),"\nEnable query debugging; ",(0,a.mdx)("inlineCode",{parentName:"li"},":debug ir")," shows the intermediate\nrepresentation of the query after optimisation; ",(0,a.mdx)("inlineCode",{parentName:"li"},":debug\nbytecode")," shows the compiled bytecode."),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},":describe NAME"),(0,a.mdx)("br",null),"\nLike ",(0,a.mdx)("inlineCode",{parentName:"li"},":list"),", but show more details"),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},":describe-all NAME"),(0,a.mdx)("br",null),"\nLike ",(0,a.mdx)("inlineCode",{parentName:"li"},":list-all"),", but show more details"),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},":schema [PREDICATE|TYPE]"),(0,a.mdx)("br",null),"\nShow schema for the given ",(0,a.mdx)("inlineCode",{parentName:"li"},"PREDICATE")," or ",(0,a.mdx)("inlineCode",{parentName:"li"},"TYPE"),", or the whole schema\nif no predicate or type is given."),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},":edit"),(0,a.mdx)("br",null),"\nEdit a query in an external editor. Set the ",(0,a.mdx)("inlineCode",{parentName:"li"},"EDITOR")," environment\nvariable to choose an editor."),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},":limit N"),(0,a.mdx)("br",null),"\nSet limit on the number of query results. If there are more results\nthan the limit, then you can type ",(0,a.mdx)("inlineCode",{parentName:"li"},":more")," to fetch the next ",(0,a.mdx)("inlineCode",{parentName:"li"},"N"),"\nresults."),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},":timeout off|MILLISECONDS"),(0,a.mdx)("br",null),"\nSet the query time budget. If the time limit expires, the results so\nfar are returned, and you can type ",(0,a.mdx)("inlineCode",{parentName:"li"},":more")," to see more results."),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},":count QUERY"),(0,a.mdx)("br",null),"\nShow only a count of query results, not the results themselves"),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},":more"),(0,a.mdx)("br",null),"\nFetch more results from the previous query"),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},":profile [off|summary|full]"),(0,a.mdx)("br",null),"\nShow query profiling information; see ",(0,a.mdx)("a",{parentName:"li",href:"/docs/angle/debugging"},"Query Debugging"),"."),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},":reload"),(0,a.mdx)("br",null),"\nReload the schema (when using ",(0,a.mdx)("inlineCode",{parentName:"li"},"--schema"),"). This command is useful when\nmaking changes to the schema, including ",(0,a.mdx)("a",{parentName:"li",href:"derived"},"derived\npredicates"),". Edit the schema source files, ",(0,a.mdx)("inlineCode",{parentName:"li"},":reload")," and then\ntest your changes."),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},":statistics [PREDICATE]"),(0,a.mdx)("br",null),"\nShow statistics for the current database."),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},":quit"),(0,a.mdx)("br",null),"\nLeave the shell.")))}x.isMDXComponent=!0}}]);
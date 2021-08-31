"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4468],{3905:function(e,n,a){a.r(n),a.d(n,{MDXContext:function(){return o},MDXProvider:function(){return s},mdx:function(){return h},useMDXComponents:function(){return u},withMDXComponents:function(){return p}});var t=a(67294);function l(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(){return(i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e}).apply(this,arguments)}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function d(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){l(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function m(e,n){if(null==e)return{};var a,t,l=function(e,n){if(null==e)return{};var a,t,l={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(l[a]=e[a]);return l}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=t.createContext({}),p=function(e){return function(n){var a=u(n.components);return t.createElement(e,i({},n,{components:a}))}},u=function(e){var n=t.useContext(o),a=n;return e&&(a="function"==typeof e?e(n):d(d({},n),e)),a},s=function(e){var n=u(e.components);return t.createElement(o.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},x=t.forwardRef((function(e,n){var a=e.components,l=e.mdxType,i=e.originalType,r=e.parentName,o=m(e,["components","mdxType","originalType","parentName"]),p=u(a),s=l,x=p["".concat(r,".").concat(s)]||p[s]||c[s]||i;return a?t.createElement(x,d(d({ref:n},o),{},{components:a})):t.createElement(x,d({ref:n},o))}));function h(e,n){var a=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var i=a.length,r=new Array(i);r[0]=x;var d={};for(var m in n)hasOwnProperty.call(n,m)&&(d[m]=n[m]);d.originalType=e,d.mdxType="string"==typeof e?e:l,r[1]=d;for(var o=2;o<i;o++)r[o]=a[o];return t.createElement.apply(null,r)}return t.createElement.apply(null,a)}x.displayName="MDXCreateElement"},36942:function(e,n,a){a.r(n),a.d(n,{frontMatter:function(){return d},contentTitle:function(){return m},metadata:function(){return o},toc:function(){return p},default:function(){return s}});var t=a(87462),l=a(63366),i=(a(67294),a(3905)),r=["components"],d={id:"cli",title:"The Glean CLI tool",sidebar_label:"The Glean CLI tool"},m=void 0,o={unversionedId:"cli",id:"cli",isDocsHomePage:!1,title:"The Glean CLI tool",description:"The Glean CLI tool (glean) can create and write data into databases,",source:"@site/docs/cli.md",sourceDirName:".",slug:"/cli",permalink:"/docs/cli",editUrl:"https://github.com/facebookincubator/Glean/tree/main/glean/website/docs/cli.md",version:"current",frontMatter:{id:"cli",title:"The Glean CLI tool",sidebar_label:"The Glean CLI tool"},sidebar:"someSidebar",previous:{title:"Running the Glean Server",permalink:"/docs/server"},next:{title:"Introduction",permalink:"/docs/indexer/intro"}},p=[{value:"<code>glean create</code>",id:"glean-create",children:[]},{value:"<code>glean write</code>",id:"glean-write",children:[]},{value:"<code>glean finish</code>",id:"glean-finish",children:[]},{value:"<code>glean dump</code>",id:"glean-dump",children:[]},{value:"<code>glean delete</code>",id:"glean-delete",children:[]},{value:"<code>glean derive</code>",id:"glean-derive",children:[]},{value:"<code>glean query</code>",id:"glean-query",children:[]},{value:"<code>glean restore</code>",id:"glean-restore",children:[]},{value:"<code>glean validate</code>",id:"glean-validate",children:[]},{value:"<code>glean validate-schema</code>",id:"glean-validate-schema",children:[]},{value:"<code>glean stats</code>",id:"glean-stats",children:[]},{value:"<code>glean unfinish</code>",id:"glean-unfinish",children:[]}],u={toc:p};function s(e){var n=e.components,a=(0,l.Z)(e,r);return(0,i.mdx)("wrapper",(0,t.Z)({},u,a,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,"The Glean CLI tool (",(0,i.mdx)("inlineCode",{parentName:"p"},"glean"),") can create and write data into databases,\nperform a variety of admin tasks on databases, and also do one-off\nqueries."),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"glean")," tool accepts all the ",(0,i.mdx)("a",{parentName:"p",href:"running#common-options"},"common\noptions")," to specify how to connect to access\nthe databases."),(0,i.mdx)("p",null,"The available commands are as follows:"),(0,i.mdx)("h3",{id:"glean-create"},(0,i.mdx)("inlineCode",{parentName:"h3"},"glean create")),(0,i.mdx)("p",null,"Create a new database."),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"--repo NAME/HASH")," or ",(0,i.mdx)("inlineCode",{parentName:"li"},"--repo-name NAME --repo-hash HASH"),(0,i.mdx)("br",null),"\nSpecifies the name and hash of the database"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"--finish"),(0,i.mdx)("br",null),"\nAlso mark the DB as complete"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"--stacked REPO"),(0,i.mdx)("br",null),"\nCreate a stacked database on top of ",(0,i.mdx)("inlineCode",{parentName:"li"},"REPO"),"."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"--property NAME=VALUE"),(0,i.mdx)("br",null),"\nSet properties when creating a DB"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"FILE.."),(0,i.mdx)("br",null),"\nFile(s) of facts to write into the database (JSON). See ",(0,i.mdx)("a",{parentName:"li",href:"write"},"Writing data\nto Glean"),".")),(0,i.mdx)("h3",{id:"glean-write"},(0,i.mdx)("inlineCode",{parentName:"h3"},"glean write")),(0,i.mdx)("p",null,"Write facts to a database."),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"--repo NAME/HASH")," or ",(0,i.mdx)("inlineCode",{parentName:"li"},"--repo-name NAME --repo-hash HASH"),(0,i.mdx)("br",null),"\nSpecifies the name and hash of the database"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"FILE.."),(0,i.mdx)("br",null),"\nFile(s) of facts to write into the database (JSON). See ",(0,i.mdx)("a",{parentName:"li",href:"write"},"Writing data\nto Glean"),"."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"--finish"),(0,i.mdx)("br",null),"\nAlso mark the DB as complete")),(0,i.mdx)("h3",{id:"glean-finish"},(0,i.mdx)("inlineCode",{parentName:"h3"},"glean finish")),(0,i.mdx)("p",null,"Notify server that a database is complete."),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"--repo NAME/HASH")," or ",(0,i.mdx)("inlineCode",{parentName:"li"},"--repo-name NAME --repo-hash HASH"),(0,i.mdx)("br",null),"\nSpecifies the name and hash of the database")),(0,i.mdx)("h3",{id:"glean-dump"},(0,i.mdx)("inlineCode",{parentName:"h3"},"glean dump")),(0,i.mdx)("p",null,"Dump the contents of the specified database into a file."),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"--repo NAME/HASH")," or ",(0,i.mdx)("inlineCode",{parentName:"li"},"--repo-name NAME --repo-hash HASH"),(0,i.mdx)("br",null),"\nSpecifies the name and hash of the database"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"FILE"),(0,i.mdx)("br",null),"\nFile to write the facts into")),(0,i.mdx)("h3",{id:"glean-delete"},(0,i.mdx)("inlineCode",{parentName:"h3"},"glean delete")),(0,i.mdx)("p",null,"Delete a database."),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"--repo NAME/HASH")," or ",(0,i.mdx)("inlineCode",{parentName:"li"},"--repo-name NAME --repo-hash HASH"),(0,i.mdx)("br",null),"\nSpecifies the name and hash of the database")),(0,i.mdx)("h3",{id:"glean-derive"},(0,i.mdx)("inlineCode",{parentName:"h3"},"glean derive")),(0,i.mdx)("p",null,"Derive and store a predicate. See ",(0,i.mdx)("a",{parentName:"p",href:"/docs/derived"},"Derived Predicates"),"."),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},(0,i.mdx)("inlineCode",{parentName:"p"},"--page-bytes BYTES"),(0,i.mdx)("br",null),"\nMaximum number of bytes per page")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},(0,i.mdx)("inlineCode",{parentName:"p"},"--page-facts FACTS"),(0,i.mdx)("br",null),"\nMaximum number of facts per page")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},(0,i.mdx)("inlineCode",{parentName:"p"},"PREDICATE"),(0,i.mdx)("br",null),"\nPredicates to derive"))),(0,i.mdx)("h3",{id:"glean-query"},(0,i.mdx)("inlineCode",{parentName:"h3"},"glean query")),(0,i.mdx)("p",null,"Execute an Angle query and print the results, or write them to a file."),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},(0,i.mdx)("inlineCode",{parentName:"p"},"--repo NAME/HASH")," or ",(0,i.mdx)("inlineCode",{parentName:"p"},"--repo-name NAME"),(0,i.mdx)("br",null),"\nSpecifies the database to query")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},(0,i.mdx)("inlineCode",{parentName:"p"},"--page-bytes BYTES"),(0,i.mdx)("br",null),"\nMaximum number of bytes per page")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},(0,i.mdx)("inlineCode",{parentName:"p"},"--page-facts FACTS"),(0,i.mdx)("br",null),"\nMaximum number of facts per page")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},(0,i.mdx)("inlineCode",{parentName:"p"},"--recursive"),(0,i.mdx)("br",null),"\nFetch nested facts (slower)")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},(0,i.mdx)("inlineCode",{parentName:"p"},"--limit FACTS"),(0,i.mdx)("br",null),"\nMaximum number of facts to query")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},(0,i.mdx)("inlineCode",{parentName:"p"},"-o,--output FILE"),(0,i.mdx)("br",null),"\nOutput the facts to a file")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},(0,i.mdx)("inlineCode",{parentName:"p"},"--stats FILE"),(0,i.mdx)("br",null),"\nOutput stats to a file ('-' for stdout)")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},(0,i.mdx)("inlineCode",{parentName:"p"},"--timeout MILLISECONDS"),"\nOverride the default query timeout")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},(0,i.mdx)("inlineCode",{parentName:"p"},"QUERY"),"\nquery to execute (",(0,i.mdx)("inlineCode",{parentName:"p"},"@file")," to read from file, ",(0,i.mdx)("inlineCode",{parentName:"p"},"-")," for stdin)")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},(0,i.mdx)("inlineCode",{parentName:"p"},"--omit-results"),"\nDon't print results; use with ",(0,i.mdx)("inlineCode",{parentName:"p"},"--stat")," to get a count of results"))),(0,i.mdx)("h3",{id:"glean-restore"},(0,i.mdx)("inlineCode",{parentName:"h3"},"glean restore")),(0,i.mdx)("p",null,"Restore a database from backup."),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"LOCATOR"),(0,i.mdx)("br",null),"\nDB location, see ",(0,i.mdx)("inlineCode",{parentName:"li"},":list-all")," in glean shell.")),(0,i.mdx)("p",null,"Alternatively the DB to restore can be specified by:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"--repo NAME/HASH")," or ",(0,i.mdx)("inlineCode",{parentName:"li"},"--repo-name NAME")," and (",(0,i.mdx)("inlineCode",{parentName:"li"},"--repo-hash HASH")," or ",(0,i.mdx)("inlineCode",{parentName:"li"},"--date YYY-MM-DD"),")")),(0,i.mdx)("h3",{id:"glean-validate"},(0,i.mdx)("inlineCode",{parentName:"h3"},"glean validate")),(0,i.mdx)("p",null,"Perform checks on the internal integrity of a database. This is for\ntesting and debugging Glean itself."),(0,i.mdx)("p",null," a local database"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},(0,i.mdx)("inlineCode",{parentName:"p"},"--repo NAME/HASH")," or ",(0,i.mdx)("inlineCode",{parentName:"p"},"--repo-name NAME --repo-hash HASH"),(0,i.mdx)("br",null),"\nSpecifies the name and hash of the database")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},(0,i.mdx)("inlineCode",{parentName:"p"},"--no-typecheck"),(0,i.mdx)("br",null),"\nDon't typecheck facts.")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},(0,i.mdx)("inlineCode",{parentName:"p"},"--no-keys"),(0,i.mdx)("br",null),"\nDon't verify key uniqueness")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},(0,i.mdx)("inlineCode",{parentName:"p"},"--limit N"),(0,i.mdx)("br",null),"\nOnly validate the first N facts"))),(0,i.mdx)("h3",{id:"glean-validate-schema"},(0,i.mdx)("inlineCode",{parentName:"h3"},"glean validate-schema")),(0,i.mdx)("p",null,"Validate a schema. Checks that a new schem does not modify any of the\npredicates in the existing schema, which could lead to problems."),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"FILE"),(0,i.mdx)("br",null),"\nName of schema file")),(0,i.mdx)("h3",{id:"glean-stats"},(0,i.mdx)("inlineCode",{parentName:"h3"},"glean stats")),(0,i.mdx)("p",null,"Get fact counts and sizes. Like the ",(0,i.mdx)("inlineCode",{parentName:"p"},":statistics")," command in the shell."),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"--repo NAME/HASH")," or ",(0,i.mdx)("inlineCode",{parentName:"li"},"--repo-name NAME --repo-hash HASH"),(0,i.mdx)("br",null),"\nSpecifies the name and hash of the database")),(0,i.mdx)("h3",{id:"glean-unfinish"},(0,i.mdx)("inlineCode",{parentName:"h3"},"glean unfinish")),(0,i.mdx)("p",null,"Unfinish a local database (turn it from complete to incomplete\nstate). This is for testing and development and not for routine use:\nonce a database is marked complete it could be replicated, so we\nshouldn't be modifying it."),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"--repo NAME/HASH")," or ",(0,i.mdx)("inlineCode",{parentName:"li"},"--repo-name NAME --repo-hash HASH"),(0,i.mdx)("br",null),"\nSpecifies the name and hash of the database")))}s.isMDXComponent=!0}}]);
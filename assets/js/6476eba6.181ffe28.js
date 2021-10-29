"use strict";(self.webpackChunktext_ssg_docs=self.webpackChunktext_ssg_docs||[]).push([[827],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,g=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return n?a.createElement(g,l(l({ref:t},u),{},{components:n})):a.createElement(g,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2175:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),l=["components"],o={sidebar_position:3},s="Usage",p={unversionedId:"usage",id:"usage",isDocsHomePage:!1,title:"Usage",description:"Features",source:"@site/docs/usage.md",sourceDirName:".",slug:"/usage",permalink:"/text-ssg-docs/docs/usage",editUrl:"https://github.com/Kevan-Y/text-ssg-docs/edit/main/docs/usage.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/text-ssg-docs/docs/installation"},next:{title:"Example",permalink:"/text-ssg-docs/docs/example"}},u=[{value:"Features",id:"features",children:[],level:2},{value:"Command samples",id:"command-samples",children:[],level:2},{value:"Commands Supported",id:"commands-supported",children:[],level:2}],c={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"usage"},"Usage"),(0,i.kt)("h2",{id:"features"},"Features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Supports stylesheets. By passing a url of stylesheet to ",(0,i.kt)("inlineCode",{parentName:"li"},"-s")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"--stylesheet"),", if not specified it will use a default stylesheet (See usage)."),(0,i.kt)("li",{parentName:"ul"},"Supports titles. If the first line is followed by two blank lines, it will populate the ",(0,i.kt)("inlineCode",{parentName:"li"},"<title>...</title>")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"<h1>...</h1>"),"."),(0,i.kt)("li",{parentName:"ul"},"Supports specific output. By passing an existing folder to ",(0,i.kt)("inlineCode",{parentName:"li"},"-o")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"--output"),", if not specified it will generate to ",(0,i.kt)("inlineCode",{parentName:"li"},"dist")," folder (See usage)."),(0,i.kt)("li",{parentName:"ul"},"Supports deep tree of files and folders. If the user specifies a folder for ",(0,i.kt)("inlineCode",{parentName:"li"},"--input")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"-i")),(0,i.kt)("li",{parentName:"ul"},"Generate a menu page ",(0,i.kt)("inlineCode",{parentName:"li"},"index.html")," which has relative links to each of the generated HTML files."),(0,i.kt)("li",{parentName:"ul"},"New paragraph is separated by a line."),(0,i.kt)("li",{parentName:"ul"},"Supports language code for HTML tag lang attribute. By passing a language code to ",(0,i.kt)("inlineCode",{parentName:"li"},"-l")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"--lang"),", if not specified it will use a default lang (See usage)."),(0,i.kt)("li",{parentName:"ul"},"Full markdown support with highlight"),(0,i.kt)("li",{parentName:"ul"},"Configuration support: User can specify multiple configuration in one json file and pass the file with ",(0,i.kt)("inlineCode",{parentName:"li"},"-c")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"--config"),".")),(0,i.kt)("h2",{id:"command-samples"},"Command samples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"ssg --input <path>\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"ssg --input <path> --output <path>\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"ssg --input <path> --output <path> --stylesheet <URL>\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"ssg --input <path> --output <path> --stylesheet <URL> --lang <languageCode>\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"ssg -i <path> -o <path> -s <URL> -l <languageCode>\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"ssg -c <path>\n")),(0,i.kt)("h2",{id:"commands-supported"},"Commands Supported"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-none"},'  _____                 _                 ____    ____     ____\n |_   _|   ___  __  __ | |_              / ___|  / ___|   / ___|\n   | |    / _ \\ \\ \\/ / | __|    _____    \\___ \\  \\___ \\  | |  _\n   | |   |  __/  >  <  | |_    |_____|    ___) |  ___) | | |_| |\n   |_|    \\___| /_/\\_\\  \\__|             |____/  |____/   \\____|\n\nOptions:\n    -v, --version     Show version number                                 [boolean]\n    -h, --help        Show help                                           [boolean]\n    -i, --input       Folder/File input location                          [string] [required]\n    -s, --stylesheet  URL to a CSS stylesheet                             [string]\n    -o, --output      Folder output location                              [string] [default: "./dist"]\n    -l, --lang        HTML lang tag                                       [string] [default: "en-CA"]\n    -c, --config      Folder/File configuration JSON file location        [string]\n')))}d.isMDXComponent=!0}}]);
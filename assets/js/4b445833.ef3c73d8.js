"use strict";(self.webpackChunktext_ssg_docs=self.webpackChunktext_ssg_docs||[]).push([[449],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||l;return n?a.createElement(h,r(r({ref:t},c),{},{components:n})):a.createElement(h,r({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var p=2;p<l;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4572:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},assets:function(){return c},toc:function(){return u},default:function(){return m}});var a=n(7462),i=n(3366),l=(n(7294),n(3905)),r=["components"],o={slug:"node-js-static-site-generator-release",title:"Node.js static site generator (Release 0.1.0)",authors:["kevanY"],tags:["opensource","beginners","javascript"]},s=void 0,p={permalink:"/text-ssg-docs/blog/node-js-static-site-generator-release",editUrl:"https://github.com/Kevan-Y/text-ssg-docs/edit/main/blog/2021-09-15-node-js-static-site-generator-release.md",source:"@site/blog/2021-09-15-node-js-static-site-generator-release.md",title:"Node.js static site generator (Release 0.1.0)",description:"For the first assignment in OSD600, we have to create a CLI static site generator using any language of ours choice. I went with node.js, because I need some projects in my GitHub in node.js.",date:"2021-09-15T00:00:00.000Z",formattedDate:"September 15, 2021",tags:[{label:"opensource",permalink:"/text-ssg-docs/blog/tags/opensource"},{label:"beginners",permalink:"/text-ssg-docs/blog/tags/beginners"},{label:"javascript",permalink:"/text-ssg-docs/blog/tags/javascript"}],readingTime:2.18,truncated:!1,authors:[{name:"Kevan Yang",title:"Full stack developer",url:"https://kevanyxg.vercel.app/",imageURL:"https://github.com/kevan-y.png",key:"kevanY"}],prevItem:{title:"Lab 1 reviewing other student code sources",permalink:"/text-ssg-docs/blog/lab-1-reviewing-other-student-code-sources"},nextItem:{title:"Console.log('Hello World!')",permalink:"/text-ssg-docs/blog/hello-world"}},c={authorsImageUrls:[void 0]},u=[{value:"Installation",id:"installation",children:[],level:2},{value:"Usage",id:"usage",children:[],level:2},{value:"Command option / feature",id:"command-option--feature",children:[],level:2},{value:"Example",id:"example",children:[{value:"Input file <code>test.txt</code>",id:"input-file-testtxt",children:[],level:3},{value:"Command run",id:"command-run",children:[],level:3},{value:"Output file",id:"output-file",children:[],level:3},{value:"<code>dist/test.html</code>",id:"disttesthtml",children:[],level:3},{value:"<code>dist/index.html</code>",id:"distindexhtml",children:[],level:3}],level:2},{value:"Project Links",id:"project-links",children:[],level:2}],d={toc:u};function m(e){var t=e.components,n=(0,i.Z)(e,r);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"For the first assignment in OSD600, we have to create a CLI static site generator using any language of ours choice. I went with node.js, because I need some projects in my GitHub in node.js.\nThroughout this lab, I learned how to uses some new packages such as yargs, chalk, figlet.\nThe concept seems to be simple to implement, but there is a lot of challenge to go through implementing all the core and optional features.\nOne of the challenges was to learn how to use async/await. It was a bit tricky but playing with the code and watching some tutorials helped me a lot.\nThe second most challenging was to write a function to get all the .txt files names recursively."),(0,l.kt)("h2",{id:"installation"},"Installation"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"clone the repo"),(0,l.kt)("li",{parentName:"ul"},"open the folder"),(0,l.kt)("li",{parentName:"ul"},"run ",(0,l.kt)("inlineCode",{parentName:"li"},"npm i")),(0,l.kt)("li",{parentName:"ul"},"run ",(0,l.kt)("inlineCode",{parentName:"li"},"npm install -g ."))),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"ssg --input <path>\n\nssg --input <path> --output <path>\n\nssg --input <path> --output <path> --stylesheet <URL>\n\nssg -i <path> -o <path> -s <URL>\n")),(0,l.kt)("h2",{id:"command-option--feature"},"Command option / feature"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-i")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"--input")," accept a .txt file or folder to read data from. If it is a folder it supports deep tree of files and folders. (Required)"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-o")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"--output")," accept an existing directory to output generated html to. If option not specified, it will create and output files to ",(0,l.kt)("inlineCode",{parentName:"p"},"dist")," folder. (Optional)"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-s")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"--stylesheet")," accept a CSS URL. If option not specified, it will uses default stylesheet. (Optional)."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-h")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"--help")," shows list of option, usage, and examples."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-v")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"--version")," shows the version of the CLI"),(0,l.kt)("p",null,"If the first line of the .txt is followed by two blank lines, it will populate the ",(0,l.kt)("inlineCode",{parentName:"p"},"<title>...</title>")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"<h1>...</h1>"),"."),(0,l.kt)("p",null,"Generate a menu page ",(0,l.kt)("inlineCode",{parentName:"p"},"index.html")," which has relative links to each of the generated HTML files."),(0,l.kt)("p",null,"New paragraph is separated by a line."),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)("h3",{id:"input-file-testtxt"},"Input file ",(0,l.kt)("inlineCode",{parentName:"h3"},"test.txt")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-txt"},"This is the title\n\n\nHello world,\n2021\n\nThis is a static site\n\nI love programing\n")),(0,l.kt)("h3",{id:"command-run"},"Command run"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"ssg -i test.txt -s 'https://cdn.jsdelivr.net/npm/water.css@2/out/water.css'\n")),(0,l.kt)("h3",{id:"output-file"},"Output file"),(0,l.kt)("h3",{id:"disttesthtml"},(0,l.kt)("inlineCode",{parentName:"h3"},"dist/test.html")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en">\n    <head>\n        <meta charset="UTF-8" />\n        <title>Home</title>\n        <meta http-equiv="X-UA-Compatible" content="IE=edge" />\n        <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n        <link\n            rel="stylesheet"\n            href="https://cdn.jsdelivr.net/npm/water.css@2/out/water.css"\n        />\n    </head>\n\n    <body>\n        <h1>Home menu</h1>\n        <h2>Summary</h2>\n        <ul>\n            <li><a href="test.html">test</a></li>\n        </ul>\n    </body>\n</html>\n')),(0,l.kt)("h3",{id:"distindexhtml"},(0,l.kt)("inlineCode",{parentName:"h3"},"dist/index.html")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en">\n    <head>\n        <meta charset="UTF-8" />\n        <title>This is the title</title>\n        <meta http-equiv="X-UA-Compatible" content="IE=edge" />\n        <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n        <link\n            rel="stylesheet"\n            href="https://cdn.jsdelivr.net/npm/water.css@2/out/water.css"\n        />\n    </head>\n\n    <body>\n        <h1>This is the title</h1>\n        <p>Hello world,2021</p>\n        <p>This is a static site</p>\n        <p>I love programing</p>\n    </body>\n</html>\n')),(0,l.kt)("h2",{id:"project-links"},"Project Links"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Sample of file generated"),": ",(0,l.kt)("a",{parentName:"p",href:"https://text-ssg.vercel.app/"},"https://text-ssg.vercel.app/"),"\n",(0,l.kt)("strong",{parentName:"p"},"GitHub Repo"),": ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/Kevan-Y/text-ssg"},"https://github.com/Kevan-Y/text-ssg")))}m.isMDXComponent=!0}}]);
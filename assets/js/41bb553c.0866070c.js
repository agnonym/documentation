(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{104:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return s}));var a=t(3),r=t(8),i=(t(0),t(218)),o={title:"Configs"},c={unversionedId:"optional-components/configs",id:"optional-components/configs",isDocsHomePage:!1,title:"Configs",description:"* Definition",source:"@site/docs/optional-components/configs.md",sourceDirName:"optional-components",slug:"/optional-components/configs",permalink:"/docs/next/optional-components/configs",editUrl:"https://github.com/apiato/documentation/tree/master/docs/optional-components/configs.md",version:"current",lastUpdatedBy:"Mohammad Alavi",lastUpdatedAt:1618494215,formattedLastUpdatedAt:"4/15/2021",frontMatter:{title:"Configs"},sidebar:"docs",previous:{title:"Middlewares",permalink:"/docs/next/optional-components/middlewares"},next:{title:"Commands",permalink:"/docs/next/optional-components/commands"}},l=[{value:"Definition",id:"definition",children:[]},{value:"Principles",id:"principles",children:[]},{value:"Rules",id:"rules",children:[]},{value:"Folder Structure",id:"folder-structure",children:[]},{value:"Code Samples",id:"code-samples",children:[]}],p={toc:l};function s(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#definition"},"Definition")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#principles"},"Principles")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#rules"},"Rules")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#folder-structure"},"Folder Structure")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#code-samples"},"Code Samples"))),Object(i.b)("h3",{id:"definition"},"Definition"),Object(i.b)("p",null,"Configs are files that container configurations. For more details about them check this ",Object(i.b)("a",{parentName:"p",href:"https://laravel.com/docs/master/configuration"},"doc"),"."),Object(i.b)("p",null,"In each Apiato container, there are two types of config files:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"the container specific config file (a config file that contains the container specific configurations)."),Object(i.b)("li",{parentName:"ul"},"the container third party packages config files (a config file that belongs to a third party package, required by the composer file of the container).")),Object(i.b)("h3",{id:"principles"},"Principles"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Your custom config files and third party packages config files, should be placed in the Container, unless it's too generic then it can be placed on the Ship Layer."),Object(i.b)("li",{parentName:"ul"},"Container can have as many config files as it needs.")),Object(i.b)("h3",{id:"rules"},"Rules"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"When publishing a third party package config file move it manually to its container or to the Ship Features Config folder in case it is generic."),Object(i.b)("li",{parentName:"ul"},"Framework config files (provided by laravel) lives at the default config directory on the root of the project."),Object(i.b)("li",{parentName:"ul"},"You SHOULD NOT add any config file to the ",Object(i.b)("inlineCode",{parentName:"li"},"config")," directory."),Object(i.b)("li",{parentName:"ul"},"The container specific config file, MUST have the same name of the container in lower letters and post-fixed with ",Object(i.b)("inlineCode",{parentName:"li"},"-container"),", to prevent conflicts between third party packages and container specific packages.")),Object(i.b)("h3",{id:"folder-structure"},"Folder Structure"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"- app\n    - Containers\n        - {container-name}\n            - Configs\n                - {container-name}-container.php\n                - package-config-file1.php\n                - ...\n    - Ship\n        - Configs\n            - apiato.php\n            - ...\n- config\n    - app.php\n    - ...\n")),Object(i.b)("h3",{id:"code-samples"},"Code Samples"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Example simple Config file")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-php//",metastring:"app/Containers/{ContainerName}/Configs/{container-name}-container.php","app/Containers/{ContainerName}/Configs/{container-name}-container.php":!0},"return [\n\n    /*\n    |--------------------------------------------------------------------------\n    | Default Namespace\n    |--------------------------------------------------------------------------\n    */\n    'namespace'       => 'App',\n\n    // some other config params here...\n")),Object(i.b)("p",null,"You can access the respective configuration key like this:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-php"},"$value = Config::get('{container-name}-container.namespace');     // returns 'App'\n$value = config('{container-name}-container.namespace');          // same, but using a function\n\n$defaultValue = Config::get('{container-name}-container.unknown.key', 'defaultvalue');   // returns 'defaultvalue' as this key is not set!\n")))}s.isMDXComponent=!0},218:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var a=t(0),r=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=r.a.createContext({}),s=function(e){var n=r.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=s(e.components);return r.a.createElement(p.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},b=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(t),b=a,m=u["".concat(o,".").concat(b)]||u[b]||f[b]||i;return t?r.a.createElement(m,c(c({ref:n},p),{},{components:t})):r.a.createElement(m,c({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=b;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var p=2;p<i;p++)o[p]=t[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);
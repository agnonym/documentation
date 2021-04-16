(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{129:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(8),o=(n(0),n(218)),i={title:"Languages"},l={unversionedId:"optional-components/languages",id:"optional-components/languages",isDocsHomePage:!1,title:"Languages",description:"- Definition",source:"@site/docs/optional-components/languages.md",sourceDirName:"optional-components",slug:"/optional-components/languages",permalink:"/docs/next/optional-components/languages",editUrl:"https://github.com/apiato/documentation/tree/master/docs/optional-components/languages.md",version:"current",lastUpdatedBy:"Mohammad Alavi",lastUpdatedAt:1618587161,formattedLastUpdatedAt:"4/16/2021",frontMatter:{title:"Languages"},sidebar:"docs",previous:{title:"Jobs",permalink:"/docs/next/optional-components/jobs"},next:{title:"Events",permalink:"/docs/next/optional-components/events"}},c=[{value:"Definition",id:"definition",children:[]},{value:"Rules",id:"rules",children:[]},{value:"Folder Structure",id:"folder-structure",children:[]},{value:"Usage",id:"usage",children:[]}],s={toc:c};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#definition"},"Definition")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#rules"},"Rules")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#folder-structure"},"Folder Structure")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#usage"},"Usage"))),Object(o.b)("h3",{id:"definition"},"Definition"),Object(o.b)("p",null,"Languages are not real Components, they are just files that holds translations."),Object(o.b)("h3",{id:"rules"},"Rules"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Languages CAN be placed inside the Containers. However, the default laravel ",Object(o.b)("inlineCode",{parentName:"p"},"resources/lang")," languages files are still loaded and can be used as well.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"All Translations are namespaced as the lower case of the Container name."))),Object(o.b)("h3",{id:"folder-structure"},"Folder Structure"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"}," - app\n    - Containers\n        - {container-name}\n            - Resources\n                - Languages\n                   - en\n                      - messages.php\n                      - users.php\n                   - ar\n                      - messages.php\n                      - users.php\n")),Object(o.b)("h3",{id:"usage"},"Usage"),Object(o.b)("p",null,"Nothing much to show here, here's how you use translated strings:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-php"},"__('messages.welcome');\n\necho __('messages.welcome');\n\ndd(__('messages.welcome'));\n")),Object(o.b)("p",null,"For more info about the localization checkout the ",Object(o.b)("a",{parentName:"p",href:"../additional-features/apiato-containers/localization"},"Localization")," page."))}u.isMDXComponent=!0},218:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,m=p["".concat(i,".").concat(d)]||p[d]||b[d]||o;return n?a.a.createElement(m,l(l({ref:t},s),{},{components:n})):a.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);
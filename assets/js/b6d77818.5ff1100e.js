(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{179:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return r})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return p}));var a=t(3),o=t(8),i=(t(0),t(218)),r={title:"Container Installer"},l={unversionedId:"additional-features/container-installer",id:"additional-features/container-installer",isDocsHomePage:!1,title:"Container Installer",description:"* Downloading and Installing Containers",source:"@site/docs/additional-features/container-installer.md",sourceDirName:"additional-features",slug:"/additional-features/container-installer",permalink:"/docs/next/additional-features/container-installer",editUrl:"https://github.com/apiato/documentation/tree/master/docs/additional-features/container-installer.md",version:"current",lastUpdatedBy:"Mohammad Alavi",lastUpdatedAt:1618586091,formattedLastUpdatedAt:"4/16/2021",frontMatter:{title:"Container Installer"},sidebar:"docs",previous:{title:"Overview",permalink:"/docs/next/additional-features/overview"},next:{title:"Documentation",permalink:"/docs/next/additional-features/apiato-containers/documentation"}},c=[{value:"Downloading and Installing Containers",id:"downloading-and-installing-containers",children:[]},{value:"Modifying Containers",id:"modifying-containers",children:[]},{value:"Developing a Container",id:"developing-a-container",children:[]}],s={toc:c};function p(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#downloading-and-installing-containers"},"Downloading and Installing Containers"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#developing-a-container"},"Developing a Container"))))),Object(i.b)("h3",{id:"downloading-and-installing-containers"},"Downloading and Installing Containers"),Object(i.b)("p",null,"Apiato provides an easy-to-use solution for downloading, installing and continuously updating containers from 3rd party developers."),Object(i.b)("p",null,"As an application developer, you simply need to include the respective ",Object(i.b)("inlineCode",{parentName:"p"},"vendor/project")," to the",Object(i.b)("inlineCode",{parentName:"p"},"composer.json"),"."),Object(i.b)("p",null,"For example, your ",Object(i.b)("inlineCode",{parentName:"p"},"/composer.json")," file may look something like this:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'{\n  "require": {\n    "apiato/settings-container": "^2.0.6"\n  }\n}\n')),Object(i.b)("p",null,"You just need to call ",Object(i.b)("inlineCode",{parentName:"p"},"composer update")," in order to install the respective packages. The package (e.g., the container)\n",Object(i.b)("inlineCode",{parentName:"p"},"apiato/settings-container")," is then installed to the ",Object(i.b)("inlineCode",{parentName:"p"},"app/Containers/VendorSection")," folder. However, the developer of the package\nneeds to follow some basic guidelines listed below."),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Warning")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},Object(i.b)("strong",{parentName:"p"},"Do not")," modify content within a downloaded container, as it will be overwritten if you call ",Object(i.b)("inlineCode",{parentName:"p"},"composer update"),"."))),Object(i.b)("h3",{id:"modifying-containers"},"Modifying Containers"),Object(i.b)("p",null,"To modify the code of this container usually you just need to copy the container to ",Object(i.b)("inlineCode",{parentName:"p"},"AppSection"),"\n(or any of your custom sections) and update the namespaces. (See each container documentation for more details)"),Object(i.b)("h3",{id:"developing-a-container"},"Developing a Container"),Object(i.b)("p",null,"Developing a container that can be used by others is quite easy. Basically, you can ",Object(i.b)("inlineCode",{parentName:"p"},"extract")," already existing functionality\nin a new container and provide the features. Note that you need to upload the container to ",Object(i.b)("inlineCode",{parentName:"p"},"GitHub")," and then release\nit on ",Object(i.b)("inlineCode",{parentName:"p"},"Packagist")," in order for it to be available via ",Object(i.b)("inlineCode",{parentName:"p"},"Composer"),". Please see a respective tutorial how to submit a package\nto ",Object(i.b)("inlineCode",{parentName:"p"},"GitHub")," and release it via ",Object(i.b)("inlineCode",{parentName:"p"},"Packagist"),"."),Object(i.b)("p",null,"In particular, the only thing that needs to be done, when developing a container is to provide a specific ",Object(i.b)("inlineCode",{parentName:"p"},"composer.json"),"\nfile within the main folder of the container."),Object(i.b)("p",null,"An example of such a ",Object(i.b)("inlineCode",{parentName:"p"},"composer.json")," file is shown below:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "vendor/project",\n  "description": "This is a short description for your container.",\n  "type": "apiato-container",   // you must set the type to "apiato-container" here.\n  "require": {\n    "somevendor/somepackage" : "dev-master"\n    // some other requirements here\n  },\n  "extra": {\n    "apiato": {\n      "container": {\n        "name": "Foo"   // The name of the container within the /app/Containers/VendorSection folder\n      }\n    }\n  }\n}\n')),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Important Information:")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"You ",Object(i.b)("strong",{parentName:"li"},"must")," add the respective ",Object(i.b)("inlineCode",{parentName:"li"},"type : apiato-container")," to the composer file. This way, the custom installer is used\nthat allows installing/updating containers."),Object(i.b)("li",{parentName:"ul"},"You ",Object(i.b)("strong",{parentName:"li"},"must")," provide the key ",Object(i.b)("inlineCode",{parentName:"li"},"extra.apiato.container.name"),". This key indicates the name of the folder (e.g., container)\nwhen installing the package to the ",Object(i.b)("inlineCode",{parentName:"li"},"/app/ContainersVendorSection")," folder. In the shown example, the container would be installed to\n",Object(i.b)("inlineCode",{parentName:"li"},"app/Containers/VendorSection/Foo"),".")))}p.isMDXComponent=!0},218:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return m}));var a=t(0),o=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),p=function(e){var n=o.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=p(e.components);return o.a.createElement(s.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},u=o.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(t),u=a,m=d["".concat(r,".").concat(u)]||d[u]||b[u]||i;return t?o.a.createElement(m,l(l({ref:n},s),{},{components:t})):o.a.createElement(m,l({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,r=new Array(i);r[0]=u;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var s=2;s<i;s++)r[s]=t[s];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);
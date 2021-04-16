(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{166:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(8),s=(n(0),n(218)),i={title:"System Settings"},o={unversionedId:"features/system-settings",id:"version-9.x/features/system-settings",isDocsHomePage:!1,title:"System Settings",description:"- Seed the default settings",source:"@site/versioned_docs/version-9.x/features/system-settings.md",sourceDirName:"features",slug:"/features/system-settings",permalink:"/docs/features/system-settings",editUrl:"https://github.com/apiato/documentation/tree/master/versioned_docs/version-9.x/features/system-settings.md",version:"9.x",lastUpdatedBy:"Moslem Deris",lastUpdatedAt:1618096631,formattedLastUpdatedAt:"4/10/2021",frontMatter:{title:"System Settings"},sidebar:"version-9.x/docs",previous:{title:"Payments",permalink:"/docs/features/payments"},next:{title:"API Versioning",permalink:"/docs/features/api-versioning"}},c=[{value:"Seed the default settings",id:"seed-the-default-settings",children:[]},{value:"Read settings",id:"read-settings",children:[]}],u={toc:c};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"#seed-the-default-settings"},"Seed the default settings")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"#read-settings"},"Read settings"))),Object(s.b)("p",null,"At many cases you need to have some dynamic system settings, such as in a referral program, where you give 'gifts' to anyone who refers new users but, those gifts can be changed in the future, so it's better not have them statically created in the code, instead read from the database where an  Admin can manage them at any time."),Object(s.b)("p",null,Object(s.b)("inlineCode",{parentName:"p"},"app/Containers/Settings")," Container helps to store and retrieve those key values settings. It also seeds the database with the default configurations during the installation."),Object(s.b)("h3",{id:"seed-the-default-settings"},"Seed the default settings"),Object(s.b)("p",null,"Default Settings should be seeded in ",Object(s.b)("inlineCode",{parentName:"p"},"app/Containers/Settings/Database/Seeders/DefaultSystemSettingsSeeder.php")),Object(s.b)("h3",{id:"read-settings"},"Read settings"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-php"},"<?php\n$value = $this->findSettingsByKeyTask->run('whateverSettingsName');\n")),Object(s.b)("p",null,"You can search for settings by Key as in the example above, or create a class for each settings as follows:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-php"},"<?php\n$value = $this->findWhateverSettingsTask->run();\n")))}l.isMDXComponent=!0},218:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(n),f=r,m=p["".concat(i,".").concat(f)]||p[f]||d[f]||s;return n?a.a.createElement(m,o(o({ref:t},u),{},{components:n})):a.a.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=f;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<s;u++)i[u]=n[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);
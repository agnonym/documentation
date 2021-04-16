(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{112:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(8),o=(r(0),r(218)),i={title:"User Registration"},s={unversionedId:"core-features/user-registration",id:"core-features/user-registration",isDocsHomePage:!1,title:"User Registration",description:"- Register users by credentials (email and passwords)",source:"@site/docs/core-features/user-registration.md",sourceDirName:"core-features",slug:"/core-features/user-registration",permalink:"/docs/next/core-features/user-registration",editUrl:"https://github.com/apiato/documentation/tree/master/docs/core-features/user-registration.md",version:"current",lastUpdatedBy:"Mohammad Alavi",lastUpdatedAt:1618587161,formattedLastUpdatedAt:"4/16/2021",frontMatter:{title:"User Registration"},sidebar:"docs",previous:{title:"Authorization",permalink:"/docs/next/core-features/authorization"},next:{title:"Query Parameters",permalink:"/docs/next/core-features/query-parameters"}},c=[{value:"Register users by credentials (email and passwords)",id:"register-users-by-credentials-email-and-passwords",children:[]},{value:"Register users by Social Account",id:"register-users-by-social-account",children:[]}],l={toc:c};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#register-users-by-credentials-email-and-passwords"},"Register users by credentials (email and passwords)")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#register-users-by-social-account"},"Register users by Social Account"))),Object(o.b)("h3",{id:"register-users-by-credentials-email-and-passwords"},"Register users by credentials (email and passwords)"),Object(o.b)("p",null,"Call the ",Object(o.b)("inlineCode",{parentName:"p"},"http://api.apiato.test/v1/register")," endpoint (you can find its documentation after generating the API Docs."),Object(o.b)("p",null,"Check out the ",Object(o.b)("inlineCode",{parentName:"p"},"registerUser")," endpoint in the API Routes files."),Object(o.b)("p",null,"This will register a new User and respond with user object."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Registration request:")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-http"},"curl --request POST \\\n  --url http://api.apiato.test/v1/register \\\n  --header 'accept: application/json' \\\n  --header 'content-type: application/x-www-form-urlencoded' \\\n  --data 'email=john%40doe.com&password=password&name=John%20Doe'\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Registration response:")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "object": "User",\n    "id": "XbPW7awNkzl83LD6",\n    "name": "John Doe",\n    "email": "john@doe.com",\n    "email_verified_at": null,\n    "gender": null,\n    "birth": null,\n    "created_at": "2021-04-15T14:17:24.000000Z",\n    "updated_at": "2021-04-15T14:17:24.000000Z",\n    "readable_created_at": "1 second ago",\n    "readable_updated_at": "1 second ago"\n  },\n  "meta": {\n    "include": [\n      "roles"\n    ],\n    "custom": []\n  }\n}\n')),Object(o.b)("p",null,"Note: After registration in order to get the user access token you will have to send another call to ",Object(o.b)("inlineCode",{parentName:"p"},"http://api.example.com/v1/oauth/token")," with following fields and values"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"username => your_username e.g. admin@admin.com\npassword => your_password\ngrant_type => password\nclient_id => your_client_id\nclient_secret => your_client_secret\n")),Object(o.b)("p",null,"For third-party clients you must have client ID and secret first. You can generate them by creating new client in your app using Laravel Passport."),Object(o.b)("p",null,"For first-party clients you can use a proxy to add those fields on requests coming from your trusted client. For an example on how to do it look at ",Object(o.b)("inlineCode",{parentName:"p"},"ProxyLoginForWebClientAction")," Action in Authentication Container."),Object(o.b)("h3",{id:"register-users-by-social-account"},"Register users by Social Account"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"(Facebook, Twitter, Google..)")),Object(o.b)("p",null,"Checkout the ",Object(o.b)("a",{parentName:"p",href:"../additional-features/apiato-containers/social-authentication"},"Social Authentication")," Page for how to Sign up with Social Account."))}u.isMDXComponent=!0},218:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(r),b=n,m=p["".concat(i,".").concat(b)]||p[b]||d[b]||o;return r?a.a.createElement(m,s(s({ref:t},l),{},{components:r})):a.a.createElement(m,s({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);
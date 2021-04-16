(window.webpackJsonp=window.webpackJsonp||[]).push([[143],{213:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(8),i=(n(0),n(218)),o={title:"Seeders"},s={unversionedId:"optional-components/seeders",id:"version-9.x/optional-components/seeders",isDocsHomePage:!1,title:"Seeders",description:"* Definition",source:"@site/versioned_docs/version-9.x/optional-components/seeders.md",sourceDirName:"optional-components",slug:"/optional-components/seeders",permalink:"/docs/optional-components/seeders",editUrl:"https://github.com/apiato/documentation/tree/master/versioned_docs/version-9.x/optional-components/seeders.md",version:"9.x",lastUpdatedBy:"Moslem Deris",lastUpdatedAt:1618096631,formattedLastUpdatedAt:"4/10/2021",frontMatter:{title:"Seeders"},sidebar:"version-9.x/docs",previous:{title:"Migrations",permalink:"/docs/optional-components/migrations"},next:{title:"Factories",permalink:"/docs/optional-components/factories"}},l=[{value:"Definition",id:"definition",children:[]},{value:"Principles",id:"principles",children:[]},{value:"Rules",id:"rules",children:[]},{value:"Folder Structure",id:"folder-structure",children:[]},{value:"Code Samples",id:"code-samples",children:[]},{value:"Run the Seeders",id:"run-the-seeders",children:[]},{value:"Apiato testing seeder command",id:"apiato-testing-seeder-command",children:[]}],c={toc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#definition"},"Definition")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#principles"},"Principles")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#rules"},"Rules")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#folder-structure"},"Folder Structure")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#code-samples"},"Code Samples")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#run-the-seeders"},"Run the Seeders")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#apiato-testing-seeder-command"},"Testing seeder command"))),Object(i.b)("h3",{id:"definition"},"Definition"),Object(i.b)("p",null,"Seeders (are a short name for Database Seeders)."),Object(i.b)("p",null,"Seeders are classes made to seed the database with real data, this data usually should exist in the Application after the installation (Example: the default Users Roles and Permissions or the list of Countries)."),Object(i.b)("h3",{id:"principles"},"Principles"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Seeders SHOULD be created in the Containers. (If the container is using a package that publishes a Seeder class, this class should be manually placed in the Container that make use of it. Do not reply on the package to place it on its right location).")),Object(i.b)("h3",{id:"rules"},"Rules"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Seeders should be in the right directory inside the container to be loaded.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"To avoid any conflict between containers seeders classes, you SHOULD always prepend the Seeders of each container with the container name. (Example: ",Object(i.b)("inlineCode",{parentName:"p"},"UserPermissionsSeeder"),", ",Object(i.b)("inlineCode",{parentName:"p"},"ItemPermissionsSeeder"),"). ",Object(i.b)("em",{parentName:"p"},"If 2 seeders classes have the same name but live in different containers, one of them will not be loaded."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"If you wish to order the seeding of the classes, you can just append ",Object(i.b)("inlineCode",{parentName:"p"},"_1"),", ",Object(i.b)("inlineCode",{parentName:"p"},"_2")," to your classes."))),Object(i.b)("h3",{id:"folder-structure"},"Folder Structure"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"}," - App\n    - Containers\n        - {container-name}\n             - Data\n                - Seeders\n                    - ContainerNameRolesSeeder_1.php\n                    - ContainerNamePermissionsSeeder_2.php\n                    - ...\n")),Object(i.b)("h3",{id:"code-samples"},"Code Samples"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Roles ",Object(i.b)("inlineCode",{parentName:"strong"},"Seeder"),":")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-php"},"<?php\n\nnamespace App\\Containers\\Order\\Data\\Seeders;\n\nuse App\\Ship\\Parents\\Seeders\\Seeder;\nuse Apiato\\Core\\Foundation\\Facades\\Apiato;\n\nclass OrderPermissionsSeeder_1 extends Seeder\n{\n\n    public function run()\n    {\n        Apiato::call('Authorization@CreatePermissionTask', ['approve-reject-orders']);\n        Apiato::call('Authorization@CreatePermissionTask', ['find-orders']);\n        Apiato::call('Authorization@CreatePermissionTask', ['list-orders']);\n        Apiato::call('Authorization@CreatePermissionTask', ['update-orders']);\n        Apiato::call('Authorization@CreatePermissionTask', ['delete-orders']);\n\n        // ...\n\n    }\n}\n\n")),Object(i.b)("p",null,"Note: Same ",Object(i.b)("inlineCode",{parentName:"p"},"Seeder")," class is allowed to contain seeding for multiple ",Object(i.b)("inlineCode",{parentName:"p"},"Models"),"."),Object(i.b)("h3",{id:"run-the-seeders"},"Run the Seeders"),Object(i.b)("p",null,"After registering the ",Object(i.b)("inlineCode",{parentName:"p"},"Seeders")," you can run this command:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},"php artisan db:seed\n")),Object(i.b)("p",null,"To run specific Seeder class you can specify its class in the parameter as follows:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},'php artisan db:seed --class="your\\single\\seeder\\goes-here"\n')),Object(i.b)("p",null,"Migrate & seed at the same time"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},"php artisan migrate --seed\n")),Object(i.b)("p",null,"For more information about the Database Seeders read ",Object(i.b)("a",{parentName:"p",href:"https://laravel.com/docs/master/seeding"},"this"),"."),Object(i.b)("h2",{id:"apiato-testing-seeder-command"},"Apiato testing seeder command"),Object(i.b)("p",null,"It's useful sometimes to create a big set of testing data. apiato facilitates this task:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Open ",Object(i.b)("inlineCode",{parentName:"li"},"app/Ship/Seeders/SeedTestingData.php")," and write your testing data here."),Object(i.b)("li",{parentName:"ol"},"Run this command any time you want this data available (example at staging servers):")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},"php artisan apiato:seed-test\n")))}p.isMDXComponent=!0},218:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),u=a,m=d["".concat(o,".").concat(u)]||d[u]||b[u]||i;return n?r.a.createElement(m,s(s({ref:t},c),{},{components:n})):r.a.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);
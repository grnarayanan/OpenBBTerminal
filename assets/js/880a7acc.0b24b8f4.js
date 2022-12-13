"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[41556],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return n?o.createElement(f,r(r({ref:t},u),{},{components:n})):o.createElement(f,r({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var p=2;p<i;p++)r[p]=n[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},61919:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var o=n(87462),a=(n(67294),n(3905));const i={title:"Installation",sidebar_position:2},r="Installation",l={unversionedId:"quickstart/installation",id:"quickstart/installation",title:"Installation",description:"We provide a simple installation method in order to utilize the OpenBB SDK. You must first create an environment, which allows you to isolate the SDK from the rest of your system. It is our recommendation that you utilize a conda environment because there are optional features, such as forecast, that utilize libraries that are specifically sourced from conda-forge. Due to this, if you do not use a conda environment, you will not be able to use some of these features. As such, the installation steps will be written under the assumption that you are using conda.",source:"@site/content/sdk/quickstart/installation.md",sourceDirName:"quickstart",slug:"/quickstart/installation",permalink:"/sdk/quickstart/installation",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/quickstart/installation.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Installation",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Requirements",permalink:"/sdk/quickstart/requirements"},next:{title:"FAQ",permalink:"/sdk/quickstart/faq"}},s={},p=[{value:"Steps",id:"steps",level:2},{value:"1. <strong>Install Miniconda</strong>",id:"1-install-miniconda",level:3},{value:"2. <strong>Create the virtual environment</strong>",id:"2-create-the-virtual-environment",level:3},{value:"3. <strong>Activate the virtual environment</strong>",id:"3-activate-the-virtual-environment",level:3},{value:"4. <strong>Install OpenBB SDK Core package</strong>",id:"4-install-openbb-sdk-core-package",level:3},{value:"5. <strong>(Optional) Install the Toolkits</strong>",id:"5-optional-install-the-toolkits",level:3},{value:"5.1 <strong>If you would like to use the Portfolio Optimization features</strong>",id:"51-if-you-would-like-to-use-the-portfolio-optimization-features",level:4},{value:"5.2 <strong>If you would like ML Forecasting features</strong>",id:"52-if-you-would-like-ml-forecasting-features",level:4},{value:"5.3 <strong>If you would like to use both Portfolio Optimization and ML forecast features</strong>",id:"53-if-you-would-like-to-use-both-portfolio-optimization-and-ml-forecast-features",level:4}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"installation"},"Installation"),(0,a.kt)("p",null,"We provide a simple installation method in order to utilize the OpenBB SDK. You must first create an environment, which allows you to isolate the SDK from the rest of your system. It is our recommendation that you utilize a ",(0,a.kt)("inlineCode",{parentName:"p"},"conda")," environment because there are optional features, such as ",(0,a.kt)("inlineCode",{parentName:"p"},"forecast"),", that utilize libraries that are specifically sourced from ",(0,a.kt)("inlineCode",{parentName:"p"},"conda-forge"),". Due to this, if you do not use a conda environment, you will not be able to use some of these features. As such, the installation steps will be written under the assumption that you are using conda."),(0,a.kt)("h2",{id:"steps"},"Steps"),(0,a.kt)("admonition",{title:"NOTE",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Make sure you meet all ",(0,a.kt)("a",{parentName:"p",href:"/sdk/quickstart/requirements"},"requirements")," before proceeding.")),(0,a.kt)("h3",{id:"1-install-miniconda"},"1. ",(0,a.kt)("strong",{parentName:"h3"},"Install ",(0,a.kt)("a",{parentName:"strong",href:"https://docs.conda.io/en/latest/miniconda.html"},"Miniconda"))),(0,a.kt)("p",null,"   Download the ",(0,a.kt)("inlineCode",{parentName:"p"},"x86_64")," Miniconda for your respective system and follow along\nwith it's installation instructions. The Miniconda architecture MUST be\n",(0,a.kt)("inlineCode",{parentName:"p"},"x86_64")," in order to use certain features."),(0,a.kt)("h3",{id:"2-create-the-virtual-environment"},"2. ",(0,a.kt)("strong",{parentName:"h3"},"Create the virtual environment")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"conda create -n obb python=3.9.6 -y\n")),(0,a.kt)("h3",{id:"3-activate-the-virtual-environment"},"3. ",(0,a.kt)("strong",{parentName:"h3"},"Activate the virtual environment")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"conda activate obb\n")),(0,a.kt)("h3",{id:"4-install-openbb-sdk-core-package"},"4. ",(0,a.kt)("strong",{parentName:"h3"},"Install OpenBB SDK Core package")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pip install openbb\n")),(0,a.kt)("h3",{id:"5-optional-install-the-toolkits"},"5. ",(0,a.kt)("strong",{parentName:"h3"},"(Optional) Install the Toolkits")),(0,a.kt)("h4",{id:"51-if-you-would-like-to-use-the-portfolio-optimization-features"},"5.1 ",(0,a.kt)("strong",{parentName:"h4"},"If you would like to use the Portfolio Optimization features")),(0,a.kt)("admonition",{title:"NOTE",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"If on Apple Silicon Macs (M1/M2) you will need to install dependency from conda-forge first"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"conda install -c conda-forge cvxpy=1.2.2 -y\n"))),(0,a.kt)("p",null,"Install the Portfolio Optimization Toolkit"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'pip install "openbb[optimization]"\n')),(0,a.kt)("h4",{id:"52-if-you-would-like-ml-forecasting-features"},"5.2 ",(0,a.kt)("strong",{parentName:"h4"},"If you would like ML Forecasting features")),(0,a.kt)("admonition",{title:"NOTE",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"If on Apple Silicon Macs (M1/M2) you will need to install the dependency from conda-forge first"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"conda install -c conda-forge lightgbm=3.3.3 -y\n"))),(0,a.kt)("p",null,"Install the Forecasting Toolkit"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'pip install "openbb[prediction]"\n')),(0,a.kt)("h4",{id:"53-if-you-would-like-to-use-both-portfolio-optimization-and-ml-forecast-features"},"5.3 ",(0,a.kt)("strong",{parentName:"h4"},"If you would like to use both Portfolio Optimization and ML forecast features")),(0,a.kt)("admonition",{title:"NOTE",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"If on Apple Silicon Macs (M1/M2) you will need to install the dependencies from conda-forge first"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"conda install -c conda-forge lightgbm=3.3.3 cvxpy=1.2.2 -y\n"))),(0,a.kt)("p",null,"Install all Toolkits"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'pip install "openbb[all]"\n')),(0,a.kt)("p",null,"Congratulations! You have successfully installed ",(0,a.kt)("inlineCode",{parentName:"p"},"openbb")," on an environment and are now able to begin using it. However, it is important to note that if you close out of your CLI you must re-activate your environment in order begin using it again. This can be done with the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"conda activate obb\n")),(0,a.kt)("p",null,"The OpenBB SDK can be imported to a Jupyter Notebook or any code editor with, ",(0,a.kt)("inlineCode",{parentName:"p"},"from openbb_terminal.sdk import openbb")," as explained in the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.openbb.co/sdk/guides/basics"},"How to use the SDK")," guides. By following the above process, the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.openbb.co/terminal"},"OpenBB Terminal")," is automatically included as well which can be ran by typing ",(0,a.kt)("inlineCode",{parentName:"p"},"openbb"),"."))}c.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1272],{3905:(t,e,a)=>{a.d(e,{Zo:()=>o,kt:()=>N});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var m=n.createContext({}),d=function(t){var e=n.useContext(m),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},o=function(t){var e=d(t.components);return n.createElement(m.Provider,{value:e},t.children)},g={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,m=t.parentName,o=p(t,["components","mdxType","originalType","parentName"]),k=d(a),N=r,s=k["".concat(m,".").concat(N)]||k[N]||g[N]||i;return a?n.createElement(s,l(l({ref:e},o),{},{components:a})):n.createElement(s,l({ref:e},o))}));function N(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,l=new Array(i);l[0]=k;var p={};for(var m in e)hasOwnProperty.call(e,m)&&(p[m]=e[m]);p.originalType=t,p.mdxType="string"==typeof t?t:r,l[1]=p;for(var d=2;d<i;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},19850:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>m,contentTitle:()=>l,default:()=>g,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const i={title:"Fundamental Analysis",keywords:["stocks","stock","options","option","call","put","earnings","calendar","how-to","guide","scripts","fundamental","analysis","technical","behavioural","analyst","equity","research","api","sdk","application","python","notebook","jupyter"],excerpt:"This guide introduces the FA menu in the context of the OpenBB SDK."},l=void 0,p={unversionedId:"guides/intros/stocks/fundamental-analysis",id:"guides/intros/stocks/fundamental-analysis",title:"Fundamental Analysis",description:"The FA module provides programmatic access to the commands from within the OpenBB Terminal. Import the OpenBB SDK module, and then access the functions similarly to how the Terminal menus are navigated. The code completion will be activated upon entering ., after, openbb.fa",source:"@site/content/sdk/guides/intros/stocks/fundamental-analysis.md",sourceDirName:"guides/intros/stocks",slug:"/guides/intros/stocks/fundamental-analysis",permalink:"/sdk/guides/intros/stocks/fundamental-analysis",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/guides/intros/stocks/fundamental-analysis.md",tags:[],version:"current",frontMatter:{title:"Fundamental Analysis",keywords:["stocks","stock","options","option","call","put","earnings","calendar","how-to","guide","scripts","fundamental","analysis","technical","behavioural","analyst","equity","research","api","sdk","application","python","notebook","jupyter"],excerpt:"This guide introduces the FA menu in the context of the OpenBB SDK."},sidebar:"tutorialSidebar",previous:{title:"Due Diligence",permalink:"/sdk/guides/intros/stocks/due-diligence"},next:{title:"Options",permalink:"/sdk/guides/intros/stocks/options"}},m={},d=[{value:"How to Use",id:"how-to-use",level:2},{value:"Examples",id:"examples",level:2},{value:"shrs",id:"shrs",level:3},{value:"enterprise",id:"enterprise",level:3},{value:"income",id:"income",level:3}],o={toc:d};function g(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},o,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The FA module provides programmatic access to the commands from within the OpenBB Terminal. Import the OpenBB SDK module, and then access the functions similarly to how the Terminal menus are navigated. The code completion will be activated upon entering ",(0,r.kt)("inlineCode",{parentName:"p"},"."),", after, ",(0,r.kt)("inlineCode",{parentName:"p"},"openbb.fa"),"\n\u200b"),(0,r.kt)("h2",{id:"how-to-use"},"How to Use"),(0,r.kt)("p",null,"\u200b\nThe examples provided below will assume that the following import block is included at the beginning of the Python script or Notebook file:\n\u200b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from openbb_terminal.sdk import openbb\n")),(0,r.kt)("p",null,"\u200b\nA brief description below highlights the main Functions and Modules available in the FA SDK"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Path"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"right"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"openbb.stocks.fa.mgmt"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Function"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Company Management Team")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"openbb.stocks.fa.score"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Function"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Investing Score from Warren Buffet")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"openbb.stocks.fa.sust"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Function"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Sustianability Values")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"openbb.stocks.fa.divs"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Function"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Historical Dividends for a Company")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"openbb.stocks.fa.shrs"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Function"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Shareholders (Insiders, Institutions, Funds)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"openbb.stocks.fa.earnings"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Function"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Earnings Data and EPS")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"openbb.stocks.fa.info"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Function"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Information About a Company")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"openbb.stocks.fa.dcf"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Function"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Shows DCF Values for a Ticker")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"openbb.stocks.fa.overview"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Function"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Overview of the Company")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"openbb.stocks.fa.data"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Function"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Fundamental and Technical Data")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"openbb.stocks.fa.ratios"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Function"),(0,r.kt)("td",{parentName:"tr",align:"right"},"In-Depth Ratios over Time")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"openbb.stocks.fa.growth"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Function"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Growth of Financial Statement Items")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"openbb.stocks.fa.enterprise"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Function"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Company Enterprise Value")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"openbb.stocks.fa.analysis"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Function"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Analysis SEC Fillings with Machine Learning")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"openbb.stocks.fa.balance"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Function"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Company Balance Sheet")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"openbb.stocks.fa.dupont"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Function"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Detailed ROE Breakdown")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"openbb.stocks.fa.profile"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Function"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Company Profile")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"openbb.stocks.fa.fraud"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Function"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Key Fraud Ratios")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"openbb.stocks.fa.income"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Function"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Company Income Statement")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"openbb.stocks.fa.key"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Function"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Company Key Metrics")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"openbb.stocks.fa.splits"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Function"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Stock Splits and Reverse Splits Since IPO")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"openbb.stocks.fa.hq"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Function"),(0,r.kt)("td",{parentName:"tr",align:"right"},"HQ Location for Company")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"openbb.stocks.fa.cal"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Function"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Calendar Earnings and Estimates")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"openbb.stocks.fa.mktcap"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Function"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Estimated Market Cap")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"openbb.stocks.fa.metrics"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Function"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Key Metrics Over Time")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"openbb.stocks.fa.cash"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Function"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Company Cash Flows")))),(0,r.kt)("p",null,"Alteratively you can print the contents of the FA SDK with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"help(openbb.stocks.fa)\n")),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("h3",{id:"shrs"},"shrs"),(0,r.kt)("p",null,"The shrs command give a breakdown of the top shareholders for a given ticker"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'openbb.stocks.fa.shrs("TSLA")\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"right"}),(0,r.kt)("th",{parentName:"tr",align:"left"},"Holder"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Shares"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Date Reported"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Stake"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Vanguard Group, Inc. (The)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"213.025 M"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-09-29 00:00:00"),(0,r.kt)("td",{parentName:"tr",align:"left"},"6.75 %"),(0,r.kt)("td",{parentName:"tr",align:"left"},"36.195 B")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Blackrock Inc."),(0,r.kt)("td",{parentName:"tr",align:"left"},"171.861 M"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-09-29 00:00:00"),(0,r.kt)("td",{parentName:"tr",align:"left"},"5.44 %"),(0,r.kt)("td",{parentName:"tr",align:"left"},"29.201 B")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"2"),(0,r.kt)("td",{parentName:"tr",align:"left"},"State Street Corporation"),(0,r.kt)("td",{parentName:"tr",align:"left"},"99.647 M"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-09-29 00:00:00"),(0,r.kt)("td",{parentName:"tr",align:"left"},"3.16 %"),(0,r.kt)("td",{parentName:"tr",align:"left"},"16.931 B")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"3"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Capital World Investors"),(0,r.kt)("td",{parentName:"tr",align:"left"},"90.162 M"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-09-29 00:00:00"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2.86 %"),(0,r.kt)("td",{parentName:"tr",align:"left"},"15.319 B")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"4"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Geode Capital Management, LLC"),(0,r.kt)("td",{parentName:"tr",align:"left"},"47.496 M"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-09-29 00:00:00"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1.50 %"),(0,r.kt)("td",{parentName:"tr",align:"left"},"8.070 B")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"5"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Price (T.Rowe) Associates Inc"),(0,r.kt)("td",{parentName:"tr",align:"left"},"46.957 M"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-09-29 00:00:00"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1.49 %"),(0,r.kt)("td",{parentName:"tr",align:"left"},"7.978 B")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"6"),(0,r.kt)("td",{parentName:"tr",align:"left"},"FMR, LLC"),(0,r.kt)("td",{parentName:"tr",align:"left"},"38.429 M"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-09-29 00:00:00"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1.22 %"),(0,r.kt)("td",{parentName:"tr",align:"left"},"6.529 B")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"7"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Jennison Associates LLC"),(0,r.kt)("td",{parentName:"tr",align:"left"},"29.558 M"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-09-29 00:00:00"),(0,r.kt)("td",{parentName:"tr",align:"left"},"0.94 %"),(0,r.kt)("td",{parentName:"tr",align:"left"},"5.022 B")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"8"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Baillie Gifford and Company"),(0,r.kt)("td",{parentName:"tr",align:"left"},"27.877 M"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-09-29 00:00:00"),(0,r.kt)("td",{parentName:"tr",align:"left"},"0.88 %"),(0,r.kt)("td",{parentName:"tr",align:"left"},"4.737 B")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"9"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Northern Trust Corporation"),(0,r.kt)("td",{parentName:"tr",align:"left"},"26.602 M"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-09-29 00:00:00"),(0,r.kt)("td",{parentName:"tr",align:"left"},"0.84 %"),(0,r.kt)("td",{parentName:"tr",align:"left"},"4.520 B")))),(0,r.kt)("h3",{id:"enterprise"},"enterprise"),(0,r.kt)("p",null,"Creates a table showing enterprise value over time for a ticker"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'openbb.stocks.fa.enterprise("TSLA")\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"}),(0,r.kt)("th",{parentName:"tr",align:"left"},"2021"),(0,r.kt)("th",{parentName:"tr",align:"left"},"2020"),(0,r.kt)("th",{parentName:"tr",align:"left"},"2019"),(0,r.kt)("th",{parentName:"tr",align:"left"},"2018"),(0,r.kt)("th",{parentName:"tr",align:"left"},"2017"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Symbol"),(0,r.kt)("td",{parentName:"tr",align:"left"},"TSLA"),(0,r.kt)("td",{parentName:"tr",align:"left"},"TSLA"),(0,r.kt)("td",{parentName:"tr",align:"left"},"TSLA"),(0,r.kt)("td",{parentName:"tr",align:"left"},"TSLA"),(0,r.kt)("td",{parentName:"tr",align:"left"},"TSLA")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Stock price"),(0,r.kt)("td",{parentName:"tr",align:"left"},"282.117"),(0,r.kt)("td",{parentName:"tr",align:"left"},"264.510"),(0,r.kt)("td",{parentName:"tr",align:"left"},"42.721"),(0,r.kt)("td",{parentName:"tr",align:"left"},"20.585"),(0,r.kt)("td",{parentName:"tr",align:"left"},"23.055")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Number of shares"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2.958 B"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2.880 B"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2.655 B"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2.558 B"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2.486 B")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Market capitalization"),(0,r.kt)("td",{parentName:"tr",align:"left"},"834.501 B"),(0,r.kt)("td",{parentName:"tr",align:"left"},"761.789 B"),(0,r.kt)("td",{parentName:"tr",align:"left"},"113.423 B"),(0,r.kt)("td",{parentName:"tr",align:"left"},"52.653 B"),(0,r.kt)("td",{parentName:"tr",align:"left"},"57.322 B")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Minus cash and cash equivalents"),(0,r.kt)("td",{parentName:"tr",align:"left"},"17.576 B"),(0,r.kt)("td",{parentName:"tr",align:"left"},"19.384 B"),(0,r.kt)("td",{parentName:"tr",align:"left"},"6.268 B"),(0,r.kt)("td",{parentName:"tr",align:"left"},"3.686 B"),(0,r.kt)("td",{parentName:"tr",align:"left"},"3.368 B")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Add total debt"),(0,r.kt)("td",{parentName:"tr",align:"left"},"6.834 B"),(0,r.kt)("td",{parentName:"tr",align:"left"},"11.688 B"),(0,r.kt)("td",{parentName:"tr",align:"left"},"13.704 B"),(0,r.kt)("td",{parentName:"tr",align:"left"},"12.115 B"),(0,r.kt)("td",{parentName:"tr",align:"left"},"10.382 B")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Enterprise value"),(0,r.kt)("td",{parentName:"tr",align:"left"},"823.759 B"),(0,r.kt)("td",{parentName:"tr",align:"left"},"754.093 B"),(0,r.kt)("td",{parentName:"tr",align:"left"},"120.859 B"),(0,r.kt)("td",{parentName:"tr",align:"left"},"61.082 B"),(0,r.kt)("td",{parentName:"tr",align:"left"},"64.337 B")))),(0,r.kt)("p",null,"\u200b"),(0,r.kt)("h3",{id:"income"},"income"),(0,r.kt)("p",null,"Income statements over time for a ticker"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'openbb.stocks.fa.income(["tsla", "aapl"])\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Breakdown"),(0,r.kt)("th",{parentName:"tr",align:"right"},"ttm"),(0,r.kt)("th",{parentName:"tr",align:"right"},"2021-12-31"),(0,r.kt)("th",{parentName:"tr",align:"right"},"2020-12-31"),(0,r.kt)("th",{parentName:"tr",align:"right"},"2019-12-31"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Total revenue"),(0,r.kt)("td",{parentName:"tr",align:"right"},"2.5508e+09"),(0,r.kt)("td",{parentName:"tr",align:"right"},"1.60937e+09"),(0,r.kt)("td",{parentName:"tr",align:"right"},"8.31576e+08"),(0,r.kt)("td",{parentName:"tr",align:"right"},"3.61384e+08")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Cost of revenue"),(0,r.kt)("td",{parentName:"tr",align:"right"},"2.16586e+09"),(0,r.kt)("td",{parentName:"tr",align:"right"},"1.4104e+09"),(0,r.kt)("td",{parentName:"tr",align:"right"},"6.66345e+08"),(0,r.kt)("td",{parentName:"tr",align:"right"},"2.84672e+08")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Gross profit"),(0,r.kt)("td",{parentName:"tr",align:"right"},"3.84936e+08"),(0,r.kt)("td",{parentName:"tr",align:"right"},"1.98969e+08"),(0,r.kt)("td",{parentName:"tr",align:"right"},"1.65231e+08"),(0,r.kt)("td",{parentName:"tr",align:"right"},"7.6712e+07")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Selling general and administrative"),(0,r.kt)("td",{parentName:"tr",align:"right"},"4.07964e+08"),(0,r.kt)("td",{parentName:"tr",align:"right"},"2.52133e+08"),(0,r.kt)("td",{parentName:"tr",align:"right"},"1.03962e+08"),(0,r.kt)("td",{parentName:"tr",align:"right"},"5.9148e+07")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Total operating expenses"),(0,r.kt)("td",{parentName:"tr",align:"right"},"4.90874e+08"),(0,r.kt)("td",{parentName:"tr",align:"right"},"3.01574e+08"),(0,r.kt)("td",{parentName:"tr",align:"right"},"1.22461e+08"),(0,r.kt)("td",{parentName:"tr",align:"right"},"6.597e+07")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Operating income or loss"),(0,r.kt)("td",{parentName:"tr",align:"right"},"-1.05938e+08"),(0,r.kt)("td",{parentName:"tr",align:"right"},"-1.02605e+08"),(0,r.kt)("td",{parentName:"tr",align:"right"},"4.277e+07"),(0,r.kt)("td",{parentName:"tr",align:"right"},"1.0742e+07")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Interest expense"),(0,r.kt)("td",{parentName:"tr",align:"right"},"5.7796e+07"),(0,r.kt)("td",{parentName:"tr",align:"right"},"5.1291e+07"),(0,r.kt)("td",{parentName:"tr",align:"right"},"3.4002e+07"),(0,r.kt)("td",{parentName:"tr",align:"right"},"1.0163e+07")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Total other income/expenses net"),(0,r.kt)("td",{parentName:"tr",align:"right"},"3.8987e+07"),(0,r.kt)("td",{parentName:"tr",align:"right"},"3.7169e+07"),(0,r.kt)("td",{parentName:"tr",align:"right"},"-7.9501e+07"),(0,r.kt)("td",{parentName:"tr",align:"right"},"-2.0678e+07")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Income before tax"),(0,r.kt)("td",{parentName:"tr",align:"right"},"-1.2474e+08"),(0,r.kt)("td",{parentName:"tr",align:"right"},"-1.16723e+08"),(0,r.kt)("td",{parentName:"tr",align:"right"},"-7.0413e+07"),(0,r.kt)("td",{parentName:"tr",align:"right"},"-1.978e+07")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Income tax expense"),(0,r.kt)("td",{parentName:"tr",align:"right"},"1.417e+06"),(0,r.kt)("td",{parentName:"tr",align:"right"},"14000"),(0,r.kt)("td",{parentName:"tr",align:"right"},"651000"),(0,r.kt)("td",{parentName:"tr",align:"right"},"0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Income from continuing operations"),(0,r.kt)("td",{parentName:"tr",align:"right"},"-1.26157e+08"),(0,r.kt)("td",{parentName:"tr",align:"right"},"-1.16737e+08"),(0,r.kt)("td",{parentName:"tr",align:"right"},"-7.1064e+07"),(0,r.kt)("td",{parentName:"tr",align:"right"},"-1.978e+07")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Net income"),(0,r.kt)("td",{parentName:"tr",align:"right"},"-5.824e+07"),(0,r.kt)("td",{parentName:"tr",align:"right"},"-1.802e+07"),(0,r.kt)("td",{parentName:"tr",align:"right"},"-7.1064e+07"),(0,r.kt)("td",{parentName:"tr",align:"right"},"-1.978e+07")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Net income available to common shareholders"),(0,r.kt)("td",{parentName:"tr",align:"right"},"-5.824e+07"),(0,r.kt)("td",{parentName:"tr",align:"right"},"-1.802e+07"),(0,r.kt)("td",{parentName:"tr",align:"right"},"-7.1064e+07"),(0,r.kt)("td",{parentName:"tr",align:"right"},"-1.978e+07")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Basic EPS"),(0,r.kt)("td",{parentName:"tr",align:"right"},"nan"),(0,r.kt)("td",{parentName:"tr",align:"right"},"-0.11"),(0,r.kt)("td",{parentName:"tr",align:"right"},"-0.43"),(0,r.kt)("td",{parentName:"tr",align:"right"},"-0.12")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Diluted EPS"),(0,r.kt)("td",{parentName:"tr",align:"right"},"nan"),(0,r.kt)("td",{parentName:"tr",align:"right"},"-0.28"),(0,r.kt)("td",{parentName:"tr",align:"right"},"-0.43"),(0,r.kt)("td",{parentName:"tr",align:"right"},"-0.12")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Basic average shares"),(0,r.kt)("td",{parentName:"tr",align:"right"},"nan"),(0,r.kt)("td",{parentName:"tr",align:"right"},"1.70507e+08"),(0,r.kt)("td",{parentName:"tr",align:"right"},"1.66243e+08"),(0,r.kt)("td",{parentName:"tr",align:"right"},"1.66243e+08")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Diluted average shares"),(0,r.kt)("td",{parentName:"tr",align:"right"},"nan"),(0,r.kt)("td",{parentName:"tr",align:"right"},"4.75697e+08"),(0,r.kt)("td",{parentName:"tr",align:"right"},"1.66243e+08"),(0,r.kt)("td",{parentName:"tr",align:"right"},"1.66243e+08")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"EBITDA"),(0,r.kt)("td",{parentName:"tr",align:"right"},"nan"),(0,r.kt)("td",{parentName:"tr",align:"right"},"-1.5991e+07"),(0,r.kt)("td",{parentName:"tr",align:"right"},"-1.7912e+07"),(0,r.kt)("td",{parentName:"tr",align:"right"},"-2.795e+06")))))}g.isMDXComponent=!0}}]);
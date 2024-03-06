(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{1080:function(r,e,o){Promise.resolve().then(o.bind(o,1808)),Promise.resolve().then(o.bind(o,7097))},2738:function(r,e,o){"use strict";o.r(e),o.d(e,{default:function(){return p}});var t=o(3827),n=o(4090),i=o(129),l=o(8792);let a={primary:{primary:{color:"#fff",bgColor:"var(--clr-primary)",borderColor:"var(--clr-primary)"},secondary:{color:"var(--clr-primary)",bgColor:"transparent",borderColor:"var(--clr-primary)"},ghost:{color:"var(--clr-primary)",bgColor:"transparent",borderColor:"transparent"}},white:{primary:{color:"var(--clr-primary)",bgColor:"#fff",borderColor:"var(--clr-primary)"},secondary:{color:"#fff",bgColor:"transparent",borderColor:"#fff"},ghost:{color:"#fff",bgColor:"transparent",borderColor:"transparent"}},danger:{primary:{color:"#fff",bgColor:"var(--clr-error)",borderColor:"var(--clr-error)"},secondary:{color:"var(--clr-error)",bgColor:"transparent",borderColor:"var(--clr-error)"},ghost:{color:"var(--clr-error)",bgColor:"transparent",borderColor:"transparent"}}},c="primary",d="primary";var s=o(9712),f=o(5643);let u=s.ZP.button.withConfig({componentId:"sc-93c57314-0"})(["--color:",";--border-color:",";--bg-color:",";padding:0.5rem;text-decoration:none;border-radius:2px;border:2px solid var(--border-color);color:var(--color);background-color:var(--bg-color);min-height:",";display:inline-flex;justify-content:center;align-items:center;gap:12px;min-width:fit-content;cursor:pointer;transition:width,filter,240ms ease-in-out;&:disabled{filter:grayscale(0.5);cursor:not-allowed;}","{padding:0.75rem;font-size:18px;}"],r=>{let{$variant:e=c,$colorVariant:o=d}=r;return a[o][e].color},r=>{let{$variant:e=c,$colorVariant:o=d}=r;return a[o][e].borderColor},r=>{let{$variant:e=c,$colorVariant:o=d}=r;return a[o][e].bgColor},r=>{let{$variant:e}=r;return"ghost"===e?"unset":"var(--input-height)"},f.wj.largeMobile),b=n.forwardRef((r,e)=>{let{link:o,variant:a=c,disabled:d,onFocus:s,onClick:f,useReactAria:b=!0,colorVariant:p="primary",debug:m,...g}=r,h=(0,n.useRef)(null),{buttonProps:v}=(0,i.U)({isDisabled:d,onPress:f,variant:a,type:"button",...g},h),{children:w}=g,C=(0,n.useCallback)(r=>{e&&(e instanceof Function?e(r):e.current=r),h.current=r},[e]),y=(0,n.useCallback)(r=>{C(r)},[C]);return m&&console.info("INFO",{variant:a,colorVariant:p}),(0,t.jsx)(u,{$variant:a,$colorVariant:p,...g,...b?v:{},ref:y,...o?{href:o,as:l.default}:{},children:w})});b.displayName="Button";var p=b},7468:function(r,e,o){"use strict";o.d(e,{Z:function(){return t.default}});var t=o(2738)},1808:function(r,e,o){"use strict";o.r(e),o.d(e,{StyledContainer:function(){return t}});let t=o(9712).ZP.div.withConfig({componentId:"sc-547be9d3-0"})(["max-width:1080px;margin:0 auto;"])},7097:function(r,e,o){"use strict";o.r(e),o.d(e,{StyledCard:function(){return d},StyledCardButton:function(){return f},StyledCardContainer:function(){return c},StyledCardHeading:function(){return s},StyledSection:function(){return l},Styledheading:function(){return a}});var t=o(9712),n=o(7468),i=o(5643);let l=t.ZP.section.withConfig({componentId:"sc-61b5d202-0"})(["padding-bottom:6rem;min-height:70vh;","{padding-inline:1rem;}"],i.kH.tablet),a=t.ZP.h1.withConfig({componentId:"sc-61b5d202-1"})(["font-size:48px;font-weight:700;","{font-size:84px;}b{color:#439037;}"],i.wj.tablet),c=t.ZP.div.withConfig({componentId:"sc-61b5d202-2"})(["display:flex;flex-wrap:wrap;gap:2rem;"]),d=t.ZP.div.withConfig({componentId:"sc-61b5d202-3"})(["flex-grow:1;display:flex;align-items:flex-start;flex-direction:column;gap:2rem;background:#f7f7f7;padding:2rem;&:first-child{background:#f1f9f0;}"]),s=t.ZP.div.withConfig({componentId:"sc-61b5d202-4"})(["font-size:18px;font-weight:700;","{font-size:24px;}"],i.wj.tablet),f=(0,t.ZP)(n.Z).withConfig({componentId:"sc-61b5d202-5"})(["padding:0.75rem 1rem;font-size:18px;font-weight:500;"])},5643:function(r,e,o){"use strict";o.d(e,{$8:function(){return b},wj:function(){return s},kH:function(){return d},VG:function(){return p},Fs:function(){return u}});var t,n,i=o(3827),l=o(4090);(t=n||(n={}))[t.fullhd=1408]="fullhd",t[t.widescreen=1200]="widescreen",t[t.desktop=1023]="desktop",t[t.smallMonitor=992]="smallMonitor",t[t.tablet=768]="tablet",t[t.largeMobile=460]="largeMobile",t[t.mobile=380]="mobile",t[t.smallMobile=324]="smallMobile";let a=r=>"@media (max-width: ".concat(r,"px)"),c=r=>"@media (min-width: ".concat(r,"px)"),d={custom:a,fullhd:a(1408),widescreen:a(1200),desktop:a(1023),smallMonitor:a(992),tablet:a(768),largeMobile:a(460),mobile:a(380),smallMobile:a(324)},s={custom:c,fullhd:c(1408),widescreen:c(1200),desktop:c(1023),smallMonitor:c(992),tablet:c(768),largeMobile:c(460),mobile:c(380),smallMobile:c(324)},f=(0,l.createContext)({}),u=()=>(0,l.useContext)(f),b=r=>{let{children:e}=r,[o,t]=(0,l.useState)(640),[n,a]=(0,l.useState)(480),c=(0,l.useCallback)(()=>{let r=window.innerWidth;a(r);let e=window.innerHeight;t(e),document.body.style.setProperty("--vh","".concat(e/100,"px")),document.body.style.setProperty("--vw","".concat(r/100,"px"))},[]),d=(0,l.useCallback)((r,e)=>{document.body.style.setProperty(r,e)},[]);return(0,l.useEffect)(()=>{c()},[c]),(0,l.useEffect)(()=>(window.addEventListener("resize",c),()=>{window.removeEventListener("resize",c)}),[c]),(0,i.jsx)(f.Provider,{value:{screenWidth:n,isScreenSmallerThanTablet:n<768,screenHeight:o,setAppCssVar:d},children:e})},p=function(){let r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"48px";return" \n    --size: ".concat(r,";\n    width: var(--size);\n    height: var(--size);\n    min-width: var(--size);\n    min-height: var(--size);\n  ")}}},function(r){r.O(0,[449,971,69,744],function(){return r(r.s=1080)}),_N_E=r.O()}]);
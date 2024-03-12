(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{1080:function(r,e,t){Promise.resolve().then(t.bind(t,1808)),Promise.resolve().then(t.bind(t,7097))},2738:function(r,e,t){"use strict";t.r(e),t.d(e,{default:function(){return m}});var o=t(3827),n=t(4090),i=t(129),l=t(8792);let a={primary:{primary:{color:"#fff",bgColor:"var(--clr-primary)",borderColor:"var(--clr-primary)"},secondary:{color:"var(--clr-primary)",bgColor:"transparent",borderColor:"var(--clr-primary)"},ghost:{color:"var(--clr-primary)",bgColor:"transparent",borderColor:"transparent"}},white:{primary:{color:"var(--clr-primary)",bgColor:"#fff",borderColor:"var(--clr-primary)"},secondary:{color:"#fff",bgColor:"transparent",borderColor:"#fff"},ghost:{color:"#fff",bgColor:"transparent",borderColor:"transparent"}},danger:{primary:{color:"#fff",bgColor:"var(--clr-error)",borderColor:"var(--clr-error)"},secondary:{color:"var(--clr-error)",bgColor:"transparent",borderColor:"var(--clr-error)"},ghost:{color:"var(--clr-error)",bgColor:"transparent",borderColor:"transparent"}}},c="primary",d="primary";var s=t(9712),f=t(5643);let u=s.ZP.button.withConfig({componentId:"sc-1b947e03-0"})(["--color:",";--border-color:",";--bg-color:",";padding:0.5rem;text-decoration:none;border-radius:2px;border:2px solid var(--border-color);color:var(--color);background-color:var(--bg-color);min-height:",";display:inline-flex;justify-content:center;align-items:center;gap:12px;min-width:fit-content;cursor:pointer;font-size:18px;line-height:24px;font-weight:500;transition:width,filter,240ms ease-in-out;&:disabled{filter:grayscale(0.5);cursor:not-allowed;}","{padding:0.5rem 0.75rem;}"],r=>{let{$variant:e=c,$colorVariant:t=d}=r;return a[t][e].color},r=>{let{$variant:e=c,$colorVariant:t=d}=r;return a[t][e].borderColor},r=>{let{$variant:e=c,$colorVariant:t=d}=r;return a[t][e].bgColor},r=>{let{$variant:e}=r;return"ghost"===e?"unset":"var(--input-height)"},f.wj.largeMobile),p=n.forwardRef((r,e)=>{let{link:t,variant:a=c,disabled:d,onFocus:s,onClick:f,useReactAria:p=!0,colorVariant:m="primary",debug:b,...g}=r,h=(0,n.useRef)(null),{buttonProps:w}=(0,i.U)({isDisabled:d,onPress:f,variant:a,type:"button",...g},h),{children:C}=g,v=(0,n.useCallback)(r=>{e&&(e instanceof Function?e(r):e.current=r),h.current=r},[e]),y=(0,n.useCallback)(r=>{v(r)},[v]);return b&&console.info("INFO",{variant:a,colorVariant:m}),(0,o.jsx)(u,{$variant:a,$colorVariant:m,...g,...p?w:{},ref:y,...t?{href:t,as:l.default}:{},children:C})});p.displayName="Button";var m=p},7468:function(r,e,t){"use strict";t.d(e,{Z:function(){return o.default}});var o=t(2738)},1808:function(r,e,t){"use strict";t.r(e),t.d(e,{StyledContainer:function(){return o}});let o=t(9712).ZP.div.withConfig({componentId:"sc-547be9d3-0"})(["max-width:1080px;margin:0 auto;"])},2009:function(r,e,t){"use strict";t.d(e,{C:function(){return i}});var o=t(9712),n=t(5643);let i=o.ZP.h1.withConfig({componentId:"sc-e8f28be9-0"})(["font-size:48px;font-weight:700;line-height:60px;margin:0;","{font-size:84px;line-height:88px;}b{color:#439037;font-weight:inherit;}"],n.wj.tablet)},7097:function(r,e,t){"use strict";t.r(e),t.d(e,{StyledCard:function(){return s},StyledCardButton:function(){return u},StyledCardContainer:function(){return d},StyledCardHeading:function(){return f},StyledPageHeading:function(){return c},StyledSection:function(){return a}});var o=t(9712),n=t(7468),i=t(2009),l=t(5643);let a=o.ZP.section.withConfig({componentId:"sc-14f29fe6-0"})(["padding-bottom:6rem;min-height:70vh;","{padding-inline:1rem;}"],l.kH.tablet),c=(0,o.ZP)(i.C).withConfig({componentId:"sc-14f29fe6-1"})(["margin-block:1.5rem 3rem;","{margin-block:7rem 4.5rem;}"],l.wj.tablet),d=o.ZP.div.withConfig({componentId:"sc-14f29fe6-2"})(["display:flex;flex-wrap:wrap;gap:2rem;"]),s=o.ZP.div.withConfig({componentId:"sc-14f29fe6-3"})(["flex-grow:1;display:flex;align-items:flex-start;flex-direction:column;gap:2rem;padding:2rem;background:#f7f7f7;&:first-child{background:#f1f9f0;}","{gap:3rem;padding:3rem;}"],l.wj.tablet),f=o.ZP.div.withConfig({componentId:"sc-14f29fe6-4"})(["font-size:18px;font-weight:700;line-height:24px;","{font-size:24px;line-height:32px;}"],l.wj.tablet),u=(0,o.ZP)(n.Z).withConfig({componentId:"sc-14f29fe6-5"})(["padding:0.75rem 1rem;font-size:18px;font-weight:500;"])},5643:function(r,e,t){"use strict";t.d(e,{$8:function(){return p},wj:function(){return s},kH:function(){return d},VG:function(){return m},Fs:function(){return u}});var o,n,i=t(3827),l=t(4090);(o=n||(n={}))[o.fullhd=1408]="fullhd",o[o.widescreen=1200]="widescreen",o[o.desktop=1023]="desktop",o[o.smallMonitor=992]="smallMonitor",o[o.tablet=768]="tablet",o[o.largeMobile=460]="largeMobile",o[o.mobile=380]="mobile",o[o.smallMobile=324]="smallMobile";let a=r=>"@media (max-width: ".concat(r,"px)"),c=r=>"@media (min-width: ".concat(r,"px)"),d={custom:a,fullhd:a(1408),widescreen:a(1200),desktop:a(1023),smallMonitor:a(992),tablet:a(768),largeMobile:a(460),mobile:a(380),smallMobile:a(324)},s={custom:c,fullhd:c(1408),widescreen:c(1200),desktop:c(1023),smallMonitor:c(992),tablet:c(768),largeMobile:c(460),mobile:c(380),smallMobile:c(324)},f=(0,l.createContext)({}),u=()=>(0,l.useContext)(f),p=r=>{let{children:e}=r,[t,o]=(0,l.useState)(640),[n,a]=(0,l.useState)(480),c=(0,l.useCallback)(()=>{let r=window.innerWidth;a(r);let e=window.innerHeight;o(e),document.body.style.setProperty("--vh","".concat(e/100,"px")),document.body.style.setProperty("--vw","".concat(r/100,"px"))},[]),d=(0,l.useCallback)((r,e)=>{document.body.style.setProperty(r,e)},[]);return(0,l.useEffect)(()=>{c()},[c]),(0,l.useEffect)(()=>(window.addEventListener("resize",c),()=>{window.removeEventListener("resize",c)}),[c]),(0,i.jsx)(f.Provider,{value:{screenWidth:n,isScreenSmallerThanTablet:n<768,screenHeight:t,setAppCssVar:d},children:e})},m=function(){let r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"48px";return" \n    --size: ".concat(r,";\n    width: var(--size);\n    height: var(--size);\n    min-width: var(--size);\n    min-height: var(--size);\n  ")}}},function(r){r.O(0,[449,971,69,744],function(){return r(r.s=1080)}),_N_E=r.O()}]);
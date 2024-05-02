import{r as i,R as j,j as b,g as M}from"./index-BvcDZUxZ.js";import{g as P,a as k,s as A,c as y,u as L,d as B,_ as I,e as D,f as U,C as K}from"./styled-iQKmyyUj.js";const q=typeof window<"u"?i.useLayoutEffect:i.useEffect,T=q;function O(...e){return e.reduce((t,n)=>n==null?t:function(...r){t.apply(this,r),n.apply(this,r)},()=>{})}function G(e,t=166){let n;function o(...r){const u=()=>{e.apply(this,r)};clearTimeout(n),n=setTimeout(u,t)}return o.clear=()=>{clearTimeout(n)},o}function W(e,t){return()=>null}function X(e,t){var n,o;return i.isValidElement(e)&&t.indexOf((n=e.type.muiName)!=null?n:(o=e.type)==null||(o=o._payload)==null||(o=o.value)==null?void 0:o.muiName)!==-1}function z(e){return e&&e.ownerDocument||document}function H(e){return z(e).defaultView||window}function J(e,t){return()=>null}function V(e,t){typeof e=="function"?e(t):e&&(e.current=t)}let x=0;function Q(e){const[t,n]=i.useState(e),o=e||t;return i.useEffect(()=>{t==null&&(x+=1,n(`mui-${x}`))},[t]),o}const R=j.useId;function Y(e){if(R!==void 0){const t=R();return e??t}return Q(e)}function Z(e,t,n,o,r){return null}function ee({controlled:e,default:t,name:n,state:o="value"}){const{current:r}=i.useRef(e!==void 0),[u,f]=i.useState(t),l=r?e:u,p=i.useCallback(a=>{r||f(a)},[]);return[l,p]}function te(e){const t=i.useRef(e);return T(()=>{t.current=e}),i.useRef((...n)=>(0,t.current)(...n)).current}function ne(...e){return i.useMemo(()=>e.every(t=>t==null)?null:t=>{e.forEach(n=>{V(n,t)})},e)}class w{constructor(){this.currentId=null,this.clear=()=>{this.currentId!==null&&(clearTimeout(this.currentId),this.currentId=null)},this.disposeEffect=()=>this.clear}static create(){return new w}start(t,n){this.clear(),this.currentId=setTimeout(()=>{this.currentId=null,n()},t)}}let v=!0,_=!1;const re=new w,oe={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function ie(e){const{type:t,tagName:n}=e;return!!(n==="INPUT"&&oe[t]&&!e.readOnly||n==="TEXTAREA"&&!e.readOnly||e.isContentEditable)}function ue(e){e.metaKey||e.altKey||e.ctrlKey||(v=!0)}function g(){v=!1}function le(){this.visibilityState==="hidden"&&_&&(v=!0)}function se(e){e.addEventListener("keydown",ue,!0),e.addEventListener("mousedown",g,!0),e.addEventListener("pointerdown",g,!0),e.addEventListener("touchstart",g,!0),e.addEventListener("visibilitychange",le,!0)}function ae(e){const{target:t}=e;try{return t.matches(":focus-visible")}catch{}return v||ie(t)}function ce(){const e=i.useCallback(r=>{r!=null&&se(r.ownerDocument)},[]),t=i.useRef(!1);function n(){return t.current?(_=!0,re.start(100,()=>{_=!1}),t.current=!1,!0):!1}function o(r){return ae(r)?(t.current=!0,!0):!1}return{isFocusVisibleRef:t,onFocus:o,onBlur:n,ref:e}}var S={};function de(e){return P("MuiSvgIcon",e)}k("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);const fe=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],pe=e=>{const{color:t,fontSize:n,classes:o}=e,r={root:["root",t!=="inherit"&&`color${y(t)}`,`fontSize${y(n)}`]};return U(r,de,o)},me=A("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.color!=="inherit"&&t[`color${y(n.color)}`],t[`fontSize${y(n.fontSize)}`]]}})(({theme:e,ownerState:t})=>{var n,o,r,u,f,l,p,a,h,c,d,m,s;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:t.hasSvgAsChild?void 0:"currentColor",flexShrink:0,transition:(n=e.transitions)==null||(o=n.create)==null?void 0:o.call(n,"fill",{duration:(r=e.transitions)==null||(r=r.duration)==null?void 0:r.shorter}),fontSize:{inherit:"inherit",small:((u=e.typography)==null||(f=u.pxToRem)==null?void 0:f.call(u,20))||"1.25rem",medium:((l=e.typography)==null||(p=l.pxToRem)==null?void 0:p.call(l,24))||"1.5rem",large:((a=e.typography)==null||(h=a.pxToRem)==null?void 0:h.call(a,35))||"2.1875rem"}[t.fontSize],color:(c=(d=(e.vars||e).palette)==null||(d=d[t.color])==null?void 0:d.main)!=null?c:{action:(m=(e.vars||e).palette)==null||(m=m.action)==null?void 0:m.active,disabled:(s=(e.vars||e).palette)==null||(s=s.action)==null?void 0:s.disabled,inherit:void 0}[t.color]}}),E=i.forwardRef(function(t,n){const o=L({props:t,name:"MuiSvgIcon"}),{children:r,className:u,color:f="inherit",component:l="svg",fontSize:p="medium",htmlColor:a,inheritViewBox:h=!1,titleAccess:c,viewBox:d="0 0 24 24"}=o,m=B(o,fe),s=i.isValidElement(r)&&r.type==="svg",$=I({},o,{color:f,component:l,fontSize:p,instanceFontSize:t.fontSize,inheritViewBox:h,viewBox:d,hasSvgAsChild:s}),C={};h||(C.viewBox=d);const F=pe($);return b.jsxs(me,I({as:l,className:D(F.root,u),focusable:"false",color:a,"aria-hidden":c?void 0:!0,role:c?"img":void 0,ref:n},C,m,s&&r.props,{ownerState:$,children:[s?r.props.children:r,c?b.jsx("title",{children:c}):null]}))});E.muiName="SvgIcon";function he(e,t){function n(o,r){return b.jsx(E,I({"data-testid":`${t}Icon`,ref:r},o,{children:e}))}return n.muiName=E.muiName,i.memo(i.forwardRef(n))}const ye={configure:e=>{K.configure(e)}},ve=Object.freeze(Object.defineProperty({__proto__:null,capitalize:y,createChainedFunction:O,createSvgIcon:he,debounce:G,deprecatedPropType:W,isMuiElement:X,ownerDocument:z,ownerWindow:H,requirePropFactory:J,setRef:V,unstable_ClassNameGenerator:ye,unstable_useEnhancedEffect:T,unstable_useId:Y,unsupportedProp:Z,useControlled:ee,useEventCallback:te,useForkRef:ne,useIsFocusVisible:ce},Symbol.toStringTag,{value:"Module"})),ge=M(ve);var N;function Ie(){return N||(N=1,function(e){"use client";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.createSvgIcon}});var t=ge}(S)),S}export{Ie as r};
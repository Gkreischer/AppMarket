"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8592],{7160:(M,p,u)=>{u.d(p,{c:()=>l});var v=u(2361),g=u(7683),d=u(3139);const l=(c,n)=>{let t,e;const o=(a,h,m)=>{if("undefined"==typeof document)return;const f=document.elementFromPoint(a,h);f&&n(f)?f!==t&&(r(),s(f,m)):r()},s=(a,h)=>{t=a,e||(e=t);const m=t;(0,v.c)(()=>m.classList.add("ion-activated")),h()},r=(a=!1)=>{if(!t)return;const h=t;(0,v.c)(()=>h.classList.remove("ion-activated")),a&&e!==t&&t.click(),t=void 0};return(0,d.createGesture)({el:c,gestureName:"buttonActiveDrag",threshold:0,onStart:a=>o(a.currentX,a.currentY,g.a),onMove:a=>o(a.currentX,a.currentY,g.b),onEnd:()=>{r(!0),(0,g.h)(),e=void 0}})}},8685:(M,p,u)=>{u.d(p,{g:()=>v});const v=(n,t,e,o,s)=>d(n[1],t[1],e[1],o[1],s).map(r=>g(n[0],t[0],e[0],o[0],r)),g=(n,t,e,o,s)=>s*(3*t*Math.pow(s-1,2)+s*(-3*e*s+3*e+o*s))-n*Math.pow(s-1,3),d=(n,t,e,o,s)=>c((o-=s)-3*(e-=s)+3*(t-=s)-(n-=s),3*e-6*t+3*n,3*t-3*n,n).filter(a=>a>=0&&a<=1),c=(n,t,e,o)=>{if(0===n)return((n,t,e)=>{const o=t*t-4*n*e;return o<0?[]:[(-t+Math.sqrt(o))/(2*n),(-t-Math.sqrt(o))/(2*n)]})(t,e,o);const s=(3*(e/=n)-(t/=n)*t)/3,r=(2*t*t*t-9*t*e+27*(o/=n))/27;if(0===s)return[Math.pow(-r,1/3)];if(0===r)return[Math.sqrt(-s),-Math.sqrt(-s)];const a=Math.pow(r/2,2)+Math.pow(s/3,3);if(0===a)return[Math.pow(r/2,.5)-t/3];if(a>0)return[Math.pow(-r/2+Math.sqrt(a),1/3)-Math.pow(r/2+Math.sqrt(a),1/3)-t/3];const h=Math.sqrt(Math.pow(-s/3,3)),m=Math.acos(-r/(2*Math.sqrt(Math.pow(-s/3,3)))),f=2*Math.pow(h,1/3);return[f*Math.cos(m/3)-t/3,f*Math.cos((m+2*Math.PI)/3)-t/3,f*Math.cos((m+4*Math.PI)/3)-t/3]}},5062:(M,p,u)=>{u.d(p,{i:()=>v});const v=g=>g&&""!==g.dir?"rtl"===g.dir.toLowerCase():"rtl"===(null==document?void 0:document.dir.toLowerCase())},1112:(M,p,u)=>{u.r(p),u.d(p,{startFocusVisible:()=>l});const v="ion-focused",d=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],l=c=>{let n=[],t=!0;const e=c?c.shadowRoot:document,o=c||document.body,s=_=>{n.forEach(E=>E.classList.remove(v)),_.forEach(E=>E.classList.add(v)),n=_},r=()=>{t=!1,s([])},a=_=>{t=d.includes(_.key),t||s([])},h=_=>{if(t&&_.composedPath){const E=_.composedPath().filter(w=>!!w.classList&&w.classList.contains("ion-focusable"));s(E)}},m=()=>{e.activeElement===o&&s([])};return e.addEventListener("keydown",a),e.addEventListener("focusin",h),e.addEventListener("focusout",m),e.addEventListener("touchstart",r),e.addEventListener("mousedown",r),{destroy:()=>{e.removeEventListener("keydown",a),e.removeEventListener("focusin",h),e.removeEventListener("focusout",m),e.removeEventListener("touchstart",r),e.removeEventListener("mousedown",r)},setFocus:s}}},4118:(M,p,u)=>{u.d(p,{C:()=>c,a:()=>d,d:()=>l});var v=u(5861),g=u(1643);const d=function(){var n=(0,v.Z)(function*(t,e,o,s,r,a){var h;if(t)return t.attachViewToDom(e,o,r,s);if(!(a||"string"==typeof o||o instanceof HTMLElement))throw new Error("framework delegate is missing");const m="string"==typeof o?null===(h=e.ownerDocument)||void 0===h?void 0:h.createElement(o):o;return s&&s.forEach(f=>m.classList.add(f)),r&&Object.assign(m,r),e.appendChild(m),yield new Promise(f=>(0,g.c)(m,f)),m});return function(e,o,s,r,a,h){return n.apply(this,arguments)}}(),l=(n,t)=>{if(t){if(n)return n.removeViewFromDom(t.parentElement,t);t.remove()}return Promise.resolve()},c=()=>{let n,t;return{attachViewToDom:function(){var s=(0,v.Z)(function*(r,a,h={},m=[]){var f,_;if(n=r,a){const w="string"==typeof a?null===(f=n.ownerDocument)||void 0===f?void 0:f.createElement(a):a;m.forEach(i=>w.classList.add(i)),Object.assign(w,h),n.appendChild(w),yield new Promise(i=>(0,g.c)(w,i))}else if(n.children.length>0){const w=null===(_=n.ownerDocument)||void 0===_?void 0:_.createElement("div");m.forEach(i=>w.classList.add(i)),w.append(...n.children),n.appendChild(w)}const E=document.querySelector("ion-app")||document.body;return t=document.createComment("ionic teleport"),n.parentNode.insertBefore(t,n),E.appendChild(n),n});return function(a,h){return s.apply(this,arguments)}}(),removeViewFromDom:()=>(n&&t&&(t.parentNode.insertBefore(n,t),t.remove()),Promise.resolve())}}},7683:(M,p,u)=>{u.d(p,{a:()=>d,b:()=>l,c:()=>g,d:()=>n,h:()=>c});const v={getEngine(){var t;const e=window;return e.TapticEngine||(null===(t=e.Capacitor)||void 0===t?void 0:t.isPluginAvailable("Haptics"))&&e.Capacitor.Plugins.Haptics},available(){return!!this.getEngine()},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(t){const e=this.getEngine();if(!e)return;const o=this.isCapacitor()?t.style.toUpperCase():t.style;e.impact({style:o})},notification(t){const e=this.getEngine();if(!e)return;const o=this.isCapacitor()?t.style.toUpperCase():t.style;e.notification({style:o})},selection(){this.impact({style:"light"})},selectionStart(){const t=this.getEngine();!t||(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged(){const t=this.getEngine();!t||(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd(){const t=this.getEngine();!t||(this.isCapacitor()?t.selectionEnd():t.gestureSelectionEnd())}},g=()=>{v.selection()},d=()=>{v.selectionStart()},l=()=>{v.selectionChanged()},c=()=>{v.selectionEnd()},n=t=>{v.impact(t)}},8439:(M,p,u)=>{u.d(p,{s:()=>v});const v=e=>{try{if(e instanceof class t{constructor(o){this.value=o}})return e.value;if(!l()||"string"!=typeof e||""===e)return e;const o=document.createDocumentFragment(),s=document.createElement("div");o.appendChild(s),s.innerHTML=e,n.forEach(m=>{const f=o.querySelectorAll(m);for(let _=f.length-1;_>=0;_--){const E=f[_];E.parentNode?E.parentNode.removeChild(E):o.removeChild(E);const w=d(E);for(let i=0;i<w.length;i++)g(w[i])}});const r=d(o);for(let m=0;m<r.length;m++)g(r[m]);const a=document.createElement("div");a.appendChild(o);const h=a.querySelector("div");return null!==h?h.innerHTML:a.innerHTML}catch(o){return console.error(o),""}},g=e=>{if(e.nodeType&&1!==e.nodeType)return;for(let s=e.attributes.length-1;s>=0;s--){const r=e.attributes.item(s),a=r.name;if(!c.includes(a.toLowerCase())){e.removeAttribute(a);continue}const h=r.value;null!=h&&h.toLowerCase().includes("javascript:")&&e.removeAttribute(a)}const o=d(e);for(let s=0;s<o.length;s++)g(o[s])},d=e=>null!=e.children?e.children:e.childNodes,l=()=>{var e;const o=window,s=null===(e=null==o?void 0:o.Ionic)||void 0===e?void 0:e.config;return!s||(s.get?s.get("sanitizerEnabled",!0):!0===s.sanitizerEnabled||void 0===s.sanitizerEnabled)},c=["class","id","href","src","name","slot"],n=["script","style","iframe","meta","link","object","embed"]},8117:(M,p,u)=>{u.d(p,{a:()=>v,b:()=>r,c:()=>n,d:()=>a,e:()=>i,f:()=>d,g:()=>g,h:()=>E,i:()=>t,j:()=>o,k:()=>h,l:()=>e,m:()=>c,n:()=>l,o:()=>s,p:()=>m,q:()=>f,r:()=>_,s:()=>w});const v="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Arrow Back</title><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",g="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Arrow Down</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",d="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Back</title><path d='M368 64L144 256l224 192V64z'/></svg>",l="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Down</title><path d='M64 144l192 224 192-224H64z'/></svg>",c="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Up</title><path d='M448 368L256 144 64 368h384z'/></svg>",n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Back</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Down</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Forward</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Forward</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",s="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Close</title><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",r="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Close Circle</title><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",a="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Close</title><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",h="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Ellipsis Horizontal</title><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",m="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Menu</title><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",f="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Menu</title><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",_="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Reorder Three</title><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",E="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Reorder Two</title><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",w="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Search</title><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",i="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Search</title><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},1316:(M,p,u)=>{u.r(p),u.d(p,{KEYBOARD_DID_CLOSE:()=>g,KEYBOARD_DID_OPEN:()=>v,copyVisualViewport:()=>w,keyboardDidClose:()=>m,keyboardDidOpen:()=>a,keyboardDidResize:()=>h,resetKeyboardAssist:()=>t,setKeyboardClose:()=>r,setKeyboardOpen:()=>s,startKeyboardAssist:()=>e,trackViewportChanges:()=>E});const v="ionKeyboardDidShow",g="ionKeyboardDidHide";let l={},c={},n=!1;const t=()=>{l={},c={},n=!1},e=i=>{o(i),i.visualViewport&&(c=w(i.visualViewport),i.visualViewport.onresize=()=>{E(i),a()||h(i)?s(i):m(i)&&r(i)})},o=i=>{i.addEventListener("keyboardDidShow",y=>s(i,y)),i.addEventListener("keyboardDidHide",()=>r(i))},s=(i,y)=>{f(i,y),n=!0},r=i=>{_(i),n=!1},a=()=>!n&&l.width===c.width&&(l.height-c.height)*c.scale>150,h=i=>n&&!m(i),m=i=>n&&c.height===i.innerHeight,f=(i,y)=>{const C=new CustomEvent(v,{detail:{keyboardHeight:y?y.keyboardHeight:i.innerHeight-c.height}});i.dispatchEvent(C)},_=i=>{const y=new CustomEvent(g);i.dispatchEvent(y)},E=i=>{l=Object.assign({},c),c=w(i.visualViewport)},w=i=>({width:Math.round(i.width),height:Math.round(i.height),offsetTop:i.offsetTop,offsetLeft:i.offsetLeft,pageTop:i.pageTop,pageLeft:i.pageLeft,scale:i.scale})},7741:(M,p,u)=>{u.d(p,{S:()=>g});const g={bubbles:{dur:1e3,circles:9,fn:(d,l,c)=>{const n=d*l/c-d+"ms",t=2*Math.PI*l/c;return{r:5,style:{top:9*Math.sin(t)+"px",left:9*Math.cos(t)+"px","animation-delay":n}}}},circles:{dur:1e3,circles:8,fn:(d,l,c)=>{const n=l/c,t=d*n-d+"ms",e=2*Math.PI*n;return{r:5,style:{top:9*Math.sin(e)+"px",left:9*Math.cos(e)+"px","animation-delay":t}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(d,l)=>({r:6,style:{left:9-9*l+"px","animation-delay":-110*l+"ms"}})},lines:{dur:1e3,lines:8,fn:(d,l,c)=>({y1:14,y2:26,style:{transform:`rotate(${360/c*l+(l<c/2?180:-180)}deg)`,"animation-delay":d*l/c-d+"ms"}})},"lines-small":{dur:1e3,lines:8,fn:(d,l,c)=>({y1:12,y2:20,style:{transform:`rotate(${360/c*l+(l<c/2?180:-180)}deg)`,"animation-delay":d*l/c-d+"ms"}})},"lines-sharp":{dur:1e3,lines:12,fn:(d,l,c)=>({y1:17,y2:29,style:{transform:`rotate(${30*l+(l<6?180:-180)}deg)`,"animation-delay":d*l/c-d+"ms"}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(d,l,c)=>({y1:12,y2:20,style:{transform:`rotate(${30*l+(l<6?180:-180)}deg)`,"animation-delay":d*l/c-d+"ms"}})}}},5713:(M,p,u)=>{u.r(p),u.d(p,{createSwipeBackGesture:()=>c});var v=u(1643),g=u(5062),d=u(3139);u(3509);const c=(n,t,e,o,s)=>{const r=n.ownerDocument.defaultView,a=(0,g.i)(n),m=i=>a?-i.deltaX:i.deltaX;return(0,d.createGesture)({el:n,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:i=>(i=>{const{startX:D}=i;return a?D>=r.innerWidth-50:D<=50})(i)&&t(),onStart:e,onMove:i=>{const D=m(i)/r.innerWidth;o(D)},onEnd:i=>{const y=m(i),D=r.innerWidth,C=y/D,x=(i=>a?-i.velocityX:i.velocityX)(i),L=x>=0&&(x>.2||y>D/2),b=(L?1-C:C)*D;let O=0;if(b>5){const B=b/Math.abs(x);O=Math.min(B,540)}s(L,C<=0?.01:(0,v.k)(0,C,.9999),O)}})}},2854:(M,p,u)=>{u.d(p,{c:()=>d,g:()=>c,h:()=>g,o:()=>t});var v=u(5861);const g=(e,o)=>null!==o.closest(e),d=(e,o)=>"string"==typeof e&&e.length>0?Object.assign({"ion-color":!0,[`ion-color-${e}`]:!0},o):o,c=e=>{const o={};return(e=>void 0!==e?(Array.isArray(e)?e:e.split(" ")).filter(s=>null!=s).map(s=>s.trim()).filter(s=>""!==s):[])(e).forEach(s=>o[s]=!0),o},n=/^[a-z][a-z0-9+\-.]*:/,t=function(){var e=(0,v.Z)(function*(o,s,r,a){if(null!=o&&"#"!==o[0]&&!n.test(o)){const h=document.querySelector("ion-router");if(h)return null!=s&&s.preventDefault(),h.push(o,r,a)}return!1});return function(s,r,a,h){return e.apply(this,arguments)}}()},3927:(M,p,u)=>{u.d(p,{I:()=>e});var v=u(1737),g=u(520),d=u(2868),l=u(7221),c=u(2340),n=u(2096);new g.WM({"Content-Type":"application/json"});let e=(()=>{class o{constructor(r){this.http=r}getData(r){return this.http.get(`${c.N.baseUrl}${r}`).pipe((0,d.b)(a=>!0),(0,l.K)(this.handleError))}getSpecificData(r,a){return this.http.get(`${c.N.baseUrl}${r}/${a}`).pipe((0,d.b)(h=>!0),(0,l.K)(this.handleError))}postData(r,a){return this.http.post(`${c.N.baseUrl}${r}`,{data:a}).pipe((0,d.b)(h=>console.log("Informa\xe7\xe3o adicionada com sucesso.")),(0,l.K)(this.handleError))}login(r,a){return this.http.post(`${c.N.baseUrl}${r}`,{data:a}).pipe((0,d.b)(h=>{}),(0,l.K)(this.handleError))}deleteData(r,a){return this.http.post(`${c.N.baseUrl}${r}`,{data:a}).pipe((0,d.b)(h=>console.log("Informacao deletada com sucesso")),(0,l.K)(this.handleError))}handleError(r){return r.error instanceof ErrorEvent?console.error("Um erro ocorreu:",r.error.message):console.error(`Codigo retornado do backend ${r.status}, body era: ${JSON.stringify(r.error.error.message)}`),(0,v._)(r.error.error.message)}}return o.\u0275fac=function(r){return new(r||o)(n.LFG(g.eN))},o.\u0275prov=n.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})()}}]);
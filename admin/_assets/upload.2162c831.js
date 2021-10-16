import{v as e,m as t,aP as r,d as n,i as o,h as i,c as s,aj as a,U as l,bf as u,j as c,cZ as m,c_ as d,c$ as p}from"./index.cefb3244.js";import{C as g,R as f}from"./index.5213a239.js";var v={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"}}]},name:"left",theme:"outlined"};function w(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var h=function(n,o){var i=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?Object(arguments[t]):{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){w(e,t,r[t])}))}return e}({},n,o.attrs);return e(r,t(i,{icon:v}),null)};h.displayName="LeftOutlined",h.inheritAttrs=!1;var _=h;const y={show:{type:Boolean,default:!1},imageList:{type:[Array],default:null},index:{type:Number,default:0}};var O,L;(L=O||(O={}))[L.LOADING=0]="LOADING",L[L.DONE=1]="DONE",L[L.FAIL=2]="FAIL";const b="img-preview";var x=n({name:"ImagePreview",props:y,setup(e){const t=o({currentUrl:"",imgScale:1,imgRotate:0,imgTop:0,imgLeft:0,status:0,currentIndex:0,moveX:0,moveY:0,show:e.show}),r=i(null),n=i(null);function m(){!function(){const e=c(r);if(!e)return;e.onmousewheel=p,document.body.addEventListener("DOMMouseScroll",p),document.body.onkeyup=L,document.ondragstart=function(){return!1}}();const{index:n,imageList:o}=e;if(!o||!o.length)throw new Error("imageList is undefined");t.currentIndex=n,y(o[n])}function d(){t.imgScale=1,t.imgRotate=0,t.imgTop=0,t.imgLeft=0}function p(e){(e=e||window.event).delta=e.wheelDelta||-e.detail,e.preventDefault(),e.delta>0&&v(.015),e.delta<0&&v(-.015)}function v(e){t.imgScale<=.2&&e<0||(t.imgScale+=e)}function w(e){t.imgRotate+=e}function h(){const e=c(n);e&&(e.onmousemove=null)}function y(e){t.status=0;const r=new Image;r.src=e,r.onload=()=>{t.currentUrl=e,t.status=1},r.onerror=()=>{t.status=2}}function O(e){e&&e.stopPropagation(),t.show=!1,document.body.removeEventListener("DOMMouseScroll",p),document.ondragstart=null}function L(e){let r;r=(e=e||event).keyCode||e.which||e.charCode,27==r&&(t.show=!1)}function x(){d()}function I(e){e=e||window.event,t.moveX=e.clientX,t.moveY=e.clientY;const r=c(n);r&&(r.onmousemove=F)}function F(e){(e=e||window.event).preventDefault();const r=e.clientX-t.moveX,n=e.clientY-t.moveY;t.imgLeft+=r,t.imgTop+=n,t.moveX=e.clientX,t.moveY=e.clientY}const G=s((()=>{const{imgScale:e,imgRotate:r,imgTop:n,imgLeft:o}=t;return{transform:`scale(${e}) rotate(${r}deg)`,marginTop:`${n}px`,marginLeft:`${o}px`}})),T=s((()=>{const{imageList:t}=e;return t.length>1}));a((()=>{e.show&&m(),e.imageList&&d()}));const P=r=>c(T)?l("div",{class:["img-preview__arrow",r],onClick:()=>function(r){const{currentIndex:n}=t,{imageList:o}=e;"left"===r&&(t.currentIndex--,n<=0&&(t.currentIndex=o.length-1)),"right"===r&&(t.currentIndex++,n>=o.length-1&&(t.currentIndex=0)),y(o[t.currentIndex])}(r)},l("left"===r?_:f,null)):null;return()=>t.show&&l("div",{class:b,ref:r,onMouseup:h},l("div",{class:"img-preview-content"},l("img",{width:"32",src:u,class:["img-preview-image",0===t.status?"":"hidden"]}),l("img",{style:c(G),class:["img-preview-image",1===t.status?"":"hidden"],ref:n,src:t.currentUrl,onMousedown:I}),l("div",{class:"img-preview__close",onClick:O},l(g,{class:"img-preview__close-icon"})),(()=>{if(!c(T))return null;const{currentIndex:r}=t,{imageList:n}=e;return l("div",{class:"img-preview__index"},r+1," / ",n.length)})(),l("div",{class:"img-preview__controller"},l("div",{class:"img-preview__controller-item",onClick:()=>v(-.15)},l("img",{src:"/_assets/unscale.50a147e7.svg"})),l("div",{class:"img-preview__controller-item",onClick:()=>v(.15)},l("img",{src:"/_assets/scale.5b254733.svg"})),l("div",{class:"img-preview__controller-item",onClick:x},l("img",{src:"/_assets/resume.7a838909.svg"})),l("div",{class:"img-preview__controller-item",onClick:()=>w(-90)},l("img",{src:"/_assets/unrotate.a3dc2050.svg"})),l("div",{class:"img-preview__controller-item",onClick:()=>w(90)},l("img",{src:"/_assets/p-rotate.54a3ac67.svg"}))),P("left"),P("right")))}});let I=null;function F(t){if(!m)return;const{imageList:r,show:n=!0,index:o=0}=t,i={},s=document.createElement("div");i.imageList=r,i.show=n,i.index=o,I=e(x,i),d(I,s),document.body.appendChild(s)}var G,T;function P(e,t){return p.request({url:G.FileGroupOperate,method:"GET",params:{type:e,...t}},{isTransformRequestResult:!1})}function E(e,t){return p.request({url:G.FileGroupOperate,method:"POST",params:{type:e,...t}})}function q(e,t){return p.request({url:G.RecoverFileGroupOperate,method:"PUT",params:{type:e,...t}})}function C(e,t){return p.request({url:G.FileGroupOperate,method:"DELETE",params:{type:e,...t}})}function D(e){return p.request({url:G.FileGroupOperate,method:"PUT",params:e})}function R(e){return p.request({url:G.FileGroup,method:"GET",params:e},{isTransformRequestResult:!1})}function S(e){return p.request({url:G.FileGroup,method:"POST",params:e})}function j(e){return p.request({url:G.FileGroup+"/"+e.id,method:"PUT",params:e})}function k(e,t){return p.request({url:G.FileGroup+"/"+e,method:"delete",params:{type:t}})}function U(e,t){return p.uploadFile({url:G.uploadBigImg,onUploadProgress:t},e)}function M(e,t){return p.uploadFile({url:G.uploadImg,onUploadProgress:t},e)}(T=G||(G={})).uploadImg="/cms/file",T.uploadBigImg="/cms/bigfile",T.FileGroup="/cms/file_group",T.FileGroupOperate="/cms/file_group/file",T.RecoverFileGroupOperate="/cms/file_group/recover/file";export{_ as L,E as a,U as b,F as c,C as d,R as e,j as f,P as g,k as h,D as i,q as r,S as s,M as u};

let a=document.createElement("style");a.innerHTML=".iframe-page .ant-spin-nested-loading[data-v-5c45baaa]{position:relative;height:100%}.iframe-page .ant-spin-nested-loading .ant-spin-container[data-v-5c45baaa]{width:100%;height:100%;padding:10px}.iframe-page__mask[data-v-5c45baaa]{position:absolute;top:0;left:0;width:100%;height:100%}.iframe-page__main[data-v-5c45baaa]{width:100%;height:100%;overflow:hidden;background:#fff;border:0;-webkit-box-sizing:border-box;box-sizing:border-box}",document.head.appendChild(a);import{d as e,aB as t,h as n,T as i,c as s,j as o,F as r,r as d,o as l,p,v as c,w as g,q as m,bg as f}from"./index.cefb3244.js";import{g as h}from"./domUtils.a209b89e.js";import{u}from"./useWindowSizeFn.6a91d172.js";var b=e({name:"IFrame",components:{Spin:t},props:{frameSrc:{type:String}},setup(){const a=n(!1),e=n(50),t=n(window.innerHeight),d=n(null);function l(){const a=o(d);if(!a)return;let{top:n}=h(a);n+=20,e.value=n,t.value=window.innerHeight-n;const i=document.documentElement.clientHeight-n;a.style.height=`${i}px`}function p(){a.value=!1,l()}return u(l,150,{immediate:!0}),i((()=>{a.value=!0,r((()=>{const a=o(d);a&&(a.attachEvent?a.attachEvent("onload",(()=>{p()})):a.onload=()=>{p()})}))})),{getWrapStyle:s((()=>({height:`${o(t)}px`}))),loading:a,frameRef:d}}});const v=["src"];b.render=function(a,e,t,n,i,s){const o=d("Spin");return l(),p("div",{class:"iframe-page",style:f(a.getWrapStyle)},[c(o,{spinning:a.loading,size:"large",style:f(a.getWrapStyle)},{default:g((()=>[m("iframe",{src:a.frameSrc,class:"iframe-page__main",ref:"frameRef"},null,8,v)])),_:1},8,["spinning","style"])],4)},b.__scopeId="data-v-5c45baaa";export{b as default};

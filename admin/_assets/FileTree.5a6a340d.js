let e=document.createElement("style");e.innerHTML=".fileWrapper[data-v-32fe8446]{display:-webkit-box;display:-ms-flexbox;display:flex}.fileWrapper .left .ant-card[data-v-32fe8446]{max-width:270px}.fileWrapper .left .treeGroup[data-v-32fe8446]{width:100%}.fileWrapper .left[data-v-32fe8446] span.ant-tree-title{width:80px;overflow:hidden;direction:rtl;text-overflow:ellipsis;white-space:nowrap;display:inline-block}.fileWrapper .right[data-v-32fe8446]{-webkit-box-flex:1;-ms-flex:1;flex:1}",document.head.appendChild(e);import{d7 as t,d8 as a,bM as r,bQ as l,bZ as i,d9 as s,bP as n,cJ as d,d as o,h as c,aj as f,l as p,r as u,o as h,p as m,q as y,v as b,w as v,e as D,b as _,z as w}from"./index.cefb3244.js";import{b as x}from"./_baseDifference.8d58a474.js";function K(){var e=arguments.length;if(!e)return[];for(var i=Array(e-1),s=arguments[0],n=e;n--;)i[n-1]=arguments[n];return t(r(s)?l(s):[s],a(i,1))}var g=i((function(e,t){var r=s(t);return n(r)&&(r=void 0),n(e)?x(e,a(t,1,n,!0),d(r)):[]}));function S(e,t,a=[]){e.map((e=>{t.map(((r,l)=>{r.parent_id===e.id&&(e.children.push(r),a.push(r)),l!==t.length-1||e.children&&e.children.length||delete e.children}))}));const r=e.filter((e=>e.children));return r&&r[0]&&S(t,g(t,a,"id"),a),e}function k(e,t,a=[]){let r,l;return t.some(((t,i)=>{const s=String(t.id);if(s===e)return r=String(t.parent_id),l=t.parent_id,a.push(s),!0})),Number(l)&&k(r,t,a),a}const{createInfoModal:T,createWarningModal:W}=p();var z=o({name:"FileTree",props:["treeData","leafData"],setup(e){const t=c(null),a=c(null),r=c([]);return f((()=>{const l=e.treeData&&e.treeData.map((e=>(e.children=[],e.key=String(e.id),e)))||[];if(l.length&&e.leafData){const i=l.filter((e=>!e.parent_id)),s=l.filter((e=>e.parent_id));t.value=S(i,K(s,e.leafData));let n=r.value[0];if(n){n=/file/.test(n)?e.leafData.find((e=>e.key===n)).parent_id:n;const t=n&&l.find((e=>String(e.id)===String(n)));a.value=t?k(String(n),l):[String(n)]}else a.value=l.map((e=>String(e.id)))}else t.value=[]})),{loadTreeData:t,expandedKeys:a,selectKey:r}},methods:{fakeLoadData(){return()=>Promise.resolve(this.loadTreeData)},rowAdd(e){if(e){const e=Number(this.selectKey[0]);if(e){const t=this.treeData.find((t=>t.id===e)).id;this.$emit("rowAdd",{parent_id:t})}else this.selectKey[0]?W({content:"当前选择是文件而不是分类,请选择分类"}):T({content:"请选择分类"})}else this.selectKey=[],this.$emit("rowAdd")},rowDelete(){const e=Number(this.selectKey[0]);e?this.$emit("rowDelete",e):this.selectKey[0]?W({content:"当前选择是文件而不是分类,请选择分类"}):T({content:"请选择分类"})},rowEdit(){const e=Number(this.selectKey[0]);e?this.$emit("rowEdit",this.treeData.find((t=>t.id===e))):this.selectKey[0]?W({content:"当前选择是文件而不是分类,请选择分类"}):T({content:"请选择分类"})},onSelect(e){let t=e[0],a={id:Number(t)};/file/.test(t)&&(a=this.leafData.find((e=>e.key===t))),this.selectKey=e,this.$emit("currentClass",a)}}});const A={class:"fileWrapper"},C={class:"left"},$=w("新增"),M=w("添加"),N=w("编辑"),j=w("删除"),E={class:"right"};z.render=function(e,t,a,r,l,i){const s=u("a-button"),n=u("a-directory-tree"),d=u("a-card");return h(),m("div",A,[y("div",C,[b(d,null,{title:v((()=>[b(s,{size:"small",class:"mr_btn",type:"primary",onClick:t[0]||(t[0]=t=>e.rowAdd())},{default:v((()=>[$])),_:1}),b(s,{size:"small",class:"mr_btn",type:"primary",onClick:t[1]||(t[1]=t=>e.rowAdd(!0))},{default:v((()=>[M])),_:1}),b(s,{size:"small",class:"mr_btn",type:"primary",onClick:t[2]||(t[2]=t=>e.rowEdit())},{default:v((()=>[N])),_:1}),b(s,{size:"small",type:"danger",onClick:t[3]||(t[3]=t=>e.rowDelete())},{default:v((()=>[j])),_:1})])),default:v((()=>[b(n,{treeData:e.loadTreeData,class:"treeGroup",ref:"directoryTree",replaceFields:{children:"children",title:"name"},loadData:e.fakeLoadData(),loadedKeys:e.expandedKeys,selectedKeys:e.selectKey,expandedKeys:e.expandedKeys,onSelect:e.onSelect},null,8,["treeData","loadData","loadedKeys","selectedKeys","expandedKeys","onSelect"])])),_:1})]),y("div",E,[e.leafData?D(e.$slots,"default",{key:0}):_("",!0)])])},z.__scopeId="data-v-32fe8446";var F=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:z});export{F,K as c,z as s};

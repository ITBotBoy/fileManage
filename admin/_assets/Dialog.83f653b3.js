import{d as e,I as s,F as t,r as i,o,a,w as r,v as n,m as d}from"./index.cefb3244.js";import{a as l,u as m}from"./index.5213a239.js";import{B as c,u as p}from"./index.47a8bedc.js";import"./index.21a20b5a.js";import"./useWindowSizeFn.6a91d172.js";import"./index.37892b32.js";import"./index.172950c5.js";import"./upload.2162c831.js";var u=e({props:["title"],components:{BasicModal:l,BasicForm:c},setup(e,{emit:i}){const o=s("schemas"),[a,{setFieldsValue:r,getFieldsValue:n,resetFields:d}]=p({labelWidth:100,schemas:o,showActionButtonGroup:!1,actionColOptions:{span:24}}),[l]=m((e=>{t((()=>{r(e)}))}));return{register:l,dialogOk:function(){const e=n();i("rowSave",e)},registerForm:a,resetFields:d}}});u.render=function(e,s,t,l,m,c){const p=i("BasicForm"),u=i("BasicModal");return o(),a(u,d({onOk:e.dialogOk},e.$attrs,{onRegister:e.register,title:e.title}),{default:r((()=>[n(p,{onRegister:e.registerForm},null,8,["onRegister"])])),_:1},16,["onOk","onRegister","title"])};export{u as default};
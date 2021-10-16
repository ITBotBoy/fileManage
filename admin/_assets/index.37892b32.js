import{d as e,A as t,C as n,P as r,D as o,E as i,F as a,G as c,H as s,v as u,I as l,J as f,K as h,L as p,M as d}from"./index.cefb3244.js";function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){y(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function g(){return g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},g.apply(this,arguments)}var O=e({name:"Checkbox",mixins:[t],inheritAttrs:!1,props:n({prefixCls:r.string,name:r.string,id:r.string,type:r.string,defaultChecked:o(r.oneOfType([r.number,r.looseBool])),checked:o(r.oneOfType([r.number,r.looseBool])),disabled:r.looseBool,tabindex:r.oneOfType([r.string,r.number]),readonly:r.looseBool,autofocus:r.looseBool,value:r.any},{prefixCls:"rc-checkbox",type:"checkbox",defaultChecked:!1}),data:function(){return{sChecked:i(this,"checked")?this.checked:this.defaultChecked}},watch:{checked:function(e){this.sChecked=e}},mounted:function(){a((function(){}))},methods:{focus:function(){this.$refs.input.focus()},blur:function(){this.$refs.input.blur()},handleChange:function(e){var t=c(this);if(!t.disabled){"checked"in t||(this.sChecked=e.target.checked),this.$forceUpdate(),e.shiftKey=this.eventShiftKey;var n={target:g(g({},t),{checked:e.target.checked}),stopPropagation:function(){e.stopPropagation()},preventDefault:function(){e.preventDefault()},nativeEvent:e};this.__emit("update:checked",n),this.__emit("change",n),this.eventShiftKey=!1}},onClick:function(e){this.__emit("click",e),this.eventShiftKey=e.shiftKey}},render:function(){var e,t=c(this),n=t.prefixCls,r=t.name,o=t.id,i=t.type,a=t.disabled,l=t.readonly,f=t.tabindex,h=t.autofocus,p=t.value,d=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}(t,["prefixCls","name","id","type","disabled","readonly","tabindex","autofocus","value"]),b=this.$attrs,O=b.class,m=b.onFocus,x=b.onBlur,k=Object.keys(g(g({},d),this.$attrs)).reduce((function(e,t){return"aria-"!==t.substr(0,5)&&"data-"!==t.substr(0,5)&&"role"!==t||(e[t]=d[t]),e}),{}),C=this.sChecked,j=s(n,O,(y(e={},"".concat(n,"-checked"),C),y(e,"".concat(n,"-disabled"),a),e)),P=g(g({name:r,id:o,type:i,readonly:l,disabled:a,tabindex:f,class:"".concat(n,"-input"),checked:!!C,autofocus:h,value:p},k),{onChange:this.handleChange,onClick:this.onClick,onFocus:m,onBlur:x});return u("span",{class:j},[u("input",v({ref:"input"},P),null),u("span",{class:"".concat(n,"-inner")},null)])}});function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){k(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function k(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function C(){return C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},C.apply(this,arguments)}var j=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};function P(){}var w=e({name:"ACheckbox",inheritAttrs:!1,__ANT_CHECKBOX:!0,props:{prefixCls:r.string,defaultChecked:r.looseBool,checked:r.looseBool,disabled:r.looseBool,isGroup:r.looseBool,value:r.any,name:r.string,id:r.string,indeterminate:r.looseBool,type:r.string.def("checkbox"),autofocus:r.looseBool,onChange:r.func,"onUpdate:checked":r.func},setup:function(){return{configProvider:l("configProvider",f),checkboxGroupContext:l("checkboxGroupContext",void 0)}},watch:{value:function(e,t){var n=this;a((function(){var r=n.checkboxGroupContext,o=void 0===r?{}:r;o.registerValue&&o.cancelValue&&(o.cancelValue(t),o.registerValue(e))}))}},mounted:function(){var e=this.value,t=this.checkboxGroupContext,n=void 0===t?{}:t;n.registerValue&&n.registerValue(e),h(i(this,"checked")||this.checkboxGroupContext||!i(this,"value"),"Checkbox","`value` is not validate prop, do you mean `checked`?")},beforeUnmount:function(){var e=this.value,t=this.checkboxGroupContext,n=void 0===t?{}:t;n.cancelValue&&n.cancelValue(e)},methods:{handleChange:function(e){var t=e.target.checked;this.$emit("update:checked",t),this.$emit("change",e)},focus:function(){this.$refs.vcCheckbox.focus()},blur:function(){this.$refs.vcCheckbox.blur()}},render:function(){var e,t=this,n=c(this),r=this.checkboxGroupContext,o=this.$attrs,i=p(this),a=n.indeterminate,l=n.prefixCls,f=j(n,["indeterminate","prefixCls"]),h=(0,this.configProvider.getPrefixCls)("checkbox",l),d=o.onMouseenter,b=void 0===d?P:d,v=o.onMouseleave,y=void 0===v?P:v;o.onInput;var g=o.class,m=o.style,w=j(o,["onMouseenter","onMouseleave","onInput","class","style"]),V=C(C(C({},f),{prefixCls:h}),w);r?(V.onChange=function(){for(var e=arguments.length,o=new Array(e),a=0;a<e;a++)o[a]=arguments[a];t.$emit.apply(t,["change"].concat(o)),r.toggleOption({label:i,value:n.value})},V.name=r.name,V.checked=-1!==r.sValue.indexOf(n.value),V.disabled=n.disabled||r.disabled,V.indeterminate=a):V.onChange=this.handleChange;var A=s((k(e={},"".concat(h,"-wrapper"),!0),k(e,"".concat(h,"-wrapper-checked"),V.checked),k(e,"".concat(h,"-wrapper-disabled"),V.disabled),e),g),S=s(k({},"".concat(h,"-indeterminate"),a));return u("label",{class:A,style:m,onMouseenter:b,onMouseleave:y},[u(O,x(x({},V),{},{class:S,ref:"vcCheckbox"}),null),i.length?u("span",null,[i]):null])}});function V(e){return function(e){if(Array.isArray(e))return A(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return A(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return A(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function A(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function S(){return S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},S.apply(this,arguments)}function $(){}var B=e({name:"ACheckboxGroup",props:{name:r.string,prefixCls:r.string,defaultValue:{type:Array},value:{type:Array},options:{type:Array},disabled:r.looseBool,onChange:r.func},setup:function(){return{configProvider:l("configProvider",f)}},data:function(){var e=this.value,t=this.defaultValue;return{sValue:e||t||[],registeredValues:[]}},watch:{value:function(e){this.sValue=e||[]}},created:function(){d("checkboxGroupContext",this)},methods:{getOptions:function(){var e=this.options,t=void 0===e?[]:e,n=this.$slots;return t.map((function(e){if("string"==typeof e)return{label:e,value:e};var t=e.label;return void 0===t&&n.label&&(t=n.label(e)),S(S({},e),{label:t})}))},cancelValue:function(e){this.registeredValues=this.registeredValues.filter((function(t){return t!==e}))},registerValue:function(e){this.registeredValues=[].concat(V(this.registeredValues),[e])},toggleOption:function(e){var t=this.registeredValues,n=this.sValue.indexOf(e.value),r=V(this.sValue);-1===n?r.push(e.value):r.splice(n,1),i(this,"value")||(this.sValue=r);var o=this.getOptions(),a=r.filter((function(e){return-1!==t.indexOf(e)})).sort((function(e,t){return o.findIndex((function(t){return t.value===e}))-o.findIndex((function(e){return e.value===t}))}));this.$emit("update:value",a),this.$emit("change",a)}},render:function(){var e=this.$props,t=this.$data,n=e.prefixCls,r=e.options,o=(0,this.configProvider.getPrefixCls)("checkbox",n),i=p(this),a="".concat(o,"-group");return r&&r.length>0&&(i=this.getOptions().map((function(n){return u(w,{prefixCls:o,key:n.value.toString(),disabled:"disabled"in n?n.disabled:e.disabled,indeterminate:n.indeterminate,value:n.value,checked:-1!==t.sValue.indexOf(n.value),onChange:n.onChange||$,class:"".concat(a,"-item")},{default:function(){return[n.label]}})}))),u("div",{class:a},[i])}});w.Group=B,w.install=function(e){return e.component(w.name,w),e.component(B.name,B),e};export{w as C,O as a};

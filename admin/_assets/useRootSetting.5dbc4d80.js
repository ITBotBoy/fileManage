import{c as e,a6 as t,j as o,b3 as n,aT as g,bj as a,bE as i,bF as r,bp as s}from"./index.cefb3244.js";function c(){const s=e((()=>t.getProjectConfig.menuSetting)),c=e((()=>o(s).collapsed)),l=e((()=>o(s).type)),u=e((()=>o(s).mode)),d=e((()=>o(s).fixed)),S=e((()=>o(s).show)),h=e((()=>o(s).hidden)),p=e((()=>o(s).menuWidth)),M=e((()=>o(s).trigger)),m=e((()=>o(s).theme)),w=e((()=>o(s).split)),C=e((()=>o(s).bgColor)),T=e((()=>o(s).canDrag)),b=e((()=>o(s).accordion)),f=e((()=>o(s).collapsedShowTitle)),I=e((()=>o(s).collapsedShowSearch)),P=e((()=>o(s).topMenuAlign)),L=e((()=>o(l)===n.SIDEBAR)),E=e((()=>o(l)===n.TOP_MENU)),O=e((()=>o(u)===g.HORIZONTAL||o(w))),A=e((()=>!(o(l)===n.TOP_MENU||!o(S)||!o(h))&&o(M)===a.HEADER)),B=e((()=>o(s).showSearch&&!(o(l)===n.MIX&&o(u)===g.HORIZONTAL))),F=e((()=>o(u)===g.HORIZONTAL)),j=e((()=>o(c)?o(H):o(p))),H=e((()=>{const{collapsedShowTitle:e}=o(s);return e?i:r})),R=e((()=>{const e=o(E)||!o(S)?0:o(j);return`calc(100% - ${o(e)}px)`}));function x(e){t.commitProjectConfigState({menuSetting:e})}return{setMenuSetting:x,toggleCollapsed:function(){x({collapsed:!o(c)})},getMenuFixed:d,getMenuSetting:s,getRealWidth:j,getMenuType:l,getMenuMode:u,getShowMenu:S,getCollapsed:c,getMiniWidthNumber:H,getCalcContentWidth:R,getMenuWidth:p,getTrigger:M,getSplit:w,getMenuTheme:m,getCanDrag:T,getIsHorizontal:F,getShowSearch:B,getCollapsedShowTitle:f,getCollapsedShowSearch:I,getIsSidebarType:L,getAccordion:b,getShowTopMenu:O,getShowHeaderTrigger:A,getTopMenuAlign:P,getMenuHidden:h,getIsTopMenu:E,getMenuBgColor:C}}function l(){const n=e((()=>t.getProjectConfig.multiTabsSetting)),g=e((()=>o(n).max)),a=e((()=>o(n).show)),i=e((()=>o(n).showQuick));return{setMultipleTabSetting:function(e){t.commitProjectConfigState({multiTabsSetting:e})},getMultipleTabSetting:n,getMax:g,getShowMultipleTab:a,getShowQuick:i}}function u(){const n=e((()=>t.getProjectConfig)),g=e((()=>t.getPageLoading)),a=e((()=>o(n).openKeepAlive)),i=e((()=>o(n).canEmbedIFramePage)),r=e((()=>o(n).permissionMode)),c=e((()=>o(n).showLogo)),l=e((()=>o(n).contentMode)),u=e((()=>o(n).useOpenBackTop)),d=e((()=>o(n).showSettingButton)),S=e((()=>o(n).useErrorHandle)),h=e((()=>o(n).showFooter)),p=e((()=>o(n).showBreadCrumb)),M=e((()=>o(n).showBreadCrumbIcon)),m=e((()=>o(n).fullContent)),w=e((()=>o(n).colorWeak)),C=e((()=>o(n).grayMode)),T=e((()=>o(n).contentMode===s.FULL?s.FULL:s.FIXED));return{setRootSetting:function(e){t.commitProjectConfigState(e)},getFullContent:m,getColorWeak:w,getGrayMode:C,getRootSetting:n,getLayoutContentMode:T,getPageLoading:g,getOpenKeepAlive:a,getCanEmbedIFramePage:i,getPermissionMode:r,getShowLogo:c,getUseErrorHandle:S,getShowBreadCrumb:p,getShowBreadCrumbIcon:M,getUseOpenBackTop:u,getShowSettingButton:d,getShowFooter:h,getContentMode:l}}export{l as a,u as b,c as u};
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-39805d99","chunk-53920359"],{"0fea":function(t,e,n){"use strict";n.d(e,"l",(function(){return o})),n.d(e,"n",(function(){return s})),n.d(e,"q",(function(){return c})),n.d(e,"p",(function(){return l})),n.d(e,"o",(function(){return u})),n.d(e,"f",(function(){return d})),n.d(e,"m",(function(){return f})),n.d(e,"e",(function(){return p})),n.d(e,"j",(function(){return m})),n.d(e,"g",(function(){return h})),n.d(e,"a",(function(){return b})),n.d(e,"c",(function(){return v})),n.d(e,"d",(function(){return g})),n.d(e,"b",(function(){return y})),n.d(e,"k",(function(){return j})),n.d(e,"i",(function(){return O})),n.d(e,"h",(function(){return w}));var r=n("b775"),i=n("0f22"),a={version:"/app/version/page/list",versionAdd:"/app/version/add",versionPublish:"/app/version/publish",versionModify:"/app/version/modify",versionDel:"/app/version/del",fileToken:"/minio/file/token",fileUpload:"/minio/file/upload",areaTree:"/area/code/tree",pointList:"/disaster/point/page/list",option:"/option/page/list",optionAdd:"/option/add",optionItems:"/option/items",optionModify:"/option/modify",optionDel:"/option/del",user:"/user",role:"/role",service:"/service",permission:"/permission",permissionNoPager:"/permission/no-pager",orgTree:"/org/tree"};function o(t){return Object(r["b"])({url:i["a"]+a.version,method:"post",data:t})}function s(t){return Object(r["b"])({url:i["a"]+a.versionAdd,method:"post",data:t})}function c(t){return Object(r["b"])({url:i["a"]+a.versionPublish,method:"post",data:t})}function l(t){return Object(r["b"])({url:i["a"]+a.versionModify,method:"post",data:t})}function u(t){return Object(r["b"])({url:i["a"]+a.versionDel,method:"post",data:t})}function d(t){return Object(r["b"])({url:i["a"]+a.fileToken,method:"post",data:t})}function f(t){return Object(r["b"])({url:i["a"]+a.fileUpload,method:"post",data:t,headers:{"Content-Type":"application/x-www-form-urlencoded"}})}function p(t){return Object(r["b"])({url:i["a"]+a.areaTree,method:"post",data:t})}function m(t){return Object(r["b"])({url:i["a"]+a.pointList,method:"post",data:t})}function h(t){return Object(r["b"])({url:i["a"]+a.option,method:"post",data:t})}function b(t){return Object(r["b"])({url:i["a"]+a.optionAdd,method:"post",data:t})}function v(t){return Object(r["b"])({url:i["a"]+a.optionItems,method:"post",data:t})}function g(t){return Object(r["b"])({url:i["a"]+a.optionModify,method:"post",data:t})}function y(t){return Object(r["b"])({url:i["a"]+a.optionDel,method:"post",data:t})}function j(t){return Object(r["c"])({url:a.role,method:"get",params:t})}function O(t){return Object(r["c"])({url:a.permissionNoPager,method:"get",params:t})}function w(t){return Object(r["c"])({url:a.orgTree,method:"get",params:t})}},"88bc":function(t,e,n){(function(e){var n=1/0,r=9007199254740991,i="[object Arguments]",a="[object Function]",o="[object GeneratorFunction]",s="[object Symbol]",c="object"==typeof e&&e&&e.Object===Object&&e,l="object"==typeof self&&self&&self.Object===Object&&self,u=c||l||Function("return this")();function d(t,e,n){switch(n.length){case 0:return t.call(e);case 1:return t.call(e,n[0]);case 2:return t.call(e,n[0],n[1]);case 3:return t.call(e,n[0],n[1],n[2])}return t.apply(e,n)}function f(t,e){var n=-1,r=t?t.length:0,i=Array(r);while(++n<r)i[n]=e(t[n],n,t);return i}function p(t,e){var n=-1,r=e.length,i=t.length;while(++n<r)t[i+n]=e[n];return t}var m=Object.prototype,h=m.hasOwnProperty,b=m.toString,v=u.Symbol,g=m.propertyIsEnumerable,y=v?v.isConcatSpreadable:void 0,j=Math.max;function O(t,e,n,r,i){var a=-1,o=t.length;n||(n=x),i||(i=[]);while(++a<o){var s=t[a];e>0&&n(s)?e>1?O(s,e-1,n,r,i):p(i,s):r||(i[i.length]=s)}return i}function w(t,e){return t=Object(t),k(t,e,(function(e,n){return n in t}))}function k(t,e,n){var r=-1,i=e.length,a={};while(++r<i){var o=e[r],s=t[o];n(s,o)&&(a[o]=s)}return a}function _(t,e){return e=j(void 0===e?t.length-1:e,0),function(){var n=arguments,r=-1,i=j(n.length-e,0),a=Array(i);while(++r<i)a[r]=n[e+r];r=-1;var o=Array(e+1);while(++r<e)o[r]=n[r];return o[e]=a,d(t,this,o)}}function x(t){return T(t)||A(t)||!!(y&&t&&t[y])}function C(t){if("string"==typeof t||D(t))return t;var e=t+"";return"0"==e&&1/t==-n?"-0":e}function A(t){return E(t)&&h.call(t,"callee")&&(!g.call(t,"callee")||b.call(t)==i)}var T=Array.isArray;function S(t){return null!=t&&P(t.length)&&!I(t)}function E(t){return $(t)&&S(t)}function I(t){var e=R(t)?b.call(t):"";return e==a||e==o}function P(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=r}function R(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function $(t){return!!t&&"object"==typeof t}function D(t){return"symbol"==typeof t||$(t)&&b.call(t)==s}var L=_((function(t,e){return null==t?{}:w(t,f(O(e,1),C))}));t.exports=L}).call(this,n("c8ba"))},"8d18":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a-card",{attrs:{bordered:!1}},[n("div",{staticClass:"table-page-search-wrapper"},[n("a-form",{attrs:{layout:"inline"}},[n("a-row",{attrs:{gutter:48}},[n("a-col",{attrs:{md:8,sm:24}},[n("a-form-item",{attrs:{label:"角色ID"}},[n("a-input",{attrs:{placeholder:"请输入"}})],1)],1),n("a-col",{attrs:{md:8,sm:24}},[n("a-form-item",{attrs:{label:"状态"}},[n("a-select",{attrs:{placeholder:"请选择","default-value":"0"}},[n("a-select-option",{attrs:{value:"0"}},[t._v("全部")]),n("a-select-option",{attrs:{value:"1"}},[t._v("正常")]),n("a-select-option",{attrs:{value:"2"}},[t._v("禁用")])],1)],1)],1),n("a-col",{attrs:{md:8,sm:24}},[n("span",{staticClass:"table-page-search-submitButtons"},[n("a-button",{attrs:{type:"primary"}},[t._v("查询")]),n("a-button",{staticStyle:{"margin-left":"8px"}},[t._v("重置")])],1)])],1)],1)],1),n("s-table",{ref:"table",attrs:{size:"default",columns:t.columns,data:t.loadData},scopedSlots:t._u([{key:"expandedRowRender",fn:function(e){return n("div",{staticStyle:{margin:"0"}},[n("a-row",{style:{marginBottom:"12px"},attrs:{gutter:24}},t._l(e.permissions,(function(e,r){return n("a-col",{key:r,style:{marginBottom:"12px"},attrs:{span:12}},[n("a-col",{attrs:{span:4}},[n("span",[t._v(t._s(e.permissionName)+"：")])]),e.actionEntitySet.length>0?n("a-col",{attrs:{span:20}},t._l(e.actionEntitySet,(function(e,r){return n("a-tag",{key:r,attrs:{color:"cyan"}},[t._v(t._s(e.describe))])})),1):n("a-col",{attrs:{span:20}},[t._v("-")])],1)})),1)],1)}},{key:"action",fn:function(e,r){return n("span",{},[n("a",{on:{click:function(e){return t.$refs.modal.edit(r)}}},[t._v("编辑")]),n("a-divider",{attrs:{type:"vertical"}}),n("a-dropdown",[n("a",{staticClass:"ant-dropdown-link"},[t._v(" 更多 "),n("a-icon",{attrs:{type:"down"}})],1),n("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[n("a-menu-item",[n("a",{attrs:{href:"javascript:;"}},[t._v("详情")])]),n("a-menu-item",[n("a",{attrs:{href:"javascript:;"}},[t._v("禁用")])]),n("a-menu-item",[n("a",{attrs:{href:"javascript:;"}},[t._v("删除")])])],1)],1)],1)}}])}),n("role-modal",{ref:"modal",on:{ok:t.handleOk}})],1)},i=[],a=(n("159b"),n("d81d"),n("2af9")),o=n("d767"),s={name:"TableList",components:{STable:a["m"],RoleModal:o["default"]},data:function(){var t=this;return{description:"列表使用场景：后台管理中的权限管理以及角色管理，可用于基于 RBAC 设计的角色权限控制，颗粒度细到每一个操作类型。",visible:!1,form:null,mdl:{},advanced:!1,queryParam:{},columns:[{title:"唯一识别码",dataIndex:"id"},{title:"角色名称",dataIndex:"name"},{title:"状态",dataIndex:"status"},{title:"创建时间",dataIndex:"createTime",sorter:!0},{title:"操作",width:"150px",dataIndex:"action",scopedSlots:{customRender:"action"}}],loadData:function(e){return t.$http.get("/role",{params:Object.assign(e,t.queryParam)}).then((function(t){return t.result}))},selectedRowKeys:[],selectedRows:[]}},methods:{handleEdit:function(t){this.mdl=Object.assign({},t),this.mdl.permissions.forEach((function(t){t.actionsOptions=t.actionEntitySet.map((function(t){return{label:t.describe,value:t.action,defaultCheck:t.defaultCheck}}))})),this.visible=!0},handleOk:function(){this.$refs.table.refresh()},onChange:function(t,e){this.selectedRowKeys=t,this.selectedRows=e},toggleAdvanced:function(){this.advanced=!this.advanced}},watch:{}},c=s,l=n("2877"),u=Object(l["a"])(c,r,i,!1,null,null,null);e["default"]=u.exports},d767:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a-modal",{attrs:{title:"操作",width:800,visible:t.visible,confirmLoading:t.confirmLoading},on:{ok:t.handleOk,cancel:t.handleCancel}},[n("a-steps",{attrs:{current:1}},[n("a-step",[n("template",{slot:"title"},[t._v(" Finished ")]),n("span",{attrs:{slot:"description"},slot:"description"},[t._v("This is a description.")])],2),n("a-step",{attrs:{title:"In Progress",description:"This is a description."}}),n("a-step",{attrs:{title:"Waiting",description:"This is a description."}})],1)],1)},i=[],a=(n("159b"),n("d81d"),n("d3b7"),n("0fea")),o=n("88bc"),s=n.n(o),c={name:"RoleModal",data:function(){return{labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:16}},visible:!1,confirmLoading:!1,mdl:{},form:this.$form.createForm(this),permissions:[]}},created:function(){this.loadPermissions()},methods:{add:function(){this.edit({id:0})},edit:function(t){var e=this;if(this.mdl=Object.assign({},t),this.visible=!0,this.mdl.permissions&&this.permissions){var n={};this.mdl.permissions.forEach((function(t){n[t.permissionId]=t.actionEntitySet.map((function(t){return t.action}))})),this.permissions.forEach((function(t){t.selected=n[t.id]||[]}))}this.$nextTick((function(){e.form.setFieldsValue(s()(e.mdl,"id","name","status","describe"))}))},close:function(){this.$emit("close"),this.visible=!1},handleOk:function(){var t=this;this.form.validateFields((function(e,n){e||(t.confirmLoading=!0,new Promise((function(t){setTimeout((function(){return t()}),2e3)})).then((function(){t.$message.success("保存成功"),t.$emit("ok")})).catch((function(){})).finally((function(){t.confirmLoading=!1,t.close()})))}))},handleCancel:function(){this.close()},onChangeCheck:function(t){t.indeterminate=!!t.selected.length&&t.selected.length<t.actionsOptions.length,t.checkedAll=t.selected.length===t.actionsOptions.length},onChangeCheckAll:function(t,e){Object.assign(e,{selected:t.target.checked?e.actionsOptions.map((function(t){return t.value})):[],indeterminate:!1,checkedAll:t.target.checked})},loadPermissions:function(){var t=this;Object(a["i"])().then((function(e){var n=e.result;t.permissions=n.map((function(t){var e=JSON.parse(t.actionData)||[];return t.checkedAll=!1,t.selected=[],t.indeterminate=!1,t.actionsOptions=e.map((function(t){return{label:t.describe,value:t.action}})),t}))}))}}},l=c,u=n("2877"),d=Object(u["a"])(l,r,i,!1,null,"670742e4",null);e["default"]=d.exports}}]);
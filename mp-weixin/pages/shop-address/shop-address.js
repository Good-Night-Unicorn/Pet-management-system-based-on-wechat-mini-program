(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/shop-address/shop-address"],{3031:function(t,e,n){"use strict";var r=n("463b"),s=n.n(r);s.a},"3dc3":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=s(n("a34a"));function s(t){return t&&t.__esModule?t:{default:t}}function a(t,e,n,r,s,a,i){try{var u=t[a](i),c=u.value}catch(o){return void n(o)}u.done?e(c):Promise.resolve(c).then(r,s)}function i(t){return function(){var e=this,n=arguments;return new Promise((function(r,s){var i=t.apply(e,n);function u(t){a(i,r,s,u,c,"next",t)}function c(t){a(i,r,s,u,c,"throw",t)}u(void 0)}))}}var u={data:function(){return{source:0,list:[],user:{}}},onLoad:function(){var e=i(r.default.mark((function e(n){var s,a;return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return s=t.getStorageSync("nowTable"),e.next=3,this.$api.session(s);case 3:return a=e.sent,this.user=a.data,e.next=7,this.$api.list("address",{userid:this.user.id});case 7:a=e.sent,this.list=a.data.list;case 9:case"end":return e.stop()}}),e,this)})));function n(t){return e.apply(this,arguments)}return n}(),onShow:function(){var e=i(r.default.mark((function e(){var n,s;return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.getStorageSync("nowTable"),e.next=3,this.$api.session(n);case 3:return s=e.sent,this.user=s.data,e.next=7,this.$api.list("address",{userid:this.user.id});case 7:s=e.sent,this.list=s.data.list;case 9:case"end":return e.stop()}}),e,this)})));function n(){return e.apply(this,arguments)}return n}(),methods:{onSelectTap:function(e){t.setStorageSync("address",e),t.navigateBack({delta:1})},onAddressDtailTap:function(t){var e="";e=t?"../shop-address-detail/shop-address-detail?id="+t:"../shop-address-detail/shop-address-detail?id=",this.$utils.jump(e)},onDeleteTap:function(){var e=i(r.default.mark((function e(n){var s;return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:s=this,t.showModal({title:"提示",content:"是否确认删除",success:function(){var t=i(r.default.mark((function t(e){var a;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.confirm){t.next=9;break}return t.next=3,s.$api.del("address",JSON.stringify([n]));case 3:return a=t.sent,t.next=6,s.$api.list("address",{userid:this.user.id});case 6:a=t.sent,s.list=a.data.list,s.$utils.msg("删除成功");case 9:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()});case 2:case"end":return e.stop()}}),e,this)})));function n(t){return e.apply(this,arguments)}return n}()}};e.default=u}).call(this,n("543d")["default"])},"463b":function(t,e,n){},"73ed":function(t,e,n){"use strict";var r,s=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"b",(function(){return s})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return r}))},"7c57":function(t,e,n){"use strict";n.r(e);var r=n("73ed"),s=n("ebf4");for(var a in s)"default"!==a&&function(t){n.d(e,t,(function(){return s[t]}))}(a);n("3031");var i,u=n("f0c5"),c=Object(u["a"])(s["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],i);e["default"]=c.exports},beb6:function(t,e,n){"use strict";(function(t){n("d87e"),n("921b");r(n("66fd"));var e=r(n("7c57"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},ebf4:function(t,e,n){"use strict";n.r(e);var r=n("3dc3"),s=n.n(r);for(var a in r)"default"!==a&&function(t){n.d(e,t,(function(){return r[t]}))}(a);e["default"]=s.a}},[["beb6","common/runtime","common/vendor"]]]);
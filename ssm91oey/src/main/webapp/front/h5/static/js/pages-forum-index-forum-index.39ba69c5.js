(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-forum-index-forum-index"],{"0a493":function(t,e,n){"use strict";var i,a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.show?n("v-uni-view",{staticClass:"uni-noticebar",style:{backgroundColor:t.backgroundColor},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick.apply(void 0,arguments)}}},[!0===t.showClose||"true"===t.showClose?n("uni-icons",{staticClass:"uni-noticebar-close",attrs:{type:"closefill",color:t.color,size:"12"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.close.apply(void 0,arguments)}}}):t._e(),!0===t.showIcon||"true"===t.showIcon?n("uni-icons",{staticClass:"uni-noticebar-icon",attrs:{type:"sound",color:t.color,size:"14"}}):t._e(),n("v-uni-view",{ref:"textBox",staticClass:"uni-noticebar__content-wrapper",class:{"uni-noticebar__content-wrapper--scrollable":t.scrollable,"uni-noticebar__content-wrapper--single":!t.scrollable&&(t.single||t.moreText)}},[n("v-uni-view",{staticClass:"uni-noticebar__content",class:{"uni-noticebar__content--scrollable":t.scrollable,"uni-noticebar__content--single":!t.scrollable&&(t.single||t.moreText)},attrs:{id:t.elIdBox}},[n("v-uni-text",{ref:"animationEle",staticClass:"uni-noticebar__content-text",class:{"uni-noticebar__content-text--scrollable":t.scrollable,"uni-noticebar__content-text--single":!t.scrollable&&(t.single||t.moreText)},style:{color:t.color,width:t.wrapWidth+"px",animationDuration:t.animationDuration,"-webkit-animationDuration":t.animationDuration,animationPlayState:t.webviewHide?"paused":t.animationPlayState,"-webkit-animationPlayState":t.webviewHide?"paused":t.animationPlayState,animationDelay:t.animationDelay,"-webkit-animationDelay":t.animationDelay},attrs:{id:t.elId}},[t._v(t._s(t.text))])],1)],1),!0===t.showGetMore||"true"===t.showGetMore?n("v-uni-view",{staticClass:"uni-noticebar__more",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clickMore.apply(void 0,arguments)}}},[t.moreText?n("v-uni-text",{staticClass:"uni-noticebar__more-text",style:{color:t.moreColor}},[t._v(t._s(t.moreText))]):t._e(),n("uni-icons",{attrs:{type:"arrowright",color:t.moreColor,size:"14"}})],1):t._e()],1):t._e()},o=[];n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}))},"37a3":function(t,e,n){"use strict";n.r(e);var i=n("0a493"),a=n("a8a7");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("a7b4");var r,l=n("f0c5"),s=Object(l["a"])(a["default"],i["b"],i["c"],!1,null,"5080e9b4",null,!1,i["a"],r);e["default"]=s.exports},"3b2f":function(t,e,n){var i=n("e116");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("7f5e2d58",i,!0,{sourceMap:!1,shadowMode:!1})},"437d":function(t,e,n){"use strict";var i=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("96cf");var a=i(n("3b8d"));n("651d");var o=i(n("b704")),r=i(n("37a3")),l={components:{uniIcons:o.default,uniNoticeBar:r.default},data:function(){return{swiperList:[],list:[],mescroll:null,downOption:{auto:!1},upOption:{page:{},noMoreSize:3,textNoMore:"~ 没有更多了 ~"},hasNext:!0}},onShow:function(){var t=(0,a.default)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.hasNext=!0,this.mescroll&&this.mescroll.resetUpScroll();case 2:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),methods:{mescrollInit:function(t){this.mescroll=t},downCallback:function(t){this.hasNext=!0,t.resetUpScroll()},upCallback:function(){var t=(0,a.default)(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$api.allPublicForm(e.num,e.size);case 2:n=t.sent,1==e.num&&(this.list=[]),this.list=this.list.concat(n.data.list),0==n.data.list.length&&(this.hasNext=!1),e.endSuccess(e.size,this.hasNext);case 7:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),onDetailTap:function(t){this.$utils.jump("../forum-detail/forum-detail?id=".concat(t))},onSwiperTap:function(t){}}};e.default=l},"5e94":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.uni-noticebar[data-v-5080e9b4]{display:-webkit-flex;display:flex;width:100%;box-sizing:border-box;-webkit-flex-direction:row;flex-direction:row;-webkit-align-items:center;align-items:center;padding:6px 12px;margin-bottom:10px}.uni-noticebar-close[data-v-5080e9b4]{margin-right:5px}.uni-noticebar-icon[data-v-5080e9b4]{margin-right:5px}.uni-noticebar__content-wrapper[data-v-5080e9b4]{-webkit-flex:1;flex:1;-webkit-flex-direction:column;flex-direction:column;overflow:hidden}.uni-noticebar__content-wrapper--single[data-v-5080e9b4]{line-height:18px}.uni-noticebar__content-wrapper--single[data-v-5080e9b4],\n.uni-noticebar__content-wrapper--scrollable[data-v-5080e9b4]{-webkit-flex-direction:row;flex-direction:row}.uni-noticebar__content--scrollable[data-v-5080e9b4]{-webkit-flex:1;flex:1;display:block;overflow:hidden}.uni-noticebar__content--single[data-v-5080e9b4]{display:-webkit-flex;display:flex;-webkit-flex:none;flex:none;width:100%;-webkit-justify-content:center;justify-content:center}.uni-noticebar__content-text[data-v-5080e9b4]{font-size:14px;line-height:18px;word-break:break-all}.uni-noticebar__content-text--single[data-v-5080e9b4]{display:inline-block;width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.uni-noticebar__content-text--scrollable[data-v-5080e9b4]{display:inline-block;white-space:nowrap;padding-left:100%;-webkit-animation:notice-data-v-5080e9b4 10s 0s linear infinite both;animation:notice-data-v-5080e9b4 10s 0s linear infinite both;-webkit-animation-play-state:paused;animation-play-state:paused}.uni-noticebar__more[data-v-5080e9b4]{display:-webkit-inline-flex;display:inline-flex;-webkit-flex-direction:row;flex-direction:row;-webkit-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-align-items:center;align-items:center;padding-left:5px}.uni-noticebar__more-text[data-v-5080e9b4]{font-size:14px}@-webkit-keyframes notice-data-v-5080e9b4{100%{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}}@keyframes notice-data-v-5080e9b4{100%{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}}',""]),t.exports=e},6265:function(t,e,n){"use strict";var i=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("ac6a"),n("5df3"),n("6b54"),n("c5f6");var a=i(n("b704")),o={name:"UniNoticeBar",components:{uniIcons:a.default},props:{text:{type:String,default:""},moreText:{type:String,default:""},backgroundColor:{type:String,default:"#fffbe8"},speed:{type:[String,Number],default:100},color:{type:String,default:"#de8c17"},moreColor:{type:String,default:"#999999"},single:{type:[String,Boolean],default:!1},scrollable:{type:[String,Boolean],default:!1},showIcon:{type:[String,Boolean],default:!1},showGetMore:{type:[String,Boolean],default:!1},showClose:{type:[String,Boolean],default:!1}},data:function(){var t="Uni_".concat(Math.ceil(1e6*Math.random()).toString(36)),e="Uni_".concat(Math.ceil(1e6*Math.random()).toString(36));return{textWidth:0,boxWidth:0,wrapWidth:"",webviewHide:!1,elId:t,elIdBox:e,show:!0,animationDuration:"none",animationPlayState:"paused",animationDelay:"0s"}},mounted:function(){var t=this;this.$nextTick((function(){t.initSize()}))},methods:{initSize:function(){var t=this;if(this.scrollable){var e=[],n=new Promise((function(e,n){uni.createSelectorQuery().in(t).select("#".concat(t.elId)).boundingClientRect().exec((function(n){t.textWidth=n[0].width,e()}))})),i=new Promise((function(e,n){uni.createSelectorQuery().in(t).select("#".concat(t.elIdBox)).boundingClientRect().exec((function(n){t.boxWidth=n[0].width,e()}))}));e.push(n),e.push(i),Promise.all(e).then((function(){t.animationDuration="".concat(t.textWidth/t.speed,"s"),t.animationDelay="-".concat(t.boxWidth/t.speed,"s"),setTimeout((function(){t.animationPlayState="running"}),1e3)}))}},loopAnimation:function(){},clickMore:function(){this.$emit("getmore")},close:function(){this.show=!1,this.$emit("close")},onClick:function(){this.$emit("click")}}};e.default=o},6703:function(t,e,n){"use strict";var i=n("3b2f"),a=n.n(i);a.a},"6b03":function(t,e,n){"use strict";n.r(e);var i=n("437d"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},a7b4:function(t,e,n){"use strict";var i=n("c585"),a=n.n(i);a.a},a8a7:function(t,e,n){"use strict";n.r(e);var i=n("6265"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},c585:function(t,e,n){var i=n("5e94");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("312e76e6",i,!0,{sourceMap:!1,shadowMode:!1})},ceb8:function(t,e,n){"use strict";var i={"mescroll-uni":n("f05e").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("mescroll-uni",{attrs:{up:t.upOption,down:t.downOption},on:{init:function(e){arguments[0]=e=t.$handleEvent(e),t.mescrollInit.apply(void 0,arguments)},down:function(e){arguments[0]=e=t.$handleEvent(e),t.downCallback.apply(void 0,arguments)},up:function(e){arguments[0]=e=t.$handleEvent(e),t.upCallback.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"uni-padding-wrap"},[n("v-uni-view",{staticClass:"list"},[n("v-uni-view",{staticClass:"flex flex-between flex-align-center pl15 pb30"},[n("v-uni-text",{staticClass:"f28 col3"},[t._v("猫狗宠物社区专区")])],1),t._l(t.list,(function(e,i){return n("v-uni-view",{key:i,staticClass:"listm flex flex-between",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.onDetailTap(e.id)}}},[n("v-uni-image",{staticClass:"listmpic mt10",attrs:{src:"/static/exam-index/paper.png",mode:"widthFix"}}),n("v-uni-view",{staticClass:"listmr"},[n("v-uni-view",{staticClass:"col3 f30 elip mb15"},[t._v(t._s(e.title))]),n("v-uni-view",{staticClass:"colb f24 lh35"},[t._v(t._s(e.content.length>50?e.content.substring(0,50)+"... ...":e.content))]),n("v-uni-view",{staticClass:"flex flex-align-center mt20"},[n("v-uni-text",{staticClass:"colb f25"},[t._v("发布人："+t._s(e.username))])],1),n("v-uni-view",{staticClass:"flex flex-align-center mt20 colb f25"},[t._v("发布时间："+t._s(e.addtime))])],1)],1)}))],2)],1)],1)},o=[];n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}))},e116:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'uni-view[data-v-4e5f9080]{font-family:"\\5FAE\\8F6F\\96C5\\9ED1";font-size:%?30?%}uni-page-body[data-v-4e5f9080]{background:#ededed}.header[data-v-4e5f9080]{background:#f39800;padding:%?15?% %?20?% %?255?%;position:relative}.ssbox[data-v-4e5f9080]{background:hsla(0,0%,100%,.35);width:%?530?%;border-radius:%?60?%;padding:%?10?% %?15?%;box-sizing:border-box}.ss_input[data-v-4e5f9080]{border:none;width:%?450?%;font-size:%?30?%;color:#fff;background:none;height:%?45?%;line-break:%?45?%}.headerb[data-v-4e5f9080]{position:absolute;left:0;top:%?60?%;width:100%;box-sizing:border-box;padding:0 %?20?%}.headerb uni-image[data-v-4e5f9080]{width:%?710?%;box-shadow:0 %?10?% 10px rgba(0,0,0,.3);border-radius:%?40?%;position:relative;z-index:10}.notice[data-v-4e5f9080]{position:relative;z-index:5;padding:0 %?50?%}.noticem[data-v-4e5f9080]{background:#fff;padding:%?55?% %?30?% %?15?%;border-radius:%?10?%;box-shadow:0 0 10px rgba(0,0,0,.3);margin-top:%?-45?%}.noticer[data-v-4e5f9080]{width:%?480?%;height:%?50?%}.noticer .swiper-item[data-v-4e5f9080]{white-space:nowrap;text-overflow:ellipsis;overflow:hidden;height:%?50?%;line-height:%?50?%;font-size:%?24?%}.list[data-v-4e5f9080]{padding:%?50?% %?20?% %?20?%}.listm[data-v-4e5f9080]{background:#fff;border-radius:%?15?%;box-shadow:0 0 10px rgba(0,0,0,.3);margin-bottom:%?20?%;padding:%?30?%}.listmpic[data-v-4e5f9080]{border-radius:%?10?%;width:%?166?%}.listmr[data-v-4e5f9080]{width:%?460?%;display:inline-block}\n\n\n\n\n\n\n\n\n\nbody.?%PAGE?%[data-v-4e5f9080]{background:#ededed}',""]),t.exports=e},e9ae:function(t,e,n){"use strict";n.r(e);var i=n("ceb8"),a=n("6b03");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("6703");var r,l=n("f0c5"),s=Object(l["a"])(a["default"],i["b"],i["c"],!1,null,"4e5f9080",null,!1,i["a"],r);e["default"]=s.exports}}]);
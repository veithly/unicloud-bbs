(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-history-history"],{bff0:function(e,t,a){"use strict";(function(e,n){var r=a("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("96cf");var o=r(a("1da1")),i=r(a("770b")),u={mixins:[i.default],data:function(){var t=e.getCurrentUserInfo(),a=t.uid,n=this.$Q,r=n.aE,o=n.useFk,i=o("post_id"),u=r(r("post_id.imgs.url")),s=this.$Q(["create_date",i("title"),i("_id","pid"),"".concat(u,"|cover")]);return{uid:a,field:s}},onReachBottom:function(){this.$refs.udb.loadMore()},onPullDownRefresh:function(){this.$refs.udb.loadData({clear:!0},uni.stopPullDownRefresh)},methods:{toPostPage:function(e){var t=this;return(0,o.default)(regeneratorRuntime.mark((function a(){var r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,uni.showLoading({title:"加载中"}),a.next=4,t.$A.post.show({_id:e.pid,uid:t.uid});case 4:r=a.sent,uni.setStorageSync("post",r),uni.navigateTo({url:"/pages/post/post"}),a.next=12;break;case 9:a.prev=9,a.t0=a["catch"](0),n("log",a.t0.message," at pages/history/history.vue:61");case 12:return a.prev=12,uni.hideLoading(),a.finish(12);case 15:case"end":return a.stop()}}),a,null,[[0,9,12,15]])})))()}}};t.default=u}).call(this,a("a9ff")["default"],a("0de9")["log"])},cefd:function(e,t,a){"use strict";a.r(t);var n=a("d45a"),r=a("e58d");for(var o in r)"default"!==o&&function(e){a.d(t,e,(function(){return r[e]}))}(o);var i,u=a("f0c5"),s=Object(u["a"])(r["default"],n["b"],n["c"],!1,null,"6904ce31",null,!1,n["a"],i);t["default"]=s.exports},d45a:function(e,t,a){"use strict";a.d(t,"b",(function(){return r})),a.d(t,"c",(function(){return o})),a.d(t,"a",(function(){return n}));var n={cSticky:a("4a0a").default,cStatusBar:a("0aad").default,cPageHeader:a("037b").default,unicloudDb:a("960d").default,cPostTip:a("8561").default,cScrollLoadMore:a("4b83").default,cBackTop:a("048f").default},r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",[a("c-sticky",[a("c-status-bar"),a("c-page-header",{attrs:{title:"历史记录"}})],1),a("unicloud-db",{ref:"udb",attrs:{collection:"history,posts",where:"user_id=='"+e.uid+"'",field:e.field,orderby:"create_date desc"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.data,r=t.loading,o=t.error,i=t.hasMore;return[o?a("v-uni-view",[e._v(e._s(o.message))]):a("v-uni-view",[e._l(n,(function(t){return a("c-post-tip",{key:t._id,attrs:{v:t},on:{toPostPage:function(t){arguments[0]=t=e.$handleEvent(t),e.toPostPage.apply(void 0,arguments)}}})})),a("c-scroll-load-more",{attrs:{loading:r,hasMore:i}})],2)]}}])}),a("c-back-top")],1)},o=[]},e58d:function(e,t,a){"use strict";a.r(t);var n=a("bff0"),r=a.n(n);for(var o in n)"default"!==o&&function(e){a.d(t,e,(function(){return n[e]}))}(o);t["default"]=r.a}}]);
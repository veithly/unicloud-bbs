(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/like/like"],{"3d4f":function(n,e,t){"use strict";t.r(e);var o=t("6336"),r=t("c9b0");for(var u in r)"default"!==u&&function(n){t.d(e,n,(function(){return r[n]}))}(u);var c,a=t("f0c5"),i=Object(a["a"])(r["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],c);e["default"]=i.exports},"4d5e":function(n,e,t){"use strict";(function(n){t("d48a");o(t("66fd"));var e=o(t("3d4f"));function o(n){return n&&n.__esModule?n:{default:n}}wx.__webpack_require_UNI_MP_PLUGIN__=t,n(e.default)}).call(this,t("543d")["createPage"])},6336:function(n,e,t){"use strict";t.d(e,"b",(function(){return r})),t.d(e,"c",(function(){return u})),t.d(e,"a",(function(){return o}));var o={cSticky:function(){return t.e("components/c-sticky/c-sticky").then(t.bind(null,"4a0a"))},cStatusBar:function(){return t.e("components/c-status-bar/c-status-bar").then(t.bind(null,"0aad"))},cPageHeader:function(){return t.e("components/c-page-header/c-page-header").then(t.bind(null,"037b"))},unicloudDb:function(){return Promise.all([t.e("common/vendor"),t.e("node-modules/@dcloudio/uni-cli-shared/components/unicloud-db")]).then(t.bind(null,"960d"))},cPostTip:function(){return t.e("components/c-post-tip/c-post-tip").then(t.bind(null,"8561"))},cScrollLoadMore:function(){return t.e("components/c-scroll-load-more/c-scroll-load-more").then(t.bind(null,"4b83"))},cBackTop:function(){return t.e("components/c-back-top/c-back-top").then(t.bind(null,"048f"))}},r=function(){var n=this,e=n.$createElement;n._self._c},u=[]},c9b0:function(n,e,t){"use strict";t.r(e);var o=t("f04a"),r=t.n(o);for(var u in o)"default"!==u&&function(n){t.d(e,n,(function(){return o[n]}))}(u);e["default"]=r.a},f04a:function(n,e,t){"use strict";(function(n,o){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=c(t("a34a")),u=c(t("770b"));function c(n){return n&&n.__esModule?n:{default:n}}function a(n,e,t,o,r,u,c){try{var a=n[u](c),i=a.value}catch(l){return void t(l)}a.done?e(i):Promise.resolve(i).then(o,r)}function i(n){return function(){var e=this,t=arguments;return new Promise((function(o,r){var u=n.apply(e,t);function c(n){a(u,o,r,c,i,"next",n)}function i(n){a(u,o,r,c,i,"throw",n)}c(void 0)}))}}var l={mixins:[u.default],data:function(){var e=n.getCurrentUserInfo(),t=e.uid,o=this.$Q.aE,r=o("imgs.url"),u=this.$Q(["title","".concat(r,"|cover")]);return{uid:t,field:u}},onReachBottom:function(){this.$refs.udb.loadMore()},onPullDownRefresh:function(){this.$refs.udb.loadData({clear:!0},o.stopPullDownRefresh)},methods:{toPostPage:function(n){var e=this;return i(r.default.mark((function t(){var u;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,o.showLoading({title:"加载中"}),t.next=4,e.$A.post.show({_id:n._id,uid:e.uid});case 4:u=t.sent,o.setStorageSync("post",u),o.navigateTo({url:"/pages/post/post"}),t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](0),console.log(t.t0.message);case 12:return t.prev=12,o.hideLoading(),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[0,9,12,15]])})))()}}};e.default=l}).call(this,t("a9ff")["default"],t("543d")["default"])}},[["4d5e","common/runtime","common/vendor"]]]);
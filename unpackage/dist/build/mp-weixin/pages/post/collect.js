(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/post/collect"],{4641:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(e("a34a"));function u(n){return n&&n.__esModule?n:{default:n}}function c(n,t,e,r,u,c,o){try{var i=n[c](o),a=i.value}catch(f){return void e(f)}i.done?t(a):Promise.resolve(a).then(r,u)}function o(n){return function(){var t=this,e=arguments;return new Promise((function(r,u){var o=n.apply(t,e);function i(n){c(o,r,u,i,a,"next",n)}function a(n){c(o,r,u,i,a,"throw",n)}i(void 0)}))}}var i={props:{c_id:{type:String,default:""}},methods:{resolveCollect:function(n){var t=this;return o(r.default.mark((function e(){var u,c,o,i;return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:u=n.useLoading(),c=function(n){return t.$U.notice(n)},o=function(){t.c_id?t.$U.notice("取消收藏成功"):t.$U.notice("收藏成功")},i=function(){return u()},t.$emit("collect",{id:t.c_id,fail:c,success:o,complete:i});case 5:case"end":return e.stop()}}),e)})))()}}};t.default=i},"51b9":function(n,t,e){"use strict";e.r(t);var r=e("9a3b"),u=e("b9de");for(var c in u)"default"!==c&&function(n){e.d(t,n,(function(){return u[n]}))}(c);e("d572");var o,i=e("f0c5"),a=Object(i["a"])(u["default"],r["b"],r["c"],!1,null,"c2a11916",null,!1,r["a"],o);t["default"]=a.exports},"8d6e":function(n,t,e){},"9a3b":function(n,t,e){"use strict";e.d(t,"b",(function(){return u})),e.d(t,"c",(function(){return c})),e.d(t,"a",(function(){return r}));var r={cTemp:function(){return e.e("components/c-temp/c-temp").then(e.bind(null,"74f7"))}},u=function(){var n=this,t=n.$createElement;n._self._c},c=[]},b9de:function(n,t,e){"use strict";e.r(t);var r=e("4641"),u=e.n(r);for(var c in r)"default"!==c&&function(n){e.d(t,n,(function(){return r[n]}))}(c);t["default"]=u.a},d572:function(n,t,e){"use strict";var r=e("8d6e"),u=e.n(r);u.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/post/collect-create-component',
    {
        'pages/post/collect-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("51b9"))
        })
    },
    [['pages/post/collect-create-component']]
]);

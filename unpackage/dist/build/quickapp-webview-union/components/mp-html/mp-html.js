(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/mp-html/mp-html"],{"0847":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=function(){n.e("components/mp-html/node/node").then(function(){return resolve(n("e2c6"))}.bind(null,n)).catch(n.oe)},o=[n("424a"),n("9a00"),n("25e1")],r=n("c79b"),a={name:"mp-html",data:function(){return{tooltip:null,slider:null,nodes:[]}},props:{editable:Boolean,placeholder:String,ImgCache:Boolean,containerStyle:{type:String,default:""},content:String,copyLink:{type:[Boolean,String],default:!0},domain:String,errorImg:{type:String,default:""},lazyLoad:{type:[Boolean,String],default:!1},loadingImg:{type:String,default:""},pauseVideo:{type:[Boolean,String],default:!0},previewImg:{type:[Boolean,String],default:!0},scrollTable:[Boolean,String],selectable:[Boolean,String],setTitle:{type:[Boolean,String],default:!0},showImgMenu:{type:[Boolean,String],default:!0},tagStyle:Object,useAnchor:[Boolean,Number]},components:{node:i},watch:{editable:function(t){this.setContent(t?this.content:this.getContent()),t||this._maskTap()},content:function(t){this.setContent(t)}},created:function(){this.plugins=[];for(var t=o.length;t--;)this.plugins.push(new o[t](this))},mounted:function(){!this.content&&!this.editable||this.nodes.length||this.setContent(this.content)},beforeDestroy:function(){this._hook("onDetached"),clearInterval(this._timer)},methods:{_containTap:function(){this._lock||this.slider||(this._edit=void 0,this._maskTap())},_tooltipTap:function(t){this._tooltipcb(t.currentTarget.dataset.i),this.$set(this,"tooltip",null)},_sliderChanging:function(t){this._slideringcb(t.detail.value)},_sliderChange:function(t){this._slidercb(t.detail.value)},in:function(t,e,n){t&&e&&n&&(this._in={page:t,selector:e,scrollTop:n})},navigateTo:function(e,n){var i=this;return new Promise((function(o,r){if(i.useAnchor){n=n||parseInt(i.useAnchor)||0;var a=" ",l=t.createSelectorQuery().in(i._in?i._in.page:i).select((i._in?i._in.selector:"._root")+(e?"".concat(a,"#").concat(e):"")).boundingClientRect();i._in?l.select(i._in.selector).scrollOffset().select(i._in.selector).boundingClientRect():l.selectViewport().scrollOffset(),l.exec((function(e){if(e[0]){var a=e[1].scrollTop+e[0].top-(e[2]?e[2].top:0)+n;i._in?i._in.page[i._in.scrollTop]=a:t.pageScrollTo({scrollTop:a,duration:300}),o()}else r(Error("Label not found"))}))}else r(Error("Anchor is disabled"))}))},getText:function(t){var e="";return function t(n){for(var i=0;i<n.length;i++){var o=n[i];if("text"===o.type)e+=o.text.replace(/&amp;/g,"&");else if("br"===o.name)e+="\n";else{var r="p"===o.name||"div"===o.name||"tr"===o.name||"li"===o.name||"h"===o.name[0]&&o.name[1]>"0"&&o.name[1]<"7";r&&e&&"\n"!==e[e.length-1]&&(e+="\n"),o.children&&t(o.children),r&&"\n"!==e[e.length-1]?e+="\n":"td"!==o.name&&"th"!==o.name||(e+="\t")}}}(t||this.nodes),e},getRect:function(){var e=this;return new Promise((function(n,i){t.createSelectorQuery().in(e).select("#_root").boundingClientRect().exec((function(t){return t[0]?n(t[0]):i(Error("Root label not found"))}))}))},setContent:function(t,e){var n=this;e&&this.imgList||(this.imgList=[]);var i,o=new r(this).parse(t);this.$set(this,"nodes",e?(this.nodes||[]).concat(o):o),this._videos=[],this.$nextTick((function(){n._hook("onLoad"),n.$emit("load")})),clearInterval(this._timer),this._timer=setInterval((function(){n.getRect().then((function(t){t.height===i&&(n.$emit("ready",t),clearInterval(n._timer)),i=t.height})).catch((function(){}))}),350)},_hook:function(t){for(var e=o.length;e--;)this.plugins[e][t]&&this.plugins[e][t]()}}};e.default=a}).call(this,n("8adf")["default"])},"896f":function(t,e,n){"use strict";var i=n("fa33"),o=n.n(i);o.a},"96d0":function(t,e,n){"use strict";n.r(e);var i=n("b7fa"),o=n("f620");for(var r in o)"default"!==r&&function(t){n.d(e,t,(function(){return o[t]}))}(r);n("896f");var a,l=n("f0c5"),c=Object(l["a"])(o["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],a);e["default"]=c.exports},b7fa:function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}));var o=function(){var t=this,e=t.$createElement;t._self._c},r=[]},f620:function(t,e,n){"use strict";n.r(e);var i=n("0847"),o=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=o.a},fa33:function(t,e,n){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/mp-html/mp-html-create-component',
    {
        'components/mp-html/mp-html-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('8adf')['createComponent'](__webpack_require__("96d0"))
        })
    },
    [['components/mp-html/mp-html-create-component']]
]);

(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["node-modules/@dcloudio/uni-cli-shared/components/unicloud-db"],{"348c":function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var a=function(){var t=this,e=t.$createElement;t._self._c;"augmented"===t.$scope.data.scopedSlotsCompiler&&t.$setScopedSlotsParams("default",{options:t.options,data:t.dataList,pagination:t.paginationInternal,loading:t.loading,hasMore:t.hasMore,error:t.errorMessage})},o=[]},"848e":function(t,e,n){"use strict";n.r(e);var i=n("c693"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},"960d":function(t,e,n){"use strict";n.r(e);var i=n("348c"),a=n("848e");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);var r,s=n("f0c5"),c=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],r);e["default"]=c.exports},c693:function(t,e,n){"use strict";(function(t,i){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n("37dc"),o=r(n("11d2"));function r(t){return t&&t.__esModule?t:{default:t}}function s(t){return u(t)||d(t)||l(t)||c()}function c(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function l(t,e){if(t){if("string"===typeof t)return h(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?h(t,e):void 0}}function d(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function u(t){if(Array.isArray(t))return h(t)}function h(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}var f=(0,a.initVueI18n)(o.default),g=f.t,p={load:"load",error:"error"},m={add:"add",replace:"replace"},y={auto:"auto",onready:"onready",manual:"manual"},v=["pageCurrent","pageSize","spaceInfo","collection","action","field","getcount","orderby","where","groupby","groupField","distinct"],b={name:"UniClouddb",props:{options:{type:[Object,Array],default:function(){return{}}},spaceInfo:{type:Object,default:function(){return{}}},collection:{type:[String,Array],default:""},action:{type:String,default:""},field:{type:String,default:""},orderby:{type:String,default:""},where:{type:[String,Object],default:""},pageData:{type:String,default:"add"},pageCurrent:{type:Number,default:1},pageSize:{type:Number,default:20},getcount:{type:[Boolean,String],default:!1},getone:{type:[Boolean,String],default:!1},gettree:{type:[Boolean,String,Object],default:!1},gettreepath:{type:[Boolean,String],default:!1},startwith:{type:String,default:""},limitlevel:{type:Number,default:10},groupby:{type:String,default:""},groupField:{type:String,default:""},distinct:{type:[Boolean,String],default:!1},pageIndistinct:{type:[Boolean,String],default:!1},foreignKey:{type:String,default:""},loadtime:{type:String,default:"auto"},manual:{type:Boolean,default:!1}},data:function(){return{loading:!1,hasMore:!1,dataList:this.getone?void 0:[],paginationInternal:{},errorMessage:""}},computed:{collectionArgs:function(){return Array.isArray(this.collection)?this.collection:[this.collection]},isLookup:function(){return Array.isArray(this.collection)&&this.collection.length>1||"string"===typeof this.collection&&this.collection.indexOf(",")>-1},mainCollection:function(){if("string"===typeof this.collection)return this.collection.split(",")[0];var t=JSON.parse(JSON.stringify(this.collection[0]));return t.$db[0].$param[0]}},created:function(){var t=this;this._isEnded=!1,this.paginationInternal={current:this.pageCurrent,size:this.pageSize,count:0},this.$watch((function(){var e=[];return v.forEach((function(n){e.push(t[n])})),e}),(function(e,n){if(t.paginationInternal.size=t.pageSize,e[0]!==n[0]&&(t.paginationInternal.current=t.pageCurrent),t.loadtime!==y.manual){for(var i=!1,a=2;a<e.length;a++)if(e[a]!==n[a]){i=!0;break}i&&(t.clear(),t.reset()),t._execLoadData()}})),this.manual||this.loadtime!==y.auto||this.loadData()},methods:{loadData:function(t,e){var n=null,i=!1;"object"===typeof t?(t.clear&&(this.pageData===m.replace?this.clear():i=t.clear,this.reset()),void 0!==t.current&&(this.paginationInternal.current=t.current),"function"===typeof e&&(n=e)):"function"===typeof t&&(n=t),this._execLoadData(n,i)},loadMore:function(){this._isEnded||this.loading||(this.pageData===m.add&&this.paginationInternal.current++,this._execLoadData())},refresh:function(){this.clear(),this._execLoadData()},clear:function(){this._isEnded=!1,this.dataList=[]},reset:function(){this.paginationInternal.current=1},add:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=n.action,o=n.showToast,r=void 0===o||o,s=n.toastTitle,c=n.success,l=n.fail,d=n.complete,u=n.needConfirm,h=void 0===u||u,f=n.needLoading,p=void 0===f||f,m=n.loadingTitle,y=void 0===m?"":m;p&&t.showLoading({title:y});var v=i.database(this.spaceInfo);a&&(v=v.action(a)),v.collection(this.mainCollection).add(e).then((function(e){c&&c(e),r&&t.showToast({title:s||g("uniCloud.component.add.success")})})).catch((function(e){l&&l(e),h&&t.showModal({content:e.message,showCancel:!1})})).finally((function(){p&&t.hideLoading(),d&&d()}))},remove:function(e){var n=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=i.action,o=i.success,r=i.fail,s=i.complete,c=i.confirmTitle,l=i.confirmContent,d=i.needConfirm,u=void 0===d||d,h=i.needLoading,f=void 0===h||h,p=i.loadingTitle,m=void 0===p?"":p;e&&e.length&&(u?t.showModal({title:c||g("uniCloud.component.remove.showModal.title"),content:l||g("uniCloud.component.remove.showModal.content"),showCancel:!0,success:function(t){t.confirm&&n._execRemove(e,a,o,r,s,u,f,m)}}):this._execRemove(e,a,o,r,s,u,f,m))},update:function(e,n){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=a.action,r=a.showToast,s=void 0===r||r,c=a.toastTitle,l=a.success,d=a.fail,u=a.complete,h=a.needConfirm,f=void 0===h||h,p=a.needLoading,m=void 0===p||p,y=a.loadingTitle,v=void 0===y?"":y;m&&t.showLoading({title:v});var b=i.database(this.spaceInfo);return o&&(b=b.action(o)),b.collection(this.mainCollection).doc(e).update(n).then((function(e){l&&l(e),s&&t.showToast({title:c||g("uniCloud.component.update.success")})})).catch((function(e){d&&d(e),f&&t.showModal({content:e.message,showCancel:!1})})).finally((function(){m&&t.hideLoading(),u&&u()}))},getTemp:function(){var t,e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],n=i.database(this.spaceInfo);this.action&&(n=n.action(this.action)),n=(t=n).collection.apply(t,s(this.collectionArgs)),this.where&&Object.keys(this.where).length&&(n=n.where(this.where)),this.field&&(n=n.field(this.field)),this.foreignKey&&(n=n.foreignKey(this.foreignKey)),this.groupby&&(n=n.groupBy(this.groupby)),this.groupField&&(n=n.groupField(this.groupField)),!0===this.distinct&&(n=n.distinct()),this.orderby&&(n=n.orderBy(this.orderby));var a=this.paginationInternal,o=a.current,r=a.size,c={};this.getcount&&(c.getCount=this.getcount);var l={limitLevel:this.limitlevel,startWith:this.startwith};return this.gettree&&(c.getTree=l),this.gettreepath&&(c.getTreePath=l),n=n.skip(r*(o-1)).limit(r),e?(n=n.getTemp(c),n.udb=this):n=n.get(c),n},setResult:function(t){0===t.code?this._execLoadDataSuccess(t):this._execLoadDataFail(new Error(t.message))},_execLoadData:function(t,e){var n=this;this.loading||(this.loading=!0,this.errorMessage="",this._getExec().then((function(i){n.loading=!1,n._execLoadDataSuccess(i.result,t,e)})).catch((function(e){n.loading=!1,n._execLoadDataFail(e,t)})))},_execLoadDataSuccess:function(t,e,n){var i=t.data,a=t.count;this._isEnded=void 0!==a?this.paginationInternal.current*this.paginationInternal.size>=a:i.length<this.pageSize,this.hasMore=!this._isEnded;var o,r=this.getone?i.length?i[0]:void 0:i;(this.getcount&&(this.paginationInternal.count=a),e&&e(r,this._isEnded,this.paginationInternal),this._dispatchEvent(p.load,r),this.getone||this.pageData===m.replace)?this.dataList=r:n?this.dataList=r:(o=this.dataList).push.apply(o,s(r))},_execLoadDataFail:function(t,e){this.errorMessage=t,e&&e(),this.$emit(p.error,t)},_getExec:function(){return this.getTemp(!1)},_execRemove:function(e,n,a,o,r,s,c,l){var d=this;if(this.collection&&e){var u=Array.isArray(e)?e:[e];if(u.length){c&&t.showLoading({mask:!0,title:l});var h=i.database(this.spaceInfo),f=h.command,g=h;n&&(g=g.action(n)),g.collection(this.mainCollection).where({_id:f.in(u)}).remove().then((function(t){a&&a(t.result),d.pageData===m.replace?d.refresh():d.removeData(u)})).catch((function(e){o&&o(e),s&&t.showModal({content:e.message,showCancel:!1})})).finally((function(){c&&t.hideLoading(),r&&r()}))}}},removeData:function(t){for(var e=t.slice(0),n=this.dataList,i=n.length-1;i>=0;i--){var a=e.indexOf(n[i]._id);a>=0&&(n.splice(i,1),e.splice(a,1))}},_dispatchEvent:function(t,e){this._changeDataFunction?this._changeDataFunction(e,this._isEnded,this.paginationInternal):this.$emit(t,e,this._isEnded,this.paginationInternal)}}};e.default=b}).call(this,n("8adf")["default"],n("a9ff")["default"])}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'node-modules/@dcloudio/uni-cli-shared/components/unicloud-db-create-component',
    {
        'node-modules/@dcloudio/uni-cli-shared/components/unicloud-db-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('8adf')['createComponent'](__webpack_require__("960d"))
        })
    },
    [['node-modules/@dcloudio/uni-cli-shared/components/unicloud-db-create-component']]
]);

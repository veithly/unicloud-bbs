(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/uni-file-picker/components/uni-file-picker/uni-file-picker"],{"42e4":function(e,t,n){},6085:function(e,t,n){"use strict";n.r(t);var i=n("ccb1"),r=n.n(i);for(var s in i)"default"!==s&&function(e){n.d(t,e,(function(){return i[e]}))}(s);t["default"]=r.a},ccb1:function(e,t,n){"use strict";(function(e,i){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(n("a34a")),s=n("0e70"),a=n("e967");function u(e){return e&&e.__esModule?e:{default:e}}function l(e){return p(e)||f(e)||c(e)||o()}function o(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(e,t){if(e){if("string"===typeof e)return h(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?h(e,t):void 0}}function f(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function p(e){if(Array.isArray(e))return h(e)}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function g(e,t,n,i,r,s,a){try{var u=e[s](a),l=u.value}catch(o){return void n(o)}u.done?t(l):Promise.resolve(l).then(i,r)}function y(e){return function(){var t=this,n=arguments;return new Promise((function(i,r){var s=e.apply(t,n);function a(e){g(s,i,r,a,u,"next",e)}function u(e){g(s,i,r,a,u,"throw",e)}a(void 0)}))}}var v=function(){n.e("uni_modules/uni-file-picker/components/uni-file-picker/upload-image").then(function(){return resolve(n("78a2"))}.bind(null,n)).catch(n.oe)},x=function(){n.e("uni_modules/uni-file-picker/components/uni-file-picker/upload-file").then(function(){return resolve(n("a061"))}.bind(null,n)).catch(n.oe)},k={name:"uniFilePicker",components:{uploadImage:v,uploadFile:x},emits:["select","success","fail","progress","delete","update:modelValue","input"],props:{value:{type:[Array,Object],default:function(){return[]}},disabled:{type:Boolean,default:!1},disablePreview:{type:Boolean,default:!1},delIcon:{type:Boolean,default:!0},autoUpload:{type:Boolean,default:!0},limit:{type:[Number,String],default:9},mode:{type:String,default:"grid"},fileMediatype:{type:String,default:"image"},fileExtname:{type:[Array,String],default:function(){return[]}},title:{type:String,default:""},listStyles:{type:Object,default:function(){return{border:!0,dividline:!0,borderStyle:{}}}},imageStyles:{type:Object,default:function(){return{width:"auto",height:"auto"}}},readonly:{type:Boolean,default:!1},returnType:{type:String,default:"array"},sizeType:{type:Array,default:function(){return["original","compressed"]}}},data:function(){return{files:[],localValue:[]}},watch:{value:{handler:function(e,t){this.setValue(e,t)},immediate:!0}},computed:{filesList:function(){var e=[];return this.files.forEach((function(t){e.push(t)})),e},showType:function(){return"image"===this.fileMediatype?this.mode:"list"},limitLength:function(){return"object"===this.returnType?1:this.limit?this.limit>=9?9:this.limit:1}},created:function(){e.config&&e.config.provider||(this.noSpace=!0,e.chooseAndUploadFile=s.chooseAndUploadFile),this.form=this.getForm("uniForms"),this.formItem=this.getForm("uniFormsItem"),this.form&&this.formItem&&this.formItem.name&&(this.rename=this.formItem.name,this.form.inputChildrens.push(this))},methods:{clearFiles:function(e){var t=this;0===e||e?this.files.splice(e,1):(this.files=[],this.$nextTick((function(){t.setEmit()}))),this.$nextTick((function(){t.setEmit()}))},upload:function(){var e=[];this.files.forEach((function(t,n){"ready"!==t.status&&"error"!==t.status||e.push(Object.assign({},t))})),this.uploadFiles(e)},setValue:function(e,t){var n=this;return y(r.default.mark((function t(){var i,s,a,u;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(i=function(){var e=y(r.default.mark((function e(t){var i,s;return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(i=/cloud:\/\/([\w.]+\/?)\S*/,s="",s=t.fileID?t.fileID:t.url,!i.test(s)){e.next=8;break}return t.fileID=s,e.next=7,n.getTempFileURL(s);case 7:t.url=e.sent;case 8:return t.path=t.url,e.abrupt("return",t);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),"object"!==n.returnType){t.next=10;break}if(!e){t.next=7;break}return t.next=5,i(e);case 5:t.next=8;break;case 7:e={};case 8:t.next=19;break;case 10:e||(e=[]),s=0;case 12:if(!(s<e.length)){t.next=19;break}return a=e[s],t.next=16,i(a);case 16:s++,t.next=12;break;case 19:n.localValue=e,n.form&&n.formItem&&!n.is_reset&&(n.is_reset=!1,n.formItem.setValue(n.localValue)),u=Object.keys(e).length>0?e:[],n.files=[].concat(u);case 23:case"end":return t.stop()}}),t)})))()},choose:function(){this.disabled||(this.files.length>=Number(this.limitLength)&&"grid"!==this.showType&&"array"===this.returnType?i.showToast({title:"您最多选择 ".concat(this.limitLength," 个文件"),icon:"none"}):this.chooseFiles())},chooseFiles:function(){var t=this,n=(0,a.get_extname)(this.fileExtname);e.chooseAndUploadFile({type:this.fileMediatype,compressed:!1,sizeType:this.sizeType,extension:n.length>0?n:void 0,count:this.limitLength-this.files.length,onChooseFile:this.chooseFileCallback,onUploadProgress:function(e){t.setProgress(e,e.index)}}).then((function(e){t.setSuccessAndError(e.tempFiles)})).catch((function(e){console.log("选择失败",e)}))},chooseFileCallback:function(e){var t=this;return y(r.default.mark((function n(){var i,s,u,l,o,c,f,p;return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:i=(0,a.get_extname)(t.fileExtname),s=1===Number(t.limitLength)&&t.disablePreview&&!t.disabled||"object"===t.returnType,s&&(t.files=[]),u=(0,a.get_files_and_is_max)(e,i),l=u.filePaths,o=u.files,i&&i.length>0||(l=e.tempFilePaths,o=e.tempFiles),c=[],f=0;case 7:if(!(f<o.length)){n.next=21;break}if(!(t.limitLength-t.files.length<=0)){n.next=10;break}return n.abrupt("break",21);case 10:return o[f].uuid=Date.now(),n.next=13,(0,a.get_file_data)(o[f],t.fileMediatype);case 13:p=n.sent,p.progress=0,p.status="ready",t.files.push(p),c.push(m(m({},p),{},{file:o[f]}));case 18:f++,n.next=7;break;case 21:t.$emit("select",{tempFiles:c,tempFilePaths:l}),e.tempFiles=o,t.autoUpload&&!t.noSpace||(e.tempFiles=[]);case 24:case"end":return n.stop()}}),n)})))()},uploadFiles:function(e){var t=this;e=[].concat(e),s.uploadCloudFiles.call(this,e,5,(function(e){t.setProgress(e,e.index,!0)})).then((function(e){t.setSuccessAndError(e)})).catch((function(e){console.log(e)}))},setSuccessAndError:function(e,t){var n=this;return y(r.default.mark((function t(){var i,s,a,u,l,o,c;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:i=[],s=[],a=[],u=[],l=r.default.mark((function t(l){var o,c,f;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(o=e[l],c=o.uuid?n.files.findIndex((function(e){return e.uuid===o.uuid})):o.index,-1!==c&&n.files){t.next=4;break}return t.abrupt("return","break");case 4:if("request:fail"!==o.errMsg){t.next=12;break}n.files[c].url=o.path,n.files[c].status="error",n.files[c].errMsg=o.errMsg,s.push(n.files[c]),u.push(n.files[c].url),t.next=26;break;case 12:if(n.files[c].errMsg="",n.files[c].fileID=o.url,f=/cloud:\/\/([\w.]+\/?)\S*/,!f.test(o.url)){t.next=21;break}return t.next=18,n.getTempFileURL(o.url);case 18:n.files[c].url=t.sent,t.next=22;break;case 21:n.files[c].url=o.url;case 22:n.files[c].status="success",n.files[c].progress+=1,i.push(n.files[c]),a.push(n.files[c].fileID);case 26:case"end":return t.stop()}}),t)})),o=0;case 6:if(!(o<e.length)){t.next=14;break}return t.delegateYield(l(o),"t0",8);case 8:if(c=t.t0,"break"!==c){t.next=11;break}return t.abrupt("break",14);case 11:o++,t.next=6;break;case 14:i.length>0&&(n.setEmit(),n.$emit("success",{tempFiles:n.backObject(i),tempFilePaths:a})),s.length>0&&n.$emit("fail",{tempFiles:n.backObject(s),tempFilePaths:u});case 16:case"end":return t.stop()}}),t)})))()},setProgress:function(e,t,n){this.files.length;var i=Math.round(100*e.loaded/e.total),r=t;n||(r=this.files.findIndex((function(t){return t.uuid===e.tempFile.uuid}))),-1!==r&&this.files[r]&&(this.files[r].progress=i-1,this.$emit("progress",{index:r,progress:parseInt(i),tempFile:this.files[r]}))},delFile:function(e){var t=this;this.$emit("delete",{tempFile:this.files[e],tempFilePath:this.files[e].url}),this.files.splice(e,1),this.$nextTick((function(){t.setEmit()}))},getFileExt:function(e){var t=e.lastIndexOf("."),n=e.length;return{name:e.substring(0,t),ext:e.substring(t+1,n)}},setEmit:function(){var e=[];"object"===this.returnType?(e=this.backObject(this.files)[0],this.localValue=e||null):(e=this.backObject(this.files),this.localValue||(this.localValue=[]),this.localValue=l(e)),this.$emit("input",this.localValue)},backObject:function(e){var t=[];return e.forEach((function(e){t.push({extname:e.extname,fileType:e.fileType,image:e.image,name:e.name,path:e.path,size:e.size,fileID:e.fileID,url:e.url})})),t},getTempFileURL:function(t){return y(r.default.mark((function n(){var i;return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t={fileList:[].concat(t)},n.next=3,e.getTempFileURL(t);case 3:return i=n.sent,n.abrupt("return",i.fileList[0].tempFileURL||"");case 5:case"end":return n.stop()}}),n)})))()},getForm:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"uniForms",t=this.$parent,n=t.$options.name;while(n!==e){if(t=t.$parent,!t)return!1;n=t.$options.name}return t}}};t.default=k}).call(this,n("a9ff")["default"],n("8adf")["default"])},d672:function(e,t,n){"use strict";var i;n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return s})),n.d(t,"a",(function(){return i}));var r=function(){var e=this,t=e.$createElement;e._self._c},s=[]},e60a:function(e,t,n){"use strict";var i=n("42e4"),r=n.n(i);r.a},ec25:function(e,t,n){"use strict";n.r(t);var i=n("d672"),r=n("6085");for(var s in r)"default"!==s&&function(e){n.d(t,e,(function(){return r[e]}))}(s);n("e60a");var a,u=n("f0c5"),l=Object(u["a"])(r["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],a);t["default"]=l.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uni_modules/uni-file-picker/components/uni-file-picker/uni-file-picker-create-component',
    {
        'uni_modules/uni-file-picker/components/uni-file-picker/uni-file-picker-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('8adf')['createComponent'](__webpack_require__("ec25"))
        })
    },
    [['uni_modules/uni-file-picker/components/uni-file-picker/uni-file-picker-create-component']]
]);

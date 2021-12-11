"use weex:vue";
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!********************************************************************************************************!*\
  !*** /Users/ricky/Documents/Study/uniapp/bbs_study/main.js?{"page":"pages%2Ftransition%2Ftransition"} ***!
  \********************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uni-app-style */ 1);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uni_app_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _pages_transition_transition_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/transition/transition.nvue?mpType=page */ 4);\n\n        \n        \n        \n        if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {\n          Promise.prototype.finally = function(callback) {\n            var promise = this.constructor\n            return this.then(function(value) {\n              return promise.resolve(callback()).then(function() {\n                return value\n              })\n            }, function(reason) {\n              return promise.resolve(callback()).then(function() {\n                throw reason\n              })\n            })\n          }\n        }\n        _pages_transition_transition_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].mpType = 'page'\n        _pages_transition_transition_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].route = 'pages/transition/transition'\n        _pages_transition_transition_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].el = '#root'\n        new Vue(_pages_transition_transition_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\n        //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUVBLFFBQThCO0FBQzlCLFFBQXdFO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZixhQUFhO0FBQ2I7QUFDQTtBQUNBLGVBQWU7QUFDZixhQUFhO0FBQ2I7QUFDQTtBQUNBLFFBQVEscUZBQUc7QUFDWCxRQUFRLHFGQUFHO0FBQ1gsUUFBUSxxRkFBRztBQUNYLGdCQUFnQixxRkFBRyIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgIFxuICAgICAgICBpbXBvcnQgJ3VuaS1hcHAtc3R5bGUnXG4gICAgICAgIGltcG9ydCBBcHAgZnJvbSAnLi9wYWdlcy90cmFuc2l0aW9uL3RyYW5zaXRpb24ubnZ1ZT9tcFR5cGU9cGFnZSdcbiAgICAgICAgaWYgKHR5cGVvZiBQcm9taXNlICE9PSAndW5kZWZpbmVkJyAmJiAhUHJvbWlzZS5wcm90b3R5cGUuZmluYWxseSkge1xuICAgICAgICAgIFByb21pc2UucHJvdG90eXBlLmZpbmFsbHkgPSBmdW5jdGlvbihjYWxsYmFjaykge1xuICAgICAgICAgICAgdmFyIHByb21pc2UgPSB0aGlzLmNvbnN0cnVjdG9yXG4gICAgICAgICAgICByZXR1cm4gdGhpcy50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICAgIHJldHVybiBwcm9taXNlLnJlc29sdmUoY2FsbGJhY2soKSkudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWVcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sIGZ1bmN0aW9uKHJlYXNvbikge1xuICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzZS5yZXNvbHZlKGNhbGxiYWNrKCkpLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgcmVhc29uXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBBcHAubXBUeXBlID0gJ3BhZ2UnXG4gICAgICAgIEFwcC5yb3V0ZSA9ICdwYWdlcy90cmFuc2l0aW9uL3RyYW5zaXRpb24nXG4gICAgICAgIEFwcC5lbCA9ICcjcm9vdCdcbiAgICAgICAgbmV3IFZ1ZShBcHApXG4gICAgICAgICJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!*********************************************************************************!*\
  !*** /Users/ricky/Documents/Study/uniapp/bbs_study/main.js?{"type":"appStyle"} ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("Vue.prototype.__$appStyle__ = {}\nVue.prototype.__merge_style && Vue.prototype.__merge_style(__webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css */ 2).default,Vue.prototype.__$appStyle__)\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsMkRBQTJELG1CQUFPLENBQUMsa0RBQTJDIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18gPSB7fVxuVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIikuZGVmYXVsdCxWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!*********************************************************************************************!*\
  !*** /Users/ricky/Documents/Study/uniapp/bbs_study/App.vue?vue&type=style&index=0&lang=css ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--9-oneOf-0-2!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-3!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css */ 3);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 3 */
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!./node_modules/postcss-loader/src??ref--9-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/ricky/Documents/Study/uniapp/bbs_study/App.vue?vue&type=style&index=0&lang=css ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".iconfont": {
    "": {
      "fontFamily": [
        "iconfont",
        0,
        0,
        2
      ]
    }
  },
  ".view": {
    "": {
      "fontSize": [
        "28rpx",
        0,
        0,
        3
      ],
      "lineHeight": [
        1.8,
        0,
        0,
        3
      ],
      "color": [
        "#0E151D",
        0,
        0,
        3
      ]
    }
  },
  ".text": {
    "": {
      "fontSize": [
        "28rpx",
        0,
        0,
        3
      ],
      "lineHeight": [
        1.8,
        0,
        0,
        3
      ],
      "color": [
        "#0E151D",
        0,
        0,
        3
      ]
    }
  },
  ".row": {
    "": {
      "marginRight": [
        "-20rpx",
        0,
        0,
        5
      ],
      "marginLeft": [
        "-20rpx",
        0,
        0,
        5
      ],
      "flexWrap": [
        "wrap",
        0,
        0,
        5
      ],
      "flexDirection": [
        "row",
        0,
        0,
        5
      ]
    }
  },
  ".col-1": {
    "": {
      "position": [
        "relative",
        0,
        0,
        6
      ],
      "paddingRight": [
        "20rpx",
        0,
        0,
        6
      ],
      "paddingLeft": [
        "20rpx",
        0,
        0,
        6
      ],
      "width": [
        "62.5rpx",
        0,
        0,
        18
      ]
    }
  },
  ".col-2": {
    "": {
      "position": [
        "relative",
        0,
        0,
        6
      ],
      "paddingRight": [
        "20rpx",
        0,
        0,
        6
      ],
      "paddingLeft": [
        "20rpx",
        0,
        0,
        6
      ],
      "width": [
        "125rpx",
        0,
        0,
        17
      ]
    }
  },
  ".col-3": {
    "": {
      "position": [
        "relative",
        0,
        0,
        6
      ],
      "paddingRight": [
        "20rpx",
        0,
        0,
        6
      ],
      "paddingLeft": [
        "20rpx",
        0,
        0,
        6
      ],
      "width": [
        "187.5rpx",
        0,
        0,
        16
      ]
    }
  },
  ".col-4": {
    "": {
      "position": [
        "relative",
        0,
        0,
        6
      ],
      "paddingRight": [
        "20rpx",
        0,
        0,
        6
      ],
      "paddingLeft": [
        "20rpx",
        0,
        0,
        6
      ],
      "width": [
        "250rpx",
        0,
        0,
        15
      ]
    }
  },
  ".col-5": {
    "": {
      "position": [
        "relative",
        0,
        0,
        6
      ],
      "paddingRight": [
        "20rpx",
        0,
        0,
        6
      ],
      "paddingLeft": [
        "20rpx",
        0,
        0,
        6
      ],
      "width": [
        "312.5rpx",
        0,
        0,
        14
      ]
    }
  },
  ".col-6": {
    "": {
      "position": [
        "relative",
        0,
        0,
        6
      ],
      "paddingRight": [
        "20rpx",
        0,
        0,
        6
      ],
      "paddingLeft": [
        "20rpx",
        0,
        0,
        6
      ],
      "width": [
        "375rpx",
        0,
        0,
        13
      ]
    }
  },
  ".col-7": {
    "": {
      "position": [
        "relative",
        0,
        0,
        6
      ],
      "paddingRight": [
        "20rpx",
        0,
        0,
        6
      ],
      "paddingLeft": [
        "20rpx",
        0,
        0,
        6
      ],
      "width": [
        "437.5rpx",
        0,
        0,
        12
      ]
    }
  },
  ".col-8": {
    "": {
      "position": [
        "relative",
        0,
        0,
        6
      ],
      "paddingRight": [
        "20rpx",
        0,
        0,
        6
      ],
      "paddingLeft": [
        "20rpx",
        0,
        0,
        6
      ],
      "width": [
        "500rpx",
        0,
        0,
        11
      ]
    }
  },
  ".col-9": {
    "": {
      "position": [
        "relative",
        0,
        0,
        6
      ],
      "paddingRight": [
        "20rpx",
        0,
        0,
        6
      ],
      "paddingLeft": [
        "20rpx",
        0,
        0,
        6
      ],
      "width": [
        "562.5rpx",
        0,
        0,
        10
      ]
    }
  },
  ".col-10": {
    "": {
      "position": [
        "relative",
        0,
        0,
        6
      ],
      "paddingRight": [
        "20rpx",
        0,
        0,
        6
      ],
      "paddingLeft": [
        "20rpx",
        0,
        0,
        6
      ],
      "width": [
        "625rpx",
        0,
        0,
        9
      ]
    }
  },
  ".col-11": {
    "": {
      "position": [
        "relative",
        0,
        0,
        6
      ],
      "paddingRight": [
        "20rpx",
        0,
        0,
        6
      ],
      "paddingLeft": [
        "20rpx",
        0,
        0,
        6
      ],
      "width": [
        "687.5rpx",
        0,
        0,
        8
      ]
    }
  },
  ".col-12": {
    "": {
      "position": [
        "relative",
        0,
        0,
        6
      ],
      "paddingRight": [
        "20rpx",
        0,
        0,
        6
      ],
      "paddingLeft": [
        "20rpx",
        0,
        0,
        6
      ],
      "width": [
        "750rpx",
        0,
        0,
        7
      ]
    }
  },
  ".col-offset-12": {
    "": {
      "marginLeft": [
        "750rpx",
        0,
        0,
        19
      ]
    }
  },
  ".col-offset-11": {
    "": {
      "marginLeft": [
        "687.5rpx",
        0,
        0,
        20
      ]
    }
  },
  ".col-offset-10": {
    "": {
      "marginLeft": [
        "625rpx",
        0,
        0,
        21
      ]
    }
  },
  ".col-offset-9": {
    "": {
      "marginLeft": [
        "562.5rpx",
        0,
        0,
        22
      ]
    }
  },
  ".col-offset-8": {
    "": {
      "marginLeft": [
        "500rpx",
        0,
        0,
        23
      ]
    }
  },
  ".col-offset-7": {
    "": {
      "marginLeft": [
        "437.5rpx",
        0,
        0,
        24
      ]
    }
  },
  ".col-offset-6": {
    "": {
      "marginLeft": [
        "375rpx",
        0,
        0,
        25
      ]
    }
  },
  ".col-offset-5": {
    "": {
      "marginLeft": [
        "312.5rpx",
        0,
        0,
        26
      ]
    }
  },
  ".col-offset-4": {
    "": {
      "marginLeft": [
        "250rpx",
        0,
        0,
        27
      ]
    }
  },
  ".col-offset-3": {
    "": {
      "marginLeft": [
        "187.5rpx",
        0,
        0,
        28
      ]
    }
  },
  ".col-offset-2": {
    "": {
      "marginLeft": [
        "125rpx",
        0,
        0,
        29
      ]
    }
  },
  ".col-offset-1": {
    "": {
      "marginLeft": [
        "62.5rpx",
        0,
        0,
        30
      ]
    }
  },
  ".col-offset-0": {
    "": {
      "marginLeft": [
        0,
        0,
        0,
        31
      ]
    }
  },
  ".flex": {
    "": {
      "flexDirection": [
        "row",
        0,
        0,
        33
      ]
    }
  },
  ".flex-row": {
    "": {
      "flexDirection": [
        "row",
        1,
        0,
        34
      ]
    }
  },
  ".flex-column": {
    "": {
      "flexDirection": [
        "column",
        1,
        0,
        35
      ]
    }
  },
  ".flex-row-reverse": {
    "": {
      "flexDirection": [
        "row-reverse",
        1,
        0,
        36
      ]
    }
  },
  ".flex-column-reverse": {
    "": {
      "flexDirection": [
        "column-reverse",
        1,
        0,
        37
      ]
    }
  },
  ".flex-wrap": {
    "": {
      "flexWrap": [
        "wrap",
        0,
        0,
        38
      ]
    }
  },
  ".flex-nowrap": {
    "": {
      "flexWrap": [
        "nowrap",
        0,
        0,
        39
      ]
    }
  },
  ".justify-start": {
    "": {
      "justifyContent": [
        "flex-start",
        0,
        0,
        40
      ]
    }
  },
  ".justify-end": {
    "": {
      "justifyContent": [
        "flex-end",
        0,
        0,
        41
      ]
    }
  },
  ".justify-between": {
    "": {
      "justifyContent": [
        "space-between",
        0,
        0,
        42
      ]
    }
  },
  ".justify-center": {
    "": {
      "justifyContent": [
        "center",
        0,
        0,
        43
      ]
    }
  },
  ".align-center": {
    "": {
      "alignItems": [
        "center",
        0,
        0,
        44
      ]
    }
  },
  ".align-stretch": {
    "": {
      "alignItems": [
        "stretch",
        0,
        0,
        45
      ]
    }
  },
  ".align-start": {
    "": {
      "alignItems": [
        "flex-start",
        0,
        0,
        46
      ]
    }
  },
  ".align-end": {
    "": {
      "alignItems": [
        "flex-end",
        0,
        0,
        47
      ]
    }
  },
  ".flex-1": {
    "": {
      "flex": [
        1,
        0,
        0,
        48
      ]
    }
  },
  ".flex-2": {
    "": {
      "flex": [
        2,
        0,
        0,
        49
      ]
    }
  },
  ".flex-3": {
    "": {
      "flex": [
        3,
        0,
        0,
        50
      ]
    }
  },
  ".flex-4": {
    "": {
      "flex": [
        4,
        0,
        0,
        51
      ]
    }
  },
  ".flex-5": {
    "": {
      "flex": [
        5,
        0,
        0,
        52
      ]
    }
  },
  ".container": {
    "": {
      "paddingRight": [
        "20rpx",
        0,
        0,
        53
      ],
      "paddingLeft": [
        "20rpx",
        0,
        0,
        53
      ]
    }
  },
  ".m-0": {
    "": {
      "marginTop": [
        0,
        0,
        0,
        55
      ],
      "marginRight": [
        0,
        0,
        0,
        55
      ],
      "marginBottom": [
        0,
        0,
        0,
        55
      ],
      "marginLeft": [
        0,
        0,
        0,
        55
      ]
    }
  },
  ".m-1": {
    "": {
      "marginTop": [
        "10rpx",
        0,
        0,
        56
      ],
      "marginRight": [
        "10rpx",
        0,
        0,
        56
      ],
      "marginBottom": [
        "10rpx",
        0,
        0,
        56
      ],
      "marginLeft": [
        "10rpx",
        0,
        0,
        56
      ]
    }
  },
  ".m-2": {
    "": {
      "marginTop": [
        "20rpx",
        0,
        0,
        57
      ],
      "marginRight": [
        "20rpx",
        0,
        0,
        57
      ],
      "marginBottom": [
        "20rpx",
        0,
        0,
        57
      ],
      "marginLeft": [
        "20rpx",
        0,
        0,
        57
      ]
    }
  },
  ".m-3": {
    "": {
      "marginTop": [
        "30rpx",
        0,
        0,
        58
      ],
      "marginRight": [
        "30rpx",
        0,
        0,
        58
      ],
      "marginBottom": [
        "30rpx",
        0,
        0,
        58
      ],
      "marginLeft": [
        "30rpx",
        0,
        0,
        58
      ]
    }
  },
  ".m-4": {
    "": {
      "marginTop": [
        "40rpx",
        0,
        0,
        59
      ],
      "marginRight": [
        "40rpx",
        0,
        0,
        59
      ],
      "marginBottom": [
        "40rpx",
        0,
        0,
        59
      ],
      "marginLeft": [
        "40rpx",
        0,
        0,
        59
      ]
    }
  },
  ".m-5": {
    "": {
      "marginTop": [
        "50rpx",
        0,
        0,
        60
      ],
      "marginRight": [
        "50rpx",
        0,
        0,
        60
      ],
      "marginBottom": [
        "50rpx",
        0,
        0,
        60
      ],
      "marginLeft": [
        "50rpx",
        0,
        0,
        60
      ]
    }
  },
  ".mt-0": {
    "": {
      "marginTop": [
        0,
        0,
        0,
        61
      ]
    }
  },
  ".mt-1": {
    "": {
      "marginTop": [
        "10rpx",
        0,
        0,
        62
      ]
    }
  },
  ".mt-2": {
    "": {
      "marginTop": [
        "20rpx",
        0,
        0,
        63
      ]
    }
  },
  ".mt-3": {
    "": {
      "marginTop": [
        "30rpx",
        0,
        0,
        64
      ]
    }
  },
  ".mt-4": {
    "": {
      "marginTop": [
        "40rpx",
        0,
        0,
        65
      ]
    }
  },
  ".mt-5": {
    "": {
      "marginTop": [
        "50rpx",
        0,
        0,
        66
      ]
    }
  },
  ".mb-0": {
    "": {
      "marginBottom": [
        0,
        0,
        0,
        67
      ]
    }
  },
  ".mb-1": {
    "": {
      "marginBottom": [
        "10rpx",
        0,
        0,
        68
      ]
    }
  },
  ".mb-2": {
    "": {
      "marginBottom": [
        "20rpx",
        0,
        0,
        69
      ]
    }
  },
  ".mb-3": {
    "": {
      "marginBottom": [
        "30rpx",
        0,
        0,
        70
      ]
    }
  },
  ".mb-4": {
    "": {
      "marginBottom": [
        "40rpx",
        0,
        0,
        71
      ]
    }
  },
  ".mb-5": {
    "": {
      "marginBottom": [
        "50rpx",
        0,
        0,
        72
      ]
    }
  },
  ".ml-0": {
    "": {
      "marginLeft": [
        0,
        0,
        0,
        73
      ]
    }
  },
  ".ml-1": {
    "": {
      "marginLeft": [
        "10rpx",
        0,
        0,
        74
      ]
    }
  },
  ".ml-2": {
    "": {
      "marginLeft": [
        "20rpx",
        0,
        0,
        75
      ]
    }
  },
  ".ml-3": {
    "": {
      "marginLeft": [
        "30rpx",
        0,
        0,
        76
      ]
    }
  },
  ".ml-4": {
    "": {
      "marginLeft": [
        "40rpx",
        0,
        0,
        77
      ]
    }
  },
  ".ml-5": {
    "": {
      "marginLeft": [
        "50rpx",
        0,
        0,
        78
      ]
    }
  },
  ".mr-0": {
    "": {
      "marginRight": [
        0,
        0,
        0,
        79
      ]
    }
  },
  ".mr-1": {
    "": {
      "marginRight": [
        "10rpx",
        0,
        0,
        80
      ]
    }
  },
  ".mr-2": {
    "": {
      "marginRight": [
        "20rpx",
        0,
        0,
        81
      ]
    }
  },
  ".mr-3": {
    "": {
      "marginRight": [
        "30rpx",
        0,
        0,
        82
      ]
    }
  },
  ".mr-4": {
    "": {
      "marginRight": [
        "40rpx",
        0,
        0,
        83
      ]
    }
  },
  ".mr-5": {
    "": {
      "marginRight": [
        "50rpx",
        0,
        0,
        84
      ]
    }
  },
  ".my-0": {
    "": {
      "marginTop": [
        0,
        0,
        0,
        85
      ],
      "marginBottom": [
        0,
        0,
        0,
        85
      ]
    }
  },
  ".my-1": {
    "": {
      "marginTop": [
        "10rpx",
        0,
        0,
        86
      ],
      "marginBottom": [
        "10rpx",
        0,
        0,
        86
      ]
    }
  },
  ".my-2": {
    "": {
      "marginTop": [
        "20rpx",
        0,
        0,
        87
      ],
      "marginBottom": [
        "20rpx",
        0,
        0,
        87
      ]
    }
  },
  ".my-3": {
    "": {
      "marginTop": [
        "30rpx",
        0,
        0,
        88
      ],
      "marginBottom": [
        "30rpx",
        0,
        0,
        88
      ]
    }
  },
  ".my-4": {
    "": {
      "marginTop": [
        "40rpx",
        0,
        0,
        89
      ],
      "marginBottom": [
        "40rpx",
        0,
        0,
        89
      ]
    }
  },
  ".my-5": {
    "": {
      "marginTop": [
        "50rpx",
        0,
        0,
        90
      ],
      "marginBottom": [
        "50rpx",
        0,
        0,
        90
      ]
    }
  },
  ".mx-0": {
    "": {
      "marginLeft": [
        0,
        0,
        0,
        91
      ],
      "marginRight": [
        0,
        0,
        0,
        91
      ]
    }
  },
  ".mx-1": {
    "": {
      "marginLeft": [
        "10rpx",
        0,
        0,
        92
      ],
      "marginRight": [
        "10rpx",
        0,
        0,
        92
      ]
    }
  },
  ".mx-2": {
    "": {
      "marginLeft": [
        "20rpx",
        0,
        0,
        93
      ],
      "marginRight": [
        "20rpx",
        0,
        0,
        93
      ]
    }
  },
  ".mx-3": {
    "": {
      "marginLeft": [
        "30rpx",
        0,
        0,
        94
      ],
      "marginRight": [
        "30rpx",
        0,
        0,
        94
      ]
    }
  },
  ".mx-4": {
    "": {
      "marginLeft": [
        "40rpx",
        0,
        0,
        95
      ],
      "marginRight": [
        "40rpx",
        0,
        0,
        95
      ]
    }
  },
  ".mx-5": {
    "": {
      "marginLeft": [
        "50rpx",
        0,
        0,
        96
      ],
      "marginRight": [
        "50rpx",
        0,
        0,
        96
      ]
    }
  },
  ".p-0": {
    "": {
      "paddingTop": [
        0,
        0,
        0,
        97
      ],
      "paddingRight": [
        0,
        0,
        0,
        97
      ],
      "paddingBottom": [
        0,
        0,
        0,
        97
      ],
      "paddingLeft": [
        0,
        0,
        0,
        97
      ]
    }
  },
  ".p": {
    "": {
      "paddingTop": [
        "5rpx",
        0,
        0,
        98
      ],
      "paddingRight": [
        "5rpx",
        0,
        0,
        98
      ],
      "paddingBottom": [
        "5rpx",
        0,
        0,
        98
      ],
      "paddingLeft": [
        "5rpx",
        0,
        0,
        98
      ]
    }
  },
  ".p-1": {
    "": {
      "paddingTop": [
        "10rpx",
        0,
        0,
        99
      ],
      "paddingRight": [
        "10rpx",
        0,
        0,
        99
      ],
      "paddingBottom": [
        "10rpx",
        0,
        0,
        99
      ],
      "paddingLeft": [
        "10rpx",
        0,
        0,
        99
      ]
    }
  },
  ".p-2": {
    "": {
      "paddingTop": [
        "20rpx",
        0,
        0,
        100
      ],
      "paddingRight": [
        "20rpx",
        0,
        0,
        100
      ],
      "paddingBottom": [
        "20rpx",
        0,
        0,
        100
      ],
      "paddingLeft": [
        "20rpx",
        0,
        0,
        100
      ]
    }
  },
  ".p-3": {
    "": {
      "paddingTop": [
        "30rpx",
        0,
        0,
        101
      ],
      "paddingRight": [
        "30rpx",
        0,
        0,
        101
      ],
      "paddingBottom": [
        "30rpx",
        0,
        0,
        101
      ],
      "paddingLeft": [
        "30rpx",
        0,
        0,
        101
      ]
    }
  },
  ".p-4": {
    "": {
      "paddingTop": [
        "40rpx",
        0,
        0,
        102
      ],
      "paddingRight": [
        "40rpx",
        0,
        0,
        102
      ],
      "paddingBottom": [
        "40rpx",
        0,
        0,
        102
      ],
      "paddingLeft": [
        "40rpx",
        0,
        0,
        102
      ]
    }
  },
  ".p-5": {
    "": {
      "paddingTop": [
        "50rpx",
        0,
        0,
        103
      ],
      "paddingRight": [
        "50rpx",
        0,
        0,
        103
      ],
      "paddingBottom": [
        "50rpx",
        0,
        0,
        103
      ],
      "paddingLeft": [
        "50rpx",
        0,
        0,
        103
      ]
    }
  },
  ".pt-0": {
    "": {
      "paddingTop": [
        0,
        0,
        0,
        104
      ]
    }
  },
  ".pt": {
    "": {
      "paddingTop": [
        "5rpx",
        0,
        0,
        105
      ]
    }
  },
  ".pt-1": {
    "": {
      "paddingTop": [
        "10rpx",
        0,
        0,
        106
      ]
    }
  },
  ".pt-2": {
    "": {
      "paddingTop": [
        "20rpx",
        0,
        0,
        107
      ]
    }
  },
  ".pt-3": {
    "": {
      "paddingTop": [
        "30rpx",
        0,
        0,
        108
      ]
    }
  },
  ".pt-4": {
    "": {
      "paddingTop": [
        "40rpx",
        0,
        0,
        109
      ]
    }
  },
  ".pt-5": {
    "": {
      "paddingTop": [
        "50rpx",
        0,
        0,
        110
      ]
    }
  },
  ".pb-0": {
    "": {
      "paddingBottom": [
        0,
        0,
        0,
        111
      ]
    }
  },
  ".pb-1": {
    "": {
      "paddingBottom": [
        "10rpx",
        0,
        0,
        112
      ]
    }
  },
  ".pb": {
    "": {
      "paddingBottom": [
        "5rpx",
        0,
        0,
        113
      ]
    }
  },
  ".pb-2": {
    "": {
      "paddingBottom": [
        "20rpx",
        0,
        0,
        114
      ]
    }
  },
  ".pb-3": {
    "": {
      "paddingBottom": [
        "30rpx",
        0,
        0,
        115
      ]
    }
  },
  ".pb-4": {
    "": {
      "paddingBottom": [
        "40rpx",
        0,
        0,
        116
      ]
    }
  },
  ".pb-5": {
    "": {
      "paddingBottom": [
        "50rpx",
        0,
        0,
        117
      ]
    }
  },
  ".pl-0": {
    "": {
      "paddingLeft": [
        0,
        0,
        0,
        118
      ]
    }
  },
  ".pl": {
    "": {
      "paddingLeft": [
        "5rpx",
        0,
        0,
        119
      ]
    }
  },
  ".pl-1": {
    "": {
      "paddingLeft": [
        "10rpx",
        0,
        0,
        120
      ]
    }
  },
  ".pl-2": {
    "": {
      "paddingLeft": [
        "20rpx",
        0,
        0,
        121
      ]
    }
  },
  ".pl-3": {
    "": {
      "paddingLeft": [
        "30rpx",
        0,
        0,
        122
      ]
    }
  },
  ".pl-4": {
    "": {
      "paddingLeft": [
        "40rpx",
        0,
        0,
        123
      ]
    }
  },
  ".pl-5": {
    "": {
      "paddingLeft": [
        "50rpx",
        0,
        0,
        124
      ]
    }
  },
  ".pr-0": {
    "": {
      "paddingRight": [
        0,
        0,
        0,
        125
      ]
    }
  },
  ".pr": {
    "": {
      "paddingRight": [
        "5rpx",
        0,
        0,
        126
      ]
    }
  },
  ".pr-1": {
    "": {
      "paddingRight": [
        "10rpx",
        0,
        0,
        127
      ]
    }
  },
  ".pr-2": {
    "": {
      "paddingRight": [
        "20rpx",
        0,
        0,
        128
      ]
    }
  },
  ".pr-3": {
    "": {
      "paddingRight": [
        "30rpx",
        0,
        0,
        129
      ]
    }
  },
  ".pr-4": {
    "": {
      "paddingRight": [
        "40rpx",
        0,
        0,
        130
      ]
    }
  },
  ".pr-5": {
    "": {
      "paddingRight": [
        "50rpx",
        0,
        0,
        131
      ]
    }
  },
  ".py-0": {
    "": {
      "paddingTop": [
        0,
        0,
        0,
        132
      ],
      "paddingBottom": [
        0,
        0,
        0,
        132
      ]
    }
  },
  ".py": {
    "": {
      "paddingTop": [
        "5rpx",
        0,
        0,
        133
      ],
      "paddingBottom": [
        "5rpx",
        0,
        0,
        133
      ]
    }
  },
  ".py-1": {
    "": {
      "paddingTop": [
        "10rpx",
        0,
        0,
        134
      ],
      "paddingBottom": [
        "10rpx",
        0,
        0,
        134
      ]
    }
  },
  ".py-2": {
    "": {
      "paddingTop": [
        "20rpx",
        0,
        0,
        135
      ],
      "paddingBottom": [
        "20rpx",
        0,
        0,
        135
      ]
    }
  },
  ".py-3": {
    "": {
      "paddingTop": [
        "30rpx",
        0,
        0,
        136
      ],
      "paddingBottom": [
        "30rpx",
        0,
        0,
        136
      ]
    }
  },
  ".py-4": {
    "": {
      "paddingTop": [
        "40rpx",
        0,
        0,
        137
      ],
      "paddingBottom": [
        "40rpx",
        0,
        0,
        137
      ]
    }
  },
  ".py-5": {
    "": {
      "paddingTop": [
        "50rpx",
        0,
        0,
        138
      ],
      "paddingBottom": [
        "50rpx",
        0,
        0,
        138
      ]
    }
  },
  ".px-0": {
    "": {
      "paddingLeft": [
        0,
        0,
        0,
        139
      ],
      "paddingRight": [
        0,
        0,
        0,
        139
      ]
    }
  },
  ".px-1": {
    "": {
      "paddingLeft": [
        "10rpx",
        0,
        0,
        140
      ],
      "paddingRight": [
        "10rpx",
        0,
        0,
        140
      ]
    }
  },
  ".px": {
    "": {
      "paddingLeft": [
        "5rpx",
        0,
        0,
        141
      ],
      "paddingRight": [
        "5rpx",
        0,
        0,
        141
      ]
    }
  },
  ".px-2": {
    "": {
      "paddingLeft": [
        "20rpx",
        0,
        0,
        142
      ],
      "paddingRight": [
        "20rpx",
        0,
        0,
        142
      ]
    }
  },
  ".px-3": {
    "": {
      "paddingLeft": [
        "30rpx",
        0,
        0,
        143
      ],
      "paddingRight": [
        "30rpx",
        0,
        0,
        143
      ]
    }
  },
  ".px-4": {
    "": {
      "paddingLeft": [
        "40rpx",
        0,
        0,
        144
      ],
      "paddingRight": [
        "40rpx",
        0,
        0,
        144
      ]
    }
  },
  ".px-5": {
    "": {
      "paddingLeft": [
        "50rpx",
        0,
        0,
        145
      ],
      "paddingRight": [
        "50rpx",
        0,
        0,
        145
      ]
    }
  },
  ".font-smaller": {
    "": {
      "fontSize": [
        "15rpx",
        0,
        0,
        147
      ]
    }
  },
  ".font-small": {
    "": {
      "fontSize": [
        "20rpx",
        0,
        0,
        148
      ]
    }
  },
  ".font-sm": {
    "": {
      "fontSize": [
        "25rpx",
        0,
        0,
        149
      ]
    }
  },
  ".font": {
    "": {
      "fontSize": [
        "30rpx",
        1,
        0,
        150
      ]
    }
  },
  ".font-md": {
    "": {
      "fontSize": [
        "35rpx",
        1,
        0,
        151
      ]
    }
  },
  ".font-lg": {
    "": {
      "fontSize": [
        "40rpx",
        0,
        0,
        152
      ]
    }
  },
  ".h1": {
    "": {
      "fontSize": [
        "80rpx",
        0,
        0,
        153
      ],
      "lineHeight": [
        1.8,
        0,
        0,
        153
      ]
    }
  },
  ".h2": {
    "": {
      "fontSize": [
        "60rpx",
        0,
        0,
        154
      ],
      "lineHeight": [
        1.8,
        0,
        0,
        154
      ]
    }
  },
  ".h3": {
    "": {
      "fontSize": [
        "45rpx",
        0,
        0,
        155
      ],
      "lineHeight": [
        1.8,
        0,
        0,
        155
      ]
    }
  },
  ".h4": {
    "": {
      "fontSize": [
        "32rpx",
        0,
        0,
        156
      ],
      "lineHeight": [
        1.8,
        0,
        0,
        156
      ]
    }
  },
  ".h5": {
    "": {
      "fontSize": [
        "30rpx",
        0,
        0,
        157
      ],
      "lineHeight": [
        1.8,
        0,
        0,
        157
      ]
    }
  },
  ".h6": {
    "": {
      "fontSize": [
        "28rpx",
        0,
        0,
        158
      ],
      "lineHeight": [
        1.8,
        0,
        0,
        158
      ]
    }
  },
  ".text-through": {
    "": {
      "textDecoration": [
        "line-through",
        0,
        0,
        161
      ]
    }
  },
  ".text-left": {
    "": {
      "textAlign": [
        "left",
        0,
        0,
        163
      ]
    }
  },
  ".text-right": {
    "": {
      "textAlign": [
        "right",
        0,
        0,
        164
      ]
    }
  },
  ".text-center": {
    "": {
      "textAlign": [
        "center",
        0,
        0,
        165
      ]
    }
  },
  ".text-ellipsis": {
    "": {
      "lines": [
        1,
        0,
        0,
        167
      ]
    }
  },
  ".font-weight-light": {
    "": {
      "fontWeight": [
        "300",
        0,
        0,
        169
      ]
    }
  },
  ".font-weight-lighter": {
    "": {
      "fontWeight": [
        "100",
        0,
        0,
        171
      ]
    }
  },
  ".font-weight-normal": {
    "": {
      "fontWeight": [
        "400",
        0,
        0,
        173
      ]
    }
  },
  ".font-weight-bold": {
    "": {
      "fontWeight": [
        "700",
        0,
        0,
        175
      ]
    }
  },
  ".font-weight-bolder": {
    "": {
      "fontWeight": [
        "bold",
        0,
        0,
        177
      ]
    }
  },
  ".font-italic": {
    "": {
      "fontStyle": [
        "italic",
        0,
        0,
        179
      ]
    }
  },
  ".text-white": {
    "": {
      "color": [
        "#ffffff",
        0,
        0,
        182
      ]
    }
  },
  ".text-primary": {
    "": {
      "color": [
        "#007bff",
        0,
        0,
        183
      ]
    }
  },
  ".text-hover-primary": {
    "": {
      "color": [
        "#0056b3",
        0,
        0,
        184
      ]
    }
  },
  ".text-secondary": {
    "": {
      "color": [
        "#6c757d",
        0,
        0,
        185
      ]
    }
  },
  ".text-hover-secondary": {
    "": {
      "color": [
        "#494f54",
        0,
        0,
        186
      ]
    }
  },
  ".text-success": {
    "": {
      "color": [
        "#28a745",
        0,
        0,
        187
      ]
    }
  },
  ".text-hover-success": {
    "": {
      "color": [
        "#19692c",
        0,
        0,
        188
      ]
    }
  },
  ".text-info": {
    "": {
      "color": [
        "#17a2b8",
        0,
        0,
        189
      ]
    }
  },
  ".text-hover-info": {
    "": {
      "color": [
        "#0f6674",
        0,
        0,
        190
      ]
    }
  },
  ".text-warning": {
    "": {
      "color": [
        "#ffc107",
        0,
        0,
        191
      ]
    }
  },
  ".text-hover-warning": {
    "": {
      "color": [
        "#ba8b00",
        0,
        0,
        192
      ]
    }
  },
  ".text-danger": {
    "": {
      "color": [
        "#dc3545",
        0,
        0,
        193
      ]
    }
  },
  ".text-hover-danger": {
    "": {
      "color": [
        "#a71d2a",
        0,
        0,
        194
      ]
    }
  },
  ".text-light": {
    "": {
      "color": [
        "#f8f9fa",
        0,
        0,
        195
      ]
    }
  },
  ".text-hover-light": {
    "": {
      "color": [
        "#cbd3da",
        0,
        0,
        196
      ]
    }
  },
  ".text-dark": {
    "": {
      "color": [
        "#343a40",
        0,
        0,
        197
      ]
    }
  },
  ".text-hover-dark": {
    "": {
      "color": [
        "#121416",
        0,
        0,
        198
      ]
    }
  },
  ".text-body": {
    "": {
      "color": [
        "#212529",
        0,
        0,
        199
      ]
    }
  },
  ".text-muted": {
    "": {
      "color": [
        "#6c757d",
        0,
        0,
        200
      ]
    }
  },
  ".text-light-muted": {
    "": {
      "color": [
        "#A9A5A0",
        0,
        0,
        202
      ]
    }
  },
  ".text-light-black": {
    "": {
      "color": [
        "rgba(0,0,0,0.5)",
        0,
        0,
        203
      ]
    }
  },
  ".text-light-white": {
    "": {
      "color": [
        "rgba(255,255,255,0.5)",
        0,
        0,
        204
      ]
    }
  },
  ".bg-primary": {
    "": {
      "backgroundColor": [
        "#007bff",
        0,
        0,
        206
      ]
    }
  },
  ".bg-hover-primary": {
    "": {
      "backgroundColor:hover": [
        "#0062cc",
        0,
        0,
        207
      ]
    }
  },
  ".bg-secondary": {
    "": {
      "backgroundColor": [
        "#6c757d",
        0,
        0,
        208
      ]
    }
  },
  ".bg-hover-secondary": {
    "": {
      "backgroundColor:hover": [
        "#545b62",
        0,
        0,
        209
      ]
    }
  },
  ".bg-success": {
    "": {
      "backgroundColor": [
        "#28a745",
        0,
        0,
        210
      ]
    }
  },
  ".bg-hover-success": {
    "": {
      "backgroundColor": [
        "#1e7e34",
        0,
        0,
        211
      ]
    }
  },
  ".bg-info": {
    "": {
      "backgroundColor": [
        "#17a2b8",
        0,
        0,
        212
      ]
    }
  },
  ".bg-hover-info": {
    "": {
      "backgroundColor": [
        "#117a8b",
        0,
        0,
        213
      ]
    }
  },
  ".bg-warning": {
    "": {
      "backgroundColor": [
        "#ffc107",
        0,
        0,
        214
      ]
    }
  },
  ".bg-hover-warning": {
    "": {
      "backgroundColor": [
        "#d39e00",
        0,
        0,
        215
      ]
    }
  },
  ".bg-danger": {
    "": {
      "backgroundColor": [
        "#dc3545",
        0,
        0,
        216
      ]
    }
  },
  ".bg-hover-danger": {
    "": {
      "backgroundColor": [
        "#bd2130",
        0,
        0,
        217
      ]
    }
  },
  ".bg-light": {
    "": {
      "backgroundColor": [
        "#f8f9fa",
        0,
        0,
        218
      ]
    }
  },
  ".bg-hover-light": {
    "": {
      "backgroundColor": [
        "#dae0e5",
        0,
        0,
        219
      ]
    }
  },
  ".bg-dark": {
    "": {
      "backgroundColor": [
        "#343a40",
        0,
        0,
        220
      ]
    }
  },
  ".bg-hover-dark": {
    "": {
      "backgroundColor": [
        "#1d2124",
        0,
        0,
        221
      ]
    }
  },
  ".bg-white": {
    "": {
      "backgroundColor": [
        "#ffffff",
        0,
        0,
        222
      ]
    }
  },
  ".bg-transparent": {
    "": {
      "backgroundColor": [
        "rgba(0,0,0,0)",
        0,
        0,
        223
      ]
    }
  },
  ".border": {
    "": {
      "borderWidth": [
        "1rpx",
        0,
        0,
        225
      ],
      "borderStyle": [
        "solid",
        0,
        0,
        225
      ],
      "borderColor": [
        "#dee2e6",
        0,
        0,
        225
      ]
    }
  },
  ".border-top": {
    "": {
      "borderTopWidth": [
        "1rpx",
        0,
        0,
        226
      ],
      "borderTopStyle": [
        "solid",
        0,
        0,
        226
      ],
      "borderTopColor": [
        "#dee2e6",
        0,
        0,
        226
      ]
    }
  },
  ".border-right": {
    "": {
      "borderRightWidth": [
        "1rpx",
        0,
        0,
        227
      ],
      "borderRightStyle": [
        "solid",
        0,
        0,
        227
      ],
      "borderRightColor": [
        "#dee2e6",
        0,
        0,
        227
      ]
    }
  },
  ".border-bottom": {
    "": {
      "borderBottomWidth": [
        "1rpx",
        0,
        0,
        228
      ],
      "borderBottomStyle": [
        "solid",
        0,
        0,
        228
      ],
      "borderBottomColor": [
        "#dee2e6",
        0,
        0,
        228
      ]
    }
  },
  ".border-left": {
    "": {
      "borderLeftWidth": [
        "1rpx",
        0,
        0,
        229
      ],
      "borderLeftStyle": [
        "solid",
        0,
        0,
        229
      ],
      "borderLeftColor": [
        "#dee2e6",
        0,
        0,
        229
      ]
    }
  },
  ".border-0": {
    "": {
      "borderWidth": [
        0,
        1,
        0,
        230
      ]
    }
  },
  ".border-top-0": {
    "": {
      "borderTopWidth": [
        0,
        1,
        0,
        231
      ]
    }
  },
  ".border-right-0": {
    "": {
      "borderRightWidth": [
        0,
        1,
        0,
        232
      ]
    }
  },
  ".border-bottom-0": {
    "": {
      "borderBottomWidth": [
        0,
        1,
        0,
        233
      ]
    }
  },
  ".border-left-0": {
    "": {
      "borderLeftWidth": [
        0,
        1,
        0,
        234
      ]
    }
  },
  ".border-primary": {
    "": {
      "borderColor": [
        "#007bff",
        0,
        0,
        235
      ]
    }
  },
  ".border-secondary": {
    "": {
      "borderColor": [
        "#6c757d",
        0,
        0,
        236
      ]
    }
  },
  ".border-light-secondary": {
    "": {
      "borderColor": [
        "#E9E8E5",
        0,
        0,
        237
      ]
    }
  },
  ".border-success": {
    "": {
      "borderColor": [
        "#28a745",
        0,
        0,
        238
      ]
    }
  },
  ".border-info": {
    "": {
      "borderColor": [
        "#17a2b8",
        0,
        0,
        239
      ]
    }
  },
  ".border-warning": {
    "": {
      "borderColor": [
        "#ffc107",
        0,
        0,
        240
      ]
    }
  },
  ".border-danger": {
    "": {
      "borderColor": [
        "#dc3545",
        0,
        0,
        241
      ]
    }
  },
  ".border-light": {
    "": {
      "borderColor": [
        "#f8f9fa",
        0,
        0,
        242
      ]
    }
  },
  ".border-dark": {
    "": {
      "borderColor": [
        "#343a40",
        0,
        0,
        243
      ]
    }
  },
  ".border-white": {
    "": {
      "borderColor": [
        "#FFFFFF",
        0,
        0,
        244
      ]
    }
  },
  ".rounded": {
    "": {
      "borderRadius": [
        "8rpx",
        0,
        0,
        246
      ]
    }
  },
  ".rounded-lg": {
    "": {
      "borderRadius": [
        "14rpx",
        0,
        0,
        247
      ]
    }
  },
  ".rounded-top": {
    "": {
      "borderTopLeftRadius": [
        "8rpx",
        0,
        0,
        248
      ],
      "borderTopRightRadius": [
        "8rpx",
        0,
        0,
        248
      ]
    }
  },
  ".rounded-top-lg": {
    "": {
      "borderTopLeftRadius": [
        "14rpx",
        0,
        0,
        249
      ],
      "borderTopRightRadius": [
        "14rpx",
        0,
        0,
        249
      ]
    }
  },
  ".rounded-right": {
    "": {
      "borderTopRightRadius": [
        "8rpx",
        0,
        0,
        250
      ],
      "borderBottomRightRadius": [
        "8rpx",
        0,
        0,
        250
      ]
    }
  },
  ".rounded-bottom": {
    "": {
      "borderBottomRightRadius": [
        "8rpx",
        0,
        0,
        251
      ],
      "borderBottomLeftRadius": [
        "8rpx",
        0,
        0,
        251
      ]
    }
  },
  ".rounded-bottom-lg": {
    "": {
      "borderBottomRightRadius": [
        "14rpx",
        0,
        0,
        252
      ],
      "borderBottomLeftRadius": [
        "14rpx",
        0,
        0,
        252
      ]
    }
  },
  ".rounded-left": {
    "": {
      "borderTopLeftRadius": [
        "8rpx",
        0,
        0,
        253
      ],
      "borderBottomLeftRadius": [
        "8rpx",
        0,
        0,
        253
      ]
    }
  },
  ".rounded-circle": {
    "": {
      "borderRadius": [
        "100rpx",
        0,
        0,
        254
      ]
    }
  },
  ".rounded-0": {
    "": {
      "borderRadius": [
        0,
        0,
        0,
        255
      ]
    }
  },
  ".overflow-hidden": {
    "": {
      "overflow": [
        "hidden",
        0,
        0,
        258
      ]
    }
  },
  ".position-relative": {
    "": {
      "position": [
        "relative",
        0,
        0,
        260
      ]
    }
  },
  ".position-absolute": {
    "": {
      "position": [
        "absolute",
        0,
        0,
        261
      ]
    }
  },
  ".position-fixed": {
    "": {
      "position": [
        "fixed",
        0,
        0,
        262
      ]
    }
  },
  ".fixed-top": {
    "": {
      "position": [
        "fixed",
        0,
        0,
        264
      ],
      "top": [
        0,
        0,
        0,
        264
      ],
      "right": [
        0,
        0,
        0,
        264
      ],
      "left": [
        0,
        0,
        0,
        264
      ],
      "zIndex": [
        1030,
        0,
        0,
        264
      ]
    }
  },
  ".fixed-bottom": {
    "": {
      "position": [
        "fixed",
        0,
        0,
        266
      ],
      "right": [
        0,
        0,
        0,
        266
      ],
      "bottom": [
        0,
        0,
        0,
        266
      ],
      "left": [
        0,
        0,
        0,
        266
      ],
      "zIndex": [
        1030,
        0,
        0,
        266
      ]
    }
  },
  ".top-0": {
    "": {
      "top": [
        0,
        0,
        0,
        267
      ]
    }
  },
  ".left-0": {
    "": {
      "left": [
        0,
        0,
        0,
        268
      ]
    }
  },
  ".right-0": {
    "": {
      "right": [
        0,
        0,
        0,
        269
      ]
    }
  },
  ".bottom-0": {
    "": {
      "bottom": [
        0,
        0,
        0,
        270
      ]
    }
  },
  ".mask": {
    "": {
      "position": [
        "fixed",
        0,
        0,
        272
      ],
      "left": [
        0,
        0,
        0,
        272
      ],
      "right": [
        0,
        0,
        0,
        272
      ],
      "top": [
        0,
        0,
        0,
        272
      ],
      "bottom": [
        0,
        0,
        0,
        272
      ],
      "zIndex": [
        100,
        0,
        0,
        272
      ]
    }
  },
  "@VERSION": 2
}

/***/ }),
/* 4 */
/*!**************************************************************************************************!*\
  !*** /Users/ricky/Documents/Study/uniapp/bbs_study/pages/transition/transition.nvue?mpType=page ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _transition_nvue_vue_type_template_id_fb24cdf0_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transition.nvue?vue&type=template&id=fb24cdf0&scoped=true&mpType=page */ 5);\n/* harmony import */ var _transition_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transition.nvue?vue&type=script&lang=js&mpType=page */ 7);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _transition_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _transition_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 26);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./transition.nvue?vue&type=style&index=0&id=fb24cdf0&scoped=true&lang=css&mpType=page */ 24).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./transition.nvue?vue&type=style&index=0&id=fb24cdf0&scoped=true&lang=css&mpType=page */ 24).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _transition_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _transition_nvue_vue_type_template_id_fb24cdf0_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _transition_nvue_vue_type_template_id_fb24cdf0_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"fb24cdf0\",\n  \"9278ba82\",\n  false,\n  _transition_nvue_vue_type_template_id_fb24cdf0_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"pages/transition/transition.nvue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBK0k7QUFDL0k7QUFDMEU7QUFDTDtBQUNyRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLCtGQUF1RjtBQUMzSSxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsK0ZBQXVGO0FBQ2hKOztBQUVBOztBQUVBO0FBQ21OO0FBQ25OLGdCQUFnQixpTkFBVTtBQUMxQixFQUFFLDRGQUFNO0FBQ1IsRUFBRSw2R0FBTTtBQUNSLEVBQUUsc0hBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsaUhBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiI0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi90cmFuc2l0aW9uLm52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZmIyNGNkZjAmc2NvcGVkPXRydWUmbXBUeXBlPXBhZ2VcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3RyYW5zaXRpb24ubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5leHBvcnQgKiBmcm9tIFwiLi90cmFuc2l0aW9uLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZnVuY3Rpb24gaW5qZWN0U3R5bGVzIChjb250ZXh0KSB7XG4gIFxuICBpZighdGhpcy5vcHRpb25zLnN0eWxlKXtcbiAgICAgICAgICB0aGlzLm9wdGlvbnMuc3R5bGUgPSB7fVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXyl7XG4gICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18sIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSl7XG4gICAgICAgICAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKHJlcXVpcmUoXCIuL3RyYW5zaXRpb24ubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWZiMjRjZGYwJnNjb3BlZD10cnVlJmxhbmc9Y3NzJm1wVHlwZT1wYWdlXCIpLmRlZmF1bHQsIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLnN0eWxlLHJlcXVpcmUoXCIuL3RyYW5zaXRpb24ubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWZiMjRjZGYwJnNjb3BlZD10cnVlJmxhbmc9Y3NzJm1wVHlwZT1wYWdlXCIpLmRlZmF1bHQpXG4gICAgICAgICAgICB9XG5cbn1cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiZmIyNGNkZjBcIixcbiAgXCI5Mjc4YmE4MlwiLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuaW5qZWN0U3R5bGVzLmNhbGwoY29tcG9uZW50KVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJwYWdlcy90cmFuc2l0aW9uL3RyYW5zaXRpb24ubnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///4\n");

/***/ }),
/* 5 */
/*!********************************************************************************************************************************************!*\
  !*** /Users/ricky/Documents/Study/uniapp/bbs_study/pages/transition/transition.nvue?vue&type=template&id=fb24cdf0&scoped=true&mpType=page ***!
  \********************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_transition_nvue_vue_type_template_id_fb24cdf0_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./transition.nvue?vue&type=template&id=fb24cdf0&scoped=true&mpType=page */ 6);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_transition_nvue_vue_type_template_id_fb24cdf0_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_transition_nvue_vue_type_template_id_fb24cdf0_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_transition_nvue_vue_type_template_id_fb24cdf0_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_transition_nvue_vue_type_template_id_fb24cdf0_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 6 */
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/ricky/Documents/Study/uniapp/bbs_study/pages/transition/transition.nvue?vue&type=template&id=fb24cdf0&scoped=true&mpType=page ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "scroll-view",
    {
      staticStyle: { flexDirection: "column" },
      attrs: {
        scrollY: true,
        showScrollbar: true,
        enableBackToTop: true,
        bubble: "true"
      }
    },
    [
      _c(
        "view",
        {
          staticClass: ["flex", "align-center", "justify-center"],
          style: { height: _vm.screenHeight - 150 + "px" }
        },
        [
          _c(
            "view",
            {
              staticClass: ["flex", "flex-column"],
              staticStyle: { justifyContent: "center", alignItems: "center" }
            },
            [
              _c("u-image", {
                staticClass: ["loading-gif"],
                attrs: {
                  src: "/static/transition/loading.gif",
                  mode: "aspectFill"
                }
              }),
              _c(
                "u-text",
                {
                  staticClass: ["mt-3", "loading-text"],
                  appendAsTree: true,
                  attrs: { append: "tree" }
                },
                [_vm._v("loading...")]
              )
            ],
            1
          )
        ]
      )
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 7 */
/*!**************************************************************************************************************************!*\
  !*** /Users/ricky/Documents/Study/uniapp/bbs_study/pages/transition/transition.nvue?vue&type=script&lang=js&mpType=page ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_transition_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--5-0!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./transition.nvue?vue&type=script&lang=js&mpType=page */ 8);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_transition_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_transition_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_transition_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_transition_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_transition_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXFrQixDQUFnQixza0JBQUcsRUFBQyIsImZpbGUiOiI3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTUtMCEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3RyYW5zaXRpb24ubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNS0wIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdHJhbnNpdGlvbi5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///7\n");

/***/ }),
/* 8 */
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--5-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/ricky/Documents/Study/uniapp/bbs_study/pages/transition/transition.nvue?vue&type=script&lang=js&mpType=page ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 9));\n\n\n\n\n\n\n\n\n\nvar _js = _interopRequireDefault(__webpack_require__(/*! @/common/js */ 11));\nvar _api = _interopRequireDefault(__webpack_require__(/*! @/api */ 12));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);}_next(undefined);});};}var _default =\n{\n  data: function data() {\n    return {\n      screenHeight: uni.getSystemInfoSync().screenHeight };\n\n  },\n  methods: {\n    toHomePage: function toHomePage() {\n      uni.switchTab({\n        url: '/pages/tabbar/home/home' });\n\n    },\n    toLoginPage: function toLoginPage() {\n      uni.reLaunch({\n        url: '/pages/login/login' });\n\n    },\n    checkLogin: function checkLogin() {var _this = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {var _yield$$A$user$checkL, result;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:_context.prev = 0;_context.next = 3;return (\n\n\n                  _api.default.user.checkLogin());case 3:_yield$$A$user$checkL = _context.sent;result = _yield$$A$user$checkL.result;\n                _js.default.refreshUser(result);\n\n                _this.toHomePage();_context.next = 13;break;case 9:_context.prev = 9;_context.t0 = _context[\"catch\"](0);\n\n                _js.default.notice(\"请登录\");\n                _this.toLoginPage();case 13:case \"end\":return _context.stop();}}}, _callee, null, [[0, 9]]);}))();\n\n    } },\n\n  onLoad: function onLoad() {var _this2 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2() {return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:_context2.next = 2;return (\n                _this2.checkLogin());case 2:case \"end\":return _context2.stop();}}}, _callee2);}))();\n  } };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvdHJhbnNpdGlvbi90cmFuc2l0aW9uLm52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQVVBO0FBQ0Esd0U7QUFDQTtBQUNBLE1BREEsa0JBQ0E7QUFDQTtBQUNBLHdEQURBOztBQUdBLEdBTEE7QUFNQTtBQUNBLGNBREEsd0JBQ0E7QUFDQTtBQUNBLHNDQURBOztBQUdBLEtBTEE7QUFNQSxlQU5BLHlCQU1BO0FBQ0E7QUFDQSxpQ0FEQTs7QUFHQSxLQVZBO0FBV0EsY0FYQSx3QkFXQTs7O0FBR0EsZ0RBSEEsK0NBR0EsTUFIQSx5QkFHQSxNQUhBO0FBSUE7O0FBRUEsbUNBTkE7O0FBUUE7QUFDQSxvQ0FUQTs7QUFXQSxLQXRCQSxFQU5BOztBQThCQSxRQTlCQSxvQkE4QkE7QUFDQSxtQ0FEQTtBQUVBLEdBaENBLEUiLCJmaWxlIjoiOC5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cblx0PHZpZXcgOnN0eWxlPVwieyBoZWlnaHQ6IGAke3NjcmVlbkhlaWdodCAtIDE1MH1weGB9XCIgY2xhc3M9XCJmbGV4IGFsaWduLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuXHRcdDx2aWV3IGNsYXNzPVwiZmxleCBmbGV4LWNvbHVtblwiIHN0eWxlPVwianVzdGlmeS1jb250ZW50OiBjZW50ZXI7YWxpZ24taXRlbXM6IGNlbnRlcjtcIj5cclxuXHRcdFx0PGltYWdlIHNyYz1cIi9zdGF0aWMvdHJhbnNpdGlvbi9sb2FkaW5nLmdpZlwiIG1vZGU9XCJhc3BlY3RGaWxsXCIgY2xhc3M9XCJsb2FkaW5nLWdpZlwiIC8+XHJcblx0XHRcdDx0ZXh0IGNsYXNzPVwibXQtMyBsb2FkaW5nLXRleHRcIj5sb2FkaW5nLi4uPC90ZXh0PlxyXG5cdFx0PC92aWV3PlxuXHQ8L3ZpZXc+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxyXG5cdGltcG9ydCAkVSBmcm9tIFwiQC9jb21tb24vanNcIlxyXG5cdGltcG9ydCAkQSBmcm9tIFwiQC9hcGlcIlxuXHRleHBvcnQgZGVmYXVsdCB7XG5cdFx0ZGF0YSgpIHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdHNjcmVlbkhlaWdodDogdW5pLmdldFN5c3RlbUluZm9TeW5jKCkuc2NyZWVuSGVpZ2h0XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRtZXRob2RzOiB7XHJcblx0XHRcdHRvSG9tZVBhZ2UoKSB7XHJcblx0XHRcdFx0dW5pLnN3aXRjaFRhYih7XHJcblx0XHRcdFx0XHR1cmw6ICcvcGFnZXMvdGFiYmFyL2hvbWUvaG9tZSdcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHR0b0xvZ2luUGFnZSgpIHtcclxuXHRcdFx0XHR1bmkucmVMYXVuY2goe1xyXG5cdFx0XHRcdFx0dXJsOiAnL3BhZ2VzL2xvZ2luL2xvZ2luJ1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0sXHJcblx0XHRcdGFzeW5jIGNoZWNrTG9naW4oKSB7XHJcblx0XHRcdFx0dHJ5e1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRjb25zdCB7IHJlc3VsdCB9ID0gYXdhaXQgJEEudXNlci5jaGVja0xvZ2luKClcclxuXHRcdFx0XHRcdCRVLnJlZnJlc2hVc2VyKHJlc3VsdClcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0dGhpcy50b0hvbWVQYWdlKClcclxuXHRcdFx0XHR9Y2F0Y2goZSl7XHJcblx0XHRcdFx0XHQkVS5ub3RpY2UoXCLor7fnmbvlvZVcIilcclxuXHRcdFx0XHRcdHRoaXMudG9Mb2dpblBhZ2UoKVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxuXHRcdH0sXHJcblx0XHRhc3luYyBvbkxvYWQoKSB7XHJcblx0XHRcdGF3YWl0IHRoaXMuY2hlY2tMb2dpbigpXHJcblx0XHR9XG5cdH1cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuXHQubG9hZGluZy1naWYge1xyXG5cdFx0d2lkdGg6IDEwMHJweDtcclxuXHRcdGhlaWdodDogMTAwcnB4O1xyXG5cdH1cclxuXHRcclxuXHQubG9hZGluZy10ZXh0IHtcclxuXHRcdGNvbG9yOiAjZmY1ODRmO1xyXG5cdH1cbjwvc3R5bGU+XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///8\n");

/***/ }),
/* 9 */
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ 10);

/***/ }),
/* 10 */
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/node_modules/regenerator-runtime/runtime.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true });

    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function define(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
  NativeIteratorPrototype !== Op &&
  hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
  Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
  GeneratorFunctionPrototype,
  toStringTagSymbol,
  "GeneratorFunction");


  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function (genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor ?
    ctor === GeneratorFunction ||
    // For the native GeneratorFunction constructor, the best we can
    // do is to check its .name property.
    (ctor.displayName || ctor.name) === "GeneratorFunction" :
    false;
  };

  exports.mark = function (genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function (arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
        typeof value === "object" &&
        hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function (value) {
            invoke("next", value, resolve, reject);
          }, function (err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function (unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function (error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
      // If enqueue has been called before, then we want to wait until
      // all previous Promises have been resolved before calling invoke,
      // so that results are always delivered in the correct order. If
      // enqueue has not been called before, then it is important to
      // call invoke immediately, without waiting on a callback to fire,
      // so that the async generator function has the opportunity to do
      // any necessary setup in a predictable way. This predictability
      // is why the Promise constructor synchronously invokes its
      // executor callback, and why async functions synchronously
      // execute code before the first await. Since we implement simple
      // async functions in terms of async generators, it is especially
      // important to get this right, even though it requires care.
      previousPromise ? previousPromise.then(
      callInvokeWithMethodAndArg,
      // Avoid propagating failures to Promises returned by later
      // invocations of the iterator.
      callInvokeWithMethodAndArg) :
      callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
    wrap(innerFn, outerFn, self, tryLocsList),
    PromiseImpl);


    return exports.isGeneratorFunction(outerFn) ?
    iter // If outerFn is a generator, return the full iterator.
    : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done ?
          GenStateCompleted :
          GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done };


        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
        "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (!info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function () {
    return this;
  };

  Gp.toString = function () {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function (object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1,next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function reset(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
          hasOwn.call(this, name) &&
          !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function stop() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function dispatchException(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
        hasOwn.call(entry, "finallyLoc") &&
        this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry && (
      type === "break" ||
      type === "continue") &&
      finallyEntry.tryLoc <= arg &&
      arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function complete(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
      record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc };


      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    } };


  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
// If this script is executing as a CommonJS module, use module.exports
// as the regeneratorRuntime namespace. Otherwise create a new empty
// object. Either way, the resulting object will be used to initialize
// the regeneratorRuntime variable at the top of this file.
 true ? module.exports : undefined);


try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}

/***/ }),
/* 11 */
/*!************************************************************************!*\
  !*** /Users/ricky/Documents/Study/uniapp/bbs_study/common/js/index.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 9));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === \"Object\" && o.constructor) n = o.constructor.name;if (n === \"Map\" || n === \"Set\") return Array.from(o);if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}function _iterableToArrayLimit(arr, i) {if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return;var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i[\"return\"] != null) _i[\"return\"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);}_next(undefined);});};}var loading = function loading() {\n  uni.showLoading({\n    title: 'loading...' });\n\n};\n\nvar hideLoading = function hideLoading() {\n  uni.hideLoading();\n};\n\n\nvar notice = function notice(title) {\n  uni.showToast({\n    title: title,\n    icon: 'none' });\n\n};\n\nvar refreshUser = function refreshUser(info) {\n  if (info.token) {\n    uni.setStorageSync('uni_id_token', info.token);\n  }\n\n  if (info.token_expired) {\n    uni.setStorageSync('uni_id_token_expired', info.token_expired);\n  }\n};\n\nvar delayRequest = /*#__PURE__*/function () {var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(request) {var delay,delayP,_yield$Promise$all,_yield$Promise$all2,res,_args = arguments;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:delay = _args.length > 1 && _args[1] !== undefined ? _args[1] : 500;\n            delayP = new Promise(function (resolove) {\n              setTimeout(resolove, 500);\n            });_context.next = 4;return (\n              Promise.all([request, delayP]));case 4:_yield$Promise$all = _context.sent;_yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 1);res = _yield$Promise$all2[0];return _context.abrupt(\"return\",\n            res);case 8:case \"end\":return _context.stop();}}}, _callee);}));return function delayRequest(_x) {return _ref.apply(this, arguments);};}();var _default =\n\n\n{\n  loading: loading,\n  hideLoading: hideLoading,\n  notice: notice,\n  refreshUser: refreshUser,\n  delayRequest: delayRequest };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tbW9uL2pzL2luZGV4LmpzIl0sIm5hbWVzIjpbImxvYWRpbmciLCJ1bmkiLCJzaG93TG9hZGluZyIsInRpdGxlIiwiaGlkZUxvYWRpbmciLCJub3RpY2UiLCJzaG93VG9hc3QiLCJpY29uIiwicmVmcmVzaFVzZXIiLCJpbmZvIiwidG9rZW4iLCJzZXRTdG9yYWdlU3luYyIsInRva2VuX2V4cGlyZWQiLCJkZWxheVJlcXVlc3QiLCJyZXF1ZXN0IiwiZGVsYXkiLCJkZWxheVAiLCJQcm9taXNlIiwicmVzb2xvdmUiLCJzZXRUaW1lb3V0IiwiYWxsIiwicmVzIl0sIm1hcHBpbmdzIjoibzFFQUFBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFDckJDLEtBQUcsQ0FBQ0MsV0FBSixDQUFnQjtBQUNmQyxTQUFLLEVBQUUsWUFEUSxFQUFoQjs7QUFHQSxDQUpEOztBQU1BLElBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDekJILEtBQUcsQ0FBQ0csV0FBSjtBQUNBLENBRkQ7OztBQUtBLElBQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUFGLEtBQUssRUFBSTtBQUN2QkYsS0FBRyxDQUFDSyxTQUFKLENBQWM7QUFDYkgsU0FBSyxFQUFMQSxLQURhO0FBRWJJLFFBQUksRUFBRSxNQUZPLEVBQWQ7O0FBSUEsQ0FMRDs7QUFPQSxJQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFBQyxJQUFJLEVBQUk7QUFDM0IsTUFBSUEsSUFBSSxDQUFDQyxLQUFULEVBQWdCO0FBQ2ZULE9BQUcsQ0FBQ1UsY0FBSixDQUFtQixjQUFuQixFQUFtQ0YsSUFBSSxDQUFDQyxLQUF4QztBQUNBOztBQUVELE1BQUlELElBQUksQ0FBQ0csYUFBVCxFQUF3QjtBQUN2QlgsT0FBRyxDQUFDVSxjQUFKLENBQW1CLHNCQUFuQixFQUEyQ0YsSUFBSSxDQUFDRyxhQUFoRDtBQUNBO0FBQ0QsQ0FSRDs7QUFVQSxJQUFNQyxZQUFZLGtHQUFHLGlCQUFPQyxPQUFQLHlNQUFnQkMsS0FBaEIsMkRBQXdCLEdBQXhCO0FBQ2RDLGtCQURjLEdBQ0wsSUFBSUMsT0FBSixDQUFZLFVBQUFDLFFBQVEsRUFBSTtBQUN0Q0Msd0JBQVUsQ0FBQ0QsUUFBRCxFQUFXLEdBQVgsQ0FBVjtBQUNBLGFBRmMsQ0FESztBQUlBRCxxQkFBTyxDQUFDRyxHQUFSLENBQVksQ0FBQ04sT0FBRCxFQUFVRSxNQUFWLENBQVosQ0FKQSx3R0FJYkssR0FKYTtBQUtiQSxlQUxhLDBEQUFILG1CQUFaUixZQUFZLDhDQUFsQixDOzs7QUFRZTtBQUNkYixTQUFPLEVBQVBBLE9BRGM7QUFFZEksYUFBVyxFQUFYQSxXQUZjO0FBR2RDLFFBQU0sRUFBTkEsTUFIYztBQUlkRyxhQUFXLEVBQVhBLFdBSmM7QUFLZEssY0FBWSxFQUFaQSxZQUxjLEUiLCJmaWxlIjoiMTEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBsb2FkaW5nID0gKCkgPT4ge1xuXHR1bmkuc2hvd0xvYWRpbmcoe1xuXHRcdHRpdGxlOiAnbG9hZGluZy4uLidcblx0fSlcbn1cblxuY29uc3QgaGlkZUxvYWRpbmcgPSAoKSA9PiB7XG5cdHVuaS5oaWRlTG9hZGluZygpXG59XG5cblxuY29uc3Qgbm90aWNlID0gdGl0bGUgPT4ge1xuXHR1bmkuc2hvd1RvYXN0KHtcblx0XHR0aXRsZSxcblx0XHRpY29uOiAnbm9uZSdcblx0fSlcbn1cblxuY29uc3QgcmVmcmVzaFVzZXIgPSBpbmZvID0+IHtcblx0aWYgKGluZm8udG9rZW4pIHtcblx0XHR1bmkuc2V0U3RvcmFnZVN5bmMoJ3VuaV9pZF90b2tlbicsIGluZm8udG9rZW4pXG5cdH1cblx0XG5cdGlmIChpbmZvLnRva2VuX2V4cGlyZWQpIHtcblx0XHR1bmkuc2V0U3RvcmFnZVN5bmMoJ3VuaV9pZF90b2tlbl9leHBpcmVkJywgaW5mby50b2tlbl9leHBpcmVkKVxuXHR9XG59XG5cbmNvbnN0IGRlbGF5UmVxdWVzdCA9IGFzeW5jIChyZXF1ZXN0LCBkZWxheSA9IDUwMCkgPT4ge1xuXHRjb25zdCBkZWxheVAgPSBuZXcgUHJvbWlzZShyZXNvbG92ZSA9PiB7XG5cdFx0c2V0VGltZW91dChyZXNvbG92ZSwgNTAwKVxuXHR9KVxuXHRjb25zdCBbcmVzXSA9IGF3YWl0IFByb21pc2UuYWxsKFtyZXF1ZXN0LCBkZWxheVBdKVxuXHRyZXR1cm4gcmVzXG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0bG9hZGluZyxcblx0aGlkZUxvYWRpbmcsXG5cdG5vdGljZSxcblx0cmVmcmVzaFVzZXIsXG5cdGRlbGF5UmVxdWVzdFxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///11\n");

/***/ }),
/* 12 */
/*!******************************************************************!*\
  !*** /Users/ricky/Documents/Study/uniapp/bbs_study/api/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _user = _interopRequireDefault(__webpack_require__(/*! ./user.js */ 13));\nvar _post = _interopRequireDefault(__webpack_require__(/*! ./post.js */ 17));\nvar _topic = _interopRequireDefault(__webpack_require__(/*! ./topic.js */ 19));\nvar _stock = _interopRequireDefault(__webpack_require__(/*! ./stock.js */ 20));\nvar _follow = _interopRequireDefault(__webpack_require__(/*! ./follow.js */ 21));\nvar _comment = _interopRequireDefault(__webpack_require__(/*! ./comment.js */ 22));\nvar _history = _interopRequireDefault(__webpack_require__(/*! ./history.js */ 23));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _default =\n{\n  user: _user.default,\n  post: _post.default,\n  topic: _topic.default,\n  stock: _stock.default,\n  follow: _follow.default,\n  comment: _comment.default,\n  history: _history.default };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vYXBpL2luZGV4LmpzIl0sIm5hbWVzIjpbInVzZXIiLCJwb3N0IiwidG9waWMiLCJzdG9jayIsImZvbGxvdyIsImNvbW1lbnQiLCJoaXN0b3J5Il0sIm1hcHBpbmdzIjoidUZBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUY7QUFDZTtBQUNkQSxNQUFJLEVBQUpBLGFBRGM7QUFFZEMsTUFBSSxFQUFKQSxhQUZjO0FBR2RDLE9BQUssRUFBTEEsY0FIYztBQUlkQyxPQUFLLEVBQUxBLGNBSmM7QUFLZEMsUUFBTSxFQUFOQSxlQUxjO0FBTWRDLFNBQU8sRUFBUEEsZ0JBTmM7QUFPZEMsU0FBTyxFQUFQQSxnQkFQYyxFIiwiZmlsZSI6IjEyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHVzZXIgZnJvbSBcIi4vdXNlci5qc1wiXG5pbXBvcnQgcG9zdCBmcm9tIFwiLi9wb3N0LmpzXCJcbmltcG9ydCB0b3BpYyBmcm9tIFwiLi90b3BpYy5qc1wiXG5pbXBvcnQgc3RvY2sgZnJvbSBcIi4vc3RvY2suanNcIlxuaW1wb3J0IGZvbGxvdyBmcm9tIFwiLi9mb2xsb3cuanNcIlxuaW1wb3J0IGNvbW1lbnQgZnJvbSBcIi4vY29tbWVudC5qc1wiXG5pbXBvcnQgaGlzdG9yeSBmcm9tIFwiLi9oaXN0b3J5LmpzXCJcbmV4cG9ydCBkZWZhdWx0IHtcblx0dXNlcixcblx0cG9zdCxcblx0dG9waWMsXG5cdHN0b2NrLFxuXHRmb2xsb3csXG5cdGNvbW1lbnQsXG5cdGhpc3Rvcnlcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///12\n");

/***/ }),
/* 13 */
/*!*****************************************************************!*\
  !*** /Users/ricky/Documents/Study/uniapp/bbs_study/api/user.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(uniCloud) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 9));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);}_next(undefined);});};}var regitser = /*#__PURE__*/function () {var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(payload) {var username, password, gender, avatar, res;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:\n\n            username =\n\n\n\n            payload.username, password = payload.password, gender = payload.gender, avatar = payload.avatar;_context.next = 3;return (\n\n              uniCloud.callFunction({\n                name: 'index',\n                data: {\n                  action: 'user/register',\n                  data: {\n                    username: username,\n                    password: password,\n                    gender: gender,\n                    avatar: avatar } } }));case 3:res = _context.sent;return _context.abrupt(\"return\",\n\n\n\n\n            res);case 5:case \"end\":return _context.stop();}}}, _callee);}));return function regitser(_x) {return _ref.apply(this, arguments);};}();\n\n\nvar login = /*#__PURE__*/function () {var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2(payload) {var username, password, res;return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:\n            username = payload.username, password = payload.password;_context2.next = 3;return (\n\n              uniCloud.callFunction({\n                name: 'index',\n                data: {\n                  action: 'user/login',\n                  data: {\n                    username: username,\n                    password: password } } }));case 3:res = _context2.sent;return _context2.abrupt(\"return\",\n\n\n\n\n            res);case 5:case \"end\":return _context2.stop();}}}, _callee2);}));return function login(_x2) {return _ref2.apply(this, arguments);};}();\n\n\nvar checkLogin = /*#__PURE__*/function () {var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3() {var res;return _regenerator.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:_context3.next = 2;return (\n\n              uniCloud.callFunction({\n                name: 'index',\n                data: {\n                  action: 'user/checkLogin' } }));case 2:res = _context3.sent;return _context3.abrupt(\"return\",\n\n\n\n            res);case 4:case \"end\":return _context3.stop();}}}, _callee3);}));return function checkLogin() {return _ref3.apply(this, arguments);};}();var _default =\n\n\n{\n  regitser: regitser,\n  login: login,\n  checkLogin: checkLogin };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/uni-cloud/dist/index.js */ 14)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vYXBpL3VzZXIuanMiXSwibmFtZXMiOlsicmVnaXRzZXIiLCJwYXlsb2FkIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsImdlbmRlciIsImF2YXRhciIsInVuaUNsb3VkIiwiY2FsbEZ1bmN0aW9uIiwibmFtZSIsImRhdGEiLCJhY3Rpb24iLCJyZXMiLCJsb2dpbiIsImNoZWNrTG9naW4iXSwibWFwcGluZ3MiOiJ5OEJBQUEsSUFBTUEsUUFBUSxrR0FBRyxpQkFBTUMsT0FBTjs7QUFFZkMsb0JBRmU7Ozs7QUFNWkQsbUJBTlksQ0FFZkMsUUFGZSxFQUdmQyxRQUhlLEdBTVpGLE9BTlksQ0FHZkUsUUFIZSxFQUlmQyxNQUplLEdBTVpILE9BTlksQ0FJZkcsTUFKZSxFQUtmQyxNQUxlLEdBTVpKLE9BTlksQ0FLZkksTUFMZTs7QUFRRUMsc0JBQVEsQ0FBQ0MsWUFBVCxDQUFzQjtBQUN2Q0Msb0JBQUksRUFBRSxPQURpQztBQUV2Q0Msb0JBQUksRUFBRTtBQUNMQyx3QkFBTSxFQUFFLGVBREg7QUFFTEQsc0JBQUksRUFBRTtBQUNMUCw0QkFBUSxFQUFSQSxRQURLO0FBRUxDLDRCQUFRLEVBQVJBLFFBRks7QUFHTEMsMEJBQU0sRUFBTkEsTUFISztBQUlMQywwQkFBTSxFQUFOQSxNQUpLLEVBRkQsRUFGaUMsRUFBdEIsQ0FSRixTQVFWTSxHQVJVOzs7OztBQXFCVEEsZUFyQlMsMERBQUgsbUJBQVJYLFFBQVEsOENBQWQ7OztBQXdCQSxJQUFNWSxLQUFLLG1HQUFHLGtCQUFNWCxPQUFOO0FBQ0xDLG9CQURLLEdBQ2tCRCxPQURsQixDQUNMQyxRQURLLEVBQ0tDLFFBREwsR0FDa0JGLE9BRGxCLENBQ0tFLFFBREw7O0FBR0tHLHNCQUFRLENBQUNDLFlBQVQsQ0FBc0I7QUFDdkNDLG9CQUFJLEVBQUUsT0FEaUM7QUFFdkNDLG9CQUFJLEVBQUU7QUFDTEMsd0JBQU0sRUFBRSxZQURIO0FBRUxELHNCQUFJLEVBQUU7QUFDTFAsNEJBQVEsRUFBUkEsUUFESztBQUVMQyw0QkFBUSxFQUFSQSxRQUZLLEVBRkQsRUFGaUMsRUFBdEIsQ0FITCxTQUdQUSxHQUhPOzs7OztBQWNOQSxlQWRNLDREQUFILG1CQUFMQyxLQUFLLGdEQUFYOzs7QUFpQkEsSUFBTUMsVUFBVSxtR0FBRzs7QUFFQVAsc0JBQVEsQ0FBQ0MsWUFBVCxDQUFzQjtBQUN2Q0Msb0JBQUksRUFBRSxPQURpQztBQUV2Q0Msb0JBQUksRUFBRTtBQUNMQyx3QkFBTSxFQUFFLGlCQURILEVBRmlDLEVBQXRCLENBRkEsU0FFWkMsR0FGWTs7OztBQVNYQSxlQVRXLDREQUFILG1CQUFWRSxVQUFVLDZDQUFoQixDOzs7QUFZZTtBQUNkYixVQUFRLEVBQVJBLFFBRGM7QUFFZFksT0FBSyxFQUFMQSxLQUZjO0FBR2RDLFlBQVUsRUFBVkEsVUFIYyxFIiwiZmlsZSI6IjEzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcmVnaXRzZXIgPSBhc3luYyBwYXlsb2FkID0+IHtcclxuXHRjb25zdCB7XHJcblx0XHR1c2VybmFtZSxcclxuXHRcdHBhc3N3b3JkLFxyXG5cdFx0Z2VuZGVyLFxyXG5cdFx0YXZhdGFyXHJcblx0fSA9IHBheWxvYWRcclxuXHRcclxuXHRjb25zdCByZXMgPSBhd2FpdCB1bmlDbG91ZC5jYWxsRnVuY3Rpb24oe1xyXG5cdFx0bmFtZTogJ2luZGV4JyxcclxuXHRcdGRhdGE6IHtcclxuXHRcdFx0YWN0aW9uOiAndXNlci9yZWdpc3RlcicsXHJcblx0XHRcdGRhdGE6IHtcclxuXHRcdFx0XHR1c2VybmFtZSxcclxuXHRcdFx0XHRwYXNzd29yZCxcclxuXHRcdFx0XHRnZW5kZXIsXHJcblx0XHRcdFx0YXZhdGFyXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9KVxyXG5cdFxyXG5cdHJldHVybiByZXNcclxufVxyXG5cclxuY29uc3QgbG9naW4gPSBhc3luYyBwYXlsb2FkID0+IHtcclxuXHRjb25zdCB7IHVzZXJuYW1lLCBwYXNzd29yZCB9ID0gcGF5bG9hZFxyXG5cdFxyXG5cdGNvbnN0IHJlcyA9IGF3YWl0IHVuaUNsb3VkLmNhbGxGdW5jdGlvbih7XHJcblx0XHRuYW1lOiAnaW5kZXgnLFxyXG5cdFx0ZGF0YToge1xyXG5cdFx0XHRhY3Rpb246ICd1c2VyL2xvZ2luJyxcclxuXHRcdFx0ZGF0YToge1xyXG5cdFx0XHRcdHVzZXJuYW1lLFxyXG5cdFx0XHRcdHBhc3N3b3JkXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9KVxyXG5cdFxyXG5cdHJldHVybiByZXNcclxufVxyXG5cclxuY29uc3QgY2hlY2tMb2dpbiA9IGFzeW5jICgpID0+IHtcclxuXHRcclxuXHRjb25zdCByZXMgPSBhd2FpdCB1bmlDbG91ZC5jYWxsRnVuY3Rpb24oe1xyXG5cdFx0bmFtZTogJ2luZGV4JyxcclxuXHRcdGRhdGE6IHtcclxuXHRcdFx0YWN0aW9uOiAndXNlci9jaGVja0xvZ2luJ1xyXG5cdFx0fVxyXG5cdH0pXHJcblx0XHJcblx0cmV0dXJuIHJlc1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcblx0cmVnaXRzZXIsXHJcblx0bG9naW4sXHJcblx0Y2hlY2tMb2dpblxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///13\n");

/***/ }),
/* 14 */
/*!************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/uni-cloud/dist/index.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 9));var _uniI18n = __webpack_require__(/*! @dcloudio/uni-i18n */ 15);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _iterableToArray(iter) {if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) return _arrayLikeToArray(arr);}function _createForOfIteratorHelper(o, allowArrayLike) {var it;if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {if (it) o = it;var i = 0;var F = function F() {};return { s: F, n: function n() {if (i >= o.length) return { done: true };return { done: false, value: o[i++] };}, e: function e(_e25) {throw _e25;}, f: F };}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}var normalCompletion = true,didErr = false,err;return { s: function s() {it = o[Symbol.iterator]();}, n: function n() {var step = it.next();normalCompletion = step.done;return step;}, e: function e(_e26) {didErr = true;err = _e26;}, f: function f() {try {if (!normalCompletion && it.return != null) it.return();} finally {if (didErr) throw err;}} };}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function");}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });if (superClass) _setPrototypeOf(subClass, superClass);}function _createSuper(Derived) {var hasNativeReflectConstruct = _isNativeReflectConstruct();return function _createSuperInternal() {var Super = _getPrototypeOf(Derived),result;if (hasNativeReflectConstruct) {var NewTarget = _getPrototypeOf(this).constructor;result = Reflect.construct(Super, arguments, NewTarget);} else {result = Super.apply(this, arguments);}return _possibleConstructorReturn(this, result);};}function _possibleConstructorReturn(self, call) {if (call && (typeof call === "object" || typeof call === "function")) {return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self) {if (self === void 0) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _wrapNativeSuper(Class) {var _cache = typeof Map === "function" ? new Map() : undefined;_wrapNativeSuper = function _wrapNativeSuper(Class) {if (Class === null || !_isNativeFunction(Class)) return Class;if (typeof Class !== "function") {throw new TypeError("Super expression must either be null or a function");}if (typeof _cache !== "undefined") {if (_cache.has(Class)) return _cache.get(Class);_cache.set(Class, Wrapper);}function Wrapper() {return _construct(Class, arguments, _getPrototypeOf(this).constructor);}Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } });return _setPrototypeOf(Wrapper, Class);};return _wrapNativeSuper(Class);}function _construct(Parent, args, Class) {if (_isNativeReflectConstruct()) {_construct = Reflect.construct;} else {_construct = function _construct(Parent, args, Class) {var a = [null];a.push.apply(a, args);var Constructor = Function.bind.apply(Parent, a);var instance = new Constructor();if (Class) _setPrototypeOf(instance, Class.prototype);return instance;};}return _construct.apply(null, arguments);}function _isNativeReflectConstruct() {if (typeof Reflect === "undefined" || !Reflect.construct) return false;if (Reflect.construct.sham) return false;if (typeof Proxy === "function") return true;try {Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));return true;} catch (e) {return false;}}function _isNativeFunction(fn) {return Function.toString.call(fn).indexOf("[native code]") !== -1;}function _setPrototypeOf(o, p) {_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {o.__proto__ = p;return o;};return _setPrototypeOf(o, p);}function _getPrototypeOf(o) {_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {return o.__proto__ || Object.getPrototypeOf(o);};return _getPrototypeOf(o);}"undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self && self;function t(e) {return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;}function s(e, t, s) {return e(s = { path: t, exports: {}, require: function require(e, t) {return function () {throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");}(null == t && s.path);} }, s.exports), s.exports;}var n = s(function (e, t) {var s;e.exports = (s = s || function (e, t) {var s = Object.create || function () {function e() {}return function (t) {var s;return e.prototype = t, s = new e(), e.prototype = null, s;};}(),n = {},r = n.lib = {},o = r.Base = { extend: function extend(e) {var t = s(this);return e && t.mixIn(e), t.hasOwnProperty("init") && this.init !== t.init || (t.init = function () {t.$super.init.apply(this, arguments);}), t.init.prototype = t, t.$super = this, t;}, create: function create() {var e = this.extend();return e.init.apply(e, arguments), e;}, init: function init() {}, mixIn: function mixIn(e) {for (var t in e) {e.hasOwnProperty(t) && (this[t] = e[t]);}e.hasOwnProperty("toString") && (this.toString = e.toString);}, clone: function clone() {return this.init.prototype.extend(this);} },i = r.WordArray = o.extend({ init: function init(e, s) {e = this.words = e || [], this.sigBytes = s != t ? s : 4 * e.length;}, toString: function toString(e) {return (e || c).stringify(this);}, concat: function concat(e) {var t = this.words,s = e.words,n = this.sigBytes,r = e.sigBytes;if (this.clamp(), n % 4) for (var o = 0; o < r; o++) {var i = s[o >>> 2] >>> 24 - o % 4 * 8 & 255;t[n + o >>> 2] |= i << 24 - (n + o) % 4 * 8;} else for (o = 0; o < r; o += 4) {t[n + o >>> 2] = s[o >>> 2];}return this.sigBytes += r, this;}, clamp: function clamp() {var t = this.words,s = this.sigBytes;t[s >>> 2] &= 4294967295 << 32 - s % 4 * 8, t.length = e.ceil(s / 4);}, clone: function clone() {var e = o.clone.call(this);return e.words = this.words.slice(0), e;}, random: function random(t) {for (var s, n = [], r = function r(t) {t = t;var s = 987654321,n = 4294967295;return function () {var r = ((s = 36969 * (65535 & s) + (s >> 16) & n) << 16) + (t = 18e3 * (65535 & t) + (t >> 16) & n) & n;return r /= 4294967296, (r += .5) * (e.random() > .5 ? 1 : -1);};}, o = 0; o < t; o += 4) {var a = r(4294967296 * (s || e.random()));s = 987654071 * a(), n.push(4294967296 * a() | 0);}return new i.init(n, t);} }),a = n.enc = {},c = a.Hex = { stringify: function stringify(e) {for (var t = e.words, s = e.sigBytes, n = [], r = 0; r < s; r++) {var o = t[r >>> 2] >>> 24 - r % 4 * 8 & 255;n.push((o >>> 4).toString(16)), n.push((15 & o).toString(16));}return n.join("");}, parse: function parse(e) {for (var t = e.length, s = [], n = 0; n < t; n += 2) {s[n >>> 3] |= parseInt(e.substr(n, 2), 16) << 24 - n % 8 * 4;}return new i.init(s, t / 2);} },u = a.Latin1 = { stringify: function stringify(e) {for (var t = e.words, s = e.sigBytes, n = [], r = 0; r < s; r++) {var o = t[r >>> 2] >>> 24 - r % 4 * 8 & 255;n.push(String.fromCharCode(o));}return n.join("");}, parse: function parse(e) {for (var t = e.length, s = [], n = 0; n < t; n++) {s[n >>> 2] |= (255 & e.charCodeAt(n)) << 24 - n % 4 * 8;}return new i.init(s, t);} },h = a.Utf8 = { stringify: function stringify(e) {try {return decodeURIComponent(escape(u.stringify(e)));} catch (e) {throw new Error("Malformed UTF-8 data");}}, parse: function parse(e) {return u.parse(unescape(encodeURIComponent(e)));} },l = r.BufferedBlockAlgorithm = o.extend({ reset: function reset() {this._data = new i.init(), this._nDataBytes = 0;}, _append: function _append(e) {"string" == typeof e && (e = h.parse(e)), this._data.concat(e), this._nDataBytes += e.sigBytes;}, _process: function _process(t) {var s = this._data,n = s.words,r = s.sigBytes,o = this.blockSize,a = r / (4 * o),c = (a = t ? e.ceil(a) : e.max((0 | a) - this._minBufferSize, 0)) * o,u = e.min(4 * c, r);if (c) {for (var h = 0; h < c; h += o) {this._doProcessBlock(n, h);}var l = n.splice(0, c);s.sigBytes -= u;}return new i.init(l, u);}, clone: function clone() {var e = o.clone.call(this);return e._data = this._data.clone(), e;}, _minBufferSize: 0 }),d = (r.Hasher = l.extend({ cfg: o.extend(), init: function init(e) {this.cfg = this.cfg.extend(e), this.reset();}, reset: function reset() {l.reset.call(this), this._doReset();}, update: function update(e) {return this._append(e), this._process(), this;}, finalize: function finalize(e) {return e && this._append(e), this._doFinalize();}, blockSize: 16, _createHelper: function _createHelper(e) {return function (t, s) {return new e.init(s).finalize(t);};}, _createHmacHelper: function _createHmacHelper(e) {return function (t, s) {return new d.HMAC.init(e, s).finalize(t);};} }), n.algo = {});return n;}(Math), s);}),r = (s(function (e, t) {var s;e.exports = (s = n, function (e) {var t = s,n = t.lib,r = n.WordArray,o = n.Hasher,i = t.algo,a = [];!function () {for (var t = 0; t < 64; t++) {a[t] = 4294967296 * e.abs(e.sin(t + 1)) | 0;}}();var c = i.MD5 = o.extend({ _doReset: function _doReset() {this._hash = new r.init([1732584193, 4023233417, 2562383102, 271733878]);}, _doProcessBlock: function _doProcessBlock(e, t) {for (var s = 0; s < 16; s++) {var n = t + s,r = e[n];e[n] = 16711935 & (r << 8 | r >>> 24) | 4278255360 & (r << 24 | r >>> 8);}var o = this._hash.words,i = e[t + 0],c = e[t + 1],f = e[t + 2],p = e[t + 3],g = e[t + 4],m = e[t + 5],y = e[t + 6],_ = e[t + 7],w = e[t + 8],k = e[t + 9],S = e[t + 10],v = e[t + 11],T = e[t + 12],P = e[t + 13],A = e[t + 14],I = e[t + 15],b = o[0],E = o[1],O = o[2],U = o[3];b = u(b, E, O, U, i, 7, a[0]), U = u(U, b, E, O, c, 12, a[1]), O = u(O, U, b, E, f, 17, a[2]), E = u(E, O, U, b, p, 22, a[3]), b = u(b, E, O, U, g, 7, a[4]), U = u(U, b, E, O, m, 12, a[5]), O = u(O, U, b, E, y, 17, a[6]), E = u(E, O, U, b, _, 22, a[7]), b = u(b, E, O, U, w, 7, a[8]), U = u(U, b, E, O, k, 12, a[9]), O = u(O, U, b, E, S, 17, a[10]), E = u(E, O, U, b, v, 22, a[11]), b = u(b, E, O, U, T, 7, a[12]), U = u(U, b, E, O, P, 12, a[13]), O = u(O, U, b, E, A, 17, a[14]), b = h(b, E = u(E, O, U, b, I, 22, a[15]), O, U, c, 5, a[16]), U = h(U, b, E, O, y, 9, a[17]), O = h(O, U, b, E, v, 14, a[18]), E = h(E, O, U, b, i, 20, a[19]), b = h(b, E, O, U, m, 5, a[20]), U = h(U, b, E, O, S, 9, a[21]), O = h(O, U, b, E, I, 14, a[22]), E = h(E, O, U, b, g, 20, a[23]), b = h(b, E, O, U, k, 5, a[24]), U = h(U, b, E, O, A, 9, a[25]), O = h(O, U, b, E, p, 14, a[26]), E = h(E, O, U, b, w, 20, a[27]), b = h(b, E, O, U, P, 5, a[28]), U = h(U, b, E, O, f, 9, a[29]), O = h(O, U, b, E, _, 14, a[30]), b = l(b, E = h(E, O, U, b, T, 20, a[31]), O, U, m, 4, a[32]), U = l(U, b, E, O, w, 11, a[33]), O = l(O, U, b, E, v, 16, a[34]), E = l(E, O, U, b, A, 23, a[35]), b = l(b, E, O, U, c, 4, a[36]), U = l(U, b, E, O, g, 11, a[37]), O = l(O, U, b, E, _, 16, a[38]), E = l(E, O, U, b, S, 23, a[39]), b = l(b, E, O, U, P, 4, a[40]), U = l(U, b, E, O, i, 11, a[41]), O = l(O, U, b, E, p, 16, a[42]), E = l(E, O, U, b, y, 23, a[43]), b = l(b, E, O, U, k, 4, a[44]), U = l(U, b, E, O, T, 11, a[45]), O = l(O, U, b, E, I, 16, a[46]), b = d(b, E = l(E, O, U, b, f, 23, a[47]), O, U, i, 6, a[48]), U = d(U, b, E, O, _, 10, a[49]), O = d(O, U, b, E, A, 15, a[50]), E = d(E, O, U, b, m, 21, a[51]), b = d(b, E, O, U, T, 6, a[52]), U = d(U, b, E, O, p, 10, a[53]), O = d(O, U, b, E, S, 15, a[54]), E = d(E, O, U, b, c, 21, a[55]), b = d(b, E, O, U, w, 6, a[56]), U = d(U, b, E, O, I, 10, a[57]), O = d(O, U, b, E, y, 15, a[58]), E = d(E, O, U, b, P, 21, a[59]), b = d(b, E, O, U, g, 6, a[60]), U = d(U, b, E, O, v, 10, a[61]), O = d(O, U, b, E, f, 15, a[62]), E = d(E, O, U, b, k, 21, a[63]), o[0] = o[0] + b | 0, o[1] = o[1] + E | 0, o[2] = o[2] + O | 0, o[3] = o[3] + U | 0;}, _doFinalize: function _doFinalize() {var t = this._data,s = t.words,n = 8 * this._nDataBytes,r = 8 * t.sigBytes;s[r >>> 5] |= 128 << 24 - r % 32;var o = e.floor(n / 4294967296),i = n;s[15 + (r + 64 >>> 9 << 4)] = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8), s[14 + (r + 64 >>> 9 << 4)] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8), t.sigBytes = 4 * (s.length + 1), this._process();for (var a = this._hash, c = a.words, u = 0; u < 4; u++) {var h = c[u];c[u] = 16711935 & (h << 8 | h >>> 24) | 4278255360 & (h << 24 | h >>> 8);}return a;}, clone: function clone() {var e = o.clone.call(this);return e._hash = this._hash.clone(), e;} });function u(e, t, s, n, r, o, i) {var a = e + (t & s | ~t & n) + r + i;return (a << o | a >>> 32 - o) + t;}function h(e, t, s, n, r, o, i) {var a = e + (t & n | s & ~n) + r + i;return (a << o | a >>> 32 - o) + t;}function l(e, t, s, n, r, o, i) {var a = e + (t ^ s ^ n) + r + i;return (a << o | a >>> 32 - o) + t;}function d(e, t, s, n, r, o, i) {var a = e + (s ^ (t | ~n)) + r + i;return (a << o | a >>> 32 - o) + t;}t.MD5 = o._createHelper(c), t.HmacMD5 = o._createHmacHelper(c);}(Math), s.MD5);}), s(function (e, t) {var s, r, o;e.exports = (r = (s = n).lib.Base, o = s.enc.Utf8, void (s.algo.HMAC = r.extend({ init: function init(e, t) {e = this._hasher = new e.init(), "string" == typeof t && (t = o.parse(t));var s = e.blockSize,n = 4 * s;t.sigBytes > n && (t = e.finalize(t)), t.clamp();for (var r = this._oKey = t.clone(), i = this._iKey = t.clone(), a = r.words, c = i.words, u = 0; u < s; u++) {a[u] ^= 1549556828, c[u] ^= 909522486;}r.sigBytes = i.sigBytes = n, this.reset();}, reset: function reset() {var e = this._hasher;e.reset(), e.update(this._iKey);}, update: function update(e) {return this._hasher.update(e), this;}, finalize: function finalize(e) {var t = this._hasher,s = t.finalize(e);return t.reset(), t.finalize(this._oKey.clone().concat(s));} })));}), s(function (e, t) {e.exports = n.HmacMD5;}));function o(e) {return Object.prototype.toString.call(e).slice(8, -1).toLowerCase();}function i(e) {return "object" === o(e);}var a = /*#__PURE__*/function (_Error) {_inherits(a, _Error);var _super = _createSuper(a);function a(e, t) {var _this;_classCallCheck(this, a);_this = _super.call(this, e), _this.code = t;return _this;}return a;}( /*#__PURE__*/_wrapNativeSuper(Error));function c(e) {return e && "string" == typeof e ? JSON.parse(e) : e;}var u = "development" === "development",h = "app-plus",l = c(Object({"NODE_ENV":"development","UNI_APP_ID":"__UNI__B029C5F","UNI_APP_NAME":"社区交友","UNI_PLATFORM":"app-plus","VUE_APP_PLATFORM":"app-plus","UNI_CLOUD_PROVIDER":[{"provider":"aliyun","spaceName":"bbs-study","spaceId":"fb12f95b-8c04-47b1-bde1-2fce76202c11","clientSecret":"yP0A2eUOSwpXocs8Bpit6A==","endpoint":"https://api.bspapp.com"}],"HBX_USER_TOKEN":"","UNI_AUTOMATOR_WS_ENDPOINT":undefined}).UNICLOUD_DEBUG),d = c([{"provider":"aliyun","spaceName":"bbs-study","spaceId":"fb12f95b-8c04-47b1-bde1-2fce76202c11","clientSecret":"yP0A2eUOSwpXocs8Bpit6A==","endpoint":"https://api.bspapp.com"}]),f = Object({"NODE_ENV":"development","UNI_APP_ID":"__UNI__B029C5F","UNI_APP_NAME":"社区交友","UNI_PLATFORM":"app-plus","VUE_APP_PLATFORM":"app-plus","UNI_CLOUD_PROVIDER":[{"provider":"aliyun","spaceName":"bbs-study","spaceId":"fb12f95b-8c04-47b1-bde1-2fce76202c11","clientSecret":"yP0A2eUOSwpXocs8Bpit6A==","endpoint":"https://api.bspapp.com"}],"HBX_USER_TOKEN":"","UNI_AUTOMATOR_WS_ENDPOINT":undefined}).RUN_BY_HBUILDERX;var p = "";try {{var _e2 = __webpack_require__(/*! uni-stat-config */ 16).default || __webpack_require__(/*! uni-stat-config */ 16);p = _e2.appid;}} catch (e) {}var g = {};function m(e) {var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};var s, n;return s = g, n = e, Object.prototype.hasOwnProperty.call(s, n) || (g[e] = t), g[e];}"app-plus" === h && (g = uni._globalUniCloudObj ? uni._globalUniCloudObj : uni._globalUniCloudObj = {});var y = ["invoke", "success", "fail", "complete"],_ = m("_globalUniCloudInterceptor");function w(e, t) {_[e] || (_[e] = {}), i(t) && Object.keys(t).forEach(function (s) {y.indexOf(s) > -1 && function (e, t, s) {var n = _[e][t];n || (n = _[e][t] = []), -1 === n.indexOf(s) && "function" == typeof s && n.push(s);}(e, s, t[s]);});}function k(e, t) {_[e] || (_[e] = {}), i(t) ? Object.keys(t).forEach(function (s) {y.indexOf(s) > -1 && function (e, t, s) {var n = _[e][t];if (!n) return;var r = n.indexOf(s);r > -1 && n.splice(r, 1);}(e, s, t[s]);}) : delete _[e];}function S(e, t) {return e && 0 !== e.length ? e.reduce(function (e, s) {return e.then(function () {return s(t);});}, Promise.resolve()) : Promise.resolve();}function v(e, t) {return _[e] && _[e][t] || [];}function T(e, t) {return t ? function (s) {var _this2 = this;var n = "callFunction" === t && "DCloud-clientDB" === (s && s.name);var r;r = this.isReady ? Promise.resolve() : this.initUniCloud, s = s || {};var o = r.then(function () {return n ? Promise.resolve() : S(v(t, "invoke"), s);}).then(function () {return e.call(_this2, s);}).then(function (e) {return n ? Promise.resolve(e) : S(v(t, "success"), e).then(function () {return S(v(t, "complete"), e);}).then(function () {return Promise.resolve(e);});}, function (e) {return n ? Promise.reject(e) : S(v(t, "fail"), e).then(function () {return S(v(t, "complete"), e);}).then(function () {return Promise.reject(e);});});if (!(s.success || s.fail || s.complete)) return o;o.then(function (e) {s.success && s.success(e), s.complete && s.complete(e);}, function (e) {s.fail && s.fail(e), s.complete && s.complete(e);});} : function (t) {if (!((t = t || {}).success || t.fail || t.complete)) return e.call(this, t);e.call(this, t).then(function (e) {t.success && t.success(e), t.complete && t.complete(e);}, function (e) {t.fail && t.fail(e), t.complete && t.complete(e);});};}var P = /*#__PURE__*/function (_Error2) {_inherits(P, _Error2);var _super2 = _createSuper(P);function P(e) {var _this3;_classCallCheck(this, P);_this3 = _super2.call(this, e.message), _this3.errMsg = e.message || "", Object.defineProperties(_assertThisInitialized(_this3), { code: { get: function get() {return e.code;} }, requestId: { get: function get() {return e.requestId;} }, message: { get: function get() {return this.errMsg;}, set: function set(e) {this.errMsg = e;} } });return _this3;}return P;}( /*#__PURE__*/_wrapNativeSuper(Error));var _e3 = (0, _uniI18n.initVueI18n)({ "zh-Hans": { "uniCloud.init.paramRequired": "缺少参数：{param}", "uniCloud.uploadFile.fileError": "filePath应为File对象" }, "zh-Hant": { "uniCloud.init.paramRequired": "缺少参数：{param}", "uniCloud.uploadFile.fileError": "filePath应为File对象" }, en: { "uniCloud.init.paramRequired": "{param} required", "uniCloud.uploadFile.fileError": "filePath should be instance of File" }, fr: { "uniCloud.init.paramRequired": "{param} required", "uniCloud.uploadFile.fileError": "filePath should be instance of File" }, es: { "uniCloud.init.paramRequired": "{param} required", "uniCloud.uploadFile.fileError": "filePath should be instance of File" } }, "zh-Hans"),A = _e3.t,I = _e3.setLocale,b = _e3.getLocale;function E() {var _uni$getSystemInfoSyn = uni.getSystemInfoSync(),e = _uni$getSystemInfoSyn.deviceId,t = _uni$getSystemInfoSyn.platform;return { PLATFORM: h, OS: t, APPID: p, LOCALE: b(), DEVICEID: e, CLIENT_SDK_VERSION: "1.0.14" };}var O = { sign: function sign(e, t) {var s = "";return Object.keys(e).sort().forEach(function (t) {e[t] && (s = s + "&" + t + "=" + e[t]);}), s = s.slice(1), r(s, t).toString();}, wrappedRequest: function wrappedRequest(e, t) {return new Promise(function (s, n) {t(Object.assign(e, { complete: function complete(e) {e || (e = {}), u && "h5" === h && e.errMsg && 0 === e.errMsg.indexOf("request:fail") && console.warn("发布H5，需要在uniCloud后台操作，绑定安全域名，否则会因为跨域问题而无法访问。教程参考：https://uniapp.dcloud.io/uniCloud/quickstart?id=useinh5");var t = e.data && e.data.header && e.data.header["x-serverless-request-id"] || e.header && e.header["request-id"];if (!e.statusCode || e.statusCode >= 400) return n(new P({ code: "SYS_ERR", message: e.errMsg || "request:fail", requestId: t }));var r = e.data;if (r.error) return n(new P({ code: r.error.code, message: r.error.message, requestId: t }));r.result = r.data, r.requestId = t, delete r.data, s(r);} }));});} };var U = { request: function request(e) {return uni.request(e);}, uploadFile: function uploadFile(e) {return uni.uploadFile(e);}, setStorageSync: function setStorageSync(e, t) {return uni.setStorageSync(e, t);}, getStorageSync: function getStorageSync(e) {return uni.getStorageSync(e);}, removeStorageSync: function removeStorageSync(e) {return uni.removeStorageSync(e);}, clearStorageSync: function clearStorageSync() {return uni.clearStorageSync();} };var C = /*#__PURE__*/function () {function C(e) {_classCallCheck(this, C);["spaceId", "clientSecret"].forEach(function (t) {if (!Object.prototype.hasOwnProperty.call(e, t)) throw new Error(A("uniCloud.init.paramRequired", { param: t }));}), this.config = Object.assign({}, { endpoint: "https://api.bspapp.com" }, e), this.config.provider = "aliyun", this.config.requestUrl = this.config.endpoint + "/client", this.config.envType = this.config.envType || "public", this.config.accessTokenKey = "access_token_" + this.config.spaceId, this.adapter = U, this._getAccessTokenPromise = null, this._getAccessTokenPromiseStatus = null;}_createClass(C, [{ key: "setAccessToken", value: function setAccessToken(e) {this.accessToken = e;} }, { key: "requestWrapped", value: function requestWrapped(e) {return O.wrappedRequest(e, this.adapter.request);} }, { key: "requestAuth", value: function requestAuth(e) {return this.requestWrapped(e);} }, { key: "request", value: function request(e, t) {var _this4 = this;return Promise.resolve().then(function () {return _this4.hasAccessToken ? t ? _this4.requestWrapped(e) : _this4.requestWrapped(e).catch(function (t) {return new Promise(function (e, s) {!t || "GATEWAY_INVALID_TOKEN" !== t.code && "InvalidParameter.InvalidToken" !== t.code ? s(t) : e();}).then(function () {return _this4.getAccessToken();}).then(function () {var t = _this4.rebuildRequest(e);return _this4.request(t, !0);});}) : _this4.getAccessToken().then(function () {var t = _this4.rebuildRequest(e);return _this4.request(t, !0);});});} }, { key: "rebuildRequest", value: function rebuildRequest(e) {var t = Object.assign({}, e);return t.data.token = this.accessToken, t.header["x-basement-token"] = this.accessToken, t.header["x-serverless-sign"] = O.sign(t.data, this.config.clientSecret), t;} }, { key: "setupRequest", value: function setupRequest(e, t) {var s = Object.assign({}, e, { spaceId: this.config.spaceId, timestamp: Date.now() }),n = { "Content-Type": "application/json" };return "auth" !== t && (s.token = this.accessToken, n["x-basement-token"] = this.accessToken), n["x-serverless-sign"] = O.sign(s, this.config.clientSecret), { url: this.config.requestUrl, method: "POST", data: s, dataType: "json", header: n };} }, { key: "getAccessToken", value: function getAccessToken() {var _this5 = this;if ("pending" === this._getAccessTokenPromiseStatus) return this._getAccessTokenPromise;this._getAccessTokenPromiseStatus = "pending";return this._getAccessTokenPromise = this.requestAuth(this.setupRequest({ method: "serverless.auth.user.anonymousAuthorize", params: "{}" }, "auth")).then(function (e) {return new Promise(function (t, s) {e.result && e.result.accessToken ? (_this5.setAccessToken(e.result.accessToken), _this5._getAccessTokenPromiseStatus = "fulfilled", t(_this5.accessToken)) : (_this5._getAccessTokenPromiseStatus = "rejected", s(new P({ code: "AUTH_FAILED", message: "获取accessToken失败" })));});}, function (e) {return _this5._getAccessTokenPromiseStatus = "rejected", Promise.reject(e);}), this._getAccessTokenPromise;} }, { key: "authorize", value: function authorize() {this.getAccessToken();} }, { key: "callFunction", value: function callFunction(e) {var t = { method: "serverless.function.runtime.invoke", params: JSON.stringify({ functionTarget: e.name, functionArgs: e.data || {} }) };return this.request(this.setupRequest(t));} }, { key: "getOSSUploadOptionsFromPath", value: function getOSSUploadOptionsFromPath(e) {var t = { method: "serverless.file.resource.generateProximalSign", params: JSON.stringify(e) };return this.request(this.setupRequest(t));} }, { key: "uploadFileToOSS", value: function uploadFileToOSS(_ref) {var _this6 = this;var e = _ref.url,t = _ref.formData,s = _ref.name,n = _ref.filePath,r = _ref.fileType,o = _ref.onUploadProgress;return new Promise(function (i, a) {var c = _this6.adapter.uploadFile({ url: e, formData: t, name: s, filePath: n, fileType: r, header: { "X-OSS-server-side-encrpytion": "AES256" }, success: function success(e) {e && e.statusCode < 400 ? i(e) : a(new P({ code: "UPLOAD_FAILED", message: "文件上传失败" }));}, fail: function fail(e) {a(new P({ code: e.code || "UPLOAD_FAILED", message: e.message || e.errMsg || "文件上传失败" }));} });"function" == typeof o && c && "function" == typeof c.onProgressUpdate && c.onProgressUpdate(function (e) {o({ loaded: e.totalBytesSent, total: e.totalBytesExpectedToSend });});});} }, { key: "reportOSSUpload", value: function reportOSSUpload(e) {var t = { method: "serverless.file.resource.report", params: JSON.stringify(e) };return this.request(this.setupRequest(t));} }, { key: "uploadFile", value: function uploadFile(_ref2) {var _this7 = this;var e = _ref2.filePath,t = _ref2.cloudPath,_ref2$fileType = _ref2.fileType,s = _ref2$fileType === void 0 ? "image" : _ref2$fileType,n = _ref2.onUploadProgress,r = _ref2.config;if ("string" !== o(t)) throw new P({ code: "INVALID_PARAM", message: "cloudPath必须为字符串类型" });if (!(t = t.trim())) throw new P({ code: "CLOUDPATH_REQUIRED", message: "cloudPath不可为空" });if (/:\/\//.test(t)) throw new P({ code: "INVALID_PARAM", message: "cloudPath不合法" });var i = r && r.envType || this.config.envType;var a, c;return this.getOSSUploadOptionsFromPath({ env: i, filename: t }).then(function (t) {var r = t.result;a = r.id, c = "https://" + r.cdnDomain + "/" + r.ossPath;var o = { url: "https://" + r.host, formData: { "Cache-Control": "max-age=2592000", "Content-Disposition": "attachment", OSSAccessKeyId: r.accessKeyId, Signature: r.signature, host: r.host, id: a, key: r.ossPath, policy: r.policy, success_action_status: 200 }, fileName: "file", name: "file", filePath: e, fileType: s };return _this7.uploadFileToOSS(Object.assign({}, o, { onUploadProgress: n }));}).then(function () {return _this7.reportOSSUpload({ id: a });}).then(function (t) {return new Promise(function (s, n) {t.success ? s({ success: !0, filePath: e, fileID: c }) : n(new P({ code: "UPLOAD_FAILED", message: "文件上传失败" }));});});} }, { key: "deleteFile", value: function deleteFile(_ref3) {var e = _ref3.fileList;var t = { method: "serverless.file.resource.delete", params: JSON.stringify({ id: e[0] }) };return this.request(this.setupRequest(t));} }, { key: "getTempFileURL", value: function getTempFileURL() {var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},e = _ref4.fileList;return new Promise(function (t, s) {Array.isArray(e) && 0 !== e.length || s(new P({ code: "INVALID_PARAM", message: "fileList的元素必须是非空的字符串" })), t({ fileList: e.map(function (e) {return { fileID: e, tempFileURL: e };}) });});} }, { key: "hasAccessToken", get: function get() {return !!this.accessToken;} }]);return C;}();var x = { init: function init(e) {var t = new C(e),s = { signInAnonymously: function signInAnonymously() {return t.authorize();}, getLoginState: function getLoginState() {return Promise.resolve(!1);} };return t.auth = function () {return s;}, t.customAuth = t.auth, t;} },D = "undefined" != typeof location && "http:" === location.protocol ? "http:" : "https:";var R;!function (e) {e.local = "local", e.none = "none", e.session = "session";}(R || (R = {}));var q = function q() {};var F = function F() {var e;if (!Promise) {e = function e() {}, e.promise = {};var _t = function _t() {throw new Error('Your Node runtime does support ES6 Promises. Set "global.Promise" to your preferred implementation of promises.');};return Object.defineProperty(e.promise, "then", { get: _t }), Object.defineProperty(e.promise, "catch", { get: _t }), e;}var t = new Promise(function (t, s) {e = function e(_e4, n) {return _e4 ? s(_e4) : t(n);};});return e.promise = t, e;};function L(e) {return void 0 === e;}function N(e) {return "[object Null]" === Object.prototype.toString.call(e);}var M;function $(e) {var t = (s = e, "[object Array]" === Object.prototype.toString.call(s) ? e : [e]);var s;var _iterator = _createForOfIteratorHelper(t),_step;try {for (_iterator.s(); !(_step = _iterator.n()).done;) {var _e5 = _step.value;var _t2 = _e5.isMatch,_s = _e5.genAdapter,_n = _e5.runtime;if (_t2()) return { adapter: _s(), runtime: _n };}} catch (err) {_iterator.e(err);} finally {_iterator.f();}}!function (e) {e.WEB = "web", e.WX_MP = "wx_mp";}(M || (M = {}));var j = { adapter: null, runtime: void 0 },K = ["anonymousUuidKey"];var B = /*#__PURE__*/function (_q) {_inherits(B, _q);var _super3 = _createSuper(B);function B() {var _this8;_classCallCheck(this, B);_this8 = _super3.call(this), j.adapter.root.tcbObject || (j.adapter.root.tcbObject = {});return _this8;}_createClass(B, [{ key: "setItem", value: function setItem(e, t) {j.adapter.root.tcbObject[e] = t;} }, { key: "getItem", value: function getItem(e) {return j.adapter.root.tcbObject[e];} }, { key: "removeItem", value: function removeItem(e) {delete j.adapter.root.tcbObject[e];} }, { key: "clear", value: function clear() {delete j.adapter.root.tcbObject;} }]);return B;}(q);function H(e, t) {switch (e) {case "local":return t.localStorage || new B();case "none":return new B();default:return t.sessionStorage || new B();}}var W = /*#__PURE__*/function () {function W(e) {_classCallCheck(this, W);if (!this._storage) {this._persistence = j.adapter.primaryStorage || e.persistence, this._storage = H(this._persistence, j.adapter);var _t3 = "access_token_".concat(e.env),_s2 = "access_token_expire_".concat(e.env),_n2 = "refresh_token_".concat(e.env),_r = "anonymous_uuid_".concat(e.env),_o = "login_type_".concat(e.env),_i = "user_info_".concat(e.env);this.keys = { accessTokenKey: _t3, accessTokenExpireKey: _s2, refreshTokenKey: _n2, anonymousUuidKey: _r, loginTypeKey: _o, userInfoKey: _i };}}_createClass(W, [{ key: "updatePersistence", value: function updatePersistence(e) {if (e === this._persistence) return;var t = "local" === this._persistence;this._persistence = e;var s = H(e, j.adapter);for (var _e6 in this.keys) {var _n3 = this.keys[_e6];if (t && K.includes(_e6)) continue;var _r2 = this._storage.getItem(_n3);L(_r2) || N(_r2) || (s.setItem(_n3, _r2), this._storage.removeItem(_n3));}this._storage = s;} }, { key: "setStore", value: function setStore(e, t, s) {if (!this._storage) return;var n = { version: s || "localCachev1", content: t },r = JSON.stringify(n);try {this._storage.setItem(e, r);} catch (e) {throw e;}} }, { key: "getStore", value: function getStore(e, t) {try {if (!this._storage) return;} catch (e) {return "";}t = t || "localCachev1";var s = this._storage.getItem(e);if (!s) return "";if (s.indexOf(t) >= 0) {return JSON.parse(s).content;}return "";} }, { key: "removeStore", value: function removeStore(e) {this._storage.removeItem(e);} }]);return W;}();var z = {},V = {};function J(e) {return z[e];}var Y = function Y(e, t) {_classCallCheck(this, Y);this.data = t || null, this.name = e;};var X = /*#__PURE__*/function (_Y) {_inherits(X, _Y);var _super4 = _createSuper(X);function X(e, t) {var _this9;_classCallCheck(this, X);_this9 = _super4.call(this, "error", { error: e, data: t }), _this9.error = e;return _this9;}return X;}(Y);var G = new ( /*#__PURE__*/function () {function _class() {_classCallCheck(this, _class);this._listeners = {};}_createClass(_class, [{ key: "on", value: function on(e, t) {return function (e, t, s) {s[e] = s[e] || [], s[e].push(t);}(e, t, this._listeners), this;} }, { key: "off", value: function off(e, t) {return function (e, t, s) {if (s && s[e]) {var _n4 = s[e].indexOf(t);-1 !== _n4 && s[e].splice(_n4, 1);}}(e, t, this._listeners), this;} }, { key: "fire", value: function fire(e, t) {if (e instanceof X) return console.error(e.error), this;var s = "string" == typeof e ? new Y(e, t || {}) : e;var n = s.name;if (this._listens(n)) {s.target = this;var _e7 = this._listeners[n] ? _toConsumableArray(this._listeners[n]) : [];var _iterator2 = _createForOfIteratorHelper(_e7),_step2;try {for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {var _t4 = _step2.value;_t4.call(this, s);}} catch (err) {_iterator2.e(err);} finally {_iterator2.f();}}return this;} }, { key: "_listens", value: function _listens(e) {return this._listeners[e] && this._listeners[e].length > 0;} }]);return _class;}())();function Q(e, t) {G.on(e, t);}function Z(e) {var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};G.fire(e, t);}function ee(e, t) {G.off(e, t);}var te = "loginStateChanged",se = "loginStateExpire",ne = "loginTypeChanged",re = "anonymousConverted",oe = "refreshAccessToken";var ie;!function (e) {e.ANONYMOUS = "ANONYMOUS", e.WECHAT = "WECHAT", e.WECHAT_PUBLIC = "WECHAT-PUBLIC", e.WECHAT_OPEN = "WECHAT-OPEN", e.CUSTOM = "CUSTOM", e.EMAIL = "EMAIL", e.USERNAME = "USERNAME", e.NULL = "NULL";}(ie || (ie = {}));var ae = ["auth.getJwt", "auth.logout", "auth.signInWithTicket", "auth.signInAnonymously", "auth.signIn", "auth.fetchAccessTokenWithRefreshToken", "auth.signUpWithEmailAndPassword", "auth.activateEndUserMail", "auth.sendPasswordResetEmail", "auth.resetPasswordWithToken", "auth.isUsernameRegistered"],ce = { "X-SDK-Version": "1.3.5" };function ue(e, t, s) {var n = e[t];e[t] = function (t) {var r = {},o = {};s.forEach(function (s) {var _s$call = s.call(e, t),n = _s$call.data,i = _s$call.headers;Object.assign(r, n), Object.assign(o, i);});var i = t.data;return i && function () {var e;if (e = i, "[object FormData]" !== Object.prototype.toString.call(e)) t.data = _objectSpread(_objectSpread({}, i), r);else for (var _e8 in r) {i.append(_e8, r[_e8]);}}(), t.headers = _objectSpread(_objectSpread({}, t.headers || {}), o), n.call(e, t);};}function he() {var e = Math.random().toString(16).slice(2);return { data: { seqId: e }, headers: _objectSpread(_objectSpread({}, ce), {}, { "x-seqid": e }) };}var le = /*#__PURE__*/function () {function le() {var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};_classCallCheck(this, le);var t;this.config = e, this._reqClass = new j.adapter.reqClass({ timeout: this.config.timeout, timeoutMsg: "\u8BF7\u6C42\u5728".concat(this.config.timeout / 1e3, "s\u5185\u672A\u5B8C\u6210\uFF0C\u5DF2\u4E2D\u65AD"), restrictedMethods: ["post"] }), this._cache = J(this.config.env), this._localCache = (t = this.config.env, V[t]), ue(this._reqClass, "post", [he]), ue(this._reqClass, "upload", [he]), ue(this._reqClass, "download", [he]);}_createClass(le, [{ key: "post", value: function () {var _post = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(e) {return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:_context.next = 2;return this._reqClass.post(e);case 2:return _context.abrupt("return", _context.sent);case 3:case "end":return _context.stop();}}}, _callee, this);}));function post(_x) {return _post.apply(this, arguments);}return post;}() }, { key: "upload", value: function () {var _upload = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2(e) {return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:_context2.next = 2;return this._reqClass.upload(e);case 2:return _context2.abrupt("return", _context2.sent);case 3:case "end":return _context2.stop();}}}, _callee2, this);}));function upload(_x2) {return _upload.apply(this, arguments);}return upload;}() }, { key: "download", value: function () {var _download = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3(e) {return _regenerator.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:_context3.next = 2;return this._reqClass.download(e);case 2:return _context3.abrupt("return", _context3.sent);case 3:case "end":return _context3.stop();}}}, _callee3, this);}));function download(_x3) {return _download.apply(this, arguments);}return download;}() }, { key: "refreshAccessToken", value: function () {var _refreshAccessToken2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee4() {var e, t;return _regenerator.default.wrap(function _callee4$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:this._refreshAccessTokenPromise || (this._refreshAccessTokenPromise = this._refreshAccessToken());_context4.prev = 1;_context4.next = 4;return this._refreshAccessTokenPromise;case 4:e = _context4.sent;_context4.next = 10;break;case 7:_context4.prev = 7;_context4.t0 = _context4["catch"](1);t = _context4.t0;case 10:if (!(this._refreshAccessTokenPromise = null, this._shouldRefreshAccessTokenHook = null, t)) {_context4.next = 12;break;}throw t;case 12:return _context4.abrupt("return", e);case 13:case "end":return _context4.stop();}}}, _callee4, this, [[1, 7]]);}));function refreshAccessToken() {return _refreshAccessToken2.apply(this, arguments);}return refreshAccessToken;}() }, { key: "_refreshAccessToken", value: function () {var _refreshAccessToken3 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee5() {var _this$_cache$keys, e, t, s, n, r, o, i, a, _e9, _e10, _t5, _n5;return _regenerator.default.wrap(function _callee5$(_context5) {while (1) {switch (_context5.prev = _context5.next) {case 0:_this$_cache$keys = this._cache.keys, e = _this$_cache$keys.accessTokenKey, t = _this$_cache$keys.accessTokenExpireKey, s = _this$_cache$keys.refreshTokenKey, n = _this$_cache$keys.loginTypeKey, r = _this$_cache$keys.anonymousUuidKey;this._cache.removeStore(e), this._cache.removeStore(t);o = this._cache.getStore(s);if (o) {_context5.next = 5;break;}throw new Error("未登录CloudBase");case 5:i = { refresh_token: o };_context5.next = 8;return this.request("auth.fetchAccessTokenWithRefreshToken", i);case 8:a = _context5.sent;if (!a.data.code) {_context5.next = 21;break;}_e9 = a.data.code;if (!("SIGN_PARAM_INVALID" === _e9 || "REFRESH_TOKEN_EXPIRED" === _e9 || "INVALID_REFRESH_TOKEN" === _e9)) {_context5.next = 20;break;}if (!(this._cache.getStore(n) === ie.ANONYMOUS && "INVALID_REFRESH_TOKEN" === _e9)) {_context5.next = 19;break;}_e10 = this._cache.getStore(r);_t5 = this._cache.getStore(s);_context5.next = 17;return this.send("auth.signInAnonymously", { anonymous_uuid: _e10, refresh_token: _t5 });case 17:_n5 = _context5.sent;return _context5.abrupt("return", (this.setRefreshToken(_n5.refresh_token), this._refreshAccessToken()));case 19:Z(se), this._cache.removeStore(s);case 20:throw new Error("\u5237\u65B0access token\u5931\u8D25\uFF1A".concat(a.data.code));case 21:if (!a.data.access_token) {_context5.next = 23;break;}return _context5.abrupt("return", (Z(oe), this._cache.setStore(e, a.data.access_token), this._cache.setStore(t, a.data.access_token_expire + Date.now()), { accessToken: a.data.access_token, accessTokenExpire: a.data.access_token_expire }));case 23:a.data.refresh_token && (this._cache.removeStore(s), this._cache.setStore(s, a.data.refresh_token), this._refreshAccessToken());case 24:case "end":return _context5.stop();}}}, _callee5, this);}));function _refreshAccessToken() {return _refreshAccessToken3.apply(this, arguments);}return _refreshAccessToken;}() }, { key: "getAccessToken", value: function () {var _getAccessToken = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee6() {var _this$_cache$keys2, e, t, s, n, r, o;return _regenerator.default.wrap(function _callee6$(_context6) {while (1) {switch (_context6.prev = _context6.next) {case 0:_this$_cache$keys2 = this._cache.keys, e = _this$_cache$keys2.accessTokenKey, t = _this$_cache$keys2.accessTokenExpireKey, s = _this$_cache$keys2.refreshTokenKey;if (this._cache.getStore(s)) {_context6.next = 3;break;}throw new Error("refresh token不存在，登录状态异常");case 3:n = this._cache.getStore(e), r = this._cache.getStore(t), o = !0;_context6.t0 = this._shouldRefreshAccessTokenHook;if (!_context6.t0) {_context6.next = 9;break;}_context6.next = 8;return this._shouldRefreshAccessTokenHook(n, r);case 8:_context6.t0 = !_context6.sent;case 9:_context6.t1 = _context6.t0;if (!_context6.t1) {_context6.next = 12;break;}o = !1;case 12:return _context6.abrupt("return", (!n || !r || r < Date.now()) && o ? this.refreshAccessToken() : { accessToken: n, accessTokenExpire: r });case 13:case "end":return _context6.stop();}}}, _callee6, this);}));function getAccessToken() {return _getAccessToken.apply(this, arguments);}return getAccessToken;}() }, { key: "request", value: function () {var _request = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee7(e, t, s) {var n, r, o, _e11, i, _e12, _e13, a, c, u, h, l, d, f, p, g;return _regenerator.default.wrap(function _callee7$(_context7) {while (1) {switch (_context7.prev = _context7.next) {case 0:n = "x-tcb-trace_".concat(this.config.env);r = "application/x-www-form-urlencoded";o = _objectSpread({ action: e, env: this.config.env, dataVersion: "2019-08-16" }, t);if (!(-1 === ae.indexOf(e))) {_context7.next = 10;break;}_e11 = this._cache.keys.refreshTokenKey;_context7.t0 = this._cache.getStore(_e11);if (!_context7.t0) {_context7.next = 10;break;}_context7.next = 9;return this.getAccessToken();case 9:o.access_token = _context7.sent.accessToken;case 10:if ("storage.uploadFile" === e) {i = new FormData();for (_e12 in i) {i.hasOwnProperty(_e12) && void 0 !== i[_e12] && i.append(_e12, o[_e12]);}r = "multipart/form-data";} else {r = "application/json", i = {};for (_e13 in o) {void 0 !== o[_e13] && (i[_e13] = o[_e13]);}}a = { headers: { "content-type": r } };s && s.onUploadProgress && (a.onUploadProgress = s.onUploadProgress);c = this._localCache.getStore(n);c && (a.headers["X-TCB-Trace"] = c);u = t.parse, h = t.inQuery, l = t.search;d = { env: this.config.env };u && (d.parse = !0), h && (d = _objectSpread(_objectSpread({}, h), d));f = function (e, t) {var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};var n = /\?/.test(t);var r = "";for (var _e14 in s) {"" === r ? !n && (t += "?") : r += "&", r += "".concat(_e14, "=").concat(encodeURIComponent(s[_e14]));}return /^http(s)?\:\/\//.test(t += r) ? t : "".concat(e).concat(t);}(D, "//tcb-api.tencentcloudapi.com/web", d);l && (f += l);_context7.next = 22;return this.post(_objectSpread({ url: f, data: i }, a));case 22:p = _context7.sent;g = p.header && p.header["x-tcb-trace"];if (!(g && this._localCache.setStore(n, g), 200 !== Number(p.status) && 200 !== Number(p.statusCode) || !p.data)) {_context7.next = 26;break;}throw new Error("network request error");case 26:return _context7.abrupt("return", p);case 27:case "end":return _context7.stop();}}}, _callee7, this);}));function request(_x4, _x5, _x6) {return _request.apply(this, arguments);}return request;}() }, { key: "send", value: function () {var _send = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee8(e) {var t,s,_s3,_args8 = arguments;return _regenerator.default.wrap(function _callee8$(_context8) {while (1) {switch (_context8.prev = _context8.next) {case 0:t = _args8.length > 1 && _args8[1] !== undefined ? _args8[1] : {};_context8.next = 3;return this.request(e, t, { onUploadProgress: t.onUploadProgress });case 3:s = _context8.sent;if (!("ACCESS_TOKEN_EXPIRED" === s.data.code && -1 === ae.indexOf(e))) {_context8.next = 13;break;}_context8.next = 7;return this.refreshAccessToken();case 7:_context8.next = 9;return this.request(e, t, { onUploadProgress: t.onUploadProgress });case 9:_s3 = _context8.sent;if (!_s3.data.code) {_context8.next = 12;break;}throw new Error("[".concat(_s3.data.code, "] ").concat(_s3.data.message));case 12:return _context8.abrupt("return", _s3.data);case 13:if (!s.data.code) {_context8.next = 15;break;}throw new Error("[".concat(s.data.code, "] ").concat(s.data.message));case 15:return _context8.abrupt("return", s.data);case 16:case "end":return _context8.stop();}}}, _callee8, this);}));function send(_x7) {return _send.apply(this, arguments);}return send;}() }, { key: "setRefreshToken", value: function setRefreshToken(e) {var _this$_cache$keys3 = this._cache.keys,t = _this$_cache$keys3.accessTokenKey,s = _this$_cache$keys3.accessTokenExpireKey,n = _this$_cache$keys3.refreshTokenKey;this._cache.removeStore(t), this._cache.removeStore(s), this._cache.setStore(n, e);} }]);return le;}();var de = {};function fe(e) {return de[e];}var pe = /*#__PURE__*/function () {function pe(e) {_classCallCheck(this, pe);this.config = e, this._cache = J(e.env), this._request = fe(e.env);}_createClass(pe, [{ key: "setRefreshToken", value: function setRefreshToken(e) {var _this$_cache$keys4 = this._cache.keys,t = _this$_cache$keys4.accessTokenKey,s = _this$_cache$keys4.accessTokenExpireKey,n = _this$_cache$keys4.refreshTokenKey;this._cache.removeStore(t), this._cache.removeStore(s), this._cache.setStore(n, e);} }, { key: "setAccessToken", value: function setAccessToken(e, t) {var _this$_cache$keys5 = this._cache.keys,s = _this$_cache$keys5.accessTokenKey,n = _this$_cache$keys5.accessTokenExpireKey;this._cache.setStore(s, e), this._cache.setStore(n, t);} }, { key: "refreshUserInfo", value: function () {var _refreshUserInfo = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee9() {var _yield$this$_request$, e;return _regenerator.default.wrap(function _callee9$(_context9) {while (1) {switch (_context9.prev = _context9.next) {case 0:_context9.next = 2;return this._request.send("auth.getUserInfo", {});case 2:_yield$this$_request$ = _context9.sent;e = _yield$this$_request$.data;return _context9.abrupt("return", (this.setLocalUserInfo(e), e));case 5:case "end":return _context9.stop();}}}, _callee9, this);}));function refreshUserInfo() {return _refreshUserInfo.apply(this, arguments);}return refreshUserInfo;}() }, { key: "setLocalUserInfo", value: function setLocalUserInfo(e) {var t = this._cache.keys.userInfoKey;this._cache.setStore(t, e);} }]);return pe;}();var ge = /*#__PURE__*/function () {function ge(e) {_classCallCheck(this, ge);if (!e) throw new Error("envId is not defined");this._envId = e, this._cache = J(this._envId), this._request = fe(this._envId), this.setUserInfo();}_createClass(ge, [{ key: "linkWithTicket", value: function linkWithTicket(e) {if ("string" != typeof e) throw new Error("ticket must be string");return this._request.send("auth.linkWithTicket", { ticket: e });} }, { key: "linkWithRedirect", value: function linkWithRedirect(e) {e.signInWithRedirect();} }, { key: "updatePassword", value: function updatePassword(e, t) {return this._request.send("auth.updatePassword", { oldPassword: t, newPassword: e });} }, { key: "updateEmail", value: function updateEmail(e) {return this._request.send("auth.updateEmail", { newEmail: e });} }, { key: "updateUsername", value: function updateUsername(e) {if ("string" != typeof e) throw new Error("username must be a string");return this._request.send("auth.updateUsername", { username: e });} }, { key: "getLinkedUidList", value: function () {var _getLinkedUidList = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee10() {var _yield$this$_request$2, e, t, s;return _regenerator.default.wrap(function _callee10$(_context10) {while (1) {switch (_context10.prev = _context10.next) {case 0:_context10.next = 2;return this._request.send("auth.getLinkedUidList", {});case 2:_yield$this$_request$2 = _context10.sent;e = _yield$this$_request$2.data;t = !1;s = e.users;return _context10.abrupt("return", (s.forEach(function (e) {e.wxOpenId && e.wxPublicId && (t = !0);}), { users: s, hasPrimaryUid: t }));case 7:case "end":return _context10.stop();}}}, _callee10, this);}));function getLinkedUidList() {return _getLinkedUidList.apply(this, arguments);}return getLinkedUidList;}() }, { key: "setPrimaryUid", value: function setPrimaryUid(e) {return this._request.send("auth.setPrimaryUid", { uid: e });} }, { key: "unlink", value: function unlink(e) {return this._request.send("auth.unlink", { platform: e });} }, { key: "update", value: function () {var _update = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee11(e) {var t, s, n, r, o, i, _yield$this$_request$3, a;return _regenerator.default.wrap(function _callee11$(_context11) {while (1) {switch (_context11.prev = _context11.next) {case 0:t = e.nickName;s = e.gender;n = e.avatarUrl;r = e.province;o = e.country;i = e.city;_context11.next = 8;return this._request.send("auth.updateUserInfo", { nickName: t, gender: s, avatarUrl: n, province: r, country: o, city: i });case 8:_yield$this$_request$3 = _context11.sent;a = _yield$this$_request$3.data;this.setLocalUserInfo(a);case 11:case "end":return _context11.stop();}}}, _callee11, this);}));function update(_x8) {return _update.apply(this, arguments);}return update;}() }, { key: "refresh", value: function () {var _refresh = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee12() {var _yield$this$_request$4, e;return _regenerator.default.wrap(function _callee12$(_context12) {while (1) {switch (_context12.prev = _context12.next) {case 0:_context12.next = 2;return this._request.send("auth.getUserInfo", {});case 2:_yield$this$_request$4 = _context12.sent;e = _yield$this$_request$4.data;return _context12.abrupt("return", (this.setLocalUserInfo(e), e));case 5:case "end":return _context12.stop();}}}, _callee12, this);}));function refresh() {return _refresh.apply(this, arguments);}return refresh;}() }, { key: "setUserInfo", value: function setUserInfo() {var _this10 = this;var e = this._cache.keys.userInfoKey,t = this._cache.getStore(e);["uid", "loginType", "openid", "wxOpenId", "wxPublicId", "unionId", "qqMiniOpenId", "email", "hasPassword", "customUserId", "nickName", "gender", "avatarUrl"].forEach(function (e) {_this10[e] = t[e];}), this.location = { country: t.country, province: t.province, city: t.city };} }, { key: "setLocalUserInfo", value: function setLocalUserInfo(e) {var t = this._cache.keys.userInfoKey;this._cache.setStore(t, e), this.setUserInfo();} }]);return ge;}();var me = /*#__PURE__*/function () {function me(e) {_classCallCheck(this, me);if (!e) throw new Error("envId is not defined");this._cache = J(e);var _this$_cache$keys6 = this._cache.keys,t = _this$_cache$keys6.refreshTokenKey,s = _this$_cache$keys6.accessTokenKey,n = _this$_cache$keys6.accessTokenExpireKey,r = this._cache.getStore(t),o = this._cache.getStore(s),i = this._cache.getStore(n);this.credential = { refreshToken: r, accessToken: o, accessTokenExpire: i }, this.user = new ge(e);}_createClass(me, [{ key: "isAnonymousAuth", get: function get() {return this.loginType === ie.ANONYMOUS;} }, { key: "isCustomAuth", get: function get() {return this.loginType === ie.CUSTOM;} }, { key: "isWeixinAuth", get: function get() {return this.loginType === ie.WECHAT || this.loginType === ie.WECHAT_OPEN || this.loginType === ie.WECHAT_PUBLIC;} }, { key: "loginType", get: function get() {return this._cache.getStore(this._cache.keys.loginTypeKey);} }]);return me;}();var ye = /*#__PURE__*/function (_pe) {_inherits(ye, _pe);var _super5 = _createSuper(ye);function ye() {_classCallCheck(this, ye);return _super5.apply(this, arguments);}_createClass(ye, [{ key: "signIn", value: function () {var _signIn = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee13() {var _this$_cache$keys7, e, t, s, n, r, _e15;return _regenerator.default.wrap(function _callee13$(_context13) {while (1) {switch (_context13.prev = _context13.next) {case 0:this._cache.updatePersistence("local");_this$_cache$keys7 = this._cache.keys;e = _this$_cache$keys7.anonymousUuidKey;t = _this$_cache$keys7.refreshTokenKey;s = this._cache.getStore(e) || void 0;n = this._cache.getStore(t) || void 0;_context13.next = 8;return this._request.send("auth.signInAnonymously", { anonymous_uuid: s, refresh_token: n });case 8:r = _context13.sent;if (!(r.uuid && r.refresh_token)) {_context13.next = 20;break;}this._setAnonymousUUID(r.uuid);this.setRefreshToken(r.refresh_token);_context13.next = 14;return this._request.refreshAccessToken();case 14:Z(te);Z(ne, { env: this.config.env, loginType: ie.ANONYMOUS, persistence: "local" });_e15 = new me(this.config.env);_context13.next = 19;return _e15.user.refresh();case 19:return _context13.abrupt("return", _e15);case 20:throw new Error("匿名登录失败");case 21:case "end":return _context13.stop();}}}, _callee13, this);}));function signIn() {return _signIn.apply(this, arguments);}return signIn;}() }, { key: "linkAndRetrieveDataWithTicket", value: function () {var _linkAndRetrieveDataWithTicket = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee14(e) {var _this$_cache$keys8, t, s, n, r, o;return _regenerator.default.wrap(function _callee14$(_context14) {while (1) {switch (_context14.prev = _context14.next) {case 0:_this$_cache$keys8 = this._cache.keys;t = _this$_cache$keys8.anonymousUuidKey;s = _this$_cache$keys8.refreshTokenKey;n = this._cache.getStore(t);r = this._cache.getStore(s);_context14.next = 7;return this._request.send("auth.linkAndRetrieveDataWithTicket", { anonymous_uuid: n, refresh_token: r, ticket: e });case 7:o = _context14.sent;if (!o.refresh_token) {_context14.next = 16;break;}this._clearAnonymousUUID();this.setRefreshToken(o.refresh_token);_context14.next = 13;return this._request.refreshAccessToken();case 13:Z(re, { env: this.config.env });Z(ne, { loginType: ie.CUSTOM, persistence: "local" });return _context14.abrupt("return", { credential: { refreshToken: o.refresh_token } });case 16:throw new Error("匿名转化失败");case 17:case "end":return _context14.stop();}}}, _callee14, this);}));function linkAndRetrieveDataWithTicket(_x9) {return _linkAndRetrieveDataWithTicket.apply(this, arguments);}return linkAndRetrieveDataWithTicket;}() }, { key: "_setAnonymousUUID", value: function _setAnonymousUUID(e) {var _this$_cache$keys9 = this._cache.keys,t = _this$_cache$keys9.anonymousUuidKey,s = _this$_cache$keys9.loginTypeKey;this._cache.removeStore(t), this._cache.setStore(t, e), this._cache.setStore(s, ie.ANONYMOUS);} }, { key: "_clearAnonymousUUID", value: function _clearAnonymousUUID() {this._cache.removeStore(this._cache.keys.anonymousUuidKey);} }]);return ye;}(pe);var _e = /*#__PURE__*/function (_pe2) {_inherits(_e, _pe2);var _super6 = _createSuper(_e);function _e() {_classCallCheck(this, _e);return _super6.apply(this, arguments);}_createClass(_e, [{ key: "signIn", value: function () {var _signIn2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee15(e) {var t, s;return _regenerator.default.wrap(function _callee15$(_context15) {while (1) {switch (_context15.prev = _context15.next) {case 0:if (!("string" != typeof e)) {_context15.next = 2;break;}throw new Error("ticket must be a string");case 2:t = this._cache.keys.refreshTokenKey;_context15.next = 5;return this._request.send("auth.signInWithTicket", { ticket: e, refresh_token: this._cache.getStore(t) || "" });case 5:s = _context15.sent;if (!s.refresh_token) {_context15.next = 15;break;}this.setRefreshToken(s.refresh_token);_context15.next = 10;return this._request.refreshAccessToken();case 10:Z(te);Z(ne, { env: this.config.env, loginType: ie.CUSTOM, persistence: this.config.persistence });_context15.next = 14;return this.refreshUserInfo();case 14:return _context15.abrupt("return", new me(this.config.env));case 15:throw new Error("自定义登录失败");case 16:case "end":return _context15.stop();}}}, _callee15, this);}));function signIn(_x10) {return _signIn2.apply(this, arguments);}return signIn;}() }]);return _e;}(pe);var we = /*#__PURE__*/function (_pe3) {_inherits(we, _pe3);var _super7 = _createSuper(we);function we() {_classCallCheck(this, we);return _super7.apply(this, arguments);}_createClass(we, [{ key: "signIn", value: function () {var _signIn3 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee16(e, t) {var s, n, r, o, i;return _regenerator.default.wrap(function _callee16$(_context16) {while (1) {switch (_context16.prev = _context16.next) {case 0:if (!("string" != typeof e)) {_context16.next = 2;break;}throw new Error("email must be a string");case 2:s = this._cache.keys.refreshTokenKey;_context16.next = 5;return this._request.send("auth.signIn", { loginType: "EMAIL", email: e, password: t, refresh_token: this._cache.getStore(s) || "" });case 5:n = _context16.sent;r = n.refresh_token;o = n.access_token;i = n.access_token_expire;if (!r) {_context16.next = 22;break;}this.setRefreshToken(r);if (!(o && i)) {_context16.next = 15;break;}this.setAccessToken(o, i);_context16.next = 17;break;case 15:_context16.next = 17;return this._request.refreshAccessToken();case 17:_context16.next = 19;return this.refreshUserInfo();case 19:Z(te);Z(ne, { env: this.config.env, loginType: ie.EMAIL, persistence: this.config.persistence });return _context16.abrupt("return", new me(this.config.env));case 22:throw n.code ? new Error("\u90AE\u7BB1\u767B\u5F55\u5931\u8D25: [".concat(n.code, "] ").concat(n.message)) : new Error("邮箱登录失败");case 23:case "end":return _context16.stop();}}}, _callee16, this);}));function signIn(_x11, _x12) {return _signIn3.apply(this, arguments);}return signIn;}() }, { key: "activate", value: function () {var _activate = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee17(e) {return _regenerator.default.wrap(function _callee17$(_context17) {while (1) {switch (_context17.prev = _context17.next) {case 0:return _context17.abrupt("return", this._request.send("auth.activateEndUserMail", { token: e }));case 1:case "end":return _context17.stop();}}}, _callee17, this);}));function activate(_x13) {return _activate.apply(this, arguments);}return activate;}() }, { key: "resetPasswordWithToken", value: function () {var _resetPasswordWithToken = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee18(e, t) {return _regenerator.default.wrap(function _callee18$(_context18) {while (1) {switch (_context18.prev = _context18.next) {case 0:return _context18.abrupt("return", this._request.send("auth.resetPasswordWithToken", { token: e, newPassword: t }));case 1:case "end":return _context18.stop();}}}, _callee18, this);}));function resetPasswordWithToken(_x14, _x15) {return _resetPasswordWithToken.apply(this, arguments);}return resetPasswordWithToken;}() }]);return we;}(pe);var ke = /*#__PURE__*/function (_pe4) {_inherits(ke, _pe4);var _super8 = _createSuper(ke);function ke() {_classCallCheck(this, ke);return _super8.apply(this, arguments);}_createClass(ke, [{ key: "signIn", value: function () {var _signIn4 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee19(e, t) {var s, n, r, o, i;return _regenerator.default.wrap(function _callee19$(_context19) {while (1) {switch (_context19.prev = _context19.next) {case 0:if (!("string" != typeof e)) {_context19.next = 2;break;}throw new Error("username must be a string");case 2:"string" != typeof t && (t = "", console.warn("password is empty"));s = this._cache.keys.refreshTokenKey;_context19.next = 6;return this._request.send("auth.signIn", { loginType: ie.USERNAME, username: e, password: t, refresh_token: this._cache.getStore(s) || "" });case 6:n = _context19.sent;r = n.refresh_token;o = n.access_token_expire;i = n.access_token;if (!r) {_context19.next = 23;break;}this.setRefreshToken(r);if (!(i && o)) {_context19.next = 16;break;}this.setAccessToken(i, o);_context19.next = 18;break;case 16:_context19.next = 18;return this._request.refreshAccessToken();case 18:_context19.next = 20;return this.refreshUserInfo();case 20:Z(te);Z(ne, { env: this.config.env, loginType: ie.USERNAME, persistence: this.config.persistence });return _context19.abrupt("return", new me(this.config.env));case 23:throw n.code ? new Error("\u7528\u6237\u540D\u5BC6\u7801\u767B\u5F55\u5931\u8D25: [".concat(n.code, "] ").concat(n.message)) : new Error("用户名密码登录失败");case 24:case "end":return _context19.stop();}}}, _callee19, this);}));function signIn(_x16, _x17) {return _signIn4.apply(this, arguments);}return signIn;}() }]);return ke;}(pe);var Se = /*#__PURE__*/function () {function Se(e) {_classCallCheck(this, Se);this.config = e, this._cache = J(e.env), this._request = fe(e.env), this._onAnonymousConverted = this._onAnonymousConverted.bind(this), this._onLoginTypeChanged = this._onLoginTypeChanged.bind(this), Q(ne, this._onLoginTypeChanged);}_createClass(Se, [{ key: "anonymousAuthProvider", value: function anonymousAuthProvider() {return new ye(this.config);} }, { key: "customAuthProvider", value: function customAuthProvider() {return new _e(this.config);} }, { key: "emailAuthProvider", value: function emailAuthProvider() {return new we(this.config);} }, { key: "usernameAuthProvider", value: function usernameAuthProvider() {return new ke(this.config);} }, { key: "signInAnonymously", value: function () {var _signInAnonymously = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee20() {return _regenerator.default.wrap(function _callee20$(_context20) {while (1) {switch (_context20.prev = _context20.next) {case 0:return _context20.abrupt("return", new ye(this.config).signIn());case 1:case "end":return _context20.stop();}}}, _callee20, this);}));function signInAnonymously() {return _signInAnonymously.apply(this, arguments);}return signInAnonymously;}() }, { key: "signInWithEmailAndPassword", value: function () {var _signInWithEmailAndPassword = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee21(e, t) {return _regenerator.default.wrap(function _callee21$(_context21) {while (1) {switch (_context21.prev = _context21.next) {case 0:return _context21.abrupt("return", new we(this.config).signIn(e, t));case 1:case "end":return _context21.stop();}}}, _callee21, this);}));function signInWithEmailAndPassword(_x18, _x19) {return _signInWithEmailAndPassword.apply(this, arguments);}return signInWithEmailAndPassword;}() }, { key: "signInWithUsernameAndPassword", value: function signInWithUsernameAndPassword(e, t) {return new ke(this.config).signIn(e, t);} }, { key: "linkAndRetrieveDataWithTicket", value: function () {var _linkAndRetrieveDataWithTicket2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee22(e) {return _regenerator.default.wrap(function _callee22$(_context22) {while (1) {switch (_context22.prev = _context22.next) {case 0:this._anonymousAuthProvider || (this._anonymousAuthProvider = new ye(this.config)), Q(re, this._onAnonymousConverted);_context22.next = 3;return this._anonymousAuthProvider.linkAndRetrieveDataWithTicket(e);case 3:return _context22.abrupt("return", _context22.sent);case 4:case "end":return _context22.stop();}}}, _callee22, this);}));function linkAndRetrieveDataWithTicket(_x20) {return _linkAndRetrieveDataWithTicket2.apply(this, arguments);}return linkAndRetrieveDataWithTicket;}() }, { key: "signOut", value: function () {var _signOut = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee23() {var _this$_cache$keys10, e, t, s, n, r;return _regenerator.default.wrap(function _callee23$(_context23) {while (1) {switch (_context23.prev = _context23.next) {case 0:if (!(this.loginType === ie.ANONYMOUS)) {_context23.next = 2;break;}throw new Error("匿名用户不支持登出操作");case 2:_this$_cache$keys10 = this._cache.keys, e = _this$_cache$keys10.refreshTokenKey, t = _this$_cache$keys10.accessTokenKey, s = _this$_cache$keys10.accessTokenExpireKey, n = this._cache.getStore(e);if (n) {_context23.next = 5;break;}return _context23.abrupt("return");case 5:_context23.next = 7;return this._request.send("auth.logout", { refresh_token: n });case 7:r = _context23.sent;return _context23.abrupt("return", (this._cache.removeStore(e), this._cache.removeStore(t), this._cache.removeStore(s), Z(te), Z(ne, { env: this.config.env, loginType: ie.NULL, persistence: this.config.persistence }), r));case 9:case "end":return _context23.stop();}}}, _callee23, this);}));function signOut() {return _signOut.apply(this, arguments);}return signOut;}() }, { key: "signUpWithEmailAndPassword", value: function () {var _signUpWithEmailAndPassword = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee24(e, t) {return _regenerator.default.wrap(function _callee24$(_context24) {while (1) {switch (_context24.prev = _context24.next) {case 0:return _context24.abrupt("return", this._request.send("auth.signUpWithEmailAndPassword", { email: e, password: t }));case 1:case "end":return _context24.stop();}}}, _callee24, this);}));function signUpWithEmailAndPassword(_x21, _x22) {return _signUpWithEmailAndPassword.apply(this, arguments);}return signUpWithEmailAndPassword;}() }, { key: "sendPasswordResetEmail", value: function () {var _sendPasswordResetEmail = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee25(e) {return _regenerator.default.wrap(function _callee25$(_context25) {while (1) {switch (_context25.prev = _context25.next) {case 0:return _context25.abrupt("return", this._request.send("auth.sendPasswordResetEmail", { email: e }));case 1:case "end":return _context25.stop();}}}, _callee25, this);}));function sendPasswordResetEmail(_x23) {return _sendPasswordResetEmail.apply(this, arguments);}return sendPasswordResetEmail;}() }, { key: "onLoginStateChanged", value: function onLoginStateChanged(e) {var _this11 = this;Q(te, function () {var t = _this11.hasLoginState();e.call(_this11, t);});var t = this.hasLoginState();e.call(this, t);} }, { key: "onLoginStateExpired", value: function onLoginStateExpired(e) {Q(se, e.bind(this));} }, { key: "onAccessTokenRefreshed", value: function onAccessTokenRefreshed(e) {Q(oe, e.bind(this));} }, { key: "onAnonymousConverted", value: function onAnonymousConverted(e) {Q(re, e.bind(this));} }, { key: "onLoginTypeChanged", value: function onLoginTypeChanged(e) {var _this12 = this;Q(ne, function () {var t = _this12.hasLoginState();e.call(_this12, t);});} }, { key: "getAccessToken", value: function () {var _getAccessToken2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee26() {return _regenerator.default.wrap(function _callee26$(_context26) {while (1) {switch (_context26.prev = _context26.next) {case 0:_context26.next = 2;return this._request.getAccessToken();case 2:_context26.t0 = _context26.sent.accessToken;_context26.t1 = this.config.env;return _context26.abrupt("return", { accessToken: _context26.t0, env: _context26.t1 });case 5:case "end":return _context26.stop();}}}, _callee26, this);}));function getAccessToken() {return _getAccessToken2.apply(this, arguments);}return getAccessToken;}() }, { key: "hasLoginState", value: function hasLoginState() {var e = this._cache.keys.refreshTokenKey;return this._cache.getStore(e) ? new me(this.config.env) : null;} }, { key: "isUsernameRegistered", value: function () {var _isUsernameRegistered = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee27(e) {var _yield$this$_request$5, t;return _regenerator.default.wrap(function _callee27$(_context27) {while (1) {switch (_context27.prev = _context27.next) {case 0:if (!("string" != typeof e)) {_context27.next = 2;break;}throw new Error("username must be a string");case 2:_context27.next = 4;return this._request.send("auth.isUsernameRegistered", { username: e });case 4:_yield$this$_request$5 = _context27.sent;t = _yield$this$_request$5.data;return _context27.abrupt("return", t && t.isRegistered);case 7:case "end":return _context27.stop();}}}, _callee27, this);}));function isUsernameRegistered(_x24) {return _isUsernameRegistered.apply(this, arguments);}return isUsernameRegistered;}() }, { key: "getLoginState", value: function getLoginState() {return Promise.resolve(this.hasLoginState());} }, { key: "signInWithTicket", value: function () {var _signInWithTicket = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee28(e) {return _regenerator.default.wrap(function _callee28$(_context28) {while (1) {switch (_context28.prev = _context28.next) {case 0:return _context28.abrupt("return", new _e(this.config).signIn(e));case 1:case "end":return _context28.stop();}}}, _callee28, this);}));function signInWithTicket(_x25) {return _signInWithTicket.apply(this, arguments);}return signInWithTicket;}() }, { key: "shouldRefreshAccessToken", value: function shouldRefreshAccessToken(e) {this._request._shouldRefreshAccessTokenHook = e.bind(this);} }, { key: "getUserInfo", value: function getUserInfo() {return this._request.send("auth.getUserInfo", {}).then(function (e) {return e.code ? e : _objectSpread(_objectSpread({}, e.data), {}, { requestId: e.seqId });});} }, { key: "getAuthHeader", value: function getAuthHeader() {var _this$_cache$keys11 = this._cache.keys,e = _this$_cache$keys11.refreshTokenKey,t = _this$_cache$keys11.accessTokenKey,s = this._cache.getStore(e);return { "x-cloudbase-credentials": this._cache.getStore(t) + "/@@/" + s };} }, { key: "_onAnonymousConverted", value: function _onAnonymousConverted(e) {var t = e.data.env;t === this.config.env && this._cache.updatePersistence(this.config.persistence);} }, { key: "_onLoginTypeChanged", value: function _onLoginTypeChanged(e) {var _e$data = e.data,t = _e$data.loginType,s = _e$data.persistence,n = _e$data.env;n === this.config.env && (this._cache.updatePersistence(s), this._cache.setStore(this._cache.keys.loginTypeKey, t));} }, { key: "currentUser", get: function get() {var e = this.hasLoginState();return e && e.user || null;} }, { key: "loginType", get: function get() {return this._cache.getStore(this._cache.keys.loginTypeKey);} }]);return Se;}();var ve = function ve(e, t) {t = t || F();var s = fe(this.config.env),n = e.cloudPath,r = e.filePath,o = e.onUploadProgress,_e$fileType = e.fileType,i = _e$fileType === void 0 ? "image" : _e$fileType;return s.send("storage.getUploadMetadata", { path: n }).then(function (e) {var _e$data2 = e.data,a = _e$data2.url,c = _e$data2.authorization,u = _e$data2.token,h = _e$data2.fileId,l = _e$data2.cosFileId,d = e.requestId,f = { key: n, signature: c, "x-cos-meta-fileid": l, success_action_status: "201", "x-cos-security-token": u };s.upload({ url: a, data: f, file: r, name: n, fileType: i, onUploadProgress: o }).then(function (e) {201 === e.statusCode ? t(null, { fileID: h, requestId: d }) : t(new Error("STORAGE_REQUEST_FAIL: ".concat(e.data)));}).catch(function (e) {t(e);});}).catch(function (e) {t(e);}), t.promise;},Te = function Te(e, t) {t = t || F();var s = fe(this.config.env),n = e.cloudPath;return s.send("storage.getUploadMetadata", { path: n }).then(function (e) {t(null, e);}).catch(function (e) {t(e);}), t.promise;},Pe = function Pe(_ref5, t) {var e = _ref5.fileList;if (t = t || F(), !e || !Array.isArray(e)) return { code: "INVALID_PARAM", message: "fileList必须是非空的数组" };var _iterator3 = _createForOfIteratorHelper(e),_step3;try {for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {var _t6 = _step3.value;if (!_t6 || "string" != typeof _t6) return { code: "INVALID_PARAM", message: "fileList的元素必须是非空的字符串" };}} catch (err) {_iterator3.e(err);} finally {_iterator3.f();}var s = { fileid_list: e };return fe(this.config.env).send("storage.batchDeleteFile", s).then(function (e) {e.code ? t(null, e) : t(null, { fileList: e.data.delete_list, requestId: e.requestId });}).catch(function (e) {t(e);}), t.promise;},Ae = function Ae(_ref6, t) {var e = _ref6.fileList;t = t || F(), e && Array.isArray(e) || t(null, { code: "INVALID_PARAM", message: "fileList必须是非空的数组" });var s = [];var _iterator4 = _createForOfIteratorHelper(e),_step4;try {for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {var _n6 = _step4.value;"object" == typeof _n6 ? (_n6.hasOwnProperty("fileID") && _n6.hasOwnProperty("maxAge") || t(null, { code: "INVALID_PARAM", message: "fileList的元素必须是包含fileID和maxAge的对象" }), s.push({ fileid: _n6.fileID, max_age: _n6.maxAge })) : "string" == typeof _n6 ? s.push({ fileid: _n6 }) : t(null, { code: "INVALID_PARAM", message: "fileList的元素必须是字符串" });}} catch (err) {_iterator4.e(err);} finally {_iterator4.f();}var n = { file_list: s };return fe(this.config.env).send("storage.batchGetDownloadUrl", n).then(function (e) {e.code ? t(null, e) : t(null, { fileList: e.data.download_list, requestId: e.requestId });}).catch(function (e) {t(e);}), t.promise;},Ie = /*#__PURE__*/function () {var _ref8 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee29(_ref7, t) {var e, s, n, r;return _regenerator.default.wrap(function _callee29$(_context29) {while (1) {switch (_context29.prev = _context29.next) {case 0:e = _ref7.fileID;_context29.next = 3;return Ae.call(this, { fileList: [{ fileID: e, maxAge: 600 }] });case 3:s = _context29.sent.fileList[0];if (!("SUCCESS" !== s.code)) {_context29.next = 6;break;}return _context29.abrupt("return", t ? t(s) : new Promise(function (e) {e(s);}));case 6:n = fe(this.config.env);r = s.download_url;if (!(r = encodeURI(r), !t)) {_context29.next = 10;break;}return _context29.abrupt("return", n.download({ url: r }));case 10:_context29.t0 = t;_context29.next = 13;return n.download({ url: r });case 13:_context29.t1 = _context29.sent;(0, _context29.t0)(_context29.t1);case 15:case "end":return _context29.stop();}}}, _callee29, this);}));return function Ie(_x26, _x27) {return _ref8.apply(this, arguments);};}(),be = function be(_ref9, o) {var e = _ref9.name,t = _ref9.data,s = _ref9.query,n = _ref9.parse,r = _ref9.search;var i = o || F();var a;try {a = t ? JSON.stringify(t) : "";} catch (e) {return Promise.reject(e);}if (!e) return Promise.reject(new Error("函数名不能为空"));var c = { inQuery: s, parse: n, search: r, function_name: e, request_data: a };return fe(this.config.env).send("functions.invokeFunction", c).then(function (e) {if (e.code) i(null, e);else {var _t7 = e.data.response_data;if (n) i(null, { result: _t7, requestId: e.requestId });else try {_t7 = JSON.parse(e.data.response_data), i(null, { result: _t7, requestId: e.requestId });} catch (e) {i(new Error("response data must be json"));}}return i.promise;}).catch(function (e) {i(e);}), i.promise;},Ee = { timeout: 15e3, persistence: "session" },Oe = {};var Ue = /*#__PURE__*/function () {function Ue(e) {_classCallCheck(this, Ue);this.config = e || this.config, this.authObj = void 0;}_createClass(Ue, [{ key: "init", value: function init(e) {switch (j.adapter || (this.requestClient = new j.adapter.reqClass({ timeout: e.timeout || 5e3, timeoutMsg: "\u8BF7\u6C42\u5728".concat((e.timeout || 5e3) / 1e3, "s\u5185\u672A\u5B8C\u6210\uFF0C\u5DF2\u4E2D\u65AD") })), this.config = _objectSpread(_objectSpread({}, Ee), e), !0) {case this.config.timeout > 6e5:console.warn("timeout大于可配置上限[10分钟]，已重置为上限数值"), this.config.timeout = 6e5;break;case this.config.timeout < 100:console.warn("timeout小于可配置下限[100ms]，已重置为下限数值"), this.config.timeout = 100;}return new Ue(this.config);} }, { key: "auth", value: function auth() {var _ref10 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},e = _ref10.persistence;if (this.authObj) return this.authObj;var t = e || j.adapter.primaryStorage || Ee.persistence;var s;return t !== this.config.persistence && (this.config.persistence = t), function (e) {var t = e.env;z[t] = new W(e), V[t] = new W(_objectSpread(_objectSpread({}, e), {}, { persistence: "local" }));}(this.config), s = this.config, de[s.env] = new le(s), this.authObj = new Se(this.config), this.authObj;} }, { key: "on", value: function on(e, t) {return Q.apply(this, [e, t]);} }, { key: "off", value: function off(e, t) {return ee.apply(this, [e, t]);} }, { key: "callFunction", value: function callFunction(e, t) {return be.apply(this, [e, t]);} }, { key: "deleteFile", value: function deleteFile(e, t) {return Pe.apply(this, [e, t]);} }, { key: "getTempFileURL", value: function getTempFileURL(e, t) {return Ae.apply(this, [e, t]);} }, { key: "downloadFile", value: function downloadFile(e, t) {return Ie.apply(this, [e, t]);} }, { key: "uploadFile", value: function uploadFile(e, t) {return ve.apply(this, [e, t]);} }, { key: "getUploadMetadata", value: function getUploadMetadata(e, t) {return Te.apply(this, [e, t]);} }, { key: "registerExtension", value: function registerExtension(e) {Oe[e.name] = e;} }, { key: "invokeExtension", value: function () {var _invokeExtension = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee30(e, t) {var s;return _regenerator.default.wrap(function _callee30$(_context30) {while (1) {switch (_context30.prev = _context30.next) {case 0:s = Oe[e];if (s) {_context30.next = 3;break;}throw Error("\u6269\u5C55".concat(e, " \u5FC5\u987B\u5148\u6CE8\u518C"));case 3:_context30.next = 5;return s.invoke(t, this);case 5:return _context30.abrupt("return", _context30.sent);case 6:case "end":return _context30.stop();}}}, _callee30, this);}));function invokeExtension(_x28, _x29) {return _invokeExtension.apply(this, arguments);}return invokeExtension;}() }, { key: "useAdapters", value: function useAdapters(e) {var _ref11 = $(e) || {},t = _ref11.adapter,s = _ref11.runtime;t && (j.adapter = t), s && (j.runtime = s);} }]);return Ue;}();var Ce = new Ue();function xe(e, t, s) {void 0 === s && (s = {});var n = /\?/.test(t),r = "";for (var o in s) {"" === r ? !n && (t += "?") : r += "&", r += o + "=" + encodeURIComponent(s[o]);}return /^http(s)?:\/\//.test(t += r) ? t : "" + e + t;}var De = /*#__PURE__*/function () {function De() {_classCallCheck(this, De);}_createClass(De, [{ key: "post", value: function post(e) {var t = e.url,s = e.data,n = e.headers;return new Promise(function (e, r) {U.request({ url: xe("https:", t), data: s, method: "POST", header: n, success: function success(t) {e(t);}, fail: function fail(e) {r(e);} });});} }, { key: "upload", value: function upload(e) {return new Promise(function (t, s) {var n = e.url,r = e.file,o = e.data,i = e.headers,a = e.fileType,c = U.uploadFile({ url: xe("https:", n), name: "file", formData: Object.assign({}, o), filePath: r, fileType: a, header: i, success: function success(e) {var s = { statusCode: e.statusCode, data: e.data || {} };200 === e.statusCode && o.success_action_status && (s.statusCode = parseInt(o.success_action_status, 10)), t(s);}, fail: function fail(e) {u && "mp-alipay" === h && console.warn("支付宝小程序开发工具上传腾讯云时无法准确判断是否上传成功，请使用真机测试"), s(new Error(e.errMsg || "uploadFile:fail"));} });"function" == typeof e.onUploadProgress && c && "function" == typeof c.onProgressUpdate && c.onProgressUpdate(function (t) {e.onUploadProgress({ loaded: t.totalBytesSent, total: t.totalBytesExpectedToSend });});});} }]);return De;}();var Re = { setItem: function setItem(e, t) {U.setStorageSync(e, t);}, getItem: function getItem(e) {return U.getStorageSync(e);}, removeItem: function removeItem(e) {U.removeStorageSync(e);}, clear: function clear() {U.clearStorageSync();} };var qe = { genAdapter: function genAdapter() {return { root: {}, reqClass: De, localStorage: Re, primaryStorage: "local" };}, isMatch: function isMatch() {return !0;}, runtime: "uni_app" };Ce.useAdapters(qe);var Fe = Ce,Le = Fe.init;function Ne() {return { token: U.getStorageSync("uni_id_token") || U.getStorageSync("uniIdToken"), tokenExpired: U.getStorageSync("uni_id_token_expired") };}function Me() {if (!u || "h5" !== h) return;uni.getStorageSync("__LAST_DCLOUD_APPID") !== p && (uni.setStorageSync("__LAST_DCLOUD_APPID", p), console.warn("检测到当前项目与上次运行到此端口的项目不一致，自动清理uni-id保存的token信息（仅开发调试时生效）"), U.removeStorageSync("uni_id_token"), U.removeStorageSync("uniIdToken"), U.removeStorageSync("uni_id_token_expired"));}Fe.init = function (e) {e.env = e.spaceId;var t = Le.call(this, e);t.config.provider = "tencent", t.config.spaceId = e.spaceId;var s = t.auth;return t.auth = function (e) {var t = s.call(this, e);return ["linkAndRetrieveDataWithTicket", "signInAnonymously", "signOut", "getAccessToken", "getLoginState", "signInWithTicket", "getUserInfo"].forEach(function (e) {t[e] = T(t[e]).bind(t);}), t;}, t.customAuth = t.auth, t;};var $e = /*#__PURE__*/function (_C) {_inherits($e, _C);var _super9 = _createSuper($e);function $e() {_classCallCheck(this, $e);return _super9.apply(this, arguments);}_createClass($e, [{ key: "getAccessToken", value: function getAccessToken() {var _this13 = this;return new Promise(function (e, t) {var s = "Anonymous_Access_token";_this13.setAccessToken(s), e(s);});} }, { key: "setupRequest", value: function setupRequest(e, t) {var s = Object.assign({}, e, { spaceId: this.config.spaceId, timestamp: Date.now() }),n = { "Content-Type": "application/json" };"auth" !== t && (s.token = this.accessToken, n["x-basement-token"] = this.accessToken), n["x-serverless-sign"] = O.sign(s, this.config.clientSecret);var r = E();n["x-client-info"] = JSON.stringify(r);var _Ne = Ne(),o = _Ne.token;return n["x-client-token"] = o, { url: this.config.requestUrl, method: "POST", data: s, dataType: "json", header: JSON.parse(JSON.stringify(n)) };} }, { key: "uploadFileToOSS", value: function uploadFileToOSS(_ref12) {var _this14 = this;var e = _ref12.url,t = _ref12.formData,s = _ref12.name,n = _ref12.filePath,r = _ref12.fileType,o = _ref12.onUploadProgress;return new Promise(function (i, a) {var c = _this14.adapter.uploadFile({ url: e, formData: t, name: s, filePath: n, fileType: r, success: function success(e) {e && e.statusCode < 400 ? i(e) : a(new P({ code: "UPLOAD_FAILED", message: "文件上传失败" }));}, fail: function fail(e) {a(new P({ code: e.code || "UPLOAD_FAILED", message: e.message || e.errMsg || "文件上传失败" }));} });"function" == typeof o && c && "function" == typeof c.onProgressUpdate && c.onProgressUpdate(function (e) {o({ loaded: e.totalBytesSent, total: e.totalBytesExpectedToSend });});});} }, { key: "uploadFile", value: function uploadFile(_ref13) {var _this15 = this;var e = _ref13.filePath,t = _ref13.cloudPath,_ref13$fileType = _ref13.fileType,s = _ref13$fileType === void 0 ? "image" : _ref13$fileType,n = _ref13.onUploadProgress;if (!t) throw new P({ code: "CLOUDPATH_REQUIRED", message: "cloudPath不可为空" });var r;return this.getOSSUploadOptionsFromPath({ cloudPath: t }).then(function (t) {var _t$result = t.result,o = _t$result.url,i = _t$result.formData,a = _t$result.name;r = t.result.fileUrl;var c = { url: o, formData: i, name: a, filePath: e, fileType: s };return _this15.uploadFileToOSS(Object.assign({}, c, { onUploadProgress: n }));}).then(function () {return _this15.reportOSSUpload({ cloudPath: t });}).then(function (t) {return new Promise(function (s, n) {t.success ? s({ success: !0, filePath: e, fileID: r }) : n(new P({ code: "UPLOAD_FAILED", message: "文件上传失败" }));});});} }]);return $e;}(C);var je = { init: function init(e) {var t = new $e(e),s = { signInAnonymously: function signInAnonymously() {return t.authorize();}, getLoginState: function getLoginState() {return Promise.resolve(!1);} };return t.auth = function () {return s;}, t.customAuth = t.auth, t;} };var Ke;function Be(_ref14) {var e = _ref14.data;Ke || (Ke = E());var t = JSON.parse(JSON.stringify(e || {}));if (Object.assign(t, { clientInfo: Ke }), !t.uniIdToken) {var _Ne2 = Ne(),_e16 = _Ne2.token;_e16 && (t.uniIdToken = _e16);}return t;}function He(_ref15) {var _this16 = this;var e = _ref15.name,t = _ref15.data;var s = this.localAddress,n = this.localPort,r = { aliyun: "aliyun", tencent: "tcb" }[this.config.provider],o = this.config.spaceId,i = "http://".concat(s, ":").concat(n, "/system/check-function"),a = "http://".concat(s, ":").concat(n, "/cloudfunctions/").concat(e);return new Promise(function (t, s) {U.request({ method: "POST", url: i, data: { name: e, platform: h, provider: r, spaceId: o }, timeout: 3e3, success: function success(e) {t(e);}, fail: function fail() {t({ data: { code: "NETWORK_ERROR", message: "连接本地调试服务失败，请检查客户端是否和主机在同一局域网下，自动切换为已部署的云函数。" } });} });}).then(function () {var _ref16 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},e = _ref16.data;var _ref17 = e || {},t = _ref17.code,s = _ref17.message;return { code: 0 === t ? 0 : t || "SYS_ERR", message: s || "SYS_ERR" };}).then(function (_ref18) {var s = _ref18.code,n = _ref18.message;if (0 !== s) {switch (s) {case "MODULE_ENCRYPTED":console.error("\u6B64\u4E91\u51FD\u6570\uFF08".concat(e, "\uFF09\u4F9D\u8D56\u52A0\u5BC6\u516C\u5171\u6A21\u5757\u4E0D\u53EF\u672C\u5730\u8C03\u8BD5\uFF0C\u81EA\u52A8\u5207\u6362\u4E3A\u4E91\u7AEF\u5DF2\u90E8\u7F72\u7684\u4E91\u51FD\u6570"));break;case "FUNCTION_ENCRYPTED":console.error("\u6B64\u4E91\u51FD\u6570\uFF08".concat(e, "\uFF09\u5DF2\u52A0\u5BC6\u4E0D\u53EF\u672C\u5730\u8C03\u8BD5\uFF0C\u81EA\u52A8\u5207\u6362\u4E3A\u4E91\u7AEF\u5DF2\u90E8\u7F72\u7684\u4E91\u51FD\u6570"));break;case "ACTION_ENCRYPTED":console.error(n || "需要访问加密的uni-clientDB-action，自动切换为云端环境");break;case "NETWORK_ERROR":{var _e17 = "连接本地调试服务失败，请检查客户端是否和主机在同一局域网下";throw console.error(_e17), new Error(_e17);}case "SWITCH_TO_CLOUD":break;default:{var _e18 = "\u68C0\u6D4B\u672C\u5730\u8C03\u8BD5\u670D\u52A1\u51FA\u73B0\u9519\u8BEF\uFF1A".concat(n, "\uFF0C\u8BF7\u68C0\u67E5\u7F51\u7EDC\u73AF\u5883\u6216\u91CD\u542F\u5BA2\u6237\u7AEF\u518D\u8BD5");throw console.error(_e18), new Error(_e18);}}return _this16._originCallFunction({ name: e, data: t });}return new Promise(function (e, s) {var n = Be.call(_this16, { data: t });U.request({ method: "POST", url: a, data: { provider: r, platform: h, param: n }, success: function success() {var _ref19 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},t = _ref19.statusCode,n = _ref19.data;return !t || t >= 400 ? s(new P({ code: n.code || "SYS_ERR", message: n.message || "request:fail" })) : e({ result: n });}, fail: function fail(e) {s(new P({ code: e.code || e.errCode || "SYS_ERR", message: e.message || e.errMsg || "request:fail" }));} });});});}var We = [{ rule: /fc_function_not_found|FUNCTION_NOT_FOUND/, content: "，云函数[{functionName}]在云端不存在，请检查此云函数名称是否正确以及该云函数是否已上传到服务空间", mode: "append" }];var ze = /[\\^$.*+?()[\]{}|]/g,Ve = RegExp(ze.source);function Je(e, t, s) {return e.replace(new RegExp((n = t) && Ve.test(n) ? n.replace(ze, "\\$&") : n, "g"), s);var n;}function Ye(_ref20) {var e = _ref20.functionName,t = _ref20.result,s = _ref20.logPvd;if (this.config.useDebugFunction && t && t.requestId) {var _n7 = JSON.stringify({ spaceId: this.config.spaceId, functionName: e, requestId: t.requestId });console.log("[".concat(s, "-request]").concat(_n7, "[/").concat(s, "-request]"));}}function Xe(e) {var t = e.callFunction,s = function s(_s4) {var _this17 = this;var n = _s4.name;_s4.data = Be.call(e, { data: _s4.data });var r = { aliyun: "aliyun", tencent: "tcb" }[this.config.provider];return t.call(this, _s4).then(function (e) {return Ye.call(_this17, { functionName: n, result: e, logPvd: r }), Promise.resolve(e);}, function (e) {return Ye.call(_this17, { functionName: n, result: e, logPvd: r }), e && e.message && (e.message = function () {var _ref21 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},_ref21$message = _ref21.message,e = _ref21$message === void 0 ? "" : _ref21$message,_ref21$extraInfo = _ref21.extraInfo,t = _ref21$extraInfo === void 0 ? {} : _ref21$extraInfo,_ref21$formatter = _ref21.formatter,s = _ref21$formatter === void 0 ? [] : _ref21$formatter;for (var _n8 = 0; _n8 < s.length; _n8++) {var _s$_n = s[_n8],_r3 = _s$_n.rule,_o2 = _s$_n.content,i = _s$_n.mode,_a = e.match(_r3);if (!_a) continue;var _c = _o2;for (var _e19 = 1; _e19 < _a.length; _e19++) {_c = Je(_c, "{$".concat(_e19, "}"), _a[_e19]);}for (var _e20 in t) {_c = Je(_c, "{".concat(_e20, "}"), t[_e20]);}switch (i) {case "replace":return _c;case "append":default:return e + _c;}}return e;}({ message: "[".concat(_s4.name, "]: ").concat(e.message), formatter: We, extraInfo: { functionName: n } })), Promise.reject(e);});};e.callFunction = function (t) {var n;return u && e.debugInfo && !e.debugInfo.forceRemote && d ? (e._originCallFunction || (e._originCallFunction = s), n = He.call(this, t)) : n = s.call(this, t), Object.defineProperty(n, "result", { get: function get() {return console.warn("当前返回结果为Promise类型，不可直接访问其result属性，详情请参考：https://uniapp.dcloud.net.cn/uniCloud/faq?id=promise"), {};} }), n;};}var Ge = Symbol("CLIENT_DB_INTERNAL");function Qe(e, t) {return e.then = "DoNotReturnProxyWithAFunctionNamedThen", e._internalType = Ge, e.__ob__ = void 0, new Proxy(e, { get: function get(e, s, n) {return s in e || "string" != typeof s ? e[s] : t.get(e, s, n);} });}function Ze(e) {switch (o(e)) {case "array":return e.map(function (e) {return Ze(e);});case "object":return e._internalType === Ge || Object.keys(e).forEach(function (t) {e[t] = Ze(e[t]);}), e;case "regexp":return { $regexp: { source: e.source, flags: e.flags } };case "date":return { $date: e.toISOString() };default:return e;}}function et(e) {e.database = function (t) {if (t && Object.keys(t).length > 0) return e.init(t).database();if (this._database) return this._database;var s = {};var n = {};function r(_ref22) {var t = _ref22.action,r = _ref22.command,o = _ref22.multiCommand;return S(v("database", "invoke")).then(function () {return e.callFunction({ name: "DCloud-clientDB", data: { action: t, command: r, multiCommand: o } });}).then(function (e) {var _e$result = e.result,t = _e$result.code,r = _e$result.message,o = _e$result.token,i = _e$result.tokenExpired,_e$result$systemInfo = _e$result.systemInfo,c = _e$result$systemInfo === void 0 ? [] : _e$result$systemInfo;if (c) for (var _e21 = 0; _e21 < c.length; _e21++) {var _c$_e = c[_e21],_t8 = _c$_e.level,_s5 = _c$_e.message,_n9 = _c$_e.detail,_r4 = console["app-plus" === h && "warn" === _t8 ? "error" : _t8] || console.log;var _o3 = "[System Info]" + _s5;_n9 && (_o3 = "".concat(_o3, "\n\u8BE6\u7EC6\u4FE1\u606F\uFF1A").concat(_n9)), _r4(_o3);}if (t) {var _e22 = new a(r, t);return n.error && n.error.forEach(function (t) {t(_e22);}), Promise.reject(_e22);}o && i && (!function () {var _ref23 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},e = _ref23.token,t = _ref23.tokenExpired;e && U.setStorageSync("uni_id_token", e), t && U.setStorageSync("uni_id_token_expired", t);}({ token: o, tokenExpired: i }), s.refreshToken && s.refreshToken.forEach(function (e) {e({ token: o, tokenExpired: i });}), n.refreshToken && n.refreshToken.forEach(function (e) {e({ token: o, tokenExpired: i });}));var u = e.result.affectedDocs;return "number" == typeof u && Object.defineProperty(e.result, "affectedDocs", { get: function get() {return console.warn("affectedDocs不再推荐使用，请使用inserted/deleted/updated/data.length替代"), u;} }), S(v("database", "success"), e).then(function () {return S(v("database", "complete"), e);}).then(function () {return Promise.resolve(e);});}, function (e) {var t = new a(e.message, e.code || "SYSTEM_ERROR");return n.error && n.error.forEach(function (e) {e(t);}), /fc_function_not_found|FUNCTION_NOT_FOUND/g.test(e.message) && console.warn("clientDB未初始化，请在web控制台保存一次schema以开启clientDB"), S(v("database", "fail"), e).then(function () {return S(v("database", "complete"), e);}).then(function () {return Promise.reject(e);});});}this.isDefault && (n = m("_globalUniCloudDatabaseCallback"));var o = /*#__PURE__*/function () {function o(e, t) {_classCallCheck(this, o);this.content = e, this.prevStage = t, this.udb = null;}_createClass(o, [{ key: "toJSON", value: function toJSON() {var e = this;var t = [e.content];for (; e.prevStage;) {e = e.prevStage, t.push(e.content);}return { $db: t.reverse().map(function (e) {return { $method: e.$method, $param: Ze(e.$param) };}) };} }, { key: "getAction", value: function getAction() {var e = this.toJSON().$db.find(function (e) {return "action" === e.$method;});return e && e.$param && e.$param[0];} }, { key: "getCommand", value: function getCommand() {return { $db: this.toJSON().$db.filter(function (e) {return "action" !== e.$method;}) };} }, { key: "get", value: function get() {return this._send("get", Array.from(arguments));} }, { key: "add", value: function add() {return this._send("add", Array.from(arguments));} }, { key: "remove", value: function remove() {return this._send("remove", Array.from(arguments));} }, { key: "update", value: function update() {return this._send("update", Array.from(arguments));} }, { key: "end", value: function end() {return this._send("end", Array.from(arguments));} }, { key: "set", value: function set() {throw new Error("clientDB禁止使用set方法");} }, { key: "_send", value: function _send(e, t) {var s = this.getAction(),n = this.getCommand();return n.$db.push({ $method: e, $param: Ze(t) }), r({ action: s, command: n });} }, { key: "useAggregate", get: function get() {var e = this,t = !1;for (; e.prevStage;) {e = e.prevStage;var _s6 = e.content.$method;if ("aggregate" === _s6 || "pipeline" === _s6) {t = !0;break;}}return t;} }, { key: "count", get: function get() {if (!this.useAggregate) return function () {return this._send("count", Array.from(arguments));};var e = this;return function () {return u({ $method: "count", $param: Ze(Array.from(arguments)) }, e);};} }, { key: "multiSend", get: function get() {} }]);return o;}();var i = ["db.Geo", "db.command", "command.aggregate"];function c(e, t) {return i.indexOf("".concat(e, ".").concat(t)) > -1;}function u(e, t) {return Qe(new o(e, t), { get: function get(e, t) {var s = "db";return e && e.content && (s = e.content.$method), c(s, t) ? u({ $method: t }, e) : function () {return u({ $method: t, $param: Ze(Array.from(arguments)) }, e);};} });}function l(_ref24) {var e = _ref24.path,t = _ref24.method;return /*#__PURE__*/function () {function _class2() {_classCallCheck(this, _class2);this.param = Array.from(arguments);}_createClass(_class2, [{ key: "toJSON", value: function toJSON() {return { $newDb: [].concat(_toConsumableArray(e.map(function (e) {return { $method: e };})), [{ $method: t, $param: this.param }]) };} }]);return _class2;}();}var d = { auth: { on: function on(e, t) {s[e] = s[e] || [], s[e].indexOf(t) > -1 || s[e].push(t);}, off: function off(e, t) {s[e] = s[e] || [];var n = s[e].indexOf(t);-1 !== n && s[e].splice(n, 1);} }, on: function on(e, t) {n[e] = n[e] || [], n[e].indexOf(t) > -1 || n[e].push(t);}, off: function off(e, t) {n[e] = n[e] || [];var s = n[e].indexOf(t);-1 !== s && n[e].splice(s, 1);}, env: Qe({}, { get: function get(e, t) {return { $env: t };} }), Geo: Qe({}, { get: function get(e, t) {return l({ path: ["Geo"], method: t });} }), getCloudEnv: function getCloudEnv(e) {if ("string" != typeof e || !e.trim()) throw new Error("getCloudEnv参数错误");return { $env: e.replace("$cloudEnv_", "") };}, multiSend: function multiSend() {var e = Array.from(arguments);return r({ multiCommand: e.map(function (e) {var t = e.getAction(),s = e.getCommand();if ("getTemp" !== s.$db[s.$db.length - 1].$method) throw new Error("multiSend只支持子命令内使用getTemp");return { action: t, command: s };}) }).then(function (t) {for (var _s7 = 0; _s7 < e.length; _s7++) {var _n10 = e[_s7];_n10.udb && "function" == typeof _n10.udb.setResult && _n10.udb.setResult(t.result.dataList[_s7]);}return Promise.resolve(t);}, function (t) {for (var _s8 = 0; _s8 < e.length; _s8++) {var _n11 = e[_s8];_n11.udb && "function" == typeof _n11.udb.setResult && _n11.udb.setResult(t);}return Promise.reject(t);});}, get serverDate() {return l({ path: [], method: "serverDate" });}, get RegExp() {return l({ path: [], method: "RegExp" });} },f = Qe(d, { get: function get(e, t) {return c("db", t) ? u({ $method: t }) : function () {return u({ $method: t, $param: Ze(Array.from(arguments)) });};} });return this._database = f, f;};}var tt;var st = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",nt = /^(?:[A-Za-z\d+/]{4})*?(?:[A-Za-z\d+/]{2}(?:==)?|[A-Za-z\d+/]{3}=?)?$/;function rt() {var e = Ne().token || "",t = e.split(".");if (!e || 3 !== t.length) return { uid: null, role: [], permission: [], tokenExpired: 0 };var s;try {s = JSON.parse((n = t[1], decodeURIComponent(tt(n).split("").map(function (e) {return "%" + ("00" + e.charCodeAt(0).toString(16)).slice(-2);}).join(""))));} catch (e) {throw new Error("获取当前用户信息出错，详细错误信息为：" + e.message);}var n;return s.tokenExpired = 1e3 * s.exp, delete s.exp, delete s.iat, s;}tt = "function" != typeof atob ? function (e) {if (e = String(e).replace(/[\t\n\f\r ]+/g, ""), !nt.test(e)) throw new Error("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");var t;e += "==".slice(2 - (3 & e.length));for (var s, n, r = "", o = 0; o < e.length;) {t = st.indexOf(e.charAt(o++)) << 18 | st.indexOf(e.charAt(o++)) << 12 | (s = st.indexOf(e.charAt(o++))) << 6 | (n = st.indexOf(e.charAt(o++))), r += 64 === s ? String.fromCharCode(t >> 16 & 255) : 64 === n ? String.fromCharCode(t >> 16 & 255, t >> 8 & 255) : String.fromCharCode(t >> 16 & 255, t >> 8 & 255, 255 & t);}return r;} : atob;var ot = t(s(function (e, t) {Object.defineProperty(t, "__esModule", { value: !0 });var s = "chooseAndUploadFile:ok",n = "chooseAndUploadFile:fail";function r(e, t) {return e.tempFiles.forEach(function (e, s) {e.name || (e.name = e.path.substring(e.path.lastIndexOf("/") + 1)), t && (e.fileType = t), e.cloudPath = Date.now() + "_" + s + e.name.substring(e.name.lastIndexOf("."));}), e.tempFilePaths || (e.tempFilePaths = e.tempFiles.map(function (e) {return e.path;})), e;}function o(e, t, _ref25) {var n = _ref25.onChooseFile,r = _ref25.onUploadProgress;return t.then(function (e) {if (n) {var _t9 = n(e);if (void 0 !== _t9) return Promise.resolve(_t9).then(function (t) {return void 0 === t ? e : t;});}return e;}).then(function (t) {return !1 === t ? { errMsg: s, tempFilePaths: [], tempFiles: [] } : function (e, t) {var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 5;var r = arguments.length > 3 ? arguments[3] : undefined;(t = Object.assign({}, t)).errMsg = s;var o = t.tempFiles,i = o.length;var a = 0;return new Promise(function (s) {for (; a < n;) {c();}function c() {var n = a++;if (n >= i) return void (!o.find(function (e) {return !e.url && !e.errMsg;}) && s(t));var u = o[n];e.uploadFile({ filePath: u.path, cloudPath: u.cloudPath, fileType: u.fileType, onUploadProgress: function onUploadProgress(e) {e.index = n, e.tempFile = u, e.tempFilePath = u.path, r && r(e);} }).then(function (e) {u.url = e.fileID, n < i && c();}).catch(function (e) {u.errMsg = e.errMsg || e.message, n < i && c();});}});}(e, t, 5, r);});}t.initChooseAndUploadFile = function (e) {return function () {var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { type: "all" };return "image" === t.type ? o(e, function (e) {var t = e.count,s = e.sizeType,_e$sourceType = e.sourceType,o = _e$sourceType === void 0 ? ["album", "camera"] : _e$sourceType,i = e.extension;return new Promise(function (e, a) {uni.chooseImage({ count: t, sizeType: s, sourceType: o, extension: i, success: function success(t) {e(r(t, "image"));}, fail: function fail(e) {a({ errMsg: e.errMsg.replace("chooseImage:fail", n) });} });});}(t), t) : "video" === t.type ? o(e, function (e) {var t = e.camera,s = e.compressed,o = e.maxDuration,_e$sourceType2 = e.sourceType,i = _e$sourceType2 === void 0 ? ["album", "camera"] : _e$sourceType2,a = e.extension;return new Promise(function (e, c) {uni.chooseVideo({ camera: t, compressed: s, maxDuration: o, sourceType: i, extension: a, success: function success(t) {var s = t.tempFilePath,n = t.duration,o = t.size,i = t.height,a = t.width;e(r({ errMsg: "chooseVideo:ok", tempFilePaths: [s], tempFiles: [{ name: t.tempFile && t.tempFile.name || "", path: s, size: o, type: t.tempFile && t.tempFile.type || "", width: a, height: i, duration: n, fileType: "video", cloudPath: "" }] }, "video"));}, fail: function fail(e) {c({ errMsg: e.errMsg.replace("chooseVideo:fail", n) });} });});}(t), t) : o(e, function (e) {var t = e.count,s = e.extension;return new Promise(function (e, o) {var i = uni.chooseFile;if ("undefined" != typeof wx && "function" == typeof wx.chooseMessageFile && (i = wx.chooseMessageFile), "function" != typeof i) return o({ errMsg: n + " 请指定 type 类型，该平台仅支持选择 image 或 video。" });i({ type: "all", count: t, extension: s, success: function success(t) {e(r(t));}, fail: function fail(e) {o({ errMsg: e.errMsg.replace("chooseFile:fail", n) });} });});}(t), t);};};}));var it = "manual";function at(e) {return { props: { localdata: { type: Array, default: function _default() {return [];} }, options: { type: [Object, Array], default: function _default() {return {};} }, spaceInfo: { type: Object, default: function _default() {return {};} }, collection: { type: [String, Array], default: "" }, action: { type: String, default: "" }, field: { type: String, default: "" }, orderby: { type: String, default: "" }, where: { type: [String, Object], default: "" }, pageData: { type: String, default: "add" }, pageCurrent: { type: Number, default: 1 }, pageSize: { type: Number, default: 20 }, getcount: { type: [Boolean, String], default: !1 }, gettree: { type: [Boolean, String], default: !1 }, gettreepath: { type: [Boolean, String], default: !1 }, startwith: { type: String, default: "" }, limitlevel: { type: Number, default: 10 }, groupby: { type: String, default: "" }, groupField: { type: String, default: "" }, distinct: { type: [Boolean, String], default: !1 }, foreignKey: { type: String, default: "" }, loadtime: { type: String, default: "auto" }, manual: { type: Boolean, default: !1 } }, data: function data() {return { mixinDatacomLoading: !1, mixinDatacomHasMore: !1, mixinDatacomResData: [], mixinDatacomErrorMessage: "", mixinDatacomPage: {} };}, created: function created() {var _this18 = this;this.mixinDatacomPage = { current: this.pageCurrent, size: this.pageSize, count: 0 }, this.$watch(function () {var e = [];return ["pageCurrent", "pageSize", "localdata", "collection", "action", "field", "orderby", "where", "getont", "getcount", "gettree", "groupby", "groupField", "distinct"].forEach(function (t) {e.push(_this18[t]);}), e;}, function (e, t) {if (_this18.loadtime === it) return;var s = !1;var n = [];for (var _r5 = 2; _r5 < e.length; _r5++) {e[_r5] !== t[_r5] && (n.push(e[_r5]), s = !0);}e[0] !== t[0] && (_this18.mixinDatacomPage.current = _this18.pageCurrent), _this18.mixinDatacomPage.size = _this18.pageSize, _this18.onMixinDatacomPropsChange(s, n);});}, methods: { onMixinDatacomPropsChange: function onMixinDatacomPropsChange(e, t) {}, mixinDatacomEasyGet: function mixinDatacomEasyGet() {var _this19 = this;var _ref26 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},_ref26$getone = _ref26.getone,e = _ref26$getone === void 0 ? !1 : _ref26$getone,t = _ref26.success,s = _ref26.fail;this.mixinDatacomLoading || (this.mixinDatacomLoading = !0, this.mixinDatacomErrorMessage = "", this.mixinDatacomGet().then(function (s) {_this19.mixinDatacomLoading = !1;var _s$result = s.result,n = _s$result.data,r = _s$result.count;_this19.getcount && (_this19.mixinDatacomPage.count = r), _this19.mixinDatacomHasMore = n.length < _this19.pageSize;var o = e ? n.length ? n[0] : void 0 : n;_this19.mixinDatacomResData = o, t && t(o);}).catch(function (e) {_this19.mixinDatacomLoading = !1, _this19.mixinDatacomErrorMessage = e, s && s(e);}));}, mixinDatacomGet: function mixinDatacomGet() {var _s9;var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};var s = e.database(this.spaceInfo);var n = t.action || this.action;n && (s = s.action(n));var r = t.collection || this.collection;s = Array.isArray(r) ? (_s9 = s).collection.apply(_s9, _toConsumableArray(r)) : s.collection(r);var o = t.where || this.where;o && Object.keys(o).length && (s = s.where(o));var i = t.field || this.field;i && (s = s.field(i));var a = t.foreignKey || this.foreignKey;a && (s = s.foreignKey(a));var c = t.groupby || this.groupby;c && (s = s.groupBy(c));var u = t.groupField || this.groupField;u && (s = s.groupField(u));!0 === (void 0 !== t.distinct ? t.distinct : this.distinct) && (s = s.distinct());var h = t.orderby || this.orderby;h && (s = s.orderBy(h));var l = void 0 !== t.pageCurrent ? t.pageCurrent : this.mixinDatacomPage.current,d = void 0 !== t.pageSize ? t.pageSize : this.mixinDatacomPage.size,f = void 0 !== t.getcount ? t.getcount : this.getcount,p = void 0 !== t.gettree ? t.gettree : this.gettree,g = void 0 !== t.gettreepath ? t.gettreepath : this.gettreepath,m = { getCount: f },y = { limitLevel: void 0 !== t.limitlevel ? t.limitlevel : this.limitlevel, startWith: void 0 !== t.startwith ? t.startwith : this.startwith };return p && (m.getTree = y), g && (m.getTreePath = y), s = s.skip(d * (l - 1)).limit(d).get(m), s;} } };}function ct(_x30, _x31) {return _ct.apply(this, arguments);}function _ct() {_ct = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee32(e, t) {var s, _e27, n;return _regenerator.default.wrap(function _callee32$(_context32) {while (1) {switch (_context32.prev = _context32.next) {case 0:s = "http://".concat(e, ":").concat(t, "/system/ping");_context32.prev = 1;_context32.next = 4;return n = { url: s, timeout: 500 }, new Promise(function (e, t) {U.request(_objectSpread(_objectSpread({}, n), {}, { success: function success(t) {e(t);}, fail: function fail(e) {t(e);} }));});case 4:_e27 = _context32.sent;return _context32.abrupt("return", !(!_e27.data || 0 !== _e27.data.code));case 8:_context32.prev = 8;_context32.t0 = _context32["catch"](1);return _context32.abrupt("return", !1);case 11:case "end":return _context32.stop();}}}, _callee32, null, [[1, 8]]);}));return _ct.apply(this, arguments);}var ut = new ( /*#__PURE__*/function () {function _class3() {_classCallCheck(this, _class3);}_createClass(_class3, [{ key: "init", value: function init(e) {var t = {};var s = !1 !== e.debugFunction && u && ("h5" === h && navigator.userAgent.indexOf("HBuilderX") > 0 || "app-plus" === h);switch (e.provider) {case "tencent":t = Fe.init(Object.assign(e, { useDebugFunction: s }));break;case "aliyun":t = x.init(Object.assign(e, { useDebugFunction: s }));break;case "private":t = je.init(Object.assign(e, { useDebugFunction: s }));break;default:throw new Error("未提供正确的provider参数");}var n = l;u && n && !n.code && (t.debugInfo = n);var r = Promise.resolve();var o;o = 1, r = new Promise(function (e, t) {setTimeout(function () {e();}, o);}), t.isReady = !1, t.isDefault = !1;var i = t.auth();t.initUniCloud = r.then(function () {return i.getLoginState();}).then(function (e) {return e ? Promise.resolve() : i.signInAnonymously();}).then(function () {if (!u) return Promise.resolve();if (u && t.debugInfo) {var _t$debugInfo = t.debugInfo,_e23 = _t$debugInfo.address,_s10 = _t$debugInfo.servePort;return function () {var _ref27 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee31(e, t) {var s, _n12, _r6;return _regenerator.default.wrap(function _callee31$(_context31) {while (1) {switch (_context31.prev = _context31.next) {case 0:_n12 = 0;case 1:if (!(_n12 < e.length)) {_context31.next = 11;break;}_r6 = e[_n12];_context31.next = 5;return ct(_r6, t);case 5:if (!_context31.sent) {_context31.next = 8;break;}s = _r6;return _context31.abrupt("break", 11);case 8:_n12++;_context31.next = 1;break;case 11:return _context31.abrupt("return", { address: s, port: t });case 12:case "end":return _context31.stop();}}}, _callee31);}));return function (_x32, _x33) {return _ref27.apply(this, arguments);};}()(_e23, _s10);}}).then(function () {var _ref28 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},e = _ref28.address,s = _ref28.port;if (!u) return Promise.resolve();if (e) t.localAddress = e, t.localPort = s;else if (t.debugInfo) {var _e24 = console["app-plus" === h ? "error" : "warn"];var _s11 = "";"remote" === t.debugInfo.initialLaunchType ? (t.debugInfo.forceRemote = !0, _s11 = "当前客户端和HBuilderX不在同一局域网下（或其他网络原因无法连接HBuilderX），uniCloud本地调试服务不对当前客户端生效。\n- 如果不使用uniCloud本地调试服务，请直接忽略此信息。\n- 如需使用uniCloud本地调试服务，请将客户端与主机连接到同一局域网下并重新运行到客户端。\n- 如果在HBuilderX开启的状态下切换过网络环境，请重启HBuilderX后再试\n- 检查系统防火墙是否拦截了HBuilderX自带的nodejs") : _s11 = "无法连接uniCloud本地调试服务，请检查当前客户端是否与主机在同一局域网下。\n- 如需使用uniCloud本地调试服务，请将客户端与主机连接到同一局域网下并重新运行到客户端。\n- 如果在HBuilderX开启的状态下切换过网络环境，请重启HBuilderX后再试\n- 检查系统防火墙是否拦截了HBuilderX自带的nodejs", "h5" === h && (_s11 += "\n- 部分浏览器开启节流模式之后访问本地地址受限，请检查是否启用了节流模式"), _e24(_s11);}}).then(function () {Me(), t.isReady = !0;}), Xe(t), function (e) {var t = e.uploadFile;e.uploadFile = function (e) {var _this20 = this;var s;return s = this.isReady ? Promise.resolve() : this.initUniCloud, s.then(function () {return t.call(_this20, e);});};}(t), et(t), function (e) {e.getCurrentUserInfo = rt, e.chooseAndUploadFile = ot.initChooseAndUploadFile(e), Object.assign(e, { get mixinDatacom() {return at(e);} });}(t);return ["callFunction", "uploadFile", "deleteFile", "getTempFileURL", "downloadFile", "chooseAndUploadFile"].forEach(function (e) {t[e] && (t[e] = T(t[e], e));}), t.init = this.init, t;} }]);return _class3;}())();(function () {{var e = d;var t = {};if (1 === e.length) t = e[0], ut = ut.init(t), ut.isDefault = !0;else {var _t10 = ["auth", "callFunction", "uploadFile", "deleteFile", "getTempFileURL", "downloadFile", "database", "getCurrentUSerInfo"];var _s12;_s12 = e && e.length > 0 ? "应用有多个服务空间，请通过uniCloud.init方法指定要使用的服务空间" : f ? "应用未关联服务空间，请在uniCloud目录右键关联服务空间" : "uni-app cli项目内使用uniCloud需要使用HBuilderX的运行菜单运行项目，且需要在uniCloud目录关联服务空间", _t10.forEach(function (e) {ut[e] = function () {return console.error(_s12), Promise.reject(new P({ code: "SYS_ERR", message: _s12 }));};});}Object.assign(ut, { get mixinDatacom() {return at(ut);} }), ut.addInterceptor = w, ut.removeInterceptor = k, u && "h5" === h && (window.uniCloud = ut);}})();var ht = ut;var _default2 = ht;exports.default = _default2;

/***/ }),
/* 15 */
/*!*************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-i18n/dist/uni-i18n.es.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.compileI18nJsonStr = compileI18nJsonStr;exports.hasI18nJson = hasI18nJson;exports.initVueI18n = initVueI18n;exports.isI18nStr = isI18nStr;exports.normalizeLocale = normalizeLocale;exports.parseI18nJson = parseI18nJson;exports.resolveLocale = resolveLocale;exports.isString = exports.LOCALE_ZH_HANT = exports.LOCALE_ZH_HANS = exports.LOCALE_FR = exports.LOCALE_ES = exports.LOCALE_EN = exports.I18n = exports.Formatter = void 0;function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}function _iterableToArrayLimit(arr, i) {if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}var isArray = Array.isArray;
var isObject = function isObject(val) {return val !== null && typeof val === 'object';};
var defaultDelimiters = ['{', '}'];var
BaseFormatter = /*#__PURE__*/function () {
  function BaseFormatter() {_classCallCheck(this, BaseFormatter);
    this._caches = Object.create(null);
  }_createClass(BaseFormatter, [{ key: "interpolate", value: function interpolate(
    message, values) {var delimiters = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultDelimiters;
      if (!values) {
        return [message];
      }
      var tokens = this._caches[message];
      if (!tokens) {
        tokens = parse(message, delimiters);
        this._caches[message] = tokens;
      }
      return compile(tokens, values);
    } }]);return BaseFormatter;}();exports.Formatter = BaseFormatter;

var RE_TOKEN_LIST_VALUE = /^(?:\d)+/;
var RE_TOKEN_NAMED_VALUE = /^(?:\w)+/;
function parse(format, _ref) {var _ref2 = _slicedToArray(_ref, 2),startDelimiter = _ref2[0],endDelimiter = _ref2[1];
  var tokens = [];
  var position = 0;
  var text = '';
  while (position < format.length) {
    var char = format[position++];
    if (char === startDelimiter) {
      if (text) {
        tokens.push({ type: 'text', value: text });
      }
      text = '';
      var sub = '';
      char = format[position++];
      while (char !== undefined && char !== endDelimiter) {
        sub += char;
        char = format[position++];
      }
      var isClosed = char === endDelimiter;
      var type = RE_TOKEN_LIST_VALUE.test(sub) ?
      'list' :
      isClosed && RE_TOKEN_NAMED_VALUE.test(sub) ?
      'named' :
      'unknown';
      tokens.push({ value: sub, type: type });
    }
    //  else if (char === '%') {
    //   // when found rails i18n syntax, skip text capture
    //   if (format[position] !== '{') {
    //     text += char
    //   }
    // }
    else {
        text += char;
      }
  }
  text && tokens.push({ type: 'text', value: text });
  return tokens;
}
function compile(tokens, values) {
  var compiled = [];
  var index = 0;
  var mode = isArray(values) ?
  'list' :
  isObject(values) ?
  'named' :
  'unknown';
  if (mode === 'unknown') {
    return compiled;
  }
  while (index < tokens.length) {
    var token = tokens[index];
    switch (token.type) {
      case 'text':
        compiled.push(token.value);
        break;
      case 'list':
        compiled.push(values[parseInt(token.value, 10)]);
        break;
      case 'named':
        if (mode === 'named') {
          compiled.push(values[token.value]);
        } else
        {
          if (true) {
            console.warn("Type of token '".concat(token.type, "' and format of value '").concat(mode, "' don't match!"));
          }
        }
        break;
      case 'unknown':
        if (true) {
          console.warn("Detect 'unknown' type of token!");
        }
        break;}

    index++;
  }
  return compiled;
}

var LOCALE_ZH_HANS = 'zh-Hans';exports.LOCALE_ZH_HANS = LOCALE_ZH_HANS;
var LOCALE_ZH_HANT = 'zh-Hant';exports.LOCALE_ZH_HANT = LOCALE_ZH_HANT;
var LOCALE_EN = 'en';exports.LOCALE_EN = LOCALE_EN;
var LOCALE_FR = 'fr';exports.LOCALE_FR = LOCALE_FR;
var LOCALE_ES = 'es';exports.LOCALE_ES = LOCALE_ES;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var hasOwn = function hasOwn(val, key) {return hasOwnProperty.call(val, key);};
var defaultFormatter = new BaseFormatter();
function include(str, parts) {
  return !!parts.find(function (part) {return str.indexOf(part) !== -1;});
}
function startsWith(str, parts) {
  return parts.find(function (part) {return str.indexOf(part) === 0;});
}
function normalizeLocale(locale, messages) {
  if (!locale) {
    return;
  }
  locale = locale.trim().replace(/_/g, '-');
  if (messages && messages[locale]) {
    return locale;
  }
  locale = locale.toLowerCase();
  if (locale.indexOf('zh') === 0) {
    if (locale.indexOf('-hans') > -1) {
      return LOCALE_ZH_HANS;
    }
    if (locale.indexOf('-hant') > -1) {
      return LOCALE_ZH_HANT;
    }
    if (include(locale, ['-tw', '-hk', '-mo', '-cht'])) {
      return LOCALE_ZH_HANT;
    }
    return LOCALE_ZH_HANS;
  }
  var lang = startsWith(locale, [LOCALE_EN, LOCALE_FR, LOCALE_ES]);
  if (lang) {
    return lang;
  }
}var
I18n = /*#__PURE__*/function () {
  function I18n(_ref3) {var locale = _ref3.locale,fallbackLocale = _ref3.fallbackLocale,messages = _ref3.messages,watcher = _ref3.watcher,formater = _ref3.formater;_classCallCheck(this, I18n);
    this.locale = LOCALE_EN;
    this.fallbackLocale = LOCALE_EN;
    this.message = {};
    this.messages = {};
    this.watchers = [];
    if (fallbackLocale) {
      this.fallbackLocale = fallbackLocale;
    }
    this.formater = formater || defaultFormatter;
    this.messages = messages || {};
    this.setLocale(locale || LOCALE_EN);
    if (watcher) {
      this.watchLocale(watcher);
    }
  }_createClass(I18n, [{ key: "setLocale", value: function setLocale(
    locale) {var _this = this;
      var oldLocale = this.locale;
      this.locale = normalizeLocale(locale, this.messages) || this.fallbackLocale;
      if (!this.messages[this.locale]) {
        // 可能初始化时不存在
        this.messages[this.locale] = {};
      }
      this.message = this.messages[this.locale];
      // 仅发生变化时，通知
      if (oldLocale !== this.locale) {
        this.watchers.forEach(function (watcher) {
          watcher(_this.locale, oldLocale);
        });
      }
    } }, { key: "getLocale", value: function getLocale()
    {
      return this.locale;
    } }, { key: "watchLocale", value: function watchLocale(
    fn) {var _this2 = this;
      var index = this.watchers.push(fn) - 1;
      return function () {
        _this2.watchers.splice(index, 1);
      };
    } }, { key: "add", value: function add(
    locale, message) {var override = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var curMessages = this.messages[locale];
      if (curMessages) {
        if (override) {
          Object.assign(curMessages, message);
        } else
        {
          Object.keys(message).forEach(function (key) {
            if (!hasOwn(curMessages, key)) {
              curMessages[key] = message[key];
            }
          });
        }
      } else
      {
        this.messages[locale] = message;
      }
    } }, { key: "f", value: function f(
    message, values, delimiters) {
      return this.formater.interpolate(message, values, delimiters).join('');
    } }, { key: "t", value: function t(
    key, locale, values) {
      var message = this.message;
      if (typeof locale === 'string') {
        locale = normalizeLocale(locale, this.messages);
        locale && (message = this.messages[locale]);
      } else
      {
        values = locale;
      }
      if (!hasOwn(message, key)) {
        console.warn("Cannot translate the value of keypath ".concat(key, ". Use the value of keypath as default."));
        return key;
      }
      return this.formater.interpolate(message[key], values).join('');
    } }]);return I18n;}();exports.I18n = I18n;


function watchAppLocale(appVm, i18n) {
  // 需要保证 watch 的触发在组件渲染之前
  if (appVm.$watchLocale) {
    // vue2
    appVm.$watchLocale(function (newLocale) {
      i18n.setLocale(newLocale);
    });
  } else
  {
    appVm.$watch(function () {return appVm.$locale;}, function (newLocale) {
      i18n.setLocale(newLocale);
    });
  }
}
function getDefaultLocale() {
  if (typeof uni !== 'undefined' && uni.getLocale) {
    return uni.getLocale();
  }
  // 小程序平台，uni 和 uni-i18n 互相引用，导致访问不到 uni，故在 global 上挂了 getLocale
  if (typeof global !== 'undefined' && global.getLocale) {
    return global.getLocale();
  }
  return LOCALE_EN;
}
function initVueI18n(locale) {var messages = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};var fallbackLocale = arguments.length > 2 ? arguments[2] : undefined;var watcher = arguments.length > 3 ? arguments[3] : undefined;
  // 兼容旧版本入参
  if (typeof locale !== 'string') {var _ref4 =
    [
    messages,
    locale];locale = _ref4[0];messages = _ref4[1];

  }
  if (typeof locale !== 'string') {
    // 因为小程序平台，uni-i18n 和 uni 互相引用，导致此时访问 uni 时，为 undefined
    locale = getDefaultLocale();
  }
  if (typeof fallbackLocale !== 'string') {
    fallbackLocale =
    typeof __uniConfig !== 'undefined' && __uniConfig.fallbackLocale ||
    LOCALE_EN;
  }
  var i18n = new I18n({
    locale: locale,
    fallbackLocale: fallbackLocale,
    messages: messages,
    watcher: watcher });

  var _t = function t(key, values) {
    if (typeof getApp !== 'function') {
      // app view
      /* eslint-disable no-func-assign */
      _t = function t(key, values) {
        return i18n.t(key, values);
      };
    } else
    {
      var isWatchedAppLocale = false;
      _t = function t(key, values) {
        var appVm = getApp().$vm;
        // 可能$vm还不存在，比如在支付宝小程序中，组件定义较早，在props的default里使用了t()函数（如uni-goods-nav），此时app还未初始化
        // options: {
        // 	type: Array,
        // 	default () {
        // 		return [{
        // 			icon: 'shop',
        // 			text: t("uni-goods-nav.options.shop"),
        // 		}, {
        // 			icon: 'cart',
        // 			text: t("uni-goods-nav.options.cart")
        // 		}]
        // 	}
        // },
        if (appVm) {
          // 触发响应式
          appVm.$locale;
          if (!isWatchedAppLocale) {
            isWatchedAppLocale = true;
            watchAppLocale(appVm, i18n);
          }
        }
        return i18n.t(key, values);
      };
    }
    return _t(key, values);
  };
  return {
    i18n: i18n,
    f: function f(message, values, delimiters) {
      return i18n.f(message, values, delimiters);
    },
    t: function t(key, values) {
      return _t(key, values);
    },
    add: function add(locale, message) {var override = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      return i18n.add(locale, message, override);
    },
    watch: function watch(fn) {
      return i18n.watchLocale(fn);
    },
    getLocale: function getLocale() {
      return i18n.getLocale();
    },
    setLocale: function setLocale(newLocale) {
      return i18n.setLocale(newLocale);
    } };

}

var isString = function isString(val) {return typeof val === 'string';};exports.isString = isString;
var formater;
function hasI18nJson(jsonObj, delimiters) {
  if (!formater) {
    formater = new BaseFormatter();
  }
  return walkJsonObj(jsonObj, function (jsonObj, key) {
    var value = jsonObj[key];
    if (isString(value)) {
      if (isI18nStr(value, delimiters)) {
        return true;
      }
    } else
    {
      return hasI18nJson(value, delimiters);
    }
  });
}
function parseI18nJson(jsonObj, values, delimiters) {
  if (!formater) {
    formater = new BaseFormatter();
  }
  walkJsonObj(jsonObj, function (jsonObj, key) {
    var value = jsonObj[key];
    if (isString(value)) {
      if (isI18nStr(value, delimiters)) {
        jsonObj[key] = compileStr(value, values, delimiters);
      }
    } else
    {
      parseI18nJson(value, values, delimiters);
    }
  });
  return jsonObj;
}
function compileI18nJsonStr(jsonStr, _ref5) {var locale = _ref5.locale,locales = _ref5.locales,delimiters = _ref5.delimiters;
  if (!isI18nStr(jsonStr, delimiters)) {
    return jsonStr;
  }
  if (!formater) {
    formater = new BaseFormatter();
  }
  var localeValues = [];
  Object.keys(locales).forEach(function (name) {
    if (name !== locale) {
      localeValues.push({
        locale: name,
        values: locales[name] });

    }
  });
  localeValues.unshift({ locale: locale, values: locales[locale] });
  try {
    return JSON.stringify(compileJsonObj(JSON.parse(jsonStr), localeValues, delimiters), null, 2);
  }
  catch (e) {}
  return jsonStr;
}
function isI18nStr(value, delimiters) {
  return value.indexOf(delimiters[0]) > -1;
}
function compileStr(value, values, delimiters) {
  return formater.interpolate(value, values, delimiters).join('');
}
function compileValue(jsonObj, key, localeValues, delimiters) {
  var value = jsonObj[key];
  if (isString(value)) {
    // 存在国际化
    if (isI18nStr(value, delimiters)) {
      jsonObj[key] = compileStr(value, localeValues[0].values, delimiters);
      if (localeValues.length > 1) {
        // 格式化国际化语言
        var valueLocales = jsonObj[key + 'Locales'] = {};
        localeValues.forEach(function (localValue) {
          valueLocales[localValue.locale] = compileStr(value, localValue.values, delimiters);
        });
      }
    }
  } else
  {
    compileJsonObj(value, localeValues, delimiters);
  }
}
function compileJsonObj(jsonObj, localeValues, delimiters) {
  walkJsonObj(jsonObj, function (jsonObj, key) {
    compileValue(jsonObj, key, localeValues, delimiters);
  });
  return jsonObj;
}
function walkJsonObj(jsonObj, walk) {
  if (isArray(jsonObj)) {
    for (var i = 0; i < jsonObj.length; i++) {
      if (walk(jsonObj, i)) {
        return true;
      }
    }
  } else
  if (isObject(jsonObj)) {
    for (var key in jsonObj) {
      if (walk(jsonObj, key)) {
        return true;
      }
    }
  }
  return false;
}

function resolveLocale(locales) {
  return function (locale) {
    if (!locale) {
      return locale;
    }
    locale = normalizeLocale(locale) || locale;
    return resolveLocaleChain(locale).find(function (locale) {return locales.indexOf(locale) > -1;});
  };
}
function resolveLocaleChain(locale) {
  var chain = [];
  var tokens = locale.split('-');
  while (tokens.length) {
    chain.push(tokens.join('-'));
    tokens.pop();
  }
  return chain;
}

/***/ }),
/* 16 */
/*!********************************************************************************!*\
  !*** /Users/ricky/Documents/Study/uniapp/bbs_study/pages.json?{"type":"stat"} ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"appid":"__UNI__B029C5F"});

/***/ }),
/* 17 */
/*!*****************************************************************!*\
  !*** /Users/ricky/Documents/Study/uniapp/bbs_study/api/post.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(uniCloud) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 9));var _ql = _interopRequireDefault(__webpack_require__(/*! @/common/js/ql.js */ 18));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);}_next(undefined);});};}\nvar create = /*#__PURE__*/function () {var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(payload) {var imgs, title, content, topic_ids, db, posts, res;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:\n\n            imgs =\n\n\n\n            payload.imgs, title = payload.title, content = payload.content, topic_ids = payload.topic_ids;\n\n\n            db = uniCloud.database();\n            posts = db.collection('posts');_context.next = 5;return (\n\n              posts.add({\n                imgs: imgs,\n                title: title,\n                content: content,\n                topic_ids: topic_ids }));case 5:res = _context.sent;return _context.abrupt(\"return\",\n\n\n            res);case 7:case \"end\":return _context.stop();}}}, _callee);}));return function create(_x) {return _ref.apply(this, arguments);};}();\n\n\n\nvar praise = /*#__PURE__*/function () {var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2(payload) {var uid, postID, praiseStatus, res;return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:\n            uid = payload.uid, postID = payload.postID, praiseStatus = payload.praiseStatus;_context2.next = 3;return (\n\n              uniCloud.callFunction({\n                name: 'index',\n                data: {\n                  action: 'post/praise',\n                  data: {\n                    uid: uid,\n                    postID: postID,\n                    praiseStatus: praiseStatus } } }));case 3:res = _context2.sent;return _context2.abrupt(\"return\",\n\n\n\n\n            res);case 5:case \"end\":return _context2.stop();}}}, _callee2);}));return function praise(_x2) {return _ref2.apply(this, arguments);};}();\n\n\nvar love = /*#__PURE__*/function () {var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3(payload) {var uid, postID, loveStatus, res;return _regenerator.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:\n            uid = payload.uid, postID = payload.postID, loveStatus = payload.loveStatus;_context3.next = 3;return (\n\n              uniCloud.callFunction({\n                name: 'index',\n                data: {\n                  action: 'post/love',\n                  data: {\n                    uid: uid,\n                    postID: postID,\n                    loveStatus: loveStatus } } }));case 3:res = _context3.sent;return _context3.abrupt(\"return\",\n\n\n\n\n            res);case 5:case \"end\":return _context3.stop();}}}, _callee3);}));return function love(_x3) {return _ref3.apply(this, arguments);};}();\n\n\nvar countPost = /*#__PURE__*/function () {var _ref4 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee4(payload) {var author, db, posts, _yield$posts$where$co, result;return _regenerator.default.wrap(function _callee4$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:\n            author = payload.author;\n            db = uniCloud.database();\n            posts = db.collection('posts');_context4.next = 5;return (\n              posts.where(\"author == '\".concat(author, \"'\")).count());case 5:_yield$posts$where$co = _context4.sent;result = _yield$posts$where$co.result;return _context4.abrupt(\"return\",\n            result.total);case 8:case \"end\":return _context4.stop();}}}, _callee4);}));return function countPost(_x4) {return _ref4.apply(this, arguments);};}();\n\n\nvar show = /*#__PURE__*/function () {var _ref5 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee5(payload) {var _id, uid, afk, postField, db, posts, _yield$posts$doc$fiel, result;return _regenerator.default.wrap(function _callee5$(_context5) {while (1) {switch (_context5.prev = _context5.next) {case 0:\n            _id = payload._id, uid = payload.uid;\n            afk = _ql.default.useFk('author');\n            postField = (0, _ql.default)([\n            'create_date',\n            afk('username'),\n            afk('_id', 'authorID'),\n            afk('avatar', 'avatarUrl'),\n            'title',\n            'imgs', \"topic_ids.title|topics\", \"size(praise_user_ids._id)|praiseNum\", \"in('\".concat(\n\n\n            uid, \"', praise_user_ids._id)|praiseStatus\"), \"size(love_user_ids._id)|loveNum\", \"in('\".concat(\n\n            uid, \"', love_user_ids._id)|loveStatus\")]);\n\n            db = uniCloud.database();\n            posts = db.collection('posts,uni-id-users,topics');_context5.next = 7;return (\n              posts.doc(_id).field(postField).get({\n                getOne: true }));case 7:_yield$posts$doc$fiel = _context5.sent;result = _yield$posts$doc$fiel.result;return _context5.abrupt(\"return\",\n\n            result.data);case 10:case \"end\":return _context5.stop();}}}, _callee5);}));return function show(_x5) {return _ref5.apply(this, arguments);};}();var _default =\n\n\n{\n  create: create,\n  praise: praise,\n  love: love,\n  countPost: countPost,\n  show: show };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/uni-cloud/dist/index.js */ 14)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vYXBpL3Bvc3QuanMiXSwibmFtZXMiOlsiY3JlYXRlIiwicGF5bG9hZCIsImltZ3MiLCJ0aXRsZSIsImNvbnRlbnQiLCJ0b3BpY19pZHMiLCJkYiIsInVuaUNsb3VkIiwiZGF0YWJhc2UiLCJwb3N0cyIsImNvbGxlY3Rpb24iLCJhZGQiLCJyZXMiLCJwcmFpc2UiLCJ1aWQiLCJwb3N0SUQiLCJwcmFpc2VTdGF0dXMiLCJjYWxsRnVuY3Rpb24iLCJuYW1lIiwiZGF0YSIsImFjdGlvbiIsImxvdmUiLCJsb3ZlU3RhdHVzIiwiY291bnRQb3N0IiwiYXV0aG9yIiwid2hlcmUiLCJjb3VudCIsInJlc3VsdCIsInRvdGFsIiwic2hvdyIsIl9pZCIsImFmayIsIiRRIiwidXNlRmsiLCJwb3N0RmllbGQiLCJkb2MiLCJmaWVsZCIsImdldCIsImdldE9uZSJdLCJtYXBwaW5ncyI6IjBQQUFBLG1GO0FBQ0EsSUFBTUEsTUFBTSxrR0FBRyxpQkFBTUMsT0FBTjs7QUFFYkMsZ0JBRmE7Ozs7QUFNVkQsbUJBTlUsQ0FFYkMsSUFGYSxFQUdiQyxLQUhhLEdBTVZGLE9BTlUsQ0FHYkUsS0FIYSxFQUliQyxPQUphLEdBTVZILE9BTlUsQ0FJYkcsT0FKYSxFQUtiQyxTQUxhLEdBTVZKLE9BTlUsQ0FLYkksU0FMYTs7O0FBU1JDLGNBVFEsR0FTSEMsUUFBUSxDQUFDQyxRQUFULEVBVEc7QUFVUkMsaUJBVlEsR0FVQUgsRUFBRSxDQUFDSSxVQUFILENBQWMsT0FBZCxDQVZBOztBQVlJRCxtQkFBSyxDQUFDRSxHQUFOLENBQVU7QUFDM0JULG9CQUFJLEVBQUpBLElBRDJCO0FBRTNCQyxxQkFBSyxFQUFMQSxLQUYyQjtBQUczQkMsdUJBQU8sRUFBUEEsT0FIMkI7QUFJM0JDLHlCQUFTLEVBQVRBLFNBSjJCLEVBQVYsQ0FaSixTQVlSTyxHQVpROzs7QUFtQlBBLGVBbkJPLDBEQUFILG1CQUFOWixNQUFNLDhDQUFaOzs7O0FBdUJBLElBQU1hLE1BQU0sbUdBQUcsa0JBQU1aLE9BQU47QUFDTmEsZUFETSxHQUN3QmIsT0FEeEIsQ0FDTmEsR0FETSxFQUNEQyxNQURDLEdBQ3dCZCxPQUR4QixDQUNEYyxNQURDLEVBQ09DLFlBRFAsR0FDd0JmLE9BRHhCLENBQ09lLFlBRFA7O0FBR0lULHNCQUFRLENBQUNVLFlBQVQsQ0FBc0I7QUFDdkNDLG9CQUFJLEVBQUUsT0FEaUM7QUFFdkNDLG9CQUFJLEVBQUU7QUFDTEMsd0JBQU0sRUFBRSxhQURIO0FBRUxELHNCQUFJLEVBQUU7QUFDTEwsdUJBQUcsRUFBSEEsR0FESztBQUVMQywwQkFBTSxFQUFOQSxNQUZLO0FBR0xDLGdDQUFZLEVBQVpBLFlBSEssRUFGRCxFQUZpQyxFQUF0QixDQUhKLFNBR1JKLEdBSFE7Ozs7O0FBZVBBLGVBZk8sNERBQUgsbUJBQU5DLE1BQU0sZ0RBQVo7OztBQWtCQSxJQUFNUSxJQUFJLG1HQUFHLGtCQUFNcEIsT0FBTjtBQUNKYSxlQURJLEdBQ3dCYixPQUR4QixDQUNKYSxHQURJLEVBQ0NDLE1BREQsR0FDd0JkLE9BRHhCLENBQ0NjLE1BREQsRUFDU08sVUFEVCxHQUN3QnJCLE9BRHhCLENBQ1NxQixVQURUOztBQUdNZixzQkFBUSxDQUFDVSxZQUFULENBQXNCO0FBQ3ZDQyxvQkFBSSxFQUFFLE9BRGlDO0FBRXZDQyxvQkFBSSxFQUFFO0FBQ0xDLHdCQUFNLEVBQUUsV0FESDtBQUVMRCxzQkFBSSxFQUFFO0FBQ0xMLHVCQUFHLEVBQUhBLEdBREs7QUFFTEMsMEJBQU0sRUFBTkEsTUFGSztBQUdMTyw4QkFBVSxFQUFWQSxVQUhLLEVBRkQsRUFGaUMsRUFBdEIsQ0FITixTQUdOVixHQUhNOzs7OztBQWVMQSxlQWZLLDREQUFILG1CQUFKUyxJQUFJLGdEQUFWOzs7QUFrQkEsSUFBTUUsU0FBUyxtR0FBRyxrQkFBTXRCLE9BQU47QUFDVnVCLGtCQURVLEdBQ0F2QixPQURBLENBQ1Z1QixNQURVO0FBRVhsQixjQUZXLEdBRU5DLFFBQVEsQ0FBQ0MsUUFBVCxFQUZNO0FBR1hDLGlCQUhXLEdBR0hILEVBQUUsQ0FBQ0ksVUFBSCxDQUFjLE9BQWQsQ0FIRztBQUlNRCxtQkFBSyxDQUFDZ0IsS0FBTixzQkFBMEJELE1BQTFCLFFBQXFDRSxLQUFyQyxFQUpOLGdEQUlWQyxNQUpVLHlCQUlWQSxNQUpVO0FBS1ZBLGtCQUFNLENBQUNDLEtBTEcsNERBQUgsbUJBQVRMLFNBQVMsZ0RBQWY7OztBQVFBLElBQU1NLElBQUksbUdBQUcsa0JBQU01QixPQUFOO0FBQ0w2QixlQURLLEdBQ003QixPQUROLENBQ0w2QixHQURLLEVBQ0RoQixHQURDLEdBQ01iLE9BRE4sQ0FDRGEsR0FEQztBQUVOaUIsZUFGTSxHQUVBQyxZQUFHQyxLQUFILENBQVMsUUFBVCxDQUZBO0FBR05DLHFCQUhNLEdBR00saUJBQUc7QUFDcEIseUJBRG9CO0FBRXBCSCxlQUFHLENBQUMsVUFBRCxDQUZpQjtBQUdwQkEsZUFBRyxDQUFDLEtBQUQsRUFBTyxVQUFQLENBSGlCO0FBSXBCQSxlQUFHLENBQUMsUUFBRCxFQUFVLFdBQVYsQ0FKaUI7QUFLcEIsbUJBTG9CO0FBTXBCLGtCQU5vQjs7O0FBU2JqQixlQVRhOztBQVdiQSxlQVhhLHNDQUFILENBSE47O0FBZ0JOUixjQWhCTSxHQWdCREMsUUFBUSxDQUFDQyxRQUFULEVBaEJDO0FBaUJOQyxpQkFqQk0sR0FpQkVILEVBQUUsQ0FBQ0ksVUFBSCxDQUFjLDJCQUFkLENBakJGO0FBa0JXRCxtQkFBSyxDQUFDMEIsR0FBTixDQUFVTCxHQUFWLEVBQWVNLEtBQWYsQ0FBcUJGLFNBQXJCLEVBQWdDRyxHQUFoQyxDQUFvQztBQUMxREMsc0JBQU0sRUFBRSxJQURrRCxFQUFwQyxDQWxCWCxnREFrQkxYLE1BbEJLLHlCQWtCTEEsTUFsQks7O0FBcUJMQSxrQkFBTSxDQUFDUixJQXJCRiw2REFBSCxtQkFBSlUsSUFBSSxnREFBVixDOzs7QUF3QmU7QUFDZDdCLFFBQU0sRUFBTkEsTUFEYztBQUVkYSxRQUFNLEVBQU5BLE1BRmM7QUFHZFEsTUFBSSxFQUFKQSxJQUhjO0FBSWRFLFdBQVMsRUFBVEEsU0FKYztBQUtkTSxNQUFJLEVBQUpBLElBTGMsRSIsImZpbGUiOiIxNy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAkUSBmcm9tIFwiQC9jb21tb24vanMvcWwuanNcIlxuY29uc3QgY3JlYXRlID0gYXN5bmMgcGF5bG9hZCA9PiB7XG5cdGNvbnN0IHtcblx0XHRpbWdzLFxuXHRcdHRpdGxlLFxuXHRcdGNvbnRlbnQsXG5cdFx0dG9waWNfaWRzXG5cdH0gPSBwYXlsb2FkXG5cblxuXHRjb25zdCBkYiA9IHVuaUNsb3VkLmRhdGFiYXNlKCk7XG5cdGNvbnN0IHBvc3RzID0gZGIuY29sbGVjdGlvbigncG9zdHMnKTtcblxuXHRjb25zdCByZXMgPSBhd2FpdCBwb3N0cy5hZGQoe1xuXHRcdGltZ3MsXG5cdFx0dGl0bGUsXG5cdFx0Y29udGVudCxcblx0XHR0b3BpY19pZHNcblx0fSlcblxuXHRyZXR1cm4gcmVzXG59XG5cblxuY29uc3QgcHJhaXNlID0gYXN5bmMgcGF5bG9hZCA9PiB7XG5cdGNvbnN0IHsgdWlkLCBwb3N0SUQsIHByYWlzZVN0YXR1cyB9ID0gcGF5bG9hZFxuXG5cdGNvbnN0IHJlcyA9IGF3YWl0IHVuaUNsb3VkLmNhbGxGdW5jdGlvbih7XG5cdFx0bmFtZTogJ2luZGV4Jyxcblx0XHRkYXRhOiB7XG5cdFx0XHRhY3Rpb246ICdwb3N0L3ByYWlzZScsXG5cdFx0XHRkYXRhOiB7XG5cdFx0XHRcdHVpZCxcblx0XHRcdFx0cG9zdElELFxuXHRcdFx0XHRwcmFpc2VTdGF0dXNcblx0XHRcdH1cblx0XHR9XG5cdH0pXG5cblx0cmV0dXJuIHJlc1xufVxuXG5jb25zdCBsb3ZlID0gYXN5bmMgcGF5bG9hZCA9PiB7XG5cdGNvbnN0IHsgdWlkLCBwb3N0SUQsIGxvdmVTdGF0dXMgfSA9IHBheWxvYWRcblxuXHRjb25zdCByZXMgPSBhd2FpdCB1bmlDbG91ZC5jYWxsRnVuY3Rpb24oe1xuXHRcdG5hbWU6ICdpbmRleCcsXG5cdFx0ZGF0YToge1xuXHRcdFx0YWN0aW9uOiAncG9zdC9sb3ZlJyxcblx0XHRcdGRhdGE6IHtcblx0XHRcdFx0dWlkLFxuXHRcdFx0XHRwb3N0SUQsXG5cdFx0XHRcdGxvdmVTdGF0dXNcblx0XHRcdH1cblx0XHR9XG5cdH0pXG5cblx0cmV0dXJuIHJlc1xufVxuXG5jb25zdCBjb3VudFBvc3QgPSBhc3luYyBwYXlsb2FkID0+IHtcblx0Y29uc3Qge2F1dGhvcn0gPSBwYXlsb2FkXG5cdGNvbnN0IGRiID0gdW5pQ2xvdWQuZGF0YWJhc2UoKVxuXHRjb25zdCBwb3N0cyA9IGRiLmNvbGxlY3Rpb24oJ3Bvc3RzJylcblx0Y29uc3Qge3Jlc3VsdH0gPSBhd2FpdCBwb3N0cy53aGVyZShgYXV0aG9yID09ICcke2F1dGhvcn0nYCkuY291bnQoKVxuXHRyZXR1cm4gcmVzdWx0LnRvdGFsXG59XG5cbmNvbnN0IHNob3cgPSBhc3luYyBwYXlsb2FkID0+IHtcblx0Y29uc3Qge19pZCx1aWR9ID0gcGF5bG9hZFxuXHRjb25zdCBhZmsgPSAkUS51c2VGaygnYXV0aG9yJylcblx0Y29uc3QgcG9zdEZpZWxkID0gJFEoW1xuXHRcdCdjcmVhdGVfZGF0ZScsXG5cdFx0YWZrKCd1c2VybmFtZScpLFxuXHRcdGFmaygnX2lkJywnYXV0aG9ySUQnKSxcblx0XHRhZmsoJ2F2YXRhcicsJ2F2YXRhclVybCcpLFxuXHRcdCd0aXRsZScsXG5cdFx0J2ltZ3MnLFxuXHRcdGB0b3BpY19pZHMudGl0bGV8dG9waWNzYCxcblx0XHRgc2l6ZShwcmFpc2VfdXNlcl9pZHMuX2lkKXxwcmFpc2VOdW1gLFxuXHRcdGBpbignJHt1aWR9JywgcHJhaXNlX3VzZXJfaWRzLl9pZCl8cHJhaXNlU3RhdHVzYCxcblx0XHRgc2l6ZShsb3ZlX3VzZXJfaWRzLl9pZCl8bG92ZU51bWAsXG5cdFx0YGluKCcke3VpZH0nLCBsb3ZlX3VzZXJfaWRzLl9pZCl8bG92ZVN0YXR1c2Bcblx0XSlcblx0Y29uc3QgZGIgPSB1bmlDbG91ZC5kYXRhYmFzZSgpXG5cdGNvbnN0IHBvc3RzID0gZGIuY29sbGVjdGlvbigncG9zdHMsdW5pLWlkLXVzZXJzLHRvcGljcycpXG5cdGNvbnN0IHtyZXN1bHR9ID0gYXdhaXQgcG9zdHMuZG9jKF9pZCkuZmllbGQocG9zdEZpZWxkKS5nZXQoe1xuXHRcdGdldE9uZTogdHJ1ZVxuXHR9KVxuXHRyZXR1cm4gcmVzdWx0LmRhdGFcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuXHRjcmVhdGUsXG5cdHByYWlzZSxcblx0bG92ZSxcblx0Y291bnRQb3N0LFxuXHRzaG93XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///17\n");

/***/ }),
/* 18 */
/*!*********************************************************************!*\
  !*** /Users/ricky/Documents/Study/uniapp/bbs_study/common/js/ql.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");}function _iterableToArrayLimit(arr, i) {if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return;var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i[\"return\"] != null) _i[\"return\"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}function _createForOfIteratorHelper(o, allowArrayLike) {var it;if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) {if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") {if (it) o = it;var i = 0;var F = function F() {};return { s: F, n: function n() {if (i >= o.length) return { done: true };return { done: false, value: o[i++] };}, e: function e(_e2) {throw _e2;}, f: F };}throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");}var normalCompletion = true,didErr = false,err;return { s: function s() {it = o[Symbol.iterator]();}, n: function n() {var step = it.next();normalCompletion = step.done;return step;}, e: function e(_e3) {didErr = true;err = _e3;}, f: function f() {try {if (!normalCompletion && it.return != null) it.return();} finally {if (didErr) throw err;}} };}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === \"Object\" && o.constructor) n = o.constructor.name;if (n === \"Map\" || n === \"Set\") return Array.from(o);if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}var ql = function ql(schema) {\n  var field = \"\";var _iterator = _createForOfIteratorHelper(\n  schema),_step;try {for (_iterator.s(); !(_step = _iterator.n()).done;) {var v = _step.value;var _v$split =\n      v.split('|'),_v$split2 = _slicedToArray(_v$split, 2),k = _v$split2[0],output = _v$split2[1];\n      field += (output ? \"\".concat(k, \" as \").concat(output) : \"\".concat(k)) + ',';\n    }} catch (err) {_iterator.e(err);} finally {_iterator.f();}\n  field = field.replace(/,$/, '');\n  return field;\n};\n\nql.useFk = function (prefix) {var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;return (\n    function (v) {var alias = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : v;return \"arrayElemAt(\".concat(prefix, \".\").concat(v, \", \").concat(i, \")|\").concat(alias);});};\n\nql.aE = function (k) {var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;return \"arrayElemAt(\".concat(k, \", \").concat(i, \")\");};var _default =\n\nql;exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tbW9uL2pzL3FsLmpzIl0sIm5hbWVzIjpbInFsIiwic2NoZW1hIiwiZmllbGQiLCJ2Iiwic3BsaXQiLCJrIiwib3V0cHV0IiwicmVwbGFjZSIsInVzZUZrIiwicHJlZml4IiwiaSIsImFsaWFzIiwiYUUiXSwibWFwcGluZ3MiOiJnOUVBQUEsSUFBTUEsRUFBRSxHQUFHLFNBQUxBLEVBQUssQ0FBQ0MsTUFBRCxFQUFZO0FBQ3JCLE1BQUlDLEtBQUssS0FBVCxDQURxQjtBQUVQRCxRQUZPLGFBRXJCLG9EQUFzQixLQUFiRSxDQUFhO0FBQ0FBLE9BQUMsQ0FBQ0MsS0FBRixDQUFRLEdBQVIsQ0FEQSx5Q0FDYkMsQ0FEYSxnQkFDVkMsTUFEVTtBQUVwQkosV0FBSyxJQUFJLENBQUNJLE1BQU0sYUFBTUQsQ0FBTixpQkFBY0MsTUFBZCxjQUE0QkQsQ0FBNUIsQ0FBUCxJQUEwQyxHQUFuRDtBQUNELEtBTG9CO0FBTXJCSCxPQUFLLEdBQUdBLEtBQUssQ0FBQ0ssT0FBTixDQUFjLElBQWQsRUFBb0IsRUFBcEIsQ0FBUjtBQUNBLFNBQU9MLEtBQVA7QUFDRCxDQVJEOztBQVVBRixFQUFFLENBQUNRLEtBQUgsR0FBVyxVQUFDQyxNQUFELE9BQVNDLENBQVQsdUVBQWEsQ0FBYjtBQUNULGNBQUNQLENBQUQsT0FBSVEsS0FBSix1RUFBWVIsQ0FBWiw4QkFBaUNNLE1BQWpDLGNBQTJDTixDQUEzQyxlQUFpRE8sQ0FBakQsZUFBdURDLEtBQXZELEdBRFMsR0FBWDs7QUFHQVgsRUFBRSxDQUFDWSxFQUFILEdBQVEsVUFBQ1AsQ0FBRCxPQUFJSyxDQUFKLHVFQUFRLENBQVIsOEJBQTZCTCxDQUE3QixlQUFtQ0ssQ0FBbkMsUUFBUixDOztBQUVlVixFIiwiZmlsZSI6IjE4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcWwgPSAoc2NoZW1hKSA9PiB7XG4gIGxldCBmaWVsZCA9IGBgXG4gIGZvciAobGV0IHYgb2Ygc2NoZW1hKSB7XG4gICAgY29uc3QgW2ssIG91dHB1dF0gPSB2LnNwbGl0KCd8JylcbiAgICBmaWVsZCArPSAob3V0cHV0ID8gYCR7a30gYXMgJHtvdXRwdXR9YCA6IGAke2t9YCkgKyAnLCdcbiAgfVxuICBmaWVsZCA9IGZpZWxkLnJlcGxhY2UoLywkLywgJycpXG4gIHJldHVybiBmaWVsZFxufVxuXG5xbC51c2VGayA9IChwcmVmaXgsIGkgPSAwKSA9PlxuICAodiwgYWxpYXMgPSB2KSA9PiBgYXJyYXlFbGVtQXQoJHtwcmVmaXh9LiR7dn0sICR7aX0pfCR7YWxpYXN9YFxuXG5xbC5hRSA9IChrLCBpID0gMCkgPT4gYGFycmF5RWxlbUF0KCR7a30sICR7aX0pYFxuXG5leHBvcnQgZGVmYXVsdCBxbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///18\n");

/***/ }),
/* 19 */
/*!******************************************************************!*\
  !*** /Users/ricky/Documents/Study/uniapp/bbs_study/api/topic.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(uniCloud) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 9));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);}_next(undefined);});};}var create = /*#__PURE__*/function () {var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(payload) {var cover, title, desc, db, topics, res;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:\n\n            cover =\n\n\n            payload.cover, title = payload.title, desc = payload.desc;\n\n            db = uniCloud.database();\n\n            topics = db.collection('topics');\n\n            res = topics.add({\n              cover: cover,\n              title: title,\n              desc: desc });return _context.abrupt(\"return\",\n\n\n            res);case 5:case \"end\":return _context.stop();}}}, _callee);}));return function create(_x) {return _ref.apply(this, arguments);};}();var _default =\n\n\n{\n  create: create };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/uni-cloud/dist/index.js */ 14)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vYXBpL3RvcGljLmpzIl0sIm5hbWVzIjpbImNyZWF0ZSIsInBheWxvYWQiLCJjb3ZlciIsInRpdGxlIiwiZGVzYyIsImRiIiwidW5pQ2xvdWQiLCJkYXRhYmFzZSIsInRvcGljcyIsImNvbGxlY3Rpb24iLCJyZXMiLCJhZGQiXSwibWFwcGluZ3MiOiJ5OEJBQUEsSUFBTUEsTUFBTSxrR0FBRyxpQkFBTUMsT0FBTjs7QUFFYkMsaUJBRmE7OztBQUtWRCxtQkFMVSxDQUViQyxLQUZhLEVBR2JDLEtBSGEsR0FLVkYsT0FMVSxDQUdiRSxLQUhhLEVBSWJDLElBSmEsR0FLVkgsT0FMVSxDQUliRyxJQUphOztBQU9SQyxjQVBRLEdBT0hDLFFBQVEsQ0FBQ0MsUUFBVCxFQVBHOztBQVNSQyxrQkFUUSxHQVNDSCxFQUFFLENBQUNJLFVBQUgsQ0FBYyxRQUFkLENBVEQ7O0FBV1JDLGVBWFEsR0FXRkYsTUFBTSxDQUFDRyxHQUFQLENBQVc7QUFDdEJULG1CQUFLLEVBQUxBLEtBRHNCO0FBRXRCQyxtQkFBSyxFQUFMQSxLQUZzQjtBQUd0QkMsa0JBQUksRUFBSkEsSUFIc0IsRUFBWCxDQVhFOzs7QUFpQlBNLGVBakJPLDBEQUFILG1CQUFOVixNQUFNLDhDQUFaLEM7OztBQW9CZTtBQUNkQSxRQUFNLEVBQU5BLE1BRGMsRSIsImZpbGUiOiIxOS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNyZWF0ZSA9IGFzeW5jIHBheWxvYWQgPT4ge1xyXG5cdGNvbnN0IHsgXHJcblx0XHRjb3ZlcixcclxuXHRcdHRpdGxlLFxyXG5cdFx0ZGVzY1xyXG5cdH0gPSBwYXlsb2FkXHJcblx0XHJcblx0Y29uc3QgZGIgPSB1bmlDbG91ZC5kYXRhYmFzZSgpXHJcblx0XHJcblx0Y29uc3QgdG9waWNzID0gZGIuY29sbGVjdGlvbigndG9waWNzJylcclxuXHRcclxuXHRjb25zdCByZXMgPSB0b3BpY3MuYWRkKHtcclxuXHRcdGNvdmVyLFxyXG5cdFx0dGl0bGUsXHJcblx0XHRkZXNjXHJcblx0fSlcclxuXHRcclxuXHRyZXR1cm4gcmVzXHJcbn0gXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcblx0Y3JlYXRlXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///19\n");

/***/ }),
/* 20 */
/*!******************************************************************!*\
  !*** /Users/ricky/Documents/Study/uniapp/bbs_study/api/stock.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(uniCloud) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 9));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);}_next(undefined);});};} // 收藏\nvar create = /*#__PURE__*/function () {var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(payload) {var post_id, db, stock, res;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:\n\n            post_id =\n            payload.post_id;\n\n\n            db = uniCloud.database();\n            stock = db.collection('stock');_context.next = 5;return (\n\n              stock.add({\n                post_id: post_id }));case 5:res = _context.sent;return _context.abrupt(\"return\",\n\n\n            res);case 7:case \"end\":return _context.stop();}}}, _callee);}));return function create(_x) {return _ref.apply(this, arguments);};}();\n\n\n// 取消收藏\nvar destory = /*#__PURE__*/function () {var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2(payload) {var id, db, stock, res;return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:\n\n            id =\n            payload.id;\n\n\n            db = uniCloud.database();\n            stock = db.collection('stock');_context2.next = 5;return (\n              stock.doc(id).remove());case 5:res = _context2.sent;return _context2.abrupt(\"return\",\n\n            res);case 7:case \"end\":return _context2.stop();}}}, _callee2);}));return function destory(_x2) {return _ref2.apply(this, arguments);};}();var _default =\n\n\n{\n  create: create,\n  destory: destory };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/uni-cloud/dist/index.js */ 14)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vYXBpL3N0b2NrLmpzIl0sIm5hbWVzIjpbImNyZWF0ZSIsInBheWxvYWQiLCJwb3N0X2lkIiwiZGIiLCJ1bmlDbG91ZCIsImRhdGFiYXNlIiwic3RvY2siLCJjb2xsZWN0aW9uIiwiYWRkIiwicmVzIiwiZGVzdG9yeSIsImlkIiwiZG9jIiwicmVtb3ZlIl0sIm1hcHBpbmdzIjoiMDhCQUFBO0FBQ0EsSUFBTUEsTUFBTSxrR0FBRyxpQkFBTUMsT0FBTjs7QUFFYkMsbUJBRmE7QUFHVkQsbUJBSFUsQ0FFYkMsT0FGYTs7O0FBTVJDLGNBTlEsR0FNSEMsUUFBUSxDQUFDQyxRQUFULEVBTkc7QUFPUkMsaUJBUFEsR0FPQUgsRUFBRSxDQUFDSSxVQUFILENBQWMsT0FBZCxDQVBBOztBQVNJRCxtQkFBSyxDQUFDRSxHQUFOLENBQVU7QUFDM0JOLHVCQUFPLEVBQVBBLE9BRDJCLEVBQVYsQ0FUSixTQVNSTyxHQVRROzs7QUFhUEEsZUFiTywwREFBSCxtQkFBTlQsTUFBTSw4Q0FBWjs7O0FBZ0JBO0FBQ0EsSUFBTVUsT0FBTyxtR0FBRyxrQkFBTVQsT0FBTjs7QUFFZFUsY0FGYztBQUdYVixtQkFIVyxDQUVkVSxFQUZjOzs7QUFNVFIsY0FOUyxHQU1KQyxRQUFRLENBQUNDLFFBQVQsRUFOSTtBQU9UQyxpQkFQUyxHQU9ESCxFQUFFLENBQUNJLFVBQUgsQ0FBYyxPQUFkLENBUEM7QUFRR0QsbUJBQUssQ0FBQ00sR0FBTixDQUFVRCxFQUFWLEVBQWNFLE1BQWQsRUFSSCxTQVFUSixHQVJTOztBQVVSQSxlQVZRLDREQUFILG1CQUFQQyxPQUFPLGdEQUFiLEM7OztBQWFlO0FBQ2RWLFFBQU0sRUFBTkEsTUFEYztBQUVkVSxTQUFPLEVBQVBBLE9BRmMsRSIsImZpbGUiOiIyMC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIOaUtuiXj1xuY29uc3QgY3JlYXRlID0gYXN5bmMgcGF5bG9hZCA9PiB7XG5cdGNvbnN0IHtcblx0XHRwb3N0X2lkXG5cdH0gPSBwYXlsb2FkXG5cblxuXHRjb25zdCBkYiA9IHVuaUNsb3VkLmRhdGFiYXNlKCk7XG5cdGNvbnN0IHN0b2NrID0gZGIuY29sbGVjdGlvbignc3RvY2snKTtcblxuXHRjb25zdCByZXMgPSBhd2FpdCBzdG9jay5hZGQoe1xuXHRcdHBvc3RfaWRcblx0fSlcblxuXHRyZXR1cm4gcmVzXG59XG5cbi8vIOWPlua2iOaUtuiXj1xuY29uc3QgZGVzdG9yeSA9IGFzeW5jIHBheWxvYWQgPT4ge1xuXHRjb25zdCB7XG5cdFx0aWRcblx0fSA9IHBheWxvYWRcblxuXG5cdGNvbnN0IGRiID0gdW5pQ2xvdWQuZGF0YWJhc2UoKTtcblx0Y29uc3Qgc3RvY2sgPSBkYi5jb2xsZWN0aW9uKCdzdG9jaycpO1xuXHRjb25zdCByZXMgPSBhd2FpdCBzdG9jay5kb2MoaWQpLnJlbW92ZSgpXG5cblx0cmV0dXJuIHJlc1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG5cdGNyZWF0ZSxcblx0ZGVzdG9yeVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///20\n");

/***/ }),
/* 21 */
/*!*******************************************************************!*\
  !*** /Users/ricky/Documents/Study/uniapp/bbs_study/api/follow.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(uniCloud) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 9));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);}_next(undefined);});};} // 关注\nvar create = /*#__PURE__*/function () {var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(payload) {var follow_user_id, db, follows, res;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:\n\n            follow_user_id =\n            payload.follow_user_id;\n\n            db = uniCloud.database();\n            follows = db.collection('follows');_context.next = 5;return (\n\n              follows.add({\n                follow_user_id: follow_user_id }));case 5:res = _context.sent;\n\n            uni.$emit('refreshFollowUsers');return _context.abrupt(\"return\",\n            res);case 8:case \"end\":return _context.stop();}}}, _callee);}));return function create(_x) {return _ref.apply(this, arguments);};}();\n\n\n// 取消关注\nvar destory = /*#__PURE__*/function () {var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2(payload) {var id, db, follows, res;return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:\n\n            id =\n            payload.id;\n            db = uniCloud.database();\n            follows = db.collection('follows');_context2.next = 5;return (\n              follows.doc(id).remove());case 5:res = _context2.sent;\n            uni.$emit('refreshFollowUsers');return _context2.abrupt(\"return\",\n            res);case 8:case \"end\":return _context2.stop();}}}, _callee2);}));return function destory(_x2) {return _ref2.apply(this, arguments);};}();\n\n\nvar countFollow = /*#__PURE__*/function () {var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3(payload) {var author, db, posts, _yield$posts$where$co, result;return _regenerator.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:\n            author = payload.author;\n            db = uniCloud.database();\n            posts = db.collection('follows');_context3.next = 5;return (\n              posts.where(\"user_id == '\".concat(author, \"'\")).count());case 5:_yield$posts$where$co = _context3.sent;result = _yield$posts$where$co.result;return _context3.abrupt(\"return\",\n            result.total);case 8:case \"end\":return _context3.stop();}}}, _callee3);}));return function countFollow(_x3) {return _ref3.apply(this, arguments);};}();\n\n\nvar countFans = /*#__PURE__*/function () {var _ref4 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee4(payload) {var author, db, posts, _yield$posts$where$co2, result;return _regenerator.default.wrap(function _callee4$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:\n            author = payload.author;\n            db = uniCloud.database();\n            posts = db.collection('follows');_context4.next = 5;return (\n              posts.where(\"follow_user_id == '\".concat(author, \"'\")).count());case 5:_yield$posts$where$co2 = _context4.sent;result = _yield$posts$where$co2.result;return _context4.abrupt(\"return\",\n            result.total);case 8:case \"end\":return _context4.stop();}}}, _callee4);}));return function countFans(_x4) {return _ref4.apply(this, arguments);};}();var _default =\n\n\n{\n  create: create,\n  destory: destory,\n  countFollow: countFollow,\n  countFans: countFans };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/uni-cloud/dist/index.js */ 14)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vYXBpL2ZvbGxvdy5qcyJdLCJuYW1lcyI6WyJjcmVhdGUiLCJwYXlsb2FkIiwiZm9sbG93X3VzZXJfaWQiLCJkYiIsInVuaUNsb3VkIiwiZGF0YWJhc2UiLCJmb2xsb3dzIiwiY29sbGVjdGlvbiIsImFkZCIsInJlcyIsInVuaSIsIiRlbWl0IiwiZGVzdG9yeSIsImlkIiwiZG9jIiwicmVtb3ZlIiwiY291bnRGb2xsb3ciLCJhdXRob3IiLCJwb3N0cyIsIndoZXJlIiwiY291bnQiLCJyZXN1bHQiLCJ0b3RhbCIsImNvdW50RmFucyJdLCJtYXBwaW5ncyI6IjA4QkFBQTtBQUNBLElBQU1BLE1BQU0sa0dBQUcsaUJBQU1DLE9BQU47O0FBRWJDLDBCQUZhO0FBR1ZELG1CQUhVLENBRWJDLGNBRmE7O0FBS1JDLGNBTFEsR0FLSEMsUUFBUSxDQUFDQyxRQUFULEVBTEc7QUFNUkMsbUJBTlEsR0FNRUgsRUFBRSxDQUFDSSxVQUFILENBQWMsU0FBZCxDQU5GOztBQVFJRCxxQkFBTyxDQUFDRSxHQUFSLENBQVk7QUFDN0JOLDhCQUFjLEVBQWRBLGNBRDZCLEVBQVosQ0FSSixTQVFSTyxHQVJROztBQVdkQyxlQUFHLENBQUNDLEtBQUosQ0FBVSxvQkFBVixFQVhjO0FBWVBGLGVBWk8sMERBQUgsbUJBQU5ULE1BQU0sOENBQVo7OztBQWVBO0FBQ0EsSUFBTVksT0FBTyxtR0FBRyxrQkFBTVgsT0FBTjs7QUFFZFksY0FGYztBQUdYWixtQkFIVyxDQUVkWSxFQUZjO0FBSVRWLGNBSlMsR0FJSkMsUUFBUSxDQUFDQyxRQUFULEVBSkk7QUFLVEMsbUJBTFMsR0FLQ0gsRUFBRSxDQUFDSSxVQUFILENBQWMsU0FBZCxDQUxEO0FBTUdELHFCQUFPLENBQUNRLEdBQVIsQ0FBWUQsRUFBWixFQUFnQkUsTUFBaEIsRUFOSCxTQU1UTixHQU5TO0FBT2ZDLGVBQUcsQ0FBQ0MsS0FBSixDQUFVLG9CQUFWLEVBUGU7QUFRUkYsZUFSUSw0REFBSCxtQkFBUEcsT0FBTyxnREFBYjs7O0FBV0EsSUFBTUksV0FBVyxtR0FBRyxrQkFBTWYsT0FBTjtBQUNaZ0Isa0JBRFksR0FDRmhCLE9BREUsQ0FDWmdCLE1BRFk7QUFFYmQsY0FGYSxHQUVSQyxRQUFRLENBQUNDLFFBQVQsRUFGUTtBQUdiYSxpQkFIYSxHQUdMZixFQUFFLENBQUNJLFVBQUgsQ0FBYyxTQUFkLENBSEs7QUFJSVcsbUJBQUssQ0FBQ0MsS0FBTix1QkFBMkJGLE1BQTNCLFFBQXNDRyxLQUF0QyxFQUpKLGdEQUlaQyxNQUpZLHlCQUlaQSxNQUpZO0FBS1pBLGtCQUFNLENBQUNDLEtBTEssNERBQUgsbUJBQVhOLFdBQVcsZ0RBQWpCOzs7QUFRQSxJQUFNTyxTQUFTLG1HQUFHLGtCQUFNdEIsT0FBTjtBQUNWZ0Isa0JBRFUsR0FDQWhCLE9BREEsQ0FDVmdCLE1BRFU7QUFFWGQsY0FGVyxHQUVOQyxRQUFRLENBQUNDLFFBQVQsRUFGTTtBQUdYYSxpQkFIVyxHQUdIZixFQUFFLENBQUNJLFVBQUgsQ0FBYyxTQUFkLENBSEc7QUFJTVcsbUJBQUssQ0FBQ0MsS0FBTiw4QkFBa0NGLE1BQWxDLFFBQTZDRyxLQUE3QyxFQUpOLGlEQUlWQyxNQUpVLDBCQUlWQSxNQUpVO0FBS1ZBLGtCQUFNLENBQUNDLEtBTEcsNERBQUgsbUJBQVRDLFNBQVMsZ0RBQWYsQzs7O0FBUWU7QUFDZHZCLFFBQU0sRUFBTkEsTUFEYztBQUVkWSxTQUFPLEVBQVBBLE9BRmM7QUFHZEksYUFBVyxFQUFYQSxXQUhjO0FBSWRPLFdBQVMsRUFBVEEsU0FKYyxFIiwiZmlsZSI6IjIxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8g5YWz5rOoXG5jb25zdCBjcmVhdGUgPSBhc3luYyBwYXlsb2FkID0+IHtcblx0Y29uc3Qge1xuXHRcdGZvbGxvd191c2VyX2lkXG5cdH0gPSBwYXlsb2FkXG5cblx0Y29uc3QgZGIgPSB1bmlDbG91ZC5kYXRhYmFzZSgpO1xuXHRjb25zdCBmb2xsb3dzID0gZGIuY29sbGVjdGlvbignZm9sbG93cycpO1xuXG5cdGNvbnN0IHJlcyA9IGF3YWl0IGZvbGxvd3MuYWRkKHtcblx0XHRmb2xsb3dfdXNlcl9pZFxuXHR9KVxuXHR1bmkuJGVtaXQoJ3JlZnJlc2hGb2xsb3dVc2VycycpXG5cdHJldHVybiByZXNcbn1cblxuLy8g5Y+W5raI5YWz5rOoXG5jb25zdCBkZXN0b3J5ID0gYXN5bmMgcGF5bG9hZCA9PiB7XG5cdGNvbnN0IHtcblx0XHRpZFxuXHR9ID0gcGF5bG9hZFxuXHRjb25zdCBkYiA9IHVuaUNsb3VkLmRhdGFiYXNlKCk7XG5cdGNvbnN0IGZvbGxvd3MgPSBkYi5jb2xsZWN0aW9uKCdmb2xsb3dzJyk7XG5cdGNvbnN0IHJlcyA9IGF3YWl0IGZvbGxvd3MuZG9jKGlkKS5yZW1vdmUoKVxuXHR1bmkuJGVtaXQoJ3JlZnJlc2hGb2xsb3dVc2VycycpXG5cdHJldHVybiByZXNcbn1cblxuY29uc3QgY291bnRGb2xsb3cgPSBhc3luYyBwYXlsb2FkID0+IHtcblx0Y29uc3Qge2F1dGhvcn0gPSBwYXlsb2FkXG5cdGNvbnN0IGRiID0gdW5pQ2xvdWQuZGF0YWJhc2UoKVxuXHRjb25zdCBwb3N0cyA9IGRiLmNvbGxlY3Rpb24oJ2ZvbGxvd3MnKVxuXHRjb25zdCB7cmVzdWx0fSA9IGF3YWl0IHBvc3RzLndoZXJlKGB1c2VyX2lkID09ICcke2F1dGhvcn0nYCkuY291bnQoKVxuXHRyZXR1cm4gcmVzdWx0LnRvdGFsXG59XG5cbmNvbnN0IGNvdW50RmFucyA9IGFzeW5jIHBheWxvYWQgPT4ge1xuXHRjb25zdCB7YXV0aG9yfSA9IHBheWxvYWRcblx0Y29uc3QgZGIgPSB1bmlDbG91ZC5kYXRhYmFzZSgpXG5cdGNvbnN0IHBvc3RzID0gZGIuY29sbGVjdGlvbignZm9sbG93cycpXG5cdGNvbnN0IHtyZXN1bHR9ID0gYXdhaXQgcG9zdHMud2hlcmUoYGZvbGxvd191c2VyX2lkID09ICcke2F1dGhvcn0nYCkuY291bnQoKVxuXHRyZXR1cm4gcmVzdWx0LnRvdGFsXG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0Y3JlYXRlLFxuXHRkZXN0b3J5LFxuXHRjb3VudEZvbGxvdyxcblx0Y291bnRGYW5zXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///21\n");

/***/ }),
/* 22 */
/*!********************************************************************!*\
  !*** /Users/ricky/Documents/Study/uniapp/bbs_study/api/comment.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(uniCloud) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 9));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);}_next(undefined);});};} // 发布对文章的评论\nvar createPost = /*#__PURE__*/function () {var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(payload) {var post_id, comment_content, comment_type, db, comments, res;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:\n\n            post_id =\n\n            payload.post_id, comment_content = payload.comment_content;\n            comment_type = 0;\n            db = uniCloud.database();\n\n            comments = db.collection('comments');\n\n            res = comments.add({\n              post_id: post_id,\n              comment_content: comment_content,\n              comment_type: comment_type });return _context.abrupt(\"return\",\n\n\n            res);case 6:case \"end\":return _context.stop();}}}, _callee);}));return function createPost(_x) {return _ref.apply(this, arguments);};}();\n\n\n// 发布对评论的评论\nvar createComment = /*#__PURE__*/function () {var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2(payload) {var post_id, comment_content, reply_user_id, reply_comment_id, comment_type, db, comments, res;return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:\n\n            post_id =\n\n\n\n            payload.post_id, comment_content = payload.comment_content, reply_user_id = payload.reply_user_id, reply_comment_id = payload.reply_comment_id;\n            comment_type = 1;\n            db = uniCloud.database();\n\n            comments = db.collection('comments');\n\n            res = comments.add({\n              post_id: post_id,\n              comment_content: comment_content,\n              comment_type: comment_type,\n              reply_user_id: reply_user_id,\n              reply_comment_id: reply_comment_id });return _context2.abrupt(\"return\",\n\n\n            res);case 6:case \"end\":return _context2.stop();}}}, _callee2);}));return function createComment(_x2) {return _ref2.apply(this, arguments);};}();\n\n\nvar praise = /*#__PURE__*/function () {var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3(payload) {var uid, commentID, praiseStatus, res;return _regenerator.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:\n            uid = payload.uid, commentID = payload.commentID, praiseStatus = payload.praiseStatus;_context3.next = 3;return (\n\n              uniCloud.callFunction({\n                name: 'index',\n                data: {\n                  action: 'comment/praise',\n                  data: {\n                    uid: uid,\n                    commentID: commentID,\n                    praiseStatus: praiseStatus } } }));case 3:res = _context3.sent;return _context3.abrupt(\"return\",\n\n\n\n\n            res);case 5:case \"end\":return _context3.stop();}}}, _callee3);}));return function praise(_x3) {return _ref3.apply(this, arguments);};}();\n\n\n// 统计评论评论的数量\nvar countCommentComment = /*#__PURE__*/function () {var _ref4 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee4(payload) {var _id, db, comments, _yield$comments$where, result;return _regenerator.default.wrap(function _callee4$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:\n            _id = payload._id;\n            db = uniCloud.database();\n            comments = db.collection('comments');_context4.next = 5;return (\n              comments.where(\"'\".concat(_id, \"'==reply_comment_id\")).count());case 5:_yield$comments$where = _context4.sent;result = _yield$comments$where.result;return _context4.abrupt(\"return\",\n            result.total);case 8:case \"end\":return _context4.stop();}}}, _callee4);}));return function countCommentComment(_x4) {return _ref4.apply(this, arguments);};}();\n\n\n// 统计文章所有评论的数量\nvar countTotalComment = /*#__PURE__*/function () {var _ref5 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee5(payload) {var _id, db, comments, _yield$comments$where2, result;return _regenerator.default.wrap(function _callee5$(_context5) {while (1) {switch (_context5.prev = _context5.next) {case 0:\n            _id = payload._id;\n            db = uniCloud.database();\n            comments = db.collection('comments');_context5.next = 5;return (\n              comments.where(\"'\".concat(_id, \"'==post_id\")).count());case 5:_yield$comments$where2 = _context5.sent;result = _yield$comments$where2.result;return _context5.abrupt(\"return\",\n            result.total);case 8:case \"end\":return _context5.stop();}}}, _callee5);}));return function countTotalComment(_x5) {return _ref5.apply(this, arguments);};}();var _default =\n\n\n{\n  praise: praise,\n  createPost: createPost,\n  createComment: createComment,\n  countCommentComment: countCommentComment,\n  countTotalComment: countTotalComment };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/uni-cloud/dist/index.js */ 14)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vYXBpL2NvbW1lbnQuanMiXSwibmFtZXMiOlsiY3JlYXRlUG9zdCIsInBheWxvYWQiLCJwb3N0X2lkIiwiY29tbWVudF9jb250ZW50IiwiY29tbWVudF90eXBlIiwiZGIiLCJ1bmlDbG91ZCIsImRhdGFiYXNlIiwiY29tbWVudHMiLCJjb2xsZWN0aW9uIiwicmVzIiwiYWRkIiwiY3JlYXRlQ29tbWVudCIsInJlcGx5X3VzZXJfaWQiLCJyZXBseV9jb21tZW50X2lkIiwicHJhaXNlIiwidWlkIiwiY29tbWVudElEIiwicHJhaXNlU3RhdHVzIiwiY2FsbEZ1bmN0aW9uIiwibmFtZSIsImRhdGEiLCJhY3Rpb24iLCJjb3VudENvbW1lbnRDb21tZW50IiwiX2lkIiwid2hlcmUiLCJjb3VudCIsInJlc3VsdCIsInRvdGFsIiwiY291bnRUb3RhbENvbW1lbnQiXSwibWFwcGluZ3MiOiIwOEJBQUE7QUFDQSxJQUFNQSxVQUFVLGtHQUFHLGlCQUFNQyxPQUFOOztBQUVqQkMsbUJBRmlCOztBQUlkRCxtQkFKYyxDQUVqQkMsT0FGaUIsRUFHakJDLGVBSGlCLEdBSWRGLE9BSmMsQ0FHakJFLGVBSGlCO0FBS1pDLHdCQUxZLEdBS0csQ0FMSDtBQU1aQyxjQU5ZLEdBTVBDLFFBQVEsQ0FBQ0MsUUFBVCxFQU5POztBQVFaQyxvQkFSWSxHQVFESCxFQUFFLENBQUNJLFVBQUgsQ0FBYyxVQUFkLENBUkM7O0FBVVpDLGVBVlksR0FVTkYsUUFBUSxDQUFDRyxHQUFULENBQWE7QUFDeEJULHFCQUFPLEVBQVBBLE9BRHdCO0FBRXhCQyw2QkFBZSxFQUFmQSxlQUZ3QjtBQUd4QkMsMEJBQVksRUFBWkEsWUFId0IsRUFBYixDQVZNOzs7QUFnQlhNLGVBaEJXLDBEQUFILG1CQUFWVixVQUFVLDhDQUFoQjs7O0FBbUJBO0FBQ0EsSUFBTVksYUFBYSxtR0FBRyxrQkFBTVgsT0FBTjs7QUFFcEJDLG1CQUZvQjs7OztBQU1qQkQsbUJBTmlCLENBRXBCQyxPQUZvQixFQUdwQkMsZUFIb0IsR0FNakJGLE9BTmlCLENBR3BCRSxlQUhvQixFQUlwQlUsYUFKb0IsR0FNakJaLE9BTmlCLENBSXBCWSxhQUpvQixFQUtwQkMsZ0JBTG9CLEdBTWpCYixPQU5pQixDQUtwQmEsZ0JBTG9CO0FBT2ZWLHdCQVBlLEdBT0EsQ0FQQTtBQVFmQyxjQVJlLEdBUVZDLFFBQVEsQ0FBQ0MsUUFBVCxFQVJVOztBQVVmQyxvQkFWZSxHQVVKSCxFQUFFLENBQUNJLFVBQUgsQ0FBYyxVQUFkLENBVkk7O0FBWWZDLGVBWmUsR0FZVEYsUUFBUSxDQUFDRyxHQUFULENBQWE7QUFDeEJULHFCQUFPLEVBQVBBLE9BRHdCO0FBRXhCQyw2QkFBZSxFQUFmQSxlQUZ3QjtBQUd4QkMsMEJBQVksRUFBWkEsWUFId0I7QUFJeEJTLDJCQUFhLEVBQWJBLGFBSndCO0FBS3hCQyw4QkFBZ0IsRUFBaEJBLGdCQUx3QixFQUFiLENBWlM7OztBQW9CZEosZUFwQmMsNERBQUgsbUJBQWJFLGFBQWEsZ0RBQW5COzs7QUF1QkEsSUFBTUcsTUFBTSxtR0FBRyxrQkFBTWQsT0FBTjtBQUNOZSxlQURNLEdBQzJCZixPQUQzQixDQUNOZSxHQURNLEVBQ0RDLFNBREMsR0FDMkJoQixPQUQzQixDQUNEZ0IsU0FEQyxFQUNVQyxZQURWLEdBQzJCakIsT0FEM0IsQ0FDVWlCLFlBRFY7O0FBR0laLHNCQUFRLENBQUNhLFlBQVQsQ0FBc0I7QUFDdkNDLG9CQUFJLEVBQUUsT0FEaUM7QUFFdkNDLG9CQUFJLEVBQUU7QUFDTEMsd0JBQU0sRUFBRSxnQkFESDtBQUVMRCxzQkFBSSxFQUFFO0FBQ0xMLHVCQUFHLEVBQUhBLEdBREs7QUFFTEMsNkJBQVMsRUFBVEEsU0FGSztBQUdMQyxnQ0FBWSxFQUFaQSxZQUhLLEVBRkQsRUFGaUMsRUFBdEIsQ0FISixTQUdSUixHQUhROzs7OztBQWVQQSxlQWZPLDREQUFILG1CQUFOSyxNQUFNLGdEQUFaOzs7QUFrQkE7QUFDQSxJQUFNUSxtQkFBbUIsbUdBQUcsa0JBQU10QixPQUFOO0FBQ25CdUIsZUFEbUIsR0FDWHZCLE9BRFcsQ0FDbkJ1QixHQURtQjtBQUVyQm5CLGNBRnFCLEdBRWhCQyxRQUFRLENBQUNDLFFBQVQsRUFGZ0I7QUFHckJDLG9CQUhxQixHQUdWSCxFQUFFLENBQUNJLFVBQUgsQ0FBYyxVQUFkLENBSFU7QUFJSkQsc0JBQVEsQ0FBQ2lCLEtBQVQsWUFBbUJELEdBQW5CLDBCQUE2Q0UsS0FBN0MsRUFKSSxnREFJcEJDLE1BSm9CLHlCQUlwQkEsTUFKb0I7QUFLcEJBLGtCQUFNLENBQUNDLEtBTGEsNERBQUgsbUJBQW5CTCxtQkFBbUIsZ0RBQXpCOzs7QUFRQTtBQUNBLElBQU1NLGlCQUFpQixtR0FBRyxrQkFBTTVCLE9BQU47QUFDakJ1QixlQURpQixHQUNUdkIsT0FEUyxDQUNqQnVCLEdBRGlCO0FBRW5CbkIsY0FGbUIsR0FFZEMsUUFBUSxDQUFDQyxRQUFULEVBRmM7QUFHbkJDLG9CQUhtQixHQUdSSCxFQUFFLENBQUNJLFVBQUgsQ0FBYyxVQUFkLENBSFE7QUFJRkQsc0JBQVEsQ0FBQ2lCLEtBQVQsWUFBbUJELEdBQW5CLGlCQUFvQ0UsS0FBcEMsRUFKRSxpREFJbEJDLE1BSmtCLDBCQUlsQkEsTUFKa0I7QUFLbEJBLGtCQUFNLENBQUNDLEtBTFcsNERBQUgsbUJBQWpCQyxpQkFBaUIsZ0RBQXZCLEM7OztBQVFlO0FBQ2RkLFFBQU0sRUFBTkEsTUFEYztBQUVkZixZQUFVLEVBQVZBLFVBRmM7QUFHZFksZUFBYSxFQUFiQSxhQUhjO0FBSWRXLHFCQUFtQixFQUFuQkEsbUJBSmM7QUFLZE0sbUJBQWlCLEVBQWpCQSxpQkFMYyxFIiwiZmlsZSI6IjIyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8g5Y+R5biD5a+55paH56ug55qE6K+E6K66XG5jb25zdCBjcmVhdGVQb3N0ID0gYXN5bmMgcGF5bG9hZCA9PiB7XG5cdGNvbnN0IHsgXG5cdFx0cG9zdF9pZCxcblx0XHRjb21tZW50X2NvbnRlbnRcblx0fSA9IHBheWxvYWRcblx0Y29uc3QgY29tbWVudF90eXBlID0gMFxuXHRjb25zdCBkYiA9IHVuaUNsb3VkLmRhdGFiYXNlKClcblx0XG5cdGNvbnN0IGNvbW1lbnRzID0gZGIuY29sbGVjdGlvbignY29tbWVudHMnKVxuXHRcblx0Y29uc3QgcmVzID0gY29tbWVudHMuYWRkKHtcblx0XHRwb3N0X2lkLFxuXHRcdGNvbW1lbnRfY29udGVudCxcblx0XHRjb21tZW50X3R5cGVcblx0fSlcblx0XG5cdHJldHVybiByZXNcbn0gXG5cbi8vIOWPkeW4g+WvueivhOiuuueahOivhOiuulxuY29uc3QgY3JlYXRlQ29tbWVudCA9IGFzeW5jIHBheWxvYWQgPT4ge1xuXHRjb25zdCB7IFxuXHRcdHBvc3RfaWQsXG5cdFx0Y29tbWVudF9jb250ZW50LFxuXHRcdHJlcGx5X3VzZXJfaWQsXG5cdFx0cmVwbHlfY29tbWVudF9pZCxcblx0fSA9IHBheWxvYWRcblx0Y29uc3QgY29tbWVudF90eXBlID0gMVxuXHRjb25zdCBkYiA9IHVuaUNsb3VkLmRhdGFiYXNlKClcblx0XG5cdGNvbnN0IGNvbW1lbnRzID0gZGIuY29sbGVjdGlvbignY29tbWVudHMnKVxuXHRcblx0Y29uc3QgcmVzID0gY29tbWVudHMuYWRkKHtcblx0XHRwb3N0X2lkLFxuXHRcdGNvbW1lbnRfY29udGVudCxcblx0XHRjb21tZW50X3R5cGUsXG5cdFx0cmVwbHlfdXNlcl9pZCxcblx0XHRyZXBseV9jb21tZW50X2lkXG5cdH0pXG5cdFxuXHRyZXR1cm4gcmVzXG59IFxuXG5jb25zdCBwcmFpc2UgPSBhc3luYyBwYXlsb2FkID0+IHtcblx0Y29uc3QgeyB1aWQsIGNvbW1lbnRJRCwgcHJhaXNlU3RhdHVzIH0gPSBwYXlsb2FkXG5cblx0Y29uc3QgcmVzID0gYXdhaXQgdW5pQ2xvdWQuY2FsbEZ1bmN0aW9uKHtcblx0XHRuYW1lOiAnaW5kZXgnLFxuXHRcdGRhdGE6IHtcblx0XHRcdGFjdGlvbjogJ2NvbW1lbnQvcHJhaXNlJyxcblx0XHRcdGRhdGE6IHtcblx0XHRcdFx0dWlkLFxuXHRcdFx0XHRjb21tZW50SUQsXG5cdFx0XHRcdHByYWlzZVN0YXR1c1xuXHRcdFx0fVxuXHRcdH1cblx0fSlcblxuXHRyZXR1cm4gcmVzXG59XG5cbi8vIOe7n+iuoeivhOiuuuivhOiuuueahOaVsOmHj1xuY29uc3QgY291bnRDb21tZW50Q29tbWVudCA9IGFzeW5jIHBheWxvYWQgPT4ge1xuXHRjb25zdCB7IF9pZCB9ID0gcGF5bG9hZFxuXHRjb25zdCBkYiA9IHVuaUNsb3VkLmRhdGFiYXNlKClcblx0Y29uc3QgY29tbWVudHMgPSBkYi5jb2xsZWN0aW9uKCdjb21tZW50cycpXG5cdGNvbnN0IHtyZXN1bHR9ID0gYXdhaXQgY29tbWVudHMud2hlcmUoYCcke19pZH0nPT1yZXBseV9jb21tZW50X2lkYCkuY291bnQoKVxuXHRyZXR1cm4gcmVzdWx0LnRvdGFsXG59XG5cbi8vIOe7n+iuoeaWh+eroOaJgOacieivhOiuuueahOaVsOmHj1xuY29uc3QgY291bnRUb3RhbENvbW1lbnQgPSBhc3luYyBwYXlsb2FkID0+IHtcblx0Y29uc3QgeyBfaWQgfSA9IHBheWxvYWRcblx0Y29uc3QgZGIgPSB1bmlDbG91ZC5kYXRhYmFzZSgpXG5cdGNvbnN0IGNvbW1lbnRzID0gZGIuY29sbGVjdGlvbignY29tbWVudHMnKVxuXHRjb25zdCB7cmVzdWx0fSA9IGF3YWl0IGNvbW1lbnRzLndoZXJlKGAnJHtfaWR9Jz09cG9zdF9pZGApLmNvdW50KClcblx0cmV0dXJuIHJlc3VsdC50b3RhbFxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG5cdHByYWlzZSxcblx0Y3JlYXRlUG9zdCxcblx0Y3JlYXRlQ29tbWVudCxcblx0Y291bnRDb21tZW50Q29tbWVudCxcblx0Y291bnRUb3RhbENvbW1lbnRcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///22\n");

/***/ }),
/* 23 */
/*!********************************************************************!*\
  !*** /Users/ricky/Documents/Study/uniapp/bbs_study/api/history.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(uniCloud) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 9));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);}_next(undefined);});};} // update\nvar update = /*#__PURE__*/function () {var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(payload) {var uid, pid, db, history, sql, now, _yield$history$where$, result, noRecord, res;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:\n            // 浏览过——>更新时间 没有浏览->创建记录\n            uid = payload.uid, pid = payload.pid;\n            db = uniCloud.database();\n            history = db.collection('history');\n            sql = \"user_id=='\".concat(uid, \"' && post_id=='\").concat(pid, \"'\");\n            now = db.getCloudEnv('$cloudEnv_now');_context.next = 7;return (\n              history.where(sql).update({\n                create_date: now }));case 7:_yield$history$where$ = _context.sent;result = _yield$history$where$.result;\n\n            noRecord = result.updated === 0;\n\n            res = result;if (!\n\n            noRecord) {_context.next = 15;break;}_context.next = 14;return (\n              history.add({\n                user_id: uid,\n                post_id: pid }));case 14:res = _context.sent;case 15:return _context.abrupt(\"return\",\n\n\n            res);case 16:case \"end\":return _context.stop();}}}, _callee);}));return function update(_x) {return _ref.apply(this, arguments);};}();var _default =\n\n\n{\n  update: update };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/uni-cloud/dist/index.js */ 14)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vYXBpL2hpc3RvcnkuanMiXSwibmFtZXMiOlsidXBkYXRlIiwicGF5bG9hZCIsInVpZCIsInBpZCIsImRiIiwidW5pQ2xvdWQiLCJkYXRhYmFzZSIsImhpc3RvcnkiLCJjb2xsZWN0aW9uIiwic3FsIiwibm93IiwiZ2V0Q2xvdWRFbnYiLCJ3aGVyZSIsImNyZWF0ZV9kYXRlIiwicmVzdWx0Iiwibm9SZWNvcmQiLCJ1cGRhdGVkIiwicmVzIiwiYWRkIiwidXNlcl9pZCIsInBvc3RfaWQiXSwibWFwcGluZ3MiOiIwOEJBQUE7QUFDQSxJQUFNQSxNQUFNLGtHQUFHLGlCQUFNQyxPQUFOO0FBQ2Q7QUFDUUMsZUFGTSxHQUVPRCxPQUZQLENBRU5DLEdBRk0sRUFFREMsR0FGQyxHQUVPRixPQUZQLENBRURFLEdBRkM7QUFHUkMsY0FIUSxHQUdIQyxRQUFRLENBQUNDLFFBQVQsRUFIRztBQUlSQyxtQkFKUSxHQUlFSCxFQUFFLENBQUNJLFVBQUgsQ0FBYyxTQUFkLENBSkY7QUFLUkMsZUFMUSx1QkFLV1AsR0FMWCw0QkFLZ0NDLEdBTGhDO0FBTVJPLGVBTlEsR0FNRk4sRUFBRSxDQUFDTyxXQUFILENBQWUsZUFBZixDQU5FO0FBT1dKLHFCQUFPLENBQUNLLEtBQVIsQ0FBY0gsR0FBZCxFQUFtQlQsTUFBbkIsQ0FBMEI7QUFDbERhLDJCQUFXLEVBQUVILEdBRHFDLEVBQTFCLENBUFgsK0NBT05JLE1BUE0seUJBT05BLE1BUE07O0FBVVJDLG9CQVZRLEdBVUdELE1BQU0sQ0FBQ0UsT0FBUCxLQUFtQixDQVZ0Qjs7QUFZVkMsZUFaVSxHQVlKSCxNQVpJOztBQWNWQyxvQkFkVTtBQWVEUixxQkFBTyxDQUFDVyxHQUFSLENBQVk7QUFDdkJDLHVCQUFPLEVBQUVqQixHQURjO0FBRXZCa0IsdUJBQU8sRUFBRWpCLEdBRmMsRUFBWixDQWZDLFVBZWJjLEdBZmE7OztBQW9CUEEsZUFwQk8sMkRBQUgsbUJBQU5qQixNQUFNLDhDQUFaLEM7OztBQXVCZTtBQUNkQSxRQUFNLEVBQU5BLE1BRGMsRSIsImZpbGUiOiIyMy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHVwZGF0ZVxuY29uc3QgdXBkYXRlID0gYXN5bmMgcGF5bG9hZCA9PiB7XG5cdC8vIOa1j+iniOi/h+KAlOKAlD7mm7TmlrDml7bpl7Qg5rKh5pyJ5rWP6KeILT7liJvlu7rorrDlvZVcblx0Y29uc3QgeyB1aWQsIHBpZCB9ID0gcGF5bG9hZFxuXHRjb25zdCBkYiA9IHVuaUNsb3VkLmRhdGFiYXNlKCk7XG5cdGNvbnN0IGhpc3RvcnkgPSBkYi5jb2xsZWN0aW9uKCdoaXN0b3J5Jyk7XG5cdGNvbnN0IHNxbCA9IGB1c2VyX2lkPT0nJHt1aWR9JyAmJiBwb3N0X2lkPT0nJHtwaWR9J2Bcblx0Y29uc3Qgbm93ID0gZGIuZ2V0Q2xvdWRFbnYoJyRjbG91ZEVudl9ub3cnKVxuXHRjb25zdCB7IHJlc3VsdCB9ID0gYXdhaXQgaGlzdG9yeS53aGVyZShzcWwpLnVwZGF0ZSh7XG5cdFx0Y3JlYXRlX2RhdGU6IG5vd1xuXHR9KSBcblx0Y29uc3Qgbm9SZWNvcmQgPSByZXN1bHQudXBkYXRlZCA9PT0gMFxuXHRcblx0bGV0IHJlcyA9IHJlc3VsdFxuXHRcblx0aWYgKG5vUmVjb3JkKXtcblx0XHRyZXMgPSBhd2FpdCBoaXN0b3J5LmFkZCh7XG5cdFx0XHR1c2VyX2lkOiB1aWQsXG5cdFx0XHRwb3N0X2lkOiBwaWRcblx0XHR9KVxuXHR9XG5cdHJldHVybiByZXNcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuXHR1cGRhdGVcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///23\n");

/***/ }),
/* 24 */
/*!**********************************************************************************************************************************************************!*\
  !*** /Users/ricky/Documents/Study/uniapp/bbs_study/pages/transition/transition.nvue?vue&type=style&index=0&id=fb24cdf0&scoped=true&lang=css&mpType=page ***!
  \**********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_transition_nvue_vue_type_style_index_0_id_fb24cdf0_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--9-oneOf-0-2!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-3!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./transition.nvue?vue&type=style&index=0&id=fb24cdf0&scoped=true&lang=css&mpType=page */ 25);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_transition_nvue_vue_type_style_index_0_id_fb24cdf0_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_transition_nvue_vue_type_style_index_0_id_fb24cdf0_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_transition_nvue_vue_type_style_index_0_id_fb24cdf0_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_transition_nvue_vue_type_style_index_0_id_fb24cdf0_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_transition_nvue_vue_type_style_index_0_id_fb24cdf0_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 25 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!./node_modules/postcss-loader/src??ref--9-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/ricky/Documents/Study/uniapp/bbs_study/pages/transition/transition.nvue?vue&type=style&index=0&id=fb24cdf0&scoped=true&lang=css&mpType=page ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".loading-gif": {
    "": {
      "width": [
        "100rpx",
        0,
        0,
        0
      ],
      "height": [
        "100rpx",
        0,
        0,
        0
      ]
    }
  },
  ".loading-text": {
    "": {
      "color": [
        "#ff584f",
        0,
        0,
        1
      ]
    }
  },
  "@VERSION": 2
}

/***/ }),
/* 26 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ })
/******/ ]);
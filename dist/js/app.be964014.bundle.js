webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/twitter-small.png";

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/loc.png";

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/linkedin-small.png";

/***/ }),
/* 6 */,
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_header_Header_vue__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_main_Main_vue__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_footer_Footer_vue__ = __webpack_require__(81);
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["a"] = ({
    name: "App",
    components: {
        Header: __WEBPACK_IMPORTED_MODULE_0__components_header_Header_vue__["a" /* default */], Main: __WEBPACK_IMPORTED_MODULE_1__components_main_Main_vue__["a" /* default */], Footer: __WEBPACK_IMPORTED_MODULE_2__components_footer_Footer_vue__["a" /* default */]
    }
});

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__inc_NavigationDesk_vue__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__inc_NavigationMob_vue__ = __webpack_require__(44);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["a"] = ({
    components: {
        NavigationDesk: __WEBPACK_IMPORTED_MODULE_0__inc_NavigationDesk_vue__["a" /* default */], NavigationMob: __WEBPACK_IMPORTED_MODULE_1__inc_NavigationMob_vue__["a" /* default */]
    },
    data() {
        return {
            trigger: false
        };
    }
});

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//

var windowWidth = window.outerWidth;

/* harmony default export */ __webpack_exports__["a"] = ({
    data: function () {
        return {
            visible: windowWidth > 1024 ? true : false
        };
    }
});

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
    props: ["trigger"]
});

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/fb-small.png";

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/logo.png";

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__hero_Hero_vue__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__intro_Intro_vue__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__jobs_Jobs_vue__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__info_Info_vue__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__social_Social_vue__ = __webpack_require__(76);
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ __webpack_exports__["a"] = ({
    components: {
        Hero: __WEBPACK_IMPORTED_MODULE_0__hero_Hero_vue__["a" /* default */], Intro: __WEBPACK_IMPORTED_MODULE_1__intro_Intro_vue__["a" /* default */], Jobs: __WEBPACK_IMPORTED_MODULE_2__jobs_Jobs_vue__["a" /* default */], Info: __WEBPACK_IMPORTED_MODULE_3__info_Info_vue__["a" /* default */], Social: __WEBPACK_IMPORTED_MODULE_4__social_Social_vue__["a" /* default */]
    }
});

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({});

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/hero-desk.png";

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/hero-tab.png";

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/hero-mob.png";

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
    data() {
        return {
            objects: [{
                img: 'development.png',
                imgAlt: 'development',
                title: 'development',
                desc: 'Front-end Developers play a critical role in most projects at Code and Theory. They are actively involved throughout the project lifecycle, often times starting with rapid prototypes early in the design phase.'
            }, {
                img: 'design.png',
                imgAlt: 'design',
                title: 'web & ui design',
                desc: 'Front-end Developers play a critical role in most projects at Code and Theory. They are actively involved throughout the project lifecycle, often times starting with rapid prototypes early in the design phase.'
            }, {
                img: 'teamwork.png',
                imgAlt: 'teamwork',
                title: 'work in team',
                desc: 'Front-end Developers play a critical role in most projects at Code and Theory. They are actively involved throughout the project lifecycle, often times starting with rapid prototypes early in the design phase.'
            }]
        };
    },
    methods: {
        getImg(img) {
            return __webpack_require__(59)("./" + img);
        }
    }
});

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/fb.png";

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/twitter.png";

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__inc_Job_vue__ = __webpack_require__(67);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
    components: {
        Job: __WEBPACK_IMPORTED_MODULE_0__inc_Job_vue__["a" /* default */]
    }
});

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
    data() {
        return {
            jobs: [{
                title: 'front end developer',
                desc: 'Trazimo Front End Developera sa odlicnim poznavanjem i iskustvom vise od godinu dana u Drupalu.',
                tags: ['#HTML', '#CSS', '#JavaScript']

            }, {
                title: 'project manager',
                desc: 'Trazimo Project Managera sa odlicnim organizacionim sposobnostima i iskustvom vodjenja digital projekata...',
                tags: ['#HTML', '#CSS', '#Balsamiq', '#UXpin']
            }, {
                title: 'ui/ux designer',
                desc: 'Ako si kreativan i volis da radis u timu, posedujes visegodisnje iskustvo iz oblasti digital dizajna, ux/ui...',
                tags: ['#Sketch', '#AdobeXD', '#Photoshop', '#Balsamiq']
            }]
        };
    }
});

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({});

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({});

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({});

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _style = __webpack_require__(27);

var _style2 = _interopRequireDefault(_style);

var _vue = __webpack_require__(29);

var _vue2 = _interopRequireDefault(_vue);

var _App = __webpack_require__(33);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ----- Require modules here
// var navigation = require('./navigation/navigation.js');
new _vue2.default({
    el: "#diwanee-app",
    components: { App: _App2.default },
    template: "<App/>",
    render: function render(n) {
        return n(_App2.default);
    }
}); // ----- Main app file

// ----- Path to main SCSS file

/***/ }),
/* 27 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__(7);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7ba5bd90_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__ = __webpack_require__(85);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(34)
}

/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = Object(__WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7ba5bd90_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/App.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7ba5bd90", Component.options)
  } else {
    hotAPI.reload("data-v-7ba5bd90", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(35);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(1).default
var update = add("468f12ce", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7ba5bd90\",\"scoped\":false,\"sourceMap\":false}!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./App.vue", function() {
     var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7ba5bd90\",\"scoped\":false,\"sourceMap\":false}!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./App.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),
/* 36 */,
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Header_vue__ = __webpack_require__(8);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ed558de2_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Header_vue__ = __webpack_require__(48);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(38)
}

/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = Object(__WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Header_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ed558de2_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Header_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/header/Header.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ed558de2", Component.options)
  } else {
    hotAPI.reload("data-v-ed558de2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(39);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(1).default
var update = add("110548aa", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-ed558de2\",\"scoped\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Header.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-ed558de2\",\"scoped\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Header.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_NavigationDesk_vue__ = __webpack_require__(9);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_template_compiler_index_id_data_v_d769a7c0_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_NavigationDesk_vue__ = __webpack_require__(43);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(41)
}

/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = Object(__WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_NavigationDesk_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_template_compiler_index_id_data_v_d769a7c0_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_NavigationDesk_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/header/inc/NavigationDesk.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-d769a7c0", Component.options)
  } else {
    hotAPI.reload("data-v-d769a7c0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(42);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(1).default
var update = add("087db167", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-d769a7c0\",\"scoped\":false,\"sourceMap\":false}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./NavigationDesk.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-d769a7c0\",\"scoped\":false,\"sourceMap\":false}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./NavigationDesk.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.visible
    ? _c("nav", { staticClass: "c-navigation__desk" }, [_vm._m(0)])
    : _vm._e()
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", [
      _c("li", [_c("a", { attrs: { href: "#" } }, [_vm._v("o nama")])]),
      _vm._v(" "),
      _c("li", [_c("a", { attrs: { href: "#" } }, [_vm._v("poslovi")])]),
      _vm._v(" "),
      _c("li", [_c("a", { attrs: { href: "#" } }, [_vm._v("kontakt")])])
    ])
  }
]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-d769a7c0", esExports)
  }
}

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_NavigationMob_vue__ = __webpack_require__(10);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1a314049_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_NavigationMob_vue__ = __webpack_require__(47);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(45)
}

/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = Object(__WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_NavigationMob_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1a314049_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_NavigationMob_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/header/inc/NavigationMob.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1a314049", Component.options)
  } else {
    hotAPI.reload("data-v-1a314049", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(46);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(1).default
var update = add("613060d2", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1a314049\",\"scoped\":false,\"sourceMap\":false}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./NavigationMob.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1a314049\",\"scoped\":false,\"sourceMap\":false}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./NavigationMob.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.trigger
    ? _c("nav", { staticClass: "c-navigation__mob" }, [
        _vm._m(0),
        _vm._v(" "),
        _vm._m(1)
      ])
    : _vm._e()
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", [
      _c("li", [_c("a", { attrs: { href: "#" } }, [_vm._v("o nama")])]),
      _vm._v(" "),
      _c("li", [_c("a", { attrs: { href: "#" } }, [_vm._v("poslovi")])]),
      _vm._v(" "),
      _c("li", [_c("a", { attrs: { href: "#" } }, [_vm._v("kontakt")])])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "c-social" }, [
      _c("span", { staticClass: "c-social__message" }, [_vm._v("pratite nas")]),
      _vm._v(" "),
      _c("div", { staticClass: "c-social__follow" }, [
        _c("img", {
          staticClass: "twitter",
          attrs: {
            src: __webpack_require__(3),
            alt: ""
          }
        }),
        _vm._v(" "),
        _c("img", {
          staticClass: "fb",
          attrs: { src: __webpack_require__(11), alt: "" }
        })
      ])
    ])
  }
]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-1a314049", esExports)
  }
}

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "b-header--wrap" },
    [
      _c(
        "header",
        { staticClass: "b-header" },
        [
          _vm._m(0),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "b-header__burger",
              on: {
                click: function($event) {
                  _vm.trigger = !_vm.trigger
                }
              }
            },
            [
              _c("span", { staticClass: "b-header__burger-line" }),
              _vm._v(" "),
              _c("span", { staticClass: "b-header__burger-line" }),
              _vm._v(" "),
              _c("span", { staticClass: "b-header__burger-line" })
            ]
          ),
          _vm._v(" "),
          _c("NavigationDesk")
        ],
        1
      ),
      _vm._v(" "),
      _c("NavigationMob", { attrs: { trigger: _vm.trigger } })
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("figure", { staticClass: "b-header__logo" }, [
      _c("img", {
        attrs: {
          src: __webpack_require__(12),
          alt: "Diwanee Serbia"
        }
      })
    ])
  }
]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-ed558de2", esExports)
  }
}

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Main_vue__ = __webpack_require__(13);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_template_compiler_index_id_data_v_61fb690f_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Main_vue__ = __webpack_require__(80);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(50)
}

/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = Object(__WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Main_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_template_compiler_index_id_data_v_61fb690f_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Main_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/main/Main.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-61fb690f", Component.options)
  } else {
    hotAPI.reload("data-v-61fb690f", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(51);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(1).default
var update = add("bccd1ab4", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-61fb690f\",\"scoped\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Main.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-61fb690f\",\"scoped\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Main.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Hero_vue__ = __webpack_require__(14);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_template_compiler_index_id_data_v_180f75c9_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Hero_vue__ = __webpack_require__(55);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(53)
}

/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = Object(__WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Hero_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_template_compiler_index_id_data_v_180f75c9_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Hero_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/main/hero/Hero.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-180f75c9", Component.options)
  } else {
    hotAPI.reload("data-v-180f75c9", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(54);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(1).default
var update = add("bd396052", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-180f75c9\",\"scoped\":false,\"sourceMap\":false}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Hero.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-180f75c9\",\"scoped\":false,\"sourceMap\":false}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Hero.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("section", { staticClass: "b-hero" }, [
      _c("figure", { staticClass: "b-hero__image" }, [
        _c("picture", [
          _c("source", {
            attrs: {
              srcset: __webpack_require__(15),
              alt: "alt",
              media: "(min-width: 1025px)"
            }
          }),
          _vm._v(" "),
          _c("source", {
            attrs: {
              srcset: __webpack_require__(16),
              alt: "alt",
              media: "(min-width: 768px)"
            }
          }),
          _vm._v(" "),
          _c("img", {
            attrs: {
              srcset: __webpack_require__(17),
              alt: "alt"
            }
          })
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "b-hero__content" }, [
        _c("h1", { staticClass: "b-hero__content__title" }, [
          _vm._v("diwanee serbia")
        ]),
        _vm._v(" "),
        _c("p", { staticClass: "b-hero__content__intro mob" }, [
          _vm._v("digital media agency")
        ]),
        _vm._v(" "),
        _c("p", { staticClass: "b-hero__content__intro overMob" }, [
          _vm._v(
            "Digital Media Agency always looking for motivated,\n            multi-talented, and organized people to join our diverse team.\n        "
          )
        ])
      ])
    ])
  }
]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-180f75c9", esExports)
  }
}

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Intro_vue__ = __webpack_require__(18);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_template_compiler_index_id_data_v_d85cefba_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Intro_vue__ = __webpack_require__(63);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(57)
}

/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = Object(__WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Intro_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_template_compiler_index_id_data_v_d85cefba_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Intro_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/main/intro/Intro.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-d85cefba", Component.options)
  } else {
    hotAPI.reload("data-v-d85cefba", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(58);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(1).default
var update = add("3a680964", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-d85cefba\",\"scoped\":false,\"sourceMap\":false}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Intro.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-d85cefba\",\"scoped\":false,\"sourceMap\":false}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Intro.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./design.png": 60,
	"./development.png": 61,
	"./fb-small.png": 11,
	"./fb.png": 19,
	"./hero-desk.png": 15,
	"./hero-mob.png": 17,
	"./hero-tab.png": 16,
	"./linkedin-small.png": 5,
	"./loc.png": 4,
	"./logo.png": 12,
	"./teamwork.png": 62,
	"./twitter-small.png": 3,
	"./twitter.png": 20
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 59;

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/design.png";

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/development.png";

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/teamwork.png";

/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "section",
    { staticClass: "b-intro l" },
    _vm._l(_vm.objects, function(object) {
      return _c("article", { staticClass: "o-main" }, [
        _c("figure", { staticClass: "o-main__img" }, [
          _c("img", {
            attrs: { src: _vm.getImg(object.img), alt: object.imgAlt }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "o-main__content" }, [
          _c("h3", { staticClass: "o-main__title" }, [
            _vm._v(_vm._s(object.title))
          ]),
          _vm._v(" "),
          _c("p", { staticClass: "o-main__desc" }, [
            _vm._v(_vm._s(object.desc))
          ])
        ])
      ])
    })
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-d85cefba", esExports)
  }
}

/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Jobs_vue__ = __webpack_require__(21);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_template_compiler_index_id_data_v_eae7e16e_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Jobs_vue__ = __webpack_require__(71);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(65)
}

/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = Object(__WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Jobs_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_template_compiler_index_id_data_v_eae7e16e_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Jobs_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/main/jobs/Jobs.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-eae7e16e", Component.options)
  } else {
    hotAPI.reload("data-v-eae7e16e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(66);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(1).default
var update = add("04dcee0a", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-eae7e16e\",\"scoped\":false,\"sourceMap\":false}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Jobs.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-eae7e16e\",\"scoped\":false,\"sourceMap\":false}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Jobs.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Job_vue__ = __webpack_require__(22);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_template_compiler_index_id_data_v_a645dd2e_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Job_vue__ = __webpack_require__(70);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(68)
}

/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = Object(__WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Job_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_template_compiler_index_id_data_v_a645dd2e_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Job_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/main/jobs/inc/Job.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-a645dd2e", Component.options)
  } else {
    hotAPI.reload("data-v-a645dd2e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(69);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(1).default
var update = add("10e26fdd", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-a645dd2e\",\"scoped\":false,\"sourceMap\":false}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Job.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-a645dd2e\",\"scoped\":false,\"sourceMap\":false}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Job.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "b-jobs--wrap" },
    _vm._l(_vm.jobs, function(job) {
      return _c("div", { staticClass: "b-jobs__job" }, [
        _c("div", { staticClass: "l" }, [
          _c("div", { staticClass: "b-jobs__job--wrap" }, [
            _c("h4", { staticClass: "b-jobs__job__title" }, [
              _vm._v(_vm._s(job.title))
            ]),
            _vm._v(" "),
            _c("p", { staticClass: "b-jobs__job__desc" }, [
              _vm._v(_vm._s(job.desc))
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "b-jobs__job__tags" },
              _vm._l(job.tags, function(tag) {
                return _c("span", [_vm._v(_vm._s(tag))])
              })
            )
          ]),
          _vm._v(" "),
          _c(
            "button",
            { staticClass: "c-btn", attrs: { type: "button", name: "button" } },
            [_vm._v("prijavi se")]
          )
        ])
      ])
    })
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-a645dd2e", esExports)
  }
}

/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "section",
    { staticClass: "b-jobs" },
    [_vm._m(0), _vm._v(" "), _c("Job"), _vm._v(" "), _vm._m(1)],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "c-section-title--wrap l" }, [
      _c("div", { staticClass: "c-section-title" }, [
        _c("h4", [_vm._v("otvorene pozicije")]),
        _vm._v(" "),
        _c("h2", [_vm._v("poslovi")])
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "b-jobs__desc" }, [
        _vm._v(
          "\n            We are always looking for motivated, multi-talented, and organized people to join our diverse team.\n        "
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "c-btn--wrap" }, [
      _c(
        "button",
        {
          staticClass: "c-btn c-btn--gray",
          attrs: { type: "button", name: "button" }
        },
        [_vm._v("ucitaj jos pozicija")]
      )
    ])
  }
]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-eae7e16e", esExports)
  }
}

/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Info_vue__ = __webpack_require__(23);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_template_compiler_index_id_data_v_fecff36e_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Info_vue__ = __webpack_require__(75);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(73)
}

/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = Object(__WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Info_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_template_compiler_index_id_data_v_fecff36e_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Info_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/main/info/Info.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-fecff36e", Component.options)
  } else {
    hotAPI.reload("data-v-fecff36e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(74);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(1).default
var update = add("6eccea04", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-fecff36e\",\"scoped\":false,\"sourceMap\":false}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Info.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-fecff36e\",\"scoped\":false,\"sourceMap\":false}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Info.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("section", { staticClass: "b-info" }, [
      _c("div", { staticClass: "l" }, [
        _c("div", { staticClass: "c-section-title" }, [
          _c("h4", [_vm._v("diwanee beograd")]),
          _vm._v(" "),
          _c("h2", [_vm._v("digital media company")])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "b-info__desc" }, [
          _c("p", [
            _vm._v(
              'Diwanee je digitalna medijska kompanija, okrenuta velikoj ženskoj publici na Bliskom istoku.\n                Naša kompanija stvara i distribuira originalan, visokokvalitetan i pouzdan sadržaj. Diwanee je\n                takođe partner sa YouTube-om, i zajedno smo pokrenuli kanal "DUNIATI", nudeći na taj način sve\n                vrste bogatog video sadržaja za arapske žene širom sveta.\n            '
            )
          ]),
          _vm._v(" "),
          _c("p", [
            _vm._v(
              "Radimo sa velikim brojem brendova radi povećanja angažovanja, a sve u digitalnom prostoru.\n                Diwanee je partner i sa velikim regionalnim vlasnicima medija, kako bismo upravljali svojom\n                digitalnom prisutnošću.\n            "
            )
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-fecff36e", esExports)
  }
}

/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Social_vue__ = __webpack_require__(24);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0a047c29_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Social_vue__ = __webpack_require__(79);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(77)
}

/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = Object(__WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Social_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0a047c29_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Social_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/main/social/Social.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0a047c29", Component.options)
  } else {
    hotAPI.reload("data-v-0a047c29", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(78);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(1).default
var update = add("6ade8f1a", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0a047c29\",\"scoped\":false,\"sourceMap\":false}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Social.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0a047c29\",\"scoped\":false,\"sourceMap\":false}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Social.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("section", { staticClass: "b-follow l" }, [
      _c("h4", [_vm._v("pratite nas")]),
      _vm._v(" "),
      _c("div", { staticClass: "b-follow__items" }, [
        _c(
          "a",
          { attrs: { href: "https://www.twitter.com", target: "_blank" } },
          [
            _c("img", {
              attrs: {
                src: __webpack_require__(20),
                alt: "twitter"
              }
            })
          ]
        ),
        _vm._v(" "),
        _c(
          "a",
          { attrs: { href: "https://www.facebook.com", target: "_blank" } },
          [
            _c("img", {
              attrs: {
                src: __webpack_require__(19),
                alt: "facebook"
              }
            })
          ]
        )
      ])
    ])
  }
]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-0a047c29", esExports)
  }
}

/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "main",
    { attrs: { id: "main" } },
    [
      _c("Hero"),
      _vm._v(" "),
      _c("Intro"),
      _vm._v(" "),
      _c("Jobs"),
      _vm._v(" "),
      _c("Info"),
      _vm._v(" "),
      _c("Social")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-61fb690f", esExports)
  }
}

/***/ }),
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Footer_vue__ = __webpack_require__(25);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_template_compiler_index_id_data_v_c343a562_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Footer_vue__ = __webpack_require__(84);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(82)
}

/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = Object(__WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Footer_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_template_compiler_index_id_data_v_c343a562_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Footer_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/footer/Footer.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c343a562", Component.options)
  } else {
    hotAPI.reload("data-v-c343a562", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(83);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(1).default
var update = add("2bfb2496", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-c343a562\",\"scoped\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Footer.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-c343a562\",\"scoped\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Footer.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("footer", { staticClass: "b-footer" }, [
      _c("div", { staticClass: "l" }, [
        _c("div", { staticClass: "b-footer__columns" }, [
          _c("div", { staticClass: "b-footer__column" }, [
            _c("h3", { staticClass: "b-footer__column__heading" }, [
              _c("img", {
                attrs: { src: __webpack_require__(4), alt: "loc" }
              }),
              _vm._v(" dubai\n                ")
            ]),
            _vm._v(" "),
            _c("p", [_vm._v("Office Park, Building Block A")]),
            _vm._v(" "),
            _c("p", [_vm._v("Units A301-A302")]),
            _vm._v(" "),
            _c("p", [_vm._v("Dubai Internet City")]),
            _vm._v(" "),
            _c("p", [_vm._v("T: 971 4 - 434 7147")])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "b-footer__column" }, [
            _c("h3", { staticClass: "b-footer__column__heading" }, [
              _c("img", {
                attrs: { src: __webpack_require__(4), alt: "loc" }
              }),
              _vm._v(" beirut\n                ")
            ]),
            _vm._v(" "),
            _c("p", [_vm._v("Dora, Seaside Road,")]),
            _vm._v(" "),
            _c("p", [_vm._v("BCP bidg (Facing Demco Steel)")]),
            _vm._v(" "),
            _c("p", [_vm._v("Mobile: 961 76 - 866 700")]),
            _vm._v(" "),
            _c("p", [_vm._v("Fax: 961 1 - 244 846")])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "b-footer__column" }, [
            _c("h3", { staticClass: "b-footer__column__heading" }, [
              _c("img", {
                attrs: { src: __webpack_require__(4), alt: "loc" }
              }),
              _vm._v(" belgrade\n                ")
            ]),
            _vm._v(" "),
            _c("p", [_vm._v("Resavska 33")]),
            _vm._v(" "),
            _c("p", [_vm._v("11000 Beograd")]),
            _vm._v(" "),
            _c("p", [_vm._v("Tel: +381 11 - 3340 117")])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "c-social phone" }, [
          _c("div", { staticClass: "c-social__follow" }, [
            _c("img", {
              staticClass: "linkedin",
              attrs: {
                src: __webpack_require__(5),
                alt: "linkedin"
              }
            }),
            _vm._v(" "),
            _c("img", {
              staticClass: "twitter",
              attrs: {
                src: __webpack_require__(3),
                alt: "twitter"
              }
            })
          ]),
          _vm._v(" "),
          _c("span", { staticClass: "c-social__message" }, [
            _c("a", { attrs: { href: "#" } }, [_vm._v("www.diwanee.com")])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "c-copyright" }, [
        _c("div", { staticClass: "l" }, [
          _c("p", { staticClass: "c-copyright__text" }, [
            _vm._v("COPYRIGHT © 2015 DIWANEE SERBIA")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "c-social overPhone" }, [
            _c("div", { staticClass: "c-social__follow" }, [
              _c("img", {
                staticClass: "linkedin",
                attrs: {
                  src: __webpack_require__(5),
                  alt: "linkedin"
                }
              }),
              _vm._v(" "),
              _c("img", {
                staticClass: "twitter",
                attrs: {
                  src: __webpack_require__(3),
                  alt: "twitter"
                }
              })
            ]),
            _vm._v(" "),
            _c("span", { staticClass: "c-social__message" }, [
              _c("a", { attrs: { href: "#" } }, [_vm._v("www.diwanee.com")])
            ])
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-c343a562", esExports)
  }
}

/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "diwanee-app" } },
    [_c("Header"), _vm._v(" "), _c("Main"), _vm._v(" "), _c("Footer")],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-7ba5bd90", esExports)
  }
}

/***/ })
],[26]);
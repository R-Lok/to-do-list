/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --highlight-color: rgb(61, 185, 199);\n}\n\n* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n    font-family: 'Roboto';\n}\n\n.content-container {\n    width: 100vw;\n    height: 100vh;\n    display: grid;\n    grid-template: auto 1fr / 250px 1fr;\n    grid-template-areas: \"header header\"\n                         \"sidebar main\"\n}\n\n.header {\n    background: var(--highlight-color);\n    height: 10vh;\n    display: flex;\n    align-items: center;\n    padding: 0 25px;\n    box-shadow: 0 0 2px 1px;\n    grid-area: header;\n}\n\n.header > span {\n    font-size: 30px;\n    font-weight: bold;\n    padding: 0 10px;\n}\n\n.sidebar.outer {\n    grid-area: sidebar;\n    box-shadow: 0 0 1px 1px;\n    background: rgb(240, 240, 240);\n}\n\n.sidebar.inner {\n    display: grid;\n    padding: 10px 10px;\n}\n\n\nbutton:hover {\n    cursor: pointer;\n}\n\n.form-container-outer {\n    position: fixed;\n    width: 100vw;\n    height: 100vh;\n    justify-content: center;\n    align-items: center;\n    background: rgba(255, 255, 255, 0.66);\n    display: none;\n}\n\n.form-container-inner {\n    border: 2px solid black;\n    background-color: white;\n    width: fit-content;\n    min-width: 30vw;\n    padding: 20px;\n}\n\nform {\n    display: grid;\n    grid-template: auto / 100%;\n    row-gap: 10px;\n}\n\n.form-button {\n    width: 45%;\n}\n\n.button-container {\n    display: flex;\n    justify-content: space-between;\n}\n\n.sidebar-project-container {\n    display: flex;\n    border: 1px solid black;\n    border-radius: 2px;\n    margin: 5px 0;\n    padding: 0 5px;\n}\n\n.sidebar-project-container > span {\n    width: 100%;\n}\n\n.delete-project-btn {\n    display: none;\n}\n\n.sidebar-project-container:hover > .delete-project-btn {\n    display: block;\n}\n\n.delete-project-btn:hover {\n    cursor: pointer;\n}\n\n.main-container.outer {\n    grid-area: main;\n}\n\n.main-container.inner {\n    display: grid;\n    justify-items: center;\n}\n\n[currentProject = ''] {\n    display: none;\n}\n\n.todo-display {\n    padding: 5vw;\n}\n\n.to-do-container {\n    border: 1px solid black;\n    border-radius: 3px;\n    display: grid;\n    grid-template-columns: 20px 1fr min-content;\n    grid-template-rows: 1fr;\n    height: 35px;\n    align-content: center;\n    width: 50vw;\n    margin-bottom: 10px;\n}\n\n.to-do-container > div {\n    display: flex;\n    width: fit-content;\n    justify-content: space-between;\n}\n\n.to-do-container > .text-container {\n    width: 100%;\n    display: flex;\n    align-items: center;\n}\n\n.checkbox-container {\n    padding: 0 5px;\n}\n\n.to-do-container > .urgency-indicator {\n    width: 15px;\n    height: 100%;\n    display: flex;\n    justify-content: center;\n}\n\n[priority='Urgent'] {\n    background: red;\n}\n\n[priority='Urgent']::after {\n    content: \"U\";\n    display: flex;\n    align-items: center;\n}\n\n[priority='Normal'] {\n    background: rgb(209, 209, 0);\n}\n\n[priority='Normal']::after {\n    content: \"N\";\n    display: flex;\n    align-items: center;\n}\n\n[priority='Low'] {\n    background: green;\n}\n\n[priority='Low']::after {\n    content: \"L\";\n    display: flex;\n    align-items: center;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,sBAAsB;IACtB,SAAS;IACT,UAAU;IACV,qBAAqB;AACzB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,aAAa;IACb,mCAAmC;IACnC;;AAEJ;;AAEA;IACI,kCAAkC;IAClC,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,eAAe;IACf,uBAAuB;IACvB,iBAAiB;AACrB;;AAEA;IACI,eAAe;IACf,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,uBAAuB;IACvB,8BAA8B;AAClC;;AAEA;IACI,aAAa;IACb,kBAAkB;AACtB;;;AAGA;IACI,eAAe;AACnB;;AAEA;IACI,eAAe;IACf,YAAY;IACZ,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,qCAAqC;IACrC,aAAa;AACjB;;AAEA;IACI,uBAAuB;IACvB,uBAAuB;IACvB,kBAAkB;IAClB,eAAe;IACf,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,0BAA0B;IAC1B,aAAa;AACjB;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,kBAAkB;IAClB,aAAa;IACb,cAAc;AAClB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,qBAAqB;AACzB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,uBAAuB;IACvB,kBAAkB;IAClB,aAAa;IACb,2CAA2C;IAC3C,uBAAuB;IACvB,YAAY;IACZ,qBAAqB;IACrB,WAAW;IACX,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,8BAA8B;AAClC;;AAEA;IACI,WAAW;IACX,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,4BAA4B;AAChC;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,mBAAmB;AACvB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');\n\n:root {\n    --highlight-color: rgb(61, 185, 199);\n}\n\n* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n    font-family: 'Roboto';\n}\n\n.content-container {\n    width: 100vw;\n    height: 100vh;\n    display: grid;\n    grid-template: auto 1fr / 250px 1fr;\n    grid-template-areas: \"header header\"\n                         \"sidebar main\"\n}\n\n.header {\n    background: var(--highlight-color);\n    height: 10vh;\n    display: flex;\n    align-items: center;\n    padding: 0 25px;\n    box-shadow: 0 0 2px 1px;\n    grid-area: header;\n}\n\n.header > span {\n    font-size: 30px;\n    font-weight: bold;\n    padding: 0 10px;\n}\n\n.sidebar.outer {\n    grid-area: sidebar;\n    box-shadow: 0 0 1px 1px;\n    background: rgb(240, 240, 240);\n}\n\n.sidebar.inner {\n    display: grid;\n    padding: 10px 10px;\n}\n\n\nbutton:hover {\n    cursor: pointer;\n}\n\n.form-container-outer {\n    position: fixed;\n    width: 100vw;\n    height: 100vh;\n    justify-content: center;\n    align-items: center;\n    background: rgba(255, 255, 255, 0.66);\n    display: none;\n}\n\n.form-container-inner {\n    border: 2px solid black;\n    background-color: white;\n    width: fit-content;\n    min-width: 30vw;\n    padding: 20px;\n}\n\nform {\n    display: grid;\n    grid-template: auto / 100%;\n    row-gap: 10px;\n}\n\n.form-button {\n    width: 45%;\n}\n\n.button-container {\n    display: flex;\n    justify-content: space-between;\n}\n\n.sidebar-project-container {\n    display: flex;\n    border: 1px solid black;\n    border-radius: 2px;\n    margin: 5px 0;\n    padding: 0 5px;\n}\n\n.sidebar-project-container > span {\n    width: 100%;\n}\n\n.delete-project-btn {\n    display: none;\n}\n\n.sidebar-project-container:hover > .delete-project-btn {\n    display: block;\n}\n\n.delete-project-btn:hover {\n    cursor: pointer;\n}\n\n.main-container.outer {\n    grid-area: main;\n}\n\n.main-container.inner {\n    display: grid;\n    justify-items: center;\n}\n\n[currentProject = ''] {\n    display: none;\n}\n\n.todo-display {\n    padding: 5vw;\n}\n\n.to-do-container {\n    border: 1px solid black;\n    border-radius: 3px;\n    display: grid;\n    grid-template-columns: 20px 1fr min-content;\n    grid-template-rows: 1fr;\n    height: 35px;\n    align-content: center;\n    width: 50vw;\n    margin-bottom: 10px;\n}\n\n.to-do-container > div {\n    display: flex;\n    width: fit-content;\n    justify-content: space-between;\n}\n\n.to-do-container > .text-container {\n    width: 100%;\n    display: flex;\n    align-items: center;\n}\n\n.checkbox-container {\n    padding: 0 5px;\n}\n\n.to-do-container > .urgency-indicator {\n    width: 15px;\n    height: 100%;\n    display: flex;\n    justify-content: center;\n}\n\n[priority='Urgent'] {\n    background: red;\n}\n\n[priority='Urgent']::after {\n    content: \"U\";\n    display: flex;\n    align-items: center;\n}\n\n[priority='Normal'] {\n    background: rgb(209, 209, 0);\n}\n\n[priority='Normal']::after {\n    content: \"N\";\n    display: flex;\n    align-items: center;\n}\n\n[priority='Low'] {\n    background: green;\n}\n\n[priority='Low']::after {\n    content: \"L\";\n    display: flex;\n    align-items: center;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/DOM.js":
/*!********************!*\
  !*** ./src/DOM.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createHeader: () => (/* binding */ createHeader),
/* harmony export */   createSidebar: () => (/* binding */ createSidebar),
/* harmony export */   mainContainer: () => (/* binding */ mainContainer),
/* harmony export */   newProjectForm: () => (/* binding */ newProjectForm),
/* harmony export */   newToDoForm: () => (/* binding */ newToDoForm)
/* harmony export */ });
/* harmony import */ var _receipt_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./receipt.png */ "./src/receipt.png");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./src/index.js");


let contentContainer = document.querySelector(".content-container")

const createHeader  = (function(){
    const header = document.createElement('div')
    header.classList.add('header')

    const headerImage = document.createElement('img')
    headerImage.src = _receipt_png__WEBPACK_IMPORTED_MODULE_0__

    const headerText = document.createElement('span')
    headerText.innerText = 'To-do List'

    header.append(headerImage, headerText)
    contentContainer.append(header)
})()

const createSidebar = (function() {
    const sidebarOuter = document.createElement('div')
    sidebarOuter.classList.add('sidebar', 'outer')

    const sideBarInner = document.createElement('div')
    sideBarInner.classList.add('sidebar', 'inner')

    sidebarOuter.append(sideBarInner)
    contentContainer.append(sidebarOuter)

    const projectContainer = document.createElement('div')
    projectContainer.classList.add('project-container')

    const addProjectBtn  = document.createElement('button')
    addProjectBtn.classList.add('btn')
    addProjectBtn.textContent = 'New Project'
    
    sideBarInner.append(projectContainer, addProjectBtn)

    function renderProjectsToSidebar() {
        for (const project in _index__WEBPACK_IMPORTED_MODULE_1__.projects.list) {
            if (document.querySelector(`[project="${_index__WEBPACK_IMPORTED_MODULE_1__.projects.list[project].projectName}"]`) === null) {
                const projectNameContainer = document.createElement('div')
                const projectName = document.createElement('span')
                projectNameContainer.classList.add('sidebar-project-container')
                projectNameContainer.setAttribute('project', `${_index__WEBPACK_IMPORTED_MODULE_1__.projects.list[project].projectName}`)
                projectName.addEventListener('click', (e) => {
                    const targetProject = e.target.parentNode.getAttribute('project')
                    mainContainer.setAddTodoButtonProject(targetProject)
                    mainContainer.renderProjectTodos(targetProject)
                })

                const deleteProjectButton = document.createElement('div')
                deleteProjectButton.addEventListener('click', (e) => (0,_index__WEBPACK_IMPORTED_MODULE_1__.deleteProject)(e.target))

                projectName.innerText = _index__WEBPACK_IMPORTED_MODULE_1__.projects.list[project].projectName
                deleteProjectButton.innerText = 'X'
                deleteProjectButton.classList.add('delete-project-btn')
                projectNameContainer.append(projectName, deleteProjectButton)
                projectContainer.append(projectNameContainer)
            } 
        }
    }

    function deleteProjectFromSidebar(clickTarget) {
        clickTarget.parentElement.remove()
    }
    return {addProjectBtn, renderProjectsToSidebar, deleteProjectFromSidebar}
})()

const mainContainer = (function(){
    const mainContainerOuter = document.createElement('div')
    mainContainerOuter.classList.add('main-container', 'outer')
    const mainContainerInner = document.createElement('div')
    mainContainerInner.classList.add('main-container', 'inner')

    const todoDisplay = document.createElement('div')
    todoDisplay.classList.add('todo-display')
    const newTodoButtonContainer = document.createElement('div')
    newTodoButtonContainer.classList.add('button-container')
    const newTodoButton = document.createElement('button')
    newTodoButton.setAttribute('type', 'button')
    newTodoButton.innerText = 'Add To-do'
    newTodoButton.setAttribute('currentProject', '')

    newTodoButtonContainer.append(newTodoButton)
    mainContainerInner.append(todoDisplay, newTodoButtonContainer)
    mainContainerOuter.append(mainContainerInner)
    contentContainer.append(mainContainerOuter)

    function setAddTodoButtonProject(projectName) {
        newTodoButton.setAttribute('currentProject', projectName)
    }
    
    function removeAllChildElements() {
        while (todoDisplay.hasChildNodes()) {
            todoDisplay.removeChild(todoDisplay.lastChild)
        }
    }
    
    function renderProjectTodos(projectName) {
        const toDoArray = _index__WEBPACK_IMPORTED_MODULE_1__.projects.list[projectName].toDoItems
        removeAllChildElements()
        
        for (let i = 0; i < toDoArray.length; i++) {
            const toDoContainer = document.createElement('div')
            toDoContainer.classList.add('to-do-container')
            toDoContainer.setAttribute('to-do-id', toDoArray[i].toDoId)
            const urgencyIndicator = document.createElement('div')
            urgencyIndicator.classList.add('urgency-indicator')
            urgencyIndicator.setAttribute('priority', toDoArray[i].priority)
            const textContainer = document.createElement('div')
            textContainer.classList.add('text-container')
            const checkBoxContainer = document.createElement('div')
            checkBoxContainer.classList.add('checkbox-container')

            const todoTitle = document.createElement('span')
            todoTitle.innerText = toDoArray[i].title
            const todoDueDate = document.createElement('span')
            todoDueDate.innerText = `Due date: ${toDoArray[i].dueDate}`

            const checkBox = document.createElement('input')
            checkBox.setAttribute('type', 'checkbox')
            checkBox.addEventListener('change', (event) => (0,_index__WEBPACK_IMPORTED_MODULE_1__.deleteAndRerenderToDoList)(event))

            checkBoxContainer.append(checkBox)
            textContainer.append(todoTitle, todoDueDate)
            toDoContainer.append(urgencyIndicator, textContainer, checkBoxContainer)
            todoDisplay.append(toDoContainer)
        }
    }

    function getToDoInformation(event) {
        const toDoContainer = event.target.parentElement.parentElement
        const toDoId = toDoContainer.getAttribute('to-do-id')
        const currentProject = newTodoButton.getAttribute('currentproject')
        return {currentProject, toDoId}
    }

    return {setAddTodoButtonProject, renderProjectTodos, newTodoButton, getToDoInformation}
})()

const newProjectForm = (function() {
    const formContainerOuter = document.createElement('div')
    formContainerOuter.classList.add('form-container-outer')
    const formContainerInner = document.createElement('div')
    formContainerInner.classList.add('form-container-inner')

    const projectForm = document.createElement('form')
    const projectFormLabel = document.createElement('label')
    projectFormLabel.setAttribute('for', 'projectName')
    const projectFormInput = document.createElement('input')
    projectFormInput.type = 'text'
    projectFormInput.id = 'projectName'
    projectFormLabel.innerText = 'Project Name'

    const submitButton = document.createElement('button')
    submitButton.classList.add('form-button', 'project-submit-btn')
    submitButton.setAttribute('type', 'button')
    submitButton.innerText = 'Submit'

    const cancelButton = document.createElement('button')
    cancelButton.classList.add('form-button', 'project-cancel-btn')
    cancelButton.setAttribute('type', 'button')
    cancelButton.innerText = 'Cancel'

    const buttonContainer = document.createElement('div')
    buttonContainer.classList.add('button-container')

    buttonContainer.append(submitButton, cancelButton)
    projectForm.append(projectFormLabel, projectFormInput, buttonContainer)
    formContainerOuter.append(formContainerInner)
    formContainerInner.append(projectForm)
    contentContainer.append(formContainerOuter)

    function showProjectForm() {
        formContainerOuter.style.display = 'flex'
    }

    function hideProjectForm() {
        clearProjectFormInput()
        formContainerOuter.style.display = 'none'
    }

    function clearProjectFormInput() {
        projectFormInput.value = ""
    }

    function getProjectFormInputValue() {
        return projectFormInput.value
    }

    return {showProjectForm, hideProjectForm, cancelButton, submitButton, getProjectFormInputValue}
})()

const newToDoForm = (function() {
    const formContainerOuter = document.createElement('div')
    formContainerOuter.classList.add('form-container-outer')
    const formContainerInner = document.createElement('div')
    formContainerInner.classList.add('form-container-inner')

    const toDoForm = document.createElement('form')

    const titleLabel = document.createElement('label')
    titleLabel.innerText = 'Title'
    titleLabel.setAttribute('for', 'to-do-title')
    const titleInput = document.createElement('input')
    titleInput.required = true
    titleInput.setAttribute('type', 'text')
    titleInput.id = 'to-do-title'

    const descriptionLabel = document.createElement('label')
    descriptionLabel.innerText = 'Description'
    descriptionLabel.setAttribute('for', 'to-do-description')
    const descriptionInput = document.createElement('textarea')
    descriptionInput.id = 'to-do-description'

    const dueDateLabel = document.createElement('label')
    dueDateLabel.innerText = 'Due date'
    dueDateLabel.setAttribute('for', 'to-do-due-date')
    const dueDateInput = document.createElement('input')
    dueDateInput.setAttribute('type', 'date')
    dueDateInput.id = 'to-do-due-date'

    const priorityLabel = document.createElement('div')
    priorityLabel.innerText = 'Priority'
    priorityLabel.setAttribute('for', 'priority')
    const priorityInput = document.createElement('select')

    const highPriority = document.createElement('option')
    highPriority.setAttribute('value', 'Urgent')
    highPriority.textContent = 'Urgent'
    const normalPriority = document.createElement('option')
    normalPriority.setAttribute('value', 'Normal')
    normalPriority.textContent = 'Normal'
    const lowPriority = document.createElement('option')
    lowPriority.setAttribute('value', 'Low')
    lowPriority.textContent = 'Low'

    priorityInput.append(highPriority, normalPriority, lowPriority)

    const buttonContainer = document.createElement('div')
    buttonContainer.classList.add('button-container')

    const submitButton = document.createElement('button')
    submitButton.innerText = 'Submit'
    submitButton.setAttribute('type', 'button')
    submitButton.classList.add('form-button')

    const cancelButton = document.createElement('button')
    cancelButton.innerText = 'Cancel'
    cancelButton.setAttribute('type', 'button')
    cancelButton.classList.add('form-button')

    buttonContainer.append(submitButton, cancelButton)
    toDoForm.append(titleLabel, titleInput, descriptionLabel, descriptionInput, dueDateLabel, dueDateInput, priorityLabel, priorityInput,  buttonContainer)
    formContainerInner.append(toDoForm)
    formContainerOuter.append(formContainerInner)
    contentContainer.append(formContainerOuter)

    function showToDoForm() {
        formContainerOuter.style.display = 'flex'
    }

    function hideToDoForm() {
        formContainerOuter.style.display = 'none'
    }

    function clearInputsAndHideForm() {
        titleInput.value = ""
        descriptionInput.value = ""
        dueDateInput.value = ""
        hideToDoForm()
    }

    function getFormValues() {
        const title = titleInput.value
        const description = descriptionInput.value
        const dueDate = dueDateInput.value
        const priority = priorityInput.value

        return {title, description, dueDate, priority}
    }

    return {showToDoForm, hideToDoForm, cancelButton, submitButton, clearInputsAndHideForm, getFormValues}
})()





/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deleteAndRerenderToDoList: () => (/* binding */ deleteAndRerenderToDoList),
/* harmony export */   deleteProject: () => (/* binding */ deleteProject),
/* harmony export */   projects: () => (/* binding */ projects)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOM */ "./src/DOM.js");




_DOM__WEBPACK_IMPORTED_MODULE_1__.createSidebar
_DOM__WEBPACK_IMPORTED_MODULE_1__.createHeader
_DOM__WEBPACK_IMPORTED_MODULE_1__.newProjectForm

const eventListeners = (function() {
    _DOM__WEBPACK_IMPORTED_MODULE_1__.createSidebar.addProjectBtn.addEventListener('click', _DOM__WEBPACK_IMPORTED_MODULE_1__.newProjectForm.showProjectForm)
    _DOM__WEBPACK_IMPORTED_MODULE_1__.newProjectForm.cancelButton.addEventListener('click', _DOM__WEBPACK_IMPORTED_MODULE_1__.newProjectForm.hideProjectForm)
    _DOM__WEBPACK_IMPORTED_MODULE_1__.newProjectForm.submitButton.addEventListener('click', addNewProject)
    _DOM__WEBPACK_IMPORTED_MODULE_1__.mainContainer.newTodoButton.addEventListener('click', _DOM__WEBPACK_IMPORTED_MODULE_1__.newToDoForm.showToDoForm)
    _DOM__WEBPACK_IMPORTED_MODULE_1__.newToDoForm.cancelButton.addEventListener('click', _DOM__WEBPACK_IMPORTED_MODULE_1__.newToDoForm.clearInputsAndHideForm)
    _DOM__WEBPACK_IMPORTED_MODULE_1__.newToDoForm.submitButton.addEventListener('click', addNewToDo)
})()

function saveProjectsToLocalStorage() {
    localStorage.setItem('projectslist', JSON.stringify(projects.list))
}

function getProjectsFromLocalStorage() {
    if (localStorage.getItem('projectslist') !== null)
    projects.list = JSON.parse(localStorage.getItem('projectslist'))
    retrieveCurrentToDoId()
}

function saveCurrentToDoId() {
    localStorage.setItem('currentToDoId', JSON.stringify(projects.currentToDoId))
}

function retrieveCurrentToDoId() {
    let savedCurrentToDoId = JSON.parse(localStorage.getItem('currentToDoId'))
    projects.currentToDoId = savedCurrentToDoId
}

function addNewProject() {
    if (_DOM__WEBPACK_IMPORTED_MODULE_1__.newProjectForm.getProjectFormInputValue() === "") {
        alert('Project name cannot be empty!')
    } else {
        projects.add(_DOM__WEBPACK_IMPORTED_MODULE_1__.newProjectForm.getProjectFormInputValue())
        _DOM__WEBPACK_IMPORTED_MODULE_1__.createSidebar.renderProjectsToSidebar()
        _DOM__WEBPACK_IMPORTED_MODULE_1__.newProjectForm.hideProjectForm()
        saveProjectsToLocalStorage()
    }
}

function confirmDeleteProject() {
    return confirm('Delete this project? This is an irreversible action.')
}

function deleteProject(clickTarget) {
    if (confirmDeleteProject() === true) {
        let projectToDelete = clickTarget.parentNode.getAttribute('project')
        projects.delete(projectToDelete)
        _DOM__WEBPACK_IMPORTED_MODULE_1__.createSidebar.deleteProjectFromSidebar(clickTarget)
        saveProjectsToLocalStorage()
    }
}

function deleteAndRerenderToDoList(event) {
    let currentProject = _DOM__WEBPACK_IMPORTED_MODULE_1__.mainContainer.newTodoButton.getAttribute('currentproject')
    projects.deleteToDoItem(event)
    _DOM__WEBPACK_IMPORTED_MODULE_1__.mainContainer.renderProjectTodos(currentProject)
}

let projects = {
    list: {},
    currentToDoId: 0,
    add: function(projectName) {
        if (projects.list[projectName] === undefined) {
            projects.list[projectName]= new project(projectName)
        } else {
            alert('Project already exists!')
        }
    },
    delete: function(projectName) {
        delete projects.list[projectName]
    },
    addToDoItem: function(project, title, description, dueDate, priority) {
        project.toDoItems.push(new toDoItem(title, description, dueDate, priority))
    },
    deleteToDoItem: function(event) {
        const toDoInformation = _DOM__WEBPACK_IMPORTED_MODULE_1__.mainContainer.getToDoInformation(event)
        const project = projects.list[toDoInformation.currentProject]
        const toDoId = toDoInformation.toDoId
        let targetToDeleteIndex = project.toDoItems.findIndex(element => element.toDoId === toDoId)
        project.toDoItems.splice(targetToDeleteIndex, 1)
        console.log(project.toDoItems)
    }
}

function addNewToDo() {
    let input = _DOM__WEBPACK_IMPORTED_MODULE_1__.newToDoForm.getFormValues()
    let currentProject = _DOM__WEBPACK_IMPORTED_MODULE_1__.mainContainer.newTodoButton.getAttribute('currentproject')
    let currentProjectLocation = projects.list[currentProject]

    if (input.title === '') {
        alert('Please enter a title for the to-do.')
    } else {
        console.log(currentProjectLocation)
        projects.addToDoItem(currentProjectLocation, input.title, input.description, input.dueDate, input.priority)
        _DOM__WEBPACK_IMPORTED_MODULE_1__.newToDoForm.clearInputsAndHideForm()
        _DOM__WEBPACK_IMPORTED_MODULE_1__.mainContainer.renderProjectTodos(currentProject)
        saveProjectsToLocalStorage()
        saveCurrentToDoId()
    }
}

class project {
    constructor(projectName) {
        this.projectName = projectName
        this.toDoItems = []
    }
}

class toDoItem {
    constructor(title, description, dueDate, priority) {
        this.title = title
        this.description = description
        this.dueDate = dueDate
        this.priority = priority
        this.toDoId = projects.currentToDoId++
    }
}

getProjectsFromLocalStorage()
_DOM__WEBPACK_IMPORTED_MODULE_1__.createSidebar.renderProjectsToSidebar()
console.log(projects)
console.log(localStorage.getItem('projectslist'))

 

/***/ }),

/***/ "./src/receipt.png":
/*!*************************!*\
  !*** ./src/receipt.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cdcfad75a0ea4c66c150.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvRE9NLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gICAgLS1oaWdobGlnaHQtY29sb3I6IHJnYig2MSwgMTg1LCAxOTkpO1xcbn1cXG5cXG4qIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XFxufVxcblxcbi5jb250ZW50LWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZTogYXV0byAxZnIgLyAyNTBweCAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcXCJoZWFkZXIgaGVhZGVyXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICBcXFwic2lkZWJhciBtYWluXFxcIlxcbn1cXG5cXG4uaGVhZGVyIHtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0taGlnaGxpZ2h0LWNvbG9yKTtcXG4gICAgaGVpZ2h0OiAxMHZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAwIDI1cHg7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAycHggMXB4O1xcbiAgICBncmlkLWFyZWE6IGhlYWRlcjtcXG59XFxuXFxuLmhlYWRlciA+IHNwYW4ge1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBwYWRkaW5nOiAwIDEwcHg7XFxufVxcblxcbi5zaWRlYmFyLm91dGVyIHtcXG4gICAgZ3JpZC1hcmVhOiBzaWRlYmFyO1xcbiAgICBib3gtc2hhZG93OiAwIDAgMXB4IDFweDtcXG4gICAgYmFja2dyb3VuZDogcmdiKDI0MCwgMjQwLCAyNDApO1xcbn1cXG5cXG4uc2lkZWJhci5pbm5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBhZGRpbmc6IDEwcHggMTBweDtcXG59XFxuXFxuXFxuYnV0dG9uOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZm9ybS1jb250YWluZXItb3V0ZXIge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42Nik7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5mb3JtLWNvbnRhaW5lci1pbm5lciB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICBtaW4td2lkdGg6IDMwdnc7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbmZvcm0ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlOiBhdXRvIC8gMTAwJTtcXG4gICAgcm93LWdhcDogMTBweDtcXG59XFxuXFxuLmZvcm0tYnV0dG9uIHtcXG4gICAgd2lkdGg6IDQ1JTtcXG59XFxuXFxuLmJ1dHRvbi1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5zaWRlYmFyLXByb2plY3QtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gICAgbWFyZ2luOiA1cHggMDtcXG4gICAgcGFkZGluZzogMCA1cHg7XFxufVxcblxcbi5zaWRlYmFyLXByb2plY3QtY29udGFpbmVyID4gc3BhbiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uZGVsZXRlLXByb2plY3QtYnRuIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnNpZGViYXItcHJvamVjdC1jb250YWluZXI6aG92ZXIgPiAuZGVsZXRlLXByb2plY3QtYnRuIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5kZWxldGUtcHJvamVjdC1idG46aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5tYWluLWNvbnRhaW5lci5vdXRlciB7XFxuICAgIGdyaWQtYXJlYTogbWFpbjtcXG59XFxuXFxuLm1haW4tY29udGFpbmVyLmlubmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5bY3VycmVudFByb2plY3QgPSAnJ10ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4udG9kby1kaXNwbGF5IHtcXG4gICAgcGFkZGluZzogNXZ3O1xcbn1cXG5cXG4udG8tZG8tY29udGFpbmVyIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMHB4IDFmciBtaW4tY29udGVudDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxuICAgIGhlaWdodDogMzVweDtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogNTB2dztcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLnRvLWRvLWNvbnRhaW5lciA+IGRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4udG8tZG8tY29udGFpbmVyID4gLnRleHQtY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jaGVja2JveC1jb250YWluZXIge1xcbiAgICBwYWRkaW5nOiAwIDVweDtcXG59XFxuXFxuLnRvLWRvLWNvbnRhaW5lciA+IC51cmdlbmN5LWluZGljYXRvciB7XFxuICAgIHdpZHRoOiAxNXB4O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG5bcHJpb3JpdHk9J1VyZ2VudCddIHtcXG4gICAgYmFja2dyb3VuZDogcmVkO1xcbn1cXG5cXG5bcHJpb3JpdHk9J1VyZ2VudCddOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6IFxcXCJVXFxcIjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuW3ByaW9yaXR5PSdOb3JtYWwnXSB7XFxuICAgIGJhY2tncm91bmQ6IHJnYigyMDksIDIwOSwgMCk7XFxufVxcblxcbltwcmlvcml0eT0nTm9ybWFsJ106OmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIk5cXFwiO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5bcHJpb3JpdHk9J0xvdyddIHtcXG4gICAgYmFja2dyb3VuZDogZ3JlZW47XFxufVxcblxcbltwcmlvcml0eT0nTG93J106OmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIkxcXFwiO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxVQUFVO0lBQ1YscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixhQUFhO0lBQ2IsbUNBQW1DO0lBQ25DOztBQUVKOztBQUVBO0lBQ0ksa0NBQWtDO0lBQ2xDLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2Qiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCOzs7QUFHQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLHFDQUFxQztJQUNyQyxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsMEJBQTBCO0lBQzFCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsMkNBQTJDO0lBQzNDLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7QUFDdkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvJmRpc3BsYXk9c3dhcCcpO1xcblxcbjpyb290IHtcXG4gICAgLS1oaWdobGlnaHQtY29sb3I6IHJnYig2MSwgMTg1LCAxOTkpO1xcbn1cXG5cXG4qIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XFxufVxcblxcbi5jb250ZW50LWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZTogYXV0byAxZnIgLyAyNTBweCAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcXCJoZWFkZXIgaGVhZGVyXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICBcXFwic2lkZWJhciBtYWluXFxcIlxcbn1cXG5cXG4uaGVhZGVyIHtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0taGlnaGxpZ2h0LWNvbG9yKTtcXG4gICAgaGVpZ2h0OiAxMHZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAwIDI1cHg7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAycHggMXB4O1xcbiAgICBncmlkLWFyZWE6IGhlYWRlcjtcXG59XFxuXFxuLmhlYWRlciA+IHNwYW4ge1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBwYWRkaW5nOiAwIDEwcHg7XFxufVxcblxcbi5zaWRlYmFyLm91dGVyIHtcXG4gICAgZ3JpZC1hcmVhOiBzaWRlYmFyO1xcbiAgICBib3gtc2hhZG93OiAwIDAgMXB4IDFweDtcXG4gICAgYmFja2dyb3VuZDogcmdiKDI0MCwgMjQwLCAyNDApO1xcbn1cXG5cXG4uc2lkZWJhci5pbm5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBhZGRpbmc6IDEwcHggMTBweDtcXG59XFxuXFxuXFxuYnV0dG9uOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZm9ybS1jb250YWluZXItb3V0ZXIge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42Nik7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5mb3JtLWNvbnRhaW5lci1pbm5lciB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICBtaW4td2lkdGg6IDMwdnc7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbmZvcm0ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlOiBhdXRvIC8gMTAwJTtcXG4gICAgcm93LWdhcDogMTBweDtcXG59XFxuXFxuLmZvcm0tYnV0dG9uIHtcXG4gICAgd2lkdGg6IDQ1JTtcXG59XFxuXFxuLmJ1dHRvbi1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5zaWRlYmFyLXByb2plY3QtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gICAgbWFyZ2luOiA1cHggMDtcXG4gICAgcGFkZGluZzogMCA1cHg7XFxufVxcblxcbi5zaWRlYmFyLXByb2plY3QtY29udGFpbmVyID4gc3BhbiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uZGVsZXRlLXByb2plY3QtYnRuIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnNpZGViYXItcHJvamVjdC1jb250YWluZXI6aG92ZXIgPiAuZGVsZXRlLXByb2plY3QtYnRuIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5kZWxldGUtcHJvamVjdC1idG46aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5tYWluLWNvbnRhaW5lci5vdXRlciB7XFxuICAgIGdyaWQtYXJlYTogbWFpbjtcXG59XFxuXFxuLm1haW4tY29udGFpbmVyLmlubmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5bY3VycmVudFByb2plY3QgPSAnJ10ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4udG9kby1kaXNwbGF5IHtcXG4gICAgcGFkZGluZzogNXZ3O1xcbn1cXG5cXG4udG8tZG8tY29udGFpbmVyIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMHB4IDFmciBtaW4tY29udGVudDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxuICAgIGhlaWdodDogMzVweDtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogNTB2dztcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLnRvLWRvLWNvbnRhaW5lciA+IGRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4udG8tZG8tY29udGFpbmVyID4gLnRleHQtY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jaGVja2JveC1jb250YWluZXIge1xcbiAgICBwYWRkaW5nOiAwIDVweDtcXG59XFxuXFxuLnRvLWRvLWNvbnRhaW5lciA+IC51cmdlbmN5LWluZGljYXRvciB7XFxuICAgIHdpZHRoOiAxNXB4O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG5bcHJpb3JpdHk9J1VyZ2VudCddIHtcXG4gICAgYmFja2dyb3VuZDogcmVkO1xcbn1cXG5cXG5bcHJpb3JpdHk9J1VyZ2VudCddOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6IFxcXCJVXFxcIjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuW3ByaW9yaXR5PSdOb3JtYWwnXSB7XFxuICAgIGJhY2tncm91bmQ6IHJnYigyMDksIDIwOSwgMCk7XFxufVxcblxcbltwcmlvcml0eT0nTm9ybWFsJ106OmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIk5cXFwiO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5bcHJpb3JpdHk9J0xvdyddIHtcXG4gICAgYmFja2dyb3VuZDogZ3JlZW47XFxufVxcblxcbltwcmlvcml0eT0nTG93J106OmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIkxcXFwiO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBoZWFkZXJJbWFnZUZpbGUgZnJvbSAnLi9yZWNlaXB0LnBuZydcbmltcG9ydCB7cHJvamVjdHMsIGRlbGV0ZVByb2plY3QsIGRlbGV0ZUFuZFJlcmVuZGVyVG9Eb0xpc3R9IGZyb20gJy4vaW5kZXgnXG5sZXQgY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudC1jb250YWluZXJcIilcblxuY29uc3QgY3JlYXRlSGVhZGVyICA9IChmdW5jdGlvbigpe1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpXG5cbiAgICBjb25zdCBoZWFkZXJJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgaGVhZGVySW1hZ2Uuc3JjID0gaGVhZGVySW1hZ2VGaWxlXG5cbiAgICBjb25zdCBoZWFkZXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgaGVhZGVyVGV4dC5pbm5lclRleHQgPSAnVG8tZG8gTGlzdCdcblxuICAgIGhlYWRlci5hcHBlbmQoaGVhZGVySW1hZ2UsIGhlYWRlclRleHQpXG4gICAgY29udGVudENvbnRhaW5lci5hcHBlbmQoaGVhZGVyKVxufSkoKVxuXG5jb25zdCBjcmVhdGVTaWRlYmFyID0gKGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IHNpZGViYXJPdXRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgc2lkZWJhck91dGVyLmNsYXNzTGlzdC5hZGQoJ3NpZGViYXInLCAnb3V0ZXInKVxuXG4gICAgY29uc3Qgc2lkZUJhcklubmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBzaWRlQmFySW5uZXIuY2xhc3NMaXN0LmFkZCgnc2lkZWJhcicsICdpbm5lcicpXG5cbiAgICBzaWRlYmFyT3V0ZXIuYXBwZW5kKHNpZGVCYXJJbm5lcilcbiAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZChzaWRlYmFyT3V0ZXIpXG5cbiAgICBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBwcm9qZWN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtY29udGFpbmVyJylcblxuICAgIGNvbnN0IGFkZFByb2plY3RCdG4gID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBhZGRQcm9qZWN0QnRuLmNsYXNzTGlzdC5hZGQoJ2J0bicpXG4gICAgYWRkUHJvamVjdEJ0bi50ZXh0Q29udGVudCA9ICdOZXcgUHJvamVjdCdcbiAgICBcbiAgICBzaWRlQmFySW5uZXIuYXBwZW5kKHByb2plY3RDb250YWluZXIsIGFkZFByb2plY3RCdG4pXG5cbiAgICBmdW5jdGlvbiByZW5kZXJQcm9qZWN0c1RvU2lkZWJhcigpIHtcbiAgICAgICAgZm9yIChjb25zdCBwcm9qZWN0IGluIHByb2plY3RzLmxpc3QpIHtcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbcHJvamVjdD1cIiR7cHJvamVjdHMubGlzdFtwcm9qZWN0XS5wcm9qZWN0TmFtZX1cIl1gKSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3ROYW1lQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgICAgICAgICAgICAgIHByb2plY3ROYW1lQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3NpZGViYXItcHJvamVjdC1jb250YWluZXInKVxuICAgICAgICAgICAgICAgIHByb2plY3ROYW1lQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgncHJvamVjdCcsIGAke3Byb2plY3RzLmxpc3RbcHJvamVjdF0ucHJvamVjdE5hbWV9YClcbiAgICAgICAgICAgICAgICBwcm9qZWN0TmFtZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldFByb2plY3QgPSBlLnRhcmdldC5wYXJlbnROb2RlLmdldEF0dHJpYnV0ZSgncHJvamVjdCcpXG4gICAgICAgICAgICAgICAgICAgIG1haW5Db250YWluZXIuc2V0QWRkVG9kb0J1dHRvblByb2plY3QodGFyZ2V0UHJvamVjdClcbiAgICAgICAgICAgICAgICAgICAgbWFpbkNvbnRhaW5lci5yZW5kZXJQcm9qZWN0VG9kb3ModGFyZ2V0UHJvamVjdClcbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgY29uc3QgZGVsZXRlUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgICAgICAgZGVsZXRlUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiBkZWxldGVQcm9qZWN0KGUudGFyZ2V0KSlcblxuICAgICAgICAgICAgICAgIHByb2plY3ROYW1lLmlubmVyVGV4dCA9IHByb2plY3RzLmxpc3RbcHJvamVjdF0ucHJvamVjdE5hbWVcbiAgICAgICAgICAgICAgICBkZWxldGVQcm9qZWN0QnV0dG9uLmlubmVyVGV4dCA9ICdYJ1xuICAgICAgICAgICAgICAgIGRlbGV0ZVByb2plY3RCdXR0b24uY2xhc3NMaXN0LmFkZCgnZGVsZXRlLXByb2plY3QtYnRuJylcbiAgICAgICAgICAgICAgICBwcm9qZWN0TmFtZUNvbnRhaW5lci5hcHBlbmQocHJvamVjdE5hbWUsIGRlbGV0ZVByb2plY3RCdXR0b24pXG4gICAgICAgICAgICAgICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmQocHJvamVjdE5hbWVDb250YWluZXIpXG4gICAgICAgICAgICB9IFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGVsZXRlUHJvamVjdEZyb21TaWRlYmFyKGNsaWNrVGFyZ2V0KSB7XG4gICAgICAgIGNsaWNrVGFyZ2V0LnBhcmVudEVsZW1lbnQucmVtb3ZlKClcbiAgICB9XG4gICAgcmV0dXJuIHthZGRQcm9qZWN0QnRuLCByZW5kZXJQcm9qZWN0c1RvU2lkZWJhciwgZGVsZXRlUHJvamVjdEZyb21TaWRlYmFyfVxufSkoKVxuXG5jb25zdCBtYWluQ29udGFpbmVyID0gKGZ1bmN0aW9uKCl7XG4gICAgY29uc3QgbWFpbkNvbnRhaW5lck91dGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBtYWluQ29udGFpbmVyT3V0ZXIuY2xhc3NMaXN0LmFkZCgnbWFpbi1jb250YWluZXInLCAnb3V0ZXInKVxuICAgIGNvbnN0IG1haW5Db250YWluZXJJbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgbWFpbkNvbnRhaW5lcklubmVyLmNsYXNzTGlzdC5hZGQoJ21haW4tY29udGFpbmVyJywgJ2lubmVyJylcblxuICAgIGNvbnN0IHRvZG9EaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB0b2RvRGlzcGxheS5jbGFzc0xpc3QuYWRkKCd0b2RvLWRpc3BsYXknKVxuICAgIGNvbnN0IG5ld1RvZG9CdXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIG5ld1RvZG9CdXR0b25Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnYnV0dG9uLWNvbnRhaW5lcicpXG4gICAgY29uc3QgbmV3VG9kb0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgbmV3VG9kb0J1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJylcbiAgICBuZXdUb2RvQnV0dG9uLmlubmVyVGV4dCA9ICdBZGQgVG8tZG8nXG4gICAgbmV3VG9kb0J1dHRvbi5zZXRBdHRyaWJ1dGUoJ2N1cnJlbnRQcm9qZWN0JywgJycpXG5cbiAgICBuZXdUb2RvQnV0dG9uQ29udGFpbmVyLmFwcGVuZChuZXdUb2RvQnV0dG9uKVxuICAgIG1haW5Db250YWluZXJJbm5lci5hcHBlbmQodG9kb0Rpc3BsYXksIG5ld1RvZG9CdXR0b25Db250YWluZXIpXG4gICAgbWFpbkNvbnRhaW5lck91dGVyLmFwcGVuZChtYWluQ29udGFpbmVySW5uZXIpXG4gICAgY29udGVudENvbnRhaW5lci5hcHBlbmQobWFpbkNvbnRhaW5lck91dGVyKVxuXG4gICAgZnVuY3Rpb24gc2V0QWRkVG9kb0J1dHRvblByb2plY3QocHJvamVjdE5hbWUpIHtcbiAgICAgICAgbmV3VG9kb0J1dHRvbi5zZXRBdHRyaWJ1dGUoJ2N1cnJlbnRQcm9qZWN0JywgcHJvamVjdE5hbWUpXG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIHJlbW92ZUFsbENoaWxkRWxlbWVudHMoKSB7XG4gICAgICAgIHdoaWxlICh0b2RvRGlzcGxheS5oYXNDaGlsZE5vZGVzKCkpIHtcbiAgICAgICAgICAgIHRvZG9EaXNwbGF5LnJlbW92ZUNoaWxkKHRvZG9EaXNwbGF5Lmxhc3RDaGlsZClcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiByZW5kZXJQcm9qZWN0VG9kb3MocHJvamVjdE5hbWUpIHtcbiAgICAgICAgY29uc3QgdG9Eb0FycmF5ID0gcHJvamVjdHMubGlzdFtwcm9qZWN0TmFtZV0udG9Eb0l0ZW1zXG4gICAgICAgIHJlbW92ZUFsbENoaWxkRWxlbWVudHMoKVxuICAgICAgICBcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b0RvQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHRvRG9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgdG9Eb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0by1kby1jb250YWluZXInKVxuICAgICAgICAgICAgdG9Eb0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ3RvLWRvLWlkJywgdG9Eb0FycmF5W2ldLnRvRG9JZClcbiAgICAgICAgICAgIGNvbnN0IHVyZ2VuY3lJbmRpY2F0b3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgdXJnZW5jeUluZGljYXRvci5jbGFzc0xpc3QuYWRkKCd1cmdlbmN5LWluZGljYXRvcicpXG4gICAgICAgICAgICB1cmdlbmN5SW5kaWNhdG9yLnNldEF0dHJpYnV0ZSgncHJpb3JpdHknLCB0b0RvQXJyYXlbaV0ucHJpb3JpdHkpXG4gICAgICAgICAgICBjb25zdCB0ZXh0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgICAgIHRleHRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndGV4dC1jb250YWluZXInKVxuICAgICAgICAgICAgY29uc3QgY2hlY2tCb3hDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgY2hlY2tCb3hDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY2hlY2tib3gtY29udGFpbmVyJylcblxuICAgICAgICAgICAgY29uc3QgdG9kb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgICAgICAgICB0b2RvVGl0bGUuaW5uZXJUZXh0ID0gdG9Eb0FycmF5W2ldLnRpdGxlXG4gICAgICAgICAgICBjb25zdCB0b2RvRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgICAgICAgICAgdG9kb0R1ZURhdGUuaW5uZXJUZXh0ID0gYER1ZSBkYXRlOiAke3RvRG9BcnJheVtpXS5kdWVEYXRlfWBcblxuICAgICAgICAgICAgY29uc3QgY2hlY2tCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgICAgICAgICBjaGVja0JveC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKVxuICAgICAgICAgICAgY2hlY2tCb3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGV2ZW50KSA9PiBkZWxldGVBbmRSZXJlbmRlclRvRG9MaXN0KGV2ZW50KSlcblxuICAgICAgICAgICAgY2hlY2tCb3hDb250YWluZXIuYXBwZW5kKGNoZWNrQm94KVxuICAgICAgICAgICAgdGV4dENvbnRhaW5lci5hcHBlbmQodG9kb1RpdGxlLCB0b2RvRHVlRGF0ZSlcbiAgICAgICAgICAgIHRvRG9Db250YWluZXIuYXBwZW5kKHVyZ2VuY3lJbmRpY2F0b3IsIHRleHRDb250YWluZXIsIGNoZWNrQm94Q29udGFpbmVyKVxuICAgICAgICAgICAgdG9kb0Rpc3BsYXkuYXBwZW5kKHRvRG9Db250YWluZXIpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRUb0RvSW5mb3JtYXRpb24oZXZlbnQpIHtcbiAgICAgICAgY29uc3QgdG9Eb0NvbnRhaW5lciA9IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnRcbiAgICAgICAgY29uc3QgdG9Eb0lkID0gdG9Eb0NvbnRhaW5lci5nZXRBdHRyaWJ1dGUoJ3RvLWRvLWlkJylcbiAgICAgICAgY29uc3QgY3VycmVudFByb2plY3QgPSBuZXdUb2RvQnV0dG9uLmdldEF0dHJpYnV0ZSgnY3VycmVudHByb2plY3QnKVxuICAgICAgICByZXR1cm4ge2N1cnJlbnRQcm9qZWN0LCB0b0RvSWR9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtzZXRBZGRUb2RvQnV0dG9uUHJvamVjdCwgcmVuZGVyUHJvamVjdFRvZG9zLCBuZXdUb2RvQnV0dG9uLCBnZXRUb0RvSW5mb3JtYXRpb259XG59KSgpXG5cbmNvbnN0IG5ld1Byb2plY3RGb3JtID0gKGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGZvcm1Db250YWluZXJPdXRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZm9ybUNvbnRhaW5lck91dGVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udGFpbmVyLW91dGVyJylcbiAgICBjb25zdCBmb3JtQ29udGFpbmVySW5uZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGZvcm1Db250YWluZXJJbm5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRhaW5lci1pbm5lcicpXG5cbiAgICBjb25zdCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKVxuICAgIGNvbnN0IHByb2plY3RGb3JtTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgcHJvamVjdEZvcm1MYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdwcm9qZWN0TmFtZScpXG4gICAgY29uc3QgcHJvamVjdEZvcm1JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICBwcm9qZWN0Rm9ybUlucHV0LnR5cGUgPSAndGV4dCdcbiAgICBwcm9qZWN0Rm9ybUlucHV0LmlkID0gJ3Byb2plY3ROYW1lJ1xuICAgIHByb2plY3RGb3JtTGFiZWwuaW5uZXJUZXh0ID0gJ1Byb2plY3QgTmFtZSdcblxuICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgc3VibWl0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tYnV0dG9uJywgJ3Byb2plY3Qtc3VibWl0LWJ0bicpXG4gICAgc3VibWl0QnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKVxuICAgIHN1Ym1pdEJ1dHRvbi5pbm5lclRleHQgPSAnU3VibWl0J1xuXG4gICAgY29uc3QgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBjYW5jZWxCdXR0b24uY2xhc3NMaXN0LmFkZCgnZm9ybS1idXR0b24nLCAncHJvamVjdC1jYW5jZWwtYnRuJylcbiAgICBjYW5jZWxCdXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpXG4gICAgY2FuY2VsQnV0dG9uLmlubmVyVGV4dCA9ICdDYW5jZWwnXG5cbiAgICBjb25zdCBidXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGJ1dHRvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdidXR0b24tY29udGFpbmVyJylcblxuICAgIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmQoc3VibWl0QnV0dG9uLCBjYW5jZWxCdXR0b24pXG4gICAgcHJvamVjdEZvcm0uYXBwZW5kKHByb2plY3RGb3JtTGFiZWwsIHByb2plY3RGb3JtSW5wdXQsIGJ1dHRvbkNvbnRhaW5lcilcbiAgICBmb3JtQ29udGFpbmVyT3V0ZXIuYXBwZW5kKGZvcm1Db250YWluZXJJbm5lcilcbiAgICBmb3JtQ29udGFpbmVySW5uZXIuYXBwZW5kKHByb2plY3RGb3JtKVxuICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kKGZvcm1Db250YWluZXJPdXRlcilcblxuICAgIGZ1bmN0aW9uIHNob3dQcm9qZWN0Rm9ybSgpIHtcbiAgICAgICAgZm9ybUNvbnRhaW5lck91dGVyLnN0eWxlLmRpc3BsYXkgPSAnZmxleCdcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoaWRlUHJvamVjdEZvcm0oKSB7XG4gICAgICAgIGNsZWFyUHJvamVjdEZvcm1JbnB1dCgpXG4gICAgICAgIGZvcm1Db250YWluZXJPdXRlci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xlYXJQcm9qZWN0Rm9ybUlucHV0KCkge1xuICAgICAgICBwcm9qZWN0Rm9ybUlucHV0LnZhbHVlID0gXCJcIlxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFByb2plY3RGb3JtSW5wdXRWYWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIHByb2plY3RGb3JtSW5wdXQudmFsdWVcbiAgICB9XG5cbiAgICByZXR1cm4ge3Nob3dQcm9qZWN0Rm9ybSwgaGlkZVByb2plY3RGb3JtLCBjYW5jZWxCdXR0b24sIHN1Ym1pdEJ1dHRvbiwgZ2V0UHJvamVjdEZvcm1JbnB1dFZhbHVlfVxufSkoKVxuXG5jb25zdCBuZXdUb0RvRm9ybSA9IChmdW5jdGlvbigpIHtcbiAgICBjb25zdCBmb3JtQ29udGFpbmVyT3V0ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGZvcm1Db250YWluZXJPdXRlci5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRhaW5lci1vdXRlcicpXG4gICAgY29uc3QgZm9ybUNvbnRhaW5lcklubmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBmb3JtQ29udGFpbmVySW5uZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250YWluZXItaW5uZXInKVxuXG4gICAgY29uc3QgdG9Eb0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJylcblxuICAgIGNvbnN0IHRpdGxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgdGl0bGVMYWJlbC5pbm5lclRleHQgPSAnVGl0bGUnXG4gICAgdGl0bGVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICd0by1kby10aXRsZScpXG4gICAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICB0aXRsZUlucHV0LnJlcXVpcmVkID0gdHJ1ZVxuICAgIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKVxuICAgIHRpdGxlSW5wdXQuaWQgPSAndG8tZG8tdGl0bGUnXG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGRlc2NyaXB0aW9uTGFiZWwuaW5uZXJUZXh0ID0gJ0Rlc2NyaXB0aW9uJ1xuICAgIGRlc2NyaXB0aW9uTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAndG8tZG8tZGVzY3JpcHRpb24nKVxuICAgIGNvbnN0IGRlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpXG4gICAgZGVzY3JpcHRpb25JbnB1dC5pZCA9ICd0by1kby1kZXNjcmlwdGlvbidcblxuICAgIGNvbnN0IGR1ZURhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBkdWVEYXRlTGFiZWwuaW5uZXJUZXh0ID0gJ0R1ZSBkYXRlJ1xuICAgIGR1ZURhdGVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICd0by1kby1kdWUtZGF0ZScpXG4gICAgY29uc3QgZHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIGR1ZURhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpXG4gICAgZHVlRGF0ZUlucHV0LmlkID0gJ3RvLWRvLWR1ZS1kYXRlJ1xuXG4gICAgY29uc3QgcHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgcHJpb3JpdHlMYWJlbC5pbm5lclRleHQgPSAnUHJpb3JpdHknXG4gICAgcHJpb3JpdHlMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdwcmlvcml0eScpXG4gICAgY29uc3QgcHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpXG5cbiAgICBjb25zdCBoaWdoUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKVxuICAgIGhpZ2hQcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ1VyZ2VudCcpXG4gICAgaGlnaFByaW9yaXR5LnRleHRDb250ZW50ID0gJ1VyZ2VudCdcbiAgICBjb25zdCBub3JtYWxQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpXG4gICAgbm9ybWFsUHJpb3JpdHkuc2V0QXR0cmlidXRlKCd2YWx1ZScsICdOb3JtYWwnKVxuICAgIG5vcm1hbFByaW9yaXR5LnRleHRDb250ZW50ID0gJ05vcm1hbCdcbiAgICBjb25zdCBsb3dQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpXG4gICAgbG93UHJpb3JpdHkuc2V0QXR0cmlidXRlKCd2YWx1ZScsICdMb3cnKVxuICAgIGxvd1ByaW9yaXR5LnRleHRDb250ZW50ID0gJ0xvdydcblxuICAgIHByaW9yaXR5SW5wdXQuYXBwZW5kKGhpZ2hQcmlvcml0eSwgbm9ybWFsUHJpb3JpdHksIGxvd1ByaW9yaXR5KVxuXG4gICAgY29uc3QgYnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBidXR0b25Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnYnV0dG9uLWNvbnRhaW5lcicpXG5cbiAgICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIHN1Ym1pdEJ1dHRvbi5pbm5lclRleHQgPSAnU3VibWl0J1xuICAgIHN1Ym1pdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJylcbiAgICBzdWJtaXRCdXR0b24uY2xhc3NMaXN0LmFkZCgnZm9ybS1idXR0b24nKVxuXG4gICAgY29uc3QgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBjYW5jZWxCdXR0b24uaW5uZXJUZXh0ID0gJ0NhbmNlbCdcbiAgICBjYW5jZWxCdXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpXG4gICAgY2FuY2VsQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tYnV0dG9uJylcblxuICAgIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmQoc3VibWl0QnV0dG9uLCBjYW5jZWxCdXR0b24pXG4gICAgdG9Eb0Zvcm0uYXBwZW5kKHRpdGxlTGFiZWwsIHRpdGxlSW5wdXQsIGRlc2NyaXB0aW9uTGFiZWwsIGRlc2NyaXB0aW9uSW5wdXQsIGR1ZURhdGVMYWJlbCwgZHVlRGF0ZUlucHV0LCBwcmlvcml0eUxhYmVsLCBwcmlvcml0eUlucHV0LCAgYnV0dG9uQ29udGFpbmVyKVxuICAgIGZvcm1Db250YWluZXJJbm5lci5hcHBlbmQodG9Eb0Zvcm0pXG4gICAgZm9ybUNvbnRhaW5lck91dGVyLmFwcGVuZChmb3JtQ29udGFpbmVySW5uZXIpXG4gICAgY29udGVudENvbnRhaW5lci5hcHBlbmQoZm9ybUNvbnRhaW5lck91dGVyKVxuXG4gICAgZnVuY3Rpb24gc2hvd1RvRG9Gb3JtKCkge1xuICAgICAgICBmb3JtQ29udGFpbmVyT3V0ZXIuc3R5bGUuZGlzcGxheSA9ICdmbGV4J1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhpZGVUb0RvRm9ybSgpIHtcbiAgICAgICAgZm9ybUNvbnRhaW5lck91dGVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbGVhcklucHV0c0FuZEhpZGVGb3JtKCkge1xuICAgICAgICB0aXRsZUlucHV0LnZhbHVlID0gXCJcIlxuICAgICAgICBkZXNjcmlwdGlvbklucHV0LnZhbHVlID0gXCJcIlxuICAgICAgICBkdWVEYXRlSW5wdXQudmFsdWUgPSBcIlwiXG4gICAgICAgIGhpZGVUb0RvRm9ybSgpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0Rm9ybVZhbHVlcygpIHtcbiAgICAgICAgY29uc3QgdGl0bGUgPSB0aXRsZUlucHV0LnZhbHVlXG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb25JbnB1dC52YWx1ZVxuICAgICAgICBjb25zdCBkdWVEYXRlID0gZHVlRGF0ZUlucHV0LnZhbHVlXG4gICAgICAgIGNvbnN0IHByaW9yaXR5ID0gcHJpb3JpdHlJbnB1dC52YWx1ZVxuXG4gICAgICAgIHJldHVybiB7dGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eX1cbiAgICB9XG5cbiAgICByZXR1cm4ge3Nob3dUb0RvRm9ybSwgaGlkZVRvRG9Gb3JtLCBjYW5jZWxCdXR0b24sIHN1Ym1pdEJ1dHRvbiwgY2xlYXJJbnB1dHNBbmRIaWRlRm9ybSwgZ2V0Rm9ybVZhbHVlc31cbn0pKClcblxuZXhwb3J0IHtjcmVhdGVIZWFkZXIsIGNyZWF0ZVNpZGViYXIsIG5ld1Byb2plY3RGb3JtLCBtYWluQ29udGFpbmVyLCBuZXdUb0RvRm9ybX1cblxuIiwiaW1wb3J0IGNzcyBmcm9tIFwiLi9zdHlsZS5jc3NcIlxuaW1wb3J0IHtjcmVhdGVIZWFkZXIsIGNyZWF0ZVNpZGViYXIsIG5ld1Byb2plY3RGb3JtLCBtYWluQ29udGFpbmVyLCBuZXdUb0RvRm9ybX0gZnJvbSBcIi4vRE9NXCJcbmltcG9ydCB7IGFkZCB9IGZyb20gXCJkYXRlLWZuc1wiXG5cbmNyZWF0ZVNpZGViYXJcbmNyZWF0ZUhlYWRlclxubmV3UHJvamVjdEZvcm1cblxuY29uc3QgZXZlbnRMaXN0ZW5lcnMgPSAoZnVuY3Rpb24oKSB7XG4gICAgY3JlYXRlU2lkZWJhci5hZGRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbmV3UHJvamVjdEZvcm0uc2hvd1Byb2plY3RGb3JtKVxuICAgIG5ld1Byb2plY3RGb3JtLmNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG5ld1Byb2plY3RGb3JtLmhpZGVQcm9qZWN0Rm9ybSlcbiAgICBuZXdQcm9qZWN0Rm9ybS5zdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGROZXdQcm9qZWN0KVxuICAgIG1haW5Db250YWluZXIubmV3VG9kb0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG5ld1RvRG9Gb3JtLnNob3dUb0RvRm9ybSlcbiAgICBuZXdUb0RvRm9ybS5jYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBuZXdUb0RvRm9ybS5jbGVhcklucHV0c0FuZEhpZGVGb3JtKVxuICAgIG5ld1RvRG9Gb3JtLnN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZE5ld1RvRG8pXG59KSgpXG5cbmZ1bmN0aW9uIHNhdmVQcm9qZWN0c1RvTG9jYWxTdG9yYWdlKCkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0c2xpc3QnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cy5saXN0KSlcbn1cblxuZnVuY3Rpb24gZ2V0UHJvamVjdHNGcm9tTG9jYWxTdG9yYWdlKCkge1xuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHNsaXN0JykgIT09IG51bGwpXG4gICAgcHJvamVjdHMubGlzdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzbGlzdCcpKVxuICAgIHJldHJpZXZlQ3VycmVudFRvRG9JZCgpXG59XG5cbmZ1bmN0aW9uIHNhdmVDdXJyZW50VG9Eb0lkKCkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjdXJyZW50VG9Eb0lkJywgSlNPTi5zdHJpbmdpZnkocHJvamVjdHMuY3VycmVudFRvRG9JZCkpXG59XG5cbmZ1bmN0aW9uIHJldHJpZXZlQ3VycmVudFRvRG9JZCgpIHtcbiAgICBsZXQgc2F2ZWRDdXJyZW50VG9Eb0lkID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY3VycmVudFRvRG9JZCcpKVxuICAgIHByb2plY3RzLmN1cnJlbnRUb0RvSWQgPSBzYXZlZEN1cnJlbnRUb0RvSWRcbn1cblxuZnVuY3Rpb24gYWRkTmV3UHJvamVjdCgpIHtcbiAgICBpZiAobmV3UHJvamVjdEZvcm0uZ2V0UHJvamVjdEZvcm1JbnB1dFZhbHVlKCkgPT09IFwiXCIpIHtcbiAgICAgICAgYWxlcnQoJ1Byb2plY3QgbmFtZSBjYW5ub3QgYmUgZW1wdHkhJylcbiAgICB9IGVsc2Uge1xuICAgICAgICBwcm9qZWN0cy5hZGQobmV3UHJvamVjdEZvcm0uZ2V0UHJvamVjdEZvcm1JbnB1dFZhbHVlKCkpXG4gICAgICAgIGNyZWF0ZVNpZGViYXIucmVuZGVyUHJvamVjdHNUb1NpZGViYXIoKVxuICAgICAgICBuZXdQcm9qZWN0Rm9ybS5oaWRlUHJvamVjdEZvcm0oKVxuICAgICAgICBzYXZlUHJvamVjdHNUb0xvY2FsU3RvcmFnZSgpXG4gICAgfVxufVxuXG5mdW5jdGlvbiBjb25maXJtRGVsZXRlUHJvamVjdCgpIHtcbiAgICByZXR1cm4gY29uZmlybSgnRGVsZXRlIHRoaXMgcHJvamVjdD8gVGhpcyBpcyBhbiBpcnJldmVyc2libGUgYWN0aW9uLicpXG59XG5cbmZ1bmN0aW9uIGRlbGV0ZVByb2plY3QoY2xpY2tUYXJnZXQpIHtcbiAgICBpZiAoY29uZmlybURlbGV0ZVByb2plY3QoKSA9PT0gdHJ1ZSkge1xuICAgICAgICBsZXQgcHJvamVjdFRvRGVsZXRlID0gY2xpY2tUYXJnZXQucGFyZW50Tm9kZS5nZXRBdHRyaWJ1dGUoJ3Byb2plY3QnKVxuICAgICAgICBwcm9qZWN0cy5kZWxldGUocHJvamVjdFRvRGVsZXRlKVxuICAgICAgICBjcmVhdGVTaWRlYmFyLmRlbGV0ZVByb2plY3RGcm9tU2lkZWJhcihjbGlja1RhcmdldClcbiAgICAgICAgc2F2ZVByb2plY3RzVG9Mb2NhbFN0b3JhZ2UoKVxuICAgIH1cbn1cblxuZnVuY3Rpb24gZGVsZXRlQW5kUmVyZW5kZXJUb0RvTGlzdChldmVudCkge1xuICAgIGxldCBjdXJyZW50UHJvamVjdCA9IG1haW5Db250YWluZXIubmV3VG9kb0J1dHRvbi5nZXRBdHRyaWJ1dGUoJ2N1cnJlbnRwcm9qZWN0JylcbiAgICBwcm9qZWN0cy5kZWxldGVUb0RvSXRlbShldmVudClcbiAgICBtYWluQ29udGFpbmVyLnJlbmRlclByb2plY3RUb2RvcyhjdXJyZW50UHJvamVjdClcbn1cblxubGV0IHByb2plY3RzID0ge1xuICAgIGxpc3Q6IHt9LFxuICAgIGN1cnJlbnRUb0RvSWQ6IDAsXG4gICAgYWRkOiBmdW5jdGlvbihwcm9qZWN0TmFtZSkge1xuICAgICAgICBpZiAocHJvamVjdHMubGlzdFtwcm9qZWN0TmFtZV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcHJvamVjdHMubGlzdFtwcm9qZWN0TmFtZV09IG5ldyBwcm9qZWN0KHByb2plY3ROYW1lKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWxlcnQoJ1Byb2plY3QgYWxyZWFkeSBleGlzdHMhJylcbiAgICAgICAgfVxuICAgIH0sXG4gICAgZGVsZXRlOiBmdW5jdGlvbihwcm9qZWN0TmFtZSkge1xuICAgICAgICBkZWxldGUgcHJvamVjdHMubGlzdFtwcm9qZWN0TmFtZV1cbiAgICB9LFxuICAgIGFkZFRvRG9JdGVtOiBmdW5jdGlvbihwcm9qZWN0LCB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XG4gICAgICAgIHByb2plY3QudG9Eb0l0ZW1zLnB1c2gobmV3IHRvRG9JdGVtKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpKVxuICAgIH0sXG4gICAgZGVsZXRlVG9Eb0l0ZW06IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IHRvRG9JbmZvcm1hdGlvbiA9IG1haW5Db250YWluZXIuZ2V0VG9Eb0luZm9ybWF0aW9uKGV2ZW50KVxuICAgICAgICBjb25zdCBwcm9qZWN0ID0gcHJvamVjdHMubGlzdFt0b0RvSW5mb3JtYXRpb24uY3VycmVudFByb2plY3RdXG4gICAgICAgIGNvbnN0IHRvRG9JZCA9IHRvRG9JbmZvcm1hdGlvbi50b0RvSWRcbiAgICAgICAgbGV0IHRhcmdldFRvRGVsZXRlSW5kZXggPSBwcm9qZWN0LnRvRG9JdGVtcy5maW5kSW5kZXgoZWxlbWVudCA9PiBlbGVtZW50LnRvRG9JZCA9PT0gdG9Eb0lkKVxuICAgICAgICBwcm9qZWN0LnRvRG9JdGVtcy5zcGxpY2UodGFyZ2V0VG9EZWxldGVJbmRleCwgMSlcbiAgICAgICAgY29uc29sZS5sb2cocHJvamVjdC50b0RvSXRlbXMpXG4gICAgfVxufVxuXG5mdW5jdGlvbiBhZGROZXdUb0RvKCkge1xuICAgIGxldCBpbnB1dCA9IG5ld1RvRG9Gb3JtLmdldEZvcm1WYWx1ZXMoKVxuICAgIGxldCBjdXJyZW50UHJvamVjdCA9IG1haW5Db250YWluZXIubmV3VG9kb0J1dHRvbi5nZXRBdHRyaWJ1dGUoJ2N1cnJlbnRwcm9qZWN0JylcbiAgICBsZXQgY3VycmVudFByb2plY3RMb2NhdGlvbiA9IHByb2plY3RzLmxpc3RbY3VycmVudFByb2plY3RdXG5cbiAgICBpZiAoaW5wdXQudGl0bGUgPT09ICcnKSB7XG4gICAgICAgIGFsZXJ0KCdQbGVhc2UgZW50ZXIgYSB0aXRsZSBmb3IgdGhlIHRvLWRvLicpXG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coY3VycmVudFByb2plY3RMb2NhdGlvbilcbiAgICAgICAgcHJvamVjdHMuYWRkVG9Eb0l0ZW0oY3VycmVudFByb2plY3RMb2NhdGlvbiwgaW5wdXQudGl0bGUsIGlucHV0LmRlc2NyaXB0aW9uLCBpbnB1dC5kdWVEYXRlLCBpbnB1dC5wcmlvcml0eSlcbiAgICAgICAgbmV3VG9Eb0Zvcm0uY2xlYXJJbnB1dHNBbmRIaWRlRm9ybSgpXG4gICAgICAgIG1haW5Db250YWluZXIucmVuZGVyUHJvamVjdFRvZG9zKGN1cnJlbnRQcm9qZWN0KVxuICAgICAgICBzYXZlUHJvamVjdHNUb0xvY2FsU3RvcmFnZSgpXG4gICAgICAgIHNhdmVDdXJyZW50VG9Eb0lkKClcbiAgICB9XG59XG5cbmNsYXNzIHByb2plY3Qge1xuICAgIGNvbnN0cnVjdG9yKHByb2plY3ROYW1lKSB7XG4gICAgICAgIHRoaXMucHJvamVjdE5hbWUgPSBwcm9qZWN0TmFtZVxuICAgICAgICB0aGlzLnRvRG9JdGVtcyA9IFtdXG4gICAgfVxufVxuXG5jbGFzcyB0b0RvSXRlbSB7XG4gICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGVcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uXG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGVcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5XG4gICAgICAgIHRoaXMudG9Eb0lkID0gcHJvamVjdHMuY3VycmVudFRvRG9JZCsrXG4gICAgfVxufVxuXG5nZXRQcm9qZWN0c0Zyb21Mb2NhbFN0b3JhZ2UoKVxuY3JlYXRlU2lkZWJhci5yZW5kZXJQcm9qZWN0c1RvU2lkZWJhcigpXG5jb25zb2xlLmxvZyhwcm9qZWN0cylcbmNvbnNvbGUubG9nKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0c2xpc3QnKSlcblxuIGV4cG9ydCB7cHJvamVjdHMsIGRlbGV0ZVByb2plY3QsIGRlbGV0ZUFuZFJlcmVuZGVyVG9Eb0xpc3R9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
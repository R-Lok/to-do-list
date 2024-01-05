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
/* harmony export */   "createHeader": () => (/* binding */ createHeader),
/* harmony export */   "createSidebar": () => (/* binding */ createSidebar),
/* harmony export */   "mainContainer": () => (/* binding */ mainContainer),
/* harmony export */   "newProjectForm": () => (/* binding */ newProjectForm),
/* harmony export */   "newToDoForm": () => (/* binding */ newToDoForm)
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
/* harmony export */   "deleteAndRerenderToDoList": () => (/* binding */ deleteAndRerenderToDoList),
/* harmony export */   "deleteProject": () => (/* binding */ deleteProject),
/* harmony export */   "projects": () => (/* binding */ projects)
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
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9ET00uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG8mZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgICAtLWhpZ2hsaWdodC1jb2xvcjogcmdiKDYxLCAxODUsIDE5OSk7XFxufVxcblxcbioge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcXG59XFxuXFxuLmNvbnRlbnQtY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlOiBhdXRvIDFmciAvIDI1MHB4IDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxcImhlYWRlciBoZWFkZXJcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgIFxcXCJzaWRlYmFyIG1haW5cXFwiXFxufVxcblxcbi5oZWFkZXIge1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1oaWdobGlnaHQtY29sb3IpO1xcbiAgICBoZWlnaHQ6IDEwdmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDAgMjVweDtcXG4gICAgYm94LXNoYWRvdzogMCAwIDJweCAxcHg7XFxuICAgIGdyaWQtYXJlYTogaGVhZGVyO1xcbn1cXG5cXG4uaGVhZGVyID4gc3BhbiB7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHBhZGRpbmc6IDAgMTBweDtcXG59XFxuXFxuLnNpZGViYXIub3V0ZXIge1xcbiAgICBncmlkLWFyZWE6IHNpZGViYXI7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAxcHggMXB4O1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjQwLCAyNDAsIDI0MCk7XFxufVxcblxcbi5zaWRlYmFyLmlubmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgcGFkZGluZzogMTBweCAxMHB4O1xcbn1cXG5cXG5cXG5idXR0b246aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5mb3JtLWNvbnRhaW5lci1vdXRlciB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjY2KTtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmZvcm0tY29udGFpbmVyLWlubmVyIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIG1pbi13aWR0aDogMzB2dztcXG4gICAgcGFkZGluZzogMjBweDtcXG59XFxuXFxuZm9ybSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGU6IGF1dG8gLyAxMDAlO1xcbiAgICByb3ctZ2FwOiAxMHB4O1xcbn1cXG5cXG4uZm9ybS1idXR0b24ge1xcbiAgICB3aWR0aDogNDUlO1xcbn1cXG5cXG4uYnV0dG9uLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLnNpZGViYXItcHJvamVjdC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgICBtYXJnaW46IDVweCAwO1xcbiAgICBwYWRkaW5nOiAwIDVweDtcXG59XFxuXFxuLnNpZGViYXItcHJvamVjdC1jb250YWluZXIgPiBzcGFuIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5kZWxldGUtcHJvamVjdC1idG4ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uc2lkZWJhci1wcm9qZWN0LWNvbnRhaW5lcjpob3ZlciA+IC5kZWxldGUtcHJvamVjdC1idG4ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLmRlbGV0ZS1wcm9qZWN0LWJ0bjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm1haW4tY29udGFpbmVyLm91dGVyIHtcXG4gICAgZ3JpZC1hcmVhOiBtYWluO1xcbn1cXG5cXG4ubWFpbi1jb250YWluZXIuaW5uZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbltjdXJyZW50UHJvamVjdCA9ICcnXSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi50b2RvLWRpc3BsYXkge1xcbiAgICBwYWRkaW5nOiA1dnc7XFxufVxcblxcbi50by1kby1jb250YWluZXIge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwcHggMWZyIG1pbi1jb250ZW50O1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcXG4gICAgaGVpZ2h0OiAzNXB4O1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIHdpZHRoOiA1MHZ3O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4udG8tZG8tY29udGFpbmVyID4gZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi50by1kby1jb250YWluZXIgPiAudGV4dC1jb250YWluZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNoZWNrYm94LWNvbnRhaW5lciB7XFxuICAgIHBhZGRpbmc6IDAgNXB4O1xcbn1cXG5cXG4udG8tZG8tY29udGFpbmVyID4gLnVyZ2VuY3ktaW5kaWNhdG9yIHtcXG4gICAgd2lkdGg6IDE1cHg7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbltwcmlvcml0eT0nVXJnZW50J10ge1xcbiAgICBiYWNrZ3JvdW5kOiByZWQ7XFxufVxcblxcbltwcmlvcml0eT0nVXJnZW50J106OmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIlVcXFwiO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5bcHJpb3JpdHk9J05vcm1hbCddIHtcXG4gICAgYmFja2dyb3VuZDogcmdiKDIwOSwgMjA5LCAwKTtcXG59XFxuXFxuW3ByaW9yaXR5PSdOb3JtYWwnXTo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwiTlxcXCI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbltwcmlvcml0eT0nTG93J10ge1xcbiAgICBiYWNrZ3JvdW5kOiBncmVlbjtcXG59XFxuXFxuW3ByaW9yaXR5PSdMb3cnXTo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwiTFxcXCI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7SUFDSSxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsU0FBUztJQUNULFVBQVU7SUFDVixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGFBQWE7SUFDYixtQ0FBbUM7SUFDbkM7O0FBRUo7O0FBRUE7SUFDSSxrQ0FBa0M7SUFDbEMsWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLHVCQUF1QjtJQUN2QixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7QUFDdEI7OztBQUdBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIscUNBQXFDO0lBQ3JDLGFBQWE7QUFDakI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiwwQkFBMEI7SUFDMUIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsY0FBYztBQUNsQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYiwyQ0FBMkM7SUFDM0MsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsV0FBVztJQUNYLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtBQUN2QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG8mZGlzcGxheT1zd2FwJyk7XFxuXFxuOnJvb3Qge1xcbiAgICAtLWhpZ2hsaWdodC1jb2xvcjogcmdiKDYxLCAxODUsIDE5OSk7XFxufVxcblxcbioge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcXG59XFxuXFxuLmNvbnRlbnQtY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlOiBhdXRvIDFmciAvIDI1MHB4IDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxcImhlYWRlciBoZWFkZXJcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgIFxcXCJzaWRlYmFyIG1haW5cXFwiXFxufVxcblxcbi5oZWFkZXIge1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1oaWdobGlnaHQtY29sb3IpO1xcbiAgICBoZWlnaHQ6IDEwdmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDAgMjVweDtcXG4gICAgYm94LXNoYWRvdzogMCAwIDJweCAxcHg7XFxuICAgIGdyaWQtYXJlYTogaGVhZGVyO1xcbn1cXG5cXG4uaGVhZGVyID4gc3BhbiB7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHBhZGRpbmc6IDAgMTBweDtcXG59XFxuXFxuLnNpZGViYXIub3V0ZXIge1xcbiAgICBncmlkLWFyZWE6IHNpZGViYXI7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAxcHggMXB4O1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjQwLCAyNDAsIDI0MCk7XFxufVxcblxcbi5zaWRlYmFyLmlubmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgcGFkZGluZzogMTBweCAxMHB4O1xcbn1cXG5cXG5cXG5idXR0b246aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5mb3JtLWNvbnRhaW5lci1vdXRlciB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjY2KTtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmZvcm0tY29udGFpbmVyLWlubmVyIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIG1pbi13aWR0aDogMzB2dztcXG4gICAgcGFkZGluZzogMjBweDtcXG59XFxuXFxuZm9ybSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGU6IGF1dG8gLyAxMDAlO1xcbiAgICByb3ctZ2FwOiAxMHB4O1xcbn1cXG5cXG4uZm9ybS1idXR0b24ge1xcbiAgICB3aWR0aDogNDUlO1xcbn1cXG5cXG4uYnV0dG9uLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLnNpZGViYXItcHJvamVjdC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgICBtYXJnaW46IDVweCAwO1xcbiAgICBwYWRkaW5nOiAwIDVweDtcXG59XFxuXFxuLnNpZGViYXItcHJvamVjdC1jb250YWluZXIgPiBzcGFuIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5kZWxldGUtcHJvamVjdC1idG4ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uc2lkZWJhci1wcm9qZWN0LWNvbnRhaW5lcjpob3ZlciA+IC5kZWxldGUtcHJvamVjdC1idG4ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLmRlbGV0ZS1wcm9qZWN0LWJ0bjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm1haW4tY29udGFpbmVyLm91dGVyIHtcXG4gICAgZ3JpZC1hcmVhOiBtYWluO1xcbn1cXG5cXG4ubWFpbi1jb250YWluZXIuaW5uZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbltjdXJyZW50UHJvamVjdCA9ICcnXSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi50b2RvLWRpc3BsYXkge1xcbiAgICBwYWRkaW5nOiA1dnc7XFxufVxcblxcbi50by1kby1jb250YWluZXIge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwcHggMWZyIG1pbi1jb250ZW50O1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcXG4gICAgaGVpZ2h0OiAzNXB4O1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIHdpZHRoOiA1MHZ3O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4udG8tZG8tY29udGFpbmVyID4gZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi50by1kby1jb250YWluZXIgPiAudGV4dC1jb250YWluZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNoZWNrYm94LWNvbnRhaW5lciB7XFxuICAgIHBhZGRpbmc6IDAgNXB4O1xcbn1cXG5cXG4udG8tZG8tY29udGFpbmVyID4gLnVyZ2VuY3ktaW5kaWNhdG9yIHtcXG4gICAgd2lkdGg6IDE1cHg7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbltwcmlvcml0eT0nVXJnZW50J10ge1xcbiAgICBiYWNrZ3JvdW5kOiByZWQ7XFxufVxcblxcbltwcmlvcml0eT0nVXJnZW50J106OmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIlVcXFwiO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5bcHJpb3JpdHk9J05vcm1hbCddIHtcXG4gICAgYmFja2dyb3VuZDogcmdiKDIwOSwgMjA5LCAwKTtcXG59XFxuXFxuW3ByaW9yaXR5PSdOb3JtYWwnXTo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwiTlxcXCI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbltwcmlvcml0eT0nTG93J10ge1xcbiAgICBiYWNrZ3JvdW5kOiBncmVlbjtcXG59XFxuXFxuW3ByaW9yaXR5PSdMb3cnXTo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwiTFxcXCI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IGhlYWRlckltYWdlRmlsZSBmcm9tICcuL3JlY2VpcHQucG5nJ1xuaW1wb3J0IHtwcm9qZWN0cywgZGVsZXRlUHJvamVjdCwgZGVsZXRlQW5kUmVyZW5kZXJUb0RvTGlzdH0gZnJvbSAnLi9pbmRleCdcbmxldCBjb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50LWNvbnRhaW5lclwiKVxuXG5jb25zdCBjcmVhdGVIZWFkZXIgID0gKGZ1bmN0aW9uKCl7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJylcblxuICAgIGNvbnN0IGhlYWRlckltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICBoZWFkZXJJbWFnZS5zcmMgPSBoZWFkZXJJbWFnZUZpbGVcblxuICAgIGNvbnN0IGhlYWRlclRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICBoZWFkZXJUZXh0LmlubmVyVGV4dCA9ICdUby1kbyBMaXN0J1xuXG4gICAgaGVhZGVyLmFwcGVuZChoZWFkZXJJbWFnZSwgaGVhZGVyVGV4dClcbiAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZChoZWFkZXIpXG59KSgpXG5cbmNvbnN0IGNyZWF0ZVNpZGViYXIgPSAoZnVuY3Rpb24oKSB7XG4gICAgY29uc3Qgc2lkZWJhck91dGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBzaWRlYmFyT3V0ZXIuY2xhc3NMaXN0LmFkZCgnc2lkZWJhcicsICdvdXRlcicpXG5cbiAgICBjb25zdCBzaWRlQmFySW5uZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHNpZGVCYXJJbm5lci5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyJywgJ2lubmVyJylcblxuICAgIHNpZGViYXJPdXRlci5hcHBlbmQoc2lkZUJhcklubmVyKVxuICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kKHNpZGViYXJPdXRlcilcblxuICAgIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHByb2plY3RDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1jb250YWluZXInKVxuXG4gICAgY29uc3QgYWRkUHJvamVjdEJ0biAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGFkZFByb2plY3RCdG4uY2xhc3NMaXN0LmFkZCgnYnRuJylcbiAgICBhZGRQcm9qZWN0QnRuLnRleHRDb250ZW50ID0gJ05ldyBQcm9qZWN0J1xuICAgIFxuICAgIHNpZGVCYXJJbm5lci5hcHBlbmQocHJvamVjdENvbnRhaW5lciwgYWRkUHJvamVjdEJ0bilcblxuICAgIGZ1bmN0aW9uIHJlbmRlclByb2plY3RzVG9TaWRlYmFyKCkge1xuICAgICAgICBmb3IgKGNvbnN0IHByb2plY3QgaW4gcHJvamVjdHMubGlzdCkge1xuICAgICAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtwcm9qZWN0PVwiJHtwcm9qZWN0cy5saXN0W3Byb2plY3RdLnByb2plY3ROYW1lfVwiXWApID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdE5hbWVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgICAgICAgICAgICAgcHJvamVjdE5hbWVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnc2lkZWJhci1wcm9qZWN0LWNvbnRhaW5lcicpXG4gICAgICAgICAgICAgICAgcHJvamVjdE5hbWVDb250YWluZXIuc2V0QXR0cmlidXRlKCdwcm9qZWN0JywgYCR7cHJvamVjdHMubGlzdFtwcm9qZWN0XS5wcm9qZWN0TmFtZX1gKVxuICAgICAgICAgICAgICAgIHByb2plY3ROYW1lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0UHJvamVjdCA9IGUudGFyZ2V0LnBhcmVudE5vZGUuZ2V0QXR0cmlidXRlKCdwcm9qZWN0JylcbiAgICAgICAgICAgICAgICAgICAgbWFpbkNvbnRhaW5lci5zZXRBZGRUb2RvQnV0dG9uUHJvamVjdCh0YXJnZXRQcm9qZWN0KVxuICAgICAgICAgICAgICAgICAgICBtYWluQ29udGFpbmVyLnJlbmRlclByb2plY3RUb2Rvcyh0YXJnZXRQcm9qZWN0KVxuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICBjb25zdCBkZWxldGVQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgICAgICAgICBkZWxldGVQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IGRlbGV0ZVByb2plY3QoZS50YXJnZXQpKVxuXG4gICAgICAgICAgICAgICAgcHJvamVjdE5hbWUuaW5uZXJUZXh0ID0gcHJvamVjdHMubGlzdFtwcm9qZWN0XS5wcm9qZWN0TmFtZVxuICAgICAgICAgICAgICAgIGRlbGV0ZVByb2plY3RCdXR0b24uaW5uZXJUZXh0ID0gJ1gnXG4gICAgICAgICAgICAgICAgZGVsZXRlUHJvamVjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdkZWxldGUtcHJvamVjdC1idG4nKVxuICAgICAgICAgICAgICAgIHByb2plY3ROYW1lQ29udGFpbmVyLmFwcGVuZChwcm9qZWN0TmFtZSwgZGVsZXRlUHJvamVjdEJ1dHRvbilcbiAgICAgICAgICAgICAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZChwcm9qZWN0TmFtZUNvbnRhaW5lcilcbiAgICAgICAgICAgIH0gXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkZWxldGVQcm9qZWN0RnJvbVNpZGViYXIoY2xpY2tUYXJnZXQpIHtcbiAgICAgICAgY2xpY2tUYXJnZXQucGFyZW50RWxlbWVudC5yZW1vdmUoKVxuICAgIH1cbiAgICByZXR1cm4ge2FkZFByb2plY3RCdG4sIHJlbmRlclByb2plY3RzVG9TaWRlYmFyLCBkZWxldGVQcm9qZWN0RnJvbVNpZGViYXJ9XG59KSgpXG5cbmNvbnN0IG1haW5Db250YWluZXIgPSAoZnVuY3Rpb24oKXtcbiAgICBjb25zdCBtYWluQ29udGFpbmVyT3V0ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIG1haW5Db250YWluZXJPdXRlci5jbGFzc0xpc3QuYWRkKCdtYWluLWNvbnRhaW5lcicsICdvdXRlcicpXG4gICAgY29uc3QgbWFpbkNvbnRhaW5lcklubmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBtYWluQ29udGFpbmVySW5uZXIuY2xhc3NMaXN0LmFkZCgnbWFpbi1jb250YWluZXInLCAnaW5uZXInKVxuXG4gICAgY29uc3QgdG9kb0Rpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHRvZG9EaXNwbGF5LmNsYXNzTGlzdC5hZGQoJ3RvZG8tZGlzcGxheScpXG4gICAgY29uc3QgbmV3VG9kb0J1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgbmV3VG9kb0J1dHRvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdidXR0b24tY29udGFpbmVyJylcbiAgICBjb25zdCBuZXdUb2RvQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBuZXdUb2RvQnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKVxuICAgIG5ld1RvZG9CdXR0b24uaW5uZXJUZXh0ID0gJ0FkZCBUby1kbydcbiAgICBuZXdUb2RvQnV0dG9uLnNldEF0dHJpYnV0ZSgnY3VycmVudFByb2plY3QnLCAnJylcblxuICAgIG5ld1RvZG9CdXR0b25Db250YWluZXIuYXBwZW5kKG5ld1RvZG9CdXR0b24pXG4gICAgbWFpbkNvbnRhaW5lcklubmVyLmFwcGVuZCh0b2RvRGlzcGxheSwgbmV3VG9kb0J1dHRvbkNvbnRhaW5lcilcbiAgICBtYWluQ29udGFpbmVyT3V0ZXIuYXBwZW5kKG1haW5Db250YWluZXJJbm5lcilcbiAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZChtYWluQ29udGFpbmVyT3V0ZXIpXG5cbiAgICBmdW5jdGlvbiBzZXRBZGRUb2RvQnV0dG9uUHJvamVjdChwcm9qZWN0TmFtZSkge1xuICAgICAgICBuZXdUb2RvQnV0dG9uLnNldEF0dHJpYnV0ZSgnY3VycmVudFByb2plY3QnLCBwcm9qZWN0TmFtZSlcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gcmVtb3ZlQWxsQ2hpbGRFbGVtZW50cygpIHtcbiAgICAgICAgd2hpbGUgKHRvZG9EaXNwbGF5Lmhhc0NoaWxkTm9kZXMoKSkge1xuICAgICAgICAgICAgdG9kb0Rpc3BsYXkucmVtb3ZlQ2hpbGQodG9kb0Rpc3BsYXkubGFzdENoaWxkKVxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIHJlbmRlclByb2plY3RUb2Rvcyhwcm9qZWN0TmFtZSkge1xuICAgICAgICBjb25zdCB0b0RvQXJyYXkgPSBwcm9qZWN0cy5saXN0W3Byb2plY3ROYW1lXS50b0RvSXRlbXNcbiAgICAgICAgcmVtb3ZlQWxsQ2hpbGRFbGVtZW50cygpXG4gICAgICAgIFxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvRG9BcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgdG9Eb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgICB0b0RvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RvLWRvLWNvbnRhaW5lcicpXG4gICAgICAgICAgICB0b0RvQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgndG8tZG8taWQnLCB0b0RvQXJyYXlbaV0udG9Eb0lkKVxuICAgICAgICAgICAgY29uc3QgdXJnZW5jeUluZGljYXRvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgICB1cmdlbmN5SW5kaWNhdG9yLmNsYXNzTGlzdC5hZGQoJ3VyZ2VuY3ktaW5kaWNhdG9yJylcbiAgICAgICAgICAgIHVyZ2VuY3lJbmRpY2F0b3Iuc2V0QXR0cmlidXRlKCdwcmlvcml0eScsIHRvRG9BcnJheVtpXS5wcmlvcml0eSlcbiAgICAgICAgICAgIGNvbnN0IHRleHRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgdGV4dENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0ZXh0LWNvbnRhaW5lcicpXG4gICAgICAgICAgICBjb25zdCBjaGVja0JveENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgICBjaGVja0JveENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjaGVja2JveC1jb250YWluZXInKVxuXG4gICAgICAgICAgICBjb25zdCB0b2RvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICAgICAgICAgIHRvZG9UaXRsZS5pbm5lclRleHQgPSB0b0RvQXJyYXlbaV0udGl0bGVcbiAgICAgICAgICAgIGNvbnN0IHRvZG9EdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgICAgICAgICB0b2RvRHVlRGF0ZS5pbm5lclRleHQgPSBgRHVlIGRhdGU6ICR7dG9Eb0FycmF5W2ldLmR1ZURhdGV9YFxuXG4gICAgICAgICAgICBjb25zdCBjaGVja0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICAgICAgICAgIGNoZWNrQm94LnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpXG4gICAgICAgICAgICBjaGVja0JveC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZXZlbnQpID0+IGRlbGV0ZUFuZFJlcmVuZGVyVG9Eb0xpc3QoZXZlbnQpKVxuXG4gICAgICAgICAgICBjaGVja0JveENvbnRhaW5lci5hcHBlbmQoY2hlY2tCb3gpXG4gICAgICAgICAgICB0ZXh0Q29udGFpbmVyLmFwcGVuZCh0b2RvVGl0bGUsIHRvZG9EdWVEYXRlKVxuICAgICAgICAgICAgdG9Eb0NvbnRhaW5lci5hcHBlbmQodXJnZW5jeUluZGljYXRvciwgdGV4dENvbnRhaW5lciwgY2hlY2tCb3hDb250YWluZXIpXG4gICAgICAgICAgICB0b2RvRGlzcGxheS5hcHBlbmQodG9Eb0NvbnRhaW5lcilcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFRvRG9JbmZvcm1hdGlvbihldmVudCkge1xuICAgICAgICBjb25zdCB0b0RvQ29udGFpbmVyID0gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudFxuICAgICAgICBjb25zdCB0b0RvSWQgPSB0b0RvQ29udGFpbmVyLmdldEF0dHJpYnV0ZSgndG8tZG8taWQnKVxuICAgICAgICBjb25zdCBjdXJyZW50UHJvamVjdCA9IG5ld1RvZG9CdXR0b24uZ2V0QXR0cmlidXRlKCdjdXJyZW50cHJvamVjdCcpXG4gICAgICAgIHJldHVybiB7Y3VycmVudFByb2plY3QsIHRvRG9JZH1cbiAgICB9XG5cbiAgICByZXR1cm4ge3NldEFkZFRvZG9CdXR0b25Qcm9qZWN0LCByZW5kZXJQcm9qZWN0VG9kb3MsIG5ld1RvZG9CdXR0b24sIGdldFRvRG9JbmZvcm1hdGlvbn1cbn0pKClcblxuY29uc3QgbmV3UHJvamVjdEZvcm0gPSAoZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgZm9ybUNvbnRhaW5lck91dGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBmb3JtQ29udGFpbmVyT3V0ZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250YWluZXItb3V0ZXInKVxuICAgIGNvbnN0IGZvcm1Db250YWluZXJJbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZm9ybUNvbnRhaW5lcklubmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udGFpbmVyLWlubmVyJylcblxuICAgIGNvbnN0IHByb2plY3RGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpXG4gICAgY29uc3QgcHJvamVjdEZvcm1MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBwcm9qZWN0Rm9ybUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3Byb2plY3ROYW1lJylcbiAgICBjb25zdCBwcm9qZWN0Rm9ybUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIHByb2plY3RGb3JtSW5wdXQudHlwZSA9ICd0ZXh0J1xuICAgIHByb2plY3RGb3JtSW5wdXQuaWQgPSAncHJvamVjdE5hbWUnXG4gICAgcHJvamVjdEZvcm1MYWJlbC5pbm5lclRleHQgPSAnUHJvamVjdCBOYW1lJ1xuXG4gICAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBzdWJtaXRCdXR0b24uY2xhc3NMaXN0LmFkZCgnZm9ybS1idXR0b24nLCAncHJvamVjdC1zdWJtaXQtYnRuJylcbiAgICBzdWJtaXRCdXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpXG4gICAgc3VibWl0QnV0dG9uLmlubmVyVGV4dCA9ICdTdWJtaXQnXG5cbiAgICBjb25zdCBjYW5jZWxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGNhbmNlbEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdmb3JtLWJ1dHRvbicsICdwcm9qZWN0LWNhbmNlbC1idG4nKVxuICAgIGNhbmNlbEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJylcbiAgICBjYW5jZWxCdXR0b24uaW5uZXJUZXh0ID0gJ0NhbmNlbCdcblxuICAgIGNvbnN0IGJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgYnV0dG9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbi1jb250YWluZXInKVxuXG4gICAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZChzdWJtaXRCdXR0b24sIGNhbmNlbEJ1dHRvbilcbiAgICBwcm9qZWN0Rm9ybS5hcHBlbmQocHJvamVjdEZvcm1MYWJlbCwgcHJvamVjdEZvcm1JbnB1dCwgYnV0dG9uQ29udGFpbmVyKVxuICAgIGZvcm1Db250YWluZXJPdXRlci5hcHBlbmQoZm9ybUNvbnRhaW5lcklubmVyKVxuICAgIGZvcm1Db250YWluZXJJbm5lci5hcHBlbmQocHJvamVjdEZvcm0pXG4gICAgY29udGVudENvbnRhaW5lci5hcHBlbmQoZm9ybUNvbnRhaW5lck91dGVyKVxuXG4gICAgZnVuY3Rpb24gc2hvd1Byb2plY3RGb3JtKCkge1xuICAgICAgICBmb3JtQ29udGFpbmVyT3V0ZXIuc3R5bGUuZGlzcGxheSA9ICdmbGV4J1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhpZGVQcm9qZWN0Rm9ybSgpIHtcbiAgICAgICAgY2xlYXJQcm9qZWN0Rm9ybUlucHV0KClcbiAgICAgICAgZm9ybUNvbnRhaW5lck91dGVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbGVhclByb2plY3RGb3JtSW5wdXQoKSB7XG4gICAgICAgIHByb2plY3RGb3JtSW5wdXQudmFsdWUgPSBcIlwiXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0UHJvamVjdEZvcm1JbnB1dFZhbHVlKCkge1xuICAgICAgICByZXR1cm4gcHJvamVjdEZvcm1JbnB1dC52YWx1ZVxuICAgIH1cblxuICAgIHJldHVybiB7c2hvd1Byb2plY3RGb3JtLCBoaWRlUHJvamVjdEZvcm0sIGNhbmNlbEJ1dHRvbiwgc3VibWl0QnV0dG9uLCBnZXRQcm9qZWN0Rm9ybUlucHV0VmFsdWV9XG59KSgpXG5cbmNvbnN0IG5ld1RvRG9Gb3JtID0gKGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGZvcm1Db250YWluZXJPdXRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZm9ybUNvbnRhaW5lck91dGVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udGFpbmVyLW91dGVyJylcbiAgICBjb25zdCBmb3JtQ29udGFpbmVySW5uZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGZvcm1Db250YWluZXJJbm5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRhaW5lci1pbm5lcicpXG5cbiAgICBjb25zdCB0b0RvRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKVxuXG4gICAgY29uc3QgdGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICB0aXRsZUxhYmVsLmlubmVyVGV4dCA9ICdUaXRsZSdcbiAgICB0aXRsZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3RvLWRvLXRpdGxlJylcbiAgICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIHRpdGxlSW5wdXQucmVxdWlyZWQgPSB0cnVlXG4gICAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpXG4gICAgdGl0bGVJbnB1dC5pZCA9ICd0by1kby10aXRsZSdcblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgZGVzY3JpcHRpb25MYWJlbC5pbm5lclRleHQgPSAnRGVzY3JpcHRpb24nXG4gICAgZGVzY3JpcHRpb25MYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICd0by1kby1kZXNjcmlwdGlvbicpXG4gICAgY29uc3QgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJylcbiAgICBkZXNjcmlwdGlvbklucHV0LmlkID0gJ3RvLWRvLWRlc2NyaXB0aW9uJ1xuXG4gICAgY29uc3QgZHVlRGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGR1ZURhdGVMYWJlbC5pbm5lclRleHQgPSAnRHVlIGRhdGUnXG4gICAgZHVlRGF0ZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3RvLWRvLWR1ZS1kYXRlJylcbiAgICBjb25zdCBkdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgZHVlRGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdkYXRlJylcbiAgICBkdWVEYXRlSW5wdXQuaWQgPSAndG8tZG8tZHVlLWRhdGUnXG5cbiAgICBjb25zdCBwcmlvcml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBwcmlvcml0eUxhYmVsLmlubmVyVGV4dCA9ICdQcmlvcml0eSdcbiAgICBwcmlvcml0eUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3ByaW9yaXR5JylcbiAgICBjb25zdCBwcmlvcml0eUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0JylcblxuICAgIGNvbnN0IGhpZ2hQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpXG4gICAgaGlnaFByaW9yaXR5LnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnVXJnZW50JylcbiAgICBoaWdoUHJpb3JpdHkudGV4dENvbnRlbnQgPSAnVXJnZW50J1xuICAgIGNvbnN0IG5vcm1hbFByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJylcbiAgICBub3JtYWxQcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ05vcm1hbCcpXG4gICAgbm9ybWFsUHJpb3JpdHkudGV4dENvbnRlbnQgPSAnTm9ybWFsJ1xuICAgIGNvbnN0IGxvd1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJylcbiAgICBsb3dQcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ0xvdycpXG4gICAgbG93UHJpb3JpdHkudGV4dENvbnRlbnQgPSAnTG93J1xuXG4gICAgcHJpb3JpdHlJbnB1dC5hcHBlbmQoaGlnaFByaW9yaXR5LCBub3JtYWxQcmlvcml0eSwgbG93UHJpb3JpdHkpXG5cbiAgICBjb25zdCBidXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGJ1dHRvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdidXR0b24tY29udGFpbmVyJylcblxuICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgc3VibWl0QnV0dG9uLmlubmVyVGV4dCA9ICdTdWJtaXQnXG4gICAgc3VibWl0QnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKVxuICAgIHN1Ym1pdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdmb3JtLWJ1dHRvbicpXG5cbiAgICBjb25zdCBjYW5jZWxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGNhbmNlbEJ1dHRvbi5pbm5lclRleHQgPSAnQ2FuY2VsJ1xuICAgIGNhbmNlbEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJylcbiAgICBjYW5jZWxCdXR0b24uY2xhc3NMaXN0LmFkZCgnZm9ybS1idXR0b24nKVxuXG4gICAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZChzdWJtaXRCdXR0b24sIGNhbmNlbEJ1dHRvbilcbiAgICB0b0RvRm9ybS5hcHBlbmQodGl0bGVMYWJlbCwgdGl0bGVJbnB1dCwgZGVzY3JpcHRpb25MYWJlbCwgZGVzY3JpcHRpb25JbnB1dCwgZHVlRGF0ZUxhYmVsLCBkdWVEYXRlSW5wdXQsIHByaW9yaXR5TGFiZWwsIHByaW9yaXR5SW5wdXQsICBidXR0b25Db250YWluZXIpXG4gICAgZm9ybUNvbnRhaW5lcklubmVyLmFwcGVuZCh0b0RvRm9ybSlcbiAgICBmb3JtQ29udGFpbmVyT3V0ZXIuYXBwZW5kKGZvcm1Db250YWluZXJJbm5lcilcbiAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZChmb3JtQ29udGFpbmVyT3V0ZXIpXG5cbiAgICBmdW5jdGlvbiBzaG93VG9Eb0Zvcm0oKSB7XG4gICAgICAgIGZvcm1Db250YWluZXJPdXRlci5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGlkZVRvRG9Gb3JtKCkge1xuICAgICAgICBmb3JtQ29udGFpbmVyT3V0ZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsZWFySW5wdXRzQW5kSGlkZUZvcm0oKSB7XG4gICAgICAgIHRpdGxlSW5wdXQudmFsdWUgPSBcIlwiXG4gICAgICAgIGRlc2NyaXB0aW9uSW5wdXQudmFsdWUgPSBcIlwiXG4gICAgICAgIGR1ZURhdGVJbnB1dC52YWx1ZSA9IFwiXCJcbiAgICAgICAgaGlkZVRvRG9Gb3JtKClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRGb3JtVmFsdWVzKCkge1xuICAgICAgICBjb25zdCB0aXRsZSA9IHRpdGxlSW5wdXQudmFsdWVcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbklucHV0LnZhbHVlXG4gICAgICAgIGNvbnN0IGR1ZURhdGUgPSBkdWVEYXRlSW5wdXQudmFsdWVcbiAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBwcmlvcml0eUlucHV0LnZhbHVlXG5cbiAgICAgICAgcmV0dXJuIHt0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5fVxuICAgIH1cblxuICAgIHJldHVybiB7c2hvd1RvRG9Gb3JtLCBoaWRlVG9Eb0Zvcm0sIGNhbmNlbEJ1dHRvbiwgc3VibWl0QnV0dG9uLCBjbGVhcklucHV0c0FuZEhpZGVGb3JtLCBnZXRGb3JtVmFsdWVzfVxufSkoKVxuXG5leHBvcnQge2NyZWF0ZUhlYWRlciwgY3JlYXRlU2lkZWJhciwgbmV3UHJvamVjdEZvcm0sIG1haW5Db250YWluZXIsIG5ld1RvRG9Gb3JtfVxuXG4iLCJpbXBvcnQgY3NzIGZyb20gXCIuL3N0eWxlLmNzc1wiXG5pbXBvcnQge2NyZWF0ZUhlYWRlciwgY3JlYXRlU2lkZWJhciwgbmV3UHJvamVjdEZvcm0sIG1haW5Db250YWluZXIsIG5ld1RvRG9Gb3JtfSBmcm9tIFwiLi9ET01cIlxuaW1wb3J0IHsgYWRkIH0gZnJvbSBcImRhdGUtZm5zXCJcblxuY3JlYXRlU2lkZWJhclxuY3JlYXRlSGVhZGVyXG5uZXdQcm9qZWN0Rm9ybVxuXG5jb25zdCBldmVudExpc3RlbmVycyA9IChmdW5jdGlvbigpIHtcbiAgICBjcmVhdGVTaWRlYmFyLmFkZFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBuZXdQcm9qZWN0Rm9ybS5zaG93UHJvamVjdEZvcm0pXG4gICAgbmV3UHJvamVjdEZvcm0uY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbmV3UHJvamVjdEZvcm0uaGlkZVByb2plY3RGb3JtKVxuICAgIG5ld1Byb2plY3RGb3JtLnN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZE5ld1Byb2plY3QpXG4gICAgbWFpbkNvbnRhaW5lci5uZXdUb2RvQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbmV3VG9Eb0Zvcm0uc2hvd1RvRG9Gb3JtKVxuICAgIG5ld1RvRG9Gb3JtLmNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG5ld1RvRG9Gb3JtLmNsZWFySW5wdXRzQW5kSGlkZUZvcm0pXG4gICAgbmV3VG9Eb0Zvcm0uc3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkTmV3VG9Ebylcbn0pKClcblxuZnVuY3Rpb24gc2F2ZVByb2plY3RzVG9Mb2NhbFN0b3JhZ2UoKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzbGlzdCcsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzLmxpc3QpKVxufVxuXG5mdW5jdGlvbiBnZXRQcm9qZWN0c0Zyb21Mb2NhbFN0b3JhZ2UoKSB7XG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0c2xpc3QnKSAhPT0gbnVsbClcbiAgICBwcm9qZWN0cy5saXN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHNsaXN0JykpXG4gICAgcmV0cmlldmVDdXJyZW50VG9Eb0lkKClcbn1cblxuZnVuY3Rpb24gc2F2ZUN1cnJlbnRUb0RvSWQoKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2N1cnJlbnRUb0RvSWQnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cy5jdXJyZW50VG9Eb0lkKSlcbn1cblxuZnVuY3Rpb24gcmV0cmlldmVDdXJyZW50VG9Eb0lkKCkge1xuICAgIGxldCBzYXZlZEN1cnJlbnRUb0RvSWQgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjdXJyZW50VG9Eb0lkJykpXG4gICAgcHJvamVjdHMuY3VycmVudFRvRG9JZCA9IHNhdmVkQ3VycmVudFRvRG9JZFxufVxuXG5mdW5jdGlvbiBhZGROZXdQcm9qZWN0KCkge1xuICAgIGlmIChuZXdQcm9qZWN0Rm9ybS5nZXRQcm9qZWN0Rm9ybUlucHV0VmFsdWUoKSA9PT0gXCJcIikge1xuICAgICAgICBhbGVydCgnUHJvamVjdCBuYW1lIGNhbm5vdCBiZSBlbXB0eSEnKVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHByb2plY3RzLmFkZChuZXdQcm9qZWN0Rm9ybS5nZXRQcm9qZWN0Rm9ybUlucHV0VmFsdWUoKSlcbiAgICAgICAgY3JlYXRlU2lkZWJhci5yZW5kZXJQcm9qZWN0c1RvU2lkZWJhcigpXG4gICAgICAgIG5ld1Byb2plY3RGb3JtLmhpZGVQcm9qZWN0Rm9ybSgpXG4gICAgICAgIHNhdmVQcm9qZWN0c1RvTG9jYWxTdG9yYWdlKClcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNvbmZpcm1EZWxldGVQcm9qZWN0KCkge1xuICAgIHJldHVybiBjb25maXJtKCdEZWxldGUgdGhpcyBwcm9qZWN0PyBUaGlzIGlzIGFuIGlycmV2ZXJzaWJsZSBhY3Rpb24uJylcbn1cblxuZnVuY3Rpb24gZGVsZXRlUHJvamVjdChjbGlja1RhcmdldCkge1xuICAgIGlmIChjb25maXJtRGVsZXRlUHJvamVjdCgpID09PSB0cnVlKSB7XG4gICAgICAgIGxldCBwcm9qZWN0VG9EZWxldGUgPSBjbGlja1RhcmdldC5wYXJlbnROb2RlLmdldEF0dHJpYnV0ZSgncHJvamVjdCcpXG4gICAgICAgIHByb2plY3RzLmRlbGV0ZShwcm9qZWN0VG9EZWxldGUpXG4gICAgICAgIGNyZWF0ZVNpZGViYXIuZGVsZXRlUHJvamVjdEZyb21TaWRlYmFyKGNsaWNrVGFyZ2V0KVxuICAgICAgICBzYXZlUHJvamVjdHNUb0xvY2FsU3RvcmFnZSgpXG4gICAgfVxufVxuXG5mdW5jdGlvbiBkZWxldGVBbmRSZXJlbmRlclRvRG9MaXN0KGV2ZW50KSB7XG4gICAgbGV0IGN1cnJlbnRQcm9qZWN0ID0gbWFpbkNvbnRhaW5lci5uZXdUb2RvQnV0dG9uLmdldEF0dHJpYnV0ZSgnY3VycmVudHByb2plY3QnKVxuICAgIHByb2plY3RzLmRlbGV0ZVRvRG9JdGVtKGV2ZW50KVxuICAgIG1haW5Db250YWluZXIucmVuZGVyUHJvamVjdFRvZG9zKGN1cnJlbnRQcm9qZWN0KVxufVxuXG5sZXQgcHJvamVjdHMgPSB7XG4gICAgbGlzdDoge30sXG4gICAgY3VycmVudFRvRG9JZDogMCxcbiAgICBhZGQ6IGZ1bmN0aW9uKHByb2plY3ROYW1lKSB7XG4gICAgICAgIGlmIChwcm9qZWN0cy5saXN0W3Byb2plY3ROYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBwcm9qZWN0cy5saXN0W3Byb2plY3ROYW1lXT0gbmV3IHByb2plY3QocHJvamVjdE5hbWUpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhbGVydCgnUHJvamVjdCBhbHJlYWR5IGV4aXN0cyEnKVxuICAgICAgICB9XG4gICAgfSxcbiAgICBkZWxldGU6IGZ1bmN0aW9uKHByb2plY3ROYW1lKSB7XG4gICAgICAgIGRlbGV0ZSBwcm9qZWN0cy5saXN0W3Byb2plY3ROYW1lXVxuICAgIH0sXG4gICAgYWRkVG9Eb0l0ZW06IGZ1bmN0aW9uKHByb2plY3QsIHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcbiAgICAgICAgcHJvamVjdC50b0RvSXRlbXMucHVzaChuZXcgdG9Eb0l0ZW0odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkpXG4gICAgfSxcbiAgICBkZWxldGVUb0RvSXRlbTogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgY29uc3QgdG9Eb0luZm9ybWF0aW9uID0gbWFpbkNvbnRhaW5lci5nZXRUb0RvSW5mb3JtYXRpb24oZXZlbnQpXG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0cy5saXN0W3RvRG9JbmZvcm1hdGlvbi5jdXJyZW50UHJvamVjdF1cbiAgICAgICAgY29uc3QgdG9Eb0lkID0gdG9Eb0luZm9ybWF0aW9uLnRvRG9JZFxuICAgICAgICBsZXQgdGFyZ2V0VG9EZWxldGVJbmRleCA9IHByb2plY3QudG9Eb0l0ZW1zLmZpbmRJbmRleChlbGVtZW50ID0+IGVsZW1lbnQudG9Eb0lkID09PSB0b0RvSWQpXG4gICAgICAgIHByb2plY3QudG9Eb0l0ZW1zLnNwbGljZSh0YXJnZXRUb0RlbGV0ZUluZGV4LCAxKVxuICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0LnRvRG9JdGVtcylcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGFkZE5ld1RvRG8oKSB7XG4gICAgbGV0IGlucHV0ID0gbmV3VG9Eb0Zvcm0uZ2V0Rm9ybVZhbHVlcygpXG4gICAgbGV0IGN1cnJlbnRQcm9qZWN0ID0gbWFpbkNvbnRhaW5lci5uZXdUb2RvQnV0dG9uLmdldEF0dHJpYnV0ZSgnY3VycmVudHByb2plY3QnKVxuICAgIGxldCBjdXJyZW50UHJvamVjdExvY2F0aW9uID0gcHJvamVjdHMubGlzdFtjdXJyZW50UHJvamVjdF1cblxuICAgIGlmIChpbnB1dC50aXRsZSA9PT0gJycpIHtcbiAgICAgICAgYWxlcnQoJ1BsZWFzZSBlbnRlciBhIHRpdGxlIGZvciB0aGUgdG8tZG8uJylcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50UHJvamVjdExvY2F0aW9uKVxuICAgICAgICBwcm9qZWN0cy5hZGRUb0RvSXRlbShjdXJyZW50UHJvamVjdExvY2F0aW9uLCBpbnB1dC50aXRsZSwgaW5wdXQuZGVzY3JpcHRpb24sIGlucHV0LmR1ZURhdGUsIGlucHV0LnByaW9yaXR5KVxuICAgICAgICBuZXdUb0RvRm9ybS5jbGVhcklucHV0c0FuZEhpZGVGb3JtKClcbiAgICAgICAgbWFpbkNvbnRhaW5lci5yZW5kZXJQcm9qZWN0VG9kb3MoY3VycmVudFByb2plY3QpXG4gICAgICAgIHNhdmVQcm9qZWN0c1RvTG9jYWxTdG9yYWdlKClcbiAgICAgICAgc2F2ZUN1cnJlbnRUb0RvSWQoKVxuICAgIH1cbn1cblxuY2xhc3MgcHJvamVjdCB7XG4gICAgY29uc3RydWN0b3IocHJvamVjdE5hbWUpIHtcbiAgICAgICAgdGhpcy5wcm9qZWN0TmFtZSA9IHByb2plY3ROYW1lXG4gICAgICAgIHRoaXMudG9Eb0l0ZW1zID0gW11cbiAgICB9XG59XG5cbmNsYXNzIHRvRG9JdGVtIHtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZVxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb25cbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZVxuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHlcbiAgICAgICAgdGhpcy50b0RvSWQgPSBwcm9qZWN0cy5jdXJyZW50VG9Eb0lkKytcbiAgICB9XG59XG5cbmdldFByb2plY3RzRnJvbUxvY2FsU3RvcmFnZSgpXG5jcmVhdGVTaWRlYmFyLnJlbmRlclByb2plY3RzVG9TaWRlYmFyKClcbmNvbnNvbGUubG9nKHByb2plY3RzKVxuY29uc29sZS5sb2cobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzbGlzdCcpKVxuXG4gZXhwb3J0IHtwcm9qZWN0cywgZGVsZXRlUHJvamVjdCwgZGVsZXRlQW5kUmVyZW5kZXJUb0RvTGlzdH0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
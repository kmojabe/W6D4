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
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/dom_node_collection.js":
/*!************************************!*\
  !*** ./lib/dom_node_collection.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class DOMNodeCollection{\n  constructor(array_of_html_elements_from_user){\n    this.nodeElements = array_of_html_elements_from_user;\n  }\n  \n  html(string){\n    if (!string){\n      return this.nodeElements[0].innerText;\n    } else {\n      this.nodeElements.forEach( (el) => {\n        el.innerText = string;\n      });\n    }\n  }\n  \n  empty(){\n    this.nodeElements.forEach( (el) => {\n      el.innerText = \"\";\n    });\n  }\n  \n  append(string){\n    this.nodeElements.forEach( (el) => {\n      let myExpression = new RegExp('<([a-zA-Z0-9]+)>(.*)<');\n      // debugger;\n      let htmlType = myExpression.exec(string)[1];\n      let body = myExpression.exec(string)[2];\n      let newHTML = document.createElement(htmlType);\n      newHTML.innerText = body;\n      el.appendChild(newHTML);\n      \n    });\n  }\n  \n  attr(attribute,value) {\n    let arrayAttributes = [];\n    this.nodeElements.forEach( (el) => {\n      //what are doing with the getAttribu\n      if (!value){\n        arrayAttributes.push(el.getAttribute(attribute));\n      } else{\n        el.setAttribute(attribute,value); //but value is \"\"\n      }\n    });\n    if (arrayAttributes.length) {\n      return arrayAttributes;\n    } \n  }\n  \n  addClass(input){\n    this.attr('class',input);\n  }\n  \n  removeClass(){\n    this.nodeElements.forEach( (el) => {\n\n      el.removeAttribute('class'); //but value is \"\"\n\n    });\n  }\n  \n  children(){\n    let childNodes = [];\n    this.each((node) => {\n      const childNodeList = node.children;\n      childNodes = childNodes.concat(Array.from(childNodeList));\n    });\n    return new DOMNodeCollection(childNodes);\n  }\n  \n  each(callback){\n    for (var i = 0; i < this.nodeElements.length; i++) {\n      callback(this.nodeElements[i]);\n    }\n  }\n  \n}\n\nmodule.exports = DOMNodeCollection;\n\n//my bracelet is speaking to me\n//I am siddhartha in the flesh\n//I am\n\n//so we need all children so we need to check all nodeELEMEnts???\n//i dont think it will work based off the way we designed this\n//ask how far stephen and Ti are?\n\n//# sourceURL=webpack:///./lib/dom_node_collection.js?");

/***/ }),

/***/ "./lib/main.js":
/*!*********************!*\
  !*** ./lib/main.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const DOMNodeCollection = __webpack_require__(/*! ./dom_node_collection.js */ \"./lib/dom_node_collection.js\");\n\nwindow.$l = (arg) => {\n  if (arg instanceof HTMLElement){\n    return new DOMNodeCollection([arg]);\n  }\n  let selectors = Array.from(document.querySelectorAll(arg));\n  const DNObject = new DOMNodeCollection(selectors);\n  return DNObject;\n};\n\n\n//is the function we are viewing for jQuery??? or are those vanilla?\n//can we use this function?\n\n//# sourceURL=webpack:///./lib/main.js?");

/***/ })

/******/ });
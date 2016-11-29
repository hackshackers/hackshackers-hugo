/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	module.exports = __webpack_require__(2);


/***/ },
/* 1 */
/***/ function(module, exports) {

	import Map from './Map';
	
	Map('.map');

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(3);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./screen.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./screen.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, ".push-left{margin-right:auto}.push-right{margin-left:auto}.home-wrapper section{margin-bottom:70px}.container{margin:0 auto;max-width:1200px;overflow:hidden}.row{display:flex;flex-wrap:wrap}.row>*{box-sizing:border-box;padding:0 16px;flex-basis:100%}.gutterless>*{margin:0}.gutterless>*>*{padding:0}.gutterless>:last-child{margin-bottom:0}.col{flex:1 0 auto}div.col-1{flex-basis:8.3333333333%}div.col-2{flex-basis:16.666666666%}div.col-3{flex-basis:25%}div.col-4{flex-basis:33.333333333%}div.col-5{flex-basis:41.666666666%}div.col-6{flex-basis:50%}div.col-7{flex-basis:58.333333333%}div.col-8{flex-basis:66.666666666%}div.col-9{flex-basis:75%}div.col-10{flex-basis:83.333333333%}div.col-11{flex-basis:91.666666666%}div.col-12{flex-basis:100%}div.col-top{align-self:flex-start}div.col-bottom{align-self:flex-end}div.col-middle{align-self:center}.row-left{justify-content:flex-start}.row-right{justify-content:flex-end}.row-center{justify-content:center}.row-space-between{justify-content:space-between}.row-space-around{justify-content:space-around}.row-reverse{flex-direction:row-reverse}.row-equal>*{display:flex}.row-top{align-items:flex-start}.row-middle{align-items:center}.row-bottom{align-items:flex-end}.hide{display:none}@media (max-width:767px){div.col-small-1{flex-basis:8.3333333333%}div.col-small-2{flex-basis:16.666666666%}div.col-small-3{flex-basis:25%}div.col-small-4{flex-basis:33.333333333%}div.col-small-5{flex-basis:41.666666666%}div.col-small-6{flex-basis:50%}div.col-small-7{flex-basis:58.333333333%}div.col-small-8{flex-basis:66.666666666%}div.col-small-9{flex-basis:75%}div.col-small-10{flex-basis:83.333333333%}div.col-small-11{flex-basis:91.666666666%}div.col-small-12{flex-basis:100%}div.col-small-top{align-self:flex-start}div.col-small-bottom{align-self:flex-end}div.col-small-middle{align-self:center}.row-small-left{justify-content:flex-start}.row-small-right{justify-content:flex-end}.row-small-center{justify-content:center}.row-small-space-between{justify-content:space-between}.row-small-space-around{justify-content:space-around}.row-small-reverse{flex-direction:row-reverse}.row-small-equal>*{display:flex}.row-small-top{align-items:flex-start}.row-small-middle{align-items:center}.row-small-bottom{align-items:flex-end}.hide-small{display:none}}@media (min-width:768px) and (max-width:1023px){div.col-medium-1{flex-basis:8.3333333333%}div.col-medium-2{flex-basis:16.666666666%}div.col-medium-3{flex-basis:25%}div.col-medium-4{flex-basis:33.333333333%}div.col-medium-5{flex-basis:41.666666666%}div.col-medium-6{flex-basis:50%}div.col-medium-7{flex-basis:58.333333333%}div.col-medium-8{flex-basis:66.666666666%}div.col-medium-9{flex-basis:75%}div.col-medium-10{flex-basis:83.333333333%}div.col-medium-11{flex-basis:91.666666666%}div.col-medium-12{flex-basis:100%}div.col-medium-top{align-self:flex-start}div.col-medium-bottom{align-self:flex-end}div.col-medium-middle{align-self:center}.row-medium-left{justify-content:flex-start}.row-medium-right{justify-content:flex-end}.row-medium-center{justify-content:center}.row-medium-space-between{justify-content:space-between}.row-medium-space-around{justify-content:space-around}.row-medium-reverse{flex-direction:row-reverse}.row-medium-equal>*{display:flex}.row-medium-top{align-items:flex-start}.row-medium-middle{align-items:center}.row-medium-bottom{align-items:flex-end}.hide-medium{display:none}}@media (min-width:1024px) and (max-width:1239px){div.col-large-1{flex-basis:8.3333333333%}div.col-large-2{flex-basis:16.666666666%}div.col-large-3{flex-basis:25%}div.col-large-4{flex-basis:33.333333333%}div.col-large-5{flex-basis:41.666666666%}div.col-large-6{flex-basis:50%}div.col-large-7{flex-basis:58.333333333%}div.col-large-8{flex-basis:66.666666666%}div.col-large-9{flex-basis:75%}div.col-large-10{flex-basis:83.333333333%}div.col-large-11{flex-basis:91.666666666%}div.col-large-12{flex-basis:100%}div.col-large-top{align-self:flex-start}div.col-large-bottom{align-self:flex-end}div.col-large-middle{align-self:center}.row-large-left{justify-content:flex-start}.row-large-right{justify-content:flex-end}.row-large-center{justify-content:center}.row-large-space-between{justify-content:space-between}.row-large-space-around{justify-content:space-around}.row-large-reverse{flex-direction:row-reverse}.row-large-equal>*{display:flex}.row-large-top{align-items:flex-start}.row-large-middle{align-items:center}.row-large-bottom{align-items:flex-end}.hide-large{display:none}}@media (min-width:1240px){div.col-large-1{flex-basis:8.3333333333%}div.col-large-2{flex-basis:16.666666666%}div.col-large-3{flex-basis:25%}div.col-large-4{flex-basis:33.333333333%}div.col-large-5{flex-basis:41.666666666%}div.col-large-6{flex-basis:50%}div.col-large-7{flex-basis:58.333333333%}div.col-large-8{flex-basis:66.666666666%}div.col-large-9{flex-basis:75%}div.col-large-10{flex-basis:83.333333333%}div.col-large-11{flex-basis:91.666666666%}div.col-large-12{flex-basis:100%}div.col-large-top{align-self:flex-start}div.col-large-bottom{align-self:flex-end}div.col-large-middle{align-self:center}.row-large-left{justify-content:flex-start}.row-large-right{justify-content:flex-end}.row-large-center{justify-content:center}.row-large-space-between{justify-content:space-between}.row-large-space-around{justify-content:space-around}.row-large-reverse{flex-direction:row-reverse}.row-large-equal>*{display:flex}.row-large-top{align-items:flex-start}.row-large-middle{align-items:center}.row-large-bottom{align-items:flex-end}.hide-large{display:none}}.content-block{align-items:center;background:#a2a2a2;color:#fff;display:flex;justify-content:center;min-height:3em;text-align:center}@media (min-width:768px) and (max-width:1023px){.container{width:735px}}@media (min-width:1024px) and (max-width:1239px){.container{width:1001px}}@media (min-width:1240px){.container{width:1200px}}.align-right{margin-left:auto}.full-bleed{margin:0;padding:0}.full-bleed>*{padding-left:0;padding-right:0}.heading-section{font:700 2.875rem/1 Montserrat,sans-serif;display:inline-block;margin-bottom:35px;position:relative}.heading-section:after{display:block;content:\"\";height:100%;width:10px;background-color:#185a9d;position:absolute;bottom:0;right:-24px}.heading-section.ruler-gray:after{background-color:#9e9ea1}article a,section a{transition:all .15s ease-out;position:relative}article a:before,section a:before{position:absolute;transition:all .3s ease-in-out 0s;content:\" \";width:100%;height:1px;bottom:0;left:0;background-color:#ff4936;visibility:hidden;transform:scaleX(0)}article a:hover:before,section a:hover:before{visibility:visible;transform:scaleX(1)}.widget-heading{font:700 1.5rem/1 Montserrat,sans-serif;margin-bottom:15px;letter-spacing:-.015em}body{font-family:Hind,sans-serif}.section-padding{padding:0 80px}.section-wrapper{display:flex;justify-content:space-between;padding:90px 0}blockquote,body,dd,div,dl,dt,fieldset,form,h1,h2,h3,h4,h5,h6,html,input,li,ol,p,pre,td,textarea,th,ul{margin:0;padding:0}a{color:inherit;text-decoration:none}table{border-collapse:collapse;border-spacing:0}fieldset,img{border:0}input{border:1px solid #b0b0b0;padding:3px 5px 4px;color:#979797;width:190px}address,caption,cite,code,dfn,th,var{font-style:normal;font-weight:400}ol,ul{list-style:none}caption,th{text-align:left}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:400}q:after,q:before{content:''}abbr,acronym,button{border:0}button{padding:0}.section-bg-gray{background-color:#f6f8fa}.section-bg-black{background-color:#000;color:#fff}.header-wrapper{align-items:center;display:flex;margin-top:32px;margin-bottom:32px;padding:0 16px}.nav-wrapper{display:flex;color:#9e9ea1;padding:0 16px}.nav-wrapper .fa-search{font-size:20px}.dropdown-wrapper{border:1px solid #9e9ea1;display:flex;padding:10px}.header-subscribe{align-items:center;background-color:#ffe600;color:#000;font-weight:700;font-size:15px;height:35px;letter-spacing:.25px;display:flex;padding:0 15px;text-transform:uppercase}.logo-wrapper{display:block;width:380px}.logo-wrapper svg{display:block}.main-nav{background-color:#232323;height:80px;display:flex;align-items:center}.main-nav-items{font:700 1.125rem/1 Montserrat,sans-serif;display:flex;transition-duration:.2s}.main-nav-items a{text-decoration:none;transition-duration:.2s}.main-nav-items a:hover{color:#e5e4e9}.main-nav-items li:not(:last-of-type){padding-right:50px}.module-block{min-height:200px}aside>*{margin-bottom:32px}aside>:last-child{margin-bottom:0}.map{margin-bottom:70px}.event-row{border-top:1px solid #ebebeb;display:flex;font-size:18px;justify-content:space-between;padding:30px 15px}.event-row:last-of-type{border-bottom:1px solid #ebebeb}.event-name{font-weight:700;width:65%}.event-date,.event-time{width:12%}.event-time{color:#9e9ea1}.featured-events-wrapper .heading-section{padding-left:10px}.statement-wrapper{margin-bottom:60px}.statement-heading{font:700 2.5rem/1.4 Montserrat,sans-serif;margin-bottom:90px}.statement-heading span{font-size:50px}.home-newsletter-signup{display:flex}.left-column-signup{min-width:50%}.home-signup-img{height:100%;width:100%}.right-column-signup{flex-direction:column;padding:50px 0 0 70px;width:50%}.right-column-signup p{margin-bottom:15px}.newsletter-signup-input{display:block;background:#fff;border:1px solid hsla(0,0%,59%,.5);border-radius:3px;margin-bottom:35px;padding:15px;width:275px}.newsletter-signup-input-wrap{display:table;position:relative}.newsletter-btn{position:absolute;right:10px;top:15px;color:red;background:transparent}.resources{padding-left:80px}.organizers{padding-right:80px}.list-module li{border-top:1px solid #ebebeb;padding:25px 0;border-color:#9e9ea1;color:#4cff5c}.list-module a{padding-left:15px}.organizers,.resources{width:35%}.organizers .heading-section,.resources .heading-section{padding-left:10px}.organizer-row{align-items:center;display:flex}.organizer-img{display:block;width:50px;height:50px;background-color:#9e9ea1;border-radius:50%;margin-right:20px}.list-organizers li{padding:13px 0}.btn-outline{background:none;border:3px solid #fff;color:#fff;padding:20px 80px;font-size:15px;font-weight:400;text-shadow:0 0 10px rgba(0,0,0,.2)}.btn-outline i{padding-left:10px}.btn-view-more{background:#fff;border-radius:40.03px;display:flex;align-items:center;width:140px;height:30px;justify-content:center;margin:0 auto}.footer-nav{display:flex;font-family:Montserrat,sans-serif;font-size:14px}.footer-nav li:not(:last-of-type){margin-right:40px}.footer-wrapper{border-top:1px solid #ebebeb}.footer-container{align-items:baseline;display:flex;justify-content:space-between;padding:55px 85px 30px}.footer-social li:not(:first-of-type){margin-left:20px}.widget-most-popular--img{margin-right:20px}.widget-most-popular--post{display:flex}.widget-most-popular--header{font:700 .875rem/1.2 Montserrat,sans-serif;padding-bottom:3px}.widget-most-popular--meta{color:#9e9ea1;display:flex;font-size:14px}.widget-most-popular--byline{margin-right:10px}.widget-most-popular--list li{margin-bottom:20px}.widget-signup p{font-size:14px;margin-bottom:15px}.widget-signup .widget-heading{margin-bottom:3px}.widget-signup input{border:1px solid #ebebeb;border-radius:3px 0 0 3px;height:30px;padding-left:34px;border-right:none;width:79%}.widget-signup--form{display:flex}.widget-signup--form button{background-color:#f42;color:#fff;text-transform:uppercase;font-weight:700;padding:0 20px}.widget-signup--form button:hover{background-color:#000;color:#fff}.widget-signup--input{position:relative;width:100%}.widget-signup--input i{color:#9e9ea1;position:absolute;top:11px;left:10px}.byline-block,.headline-block,.subheadline-block{margin-bottom:32px}@media screen and (max-width:1023px){.left-column{order:2}.right-column{order:1}}.single-wrapper{display:flex;margin:70px 0}.left-column{border-right:1px solid #ebebeb;padding-right:28px;padding-top:5px;width:100%;max-width:300px}.right-column{padding-left:28px;width:100%}.single-headline{font:700 3rem/1 Montserrat,sans-serif;letter-spacing:-.03em}.single-headline:after{content:'\\2014';display:block}.single-subheadline{color:#232323;font:400 1.25rem/1.2 Montserrat,sans-serif}.single-meta{color:#9e9ea1;display:flex;align-items:center;margin-bottom:20px}.single-meta-byline{font-style:italic;font-size:18px;color:#232323;margin-right:20px;font-weight:900}.single-meta-byline i{margin-right:10px}.single-article{font:300 1.125rem/1.4 Hind,sans-serif;width:75%}.single-article p{margin-bottom:20px}.single-article h4{font-weight:900}.hero-wrapper .content-block{height:500px;flex-direction:column}.entry-block,.featured-chapter,.popular-resources{height:350px}.upcoming-events{height:250px}.featured-organizers{height:485px}.row-middle{margin-bottom:40px}", ""]);
	
	// exports


/***/ },
/* 4 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function () {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for (var i = 0; i < this.length; i++) {
				var item = this[i];
				if (item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function (modules, mediaQuery) {
			if (typeof modules === "string") modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for (var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if (typeof id === "number") alreadyImportedModules[id] = true;
			}
			for (i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if (mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if (mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }
/******/ ]);
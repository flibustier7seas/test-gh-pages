(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

/***/ "./locales/index.js":
/*!**************************!*\
  !*** ./locales/index.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"en":{"common":{"signUp":"signUp"},"home":{"viewMessages":"View messages"},"login":{"needAuthorize":"Need authorize"},"messages":{"from":"from","subject":"subject"},"navigation":{"home":"Home","messages":"Messages","settings":"Settings"},"settings":{"enterCientId":"Enter CLIENT_ID"}},"ru":{"common":{"signUp":"Войти"},"home":{"viewMessages":"Открыть сообщения"},"login":{"needAuthorize":"Необходимо авторизоваться"},"messages":{"from":"отправитель","subject":"заголовок"},"navigation":{"home":"Домой","messages":"Сообщения","settings":"Настройки","video":"Видео"},"settings":{"enterCientId":"Введите CLIENT_ID"},"videoPlayer":{"video":"Видео","subtitle":"Субтитры"}}}

/***/ }),

/***/ "./node_modules/typings-for-css-modules-loader/lib/index.js??ref--7-1!./src/modules/App.css":
/*!*****************************************************************************************!*\
  !*** ./node_modules/typings-for-css-modules-loader/lib??ref--7-1!./src/modules/App.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "html,\nbody,\n#app {\n    height: 100%;\n}\n\n.app__2NnFW {\n    height: 100%;\n    width: 100%;\n\n    display: flex;\n    flex-direction: column;\n}\n\n.app__header__1beKR {\n    flex: 0;\n}\n\n.app__page__3NRA3 {\n    flex: 1;\n    overflow: auto;\n}\n", ""]);

// exports
exports.locals = {
	"app": "app__2NnFW",
	"app__header": "app__header__1beKR",
	"appHeader": "app__header__1beKR",
	"app__page": "app__page__3NRA3",
	"appPage": "app__page__3NRA3"
};

/***/ }),

/***/ "./node_modules/typings-for-css-modules-loader/lib/index.js??ref--8-1!./node_modules/sass-loader/lib/loader.js!./src/modules/pages/messages/Messages.scss":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/typings-for-css-modules-loader/lib??ref--8-1!./node_modules/sass-loader/lib/loader.js!./src/modules/pages/messages/Messages.scss ***!
  \*******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".messages__17yCl {\n  cursor: default; }\n", ""]);

// exports
exports.locals = {
	"messages": "messages__17yCl"
};

/***/ }),

/***/ "./node_modules/typings-for-css-modules-loader/lib/index.js??ref--8-1!./node_modules/sass-loader/lib/loader.js!./src/modules/pages/video-react-example/VideoReactExample.scss":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/typings-for-css-modules-loader/lib??ref--8-1!./node_modules/sass-loader/lib/loader.js!./src/modules/pages/video-react-example/VideoReactExample.scss ***!
  \***************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":root {\n  --back-color: #263238; }\n\n.video-player__2-7IR {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column; }\n  .video-player__player__2Yn3D {\n    flex: 1 1 auto; }\n  .video-player__control-panel__25Gr1 {\n    padding: 10px;\n    display: flex;\n    justify-content: space-around; }\n  .video-player__control-item__1nTs2 {\n    width: 30%; }\n", ""]);

// exports
exports.locals = {
	"video-player": "video-player__2-7IR",
	"video-player__player": "video-player__player__2Yn3D",
	"video-player__control-panel": "video-player__control-panel__25Gr1",
	"video-player__control-item": "video-player__control-item__1nTs2"
};

/***/ }),

/***/ "./node_modules/typings-for-css-modules-loader/lib/index.js??ref--8-1!./node_modules/sass-loader/lib/loader.js!./src/modules/pages/video-react-example/video-player/VideoPlayer.scss":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/typings-for-css-modules-loader/lib??ref--8-1!./node_modules/sass-loader/lib/loader.js!./src/modules/pages/video-react-example/video-player/VideoPlayer.scss ***!
  \**********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":root {\n  --back-color: #263238; }\n\n.video-player__14MQ7 {\n  position: relative;\n  background-color: var(--back-color); }\n  .video-player__video__36tI6 {\n    position: absolute;\n    height: 100%;\n    width: 100%; }\n  .video-player__subtitle__1swL0 {\n    position: absolute;\n    width: 100%;\n    bottom: 10%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    font-size: 32px;\n    color: wheat;\n    background-color: rgba(0, 0, 0, 0.5); }\n  .video-player__controls__R1wXj {\n    position: absolute;\n    bottom: 0px;\n    width: 100%;\n    overflow: hidden;\n    display: flex; }\n  .video-player__slider__JuZuC {\n    flex-grow: 1;\n    padding: 22px 0px; }\n", ""]);

// exports
exports.locals = {
	"video-player": "video-player__14MQ7",
	"video-player__video": "video-player__video__36tI6",
	"video-player__subtitle": "video-player__subtitle__1swL0",
	"video-player__controls": "video-player__controls__R1wXj",
	"video-player__slider": "video-player__slider__JuZuC"
};

/***/ }),

/***/ "./src/api/apiRequest.ts":
/*!*******************************!*\
  !*** ./src/api/apiRequest.ts ***!
  \*******************************/
/*! exports provided: Headers, jsonHandler, ApiRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Headers", function() { return Headers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jsonHandler", function() { return jsonHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiRequest", function() { return ApiRequest; });
(function () {
    var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

    enterModule && enterModule(module);
})();

const Headers = {
    AcceptJson: { Accept: "application/json" },
    Authorization: token => ({ Authorization: token }),
    JsonContent: { "Content-Type": "application/json" }
};
const jsonHandler = response => response.json().catch(() => new Error());
class ApiRequest {
    constructor(input, init = {}, handlers = []) {
        this.handler = handler => {
            return new ApiRequest(this.request, {}, [...this.handlers, handler]);
        };
        this.execute = () => {
            return this.handlers.reduce((promise, handler) => promise.then(handler), fetch(this.request));
        };
        this.request = new Request(input, init);
        this.handlers = handlers;
    }
    static get(uri) {
        return new ApiRequest(uri, { method: "GET" });
    }
    static post(uri) {
        return new ApiRequest(uri, { method: "POST" });
    }
    withHeaders(...extraHeaders) {
        const headers = extraHeaders.reduce((headers, extra) => Object.assign(headers, extra), Object.assign({}, this.request.headers || {}));
        return new ApiRequest(this.request, { headers }, this.handlers);
    }

    // @ts-ignore
    __reactstandin__regenerateByEval(key, code) {
        // @ts-ignore
        this[key] = eval(code);
    }

}
;

(function () {
    var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

    var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(Headers, "Headers", "D:/Projects/js-boilerplate/src/api/apiRequest.ts");
    reactHotLoader.register(jsonHandler, "jsonHandler", "D:/Projects/js-boilerplate/src/api/apiRequest.ts");
    reactHotLoader.register(ApiRequest, "ApiRequest", "D:/Projects/js-boilerplate/src/api/apiRequest.ts");
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/api/gmail/getMessage.ts":
/*!*************************************!*\
  !*** ./src/api/gmail/getMessage.ts ***!
  \*************************************/
/*! exports provided: HeaderType, getMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderType", function() { return HeaderType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMessage", function() { return getMessage; });
/* harmony import */ var api_apiRequest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! api/apiRequest */ "./src/api/apiRequest.ts");
(function () {
    var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

    enterModule && enterModule(module);
})();


const baseUri = "https://www.googleapis.com/gmail/v1";
var HeaderType;
(function (HeaderType) {
    HeaderType["From"] = "From";
    HeaderType["Subject"] = "Subject";
})(HeaderType || (HeaderType = {}));
const getMessage = (userId, messageId) => {
    return api_apiRequest__WEBPACK_IMPORTED_MODULE_0__["ApiRequest"].get(`${baseUri}/users/${userId}/messages/${messageId}?format=metadata`).handler(api_apiRequest__WEBPACK_IMPORTED_MODULE_0__["jsonHandler"]);
};
;

(function () {
    var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

    var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(baseUri, "baseUri", "D:/Projects/js-boilerplate/src/api/gmail/getMessage.ts");
    reactHotLoader.register(HeaderType, "HeaderType", "D:/Projects/js-boilerplate/src/api/gmail/getMessage.ts");
    reactHotLoader.register(getMessage, "getMessage", "D:/Projects/js-boilerplate/src/api/gmail/getMessage.ts");
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/api/gmail/getMessageList.ts":
/*!*****************************************!*\
  !*** ./src/api/gmail/getMessageList.ts ***!
  \*****************************************/
/*! exports provided: getMessageList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMessageList", function() { return getMessageList; });
/* harmony import */ var api_apiRequest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! api/apiRequest */ "./src/api/apiRequest.ts");
(function () {
    var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

    enterModule && enterModule(module);
})();


const baseUri = "https://www.googleapis.com/gmail/v1";
const getMessageList = (userId, maxResult = 20) => {
    return api_apiRequest__WEBPACK_IMPORTED_MODULE_0__["ApiRequest"].get(`${baseUri}/users/${userId}/messages?maxResults=${maxResult}`).handler(api_apiRequest__WEBPACK_IMPORTED_MODULE_0__["jsonHandler"]);
};
;

(function () {
    var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

    var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(baseUri, "baseUri", "D:/Projects/js-boilerplate/src/api/gmail/getMessageList.ts");
    reactHotLoader.register(getMessageList, "getMessageList", "D:/Projects/js-boilerplate/src/api/gmail/getMessageList.ts");
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/api/gmail/getProfile.ts":
/*!*************************************!*\
  !*** ./src/api/gmail/getProfile.ts ***!
  \*************************************/
/*! exports provided: getProfile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProfile", function() { return getProfile; });
/* harmony import */ var api_apiRequest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! api/apiRequest */ "./src/api/apiRequest.ts");
(function () {
    var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

    enterModule && enterModule(module);
})();


const baseUri = "https://www.googleapis.com/gmail/v1";
const getProfile = userId => {
    return api_apiRequest__WEBPACK_IMPORTED_MODULE_0__["ApiRequest"].get(`${baseUri}/users/${userId}/profile`).handler(api_apiRequest__WEBPACK_IMPORTED_MODULE_0__["jsonHandler"]);
};
;

(function () {
    var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

    var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(baseUri, "baseUri", "D:/Projects/js-boilerplate/src/api/gmail/getProfile.ts");
    reactHotLoader.register(getProfile, "getProfile", "D:/Projects/js-boilerplate/src/api/gmail/getProfile.ts");
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/api/gmail/index.ts":
/*!********************************!*\
  !*** ./src/api/gmail/index.ts ***!
  \********************************/
/*! exports provided: HeaderType, getMessage, getMessageList, getProfile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getMessage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getMessage */ "./src/api/gmail/getMessage.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HeaderType", function() { return _getMessage__WEBPACK_IMPORTED_MODULE_0__["HeaderType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMessage", function() { return _getMessage__WEBPACK_IMPORTED_MODULE_0__["getMessage"]; });

/* harmony import */ var _getMessageList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getMessageList */ "./src/api/gmail/getMessageList.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMessageList", function() { return _getMessageList__WEBPACK_IMPORTED_MODULE_1__["getMessageList"]; });

/* harmony import */ var _getProfile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getProfile */ "./src/api/gmail/getProfile.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getProfile", function() { return _getProfile__WEBPACK_IMPORTED_MODULE_2__["getProfile"]; });





/***/ }),

/***/ "./src/i18n.ts":
/*!*********************!*\
  !*** ./src/i18n.ts ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! i18next */ "./node_modules/i18next/dist/es/index.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _locales_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../locales/index.js */ "./locales/index.js");
/* harmony import */ var _locales_index_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_locales_index_js__WEBPACK_IMPORTED_MODULE_2__);
(function () {
    var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

    enterModule && enterModule(module);
})();




i18next__WEBPACK_IMPORTED_MODULE_0__["default"].use(react_i18next__WEBPACK_IMPORTED_MODULE_1__["reactI18nextModule"]) // passes i18n down to react-i18next
.init({
    resources: (_locales_index_js__WEBPACK_IMPORTED_MODULE_2___default()),
    lng: undefined,
    defaultNS: "common",
    keySeparator: false,
    interpolation: {
        escapeValue: false
    }
});
const _default = i18next__WEBPACK_IMPORTED_MODULE_0__["default"];
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
    var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

    var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(_default, "default", "D:/Projects/js-boilerplate/src/i18n.ts");
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! connected-react-router */ "./node_modules/connected-react-router/esm/index.js");
/* harmony import */ var i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! i18n */ "./src/i18n.ts");
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! history */ "./node_modules/history/es/index.js");
/* harmony import */ var store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! store */ "./src/store/index.ts");
/* harmony import */ var modules_App__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! modules/App */ "./src/modules/App.tsx");
(function () {
    var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

    enterModule && enterModule(module);
})();









const initialState = {};
const history = Object(history__WEBPACK_IMPORTED_MODULE_5__["createBrowserHistory"])({ basename: "" });
const store = Object(store__WEBPACK_IMPORTED_MODULE_6__["default"])(initialState, history);
react_dom__WEBPACK_IMPORTED_MODULE_1__["render"](react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_redux__WEBPACK_IMPORTED_MODULE_2__["Provider"], { store: store }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](connected_react_router__WEBPACK_IMPORTED_MODULE_3__["ConnectedRouter"], { history: history }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](modules_App__WEBPACK_IMPORTED_MODULE_7__["default"], null))), document.getElementById("app"));
;

(function () {
    var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

    var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(initialState, "initialState", "D:/Projects/js-boilerplate/src/index.tsx");
    reactHotLoader.register(history, "history", "D:/Projects/js-boilerplate/src/index.tsx");
    reactHotLoader.register(store, "store", "D:/Projects/js-boilerplate/src/index.tsx");
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/modules/App.css":
/*!*****************************!*\
  !*** ./src/modules/App.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/typings-for-css-modules-loader/lib??ref--7-1!./App.css */ "./node_modules/typings-for-css-modules-loader/lib/index.js??ref--7-1!./src/modules/App.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept(/*! !../../node_modules/typings-for-css-modules-loader/lib??ref--7-1!./App.css */ "./node_modules/typings-for-css-modules-loader/lib/index.js??ref--7-1!./src/modules/App.css", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { (function() {
			var newContent = __webpack_require__(/*! !../../node_modules/typings-for-css-modules-loader/lib??ref--7-1!./App.css */ "./node_modules/typings-for-css-modules-loader/lib/index.js??ref--7-1!./src/modules/App.css");
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		})(__WEBPACK_OUTDATED_DEPENDENCIES__); });
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/modules/App.tsx":
/*!*****************************!*\
  !*** ./src/modules/App.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js");
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/es/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/index.es.js");
/* harmony import */ var modules_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! modules/navigation */ "./src/modules/navigation/index.ts");
/* harmony import */ var modules_routes_protected_route__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! modules/routes/protected-route */ "./src/modules/routes/protected-route/index.ts");
/* harmony import */ var modules_pages_home__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! modules/pages/home */ "./src/modules/pages/home/index.ts");
/* harmony import */ var modules_pages_login__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! modules/pages/login */ "./src/modules/pages/login/index.ts");
/* harmony import */ var modules_pages_messages__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! modules/pages/messages */ "./src/modules/pages/messages/index.ts");
/* harmony import */ var modules_pages_settings__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! modules/pages/settings */ "./src/modules/pages/settings/index.ts");
/* harmony import */ var modules_pages_video_react_example__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! modules/pages/video-react-example */ "./src/modules/pages/video-react-example/index.ts");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./App.css */ "./src/modules/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_11__);
(function () {
    var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

    enterModule && enterModule(module);
})();













const App = () => react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _App_css__WEBPACK_IMPORTED_MODULE_11__["app"] }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["CssBaseline"], null), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _App_css__WEBPACK_IMPORTED_MODULE_11__["app__header"] }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["AppBar"], { position: "static" }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](modules_navigation__WEBPACK_IMPORTED_MODULE_4__["Navigation"], null))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _App_css__WEBPACK_IMPORTED_MODULE_11__["app__page"] }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_2__["Switch"], null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_2__["Route"], { exact: true, path: "/", component: modules_pages_home__WEBPACK_IMPORTED_MODULE_6__["Home"] }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_2__["Route"], { path: "/login", component: modules_pages_login__WEBPACK_IMPORTED_MODULE_7__["Login"] }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_2__["Route"], { path: "/video-react", component: modules_pages_video_react_example__WEBPACK_IMPORTED_MODULE_10__["VideoReactExample"] }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_2__["Route"], { path: "/settings", component: modules_pages_settings__WEBPACK_IMPORTED_MODULE_9__["Settings"] }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](modules_routes_protected_route__WEBPACK_IMPORTED_MODULE_5__["ProtectedRoute"], { path: "/messages", component: modules_pages_messages__WEBPACK_IMPORTED_MODULE_8__["Messages"] }))));

const _default = Object(react_hot_loader__WEBPACK_IMPORTED_MODULE_1__["hot"])(module)(App);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
    var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

    var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(App, "App", "D:/Projects/js-boilerplate/src/modules/App.tsx");
    reactHotLoader.register(_default, "default", "D:/Projects/js-boilerplate/src/modules/App.tsx");
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/modules/button/UploadButton.tsx":
/*!*********************************************!*\
  !*** ./src/modules/button/UploadButton.tsx ***!
  \*********************************************/
/*! exports provided: UploadButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadButton", function() { return UploadButton; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/Button/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__);
(function () {
    var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

    enterModule && enterModule(module);
})();

var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    return t;
};


class UploadButton extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
    render() {
        const _a = this.props,
              { accept, maxLength, children, component = _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default.a, onUpload } = _a,
              buttonProps = __rest(_a, ["accept", "maxLength", "children", "component", "onUpload"]);
        const Wrapper = component;
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Wrapper, Object.assign({}, buttonProps, { component: "label" }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", Object.assign({ type: "file", style: { display: "none" }, onChange: onUpload }, { accept, maxLength })), children);
    }

    // @ts-ignore
    __reactstandin__regenerateByEval(key, code) {
        // @ts-ignore
        this[key] = eval(code);
    }

}
// <label>
//     <input type="file" style={{ display: "none" }} onChange={onUpload} />
//     <Wrapper {...buttonProps} component="span">
//         {children}
//     </Wrapper>
// </label>

;

(function () {
    var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

    var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(__rest, "__rest", "D:/Projects/js-boilerplate/src/modules/button/UploadButton.tsx");
    reactHotLoader.register(UploadButton, "UploadButton", "D:/Projects/js-boilerplate/src/modules/button/UploadButton.tsx");
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/modules/button/index.ts":
/*!*************************************!*\
  !*** ./src/modules/button/index.ts ***!
  \*************************************/
/*! exports provided: UploadButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UploadButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UploadButton */ "./src/modules/button/UploadButton.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UploadButton", function() { return _UploadButton__WEBPACK_IMPORTED_MODULE_0__["UploadButton"]; });



/***/ }),

/***/ "./src/modules/link/Link.tsx":
/*!***********************************!*\
  !*** ./src/modules/link/Link.tsx ***!
  \***********************************/
/*! exports provided: Link, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return Link; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Link; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
(function () {
    var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

    enterModule && enterModule(module);
})();



class Link extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
    render() {
        const { children, to } = this.props;
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], { to: to, style: { textDecoration: "none", color: "inherit" } }, children);
    }

    // @ts-ignore
    __reactstandin__regenerateByEval(key, code) {
        // @ts-ignore
        this[key] = eval(code);
    }

}

;

(function () {
    var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

    var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(Link, "Link", "D:/Projects/js-boilerplate/src/modules/link/Link.tsx");
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/modules/link/TabLink.tsx":
/*!**************************************!*\
  !*** ./src/modules/link/TabLink.tsx ***!
  \**************************************/
/*! exports provided: TabLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabLink", function() { return TabLink; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Tab */ "./node_modules/@material-ui/core/Tab/index.js");
/* harmony import */ var _material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
(function () {
    var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

    enterModule && enterModule(module);
})();

var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    return t;
};



// Hack: https://github.com/mui-org/material-ui/issues/9106
class TabLink extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
    render() {
        const _a = this.props,
              { to } = _a,
              tabProps = __rest(_a, ["to"]);
        // tslint:disable-next-line:no-any
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_1___default.a, Object.assign({}, tabProps, { component: react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], to }));
    }

    // @ts-ignore
    __reactstandin__regenerateByEval(key, code) {
        // @ts-ignore
        this[key] = eval(code);
    }

}
;

(function () {
    var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

    var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(__rest, "__rest", "D:/Projects/js-boilerplate/src/modules/link/TabLink.tsx");
    reactHotLoader.register(TabLink, "TabLink", "D:/Projects/js-boilerplate/src/modules/link/TabLink.tsx");
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/modules/link/index.ts":
/*!***********************************!*\
  !*** ./src/modules/link/index.ts ***!
  \***********************************/
/*! exports provided: Link, TabLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Link */ "./src/modules/link/Link.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return _Link__WEBPACK_IMPORTED_MODULE_0__["Link"]; });

/* harmony import */ var _TabLink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TabLink */ "./src/modules/link/TabLink.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TabLink", function() { return _TabLink__WEBPACK_IMPORTED_MODULE_1__["TabLink"]; });




/***/ }),

/***/ "./src/modules/localize/index.tsx":
/*!****************************************!*\
  !*** ./src/modules/localize/index.tsx ***!
  \****************************************/
/*! exports provided: Localize, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Localize", function() { return Localize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Localize; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
(function () {
    var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

    enterModule && enterModule(module);
})();



class Localize extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
    render() {
        const { id } = this.props;
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_i18next__WEBPACK_IMPORTED_MODULE_1__["NamespacesConsumer"], null, t => {
            return t(id);
        });
    }

    // @ts-ignore
    __reactstandin__regenerateByEval(key, code) {
        // @ts-ignore
        this[key] = eval(code);
    }

}

;

(function () {
    var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

    var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(Localize, "Localize", "D:/Projects/js-boilerplate/src/modules/localize/index.tsx");
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/modules/navigation/Navigation.tsx":
/*!***********************************************!*\
  !*** ./src/modules/navigation/Navigation.tsx ***!
  \***********************************************/
/*! exports provided: Navigation, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Navigation", function() { return Navigation; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Tabs */ "./node_modules/@material-ui/core/Tabs/index.js");
/* harmony import */ var _material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var modules_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! modules/link */ "./src/modules/link/index.ts");
/* harmony import */ var modules_localize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! modules/localize */ "./src/modules/localize/index.tsx");
(function () {
    var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

    enterModule && enterModule(module);
})();





const PathNameMap = {
    "/": "navigation:home",
    "/settings": "navigation:settings",
    "/messages": "navigation:messages",
    "/video-react": "navigation:video"
};
class Navigation extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
    render() {
        const { path } = this.props;
        const isValidPath = Boolean(PathNameMap[path]);
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_1___default.a, { value: isValidPath ? path : false }, Object.keys(PathNameMap).map(path => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](modules_link__WEBPACK_IMPORTED_MODULE_2__["TabLink"], { key: path, value: path, to: path, label: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](modules_localize__WEBPACK_IMPORTED_MODULE_3__["Localize"], { id: PathNameMap[path] }) })));
    }

    // @ts-ignore
    __reactstandin__regenerateByEval(key, code) {
        // @ts-ignore
        this[key] = eval(code);
    }

}
const _default = Navigation;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
    var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

    var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(PathNameMap, "PathNameMap", "D:/Projects/js-boilerplate/src/modules/navigation/Navigation.tsx");
    reactHotLoader.register(Navigation, "Navigation", "D:/Projects/js-boilerplate/src/modules/navigation/Navigation.tsx");
    reactHotLoader.register(_default, "default", "D:/Projects/js-boilerplate/src/modules/navigation/Navigation.tsx");
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/modules/navigation/index.ts":
/*!*****************************************!*\
  !*** ./src/modules/navigation/index.ts ***!
  \*****************************************/
/*! exports provided: default, Navigation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NavigationModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Navigation", function() { return NavigationModule; });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navigation */ "./src/modules/navigation/Navigation.tsx");
(function () {
    var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

    enterModule && enterModule(module);
})();



const mapStateToProps = state => {
    const path = state.router.location.pathname;
    return {
        path
    };
};
const mapDispatchToProps = {};
const NavigationModule = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_Navigation__WEBPACK_IMPORTED_MODULE_1__["default"]);

;

(function () {
    var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

    var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(mapStateToProps, "mapStateToProps", "D:/Projects/js-boilerplate/src/modules/navigation/index.ts");
    reactHotLoader.register(mapDispatchToProps, "mapDispatchToProps", "D:/Projects/js-boilerplate/src/modules/navigation/index.ts");
    reactHotLoader.register(NavigationModule, "NavigationModule", "D:/Projects/js-boilerplate/src/modules/navigation/index.ts");
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/modules/pages/home/Home.tsx":
/*!*****************************************!*\
  !*** ./src/modules/pages/home/Home.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/Button/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/Grid/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var modules_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! modules/link */ "./src/modules/link/index.ts");
/* harmony import */ var modules_localize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! modules/localize */ "./src/modules/localize/index.tsx");
(function () {
    var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

    enterModule && enterModule(module);
})();






class Home extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
    render() {
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, { container: true, justify: "center", alignItems: "center" }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](modules_link__WEBPACK_IMPORTED_MODULE_3__["Link"], { to: "/messages" }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default.a, { variant: "contained", color: "primary" }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](modules_localize__WEBPACK_IMPORTED_MODULE_4__["Localize"], { id: "home:viewMessages" }))));
    }

    // @ts-ignore
    __reactstandin__regenerateByEval(key, code) {
        // @ts-ignore
        this[key] = eval(code);
    }

}
;

(function () {
    var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

    var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(Home, "Home", "D:/Projects/js-boilerplate/src/modules/pages/home/Home.tsx");
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/modules/pages/home/index.ts":
/*!*****************************************!*\
  !*** ./src/modules/pages/home/index.ts ***!
  \*****************************************/
/*! exports provided: default, Home */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HomeModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Home", function() { return HomeModule; });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home */ "./src/modules/pages/home/Home.tsx");
(function () {
    var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

    enterModule && enterModule(module);
})();



const mapStateToProps = _state => {
    return {};
};
const mapDispatchToProps = {};
const HomeModule = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_Home__WEBPACK_IMPORTED_MODULE_1__["default"]);

;

(function () {
    var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

    var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(mapStateToProps, "mapStateToProps", "D:/Projects/js-boilerplate/src/modules/pages/home/index.ts");
    reactHotLoader.register(mapDispatchToProps, "mapDispatchToProps", "D:/Projects/js-boilerplate/src/modules/pages/home/index.ts");
    reactHotLoader.register(HomeModule, "HomeModule", "D:/Projects/js-boilerplate/src/modules/pages/home/index.ts");
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/modules/pages/login/Login.tsx":
/*!*******************************************!*\
  !*** ./src/modules/pages/login/Login.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/es/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/Button/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/Grid/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/Typography/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var modules_localize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! modules/localize */ "./src/modules/localize/index.tsx");
(function () {
    var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

    enterModule && enterModule(module);
})();







class Login extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
    render() {
        const { isAuthenticated, redirectPath } = this.props;
        if (isAuthenticated) {
            return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_1__["Redirect"], { to: redirectPath });
        }
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, { container: true, justify: "center", alignItems: "center", direction: "column" }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, { item: true }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, { variant: "h6", color: "inherit" }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](modules_localize__WEBPACK_IMPORTED_MODULE_5__["Localize"], { id: "login:needAuthorize" }))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, { item: true }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default.a, { variant: "contained", color: "primary", onClick: this.props.signUp }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](modules_localize__WEBPACK_IMPORTED_MODULE_5__["Localize"], { id: "login:signUp" }))));
    }

    // @ts-ignore
    __reactstandin__regenerateByEval(key, code) {
        // @ts-ignore
        this[key] = eval(code);
    }

}
const _default = Login;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
    var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

    var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(Login, "Login", "D:/Projects/js-boilerplate/src/modules/pages/login/Login.tsx");
    reactHotLoader.register(_default, "default", "D:/Projects/js-boilerplate/src/modules/pages/login/Login.tsx");
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/modules/pages/login/index.ts":
/*!******************************************!*\
  !*** ./src/modules/pages/login/index.ts ***!
  \******************************************/
/*! exports provided: default, Login */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LoginModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Login", function() { return LoginModule; });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var reducers_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reducers/actions */ "./src/reducers/actions/index.ts");
/* harmony import */ var _Login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Login */ "./src/modules/pages/login/Login.tsx");
(function () {
    var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

    enterModule && enterModule(module);
})();




const getRedirectPath = path => {
    const result = /.*redirectPath=(?<path>.*).*/.exec(path);
    return result && result[1] || "/";
};
const mapStateToProps = state => {
    const redirectPath = getRedirectPath(state.router.location.search);
    return {
        isAuthenticated: Boolean(state.auth.tokenInfo),
        redirectPath
    };
};
const mapDispatchToProps = {
    signUp: reducers_actions__WEBPACK_IMPORTED_MODULE_1__["signUp"]
};
const LoginModule = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_Login__WEBPACK_IMPORTED_MODULE_2__["default"]);

;

(function () {
    var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

    var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(getRedirectPath, "getRedirectPath", "D:/Projects/js-boilerplate/src/modules/pages/login/index.ts");
    reactHotLoader.register(mapStateToProps, "mapStateToProps", "D:/Projects/js-boilerplate/src/modules/pages/login/index.ts");
    reactHotLoader.register(mapDispatchToProps, "mapDispatchToProps", "D:/Projects/js-boilerplate/src/modules/pages/login/index.ts");
    reactHotLoader.register(LoginModule, "LoginModule", "D:/Projects/js-boilerplate/src/modules/pages/login/index.ts");
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/modules/pages/messages/Messages.scss":
/*!**************************************************!*\
  !*** ./src/modules/pages/messages/Messages.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/typings-for-css-modules-loader/lib??ref--8-1!../../../../node_modules/sass-loader/lib/loader.js!./Messages.scss */ "./node_modules/typings-for-css-modules-loader/lib/index.js??ref--8-1!./node_modules/sass-loader/lib/loader.js!./src/modules/pages/messages/Messages.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept(/*! !../../../../node_modules/typings-for-css-modules-loader/lib??ref--8-1!../../../../node_modules/sass-loader/lib/loader.js!./Messages.scss */ "./node_modules/typings-for-css-modules-loader/lib/index.js??ref--8-1!./node_modules/sass-loader/lib/loader.js!./src/modules/pages/messages/Messages.scss", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { (function() {
			var newContent = __webpack_require__(/*! !../../../../node_modules/typings-for-css-modules-loader/lib??ref--8-1!../../../../node_modules/sass-loader/lib/loader.js!./Messages.scss */ "./node_modules/typings-for-css-modules-loader/lib/index.js??ref--8-1!./node_modules/sass-loader/lib/loader.js!./src/modules/pages/messages/Messages.scss");
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		})(__WEBPACK_OUTDATED_DEPENDENCIES__); });
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/modules/pages/messages/Messages.tsx":
/*!*************************************************!*\
  !*** ./src/modules/pages/messages/Messages.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Messages; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "./node_modules/@material-ui/core/CircularProgress/index.js");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/Grid/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/Paper/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Table */ "./node_modules/@material-ui/core/Table/index.js");
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/TableBody */ "./node_modules/@material-ui/core/TableBody/index.js");
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/TableCell */ "./node_modules/@material-ui/core/TableCell/index.js");
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/TableHead */ "./node_modules/@material-ui/core/TableHead/index.js");
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/TableRow */ "./node_modules/@material-ui/core/TableRow/index.js");
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var modules_localize__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! modules/localize */ "./src/modules/localize/index.tsx");
/* harmony import */ var _Messages_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Messages.scss */ "./src/modules/pages/messages/Messages.scss");
/* harmony import */ var _Messages_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_Messages_scss__WEBPACK_IMPORTED_MODULE_10__);
(function () {
    var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

    enterModule && enterModule(module);
})();


const classNames = __webpack_require__(/*! classnames/bind */ "./node_modules/classnames/bind.js");










const style = classNames.bind(_Messages_scss__WEBPACK_IMPORTED_MODULE_10___default.a);
class Messages extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
    constructor() {
        super(...arguments);
        this.renderPreloader = () => {
            return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_1___default.a, null);
        };
        this.renderContent = () => {
            const { messages } = this.props;
            if (!messages) {
                return null;
            }
            return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3___default.a, null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_4___default.a, null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_7___default.a, null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_8___default.a, null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_6___default.a, null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](modules_localize__WEBPACK_IMPORTED_MODULE_9__["default"], { id: "messages:from" })), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_6___default.a, null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](modules_localize__WEBPACK_IMPORTED_MODULE_9__["default"], { id: "messages:subject" })))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_5___default.a, null, messages.map(row => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_8___default.a, { key: row.id }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_6___default.a, null, row.from), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_6___default.a, null, row.subject))))));
        };
    }
    render() {
        const { isLoading } = this.props;
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, { container: true, justify: "center", alignItems: "center", className: style(_Messages_scss__WEBPACK_IMPORTED_MODULE_10___default.a.messages) }, isLoading ? this.renderPreloader() : this.renderContent());
    }

    // @ts-ignore
    __reactstandin__regenerateByEval(key, code) {
        // @ts-ignore
        this[key] = eval(code);
    }

}
;

(function () {
    var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

    var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(style, "style", "D:/Projects/js-boilerplate/src/modules/pages/messages/Messages.tsx");
    reactHotLoader.register(Messages, "Messages", "D:/Projects/js-boilerplate/src/modules/pages/messages/Messages.tsx");
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/modules/pages/messages/index.ts":
/*!*********************************************!*\
  !*** ./src/modules/pages/messages/index.ts ***!
  \*********************************************/
/*! exports provided: default, Messages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MessagesModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Messages", function() { return MessagesModule; });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Messages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Messages */ "./src/modules/pages/messages/Messages.tsx");
(function () {
    var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

    enterModule && enterModule(module);
})();



const mapStateToProps = state => {
    return {
        messages: state.messages.items,
        isLoading: state.messages.isLoading
    };
};
const mapDispatchToProps = {};
const MessagesModule = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_Messages__WEBPACK_IMPORTED_MODULE_1__["default"]);

;

(function () {
    var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

    var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(mapStateToProps, "mapStateToProps", "D:/Projects/js-boilerplate/src/modules/pages/messages/index.ts");
    reactHotLoader.register(mapDispatchToProps, "mapDispatchToProps", "D:/Projects/js-boilerplate/src/modules/pages/messages/index.ts");
    reactHotLoader.register(MessagesModule, "MessagesModule", "D:/Projects/js-boilerplate/src/modules/pages/messages/index.ts");
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/modules/pages/settings/Settings.tsx":
/*!*************************************************!*\
  !*** ./src/modules/pages/settings/Settings.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Settings; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/Grid/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var modules_localize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! modules/localize */ "./src/modules/localize/index.tsx");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/TextField/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/Typography/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__);
(function () {
    var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

    enterModule && enterModule(module);
})();






class Settings extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
    constructor() {
        super(...arguments);
        this.handleChange = event => {
            const clientId = event.currentTarget.value;
            const { onChangeClientId } = this.props;
            onChangeClientId(clientId);
        };
    }
    render() {
        const { clientId } = this.props;
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, { container: true, justify: "center", alignItems: "center", direction: "column" }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, { item: true }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, { variant: "h6", color: "inherit" }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](modules_localize__WEBPACK_IMPORTED_MODULE_2__["Localize"], { id: "settings:enterCientId" }))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, { item: true }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3___default.a, { id: "outlined-name", label: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](modules_localize__WEBPACK_IMPORTED_MODULE_2__["Localize"], { id: "settings:clientId" }), value: clientId, onChange: this.handleChange, margin: "normal", variant: "outlined" })));
    }

    // @ts-ignore
    __reactstandin__regenerateByEval(key, code) {
        // @ts-ignore
        this[key] = eval(code);
    }

}
;

(function () {
    var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

    var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(Settings, "Settings", "D:/Projects/js-boilerplate/src/modules/pages/settings/Settings.tsx");
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/modules/pages/settings/index.ts":
/*!*********************************************!*\
  !*** ./src/modules/pages/settings/index.ts ***!
  \*********************************************/
/*! exports provided: default, Settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SettingsModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Settings", function() { return SettingsModule; });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Settings */ "./src/modules/pages/settings/Settings.tsx");
/* harmony import */ var reducers_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reducers/actions */ "./src/reducers/actions/index.ts");
(function () {
    var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

    enterModule && enterModule(module);
})();




const mapStateToProps = state => {
    return {
        clientId: state.settings.clientId || ""
    };
};
const mapDispatchToProps = {
    onChangeClientId: reducers_actions__WEBPACK_IMPORTED_MODULE_2__["setGmailClientId"]
};
const SettingsModule = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_Settings__WEBPACK_IMPORTED_MODULE_1__["default"]);

;

(function () {
    var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

    var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(mapStateToProps, "mapStateToProps", "D:/Projects/js-boilerplate/src/modules/pages/settings/index.ts");
    reactHotLoader.register(mapDispatchToProps, "mapDispatchToProps", "D:/Projects/js-boilerplate/src/modules/pages/settings/index.ts");
    reactHotLoader.register(SettingsModule, "SettingsModule", "D:/Projects/js-boilerplate/src/modules/pages/settings/index.ts");
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/modules/pages/video-react-example/VideoReactExample.scss":
/*!**********************************************************************!*\
  !*** ./src/modules/pages/video-react-example/VideoReactExample.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/typings-for-css-modules-loader/lib??ref--8-1!../../../../node_modules/sass-loader/lib/loader.js!./VideoReactExample.scss */ "./node_modules/typings-for-css-modules-loader/lib/index.js??ref--8-1!./node_modules/sass-loader/lib/loader.js!./src/modules/pages/video-react-example/VideoReactExample.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept(/*! !../../../../node_modules/typings-for-css-modules-loader/lib??ref--8-1!../../../../node_modules/sass-loader/lib/loader.js!./VideoReactExample.scss */ "./node_modules/typings-for-css-modules-loader/lib/index.js??ref--8-1!./node_modules/sass-loader/lib/loader.js!./src/modules/pages/video-react-example/VideoReactExample.scss", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { (function() {
			var newContent = __webpack_require__(/*! !../../../../node_modules/typings-for-css-modules-loader/lib??ref--8-1!../../../../node_modules/sass-loader/lib/loader.js!./VideoReactExample.scss */ "./node_modules/typings-for-css-modules-loader/lib/index.js??ref--8-1!./node_modules/sass-loader/lib/loader.js!./src/modules/pages/video-react-example/VideoReactExample.scss");
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		})(__WEBPACK_OUTDATED_DEPENDENCIES__); });
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/modules/pages/video-react-example/VideoReactExample.tsx":
/*!*********************************************************************!*\
  !*** ./src/modules/pages/video-react-example/VideoReactExample.tsx ***!
  \*********************************************************************/
/*! exports provided: VideoReactExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoReactExample", function() { return VideoReactExample; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var modules_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! modules/button */ "./src/modules/button/index.ts");
/* harmony import */ var _video_player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./video-player */ "./src/modules/pages/video-react-example/video-player/index.ts");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/index.es.js");
/* harmony import */ var _material_ui_icons_Attachment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Attachment */ "./node_modules/@material-ui/icons/Attachment.js");
/* harmony import */ var _material_ui_icons_Attachment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Attachment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var modules_localize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! modules/localize */ "./src/modules/localize/index.tsx");
/* harmony import */ var _VideoReactExample_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./VideoReactExample.scss */ "./src/modules/pages/video-react-example/VideoReactExample.scss");
/* harmony import */ var _VideoReactExample_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_VideoReactExample_scss__WEBPACK_IMPORTED_MODULE_6__);
(function () {
    var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

    enterModule && enterModule(module);
})();








class VideoReactExample extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
    constructor() {
        super(...arguments);
        this.state = {};
        this.renderControlPanel = () => {
            const { subtitlesFile, videoFile } = this.state;
            return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _VideoReactExample_scss__WEBPACK_IMPORTED_MODULE_6___default.a["video-player__control-panel"] }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["TextField"], { disabled: true, className: _VideoReactExample_scss__WEBPACK_IMPORTED_MODULE_6___default.a["video-player__control-item"], value: videoFile ? videoFile.name : "", helperText: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](modules_localize__WEBPACK_IMPORTED_MODULE_5__["Localize"], { id: "videoPlayer:video" }), InputProps: {
                    startAdornment: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](modules_button__WEBPACK_IMPORTED_MODULE_1__["UploadButton"], { accept: ".mp4", maxLength: 1, onUpload: this.handleVideoUpload, component: _material_ui_core__WEBPACK_IMPORTED_MODULE_3__["IconButton"] }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_icons_Attachment__WEBPACK_IMPORTED_MODULE_4___default.a, null))
                } }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["TextField"], { disabled: true, className: _VideoReactExample_scss__WEBPACK_IMPORTED_MODULE_6___default.a["video-player__control-item"], value: subtitlesFile ? subtitlesFile.name : "", helperText: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](modules_localize__WEBPACK_IMPORTED_MODULE_5__["Localize"], { id: "videoPlayer:subtitle" }), InputProps: {
                    startAdornment: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](modules_button__WEBPACK_IMPORTED_MODULE_1__["UploadButton"], { accept: ".srt", maxLength: 1, onUpload: this.handleSubtitlesUpload, component: _material_ui_core__WEBPACK_IMPORTED_MODULE_3__["IconButton"] }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_icons_Attachment__WEBPACK_IMPORTED_MODULE_4___default.a, null))
                } }));
        };
        this.handleVideoUpload = event => {
            const targetEvent = event.currentTarget;
            const files = targetEvent.files;
            if (files.length === 1) {
                const file = files[0];
                this.setState({
                    videoFile: {
                        name: file.name,
                        url: URL.createObjectURL(file)
                    }
                });
            }
        };
        this.handleSubtitlesUpload = event => {
            const targetEvent = event.currentTarget;
            const files = targetEvent.files;
            if (files.length === 1) {
                const file = files[0];
                this.setState({
                    subtitlesFile: {
                        name: file.name,
                        url: URL.createObjectURL(file)
                    }
                });
            }
        };
    }
    render() {
        const { videoFile, subtitlesFile } = this.state;
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _VideoReactExample_scss__WEBPACK_IMPORTED_MODULE_6___default.a["video-player"] }, this.renderControlPanel(), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_video_player__WEBPACK_IMPORTED_MODULE_2__["VideoPlayer"], { className: _VideoReactExample_scss__WEBPACK_IMPORTED_MODULE_6___default.a["video-player__player"], videoFileURL: videoFile && videoFile.url, subtitlesFileURL: subtitlesFile && subtitlesFile.url }));
    }

    // @ts-ignore
    __reactstandin__regenerateByEval(key, code) {
        // @ts-ignore
        this[key] = eval(code);
    }

}
;

(function () {
    var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

    var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(VideoReactExample, "VideoReactExample", "D:/Projects/js-boilerplate/src/modules/pages/video-react-example/VideoReactExample.tsx");
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/modules/pages/video-react-example/index.ts":
/*!********************************************************!*\
  !*** ./src/modules/pages/video-react-example/index.ts ***!
  \********************************************************/
/*! exports provided: VideoReactExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VideoReactExample__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VideoReactExample */ "./src/modules/pages/video-react-example/VideoReactExample.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VideoReactExample", function() { return _VideoReactExample__WEBPACK_IMPORTED_MODULE_0__["VideoReactExample"]; });



/***/ }),

/***/ "./src/modules/pages/video-react-example/video-player/VideoPlayer.scss":
/*!*****************************************************************************!*\
  !*** ./src/modules/pages/video-react-example/video-player/VideoPlayer.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../../node_modules/typings-for-css-modules-loader/lib??ref--8-1!../../../../../node_modules/sass-loader/lib/loader.js!./VideoPlayer.scss */ "./node_modules/typings-for-css-modules-loader/lib/index.js??ref--8-1!./node_modules/sass-loader/lib/loader.js!./src/modules/pages/video-react-example/video-player/VideoPlayer.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept(/*! !../../../../../node_modules/typings-for-css-modules-loader/lib??ref--8-1!../../../../../node_modules/sass-loader/lib/loader.js!./VideoPlayer.scss */ "./node_modules/typings-for-css-modules-loader/lib/index.js??ref--8-1!./node_modules/sass-loader/lib/loader.js!./src/modules/pages/video-react-example/video-player/VideoPlayer.scss", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { (function() {
			var newContent = __webpack_require__(/*! !../../../../../node_modules/typings-for-css-modules-loader/lib??ref--8-1!../../../../../node_modules/sass-loader/lib/loader.js!./VideoPlayer.scss */ "./node_modules/typings-for-css-modules-loader/lib/index.js??ref--8-1!./node_modules/sass-loader/lib/loader.js!./src/modules/pages/video-react-example/video-player/VideoPlayer.scss");
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		})(__WEBPACK_OUTDATED_DEPENDENCIES__); });
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/modules/pages/video-react-example/video-player/VideoPlayer.tsx":
/*!****************************************************************************!*\
  !*** ./src/modules/pages/video-react-example/video-player/VideoPlayer.tsx ***!
  \****************************************************************************/
/*! exports provided: VideoPlayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoPlayer", function() { return VideoPlayer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/Button/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_icons_PlayCircleOutline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/PlayCircleOutline */ "./node_modules/@material-ui/icons/PlayCircleOutline.js");
/* harmony import */ var _material_ui_icons_PlayCircleOutline__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_PlayCircleOutline__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons_Fullscreen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/Fullscreen */ "./node_modules/@material-ui/icons/Fullscreen.js");
/* harmony import */ var _material_ui_icons_Fullscreen__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Fullscreen__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_lab_Slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/lab/Slider */ "./node_modules/@material-ui/lab/Slider/index.js");
/* harmony import */ var _material_ui_lab_Slider__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_lab_Slider__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _VideoPlayer_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./VideoPlayer.scss */ "./src/modules/pages/video-react-example/video-player/VideoPlayer.scss");
/* harmony import */ var _VideoPlayer_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_VideoPlayer_scss__WEBPACK_IMPORTED_MODULE_5__);
(function () {
    var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

    enterModule && enterModule(module);
})();


const classNames = __webpack_require__(/*! classnames/bind */ "./node_modules/classnames/bind.js");





const style = classNames.bind(_VideoPlayer_scss__WEBPACK_IMPORTED_MODULE_5___default.a);
class VideoPlayer extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
    constructor(props) {
        super(props);
        this.state = {
            isFullscreen: false,
            isPaused: true,
            seekPosition: 0,
            subtitles: []
        };
        this.subscribe = () => {
            // TODO: Подписки нужно делать лишь раз
            if (this.trackElement) {
                const textTrack = this.trackElement.track;
                textTrack.mode = "hidden";
                textTrack.oncuechange = this.handleCueChange;
            }
        };
        this.handleChangeSeekPosition = (_event, value) => {
            if (this.videoElement) {
                const duration = this.videoElement.duration;
                const currentTime = duration * (value / 100);
                this.videoElement.currentTime = currentTime;
            }
        };
        this.handlePlay = () => {
            if (this.videoElement) {
                const { isPaused } = this.state;
                if (isPaused) {
                    this.videoElement.play();
                } else {
                    this.videoElement.pause();
                }
                this.setState({ isPaused: !isPaused });
            }
        };
        this.handleWheel = event => {
            if (this.videoElement) {
                if (event.deltaY > 0) {
                    this.videoElement.currentTime -= 5; // to const
                } else {
                    this.videoElement.currentTime += 5;
                }
            }
            event.preventDefault();
        };
        this.handleTimeUpdate = () => {
            if (this.videoElement) {
                const duration = this.videoElement.duration;
                const currentTime = this.videoElement.currentTime;
                const seekPosition = 100 / duration * currentTime;
                this.setState({ seekPosition });
            }
        };
        this.handleCueChange = () => {
            if (this.trackElement) {
                const textTrack = this.trackElement.track;
                const subtitles = [];
                for (const cue of textTrack.activeCues) {
                    const text = cue.text.replace(/(<([^>]+)>)/gi, "");
                    subtitles.push(text);
                }
                this.setState({ subtitles });
            }
        };
        this.toogleFullScreen = () => {
            const { isFullscreen } = this.state;
            if (isFullscreen) {
                document.exitFullscreen().catch(errorLogger);
            } else {
                this.videoPlayerElement.requestFullscreen().catch(errorLogger);
            }
            this.setState({ isFullscreen: !isFullscreen });
        };
    }
    componentDidMount() {
        this.subscribe();
    }
    componentDidUpdate() {
        this.subscribe();
    }
    render() {
        const { className, videoFileURL, subtitlesFileURL } = this.props;
        const { seekPosition, subtitles } = this.state;
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { ref: component => {
                this.videoPlayerElement = component;
            }, className: style(_VideoPlayer_scss__WEBPACK_IMPORTED_MODULE_5___default.a["video-player"], className), onWheel: this.handleWheel }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("video", { src: videoFileURL, ref: component => {
                this.videoElement = component;
            }, className: style(_VideoPlayer_scss__WEBPACK_IMPORTED_MODULE_5___default.a["video-player__video"]), onClick: this.handlePlay, onDoubleClick: this.toogleFullScreen, onTimeUpdate: this.handleTimeUpdate }, subtitlesFileURL && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("track", { ref: component => {
                this.trackElement = component;
            }, style: { display: "none" }, kind: "subtitles", src: subtitlesFileURL, default: true })), subtitles.length > 0 && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: style("video-player__subtitle") }, subtitles.map((subtitle, index) => react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { key: index }, subtitle))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: style(_VideoPlayer_scss__WEBPACK_IMPORTED_MODULE_5___default.a["video-player__controls"]) }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default.a, { color: "primary", "aria-label": "Play", onClick: this.handlePlay }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_icons_PlayCircleOutline__WEBPACK_IMPORTED_MODULE_2___default.a, null)), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_lab_Slider__WEBPACK_IMPORTED_MODULE_4___default.a, { className: style(_VideoPlayer_scss__WEBPACK_IMPORTED_MODULE_5___default.a["video-player__slider"]), value: seekPosition, onChange: this.handleChangeSeekPosition }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default.a, { color: "primary", "aria-label": "Fullscreen", onClick: this.toogleFullScreen }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_icons_Fullscreen__WEBPACK_IMPORTED_MODULE_3___default.a, null))));
    }

    // @ts-ignore
    __reactstandin__regenerateByEval(key, code) {
        // @ts-ignore
        this[key] = eval(code);
    }

}
const errorLogger = reason => {
    // tslint:disable-next-line:no-console
    console.log("reason", JSON.stringify(reason, null, " "));
};
;

(function () {
    var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

    var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(style, "style", "D:/Projects/js-boilerplate/src/modules/pages/video-react-example/video-player/VideoPlayer.tsx");
    reactHotLoader.register(VideoPlayer, "VideoPlayer", "D:/Projects/js-boilerplate/src/modules/pages/video-react-example/video-player/VideoPlayer.tsx");
    reactHotLoader.register(errorLogger, "errorLogger", "D:/Projects/js-boilerplate/src/modules/pages/video-react-example/video-player/VideoPlayer.tsx");
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/modules/pages/video-react-example/video-player/index.ts":
/*!*********************************************************************!*\
  !*** ./src/modules/pages/video-react-example/video-player/index.ts ***!
  \*********************************************************************/
/*! exports provided: VideoPlayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VideoPlayer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VideoPlayer */ "./src/modules/pages/video-react-example/video-player/VideoPlayer.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VideoPlayer", function() { return _VideoPlayer__WEBPACK_IMPORTED_MODULE_0__["VideoPlayer"]; });



/***/ }),

/***/ "./src/modules/routes/protected-route/ProtectedRoute.tsx":
/*!***************************************************************!*\
  !*** ./src/modules/routes/protected-route/ProtectedRoute.tsx ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProtectedRoute; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/es/index.js");
(function () {
    var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

    enterModule && enterModule(module);
})();

var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    return t;
};


class ProtectedRoute extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
    render() {
        const _a = this.props,
              { isAuthenticated, currentPath } = _a,
              otherProps = __rest(_a, ["isAuthenticated", "currentPath"]);
        if (!isAuthenticated) {
            return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_1__["Redirect"], { to: `/login?redirectPath=${currentPath}` });
        }
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_1__["Route"], Object.assign({}, otherProps));
    }

    // @ts-ignore
    __reactstandin__regenerateByEval(key, code) {
        // @ts-ignore
        this[key] = eval(code);
    }

}
;

(function () {
    var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

    var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(__rest, "__rest", "D:/Projects/js-boilerplate/src/modules/routes/protected-route/ProtectedRoute.tsx");
    reactHotLoader.register(ProtectedRoute, "ProtectedRoute", "D:/Projects/js-boilerplate/src/modules/routes/protected-route/ProtectedRoute.tsx");
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/modules/routes/protected-route/index.ts":
/*!*****************************************************!*\
  !*** ./src/modules/routes/protected-route/index.ts ***!
  \*****************************************************/
/*! exports provided: default, ProtectedRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProtectedRouteModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProtectedRoute", function() { return ProtectedRouteModule; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _ProtectedRoute__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProtectedRoute */ "./src/modules/routes/protected-route/ProtectedRoute.tsx");
(function () {
    var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

    enterModule && enterModule(module);
})();




const mapStateToProps = state => {
    // TODO: Add token validation
    return {
        isAuthenticated: Boolean(state.auth.tokenInfo),
        currentPath: state.router.location.pathname
    };
};
const mapDispatchToProps = dispatch => {
    const actionCreators = {};
    return Object(redux__WEBPACK_IMPORTED_MODULE_0__["bindActionCreators"])(actionCreators, dispatch);
};
function selectorFactory(dispatch) {
    const actions = mapDispatchToProps(dispatch);
    return (nextState, newOwnProps) => Object.assign({}, mapStateToProps(nextState), actions, newOwnProps);
}
const ProtectedRouteModule = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connectAdvanced"])(selectorFactory)(_ProtectedRoute__WEBPACK_IMPORTED_MODULE_2__["default"]);

;

(function () {
    var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

    var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(mapStateToProps, "mapStateToProps", "D:/Projects/js-boilerplate/src/modules/routes/protected-route/index.ts");
    reactHotLoader.register(mapDispatchToProps, "mapDispatchToProps", "D:/Projects/js-boilerplate/src/modules/routes/protected-route/index.ts");
    reactHotLoader.register(selectorFactory, "selectorFactory", "D:/Projects/js-boilerplate/src/modules/routes/protected-route/index.ts");
    reactHotLoader.register(ProtectedRouteModule, "ProtectedRouteModule", "D:/Projects/js-boilerplate/src/modules/routes/protected-route/index.ts");
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/reducers/actions/action-helpers.ts":
/*!************************************************!*\
  !*** ./src/reducers/actions/action-helpers.ts ***!
  \************************************************/
/*! exports provided: actionCreator, createAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionCreator", function() { return actionCreator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAction", function() { return createAction; });
(function () {
    var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

    enterModule && enterModule(module);
})();

function actionCreator(type, mapper) {
    // tslint:disable-next-line:no-any
    const actionCreator = function (...args) {
        const payload = mapper ? mapper(...args) : undefined;
        return createAction(type, payload);
    };
    actionCreator.type = type;
    return actionCreator;
}
function createAction(type, payload) {
    return payload === undefined ? { type } : Object.assign({ type }, payload);
}
;

(function () {
    var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

    var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(actionCreator, "actionCreator", "D:/Projects/js-boilerplate/src/reducers/actions/action-helpers.ts");
    reactHotLoader.register(createAction, "createAction", "D:/Projects/js-boilerplate/src/reducers/actions/action-helpers.ts");
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/reducers/actions/index.ts":
/*!***************************************!*\
  !*** ./src/reducers/actions/index.ts ***!
  \***************************************/
/*! exports provided: loadMessages, loadMessagesSuccess, loadMessagesFailure, requestProfile, requestProfileSuccess, requestProfileFailure, setGmailClientId, signUp, signUpSuccess, signUpFail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./messages */ "./src/reducers/actions/messages.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadMessages", function() { return _messages__WEBPACK_IMPORTED_MODULE_0__["loadMessages"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadMessagesSuccess", function() { return _messages__WEBPACK_IMPORTED_MODULE_0__["loadMessagesSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadMessagesFailure", function() { return _messages__WEBPACK_IMPORTED_MODULE_0__["loadMessagesFailure"]; });

/* harmony import */ var _profile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile */ "./src/reducers/actions/profile.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "requestProfile", function() { return _profile__WEBPACK_IMPORTED_MODULE_1__["requestProfile"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "requestProfileSuccess", function() { return _profile__WEBPACK_IMPORTED_MODULE_1__["requestProfileSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "requestProfileFailure", function() { return _profile__WEBPACK_IMPORTED_MODULE_1__["requestProfileFailure"]; });

/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings */ "./src/reducers/actions/settings.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setGmailClientId", function() { return _settings__WEBPACK_IMPORTED_MODULE_2__["setGmailClientId"]; });

/* harmony import */ var _signUp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signUp */ "./src/reducers/actions/signUp.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "signUp", function() { return _signUp__WEBPACK_IMPORTED_MODULE_3__["signUp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "signUpSuccess", function() { return _signUp__WEBPACK_IMPORTED_MODULE_3__["signUpSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "signUpFail", function() { return _signUp__WEBPACK_IMPORTED_MODULE_3__["signUpFail"]; });






/***/ }),

/***/ "./src/reducers/actions/messages.ts":
/*!******************************************!*\
  !*** ./src/reducers/actions/messages.ts ***!
  \******************************************/
/*! exports provided: loadMessages, loadMessagesSuccess, loadMessagesFailure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadMessages", function() { return loadMessages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadMessagesSuccess", function() { return loadMessagesSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadMessagesFailure", function() { return loadMessagesFailure; });
/* harmony import */ var _action_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action-helpers */ "./src/reducers/actions/action-helpers.ts");
(function () {
    var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

    enterModule && enterModule(module);
})();


const loadMessages = Object(_action_helpers__WEBPACK_IMPORTED_MODULE_0__["actionCreator"])("messages/LOAD");
const loadMessagesSuccess = Object(_action_helpers__WEBPACK_IMPORTED_MODULE_0__["actionCreator"])("messages/LOAD_SUCCESS", messages => ({
    messages
}));
const loadMessagesFailure = Object(_action_helpers__WEBPACK_IMPORTED_MODULE_0__["actionCreator"])("messages/LOAD_FAILURE", (erorr, message) => ({ erorr, message }));
;

(function () {
    var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

    var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(loadMessages, "loadMessages", "D:/Projects/js-boilerplate/src/reducers/actions/messages.ts");
    reactHotLoader.register(loadMessagesSuccess, "loadMessagesSuccess", "D:/Projects/js-boilerplate/src/reducers/actions/messages.ts");
    reactHotLoader.register(loadMessagesFailure, "loadMessagesFailure", "D:/Projects/js-boilerplate/src/reducers/actions/messages.ts");
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/reducers/actions/profile.ts":
/*!*****************************************!*\
  !*** ./src/reducers/actions/profile.ts ***!
  \*****************************************/
/*! exports provided: requestProfile, requestProfileSuccess, requestProfileFailure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestProfile", function() { return requestProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestProfileSuccess", function() { return requestProfileSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestProfileFailure", function() { return requestProfileFailure; });
/* harmony import */ var _action_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action-helpers */ "./src/reducers/actions/action-helpers.ts");
(function () {
    var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

    enterModule && enterModule(module);
})();


const requestProfile = Object(_action_helpers__WEBPACK_IMPORTED_MODULE_0__["actionCreator"])("profile/PROFILE_REQUEST");
const requestProfileSuccess = Object(_action_helpers__WEBPACK_IMPORTED_MODULE_0__["actionCreator"])("profile/PROFILE_SUCCESS", profile => ({
    profile
}));
const requestProfileFailure = Object(_action_helpers__WEBPACK_IMPORTED_MODULE_0__["actionCreator"])("profile/PROFILE_FAILURE", (erorr, message) => ({ erorr, message }));
;

(function () {
    var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

    var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(requestProfile, "requestProfile", "D:/Projects/js-boilerplate/src/reducers/actions/profile.ts");
    reactHotLoader.register(requestProfileSuccess, "requestProfileSuccess", "D:/Projects/js-boilerplate/src/reducers/actions/profile.ts");
    reactHotLoader.register(requestProfileFailure, "requestProfileFailure", "D:/Projects/js-boilerplate/src/reducers/actions/profile.ts");
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/reducers/actions/settings.ts":
/*!******************************************!*\
  !*** ./src/reducers/actions/settings.ts ***!
  \******************************************/
/*! exports provided: setGmailClientId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setGmailClientId", function() { return setGmailClientId; });
/* harmony import */ var _action_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action-helpers */ "./src/reducers/actions/action-helpers.ts");
(function () {
    var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

    enterModule && enterModule(module);
})();


const setGmailClientId = Object(_action_helpers__WEBPACK_IMPORTED_MODULE_0__["actionCreator"])("settings/SET_GMAIL_CLIENT_ID", clientId => ({
    clientId
}));
;

(function () {
    var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

    var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(setGmailClientId, "setGmailClientId", "D:/Projects/js-boilerplate/src/reducers/actions/settings.ts");
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/reducers/actions/signUp.ts":
/*!****************************************!*\
  !*** ./src/reducers/actions/signUp.ts ***!
  \****************************************/
/*! exports provided: signUp, signUpSuccess, signUpFail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signUp", function() { return signUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signUpSuccess", function() { return signUpSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signUpFail", function() { return signUpFail; });
/* harmony import */ var _action_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action-helpers */ "./src/reducers/actions/action-helpers.ts");
(function () {
    var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

    enterModule && enterModule(module);
})();


const signUp = Object(_action_helpers__WEBPACK_IMPORTED_MODULE_0__["actionCreator"])("signUp/SIGN_UP_REQUEST");
const signUpSuccess = Object(_action_helpers__WEBPACK_IMPORTED_MODULE_0__["actionCreator"])("signUp/SIGN_UP_SUCCESS", tokenInfo => ({
    tokenInfo
}));
const signUpFail = Object(_action_helpers__WEBPACK_IMPORTED_MODULE_0__["actionCreator"])("signUp/SIGN_UP_FAILURE", (erorr, message) => ({ erorr, message }));
;

(function () {
    var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

    var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(signUp, "signUp", "D:/Projects/js-boilerplate/src/reducers/actions/signUp.ts");
    reactHotLoader.register(signUpSuccess, "signUpSuccess", "D:/Projects/js-boilerplate/src/reducers/actions/signUp.ts");
    reactHotLoader.register(signUpFail, "signUpFail", "D:/Projects/js-boilerplate/src/reducers/actions/signUp.ts");
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/reducers/auth.ts":
/*!******************************!*\
  !*** ./src/reducers/auth.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {(function () {
    var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

    enterModule && enterModule(module);
})();

const reducer = (state = {}, action) => {
    switch (action.type) {
        case "signUp/SIGN_UP_REQUEST":
            {
                return {};
            }
        case "signUp/SIGN_UP_SUCCESS":
            {
                const { tokenInfo } = action;
                return { tokenInfo };
            }
        case "signUp/SIGN_UP_FAILURE":
            {
                const { message } = action;
                return { errorMessage: message };
            }
        default:
            {
                return state;
            }
    }
};
const _default = reducer;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
    var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

    var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(reducer, "reducer", "D:/Projects/js-boilerplate/src/reducers/auth.ts");
    reactHotLoader.register(_default, "default", "D:/Projects/js-boilerplate/src/reducers/auth.ts");
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/reducers/index.ts":
/*!*******************************!*\
  !*** ./src/reducers/index.ts ***!
  \*******************************/
/*! exports provided: rootReducer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rootReducer", function() { return rootReducer; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! connected-react-router */ "./node_modules/connected-react-router/esm/index.js");
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth */ "./src/reducers/auth.ts");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./messages */ "./src/reducers/messages.ts");
/* harmony import */ var _profile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile */ "./src/reducers/profile.ts");
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./settings */ "./src/reducers/settings.ts");
(function () {
    var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

    enterModule && enterModule(module);
})();







const rootReducer = history => Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
    router: Object(connected_react_router__WEBPACK_IMPORTED_MODULE_1__["connectRouter"])(history),
    auth: _auth__WEBPACK_IMPORTED_MODULE_2__["default"],
    messages: _messages__WEBPACK_IMPORTED_MODULE_3__["default"],
    profile: _profile__WEBPACK_IMPORTED_MODULE_4__["default"],
    settings: _settings__WEBPACK_IMPORTED_MODULE_5__["default"]
});
const _default = rootReducer;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
    var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

    var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(rootReducer, "rootReducer", "D:/Projects/js-boilerplate/src/reducers/index.ts");
    reactHotLoader.register(_default, "default", "D:/Projects/js-boilerplate/src/reducers/index.ts");
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/reducers/messages.ts":
/*!**********************************!*\
  !*** ./src/reducers/messages.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {(function () {
    var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

    enterModule && enterModule(module);
})();

const DefaulState = {
    isLoading: false
};
const reducer = (state = DefaulState, action) => {
    switch (action.type) {
        case "messages/LOAD":
            {
                return { isLoading: true };
            }
        case "messages/LOAD_SUCCESS":
            {
                const { messages } = action;
                return { isLoading: false, items: messages };
            }
        case "messages/LOAD_FAILURE":
            {
                const { message } = action;
                return { isLoading: false, errorMessage: message };
            }
        default:
            {
                return state;
            }
    }
};
const _default = reducer;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
    var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

    var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(DefaulState, "DefaulState", "D:/Projects/js-boilerplate/src/reducers/messages.ts");
    reactHotLoader.register(reducer, "reducer", "D:/Projects/js-boilerplate/src/reducers/messages.ts");
    reactHotLoader.register(_default, "default", "D:/Projects/js-boilerplate/src/reducers/messages.ts");
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/reducers/profile.ts":
/*!*********************************!*\
  !*** ./src/reducers/profile.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {(function () {
    var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

    enterModule && enterModule(module);
})();

const reducer = (state = {}, action) => {
    switch (action.type) {
        case "profile/PROFILE_REQUEST":
            {
                return null;
            }
        case "profile/PROFILE_SUCCESS":
            {
                const { profile } = action;
                return { item: profile };
            }
        case "profile/PROFILE_FAILURE":
            {
                const { message } = action;
                return { errorMessage: message };
            }
        default:
            {
                return state;
            }
    }
};
const _default = reducer;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
    var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

    var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(reducer, "reducer", "D:/Projects/js-boilerplate/src/reducers/profile.ts");
    reactHotLoader.register(_default, "default", "D:/Projects/js-boilerplate/src/reducers/profile.ts");
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/reducers/settings.ts":
/*!**********************************!*\
  !*** ./src/reducers/settings.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {(function () {
    var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

    enterModule && enterModule(module);
})();

const reducer = (state = {}, action) => {
    switch (action.type) {
        case "settings/SET_GMAIL_CLIENT_ID":
            {
                const { clientId } = action;
                return { clientId };
            }
        default:
            {
                return state;
            }
    }
};
const _default = reducer;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
    var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

    var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(reducer, "reducer", "D:/Projects/js-boilerplate/src/reducers/settings.ts");
    reactHotLoader.register(_default, "default", "D:/Projects/js-boilerplate/src/reducers/settings.ts");
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/sagas/gmail/index.ts":
/*!**********************************!*\
  !*** ./src/sagas/gmail/index.ts ***!
  \**********************************/
/*! exports provided: loadMessages, loadProfile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _loadMessages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadMessages */ "./src/sagas/gmail/loadMessages.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadMessages", function() { return _loadMessages__WEBPACK_IMPORTED_MODULE_0__["loadMessages"]; });

/* harmony import */ var _loadProfile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loadProfile */ "./src/sagas/gmail/loadProfile.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadProfile", function() { return _loadProfile__WEBPACK_IMPORTED_MODULE_1__["loadProfile"]; });




/***/ }),

/***/ "./src/sagas/gmail/loadMessages.ts":
/*!*****************************************!*\
  !*** ./src/sagas/gmail/loadMessages.ts ***!
  \*****************************************/
/*! exports provided: loadMessages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadMessages", function() { return loadMessages; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/es/effects.js");
/* harmony import */ var api_gmail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! api/gmail */ "./src/api/gmail/index.ts");
/* harmony import */ var _sendAuthorizeRequestSaga__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sendAuthorizeRequestSaga */ "./src/sagas/gmail/sendAuthorizeRequestSaga.ts");
(function () {
    var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

    enterModule && enterModule(module);
})();




function* loadMessages(userId) {
    const messageList = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_sendAuthorizeRequestSaga__WEBPACK_IMPORTED_MODULE_2__["sendAuthorizeRequestSaga"], api_gmail__WEBPACK_IMPORTED_MODULE_1__["getMessageList"](userId, 10));
    const messages = [];
    for (const messageInfo of messageList.messages) {
        const message = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_sendAuthorizeRequestSaga__WEBPACK_IMPORTED_MODULE_2__["sendAuthorizeRequestSaga"], api_gmail__WEBPACK_IMPORTED_MODULE_1__["getMessage"](userId, messageInfo.id));
        messages.push(parseMessage(message));
    }
    return messages;
}
const parseMessage = message => {
    const from = message.payload.headers.find(x => x.name === api_gmail__WEBPACK_IMPORTED_MODULE_1__["HeaderType"].From).value;
    const subject = message.payload.headers.find(x => x.name === api_gmail__WEBPACK_IMPORTED_MODULE_1__["HeaderType"].Subject).value;
    return { id: message.id, from, subject };
};
;

(function () {
    var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

    var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(loadMessages, "loadMessages", "D:/Projects/js-boilerplate/src/sagas/gmail/loadMessages.ts");
    reactHotLoader.register(parseMessage, "parseMessage", "D:/Projects/js-boilerplate/src/sagas/gmail/loadMessages.ts");
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/sagas/gmail/loadProfile.ts":
/*!****************************************!*\
  !*** ./src/sagas/gmail/loadProfile.ts ***!
  \****************************************/
/*! exports provided: loadProfile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadProfile", function() { return loadProfile; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/es/effects.js");
/* harmony import */ var api_gmail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! api/gmail */ "./src/api/gmail/index.ts");
/* harmony import */ var _sendAuthorizeRequestSaga__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sendAuthorizeRequestSaga */ "./src/sagas/gmail/sendAuthorizeRequestSaga.ts");
(function () {
    var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

    enterModule && enterModule(module);
})();




function* loadProfile() {
    const profile = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_sendAuthorizeRequestSaga__WEBPACK_IMPORTED_MODULE_2__["sendAuthorizeRequestSaga"], api_gmail__WEBPACK_IMPORTED_MODULE_1__["getProfile"]("me"));
    return parseProfile(profile);
}
const parseProfile = profile => {
    return { email: profile.emailAddress };
};
;

(function () {
    var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

    var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(loadProfile, "loadProfile", "D:/Projects/js-boilerplate/src/sagas/gmail/loadProfile.ts");
    reactHotLoader.register(parseProfile, "parseProfile", "D:/Projects/js-boilerplate/src/sagas/gmail/loadProfile.ts");
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/sagas/gmail/sendAuthorizeRequestSaga.ts":
/*!*****************************************************!*\
  !*** ./src/sagas/gmail/sendAuthorizeRequestSaga.ts ***!
  \*****************************************************/
/*! exports provided: sendAuthorizeRequestSaga, getToken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendAuthorizeRequestSaga", function() { return sendAuthorizeRequestSaga; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getToken", function() { return getToken; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/es/effects.js");
(function () {
    var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

    enterModule && enterModule(module);
})();


function* sendAuthorizeRequestSaga(request) {
    const token = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(getToken);
    return yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(request.withHeaders({
        Authorization: `Bearer ${token}`
    }).execute);
}
function* getToken() {
    const token = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["select"])(state => state.auth.tokenInfo.token);
    return token;
}
;

(function () {
    var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

    var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(sendAuthorizeRequestSaga, "sendAuthorizeRequestSaga", "D:/Projects/js-boilerplate/src/sagas/gmail/sendAuthorizeRequestSaga.ts");
    reactHotLoader.register(getToken, "getToken", "D:/Projects/js-boilerplate/src/sagas/gmail/sendAuthorizeRequestSaga.ts");
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/sagas/index.ts":
/*!****************************!*\
  !*** ./src/sagas/index.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/es/effects.js");
/* harmony import */ var _oauthSaga__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./oauthSaga */ "./src/sagas/oauthSaga/index.ts");
/* harmony import */ var _messagesSaga__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./messagesSaga */ "./src/sagas/messagesSaga.ts");
/* harmony import */ var _profileSaga__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profileSaga */ "./src/sagas/profileSaga.ts");
(function () {
    var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

    enterModule && enterModule(module);
})();





function* rootSaga() {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_oauthSaga__WEBPACK_IMPORTED_MODULE_1__["authSaga"]);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_messagesSaga__WEBPACK_IMPORTED_MODULE_2__["messagesSaga"]);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_profileSaga__WEBPACK_IMPORTED_MODULE_3__["profileSaga"]);
}
;

(function () {
    var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

    var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(rootSaga, "rootSaga", "D:/Projects/js-boilerplate/src/sagas/index.ts");
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/sagas/messagesSaga.ts":
/*!***********************************!*\
  !*** ./src/sagas/messagesSaga.ts ***!
  \***********************************/
/*! exports provided: messagesSaga */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "messagesSaga", function() { return messagesSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/es/effects.js");
/* harmony import */ var reducers_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reducers/actions */ "./src/reducers/actions/index.ts");
/* harmony import */ var sagas_gmail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sagas/gmail */ "./src/sagas/gmail/index.ts");
(function () {
    var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

    enterModule && enterModule(module);
})();




function* messagesSaga() {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(reducers_actions__WEBPACK_IMPORTED_MODULE_1__["loadMessages"].type, processLogin);
}
function* processLogin(_action) {
    try {
        const profile = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(getProfile);
        const messages = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(sagas_gmail__WEBPACK_IMPORTED_MODULE_2__["loadMessages"], profile.email);
        yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(reducers_actions__WEBPACK_IMPORTED_MODULE_1__["loadMessagesSuccess"])(messages));
    } catch (err) {
        yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(reducers_actions__WEBPACK_IMPORTED_MODULE_1__["loadMessagesFailure"])(err, err.toString()));
    }
}
function* getProfile() {
    const profile = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["select"])(state => state.profile);
    if (!profile.item) {
        throw new Error("User profile is not loaded");
    }
    return profile.item;
}
;

(function () {
    var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

    var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(messagesSaga, "messagesSaga", "D:/Projects/js-boilerplate/src/sagas/messagesSaga.ts");
    reactHotLoader.register(processLogin, "processLogin", "D:/Projects/js-boilerplate/src/sagas/messagesSaga.ts");
    reactHotLoader.register(getProfile, "getProfile", "D:/Projects/js-boilerplate/src/sagas/messagesSaga.ts");
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/sagas/oauthSaga/googleProvider.ts":
/*!***********************************************!*\
  !*** ./src/sagas/oauthSaga/googleProvider.ts ***!
  \***********************************************/
/*! exports provided: buildGoogleProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildGoogleProvider", function() { return buildGoogleProvider; });
(function () {
    var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

    enterModule && enterModule(module);
})();

const buildGoogleProvider = (clientId, scopes = ["https://www.googleapis.com/auth/gmail.readonly" /* "gmail.readonly" */]) => ({
    buildAuthorizeUrl() {
        return "https://accounts.google.com/o/oauth2/v2/auth" + `?scope=${encodeScopes(scopes)}` + "&include_granted_scopes=true" + "&state=state_parameter_passthrough_value" + `&redirect_uri=${encodeURIComponent(`${window.location.origin}/redirect.html`)}` + "&response_type=token" + `&client_id=${clientId}`;
    },
    extractError(redirectUrl) {
        const errorReason = getParameters(redirectUrl, "error");
        return errorReason ? new Error(errorReason) : undefined;
    },
    extractSession(redirectUrl) {
        const accessToken = getParameters(redirectUrl, "access_token");
        const tokenType = getParameters(redirectUrl, "token_type");
        const state = getParameters(redirectUrl, "state");
        const scope = getParameters(redirectUrl, "scope");
        const expireDurationSeconds = parseInt(getParameters(redirectUrl, "expires_in"), 10);
        return {
            accessToken,
            expireDurationSeconds,
            tokenType,
            state,
            scope
        };
    },
    validateSession(_session) {
        // TODO: Add validation
        return true;
    },
    getAccessToken(session, _resourceId) {
        return session.accessToken;
    },
    getSignOutUrl(token) {
        return `https://accounts.google.com/o/oauth2/revoke?token=${encodeURIComponent(token)}`;
    }
});
const getParameters = (redirectUrl, name) => {
    const regex = new RegExp(`${name}=([^&]+)`);
    let value = null;
    const valueMatch = redirectUrl.match(regex);
    if (valueMatch) {
        value = valueMatch[1];
    }
    return value;
};
const encodeScopes = scopes => {
    return encodeURIComponent(scopes.join(","));
};
;

(function () {
    var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

    var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(buildGoogleProvider, "buildGoogleProvider", "D:/Projects/js-boilerplate/src/sagas/oauthSaga/googleProvider.ts");
    reactHotLoader.register(getParameters, "getParameters", "D:/Projects/js-boilerplate/src/sagas/oauthSaga/googleProvider.ts");
    reactHotLoader.register(encodeScopes, "encodeScopes", "D:/Projects/js-boilerplate/src/sagas/oauthSaga/googleProvider.ts");
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/sagas/oauthSaga/index.ts":
/*!**************************************!*\
  !*** ./src/sagas/oauthSaga/index.ts ***!
  \**************************************/
/*! exports provided: authSaga */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authSaga", function() { return authSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/es/effects.js");
/* harmony import */ var _signUpSaga__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signUpSaga */ "./src/sagas/oauthSaga/signUpSaga.ts");
(function () {
    var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

    enterModule && enterModule(module);
})();



function* authSaga() {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_signUpSaga__WEBPACK_IMPORTED_MODULE_1__["signUpSaga"]);
    // const isSignUp = yield call(isSignUpSaga);
    // if (!isSignUp) {
    //     yield put(signUp());
    // }
}
// function* isSignUpSaga() {
//     const token = yield select((state: RootState) => state.auth.tokenInfo);
//     return Boolean(token);
// }

;

(function () {
    var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

    var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(authSaga, "authSaga", "D:/Projects/js-boilerplate/src/sagas/oauthSaga/index.ts");
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/sagas/oauthSaga/signUpSaga.ts":
/*!*******************************************!*\
  !*** ./src/sagas/oauthSaga/signUpSaga.ts ***!
  \*******************************************/
/*! exports provided: signUpSaga, getClientId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signUpSaga", function() { return signUpSaga; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getClientId", function() { return getClientId; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/es/effects.js");
/* harmony import */ var react_simple_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-simple-auth */ "./node_modules/react-simple-auth/dist/react-simple-auth.es5.js");
/* harmony import */ var reducers_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reducers/actions */ "./src/reducers/actions/index.ts");
/* harmony import */ var _googleProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./googleProvider */ "./src/sagas/oauthSaga/googleProvider.ts");
(function () {
    var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

    enterModule && enterModule(module);
})();





function* signUpSaga() {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(reducers_actions__WEBPACK_IMPORTED_MODULE_2__["signUp"].type, processSignUp);
}
function* processSignUp(_action) {
    try {
        const clientId = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(getClientId);
        const googleProvider = Object(_googleProvider__WEBPACK_IMPORTED_MODULE_3__["buildGoogleProvider"])(clientId);
        const session = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(react_simple_auth__WEBPACK_IMPORTED_MODULE_1__["default"].acquireTokenAsync, googleProvider);
        yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(reducers_actions__WEBPACK_IMPORTED_MODULE_2__["signUpSuccess"])({ token: session.accessToken }));
        // TODO: Не должно тут быть
        yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(reducers_actions__WEBPACK_IMPORTED_MODULE_2__["requestProfile"])());
    } catch (err) {
        yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(reducers_actions__WEBPACK_IMPORTED_MODULE_2__["signUpFail"])(err, err.toString()));
    }
}
function* getClientId() {
    const clientId = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["select"])(state => state.settings.clientId);
    return clientId;
}
;

(function () {
    var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

    var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(signUpSaga, "signUpSaga", "D:/Projects/js-boilerplate/src/sagas/oauthSaga/signUpSaga.ts");
    reactHotLoader.register(processSignUp, "processSignUp", "D:/Projects/js-boilerplate/src/sagas/oauthSaga/signUpSaga.ts");
    reactHotLoader.register(getClientId, "getClientId", "D:/Projects/js-boilerplate/src/sagas/oauthSaga/signUpSaga.ts");
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/sagas/profileSaga.ts":
/*!**********************************!*\
  !*** ./src/sagas/profileSaga.ts ***!
  \**********************************/
/*! exports provided: profileSaga */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "profileSaga", function() { return profileSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/es/effects.js");
/* harmony import */ var reducers_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reducers/actions */ "./src/reducers/actions/index.ts");
/* harmony import */ var sagas_gmail_loadProfile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sagas/gmail/loadProfile */ "./src/sagas/gmail/loadProfile.ts");
(function () {
    var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

    enterModule && enterModule(module);
})();




function* profileSaga() {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(reducers_actions__WEBPACK_IMPORTED_MODULE_1__["requestProfile"].type, processLogin);
}
function* processLogin(_action) {
    try {
        const profile = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(sagas_gmail_loadProfile__WEBPACK_IMPORTED_MODULE_2__["loadProfile"]);
        yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(reducers_actions__WEBPACK_IMPORTED_MODULE_1__["requestProfileSuccess"])(profile));
        // TODO: Не должно тут быть
        yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(reducers_actions__WEBPACK_IMPORTED_MODULE_1__["loadMessages"])());
    } catch (err) {
        yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(reducers_actions__WEBPACK_IMPORTED_MODULE_1__["requestProfileFailure"])(err, err.toString()));
    }
}
;

(function () {
    var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

    var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(profileSaga, "profileSaga", "D:/Projects/js-boilerplate/src/sagas/profileSaga.ts");
    reactHotLoader.register(processLogin, "processLogin", "D:/Projects/js-boilerplate/src/sagas/profileSaga.ts");
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/store/composeEnhancers.ts":
/*!***************************************!*\
  !*** ./src/store/composeEnhancers.ts ***!
  \***************************************/
/*! exports provided: composeEnhancers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "composeEnhancers", function() { return composeEnhancers; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
(function () {
    var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

    enterModule && enterModule(module);
})();


// tslint:disable:no-string-literal
const getReduxDevToolsCompose = () => undefined !== "production" && window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"] ? window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"]({
    name: "MyBoilerplate",
    actionsBlacklist: ["REDUX_STORAGE_SAVE"]
}) : undefined;
const composeEnhancers = getReduxDevToolsCompose() || redux__WEBPACK_IMPORTED_MODULE_0__["compose"];
;

(function () {
    var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

    var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(getReduxDevToolsCompose, "getReduxDevToolsCompose", "D:/Projects/js-boilerplate/src/store/composeEnhancers.ts");
    reactHotLoader.register(composeEnhancers, "composeEnhancers", "D:/Projects/js-boilerplate/src/store/composeEnhancers.ts");
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/store/index.ts":
/*!****************************!*\
  !*** ./src/store/index.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return configureStore; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga */ "./node_modules/redux-saga/es/index.js");
/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! connected-react-router */ "./node_modules/connected-react-router/esm/index.js");
/* harmony import */ var reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reducers */ "./src/reducers/index.ts");
/* harmony import */ var sagas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sagas */ "./src/sagas/index.ts");
/* harmony import */ var _composeEnhancers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./composeEnhancers */ "./src/store/composeEnhancers.ts");
(function () {
    var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

    enterModule && enterModule(module);
})();







function configureStore(initialState, history) {
    const routerMiddleware = Object(connected_react_router__WEBPACK_IMPORTED_MODULE_2__["routerMiddleware"])(history);
    const sagaMiddleware = Object(redux_saga__WEBPACK_IMPORTED_MODULE_1__["default"])();
    const store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(Object(reducers__WEBPACK_IMPORTED_MODULE_3__["rootReducer"])(history), initialState, Object(_composeEnhancers__WEBPACK_IMPORTED_MODULE_5__["composeEnhancers"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(routerMiddleware, sagaMiddleware)));
    // run sagas
    sagaMiddleware.run(sagas__WEBPACK_IMPORTED_MODULE_4__["default"]);
    // Hot module replacement
    if (true) {
        module.hot.accept(/*! ../reducers/index */ "./src/reducers/index.ts", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/index */ "./src/reducers/index.ts");
(() => {
            const newRootReducer = __webpack_require__(/*! ../reducers/index */ "./src/reducers/index.ts").default;
            store.replaceReducer(newRootReducer);
        })(__WEBPACK_OUTDATED_DEPENDENCIES__); });
    }
    return store;
}
;

(function () {
    var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

    var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(configureStore, "configureStore", "D:/Projects/js-boilerplate/src/store/index.ts");
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ 0:
/*!*************************!*\
  !*** multi ./src/index ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/index */"./src/index.tsx");


/***/ })

},[[0,"manifest","vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9sb2NhbGVzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL0FwcC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvcGFnZXMvbWVzc2FnZXMvTWVzc2FnZXMuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9wYWdlcy92aWRlby1yZWFjdC1leGFtcGxlL1ZpZGVvUmVhY3RFeGFtcGxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvcGFnZXMvdmlkZW8tcmVhY3QtZXhhbXBsZS92aWRlby1wbGF5ZXIvVmlkZW9QbGF5ZXIuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpL2FwaVJlcXVlc3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaS9nbWFpbC9nZXRNZXNzYWdlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcGkvZ21haWwvZ2V0TWVzc2FnZUxpc3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaS9nbWFpbC9nZXRQcm9maWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcGkvZ21haWwvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2kxOG4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9BcHAuY3NzP2I2ZTkiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvQXBwLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9idXR0b24vVXBsb2FkQnV0dG9uLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9saW5rL0xpbmsudHN4Iiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2xpbmsvVGFiTGluay50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvbGluay9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9sb2NhbGl6ZS9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvbmF2aWdhdGlvbi9OYXZpZ2F0aW9uLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9uYXZpZ2F0aW9uL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL3BhZ2VzL2hvbWUvSG9tZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvcGFnZXMvaG9tZS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9wYWdlcy9sb2dpbi9Mb2dpbi50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvcGFnZXMvbG9naW4vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvcGFnZXMvbWVzc2FnZXMvTWVzc2FnZXMuc2Nzcz83ZTZkIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL3BhZ2VzL21lc3NhZ2VzL01lc3NhZ2VzLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9wYWdlcy9tZXNzYWdlcy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9wYWdlcy9zZXR0aW5ncy9TZXR0aW5ncy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvcGFnZXMvc2V0dGluZ3MvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvcGFnZXMvdmlkZW8tcmVhY3QtZXhhbXBsZS9WaWRlb1JlYWN0RXhhbXBsZS5zY3NzP2M4N2YiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvcGFnZXMvdmlkZW8tcmVhY3QtZXhhbXBsZS9WaWRlb1JlYWN0RXhhbXBsZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvcGFnZXMvdmlkZW8tcmVhY3QtZXhhbXBsZS92aWRlby1wbGF5ZXIvVmlkZW9QbGF5ZXIuc2Nzcz81ZDU1Iiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL3BhZ2VzL3ZpZGVvLXJlYWN0LWV4YW1wbGUvdmlkZW8tcGxheWVyL1ZpZGVvUGxheWVyLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9yb3V0ZXMvcHJvdGVjdGVkLXJvdXRlL1Byb3RlY3RlZFJvdXRlLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9yb3V0ZXMvcHJvdGVjdGVkLXJvdXRlL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9yZWR1Y2Vycy9hY3Rpb25zL2FjdGlvbi1oZWxwZXJzLnRzIiwid2VicGFjazovLy8uL3NyYy9yZWR1Y2Vycy9hY3Rpb25zL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9yZWR1Y2Vycy9hY3Rpb25zL21lc3NhZ2VzLnRzIiwid2VicGFjazovLy8uL3NyYy9yZWR1Y2Vycy9hY3Rpb25zL3Byb2ZpbGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHVjZXJzL2FjdGlvbnMvc2V0dGluZ3MudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHVjZXJzL2FjdGlvbnMvc2lnblVwLnRzIiwid2VicGFjazovLy8uL3NyYy9yZWR1Y2Vycy9hdXRoLnRzIiwid2VicGFjazovLy8uL3NyYy9yZWR1Y2Vycy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdWNlcnMvbWVzc2FnZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHVjZXJzL3Byb2ZpbGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHVjZXJzL3NldHRpbmdzLnRzIiwid2VicGFjazovLy8uL3NyYy9zYWdhcy9nbWFpbC9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2FnYXMvZ21haWwvbG9hZE1lc3NhZ2VzLnRzIiwid2VicGFjazovLy8uL3NyYy9zYWdhcy9nbWFpbC9sb2FkUHJvZmlsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2FnYXMvZ21haWwvc2VuZEF1dGhvcml6ZVJlcXVlc3RTYWdhLnRzIiwid2VicGFjazovLy8uL3NyYy9zYWdhcy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2FnYXMvbWVzc2FnZXNTYWdhLnRzIiwid2VicGFjazovLy8uL3NyYy9zYWdhcy9vYXV0aFNhZ2EvZ29vZ2xlUHJvdmlkZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NhZ2FzL29hdXRoU2FnYS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2FnYXMvb2F1dGhTYWdhL3NpZ25VcFNhZ2EudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NhZ2FzL3Byb2ZpbGVTYWdhLnRzIiwid2VicGFjazovLy8uL3NyYy9zdG9yZS9jb21wb3NlRW5oYW5jZXJzLnRzIiwid2VicGFjazovLy8uL3NyYy9zdG9yZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxrQkFBa0IsTUFBTSxVQUFVLGtCQUFrQixTQUFTLCtCQUErQixVQUFVLGlDQUFpQyxhQUFhLGtDQUFrQyxlQUFlLDBEQUEwRCxhQUFhLGtDQUFrQyxPQUFPLFVBQVUsaUJBQWlCLFNBQVMsbUNBQW1DLFVBQVUsNENBQTRDLGFBQWEsMkNBQTJDLGVBQWUsNkVBQTZFLGFBQWEsbUNBQW1DLGdCQUFnQix3Qzs7Ozs7Ozs7Ozs7QUNBdG9CO0FBQ0E7OztBQUdBO0FBQ0EsNkNBQThDLG1CQUFtQixHQUFHLGlCQUFpQixtQkFBbUIsa0JBQWtCLHNCQUFzQiw2QkFBNkIsR0FBRyx5QkFBeUIsY0FBYyxHQUFHLHVCQUF1QixjQUFjLHFCQUFxQixHQUFHOztBQUV2UjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7Ozs7O0FDZEE7QUFDQTs7O0FBR0E7QUFDQSwyQ0FBNEMsb0JBQW9CLEVBQUU7O0FBRWxFO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7Ozs7O0FDVkE7QUFDQTs7O0FBR0E7QUFDQSxnQ0FBaUMsMEJBQTBCLEVBQUUsMEJBQTBCLGdCQUFnQixpQkFBaUIsa0JBQWtCLDJCQUEyQixFQUFFLGtDQUFrQyxxQkFBcUIsRUFBRSx5Q0FBeUMsb0JBQW9CLG9CQUFvQixvQ0FBb0MsRUFBRSx3Q0FBd0MsaUJBQWlCLEVBQUU7O0FBRWxaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7Ozs7O0FDYkE7QUFDQTs7O0FBR0E7QUFDQSxnQ0FBaUMs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LDZEQUFZLE9BQVosQ0FEVSxFQUVWLFlBRlUsRUFHViwyRUFBaUIsOERBQWdCLGdCQUFoQixFQUFrQyxjQUFsQyxDQUFqQixDQUhVLENBQWQ7QUFNQTtBQUNBLG1CQUFlLEdBQWYsQ0FBbUIsNkNBQW5CO0FBRUE7QUFDQSxRQUFJLElBQUosRUFBZ0I7QUFDWixlQUFPLEdBQVAsQ0FBVyxNQUFYLENBQWtCLGtEQUFsQixFQUF1QztBQUFBLE9BQUs7QUFDeEMsa0JBQU0saUJBQWlCLG9CQUFRLGtEQUFSLEVBQTZCLE9BQXBEO0FBQ0Esa0JBQU0sY0FBTixDQUFxQixjQUFyQjtBQUNILFNBSEQ7QUFJSDtBQUVELFdBQU8sS0FBUDtBQUNIOzs7Ozs7Ozs7Ozs7NEJBdEJ1QixjIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0ge1wiZW5cIjp7XCJjb21tb25cIjp7XCJzaWduVXBcIjpcInNpZ25VcFwifSxcImhvbWVcIjp7XCJ2aWV3TWVzc2FnZXNcIjpcIlZpZXcgbWVzc2FnZXNcIn0sXCJsb2dpblwiOntcIm5lZWRBdXRob3JpemVcIjpcIk5lZWQgYXV0aG9yaXplXCJ9LFwibWVzc2FnZXNcIjp7XCJmcm9tXCI6XCJmcm9tXCIsXCJzdWJqZWN0XCI6XCJzdWJqZWN0XCJ9LFwibmF2aWdhdGlvblwiOntcImhvbWVcIjpcIkhvbWVcIixcIm1lc3NhZ2VzXCI6XCJNZXNzYWdlc1wiLFwic2V0dGluZ3NcIjpcIlNldHRpbmdzXCJ9LFwic2V0dGluZ3NcIjp7XCJlbnRlckNpZW50SWRcIjpcIkVudGVyIENMSUVOVF9JRFwifX0sXCJydVwiOntcImNvbW1vblwiOntcInNpZ25VcFwiOlwi0JLQvtC50YLQuFwifSxcImhvbWVcIjp7XCJ2aWV3TWVzc2FnZXNcIjpcItCe0YLQutGA0YvRgtGMINGB0L7QvtCx0YnQtdC90LjRj1wifSxcImxvZ2luXCI6e1wibmVlZEF1dGhvcml6ZVwiOlwi0J3QtdC+0LHRhdC+0LTQuNC80L4g0LDQstGC0L7RgNC40LfQvtCy0LDRgtGM0YHRj1wifSxcIm1lc3NhZ2VzXCI6e1wiZnJvbVwiOlwi0L7RgtC/0YDQsNCy0LjRgtC10LvRjFwiLFwic3ViamVjdFwiOlwi0LfQsNCz0L7Qu9C+0LLQvtC6XCJ9LFwibmF2aWdhdGlvblwiOntcImhvbWVcIjpcItCU0L7QvNC+0LlcIixcIm1lc3NhZ2VzXCI6XCLQodC+0L7QsdGJ0LXQvdC40Y9cIixcInNldHRpbmdzXCI6XCLQndCw0YHRgtGA0L7QudC60LhcIixcInZpZGVvXCI6XCLQktC40LTQtdC+XCJ9LFwic2V0dGluZ3NcIjp7XCJlbnRlckNpZW50SWRcIjpcItCS0LLQtdC00LjRgtC1IENMSUVOVF9JRFwifSxcInZpZGVvUGxheWVyXCI6e1widmlkZW9cIjpcItCS0LjQtNC10L5cIixcInN1YnRpdGxlXCI6XCLQodGD0LHRgtC40YLRgNGLXCJ9fX0iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImh0bWwsXFxuYm9keSxcXG4jYXBwIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uYXBwX18yTm5GVyB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5hcHBfX2hlYWRlcl9fMWJlS1Ige1xcbiAgICBmbGV4OiAwO1xcbn1cXG5cXG4uYXBwX19wYWdlX18zTlJBMyB7XFxuICAgIGZsZXg6IDE7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJhcHBcIjogXCJhcHBfXzJObkZXXCIsXG5cdFwiYXBwX19oZWFkZXJcIjogXCJhcHBfX2hlYWRlcl9fMWJlS1JcIixcblx0XCJhcHBIZWFkZXJcIjogXCJhcHBfX2hlYWRlcl9fMWJlS1JcIixcblx0XCJhcHBfX3BhZ2VcIjogXCJhcHBfX3BhZ2VfXzNOUkEzXCIsXG5cdFwiYXBwUGFnZVwiOiBcImFwcF9fcGFnZV9fM05SQTNcIlxufTsiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5tZXNzYWdlc19fMTd5Q2wge1xcbiAgY3Vyc29yOiBkZWZhdWx0OyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwibWVzc2FnZXNcIjogXCJtZXNzYWdlc19fMTd5Q2xcIlxufTsiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIC0tYmFjay1jb2xvcjogIzI2MzIzODsgfVxcblxcbi52aWRlby1wbGF5ZXJfXzItN0lSIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cXG4gIC52aWRlby1wbGF5ZXJfX3BsYXllcl9fMlluM0Qge1xcbiAgICBmbGV4OiAxIDEgYXV0bzsgfVxcbiAgLnZpZGVvLXBsYXllcl9fY29udHJvbC1wYW5lbF9fMjVHcjEge1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDsgfVxcbiAgLnZpZGVvLXBsYXllcl9fY29udHJvbC1pdGVtX18xblRzMiB7XFxuICAgIHdpZHRoOiAzMCU7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJ2aWRlby1wbGF5ZXJcIjogXCJ2aWRlby1wbGF5ZXJfXzItN0lSXCIsXG5cdFwidmlkZW8tcGxheWVyX19wbGF5ZXJcIjogXCJ2aWRlby1wbGF5ZXJfX3BsYXllcl9fMlluM0RcIixcblx0XCJ2aWRlby1wbGF5ZXJfX2NvbnRyb2wtcGFuZWxcIjogXCJ2aWRlby1wbGF5ZXJfX2NvbnRyb2wtcGFuZWxfXzI1R3IxXCIsXG5cdFwidmlkZW8tcGxheWVyX19jb250cm9sLWl0ZW1cIjogXCJ2aWRlby1wbGF5ZXJfX2NvbnRyb2wtaXRlbV9fMW5UczJcIlxufTsiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIC0tYmFjay1jb2xvcjogIzI2MzIzODsgfVxcblxcbi52aWRlby1wbGF5ZXJfXzE0TVE3IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2stY29sb3IpOyB9XFxuICAudmlkZW8tcGxheWVyX192aWRlb19fMzZ0STYge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7IH1cXG4gIC52aWRlby1wbGF5ZXJfX3N1YnRpdGxlX18xc3dMMCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvdHRvbTogMTAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAzMnB4O1xcbiAgICBjb2xvcjogd2hlYXQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTsgfVxcbiAgLnZpZGVvLXBsYXllcl9fY29udHJvbHNfX1Ixd1hqIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGRpc3BsYXk6IGZsZXg7IH1cXG4gIC52aWRlby1wbGF5ZXJfX3NsaWRlcl9fSnVadUMge1xcbiAgICBmbGV4LWdyb3c6IDE7XFxuICAgIHBhZGRpbmc6IDIycHggMHB4OyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwidmlkZW8tcGxheWVyXCI6IFwidmlkZW8tcGxheWVyX18xNE1RN1wiLFxuXHRcInZpZGVvLXBsYXllcl9fdmlkZW9cIjogXCJ2aWRlby1wbGF5ZXJfX3ZpZGVvX18zNnRJNlwiLFxuXHRcInZpZGVvLXBsYXllcl9fc3VidGl0bGVcIjogXCJ2aWRlby1wbGF5ZXJfX3N1YnRpdGxlX18xc3dMMFwiLFxuXHRcInZpZGVvLXBsYXllcl9fY29udHJvbHNcIjogXCJ2aWRlby1wbGF5ZXJfX2NvbnRyb2xzX19SMXdYalwiLFxuXHRcInZpZGVvLXBsYXllcl9fc2xpZGVyXCI6IFwidmlkZW8tcGxheWVyX19zbGlkZXJfX0p1WnVDXCJcbn07IiwiZXhwb3J0IHR5cGUgSGFuZGxlcjxULCBQPiA9IChyZXN1bHQ6IFQpID0+IFAgfCBQcm9taXNlPFA+O1xyXG5cclxuZXhwb3J0IGNvbnN0IEhlYWRlcnMgPSB7XHJcbiAgICBBY2NlcHRKc29uOiB7IEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcclxuICAgIEF1dGhvcml6YXRpb246ICh0b2tlbjogc3RyaW5nKSA9PiAoeyBBdXRob3JpemF0aW9uOiB0b2tlbiB9KSxcclxuICAgIEpzb25Db250ZW50OiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QganNvbkhhbmRsZXIgPSA8VD4ocmVzcG9uc2U6IFJlc3BvbnNlKTogUHJvbWlzZTxUPiA9PlxyXG4gICAgcmVzcG9uc2UuanNvbigpLmNhdGNoKCgpID0+IG5ldyBFcnJvcigpKTtcclxuXHJcbmV4cG9ydCBjbGFzcyBBcGlSZXF1ZXN0PFQgPSBSZXNwb25zZT4ge1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXQodXJpOiBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gbmV3IEFwaVJlcXVlc3QodXJpLCB7IG1ldGhvZDogXCJHRVRcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHBvc3QodXJpOiBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gbmV3IEFwaVJlcXVlc3QodXJpLCB7IG1ldGhvZDogXCJQT1NUXCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZXF1ZXN0OiBSZXF1ZXN0O1xyXG4gICAgcHJpdmF0ZSBoYW5kbGVyczogSGFuZGxlcjx1bmtub3duLCB1bmtub3duPltdO1xyXG5cclxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoXHJcbiAgICAgICAgaW5wdXQ6IFJlcXVlc3RJbmZvLFxyXG4gICAgICAgIGluaXQ6IFJlcXVlc3RJbml0ID0ge30sXHJcbiAgICAgICAgaGFuZGxlcnM6IEhhbmRsZXI8dW5rbm93biwgdW5rbm93bj5bXSA9IFtdLFxyXG4gICAgKSB7XHJcbiAgICAgICAgdGhpcy5yZXF1ZXN0ID0gbmV3IFJlcXVlc3QoaW5wdXQsIGluaXQpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlcnMgPSBoYW5kbGVycztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgd2l0aEhlYWRlcnMoLi4uZXh0cmFIZWFkZXJzOiBIZWFkZXJzSW5pdFtdKSB7XHJcbiAgICAgICAgY29uc3QgaGVhZGVyczogSGVhZGVyc0luaXQgPSBleHRyYUhlYWRlcnMucmVkdWNlKFxyXG4gICAgICAgICAgICAoaGVhZGVycywgZXh0cmEpID0+IE9iamVjdC5hc3NpZ24oaGVhZGVycywgZXh0cmEpLFxyXG4gICAgICAgICAgICB7IC4uLih0aGlzLnJlcXVlc3QuaGVhZGVycyB8fCB7fSkgfSxcclxuICAgICAgICApO1xyXG4gICAgICAgIHJldHVybiBuZXcgQXBpUmVxdWVzdCh0aGlzLnJlcXVlc3QsIHsgaGVhZGVycyB9LCB0aGlzLmhhbmRsZXJzKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaGFuZGxlciA9IDxQPihoYW5kbGVyOiAocmVzdWx0OiBUKSA9PiBQIHwgUHJvbWlzZTxQPik6IEFwaVJlcXVlc3Q8UD4gPT4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgQXBpUmVxdWVzdCh0aGlzLnJlcXVlc3QsIHt9LCBbLi4udGhpcy5oYW5kbGVycywgaGFuZGxlcl0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBwdWJsaWMgZXhlY3V0ZSA9ICgpOiBQcm9taXNlPFQ+ID0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVycy5yZWR1Y2UoXHJcbiAgICAgICAgICAgIChwcm9taXNlOiBQcm9taXNlPHVua25vd24+LCBoYW5kbGVyKSA9PiBwcm9taXNlLnRoZW4oaGFuZGxlciksXHJcbiAgICAgICAgICAgIGZldGNoKHRoaXMucmVxdWVzdCksXHJcbiAgICAgICAgKSBhcyBQcm9taXNlPFQ+O1xyXG4gICAgfTtcclxufVxyXG4iLCJpbXBvcnQgeyBBcGlSZXF1ZXN0LCBqc29uSGFuZGxlciB9IGZyb20gXCJhcGkvYXBpUmVxdWVzdFwiO1xyXG5cclxuY29uc3QgYmFzZVVyaSA9IFwiaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vZ21haWwvdjFcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTWVzc2FnZSB7XHJcbiAgICBpZDogc3RyaW5nO1xyXG4gICAgdGhyZWFkSWQ6IHN0cmluZztcclxuICAgIHBheWxvYWQ6IE1lc3NhZ2VQYXlsb2FkO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE1lc3NhZ2VQYXlsb2FkIHtcclxuICAgIG1pbWVUeXBlOiBzdHJpbmc7XHJcbiAgICBoZWFkZXJzOiBNZXNzYWdlSGVhZGVyW107XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTWVzc2FnZUhlYWRlciB7XHJcbiAgICBuYW1lOiBIZWFkZXJUeXBlO1xyXG4gICAgdmFsdWU6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGVudW0gSGVhZGVyVHlwZSB7XHJcbiAgICBGcm9tID0gXCJGcm9tXCIsXHJcbiAgICBTdWJqZWN0ID0gXCJTdWJqZWN0XCIsXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRNZXNzYWdlID0gKHVzZXJJZDogc3RyaW5nLCBtZXNzYWdlSWQ6IHN0cmluZykgPT4ge1xyXG4gICAgcmV0dXJuIEFwaVJlcXVlc3QuZ2V0KFxyXG4gICAgICAgIGAke2Jhc2VVcml9L3VzZXJzLyR7dXNlcklkfS9tZXNzYWdlcy8ke21lc3NhZ2VJZH0/Zm9ybWF0PW1ldGFkYXRhYCxcclxuICAgICkuaGFuZGxlcjxNZXNzYWdlPihqc29uSGFuZGxlcik7XHJcbn07XHJcbiIsImltcG9ydCB7IEFwaVJlcXVlc3QsIGpzb25IYW5kbGVyIH0gZnJvbSBcImFwaS9hcGlSZXF1ZXN0XCI7XHJcblxyXG5jb25zdCBiYXNlVXJpID0gXCJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9nbWFpbC92MVwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNZXNzYWdlTGlzdCB7XHJcbiAgICBtZXNzYWdlczogTWVzc2FnZUluZm9bXTtcclxuICAgIG5leHRQYWdlVG9rZW46IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNZXNzYWdlSW5mbyB7XHJcbiAgICBpZDogc3RyaW5nO1xyXG4gICAgdGhyZWFkSWQ6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldE1lc3NhZ2VMaXN0ID0gKHVzZXJJZDogc3RyaW5nLCBtYXhSZXN1bHQ6IG51bWJlciA9IDIwKSA9PiB7XHJcbiAgICByZXR1cm4gQXBpUmVxdWVzdC5nZXQoYCR7YmFzZVVyaX0vdXNlcnMvJHt1c2VySWR9L21lc3NhZ2VzP21heFJlc3VsdHM9JHttYXhSZXN1bHR9YCkuaGFuZGxlcjxcclxuICAgICAgICBNZXNzYWdlTGlzdFxyXG4gICAgPihqc29uSGFuZGxlcik7XHJcbn07XHJcbiIsImltcG9ydCB7IEFwaVJlcXVlc3QsIGpzb25IYW5kbGVyIH0gZnJvbSBcImFwaS9hcGlSZXF1ZXN0XCI7XHJcblxyXG5jb25zdCBiYXNlVXJpID0gXCJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9nbWFpbC92MVwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQcm9maWxlIHtcclxuICAgIGVtYWlsQWRkcmVzczogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0UHJvZmlsZSA9ICh1c2VySWQ6IHN0cmluZykgPT4ge1xyXG4gICAgcmV0dXJuIEFwaVJlcXVlc3QuZ2V0KGAke2Jhc2VVcml9L3VzZXJzLyR7dXNlcklkfS9wcm9maWxlYCkuaGFuZGxlcjxQcm9maWxlPihqc29uSGFuZGxlcik7XHJcbn07XHJcbiIsImV4cG9ydCAqIGZyb20gXCIuL2dldE1lc3NhZ2VcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vZ2V0TWVzc2FnZUxpc3RcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vZ2V0UHJvZmlsZVwiO1xyXG4iLCJpbXBvcnQgaTE4biBmcm9tIFwiaTE4bmV4dFwiO1xyXG5pbXBvcnQgeyByZWFjdEkxOG5leHRNb2R1bGUgfSBmcm9tIFwicmVhY3QtaTE4bmV4dFwiO1xyXG5cclxuaW1wb3J0IHJlc291cmNlcyBmcm9tIFwiLi4vbG9jYWxlcy9pbmRleC5qc1wiO1xyXG5cclxuaTE4bi51c2UocmVhY3RJMThuZXh0TW9kdWxlKSAvLyBwYXNzZXMgaTE4biBkb3duIHRvIHJlYWN0LWkxOG5leHRcclxuICAgIC5pbml0KHtcclxuICAgICAgICByZXNvdXJjZXMsXHJcbiAgICAgICAgbG5nOiBwcm9jZXNzLmVudi5MQU5HVUFHRSxcclxuXHJcbiAgICAgICAgZGVmYXVsdE5TOiBcImNvbW1vblwiLCAvLyBkZWZhdWx0IG5hbWVzcGFjZVxyXG5cclxuICAgICAgICBrZXlTZXBhcmF0b3I6IGZhbHNlLCAvLyB3ZSBkbyBub3QgdXNlIGtleXMgaW4gZm9ybSBtZXNzYWdlcy53ZWxjb21lXHJcblxyXG4gICAgICAgIGludGVycG9sYXRpb246IHtcclxuICAgICAgICAgICAgZXNjYXBlVmFsdWU6IGZhbHNlLCAvLyByZWFjdCBhbHJlYWR5IHNhZmVzIGZyb20geHNzXHJcbiAgICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaTE4bjtcclxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCAqIGFzIFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcclxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgQ29ubmVjdGVkUm91dGVyIH0gZnJvbSBcImNvbm5lY3RlZC1yZWFjdC1yb3V0ZXJcIjtcclxuXHJcbmltcG9ydCBcImkxOG5cIjtcclxuXHJcbmltcG9ydCB7IGNyZWF0ZUJyb3dzZXJIaXN0b3J5IH0gZnJvbSBcImhpc3RvcnlcIjtcclxuXHJcbmltcG9ydCBjb25maWd1cmVTdG9yZSBmcm9tIFwic3RvcmVcIjtcclxuXHJcbmltcG9ydCBBcHBsaWNhdGlvbiBmcm9tIFwibW9kdWxlcy9BcHBcIjtcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHt9O1xyXG5jb25zdCBoaXN0b3J5ID0gY3JlYXRlQnJvd3Nlckhpc3RvcnkoeyBiYXNlbmFtZTogcHJvY2Vzcy5lbnYuUFVCTElDX1VSTCB9KTtcclxuXHJcbmNvbnN0IHN0b3JlID0gY29uZmlndXJlU3RvcmUoaW5pdGlhbFN0YXRlLCBoaXN0b3J5KTtcclxuXHJcblJlYWN0RE9NLnJlbmRlcihcclxuICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxyXG4gICAgICAgIDxDb25uZWN0ZWRSb3V0ZXIgaGlzdG9yeT17aGlzdG9yeX0+XHJcbiAgICAgICAgICAgIDxBcHBsaWNhdGlvbiAvPlxyXG4gICAgICAgIDwvQ29ubmVjdGVkUm91dGVyPlxyXG4gICAgPC9Qcm92aWRlcj4sXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKSxcclxuKTtcclxuIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy90eXBpbmdzLWZvci1jc3MtbW9kdWxlcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTctMSEuL0FwcC5jc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIFByZXBhcmUgY3NzVHJhbnNmb3JtYXRpb25cbnZhciB0cmFuc2Zvcm07XG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy90eXBpbmdzLWZvci1jc3MtbW9kdWxlcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTctMSEuL0FwcC5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy90eXBpbmdzLWZvci1jc3MtbW9kdWxlcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTctMSEuL0FwcC5jc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgaG90IH0gZnJvbSBcInJlYWN0LWhvdC1sb2FkZXJcIjtcblxuaW1wb3J0IHsgUm91dGUsIFN3aXRjaCB9IGZyb20gXCJyZWFjdC1yb3V0ZXJcIjtcblxuaW1wb3J0IHsgQXBwQmFyLCBDc3NCYXNlbGluZSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xuXG5pbXBvcnQgeyBOYXZpZ2F0aW9uIH0gZnJvbSBcIm1vZHVsZXMvbmF2aWdhdGlvblwiO1xuaW1wb3J0IHsgUHJvdGVjdGVkUm91dGUgfSBmcm9tIFwibW9kdWxlcy9yb3V0ZXMvcHJvdGVjdGVkLXJvdXRlXCI7XG5cbmltcG9ydCB7IEhvbWUgfSBmcm9tIFwibW9kdWxlcy9wYWdlcy9ob21lXCI7XG5pbXBvcnQgeyBMb2dpbiB9IGZyb20gXCJtb2R1bGVzL3BhZ2VzL2xvZ2luXCI7XG5pbXBvcnQgeyBNZXNzYWdlcyB9IGZyb20gXCJtb2R1bGVzL3BhZ2VzL21lc3NhZ2VzXCI7XG5pbXBvcnQgeyBTZXR0aW5ncyB9IGZyb20gXCJtb2R1bGVzL3BhZ2VzL3NldHRpbmdzXCI7XG5pbXBvcnQgeyBWaWRlb1JlYWN0RXhhbXBsZSB9IGZyb20gXCJtb2R1bGVzL3BhZ2VzL3ZpZGVvLXJlYWN0LWV4YW1wbGVcIjtcblxuaW1wb3J0ICogYXMgc3R5bGVzIGZyb20gXCIuL0FwcC5jc3NcIjtcblxuY29uc3QgQXBwID0gKCkgPT4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXBwfT5cbiAgICAgICAgPENzc0Jhc2VsaW5lIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJhcHBfX2hlYWRlclwiXX0+XG4gICAgICAgICAgICA8QXBwQmFyIHBvc2l0aW9uPVwic3RhdGljXCI+XG4gICAgICAgICAgICAgICAgPE5hdmlnYXRpb24gLz5cbiAgICAgICAgICAgIDwvQXBwQmFyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcImFwcF9fcGFnZVwiXX0+XG4gICAgICAgICAgICA8U3dpdGNoPlxuICAgICAgICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPVwiL1wiIGNvbXBvbmVudD17SG9tZX0gLz5cbiAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9sb2dpblwiIGNvbXBvbmVudD17TG9naW59IC8+XG4gICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvdmlkZW8tcmVhY3RcIiBjb21wb25lbnQ9e1ZpZGVvUmVhY3RFeGFtcGxlfSAvPlxuICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL3NldHRpbmdzXCIgY29tcG9uZW50PXtTZXR0aW5nc30gLz5cbiAgICAgICAgICAgICAgICA8UHJvdGVjdGVkUm91dGUgcGF0aD1cIi9tZXNzYWdlc1wiIGNvbXBvbmVudD17TWVzc2FnZXN9IC8+XG4gICAgICAgICAgICA8L1N3aXRjaD5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBob3QobW9kdWxlKShBcHApO1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7IEJ1dHRvbkJhc2VQcm9wcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25CYXNlXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIjtcblxuZXhwb3J0IGludGVyZmFjZSBVcGxvYWRCdXR0b25Qcm9wcyBleHRlbmRzIEJ1dHRvbkJhc2VQcm9wcyB7XG4gICAgY29tcG9uZW50PzogUmVhY3QuUmVhY3RUeXBlPEJ1dHRvbkJhc2VQcm9wcz47XG5cbiAgICBhY2NlcHQ/OiBzdHJpbmc7XG4gICAgbWF4TGVuZ3RoPzogbnVtYmVyO1xuXG4gICAgb25VcGxvYWQ6IChldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBjbGFzcyBVcGxvYWRCdXR0b24gZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PFVwbG9hZEJ1dHRvblByb3BzPiB7XG4gICAgcHVibGljIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgYWNjZXB0LFxuICAgICAgICAgICAgbWF4TGVuZ3RoLFxuICAgICAgICAgICAgY2hpbGRyZW4sXG4gICAgICAgICAgICBjb21wb25lbnQgPSBCdXR0b24sXG4gICAgICAgICAgICBvblVwbG9hZCxcbiAgICAgICAgICAgIC4uLmJ1dHRvblByb3BzXG4gICAgICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIGNvbnN0IFdyYXBwZXIgPSBjb21wb25lbnQ7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxXcmFwcGVyIHsuLi5idXR0b25Qcm9wc30gY29tcG9uZW50PVwibGFiZWxcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcIm5vbmVcIiB9fVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25VcGxvYWR9XG4gICAgICAgICAgICAgICAgICAgIHsuLi57IGFjY2VwdCwgbWF4TGVuZ3RoIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICA8L1dyYXBwZXI+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG4vLyA8bGFiZWw+XG4vLyAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgc3R5bGU9e3sgZGlzcGxheTogXCJub25lXCIgfX0gb25DaGFuZ2U9e29uVXBsb2FkfSAvPlxuLy8gICAgIDxXcmFwcGVyIHsuLi5idXR0b25Qcm9wc30gY29tcG9uZW50PVwic3BhblwiPlxuLy8gICAgICAgICB7Y2hpbGRyZW59XG4vLyAgICAgPC9XcmFwcGVyPlxuLy8gPC9sYWJlbD5cbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IHsgTmF2TGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIExpbmtEYXRhIHtcclxuICAgIHRvOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTGlua0hhbmRsZXJzIHt9XHJcblxyXG5jbGFzcyBMaW5rIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxMaW5rRGF0YSAmIExpbmtIYW5kbGVycz4ge1xyXG4gICAgcHVibGljIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IGNoaWxkcmVuLCB0byB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8TmF2TGluayB0bz17dG99IHN0eWxlPXt7IHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIiwgY29sb3I6IFwiaW5oZXJpdFwiIH19PlxyXG4gICAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHsgTGluaywgTGluayBhcyBkZWZhdWx0IH07XHJcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IFRhYiwgeyBUYWJQcm9wcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJcIjtcclxuXHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBUYWJMaW5rUHJvcHMgZXh0ZW5kcyBUYWJQcm9wcyB7XHJcbiAgICB0bzogc3RyaW5nO1xyXG59XHJcblxyXG4vLyBIYWNrOiBodHRwczovL2dpdGh1Yi5jb20vbXVpLW9yZy9tYXRlcmlhbC11aS9pc3N1ZXMvOTEwNlxyXG5cclxuZXhwb3J0IGNsYXNzIFRhYkxpbmsgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PFRhYkxpbmtQcm9wcz4ge1xyXG4gICAgcHVibGljIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IHRvLCAuLi50YWJQcm9wcyB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgICAgICAgcmV0dXJuIDxUYWIgey4uLnRhYlByb3BzfSB7Li4ueyBjb21wb25lbnQ6IExpbmssIHRvIH0gYXMgYW55fSAvPjtcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgKiBmcm9tIFwiLi9MaW5rXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL1RhYkxpbmtcIjtcclxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IE5hbWVzcGFjZXNDb25zdW1lciB9IGZyb20gXCJyZWFjdC1pMThuZXh0XCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIExvY2FsaXplRGF0YSB7XHJcbiAgICBpZDogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIExvY2FsaXplSGFuZGxlcnMge1xyXG59XHJcblxyXG5jbGFzcyBMb2NhbGl6ZSBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8TG9jYWxpemVEYXRhICYgTG9jYWxpemVIYW5kbGVycz4ge1xyXG4gICAgcHVibGljIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IGlkIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxOYW1lc3BhY2VzQ29uc3VtZXI+XHJcbiAgICAgICAgICAgICAgICB7dCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHQoaWQpO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPC9OYW1lc3BhY2VzQ29uc3VtZXI+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHsgTG9jYWxpemUsIExvY2FsaXplIGFzIGRlZmF1bHQgfTtcclxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgVGFicyBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFic1wiO1xyXG5cclxuaW1wb3J0IHsgVGFiTGluayB9IGZyb20gXCJtb2R1bGVzL2xpbmtcIjtcclxuaW1wb3J0IHsgTG9jYWxpemUgfSBmcm9tIFwibW9kdWxlcy9sb2NhbGl6ZVwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBOYXZpZ2F0aW9uRGF0YSB7XHJcbiAgICBwYXRoOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTmF2aWdhdGlvbkhhbmRsZXJzIHt9XHJcblxyXG5jb25zdCBQYXRoTmFtZU1hcCA9IHtcclxuICAgIFwiL1wiOiBcIm5hdmlnYXRpb246aG9tZVwiLFxyXG4gICAgXCIvc2V0dGluZ3NcIjogXCJuYXZpZ2F0aW9uOnNldHRpbmdzXCIsXHJcbiAgICBcIi9tZXNzYWdlc1wiOiBcIm5hdmlnYXRpb246bWVzc2FnZXNcIixcclxuICAgIFwiL3ZpZGVvLXJlYWN0XCI6IFwibmF2aWdhdGlvbjp2aWRlb1wiLFxyXG59O1xyXG5cclxuZXhwb3J0IGNsYXNzIE5hdmlnYXRpb24gZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PE5hdmlnYXRpb25EYXRhICYgTmF2aWdhdGlvbkhhbmRsZXJzPiB7XHJcbiAgICBwdWJsaWMgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgcGF0aCB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgY29uc3QgaXNWYWxpZFBhdGggPSBCb29sZWFuKFBhdGhOYW1lTWFwW3BhdGhdKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPFRhYnMgdmFsdWU9e2lzVmFsaWRQYXRoID8gcGF0aCA6IGZhbHNlfT5cclxuICAgICAgICAgICAgICAgIHtPYmplY3Qua2V5cyhQYXRoTmFtZU1hcCkubWFwKHBhdGggPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxUYWJMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17cGF0aH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3BhdGh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvPXtwYXRofVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17PExvY2FsaXplIGlkPXtQYXRoTmFtZU1hcFtwYXRoXX0gLz59XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L1RhYnM+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2aWdhdGlvbjtcclxuIiwiaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5cclxuaW1wb3J0IHsgUm9vdFN0YXRlIH0gZnJvbSBcInJlZHVjZXJzXCI7XHJcblxyXG5pbXBvcnQgTmF2aWdhdGlvbiwgeyBOYXZpZ2F0aW9uRGF0YSwgTmF2aWdhdGlvbkhhbmRsZXJzIH0gZnJvbSBcIi4vTmF2aWdhdGlvblwiO1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlOiBSb290U3RhdGUpOiBOYXZpZ2F0aW9uRGF0YSA9PiB7XHJcbiAgICBjb25zdCBwYXRoID0gc3RhdGUucm91dGVyLmxvY2F0aW9uLnBhdGhuYW1lO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcGF0aCxcclxuICAgIH07XHJcbn07XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHM6IE5hdmlnYXRpb25IYW5kbGVycyA9IHt9O1xyXG5cclxuY29uc3QgTmF2aWdhdGlvbk1vZHVsZSA9IGNvbm5lY3QoXHJcbiAgICBtYXBTdGF0ZVRvUHJvcHMsXHJcbiAgICBtYXBEaXNwYXRjaFRvUHJvcHMsXHJcbikoTmF2aWdhdGlvbik7XHJcblxyXG5leHBvcnQgeyBOYXZpZ2F0aW9uTW9kdWxlIGFzIGRlZmF1bHQsIE5hdmlnYXRpb25Nb2R1bGUgYXMgTmF2aWdhdGlvbiB9O1xyXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiO1xyXG5pbXBvcnQgR3JpZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZFwiO1xyXG5cclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJtb2R1bGVzL2xpbmtcIjtcclxuaW1wb3J0IHsgTG9jYWxpemUgfSBmcm9tIFwibW9kdWxlcy9sb2NhbGl6ZVwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBIb21lRGF0YSB7fVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBIb21lSGFuZGxlcnMge31cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWUgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PEhvbWVEYXRhICYgSG9tZUhhbmRsZXJzPiB7XHJcbiAgICBwdWJsaWMgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBqdXN0aWZ5PVwiY2VudGVyXCIgYWxpZ25JdGVtcz1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgdG89XCIvbWVzc2FnZXNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBjb2xvcj1cInByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExvY2FsaXplIGlkPVwiaG9tZTp2aWV3TWVzc2FnZXNcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcblxyXG5pbXBvcnQgeyBSb290U3RhdGUgfSBmcm9tIFwicmVkdWNlcnNcIjtcclxuXHJcbmltcG9ydCBIb21lLCB7IEhvbWVEYXRhLCBIb21lSGFuZGxlcnMgfSBmcm9tIFwiLi9Ib21lXCI7XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoX3N0YXRlOiBSb290U3RhdGUpOiBIb21lRGF0YSA9PiB7XHJcbiAgICByZXR1cm4ge307XHJcbn07XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHM6IEhvbWVIYW5kbGVycyA9IHt9O1xyXG5cclxuY29uc3QgSG9tZU1vZHVsZSA9IGNvbm5lY3QoXHJcbiAgICBtYXBTdGF0ZVRvUHJvcHMsXHJcbiAgICBtYXBEaXNwYXRjaFRvUHJvcHMsXHJcbikoSG9tZSk7XHJcblxyXG5leHBvcnQgeyBIb21lTW9kdWxlIGFzIGRlZmF1bHQsIEhvbWVNb2R1bGUgYXMgSG9tZSB9O1xyXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCB7IFJlZGlyZWN0IH0gZnJvbSBcInJlYWN0LXJvdXRlclwiO1xyXG5cclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCI7XHJcbmltcG9ydCBHcmlkIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCI7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCI7XHJcblxyXG5pbXBvcnQgeyBMb2NhbGl6ZSB9IGZyb20gXCJtb2R1bGVzL2xvY2FsaXplXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIExvZ2luRGF0YSB7XHJcbiAgICBpc0F1dGhlbnRpY2F0ZWQ6IGJvb2xlYW47XHJcbiAgICByZWRpcmVjdFBhdGg/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTG9naW5IYW5kbGVycyB7XHJcbiAgICBzaWduVXA6ICgpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmNsYXNzIExvZ2luIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxMb2dpbkRhdGEgJiBMb2dpbkhhbmRsZXJzPiB7XHJcbiAgICBwdWJsaWMgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgaXNBdXRoZW50aWNhdGVkLCByZWRpcmVjdFBhdGggfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIGlmIChpc0F1dGhlbnRpY2F0ZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDxSZWRpcmVjdCB0bz17cmVkaXJlY3RQYXRofSAvPjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBqdXN0aWZ5PVwiY2VudGVyXCIgYWxpZ25JdGVtcz1cImNlbnRlclwiIGRpcmVjdGlvbj1cImNvbHVtblwiPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBjb2xvcj1cImluaGVyaXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExvY2FsaXplIGlkPVwibG9naW46bmVlZEF1dGhvcml6ZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBjb2xvcj1cInByaW1hcnlcIiBvbkNsaWNrPXt0aGlzLnByb3BzLnNpZ25VcH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMb2NhbGl6ZSBpZD1cImxvZ2luOnNpZ25VcFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpbjtcclxuIiwiaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5cclxuaW1wb3J0IHsgUm9vdFN0YXRlIH0gZnJvbSBcInJlZHVjZXJzXCI7XHJcbmltcG9ydCB7IHNpZ25VcCB9IGZyb20gXCJyZWR1Y2Vycy9hY3Rpb25zXCI7XHJcblxyXG5pbXBvcnQgTG9naW4sIHsgTG9naW5EYXRhLCBMb2dpbkhhbmRsZXJzIH0gZnJvbSBcIi4vTG9naW5cIjtcclxuXHJcbmNvbnN0IGdldFJlZGlyZWN0UGF0aCA9IChwYXRoOiBzdHJpbmcpID0+IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IC8uKnJlZGlyZWN0UGF0aD0oPzxwYXRoPi4qKS4qLy5leGVjKHBhdGgpO1xyXG4gICAgcmV0dXJuIChyZXN1bHQgJiYgcmVzdWx0WzFdKSB8fCBcIi9cIjtcclxufTtcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZTogUm9vdFN0YXRlKTogTG9naW5EYXRhID0+IHtcclxuICAgIGNvbnN0IHJlZGlyZWN0UGF0aCA9IGdldFJlZGlyZWN0UGF0aChzdGF0ZS5yb3V0ZXIubG9jYXRpb24uc2VhcmNoKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGlzQXV0aGVudGljYXRlZDogQm9vbGVhbihzdGF0ZS5hdXRoLnRva2VuSW5mbyksXHJcbiAgICAgICAgcmVkaXJlY3RQYXRoLFxyXG4gICAgfTtcclxufTtcclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wczogTG9naW5IYW5kbGVycyA9IHtcclxuICAgIHNpZ25VcCxcclxufTtcclxuXHJcbmNvbnN0IExvZ2luTW9kdWxlID0gY29ubmVjdChcclxuICAgIG1hcFN0YXRlVG9Qcm9wcyxcclxuICAgIG1hcERpc3BhdGNoVG9Qcm9wcyxcclxuKShMb2dpbik7XHJcblxyXG5leHBvcnQgeyBMb2dpbk1vZHVsZSBhcyBkZWZhdWx0LCBMb2dpbk1vZHVsZSBhcyBMb2dpbiB9O1xyXG4iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3R5cGluZ3MtZm9yLWNzcy1tb2R1bGVzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tOC0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vTWVzc2FnZXMuc2Nzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gUHJlcGFyZSBjc3NUcmFuc2Zvcm1hdGlvblxudmFyIHRyYW5zZm9ybTtcblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3R5cGluZ3MtZm9yLWNzcy1tb2R1bGVzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tOC0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vTWVzc2FnZXMuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3R5cGluZ3MtZm9yLWNzcy1tb2R1bGVzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tOC0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vTWVzc2FnZXMuc2Nzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBjbGFzc05hbWVzID0gcmVxdWlyZShcImNsYXNzbmFtZXMvYmluZFwiKTtcclxuXHJcbmltcG9ydCBDaXJjdWxhclByb2dyZXNzIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9DaXJjdWxhclByb2dyZXNzXCI7XHJcbmltcG9ydCBHcmlkIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCI7XHJcbmltcG9ydCBQYXBlciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXJcIjtcclxuaW1wb3J0IFRhYmxlIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZVwiO1xyXG5pbXBvcnQgVGFibGVCb2R5IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUJvZHlcIjtcclxuaW1wb3J0IFRhYmxlQ2VsbCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVDZWxsXCI7XHJcbmltcG9ydCBUYWJsZUhlYWQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlSGVhZFwiO1xyXG5pbXBvcnQgVGFibGVSb3cgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlUm93XCI7XHJcblxyXG5pbXBvcnQgTG9jYWxpemUgZnJvbSBcIm1vZHVsZXMvbG9jYWxpemVcIjtcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vTWVzc2FnZXMuc2Nzc1wiO1xyXG5jb25zdCBzdHlsZSA9IGNsYXNzTmFtZXMuYmluZChzdHlsZXMpO1xyXG5cclxuaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gXCIuL3R5cGVzXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE1lc3NhZ2VzRGF0YSB7XHJcbiAgICBpc0xvYWRpbmc6IGJvb2xlYW47XHJcbiAgICBtZXNzYWdlcz86IE1lc3NhZ2VbXTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNZXNzYWdlc0hhbmRsZXJzIHt9XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZXNzYWdlcyBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8TWVzc2FnZXNEYXRhICYgTWVzc2FnZXNIYW5kbGVycz4ge1xyXG4gICAgcHVibGljIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IGlzTG9hZGluZyB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIGp1c3RpZnk9XCJjZW50ZXJcIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgY2xhc3NOYW1lPXtzdHlsZShzdHlsZXMubWVzc2FnZXMpfT5cclxuICAgICAgICAgICAgICAgIHtpc0xvYWRpbmcgPyB0aGlzLnJlbmRlclByZWxvYWRlcigpIDogdGhpcy5yZW5kZXJDb250ZW50KCl9XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVuZGVyUHJlbG9hZGVyID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiA8Q2lyY3VsYXJQcm9ncmVzcyAvPjtcclxuICAgIH07XHJcblxyXG4gICAgcHJpdmF0ZSByZW5kZXJDb250ZW50ID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgbWVzc2FnZXMgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIGlmICghbWVzc2FnZXMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8UGFwZXI+XHJcbiAgICAgICAgICAgICAgICA8VGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRhYmxlSGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TG9jYWxpemUgaWQ9XCJtZXNzYWdlczpmcm9tXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TG9jYWxpemUgaWQ9XCJtZXNzYWdlczpzdWJqZWN0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVGFibGVIZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUYWJsZUJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHttZXNzYWdlcy5tYXAocm93ID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZVJvdyBrZXk9e3Jvdy5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD57cm93LmZyb219PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD57cm93LnN1YmplY3R9PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQm9keT5cclxuICAgICAgICAgICAgICAgIDwvVGFibGU+XHJcbiAgICAgICAgICAgIDwvUGFwZXI+XHJcbiAgICAgICAgKTtcclxuICAgIH07XHJcbn1cclxuIiwiaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5cclxuaW1wb3J0IHsgUm9vdFN0YXRlIH0gZnJvbSBcInJlZHVjZXJzXCI7XHJcblxyXG5pbXBvcnQgTWVzc2FnZXMsIHsgTWVzc2FnZXNEYXRhLCBNZXNzYWdlc0hhbmRsZXJzIH0gZnJvbSBcIi4vTWVzc2FnZXNcIjtcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZTogUm9vdFN0YXRlKTogTWVzc2FnZXNEYXRhID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbWVzc2FnZXM6IHN0YXRlLm1lc3NhZ2VzLml0ZW1zLFxyXG4gICAgICAgIGlzTG9hZGluZzogc3RhdGUubWVzc2FnZXMuaXNMb2FkaW5nLFxyXG4gICAgfTtcclxufTtcclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wczogTWVzc2FnZXNIYW5kbGVycyA9IHt9O1xyXG5cclxuY29uc3QgTWVzc2FnZXNNb2R1bGUgPSBjb25uZWN0KFxyXG4gICAgbWFwU3RhdGVUb1Byb3BzLFxyXG4gICAgbWFwRGlzcGF0Y2hUb1Byb3BzLFxyXG4pKE1lc3NhZ2VzKTtcclxuXHJcbmV4cG9ydCB7IE1lc3NhZ2VzTW9kdWxlIGFzIGRlZmF1bHQsIE1lc3NhZ2VzTW9kdWxlIGFzIE1lc3NhZ2VzIH07XHJcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IEdyaWQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRcIjtcclxuXHJcbmltcG9ydCB7IExvY2FsaXplIH0gZnJvbSBcIm1vZHVsZXMvbG9jYWxpemVcIjtcclxuaW1wb3J0IFRleHRGaWVsZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkXCI7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNldHRpbmdzRGF0YSB7XHJcbiAgICBjbGllbnRJZDogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNldHRpbmdzSGFuZGxlcnMge1xyXG4gICAgb25DaGFuZ2VDbGllbnRJZDogKGNsaWVudElkOiBzdHJpbmcpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNldHRpbmdzIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxTZXR0aW5nc0RhdGEgJiBTZXR0aW5nc0hhbmRsZXJzPiB7XHJcbiAgICBwdWJsaWMgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgY2xpZW50SWQgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIGp1c3RpZnk9XCJjZW50ZXJcIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgZGlyZWN0aW9uPVwiY29sdW1uXCI+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGNvbG9yPVwiaW5oZXJpdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TG9jYWxpemUgaWQ9XCJzZXR0aW5nczplbnRlckNpZW50SWRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cIm91dGxpbmVkLW5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17PExvY2FsaXplIGlkPVwic2V0dGluZ3M6Y2xpZW50SWRcIiAvPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2NsaWVudElkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XHJcbiAgICAgICAgY29uc3QgY2xpZW50SWQgPSBldmVudC5jdXJyZW50VGFyZ2V0LnZhbHVlO1xyXG5cclxuICAgICAgICBjb25zdCB7IG9uQ2hhbmdlQ2xpZW50SWQgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgb25DaGFuZ2VDbGllbnRJZChjbGllbnRJZCk7XHJcbiAgICB9O1xyXG59XHJcbiIsImltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuXHJcbmltcG9ydCB7IFJvb3RTdGF0ZSB9IGZyb20gXCJyZWR1Y2Vyc1wiO1xyXG5cclxuaW1wb3J0IFNldHRpbmdzLCB7IFNldHRpbmdzRGF0YSwgU2V0dGluZ3NIYW5kbGVycyB9IGZyb20gXCIuL1NldHRpbmdzXCI7XHJcbmltcG9ydCB7IHNldEdtYWlsQ2xpZW50SWQgfSBmcm9tIFwicmVkdWNlcnMvYWN0aW9uc1wiO1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlOiBSb290U3RhdGUpOiBTZXR0aW5nc0RhdGEgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBjbGllbnRJZDogc3RhdGUuc2V0dGluZ3MuY2xpZW50SWQgfHwgXCJcIixcclxuICAgIH07XHJcbn07XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHM6IFNldHRpbmdzSGFuZGxlcnMgPSB7XHJcbiAgICBvbkNoYW5nZUNsaWVudElkOiBzZXRHbWFpbENsaWVudElkLFxyXG59O1xyXG5cclxuY29uc3QgU2V0dGluZ3NNb2R1bGUgPSBjb25uZWN0KFxyXG4gICAgbWFwU3RhdGVUb1Byb3BzLFxyXG4gICAgbWFwRGlzcGF0Y2hUb1Byb3BzLFxyXG4pKFNldHRpbmdzKTtcclxuXHJcbmV4cG9ydCB7IFNldHRpbmdzTW9kdWxlIGFzIGRlZmF1bHQsIFNldHRpbmdzTW9kdWxlIGFzIFNldHRpbmdzIH07XHJcbiIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdHlwaW5ncy1mb3ItY3NzLW1vZHVsZXMtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS04LTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9WaWRlb1JlYWN0RXhhbXBsZS5zY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBQcmVwYXJlIGNzc1RyYW5zZm9ybWF0aW9uXG52YXIgdHJhbnNmb3JtO1xuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdHlwaW5ncy1mb3ItY3NzLW1vZHVsZXMtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS04LTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9WaWRlb1JlYWN0RXhhbXBsZS5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdHlwaW5ncy1mb3ItY3NzLW1vZHVsZXMtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS04LTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9WaWRlb1JlYWN0RXhhbXBsZS5zY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHsgVXBsb2FkQnV0dG9uIH0gZnJvbSBcIm1vZHVsZXMvYnV0dG9uXCI7XG5pbXBvcnQgeyBWaWRlb1BsYXllciB9IGZyb20gXCIuL3ZpZGVvLXBsYXllclwiO1xuaW1wb3J0IHsgSWNvbkJ1dHRvbiwgVGV4dEZpZWxkIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XG5cbmltcG9ydCBBdHRhY2htZW50SWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0F0dGFjaG1lbnRcIjtcbmltcG9ydCB7IExvY2FsaXplIH0gZnJvbSBcIm1vZHVsZXMvbG9jYWxpemVcIjtcblxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9WaWRlb1JlYWN0RXhhbXBsZS5zY3NzXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVmlkZW9SZWFjdEV4YW1wbGVEYXRhIHt9XG5cbmV4cG9ydCBpbnRlcmZhY2UgVmlkZW9SZWFjdEV4YW1wbGVIYW5kbGVycyB7fVxuXG5pbnRlcmZhY2UgRmlsZUluZm8ge1xuICAgIG5hbWU6IHN0cmluZztcbiAgICB1cmw6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBWaWRlb1JlYWN0RXhhbXBsZVN0YXRlIHtcbiAgICB2aWRlb0ZpbGU/OiBGaWxlSW5mbztcbiAgICBzdWJ0aXRsZXNGaWxlPzogRmlsZUluZm87XG59XG5cbmV4cG9ydCBjbGFzcyBWaWRlb1JlYWN0RXhhbXBsZSBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8XG4gICAgVmlkZW9SZWFjdEV4YW1wbGVEYXRhICYgVmlkZW9SZWFjdEV4YW1wbGVIYW5kbGVycyxcbiAgICBWaWRlb1JlYWN0RXhhbXBsZVN0YXRlXG4+IHtcbiAgICBwdWJsaWMgc3RhdGU6IFZpZGVvUmVhY3RFeGFtcGxlU3RhdGUgPSB7fTtcblxuICAgIHB1YmxpYyByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgdmlkZW9GaWxlLCBzdWJ0aXRsZXNGaWxlIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1widmlkZW8tcGxheWVyXCJdfT5cbiAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJDb250cm9sUGFuZWwoKX1cbiAgICAgICAgICAgICAgICA8VmlkZW9QbGF5ZXJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXNbXCJ2aWRlby1wbGF5ZXJfX3BsYXllclwiXX1cbiAgICAgICAgICAgICAgICAgICAgdmlkZW9GaWxlVVJMPXt2aWRlb0ZpbGUgJiYgdmlkZW9GaWxlLnVybH1cbiAgICAgICAgICAgICAgICAgICAgc3VidGl0bGVzRmlsZVVSTD17c3VidGl0bGVzRmlsZSAmJiBzdWJ0aXRsZXNGaWxlLnVybH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZW5kZXJDb250cm9sUGFuZWwgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgc3VidGl0bGVzRmlsZSwgdmlkZW9GaWxlIH0gPSB0aGlzLnN0YXRlO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcInZpZGVvLXBsYXllcl9fY29udHJvbC1wYW5lbFwiXX0+XG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlc1tcInZpZGVvLXBsYXllcl9fY29udHJvbC1pdGVtXCJdfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmlkZW9GaWxlID8gdmlkZW9GaWxlLm5hbWUgOiBcIlwifVxuICAgICAgICAgICAgICAgICAgICBoZWxwZXJUZXh0PXs8TG9jYWxpemUgaWQ9XCJ2aWRlb1BsYXllcjp2aWRlb1wiIC8+fVxuICAgICAgICAgICAgICAgICAgICBJbnB1dFByb3BzPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydEFkb3JubWVudDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxVcGxvYWRCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjZXB0PVwiLm1wNFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heExlbmd0aD17MX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25VcGxvYWQ9e3RoaXMuaGFuZGxlVmlkZW9VcGxvYWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17SWNvbkJ1dHRvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBdHRhY2htZW50SWNvbiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVXBsb2FkQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXNbXCJ2aWRlby1wbGF5ZXJfX2NvbnRyb2wtaXRlbVwiXX1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3N1YnRpdGxlc0ZpbGUgPyBzdWJ0aXRsZXNGaWxlLm5hbWUgOiBcIlwifVxuICAgICAgICAgICAgICAgICAgICBoZWxwZXJUZXh0PXs8TG9jYWxpemUgaWQ9XCJ2aWRlb1BsYXllcjpzdWJ0aXRsZVwiIC8+fVxuICAgICAgICAgICAgICAgICAgICBJbnB1dFByb3BzPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydEFkb3JubWVudDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxVcGxvYWRCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjZXB0PVwiLnNydFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heExlbmd0aD17MX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25VcGxvYWQ9e3RoaXMuaGFuZGxlU3VidGl0bGVzVXBsb2FkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e0ljb25CdXR0b259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXR0YWNobWVudEljb24gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1VwbG9hZEJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH07XG5cbiAgICBwcml2YXRlIGhhbmRsZVZpZGVvVXBsb2FkID0gKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgICAgICBjb25zdCB0YXJnZXRFdmVudCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XG5cbiAgICAgICAgY29uc3QgZmlsZXMgPSB0YXJnZXRFdmVudC5maWxlcztcblxuICAgICAgICBpZiAoZmlsZXMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICBjb25zdCBmaWxlID0gZmlsZXNbMF07XG5cbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIHZpZGVvRmlsZToge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBmaWxlLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgIHVybDogVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlKSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcHJpdmF0ZSBoYW5kbGVTdWJ0aXRsZXNVcGxvYWQgPSAoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgICAgIGNvbnN0IHRhcmdldEV2ZW50ID0gZXZlbnQuY3VycmVudFRhcmdldDtcblxuICAgICAgICBjb25zdCBmaWxlcyA9IHRhcmdldEV2ZW50LmZpbGVzO1xuXG4gICAgICAgIGlmIChmaWxlcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIGNvbnN0IGZpbGUgPSBmaWxlc1swXTtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIHN1YnRpdGxlc0ZpbGU6IHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogZmlsZS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICB1cmw6IFVSTC5jcmVhdGVPYmplY3RVUkwoZmlsZSksXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbn1cbiIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdHlwaW5ncy1mb3ItY3NzLW1vZHVsZXMtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS04LTEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9WaWRlb1BsYXllci5zY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBQcmVwYXJlIGNzc1RyYW5zZm9ybWF0aW9uXG52YXIgdHJhbnNmb3JtO1xuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdHlwaW5ncy1mb3ItY3NzLW1vZHVsZXMtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS04LTEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9WaWRlb1BsYXllci5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdHlwaW5ncy1mb3ItY3NzLW1vZHVsZXMtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS04LTEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9WaWRlb1BsYXllci5zY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgY2xhc3NOYW1lcyA9IHJlcXVpcmUoXCJjbGFzc25hbWVzL2JpbmRcIik7XG5cbmltcG9ydCBGYWIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiO1xuXG5pbXBvcnQgQWNjZXNzQWxhcm1JY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvUGxheUNpcmNsZU91dGxpbmVcIjtcbmltcG9ydCBGdWxsc2NyZWVuSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0Z1bGxzY3JlZW5cIjtcblxuaW1wb3J0IFNsaWRlciBmcm9tIFwiQG1hdGVyaWFsLXVpL2xhYi9TbGlkZXJcIjtcblxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9WaWRlb1BsYXllci5zY3NzXCI7XG5jb25zdCBzdHlsZSA9IGNsYXNzTmFtZXMuYmluZChzdHlsZXMpO1xuXG5leHBvcnQgaW50ZXJmYWNlIFZpZGVvUGxheWVyRGF0YSB7XG4gICAgY2xhc3NOYW1lPzogc3RyaW5nO1xuICAgIHZpZGVvRmlsZVVSTD86IHN0cmluZztcbiAgICBzdWJ0aXRsZXNGaWxlVVJMPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFZpZGVvUGxheWVySGFuZGxlcnMge31cblxuZXhwb3J0IGludGVyZmFjZSBWaWRlb1BsYXllclN0YXRlIHtcbiAgICBpc0Z1bGxzY3JlZW46IGJvb2xlYW47XG4gICAgaXNQYXVzZWQ6IGJvb2xlYW47XG4gICAgc2Vla1Bvc2l0aW9uOiBudW1iZXI7XG5cbiAgICBzdWJ0aXRsZXM6IHN0cmluZ1tdO1xufVxuXG5leHBvcnQgY2xhc3MgVmlkZW9QbGF5ZXIgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PFZpZGVvUGxheWVyRGF0YSAmIFZpZGVvUGxheWVySGFuZGxlcnM+IHtcbiAgICBwdWJsaWMgc3RhdGU6IFZpZGVvUGxheWVyU3RhdGUgPSB7XG4gICAgICAgIGlzRnVsbHNjcmVlbjogZmFsc2UsXG4gICAgICAgIGlzUGF1c2VkOiB0cnVlLFxuICAgICAgICBzZWVrUG9zaXRpb246IDAsXG4gICAgICAgIHN1YnRpdGxlczogW10sXG4gICAgfTtcblxuICAgIHByaXZhdGUgdmlkZW9QbGF5ZXJFbGVtZW50OiBIVE1MRGl2RWxlbWVudDtcbiAgICBwcml2YXRlIHZpZGVvRWxlbWVudDogSFRNTFZpZGVvRWxlbWVudDtcbiAgICBwcml2YXRlIHRyYWNrRWxlbWVudDogSFRNTFRyYWNrRWxlbWVudDtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMuc3Vic2NyaWJlKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICAgICAgdGhpcy5zdWJzY3JpYmUoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IGNsYXNzTmFtZSwgdmlkZW9GaWxlVVJMLCBzdWJ0aXRsZXNGaWxlVVJMIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCB7IHNlZWtQb3NpdGlvbiwgc3VidGl0bGVzIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgcmVmPXtjb21wb25lbnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnZpZGVvUGxheWVyRWxlbWVudCA9IGNvbXBvbmVudDtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGUoc3R5bGVzW1widmlkZW8tcGxheWVyXCJdLCBjbGFzc05hbWUpfVxuICAgICAgICAgICAgICAgIG9uV2hlZWw9e3RoaXMuaGFuZGxlV2hlZWx9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHZpZGVvXG4gICAgICAgICAgICAgICAgICAgIHNyYz17dmlkZW9GaWxlVVJMfVxuICAgICAgICAgICAgICAgICAgICByZWY9e2NvbXBvbmVudCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnZpZGVvRWxlbWVudCA9IGNvbXBvbmVudDtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZShzdHlsZXNbXCJ2aWRlby1wbGF5ZXJfX3ZpZGVvXCJdKX1cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVQbGF5fVxuICAgICAgICAgICAgICAgICAgICBvbkRvdWJsZUNsaWNrPXt0aGlzLnRvb2dsZUZ1bGxTY3JlZW59XG4gICAgICAgICAgICAgICAgICAgIG9uVGltZVVwZGF0ZT17dGhpcy5oYW5kbGVUaW1lVXBkYXRlfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge3N1YnRpdGxlc0ZpbGVVUkwgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyYWNrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXtjb21wb25lbnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRyYWNrRWxlbWVudCA9IGNvbXBvbmVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IFwibm9uZVwiIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2luZD1cInN1YnRpdGxlc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtzdWJ0aXRsZXNGaWxlVVJMfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC92aWRlbz5cbiAgICAgICAgICAgICAgICB7c3VidGl0bGVzLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUoXCJ2aWRlby1wbGF5ZXJfX3N1YnRpdGxlXCIpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtzdWJ0aXRsZXMubWFwKChzdWJ0aXRsZSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9PntzdWJ0aXRsZX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZShzdHlsZXNbXCJ2aWRlby1wbGF5ZXJfX2NvbnRyb2xzXCJdKX0+XG4gICAgICAgICAgICAgICAgICAgIDxGYWIgY29sb3I9XCJwcmltYXJ5XCIgYXJpYS1sYWJlbD1cIlBsYXlcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZVBsYXl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEFjY2Vzc0FsYXJtSWNvbiAvPlxuICAgICAgICAgICAgICAgICAgICA8L0ZhYj5cbiAgICAgICAgICAgICAgICAgICAgPFNsaWRlclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZShzdHlsZXNbXCJ2aWRlby1wbGF5ZXJfX3NsaWRlclwiXSl9XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2Vla1Bvc2l0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlU2Vla1Bvc2l0aW9ufVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8RmFiIGNvbG9yPVwicHJpbWFyeVwiIGFyaWEtbGFiZWw9XCJGdWxsc2NyZWVuXCIgb25DbGljaz17dGhpcy50b29nbGVGdWxsU2NyZWVufT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGdWxsc2NyZWVuSWNvbiAvPlxuICAgICAgICAgICAgICAgICAgICA8L0ZhYj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cblxuICAgIHByaXZhdGUgc3Vic2NyaWJlID0gKCkgPT4ge1xuICAgICAgICAvLyBUT0RPOiDQn9C+0LTQv9C40YHQutC4INC90YPQttC90L4g0LTQtdC70LDRgtGMINC70LjRiNGMINGA0LDQt1xuICAgICAgICBpZiAodGhpcy50cmFja0VsZW1lbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IHRleHRUcmFjayA9IHRoaXMudHJhY2tFbGVtZW50LnRyYWNrO1xuXG4gICAgICAgICAgICB0ZXh0VHJhY2subW9kZSA9IFwiaGlkZGVuXCI7XG4gICAgICAgICAgICB0ZXh0VHJhY2sub25jdWVjaGFuZ2UgPSB0aGlzLmhhbmRsZUN1ZUNoYW5nZTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBwcml2YXRlIGhhbmRsZUNoYW5nZVNlZWtQb3NpdGlvbiA9IChfZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PHt9PiwgdmFsdWU6IG51bWJlcikgPT4ge1xuICAgICAgICBpZiAodGhpcy52aWRlb0VsZW1lbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IGR1cmF0aW9uID0gdGhpcy52aWRlb0VsZW1lbnQuZHVyYXRpb247XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50VGltZSA9IGR1cmF0aW9uICogKHZhbHVlIC8gMTAwKTtcblxuICAgICAgICAgICAgdGhpcy52aWRlb0VsZW1lbnQuY3VycmVudFRpbWUgPSBjdXJyZW50VGltZTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBwcml2YXRlIGhhbmRsZVBsYXkgPSAoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLnZpZGVvRWxlbWVudCkge1xuICAgICAgICAgICAgY29uc3QgeyBpc1BhdXNlZCB9ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgICAgICAgaWYgKGlzUGF1c2VkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy52aWRlb0VsZW1lbnQucGxheSgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZpZGVvRWxlbWVudC5wYXVzZSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXNQYXVzZWQ6ICFpc1BhdXNlZCB9KTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBwcml2YXRlIGhhbmRsZVdoZWVsID0gKGV2ZW50OiBSZWFjdC5XaGVlbEV2ZW50PEhUTUxEaXZFbGVtZW50PikgPT4ge1xuICAgICAgICBpZiAodGhpcy52aWRlb0VsZW1lbnQpIHtcbiAgICAgICAgICAgIGlmIChldmVudC5kZWx0YVkgPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy52aWRlb0VsZW1lbnQuY3VycmVudFRpbWUgLT0gNTsgLy8gdG8gY29uc3RcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy52aWRlb0VsZW1lbnQuY3VycmVudFRpbWUgKz0gNTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfTtcblxuICAgIHByaXZhdGUgaGFuZGxlVGltZVVwZGF0ZSA9ICgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMudmlkZW9FbGVtZW50KSB7XG4gICAgICAgICAgICBjb25zdCBkdXJhdGlvbiA9IHRoaXMudmlkZW9FbGVtZW50LmR1cmF0aW9uO1xuICAgICAgICAgICAgY29uc3QgY3VycmVudFRpbWUgPSB0aGlzLnZpZGVvRWxlbWVudC5jdXJyZW50VGltZTtcblxuICAgICAgICAgICAgY29uc3Qgc2Vla1Bvc2l0aW9uID0gKDEwMCAvIGR1cmF0aW9uKSAqIGN1cnJlbnRUaW1lO1xuXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2Vla1Bvc2l0aW9uIH0pO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHByaXZhdGUgaGFuZGxlQ3VlQ2hhbmdlID0gKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy50cmFja0VsZW1lbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IHRleHRUcmFjayA9IHRoaXMudHJhY2tFbGVtZW50LnRyYWNrO1xuXG4gICAgICAgICAgICBjb25zdCBzdWJ0aXRsZXMgPSBbXTtcblxuICAgICAgICAgICAgZm9yIChjb25zdCBjdWUgb2YgdGV4dFRyYWNrLmFjdGl2ZUN1ZXMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0ZXh0ID0gY3VlLnRleHQucmVwbGFjZSgvKDwoW14+XSspPikvZ2ksIFwiXCIpO1xuICAgICAgICAgICAgICAgIHN1YnRpdGxlcy5wdXNoKHRleHQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc3VidGl0bGVzIH0pO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHByaXZhdGUgdG9vZ2xlRnVsbFNjcmVlbiA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgeyBpc0Z1bGxzY3JlZW4gfSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgICAgaWYgKGlzRnVsbHNjcmVlbikge1xuICAgICAgICAgICAgZG9jdW1lbnQuZXhpdEZ1bGxzY3JlZW4oKS5jYXRjaChlcnJvckxvZ2dlcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnZpZGVvUGxheWVyRWxlbWVudC5yZXF1ZXN0RnVsbHNjcmVlbigpLmNhdGNoKGVycm9yTG9nZ2VyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc0Z1bGxzY3JlZW46ICFpc0Z1bGxzY3JlZW4gfSk7XG4gICAgfTtcbn1cblxuY29uc3QgZXJyb3JMb2dnZXIgPSByZWFzb24gPT4ge1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1jb25zb2xlXG4gICAgY29uc29sZS5sb2coXCJyZWFzb25cIiwgSlNPTi5zdHJpbmdpZnkocmVhc29uLCBudWxsLCBcIiBcIikpO1xufTtcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IHsgUmVkaXJlY3QsIFJvdXRlLCBSb3V0ZVByb3BzIH0gZnJvbSBcInJlYWN0LXJvdXRlclwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQcm90ZWN0ZWRSb3V0ZURhdGEgZXh0ZW5kcyBSb3V0ZVByb3BzIHtcclxuICAgIGlzQXV0aGVudGljYXRlZDogYm9vbGVhbjtcclxuICAgIGN1cnJlbnRQYXRoOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUHJvdGVjdGVkUm91dGVIYW5kbGVycyB7fVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvdGVjdGVkUm91dGUgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PFxyXG4gICAgUHJvdGVjdGVkUm91dGVEYXRhICYgUHJvdGVjdGVkUm91dGVIYW5kbGVyc1xyXG4+IHtcclxuICAgIHB1YmxpYyByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBpc0F1dGhlbnRpY2F0ZWQsIGN1cnJlbnRQYXRoLCAuLi5vdGhlclByb3BzIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICBpZiAoIWlzQXV0aGVudGljYXRlZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gPFJlZGlyZWN0IHRvPXtgL2xvZ2luP3JlZGlyZWN0UGF0aD0ke2N1cnJlbnRQYXRofWB9IC8+O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIDxSb3V0ZSB7Li4ub3RoZXJQcm9wc30gLz47XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSBcInJlZHV4XCI7XHJcbmltcG9ydCB7IGNvbm5lY3RBZHZhbmNlZCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5cclxuaW1wb3J0IHsgUm9vdFN0YXRlIH0gZnJvbSBcInJlZHVjZXJzXCI7XHJcblxyXG5pbXBvcnQgUHJvdGVjdGVkUm91dGUgZnJvbSBcIi4vUHJvdGVjdGVkUm91dGVcIjtcclxuXHJcbi8vIFRPRE86IEFkZCBDb21wb25lbnQgdHlwZXMgaW5mZXJlbmNlXHJcbmltcG9ydCB7IFJvdXRlUHJvcHMgfSBmcm9tIFwicmVhY3Qtcm91dGVyXCI7XHJcbmltcG9ydCB7IFByb3RlY3RlZFJvdXRlRGF0YSwgUHJvdGVjdGVkUm91dGVIYW5kbGVycyB9IGZyb20gXCIuL1Byb3RlY3RlZFJvdXRlXCI7XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGU6IFJvb3RTdGF0ZSk6IFByb3RlY3RlZFJvdXRlRGF0YSA9PiB7XHJcbiAgICAvLyBUT0RPOiBBZGQgdG9rZW4gdmFsaWRhdGlvblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBpc0F1dGhlbnRpY2F0ZWQ6IEJvb2xlYW4oc3RhdGUuYXV0aC50b2tlbkluZm8pLFxyXG4gICAgICAgIGN1cnJlbnRQYXRoOiBzdGF0ZS5yb3V0ZXIubG9jYXRpb24ucGF0aG5hbWUsXHJcbiAgICB9O1xyXG59O1xyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKTogUHJvdGVjdGVkUm91dGVIYW5kbGVycyA9PiB7XHJcbiAgICBjb25zdCBhY3Rpb25DcmVhdG9ycyA9IHt9O1xyXG4gICAgcmV0dXJuIGJpbmRBY3Rpb25DcmVhdG9ycyhhY3Rpb25DcmVhdG9ycywgZGlzcGF0Y2gpO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gc2VsZWN0b3JGYWN0b3J5KGRpc3BhdGNoKSB7XHJcbiAgICBjb25zdCBhY3Rpb25zID0gbWFwRGlzcGF0Y2hUb1Byb3BzKGRpc3BhdGNoKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIG5leHRTdGF0ZTogUm9vdFN0YXRlLFxyXG4gICAgICAgIG5ld093blByb3BzOiBSb3V0ZVByb3BzLFxyXG4gICAgKTogUHJvdGVjdGVkUm91dGVEYXRhICYgUHJvdGVjdGVkUm91dGVIYW5kbGVycyA9PiAoe1xyXG4gICAgICAgIC4uLm1hcFN0YXRlVG9Qcm9wcyhuZXh0U3RhdGUpLFxyXG4gICAgICAgIC4uLmFjdGlvbnMsXHJcbiAgICAgICAgLi4ubmV3T3duUHJvcHMsXHJcbiAgICB9KTtcclxufVxyXG5cclxuY29uc3QgUHJvdGVjdGVkUm91dGVNb2R1bGUgPSBjb25uZWN0QWR2YW5jZWQoc2VsZWN0b3JGYWN0b3J5KShQcm90ZWN0ZWRSb3V0ZSk7XHJcblxyXG5leHBvcnQgeyBQcm90ZWN0ZWRSb3V0ZU1vZHVsZSBhcyBkZWZhdWx0LCBQcm90ZWN0ZWRSb3V0ZU1vZHVsZSBhcyBQcm90ZWN0ZWRSb3V0ZSB9O1xyXG4iLCJpbXBvcnQgeyBBY3Rpb24gYXMgUmVkdXhBY3Rpb24gfSBmcm9tIFwicmVkdXhcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQWN0aW9uPFQgZXh0ZW5kcyBzdHJpbmcgPSBzdHJpbmc+IGV4dGVuZHMgUmVkdXhBY3Rpb24ge1xyXG4gICAgcmVhZG9ubHkgdHlwZTogVDtcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgQWN0aW9uV2l0aFBheWxvYWQ8VCBleHRlbmRzIHN0cmluZywgUGF5bG9hZD4gPSBBY3Rpb248VD4gJiBQYXlsb2FkO1xyXG5cclxuaW50ZXJmYWNlIEFjdGlvbkNyZWF0b3I8VCBleHRlbmRzIHN0cmluZyA9IHN0cmluZz4ge1xyXG4gICAgKCk6IEFjdGlvbjxUPjtcclxuICAgIHR5cGU6IFQ7XHJcbn1cclxuXHJcbmludGVyZmFjZSBBY3Rpb25XaXRoUGF5bG9hZENyZWF0b3I8XHJcbiAgICBUIGV4dGVuZHMgc3RyaW5nID0gc3RyaW5nLFxyXG4gICAgQXJnc1R5cGUgZXh0ZW5kcyB1bmtub3duW10gPSBbXSxcclxuICAgIFBheWxvYWRUeXBlID0ge31cclxuPiB7XHJcbiAgICAoLi4uYXJnczogQXJnc1R5cGUpOiBBY3Rpb25XaXRoUGF5bG9hZDxULCBQYXlsb2FkVHlwZT47XHJcbiAgICB0eXBlOiBUO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWN0aW9uQ3JlYXRvcjxUIGV4dGVuZHMgc3RyaW5nPih0eXBlOiBUKTogQWN0aW9uQ3JlYXRvcjxUPjtcclxuZXhwb3J0IGZ1bmN0aW9uIGFjdGlvbkNyZWF0b3I8VCBleHRlbmRzIHN0cmluZywgQXJnc1R5cGUgZXh0ZW5kcyB1bmtub3duW10sIFBheWxvYWRUeXBlPihcclxuICAgIHR5cGU6IFQsXHJcbiAgICBtYXBwZXI/OiAoLi4uYXJnczogQXJnc1R5cGUpID0+IFBheWxvYWRUeXBlLFxyXG4pOiBBY3Rpb25XaXRoUGF5bG9hZENyZWF0b3I8VCwgQXJnc1R5cGUsIFBheWxvYWRUeXBlPjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhY3Rpb25DcmVhdG9yKHR5cGUsIG1hcHBlcj8pIHtcclxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICAgIGNvbnN0IGFjdGlvbkNyZWF0b3I6IGFueSA9IGZ1bmN0aW9uKC4uLmFyZ3MpIHtcclxuICAgICAgICBjb25zdCBwYXlsb2FkID0gbWFwcGVyID8gbWFwcGVyKC4uLmFyZ3MpIDogdW5kZWZpbmVkO1xyXG4gICAgICAgIHJldHVybiBjcmVhdGVBY3Rpb24odHlwZSwgcGF5bG9hZCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGFjdGlvbkNyZWF0b3IudHlwZSA9IHR5cGU7XHJcblxyXG4gICAgcmV0dXJuIGFjdGlvbkNyZWF0b3I7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVBY3Rpb248VCBleHRlbmRzIHN0cmluZywgUD4odHlwZTogVCk6IEFjdGlvbjxUPjtcclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUFjdGlvbjxUIGV4dGVuZHMgc3RyaW5nLCBQPih0eXBlOiBULCBwYXlsb2FkOiBQKTogQWN0aW9uV2l0aFBheWxvYWQ8VCwgUD47XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQWN0aW9uKHR5cGUsIHBheWxvYWQ/KSB7XHJcbiAgICByZXR1cm4gcGF5bG9hZCA9PT0gdW5kZWZpbmVkID8geyB0eXBlIH0gOiB7IHR5cGUsIC4uLnBheWxvYWQgfTtcclxufVxyXG4iLCJleHBvcnQgeyBBY3Rpb24sIEFjdGlvbldpdGhQYXlsb2FkIH0gZnJvbSBcIi4vYWN0aW9uLWhlbHBlcnNcIjtcclxuXHJcbmV4cG9ydCAqIGZyb20gXCIuL21lc3NhZ2VzXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3Byb2ZpbGVcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vc2V0dGluZ3NcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vc2lnblVwXCI7XHJcbiIsImltcG9ydCB7IGFjdGlvbkNyZWF0b3IgfSBmcm9tIFwiLi9hY3Rpb24taGVscGVyc1wiO1xyXG5cclxuaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gXCJtb2RlbC9tZXNzYWdlXCI7XHJcblxyXG5leHBvcnQgY29uc3QgbG9hZE1lc3NhZ2VzID0gYWN0aW9uQ3JlYXRvcihcIm1lc3NhZ2VzL0xPQURcIik7XHJcblxyXG5leHBvcnQgY29uc3QgbG9hZE1lc3NhZ2VzU3VjY2VzcyA9IGFjdGlvbkNyZWF0b3IoXHJcbiAgICBcIm1lc3NhZ2VzL0xPQURfU1VDQ0VTU1wiLFxyXG4gICAgKG1lc3NhZ2VzOiBNZXNzYWdlW10pID0+ICh7XHJcbiAgICAgICAgbWVzc2FnZXMsXHJcbiAgICB9KSxcclxuKTtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2FkTWVzc2FnZXNGYWlsdXJlID0gYWN0aW9uQ3JlYXRvcihcclxuICAgIFwibWVzc2FnZXMvTE9BRF9GQUlMVVJFXCIsXHJcbiAgICAoZXJvcnI6IEVycm9yLCBtZXNzYWdlOiBzdHJpbmcpID0+ICh7IGVyb3JyLCBtZXNzYWdlIH0pLFxyXG4pO1xyXG4iLCJpbXBvcnQgeyBhY3Rpb25DcmVhdG9yIH0gZnJvbSBcIi4vYWN0aW9uLWhlbHBlcnNcIjtcclxuXHJcbmltcG9ydCB7IFByb2ZpbGUgfSBmcm9tIFwibW9kZWwvcHJvZmlsZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlcXVlc3RQcm9maWxlID0gYWN0aW9uQ3JlYXRvcihcInByb2ZpbGUvUFJPRklMRV9SRVFVRVNUXCIpO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlcXVlc3RQcm9maWxlU3VjY2VzcyA9IGFjdGlvbkNyZWF0b3IoXCJwcm9maWxlL1BST0ZJTEVfU1VDQ0VTU1wiLCAocHJvZmlsZTogUHJvZmlsZSkgPT4gKHtcclxuICAgIHByb2ZpbGUsXHJcbn0pKTtcclxuXHJcbmV4cG9ydCBjb25zdCByZXF1ZXN0UHJvZmlsZUZhaWx1cmUgPSBhY3Rpb25DcmVhdG9yKFxyXG4gICAgXCJwcm9maWxlL1BST0ZJTEVfRkFJTFVSRVwiLFxyXG4gICAgKGVyb3JyOiBFcnJvciwgbWVzc2FnZTogc3RyaW5nKSA9PiAoeyBlcm9yciwgbWVzc2FnZSB9KSxcclxuKTtcclxuIiwiaW1wb3J0IHsgYWN0aW9uQ3JlYXRvciB9IGZyb20gXCIuL2FjdGlvbi1oZWxwZXJzXCI7XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0R21haWxDbGllbnRJZCA9IGFjdGlvbkNyZWF0b3IoXHJcbiAgICBcInNldHRpbmdzL1NFVF9HTUFJTF9DTElFTlRfSURcIixcclxuICAgIChjbGllbnRJZDogc3RyaW5nKSA9PiAoe1xyXG4gICAgICAgIGNsaWVudElkLFxyXG4gICAgfSksXHJcbik7XHJcbiIsImltcG9ydCB7IGFjdGlvbkNyZWF0b3IgfSBmcm9tIFwiLi9hY3Rpb24taGVscGVyc1wiO1xyXG5cclxuaW1wb3J0IHsgVG9rZW5JbmZvIH0gZnJvbSBcIm1vZGVsXCI7XHJcblxyXG5leHBvcnQgY29uc3Qgc2lnblVwID0gYWN0aW9uQ3JlYXRvcihcInNpZ25VcC9TSUdOX1VQX1JFUVVFU1RcIik7XHJcblxyXG5leHBvcnQgY29uc3Qgc2lnblVwU3VjY2VzcyA9IGFjdGlvbkNyZWF0b3IoXCJzaWduVXAvU0lHTl9VUF9TVUNDRVNTXCIsICh0b2tlbkluZm86IFRva2VuSW5mbykgPT4gKHtcclxuICAgIHRva2VuSW5mbyxcclxufSkpO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNpZ25VcEZhaWwgPSBhY3Rpb25DcmVhdG9yKFxyXG4gICAgXCJzaWduVXAvU0lHTl9VUF9GQUlMVVJFXCIsXHJcbiAgICAoZXJvcnI6IEVycm9yLCBtZXNzYWdlOiBzdHJpbmcpID0+ICh7IGVyb3JyLCBtZXNzYWdlIH0pLFxyXG4pO1xyXG4iLCJpbXBvcnQgeyBSZWR1Y2VyIH0gZnJvbSBcInJlZHV4XCI7XHJcbmltcG9ydCB7IEFjdGlvbnMgfSBmcm9tIFwicmVkdWNlcnNcIjtcclxuXHJcbmltcG9ydCB7IFRva2VuSW5mbyB9IGZyb20gXCJtb2RlbFwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTdGF0ZSB7XHJcbiAgICB0b2tlbkluZm8/OiBUb2tlbkluZm87XHJcbiAgICBlcnJvck1lc3NhZ2U/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IHJlZHVjZXI6IFJlZHVjZXI8U3RhdGU+ID0gKHN0YXRlID0ge30sIGFjdGlvbjogQWN0aW9ucykgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgXCJzaWduVXAvU0lHTl9VUF9SRVFVRVNUXCI6IHtcclxuICAgICAgICAgICAgcmV0dXJuIHt9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIFwic2lnblVwL1NJR05fVVBfU1VDQ0VTU1wiOiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgdG9rZW5JbmZvIH0gPSBhY3Rpb247XHJcbiAgICAgICAgICAgIHJldHVybiB7IHRva2VuSW5mbyB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIFwic2lnblVwL1NJR05fVVBfRkFJTFVSRVwiOiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgbWVzc2FnZSB9ID0gYWN0aW9uO1xyXG4gICAgICAgICAgICByZXR1cm4geyBlcnJvck1lc3NhZ2U6IG1lc3NhZ2UgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGVmYXVsdDoge1xyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcclxuIiwiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSBcInJlZHV4XCI7XHJcbmltcG9ydCB7IGNvbm5lY3RSb3V0ZXIgfSBmcm9tIFwiY29ubmVjdGVkLXJlYWN0LXJvdXRlclwiO1xyXG5cclxuaW1wb3J0IGF1dGggZnJvbSBcIi4vYXV0aFwiO1xyXG5pbXBvcnQgbWVzc2FnZXMgZnJvbSBcIi4vbWVzc2FnZXNcIjtcclxuaW1wb3J0IHByb2ZpbGUgZnJvbSBcIi4vcHJvZmlsZVwiO1xyXG5pbXBvcnQgc2V0dGluZ3MgZnJvbSBcIi4vc2V0dGluZ3NcIjtcclxuXHJcbmV4cG9ydCBjb25zdCByb290UmVkdWNlciA9IGhpc3RvcnkgPT5cclxuICAgIGNvbWJpbmVSZWR1Y2Vycyh7XHJcbiAgICAgICAgcm91dGVyOiBjb25uZWN0Um91dGVyKGhpc3RvcnkpLFxyXG5cclxuICAgICAgICBhdXRoLFxyXG4gICAgICAgIG1lc3NhZ2VzLFxyXG4gICAgICAgIHByb2ZpbGUsXHJcbiAgICAgICAgc2V0dGluZ3MsXHJcbiAgICB9KTtcclxuXHJcbmV4cG9ydCB7IEFjdGlvbnMgfSBmcm9tIFwiLi9hY3Rpb25UeXBlc1wiO1xyXG5leHBvcnQgdHlwZSBSb290U3RhdGUgPSBSZXR1cm5UeXBlPFJldHVyblR5cGU8dHlwZW9mIHJvb3RSZWR1Y2VyPj47XHJcblxyXG5leHBvcnQgZGVmYXVsdCByb290UmVkdWNlcjtcclxuIiwiaW1wb3J0IHsgUmVkdWNlciB9IGZyb20gXCJyZWR1eFwiO1xyXG5pbXBvcnQgeyBBY3Rpb25zIH0gZnJvbSBcInJlZHVjZXJzXCI7XHJcblxyXG5pbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSBcIm1vZGVsXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFN0YXRlIHtcclxuICAgIGlzTG9hZGluZzogYm9vbGVhbjtcclxuICAgIGl0ZW1zPzogTWVzc2FnZVtdO1xyXG4gICAgZXJyb3JNZXNzYWdlPzogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBEZWZhdWxTdGF0ZTogU3RhdGUgPSB7XHJcbiAgICBpc0xvYWRpbmc6IGZhbHNlLFxyXG59O1xyXG5cclxuY29uc3QgcmVkdWNlcjogUmVkdWNlcjxTdGF0ZT4gPSAoc3RhdGUgPSBEZWZhdWxTdGF0ZSwgYWN0aW9uOiBBY3Rpb25zKTogU3RhdGUgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgXCJtZXNzYWdlcy9MT0FEXCI6IHtcclxuICAgICAgICAgICAgcmV0dXJuIHsgaXNMb2FkaW5nOiB0cnVlIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgXCJtZXNzYWdlcy9MT0FEX1NVQ0NFU1NcIjoge1xyXG4gICAgICAgICAgICBjb25zdCB7IG1lc3NhZ2VzIH0gPSBhY3Rpb247XHJcbiAgICAgICAgICAgIHJldHVybiB7IGlzTG9hZGluZzogZmFsc2UsIGl0ZW1zOiBtZXNzYWdlcyB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIFwibWVzc2FnZXMvTE9BRF9GQUlMVVJFXCI6IHtcclxuICAgICAgICAgICAgY29uc3QgeyBtZXNzYWdlIH0gPSBhY3Rpb247XHJcbiAgICAgICAgICAgIHJldHVybiB7IGlzTG9hZGluZzogZmFsc2UsIGVycm9yTWVzc2FnZTogbWVzc2FnZSB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBkZWZhdWx0OiB7XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xyXG4iLCJpbXBvcnQgeyBSZWR1Y2VyIH0gZnJvbSBcInJlZHV4XCI7XHJcbmltcG9ydCB7IEFjdGlvbnMgfSBmcm9tIFwicmVkdWNlcnNcIjtcclxuXHJcbmltcG9ydCB7IFByb2ZpbGUgfSBmcm9tIFwibW9kZWxcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3RhdGUge1xyXG4gICAgaXRlbT86IFByb2ZpbGU7XHJcbiAgICBlcnJvck1lc3NhZ2U/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IHJlZHVjZXI6IFJlZHVjZXI8U3RhdGU+ID0gKHN0YXRlID0ge30sIGFjdGlvbjogQWN0aW9ucyk6IFN0YXRlID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIFwicHJvZmlsZS9QUk9GSUxFX1JFUVVFU1RcIjoge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBcInByb2ZpbGUvUFJPRklMRV9TVUNDRVNTXCI6IHtcclxuICAgICAgICAgICAgY29uc3QgeyBwcm9maWxlIH0gPSBhY3Rpb247XHJcbiAgICAgICAgICAgIHJldHVybiB7IGl0ZW06IHByb2ZpbGUgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBcInByb2ZpbGUvUFJPRklMRV9GQUlMVVJFXCI6IHtcclxuICAgICAgICAgICAgY29uc3QgeyBtZXNzYWdlIH0gPSBhY3Rpb247XHJcbiAgICAgICAgICAgIHJldHVybiB7IGVycm9yTWVzc2FnZTogbWVzc2FnZSB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBkZWZhdWx0OiB7XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xyXG4iLCJpbXBvcnQgeyBSZWR1Y2VyIH0gZnJvbSBcInJlZHV4XCI7XHJcbmltcG9ydCB7IEFjdGlvbnMgfSBmcm9tIFwicmVkdWNlcnNcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3RhdGUge1xyXG4gICAgY2xpZW50SWQ/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IHJlZHVjZXI6IFJlZHVjZXI8U3RhdGU+ID0gKHN0YXRlID0ge30sIGFjdGlvbjogQWN0aW9ucyk6IFN0YXRlID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIFwic2V0dGluZ3MvU0VUX0dNQUlMX0NMSUVOVF9JRFwiOiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgY2xpZW50SWQgfSA9IGFjdGlvbjtcclxuICAgICAgICAgICAgcmV0dXJuIHsgY2xpZW50SWQgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGVmYXVsdDoge1xyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcclxuIiwiZXhwb3J0IHsgbG9hZE1lc3NhZ2VzIH0gZnJvbSBcIi4vbG9hZE1lc3NhZ2VzXCI7XHJcbmV4cG9ydCB7IGxvYWRQcm9maWxlIH0gZnJvbSBcIi4vbG9hZFByb2ZpbGVcIjtcclxuIiwiaW1wb3J0IHsgY2FsbCB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcclxuXHJcbmltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tIFwibW9kZWxcIjtcclxuXHJcbmltcG9ydCAqIGFzIGdtYWlsQXBpIGZyb20gXCJhcGkvZ21haWxcIjtcclxuXHJcbmltcG9ydCB7IHNlbmRBdXRob3JpemVSZXF1ZXN0U2FnYSB9IGZyb20gXCIuL3NlbmRBdXRob3JpemVSZXF1ZXN0U2FnYVwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uKiBsb2FkTWVzc2FnZXModXNlcklkOiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IG1lc3NhZ2VMaXN0OiBnbWFpbEFwaS5NZXNzYWdlTGlzdCA9IHlpZWxkIGNhbGwoXHJcbiAgICAgICAgc2VuZEF1dGhvcml6ZVJlcXVlc3RTYWdhLFxyXG4gICAgICAgIGdtYWlsQXBpLmdldE1lc3NhZ2VMaXN0KHVzZXJJZCwgMTApLFxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCBtZXNzYWdlczogTWVzc2FnZVtdID0gW107XHJcblxyXG4gICAgZm9yIChjb25zdCBtZXNzYWdlSW5mbyBvZiBtZXNzYWdlTGlzdC5tZXNzYWdlcykge1xyXG4gICAgICAgIGNvbnN0IG1lc3NhZ2U6IGdtYWlsQXBpLk1lc3NhZ2UgPSB5aWVsZCBjYWxsKFxyXG4gICAgICAgICAgICBzZW5kQXV0aG9yaXplUmVxdWVzdFNhZ2EsXHJcbiAgICAgICAgICAgIGdtYWlsQXBpLmdldE1lc3NhZ2UodXNlcklkLCBtZXNzYWdlSW5mby5pZCksXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgbWVzc2FnZXMucHVzaChwYXJzZU1lc3NhZ2UobWVzc2FnZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBtZXNzYWdlcztcclxufVxyXG5cclxuY29uc3QgcGFyc2VNZXNzYWdlID0gKG1lc3NhZ2U6IGdtYWlsQXBpLk1lc3NhZ2UpOiBNZXNzYWdlID0+IHtcclxuICAgIGNvbnN0IGZyb20gPSBtZXNzYWdlLnBheWxvYWQuaGVhZGVycy5maW5kKHggPT4geC5uYW1lID09PSBnbWFpbEFwaS5IZWFkZXJUeXBlLkZyb20pLnZhbHVlO1xyXG4gICAgY29uc3Qgc3ViamVjdCA9IG1lc3NhZ2UucGF5bG9hZC5oZWFkZXJzLmZpbmQoeCA9PiB4Lm5hbWUgPT09IGdtYWlsQXBpLkhlYWRlclR5cGUuU3ViamVjdCkudmFsdWU7XHJcblxyXG4gICAgcmV0dXJuIHsgaWQ6IG1lc3NhZ2UuaWQsIGZyb20sIHN1YmplY3QgfTtcclxufTtcclxuIiwiaW1wb3J0IHsgY2FsbCB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcclxuXHJcbmltcG9ydCB7IFByb2ZpbGUgfSBmcm9tIFwibW9kZWwvcHJvZmlsZVwiO1xyXG5cclxuaW1wb3J0ICogYXMgZ21haWxBcGkgZnJvbSBcImFwaS9nbWFpbFwiO1xyXG5cclxuaW1wb3J0IHsgc2VuZEF1dGhvcml6ZVJlcXVlc3RTYWdhIH0gZnJvbSBcIi4vc2VuZEF1dGhvcml6ZVJlcXVlc3RTYWdhXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24qIGxvYWRQcm9maWxlKCkge1xyXG4gICAgY29uc3QgcHJvZmlsZTogZ21haWxBcGkuUHJvZmlsZSA9IHlpZWxkIGNhbGwoXHJcbiAgICAgICAgc2VuZEF1dGhvcml6ZVJlcXVlc3RTYWdhLFxyXG4gICAgICAgIGdtYWlsQXBpLmdldFByb2ZpbGUoXCJtZVwiKSxcclxuICAgICk7XHJcbiAgICByZXR1cm4gcGFyc2VQcm9maWxlKHByb2ZpbGUpO1xyXG59XHJcblxyXG5jb25zdCBwYXJzZVByb2ZpbGUgPSAocHJvZmlsZTogZ21haWxBcGkuUHJvZmlsZSk6IFByb2ZpbGUgPT4ge1xyXG4gICAgcmV0dXJuIHsgZW1haWw6IHByb2ZpbGUuZW1haWxBZGRyZXNzIH07XHJcbn07XHJcbiIsImltcG9ydCB7IGNhbGwsIHNlbGVjdCB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcclxuXHJcbmltcG9ydCB7IFJvb3RTdGF0ZSB9IGZyb20gXCJyZWR1Y2Vyc1wiO1xyXG5cclxuaW1wb3J0IHsgQXBpUmVxdWVzdCB9IGZyb20gXCJhcGkvQXBpUmVxdWVzdFwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uKiBzZW5kQXV0aG9yaXplUmVxdWVzdFNhZ2E8VD4ocmVxdWVzdDogQXBpUmVxdWVzdDxUPikge1xyXG4gICAgY29uc3QgdG9rZW4gPSB5aWVsZCBjYWxsKGdldFRva2VuKTtcclxuXHJcbiAgICByZXR1cm4geWllbGQgY2FsbChcclxuICAgICAgICByZXF1ZXN0LndpdGhIZWFkZXJzKHtcclxuICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXHJcbiAgICAgICAgfSkuZXhlY3V0ZSxcclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiogZ2V0VG9rZW4oKSB7XHJcbiAgICBjb25zdCB0b2tlbiA9IHlpZWxkIHNlbGVjdCgoc3RhdGU6IFJvb3RTdGF0ZSkgPT4gc3RhdGUuYXV0aC50b2tlbkluZm8udG9rZW4pO1xyXG4gICAgcmV0dXJuIHRva2VuO1xyXG59XHJcbiIsImltcG9ydCB7IGZvcmsgfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XHJcblxyXG5pbXBvcnQgeyBhdXRoU2FnYSB9IGZyb20gXCIuL29hdXRoU2FnYVwiO1xyXG5pbXBvcnQgeyBtZXNzYWdlc1NhZ2EgfSBmcm9tIFwiLi9tZXNzYWdlc1NhZ2FcIjtcclxuaW1wb3J0IHsgcHJvZmlsZVNhZ2EgfSBmcm9tIFwiLi9wcm9maWxlU2FnYVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHJvb3RTYWdhKCkge1xyXG4gICAgeWllbGQgZm9yayhhdXRoU2FnYSk7XHJcbiAgICB5aWVsZCBmb3JrKG1lc3NhZ2VzU2FnYSk7XHJcbiAgICB5aWVsZCBmb3JrKHByb2ZpbGVTYWdhKTtcclxufVxyXG4iLCJpbXBvcnQgeyBjYWxsLCBwdXQsIHNlbGVjdCwgdGFrZUxhdGVzdCB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcclxuXHJcbmltcG9ydCB7IFJvb3RTdGF0ZSB9IGZyb20gXCJyZWR1Y2Vyc1wiO1xyXG5pbXBvcnQgeyBsb2FkTWVzc2FnZXMsIGxvYWRNZXNzYWdlc0ZhaWx1cmUsIGxvYWRNZXNzYWdlc1N1Y2Nlc3MgfSBmcm9tIFwicmVkdWNlcnMvYWN0aW9uc1wiO1xyXG5cclxuaW1wb3J0ICogYXMgZ21haWxTZXJ2aWNlcyBmcm9tIFwic2FnYXMvZ21haWxcIjtcclxuaW1wb3J0IHsgTWVzc2FnZSwgUHJvZmlsZSB9IGZyb20gXCJtb2RlbFwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uKiBtZXNzYWdlc1NhZ2EoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KGxvYWRNZXNzYWdlcy50eXBlLCBwcm9jZXNzTG9naW4pO1xyXG59XHJcblxyXG5mdW5jdGlvbiogcHJvY2Vzc0xvZ2luKF9hY3Rpb246IFJldHVyblR5cGU8dHlwZW9mIGxvYWRNZXNzYWdlcz4pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcHJvZmlsZTogUHJvZmlsZSA9IHlpZWxkIGNhbGwoZ2V0UHJvZmlsZSk7XHJcblxyXG4gICAgICAgIGNvbnN0IG1lc3NhZ2VzOiBNZXNzYWdlW10gPSB5aWVsZCBjYWxsKGdtYWlsU2VydmljZXMubG9hZE1lc3NhZ2VzLCBwcm9maWxlLmVtYWlsKTtcclxuXHJcbiAgICAgICAgeWllbGQgcHV0KGxvYWRNZXNzYWdlc1N1Y2Nlc3MobWVzc2FnZXMpKTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIHlpZWxkIHB1dChsb2FkTWVzc2FnZXNGYWlsdXJlKGVyciwgZXJyLnRvU3RyaW5nKCkpKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIGdldFByb2ZpbGUoKSB7XHJcbiAgICBjb25zdCBwcm9maWxlOiBSb290U3RhdGVbXCJwcm9maWxlXCJdID0geWllbGQgc2VsZWN0KChzdGF0ZTogUm9vdFN0YXRlKSA9PiBzdGF0ZS5wcm9maWxlKTtcclxuXHJcbiAgICBpZiAoIXByb2ZpbGUuaXRlbSkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlVzZXIgcHJvZmlsZSBpcyBub3QgbG9hZGVkXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBwcm9maWxlLml0ZW07XHJcbn1cclxuIiwiaW1wb3J0IHsgSVByb3ZpZGVyIH0gZnJvbSBcInJlYWN0LXNpbXBsZS1hdXRoXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNlc3Npb24ge1xyXG4gICAgYWNjZXNzVG9rZW46IHN0cmluZztcclxuICAgIHRva2VuVHlwZTogc3RyaW5nO1xyXG4gICAgZXhwaXJlRHVyYXRpb25TZWNvbmRzOiBudW1iZXI7XHJcbiAgICBzdGF0ZTogc3RyaW5nO1xyXG4gICAgc2NvcGU6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGVudW0gU2NvcGVzIHtcclxuICAgIFwiZ21haWwucmVhZG9ubHlcIiA9IFwiaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vYXV0aC9nbWFpbC5yZWFkb25seVwiLFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgYnVpbGRHb29nbGVQcm92aWRlciA9IChcclxuICAgIGNsaWVudElkOiBzdHJpbmcsXHJcbiAgICBzY29wZXM6IFNjb3Blc1tdID0gW1Njb3Blc1tcImdtYWlsLnJlYWRvbmx5XCJdXSxcclxuKTogSVByb3ZpZGVyPFNlc3Npb24+ID0+ICh7XHJcbiAgICBidWlsZEF1dGhvcml6ZVVybCgpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICBcImh0dHBzOi8vYWNjb3VudHMuZ29vZ2xlLmNvbS9vL29hdXRoMi92Mi9hdXRoXCIgK1xyXG4gICAgICAgICAgICBgP3Njb3BlPSR7ZW5jb2RlU2NvcGVzKHNjb3Blcyl9YCArXHJcbiAgICAgICAgICAgIFwiJmluY2x1ZGVfZ3JhbnRlZF9zY29wZXM9dHJ1ZVwiICtcclxuICAgICAgICAgICAgXCImc3RhdGU9c3RhdGVfcGFyYW1ldGVyX3Bhc3N0aHJvdWdoX3ZhbHVlXCIgK1xyXG4gICAgICAgICAgICBgJnJlZGlyZWN0X3VyaT0ke2VuY29kZVVSSUNvbXBvbmVudChgJHt3aW5kb3cubG9jYXRpb24ub3JpZ2lufS9yZWRpcmVjdC5odG1sYCl9YCArXHJcbiAgICAgICAgICAgIFwiJnJlc3BvbnNlX3R5cGU9dG9rZW5cIiArXHJcbiAgICAgICAgICAgIGAmY2xpZW50X2lkPSR7Y2xpZW50SWR9YFxyXG4gICAgICAgICk7XHJcbiAgICB9LFxyXG5cclxuICAgIGV4dHJhY3RFcnJvcihyZWRpcmVjdFVybDogc3RyaW5nKSB7XHJcbiAgICAgICAgY29uc3QgZXJyb3JSZWFzb246IHN0cmluZyA9IGdldFBhcmFtZXRlcnMocmVkaXJlY3RVcmwsIFwiZXJyb3JcIik7XHJcblxyXG4gICAgICAgIHJldHVybiBlcnJvclJlYXNvbiA/IG5ldyBFcnJvcihlcnJvclJlYXNvbikgOiB1bmRlZmluZWQ7XHJcbiAgICB9LFxyXG5cclxuICAgIGV4dHJhY3RTZXNzaW9uKHJlZGlyZWN0VXJsOiBzdHJpbmcpOiBTZXNzaW9uIHtcclxuICAgICAgICBjb25zdCBhY2Nlc3NUb2tlbjogc3RyaW5nID0gZ2V0UGFyYW1ldGVycyhyZWRpcmVjdFVybCwgXCJhY2Nlc3NfdG9rZW5cIik7XHJcbiAgICAgICAgY29uc3QgdG9rZW5UeXBlOiBzdHJpbmcgPSBnZXRQYXJhbWV0ZXJzKHJlZGlyZWN0VXJsLCBcInRva2VuX3R5cGVcIik7XHJcbiAgICAgICAgY29uc3Qgc3RhdGU6IHN0cmluZyA9IGdldFBhcmFtZXRlcnMocmVkaXJlY3RVcmwsIFwic3RhdGVcIik7XHJcbiAgICAgICAgY29uc3Qgc2NvcGU6IHN0cmluZyA9IGdldFBhcmFtZXRlcnMocmVkaXJlY3RVcmwsIFwic2NvcGVcIik7XHJcbiAgICAgICAgY29uc3QgZXhwaXJlRHVyYXRpb25TZWNvbmRzID0gcGFyc2VJbnQoZ2V0UGFyYW1ldGVycyhyZWRpcmVjdFVybCwgXCJleHBpcmVzX2luXCIpLCAxMCk7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGFjY2Vzc1Rva2VuLFxyXG4gICAgICAgICAgICBleHBpcmVEdXJhdGlvblNlY29uZHMsXHJcbiAgICAgICAgICAgIHRva2VuVHlwZSxcclxuICAgICAgICAgICAgc3RhdGUsXHJcbiAgICAgICAgICAgIHNjb3BlLFxyXG4gICAgICAgIH07XHJcbiAgICB9LFxyXG5cclxuICAgIHZhbGlkYXRlU2Vzc2lvbihfc2Vzc2lvbjogU2Vzc2lvbik6IGJvb2xlYW4ge1xyXG4gICAgICAgIC8vIFRPRE86IEFkZCB2YWxpZGF0aW9uXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9LFxyXG5cclxuICAgIGdldEFjY2Vzc1Rva2VuKHNlc3Npb246IFNlc3Npb24sIF9yZXNvdXJjZUlkOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBzZXNzaW9uLmFjY2Vzc1Rva2VuO1xyXG4gICAgfSxcclxuXHJcbiAgICBnZXRTaWduT3V0VXJsKHRva2VuOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBgaHR0cHM6Ly9hY2NvdW50cy5nb29nbGUuY29tL28vb2F1dGgyL3Jldm9rZT90b2tlbj0ke2VuY29kZVVSSUNvbXBvbmVudCh0b2tlbil9YDtcclxuICAgIH0sXHJcbn0pO1xyXG5cclxuY29uc3QgZ2V0UGFyYW1ldGVycyA9IChyZWRpcmVjdFVybDogc3RyaW5nLCBuYW1lOiBzdHJpbmcpID0+IHtcclxuICAgIGNvbnN0IHJlZ2V4ID0gbmV3IFJlZ0V4cChgJHtuYW1lfT0oW14mXSspYCk7XHJcblxyXG4gICAgbGV0IHZhbHVlOiBzdHJpbmcgPSBudWxsO1xyXG4gICAgY29uc3QgdmFsdWVNYXRjaCA9IHJlZGlyZWN0VXJsLm1hdGNoKHJlZ2V4KTtcclxuICAgIGlmICh2YWx1ZU1hdGNoKSB7XHJcbiAgICAgICAgdmFsdWUgPSB2YWx1ZU1hdGNoWzFdO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB2YWx1ZTtcclxufTtcclxuXHJcbmNvbnN0IGVuY29kZVNjb3BlcyA9IChzY29wZXM6IFNjb3Blc1tdKSA9PiB7XHJcbiAgICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHNjb3Blcy5qb2luKFwiLFwiKSk7XHJcbn07XHJcbiIsImltcG9ydCB7IGZvcmsgfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XHJcblxyXG5pbXBvcnQgeyBzaWduVXBTYWdhIH0gZnJvbSBcIi4vc2lnblVwU2FnYVwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uKiBhdXRoU2FnYSgpIHtcclxuICAgIHlpZWxkIGZvcmsoc2lnblVwU2FnYSk7XHJcblxyXG4gICAgLy8gY29uc3QgaXNTaWduVXAgPSB5aWVsZCBjYWxsKGlzU2lnblVwU2FnYSk7XHJcbiAgICAvLyBpZiAoIWlzU2lnblVwKSB7XHJcbiAgICAvLyAgICAgeWllbGQgcHV0KHNpZ25VcCgpKTtcclxuICAgIC8vIH1cclxufVxyXG5cclxuLy8gZnVuY3Rpb24qIGlzU2lnblVwU2FnYSgpIHtcclxuLy8gICAgIGNvbnN0IHRva2VuID0geWllbGQgc2VsZWN0KChzdGF0ZTogUm9vdFN0YXRlKSA9PiBzdGF0ZS5hdXRoLnRva2VuSW5mbyk7XHJcbi8vICAgICByZXR1cm4gQm9vbGVhbih0b2tlbik7XHJcbi8vIH1cclxuIiwiaW1wb3J0IHsgY2FsbCwgcHV0LCBzZWxlY3QsIHRha2VMYXRlc3QgfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XHJcblxyXG5pbXBvcnQgUlNBIGZyb20gXCJyZWFjdC1zaW1wbGUtYXV0aFwiO1xyXG5pbXBvcnQgeyByZXF1ZXN0UHJvZmlsZSwgc2lnblVwLCBzaWduVXBGYWlsLCBzaWduVXBTdWNjZXNzIH0gZnJvbSBcInJlZHVjZXJzL2FjdGlvbnNcIjtcclxuXHJcbmltcG9ydCB7IFNlc3Npb24sIGJ1aWxkR29vZ2xlUHJvdmlkZXIgfSBmcm9tIFwiLi9nb29nbGVQcm92aWRlclwiO1xyXG5pbXBvcnQgeyBSb290U3RhdGUgfSBmcm9tIFwicmVkdWNlcnNcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiogc2lnblVwU2FnYSgpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3Qoc2lnblVwLnR5cGUsIHByb2Nlc3NTaWduVXApO1xyXG59XHJcblxyXG5mdW5jdGlvbiogcHJvY2Vzc1NpZ25VcChfYWN0aW9uOiBSZXR1cm5UeXBlPHR5cGVvZiBzaWduVXA+KSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGNsaWVudElkID0geWllbGQgY2FsbChnZXRDbGllbnRJZCk7XHJcbiAgICAgICAgY29uc3QgZ29vZ2xlUHJvdmlkZXIgPSBidWlsZEdvb2dsZVByb3ZpZGVyKGNsaWVudElkKTtcclxuXHJcbiAgICAgICAgY29uc3Qgc2Vzc2lvbjogU2Vzc2lvbiA9IHlpZWxkIGNhbGwoUlNBLmFjcXVpcmVUb2tlbkFzeW5jLCBnb29nbGVQcm92aWRlcik7XHJcblxyXG4gICAgICAgIHlpZWxkIHB1dChzaWduVXBTdWNjZXNzKHsgdG9rZW46IHNlc3Npb24uYWNjZXNzVG9rZW4gfSkpO1xyXG5cclxuICAgICAgICAvLyBUT0RPOiDQndC1INC00L7Qu9C20L3QviDRgtGD0YIg0LHRi9GC0YxcclxuICAgICAgICB5aWVsZCBwdXQocmVxdWVzdFByb2ZpbGUoKSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICB5aWVsZCBwdXQoc2lnblVwRmFpbChlcnIsIGVyci50b1N0cmluZygpKSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiogZ2V0Q2xpZW50SWQoKSB7XHJcbiAgICBjb25zdCBjbGllbnRJZCA9IHlpZWxkIHNlbGVjdCgoc3RhdGU6IFJvb3RTdGF0ZSkgPT4gc3RhdGUuc2V0dGluZ3MuY2xpZW50SWQpO1xyXG4gICAgcmV0dXJuIGNsaWVudElkO1xyXG59XHJcbiIsImltcG9ydCB7IGNhbGwsIHB1dCwgdGFrZUxhdGVzdCB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcclxuXHJcbmltcG9ydCB7XHJcbiAgICBsb2FkTWVzc2FnZXMsXHJcbiAgICByZXF1ZXN0UHJvZmlsZSxcclxuICAgIHJlcXVlc3RQcm9maWxlRmFpbHVyZSxcclxuICAgIHJlcXVlc3RQcm9maWxlU3VjY2VzcyxcclxufSBmcm9tIFwicmVkdWNlcnMvYWN0aW9uc1wiO1xyXG5cclxuaW1wb3J0IHsgbG9hZFByb2ZpbGUgfSBmcm9tIFwic2FnYXMvZ21haWwvbG9hZFByb2ZpbGVcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiogcHJvZmlsZVNhZ2EoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KHJlcXVlc3RQcm9maWxlLnR5cGUsIHByb2Nlc3NMb2dpbik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBwcm9jZXNzTG9naW4oX2FjdGlvbjogUmV0dXJuVHlwZTx0eXBlb2YgcmVxdWVzdFByb2ZpbGU+KSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHByb2ZpbGUgPSB5aWVsZCBjYWxsKGxvYWRQcm9maWxlKTtcclxuXHJcbiAgICAgICAgeWllbGQgcHV0KHJlcXVlc3RQcm9maWxlU3VjY2Vzcyhwcm9maWxlKSk7XHJcblxyXG4gICAgICAgIC8vIFRPRE86INCd0LUg0LTQvtC70LbQvdC+INGC0YPRgiDQsdGL0YLRjFxyXG4gICAgICAgIHlpZWxkIHB1dChsb2FkTWVzc2FnZXMoKSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICB5aWVsZCBwdXQocmVxdWVzdFByb2ZpbGVGYWlsdXJlKGVyciwgZXJyLnRvU3RyaW5nKCkpKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBjb21wb3NlIH0gZnJvbSBcInJlZHV4XCI7XHJcblxyXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1zdHJpbmctbGl0ZXJhbFxyXG5jb25zdCBnZXRSZWR1eERldlRvb2xzQ29tcG9zZSA9ICgpID0+XHJcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgd2luZG93W1wiX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fQ09NUE9TRV9fXCJdXHJcbiAgICAgICAgPyB3aW5kb3dbXCJfX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9DT01QT1NFX19cIl0oe1xyXG4gICAgICAgICAgICAgIG5hbWU6IFwiTXlCb2lsZXJwbGF0ZVwiLFxyXG4gICAgICAgICAgICAgIGFjdGlvbnNCbGFja2xpc3Q6IFtcIlJFRFVYX1NUT1JBR0VfU0FWRVwiXSxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgOiB1bmRlZmluZWQ7XHJcblxyXG5leHBvcnQgY29uc3QgY29tcG9zZUVuaGFuY2VycyA9IGdldFJlZHV4RGV2VG9vbHNDb21wb3NlKCkgfHwgY29tcG9zZTtcclxuIiwiaW1wb3J0IHsgYXBwbHlNaWRkbGV3YXJlLCBjcmVhdGVTdG9yZSB9IGZyb20gXCJyZWR1eFwiO1xyXG5pbXBvcnQgY3JlYXRlU2FnYU1pZGRsZXdhcmUgZnJvbSBcInJlZHV4LXNhZ2FcIjtcclxuaW1wb3J0IHsgcm91dGVyTWlkZGxld2FyZSBhcyBjcmVhdGVSb3V0ZXJNaWRkbGV3YXJlIH0gZnJvbSBcImNvbm5lY3RlZC1yZWFjdC1yb3V0ZXJcIjtcclxuXHJcbmltcG9ydCB7IHJvb3RSZWR1Y2VyIH0gZnJvbSBcInJlZHVjZXJzXCI7XHJcbmltcG9ydCByb290U2FnYSBmcm9tIFwic2FnYXNcIjtcclxuXHJcbmltcG9ydCB7IGNvbXBvc2VFbmhhbmNlcnMgfSBmcm9tIFwiLi9jb21wb3NlRW5oYW5jZXJzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb25maWd1cmVTdG9yZShpbml0aWFsU3RhdGUsIGhpc3RvcnkpIHtcclxuICAgIGNvbnN0IHJvdXRlck1pZGRsZXdhcmUgPSBjcmVhdGVSb3V0ZXJNaWRkbGV3YXJlKGhpc3RvcnkpO1xyXG4gICAgY29uc3Qgc2FnYU1pZGRsZXdhcmUgPSBjcmVhdGVTYWdhTWlkZGxld2FyZSgpO1xyXG5cclxuICAgIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUoXHJcbiAgICAgICAgcm9vdFJlZHVjZXIoaGlzdG9yeSksXHJcbiAgICAgICAgaW5pdGlhbFN0YXRlLFxyXG4gICAgICAgIGNvbXBvc2VFbmhhbmNlcnMoYXBwbHlNaWRkbGV3YXJlKHJvdXRlck1pZGRsZXdhcmUsIHNhZ2FNaWRkbGV3YXJlKSksXHJcbiAgICApO1xyXG5cclxuICAgIC8vIHJ1biBzYWdhc1xyXG4gICAgc2FnYU1pZGRsZXdhcmUucnVuKHJvb3RTYWdhKTtcclxuXHJcbiAgICAvLyBIb3QgbW9kdWxlIHJlcGxhY2VtZW50XHJcbiAgICBpZiAobW9kdWxlLmhvdCkge1xyXG4gICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi4vcmVkdWNlcnMvaW5kZXhcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBuZXdSb290UmVkdWNlciA9IHJlcXVpcmUoXCIuLi9yZWR1Y2Vycy9pbmRleFwiKS5kZWZhdWx0O1xyXG4gICAgICAgICAgICBzdG9yZS5yZXBsYWNlUmVkdWNlcihuZXdSb290UmVkdWNlcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHN0b3JlO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
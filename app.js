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
                    startAdornment: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](modules_button__WEBPACK_IMPORTED_MODULE_1__["UploadButton"], { accept: ".vtt", maxLength: 1, onUpload: this.handleSubtitlesUpload, component: _material_ui_core__WEBPACK_IMPORTED_MODULE_3__["IconButton"] }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_icons_Attachment__WEBPACK_IMPORTED_MODULE_4___default.a, null))
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
    constructor() {
        super(...arguments);
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
            // event.preventDefault();
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
    render() {
        const { className, videoFileURL, subtitlesFileURL } = this.props;
        const { seekPosition, subtitles } = this.state;
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { ref: component => {
                this.videoPlayerElement = component;
            }, className: style(_VideoPlayer_scss__WEBPACK_IMPORTED_MODULE_5___default.a["video-player"], className), onWheel: this.handleWheel }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("video", { src: videoFileURL, ref: component => {
                this.videoElement = component;
            }, className: style(_VideoPlayer_scss__WEBPACK_IMPORTED_MODULE_5___default.a["video-player__video"]), onClick: this.handlePlay, onDoubleClick: this.toogleFullScreen, onTimeUpdate: this.handleTimeUpdate }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("track", { ref: component => {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9sb2NhbGVzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL0FwcC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvcGFnZXMvbWVzc2FnZXMvTWVzc2FnZXMuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9wYWdlcy92aWRlby1yZWFjdC1leGFtcGxlL1ZpZGVvUmVhY3RFeGFtcGxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvcGFnZXMvdmlkZW8tcmVhY3QtZXhhbXBsZS92aWRlby1wbGF5ZXIvVmlkZW9QbGF5ZXIuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpL2FwaVJlcXVlc3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaS9nbWFpbC9nZXRNZXNzYWdlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcGkvZ21haWwvZ2V0TWVzc2FnZUxpc3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaS9nbWFpbC9nZXRQcm9maWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcGkvZ21haWwvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2kxOG4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9BcHAuY3NzP2I2ZTkiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvQXBwLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9idXR0b24vVXBsb2FkQnV0dG9uLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9saW5rL0xpbmsudHN4Iiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2xpbmsvVGFiTGluay50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvbGluay9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9sb2NhbGl6ZS9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvbmF2aWdhdGlvbi9OYXZpZ2F0aW9uLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9uYXZpZ2F0aW9uL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL3BhZ2VzL2hvbWUvSG9tZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvcGFnZXMvaG9tZS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9wYWdlcy9sb2dpbi9Mb2dpbi50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvcGFnZXMvbG9naW4vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvcGFnZXMvbWVzc2FnZXMvTWVzc2FnZXMuc2Nzcz83ZTZkIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL3BhZ2VzL21lc3NhZ2VzL01lc3NhZ2VzLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9wYWdlcy9tZXNzYWdlcy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9wYWdlcy9zZXR0aW5ncy9TZXR0aW5ncy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvcGFnZXMvc2V0dGluZ3MvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvcGFnZXMvdmlkZW8tcmVhY3QtZXhhbXBsZS9WaWRlb1JlYWN0RXhhbXBsZS5zY3NzP2M4N2YiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvcGFnZXMvdmlkZW8tcmVhY3QtZXhhbXBsZS9WaWRlb1JlYWN0RXhhbXBsZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvcGFnZXMvdmlkZW8tcmVhY3QtZXhhbXBsZS92aWRlby1wbGF5ZXIvVmlkZW9QbGF5ZXIuc2Nzcz81ZDU1Iiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL3BhZ2VzL3ZpZGVvLXJlYWN0LWV4YW1wbGUvdmlkZW8tcGxheWVyL1ZpZGVvUGxheWVyLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9yb3V0ZXMvcHJvdGVjdGVkLXJvdXRlL1Byb3RlY3RlZFJvdXRlLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9yb3V0ZXMvcHJvdGVjdGVkLXJvdXRlL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9yZWR1Y2Vycy9hY3Rpb25zL2FjdGlvbi1oZWxwZXJzLnRzIiwid2VicGFjazovLy8uL3NyYy9yZWR1Y2Vycy9hY3Rpb25zL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9yZWR1Y2Vycy9hY3Rpb25zL21lc3NhZ2VzLnRzIiwid2VicGFjazovLy8uL3NyYy9yZWR1Y2Vycy9hY3Rpb25zL3Byb2ZpbGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHVjZXJzL2FjdGlvbnMvc2V0dGluZ3MudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHVjZXJzL2FjdGlvbnMvc2lnblVwLnRzIiwid2VicGFjazovLy8uL3NyYy9yZWR1Y2Vycy9hdXRoLnRzIiwid2VicGFjazovLy8uL3NyYy9yZWR1Y2Vycy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdWNlcnMvbWVzc2FnZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHVjZXJzL3Byb2ZpbGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHVjZXJzL3NldHRpbmdzLnRzIiwid2VicGFjazovLy8uL3NyYy9zYWdhcy9nbWFpbC9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2FnYXMvZ21haWwvbG9hZE1lc3NhZ2VzLnRzIiwid2VicGFjazovLy8uL3NyYy9zYWdhcy9nbWFpbC9sb2FkUHJvZmlsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2FnYXMvZ21haWwvc2VuZEF1dGhvcml6ZVJlcXVlc3RTYWdhLnRzIiwid2VicGFjazovLy8uL3NyYy9zYWdhcy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2FnYXMvbWVzc2FnZXNTYWdhLnRzIiwid2VicGFjazovLy8uL3NyYy9zYWdhcy9vYXV0aFNhZ2EvZ29vZ2xlUHJvdmlkZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NhZ2FzL29hdXRoU2FnYS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2FnYXMvb2F1dGhTYWdhL3NpZ25VcFNhZ2EudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NhZ2FzL3Byb2ZpbGVTYWdhLnRzIiwid2VicGFjazovLy8uL3NyYy9zdG9yZS9jb21wb3NlRW5oYW5jZXJzLnRzIiwid2VicGFjazovLy8uL3NyYy9zdG9yZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxrQkFBa0IsTUFBTSxVQUFVLGtCQUFrQixTQUFTLCtCQUErQixVQUFVLGlDQUFpQyxhQUFhLGtDQUFrQyxlQUFlLDBEQUEwRCxhQUFhLGtDQUFrQyxPQUFPLFVBQVUsaUJBQWlCLFNBQVMsbUNBQW1DLFVBQVUsNENBQTRDLGFBQWEsMkNBQTJDLGVBQWUsNkVBQTZFLGFBQWEsbUNBQW1DLGdCQUFnQix3Qzs7Ozs7Ozs7Ozs7QUNBdG9CO0FBQ0E7OztBQUdBO0FBQ0EsNkNBQThDLG1CQUFtQixHQUFHLGlCQUFpQixtQkFBbUIsa0JBQWtCLHNCQUFzQiw2QkFBNkIsR0FBRyx5QkFBeUIsY0FBYyxHQUFHLHVCQUF1QixjQUFjLHFCQUFxQixHQUFHOztBQUV2UjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7Ozs7O0FDZEE7QUFDQTs7O0FBR0E7QUFDQSwyQ0FBNEMsb0JBQW9CLEVBQUU7O0FBRWxFO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7Ozs7O0FDVkE7QUFDQTs7O0FBR0E7QUFDQSxnQ0FBaUMsMEJBQTBCLEVBQUUsMEJBQTBCLGdCQUFnQixpQkFBaUIsa0JBQWtCLDJCQUEyQixFQUFFLGtDQUFrQyxxQkFBcUIsRUFBRSx5Q0FBeUMsb0JBQW9CLG9CQUFvQixvQ0FBb0MsRUFBRSx3Q0FBd0MsaUJBQWlCLEVBQUU7O0FBRWxaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7Ozs7O0FDYkE7QUFDQTs7O0FBR0E7QUFDQSxnQ0FBaUMs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QUFNQTtBQUNBLG1CQUFlLEdBQWYsQ0FBbUIsNkNBQW5CO0FBRUE7QUFDQSxRQUFJLElBQUosRUFBZ0I7QUFDWixlQUFPLEdBQVAsQ0FBVyxNQUFYLENBQWtCLGtEQUFsQixFQUF1QztBQUFBLE9BQUs7QUFDeEMsa0JBQU0saUJBQWlCLG9CQUFRLGtEQUFSLEVBQTZCLE9BQXBEO0FBQ0Esa0JBQU0sY0FBTixDQUFxQixjQUFyQjtBQUNILFNBSEQ7QUFJSDtBQUVELFdBQU8sS0FBUDtBQUNIOzs7Ozs7Ozs7Ozs7NEJBdEJ1QixjIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0ge1wiZW5cIjp7XCJjb21tb25cIjp7XCJzaWduVXBcIjpcInNpZ25VcFwifSxcImhvbWVcIjp7XCJ2aWV3TWVzc2FnZXNcIjpcIlZpZXcgbWVzc2FnZXNcIn0sXCJsb2dpblwiOntcIm5lZWRBdXRob3JpemVcIjpcIk5lZWQgYXV0aG9yaXplXCJ9LFwibWVzc2FnZXNcIjp7XCJmcm9tXCI6XCJmcm9tXCIsXCJzdWJqZWN0XCI6XCJzdWJqZWN0XCJ9LFwibmF2aWdhdGlvblwiOntcImhvbWVcIjpcIkhvbWVcIixcIm1lc3NhZ2VzXCI6XCJNZXNzYWdlc1wiLFwic2V0dGluZ3NcIjpcIlNldHRpbmdzXCJ9LFwic2V0dGluZ3NcIjp7XCJlbnRlckNpZW50SWRcIjpcIkVudGVyIENMSUVOVF9JRFwifX0sXCJydVwiOntcImNvbW1vblwiOntcInNpZ25VcFwiOlwi0JLQvtC50YLQuFwifSxcImhvbWVcIjp7XCJ2aWV3TWVzc2FnZXNcIjpcItCe0YLQutGA0YvRgtGMINGB0L7QvtCx0YnQtdC90LjRj1wifSxcImxvZ2luXCI6e1wibmVlZEF1dGhvcml6ZVwiOlwi0J3QtdC+0LHRhdC+0LTQuNC80L4g0LDQstGC0L7RgNC40LfQvtCy0LDRgtGM0YHRj1wifSxcIm1lc3NhZ2VzXCI6e1wiZnJvbVwiOlwi0L7RgtC/0YDQsNCy0LjRgtC10LvRjFwiLFwic3ViamVjdFwiOlwi0LfQsNCz0L7Qu9C+0LLQvtC6XCJ9LFwibmF2aWdhdGlvblwiOntcImhvbWVcIjpcItCU0L7QvNC+0LlcIixcIm1lc3NhZ2VzXCI6XCLQodC+0L7QsdGJ0LXQvdC40Y9cIixcInNldHRpbmdzXCI6XCLQndCw0YHRgtGA0L7QudC60LhcIixcInZpZGVvXCI6XCLQktC40LTQtdC+XCJ9LFwic2V0dGluZ3NcIjp7XCJlbnRlckNpZW50SWRcIjpcItCS0LLQtdC00LjRgtC1IENMSUVOVF9JRFwifSxcInZpZGVvUGxheWVyXCI6e1widmlkZW9cIjpcItCS0LjQtNC10L5cIixcInN1YnRpdGxlXCI6XCLQodGD0LHRgtC40YLRgNGLXCJ9fX0iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImh0bWwsXFxuYm9keSxcXG4jYXBwIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uYXBwX18yTm5GVyB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5hcHBfX2hlYWRlcl9fMWJlS1Ige1xcbiAgICBmbGV4OiAwO1xcbn1cXG5cXG4uYXBwX19wYWdlX18zTlJBMyB7XFxuICAgIGZsZXg6IDE7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJhcHBcIjogXCJhcHBfXzJObkZXXCIsXG5cdFwiYXBwX19oZWFkZXJcIjogXCJhcHBfX2hlYWRlcl9fMWJlS1JcIixcblx0XCJhcHBIZWFkZXJcIjogXCJhcHBfX2hlYWRlcl9fMWJlS1JcIixcblx0XCJhcHBfX3BhZ2VcIjogXCJhcHBfX3BhZ2VfXzNOUkEzXCIsXG5cdFwiYXBwUGFnZVwiOiBcImFwcF9fcGFnZV9fM05SQTNcIlxufTsiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5tZXNzYWdlc19fMTd5Q2wge1xcbiAgY3Vyc29yOiBkZWZhdWx0OyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwibWVzc2FnZXNcIjogXCJtZXNzYWdlc19fMTd5Q2xcIlxufTsiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIC0tYmFjay1jb2xvcjogIzI2MzIzODsgfVxcblxcbi52aWRlby1wbGF5ZXJfXzItN0lSIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cXG4gIC52aWRlby1wbGF5ZXJfX3BsYXllcl9fMlluM0Qge1xcbiAgICBmbGV4OiAxIDEgYXV0bzsgfVxcbiAgLnZpZGVvLXBsYXllcl9fY29udHJvbC1wYW5lbF9fMjVHcjEge1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDsgfVxcbiAgLnZpZGVvLXBsYXllcl9fY29udHJvbC1pdGVtX18xblRzMiB7XFxuICAgIHdpZHRoOiAzMCU7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJ2aWRlby1wbGF5ZXJcIjogXCJ2aWRlby1wbGF5ZXJfXzItN0lSXCIsXG5cdFwidmlkZW8tcGxheWVyX19wbGF5ZXJcIjogXCJ2aWRlby1wbGF5ZXJfX3BsYXllcl9fMlluM0RcIixcblx0XCJ2aWRlby1wbGF5ZXJfX2NvbnRyb2wtcGFuZWxcIjogXCJ2aWRlby1wbGF5ZXJfX2NvbnRyb2wtcGFuZWxfXzI1R3IxXCIsXG5cdFwidmlkZW8tcGxheWVyX19jb250cm9sLWl0ZW1cIjogXCJ2aWRlby1wbGF5ZXJfX2NvbnRyb2wtaXRlbV9fMW5UczJcIlxufTsiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIC0tYmFjay1jb2xvcjogIzI2MzIzODsgfVxcblxcbi52aWRlby1wbGF5ZXJfXzE0TVE3IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2stY29sb3IpOyB9XFxuICAudmlkZW8tcGxheWVyX192aWRlb19fMzZ0STYge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7IH1cXG4gIC52aWRlby1wbGF5ZXJfX3N1YnRpdGxlX18xc3dMMCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvdHRvbTogMTAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAzMnB4O1xcbiAgICBjb2xvcjogd2hlYXQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTsgfVxcbiAgLnZpZGVvLXBsYXllcl9fY29udHJvbHNfX1Ixd1hqIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGRpc3BsYXk6IGZsZXg7IH1cXG4gIC52aWRlby1wbGF5ZXJfX3NsaWRlcl9fSnVadUMge1xcbiAgICBmbGV4LWdyb3c6IDE7XFxuICAgIHBhZGRpbmc6IDIycHggMHB4OyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwidmlkZW8tcGxheWVyXCI6IFwidmlkZW8tcGxheWVyX18xNE1RN1wiLFxuXHRcInZpZGVvLXBsYXllcl9fdmlkZW9cIjogXCJ2aWRlby1wbGF5ZXJfX3ZpZGVvX18zNnRJNlwiLFxuXHRcInZpZGVvLXBsYXllcl9fc3VidGl0bGVcIjogXCJ2aWRlby1wbGF5ZXJfX3N1YnRpdGxlX18xc3dMMFwiLFxuXHRcInZpZGVvLXBsYXllcl9fY29udHJvbHNcIjogXCJ2aWRlby1wbGF5ZXJfX2NvbnRyb2xzX19SMXdYalwiLFxuXHRcInZpZGVvLXBsYXllcl9fc2xpZGVyXCI6IFwidmlkZW8tcGxheWVyX19zbGlkZXJfX0p1WnVDXCJcbn07IiwiZXhwb3J0IHR5cGUgSGFuZGxlcjxULCBQPiA9IChyZXN1bHQ6IFQpID0+IFAgfCBQcm9taXNlPFA+O1xyXG5cclxuZXhwb3J0IGNvbnN0IEhlYWRlcnMgPSB7XHJcbiAgICBBY2NlcHRKc29uOiB7IEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcclxuICAgIEF1dGhvcml6YXRpb246ICh0b2tlbjogc3RyaW5nKSA9PiAoeyBBdXRob3JpemF0aW9uOiB0b2tlbiB9KSxcclxuICAgIEpzb25Db250ZW50OiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QganNvbkhhbmRsZXIgPSA8VD4ocmVzcG9uc2U6IFJlc3BvbnNlKTogUHJvbWlzZTxUPiA9PlxyXG4gICAgcmVzcG9uc2UuanNvbigpLmNhdGNoKCgpID0+IG5ldyBFcnJvcigpKTtcclxuXHJcbmV4cG9ydCBjbGFzcyBBcGlSZXF1ZXN0PFQgPSBSZXNwb25zZT4ge1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXQodXJpOiBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gbmV3IEFwaVJlcXVlc3QodXJpLCB7IG1ldGhvZDogXCJHRVRcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHBvc3QodXJpOiBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gbmV3IEFwaVJlcXVlc3QodXJpLCB7IG1ldGhvZDogXCJQT1NUXCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZXF1ZXN0OiBSZXF1ZXN0O1xyXG4gICAgcHJpdmF0ZSBoYW5kbGVyczogSGFuZGxlcjx1bmtub3duLCB1bmtub3duPltdO1xyXG5cclxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoXHJcbiAgICAgICAgaW5wdXQ6IFJlcXVlc3RJbmZvLFxyXG4gICAgICAgIGluaXQ6IFJlcXVlc3RJbml0ID0ge30sXHJcbiAgICAgICAgaGFuZGxlcnM6IEhhbmRsZXI8dW5rbm93biwgdW5rbm93bj5bXSA9IFtdLFxyXG4gICAgKSB7XHJcbiAgICAgICAgdGhpcy5yZXF1ZXN0ID0gbmV3IFJlcXVlc3QoaW5wdXQsIGluaXQpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlcnMgPSBoYW5kbGVycztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgd2l0aEhlYWRlcnMoLi4uZXh0cmFIZWFkZXJzOiBIZWFkZXJzSW5pdFtdKSB7XHJcbiAgICAgICAgY29uc3QgaGVhZGVyczogSGVhZGVyc0luaXQgPSBleHRyYUhlYWRlcnMucmVkdWNlKFxyXG4gICAgICAgICAgICAoaGVhZGVycywgZXh0cmEpID0+IE9iamVjdC5hc3NpZ24oaGVhZGVycywgZXh0cmEpLFxyXG4gICAgICAgICAgICB7IC4uLih0aGlzLnJlcXVlc3QuaGVhZGVycyB8fCB7fSkgfSxcclxuICAgICAgICApO1xyXG4gICAgICAgIHJldHVybiBuZXcgQXBpUmVxdWVzdCh0aGlzLnJlcXVlc3QsIHsgaGVhZGVycyB9LCB0aGlzLmhhbmRsZXJzKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaGFuZGxlciA9IDxQPihoYW5kbGVyOiAocmVzdWx0OiBUKSA9PiBQIHwgUHJvbWlzZTxQPik6IEFwaVJlcXVlc3Q8UD4gPT4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgQXBpUmVxdWVzdCh0aGlzLnJlcXVlc3QsIHt9LCBbLi4udGhpcy5oYW5kbGVycywgaGFuZGxlcl0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBwdWJsaWMgZXhlY3V0ZSA9ICgpOiBQcm9taXNlPFQ+ID0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVycy5yZWR1Y2UoXHJcbiAgICAgICAgICAgIChwcm9taXNlOiBQcm9taXNlPHVua25vd24+LCBoYW5kbGVyKSA9PiBwcm9taXNlLnRoZW4oaGFuZGxlciksXHJcbiAgICAgICAgICAgIGZldGNoKHRoaXMucmVxdWVzdCksXHJcbiAgICAgICAgKSBhcyBQcm9taXNlPFQ+O1xyXG4gICAgfTtcclxufVxyXG4iLCJpbXBvcnQgeyBBcGlSZXF1ZXN0LCBqc29uSGFuZGxlciB9IGZyb20gXCJhcGkvYXBpUmVxdWVzdFwiO1xyXG5cclxuY29uc3QgYmFzZVVyaSA9IFwiaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vZ21haWwvdjFcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTWVzc2FnZSB7XHJcbiAgICBpZDogc3RyaW5nO1xyXG4gICAgdGhyZWFkSWQ6IHN0cmluZztcclxuICAgIHBheWxvYWQ6IE1lc3NhZ2VQYXlsb2FkO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE1lc3NhZ2VQYXlsb2FkIHtcclxuICAgIG1pbWVUeXBlOiBzdHJpbmc7XHJcbiAgICBoZWFkZXJzOiBNZXNzYWdlSGVhZGVyW107XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTWVzc2FnZUhlYWRlciB7XHJcbiAgICBuYW1lOiBIZWFkZXJUeXBlO1xyXG4gICAgdmFsdWU6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGVudW0gSGVhZGVyVHlwZSB7XHJcbiAgICBGcm9tID0gXCJGcm9tXCIsXHJcbiAgICBTdWJqZWN0ID0gXCJTdWJqZWN0XCIsXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRNZXNzYWdlID0gKHVzZXJJZDogc3RyaW5nLCBtZXNzYWdlSWQ6IHN0cmluZykgPT4ge1xyXG4gICAgcmV0dXJuIEFwaVJlcXVlc3QuZ2V0KFxyXG4gICAgICAgIGAke2Jhc2VVcml9L3VzZXJzLyR7dXNlcklkfS9tZXNzYWdlcy8ke21lc3NhZ2VJZH0/Zm9ybWF0PW1ldGFkYXRhYCxcclxuICAgICkuaGFuZGxlcjxNZXNzYWdlPihqc29uSGFuZGxlcik7XHJcbn07XHJcbiIsImltcG9ydCB7IEFwaVJlcXVlc3QsIGpzb25IYW5kbGVyIH0gZnJvbSBcImFwaS9hcGlSZXF1ZXN0XCI7XHJcblxyXG5jb25zdCBiYXNlVXJpID0gXCJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9nbWFpbC92MVwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNZXNzYWdlTGlzdCB7XHJcbiAgICBtZXNzYWdlczogTWVzc2FnZUluZm9bXTtcclxuICAgIG5leHRQYWdlVG9rZW46IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNZXNzYWdlSW5mbyB7XHJcbiAgICBpZDogc3RyaW5nO1xyXG4gICAgdGhyZWFkSWQ6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldE1lc3NhZ2VMaXN0ID0gKHVzZXJJZDogc3RyaW5nLCBtYXhSZXN1bHQ6IG51bWJlciA9IDIwKSA9PiB7XHJcbiAgICByZXR1cm4gQXBpUmVxdWVzdC5nZXQoYCR7YmFzZVVyaX0vdXNlcnMvJHt1c2VySWR9L21lc3NhZ2VzP21heFJlc3VsdHM9JHttYXhSZXN1bHR9YCkuaGFuZGxlcjxcclxuICAgICAgICBNZXNzYWdlTGlzdFxyXG4gICAgPihqc29uSGFuZGxlcik7XHJcbn07XHJcbiIsImltcG9ydCB7IEFwaVJlcXVlc3QsIGpzb25IYW5kbGVyIH0gZnJvbSBcImFwaS9hcGlSZXF1ZXN0XCI7XHJcblxyXG5jb25zdCBiYXNlVXJpID0gXCJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9nbWFpbC92MVwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQcm9maWxlIHtcclxuICAgIGVtYWlsQWRkcmVzczogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0UHJvZmlsZSA9ICh1c2VySWQ6IHN0cmluZykgPT4ge1xyXG4gICAgcmV0dXJuIEFwaVJlcXVlc3QuZ2V0KGAke2Jhc2VVcml9L3VzZXJzLyR7dXNlcklkfS9wcm9maWxlYCkuaGFuZGxlcjxQcm9maWxlPihqc29uSGFuZGxlcik7XHJcbn07XHJcbiIsImV4cG9ydCAqIGZyb20gXCIuL2dldE1lc3NhZ2VcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vZ2V0TWVzc2FnZUxpc3RcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vZ2V0UHJvZmlsZVwiO1xyXG4iLCJpbXBvcnQgaTE4biBmcm9tIFwiaTE4bmV4dFwiO1xyXG5pbXBvcnQgeyByZWFjdEkxOG5leHRNb2R1bGUgfSBmcm9tIFwicmVhY3QtaTE4bmV4dFwiO1xyXG5cclxuaW1wb3J0IHJlc291cmNlcyBmcm9tIFwiLi4vbG9jYWxlcy9pbmRleC5qc1wiO1xyXG5cclxuaTE4bi51c2UocmVhY3RJMThuZXh0TW9kdWxlKSAvLyBwYXNzZXMgaTE4biBkb3duIHRvIHJlYWN0LWkxOG5leHRcclxuICAgIC5pbml0KHtcclxuICAgICAgICByZXNvdXJjZXMsXHJcbiAgICAgICAgbG5nOiBwcm9jZXNzLmVudi5MQU5HVUFHRSxcclxuXHJcbiAgICAgICAgZGVmYXVsdE5TOiBcImNvbW1vblwiLCAvLyBkZWZhdWx0IG5hbWVzcGFjZVxyXG5cclxuICAgICAgICBrZXlTZXBhcmF0b3I6IGZhbHNlLCAvLyB3ZSBkbyBub3QgdXNlIGtleXMgaW4gZm9ybSBtZXNzYWdlcy53ZWxjb21lXHJcblxyXG4gICAgICAgIGludGVycG9sYXRpb246IHtcclxuICAgICAgICAgICAgZXNjYXBlVmFsdWU6IGZhbHNlLCAvLyByZWFjdCBhbHJlYWR5IHNhZmVzIGZyb20geHNzXHJcbiAgICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaTE4bjtcclxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCAqIGFzIFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcclxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgQ29ubmVjdGVkUm91dGVyIH0gZnJvbSBcImNvbm5lY3RlZC1yZWFjdC1yb3V0ZXJcIjtcclxuXHJcbmltcG9ydCBcImkxOG5cIjtcclxuXHJcbmltcG9ydCB7IGNyZWF0ZUJyb3dzZXJIaXN0b3J5IH0gZnJvbSBcImhpc3RvcnlcIjtcclxuXHJcbmltcG9ydCBjb25maWd1cmVTdG9yZSBmcm9tIFwic3RvcmVcIjtcclxuXHJcbmltcG9ydCBBcHBsaWNhdGlvbiBmcm9tIFwibW9kdWxlcy9BcHBcIjtcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHt9O1xyXG5jb25zdCBoaXN0b3J5ID0gY3JlYXRlQnJvd3Nlckhpc3RvcnkoeyBiYXNlbmFtZTogcHJvY2Vzcy5lbnYuUFVCTElDX1VSTCB9KTtcclxuXHJcbmNvbnN0IHN0b3JlID0gY29uZmlndXJlU3RvcmUoaW5pdGlhbFN0YXRlLCBoaXN0b3J5KTtcclxuXHJcblJlYWN0RE9NLnJlbmRlcihcclxuICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxyXG4gICAgICAgIDxDb25uZWN0ZWRSb3V0ZXIgaGlzdG9yeT17aGlzdG9yeX0+XHJcbiAgICAgICAgICAgIDxBcHBsaWNhdGlvbiAvPlxyXG4gICAgICAgIDwvQ29ubmVjdGVkUm91dGVyPlxyXG4gICAgPC9Qcm92aWRlcj4sXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKSxcclxuKTtcclxuIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy90eXBpbmdzLWZvci1jc3MtbW9kdWxlcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTctMSEuL0FwcC5jc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIFByZXBhcmUgY3NzVHJhbnNmb3JtYXRpb25cbnZhciB0cmFuc2Zvcm07XG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy90eXBpbmdzLWZvci1jc3MtbW9kdWxlcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTctMSEuL0FwcC5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy90eXBpbmdzLWZvci1jc3MtbW9kdWxlcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTctMSEuL0FwcC5jc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgaG90IH0gZnJvbSBcInJlYWN0LWhvdC1sb2FkZXJcIjtcblxuaW1wb3J0IHsgUm91dGUsIFN3aXRjaCB9IGZyb20gXCJyZWFjdC1yb3V0ZXJcIjtcblxuaW1wb3J0IHsgQXBwQmFyLCBDc3NCYXNlbGluZSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xuXG5pbXBvcnQgeyBOYXZpZ2F0aW9uIH0gZnJvbSBcIm1vZHVsZXMvbmF2aWdhdGlvblwiO1xuaW1wb3J0IHsgUHJvdGVjdGVkUm91dGUgfSBmcm9tIFwibW9kdWxlcy9yb3V0ZXMvcHJvdGVjdGVkLXJvdXRlXCI7XG5cbmltcG9ydCB7IEhvbWUgfSBmcm9tIFwibW9kdWxlcy9wYWdlcy9ob21lXCI7XG5pbXBvcnQgeyBMb2dpbiB9IGZyb20gXCJtb2R1bGVzL3BhZ2VzL2xvZ2luXCI7XG5pbXBvcnQgeyBNZXNzYWdlcyB9IGZyb20gXCJtb2R1bGVzL3BhZ2VzL21lc3NhZ2VzXCI7XG5pbXBvcnQgeyBTZXR0aW5ncyB9IGZyb20gXCJtb2R1bGVzL3BhZ2VzL3NldHRpbmdzXCI7XG5pbXBvcnQgeyBWaWRlb1JlYWN0RXhhbXBsZSB9IGZyb20gXCJtb2R1bGVzL3BhZ2VzL3ZpZGVvLXJlYWN0LWV4YW1wbGVcIjtcblxuaW1wb3J0ICogYXMgc3R5bGVzIGZyb20gXCIuL0FwcC5jc3NcIjtcblxuY29uc3QgQXBwID0gKCkgPT4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXBwfT5cbiAgICAgICAgPENzc0Jhc2VsaW5lIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJhcHBfX2hlYWRlclwiXX0+XG4gICAgICAgICAgICA8QXBwQmFyIHBvc2l0aW9uPVwic3RhdGljXCI+XG4gICAgICAgICAgICAgICAgPE5hdmlnYXRpb24gLz5cbiAgICAgICAgICAgIDwvQXBwQmFyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcImFwcF9fcGFnZVwiXX0+XG4gICAgICAgICAgICA8U3dpdGNoPlxuICAgICAgICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPVwiL1wiIGNvbXBvbmVudD17SG9tZX0gLz5cbiAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9sb2dpblwiIGNvbXBvbmVudD17TG9naW59IC8+XG4gICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvdmlkZW8tcmVhY3RcIiBjb21wb25lbnQ9e1ZpZGVvUmVhY3RFeGFtcGxlfSAvPlxuICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL3NldHRpbmdzXCIgY29tcG9uZW50PXtTZXR0aW5nc30gLz5cbiAgICAgICAgICAgICAgICA8UHJvdGVjdGVkUm91dGUgcGF0aD1cIi9tZXNzYWdlc1wiIGNvbXBvbmVudD17TWVzc2FnZXN9IC8+XG4gICAgICAgICAgICA8L1N3aXRjaD5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBob3QobW9kdWxlKShBcHApO1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7IEJ1dHRvbkJhc2VQcm9wcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25CYXNlXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIjtcblxuZXhwb3J0IGludGVyZmFjZSBVcGxvYWRCdXR0b25Qcm9wcyBleHRlbmRzIEJ1dHRvbkJhc2VQcm9wcyB7XG4gICAgY29tcG9uZW50PzogUmVhY3QuUmVhY3RUeXBlPEJ1dHRvbkJhc2VQcm9wcz47XG5cbiAgICBhY2NlcHQ/OiBzdHJpbmc7XG4gICAgbWF4TGVuZ3RoPzogbnVtYmVyO1xuXG4gICAgb25VcGxvYWQ6IChldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBjbGFzcyBVcGxvYWRCdXR0b24gZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PFVwbG9hZEJ1dHRvblByb3BzPiB7XG4gICAgcHVibGljIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgYWNjZXB0LFxuICAgICAgICAgICAgbWF4TGVuZ3RoLFxuICAgICAgICAgICAgY2hpbGRyZW4sXG4gICAgICAgICAgICBjb21wb25lbnQgPSBCdXR0b24sXG4gICAgICAgICAgICBvblVwbG9hZCxcbiAgICAgICAgICAgIC4uLmJ1dHRvblByb3BzXG4gICAgICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIGNvbnN0IFdyYXBwZXIgPSBjb21wb25lbnQ7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxXcmFwcGVyIHsuLi5idXR0b25Qcm9wc30gY29tcG9uZW50PVwibGFiZWxcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcIm5vbmVcIiB9fVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25VcGxvYWR9XG4gICAgICAgICAgICAgICAgICAgIHsuLi57IGFjY2VwdCwgbWF4TGVuZ3RoIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICA8L1dyYXBwZXI+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG4vLyA8bGFiZWw+XG4vLyAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgc3R5bGU9e3sgZGlzcGxheTogXCJub25lXCIgfX0gb25DaGFuZ2U9e29uVXBsb2FkfSAvPlxuLy8gICAgIDxXcmFwcGVyIHsuLi5idXR0b25Qcm9wc30gY29tcG9uZW50PVwic3BhblwiPlxuLy8gICAgICAgICB7Y2hpbGRyZW59XG4vLyAgICAgPC9XcmFwcGVyPlxuLy8gPC9sYWJlbD5cbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IHsgTmF2TGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIExpbmtEYXRhIHtcclxuICAgIHRvOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTGlua0hhbmRsZXJzIHt9XHJcblxyXG5jbGFzcyBMaW5rIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxMaW5rRGF0YSAmIExpbmtIYW5kbGVycz4ge1xyXG4gICAgcHVibGljIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IGNoaWxkcmVuLCB0byB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8TmF2TGluayB0bz17dG99IHN0eWxlPXt7IHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIiwgY29sb3I6IFwiaW5oZXJpdFwiIH19PlxyXG4gICAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHsgTGluaywgTGluayBhcyBkZWZhdWx0IH07XHJcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IFRhYiwgeyBUYWJQcm9wcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJcIjtcclxuXHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBUYWJMaW5rUHJvcHMgZXh0ZW5kcyBUYWJQcm9wcyB7XHJcbiAgICB0bzogc3RyaW5nO1xyXG59XHJcblxyXG4vLyBIYWNrOiBodHRwczovL2dpdGh1Yi5jb20vbXVpLW9yZy9tYXRlcmlhbC11aS9pc3N1ZXMvOTEwNlxyXG5cclxuZXhwb3J0IGNsYXNzIFRhYkxpbmsgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PFRhYkxpbmtQcm9wcz4ge1xyXG4gICAgcHVibGljIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IHRvLCAuLi50YWJQcm9wcyB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgICAgICAgcmV0dXJuIDxUYWIgey4uLnRhYlByb3BzfSB7Li4ueyBjb21wb25lbnQ6IExpbmssIHRvIH0gYXMgYW55fSAvPjtcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgKiBmcm9tIFwiLi9MaW5rXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL1RhYkxpbmtcIjtcclxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IE5hbWVzcGFjZXNDb25zdW1lciB9IGZyb20gXCJyZWFjdC1pMThuZXh0XCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIExvY2FsaXplRGF0YSB7XHJcbiAgICBpZDogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIExvY2FsaXplSGFuZGxlcnMge1xyXG59XHJcblxyXG5jbGFzcyBMb2NhbGl6ZSBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8TG9jYWxpemVEYXRhICYgTG9jYWxpemVIYW5kbGVycz4ge1xyXG4gICAgcHVibGljIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IGlkIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxOYW1lc3BhY2VzQ29uc3VtZXI+XHJcbiAgICAgICAgICAgICAgICB7dCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHQoaWQpO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPC9OYW1lc3BhY2VzQ29uc3VtZXI+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHsgTG9jYWxpemUsIExvY2FsaXplIGFzIGRlZmF1bHQgfTtcclxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgVGFicyBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFic1wiO1xyXG5cclxuaW1wb3J0IHsgVGFiTGluayB9IGZyb20gXCJtb2R1bGVzL2xpbmtcIjtcclxuaW1wb3J0IHsgTG9jYWxpemUgfSBmcm9tIFwibW9kdWxlcy9sb2NhbGl6ZVwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBOYXZpZ2F0aW9uRGF0YSB7XHJcbiAgICBwYXRoOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTmF2aWdhdGlvbkhhbmRsZXJzIHt9XHJcblxyXG5jb25zdCBQYXRoTmFtZU1hcCA9IHtcclxuICAgIFwiL1wiOiBcIm5hdmlnYXRpb246aG9tZVwiLFxyXG4gICAgXCIvc2V0dGluZ3NcIjogXCJuYXZpZ2F0aW9uOnNldHRpbmdzXCIsXHJcbiAgICBcIi9tZXNzYWdlc1wiOiBcIm5hdmlnYXRpb246bWVzc2FnZXNcIixcclxuICAgIFwiL3ZpZGVvLXJlYWN0XCI6IFwibmF2aWdhdGlvbjp2aWRlb1wiLFxyXG59O1xyXG5cclxuZXhwb3J0IGNsYXNzIE5hdmlnYXRpb24gZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PE5hdmlnYXRpb25EYXRhICYgTmF2aWdhdGlvbkhhbmRsZXJzPiB7XHJcbiAgICBwdWJsaWMgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgcGF0aCB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgY29uc3QgaXNWYWxpZFBhdGggPSBCb29sZWFuKFBhdGhOYW1lTWFwW3BhdGhdKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPFRhYnMgdmFsdWU9e2lzVmFsaWRQYXRoID8gcGF0aCA6IGZhbHNlfT5cclxuICAgICAgICAgICAgICAgIHtPYmplY3Qua2V5cyhQYXRoTmFtZU1hcCkubWFwKHBhdGggPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxUYWJMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17cGF0aH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3BhdGh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvPXtwYXRofVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17PExvY2FsaXplIGlkPXtQYXRoTmFtZU1hcFtwYXRoXX0gLz59XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L1RhYnM+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2aWdhdGlvbjtcclxuIiwiaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5cclxuaW1wb3J0IHsgUm9vdFN0YXRlIH0gZnJvbSBcInJlZHVjZXJzXCI7XHJcblxyXG5pbXBvcnQgTmF2aWdhdGlvbiwgeyBOYXZpZ2F0aW9uRGF0YSwgTmF2aWdhdGlvbkhhbmRsZXJzIH0gZnJvbSBcIi4vTmF2aWdhdGlvblwiO1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlOiBSb290U3RhdGUpOiBOYXZpZ2F0aW9uRGF0YSA9PiB7XHJcbiAgICBjb25zdCBwYXRoID0gc3RhdGUucm91dGVyLmxvY2F0aW9uLnBhdGhuYW1lO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcGF0aCxcclxuICAgIH07XHJcbn07XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHM6IE5hdmlnYXRpb25IYW5kbGVycyA9IHt9O1xyXG5cclxuY29uc3QgTmF2aWdhdGlvbk1vZHVsZSA9IGNvbm5lY3QoXHJcbiAgICBtYXBTdGF0ZVRvUHJvcHMsXHJcbiAgICBtYXBEaXNwYXRjaFRvUHJvcHMsXHJcbikoTmF2aWdhdGlvbik7XHJcblxyXG5leHBvcnQgeyBOYXZpZ2F0aW9uTW9kdWxlIGFzIGRlZmF1bHQsIE5hdmlnYXRpb25Nb2R1bGUgYXMgTmF2aWdhdGlvbiB9O1xyXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiO1xyXG5pbXBvcnQgR3JpZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZFwiO1xyXG5cclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJtb2R1bGVzL2xpbmtcIjtcclxuaW1wb3J0IHsgTG9jYWxpemUgfSBmcm9tIFwibW9kdWxlcy9sb2NhbGl6ZVwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBIb21lRGF0YSB7fVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBIb21lSGFuZGxlcnMge31cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWUgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PEhvbWVEYXRhICYgSG9tZUhhbmRsZXJzPiB7XHJcbiAgICBwdWJsaWMgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBqdXN0aWZ5PVwiY2VudGVyXCIgYWxpZ25JdGVtcz1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgdG89XCIvbWVzc2FnZXNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBjb2xvcj1cInByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExvY2FsaXplIGlkPVwiaG9tZTp2aWV3TWVzc2FnZXNcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcblxyXG5pbXBvcnQgeyBSb290U3RhdGUgfSBmcm9tIFwicmVkdWNlcnNcIjtcclxuXHJcbmltcG9ydCBIb21lLCB7IEhvbWVEYXRhLCBIb21lSGFuZGxlcnMgfSBmcm9tIFwiLi9Ib21lXCI7XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoX3N0YXRlOiBSb290U3RhdGUpOiBIb21lRGF0YSA9PiB7XHJcbiAgICByZXR1cm4ge307XHJcbn07XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHM6IEhvbWVIYW5kbGVycyA9IHt9O1xyXG5cclxuY29uc3QgSG9tZU1vZHVsZSA9IGNvbm5lY3QoXHJcbiAgICBtYXBTdGF0ZVRvUHJvcHMsXHJcbiAgICBtYXBEaXNwYXRjaFRvUHJvcHMsXHJcbikoSG9tZSk7XHJcblxyXG5leHBvcnQgeyBIb21lTW9kdWxlIGFzIGRlZmF1bHQsIEhvbWVNb2R1bGUgYXMgSG9tZSB9O1xyXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCB7IFJlZGlyZWN0IH0gZnJvbSBcInJlYWN0LXJvdXRlclwiO1xyXG5cclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCI7XHJcbmltcG9ydCBHcmlkIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCI7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCI7XHJcblxyXG5pbXBvcnQgeyBMb2NhbGl6ZSB9IGZyb20gXCJtb2R1bGVzL2xvY2FsaXplXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIExvZ2luRGF0YSB7XHJcbiAgICBpc0F1dGhlbnRpY2F0ZWQ6IGJvb2xlYW47XHJcbiAgICByZWRpcmVjdFBhdGg/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTG9naW5IYW5kbGVycyB7XHJcbiAgICBzaWduVXA6ICgpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmNsYXNzIExvZ2luIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxMb2dpbkRhdGEgJiBMb2dpbkhhbmRsZXJzPiB7XHJcbiAgICBwdWJsaWMgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgaXNBdXRoZW50aWNhdGVkLCByZWRpcmVjdFBhdGggfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIGlmIChpc0F1dGhlbnRpY2F0ZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDxSZWRpcmVjdCB0bz17cmVkaXJlY3RQYXRofSAvPjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBqdXN0aWZ5PVwiY2VudGVyXCIgYWxpZ25JdGVtcz1cImNlbnRlclwiIGRpcmVjdGlvbj1cImNvbHVtblwiPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBjb2xvcj1cImluaGVyaXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExvY2FsaXplIGlkPVwibG9naW46bmVlZEF1dGhvcml6ZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBjb2xvcj1cInByaW1hcnlcIiBvbkNsaWNrPXt0aGlzLnByb3BzLnNpZ25VcH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMb2NhbGl6ZSBpZD1cImxvZ2luOnNpZ25VcFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpbjtcclxuIiwiaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5cclxuaW1wb3J0IHsgUm9vdFN0YXRlIH0gZnJvbSBcInJlZHVjZXJzXCI7XHJcbmltcG9ydCB7IHNpZ25VcCB9IGZyb20gXCJyZWR1Y2Vycy9hY3Rpb25zXCI7XHJcblxyXG5pbXBvcnQgTG9naW4sIHsgTG9naW5EYXRhLCBMb2dpbkhhbmRsZXJzIH0gZnJvbSBcIi4vTG9naW5cIjtcclxuXHJcbmNvbnN0IGdldFJlZGlyZWN0UGF0aCA9IChwYXRoOiBzdHJpbmcpID0+IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IC8uKnJlZGlyZWN0UGF0aD0oPzxwYXRoPi4qKS4qLy5leGVjKHBhdGgpO1xyXG4gICAgcmV0dXJuIChyZXN1bHQgJiYgcmVzdWx0WzFdKSB8fCBcIi9cIjtcclxufTtcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZTogUm9vdFN0YXRlKTogTG9naW5EYXRhID0+IHtcclxuICAgIGNvbnN0IHJlZGlyZWN0UGF0aCA9IGdldFJlZGlyZWN0UGF0aChzdGF0ZS5yb3V0ZXIubG9jYXRpb24uc2VhcmNoKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGlzQXV0aGVudGljYXRlZDogQm9vbGVhbihzdGF0ZS5hdXRoLnRva2VuSW5mbyksXHJcbiAgICAgICAgcmVkaXJlY3RQYXRoLFxyXG4gICAgfTtcclxufTtcclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wczogTG9naW5IYW5kbGVycyA9IHtcclxuICAgIHNpZ25VcCxcclxufTtcclxuXHJcbmNvbnN0IExvZ2luTW9kdWxlID0gY29ubmVjdChcclxuICAgIG1hcFN0YXRlVG9Qcm9wcyxcclxuICAgIG1hcERpc3BhdGNoVG9Qcm9wcyxcclxuKShMb2dpbik7XHJcblxyXG5leHBvcnQgeyBMb2dpbk1vZHVsZSBhcyBkZWZhdWx0LCBMb2dpbk1vZHVsZSBhcyBMb2dpbiB9O1xyXG4iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3R5cGluZ3MtZm9yLWNzcy1tb2R1bGVzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tOC0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vTWVzc2FnZXMuc2Nzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gUHJlcGFyZSBjc3NUcmFuc2Zvcm1hdGlvblxudmFyIHRyYW5zZm9ybTtcblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3R5cGluZ3MtZm9yLWNzcy1tb2R1bGVzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tOC0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vTWVzc2FnZXMuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3R5cGluZ3MtZm9yLWNzcy1tb2R1bGVzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tOC0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vTWVzc2FnZXMuc2Nzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBjbGFzc05hbWVzID0gcmVxdWlyZShcImNsYXNzbmFtZXMvYmluZFwiKTtcclxuXHJcbmltcG9ydCBDaXJjdWxhclByb2dyZXNzIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9DaXJjdWxhclByb2dyZXNzXCI7XHJcbmltcG9ydCBHcmlkIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCI7XHJcbmltcG9ydCBQYXBlciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXJcIjtcclxuaW1wb3J0IFRhYmxlIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZVwiO1xyXG5pbXBvcnQgVGFibGVCb2R5IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUJvZHlcIjtcclxuaW1wb3J0IFRhYmxlQ2VsbCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVDZWxsXCI7XHJcbmltcG9ydCBUYWJsZUhlYWQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlSGVhZFwiO1xyXG5pbXBvcnQgVGFibGVSb3cgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlUm93XCI7XHJcblxyXG5pbXBvcnQgTG9jYWxpemUgZnJvbSBcIm1vZHVsZXMvbG9jYWxpemVcIjtcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vTWVzc2FnZXMuc2Nzc1wiO1xyXG5jb25zdCBzdHlsZSA9IGNsYXNzTmFtZXMuYmluZChzdHlsZXMpO1xyXG5cclxuaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gXCIuL3R5cGVzXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE1lc3NhZ2VzRGF0YSB7XHJcbiAgICBpc0xvYWRpbmc6IGJvb2xlYW47XHJcbiAgICBtZXNzYWdlcz86IE1lc3NhZ2VbXTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNZXNzYWdlc0hhbmRsZXJzIHt9XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZXNzYWdlcyBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8TWVzc2FnZXNEYXRhICYgTWVzc2FnZXNIYW5kbGVycz4ge1xyXG4gICAgcHVibGljIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IGlzTG9hZGluZyB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIGp1c3RpZnk9XCJjZW50ZXJcIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgY2xhc3NOYW1lPXtzdHlsZShzdHlsZXMubWVzc2FnZXMpfT5cclxuICAgICAgICAgICAgICAgIHtpc0xvYWRpbmcgPyB0aGlzLnJlbmRlclByZWxvYWRlcigpIDogdGhpcy5yZW5kZXJDb250ZW50KCl9XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVuZGVyUHJlbG9hZGVyID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiA8Q2lyY3VsYXJQcm9ncmVzcyAvPjtcclxuICAgIH07XHJcblxyXG4gICAgcHJpdmF0ZSByZW5kZXJDb250ZW50ID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgbWVzc2FnZXMgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIGlmICghbWVzc2FnZXMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8UGFwZXI+XHJcbiAgICAgICAgICAgICAgICA8VGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRhYmxlSGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TG9jYWxpemUgaWQ9XCJtZXNzYWdlczpmcm9tXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TG9jYWxpemUgaWQ9XCJtZXNzYWdlczpzdWJqZWN0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVGFibGVIZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUYWJsZUJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHttZXNzYWdlcy5tYXAocm93ID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZVJvdyBrZXk9e3Jvdy5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD57cm93LmZyb219PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD57cm93LnN1YmplY3R9PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQm9keT5cclxuICAgICAgICAgICAgICAgIDwvVGFibGU+XHJcbiAgICAgICAgICAgIDwvUGFwZXI+XHJcbiAgICAgICAgKTtcclxuICAgIH07XHJcbn1cclxuIiwiaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5cclxuaW1wb3J0IHsgUm9vdFN0YXRlIH0gZnJvbSBcInJlZHVjZXJzXCI7XHJcblxyXG5pbXBvcnQgTWVzc2FnZXMsIHsgTWVzc2FnZXNEYXRhLCBNZXNzYWdlc0hhbmRsZXJzIH0gZnJvbSBcIi4vTWVzc2FnZXNcIjtcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZTogUm9vdFN0YXRlKTogTWVzc2FnZXNEYXRhID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbWVzc2FnZXM6IHN0YXRlLm1lc3NhZ2VzLml0ZW1zLFxyXG4gICAgICAgIGlzTG9hZGluZzogc3RhdGUubWVzc2FnZXMuaXNMb2FkaW5nLFxyXG4gICAgfTtcclxufTtcclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wczogTWVzc2FnZXNIYW5kbGVycyA9IHt9O1xyXG5cclxuY29uc3QgTWVzc2FnZXNNb2R1bGUgPSBjb25uZWN0KFxyXG4gICAgbWFwU3RhdGVUb1Byb3BzLFxyXG4gICAgbWFwRGlzcGF0Y2hUb1Byb3BzLFxyXG4pKE1lc3NhZ2VzKTtcclxuXHJcbmV4cG9ydCB7IE1lc3NhZ2VzTW9kdWxlIGFzIGRlZmF1bHQsIE1lc3NhZ2VzTW9kdWxlIGFzIE1lc3NhZ2VzIH07XHJcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IEdyaWQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRcIjtcclxuXHJcbmltcG9ydCB7IExvY2FsaXplIH0gZnJvbSBcIm1vZHVsZXMvbG9jYWxpemVcIjtcclxuaW1wb3J0IFRleHRGaWVsZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkXCI7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNldHRpbmdzRGF0YSB7XHJcbiAgICBjbGllbnRJZDogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNldHRpbmdzSGFuZGxlcnMge1xyXG4gICAgb25DaGFuZ2VDbGllbnRJZDogKGNsaWVudElkOiBzdHJpbmcpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNldHRpbmdzIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxTZXR0aW5nc0RhdGEgJiBTZXR0aW5nc0hhbmRsZXJzPiB7XHJcbiAgICBwdWJsaWMgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgY2xpZW50SWQgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIGp1c3RpZnk9XCJjZW50ZXJcIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgZGlyZWN0aW9uPVwiY29sdW1uXCI+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGNvbG9yPVwiaW5oZXJpdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TG9jYWxpemUgaWQ9XCJzZXR0aW5nczplbnRlckNpZW50SWRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cIm91dGxpbmVkLW5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17PExvY2FsaXplIGlkPVwic2V0dGluZ3M6Y2xpZW50SWRcIiAvPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2NsaWVudElkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XHJcbiAgICAgICAgY29uc3QgY2xpZW50SWQgPSBldmVudC5jdXJyZW50VGFyZ2V0LnZhbHVlO1xyXG5cclxuICAgICAgICBjb25zdCB7IG9uQ2hhbmdlQ2xpZW50SWQgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgb25DaGFuZ2VDbGllbnRJZChjbGllbnRJZCk7XHJcbiAgICB9O1xyXG59XHJcbiIsImltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuXHJcbmltcG9ydCB7IFJvb3RTdGF0ZSB9IGZyb20gXCJyZWR1Y2Vyc1wiO1xyXG5cclxuaW1wb3J0IFNldHRpbmdzLCB7IFNldHRpbmdzRGF0YSwgU2V0dGluZ3NIYW5kbGVycyB9IGZyb20gXCIuL1NldHRpbmdzXCI7XHJcbmltcG9ydCB7IHNldEdtYWlsQ2xpZW50SWQgfSBmcm9tIFwicmVkdWNlcnMvYWN0aW9uc1wiO1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlOiBSb290U3RhdGUpOiBTZXR0aW5nc0RhdGEgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBjbGllbnRJZDogc3RhdGUuc2V0dGluZ3MuY2xpZW50SWQgfHwgXCJcIixcclxuICAgIH07XHJcbn07XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHM6IFNldHRpbmdzSGFuZGxlcnMgPSB7XHJcbiAgICBvbkNoYW5nZUNsaWVudElkOiBzZXRHbWFpbENsaWVudElkLFxyXG59O1xyXG5cclxuY29uc3QgU2V0dGluZ3NNb2R1bGUgPSBjb25uZWN0KFxyXG4gICAgbWFwU3RhdGVUb1Byb3BzLFxyXG4gICAgbWFwRGlzcGF0Y2hUb1Byb3BzLFxyXG4pKFNldHRpbmdzKTtcclxuXHJcbmV4cG9ydCB7IFNldHRpbmdzTW9kdWxlIGFzIGRlZmF1bHQsIFNldHRpbmdzTW9kdWxlIGFzIFNldHRpbmdzIH07XHJcbiIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdHlwaW5ncy1mb3ItY3NzLW1vZHVsZXMtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS04LTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9WaWRlb1JlYWN0RXhhbXBsZS5zY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBQcmVwYXJlIGNzc1RyYW5zZm9ybWF0aW9uXG52YXIgdHJhbnNmb3JtO1xuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdHlwaW5ncy1mb3ItY3NzLW1vZHVsZXMtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS04LTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9WaWRlb1JlYWN0RXhhbXBsZS5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdHlwaW5ncy1mb3ItY3NzLW1vZHVsZXMtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS04LTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9WaWRlb1JlYWN0RXhhbXBsZS5zY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHsgVXBsb2FkQnV0dG9uIH0gZnJvbSBcIm1vZHVsZXMvYnV0dG9uXCI7XG5pbXBvcnQgeyBWaWRlb1BsYXllciB9IGZyb20gXCIuL3ZpZGVvLXBsYXllclwiO1xuaW1wb3J0IHsgSWNvbkJ1dHRvbiwgVGV4dEZpZWxkIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XG5cbmltcG9ydCBBdHRhY2htZW50SWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0F0dGFjaG1lbnRcIjtcbmltcG9ydCB7IExvY2FsaXplIH0gZnJvbSBcIm1vZHVsZXMvbG9jYWxpemVcIjtcblxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9WaWRlb1JlYWN0RXhhbXBsZS5zY3NzXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVmlkZW9SZWFjdEV4YW1wbGVEYXRhIHt9XG5cbmV4cG9ydCBpbnRlcmZhY2UgVmlkZW9SZWFjdEV4YW1wbGVIYW5kbGVycyB7fVxuXG5pbnRlcmZhY2UgRmlsZUluZm8ge1xuICAgIG5hbWU6IHN0cmluZztcbiAgICB1cmw6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBWaWRlb1JlYWN0RXhhbXBsZVN0YXRlIHtcbiAgICB2aWRlb0ZpbGU/OiBGaWxlSW5mbztcbiAgICBzdWJ0aXRsZXNGaWxlPzogRmlsZUluZm87XG59XG5cbmV4cG9ydCBjbGFzcyBWaWRlb1JlYWN0RXhhbXBsZSBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8XG4gICAgVmlkZW9SZWFjdEV4YW1wbGVEYXRhICYgVmlkZW9SZWFjdEV4YW1wbGVIYW5kbGVycyxcbiAgICBWaWRlb1JlYWN0RXhhbXBsZVN0YXRlXG4+IHtcbiAgICBwdWJsaWMgc3RhdGU6IFZpZGVvUmVhY3RFeGFtcGxlU3RhdGUgPSB7fTtcblxuICAgIHB1YmxpYyByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgdmlkZW9GaWxlLCBzdWJ0aXRsZXNGaWxlIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1widmlkZW8tcGxheWVyXCJdfT5cbiAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJDb250cm9sUGFuZWwoKX1cbiAgICAgICAgICAgICAgICA8VmlkZW9QbGF5ZXJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXNbXCJ2aWRlby1wbGF5ZXJfX3BsYXllclwiXX1cbiAgICAgICAgICAgICAgICAgICAgdmlkZW9GaWxlVVJMPXt2aWRlb0ZpbGUgJiYgdmlkZW9GaWxlLnVybH1cbiAgICAgICAgICAgICAgICAgICAgc3VidGl0bGVzRmlsZVVSTD17c3VidGl0bGVzRmlsZSAmJiBzdWJ0aXRsZXNGaWxlLnVybH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZW5kZXJDb250cm9sUGFuZWwgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgc3VidGl0bGVzRmlsZSwgdmlkZW9GaWxlIH0gPSB0aGlzLnN0YXRlO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcInZpZGVvLXBsYXllcl9fY29udHJvbC1wYW5lbFwiXX0+XG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlc1tcInZpZGVvLXBsYXllcl9fY29udHJvbC1pdGVtXCJdfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmlkZW9GaWxlID8gdmlkZW9GaWxlLm5hbWUgOiBcIlwifVxuICAgICAgICAgICAgICAgICAgICBoZWxwZXJUZXh0PXs8TG9jYWxpemUgaWQ9XCJ2aWRlb1BsYXllcjp2aWRlb1wiIC8+fVxuICAgICAgICAgICAgICAgICAgICBJbnB1dFByb3BzPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydEFkb3JubWVudDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxVcGxvYWRCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjZXB0PVwiLm1wNFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heExlbmd0aD17MX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25VcGxvYWQ9e3RoaXMuaGFuZGxlVmlkZW9VcGxvYWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17SWNvbkJ1dHRvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBdHRhY2htZW50SWNvbiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVXBsb2FkQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXNbXCJ2aWRlby1wbGF5ZXJfX2NvbnRyb2wtaXRlbVwiXX1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3N1YnRpdGxlc0ZpbGUgPyBzdWJ0aXRsZXNGaWxlLm5hbWUgOiBcIlwifVxuICAgICAgICAgICAgICAgICAgICBoZWxwZXJUZXh0PXs8TG9jYWxpemUgaWQ9XCJ2aWRlb1BsYXllcjpzdWJ0aXRsZVwiIC8+fVxuICAgICAgICAgICAgICAgICAgICBJbnB1dFByb3BzPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydEFkb3JubWVudDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxVcGxvYWRCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjZXB0PVwiLnZ0dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heExlbmd0aD17MX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25VcGxvYWQ9e3RoaXMuaGFuZGxlU3VidGl0bGVzVXBsb2FkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e0ljb25CdXR0b259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXR0YWNobWVudEljb24gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1VwbG9hZEJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH07XG5cbiAgICBwcml2YXRlIGhhbmRsZVZpZGVvVXBsb2FkID0gKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgICAgICBjb25zdCB0YXJnZXRFdmVudCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XG5cbiAgICAgICAgY29uc3QgZmlsZXMgPSB0YXJnZXRFdmVudC5maWxlcztcblxuICAgICAgICBpZiAoZmlsZXMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICBjb25zdCBmaWxlID0gZmlsZXNbMF07XG5cbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIHZpZGVvRmlsZToge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBmaWxlLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgIHVybDogVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlKSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcHJpdmF0ZSBoYW5kbGVTdWJ0aXRsZXNVcGxvYWQgPSAoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgICAgIGNvbnN0IHRhcmdldEV2ZW50ID0gZXZlbnQuY3VycmVudFRhcmdldDtcblxuICAgICAgICBjb25zdCBmaWxlcyA9IHRhcmdldEV2ZW50LmZpbGVzO1xuXG4gICAgICAgIGlmIChmaWxlcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIGNvbnN0IGZpbGUgPSBmaWxlc1swXTtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIHN1YnRpdGxlc0ZpbGU6IHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogZmlsZS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICB1cmw6IFVSTC5jcmVhdGVPYmplY3RVUkwoZmlsZSksXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbn1cbiIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdHlwaW5ncy1mb3ItY3NzLW1vZHVsZXMtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS04LTEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9WaWRlb1BsYXllci5zY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBQcmVwYXJlIGNzc1RyYW5zZm9ybWF0aW9uXG52YXIgdHJhbnNmb3JtO1xuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdHlwaW5ncy1mb3ItY3NzLW1vZHVsZXMtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS04LTEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9WaWRlb1BsYXllci5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdHlwaW5ncy1mb3ItY3NzLW1vZHVsZXMtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS04LTEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9WaWRlb1BsYXllci5zY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgY2xhc3NOYW1lcyA9IHJlcXVpcmUoXCJjbGFzc25hbWVzL2JpbmRcIik7XG5cbmltcG9ydCBGYWIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiO1xuXG5pbXBvcnQgQWNjZXNzQWxhcm1JY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvUGxheUNpcmNsZU91dGxpbmVcIjtcbmltcG9ydCBGdWxsc2NyZWVuSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0Z1bGxzY3JlZW5cIjtcblxuaW1wb3J0IFNsaWRlciBmcm9tIFwiQG1hdGVyaWFsLXVpL2xhYi9TbGlkZXJcIjtcblxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9WaWRlb1BsYXllci5zY3NzXCI7XG5jb25zdCBzdHlsZSA9IGNsYXNzTmFtZXMuYmluZChzdHlsZXMpO1xuXG5leHBvcnQgaW50ZXJmYWNlIFZpZGVvUGxheWVyRGF0YSB7XG4gICAgY2xhc3NOYW1lPzogc3RyaW5nO1xuICAgIHZpZGVvRmlsZVVSTD86IHN0cmluZztcbiAgICBzdWJ0aXRsZXNGaWxlVVJMPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFZpZGVvUGxheWVySGFuZGxlcnMge31cblxuZXhwb3J0IGludGVyZmFjZSBWaWRlb1BsYXllclN0YXRlIHtcbiAgICBpc0Z1bGxzY3JlZW46IGJvb2xlYW47XG4gICAgaXNQYXVzZWQ6IGJvb2xlYW47XG4gICAgc2Vla1Bvc2l0aW9uOiBudW1iZXI7XG5cbiAgICBzdWJ0aXRsZXM6IHN0cmluZ1tdO1xufVxuXG5leHBvcnQgY2xhc3MgVmlkZW9QbGF5ZXIgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PFZpZGVvUGxheWVyRGF0YSAmIFZpZGVvUGxheWVySGFuZGxlcnM+IHtcbiAgICBwdWJsaWMgc3RhdGU6IFZpZGVvUGxheWVyU3RhdGUgPSB7XG4gICAgICAgIGlzRnVsbHNjcmVlbjogZmFsc2UsXG4gICAgICAgIGlzUGF1c2VkOiB0cnVlLFxuICAgICAgICBzZWVrUG9zaXRpb246IDAsXG4gICAgICAgIHN1YnRpdGxlczogW10sXG4gICAgfTtcblxuICAgIHByaXZhdGUgdmlkZW9QbGF5ZXJFbGVtZW50OiBIVE1MRGl2RWxlbWVudDtcbiAgICBwcml2YXRlIHZpZGVvRWxlbWVudDogSFRNTFZpZGVvRWxlbWVudDtcbiAgICBwcml2YXRlIHRyYWNrRWxlbWVudDogSFRNTFRyYWNrRWxlbWVudDtcblxuICAgIHB1YmxpYyBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5zdWJzY3JpYmUoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IGNsYXNzTmFtZSwgdmlkZW9GaWxlVVJMLCBzdWJ0aXRsZXNGaWxlVVJMIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCB7IHNlZWtQb3NpdGlvbiwgc3VidGl0bGVzIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgcmVmPXtjb21wb25lbnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnZpZGVvUGxheWVyRWxlbWVudCA9IGNvbXBvbmVudDtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGUoc3R5bGVzW1widmlkZW8tcGxheWVyXCJdLCBjbGFzc05hbWUpfVxuICAgICAgICAgICAgICAgIG9uV2hlZWw9e3RoaXMuaGFuZGxlV2hlZWx9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHZpZGVvXG4gICAgICAgICAgICAgICAgICAgIHNyYz17dmlkZW9GaWxlVVJMfVxuICAgICAgICAgICAgICAgICAgICByZWY9e2NvbXBvbmVudCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnZpZGVvRWxlbWVudCA9IGNvbXBvbmVudDtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZShzdHlsZXNbXCJ2aWRlby1wbGF5ZXJfX3ZpZGVvXCJdKX1cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVQbGF5fVxuICAgICAgICAgICAgICAgICAgICBvbkRvdWJsZUNsaWNrPXt0aGlzLnRvb2dsZUZ1bGxTY3JlZW59XG4gICAgICAgICAgICAgICAgICAgIG9uVGltZVVwZGF0ZT17dGhpcy5oYW5kbGVUaW1lVXBkYXRlfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHRyYWNrXG4gICAgICAgICAgICAgICAgICAgICAgICByZWY9e2NvbXBvbmVudCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50cmFja0VsZW1lbnQgPSBjb21wb25lbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJub25lXCIgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGtpbmQ9XCJzdWJ0aXRsZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtzdWJ0aXRsZXNGaWxlVVJMfVxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvdmlkZW8+XG4gICAgICAgICAgICAgICAge3N1YnRpdGxlcy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlKFwidmlkZW8tcGxheWVyX19zdWJ0aXRsZVwiKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7c3VidGl0bGVzLm1hcCgoc3VidGl0bGUsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fT57c3VidGl0bGV9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUoc3R5bGVzW1widmlkZW8tcGxheWVyX19jb250cm9sc1wiXSl9PlxuICAgICAgICAgICAgICAgICAgICA8RmFiIGNvbG9yPVwicHJpbWFyeVwiIGFyaWEtbGFiZWw9XCJQbGF5XCIgb25DbGljaz17dGhpcy5oYW5kbGVQbGF5fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxBY2Nlc3NBbGFybUljb24gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9GYWI+XG4gICAgICAgICAgICAgICAgICAgIDxTbGlkZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGUoc3R5bGVzW1widmlkZW8tcGxheWVyX19zbGlkZXJcIl0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlZWtQb3NpdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZVNlZWtQb3NpdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPEZhYiBjb2xvcj1cInByaW1hcnlcIiBhcmlhLWxhYmVsPVwiRnVsbHNjcmVlblwiIG9uQ2xpY2s9e3RoaXMudG9vZ2xlRnVsbFNjcmVlbn0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RnVsbHNjcmVlbkljb24gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9GYWI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHN1YnNjcmliZSA9ICgpID0+IHtcbiAgICAgICAgLy8gVE9ETzog0J/QvtC00L/QuNGB0LrQuCDQvdGD0LbQvdC+INC00LXQu9Cw0YLRjCDQu9C40YjRjCDRgNCw0LdcbiAgICAgICAgaWYgKHRoaXMudHJhY2tFbGVtZW50KSB7XG4gICAgICAgICAgICBjb25zdCB0ZXh0VHJhY2sgPSB0aGlzLnRyYWNrRWxlbWVudC50cmFjaztcblxuICAgICAgICAgICAgdGV4dFRyYWNrLm1vZGUgPSBcImhpZGRlblwiO1xuICAgICAgICAgICAgdGV4dFRyYWNrLm9uY3VlY2hhbmdlID0gdGhpcy5oYW5kbGVDdWVDaGFuZ2U7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcHJpdmF0ZSBoYW5kbGVDaGFuZ2VTZWVrUG9zaXRpb24gPSAoX2V2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDx7fT4sIHZhbHVlOiBudW1iZXIpID0+IHtcbiAgICAgICAgaWYgKHRoaXMudmlkZW9FbGVtZW50KSB7XG4gICAgICAgICAgICBjb25zdCBkdXJhdGlvbiA9IHRoaXMudmlkZW9FbGVtZW50LmR1cmF0aW9uO1xuICAgICAgICAgICAgY29uc3QgY3VycmVudFRpbWUgPSBkdXJhdGlvbiAqICh2YWx1ZSAvIDEwMCk7XG5cbiAgICAgICAgICAgIHRoaXMudmlkZW9FbGVtZW50LmN1cnJlbnRUaW1lID0gY3VycmVudFRpbWU7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcHJpdmF0ZSBoYW5kbGVQbGF5ID0gKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy52aWRlb0VsZW1lbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgaXNQYXVzZWQgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgICAgICAgIGlmIChpc1BhdXNlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMudmlkZW9FbGVtZW50LnBsYXkoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy52aWRlb0VsZW1lbnQucGF1c2UoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzUGF1c2VkOiAhaXNQYXVzZWQgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcHJpdmF0ZSBoYW5kbGVXaGVlbCA9IChldmVudDogUmVhY3QuV2hlZWxFdmVudDxIVE1MRGl2RWxlbWVudD4pID0+IHtcbiAgICAgICAgaWYgKHRoaXMudmlkZW9FbGVtZW50KSB7XG4gICAgICAgICAgICBpZiAoZXZlbnQuZGVsdGFZID4gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMudmlkZW9FbGVtZW50LmN1cnJlbnRUaW1lIC09IDU7IC8vIHRvIGNvbnN0XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMudmlkZW9FbGVtZW50LmN1cnJlbnRUaW1lICs9IDU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH07XG5cbiAgICBwcml2YXRlIGhhbmRsZVRpbWVVcGRhdGUgPSAoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLnZpZGVvRWxlbWVudCkge1xuICAgICAgICAgICAgY29uc3QgZHVyYXRpb24gPSB0aGlzLnZpZGVvRWxlbWVudC5kdXJhdGlvbjtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRUaW1lID0gdGhpcy52aWRlb0VsZW1lbnQuY3VycmVudFRpbWU7XG5cbiAgICAgICAgICAgIGNvbnN0IHNlZWtQb3NpdGlvbiA9ICgxMDAgLyBkdXJhdGlvbikgKiBjdXJyZW50VGltZTtcblxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlZWtQb3NpdGlvbiB9KTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBwcml2YXRlIGhhbmRsZUN1ZUNoYW5nZSA9ICgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMudHJhY2tFbGVtZW50KSB7XG4gICAgICAgICAgICBjb25zdCB0ZXh0VHJhY2sgPSB0aGlzLnRyYWNrRWxlbWVudC50cmFjaztcblxuICAgICAgICAgICAgY29uc3Qgc3VidGl0bGVzID0gW107XG5cbiAgICAgICAgICAgIGZvciAoY29uc3QgY3VlIG9mIHRleHRUcmFjay5hY3RpdmVDdWVzKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGV4dCA9IGN1ZS50ZXh0LnJlcGxhY2UoLyg8KFtePl0rKT4pL2dpLCBcIlwiKTtcbiAgICAgICAgICAgICAgICBzdWJ0aXRsZXMucHVzaCh0ZXh0KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHN1YnRpdGxlcyB9KTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBwcml2YXRlIHRvb2dsZUZ1bGxTY3JlZW4gPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgaXNGdWxsc2NyZWVuIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgICAgIGlmIChpc0Z1bGxzY3JlZW4pIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmV4aXRGdWxsc2NyZWVuKCkuY2F0Y2goZXJyb3JMb2dnZXIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy52aWRlb1BsYXllckVsZW1lbnQucmVxdWVzdEZ1bGxzY3JlZW4oKS5jYXRjaChlcnJvckxvZ2dlcik7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXNGdWxsc2NyZWVuOiAhaXNGdWxsc2NyZWVuIH0pO1xuICAgIH07XG59XG5cbmNvbnN0IGVycm9yTG9nZ2VyID0gcmVhc29uID0+IHtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tY29uc29sZVxuICAgIGNvbnNvbGUubG9nKFwicmVhc29uXCIsIEpTT04uc3RyaW5naWZ5KHJlYXNvbiwgbnVsbCwgXCIgXCIpKTtcbn07XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCB7IFJlZGlyZWN0LCBSb3V0ZSwgUm91dGVQcm9wcyB9IGZyb20gXCJyZWFjdC1yb3V0ZXJcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUHJvdGVjdGVkUm91dGVEYXRhIGV4dGVuZHMgUm91dGVQcm9wcyB7XHJcbiAgICBpc0F1dGhlbnRpY2F0ZWQ6IGJvb2xlYW47XHJcbiAgICBjdXJyZW50UGF0aDogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFByb3RlY3RlZFJvdXRlSGFuZGxlcnMge31cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb3RlY3RlZFJvdXRlIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxcclxuICAgIFByb3RlY3RlZFJvdXRlRGF0YSAmIFByb3RlY3RlZFJvdXRlSGFuZGxlcnNcclxuPiB7XHJcbiAgICBwdWJsaWMgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgaXNBdXRoZW50aWNhdGVkLCBjdXJyZW50UGF0aCwgLi4ub3RoZXJQcm9wcyB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgaWYgKCFpc0F1dGhlbnRpY2F0ZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDxSZWRpcmVjdCB0bz17YC9sb2dpbj9yZWRpcmVjdFBhdGg9JHtjdXJyZW50UGF0aH1gfSAvPjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiA8Um91dGUgey4uLm90aGVyUHJvcHN9IC8+O1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gXCJyZWR1eFwiO1xyXG5pbXBvcnQgeyBjb25uZWN0QWR2YW5jZWQgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuXHJcbmltcG9ydCB7IFJvb3RTdGF0ZSB9IGZyb20gXCJyZWR1Y2Vyc1wiO1xyXG5cclxuaW1wb3J0IFByb3RlY3RlZFJvdXRlIGZyb20gXCIuL1Byb3RlY3RlZFJvdXRlXCI7XHJcblxyXG4vLyBUT0RPOiBBZGQgQ29tcG9uZW50IHR5cGVzIGluZmVyZW5jZVxyXG5pbXBvcnQgeyBSb3V0ZVByb3BzIH0gZnJvbSBcInJlYWN0LXJvdXRlclwiO1xyXG5pbXBvcnQgeyBQcm90ZWN0ZWRSb3V0ZURhdGEsIFByb3RlY3RlZFJvdXRlSGFuZGxlcnMgfSBmcm9tIFwiLi9Qcm90ZWN0ZWRSb3V0ZVwiO1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlOiBSb290U3RhdGUpOiBQcm90ZWN0ZWRSb3V0ZURhdGEgPT4ge1xyXG4gICAgLy8gVE9ETzogQWRkIHRva2VuIHZhbGlkYXRpb25cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgaXNBdXRoZW50aWNhdGVkOiBCb29sZWFuKHN0YXRlLmF1dGgudG9rZW5JbmZvKSxcclxuICAgICAgICBjdXJyZW50UGF0aDogc3RhdGUucm91dGVyLmxvY2F0aW9uLnBhdGhuYW1lLFxyXG4gICAgfTtcclxufTtcclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCk6IFByb3RlY3RlZFJvdXRlSGFuZGxlcnMgPT4ge1xyXG4gICAgY29uc3QgYWN0aW9uQ3JlYXRvcnMgPSB7fTtcclxuICAgIHJldHVybiBiaW5kQWN0aW9uQ3JlYXRvcnMoYWN0aW9uQ3JlYXRvcnMsIGRpc3BhdGNoKTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIHNlbGVjdG9yRmFjdG9yeShkaXNwYXRjaCkge1xyXG4gICAgY29uc3QgYWN0aW9ucyA9IG1hcERpc3BhdGNoVG9Qcm9wcyhkaXNwYXRjaCk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICBuZXh0U3RhdGU6IFJvb3RTdGF0ZSxcclxuICAgICAgICBuZXdPd25Qcm9wczogUm91dGVQcm9wcyxcclxuICAgICk6IFByb3RlY3RlZFJvdXRlRGF0YSAmIFByb3RlY3RlZFJvdXRlSGFuZGxlcnMgPT4gKHtcclxuICAgICAgICAuLi5tYXBTdGF0ZVRvUHJvcHMobmV4dFN0YXRlKSxcclxuICAgICAgICAuLi5hY3Rpb25zLFxyXG4gICAgICAgIC4uLm5ld093blByb3BzLFxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmNvbnN0IFByb3RlY3RlZFJvdXRlTW9kdWxlID0gY29ubmVjdEFkdmFuY2VkKHNlbGVjdG9yRmFjdG9yeSkoUHJvdGVjdGVkUm91dGUpO1xyXG5cclxuZXhwb3J0IHsgUHJvdGVjdGVkUm91dGVNb2R1bGUgYXMgZGVmYXVsdCwgUHJvdGVjdGVkUm91dGVNb2R1bGUgYXMgUHJvdGVjdGVkUm91dGUgfTtcclxuIiwiaW1wb3J0IHsgQWN0aW9uIGFzIFJlZHV4QWN0aW9uIH0gZnJvbSBcInJlZHV4XCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEFjdGlvbjxUIGV4dGVuZHMgc3RyaW5nID0gc3RyaW5nPiBleHRlbmRzIFJlZHV4QWN0aW9uIHtcclxuICAgIHJlYWRvbmx5IHR5cGU6IFQ7XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIEFjdGlvbldpdGhQYXlsb2FkPFQgZXh0ZW5kcyBzdHJpbmcsIFBheWxvYWQ+ID0gQWN0aW9uPFQ+ICYgUGF5bG9hZDtcclxuXHJcbmludGVyZmFjZSBBY3Rpb25DcmVhdG9yPFQgZXh0ZW5kcyBzdHJpbmcgPSBzdHJpbmc+IHtcclxuICAgICgpOiBBY3Rpb248VD47XHJcbiAgICB0eXBlOiBUO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgQWN0aW9uV2l0aFBheWxvYWRDcmVhdG9yPFxyXG4gICAgVCBleHRlbmRzIHN0cmluZyA9IHN0cmluZyxcclxuICAgIEFyZ3NUeXBlIGV4dGVuZHMgdW5rbm93bltdID0gW10sXHJcbiAgICBQYXlsb2FkVHlwZSA9IHt9XHJcbj4ge1xyXG4gICAgKC4uLmFyZ3M6IEFyZ3NUeXBlKTogQWN0aW9uV2l0aFBheWxvYWQ8VCwgUGF5bG9hZFR5cGU+O1xyXG4gICAgdHlwZTogVDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFjdGlvbkNyZWF0b3I8VCBleHRlbmRzIHN0cmluZz4odHlwZTogVCk6IEFjdGlvbkNyZWF0b3I8VD47XHJcbmV4cG9ydCBmdW5jdGlvbiBhY3Rpb25DcmVhdG9yPFQgZXh0ZW5kcyBzdHJpbmcsIEFyZ3NUeXBlIGV4dGVuZHMgdW5rbm93bltdLCBQYXlsb2FkVHlwZT4oXHJcbiAgICB0eXBlOiBULFxyXG4gICAgbWFwcGVyPzogKC4uLmFyZ3M6IEFyZ3NUeXBlKSA9PiBQYXlsb2FkVHlwZSxcclxuKTogQWN0aW9uV2l0aFBheWxvYWRDcmVhdG9yPFQsIEFyZ3NUeXBlLCBQYXlsb2FkVHlwZT47XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWN0aW9uQ3JlYXRvcih0eXBlLCBtYXBwZXI/KSB7XHJcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgICBjb25zdCBhY3Rpb25DcmVhdG9yOiBhbnkgPSBmdW5jdGlvbiguLi5hcmdzKSB7XHJcbiAgICAgICAgY29uc3QgcGF5bG9hZCA9IG1hcHBlciA/IG1hcHBlciguLi5hcmdzKSA6IHVuZGVmaW5lZDtcclxuICAgICAgICByZXR1cm4gY3JlYXRlQWN0aW9uKHR5cGUsIHBheWxvYWQpO1xyXG4gICAgfTtcclxuXHJcbiAgICBhY3Rpb25DcmVhdG9yLnR5cGUgPSB0eXBlO1xyXG5cclxuICAgIHJldHVybiBhY3Rpb25DcmVhdG9yO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQWN0aW9uPFQgZXh0ZW5kcyBzdHJpbmcsIFA+KHR5cGU6IFQpOiBBY3Rpb248VD47XHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVBY3Rpb248VCBleHRlbmRzIHN0cmluZywgUD4odHlwZTogVCwgcGF5bG9hZDogUCk6IEFjdGlvbldpdGhQYXlsb2FkPFQsIFA+O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUFjdGlvbih0eXBlLCBwYXlsb2FkPykge1xyXG4gICAgcmV0dXJuIHBheWxvYWQgPT09IHVuZGVmaW5lZCA/IHsgdHlwZSB9IDogeyB0eXBlLCAuLi5wYXlsb2FkIH07XHJcbn1cclxuIiwiZXhwb3J0IHsgQWN0aW9uLCBBY3Rpb25XaXRoUGF5bG9hZCB9IGZyb20gXCIuL2FjdGlvbi1oZWxwZXJzXCI7XHJcblxyXG5leHBvcnQgKiBmcm9tIFwiLi9tZXNzYWdlc1wiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9wcm9maWxlXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3NldHRpbmdzXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3NpZ25VcFwiO1xyXG4iLCJpbXBvcnQgeyBhY3Rpb25DcmVhdG9yIH0gZnJvbSBcIi4vYWN0aW9uLWhlbHBlcnNcIjtcclxuXHJcbmltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tIFwibW9kZWwvbWVzc2FnZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvYWRNZXNzYWdlcyA9IGFjdGlvbkNyZWF0b3IoXCJtZXNzYWdlcy9MT0FEXCIpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvYWRNZXNzYWdlc1N1Y2Nlc3MgPSBhY3Rpb25DcmVhdG9yKFxyXG4gICAgXCJtZXNzYWdlcy9MT0FEX1NVQ0NFU1NcIixcclxuICAgIChtZXNzYWdlczogTWVzc2FnZVtdKSA9PiAoe1xyXG4gICAgICAgIG1lc3NhZ2VzLFxyXG4gICAgfSksXHJcbik7XHJcblxyXG5leHBvcnQgY29uc3QgbG9hZE1lc3NhZ2VzRmFpbHVyZSA9IGFjdGlvbkNyZWF0b3IoXHJcbiAgICBcIm1lc3NhZ2VzL0xPQURfRkFJTFVSRVwiLFxyXG4gICAgKGVyb3JyOiBFcnJvciwgbWVzc2FnZTogc3RyaW5nKSA9PiAoeyBlcm9yciwgbWVzc2FnZSB9KSxcclxuKTtcclxuIiwiaW1wb3J0IHsgYWN0aW9uQ3JlYXRvciB9IGZyb20gXCIuL2FjdGlvbi1oZWxwZXJzXCI7XHJcblxyXG5pbXBvcnQgeyBQcm9maWxlIH0gZnJvbSBcIm1vZGVsL3Byb2ZpbGVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCByZXF1ZXN0UHJvZmlsZSA9IGFjdGlvbkNyZWF0b3IoXCJwcm9maWxlL1BST0ZJTEVfUkVRVUVTVFwiKTtcclxuXHJcbmV4cG9ydCBjb25zdCByZXF1ZXN0UHJvZmlsZVN1Y2Nlc3MgPSBhY3Rpb25DcmVhdG9yKFwicHJvZmlsZS9QUk9GSUxFX1NVQ0NFU1NcIiwgKHByb2ZpbGU6IFByb2ZpbGUpID0+ICh7XHJcbiAgICBwcm9maWxlLFxyXG59KSk7XHJcblxyXG5leHBvcnQgY29uc3QgcmVxdWVzdFByb2ZpbGVGYWlsdXJlID0gYWN0aW9uQ3JlYXRvcihcclxuICAgIFwicHJvZmlsZS9QUk9GSUxFX0ZBSUxVUkVcIixcclxuICAgIChlcm9ycjogRXJyb3IsIG1lc3NhZ2U6IHN0cmluZykgPT4gKHsgZXJvcnIsIG1lc3NhZ2UgfSksXHJcbik7XHJcbiIsImltcG9ydCB7IGFjdGlvbkNyZWF0b3IgfSBmcm9tIFwiLi9hY3Rpb24taGVscGVyc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNldEdtYWlsQ2xpZW50SWQgPSBhY3Rpb25DcmVhdG9yKFxyXG4gICAgXCJzZXR0aW5ncy9TRVRfR01BSUxfQ0xJRU5UX0lEXCIsXHJcbiAgICAoY2xpZW50SWQ6IHN0cmluZykgPT4gKHtcclxuICAgICAgICBjbGllbnRJZCxcclxuICAgIH0pLFxyXG4pO1xyXG4iLCJpbXBvcnQgeyBhY3Rpb25DcmVhdG9yIH0gZnJvbSBcIi4vYWN0aW9uLWhlbHBlcnNcIjtcclxuXHJcbmltcG9ydCB7IFRva2VuSW5mbyB9IGZyb20gXCJtb2RlbFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNpZ25VcCA9IGFjdGlvbkNyZWF0b3IoXCJzaWduVXAvU0lHTl9VUF9SRVFVRVNUXCIpO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNpZ25VcFN1Y2Nlc3MgPSBhY3Rpb25DcmVhdG9yKFwic2lnblVwL1NJR05fVVBfU1VDQ0VTU1wiLCAodG9rZW5JbmZvOiBUb2tlbkluZm8pID0+ICh7XHJcbiAgICB0b2tlbkluZm8sXHJcbn0pKTtcclxuXHJcbmV4cG9ydCBjb25zdCBzaWduVXBGYWlsID0gYWN0aW9uQ3JlYXRvcihcclxuICAgIFwic2lnblVwL1NJR05fVVBfRkFJTFVSRVwiLFxyXG4gICAgKGVyb3JyOiBFcnJvciwgbWVzc2FnZTogc3RyaW5nKSA9PiAoeyBlcm9yciwgbWVzc2FnZSB9KSxcclxuKTtcclxuIiwiaW1wb3J0IHsgUmVkdWNlciB9IGZyb20gXCJyZWR1eFwiO1xyXG5pbXBvcnQgeyBBY3Rpb25zIH0gZnJvbSBcInJlZHVjZXJzXCI7XHJcblxyXG5pbXBvcnQgeyBUb2tlbkluZm8gfSBmcm9tIFwibW9kZWxcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3RhdGUge1xyXG4gICAgdG9rZW5JbmZvPzogVG9rZW5JbmZvO1xyXG4gICAgZXJyb3JNZXNzYWdlPzogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCByZWR1Y2VyOiBSZWR1Y2VyPFN0YXRlPiA9IChzdGF0ZSA9IHt9LCBhY3Rpb246IEFjdGlvbnMpID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIFwic2lnblVwL1NJR05fVVBfUkVRVUVTVFwiOiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7fTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBcInNpZ25VcC9TSUdOX1VQX1NVQ0NFU1NcIjoge1xyXG4gICAgICAgICAgICBjb25zdCB7IHRva2VuSW5mbyB9ID0gYWN0aW9uO1xyXG4gICAgICAgICAgICByZXR1cm4geyB0b2tlbkluZm8gfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBcInNpZ25VcC9TSUdOX1VQX0ZBSUxVUkVcIjoge1xyXG4gICAgICAgICAgICBjb25zdCB7IG1lc3NhZ2UgfSA9IGFjdGlvbjtcclxuICAgICAgICAgICAgcmV0dXJuIHsgZXJyb3JNZXNzYWdlOiBtZXNzYWdlIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRlZmF1bHQ6IHtcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XHJcbiIsImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gXCJyZWR1eFwiO1xyXG5pbXBvcnQgeyBjb25uZWN0Um91dGVyIH0gZnJvbSBcImNvbm5lY3RlZC1yZWFjdC1yb3V0ZXJcIjtcclxuXHJcbmltcG9ydCBhdXRoIGZyb20gXCIuL2F1dGhcIjtcclxuaW1wb3J0IG1lc3NhZ2VzIGZyb20gXCIuL21lc3NhZ2VzXCI7XHJcbmltcG9ydCBwcm9maWxlIGZyb20gXCIuL3Byb2ZpbGVcIjtcclxuaW1wb3J0IHNldHRpbmdzIGZyb20gXCIuL3NldHRpbmdzXCI7XHJcblxyXG5leHBvcnQgY29uc3Qgcm9vdFJlZHVjZXIgPSBoaXN0b3J5ID0+XHJcbiAgICBjb21iaW5lUmVkdWNlcnMoe1xyXG4gICAgICAgIHJvdXRlcjogY29ubmVjdFJvdXRlcihoaXN0b3J5KSxcclxuXHJcbiAgICAgICAgYXV0aCxcclxuICAgICAgICBtZXNzYWdlcyxcclxuICAgICAgICBwcm9maWxlLFxyXG4gICAgICAgIHNldHRpbmdzLFxyXG4gICAgfSk7XHJcblxyXG5leHBvcnQgeyBBY3Rpb25zIH0gZnJvbSBcIi4vYWN0aW9uVHlwZXNcIjtcclxuZXhwb3J0IHR5cGUgUm9vdFN0YXRlID0gUmV0dXJuVHlwZTxSZXR1cm5UeXBlPHR5cGVvZiByb290UmVkdWNlcj4+O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXI7XHJcbiIsImltcG9ydCB7IFJlZHVjZXIgfSBmcm9tIFwicmVkdXhcIjtcclxuaW1wb3J0IHsgQWN0aW9ucyB9IGZyb20gXCJyZWR1Y2Vyc1wiO1xyXG5cclxuaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gXCJtb2RlbFwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTdGF0ZSB7XHJcbiAgICBpc0xvYWRpbmc6IGJvb2xlYW47XHJcbiAgICBpdGVtcz86IE1lc3NhZ2VbXTtcclxuICAgIGVycm9yTWVzc2FnZT86IHN0cmluZztcclxufVxyXG5cclxuY29uc3QgRGVmYXVsU3RhdGU6IFN0YXRlID0ge1xyXG4gICAgaXNMb2FkaW5nOiBmYWxzZSxcclxufTtcclxuXHJcbmNvbnN0IHJlZHVjZXI6IFJlZHVjZXI8U3RhdGU+ID0gKHN0YXRlID0gRGVmYXVsU3RhdGUsIGFjdGlvbjogQWN0aW9ucyk6IFN0YXRlID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIFwibWVzc2FnZXMvTE9BRFwiOiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7IGlzTG9hZGluZzogdHJ1ZSB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIFwibWVzc2FnZXMvTE9BRF9TVUNDRVNTXCI6IHtcclxuICAgICAgICAgICAgY29uc3QgeyBtZXNzYWdlcyB9ID0gYWN0aW9uO1xyXG4gICAgICAgICAgICByZXR1cm4geyBpc0xvYWRpbmc6IGZhbHNlLCBpdGVtczogbWVzc2FnZXMgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBcIm1lc3NhZ2VzL0xPQURfRkFJTFVSRVwiOiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgbWVzc2FnZSB9ID0gYWN0aW9uO1xyXG4gICAgICAgICAgICByZXR1cm4geyBpc0xvYWRpbmc6IGZhbHNlLCBlcnJvck1lc3NhZ2U6IG1lc3NhZ2UgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGVmYXVsdDoge1xyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcclxuIiwiaW1wb3J0IHsgUmVkdWNlciB9IGZyb20gXCJyZWR1eFwiO1xyXG5pbXBvcnQgeyBBY3Rpb25zIH0gZnJvbSBcInJlZHVjZXJzXCI7XHJcblxyXG5pbXBvcnQgeyBQcm9maWxlIH0gZnJvbSBcIm1vZGVsXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFN0YXRlIHtcclxuICAgIGl0ZW0/OiBQcm9maWxlO1xyXG4gICAgZXJyb3JNZXNzYWdlPzogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCByZWR1Y2VyOiBSZWR1Y2VyPFN0YXRlPiA9IChzdGF0ZSA9IHt9LCBhY3Rpb246IEFjdGlvbnMpOiBTdGF0ZSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBcInByb2ZpbGUvUFJPRklMRV9SRVFVRVNUXCI6IHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgXCJwcm9maWxlL1BST0ZJTEVfU1VDQ0VTU1wiOiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgcHJvZmlsZSB9ID0gYWN0aW9uO1xyXG4gICAgICAgICAgICByZXR1cm4geyBpdGVtOiBwcm9maWxlIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgXCJwcm9maWxlL1BST0ZJTEVfRkFJTFVSRVwiOiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgbWVzc2FnZSB9ID0gYWN0aW9uO1xyXG4gICAgICAgICAgICByZXR1cm4geyBlcnJvck1lc3NhZ2U6IG1lc3NhZ2UgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGVmYXVsdDoge1xyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcclxuIiwiaW1wb3J0IHsgUmVkdWNlciB9IGZyb20gXCJyZWR1eFwiO1xyXG5pbXBvcnQgeyBBY3Rpb25zIH0gZnJvbSBcInJlZHVjZXJzXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFN0YXRlIHtcclxuICAgIGNsaWVudElkPzogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCByZWR1Y2VyOiBSZWR1Y2VyPFN0YXRlPiA9IChzdGF0ZSA9IHt9LCBhY3Rpb246IEFjdGlvbnMpOiBTdGF0ZSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBcInNldHRpbmdzL1NFVF9HTUFJTF9DTElFTlRfSURcIjoge1xyXG4gICAgICAgICAgICBjb25zdCB7IGNsaWVudElkIH0gPSBhY3Rpb247XHJcbiAgICAgICAgICAgIHJldHVybiB7IGNsaWVudElkIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRlZmF1bHQ6IHtcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XHJcbiIsImV4cG9ydCB7IGxvYWRNZXNzYWdlcyB9IGZyb20gXCIuL2xvYWRNZXNzYWdlc1wiO1xyXG5leHBvcnQgeyBsb2FkUHJvZmlsZSB9IGZyb20gXCIuL2xvYWRQcm9maWxlXCI7XHJcbiIsImltcG9ydCB7IGNhbGwgfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XHJcblxyXG5pbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSBcIm1vZGVsXCI7XHJcblxyXG5pbXBvcnQgKiBhcyBnbWFpbEFwaSBmcm9tIFwiYXBpL2dtYWlsXCI7XHJcblxyXG5pbXBvcnQgeyBzZW5kQXV0aG9yaXplUmVxdWVzdFNhZ2EgfSBmcm9tIFwiLi9zZW5kQXV0aG9yaXplUmVxdWVzdFNhZ2FcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiogbG9hZE1lc3NhZ2VzKHVzZXJJZDogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBtZXNzYWdlTGlzdDogZ21haWxBcGkuTWVzc2FnZUxpc3QgPSB5aWVsZCBjYWxsKFxyXG4gICAgICAgIHNlbmRBdXRob3JpemVSZXF1ZXN0U2FnYSxcclxuICAgICAgICBnbWFpbEFwaS5nZXRNZXNzYWdlTGlzdCh1c2VySWQsIDEwKSxcclxuICAgICk7XHJcblxyXG4gICAgY29uc3QgbWVzc2FnZXM6IE1lc3NhZ2VbXSA9IFtdO1xyXG5cclxuICAgIGZvciAoY29uc3QgbWVzc2FnZUluZm8gb2YgbWVzc2FnZUxpc3QubWVzc2FnZXMpIHtcclxuICAgICAgICBjb25zdCBtZXNzYWdlOiBnbWFpbEFwaS5NZXNzYWdlID0geWllbGQgY2FsbChcclxuICAgICAgICAgICAgc2VuZEF1dGhvcml6ZVJlcXVlc3RTYWdhLFxyXG4gICAgICAgICAgICBnbWFpbEFwaS5nZXRNZXNzYWdlKHVzZXJJZCwgbWVzc2FnZUluZm8uaWQpLFxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIG1lc3NhZ2VzLnB1c2gocGFyc2VNZXNzYWdlKG1lc3NhZ2UpKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbWVzc2FnZXM7XHJcbn1cclxuXHJcbmNvbnN0IHBhcnNlTWVzc2FnZSA9IChtZXNzYWdlOiBnbWFpbEFwaS5NZXNzYWdlKTogTWVzc2FnZSA9PiB7XHJcbiAgICBjb25zdCBmcm9tID0gbWVzc2FnZS5wYXlsb2FkLmhlYWRlcnMuZmluZCh4ID0+IHgubmFtZSA9PT0gZ21haWxBcGkuSGVhZGVyVHlwZS5Gcm9tKS52YWx1ZTtcclxuICAgIGNvbnN0IHN1YmplY3QgPSBtZXNzYWdlLnBheWxvYWQuaGVhZGVycy5maW5kKHggPT4geC5uYW1lID09PSBnbWFpbEFwaS5IZWFkZXJUeXBlLlN1YmplY3QpLnZhbHVlO1xyXG5cclxuICAgIHJldHVybiB7IGlkOiBtZXNzYWdlLmlkLCBmcm9tLCBzdWJqZWN0IH07XHJcbn07XHJcbiIsImltcG9ydCB7IGNhbGwgfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XHJcblxyXG5pbXBvcnQgeyBQcm9maWxlIH0gZnJvbSBcIm1vZGVsL3Byb2ZpbGVcIjtcclxuXHJcbmltcG9ydCAqIGFzIGdtYWlsQXBpIGZyb20gXCJhcGkvZ21haWxcIjtcclxuXHJcbmltcG9ydCB7IHNlbmRBdXRob3JpemVSZXF1ZXN0U2FnYSB9IGZyb20gXCIuL3NlbmRBdXRob3JpemVSZXF1ZXN0U2FnYVwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uKiBsb2FkUHJvZmlsZSgpIHtcclxuICAgIGNvbnN0IHByb2ZpbGU6IGdtYWlsQXBpLlByb2ZpbGUgPSB5aWVsZCBjYWxsKFxyXG4gICAgICAgIHNlbmRBdXRob3JpemVSZXF1ZXN0U2FnYSxcclxuICAgICAgICBnbWFpbEFwaS5nZXRQcm9maWxlKFwibWVcIiksXHJcbiAgICApO1xyXG4gICAgcmV0dXJuIHBhcnNlUHJvZmlsZShwcm9maWxlKTtcclxufVxyXG5cclxuY29uc3QgcGFyc2VQcm9maWxlID0gKHByb2ZpbGU6IGdtYWlsQXBpLlByb2ZpbGUpOiBQcm9maWxlID0+IHtcclxuICAgIHJldHVybiB7IGVtYWlsOiBwcm9maWxlLmVtYWlsQWRkcmVzcyB9O1xyXG59O1xyXG4iLCJpbXBvcnQgeyBjYWxsLCBzZWxlY3QgfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XHJcblxyXG5pbXBvcnQgeyBSb290U3RhdGUgfSBmcm9tIFwicmVkdWNlcnNcIjtcclxuXHJcbmltcG9ydCB7IEFwaVJlcXVlc3QgfSBmcm9tIFwiYXBpL0FwaVJlcXVlc3RcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiogc2VuZEF1dGhvcml6ZVJlcXVlc3RTYWdhPFQ+KHJlcXVlc3Q6IEFwaVJlcXVlc3Q8VD4pIHtcclxuICAgIGNvbnN0IHRva2VuID0geWllbGQgY2FsbChnZXRUb2tlbik7XHJcblxyXG4gICAgcmV0dXJuIHlpZWxkIGNhbGwoXHJcbiAgICAgICAgcmVxdWVzdC53aXRoSGVhZGVycyh7XHJcbiAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG4gICAgICAgIH0pLmV4ZWN1dGUsXHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24qIGdldFRva2VuKCkge1xyXG4gICAgY29uc3QgdG9rZW4gPSB5aWVsZCBzZWxlY3QoKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLmF1dGgudG9rZW5JbmZvLnRva2VuKTtcclxuICAgIHJldHVybiB0b2tlbjtcclxufVxyXG4iLCJpbXBvcnQgeyBmb3JrIH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xyXG5cclxuaW1wb3J0IHsgYXV0aFNhZ2EgfSBmcm9tIFwiLi9vYXV0aFNhZ2FcIjtcclxuaW1wb3J0IHsgbWVzc2FnZXNTYWdhIH0gZnJvbSBcIi4vbWVzc2FnZXNTYWdhXCI7XHJcbmltcG9ydCB7IHByb2ZpbGVTYWdhIH0gZnJvbSBcIi4vcHJvZmlsZVNhZ2FcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiByb290U2FnYSgpIHtcclxuICAgIHlpZWxkIGZvcmsoYXV0aFNhZ2EpO1xyXG4gICAgeWllbGQgZm9yayhtZXNzYWdlc1NhZ2EpO1xyXG4gICAgeWllbGQgZm9yayhwcm9maWxlU2FnYSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgY2FsbCwgcHV0LCBzZWxlY3QsIHRha2VMYXRlc3QgfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XHJcblxyXG5pbXBvcnQgeyBSb290U3RhdGUgfSBmcm9tIFwicmVkdWNlcnNcIjtcclxuaW1wb3J0IHsgbG9hZE1lc3NhZ2VzLCBsb2FkTWVzc2FnZXNGYWlsdXJlLCBsb2FkTWVzc2FnZXNTdWNjZXNzIH0gZnJvbSBcInJlZHVjZXJzL2FjdGlvbnNcIjtcclxuXHJcbmltcG9ydCAqIGFzIGdtYWlsU2VydmljZXMgZnJvbSBcInNhZ2FzL2dtYWlsXCI7XHJcbmltcG9ydCB7IE1lc3NhZ2UsIFByb2ZpbGUgfSBmcm9tIFwibW9kZWxcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiogbWVzc2FnZXNTYWdhKCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChsb2FkTWVzc2FnZXMudHlwZSwgcHJvY2Vzc0xvZ2luKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHByb2Nlc3NMb2dpbihfYWN0aW9uOiBSZXR1cm5UeXBlPHR5cGVvZiBsb2FkTWVzc2FnZXM+KSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHByb2ZpbGU6IFByb2ZpbGUgPSB5aWVsZCBjYWxsKGdldFByb2ZpbGUpO1xyXG5cclxuICAgICAgICBjb25zdCBtZXNzYWdlczogTWVzc2FnZVtdID0geWllbGQgY2FsbChnbWFpbFNlcnZpY2VzLmxvYWRNZXNzYWdlcywgcHJvZmlsZS5lbWFpbCk7XHJcblxyXG4gICAgICAgIHlpZWxkIHB1dChsb2FkTWVzc2FnZXNTdWNjZXNzKG1lc3NhZ2VzKSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICB5aWVsZCBwdXQobG9hZE1lc3NhZ2VzRmFpbHVyZShlcnIsIGVyci50b1N0cmluZygpKSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBnZXRQcm9maWxlKCkge1xyXG4gICAgY29uc3QgcHJvZmlsZTogUm9vdFN0YXRlW1wicHJvZmlsZVwiXSA9IHlpZWxkIHNlbGVjdCgoc3RhdGU6IFJvb3RTdGF0ZSkgPT4gc3RhdGUucHJvZmlsZSk7XHJcblxyXG4gICAgaWYgKCFwcm9maWxlLml0ZW0pIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVc2VyIHByb2ZpbGUgaXMgbm90IGxvYWRlZFwiKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcHJvZmlsZS5pdGVtO1xyXG59XHJcbiIsImltcG9ydCB7IElQcm92aWRlciB9IGZyb20gXCJyZWFjdC1zaW1wbGUtYXV0aFwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTZXNzaW9uIHtcclxuICAgIGFjY2Vzc1Rva2VuOiBzdHJpbmc7XHJcbiAgICB0b2tlblR5cGU6IHN0cmluZztcclxuICAgIGV4cGlyZUR1cmF0aW9uU2Vjb25kczogbnVtYmVyO1xyXG4gICAgc3RhdGU6IHN0cmluZztcclxuICAgIHNjb3BlOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBlbnVtIFNjb3BlcyB7XHJcbiAgICBcImdtYWlsLnJlYWRvbmx5XCIgPSBcImh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvZ21haWwucmVhZG9ubHlcIixcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGJ1aWxkR29vZ2xlUHJvdmlkZXIgPSAoXHJcbiAgICBjbGllbnRJZDogc3RyaW5nLFxyXG4gICAgc2NvcGVzOiBTY29wZXNbXSA9IFtTY29wZXNbXCJnbWFpbC5yZWFkb25seVwiXV0sXHJcbik6IElQcm92aWRlcjxTZXNzaW9uPiA9PiAoe1xyXG4gICAgYnVpbGRBdXRob3JpemVVcmwoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgXCJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20vby9vYXV0aDIvdjIvYXV0aFwiICtcclxuICAgICAgICAgICAgYD9zY29wZT0ke2VuY29kZVNjb3BlcyhzY29wZXMpfWAgK1xyXG4gICAgICAgICAgICBcIiZpbmNsdWRlX2dyYW50ZWRfc2NvcGVzPXRydWVcIiArXHJcbiAgICAgICAgICAgIFwiJnN0YXRlPXN0YXRlX3BhcmFtZXRlcl9wYXNzdGhyb3VnaF92YWx1ZVwiICtcclxuICAgICAgICAgICAgYCZyZWRpcmVjdF91cmk9JHtlbmNvZGVVUklDb21wb25lbnQoYCR7d2luZG93LmxvY2F0aW9uLm9yaWdpbn0vcmVkaXJlY3QuaHRtbGApfWAgK1xyXG4gICAgICAgICAgICBcIiZyZXNwb25zZV90eXBlPXRva2VuXCIgK1xyXG4gICAgICAgICAgICBgJmNsaWVudF9pZD0ke2NsaWVudElkfWBcclxuICAgICAgICApO1xyXG4gICAgfSxcclxuXHJcbiAgICBleHRyYWN0RXJyb3IocmVkaXJlY3RVcmw6IHN0cmluZykge1xyXG4gICAgICAgIGNvbnN0IGVycm9yUmVhc29uOiBzdHJpbmcgPSBnZXRQYXJhbWV0ZXJzKHJlZGlyZWN0VXJsLCBcImVycm9yXCIpO1xyXG5cclxuICAgICAgICByZXR1cm4gZXJyb3JSZWFzb24gPyBuZXcgRXJyb3IoZXJyb3JSZWFzb24pIDogdW5kZWZpbmVkO1xyXG4gICAgfSxcclxuXHJcbiAgICBleHRyYWN0U2Vzc2lvbihyZWRpcmVjdFVybDogc3RyaW5nKTogU2Vzc2lvbiB7XHJcbiAgICAgICAgY29uc3QgYWNjZXNzVG9rZW46IHN0cmluZyA9IGdldFBhcmFtZXRlcnMocmVkaXJlY3RVcmwsIFwiYWNjZXNzX3Rva2VuXCIpO1xyXG4gICAgICAgIGNvbnN0IHRva2VuVHlwZTogc3RyaW5nID0gZ2V0UGFyYW1ldGVycyhyZWRpcmVjdFVybCwgXCJ0b2tlbl90eXBlXCIpO1xyXG4gICAgICAgIGNvbnN0IHN0YXRlOiBzdHJpbmcgPSBnZXRQYXJhbWV0ZXJzKHJlZGlyZWN0VXJsLCBcInN0YXRlXCIpO1xyXG4gICAgICAgIGNvbnN0IHNjb3BlOiBzdHJpbmcgPSBnZXRQYXJhbWV0ZXJzKHJlZGlyZWN0VXJsLCBcInNjb3BlXCIpO1xyXG4gICAgICAgIGNvbnN0IGV4cGlyZUR1cmF0aW9uU2Vjb25kcyA9IHBhcnNlSW50KGdldFBhcmFtZXRlcnMocmVkaXJlY3RVcmwsIFwiZXhwaXJlc19pblwiKSwgMTApO1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBhY2Nlc3NUb2tlbixcclxuICAgICAgICAgICAgZXhwaXJlRHVyYXRpb25TZWNvbmRzLFxyXG4gICAgICAgICAgICB0b2tlblR5cGUsXHJcbiAgICAgICAgICAgIHN0YXRlLFxyXG4gICAgICAgICAgICBzY29wZSxcclxuICAgICAgICB9O1xyXG4gICAgfSxcclxuXHJcbiAgICB2YWxpZGF0ZVNlc3Npb24oX3Nlc3Npb246IFNlc3Npb24pOiBib29sZWFuIHtcclxuICAgICAgICAvLyBUT0RPOiBBZGQgdmFsaWRhdGlvblxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSxcclxuXHJcbiAgICBnZXRBY2Nlc3NUb2tlbihzZXNzaW9uOiBTZXNzaW9uLCBfcmVzb3VyY2VJZDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gc2Vzc2lvbi5hY2Nlc3NUb2tlbjtcclxuICAgIH0sXHJcblxyXG4gICAgZ2V0U2lnbk91dFVybCh0b2tlbjogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gYGh0dHBzOi8vYWNjb3VudHMuZ29vZ2xlLmNvbS9vL29hdXRoMi9yZXZva2U/dG9rZW49JHtlbmNvZGVVUklDb21wb25lbnQodG9rZW4pfWA7XHJcbiAgICB9LFxyXG59KTtcclxuXHJcbmNvbnN0IGdldFBhcmFtZXRlcnMgPSAocmVkaXJlY3RVcmw6IHN0cmluZywgbmFtZTogc3RyaW5nKSA9PiB7XHJcbiAgICBjb25zdCByZWdleCA9IG5ldyBSZWdFeHAoYCR7bmFtZX09KFteJl0rKWApO1xyXG5cclxuICAgIGxldCB2YWx1ZTogc3RyaW5nID0gbnVsbDtcclxuICAgIGNvbnN0IHZhbHVlTWF0Y2ggPSByZWRpcmVjdFVybC5tYXRjaChyZWdleCk7XHJcbiAgICBpZiAodmFsdWVNYXRjaCkge1xyXG4gICAgICAgIHZhbHVlID0gdmFsdWVNYXRjaFsxXTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdmFsdWU7XHJcbn07XHJcblxyXG5jb25zdCBlbmNvZGVTY29wZXMgPSAoc2NvcGVzOiBTY29wZXNbXSkgPT4ge1xyXG4gICAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudChzY29wZXMuam9pbihcIixcIikpO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBmb3JrIH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xyXG5cclxuaW1wb3J0IHsgc2lnblVwU2FnYSB9IGZyb20gXCIuL3NpZ25VcFNhZ2FcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiogYXV0aFNhZ2EoKSB7XHJcbiAgICB5aWVsZCBmb3JrKHNpZ25VcFNhZ2EpO1xyXG5cclxuICAgIC8vIGNvbnN0IGlzU2lnblVwID0geWllbGQgY2FsbChpc1NpZ25VcFNhZ2EpO1xyXG4gICAgLy8gaWYgKCFpc1NpZ25VcCkge1xyXG4gICAgLy8gICAgIHlpZWxkIHB1dChzaWduVXAoKSk7XHJcbiAgICAvLyB9XHJcbn1cclxuXHJcbi8vIGZ1bmN0aW9uKiBpc1NpZ25VcFNhZ2EoKSB7XHJcbi8vICAgICBjb25zdCB0b2tlbiA9IHlpZWxkIHNlbGVjdCgoc3RhdGU6IFJvb3RTdGF0ZSkgPT4gc3RhdGUuYXV0aC50b2tlbkluZm8pO1xyXG4vLyAgICAgcmV0dXJuIEJvb2xlYW4odG9rZW4pO1xyXG4vLyB9XHJcbiIsImltcG9ydCB7IGNhbGwsIHB1dCwgc2VsZWN0LCB0YWtlTGF0ZXN0IH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xyXG5cclxuaW1wb3J0IFJTQSBmcm9tIFwicmVhY3Qtc2ltcGxlLWF1dGhcIjtcclxuaW1wb3J0IHsgcmVxdWVzdFByb2ZpbGUsIHNpZ25VcCwgc2lnblVwRmFpbCwgc2lnblVwU3VjY2VzcyB9IGZyb20gXCJyZWR1Y2Vycy9hY3Rpb25zXCI7XHJcblxyXG5pbXBvcnQgeyBTZXNzaW9uLCBidWlsZEdvb2dsZVByb3ZpZGVyIH0gZnJvbSBcIi4vZ29vZ2xlUHJvdmlkZXJcIjtcclxuaW1wb3J0IHsgUm9vdFN0YXRlIH0gZnJvbSBcInJlZHVjZXJzXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24qIHNpZ25VcFNhZ2EoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KHNpZ25VcC50eXBlLCBwcm9jZXNzU2lnblVwKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHByb2Nlc3NTaWduVXAoX2FjdGlvbjogUmV0dXJuVHlwZTx0eXBlb2Ygc2lnblVwPikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBjbGllbnRJZCA9IHlpZWxkIGNhbGwoZ2V0Q2xpZW50SWQpO1xyXG4gICAgICAgIGNvbnN0IGdvb2dsZVByb3ZpZGVyID0gYnVpbGRHb29nbGVQcm92aWRlcihjbGllbnRJZCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHNlc3Npb246IFNlc3Npb24gPSB5aWVsZCBjYWxsKFJTQS5hY3F1aXJlVG9rZW5Bc3luYywgZ29vZ2xlUHJvdmlkZXIpO1xyXG5cclxuICAgICAgICB5aWVsZCBwdXQoc2lnblVwU3VjY2Vzcyh7IHRva2VuOiBzZXNzaW9uLmFjY2Vzc1Rva2VuIH0pKTtcclxuXHJcbiAgICAgICAgLy8gVE9ETzog0J3QtSDQtNC+0LvQttC90L4g0YLRg9GCINCx0YvRgtGMXHJcbiAgICAgICAgeWllbGQgcHV0KHJlcXVlc3RQcm9maWxlKCkpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KHNpZ25VcEZhaWwoZXJyLCBlcnIudG9TdHJpbmcoKSkpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24qIGdldENsaWVudElkKCkge1xyXG4gICAgY29uc3QgY2xpZW50SWQgPSB5aWVsZCBzZWxlY3QoKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLnNldHRpbmdzLmNsaWVudElkKTtcclxuICAgIHJldHVybiBjbGllbnRJZDtcclxufVxyXG4iLCJpbXBvcnQgeyBjYWxsLCBwdXQsIHRha2VMYXRlc3QgfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XHJcblxyXG5pbXBvcnQge1xyXG4gICAgbG9hZE1lc3NhZ2VzLFxyXG4gICAgcmVxdWVzdFByb2ZpbGUsXHJcbiAgICByZXF1ZXN0UHJvZmlsZUZhaWx1cmUsXHJcbiAgICByZXF1ZXN0UHJvZmlsZVN1Y2Nlc3MsXHJcbn0gZnJvbSBcInJlZHVjZXJzL2FjdGlvbnNcIjtcclxuXHJcbmltcG9ydCB7IGxvYWRQcm9maWxlIH0gZnJvbSBcInNhZ2FzL2dtYWlsL2xvYWRQcm9maWxlXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24qIHByb2ZpbGVTYWdhKCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChyZXF1ZXN0UHJvZmlsZS50eXBlLCBwcm9jZXNzTG9naW4pO1xyXG59XHJcblxyXG5mdW5jdGlvbiogcHJvY2Vzc0xvZ2luKF9hY3Rpb246IFJldHVyblR5cGU8dHlwZW9mIHJlcXVlc3RQcm9maWxlPikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBwcm9maWxlID0geWllbGQgY2FsbChsb2FkUHJvZmlsZSk7XHJcblxyXG4gICAgICAgIHlpZWxkIHB1dChyZXF1ZXN0UHJvZmlsZVN1Y2Nlc3MocHJvZmlsZSkpO1xyXG5cclxuICAgICAgICAvLyBUT0RPOiDQndC1INC00L7Qu9C20L3QviDRgtGD0YIg0LHRi9GC0YxcclxuICAgICAgICB5aWVsZCBwdXQobG9hZE1lc3NhZ2VzKCkpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KHJlcXVlc3RQcm9maWxlRmFpbHVyZShlcnIsIGVyci50b1N0cmluZygpKSk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgY29tcG9zZSB9IGZyb20gXCJyZWR1eFwiO1xyXG5cclxuLy8gdHNsaW50OmRpc2FibGU6bm8tc3RyaW5nLWxpdGVyYWxcclxuY29uc3QgZ2V0UmVkdXhEZXZUb29sc0NvbXBvc2UgPSAoKSA9PlxyXG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmIHdpbmRvd1tcIl9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX0NPTVBPU0VfX1wiXVxyXG4gICAgICAgID8gd2luZG93W1wiX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fQ09NUE9TRV9fXCJdKHtcclxuICAgICAgICAgICAgICBuYW1lOiBcIk15Qm9pbGVycGxhdGVcIixcclxuICAgICAgICAgICAgICBhY3Rpb25zQmxhY2tsaXN0OiBbXCJSRURVWF9TVE9SQUdFX1NBVkVcIl0sXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIDogdW5kZWZpbmVkO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNvbXBvc2VFbmhhbmNlcnMgPSBnZXRSZWR1eERldlRvb2xzQ29tcG9zZSgpIHx8IGNvbXBvc2U7XHJcbiIsImltcG9ydCB7IGFwcGx5TWlkZGxld2FyZSwgY3JlYXRlU3RvcmUgfSBmcm9tIFwicmVkdXhcIjtcclxuaW1wb3J0IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlIGZyb20gXCJyZWR1eC1zYWdhXCI7XHJcbmltcG9ydCB7IHJvdXRlck1pZGRsZXdhcmUgYXMgY3JlYXRlUm91dGVyTWlkZGxld2FyZSB9IGZyb20gXCJjb25uZWN0ZWQtcmVhY3Qtcm91dGVyXCI7XHJcblxyXG5pbXBvcnQgeyByb290UmVkdWNlciB9IGZyb20gXCJyZWR1Y2Vyc1wiO1xyXG5pbXBvcnQgcm9vdFNhZ2EgZnJvbSBcInNhZ2FzXCI7XHJcblxyXG5pbXBvcnQgeyBjb21wb3NlRW5oYW5jZXJzIH0gZnJvbSBcIi4vY29tcG9zZUVuaGFuY2Vyc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29uZmlndXJlU3RvcmUoaW5pdGlhbFN0YXRlLCBoaXN0b3J5KSB7XHJcbiAgICBjb25zdCByb3V0ZXJNaWRkbGV3YXJlID0gY3JlYXRlUm91dGVyTWlkZGxld2FyZShoaXN0b3J5KTtcclxuICAgIGNvbnN0IHNhZ2FNaWRkbGV3YXJlID0gY3JlYXRlU2FnYU1pZGRsZXdhcmUoKTtcclxuXHJcbiAgICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKFxyXG4gICAgICAgIHJvb3RSZWR1Y2VyKGhpc3RvcnkpLFxyXG4gICAgICAgIGluaXRpYWxTdGF0ZSxcclxuICAgICAgICBjb21wb3NlRW5oYW5jZXJzKGFwcGx5TWlkZGxld2FyZShyb3V0ZXJNaWRkbGV3YXJlLCBzYWdhTWlkZGxld2FyZSkpLFxyXG4gICAgKTtcclxuXHJcbiAgICAvLyBydW4gc2FnYXNcclxuICAgIHNhZ2FNaWRkbGV3YXJlLnJ1bihyb290U2FnYSk7XHJcblxyXG4gICAgLy8gSG90IG1vZHVsZSByZXBsYWNlbWVudFxyXG4gICAgaWYgKG1vZHVsZS5ob3QpIHtcclxuICAgICAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4uL3JlZHVjZXJzL2luZGV4XCIsICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgbmV3Um9vdFJlZHVjZXIgPSByZXF1aXJlKFwiLi4vcmVkdWNlcnMvaW5kZXhcIikuZGVmYXVsdDtcclxuICAgICAgICAgICAgc3RvcmUucmVwbGFjZVJlZHVjZXIobmV3Um9vdFJlZHVjZXIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzdG9yZTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9
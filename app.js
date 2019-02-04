(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

/***/ "./locales/index.js":
/*!**************************!*\
  !*** ./locales/index.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"en":{"common":{"signUp":"signUp"},"home":{"viewMessages":"View messages"},"login":{"needAuthorize":"Need authorize"},"messages":{"from":"from","subject":"subject"},"navigation":{"home":"Home","messages":"Messages"},"settings":{"enterCientId":"Enter CLIENT_ID"}},"ru":{"common":{"signUp":"Войти"},"home":{"viewMessages":"Открыть сообщения"},"login":{"needAuthorize":"Необходимо авторизоваться"},"messages":{"from":"отправитель","subject":"заголовок"},"navigation":{"home":"Домой","messages":"Сообщения"},"settings":{"enterCientId":"Введите CLIENT_ID"}}}

/***/ }),

/***/ "./node_modules/typings-for-css-modules-loader/lib/index.js??ref--6-1!./src/modules/App.css":
/*!*****************************************************************************************!*\
  !*** ./node_modules/typings-for-css-modules-loader/lib??ref--6-1!./src/modules/App.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "html,\nbody,\n#app {\n    height: 100%;\n}\n\n.app__2NnFW {\n    height: 100%;\n    width: 100%;\n}\n\n.page__QENIv {\n    flex-grow: 1;\n}\n\n.toolbar__2EjSS {\n    justify-content: space-between;\n}\n", ""]);

// exports
exports.locals = {
	"app": "app__2NnFW",
	"page": "page__QENIv",
	"toolbar": "toolbar__2EjSS"
};

/***/ }),

/***/ "./node_modules/typings-for-css-modules-loader/lib/index.js??ref--7-1!./node_modules/sass-loader/lib/loader.js!./src/modules/pages/messages/Messages.scss":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/typings-for-css-modules-loader/lib??ref--7-1!./node_modules/sass-loader/lib/loader.js!./src/modules/pages/messages/Messages.scss ***!
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
    lng: "en",
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
/* WEBPACK VAR INJECTION */(function(module, process) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
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
const history = Object(history__WEBPACK_IMPORTED_MODULE_5__["createBrowserHistory"])();
const store = Object(store__WEBPACK_IMPORTED_MODULE_6__["default"])(initialState, history);
// tslint:disable-next-line:no-console
console.log("process.env", JSON.stringify(process.env.PUBLIC_PATH, null, " "));
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module), __webpack_require__(/*! ./../node_modules/node-libs-browser/node_modules/process/browser.js */ "./node_modules/node-libs-browser/node_modules/process/browser.js")))

/***/ }),

/***/ "./src/modules/App.css":
/*!*****************************!*\
  !*** ./src/modules/App.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/typings-for-css-modules-loader/lib??ref--6-1!./App.css */ "./node_modules/typings-for-css-modules-loader/lib/index.js??ref--6-1!./src/modules/App.css");
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
		module.hot.accept(/*! !../../node_modules/typings-for-css-modules-loader/lib??ref--6-1!./App.css */ "./node_modules/typings-for-css-modules-loader/lib/index.js??ref--6-1!./src/modules/App.css", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { (function() {
			var newContent = __webpack_require__(/*! !../../node_modules/typings-for-css-modules-loader/lib??ref--6-1!./App.css */ "./node_modules/typings-for-css-modules-loader/lib/index.js??ref--6-1!./src/modules/App.css");
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
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./App.css */ "./src/modules/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_10__);
(function () {
    var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

    enterModule && enterModule(module);
})();












const App = () => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], { container: true, className: _App_css__WEBPACK_IMPORTED_MODULE_10__["app"], itemScope: true }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["CssBaseline"], null), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], { item: true, xs: 12 }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["AppBar"], { position: "static" }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](modules_navigation__WEBPACK_IMPORTED_MODULE_4__["Navigation"], null))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], { item: true, className: _App_css__WEBPACK_IMPORTED_MODULE_10__["page"] }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_2__["Switch"], null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_2__["Route"], { exact: true, path: "/", component: modules_pages_home__WEBPACK_IMPORTED_MODULE_6__["Home"] }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_2__["Route"], { path: "/login", component: modules_pages_login__WEBPACK_IMPORTED_MODULE_7__["Login"] }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_2__["Route"], { path: "/settings", component: modules_pages_settings__WEBPACK_IMPORTED_MODULE_9__["Settings"] }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](modules_routes_protected_route__WEBPACK_IMPORTED_MODULE_5__["ProtectedRoute"], { path: "/messages", component: modules_pages_messages__WEBPACK_IMPORTED_MODULE_8__["Messages"] }))));

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





class Navigation extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
    render() {
        const { path } = this.props;
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_1___default.a, { value: path }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](modules_link__WEBPACK_IMPORTED_MODULE_2__["TabLink"], { value: "/", to: "/", label: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](modules_localize__WEBPACK_IMPORTED_MODULE_3__["Localize"], { id: "navigation:home" }) }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](modules_link__WEBPACK_IMPORTED_MODULE_2__["TabLink"], { value: "/settings", to: "/settings", label: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](modules_localize__WEBPACK_IMPORTED_MODULE_3__["Localize"], { id: "navigation:settings" }) }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](modules_link__WEBPACK_IMPORTED_MODULE_2__["TabLink"], { value: "/messages", to: "/messages", label: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](modules_localize__WEBPACK_IMPORTED_MODULE_3__["Localize"], { id: "navigation:messages" }) }));
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
var content = __webpack_require__(/*! !../../../../node_modules/typings-for-css-modules-loader/lib??ref--7-1!../../../../node_modules/sass-loader/lib/loader.js!./Messages.scss */ "./node_modules/typings-for-css-modules-loader/lib/index.js??ref--7-1!./node_modules/sass-loader/lib/loader.js!./src/modules/pages/messages/Messages.scss");
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
		module.hot.accept(/*! !../../../../node_modules/typings-for-css-modules-loader/lib??ref--7-1!../../../../node_modules/sass-loader/lib/loader.js!./Messages.scss */ "./node_modules/typings-for-css-modules-loader/lib/index.js??ref--7-1!./node_modules/sass-loader/lib/loader.js!./src/modules/pages/messages/Messages.scss", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { (function() {
			var newContent = __webpack_require__(/*! !../../../../node_modules/typings-for-css-modules-loader/lib??ref--7-1!../../../../node_modules/sass-loader/lib/loader.js!./Messages.scss */ "./node_modules/typings-for-css-modules-loader/lib/index.js??ref--7-1!./node_modules/sass-loader/lib/loader.js!./src/modules/pages/messages/Messages.scss");
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
const getReduxDevToolsCompose = () => "development" !== "production" && window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"] ? window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"]({
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9sb2NhbGVzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL0FwcC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvcGFnZXMvbWVzc2FnZXMvTWVzc2FnZXMuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpL2FwaVJlcXVlc3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaS9nbWFpbC9nZXRNZXNzYWdlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcGkvZ21haWwvZ2V0TWVzc2FnZUxpc3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaS9nbWFpbC9nZXRQcm9maWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcGkvZ21haWwvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2kxOG4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9BcHAuY3NzPzYyNzEiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvQXBwLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9saW5rL0xpbmsudHN4Iiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2xpbmsvVGFiTGluay50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvbGluay9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9sb2NhbGl6ZS9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvbmF2aWdhdGlvbi9OYXZpZ2F0aW9uLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9uYXZpZ2F0aW9uL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL3BhZ2VzL2hvbWUvSG9tZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvcGFnZXMvaG9tZS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9wYWdlcy9sb2dpbi9Mb2dpbi50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvcGFnZXMvbG9naW4vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvcGFnZXMvbWVzc2FnZXMvTWVzc2FnZXMuc2Nzcz8wZjgzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL3BhZ2VzL21lc3NhZ2VzL01lc3NhZ2VzLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9wYWdlcy9tZXNzYWdlcy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9wYWdlcy9zZXR0aW5ncy9TZXR0aW5ncy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvcGFnZXMvc2V0dGluZ3MvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvcm91dGVzL3Byb3RlY3RlZC1yb3V0ZS9Qcm90ZWN0ZWRSb3V0ZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvcm91dGVzL3Byb3RlY3RlZC1yb3V0ZS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdWNlcnMvYWN0aW9ucy9hY3Rpb24taGVscGVycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdWNlcnMvYWN0aW9ucy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdWNlcnMvYWN0aW9ucy9tZXNzYWdlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdWNlcnMvYWN0aW9ucy9wcm9maWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9yZWR1Y2Vycy9hY3Rpb25zL3NldHRpbmdzLnRzIiwid2VicGFjazovLy8uL3NyYy9yZWR1Y2Vycy9hY3Rpb25zL3NpZ25VcC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdWNlcnMvYXV0aC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdWNlcnMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHVjZXJzL21lc3NhZ2VzLnRzIiwid2VicGFjazovLy8uL3NyYy9yZWR1Y2Vycy9wcm9maWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9yZWR1Y2Vycy9zZXR0aW5ncy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2FnYXMvZ21haWwvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NhZ2FzL2dtYWlsL2xvYWRNZXNzYWdlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2FnYXMvZ21haWwvbG9hZFByb2ZpbGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NhZ2FzL2dtYWlsL3NlbmRBdXRob3JpemVSZXF1ZXN0U2FnYS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2FnYXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NhZ2FzL21lc3NhZ2VzU2FnYS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2FnYXMvb2F1dGhTYWdhL2dvb2dsZVByb3ZpZGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9zYWdhcy9vYXV0aFNhZ2EvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NhZ2FzL29hdXRoU2FnYS9zaWduVXBTYWdhLnRzIiwid2VicGFjazovLy8uL3NyYy9zYWdhcy9wcm9maWxlU2FnYS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvY29tcG9zZUVuaGFuY2Vycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsa0JBQWtCLE1BQU0sVUFBVSxrQkFBa0IsU0FBUywrQkFBK0IsVUFBVSxpQ0FBaUMsYUFBYSxrQ0FBa0MsZUFBZSxvQ0FBb0MsYUFBYSxrQ0FBa0MsT0FBTyxVQUFVLGlCQUFpQixTQUFTLG1DQUFtQyxVQUFVLDRDQUE0QyxhQUFhLDJDQUEyQyxlQUFlLHNDQUFzQyxhQUFhLHFDOzs7Ozs7Ozs7OztBQ0F0aEI7QUFDQTs7O0FBR0E7QUFDQSw2Q0FBOEMsbUJBQW1CLEdBQUcsaUJBQWlCLG1CQUFtQixrQkFBa0IsR0FBRyxrQkFBa0IsbUJBQW1CLEdBQUcscUJBQXFCLHFDQUFxQyxHQUFHOztBQUVsTztBQUNBO0FBQ0E7QUFDQTtBQUNB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Q0FBekMsR0FDTSxPQUFPLHNDQUFQLEVBQStDO0FBQzNDLFVBQU0sZUFEcUM7QUFFM0Msc0JBQWtCLENBQUMsb0JBQUQ7QUFGeUIsQ0FBL0MsQ0FETixHQUtNLFNBTlY7QUFRTyxNQUFNLG1CQUFtQiw2QkFBNkIsNkNBQXREOzs7Ozs7Ozs7Ozs7NEJBUkQsdUI7NEJBUU8sZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYYjtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFYyxTQUFVLGNBQVYsQ0FBeUIsWUFBekIsRUFBdUMsT0FBdkMsRUFBOEM7QUFDeEQsVUFBTSxtQkFBbUIsZ0ZBQXVCLE9BQXZCLENBQXpCO0FBQ0EsVUFBTSxpQkFBaUIsNERBQXZCO0FBRUEsVUFBTSxRQUFRLDBEQUNWLDZEQUFZLE9BQVosQ0FEVSxFQUVWLFlBRlUsRUFHViwyRUFBaUIsOERBQWdCLGdCQUFoQixFQUFrQyxjQUFsQyxDQUFqQixDQUhVLENBQWQ7QUFNQTtBQUNBLG1CQUFlLEdBQWYsQ0FBbUIsNkNBQW5CO0FBRUE7QUFDQSxRQUFJLElBQUosRUFBZ0I7QUFDWixlQUFPLEdBQVAsQ0FBVyxNQUFYLENBQWtCLGtEQUFsQixFQUF1QztBQUFBLE9BQUs7QUFDeEMsa0JBQU0saUJBQWlCLG9CQUFRLGtEQUFSLEVBQTZCLE9BQXBEO0FBQ0Esa0JBQU0sY0FBTixDQUFxQixjQUFyQjtBQUNILFNBSEQ7QUFJSDtBQUVELFdBQU8sS0FBUDtBQUNIOzs7Ozs7Ozs7Ozs7NEJBdEJ1QixjIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0ge1wiZW5cIjp7XCJjb21tb25cIjp7XCJzaWduVXBcIjpcInNpZ25VcFwifSxcImhvbWVcIjp7XCJ2aWV3TWVzc2FnZXNcIjpcIlZpZXcgbWVzc2FnZXNcIn0sXCJsb2dpblwiOntcIm5lZWRBdXRob3JpemVcIjpcIk5lZWQgYXV0aG9yaXplXCJ9LFwibWVzc2FnZXNcIjp7XCJmcm9tXCI6XCJmcm9tXCIsXCJzdWJqZWN0XCI6XCJzdWJqZWN0XCJ9LFwibmF2aWdhdGlvblwiOntcImhvbWVcIjpcIkhvbWVcIixcIm1lc3NhZ2VzXCI6XCJNZXNzYWdlc1wifSxcInNldHRpbmdzXCI6e1wiZW50ZXJDaWVudElkXCI6XCJFbnRlciBDTElFTlRfSURcIn19LFwicnVcIjp7XCJjb21tb25cIjp7XCJzaWduVXBcIjpcItCS0L7QudGC0LhcIn0sXCJob21lXCI6e1widmlld01lc3NhZ2VzXCI6XCLQntGC0LrRgNGL0YLRjCDRgdC+0L7QsdGJ0LXQvdC40Y9cIn0sXCJsb2dpblwiOntcIm5lZWRBdXRob3JpemVcIjpcItCd0LXQvtCx0YXQvtC00LjQvNC+INCw0LLRgtC+0YDQuNC30L7QstCw0YLRjNGB0Y9cIn0sXCJtZXNzYWdlc1wiOntcImZyb21cIjpcItC+0YLQv9GA0LDQstC40YLQtdC70YxcIixcInN1YmplY3RcIjpcItC30LDQs9C+0LvQvtCy0L7QulwifSxcIm5hdmlnYXRpb25cIjp7XCJob21lXCI6XCLQlNC+0LzQvtC5XCIsXCJtZXNzYWdlc1wiOlwi0KHQvtC+0LHRidC10L3QuNGPXCJ9LFwic2V0dGluZ3NcIjp7XCJlbnRlckNpZW50SWRcIjpcItCS0LLQtdC00LjRgtC1IENMSUVOVF9JRFwifX19IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJodG1sLFxcbmJvZHksXFxuI2FwcCB7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmFwcF9fMk5uRlcge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ucGFnZV9fUUVOSXYge1xcbiAgICBmbGV4LWdyb3c6IDE7XFxufVxcblxcbi50b29sYmFyX18yRWpTUyB7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwiYXBwXCI6IFwiYXBwX18yTm5GV1wiLFxuXHRcInBhZ2VcIjogXCJwYWdlX19RRU5JdlwiLFxuXHRcInRvb2xiYXJcIjogXCJ0b29sYmFyX18yRWpTU1wiXG59OyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLm1lc3NhZ2VzX18xN3lDbCB7XFxuICBjdXJzb3I6IGRlZmF1bHQ7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJtZXNzYWdlc1wiOiBcIm1lc3NhZ2VzX18xN3lDbFwiXG59OyIsImV4cG9ydCB0eXBlIEhhbmRsZXI8VCwgUD4gPSAocmVzdWx0OiBUKSA9PiBQIHwgUHJvbWlzZTxQPjtcclxuXHJcbmV4cG9ydCBjb25zdCBIZWFkZXJzID0ge1xyXG4gICAgQWNjZXB0SnNvbjogeyBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXHJcbiAgICBBdXRob3JpemF0aW9uOiAodG9rZW46IHN0cmluZykgPT4gKHsgQXV0aG9yaXphdGlvbjogdG9rZW4gfSksXHJcbiAgICBKc29uQ29udGVudDogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGpzb25IYW5kbGVyID0gPFQ+KHJlc3BvbnNlOiBSZXNwb25zZSk6IFByb21pc2U8VD4gPT5cclxuICAgIHJlc3BvbnNlLmpzb24oKS5jYXRjaCgoKSA9PiBuZXcgRXJyb3IoKSk7XHJcblxyXG5leHBvcnQgY2xhc3MgQXBpUmVxdWVzdDxUID0gUmVzcG9uc2U+IHtcclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0KHVyaTogc3RyaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBBcGlSZXF1ZXN0KHVyaSwgeyBtZXRob2Q6IFwiR0VUXCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBwb3N0KHVyaTogc3RyaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBBcGlSZXF1ZXN0KHVyaSwgeyBtZXRob2Q6IFwiUE9TVFwiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVxdWVzdDogUmVxdWVzdDtcclxuICAgIHByaXZhdGUgaGFuZGxlcnM6IEhhbmRsZXI8dW5rbm93biwgdW5rbm93bj5bXTtcclxuXHJcbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIGlucHV0OiBSZXF1ZXN0SW5mbyxcclxuICAgICAgICBpbml0OiBSZXF1ZXN0SW5pdCA9IHt9LFxyXG4gICAgICAgIGhhbmRsZXJzOiBIYW5kbGVyPHVua25vd24sIHVua25vd24+W10gPSBbXSxcclxuICAgICkge1xyXG4gICAgICAgIHRoaXMucmVxdWVzdCA9IG5ldyBSZXF1ZXN0KGlucHV0LCBpbml0KTtcclxuICAgICAgICB0aGlzLmhhbmRsZXJzID0gaGFuZGxlcnM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHdpdGhIZWFkZXJzKC4uLmV4dHJhSGVhZGVyczogSGVhZGVyc0luaXRbXSkge1xyXG4gICAgICAgIGNvbnN0IGhlYWRlcnM6IEhlYWRlcnNJbml0ID0gZXh0cmFIZWFkZXJzLnJlZHVjZShcclxuICAgICAgICAgICAgKGhlYWRlcnMsIGV4dHJhKSA9PiBPYmplY3QuYXNzaWduKGhlYWRlcnMsIGV4dHJhKSxcclxuICAgICAgICAgICAgeyAuLi4odGhpcy5yZXF1ZXN0LmhlYWRlcnMgfHwge30pIH0sXHJcbiAgICAgICAgKTtcclxuICAgICAgICByZXR1cm4gbmV3IEFwaVJlcXVlc3QodGhpcy5yZXF1ZXN0LCB7IGhlYWRlcnMgfSwgdGhpcy5oYW5kbGVycyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGhhbmRsZXIgPSA8UD4oaGFuZGxlcjogKHJlc3VsdDogVCkgPT4gUCB8IFByb21pc2U8UD4pOiBBcGlSZXF1ZXN0PFA+ID0+IHtcclxuICAgICAgICByZXR1cm4gbmV3IEFwaVJlcXVlc3QodGhpcy5yZXF1ZXN0LCB7fSwgWy4uLnRoaXMuaGFuZGxlcnMsIGhhbmRsZXJdKTtcclxuICAgIH07XHJcblxyXG4gICAgcHVibGljIGV4ZWN1dGUgPSAoKTogUHJvbWlzZTxUPiA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlcnMucmVkdWNlKFxyXG4gICAgICAgICAgICAocHJvbWlzZTogUHJvbWlzZTx1bmtub3duPiwgaGFuZGxlcikgPT4gcHJvbWlzZS50aGVuKGhhbmRsZXIpLFxyXG4gICAgICAgICAgICBmZXRjaCh0aGlzLnJlcXVlc3QpLFxyXG4gICAgICAgICkgYXMgUHJvbWlzZTxUPjtcclxuICAgIH07XHJcbn1cclxuIiwiaW1wb3J0IHsgQXBpUmVxdWVzdCwganNvbkhhbmRsZXIgfSBmcm9tIFwiYXBpL2FwaVJlcXVlc3RcIjtcclxuXHJcbmNvbnN0IGJhc2VVcmkgPSBcImh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2dtYWlsL3YxXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE1lc3NhZ2Uge1xyXG4gICAgaWQ6IHN0cmluZztcclxuICAgIHRocmVhZElkOiBzdHJpbmc7XHJcbiAgICBwYXlsb2FkOiBNZXNzYWdlUGF5bG9hZDtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNZXNzYWdlUGF5bG9hZCB7XHJcbiAgICBtaW1lVHlwZTogc3RyaW5nO1xyXG4gICAgaGVhZGVyczogTWVzc2FnZUhlYWRlcltdO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE1lc3NhZ2VIZWFkZXIge1xyXG4gICAgbmFtZTogSGVhZGVyVHlwZTtcclxuICAgIHZhbHVlOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIEhlYWRlclR5cGUge1xyXG4gICAgRnJvbSA9IFwiRnJvbVwiLFxyXG4gICAgU3ViamVjdCA9IFwiU3ViamVjdFwiLFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0TWVzc2FnZSA9ICh1c2VySWQ6IHN0cmluZywgbWVzc2FnZUlkOiBzdHJpbmcpID0+IHtcclxuICAgIHJldHVybiBBcGlSZXF1ZXN0LmdldChcclxuICAgICAgICBgJHtiYXNlVXJpfS91c2Vycy8ke3VzZXJJZH0vbWVzc2FnZXMvJHttZXNzYWdlSWR9P2Zvcm1hdD1tZXRhZGF0YWAsXHJcbiAgICApLmhhbmRsZXI8TWVzc2FnZT4oanNvbkhhbmRsZXIpO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBBcGlSZXF1ZXN0LCBqc29uSGFuZGxlciB9IGZyb20gXCJhcGkvYXBpUmVxdWVzdFwiO1xuXG5jb25zdCBiYXNlVXJpID0gXCJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9nbWFpbC92MVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIE1lc3NhZ2VMaXN0IHtcbiAgICBtZXNzYWdlczogTWVzc2FnZUluZm9bXTtcbiAgICBuZXh0UGFnZVRva2VuOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWVzc2FnZUluZm8ge1xuICAgIGlkOiBzdHJpbmc7XG4gICAgdGhyZWFkSWQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IGdldE1lc3NhZ2VMaXN0ID0gKHVzZXJJZDogc3RyaW5nLCBtYXhSZXN1bHQ6IG51bWJlciA9IDIwKSA9PiB7XG4gICAgcmV0dXJuIEFwaVJlcXVlc3QuZ2V0KGAke2Jhc2VVcml9L3VzZXJzLyR7dXNlcklkfS9tZXNzYWdlcz9tYXhSZXN1bHRzPSR7bWF4UmVzdWx0fWApLmhhbmRsZXI8XG4gICAgICAgIE1lc3NhZ2VMaXN0XG4gICAgPihqc29uSGFuZGxlcik7XG59O1xuIiwiaW1wb3J0IHsgQXBpUmVxdWVzdCwganNvbkhhbmRsZXIgfSBmcm9tIFwiYXBpL2FwaVJlcXVlc3RcIjtcclxuXHJcbmNvbnN0IGJhc2VVcmkgPSBcImh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2dtYWlsL3YxXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFByb2ZpbGUge1xyXG4gICAgZW1haWxBZGRyZXNzOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRQcm9maWxlID0gKHVzZXJJZDogc3RyaW5nKSA9PiB7XHJcbiAgICByZXR1cm4gQXBpUmVxdWVzdC5nZXQoYCR7YmFzZVVyaX0vdXNlcnMvJHt1c2VySWR9L3Byb2ZpbGVgKS5oYW5kbGVyPFByb2ZpbGU+KGpzb25IYW5kbGVyKTtcclxufTtcclxuIiwiZXhwb3J0ICogZnJvbSBcIi4vZ2V0TWVzc2FnZVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9nZXRNZXNzYWdlTGlzdFwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9nZXRQcm9maWxlXCI7XHJcbiIsImltcG9ydCBpMThuIGZyb20gXCJpMThuZXh0XCI7XG5pbXBvcnQgeyByZWFjdEkxOG5leHRNb2R1bGUgfSBmcm9tIFwicmVhY3QtaTE4bmV4dFwiO1xuXG5pbXBvcnQgcmVzb3VyY2VzIGZyb20gXCIuLi9sb2NhbGVzL2luZGV4LmpzXCI7XG5cbmkxOG4udXNlKHJlYWN0STE4bmV4dE1vZHVsZSkgLy8gcGFzc2VzIGkxOG4gZG93biB0byByZWFjdC1pMThuZXh0XG4gICAgLmluaXQoe1xuICAgICAgICByZXNvdXJjZXMsXG4gICAgICAgIGxuZzogcHJvY2Vzcy5lbnYuTEFOR1VBR0UsXG5cbiAgICAgICAgZGVmYXVsdE5TOiBcImNvbW1vblwiLCAvLyBkZWZhdWx0IG5hbWVzcGFjZVxuXG4gICAgICAgIGtleVNlcGFyYXRvcjogZmFsc2UsIC8vIHdlIGRvIG5vdCB1c2Uga2V5cyBpbiBmb3JtIG1lc3NhZ2VzLndlbGNvbWVcblxuICAgICAgICBpbnRlcnBvbGF0aW9uOiB7XG4gICAgICAgICAgICBlc2NhcGVWYWx1ZTogZmFsc2UsIC8vIHJlYWN0IGFscmVhZHkgc2FmZXMgZnJvbSB4c3NcbiAgICAgICAgfSxcbiAgICB9KTtcblxuZXhwb3J0IGRlZmF1bHQgaTE4bjtcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0ICogYXMgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IENvbm5lY3RlZFJvdXRlciB9IGZyb20gXCJjb25uZWN0ZWQtcmVhY3Qtcm91dGVyXCI7XG5cbmltcG9ydCBcImkxOG5cIjtcblxuaW1wb3J0IHsgY3JlYXRlQnJvd3Nlckhpc3RvcnkgfSBmcm9tIFwiaGlzdG9yeVwiO1xuXG5pbXBvcnQgY29uZmlndXJlU3RvcmUgZnJvbSBcInN0b3JlXCI7XG5cbmltcG9ydCBBcHBsaWNhdGlvbiBmcm9tIFwibW9kdWxlcy9BcHBcIjtcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge307XG5jb25zdCBoaXN0b3J5ID0gY3JlYXRlQnJvd3Nlckhpc3RvcnkoKTtcblxuY29uc3Qgc3RvcmUgPSBjb25maWd1cmVTdG9yZShpbml0aWFsU3RhdGUsIGhpc3RvcnkpO1xuXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tY29uc29sZVxuY29uc29sZS5sb2coXCJwcm9jZXNzLmVudlwiLCBKU09OLnN0cmluZ2lmeShwcm9jZXNzLmVudi5QVUJMSUNfUEFUSCwgbnVsbCwgXCIgXCIpKTtcblxuUmVhY3RET00ucmVuZGVyKFxuICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgICAgICA8Q29ubmVjdGVkUm91dGVyIGhpc3Rvcnk9e2hpc3Rvcnl9PlxuICAgICAgICAgICAgPEFwcGxpY2F0aW9uIC8+XG4gICAgICAgIDwvQ29ubmVjdGVkUm91dGVyPlxuICAgIDwvUHJvdmlkZXI+LFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpLFxuKTtcbiIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvdHlwaW5ncy1mb3ItY3NzLW1vZHVsZXMtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS02LTEhLi9BcHAuY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBQcmVwYXJlIGNzc1RyYW5zZm9ybWF0aW9uXG52YXIgdHJhbnNmb3JtO1xuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvdHlwaW5ncy1mb3ItY3NzLW1vZHVsZXMtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS02LTEhLi9BcHAuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvdHlwaW5ncy1mb3ItY3NzLW1vZHVsZXMtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS02LTEhLi9BcHAuY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGhvdCB9IGZyb20gXCJyZWFjdC1ob3QtbG9hZGVyXCI7XG5cbmltcG9ydCB7IFJvdXRlLCBTd2l0Y2ggfSBmcm9tIFwicmVhY3Qtcm91dGVyXCI7XG5cbmltcG9ydCB7IEFwcEJhciwgQ3NzQmFzZWxpbmUsIEdyaWQgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcblxuaW1wb3J0IHsgTmF2aWdhdGlvbiB9IGZyb20gXCJtb2R1bGVzL25hdmlnYXRpb25cIjtcbmltcG9ydCB7IFByb3RlY3RlZFJvdXRlIH0gZnJvbSBcIm1vZHVsZXMvcm91dGVzL3Byb3RlY3RlZC1yb3V0ZVwiO1xuXG5pbXBvcnQgeyBIb21lIH0gZnJvbSBcIm1vZHVsZXMvcGFnZXMvaG9tZVwiO1xuaW1wb3J0IHsgTG9naW4gfSBmcm9tIFwibW9kdWxlcy9wYWdlcy9sb2dpblwiO1xuaW1wb3J0IHsgTWVzc2FnZXMgfSBmcm9tIFwibW9kdWxlcy9wYWdlcy9tZXNzYWdlc1wiO1xuaW1wb3J0IHsgU2V0dGluZ3MgfSBmcm9tIFwibW9kdWxlcy9wYWdlcy9zZXR0aW5nc1wiO1xuXG5pbXBvcnQgKiBhcyBzdHlsZXMgZnJvbSBcIi4vQXBwLmNzc1wiO1xuXG5jb25zdCBBcHAgPSAoKSA9PiAoXG4gICAgPEdyaWQgY29udGFpbmVyIGNsYXNzTmFtZT17c3R5bGVzLmFwcH0gaXRlbVNjb3BlPlxuICAgICAgICA8Q3NzQmFzZWxpbmUgLz5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxuICAgICAgICAgICAgPEFwcEJhciBwb3NpdGlvbj1cInN0YXRpY1wiPlxuICAgICAgICAgICAgICAgIDxOYXZpZ2F0aW9uIC8+XG4gICAgICAgICAgICA8L0FwcEJhcj5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgICA8R3JpZCBpdGVtIGNsYXNzTmFtZT17c3R5bGVzLnBhZ2V9PlxuICAgICAgICAgICAgPFN3aXRjaD5cbiAgICAgICAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD1cIi9cIiBjb21wb25lbnQ9e0hvbWV9IC8+XG4gICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvbG9naW5cIiBjb21wb25lbnQ9e0xvZ2lufSAvPlxuICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL3NldHRpbmdzXCIgY29tcG9uZW50PXtTZXR0aW5nc30gLz5cbiAgICAgICAgICAgICAgICA8UHJvdGVjdGVkUm91dGUgcGF0aD1cIi9tZXNzYWdlc1wiIGNvbXBvbmVudD17TWVzc2FnZXN9IC8+XG4gICAgICAgICAgICA8L1N3aXRjaD5cbiAgICAgICAgPC9HcmlkPlxuICAgIDwvR3JpZD5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IGhvdChtb2R1bGUpKEFwcCk7XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHsgTmF2TGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTGlua0RhdGEge1xuICAgIHRvOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTGlua0hhbmRsZXJzIHt9XG5cbmNsYXNzIExpbmsgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PExpbmtEYXRhICYgTGlua0hhbmRsZXJzPiB7XG4gICAgcHVibGljIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBjaGlsZHJlbiwgdG8gfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8TmF2TGluayB0bz17dG99IHN0eWxlPXt7IHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIiwgY29sb3I6IFwiaW5oZXJpdFwiIH19PlxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCB7IExpbmssIExpbmsgYXMgZGVmYXVsdCB9O1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCBUYWIsIHsgVGFiUHJvcHMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFiXCI7XG5cbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFRhYkxpbmtQcm9wcyBleHRlbmRzIFRhYlByb3BzIHtcbiAgICB0bzogc3RyaW5nO1xufVxuXG4vLyBIYWNrOiBodHRwczovL2dpdGh1Yi5jb20vbXVpLW9yZy9tYXRlcmlhbC11aS9pc3N1ZXMvOTEwNlxuXG5leHBvcnQgY2xhc3MgVGFiTGluayBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8VGFiTGlua1Byb3BzPiB7XG4gICAgcHVibGljIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyB0bywgLi4udGFiUHJvcHMgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgICAgICAgcmV0dXJuIDxUYWIgey4uLnRhYlByb3BzfSB7Li4ueyBjb21wb25lbnQ6IExpbmssIHRvIH0gYXMgYW55fSAvPjtcbiAgICB9XG59XG4iLCJleHBvcnQgKiBmcm9tIFwiLi9MaW5rXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9UYWJMaW5rXCI7XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTmFtZXNwYWNlc0NvbnN1bWVyIH0gZnJvbSBcInJlYWN0LWkxOG5leHRcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTG9jYWxpemVEYXRhIHtcclxuICAgIGlkOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTG9jYWxpemVIYW5kbGVycyB7XHJcbn1cclxuXHJcbmNsYXNzIExvY2FsaXplIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxMb2NhbGl6ZURhdGEgJiBMb2NhbGl6ZUhhbmRsZXJzPiB7XHJcbiAgICBwdWJsaWMgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgaWQgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPE5hbWVzcGFjZXNDb25zdW1lcj5cclxuICAgICAgICAgICAgICAgIHt0ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdChpZCk7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA8L05hbWVzcGFjZXNDb25zdW1lcj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBMb2NhbGl6ZSwgTG9jYWxpemUgYXMgZGVmYXVsdCB9O1xyXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IFRhYnMgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1RhYnNcIjtcblxuaW1wb3J0IHsgVGFiTGluayB9IGZyb20gXCJtb2R1bGVzL2xpbmtcIjtcbmltcG9ydCB7IExvY2FsaXplIH0gZnJvbSBcIm1vZHVsZXMvbG9jYWxpemVcIjtcblxuZXhwb3J0IGludGVyZmFjZSBOYXZpZ2F0aW9uRGF0YSB7XG4gICAgcGF0aDogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5hdmlnYXRpb25IYW5kbGVycyB7fVxuXG5leHBvcnQgY2xhc3MgTmF2aWdhdGlvbiBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8TmF2aWdhdGlvbkRhdGEgJiBOYXZpZ2F0aW9uSGFuZGxlcnM+IHtcbiAgICBwdWJsaWMgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IHBhdGggfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxUYWJzIHZhbHVlPXtwYXRofT5cbiAgICAgICAgICAgICAgICA8VGFiTGluayB2YWx1ZT1cIi9cIiB0bz1cIi9cIiBsYWJlbD17PExvY2FsaXplIGlkPXtcIm5hdmlnYXRpb246aG9tZVwifSAvPn0gLz5cbiAgICAgICAgICAgICAgICA8VGFiTGluayB2YWx1ZT1cIi9zZXR0aW5nc1wiIHRvPVwiL3NldHRpbmdzXCIgbGFiZWw9ezxMb2NhbGl6ZSBpZD17XCJuYXZpZ2F0aW9uOnNldHRpbmdzXCJ9IC8+fSAvPlxuICAgICAgICAgICAgICAgIDxUYWJMaW5rXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiL21lc3NhZ2VzXCJcbiAgICAgICAgICAgICAgICAgICAgdG89XCIvbWVzc2FnZXNcIlxuICAgICAgICAgICAgICAgICAgICBsYWJlbD17PExvY2FsaXplIGlkPXtcIm5hdmlnYXRpb246bWVzc2FnZXNcIn0gLz59XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvVGFicz5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmlnYXRpb247XG4iLCJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5cbmltcG9ydCB7IFJvb3RTdGF0ZSB9IGZyb20gXCJyZWR1Y2Vyc1wiO1xuXG5pbXBvcnQgTmF2aWdhdGlvbiwgeyBOYXZpZ2F0aW9uRGF0YSwgTmF2aWdhdGlvbkhhbmRsZXJzIH0gZnJvbSBcIi4vTmF2aWdhdGlvblwiO1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGU6IFJvb3RTdGF0ZSk6IE5hdmlnYXRpb25EYXRhID0+IHtcbiAgICBjb25zdCBwYXRoID0gc3RhdGUucm91dGVyLmxvY2F0aW9uLnBhdGhuYW1lO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcGF0aCxcbiAgICB9O1xufTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzOiBOYXZpZ2F0aW9uSGFuZGxlcnMgPSB7fTtcblxuY29uc3QgTmF2aWdhdGlvbk1vZHVsZSA9IGNvbm5lY3QoXG4gICAgbWFwU3RhdGVUb1Byb3BzLFxuICAgIG1hcERpc3BhdGNoVG9Qcm9wcyxcbikoTmF2aWdhdGlvbik7XG5cbmV4cG9ydCB7IE5hdmlnYXRpb25Nb2R1bGUgYXMgZGVmYXVsdCwgTmF2aWdhdGlvbk1vZHVsZSBhcyBOYXZpZ2F0aW9uIH07XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCI7XG5pbXBvcnQgR3JpZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZFwiO1xuXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcIm1vZHVsZXMvbGlua1wiO1xuaW1wb3J0IHsgTG9jYWxpemUgfSBmcm9tIFwibW9kdWxlcy9sb2NhbGl6ZVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEhvbWVEYXRhIHt9XG5cbmV4cG9ydCBpbnRlcmZhY2UgSG9tZUhhbmRsZXJzIHt9XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWUgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PEhvbWVEYXRhICYgSG9tZUhhbmRsZXJzPiB7XG4gICAgcHVibGljIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBqdXN0aWZ5PVwiY2VudGVyXCIgYWxpZ25JdGVtcz1cImNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL21lc3NhZ2VzXCI+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIGNvbG9yPVwicHJpbWFyeVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExvY2FsaXplIGlkPVwiaG9tZTp2aWV3TWVzc2FnZXNcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuXG5pbXBvcnQgeyBSb290U3RhdGUgfSBmcm9tIFwicmVkdWNlcnNcIjtcblxuaW1wb3J0IEhvbWUsIHsgSG9tZURhdGEsIEhvbWVIYW5kbGVycyB9IGZyb20gXCIuL0hvbWVcIjtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKF9zdGF0ZTogUm9vdFN0YXRlKTogSG9tZURhdGEgPT4ge1xuICAgIHJldHVybiB7fTtcbn07XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wczogSG9tZUhhbmRsZXJzID0ge307XG5cbmNvbnN0IEhvbWVNb2R1bGUgPSBjb25uZWN0KFxuICAgIG1hcFN0YXRlVG9Qcm9wcyxcbiAgICBtYXBEaXNwYXRjaFRvUHJvcHMsXG4pKEhvbWUpO1xuXG5leHBvcnQgeyBIb21lTW9kdWxlIGFzIGRlZmF1bHQsIEhvbWVNb2R1bGUgYXMgSG9tZSB9O1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7IFJlZGlyZWN0IH0gZnJvbSBcInJlYWN0LXJvdXRlclwiO1xuXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIjtcbmltcG9ydCBHcmlkIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCI7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiO1xuXG5pbXBvcnQgeyBMb2NhbGl6ZSB9IGZyb20gXCJtb2R1bGVzL2xvY2FsaXplXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9naW5EYXRhIHtcbiAgICBpc0F1dGhlbnRpY2F0ZWQ6IGJvb2xlYW47XG4gICAgcmVkaXJlY3RQYXRoPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIExvZ2luSGFuZGxlcnMge1xuICAgIHNpZ25VcDogKCkgPT4gdm9pZDtcbn1cblxuY2xhc3MgTG9naW4gZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PExvZ2luRGF0YSAmIExvZ2luSGFuZGxlcnM+IHtcbiAgICBwdWJsaWMgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IGlzQXV0aGVudGljYXRlZCwgcmVkaXJlY3RQYXRoIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIGlmIChpc0F1dGhlbnRpY2F0ZWQpIHtcbiAgICAgICAgICAgIHJldHVybiA8UmVkaXJlY3QgdG89e3JlZGlyZWN0UGF0aH0gLz47XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIGp1c3RpZnk9XCJjZW50ZXJcIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgZGlyZWN0aW9uPVwiY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgY29sb3I9XCJpbmhlcml0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TG9jYWxpemUgaWQ9XCJsb2dpbjpuZWVkQXV0aG9yaXplXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBjb2xvcj1cInByaW1hcnlcIiBvbkNsaWNrPXt0aGlzLnByb3BzLnNpZ25VcH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TG9jYWxpemUgaWQ9XCJsb2dpbjpzaWduVXBcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMb2dpbjtcbiIsImltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuXHJcbmltcG9ydCB7IFJvb3RTdGF0ZSB9IGZyb20gXCJyZWR1Y2Vyc1wiO1xyXG5pbXBvcnQgeyBzaWduVXAgfSBmcm9tIFwicmVkdWNlcnMvYWN0aW9uc1wiO1xyXG5cclxuaW1wb3J0IExvZ2luLCB7IExvZ2luRGF0YSwgTG9naW5IYW5kbGVycyB9IGZyb20gXCIuL0xvZ2luXCI7XHJcblxyXG5jb25zdCBnZXRSZWRpcmVjdFBhdGggPSAocGF0aDogc3RyaW5nKSA9PiB7XHJcbiAgICBjb25zdCByZXN1bHQgPSAvLipyZWRpcmVjdFBhdGg9KD88cGF0aD4uKikuKi8uZXhlYyhwYXRoKTtcclxuICAgIHJldHVybiAocmVzdWx0ICYmIHJlc3VsdFsxXSkgfHwgXCIvXCI7XHJcbn07XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGU6IFJvb3RTdGF0ZSk6IExvZ2luRGF0YSA9PiB7XHJcbiAgICBjb25zdCByZWRpcmVjdFBhdGggPSBnZXRSZWRpcmVjdFBhdGgoc3RhdGUucm91dGVyLmxvY2F0aW9uLnNlYXJjaCk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBpc0F1dGhlbnRpY2F0ZWQ6IEJvb2xlYW4oc3RhdGUuYXV0aC50b2tlbkluZm8pLFxyXG4gICAgICAgIHJlZGlyZWN0UGF0aCxcclxuICAgIH07XHJcbn07XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHM6IExvZ2luSGFuZGxlcnMgPSB7XHJcbiAgICBzaWduVXAsXHJcbn07XHJcblxyXG5jb25zdCBMb2dpbk1vZHVsZSA9IGNvbm5lY3QoXHJcbiAgICBtYXBTdGF0ZVRvUHJvcHMsXHJcbiAgICBtYXBEaXNwYXRjaFRvUHJvcHMsXHJcbikoTG9naW4pO1xyXG5cclxuZXhwb3J0IHsgTG9naW5Nb2R1bGUgYXMgZGVmYXVsdCwgTG9naW5Nb2R1bGUgYXMgTG9naW4gfTtcclxuIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy90eXBpbmdzLWZvci1jc3MtbW9kdWxlcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTctMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL01lc3NhZ2VzLnNjc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIFByZXBhcmUgY3NzVHJhbnNmb3JtYXRpb25cbnZhciB0cmFuc2Zvcm07XG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy90eXBpbmdzLWZvci1jc3MtbW9kdWxlcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTctMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL01lc3NhZ2VzLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy90eXBpbmdzLWZvci1jc3MtbW9kdWxlcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTctMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL01lc3NhZ2VzLnNjc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBjbGFzc05hbWVzID0gcmVxdWlyZShcImNsYXNzbmFtZXMvYmluZFwiKTtcblxuaW1wb3J0IENpcmN1bGFyUHJvZ3Jlc3MgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0NpcmN1bGFyUHJvZ3Jlc3NcIjtcbmltcG9ydCBHcmlkIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCI7XG5pbXBvcnQgUGFwZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1BhcGVyXCI7XG5pbXBvcnQgVGFibGUgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlXCI7XG5pbXBvcnQgVGFibGVCb2R5IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUJvZHlcIjtcbmltcG9ydCBUYWJsZUNlbGwgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlQ2VsbFwiO1xuaW1wb3J0IFRhYmxlSGVhZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVIZWFkXCI7XG5pbXBvcnQgVGFibGVSb3cgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlUm93XCI7XG5cbmltcG9ydCBMb2NhbGl6ZSBmcm9tIFwibW9kdWxlcy9sb2NhbGl6ZVwiO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL01lc3NhZ2VzLnNjc3NcIjtcbmNvbnN0IHN0eWxlID0gY2xhc3NOYW1lcy5iaW5kKHN0eWxlcyk7XG5cbmltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tIFwiLi90eXBlc1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIE1lc3NhZ2VzRGF0YSB7XG4gICAgaXNMb2FkaW5nOiBib29sZWFuO1xuICAgIG1lc3NhZ2VzPzogTWVzc2FnZVtdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1lc3NhZ2VzSGFuZGxlcnMge31cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVzc2FnZXMgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PE1lc3NhZ2VzRGF0YSAmIE1lc3NhZ2VzSGFuZGxlcnM+IHtcbiAgICBwdWJsaWMgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IGlzTG9hZGluZyB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIGp1c3RpZnk9XCJjZW50ZXJcIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgY2xhc3NOYW1lPXtzdHlsZShzdHlsZXMubWVzc2FnZXMpfT5cbiAgICAgICAgICAgICAgICB7aXNMb2FkaW5nID8gdGhpcy5yZW5kZXJQcmVsb2FkZXIoKSA6IHRoaXMucmVuZGVyQ29udGVudCgpfVxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICApO1xuICAgIH1cblxuICAgIHByaXZhdGUgcmVuZGVyUHJlbG9hZGVyID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gPENpcmN1bGFyUHJvZ3Jlc3MgLz47XG4gICAgfTtcblxuICAgIHByaXZhdGUgcmVuZGVyQ29udGVudCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgeyBtZXNzYWdlcyB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICBpZiAoIW1lc3NhZ2VzKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8UGFwZXI+XG4gICAgICAgICAgICAgICAgPFRhYmxlPlxuICAgICAgICAgICAgICAgICAgICA8VGFibGVIZWFkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlUm93PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMb2NhbGl6ZSBpZD1cIm1lc3NhZ2VzOmZyb21cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMb2NhbGl6ZSBpZD1cIm1lc3NhZ2VzOnN1YmplY3RcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZVJvdz5cbiAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUhlYWQ+XG4gICAgICAgICAgICAgICAgICAgIDxUYWJsZUJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICB7bWVzc2FnZXMubWFwKHJvdyA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlUm93IGtleT17cm93LmlkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD57cm93LmZyb219PC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+e3Jvdy5zdWJqZWN0fTwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVSb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUJvZHk+XG4gICAgICAgICAgICAgICAgPC9UYWJsZT5cbiAgICAgICAgICAgIDwvUGFwZXI+XG4gICAgICAgICk7XG4gICAgfTtcbn1cbiIsImltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcblxuaW1wb3J0IHsgUm9vdFN0YXRlIH0gZnJvbSBcInJlZHVjZXJzXCI7XG5cbmltcG9ydCBNZXNzYWdlcywgeyBNZXNzYWdlc0RhdGEsIE1lc3NhZ2VzSGFuZGxlcnMgfSBmcm9tIFwiLi9NZXNzYWdlc1wiO1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGU6IFJvb3RTdGF0ZSk6IE1lc3NhZ2VzRGF0YSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbWVzc2FnZXM6IHN0YXRlLm1lc3NhZ2VzLml0ZW1zLFxuICAgICAgICBpc0xvYWRpbmc6IHN0YXRlLm1lc3NhZ2VzLmlzTG9hZGluZyxcbiAgICB9O1xufTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzOiBNZXNzYWdlc0hhbmRsZXJzID0ge307XG5cbmNvbnN0IE1lc3NhZ2VzTW9kdWxlID0gY29ubmVjdChcbiAgICBtYXBTdGF0ZVRvUHJvcHMsXG4gICAgbWFwRGlzcGF0Y2hUb1Byb3BzLFxuKShNZXNzYWdlcyk7XG5cbmV4cG9ydCB7IE1lc3NhZ2VzTW9kdWxlIGFzIGRlZmF1bHQsIE1lc3NhZ2VzTW9kdWxlIGFzIE1lc3NhZ2VzIH07XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IEdyaWQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRcIjtcblxuaW1wb3J0IHsgTG9jYWxpemUgfSBmcm9tIFwibW9kdWxlcy9sb2NhbGl6ZVwiO1xuaW1wb3J0IFRleHRGaWVsZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkXCI7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNldHRpbmdzRGF0YSB7XG4gICAgY2xpZW50SWQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTZXR0aW5nc0hhbmRsZXJzIHtcbiAgICBvbkNoYW5nZUNsaWVudElkOiAoY2xpZW50SWQ6IHN0cmluZykgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2V0dGluZ3MgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PFNldHRpbmdzRGF0YSAmIFNldHRpbmdzSGFuZGxlcnM+IHtcbiAgICBwdWJsaWMgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IGNsaWVudElkIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIGp1c3RpZnk9XCJjZW50ZXJcIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgZGlyZWN0aW9uPVwiY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgY29sb3I9XCJpbmhlcml0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TG9jYWxpemUgaWQ9XCJzZXR0aW5nczplbnRlckNpZW50SWRcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwib3V0bGluZWQtbmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17PExvY2FsaXplIGlkPVwic2V0dGluZ3M6Y2xpZW50SWRcIiAvPn1cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtjbGllbnRJZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGhhbmRsZUNoYW5nZSA9IChldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICAgICAgY29uc3QgY2xpZW50SWQgPSBldmVudC5jdXJyZW50VGFyZ2V0LnZhbHVlO1xuXG4gICAgICAgIGNvbnN0IHsgb25DaGFuZ2VDbGllbnRJZCB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgb25DaGFuZ2VDbGllbnRJZChjbGllbnRJZCk7XG4gICAgfTtcbn1cbiIsImltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcblxuaW1wb3J0IHsgUm9vdFN0YXRlIH0gZnJvbSBcInJlZHVjZXJzXCI7XG5cbmltcG9ydCBTZXR0aW5ncywgeyBTZXR0aW5nc0RhdGEsIFNldHRpbmdzSGFuZGxlcnMgfSBmcm9tIFwiLi9TZXR0aW5nc1wiO1xuaW1wb3J0IHsgc2V0R21haWxDbGllbnRJZCB9IGZyb20gXCJyZWR1Y2Vycy9hY3Rpb25zXCI7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZTogUm9vdFN0YXRlKTogU2V0dGluZ3NEYXRhID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICBjbGllbnRJZDogc3RhdGUuc2V0dGluZ3MuY2xpZW50SWQgfHwgXCJcIixcbiAgICB9O1xufTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzOiBTZXR0aW5nc0hhbmRsZXJzID0ge1xuICAgIG9uQ2hhbmdlQ2xpZW50SWQ6IHNldEdtYWlsQ2xpZW50SWQsXG59O1xuXG5jb25zdCBTZXR0aW5nc01vZHVsZSA9IGNvbm5lY3QoXG4gICAgbWFwU3RhdGVUb1Byb3BzLFxuICAgIG1hcERpc3BhdGNoVG9Qcm9wcyxcbikoU2V0dGluZ3MpO1xuXG5leHBvcnQgeyBTZXR0aW5nc01vZHVsZSBhcyBkZWZhdWx0LCBTZXR0aW5nc01vZHVsZSBhcyBTZXR0aW5ncyB9O1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgeyBSZWRpcmVjdCwgUm91dGUsIFJvdXRlUHJvcHMgfSBmcm9tIFwicmVhY3Qtcm91dGVyXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFByb3RlY3RlZFJvdXRlRGF0YSBleHRlbmRzIFJvdXRlUHJvcHMge1xyXG4gICAgaXNBdXRoZW50aWNhdGVkOiBib29sZWFuO1xyXG4gICAgY3VycmVudFBhdGg6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQcm90ZWN0ZWRSb3V0ZUhhbmRsZXJzIHt9XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm90ZWN0ZWRSb3V0ZSBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8XHJcbiAgICBQcm90ZWN0ZWRSb3V0ZURhdGEgJiBQcm90ZWN0ZWRSb3V0ZUhhbmRsZXJzXHJcbj4ge1xyXG4gICAgcHVibGljIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IGlzQXV0aGVudGljYXRlZCwgY3VycmVudFBhdGgsIC4uLm90aGVyUHJvcHMgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIGlmICghaXNBdXRoZW50aWNhdGVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiA8UmVkaXJlY3QgdG89e2AvbG9naW4/cmVkaXJlY3RQYXRoPSR7Y3VycmVudFBhdGh9YH0gLz47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gPFJvdXRlIHsuLi5vdGhlclByb3BzfSAvPjtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tIFwicmVkdXhcIjtcclxuaW1wb3J0IHsgY29ubmVjdEFkdmFuY2VkIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcblxyXG5pbXBvcnQgeyBSb290U3RhdGUgfSBmcm9tIFwicmVkdWNlcnNcIjtcclxuXHJcbmltcG9ydCBQcm90ZWN0ZWRSb3V0ZSBmcm9tIFwiLi9Qcm90ZWN0ZWRSb3V0ZVwiO1xyXG5cclxuLy8gVE9ETzogQWRkIENvbXBvbmVudCB0eXBlcyBpbmZlcmVuY2VcclxuaW1wb3J0IHsgUm91dGVQcm9wcyB9IGZyb20gXCJyZWFjdC1yb3V0ZXJcIjtcclxuaW1wb3J0IHsgUHJvdGVjdGVkUm91dGVEYXRhLCBQcm90ZWN0ZWRSb3V0ZUhhbmRsZXJzIH0gZnJvbSBcIi4vUHJvdGVjdGVkUm91dGVcIjtcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZTogUm9vdFN0YXRlKTogUHJvdGVjdGVkUm91dGVEYXRhID0+IHtcclxuICAgIC8vIFRPRE86IEFkZCB0b2tlbiB2YWxpZGF0aW9uXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGlzQXV0aGVudGljYXRlZDogQm9vbGVhbihzdGF0ZS5hdXRoLnRva2VuSW5mbyksXHJcbiAgICAgICAgY3VycmVudFBhdGg6IHN0YXRlLnJvdXRlci5sb2NhdGlvbi5wYXRobmFtZSxcclxuICAgIH07XHJcbn07XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpOiBQcm90ZWN0ZWRSb3V0ZUhhbmRsZXJzID0+IHtcclxuICAgIGNvbnN0IGFjdGlvbkNyZWF0b3JzID0ge307XHJcbiAgICByZXR1cm4gYmluZEFjdGlvbkNyZWF0b3JzKGFjdGlvbkNyZWF0b3JzLCBkaXNwYXRjaCk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBzZWxlY3RvckZhY3RvcnkoZGlzcGF0Y2gpIHtcclxuICAgIGNvbnN0IGFjdGlvbnMgPSBtYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2gpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgbmV4dFN0YXRlOiBSb290U3RhdGUsXHJcbiAgICAgICAgbmV3T3duUHJvcHM6IFJvdXRlUHJvcHMsXHJcbiAgICApOiBQcm90ZWN0ZWRSb3V0ZURhdGEgJiBQcm90ZWN0ZWRSb3V0ZUhhbmRsZXJzID0+ICh7XHJcbiAgICAgICAgLi4ubWFwU3RhdGVUb1Byb3BzKG5leHRTdGF0ZSksXHJcbiAgICAgICAgLi4uYWN0aW9ucyxcclxuICAgICAgICAuLi5uZXdPd25Qcm9wcyxcclxuICAgIH0pO1xyXG59XHJcblxyXG5jb25zdCBQcm90ZWN0ZWRSb3V0ZU1vZHVsZSA9IGNvbm5lY3RBZHZhbmNlZChzZWxlY3RvckZhY3RvcnkpKFByb3RlY3RlZFJvdXRlKTtcclxuXHJcbmV4cG9ydCB7IFByb3RlY3RlZFJvdXRlTW9kdWxlIGFzIGRlZmF1bHQsIFByb3RlY3RlZFJvdXRlTW9kdWxlIGFzIFByb3RlY3RlZFJvdXRlIH07XHJcbiIsImltcG9ydCB7IEFjdGlvbiBhcyBSZWR1eEFjdGlvbiB9IGZyb20gXCJyZWR1eFwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFjdGlvbjxUIGV4dGVuZHMgc3RyaW5nID0gc3RyaW5nPiBleHRlbmRzIFJlZHV4QWN0aW9uIHtcbiAgICByZWFkb25seSB0eXBlOiBUO1xufVxuXG5leHBvcnQgdHlwZSBBY3Rpb25XaXRoUGF5bG9hZDxUIGV4dGVuZHMgc3RyaW5nLCBQYXlsb2FkPiA9IEFjdGlvbjxUPiAmIFBheWxvYWQ7XG5cbmludGVyZmFjZSBBY3Rpb25DcmVhdG9yPFQgZXh0ZW5kcyBzdHJpbmcgPSBzdHJpbmc+IHtcbiAgICAoKTogQWN0aW9uPFQ+O1xuICAgIHR5cGU6IFQ7XG59XG5cbmludGVyZmFjZSBBY3Rpb25XaXRoUGF5bG9hZENyZWF0b3I8XG4gICAgVCBleHRlbmRzIHN0cmluZyA9IHN0cmluZyxcbiAgICBBcmdzVHlwZSBleHRlbmRzIHVua25vd25bXSA9IFtdLFxuICAgIFBheWxvYWRUeXBlID0ge31cbj4ge1xuICAgICguLi5hcmdzOiBBcmdzVHlwZSk6IEFjdGlvbldpdGhQYXlsb2FkPFQsIFBheWxvYWRUeXBlPjtcbiAgICB0eXBlOiBUO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWN0aW9uQ3JlYXRvcjxUIGV4dGVuZHMgc3RyaW5nPih0eXBlOiBUKTogQWN0aW9uQ3JlYXRvcjxUPjtcbmV4cG9ydCBmdW5jdGlvbiBhY3Rpb25DcmVhdG9yPFQgZXh0ZW5kcyBzdHJpbmcsIEFyZ3NUeXBlIGV4dGVuZHMgdW5rbm93bltdLCBQYXlsb2FkVHlwZT4oXG4gICAgdHlwZTogVCxcbiAgICBtYXBwZXI/OiAoLi4uYXJnczogQXJnc1R5cGUpID0+IFBheWxvYWRUeXBlLFxuKTogQWN0aW9uV2l0aFBheWxvYWRDcmVhdG9yPFQsIEFyZ3NUeXBlLCBQYXlsb2FkVHlwZT47XG5cbmV4cG9ydCBmdW5jdGlvbiBhY3Rpb25DcmVhdG9yKHR5cGUsIG1hcHBlcj8pIHtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gICAgY29uc3QgYWN0aW9uQ3JlYXRvcjogYW55ID0gZnVuY3Rpb24oLi4uYXJncykge1xuICAgICAgICBjb25zdCBwYXlsb2FkID0gbWFwcGVyID8gbWFwcGVyKC4uLmFyZ3MpIDogdW5kZWZpbmVkO1xuICAgICAgICByZXR1cm4gY3JlYXRlQWN0aW9uKHR5cGUsIHBheWxvYWQpO1xuICAgIH07XG5cbiAgICBhY3Rpb25DcmVhdG9yLnR5cGUgPSB0eXBlO1xuXG4gICAgcmV0dXJuIGFjdGlvbkNyZWF0b3I7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVBY3Rpb248VCBleHRlbmRzIHN0cmluZywgUD4odHlwZTogVCk6IEFjdGlvbjxUPjtcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVBY3Rpb248VCBleHRlbmRzIHN0cmluZywgUD4odHlwZTogVCwgcGF5bG9hZDogUCk6IEFjdGlvbldpdGhQYXlsb2FkPFQsIFA+O1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQWN0aW9uKHR5cGUsIHBheWxvYWQ/KSB7XG4gICAgcmV0dXJuIHBheWxvYWQgPT09IHVuZGVmaW5lZCA/IHsgdHlwZSB9IDogeyB0eXBlLCAuLi5wYXlsb2FkIH07XG59XG4iLCJleHBvcnQgeyBBY3Rpb24sIEFjdGlvbldpdGhQYXlsb2FkIH0gZnJvbSBcIi4vYWN0aW9uLWhlbHBlcnNcIjtcblxuZXhwb3J0ICogZnJvbSBcIi4vbWVzc2FnZXNcIjtcbmV4cG9ydCAqIGZyb20gXCIuL3Byb2ZpbGVcIjtcbmV4cG9ydCAqIGZyb20gXCIuL3NldHRpbmdzXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9zaWduVXBcIjtcbiIsImltcG9ydCB7IGFjdGlvbkNyZWF0b3IgfSBmcm9tIFwiLi9hY3Rpb24taGVscGVyc1wiO1xuXG5pbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSBcIm1vZGVsL21lc3NhZ2VcIjtcblxuZXhwb3J0IGNvbnN0IGxvYWRNZXNzYWdlcyA9IGFjdGlvbkNyZWF0b3IoXCJtZXNzYWdlcy9MT0FEXCIpO1xuXG5leHBvcnQgY29uc3QgbG9hZE1lc3NhZ2VzU3VjY2VzcyA9IGFjdGlvbkNyZWF0b3IoXG4gICAgXCJtZXNzYWdlcy9MT0FEX1NVQ0NFU1NcIixcbiAgICAobWVzc2FnZXM6IE1lc3NhZ2VbXSkgPT4gKHtcbiAgICAgICAgbWVzc2FnZXMsXG4gICAgfSksXG4pO1xuXG5leHBvcnQgY29uc3QgbG9hZE1lc3NhZ2VzRmFpbHVyZSA9IGFjdGlvbkNyZWF0b3IoXG4gICAgXCJtZXNzYWdlcy9MT0FEX0ZBSUxVUkVcIixcbiAgICAoZXJvcnI6IEVycm9yLCBtZXNzYWdlOiBzdHJpbmcpID0+ICh7IGVyb3JyLCBtZXNzYWdlIH0pLFxuKTtcbiIsImltcG9ydCB7IGFjdGlvbkNyZWF0b3IgfSBmcm9tIFwiLi9hY3Rpb24taGVscGVyc1wiO1xuXG5pbXBvcnQgeyBQcm9maWxlIH0gZnJvbSBcIm1vZGVsL3Byb2ZpbGVcIjtcblxuZXhwb3J0IGNvbnN0IHJlcXVlc3RQcm9maWxlID0gYWN0aW9uQ3JlYXRvcihcInByb2ZpbGUvUFJPRklMRV9SRVFVRVNUXCIpO1xuXG5leHBvcnQgY29uc3QgcmVxdWVzdFByb2ZpbGVTdWNjZXNzID0gYWN0aW9uQ3JlYXRvcihcInByb2ZpbGUvUFJPRklMRV9TVUNDRVNTXCIsIChwcm9maWxlOiBQcm9maWxlKSA9PiAoe1xuICAgIHByb2ZpbGUsXG59KSk7XG5cbmV4cG9ydCBjb25zdCByZXF1ZXN0UHJvZmlsZUZhaWx1cmUgPSBhY3Rpb25DcmVhdG9yKFxuICAgIFwicHJvZmlsZS9QUk9GSUxFX0ZBSUxVUkVcIixcbiAgICAoZXJvcnI6IEVycm9yLCBtZXNzYWdlOiBzdHJpbmcpID0+ICh7IGVyb3JyLCBtZXNzYWdlIH0pLFxuKTtcbiIsImltcG9ydCB7IGFjdGlvbkNyZWF0b3IgfSBmcm9tIFwiLi9hY3Rpb24taGVscGVyc1wiO1xuXG5leHBvcnQgY29uc3Qgc2V0R21haWxDbGllbnRJZCA9IGFjdGlvbkNyZWF0b3IoXG4gICAgXCJzZXR0aW5ncy9TRVRfR01BSUxfQ0xJRU5UX0lEXCIsXG4gICAgKGNsaWVudElkOiBzdHJpbmcpID0+ICh7XG4gICAgICAgIGNsaWVudElkLFxuICAgIH0pLFxuKTtcbiIsImltcG9ydCB7IGFjdGlvbkNyZWF0b3IgfSBmcm9tIFwiLi9hY3Rpb24taGVscGVyc1wiO1xyXG5cclxuaW1wb3J0IHsgVG9rZW5JbmZvIH0gZnJvbSBcIm1vZGVsXCI7XHJcblxyXG5leHBvcnQgY29uc3Qgc2lnblVwID0gYWN0aW9uQ3JlYXRvcihcInNpZ25VcC9TSUdOX1VQX1JFUVVFU1RcIik7XHJcblxyXG5leHBvcnQgY29uc3Qgc2lnblVwU3VjY2VzcyA9IGFjdGlvbkNyZWF0b3IoXCJzaWduVXAvU0lHTl9VUF9TVUNDRVNTXCIsICh0b2tlbkluZm86IFRva2VuSW5mbykgPT4gKHtcclxuICAgIHRva2VuSW5mbyxcclxufSkpO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNpZ25VcEZhaWwgPSBhY3Rpb25DcmVhdG9yKFxyXG4gICAgXCJzaWduVXAvU0lHTl9VUF9GQUlMVVJFXCIsXHJcbiAgICAoZXJvcnI6IEVycm9yLCBtZXNzYWdlOiBzdHJpbmcpID0+ICh7IGVyb3JyLCBtZXNzYWdlIH0pLFxyXG4pO1xyXG4iLCJpbXBvcnQgeyBSZWR1Y2VyIH0gZnJvbSBcInJlZHV4XCI7XG5pbXBvcnQgeyBBY3Rpb25zIH0gZnJvbSBcInJlZHVjZXJzXCI7XG5cbmltcG9ydCB7IFRva2VuSW5mbyB9IGZyb20gXCJtb2RlbFwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFN0YXRlIHtcbiAgICB0b2tlbkluZm8/OiBUb2tlbkluZm87XG4gICAgZXJyb3JNZXNzYWdlPzogc3RyaW5nO1xufVxuXG5jb25zdCByZWR1Y2VyOiBSZWR1Y2VyPFN0YXRlPiA9IChzdGF0ZSA9IHt9LCBhY3Rpb246IEFjdGlvbnMpID0+IHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgXCJzaWduVXAvU0lHTl9VUF9SRVFVRVNUXCI6IHtcbiAgICAgICAgICAgIHJldHVybiB7fTtcbiAgICAgICAgfVxuICAgICAgICBjYXNlIFwic2lnblVwL1NJR05fVVBfU1VDQ0VTU1wiOiB7XG4gICAgICAgICAgICBjb25zdCB7IHRva2VuSW5mbyB9ID0gYWN0aW9uO1xuICAgICAgICAgICAgcmV0dXJuIHsgdG9rZW5JbmZvIH07XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBcInNpZ25VcC9TSUdOX1VQX0ZBSUxVUkVcIjoge1xuICAgICAgICAgICAgY29uc3QgeyBtZXNzYWdlIH0gPSBhY3Rpb247XG4gICAgICAgICAgICByZXR1cm4geyBlcnJvck1lc3NhZ2U6IG1lc3NhZ2UgfTtcbiAgICAgICAgfVxuICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xuIiwiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSBcInJlZHV4XCI7XG5pbXBvcnQgeyBjb25uZWN0Um91dGVyIH0gZnJvbSBcImNvbm5lY3RlZC1yZWFjdC1yb3V0ZXJcIjtcblxuaW1wb3J0IGF1dGggZnJvbSBcIi4vYXV0aFwiO1xuaW1wb3J0IG1lc3NhZ2VzIGZyb20gXCIuL21lc3NhZ2VzXCI7XG5pbXBvcnQgcHJvZmlsZSBmcm9tIFwiLi9wcm9maWxlXCI7XG5pbXBvcnQgc2V0dGluZ3MgZnJvbSBcIi4vc2V0dGluZ3NcIjtcblxuZXhwb3J0IGNvbnN0IHJvb3RSZWR1Y2VyID0gaGlzdG9yeSA9PlxuICAgIGNvbWJpbmVSZWR1Y2Vycyh7XG4gICAgICAgIHJvdXRlcjogY29ubmVjdFJvdXRlcihoaXN0b3J5KSxcblxuICAgICAgICBhdXRoLFxuICAgICAgICBtZXNzYWdlcyxcbiAgICAgICAgcHJvZmlsZSxcbiAgICAgICAgc2V0dGluZ3MsXG4gICAgfSk7XG5cbmV4cG9ydCB7IEFjdGlvbnMgfSBmcm9tIFwiLi9hY3Rpb25UeXBlc1wiO1xuZXhwb3J0IHR5cGUgUm9vdFN0YXRlID0gUmV0dXJuVHlwZTxSZXR1cm5UeXBlPHR5cGVvZiByb290UmVkdWNlcj4+O1xuXG5leHBvcnQgZGVmYXVsdCByb290UmVkdWNlcjtcbiIsImltcG9ydCB7IFJlZHVjZXIgfSBmcm9tIFwicmVkdXhcIjtcbmltcG9ydCB7IEFjdGlvbnMgfSBmcm9tIFwicmVkdWNlcnNcIjtcblxuaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gXCJtb2RlbFwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFN0YXRlIHtcbiAgICBpc0xvYWRpbmc6IGJvb2xlYW47XG4gICAgaXRlbXM/OiBNZXNzYWdlW107XG4gICAgZXJyb3JNZXNzYWdlPzogc3RyaW5nO1xufVxuXG5jb25zdCBEZWZhdWxTdGF0ZTogU3RhdGUgPSB7XG4gICAgaXNMb2FkaW5nOiBmYWxzZSxcbn07XG5cbmNvbnN0IHJlZHVjZXI6IFJlZHVjZXI8U3RhdGU+ID0gKHN0YXRlID0gRGVmYXVsU3RhdGUsIGFjdGlvbjogQWN0aW9ucyk6IFN0YXRlID0+IHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgXCJtZXNzYWdlcy9MT0FEXCI6IHtcbiAgICAgICAgICAgIHJldHVybiB7IGlzTG9hZGluZzogdHJ1ZSB9O1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgXCJtZXNzYWdlcy9MT0FEX1NVQ0NFU1NcIjoge1xuICAgICAgICAgICAgY29uc3QgeyBtZXNzYWdlcyB9ID0gYWN0aW9uO1xuICAgICAgICAgICAgcmV0dXJuIHsgaXNMb2FkaW5nOiBmYWxzZSwgaXRlbXM6IG1lc3NhZ2VzIH07XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBcIm1lc3NhZ2VzL0xPQURfRkFJTFVSRVwiOiB7XG4gICAgICAgICAgICBjb25zdCB7IG1lc3NhZ2UgfSA9IGFjdGlvbjtcbiAgICAgICAgICAgIHJldHVybiB7IGlzTG9hZGluZzogZmFsc2UsIGVycm9yTWVzc2FnZTogbWVzc2FnZSB9O1xuICAgICAgICB9XG4gICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XG4iLCJpbXBvcnQgeyBSZWR1Y2VyIH0gZnJvbSBcInJlZHV4XCI7XG5pbXBvcnQgeyBBY3Rpb25zIH0gZnJvbSBcInJlZHVjZXJzXCI7XG5cbmltcG9ydCB7IFByb2ZpbGUgfSBmcm9tIFwibW9kZWxcIjtcblxuZXhwb3J0IGludGVyZmFjZSBTdGF0ZSB7XG4gICAgaXRlbT86IFByb2ZpbGU7XG4gICAgZXJyb3JNZXNzYWdlPzogc3RyaW5nO1xufVxuXG5jb25zdCByZWR1Y2VyOiBSZWR1Y2VyPFN0YXRlPiA9IChzdGF0ZSA9IHt9LCBhY3Rpb246IEFjdGlvbnMpOiBTdGF0ZSA9PiB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIFwicHJvZmlsZS9QUk9GSUxFX1JFUVVFU1RcIjoge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBcInByb2ZpbGUvUFJPRklMRV9TVUNDRVNTXCI6IHtcbiAgICAgICAgICAgIGNvbnN0IHsgcHJvZmlsZSB9ID0gYWN0aW9uO1xuICAgICAgICAgICAgcmV0dXJuIHsgaXRlbTogcHJvZmlsZSB9O1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgXCJwcm9maWxlL1BST0ZJTEVfRkFJTFVSRVwiOiB7XG4gICAgICAgICAgICBjb25zdCB7IG1lc3NhZ2UgfSA9IGFjdGlvbjtcbiAgICAgICAgICAgIHJldHVybiB7IGVycm9yTWVzc2FnZTogbWVzc2FnZSB9O1xuICAgICAgICB9XG4gICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XG4iLCJpbXBvcnQgeyBSZWR1Y2VyIH0gZnJvbSBcInJlZHV4XCI7XG5pbXBvcnQgeyBBY3Rpb25zIH0gZnJvbSBcInJlZHVjZXJzXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3RhdGUge1xuICAgIGNsaWVudElkPzogc3RyaW5nO1xufVxuXG5jb25zdCByZWR1Y2VyOiBSZWR1Y2VyPFN0YXRlPiA9IChzdGF0ZSA9IHt9LCBhY3Rpb246IEFjdGlvbnMpOiBTdGF0ZSA9PiB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIFwic2V0dGluZ3MvU0VUX0dNQUlMX0NMSUVOVF9JRFwiOiB7XG4gICAgICAgICAgICBjb25zdCB7IGNsaWVudElkIH0gPSBhY3Rpb247XG4gICAgICAgICAgICByZXR1cm4geyBjbGllbnRJZCB9O1xuICAgICAgICB9XG4gICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XG4iLCJleHBvcnQgeyBsb2FkTWVzc2FnZXMgfSBmcm9tIFwiLi9sb2FkTWVzc2FnZXNcIjtcbmV4cG9ydCB7IGxvYWRQcm9maWxlIH0gZnJvbSBcIi4vbG9hZFByb2ZpbGVcIjtcbiIsImltcG9ydCB7IGNhbGwgfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XG5cbmltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tIFwibW9kZWxcIjtcblxuaW1wb3J0ICogYXMgZ21haWxBcGkgZnJvbSBcImFwaS9nbWFpbFwiO1xuXG5pbXBvcnQgeyBzZW5kQXV0aG9yaXplUmVxdWVzdFNhZ2EgfSBmcm9tIFwiLi9zZW5kQXV0aG9yaXplUmVxdWVzdFNhZ2FcIjtcblxuZXhwb3J0IGZ1bmN0aW9uKiBsb2FkTWVzc2FnZXModXNlcklkOiBzdHJpbmcpIHtcbiAgICBjb25zdCBtZXNzYWdlTGlzdDogZ21haWxBcGkuTWVzc2FnZUxpc3QgPSB5aWVsZCBjYWxsKFxuICAgICAgICBzZW5kQXV0aG9yaXplUmVxdWVzdFNhZ2EsXG4gICAgICAgIGdtYWlsQXBpLmdldE1lc3NhZ2VMaXN0KHVzZXJJZCwgMTApLFxuICAgICk7XG5cbiAgICBjb25zdCBtZXNzYWdlczogTWVzc2FnZVtdID0gW107XG5cbiAgICBmb3IgKGNvbnN0IG1lc3NhZ2VJbmZvIG9mIG1lc3NhZ2VMaXN0Lm1lc3NhZ2VzKSB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2U6IGdtYWlsQXBpLk1lc3NhZ2UgPSB5aWVsZCBjYWxsKFxuICAgICAgICAgICAgc2VuZEF1dGhvcml6ZVJlcXVlc3RTYWdhLFxuICAgICAgICAgICAgZ21haWxBcGkuZ2V0TWVzc2FnZSh1c2VySWQsIG1lc3NhZ2VJbmZvLmlkKSxcbiAgICAgICAgKTtcblxuICAgICAgICBtZXNzYWdlcy5wdXNoKHBhcnNlTWVzc2FnZShtZXNzYWdlKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lc3NhZ2VzO1xufVxuXG5jb25zdCBwYXJzZU1lc3NhZ2UgPSAobWVzc2FnZTogZ21haWxBcGkuTWVzc2FnZSk6IE1lc3NhZ2UgPT4ge1xuICAgIGNvbnN0IGZyb20gPSBtZXNzYWdlLnBheWxvYWQuaGVhZGVycy5maW5kKHggPT4geC5uYW1lID09PSBnbWFpbEFwaS5IZWFkZXJUeXBlLkZyb20pLnZhbHVlO1xuICAgIGNvbnN0IHN1YmplY3QgPSBtZXNzYWdlLnBheWxvYWQuaGVhZGVycy5maW5kKHggPT4geC5uYW1lID09PSBnbWFpbEFwaS5IZWFkZXJUeXBlLlN1YmplY3QpLnZhbHVlO1xuXG4gICAgcmV0dXJuIHsgaWQ6IG1lc3NhZ2UuaWQsIGZyb20sIHN1YmplY3QgfTtcbn07XG4iLCJpbXBvcnQgeyBjYWxsIH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xyXG5cclxuaW1wb3J0IHsgUHJvZmlsZSB9IGZyb20gXCJtb2RlbC9wcm9maWxlXCI7XHJcblxyXG5pbXBvcnQgKiBhcyBnbWFpbEFwaSBmcm9tIFwiYXBpL2dtYWlsXCI7XHJcblxyXG5pbXBvcnQgeyBzZW5kQXV0aG9yaXplUmVxdWVzdFNhZ2EgfSBmcm9tIFwiLi9zZW5kQXV0aG9yaXplUmVxdWVzdFNhZ2FcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiogbG9hZFByb2ZpbGUoKSB7XHJcbiAgICBjb25zdCBwcm9maWxlOiBnbWFpbEFwaS5Qcm9maWxlID0geWllbGQgY2FsbChcclxuICAgICAgICBzZW5kQXV0aG9yaXplUmVxdWVzdFNhZ2EsXHJcbiAgICAgICAgZ21haWxBcGkuZ2V0UHJvZmlsZShcIm1lXCIpLFxyXG4gICAgKTtcclxuICAgIHJldHVybiBwYXJzZVByb2ZpbGUocHJvZmlsZSk7XHJcbn1cclxuXHJcbmNvbnN0IHBhcnNlUHJvZmlsZSA9IChwcm9maWxlOiBnbWFpbEFwaS5Qcm9maWxlKTogUHJvZmlsZSA9PiB7XHJcbiAgICByZXR1cm4geyBlbWFpbDogcHJvZmlsZS5lbWFpbEFkZHJlc3MgfTtcclxufTtcclxuIiwiaW1wb3J0IHsgY2FsbCwgc2VsZWN0IH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xyXG5cclxuaW1wb3J0IHsgUm9vdFN0YXRlIH0gZnJvbSBcInJlZHVjZXJzXCI7XHJcblxyXG5pbXBvcnQgeyBBcGlSZXF1ZXN0IH0gZnJvbSBcImFwaS9BcGlSZXF1ZXN0XCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24qIHNlbmRBdXRob3JpemVSZXF1ZXN0U2FnYTxUPihyZXF1ZXN0OiBBcGlSZXF1ZXN0PFQ+KSB7XHJcbiAgICBjb25zdCB0b2tlbiA9IHlpZWxkIGNhbGwoZ2V0VG9rZW4pO1xyXG5cclxuICAgIHJldHVybiB5aWVsZCBjYWxsKFxyXG4gICAgICAgIHJlcXVlc3Qud2l0aEhlYWRlcnMoe1xyXG4gICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcclxuICAgICAgICB9KS5leGVjdXRlLFxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uKiBnZXRUb2tlbigpIHtcclxuICAgIGNvbnN0IHRva2VuID0geWllbGQgc2VsZWN0KChzdGF0ZTogUm9vdFN0YXRlKSA9PiBzdGF0ZS5hdXRoLnRva2VuSW5mby50b2tlbik7XHJcbiAgICByZXR1cm4gdG9rZW47XHJcbn1cclxuIiwiaW1wb3J0IHsgZm9yayB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcblxuaW1wb3J0IHsgYXV0aFNhZ2EgfSBmcm9tIFwiLi9vYXV0aFNhZ2FcIjtcbmltcG9ydCB7IG1lc3NhZ2VzU2FnYSB9IGZyb20gXCIuL21lc3NhZ2VzU2FnYVwiO1xuaW1wb3J0IHsgcHJvZmlsZVNhZ2EgfSBmcm9tIFwiLi9wcm9maWxlU2FnYVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcm9vdFNhZ2EoKSB7XG4gICAgeWllbGQgZm9yayhhdXRoU2FnYSk7XG4gICAgeWllbGQgZm9yayhtZXNzYWdlc1NhZ2EpO1xuICAgIHlpZWxkIGZvcmsocHJvZmlsZVNhZ2EpO1xufVxuIiwiaW1wb3J0IHsgY2FsbCwgcHV0LCBzZWxlY3QsIHRha2VMYXRlc3QgfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XG5cbmltcG9ydCB7IFJvb3RTdGF0ZSB9IGZyb20gXCJyZWR1Y2Vyc1wiO1xuaW1wb3J0IHsgbG9hZE1lc3NhZ2VzLCBsb2FkTWVzc2FnZXNGYWlsdXJlLCBsb2FkTWVzc2FnZXNTdWNjZXNzIH0gZnJvbSBcInJlZHVjZXJzL2FjdGlvbnNcIjtcblxuaW1wb3J0ICogYXMgZ21haWxTZXJ2aWNlcyBmcm9tIFwic2FnYXMvZ21haWxcIjtcbmltcG9ydCB7IE1lc3NhZ2UsIFByb2ZpbGUgfSBmcm9tIFwibW9kZWxcIjtcblxuZXhwb3J0IGZ1bmN0aW9uKiBtZXNzYWdlc1NhZ2EoKSB7XG4gICAgeWllbGQgdGFrZUxhdGVzdChsb2FkTWVzc2FnZXMudHlwZSwgcHJvY2Vzc0xvZ2luKTtcbn1cblxuZnVuY3Rpb24qIHByb2Nlc3NMb2dpbihfYWN0aW9uOiBSZXR1cm5UeXBlPHR5cGVvZiBsb2FkTWVzc2FnZXM+KSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcHJvZmlsZTogUHJvZmlsZSA9IHlpZWxkIGNhbGwoZ2V0UHJvZmlsZSk7XG5cbiAgICAgICAgY29uc3QgbWVzc2FnZXM6IE1lc3NhZ2VbXSA9IHlpZWxkIGNhbGwoZ21haWxTZXJ2aWNlcy5sb2FkTWVzc2FnZXMsIHByb2ZpbGUuZW1haWwpO1xuXG4gICAgICAgIHlpZWxkIHB1dChsb2FkTWVzc2FnZXNTdWNjZXNzKG1lc3NhZ2VzKSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHlpZWxkIHB1dChsb2FkTWVzc2FnZXNGYWlsdXJlKGVyciwgZXJyLnRvU3RyaW5nKCkpKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uKiBnZXRQcm9maWxlKCkge1xuICAgIGNvbnN0IHByb2ZpbGU6IFJvb3RTdGF0ZVtcInByb2ZpbGVcIl0gPSB5aWVsZCBzZWxlY3QoKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLnByb2ZpbGUpO1xuXG4gICAgaWYgKCFwcm9maWxlLml0ZW0pIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVXNlciBwcm9maWxlIGlzIG5vdCBsb2FkZWRcIik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb2ZpbGUuaXRlbTtcbn1cbiIsImltcG9ydCB7IElQcm92aWRlciB9IGZyb20gXCJyZWFjdC1zaW1wbGUtYXV0aFwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNlc3Npb24ge1xuICAgIGFjY2Vzc1Rva2VuOiBzdHJpbmc7XG4gICAgdG9rZW5UeXBlOiBzdHJpbmc7XG4gICAgZXhwaXJlRHVyYXRpb25TZWNvbmRzOiBudW1iZXI7XG4gICAgc3RhdGU6IHN0cmluZztcbiAgICBzY29wZTogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgZW51bSBTY29wZXMge1xuICAgIFwiZ21haWwucmVhZG9ubHlcIiA9IFwiaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vYXV0aC9nbWFpbC5yZWFkb25seVwiLFxufVxuXG5leHBvcnQgY29uc3QgYnVpbGRHb29nbGVQcm92aWRlciA9IChcbiAgICBjbGllbnRJZDogc3RyaW5nLFxuICAgIHNjb3BlczogU2NvcGVzW10gPSBbU2NvcGVzW1wiZ21haWwucmVhZG9ubHlcIl1dLFxuKTogSVByb3ZpZGVyPFNlc3Npb24+ID0+ICh7XG4gICAgYnVpbGRBdXRob3JpemVVcmwoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICBcImh0dHBzOi8vYWNjb3VudHMuZ29vZ2xlLmNvbS9vL29hdXRoMi92Mi9hdXRoXCIgK1xuICAgICAgICAgICAgYD9zY29wZT0ke2VuY29kZVNjb3BlcyhzY29wZXMpfWAgK1xuICAgICAgICAgICAgXCImaW5jbHVkZV9ncmFudGVkX3Njb3Blcz10cnVlXCIgK1xuICAgICAgICAgICAgXCImc3RhdGU9c3RhdGVfcGFyYW1ldGVyX3Bhc3N0aHJvdWdoX3ZhbHVlXCIgK1xuICAgICAgICAgICAgYCZyZWRpcmVjdF91cmk9JHtlbmNvZGVVUklDb21wb25lbnQoYCR7d2luZG93LmxvY2F0aW9uLm9yaWdpbn0vcmVkaXJlY3QuaHRtbGApfWAgK1xuICAgICAgICAgICAgXCImcmVzcG9uc2VfdHlwZT10b2tlblwiICtcbiAgICAgICAgICAgIGAmY2xpZW50X2lkPSR7Y2xpZW50SWR9YFxuICAgICAgICApO1xuICAgIH0sXG5cbiAgICBleHRyYWN0RXJyb3IocmVkaXJlY3RVcmw6IHN0cmluZykge1xuICAgICAgICBjb25zdCBlcnJvclJlYXNvbjogc3RyaW5nID0gZ2V0UGFyYW1ldGVycyhyZWRpcmVjdFVybCwgXCJlcnJvclwiKTtcblxuICAgICAgICByZXR1cm4gZXJyb3JSZWFzb24gPyBuZXcgRXJyb3IoZXJyb3JSZWFzb24pIDogdW5kZWZpbmVkO1xuICAgIH0sXG5cbiAgICBleHRyYWN0U2Vzc2lvbihyZWRpcmVjdFVybDogc3RyaW5nKTogU2Vzc2lvbiB7XG4gICAgICAgIGNvbnN0IGFjY2Vzc1Rva2VuOiBzdHJpbmcgPSBnZXRQYXJhbWV0ZXJzKHJlZGlyZWN0VXJsLCBcImFjY2Vzc190b2tlblwiKTtcbiAgICAgICAgY29uc3QgdG9rZW5UeXBlOiBzdHJpbmcgPSBnZXRQYXJhbWV0ZXJzKHJlZGlyZWN0VXJsLCBcInRva2VuX3R5cGVcIik7XG4gICAgICAgIGNvbnN0IHN0YXRlOiBzdHJpbmcgPSBnZXRQYXJhbWV0ZXJzKHJlZGlyZWN0VXJsLCBcInN0YXRlXCIpO1xuICAgICAgICBjb25zdCBzY29wZTogc3RyaW5nID0gZ2V0UGFyYW1ldGVycyhyZWRpcmVjdFVybCwgXCJzY29wZVwiKTtcbiAgICAgICAgY29uc3QgZXhwaXJlRHVyYXRpb25TZWNvbmRzID0gcGFyc2VJbnQoZ2V0UGFyYW1ldGVycyhyZWRpcmVjdFVybCwgXCJleHBpcmVzX2luXCIpLCAxMCk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFjY2Vzc1Rva2VuLFxuICAgICAgICAgICAgZXhwaXJlRHVyYXRpb25TZWNvbmRzLFxuICAgICAgICAgICAgdG9rZW5UeXBlLFxuICAgICAgICAgICAgc3RhdGUsXG4gICAgICAgICAgICBzY29wZSxcbiAgICAgICAgfTtcbiAgICB9LFxuXG4gICAgdmFsaWRhdGVTZXNzaW9uKF9zZXNzaW9uOiBTZXNzaW9uKTogYm9vbGVhbiB7XG4gICAgICAgIC8vIFRPRE86IEFkZCB2YWxpZGF0aW9uXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0sXG5cbiAgICBnZXRBY2Nlc3NUb2tlbihzZXNzaW9uOiBTZXNzaW9uLCBfcmVzb3VyY2VJZDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHNlc3Npb24uYWNjZXNzVG9rZW47XG4gICAgfSxcblxuICAgIGdldFNpZ25PdXRVcmwodG9rZW46IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBgaHR0cHM6Ly9hY2NvdW50cy5nb29nbGUuY29tL28vb2F1dGgyL3Jldm9rZT90b2tlbj0ke2VuY29kZVVSSUNvbXBvbmVudCh0b2tlbil9YDtcbiAgICB9LFxufSk7XG5cbmNvbnN0IGdldFBhcmFtZXRlcnMgPSAocmVkaXJlY3RVcmw6IHN0cmluZywgbmFtZTogc3RyaW5nKSA9PiB7XG4gICAgY29uc3QgcmVnZXggPSBuZXcgUmVnRXhwKGAke25hbWV9PShbXiZdKylgKTtcblxuICAgIGxldCB2YWx1ZTogc3RyaW5nID0gbnVsbDtcbiAgICBjb25zdCB2YWx1ZU1hdGNoID0gcmVkaXJlY3RVcmwubWF0Y2gocmVnZXgpO1xuICAgIGlmICh2YWx1ZU1hdGNoKSB7XG4gICAgICAgIHZhbHVlID0gdmFsdWVNYXRjaFsxXTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWU7XG59O1xuXG5jb25zdCBlbmNvZGVTY29wZXMgPSAoc2NvcGVzOiBTY29wZXNbXSkgPT4ge1xuICAgIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQoc2NvcGVzLmpvaW4oXCIsXCIpKTtcbn07XG4iLCJpbXBvcnQgeyBmb3JrIH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xuXG5pbXBvcnQgeyBzaWduVXBTYWdhIH0gZnJvbSBcIi4vc2lnblVwU2FnYVwiO1xuXG5leHBvcnQgZnVuY3Rpb24qIGF1dGhTYWdhKCkge1xuICAgIHlpZWxkIGZvcmsoc2lnblVwU2FnYSk7XG5cbiAgICAvLyBjb25zdCBpc1NpZ25VcCA9IHlpZWxkIGNhbGwoaXNTaWduVXBTYWdhKTtcbiAgICAvLyBpZiAoIWlzU2lnblVwKSB7XG4gICAgLy8gICAgIHlpZWxkIHB1dChzaWduVXAoKSk7XG4gICAgLy8gfVxufVxuXG4vLyBmdW5jdGlvbiogaXNTaWduVXBTYWdhKCkge1xuLy8gICAgIGNvbnN0IHRva2VuID0geWllbGQgc2VsZWN0KChzdGF0ZTogUm9vdFN0YXRlKSA9PiBzdGF0ZS5hdXRoLnRva2VuSW5mbyk7XG4vLyAgICAgcmV0dXJuIEJvb2xlYW4odG9rZW4pO1xuLy8gfVxuIiwiaW1wb3J0IHsgY2FsbCwgcHV0LCBzZWxlY3QsIHRha2VMYXRlc3QgfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XG5cbmltcG9ydCBSU0EgZnJvbSBcInJlYWN0LXNpbXBsZS1hdXRoXCI7XG5pbXBvcnQgeyByZXF1ZXN0UHJvZmlsZSwgc2lnblVwLCBzaWduVXBGYWlsLCBzaWduVXBTdWNjZXNzIH0gZnJvbSBcInJlZHVjZXJzL2FjdGlvbnNcIjtcblxuaW1wb3J0IHsgU2Vzc2lvbiwgYnVpbGRHb29nbGVQcm92aWRlciB9IGZyb20gXCIuL2dvb2dsZVByb3ZpZGVyXCI7XG5pbXBvcnQgeyBSb290U3RhdGUgfSBmcm9tIFwicmVkdWNlcnNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uKiBzaWduVXBTYWdhKCkge1xuICAgIHlpZWxkIHRha2VMYXRlc3Qoc2lnblVwLnR5cGUsIHByb2Nlc3NTaWduVXApO1xufVxuXG5mdW5jdGlvbiogcHJvY2Vzc1NpZ25VcChfYWN0aW9uOiBSZXR1cm5UeXBlPHR5cGVvZiBzaWduVXA+KSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgY2xpZW50SWQgPSB5aWVsZCBjYWxsKGdldENsaWVudElkKTtcbiAgICAgICAgY29uc3QgZ29vZ2xlUHJvdmlkZXIgPSBidWlsZEdvb2dsZVByb3ZpZGVyKGNsaWVudElkKTtcblxuICAgICAgICBjb25zdCBzZXNzaW9uOiBTZXNzaW9uID0geWllbGQgY2FsbChSU0EuYWNxdWlyZVRva2VuQXN5bmMsIGdvb2dsZVByb3ZpZGVyKTtcblxuICAgICAgICB5aWVsZCBwdXQoc2lnblVwU3VjY2Vzcyh7IHRva2VuOiBzZXNzaW9uLmFjY2Vzc1Rva2VuIH0pKTtcblxuICAgICAgICAvLyBUT0RPOiDQndC1INC00L7Qu9C20L3QviDRgtGD0YIg0LHRi9GC0YxcbiAgICAgICAgeWllbGQgcHV0KHJlcXVlc3RQcm9maWxlKCkpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICB5aWVsZCBwdXQoc2lnblVwRmFpbChlcnIsIGVyci50b1N0cmluZygpKSk7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24qIGdldENsaWVudElkKCkge1xuICAgIGNvbnN0IGNsaWVudElkID0geWllbGQgc2VsZWN0KChzdGF0ZTogUm9vdFN0YXRlKSA9PiBzdGF0ZS5zZXR0aW5ncy5jbGllbnRJZCk7XG4gICAgcmV0dXJuIGNsaWVudElkO1xufVxuIiwiaW1wb3J0IHsgY2FsbCwgcHV0LCB0YWtlTGF0ZXN0IH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xuXG5pbXBvcnQge1xuICAgIGxvYWRNZXNzYWdlcyxcbiAgICByZXF1ZXN0UHJvZmlsZSxcbiAgICByZXF1ZXN0UHJvZmlsZUZhaWx1cmUsXG4gICAgcmVxdWVzdFByb2ZpbGVTdWNjZXNzLFxufSBmcm9tIFwicmVkdWNlcnMvYWN0aW9uc1wiO1xuXG5pbXBvcnQgeyBsb2FkUHJvZmlsZSB9IGZyb20gXCJzYWdhcy9nbWFpbC9sb2FkUHJvZmlsZVwiO1xuXG5leHBvcnQgZnVuY3Rpb24qIHByb2ZpbGVTYWdhKCkge1xuICAgIHlpZWxkIHRha2VMYXRlc3QocmVxdWVzdFByb2ZpbGUudHlwZSwgcHJvY2Vzc0xvZ2luKTtcbn1cblxuZnVuY3Rpb24qIHByb2Nlc3NMb2dpbihfYWN0aW9uOiBSZXR1cm5UeXBlPHR5cGVvZiByZXF1ZXN0UHJvZmlsZT4pIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBwcm9maWxlID0geWllbGQgY2FsbChsb2FkUHJvZmlsZSk7XG5cbiAgICAgICAgeWllbGQgcHV0KHJlcXVlc3RQcm9maWxlU3VjY2Vzcyhwcm9maWxlKSk7XG5cbiAgICAgICAgLy8gVE9ETzog0J3QtSDQtNC+0LvQttC90L4g0YLRg9GCINCx0YvRgtGMXG4gICAgICAgIHlpZWxkIHB1dChsb2FkTWVzc2FnZXMoKSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHlpZWxkIHB1dChyZXF1ZXN0UHJvZmlsZUZhaWx1cmUoZXJyLCBlcnIudG9TdHJpbmcoKSkpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IGNvbXBvc2UgfSBmcm9tIFwicmVkdXhcIjtcclxuXHJcbi8vIHRzbGludDpkaXNhYmxlOm5vLXN0cmluZy1saXRlcmFsXHJcbmNvbnN0IGdldFJlZHV4RGV2VG9vbHNDb21wb3NlID0gKCkgPT5cclxuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJiB3aW5kb3dbXCJfX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9DT01QT1NFX19cIl1cclxuICAgICAgICA/IHdpbmRvd1tcIl9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX0NPTVBPU0VfX1wiXSh7XHJcbiAgICAgICAgICAgICAgbmFtZTogXCJNeUJvaWxlcnBsYXRlXCIsXHJcbiAgICAgICAgICAgICAgYWN0aW9uc0JsYWNrbGlzdDogW1wiUkVEVVhfU1RPUkFHRV9TQVZFXCJdLFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICA6IHVuZGVmaW5lZDtcclxuXHJcbmV4cG9ydCBjb25zdCBjb21wb3NlRW5oYW5jZXJzID0gZ2V0UmVkdXhEZXZUb29sc0NvbXBvc2UoKSB8fCBjb21wb3NlO1xyXG4iLCJpbXBvcnQgeyBhcHBseU1pZGRsZXdhcmUsIGNyZWF0ZVN0b3JlIH0gZnJvbSBcInJlZHV4XCI7XHJcbmltcG9ydCBjcmVhdGVTYWdhTWlkZGxld2FyZSBmcm9tIFwicmVkdXgtc2FnYVwiO1xyXG5pbXBvcnQgeyByb3V0ZXJNaWRkbGV3YXJlIGFzIGNyZWF0ZVJvdXRlck1pZGRsZXdhcmUgfSBmcm9tIFwiY29ubmVjdGVkLXJlYWN0LXJvdXRlclwiO1xyXG5cclxuaW1wb3J0IHsgcm9vdFJlZHVjZXIgfSBmcm9tIFwicmVkdWNlcnNcIjtcclxuaW1wb3J0IHJvb3RTYWdhIGZyb20gXCJzYWdhc1wiO1xyXG5cclxuaW1wb3J0IHsgY29tcG9zZUVuaGFuY2VycyB9IGZyb20gXCIuL2NvbXBvc2VFbmhhbmNlcnNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbmZpZ3VyZVN0b3JlKGluaXRpYWxTdGF0ZSwgaGlzdG9yeSkge1xyXG4gICAgY29uc3Qgcm91dGVyTWlkZGxld2FyZSA9IGNyZWF0ZVJvdXRlck1pZGRsZXdhcmUoaGlzdG9yeSk7XHJcbiAgICBjb25zdCBzYWdhTWlkZGxld2FyZSA9IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlKCk7XHJcblxyXG4gICAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShcclxuICAgICAgICByb290UmVkdWNlcihoaXN0b3J5KSxcclxuICAgICAgICBpbml0aWFsU3RhdGUsXHJcbiAgICAgICAgY29tcG9zZUVuaGFuY2VycyhhcHBseU1pZGRsZXdhcmUocm91dGVyTWlkZGxld2FyZSwgc2FnYU1pZGRsZXdhcmUpKSxcclxuICAgICk7XHJcblxyXG4gICAgLy8gcnVuIHNhZ2FzXHJcbiAgICBzYWdhTWlkZGxld2FyZS5ydW4ocm9vdFNhZ2EpO1xyXG5cclxuICAgIC8vIEhvdCBtb2R1bGUgcmVwbGFjZW1lbnRcclxuICAgIGlmIChtb2R1bGUuaG90KSB7XHJcbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuLi9yZWR1Y2Vycy9pbmRleFwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld1Jvb3RSZWR1Y2VyID0gcmVxdWlyZShcIi4uL3JlZHVjZXJzL2luZGV4XCIpLmRlZmF1bHQ7XHJcbiAgICAgICAgICAgIHN0b3JlLnJlcGxhY2VSZWR1Y2VyKG5ld1Jvb3RSZWR1Y2VyKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gc3RvcmU7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
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
const history = Object(history__WEBPACK_IMPORTED_MODULE_5__["createBrowserHistory"])({ basename: process.env.PUBLIC_URL });
const store = Object(store__WEBPACK_IMPORTED_MODULE_6__["default"])(initialState, history);
// tslint:disable-next-line:no-console
console.log("process.env", JSON.stringify(, null, " "));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9sb2NhbGVzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL0FwcC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvcGFnZXMvbWVzc2FnZXMvTWVzc2FnZXMuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpL2FwaVJlcXVlc3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaS9nbWFpbC9nZXRNZXNzYWdlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcGkvZ21haWwvZ2V0TWVzc2FnZUxpc3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaS9nbWFpbC9nZXRQcm9maWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcGkvZ21haWwvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2kxOG4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9BcHAuY3NzPzYyNzEiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvQXBwLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9saW5rL0xpbmsudHN4Iiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2xpbmsvVGFiTGluay50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvbGluay9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9sb2NhbGl6ZS9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvbmF2aWdhdGlvbi9OYXZpZ2F0aW9uLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9uYXZpZ2F0aW9uL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL3BhZ2VzL2hvbWUvSG9tZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvcGFnZXMvaG9tZS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9wYWdlcy9sb2dpbi9Mb2dpbi50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvcGFnZXMvbG9naW4vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvcGFnZXMvbWVzc2FnZXMvTWVzc2FnZXMuc2Nzcz8wZjgzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL3BhZ2VzL21lc3NhZ2VzL01lc3NhZ2VzLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9wYWdlcy9tZXNzYWdlcy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9wYWdlcy9zZXR0aW5ncy9TZXR0aW5ncy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvcGFnZXMvc2V0dGluZ3MvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvcm91dGVzL3Byb3RlY3RlZC1yb3V0ZS9Qcm90ZWN0ZWRSb3V0ZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvcm91dGVzL3Byb3RlY3RlZC1yb3V0ZS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdWNlcnMvYWN0aW9ucy9hY3Rpb24taGVscGVycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdWNlcnMvYWN0aW9ucy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdWNlcnMvYWN0aW9ucy9tZXNzYWdlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdWNlcnMvYWN0aW9ucy9wcm9maWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9yZWR1Y2Vycy9hY3Rpb25zL3NldHRpbmdzLnRzIiwid2VicGFjazovLy8uL3NyYy9yZWR1Y2Vycy9hY3Rpb25zL3NpZ25VcC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdWNlcnMvYXV0aC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdWNlcnMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHVjZXJzL21lc3NhZ2VzLnRzIiwid2VicGFjazovLy8uL3NyYy9yZWR1Y2Vycy9wcm9maWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9yZWR1Y2Vycy9zZXR0aW5ncy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2FnYXMvZ21haWwvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NhZ2FzL2dtYWlsL2xvYWRNZXNzYWdlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2FnYXMvZ21haWwvbG9hZFByb2ZpbGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NhZ2FzL2dtYWlsL3NlbmRBdXRob3JpemVSZXF1ZXN0U2FnYS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2FnYXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NhZ2FzL21lc3NhZ2VzU2FnYS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2FnYXMvb2F1dGhTYWdhL2dvb2dsZVByb3ZpZGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9zYWdhcy9vYXV0aFNhZ2EvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NhZ2FzL29hdXRoU2FnYS9zaWduVXBTYWdhLnRzIiwid2VicGFjazovLy8uL3NyYy9zYWdhcy9wcm9maWxlU2FnYS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvY29tcG9zZUVuaGFuY2Vycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsa0JBQWtCLE1BQU0sVUFBVSxrQkFBa0IsU0FBUywrQkFBK0IsVUFBVSxpQ0FBaUMsYUFBYSxrQ0FBa0MsZUFBZSxvQ0FBb0MsYUFBYSxrQ0FBa0MsT0FBTyxVQUFVLGlCQUFpQixTQUFTLG1DQUFtQyxVQUFVLDRDQUE0QyxhQUFhLDJDQUEyQyxlQUFlLHNDQUFzQyxhQUFhLHFDOzs7Ozs7Ozs7OztBQ0F0aEI7QUFDQTs7O0FBR0E7QUFDQSw2Q0FBOEMsbUJBQW1CLEdBQUcsaUJBQWlCLG1CQUFtQixrQkFBa0IsR0FBRyxrQkFBa0IsbUJBQW1CLEdBQUcscUJBQXFCLHFDQUFxQyxHQUFHOztBQUVsTztBQUNBO0FBQ0E7QUFDQTtBQUNB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SUFBeUMsT0FBTyxzQ0FBUCxDQUF6QyxHQUNNLE9BQU8sc0NBQVAsRUFBK0M7QUFDM0MsVUFBTSxlQURxQztBQUUzQyxzQkFBa0IsQ0FBQyxvQkFBRDtBQUZ5QixDQUEvQyxDQUROLEdBS00sU0FOVjtBQVFPLE1BQU0sbUJBQW1CLDZCQUE2Qiw2Q0FBdEQ7Ozs7Ozs7Ozs7Ozs0QkFSRCx1Qjs0QkFRTyxnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1hiO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVjLFNBQVUsY0FBVixDQUF5QixZQUF6QixFQUF1QyxPQUF2QyxFQUE4QztBQUN4RCxVQUFNLG1CQUFtQixnRkFBdUIsT0FBdkIsQ0FBekI7QUFDQSxVQUFNLGlCQUFpQiw0REFBdkI7QUFFQSxVQUFNLFFBQVEsMERBQ1YsNkRBQVksT0FBWixDQURVLEVBRVYsWUFGVSxFQUdWLDJFQUFpQiw4REFBZ0IsZ0JBQWhCLEVBQWtDLGNBQWxDLENBQWpCLENBSFUsQ0FBZDtBQU1BO0FBQ0EsbUJBQWUsR0FBZixDQUFtQiw2Q0FBbkI7QUFFQTtBQUNBLFFBQUksSUFBSixFQUFnQjtBQUNaLGVBQU8sR0FBUCxDQUFXLE1BQVgsQ0FBa0Isa0RBQWxCLEVBQXVDO0FBQUEsT0FBSztBQUN4QyxrQkFBTSxpQkFBaUIsb0JBQVEsa0RBQVIsRUFBNkIsT0FBcEQ7QUFDQSxrQkFBTSxjQUFOLENBQXFCLGNBQXJCO0FBQ0gsU0FIRDtBQUlIO0FBRUQsV0FBTyxLQUFQO0FBQ0g7Ozs7Ozs7Ozs7Ozs0QkF0QnVCLGMiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSB7XCJlblwiOntcImNvbW1vblwiOntcInNpZ25VcFwiOlwic2lnblVwXCJ9LFwiaG9tZVwiOntcInZpZXdNZXNzYWdlc1wiOlwiVmlldyBtZXNzYWdlc1wifSxcImxvZ2luXCI6e1wibmVlZEF1dGhvcml6ZVwiOlwiTmVlZCBhdXRob3JpemVcIn0sXCJtZXNzYWdlc1wiOntcImZyb21cIjpcImZyb21cIixcInN1YmplY3RcIjpcInN1YmplY3RcIn0sXCJuYXZpZ2F0aW9uXCI6e1wiaG9tZVwiOlwiSG9tZVwiLFwibWVzc2FnZXNcIjpcIk1lc3NhZ2VzXCJ9LFwic2V0dGluZ3NcIjp7XCJlbnRlckNpZW50SWRcIjpcIkVudGVyIENMSUVOVF9JRFwifX0sXCJydVwiOntcImNvbW1vblwiOntcInNpZ25VcFwiOlwi0JLQvtC50YLQuFwifSxcImhvbWVcIjp7XCJ2aWV3TWVzc2FnZXNcIjpcItCe0YLQutGA0YvRgtGMINGB0L7QvtCx0YnQtdC90LjRj1wifSxcImxvZ2luXCI6e1wibmVlZEF1dGhvcml6ZVwiOlwi0J3QtdC+0LHRhdC+0LTQuNC80L4g0LDQstGC0L7RgNC40LfQvtCy0LDRgtGM0YHRj1wifSxcIm1lc3NhZ2VzXCI6e1wiZnJvbVwiOlwi0L7RgtC/0YDQsNCy0LjRgtC10LvRjFwiLFwic3ViamVjdFwiOlwi0LfQsNCz0L7Qu9C+0LLQvtC6XCJ9LFwibmF2aWdhdGlvblwiOntcImhvbWVcIjpcItCU0L7QvNC+0LlcIixcIm1lc3NhZ2VzXCI6XCLQodC+0L7QsdGJ0LXQvdC40Y9cIn0sXCJzZXR0aW5nc1wiOntcImVudGVyQ2llbnRJZFwiOlwi0JLQstC10LTQuNGC0LUgQ0xJRU5UX0lEXCJ9fX0iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImh0bWwsXFxuYm9keSxcXG4jYXBwIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uYXBwX18yTm5GVyB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5wYWdlX19RRU5JdiB7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG59XFxuXFxuLnRvb2xiYXJfXzJFalNTIHtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJhcHBcIjogXCJhcHBfXzJObkZXXCIsXG5cdFwicGFnZVwiOiBcInBhZ2VfX1FFTkl2XCIsXG5cdFwidG9vbGJhclwiOiBcInRvb2xiYXJfXzJFalNTXCJcbn07IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIubWVzc2FnZXNfXzE3eUNsIHtcXG4gIGN1cnNvcjogZGVmYXVsdDsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcIm1lc3NhZ2VzXCI6IFwibWVzc2FnZXNfXzE3eUNsXCJcbn07IiwiZXhwb3J0IHR5cGUgSGFuZGxlcjxULCBQPiA9IChyZXN1bHQ6IFQpID0+IFAgfCBQcm9taXNlPFA+O1xyXG5cclxuZXhwb3J0IGNvbnN0IEhlYWRlcnMgPSB7XHJcbiAgICBBY2NlcHRKc29uOiB7IEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcclxuICAgIEF1dGhvcml6YXRpb246ICh0b2tlbjogc3RyaW5nKSA9PiAoeyBBdXRob3JpemF0aW9uOiB0b2tlbiB9KSxcclxuICAgIEpzb25Db250ZW50OiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QganNvbkhhbmRsZXIgPSA8VD4ocmVzcG9uc2U6IFJlc3BvbnNlKTogUHJvbWlzZTxUPiA9PlxyXG4gICAgcmVzcG9uc2UuanNvbigpLmNhdGNoKCgpID0+IG5ldyBFcnJvcigpKTtcclxuXHJcbmV4cG9ydCBjbGFzcyBBcGlSZXF1ZXN0PFQgPSBSZXNwb25zZT4ge1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXQodXJpOiBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gbmV3IEFwaVJlcXVlc3QodXJpLCB7IG1ldGhvZDogXCJHRVRcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHBvc3QodXJpOiBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gbmV3IEFwaVJlcXVlc3QodXJpLCB7IG1ldGhvZDogXCJQT1NUXCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZXF1ZXN0OiBSZXF1ZXN0O1xyXG4gICAgcHJpdmF0ZSBoYW5kbGVyczogSGFuZGxlcjx1bmtub3duLCB1bmtub3duPltdO1xyXG5cclxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoXHJcbiAgICAgICAgaW5wdXQ6IFJlcXVlc3RJbmZvLFxyXG4gICAgICAgIGluaXQ6IFJlcXVlc3RJbml0ID0ge30sXHJcbiAgICAgICAgaGFuZGxlcnM6IEhhbmRsZXI8dW5rbm93biwgdW5rbm93bj5bXSA9IFtdLFxyXG4gICAgKSB7XHJcbiAgICAgICAgdGhpcy5yZXF1ZXN0ID0gbmV3IFJlcXVlc3QoaW5wdXQsIGluaXQpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlcnMgPSBoYW5kbGVycztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgd2l0aEhlYWRlcnMoLi4uZXh0cmFIZWFkZXJzOiBIZWFkZXJzSW5pdFtdKSB7XHJcbiAgICAgICAgY29uc3QgaGVhZGVyczogSGVhZGVyc0luaXQgPSBleHRyYUhlYWRlcnMucmVkdWNlKFxyXG4gICAgICAgICAgICAoaGVhZGVycywgZXh0cmEpID0+IE9iamVjdC5hc3NpZ24oaGVhZGVycywgZXh0cmEpLFxyXG4gICAgICAgICAgICB7IC4uLih0aGlzLnJlcXVlc3QuaGVhZGVycyB8fCB7fSkgfSxcclxuICAgICAgICApO1xyXG4gICAgICAgIHJldHVybiBuZXcgQXBpUmVxdWVzdCh0aGlzLnJlcXVlc3QsIHsgaGVhZGVycyB9LCB0aGlzLmhhbmRsZXJzKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaGFuZGxlciA9IDxQPihoYW5kbGVyOiAocmVzdWx0OiBUKSA9PiBQIHwgUHJvbWlzZTxQPik6IEFwaVJlcXVlc3Q8UD4gPT4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgQXBpUmVxdWVzdCh0aGlzLnJlcXVlc3QsIHt9LCBbLi4udGhpcy5oYW5kbGVycywgaGFuZGxlcl0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBwdWJsaWMgZXhlY3V0ZSA9ICgpOiBQcm9taXNlPFQ+ID0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVycy5yZWR1Y2UoXHJcbiAgICAgICAgICAgIChwcm9taXNlOiBQcm9taXNlPHVua25vd24+LCBoYW5kbGVyKSA9PiBwcm9taXNlLnRoZW4oaGFuZGxlciksXHJcbiAgICAgICAgICAgIGZldGNoKHRoaXMucmVxdWVzdCksXHJcbiAgICAgICAgKSBhcyBQcm9taXNlPFQ+O1xyXG4gICAgfTtcclxufVxyXG4iLCJpbXBvcnQgeyBBcGlSZXF1ZXN0LCBqc29uSGFuZGxlciB9IGZyb20gXCJhcGkvYXBpUmVxdWVzdFwiO1xyXG5cclxuY29uc3QgYmFzZVVyaSA9IFwiaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vZ21haWwvdjFcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTWVzc2FnZSB7XHJcbiAgICBpZDogc3RyaW5nO1xyXG4gICAgdGhyZWFkSWQ6IHN0cmluZztcclxuICAgIHBheWxvYWQ6IE1lc3NhZ2VQYXlsb2FkO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE1lc3NhZ2VQYXlsb2FkIHtcclxuICAgIG1pbWVUeXBlOiBzdHJpbmc7XHJcbiAgICBoZWFkZXJzOiBNZXNzYWdlSGVhZGVyW107XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTWVzc2FnZUhlYWRlciB7XHJcbiAgICBuYW1lOiBIZWFkZXJUeXBlO1xyXG4gICAgdmFsdWU6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGVudW0gSGVhZGVyVHlwZSB7XHJcbiAgICBGcm9tID0gXCJGcm9tXCIsXHJcbiAgICBTdWJqZWN0ID0gXCJTdWJqZWN0XCIsXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRNZXNzYWdlID0gKHVzZXJJZDogc3RyaW5nLCBtZXNzYWdlSWQ6IHN0cmluZykgPT4ge1xyXG4gICAgcmV0dXJuIEFwaVJlcXVlc3QuZ2V0KFxyXG4gICAgICAgIGAke2Jhc2VVcml9L3VzZXJzLyR7dXNlcklkfS9tZXNzYWdlcy8ke21lc3NhZ2VJZH0/Zm9ybWF0PW1ldGFkYXRhYCxcclxuICAgICkuaGFuZGxlcjxNZXNzYWdlPihqc29uSGFuZGxlcik7XHJcbn07XHJcbiIsImltcG9ydCB7IEFwaVJlcXVlc3QsIGpzb25IYW5kbGVyIH0gZnJvbSBcImFwaS9hcGlSZXF1ZXN0XCI7XG5cbmNvbnN0IGJhc2VVcmkgPSBcImh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2dtYWlsL3YxXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWVzc2FnZUxpc3Qge1xuICAgIG1lc3NhZ2VzOiBNZXNzYWdlSW5mb1tdO1xuICAgIG5leHRQYWdlVG9rZW46IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNZXNzYWdlSW5mbyB7XG4gICAgaWQ6IHN0cmluZztcbiAgICB0aHJlYWRJZDogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0TWVzc2FnZUxpc3QgPSAodXNlcklkOiBzdHJpbmcsIG1heFJlc3VsdDogbnVtYmVyID0gMjApID0+IHtcbiAgICByZXR1cm4gQXBpUmVxdWVzdC5nZXQoYCR7YmFzZVVyaX0vdXNlcnMvJHt1c2VySWR9L21lc3NhZ2VzP21heFJlc3VsdHM9JHttYXhSZXN1bHR9YCkuaGFuZGxlcjxcbiAgICAgICAgTWVzc2FnZUxpc3RcbiAgICA+KGpzb25IYW5kbGVyKTtcbn07XG4iLCJpbXBvcnQgeyBBcGlSZXF1ZXN0LCBqc29uSGFuZGxlciB9IGZyb20gXCJhcGkvYXBpUmVxdWVzdFwiO1xyXG5cclxuY29uc3QgYmFzZVVyaSA9IFwiaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vZ21haWwvdjFcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUHJvZmlsZSB7XHJcbiAgICBlbWFpbEFkZHJlc3M6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFByb2ZpbGUgPSAodXNlcklkOiBzdHJpbmcpID0+IHtcclxuICAgIHJldHVybiBBcGlSZXF1ZXN0LmdldChgJHtiYXNlVXJpfS91c2Vycy8ke3VzZXJJZH0vcHJvZmlsZWApLmhhbmRsZXI8UHJvZmlsZT4oanNvbkhhbmRsZXIpO1xyXG59O1xyXG4iLCJleHBvcnQgKiBmcm9tIFwiLi9nZXRNZXNzYWdlXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2dldE1lc3NhZ2VMaXN0XCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2dldFByb2ZpbGVcIjtcclxuIiwiaW1wb3J0IGkxOG4gZnJvbSBcImkxOG5leHRcIjtcbmltcG9ydCB7IHJlYWN0STE4bmV4dE1vZHVsZSB9IGZyb20gXCJyZWFjdC1pMThuZXh0XCI7XG5cbmltcG9ydCByZXNvdXJjZXMgZnJvbSBcIi4uL2xvY2FsZXMvaW5kZXguanNcIjtcblxuaTE4bi51c2UocmVhY3RJMThuZXh0TW9kdWxlKSAvLyBwYXNzZXMgaTE4biBkb3duIHRvIHJlYWN0LWkxOG5leHRcbiAgICAuaW5pdCh7XG4gICAgICAgIHJlc291cmNlcyxcbiAgICAgICAgbG5nOiBwcm9jZXNzLmVudi5MQU5HVUFHRSxcblxuICAgICAgICBkZWZhdWx0TlM6IFwiY29tbW9uXCIsIC8vIGRlZmF1bHQgbmFtZXNwYWNlXG5cbiAgICAgICAga2V5U2VwYXJhdG9yOiBmYWxzZSwgLy8gd2UgZG8gbm90IHVzZSBrZXlzIGluIGZvcm0gbWVzc2FnZXMud2VsY29tZVxuXG4gICAgICAgIGludGVycG9sYXRpb246IHtcbiAgICAgICAgICAgIGVzY2FwZVZhbHVlOiBmYWxzZSwgLy8gcmVhY3QgYWxyZWFkeSBzYWZlcyBmcm9tIHhzc1xuICAgICAgICB9LFxuICAgIH0pO1xuXG5leHBvcnQgZGVmYXVsdCBpMThuO1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgKiBhcyBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgQ29ubmVjdGVkUm91dGVyIH0gZnJvbSBcImNvbm5lY3RlZC1yZWFjdC1yb3V0ZXJcIjtcblxuaW1wb3J0IFwiaTE4blwiO1xuXG5pbXBvcnQgeyBjcmVhdGVCcm93c2VySGlzdG9yeSB9IGZyb20gXCJoaXN0b3J5XCI7XG5cbmltcG9ydCBjb25maWd1cmVTdG9yZSBmcm9tIFwic3RvcmVcIjtcblxuaW1wb3J0IEFwcGxpY2F0aW9uIGZyb20gXCJtb2R1bGVzL0FwcFwiO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7fTtcbmNvbnN0IGhpc3RvcnkgPSBjcmVhdGVCcm93c2VySGlzdG9yeSh7IGJhc2VuYW1lOiBwcm9jZXNzLmVudi5QVUJMSUNfVVJMIH0pO1xuXG5jb25zdCBzdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKGluaXRpYWxTdGF0ZSwgaGlzdG9yeSk7XG5cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1jb25zb2xlXG5jb25zb2xlLmxvZyhcInByb2Nlc3MuZW52XCIsIEpTT04uc3RyaW5naWZ5KHByb2Nlc3MuZW52LlBVQkxJQ19QQVRILCBudWxsLCBcIiBcIikpO1xuXG5SZWFjdERPTS5yZW5kZXIoXG4gICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICAgIDxDb25uZWN0ZWRSb3V0ZXIgaGlzdG9yeT17aGlzdG9yeX0+XG4gICAgICAgICAgICA8QXBwbGljYXRpb24gLz5cbiAgICAgICAgPC9Db25uZWN0ZWRSb3V0ZXI+XG4gICAgPC9Qcm92aWRlcj4sXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIiksXG4pO1xuIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy90eXBpbmdzLWZvci1jc3MtbW9kdWxlcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTYtMSEuL0FwcC5jc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIFByZXBhcmUgY3NzVHJhbnNmb3JtYXRpb25cbnZhciB0cmFuc2Zvcm07XG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy90eXBpbmdzLWZvci1jc3MtbW9kdWxlcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTYtMSEuL0FwcC5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy90eXBpbmdzLWZvci1jc3MtbW9kdWxlcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTYtMSEuL0FwcC5jc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgaG90IH0gZnJvbSBcInJlYWN0LWhvdC1sb2FkZXJcIjtcblxuaW1wb3J0IHsgUm91dGUsIFN3aXRjaCB9IGZyb20gXCJyZWFjdC1yb3V0ZXJcIjtcblxuaW1wb3J0IHsgQXBwQmFyLCBDc3NCYXNlbGluZSwgR3JpZCB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xuXG5pbXBvcnQgeyBOYXZpZ2F0aW9uIH0gZnJvbSBcIm1vZHVsZXMvbmF2aWdhdGlvblwiO1xuaW1wb3J0IHsgUHJvdGVjdGVkUm91dGUgfSBmcm9tIFwibW9kdWxlcy9yb3V0ZXMvcHJvdGVjdGVkLXJvdXRlXCI7XG5cbmltcG9ydCB7IEhvbWUgfSBmcm9tIFwibW9kdWxlcy9wYWdlcy9ob21lXCI7XG5pbXBvcnQgeyBMb2dpbiB9IGZyb20gXCJtb2R1bGVzL3BhZ2VzL2xvZ2luXCI7XG5pbXBvcnQgeyBNZXNzYWdlcyB9IGZyb20gXCJtb2R1bGVzL3BhZ2VzL21lc3NhZ2VzXCI7XG5pbXBvcnQgeyBTZXR0aW5ncyB9IGZyb20gXCJtb2R1bGVzL3BhZ2VzL3NldHRpbmdzXCI7XG5cbmltcG9ydCAqIGFzIHN0eWxlcyBmcm9tIFwiLi9BcHAuY3NzXCI7XG5cbmNvbnN0IEFwcCA9ICgpID0+IChcbiAgICA8R3JpZCBjb250YWluZXIgY2xhc3NOYW1lPXtzdHlsZXMuYXBwfSBpdGVtU2NvcGU+XG4gICAgICAgIDxDc3NCYXNlbGluZSAvPlxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XG4gICAgICAgICAgICA8QXBwQmFyIHBvc2l0aW9uPVwic3RhdGljXCI+XG4gICAgICAgICAgICAgICAgPE5hdmlnYXRpb24gLz5cbiAgICAgICAgICAgIDwvQXBwQmFyPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDxHcmlkIGl0ZW0gY2xhc3NOYW1lPXtzdHlsZXMucGFnZX0+XG4gICAgICAgICAgICA8U3dpdGNoPlxuICAgICAgICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPVwiL1wiIGNvbXBvbmVudD17SG9tZX0gLz5cbiAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9sb2dpblwiIGNvbXBvbmVudD17TG9naW59IC8+XG4gICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvc2V0dGluZ3NcIiBjb21wb25lbnQ9e1NldHRpbmdzfSAvPlxuICAgICAgICAgICAgICAgIDxQcm90ZWN0ZWRSb3V0ZSBwYXRoPVwiL21lc3NhZ2VzXCIgY29tcG9uZW50PXtNZXNzYWdlc30gLz5cbiAgICAgICAgICAgIDwvU3dpdGNoPlxuICAgICAgICA8L0dyaWQ+XG4gICAgPC9HcmlkPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgaG90KG1vZHVsZSkoQXBwKTtcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgeyBOYXZMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcblxuZXhwb3J0IGludGVyZmFjZSBMaW5rRGF0YSB7XG4gICAgdG86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMaW5rSGFuZGxlcnMge31cblxuY2xhc3MgTGluayBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8TGlua0RhdGEgJiBMaW5rSGFuZGxlcnM+IHtcbiAgICBwdWJsaWMgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IGNoaWxkcmVuLCB0byB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxOYXZMaW5rIHRvPXt0b30gc3R5bGU9e3sgdGV4dERlY29yYXRpb246IFwibm9uZVwiLCBjb2xvcjogXCJpbmhlcml0XCIgfX0+XG4gICAgICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IHsgTGluaywgTGluayBhcyBkZWZhdWx0IH07XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IFRhYiwgeyBUYWJQcm9wcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJcIjtcblxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGFiTGlua1Byb3BzIGV4dGVuZHMgVGFiUHJvcHMge1xuICAgIHRvOiBzdHJpbmc7XG59XG5cbi8vIEhhY2s6IGh0dHBzOi8vZ2l0aHViLmNvbS9tdWktb3JnL21hdGVyaWFsLXVpL2lzc3Vlcy85MTA2XG5cbmV4cG9ydCBjbGFzcyBUYWJMaW5rIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxUYWJMaW5rUHJvcHM+IHtcbiAgICBwdWJsaWMgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IHRvLCAuLi50YWJQcm9wcyB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICAgICAgICByZXR1cm4gPFRhYiB7Li4udGFiUHJvcHN9IHsuLi57IGNvbXBvbmVudDogTGluaywgdG8gfSBhcyBhbnl9IC8+O1xuICAgIH1cbn1cbiIsImV4cG9ydCAqIGZyb20gXCIuL0xpbmtcIjtcbmV4cG9ydCAqIGZyb20gXCIuL1RhYkxpbmtcIjtcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBOYW1lc3BhY2VzQ29uc3VtZXIgfSBmcm9tIFwicmVhY3QtaTE4bmV4dFwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBMb2NhbGl6ZURhdGEge1xyXG4gICAgaWQ6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBMb2NhbGl6ZUhhbmRsZXJzIHtcclxufVxyXG5cclxuY2xhc3MgTG9jYWxpemUgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PExvY2FsaXplRGF0YSAmIExvY2FsaXplSGFuZGxlcnM+IHtcclxuICAgIHB1YmxpYyByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBpZCB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8TmFtZXNwYWNlc0NvbnN1bWVyPlxyXG4gICAgICAgICAgICAgICAge3QgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0KGlkKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIDwvTmFtZXNwYWNlc0NvbnN1bWVyPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IExvY2FsaXplLCBMb2NhbGl6ZSBhcyBkZWZhdWx0IH07XHJcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgVGFicyBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFic1wiO1xuXG5pbXBvcnQgeyBUYWJMaW5rIH0gZnJvbSBcIm1vZHVsZXMvbGlua1wiO1xuaW1wb3J0IHsgTG9jYWxpemUgfSBmcm9tIFwibW9kdWxlcy9sb2NhbGl6ZVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIE5hdmlnYXRpb25EYXRhIHtcbiAgICBwYXRoOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmF2aWdhdGlvbkhhbmRsZXJzIHt9XG5cbmV4cG9ydCBjbGFzcyBOYXZpZ2F0aW9uIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxOYXZpZ2F0aW9uRGF0YSAmIE5hdmlnYXRpb25IYW5kbGVycz4ge1xuICAgIHB1YmxpYyByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgcGF0aCB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFRhYnMgdmFsdWU9e3BhdGh9PlxuICAgICAgICAgICAgICAgIDxUYWJMaW5rIHZhbHVlPVwiL1wiIHRvPVwiL1wiIGxhYmVsPXs8TG9jYWxpemUgaWQ9e1wibmF2aWdhdGlvbjpob21lXCJ9IC8+fSAvPlxuICAgICAgICAgICAgICAgIDxUYWJMaW5rIHZhbHVlPVwiL3NldHRpbmdzXCIgdG89XCIvc2V0dGluZ3NcIiBsYWJlbD17PExvY2FsaXplIGlkPXtcIm5hdmlnYXRpb246c2V0dGluZ3NcIn0gLz59IC8+XG4gICAgICAgICAgICAgICAgPFRhYkxpbmtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCIvbWVzc2FnZXNcIlxuICAgICAgICAgICAgICAgICAgICB0bz1cIi9tZXNzYWdlc1wiXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPXs8TG9jYWxpemUgaWQ9e1wibmF2aWdhdGlvbjptZXNzYWdlc1wifSAvPn1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9UYWJzPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2aWdhdGlvbjtcbiIsImltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcblxuaW1wb3J0IHsgUm9vdFN0YXRlIH0gZnJvbSBcInJlZHVjZXJzXCI7XG5cbmltcG9ydCBOYXZpZ2F0aW9uLCB7IE5hdmlnYXRpb25EYXRhLCBOYXZpZ2F0aW9uSGFuZGxlcnMgfSBmcm9tIFwiLi9OYXZpZ2F0aW9uXCI7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZTogUm9vdFN0YXRlKTogTmF2aWdhdGlvbkRhdGEgPT4ge1xuICAgIGNvbnN0IHBhdGggPSBzdGF0ZS5yb3V0ZXIubG9jYXRpb24ucGF0aG5hbWU7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBwYXRoLFxuICAgIH07XG59O1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHM6IE5hdmlnYXRpb25IYW5kbGVycyA9IHt9O1xuXG5jb25zdCBOYXZpZ2F0aW9uTW9kdWxlID0gY29ubmVjdChcbiAgICBtYXBTdGF0ZVRvUHJvcHMsXG4gICAgbWFwRGlzcGF0Y2hUb1Byb3BzLFxuKShOYXZpZ2F0aW9uKTtcblxuZXhwb3J0IHsgTmF2aWdhdGlvbk1vZHVsZSBhcyBkZWZhdWx0LCBOYXZpZ2F0aW9uTW9kdWxlIGFzIE5hdmlnYXRpb24gfTtcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIjtcbmltcG9ydCBHcmlkIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCI7XG5cbmltcG9ydCB7IExpbmsgfSBmcm9tIFwibW9kdWxlcy9saW5rXCI7XG5pbXBvcnQgeyBMb2NhbGl6ZSB9IGZyb20gXCJtb2R1bGVzL2xvY2FsaXplXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSG9tZURhdGEge31cblxuZXhwb3J0IGludGVyZmFjZSBIb21lSGFuZGxlcnMge31cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9tZSBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8SG9tZURhdGEgJiBIb21lSGFuZGxlcnM+IHtcbiAgICBwdWJsaWMgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIGp1c3RpZnk9XCJjZW50ZXJcIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPExpbmsgdG89XCIvbWVzc2FnZXNcIj5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgY29sb3I9XCJwcmltYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TG9jYWxpemUgaWQ9XCJob21lOnZpZXdNZXNzYWdlc1wiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5cbmltcG9ydCB7IFJvb3RTdGF0ZSB9IGZyb20gXCJyZWR1Y2Vyc1wiO1xuXG5pbXBvcnQgSG9tZSwgeyBIb21lRGF0YSwgSG9tZUhhbmRsZXJzIH0gZnJvbSBcIi4vSG9tZVwiO1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoX3N0YXRlOiBSb290U3RhdGUpOiBIb21lRGF0YSA9PiB7XG4gICAgcmV0dXJuIHt9O1xufTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzOiBIb21lSGFuZGxlcnMgPSB7fTtcblxuY29uc3QgSG9tZU1vZHVsZSA9IGNvbm5lY3QoXG4gICAgbWFwU3RhdGVUb1Byb3BzLFxuICAgIG1hcERpc3BhdGNoVG9Qcm9wcyxcbikoSG9tZSk7XG5cbmV4cG9ydCB7IEhvbWVNb2R1bGUgYXMgZGVmYXVsdCwgSG9tZU1vZHVsZSBhcyBIb21lIH07XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHsgUmVkaXJlY3QgfSBmcm9tIFwicmVhY3Qtcm91dGVyXCI7XG5cbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiO1xuaW1wb3J0IEdyaWQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRcIjtcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCI7XG5cbmltcG9ydCB7IExvY2FsaXplIH0gZnJvbSBcIm1vZHVsZXMvbG9jYWxpemVcIjtcblxuZXhwb3J0IGludGVyZmFjZSBMb2dpbkRhdGEge1xuICAgIGlzQXV0aGVudGljYXRlZDogYm9vbGVhbjtcbiAgICByZWRpcmVjdFBhdGg/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9naW5IYW5kbGVycyB7XG4gICAgc2lnblVwOiAoKSA9PiB2b2lkO1xufVxuXG5jbGFzcyBMb2dpbiBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8TG9naW5EYXRhICYgTG9naW5IYW5kbGVycz4ge1xuICAgIHB1YmxpYyByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgaXNBdXRoZW50aWNhdGVkLCByZWRpcmVjdFBhdGggfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgaWYgKGlzQXV0aGVudGljYXRlZCkge1xuICAgICAgICAgICAgcmV0dXJuIDxSZWRpcmVjdCB0bz17cmVkaXJlY3RQYXRofSAvPjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXIganVzdGlmeT1cImNlbnRlclwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIiBkaXJlY3Rpb249XCJjb2x1bW5cIj5cbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtPlxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBjb2xvcj1cImluaGVyaXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMb2NhbGl6ZSBpZD1cImxvZ2luOm5lZWRBdXRob3JpemVcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIGNvbG9yPVwicHJpbWFyeVwiIG9uQ2xpY2s9e3RoaXMucHJvcHMuc2lnblVwfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMb2NhbGl6ZSBpZD1cImxvZ2luOnNpZ25VcFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExvZ2luO1xuIiwiaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5cclxuaW1wb3J0IHsgUm9vdFN0YXRlIH0gZnJvbSBcInJlZHVjZXJzXCI7XHJcbmltcG9ydCB7IHNpZ25VcCB9IGZyb20gXCJyZWR1Y2Vycy9hY3Rpb25zXCI7XHJcblxyXG5pbXBvcnQgTG9naW4sIHsgTG9naW5EYXRhLCBMb2dpbkhhbmRsZXJzIH0gZnJvbSBcIi4vTG9naW5cIjtcclxuXHJcbmNvbnN0IGdldFJlZGlyZWN0UGF0aCA9IChwYXRoOiBzdHJpbmcpID0+IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IC8uKnJlZGlyZWN0UGF0aD0oPzxwYXRoPi4qKS4qLy5leGVjKHBhdGgpO1xyXG4gICAgcmV0dXJuIChyZXN1bHQgJiYgcmVzdWx0WzFdKSB8fCBcIi9cIjtcclxufTtcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZTogUm9vdFN0YXRlKTogTG9naW5EYXRhID0+IHtcclxuICAgIGNvbnN0IHJlZGlyZWN0UGF0aCA9IGdldFJlZGlyZWN0UGF0aChzdGF0ZS5yb3V0ZXIubG9jYXRpb24uc2VhcmNoKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGlzQXV0aGVudGljYXRlZDogQm9vbGVhbihzdGF0ZS5hdXRoLnRva2VuSW5mbyksXHJcbiAgICAgICAgcmVkaXJlY3RQYXRoLFxyXG4gICAgfTtcclxufTtcclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wczogTG9naW5IYW5kbGVycyA9IHtcclxuICAgIHNpZ25VcCxcclxufTtcclxuXHJcbmNvbnN0IExvZ2luTW9kdWxlID0gY29ubmVjdChcclxuICAgIG1hcFN0YXRlVG9Qcm9wcyxcclxuICAgIG1hcERpc3BhdGNoVG9Qcm9wcyxcclxuKShMb2dpbik7XHJcblxyXG5leHBvcnQgeyBMb2dpbk1vZHVsZSBhcyBkZWZhdWx0LCBMb2dpbk1vZHVsZSBhcyBMb2dpbiB9O1xyXG4iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3R5cGluZ3MtZm9yLWNzcy1tb2R1bGVzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNy0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vTWVzc2FnZXMuc2Nzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gUHJlcGFyZSBjc3NUcmFuc2Zvcm1hdGlvblxudmFyIHRyYW5zZm9ybTtcblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3R5cGluZ3MtZm9yLWNzcy1tb2R1bGVzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNy0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vTWVzc2FnZXMuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3R5cGluZ3MtZm9yLWNzcy1tb2R1bGVzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNy0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vTWVzc2FnZXMuc2Nzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IGNsYXNzTmFtZXMgPSByZXF1aXJlKFwiY2xhc3NuYW1lcy9iaW5kXCIpO1xuXG5pbXBvcnQgQ2lyY3VsYXJQcm9ncmVzcyBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2lyY3VsYXJQcm9ncmVzc1wiO1xuaW1wb3J0IEdyaWQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRcIjtcbmltcG9ydCBQYXBlciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXJcIjtcbmltcG9ydCBUYWJsZSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVcIjtcbmltcG9ydCBUYWJsZUJvZHkgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlQm9keVwiO1xuaW1wb3J0IFRhYmxlQ2VsbCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVDZWxsXCI7XG5pbXBvcnQgVGFibGVIZWFkIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUhlYWRcIjtcbmltcG9ydCBUYWJsZVJvdyBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVSb3dcIjtcblxuaW1wb3J0IExvY2FsaXplIGZyb20gXCJtb2R1bGVzL2xvY2FsaXplXCI7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vTWVzc2FnZXMuc2Nzc1wiO1xuY29uc3Qgc3R5bGUgPSBjbGFzc05hbWVzLmJpbmQoc3R5bGVzKTtcblxuaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gXCIuL3R5cGVzXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWVzc2FnZXNEYXRhIHtcbiAgICBpc0xvYWRpbmc6IGJvb2xlYW47XG4gICAgbWVzc2FnZXM/OiBNZXNzYWdlW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWVzc2FnZXNIYW5kbGVycyB7fVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZXNzYWdlcyBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8TWVzc2FnZXNEYXRhICYgTWVzc2FnZXNIYW5kbGVycz4ge1xuICAgIHB1YmxpYyByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgaXNMb2FkaW5nIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXIganVzdGlmeT1cImNlbnRlclwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIiBjbGFzc05hbWU9e3N0eWxlKHN0eWxlcy5tZXNzYWdlcyl9PlxuICAgICAgICAgICAgICAgIHtpc0xvYWRpbmcgPyB0aGlzLnJlbmRlclByZWxvYWRlcigpIDogdGhpcy5yZW5kZXJDb250ZW50KCl9XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZW5kZXJQcmVsb2FkZXIgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiA8Q2lyY3VsYXJQcm9ncmVzcyAvPjtcbiAgICB9O1xuXG4gICAgcHJpdmF0ZSByZW5kZXJDb250ZW50ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCB7IG1lc3NhZ2VzIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIGlmICghbWVzc2FnZXMpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxQYXBlcj5cbiAgICAgICAgICAgICAgICA8VGFibGU+XG4gICAgICAgICAgICAgICAgICAgIDxUYWJsZUhlYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVSb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExvY2FsaXplIGlkPVwibWVzc2FnZXM6ZnJvbVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExvY2FsaXplIGlkPVwibWVzc2FnZXM6c3ViamVjdFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlUm93PlxuICAgICAgICAgICAgICAgICAgICA8L1RhYmxlSGVhZD5cbiAgICAgICAgICAgICAgICAgICAgPFRhYmxlQm9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHttZXNzYWdlcy5tYXAocm93ID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVSb3cga2V5PXtyb3cuaWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPntyb3cuZnJvbX08L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD57cm93LnN1YmplY3R9PC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZVJvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQm9keT5cbiAgICAgICAgICAgICAgICA8L1RhYmxlPlxuICAgICAgICAgICAgPC9QYXBlcj5cbiAgICAgICAgKTtcbiAgICB9O1xufVxuIiwiaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuXG5pbXBvcnQgeyBSb290U3RhdGUgfSBmcm9tIFwicmVkdWNlcnNcIjtcblxuaW1wb3J0IE1lc3NhZ2VzLCB7IE1lc3NhZ2VzRGF0YSwgTWVzc2FnZXNIYW5kbGVycyB9IGZyb20gXCIuL01lc3NhZ2VzXCI7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZTogUm9vdFN0YXRlKTogTWVzc2FnZXNEYXRhID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICBtZXNzYWdlczogc3RhdGUubWVzc2FnZXMuaXRlbXMsXG4gICAgICAgIGlzTG9hZGluZzogc3RhdGUubWVzc2FnZXMuaXNMb2FkaW5nLFxuICAgIH07XG59O1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHM6IE1lc3NhZ2VzSGFuZGxlcnMgPSB7fTtcblxuY29uc3QgTWVzc2FnZXNNb2R1bGUgPSBjb25uZWN0KFxuICAgIG1hcFN0YXRlVG9Qcm9wcyxcbiAgICBtYXBEaXNwYXRjaFRvUHJvcHMsXG4pKE1lc3NhZ2VzKTtcblxuZXhwb3J0IHsgTWVzc2FnZXNNb2R1bGUgYXMgZGVmYXVsdCwgTWVzc2FnZXNNb2R1bGUgYXMgTWVzc2FnZXMgfTtcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgR3JpZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZFwiO1xuXG5pbXBvcnQgeyBMb2NhbGl6ZSB9IGZyb20gXCJtb2R1bGVzL2xvY2FsaXplXCI7XG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGRcIjtcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2V0dGluZ3NEYXRhIHtcbiAgICBjbGllbnRJZDogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNldHRpbmdzSGFuZGxlcnMge1xuICAgIG9uQ2hhbmdlQ2xpZW50SWQ6IChjbGllbnRJZDogc3RyaW5nKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZXR0aW5ncyBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8U2V0dGluZ3NEYXRhICYgU2V0dGluZ3NIYW5kbGVycz4ge1xuICAgIHB1YmxpYyByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgY2xpZW50SWQgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXIganVzdGlmeT1cImNlbnRlclwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIiBkaXJlY3Rpb249XCJjb2x1bW5cIj5cbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtPlxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBjb2xvcj1cImluaGVyaXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMb2NhbGl6ZSBpZD1cInNldHRpbmdzOmVudGVyQ2llbnRJZFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJvdXRsaW5lZC1uYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXs8TG9jYWxpemUgaWQ9XCJzZXR0aW5nczpjbGllbnRJZFwiIC8+fVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2NsaWVudElkfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICApO1xuICAgIH1cblxuICAgIHByaXZhdGUgaGFuZGxlQ2hhbmdlID0gKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgICAgICBjb25zdCBjbGllbnRJZCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQudmFsdWU7XG5cbiAgICAgICAgY29uc3QgeyBvbkNoYW5nZUNsaWVudElkIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBvbkNoYW5nZUNsaWVudElkKGNsaWVudElkKTtcbiAgICB9O1xufVxuIiwiaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuXG5pbXBvcnQgeyBSb290U3RhdGUgfSBmcm9tIFwicmVkdWNlcnNcIjtcblxuaW1wb3J0IFNldHRpbmdzLCB7IFNldHRpbmdzRGF0YSwgU2V0dGluZ3NIYW5kbGVycyB9IGZyb20gXCIuL1NldHRpbmdzXCI7XG5pbXBvcnQgeyBzZXRHbWFpbENsaWVudElkIH0gZnJvbSBcInJlZHVjZXJzL2FjdGlvbnNcIjtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlOiBSb290U3RhdGUpOiBTZXR0aW5nc0RhdGEgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIGNsaWVudElkOiBzdGF0ZS5zZXR0aW5ncy5jbGllbnRJZCB8fCBcIlwiLFxuICAgIH07XG59O1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHM6IFNldHRpbmdzSGFuZGxlcnMgPSB7XG4gICAgb25DaGFuZ2VDbGllbnRJZDogc2V0R21haWxDbGllbnRJZCxcbn07XG5cbmNvbnN0IFNldHRpbmdzTW9kdWxlID0gY29ubmVjdChcbiAgICBtYXBTdGF0ZVRvUHJvcHMsXG4gICAgbWFwRGlzcGF0Y2hUb1Byb3BzLFxuKShTZXR0aW5ncyk7XG5cbmV4cG9ydCB7IFNldHRpbmdzTW9kdWxlIGFzIGRlZmF1bHQsIFNldHRpbmdzTW9kdWxlIGFzIFNldHRpbmdzIH07XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCB7IFJlZGlyZWN0LCBSb3V0ZSwgUm91dGVQcm9wcyB9IGZyb20gXCJyZWFjdC1yb3V0ZXJcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUHJvdGVjdGVkUm91dGVEYXRhIGV4dGVuZHMgUm91dGVQcm9wcyB7XHJcbiAgICBpc0F1dGhlbnRpY2F0ZWQ6IGJvb2xlYW47XHJcbiAgICBjdXJyZW50UGF0aDogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFByb3RlY3RlZFJvdXRlSGFuZGxlcnMge31cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb3RlY3RlZFJvdXRlIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxcclxuICAgIFByb3RlY3RlZFJvdXRlRGF0YSAmIFByb3RlY3RlZFJvdXRlSGFuZGxlcnNcclxuPiB7XHJcbiAgICBwdWJsaWMgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgaXNBdXRoZW50aWNhdGVkLCBjdXJyZW50UGF0aCwgLi4ub3RoZXJQcm9wcyB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgaWYgKCFpc0F1dGhlbnRpY2F0ZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDxSZWRpcmVjdCB0bz17YC9sb2dpbj9yZWRpcmVjdFBhdGg9JHtjdXJyZW50UGF0aH1gfSAvPjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiA8Um91dGUgey4uLm90aGVyUHJvcHN9IC8+O1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gXCJyZWR1eFwiO1xyXG5pbXBvcnQgeyBjb25uZWN0QWR2YW5jZWQgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuXHJcbmltcG9ydCB7IFJvb3RTdGF0ZSB9IGZyb20gXCJyZWR1Y2Vyc1wiO1xyXG5cclxuaW1wb3J0IFByb3RlY3RlZFJvdXRlIGZyb20gXCIuL1Byb3RlY3RlZFJvdXRlXCI7XHJcblxyXG4vLyBUT0RPOiBBZGQgQ29tcG9uZW50IHR5cGVzIGluZmVyZW5jZVxyXG5pbXBvcnQgeyBSb3V0ZVByb3BzIH0gZnJvbSBcInJlYWN0LXJvdXRlclwiO1xyXG5pbXBvcnQgeyBQcm90ZWN0ZWRSb3V0ZURhdGEsIFByb3RlY3RlZFJvdXRlSGFuZGxlcnMgfSBmcm9tIFwiLi9Qcm90ZWN0ZWRSb3V0ZVwiO1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlOiBSb290U3RhdGUpOiBQcm90ZWN0ZWRSb3V0ZURhdGEgPT4ge1xyXG4gICAgLy8gVE9ETzogQWRkIHRva2VuIHZhbGlkYXRpb25cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgaXNBdXRoZW50aWNhdGVkOiBCb29sZWFuKHN0YXRlLmF1dGgudG9rZW5JbmZvKSxcclxuICAgICAgICBjdXJyZW50UGF0aDogc3RhdGUucm91dGVyLmxvY2F0aW9uLnBhdGhuYW1lLFxyXG4gICAgfTtcclxufTtcclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCk6IFByb3RlY3RlZFJvdXRlSGFuZGxlcnMgPT4ge1xyXG4gICAgY29uc3QgYWN0aW9uQ3JlYXRvcnMgPSB7fTtcclxuICAgIHJldHVybiBiaW5kQWN0aW9uQ3JlYXRvcnMoYWN0aW9uQ3JlYXRvcnMsIGRpc3BhdGNoKTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIHNlbGVjdG9yRmFjdG9yeShkaXNwYXRjaCkge1xyXG4gICAgY29uc3QgYWN0aW9ucyA9IG1hcERpc3BhdGNoVG9Qcm9wcyhkaXNwYXRjaCk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICBuZXh0U3RhdGU6IFJvb3RTdGF0ZSxcclxuICAgICAgICBuZXdPd25Qcm9wczogUm91dGVQcm9wcyxcclxuICAgICk6IFByb3RlY3RlZFJvdXRlRGF0YSAmIFByb3RlY3RlZFJvdXRlSGFuZGxlcnMgPT4gKHtcclxuICAgICAgICAuLi5tYXBTdGF0ZVRvUHJvcHMobmV4dFN0YXRlKSxcclxuICAgICAgICAuLi5hY3Rpb25zLFxyXG4gICAgICAgIC4uLm5ld093blByb3BzLFxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmNvbnN0IFByb3RlY3RlZFJvdXRlTW9kdWxlID0gY29ubmVjdEFkdmFuY2VkKHNlbGVjdG9yRmFjdG9yeSkoUHJvdGVjdGVkUm91dGUpO1xyXG5cclxuZXhwb3J0IHsgUHJvdGVjdGVkUm91dGVNb2R1bGUgYXMgZGVmYXVsdCwgUHJvdGVjdGVkUm91dGVNb2R1bGUgYXMgUHJvdGVjdGVkUm91dGUgfTtcclxuIiwiaW1wb3J0IHsgQWN0aW9uIGFzIFJlZHV4QWN0aW9uIH0gZnJvbSBcInJlZHV4XCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWN0aW9uPFQgZXh0ZW5kcyBzdHJpbmcgPSBzdHJpbmc+IGV4dGVuZHMgUmVkdXhBY3Rpb24ge1xuICAgIHJlYWRvbmx5IHR5cGU6IFQ7XG59XG5cbmV4cG9ydCB0eXBlIEFjdGlvbldpdGhQYXlsb2FkPFQgZXh0ZW5kcyBzdHJpbmcsIFBheWxvYWQ+ID0gQWN0aW9uPFQ+ICYgUGF5bG9hZDtcblxuaW50ZXJmYWNlIEFjdGlvbkNyZWF0b3I8VCBleHRlbmRzIHN0cmluZyA9IHN0cmluZz4ge1xuICAgICgpOiBBY3Rpb248VD47XG4gICAgdHlwZTogVDtcbn1cblxuaW50ZXJmYWNlIEFjdGlvbldpdGhQYXlsb2FkQ3JlYXRvcjxcbiAgICBUIGV4dGVuZHMgc3RyaW5nID0gc3RyaW5nLFxuICAgIEFyZ3NUeXBlIGV4dGVuZHMgdW5rbm93bltdID0gW10sXG4gICAgUGF5bG9hZFR5cGUgPSB7fVxuPiB7XG4gICAgKC4uLmFyZ3M6IEFyZ3NUeXBlKTogQWN0aW9uV2l0aFBheWxvYWQ8VCwgUGF5bG9hZFR5cGU+O1xuICAgIHR5cGU6IFQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhY3Rpb25DcmVhdG9yPFQgZXh0ZW5kcyBzdHJpbmc+KHR5cGU6IFQpOiBBY3Rpb25DcmVhdG9yPFQ+O1xuZXhwb3J0IGZ1bmN0aW9uIGFjdGlvbkNyZWF0b3I8VCBleHRlbmRzIHN0cmluZywgQXJnc1R5cGUgZXh0ZW5kcyB1bmtub3duW10sIFBheWxvYWRUeXBlPihcbiAgICB0eXBlOiBULFxuICAgIG1hcHBlcj86ICguLi5hcmdzOiBBcmdzVHlwZSkgPT4gUGF5bG9hZFR5cGUsXG4pOiBBY3Rpb25XaXRoUGF5bG9hZENyZWF0b3I8VCwgQXJnc1R5cGUsIFBheWxvYWRUeXBlPjtcblxuZXhwb3J0IGZ1bmN0aW9uIGFjdGlvbkNyZWF0b3IodHlwZSwgbWFwcGVyPykge1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgICBjb25zdCBhY3Rpb25DcmVhdG9yOiBhbnkgPSBmdW5jdGlvbiguLi5hcmdzKSB7XG4gICAgICAgIGNvbnN0IHBheWxvYWQgPSBtYXBwZXIgPyBtYXBwZXIoLi4uYXJncykgOiB1bmRlZmluZWQ7XG4gICAgICAgIHJldHVybiBjcmVhdGVBY3Rpb24odHlwZSwgcGF5bG9hZCk7XG4gICAgfTtcblxuICAgIGFjdGlvbkNyZWF0b3IudHlwZSA9IHR5cGU7XG5cbiAgICByZXR1cm4gYWN0aW9uQ3JlYXRvcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUFjdGlvbjxUIGV4dGVuZHMgc3RyaW5nLCBQPih0eXBlOiBUKTogQWN0aW9uPFQ+O1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUFjdGlvbjxUIGV4dGVuZHMgc3RyaW5nLCBQPih0eXBlOiBULCBwYXlsb2FkOiBQKTogQWN0aW9uV2l0aFBheWxvYWQ8VCwgUD47XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVBY3Rpb24odHlwZSwgcGF5bG9hZD8pIHtcbiAgICByZXR1cm4gcGF5bG9hZCA9PT0gdW5kZWZpbmVkID8geyB0eXBlIH0gOiB7IHR5cGUsIC4uLnBheWxvYWQgfTtcbn1cbiIsImV4cG9ydCB7IEFjdGlvbiwgQWN0aW9uV2l0aFBheWxvYWQgfSBmcm9tIFwiLi9hY3Rpb24taGVscGVyc1wiO1xuXG5leHBvcnQgKiBmcm9tIFwiLi9tZXNzYWdlc1wiO1xuZXhwb3J0ICogZnJvbSBcIi4vcHJvZmlsZVwiO1xuZXhwb3J0ICogZnJvbSBcIi4vc2V0dGluZ3NcIjtcbmV4cG9ydCAqIGZyb20gXCIuL3NpZ25VcFwiO1xuIiwiaW1wb3J0IHsgYWN0aW9uQ3JlYXRvciB9IGZyb20gXCIuL2FjdGlvbi1oZWxwZXJzXCI7XG5cbmltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tIFwibW9kZWwvbWVzc2FnZVwiO1xuXG5leHBvcnQgY29uc3QgbG9hZE1lc3NhZ2VzID0gYWN0aW9uQ3JlYXRvcihcIm1lc3NhZ2VzL0xPQURcIik7XG5cbmV4cG9ydCBjb25zdCBsb2FkTWVzc2FnZXNTdWNjZXNzID0gYWN0aW9uQ3JlYXRvcihcbiAgICBcIm1lc3NhZ2VzL0xPQURfU1VDQ0VTU1wiLFxuICAgIChtZXNzYWdlczogTWVzc2FnZVtdKSA9PiAoe1xuICAgICAgICBtZXNzYWdlcyxcbiAgICB9KSxcbik7XG5cbmV4cG9ydCBjb25zdCBsb2FkTWVzc2FnZXNGYWlsdXJlID0gYWN0aW9uQ3JlYXRvcihcbiAgICBcIm1lc3NhZ2VzL0xPQURfRkFJTFVSRVwiLFxuICAgIChlcm9ycjogRXJyb3IsIG1lc3NhZ2U6IHN0cmluZykgPT4gKHsgZXJvcnIsIG1lc3NhZ2UgfSksXG4pO1xuIiwiaW1wb3J0IHsgYWN0aW9uQ3JlYXRvciB9IGZyb20gXCIuL2FjdGlvbi1oZWxwZXJzXCI7XG5cbmltcG9ydCB7IFByb2ZpbGUgfSBmcm9tIFwibW9kZWwvcHJvZmlsZVwiO1xuXG5leHBvcnQgY29uc3QgcmVxdWVzdFByb2ZpbGUgPSBhY3Rpb25DcmVhdG9yKFwicHJvZmlsZS9QUk9GSUxFX1JFUVVFU1RcIik7XG5cbmV4cG9ydCBjb25zdCByZXF1ZXN0UHJvZmlsZVN1Y2Nlc3MgPSBhY3Rpb25DcmVhdG9yKFwicHJvZmlsZS9QUk9GSUxFX1NVQ0NFU1NcIiwgKHByb2ZpbGU6IFByb2ZpbGUpID0+ICh7XG4gICAgcHJvZmlsZSxcbn0pKTtcblxuZXhwb3J0IGNvbnN0IHJlcXVlc3RQcm9maWxlRmFpbHVyZSA9IGFjdGlvbkNyZWF0b3IoXG4gICAgXCJwcm9maWxlL1BST0ZJTEVfRkFJTFVSRVwiLFxuICAgIChlcm9ycjogRXJyb3IsIG1lc3NhZ2U6IHN0cmluZykgPT4gKHsgZXJvcnIsIG1lc3NhZ2UgfSksXG4pO1xuIiwiaW1wb3J0IHsgYWN0aW9uQ3JlYXRvciB9IGZyb20gXCIuL2FjdGlvbi1oZWxwZXJzXCI7XG5cbmV4cG9ydCBjb25zdCBzZXRHbWFpbENsaWVudElkID0gYWN0aW9uQ3JlYXRvcihcbiAgICBcInNldHRpbmdzL1NFVF9HTUFJTF9DTElFTlRfSURcIixcbiAgICAoY2xpZW50SWQ6IHN0cmluZykgPT4gKHtcbiAgICAgICAgY2xpZW50SWQsXG4gICAgfSksXG4pO1xuIiwiaW1wb3J0IHsgYWN0aW9uQ3JlYXRvciB9IGZyb20gXCIuL2FjdGlvbi1oZWxwZXJzXCI7XHJcblxyXG5pbXBvcnQgeyBUb2tlbkluZm8gfSBmcm9tIFwibW9kZWxcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBzaWduVXAgPSBhY3Rpb25DcmVhdG9yKFwic2lnblVwL1NJR05fVVBfUkVRVUVTVFwiKTtcclxuXHJcbmV4cG9ydCBjb25zdCBzaWduVXBTdWNjZXNzID0gYWN0aW9uQ3JlYXRvcihcInNpZ25VcC9TSUdOX1VQX1NVQ0NFU1NcIiwgKHRva2VuSW5mbzogVG9rZW5JbmZvKSA9PiAoe1xyXG4gICAgdG9rZW5JbmZvLFxyXG59KSk7XHJcblxyXG5leHBvcnQgY29uc3Qgc2lnblVwRmFpbCA9IGFjdGlvbkNyZWF0b3IoXHJcbiAgICBcInNpZ25VcC9TSUdOX1VQX0ZBSUxVUkVcIixcclxuICAgIChlcm9ycjogRXJyb3IsIG1lc3NhZ2U6IHN0cmluZykgPT4gKHsgZXJvcnIsIG1lc3NhZ2UgfSksXHJcbik7XHJcbiIsImltcG9ydCB7IFJlZHVjZXIgfSBmcm9tIFwicmVkdXhcIjtcbmltcG9ydCB7IEFjdGlvbnMgfSBmcm9tIFwicmVkdWNlcnNcIjtcblxuaW1wb3J0IHsgVG9rZW5JbmZvIH0gZnJvbSBcIm1vZGVsXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3RhdGUge1xuICAgIHRva2VuSW5mbz86IFRva2VuSW5mbztcbiAgICBlcnJvck1lc3NhZ2U/OiBzdHJpbmc7XG59XG5cbmNvbnN0IHJlZHVjZXI6IFJlZHVjZXI8U3RhdGU+ID0gKHN0YXRlID0ge30sIGFjdGlvbjogQWN0aW9ucykgPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSBcInNpZ25VcC9TSUdOX1VQX1JFUVVFU1RcIjoge1xuICAgICAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgXCJzaWduVXAvU0lHTl9VUF9TVUNDRVNTXCI6IHtcbiAgICAgICAgICAgIGNvbnN0IHsgdG9rZW5JbmZvIH0gPSBhY3Rpb247XG4gICAgICAgICAgICByZXR1cm4geyB0b2tlbkluZm8gfTtcbiAgICAgICAgfVxuICAgICAgICBjYXNlIFwic2lnblVwL1NJR05fVVBfRkFJTFVSRVwiOiB7XG4gICAgICAgICAgICBjb25zdCB7IG1lc3NhZ2UgfSA9IGFjdGlvbjtcbiAgICAgICAgICAgIHJldHVybiB7IGVycm9yTWVzc2FnZTogbWVzc2FnZSB9O1xuICAgICAgICB9XG4gICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XG4iLCJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tIFwicmVkdXhcIjtcbmltcG9ydCB7IGNvbm5lY3RSb3V0ZXIgfSBmcm9tIFwiY29ubmVjdGVkLXJlYWN0LXJvdXRlclwiO1xuXG5pbXBvcnQgYXV0aCBmcm9tIFwiLi9hdXRoXCI7XG5pbXBvcnQgbWVzc2FnZXMgZnJvbSBcIi4vbWVzc2FnZXNcIjtcbmltcG9ydCBwcm9maWxlIGZyb20gXCIuL3Byb2ZpbGVcIjtcbmltcG9ydCBzZXR0aW5ncyBmcm9tIFwiLi9zZXR0aW5nc1wiO1xuXG5leHBvcnQgY29uc3Qgcm9vdFJlZHVjZXIgPSBoaXN0b3J5ID0+XG4gICAgY29tYmluZVJlZHVjZXJzKHtcbiAgICAgICAgcm91dGVyOiBjb25uZWN0Um91dGVyKGhpc3RvcnkpLFxuXG4gICAgICAgIGF1dGgsXG4gICAgICAgIG1lc3NhZ2VzLFxuICAgICAgICBwcm9maWxlLFxuICAgICAgICBzZXR0aW5ncyxcbiAgICB9KTtcblxuZXhwb3J0IHsgQWN0aW9ucyB9IGZyb20gXCIuL2FjdGlvblR5cGVzXCI7XG5leHBvcnQgdHlwZSBSb290U3RhdGUgPSBSZXR1cm5UeXBlPFJldHVyblR5cGU8dHlwZW9mIHJvb3RSZWR1Y2VyPj47XG5cbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyO1xuIiwiaW1wb3J0IHsgUmVkdWNlciB9IGZyb20gXCJyZWR1eFwiO1xuaW1wb3J0IHsgQWN0aW9ucyB9IGZyb20gXCJyZWR1Y2Vyc1wiO1xuXG5pbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSBcIm1vZGVsXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3RhdGUge1xuICAgIGlzTG9hZGluZzogYm9vbGVhbjtcbiAgICBpdGVtcz86IE1lc3NhZ2VbXTtcbiAgICBlcnJvck1lc3NhZ2U/OiBzdHJpbmc7XG59XG5cbmNvbnN0IERlZmF1bFN0YXRlOiBTdGF0ZSA9IHtcbiAgICBpc0xvYWRpbmc6IGZhbHNlLFxufTtcblxuY29uc3QgcmVkdWNlcjogUmVkdWNlcjxTdGF0ZT4gPSAoc3RhdGUgPSBEZWZhdWxTdGF0ZSwgYWN0aW9uOiBBY3Rpb25zKTogU3RhdGUgPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSBcIm1lc3NhZ2VzL0xPQURcIjoge1xuICAgICAgICAgICAgcmV0dXJuIHsgaXNMb2FkaW5nOiB0cnVlIH07XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBcIm1lc3NhZ2VzL0xPQURfU1VDQ0VTU1wiOiB7XG4gICAgICAgICAgICBjb25zdCB7IG1lc3NhZ2VzIH0gPSBhY3Rpb247XG4gICAgICAgICAgICByZXR1cm4geyBpc0xvYWRpbmc6IGZhbHNlLCBpdGVtczogbWVzc2FnZXMgfTtcbiAgICAgICAgfVxuICAgICAgICBjYXNlIFwibWVzc2FnZXMvTE9BRF9GQUlMVVJFXCI6IHtcbiAgICAgICAgICAgIGNvbnN0IHsgbWVzc2FnZSB9ID0gYWN0aW9uO1xuICAgICAgICAgICAgcmV0dXJuIHsgaXNMb2FkaW5nOiBmYWxzZSwgZXJyb3JNZXNzYWdlOiBtZXNzYWdlIH07XG4gICAgICAgIH1cbiAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcbiIsImltcG9ydCB7IFJlZHVjZXIgfSBmcm9tIFwicmVkdXhcIjtcbmltcG9ydCB7IEFjdGlvbnMgfSBmcm9tIFwicmVkdWNlcnNcIjtcblxuaW1wb3J0IHsgUHJvZmlsZSB9IGZyb20gXCJtb2RlbFwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFN0YXRlIHtcbiAgICBpdGVtPzogUHJvZmlsZTtcbiAgICBlcnJvck1lc3NhZ2U/OiBzdHJpbmc7XG59XG5cbmNvbnN0IHJlZHVjZXI6IFJlZHVjZXI8U3RhdGU+ID0gKHN0YXRlID0ge30sIGFjdGlvbjogQWN0aW9ucyk6IFN0YXRlID0+IHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgXCJwcm9maWxlL1BST0ZJTEVfUkVRVUVTVFwiOiB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBjYXNlIFwicHJvZmlsZS9QUk9GSUxFX1NVQ0NFU1NcIjoge1xuICAgICAgICAgICAgY29uc3QgeyBwcm9maWxlIH0gPSBhY3Rpb247XG4gICAgICAgICAgICByZXR1cm4geyBpdGVtOiBwcm9maWxlIH07XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBcInByb2ZpbGUvUFJPRklMRV9GQUlMVVJFXCI6IHtcbiAgICAgICAgICAgIGNvbnN0IHsgbWVzc2FnZSB9ID0gYWN0aW9uO1xuICAgICAgICAgICAgcmV0dXJuIHsgZXJyb3JNZXNzYWdlOiBtZXNzYWdlIH07XG4gICAgICAgIH1cbiAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcbiIsImltcG9ydCB7IFJlZHVjZXIgfSBmcm9tIFwicmVkdXhcIjtcbmltcG9ydCB7IEFjdGlvbnMgfSBmcm9tIFwicmVkdWNlcnNcIjtcblxuZXhwb3J0IGludGVyZmFjZSBTdGF0ZSB7XG4gICAgY2xpZW50SWQ/OiBzdHJpbmc7XG59XG5cbmNvbnN0IHJlZHVjZXI6IFJlZHVjZXI8U3RhdGU+ID0gKHN0YXRlID0ge30sIGFjdGlvbjogQWN0aW9ucyk6IFN0YXRlID0+IHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgXCJzZXR0aW5ncy9TRVRfR01BSUxfQ0xJRU5UX0lEXCI6IHtcbiAgICAgICAgICAgIGNvbnN0IHsgY2xpZW50SWQgfSA9IGFjdGlvbjtcbiAgICAgICAgICAgIHJldHVybiB7IGNsaWVudElkIH07XG4gICAgICAgIH1cbiAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcbiIsImV4cG9ydCB7IGxvYWRNZXNzYWdlcyB9IGZyb20gXCIuL2xvYWRNZXNzYWdlc1wiO1xuZXhwb3J0IHsgbG9hZFByb2ZpbGUgfSBmcm9tIFwiLi9sb2FkUHJvZmlsZVwiO1xuIiwiaW1wb3J0IHsgY2FsbCB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcblxuaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gXCJtb2RlbFwiO1xuXG5pbXBvcnQgKiBhcyBnbWFpbEFwaSBmcm9tIFwiYXBpL2dtYWlsXCI7XG5cbmltcG9ydCB7IHNlbmRBdXRob3JpemVSZXF1ZXN0U2FnYSB9IGZyb20gXCIuL3NlbmRBdXRob3JpemVSZXF1ZXN0U2FnYVwiO1xuXG5leHBvcnQgZnVuY3Rpb24qIGxvYWRNZXNzYWdlcyh1c2VySWQ6IHN0cmluZykge1xuICAgIGNvbnN0IG1lc3NhZ2VMaXN0OiBnbWFpbEFwaS5NZXNzYWdlTGlzdCA9IHlpZWxkIGNhbGwoXG4gICAgICAgIHNlbmRBdXRob3JpemVSZXF1ZXN0U2FnYSxcbiAgICAgICAgZ21haWxBcGkuZ2V0TWVzc2FnZUxpc3QodXNlcklkLCAxMCksXG4gICAgKTtcblxuICAgIGNvbnN0IG1lc3NhZ2VzOiBNZXNzYWdlW10gPSBbXTtcblxuICAgIGZvciAoY29uc3QgbWVzc2FnZUluZm8gb2YgbWVzc2FnZUxpc3QubWVzc2FnZXMpIHtcbiAgICAgICAgY29uc3QgbWVzc2FnZTogZ21haWxBcGkuTWVzc2FnZSA9IHlpZWxkIGNhbGwoXG4gICAgICAgICAgICBzZW5kQXV0aG9yaXplUmVxdWVzdFNhZ2EsXG4gICAgICAgICAgICBnbWFpbEFwaS5nZXRNZXNzYWdlKHVzZXJJZCwgbWVzc2FnZUluZm8uaWQpLFxuICAgICAgICApO1xuXG4gICAgICAgIG1lc3NhZ2VzLnB1c2gocGFyc2VNZXNzYWdlKG1lc3NhZ2UpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVzc2FnZXM7XG59XG5cbmNvbnN0IHBhcnNlTWVzc2FnZSA9IChtZXNzYWdlOiBnbWFpbEFwaS5NZXNzYWdlKTogTWVzc2FnZSA9PiB7XG4gICAgY29uc3QgZnJvbSA9IG1lc3NhZ2UucGF5bG9hZC5oZWFkZXJzLmZpbmQoeCA9PiB4Lm5hbWUgPT09IGdtYWlsQXBpLkhlYWRlclR5cGUuRnJvbSkudmFsdWU7XG4gICAgY29uc3Qgc3ViamVjdCA9IG1lc3NhZ2UucGF5bG9hZC5oZWFkZXJzLmZpbmQoeCA9PiB4Lm5hbWUgPT09IGdtYWlsQXBpLkhlYWRlclR5cGUuU3ViamVjdCkudmFsdWU7XG5cbiAgICByZXR1cm4geyBpZDogbWVzc2FnZS5pZCwgZnJvbSwgc3ViamVjdCB9O1xufTtcbiIsImltcG9ydCB7IGNhbGwgfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XHJcblxyXG5pbXBvcnQgeyBQcm9maWxlIH0gZnJvbSBcIm1vZGVsL3Byb2ZpbGVcIjtcclxuXHJcbmltcG9ydCAqIGFzIGdtYWlsQXBpIGZyb20gXCJhcGkvZ21haWxcIjtcclxuXHJcbmltcG9ydCB7IHNlbmRBdXRob3JpemVSZXF1ZXN0U2FnYSB9IGZyb20gXCIuL3NlbmRBdXRob3JpemVSZXF1ZXN0U2FnYVwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uKiBsb2FkUHJvZmlsZSgpIHtcclxuICAgIGNvbnN0IHByb2ZpbGU6IGdtYWlsQXBpLlByb2ZpbGUgPSB5aWVsZCBjYWxsKFxyXG4gICAgICAgIHNlbmRBdXRob3JpemVSZXF1ZXN0U2FnYSxcclxuICAgICAgICBnbWFpbEFwaS5nZXRQcm9maWxlKFwibWVcIiksXHJcbiAgICApO1xyXG4gICAgcmV0dXJuIHBhcnNlUHJvZmlsZShwcm9maWxlKTtcclxufVxyXG5cclxuY29uc3QgcGFyc2VQcm9maWxlID0gKHByb2ZpbGU6IGdtYWlsQXBpLlByb2ZpbGUpOiBQcm9maWxlID0+IHtcclxuICAgIHJldHVybiB7IGVtYWlsOiBwcm9maWxlLmVtYWlsQWRkcmVzcyB9O1xyXG59O1xyXG4iLCJpbXBvcnQgeyBjYWxsLCBzZWxlY3QgfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XHJcblxyXG5pbXBvcnQgeyBSb290U3RhdGUgfSBmcm9tIFwicmVkdWNlcnNcIjtcclxuXHJcbmltcG9ydCB7IEFwaVJlcXVlc3QgfSBmcm9tIFwiYXBpL0FwaVJlcXVlc3RcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiogc2VuZEF1dGhvcml6ZVJlcXVlc3RTYWdhPFQ+KHJlcXVlc3Q6IEFwaVJlcXVlc3Q8VD4pIHtcclxuICAgIGNvbnN0IHRva2VuID0geWllbGQgY2FsbChnZXRUb2tlbik7XHJcblxyXG4gICAgcmV0dXJuIHlpZWxkIGNhbGwoXHJcbiAgICAgICAgcmVxdWVzdC53aXRoSGVhZGVycyh7XHJcbiAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG4gICAgICAgIH0pLmV4ZWN1dGUsXHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24qIGdldFRva2VuKCkge1xyXG4gICAgY29uc3QgdG9rZW4gPSB5aWVsZCBzZWxlY3QoKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLmF1dGgudG9rZW5JbmZvLnRva2VuKTtcclxuICAgIHJldHVybiB0b2tlbjtcclxufVxyXG4iLCJpbXBvcnQgeyBmb3JrIH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xuXG5pbXBvcnQgeyBhdXRoU2FnYSB9IGZyb20gXCIuL29hdXRoU2FnYVwiO1xuaW1wb3J0IHsgbWVzc2FnZXNTYWdhIH0gZnJvbSBcIi4vbWVzc2FnZXNTYWdhXCI7XG5pbXBvcnQgeyBwcm9maWxlU2FnYSB9IGZyb20gXCIuL3Byb2ZpbGVTYWdhXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiByb290U2FnYSgpIHtcbiAgICB5aWVsZCBmb3JrKGF1dGhTYWdhKTtcbiAgICB5aWVsZCBmb3JrKG1lc3NhZ2VzU2FnYSk7XG4gICAgeWllbGQgZm9yayhwcm9maWxlU2FnYSk7XG59XG4iLCJpbXBvcnQgeyBjYWxsLCBwdXQsIHNlbGVjdCwgdGFrZUxhdGVzdCB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcblxuaW1wb3J0IHsgUm9vdFN0YXRlIH0gZnJvbSBcInJlZHVjZXJzXCI7XG5pbXBvcnQgeyBsb2FkTWVzc2FnZXMsIGxvYWRNZXNzYWdlc0ZhaWx1cmUsIGxvYWRNZXNzYWdlc1N1Y2Nlc3MgfSBmcm9tIFwicmVkdWNlcnMvYWN0aW9uc1wiO1xuXG5pbXBvcnQgKiBhcyBnbWFpbFNlcnZpY2VzIGZyb20gXCJzYWdhcy9nbWFpbFwiO1xuaW1wb3J0IHsgTWVzc2FnZSwgUHJvZmlsZSB9IGZyb20gXCJtb2RlbFwiO1xuXG5leHBvcnQgZnVuY3Rpb24qIG1lc3NhZ2VzU2FnYSgpIHtcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KGxvYWRNZXNzYWdlcy50eXBlLCBwcm9jZXNzTG9naW4pO1xufVxuXG5mdW5jdGlvbiogcHJvY2Vzc0xvZ2luKF9hY3Rpb246IFJldHVyblR5cGU8dHlwZW9mIGxvYWRNZXNzYWdlcz4pIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBwcm9maWxlOiBQcm9maWxlID0geWllbGQgY2FsbChnZXRQcm9maWxlKTtcblxuICAgICAgICBjb25zdCBtZXNzYWdlczogTWVzc2FnZVtdID0geWllbGQgY2FsbChnbWFpbFNlcnZpY2VzLmxvYWRNZXNzYWdlcywgcHJvZmlsZS5lbWFpbCk7XG5cbiAgICAgICAgeWllbGQgcHV0KGxvYWRNZXNzYWdlc1N1Y2Nlc3MobWVzc2FnZXMpKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgeWllbGQgcHV0KGxvYWRNZXNzYWdlc0ZhaWx1cmUoZXJyLCBlcnIudG9TdHJpbmcoKSkpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24qIGdldFByb2ZpbGUoKSB7XG4gICAgY29uc3QgcHJvZmlsZTogUm9vdFN0YXRlW1wicHJvZmlsZVwiXSA9IHlpZWxkIHNlbGVjdCgoc3RhdGU6IFJvb3RTdGF0ZSkgPT4gc3RhdGUucHJvZmlsZSk7XG5cbiAgICBpZiAoIXByb2ZpbGUuaXRlbSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVc2VyIHByb2ZpbGUgaXMgbm90IGxvYWRlZFwiKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvZmlsZS5pdGVtO1xufVxuIiwiaW1wb3J0IHsgSVByb3ZpZGVyIH0gZnJvbSBcInJlYWN0LXNpbXBsZS1hdXRoXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2Vzc2lvbiB7XG4gICAgYWNjZXNzVG9rZW46IHN0cmluZztcbiAgICB0b2tlblR5cGU6IHN0cmluZztcbiAgICBleHBpcmVEdXJhdGlvblNlY29uZHM6IG51bWJlcjtcbiAgICBzdGF0ZTogc3RyaW5nO1xuICAgIHNjb3BlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBlbnVtIFNjb3BlcyB7XG4gICAgXCJnbWFpbC5yZWFkb25seVwiID0gXCJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9hdXRoL2dtYWlsLnJlYWRvbmx5XCIsXG59XG5cbmV4cG9ydCBjb25zdCBidWlsZEdvb2dsZVByb3ZpZGVyID0gKFxuICAgIGNsaWVudElkOiBzdHJpbmcsXG4gICAgc2NvcGVzOiBTY29wZXNbXSA9IFtTY29wZXNbXCJnbWFpbC5yZWFkb25seVwiXV0sXG4pOiBJUHJvdmlkZXI8U2Vzc2lvbj4gPT4gKHtcbiAgICBidWlsZEF1dGhvcml6ZVVybCgpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIFwiaHR0cHM6Ly9hY2NvdW50cy5nb29nbGUuY29tL28vb2F1dGgyL3YyL2F1dGhcIiArXG4gICAgICAgICAgICBgP3Njb3BlPSR7ZW5jb2RlU2NvcGVzKHNjb3Blcyl9YCArXG4gICAgICAgICAgICBcIiZpbmNsdWRlX2dyYW50ZWRfc2NvcGVzPXRydWVcIiArXG4gICAgICAgICAgICBcIiZzdGF0ZT1zdGF0ZV9wYXJhbWV0ZXJfcGFzc3Rocm91Z2hfdmFsdWVcIiArXG4gICAgICAgICAgICBgJnJlZGlyZWN0X3VyaT0ke2VuY29kZVVSSUNvbXBvbmVudChgJHt3aW5kb3cubG9jYXRpb24ub3JpZ2lufS9yZWRpcmVjdC5odG1sYCl9YCArXG4gICAgICAgICAgICBcIiZyZXNwb25zZV90eXBlPXRva2VuXCIgK1xuICAgICAgICAgICAgYCZjbGllbnRfaWQ9JHtjbGllbnRJZH1gXG4gICAgICAgICk7XG4gICAgfSxcblxuICAgIGV4dHJhY3RFcnJvcihyZWRpcmVjdFVybDogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IGVycm9yUmVhc29uOiBzdHJpbmcgPSBnZXRQYXJhbWV0ZXJzKHJlZGlyZWN0VXJsLCBcImVycm9yXCIpO1xuXG4gICAgICAgIHJldHVybiBlcnJvclJlYXNvbiA/IG5ldyBFcnJvcihlcnJvclJlYXNvbikgOiB1bmRlZmluZWQ7XG4gICAgfSxcblxuICAgIGV4dHJhY3RTZXNzaW9uKHJlZGlyZWN0VXJsOiBzdHJpbmcpOiBTZXNzaW9uIHtcbiAgICAgICAgY29uc3QgYWNjZXNzVG9rZW46IHN0cmluZyA9IGdldFBhcmFtZXRlcnMocmVkaXJlY3RVcmwsIFwiYWNjZXNzX3Rva2VuXCIpO1xuICAgICAgICBjb25zdCB0b2tlblR5cGU6IHN0cmluZyA9IGdldFBhcmFtZXRlcnMocmVkaXJlY3RVcmwsIFwidG9rZW5fdHlwZVwiKTtcbiAgICAgICAgY29uc3Qgc3RhdGU6IHN0cmluZyA9IGdldFBhcmFtZXRlcnMocmVkaXJlY3RVcmwsIFwic3RhdGVcIik7XG4gICAgICAgIGNvbnN0IHNjb3BlOiBzdHJpbmcgPSBnZXRQYXJhbWV0ZXJzKHJlZGlyZWN0VXJsLCBcInNjb3BlXCIpO1xuICAgICAgICBjb25zdCBleHBpcmVEdXJhdGlvblNlY29uZHMgPSBwYXJzZUludChnZXRQYXJhbWV0ZXJzKHJlZGlyZWN0VXJsLCBcImV4cGlyZXNfaW5cIiksIDEwKTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWNjZXNzVG9rZW4sXG4gICAgICAgICAgICBleHBpcmVEdXJhdGlvblNlY29uZHMsXG4gICAgICAgICAgICB0b2tlblR5cGUsXG4gICAgICAgICAgICBzdGF0ZSxcbiAgICAgICAgICAgIHNjb3BlLFxuICAgICAgICB9O1xuICAgIH0sXG5cbiAgICB2YWxpZGF0ZVNlc3Npb24oX3Nlc3Npb246IFNlc3Npb24pOiBib29sZWFuIHtcbiAgICAgICAgLy8gVE9ETzogQWRkIHZhbGlkYXRpb25cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSxcblxuICAgIGdldEFjY2Vzc1Rva2VuKHNlc3Npb246IFNlc3Npb24sIF9yZXNvdXJjZUlkOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gc2Vzc2lvbi5hY2Nlc3NUb2tlbjtcbiAgICB9LFxuXG4gICAgZ2V0U2lnbk91dFVybCh0b2tlbjogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGBodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20vby9vYXV0aDIvcmV2b2tlP3Rva2VuPSR7ZW5jb2RlVVJJQ29tcG9uZW50KHRva2VuKX1gO1xuICAgIH0sXG59KTtcblxuY29uc3QgZ2V0UGFyYW1ldGVycyA9IChyZWRpcmVjdFVybDogc3RyaW5nLCBuYW1lOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCByZWdleCA9IG5ldyBSZWdFeHAoYCR7bmFtZX09KFteJl0rKWApO1xuXG4gICAgbGV0IHZhbHVlOiBzdHJpbmcgPSBudWxsO1xuICAgIGNvbnN0IHZhbHVlTWF0Y2ggPSByZWRpcmVjdFVybC5tYXRjaChyZWdleCk7XG4gICAgaWYgKHZhbHVlTWF0Y2gpIHtcbiAgICAgICAgdmFsdWUgPSB2YWx1ZU1hdGNoWzFdO1xuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZTtcbn07XG5cbmNvbnN0IGVuY29kZVNjb3BlcyA9IChzY29wZXM6IFNjb3Blc1tdKSA9PiB7XG4gICAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudChzY29wZXMuam9pbihcIixcIikpO1xufTtcbiIsImltcG9ydCB7IGZvcmsgfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XG5cbmltcG9ydCB7IHNpZ25VcFNhZ2EgfSBmcm9tIFwiLi9zaWduVXBTYWdhXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiogYXV0aFNhZ2EoKSB7XG4gICAgeWllbGQgZm9yayhzaWduVXBTYWdhKTtcblxuICAgIC8vIGNvbnN0IGlzU2lnblVwID0geWllbGQgY2FsbChpc1NpZ25VcFNhZ2EpO1xuICAgIC8vIGlmICghaXNTaWduVXApIHtcbiAgICAvLyAgICAgeWllbGQgcHV0KHNpZ25VcCgpKTtcbiAgICAvLyB9XG59XG5cbi8vIGZ1bmN0aW9uKiBpc1NpZ25VcFNhZ2EoKSB7XG4vLyAgICAgY29uc3QgdG9rZW4gPSB5aWVsZCBzZWxlY3QoKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLmF1dGgudG9rZW5JbmZvKTtcbi8vICAgICByZXR1cm4gQm9vbGVhbih0b2tlbik7XG4vLyB9XG4iLCJpbXBvcnQgeyBjYWxsLCBwdXQsIHNlbGVjdCwgdGFrZUxhdGVzdCB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcblxuaW1wb3J0IFJTQSBmcm9tIFwicmVhY3Qtc2ltcGxlLWF1dGhcIjtcbmltcG9ydCB7IHJlcXVlc3RQcm9maWxlLCBzaWduVXAsIHNpZ25VcEZhaWwsIHNpZ25VcFN1Y2Nlc3MgfSBmcm9tIFwicmVkdWNlcnMvYWN0aW9uc1wiO1xuXG5pbXBvcnQgeyBTZXNzaW9uLCBidWlsZEdvb2dsZVByb3ZpZGVyIH0gZnJvbSBcIi4vZ29vZ2xlUHJvdmlkZXJcIjtcbmltcG9ydCB7IFJvb3RTdGF0ZSB9IGZyb20gXCJyZWR1Y2Vyc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24qIHNpZ25VcFNhZ2EoKSB7XG4gICAgeWllbGQgdGFrZUxhdGVzdChzaWduVXAudHlwZSwgcHJvY2Vzc1NpZ25VcCk7XG59XG5cbmZ1bmN0aW9uKiBwcm9jZXNzU2lnblVwKF9hY3Rpb246IFJldHVyblR5cGU8dHlwZW9mIHNpZ25VcD4pIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBjbGllbnRJZCA9IHlpZWxkIGNhbGwoZ2V0Q2xpZW50SWQpO1xuICAgICAgICBjb25zdCBnb29nbGVQcm92aWRlciA9IGJ1aWxkR29vZ2xlUHJvdmlkZXIoY2xpZW50SWQpO1xuXG4gICAgICAgIGNvbnN0IHNlc3Npb246IFNlc3Npb24gPSB5aWVsZCBjYWxsKFJTQS5hY3F1aXJlVG9rZW5Bc3luYywgZ29vZ2xlUHJvdmlkZXIpO1xuXG4gICAgICAgIHlpZWxkIHB1dChzaWduVXBTdWNjZXNzKHsgdG9rZW46IHNlc3Npb24uYWNjZXNzVG9rZW4gfSkpO1xuXG4gICAgICAgIC8vIFRPRE86INCd0LUg0LTQvtC70LbQvdC+INGC0YPRgiDQsdGL0YLRjFxuICAgICAgICB5aWVsZCBwdXQocmVxdWVzdFByb2ZpbGUoKSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHlpZWxkIHB1dChzaWduVXBGYWlsKGVyciwgZXJyLnRvU3RyaW5nKCkpKTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiogZ2V0Q2xpZW50SWQoKSB7XG4gICAgY29uc3QgY2xpZW50SWQgPSB5aWVsZCBzZWxlY3QoKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLnNldHRpbmdzLmNsaWVudElkKTtcbiAgICByZXR1cm4gY2xpZW50SWQ7XG59XG4iLCJpbXBvcnQgeyBjYWxsLCBwdXQsIHRha2VMYXRlc3QgfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XG5cbmltcG9ydCB7XG4gICAgbG9hZE1lc3NhZ2VzLFxuICAgIHJlcXVlc3RQcm9maWxlLFxuICAgIHJlcXVlc3RQcm9maWxlRmFpbHVyZSxcbiAgICByZXF1ZXN0UHJvZmlsZVN1Y2Nlc3MsXG59IGZyb20gXCJyZWR1Y2Vycy9hY3Rpb25zXCI7XG5cbmltcG9ydCB7IGxvYWRQcm9maWxlIH0gZnJvbSBcInNhZ2FzL2dtYWlsL2xvYWRQcm9maWxlXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiogcHJvZmlsZVNhZ2EoKSB7XG4gICAgeWllbGQgdGFrZUxhdGVzdChyZXF1ZXN0UHJvZmlsZS50eXBlLCBwcm9jZXNzTG9naW4pO1xufVxuXG5mdW5jdGlvbiogcHJvY2Vzc0xvZ2luKF9hY3Rpb246IFJldHVyblR5cGU8dHlwZW9mIHJlcXVlc3RQcm9maWxlPikge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHByb2ZpbGUgPSB5aWVsZCBjYWxsKGxvYWRQcm9maWxlKTtcblxuICAgICAgICB5aWVsZCBwdXQocmVxdWVzdFByb2ZpbGVTdWNjZXNzKHByb2ZpbGUpKTtcblxuICAgICAgICAvLyBUT0RPOiDQndC1INC00L7Qu9C20L3QviDRgtGD0YIg0LHRi9GC0YxcbiAgICAgICAgeWllbGQgcHV0KGxvYWRNZXNzYWdlcygpKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgeWllbGQgcHV0KHJlcXVlc3RQcm9maWxlRmFpbHVyZShlcnIsIGVyci50b1N0cmluZygpKSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgY29tcG9zZSB9IGZyb20gXCJyZWR1eFwiO1xyXG5cclxuLy8gdHNsaW50OmRpc2FibGU6bm8tc3RyaW5nLWxpdGVyYWxcclxuY29uc3QgZ2V0UmVkdXhEZXZUb29sc0NvbXBvc2UgPSAoKSA9PlxyXG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmIHdpbmRvd1tcIl9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX0NPTVBPU0VfX1wiXVxyXG4gICAgICAgID8gd2luZG93W1wiX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fQ09NUE9TRV9fXCJdKHtcclxuICAgICAgICAgICAgICBuYW1lOiBcIk15Qm9pbGVycGxhdGVcIixcclxuICAgICAgICAgICAgICBhY3Rpb25zQmxhY2tsaXN0OiBbXCJSRURVWF9TVE9SQUdFX1NBVkVcIl0sXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIDogdW5kZWZpbmVkO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNvbXBvc2VFbmhhbmNlcnMgPSBnZXRSZWR1eERldlRvb2xzQ29tcG9zZSgpIHx8IGNvbXBvc2U7XHJcbiIsImltcG9ydCB7IGFwcGx5TWlkZGxld2FyZSwgY3JlYXRlU3RvcmUgfSBmcm9tIFwicmVkdXhcIjtcclxuaW1wb3J0IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlIGZyb20gXCJyZWR1eC1zYWdhXCI7XHJcbmltcG9ydCB7IHJvdXRlck1pZGRsZXdhcmUgYXMgY3JlYXRlUm91dGVyTWlkZGxld2FyZSB9IGZyb20gXCJjb25uZWN0ZWQtcmVhY3Qtcm91dGVyXCI7XHJcblxyXG5pbXBvcnQgeyByb290UmVkdWNlciB9IGZyb20gXCJyZWR1Y2Vyc1wiO1xyXG5pbXBvcnQgcm9vdFNhZ2EgZnJvbSBcInNhZ2FzXCI7XHJcblxyXG5pbXBvcnQgeyBjb21wb3NlRW5oYW5jZXJzIH0gZnJvbSBcIi4vY29tcG9zZUVuaGFuY2Vyc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29uZmlndXJlU3RvcmUoaW5pdGlhbFN0YXRlLCBoaXN0b3J5KSB7XHJcbiAgICBjb25zdCByb3V0ZXJNaWRkbGV3YXJlID0gY3JlYXRlUm91dGVyTWlkZGxld2FyZShoaXN0b3J5KTtcclxuICAgIGNvbnN0IHNhZ2FNaWRkbGV3YXJlID0gY3JlYXRlU2FnYU1pZGRsZXdhcmUoKTtcclxuXHJcbiAgICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKFxyXG4gICAgICAgIHJvb3RSZWR1Y2VyKGhpc3RvcnkpLFxyXG4gICAgICAgIGluaXRpYWxTdGF0ZSxcclxuICAgICAgICBjb21wb3NlRW5oYW5jZXJzKGFwcGx5TWlkZGxld2FyZShyb3V0ZXJNaWRkbGV3YXJlLCBzYWdhTWlkZGxld2FyZSkpLFxyXG4gICAgKTtcclxuXHJcbiAgICAvLyBydW4gc2FnYXNcclxuICAgIHNhZ2FNaWRkbGV3YXJlLnJ1bihyb290U2FnYSk7XHJcblxyXG4gICAgLy8gSG90IG1vZHVsZSByZXBsYWNlbWVudFxyXG4gICAgaWYgKG1vZHVsZS5ob3QpIHtcclxuICAgICAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4uL3JlZHVjZXJzL2luZGV4XCIsICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgbmV3Um9vdFJlZHVjZXIgPSByZXF1aXJlKFwiLi4vcmVkdWNlcnMvaW5kZXhcIikuZGVmYXVsdDtcclxuICAgICAgICAgICAgc3RvcmUucmVwbGFjZVJlZHVjZXIobmV3Um9vdFJlZHVjZXIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzdG9yZTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

/***/ "./locales/index.js":
/*!**************************!*\
  !*** ./locales/index.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"en":{"common":{"signUp":"signUp"},"home":{"viewMessages":"View messages"},"login":{"needAuthorize":"Need authorize"},"messages":{"from":"from","subject":"subject"},"navigation":{"home":"Home","messages":"Messages","settings":"Settings"},"settings":{"enterCientId":"Enter CLIENT_ID"}},"ru":{"common":{"signUp":"Войти"},"home":{"viewMessages":"Открыть сообщения"},"login":{"needAuthorize":"Необходимо авторизоваться"},"messages":{"from":"отправитель","subject":"заголовок"},"navigation":{"home":"Домой","messages":"Сообщения","settings":"Настройки"},"settings":{"enterCientId":"Введите CLIENT_ID"}}}

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
const history = Object(history__WEBPACK_IMPORTED_MODULE_5__["createBrowserHistory"])({ basename: "test-gh-pages" });
const store = Object(store__WEBPACK_IMPORTED_MODULE_6__["default"])(initialState, history);
// tslint:disable-next-line:no-console
console.log("process.env", JSON.stringify(Object({"NODE_ENV":undefined,"LANGUAGE":"en","PUBLIC_URL":"test-gh-pages"}), null, " "));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9sb2NhbGVzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL0FwcC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvcGFnZXMvbWVzc2FnZXMvTWVzc2FnZXMuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpL2FwaVJlcXVlc3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaS9nbWFpbC9nZXRNZXNzYWdlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcGkvZ21haWwvZ2V0TWVzc2FnZUxpc3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaS9nbWFpbC9nZXRQcm9maWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcGkvZ21haWwvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2kxOG4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9BcHAuY3NzPzYyNzEiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvQXBwLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9saW5rL0xpbmsudHN4Iiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2xpbmsvVGFiTGluay50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvbGluay9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9sb2NhbGl6ZS9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvbmF2aWdhdGlvbi9OYXZpZ2F0aW9uLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9uYXZpZ2F0aW9uL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL3BhZ2VzL2hvbWUvSG9tZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvcGFnZXMvaG9tZS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9wYWdlcy9sb2dpbi9Mb2dpbi50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvcGFnZXMvbG9naW4vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvcGFnZXMvbWVzc2FnZXMvTWVzc2FnZXMuc2Nzcz8wZjgzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL3BhZ2VzL21lc3NhZ2VzL01lc3NhZ2VzLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9wYWdlcy9tZXNzYWdlcy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9wYWdlcy9zZXR0aW5ncy9TZXR0aW5ncy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvcGFnZXMvc2V0dGluZ3MvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvcm91dGVzL3Byb3RlY3RlZC1yb3V0ZS9Qcm90ZWN0ZWRSb3V0ZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvcm91dGVzL3Byb3RlY3RlZC1yb3V0ZS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdWNlcnMvYWN0aW9ucy9hY3Rpb24taGVscGVycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdWNlcnMvYWN0aW9ucy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdWNlcnMvYWN0aW9ucy9tZXNzYWdlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdWNlcnMvYWN0aW9ucy9wcm9maWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9yZWR1Y2Vycy9hY3Rpb25zL3NldHRpbmdzLnRzIiwid2VicGFjazovLy8uL3NyYy9yZWR1Y2Vycy9hY3Rpb25zL3NpZ25VcC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdWNlcnMvYXV0aC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdWNlcnMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHVjZXJzL21lc3NhZ2VzLnRzIiwid2VicGFjazovLy8uL3NyYy9yZWR1Y2Vycy9wcm9maWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9yZWR1Y2Vycy9zZXR0aW5ncy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2FnYXMvZ21haWwvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NhZ2FzL2dtYWlsL2xvYWRNZXNzYWdlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2FnYXMvZ21haWwvbG9hZFByb2ZpbGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NhZ2FzL2dtYWlsL3NlbmRBdXRob3JpemVSZXF1ZXN0U2FnYS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2FnYXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NhZ2FzL21lc3NhZ2VzU2FnYS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2FnYXMvb2F1dGhTYWdhL2dvb2dsZVByb3ZpZGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9zYWdhcy9vYXV0aFNhZ2EvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NhZ2FzL29hdXRoU2FnYS9zaWduVXBTYWdhLnRzIiwid2VicGFjazovLy8uL3NyYy9zYWdhcy9wcm9maWxlU2FnYS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvY29tcG9zZUVuaGFuY2Vycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsa0JBQWtCLE1BQU0sVUFBVSxrQkFBa0IsU0FBUywrQkFBK0IsVUFBVSxpQ0FBaUMsYUFBYSxrQ0FBa0MsZUFBZSwwREFBMEQsYUFBYSxrQ0FBa0MsT0FBTyxVQUFVLGlCQUFpQixTQUFTLG1DQUFtQyxVQUFVLDRDQUE0QyxhQUFhLDJDQUEyQyxlQUFlLDZEQUE2RCxhQUFhLHFDOzs7Ozs7Ozs7OztBQ0Fua0I7QUFDQTs7O0FBR0E7QUFDQSw2Q0FBOEMsbUJBQW1CLEdBQUcsaUJBQWlCLG1CQUFtQixrQkFBa0IsR0FBRyxrQkFBa0IsbUJBQW1CLEdBQUcscUJBQXFCLHFDQUFxQyxHQUFHOztBQUVsTztBQUNBO0FBQ0E7QUFDQTtBQUNB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T0FBTyxzQ0FBUCxDQUF6QyxHQUNNLE9BQU8sc0NBQVAsRUFBK0M7QUFDM0MsVUFBTSxlQURxQztBQUUzQyxzQkFBa0IsQ0FBQyxvQkFBRDtBQUZ5QixDQUEvQyxDQUROLEdBS00sU0FOVjtBQVFPLE1BQU0sbUJBQW1CLDZCQUE2Qiw2Q0FBdEQ7Ozs7Ozs7Ozs7Ozs0QkFSRCx1Qjs0QkFRTyxnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1hiO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVjLFNBQVUsY0FBVixDQUF5QixZQUF6QixFQUF1QyxPQUF2QyxFQUE4QztBQUN4RCxVQUFNLG1CQUFtQixnRkFBdUIsT0FBdkIsQ0FBekI7QUFDQSxVQUFNLGlCQUFpQiw0REFBdkI7QUFFQSxVQUFNLFFBQVEsMERBQ1YsNkRBQVksT0FBWixDQURVLEVBRVYsWUFGVSxFQUdWLDJFQUFpQiw4REFBZ0IsZ0JBQWhCLEVBQWtDLGNBQWxDLENBQWpCLENBSFUsQ0FBZDtBQU1BO0FBQ0EsbUJBQWUsR0FBZixDQUFtQiw2Q0FBbkI7QUFFQTtBQUNBLFFBQUksSUFBSixFQUFnQjtBQUNaLGVBQU8sR0FBUCxDQUFXLE1BQVgsQ0FBa0Isa0RBQWxCLEVBQXVDO0FBQUEsT0FBSztBQUN4QyxrQkFBTSxpQkFBaUIsb0JBQVEsa0RBQVIsRUFBNkIsT0FBcEQ7QUFDQSxrQkFBTSxjQUFOLENBQXFCLGNBQXJCO0FBQ0gsU0FIRDtBQUlIO0FBRUQsV0FBTyxLQUFQO0FBQ0g7Ozs7Ozs7Ozs7Ozs0QkF0QnVCLGMiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSB7XCJlblwiOntcImNvbW1vblwiOntcInNpZ25VcFwiOlwic2lnblVwXCJ9LFwiaG9tZVwiOntcInZpZXdNZXNzYWdlc1wiOlwiVmlldyBtZXNzYWdlc1wifSxcImxvZ2luXCI6e1wibmVlZEF1dGhvcml6ZVwiOlwiTmVlZCBhdXRob3JpemVcIn0sXCJtZXNzYWdlc1wiOntcImZyb21cIjpcImZyb21cIixcInN1YmplY3RcIjpcInN1YmplY3RcIn0sXCJuYXZpZ2F0aW9uXCI6e1wiaG9tZVwiOlwiSG9tZVwiLFwibWVzc2FnZXNcIjpcIk1lc3NhZ2VzXCIsXCJzZXR0aW5nc1wiOlwiU2V0dGluZ3NcIn0sXCJzZXR0aW5nc1wiOntcImVudGVyQ2llbnRJZFwiOlwiRW50ZXIgQ0xJRU5UX0lEXCJ9fSxcInJ1XCI6e1wiY29tbW9uXCI6e1wic2lnblVwXCI6XCLQktC+0LnRgtC4XCJ9LFwiaG9tZVwiOntcInZpZXdNZXNzYWdlc1wiOlwi0J7RgtC60YDRi9GC0Ywg0YHQvtC+0LHRidC10L3QuNGPXCJ9LFwibG9naW5cIjp7XCJuZWVkQXV0aG9yaXplXCI6XCLQndC10L7QsdGF0L7QtNC40LzQviDQsNCy0YLQvtGA0LjQt9C+0LLQsNGC0YzRgdGPXCJ9LFwibWVzc2FnZXNcIjp7XCJmcm9tXCI6XCLQvtGC0L/RgNCw0LLQuNGC0LXQu9GMXCIsXCJzdWJqZWN0XCI6XCLQt9Cw0LPQvtC70L7QstC+0LpcIn0sXCJuYXZpZ2F0aW9uXCI6e1wiaG9tZVwiOlwi0JTQvtC80L7QuVwiLFwibWVzc2FnZXNcIjpcItCh0L7QvtCx0YnQtdC90LjRj1wiLFwic2V0dGluZ3NcIjpcItCd0LDRgdGC0YDQvtC50LrQuFwifSxcInNldHRpbmdzXCI6e1wiZW50ZXJDaWVudElkXCI6XCLQktCy0LXQtNC40YLQtSBDTElFTlRfSURcIn19fSIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbCxcXG5ib2R5LFxcbiNhcHAge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5hcHBfXzJObkZXIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnBhZ2VfX1FFTkl2IHtcXG4gICAgZmxleC1ncm93OiAxO1xcbn1cXG5cXG4udG9vbGJhcl9fMkVqU1Mge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcImFwcFwiOiBcImFwcF9fMk5uRldcIixcblx0XCJwYWdlXCI6IFwicGFnZV9fUUVOSXZcIixcblx0XCJ0b29sYmFyXCI6IFwidG9vbGJhcl9fMkVqU1NcIlxufTsiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5tZXNzYWdlc19fMTd5Q2wge1xcbiAgY3Vyc29yOiBkZWZhdWx0OyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwibWVzc2FnZXNcIjogXCJtZXNzYWdlc19fMTd5Q2xcIlxufTsiLCJleHBvcnQgdHlwZSBIYW5kbGVyPFQsIFA+ID0gKHJlc3VsdDogVCkgPT4gUCB8IFByb21pc2U8UD47XHJcblxyXG5leHBvcnQgY29uc3QgSGVhZGVycyA9IHtcclxuICAgIEFjY2VwdEpzb246IHsgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxyXG4gICAgQXV0aG9yaXphdGlvbjogKHRva2VuOiBzdHJpbmcpID0+ICh7IEF1dGhvcml6YXRpb246IHRva2VuIH0pLFxyXG4gICAgSnNvbkNvbnRlbnQ6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBqc29uSGFuZGxlciA9IDxUPihyZXNwb25zZTogUmVzcG9uc2UpOiBQcm9taXNlPFQ+ID0+XHJcbiAgICByZXNwb25zZS5qc29uKCkuY2F0Y2goKCkgPT4gbmV3IEVycm9yKCkpO1xyXG5cclxuZXhwb3J0IGNsYXNzIEFwaVJlcXVlc3Q8VCA9IFJlc3BvbnNlPiB7XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCh1cmk6IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiBuZXcgQXBpUmVxdWVzdCh1cmksIHsgbWV0aG9kOiBcIkdFVFwiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgcG9zdCh1cmk6IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiBuZXcgQXBpUmVxdWVzdCh1cmksIHsgbWV0aG9kOiBcIlBPU1RcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlcXVlc3Q6IFJlcXVlc3Q7XHJcbiAgICBwcml2YXRlIGhhbmRsZXJzOiBIYW5kbGVyPHVua25vd24sIHVua25vd24+W107XHJcblxyXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcihcclxuICAgICAgICBpbnB1dDogUmVxdWVzdEluZm8sXHJcbiAgICAgICAgaW5pdDogUmVxdWVzdEluaXQgPSB7fSxcclxuICAgICAgICBoYW5kbGVyczogSGFuZGxlcjx1bmtub3duLCB1bmtub3duPltdID0gW10sXHJcbiAgICApIHtcclxuICAgICAgICB0aGlzLnJlcXVlc3QgPSBuZXcgUmVxdWVzdChpbnB1dCwgaW5pdCk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVycyA9IGhhbmRsZXJzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB3aXRoSGVhZGVycyguLi5leHRyYUhlYWRlcnM6IEhlYWRlcnNJbml0W10pIHtcclxuICAgICAgICBjb25zdCBoZWFkZXJzOiBIZWFkZXJzSW5pdCA9IGV4dHJhSGVhZGVycy5yZWR1Y2UoXHJcbiAgICAgICAgICAgIChoZWFkZXJzLCBleHRyYSkgPT4gT2JqZWN0LmFzc2lnbihoZWFkZXJzLCBleHRyYSksXHJcbiAgICAgICAgICAgIHsgLi4uKHRoaXMucmVxdWVzdC5oZWFkZXJzIHx8IHt9KSB9LFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBBcGlSZXF1ZXN0KHRoaXMucmVxdWVzdCwgeyBoZWFkZXJzIH0sIHRoaXMuaGFuZGxlcnMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBoYW5kbGVyID0gPFA+KGhhbmRsZXI6IChyZXN1bHQ6IFQpID0+IFAgfCBQcm9taXNlPFA+KTogQXBpUmVxdWVzdDxQPiA9PiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBBcGlSZXF1ZXN0KHRoaXMucmVxdWVzdCwge30sIFsuLi50aGlzLmhhbmRsZXJzLCBoYW5kbGVyXSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHB1YmxpYyBleGVjdXRlID0gKCk6IFByb21pc2U8VD4gPT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmhhbmRsZXJzLnJlZHVjZShcclxuICAgICAgICAgICAgKHByb21pc2U6IFByb21pc2U8dW5rbm93bj4sIGhhbmRsZXIpID0+IHByb21pc2UudGhlbihoYW5kbGVyKSxcclxuICAgICAgICAgICAgZmV0Y2godGhpcy5yZXF1ZXN0KSxcclxuICAgICAgICApIGFzIFByb21pc2U8VD47XHJcbiAgICB9O1xyXG59XHJcbiIsImltcG9ydCB7IEFwaVJlcXVlc3QsIGpzb25IYW5kbGVyIH0gZnJvbSBcImFwaS9hcGlSZXF1ZXN0XCI7XHJcblxyXG5jb25zdCBiYXNlVXJpID0gXCJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9nbWFpbC92MVwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNZXNzYWdlIHtcclxuICAgIGlkOiBzdHJpbmc7XHJcbiAgICB0aHJlYWRJZDogc3RyaW5nO1xyXG4gICAgcGF5bG9hZDogTWVzc2FnZVBheWxvYWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTWVzc2FnZVBheWxvYWQge1xyXG4gICAgbWltZVR5cGU6IHN0cmluZztcclxuICAgIGhlYWRlcnM6IE1lc3NhZ2VIZWFkZXJbXTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNZXNzYWdlSGVhZGVyIHtcclxuICAgIG5hbWU6IEhlYWRlclR5cGU7XHJcbiAgICB2YWx1ZTogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBIZWFkZXJUeXBlIHtcclxuICAgIEZyb20gPSBcIkZyb21cIixcclxuICAgIFN1YmplY3QgPSBcIlN1YmplY3RcIixcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldE1lc3NhZ2UgPSAodXNlcklkOiBzdHJpbmcsIG1lc3NhZ2VJZDogc3RyaW5nKSA9PiB7XHJcbiAgICByZXR1cm4gQXBpUmVxdWVzdC5nZXQoXHJcbiAgICAgICAgYCR7YmFzZVVyaX0vdXNlcnMvJHt1c2VySWR9L21lc3NhZ2VzLyR7bWVzc2FnZUlkfT9mb3JtYXQ9bWV0YWRhdGFgLFxyXG4gICAgKS5oYW5kbGVyPE1lc3NhZ2U+KGpzb25IYW5kbGVyKTtcclxufTtcclxuIiwiaW1wb3J0IHsgQXBpUmVxdWVzdCwganNvbkhhbmRsZXIgfSBmcm9tIFwiYXBpL2FwaVJlcXVlc3RcIjtcblxuY29uc3QgYmFzZVVyaSA9IFwiaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vZ21haWwvdjFcIjtcblxuZXhwb3J0IGludGVyZmFjZSBNZXNzYWdlTGlzdCB7XG4gICAgbWVzc2FnZXM6IE1lc3NhZ2VJbmZvW107XG4gICAgbmV4dFBhZ2VUb2tlbjogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1lc3NhZ2VJbmZvIHtcbiAgICBpZDogc3RyaW5nO1xuICAgIHRocmVhZElkOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRNZXNzYWdlTGlzdCA9ICh1c2VySWQ6IHN0cmluZywgbWF4UmVzdWx0OiBudW1iZXIgPSAyMCkgPT4ge1xuICAgIHJldHVybiBBcGlSZXF1ZXN0LmdldChgJHtiYXNlVXJpfS91c2Vycy8ke3VzZXJJZH0vbWVzc2FnZXM/bWF4UmVzdWx0cz0ke21heFJlc3VsdH1gKS5oYW5kbGVyPFxuICAgICAgICBNZXNzYWdlTGlzdFxuICAgID4oanNvbkhhbmRsZXIpO1xufTtcbiIsImltcG9ydCB7IEFwaVJlcXVlc3QsIGpzb25IYW5kbGVyIH0gZnJvbSBcImFwaS9hcGlSZXF1ZXN0XCI7XHJcblxyXG5jb25zdCBiYXNlVXJpID0gXCJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9nbWFpbC92MVwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQcm9maWxlIHtcclxuICAgIGVtYWlsQWRkcmVzczogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0UHJvZmlsZSA9ICh1c2VySWQ6IHN0cmluZykgPT4ge1xyXG4gICAgcmV0dXJuIEFwaVJlcXVlc3QuZ2V0KGAke2Jhc2VVcml9L3VzZXJzLyR7dXNlcklkfS9wcm9maWxlYCkuaGFuZGxlcjxQcm9maWxlPihqc29uSGFuZGxlcik7XHJcbn07XHJcbiIsImV4cG9ydCAqIGZyb20gXCIuL2dldE1lc3NhZ2VcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vZ2V0TWVzc2FnZUxpc3RcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vZ2V0UHJvZmlsZVwiO1xyXG4iLCJpbXBvcnQgaTE4biBmcm9tIFwiaTE4bmV4dFwiO1xuaW1wb3J0IHsgcmVhY3RJMThuZXh0TW9kdWxlIH0gZnJvbSBcInJlYWN0LWkxOG5leHRcIjtcblxuaW1wb3J0IHJlc291cmNlcyBmcm9tIFwiLi4vbG9jYWxlcy9pbmRleC5qc1wiO1xuXG5pMThuLnVzZShyZWFjdEkxOG5leHRNb2R1bGUpIC8vIHBhc3NlcyBpMThuIGRvd24gdG8gcmVhY3QtaTE4bmV4dFxuICAgIC5pbml0KHtcbiAgICAgICAgcmVzb3VyY2VzLFxuICAgICAgICBsbmc6IHByb2Nlc3MuZW52LkxBTkdVQUdFLFxuXG4gICAgICAgIGRlZmF1bHROUzogXCJjb21tb25cIiwgLy8gZGVmYXVsdCBuYW1lc3BhY2VcblxuICAgICAgICBrZXlTZXBhcmF0b3I6IGZhbHNlLCAvLyB3ZSBkbyBub3QgdXNlIGtleXMgaW4gZm9ybSBtZXNzYWdlcy53ZWxjb21lXG5cbiAgICAgICAgaW50ZXJwb2xhdGlvbjoge1xuICAgICAgICAgICAgZXNjYXBlVmFsdWU6IGZhbHNlLCAvLyByZWFjdCBhbHJlYWR5IHNhZmVzIGZyb20geHNzXG4gICAgICAgIH0sXG4gICAgfSk7XG5cbmV4cG9ydCBkZWZhdWx0IGkxOG47XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCAqIGFzIFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBDb25uZWN0ZWRSb3V0ZXIgfSBmcm9tIFwiY29ubmVjdGVkLXJlYWN0LXJvdXRlclwiO1xuXG5pbXBvcnQgXCJpMThuXCI7XG5cbmltcG9ydCB7IGNyZWF0ZUJyb3dzZXJIaXN0b3J5IH0gZnJvbSBcImhpc3RvcnlcIjtcblxuaW1wb3J0IGNvbmZpZ3VyZVN0b3JlIGZyb20gXCJzdG9yZVwiO1xuXG5pbXBvcnQgQXBwbGljYXRpb24gZnJvbSBcIm1vZHVsZXMvQXBwXCI7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHt9O1xuY29uc3QgaGlzdG9yeSA9IGNyZWF0ZUJyb3dzZXJIaXN0b3J5KHsgYmFzZW5hbWU6IHByb2Nlc3MuZW52LlBVQkxJQ19VUkwgfSk7XG5cbmNvbnN0IHN0b3JlID0gY29uZmlndXJlU3RvcmUoaW5pdGlhbFN0YXRlLCBoaXN0b3J5KTtcblxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnNvbGVcbmNvbnNvbGUubG9nKFwicHJvY2Vzcy5lbnZcIiwgSlNPTi5zdHJpbmdpZnkocHJvY2Vzcy5lbnYsIG51bGwsIFwiIFwiKSk7XG5cblJlYWN0RE9NLnJlbmRlcihcbiAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICAgICAgPENvbm5lY3RlZFJvdXRlciBoaXN0b3J5PXtoaXN0b3J5fT5cbiAgICAgICAgICAgIDxBcHBsaWNhdGlvbiAvPlxuICAgICAgICA8L0Nvbm5lY3RlZFJvdXRlcj5cbiAgICA8L1Byb3ZpZGVyPixcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKSxcbik7XG4iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL3R5cGluZ3MtZm9yLWNzcy1tb2R1bGVzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNi0xIS4vQXBwLmNzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gUHJlcGFyZSBjc3NUcmFuc2Zvcm1hdGlvblxudmFyIHRyYW5zZm9ybTtcblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL3R5cGluZ3MtZm9yLWNzcy1tb2R1bGVzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNi0xIS4vQXBwLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL3R5cGluZ3MtZm9yLWNzcy1tb2R1bGVzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNi0xIS4vQXBwLmNzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBob3QgfSBmcm9tIFwicmVhY3QtaG90LWxvYWRlclwiO1xuXG5pbXBvcnQgeyBSb3V0ZSwgU3dpdGNoIH0gZnJvbSBcInJlYWN0LXJvdXRlclwiO1xuXG5pbXBvcnQgeyBBcHBCYXIsIENzc0Jhc2VsaW5lLCBHcmlkIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XG5cbmltcG9ydCB7IE5hdmlnYXRpb24gfSBmcm9tIFwibW9kdWxlcy9uYXZpZ2F0aW9uXCI7XG5pbXBvcnQgeyBQcm90ZWN0ZWRSb3V0ZSB9IGZyb20gXCJtb2R1bGVzL3JvdXRlcy9wcm90ZWN0ZWQtcm91dGVcIjtcblxuaW1wb3J0IHsgSG9tZSB9IGZyb20gXCJtb2R1bGVzL3BhZ2VzL2hvbWVcIjtcbmltcG9ydCB7IExvZ2luIH0gZnJvbSBcIm1vZHVsZXMvcGFnZXMvbG9naW5cIjtcbmltcG9ydCB7IE1lc3NhZ2VzIH0gZnJvbSBcIm1vZHVsZXMvcGFnZXMvbWVzc2FnZXNcIjtcbmltcG9ydCB7IFNldHRpbmdzIH0gZnJvbSBcIm1vZHVsZXMvcGFnZXMvc2V0dGluZ3NcIjtcblxuaW1wb3J0ICogYXMgc3R5bGVzIGZyb20gXCIuL0FwcC5jc3NcIjtcblxuY29uc3QgQXBwID0gKCkgPT4gKFxuICAgIDxHcmlkIGNvbnRhaW5lciBjbGFzc05hbWU9e3N0eWxlcy5hcHB9IGl0ZW1TY29wZT5cbiAgICAgICAgPENzc0Jhc2VsaW5lIC8+XG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cbiAgICAgICAgICAgIDxBcHBCYXIgcG9zaXRpb249XCJzdGF0aWNcIj5cbiAgICAgICAgICAgICAgICA8TmF2aWdhdGlvbiAvPlxuICAgICAgICAgICAgPC9BcHBCYXI+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgPEdyaWQgaXRlbSBjbGFzc05hbWU9e3N0eWxlcy5wYWdlfT5cbiAgICAgICAgICAgIDxTd2l0Y2g+XG4gICAgICAgICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvXCIgY29tcG9uZW50PXtIb21lfSAvPlxuICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2xvZ2luXCIgY29tcG9uZW50PXtMb2dpbn0gLz5cbiAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9zZXR0aW5nc1wiIGNvbXBvbmVudD17U2V0dGluZ3N9IC8+XG4gICAgICAgICAgICAgICAgPFByb3RlY3RlZFJvdXRlIHBhdGg9XCIvbWVzc2FnZXNcIiBjb21wb25lbnQ9e01lc3NhZ2VzfSAvPlxuICAgICAgICAgICAgPC9Td2l0Y2g+XG4gICAgICAgIDwvR3JpZD5cbiAgICA8L0dyaWQ+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBob3QobW9kdWxlKShBcHApO1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7IE5hdkxpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIExpbmtEYXRhIHtcbiAgICB0bzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIExpbmtIYW5kbGVycyB7fVxuXG5jbGFzcyBMaW5rIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxMaW5rRGF0YSAmIExpbmtIYW5kbGVycz4ge1xuICAgIHB1YmxpYyByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgY2hpbGRyZW4sIHRvIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPE5hdkxpbmsgdG89e3RvfSBzdHlsZT17eyB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsIGNvbG9yOiBcImluaGVyaXRcIiB9fT5cbiAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgeyBMaW5rLCBMaW5rIGFzIGRlZmF1bHQgfTtcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgVGFiLCB7IFRhYlByb3BzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1RhYlwiO1xuXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcblxuZXhwb3J0IGludGVyZmFjZSBUYWJMaW5rUHJvcHMgZXh0ZW5kcyBUYWJQcm9wcyB7XG4gICAgdG86IHN0cmluZztcbn1cblxuLy8gSGFjazogaHR0cHM6Ly9naXRodWIuY29tL211aS1vcmcvbWF0ZXJpYWwtdWkvaXNzdWVzLzkxMDZcblxuZXhwb3J0IGNsYXNzIFRhYkxpbmsgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PFRhYkxpbmtQcm9wcz4ge1xuICAgIHB1YmxpYyByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgdG8sIC4uLnRhYlByb3BzIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gICAgICAgIHJldHVybiA8VGFiIHsuLi50YWJQcm9wc30gey4uLnsgY29tcG9uZW50OiBMaW5rLCB0byB9IGFzIGFueX0gLz47XG4gICAgfVxufVxuIiwiZXhwb3J0ICogZnJvbSBcIi4vTGlua1wiO1xuZXhwb3J0ICogZnJvbSBcIi4vVGFiTGlua1wiO1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IE5hbWVzcGFjZXNDb25zdW1lciB9IGZyb20gXCJyZWFjdC1pMThuZXh0XCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIExvY2FsaXplRGF0YSB7XHJcbiAgICBpZDogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIExvY2FsaXplSGFuZGxlcnMge1xyXG59XHJcblxyXG5jbGFzcyBMb2NhbGl6ZSBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8TG9jYWxpemVEYXRhICYgTG9jYWxpemVIYW5kbGVycz4ge1xyXG4gICAgcHVibGljIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IGlkIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxOYW1lc3BhY2VzQ29uc3VtZXI+XHJcbiAgICAgICAgICAgICAgICB7dCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHQoaWQpO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPC9OYW1lc3BhY2VzQ29uc3VtZXI+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHsgTG9jYWxpemUsIExvY2FsaXplIGFzIGRlZmF1bHQgfTtcclxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCBUYWJzIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJzXCI7XG5cbmltcG9ydCB7IFRhYkxpbmsgfSBmcm9tIFwibW9kdWxlcy9saW5rXCI7XG5pbXBvcnQgeyBMb2NhbGl6ZSB9IGZyb20gXCJtb2R1bGVzL2xvY2FsaXplXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmF2aWdhdGlvbkRhdGEge1xuICAgIHBhdGg6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOYXZpZ2F0aW9uSGFuZGxlcnMge31cblxuZXhwb3J0IGNsYXNzIE5hdmlnYXRpb24gZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PE5hdmlnYXRpb25EYXRhICYgTmF2aWdhdGlvbkhhbmRsZXJzPiB7XG4gICAgcHVibGljIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBwYXRoIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8VGFicyB2YWx1ZT17cGF0aH0+XG4gICAgICAgICAgICAgICAgPFRhYkxpbmsgdmFsdWU9XCIvXCIgdG89XCIvXCIgbGFiZWw9ezxMb2NhbGl6ZSBpZD17XCJuYXZpZ2F0aW9uOmhvbWVcIn0gLz59IC8+XG4gICAgICAgICAgICAgICAgPFRhYkxpbmsgdmFsdWU9XCIvc2V0dGluZ3NcIiB0bz1cIi9zZXR0aW5nc1wiIGxhYmVsPXs8TG9jYWxpemUgaWQ9e1wibmF2aWdhdGlvbjpzZXR0aW5nc1wifSAvPn0gLz5cbiAgICAgICAgICAgICAgICA8VGFiTGlua1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cIi9tZXNzYWdlc1wiXG4gICAgICAgICAgICAgICAgICAgIHRvPVwiL21lc3NhZ2VzXCJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9ezxMb2NhbGl6ZSBpZD17XCJuYXZpZ2F0aW9uOm1lc3NhZ2VzXCJ9IC8+fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L1RhYnM+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOYXZpZ2F0aW9uO1xuIiwiaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuXG5pbXBvcnQgeyBSb290U3RhdGUgfSBmcm9tIFwicmVkdWNlcnNcIjtcblxuaW1wb3J0IE5hdmlnYXRpb24sIHsgTmF2aWdhdGlvbkRhdGEsIE5hdmlnYXRpb25IYW5kbGVycyB9IGZyb20gXCIuL05hdmlnYXRpb25cIjtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlOiBSb290U3RhdGUpOiBOYXZpZ2F0aW9uRGF0YSA9PiB7XG4gICAgY29uc3QgcGF0aCA9IHN0YXRlLnJvdXRlci5sb2NhdGlvbi5wYXRobmFtZTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHBhdGgsXG4gICAgfTtcbn07XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wczogTmF2aWdhdGlvbkhhbmRsZXJzID0ge307XG5cbmNvbnN0IE5hdmlnYXRpb25Nb2R1bGUgPSBjb25uZWN0KFxuICAgIG1hcFN0YXRlVG9Qcm9wcyxcbiAgICBtYXBEaXNwYXRjaFRvUHJvcHMsXG4pKE5hdmlnYXRpb24pO1xuXG5leHBvcnQgeyBOYXZpZ2F0aW9uTW9kdWxlIGFzIGRlZmF1bHQsIE5hdmlnYXRpb25Nb2R1bGUgYXMgTmF2aWdhdGlvbiB9O1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiO1xuaW1wb3J0IEdyaWQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRcIjtcblxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJtb2R1bGVzL2xpbmtcIjtcbmltcG9ydCB7IExvY2FsaXplIH0gZnJvbSBcIm1vZHVsZXMvbG9jYWxpemVcIjtcblxuZXhwb3J0IGludGVyZmFjZSBIb21lRGF0YSB7fVxuXG5leHBvcnQgaW50ZXJmYWNlIEhvbWVIYW5kbGVycyB7fVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb21lIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxIb21lRGF0YSAmIEhvbWVIYW5kbGVycz4ge1xuICAgIHB1YmxpYyByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXIganVzdGlmeT1cImNlbnRlclwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9tZXNzYWdlc1wiPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBjb2xvcj1cInByaW1hcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMb2NhbGl6ZSBpZD1cImhvbWU6dmlld01lc3NhZ2VzXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICApO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcblxuaW1wb3J0IHsgUm9vdFN0YXRlIH0gZnJvbSBcInJlZHVjZXJzXCI7XG5cbmltcG9ydCBIb21lLCB7IEhvbWVEYXRhLCBIb21lSGFuZGxlcnMgfSBmcm9tIFwiLi9Ib21lXCI7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChfc3RhdGU6IFJvb3RTdGF0ZSk6IEhvbWVEYXRhID0+IHtcbiAgICByZXR1cm4ge307XG59O1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHM6IEhvbWVIYW5kbGVycyA9IHt9O1xuXG5jb25zdCBIb21lTW9kdWxlID0gY29ubmVjdChcbiAgICBtYXBTdGF0ZVRvUHJvcHMsXG4gICAgbWFwRGlzcGF0Y2hUb1Byb3BzLFxuKShIb21lKTtcblxuZXhwb3J0IHsgSG9tZU1vZHVsZSBhcyBkZWZhdWx0LCBIb21lTW9kdWxlIGFzIEhvbWUgfTtcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgeyBSZWRpcmVjdCB9IGZyb20gXCJyZWFjdC1yb3V0ZXJcIjtcblxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCI7XG5pbXBvcnQgR3JpZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZFwiO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIjtcblxuaW1wb3J0IHsgTG9jYWxpemUgfSBmcm9tIFwibW9kdWxlcy9sb2NhbGl6ZVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIExvZ2luRGF0YSB7XG4gICAgaXNBdXRoZW50aWNhdGVkOiBib29sZWFuO1xuICAgIHJlZGlyZWN0UGF0aD86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMb2dpbkhhbmRsZXJzIHtcbiAgICBzaWduVXA6ICgpID0+IHZvaWQ7XG59XG5cbmNsYXNzIExvZ2luIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxMb2dpbkRhdGEgJiBMb2dpbkhhbmRsZXJzPiB7XG4gICAgcHVibGljIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBpc0F1dGhlbnRpY2F0ZWQsIHJlZGlyZWN0UGF0aCB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICBpZiAoaXNBdXRoZW50aWNhdGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gPFJlZGlyZWN0IHRvPXtyZWRpcmVjdFBhdGh9IC8+O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBqdXN0aWZ5PVwiY2VudGVyXCIgYWxpZ25JdGVtcz1cImNlbnRlclwiIGRpcmVjdGlvbj1cImNvbHVtblwiPlxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGNvbG9yPVwiaW5oZXJpdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExvY2FsaXplIGlkPVwibG9naW46bmVlZEF1dGhvcml6ZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgY29sb3I9XCJwcmltYXJ5XCIgb25DbGljaz17dGhpcy5wcm9wcy5zaWduVXB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPExvY2FsaXplIGlkPVwibG9naW46c2lnblVwXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9naW47XG4iLCJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcblxyXG5pbXBvcnQgeyBSb290U3RhdGUgfSBmcm9tIFwicmVkdWNlcnNcIjtcclxuaW1wb3J0IHsgc2lnblVwIH0gZnJvbSBcInJlZHVjZXJzL2FjdGlvbnNcIjtcclxuXHJcbmltcG9ydCBMb2dpbiwgeyBMb2dpbkRhdGEsIExvZ2luSGFuZGxlcnMgfSBmcm9tIFwiLi9Mb2dpblwiO1xyXG5cclxuY29uc3QgZ2V0UmVkaXJlY3RQYXRoID0gKHBhdGg6IHN0cmluZykgPT4ge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gLy4qcmVkaXJlY3RQYXRoPSg/PHBhdGg+LiopLiovLmV4ZWMocGF0aCk7XHJcbiAgICByZXR1cm4gKHJlc3VsdCAmJiByZXN1bHRbMV0pIHx8IFwiL1wiO1xyXG59O1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlOiBSb290U3RhdGUpOiBMb2dpbkRhdGEgPT4ge1xyXG4gICAgY29uc3QgcmVkaXJlY3RQYXRoID0gZ2V0UmVkaXJlY3RQYXRoKHN0YXRlLnJvdXRlci5sb2NhdGlvbi5zZWFyY2gpO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgaXNBdXRoZW50aWNhdGVkOiBCb29sZWFuKHN0YXRlLmF1dGgudG9rZW5JbmZvKSxcclxuICAgICAgICByZWRpcmVjdFBhdGgsXHJcbiAgICB9O1xyXG59O1xyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzOiBMb2dpbkhhbmRsZXJzID0ge1xyXG4gICAgc2lnblVwLFxyXG59O1xyXG5cclxuY29uc3QgTG9naW5Nb2R1bGUgPSBjb25uZWN0KFxyXG4gICAgbWFwU3RhdGVUb1Byb3BzLFxyXG4gICAgbWFwRGlzcGF0Y2hUb1Byb3BzLFxyXG4pKExvZ2luKTtcclxuXHJcbmV4cG9ydCB7IExvZ2luTW9kdWxlIGFzIGRlZmF1bHQsIExvZ2luTW9kdWxlIGFzIExvZ2luIH07XHJcbiIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdHlwaW5ncy1mb3ItY3NzLW1vZHVsZXMtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS03LTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9NZXNzYWdlcy5zY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBQcmVwYXJlIGNzc1RyYW5zZm9ybWF0aW9uXG52YXIgdHJhbnNmb3JtO1xuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdHlwaW5ncy1mb3ItY3NzLW1vZHVsZXMtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS03LTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9NZXNzYWdlcy5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdHlwaW5ncy1mb3ItY3NzLW1vZHVsZXMtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS03LTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9NZXNzYWdlcy5zY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgY2xhc3NOYW1lcyA9IHJlcXVpcmUoXCJjbGFzc25hbWVzL2JpbmRcIik7XG5cbmltcG9ydCBDaXJjdWxhclByb2dyZXNzIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9DaXJjdWxhclByb2dyZXNzXCI7XG5pbXBvcnQgR3JpZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZFwiO1xuaW1wb3J0IFBhcGVyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9QYXBlclwiO1xuaW1wb3J0IFRhYmxlIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZVwiO1xuaW1wb3J0IFRhYmxlQm9keSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVCb2R5XCI7XG5pbXBvcnQgVGFibGVDZWxsIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUNlbGxcIjtcbmltcG9ydCBUYWJsZUhlYWQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlSGVhZFwiO1xuaW1wb3J0IFRhYmxlUm93IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZVJvd1wiO1xuXG5pbXBvcnQgTG9jYWxpemUgZnJvbSBcIm1vZHVsZXMvbG9jYWxpemVcIjtcblxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9NZXNzYWdlcy5zY3NzXCI7XG5jb25zdCBzdHlsZSA9IGNsYXNzTmFtZXMuYmluZChzdHlsZXMpO1xuXG5pbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSBcIi4vdHlwZXNcIjtcblxuZXhwb3J0IGludGVyZmFjZSBNZXNzYWdlc0RhdGEge1xuICAgIGlzTG9hZGluZzogYm9vbGVhbjtcbiAgICBtZXNzYWdlcz86IE1lc3NhZ2VbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNZXNzYWdlc0hhbmRsZXJzIHt9XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lc3NhZ2VzIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxNZXNzYWdlc0RhdGEgJiBNZXNzYWdlc0hhbmRsZXJzPiB7XG4gICAgcHVibGljIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBpc0xvYWRpbmcgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBqdXN0aWZ5PVwiY2VudGVyXCIgYWxpZ25JdGVtcz1cImNlbnRlclwiIGNsYXNzTmFtZT17c3R5bGUoc3R5bGVzLm1lc3NhZ2VzKX0+XG4gICAgICAgICAgICAgICAge2lzTG9hZGluZyA/IHRoaXMucmVuZGVyUHJlbG9hZGVyKCkgOiB0aGlzLnJlbmRlckNvbnRlbnQoKX1cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHJlbmRlclByZWxvYWRlciA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIDxDaXJjdWxhclByb2dyZXNzIC8+O1xuICAgIH07XG5cbiAgICBwcml2YXRlIHJlbmRlckNvbnRlbnQgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgbWVzc2FnZXMgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgaWYgKCFtZXNzYWdlcykge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFBhcGVyPlxuICAgICAgICAgICAgICAgIDxUYWJsZT5cbiAgICAgICAgICAgICAgICAgICAgPFRhYmxlSGVhZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZVJvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TG9jYWxpemUgaWQ9XCJtZXNzYWdlczpmcm9tXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TG9jYWxpemUgaWQ9XCJtZXNzYWdlczpzdWJqZWN0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVSb3c+XG4gICAgICAgICAgICAgICAgICAgIDwvVGFibGVIZWFkPlxuICAgICAgICAgICAgICAgICAgICA8VGFibGVCb2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAge21lc3NhZ2VzLm1hcChyb3cgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZVJvdyBrZXk9e3Jvdy5pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+e3Jvdy5mcm9tfTwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPntyb3cuc3ViamVjdH08L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlUm93PlxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgIDwvVGFibGVCb2R5PlxuICAgICAgICAgICAgICAgIDwvVGFibGU+XG4gICAgICAgICAgICA8L1BhcGVyPlxuICAgICAgICApO1xuICAgIH07XG59XG4iLCJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5cbmltcG9ydCB7IFJvb3RTdGF0ZSB9IGZyb20gXCJyZWR1Y2Vyc1wiO1xuXG5pbXBvcnQgTWVzc2FnZXMsIHsgTWVzc2FnZXNEYXRhLCBNZXNzYWdlc0hhbmRsZXJzIH0gZnJvbSBcIi4vTWVzc2FnZXNcIjtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlOiBSb290U3RhdGUpOiBNZXNzYWdlc0RhdGEgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIG1lc3NhZ2VzOiBzdGF0ZS5tZXNzYWdlcy5pdGVtcyxcbiAgICAgICAgaXNMb2FkaW5nOiBzdGF0ZS5tZXNzYWdlcy5pc0xvYWRpbmcsXG4gICAgfTtcbn07XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wczogTWVzc2FnZXNIYW5kbGVycyA9IHt9O1xuXG5jb25zdCBNZXNzYWdlc01vZHVsZSA9IGNvbm5lY3QoXG4gICAgbWFwU3RhdGVUb1Byb3BzLFxuICAgIG1hcERpc3BhdGNoVG9Qcm9wcyxcbikoTWVzc2FnZXMpO1xuXG5leHBvcnQgeyBNZXNzYWdlc01vZHVsZSBhcyBkZWZhdWx0LCBNZXNzYWdlc01vZHVsZSBhcyBNZXNzYWdlcyB9O1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCBHcmlkIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCI7XG5cbmltcG9ydCB7IExvY2FsaXplIH0gZnJvbSBcIm1vZHVsZXMvbG9jYWxpemVcIjtcbmltcG9ydCBUZXh0RmllbGQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZFwiO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIjtcblxuZXhwb3J0IGludGVyZmFjZSBTZXR0aW5nc0RhdGEge1xuICAgIGNsaWVudElkOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2V0dGluZ3NIYW5kbGVycyB7XG4gICAgb25DaGFuZ2VDbGllbnRJZDogKGNsaWVudElkOiBzdHJpbmcpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNldHRpbmdzIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxTZXR0aW5nc0RhdGEgJiBTZXR0aW5nc0hhbmRsZXJzPiB7XG4gICAgcHVibGljIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBjbGllbnRJZCB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBqdXN0aWZ5PVwiY2VudGVyXCIgYWxpZ25JdGVtcz1cImNlbnRlclwiIGRpcmVjdGlvbj1cImNvbHVtblwiPlxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGNvbG9yPVwiaW5oZXJpdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExvY2FsaXplIGlkPVwic2V0dGluZ3M6ZW50ZXJDaWVudElkXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtPlxuICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cIm91dGxpbmVkLW5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9ezxMb2NhbGl6ZSBpZD1cInNldHRpbmdzOmNsaWVudElkXCIgLz59XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y2xpZW50SWR9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgICAgIGNvbnN0IGNsaWVudElkID0gZXZlbnQuY3VycmVudFRhcmdldC52YWx1ZTtcblxuICAgICAgICBjb25zdCB7IG9uQ2hhbmdlQ2xpZW50SWQgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIG9uQ2hhbmdlQ2xpZW50SWQoY2xpZW50SWQpO1xuICAgIH07XG59XG4iLCJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5cbmltcG9ydCB7IFJvb3RTdGF0ZSB9IGZyb20gXCJyZWR1Y2Vyc1wiO1xuXG5pbXBvcnQgU2V0dGluZ3MsIHsgU2V0dGluZ3NEYXRhLCBTZXR0aW5nc0hhbmRsZXJzIH0gZnJvbSBcIi4vU2V0dGluZ3NcIjtcbmltcG9ydCB7IHNldEdtYWlsQ2xpZW50SWQgfSBmcm9tIFwicmVkdWNlcnMvYWN0aW9uc1wiO1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGU6IFJvb3RTdGF0ZSk6IFNldHRpbmdzRGF0YSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgY2xpZW50SWQ6IHN0YXRlLnNldHRpbmdzLmNsaWVudElkIHx8IFwiXCIsXG4gICAgfTtcbn07XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wczogU2V0dGluZ3NIYW5kbGVycyA9IHtcbiAgICBvbkNoYW5nZUNsaWVudElkOiBzZXRHbWFpbENsaWVudElkLFxufTtcblxuY29uc3QgU2V0dGluZ3NNb2R1bGUgPSBjb25uZWN0KFxuICAgIG1hcFN0YXRlVG9Qcm9wcyxcbiAgICBtYXBEaXNwYXRjaFRvUHJvcHMsXG4pKFNldHRpbmdzKTtcblxuZXhwb3J0IHsgU2V0dGluZ3NNb2R1bGUgYXMgZGVmYXVsdCwgU2V0dGluZ3NNb2R1bGUgYXMgU2V0dGluZ3MgfTtcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IHsgUmVkaXJlY3QsIFJvdXRlLCBSb3V0ZVByb3BzIH0gZnJvbSBcInJlYWN0LXJvdXRlclwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQcm90ZWN0ZWRSb3V0ZURhdGEgZXh0ZW5kcyBSb3V0ZVByb3BzIHtcclxuICAgIGlzQXV0aGVudGljYXRlZDogYm9vbGVhbjtcclxuICAgIGN1cnJlbnRQYXRoOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUHJvdGVjdGVkUm91dGVIYW5kbGVycyB7fVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvdGVjdGVkUm91dGUgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PFxyXG4gICAgUHJvdGVjdGVkUm91dGVEYXRhICYgUHJvdGVjdGVkUm91dGVIYW5kbGVyc1xyXG4+IHtcclxuICAgIHB1YmxpYyByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBpc0F1dGhlbnRpY2F0ZWQsIGN1cnJlbnRQYXRoLCAuLi5vdGhlclByb3BzIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICBpZiAoIWlzQXV0aGVudGljYXRlZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gPFJlZGlyZWN0IHRvPXtgL2xvZ2luP3JlZGlyZWN0UGF0aD0ke2N1cnJlbnRQYXRofWB9IC8+O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIDxSb3V0ZSB7Li4ub3RoZXJQcm9wc30gLz47XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSBcInJlZHV4XCI7XHJcbmltcG9ydCB7IGNvbm5lY3RBZHZhbmNlZCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5cclxuaW1wb3J0IHsgUm9vdFN0YXRlIH0gZnJvbSBcInJlZHVjZXJzXCI7XHJcblxyXG5pbXBvcnQgUHJvdGVjdGVkUm91dGUgZnJvbSBcIi4vUHJvdGVjdGVkUm91dGVcIjtcclxuXHJcbi8vIFRPRE86IEFkZCBDb21wb25lbnQgdHlwZXMgaW5mZXJlbmNlXHJcbmltcG9ydCB7IFJvdXRlUHJvcHMgfSBmcm9tIFwicmVhY3Qtcm91dGVyXCI7XHJcbmltcG9ydCB7IFByb3RlY3RlZFJvdXRlRGF0YSwgUHJvdGVjdGVkUm91dGVIYW5kbGVycyB9IGZyb20gXCIuL1Byb3RlY3RlZFJvdXRlXCI7XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGU6IFJvb3RTdGF0ZSk6IFByb3RlY3RlZFJvdXRlRGF0YSA9PiB7XHJcbiAgICAvLyBUT0RPOiBBZGQgdG9rZW4gdmFsaWRhdGlvblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBpc0F1dGhlbnRpY2F0ZWQ6IEJvb2xlYW4oc3RhdGUuYXV0aC50b2tlbkluZm8pLFxyXG4gICAgICAgIGN1cnJlbnRQYXRoOiBzdGF0ZS5yb3V0ZXIubG9jYXRpb24ucGF0aG5hbWUsXHJcbiAgICB9O1xyXG59O1xyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKTogUHJvdGVjdGVkUm91dGVIYW5kbGVycyA9PiB7XHJcbiAgICBjb25zdCBhY3Rpb25DcmVhdG9ycyA9IHt9O1xyXG4gICAgcmV0dXJuIGJpbmRBY3Rpb25DcmVhdG9ycyhhY3Rpb25DcmVhdG9ycywgZGlzcGF0Y2gpO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gc2VsZWN0b3JGYWN0b3J5KGRpc3BhdGNoKSB7XHJcbiAgICBjb25zdCBhY3Rpb25zID0gbWFwRGlzcGF0Y2hUb1Byb3BzKGRpc3BhdGNoKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIG5leHRTdGF0ZTogUm9vdFN0YXRlLFxyXG4gICAgICAgIG5ld093blByb3BzOiBSb3V0ZVByb3BzLFxyXG4gICAgKTogUHJvdGVjdGVkUm91dGVEYXRhICYgUHJvdGVjdGVkUm91dGVIYW5kbGVycyA9PiAoe1xyXG4gICAgICAgIC4uLm1hcFN0YXRlVG9Qcm9wcyhuZXh0U3RhdGUpLFxyXG4gICAgICAgIC4uLmFjdGlvbnMsXHJcbiAgICAgICAgLi4ubmV3T3duUHJvcHMsXHJcbiAgICB9KTtcclxufVxyXG5cclxuY29uc3QgUHJvdGVjdGVkUm91dGVNb2R1bGUgPSBjb25uZWN0QWR2YW5jZWQoc2VsZWN0b3JGYWN0b3J5KShQcm90ZWN0ZWRSb3V0ZSk7XHJcblxyXG5leHBvcnQgeyBQcm90ZWN0ZWRSb3V0ZU1vZHVsZSBhcyBkZWZhdWx0LCBQcm90ZWN0ZWRSb3V0ZU1vZHVsZSBhcyBQcm90ZWN0ZWRSb3V0ZSB9O1xyXG4iLCJpbXBvcnQgeyBBY3Rpb24gYXMgUmVkdXhBY3Rpb24gfSBmcm9tIFwicmVkdXhcIjtcblxuZXhwb3J0IGludGVyZmFjZSBBY3Rpb248VCBleHRlbmRzIHN0cmluZyA9IHN0cmluZz4gZXh0ZW5kcyBSZWR1eEFjdGlvbiB7XG4gICAgcmVhZG9ubHkgdHlwZTogVDtcbn1cblxuZXhwb3J0IHR5cGUgQWN0aW9uV2l0aFBheWxvYWQ8VCBleHRlbmRzIHN0cmluZywgUGF5bG9hZD4gPSBBY3Rpb248VD4gJiBQYXlsb2FkO1xuXG5pbnRlcmZhY2UgQWN0aW9uQ3JlYXRvcjxUIGV4dGVuZHMgc3RyaW5nID0gc3RyaW5nPiB7XG4gICAgKCk6IEFjdGlvbjxUPjtcbiAgICB0eXBlOiBUO1xufVxuXG5pbnRlcmZhY2UgQWN0aW9uV2l0aFBheWxvYWRDcmVhdG9yPFxuICAgIFQgZXh0ZW5kcyBzdHJpbmcgPSBzdHJpbmcsXG4gICAgQXJnc1R5cGUgZXh0ZW5kcyB1bmtub3duW10gPSBbXSxcbiAgICBQYXlsb2FkVHlwZSA9IHt9XG4+IHtcbiAgICAoLi4uYXJnczogQXJnc1R5cGUpOiBBY3Rpb25XaXRoUGF5bG9hZDxULCBQYXlsb2FkVHlwZT47XG4gICAgdHlwZTogVDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFjdGlvbkNyZWF0b3I8VCBleHRlbmRzIHN0cmluZz4odHlwZTogVCk6IEFjdGlvbkNyZWF0b3I8VD47XG5leHBvcnQgZnVuY3Rpb24gYWN0aW9uQ3JlYXRvcjxUIGV4dGVuZHMgc3RyaW5nLCBBcmdzVHlwZSBleHRlbmRzIHVua25vd25bXSwgUGF5bG9hZFR5cGU+KFxuICAgIHR5cGU6IFQsXG4gICAgbWFwcGVyPzogKC4uLmFyZ3M6IEFyZ3NUeXBlKSA9PiBQYXlsb2FkVHlwZSxcbik6IEFjdGlvbldpdGhQYXlsb2FkQ3JlYXRvcjxULCBBcmdzVHlwZSwgUGF5bG9hZFR5cGU+O1xuXG5leHBvcnQgZnVuY3Rpb24gYWN0aW9uQ3JlYXRvcih0eXBlLCBtYXBwZXI/KSB7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICAgIGNvbnN0IGFjdGlvbkNyZWF0b3I6IGFueSA9IGZ1bmN0aW9uKC4uLmFyZ3MpIHtcbiAgICAgICAgY29uc3QgcGF5bG9hZCA9IG1hcHBlciA/IG1hcHBlciguLi5hcmdzKSA6IHVuZGVmaW5lZDtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZUFjdGlvbih0eXBlLCBwYXlsb2FkKTtcbiAgICB9O1xuXG4gICAgYWN0aW9uQ3JlYXRvci50eXBlID0gdHlwZTtcblxuICAgIHJldHVybiBhY3Rpb25DcmVhdG9yO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQWN0aW9uPFQgZXh0ZW5kcyBzdHJpbmcsIFA+KHR5cGU6IFQpOiBBY3Rpb248VD47XG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQWN0aW9uPFQgZXh0ZW5kcyBzdHJpbmcsIFA+KHR5cGU6IFQsIHBheWxvYWQ6IFApOiBBY3Rpb25XaXRoUGF5bG9hZDxULCBQPjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUFjdGlvbih0eXBlLCBwYXlsb2FkPykge1xuICAgIHJldHVybiBwYXlsb2FkID09PSB1bmRlZmluZWQgPyB7IHR5cGUgfSA6IHsgdHlwZSwgLi4ucGF5bG9hZCB9O1xufVxuIiwiZXhwb3J0IHsgQWN0aW9uLCBBY3Rpb25XaXRoUGF5bG9hZCB9IGZyb20gXCIuL2FjdGlvbi1oZWxwZXJzXCI7XG5cbmV4cG9ydCAqIGZyb20gXCIuL21lc3NhZ2VzXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9wcm9maWxlXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9zZXR0aW5nc1wiO1xuZXhwb3J0ICogZnJvbSBcIi4vc2lnblVwXCI7XG4iLCJpbXBvcnQgeyBhY3Rpb25DcmVhdG9yIH0gZnJvbSBcIi4vYWN0aW9uLWhlbHBlcnNcIjtcblxuaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gXCJtb2RlbC9tZXNzYWdlXCI7XG5cbmV4cG9ydCBjb25zdCBsb2FkTWVzc2FnZXMgPSBhY3Rpb25DcmVhdG9yKFwibWVzc2FnZXMvTE9BRFwiKTtcblxuZXhwb3J0IGNvbnN0IGxvYWRNZXNzYWdlc1N1Y2Nlc3MgPSBhY3Rpb25DcmVhdG9yKFxuICAgIFwibWVzc2FnZXMvTE9BRF9TVUNDRVNTXCIsXG4gICAgKG1lc3NhZ2VzOiBNZXNzYWdlW10pID0+ICh7XG4gICAgICAgIG1lc3NhZ2VzLFxuICAgIH0pLFxuKTtcblxuZXhwb3J0IGNvbnN0IGxvYWRNZXNzYWdlc0ZhaWx1cmUgPSBhY3Rpb25DcmVhdG9yKFxuICAgIFwibWVzc2FnZXMvTE9BRF9GQUlMVVJFXCIsXG4gICAgKGVyb3JyOiBFcnJvciwgbWVzc2FnZTogc3RyaW5nKSA9PiAoeyBlcm9yciwgbWVzc2FnZSB9KSxcbik7XG4iLCJpbXBvcnQgeyBhY3Rpb25DcmVhdG9yIH0gZnJvbSBcIi4vYWN0aW9uLWhlbHBlcnNcIjtcblxuaW1wb3J0IHsgUHJvZmlsZSB9IGZyb20gXCJtb2RlbC9wcm9maWxlXCI7XG5cbmV4cG9ydCBjb25zdCByZXF1ZXN0UHJvZmlsZSA9IGFjdGlvbkNyZWF0b3IoXCJwcm9maWxlL1BST0ZJTEVfUkVRVUVTVFwiKTtcblxuZXhwb3J0IGNvbnN0IHJlcXVlc3RQcm9maWxlU3VjY2VzcyA9IGFjdGlvbkNyZWF0b3IoXCJwcm9maWxlL1BST0ZJTEVfU1VDQ0VTU1wiLCAocHJvZmlsZTogUHJvZmlsZSkgPT4gKHtcbiAgICBwcm9maWxlLFxufSkpO1xuXG5leHBvcnQgY29uc3QgcmVxdWVzdFByb2ZpbGVGYWlsdXJlID0gYWN0aW9uQ3JlYXRvcihcbiAgICBcInByb2ZpbGUvUFJPRklMRV9GQUlMVVJFXCIsXG4gICAgKGVyb3JyOiBFcnJvciwgbWVzc2FnZTogc3RyaW5nKSA9PiAoeyBlcm9yciwgbWVzc2FnZSB9KSxcbik7XG4iLCJpbXBvcnQgeyBhY3Rpb25DcmVhdG9yIH0gZnJvbSBcIi4vYWN0aW9uLWhlbHBlcnNcIjtcblxuZXhwb3J0IGNvbnN0IHNldEdtYWlsQ2xpZW50SWQgPSBhY3Rpb25DcmVhdG9yKFxuICAgIFwic2V0dGluZ3MvU0VUX0dNQUlMX0NMSUVOVF9JRFwiLFxuICAgIChjbGllbnRJZDogc3RyaW5nKSA9PiAoe1xuICAgICAgICBjbGllbnRJZCxcbiAgICB9KSxcbik7XG4iLCJpbXBvcnQgeyBhY3Rpb25DcmVhdG9yIH0gZnJvbSBcIi4vYWN0aW9uLWhlbHBlcnNcIjtcclxuXHJcbmltcG9ydCB7IFRva2VuSW5mbyB9IGZyb20gXCJtb2RlbFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNpZ25VcCA9IGFjdGlvbkNyZWF0b3IoXCJzaWduVXAvU0lHTl9VUF9SRVFVRVNUXCIpO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNpZ25VcFN1Y2Nlc3MgPSBhY3Rpb25DcmVhdG9yKFwic2lnblVwL1NJR05fVVBfU1VDQ0VTU1wiLCAodG9rZW5JbmZvOiBUb2tlbkluZm8pID0+ICh7XHJcbiAgICB0b2tlbkluZm8sXHJcbn0pKTtcclxuXHJcbmV4cG9ydCBjb25zdCBzaWduVXBGYWlsID0gYWN0aW9uQ3JlYXRvcihcclxuICAgIFwic2lnblVwL1NJR05fVVBfRkFJTFVSRVwiLFxyXG4gICAgKGVyb3JyOiBFcnJvciwgbWVzc2FnZTogc3RyaW5nKSA9PiAoeyBlcm9yciwgbWVzc2FnZSB9KSxcclxuKTtcclxuIiwiaW1wb3J0IHsgUmVkdWNlciB9IGZyb20gXCJyZWR1eFwiO1xuaW1wb3J0IHsgQWN0aW9ucyB9IGZyb20gXCJyZWR1Y2Vyc1wiO1xuXG5pbXBvcnQgeyBUb2tlbkluZm8gfSBmcm9tIFwibW9kZWxcIjtcblxuZXhwb3J0IGludGVyZmFjZSBTdGF0ZSB7XG4gICAgdG9rZW5JbmZvPzogVG9rZW5JbmZvO1xuICAgIGVycm9yTWVzc2FnZT86IHN0cmluZztcbn1cblxuY29uc3QgcmVkdWNlcjogUmVkdWNlcjxTdGF0ZT4gPSAoc3RhdGUgPSB7fSwgYWN0aW9uOiBBY3Rpb25zKSA9PiB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIFwic2lnblVwL1NJR05fVVBfUkVRVUVTVFwiOiB7XG4gICAgICAgICAgICByZXR1cm4ge307XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBcInNpZ25VcC9TSUdOX1VQX1NVQ0NFU1NcIjoge1xuICAgICAgICAgICAgY29uc3QgeyB0b2tlbkluZm8gfSA9IGFjdGlvbjtcbiAgICAgICAgICAgIHJldHVybiB7IHRva2VuSW5mbyB9O1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgXCJzaWduVXAvU0lHTl9VUF9GQUlMVVJFXCI6IHtcbiAgICAgICAgICAgIGNvbnN0IHsgbWVzc2FnZSB9ID0gYWN0aW9uO1xuICAgICAgICAgICAgcmV0dXJuIHsgZXJyb3JNZXNzYWdlOiBtZXNzYWdlIH07XG4gICAgICAgIH1cbiAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcbiIsImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gXCJyZWR1eFwiO1xuaW1wb3J0IHsgY29ubmVjdFJvdXRlciB9IGZyb20gXCJjb25uZWN0ZWQtcmVhY3Qtcm91dGVyXCI7XG5cbmltcG9ydCBhdXRoIGZyb20gXCIuL2F1dGhcIjtcbmltcG9ydCBtZXNzYWdlcyBmcm9tIFwiLi9tZXNzYWdlc1wiO1xuaW1wb3J0IHByb2ZpbGUgZnJvbSBcIi4vcHJvZmlsZVwiO1xuaW1wb3J0IHNldHRpbmdzIGZyb20gXCIuL3NldHRpbmdzXCI7XG5cbmV4cG9ydCBjb25zdCByb290UmVkdWNlciA9IGhpc3RvcnkgPT5cbiAgICBjb21iaW5lUmVkdWNlcnMoe1xuICAgICAgICByb3V0ZXI6IGNvbm5lY3RSb3V0ZXIoaGlzdG9yeSksXG5cbiAgICAgICAgYXV0aCxcbiAgICAgICAgbWVzc2FnZXMsXG4gICAgICAgIHByb2ZpbGUsXG4gICAgICAgIHNldHRpbmdzLFxuICAgIH0pO1xuXG5leHBvcnQgeyBBY3Rpb25zIH0gZnJvbSBcIi4vYWN0aW9uVHlwZXNcIjtcbmV4cG9ydCB0eXBlIFJvb3RTdGF0ZSA9IFJldHVyblR5cGU8UmV0dXJuVHlwZTx0eXBlb2Ygcm9vdFJlZHVjZXI+PjtcblxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXI7XG4iLCJpbXBvcnQgeyBSZWR1Y2VyIH0gZnJvbSBcInJlZHV4XCI7XG5pbXBvcnQgeyBBY3Rpb25zIH0gZnJvbSBcInJlZHVjZXJzXCI7XG5cbmltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tIFwibW9kZWxcIjtcblxuZXhwb3J0IGludGVyZmFjZSBTdGF0ZSB7XG4gICAgaXNMb2FkaW5nOiBib29sZWFuO1xuICAgIGl0ZW1zPzogTWVzc2FnZVtdO1xuICAgIGVycm9yTWVzc2FnZT86IHN0cmluZztcbn1cblxuY29uc3QgRGVmYXVsU3RhdGU6IFN0YXRlID0ge1xuICAgIGlzTG9hZGluZzogZmFsc2UsXG59O1xuXG5jb25zdCByZWR1Y2VyOiBSZWR1Y2VyPFN0YXRlPiA9IChzdGF0ZSA9IERlZmF1bFN0YXRlLCBhY3Rpb246IEFjdGlvbnMpOiBTdGF0ZSA9PiB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIFwibWVzc2FnZXMvTE9BRFwiOiB7XG4gICAgICAgICAgICByZXR1cm4geyBpc0xvYWRpbmc6IHRydWUgfTtcbiAgICAgICAgfVxuICAgICAgICBjYXNlIFwibWVzc2FnZXMvTE9BRF9TVUNDRVNTXCI6IHtcbiAgICAgICAgICAgIGNvbnN0IHsgbWVzc2FnZXMgfSA9IGFjdGlvbjtcbiAgICAgICAgICAgIHJldHVybiB7IGlzTG9hZGluZzogZmFsc2UsIGl0ZW1zOiBtZXNzYWdlcyB9O1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgXCJtZXNzYWdlcy9MT0FEX0ZBSUxVUkVcIjoge1xuICAgICAgICAgICAgY29uc3QgeyBtZXNzYWdlIH0gPSBhY3Rpb247XG4gICAgICAgICAgICByZXR1cm4geyBpc0xvYWRpbmc6IGZhbHNlLCBlcnJvck1lc3NhZ2U6IG1lc3NhZ2UgfTtcbiAgICAgICAgfVxuICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xuIiwiaW1wb3J0IHsgUmVkdWNlciB9IGZyb20gXCJyZWR1eFwiO1xuaW1wb3J0IHsgQWN0aW9ucyB9IGZyb20gXCJyZWR1Y2Vyc1wiO1xuXG5pbXBvcnQgeyBQcm9maWxlIH0gZnJvbSBcIm1vZGVsXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3RhdGUge1xuICAgIGl0ZW0/OiBQcm9maWxlO1xuICAgIGVycm9yTWVzc2FnZT86IHN0cmluZztcbn1cblxuY29uc3QgcmVkdWNlcjogUmVkdWNlcjxTdGF0ZT4gPSAoc3RhdGUgPSB7fSwgYWN0aW9uOiBBY3Rpb25zKTogU3RhdGUgPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSBcInByb2ZpbGUvUFJPRklMRV9SRVFVRVNUXCI6IHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgXCJwcm9maWxlL1BST0ZJTEVfU1VDQ0VTU1wiOiB7XG4gICAgICAgICAgICBjb25zdCB7IHByb2ZpbGUgfSA9IGFjdGlvbjtcbiAgICAgICAgICAgIHJldHVybiB7IGl0ZW06IHByb2ZpbGUgfTtcbiAgICAgICAgfVxuICAgICAgICBjYXNlIFwicHJvZmlsZS9QUk9GSUxFX0ZBSUxVUkVcIjoge1xuICAgICAgICAgICAgY29uc3QgeyBtZXNzYWdlIH0gPSBhY3Rpb247XG4gICAgICAgICAgICByZXR1cm4geyBlcnJvck1lc3NhZ2U6IG1lc3NhZ2UgfTtcbiAgICAgICAgfVxuICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xuIiwiaW1wb3J0IHsgUmVkdWNlciB9IGZyb20gXCJyZWR1eFwiO1xuaW1wb3J0IHsgQWN0aW9ucyB9IGZyb20gXCJyZWR1Y2Vyc1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFN0YXRlIHtcbiAgICBjbGllbnRJZD86IHN0cmluZztcbn1cblxuY29uc3QgcmVkdWNlcjogUmVkdWNlcjxTdGF0ZT4gPSAoc3RhdGUgPSB7fSwgYWN0aW9uOiBBY3Rpb25zKTogU3RhdGUgPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSBcInNldHRpbmdzL1NFVF9HTUFJTF9DTElFTlRfSURcIjoge1xuICAgICAgICAgICAgY29uc3QgeyBjbGllbnRJZCB9ID0gYWN0aW9uO1xuICAgICAgICAgICAgcmV0dXJuIHsgY2xpZW50SWQgfTtcbiAgICAgICAgfVxuICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xuIiwiZXhwb3J0IHsgbG9hZE1lc3NhZ2VzIH0gZnJvbSBcIi4vbG9hZE1lc3NhZ2VzXCI7XG5leHBvcnQgeyBsb2FkUHJvZmlsZSB9IGZyb20gXCIuL2xvYWRQcm9maWxlXCI7XG4iLCJpbXBvcnQgeyBjYWxsIH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xuXG5pbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSBcIm1vZGVsXCI7XG5cbmltcG9ydCAqIGFzIGdtYWlsQXBpIGZyb20gXCJhcGkvZ21haWxcIjtcblxuaW1wb3J0IHsgc2VuZEF1dGhvcml6ZVJlcXVlc3RTYWdhIH0gZnJvbSBcIi4vc2VuZEF1dGhvcml6ZVJlcXVlc3RTYWdhXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiogbG9hZE1lc3NhZ2VzKHVzZXJJZDogc3RyaW5nKSB7XG4gICAgY29uc3QgbWVzc2FnZUxpc3Q6IGdtYWlsQXBpLk1lc3NhZ2VMaXN0ID0geWllbGQgY2FsbChcbiAgICAgICAgc2VuZEF1dGhvcml6ZVJlcXVlc3RTYWdhLFxuICAgICAgICBnbWFpbEFwaS5nZXRNZXNzYWdlTGlzdCh1c2VySWQsIDEwKSxcbiAgICApO1xuXG4gICAgY29uc3QgbWVzc2FnZXM6IE1lc3NhZ2VbXSA9IFtdO1xuXG4gICAgZm9yIChjb25zdCBtZXNzYWdlSW5mbyBvZiBtZXNzYWdlTGlzdC5tZXNzYWdlcykge1xuICAgICAgICBjb25zdCBtZXNzYWdlOiBnbWFpbEFwaS5NZXNzYWdlID0geWllbGQgY2FsbChcbiAgICAgICAgICAgIHNlbmRBdXRob3JpemVSZXF1ZXN0U2FnYSxcbiAgICAgICAgICAgIGdtYWlsQXBpLmdldE1lc3NhZ2UodXNlcklkLCBtZXNzYWdlSW5mby5pZCksXG4gICAgICAgICk7XG5cbiAgICAgICAgbWVzc2FnZXMucHVzaChwYXJzZU1lc3NhZ2UobWVzc2FnZSkpO1xuICAgIH1cblxuICAgIHJldHVybiBtZXNzYWdlcztcbn1cblxuY29uc3QgcGFyc2VNZXNzYWdlID0gKG1lc3NhZ2U6IGdtYWlsQXBpLk1lc3NhZ2UpOiBNZXNzYWdlID0+IHtcbiAgICBjb25zdCBmcm9tID0gbWVzc2FnZS5wYXlsb2FkLmhlYWRlcnMuZmluZCh4ID0+IHgubmFtZSA9PT0gZ21haWxBcGkuSGVhZGVyVHlwZS5Gcm9tKS52YWx1ZTtcbiAgICBjb25zdCBzdWJqZWN0ID0gbWVzc2FnZS5wYXlsb2FkLmhlYWRlcnMuZmluZCh4ID0+IHgubmFtZSA9PT0gZ21haWxBcGkuSGVhZGVyVHlwZS5TdWJqZWN0KS52YWx1ZTtcblxuICAgIHJldHVybiB7IGlkOiBtZXNzYWdlLmlkLCBmcm9tLCBzdWJqZWN0IH07XG59O1xuIiwiaW1wb3J0IHsgY2FsbCB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcclxuXHJcbmltcG9ydCB7IFByb2ZpbGUgfSBmcm9tIFwibW9kZWwvcHJvZmlsZVwiO1xyXG5cclxuaW1wb3J0ICogYXMgZ21haWxBcGkgZnJvbSBcImFwaS9nbWFpbFwiO1xyXG5cclxuaW1wb3J0IHsgc2VuZEF1dGhvcml6ZVJlcXVlc3RTYWdhIH0gZnJvbSBcIi4vc2VuZEF1dGhvcml6ZVJlcXVlc3RTYWdhXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24qIGxvYWRQcm9maWxlKCkge1xyXG4gICAgY29uc3QgcHJvZmlsZTogZ21haWxBcGkuUHJvZmlsZSA9IHlpZWxkIGNhbGwoXHJcbiAgICAgICAgc2VuZEF1dGhvcml6ZVJlcXVlc3RTYWdhLFxyXG4gICAgICAgIGdtYWlsQXBpLmdldFByb2ZpbGUoXCJtZVwiKSxcclxuICAgICk7XHJcbiAgICByZXR1cm4gcGFyc2VQcm9maWxlKHByb2ZpbGUpO1xyXG59XHJcblxyXG5jb25zdCBwYXJzZVByb2ZpbGUgPSAocHJvZmlsZTogZ21haWxBcGkuUHJvZmlsZSk6IFByb2ZpbGUgPT4ge1xyXG4gICAgcmV0dXJuIHsgZW1haWw6IHByb2ZpbGUuZW1haWxBZGRyZXNzIH07XHJcbn07XHJcbiIsImltcG9ydCB7IGNhbGwsIHNlbGVjdCB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcclxuXHJcbmltcG9ydCB7IFJvb3RTdGF0ZSB9IGZyb20gXCJyZWR1Y2Vyc1wiO1xyXG5cclxuaW1wb3J0IHsgQXBpUmVxdWVzdCB9IGZyb20gXCJhcGkvQXBpUmVxdWVzdFwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uKiBzZW5kQXV0aG9yaXplUmVxdWVzdFNhZ2E8VD4ocmVxdWVzdDogQXBpUmVxdWVzdDxUPikge1xyXG4gICAgY29uc3QgdG9rZW4gPSB5aWVsZCBjYWxsKGdldFRva2VuKTtcclxuXHJcbiAgICByZXR1cm4geWllbGQgY2FsbChcclxuICAgICAgICByZXF1ZXN0LndpdGhIZWFkZXJzKHtcclxuICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXHJcbiAgICAgICAgfSkuZXhlY3V0ZSxcclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiogZ2V0VG9rZW4oKSB7XHJcbiAgICBjb25zdCB0b2tlbiA9IHlpZWxkIHNlbGVjdCgoc3RhdGU6IFJvb3RTdGF0ZSkgPT4gc3RhdGUuYXV0aC50b2tlbkluZm8udG9rZW4pO1xyXG4gICAgcmV0dXJuIHRva2VuO1xyXG59XHJcbiIsImltcG9ydCB7IGZvcmsgfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XG5cbmltcG9ydCB7IGF1dGhTYWdhIH0gZnJvbSBcIi4vb2F1dGhTYWdhXCI7XG5pbXBvcnQgeyBtZXNzYWdlc1NhZ2EgfSBmcm9tIFwiLi9tZXNzYWdlc1NhZ2FcIjtcbmltcG9ydCB7IHByb2ZpbGVTYWdhIH0gZnJvbSBcIi4vcHJvZmlsZVNhZ2FcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHJvb3RTYWdhKCkge1xuICAgIHlpZWxkIGZvcmsoYXV0aFNhZ2EpO1xuICAgIHlpZWxkIGZvcmsobWVzc2FnZXNTYWdhKTtcbiAgICB5aWVsZCBmb3JrKHByb2ZpbGVTYWdhKTtcbn1cbiIsImltcG9ydCB7IGNhbGwsIHB1dCwgc2VsZWN0LCB0YWtlTGF0ZXN0IH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xuXG5pbXBvcnQgeyBSb290U3RhdGUgfSBmcm9tIFwicmVkdWNlcnNcIjtcbmltcG9ydCB7IGxvYWRNZXNzYWdlcywgbG9hZE1lc3NhZ2VzRmFpbHVyZSwgbG9hZE1lc3NhZ2VzU3VjY2VzcyB9IGZyb20gXCJyZWR1Y2Vycy9hY3Rpb25zXCI7XG5cbmltcG9ydCAqIGFzIGdtYWlsU2VydmljZXMgZnJvbSBcInNhZ2FzL2dtYWlsXCI7XG5pbXBvcnQgeyBNZXNzYWdlLCBQcm9maWxlIH0gZnJvbSBcIm1vZGVsXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiogbWVzc2FnZXNTYWdhKCkge1xuICAgIHlpZWxkIHRha2VMYXRlc3QobG9hZE1lc3NhZ2VzLnR5cGUsIHByb2Nlc3NMb2dpbik7XG59XG5cbmZ1bmN0aW9uKiBwcm9jZXNzTG9naW4oX2FjdGlvbjogUmV0dXJuVHlwZTx0eXBlb2YgbG9hZE1lc3NhZ2VzPikge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHByb2ZpbGU6IFByb2ZpbGUgPSB5aWVsZCBjYWxsKGdldFByb2ZpbGUpO1xuXG4gICAgICAgIGNvbnN0IG1lc3NhZ2VzOiBNZXNzYWdlW10gPSB5aWVsZCBjYWxsKGdtYWlsU2VydmljZXMubG9hZE1lc3NhZ2VzLCBwcm9maWxlLmVtYWlsKTtcblxuICAgICAgICB5aWVsZCBwdXQobG9hZE1lc3NhZ2VzU3VjY2VzcyhtZXNzYWdlcykpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICB5aWVsZCBwdXQobG9hZE1lc3NhZ2VzRmFpbHVyZShlcnIsIGVyci50b1N0cmluZygpKSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiogZ2V0UHJvZmlsZSgpIHtcbiAgICBjb25zdCBwcm9maWxlOiBSb290U3RhdGVbXCJwcm9maWxlXCJdID0geWllbGQgc2VsZWN0KChzdGF0ZTogUm9vdFN0YXRlKSA9PiBzdGF0ZS5wcm9maWxlKTtcblxuICAgIGlmICghcHJvZmlsZS5pdGVtKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlVzZXIgcHJvZmlsZSBpcyBub3QgbG9hZGVkXCIpO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9maWxlLml0ZW07XG59XG4iLCJpbXBvcnQgeyBJUHJvdmlkZXIgfSBmcm9tIFwicmVhY3Qtc2ltcGxlLWF1dGhcIjtcblxuZXhwb3J0IGludGVyZmFjZSBTZXNzaW9uIHtcbiAgICBhY2Nlc3NUb2tlbjogc3RyaW5nO1xuICAgIHRva2VuVHlwZTogc3RyaW5nO1xuICAgIGV4cGlyZUR1cmF0aW9uU2Vjb25kczogbnVtYmVyO1xuICAgIHN0YXRlOiBzdHJpbmc7XG4gICAgc2NvcGU6IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IGVudW0gU2NvcGVzIHtcbiAgICBcImdtYWlsLnJlYWRvbmx5XCIgPSBcImh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvZ21haWwucmVhZG9ubHlcIixcbn1cblxuZXhwb3J0IGNvbnN0IGJ1aWxkR29vZ2xlUHJvdmlkZXIgPSAoXG4gICAgY2xpZW50SWQ6IHN0cmluZyxcbiAgICBzY29wZXM6IFNjb3Blc1tdID0gW1Njb3Blc1tcImdtYWlsLnJlYWRvbmx5XCJdXSxcbik6IElQcm92aWRlcjxTZXNzaW9uPiA9PiAoe1xuICAgIGJ1aWxkQXV0aG9yaXplVXJsKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgXCJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20vby9vYXV0aDIvdjIvYXV0aFwiICtcbiAgICAgICAgICAgIGA/c2NvcGU9JHtlbmNvZGVTY29wZXMoc2NvcGVzKX1gICtcbiAgICAgICAgICAgIFwiJmluY2x1ZGVfZ3JhbnRlZF9zY29wZXM9dHJ1ZVwiICtcbiAgICAgICAgICAgIFwiJnN0YXRlPXN0YXRlX3BhcmFtZXRlcl9wYXNzdGhyb3VnaF92YWx1ZVwiICtcbiAgICAgICAgICAgIGAmcmVkaXJlY3RfdXJpPSR7ZW5jb2RlVVJJQ29tcG9uZW50KGAke3dpbmRvdy5sb2NhdGlvbi5vcmlnaW59L3JlZGlyZWN0Lmh0bWxgKX1gICtcbiAgICAgICAgICAgIFwiJnJlc3BvbnNlX3R5cGU9dG9rZW5cIiArXG4gICAgICAgICAgICBgJmNsaWVudF9pZD0ke2NsaWVudElkfWBcbiAgICAgICAgKTtcbiAgICB9LFxuXG4gICAgZXh0cmFjdEVycm9yKHJlZGlyZWN0VXJsOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3QgZXJyb3JSZWFzb246IHN0cmluZyA9IGdldFBhcmFtZXRlcnMocmVkaXJlY3RVcmwsIFwiZXJyb3JcIik7XG5cbiAgICAgICAgcmV0dXJuIGVycm9yUmVhc29uID8gbmV3IEVycm9yKGVycm9yUmVhc29uKSA6IHVuZGVmaW5lZDtcbiAgICB9LFxuXG4gICAgZXh0cmFjdFNlc3Npb24ocmVkaXJlY3RVcmw6IHN0cmluZyk6IFNlc3Npb24ge1xuICAgICAgICBjb25zdCBhY2Nlc3NUb2tlbjogc3RyaW5nID0gZ2V0UGFyYW1ldGVycyhyZWRpcmVjdFVybCwgXCJhY2Nlc3NfdG9rZW5cIik7XG4gICAgICAgIGNvbnN0IHRva2VuVHlwZTogc3RyaW5nID0gZ2V0UGFyYW1ldGVycyhyZWRpcmVjdFVybCwgXCJ0b2tlbl90eXBlXCIpO1xuICAgICAgICBjb25zdCBzdGF0ZTogc3RyaW5nID0gZ2V0UGFyYW1ldGVycyhyZWRpcmVjdFVybCwgXCJzdGF0ZVwiKTtcbiAgICAgICAgY29uc3Qgc2NvcGU6IHN0cmluZyA9IGdldFBhcmFtZXRlcnMocmVkaXJlY3RVcmwsIFwic2NvcGVcIik7XG4gICAgICAgIGNvbnN0IGV4cGlyZUR1cmF0aW9uU2Vjb25kcyA9IHBhcnNlSW50KGdldFBhcmFtZXRlcnMocmVkaXJlY3RVcmwsIFwiZXhwaXJlc19pblwiKSwgMTApO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhY2Nlc3NUb2tlbixcbiAgICAgICAgICAgIGV4cGlyZUR1cmF0aW9uU2Vjb25kcyxcbiAgICAgICAgICAgIHRva2VuVHlwZSxcbiAgICAgICAgICAgIHN0YXRlLFxuICAgICAgICAgICAgc2NvcGUsXG4gICAgICAgIH07XG4gICAgfSxcblxuICAgIHZhbGlkYXRlU2Vzc2lvbihfc2Vzc2lvbjogU2Vzc2lvbik6IGJvb2xlYW4ge1xuICAgICAgICAvLyBUT0RPOiBBZGQgdmFsaWRhdGlvblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9LFxuXG4gICAgZ2V0QWNjZXNzVG9rZW4oc2Vzc2lvbjogU2Vzc2lvbiwgX3Jlc291cmNlSWQ6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBzZXNzaW9uLmFjY2Vzc1Rva2VuO1xuICAgIH0sXG5cbiAgICBnZXRTaWduT3V0VXJsKHRva2VuOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gYGh0dHBzOi8vYWNjb3VudHMuZ29vZ2xlLmNvbS9vL29hdXRoMi9yZXZva2U/dG9rZW49JHtlbmNvZGVVUklDb21wb25lbnQodG9rZW4pfWA7XG4gICAgfSxcbn0pO1xuXG5jb25zdCBnZXRQYXJhbWV0ZXJzID0gKHJlZGlyZWN0VXJsOiBzdHJpbmcsIG5hbWU6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IHJlZ2V4ID0gbmV3IFJlZ0V4cChgJHtuYW1lfT0oW14mXSspYCk7XG5cbiAgICBsZXQgdmFsdWU6IHN0cmluZyA9IG51bGw7XG4gICAgY29uc3QgdmFsdWVNYXRjaCA9IHJlZGlyZWN0VXJsLm1hdGNoKHJlZ2V4KTtcbiAgICBpZiAodmFsdWVNYXRjaCkge1xuICAgICAgICB2YWx1ZSA9IHZhbHVlTWF0Y2hbMV07XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlO1xufTtcblxuY29uc3QgZW5jb2RlU2NvcGVzID0gKHNjb3BlczogU2NvcGVzW10pID0+IHtcbiAgICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHNjb3Blcy5qb2luKFwiLFwiKSk7XG59O1xuIiwiaW1wb3J0IHsgZm9yayB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcblxuaW1wb3J0IHsgc2lnblVwU2FnYSB9IGZyb20gXCIuL3NpZ25VcFNhZ2FcIjtcblxuZXhwb3J0IGZ1bmN0aW9uKiBhdXRoU2FnYSgpIHtcbiAgICB5aWVsZCBmb3JrKHNpZ25VcFNhZ2EpO1xuXG4gICAgLy8gY29uc3QgaXNTaWduVXAgPSB5aWVsZCBjYWxsKGlzU2lnblVwU2FnYSk7XG4gICAgLy8gaWYgKCFpc1NpZ25VcCkge1xuICAgIC8vICAgICB5aWVsZCBwdXQoc2lnblVwKCkpO1xuICAgIC8vIH1cbn1cblxuLy8gZnVuY3Rpb24qIGlzU2lnblVwU2FnYSgpIHtcbi8vICAgICBjb25zdCB0b2tlbiA9IHlpZWxkIHNlbGVjdCgoc3RhdGU6IFJvb3RTdGF0ZSkgPT4gc3RhdGUuYXV0aC50b2tlbkluZm8pO1xuLy8gICAgIHJldHVybiBCb29sZWFuKHRva2VuKTtcbi8vIH1cbiIsImltcG9ydCB7IGNhbGwsIHB1dCwgc2VsZWN0LCB0YWtlTGF0ZXN0IH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xuXG5pbXBvcnQgUlNBIGZyb20gXCJyZWFjdC1zaW1wbGUtYXV0aFwiO1xuaW1wb3J0IHsgcmVxdWVzdFByb2ZpbGUsIHNpZ25VcCwgc2lnblVwRmFpbCwgc2lnblVwU3VjY2VzcyB9IGZyb20gXCJyZWR1Y2Vycy9hY3Rpb25zXCI7XG5cbmltcG9ydCB7IFNlc3Npb24sIGJ1aWxkR29vZ2xlUHJvdmlkZXIgfSBmcm9tIFwiLi9nb29nbGVQcm92aWRlclwiO1xuaW1wb3J0IHsgUm9vdFN0YXRlIH0gZnJvbSBcInJlZHVjZXJzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiogc2lnblVwU2FnYSgpIHtcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KHNpZ25VcC50eXBlLCBwcm9jZXNzU2lnblVwKTtcbn1cblxuZnVuY3Rpb24qIHByb2Nlc3NTaWduVXAoX2FjdGlvbjogUmV0dXJuVHlwZTx0eXBlb2Ygc2lnblVwPikge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGNsaWVudElkID0geWllbGQgY2FsbChnZXRDbGllbnRJZCk7XG4gICAgICAgIGNvbnN0IGdvb2dsZVByb3ZpZGVyID0gYnVpbGRHb29nbGVQcm92aWRlcihjbGllbnRJZCk7XG5cbiAgICAgICAgY29uc3Qgc2Vzc2lvbjogU2Vzc2lvbiA9IHlpZWxkIGNhbGwoUlNBLmFjcXVpcmVUb2tlbkFzeW5jLCBnb29nbGVQcm92aWRlcik7XG5cbiAgICAgICAgeWllbGQgcHV0KHNpZ25VcFN1Y2Nlc3MoeyB0b2tlbjogc2Vzc2lvbi5hY2Nlc3NUb2tlbiB9KSk7XG5cbiAgICAgICAgLy8gVE9ETzog0J3QtSDQtNC+0LvQttC90L4g0YLRg9GCINCx0YvRgtGMXG4gICAgICAgIHlpZWxkIHB1dChyZXF1ZXN0UHJvZmlsZSgpKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgeWllbGQgcHV0KHNpZ25VcEZhaWwoZXJyLCBlcnIudG9TdHJpbmcoKSkpO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uKiBnZXRDbGllbnRJZCgpIHtcbiAgICBjb25zdCBjbGllbnRJZCA9IHlpZWxkIHNlbGVjdCgoc3RhdGU6IFJvb3RTdGF0ZSkgPT4gc3RhdGUuc2V0dGluZ3MuY2xpZW50SWQpO1xuICAgIHJldHVybiBjbGllbnRJZDtcbn1cbiIsImltcG9ydCB7IGNhbGwsIHB1dCwgdGFrZUxhdGVzdCB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcblxuaW1wb3J0IHtcbiAgICBsb2FkTWVzc2FnZXMsXG4gICAgcmVxdWVzdFByb2ZpbGUsXG4gICAgcmVxdWVzdFByb2ZpbGVGYWlsdXJlLFxuICAgIHJlcXVlc3RQcm9maWxlU3VjY2Vzcyxcbn0gZnJvbSBcInJlZHVjZXJzL2FjdGlvbnNcIjtcblxuaW1wb3J0IHsgbG9hZFByb2ZpbGUgfSBmcm9tIFwic2FnYXMvZ21haWwvbG9hZFByb2ZpbGVcIjtcblxuZXhwb3J0IGZ1bmN0aW9uKiBwcm9maWxlU2FnYSgpIHtcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KHJlcXVlc3RQcm9maWxlLnR5cGUsIHByb2Nlc3NMb2dpbik7XG59XG5cbmZ1bmN0aW9uKiBwcm9jZXNzTG9naW4oX2FjdGlvbjogUmV0dXJuVHlwZTx0eXBlb2YgcmVxdWVzdFByb2ZpbGU+KSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcHJvZmlsZSA9IHlpZWxkIGNhbGwobG9hZFByb2ZpbGUpO1xuXG4gICAgICAgIHlpZWxkIHB1dChyZXF1ZXN0UHJvZmlsZVN1Y2Nlc3MocHJvZmlsZSkpO1xuXG4gICAgICAgIC8vIFRPRE86INCd0LUg0LTQvtC70LbQvdC+INGC0YPRgiDQsdGL0YLRjFxuICAgICAgICB5aWVsZCBwdXQobG9hZE1lc3NhZ2VzKCkpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICB5aWVsZCBwdXQocmVxdWVzdFByb2ZpbGVGYWlsdXJlKGVyciwgZXJyLnRvU3RyaW5nKCkpKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBjb21wb3NlIH0gZnJvbSBcInJlZHV4XCI7XHJcblxyXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1zdHJpbmctbGl0ZXJhbFxyXG5jb25zdCBnZXRSZWR1eERldlRvb2xzQ29tcG9zZSA9ICgpID0+XHJcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgd2luZG93W1wiX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fQ09NUE9TRV9fXCJdXHJcbiAgICAgICAgPyB3aW5kb3dbXCJfX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9DT01QT1NFX19cIl0oe1xyXG4gICAgICAgICAgICAgIG5hbWU6IFwiTXlCb2lsZXJwbGF0ZVwiLFxyXG4gICAgICAgICAgICAgIGFjdGlvbnNCbGFja2xpc3Q6IFtcIlJFRFVYX1NUT1JBR0VfU0FWRVwiXSxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgOiB1bmRlZmluZWQ7XHJcblxyXG5leHBvcnQgY29uc3QgY29tcG9zZUVuaGFuY2VycyA9IGdldFJlZHV4RGV2VG9vbHNDb21wb3NlKCkgfHwgY29tcG9zZTtcclxuIiwiaW1wb3J0IHsgYXBwbHlNaWRkbGV3YXJlLCBjcmVhdGVTdG9yZSB9IGZyb20gXCJyZWR1eFwiO1xyXG5pbXBvcnQgY3JlYXRlU2FnYU1pZGRsZXdhcmUgZnJvbSBcInJlZHV4LXNhZ2FcIjtcclxuaW1wb3J0IHsgcm91dGVyTWlkZGxld2FyZSBhcyBjcmVhdGVSb3V0ZXJNaWRkbGV3YXJlIH0gZnJvbSBcImNvbm5lY3RlZC1yZWFjdC1yb3V0ZXJcIjtcclxuXHJcbmltcG9ydCB7IHJvb3RSZWR1Y2VyIH0gZnJvbSBcInJlZHVjZXJzXCI7XHJcbmltcG9ydCByb290U2FnYSBmcm9tIFwic2FnYXNcIjtcclxuXHJcbmltcG9ydCB7IGNvbXBvc2VFbmhhbmNlcnMgfSBmcm9tIFwiLi9jb21wb3NlRW5oYW5jZXJzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb25maWd1cmVTdG9yZShpbml0aWFsU3RhdGUsIGhpc3RvcnkpIHtcclxuICAgIGNvbnN0IHJvdXRlck1pZGRsZXdhcmUgPSBjcmVhdGVSb3V0ZXJNaWRkbGV3YXJlKGhpc3RvcnkpO1xyXG4gICAgY29uc3Qgc2FnYU1pZGRsZXdhcmUgPSBjcmVhdGVTYWdhTWlkZGxld2FyZSgpO1xyXG5cclxuICAgIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUoXHJcbiAgICAgICAgcm9vdFJlZHVjZXIoaGlzdG9yeSksXHJcbiAgICAgICAgaW5pdGlhbFN0YXRlLFxyXG4gICAgICAgIGNvbXBvc2VFbmhhbmNlcnMoYXBwbHlNaWRkbGV3YXJlKHJvdXRlck1pZGRsZXdhcmUsIHNhZ2FNaWRkbGV3YXJlKSksXHJcbiAgICApO1xyXG5cclxuICAgIC8vIHJ1biBzYWdhc1xyXG4gICAgc2FnYU1pZGRsZXdhcmUucnVuKHJvb3RTYWdhKTtcclxuXHJcbiAgICAvLyBIb3QgbW9kdWxlIHJlcGxhY2VtZW50XHJcbiAgICBpZiAobW9kdWxlLmhvdCkge1xyXG4gICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi4vcmVkdWNlcnMvaW5kZXhcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBuZXdSb290UmVkdWNlciA9IHJlcXVpcmUoXCIuLi9yZWR1Y2Vycy9pbmRleFwiKS5kZWZhdWx0O1xyXG4gICAgICAgICAgICBzdG9yZS5yZXBsYWNlUmVkdWNlcihuZXdSb290UmVkdWNlcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHN0b3JlO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
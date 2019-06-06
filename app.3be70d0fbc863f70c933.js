(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

/***/ "./locales/index.js":
/*!**************************!*\
  !*** ./locales/index.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"en":{"common":{"signUp":"signUp"},"home":{"viewMessages":"View messages"},"login":{"needAuthorize":"Need authorize"},"messages":{"from":"from","subject":"subject"},"navigation":{"home":"Home","messages":"Messages","settings":"Settings"},"settings":{"enterCientId":"Enter CLIENT_ID"}},"ru":{"common":{"signUp":"Войти"},"home":{"viewMessages":"Открыть сообщения"},"login":{"needAuthorize":"Необходимо авторизоваться"},"messages":{"from":"отправитель","subject":"заголовок"},"navigation":{"home":"Домой","messages":"Сообщения","settings":"Настройки","video":"Видео"},"settings":{"enterCientId":"Введите CLIENT_ID"},"videoPlayer":{"video":"Видео","subtitle":"Субтитры"}}}

/***/ }),

/***/ "./src/api/apiRequest.ts":
/*!*******************************!*\
  !*** ./src/api/apiRequest.ts ***!
  \*******************************/
/*! exports provided: Headers, jsonHandler, ApiRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Headers", function() { return Headers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jsonHandler", function() { return jsonHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiRequest", function() { return ApiRequest; });
const Headers = {
    AcceptJson: { Accept: "application/json" },
    Authorization: (token) => ({ Authorization: token }),
    JsonContent: { "Content-Type": "application/json" },
};
const jsonHandler = (response) => response.json().catch(() => new Error());
class ApiRequest {
    constructor(input, init = {}, handlers = []) {
        this.handler = (handler) => {
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
        const headers = extraHeaders.reduce((headers, extra) => Object.assign(headers, extra), Object.assign({}, (this.request.headers || {})));
        return new ApiRequest(this.request, { headers }, this.handlers);
    }
}


/***/ }),

/***/ "./src/api/gmail/getMessage.ts":
/*!*************************************!*\
  !*** ./src/api/gmail/getMessage.ts ***!
  \*************************************/
/*! exports provided: HeaderType, getMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderType", function() { return HeaderType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMessage", function() { return getMessage; });
/* harmony import */ var api_apiRequest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! api/apiRequest */ "./src/api/apiRequest.ts");

const baseUri = "https://www.googleapis.com/gmail/v1";
var HeaderType;
(function (HeaderType) {
    HeaderType["From"] = "From";
    HeaderType["Subject"] = "Subject";
})(HeaderType || (HeaderType = {}));
const getMessage = (userId, messageId) => {
    return api_apiRequest__WEBPACK_IMPORTED_MODULE_0__["ApiRequest"].get(`${baseUri}/users/${userId}/messages/${messageId}?format=metadata`).handler(api_apiRequest__WEBPACK_IMPORTED_MODULE_0__["jsonHandler"]);
};


/***/ }),

/***/ "./src/api/gmail/getMessageList.ts":
/*!*****************************************!*\
  !*** ./src/api/gmail/getMessageList.ts ***!
  \*****************************************/
/*! exports provided: getMessageList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMessageList", function() { return getMessageList; });
/* harmony import */ var api_apiRequest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! api/apiRequest */ "./src/api/apiRequest.ts");

const baseUri = "https://www.googleapis.com/gmail/v1";
const getMessageList = (userId, maxResult = 20) => {
    return api_apiRequest__WEBPACK_IMPORTED_MODULE_0__["ApiRequest"].get(`${baseUri}/users/${userId}/messages?maxResults=${maxResult}`).handler(api_apiRequest__WEBPACK_IMPORTED_MODULE_0__["jsonHandler"]);
};


/***/ }),

/***/ "./src/api/gmail/getProfile.ts":
/*!*************************************!*\
  !*** ./src/api/gmail/getProfile.ts ***!
  \*************************************/
/*! exports provided: getProfile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProfile", function() { return getProfile; });
/* harmony import */ var api_apiRequest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! api/apiRequest */ "./src/api/apiRequest.ts");

const baseUri = "https://www.googleapis.com/gmail/v1";
const getProfile = (userId) => {
    return api_apiRequest__WEBPACK_IMPORTED_MODULE_0__["ApiRequest"].get(`${baseUri}/users/${userId}/profile`).handler(api_apiRequest__WEBPACK_IMPORTED_MODULE_0__["jsonHandler"]);
};


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
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! i18next */ "./node_modules/i18next/dist/es/index.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _locales_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../locales/index.js */ "./locales/index.js");
/* harmony import */ var _locales_index_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_locales_index_js__WEBPACK_IMPORTED_MODULE_2__);



i18next__WEBPACK_IMPORTED_MODULE_0__["default"].use(react_i18next__WEBPACK_IMPORTED_MODULE_1__["reactI18nextModule"]) // passes i18n down to react-i18next
    .init({
    resources: (_locales_index_js__WEBPACK_IMPORTED_MODULE_2___default()),
    lng: "ru",
    defaultNS: "common",
    keySeparator: false,
    interpolation: {
        escapeValue: false,
    },
});
/* harmony default export */ __webpack_exports__["default"] = (i18next__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! connected-react-router */ "./node_modules/connected-react-router/esm/index.js");
/* harmony import */ var i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! i18n */ "./src/i18n.ts");
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! history */ "./node_modules/history/es/index.js");
/* harmony import */ var store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! store */ "./src/store/index.ts");
/* harmony import */ var modules_App__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! modules/App */ "./src/modules/App.tsx");








const initialState = {};
const history = Object(history__WEBPACK_IMPORTED_MODULE_5__["createBrowserHistory"])({ basename: "" });
const store = Object(store__WEBPACK_IMPORTED_MODULE_6__["default"])(initialState, history);
react_dom__WEBPACK_IMPORTED_MODULE_1__["render"](react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_redux__WEBPACK_IMPORTED_MODULE_2__["Provider"], { store: store },
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](connected_react_router__WEBPACK_IMPORTED_MODULE_3__["ConnectedRouter"], { history: history },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](modules_App__WEBPACK_IMPORTED_MODULE_7__["default"], null))), document.getElementById("app"));


/***/ }),

/***/ "./src/modules/App.css":
/*!*****************************!*\
  !*** ./src/modules/App.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"app":"app__jbQ-L","app__header":"app__header__3DXm4","app__page":"app__page__1clcT"};

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












const App = () => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _App_css__WEBPACK_IMPORTED_MODULE_11__["app"] },
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["CssBaseline"], null),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _App_css__WEBPACK_IMPORTED_MODULE_11__["app__header"] },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["AppBar"], { position: "static" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](modules_navigation__WEBPACK_IMPORTED_MODULE_4__["Navigation"], null))),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _App_css__WEBPACK_IMPORTED_MODULE_11__["app__page"] },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_2__["Switch"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_2__["Route"], { exact: true, path: "/", component: modules_pages_home__WEBPACK_IMPORTED_MODULE_6__["Home"] }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_2__["Route"], { path: "/login", component: modules_pages_login__WEBPACK_IMPORTED_MODULE_7__["Login"] }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_2__["Route"], { path: "/video-react", component: modules_pages_video_react_example__WEBPACK_IMPORTED_MODULE_10__["VideoReactExample"] }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_2__["Route"], { path: "/settings", component: modules_pages_settings__WEBPACK_IMPORTED_MODULE_9__["Settings"] }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](modules_routes_protected_route__WEBPACK_IMPORTED_MODULE_5__["ProtectedRoute"], { path: "/messages", component: modules_pages_messages__WEBPACK_IMPORTED_MODULE_8__["Messages"] })))));
/* harmony default export */ __webpack_exports__["default"] = (Object(react_hot_loader__WEBPACK_IMPORTED_MODULE_1__["hot"])(module)(App));

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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadButton", function() { return UploadButton; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/Button/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__);
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};


class UploadButton extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
    render() {
        const _a = this.props, { accept, maxLength, children, component = _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default.a, onUpload } = _a, buttonProps = __rest(_a, ["accept", "maxLength", "children", "component", "onUpload"]);
        const Wrapper = component;
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Wrapper, Object.assign({}, buttonProps, { component: "label" }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", Object.assign({ type: "file", style: { display: "none" }, onChange: onUpload }, { accept, maxLength })),
            children));
    }
}
// <label>
//     <input type="file" style={{ display: "none" }} onChange={onUpload} />
//     <Wrapper {...buttonProps} component="span">
//         {children}
//     </Wrapper>
// </label>


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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return Link; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Link; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");


class Link extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
    render() {
        const { children, to } = this.props;
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], { to: to, style: { textDecoration: "none", color: "inherit" } }, children));
    }
}



/***/ }),

/***/ "./src/modules/link/TabLink.tsx":
/*!**************************************!*\
  !*** ./src/modules/link/TabLink.tsx ***!
  \**************************************/
/*! exports provided: TabLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabLink", function() { return TabLink; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Tab */ "./node_modules/@material-ui/core/Tab/index.js");
/* harmony import */ var _material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};



// Hack: https://github.com/mui-org/material-ui/issues/9106
class TabLink extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
    render() {
        const _a = this.props, { to } = _a, tabProps = __rest(_a, ["to"]);
        // tslint:disable-next-line:no-any
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_1___default.a, Object.assign({}, tabProps, { component: react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], to }));
    }
}


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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Localize", function() { return Localize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Localize; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");


class Localize extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
    render() {
        const { id } = this.props;
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_i18next__WEBPACK_IMPORTED_MODULE_1__["NamespacesConsumer"], null, t => {
            return t(id);
        }));
    }
}



/***/ }),

/***/ "./src/modules/navigation/Navigation.tsx":
/*!***********************************************!*\
  !*** ./src/modules/navigation/Navigation.tsx ***!
  \***********************************************/
/*! exports provided: Navigation, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Navigation", function() { return Navigation; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Tabs */ "./node_modules/@material-ui/core/Tabs/index.js");
/* harmony import */ var _material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var modules_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! modules/link */ "./src/modules/link/index.ts");
/* harmony import */ var modules_localize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! modules/localize */ "./src/modules/localize/index.tsx");




const PathNameMap = {
    "/": "navigation:home",
    "/settings": "navigation:settings",
    "/messages": "navigation:messages",
    "/video-react": "navigation:video",
};
class Navigation extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
    render() {
        const { path } = this.props;
        const isValidPath = Boolean(PathNameMap[path]);
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_1___default.a, { value: isValidPath ? path : false }, Object.keys(PathNameMap).map(path => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](modules_link__WEBPACK_IMPORTED_MODULE_2__["TabLink"], { key: path, value: path, to: path, label: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](modules_localize__WEBPACK_IMPORTED_MODULE_3__["Localize"], { id: PathNameMap[path] }) })))));
    }
}
/* harmony default export */ __webpack_exports__["default"] = (Navigation);


/***/ }),

/***/ "./src/modules/navigation/index.ts":
/*!*****************************************!*\
  !*** ./src/modules/navigation/index.ts ***!
  \*****************************************/
/*! exports provided: default, Navigation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NavigationModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Navigation", function() { return NavigationModule; });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navigation */ "./src/modules/navigation/Navigation.tsx");


const mapStateToProps = (state) => {
    const path = state.router.location.pathname;
    return {
        path,
    };
};
const mapDispatchToProps = {};
const NavigationModule = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_Navigation__WEBPACK_IMPORTED_MODULE_1__["default"]);



/***/ }),

/***/ "./src/modules/pages/home/Home.tsx":
/*!*****************************************!*\
  !*** ./src/modules/pages/home/Home.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/Button/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/Grid/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var modules_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! modules/link */ "./src/modules/link/index.ts");
/* harmony import */ var modules_localize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! modules/localize */ "./src/modules/localize/index.tsx");





class Home extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
    render() {
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, { container: true, justify: "center", alignItems: "center" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](modules_link__WEBPACK_IMPORTED_MODULE_3__["Link"], { to: "/messages" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default.a, { variant: "contained", color: "primary" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](modules_localize__WEBPACK_IMPORTED_MODULE_4__["Localize"], { id: "home:viewMessages" })))));
    }
}


/***/ }),

/***/ "./src/modules/pages/home/index.ts":
/*!*****************************************!*\
  !*** ./src/modules/pages/home/index.ts ***!
  \*****************************************/
/*! exports provided: default, Home */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HomeModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Home", function() { return HomeModule; });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home */ "./src/modules/pages/home/Home.tsx");


const mapStateToProps = (_state) => {
    return {};
};
const mapDispatchToProps = {};
const HomeModule = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_Home__WEBPACK_IMPORTED_MODULE_1__["default"]);



/***/ }),

/***/ "./src/modules/pages/login/Login.tsx":
/*!*******************************************!*\
  !*** ./src/modules/pages/login/Login.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/es/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/Button/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/Grid/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/Typography/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var modules_localize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! modules/localize */ "./src/modules/localize/index.tsx");






class Login extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
    render() {
        const { isAuthenticated, redirectPath } = this.props;
        if (isAuthenticated) {
            return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_1__["Redirect"], { to: redirectPath });
        }
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, { container: true, justify: "center", alignItems: "center", direction: "column" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, { item: true },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, { variant: "h6", color: "inherit" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](modules_localize__WEBPACK_IMPORTED_MODULE_5__["Localize"], { id: "login:needAuthorize" }))),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, { item: true },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default.a, { variant: "contained", color: "primary", onClick: this.props.signUp },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](modules_localize__WEBPACK_IMPORTED_MODULE_5__["Localize"], { id: "login:signUp" })))));
    }
}
/* harmony default export */ __webpack_exports__["default"] = (Login);


/***/ }),

/***/ "./src/modules/pages/login/index.ts":
/*!******************************************!*\
  !*** ./src/modules/pages/login/index.ts ***!
  \******************************************/
/*! exports provided: default, Login */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LoginModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Login", function() { return LoginModule; });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var reducers_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reducers/actions */ "./src/reducers/actions/index.ts");
/* harmony import */ var _Login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Login */ "./src/modules/pages/login/Login.tsx");



const getRedirectPath = (path) => {
    const result = /.*redirectPath=(?<path>.*).*/.exec(path);
    return (result && result[1]) || "/";
};
const mapStateToProps = (state) => {
    const redirectPath = getRedirectPath(state.router.location.search);
    return {
        isAuthenticated: Boolean(state.auth.tokenInfo),
        redirectPath,
    };
};
const mapDispatchToProps = {
    signUp: reducers_actions__WEBPACK_IMPORTED_MODULE_1__["signUp"],
};
const LoginModule = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_Login__WEBPACK_IMPORTED_MODULE_2__["default"]);



/***/ }),

/***/ "./src/modules/pages/messages/Messages.scss":
/*!**************************************************!*\
  !*** ./src/modules/pages/messages/Messages.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"messages":"messages__31QIG"};

/***/ }),

/***/ "./src/modules/pages/messages/Messages.tsx":
/*!*************************************************!*\
  !*** ./src/modules/pages/messages/Messages.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Messages; });
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
            return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3___default.a, null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_4___default.a, null,
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_7___default.a, null,
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_8___default.a, null,
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_6___default.a, null,
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](modules_localize__WEBPACK_IMPORTED_MODULE_9__["default"], { id: "messages:from" })),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_6___default.a, null,
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](modules_localize__WEBPACK_IMPORTED_MODULE_9__["default"], { id: "messages:subject" })))),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_5___default.a, null, messages.map(row => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_8___default.a, { key: row.id },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_6___default.a, null, row.from),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_6___default.a, null, row.subject))))))));
        };
    }
    render() {
        const { isLoading } = this.props;
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, { container: true, justify: "center", alignItems: "center", className: style(_Messages_scss__WEBPACK_IMPORTED_MODULE_10___default.a.messages) }, isLoading ? this.renderPreloader() : this.renderContent()));
    }
}


/***/ }),

/***/ "./src/modules/pages/messages/index.ts":
/*!*********************************************!*\
  !*** ./src/modules/pages/messages/index.ts ***!
  \*********************************************/
/*! exports provided: default, Messages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MessagesModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Messages", function() { return MessagesModule; });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Messages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Messages */ "./src/modules/pages/messages/Messages.tsx");


const mapStateToProps = (state) => {
    return {
        messages: state.messages.items,
        isLoading: state.messages.isLoading,
    };
};
const mapDispatchToProps = {};
const MessagesModule = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_Messages__WEBPACK_IMPORTED_MODULE_1__["default"]);



/***/ }),

/***/ "./src/modules/pages/settings/Settings.tsx":
/*!*************************************************!*\
  !*** ./src/modules/pages/settings/Settings.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Settings; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/Grid/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var modules_localize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! modules/localize */ "./src/modules/localize/index.tsx");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/TextField/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/Typography/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__);





class Settings extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
    constructor() {
        super(...arguments);
        this.handleChange = (event) => {
            const clientId = event.currentTarget.value;
            const { onChangeClientId } = this.props;
            onChangeClientId(clientId);
        };
    }
    render() {
        const { clientId } = this.props;
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, { container: true, justify: "center", alignItems: "center", direction: "column" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, { item: true },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, { variant: "h6", color: "inherit" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](modules_localize__WEBPACK_IMPORTED_MODULE_2__["Localize"], { id: "settings:enterCientId" }))),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, { item: true },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3___default.a, { id: "outlined-name", label: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](modules_localize__WEBPACK_IMPORTED_MODULE_2__["Localize"], { id: "settings:clientId" }), value: clientId, onChange: this.handleChange, margin: "normal", variant: "outlined" }))));
    }
}


/***/ }),

/***/ "./src/modules/pages/settings/index.ts":
/*!*********************************************!*\
  !*** ./src/modules/pages/settings/index.ts ***!
  \*********************************************/
/*! exports provided: default, Settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SettingsModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Settings", function() { return SettingsModule; });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Settings */ "./src/modules/pages/settings/Settings.tsx");
/* harmony import */ var reducers_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reducers/actions */ "./src/reducers/actions/index.ts");



const mapStateToProps = (state) => {
    return {
        clientId: state.settings.clientId || "",
    };
};
const mapDispatchToProps = {
    onChangeClientId: reducers_actions__WEBPACK_IMPORTED_MODULE_2__["setGmailClientId"],
};
const SettingsModule = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_Settings__WEBPACK_IMPORTED_MODULE_1__["default"]);



/***/ }),

/***/ "./src/modules/pages/video-react-example/VideoReactExample.scss":
/*!**********************************************************************!*\
  !*** ./src/modules/pages/video-react-example/VideoReactExample.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"video-player":"video-player__1XjwB","video-player__player":"video-player__player__2fezw","video-player__control-panel":"video-player__control-panel__3Y16W","video-player__control-item":"video-player__control-item__3kFU9"};

/***/ }),

/***/ "./src/modules/pages/video-react-example/VideoReactExample.tsx":
/*!*********************************************************************!*\
  !*** ./src/modules/pages/video-react-example/VideoReactExample.tsx ***!
  \*********************************************************************/
/*! exports provided: VideoReactExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoReactExample", function() { return VideoReactExample; });
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







class VideoReactExample extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
    constructor() {
        super(...arguments);
        this.state = {};
        this.renderControlPanel = () => {
            const { subtitlesFile, videoFile } = this.state;
            return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _VideoReactExample_scss__WEBPACK_IMPORTED_MODULE_6___default.a["video-player__control-panel"] },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["TextField"], { disabled: true, className: _VideoReactExample_scss__WEBPACK_IMPORTED_MODULE_6___default.a["video-player__control-item"], value: videoFile ? videoFile.name : "", helperText: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](modules_localize__WEBPACK_IMPORTED_MODULE_5__["Localize"], { id: "videoPlayer:video" }), InputProps: {
                        startAdornment: (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](modules_button__WEBPACK_IMPORTED_MODULE_1__["UploadButton"], { accept: ".mp4,.mkv", maxLength: 1, onUpload: this.handleVideoUpload, component: _material_ui_core__WEBPACK_IMPORTED_MODULE_3__["IconButton"] },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_icons_Attachment__WEBPACK_IMPORTED_MODULE_4___default.a, null))),
                    } }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["TextField"], { disabled: true, className: _VideoReactExample_scss__WEBPACK_IMPORTED_MODULE_6___default.a["video-player__control-item"], value: subtitlesFile ? subtitlesFile.name : "", helperText: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](modules_localize__WEBPACK_IMPORTED_MODULE_5__["Localize"], { id: "videoPlayer:subtitle" }), InputProps: {
                        startAdornment: (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](modules_button__WEBPACK_IMPORTED_MODULE_1__["UploadButton"], { accept: ".vtt", maxLength: 1, onUpload: this.handleSubtitlesUpload, component: _material_ui_core__WEBPACK_IMPORTED_MODULE_3__["IconButton"] },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_icons_Attachment__WEBPACK_IMPORTED_MODULE_4___default.a, null))),
                    } })));
        };
        this.handleVideoUpload = (event) => {
            const targetEvent = event.currentTarget;
            const files = targetEvent.files;
            if (files.length === 1) {
                const file = files[0];
                this.setState({
                    videoFile: {
                        name: file.name,
                        url: URL.createObjectURL(file),
                    },
                });
            }
        };
        this.handleSubtitlesUpload = (event) => {
            const targetEvent = event.currentTarget;
            const files = targetEvent.files;
            if (files.length === 1) {
                const file = files[0];
                this.setState({
                    subtitlesFile: {
                        name: file.name,
                        url: URL.createObjectURL(file),
                    },
                });
            }
        };
    }
    render() {
        const { videoFile, subtitlesFile } = this.state;
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _VideoReactExample_scss__WEBPACK_IMPORTED_MODULE_6___default.a["video-player"] },
            this.renderControlPanel(),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_video_player__WEBPACK_IMPORTED_MODULE_2__["VideoPlayer"], { className: _VideoReactExample_scss__WEBPACK_IMPORTED_MODULE_6___default.a["video-player__player"], videoFileURL: videoFile && videoFile.url, subtitlesFileURL: subtitlesFile && subtitlesFile.url })));
    }
}


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

// extracted by mini-css-extract-plugin
module.exports = {"video-player":"video-player__tHdK7","video-player__video":"video-player__video__Xg6OI","video-player__subtitle":"video-player__subtitle__HbEzr","video-player__controls":"video-player__controls__3ReuY","video-player__slider":"video-player__slider__2iAFa"};

/***/ }),

/***/ "./src/modules/pages/video-react-example/video-player/VideoPlayer.tsx":
/*!****************************************************************************!*\
  !*** ./src/modules/pages/video-react-example/video-player/VideoPlayer.tsx ***!
  \****************************************************************************/
/*! exports provided: VideoPlayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoPlayer", function() { return VideoPlayer; });
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

const classNames = __webpack_require__(/*! classnames/bind */ "./node_modules/classnames/bind.js");





const style = classNames.bind(_VideoPlayer_scss__WEBPACK_IMPORTED_MODULE_5___default.a);
class VideoPlayer extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
    constructor() {
        super(...arguments);
        this.state = {
            isFullscreen: false,
            isPaused: true,
            seekPosition: 0,
            subtitles: [],
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
                }
                else {
                    this.videoElement.pause();
                }
                this.setState({ isPaused: !isPaused });
            }
        };
        this.handleWheel = (event) => {
            if (this.videoElement) {
                if (event.deltaY > 0) {
                    this.videoElement.currentTime -= 5; // to const
                }
                else {
                    this.videoElement.currentTime += 5;
                }
            }
            // event.preventDefault();
        };
        this.handleTimeUpdate = () => {
            if (this.videoElement) {
                const duration = this.videoElement.duration;
                const currentTime = this.videoElement.currentTime;
                const seekPosition = (100 / duration) * currentTime;
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
            }
            else {
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
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { ref: component => {
                this.videoPlayerElement = component;
            }, className: style(_VideoPlayer_scss__WEBPACK_IMPORTED_MODULE_5___default.a["video-player"], className), onWheel: this.handleWheel },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("video", { src: videoFileURL, ref: component => {
                    this.videoElement = component;
                }, className: style(_VideoPlayer_scss__WEBPACK_IMPORTED_MODULE_5___default.a["video-player__video"]), onClick: this.handlePlay, onDoubleClick: this.toogleFullScreen, onTimeUpdate: this.handleTimeUpdate },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("track", { ref: component => {
                        this.trackElement = component;
                    }, style: { display: "none" }, kind: "subtitles", src: subtitlesFileURL, default: true })),
            subtitles.length > 0 && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: style("video-player__subtitle") }, subtitles.map((subtitle, index) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { key: index }, subtitle))))),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: style(_VideoPlayer_scss__WEBPACK_IMPORTED_MODULE_5___default.a["video-player__controls"]) },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default.a, { color: "primary", "aria-label": "Play", onClick: this.handlePlay },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_icons_PlayCircleOutline__WEBPACK_IMPORTED_MODULE_2___default.a, null)),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_lab_Slider__WEBPACK_IMPORTED_MODULE_4___default.a, { className: style(_VideoPlayer_scss__WEBPACK_IMPORTED_MODULE_5___default.a["video-player__slider"]), value: seekPosition, onChange: this.handleChangeSeekPosition }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default.a, { color: "primary", "aria-label": "Fullscreen", onClick: this.toogleFullScreen },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_icons_Fullscreen__WEBPACK_IMPORTED_MODULE_3___default.a, null)))));
    }
}
const errorLogger = reason => {
    // tslint:disable-next-line:no-console
    console.log("reason", JSON.stringify(reason, null, " "));
};


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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProtectedRoute; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/es/index.js");
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};


class ProtectedRoute extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
    render() {
        const _a = this.props, { isAuthenticated, currentPath } = _a, otherProps = __rest(_a, ["isAuthenticated", "currentPath"]);
        if (!isAuthenticated) {
            return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_1__["Redirect"], { to: `/login?redirectPath=${currentPath}` });
        }
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_1__["Route"], Object.assign({}, otherProps));
    }
}


/***/ }),

/***/ "./src/modules/routes/protected-route/index.ts":
/*!*****************************************************!*\
  !*** ./src/modules/routes/protected-route/index.ts ***!
  \*****************************************************/
/*! exports provided: default, ProtectedRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProtectedRouteModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProtectedRoute", function() { return ProtectedRouteModule; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _ProtectedRoute__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProtectedRoute */ "./src/modules/routes/protected-route/ProtectedRoute.tsx");



const mapStateToProps = (state) => {
    // TODO: Add token validation
    return {
        isAuthenticated: Boolean(state.auth.tokenInfo),
        currentPath: state.router.location.pathname,
    };
};
const mapDispatchToProps = (dispatch) => {
    const actionCreators = {};
    return Object(redux__WEBPACK_IMPORTED_MODULE_0__["bindActionCreators"])(actionCreators, dispatch);
};
function selectorFactory(dispatch) {
    const actions = mapDispatchToProps(dispatch);
    return (nextState, newOwnProps) => (Object.assign({}, mapStateToProps(nextState), actions, newOwnProps));
}
const ProtectedRouteModule = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connectAdvanced"])(selectorFactory)(_ProtectedRoute__WEBPACK_IMPORTED_MODULE_2__["default"]);



/***/ }),

/***/ "./src/reducers/actions/action-helpers.ts":
/*!************************************************!*\
  !*** ./src/reducers/actions/action-helpers.ts ***!
  \************************************************/
/*! exports provided: actionCreator, createAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionCreator", function() { return actionCreator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAction", function() { return createAction; });
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadMessages", function() { return loadMessages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadMessagesSuccess", function() { return loadMessagesSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadMessagesFailure", function() { return loadMessagesFailure; });
/* harmony import */ var _action_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action-helpers */ "./src/reducers/actions/action-helpers.ts");

const loadMessages = Object(_action_helpers__WEBPACK_IMPORTED_MODULE_0__["actionCreator"])("messages/LOAD");
const loadMessagesSuccess = Object(_action_helpers__WEBPACK_IMPORTED_MODULE_0__["actionCreator"])("messages/LOAD_SUCCESS", (messages) => ({
    messages,
}));
const loadMessagesFailure = Object(_action_helpers__WEBPACK_IMPORTED_MODULE_0__["actionCreator"])("messages/LOAD_FAILURE", (erorr, message) => ({ erorr, message }));


/***/ }),

/***/ "./src/reducers/actions/profile.ts":
/*!*****************************************!*\
  !*** ./src/reducers/actions/profile.ts ***!
  \*****************************************/
/*! exports provided: requestProfile, requestProfileSuccess, requestProfileFailure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestProfile", function() { return requestProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestProfileSuccess", function() { return requestProfileSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestProfileFailure", function() { return requestProfileFailure; });
/* harmony import */ var _action_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action-helpers */ "./src/reducers/actions/action-helpers.ts");

const requestProfile = Object(_action_helpers__WEBPACK_IMPORTED_MODULE_0__["actionCreator"])("profile/PROFILE_REQUEST");
const requestProfileSuccess = Object(_action_helpers__WEBPACK_IMPORTED_MODULE_0__["actionCreator"])("profile/PROFILE_SUCCESS", (profile) => ({
    profile,
}));
const requestProfileFailure = Object(_action_helpers__WEBPACK_IMPORTED_MODULE_0__["actionCreator"])("profile/PROFILE_FAILURE", (erorr, message) => ({ erorr, message }));


/***/ }),

/***/ "./src/reducers/actions/settings.ts":
/*!******************************************!*\
  !*** ./src/reducers/actions/settings.ts ***!
  \******************************************/
/*! exports provided: setGmailClientId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setGmailClientId", function() { return setGmailClientId; });
/* harmony import */ var _action_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action-helpers */ "./src/reducers/actions/action-helpers.ts");

const setGmailClientId = Object(_action_helpers__WEBPACK_IMPORTED_MODULE_0__["actionCreator"])("settings/SET_GMAIL_CLIENT_ID", (clientId) => ({
    clientId,
}));


/***/ }),

/***/ "./src/reducers/actions/signUp.ts":
/*!****************************************!*\
  !*** ./src/reducers/actions/signUp.ts ***!
  \****************************************/
/*! exports provided: signUp, signUpSuccess, signUpFail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signUp", function() { return signUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signUpSuccess", function() { return signUpSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signUpFail", function() { return signUpFail; });
/* harmony import */ var _action_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action-helpers */ "./src/reducers/actions/action-helpers.ts");

const signUp = Object(_action_helpers__WEBPACK_IMPORTED_MODULE_0__["actionCreator"])("signUp/SIGN_UP_REQUEST");
const signUpSuccess = Object(_action_helpers__WEBPACK_IMPORTED_MODULE_0__["actionCreator"])("signUp/SIGN_UP_SUCCESS", (tokenInfo) => ({
    tokenInfo,
}));
const signUpFail = Object(_action_helpers__WEBPACK_IMPORTED_MODULE_0__["actionCreator"])("signUp/SIGN_UP_FAILURE", (erorr, message) => ({ erorr, message }));


/***/ }),

/***/ "./src/reducers/auth.ts":
/*!******************************!*\
  !*** ./src/reducers/auth.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const reducer = (state = {}, action) => {
    switch (action.type) {
        case "signUp/SIGN_UP_REQUEST": {
            return {};
        }
        case "signUp/SIGN_UP_SUCCESS": {
            const { tokenInfo } = action;
            return { tokenInfo };
        }
        case "signUp/SIGN_UP_FAILURE": {
            const { message } = action;
            return { errorMessage: message };
        }
        default: {
            return state;
        }
    }
};
/* harmony default export */ __webpack_exports__["default"] = (reducer);


/***/ }),

/***/ "./src/reducers/index.ts":
/*!*******************************!*\
  !*** ./src/reducers/index.ts ***!
  \*******************************/
/*! exports provided: rootReducer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rootReducer", function() { return rootReducer; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! connected-react-router */ "./node_modules/connected-react-router/esm/index.js");
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth */ "./src/reducers/auth.ts");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./messages */ "./src/reducers/messages.ts");
/* harmony import */ var _profile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile */ "./src/reducers/profile.ts");
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./settings */ "./src/reducers/settings.ts");






const rootReducer = history => Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
    router: Object(connected_react_router__WEBPACK_IMPORTED_MODULE_1__["connectRouter"])(history),
    auth: _auth__WEBPACK_IMPORTED_MODULE_2__["default"],
    messages: _messages__WEBPACK_IMPORTED_MODULE_3__["default"],
    profile: _profile__WEBPACK_IMPORTED_MODULE_4__["default"],
    settings: _settings__WEBPACK_IMPORTED_MODULE_5__["default"],
});
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);


/***/ }),

/***/ "./src/reducers/messages.ts":
/*!**********************************!*\
  !*** ./src/reducers/messages.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const DefaulState = {
    isLoading: false,
};
const reducer = (state = DefaulState, action) => {
    switch (action.type) {
        case "messages/LOAD": {
            return { isLoading: true };
        }
        case "messages/LOAD_SUCCESS": {
            const { messages } = action;
            return { isLoading: false, items: messages };
        }
        case "messages/LOAD_FAILURE": {
            const { message } = action;
            return { isLoading: false, errorMessage: message };
        }
        default: {
            return state;
        }
    }
};
/* harmony default export */ __webpack_exports__["default"] = (reducer);


/***/ }),

/***/ "./src/reducers/profile.ts":
/*!*********************************!*\
  !*** ./src/reducers/profile.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const reducer = (state = {}, action) => {
    switch (action.type) {
        case "profile/PROFILE_REQUEST": {
            return null;
        }
        case "profile/PROFILE_SUCCESS": {
            const { profile } = action;
            return { item: profile };
        }
        case "profile/PROFILE_FAILURE": {
            const { message } = action;
            return { errorMessage: message };
        }
        default: {
            return state;
        }
    }
};
/* harmony default export */ __webpack_exports__["default"] = (reducer);


/***/ }),

/***/ "./src/reducers/settings.ts":
/*!**********************************!*\
  !*** ./src/reducers/settings.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const reducer = (state = {}, action) => {
    switch (action.type) {
        case "settings/SET_GMAIL_CLIENT_ID": {
            const { clientId } = action;
            return { clientId };
        }
        default: {
            return state;
        }
    }
};
/* harmony default export */ __webpack_exports__["default"] = (reducer);


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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadMessages", function() { return loadMessages; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/es/effects.js");
/* harmony import */ var api_gmail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! api/gmail */ "./src/api/gmail/index.ts");
/* harmony import */ var _sendAuthorizeRequestSaga__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sendAuthorizeRequestSaga */ "./src/sagas/gmail/sendAuthorizeRequestSaga.ts");



function* loadMessages(userId) {
    const messageList = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_sendAuthorizeRequestSaga__WEBPACK_IMPORTED_MODULE_2__["sendAuthorizeRequestSaga"], api_gmail__WEBPACK_IMPORTED_MODULE_1__["getMessageList"](userId, 10));
    const messages = [];
    for (const messageInfo of messageList.messages) {
        const message = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_sendAuthorizeRequestSaga__WEBPACK_IMPORTED_MODULE_2__["sendAuthorizeRequestSaga"], api_gmail__WEBPACK_IMPORTED_MODULE_1__["getMessage"](userId, messageInfo.id));
        messages.push(parseMessage(message));
    }
    return messages;
}
const parseMessage = (message) => {
    const from = message.payload.headers.find(x => x.name === api_gmail__WEBPACK_IMPORTED_MODULE_1__["HeaderType"].From).value;
    const subject = message.payload.headers.find(x => x.name === api_gmail__WEBPACK_IMPORTED_MODULE_1__["HeaderType"].Subject).value;
    return { id: message.id, from, subject };
};


/***/ }),

/***/ "./src/sagas/gmail/loadProfile.ts":
/*!****************************************!*\
  !*** ./src/sagas/gmail/loadProfile.ts ***!
  \****************************************/
/*! exports provided: loadProfile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadProfile", function() { return loadProfile; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/es/effects.js");
/* harmony import */ var api_gmail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! api/gmail */ "./src/api/gmail/index.ts");
/* harmony import */ var _sendAuthorizeRequestSaga__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sendAuthorizeRequestSaga */ "./src/sagas/gmail/sendAuthorizeRequestSaga.ts");



function* loadProfile() {
    const profile = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_sendAuthorizeRequestSaga__WEBPACK_IMPORTED_MODULE_2__["sendAuthorizeRequestSaga"], api_gmail__WEBPACK_IMPORTED_MODULE_1__["getProfile"]("me"));
    return parseProfile(profile);
}
const parseProfile = (profile) => {
    return { email: profile.emailAddress };
};


/***/ }),

/***/ "./src/sagas/gmail/sendAuthorizeRequestSaga.ts":
/*!*****************************************************!*\
  !*** ./src/sagas/gmail/sendAuthorizeRequestSaga.ts ***!
  \*****************************************************/
/*! exports provided: sendAuthorizeRequestSaga, getToken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendAuthorizeRequestSaga", function() { return sendAuthorizeRequestSaga; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getToken", function() { return getToken; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/es/effects.js");

function* sendAuthorizeRequestSaga(request) {
    const token = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(getToken);
    return yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(request.withHeaders({
        Authorization: `Bearer ${token}`,
    }).execute);
}
function* getToken() {
    const token = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["select"])((state) => state.auth.tokenInfo.token);
    return token;
}


/***/ }),

/***/ "./src/sagas/index.ts":
/*!****************************!*\
  !*** ./src/sagas/index.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/es/effects.js");
/* harmony import */ var _oauthSaga__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./oauthSaga */ "./src/sagas/oauthSaga/index.ts");
/* harmony import */ var _messagesSaga__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./messagesSaga */ "./src/sagas/messagesSaga.ts");
/* harmony import */ var _profileSaga__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profileSaga */ "./src/sagas/profileSaga.ts");




function* rootSaga() {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_oauthSaga__WEBPACK_IMPORTED_MODULE_1__["authSaga"]);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_messagesSaga__WEBPACK_IMPORTED_MODULE_2__["messagesSaga"]);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_profileSaga__WEBPACK_IMPORTED_MODULE_3__["profileSaga"]);
}


/***/ }),

/***/ "./src/sagas/messagesSaga.ts":
/*!***********************************!*\
  !*** ./src/sagas/messagesSaga.ts ***!
  \***********************************/
/*! exports provided: messagesSaga */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "messagesSaga", function() { return messagesSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/es/effects.js");
/* harmony import */ var reducers_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reducers/actions */ "./src/reducers/actions/index.ts");
/* harmony import */ var sagas_gmail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sagas/gmail */ "./src/sagas/gmail/index.ts");



function* messagesSaga() {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(reducers_actions__WEBPACK_IMPORTED_MODULE_1__["loadMessages"].type, processLogin);
}
function* processLogin(_action) {
    try {
        const profile = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(getProfile);
        const messages = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(sagas_gmail__WEBPACK_IMPORTED_MODULE_2__["loadMessages"], profile.email);
        yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(reducers_actions__WEBPACK_IMPORTED_MODULE_1__["loadMessagesSuccess"])(messages));
    }
    catch (err) {
        yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(reducers_actions__WEBPACK_IMPORTED_MODULE_1__["loadMessagesFailure"])(err, err.toString()));
    }
}
function* getProfile() {
    const profile = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["select"])((state) => state.profile);
    if (!profile.item) {
        throw new Error("User profile is not loaded");
    }
    return profile.item;
}


/***/ }),

/***/ "./src/sagas/oauthSaga/googleProvider.ts":
/*!***********************************************!*\
  !*** ./src/sagas/oauthSaga/googleProvider.ts ***!
  \***********************************************/
/*! exports provided: buildGoogleProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildGoogleProvider", function() { return buildGoogleProvider; });
const buildGoogleProvider = (clientId, scopes = ["https://www.googleapis.com/auth/gmail.readonly" /* "gmail.readonly" */]) => ({
    buildAuthorizeUrl() {
        return ("https://accounts.google.com/o/oauth2/v2/auth" +
            `?scope=${encodeScopes(scopes)}` +
            "&include_granted_scopes=true" +
            "&state=state_parameter_passthrough_value" +
            `&redirect_uri=${encodeURIComponent(`${window.location.origin}/redirect.html`)}` +
            "&response_type=token" +
            `&client_id=${clientId}`);
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
            scope,
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
    },
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
const encodeScopes = (scopes) => {
    return encodeURIComponent(scopes.join(","));
};


/***/ }),

/***/ "./src/sagas/oauthSaga/index.ts":
/*!**************************************!*\
  !*** ./src/sagas/oauthSaga/index.ts ***!
  \**************************************/
/*! exports provided: authSaga */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authSaga", function() { return authSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/es/effects.js");
/* harmony import */ var _signUpSaga__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signUpSaga */ "./src/sagas/oauthSaga/signUpSaga.ts");


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


/***/ }),

/***/ "./src/sagas/oauthSaga/signUpSaga.ts":
/*!*******************************************!*\
  !*** ./src/sagas/oauthSaga/signUpSaga.ts ***!
  \*******************************************/
/*! exports provided: signUpSaga, getClientId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signUpSaga", function() { return signUpSaga; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getClientId", function() { return getClientId; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/es/effects.js");
/* harmony import */ var react_simple_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-simple-auth */ "./node_modules/react-simple-auth/dist/react-simple-auth.es5.js");
/* harmony import */ var reducers_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reducers/actions */ "./src/reducers/actions/index.ts");
/* harmony import */ var _googleProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./googleProvider */ "./src/sagas/oauthSaga/googleProvider.ts");




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
    }
    catch (err) {
        yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(reducers_actions__WEBPACK_IMPORTED_MODULE_2__["signUpFail"])(err, err.toString()));
    }
}
function* getClientId() {
    const clientId = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["select"])((state) => state.settings.clientId);
    return clientId;
}


/***/ }),

/***/ "./src/sagas/profileSaga.ts":
/*!**********************************!*\
  !*** ./src/sagas/profileSaga.ts ***!
  \**********************************/
/*! exports provided: profileSaga */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "profileSaga", function() { return profileSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/es/effects.js");
/* harmony import */ var reducers_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reducers/actions */ "./src/reducers/actions/index.ts");
/* harmony import */ var sagas_gmail_loadProfile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sagas/gmail/loadProfile */ "./src/sagas/gmail/loadProfile.ts");



function* profileSaga() {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(reducers_actions__WEBPACK_IMPORTED_MODULE_1__["requestProfile"].type, processLogin);
}
function* processLogin(_action) {
    try {
        const profile = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(sagas_gmail_loadProfile__WEBPACK_IMPORTED_MODULE_2__["loadProfile"]);
        yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(reducers_actions__WEBPACK_IMPORTED_MODULE_1__["requestProfileSuccess"])(profile));
        // TODO: Не должно тут быть
        yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(reducers_actions__WEBPACK_IMPORTED_MODULE_1__["loadMessages"])());
    }
    catch (err) {
        yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(reducers_actions__WEBPACK_IMPORTED_MODULE_1__["requestProfileFailure"])(err, err.toString()));
    }
}


/***/ }),

/***/ "./src/store/composeEnhancers.ts":
/*!***************************************!*\
  !*** ./src/store/composeEnhancers.ts ***!
  \***************************************/
/*! exports provided: composeEnhancers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "composeEnhancers", function() { return composeEnhancers; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");

// tslint:disable:no-string-literal
const getReduxDevToolsCompose = () => undefined !== "production" && window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"]
    ? window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"]({
        name: "MyBoilerplate",
        actionsBlacklist: ["REDUX_STORAGE_SAVE"],
    })
    : undefined;
const composeEnhancers = getReduxDevToolsCompose() || redux__WEBPACK_IMPORTED_MODULE_0__["compose"];


/***/ }),

/***/ "./src/store/index.ts":
/*!****************************!*\
  !*** ./src/store/index.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return configureStore; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga */ "./node_modules/redux-saga/es/index.js");
/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! connected-react-router */ "./node_modules/connected-react-router/esm/index.js");
/* harmony import */ var reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reducers */ "./src/reducers/index.ts");
/* harmony import */ var sagas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sagas */ "./src/sagas/index.ts");
/* harmony import */ var _composeEnhancers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./composeEnhancers */ "./src/store/composeEnhancers.ts");






function configureStore(initialState, history) {
    const routerMiddleware = Object(connected_react_router__WEBPACK_IMPORTED_MODULE_2__["routerMiddleware"])(history);
    const sagaMiddleware = Object(redux_saga__WEBPACK_IMPORTED_MODULE_1__["default"])();
    const store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(Object(reducers__WEBPACK_IMPORTED_MODULE_3__["rootReducer"])(history), initialState, Object(_composeEnhancers__WEBPACK_IMPORTED_MODULE_5__["composeEnhancers"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(routerMiddleware, sagaMiddleware)));
    // run sagas
    sagaMiddleware.run(sagas__WEBPACK_IMPORTED_MODULE_4__["default"]);
    // Hot module replacement
    if (false) {}
    return store;
}


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
//# sourceMappingURL=app.3be70d0fbc863f70c933.js.map
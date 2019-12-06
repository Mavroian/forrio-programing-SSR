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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchUsers = exports.FETCH_USERS = undefined;

var _axios = __webpack_require__(12);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } // fetch the creators

var FETCH_USERS = exports.FETCH_USERS = "fetch_users";
var fetchUsers = exports.fetchUsers = function fetchUsers() {
  return function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch) {
      var res;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _axios2.default.get('https://api.foriio.com/api/v1/promoted/users').then(function (response) {
                return response.data;
              }).catch(function (error) {
                console.error(error);
              });

            case 2:
              res = _context.sent;


              dispatch({
                type: FETCH_USERS,
                payload: res.users
              });

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(6);

var _express = __webpack_require__(7);

var _express2 = _interopRequireDefault(_express);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(8);

var _reactRouterDom = __webpack_require__(1);

var _Routes = __webpack_require__(9);

var _Routes2 = _interopRequireDefault(_Routes);

var _createStore = __webpack_require__(13);

var _createStore2 = _interopRequireDefault(_createStore);

var _reactRedux = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use(_express2.default.static('public'));
app.get('*', function (req, res) {
  var store = (0, _createStore2.default)();
  //logic for data into the sore

  var content = (0, _server.renderToString)(_react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(
      _reactRouterDom.StaticRouter,
      { location: req.path, context: {} },
      _react2.default.createElement(_Routes2.default, null)
    )
  ));

  var html = '\n    <html>\n      <head>\n      </head>\n      <body>\n          <div id=root>' + content + '</div>\n          <script src="bundle.js"></script> \n      </body>\n    </html>\n  ';

  res.send(html);
});
app.listen(5000, function () {
  process.stdout.write("server running");
});

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

var _homepage = __webpack_require__(19);

var _homepage2 = _interopRequireDefault(_homepage);

var _usersList = __webpack_require__(11);

var _usersList2 = _interopRequireDefault(_usersList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: "/", component: _homepage2.default }),
    _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: "/users", component: _usersList2.default })
  );
};

/***/ }),
/* 10 */,
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _index = __webpack_require__(3);

var _creatorInfo = __webpack_require__(17);

var _creatorInfo2 = _interopRequireDefault(_creatorInfo);

var _creatorImages = __webpack_require__(18);

var _creatorImages2 = _interopRequireDefault(_creatorImages);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UsersList = function (_Component) {
  _inherits(UsersList, _Component);

  function UsersList() {
    _classCallCheck(this, UsersList);

    return _possibleConstructorReturn(this, (UsersList.__proto__ || Object.getPrototypeOf(UsersList)).apply(this, arguments));
  }

  _createClass(UsersList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.fetchUsers();
    }
  }, {
    key: "renderUsers",
    value: function renderUsers() {
      if (!this.props.users.loaded) {
        return _react2.default.createElement(
          "div",
          null,
          "Loading..."
        );
      } else {
        // return this.props.users.users.map(users => {
        //   return <li key={users.id}>{users.name}</li>
        // })
        return _react2.default.createElement(
          "div",
          { className: "creator_talent_container" },
          this.props.users.users.map(function (_ref) {
            var id = _ref.id,
                userInfo = _objectWithoutProperties(_ref, ["id"]);

            return _react2.default.createElement(
              "div",
              { key: id, className: "creator_talent_section" },
              _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(_creatorInfo2.default, userInfo)
              ),
              _react2.default.createElement(
                "div",
                { className: "creator_work_image_table" },
                _react2.default.createElement(_creatorImages2.default, userInfo)
              )
            );
          })
        );
      }
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          "ul",
          null,
          this.renderUsers()
        ),
        "Helloooo users"
      );
    }
  }]);

  return UsersList;
}(_react.Component);

function mapStateToProps(state) {
  return { users: state.users };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, { fetchUsers: _index.fetchUsers })(UsersList);

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(4);

var _reduxThunk = __webpack_require__(14);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _Reducers = __webpack_require__(15);

var _Reducers2 = _interopRequireDefault(_Reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {}; //server store

exports.default = function () {
  var store = (0, _redux.createStore)(_Reducers2.default, initialState, (0, _redux.applyMiddleware)(_reduxThunk2.default));
  return store;
};

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(4);

var _usersReducer = __webpack_require__(16);

var _usersReducer2 = _interopRequireDefault(_usersReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//combine reducers

exports.default = (0, _redux.combineReducers)({
  users: _usersReducer2.default
});

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _index = __webpack_require__(3);

var initialState = { loaded: false, users: [] };

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _index.FETCH_USERS:
      return _extends({}, state, { loaded: true, users: action.payload });
    default:
      return state;
  }
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import "./creator-info.styles.scss"

var CreatorInfo = function CreatorInfo(props) {
  return _react2.default.createElement(
    "div",
    { className: "creator_info" },
    _react2.default.createElement(
      "a",
      { className: "test", href: "/" + props.screen_name },
      _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          "div",
          { className: "creator_image_container" },
          _react2.default.createElement("img", { className: "creator_image", style: { with: "60px", height: "60px" }, src: props.avatar || "https://dyci7co52mbcc.cloudfront.net/static/images/default_avatar_v2.png", alt: props.name })
        )
      ),
      _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          "div",
          { className: "creator_info_role" },
          props.profession
        ),
        _react2.default.createElement(
          "div",
          { className: "creator_info_username" },
          props.name
        )
      )
    )
  );
};

exports.default = CreatorInfo;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import "./creator-works.styles.scss"

var CreatorImages = function CreatorImages(props) {
  return _react2.default.createElement(
    "div",
    { className: "creator_work_image_wrapper" },
    props.works.map(function (images) {
      return _react2.default.createElement(
        "div",
        { key: images.id },
        _react2.default.createElement(
          "a",
          { href: "/works/" + images.id },
          _react2.default.createElement(
            "div",
            { className: "creator_work_image" },
            _react2.default.createElement("img", { className: "creator_work creator_work_image", src: images.thumbnail || "https://www.sciphijournal.org/wp-content/themes/fox/images/placeholder.jpg", alt: images.title })
          )
        )
      );
    })
  );
};

exports.default = CreatorImages;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Homepage = function Homepage() {
  return _react2.default.createElement(
    'div',
    null,
    'Hello you!!from homepage component'
  );
};

exports.default = Homepage;

/***/ })
/******/ ]);
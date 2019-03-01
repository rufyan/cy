webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Items.js":
/*!*****************************!*\
  !*** ./components/Items.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Item */ "./components/Item.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var items = [];
var type = '';
var page = '';

var Items =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Items, _React$Component);

  function Items(props) {
    var _this;

    _classCallCheck(this, Items);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Items).call(this, props));
    _this.state = {
      loading: 'initial',
      filterByTitle: '',
      filterByTag: '',
      sortByDate: 'desc'
    };
    return _this;
  }

  _createClass(Items, [{
    key: "loadData",
    value: function loadData() {
      var data = isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default()('https://spreadsheets.google.com/feeds/list/1USp6UQtQqJYWlwPj0tZaIDnbsL51NSHCes09cFDDum0/od6/public/values?alt=json').then(function (response) {
        return response.json();
      });
      return data;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.setState({
        loading: 'true'
      });
      this.loadData().then(function (res) {
        //Once data has come in, process it and set global var
        items = res.feed.entry.filter(function (item) {
          item.tags = item.gsx$tags.$t.split(',').map(function (t) {
            return t.trim();
          });
          return item.gsx$islive.$t === "1";
        });

        var itemTypes = _toConsumableArray(new Set(items.map(function (item) {
          return item.gsx$itemtype.$t;
        })));

        var titles = _toConsumableArray(new Set(items.map(function (item) {
          return item.gsx$title.$t;
        }))).filter(function (x) {
          return x != '';
        });

        var allTags = [];
        items.map(function (item) {
          return item.gsx$tags.$t.split(',');
        }).filter(function (x) {
          return x != '';
        }).forEach(function (t) {
          t.forEach(function (r) {
            allTags.push(r.trim());
          });
        });

        var tags = _toConsumableArray(new Set(allTags));

        _this2.setState({
          items: items,
          itemTypes: itemTypes,
          titles: titles,
          loading: 'false',
          tags: tags
        });
      });
    }
  }, {
    key: "handleTitleFilter",
    value: function handleTitleFilter(value) {
      if (value !== 'all') {
        this.setState({
          filterByTitle: value
        });
      } else {
        this.setState({
          filterByTitle: ''
        });
      }
    }
  }, {
    key: "handleTagFilter",
    value: function handleTagFilter(value) {
      if (value !== 'all') {
        this.setState({
          filterByTag: value
        });
      } else {
        this.setState({
          filterByTag: ''
        });
      }
    }
  }, {
    key: "getFilteredItems",
    value: function getFilteredItems() {
      var _this3 = this;

      if (this.props.router) {
        type = this.props.router.query.title;
      } else {
        type = '';
      }

      var filteredItems = items;
      var filterbyType = this.props.router ? this.props.router.query.title : null;
      console.log('propp', this.props); //filter by type

      if (type) {
        filteredItems = filteredItems.filter(function (item) {
          return item.gsx$itemtype.$t === filterbyType;
        });
      } else {} //filter by title


      if (this.state.filterByTitle && type !== 'Book') {
        console.log(this.state.filterByTitle);
        filteredItems = filteredItems.filter(function (item) {
          return item.gsx$title.$t === _this3.state.filterByTitle;
        });
      }

      if (this.state.filterByTag && type !== 'Book') {
        filteredItems = filteredItems.filter(function (item) {
          return item.tags.some(function (t) {
            return t === _this3.state.filterByTag;
          });
        });
      }

      filteredItems = filteredItems.sort(function (a, b) {
        return new Date(b.gsx$datepublished.$t) - new Date(a.gsx$datepublished.$t);
      });

      if (this.props.data === 'home') {
        page = 'home';
        filteredItems = filteredItems.slice(0, 4);
      }

      console.log(filteredItems);
      return filteredItems;
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      if (this.state.loading === 'initial') {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Intializing...");
      }

      if (this.state.loading === 'true') {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Loading...");
      } //Only render data once loading is false


      var filteredItems = this.getFilteredItems(); //Put title filters in a local var, unless the type is "Book"

      var titles = [];

      if (this.props.router && this.props.router.query.title === 'Book') {
        titles = null;
      } else {
        titles = this.state.titles;
      }

      var tags = [];

      if (this.props.router && this.props.router.query.title === 'Book') {
        tags = null;
      } else {
        tags = this.state.tags;
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, page !== 'home' && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "filter-holder"
      }, titles && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Filter by title:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "span-col-4"
      }, titles && titles.map(function (item, i) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
          onClick: function onClick() {
            _this4.handleTitleFilter(item);
          },
          key: i,
          className: item === _this4.state.filterByTitle ? 'active' : ''
        }, item);
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: function onClick() {
          _this4.handleTitleFilter("all");
        },
        className: "clear-filters ".concat("all" === this.state.filterByTitle ? 'active' : '')
      }, "Show all")), tags && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Filter by tags:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "span-col-4"
      }, tags && tags.map(function (item, i) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
          onClick: function onClick() {
            _this4.handleTagFilter(item);
          },
          key: i,
          className: item === _this4.state.filterByTitle ? 'active' : ''
        }, item);
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: function onClick() {
          _this4.handleTagFilter("all");
        },
        className: "clear-filters ".concat("all" === this.state.filterByTitle ? 'active' : '')
      }, "Show all"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
        className: "grid items"
      }, filteredItems.map(function (item, i) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Item__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({}, item, {
          key: i
        }));
      })));
    }
  }]);

  return Items;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Items);

/***/ })

})
//# sourceMappingURL=index.js.66c44c081a9ddd9de8e6.hot-update.js.map
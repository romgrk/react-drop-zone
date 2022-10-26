"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _openFile = _interopRequireDefault(require("./open-file"));

var _readFileAsText = _interopRequireDefault(require("./read-file-as-text"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var dropZones = [];
var events = {
  drag: 'onDrag',
  dragstart: 'onDragStart',
  dragend: 'onDragEnd',
  dragover: 'onDragOver',
  dragenter: 'onDragEnter',
  dragleave: 'onDragLeave',
  drop: 'onDrop'
}; // Don't run in SSR mode

if (globalThis.document !== undefined) {
  Object.keys(events).forEach(function (event) {
    document.addEventListener(event, function (ev) {
      dropZones.forEach(function (zone) {
        return zone[events[event]](ev, true);
      });
    });
  });
}

var DropZone = /*#__PURE__*/function (_Component) {
  _inherits(DropZone, _Component);

  var _super = _createSuper(DropZone);

  function DropZone(props) {
    var _this;

    _classCallCheck(this, DropZone);

    _this = _super.call(this, props);
    _this.onClick = _this.onClick.bind(_assertThisInitialized(_this));
    _this.onDrag = _this.onDrag.bind(_assertThisInitialized(_this));
    _this.onDragStart = _this.onDragStart.bind(_assertThisInitialized(_this));
    _this.onDragEnd = _this.onDragEnd.bind(_assertThisInitialized(_this));
    _this.onDragOver = _this.onDragOver.bind(_assertThisInitialized(_this));
    _this.onDragEnter = _this.onDragEnter.bind(_assertThisInitialized(_this));
    _this.onDragLeave = _this.onDragLeave.bind(_assertThisInitialized(_this));
    _this.onDrop = _this.onDrop.bind(_assertThisInitialized(_this));
    _this.state = {
      overDocument: false,
      over: false
    };
    return _this;
  }

  _createClass(DropZone, [{
    key: "setDragOver",
    value: function setDragOver(value, document) {
      var _this2 = this;

      if (value === false && document) {
        this.timeout = setTimeout(function () {
          return _this2.setState({
            overDocument: false
          });
        }, 75);
      } else if (value === true && document) {
        this.timeout = clearTimeout(this.timeout);
        this.setState({
          overDocument: true
        });
      } else {
        this.setState({
          over: value
        });
      }
    }
  }, {
    key: "triggerOnDrop",
    value: function triggerOnDrop(file) {
      var _this3 = this;

      if (this.props.dontRead || this.props.multiple) {
        this.props.onDrop(file, undefined);
        return;
      }

      (0, _readFileAsText["default"])(file)["catch"](function (err) {
        return Promise.resolve(undefined);
      }).then(function (text) {
        return _this3.props.onDrop(file, text);
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      dropZones.push(this);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      dropZones.push(this);
    }
  }, {
    key: "onClick",
    value: function onClick(event) {
      var _this4 = this;

      event.stopPropagation();
      (0, _openFile["default"])(this.props).then(function (file) {
        return _this4.triggerOnDrop(file);
      });
    }
  }, {
    key: "onDrag",
    value: function onDrag(event, document) {
      if (document) return;
      event.preventDefault();
    }
  }, {
    key: "onDragStart",
    value: function onDragStart(event, document) {
      if (document) return;
      event.preventDefault();
    }
  }, {
    key: "onDragOver",
    value: function onDragOver(event, document) {
      event.preventDefault();
      this.setDragOver(true, document);
    }
  }, {
    key: "onDragEnter",
    value: function onDragEnter(event, document) {
      event.preventDefault();
      this.setDragOver(true, document);
    }
  }, {
    key: "onDragEnd",
    value: function onDragEnd(event, document) {
      event.preventDefault();
      this.setDragOver(false, document);
    }
  }, {
    key: "onDragLeave",
    value: function onDragLeave(event, document) {
      event.preventDefault();
      this.setDragOver(false, document);
    }
  }, {
    key: "onDrop",
    value: function onDrop(event, document) {
      event.preventDefault();
      this.setDragOver(false, document);
      if (document) return;
      var file = event.dataTransfer.items ? event.dataTransfer.items[0].getAsFile() : event.dataTransfer.files ? event.dataTransfer.files[0] : undefined;
      if (file) this.triggerOnDrop(file);
    }
  }, {
    key: "render",
    value: function render() {
      var handleClick = this.props.handleClick === true;
      var render = this.props.children;
      var children = render({
        over: this.state.over,
        overDocument: this.state.overDocument
      });
      var props = {
        onDrag: this.onDrag,
        onDragStart: this.onDragStart,
        onDragEnd: this.onDragEnd,
        onDragOver: this.onDragOver,
        onDragEnter: this.onDragEnter,
        onDragLeave: this.onDragLeave,
        onDrop: this.onDrop
      };
      if (handleClick) props.onClick = this.onClick;
      return /*#__PURE__*/_react["default"].cloneElement(children, props);
    }
  }]);

  return DropZone;
}(_react.Component);

DropZone.propTypes = {
  onDrop: _propTypes["default"].func.isRequired,
  handleClick: _propTypes["default"].bool,
  dontRead: _propTypes["default"].bool
};
DropZone.defaultProps = {
  handleClick: true,
  dontRead: false,
  onDrop: function onDrop(file, text) {}
};
var _default = DropZone;
exports["default"] = _default;
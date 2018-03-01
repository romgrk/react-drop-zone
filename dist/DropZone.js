'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _openFile = require('./open-file');

var _openFile2 = _interopRequireDefault(_openFile);

var _readFileAsText = require('./read-file-as-text');

var _readFileAsText2 = _interopRequireDefault(_readFileAsText);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var dropZones = [];
var events = {
  drag: 'onDrag',
  dragstart: 'onDragStart',
  dragend: 'onDragEnd',
  dragover: 'onDragOver',
  dragenter: 'onDragEnter',
  dragleave: 'onDragLeave',
  drop: 'onDrop'
};
Object.keys(events).forEach(function (event) {
  document.addEventListener(event, function (ev) {
    dropZones.forEach(function (zone) {
      return zone[events[event]](ev, true);
    });
  });
});

var DropZone = function (_Component) {
  _inherits(DropZone, _Component);

  function DropZone(props) {
    _classCallCheck(this, DropZone);

    var _this = _possibleConstructorReturn(this, (DropZone.__proto__ || Object.getPrototypeOf(DropZone)).call(this, props));

    _this.onClick = _this.onClick.bind(_this);
    _this.onDrag = _this.onDrag.bind(_this);
    _this.onDragStart = _this.onDragStart.bind(_this);
    _this.onDragEnd = _this.onDragEnd.bind(_this);
    _this.onDragOver = _this.onDragOver.bind(_this);
    _this.onDragEnter = _this.onDragEnter.bind(_this);
    _this.onDragLeave = _this.onDragLeave.bind(_this);
    _this.onDrop = _this.onDrop.bind(_this);

    _this.state = {
      overDocument: false,
      over: false
    };
    return _this;
  }

  _createClass(DropZone, [{
    key: 'setDragOver',
    value: function setDragOver(value, document) {
      var _this2 = this;

      if (value === false && document) {
        this.timeout = setTimeout(function () {
          return _this2.setState({ overDocument: false });
        }, 75);
      } else if (value === true && document) {
        this.timeout = clearTimeout(this.timeout);
        this.setState({ overDocument: true });
      } else {
        this.setState({ over: value });
      }
    }
  }, {
    key: 'triggerOnDrop',
    value: function triggerOnDrop(file) {
      var _this3 = this;

      if (this.props.dontRead === true) {
        this.props.onDrop(file, undefined);
        return;
      }

      (0, _readFileAsText2.default)(file).catch(function (err) {
        return Promise.resolve(undefined);
      }).then(function (text) {
        return _this3.props.onDrop(file, text);
      });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      dropZones.push(this);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      dropZones.push(this);
    }
  }, {
    key: 'onClick',
    value: function onClick(event) {
      var _this4 = this;

      (0, _openFile2.default)().then(function (file) {
        return _this4.triggerOnDrop(file);
      });
    }
  }, {
    key: 'onDrag',
    value: function onDrag(event, document) {
      if (document) return;
      event.preventDefault();
    }
  }, {
    key: 'onDragStart',
    value: function onDragStart(event, document) {
      if (document) return;
      event.preventDefault();
    }
  }, {
    key: 'onDragOver',
    value: function onDragOver(event, document) {
      event.preventDefault();
      this.setDragOver(true, document);
    }
  }, {
    key: 'onDragEnter',
    value: function onDragEnter(event, document) {
      event.preventDefault();
      this.setDragOver(true, document);
    }
  }, {
    key: 'onDragEnd',
    value: function onDragEnd(event, document) {
      event.preventDefault();
      this.setDragOver(false, document);
    }
  }, {
    key: 'onDragLeave',
    value: function onDragLeave(event, document) {
      event.preventDefault();
      this.setDragOver(false, document);
    }
  }, {
    key: 'onDrop',
    value: function onDrop(event, document) {
      event.preventDefault();
      this.setDragOver(false, document);
      if (document) return;

      var file = event.dataTransfer.items ? event.dataTransfer.items[0].getAsFile() : event.dataTransfer.files ? event.dataTransfer.files[0] : undefined;

      if (file) this.triggerOnDrop(file);
    }
  }, {
    key: 'render',
    value: function render() {
      var handleClick = this.props.handleClick === true;
      var render = this.props.children;

      var children = render({ over: this.state.over, overDocument: this.state.overDocument });
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

      return _react2.default.cloneElement(children, props);
    }
  }]);

  return DropZone;
}(_react.Component);

DropZone.propTypes = {
  onDrop: _propTypes2.default.func.isRequired,
  handleClick: _propTypes2.default.bool,
  dontRead: _propTypes2.default.bool
};

DropZone.defaultProps = {
  handleClick: true,
  dontRead: false
};

exports.default = DropZone;
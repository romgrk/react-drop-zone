"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = StyledDropZone;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _DropZone = _interopRequireDefault(require("./DropZone"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function StyledDropZone(_ref) {
  var children = _ref.children,
      className = _ref.className,
      accept = _ref.accept,
      multiple = _ref.multiple,
      handleClick = _ref.handleClick,
      dontRead = _ref.dontRead,
      onDrop = _ref.onDrop,
      rest = _objectWithoutProperties(_ref, ["children", "className", "accept", "multiple", "handleClick", "dontRead", "onDrop"]);

  var elementRef = (0, _react.useRef)(null);

  var onKeyDown = function onKeyDown(event) {
    if (event.keyCode === 13 // Enter
    || event.keyCode === 32 // Space
    ) elementRef.current && elementRef.current.click();
  };

  return /*#__PURE__*/_react["default"].createElement(_DropZone["default"], {
    handleClick: handleClick,
    dontRead: dontRead,
    accept: accept,
    multiple: multiple,
    onDrop: onDrop
  }, function (_ref2) {
    var over = _ref2.over,
        overDocument = _ref2.overDocument;
    var elementClassName = 'DropZone';
    if (over) elementClassName += ' DropZone--over';
    if (overDocument) elementClassName += ' DropZone--over-document';
    if (className) elementClassName += ' ' + className;
    return /*#__PURE__*/_react["default"].createElement("div", _extends({
      className: elementClassName,
      role: "button",
      tabIndex: "0",
      onKeyDown: onKeyDown,
      ref: elementRef
    }, rest), children || 'Click or drop your file here');
  });
}

StyledDropZone.propTypes = {
  onDrop: _propTypes["default"].func.isRequired,
  handleClick: _propTypes["default"].bool,
  dontRead: _propTypes["default"].bool,
  className: _propTypes["default"].string,
  accept: _propTypes["default"].string,
  multiple: _propTypes["default"].bool
};
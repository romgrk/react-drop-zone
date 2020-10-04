'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = StyledDropZone;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _DropZone = require('./DropZone');

var _DropZone2 = _interopRequireDefault(_DropZone);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } /*
                                                                                                                                                                                                                              * StyledDropZone.js
                                                                                                                                                                                                                              */

function StyledDropZone(_ref) {
  var children = _ref.children,
      className = _ref.className,
      accept = _ref.accept,
      multiple = _ref.multiple,
      handleClick = _ref.handleClick,
      dontRead = _ref.dontRead,
      onDrop = _ref.onDrop,
      rest = _objectWithoutProperties(_ref, ['children', 'className', 'accept', 'multiple', 'handleClick', 'dontRead', 'onDrop']);

  var elementRef = (0, _react.useRef)(null);

  var onKeyDown = function onKeyDown(event) {
    if (event.keyCode === 13 // Enter
    || event.keyCode === 32 // Space
    ) elementRef.current && elementRef.current.click();
  };

  return _react2.default.createElement(
    _DropZone2.default,
    { handleClick: handleClick, dontRead: dontRead, accept: accept, multiple: multiple, onDrop: onDrop },
    function (_ref2) {
      var over = _ref2.over,
          overDocument = _ref2.overDocument;


      var elementClassName = 'DropZone';
      if (over) elementClassName += ' DropZone--over';
      if (overDocument) elementClassName += ' DropZone--over-document';
      if (className) elementClassName += ' ' + className;

      return _react2.default.createElement(
        'div',
        _extends({
          className: elementClassName,
          role: 'button',
          tabIndex: '0',
          onKeyDown: onKeyDown,
          ref: elementRef
        }, rest),
        children || 'Click or drop your file here'
      );
    }
  );
}

StyledDropZone.propTypes = {
  onDrop: _propTypes2.default.func.isRequired,
  handleClick: _propTypes2.default.bool,
  dontRead: _propTypes2.default.bool,
  className: _propTypes2.default.string,
  accept: _propTypes2.default.string,
  multiple: _propTypes2.default.bool
};
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
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
  var label = _ref.label,
      props = _objectWithoutProperties(_ref, ['label']);

  return _react2.default.createElement(
    _DropZone2.default,
    props,
    function (_ref2) {
      var over = _ref2.over,
          overDocument = _ref2.overDocument;


      var className = 'DropZone';
      if (over) className += ' DropZone--over';
      if (overDocument) className += ' DropZone--over-document';

      return _react2.default.createElement(
        'div',
        { className: className, role: 'button' },
        label || 'Click or drop your file here'
      );
    }
  );
}

StyledDropZone.propTypes = {
  onDrop: _propTypes2.default.func.isRequired,
  handleClick: _propTypes2.default.bool,
  dontRead: _propTypes2.default.bool,
  label: _propTypes2.default.string
};
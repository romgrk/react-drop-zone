"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "StyledDropZone", {
  enumerable: true,
  get: function get() {
    return _StyledDropZone["default"];
  }
});
Object.defineProperty(exports, "readFileAsText", {
  enumerable: true,
  get: function get() {
    return _readFileAsText["default"];
  }
});
exports["default"] = void 0;

var _DropZone = _interopRequireDefault(require("./DropZone"));

var _StyledDropZone = _interopRequireDefault(require("./StyledDropZone"));

var _readFileAsText = _interopRequireDefault(require("./read-file-as-text"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/*
 * index.js
 */
var _default = _DropZone["default"];
exports["default"] = _default;
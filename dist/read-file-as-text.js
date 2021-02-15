"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = readFileAsText;

/*
 * read-file-as-text.js
 */
var INPUT_ENCODING = 'ISO-8859-1';
/**
 * Reads a HTML5 file as text
 * @param {File} file
 */

function readFileAsText(file) {
  var encoding = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : INPUT_ENCODING;
  return new Promise(function (resolve, reject) {
    var reader = new FileReader();

    reader.onload = function () {
      return resolve(reader.result);
    };

    reader.onerror = reject;
    reader.readAsText(file, encoding);
  });
}
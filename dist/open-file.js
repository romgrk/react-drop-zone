"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = openFile;

/*
 * open-file.js
 */
function openFile() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return new Promise(function (resolve, reject) {
    var input = document.createElement('input');
    if (options.multiple) input.setAttribute('multiple', '');
    if (options.accept) input.setAttribute('accept', options.accept);
    input.setAttribute('type', 'file');
    input.style.display = 'none';
    input.addEventListener('change', function (ev) {
      if (input.files.length) {
        if (options.multiple) resolve(input.files);else resolve(input.files[0]);
      } else {
        reject(ev);
      }

      input.remove();
    });
    document.body.appendChild(input);
    var event = document.createEvent('MouseEvent');
    event.initMouseEvent('click', false, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
    input.dispatchEvent(event);
  });
}
"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var React = require("react");

var _require = require("@react-pdf/renderer"),
    renderToFile = _require.renderToFile;

var _require2 = require("./MyDocument"),
    MyDocument = _require2.MyDocument;

function createPdf() {
  return _createPdf.apply(this, arguments);
}

function _createPdf() {
  _createPdf = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return renderToFile( /*#__PURE__*/React.createElement(MyDocument, null), "".concat(__dirname, "/my-doc.pdf"));

          case 3:
            return _context.abrupt("return", "pdf created in lib directory");

          case 6:
            _context.prev = 6;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);
            return _context.abrupt("return", _context.t0);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 6]]);
  }));
  return _createPdf.apply(this, arguments);
}

module.exports = {
  createPdf: createPdf
};
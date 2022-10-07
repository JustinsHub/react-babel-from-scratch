"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Index = function Index() {
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("form", null, /*#__PURE__*/_react["default"].createElement("label", null), /*#__PURE__*/_react["default"].createElement("input", {
    name: "todo",
    value: "",
    placeholder: "Add to do"
  })));
};

_reactDom["default"].createRoot(document.getElementById('root')).render( /*#__PURE__*/_react["default"].createElement(Index, null));
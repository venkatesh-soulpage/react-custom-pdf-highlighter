"use strict";

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Toolbar = function (_Component) {

    Toolbar.prototype.render = function render() {

        return _react2.default.createElement(
            "div",
            {
                className: "container rounded text-white",
                style:{backgroundColor: "#343a40bf"}
            },
        );
    };

    return Toolbar;
}(_react.Component);

exports.default = Toolbar;
module.exports = exports["default"];
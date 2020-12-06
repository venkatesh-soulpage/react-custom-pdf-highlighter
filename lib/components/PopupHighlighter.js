import { jsx as _jsx } from "react/jsx-runtime";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { Component } from "react";
import NewWindow from "react-new-window";
import CustomHighlighter from "./CustomHighlighter";

class PopupHighlighter extends Component {
  constructor(props) {}

  render() {
    return /*#__PURE__*/_jsx(NewWindow, { ...this.props,
      children: /*#__PURE__*/_jsx(CustomHighlighter, { ...this.props
      })
    });
  }

}

_defineProperty(PopupHighlighter, "defaultProps", {
  // features: {{ "width": 1000, "height": 700, "top": 100, "left": 100 }},
  title: "PDF VIEWER",
  mark: true
});

export default PopupHighlighter;
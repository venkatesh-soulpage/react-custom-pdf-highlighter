import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
import React, { Component } from "react";
import "../style/Highlight.css";

class Highlight extends Component {
  render() {
    const {
      position,
      onClick,
      onMouseOver,
      onMouseOut,
      comment,
      isScrolledTo
    } = this.props;
    const {
      rects,
      boundingRect
    } = position;
    return /*#__PURE__*/_jsxs("div", {
      className: `Highlight ${isScrolledTo ? "Highlight--scrolledTo" : ""}`,
      children: [comment ? /*#__PURE__*/_jsx("div", {
        className: "Highlight__emoji",
        style: {
          left: 20,
          top: boundingRect.top
        },
        children: comment.emoji
      }) : null, /*#__PURE__*/_jsx("div", {
        className: "Highlight__parts",
        children: rects.map((rect, index) => /*#__PURE__*/_jsx("div", {
          onMouseOver: onMouseOver,
          onMouseOut: onMouseOut,
          onClick: onClick,
          style: rect,
          className: `Highlight__part`
        }, index))
      })]
    });
  }

}

export default Highlight;
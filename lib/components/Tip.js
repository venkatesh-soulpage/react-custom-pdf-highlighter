import { jsxs as _jsxs } from "react/jsx-runtime";
import { jsx as _jsx } from "react/jsx-runtime";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { Component } from "react";
import "../style/Tip.css";

class Tip extends Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      compact: true,
      text: "",
      emoji: ""
    });

    _defineProperty(this, "state", void 0);

    _defineProperty(this, "props", void 0);
  }

  // for TipContainer
  componentDidUpdate(nextProps, nextState) {
    const {
      onUpdate
    } = this.props;

    if (onUpdate && this.state.compact !== nextState.compact) {
      onUpdate();
    }
  }

  render() {
    const {
      onConfirm,
      onOpen
    } = this.props;
    const {
      compact,
      text,
      emoji
    } = this.state;
    return /*#__PURE__*/_jsx("div", {
      className: "Tip",
      children: compact ? /*#__PURE__*/_jsx("div", {
        className: "Tip__compact",
        onClick: () => {
          onOpen();
          this.setState({
            compact: false
          });
        },
        children: "Add highlight"
      }) : /*#__PURE__*/_jsxs("form", {
        className: "Tip__card",
        onSubmit: event => {
          event.preventDefault();
          onConfirm({
            text,
            emoji
          });
        },
        children: [/*#__PURE__*/_jsxs("div", {
          children: [/*#__PURE__*/_jsx("textarea", {
            width: "100%",
            placeholder: "Your comment",
            autoFocus: true,
            value: text,
            onChange: event => this.setState({
              text: event.target.value
            }),
            ref: node => {
              if (node) {
                node.focus();
              }
            }
          }), /*#__PURE__*/_jsx("div", {
            children: ["💩", "😱", "😍", "🔥", "😳", "⚠️"].map(_emoji => /*#__PURE__*/_jsxs("label", {
              children: [/*#__PURE__*/_jsx("input", {
                checked: emoji === _emoji,
                type: "radio",
                name: "emoji",
                value: _emoji,
                onChange: event => this.setState({
                  emoji: event.target.value
                })
              }), _emoji]
            }, _emoji))
          })]
        }), /*#__PURE__*/_jsx("div", {
          children: /*#__PURE__*/_jsx("input", {
            type: "submit",
            value: "Save"
          })
        })]
      })
    });
  }

}

export default Tip;
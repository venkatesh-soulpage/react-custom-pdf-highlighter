import { jsxs as _jsxs } from "react/jsx-runtime";
import { jsx as _jsx } from "react/jsx-runtime";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { Component } from "react";
import "../style/App.css";

class PdfViewerController extends Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "setScaleValue", val => {
      console.log("scale", val);
      this.setState({
        originalScale: val,
        scaleValue: val
      });
    });

    _defineProperty(this, "zoomMinus", () => {
      this.setState({
        scaleValue: this.state.scaleValue - 0.2
      }, () => window.PdfViewer.viewer.currentScale = this.state.scaleValue);
    });

    _defineProperty(this, "zoomPlus", () => {
      this.setState({
        scaleValue: this.state.scaleValue + 0.2
      }, () => window.PdfViewer.viewer.currentScale = this.state.scaleValue);
    });

    _defineProperty(this, "zoomReset", function () {
      this.setState({
        scaleValue: 0.71
      }, () => window.PdfViewer.viewer.currentScale = this.state.originalScale);
    });

    _defineProperty(this, "rotateLeft", function () {
      window.PdfViewer.viewer.pagesRotation = 90;
    });

    _defineProperty(this, "rotateReset", function () {
      window.PdfViewer.viewer.pagesRotation = 0;
    });

    _defineProperty(this, "rotateRight", function () {
      window.PdfViewer.viewer.pagesRotation = -90;
    });

    _defineProperty(this, "previousPage", function () {
      let pageNum = window.PdfViewer.viewer.currentPageNumber;

      if (pageNum <= 1) {
        return;
      }

      window.PdfViewer.viewer.currentPageNumber--;
      this.setState({
        current: window.PdfViewer.viewer.currentPageNumber,
        total: window.PdfViewer.viewer.pagesCount
      });
    });

    _defineProperty(this, "nextPage", function () {
      let pageNum = window.PdfViewer.viewer.currentPageNumber;
      let pageCount = window.PdfViewer.viewer.pagesCount;

      if (pageNum >= pageCount) {
        return;
      }

      window.PdfViewer.viewer.currentPageNumber++;
      this.setState({
        current: window.PdfViewer.viewer.currentPageNumber,
        total: window.PdfViewer.viewer.pagesCount
      });
    });

    this.state = {
      originalScale: 0.71,
      scaleValue: 0.71,
      current: 0,
      total: 0
    };
  }

  componentDidMount() {
    console.log(this.props);

    if (window.PdfViewer) {
      this.setScaleValue(this.props.currentScale);
    }
  }

  componentDidUpdate(prevProps) {// if (prevProps.currentScale !== this.props.currentScale) {
    //     this.setState({
    //         scaleValue: this.props.currentScale,
    //     }, () => {
    //         if (window.PdfViewer) {
    //             window.PdfViewer.viewer.currentScale = this.state.scaleValue
    //         }
    //     })
    // }
  }

  render() {
    const {
      currentPageNum,
      totalPages
    } = this.props;

    try {
      var currentPageNumber = window.PdfViewer.viewer.currentPageNumber ? window.PdfViewer.viewer.currentPageNumber : currentPageNum;
      var pagesCount = window.PdfViewer.viewer.pagesCount ? window.PdfViewer.viewer.pagesCount : 1;
    } catch (error) {}

    return /*#__PURE__*/_jsx("div", {
      className: "outer-container",
      children: /*#__PURE__*/_jsx("div", {
        className: "container text-white",
        style: {
          backgroundColor: "#343a40bf",
          borderRadius: "2.25rem"
        },
        children: /*#__PURE__*/_jsxs("div", {
          className: "row py-0 px-2",
          children: [/*#__PURE__*/_jsx("div", {
            className: "col-sm-3 p-0 text-center",
            children: /*#__PURE__*/_jsxs("div", {
              className: "btn-group",
              role: "group",
              children: [/*#__PURE__*/_jsx("button", {
                type: "button",
                className: "btn btn-sm btn-link text-white pr-2",
                onClick: () => this.zoomMinus(),
                children: /*#__PURE__*/_jsx("i", {
                  className: "material-icons",
                  children: "zoom_out"
                })
              }), /*#__PURE__*/_jsx("button", {
                type: "button",
                className: "btn btn-sm btn-link text-white px-2",
                onClick: () => this.zoomReset(),
                children: /*#__PURE__*/_jsx("i", {
                  className: "material-icons",
                  children: "refresh"
                })
              }), /*#__PURE__*/_jsx("button", {
                type: "button",
                className: "btn btn-sm btn-link text-white pl-2",
                onClick: () => this.zoomPlus(),
                children: /*#__PURE__*/_jsx("i", {
                  className: "material-icons",
                  children: "zoom_in"
                })
              })]
            })
          }), /*#__PURE__*/_jsx("div", {
            className: "col-sm-6 p-0 text-center align-items-center",
            children: /*#__PURE__*/_jsxs("div", {
              className: "btn-group",
              role: "group",
              children: [/*#__PURE__*/_jsx("button", {
                className: "btn btn-sm btn-link text-white pr-2",
                onClick: () => this.previousPage(),
                children: /*#__PURE__*/_jsx("i", {
                  className: "material-icons",
                  children: "keyboard_arrow_left"
                })
              }), /*#__PURE__*/_jsxs("div", {
                class: "small d-flex align-items-center",
                children: ["Page ", currentPageNumber, " / ", pagesCount]
              }), /*#__PURE__*/_jsx("button", {
                className: "btn btn-sm btn-link text-white pl-2",
                onClick: () => this.nextPage(),
                children: /*#__PURE__*/_jsx("i", {
                  className: "material-icons",
                  children: "keyboard_arrow_right"
                })
              })]
            })
          }), /*#__PURE__*/_jsx("div", {
            className: "col-sm-3 p-0 text-center",
            children: /*#__PURE__*/_jsxs("div", {
              className: "btn-group",
              role: "group",
              children: [/*#__PURE__*/_jsx("button", {
                type: "button",
                className: "btn btn-sm btn-link text-white pr-2",
                onClick: () => this.rotateLeft(),
                children: /*#__PURE__*/_jsx("i", {
                  className: "material-icons",
                  children: "rotate_left"
                })
              }), /*#__PURE__*/_jsx("button", {
                type: "button",
                className: "btn btn-sm btn-link text-white px-2",
                onClick: () => this.rotateReset(),
                children: /*#__PURE__*/_jsx("i", {
                  className: "material-icons",
                  children: "refresh"
                })
              }), /*#__PURE__*/_jsx("button", {
                type: "button",
                className: "btn btn-sm btn-link text-white pl-2",
                onClick: () => this.rotateRight(),
                children: /*#__PURE__*/_jsx("i", {
                  className: "material-icons",
                  children: "rotate_right"
                })
              })]
            })
          })]
        })
      })
    });
  }

}

export default PdfViewerController;
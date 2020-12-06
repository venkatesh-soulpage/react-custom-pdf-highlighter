function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { Component } from "react";
import pdfjs from "pdfjs-dist/webpack";

class PdfLoader extends Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      pdfDocument: null
    });
  }

  componentDidMount() {
    const {
      url
    } = this.props;
    pdfjs.getDocument(url).then(pdfDocument => {
      this.setState({
        pdfDocument: pdfDocument
      });
    });
  }

  render() {
    const {
      children,
      beforeLoad
    } = this.props;
    const {
      pdfDocument
    } = this.state;

    if (pdfDocument) {
      return children(pdfDocument);
    }

    return beforeLoad;
  }

}

export default PdfLoader;
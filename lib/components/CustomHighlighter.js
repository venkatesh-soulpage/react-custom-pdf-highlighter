import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { Component } from "react";
import URLSearchParams from "url-search-params";
import PdfHighlighter from "./PdfHighlighter";
import Highlight from "./Highlight";
import Popup from "./Popup";
import PdfLoader from "./PdfLoader";
import pdfjsWorker from "pdfjs-dist/build/pdf.worker.entry";
import pdfjs from "pdfjs-dist";
import Spinner from "./Spinner";
pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;
var location = Location;

const getNextId = () => String(Math.random()).slice(2);

const resetHash = () => {
  location.hash = "";
};

const HighlightPopup = ({
  comment
}) => comment.text ? /*#__PURE__*/_jsxs("div", {
  className: "Highlight__popup",
  children: [comment.emoji, " ", comment.text]
}) : null;

class CustomHighlighter extends Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "resetHighlights", () => {
      this.setState({
        highlights: []
      });
    });

    _defineProperty(this, "scrollViewerTo", highlight => {
      console.log(highlight);
    });

    _defineProperty(this, "scrollToHighlightFromHash", obj => {
      if (Array.isArray(obj)) {
        obj.map(item => {
          this.scrollViewerTo(item);
        });
      } else if (obj) {
        try {
          this.scrollViewerTo(obj);
        } catch (e) {
          console.log(e); //'viewport' of undefined
        }
      }
    });

    this.state = {
      highlights: []
    };
  }

  componentDidMount() {}

  getHighlightById(id) {
    const {
      highlights
    } = this.state;
    return highlights.find(highlight => highlight.id === id);
  }

  addHighlight(highlight) {
    const {
      highlights
    } = this.state;
    console.log("Saving highlight", highlight);
    this.setState({
      highlights: [{ ...highlight,
        id: getNextId()
      }, ...highlights]
    });
  }

  updateHighlight(highlightId, position, content) {
    console.log("Updating highlight", highlightId, position, content);
    this.setState({
      highlights: this.state.highlights.map(h => {
        return h.id === highlightId ? { ...h,
          position: { ...h.position,
            ...position
          },
          content: { ...h.content,
            ...content
          }
        } : h;
      })
    });
  }

  render() {
    const {
      highlights
    } = this.state;
    const {
      searchObj,
      className,
      pdfUrl
    } = this.props;
    const DEFAULT_URL = pdfUrl;
    const searchParams = new URLSearchParams(location.search);
    const url = searchParams.get("url") || DEFAULT_URL;
    this.scrollToHighlightFromHash(searchObj);
    return /*#__PURE__*/_jsx(PdfLoader, {
      url: url,
      beforeLoad: /*#__PURE__*/_jsx(Spinner, {}),
      children: pdfDocument => /*#__PURE__*/_jsx(PdfHighlighter, {
        pdfDocument: pdfDocument,
        enableAreaSelection: event => event.altKey,
        onScrollChange: resetHash,
        scrollRef: scrollTo => {
          this.scrollViewerTo = scrollTo;
          this.scrollToHighlightFromHash(searchObj);
        },
        highlightTransform: (searchObj, highlight, index, setTip, hideTip, viewportToScaled, screenshot, isScrolledTo) => {
          const isTextHighlight = !Boolean(searchObj.content);
          const component = this.props.mark ? /*#__PURE__*/_jsx(Highlight, {
            onClick: () => console.log("Clicked"),
            isScrolledTo: isScrolledTo,
            position: searchObj.position,
            comment: searchObj.comment
          }) : null;
          return /*#__PURE__*/_jsx(Popup, {
            popupContent: /*#__PURE__*/_jsx(HighlightPopup, { ...searchObj
            }),
            onMouseOver: popupContent => setTip(highlight, highlight => popupContent),
            onMouseOut: hideTip,
            children: component
          }, index);
        },
        highlights: searchObj
      })
    });
  }

}

_defineProperty(CustomHighlighter, "defaultProps", {
  // features: {{ "width": 1000, "height": 700, "top": 100, "left": 100 }},
  title: "PDF VIEWER",
  mark: true
});

export default CustomHighlighter;
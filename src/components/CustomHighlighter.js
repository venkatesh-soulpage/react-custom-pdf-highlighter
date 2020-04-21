import React, { Component } from 'react';
import URLSearchParams from "url-search-params";
import PdfHighlighter from "./PdfHighlighter";
import Tip from "./Tip";
import Highlight from "./Highlight";
import Popup from "./Popup";
import AreaHighlight from "./AreaHighlight";
import PdfLoader from "./PdfLoader";
import pdfjsWorker from 'pdfjs-dist/build/pdf.worker.entry';
import pdfjs from 'pdfjs-dist';
import Spinner from "./Spinner";
pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;

var location = Location;
const getNextId = () => String(Math.random()).slice(2);

const resetHash = () => {
  location.hash = "";
};

const HighlightPopup = ({ comment }) =>
  comment.text ? (
    <div className="Highlight__popup">
      {comment.emoji} {comment.text}
    </div>
  ) : null;



export default class CustomHighlighter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      DEFAULT_URL: '',
      highlights: []
    }
  }


  resetHighlights = () => {
    this.setState({
      highlights: []
    });
  };

  scrollViewerTo = (highlight) => {
    console.log(highlight);
  };

  scrollToHighlightFromHash = (obj) => {
    if (Array.isArray(obj)) {
      obj.map((item) => {
        this.scrollViewerTo(item);
      })
    } else
      if (obj) {
        try {
          this.scrollViewerTo(obj);
        } catch (e) {
          console.log(e) //'viewport' of undefined
        }

      }
  };

  componentDidMount() { 
    this.setState({DEFAULT_URL : this.props.url})
  }

  getHighlightById(id) {
    const { highlights } = this.state;
    return highlights.find(highlight => highlight.id === id);
  }

  addHighlight(highlight) {
    const { highlights } = this.state;

    console.log("Saving highlight", highlight);

    this.setState({
      highlights: [{ ...highlight, id: getNextId() }, ...highlights]
    });
  }

  updateHighlight(highlightId, position, content) {
    console.log("Updating highlight", highlightId, position, content);

    this.setState({
      highlights: this.state.highlights.map(h => {
        return h.id === highlightId
          ? {
            ...h,
            position: { ...h.position, ...position },
            content: { ...h.content, ...content }
          }
          : h;
      })
    });
  }

  render() {
    const { highlights, DEFAULT_URL } = this.state;
    const { searchObj, pageNumber, className, pdfName } = this.props;

    const searchParams = new URLSearchParams(location.search);
    const url = searchParams.get("url") || DEFAULT_URL;

    this.scrollToHighlightFromHash(searchObj)
    return (
      <PdfLoader url={url} beforeLoad={<Spinner />}>
        {pdfDocument => (
          <PdfHighlighter
            pdfDocument={pdfDocument}
            enableAreaSelection={event => event.altKey}
            onScrollChange={resetHash}
            scrollRef={scrollTo => {
              this.scrollViewerTo = scrollTo;
              this.scrollToHighlightFromHash(searchObj);
            }}
            highlightTransform={(
              searchObj,
              highlight,
              index,
              setTip,
              hideTip,
              viewportToScaled,
              screenshot,
              isScrolledTo
            ) => {
              const isTextHighlight = !Boolean(
                searchObj.content
              );

              const component = (
                !this.props.highlight ?
                  <Highlight
                    onClick={() => console.log("Clicked")}
                    isScrolledTo={isScrolledTo}
                    position={searchObj.position}
                    comment={searchObj.comment}
                  /> : null
              )
              return (
                <Popup
                  popupContent={<HighlightPopup {...searchObj} />}
                  onMouseOver={popupContent =>
                    setTip(highlight, highlight => popupContent)
                  }
                  onMouseOut={hideTip}
                  key={index}
                  children={component}
                />
              );
            }}
            highlights={searchObj}
          />
        )}
      </PdfLoader>
    );
  }
}

export default CustomHighlighter


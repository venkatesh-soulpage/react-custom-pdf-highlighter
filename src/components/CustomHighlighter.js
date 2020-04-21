import React, { Component } from 'react';
import URLSearchParams from "url-search-params";
import { PdfHighlighter, Tip, Highlight, Popup, AreaHighlight, PdfLoader } from 'custom-react-pdf-highlight';
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

class PdfHighlighters extends Component{
  state = {
    highlights: []
  };

  resetHighlights = () => {
    this.setState({
      highlights: []
    });
  };

  scrollViewerTo = (highlight) => { 
    console.log(highlight);
  };

  scrollToHighlightFromHash = (obj) => {
    if(Array.isArray(obj)){
      obj.map((item)=>{
        this.scrollViewerTo(item);
      })
    }else
    if (obj) {
          try{
            this.scrollViewerTo(obj);
          }catch(e){
            console.log(e) //'viewport' of undefined
          }
      
    }
  };

  componentDidMount() {}

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
    const { highlights } = this.state;
    const {searchObj, pageNumber, className, pdfUrl} = this.props;
    
    const DEFAULT_URL = pdfUrl;
    const searchParams = new URLSearchParams(location.search);
    const url = searchParams.get("url") || DEFAULT_URL;

    this.scrollToHighlightFromHash(searchObj)
    return (
          <PdfLoader url={url}  beforeLoad={<Spinner />}>
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

                  const component =  (
                    !this.props.sidenav?
                    <Highlight
                      onClick={()=>console.log("Clicked")}
                      isScrolledTo={isScrolledTo}
                      position={searchObj.position}
                      comment={searchObj.comment}
                    />:null
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

export default (PdfHighlighters);


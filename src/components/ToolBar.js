import React, { Component } from 'react';

class PdfViewerController extends Component {

    constructor(props) {
        super(props);
        this.state = {
            scaleValue: 0.69,
            current: 0,
            total: 0
        }
    }

    componentDidMount() {
    }

    componentDidUpdate(prevProps) {
        if (prevProps.currentScale !== this.props.currentScale) {
            this.setState({
                scaleValue: this.props.currentScale,
            }, () => {
                if (window.PdfViewer) {
                    window.PdfViewer.viewer.currentScaleValue = this.state.scaleValue
                }
            })
        }
    }

    zoomMinus =  () => {
        this.setState({
            scaleValue: this.state.scaleValue - 0.2
        }, () => window.PdfViewer.viewer.currentScaleValue = this.state.scaleValue)
    }

    zoomPlus = () => {
        this.setState({
            scaleValue: this.state.scaleValue + 0.2
        }, () => window.PdfViewer.viewer.currentScaleValue = this.state.scaleValue)
    }

    zoomReset = function () {
        this.setState({
            scaleValue: this.props.currentScale,
        }, () => window.PdfViewer.viewer.currentScaleValue = this.state.scaleValue)
    }

    rotateLeft = function () {
        window.PdfViewer.viewer.pagesRotation = 90
    }

    rotateReset = function () {
        window.PdfViewer.viewer.pagesRotation = 0
    }

    rotateRight = function () {
        window.PdfViewer.viewer.pagesRotation = -90
    }

    previousPage = function () {
        let pageNum = window.PdfViewer.viewer.currentPageNumber;
        if (pageNum <= 1) {
            return;
        }
        window.PdfViewer.viewer.currentPageNumber--;
        this.setState({ current: window.PdfViewer.viewer.currentPageNumber, total: window.PdfViewer.viewer.pagesCount })
    }

    nextPage = function () {
        let pageNum = window.PdfViewer.viewer.currentPageNumber;
        let pageCount = window.PdfViewer.viewer.pagesCount;
        if (pageNum >= pageCount) {
            return;
        }
        window.PdfViewer.viewer.currentPageNumber++;
        this.setState({ current: window.PdfViewer.viewer.currentPageNumber, total: window.PdfViewer.viewer.pagesCount })

    }

    render() {
        console.log(this.props)
        const { currentPageNum, totalPages } = this.props;

        try {
            var currentPageNumber = window.PdfViewer.viewer.currentPageNumber ? window.PdfViewer.viewer.currentPageNumber : currentPageNum
            var pagesCount = window.PdfViewer.viewer.pagesCount ? window.PdfViewer.viewer.pagesCount : 1
        } catch (error) { }

        console.log("page", currentPageNum, pagesCount)
        return (
            <div className="container text-white" style={{backgroundColor: "#343a40bf", borderRadius:'2.25rem'}}>
                <div className="row py-1 px-2">
                    <div className="col-sm-3 p-0 text-center">
                        <div className="btn-group" role="group">
                            <button type="button" className="btn btn-sm btn-link text-white pr-2" onClick={() => this.zoomMinus()}>
                                <i className="material-icons">zoom_out</i>
                            </button>
                            <button type="button" className="btn btn-sm btn-link text-white px-2" onClick={() => this.zoomReset()}>
                                <i className="material-icons">refresh</i>
                            </button>
                            <button type="button" className="btn btn-sm btn-link text-white pl-2" onClick={() => this.zoomPlus()}>
                                <i className="material-icons">zoom_in</i>
                            </button>
                        </div>
                    </div>
                    <div className="col-sm-6 p-0 text-center">
                        <div className="btn-group" role="group">
                            <button className="btn btn-sm btn-link text-white pr-2" onClick={() => this.previousPage()}>
                                <i className="material-icons">keyboard_arrow_left</i>
                            </button>
                            <div class="small py-2">Page  {currentPageNumber} / {pagesCount}</div>
                            <button className="btn btn-sm btn-link text-white pl-2" onClick={() => this.nextPage()}>
                                <i className="material-icons">keyboard_arrow_right</i>
                            </button>
                        </div>
                    </div>
                    <div className="col-sm-3 p-0 text-center">
                        <div className="btn-group" role="group">
                            <button type="button" className="btn btn-sm btn-link text-white pr-2" onClick={() => this.rotateLeft()}>
                                <i className="material-icons">rotate_left</i>
                            </button>
                            <button type="button" className="btn btn-sm btn-link text-white px-2" onClick={() => this.rotateReset()}>
                                <i className="material-icons">refresh</i>
                            </button>
                            <button type="button" className="btn btn-sm btn-link text-white pl-2" onClick={() => this.rotateRight()}>
                                <i className="material-icons">rotate_right</i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default PdfViewerController;
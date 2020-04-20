import React, { Component } from 'react';
class PdfViewerController extends Component {

    constructor(props) {
        super(props);
        this.state = {
            scaleValue: 1.25,
            current: 0,
            total: 0
        }
    }

    componentDidMount() {
        console.log(this.props.clientWidth)
        this.setState({
            scaleValue: !this.props.clientWidth ? 600 / 1150 : this.props.clientWidth / 1150,
        })
    }

    componentDidUpdate(prevProps) {
        // console.log(this.props.PdfCurrentPageNum)
        // if (prevProps.clientWidth !== this.props.clientWidth) {
        //     let clientWidth = prevProps.clientWidth !== 0 && prevProps.clientWidth ? prevProps.clientWidth / 1150 : this.props.clientWidth / 1150
        //     let width = this.state.scaleValue !== 0 ? this.state.scaleValue - clientWidth : 0
        //     width = this.props.clientWidth / 1150 + width
        //     this.setState({
        //         scaleValue: width,
        //         current: window.PdfViewer.viewer.currentPageNumber,
        //         total: window.PdfViewer.viewer.pagesCount
        //     }, () => {
        //         console.log(this.state.scaleValue)
        //         if (window.PdfViewer) {
        //             window.PdfViewer.viewer.currentScaleValue = this.state.scaleValue
        //         }
        //     })
        // }

    }

    zoomMinus = function () {
        this.setState({
            scaleValue: this.state.scaleValue - 0.2
        }, () => window.PdfViewer.viewer.currentScaleValue = this.state.scaleValue)
    }

    zoomPlus = function () {
        this.setState({
            scaleValue: this.state.scaleValue + 0.2
        }, () => window.PdfViewer.viewer.currentScaleValue = this.state.scaleValue)
    }

    zoomReset = function () {
        this.setState({
            scaleValue: 1.25
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

        const { currentPageNum, totalPages } = this.props;

        try {
            var currentPageNumber = window.PdfViewer.viewer.currentPageNumber ? window.PdfViewer.viewer.currentPageNumber : currentPageNum
            var pagesCount = window.PdfViewer.viewer.pagesCount ? window.PdfViewer.viewer.pagesCount : 1
        } catch (error) { }

        console.log("page", currentPageNum, pagesCount)
        return (
            <div className="container rounded text-white" style={{ backgroundColor: "#343a40bf" }}>
                <div className="row py-1 pr-2">
                    <div className="col-sm-3 p-0 text-center">
                        <div className="btn-group d-flex justify-content-center" role="group">
                            <button type="button" className="btn btn-sm btn-link text-white pr-2" onClick={() => zoomMinus()}>
                                <i className="material-icons">zoom_out</i>
                            </button>
                            <button type="button" className="btn btn-sm btn-link text-white px-2" onClick={() => zoomReset()}>
                                <i className="material-icons">refresh</i>
                            </button>
                            <button type="button" className="btn btn-sm btn-link text-white pl-2" onClick={() => zoomPlus()}>
                                <i className="material-icons">zoom_in</i>
                            </button>
                        </div>
                    </div>
                    <div className="col-sm-6 p-0 text-center">
                        <div className="btn-group" role="group">
                            <button className="btn btn-sm btn-link text-white pr-2" onClick={() => previousPage()}>
                                <i className="material-icons">keyboard_arrow_left</i>
                            </button>
                            <div class="small py-2">Page  {currentPageNum} / {pagesCount}</div>
                            <button className="btn btn-sm btn-link text-white pl-2" onClick={() => nextPage()}>
                                <i className="material-icons">keyboard_arrow_right</i>
                            </button>
                        </div>
                    </div>
                    <div className="col-sm-3 p-0 text-center">
                        <div className="btn-group" role="group">
                            <button type="button" className="btn btn-sm btn-link text-white pr-2" onClick={() => rotateLeft()}>
                                <i className="material-icons">rotate_left</i>
                            </button>
                            <button type="button" className="btn btn-sm btn-link text-white px-2" onClick={() => rotateReset()}>
                                <i className="material-icons">refresh</i>
                            </button>
                            <button type="button" className="btn btn-sm btn-link text-white pl-2" onClick={() => rotateRight()}>
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
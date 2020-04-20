import React from 'react'

class ToolBar extends React.Component {
    render(){
  return (
    <div className="container rounded text-white" style={{backgroundColor: "#343a40bf"}}>
    <div className="row">
      <div className="col-sm-4 text-center">
        <div className="btn-group" role="group">
          <button type="button" className="btn btn-sm btn-link text-white pr-2" onClick={()=>zoomMinus()}>
            <i className="material-icons">zoom_out</i>
          </button>
          <button type="button" className="btn btn-sm btn-link text-white px-2" onClick={()=>zoomReset()}>
            <i className="material-icons">refresh</i>
          </button>
          <button type="button" className="btn btn-sm btn-link text-white pl-2" onClick={()=>zoomPlus()}>
            <i className="material-icons">zoom_in</i>
          </button>
        </div>
      </div>
      <div className="col-sm-4 text-center">
        <div className="btn-group" role="group">
          <button className="btn btn-sm btn-link text-white pr-2" onClick={()=>previousPage()}>
            <i className="material-icons">keyboard_arrow_left</i>
          </button>
          <div class="small py-3">Page  {`@`} / {`@`}</div>
          <button className="btn btn-sm btn-link text-white pl-2" onClick={()=>nextPage()}>
            <i className="material-icons">keyboard_arrow_right</i>
          </button>
        </div>
      </div>
      <div className="col-sm-4 text-center">
        <div className="btn-group" role="group">
          <button type="button" className="btn btn-sm btn-link text-white pr-2" onClick={()=>rotateLeft()}>
            <i className="material-icons">rotate_left</i>
          </button>
          <button type="button" className="btn btn-sm btn-link text-white px-2" onClick={()=>rotateReset()}>
            <i className="material-icons">refresh</i>
          </button>
          <button type="button" className="btn btn-sm btn-link text-white pl-2" onClick={()=>rotateRight()}>
            <i className="material-icons">rotate_right</i>
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}}

export default ToolBar

function zoomMinus(){return false}
function zoomReset(){return false}
function zoomPlus(){return false}
function previousPage(){return false}
function nextPage(){return false}
function rotateLeft(){return false}
function rotateReset(){return false}
function rotateRight(){return false}


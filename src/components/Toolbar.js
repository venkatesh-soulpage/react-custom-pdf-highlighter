import React, { Component } from 'react'

export default class Toolbar extends Component {
    render() {
        return (
            <div className="container rounded text-white" style={{backgroundColor: "#343a40bf"}}>
              <div className="row">
                <div className="col-sm-4 text-center">
                  <div className="btn-group" role="group">
                    <button type="button" className="btn btn-sm btn-link text-white pr-2" >
                      <i className="material-icons">zoom_out</i>
                    </button>
                    <button type="button" className="btn btn-sm btn-link text-white px-2" >
                      <i className="material-icons">refresh</i>
                    </button>
                    <button type="button" className="btn btn-sm btn-link text-white pl-2" >
                      <i className="material-icons">zoom_in</i>
                    </button>
                  </div>
                </div>
                <div className="col-sm-4 text-center">
                  <div className="btn-group" role="group">
                    <button className="btn btn-sm btn-link text-white pr-2" >
                      <i className="material-icons">keyboard_arrow_left</i>
                    </button>
                    <div class="small py-3">Page  {`@`} / {`@`}</div>
                    <button className="btn btn-sm btn-link text-white pl-2" >
                      <i className="material-icons">keyboard_arrow_right</i>
                    </button>
                  </div>
                </div>
                <div className="col-sm-4 text-center">
                  <div className="btn-group" role="group">
                    <button type="button" className="btn btn-sm btn-link text-white pr-2" >
                      <i className="material-icons">rotate_left</i>
                    </button>
                    <button type="button" className="btn btn-sm btn-link text-white px-2" >
                      <i className="material-icons">refresh</i>
                    </button>
                    <button type="button" className="btn btn-sm btn-link text-white pl-2" >
                      <i className="material-icons">rotate_right</i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
        )
    }
}

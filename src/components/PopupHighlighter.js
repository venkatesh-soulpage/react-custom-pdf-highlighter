import React, { Component } from 'react'
import NewWindow from 'react-new-window'
import CustomHighlighter from './CustomHighlighter'

class PopupHighlighter extends Component {
    render() {
        return (
            <NewWindow
            {...this.props}
            >
                <CustomHighlighter
                {...this.props}
                />
            </NewWindow>
        )
    }
}

export default PopupHighlighter
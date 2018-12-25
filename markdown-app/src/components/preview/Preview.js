import React from 'react';
import './preview.css';

const Preview = props => (
    <div className="preview">
        <h1>From My Preview</h1>
        <div id="preview">
            {props.text}
        </div>
    </div>
)

export default Preview;
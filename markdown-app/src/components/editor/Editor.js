import React from 'react';
import './editor.css';

const Editor = props => (
    <div className="editor">
        <textarea
            id="editor"
            onChange={e => {
                props.handleChange(e.target.value)
            }}
        >
        </textarea>
    </div>
)

export default Editor;
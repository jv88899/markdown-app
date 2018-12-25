import React, { Component } from 'react';
import Editor from './editor/Editor';
import Preview from './preview/Preview';

class App extends Component {
    state = {
        text: ''
    }

    handleChange = newText => {
        this.setState( () => ({
            text: newText
        }))
    }

    render() {
        return (
            <div className="app">
                <Editor
                    handleChange={this.handleChange}
                />
                <Preview
                    text={this.state.text}
                />
            </div>
        )
    }
}

export default App;
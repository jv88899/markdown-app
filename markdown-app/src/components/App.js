import React, { Component } from 'react';
import Editor from './editor/Editor';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="app">
                <Editor />
            </div>
        )
    }
}

export default App;
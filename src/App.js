import React, { Component } from 'react';
import './App.css';

import Editor, { Editable, createEmptyState } from 'ory-editor-core';
import 'ory-editor-core/lib/index.css' //

import image from 'ory-editor-plugins-image';
import 'ory-editor-plugins-image/lib/index.css';

import slate from 'ory-editor-plugins-slate';
import 'ory-editor-plugins-slate/lib/index.css'

import spacer from 'ory-editor-plugins-spacer';
import 'ory-editor-plugins-spacer/lib/index.css'

import divider from 'ory-editor-plugins-divider';
import 'ory-editor-plugins-divider/lib/index.css';

import parallax from 'ory-editor-plugins-parallax-background';
import 'ory-editor-plugins-parallax-background/lib/index.css';

import { Trash, DisplayModeToggle, Toolbar } from 'ory-editor-ui';
import 'ory-editor-ui/lib/index.css';

const editable = createEmptyState();
const editor = new Editor({
  plugins: {
    content: [slate(), image, spacer, divider],
    layout: [parallax({ defaultPlugin: slate() })]
  },
  defaultPlugin: slate(),
  editables: [editable],
});

class App extends Component {
  render() {
    return (
      <div className="App">

        <header className="App-header">
          kek
        </header>

        <Editable 
          editor={editor}
          id={editable.id}
          onChange={(editable) => {
            console.warn(editable)
          }}
        />

        <Trash editor={editor}/>
        <DisplayModeToggle editor={editor}/>
        <Toolbar editor={editor}/>

      </div>
    );
  }
}

export default App;

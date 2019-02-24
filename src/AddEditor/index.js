import React from 'react';
import PropTypes from 'prop-types';

import Editor, { Editable, createEmptyState } from 'ory-editor-core';
import 'ory-editor-core/lib/index.css';

import image, { imagePlugin } from 'ory-editor-plugins-image';
import 'ory-editor-plugins-image/lib/index.css';

import slate from 'ory-editor-plugins-slate';
import 'ory-editor-plugins-slate/lib/index.css'

import spacer from 'ory-editor-plugins-spacer';
import 'ory-editor-plugins-spacer/lib/index.css'

import divider from 'ory-editor-plugins-divider';
import 'ory-editor-plugins-divider/lib/index.css';

import parallax from 'ory-editor-plugins-parallax-background';
import 'ory-editor-plugins-parallax-background/lib/index.css';

import video from 'ory-editor-plugins-video';
import 'ory-editor-plugins-video/lib/index.css';

import background from 'ory-editor-plugins-background';
import { ModeEnum } from 'ory-editor-plugins-background/lib/types/modeEnum';
import 'ory-editor-plugins-background/lib/index.css';

import html5video from 'ory-editor-plugins-html5-video';
import 'ory-editor-plugins-html5-video/lib/index.css';

import { Trash, DisplayModeToggle, Toolbar } from 'ory-editor-ui';
import 'ory-editor-ui/lib/index.css';

// import content from '.././content';

import inputTextField from '.././plugins/inputTextField/index';

const fakeImageUploadService = (url) => console.warn('жопа');

const plugins = {
  content: [slate(), spacer, imagePlugin({ imageUpload: fakeImageUploadService('/images/flower.jpg') }), video, divider, html5video, inputTextField],
  layout: [
    parallax({ defaultPlugin: slate() }),
    background({
      defaultPlugin: slate(),
      imageUpload: fakeImageUploadService('/images/flower.jpg'),
      // enabledModes: ModeEnum.COLOR_MODE_FLAG | ModeEnum.IMAGE_MODE_FLAG | ModeEnum.GRADIENT_MODE_FLAG,
    }),
  ],
};

const AddEditor = ({ content, onUpdateEditor }) => {
  const editor = new Editor({
    plugins: plugins,
    defaultPlugin: slate(),
    editables: [
      ...content,
      createEmptyState(),
    ],
  });

  return(
    <div className='hehey'>

      <Editable 
        editor={editor}
        id={content[0].id}
        onChange={(editable) => {
          onUpdateEditor(editable)
        }}
      />

      <Trash editor={editor}/>
      <DisplayModeToggle editor={editor}/>
      <Toolbar editor={editor}/>

    </div>
  )
};

AddEditor.propTypes = {
  updateContent: PropTypes.func
};

export default AddEditor;
import React, { useState } from 'react';
import Editor from "@monaco-editor/react";
import './Editor.css'
import { getValue } from '@testing-library/user-event/dist/utils';

const ReactEditor = ({ value, setValue}) => {
    return <div className='EditorContainer'>
        <Editor
            height="90vh"
            defaultLanguage="json"
            value={value}
            onChange={setValue}
        />
    </div>
};

export default ReactEditor;

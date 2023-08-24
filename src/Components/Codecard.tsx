import React, { useState } from "react";


import Editor from "@monaco-editor/react";

interface CodeEditorWindowProps {
  language?: string;
  code?: string;
  theme?: string;
  height: number;
}

const CodeEditorWindow: React.FC<CodeEditorWindowProps> = ({ language, code, theme, height }) =>
  {

  return (
    <div className=""> 
      <Editor
        height={height}
        width={`100%`}
        font-family= 'Courier New'
        font-size= {'14px'}
        line-height= '1.5'
        // background-color: #fff;
        border-radius= {'10px'}
        // box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
        
        // resize: vertical; /* Allow vertical resizing */
        // overflow: auto; /* Enable scrolling for overflow */
        language={language || "javascript"}
        value={code}
        options={{ readOnly: true }}
        theme={"vs-dark"}
        defaultValue="// some comment"
        />
    </div>
  );
};

export default CodeEditorWindow;

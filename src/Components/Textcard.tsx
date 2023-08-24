import React from 'react';

type TextcardProps = {
    content: string;
};

const Textcard:React.FC<TextcardProps> = ({ content }) => {
    
    return (
        <div className="border rounded p-4 shadow-md">
          <p>{content}</p>
        </div>
      );
}
export default Textcard;
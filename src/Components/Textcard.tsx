import React from 'react';

type TextcardProps = {
    content: string;
};

const Textcard:React.FC<TextcardProps> = ({ content }) => {
    
    return (
        <div className="border bg-slate-300 opacity-60 shadow-md rounded-lg p-6 m-4 text-black">
          <p>{content}</p>
        </div>
      );  
}
export default Textcard;
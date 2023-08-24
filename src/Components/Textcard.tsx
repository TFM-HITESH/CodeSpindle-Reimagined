import React from 'react';

type TextcardProps = {
    content: string;
};

const Textcard:React.FC<TextcardProps> = ({ content }) => {
    
    return (
        <div className="border bg-slate-300 opacity-90 shadow-lg rounded-lg p-6 w-[100%] text-black text-xl font-bold mb-4">
          <p>{content}</p>
        </div>
      );  
}
export default Textcard;
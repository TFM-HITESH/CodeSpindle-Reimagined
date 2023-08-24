import React from 'react';
import Textcard from './Textcard';
import Codecard from './Codecard';

type InfocardProps = {

    content: string;

    language?: string;
    code?: string;
    theme?: string;
    height: number;

};

const Infocard: React.FC<InfocardProps> = ({ content, language, code, theme, height }) => {


    return (
    <div className='bg-opacity-20 bg-gray-500 rounded-2xl px-[3%] py-[2%] w-[100%] mt-[2%] mb-[2%] transition duration-300 hover:bg-zinc-300 hover:bg-opacity-30 animate-glow-opacity'>
            <Textcard content={content} />
            <Codecard
              height={height}
              code={code}
              language={language}
              theme={theme}
            />
    </div>
    );
}
export default Infocard;
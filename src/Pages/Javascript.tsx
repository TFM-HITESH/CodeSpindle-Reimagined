import Navbar from '@/Components/Navbar';
import React, { useState } from 'react';
import './globals.css'
import Sidebar from '@/Components/Sidebar';
import Textcard from '@/Components/Textcard';
import Codecard from '@/Components/Codecard';


type JavascriptProps = {

};

const Javascript: React.FC<JavascriptProps> = () => {

    const [code, setCode] = useState("hello world");

    const handleCodeChange = (newCode: string) => {
        setCode(newCode);
    };
    return (
        // <div>
        //     <Sidebar />
        //     <Navbar />
        //     <h1>Javascript</h1>

        //     {/* Other content */}
        // </div>

        <div>
            <div className=''>
                <Navbar />
            </div>
            <div className='flex overflow-y-auto'>
                <div className='w-[25%] h-[100vh]'>
                    {/* sidebar */}
                    <Sidebar />
                </div>
                <div className='px-[3%] py-[2%] shadow-md w-[100%]'>
                    {/* text */}
                    {/* <Codecard /> */}

                    <Textcard content="This is some example text for the card." />

                    <Codecard
                        code={"package practiceproject\;\n\npublic class democlass\n\{\n\tpublic static void main(String[] args)\n \t\{\n\t\tint a=15\;\n\t\tint k = a>10 ? 10 : 12\;\n\t\tSystem.out.println(k)\;\n\t\}\n\}"}
                        language={"java"}
                        theme={"vs-dark"}
                    />


                    <Textcard content="This is some example text for the card." />

                    <Codecard
                        code={"hello world"}
                        language={"java"}
                        theme={"vs-dark"}
                    />

                    <Textcard content="This is some example text for the card." />

                    <Codecard
                        code={"hello world"}
                        language={"java"}
                        theme={"vs-dark"}
                    />

                    <Textcard content="This is some example text for the card." />

                    <Codecard
                        code={"hello world"}
                        language={"java"}
                        theme={"vs-dark"}
                    />

                    <Textcard content="This is some example text for the card." />

                    <Codecard
                        code={"hello world"}
                        language={"java"}
                        theme={"vs-dark"}
                    />

                </div>
            </div>
        </div>
    );
}
export default Javascript;
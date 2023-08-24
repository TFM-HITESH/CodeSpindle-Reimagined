import React from 'react';
import Navbar from '@/Components/Navbar';
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import HiddenNavbar from '@/Components/HiddenNavbar';
import Sidebar from '@/Components/Sidebar';
import Textcard from '@/Components/Textcard';
import Codecard from '@/Components/Codecard';
import Infocard from '@/Components/Infocard';

type javaProps = {

};

const java: React.FC<javaProps> = () => {

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
        <div className='px-[3%] py-[2%] shadow-md h-[100vh] w-[100%] overflow-y-auto bg-opacity-20 m-[2%] bg-gray-500 rounded-2xl '>
          {/* text */}
          {/* <Codecard /> */}
          
          <Infocard
            content={"Problem 1: \n Display \"Bye World\" Message to the User"}
            height={300}
            code={"package javaprogrammingdemo;\nimport java.util.Scanner;\npublic class javalabclass\n{\n\tpublic static void main(String args[])\n\t{\n\t\tString result;\n\t\tSystem.out.println(\"Enter the Mark scored\");\n\t\tScanner input = new Scanner(System.in);\n\t\tint mark = input.nextInt();\n\t\tresult = mark>=40 ? \"passed\" : \"failed\";\n\t\tSystem.out.println(result);\n\t\t\n\t}\n}\n"}
            language={"java"}
            theme={"vs-dark"}
          />

          <Infocard
            content={"Problem 1: \n Display \"Bye World\" Message to the User"}
            height={300}
            code={"package javaprogrammingdemo;\nimport java.util.Scanner;\npublic class javalabclass\n{\n\tpublic static void main(String args[])\n\t{\n\t\tString result;\n\t\tSystem.out.println(\"Enter the Mark scored\");\n\t\tScanner input = new Scanner(System.in);\n\t\tint mark = input.nextInt();\n\t\tresult = mark>=40 ? \"passed\" : \"failed\";\n\t\tSystem.out.println(result);\n\t\t\n\t}\n}\n"}
            language={"java"}
            theme={"vs-dark"}
          />

          

        </div>
      </div>
    </div>
  );
}
export default java;
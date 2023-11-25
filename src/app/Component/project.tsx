import React from 'react'
import Link from "next/link";
import Image from 'next/image';
const Project = ( )=> {
    return (
        <div id="project">
            <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
      My Projects 
      </h1>
   
    </div>
    <div className="flex flex-wrap -m-5 -mt-[5rem]">
        {/*Projecr */}
      <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require("../../../public/assests/my project/next.js.png")}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
             Next.js Project
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            Web Develope
            </h1>
            <p className="leading-relaxed line-clamp-2 ">
             Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae aut quia voluptates, aliquam temporibus illo. Repudiandae corrupti magni enim rerum officia, aperiam totam in, eaque magnam qui, et molestiae illum.
            </p>
            <Link target="_blank" href={"https://github.com/usman-attari/project_12_MyBankOOP"}>
            <p className="leading-relaxed text-blue-500 hover:underline ">   View Project..  </p></Link>
          </div>
        </div>
      </div>
          {/*Projecr */}
          <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require("../../../public/assests/my project/caterng.jpg")}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
             Next.js Project
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            Web Develope
            </h1>
            <p className="leading-relaxed line-clamp-2">
             This is the  project wich i've created for those who owns a  
             Web Development Business. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, sed veniam quibusdam quod excepturi officia et. Facere soluta, nihil esse ut rerum repellat quia vel, asperiores sequi nemo officiis sit.
            </p>
            <Link target="_blank" href={"https://github.com/usman-attari/project06_Student-Management-System"}>
            <p className="leading-relaxed text-blue-500 hover:underline ">   View Project..  </p></Link>
          </div>
        </div>
      </div>
       {/*Projecr */}
       <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require("../../../public/assests/my project/nextjs.jpg")}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
             Next.js Project
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            Web Develope
            </h1>
            <p className="leading-relaxed line-clamp-2">
             This is the  project wich i've created for those who owns a  
             Web Development Business. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, sed veniam quibusdam quod excepturi officia et. Facere soluta, nihil esse ut rerum repellat quia vel, asperiores sequi nemo officiis sit.
            </p>
            <Link target="_blank" href={"https://github.com/usman-attari/project02_ATM"}>
            <p className="leading-relaxed text-blue-500 hover:underline ">   View Project..  </p></Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

        </div>
    )
}
export default Project

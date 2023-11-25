"use client"
import Image from "next/image";
import React from "react";
import Typewriter from 'typewriter-effect';
import Link from "next/link";

const Hero = () => {
    return (

<section className="text-gray-600 body-font bg-gray-100 ">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
       I am
        <br className="hidden lg:inline-block" />
        <Typewriter
  options={{
    strings: [
        'Web Developer',
        'UI/UX Designer',
        'Graphic Designer'
],
    autoStart: true,
    loop: true,
  }}
/>
      </h1>
      <div className="w-[100px] h-[2px] bg-blue-700"></div>
      <p className="mb-8 leading-relaxed">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam aut qui eaque quis deserunt? Saepe ex nobis repellendus in harum. Inventore minus beatae cupiditate, nihil quisquam sapiente illo rerum sed!
      </p>
      <div className="flex justify-center">
        <Link href={"#Contact"}>
        <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
          Contact
        </button>
        </Link>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <Image
        className="object-cover object-center rounded mx-auto w-[15rem]"
        alt="hero"
        width={500}
        height={500}
        src={require('../../../public//assests//pitcher/pic.png')}
      />
    </div>
  </div>
</section>


    )
}
export default Hero
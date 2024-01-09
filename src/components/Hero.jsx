import React from "react";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div id="home" className="text-white">
      <div className="max-w-[800px] m-0  h-screen mx-auto text-center flex flex-col justify-center">
      <div >
        {/* <img src={memoji} alt="/" className="w-[120px] h-[120px] float-right "></img> */}
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          नमस्ते.
        </h1>
        </div>
        <p className="md:text-2xl text-xl font-bold bg-clip-text bg-gradient-to-b text-transparent from-[#1b3669] to-[#a631ff]">
          I am Karan
        </p>
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl  py-4">
            Website and Application
          </p>

          <TypeAnimation
            className=" md:text-5xl sm:text-4xl text-xl font-semibold  md:pl-4 pl-2 "
            sequence={[" ", 500, " Developer", 2000]}
            wrapper="span"
            deletionSpeed={50}
            speed={25}
            style={{ display: "inline-block",color: "" }}
            repeat={Infinity}
          />
          
        </div>
        <code><p className="text-[#717171]">I am passionate about creating beautiful code and this is all about me written in code displayed in a webpage. </p></code>
      </div>
    </div>
  );
};

export default Hero;

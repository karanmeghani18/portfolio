import React from "react";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div id="home" className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          नमस्ते.
        </h1>
        <p className="md:text-2xl text-xl font-bold text-gray-500">
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
            style={{ display: "inline-block" }}
            repeat={Infinity}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;

import React from "react";
import Typed from "react-typed";
import hero from "../assets/hero.webp";

const Hero = () => {
  return (
    <div className="text-white">
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
          <Typed
            className=" md:text-5xl sm:text-4xl text-xl  font-bold md:pl-4 pl-2 "
            strings={["Developer"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;

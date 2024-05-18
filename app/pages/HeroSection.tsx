import React from "react";
import "../globals.css";
import Image from "next/image";
const HeroSection = () => {
  return (
    <>
      <div className="flex">
        <div className="p-20 text-left m-10">
          <p className=" text-2xl m-3">Hi, I am Srikanth Bisai </p>
          <p className=" text-2xl m-2">I am a Fullstack Web Developer</p>
          <p className="text-2xl m-3">
            I can build a complete website from scratch.
          </p>
        </div>

        <div className="m-10">
          <Image
            className="rounded-full"
            src="/images/changed.png"
            alt="A description of the image"
            width={300}
            height={0}
          />
        </div>
      </div>
    </>
  );
};

export default HeroSection;

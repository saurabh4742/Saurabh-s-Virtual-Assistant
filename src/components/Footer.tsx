/* eslint-disable @next/next/no-img-element */
import React from "react";

const Footer = () => {
  return (
    <div className="w-full  bg-[#020617] p-4 justify-center flex-none">
      <div className="sm:flex flex-none gap-5  justify-center items-center">
        <div className="sm:w-fit flex justify-center my-2 cursor-pointer"><a target="_blank" href="https://saurabh-anands.vercel.app/" >Contact Me</a></div>
        <div className="sm:w-fit flex justify-center my-2 cursor-pointer"><a target="_blank" href="/userguide" >User Guide</a></div>
        <div className="sm:w-fit flex justify-center my-2 cursor-pointer"><a target="_blank" href="/privacypolicy">Privacy Policy</a></div>
      </div>
      <div className="flex mt-2 gap-4 justify-center items-center text-sm">
      <p>&copy;2024 Saurabh Anand All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const HomeCard = () => {
  return (
    <div
      className="homecard flex flex-col items-center justify-center  max-w-2xl mx-auto"
      id="home"
    >
      <p className="text-xs">Hi, welcome my name is </p>
      <h1 className="hero_text text-3xl sm:text-4xl lg:5xl text-center font-bold">
        The Crypto Doyen{" "}
      </h1>
      <h1 className="hero_text text-3xl sm:text-4xl lg:5xl text-center   font-bold">
        {" "}
        I am a full-stack dev.
      </h1>
      <h3 className="text-center mt-3  text-base lg:text-lg">
        Welcome to the Crypto Doyen&apos;s Crib , a professional resume writer with years of experience in the industry. With a strong understanding of 
      the job market and a keen eye for detail.
      </h3>
      <div className="p-3">  
					<ul>
						<div className="flex gap-6 pb-5">
							<FaInstagram className="text-2xl cursor-pointer hover:text-pink-600" />
							<FaTwitter className="text-2xl cursor-pointer hover:text-blue-700" />
							<FaLinkedin className="text-2xl cursor-pointer hover:text-blue-600" />
							<FaYoutube className="text-2xl cursor-pointer hover:text-red-600" />
						</div>
					</ul>
				</div>
    </div>
  );
};

export default HomeCard;


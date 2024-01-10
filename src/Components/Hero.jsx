import React from "react";
import cover from "../Assets/home-bg.png";

const Hero = () => {
  return (
    <div className="relative w-full h-screen">
      <img
        src={cover}
        alt=""
        className="absolute h-full w-full object-cover z-[-1]"
      />
      <div className="absolute inset-0 flex flex-col justify-center text-start z-10">
        <div className="container max-w-[1100px] mx-auto px-6 md:px-10 lg:px-16">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-black mb-4 lg:mb-6">
            Dreamy <span className="text-pink-500">Flower</span>
          </h1>
          <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-slate-800 mb-3 lg:mb-1">
            Send Beautiful Flowers Today
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl font-semibold text-slate-800 mb-6">
            Brighten someone's day with stunning flower arrangements.
          </p>
          <div>
            <button className="text-lg md:text-2xl border-[1px] rounded-r-3xl border-gray-900 py-2 px-6 md:px-8 lg:px-10 primary_button">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

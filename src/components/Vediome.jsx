import React from "react";
import Vedio from "../assets/vedio/vedio.mp4";
const Vediome = () => {
  return (
    <div className="flex justify-center items-center bg-gray-100">
      <div className="max-w-2xl shadow-2xl">
        <div className="text-center text-xl md:text-3xl pt-4 flex-row ">
          <h1 className="font-bold text-blue-700 md:text-4xl lg:text-5xl pb-4 md:pt-0">
            Banu Designs:
            <span className="text-purple-600">
              Where Imagination
            </span> Meets <span className="text-green-600">Innovation</span>
          </h1>
        </div>

        <video className="h-full w-full rounded-lg" controls>
          <source src={Vedio} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Vediome;

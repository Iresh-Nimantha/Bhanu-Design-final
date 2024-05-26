import React from "react";

const Vediome = () => {
  return (
    <div className="flex justify-center items-center bg-gray-100">
      <div className="max-w-2xl shadow-2xl">
        <div className="text-center text-xl md:text-3xl pt-4 flex-row ">
          <h1 className="font-bold text-blue-700 md:text-4xl lg:text-5xl">
            Banu Designs:
            <span className="text-purple-600">
              Where Imagination
            </span> Meets <span className="text-green-600">Innovation</span>
          </h1>
        </div>

        <iframe
          src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2F61554859791220%2Fvideos%2F2693538337495726%2F&show_text=false&width=476&t=0"
          className="w-full h-[25em] md:h-[100vh] object-cover"
        ></iframe>
      </div>
    </div>
  );
};

export default Vediome;

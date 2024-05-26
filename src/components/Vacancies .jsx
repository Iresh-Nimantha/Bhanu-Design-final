import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const Vacancies = () => {
  return (
    <div
      id="Vacancies"
      className="flex mt-8 pt-12 items-center justify-center min-h-[90vh] w-full  "
    >
      {" "}
      <div>
        <div className="ms:w-full w-full max-w-2xl p-6  bg-white rounded-lg shadow-2xl animate-bounce border-2 border-cyan-400">
          <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center [text-shadow:2px_2px_4px_rgb(220,20,60)]">
            Join Our Team!
          </h1>
          <p className="text-gray-700 mb-6 text-center">
            We are looking for talented individuals to join our company. If you
            are passionate, dedicated, and ready to grow with us, we'd love to
            hear from you!
          </p>
        </div>
        <div className="flex justify-center pt-12">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://wa.me/message/U7DTQJQ6AGDGA1"
            className="inline-flex items-center px-6 py-3 bg-white text-green-500 font-semibold rounded-lg shadow-md hover:bg-green-100 focus:ring-opacity-75 transition-transform transform hover:scale-105 border-2 border-green-400"
          >
            <FaWhatsapp className="h-8 w-8 pr-2" style={{ color: "#25D366" }} />
            Contact Us on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default Vacancies;

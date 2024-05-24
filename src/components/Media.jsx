import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import {
  faWhatsapp,
  faFacebookF,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

const Media = () => {
  return (
    <div id="Contact" className="m-auto py-12">
      <div className="text-center text-6xl py-4">
        <h1 className="relative font-bold">Contact Us</h1>
      </div>
      <div className=" flex justify-around items-center bg-gray-100 p-6 rounded-lg shadow-2xl mx-12 ">
        <a
          color="white"
          href="tel:1234567890"
          className="text-blue-500 hover:text-blue-700 relative flex flex-col items-center"
        >
          <FontAwesomeIcon icon={faPhoneAlt} className="text-3xl mb-2" />
          Telephone
        </a>

        <a
          href="https://wa.me/1234567890"
          className="text-green-500 hover:text-green-700 relative flex flex-col items-center"
        >
          <FontAwesomeIcon icon={faWhatsapp} className="text-3xl mb-2" />
          Whatsapp
        </a>

        <a
          href="https://www.facebook.com"
          className="text-blue-600 hover:text-blue-800 relative flex flex-col items-center"
        >
          <FontAwesomeIcon icon={faFacebookF} className="text-3xl mb-2" />
          Facebook
        </a>

        <a
          href="https://www.tiktok.com"
          className="text-pink-500  hover:text-pink-700 relative flex flex-col items-center"
          style={{ color: "#010101" }}
        >
          <FontAwesomeIcon icon={faTiktok} className="text-3xl mb-2" />
          tiktok
        </a>
      </div>
    </div>
  );
};

export default Media;

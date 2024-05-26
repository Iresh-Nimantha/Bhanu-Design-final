import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import {
  faWhatsapp,
  faFacebookF,
  faTiktok,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Media = () => {
  return (
    <div id="ContactUs" className="m-auto py-12">
      <div className="text-center text-6xl py-4">
        <h1 className="relative font-bold">Contact Us</h1>
      </div>
      <div className=" justify-around items-center bg-gray-100 p-6 rounded-lg shadow-2xl mx-12 mb-12 ">
        <a
          target="_blank"
          color="white"
          href="tel:1234567890"
          className="text-blue-500 hover:text-blue-700  flex flex-col items-center mb-4 bg-blue-gray-100 rounded-xl pt-2 hover:scale-95"
        >
          <FontAwesomeIcon icon={faPhoneAlt} className="text-3xl mb-2" />
          Telephone
        </a>

        <a
          target="_blank"
          href="https://wa.me/message/U7DTQJQ6AGDGA1"
          className="text-green-500 hover:text-green-700  flex flex-col items-center bg-blue-gray-100 mb-4 rounded-xl pt-2 hover:scale-95"
        >
          <FontAwesomeIcon icon={faWhatsapp} className="text-3xl mb-2" />
          Whatsapp
        </a>

        <a
          target="_blank"
          href="https://www.facebook.com/profile.php?id=61554859791220&mibextid=ZbWKwL"
          className="text-blue-600 hover:text-blue-800  flex flex-col items-center bg-blue-gray-100 mb-4 rounded-xl pt-2 hover:scale-95"
        >
          <FontAwesomeIcon icon={faFacebookF} className="text-3xl mb-2" />
          Facebook
        </a>

        <a
          target="_blank"
          href="https://www.tiktok.com/@banu.design3?is_from_webapp=1&sender_device=pc"
          className="text-pink-500  hover:text-pink-700  flex flex-col items-center bg-blue-gray-100 mb-4 rounded-xl pt-2 hover:scale-95"
          style={{ color: "#010101" }}
        >
          <FontAwesomeIcon icon={faTiktok} className="text-3xl mb-2" />
          tiktok
        </a>
        <a
          target="_blank"
          href="https://www.instagram.com/rusith_banuka?utm_source=qr&igsh=aXlheGp3bjhiamVo"
          className="text-purple-500 hover:text-purple-700 flex flex-col items-center bg-blue-gray-100 rounded-xl pt-2 hover:scale-95"
        >
          <FontAwesomeIcon icon={faInstagram} className="text-3xl mb-2" />
          Instagram
        </a>
      </div>
    </div>
  );
};

export default Media;

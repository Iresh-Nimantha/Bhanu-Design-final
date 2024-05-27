import React from "react";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Button,
} from "@material-tailwind/react";
import { MasonryGridGallery } from "./MasonryGridGallery ";
import { FaWhatsapp } from "react-icons/fa";

const Modal = ({ isOpen, onClose, service }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center  bg-opacity-50">
      <div className="w-full max-w-screen-xl">
        <Dialog open={isOpen} handler={onClose} size="xl">
          <DialogHeader>{service.title}</DialogHeader>
          <div className="flex justify-center">
            <DialogBody className="overflow-y-auto max-h-[80vh] w-full">
              <MasonryGridGallery images={service.images} />
            </DialogBody>
            <div className=" fixed flex items-center bg-gray-200 w-94 justify-between gap-2 mt-8 px-4 rounded-lg py-2 animate-bounce ">
              <h1 className="text-lg font-semibold ">Place your Order</h1>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://wa.me/message/U7DTQJQ6AGDGA1"
                className="inline-flex items-center py-2 px-3 bg-green-100 text-green-500 font-semibold rounded-lg shadow-md hover:bg-green-200 focus:ring-opacity-75 transition-transform transform hover:scale-105 border-2 border-green-400"
              >
                <FaWhatsapp
                  className="h-8 w-8 pr-2"
                  style={{ color: "#25D366" }}
                />
                WhatsApp
              </a>
            </div>
          </div>

          <DialogFooter className=" bg-gray-100 -mt-4">
            <Button onClick={onClose} color="blue">
              Close
            </Button>
          </DialogFooter>
        </Dialog>
      </div>
    </div>
  );
};

export default Modal;

import React from "react";

export const MasonryGridGallery = ({ images, className }) => {
  return (
    <div
      className={`grid grid-cols-2 md:grid-cols-4 gap-4 h-full w-full overflow-y-scroll ${className}`}
    >
      {images.map((image, index) => (
        <div key={index} className="grid gap-4">
          <div>
            <img
              className="h-full max-w-full rounded-lg object-cover object-center items-center mr-0 md:mr-4"
              src={image}
              alt={`gallery-photo-${index}`}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

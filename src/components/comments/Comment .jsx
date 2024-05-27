import React from "react";

const Comment = ({ name, comment }) => {
  return (
    <div className="bg-white p-4 shadow-md rounded-lg mb-4">
      <h3 className="text-lg font-semibold mb-2">{name}</h3>
      <p className="text-gray-600">{comment}</p>
    </div>
  );
};

export default Comment;

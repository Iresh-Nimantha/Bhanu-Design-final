import React, { useState } from "react";
import Comment from "./Comment ";

const CommentsSection = () => {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() !== "" && comment.trim() !== "") {
      setComments([...comments, { name, comment }]);
      setName("");
      setComment("");
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Comments</h2>
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your Name"
          className="border border-gray-300 rounded-md px-3 py-2 mr-2"
        />
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Your Comment"
          rows="3"
          className="border border-gray-300 rounded-md px-3 py-2 mr-2"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
      {comments.map((comment, index) => (
        <Comment key={index} name={comment.name} comment={comment.comment} />
      ))}
    </div>
  );
};

export default CommentsSection;

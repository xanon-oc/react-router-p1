import React from "react";
import { useNavigate } from "react-router-dom";

const SinglePost = ({ post }) => {
  const { id, title } = post;
  const navigate = useNavigate();
  const handleOnCBP = () => {
    navigate(`/post/${post.id}`);
  };
  return (
    <div className="h-[250px]  border p-8 border-blue-600 relative">
      <div className="flex flex-col my-auto gap-8">
        <h2>ID : {id}</h2>
        <p>Title : {title}</p>
        <button onClick={handleOnCBP} className="absolute inset-x-0 bottom-0">
          Show more
        </button>
      </div>
    </div>
  );
};

export default SinglePost;

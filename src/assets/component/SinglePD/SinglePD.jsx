import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const SinglePD = () => {
  const singlePD = useLoaderData();
  const { id, title, body } = singlePD;
  const navigate = useNavigate();
  const handleGoBAck = () => {
    navigate(-1);
  };

  return (
    <div className="border p-8 border-blue-600 relative">
      <div className="flex flex-col my-auto gap-8">
        {" "}
        <h3>Detail about your post</h3>
        <h5>ID : {id}</h5>
        <p>{title}</p>
        <p>{body}</p>
        <button className="mt-2" onClick={handleGoBAck}>
          Go back
        </button>
      </div>
    </div>
  );
};

export default SinglePD;

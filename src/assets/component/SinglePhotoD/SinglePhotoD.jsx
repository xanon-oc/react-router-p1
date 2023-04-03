import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const SinglePhotoD = () => {
  const singlePhotoD = useLoaderData();
  const { id, title, url } = singlePhotoD;
  const navigate = useNavigate();
  const handlerGoBack = () => {
    navigate(-1);
  };
  return (
    <div className="">
      <div className="">
        {" "}
        <h2>ID : {id}</h2>
        <img src={url} alt="" />
        <h3>{title}</h3>
        <button onClick={handlerGoBack}>Go Back</button>
      </div>
    </div>
  );
};

export default SinglePhotoD;

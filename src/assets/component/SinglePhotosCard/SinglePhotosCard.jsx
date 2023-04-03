import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const SinglePhotosCard = ({ photo }) => {
  const singlePC = useNavigate();
  const handlePhotos = () => {
    singlePC(`/photo/${photo.id}`);
  };
  const { id, title, url } = photo;
  return (
    <div className="flex flex-col border relative">
      <h2>ID : {id}</h2>
      <h3>{title}</h3>
      <img src={url} alt="" />
      <button className="absolute w-full bottom-0" onClick={handlePhotos}>
        Show more
      </button>
    </div>
  );
};

export default SinglePhotosCard;

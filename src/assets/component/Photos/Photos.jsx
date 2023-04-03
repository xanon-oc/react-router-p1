import React from "react";
import { useLoaderData } from "react-router-dom";
import SinglePhotosCard from "../SinglePhotosCard/SinglePhotosCard";

const Photos = () => {
  const photos = useLoaderData();

  return (
    <div className="grid grid-cols-4 gap-4">
      {photos.map((photo) => (
        <SinglePhotosCard key={photo.id} photo={photo}></SinglePhotosCard>
      ))}
    </div>
  );
};

export default Photos;

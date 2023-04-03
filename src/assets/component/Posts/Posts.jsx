import React from "react";
import { useLoaderData } from "react-router-dom";
import SinglePost from "../SinglePost/SinglePost";

const Posts = () => {
  const posts = useLoaderData();
  return (
    <div className="grid grid-cols-4 gap-4">
      {posts.map((post) => (
        <SinglePost post={post} key={post.id}></SinglePost>
      ))}
    </div>
  );
};

export default Posts;

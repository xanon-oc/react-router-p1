import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Posts from "./assets/component/Posts/Posts";
import SinglePD from "./assets/component/SinglePD/SinglePD";
import Photos from "./assets/component/Photos/Photos";
import SinglePhotoD from "./assets/component/SinglePhotoD/SinglePhotoD";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/posts",
        element: <Posts></Posts>,
        loader: ({ params }) =>
          fetch("https://jsonplaceholder.typicode.com/posts"),
      },
      {
        path: "/post/:postId",
        element: <SinglePD></SinglePD>,
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
      },
      {
        path: "/photos",
        element: <Photos></Photos>,
        loader: () => fetch("https://jsonplaceholder.typicode.com/photos"),
      },
      {
        path: "photo/:photoId",
        element: <SinglePhotoD></SinglePhotoD>,
        loader: ({ params }) =>
          fetch(
            `https://jsonplaceholder.typicode.com/photos/${params.photoId}`
          ),
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

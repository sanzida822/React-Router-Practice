import React from "react";

import App from "./App.jsx";
import "./index.css";

import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./Component/About/About.jsx";
import Home from "./Component/Home/Home.jsx";
import Contact from "./Component/Contact/Contact.jsx";
import Friends from "./Component/Friends/Friends.jsx";
import FriendDetails from "./Component/FriendDetails/FriendDetails.jsx";
import Posts from "./Component/Posts/Posts.jsx";
import PostDetail from "./Component/PostDetails/PostDetail.jsx";

// const router=createBrowserRouter([
//   {
//     path:"/",
//     element:<App></App>
//   }
//   ,{
//     path:"/about",
//     element:<About></About>
//   }
// ])

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "about/",
        element: <About></About>,
      },
      {
        path: "friends",
        element: <Friends></Friends>,
        loader:()=>fetch("https://jsonplaceholder.typicode.com/users")  
      },
      {
        path: "friend/:friendId",
        element: <FriendDetails></FriendDetails>,
        // loader: ({params})=>console.log(params)
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
        
      },
      {
        path:"posts",
        element:<Posts></Posts>,
        loader:()=>fetch("https://jsonplaceholder.typicode.com/posts")

      },
      {
        path:"post/:postId",
        element:<PostDetail></PostDetail>,
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)


      },
      {
        path: "contact/",
        element: <Contact></Contact>,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

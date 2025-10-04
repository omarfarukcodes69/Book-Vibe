import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/root";
import ErrorPages from "../Pages/ErrorPages/ErrorPages";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import BookDetails from "../Pages/BookDetails/BookDetails";
export const Routes = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPages></ErrorPages>,
    children: [
      {
        index: true,
        loader:()=>fetch('booksData.json'),
        path: "/",
        Component: Home,
      },
      {
        path:"/about",
        Component: About,
      },
      {
        path:'/bookdetails/:id',
        loader:()=>fetch('booksData.json'),
        Component:BookDetails
      }
    ],
  },
]);

import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/root";
import ErrorPages from "../Pages/ErrorPages/ErrorPages";
import Home from "../Pages/Home/Home";
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
    ],
  },
]);

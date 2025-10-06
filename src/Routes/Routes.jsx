import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/root";
import ErrorPages from "../Pages/ErrorPages/ErrorPages";
import Home from "../Pages/Home/Home";
import BookDetails from "../Pages/BookDetails/BookDetails";
import ReadList from "../Pages/ReadList/ReadList";
import ListedBooks from "../Pages/ListedBooks/ListedBooks";
import GraphPage from "../Pages/GraphPage/GraphPage";
export const Routes = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPages></ErrorPages>,
    children: [
      {
        index: true,
        path: "/",
        loader: () => fetch("booksData.json"),
        Component: Home,
      },
      {
        path: "/listedbooks",
        loader: () => fetch("booksData.json"),
        Component: ListedBooks,
      },
      {
        path: "/readlist",
        loader: () => fetch("booksData.json"),
        Component: ReadList,
      },
      {
        path: "/bookdetails/:id",
        loader: () => fetch("booksData.json"),
        Component: BookDetails,
      },
      {
        path: "pagetoread",
        loader: () => fetch("booksData.json"),
        Component: GraphPage,
      },
    ],
  },
]);

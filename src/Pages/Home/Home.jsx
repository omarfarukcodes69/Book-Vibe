import React from "react";
import Bannar from "../../Components/Header/Bannar";
import Books from "../Books/Books";
import { useLoaderData } from "react-router";

const Home = () => {
  const BooksData = useLoaderData();
  console.log(BooksData);
  return (
    <div>
      <Bannar></Bannar>
      <Books BooksData={BooksData}></Books>
    </div>
  );
};

export default Home;

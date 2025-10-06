import React, { useEffect, useState } from "react";
import { getStoredBook } from "../../Utility/addToDB";
import { useLoaderData } from "react-router";
import Graph from "../../Components/Graph/Graph";

const GraphPage = () => {
  const AllData = useLoaderData();
  const [MyReadBooks, setMyReadBooks] = useState([]);
  useEffect(() => {
    const storedBookData = getStoredBook();
    const ConvertedStoredBooks = storedBookData.map((id) => parseInt(id));
    const MyReadLists = AllData.filter((book) =>
      ConvertedStoredBooks.includes(book.bookId)
    );
    setMyReadBooks(MyReadLists);
  }, []);
//   console.log(MyReadBooks)
  return(
    <>
    <h1 className="text-2xl font-bold text-center text-red-500 py-10 "> Graph: Pages to Book</h1>
    {
        MyReadBooks.map(Books=><Graph Books={Books} ></Graph>)
    }
    </>
  );
};

export default GraphPage;

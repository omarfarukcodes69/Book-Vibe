import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredBook } from "../../Utility/addToDB";
import MyReadBook from "../../Components/MyReadBook/MyReadBook";

const ReadList = () => {

  // const [MyWishlistBooks, setMyWishlistBooks] = useState([]);
  const [MyReadBooks, setMyReadBooks] = useState([]);
  const [Sort, setSort] = useState("");
  const AllData = useLoaderData();
  // console.log(AllData);
  useEffect(() => {
    const storedBookData = getStoredBook();
    const ConvertedStoredBooks = storedBookData.map((id) => parseInt(id));
    const MyReadLists = AllData.filter((book) =>
      ConvertedStoredBooks.includes(book.bookId)
    );
    setMyReadBooks(MyReadLists);
    // console.log(MyReadList)
  }, []);

  const handleSort = (type) => {
    setSort(type);
    if (type === "Pages") {
      const SortByPags = [...MyReadBooks].sort(
        (a, b) => a.totalPages - b.totalPages
      );
      setMyReadBooks(SortByPags);
    }
    if (type === "Ratings") {
      const SortByPags = [...MyReadBooks].sort((a, b) => a.rating - b.rating);
      setMyReadBooks(SortByPags);
    }
    if (type === "Year") {
      const SortByPags = [...MyReadBooks].sort(
        (a, b) => a.yearOfPublishing - b.yearOfPublishing
      );
      setMyReadBooks(SortByPags);
    }
  };

  return (
    <>
      <div className="dropdown dropdown-start ">
        <div
          tabIndex={0}
          role="button"
          className="btn ml-90 mx-auto bg-[#23BE0A] text-white text-lg py-7 px-5 rounded2xl text-center"
        >
          Sort By ⬇️ {Sort ? Sort : ""}
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
        >
          <li>
            <a onClick={() => handleSort("Pages")}>Pages</a>
          </li>
          <li>
            <a onClick={() => handleSort("Ratings")}>Ratings</a>
          </li>
          <li>
            <a onClick={() => handleSort("Year")}>Publish Year</a>
          </li>
        </ul>
      </div>
      <div className="my-15">
        <Tabs>
          <TabList>
            <Tab>Read Books</Tab>
            <Tab>Wishlist Books</Tab>
          </TabList>

          <TabPanel>
            {MyReadBooks.map((ReadBook) => (
              <MyReadBook ReadBook={ReadBook}></MyReadBook>
            ))}
          </TabPanel>
          <TabPanel>
            <h2>Wishlist Books</h2>
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
};

export default ReadList;

import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredBook } from "../../Utility/addToDB";
import MyReadBook from "../../Components/MyReadBook/MyReadBook";
import { getStoredWhishList } from "../../Utility/addToWhishDB";
import WishListBook from "../WishListBook/WishListBook";

const ReadList = () => {
  const [MyReadBooks, setMyReadBooks] = useState([]);
  const [Sort, setSort] = useState("");
  const AllData = useLoaderData();
  // console.log(AllData);

  //// read btn
  useEffect(() => {
    const storedBookData = getStoredBook();
    const ConvertedStoredBooks = storedBookData.map((id) => parseInt(id));
    const MyReadLists = AllData.filter((book) =>
      ConvertedStoredBooks.includes(book.bookId)
    );
    setMyReadBooks(MyReadLists);
    // console.log(MyReadList)
  }, []);

  ///Whishlist
  const [MyWishlistBooks, setMyWishlistBooks] = useState([]);
  useEffect(() => {
    const storedWishList = getStoredWhishList();
    const convertedWishList = storedWishList.map((id) => parseInt(id));
    const wishList = AllData.filter((book) =>
      convertedWishList.includes(book.bookId)
    );
    setMyWishlistBooks(wishList);
  }, []);
  // console.log(MyWishlistBooks)

  const handleSort = (type) => {
    setSort(type);
    if (type === "Pages") {
      const SortByPags = [...MyReadBooks].sort(
        (a, b) => a.totalPages - b.totalPages
      );
      setMyReadBooks(SortByPags);
      const SortByPages = [...MyWishlistBooks].sort(
        (a, b) => a.totalPages - b.totalPages
      );
      setMyWishlistBooks(SortByPages);
    }
    if (type === "Ratings") {
      const SortByPags = [...MyReadBooks].sort((a, b) => a.rating - b.rating);
      setMyReadBooks(SortByPags);
      const SortByPages = [...MyWishlistBooks].sort(
        (a, b) => a.rating - b.rating
      );
      setMyWishlistBooks(SortByPages);
    }
    if (type === "Year") {
      const SortByPags = [...MyReadBooks].sort(
        (a, b) => a.yearOfPublishing - b.yearOfPublishing
      );
      setMyReadBooks(SortByPags);
      const SortByPages = [...MyWishlistBooks].sort(
        (a, b) => a.yearOfPublishing - b.yearOfPublishing
      );
      setMyWishlistBooks(SortByPages);
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
            {MyWishlistBooks.map((MyWishListBook) => (
              <WishListBook
                key={MyWishListBook.totalPages}
                MyWishListBook={MyWishListBook}
              ></WishListBook>
            ))}
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
};

export default ReadList;

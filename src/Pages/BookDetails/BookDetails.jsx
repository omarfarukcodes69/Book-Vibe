import React from "react";
import { useLoaderData, useParams } from "react-router";
import { addToStoredDB } from "../../Utility/addToDB";

const BookDetails = () => {
  const { id } = useParams();
  const BookId = parseInt(id);
  const BooksData = useLoaderData();
  const BookData = BooksData.find((bookData) => bookData.bookId === BookId);
  const {
    yearOfPublishing,
    publisher,
    tags,
    category,
    rating,
    totalPages,
    review,
    image,
    author,
    bookName,
  } = BookData;
  // console.log(BookId,BookData)

  const handleReadBook = (id) => {
    addToStoredDB(id);
  };
  return (
    <div className="md:flex flex-col justify-between items-center gap-10 md:card-side bg-base-100 shadow-sm w-[90%] mx-auto my-14 p-5   ">
      <figure className="bg-[#f3f3f3] rounded-md md:w-1/2 p-15">
        <img className=" rounded drop-shadow-xl" src={image} alt="Shoes" />
      </figure>
      <div className=" space-y-3 md:w-1/2">
        <h2 className="card-title text-2xl font-semibold ">{bookName}</h2>

        <h3 className="text-lg border-b-1 border-gray-300 rounded-xl pb-5 ">
          By: {author}
        </h3>

        <h3 className="text-lg border-b-1 border-gray-300 rounded-xl pb-5 ">
          By: {category}
        </h3>

        <p className="text-md text-gray-500">
          {" "}
          <span className="text-lg font-bold text-black ">Review:</span>:{" "}
          {review}
        </p>
        {/* ----- tags ---  */}
        <div className="text-lg border-b-1 border-gray-300 rounded-xl pb-6 space-x-4">
          <span className="font-bold ml-4 ">Tags</span>
          <span className=""></span>
          <span className=" bg-[#F4FCF3] p-3 text-[#23BE0A] text-lg rounded-2xl shadow-sm ">
            #{tags[0]}
          </span>
          <span className=" bg-[#F4FCF3] p-2 rounded-2xl shadow-sm text-[#23BE0A] text-lg">
            #{tags[1]}
          </span>
        </div>

        {/* ------- books details ----  */}
        <div className="  flex gap-10 my-5">
          <aside className=" text-lg text-gray-500 space-y-2">
            <p>Number of Pages:</p>
            <p>Publisher:</p>
            <p>Year of Publishing: </p>
            <p>Rating:</p>
          </aside>
          <aside className="text-lg text-black font-bold space-y-2">
            <p>{totalPages}</p>
            <p>{publisher}</p>
            <p>{yearOfPublishing}</p>
            <p>{rating}</p>
          </aside>
        </div>

        <div className="card-actions  ">
          <button onClick={()=> handleReadBook(id)} className="btn text-lg p-6 border-1 border-gray-300">
            Read
          </button>
          <button className="btn  text-lg p-6 text-white bg-[#50B1C9] ">
            Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;

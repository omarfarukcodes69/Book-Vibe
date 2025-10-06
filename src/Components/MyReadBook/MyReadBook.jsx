import React from "react";

const MyReadBook = ({ ReadBook }) => {
  // console.log(ReadBook);
  return (
    <div className="md:flex gap-10 p-4 border-2 border-gray-300 rounded-lg my-4">
      <div className="bg-[#f4e8e8] sm:w-full md:w-1/4 lg:w-1/4 rounded-lg p-5">
        <img className="max-w-fit max-h-[300px] mx-auto " src={ReadBook.image} alt="" />
      </div>
      <div className=" w-3/4 space-y-4 p-5">
        <h1 className=" text-xl font-bold ">{ReadBook.bookName}</h1>
        <p className="font-semibold"> By:{ReadBook.author}</p>

        {/* ----- tags ---  */}
        <div className="text-lg border-b-1 border-gray-300 rounded-xl pb-6 space-x-5">
          <span className="font-bold ml-4 ">Tags</span>
          <span className=" bg-[#F4FCF3] p-3 text-[#23BE0A]  ">
            #{ReadBook.tags[0]}
          </span>
          <span className=" bg-[#F4FCF3] p-2  text-[#23BE0A]">
            #{ReadBook.tags[1]}
          </span>
          <span className=" text-gray-400 p-2">
            Year of Publishing: {ReadBook.yearOfPublishing}
          </span> <br /><br />
          <span className=" text-gray-400 p-2">
            Publisher: {ReadBook.publisher}
          </span>
          <span className=" text-gray-400 p-2">
            Pages: {ReadBook.totalPages}
          </span>
        </div>

        <div className=" flex gap-7 items-center text-lg my-3">
          <span className=" bg-blue-100 p-4 text-blue-400 rounded-2xl ">
            Category: {ReadBook.category}
          </span>
          <span className=" bg-amber-100 p-4  text-amber-400 rounded-2xl">
            Rating: {ReadBook.rating}
          </span>
          <button className=" btn rounded-2xl bg-green-400 p-4 text-white font-semibold">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyReadBook;

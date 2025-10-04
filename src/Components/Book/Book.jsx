import React from "react";
import StarIcon from "../../assets/StarIcon.png";
const Book = ({ BookData }) => {
  const { category, rating, tags, image, author, bookName } = BookData;
  return (
    <div className="card bg-base-100 w-96 shadow-xl p-4">
      <figure className="bg-[#f3f3f3] rounded-md">
        <img className=" w-[150px] h-[200px] p-5" src={image} alt="Shoes" />
      </figure>
      <div className="card-body space-y-2">
        <div className=" space-x-4 mb-6">
          <span className=" bg-[#F4FCF3] p-3 text-[#23BE0A] text-lg rounded-2xl shadow-sm ">
            {tags[0]}
          </span>
          <span className=" bg-[#F4FCF3] p-2 rounded-2xl shadow-sm text-[#23BE0A] text-lg">
            {tags[1]}
          </span>
        </div>
        <h2 className="card-title text-3xl font-bold">{bookName}</h2>
        <h3 className="text-xl">By: {author}</h3>
        <span className="text-lg text-gray-500">
          - - - - - - - - - - - - - - - - - - - - - - - -
        </span>
        <div className=" flex  justify-between items-center">
          <p className="text-lg font-semibold">{category}</p>
          <div className="flex items-center gap-3 ">
            <p className="text-lg font-semibold">{rating}</p>
            <img src={StarIcon} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;

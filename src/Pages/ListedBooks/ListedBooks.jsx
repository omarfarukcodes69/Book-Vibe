import React from "react";
import ReadList from "../ReadList/ReadList";

const ListedBooks = () => {
  return (
    <div>
      <div className="bg-gray-200 rounded w-[80%] mx-auto my-15">
        <h1 className="text-4xl font-bold text-center py-10">Books</h1>
      </div>
      <ReadList></ReadList>
    </div>
  );
};

export default ListedBooks;

import React, { Suspense } from "react";
import Book from "../../Components/Book/Book";
const Books = ({ BooksData }) => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center py-10">Books</h1>

      <div className="books grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20 justify-center items-center">
        <Suspense fallback={<span>Loading.............</span>}>
          {BooksData.map((BookData) => (
            <Book key={BookData.id} BookData={BookData}></Book>
          ))}
        </Suspense>
      </div>
    </div>
  );
};

export default Books;

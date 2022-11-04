import React, { useState, useEffect } from "react";
import { InputBook } from "./InputBook";

export const Overview = () => {
  const [books, setBooks] = useState([]);
  const handleBooks = (book) => {
    setBooks(books.concat(book));
  };

  return (
    <div className="relative w-full h-full">
      <InputBook addBook={handleBooks} />
    </div>
  );
};

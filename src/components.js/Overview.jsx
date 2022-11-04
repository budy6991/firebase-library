import React, { useState, useEffect } from "react";
import { DisplayBooks } from "./DisplayBooks";
import { InputBook } from "./InputBook";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/Firebase";

export const Overview = () => {
  const [books, setBooks] = useState([]);
  const handleBooks = (book) => {
    setBooks(books.concat(book));
    try {
      addDoc(collection(db, "Books"), {
        book: book,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {}, [books]);

  return (
    <div className="relative w-full h-full">
      <InputBook addBook={handleBooks} />
      <DisplayBooks books={books} />
    </div>
  );
};

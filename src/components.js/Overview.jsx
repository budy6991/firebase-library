import React, { useState, useEffect } from "react";
import { DisplayBooks } from "./DisplayBooks";
import { InputBook } from "./InputBook";
import { collection, addDoc, query, getDocs, doc } from "firebase/firestore";
import { db } from "../firebase/Firebase";

export const Overview = () => {
  const [books, setBooks] = useState([]);
  const booksCollectionRef = collection(db, "Books");
  const handleBooks = (book) => {
    setBooks(books.concat(book));
    try {
      addDoc(collection(db, "Books"), book);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getBooks = async () => {
      const data = await getDocs(booksCollectionRef);
      setBooks(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getBooks();
    console.log(books);
  }, []);

  return (
    <div className="relative w-full h-full">
      <InputBook addBook={handleBooks} />
      <DisplayBooks books={books} />
    </div>
  );
};

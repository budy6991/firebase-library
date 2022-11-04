import React from "react";
import { BookCard } from "./BookCard";

export const DisplayBooks = ({ books }) => {
  const displayAll = books.map((book) => {
    return (
      <BookCard
        name={book.name}
        author={book.author}
        pages={book.pages}
        read={book.read}
        id={book.id}
        key={book.id}
      />
    );
  });
  return <div className="flex gap-10 flex-wrap">{displayAll}</div>;
};

import React from "react";
import { BookCard } from "./BookCard";

export const DisplayBooks = ({ books, markAsRead }) => {
  const displayAll = books.map((book) => {
    return (
      <BookCard
        name={book.name}
        author={book.author}
        pages={book.pages}
        read={book.read}
        id={book.id}
        key={book.id}
        markAsRead={markAsRead}
      />
    );
  });
  return (
    <div className="flex gap-10 flex-wrap mt-[200px] p-5 justify-center">
      {displayAll}
    </div>
  );
};

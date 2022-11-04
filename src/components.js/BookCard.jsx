import React from "react";

export const BookCard = ({ name, author, pages, read, id }) => {
  return (
    <div className="flex w-[240px] h-[250px] h-full bg-amber-800 text-black justify-start text-black p-4">
      <div className="min-w-[20px] bg-amber-500 h-full"></div>
      <div className="flex flex-col justify-around  ml-[10px] w-full">
        <div>
          <h2>Name: {name}</h2>
        </div>
        <div>
          <h2>Author:{author}</h2>
        </div>
        <div>
          <h2>Pages: {pages}</h2>
        </div>
        <div>
          <h2>{read}</h2>
        </div>
        <div className="flex justify-evenly">
          <button>read</button>
          <button>remove</button>
        </div>
      </div>
    </div>
  );
};

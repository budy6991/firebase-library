import React from "react";

export const BookCard = ({ name, author, pages, read, id }) => {
  return (
    <div className="flex flex-col w-fit bg-white text-black p-7">
      <div className="h-full w-[5px] "></div>
      <div>
        <h2>{name}</h2>
      </div>
      <div>
        <h2>{author}</h2>
      </div>
      <div>
        <h2>{pages}</h2>
      </div>
      <div>
        <h2>{read}</h2>
      </div>
      <div>
        <button>read</button>
        <button>remove</button>
      </div>
    </div>
  );
};

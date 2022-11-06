import React, { useEffect, useState } from "react";

export const BookCard = ({
  name,
  author,
  pages,
  read,
  id,
  markAsRead,
  deleteBook,
}) => {
  const [isRead, setIsRead] = useState(read);

  const handleToggleRead = () => {
    setIsRead((current) => !current);
  };

  useEffect(() => {
    markAsRead(id, isRead);
  }, [isRead]);

  return (
    <div className="flex w-[240px] h-[250px] h-full bg-white text-black justify-start text-black p-4 rounded-r-xl shadow-lg transition-all hover:scale-105">
      <div className="w-[16px] bg-zinc-500 h-full"></div>
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
          <h2>{isRead}</h2>
        </div>
        <div className="flex justify-evenly">
          <button onClick={handleToggleRead}>Read {isRead ? "✓" : ""}</button>
          <button onClick={() => deleteBook(id)}>Remove</button>
        </div>
      </div>
    </div>
  );
};

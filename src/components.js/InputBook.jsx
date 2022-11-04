import React, { useState, useEffect } from "react";

export const InputBook = ({ addBook }) => {
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [pages, setPages] = useState("");
  const [isRead, setIsRead] = useState(false);
  const [book, setBook] = useState({});

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleAuthor = (e) => {
    setAuthor(e.target.value);
  };
  const handlePages = (e) => {
    setPages(e.target.value);
  };
  const handleSubmit = (e) => {
    let id = "id" + Math.random().toString(16).slice(2);
    e.preventDefault();
    setBook({
      name: name,
      author: author,
      pages: pages,
      read: isRead,
      id: id,
    });
    addBook(book);
  };

  return (
    <div className="absolute left-[50%]  translate-x-[-50%] top-5 items-center rounded-lg bg-zinc-800">
      <form>
        <div className="flex flex-col items-center gap-3 p-3 ">
          <div>
            <input
              type="text"
              placeholder="Name"
              className=""
              onChange={handleName}
            />
          </div>
          <div>
            <input type="text" placeholder="Author" onChange={handleAuthor} />
          </div>
          <div>
            <input type="number" placeholder="Pages" onChange={handlePages} />
          </div>
          <div className="flex gap-7 text-white ">
            <button className="bg-white rounded-full p-1 text-black hover:text-white hover:bg-black">
              Add
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

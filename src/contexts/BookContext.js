import React, { createContext, useState } from "react";

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    { title: "Just a Child", id: 1 },
    { title: "Tortured", id: 2 },
    { title: "The Fault in Our Stars", id: 3 },
  ]);

  return <BookContext.Provider value={{ books }}>{props.children}</BookContext.Provider>;
};

export default BookContextProvider;

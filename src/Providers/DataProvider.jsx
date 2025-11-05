import { createContext, useEffect, useState } from 'react';

/* eslint-disable react-refresh/only-export-components */
export const DataContext = createContext(null);


const DataProvider = ({ children }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('/BooksAPI.json')
      .then(res => res.json())
      .then(data => setBooks(data))
      .catch(err => console.error(err));
  }, []);

  const data = { books };

  return (
    <DataContext.Provider value={data}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;

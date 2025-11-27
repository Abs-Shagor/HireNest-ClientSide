import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
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

  // fetching jobs data
  const { data, isLoading, isError } = useQuery({
    queryKey: ['jobs'],
    queryFn: async () => {
      const res = await axios.get('http://localhost:3000/jobs');
      return res.data;
    },
  });
  let jobs = [...(data || [])].reverse();
  let privateJobs = jobs.filter(job => job.job_category === 'private')
  let govtJobs = jobs.filter(job => job.job_category === 'govt');

  const [searchedOption, setSearchedOption] = useState('');


  const All_data = { books, jobs, privateJobs, govtJobs, isLoading, isError, searchedOption, setSearchedOption };

  return (
    <DataContext.Provider value={All_data}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;

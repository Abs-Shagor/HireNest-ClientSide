import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { createContext, useContext, useEffect, useState } from 'react';
import { AuthContext } from './AuthProvider';

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

  // fetching user Data 
  const { data: usersData, isLoading: userLoading, isError: usersError } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await axios.get('http://localhost:3000/users');
      return res.data;
    },
  });
  const {user} = useContext(AuthContext);
  const userData = usersData?.find(userr =>
    userr.email === user?.email || userr.uid === user?.uid
  );

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
  const [checkedList, setCheckedList] = useState([]);

  const All_data = { books, jobs, privateJobs, govtJobs, isLoading, isError, searchedOption, setSearchedOption, checkedList, setCheckedList, userData, userLoading };

  return (
    <DataContext.Provider value={All_data}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;

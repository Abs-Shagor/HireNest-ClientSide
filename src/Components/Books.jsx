import React, { useContext, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { DataContext } from '../Providers/DataProvider';

const Books = () => {
    // To show the upperside of the page we use the below method
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    const { books } = useContext(DataContext);
    const navigate = useNavigate();

    return (
        <div>
            <button onClick={() => navigate('/')} className="flex items-center gap-1 text-[#003D20]  font-semibold cursor-pointer mt-10"><FaArrowLeft /><p>Back to home</p></button>
            <div>
                <h1 className='text-[32px] text-[#003D20] text-center font-semibold  my-10  '>Books</h1>
                <div className='grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 md:gap-5 lg:gap-10 justify-items-center '>
                    {
                        books.map(bookkk => {
                            return (
                                books.map(book => {
                                    return (
                                        <div key={book.bookId} className='max-w-[300px] w-full border border-[#93c0b4] rounded-xl shadow-md p-5 '>
                                            <div className='bg-[#edf4f4] p-5 flex justify-center rounded-xl '>
                                                <img src={book.image} alt="" className='h-[200px] w-[140px] rounded-md shadow-[0_7px_7px_gray]' />
                                            </div>
                                            <div>
                                                <div className='flex gap-3 mt-3'>
                                                    {
                                                        book.tags.map(tag => {
                                                            return (
                                                                <button key={tag} className='btn bg-[#edf4f4] text-[#007456] text-[12px] rounded-2xl '> {tag} </button>
                                                            )
                                                        })
                                                    }
                                                </div>

                                                <h1 className='text-[18px] text-[#003D20] font-semibold mt-3'  >{book.bookName}</h1>
                                                <p className='text-[14px] font-medium text-gray-600 mt-2 '>Author: {book.author} </p>
                                                <hr className='my-3 text-gray-300' />
                                                <div className='flex justify-between  items-center  '>
                                                    <NavLink to={`/bookDetails/${book.bookId}`} className="underline text-[#007456]" >Show Details</NavLink>
                                                    <div className='flex gap-1 items-center'>
                                                        <p className='text-[14px] font-medium text-gray-600'>Rating: {book.rating}</p>
                                                        <FaStar className="w-4 h-4 text-[#FFD700] " />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Books;
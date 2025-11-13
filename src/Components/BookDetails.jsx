import { useEffect, useContext } from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaArrowLeft } from "react-icons/fa";
import { DataContext } from '../Providers/DataProvider';


const BookDetails = () => {
    const navigate = useNavigate();
    const { books } = useContext(DataContext);

    // To show the upperside of the page we use the below method
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    // loading books data
    const param = useParams();
    const book_Id = param.bookId;
    const book = books.find(b => b.bookId == book_Id);


    return (
        <div>
            <button onClick={() => navigate(-1)} className="flex items-center gap-1 text-[#003D20] font-semibold cursor-pointer mt-10"><FaArrowLeft /><p>Back to home</p></button>

            <div className=' flex flex-col lg:flex-row gap-10 mb-10 mt-10 sm:mt-20'>
                <div className='flex-1/3 bg-green-50 flex justify-center rounded-xl  py-15'>
                    <img src={book.image} alt="" className='h-[321px] w-[221px] rounded-md shadow-[0_10px_10px_gray] -rotate-15' />
                </div>

                <div className='flex-2/3'>
                    <h1 className=' text-[40px] text-[#003D20] font-medium '>{book.bookName}</h1>
                    <p className=' font-medium text-gray-600 '>Author: {book.author} </p>
                    <hr className='mt-3 mb-6 text-gray-300' />
                    <p className='text-[#003D20] font-semibold'>Review: </p>
                    <span className='text-gray-600 text-[14px] '>{book.review}</span>

                    <div className='flex gap-3 mt-3'>
                        {
                            book.tags.map((tag, index) => {
                                return (
                                    <p key={index} className=' text-[#003D20] italic font-semibold '>#{tag} </p>
                                )
                            })
                        }
                    </div>
                    <div className='flex justify-end  mt-10'>
                        <div className='max-w-[330px] w-full'>
                            <div className='flex justify-between gap-4'>
                                <div>
                                    <p className='text-gray-600'>Name of Publisher:</p>
                                    <p className='text-gray-600'>Year of Publishing</p>
                                    <p className='text-gray-600'>Number of Pages:</p>
                                    <p className='text-gray-600'>Category:</p>
                                    <p className='text-gray-600'>Rating:</p>
                                </div>
                                <div>
                                    <p className='text-[#003D20] font-semibold'>{book.publisher}</p>
                                    <p className='text-[#003D20] font-semibold'>{book.yearOfPublishing}</p>
                                    <p className='text-[#003D20] font-semibold'>{book.totalPages}</p>
                                    <p className='text-[#003D20] font-semibold'>{book.category}</p>
                                    <p className='text-[#003D20] font-semibold'>{book.rating}</p>
                                </div>
                            </div>
                            <div className='flex gap-4 justify-between mt-5 '>
                                <button className=' btn bg-[#edf4f4] border border-[#93c0b4] text-[#007456] hover:text-white hover:bg-[#007456] shadow-2xl px-6'>Mark as Read</button>
                                <button className=' btn bg-[#edf4f4] border border-[#93c0b4] text-[#007456] hover:text-white hover:bg-[#007456] shadow-2xl px-6'>Add to Wishlist</button>
                            </div>
                        </div>
                    </div>


                </div>

            </div>
        </div>
    );
};

export default BookDetails;
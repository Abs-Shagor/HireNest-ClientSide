import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { useNavigate } from 'react-router-dom';
import { IoMdPhotos } from "react-icons/io";
import { FaVideo } from "react-icons/fa";
import { RxActivityLog } from "react-icons/rx";
import { toast } from 'react-toastify';
import { FaUser } from "react-icons/fa";
import { DataContext } from '../Providers/DataProvider';

const HomeUserPost = () => {
    const { user } = useContext(AuthContext);
    const { userData } = useContext(DataContext);
    const navigate = useNavigate();

    return (
        <div className=' bg-green-50 border border-[#93c0b4] sm:border-white shadow2 rounded-2xl p-3 sm:p-5'>
            <div className="flex gap-2 sm:gap-3">
                <div onClick={() => navigate('/profile')} className='border border-gray-300 shadow2 rounded-full cursor-pointer'>
                    {
                        (user?.photoURL || userData?.photoURL) ?
                            <div className='p-0.5'>
                                <img src={user?.photoURL || userData?.photoURL} alt="img" className="w-12 h-11 rounded-full" referrerPolicy="no-referrer" />
                            </div>
                            :
                            <div className='p-1'>
                                <FaUser className='text-[#003D20] w-8 h-8 rounded-full ' />
                            </div>

                    }
                </div>
                <input onClick={() => navigate('/post')} type="text" name="post" id="" readOnly placeholder="Start a post" className="w-full bg-white rounded-full outline outline-gray-300 placeholder-[#007456] text-[14px] sm:text-[16px] hover:bg-green-50 hover:outline-gray-400 font-semibold cursor-pointer px-3  sm:px-5" />
            </div>
            <div onClick={() => navigate('/post')} className='flex justify-evenly text-[14px] sm:text-[16px] text-[#007456] mt-5'>
                <div className='flex gap-2 items-center cursor-pointer '>
                    <IoMdPhotos className='h-5 w-5' />
                    <p>Photo</p>
                </div>
                <div className='flex gap-2 items-center cursor-pointer'>
                    <FaVideo className='h-5 w-5' />
                    <p>Photo</p>
                </div>
                <div className='flex gap-2 items-center cursor-pointer'>
                    <RxActivityLog className=' w-5' />
                    <p>Activity</p>
                </div>
            </div>
        </div>
    );
};

export default HomeUserPost;
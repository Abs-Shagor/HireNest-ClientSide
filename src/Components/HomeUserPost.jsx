import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { useNavigate } from 'react-router-dom';
import { IoMdPhotos } from "react-icons/io";
import { FaVideo } from "react-icons/fa";
import { RxActivityLog } from "react-icons/rx";
import { TiArrowSortedDown } from "react-icons/ti";
import { toast } from 'react-toastify';
import { FaUser } from "react-icons/fa";

const HomeUserPost = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    function handlePhotoUpload() {
        toast.warning('This feature is under development.')
    }



    return (
        <div>
            <div className=' bg-green-50 border border-[#93c0b4] sm:border-white shadow2 rounded-2xl p-5'>
                <div className="flex gap-3">
                    <div onClick={() => navigate('/profile')} className='cursor-pointer'>
                        {
                            user?.photoURL ? (
                                <img src={user.photoURL} alt="img" className="w-12 border border-gray-300 shadow2 rounded-full p-0.5" referrerPolicy="no-referrer" />
                            ) : (
                                <FaUser className='text-[#003D20] w-12 h-12 rounded-full border border-gray-300 p-1 ' />
                            )
                        }
                    </div>
                    <input onClick={() => navigate('/post')} type="text" name="post" id="" readOnly placeholder="Start a post" className="w-full bg-white rounded-full outline outline-gray-300 placeholder-[#007456] hover:bg-green-50 hover:outline-gray-400 font-semibold cursor-pointer  px-5" />
                </div>
                <div onClick={handlePhotoUpload} className='flex justify-evenly text-[#007456] mt-5'>
                    <div className='flex gap-2 items-center cursor-pointer '>
                        <IoMdPhotos className='h-5 w-5' />
                        <p>Photo</p>
                    </div>
                    <div className='flex gap-2 items-center cursor-pointer'>
                        <FaVideo className='h-5 w-5' />
                        <p>Photo</p>
                    </div>
                    <div className='flex gap-2 items-center cursor-pointer'>
                        <RxActivityLog className='h-5 w-5' />
                        <p>Activity</p>
                    </div>
                </div>
            </div>
            <div className='flex items-center gap-2'>
                <hr className="flex-1 text-[#93c0b4] w-full my-5" />
                <div className='flex items-center gap-1'>
                    <p className='text-[14px] text-gray-500 '>Sort by: </p>
                    <div class="dropdown dropdown-end">
                        <div tabindex="0" role="button" class="text-[14px] text-[#003D20] flex items-center cursor-pointer">Click <TiArrowSortedDown className='h-5 w-5' /></div>
                        <ul tabindex="-1" class="dropdown-content menu bg-green-50 rounded-box z-1 w-52 p-2 shadow-sm">
                            <li><a>Recent</a></li>
                            <li><a>Rating</a></li>
                            <li><a>Relevance</a></li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default HomeUserPost;
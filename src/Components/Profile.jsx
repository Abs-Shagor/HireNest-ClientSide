import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { GrValidate } from "react-icons/gr";
import Swal from 'sweetalert2';


const Profile = () => {
    // To show the upperside of the page we use the below method
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    //
    const { user } = useContext(AuthContext);
    const RegisterDate = new Date(user.metadata.creationTime).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' });

    //
    function handleProfilePicture() {
        Swal.fire({
            title: "",
            html: `<div style="display:flex; justify-content:center;">
                    <img src="${user.photoURL}" referrerpolicy="no-referrer" class="h-20 w-20 rounded-full" />
                    </div>
                    `,
            showConfirmButton: true,
        });
    }

    return (
        <div className='flex gap-15 my-20'>
            <div className='max-w-[400px] flex flex-col gap-2 items-center  bg-green-50 border border-[#93c0b4] sm:border-white shadow2 rounded-2xl p-5'>
                <div onClick={handleProfilePicture} className="border  border-[#007456] shadow2 rounded-full p-0.5">
                    <img src={user.photoURL} alt="img" className="w-20 h-20 rounded-full" referrerPolicy="no-referrer" />
                </div>
                <div>
                    <h3 className=' text-[20px] text-[#003D20] text-center font-semibold flex items-center gap-2'><span>{user.displayName}</span><GrValidate /></h3>
                    <p className='text-[#48928e] text-center'>Job Seeker</p>
                </div>
                <div className='flex justify-evenly w-full mt-5'>
                    <div className='flex flex-col items-center text-[#007456]'>
                        <p className='font-bold'>0</p>
                        <p className=''>Followers</p>
                    </div>
                    <div className='flex flex-col items-center text-[#007456]'>
                        <p className='font-bold'>0</p>
                        <p className=''>Following</p>
                    </div>
                </div>
                <hr className="text-[#93c0b4] w-full my-5" />
                <div className='flex gap-5 justify-between items-center'>
                    <div className='text-[#003D20] font-semibold space-y-1 '>
                        <p>Last Seen:</p>
                        <p>Email:</p>
                        <p>Register:</p>
                    </div>
                    <div className='text-[#48928e] space-y-1 '>
                        <p>Online</p>
                        <p>{user.email}</p>
                        <p>{RegisterDate}</p>
                    </div>
                </div>

            </div>
            <div className='flex-1 bg-green-50 border border-[#93c0b4] sm:border-white shadow2 rounded-2xl'>

                <div className='flex justify-between items-center p-5'>
                    <h3 className=' text-[20px] text-[#003D20] font-semibold'>Edit Profile</h3>
                    <div className='flex gap-2 items-center'>
                        <p className='text-[14px] text-[#007456] '>Available for hire?</p>
                        <input type="checkbox" value="synthwave" class="toggle toggle-accent" />
                    </div>

                </div>
                <hr className="text-[#93c0b4]" />
                <form className="grid gap-5 p-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                            <p className="text-[#007456] mb-2">Full Name</p>
                            <input type="text" name="name" id="" placeholder="Enter name" required defaultValue={user.displayName} className="w-full bg-white text-[14px] text-[#003D20] shadow-[0_0_1px_#9f9494] rounded-sm outline-none focus:ring-1 focus:ring-[#9f9494] transition placeholder-gray-400 p-2" />
                        </div>
                        <div>
                            <p className="text-[#007456] mb-2">UserName</p>
                            <input type="text" name="price" id="" placeholder="username" required readOnly defaultValue={user.displayName.split(" ")[0].toLowerCase() +
                                Math.floor(Math.random() * 9000 + 1000)} className="w-full bg-white text-[14px] text-[#003D20]  shadow-[0_0_1px_#9f9494] rounded-sm outline-none focus:ring-1 focus:ring-[#9f9494] transition placeholder-gray-400 p-2" />
                        </div>
                        <div>
                            <p className="text-[#007456] mb-2">Email</p>
                            <input type="email" name="name" id="" placeholder="Enter Email" required defaultValue={user.email} className="w-full bg-white text-[14px] text-[#003D20] shadow-[0_0_1px_#9f9494] rounded-sm outline-none focus:ring-1 focus:ring-[#9f9494] transition placeholder-gray-400 p-2" />
                        </div>
                        <div>
                            <p className="text-[#007456] mb-2">Password</p>
                            <input type="password" name="name" id="" placeholder="Password" required  defaultValue={user.displayName} className="w-full bg-white text-[14px] text-[#003D20] shadow-[0_0_1px_#9f9494] rounded-sm outline-none focus:ring-1 focus:ring-[#9f9494] transition placeholder-gray-400 p-2" />
                        </div>
                        <div>
                            <p className="text-[#007456] mb-2">Position</p>
                            <input type="text" name="name" id="" placeholder="Enter Position" required defaultValue={'Job Seeker'} className="w-full bg-white text-[14px] text-[#003D20] shadow-[0_0_1px_#9f9494] rounded-sm outline-none focus:ring-1 focus:ring-[#9f9494] transition placeholder-gray-400 p-2" />
                        </div>
                        <div>
                            <p className="text-[#007456] mb-2">Address</p>
                            <input type="text" name="name" id="" placeholder="Enter Address" required defaultValue={'Chittagong, Bangladesh'} className="w-full bg-white text-[14px] text-[#003D20] shadow-[0_0_1px_#9f9494] rounded-sm outline-none focus:ring-1 focus:ring-[#9f9494] transition placeholder-gray-400 p-2" />
                        </div>


                    </div>
                    <button className="max-w-[200px] btn bg-[#007456] hover:bg-[#016147] text-white shadow-[0_1px_2px_#007456] hover:text-white rounded-full block ml-auto"> Save Changes </button>
                </form>
            </div>
        </div>
    );
};

export default Profile;
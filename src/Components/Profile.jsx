import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { GrValidate } from "react-icons/gr";
import Swal from 'sweetalert2';
import { FaEdit } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaUserEdit } from "react-icons/fa";
import { DataContext } from '../Providers/DataProvider';
import { toast } from 'react-toastify';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';


const Profile = () => {
    // To show the upperside of the page we use the below method
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    //
    const { user, setUserInformation } = useContext(AuthContext);
    const { userData, userLoading } = useContext(DataContext);
    // console.log(userData);
    const RegisterDate = new Date(user.metadata.creationTime).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' });

    // handling profile picture showcase
    function handleProfilePicture() {
        Swal.fire({
            title: "",
            html: `<div style="display:flex; justify-content:center;">
                    <img src="${user.photoURL}" referrerpolicy="no-referrer" className="h-40 w-40 rounded-full" />
                    </div>
                    `,
            showConfirmButton: true,
        });
    }

    //Updating user data
    const queryClient = useQueryClient();
    const updateMutation = useMutation({
        mutationFn: async (updatedData) => {
            // Update Firebase
            await setUserInformation({
                displayName: updatedData.name,
            });

            // Update MongoDB
            const res = await axios.put(`http://localhost:3000/users/${user.email}`, {
                fullName: updatedData.name,
                position: updatedData.position,
                phone: updatedData.phone,
                address: updatedData.address,
                email: user.email
            });
            return res.data;
        },
        onSuccess: () => {
            toast.success('Profile updated!');
            // Invalidate and refetch user data
            queryClient.invalidateQueries(['users']);
            queryClient.invalidateQueries(['user', user.uid]);
        },
        onError: () => {
            toast.error('Update failed!');
        }
    });
    function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const updatedData = Object.fromEntries(formData.entries());

        updateMutation.mutate(updatedData);
    }

    return (
        <div className='flex flex-col md:flex-row gap-5 lg:gap-10 my-10 '>
            <div className='max-w-[360px] md:max-w-[330px] w-full mx-auto flex flex-col gap-2 items-center  bg-green-50 border border-[#93c0b4] sm:border-white shadow2 rounded-2xl p-5'>
                <div onClick={handleProfilePicture} className="border  border-[#007456] shadow2 rounded-full p-0.5">
                    <img src={user?.photoURL || userData?.photoURL} alt="img" className="w-20 h-20 rounded-full" referrerPolicy="no-referrer" />
                </div>
                <div>
                    <h3 className=' text-[20px] text-[#003D20] text-center font-semibold flex items-center gap-2'><span>{userData?.fullName || 'Full Name'}</span><GrValidate /></h3>
                    <p className='text-[#48928e] text-center'>{userData?.position || 'Job Seeker'}</p>
                </div>
                <div className='flex justify-evenly w-full mt-3'>
                    <div className='flex flex-col items-center text-[#007456]'>
                        <p className='font-bold'>0</p>
                        <p className=''>Followers</p>
                    </div>
                    <div className='flex flex-col items-center text-[#007456]'>
                        <p className='font-bold'>0</p>
                        <p className=''>Following</p>
                    </div>
                </div>
                <hr className="text-[#93c0b4] w-full my-3" />
                <div className='flex gap-5 justify-between items-center'>
                    <div className='text-[#003D20] font-semibold space-y-1 '>
                        <p>Last Seen:</p>
                        <p>Phone:</p>
                        <p>Email:</p>
                        <p>Register:</p>
                        <p>Address:</p>
                    </div>
                    <div className='text-[#48928e] space-y-1 '>
                        <p>Online</p>
                        <p className='max-w-[190px] truncate '>{userData?.phone || '+880 XXXXXXXX'}</p>
                        <p className='max-w-[190px] truncate '>{userData?.email || user.email}</p>
                        <p>{RegisterDate}</p>
                        <p className='max-w-[190px] truncate '>{userData?.address || 'Set your address'}</p>
                    </div>
                </div>

            </div>
            <div className='flex-1 bg-green-50 border border-[#93c0b4] sm:border-white shadow2 rounded-2xl'>

                <div className='flex justify-between items-center p-5'>
                    <h3 className=' text-[20px] text-[#003D20] font-semibold flex items-center gap-2'>Edit Profile<FaUserEdit className='w-6 h-6' /></h3>
                    <div className='flex gap-2 items-center'>
                        <p className='text-[14px] text-[#007456] '>Available for hire?</p>
                        <input type="checkbox" value="synthwave" className="toggle toggle-accent" />
                    </div>

                </div>
                {/* <hr className="text-[#93c0b4]" /> */}
                <form onSubmit={handleSubmit} className="grid gap-5 p-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                            <p className="text-[#007456] mb-2">Full Name</p>
                            <input type="text" name="name" placeholder="Enter name"  required defaultValue={userData?.fullName || 'Set your name'} className="w-full bg-white text-[14px] text-[#003D20] shadow-[0_0_1px_#9f9494] rounded-sm outline-none focus:ring-1 focus:ring-[#9f9494] transition placeholder-gray-400 p-2" />
                        </div>
                        <div>
                            <p className="text-[#007456] mb-2">Position</p>
                            <input type="text" name="position" placeholder="Enter Position" required defaultValue={userData?.position || 'Job Seeker'} className="w-full bg-white text-[14px] text-[#003D20]  shadow-[0_0_1px_#9f9494] rounded-sm outline-none focus:ring-1 focus:ring-[#9f9494] transition placeholder-gray-400 p-2" />
                        </div>
                        <div>
                            <p className="text-[#007456] mb-2">Email</p>
                            <input type="email" name="email" placeholder="Enter Email" required readOnly defaultValue={userData?.email || user.email} className="w-full bg-white text-[14px] text-[#003D20] shadow-[0_0_1px_#9f9494] rounded-sm outline-none focus:ring-1 focus:ring-[#9f9494] transition placeholder-gray-400 p-2" />
                        </div>
                        <div>
                            <Link to={'/forgotPasswordPage1'} className="text-[#007456] mb-2 flex items-center gap-1">Password<FaEdit className='text-[#003D20] ' /></Link>
                            <input type="password" name="password" placeholder="Password" required readOnly defaultValue={'********'} className="w-full bg-white text-[14px] text-[#003D20] shadow-[0_0_1px_#9f9494] rounded-sm outline-none focus:ring-1 focus:ring-[#9f9494] transition placeholder-gray-400 p-2" />
                        </div>
                        <div>
                            <p className="text-[#007456] mb-2">Phone</p>
                            <input type="text" name="phone" placeholder="Enter Phone Number" required defaultValue={userData?.phone || '+880 XXXXXXXX'} className="w-full bg-white text-[14px] text-[#003D20] shadow-[0_0_1px_#9f9494] rounded-sm outline-none focus:ring-1 focus:ring-[#9f9494] transition placeholder-gray-400 p-2" />
                        </div>
                        <div>
                            <p className="text-[#007456] mb-2">Address</p>
                            <input type="text" name="address" placeholder="Enter Address" required defaultValue={userData?.address || 'Set your address'} className="w-full bg-white text-[14px] text-[#003D20] shadow-[0_0_1px_#9f9494] rounded-sm outline-none focus:ring-1 focus:ring-[#9f9494] transition placeholder-gray-400 p-2" />
                        </div>


                    </div>
                    <button className="max-w-[200px] btn bg-[#007456] hover:bg-[#016147] text-white shadow-[0_1px_2px_#007456] hover:text-white rounded-full block ml-auto"> Save Changes </button>
                </form>
            </div>
        </div>
    );
};

export default Profile;
import { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FiUser } from "react-icons/fi";
import { AuthContext } from '../Providers/AuthProvider';
import { toast } from 'react-toastify';
import { FaUser } from "react-icons/fa";
import { DataContext } from '../Providers/DataProvider';


const Navbar = () => {
    const { setCheckedList } = useContext(DataContext);
    const [open, setOpen] = useState(false);
    function hamburger() {
        setOpen(!open);
    }

    // 
    const { user, signout } = useContext(AuthContext);
    const { userData } = useContext(DataContext);
    // console.log(user?.photoURL);
    // to show by which method(provider: google, github, email/pass etc) the user login
    let providerName = user?.providerData[0]?.providerId || "";
    // console.log(providerName);

    function handleLogout() {
        signout();
        toast.success("Logged out successfully!")
    }


    return (
        <div className='sticky top-0 z-1000 '>
            <div className=' bg-white/50 backdrop-blur-2xl shadow2 py-3'  >
                <div className='flex justify-between items-center max-w-[1282px] mx-auto px-2  '>
                    <div className='flex gap-1 items-center '>
                        <div onClick={hamburger} className='md:hidden' >
                            {
                                open === true ?
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="h-6 w-6 sm:h-7 sm:w-7 stroke-current cursor-pointer">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                    </svg>
                                    :
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="h-6 w-6 sm:h-7 sm:w-7 stroke-current cursor-pointer">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                                    </svg>
                            }
                        </div>
                        <Link to={'/'} className='hidden md:block'>
                            <img className='w-7 lg:w-9 rounded-sm  ' src="HN3.png" alt="img" />
                        </Link>
                        <Link to={'/'} onClick={() => setCheckedList([])} className='text-[22px] lg:text-[30px] text-[#003D20] font-semibold '>HireNest</Link>
                        {/* <input type="text" name="" id="" placeholder='Search' className='border border-[#007456] px-3 py-1 rounded-full' /> */}
                    </div>

                    <div className='hidden md:block'>
                        <div className=' flex items-center md:gap-3 lg:gap-5 font-semibold'>
                            <NavLink to={'/'} onClick={() => setCheckedList([])}>Home</NavLink>
                            <NavLink to={'/privateJob'} onClick={() => setCheckedList([])}  >Private Jobs</NavLink>
                            <NavLink to={'/govtJob'} onClick={() => setCheckedList([])} className={'lg:hidden'}>Govt. Jobs</NavLink>
                            <NavLink to={'/govtJob'} onClick={() => setCheckedList([])} className={'hidden lg:block'}>Government Jobs</NavLink>
                            <NavLink to={'/contactUs'} onClick={() => setCheckedList([])} >Contact Us</NavLink>
                        </div>
                    </div>

                    <div className='flex items-center gap-2 lg:gap-3 ' >
                        <Link to={'/post'} className="btn bg-[#007456] hover:bg-[#016147] text-white shadow-[0_1px_2px_#007456] hover:text-white rounded-full ">Post a Job</Link>

                        {
                            (user && (user.emailVerified || providerName === "google.com" || providerName === 'github.com')) ?
                                <div className="dropdown dropdown-end ">
                                    <div tabIndex="0" role="button" className='flex items-center gap-2' >
                                        <Link to={'/'} className="hidden lg:block text-[#003D20] font-semibold max-w-[150px] truncate ml-2"><span>Hello, </span > {user?.displayName?.split(' ')[0]}</Link>
                                        <div className="bg-green-50 border border-[#007456] shadow2 rounded-full cursor-pointer ">
                                            {
                                                (user?.photoURL || userData?.photoURL) ?
                                                    <div className='p-0.5'>
                                                        <img src={user?.photoURL || userData?.photoURL} alt="img" className="w-8 h-8 rounded-full" referrerPolicy="no-referrer" />
                                                    </div>
                                                    :
                                                    <div className='p-1'>
                                                        <FaUser className='text-[#003D20] w-7 h-7 rounded-full' />
                                                    </div>

                                            }
                                        </div>
                                    </div>
                                    <ul tabIndex="-1" className="bg-[#007456] text-white font-semibold dropdown-content menu  rounded-box z-1 w-52 p-2 shadow-sm mt-4">
                                        <li className='hover:bg-[#47b396] rounded-md'><Link to={'/profile'}>User Profile</Link></li>
                                        <li className='hover:bg-[#47b396] rounded-md'><Link to={'/forgotPasswordPage1'}>Change Password</Link></li>
                                        <li className='hover:bg-[#47b396] rounded-md'><Link to={'/jobStatics'}>Job Statistics</Link></li>
                                        <li className='hover:bg-[#47b396] rounded-md'><Link to={'/profile'}>Account Settings</Link></li>
                                        <li className='hover:bg-[#47b396] rounded-md'><Link to={'/'} onClick={handleLogout}>Logout</Link></li>
                                    </ul>
                                </div>
                                :
                                <Link to={'/login'} className="btn btn-ghost border bg-green-50 border-[#007456] text-[#007456] shadow-[0_1px_2px_#007456] hover:text-white hover:bg-[#007456] rounded-full "><FiUser />Login</Link>
                        }
                    </div>
                </div>
            </div>
            <div className={`absolute left-0 top-16 z-1000 md:hidden transition-transform duration-300 ease-in-out ${open ? 'translate-x-0' : '-translate-x-full'}`}>
                <nav className="flex flex-col min-h-screen min-w-screen  bg-[#007456] text-white pl-2 ">
                    <NavLink to={'/'} className="border-b border-gray-400 hover:bg-[#1b9373] pt-4 sm:pt-5 ">HOME</NavLink>
                    <NavLink to={'/privateJob'} className="border-b border-gray-400 hover:bg-[#1b9373] pt-4 sm:pt-5 ">Private Jobs</NavLink>
                    <NavLink to={'/govtJob'} className="border-b border-gray-400 hover:bg-[#1b9373] pt-4 sm:pt-5 ">Government Jobs</NavLink>
                    <NavLink to={'/contactUs'} className="border-b border-gray-400 hover:bg-[#1b9373] pt-4 sm:pt-5 ">Contact Us</NavLink>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;
import Marquee from "react-fast-marquee";
import { IoSearchOutline } from "react-icons/io5";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { toast } from "react-toastify";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { useContext } from "react";
import { DataContext } from "../Providers/DataProvider";
import { Link, Outlet } from "react-router-dom";

const Home = () => {
    const { books } = useContext(DataContext);

    function handleSubscribe() {
        toast.warning('This feature is under development.');
    }

    return (
        <div className='my-10 sm:my-20'>
            <div className='max-w-[330px] sm:max-w-[500px] mx-auto flex flex-col gap-1 items-center '>
                <h3 className='text-[20px] sm:text-[30px] text-[#003D20] font-semibold'>Find your dream job with __Hirenest</h3>
                <div className='flex items-center gap-1'>
                    <p className='text-clr2 '>500+ Jobs</p>
                    <div className='flex -space-x-3'>
                        <img src="../../public/company_logo/1.jfif" alt="" className=' w-7 h-7 rounded-full border-2 border-white' />
                        <img src="../../public/company_logo/2.jfif" alt="" className=' w-7 h-7 rounded-full border-2 border-white' />
                        <img src="../../public/company_logo/3.jfif" alt="" className=' w-7 h-7 rounded-full border-2 border-white' />
                        <img src="../../public/company_logo/4.jfif" alt="" className=' w-7 h-7 rounded-full border-2 border-white' />
                    </div>
                </div>
                <div className="relative w-full mt-3">
                    <IoSearchOutline className="absolute left-4 top-1/2 -translate-y-1/2 text-[#769788] w-5 h-5 " />
                    <input
                        type="text"
                        placeholder="Search your dream job..."
                        required
                        className="w-full bg-[#fbfdfd] placeholder-[#769788] text-[#003D20] rounded-full outline-none border border-[#c5ded7] focus:ring-1  focus:border-[#007456] transition shadow2 pl-10 pr-10 py-2"
                    />
                    <FaArrowCircleRight className="absolute right-2 top-1/2 -translate-y-1/2 text-[#007456] hover:text-[#003D20] cursor-pointer w-7 h-7 " />
                </div>
                <div className="max-w-[400px] mx-auto flex flex-wrap justify-center  gap-2 mt-3">
                    <span className="bg-[#fbfdfd] text-[#003D20] text-[14px] hover:bg-[#007456] hover:text-white cursor-pointer border border-[#c5ded7] rounded-full px-2 py-1 ">web developer</span>
                    <span className="bg-[#fbfdfd] text-[#003D20] text-[14px] hover:bg-[#007456] hover:text-white cursor-pointer border border-[#c5ded7] rounded-full px-2 py-1 ">Designer</span>
                    <span className="bg-[#fbfdfd] text-[#003D20] text-[14px] hover:bg-[#007456] hover:text-white cursor-pointer border border-[#c5ded7] rounded-full px-2 py-1 ">project manager</span>
                    <span className="bg-[#fbfdfd] text-[#003D20] text-[14px] hover:bg-[#007456] hover:text-white cursor-pointer border border-[#c5ded7] rounded-full px-2 py-1 ">UI/UX</span>
                    <span className="bg-[#fbfdfd] text-[#003D20] text-[14px] hover:bg-[#007456] hover:text-white cursor-pointer border border-[#c5ded7] rounded-full px-2 py-1 ">SQA</span>
                    <span className="bg-[#fbfdfd] text-[#003D20] text-[14px] hover:bg-[#007456] hover:text-white cursor-pointer border border-[#c5ded7] rounded-full px-2 py-1 ">Ai engineer</span>
                </div>
            </div>
            {/* <Marquee pauseOnHover={true} speed={50} className="text-clr3 my-10" >
                <div className="flex items-center gap-1 mr-7">
                    <img src="../../public/company_logo/2.jfif" alt="logo2" className="w-5 h-5 " />
                    <p>AppsCode Inc.</p>
                </div>
                <div className="flex items-center gap-1 mr-7">
                    <img src="../../public/company_logo/3.jfif" alt="logo3" className="w-5 h-5 " />
                    <p>BRAC</p>
                </div>
                <div className="flex items-center gap-1 mr-7">
                    <img src="../../public/company_logo/1.jfif" alt="logo1" className="w-5 h-5 " />
                    <p>Appifylab</p>
                </div>
                <div className="flex items-center gap-1 mr-7">
                    <img src="../../public/company_logo/4.jfif" alt="logo4" className="w-5 h-5 " />
                    <p>Therap BD Ltd.</p>
                </div>
                <div className="flex items-center gap-1 mr-7">
                    <img src="../../public/company_logo/7.jfif" alt="logo4" className="w-5 h-5 " />
                    <p>Brain Station 23</p>
                </div>
                <div className="flex items-center gap-1 mr-7">
                    <img src="../../public/company_logo/8.jfif" alt="logo4" className="w-5 h-5 " />
                    <p>Craftsmen</p>
                </div>
                <div className="flex items-center gap-1 mr-7">
                    <img src="../../public/company_logo/5.jfif" alt="logo1" className=" h-5 border border-[#007456] " />
                    <p>SELISE Group</p>
                </div>
                <div className="flex items-center gap-1 mr-7">
                    <img src="../../public/company_logo/9.jfif" alt="logo4" className="w-5 h-5 " />
                    <p>Robi Axiata PLC.</p>
                </div>
                <div className="flex items-center gap-1 mr-7">
                    <img src="../../public/company_logo/10.jfif" alt="logo4" className="w-5 h-5 " />
                    <p>Bybit</p>
                </div>
                <div className="flex items-center gap-1 mr-7">
                    <img src="../../public/company_logo/11.jfif" alt="logo4" className="w-5 h-5 " />
                    <p>Field Nation</p>
                </div>
                <div className="flex items-center gap-1 mr-7">
                    <img src="../../public/company_logo/12.jfif" alt="logo4" className="w-5 h-5 " />
                    <p>foodpanda</p>
                </div>
                <div className="flex items-center gap-1 mr-7">
                    <img src="../../public/company_logo/13.jfif" alt="logo4" className="w-5 h-5 " />
                    <p>BRAC Arong</p>
                </div>
                <div className="flex items-center gap-1 mr-7">
                    <img src="../../public/company_logo/14.jfif" alt="logo4" className="w-5 h-5 " />
                    <p>Bitget</p>
                </div>
            </Marquee> */}
            {/* <h3 className="text-clr3 text-[24px] text-center font-semibold mt-10">Explore the latest job openning</h3> */}



            <div className="flex  gap-10">

                {/* Left sidebar: Filter */}
                <div className="max-w-[300px] w-full ">
                    <div>
                        <div className="flex justify-between items-center gap-2">
                            <h4 className="text-[20px] text-clr3 font-semibold ">All Filter</h4>
                            <p onClick={() => document.getElementById("filters-form").reset()} className="text-[#48928e] hover:text-[#003D20] cursor-pointer ">Clear All</p>
                        </div>
                        <hr className="text-[#007456] mt-2 mb-4" />
                    </div>

                    <form id="filters-form" className="join join-vertical text-[#003D20] bg-base-100 w-full ">
                        <div className="collapse collapse-arrow join-item border-base-300 border">
                            <input type="radio" name="my-accordion-4" defaultChecked />
                            <div className="collapse-title font-semibold">Job Type</div>
                            <div className="collapse-content text-sm space-y-3 ">
                                <div className="flex gap-2 items-center">
                                    <input type="checkbox" className="checkbox checkbox-success border-gray-400 w-5 h-5 rounded-md " />
                                    <p>Full Time (23)</p>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <input type="checkbox" className="checkbox checkbox-success border-gray-400 w-5 h-5 rounded-md " />
                                    <p>Part Time (23)</p>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <input type="checkbox" className="checkbox checkbox-success border-gray-400 w-5 h-5 rounded-md " />
                                    <p>Internship (23)</p>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <input type="checkbox" className="checkbox checkbox-success border-gray-400 w-5 h-5 rounded-md " />
                                    <p>Freelance (23)</p>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <input type="checkbox" className="checkbox checkbox-success border-gray-400 w-5 h-5 rounded-md " />
                                    <p>Contract (23)</p>
                                </div>
                                <button className="bg-[#fbfdfd] text-[12px] px-2 py-1 border border-gray-400 rounded-md ">View More</button>
                            </div>

                        </div>

                        <div className="collapse collapse-arrow join-item border-base-300 border">
                            <input type="radio" name="my-accordion-4" defaultChecked />
                            <div className="collapse-title font-semibold">Category</div>
                            <div className="collapse-content text-sm space-y-3 ">
                                <div className="flex gap-2 items-center">
                                    <input type="checkbox" className="checkbox checkbox-success border-gray-400 w-5 h-5 rounded-md " />
                                    <p>Web Developer (61)</p>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <input type="checkbox" className="checkbox checkbox-success border-gray-400 w-5 h-5 rounded-md " />
                                    <p>UI/UX Designer (44)</p>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <input type="checkbox" className="checkbox checkbox-success border-gray-400 w-5 h-5 rounded-md " />
                                    <p>Ai Engineer (17)</p>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <input type="checkbox" className="checkbox checkbox-success border-gray-400 w-5 h-5 rounded-md " />
                                    <p>SQA (35)</p>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <input type="checkbox" className="checkbox checkbox-success border-gray-400 w-5 h-5 rounded-md " />
                                    <p>Project Manager (6)</p>
                                </div>
                                <button className="bg-[#fbfdfd] text-[12px] px-2 py-1 border border-gray-400 rounded-md ">View More</button>
                            </div>

                        </div>

                        <div className="collapse collapse-arrow join-item border-base-300 border">
                            <input type="radio" name="my-accordion-4" defaultChecked />
                            <div className="collapse-title font-semibold">Location</div>
                            <div className="collapse-content text-sm space-y-3 ">
                                <div className="flex gap-2 items-center">
                                    <input type="checkbox" className="checkbox checkbox-success border-gray-400 w-5 h-5 rounded-md " />
                                    <p>Dhaka (110)</p>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <input type="checkbox" className="checkbox checkbox-success border-gray-400 w-5 h-5 rounded-md " />
                                    <p>Chittagong (23)</p>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <input type="checkbox" className="checkbox checkbox-success border-gray-400 w-5 h-5 rounded-md " />
                                    <p>Sylhet (56)</p>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <input type="checkbox" className="checkbox checkbox-success border-gray-400 w-5 h-5 rounded-md " />
                                    <p>Rajshahi (17)</p>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <input type="checkbox" className="checkbox checkbox-success border-gray-400 w-5 h-5 rounded-md " />
                                    <p>Khulna (4)</p>
                                </div>
                                <button className="bg-[#fbfdfd] text-[12px] px-2 py-1 border border-gray-400 rounded-md ">View More</button>
                            </div>

                        </div>

                        <div className="collapse collapse-arrow join-item border-base-300 border">
                            <input type="radio" name="my-accordion-4" defaultChecked />
                            <div className="collapse-title font-semibold">Company</div>
                            <div className="collapse-content text-sm space-y-3 ">
                                <div className="flex gap-2 items-center">
                                    <input type="checkbox" className="checkbox checkbox-success border-gray-400 w-5 h-5 rounded-md " />
                                    <p>AppsCode Inc.  (23)</p>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <input type="checkbox" className="checkbox checkbox-success border-gray-400 w-5 h-5 rounded-md " />
                                    <p>Robi Axiata PLC. (23)</p>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <input type="checkbox" className="checkbox checkbox-success border-gray-400 w-5 h-5 rounded-md " />
                                    <p>Craftsmen (23)</p>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <input type="checkbox" className="checkbox checkbox-success border-gray-400 w-5 h-5 rounded-md " />
                                    <p>Therap BD Ltd. (23)</p>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <input type="checkbox" className="checkbox checkbox-success border-gray-400 w-5 h-5 rounded-md " />
                                    <p>BRAC (23)</p>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <input type="checkbox" className="checkbox checkbox-success border-gray-400 w-5 h-5 rounded-md " />
                                    <p>Appifylab (23)</p>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <input type="checkbox" className="checkbox checkbox-success border-gray-400 w-5 h-5 rounded-md " />
                                    <p>SELISE (23)</p>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <input type="checkbox" className="checkbox checkbox-success border-gray-400 w-5 h-5 rounded-md " />
                                    <p>Brain Station (56)</p>
                                </div>
                                <button className="bg-[#fbfdfd] text-[12px] px-2 py-1 border border-gray-400 rounded-md ">View More</button>
                            </div>
                        </div>
                    </form>
                </div>


                {/* Middle: Jobs Post */}
                <div className="flex-1">
                    <Outlet></Outlet>
                </div>


                {/* Right sidebar: Subscribe */}
                <div className="max-w-[300px] w-full ">
                    <button onClick={handleSubscribe} className="w-full btn btn-ghost bg-[#fbfdfd] border border-[#007456] text-[#007456] shadow-[0_0px_2px_#007456] hover:text-white hover:bg-[#007456] rounded-md mt-2">Subscribe Now</button>

                    {/* Find us on */}
                    <div className='hidden md:block mt-10'>
                        <h3 className='text-[18px]  font-semibold text-[#007456] '>Find Us On</h3>
                        <hr className="text-[#93c0b4] mt-2 mb-4" />
                        <div className="flex items-center gap-5 ">
                            <a href='https://www.linkedin.com/in/mohammad-abu-bakkar-siddik-829451295/' target="_blank" >
                                <FaLinkedin className="w-7 h-7 text-[#007456] transform transition-transform duration-500 ease-in-out hover:scale-110" />
                            </a>
                            <a href='https://www.facebook.com/absShagor99' target="_blank" >
                                <FaFacebook className="w-7 h-7 text-[#007456] transform transition-transform duration-500 ease-in-out hover:scale-110" />
                            </a>
                            <a href='' target="_blank"  >
                                <RiInstagramFill className="w-7 h-7 text-[#007456] transform transition-transform duration-500 ease-in-out hover:scale-110" />
                            </a>
                            <a href='https://x.com/abs_shagor?s=21' target="_blank" >
                                <FaXTwitter className="w-7 h-7 text-[#007456] transform transition-transform duration-500 ease-in-out hover:scale-110" />
                            </a>
                        </div>
                    </div>

                    {/* Books zone */}
                    <div className="mt-10">
                        <h3 className='text-[18px]  font-semibold text-[#007456] '>Books Zone</h3>
                        <hr className="text-[#93c0b4] mt-2 mb-4" />
                        <div className="carousel carousel-center overflow-x-auto flex gap-5 max-w-[350px] sm:max-w-[600px] mx-auto  flex-nowrap">
                            {
                                books.map(book => {
                                    return (
                                        <div key={book.bookId} className='carousel-item grid max-w-[190px] w-full bg-[#edf4f4] border border-[#93c0b4] rounded-lg  p-4 '>
                                            <div className='flex justify-center rounded-xl'>
                                                <img src={book.image} alt="" className='h-[140px] w-[90px] rounded-md shadow1' />
                                            </div>
                                            <div>
                                                <h1 className='text-[18px] text-[#003D20] font-semibold '  >{book.bookName}</h1>
                                                <p className='text-[14px] font-medium text-gray-600 mt-2 '>Author: {book.author} </p>
                                                <hr className='my-3 text-gray-300' />
                                                <div className='flex gap-3 justify-between  items-center text-[14px]  '>
                                                    <Link to={`/bookDetails/${book.bookId}`} className=" underline text-[#007456] font-medium " >Show Details</Link>
                                                    <div className='flex gap-1 items-center'>
                                                        <p className=' font-medium text-gray-600'>Rating: {book.rating}</p>
                                                        <FaStar className="w-4 h-4 text-[#FFD700] " />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className='flex gap-1 items-center text-[#003D20] max-w-[150px] mx-auto font-semibold mt-5 mb-15'>
                            <Link to={'/books'} className=' border-b-2 '>Explore All Books</Link>
                            <FaArrowAltCircleRight />
                        </div>
                    </div>

                    {/* Popular in Bangladesh */}
                    <div className="mt-10">
                        <h3 className="text-[18px]">Popular in <span className="text-[#007456] font-semibold ">Bangladesh</span></h3>
                        <hr className="text-[#93c0b4] mt-2 mb-4" />
                        <div  className="text-[#003D20] grid grid-cols-1 gap-3 " >
                            <div className="flex items-center gap-3">
                                <img src="../../public/company_logo/2.jfif" alt="logo2" className="w-8 h-8 " />
                                <div>
                                    <p className="font-medium">AppsCode Inc.</p>
                                    <p className="text-[14px] text-gray-600 ">26 Jobs</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <img src="../../public/company_logo/3.jfif" alt="logo2" className="w-8 h-8 " />
                                <div>
                                    <p className="font-medium">BRAC</p>
                                    <p className="text-[14px] text-gray-600 ">26 Jobs</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <img src="../../public/company_logo/1.jfif" alt="logo2" className="w-8 h-8 " />
                                <div>
                                    <p className="font-medium">Appifylab</p>
                                    <p className="text-[14px] text-gray-600 ">26 Jobs</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <img src="../../public/company_logo/4.jfif" alt="logo2" className="w-8 h-8 " />
                                <div>
                                    <p className="font-medium">Therap BD Ltd.</p>
                                    <p className="text-[14px] text-gray-600 ">26 Jobs</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <img src="../../public/company_logo/7.jfif" alt="logo2" className="w-8 h-8 " />
                                <div>
                                    <p className="font-medium">Brain Station 23</p>
                                    <p className="text-[14px] text-gray-600 ">26 Jobs</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <img src="../../public/company_logo/8.jfif" alt="logo2" className="w-8 h-8 " />
                                <div>
                                    <p className="font-medium">Craftsmen</p>
                                    <p className="text-[14px] text-gray-600 ">26 Jobs</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <img src="../../public/company_logo/5.jfif" alt="logo2" className="w-8 h-8 border border-[#93c0b4]" />
                                <div>
                                    <p className="font-medium">SELISE Group</p>
                                    <p className="text-[14px] text-gray-600 ">26 Jobs</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <img src="../../public/company_logo/9.jfif" alt="logo2" className="w-8 h-8 " />
                                <div>
                                    <p className="font-medium">Robi Axiata PLC.</p>
                                    <p className="text-[14px] text-gray-600 ">26 Jobs</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <img src="../../public/company_logo/10.jfif" alt="logo2" className="w-8 h-8 " />
                                <div>
                                    <p className="font-medium">Bybit</p>
                                    <p className="text-[14px] text-gray-600 ">26 Jobs</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <img src="../../public/company_logo/11.jfif" alt="logo2" className="w-8 h-8 " />
                                <div>
                                    <p className="font-medium">Field Nation</p>
                                    <p className="text-[14px] text-gray-600 ">26 Jobs</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <img src="../../public/company_logo/12.jfif" alt="logo2" className="w-8 h-8 " />
                                <div>
                                    <p className="font-medium">foodpanda</p>
                                    <p className="text-[14px] text-gray-600 ">26 Jobs</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <img src="../../public/company_logo/13.jfif" alt="logo2" className="w-8 h-8 " />
                                <div>
                                    <p className="font-medium">Arong</p>
                                    <p className="text-[14px] text-gray-600 ">26 Jobs</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <img src="../../public/company_logo/14.jfif" alt="logo2" className="w-8 h-8 " />
                                <div>
                                    <p className="font-medium">Bitget</p>
                                    <p className="text-[14px] text-gray-600 ">26 Jobs</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Home;
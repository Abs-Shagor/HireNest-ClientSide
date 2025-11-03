import Marquee from "react-fast-marquee";
import { IoSearchOutline } from "react-icons/io5";
import { FaArrowCircleRight } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

const Home = () => {
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
                        className="w-full bg-[#fbfdfd] placeholder-[#769788] text-[#003D20] rounded-full outline-none border border-[#c5ded7] focus:ring-1 focus:ring-[#007456] transition shadow2 pl-10 pr-10 py-2"
                    />
                    <FaArrowCircleRight className="absolute right-2 top-1/2 -translate-y-1/2 text-[#007456] hover:text-[#003D20] cursor-pointer w-7 h-7 " />
                </div>
                <div className="max-w-[400px] mx-auto flex flex-wrap justify-center  gap-2 mt-3">
                    <span className="bg-[#fbfdfd] text-[14px] hover:bg-[#007456] hover:text-white cursor-pointer border border-[#c5ded7] rounded-full px-2 py-1 ">web developer</span>
                    <span className="bg-[#fbfdfd] text-[14px] hover:bg-[#007456] hover:text-white cursor-pointer border border-[#c5ded7] rounded-full px-2 py-1 ">Designer</span>
                    <span className="bg-[#fbfdfd] text-[14px] hover:bg-[#007456] hover:text-white cursor-pointer border border-[#c5ded7] rounded-full px-2 py-1 ">project manager</span>
                    <span className="bg-[#fbfdfd] text-[14px] hover:bg-[#007456] hover:text-white cursor-pointer border border-[#c5ded7] rounded-full px-2 py-1 ">UI/UX</span>
                    <span className="bg-[#fbfdfd] text-[14px] hover:bg-[#007456] hover:text-white cursor-pointer border border-[#c5ded7] rounded-full px-2 py-1 ">SQA</span>
                    <span className="bg-[#fbfdfd] text-[14px] hover:bg-[#007456] hover:text-white cursor-pointer border border-[#c5ded7] rounded-full px-2 py-1 ">Ai engineer</span>
                </div>
            </div>
            <Marquee pauseOnHover={true} speed={50} className="text-clr3 my-10" >
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
            </Marquee>
            {/* <h3 className="text-clr3 text-[24px] text-center font-semibold mt-10">Explore the latest job openning</h3> */}
            
            {/* All  */}
            <div className="flex  gap-10">
                <div className="max-w-[300px] w-full ">
                    <div>
                        <div className="flex justify-between items-center gap-2">
                            <h4 className="text-[20px] text-clr3 font-semibold ">All Filters</h4>
                            <p className="text-[#48928e] hover:text-[#003D20] cursor-pointer ">Clear All</p>
                        </div>
                        <hr className="text-[#007456] mt-2 mb-4" />
                    </div>
                    <div>
                        <div className="flex justify-between items-center gap-2">
                            <h4 className="text-[18px] text-clr1 font-medium ">Job Type</h4>
                            <p className="text-clr3"><IoIosArrowDown /></p>
                        </div>
                        <div>
                            {/* coming soon... */}
                        </div>
                        <hr className="text-[#93c0b4] my-2" />
                    </div>
                    <div>
                        <div className="flex justify-between items-center gap-2">
                            <h4 className="text-[18px] text-clr1 font-medium ">Category</h4>
                            <p className="text-clr3"><IoIosArrowDown /></p>
                        </div>
                        <div>
                            {/* coming soon... */}
                        </div>
                        <hr className="text-[#93c0b4] my-2" />
                    </div>
                    <div>
                        <div className="flex justify-between items-center gap-2">
                            <h4 className="text-[18px] text-clr1 font-medium ">Location</h4>
                            <p className="text-clr3"><IoIosArrowDown /></p>
                        </div>
                        <div>
                            {/* coming soon... */}
                        </div>
                        <hr className="text-[#93c0b4] my-2" />
                    </div>
                    <div>
                        <div className="flex justify-between items-center gap-2">
                            <h4 className="text-[18px] text-clr1 font-medium ">Company</h4>
                            <p className="text-clr3"><IoIosArrowDown /></p>
                        </div>
                        <div>
                            {/* coming soon... */}
                        </div>
                        <hr className="text-[#93c0b4] my-2" />
                    </div>

                </div>
                <div className="flex-1">
                    coming...
                </div>
                <div className="max-w-[300px] w-full ">
                    <button className="w-full btn btn-ghost bg-[#fbfdfd] border border-[#007456] text-[#007456] shadow-[0_0px_2px_#007456] hover:text-white hover:bg-[#007456] rounded-md mt-2">Subscribe Now</button>

                    <h3 className="text-[18px] mt-10">Popular in <span className="text-[#007456] font-semibold ">Bangladesh</span></h3>
                    <hr className="text-[#93c0b4] my-2" />
                </div>
            </div>
        </div>
    );
};

export default Home;
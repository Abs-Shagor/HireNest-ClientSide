import Marquee from "react-fast-marquee";
import { IoSearchOutline } from "react-icons/io5";
import { FaArrowCircleRight } from "react-icons/fa";
import { useContext, useState } from "react";
import { DataContext } from "../Providers/DataProvider";
import JobSection from "./JobSection";
import { useNavigate } from "react-router-dom";



const Home = () => {
    const {searchedOption, setSearchedOption}= useContext(DataContext);
    const navigate = useNavigate();
    function handleSearchOption(xyz) {
        setSearchedOption(xyz);
    }
    function handleSearchSubmit() {
        navigate('/searchedOptions');
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
                        value={searchedOption}
                        onChange={(e) => setSearchedOption(e.target.value)}
                        onKeyDown={(e) => { if (e.key === 'Enter') {handleSearchSubmit();}}}
                        required
                        className="w-full bg-[#fbfdfd] placeholder-[#769788] text-[#003D20] rounded-full outline-none border border-gray-400 sm:border-[#c5ded7] focus:ring-1  focus:border-[#007456] transition shadow2 pl-10 pr-10 py-2"
                    />
                    <FaArrowCircleRight onClick={handleSearchSubmit} className="absolute right-2 top-1/2 -translate-y-1/2 text-[#007456] hover:text-[#003D20] cursor-pointer w-7 h-7 " />
                </div>
                <div className="max-w-[400px] mx-auto flex flex-wrap justify-center  gap-2 mt-3">
                    <span onClick={() => handleSearchOption('web developer')} className="bg-[#fbfdfd] text-[#003D20] text-[12px] sm:text-[14px] hover:bg-[#007456] hover:text-white cursor-pointer border border-[#c5ded7] rounded-full px-2 py-1 ">web developer</span>
                    <span onClick={() => handleSearchOption('Designer')} className="bg-[#fbfdfd] text-[#003D20] text-[12px] sm:text-[14px] hover:bg-[#007456] hover:text-white cursor-pointer border border-[#c5ded7] rounded-full px-2 py-1 ">Designer</span>
                    <span onClick={() => handleSearchOption('project manager')} className="bg-[#fbfdfd] text-[#003D20] text-[12px] sm:text-[14px] hover:bg-[#007456] hover:text-white cursor-pointer border border-[#c5ded7] rounded-full px-2 py-1 ">project manager</span>
                    <span onClick={() => handleSearchOption('UI/UX')} className="bg-[#fbfdfd] text-[#003D20] text-[12px] sm:text-[14px] hover:bg-[#007456] hover:text-white cursor-pointer border border-[#c5ded7] rounded-full px-2 py-1 ">UI/UX</span>
                    <span onClick={() => handleSearchOption('SQA')} className="bg-[#fbfdfd] text-[#003D20] text-[12px] sm:text-[14px] hover:bg-[#007456] hover:text-white cursor-pointer border border-[#c5ded7] rounded-full px-2 py-1 ">SQA</span>
                    <span onClick={() => handleSearchOption('Ai engineer')} className="bg-[#fbfdfd] text-[#003D20] text-[12px] sm:text-[14px] hover:bg-[#007456] hover:text-white cursor-pointer border border-[#c5ded7] rounded-full px-2 py-1 ">Ai engineer</span>
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


            {/* Job Section */}

            <JobSection ></JobSection>

        </div>
    );
};

export default Home;
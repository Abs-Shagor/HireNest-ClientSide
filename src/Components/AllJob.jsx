import { useEffect } from 'react';
import { CiBookmark } from "react-icons/ci";
import { Link } from 'react-router-dom';

const AllJob = () => {
    // To show the upperside of the page we use the below method
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);


    return (
        <div className='grid gap-5'>
            <div className='border border-[#93c0b4] sm:border-white shadow2 rounded-xl'>
                <div className='relative flex gap-3 sm:gap-5 p-3 sm:p-5'>
                    <div>
                        <img src="../../public/company_logo/3.jfif" alt="img" className='h-10 w-10 sm:h-15 sm:w-15 shadow2 scale1 ' />
                    </div>
                    <div className='absolute right-5 top-4 flex gap-1 items-center text-clr2'>
                        <CiBookmark />
                        <p className='text-[14px]'>Save Job</p>
                    </div>
                    <div className='flex-1 grid gap-5'>
                        <div className='flex justify-between'>
                            <div>
                                <h3 className='text-[18px] sm:text-[22px] text-[#003D20] font-semibold '>Web Developer</h3>
                                <div className='flex gap-1 text-[12px]  sm:text-[14px] text-clr2 '>
                                    <p>BRAC GROUP</p>
                                    <p>|</p>
                                    <p>Dhaka, Bangladesh</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex gap-3 sm:gap-5 justify-between text-[14px] sm:text-[16px] '>
                            <div>
                                <p className='text-clr2'>Experience</p>
                                <p className='text-[#003D20] font-semibold'>2 to 3 Years</p>
                            </div>
                            <div>
                                <p className='text-clr2'>Job Type</p>
                                <p className='text-[#003D20] font-semibold'>Part Time</p>
                            </div>
                            <div>
                                <p className='text-clr2'>Salary</p>
                                <p className='text-[#003D20] font-semibold'>35k BDT/Month</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex gap-3 sm:gap-5 justify-between items-center bg-green-50 rounded-b-xl  px-5 py-2'>
                    <div className='text-clr2 text-[12px] sm:text-[14px] '><span>3</span>m ago </div>
                    <div className='flex items-center gap-2 lg:gap-3 ' >
                        <Link to={'/'} className="btn btn-ghost bg-[#fbfdfd] text-[#007456] shadow-[0_1px_2px_#93c0b4] hover:text-white hover:bg-[#007456] rounded-xl  ">View Details</Link>
                        <Link to={'/'} className="btn bg-[#007456] hover:bg-[#016147] text-white shadow-[0_1px_2px_#007456] hover:text-white rounded-xl ">Apply Now</Link>
                    </div>
                </div>
            </div>
            <div className='border border-[#93c0b4] sm:border-white shadow2 rounded-xl'>
                <div className='relative flex gap-3 sm:gap-5 p-3 sm:p-5'>
                    <div>
                        <img src="../../public/company_logo/3.jfif" alt="img" className='h-10 w-10 sm:h-15 sm:w-15 shadow2 scale1 ' />
                    </div>
                    <div className='absolute right-5 top-4 flex gap-1 items-center text-clr2'>
                        <CiBookmark />
                        <p className='text-[14px]'>Save Job</p>
                    </div>
                    <div className='flex-1 grid gap-5'>
                        <div className='flex justify-between'>
                            <div>
                                <h3 className='text-[18px] sm:text-[22px] text-[#003D20] font-semibold '>Web Developer</h3>
                                <div className='flex gap-1 text-[12px]  sm:text-[14px] text-clr2 '>
                                    <p>BRAC GROUP</p>
                                    <p>|</p>
                                    <p>Dhaka, Bangladesh</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex gap-3 sm:gap-5 justify-between text-[14px] sm:text-[16px] '>
                            <div>
                                <p className='text-clr2'>Experience</p>
                                <p className='text-[#003D20] font-semibold'>2 to 3 Years</p>
                            </div>
                            <div>
                                <p className='text-clr2'>Job Type</p>
                                <p className='text-[#003D20] font-semibold'>Part Time</p>
                            </div>
                            <div>
                                <p className='text-clr2'>Salary</p>
                                <p className='text-[#003D20] font-semibold'>35k BDT/Month</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex gap-3 sm:gap-5 justify-between items-center bg-green-50 rounded-b-xl  px-5 py-2'>
                    <div className='text-clr2 text-[12px] sm:text-[14px] '><span>3</span>m ago </div>
                    <div className='flex items-center gap-2 lg:gap-3 ' >
                        <Link to={'/'} className="btn btn-ghost bg-[#fbfdfd] text-[#007456] shadow-[0_1px_2px_#93c0b4] hover:text-white hover:bg-[#007456] rounded-xl  ">View Details</Link>
                        <Link to={'/'} className="btn bg-[#007456] hover:bg-[#016147] text-white shadow-[0_1px_2px_#007456] hover:text-white rounded-xl ">Apply Now</Link>
                    </div>
                </div>
            </div>
            <div className='border border-[#93c0b4] sm:border-white shadow2 rounded-xl'>
                <div className='relative flex gap-3 sm:gap-5 p-3 sm:p-5'>
                    <div>
                        <img src="../../public/company_logo/3.jfif" alt="img" className='h-10 w-10 sm:h-15 sm:w-15 shadow2 scale1 ' />
                    </div>
                    <div className='absolute right-5 top-4 flex gap-1 items-center text-clr2'>
                        <CiBookmark />
                        <p className='text-[14px]'>Save Job</p>
                    </div>
                    <div className='flex-1 grid gap-5'>
                        <div className='flex justify-between'>
                            <div>
                                <h3 className='text-[18px] sm:text-[22px] text-[#003D20] font-semibold '>Web Developer</h3>
                                <div className='flex gap-1 text-[12px]  sm:text-[14px] text-clr2 '>
                                    <p>BRAC GROUP</p>
                                    <p>|</p>
                                    <p>Dhaka, Bangladesh</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex gap-3 sm:gap-5 justify-between text-[14px] sm:text-[16px] '>
                            <div>
                                <p className='text-clr2'>Experience</p>
                                <p className='text-[#003D20] font-semibold'>2 to 3 Years</p>
                            </div>
                            <div>
                                <p className='text-clr2'>Job Type</p>
                                <p className='text-[#003D20] font-semibold'>Part Time</p>
                            </div>
                            <div>
                                <p className='text-clr2'>Salary</p>
                                <p className='text-[#003D20] font-semibold'>35k BDT/Month</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex gap-3 sm:gap-5 justify-between items-center bg-green-50 rounded-b-xl  px-5 py-2'>
                    <div className='text-clr2 text-[12px] sm:text-[14px] '><span>3</span>m ago </div>
                    <div className='flex items-center gap-2 lg:gap-3 ' >
                        <Link to={'/'} className="btn btn-ghost bg-[#fbfdfd] text-[#007456] shadow-[0_1px_2px_#93c0b4] hover:text-white hover:bg-[#007456] rounded-xl  ">View Details</Link>
                        <Link to={'/'} className="btn bg-[#007456] hover:bg-[#016147] text-white shadow-[0_1px_2px_#007456] hover:text-white rounded-xl ">Apply Now</Link>
                    </div>
                </div>
            </div>
            <div className='border border-[#93c0b4] sm:border-white shadow2 rounded-xl'>
                <div className='relative flex gap-3 sm:gap-5 p-3 sm:p-5'>
                    <div>
                        <img src="../../public/company_logo/3.jfif" alt="img" className='h-10 w-10 sm:h-15 sm:w-15 shadow2 scale1 ' />
                    </div>
                    <div className='absolute right-5 top-4 flex gap-1 items-center text-clr2'>
                        <CiBookmark />
                        <p className='text-[14px]'>Save Job</p>
                    </div>
                    <div className='flex-1 grid gap-5'>
                        <div className='flex justify-between'>
                            <div>
                                <h3 className='text-[18px] sm:text-[22px] text-[#003D20] font-semibold '>Web Developer</h3>
                                <div className='flex gap-1 text-[12px]  sm:text-[14px] text-clr2 '>
                                    <p>BRAC GROUP</p>
                                    <p>|</p>
                                    <p>Dhaka, Bangladesh</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex gap-3 sm:gap-5 justify-between text-[14px] sm:text-[16px] '>
                            <div>
                                <p className='text-clr2'>Experience</p>
                                <p className='text-[#003D20] font-semibold'>2 to 3 Years</p>
                            </div>
                            <div>
                                <p className='text-clr2'>Job Type</p>
                                <p className='text-[#003D20] font-semibold'>Part Time</p>
                            </div>
                            <div>
                                <p className='text-clr2'>Salary</p>
                                <p className='text-[#003D20] font-semibold'>35k BDT/Month</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex gap-3 sm:gap-5 justify-between items-center bg-green-50 rounded-b-xl  px-5 py-2'>
                    <div className='text-clr2 text-[12px] sm:text-[14px] '><span>3</span>m ago </div>
                    <div className='flex items-center gap-2 lg:gap-3 ' >
                        <Link to={'/'} className="btn btn-ghost bg-[#fbfdfd] text-[#007456] shadow-[0_1px_2px_#93c0b4] hover:text-white hover:bg-[#007456] rounded-xl  ">View Details</Link>
                        <Link to={'/'} className="btn bg-[#007456] hover:bg-[#016147] text-white shadow-[0_1px_2px_#007456] hover:text-white rounded-xl ">Apply Now</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllJob;
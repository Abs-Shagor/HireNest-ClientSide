import React, { useContext, useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { Link, Outlet } from "react-router-dom";
import { DataContext } from '../Providers/DataProvider';
import HomeUserPost from './HomeUserPost';
import JobsCart from './JobsCart';

const JobSection = () => {
    // To show the upperside of the page we use the below method
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    const { books, jobs } = useContext(DataContext);

    function handleSubscribe() {
        toast.warning('This feature is under development.');
    }
    //capitalize first word
    function capitalize(str) {
        if (!str) return 'Co.'; // Handle undefined/null
        if (typeof str !== 'string') {
            str = String(str); // Convert numbers/other types to string
        }
        return str.split(' ').map(w => w[0]?.toUpperCase() + w.slice(1)).join(' ');
    }

    // calculating job type, location, company, category and their counts.
    const jobTypeAndCounts = jobs.reduce((acc, job) => {
        const type = job.job_type.toLowerCase();
        acc[type] = (acc[type] || 0) + 1;
        return acc;
    }, {});
    const jobCategoryAndCount = jobs.reduce((acc, job) => {
        const type = job.position_name.toLowerCase();
        acc[type] = (acc[type] || 0) + 1;
        return acc;
    }, {});
    const jobLocationAndCount = jobs.reduce((acc, job) => {
        const type = job.location.toLowerCase();
        acc[type] = (acc[type] || 0) + 1;
        return acc;
    }, {});
    const jobCompanyAndCount = jobs.reduce((acc, job) => {
        const type = job.company_name.toLowerCase();
        acc[type] = (acc[type] || 0) + 1;
        return acc;
    }, {});

    // handling filter/checkbox/clear all
    const {checkedList, setCheckedList} = useContext(DataContext);
    function handleSelect(event) {
        const value = (event.target.value).toLowerCase();
        const isChecked = event.target.checked;
        if (isChecked) {
            setCheckedList([...checkedList, value]);
        }
        else {
            const filteredList = checkedList.filter(item => item !== value)
            setCheckedList(filteredList);
        }
    }
    // if (checkedList.length) console.log(checkedList);
    function handleClearAll(event) {
        setCheckedList([]);
    }



    return (
        <div className=" flex flex-col md:flex-row gap-5  mt-5">

            {/* Left sidebar: Filter */}
            <div className=" hidden md:block md:max-w-[230px]  xl:max-w-[270px] w-full h-[1000px] overflow-y-auto scroll-smooth scrollbar-hide ">
                <div>
                    <div className="flex justify-between items-center gap-2">
                        <h4 className="text-[20px] text-clr3 font-semibold flex items-center ">All Filter</h4>
                        <p onClick={handleClearAll} className="text-[#48928e] hover:text-[#003D20] cursor-pointer ">Clear All</p>
                    </div>
                    <hr className="text-[#007456] mt-2 mb-4" />
                </div>

                <form id="filters-form" className="bg-green-50 join join-vertical text-[#003D20]  w-full ">
                    <div className="collapse collapse-arrow join-item border-base-300 border">
                        <input type="radio" name="my-accordion-4" defaultChecked />
                        <div className="collapse-title font-semibold">Job Type</div>
                        <div className="collapse-content text-sm space-y-3 ">
                            {
                                Object.entries(jobTypeAndCounts).map(([type, count]) => (
                                    <div key={type} className="flex gap-2 items-center ">
                                        <input
                                            type="checkbox"
                                            name='job_type'
                                            checked={checkedList.includes(type)} // Note:initially, checked is false as the checkList doesn't have the type.
                                            // but, by clicking checkbox its become true. which is done by DOM. DOM change the state of checked/checkbox
                                            // actually, to uncheck all checkbox we use this method for clear all
                                            value={type}           
                                            onChange={handleSelect}
                                            className="checkbox checkbox-success border-gray-400 w-5 h-5 rounded-md "
                                        />
                                        <p>{capitalize(type)} ({count})</p>
                                    </div>
                                ))
                            }
                            {/* <button className="bg-[#fbfdfd] text-[12px] px-2 py-1 border border-gray-400 rounded-md ">View More</button> */}
                        </div>
                    </div>

                    <div className="collapse collapse-arrow join-item border-base-300 border">
                        <input type="radio" name="my-accordion-4" defaultChecked />
                        <div className="collapse-title font-semibold">Location</div>
                        <div className="collapse-content text-sm space-y-3 ">
                            {
                                Object.entries(jobLocationAndCount).map(([type, count]) => (
                                    <div key={type} className="flex gap-2 items-center">
                                        <input
                                            type="checkbox"
                                            name='location'
                                            checked={checkedList.includes(type)}
                                            value={type}
                                            onChange={handleSelect}
                                            className="checkbox checkbox-success border-gray-400 w-5 h-5 rounded-md " />
                                        <p>{capitalize(type)} ({count})</p>
                                    </div>
                                ))
                            }
                        </div>

                    </div>

                    <div className="collapse collapse-arrow join-item border-base-300 border">
                        <input type="radio" name="my-accordion-4" defaultChecked />
                        <div className="collapse-title font-semibold">Category</div>
                        <div className="collapse-content text-sm space-y-3 ">
                            {
                                Object.entries(jobCategoryAndCount).map(([type, count]) => (
                                    <div key={type} className="flex gap-2 items-center">
                                        <input
                                            type="checkbox"
                                            name='category'
                                            checked={checkedList.includes(type)}
                                            value={type}
                                            onChange={handleSelect}
                                            className="checkbox checkbox-success border-gray-400 w-5 h-5 rounded-md " />
                                        <p>{capitalize(type)} ({count})</p>
                                    </div>
                                ))
                            }
                        </div>

                    </div>


                    <div className="collapse collapse-arrow join-item border-base-300 border">
                        <input type="radio" name="my-accordion-4" defaultChecked />
                        <div className="collapse-title font-semibold">Company</div>
                        <div className="collapse-content text-sm space-y-3 ">
                            {
                                Object.entries(jobCompanyAndCount).map(([type, count]) => (
                                    <div key={type} className="flex gap-2 items-center">
                                        <input
                                            type="checkbox" 
                                            name='company' 
                                            checked={checkedList.includes(type)}
                                            value={type} 
                                            onChange={handleSelect}
                                            className="checkbox checkbox-success border-gray-400 w-5 h-5 rounded-md " />
                                        <p>{capitalize(type)} ({count})</p>
                                    </div>
                                ))
                            }
                            {/* <button className="bg-[#fbfdfd] text-[12px] px-2 py-1 border border-gray-400 rounded-md ">View More</button> */}
                        </div>
                    </div>
                </form>
            </div>


            {/* Middle: Jobs Post */}
            <div className="flex-1  h-[1000px] overflow-y-auto scroll-smooth scrollbar-hide sm:p-3">
                <HomeUserPost></HomeUserPost>
                {/* Job cart */}
                <JobsCart></JobsCart>
            </div>


            {/* Right sidebar */}
            <div className="hidden lg:block  md:max-w-[230px] xl:max-w-[270px] w-full h-[1000px] overflow-y-auto scroll-smooth scrollbar-hide ">
                <button onClick={handleSubscribe} className="w-full btn btn-ghost bg-green-50 border border-[#007456] text-[#007456] shadow-[0_0px_2px_#007456] hover:text-white hover:bg-[#007456] rounded-md mt-2">Subscribe Now</button>

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
                                    <div key={book.bookId} className='carousel-item grid max-w-[190px] w-full bg-green-50 border border-[#93c0b4] rounded-lg  p-4 '>
                                        <div className='flex justify-center rounded-xl'>
                                            <img src={book.image} alt="" className='h-[140px] w-[90px] rounded-md shadow1 scale1' />
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
                    <div className="text-[#003D20] grid grid-cols-1 gap-3 " >
                        <Link to={'https://appscode.com/'} target='_blank' className="flex items-center gap-3 cursor-pointer ">
                            <img src="../../public/company_logo/2.jfif" alt="logo2" className="w-8 h-8 scale1 shadow2 " />
                            <div>
                                <p className="font-medium">AppsCode Inc.</p>
                                <p className="text-[14px] text-clr2 ">26 Jobs</p>
                            </div>
                        </Link>
                        <Link to={'https://www.brac.net/'} target='_blank' className="flex items-center gap-3 cursor-pointer">
                            <img src="../../public/company_logo/3.jfif" alt="logo2" className="w-8 h-8 scale1 shadow2 " />
                            <div>
                                <p className="font-medium">BRAC</p>
                                <p className="text-[14px] text-clr2 ">22 Jobs</p>
                            </div>
                        </Link>
                        <Link to={'https://www.appifylab.com/'} target='_blank' className="flex items-center gap-3 cursor-pointer">
                            <img src="../../public/company_logo/1.jfif" alt="logo2" className="w-8 h-8 scale1 shadow2 " />
                            <div>
                                <p className="font-medium">Appifylab</p>
                                <p className="text-[14px] text-clr2 ">18 Jobs</p>
                            </div>
                        </Link>
                        <Link to={'https://therapbd.com/'} target='_blank' className="flex items-center gap-3 cursor-pointer">
                            <img src="../../public/company_logo/4.jfif" alt="logo2" className="w-8 h-8 scale1 shadow2 " />
                            <div>
                                <p className="font-medium">Therap BD Ltd.</p>
                                <p className="text-[14px] text-clr2 ">16 Jobs</p>
                            </div>
                        </Link>
                        <Link to={'https://brainstation-23.com/'} target='_blank' className="flex items-center gap-3 cursor-pointer">
                            <img src="../../public/company_logo/7.jfif" alt="logo2" className="w-8 h-8 scale1 shadow2 " />
                            <div>
                                <p className="font-medium">Brain Station 23</p>
                                <p className="text-[14px] text-clr2 ">13 Jobs</p>
                            </div>
                        </Link>
                        <Link to={'https://chorcha.net/'} target='_blank' className="flex items-center gap-3 cursor-pointer">
                            <img src="../../public/company_logo/16.jfif" alt="logo2" className="w-8 h-8 scale1 shadow2 " />
                            <div>
                                <p className="font-medium">Chorcha</p>
                                <p className="text-[14px] text-clr2 ">8 Jobs</p>
                            </div>
                        </Link>
                        <Link to={'https://www.craftsmensoftware.com/'} target='_blank' className="flex items-center gap-3 cursor-pointer">
                            <img src="../../public/company_logo/8.jfif" alt="logo2" className="w-8 h-8 scale1 shadow2 " />
                            <div>
                                <p className="font-medium">Craftsmen</p>
                                <p className="text-[14px] text-clr2 ">4 Jobs</p>
                            </div>
                        </Link>
                        <Link to={'https://selisegroup.com/'} target='_blank' className="flex items-center gap-3 cursor-pointer">
                            <img src="../../public/company_logo/5.jfif" alt="logo2" className="w-8 h-8 scale1 shadow2 border border-[#93c0b4]" />
                            <div>
                                <p className="font-medium">SELISE Group</p>
                                <p className="text-[14px] text-clr2 ">4 Jobs</p>
                            </div>
                        </Link>
                        <Link to={'https://www.robi.com.bd/en'} target='_blank' className="flex items-center gap-3 cursor-pointer">
                            <img src="../../public/company_logo/9.jfif" alt="logo2" className="w-8 h-8 scale1  " />
                            <div>
                                <p className="font-medium">Robi Axiata PLC.</p>
                                <p className="text-[14px] text-clr2 ">3 Jobs</p>
                            </div>
                        </Link>
                        <Link to={'https://www.aarong.com/bgd/landing-page'} target='_blank' className="flex items-center gap-3 cursor-pointer">
                            <img src="../../public/company_logo/13.jfif" alt="logo2" className="w-8 h-8 scale1 shadow2 " />
                            <div>
                                <p className="font-medium">Arong</p>
                                <p className="text-[14px] text-clr2 ">2 Jobs</p>
                            </div>
                        </Link>
                        <Link to={'https://fieldnation.com/'} target='_blank' className="flex items-center gap-3 cursor-pointer">
                            <img src="../../public/company_logo/11.jfif" alt="logo2" className="w-8 h-8 scale1 shadow2 " />
                            <div>
                                <p className="font-medium">Field Nation</p>
                                <p className="text-[14px] text-clr2 ">2 Jobs</p>
                            </div>
                        </Link>
                        <Link to={'https://www.foodpanda.com.bd/restaurants/new?lng=90.414964&lat=23.803782&vertical=restaurants'} target='_blank' className="flex items-center gap-3 cursor-pointer">
                            <img src="../../public/company_logo/12.jfif" alt="logo2" className="w-8 h-8 scale1 shadow2 " />
                            <div>
                                <p className="font-medium">foodpanda</p>
                                <p className="text-[14px] text-clr2 ">1 Jobs</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobSection;
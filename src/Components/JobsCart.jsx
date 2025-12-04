import { useContext, useState } from 'react';
import { useEffect } from 'react';
import { CiBookmark } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { DataContext } from '../Providers/DataProvider';
import { useLocation } from 'react-router-dom';
import { TiArrowSortedDown } from "react-icons/ti";
import { IoIosSearch } from "react-icons/io";


const JobsCart = () => {
    // To show the upperside of the page we use the below method
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    // setting posted date 
    function timeAgo(date) {
        const formatter = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });
        const diff = (new Date(date) - Date.now()) / 1000;

        const intervals = {
            year: 31536000,
            month: 2592000,
            week: 604800,
            day: 86400,
            hour: 3600,
            minute: 60
        };

        for (const [unit, seconds] of Object.entries(intervals)) {
            if (Math.abs(diff) > seconds) {
                return formatter.format(Math.round(diff / seconds), unit);
            }
        }
        return 'Just now';
    }

    //capitalize first word
    function capitalize(str) {
        if (!str) return 'Co.'; // Handle undefined/null
        if (typeof str !== 'string') {
            str = String(str); // Convert numbers/other types to string
        }
        return str.split(' ').map(w => w[0]?.toUpperCase() + w.slice(1)).join(' ');
    }
    // salary
    function set_salary(salary) {
        if (salary.toLowerCase() !== 'negotiable') return `${salary} BDT/Month`;
        return 'Negotiable';
    }

    //
    const location = useLocation();
    const { jobs, privateJobs, govtJobs, isLoading, isError, checkedList } = useContext(DataContext);
    const [jobss, setJobss] = useState(jobs);

    // filtering Jobs and show jobs according to route.
    useEffect(() => {
        // a function to filter all relevent jobs by All Filter
        function filteredJobs(JOBS) {
            const relevantJobs = JOBS.filter(job => {
                const searchableText = `
                    ${job.job_type} 
                    ${job.location} 
                    ${job.position_name} 
                    ${job.company_name} 
                    `.toLowerCase();

                // Check if ANY checked item matches
                return checkedList.some(item =>
                    searchableText.includes(item.toLowerCase())
                );
            });
            if (checkedList.length) {
                return relevantJobs;
            }
            else {
                return JOBS;
            }
        }

        if (location.pathname === '/privateJob') {
            setJobss(filteredJobs(privateJobs));
        } else if (location.pathname === '/govtJob') {
            setJobss(filteredJobs(govtJobs));
        }
        else {
            setJobss(filteredJobs(jobs));
        }

    }, [location.pathname, jobs, privateJobs, govtJobs, checkedList]);

    // sorting
    function handleAscending() {
        const sortedJobs = [...jobss].sort((a, b) =>
            a.position_name.localeCompare(b.position_name)
        );
        setJobss(sortedJobs);
    }
    function handleDescending() {
        const sortedJobs = [...jobss].sort((a, b) =>
            b.position_name.localeCompare(a.position_name)
        );
        setJobss(sortedJobs);
    }
    function handleRecent() {
        const sortedJobs = [...jobss].sort((a, b) =>
            new Date(b.createdAt) - new Date(a.createdAt) // Newest first
        );
        setJobss(sortedJobs);
    }
    function handleCompany() {
        const sortedJobs = [...jobss].sort((a, b) =>
            a.company_name.localeCompare(b.company_name)
        );
        setJobss(sortedJobs);
    }


    if (isLoading) {
        return (
            <div className="flex justify-center  h-screen mt-20">
                <div className="animate-spin rounded-full h-12 w-12 border-b-3 border-[#007456]"></div>
            </div>
        )
    }
    if (isError) return <p className=' text-[#007456] text-center mt-20 '>Error loading jobs!</p>;

    // console.log(jobs[0].company_logo)

    return (
        <div>
            <div className='flex items-center gap-2 my-5'>
                <hr className="flex-1 text-[#93c0b4] w-full " />
                <div className='flex items-center gap-1'>
                    <p className='text-[14px] text-gray-500 '>Sort by: </p>
                    <div className="dropdown dropdown-end">
                        <div tabIndex="0" role="button" className="text-[14px] text-[#003D20] flex items-center cursor-pointer">Click <TiArrowSortedDown className='h-5 w-5' /></div>
                        <ul tabIndex="-1" className="dropdown-content menu bg-[#007456]  text-white rounded-box z-1 w-52 p-2 shadow-sm">
                            <li><a onClick={handleRecent} className='hover:bg-[#47b396] '>Recent</a></li>
                            <li><a onClick={handleCompany} className='hover:bg-[#47b396] '>Company</a></li>
                            <li><a onClick={handleAscending} className='hover:bg-[#47b396] '>Ascending</a></li>
                            <li><a onClick={handleDescending} className='hover:bg-[#47b396] '>Descending</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='grid gap-5'>
                {
                    jobss.length ?
                        jobss.map(job => {
                            return (
                                <div key={job._id} className='border border-[#93c0b4] sm:border-white shadow2 rounded-xl'>
                                    <div className='relative flex gap-3 sm:gap-5 p-3 sm:p-5'>
                                        <div>
                                            <img src={`http://localhost:3000${job.company_logo}`} alt="img" className='h-10 w-10 sm:h-15 sm:w-15 rounded-sm shadow2 scale1 ' />
                                        </div>
                                        <div className='absolute right-5 top-4 flex gap-1 items-center text-clr2'>
                                            <CiBookmark />
                                            <p className='text-[14px]'>Save Job</p>
                                        </div>
                                        <div className='flex-1 grid gap-5'>
                                            <div className='flex justify-between'>
                                                <div>
                                                    <h3 className='text-[18px] sm:text-[22px] text-[#003D20] font-semibold '>{capitalize(job.position_name.trim())}</h3>
                                                    <div className='flex gap-1 text-[12px]  sm:text-[14px] text-clr2 '>
                                                        <p>{job.company_name.trim()}</p>
                                                        <p>|</p>
                                                        <p>{capitalize(job.location.trim())}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='flex gap-3 sm:gap-5 justify-between text-[14px] sm:text-[16px] '>
                                                <div>
                                                    <p className='text-clr2'>Experience</p>
                                                    <p className='text-[#003D20] font-semibold'>{job.experience.trim()} Years</p>
                                                </div>
                                                <div>
                                                    <p className='text-clr2'>Job Type</p>
                                                    <p className='text-[#003D20] font-semibold'>{capitalize(job.job_type.trim())}</p>
                                                </div>
                                                <div>
                                                    <p className='text-clr2'>Salary</p>
                                                    <p className='text-[#003D20] font-semibold'>{set_salary(job.salary.trim())}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex gap-3 sm:gap-5 justify-between items-center bg-green-50 rounded-b-xl  px-5 py-2'>
                                        <div className='text-clr2 text-[12px] sm:text-[14px] '>{timeAgo(job.createdAt)} </div>
                                        <div className='flex items-center gap-2 lg:gap-3 ' >
                                            <Link to={`/jobdetails/${job._id}`} className="btn btn-ghost bg-[#fbfdfd] text-[#007456] shadow-[0_1px_2px_#93c0b4] hover:text-white hover:bg-[#007456] rounded-xl  ">View Details</Link>
                                            <Link to={job.apply_link} target="_blank" rel="noopener noreferrer" className="btn bg-[#007456] hover:bg-[#016147] text-white shadow-[0_1px_2px_#007456] hover:text-white rounded-xl ">Apply Now</Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                        :
                        <div className='h-screen flex flex-col gap-5 items-center mt-20 '>
                            <IoIosSearch className="w-[50px] h-[50px] sm:w-[100px] sm:h-[100px]" />
                            <p className='text-[20px] font-semibold '>Sorry, No results found!</p>
                            <p>Try different keywords or browse all categories</p>
                        </div>
                }

            </div>
        </div>
    );
};

export default JobsCart;
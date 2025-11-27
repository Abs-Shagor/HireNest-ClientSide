import { useContext } from 'react';
import { DataContext } from '../Providers/DataProvider';
import { useEffect } from 'react';
import { CiBookmark } from "react-icons/ci";
import { Link, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";

const SearchOptionsPage = () => {
    const { searchedOption, setSearchedOption, jobs } = useContext(DataContext);
    const navigate = useNavigate();
    const relevantJobs = jobs.filter(job => {
        const searchTerm = searchedOption.toLowerCase();
        const searchableText = `
                    ${job.position_name} 
                    ${job.company_name} 
                    ${job.location} 
                    ${job.job_type} 
                    ${job.job_category}
                    `.toLowerCase();
        return searchableText.includes(searchTerm);
    })
    // console.log(relevantJobs.length)

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

    return (
        <div>
            <button onClick={() => navigate(-1)} className="flex items-center gap-1 text-[#003D20] font-semibold cursor-pointer mt-10 mb-5"><FaArrowLeft /><p>Back to home</p></button>

            {
                relevantJobs.length === 0 ?
                    <div className='h-screen flex flex-col gap-5 items-center mt-20 '>
                        <IoIosSearch className="w-[50px] h-[50px] sm:w-[100px] sm:h-[100px]" />
                        <p className='text-[20px] font-semibold '>Sorry, No results found!</p>
                        <p>Try different keywords or browse all categories</p>
                    </div>
                    :
                    <div className='flex items-center justify-end gap-0.5 text-gray-600 mb-5'> <IoIosSearch className='w-7 h-7' />  {relevantJobs.length} results found</div>
            }

            <div className='grid lg:grid-cols-2 gap-5'>
                {
                    relevantJobs.map(job => {
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
                }

            </div>
        </div>
    );
};

export default SearchOptionsPage;
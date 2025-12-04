import { useEffect, useContext } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";
import { DataContext } from '../Providers/DataProvider';
import { CiBookmark } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { IoShareSocialOutline } from "react-icons/io5";


const JobDetails = () => {
    const navigate = useNavigate();
    const { jobs } = useContext(DataContext);

    // To show the upperside of the page we use the below method
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    // loading job data
    const param = useParams();
    const job = jobs?.find(job => job._id == param.jobId);
    // console.log(job)


    return (
        <div>
            <button onClick={() => navigate(-1)} className="flex items-center gap-1 text-[#003D20] font-semibold cursor-pointer mt-10 mb-5"><FaArrowLeft /><p>Back to home</p></button>

            <div className='bg-green-50 p-3 sm:p-5 md:py-10 md:px-20 rounded-lg shadow2 '>
                <div className='flex justify-between items-center gap-3'>
                    <h3 className='text-[18px] sm:text-[26px]  text-[#003D20] italic font-semibold '>{job?.position_name}</h3>
                    <div className='flex items-center gap-2'>
                        <Link to={job?.apply_link} target="_blank" rel="noopener noreferrer" className="btn bg-[#007456] hover:bg-[#016147] text-white shadow-[0_1px_2px_#007456] hover:text-white rounded-lg ">Apply </Link>
                        <Link className='hidden sm:block bg-green-100 border border-gray-300 rounded-md p-2'><CiBookmark /></Link>
                        <Link className='hidden sm:block bg-green-100 border border-gray-300 rounded-md p-2'><IoShareSocialOutline /></Link>
                    </div>
                </div>
                <div className='flex items-center gap-3 sm:gap-5 mt-5 sm:mt-10'>
                    <img src={`http://localhost:3000${job?.company_logo}`} alt="img" className='w-15 h-15 sm:w-20 sm:h-20 rounded-sm  scale1 ' />
                    <div className='flex flex-col gap-3 sm:gap-5'>
                        <div className='flex items-center gap-3'>
                            <h3 className='text-[#007456]  font-medium'>{job?.company_name}</h3>
                            <p className='text-gray-400'>|</p>
                            <div className='flex items-center gap-1 text-gray-500'>
                                <CiLocationOn />
                                <p>{job?.location}</p>
                            </div>
                        </div>
                        <div className='flex gap-2'>
                            <button className='bg-white text-[14px] text-gray-500 rounded-md px-3 py-1 shadow3 '>{job?.job_type}</button>
                            <button className='bg-white text-[14px] text-gray-500 rounded-md px-3 py-1 shadow3 '>{job?.experience} Years</button>
                            <button className='bg-white text-[14px] text-gray-500 rounded-md px-3 py-1 shadow3 '>{job?.job_category}</button>
                        </div>
                    </div>
                </div>
                <hr className="flex-1 text-[#93c0b4] w-full mt-5 mb-5 sm:mb-10" />
                {
                    job?.job_category === 'govt' ?
                        <iframe
                            src={`http://localhost:3000${job?.pdf_file}#view=fitH`}
                            width="100%"
                            height="650px"
                            title="Job Description PDF"
                        />
                        :
                        <div>
                            <h4 className='text-[#003D20] text-[18px] font-semibold mb-2 '>Overview</h4>
                            <p className='whitespace-pre-line text-gray-500 '>{job?.description}</p>
                        </div>
                }
            </div>
        </div>
    );
};

export default JobDetails;
import { useEffect, useContext } from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaArrowLeft } from "react-icons/fa";
import { DataContext } from '../Providers/DataProvider';


const JobDetails = () => {
    const navigate = useNavigate();
    const { jobs } = useContext(DataContext);

    // To show the upperside of the page we use the below method
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    // loading job data
    const param = useParams();
    const job = jobs.find(job => job._id == param.jobId);
    console.log(job)


    return (
        <div>
            <button onClick={() => navigate(-1)} className="flex items-center gap-1 text-[#003D20] font-semibold cursor-pointer mt-10 mb-5"><FaArrowLeft /><p>Back to home</p></button>

            {
                job.job_category === 'govt' ?
                    <iframe
                        src={`http://localhost:3000${job.pdf_file}#view=fitH`}
                        width="100%"
                        height="650px"
                        title="Job Description PDF"
                    />
                    :
                    <div className='bg-green-50 p-5'>
                        Hey
                    </div>
            }

        </div>
    );
};

export default JobDetails;
import { useEffect, useContext } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";
import { DataContext } from '../Providers/DataProvider';
import { CiBookmark } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { IoShareSocialOutline } from "react-icons/io5";


const TermsAndService = () => {
    const navigate = useNavigate();

    // To show the upperside of the page we use the below method
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);


    return (
        <div>
            <button onClick={() => navigate(-1)} className="flex items-center gap-1 text-[#003D20] font-semibold cursor-pointer mt-10 mb-5"><FaArrowLeft /><p>Back to home</p></button>

            <div className='bg-green-50 p-3 sm:p-5 md:py-10 md:px-20 rounded-lg shadow2 '>
                <div className='flex items-center justify-between'>
                    <h2 className='text-[#003D20] text-[20px] sm:text-[22px] font-semibold mb-2 '>Terms of Service</h2>
                    <p className='text-[14px] sm:text-[16px] text-gray-500'>Last Updated: 4/12/2025</p>
                </div>
                <hr className="text-[#93c0b4]" />
                <div className='grid gap-5 mt-5'>
                    <div>
                        <h3 className='sm:text-[18px] text-[#003D20] font-medium '>1. Acceptance of Terms</h3>
                        <p className='text-gray-500 text-[14px] sm:text-[16px]'>
                            By accessing or using HireNest ("the Platform"), you agree to comply with and be bound by these Terms of Service.
                        </p>
                    </div>
                    <div>
                        <h3 className='sm:text-[18px] text-[#003D20] font-medium '>2. Services Provided</h3>
                        <p className='text-gray-500 text-[14px] sm:text-[16px]'>
                            HireNest is a job portal connecting employers with job seekers. We facilitate job postings, applications, and professional networking. We do not guarantee employment or candidate hiring.
                        </p>
                    </div>
                    <div>
                        <h3 className='sm:text-[18px] text-[#003D20] font-medium '>3. User Accounts</h3>
                        <p className='text-gray-500 text-[14px] sm:text-[16px]'>
                            <ul className='list-disc pl-5'>
                                <li>You must be at least 16 years old to register.</li>
                                <li>Provide accurate, current, and complete information.</li>
                                <li>You are responsible for maintaining account security and all activities under your account.</li>
                            </ul>
                        </p>
                    </div>
                    <div>
                        <h3 className='sm:text-[18px] text-[#003D20] font-medium '>4. Job Seekers</h3>
                        <p className='text-gray-500 text-[14px] sm:text-[16px]'>
                            <ul className='list-disc pl-5'>
                                <li>You may browse jobs, apply, and upload resumes/CVs.</li>
                                <li>You warrant that all information provided is truthful and not misleading.</li>
                            </ul>
                        </p>
                    </div>
                    <div>
                        <h3 className='sm:text-[18px] text-[#003D20] font-medium '>5. Employers</h3>
                        <p className='text-gray-500 text-[14px] sm:text-[16px]'>
                            <ul className='list-disc pl-5'>
                                <li>You may post legitimate job vacancies.</li>
                                <li>You agree not to post discriminatory, fraudulent, or illegal job listings.</li>
                                <li>You are responsible for the hiring process and candidate communication.</li>
                            </ul>
                        </p>
                    </div>
                    <div>
                        <h3 className='sm:text-[18px] text-[#003D20] font-medium '>6. Prohibited Conduct</h3>
                        <p className='text-gray-500 text-[14px] sm:text-[16px]'>
                            <ul className='list-disc pl-5'>
                                <li>Post false, misleading, or illegal content.</li>
                                <li>Harass, spam, or discriminate against others.</li>
                                <li>Scrape data or interfere with Platform functionality.</li>
                                <li>Use the Platform for unauthorized commercial purposes.</li>
                            </ul>
                        </p>
                    </div>
                    <div>
                        <h3 className='sm:text-[18px] text-[#003D20] font-medium '>7. Intellectual Property</h3>
                        <p className='text-gray-500 text-[14px] sm:text-[16px]'>
                            All content on HireNest (logos, text, design) is owned by HireNest or licensed partners. Users retain rights to their uploaded content but grant HireNest a license to display and distribute it within the Platform.
                        </p>
                    </div>
                    <div>
                        <h3 className='sm:text-[18px] text-[#003D20] font-medium '>8. Limitation of Liability</h3>
                        <p className='text-gray-500 text-[14px] sm:text-[16px]'>
                            <ul className='list-disc pl-5'>
                                <li>Job application outcomes or hiring decisions.</li>
                                <li>User-generated content accuracy.</li>
                                <li>Technical interruptions or data loss.</li>
                                <li>Third-party links or services.</li>
                            </ul>
                        </p>
                    </div>
                    <div>
                        <h3 className='sm:text-[18px] text-[#003D20] font-medium '>9. Termination</h3>
                        <p className='text-gray-500 text-[14px] sm:text-[16px]'>
                            We reserve the right to suspend or terminate accounts violating these Terms, at our sole discretion, without prior notice.
                        </p>
                    </div>
                    <div>
                        <h3 className='sm:text-[18px] text-[#003D20] font-medium '>10. Changes to Terms</h3>
                        <p className='text-gray-500 text-[14px] sm:text-[16px]'>
                            We may update these Terms periodically. Continued use after changes constitutes acceptance.
                        </p>
                    </div>
                    <div>
                        <h3 className='sm:text-[18px] text-[#003D20] font-medium '>11. Governing Law</h3>
                        <p className='text-gray-500 text-[14px] sm:text-[16px]'>
                            These Terms are governed by the laws of Bangladesh.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TermsAndService;
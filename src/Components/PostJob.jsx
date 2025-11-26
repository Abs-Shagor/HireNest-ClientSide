import { useEffect, useRef } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { SlCup } from "react-icons/sl";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { IoBagAddSharp } from "react-icons/io5";
import { MdPublish } from 'react-icons/md';
import { AiOutlineUpload } from 'react-icons/ai';
import { IoBagHandleSharp } from "react-icons/io5";

import axios from 'axios';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from "react";

const PostJob = () => {
    const navigate = useNavigate();
    const formRef = useRef();
    const queryClient = useQueryClient();

    // To show the upperside of the page we use the below method
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);


    // handling image upload 
    const [fileName, setFileName] = useState('No file chosen');
    const handleFileChange = (event) => {
        if (event.target.files[0]) {
            setFileName(event.target.files[0].name);
        } else {
            setFileName('No file chosen');
        }
    };
    // handling pdf upload
    const [pdfFileName, setPdfFileName] = useState('No file chosen');
    const handlePdfFileChange = (event) => {
        if (event.target.files[0]) {
            setPdfFileName(event.target.files[0].name);
        } else {
            setPdfFileName('No file chosen');
        }
    };

    // sending data to serverside 
    const mutation = useMutation({
        mutationFn: async (formData) => {
            const res = await axios.post('http://localhost:3000/addjob', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'  // Important for file upload
                }
            });
            return res.data;
        },
        onSuccess: () => {
            toast.success("Job posted successfully!");
            formRef.current.reset();
            setFileName('No file chosen');  // Reset file states
            setPdfFileName('No file chosen');
            queryClient.invalidateQueries(['jobs']);
        },
        onError: () => toast.error("Failed to post job!"),
    });

    function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        mutation.mutate(formData);  // Send FormData, don't convert to object
    }


    return (
        <div>
            <button onClick={() => navigate('/')} className="flex items-center gap-1 text-[#003D20] font-semibold cursor-pointer mt-10 mb-5"><FaArrowLeft /><p>Back to home</p></button>
            <div className="bg-[#f6f6f6] rounded-lg p-10 ">
                {/* <p className='text-[14px] text-center text-[#70624c]'>--- New Entry ---</p> */}
                <h1 className='flex gap-1 items-center text-[26px] text-center text-[#003D20] font-semibold mb-5 sm:mb-10'> <IoBagHandleSharp />Publish a Job</h1>
                <form onSubmit={handleSubmit} ref={formRef} className="grid gap-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                            <p className="text-[#007456] mb-2">Position Name</p>
                            <input type="text" name="position_name" id="" placeholder="e.x. web developer" required className="w-full bg-white shadow-[0_0_1px_#9f9494] rounded-sm outline-none focus:ring-1 focus:ring-[#9f9494] transition placeholder-gray-400 p-2" />
                        </div>
                        <div>
                            <p className="text-[#007456] mb-2">Job Type</p>
                            <input type="text" name="job_type" id="" placeholder="e.x. Full time, Part time" required className="w-full bg-white shadow-[0_0_1px_#9f9494] rounded-sm outline-none focus:ring-1 focus:ring-[#9f9494] transition placeholder-gray-400 p-2" />
                        </div>
                        <div>
                            <p className="text-[#007456] mb-2">Experience</p>
                            <input type="text" name="experience" id="" placeholder="Enter experience in year" required className="w-full bg-white shadow-[0_0_1px_#9f9494] rounded-sm outline-none focus:ring-1 focus:ring-[#9f9494] transition placeholder-gray-400 p-2" />
                        </div>
                        <div>
                            <p className="text-[#007456] mb-2">Salary</p>
                            <input type="text" name="salary" id="" placeholder="Enter salary in BDT" required className="w-full bg-white shadow-[0_0_1px_#9f9494] rounded-sm outline-none focus:ring-1 focus:ring-[#9f9494] transition placeholder-gray-400 p-2" />
                        </div>
                        <div>
                            <p className="text-[#007456] mb-2">Company Name</p>
                            <input type="text" name="company_name" id="" placeholder="Enter company name" required className="w-full bg-white shadow-[0_0_1px_#9f9494] rounded-sm outline-none focus:ring-1 focus:ring-[#9f9494] transition placeholder-gray-400 p-2" />
                        </div>
                        <div>
                            <p className="text-[#007456] mb-2">Location</p>
                            <input type="text" name="location" id="" placeholder="Enter location" required className="w-full bg-white shadow-[0_0_1px_#9f9494] rounded-sm outline-none focus:ring-1 focus:ring-[#9f9494] transition placeholder-gray-400 p-2" />
                        </div>
                        <div>
                            <p className="text-[#007456] mb-2">Upload Photo</p>
                            <label className="flex items-center gap-1 w-full bg-white shadow-[0_0_1px_#9f9494] rounded-sm p-2 cursor-pointer">
                                <input
                                    type="file"
                                    name="company_logo"
                                    accept="image/*"
                                    required
                                    className="hidden"
                                    onChange={handleFileChange}
                                />
                                <span className="text-[14px] bg-green-50 border border-gray-400 px-2">Choose File</span>
                                <span className={`text-[14px] ${(fileName !== 'No file chosen') ? 'font-semibold text-gray-600' : 'text-gray-400'}`}> {fileName}</span>
                            </label>
                        </div>
                        <div>
                            <p className="text-[#007456] mb-2">Job Category</p>
                            <select
                                name="job_category"
                                required
                                className="w-full bg-white shadow-[0_0_1px_#9f9494] rounded-sm outline-none focus:ring-1 focus:ring-[#9f9494] transition text-gray-600 p-2"
                            >
                                <option value="">Select</option>
                                <option value="private">Private</option>
                                <option value="govt">Government</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <p className="text-[#007456] mb-2">Apply Link</p>
                        <input type="text" name="apply_link" id="" placeholder="Enter URL" required className="w-full bg-white shadow-[0_0_1px_#9f9494] rounded-sm outline-none focus:ring-1 focus:ring-[#9f9494] transition placeholder-gray-400 p-2" />
                    </div>
                    <div>
                        <p className="text-[#007456] mb-2">Description</p>
                        <textarea
                            name="description"
                            placeholder="Enter job description"
                            className="w-full bg-white shadow-[0_0_1px_#9f9494] rounded-sm outline-none focus:ring-1 focus:ring-[#9f9494] transition placeholder-gray-400 p-2"
                            rows={4}
                        ></textarea>
                    </div>

                    <div className="flex gap-2">
                        <p className="text-[#007456] mb-2 flex"><span className="sm:hidden">Or Upload Pdf</span> <span className="hidden sm:block">Or Upload Description as pdf:</span> </p>
                        <label className="cursor-pointer">
                            <input
                                type="file"
                                name="pdf_file"
                                accept=".pdf"
                                className="hidden"
                                onChange={handlePdfFileChange}
                            />
                            {pdfFileName === 'No file chosen' ? (
                                <span className="text-[14px] bg-green-50 border border-gray-400 px-2">Choose File</span>
                            ) : (
                                <span className="text-[14px] font-semibold text-gray-600">
                                    {pdfFileName}
                                </span>
                            )}
                        </label>
                    </div>

                    <button className="w-full btn btn-soft  p-3 sm:p-4 bg-[#007456] hover:bg-[#016147] text-white"> Post </button>
                </form>
            </div>
        </div>
    );
};

export default PostJob;
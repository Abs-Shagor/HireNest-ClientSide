import { useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { SlCup } from "react-icons/sl";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { IoBagAddSharp } from "react-icons/io5";
import { MdPublish } from 'react-icons/md';
import { AiOutlineUpload } from 'react-icons/ai';
import { IoBagHandleSharp } from "react-icons/io5";

const PostJob = () => {
    // To show the upperside of the page we use the below method
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);


    const navigate = useNavigate();
    function handleSubmit(event) {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const coffeeData = Object.fromEntries(formData.entries()); // this will make an object with form data
        // console.log(coffeeData);

        // sending data to server x database
        fetch('https://bean-and-leaf-server-side.vercel.app/addcoffee', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(coffeeData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    // console.log(data); // this will console log the new added coffee object
                    toast.success('Coffee added successfully!');
                    form.reset();
                }
            })
    }


    return (
        <div>
            <button onClick={() => navigate('/')} className="flex items-center gap-1 text-[#003D20] font-semibold cursor-pointer mt-10"><FaArrowLeft /><p>Back to home</p></button>
            <div className="bg-[#f6f6f6] rounded-lg p-10 my-10">
                {/* <p className='text-[14px] text-center text-[#70624c]'>--- New Entry ---</p> */}
                <h1 className='flex gap-1 items-center text-[26px] text-center text-[#003D20] font-semibold mb-5 sm:mb-10'> <IoBagHandleSharp />Publish a Job</h1>
                <form onSubmit={handleSubmit} className="grid gap-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                            <p className="text-[#007456] mb-2">Position Name</p>
                            <input type="text" name="name" id="" placeholder="e.x. web developer" required className="w-full bg-white shadow-[0_0_1px_#9f9494] rounded-sm outline-none focus:ring-1 focus:ring-[#9f9494] transition placeholder-gray-400 p-2" />
                        </div>
                        <div>
                            <p className="text-[#007456] mb-2">Job Type</p>
                            <input type="text" name="price" id="" placeholder="Enter job type" required className="w-full bg-white shadow-[0_0_1px_#9f9494] rounded-sm outline-none focus:ring-1 focus:ring-[#9f9494] transition placeholder-gray-400 p-2" />
                        </div>
                        <div>
                            <p className="text-[#007456] mb-2">Experience</p>
                            <input type="text" name="category" id="" placeholder="Enter experience in year" required className="w-full bg-white shadow-[0_0_1px_#9f9494] rounded-sm outline-none focus:ring-1 focus:ring-[#9f9494] transition placeholder-gray-400 p-2" />
                        </div>
                        <div>
                            <p className="text-[#007456] mb-2">Salary</p>
                            <input type="text" name="chef" id="" placeholder="Enter salary" required className="w-full bg-white shadow-[0_0_1px_#9f9494] rounded-sm outline-none focus:ring-1 focus:ring-[#9f9494] transition placeholder-gray-400 p-2" />
                        </div>
                        <div>
                            <p className="text-[#007456] mb-2">Company Name</p>
                            <input type="text" name="taste" id="" placeholder="Enter company name" required className="w-full bg-white shadow-[0_0_1px_#9f9494] rounded-sm outline-none focus:ring-1 focus:ring-[#9f9494] transition placeholder-gray-400 p-2" />
                        </div>
                        <div>
                            <p className="text-[#007456] mb-2">Location</p>
                            <input type="text" name="details" id="" placeholder="Enter location" required className="w-full bg-white shadow-[0_0_1px_#9f9494] rounded-sm outline-none focus:ring-1 focus:ring-[#9f9494] transition placeholder-gray-400 p-2" />
                        </div>
                    </div>
                    <div>
                        <p className="text-[#007456] mb-2">Company Logo</p>
                        <input type="text" name="photo" id="" placeholder="Enter logo URL" required className="w-full bg-white shadow-[0_0_1px_#9f9494] rounded-sm outline-none focus:ring-1 focus:ring-[#9f9494] transition placeholder-gray-400 p-2" />
                    </div>
                    <div>
                        <p className="text-[#007456] mb-2">Description</p>
                        <textarea
                            name="description"
                            placeholder="Enter job description"
                            required
                            className="w-full bg-white shadow-[0_0_1px_#9f9494] rounded-sm outline-none focus:ring-1 focus:ring-[#9f9494] transition placeholder-gray-400 p-2"
                            rows={4}
                        ></textarea>
                    </div>

                    <button className="w-full btn btn-soft  p-3 sm:p-4 bg-[#007456] hover:bg-[#016147] text-white"> Post </button>
                </form>
            </div>
        </div>
    );
};

export default PostJob;
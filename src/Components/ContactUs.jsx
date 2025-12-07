import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaTelegramPlane } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { useForm } from '@formspree/react';

const ContactUs = () => {
    const [state, handleSubmit] = useForm("manlvedq");
    useEffect(() => {
        if (state.succeeded) {
            toast.success("Message sent successfully!");
        }
    }, [state.succeeded]);

    // To show the upperside of the page we use the below method
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    return (
        <div className="max-w-[1282px] mx-auto px-2 flex flex-col md:flex-row gap-10 mt-20 ">

            <div className='bg-green-50 flex-1 border border-[#93c0b4] sm:border-white shadow2 rounded-2xl'>
                <h3 className=' text-[24px] text-[#007456] text-center sm:text-start font-semibold px-5 pt-5 pb-2'>FEEDBACK</h3>
                <hr className="text-[#93c0b4]" />
                <form onSubmit={handleSubmit} className="grid gap-2 p-5">
                    <div className="grid gap-2 md:grid-cols-2">
                        <input type="text" name="name" placeholder="Enter Name" required className="bg-[#fbfdfd] placeholder-[#769788] rounded-md outline-none border border-[#c5ded7] focus:ring-1 focus:ring-[#007456] transition p-2" />
                        <input type="email" name="email" placeholder="Email" required className="bg-[#fbfdfd] placeholder-[#769788] rounded-md outline-none border border-[#c5ded7] focus:ring-1 focus:ring-[#007456] transition p-2" />
                    </div>
                    <textarea type="text" name="message" placeholder="Description..." required className="bg-[#fbfdfd]  rounded-md placeholder-[#769788] outline-none border border-[#c5ded7] focus:ring-1 focus:ring-[#007456] transition p-2 h-[100px] resize-none"></textarea>
                    <button className="btn bg-[#007456] hover:bg-[#016147] text-white shadow-[0_1px_2px_#007456] hover:text-white rounded-lg mt-2">Send Message<FaTelegramPlane size={20} />
                    </button>
                </form>
            </div>

            <div className='bg-green-50 md:max-w-[350px] lg:max-w-[400px] grid gap-5 border-[#93c0b4] sm:border-white shadow2 p-5 rounded-2xl'>
                <div>
                    <div className="flex items-center gap-1 mb-2">
                        <img src="HN202.png" alt="" className='w-8' />
                        <h3 className=' text-[24px] text-[#003D20] font-semibold'>HireNest</h3>
                    </div>
                    <p className='  text-clr2 text-justify max-w-[400px]  '>Find your dream job or the perfect candidate easily with Hirenest — fast, simple, and reliable.</p>
                </div>
                {/* Social media */}
                <div className="flex items-center gap-3 my-3 ">
                    <a href='https://www.linkedin.com/in/mohammad-abu-bakkar-siddik-829451295/' target="_blank" >
                        <FaLinkedin className="w-6 h-6 text-[#007456] transform transition-transform duration-500 ease-in-out hover:scale-110" />
                    </a>
                    <a href='https://www.facebook.com/absShagor99' target="_blank" >
                        <FaFacebook className="w-6 h-6 text-[#007456] transform transition-transform duration-500 ease-in-out hover:scale-110" />
                    </a>
                    <a href='' target="_blank"  >
                        <RiInstagramFill className="w-6 h-6 text-[#007456] transform transition-transform duration-500 ease-in-out hover:scale-110" />
                    </a>
                    <a href='https://x.com/abs_shagor?s=21' target="_blank" >
                        <FaXTwitter className="w-6 h-6 text-[#007456] transform transition-transform duration-500 ease-in-out hover:scale-110" />
                    </a>

                </div>
                <div>
                    <h3 className=' text-[24px] text-[#007456] font-semibold mb-2'>Get in Touch</h3>
                    <div className="grid gap-2">
                        <div className="flex items-center gap-2">
                            <FaPhoneAlt className="w-4 h-4 text-[#007456]" />
                            <p className=" text-clr2 ">+880 1879097422</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <MdEmail className="w-4 h-4 text-[#007456]" />
                            <p className=" text-clr2">siddik56u@gmail.com</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaLocationDot className="w-4 h-4 text-[#007456]" />
                            <p className=" text-clr2">Chittagong, Bangladesh</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
import { IoNewspaperOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Footer = () => {
    function handleSubscribe() {
        toast.warning('Subscription method coming soon...')
    }

    return (
        <div className='bg-clr1 text-white mt-20 '>
            <div className='max-w-[1282px] mx-auto px-2 pt-5 flex flex-col sm:flex-row gap-5 items-center justify-center sm:justify-between '>
                <div className="flex flex-col sm:flex-row items-center gap-4 ">
                    <div className='bg-white w-12 h-12 flex justify-center items-center rounded-lg'>
                        <IoNewspaperOutline className="w-8 h-8 text-[#003D20]" />
                    </div>
                    <div>
                        <h3 className="text-[22px] font-semibold ">Subscribe to our newsletter</h3>
                        <p className="text-[14px] text-[#b2d6d4] ">We will notify you to the best opportunities.</p>
                    </div>
                </div>
                <div className="flex gap-2 items-center ">
                    <input className="bg-white md:w-[280px] lg:w-[300px]  rounded-full  text-[#003D20] placeholder-[#769788] focus:outline-none focus:ring-2 px-3 py-2" type="text" name="" id="" placeholder="Enter your email" />
                    <button onClick={handleSubscribe} className="btn btn-ghost border bg-white text-[#003D20] shadow-[0_1px_2px_#007456] hover:text-white hover:bg-[#007456] rounded-full ">Subscribe </button>
                </div>
            </div>
            <hr className='my-5' />
            <div className="max-w-[1282px] mx-auto px-2 ">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-5 py-5">
                    <div className="grid grid-cols-1 gap-2">
                        <Link to={'/'} className="text-[22px] font-semibold">HireNest</Link>
                        <Link to={'/'} className="text-[#b2d6d4] hover:text-white">Home</Link>
                        <Link to={'/govtJob'} className="text-[#b2d6d4] hover:text-white">Government Jobs</Link>
                        <Link to={'/privateJob'} className="text-[#b2d6d4] hover:text-white">Private Jobs</Link>
                        <Link to={'/contactUs'} className="text-[#b2d6d4] hover:text-white">Contact Us</Link>
                    </div>
                    <div className="grid grid-cols-1 gap-2">
                        <Link to={'/'} className="text-[22px] font-semibold">Help Center</Link>
                        <Link to={'/'} className="text-[#b2d6d4] hover:text-white">FAQS</Link>
                        <Link to={'/'} className="text-[#b2d6d4] hover:text-white">Support</Link>
                        <Link to={'/'} className="text-[#b2d6d4] hover:text-white">Contact Us</Link>
                        <Link to={'/'} className="text-[#b2d6d4] hover:text-white">Provide Feedback</Link>
                    </div>
                    <div className="grid grid-cols-1 gap-2">
                        <Link to={'/'} className="text-[22px] font-semibold">Policies</Link>
                        <Link to={'/'} className="text-[#b2d6d4] hover:text-white">Cookie Policy</Link>
                        <Link to={'/'} className="text-[#b2d6d4] hover:text-white">Privacy Policy</Link>
                        <Link to={'/'} className="text-[#b2d6d4] hover:text-white">User Agreement</Link>
                        <Link to={'/'} className="text-[#b2d6d4] hover:text-white">Terms & Conditions</Link>
                    </div>
                    <div className="grid grid-cols-1 gap-2">
                        <Link to={'/'} className="text-[22px] font-semibold">Office</Link>
                        <Link to={'/'} className="text-[#b2d6d4] hover:text-white">Level-7, Abs Centre,</Link>
                        <Link to={'/'} className="text-[#b2d6d4] hover:text-white">Chittagong, Bangladesh</Link>
                        <Link to={'/'} className="text-[#b2d6d4] hover:text-white flex gap-1"><span className="hidden lg:block">Support: </span><span>siddik56u@gmail.com</span></Link>
                        <Link to={'/'} className="text-[#b2d6d4] hover:text-white flex gap-1"><span className="hidden lg:block">Available: </span><span>09:00 AM to 06:00 PM</span></Link>
                    </div>
                </div>
                <h5 className="text-center mt-10">© 2025 HireNest. All rights reserved.</h5>
            </div>
        </div>
    );
};

export default Footer;
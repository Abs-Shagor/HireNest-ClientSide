import { Link, NavLink, useNavigate } from "react-router-dom";


const ForgotPasswordPage2 = () => {
    return (
        <div className="min-h-screen flex flex-col gap-10 justify-center items-center">
            <div className=" max-w-[350px] border border-gray-500 p-10 rounded-xl ">
                <h1 className="text-[24px]">Reset  mail sent</h1>
                <p className="text-gray-700 text-justify mt-5">To set a new password , we've sent a mail to your Email address. Please check your inbox or spam folder!</p>
            </div>
        </div>
    );
};

export default ForgotPasswordPage2;
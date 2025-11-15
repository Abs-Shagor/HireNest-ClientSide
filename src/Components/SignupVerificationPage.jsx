import { Link, NavLink, useNavigate } from "react-router-dom";

const SignupVerificationPage = () => {
    return (
        <div className="min-h-screen flex flex-col gap-10 justify-center items-center">
            <div className=" max-w-[360px] border border-gray-500 p-10 rounded-xl ">
                <h1 className="text-[24px]">Verification mail Sent</h1>
                <p className="text-gray-700 text-justify mt-5">To verify your email , we've sent a mail to your Email address. Please check your inbox or spam folder.</p>
            </div>
        </div>
    );
};

export default SignupVerificationPage;
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


const ErrorPage = () => {
    const navigate = useNavigate();
    return (
        <div className="max-w-[1282px] mx-auto px-2 ">
            <button onClick={() => navigate('/')} className="flex items-center gap-1  font-semibold cursor-pointer mt-10"><FaArrowLeft /><p>Back to home</p></button>
            <img src="../../public/404.gif" alt="" className="mx-auto" />
            {/* <div className="h-screen w-screen flex justify-center items-cente ">
                <img src="../../public/404.gif" alt="" />
            </div> */}
        </div>
    );
};

export default ErrorPage;
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../Providers/AuthProvider';



const ForgotPasswordPage1 = () => {
    const { passwordReset } = useContext(AuthContext);
    const navigate = useNavigate();


    // handling forgate password
    function handleForgatePassword(event) {
        event.preventDefault();
        const email = event.target.email.value;
        passwordReset(email)
            .then(res => {
                navigate('/forgotPasswordPage2');
            })
            .catch(error => {
                toast.error('Invalid Credentials!');
            })
    }

    return (
        <div className=" min-h-screen flex justify-center items-center p-2">
            <div className="max-w-[450px] w-full bg-green-50 backdrop-blur-lg border border-white/30 rounded-xl shadow-2xl p-8 sm:p-12  ">
                <div className="text-center mb-6">
                    <h1 className=" text-2xl md:text-3xl font-bold text-[#003D20] ">Change Password</h1>
                    <p className="text-[#48928e] mt-1">continue to get a password reset link.</p>
                </div>

                <form onSubmit={handleForgatePassword} className="space-y-4">
                    <div>
                        <label className="block font-medium text-[#003D20] mb-2">Email</label>
                        <input
                            type="email"
                            name="email"
                            required
                            autoComplete="email"
                            className="w-full px-4 py-2 bg-white/50 border border-gray-300 rounded-lg outline-none focus:ring-1 focus:ring-blue-400 transition "
                            placeholder="Enter your email"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-[#007456] hover:bg-[#016147] text-white cursor-pointer py-2 rounded-lg font-semibold transition shadow-md hover:shadow-lg">
                        Continue
                    </button>
                    <span onClick={() => navigate(-1)} className="block text-[#003D20] hover:bg-gray-200 text-center border border-gray-300 cursor-pointer py-2  rounded-lg font-semibold transition  ">Back</span>
                </form>
            </div>
        </div>
    );
};

export default ForgotPasswordPage1;
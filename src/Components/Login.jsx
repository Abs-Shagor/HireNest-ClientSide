import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useRef } from "react";
import { useContext, useState } from 'react';
import { AuthContext } from "../Providers/AuthProvider";


const Login = () => {
    const { signin, signinWithGoogle, signinWithGithub, user } = useContext(AuthContext);
    const navigate = useNavigate();

    // password field eye (show password) handling
    const [showPassword, setShowPassword] = useState(false);
    function handleShowPassword(event) {
        event.preventDefault();
        setShowPassword(!showPassword);
    }

    // Sign in with Email/Password
    function handleSubmit(event) {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        signin(email, password)
            .then(res => {
                if (res.user.emailVerified) {
                    toast.success('Login Successful!');
                    event.target.reset();
                    setTimeout(() => navigate('/'), 1000);
                }
                else {
                    toast.warn('Please Verify Your Email!');
                }
            })
            .catch(error => {
                toast.error('Invalid email or password!');
            })
    };


    // sign in with Google
    function handleGoogleLogin() {
        signinWithGoogle()
            .then(res => {
                toast.success('Login Successful!');
                setTimeout(() => navigate('/'), 500);
            })
            .catch(error => {
                toast.error('Invalid Credentials!');
            })
    }

    // Sign in with Github
    function handleGithubLogin() {
        signinWithGithub()
            .then(res => {
                toast.success('Login Successful!');
                setTimeout(() => navigate('/'), 500);
            })
            .catch(error => {
                toast.error('Invalid Credentials!');
            })
    }


    return (
        <div className=" min-h-screen flex justify-center items-center mt-5 p-2">
            <div className="max-w-[450px] w-full bg-green-50 backdrop-blur-lg border border-white/30 rounded-xl shadow-2xl p-8 sm:px-12 sm:pb-12  ">
                <div className="text-center mb-6">
                    <h1 className=" text-2xl md:text-3xl font-bold text-[#003D20]">Log in</h1>
                    <p className="text-[#48928e] mt-1">to continue to your account.</p>
                </div>

                <form onSubmit={handleSubmit} autoComplete="off" className="space-y-4">
                    <div>
                        <label className="block  font-medium text-[#003D20] mb-2">Email</label>
                        <input
                            type="email"
                            name="email"
                            required
                            autoComplete="email"
                            className="w-full px-4 py-2 bg-white/50 border border-gray-300 placeholder:text-gray-400 rounded-lg outline-none focus:ring-1 focus:ring-blue-400 transition "
                            placeholder="Enter your email"
                        />
                    </div>

                    <div>
                        <label className="block font-medium text-[#003D20] mb-2">Password</label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                required
                                autoComplete="current-password"
                                className="w-full px-4 py-2 pr-10 bg-white/50 border border-gray-300 placeholder:text-gray-400 rounded-lg outline-none focus:ring-1 focus:ring-blue-400 transition"
                                placeholder="Enter your password"
                            />
                            <button type="button" onClick={handleShowPassword}>
                                {
                                    showPassword ?
                                        <IoEyeOffOutline className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-700 " />
                                        :
                                        <IoEyeOutline className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-700 " />
                                }
                            </button>
                        </div>

                    </div>

                    <div className="flex items-center justify-between ">
                        <label className="flex items-center text-[14px]">
                            <input type="checkbox" name="checkbox" className="w-4 h-4" />
                            <span className="ml-2 text-[#48928e]">Remember me</span>
                        </label>
                        <Link to={'/forgotPasswordPage1'} className="text-[14px] text-[#003D20] underline">Forgot password?</Link>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-[#007456] hover:bg-[#016147] text-white cursor-pointer py-2 rounded-lg font-semibold transition shadow-md hover:shadow-lg">
                        Log in
                    </button>


                </form>

                <div className="text-[14px] text-center mt-4">
                    <p className="text-[#48928e]">
                        Don't have an account?{' '}
                        <Link to={`/signup`} className="text-[#003D20] underline font-semibold">Sign up</Link>
                    </p>
                </div>

                <div className="flex items-center my-4">
                    <div className="flex-grow border-t border-gray-400"></div>
                    <span className="flex-shrink mx-4 text-gray-600 text-[14px]">Or</span>
                    <div className="flex-grow border-t border-gray-400"></div>
                </div>

                {/* Social Login Section */}

                <div className="flex justify-center gap-4 ">
                    {/* Gmail/Google */}
                    <button onClick={handleGoogleLogin} className="p-2 bg-white/50 border border-gray-300 rounded-lg hover:bg-white/70 transition">
                        <img src="https://img.icons8.com/color/48/google-logo.png" alt="Google" className="w-5 h-5" />
                    </button>

                    {/* GitHub */}
                    <button onClick={handleGithubLogin} className="p-2 bg-white/50 border border-gray-300 rounded-lg hover:bg-white/70 transition">
                        <img src="https://img.icons8.com/ios-glyphs/48/github.png" alt="GitHub" className="w-5 h-5" />
                    </button>

                    {/* Facebook */}
                    <button className="p-2 bg-white/50 border border-gray-300 rounded-lg hover:bg-white/70 transition">
                        <img src="https://img.icons8.com/ios-filled/50/1877F2/facebook-f.png" alt="Facebook" className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContext, useState } from 'react';
import { AuthContext } from '../Providers/AuthProvider';



const Signup = () => {
    const navigate = useNavigate();
    const { signup, signinWithGoogle, signinWithGithub, setUserInformation, verifyEmail } = useContext(AuthContext);


    // Sign up with Email and password
    function handleSubmit(event) {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const checked = event.target.checkbox.checked;


        if (checked) {
            // we can check the password of the user is strong or not through
            // regular expression(atleast one uppercase, lowercase,number,special character)
            // const passCheck = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
            function validatePassword(password) {
                if (password.length < 6) {
                    return "Password must be at least 8 characters long";
                }
                if (!/[a-z]/.test(password)) {
                    return "Password must contain at least one lowercase letter";
                }
                if (!/[A-Z]/.test(password)) {
                    return "Password must contain at least one uppercase letter";
                }
                if (!/\d/.test(password)) {
                    return "Password must contain at least one number";
                }
                if (!/[@$!%*?&]/.test(password)) {
                    return "Password must contain at least one special character (@$!%*?&)";
                }
                return "valid"; // No error
            }
            if (validatePassword(password) === "valid") {
                signup(email, password)
                    .then(res => {
                        //sending verification email to check is the email valid or not
                        verifyEmail()
                            .then(() => {
                                toast.success('Verification Email Sent!');
                                setTimeout(() => navigate('/signupVerificationPage'), 500);
                                event.target.reset();
                            });

                        // set the user information in firebase to use them leter.
                        const userInfo = {
                            displayName: name,
                            photoURL: null,
                        }
                        setUserInformation(userInfo)
                            .then(res => {
                                // console.log('User information has been set successfully!')
                            })
                            .catch(error => {
                                // console.log('The user information has not been set.')
                            })
                    })
                    .catch(error => {
                        // console.log(error);
                        // console.log('Error Code/Message: ', error.code);
                        if (error.code === 'auth/email-already-in-use') {
                            toast.error('This email is already registered.');
                        }
                    })
            }
            else {
                toast.error(validatePassword(password));
            }
        }
        else {
            toast.error('Invalid Credentials!');
        }
    };


    // sign in with Google
    function handleGoogleLogin() {
        signinWithGoogle()
            .then(res => {
                toast.success('Login Successful!');
                // setTimeout(() => navigate('/home'), 1000);
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
                // setTimeout(() => navigate('/home'), 1000);
            })
            .catch(error => {
                toast.error('Invalid Credentials!');
            })
    }

    return (
        <div className="min-h-screen flex justify-center items-center mt-5 p-2">
            <div className="max-w-[450px] w-full  bg-green-50 backdrop-blur-lg border border-white/30 rounded-xl shadow-2xl p-8 sm:px-12 sm:pb-12 ">
                <div className="text-center mb-6">
                    <h1 className=" text-2xl md:text-3xl font-bold text-[#003D20]">Sign up</h1>
                    {/* <p className="text-[#48928e] mt-1">continue to get started</p> */}
                </div>

                {/* Social signup Section */}
                <div className="flex flex-col gap-4 ">
                    {/* Gmail */}
                    <button onClick={handleGoogleLogin} className="flex gap-1 justify-center items-center py-2 bg-white/50 border border-gray-300 rounded-lg hover:bg-white/70 transition">
                        <img src="https://img.icons8.com/color/48/google-logo.png" alt="Google" className="w-5 h-5" />
                        <p className='text-[#003D20]'>Sign up with Google</p>
                    </button>
                    {/* GitHub */}
                    <button onClick={handleGithubLogin} className="flex gap-1 justify-center items-center py-2 bg-white/50 border border-gray-300 rounded-lg hover:bg-white/70 transition">
                        <img src="https://img.icons8.com/ios-glyphs/48/github.png" alt="Github" className="w-5 h-5" />
                        <p className='text-[#003D20]'>Sign up with Github</p>
                    </button>
                </div>

                <div className="flex items-center my-4">
                    <div className="flex-grow border-t border-gray-400"></div>
                    <span className="flex-shrink mx-4 text-gray-600 text-[14px]">Or</span>
                    <div className="flex-grow border-t border-gray-400"></div>
                </div>

                <form onSubmit={handleSubmit} autoComplete="off" className="space-y-4">
                    <div>
                        {/* <label className="block text-sm font-medium text-gray-700 mb-2">Email address</label> */}
                        <input
                            type="text"
                            name="name"
                            required
                            autoComplete='name'
                            className="w-full px-4 py-2 bg-white/50 border border-gray-300 rounded-lg placeholder:text-gray-400 outline-none focus:ring-1 focus:ring-blue-400 transition "
                            placeholder="Your Name"
                        />
                    </div>
                    <div>
                        {/* <label className="block text-sm font-medium text-gray-700 mb-2">Email address</label> */}
                        <input
                            type="email"
                            name="email"
                            required
                            autoComplete='email'
                            className="w-full px-4 py-2 bg-white/50 border border-gray-300 rounded-lg placeholder:text-gray-400 outline-none focus:ring-1 focus:ring-blue-400 transition "
                            placeholder="Email address"
                        />
                    </div>

                    <div>
                        {/* <label className="block text-sm font-medium text-gray-700 mb-2">Password</label> */}
                        <input
                            type="password"
                            name="password"
                            required
                            autoComplete='new-password'
                            className="w-full px-4 py-2 bg-white/50 border border-gray-300 rounded-lg placeholder:text-gray-400  outline-none focus:ring-1 focus:ring-blue-400 transition"
                            placeholder="Password"
                        />
                    </div>

                    <div className="flex items-center text-[14px]">
                        <input type="checkbox" name="checkbox" className="w-4 h-4 text-blue-600 rounded" />
                        <span className="ml-2 text-[#48928e]">I agree <Link className='underline'>Terms of Service</Link> </span>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-[#007456] hover:bg-[#016147] text-white py-2 rounded-lg font-semibold cursor-pointer transition shadow-md hover:shadow-lg"
                    >
                        Sign up
                    </button>
                </form>

                <div className="text-[14px] text-center mt-4">
                    <p className="text-[#48928e]">
                        Already have an account?{' '}
                        <Link to={`/login`} className="text-[#016147] underline font-semibold">Login</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Signup;
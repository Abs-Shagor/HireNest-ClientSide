import { MdWork } from "react-icons/md";
import { IoMdEye } from "react-icons/io";
import { BiSolidMessageRounded } from "react-icons/bi";
import { SlCalender } from "react-icons/sl";
import { IoMdShareAlt } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoMdTrendingUp } from "react-icons/io";
import { CiBookmark } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
import { Link } from 'react-router-dom';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { PieChart, Pie, Cell, ResponsiveContainer, Label } from 'recharts';
import { useContext } from "react";
import { DataContext } from "../Providers/DataProvider";


const JobStatics = () => {
    // for followers and follwing
    // const data = [
    //     { point: 'Q1', Following: 0, Followers: 0 },
    //     { point: 'Q2', Following: 40, Followers: 70 },
    //     { point: 'Q3', Following: 115, Followers: 110 },
    //     { point: 'Q4', Following: 210, Followers: 170 }
    // ];
    const data = [
        { point: 'Q1', Following: 0, Followers: 0 },
        { point: 'Q2', Following: 0, Followers: 0 },
        { point: 'Q3', Following: 0, Followers: 0 },
        { point: 'Q4', Following: 0, Followers: 0 }
    ];
    // for pie chart
    const data1 = [
        { name: 'Filled', value: 61 },
        { name: 'Remaining', value: 39 }
    ];
    const data2 = [
        { name: 'Filled', value: 17 },
        { name: 'Remaining', value: 83 }
    ];
    const data3 = [
        { name: 'Filled', value: 22 },
        { name: 'Remaining', value: 78 }
    ];
    const COLORS = ['#f97316', '#f3f4f6'];

    //
    const { jobs } = useContext(DataContext);
    //capitalize first word
    function capitalize(str) {
        if (!str) return 'Co.'; // Handle undefined/null
        if (typeof str !== 'string') {
            str = String(str); // Convert numbers/other types to string
        }
        return str.split(' ').map(w => w[0]?.toUpperCase() + w.slice(1)).join(' ');
    }
    function set_salary(salary) {
        if (salary.toLowerCase() !== 'negotiable') return `${salary} BDT/Month`;
        return 'Negotiable';
    }
    function timeAgo(date) {
        const formatter = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });
        const diff = (new Date(date) - Date.now()) / 1000;

        const intervals = {
            year: 31536000,
            month: 2592000,
            week: 604800,
            day: 86400,
            hour: 3600,
            minute: 60
        };

        for (const [unit, seconds] of Object.entries(intervals)) {
            if (Math.abs(diff) > seconds) {
                return formatter.format(Math.round(diff / seconds), unit);
            }
        }
        return 'Just now';
    }

    return (

        <div>
            {/* <marquee behavior="" direction="">This section is under development.</marquee> */}
            <div className='grid gap-10 mt-10' >
                {/* top part */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 xl:gap-10 ">
                    <div className=' bg-green-50 hover:bg-green-100 h-[120px] max-w-[400px] cursor-pointer rounded-t-xl p-5 border-b-5 border-b-green-500'>
                        <div className="flex items-center justify-between">
                            <p className="text-[34px] text-green-500 font-semibold ">00</p>
                            <MdWork className="w-10 h-10 text-green-500 " />
                        </div>
                        <p className="text-[18px] text-green-400 mt-2">Application Sent</p>
                    </div>
                    <div className=' bg-amber-50 hover:bg-amber-100 cursor-pointer h-[120px] max-w-[400px] rounded-t-xl p-5 border-b-5 border-b-amber-500'>
                        <div className="flex items-center justify-between">
                            <p className="text-[34px] text-amber-500 font-semibold ">00</p>
                            <IoMdEye className="w-10 h-10 text-amber-500 " />
                        </div>
                        <p className="text-[18px] text-amber-400 mt-2">Profile Viewed</p>
                    </div>
                    <div className=' bg-blue-50 hover:bg-blue-100 cursor-pointer h-[120px] max-w-[400px] rounded-t-xl p-5 border-b-5 border-b-blue-500'>
                        <div className="flex items-center justify-between">
                            <p className="text-[34px] text-blue-500 font-semibold ">00</p>
                            <SlCalender className="w-10 h-10 text-blue-500 " />
                        </div>
                        <p className="text-[18px] lg:text-[17px] xl:text-[18px] text-blue-400 mt-2">Interview Schedule</p>
                    </div>
                    <div className=' bg-purple-50 hover:bg-purple-100 cursor-pointer h-[120px] max-w-[400px] rounded-t-xl p-5 border-b-5 border-b-purple-500'>
                        <div className="flex items-center justify-between">
                            <p className="text-[34px] text-purple-500 font-semibold ">00</p>
                            <IoMdShareAlt className="w-10 h-10 text-purple-500 " />
                        </div>
                        <p className="text-[18px] text-purple-400 mt-2">App. Answered</p>
                    </div>
                    <div className=' bg-orange-50 hover:bg-orange-100 cursor-pointer h-[120px] max-w-[400px] rounded-t-xl p-5 border-b-5 border-b-orange-500'>
                        <div className="flex items-center justify-between">
                            <p className="text-[34px] text-orange-500 font-semibold ">00</p>
                            <BiSolidMessageRounded className="w-10 h-10 text-orange-500 " />
                        </div>
                        <p className="text-[18px] text-orange-400 mt-2">Unread Message</p>
                    </div>
                </div>

                {/* middle part */}
                <div className="grid xl:grid-cols-2 gap-10">
                    <div className="flex-1 bg-teal-50 rounded-xl p-5 ">
                        <div className="flex justify-between items-center mb-5">
                            <h4 className="text-[20px] font-semibold">Network</h4>
                            <BsThreeDotsVertical className="cursor-pointer" />
                        </div>
                        <div className="flex flex-col-reverse sm:flex-row justify-center  gap-5 sm:gap-10">
                            <div >
                                <LineChart width={320} height={200} data={data}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="point" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Line type="monotone" dataKey="Followers" stroke="#007456" />
                                    <Line type="monotone" dataKey="Following" stroke="#FFB347" />
                                </LineChart>
                            </div>
                            <div className="flex flex-row justify-evenly sm:flex-col gap-5 ">
                                <div className="flex items-center gap-3">
                                    <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#007456]"></div>
                                    <div className=" ">
                                        <p className="font-semibold">00</p>
                                        <p className="text-gray-500 sm:text-[18px]">Followers</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#FFB347]"></div>
                                    <div className=" ">
                                        <p className="font-semibold">00</p>
                                        <p className="text-gray-500 sm:text-[18px]">Following</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 bg-teal-50 rounded-xl p-5">
                        <div className="flex justify-between items-center mb-5">
                            <h4 className="text-[20px] font-semibold flex items-center gap-1">Trending<IoMdTrendingUp className="h-7 w-7 text-green-600" /></h4>
                            <BsThreeDotsVertical className="cursor-pointer" />
                        </div>
                        <div className="flex flex-col sm:flex-row gap-10  justify-evenly">
                            <div className="flex flex-col items-center">
                                <PieChart width={150} height={150}>
                                    <Pie
                                        data={data1}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={40}
                                        outerRadius={60}
                                        fill="#8884d8"
                                        dataKey="value"
                                        startAngle={90}
                                        endAngle={450}
                                    >
                                        {data1.map((entry, index) => (
                                            <Cell key={index} fill={COLORS[index]} />
                                        ))}
                                        <Label
                                            value="61%"
                                            position="center"
                                            fill="#f97316"
                                            fontSize={24}
                                            fontWeight="bold"
                                        />
                                    </Pie>
                                </PieChart>

                                <p className="font-semibold">Developer</p>
                                <p className="text-gray-500 text-[18px]">4,880 Vacancies</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <PieChart width={150} height={150}>
                                    <Pie
                                        data={data2}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={40}
                                        outerRadius={60}
                                        fill="#8884d8"
                                        dataKey="value"
                                        startAngle={90}
                                        endAngle={450}
                                    >
                                        {data2.map((entry, index) => (
                                            <Cell key={index} fill={COLORS[index]} />
                                        ))}
                                        <Label
                                            value="17%"
                                            position="center"
                                            fill="#f97316"
                                            fontSize={24}
                                            fontWeight="bold"
                                        />
                                    </Pie>
                                </PieChart>

                                <p className="font-semibold">Manager</p>
                                <p className="text-gray-500 text-[18px]">1,360 Vacancies</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <PieChart width={150} height={150}>
                                    <Pie
                                        data={data3}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={40}
                                        outerRadius={60}
                                        fill="#8884d8"
                                        dataKey="value"
                                        startAngle={90}
                                        endAngle={450}
                                    >
                                        {data3.map((entry, index) => (
                                            <Cell key={index} fill={COLORS[index]} />
                                        ))}
                                        <Label
                                            value="22%"
                                            position="center"
                                            fill="#f97316"
                                            fontSize={24}
                                            fontWeight="bold"
                                        />
                                    </Pie>
                                </PieChart>

                                <p className="font-semibold">Others</p>
                                <p className="text-gray-500 text-[18px]">1,760 Vacancies</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* bottom part */}
                <div>
                    <h4 className="text-[20px] font-semibold mb-5">Reccomended Jobs</h4>
                    {
                        jobs.length ?
                            <div className='grid lg:grid-cols-2 gap-5'>
                                {
                                    jobs.slice(0, 6).map(job => {
                                        return (
                                            <div key={job._id} className='border border-[#93c0b4] sm:border-white shadow2 rounded-xl'>
                                                <div className='relative flex gap-3 sm:gap-5 p-3 sm:p-5'>
                                                    <div>
                                                        <img src={job.company_logo} alt="img" className='h-10 w-10 sm:h-15 sm:w-15 rounded-sm shadow2 scale1 ' />
                                                    </div>
                                                    <div className='absolute right-5 top-4 flex gap-1 items-center text-clr2'>
                                                        <CiBookmark />
                                                        <p className='text-[14px]'>Save Job</p>
                                                    </div>
                                                    <div className='flex-1 grid gap-5'>
                                                        <div className='flex justify-between'>
                                                            <div>
                                                                <h3 className='text-[18px] sm:text-[22px] text-[#003D20] font-semibold '>{capitalize(job.position_name.trim())}</h3>
                                                                <div className='flex gap-1 text-[12px]  sm:text-[14px] text-clr2 '>
                                                                    <p>{job.company_name.trim()}</p>
                                                                    <p>|</p>
                                                                    <p>{capitalize(job.location.trim())}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='flex gap-3 sm:gap-5 justify-between text-[14px] sm:text-[16px] '>
                                                            <div>
                                                                <p className='text-clr2'>Experience</p>
                                                                <p className='text-[#003D20] font-semibold'>{job.experience.trim()} Years</p>
                                                            </div>
                                                            <div>
                                                                <p className='text-clr2'>Job Type</p>
                                                                <p className='text-[#003D20] font-semibold'>{capitalize(job.job_type.trim())}</p>
                                                            </div>
                                                            <div>
                                                                <p className='text-clr2'>Salary</p>
                                                                <p className='text-[#003D20] font-semibold'>{set_salary(job.salary.trim())}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='flex gap-3 sm:gap-5 justify-between items-center bg-green-50 rounded-b-xl  px-5 py-2'>
                                                    <div className='text-clr2 text-[12px] sm:text-[14px] '>{timeAgo(job.createdAt)} </div>
                                                    <div className='flex items-center gap-2 lg:gap-3 ' >
                                                        <Link to={`/jobdetails/${job._id}`} className="btn btn-ghost bg-[#fbfdfd] text-[#007456] shadow-[0_1px_2px_#93c0b4] hover:text-white hover:bg-[#007456] rounded-xl  ">View Details</Link>
                                                        <Link to={job.apply_link} target="_blank" rel="noopener noreferrer" className="btn bg-[#007456] hover:bg-[#016147] text-white shadow-[0_1px_2px_#007456] hover:text-white rounded-xl ">Apply Now</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            :
                            <div className='h-screen flex flex-col gap-5 items-center mt-20 '>
                                <IoIosSearch className="w-[50px] h-[50px] sm:w-[100px] sm:h-[100px]" />
                                <p className='text-[20px] font-semibold '>Sorry, No results found!</p>
                                <p>Try different keywords or browse all categories</p>
                            </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default JobStatics;
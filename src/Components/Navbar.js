import React from 'react';
import { Link, Outlet } from "react-router-dom";
import { TbLayoutDashboard } from "react-icons/tb";
import { TbBellRinging } from "react-icons/tb";
import { SiBookstack } from "react-icons/si";
import { BsFillPeopleFill } from "react-icons/bs";
import { TbWriting } from "react-icons/tb";
import { HiOutlineClipboardList } from "react-icons/hi";
import { FaStream } from "react-icons/fa";

const Navbar = () => {
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col ">
               <div className=''>
                <label htmlFor="my-drawer" className="btn btn-square btn-ghost lg:hidden mt-5 ml-5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </label>
               </div>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                <h1 className='text-2xl text-primary text-center font-bold border-b-2 pb-10 mb-5'>School Space</h1>
                    <li><Link className='hover:text-primary' to='/'> <TbLayoutDashboard></TbLayoutDashboard> Dashboard</Link></li>
                    <li><Link className='hover:text-primary' to='#'> <SiBookstack></SiBookstack> Courses</Link></li>
                    <li><Link className='hover:text-primary' to='/students'> <BsFillPeopleFill></BsFillPeopleFill> Students</Link></li>
                    <li><Link className='hover:text-primary' to='#'> <TbWriting></TbWriting> Exam</Link></li>
                    <li><Link className='hover:text-primary' to='#'> <HiOutlineClipboardList></HiOutlineClipboardList> Notice Board</Link></li>
                    <li><Link className='hover:text-primary' to='#'> <HiOutlineClipboardList></HiOutlineClipboardList> Result</Link></li>
                    <li><Link className='hover:text-primary' to='#'> <FaStream></FaStream> Live Class</Link></li>
                    <li><Link className='hover:text-primary' to='#'> <TbBellRinging></TbBellRinging> Notifications</Link></li>                   
                </ul>

            </div>
        </div>
    );
};

export default Navbar;
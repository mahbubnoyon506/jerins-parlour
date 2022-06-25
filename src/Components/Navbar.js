import React from 'react';
import { Link, Outlet } from "react-router-dom";
const Navbar = () => {
    return (
        <div class="drawer drawer-mobile">
            <input id="my-drawer" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col ">
               <div className=''>
                <label for="my-drawer" class="btn btn-square btn-ghost lg:hidden mt-5 ml-5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </label>
               </div>
                <Outlet></Outlet>
            </div>
            <div class="drawer-side">
                <label for="my-drawer" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                <h1 className='text-2xl text-primary text-center font-bold border-b-2 pb-10 mb-5'>School Space</h1>
                    <li><Link className='hover:text-primary' to='#'>Dashboard</Link></li>
                    <li><Link className='hover:text-primary' to='#'>Courses</Link></li>
                    <li><Link className='hover:text-primary' to='/students'>Students</Link></li>
                    <li><Link className='hover:text-primary' to='#'>Exam</Link></li>
                    <li><Link className='hover:text-primary' to='#'>Notice Board</Link></li>
                    <li><Link className='hover:text-primary' to='#'>Result</Link></li>
                    <li><Link className='hover:text-primary' to='#'>Live Class</Link></li>
                    <li><Link className='hover:text-primary' to='#'>Notifications</Link></li>                   
                </ul>

            </div>
        </div>
    );
};

export default Navbar;
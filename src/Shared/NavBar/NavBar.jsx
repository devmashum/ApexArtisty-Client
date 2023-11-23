import { Link } from 'react-router-dom';
import { FaRegUserCircle } from "react-icons/fa";
import logo from '../../assets/Logo/logo.png'
const NavBar = () => {
    const navbarLinks = <>

        <Link className='mr-3 text-xl font-bold' to={'/'}>Home</Link>
        <Link className='mr-3 text-xl font-bold' to={'/allContest'}>All Contest</Link>
    </>
    return (
        <div className="navbar  p-5 fixed z-10 bg-opacity-40 bg-black text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navbarLinks}
                    </ul>

                </div>
                <div className='flex justify-center items-center'>
                    <img className='w-20 h-22 ml-5 ' src={logo} alt="" />
                    <a className=" lg:text-4xl text-2xl font-extrabold text-center ">ApexArtistry</a>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">

                {navbarLinks}
            </div>
            <div className="navbar-end text-3xl">

                <div className=' dropdown dropdown-end'>
                    <label tabIndex={0} className="btn btn-ghost text-3xl  ">
                        <FaRegUserCircle />
                    </label>
                    <ul tabIndex={0} className=" menu menu-base dropdown-content mt-3 z-[1] p-5 m-5 shadow bg-base-100 rounded-box w-52">

                        <Link className='text-xl font-bold'>User Name</Link>
                        <Link className='text-xl font-bold'>Dashboard</Link>
                        <Link className='text-xl font-bold'>Log Out</Link>

                    </ul>
                </div>
            </div>

        </div>
    );
};

export default NavBar;
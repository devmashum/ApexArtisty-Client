import { Link, NavLink } from 'react-router-dom';
import { FaCartPlus, FaRegUserCircle, FaSignInAlt } from "react-icons/fa";
import { BiLogInCircle } from "react-icons/bi";
import logo from '../../assets/Logo/logo.png'
import useAuth from '../../Hooks/useAuth';
import useCart from '../../Hooks/useCart';
const NavBar = () => {
    const [cart] = useCart();
    const { user, logOut } = useAuth();
    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }
    const navbarLinks = <>

        <NavLink className={({ isActive }) => isActive ? 'btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-base font-bold text-white' : 'btn-ghost btn text-base font-bold text-white'} to={'/'}>Home</NavLink>
        <NavLink className={({ isActive }) => isActive ? 'btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-base font-bold text-white mr-5' : 'btn-ghost btn text-base font-bold text-white '} to={'/allContest'}>All Contest</NavLink>
        <NavLink className={({ isActive }) => isActive ? 'btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-base font-bold text-white mr-5' : 'btn-ghost btn text-base font-bold text-white '} to={'/aboutUs'}>About Us</NavLink>
        <NavLink className={({ isActive }) => isActive ? 'btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-base font-bold text-white mr-5' : 'btn-ghost btn text-base font-bold text-white '} to={'/contact'}>Contact</NavLink>

        {
            user ? <NavLink className={({ isActive }) => isActive ? 'btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-base font-bold text-white mr-5' : 'btn-ghost btn text-xl font-bold text-white '} to={'/dashboard/cart'}><FaCartPlus></FaCartPlus> <button className=' btn-secondary btn btn-xs'>{cart.length}</button> </NavLink> :
                <div> <NavLink className={({ isActive }) => isActive ? 'btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-base font-bold text-white mr-5' : 'btn-ghost btn text-xl font-bold text-white '} to={'/login'}><FaCartPlus></FaCartPlus> <button className=' btn-secondary btn btn-xs'>0</button> </NavLink></div>
        }
    </>





    return (
        <div className="navbar  p-2  z-10 lg:fixed bg-opacity-50 bg-blue-400">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-md dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52 text-white bg-gradient-to-r from-cyan-500 to-blue-500  ">
                        {navbarLinks}




                    </ul>

                </div>
                <Link to={'/'}>  <div className='flex justify-center items-center'>
                    <img className='w-20 h-22 ml-5 ' src={logo} alt="" />
                    <a className=" lg:text-4xl text-2xl font-extrabold text-center text-white ">ApexArtistry</a>
                </div></Link>
            </div>
            <div className="navbar-center hidden lg:flex">

                {navbarLinks}
            </div>
            <div className="navbar-end ">

                {user ?
                    <div>
                        < NavLink className={'text-2xl btn mr-5 hidden'} to={'/registration'}>Registration</NavLink>
                    </div> : <div>
                        <div className='flex flex-col items-center pt-5'>

                            <div>
                                <Link className='btn btn-success  font-bold text-white text-2xl mr-2 ' to={'/registration'}><FaSignInAlt /></Link>
                            </div>
                            <div>
                                <Link className='text-white'>Sign Up</Link>
                            </div>

                        </div>
                    </div>
                }


                {
                    user ? <div className=' dropdown dropdown-end'>

                        <label tabIndex={0} className=" btn btn-secondary text-3xl">
                            <FaRegUserCircle />
                        </label>
                        <ul tabIndex={0} className=" menu menu-base dropdown-content mt-3 z-[1]  shadow bg-base-100 rounded-box bg-gradient-to-r from-cyan-500 to-blue-500 text-xl ">

                            <Link className={({ isActive }) => isActive ? ' text-2xl font-bold  text-secondary ' : 'text-2xl font-bold '}> <span className='text-fuchsia-600 text-2xl font-bold'>{user?.displayName}
                            </span>
                            </Link>
                            <hr />
                            <Link to={'/dashboard'} className={({ isActive }) => isActive ? 'btn btn-primary text-base font-bold text-white' : 'btn-ghost btn text-base font-bold text-white'}>Dashboard</Link>
                            <hr />
                            <Link onClick={handleLogout} className={({ isActive }) => isActive ? 'btn btn-primary text-base font-bold text-white' : 'btn-ghost btn text-base font-bold text-white'}>Log Out </Link>

                        </ul>
                    </div>
                        :

                        <div>

                            <div className='flex flex-col items-center pt-5'>

                                <div>
                                    <Link className='btn btn-secondary  font-bold text-white text-2xl ' to={'login'}><BiLogInCircle /></Link>
                                </div>
                                <div>
                                    <Link className='text-white'>Login</Link>
                                </div>

                            </div>
                        </div>
                }
            </div>

        </div >
    );
};

export default NavBar;
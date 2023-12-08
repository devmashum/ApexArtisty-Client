import { Link, NavLink } from 'react-router-dom';
import { FaCartPlus, FaRegUserCircle, FaSignInAlt } from "react-icons/fa";
import { BiLogInCircle } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
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

        <NavLink className={({ isActive }) => isActive ? 'btn btn-outline text-white' : 'btn-ghost btn text-base font-bold text-white'} to={'/'}>Home</NavLink>
        <NavLink className={({ isActive }) => isActive ? 'btn btn-outline text-base font-bold text-white mr-5' : 'btn-ghost btn text-base font-bold text-white '} to={'/allContest'}>All Contest</NavLink>
        <NavLink className={({ isActive }) => isActive ? 'btn btn-outline text-base font-bold text-white mr-5' : 'btn-ghost btn text-base font-bold text-white '} to={'/aboutUs'}>About Us</NavLink>
        <NavLink className={({ isActive }) => isActive ? 'btn btn-outline text-base font-bold text-white mr-5' : 'btn-ghost btn text-base font-bold text-white '} to={'/contact'}>Contact</NavLink>

        {
            user ? <NavLink className={({ isActive }) => isActive ? 'btn  text-base font-bold text-white mr-5' : 'btn-ghost btn text-xl font-bold text-white '} to={'/dashboard/cart'}><FaCartPlus></FaCartPlus> <button className='bg-orange-400 btn btn-xs'><span className='text-white text-base'>{cart.length}</span></button></NavLink> :

                <div> <NavLink className={({ isActive }) => isActive ? 'btn  text-base font-bold text-white mr-5' : 'btn-ghost btn text-xl font-bold text-white '} to={'/login'}><FaCartPlus></FaCartPlus> <button className='bg-orange-400 btn btn-xs'>0</button> </NavLink></div>
        }
    </>





    return (
        <div className="navbar  p-2 bg-[#0F1111]">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <GiHamburgerMenu className='text-white text-2xl' />
                    </label>
                    <ul tabIndex={0} className="menu menu-md dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52 text-white bg-[#0F1111]  ">
                        {navbarLinks}




                    </ul>

                </div>
                           
              <div>
              <a href='/' className=" lg:text-4xl text-2xl font-extrabold text-center text-white ">ApexArtistry</a>
                          
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">

                {navbarLinks}
            </div>
            <div className="navbar-end ">

                {user ?
                    <div>
                        <NavLink NavLink className={'text-2xl btn mr-5 hidden'} to={'/registration'}>Registration</NavLink>
                    </div> : <div>
                        <div className='flex flex-col items-center pt-5'>

                            <div>
                                <Link className='btn btn-ghost font-bold text-white text-2xl mr-2 ' to={'/registration'}><FaSignInAlt /></Link>
                            </div>
                            <div>
                                <Link className='text-white'>Sign Up</Link>
                            </div>

                        </div>
                    </div>
                }


                {
                    user ? <div className=' dropdown dropdown-end'>

                        <label tabIndex={0} className=" btn btn-ghost text-white bg-orange-400 text-3xl">
                            <FaRegUserCircle />
                        </label>
                        <ul tabIndex={0} className="menu menu-base dropdown-content mt-3 z-[1]  shadow rounded-box bg-[#0F1111] text-xl ">

                            <Link className={({ isActive }) => isActive ? ' text-2xl font-bold  text-secondary ' : 'text-2xl font-bold '}> <span className='text-orange-400 text-2xl font-bold'>{user?.displayName}
                            </span>
                            </Link>
                            <hr />
                            {/* <Link to={'/dashboard'} className={({ isActive }) => isActive ? ' text-2xl font-bold  text-secondary ' : 'text-2xl font-bold '}> <span className='text-white text-xl font-bold'>Dashboard
                            </span>
                            </Link> */}

                            {/* <Link to={'/dashboard'} className={({ isActive }) => isActive ? 'btn btn-primary text-base font-bold text-white' : 'btn-ghost btn text-base font-bold text-white'}>Dashboard</Link> */}
                            <hr />
                            {/* <Link onClick={handleLogout} className={({ isActive }) => isActive ? 'btn btn-primary text-base font-bold text-white' : 'btn-ghost btn text-base font-bold text-white'}>Log Out </Link> */}
                            <Link to={'/dashboard'} className={({ isActive }) => isActive ? ' text-2xl font-bold  text-secondary ' : 'text-2xl font-bold '}> <span className='text-white text-xl font-bold'>Dashboard
                            </span>
                            </Link>
                           <hr />
                            <Link to={'/'} onClick={handleLogout} className={({ isActive }) => isActive ? 'btn font-bold text-white' : 'btn-ghost btn text-base font-bold text-white'}> <span className='text-white'>Log Out</span> </Link>

                        </ul>
                    </div>
                        :

                        <div>

                            <div className='flex flex-col items-center pt-5'>

                                <div>
                                    <Link className='btn btn-ghost  font-bold text-white text-2xl ' to={'/login'}><BiLogInCircle /></Link>
                                </div>
                                <div>
                                    <Link className='text-white'>Login</Link>
                                </div>

                            </div>
                        </div>
                }
            </div>

        </div>
    );
};

export default NavBar;
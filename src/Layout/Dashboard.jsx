import { NavLink, Outlet } from "react-router-dom"
import { IoHomeOutline } from "react-icons/io5";
import useAdmin from "../Hooks/useAdmin";
import useAuth from "../Hooks/useAuth";


const Dashboard = () => {
    const { user } = useAuth();
    const [isAdmin] = useAdmin();
    const isContentCreator = false;
    return (
        <div className="flex ">
            <div className="lg:w-64 min-h-screen bg-gradient-to-r from-cyan-500 to-blue-500 pt-10">

                {
                    isAdmin ? <><h2 className="pl-5 divider text-xl border border-green-300 p-5 m-3 rounded-3xl font-bold">Admin Panel</h2>
                        <p className="w-full btn btn-sm ">{user.email}</p>
                        <ul className="menu text-xl">
                            <li><NavLink to='/dashboard/users '>Manage User</NavLink></li>
                        </ul>
                        <ul className="menu text-xl">
                            <li><NavLink to='/dashboard/allUsers '>Manage Contest</NavLink></li>
                        </ul></> : <>
                    </>
                }
                {
                    !isAdmin ? <><h2 className="pl-5 divider text-xl border border-green-300 p-5 m-3 rounded-3xl font-bold">User Panel</h2>
                        <p className="w-full btn btn-sm ">{user.email}</p>
                        <ul className="menu text-xl">
                            <li><NavLink to='/dashboard/addArts '>My Profile</NavLink></li>
                        </ul>
                        <ul className="menu text-xl">
                            <li><NavLink to='/dashboard/addArts '>Participated Contest</NavLink></li>
                        </ul>
                        <ul className="menu text-xl">
                            <li><NavLink to='/dashboard/addArts '>Winning Contest</NavLink></li>
                        </ul></> : <></>
                }

                {
                    isContentCreator ? <>  <h2 className="pl-5 divider text-xl border border-green-300 p-5 m-3 rounded-3xl font-bold">Creator Panel</h2>
                        <p className="w-full btn btn-sm ">{user.email}</p>
                        <ul className="menu text-xl">
                            <li><NavLink to='/dashboard/cart '>Add Contest</NavLink></li>
                        </ul>
                        <ul className="menu text-xl">
                            <li><NavLink to='/'>My Created Contest</NavLink></li>
                        </ul>
                        <ul className="menu text-xl">
                            <li><NavLink to='/'>Contest Submitted </NavLink></li>
                        </ul></> : <></>
                }


                <ul className="menu text-xl btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 m-1  text-white">
                    <li ><NavLink to='/'><IoHomeOutline /> Back to Home </NavLink></li>
                </ul>
            </div>
            <div className="flex-1 pt-10 ml-10">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;